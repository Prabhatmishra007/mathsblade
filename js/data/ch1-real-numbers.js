/* Chapter 1: Real Numbers – notes, NCERT solutions, test questions */
const CH1 = {
id:"ch1", num:1, title:"Real Numbers", unit:"Unit I: Number Systems", marks:6,
tag:"Prime factorisation, HCF & LCM, and proving numbers irrational.",
outcomes:["Describe the Fundamental Theorem of Arithmetic with examples","Apply it to real-life HCF and LCM problems","Prove algebraically that √2, √3, √5 and numbers like 3 + 2√5 are irrational"],
topics:["Fundamental Theorem of Arithmetic","HCF & LCM by prime factorisation","HCF × LCM = product","Proving irrationality"],
formulas:["HCF(a, b) × LCM(a, b) = a × b","p | a² ⇒ p | a (p prime)","Rational + irrational = irrational"],
notes:`
<h3>Real numbers at a glance</h3>
<p>Every real number is either <b>rational</b> or <b>irrational</b>. Each number family sits inside the next one.</p>
${fig(numberFamily(),"The number family. Rationals and irrationals together make up the real numbers.","wide")}
<ul>
<li><b>Rational:</b> can be written as ${f('p','q')} where p, q are integers and q ≠ 0. Its decimal form terminates (0.25) or repeats (0.333…).</li>
<li><b>Irrational:</b> cannot be written as ${f('p','q')}. Its decimal form never ends and never repeats.</li>
</ul>

<h3>Fundamental Theorem of Arithmetic</h3>
<p>Every composite number can be written as a product of primes, and this factorisation is <b>unique</b> apart from the order of the factors.</p>
<p>Use a factor tree: keep splitting off a prime until only primes are left.</p>
${fig(factorTree(),"Factor tree of 3825. Blue circles are primes; however you split it, you always end with 3, 3, 5, 5, 17.")}
<div class="box"><b>Another example:</b> 32760 = 2<sup>3</sup> × 3<sup>2</sup> × 5 × 7 × 13</div>

<h3>HCF and LCM by prime factorisation</h3>
<div class="formula">
<div><small>HCF</small><span>smallest power of each common prime</span></div>
<div><small>LCM</small><span>greatest power of every prime present</span></div>
</div>
<p>A Venn diagram makes this easy to see. Put the prime factors of each number in its circle; shared primes go in the overlap.</p>
${fig(venn(),"336 = 2⁴ × 3 × 7 and 54 = 2 × 3³. The overlap gives the HCF, the whole picture gives the LCM.","wide")}

<h3>The key relation</h3>
<div class="formula"><div><small>For any two positive integers a and b</small><span>HCF(a, b) × LCM(a, b) = a × b</span></div></div>
<p>Check with the diagram: 6 × 3024 = 18144 = 336 × 54.</p>
<div class="box warn"><b>Careful:</b> this works only for <b>two</b> numbers. For three numbers p, q, r, HCF × LCM is generally not equal to p × q × r.</div>
<div class="box"><span class="bt">For three numbers (NCERT note to the reader)</span>
LCM(p, q, r) = ${f('p · q · r · HCF(p, q, r)','HCF(p, q) · HCF(q, r) · HCF(p, r)')}</div>

<h3>Using LCM in real life</h3>
<p>“When will things happen together again?” is an LCM question. Sonia drives one round in 18 minutes, Ravi in 12. They are both back at the start at every common multiple.</p>
${fig(meetLine(),"First common multiple of 12 and 18 is 36, so they meet at the start after 36 minutes.","wide")}
<p>“What is the biggest equal group?” is an HCF question (packing, columns, tiles).</p>

<h3>Proving a number is irrational</h3>
<p><b>Theorem 1.2:</b> If a prime p divides a<sup>2</sup>, then p also divides a (a is a positive integer).</p>
<p><b>Proof that √2 is irrational (by contradiction):</b></p>
<ol>
<li>Assume √2 is rational, so √2 = ${f('a','b')} where a, b are co-prime (HCF = 1), b ≠ 0.</li>
<li>Square: 2b<sup>2</sup> = a<sup>2</sup>. So 2 divides a<sup>2</sup>, hence 2 divides a. Write a = 2c.</li>
<li>Then 2b<sup>2</sup> = 4c<sup>2</sup> ⇒ b<sup>2</sup> = 2c<sup>2</sup>, so 2 divides b too.</li>
<li>2 divides both a and b, which contradicts “a, b are co-prime”. So √2 is irrational.</li>
</ol>
<p>The same steps work for √3 and √5 (replace 2 by 3 or 5).</p>
<p><b>For numbers like 3 + 2√5:</b> assume it equals ${f('a','b')}, rearrange to isolate √5, and show √5 would become rational, which is false.</p>

<div class="box iks"><span class="bt">Indian Knowledge System: Baudhāyana and √2</span>
The <i>Baudhāyana Śulba Sūtra</i> (composed roughly 800–500 BCE), written for building fire altars, gives √2 ≈ 1 + ${f('1','3')} + ${f('1','3 × 4')} − ${f('1','3 × 4 × 34')} = ${f('577','408')} ≈ 1.414216. The true value is 1.414214…, so the first five decimal places match. Indian mathematicians knew how to approximate √2 very closely, and today we can prove it can never be written exactly as a fraction.</div>

<h3>Facts worth remembering</h3>
<ul>
<li>Rational + irrational = irrational.</li>
<li>Non-zero rational × irrational = irrational.</li>
<li>A number ends in 0 only if its prime factorisation contains both 2 and 5.</li>
<li>HCF of two co-prime numbers is 1; their LCM is their product.</li>
</ul>
`,
ncert:[
{ex:"Exercise 1.1", sub:"Prime factorisation, HCF and LCM", qs:[
{q:"Express each number as a product of its prime factors: (i) 140 (ii) 156 (iii) 3825 (iv) 5005 (v) 7429",
a:`<p>(i) 140 = 2 × 2 × 5 × 7 = <b>2<sup>2</sup> × 5 × 7</b></p>
<p>(ii) 156 = 2 × 2 × 3 × 13 = <b>2<sup>2</sup> × 3 × 13</b></p>
<p>(iii) 3825 = 3 × 3 × 5 × 5 × 17 = <b>3<sup>2</sup> × 5<sup>2</sup> × 17</b></p>
${fig(factorTree(),"Factor tree for (iii)")}
<p>(iv) 5005 = <b>5 × 7 × 11 × 13</b></p>
<p>(v) 7429 = <b>17 × 19 × 23</b> (try dividing by 17: 7429 ÷ 17 = 437 = 19 × 23)</p>`},
{q:"Find the LCM and HCF of the following pairs and verify that LCM × HCF = product of the two numbers: (i) 26 and 91 (ii) 510 and 92 (iii) 336 and 54",
a:`<p><b>(i)</b> 26 = 2 × 13, 91 = 7 × 13<br>HCF = 13, LCM = 2 × 7 × 13 = 182<br>Check: 13 × 182 = 2366 and 26 × 91 = 2366 ✓</p>
<p><b>(ii)</b> 510 = 2 × 3 × 5 × 17, 92 = 2<sup>2</sup> × 23<br>HCF = 2, LCM = 2<sup>2</sup> × 3 × 5 × 17 × 23 = 23460<br>Check: 2 × 23460 = 46920 and 510 × 92 = 46920 ✓</p>
<p><b>(iii)</b> 336 = 2<sup>4</sup> × 3 × 7, 54 = 2 × 3<sup>3</sup><br>HCF = 2 × 3 = 6, LCM = 2<sup>4</sup> × 3<sup>3</sup> × 7 = 3024<br>Check: 6 × 3024 = 18144 and 336 × 54 = 18144 ✓</p>
${fig(venn(),"Venn diagram for (iii)","wide")}`},
{q:"Find the LCM and HCF by prime factorisation: (i) 12, 15 and 21 (ii) 17, 23 and 29 (iii) 8, 9 and 25",
a:`<p><b>(i)</b> 12 = 2<sup>2</sup> × 3, 15 = 3 × 5, 21 = 3 × 7<br>HCF = 3, LCM = 2<sup>2</sup> × 3 × 5 × 7 = <b>420</b></p>
<p><b>(ii)</b> 17, 23, 29 are all prime.<br>HCF = 1, LCM = 17 × 23 × 29 = <b>11339</b></p>
<p><b>(iii)</b> 8 = 2<sup>3</sup>, 9 = 3<sup>2</sup>, 25 = 5<sup>2</sup><br>HCF = 1, LCM = 2<sup>3</sup> × 3<sup>2</sup> × 5<sup>2</sup> = <b>1800</b></p>`},
{q:"Given that HCF (306, 657) = 9, find LCM (306, 657).",
a:`<p>HCF × LCM = product of the numbers</p><p>LCM = ${f('306 × 657','9')} = 34 × 657 = 22338</p><span class="ans">LCM = 22338</span>`},
{q:"Check whether 6<sup>n</sup> can end with the digit 0 for any natural number n.",
a:`<p>A number ends in 0 only if it is divisible by 10, i.e. its prime factorisation has both 2 and 5.</p><p>6<sup>n</sup> = (2 × 3)<sup>n</sup> = 2<sup>n</sup> × 3<sup>n</sup>. There is no factor 5.</p><p>By the uniqueness of prime factorisation, 5 can never appear.</p><span class="ans">6ⁿ can never end with 0</span>`},
{q:"Explain why 7 × 11 × 13 + 13 and 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 are composite numbers.",
a:`<p>7 × 11 × 13 + 13 = 13(7 × 11 + 1) = 13 × 78 = 1014. It has factors other than 1 and itself, so it is composite.</p><p>7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 = 5(7 × 6 × 4 × 3 × 2 × 1 + 1) = 5 × 1009 = 5045. It is divisible by 5, so it is composite.</p>`},
{q:"Sonia takes 18 minutes to drive one round of a circular field, while Ravi takes 12 minutes. They start at the same point, at the same time, in the same direction. After how many minutes will they meet again at the starting point?",
a:`<p>They meet again at the start after LCM(18, 12) minutes.</p><p>18 = 2 × 3<sup>2</sup>, 12 = 2<sup>2</sup> × 3 ⇒ LCM = 2<sup>2</sup> × 3<sup>2</sup> = 36</p>${fig(meetLine(),"","wide")}<span class="ans">After 36 minutes</span>`}
]},
{ex:"Exercise 1.2", sub:"Proving irrationality", qs:[
{q:"Prove that √5 is irrational.",
a:`<p>Assume √5 is rational. Then √5 = ${f('a','b')}, where a and b are co-prime integers and b ≠ 0.</p>
<p>Squaring: 5 = ${f('a<sup>2</sup>','b<sup>2</sup>')} ⇒ a<sup>2</sup> = 5b<sup>2</sup> … (1)</p>
<p>So 5 divides a<sup>2</sup>, hence 5 divides a (Theorem 1.2). Let a = 5c.</p>
<p>From (1): 25c<sup>2</sup> = 5b<sup>2</sup> ⇒ b<sup>2</sup> = 5c<sup>2</sup>. So 5 divides b<sup>2</sup>, hence 5 divides b.</p>
<p>So 5 is a common factor of a and b, which contradicts that a and b are co-prime.</p>
<p>Hence our assumption is wrong. <b>√5 is irrational.</b></p>`},
{q:"Prove that 3 + 2√5 is irrational.",
a:`<p>Assume 3 + 2√5 is rational. Then 3 + 2√5 = ${f('a','b')}, where a, b are co-prime integers, b ≠ 0.</p>
<p>2√5 = ${f('a','b')} − 3 ⇒ √5 = ${f('a − 3b','2b')}</p>
<p>Since a and b are integers, ${f('a − 3b','2b')} is rational, so √5 would be rational.</p>
<p>But √5 is irrational. This contradiction shows <b>3 + 2√5 is irrational.</b></p>`},
{q:`Prove that the following are irrationals: (i) ${f('1','√2')} (ii) 7√5 (iii) 6 + √2`,
a:`<p><b>(i)</b> Let ${f('1','√2')} = ${f('a','b')} (a, b co-prime, a ≠ 0). Then √2 = ${f('b','a')}, which is rational. Contradiction, since √2 is irrational. So ${f('1','√2')} is irrational.</p>
<p><b>(ii)</b> Let 7√5 = ${f('a','b')}. Then √5 = ${f('a','7b')}, which is rational. Contradiction. So 7√5 is irrational.</p>
<p><b>(iii)</b> Let 6 + √2 = ${f('a','b')}. Then √2 = ${f('a','b')} − 6 = ${f('a − 6b','b')}, which is rational. Contradiction. So 6 + √2 is irrational.</p>`}
]}
],
pyq:[
{m:1,q:"Find the HCF of 2<sup>3</sup> × 3<sup>2</sup> × 5 and 2<sup>2</sup> × 3<sup>3</sup> × 5<sup>2</sup>.",a:`<p>Take the smallest power of each common prime: 2<sup>2</sup> × 3<sup>2</sup> × 5 = 180</p><span class="ans">HCF = 180</span>`},
{m:1,q:"The product of a non-zero rational number and an irrational number is always: (a) rational (b) irrational (c) zero (d) an integer",a:`<span class="ans">(b) irrational</span>`},
{m:2,q:"Given HCF (96, 404) = 4, find LCM (96, 404).",a:`<p>LCM = ${f('96 × 404','4')} = 24 × 404 = 9696</p><span class="ans">LCM = 9696</span>`},
{m:2,q:"Find the HCF and LCM of 6, 72 and 120 using prime factorisation.",a:`<p>6 = 2 × 3, 72 = 2<sup>3</sup> × 3<sup>2</sup>, 120 = 2<sup>3</sup> × 3 × 5</p><p>HCF = 2 × 3 = 6, LCM = 2<sup>3</sup> × 3<sup>2</sup> × 5 = 360</p><span class="ans">HCF = 6, LCM = 360</span>`},
{m:2,q:"Find the smallest number that is divisible by every number from 1 to 10.",a:`<p>Highest powers: 2<sup>3</sup> (from 8), 3<sup>2</sup> (from 9), 5, 7.</p><p>LCM = 8 × 9 × 5 × 7 = 2520</p><span class="ans">2520</span>`},
{m:3,q:"An army contingent of 616 members is to march behind an army band of 32 members. The two groups march in the same number of columns. What is the maximum number of columns?",a:`<p>Maximum columns = HCF(616, 32)</p><p>616 = 2<sup>3</sup> × 7 × 11, 32 = 2<sup>5</sup> ⇒ HCF = 2<sup>3</sup> = 8</p><span class="ans">8 columns</span>`},
{m:3,q:"Three bells toll at intervals of 9, 12 and 15 minutes. If they toll together at 8 a.m., when will they next toll together?",a:`<p>9 = 3<sup>2</sup>, 12 = 2<sup>2</sup> × 3, 15 = 3 × 5 ⇒ LCM = 2<sup>2</sup> × 3<sup>2</sup> × 5 = 180 minutes = 3 hours</p><span class="ans">At 11 a.m.</span>`},
{m:3,q:"Prove that √3 is irrational. Hence show that 5 − 2√3 is irrational.",a:`<p><b>Part 1:</b> Assume √3 = ${f('a','b')}, a and b co-prime. Then a<sup>2</sup> = 3b<sup>2</sup>, so 3 divides a. Let a = 3c ⇒ 9c<sup>2</sup> = 3b<sup>2</sup> ⇒ b<sup>2</sup> = 3c<sup>2</sup>, so 3 divides b. Contradiction. So √3 is irrational.</p><p><b>Part 2:</b> Assume 5 − 2√3 = ${f('a','b')}. Then √3 = ${f('5b − a','2b')}, which is rational. Contradiction. So 5 − 2√3 is irrational.</p>`}
],
cases:[{
title:"Diwali sweet boxes",
story:"A sweet shop in Bengaluru has 420 kaju katli and 130 badam barfi. For Diwali orders, the owner wants to pack them in boxes so that every box has the same number of sweets and each box holds only one type of sweet. He wants to use as few boxes as possible.",
qs:[
{m:1,q:"Write 420 as a product of its prime factors.",a:`<p>420 = 2<sup>2</sup> × 3 × 5 × 7</p>`},
{m:1,q:"How many sweets should go in each box?",a:`<p>130 = 2 × 5 × 13. Sweets per box = HCF(420, 130) = 2 × 5 = 10</p><span class="ans">10 sweets per box</span>`},
{m:2,q:"How many boxes are needed in all? Also find LCM(420, 130).",a:`<p>Boxes = ${f('420','10')} + ${f('130','10')} = 42 + 13 = 55</p><p>LCM = 2<sup>2</sup> × 3 × 5 × 7 × 13 = 5460 (check: 10 × 5460 = 54600 = 420 × 130 ✓)</p><span class="ans">55 boxes, LCM = 5460</span>`}
]}],
mcq:[
{q:"HCF of 26 and 91 is",o:["13","7","26","182"],a:0,w:"26 = 2 × 13, 91 = 7 × 13. Common prime: 13."},
{q:"7429 written as a product of primes is",o:["7 × 1061","17 × 19 × 23","13 × 571","11 × 17 × 39"],a:1,w:"17 × 19 = 323 and 323 × 23 = 7429."},
{q:"For two positive integers a and b, HCF × LCM equals",o:["a + b","a − b","a × b","a ÷ b"],a:2,w:"This relation holds for any two positive integers."},
{q:"If HCF(306, 657) = 9, then LCM(306, 657) is",o:["22338","2238","20338","2236"],a:0,w:"306 × 657 ÷ 9 = 22338."},
{q:"6<sup>n</sup> ends with digit 0 for",o:["n = 5","n = 10","every even n","no natural number n"],a:3,w:"6ⁿ = 2ⁿ × 3ⁿ has no factor 5."},
{q:"Which of these is irrational?",o:["0.25","√16","√5","3/7"],a:2,w:"√16 = 4 is rational; 5 is not a perfect square."},
{q:"HCF of the smallest prime number and the smallest composite number is",o:["1","2","4","8"],a:1,w:"Smallest prime is 2, smallest composite is 4. HCF(2, 4) = 2."},
{q:"The product of a non-zero rational number and an irrational number is",o:["always rational","always irrational","always an integer","sometimes rational"],a:1,w:"If r × x were rational, x = (rational) ÷ r would be rational. Contradiction."},
{q:"LCM of 12, 15 and 21 is",o:["420","210","1260","3"],a:0,w:"2² × 3 × 5 × 7 = 420."},
{q:"Sonia (18 min per round) and Ravi (12 min per round) start together. They meet at the start again after",o:["6 min","30 min","36 min","216 min"],a:2,w:"LCM(18, 12) = 36."}
],
ar:[
{A:"HCF(26, 91) × LCM(26, 91) = 2366.",R:"For any two positive integers a and b, HCF(a, b) × LCM(a, b) = a × b.",a:0,w:"26 × 91 = 2366, and R is exactly the rule that gives A."},
{A:"6<sup>n</sup> ends with the digit 0 for some natural number n.",R:"A number ends with 0 only if its prime factorisation has both 2 and 5.",a:3,w:"R is true. Since 6ⁿ has no factor 5, A is false."}
],
written:[
{m:2,q:"Find the LCM of 336 and 54 and verify HCF × LCM = product.",a:`<p>HCF = 6, LCM = 3024. 6 × 3024 = 18144 = 336 × 54 ✓</p>`},
{m:3,q:"Prove that 2 + 3√5 is irrational.",a:`<p>Assume 2 + 3√5 = ${f('a','b')}. Then √5 = ${f('a − 2b','3b')}, rational. Contradiction, since √5 is irrational.</p>`},
{m:3,q:"Find the greatest number that divides 245 and 1029, leaving remainder 5 in each case.",a:`<p>Required number = HCF(245 − 5, 1029 − 5) = HCF(240, 1024)</p><p>240 = 2<sup>4</sup> × 3 × 5, 1024 = 2<sup>10</sup> ⇒ HCF = 2<sup>4</sup> = 16</p><span class="ans">16</span>`}
]
};
