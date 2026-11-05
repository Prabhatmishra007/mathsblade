/* Chapter 2: Polynomials – notes, NCERT solutions, test questions */
const smallP = (f,xr,yr,zs,cap,extra={})=>fig(plot(Object.assign({xr,yr,w:210,h:180,m:16,fs:9,fns:[{f,w:2.4}],pts:zs.map(z=>[z,0,"",0,0,RED])},extra)),cap);
const ZERO_MARK = zs=>zs.map(z=>[z[0],0,z[1],z[2]??4,z[3]??-8,RED]);

const CH2 = {
id:"ch2", num:2, title:"Polynomials", unit:"Unit II: Algebra", marks:20,
tag:"Zeroes of a polynomial, their graphs, and their link with the coefficients.",
outcomes:["Relate the algebraic and graphical methods of finding zeroes","Find zeroes of a polynomial graphically and algebraically","Verify the relation between zeroes and coefficients of quadratic polynomials"],
topics:["Degree and types","Zeroes on a graph","Shape of a quadratic","Sum and product of zeroes","Forming a quadratic"],
formulas:["α + β = −b/a","αβ = c/a","k[x² − (α+β)x + αβ]"],
notes:`
<h3>What is a polynomial?</h3>
<p>An expression like 3x<sup>2</sup> − 5x + 2 where the powers of the variable are whole numbers (0, 1, 2, …). The highest power is the <b>degree</b>.</p>
<div class="tbl"><table>
<tr><th>Type</th><th>Degree</th><th>General form</th><th>Graph</th><th>Max zeroes</th></tr>
<tr><td>Linear</td><td>1</td><td>ax + b</td><td>straight line</td><td>1</td></tr>
<tr><td>Quadratic</td><td>2</td><td>ax<sup>2</sup> + bx + c</td><td>parabola</td><td>2</td></tr>
<tr><td>Cubic</td><td>3</td><td>ax<sup>3</sup> + bx<sup>2</sup> + cx + d</td><td>S-shaped curve</td><td>3</td></tr>
</table></div>
<p>In each case a ≠ 0. Expressions like ${f('1','x')} or √x are <b>not</b> polynomials.</p>

<h3>Zeroes of a polynomial</h3>
<p>A real number k is a <b>zero</b> of p(x) if p(k) = 0.</p>
<div class="box"><b>Example:</b> p(x) = x<sup>2</sup> − 3x − 4. p(4) = 16 − 12 − 4 = 0, so 4 is a zero. p(−1) = 1 + 3 − 4 = 0, so −1 is also a zero.</div>

<h3>Geometrical meaning of zeroes</h3>
<p>The zeroes of p(x) are exactly the <b>x-coordinates of the points where the graph of y = p(x) meets the x-axis</b>. Find where the curve touches or cuts the x-axis and you have found the zeroes.</p>
${fig(plot({xr:[-4,6],yr:[-10,8],w:440,h:300,gx:1,gy:2,lx:1,ly:2,fns:[{f:x=>x*x-2*x-8,label:"y = x² − 2x − 8",lx:2.6,ly:6.5}],pts:ZERO_MARK([[-2,"(−2, 0)",-8,-10],[4,"(4, 0)",6,-10]]).concat([[1,-9,"lowest point (1, −9)",8,4,MUTED]])}),"The parabola cuts the x-axis at −2 and 4, so the zeroes of x² − 2x − 8 are −2 and 4.","wide")}

<h3>How many zeroes can a quadratic have?</h3>
<p>The graph of ax<sup>2</sup> + bx + c is a <b>parabola</b>. It opens upward (∪) if a &gt; 0 and downward (∩) if a &lt; 0. It can meet the x-axis in three ways:</p>
<div class="figrow">
${fig(plot({xr:[-2.5,4.5],yr:[-5,7],w:220,h:200,m:16,fs:9,fns:[{f:x=>x*x-2*x-3}],pts:ZERO_MARK([[-1,""],[3,""]])}),"<b>Two zeroes</b><br>x² − 2x − 3 cuts the axis twice (−1 and 3)")}
${fig(plot({xr:[-2.5,4.5],yr:[-5,7],w:220,h:200,m:16,fs:9,fns:[{f:x=>x*x-2*x+1}],pts:ZERO_MARK([[1,""]])}),"<b>One zero</b><br>x² − 2x + 1 just touches the axis at 1")}
${fig(plot({xr:[-2.5,4.5],yr:[-5,7],w:220,h:200,m:16,fs:9,fns:[{f:x=>x*x-2*x+3}]}),"<b>No zero</b><br>x² − 2x + 3 stays above the axis")}
</div>
${fig(plot({xr:[-2.5,4.5],yr:[-3,6],w:300,h:210,m:18,fs:9,fns:[{f:x=>-x*x+2*x+3,c:RED}],pts:ZERO_MARK([[-1,"−1",-14,-8],[3,"3",6,-8]])}),"When a &lt; 0 the parabola opens downward: y = −x² + 2x + 3 has zeroes −1 and 3.")}
<div class="box"><b>Rule:</b> a polynomial of degree n has <b>at most n</b> zeroes. For example, the cubic x<sup>3</sup> − 4x = x(x − 2)(x + 2) has three zeroes: −2, 0, 2.</div>
${fig(plot({xr:[-3,3],yr:[-5,5],w:300,h:220,m:18,fs:9,fns:[{f:x=>x*x*x-4*x}],pts:ZERO_MARK([[-2,"−2",-14,-8],[0,"0",6,-8],[2,"2",6,-8]])}),"y = x³ − 4x meets the x-axis at three points.")}

<div data-lab="parabola"></div>

<h3>Relationship between zeroes and coefficients</h3>
<p>If α and β are the zeroes of ax<sup>2</sup> + bx + c (a ≠ 0), then</p>
<div class="formula">
<div><small>Sum of zeroes</small><span>α + β = ${f('−b','a')}</span></div>
<div><small>Product of zeroes</small><span>αβ = ${f('c','a')}</span></div>
</div>
<p>In words: sum = −${f('coefficient of x','coefficient of x<sup>2</sup>')}, product = ${f('constant term','coefficient of x<sup>2</sup>')}.</p>

<h3>Finding zeroes: split the middle term</h3>
<div class="box"><b>Example:</b> x<sup>2</sup> + 7x + 10 = x<sup>2</sup> + 5x + 2x + 10 = (x + 5)(x + 2)<br>Zeroes: −5 and −2. Check: sum = −7 = ${f('−7','1')} ✓, product = 10 = ${f('10','1')} ✓</div>

<h3>Forming a quadratic from its zeroes</h3>
<p>If the sum of zeroes is S and the product is P, the polynomial is</p>
<div class="formula"><div><small>k is any non-zero constant</small><span>k[x<sup>2</sup> − Sx + P]</span></div></div>

<h3>Useful identities</h3>
<ul>
<li>${f('1','α')} + ${f('1','β')} = ${f('α + β','αβ')}</li>
<li>α<sup>2</sup> + β<sup>2</sup> = (α + β)<sup>2</sup> − 2αβ</li>
<li>(α − β)<sup>2</sup> = (α + β)<sup>2</sup> − 4αβ</li>
</ul>
<div class="box warn"><b>Common mistake:</b> forgetting the minus sign in α + β = −b/a. Always write the polynomial in standard form (descending powers) before reading a, b, c. For 6x<sup>2</sup> − 3 − 7x, first rewrite it as 6x<sup>2</sup> − 7x − 3.</div>

<div class="box iks"><span class="bt">Indian Knowledge System: Brahmagupta and zero</span>
In his <i>Brāhmasphuṭasiddhānta</i> (628 CE), Brahmagupta gave rules for calculating with zero and with negative numbers (which he called “debts”), and a rule for solving quadratic equations. Every time you find the “zeroes” of a polynomial you are using ideas he helped make precise.</div>
`,
ncert:[
{ex:"Exercise 2.1", sub:"Number of zeroes from a graph (Fig. 2.10, redrawn). Red dots mark where the graph meets the x-axis.", qs:[
{q:"The graphs of y = p(x) are given in Fig. 2.10 for some polynomials p(x). Find the number of zeroes of p(x) in each case.",
a:`<p>Count the points where the graph meets the x-axis.</p>
<div class="figrow">
${smallP(x=>2,[-4,4],[-3,3],[],"(i) Line parallel to x-axis: <b>0 zeroes</b>",{ticks:false})}
${smallP(x=>0.3*(x-2)*(x*x+1),[-4,4],[-3,3],[2],"(ii) Meets once: <b>1 zero</b>",{ticks:false})}
${smallP(x=>0.25*(x+2.5)*(x-1)*(x-3),[-4,4],[-3,3],[-2.5,1,3],"(iii) Meets 3 times: <b>3 zeroes</b>",{ticks:false})}
${smallP(x=>(x+3.5)*(x+1.5),[-4,4],[-3,3],[-3.5,-1.5],"(iv) Meets twice: <b>2 zeroes</b>",{ticks:false})}
${smallP(x=>-0.12*(x+3)*(x+1)*(x-1)*(x-3),[-4,4],[-3,3],[-3,-1,1,3],"(v) Meets 4 times: <b>4 zeroes</b>",{ticks:false})}
${smallP(x=>-0.15*(x+3)*x*x*(x-3),[-4,4],[-3,3],[-3,0,3],"(vi) Meets 3 times: <b>3 zeroes</b>",{ticks:false})}
</div>
<span class="ans">(i) 0 (ii) 1 (iii) 3 (iv) 2 (v) 4 (vi) 3</span>`}
]},
{ex:"Exercise 2.2", sub:"Zeroes and coefficients of quadratic polynomials", qs:[
{q:"Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients: (i) x<sup>2</sup> − 2x − 8 (ii) 4s<sup>2</sup> − 4s + 1 (iii) 6x<sup>2</sup> − 3 − 7x (iv) 4u<sup>2</sup> + 8u (v) t<sup>2</sup> − 15 (vi) 3x<sup>2</sup> − x − 4",
a:`<p><b>(i)</b> x<sup>2</sup> − 2x − 8 = x<sup>2</sup> − 4x + 2x − 8 = (x − 4)(x + 2). Zeroes: 4, −2<br>Sum = 2 = ${f('−(−2)','1')} ✓ &nbsp; Product = −8 = ${f('−8','1')} ✓</p>
<p><b>(ii)</b> 4s<sup>2</sup> − 4s + 1 = (2s − 1)<sup>2</sup>. Zeroes: ${f('1','2')}, ${f('1','2')}<br>Sum = 1 = ${f('−(−4)','4')} ✓ &nbsp; Product = ${f('1','4')} = ${f('1','4')} ✓</p>
<p><b>(iii)</b> 6x<sup>2</sup> − 7x − 3 = 6x<sup>2</sup> − 9x + 2x − 3 = (2x − 3)(3x + 1). Zeroes: ${f('3','2')}, ${f('−1','3')}<br>Sum = ${f('7','6')} = ${f('−(−7)','6')} ✓ &nbsp; Product = ${f('−1','2')} = ${f('−3','6')} ✓</p>
<p><b>(iv)</b> 4u<sup>2</sup> + 8u = 4u(u + 2). Zeroes: 0, −2<br>Sum = −2 = ${f('−8','4')} ✓ &nbsp; Product = 0 = ${f('0','4')} ✓</p>
<p><b>(v)</b> t<sup>2</sup> − 15 = (t − √15)(t + √15). Zeroes: √15, −√15<br>Sum = 0 = ${f('−0','1')} ✓ &nbsp; Product = −15 = ${f('−15','1')} ✓</p>
<p><b>(vi)</b> 3x<sup>2</sup> − x − 4 = 3x<sup>2</sup> − 4x + 3x − 4 = (3x − 4)(x + 1). Zeroes: ${f('4','3')}, −1<br>Sum = ${f('1','3')} = ${f('−(−1)','3')} ✓ &nbsp; Product = ${f('−4','3')} ✓</p>
<p>See the zeroes on each graph:</p>
<div class="figrow">
${smallP(x=>x*x-2*x-8,[-4,6],[-10,8],[-2,4],"(i) zeroes −2, 4",{gy:2,lx:2,ly:4})}
${smallP(x=>4*x*x-4*x+1,[-1.5,2.5],[-2,6],[0.5],"(ii) touches at ½",{gx:0.5,lx:1,ly:2})}
${smallP(x=>6*x*x-7*x-3,[-1.5,2.5],[-6,8],[-1/3,1.5],"(iii) zeroes −⅓, 3/2",{gx:0.5,gy:2,lx:1,ly:4})}
${smallP(x=>4*x*x+8*x,[-3.5,1.5],[-5,8],[-2,0],"(iv) zeroes −2, 0",{lx:1,ly:2})}
${smallP(x=>x*x-15,[-6,6],[-16,12],[-Math.sqrt(15),Math.sqrt(15)],"(v) zeroes ±√15 ≈ ±3.87",{gy:4,lx:2,ly:8})}
${smallP(x=>3*x*x-x-4,[-2.5,2.5],[-5,8],[-1,4/3],"(vi) zeroes −1, 4/3",{lx:1,ly:2})}
</div>`},
{q:`Find a quadratic polynomial, the sum and product of whose zeroes are given: (i) ${f('1','4')}, −1 (ii) √2, ${f('1','3')} (iii) 0, √5 (iv) 1, 1 (v) ${f('−1','4')}, ${f('1','4')} (vi) 4, 1`,
a:`<p>Use k[x<sup>2</sup> − (sum)x + (product)].</p>
<p><b>(i)</b> x<sup>2</sup> − ${f('1','4')}x − 1 → multiply by 4: <b>4x<sup>2</sup> − x − 4</b></p>
<p><b>(ii)</b> x<sup>2</sup> − √2x + ${f('1','3')} → multiply by 3: <b>3x<sup>2</sup> − 3√2x + 1</b></p>
<p><b>(iii)</b> x<sup>2</sup> − 0·x + √5 = <b>x<sup>2</sup> + √5</b></p>
<p><b>(iv)</b> <b>x<sup>2</sup> − x + 1</b></p>
<p><b>(v)</b> x<sup>2</sup> + ${f('1','4')}x + ${f('1','4')} → multiply by 4: <b>4x<sup>2</sup> + x + 1</b></p>
<p><b>(vi)</b> <b>x<sup>2</sup> − 4x + 1</b></p>`}
]}
],
pyq:[
{m:1,q:"The maximum number of zeroes a cubic polynomial can have is: (a) 1 (b) 2 (c) 3 (d) 4",a:`<span class="ans">(c) 3</span>`},
{m:1,q:`If α and β are zeroes of x<sup>2</sup> − 5x + 6, find ${f('1','α')} + ${f('1','β')}.`,a:`<p>α + β = 5, αβ = 6 ⇒ ${f('α + β','αβ')} = ${f('5','6')}</p><span class="ans">5/6</span>`},
{m:1,q:"If one zero of x<sup>2</sup> + 3x + k is 2, find k.",a:`<p>p(2) = 0 ⇒ 4 + 6 + k = 0</p><span class="ans">k = −10</span>`},
{m:2,q:"Find a quadratic polynomial whose zeroes are −3 and 4.",a:`<p>Sum = 1, product = −12 ⇒ x<sup>2</sup> − x − 12</p><span class="ans">x² − x − 12</span>`},
{m:2,q:"Find the zeroes of x<sup>2</sup> + 7x + 10 and verify the relationship between zeroes and coefficients.",a:`<p>(x + 5)(x + 2) ⇒ zeroes −5, −2. Sum = −7 = ${f('−7','1')} ✓, product = 10 = ${f('10','1')} ✓</p>`},
{m:2,q:"If the sum of the zeroes of kx<sup>2</sup> + 2x + 3k equals their product, find k.",a:`<p>${f('−2','k')} = ${f('3k','k')} = 3 ⇒ k = ${f('−2','3')}</p><span class="ans">k = −2/3</span>`},
{m:2,q:"If one zero of 3x<sup>2</sup> + 8x + k is the reciprocal of the other, find k.",a:`<p>Product of zeroes = α × ${f('1','α')} = 1 = ${f('k','3')} ⇒ k = 3</p><span class="ans">k = 3</span>`},
{m:3,q:`If α, β are zeroes of p(x) = x<sup>2</sup> − x − 4, find ${f('1','α')} + ${f('1','β')} − αβ.`,a:`<p>α + β = 1, αβ = −4</p><p>${f('α + β','αβ')} − αβ = ${f('1','−4')} + 4 = ${f('15','4')}</p><span class="ans">15/4</span>`},
{m:3,q:"If 2 and −3 are the zeroes of x<sup>2</sup> + (a + 1)x + b, find a and b.",a:`<p>Sum = −1 = −(a + 1) ⇒ a = 0</p><p>Product = −6 = b</p><span class="ans">a = 0, b = −6</span>`}
],
cases:[{
title:"The cricket ball’s path",
story:"During a school match, a fielder throws the ball. Its path is shaped like the graph of p(x) = −x<sup>2</sup> + 4x + 5, where x is the horizontal distance (in metres) from a marker and p(x) is the height (in metres).",
fig: fig(plot({xr:[-2,6],yr:[-4,10],w:420,h:280,gy:1,lx:1,ly:2,fns:[{f:x=>-x*x+4*x+5,c:RED,label:"y = −x² + 4x + 5",lx:3.3,ly:8.3}],pts:[[-1,0,"(−1, 0)",-6,-10,BLUE,"end"],[5,0,"(5, 0)",6,-10,BLUE],[2,9,"highest point (2, 9)",8,4,MUTED]]}),"The path is a downward parabola because a = −1 &lt; 0.","wide"),
qs:[
{m:1,q:"What is the shape of the path, and why does it open downward?",a:`<p>A parabola. It opens downward because the coefficient of x<sup>2</sup> is −1, which is negative.</p>`},
{m:1,q:"Find the zeroes of p(x).",a:`<p>−x<sup>2</sup> + 4x + 5 = 0 ⇒ x<sup>2</sup> − 4x − 5 = 0 ⇒ (x − 5)(x + 1) = 0</p><span class="ans">x = 5 and x = −1</span>`},
{m:2,q:"Verify the relationship between the zeroes and the coefficients of p(x).",a:`<p>a = −1, b = 4, c = 5</p><p>Sum = 5 + (−1) = 4 and ${f('−b','a')} = ${f('−4','−1')} = 4 ✓</p><p>Product = 5 × (−1) = −5 and ${f('c','a')} = ${f('5','−1')} = −5 ✓</p>`}
]}],
mcq:[
{q:"The degree of a quadratic polynomial is",o:["0","1","2","3"],a:2,w:"Highest power of x in ax² + bx + c is 2."},
{q:"Zeroes of x<sup>2</sup> − 2x − 8 are",o:["4, 2","−4, 2","4, −2","−4, −2"],a:2,w:"(x − 4)(x + 2)."},
{q:"Sum of zeroes of ax<sup>2</sup> + bx + c is",o:["b/a","−b/a","c/a","−c/a"],a:1,w:"α + β = −b/a."},
{q:"Product of zeroes of 3x<sup>2</sup> − x − 4 is",o:["4/3","−4/3","1/3","−1/3"],a:1,w:"c/a = −4/3."},
{q:"A quadratic polynomial with sum of zeroes 4 and product 1 is",o:["x² + 4x + 1","x² − 4x − 1","x² − 4x + 1","x² + x − 4"],a:2,w:"x² − (sum)x + product."},
{q:"The graph of y = ax<sup>2</sup> + bx + c with a &lt; 0 is a parabola that",o:["opens upward","opens downward","is a straight line","is a circle"],a:1,w:"Negative a turns the parabola upside down."},
{q:"A cubic polynomial has at most",o:["1 zero","2 zeroes","3 zeroes","4 zeroes"],a:2,w:"Degree n ⇒ at most n zeroes."},
{q:"If the graph of y = p(x) touches the x-axis at exactly one point, the number of zeroes is",o:["0","1","2","3"],a:1,w:"Each meeting point with the x-axis is one zero."},
{q:"Zeroes of t<sup>2</sup> − 15 are",o:["±15","±√15","15, 0","√15 only"],a:1,w:"t² = 15 ⇒ t = ±√15."},
{q:"If 2 is a zero of x<sup>2</sup> + 3x + k, then k is",o:["10","−10","5","−5"],a:1,w:"4 + 6 + k = 0."}
],
ar:[
{A:"A quadratic polynomial whose zeroes are 2 and 3 is x<sup>2</sup> − 5x + 6.",R:"A quadratic polynomial with zeroes α and β is x<sup>2</sup> − (α + β)x + αβ.",a:0,w:"Sum 5, product 6 gives x² − 5x + 6, using exactly R."},
{A:"A cubic polynomial can have 4 zeroes.",R:"A polynomial of degree n has at most n zeroes.",a:3,w:"R is true, so a cubic has at most 3 zeroes. A is false."}
],
written:[
{m:2,q:"Find the zeroes of 6x<sup>2</sup> − 3 − 7x and verify the relationship.",a:`<p>(2x − 3)(3x + 1) ⇒ zeroes ${f('3','2')}, ${f('−1','3')}. Sum ${f('7','6')}, product ${f('−1','2')}, matching −b/a and c/a.</p>`},
{m:2,q:"Find a quadratic polynomial with zeroes 3 + √2 and 3 − √2.",a:`<p>Sum = 6, product = 9 − 2 = 7 ⇒ x<sup>2</sup> − 6x + 7</p>`},
{m:3,q:"If α, β are zeroes of x<sup>2</sup> − 6x + 8, find α<sup>2</sup> + β<sup>2</sup>.",a:`<p>α + β = 6, αβ = 8 ⇒ α<sup>2</sup> + β<sup>2</sup> = 36 − 16 = 20</p><span class="ans">20</span>`}
]
};
