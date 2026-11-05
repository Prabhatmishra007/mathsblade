/* =====================================================================
   BOARD EXAM MODE: 1-hour chapter paper in CBSE board format (30 marks)
   ===================================================================== */
const sch=(...pts)=>pts; /* [value point, marks] pairs */

CH1.exam={
A:[
{q:`The prime factorisation of 156 is`,o:["2² × 3 × 13","2 × 3² × 13","2² × 3² × 13","2 × 3 × 13"],a:0,sol:`<p>156 = 2 × 78 = 2 × 2 × 39 = 2<sup>2</sup> × 3 × 13</p>`},
{q:`The HCF of 24 and 36 is`,o:["6","12","18","72"],a:1,sol:`<p>24 = 2<sup>3</sup> × 3, 36 = 2<sup>2</sup> × 3<sup>2</sup> ⇒ HCF = 2<sup>2</sup> × 3 = 12</p>`},
{q:`The LCM of 12 and 18 is`,o:["6","36","72","216"],a:1,sol:`<p>12 = 2<sup>2</sup> × 3, 18 = 2 × 3<sup>2</sup> ⇒ LCM = 2<sup>2</sup> × 3<sup>2</sup> = 36</p>`},
{q:`If HCF(a, b) = 6 and a × b = 180, then LCM(a, b) is`,o:["30","36","1080","174"],a:0,sol:`<p>LCM = 180 ÷ 6 = 30</p>`},
{q:`Which of the following is irrational?`,o:["√49","0.375","√12","22/7"],a:2,sol:`<p>√12 = 2√3, and √3 is irrational. The others are rational.</p>`},
{q:`For any natural number n, 5<sup>n</sup> can never end with the digit`,o:["5","0","odd digit","25"],a:1,sol:`<p>5<sup>n</sup> has no factor 2, so it can never end in 0 (it always ends in 5).</p>`},
{q:`The LCM of 2<sup>3</sup> × 3<sup>2</sup> and 2<sup>2</sup> × 3<sup>3</sup> is`,o:["2² × 3²","2³ × 3³","2⁵ × 3⁵","2 × 3"],a:1,sol:`<p>Take the greatest power of each prime: 2<sup>3</sup> × 3<sup>3</sup> = 216</p>`},
{q:`The product of the HCF and LCM of 15 and 25 is`,o:["75","125","375","40"],a:2,sol:`<p>HCF × LCM = 15 × 25 = 375</p>`},
{q:`The number 3 + √2 is`,o:["a natural number","an integer","a rational number","an irrational number"],a:3,sol:`<p>Rational + irrational = irrational.</p>`},
{ar:true,q:`<b>Assertion (A):</b> 12<sup>n</sup> can end with the digit 0 for some natural number n.<br><b>Reason (R):</b> 12<sup>n</sup> = 2<sup>2n</sup> × 3<sup>n</sup> has no prime factor 5.`,a:3,sol:`<p>R is true, and because there is no factor 5, A is false.</p>`},
{ar:true,q:`<b>Assertion (A):</b> HCF(17, 23) = 1.<br><b>Reason (R):</b> Two distinct prime numbers are always co-prime.`,a:0,sol:`<p>17 and 23 are distinct primes, so their only common factor is 1. R explains A.</p>`}
],
B:[
{q:`Find the HCF and LCM of 96 and 404 by the prime factorisation method.`,m:2,sol:`<p>96 = 2<sup>5</sup> × 3</p><p>404 = 2<sup>2</sup> × 101</p><p>HCF = 2<sup>2</sup> = 4</p><p>LCM = 2<sup>5</sup> × 3 × 101 = 9696</p>`,scheme:sch(["Correct prime factorisation of both numbers",1],["HCF = 4 and LCM = 9696",1])},
{q:`Show that 7<sup>n</sup> cannot end with the digit 0 for any natural number n.`,m:2,sol:`<p>If 7<sup>n</sup> ended with 0, it would be divisible by 10, so its prime factors would include 2 and 5.</p><p>But 7<sup>n</sup> = 7 × 7 × … × 7 has only the prime 7.</p><p>By the uniqueness of prime factorisation, 7<sup>n</sup> cannot end with 0.</p>`,scheme:sch(["States that ending in 0 needs prime factors 2 and 5",1],["Shows 7ⁿ has only the prime 7 and concludes",1])}
],
C:[
{q:`Prove that √3 is irrational.`,m:3,sol:`<p>Assume √3 = ${f('a','b')}, a and b co-prime, b ≠ 0.</p><p>Then a<sup>2</sup> = 3b<sup>2</sup>, so 3 divides a<sup>2</sup> and hence 3 divides a.</p><p>Let a = 3c ⇒ 9c<sup>2</sup> = 3b<sup>2</sup> ⇒ b<sup>2</sup> = 3c<sup>2</sup>, so 3 divides b.</p><p>3 divides both a and b, which contradicts co-primeness. So √3 is irrational.</p>`,scheme:sch(["Assumes √3 = a/b with a, b co-prime",1],["Shows 3 divides a and 3 divides b",1.5],["States the contradiction and conclusion",0.5])},
{q:`Three friends jog round a circular track and take 12, 15 and 18 minutes per round. They start together from the same point. After how many minutes will they meet again at the starting point? How many rounds will the fastest have completed by then?`,m:3,sol:`<p>12 = 2<sup>2</sup> × 3, 15 = 3 × 5, 18 = 2 × 3<sup>2</sup></p><p>LCM = 2<sup>2</sup> × 3<sup>2</sup> × 5 = 180 minutes</p><p>Fastest takes 12 min per round: 180 ÷ 12 = 15 rounds</p>`,scheme:sch(["Prime factorisation of 12, 15, 18",1],["LCM = 180 minutes",1],["Fastest completes 15 rounds",1])}
],
D:[
{q:`Prove that √5 is irrational. Hence show that 3 + 2√5 is irrational.`,m:5,sol:`<p><b>Part 1.</b> Assume √5 = ${f('a','b')}, a and b co-prime.</p><p>a<sup>2</sup> = 5b<sup>2</sup> ⇒ 5 divides a. Let a = 5c.</p><p>25c<sup>2</sup> = 5b<sup>2</sup> ⇒ b<sup>2</sup> = 5c<sup>2</sup> ⇒ 5 divides b.</p><p>Contradiction, so √5 is irrational.</p><p><b>Part 2.</b> Assume 3 + 2√5 = r (rational).</p><p>Then √5 = ${f('r − 3','2')}, which is rational. Contradiction.</p><p>So 3 + 2√5 is irrational.</p>`,scheme:sch(["Correct assumption for √5",1],["Shows 5 divides a and b",1.5],["Contradiction and conclusion for √5",0.5],["Rearranges 3 + 2√5 = r to isolate √5",1],["Concludes using contradiction",1])}
],
E:{title:"Packing fruit",story:"A fruit seller has 864 apples and 1080 oranges. She wants to pack them in boxes so that each box has the same number of fruits and contains only one kind of fruit. She wants to use the least number of boxes.",parts:[
{q:`Express 1080 as a product of its prime factors.`,m:1,sol:`<p>1080 = 2<sup>3</sup> × 3<sup>3</sup> × 5</p>`,scheme:sch(["Correct factorisation",1])},
{q:`How many fruits should be packed in each box?`,m:1,sol:`<p>864 = 2<sup>5</sup> × 3<sup>3</sup></p><p>HCF = 2<sup>3</sup> × 3<sup>3</sup> = 216</p>`,scheme:sch(["HCF = 216",1])},
{q:`Find the least number of boxes needed.`,m:2,sol:`<p>Boxes = ${f('864','216')} + ${f('1080','216')} = 4 + 5 = 9</p>`,scheme:sch(["Divides each quantity by 216",1],["Total = 9 boxes",1])}
]}
};

CH2.exam={
A:[
{q:`The degree of the polynomial 4x<sup>3</sup> − 2x + 7 is`,o:["1","2","3","4"],a:2,sol:`<p>The highest power of x is 3.</p>`},
{q:`The zeroes of x<sup>2</sup> − 9 are`,o:["3, 3","−3, −3","3, −3","9, −9"],a:2,sol:`<p>x<sup>2</sup> − 9 = (x − 3)(x + 3)</p>`},
{q:`The sum of the zeroes of 2x<sup>2</sup> − 8x + 5 is`,o:["4","−4","5/2","−5/2"],a:0,sol:`<p>−b/a = 8/2 = 4</p>`},
{q:`The product of the zeroes of 3x<sup>2</sup> + 5x − 6 is`,o:["2","−2","5/3","−5/3"],a:1,sol:`<p>c/a = −6/3 = −2</p>`},
{q:`A quadratic polynomial whose zeroes are 2 and −3 is`,o:["x² − x − 6","x² + x − 6","x² + x + 6","x² − 5x + 6"],a:1,sol:`<p>Sum = −1, product = −6 ⇒ x<sup>2</sup> + x − 6</p>`},
{q:`If the graph of y = p(x) cuts the x-axis at 3 points, the number of zeroes of p(x) is`,o:["0","1","2","3"],a:3,sol:`<p>Each point where the graph meets the x-axis gives one zero.</p>`},
{q:`If 2 is a zero of x<sup>2</sup> − 6x + k, then k is`,o:["8","−8","4","12"],a:0,sol:`<p>4 − 12 + k = 0 ⇒ k = 8</p>`},
{q:`The zeroes of x<sup>2</sup> + 4x + 4 are`,o:["2, 2","−2, −2","2, −2","4, 1"],a:1,sol:`<p>(x + 2)<sup>2</sup> ⇒ −2, −2</p>`},
{q:`If α and β are zeroes of x<sup>2</sup> − 5x + 6, then α<sup>2</sup> + β<sup>2</sup> is`,o:["13","25","37","1"],a:0,sol:`<p>(α + β)<sup>2</sup> − 2αβ = 25 − 12 = 13</p>`},
{ar:true,q:`<b>Assertion (A):</b> x<sup>2</sup> + 1 has no real zero.<br><b>Reason (R):</b> x<sup>2</sup> + 1 ≥ 1 for every real x.`,a:0,sol:`<p>Since x<sup>2</sup> + 1 is always at least 1, it is never 0. R explains A.</p>`},
{ar:true,q:`<b>Assertion (A):</b> A quadratic polynomial whose zeroes are 0 and 4 is x<sup>2</sup> − 4x.<br><b>Reason (R):</b> The product of the zeroes of ax<sup>2</sup> + bx + c is c/a.`,a:1,sol:`<p>Both statements are true, but A needs the sum of zeroes as well, so R alone does not explain it.</p>`}
],
B:[
{q:`Find a quadratic polynomial, the sum and product of whose zeroes are ${f('−3','2')} and −1 respectively.`,m:2,sol:`<p>x<sup>2</sup> − (sum)x + product = x<sup>2</sup> + ${f('3','2')}x − 1</p><p>Multiplying by 2: 2x<sup>2</sup> + 3x − 2</p>`,scheme:sch(["Uses x² − (sum)x + product",1],["2x² + 3x − 2 (or any non-zero multiple)",1])},
{q:`If α and β are the zeroes of x<sup>2</sup> − 4x + 3, find ${f('1','α')} + ${f('1','β')}.`,m:2,sol:`<p>α + β = 4, αβ = 3</p><p>${f('1','α')} + ${f('1','β')} = ${f('α + β','αβ')} = ${f('4','3')}</p>`,scheme:sch(["α + β = 4 and αβ = 3",1],["Answer 4/3",1])}
],
C:[
{q:`Find the zeroes of 4x<sup>2</sup> − 4x − 3 and verify the relationship between the zeroes and the coefficients.`,m:3,sol:`<p>4x<sup>2</sup> − 6x + 2x − 3 = 2x(2x − 3) + 1(2x − 3) = (2x − 3)(2x + 1)</p><p>Zeroes: ${f('3','2')} and ${f('−1','2')}</p><p>Sum = 1 = ${f('−(−4)','4')} ✓</p><p>Product = ${f('−3','4')} = ${f('c','a')} ✓</p>`,scheme:sch(["Correct factorisation",1],["Both zeroes",1],["Verifies sum and product",1])},
{q:`If α and β are the zeroes of x<sup>2</sup> − 3x + 2, find a quadratic polynomial whose zeroes are α + 2 and β + 2.`,m:3,sol:`<p>α + β = 3, αβ = 2</p><p>New sum = α + β + 4 = 7</p><p>New product = αβ + 2(α + β) + 4 = 2 + 6 + 4 = 12</p><p>Polynomial: x<sup>2</sup> − 7x + 12</p>`,scheme:sch(["α + β and αβ",1],["New sum 7 and product 12",1],["x² − 7x + 12",1])}
],
D:[
{q:`If α and β are the zeroes of 2x<sup>2</sup> − 5x + 3, find (i) α<sup>2</sup> + β<sup>2</sup> (ii) α<sup>3</sup> + β<sup>3</sup> (iii) a quadratic polynomial whose zeroes are ${f('1','α')} and ${f('1','β')}.`,m:5,sol:`<p>α + β = ${f('5','2')}, αβ = ${f('3','2')}</p><p>(i) (α + β)<sup>2</sup> − 2αβ = ${f('25','4')} − 3 = ${f('13','4')}</p><p>(ii) (α + β)<sup>3</sup> − 3αβ(α + β) = ${f('125','8')} − ${f('45','4')} = ${f('35','8')}</p><p>(iii) Sum = ${f('α + β','αβ')} = ${f('5','3')}, product = ${f('1','αβ')} = ${f('2','3')}</p><p>Polynomial: 3x<sup>2</sup> − 5x + 2</p>`,scheme:sch(["α + β and αβ",1],["(i) 13/4",1],["(ii) correct identity and 35/8",1.5],["(iii) 3x² − 5x + 2",1.5])}
],
E:{title:"The garden fountain",story:"The water from a garden fountain follows the path y = −x<sup>2</sup> + 4x, where x is the horizontal distance (in m) from the nozzle and y is the height (in m).",parts:[
{q:`What is the shape of the path, and why does it open downward?`,m:1,sol:`<p>A parabola. It opens downward because the coefficient of x<sup>2</sup> is −1 &lt; 0.</p>`,scheme:sch(["Parabola, opens down because a < 0",1])},
{q:`Find the zeroes of the polynomial.`,m:1,sol:`<p>−x(x − 4) = 0 ⇒ x = 0 or x = 4</p>`,scheme:sch(["Zeroes 0 and 4",1])},
{q:`Verify the relationship between the zeroes and the coefficients.`,m:2,sol:`<p>Sum = 4 = ${f('−4','−1')} ✓</p><p>Product = 0 = ${f('0','−1')} ✓</p>`,scheme:sch(["Sum verified",1],["Product verified",1])}
]}
};

CH3.exam={
A:[
{q:`The pair x + y = 5 and 2x + 2y = 10 has`,o:["no solution","a unique solution","infinitely many solutions","exactly two solutions"],a:2,sol:`<p>1/2 = 1/2 = 5/10 ⇒ coincident lines</p>`},
{q:`The pair 3x + 2y = 7 and 6x + 4y = 9 has`,o:["no solution","a unique solution","infinitely many solutions","exactly two solutions"],a:0,sol:`<p>3/6 = 2/4 ≠ 7/9 ⇒ parallel lines</p>`},
{q:`The solution of x + y = 7 and x − y = 1 is`,o:["(3, 4)","(4, 3)","(5, 2)","(2, 5)"],a:1,sol:`<p>Add: 2x = 8 ⇒ x = 4, y = 3</p>`},
{q:`kx + 2y = 5 and 3x + y = 1 have a unique solution if`,o:["k = 6","k ≠ 6","k = 3","k ≠ 3"],a:1,sol:`<p>k/3 ≠ 2/1 ⇒ k ≠ 6</p>`},
{q:`The graph of 2x + 3y = 6 cuts the y-axis at`,o:["(3, 0)","(0, 3)","(0, 2)","(2, 0)"],a:2,sol:`<p>x = 0 ⇒ 3y = 6 ⇒ y = 2</p>`},
{q:`If x = 2, y = 1 is a solution of 2x + 3y = k, then k is`,o:["5","6","7","8"],a:2,sol:`<p>4 + 3 = 7</p>`},
{q:`If a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are`,o:["intersecting","parallel","coincident","perpendicular"],a:1,sol:`<p>Same slope, different intercepts.</p>`},
{q:`The lines x = 3 and y = −2 intersect at`,o:["(−2, 3)","(3, −2)","(3, 2)","(−3, 2)"],a:1,sol:`<p>x = 3 and y = −2 together give (3, −2).</p>`},
{q:`The sum of two numbers is 20 and their difference is 4. The larger number is`,o:["8","10","12","16"],a:2,sol:`<p>x + y = 20, x − y = 4 ⇒ x = 12</p>`},
{ar:true,q:`<b>Assertion (A):</b> 2x + 3y = 5 and 4x + 6y = 10 are consistent.<br><b>Reason (R):</b> Coincident lines have infinitely many solutions.`,a:0,sol:`<p>All three ratios equal 1/2, so the lines coincide. R explains why A is consistent.</p>`},
{ar:true,q:`<b>Assertion (A):</b> x − 2y = 3 and 3x − 6y = 7 intersect at exactly one point.<br><b>Reason (R):</b> If a₁/a₂ ≠ b₁/b₂, the lines intersect at exactly one point.`,a:3,sol:`<p>1/3 = −2/−6 ≠ 3/7, so the lines are parallel. A is false; R is true.</p>`}
],
B:[
{q:`Solve by substitution: x + 2y = 8 and 2x − y = 1.`,m:2,sol:`<p>x = 8 − 2y</p><p>2(8 − 2y) − y = 1 ⇒ 16 − 5y = 1 ⇒ y = 3</p><p>x = 8 − 6 = 2</p>`,scheme:sch(["Correct substitution",1],["x = 2, y = 3",1])},
{q:`Find k for which 2x + 3y = 4 and (k + 2)x + 6y = 3k + 2 have infinitely many solutions.`,m:2,sol:`<p>${f('2','k + 2')} = ${f('3','6')} = ${f('4','3k + 2')}</p><p>${f('2','k + 2')} = ${f('1','2')} ⇒ k = 2</p><p>Check: ${f('4','8')} = ${f('1','2')} ✓</p>`,scheme:sch(["Writes the ratio condition",1],["k = 2 with check",1])}
],
C:[
{q:`Solve by elimination: 3x + 2y = 11 and 2x − 3y = −10.`,m:3,sol:`<p>Multiply by 3 and 2: 9x + 6y = 33, 4x − 6y = −20</p><p>Add: 13x = 13 ⇒ x = 1</p><p>3 + 2y = 11 ⇒ y = 4</p>`,scheme:sch(["Makes coefficients of y equal",1],["x = 1",1],["y = 4",1])},
{q:`5 pens and 3 notebooks cost ₹95, while 3 pens and 5 notebooks cost ₹105. Find the cost of one pen and one notebook.`,m:3,sol:`<p>5x + 3y = 95, 3x + 5y = 105</p><p>Add: 8(x + y) = 200 ⇒ x + y = 25</p><p>Subtract: 2(x − y) = −10 ⇒ x − y = −5</p><p>x = 10, y = 15</p>`,scheme:sch(["Forms both equations",1],["Solves correctly",1],["Pen ₹10, notebook ₹15",1])}
],
D:[
{q:`Solve graphically: x + y = 6 and x − y = 2. Find the vertices of the triangle formed by these lines and the x-axis, and its area. (Write your table of values, the point of intersection and the working.)`,m:5,sol:`<p>x + y = 6: (0, 6), (6, 0), (4, 2)</p><p>x − y = 2: (2, 0), (4, 2), (0, −2)</p><p>The lines meet at (4, 2), so x = 4, y = 2.</p><p>Vertices with the x-axis: (6, 0), (2, 0), (4, 2)</p><p>Area = ${f('1','2')} × 4 × 2 = 4 sq units</p>`,scheme:sch(["Table of values for both lines",1.5],["Solution (4, 2)",1],["Vertices (2, 0), (6, 0), (4, 2)",1.5],["Area = 4 sq units",1])}
],
E:{title:"Cinema tickets",story:"At a cinema, a family of 2 adults and 3 children paid ₹850. Another family of 3 adults and 2 children paid ₹900. Let an adult ticket cost ₹x and a child ticket ₹y.",parts:[
{q:`Write the pair of linear equations.`,m:1,sol:`<p>2x + 3y = 850, 3x + 2y = 900</p>`,scheme:sch(["Both equations",1])},
{q:`Is the pair consistent? Give a reason.`,m:1,sol:`<p>${f('2','3')} ≠ ${f('3','2')} ⇒ unique solution, so consistent.</p>`,scheme:sch(["Ratio check and conclusion",1])},
{q:`Find the price of each ticket.`,m:2,sol:`<p>Add: 5(x + y) = 1750 ⇒ x + y = 350</p><p>Subtract: x − y = 50</p><p>x = 200, y = 150</p>`,scheme:sch(["Correct method",1],["Adult ₹200, child ₹150",1])}
]}
};

/* ---------------- Exam engine ---------------- */
const EXAM_MS = 60*60*1000, EXAM_MAX_WARN = 3, EXAM_TOTAL = 30;
const RUNKEY = "mb-exam-run", LASTKEY = id=>"mb-exam-last-"+id, HISTKEY = id=>"mb-exam-hist-"+id;
const esc = t=>String(t||"").replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
const jget=(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}};
const jset=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const jdel=k=>{try{localStorage.removeItem(k)}catch(e){}};
let EX = null; /* running exam */

function examItems(c){
  const E=c.exam, items=[]; let n=0;
  E.A.forEach((q,i)=>items.push({k:"q"+(++n),n,sec:"A",type:"mcq",m:1,...q}));
  ["B","C","D"].forEach(s=>E[s].forEach(q=>items.push({k:"q"+(++n),n,sec:s,type:"long",...q})));
  n++; E.E.parts.forEach((p,i)=>items.push({k:"q"+n+"abc"[i],n,part:["(i)","(ii)","(iii)"][i],sec:"E",type:"long",...p}));
  return items;
}
function fmtTime(ms){ms=Math.max(0,ms);const s=Math.ceil(ms/1000);return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");}

function paperHTML(c, ans){
  const items=examItems(c), E=c.exam;
  const secHead=(s,t,r)=>`<div class="ep-sec"><h3>Section ${s}</h3><p>${t}</p><small>${r}</small></div>`;
  const val=k=>esc(ans[k]||"");
  let h=`<div class="ep-cover">
    <div class="ep-title">MATHEMATICS (STANDARD)<br><span>Chapter ${c.num}: ${c.title} – Board Practice Paper</span></div>
    <div class="ep-meta"><span>Time allowed: 1 hour</span><span>Maximum marks: ${EXAM_TOTAL}</span></div>
    <ol class="ep-gi"><li>This paper has 17 questions in five sections, A to E. All questions are compulsory.</li><li>Section A has 9 MCQs and 2 Assertion–Reason questions of 1 mark each. Choose an option and write your reason.</li><li>Section B has 2 questions of 2 marks, Section C has 2 of 3 marks, Section D has 1 of 5 marks and Section E has 1 case study of 4 marks.</li><li>Use of calculators is not allowed.</li></ol>
  </div>`;
  let cur="";
  items.forEach(it=>{
    if(it.sec!==cur){
      cur=it.sec;
      h+= cur==="A"?secHead("A","Questions 1 to 11 carry 1 mark each.","Questions 10 and 11 are Assertion–Reason. Choose: (a) both true and R explains A; (b) both true but R does not explain A; (c) A true, R false; (d) A false, R true.")
        : cur==="B"?secHead("B","Questions 12 and 13 are Very Short Answer questions of 2 marks each.","")
        : cur==="C"?secHead("C","Questions 14 and 15 are Short Answer questions of 3 marks each.","")
        : cur==="D"?secHead("D","Question 16 is a Long Answer question of 5 marks.","")
        : secHead("E","Question 17 is a case study of 4 marks.","")+`<div class="ep-case"><b>17. ${E.E.title}</b><p>${E.E.story}</p></div>`;
    }
    if(it.type==="mcq"){
      const opts = it.ar? ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is not the correct explanation of A.","A is true, but R is false.","A is false, but R is true."] : it.o;
      h+=`<div class="ep-q" id="ep-${it.k}"><div class="ep-qt"><b>${it.n}.</b><div>${it.q}</div><span class="ep-m">[1]</span></div>
        <div class="ep-opts ${it.ar?'one':''}">${opts.map((o,j)=>`<label class="ep-opt"><input type="radio" name="${it.k}" value="${j}" ${String(ans[it.k])===String(j)?"checked":""}> (${"abcd"[j]}) ${o}</label>`).join("")}</div>
        <textarea class="ep-ta sm" data-k="${it.k}r" rows="2" placeholder="Reason / working (required for the mark)" spellcheck="false">${val(it.k+"r")}</textarea></div>`;
    }else{
      const rows=Math.min(14,3+it.m*2);
      h+=`<div class="ep-q" id="ep-${it.k}"><div class="ep-qt"><b>${it.part?it.part:it.n+"."}</b><div>${it.q}</div><span class="ep-m">[${it.m}]</span></div>
        <textarea class="ep-ta" data-k="${it.k}" rows="${rows}" placeholder="Write your answer with full working…" spellcheck="false">${val(it.k)}</textarea></div>`;
    }
  });
  h+=`<div class="ep-end">End of paper. Check your answers, then press <b>Submit paper</b>.</div>`;
  return h;
}

function examToast(msg){const t=document.getElementById("exToast"); if(!t) return; t.textContent=msg; t.classList.add("show"); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove("show"),1800);}
function examSave(){ if(EX) jset(RUNKEY,EX.state); }
function enterFS(){ const el=document.documentElement; if(el.requestFullscreen){ el.requestFullscreen().then(()=>{EX&&(EX.fs=true);}).catch(()=>{ if(EX){EX.fs=false; const n=document.getElementById("exFsNote"); if(n) n.hidden=false;} }); } }

function startExam(c, resume){
  let state = resume ? jget(RUNKEY,null) : null;
  if(!state || state.ch!==c.id){ state={ch:c.id,start:Date.now(),ans:{},viol:0,done:false,student:jget(STKEY,null)}; resume=false; }
  if(Date.now()-state.start>=EXAM_MS){ EX={c,state,handlers:[]}; submitExam("time"); return; }
  EX={c,state,handlers:[],graceUntil:Date.now()+2000,lastViol:0,fs:false,modal:false};
  jset(RUNKEY,state);
  const ov=document.createElement("div");
  ov.id="exOv"; ov.className="ex-ov"; ov.setAttribute("role","dialog"); ov.setAttribute("aria-modal","true");
  ov.innerHTML=`<div class="ex-top">
      <div class="ex-brand"><span class="mark" aria-hidden="true">π</span><span>Chapter ${c.num} board paper${state.student?" – "+esc(state.student.name):""}</span></div>
      <div class="ex-timer" id="exTimer" aria-live="off">60:00</div>
      <div class="ex-warn" id="exWarn">Warnings ${state.viol}/${EXAM_MAX_WARN}</div>
      <button class="btn btn-blue ex-sub" type="button" data-x="ask">Submit paper</button>
    </div>
    <div class="ex-sym" aria-label="Maths symbols">Insert: ${["²","³","√","×","÷","π","≠","≤","≥","⇒","α","β","½","−"].map(x=>`<button type="button" data-sym="${x}" tabindex="-1">${x}</button>`).join("")}</div>
    <div class="ex-fsnote" id="exFsNote" hidden>Full screen isn’t available in this viewer. Leaving this window is still detected and counted as a warning.</div>
    <div class="ex-body" id="exBody"><div class="ep">${paperHTML(c,state.ans)}</div></div>
    <div class="ex-modal" id="exModal" hidden></div>
    <div class="ex-toast" id="exToast" role="status"></div>`;
  document.body.appendChild(ov);
  document.body.classList.add("exam-on");
  enterFS();

  const on=(t,ev,fn,opt)=>{t.addEventListener(ev,fn,opt);EX.handlers.push([t,ev,fn,opt]);};
  /* answers autosave */
  on(ov,"input",e=>{const el=e.target; if(el.matches("textarea[data-k]")) EX.state.ans[el.dataset.k]=el.value; else if(el.type==="radio") EX.state.ans[el.name]=el.value; examSave();});
  on(ov,"change",e=>{const el=e.target; if(el.type==="radio"){EX.state.ans[el.name]=el.value; examSave();}});
  /* block copying, pasting and right-click */
  ["copy","cut","paste","contextmenu","dragstart","drop"].forEach(ev=>on(ov,ev,e=>{e.preventDefault(); examToast(ev==="contextmenu"?"Right-click is turned off during the exam.":"Copy and paste are turned off during the exam.");}));
  on(ov,"selectstart",e=>{ if(!e.target.closest || !e.target.closest("textarea")) e.preventDefault(); });
  on(document,"keydown",e=>{
    const k=(e.key||"").toLowerCase();
    if((e.ctrlKey||e.metaKey) && ["c","x","v","a","p","s","u","f","o","j","i"].includes(k)){ e.preventDefault(); examToast("That shortcut is turned off during the exam."); }
    if(k==="f12"||(e.ctrlKey&&e.shiftKey&&["i","j","c"].includes(k))){ e.preventDefault(); }
  },true);
  /* detect leaving */
  on(document,"visibilitychange",()=>{ if(document.hidden) examViolation("tab"); });
  on(window,"blur",()=>examViolation("blur"));
  on(document,"fullscreenchange",()=>{ if(EX && EX.fs && !document.fullscreenElement) examViolation("fs"); });
  on(window,"beforeunload",e=>{ e.preventDefault(); e.returnValue=""; });
  /* buttons inside overlay */
  on(ov,"focusin",e=>{ if(e.target.matches("textarea[data-k]")) EX.lastTA=e.target; });
  on(ov,"mousedown",e=>{ if(e.target.closest("[data-sym]")) e.preventDefault(); });
  on(ov,"click",e=>{
    const sy=e.target.closest("[data-sym]");
    if(sy){ const ta=EX.lastTA; if(!ta){ examToast("Click inside an answer box first."); return; }
      ta.focus(); ta.setRangeText(sy.dataset.sym, ta.selectionStart, ta.selectionEnd, "end");
      EX.state.ans[ta.dataset.k]=ta.value; examSave(); return; }
    const b=e.target.closest("[data-x]"); if(!b) return;
    const a=b.dataset.x;
    if(a==="ask") askSubmit();
    if(a==="cancel") closeExamModal();
    if(a==="submit") submitExam("student");
    if(a==="return"){ closeExamModal(); EX.graceUntil=Date.now()+1500; enterFS(); }
  });
  EX.timer=setInterval(examTick,500); examTick();
  if(resume){ EX.graceUntil=0; examViolation("reload"); }
}

function examTick(){
  if(!EX) return;
  const left=EXAM_MS-(Date.now()-EX.state.start), t=document.getElementById("exTimer");
  if(t){ t.textContent=fmtTime(left); t.classList.toggle("low",left<5*60*1000); }
  if(left<=0) submitExam("time");
}
function showExamModal(html){ const m=document.getElementById("exModal"); if(!m) return; m.innerHTML=`<div class="ex-mbox">${html}</div>`; m.hidden=false; EX.modal=true; }
function closeExamModal(){ const m=document.getElementById("exModal"); if(m){m.hidden=true;m.innerHTML="";} if(EX) EX.modal=false; }
function examViolation(kind){
  if(!EX||EX.state.done) return;
  const now=Date.now(); if(kind!=="nav" && kind!=="reload" && (now<EX.graceUntil || now-EX.lastViol<2500)) return;
  EX.lastViol=now; EX.state.viol++; examSave();
  const w=document.getElementById("exWarn"); if(w){w.textContent=`Warnings ${EX.state.viol}/${EXAM_MAX_WARN}`; w.classList.add("hot");}
  if(EX.state.viol>=EXAM_MAX_WARN){ submitExam("warnings"); return; }
  const why={tab:"You switched to another tab or app.",blur:"You left the exam window.",fs:"You left full screen.",reload:"The exam page was reloaded or closed.",nav:"You tried to leave the exam page."}[kind]||"You left the exam window.";
  showExamModal(`<div class="ex-mic">!</div><h3>Warning ${EX.state.viol} of ${EXAM_MAX_WARN}</h3><p>${why} Stay on this screen until you submit. On warning ${EXAM_MAX_WARN}, your paper is submitted automatically.</p><button class="btn btn-blue" type="button" data-x="return">Return to the exam</button>`);
}
function askSubmit(){
  const items=examItems(EX.c), a=EX.state.ans;
  const blank=items.filter(it=>it.type==="mcq"?(a[it.k]===undefined||!(a[it.k+"r"]||"").trim()):!(a[it.k]||"").trim()).map(it=>it.part?it.n+it.part:it.n);
  showExamModal(`<h3>Submit your paper?</h3><p>${blank.length?`Not fully answered: Q ${[...new Set(blank)].join(", ")}.`:"You have answered every question."} You can’t change answers after submitting.</p><div class="actions"><button class="btn btn-line" type="button" data-x="cancel">Keep writing</button><button class="btn btn-blue" type="button" data-x="submit">Submit paper</button></div>`);
}
function submitExam(reason){
  if(!EX) return;
  const {c,state}=EX; state.done=true;
  clearInterval(EX.timer);
  (EX.handlers||[]).forEach(([t,ev,fn,opt])=>t.removeEventListener(ev,fn,opt));
  if(document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(()=>{});
  const ov=document.getElementById("exOv"); if(ov) ov.remove();
  document.body.classList.remove("exam-on");
  const items=examItems(c); let auto=0;
  items.filter(it=>it.type==="mcq").forEach(it=>{ const ok=String(state.ans[it.k])===String(it.a) && (state.ans[it.k+"r"]||"").trim().length>=3; if(ok) auto++; });
  const res={ch:c.id,student:state.student||jget(STKEY,null),ans:state.ans,auto,viol:state.viol,reason,used:Math.min(EXAM_MS,Date.now()-state.start),self:{},saved:false,at:new Date().toLocaleString()};
  jset(LASTKEY(c.id),res); jdel(RUNKEY); EX=null;
  if(location.hash!=="#"+c.id+"-exam") location.hash=c.id+"-exam"; else chapter(c,"exam");
  window.scrollTo(0,0);
}
