/* MathsBlade – app shell: chapter list, colour mode, home page, chapter pages, labs, routing */
const CHAPTERS = [CH1, CH2, CH3];
const COMING = [
 {num:4,title:"Quadratic Equations",unit:"Unit II: Algebra"},
 {num:5,title:"Arithmetic Progressions",unit:"Unit II: Algebra"},
 {num:6,title:"Triangles",unit:"Unit IV: Geometry"}
];
const UNITS = [["Number Systems","Real Numbers",6,true],["Algebra","Polynomials, Linear Equations, Quadratics, AP",20,true],["Coordinate Geometry","Distance & section formula",6,false],["Geometry","Triangles, Circles",15,false],["Trigonometry","Ratios, identities, heights & distances",12,false],["Mensuration","Areas of circles, surface areas & volumes",10,false],["Statistics & Probability","Mean, median, mode, probability",11,false]];
const AR_OPTS = ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is not the correct explanation of A.","A is true, but R is false.","A is false, but R is true."];

const app = document.getElementById("app");
const TABS = [["notes","Notes"],["ncert","NCERT Solutions"],["pyq","PYQs"],["rsa","Top 25 (RS Aggarwal)"],["cases","Case Studies"],["test","Test Paper"],["exam","Board Exam (1 hr)"]];
["ytTop","ytFoot"].forEach(id=>document.getElementById(id).href=YOUTUBE_URL);

/* ---------- Colour mode: blue or pink, with a circular reveal ---------- */
const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
const modeBtn = document.getElementById("modeBtn");
function applyMode(m){
  document.documentElement.dataset.mode = m;
  modeBtn.setAttribute("aria-pressed", m==="pink" ? "true" : "false");
  try{ localStorage.setItem("mb-mode", m); }catch(e){}
}
let savedMode = "blue"; try{ savedMode = localStorage.getItem("mb-mode") || "blue"; }catch(e){}
applyMode(savedMode);
modeBtn.addEventListener("click", ()=>{
  const next = document.documentElement.dataset.mode==="pink" ? "blue" : "pink";
  if(!document.startViewTransition || REDUCE){ applyMode(next); return; }
  const r = modeBtn.getBoundingClientRect(), x = r.left + r.width/2, y = r.top + r.height/2;
  const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const t = document.startViewTransition(()=>applyMode(next));
  t.ready.then(()=>{
    document.documentElement.animate(
      { clipPath:[`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
      { duration:750, easing:"cubic-bezier(.7,0,.2,1)", pseudoElement:"::view-transition-new(root)" }
    );
  });
});

/* ---------- Home hero: a point running round a circle, tracing sin θ ---------- */
let VIZ = 0;
function stopViz(){ if(VIZ) cancelAnimationFrame(VIZ); VIZ = 0; }
function circleVizSVG(){
  return `<svg viewBox="0 0 460 300" role="img" aria-label="A point moves round a circle while its height traces a sine wave">
  <circle class="ring" cx="120" cy="150" r="90" fill="none" stroke="var(--blue)" stroke-width="2"/>
  <circle class="ring r2" cx="120" cy="150" r="90" fill="none" stroke="var(--blue)" stroke-width="2"/>
  <line x1="18" y1="150" x2="452" y2="150" stroke="var(--line)" stroke-width="1.4"/>
  <line x1="120" y1="42" x2="120" y2="258" stroke="var(--line)" stroke-width="1.4"/>
  <line x1="240" y1="55" x2="240" y2="245" stroke="var(--line)" stroke-width="1.4"/>
  <circle cx="120" cy="150" r="90" fill="var(--blue-soft)" fill-opacity=".5" stroke="var(--ink)" stroke-width="2.2"/>
  <path id="cvArc" fill="var(--blue)" fill-opacity=".2" stroke="var(--blue)" stroke-width="1.5"/>
  <path id="cvWave" fill="none" stroke="var(--blue)" stroke-width="3.2" stroke-linecap="round"/>
  <line id="cvTan" stroke="var(--red)" stroke-width="2" stroke-dasharray="6 5" opacity=".75"/>
  <line id="cvCos" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="4 4"/>
  <line id="cvLink" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="4 4"/>
  <line id="cvRad" stroke="var(--blue)" stroke-width="3.4" stroke-linecap="round"/>
  <path id="cvRight" fill="none" stroke="var(--red)" stroke-width="1.6"/>
  <circle cx="120" cy="150" r="4" fill="var(--ink)"/>
  <circle id="cvHead" r="5.5" fill="var(--blue)"/>
  <circle id="cvP" r="8" fill="var(--red)" stroke="var(--bg)" stroke-width="2.5"/>
  <text id="cvTh" font-size="13" font-weight="700" fill="var(--blue)" text-anchor="middle">θ</text>
  <text x="448" y="270" font-size="12" fill="var(--muted)" font-style="italic" text-anchor="end">wave: y = sin θ</text>
  <text x="18" y="284" font-size="11" fill="var(--muted)">dashed line: the tangent, always ⟂ to the radius</text>
  </svg>`;
}
function startViz(){
  const g = id=>document.getElementById(id), P = g("cvP"); if(!P) return;
  const cx=120, cy=150, R=90, X0=240, W=210, k=2*Math.PI/W;
  const set=(el,o)=>{ for(const a in o) el.setAttribute(a, o[a].toFixed ? o[a].toFixed(1) : o[a]); };
  const n2=v=>(v<-0.005?"−":"")+Math.abs(v).toFixed(2);
  let th=0.7, last=0, frame=0;
  const draw=()=>{
    const s=Math.sin(th), c=Math.cos(th), px=cx+R*c, py=cy-R*s;
    set(P,{cx:px,cy:py});
    set(g("cvRad"),{x1:cx,y1:cy,x2:px,y2:py});
    set(g("cvCos"),{x1:px,y1:py,x2:px,y2:cy});
    set(g("cvLink"),{x1:px,y1:py,x2:X0,y2:py});
    set(g("cvHead"),{cx:X0,cy:py});
    let d=""; for(let x=0;x<=W;x+=3) d+=(x?"L":"M")+(X0+x)+" "+(cy-R*Math.sin(th-x*k)).toFixed(1);
    g("cvWave").setAttribute("d",d);
    const a=((th%(2*Math.PI))+2*Math.PI)%(2*Math.PI), r0=30;
    g("cvArc").setAttribute("d",`M${cx} ${cy} L${cx+r0} ${cy} A${r0} ${r0} 0 ${a>Math.PI?1:0} 0 ${(cx+r0*Math.cos(a)).toFixed(1)} ${(cy-r0*Math.sin(a)).toFixed(1)} Z`);
    set(g("cvTh"),{x:cx+46*Math.cos(a/2),y:cy-46*Math.sin(a/2)+4});
    const tx=-s, ty=-c, ux=-c, uy=s, L=52;
    set(g("cvTan"),{x1:px-L*tx,y1:py-L*ty,x2:px+L*tx,y2:py+L*ty});
    const q=10; g("cvRight").setAttribute("d",`M${(px+q*ux).toFixed(1)} ${(py+q*uy).toFixed(1)} L${(px+q*ux+q*tx).toFixed(1)} ${(py+q*uy+q*ty).toFixed(1)} L${(px+q*tx).toFixed(1)} ${(py+q*ty).toFixed(1)}`);
    if(frame++%4===0){
      g("cvDeg").textContent=`θ = ${Math.round(a*180/Math.PI)}°`;
      g("cvVals").textContent=`sin θ = ${n2(s)}\u2003\u2003cos θ = ${n2(c)}`;
    }
  };
  draw();
  if(REDUCE) return;
  const loop=t=>{ if(last) th+=Math.min(t-last,60)/1000*0.9; last=t; draw(); VIZ=requestAnimationFrame(loop); };
  VIZ=requestAnimationFrame(loop);
}
function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}

function nav(active){
  const links=[]
    .concat(CHAPTERS.map(c=>`<a href="#${c.id}" class="${active===c.id?'on':''}">${c.short||c.title}</a>`))
    ;
  document.getElementById("nav").innerHTML=links.join("");
}

/* ---------- Home ---------- */
function home(){
  nav("home");
  document.title="MathsBlade – Class 10 CBSE Maths Notes, NCERT Solutions & PYQs (2026-27)";
  const hero = circleVizSVG();
  app.innerHTML=`
  <section class="hero">
    <svg class="orbits" viewBox="0 0 680 680" aria-hidden="true">
      <g class="spin slow"><circle cx="340" cy="340" r="330" stroke-dasharray="2 10"/><circle class="dot" cx="670" cy="340" r="6"/></g>
      <g class="spin"><circle cx="340" cy="340" r="250" stroke-dasharray="14 10"/><circle class="dot" cx="340" cy="90" r="8"/><circle class="dot" cx="340" cy="590" r="5"/></g>
      <g class="spin rev"><circle cx="340" cy="340" r="170"/><circle class="dot" cx="170" cy="340" r="7"/></g>
      <g class="spin"><circle cx="340" cy="340" r="95" stroke-dasharray="4 6"/><circle class="dot" cx="435" cy="340" r="5"/></g>
    </svg>
    <div class="wrap">
      <div>
        <span class="pill">CBSE Class 10 Maths 041 & 241, syllabus 2026-27</span>
        <h1>Class 10 Maths, cut down to what you need.</h1>
        <p>Visual notes, step-by-step NCERT solutions, board questions, case studies and a test for every chapter.</p>
        <div class="ctas">
          <a class="btn btn-light" href="#ch1">Start with Chapter 1</a>
          <a class="btn btn-ghost" href="${YOUTUBE_URL}" target="_blank" rel="noopener">Watch on YouTube</a>
        </div>
      </div>
      <div class="hero-graph">
        ${hero}
        <div class="cap"><b id="cvDeg">θ = 40°</b><span id="cvVals">sin θ = 0.64   cos θ = 0.77</span></div>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <h2 class="sec">Chapters</h2>
      <p class="lead">Matched to the NCERT textbook (reprint 2026-27). New chapters are added every week.</p>
      <div class="chapters">
        ${CHAPTERS.map(c=>`
          <a class="chap" href="#${c.id}">
            <div class="top"><span class="num">${c.num}</span><span class="unit">${c.unit}<br>${c.marks} marks</span></div>
            <div class="mini">${THUMBS[c.id]}</div>
            <h3>${c.title}</h3>
            <p>${c.tag}</p>
            <span class="go">Open chapter</span>
          </a>`).join("")}
        ${COMING.map(c=>`
          <div class="chap coming" aria-disabled="true">
            <div class="top"><span class="num">${c.num}</span><span class="unit">${c.unit}</span></div>
            <h3>${c.title}</h3>
            <p>Coming soon. Subscribe on YouTube to know when it’s live.</p>
          </div>`).join("")}
      </div>
    </div>
  </section>

  <section class="block alt" id="syllabus">
    <div class="wrap">
      <h2 class="sec">Syllabus 2026-27 at a glance</h2>
      <p class="lead">Board exam: 80 marks, 3 hours. Internal assessment: 20 marks. Darker bars are the units already on MathsBlade.</p>
      <div class="syl">
        <div>
          ${UNITS.map(([n,s,m,live],i)=>`
          <div class="wbar ${live?'live':''}">
            <span class="nm">${["I","II","III","IV","V","VI","VII"][i]}. ${n}<small>${s}</small></span>
            <span class="track"><span class="fill" style="width:${m/20*100}%;display:block"></span></span>
            <b>${m}</b>
          </div>`).join("")}
          <div class="wbar"><span class="nm"><b>Total</b></span><span></span><b>80</b></div>
        </div>
        <div>
          <div class="card">
            <h3>How the paper is weighted</h3>
            <div class="tbl"><table>
              <tr><th>Question type</th><th>Standard (041)</th><th>Basic (241)</th></tr>
              <tr><td>Remembering & Understanding</td><td>43 marks</td><td>60 marks</td></tr>
              <tr><td>Applying</td><td>19 marks</td><td>12 marks</td></tr>
              <tr><td>Analysing, Evaluating & Creating</td><td>18 marks</td><td>8 marks</td></tr>
            </table></div>
          </div>
          <div class="card" style="margin-top:16px">
            <h3>Internal assessment (20 marks)</h3>
            <div class="tbl"><table>
              <tr><td>Pen-paper test & multiple assessment</td><td>10</td></tr>
              <tr><td>Portfolio</td><td>5</td></tr>
              <tr><td>Lab practical</td><td>5</td></tr>
            </table></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <h2 class="sec">Inside every chapter</h2>
      <p class="lead">Six steps, in the order you should use them. Every answer is written out like a notebook page.</p>
      <div class="what">
        <div><div class="ico">1</div><h3>Notes</h3><p>Every definition and method with graphs, diagrams and an interactive lab.</p></div>
        <div><div class="ico">2</div><h3>NCERT Solutions</h3><p>Every exercise question solved step by step, with graphs where the book asks for one.</p></div>
        <div><div class="ico">3</div><h3>PYQs</h3><p>Real board questions from 2024, 2025 and 2026, tagged by year and sorted by type.</p></div>
        <div><div class="ico">4</div><h3>Top 25</h3><p>The 25 most important question types at R.S. Aggarwal level, fully solved.</p></div>
        <div><div class="ico">5</div><h3>Case Studies</h3><p>Three competency-based case studies per chapter in the 1 + 1 + 2 board format.</p></div>
        <div><div class="ico">6</div><h3>Test Paper</h3><p>MCQs and assertion-reason with instant scoring, then written questions.</p></div>
      </div>
    </div>
  </section>

  <section class="block" style="padding-top:0">
    <div class="wrap">
      <div class="yt-band">
        <div>
          <h3>Prefer to watch?</h3>
          <p>Every chapter has video lessons on the MathsBlade YouTube channel. Read the notes here, watch the explanation there.</p>
        </div>
        <a class="btn" href="${YOUTUBE_URL}" target="_blank" rel="noopener">Subscribe on YouTube</a>
      </div>
    </div>
  </section>`;
}

/* ---------- Chapter ---------- */
const PYQ_SECS=[["mcq","MCQ","1 mark each"],["ar","Assertion–Reason","1 mark each"],["vsa","Very Short Answer","2 marks each"],["sa","Short Answer","3 marks each"],["la","Long Answer","5 marks each"],["case","Case-Based","4 marks each"]];
const caseBlock=cs=>`<div class="case">${cs.y?`<span class="yr">${cs.y}</span>`:""}<h4 class="ctitle">${cs.title}</h4><p class="story">${cs.story}</p>${cs.fig||""}${cs.qs.map((q,i)=>qa(q,["(i)","(ii)","(iii)"][i],"")).join("")}</div>`;
const qa=(q,i,prefix="Q")=>`<details class="q"><summary><span class="qn">${prefix}${i}${prefix?".":""}</span>${q.y?`<span class="yr">${q.y}</span>`:""}${q.q}${q.m?`<span class="marks">${q.m} mark${q.m>1?'s':''}</span>`:''}</summary><div class="sol">${q.a}</div></details>`;

function chapter(c,tab){
  nav(c.id);
  document.title=`Ch ${c.num} ${c.title} – MathsBlade`;
  const idx=CHAPTERS.indexOf(c), prev=CHAPTERS[idx-1], next=CHAPTERS[idx+1];
  let body="";
  if(tab==="notes") body=`
    <div class="sylbox"><div class="hd"><span>What CBSE expects (2026-27)</span><span>${c.unit}, ${c.marks} marks</span></div>
    <ul>${c.outcomes.map(o=>`<li>${o}</li>`).join("")}</ul></div>
    <div class="read">${c.notes}</div>`;
  if(tab==="ncert") body=c.ncert.map(e=>`
    <div class="ex"><h3>${e.ex}</h3><p>${e.sub}</p>${e.qs.map((q,i)=>qa(q,i+1)).join("")}</div>`).join("");
  if(tab==="pyq"){
    const P=c.pyqs;
    body=`<div class="srcnote">Questions from the CBSE Class 10 Mathematics (Standard) board papers of <b>2024</b> (30/3/1), <b>2025</b> (main and compartment, as compiled by the Directorate of Education, Delhi) and <b>2026</b> (30/1/1). The tag on each question shows the year it was asked.</div>
    <div class="jump">${PYQ_SECS.map(([k,l])=>`<button type="button" data-jump="sec-${k}">${l}<span>${P[k].length}</span></button>`).join("")}</div>`+
    PYQ_SECS.map(([k,l,mk])=>`<div class="ex" id="sec-${k}"><h3>${l}<span class="cnt">${mk}</span></h3>
      ${P[k].length?(k==="case"?P[k].map(caseBlock).join(""):P[k].map((q,i)=>qa(q,i+1)).join("")):`<div class="box">No ${l.toLowerCase()} question from this chapter appeared in the 2024, 2025 or 2026 papers we checked. Practise this type in the Top 25 and Case Studies tabs.</div>`}
    </div>`).join("");
  }
  if(tab==="rsa") body=`<div class="ex"><h3>Top 25 must-practise questions</h3>
    <p>The most important question types for this chapter at R.S. Aggarwal level, from basic to tricky. Questions are written by MathsBlade, so practise the matching exercises in your R.S. Aggarwal book too.</p>
    ${c.rsa.map((q,i)=>qa(q,i+1)).join("")}</div>`;
  if(tab==="cases") body=`<div class="ex"><h3>Case studies</h3>
    <p>Competency-based questions in the board format: 4 marks, split as 1 + 1 + 2. Read the situation, then try each part before opening the answer.</p>
    ${c.cases.map(caseBlock).join("")}</div>`;
  if(tab==="exam") body=examIntro(c);
  if(tab==="test"){
    const best=store("mb-best-"+c.id), total=c.mcq.length+c.ar.length;
    body=`
    <div class="testhead">
      <div><h3>Chapter ${c.num} test</h3><p>Section A: ${c.mcq.length} MCQs + ${c.ar.length} assertion-reason (1 mark each). Section B: written questions.</p></div>
      <span class="best" id="best">${best?`Your best: ${best}/${total}`:"No attempts yet"}</span>
    </div>
    <form id="mcqForm" data-ch="${c.id}" onsubmit="return false">
      <h4 class="secttl">Multiple choice</h4>
      ${c.mcq.map((q,i)=>`
      <div class="mcq" id="m${i}">
        <div class="qt"><span class="qn">${i+1}.</span>${q.q}</div>
        <div class="opts">${q.o.map((o,j)=>`<label class="opt"><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("")}</div>
        <div class="why">${q.w}</div>
      </div>`).join("")}
      <h4 class="secttl">Assertion and reason</h4>
      ${c.ar.map((q,k)=>{const i=c.mcq.length+k; return `
      <div class="mcq" id="m${i}">
        <div class="qt"><span class="qn">${i+1}.</span><span class="ar"><b>Assertion (A):</b> ${q.A}</span><span class="ar"><b>Reason (R):</b> ${q.R}</span></div>
        <div class="opts one">${AR_OPTS.map((o,j)=>`<label class="opt"><input type="radio" name="q${i}" value="${j}"> (${"abcd"[j]}) ${o}</label>`).join("")}</div>
        <div class="why">${q.w}</div>
      </div>`}).join("")}
      <div class="missing" id="missing" role="status"></div>
      <div class="scorebox" id="score" role="status"></div>
      <div class="actions">
        <button class="btn btn-blue" type="button" data-act="check">Check answers</button>
        <button class="btn btn-line" type="button" data-act="retry">Try again</button>
      </div>
    </form>
    <div class="ex" style="margin-top:40px">
      <h3>Section B: Written questions</h3>
      <p>Solve in your notebook, then open the answer.</p>
      ${c.written.map((q,i)=>qa(q,total+i+1)).join("")}
    </div>`;
  }

  app.innerHTML=`
  <div class="chead">
    <div class="wrap">
      <div class="crumb"><a href="#home">Home</a> / Class 10 / Chapter ${c.num}</div>
      <h1>${c.num}. ${c.title}</h1>
      <p>${c.tag}</p>
      <div class="chips"><span>${c.unit}</span><span>${c.marks} marks in board exam</span><span>NCERT 2026-27</span></div>
      <nav class="tabs" aria-label="Chapter sections">
        ${TABS.map(([k,l])=>`<a href="#${c.id}-${k}" class="${tab===k?'on':''}">${l}</a>`).join("")}
      </nav>
    </div>
  </div>
  <div class="cbody">
    <div class="wrap cgrid">
      <div>
        ${body}
        <div class="pager">
          ${prev?`<a href="#${prev.id}">‹ Ch ${prev.num}: ${prev.short||prev.title}</a>`:'<a href="#home">‹ All chapters</a>'}
          ${next?`<a href="#${next.id}">Ch ${next.num}: ${next.short||next.title} ›</a>`:'<a href="#home">All chapters ›</a>'}
        </div>
      </div>
      <aside class="side">
        <h4>Key formulas</h4>
        <div class="fbox">${c.formulas.map(x=>`<div>${x}</div>`).join("")}</div>
        <h4>In this chapter</h4>
        <ul>${c.topics.map(t=>`<li>${t}</li>`).join("")}</ul>
        <a class="btn btn-blue" href="${YOUTUBE_URL}" target="_blank" rel="noopener">Watch Ch ${c.num} on YouTube</a>
      </aside>
    </div>
  </div>`;
  initLabs();
  if(tab==="exam") loadBoard(c);
}

/* ---------- Interactive labs ---------- */
const sgn=(n,first)=> n<0?(first?"−":" − "):(first?"":" + ");
function poly(a,b,c){
  let s="";
  const term=(k,v,first)=>{ if(k===0) return ""; const ak=Math.abs(k); return sgn(k,first)+((ak===1&&v)?"":fmt(ak))+v; };
  s+=term(a,"x²",true); s+=term(b,"x",s===""); s+=term(c,"",s===""); return s||"0";
}
function initLabs(){
  document.querySelectorAll('[data-lab="parabola"]').forEach(el=>{
    el.outerHTML=`<div class="lab" id="labP">
      <h4>Try it: the parabola lab</h4>
      <p>Move the sliders to change y = ax² + bx + c. Watch where the curve meets the x-axis, and check the sum and product rules live.</p>
      <div class="grid">
        <div>
          <div class="ctrl">
            <label>a <input type="range" min="-3" max="3" step="0.5" value="1" data-k="a"><output>1</output></label>
            <label>b <input type="range" min="-6" max="6" step="1" value="-2" data-k="b"><output>−2</output></label>
            <label>c <input type="range" min="-10" max="10" step="1" value="-8" data-k="c"><output>−8</output></label>
          </div>
          <div class="res" id="labPres" role="status"></div>
        </div>
        <div class="svgbox" id="labPsvg"></div>
      </div></div>`;
    const box=document.getElementById("labP");
    const upd=()=>{
      const v={}; box.querySelectorAll("input").forEach(i=>{v[i.dataset.k]=+i.value; i.nextElementSibling.textContent=fmt(+i.value);});
      const {a,b,c}=v, res=document.getElementById("labPres");
      let zs=[], txt="";
      if(a===0){
        txt=`<b>a = 0</b>, so this is not a quadratic any more. It becomes the linear polynomial ${poly(0,b,c)}, a straight line.`;
        if(b!==0) zs=[-c/b];
      }else{
        const D=b*b-4*a*c;
        if(D>1e-9) zs=[(-b-Math.sqrt(D))/(2*a),(-b+Math.sqrt(D))/(2*a)].sort((p,q)=>p-q);
        else if(Math.abs(D)<=1e-9) zs=[-b/(2*a)];
        const kind=zs.length===2?'<span class="tag g">2 zeroes</span>':zs.length===1?'<span class="tag b">1 zero</span>':'<span class="tag r">no real zero</span>';
        txt=`<b>y = ${poly(a,b,c)}</b><br>Opens ${a>0?"upward ∪":"downward ∩"} because a ${a>0?"&gt;":"&lt;"} 0<br>${kind} ${zs.length?zs.map(fmt).join(" and "):""}`;
        if(zs.length){
          const al=zs[0], be=zs[1]??zs[0];
          txt+=`<br><br><b>Sum</b> α + β = ${fmt(al+be)} &nbsp; and &nbsp; −b/a = ${fmt(-b/a)} ✓<br><b>Product</b> αβ = ${fmt(al*be)} &nbsp; and &nbsp; c/a = ${fmt(c/a)} ✓`;
        }else txt+=`<br><br>The curve never meets the x-axis, so there is no real zero to check.`;
      }
      res.innerHTML=txt;
      document.getElementById("labPsvg").innerHTML=plot({xr:[-6,6],yr:[-12,12],w:380,h:340,gx:1,gy:2,lx:2,ly:4,
        fns:[{f:x=>a*x*x+b*x+c,w:3}],pts:zs.map(z=>[z,0,"",0,0,RED])});
    };
    box.addEventListener("input",upd); upd();
  });

  document.querySelectorAll('[data-lab="lines"]').forEach(el=>{
    const row=(n,d,col)=>`<div class="eq"><span class="sw" style="background:${col}"></span><input type="number" step="any" inputmode="decimal" aria-label="a${n}" data-k="a${n}" value="${d[0]}"> x + <input type="number" step="any" inputmode="decimal" aria-label="b${n}" data-k="b${n}" value="${d[1]}"> y = <input type="number" step="any" inputmode="decimal" aria-label="c${n}" data-k="c${n}" value="${d[2]}"></div>`;
    el.outerHTML=`<div class="lab" id="labL">
      <h4>Try it: the two-lines lab</h4>
      <p>Type any pair of equations in the form ax + by = c. The graph, the ratio test and the solution update as you type. Try 2, 3, 9 with 4, 6, 18.</p>
      <div class="grid">
        <div>
          <div class="eqs">${row(1,[1,1,5],BLUE)}${row(2,[1,-1,1],RED)}</div>
          <div class="res" id="labLres" role="status"></div>
        </div>
        <div class="svgbox" id="labLsvg"></div>
      </div></div>`;
    const box=document.getElementById("labL");
    const upd=()=>{
      const v={}; box.querySelectorAll("input").forEach(i=>v[i.dataset.k]=parseFloat(i.value));
      const {a1,b1,c1,a2,b2,c2}=v, res=document.getElementById("labLres");
      if([a1,b1,c1,a2,b2,c2].some(n=>!isFinite(n))){res.innerHTML="Fill in all six boxes with numbers.";return;}
      if((a1===0&&b1===0)||(a2===0&&b2===0)){res.innerHTML="In each equation, a and b cannot both be 0.";return;}
      const r=(p,q)=>q===0?"undefined":fmt(p/q);
      const det=a1*b2-a2*b1; let kind, pts=[];
      if(Math.abs(det)>1e-12){
        const x=(c1*b2-c2*b1)/det, y=(a1*c2-a2*c1)/det;
        kind=`<span class="tag g">Intersecting: one solution</span><br><b>x = ${fmt(x)}, y = ${fmt(y)}</b>`; pts=[[x,y,`(${fmt(x)}, ${fmt(y)})`,8,-8]];
      }else if(Math.abs(a1*c2-a2*c1)<1e-12&&Math.abs(b1*c2-b2*c1)<1e-12) kind=`<span class="tag b">Coincident: infinitely many solutions</span>`;
      else kind=`<span class="tag r">Parallel: no solution</span>`;
      res.innerHTML=`a₁/a₂ = ${r(a1,a2)} &nbsp; b₁/b₂ = ${r(b1,b2)} &nbsp; c₁/c₂ = ${r(c1,c2)}<br><br>${kind}`;
      const L=(a,b,c,col,w,dash)=>b!==0?{f:lineY(a,b,c),c:col,w,dash}:{x:c/a,c:col,w,dash};
      document.getElementById("labLsvg").innerHTML=plot({xr:[-10,10],yr:[-10,10],w:380,h:360,gx:1,gy:1,lx:2,ly:2,
        fns:[L(a1,b1,c1,BLUE,3),L(a2,b2,c2,RED,2.6,Math.abs(det)<1e-12?"7 6":"")],pts});
    };
    box.addEventListener("input",upd); upd();
  });
}

/* ---------- Routing & test scoring ---------- */
function route(){
  if(EX){ const want="#"+EX.c.id+"-exam"; if(location.hash!==want){ history.replaceState(null,"",want); examViolation("nav"); } return; }
  stopViz();
  const h=(location.hash||"#home").slice(1);
  if(h==="account"){ accountPage(); window.scrollTo(0,0); return; }
  const m=h.match(/^(ch\d)(?:-(notes|ncert|pyq|rsa|cases|test|exam))?$/);
  const c=m&&CHAPTERS.find(x=>x.id===m[1]);
  if(c){chapter(c,m[2]||"notes");window.scrollTo(0,0);}
  else{home(); startViz(); if(h==="home-syllabus") requestAnimationFrame(()=>document.getElementById("syllabus").scrollIntoView()); else window.scrollTo(0,0);}
}

app.addEventListener("click",e=>{
  const xb=e.target.closest("[data-exam]");
  if(xb){
    const ec=CHAPTERS.find(x=>x.id===xb.dataset.ch), act=xb.dataset.exam;
    if(act==="start"){
      const u=AUTH.user; if(!u||!u.complete){ openAuth(u?"complete":"signin"); return; }
      const ag=document.getElementById("bpAgree"); if(!ag||!ag.checked){ document.getElementById("bpMsg").textContent="Tick the box to confirm you have read the rules."; return; }
      const st={name:u.name,school:u.school,email:u.email,phone:u.phone}; jset(STKEY,st); LB.register(st,ec.id).catch(()=>{}); startExam(ec,false); }
    if(act==="post"){ postScore(ec,xb); return; }
    if(act==="resume") startExam(ec,true);
    if(act==="again"){ jdel(LASTKEY(ec.id)); chapter(ec,"exam"); window.scrollTo(0,0); }
    return;
  }
  const jb=e.target.closest("[data-jump]"); if(jb){ document.getElementById(jb.dataset.jump).scrollIntoView({behavior:"smooth",block:"start"}); return; }
  const b=e.target.closest("[data-act]"); if(!b) return;
  const form=document.getElementById("mcqForm");
  const c=CHAPTERS.find(x=>x.id===form.dataset.ch);
  const items=c.mcq.map(q=>q.a).concat(c.ar.map(q=>q.a)), total=items.length;
  const miss=document.getElementById("missing"), sb=document.getElementById("score");
  if(b.dataset.act==="retry"){
    form.reset(); form.classList.remove("done");
    form.querySelectorAll(".opt").forEach(o=>o.classList.remove("right","wrong"));
    sb.classList.remove("show"); miss.textContent="";
    form.scrollIntoView({behavior:"smooth"}); return;
  }
  const un=items.map((_,i)=>form.querySelector(`input[name=q${i}]:checked`)?null:i+1).filter(Boolean);
  if(un.length){miss.textContent=`Answer question${un.length>1?'s':''} ${un.join(", ")} to check your score.`;return;}
  miss.textContent=""; let s=0;
  items.forEach((ans,i)=>{
    const opts=form.querySelectorAll(`#m${i} .opt`), pick=+form.querySelector(`input[name=q${i}]:checked`).value;
    opts[ans].classList.add("right"); if(pick===ans) s++; else opts[pick].classList.add("wrong");
  });
  form.classList.add("done");
  const msg=s===total?"Perfect score. Move to the next chapter.":s>=total*0.7?"Good work. Read the explanations for the ones you missed.":"Revise the notes and NCERT solutions, then try again.";
  sb.innerHTML=`<b>${s} / ${total}</b>${msg}`; sb.classList.add("show");
  const best=+(store("mb-best-"+c.id)||0); if(s>best) store("mb-best-"+c.id,s);
  document.getElementById("best").textContent=`Your best: ${Math.max(s,best)}/${total}`;
  sb.scrollIntoView({behavior:"smooth",block:"center"});
});

app.addEventListener("change",e=>{
  const s=e.target.closest("[data-self]"); if(!s) return;
  const m=(location.hash||"").match(/^#(ch\d)-exam/); if(!m) return;
  const ec=CHAPTERS.find(x=>x.id===m[1]), r=jget(LASTKEY(ec.id),null); if(!r) return;
  r.self[s.dataset.self]=+s.value; jset(LASTKEY(ec.id),r);
  const st=examItems(ec).filter(it=>it.type==="long").reduce((a,it)=>a+((r.ans[it.k]||"").trim()?Math.min(it.m,+r.self[it.k]||0):0),0);
  document.getElementById("bpSelf").textContent=st; document.getElementById("bpTotal").textContent=r.auto+st;
});
window.addEventListener("hashchange",route);
{ const run=jget(RUNKEY,null); if(run&&!run.done) location.hash=run.ch+"-exam"; }
route();
AUTH.init();
