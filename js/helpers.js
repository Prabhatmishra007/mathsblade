/* MathsBlade – shared helpers: fractions, graph plotter, Chapter 1 diagrams, card thumbnails */
const f = (a,b)=>'<span class="fr"><span>'+a+'</span><span>'+b+'</span></span>';
const BLUE="var(--blue)", RED="var(--red)", GREEN="var(--good)", AMBER="var(--amber)", INK="var(--ink)", MUTED="var(--muted)";
const fmt = n => { if(Math.abs(n)<1e-9) n=0; const r=Math.round(n*100)/100; return (r<0?"−":"")+Math.abs(r); };

/* ---------- Generic graph plotter (SVG) ---------- */
let PID = 0;
function plot(o){
  const W=o.w||360, H=o.h||280, m=o.m??24;
  const [x0,x1]=o.xr, [y0,y1]=o.yr;
  const sx=(W-2*m)/(x1-x0), sy=(H-2*m)/(y1-y0);
  const X=x=>+(m+(x-x0)*sx).toFixed(2), Y=y=>+(H-m-(y-y0)*sy).toFixed(2);
  const id="clip"+(++PID);
  const gx=o.gx||1, gy=o.gy||1, lx=o.lx||gx*2, ly=o.ly||gy*2, fs=o.fs||10;
  let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${o.alt||'Graph'}"><defs><clipPath id="${id}"><rect x="${m}" y="${m}" width="${W-2*m}" height="${H-2*m}"/></clipPath></defs>`;
  // grid
  if(o.grid!==false){
    for(let x=Math.ceil(x0/gx)*gx;x<=x1+1e-9;x+=gx) s+=`<line x1="${X(x)}" y1="${m}" x2="${X(x)}" y2="${H-m}" stroke="var(--grid)" stroke-width="1"/>`;
    for(let y=Math.ceil(y0/gy)*gy;y<=y1+1e-9;y+=gy) s+=`<line x1="${m}" y1="${Y(y)}" x2="${W-m}" y2="${Y(y)}" stroke="var(--grid)" stroke-width="1"/>`;
  }
  // shaded polygons
  (o.poly||[]).forEach(p=>{ s+=`<polygon points="${p.pts.map(([a,b])=>X(a)+","+Y(b)).join(" ")}" fill="${p.fill||'var(--blue-soft)'}" stroke="none" clip-path="url(#${id})"/>`; });
  // axes
  const ax0 = (y0<=0&&y1>=0)?Y(0):H-m, ay0=(x0<=0&&x1>=0)?X(0):m;
  s+=`<line x1="${m-6}" y1="${ax0}" x2="${W-m+6}" y2="${ax0}" stroke="${MUTED}" stroke-width="1.4"/>`;
  s+=`<line x1="${ay0}" y1="${m-6}" x2="${ay0}" y2="${H-m+6}" stroke="${MUTED}" stroke-width="1.4"/>`;
  s+=`<text x="${W-m+4}" y="${ax0-6}" font-size="${fs+1}" fill="${MUTED}" font-style="italic">${o.xl||'x'}</text>`;
  s+=`<text x="${ay0+6}" y="${m-8}" font-size="${fs+1}" fill="${MUTED}" font-style="italic">${o.yl||'y'}</text>`;
  if(o.ticks!==false){
    for(let x=Math.ceil(x0/lx)*lx;x<=x1+1e-9;x+=lx){ if(Math.abs(x)<1e-9) continue; s+=`<text x="${X(x)}" y="${Math.min(ax0+13,H-4)}" font-size="${fs}" fill="${MUTED}" text-anchor="middle">${fmt(x)}</text>`; }
    for(let y=Math.ceil(y0/ly)*ly;y<=y1+1e-9;y+=ly){ if(Math.abs(y)<1e-9) continue; s+=`<text x="${Math.max(ay0-5,12)}" y="${Y(y)+3.5}" font-size="${fs}" fill="${MUTED}" text-anchor="end">${fmt(y)}</text>`; }
    if(x0<=0&&x1>=0&&y0<=0&&y1>=0) s+=`<text x="${ay0-5}" y="${ax0+13}" font-size="${fs}" fill="${MUTED}" text-anchor="end">O</text>`;
  }
  // curves
  (o.fns||[]).forEach(fn=>{
    const st=`fill="none" stroke="${fn.c||BLUE}" stroke-width="${fn.w||2.6}" stroke-linecap="round" ${fn.dash?`stroke-dasharray="${fn.dash}"`:''} ${fn.cls?`class="${fn.cls}"`:''} clip-path="url(#${id})"`;
    if(fn.x!==undefined){ s+=`<line x1="${X(fn.x)}" y1="${m}" x2="${X(fn.x)}" y2="${H-m}" ${st}/>`; }
    else{
      let d="", pen=false; const N=260;
      for(let i=0;i<=N;i++){ const x=x0+(x1-x0)*i/N, y=fn.f(x);
        if(!isFinite(y)||y>y1+(y1-y0)*2||y<y0-(y1-y0)*2){pen=false;continue;}
        d+=(pen?"L":"M")+X(x)+" "+Y(y)+" "; pen=true; }
      s+=`<path d="${d}" ${st}/>`;
    }
    if(fn.label) s+=`<text x="${X(fn.lx)}" y="${Y(fn.ly)}" font-size="${fs+1}" fill="${fn.c||BLUE}" font-weight="600" text-anchor="${fn.anchor||'start'}">${fn.label}</text>`;
  });
  // points
  (o.pts||[]).forEach(p=>{
    const [px,py,lab,dx=6,dy=-8,col=INK,anc="start"]=p;
    s+=`<circle cx="${X(px)}" cy="${Y(py)}" r="4.5" fill="${col}" stroke="var(--bg)" stroke-width="1.6" ${o.popPts?'class="pop"':''}/>`;
    if(lab) s+=`<text x="${X(px)+dx}" y="${Y(py)+dy}" font-size="${fs+1}" fill="${col}" font-weight="600" text-anchor="${anc}" ${o.popPts?'class="pop"':''}>${lab}</text>`;
  });
  (o.txt||[]).forEach(([tx,ty,str,col=INK,anc="start"])=>{ s+=`<text x="${X(tx)}" y="${Y(ty)}" font-size="${fs+1}" fill="${col}" text-anchor="${anc}">${str}</text>`; });
  return s+"</svg>";
}
const fig = (svg,cap,cls="")=>`<figure class="fig ${cls}">${svg}${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
const lineY = (a,b,c)=>x=>(c-a*x)/b;  /* for ax + by = c */

/* ---------- Chapter 1 diagrams ---------- */
function numberFamily(){
  const r=(x,y,w,h,fill,st)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${st}" stroke-width="1.6"/>`;
  const t=(x,y,str,c=INK,w=600,sz=12)=>`<text x="${x}" y="${y}" font-size="${sz}" fill="${c}" font-weight="${w}">${str}</text>`;
  return `<svg viewBox="0 0 470 262" role="img" aria-label="Number family: natural inside whole inside integers inside rationals; rationals and irrationals make up real numbers">
  ${r(4,4,462,254,"var(--surface)",BLUE)}${t(18,24,"Real numbers (R)",BLUE,700,13)}
  ${r(16,36,292,212,"var(--bg)",BLUE)}${t(28,56,"Rational (Q)")}${t(28,72,"3/4, −0.5, 0.333…",MUTED,400,11)}
  ${r(30,82,216,156,"var(--blue-soft)",BLUE)}${t(42,101,"Integers (Z)")}${t(42,116,"−3, −1",MUTED,400,11)}
  ${r(44,126,160,102,"var(--bg)",BLUE)}${t(56,145,"Whole (W)")}${t(56,160,"0",MUTED,400,11)}
  ${r(58,170,118,48,"var(--blue-soft)",BLUE)}${t(70,190,"Natural (N)")}${t(70,206,"1, 2, 3, …",MUTED,400,11)}
  ${r(320,36,134,212,"var(--bg)",RED)}${t(334,56,"Irrational",RED)}
  ${t(334,86,"√2 = 1.41421…",INK,400,12)}${t(334,112,"√5",INK,400,12)}${t(334,138,"π = 3.14159…",INK,400,12)}${t(334,164,"3 + 2√5",INK,400,12)}${t(334,190,"0.1011011101…",INK,400,12)}
  ${t(334,226,"never ends, never repeats",MUTED,400,10)}
  </svg>`;
}
function factorTree(){
  const vals=[3825,1275,425,85,17], pr=[3,3,5,5];
  let s=`<svg viewBox="0 0 330 270" role="img" aria-label="Factor tree of 3825">`;
  const P=i=>[110+46*i,30+52*i];
  for(let i=0;i<4;i++){
    const [x,y]=P(i), [nx,ny]=P(i+1), px=x-46;
    s+=`<line x1="${x}" y1="${y+10}" x2="${px}" y2="${ny-14}" stroke="${MUTED}" stroke-width="1.5"/><line x1="${x}" y1="${y+10}" x2="${nx}" y2="${ny-14}" stroke="${MUTED}" stroke-width="1.5"/>`;
    s+=`<circle cx="${px}" cy="${ny}" r="15" fill="${BLUE}"/><text x="${px}" y="${ny+5}" font-size="14" font-weight="700" fill="var(--on-blue)" text-anchor="middle">${pr[i]}</text>`;
  }
  vals.forEach((v,i)=>{ const [x,y]=P(i); const last=i===4;
    s+= last?`<circle cx="${x}" cy="${y}" r="15" fill="${BLUE}"/><text x="${x}" y="${y+5}" font-size="14" font-weight="700" fill="var(--on-blue)" text-anchor="middle">${v}</text>`
            :`<rect x="${x-26}" y="${y-13}" width="52" height="26" rx="8" fill="var(--bg)" stroke="${BLUE}" stroke-width="1.6"/><text x="${x}" y="${y+5}" font-size="14" font-weight="700" fill="${INK}" text-anchor="middle">${v}</text>`; });
  s+=`<text x="10" y="262" font-size="13" fill="${INK}" font-weight="600">3825 = 3² × 5² × 17</text></svg>`;
  return s;
}
function venn(){
  const t=(x,y,str,sz=17,c=INK,w=700)=>`<text x="${x}" y="${y}" font-size="${sz}" fill="${c}" font-weight="${w}" text-anchor="middle">${str}</text>`;
  return `<svg viewBox="0 0 470 250" role="img" aria-label="Venn diagram of prime factors of 336 and 54">
  <circle cx="175" cy="118" r="98" fill="${BLUE}" fill-opacity=".12" stroke="${BLUE}" stroke-width="2"/>
  <circle cx="295" cy="118" r="98" fill="${RED}" fill-opacity=".12" stroke="${RED}" stroke-width="2"/>
  ${t(120,22,"336",15,BLUE)}${t(350,22,"54",15,RED)}
  ${t(122,96,"2   2")}${t(122,128,"2   7")}
  ${t(235,104,"2")}${t(235,138,"3")}
  ${t(345,112,"3   3")}
  ${t(235,238,"HCF = common part = 2 × 3 = 6      LCM = everything = 2⁴ × 3³ × 7 = 3024",12,INK,600)}
  </svg>`;
}
function meetLine(){
  const X=t=>24+t*10.6;
  let s=`<svg viewBox="0 0 470 140" role="img" aria-label="Ravi meets the start every 12 minutes, Sonia every 18; both at 36">`;
  s+=`<rect x="${X(36)-12}" y="18" width="24" height="104" rx="8" fill="${GREEN}" fill-opacity=".15"/>`;
  [["Ravi (12 min)",46,12,BLUE],["Sonia (18 min)",96,18,RED]].forEach(([nm,y,step,c])=>{
    s+=`<line x1="${X(0)}" y1="${y}" x2="${X(40)}" y2="${y}" stroke="${MUTED}" stroke-width="1.4"/>`;
    s+=`<text x="${X(0)}" y="${y-14}" font-size="12" font-weight="600" fill="${c}">${nm}</text>`;
    for(let k=0;k<=40;k+=step){ s+=`<circle cx="${X(k)}" cy="${y}" r="6" fill="${c}"/><text x="${X(k)}" y="${y+20}" font-size="11" fill="${MUTED}" text-anchor="middle">${k}</text>`; }
  });
  s+=`<text x="${X(36)}" y="134" font-size="11" font-weight="700" fill="${GREEN}" text-anchor="middle">meet</text></svg>`;
  return s;
}

/* ---------- Mini thumbnails for chapter cards ---------- */
const THUMBS = {
  ch1:`<svg viewBox="0 0 220 70" aria-hidden="true"><g font-family="Literata,serif" font-size="15" fill="${INK}"><circle cx="30" cy="35" r="17" fill="${BLUE}"/><text x="30" y="40" fill="var(--on-blue)" text-anchor="middle" font-weight="700">2</text><circle cx="72" cy="35" r="17" fill="${BLUE}"/><text x="72" y="40" fill="var(--on-blue)" text-anchor="middle" font-weight="700">3</text><circle cx="114" cy="35" r="17" fill="${BLUE}"/><text x="114" y="40" fill="var(--on-blue)" text-anchor="middle" font-weight="700">5</text><circle cx="156" cy="35" r="17" fill="${BLUE}"/><text x="156" y="40" fill="var(--on-blue)" text-anchor="middle" font-weight="700">7</text><text x="186" y="41">√2</text></g></svg>`,
  ch2: plot({xr:[-3.2,5.2],yr:[-10,8],w:220,h:70,m:4,grid:false,ticks:false,xl:"",yl:"",fns:[{f:x=>x*x-2*x-8,w:2.4}],pts:[[-2,0],[4,0]]}),
  ch3: plot({xr:[-1,11],yr:[-5,11],w:220,h:70,m:4,grid:false,ticks:false,xl:"",yl:"",fns:[{f:x=>10-x,w:2.4},{f:x=>x-4,c:RED,w:2.4}],pts:[[7,3]]})
};
