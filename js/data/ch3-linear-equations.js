/* Chapter 3: Pair of Linear Equations in Two Variables – notes, NCERT solutions, test questions */
const twoLines = (o)=>plot(Object.assign({w:300,h:240,m:18,fs:9},o));

const CH3 = {
id:"ch3", num:3, title:"Pair of Linear Equations in Two Variables", short:"Linear Equations", unit:"Unit II: Algebra", marks:20,
tag:"Solve two equations together by graph, substitution and elimination.",
outcomes:["Plot a pair of linear equations and find the solution graphically","Use algebraic conditions to decide the number of solutions","Solve by substitution and elimination, and model real-life problems"],
topics:["Graphical method","Consistency conditions","Substitution method","Elimination method","Word problems"],
formulas:["a₁/a₂ ≠ b₁/b₂ → one solution","a₁/a₂ = b₁/b₂ = c₁/c₂ → infinite","a₁/a₂ = b₁/b₂ ≠ c₁/c₂ → none"],
notes:`
<h3>The general form</h3>
<p>A linear equation in two variables: <b>ax + by + c = 0</b> (a, b not both zero). Its graph is always a straight line, and every point on the line is a solution.</p>
<p>A pair of linear equations:</p>
<div class="box">a<sub>1</sub>x + b<sub>1</sub>y + c<sub>1</sub> = 0<br>a<sub>2</sub>x + b<sub>2</sub>y + c<sub>2</sub> = 0</div>
<p>A <b>solution of the pair</b> is a point (x, y) that lies on <b>both</b> lines.</p>

<h3>Three possibilities</h3>
<p>Two lines on a plane can only do one of three things:</p>
<div class="figrow">
${fig(twoLines({xr:[-1,8],yr:[-1,6],w:220,h:190,fns:[{f:x=>x/2},{f:lineY(3,4,20),c:RED}],pts:[[4,2,"(4, 2)",6,-8]]}),"<b>Intersecting</b><br>x − 2y = 0, 3x + 4y = 20<br>Exactly one solution")}
${fig(twoLines({xr:[-1,8],yr:[-1,6],w:220,h:190,fns:[{f:lineY(2,3,9),w:6,c:"var(--blue-soft)"},{f:lineY(2,3,9),dash:"6 5",c:RED}]}),"<b>Coincident</b><br>2x + 3y = 9, 4x + 6y = 18<br>Infinitely many solutions")}
${fig(twoLines({xr:[-1,8],yr:[-1,6],w:220,h:190,fns:[{f:lineY(1,2,4)},{f:lineY(2,4,12),c:RED}]}),"<b>Parallel</b><br>x + 2y = 4, 2x + 4y = 12<br>No solution")}
</div>

<h3>Algebraic conditions (compare the ratios)</h3>
<div class="tbl"><table>
<tr><th>Ratio condition</th><th>Lines</th><th>Solutions</th><th>System is</th></tr>
<tr><td>${f('a<sub>1</sub>','a<sub>2</sub>')} ≠ ${f('b<sub>1</sub>','b<sub>2</sub>')}</td><td>Intersecting</td><td>Exactly one</td><td><span class="tag g">Consistent</span></td></tr>
<tr><td>${f('a<sub>1</sub>','a<sub>2</sub>')} = ${f('b<sub>1</sub>','b<sub>2</sub>')} = ${f('c<sub>1</sub>','c<sub>2</sub>')}</td><td>Coincident</td><td>Infinitely many</td><td><span class="tag b">Consistent (dependent)</span></td></tr>
<tr><td>${f('a<sub>1</sub>','a<sub>2</sub>')} = ${f('b<sub>1</sub>','b<sub>2</sub>')} ≠ ${f('c<sub>1</sub>','c<sub>2</sub>')}</td><td>Parallel</td><td>None</td><td><span class="tag r">Inconsistent</span></td></tr>
</table></div>

<div data-lab="lines"></div>

<h3>Graphical method</h3>
<ol>
<li>For each equation, make a table with 2–3 values of x and the matching y.</li>
<li>Plot both lines on the same axes.</li>
<li>Read the point where they meet. That is the solution.</li>
</ol>

<h3>Substitution method</h3>
<ol>
<li>From one equation, express y in terms of x (or x in terms of y).</li>
<li>Substitute into the other equation to get one variable.</li>
<li>Solve it, then substitute back to find the other.</li>
</ol>
<div class="box"><b>Example:</b> x + y = 14, x − y = 4<br>From the second, x = y + 4. Then (y + 4) + y = 14 ⇒ y = 5, x = 9.</div>
<p>If you reach a true statement like 9 = 9, there are infinitely many solutions. If you reach a false one like 0 = 5, there is no solution.</p>

<h3>Elimination method</h3>
<ol>
<li>Multiply the equations so that one variable has equal (or opposite) coefficients.</li>
<li>Subtract (or add) to eliminate that variable.</li>
<li>Solve for the remaining variable and substitute back.</li>
</ol>
<div class="box"><b>Example:</b> 3x + 4y = 10, 2x − 2y = 2<br>Multiply the second by 2: 4x − 4y = 4. Add: 7x = 14 ⇒ x = 2, y = 1.</div>

<h3>Solving word problems</h3>
<ul>
<li>Let the two unknowns be x and y, and write what each stands for.</li>
<li>Turn each sentence into one equation.</li>
<li><b>Ages:</b> “n years ago” → subtract n from both ages; “after n years” → add n.</li>
<li><b>Two-digit number</b> with tens digit x and units digit y = 10x + y; reversed = 10y + x.</li>
<li><b>Fractions:</b> let the fraction be ${f('x','y')}.</li>
<li><b>Fixed + per-unit charges</b> (taxi, library, phone): total = fixed + rate × units.</li>
<li>Always check your answer in the original statement.</li>
</ul>
<div class="box warn"><b>Syllabus note (2026-27):</b> only the graphical, substitution and elimination methods are in your syllabus. Cross-multiplication and equations reducible to linear form are not.</div>

<div class="box iks"><span class="bt">Indian Knowledge System: naming unknowns by colour</span>
Indian algebraists such as Brahmagupta and later Bhāskara II (in <i>Bījagaṇita</i>, 12th century) worked with equations in several unknowns. They called the first unknown <i>yāvat-tāvat</i> (“so much as”) and named the others after colours, such as <i>kālaka</i> (black) and <i>nīlaka</i> (blue). Our x and y do the same job.</div>
`,
ncert:[
{ex:"Exercise 3.1", sub:"Graphical method and consistency", qs:[
{q:"Form the pair of linear equations and find their solutions graphically: (i) 10 students of Class X took part in a quiz. If the number of girls is 4 more than the number of boys, find the number of boys and girls. (ii) 5 pencils and 7 pens together cost ₹50, whereas 7 pencils and 5 pens together cost ₹46. Find the cost of one pencil and one pen.",
a:`<p><b>(i)</b> Let girls = x, boys = y.<br>x + y = 10 and x − y = 4</p>
<div class="tbl"><table><tr><th colspan="4">x + y = 10</th><th colspan="4">x − y = 4</th></tr><tr><td>x</td><td>0</td><td>5</td><td>10</td><td>x</td><td>4</td><td>5</td><td>7</td></tr><tr><td>y</td><td>10</td><td>5</td><td>0</td><td>y</td><td>0</td><td>1</td><td>3</td></tr></table></div>
${fig(twoLines({xr:[-1,11],yr:[-5,11],w:360,h:300,gx:1,gy:1,lx:2,ly:2,fns:[{f:x=>10-x,label:"x + y = 10",lx:0.3,ly:10.3},{f:x=>x-4,c:RED,label:"x − y = 4",lx:8.3,ly:3.2}],pts:[[7,3,"(7, 3)",8,4]]}),"The lines meet at (7, 3).")}
<span class="ans">Girls = 7, boys = 3</span>
<p><b>(ii)</b> Let one pencil = ₹x, one pen = ₹y.<br>5x + 7y = 50 and 7x + 5y = 46</p>
<div class="tbl"><table><tr><th colspan="4">5x + 7y = 50</th><th colspan="4">7x + 5y = 46</th></tr><tr><td>x</td><td>3</td><td>10</td><td>−4</td><td>x</td><td>3</td><td>8</td><td>−2</td></tr><tr><td>y</td><td>5</td><td>0</td><td>10</td><td>y</td><td>5</td><td>−2</td><td>12</td></tr></table></div>
${fig(twoLines({xr:[-1,11],yr:[-3,11],w:360,h:300,lx:2,ly:2,fns:[{f:lineY(5,7,50),label:"5x + 7y = 50",lx:6.2,ly:3.9},{f:lineY(7,5,46),c:RED,label:"7x + 5y = 46",lx:0.2,ly:10}],pts:[[3,5,"(3, 5)",8,-6]]}),"The lines meet at (3, 5).")}
<span class="ans">Pencil = ₹3, pen = ₹5</span>`},
{q:`On comparing the ratios ${f('a<sub>1</sub>','a<sub>2</sub>')}, ${f('b<sub>1</sub>','b<sub>2</sub>')} and ${f('c<sub>1</sub>','c<sub>2</sub>')}, find whether the lines intersect, are parallel or coincident: (i) 5x − 4y + 8 = 0, 7x + 6y − 9 = 0 (ii) 9x + 3y + 12 = 0, 18x + 6y + 24 = 0 (iii) 6x − 3y + 10 = 0, 2x − y + 9 = 0`,
a:`<p><b>(i)</b> ${f('5','7')} ≠ ${f('−4','6')} ⇒ <span class="tag g">intersecting</span> at one point</p>
<p><b>(ii)</b> ${f('9','18')} = ${f('3','6')} = ${f('12','24')} = ${f('1','2')} ⇒ <span class="tag b">coincident</span></p>
<p><b>(iii)</b> ${f('6','2')} = ${f('−3','−1')} = 3, but ${f('10','9')} ≠ 3 ⇒ <span class="tag r">parallel</span></p>`},
{q:`On comparing the ratios, find whether each pair is consistent or inconsistent: (i) 3x + 2y = 5; 2x − 3y = 7 (ii) 2x − 3y = 8; 4x − 6y = 9 (iii) ${f('3','2')}x + ${f('5','3')}y = 7; 9x − 10y = 14 (iv) 5x − 3y = 11; −10x + 6y = −22 (v) ${f('4','3')}x + 2y = 8; 2x + 3y = 12`,
a:`<p><b>(i)</b> ${f('3','2')} ≠ ${f('2','−3')} ⇒ <span class="tag g">consistent</span> (unique solution)</p>
<p><b>(ii)</b> ${f('2','4')} = ${f('−3','−6')} = ${f('1','2')} but ${f('8','9')} ≠ ${f('1','2')} ⇒ <span class="tag r">inconsistent</span></p>
<p><b>(iii)</b> ${f('3/2','9')} = ${f('1','6')}, ${f('5/3','−10')} = ${f('−1','6')}. Unequal ⇒ <span class="tag g">consistent</span></p>
<p><b>(iv)</b> ${f('5','−10')} = ${f('−3','6')} = ${f('11','−22')} = ${f('−1','2')} ⇒ <span class="tag b">consistent</span> (infinitely many solutions)</p>
<p><b>(v)</b> ${f('4/3','2')} = ${f('2','3')} = ${f('8','12')} = ${f('2','3')} ⇒ <span class="tag b">consistent</span> (infinitely many solutions)</p>`},
{q:"Which of the following pairs are consistent/inconsistent? If consistent, obtain the solution graphically: (i) x + y = 5, 2x + 2y = 10 (ii) x − y = 8, 3x − 3y = 16 (iii) 2x + y − 6 = 0, 4x − 2y − 4 = 0 (iv) 2x − 2y − 2 = 0, 4x − 4y − 5 = 0",
a:`<p><b>(i)</b> ${f('1','2')} = ${f('1','2')} = ${f('5','10')} ⇒ coincident, <span class="tag b">consistent</span>. Infinitely many solutions: y = 5 − x, e.g. (0, 5), (5, 0), (2, 3).</p>
<p><b>(ii)</b> ${f('1','3')} = ${f('−1','−3')} ≠ ${f('8','16')} ⇒ parallel, <span class="tag r">inconsistent</span>.</p>
<p><b>(iii)</b> ${f('2','4')} ≠ ${f('1','−2')} ⇒ <span class="tag g">consistent</span>. Points on 2x + y = 6: (0, 6), (3, 0). Points on 4x − 2y = 4: (0, −2), (1, 0).</p>
${fig(twoLines({xr:[-1,4],yr:[-3,7],w:300,h:280,fns:[{f:x=>6-2*x,label:"2x + y = 6",lx:0.15,ly:6.4},{f:x=>2*x-2,c:RED,label:"4x − 2y = 4",lx:2.6,ly:5.6}],pts:[[2,2,"(2, 2)",8,4]]}),"Lines meet at (2, 2).")}
<p><b>(iv)</b> ${f('2','4')} = ${f('−2','−4')} ≠ ${f('−2','−5')} ⇒ parallel, <span class="tag r">inconsistent</span>.</p>`},
{q:"Half the perimeter of a rectangular garden, whose length is 4 m more than its width, is 36 m. Find the dimensions of the garden.",
a:`<p>Let length = x m, width = y m.</p><p>x + y = 36 and x − y = 4</p><p>Adding: 2x = 40 ⇒ x = 20, y = 16</p>
${fig(`<svg viewBox="0 0 300 170" role="img" aria-label="Rectangle 20 m by 16 m"><rect x="40" y="20" width="200" height="120" rx="6" fill="var(--blue-soft)" stroke="${BLUE}" stroke-width="2"/><text x="140" y="160" text-anchor="middle" font-size="13" fill="${INK}" font-weight="600">length x = 20 m</text><text x="250" y="85" font-size="13" fill="${INK}" font-weight="600">y = 16 m</text><text x="140" y="85" text-anchor="middle" font-size="12" fill="${MUTED}">x + y = 36</text></svg>`,"")}
<span class="ans">Length = 20 m, width = 16 m</span>`},
{q:"Given the linear equation 2x + 3y − 8 = 0, write another linear equation in two variables such that the pair formed is: (i) intersecting lines (ii) parallel lines (iii) coincident lines",
a:`<p><b>(i)</b> Need ${f('a<sub>1</sub>','a<sub>2</sub>')} ≠ ${f('b<sub>1</sub>','b<sub>2</sub>')}: <b>3x + 2y − 7 = 0</b></p>
<p><b>(ii)</b> Need ${f('a<sub>1</sub>','a<sub>2</sub>')} = ${f('b<sub>1</sub>','b<sub>2</sub>')} ≠ ${f('c<sub>1</sub>','c<sub>2</sub>')}: <b>2x + 3y − 12 = 0</b></p>
<p><b>(iii)</b> All three ratios equal: <b>4x + 6y − 16 = 0</b></p><p>(These match the NCERT answers; other correct answers are possible.)</p>`},
{q:"Draw the graphs of x − y + 1 = 0 and 3x + 2y − 12 = 0. Find the coordinates of the vertices of the triangle formed by these lines and the x-axis, and shade the triangular region.",
a:`<p>x − y + 1 = 0: points (−1, 0), (0, 1), (2, 3)<br>3x + 2y − 12 = 0: points (4, 0), (0, 6), (2, 3)</p>
${fig(twoLines({xr:[-2,5],yr:[-1,6.5],w:380,h:330,poly:[{pts:[[-1,0],[4,0],[2,3]]}],fns:[{f:x=>x+1,label:"x − y + 1 = 0",lx:-1.8,ly:1.6},{f:lineY(3,2,12),c:RED,label:"3x + 2y − 12 = 0",lx:2.9,ly:3.2}],pts:[[-1,0,"(−1, 0)",-4,16,INK,"end"],[4,0,"(4, 0)",4,16],[2,3,"(2, 3)",-8,-8,INK,"end"]]}),"The shaded triangle has vertices (−1, 0), (4, 0) and (2, 3).")}
<span class="ans">Vertices: (−1, 0), (4, 0), (2, 3)</span>`}
]},
{ex:"Exercise 3.2", sub:"Substitution method", qs:[
{q:`Solve the following pairs by substitution: (i) x + y = 14, x − y = 4 (ii) s − t = 3, ${f('s','3')} + ${f('t','2')} = 6 (iii) 3x − y = 3, 9x − 3y = 9 (iv) 0.2x + 0.3y = 1.3, 0.4x + 0.5y = 2.3 (v) √2x + √3y = 0, √3x − √8y = 0 (vi) ${f('3x','2')} − ${f('5y','3')} = −2, ${f('x','3')} + ${f('y','2')} = ${f('13','6')}`,
a:`<p><b>(i)</b> x = 14 − y ⇒ 14 − y − y = 4 ⇒ y = 5, x = 9. <b>x = 9, y = 5</b></p>
<p><b>(ii)</b> s = t + 3. Multiply the second equation by 6: 2s + 3t = 36 ⇒ 2(t + 3) + 3t = 36 ⇒ 5t = 30 ⇒ t = 6, s = 9. <b>s = 9, t = 6</b></p>
<p><b>(iii)</b> y = 3x − 3 ⇒ 9x − 3(3x − 3) = 9 ⇒ 9 = 9, always true. <b>Infinitely many solutions</b> (every point on y = 3x − 3).</p>
<p><b>(iv)</b> Multiply by 10: 2x + 3y = 13, 4x + 5y = 23. x = ${f('13 − 3y','2')} ⇒ 2(13 − 3y) + 5y = 23 ⇒ 26 − y = 23 ⇒ y = 3, x = 2. <b>x = 2, y = 3</b></p>
<p><b>(v)</b> x = ${f('−√3y','√2')} ⇒ √3 · ${f('−√3y','√2')} − √8y = 0 ⇒ y(${f('−3','√2')} − 2√2) = 0 ⇒ y = 0, so x = 0. <b>x = 0, y = 0</b></p>
<p><b>(vi)</b> Multiply by 6: 9x − 10y = −12 and 2x + 3y = 13. x = ${f('13 − 3y','2')} ⇒ 9(13 − 3y) − 20y = −24 ⇒ 117 − 47y = −24 ⇒ y = 3, x = 2. <b>x = 2, y = 3</b></p>`},
{q:"Solve 2x + 3y = 11 and 2x − 4y = −24 and hence find the value of m for which y = mx + 3.",
a:`<p>From the first: 2x = 11 − 3y. Substitute: 11 − 3y − 4y = −24 ⇒ 7y = 35 ⇒ y = 5, x = −2.</p><p>y = mx + 3 ⇒ 5 = −2m + 3 ⇒ m = −1</p><span class="ans">x = −2, y = 5, m = −1</span>`},
{q:`Form the pair of linear equations and solve by substitution: (i) The difference between two numbers is 26 and one number is three times the other. (ii) The larger of two supplementary angles exceeds the smaller by 18°. (iii) A coach buys 7 bats and 6 balls for ₹3800. Later, she buys 3 bats and 5 balls for ₹1750. Find the cost of each. (iv) Taxi charges: for 10 km, ₹105; for 15 km, ₹155. Find the fixed charge and the charge per km. How much for 25 km? (v) A fraction becomes ${f('9','11')} if 2 is added to both numerator and denominator. If 3 is added to both, it becomes ${f('5','6')}. Find the fraction. (vi) Five years hence, Jacob’s age will be three times his son’s. Five years ago, Jacob’s age was seven times his son’s. Find their present ages.`,
a:`<p><b>(i)</b> x − y = 26, x = 3y ⇒ 2y = 26 ⇒ y = 13, x = 39. <b>Numbers: 39 and 13</b></p>
<p><b>(ii)</b> x + y = 180, x − y = 18 ⇒ x = 18 + y ⇒ 2y = 162 ⇒ y = 81, x = 99. <b>Angles: 99° and 81°</b></p>
<p><b>(iii)</b> Bat = ₹x, ball = ₹y: 7x + 6y = 3800, 3x + 5y = 1750. x = ${f('1750 − 5y','3')} ⇒ 7(1750 − 5y) + 18y = 11400 ⇒ 12250 − 17y = 11400 ⇒ y = 50, x = 500. <b>Bat ₹500, ball ₹50</b></p>
<p><b>(iv)</b> Fixed = ₹x, per km = ₹y: x + 10y = 105, x + 15y = 155. x = 105 − 10y ⇒ 105 + 5y = 155 ⇒ y = 10, x = 5. For 25 km: 5 + 250 = ₹255. <b>Fixed ₹5, ₹10/km, 25 km costs ₹255</b></p>
<p><b>(v)</b> Fraction ${f('x','y')}: 11(x + 2) = 9(y + 2) ⇒ 11x − 9y = −4; 6(x + 3) = 5(y + 3) ⇒ 6x − 5y = −3. x = ${f('5y − 3','6')} ⇒ 11(5y − 3) − 54y = −24 ⇒ y = 9, x = 7. <b>Fraction = 7/9</b></p>
<p><b>(vi)</b> Jacob = x, son = y: x + 5 = 3(y + 5) ⇒ x − 3y = 10; x − 5 = 7(y − 5) ⇒ x − 7y = −30. x = 3y + 10 ⇒ 3y + 10 − 7y = −30 ⇒ y = 10, x = 40. <b>Jacob 40 years, son 10 years</b></p>`}
]},
{ex:"Exercise 3.3", sub:"Elimination method", qs:[
{q:`Solve by elimination and substitution: (i) x + y = 5, 2x − 3y = 4 (ii) 3x + 4y = 10, 2x − 2y = 2 (iii) 3x − 5y − 4 = 0, 9x = 2y + 7 (iv) ${f('x','2')} + ${f('2y','3')} = −1, x − ${f('y','3')} = 3`,
a:`<p><b>(i)</b> Multiply the first by 3: 3x + 3y = 15. Add to 2x − 3y = 4: 5x = 19 ⇒ x = ${f('19','5')}, y = ${f('6','5')}</p>
<p><b>(ii)</b> Multiply the second by 2: 4x − 4y = 4. Add: 7x = 14 ⇒ x = 2, y = 1</p>
<p><b>(iii)</b> 3x − 5y = 4 (×3 → 9x − 15y = 12) and 9x − 2y = 7. Subtract: 13y = −5 ⇒ y = ${f('−5','13')}, x = ${f('9','13')}</p>
<p><b>(iv)</b> Multiply by 6 and 3: 3x + 4y = −6 and 3x − y = 9. Subtract: 5y = −15 ⇒ y = −3, x = 2</p>`},
{q:`Form the pair of linear equations and solve by elimination: (i) If we add 1 to the numerator and subtract 1 from the denominator, a fraction reduces to 1. It becomes ${f('1','2')} if we only add 1 to the denominator. (ii) Five years ago, Nuri was thrice as old as Sonu. Ten years later, Nuri will be twice as old as Sonu. (iii) The sum of the digits of a two-digit number is 9. Nine times this number is twice the number obtained by reversing the digits. (iv) Meena withdrew ₹2000 in ₹50 and ₹100 notes only, 25 notes in all. (v) A library charges a fixed amount for the first three days and an additional charge for each day after. Saritha paid ₹27 for 7 days, Susy paid ₹21 for 5 days.`,
a:`<p><b>(i)</b> ${f('x + 1','y − 1')} = 1 ⇒ x − y = −2; ${f('x','y + 1')} = ${f('1','2')} ⇒ 2x − y = 1. Subtract: x = 3, y = 5. <b>Fraction = 3/5</b></p>
<p><b>(ii)</b> Nuri = x, Sonu = y: x − 5 = 3(y − 5) ⇒ x − 3y = −10; x + 10 = 2(y + 10) ⇒ x − 2y = 10. Subtract: y = 20, x = 50. <b>Nuri 50, Sonu 20</b></p>
<p><b>(iii)</b> Tens digit x, units y: x + y = 9; 9(10x + y) = 2(10y + x) ⇒ 88x = 11y ⇒ 8x − y = 0. Add to x + y = 9: 9x = 9 ⇒ x = 1, y = 8. <b>Number = 18</b></p>
<p><b>(iv)</b> ₹50 notes = x, ₹100 notes = y: x + y = 25, 50x + 100y = 2000 ⇒ x + 2y = 40. Subtract: y = 15, x = 10. <b>10 notes of ₹50, 15 notes of ₹100</b></p>
<p><b>(v)</b> Fixed = ₹x, extra per day = ₹y: Saritha has 4 extra days, Susy 2. x + 4y = 27, x + 2y = 21. Subtract: 2y = 6 ⇒ y = 3, x = 15. <b>Fixed ₹15, ₹3 per extra day</b></p>`}
]}
],
pyq:[
{m:1,q:"The pair of equations x = a and y = b graphically represents lines which are: (a) parallel (b) intersecting at (b, a) (c) coincident (d) intersecting at (a, b)",a:`${fig(twoLines({xr:[-1,5],yr:[-1,4],w:240,h:170,ticks:false,fns:[{x:3},{f:x=>2,c:RED}],pts:[[3,2,"(a, b)",6,-8]],txt:[[3.1,3.5,"x = a",BLUE],[0,2.2,"y = b",RED]]}),"")}<span class="ans">(d) intersecting at (a, b)</span>`},
{m:1,q:"For what value of k do the equations x + 2y = 3 and 5x + ky + 7 = 0 have a unique solution?",a:`<p>Need ${f('1','5')} ≠ ${f('2','k')} ⇒ k ≠ 10</p><span class="ans">All real k except 10</span>`},
{m:2,q:"Find the value of k for which kx + 3y = k − 3 and 12x + ky = k have no solution.",a:`<p>Need ${f('k','12')} = ${f('3','k')} ≠ ${f('k − 3','k')}</p><p>k<sup>2</sup> = 36 ⇒ k = ±6. Also ${f('3','k')} ≠ ${f('k − 3','k')} ⇒ k ≠ 6.</p><span class="ans">k = −6</span>`},
{m:2,q:"Find k for which 2x + 3y = 7 and (k − 1)x + (k + 2)y = 3k have infinitely many solutions.",a:`<p>${f('2','k − 1')} = ${f('3','k + 2')} ⇒ 2k + 4 = 3k − 3 ⇒ k = 7</p><p>Check: ${f('3','9')} = ${f('7','21')} = ${f('1','3')} ✓</p><span class="ans">k = 7</span>`},
{m:2,q:"Solve: 2x + y = 7 and 4x − 3y + 1 = 0",a:`<p>y = 7 − 2x ⇒ 4x − 21 + 6x + 1 = 0 ⇒ 10x = 20 ⇒ x = 2, y = 3</p><span class="ans">x = 2, y = 3</span>`},
{m:2,q:"2 kg of apples and 1 kg of grapes cost ₹160. After a month, 4 kg of apples and 2 kg of grapes cost ₹300. Represent the situation algebraically and say whether it has a solution.",a:`<p>2x + y = 160 and 4x + 2y = 300</p><p>${f('2','4')} = ${f('1','2')} ≠ ${f('160','300')} ⇒ parallel lines, no solution (prices must have changed).</p>`},
{m:3,q:"A father is three times as old as his son. After 12 years, his age will be twice his son’s age. Find their present ages.",a:`<p>x = 3y and x + 12 = 2(y + 12) ⇒ 3y + 12 = 2y + 24 ⇒ y = 12, x = 36</p><span class="ans">Father 36 years, son 12 years</span>`},
{m:3,q:"The sum of a two-digit number and the number obtained by reversing its digits is 66. If the digits differ by 2, find the number.",a:`<p>(10x + y) + (10y + x) = 66 ⇒ x + y = 6. Digits differ by 2: x − y = 2 or y − x = 2.</p><p>Case 1: x = 4, y = 2 ⇒ 42. Case 2: x = 2, y = 4 ⇒ 24.</p><span class="ans">42 or 24</span>`},
{m:5,q:"Solve graphically: x + y = 5 and x − y = 1. Also find where each line meets the y-axis.",a:`${fig(twoLines({xr:[-1,6],yr:[-2,6],w:320,h:280,fns:[{f:x=>5-x,label:"x + y = 5",lx:3.6,ly:2.2},{f:x=>x-1,c:RED,label:"x − y = 1",lx:4.3,ly:4.6}],pts:[[3,2,"(3, 2)",-8,-8,INK,"end"],[0,5,"(0, 5)",6,4,BLUE],[0,-1,"(0, −1)",6,12,RED]]}),"")}<p>Solution: (3, 2). y-intercepts: (0, 5) and (0, −1).</p><span class="ans">x = 3, y = 2</span>`}
],
cases:[{
title:"Auto-rickshaw fare",
story:"In a city, an auto-rickshaw charges a fixed amount plus a fixed rate for every kilometre. Asha pays ₹120 for a 5 km ride. Rahul pays ₹165 for an 8 km ride. Let the fixed charge be ₹x and the charge per km be ₹y.",
fig: fig(plot({xr:[0,13],yr:[0,240],w:420,h:280,gx:1,gy:20,lx:2,ly:40,xl:"km",yl:"₹",fns:[{f:k=>45+15*k,label:"fare = 45 + 15 × km",lx:0.6,ly:200}],pts:[[5,120,"Asha (5, 120)",8,10],[8,165,"Rahul (8, 165)",8,10],[12,225,"(12, 225)",-8,-8,RED,"end"],[0,45,"fixed ₹45",6,-8,MUTED]]}),"Fare grows by ₹15 for every extra km, starting from the fixed charge of ₹45.","wide"),
qs:[
{m:1,q:"Write the pair of linear equations for this situation.",a:`<p>x + 5y = 120 and x + 8y = 165</p>`},
{m:1,q:"Find the charge per km.",a:`<p>Subtract: 3y = 45 ⇒ y = 15</p><span class="ans">₹15 per km</span>`},
{m:2,q:"Find the fixed charge and the fare for a 12 km ride.",a:`<p>x = 120 − 5 × 15 = 45</p><p>Fare for 12 km = 45 + 12 × 15 = ₹225</p><span class="ans">Fixed ₹45, 12 km costs ₹225</span>`}
]}],
mcq:[
{q:"9x + 3y + 12 = 0 and 18x + 6y + 24 = 0 represent",o:["intersecting lines","parallel lines","coincident lines","perpendicular lines"],a:2,w:"All three ratios equal 1/2."},
{q:"If a<sub>1</sub>/a<sub>2</sub> ≠ b<sub>1</sub>/b<sub>2</sub>, the pair has",o:["no solution","a unique solution","infinitely many solutions","exactly two solutions"],a:1,w:"The lines intersect at one point."},
{q:"2x − 3y = 8 and 4x − 6y = 9 have",o:["a unique solution","no solution","infinitely many solutions","two solutions"],a:1,w:"2/4 = −3/−6 ≠ 8/9: parallel lines."},
{q:"Solution of x + y = 14, x − y = 4 is",o:["(5, 9)","(9, 5)","(10, 4)","(7, 7)"],a:1,w:"Add: 2x = 18."},
{q:"2x + 3y = 11 and 2x − 4y = −24 meet on y = mx + 3. Then m is",o:["1","−1","2","−2"],a:1,w:"Solution (−2, 5): 5 = −2m + 3."},
{q:"The graph of a linear equation in two variables is a",o:["parabola","circle","straight line","curve"],a:2,w:"ax + by + c = 0 is a straight line."},
{q:"Lines are parallel when",o:["a₁/a₂ ≠ b₁/b₂","a₁/a₂ = b₁/b₂ = c₁/c₂","a₁/a₂ = b₁/b₂ ≠ c₁/c₂","b₁/b₂ = c₁/c₂ only"],a:2,w:"Same slope, different intercepts."},
{q:"Taxi: ₹105 for 10 km and ₹155 for 15 km. Fare for 25 km is",o:["₹250","₹255","₹260","₹245"],a:1,w:"Fixed ₹5 + ₹10 × 25."},
{q:"A fraction becomes 9/11 when 2 is added to both terms and 5/6 when 3 is added. The fraction is",o:["5/7","7/9","3/5","9/11"],a:1,w:"9/11 and 10/12 = 5/6 ✓"},
{q:"kx + 3y = k − 3 and 12x + ky = k have no solution when k is",o:["6","−6","±6","0"],a:1,w:"k = 6 makes them coincident, so only −6 works."}
],
ar:[
{A:"3x + 4y = 10 and 6x + 8y = 20 have infinitely many solutions.",R:"If a₁/a₂ = b₁/b₂ = c₁/c₂, the lines are coincident.",a:0,w:"All ratios equal 1/2, so the lines coincide. R explains A."},
{A:"x + y = 5 and 2x + 2y = 7 have a unique solution.",R:"Parallel lines never meet.",a:3,w:"1/2 = 1/2 ≠ 5/7, so the lines are parallel: no solution. A is false, R is true."}
],
written:[
{m:2,q:"Check whether 3x + 2y = 5 and 2x − 3y = 7 are consistent. If yes, solve.",a:`<p>${f('3','2')} ≠ ${f('2','−3')} ⇒ consistent. Multiply: 9x + 6y = 15 and 4x − 6y = 14. Add: 13x = 29 ⇒ x = ${f('29','13')}, y = ${f('−11','13')}</p>`},
{m:3,q:"The sum of two numbers is 35 and their difference is 13. Find the numbers.",a:`<p>x + y = 35, x − y = 13 ⇒ x = 24, y = 11</p>`},
{m:3,q:"Solve by elimination: 3x + 4y = 10 and 2x − 2y = 2",a:`<p>Multiply the second by 2: 4x − 4y = 4. Add: 7x = 14 ⇒ x = 2, y = 1</p>`}
]
};
