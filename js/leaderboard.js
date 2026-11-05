/* =====================================================================
   STUDENT REGISTRATION + LEADERBOARD
   Storage, in order of preference:
     1. claude.ai "db" (when this page is opened as a published claude.ai artifact)
     2. Google Sheet via Apps Script (set LEADERBOARD_SHEET_URL in js/config.js)
     3. This device only (localStorage)
   Email and phone are never shown on the leaderboard.
   ===================================================================== */

const STKEY="mb-student";
const LB={mode:null,ready:null,db:null,user:null,uid:null,owner:false};
LB.init=function(){
  if(LB.ready) return LB.ready;
  LB.ready=(async()=>{
    try{
      if(window.claude && typeof window.claude.use==="function"){
        const [db,user]=await Promise.all([window.claude.use("db"),window.claude.use("user")]);
        if(db && user){ const uid=await user.id(); if(uid){ LB.db=db; LB.user=user; LB.uid=uid; LB.owner=await user.isOwner(); LB.mode="db"; return; } }
      }
    }catch(e){}
    LB.mode = LEADERBOARD_SHEET_URL ? "sheet" : "local";
  })();
  return LB.ready;
};
const shortName=n=>{const p=String(n||"").replace(/[<>]/g,"").trim().split(/\s+/).filter(Boolean); if(!p.length) return "Student"; const cap=s=>s.charAt(0).toUpperCase()+s.slice(1); return p.length>1?cap(p[0])+" "+p[p.length-1].charAt(0).toUpperCase()+".":cap(p[0]);};
async function emailKey(email){
  try{ const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(String(email).trim().toLowerCase())); return [...new Uint8Array(b)].slice(0,8).map(x=>x.toString(16).padStart(2,"0")).join(""); }catch(e){ return ""; }
}
const better=(a,b)=>a.total>b.total||(a.total===b.total&&(a.viol<b.viol||(a.viol===b.viol&&a.mins<b.mins)));
function withTimeout(p,ms){ return Promise.race([p,new Promise((_,rej)=>setTimeout(()=>rej(new Error("timeout")),ms))]); }
async function sheetPost(payload){
  const r=await withTimeout(fetch(LEADERBOARD_SHEET_URL,{method:"POST",body:JSON.stringify(payload)}),12000);
  const j=await r.json(); if(!j.ok) throw new Error(j.error||"rejected"); return j;
}

LB.register=async function(st,ch){
  await LB.init();
  if(LB.mode==="db") return LB.db.doc("contacts/"+LB.uid).set({name:st.name,school:st.school||"",email:st.email,phone:st.phone,chapter:ch,at:new Date().toISOString()});
  if(LB.mode==="sheet") return sheetPost({action:"register",ch,name:st.name,school:st.school||"",email:st.email,phone:st.phone});
};
LB.submit=async function(ch,entry,st){
  await LB.init();
  if(LB.mode==="db"){
    const ref=LB.db.doc("lb/"+LB.uid), snap=await ref.get();
    const cur=snap.exists?JSON.parse(JSON.stringify(snap.data())):{};
    if(!cur[ch]||better(entry,cur[ch])) cur[ch]=entry;
    cur.name=entry.name; cur.school=entry.school||""; await ref.set(cur); return;
  }
  if(LB.mode==="sheet"){ await sheetPost({action:"score",ch,name:st.name,school:st.school||"",email:st.email,phone:st.phone,auto:entry.auto,self:entry.self,viol:entry.viol,mins:entry.mins}); return; }
  const k=await emailKey(st.email), list=jget("mb-lb-"+ch,[]), i=list.findIndex(r=>r.key===k);
  const row={...entry,key:k};
  if(i<0) list.push(row); else if(better(row,list[i])) list[i]=row;
  jset("mb-lb-"+ch,list);
};
LB.board=async function(ch){
  await LB.init();
  let rows=[];
  if(LB.mode==="db"){
    const snap=await LB.db.collection("lb").get();
    rows=snap.docs.filter(d=>d.exists&&d.data()&&d.data()[ch]).map(d=>({...d.data()[ch],name:d.data().name,me:d.id===LB.uid}));
  }else{
    const st=jget(STKEY,null), myKey=st?await emailKey(st.email):"";
    if(LB.mode==="sheet"){
      const r=await withTimeout(fetch(LEADERBOARD_SHEET_URL+"?action=board&ch="+encodeURIComponent(ch)),12000);
      const j=await r.json(); rows=(j.rows||[]);
    }else rows=jget("mb-lb-"+ch,[]);
    rows=rows.map(r=>({...r,me:!!myKey&&r.key===myKey}));
  }
  rows.forEach(r=>{r.total=+r.total||0;r.viol=+r.viol||0;r.mins=+r.mins||0;});
  return rows.sort((a,b)=>better(a,b)?-1:better(b,a)?1:0).slice(0,50);
};

function loadBoard(c){
  const box=document.getElementById("lbBox"); if(!box) return;
  box.innerHTML=`<div class="lb-head"><h3>Leaderboard: Chapter ${c.num}</h3><span class="lb-mode">Loading…</span></div><p class="lb-wait">Loading scores…</p>`;
  let done=false;
  const t=setTimeout(()=>{ if(!done){ const w=box.querySelector(".lb-wait"); if(w) w.textContent="The leaderboard can’t be reached right now. Your score is still saved on this device."; } },10000);
  LB.board(c.id).then(rows=>{
    done=true; clearTimeout(t);
    const label={db:"Shared with everyone on this page",sheet:"Shared leaderboard",local:"Saved on this device only"}[LB.mode];
    const medal=i=>i<3?`<span class="lb-medal m${i}">${i+1}</span>`:`<span class="lb-rank">${i+1}</span>`;
    box.innerHTML=`<div class="lb-head"><h3>Leaderboard: Chapter ${c.num}</h3><span class="lb-mode">${label}</span></div>
      ${rows.length?`<div class="tbl"><table class="lb-t"><tr><th>Rank</th><th>Student</th><th>Score</th><th>A (auto)</th><th>B–E</th><th>Warnings</th><th>Time</th></tr>
      ${rows.map((r,i)=>`<tr class="${r.me?'me':''}"><td>${medal(i)}</td><td class="lb-n"></td><td><b>${r.total}</b> / ${EXAM_TOTAL}${r.checked?' <span class="tag g">teacher-checked</span>':''}</td><td>${+r.auto||0}</td><td>${+r.self||0}</td><td>${r.viol}</td><td>${r.mins} min</td></tr>`).join("")}</table></div>`
      :`<p class="lb-wait">No scores yet. Be the first to finish the paper!</p>`}
      <p class="lb-foot">Ranked by total score, then fewer warnings, then less time. Each student’s best attempt counts. Section A is checked automatically; Sections B–E are self-checked against the marking scheme${LB.mode==="sheet"?" unless a teacher has checked them":""}. Only first names, surname initials and school names are shown.</p>`;
    box.querySelectorAll(".lb-n").forEach((td,i)=>{ td.textContent=rows[i].name||"Student"; if(rows[i].school){ const sc=document.createElement("span"); sc.className="lb-school"; sc.textContent=rows[i].school; td.append(sc); } if(rows[i].me){ const y=document.createElement("span"); y.className="tag b"; y.textContent="you"; const s0=td.querySelector(".lb-school"); td.insertBefore(y,s0); td.insertBefore(document.createTextNode(" "),y); } });
    const mode=box.querySelector(".lb-mode"); if(mode) mode.textContent=label;
    if(LB.mode==="db"&&LB.owner) loadOwnerPanel();
  }).catch(()=>{ done=true; clearTimeout(t); const w=box.querySelector(".lb-wait"); if(w) w.textContent="The leaderboard can’t be reached right now. Please try again later."; });
}
async function loadOwnerPanel(){
  const box=document.getElementById("ownerBox"); if(!box) return;
  try{
    const snap=await LB.db.collection("contacts").get();
    const rows=snap.docs.filter(d=>d.exists).map(d=>d.data());
    box.innerHTML=`<details class="q owner"><summary>Teacher view: registered students (${rows.length}) <span class="marks">only you can see this</span></summary><div class="tbl" style="padding:0 14px 14px"><table><tr><th>Name</th><th>School</th><th>Email</th><th>Phone</th><th>Chapter</th><th>Registered</th></tr>${rows.map(()=>`<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>`).join("")}</table></div></details>`;
    box.querySelectorAll("tr").forEach((tr,i)=>{ if(!i) return; const r=rows[i-1], tds=tr.querySelectorAll("td"); [r.name,r.school||"",r.email,"+91 "+r.phone,r.chapter||"",(r.at||"").slice(0,10)].forEach((v,j)=>tds[j].textContent=v||""); });
  }catch(e){}
}

function validStudent(){
  const g=id=>document.getElementById(id), msg=g("bpMsg");
  const name=g("stName").value.trim().replace(/\s+/g," "), email=g("stEmail").value.trim().toLowerCase();
  const school=g("stSchool").value.replace(/[<>]/g,"").trim().replace(/\s+/g," ");
  let ph=g("stPhone").value.replace(/\D/g,"");
  if(ph.length===12&&ph.startsWith("91")) ph=ph.slice(2); else if(ph.length===11&&ph.startsWith("0")) ph=ph.slice(1);
  const fail=(t,id)=>{ msg.textContent=t; g(id).focus(); g(id).classList.add("bad"); return null; };
  ["stName","stSchool","stEmail","stPhone"].forEach(i=>g(i).classList.remove("bad"));
  if(name.length<2||!/^[\p{L} .'-]+$/u.test(name)) return fail("Enter your full name (letters only).","stName");
  if(school.length<3||!/\p{L}/u.test(school)) return fail("Enter your school name.","stSchool");
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return fail("Enter a valid email address.","stEmail");
  if(!/^[6-9]\d{9}$/.test(ph)) return fail("Enter a valid 10-digit Indian mobile number.","stPhone");
  if(!g("stConsent").checked){ msg.textContent="Tick the box to agree to the leaderboard terms."; return null; }
  if(!g("bpAgree").checked){ msg.textContent="Tick the box to confirm you have read the exam rules."; return null; }
  msg.textContent="";
  return {name,school,email,phone:ph};
}

/* ---------- Board exam: intro and results (with registration + leaderboard) ---------- */
function examResults(c,res){
  const items=examItems(c), longs=items.filter(it=>it.type==="long");
  const locked=res.posted;
  const selfTotal=longs.reduce((s,it)=>s+((res.ans[it.k]||"").trim()?Math.min(it.m,+res.self[it.k]||0):0),0);
  const total=res.auto+selfTotal;
  const why={student:"You submitted the paper.",time:"Time was up, so the paper was submitted automatically.",warnings:`The paper was submitted automatically after ${EXAM_MAX_WARN} warnings.`}[res.reason]||"";
  const mins=Math.round(res.used/60000);
  let h=`<div class="ex">
  <div class="bp-score">
    <div><span>Total${res.student?" for "+esc(shortName(res.student.name)):""}</span><b id="bpTotal">${total}</b><small>/ ${EXAM_TOTAL}</small></div>
    <div><span>Section A (auto-checked)</span><b>${res.auto}</b><small>/ 11</small></div>
    <div><span>Sections B–E (your check)</span><b id="bpSelf">${selfTotal}</b><small>/ 19</small></div>
    <div><span>Warnings</span><b>${res.viol}</b><small>time used ${mins} min</small></div>
  </div>
  <p class="bp-why">${why} ${locked?"Your score is on the leaderboard.":"Check each written answer honestly against the model answer and marking scheme, choose the marks you earned, then submit your score to the leaderboard. Questions you left blank stay at 0."}</p>
  <h3 class="secttl">Section A: answers</h3>`;
  items.filter(it=>it.type==="mcq").forEach(it=>{
    const pick=res.ans[it.k], reason=(res.ans[it.k+"r"]||"").trim(), right=String(pick)===String(it.a), got=right&&reason.length>=3;
    const opts=it.ar?["(a)","(b)","(c)","(d)"]:it.o.map((o,j)=>`(${"abcd"[j]}) ${o}`);
    h+=`<div class="bp-r ${got?'ok':'no'}"><div class="bp-rq"><b>${it.n}.</b> ${it.q}<span class="bp-mk">${got?1:0} / 1</span></div>
      <p class="bp-line">Your option: <b>${pick===undefined?"not answered":opts[pick]}</b> &nbsp; Correct: <b>${opts[it.a]}</b>${right&&!got?" &nbsp; <span class=\"tag r\">reason missing</span>":""}</p>
      <div class="bp-cols"><div><small>Your reason</small><div class="sol bp-mine">${esc(reason)||"<i>No reason written</i>"}</div></div><div><small>Model answer</small><div class="sol">${it.sol}</div></div></div></div>`;
  });
  let cur="";
  longs.forEach(it=>{
    if(it.sec!==cur){ cur=it.sec; h+=`<h3 class="secttl">Section ${cur}</h3>`+(cur==="E"?`<p class="bp-line"><b>17. ${c.exam.E.title}.</b> ${c.exam.E.story}</p>`:""); }
    const blank=!(res.ans[it.k]||"").trim(), steps=[]; for(let v=0;v<=it.m;v+=0.5) steps.push(v);
    h+=`<div class="bp-r"><div class="bp-rq"><b>${it.part?it.part:it.n+"."}</b> ${it.q}<span class="bp-mk">[${it.m}]</span></div>
      <div class="bp-cols"><div><small>Your answer</small><div class="sol bp-mine">${esc(res.ans[it.k])||"<i>Not answered</i>"}</div></div><div><small>Model answer</small><div class="sol">${it.sol}</div></div></div>
      <div class="bp-scheme"><b>Marking scheme</b><ul>${it.scheme.map(([t,m])=>`<li>${t}<span>${m} mark${m===1?"":"s"}</span></li>`).join("")}</ul>
      ${blank?`<span class="tag r">No answer written: 0 / ${it.m}</span>`:`<label>Marks you earned <select data-self="${it.k}" ${locked?"disabled":""}>${steps.map(v=>`<option value="${v}" ${+res.self[it.k]===v?"selected":""}>${v}</option>`).join("")}</select> / ${it.m}</label>`}</div></div>`;
  });
  h+=`<div class="actions">${locked?`<span class="tag g">Score submitted to the leaderboard</span>`:`<button class="btn btn-blue" type="button" data-exam="post" data-ch="${c.id}">Submit score to leaderboard</button>`}<button class="btn btn-line" type="button" data-exam="again" data-ch="${c.id}">Take the paper again</button></div>
  <p class="missing" id="bpMsg" role="status"></p>
  <div class="lb" id="lbBox"></div><div id="ownerBox"></div></div>`;
  return h;
}

async function postScore(c,btn){
  const res=jget(LASTKEY(c.id),null); if(!res||res.posted) return;
  const st=res.student||jget(STKEY,null), msg=document.getElementById("bpMsg");
  if(!st){ msg.textContent="Student details are missing. Take the paper again to register."; return; }
  const longs=examItems(c).filter(it=>it.type==="long");
  const self=longs.reduce((s,it)=>s+((res.ans[it.k]||"").trim()?Math.min(it.m,+res.self[it.k]||0):0),0);
  const entry={name:shortName(st.name),school:(st.school||"").slice(0,60),total:res.auto+self,auto:res.auto,self,viol:res.viol,mins:Math.round(res.used/60000),at:Date.now()};
  btn.disabled=true; btn.textContent="Submitting…"; msg.textContent="";
  try{
    await LB.submit(c.id,entry,st);
    const hist=jget(HISTKEY(c.id),[]); hist.push({date:new Date().toLocaleDateString(),total:entry.total,viol:entry.viol}); jset(HISTKEY(c.id),hist);
    res.posted=true; jset(LASTKEY(c.id),res); chapter(c,"exam");
    requestAnimationFrame(()=>{ const b=document.getElementById("lbBox"); if(b) b.scrollIntoView({behavior:"smooth"}); });
  }catch(e){
    btn.disabled=false; btn.textContent="Submit score to leaderboard";
    msg.textContent="Couldn’t reach the leaderboard. Your answers are saved on this device, so try again in a moment.";
  }
}
