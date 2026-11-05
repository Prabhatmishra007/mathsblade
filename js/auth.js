/* =====================================================================
   ACCOUNTS: sign up / sign in
   Modes (chosen automatically):
     "firebase": real accounts (email + password, Google). Set FIREBASE_CONFIG in js/config.js.
     "claude":   on a published claude.ai link, the viewer's Claude account is the login.
     "local":    demo mode, accounts saved in this browser only.
   ===================================================================== */
const FB_VER = "10.12.2";

const AUTH={mode:null,user:null,ready:null};
const hexOf=buf=>[...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,"0")).join("");
const bytesOf=hex=>new Uint8Array(hex.match(/../g).map(h=>parseInt(h,16)));
async function pbkdf2(pw,saltHex){
  const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(pw),"PBKDF2",false,["deriveBits"]);
  return hexOf(await crypto.subtle.deriveBits({name:"PBKDF2",salt:bytesOf(saltHex),iterations:150000,hash:"SHA-256"},key,256));
}
function loadScript(src){ return new Promise((res,rej)=>{ const s=document.createElement("script"); s.src=src; s.onload=res; s.onerror=()=>rej(new Error("load "+src)); document.head.appendChild(s); }); }
async function loadFirebase(){
  await loadScript(`https://cdn.jsdelivr.net/npm/firebase@${FB_VER}/firebase-app-compat.js`);
  await loadScript(`https://cdn.jsdelivr.net/npm/firebase@${FB_VER}/firebase-auth-compat.js`);
  if(!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
}
const isComplete=u=>!!(u&&u.name&&u.school&&u.email&&u.phone);
function fbUser(u){ const x=jget("mb-profile-"+u.uid,{}); const r={uid:u.uid,provider:"firebase",email:(u.email||"").toLowerCase(),name:x.name||u.displayName||"",school:x.school||"",phone:x.phone||""}; r.complete=isComplete(r); return r; }
function localUser(email,a){ return {uid:"local:"+email,provider:"local",email,name:a.name,school:a.school,phone:a.phone,complete:true}; }

AUTH.init=function(){
  if(AUTH.ready) return AUTH.ready;
  AUTH.ready=(async()=>{
    await LB.init();
    if(LB.mode==="db"){
      AUTH.mode="claude";
      let p=null; try{ const s=await LB.db.doc("data/users/"+LB.uid+"/profile").get(); p=s.exists?s.data():null; }catch(e){}
      AUTH.user={uid:LB.uid,provider:"claude",name:"",school:"",email:"",phone:"",...(p||{})}; AUTH.user.complete=isComplete(AUTH.user);
    }else if(FIREBASE_CONFIG&&FIREBASE_CONFIG.apiKey){
      try{
        await loadFirebase(); AUTH.mode="firebase";
        await new Promise(res=>{ let first=true; firebase.auth().onAuthStateChanged(u=>{ AUTH.user=u?fbUser(u):null; if(first){first=false;res();} else AUTH.changed(); }); });
      }catch(e){ AUTH.mode="local"; }
    }else AUTH.mode="local";
    if(AUTH.mode==="local"){ const em=jget("mb-session",null), acc=jget("mb-accounts",{}); AUTH.user=em&&acc[em]?localUser(em,acc[em]):null; }
    AUTH.sync();
  })();
  return AUTH.ready;
};
AUTH.sync=function(){ if(AUTH.user&&AUTH.user.complete) jset(STKEY,{name:AUTH.user.name,school:AUTH.user.school,email:AUTH.user.email,phone:AUTH.user.phone}); renderAuthSlot(); };
AUTH.changed=function(){ AUTH.sync(); if(!EX){ const h=location.hash; if(/-exam$/.test(h)||h==="#account") route(); } };

AUTH.signUp=async function(d){
  if(AUTH.mode==="local"){
    if(!(window.crypto&&crypto.subtle)) throw {code:"insecure"};
    const acc=jget("mb-accounts",{}); if(acc[d.email]) throw {code:"auth/email-already-in-use"};
    const salt=hexOf(crypto.getRandomValues(new Uint8Array(16)).buffer);
    acc[d.email]={name:d.name,school:d.school,phone:d.phone,salt,hash:await pbkdf2(d.password,salt),created:Date.now()};
    jset("mb-accounts",acc); jset("mb-session",d.email); AUTH.user=localUser(d.email,acc[d.email]);
  }else if(AUTH.mode==="firebase"){
    const cred=await firebase.auth().createUserWithEmailAndPassword(d.email,d.password);
    await cred.user.updateProfile({displayName:d.name});
    jset("mb-profile-"+cred.user.uid,{name:d.name,school:d.school,phone:d.phone});
    AUTH.user=fbUser(cred.user);
  }
  LB.register({name:d.name,school:d.school,email:d.email,phone:d.phone},"account").catch(()=>{});
  AUTH.changed();
};
AUTH.signIn=async function(email,pw){
  if(AUTH.mode==="local"){
    if(!(window.crypto&&crypto.subtle)) throw {code:"insecure"};
    const a=jget("mb-accounts",{})[email];
    if(!a||await pbkdf2(pw,a.salt)!==a.hash) throw {code:"auth/invalid-credential"};
    jset("mb-session",email); AUTH.user=localUser(email,a);
  }else if(AUTH.mode==="firebase"){
    const cred=await firebase.auth().signInWithEmailAndPassword(email,pw); AUTH.user=fbUser(cred.user);
  }
  AUTH.changed();
};
AUTH.google=async function(){ const cred=await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()); AUTH.user=fbUser(cred.user); AUTH.changed(); };
AUTH.reset=async function(email){ if(AUTH.mode!=="firebase") throw {code:"no-reset"}; await firebase.auth().sendPasswordResetEmail(email); };
AUTH.saveProfile=async function(p){
  const u=AUTH.user; if(!u) return;
  if(AUTH.mode==="local"){ const acc=jget("mb-accounts",{}); Object.assign(acc[u.email],{name:p.name,school:p.school,phone:p.phone}); jset("mb-accounts",acc); AUTH.user=localUser(u.email,acc[u.email]); }
  else if(AUTH.mode==="firebase"){ const fu=firebase.auth().currentUser; if(fu&&fu.displayName!==p.name) await fu.updateProfile({displayName:p.name}); jset("mb-profile-"+u.uid,{name:p.name,school:p.school,phone:p.phone}); AUTH.user=fbUser(fu); }
  else if(AUTH.mode==="claude"){ const email=p.email||u.email; await LB.db.doc("data/users/"+LB.uid+"/profile").set({name:p.name,school:p.school,phone:p.phone,email}); AUTH.user={...u,name:p.name,school:p.school,phone:p.phone,email}; AUTH.user.complete=isComplete(AUTH.user); }
  LB.register({name:AUTH.user.name,school:AUTH.user.school,email:AUTH.user.email,phone:AUTH.user.phone},"account").catch(()=>{});
  AUTH.changed();
};
AUTH.signOut=async function(){
  if(AUTH.mode==="firebase") await firebase.auth().signOut();
  if(AUTH.mode==="local") jdel("mb-session");
  if(AUTH.mode!=="claude"){ AUTH.user=null; jdel(STKEY); }
  AUTH.changed(); if(location.hash==="#account") location.hash="home";
};
function authMsg(e){
  const c=(e&&e.code)||"";
  return ({"auth/email-already-in-use":"An account with this email already exists. Sign in instead.","auth/invalid-credential":"Email or password is incorrect.","auth/wrong-password":"Email or password is incorrect.","auth/user-not-found":"Email or password is incorrect.","auth/invalid-email":"Enter a valid email address.","auth/weak-password":"Choose a stronger password (at least 8 characters, with letters and numbers).","auth/too-many-requests":"Too many attempts. Wait a few minutes and try again.","auth/network-request-failed":"No internet connection. Check your network and try again.","auth/popup-closed-by-user":"The Google window was closed before signing in.","auth/popup-blocked":"Your browser blocked the Google window. Allow pop-ups and try again.","insecure":"Accounts need a secure (https) page. Open the site over https and try again.","no-reset":"Password reset needs real accounts (Firebase). In demo mode, create a new account instead."})[c]||"Something went wrong. Please try again.";
}

/* ---------- Validation shared by sign up and profile forms ---------- */
function readProfileForm(root,{withEmail,withPassword}){
  const v=n=>{const el=root.querySelector(`[name="${n}"]`); return el?el.value:"";};
  const out={name:v("name").trim().replace(/\s+/g," "),school:v("school").replace(/[<>]/g,"").trim().replace(/\s+/g," "),email:v("email").trim().toLowerCase(),password:v("password"),confirm:v("confirm")};
  let ph=v("phone").replace(/\D/g,""); if(ph.length===12&&ph.startsWith("91")) ph=ph.slice(2); else if(ph.length===11&&ph.startsWith("0")) ph=ph.slice(1); out.phone=ph;
  root.querySelectorAll(".bad").forEach(x=>x.classList.remove("bad"));
  const fail=(n,t)=>{const el=root.querySelector(`[name="${n}"]`); if(el){el.classList.add("bad");el.focus();} return {error:t};};
  if(out.name.length<2||!/^[\p{L} .'-]+$/u.test(out.name)) return fail("name","Enter your full name (letters only).");
  if(out.school.length<3||!/\p{L}/u.test(out.school)) return fail("school","Enter your school name and city.");
  if(withEmail&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(out.email)) return fail("email","Enter a valid email address.");
  if(!/^[6-9]\d{9}$/.test(out.phone)) return fail("phone","Enter a valid 10-digit Indian mobile number.");
  if(withPassword){
    if(out.password.length<8||!/[A-Za-z]/.test(out.password)||!/\d/.test(out.password)) return fail("password","Use at least 8 characters with letters and numbers.");
    if(out.password!==out.confirm) return fail("confirm","The passwords don’t match.");
  }
  const cons=root.querySelector('[name="consent"]'); if(cons&&!cons.checked) return {error:"Tick the box to agree to the terms."};
  return out;
}

/* ---------- Header slot ---------- */
const initials=n=>String(n||"?").trim().split(/\s+/).map(w=>w.charAt(0)).slice(0,2).join("").toUpperCase()||"?";
function renderAuthSlot(){
  const el=document.getElementById("authSlot"); if(!el) return;
  const u=AUTH.user;
  if(!u||(!u.complete&&AUTH.mode==="claude"&&!u.name)){
    el.innerHTML = AUTH.mode==="claude"
      ? `<button class="auth-pill" type="button" data-auth="complete">Set up profile</button>`
      : `<button class="auth-link" type="button" data-auth="signin">Sign in</button><button class="auth-pill" type="button" data-auth="signup">Sign up</button>`;
    return;
  }
  el.innerHTML=`<div class="auth-me"><button class="auth-av" type="button" data-auth="menu" aria-haspopup="menu" aria-expanded="false"><span class="av"></span><span class="nm"></span>${u.complete?"":'<span class="dot" title="Profile incomplete"></span>'}</button>
    <div class="auth-menu" role="menu" hidden><div class="am-head"><b></b><span></span></div>
      <a href="#account" role="menuitem">My account</a>
      ${u.complete?"":'<button type="button" role="menuitem" data-auth="complete">Complete profile</button>'}
      ${AUTH.mode==="claude"?"":'<button type="button" role="menuitem" data-auth="signout">Sign out</button>'}
    </div></div>`;
  el.querySelector(".av").textContent=initials(u.name);
  el.querySelector(".nm").textContent=(u.name||"Account").split(" ")[0];
  el.querySelector(".am-head b").textContent=u.name||"Your account";
  el.querySelector(".am-head span").textContent=u.email||(AUTH.mode==="claude"?"Signed in with Claude":"");
}

/* ---------- Modal ---------- */
function closeAuth(){ const m=document.getElementById("authOv"); if(m) m.remove(); document.removeEventListener("keydown",authEsc); }
function authEsc(e){ if(e.key==="Escape") closeAuth(); }
function openAuth(view){
  if(EX) return;
  closeAuth();
  const ov=document.createElement("div"); ov.id="authOv"; ov.className="auth-ov";
  ov.innerHTML=`<div class="auth-box" role="dialog" aria-modal="true" aria-labelledby="authTitle"><button class="auth-x" type="button" data-auth="close" aria-label="Close">×</button><div id="authView"></div></div>`;
  document.body.appendChild(ov);
  ov.addEventListener("mousedown",e=>{ if(e.target===ov) closeAuth(); });
  document.addEventListener("keydown",authEsc);
  showAuthView(view);
}
const pwField=(n,label,auto)=>`<label>${label}<span class="pw"><input name="${n}" type="password" autocomplete="${auto}" maxlength="64"><button type="button" class="pw-t" data-auth="pw" aria-label="Show password">Show</button></span></label>`;
const googleBtn=()=>AUTH.mode==="firebase"?`<button class="g-btn" type="button" data-auth="google"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h6c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.1-2 3.2-4.9 3.2-8.2z"/><path fill="#34A853" d="M12 23c3.1 0 5.7-1 7.6-2.8l-3.7-2.8c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v2.9C3.7 20.5 7.6 23 12 23z"/><path fill="#FBBC05" d="M5.6 13.8c-.2-.7-.4-1.4-.4-2.2s.1-1.5.4-2.2V6.5H1.8C1 8 .6 9.7.6 11.6s.4 3.6 1.2 5.1l3.8-2.9z"/><path fill="#EA4335" d="M12 4.7c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.7 1.2 15.1 0 12 0 7.6 0 3.7 2.5 1.8 6.5l3.8 2.9C6.5 6.7 9 4.7 12 4.7z"/></svg>Continue with Google</button><div class="or"><span>or</span></div>`:"";
const demoNote=()=>AUTH.mode==="local"?`<p class="auth-demo">Demo mode: accounts are saved in this browser only. Connect Firebase (see the setup guide) to give students real accounts that work on any device.</p>`:"";
const consentBox=()=>`<label class="bp-agree"><input type="checkbox" name="consent"> My first name, surname initial, school name and scores may appear on leaderboards. My email and phone number stay private and are seen only by MathsBlade.</label><p class="bp-note">If you are under 18, check with a parent before sharing a phone number.</p>`;
function showAuthView(view){
  const box=document.getElementById("authView"); if(!box) return;
  const u=AUTH.user||{};
  const brand=`<div class="auth-brand"><span class="mark" aria-hidden="true">π</span>MathsBlade</div>`;
  if(view==="signin") box.innerHTML=`${brand}<h2 id="authTitle">Welcome back</h2><p class="auth-sub">Sign in to take board papers and track your scores.</p>
    ${googleBtn()}<form class="fm" data-form="signin" novalidate>
      <label>Email<input name="email" type="email" autocomplete="email" maxlength="80"></label>
      ${pwField("password","Password","current-password")}
      ${AUTH.mode==="firebase"?`<button type="button" class="auth-forgot" data-auth="forgot">Forgot password?</button>`:""}
      <p class="auth-err" role="alert"></p>
      <button class="btn btn-blue auth-go" type="submit">Sign in</button></form>
    <p class="auth-switch">New to MathsBlade? <button type="button" data-auth="to-signup">Create a free account</button></p>${demoNote()}`;
  if(view==="signup") box.innerHTML=`${brand}<h2 id="authTitle">Create your free account</h2><p class="auth-sub">Save your scores, appear on leaderboards and pick up where you left off.</p>
    ${googleBtn()}<form class="fm" data-form="signup" novalidate>
      <div class="fm2"><label>Full name<input name="name" autocomplete="name" maxlength="40"></label>
      <label>School name and city<input name="school" autocomplete="organization" maxlength="60" placeholder="e.g. Kendriya Vidyalaya, Bengaluru"></label></div>
      <div class="fm2"><label>Email<input name="email" type="email" autocomplete="email" maxlength="80"></label>
      <label>Mobile number<span class="bp-ph"><span>+91</span><input name="phone" inputmode="tel" autocomplete="tel-national" maxlength="17"></span></label></div>
      <div class="fm2">${pwField("password","Password","new-password")}${pwField("confirm","Confirm password","new-password")}</div>
      <p class="auth-hint">At least 8 characters, with letters and numbers.</p>
      ${consentBox()}
      <p class="auth-err" role="alert"></p>
      <button class="btn btn-blue auth-go" type="submit">Create account</button></form>
    <p class="auth-switch">Already have an account? <button type="button" data-auth="to-signin">Sign in</button></p>${demoNote()}`;
  if(view==="complete") box.innerHTML=`${brand}<h2 id="authTitle">${AUTH.mode==="claude"?"Set up your profile":"Complete your profile"}</h2><p class="auth-sub">We need a few details before you take a board paper.</p>
    <form class="fm" data-form="complete" novalidate>
      <div class="fm2"><label>Full name<input name="name" autocomplete="name" maxlength="40" value="${esc(u.name)}"></label>
      <label>School name and city<input name="school" autocomplete="organization" maxlength="60" value="${esc(u.school)}"></label></div>
      <div class="fm2">${AUTH.mode==="claude"?`<label>Email<input name="email" type="email" autocomplete="email" maxlength="80" value="${esc(u.email)}"></label>`:""}
      <label>Mobile number<span class="bp-ph"><span>+91</span><input name="phone" inputmode="tel" autocomplete="tel-national" maxlength="17" value="${esc(u.phone)}"></span></label></div>
      ${consentBox()}
      <p class="auth-err" role="alert"></p>
      <button class="btn btn-blue auth-go" type="submit">Save and continue</button></form>`;
  if(view==="forgot") box.innerHTML=`${brand}<h2 id="authTitle">Reset your password</h2><p class="auth-sub">Enter your email and we’ll send you a reset link.</p>
    <form class="fm" data-form="forgot" novalidate><label>Email<input name="email" type="email" autocomplete="email" maxlength="80"></label>
      <p class="auth-err" role="alert"></p><button class="btn btn-blue auth-go" type="submit">Send reset link</button></form>
    <p class="auth-switch"><button type="button" data-auth="to-signin">Back to sign in</button></p>`;
  const first=box.querySelector("input"); if(first) setTimeout(()=>first.focus(),30);
}

document.addEventListener("submit",async e=>{
  const f=e.target.closest("form[data-form]"); if(!f) return; e.preventDefault();
  const err=f.querySelector(".auth-err"), go=f.querySelector(".auth-go"), label=go.textContent, kind=f.dataset.form;
  const busy=b=>{go.disabled=b; go.textContent=b?"Please wait…":label;};
  err.textContent="";
  try{
    if(kind==="signin"){
      const email=f.email.value.trim().toLowerCase(), pw=f.password.value;
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){ err.textContent="Enter a valid email address."; return; }
      if(!pw){ err.textContent="Enter your password."; return; }
      busy(true); await AUTH.signIn(email,pw); closeAuth();
      if(AUTH.user&&!AUTH.user.complete) openAuth("complete");
    }
    if(kind==="signup"){
      const d=readProfileForm(f,{withEmail:true,withPassword:true}); if(d.error){ err.textContent=d.error; return; }
      busy(true); await AUTH.signUp(d); closeAuth();
    }
    if(kind==="complete"){
      const d=readProfileForm(f,{withEmail:AUTH.mode==="claude",withPassword:false}); if(d.error){ err.textContent=d.error; return; }
      busy(true); await AUTH.saveProfile(d); closeAuth();
    }
    if(kind==="forgot"){
      const email=f.email.value.trim().toLowerCase(); if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){ err.textContent="Enter a valid email address."; return; }
      busy(true); await AUTH.reset(email); f.innerHTML=`<p class="auth-ok">If an account exists for that email, a reset link is on its way. Check your inbox and spam folder.</p>`;
    }
  }catch(ex){ busy(false); err.textContent=authMsg(ex); }
});
document.addEventListener("click",async e=>{
  const b=e.target.closest("[data-auth]");
  const menuOpen=document.querySelector(".auth-menu:not([hidden])");
  if(menuOpen&&(!b||b.dataset.auth!=="menu")&&(!e.target.closest(".auth-menu")||e.target.closest(".auth-menu a"))){ menuOpen.hidden=true; const t=document.querySelector(".auth-av"); if(t) t.setAttribute("aria-expanded","false"); }
  if(!b) return;
  const a=b.dataset.auth;
  if(a==="signin"||a==="signup"||a==="complete"){ await AUTH.init(); openAuth(a); }
  if(a==="to-signin") showAuthView("signin");
  if(a==="to-signup") showAuthView("signup");
  if(a==="forgot") showAuthView("forgot");
  if(a==="close") closeAuth();
  if(a==="google"){ try{ await AUTH.google(); closeAuth(); if(AUTH.user&&!AUTH.user.complete) openAuth("complete"); }catch(ex){ const er=document.querySelector("#authView .auth-err"); if(er) er.textContent=authMsg(ex); } }
  if(a==="pw"){ const inp=b.previousElementSibling; const show=inp.type==="password"; inp.type=show?"text":"password"; b.textContent=show?"Hide":"Show"; b.setAttribute("aria-label",show?"Hide password":"Show password"); }
  if(a==="menu"){ const m=b.nextElementSibling; m.hidden=!m.hidden; b.setAttribute("aria-expanded",String(!m.hidden)); }
  if(a==="signout"){ const m=document.querySelector(".auth-menu"); if(m) m.hidden=true; await AUTH.signOut(); }
});

/* ---------- My account page ---------- */
function accountPage(){
  nav("account");
  document.title="My account – MathsBlade";
  const u=AUTH.user;
  const head=`<div class="chead"><div class="wrap"><div class="crumb"><a href="#home">Home</a> / Account</div><h1>My account</h1><p>Your profile, board paper scores and leaderboard details.</p><div style="height:26px"></div></div></div>`;
  if(AUTH.mode===null){ app.innerHTML=head+`<div class="cbody"><div class="wrap"><p>Loading…</p></div></div>`; AUTH.init().then(()=>{ if(location.hash==="#account") accountPage(); }); return; }
  if(!u||(AUTH.mode==="claude"&&!u.name)){
    app.innerHTML=head+`<div class="cbody"><div class="wrap"><div class="acc-empty"><h3>${AUTH.mode==="claude"?"Set up your profile":"Sign in to see your account"}</h3><p>Your scores and leaderboard positions appear here once you’re signed in.</p><div class="actions">${AUTH.mode==="claude"?`<button class="btn btn-blue" type="button" data-auth="complete">Set up profile</button>`:`<button class="btn btn-blue" type="button" data-auth="signin">Sign in</button><button class="btn btn-line" type="button" data-auth="signup">Create an account</button>`}</div></div></div></div>`;
    return;
  }
  const rows=CHAPTERS.map(c=>{ const h=jget(HISTKEY(c.id),[]); const best=h.reduce((m,x)=>Math.max(m,x.total),-1); return {c,n:h.length,best,last:h[h.length-1]}; });
  const masked=u.phone?"+91 "+u.phone.slice(0,2)+"••••"+u.phone.slice(-4):"–";
  app.innerHTML=head+`<div class="cbody"><div class="wrap acc">
    <div class="acc-card">
      <div class="acc-top"><span class="acc-av"></span><div><h3 class="acc-name"></h3><p class="acc-school"></p></div>
        <span class="tag b acc-prov">${{firebase:"MathsBlade account",claude:"Signed in with Claude",local:"Demo account (this browser)"}[AUTH.mode]}</span></div>
      <dl class="acc-dl"><div><dt>Email</dt><dd class="acc-email"></dd></div><div><dt>Mobile</dt><dd>${esc(masked)}</dd></div></dl>
      ${u.complete?"":`<p class="missing">Your profile is incomplete. Complete it to take board papers.</p>`}
      <div class="actions"><button class="btn btn-line" type="button" data-auth="complete">Edit profile</button>${AUTH.mode==="firebase"?`<button class="btn btn-line" type="button" data-auth="forgot-acc">Change password</button>`:""}${AUTH.mode==="claude"?"":`<button class="btn btn-line" type="button" data-auth="signout">Sign out</button>`}</div>
      <p class="acc-msg" role="status"></p>
    </div>
    <h3 class="secttl">Board paper scores</h3>
    <div class="tbl"><table><tr><th>Chapter</th><th>Attempts</th><th>Best score</th><th>Last attempt</th><th></th></tr>
    ${rows.map(r=>`<tr><td>${r.c.num}. ${r.c.title}</td><td>${r.n}</td><td>${r.best>=0?`<b>${r.best}</b> / ${EXAM_TOTAL}`:"–"}</td><td>${r.last?esc(r.last.date):"–"}</td><td><a href="#${r.c.id}-exam">${r.n?"View leaderboard":"Take the paper"}</a></td></tr>`).join("")}</table></div>
    <p class="lb-foot">Scores listed here are saved on this device. Leaderboards show your best attempt per chapter.</p>
  </div></div>`;
  app.querySelector(".acc-av").textContent=initials(u.name);
  app.querySelector(".acc-name").textContent=u.name||"Your account";
  app.querySelector(".acc-school").textContent=u.school||"Add your school";
  app.querySelector(".acc-email").textContent=u.email||"–";
}
document.addEventListener("click",async e=>{
  const b=e.target.closest('[data-auth="forgot-acc"]'); if(!b) return;
  const msg=document.querySelector(".acc-msg");
  try{ await AUTH.reset(AUTH.user.email); msg.textContent="We sent a password reset link to "+AUTH.user.email+"."; }catch(ex){ msg.textContent=authMsg(ex); }
});

/* ---------- Board exam intro (signed-in version) ---------- */
function examIntro(c){
  const last=jget(LASTKEY(c.id),null), hist=jget(HISTKEY(c.id),[]), run=jget(RUNKEY,null);
  if(last) return examResults(c,last);
  if(AUTH.mode===null){ AUTH.init().then(()=>{ if(!EX&&location.hash==="#"+c.id+"-exam") chapter(c,"exam"); }); return `<p class="lb-wait">Loading…</p>`; }
  const resume = run && run.ch===c.id && !run.done;
  const u=AUTH.user, ready=u&&u.complete;
  let who;
  if(resume) who=`<p class="bp-why">You have a paper in progress${run.student?` for <b>${esc(run.student.name)}</b>`:""}. The clock kept running while you were away.</p>`;
  else if(!u||(AUTH.mode==="claude"&&!u.name)) who=`<div class="bp-gate"><div><b>${AUTH.mode==="claude"?"Set up your profile to start":"Sign in to take the board paper"}</b><p>Your name and school appear on the leaderboard, and your scores are saved to your account.</p></div><div class="actions">${AUTH.mode==="claude"?`<button class="btn btn-blue" type="button" data-auth="complete">Set up profile</button>`:`<button class="btn btn-blue" type="button" data-auth="signup">Create free account</button><button class="btn btn-line" type="button" data-auth="signin">Sign in</button>`}</div></div>`;
  else if(!ready) who=`<div class="bp-gate"><div><b>Complete your profile to start</b><p>We need your school and mobile number for the board paper.</p></div><div class="actions"><button class="btn btn-blue" type="button" data-auth="complete">Complete profile</button></div></div>`;
  else who=`<div class="bp-cand"><span class="acc-av sm">${esc(initials(u.name))}</span><div><span class="lbl">Candidate</span><b>${esc(u.name)}</b><span>${esc(u.school)}</span></div><a href="#account" class="bp-edit">Edit details</a></div>`;
  return `<div class="ex">
  <div class="bp-card">
    <div class="bp-head"><div><h3>Chapter ${c.num} board paper</h3><p>${c.title}, in the CBSE board format.</p></div>
      <div class="bp-stats"><div><b>1 hour</b><span>time allowed</span></div><div><b>${EXAM_TOTAL}</b><span>maximum marks</span></div><div><b>17</b><span>questions</span></div></div></div>
    <div class="tbl"><table>
      <tr><th>Section</th><th>Type</th><th>Questions</th><th>Marks</th></tr>
      <tr><td>A</td><td>MCQ (9) and Assertion–Reason (2)</td><td>1–11</td><td>11 × 1 = 11</td></tr>
      <tr><td>B</td><td>Very Short Answer</td><td>12–13</td><td>2 × 2 = 4</td></tr>
      <tr><td>C</td><td>Short Answer</td><td>14–15</td><td>2 × 3 = 6</td></tr>
      <tr><td>D</td><td>Long Answer</td><td>16</td><td>1 × 5 = 5</td></tr>
      <tr><td>E</td><td>Case-Based</td><td>17</td><td>1 × 4 = 4</td></tr>
    </table></div>
    ${who}
    ${!resume&&ready?`<h4>Exam rules</h4>
    <ul class="bp-rules">
      <li>The paper opens in full screen and the timer starts immediately. It submits itself when the hour is over.</li>
      <li>Do not switch tabs, open other apps or leave full screen. Each time you do, you get a warning. On warning ${EXAM_MAX_WARN}, the paper is submitted automatically.</li>
      <li>Copying, pasting, right-click and printing are turned off during the exam.</li>
      <li>For every MCQ, choose an option <b>and</b> write your reason or working. An MCQ without a written reason gets 0.</li>
      <li>Type your full working for Sections B to E, as you would write it in the answer book.</li>
      <li>After submitting, Section A is checked automatically. You check Sections B to E against the model answers and marking scheme, then submit your score to the leaderboard.</li>
    </ul>
    <label class="bp-agree"><input type="checkbox" id="bpAgree"> I have read the rules and I am ready to start.</label>`:""}
    ${resume?`<div class="actions"><button class="btn btn-blue" type="button" data-exam="resume" data-ch="${c.id}">Resume my paper</button></div>`:ready?`<div class="actions"><button class="btn btn-blue" type="button" data-exam="start" data-ch="${c.id}">Start the 1-hour paper</button></div>`:""}
    <p class="missing" id="bpMsg" role="status"></p>
  </div>
  <div class="lb" id="lbBox"></div>
  <div id="ownerBox"></div>
  ${hist.length?`<h4 class="secttl">Your past attempts</h4><div class="tbl"><table><tr><th>Date</th><th>Score</th><th>Warnings</th></tr>${hist.slice(-8).reverse().map(h=>`<tr><td>${esc(h.date)}</td><td><b>${h.total}</b> / ${EXAM_TOTAL}</td><td>${h.viol}</td></tr>`).join("")}</table></div>`:""}
  </div>`;
}
