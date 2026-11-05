/* ================= Year-tagged PYQs, Top 25 and Case Studies ================= */
const Y26="CBSE 2026", Y25="CBSE 2025", Y25C="CBSE 2025 Compt.", Y24="CBSE 2024";
const opt=(...o)=>`<span class="opts-inline">${o.map((t,i)=>`<span>(${"abcd"[i]}) ${t}</span>`).join("")}</span>`;
const AR=`<span class="opts-inline"><span>(a) Both A and R are true, and R is the correct explanation of A.</span><span>(b) Both A and R are true, but R is not the correct explanation of A.</span><span>(c) A is true, but R is false.</span><span>(d) A is false, but R is true.</span></span>`;
const ans=t=>`<span class="ans">${t}</span>`;

/* ---------------- Chapter 1 ---------------- */
CH1.pyqs = {
mcq:[
{y:Y26,q:`The HCF of 960 and 432 is ${opt("48","54","72","36")}`,a:`<p>960 = 2<sup>6</sup> × 3 × 5</p><p>432 = 2<sup>4</sup> × 3<sup>3</sup></p><p>HCF = 2<sup>4</sup> × 3 = 48</p>${ans("(a) 48")}`},
{y:Y26,q:`The natural number 2 is ${opt("a prime number","a composite number","prime as well as composite","neither prime nor composite")}`,a:`<p>2 has exactly two factors, 1 and 2. It is the only even prime.</p>${ans("(a) a prime number")}`},
{y:Y26,q:`For any natural number n, 6<sup>n</sup> ends with the digit ${opt("0","6","3","2")}`,a:`<p>6<sup>1</sup> = 6, 6<sup>2</sup> = 36, 6<sup>3</sup> = 216, …</p><p>6 × 6 always ends in 6.</p>${ans("(b) 6")}`},
{y:Y25,q:`If x = ab<sup>3</sup> and y = a<sup>3</sup>b, where a and b are prime numbers, then [HCF(x, y) − LCM(x, y)] is equal to ${opt("1 − a³b³","ab(1 − ab)","ab − a⁴b⁴","ab(1 − ab)(1 + ab)")}`,a:`<p>HCF = ab, LCM = a<sup>3</sup>b<sup>3</sup></p><p>ab − a<sup>3</sup>b<sup>3</sup> = ab(1 − a<sup>2</sup>b<sup>2</sup>) = ab(1 − ab)(1 + ab)</p>${ans("(d)")}`},
{y:Y25,q:`(1 + √3)<sup>2</sup> − (1 − √3)<sup>2</sup> is ${opt("a positive rational number","a negative integer","a positive irrational number","a negative irrational number")}`,a:`<p>Using (a + b)<sup>2</sup> − (a − b)<sup>2</sup> = 4ab:</p><p>= 4 × 1 × √3 = 4√3</p>${ans("(c) a positive irrational number")}`},
{y:Y25,q:`HCF and LCM of 14, 21 and 77 are respectively ${opt("7, 77","14, 462","7, 462","21, 77")}`,a:`<p>14 = 2 × 7, 21 = 3 × 7, 77 = 7 × 11</p><p>HCF = 7, LCM = 2 × 3 × 7 × 11 = 462</p>${ans("(c) 7, 462")}`},
{y:Y25,q:`√0.4 is a/an ${opt("natural number","integer","rational number","irrational number")}`,a:`<p>0.4 = ${f('2','5')}, which is not the square of a rational number.</p>${ans("(d) irrational number")}`},
{y:Y25,q:`If HCF(98, 28) = m and LCM(98, 28) = n, then the value of n − 7m is ______.`,a:`<p>98 = 2 × 7<sup>2</sup>, 28 = 2<sup>2</sup> × 7</p><p>m = 2 × 7 = 14, n = 2<sup>2</sup> × 7<sup>2</sup> = 196</p><p>n − 7m = 196 − 98 = 98</p>${ans("98")}`},
{y:Y25C,q:`The total number of factors of the square of a prime number is ${opt("1","2","3","4")}`,a:`<p>If p is prime, p<sup>2</sup> has factors 1, p and p<sup>2</sup>.</p>${ans("(c) 3")}`},
{y:Y25C,q:`The ratio of the HCF to the LCM of 7, 21 and 28 is ${opt("1 : 4","3 : 4","1 : 8","1 : 12")}`,a:`<p>HCF = 7, LCM = 2<sup>2</sup> × 3 × 7 = 84</p><p>7 : 84 = 1 : 12</p>${ans("(d) 1 : 12")}`},
{y:Y24,q:`If a = 2<sup>2</sup> × 3<sup>x</sup>, b = 2<sup>2</sup> × 3 × 5, c = 2<sup>2</sup> × 3 × 7 and LCM(a, b, c) = 3780, then x is equal to ${opt("1","2","3","0")}`,a:`<p>3780 = 2<sup>2</sup> × 3<sup>3</sup> × 5 × 7</p><p>The highest power of 3 must come from a, so 3<sup>x</sup> = 3<sup>3</sup>.</p>${ans("(c) 3")}`},
{y:Y24,q:`Given HCF(2520, 6600) = 40 and LCM(2520, 6600) = 252 × k, the value of k is ${opt("1650","1600","165","1625")}`,a:`<p>40 × 252k = 2520 × 6600</p><p>k = ${f('2520 × 6600','40 × 252')} = ${f('16632000','10080')} = 1650</p>${ans("(a) 1650")}`},
{y:Y24,q:`A pair of irrational numbers whose product is a rational number is ${opt("(√16, √4)","(√5, √2)","(√3, √27)","(√36, √2)")}`,a:`<p>√3 × √27 = √81 = 9, which is rational. (√16 and √4 are not irrational.)</p>${ans("(c) (√3, √27)")}`}
],
ar:[
{y:Y25,q:`<b>Assertion (A):</b> For any natural number n, the digit at unit’s place in 3<sup>n</sup> cannot be an even number.<br><b>Reason (R):</b> For any natural number n, 2 cannot be a prime factor of 3<sup>n</sup>. ${AR}`,a:`<p>3<sup>n</sup> has only the prime factor 3, so it is odd and never ends in an even digit. R is exactly why A is true.</p>${ans("(a)")}`},
{y:Y25,q:`<b>Assertion (A):</b> For any natural number n, the number 4<sup>n</sup> ends with the digit 0.<br><b>Reason (R):</b> A natural number having both 2 and 5 as prime factors always ends with the digit 0. ${AR}`,a:`<p>4<sup>n</sup> = 2<sup>2n</sup> has no factor 5, so A is false. R is true.</p>${ans("(d)")}`},
{y:Y25,q:`<b>Assertion (A):</b> HCF(36m<sup>2</sup>, 18m) = 18m, where m is a prime number.<br><b>Reason (R):</b> HCF of two numbers is always less than or equal to the smaller number. ${AR}`,a:`<p>18m divides 36m<sup>2</sup> (36m<sup>2</sup> = 18m × 2m), so HCF = 18m. A is true.</p><p>R is also true, but it does not show why the HCF is exactly 18m.</p>${ans("(b)")}`}
],
vsa:[
{y:Y25C,q:`If the least common multiple of 51 and 85 can be expressed as 6z − 9, find the value of z.`,a:`<p>51 = 3 × 17, 85 = 5 × 17</p><p>LCM = 3 × 5 × 17 = 255</p><p>6z − 9 = 255 ⇒ 6z = 264 ⇒ z = 44</p>${ans("z = 44")}`},
{y:Y25C,q:`If √7 is an irrational number, prove that 2√7 is also irrational.`,a:`<p>Let 2√7 = ${f('a','b')}, where a, b are co-prime integers, b ≠ 0.</p><p>Then √7 = ${f('a','2b')}, which is rational.</p><p>This contradicts the fact that √7 is irrational.</p><p>So 2√7 is irrational.</p>`},
{y:Y25C,q:`Show that 14<sup>n</sup> cannot end with the digit 0 or 5 for any natural number n.`,a:`<p>14<sup>n</sup> = 2<sup>n</sup> × 7<sup>n</sup></p><p>To end with 0 or 5, a number must have 5 as a prime factor.</p><p>5 is not a prime factor of 14<sup>n</sup>, so it cannot end with 0 or 5.</p>`},
{y:Y25,q:`Find the HCF and LCM of 35 and 55. Also verify your answer.`,a:`<p>35 = 5 × 7, 55 = 5 × 11</p><p>HCF = 5, LCM = 5 × 7 × 11 = 385</p><p>HCF × LCM = 5 × 385 = 1925</p><p>35 × 55 = 1925 ✓</p>`}
],
sa:[
{y:Y26,q:`Prove that √3 is an irrational number.`,a:`<p>Let √3 = ${f('a','b')}, a and b co-prime, b ≠ 0.</p><p>3b<sup>2</sup> = a<sup>2</sup> ⇒ 3 divides a<sup>2</sup> ⇒ 3 divides a.</p><p>Let a = 3c. Then 3b<sup>2</sup> = 9c<sup>2</sup> ⇒ b<sup>2</sup> = 3c<sup>2</sup>.</p><p>So 3 divides b<sup>2</sup> ⇒ 3 divides b.</p><p>3 divides both a and b. This contradicts that they are co-prime.</p><p>Hence √3 is irrational.</p>`},
{y:Y25,q:`Prove that √2 is an irrational number.`,a:`<p>Let √2 = ${f('p','q')}, p and q co-prime, q ≠ 0.</p><p>p<sup>2</sup> = 2q<sup>2</sup> ⇒ 2 divides p<sup>2</sup> ⇒ 2 divides p. Let p = 2a.</p><p>4a<sup>2</sup> = 2q<sup>2</sup> ⇒ q<sup>2</sup> = 2a<sup>2</sup> ⇒ 2 divides q.</p><p>2 divides both p and q, a contradiction. So √2 is irrational.</p>`},
{y:Y25,q:`Prove that √5 is an irrational number.`,a:`<p>Let √5 = ${f('p','q')}, p and q co-prime, q ≠ 0.</p><p>p<sup>2</sup> = 5q<sup>2</sup> ⇒ 5 divides p. Let p = 5a.</p><p>25a<sup>2</sup> = 5q<sup>2</sup> ⇒ q<sup>2</sup> = 5a<sup>2</sup> ⇒ 5 divides q.</p><p>5 divides both p and q, a contradiction. So √5 is irrational.</p>`},
{y:Y25,q:`Let x and y be two different prime numbers and p = x<sup>2</sup>y<sup>3</sup>, q = xy<sup>4</sup>, r = x<sup>5</sup>y<sup>2</sup>. Find the HCF and LCM of p, q and r. Also check whether HCF × LCM = p × q × r.`,a:`<p>HCF = x<sup>1</sup>y<sup>2</sup> = xy<sup>2</sup> (smallest powers)</p><p>LCM = x<sup>5</sup>y<sup>4</sup> (greatest powers)</p><p>HCF × LCM = x<sup>6</sup>y<sup>6</sup></p><p>p × q × r = x<sup>2+1+5</sup>y<sup>3+4+2</sup> = x<sup>8</sup>y<sup>9</sup></p><p>So HCF × LCM ≠ p × q × r (the rule works only for two numbers).</p>`},
{y:Y25C,q:`Ranjita, Neha and Salma start knitting sweaters together. They need 15, 18 and 20 days respectively to knit a sweater. After how many days will they all start a new sweater together again? How many sweaters will they have made by then?`,a:`<p>15 = 3 × 5, 18 = 2 × 3<sup>2</sup>, 20 = 2<sup>2</sup> × 5</p><p>LCM = 2<sup>2</sup> × 3<sup>2</sup> × 5 = 180 days</p><p>Sweaters = ${f('180','15')} + ${f('180','18')} + ${f('180','20')} = 12 + 10 + 9 = 31</p>${ans("After 180 days, 31 sweaters")}`}
],
la:[],
case:[
{y:Y25C,title:"International seminar rooms",story:"A college is holding an international seminar. The numbers of participants in Physics, Chemistry and Biology are 65, 91 and 117. In each room, the same number of participants are to be seated, and all of them must be from the same subject.",qs:[
{m:1,q:`Find the HCF of 65, 91 and 117.`,a:`<p>65 = 5 × 13, 91 = 7 × 13, 117 = 3<sup>2</sup> × 13</p>${ans("HCF = 13")}`},
{m:1,q:`Find the LCM of 65, 91 and 117.`,a:`<p>LCM = 3<sup>2</sup> × 5 × 7 × 13 = 4095</p>`},
{m:2,q:`Find the minimum number of rooms required.`,a:`<p>Put 13 participants in each room.</p><p>Rooms = ${f('65','13')} + ${f('91','13')} + ${f('117','13')} = 5 + 7 + 9 = 21</p>${ans("21 rooms")}`}
]},
{y:Y24,title:"The prime number game",story:"Ms. Mukta announces the number 2 to her class. The first student multiplies it by a prime number and passes it on. Each student multiplies by a prime number and passes it on. The last student gets 173250.",qs:[
{m:1,q:`What is the least prime number used by the students?`,a:`<p>173250 = 2 × 3<sup>2</sup> × 5<sup>3</sup> × 7 × 11</p><p>The 2 was given by the teacher, so the students used 3, 3, 5, 5, 5, 7, 11.</p>${ans("3")}`},
{m:2,q:`How many students are in the class?`,a:`<p>Each student used one prime: 3, 3, 5, 5, 5, 7, 11.</p>${ans("7 students")}`},
{m:1,q:`Which prime number was used the maximum number of times?`,a:`${ans("5 (three times)")}`}
]}
]
};

CH1.rsa = [
{q:`Express 1092 as a product of prime factors.`,a:`<p>1092 = 2 × 546 = 2 × 2 × 273 = 2 × 2 × 3 × 91 = 2 × 2 × 3 × 7 × 13</p>${ans("2² × 3 × 7 × 13")}`},
{q:`Express 4235 as a product of prime factors.`,a:`<p>4235 = 5 × 847 = 5 × 7 × 121 = 5 × 7 × 11 × 11</p>${ans("5 × 7 × 11²")}`},
{q:`Find the HCF and LCM of 144, 180 and 192 by prime factorisation.`,a:`<p>144 = 2<sup>4</sup> × 3<sup>2</sup>, 180 = 2<sup>2</sup> × 3<sup>2</sup> × 5, 192 = 2<sup>6</sup> × 3</p><p>HCF = 2<sup>2</sup> × 3 = 12</p><p>LCM = 2<sup>6</sup> × 3<sup>2</sup> × 5 = 2880</p>`},
{q:`Find the HCF and LCM of 90 and 144 and verify HCF × LCM = product.`,a:`<p>90 = 2 × 3<sup>2</sup> × 5, 144 = 2<sup>4</sup> × 3<sup>2</sup></p><p>HCF = 2 × 3<sup>2</sup> = 18, LCM = 2<sup>4</sup> × 3<sup>2</sup> × 5 = 720</p><p>18 × 720 = 12960 = 90 × 144 ✓</p>`},
{q:`The HCF of two numbers is 23 and their LCM is 1449. If one number is 161, find the other.`,a:`<p>Other number = ${f('23 × 1449','161')} = ${f('33327','161')} = 207</p>${ans("207")}`},
{q:`Can two numbers have 18 as their HCF and 380 as their LCM? Give a reason.`,a:`<p>The LCM is always a multiple of the HCF.</p><p>380 ÷ 18 is not a whole number.</p>${ans("No")}`},
{q:`Find the largest number that divides 2053 and 967, leaving remainders 5 and 7 respectively.`,a:`<p>The number divides 2053 − 5 = 2048 and 967 − 7 = 960.</p><p>2048 = 2<sup>11</sup>, 960 = 2<sup>6</sup> × 3 × 5</p><p>HCF = 2<sup>6</sup> = 64</p>${ans("64")}`},
{q:`Find the least number which, when divided by 15, 24 and 36, leaves remainder 5 in each case.`,a:`<p>15 = 3 × 5, 24 = 2<sup>3</sup> × 3, 36 = 2<sup>2</sup> × 3<sup>2</sup></p><p>LCM = 2<sup>3</sup> × 3<sup>2</sup> × 5 = 360</p><p>Required number = 360 + 5 = 365</p>${ans("365")}`},
{q:`Find the smallest number which, when increased by 17, is exactly divisible by both 520 and 468.`,a:`<p>520 = 2<sup>3</sup> × 5 × 13, 468 = 2<sup>2</sup> × 3<sup>2</sup> × 13</p><p>LCM = 2<sup>3</sup> × 3<sup>2</sup> × 5 × 13 = 4680</p><p>Required number = 4680 − 17 = 4663</p>${ans("4663")}`},
{q:`Three pieces of timber 42 m, 49 m and 63 m long are to be cut into planks of the same length. What is the greatest possible length of each plank?`,a:`<p>42 = 2 × 3 × 7, 49 = 7<sup>2</sup>, 63 = 3<sup>2</sup> × 7</p>${ans("HCF = 7 m")}`},
{q:`Find the greatest 6-digit number exactly divisible by 24, 15 and 36.`,a:`<p>LCM(24, 15, 36) = 2<sup>3</sup> × 3<sup>2</sup> × 5 = 360</p><p>999999 = 360 × 2777 + 279</p><p>Required number = 999999 − 279 = 999720</p>${ans("999720")}`},
{q:`Three traffic lights change after every 48 s, 72 s and 108 s. If they change together at 7 a.m., when will they next change together?`,a:`<p>48 = 2<sup>4</sup> × 3, 72 = 2<sup>3</sup> × 3<sup>2</sup>, 108 = 2<sup>2</sup> × 3<sup>3</sup></p><p>LCM = 2<sup>4</sup> × 3<sup>3</sup> = 432 s = 7 min 12 s</p>${ans("7:07:12 a.m.")}`},
{q:`A shopkeeper has 120 L of petrol, 180 L of diesel and 240 L of kerosene. He wants to sell them in cans of equal capacity without mixing. Find the greatest capacity of each can and the least number of cans.`,a:`<p>HCF(120, 180, 240) = 60 L</p><p>Cans = 2 + 3 + 4 = 9</p>${ans("60 L each, 9 cans")}`},
{q:`Show that 12<sup>n</sup> cannot end with the digit 0 or 5 for any natural number n.`,a:`<p>12<sup>n</sup> = 2<sup>2n</sup> × 3<sup>n</sup></p><p>There is no factor 5, so 12<sup>n</sup> cannot end with 0 or 5.</p>`},
{q:`Explain why 3 × 5 × 7 + 7 is a composite number.`,a:`<p>3 × 5 × 7 + 7 = 7(15 + 1) = 7 × 16 = 112</p><p>It has factors other than 1 and itself, so it is composite.</p>`},
{q:`Prove that √7 is irrational.`,a:`<p>Let √7 = ${f('a','b')}, a and b co-prime. Then a<sup>2</sup> = 7b<sup>2</sup>, so 7 divides a.</p><p>Let a = 7c ⇒ 49c<sup>2</sup> = 7b<sup>2</sup> ⇒ b<sup>2</sup> = 7c<sup>2</sup>, so 7 divides b.</p><p>Contradiction. Hence √7 is irrational.</p>`},
{q:`Prove that 2 − 3√5 is irrational.`,a:`<p>Let 2 − 3√5 = r (rational). Then √5 = ${f('2 − r','3')}, which is rational.</p><p>Contradiction, since √5 is irrational. Hence 2 − 3√5 is irrational.</p>`},
{q:`Prove that √2 + √3 is irrational.`,a:`<p>Let √2 + √3 = r (rational, r ≠ 0). Then √3 = r − √2.</p><p>Squaring: 3 = r<sup>2</sup> − 2√2r + 2 ⇒ √2 = ${f('r<sup>2</sup> − 1','2r')}, which is rational.</p><p>Contradiction. Hence √2 + √3 is irrational.</p>`},
{q:`Prove that ${f('5','√3')} is irrational.`,a:`<p>${f('5','√3')} = ${f('5√3','3')}. Let it equal r (rational).</p><p>Then √3 = ${f('3r','5')}, which is rational. Contradiction.</p>`},
{q:`Classify as rational or irrational: (i) √225 (ii) 3 + √3 (iii) (2 − √3)(2 + √3) (iv) 0.3796`,a:`<p>(i) √225 = 15, rational</p><p>(ii) 3 + √3, irrational</p><p>(iii) 4 − 3 = 1, rational</p><p>(iv) terminating decimal, rational</p>`},
{q:`If a = p<sup>3</sup>q<sup>2</sup> and b = p<sup>2</sup>q<sup>4</sup>, where p and q are primes, find HCF(a, b) and LCM(a, b).`,a:`<p>HCF = p<sup>2</sup>q<sup>2</sup>, LCM = p<sup>3</sup>q<sup>4</sup></p>`},
{q:`If a divides b (a, b positive integers), find HCF(a, b) and LCM(a, b).`,a:`<p>a is a factor of both, and no bigger common factor exists, so HCF = a.</p><p>b is a multiple of both, so LCM = b.</p>`},
{q:`Find the LCM of 2<sup>3</sup> × 3 × 5 and 2<sup>2</sup> × 3<sup>2</sup> × 7.`,a:`<p>LCM = 2<sup>3</sup> × 3<sup>2</sup> × 5 × 7 = 2520</p>`},
{q:`The LCM of two numbers is 14 times their HCF. The sum of the LCM and HCF is 600. If one number is 280, find the other.`,a:`<p>Let HCF = h, LCM = 14h. Then 15h = 600 ⇒ h = 40, LCM = 560.</p><p>Other number = ${f('40 × 560','280')} = 80</p>${ans("80")}`},
{q:`The product of two co-prime numbers is 117. Find their LCM.`,a:`<p>For co-prime numbers, HCF = 1, so LCM = product.</p>${ans("117")}`}
];

CH1.cases = [
CH1.cases[0],
{title:"Tiling the classroom floor",story:"A classroom floor is 18 m 72 cm long and 13 m 20 cm wide. The school wants to cover it with square tiles of the same size, using the largest possible tiles and no cutting.",qs:[
{m:1,q:`Write 1872 as a product of primes.`,a:`<p>1872 = 2<sup>4</sup> × 3<sup>2</sup> × 13</p>`},
{m:1,q:`Find the side of the largest square tile.`,a:`<p>1320 = 2<sup>3</sup> × 3 × 5 × 11</p><p>HCF(1872, 1320) = 2<sup>3</sup> × 3 = 24</p>${ans("24 cm")}`},
{m:2,q:`How many tiles are needed?`,a:`<p>Tiles = ${f('1872','24')} × ${f('1320','24')} = 78 × 55 = 4290</p>${ans("4290 tiles")}`}
]},
{title:"Buses at the depot",story:"From a bus depot, buses on three routes leave every 20 minutes, 25 minutes and 30 minutes. All three leave together at 6:00 a.m. The depot works until 9:00 p.m.",qs:[
{m:1,q:`Write 20, 25 and 30 as products of primes.`,a:`<p>20 = 2<sup>2</sup> × 5, 25 = 5<sup>2</sup>, 30 = 2 × 3 × 5</p>`},
{m:1,q:`When will the three buses next leave together?`,a:`<p>LCM = 2<sup>2</sup> × 3 × 5<sup>2</sup> = 300 minutes = 5 hours</p>${ans("11:00 a.m.")}`},
{m:2,q:`How many times do all three leave together between 6:00 a.m. and 9:00 p.m. (both included)?`,a:`<p>Every 5 hours: 6 a.m., 11 a.m., 4 p.m., 9 p.m.</p>${ans("4 times")}`}
]}
];

/* ---------------- Chapter 2 ---------------- */
CH2.pyqs = {
mcq:[
{y:Y25,q:`Which of the following statements is correct for a polynomial p(x) of degree 3? ${opt("p(x) has at most two distinct zeroes","p(x) has at least two distinct zeroes","p(x) has three distinct zeroes","p(x) has at most three distinct zeroes")}`,a:`<p>A polynomial of degree n has at most n zeroes.</p>${ans("(d)")}`},
{y:Y25,q:`If the square of the difference of the zeroes of y<sup>2</sup> + py + 36 is 81, then the values of p are ${opt("± 5","± 15","± 18","± 12")}`,a:`<p>(α − β)<sup>2</sup> = (α + β)<sup>2</sup> − 4αβ = p<sup>2</sup> − 144</p><p>p<sup>2</sup> − 144 = 81 ⇒ p<sup>2</sup> = 225 ⇒ p = ±15</p>${ans("(b) ± 15")}`},
{y:Y25C,q:`If one zero of 4x<sup>2</sup> + 4x − m is ${f('3','2')}, then the other zero is ${opt("2/5","5/2","−5/2","−1/2")}`,a:`<p>Sum of zeroes = ${f('−4','4')} = −1</p><p>Other zero = −1 − ${f('3','2')} = ${f('−5','2')}</p>${ans("(c) −5/2")}`},
{y:Y25C,q:`The zeroes of x<sup>2</sup> + 99x + 127 are ${opt("both positive","both negative","one positive and one negative","both equal")}`,a:`<p>Product = 127 &gt; 0, so the zeroes have the same sign.</p><p>Sum = −99 &lt; 0, so both are negative.</p>${ans("(b) both negative")}`},
{y:Y25C,q:`A quadratic polynomial whose one zero is 3 and the product of zeroes is 0, is ${opt("x² − 3","x² − 9","x² + 3x","x² − 3x")}`,a:`<p>Product 0 ⇒ other zero is 0. Zeroes 0 and 3: x(x − 3) = x<sup>2</sup> − 3x</p>${ans("(d) x² − 3x")}`},
{y:Y25C,q:`The value of x for which the polynomials 9 − x<sup>2</sup> and x<sup>2</sup> + 6x + 9 both vanish is ${opt("3","2","−2","−3")}`,a:`<p>9 − x<sup>2</sup> = 0 ⇒ x = ±3</p><p>x<sup>2</sup> + 6x + 9 = (x + 3)<sup>2</sup> = 0 ⇒ x = −3</p>${ans("(d) −3")}`},
{y:Y24,q:`The zeroes of the quadratic polynomial 2x<sup>2</sup> − 3x − 9 are ${opt("3, −3/2","−3, −3/2","−3, 3/2","3, 3/2")}`,a:`<p>2x<sup>2</sup> − 6x + 3x − 9 = 2x(x − 3) + 3(x − 3) = (x − 3)(2x + 3)</p>${ans("(a) 3, −3/2")}`}
],
ar:[
{y:Y26,q:`<b>Assertion (A):</b> The polynomial p(y) = y<sup>2</sup> + 4y + 3 has two zeroes.<br><b>Reason (R):</b> A quadratic polynomial can have at most two zeroes. ${AR}`,a:`<p>y<sup>2</sup> + 4y + 3 = (y + 1)(y + 3), zeroes −1 and −3. A is true.</p><p>R is true, but “at most two” does not explain why this one has exactly two.</p>${ans("(b)")}`}
],
vsa:[
{y:Y26,q:`If α, β are the zeroes of p(x) = x<sup>2</sup> − 3x − 1, find ${f('1','α')} + ${f('1','β')}.`,a:`<p>α + β = 3, αβ = −1</p><p>${f('1','α')} + ${f('1','β')} = ${f('α + β','αβ')} = ${f('3','−1')} = −3</p>${ans("−3")}`}
],
sa:[
{y:Y24,q:`Find the zeroes of x<sup>2</sup> − 15 and verify the relationship between the zeroes and the coefficients.`,a:`<p>x<sup>2</sup> − 15 = (x − √15)(x + √15). Zeroes: √15, −√15</p><p>Sum = 0 = ${f('−0','1')} ✓</p><p>Product = −15 = ${f('−15','1')} ✓</p>`},
{y:Y25,q:`If α and β are the zeroes of x<sup>2</sup> − ax − b, obtain a quadratic polynomial whose zeroes are 3α + 1 and 3β + 1.`,a:`<p>α + β = a, αβ = −b</p><p>Sum = 3(α + β) + 2 = 3a + 2</p><p>Product = 9αβ + 3(α + β) + 1 = −9b + 3a + 1</p>${ans("x² − (3a + 2)x + (3a − 9b + 1)")}`},
{y:Y25,q:`If α and β are the zeroes of px<sup>2</sup> + qx + 1, form a quadratic polynomial whose zeroes are ${f('2','α')} and ${f('2','β')}.`,a:`<p>α + β = ${f('−q','p')}, αβ = ${f('1','p')}</p><p>Sum = ${f('2(α + β)','αβ')} = −2q</p><p>Product = ${f('4','αβ')} = 4p</p>${ans("x² + 2qx + 4p")}`},
{y:Y25,q:`If α and β are the zeroes of ax<sup>2</sup> − x + c, obtain a polynomial whose zeroes are α − 3 and β − 3.`,a:`<p>α + β = ${f('1','a')}, αβ = ${f('c','a')}</p><p>Sum = α + β − 6 = ${f('1 − 6a','a')}</p><p>Product = αβ − 3(α + β) + 9 = ${f('c − 3 + 9a','a')}</p>${ans("ax² − (1 − 6a)x + (c − 3 + 9a)")}`},
{y:Y25C,q:`If a, b are the zeroes of p(x) = x<sup>2</sup> − 2x − 3, find a polynomial whose zeroes are (2a + 3b) and (3a + 2b).`,a:`<p>a + b = 2, ab = −3, a<sup>2</sup> + b<sup>2</sup> = 4 + 6 = 10</p><p>Sum = 5(a + b) = 10</p><p>Product = 6(a<sup>2</sup> + b<sup>2</sup>) + 13ab = 60 − 39 = 21</p>${ans("x² − 10x + 21")}`},
{y:Y25C,q:`α and β are the zeroes of x<sup>2</sup> − 4x + k such that α − β = 8. Find k.`,a:`<p>α + β = 4, αβ = k</p><p>(α − β)<sup>2</sup> = (α + β)<sup>2</sup> − 4αβ ⇒ 64 = 16 − 4k</p>${ans("k = −12")}`},
{y:Y25C,q:`The zeroes of (a<sup>2</sup> + 10)x<sup>2</sup> − 74x + 7a are reciprocals of each other and are rational. Find a.`,a:`<p>Reciprocal zeroes ⇒ product = 1 ⇒ ${f('7a','a<sup>2</sup> + 10')} = 1</p><p>a<sup>2</sup> − 7a + 10 = 0 ⇒ a = 2 or 5</p><p>a = 5 gives 35x<sup>2</sup> − 74x + 35 (discriminant 576 = 24<sup>2</sup>, rational zeroes). a = 2 gives irrational zeroes.</p>${ans("a = 5")}`}
],
la:[],
case:[]
};

CH2.rsa = [
{q:`Find the zeroes of x<sup>2</sup> + 7x + 12 and verify the relationship.`,a:`<p>(x + 3)(x + 4) ⇒ zeroes −3, −4</p><p>Sum −7 = ${f('−7','1')} ✓, product 12 = ${f('12','1')} ✓</p>`},
{q:`Find the zeroes of 2x<sup>2</sup> + x − 6 and verify the relationship.`,a:`<p>2x<sup>2</sup> + 4x − 3x − 6 = (2x − 3)(x + 2) ⇒ zeroes ${f('3','2')}, −2</p><p>Sum ${f('−1','2')} ✓, product −3 = ${f('−6','2')} ✓</p>`},
{q:`Find the zeroes of 4x<sup>2</sup> − 4x − 3 and verify the relationship.`,a:`<p>4x<sup>2</sup> − 6x + 2x − 3 = (2x − 3)(2x + 1) ⇒ ${f('3','2')}, ${f('−1','2')}</p><p>Sum 1 = ${f('4','4')} ✓, product ${f('−3','4')} ✓</p>`},
{q:`Find the zeroes of 5u<sup>2</sup> + 10u.`,a:`<p>5u(u + 2) ⇒ zeroes 0 and −2</p>`},
{q:`Find the zeroes of 3x<sup>2</sup> − 2 and verify the relationship.`,a:`<p>x<sup>2</sup> = ${f('2','3')} ⇒ x = ±${f('√6','3')}</p><p>Sum 0 ✓, product ${f('−2','3')} ✓</p>`},
{q:`Find the zeroes of 4√3x<sup>2</sup> + 5x − 2√3 and verify the relationship.`,a:`<p>a × c = −24, so split 5x as 8x − 3x:</p><p>4x(√3x + 2) − √3(√3x + 2) = (4x − √3)(√3x + 2)</p><p>Zeroes ${f('√3','4')} and ${f('−2','√3')}</p><p>Sum = ${f('−5','4√3')} = −${f('b','a')} ✓, product = ${f('−1','2')} = ${f('c','a')} ✓</p>`},
{q:`Find a quadratic polynomial with sum of zeroes −3 and product 2.`,a:`${ans("x² + 3x + 2")}`},
{q:`Find a quadratic polynomial whose zeroes are 2 + √3 and 2 − √3.`,a:`<p>Sum 4, product 4 − 3 = 1</p>${ans("x² − 4x + 1")}`},
{q:`Find a quadratic polynomial whose zeroes are ${f('3','5')} and ${f('−1','2')}.`,a:`<p>Sum ${f('1','10')}, product ${f('−3','10')}</p>${ans("10x² − x − 3")}`},
{q:`If one zero of 3x<sup>2</sup> − 8x + 2k + 1 is seven times the other, find k.`,a:`<p>α + 7α = ${f('8','3')} ⇒ α = ${f('1','3')}</p><p>7α<sup>2</sup> = ${f('2k + 1','3')} ⇒ ${f('7','9')} = ${f('2k + 1','3')} ⇒ k = ${f('2','3')}</p>`},
{q:`If the sum of the zeroes of x<sup>2</sup> − (k + 6)x + 2(2k − 1) is half their product, find k.`,a:`<p>k + 6 = ${f('2(2k − 1)','2')} = 2k − 1 ⇒ k = 7</p>`},
{q:`If α, β are zeroes of x<sup>2</sup> − 5x + 4, find ${f('1','α')} + ${f('1','β')} − 2αβ.`,a:`<p>${f('5','4')} − 8 = ${f('−27','4')}</p>`},
{q:`If α, β are zeroes of 2x<sup>2</sup> + 5x − 3, find α<sup>2</sup> + β<sup>2</sup>.`,a:`<p>(α + β)<sup>2</sup> − 2αβ = ${f('25','4')} + 3 = ${f('37','4')}</p>`},
{q:`If α, β (α &gt; β) are zeroes of x<sup>2</sup> − 7x + 10, find α − β without finding the zeroes.`,a:`<p>(α − β)<sup>2</sup> = 49 − 40 = 9 ⇒ α − β = 3</p>`},
{q:`If α, β are zeroes of x<sup>2</sup> − x − 6, find a polynomial whose zeroes are 2α and 2β.`,a:`<p>Sum 2, product 4 × (−6) = −24</p>${ans("x² − 2x − 24")}`},
{q:`If α, β are zeroes of x<sup>2</sup> + 3x + 2, find a polynomial whose zeroes are α + 1 and β + 1.`,a:`<p>Sum = −3 + 2 = −1, product = 2 − 3 + 1 = 0</p>${ans("x² + x")}`},
{q:`If α, β are zeroes of x<sup>2</sup> − 2x + 3, find a polynomial whose zeroes are ${f('1','α')} and ${f('1','β')}.`,a:`<p>Sum ${f('2','3')}, product ${f('1','3')}</p>${ans("3x² − 2x + 1")}`},
{q:`Show that if the zeroes of ax<sup>2</sup> + bx + c are reciprocals of each other, then c = a.`,a:`<p>α × ${f('1','α')} = 1 = ${f('c','a')} ⇒ c = a</p>`},
{q:`If 2 is a zero of x<sup>2</sup> + kx − 10, find k and the other zero.`,a:`<p>4 + 2k − 10 = 0 ⇒ k = 3. Product = −10 ⇒ other zero = −5</p>`},
{q:`If the sum of the squares of the zeroes of x<sup>2</sup> − 8x + k is 40, find k.`,a:`<p>64 − 2k = 40 ⇒ k = 12</p>`},
{q:`If the zeroes of x<sup>2</sup> + px + q are double the zeroes of 2x<sup>2</sup> − 5x − 3, find p and q.`,a:`<p>2x<sup>2</sup> − 5x − 3 = (2x + 1)(x − 3): zeroes ${f('−1','2')}, 3. Doubled: −1, 6.</p><p>x<sup>2</sup> − 5x − 6 ⇒ p = −5, q = −6</p>`},
{q:`How many zeroes does y = x<sup>2</sup> + 2x + 1 have? Explain using its graph.`,a:`${fig(plot({xr:[-4,2],yr:[-1,5],w:240,h:190,m:16,fs:9,fns:[{f:x=>x*x+2*x+1}],pts:[[-1,0,"(−1, 0)",6,-8,RED]]}),"")}<p>(x + 1)<sup>2</sup>: the parabola only touches the x-axis at −1.</p>${ans("One zero")}`},
{q:`Find a quadratic polynomial whose zeroes are 0 and 5.`,a:`${ans("x² − 5x")}`},
{q:`If α, β are zeroes of x<sup>2</sup> + x − 2, find α<sup>2</sup>β + αβ<sup>2</sup>.`,a:`<p>αβ(α + β) = (−2)(−1) = 2</p>`},
{q:`Draw the graph of y = x<sup>2</sup> − x − 6 and read its zeroes.`,a:`${fig(plot({xr:[-4,5],yr:[-8,7],w:280,h:230,m:16,fs:9,gy:2,ly:4,fns:[{f:x=>x*x-x-6}],pts:[[-2,0,"−2",-12,-8,RED],[3,0,"3",6,-8,RED]]}),"")}${ans("Zeroes −2 and 3")}`}
];

CH2.cases = [
CH2.cases[0],
{title:"The bridge arch",story:"An engineer models the arch under a footbridge with p(x) = −x<sup>2</sup> + 8x − 12, where x is the distance (in m) from a lamp post and p(x) is the height (in m). The arch meets the ground where p(x) = 0.",
fig: fig(plot({xr:[0,8],yr:[-2,5],w:420,h:250,lx:1,ly:1,fns:[{f:x=>-x*x+8*x-12,c:RED}],pts:[[2,0,"(2, 0)",-6,-10,BLUE,"end"],[6,0,"(6, 0)",6,-10,BLUE],[4,4,"top (4, 4)",8,4,MUTED]]}),"The arch is a downward parabola.","wide"),
qs:[
{m:1,q:`How many zeroes does p(x) have, judging from the graph?`,a:`${ans("Two")}`},
{m:1,q:`Find the zeroes of p(x).`,a:`<p>−(x<sup>2</sup> − 8x + 12) = −(x − 2)(x − 6)</p>${ans("2 and 6")}`},
{m:2,q:`Verify the relationship between the zeroes and coefficients.`,a:`<p>Sum = 8 = ${f('−8','−1')} ✓</p><p>Product = 12 = ${f('−12','−1')} ✓</p>`}
]},
{title:"The model rocket",story:"In a science fair, Rohan launches a model rocket. Its height (in m) after t seconds is h(t) = −5t<sup>2</sup> + 20t.",
fig: fig(plot({xr:[0,4.6],yr:[-2,22],w:420,h:250,gx:0.5,gy:2,lx:1,ly:4,xl:"t",yl:"h",fns:[{f:t=>-5*t*t+20*t}],pts:[[0,0,"launch",6,-8,RED],[4,0,"lands (4, 0)",-6,-10,RED,"end"],[2,20,"highest (2, 20)",8,4,MUTED]]}),"","wide"),
qs:[
{m:1,q:`Find the zeroes of h(t).`,a:`<p>−5t(t − 4) = 0 ⇒ t = 0 or t = 4</p>`},
{m:1,q:`After how many seconds does the rocket land?`,a:`${ans("4 seconds")}`},
{m:2,q:`Verify the sum and product of the zeroes.`,a:`<p>Sum = 4 = ${f('−20','−5')} ✓</p><p>Product = 0 = ${f('0','−5')} ✓</p>`}
]}
];

/* ---------------- Chapter 3 ---------------- */
CH3.pyqs = {
mcq:[
{y:Y26,q:`If a pair of linear equations in two variables is represented by two coincident lines, then the pair has ${opt("a unique solution","two solutions","no solution","an infinite number of solutions")}`,a:`${ans("(d)")}`},
{y:Y24,q:`The pair of linear equations x + 2y + 5 = 0 and −3x = 6y − 1 has ${opt("unique solution","exactly two solutions","infinitely many solutions","no solution")}`,a:`<p>Second: 3x + 6y − 1 = 0</p><p>${f('1','3')} = ${f('2','6')} ≠ ${f('5','−1')} ⇒ parallel</p>${ans("(d) no solution")}`},
{y:Y25,q:`The value of p for which px + 3y = p − 3 and 12x + py = p have infinitely many solutions is ${opt("−6 only","6 only","± 6","any real number except ± 6")}`,a:`<p>${f('p','12')} = ${f('3','p')} ⇒ p = ±6</p><p>Also ${f('3','p')} = ${f('p − 3','p')} ⇒ p = 6</p>${ans("(b) 6 only")}`},
{y:Y25,q:`If 3x + 2y = 4 and 4ax + (a + b)y = 16 have infinitely many solutions, then ${opt("5a = 3b","3a = 5b","a + b = 15","a − b = 2")}`,a:`<p>${f('3','4a')} = ${f('2','a + b')} = ${f('4','16')} ⇒ a = 3, a + b = 8 ⇒ b = 5</p>${ans("(a) 5a = 3b")}`},
{y:Y25C,q:`The value of k for which (k + 1)x + 2(1 − k)y = 15 and 4y = 3x − 8 has no solution is ${opt("3","1/5","5","37/8")}`,a:`<p>Second: 3x − 4y = 8</p><p>${f('k + 1','3')} = ${f('2(1 − k)','−4')} ⇒ 2k + 2 = 3k − 3 ⇒ k = 5</p>${ans("(c) 5")}`},
{y:Y25C,q:`If 2x + 3y = 5 and 4ky − (1 − 3k)x = 6k + 2 represent coincident lines, then k is ${opt("−1/3","3","1/4","4")}`,a:`<p>k = 3 gives 8x + 12y = 20, which is 4 × (2x + 3y = 5).</p>${ans("(b) 3")}`},
{y:Y25C,q:`9x − 15y + 19 = 0 and 5y − 3x − 9 = 0 represent lines which are ${opt("intersecting at exactly one point","intersecting at exactly two points","parallel","coincident")}`,a:`<p>${f('9','−3')} = ${f('−15','5')} = −3 ≠ ${f('19','−9')}</p>${ans("(c) parallel")}`},
{y:Y25C,q:`Graphically, 8x − 4y + 12 = 0 and 2x − y + 5 = 0 represent lines which are ${opt("intersecting at exactly one point","intersecting at exactly two points","parallel","coincident")}`,a:`<p>${f('8','2')} = ${f('−4','−1')} = 4 ≠ ${f('12','5')}</p>${ans("(c) parallel")}`}
],
ar:[],
vsa:[
{y:Y25,q:`Solve algebraically: 37x + 63y = 137 and 63x + 37y = 163.`,a:`<p>Add: 100x + 100y = 300 ⇒ x + y = 3</p><p>Subtract: 26x − 26y = 26 ⇒ x − y = 1</p>${ans("x = 2, y = 1")}`},
{y:Y25,q:`Solve algebraically: 40x + 55y = 13 and 30x + 44y = 10.`,a:`<p>Multiply by 3 and 4: 120x + 165y = 39, 120x + 176y = 40</p><p>Subtract: 11y = 1 ⇒ y = ${f('1','11')}, then 40x = 13 − 5 ⇒ x = ${f('1','5')}</p>`},
{y:Y25,q:`Solve algebraically: 73x − 37y = 109 and 37x − 73y = 1.`,a:`<p>Add: 110x − 110y = 110 ⇒ x − y = 1</p><p>Subtract: 36x + 36y = 108 ⇒ x + y = 3</p>${ans("x = 2, y = 1")}`},
{y:Y25C,q:`Find k for which kx + y = k<sup>2</sup> and x + ky = 1 have infinitely many solutions.`,a:`<p>${f('k','1')} = ${f('1','k')} = ${f('k<sup>2</sup>','1')} ⇒ k<sup>2</sup> = 1 and k<sup>3</sup> = 1</p>${ans("k = 1")}`},
{y:Y24,q:`If 2x + y = 13 and 4x − y = 17, find the value of (x − y).`,a:`<p>Add: 6x = 30 ⇒ x = 5, y = 3</p>${ans("x − y = 2")}`},
{y:Y24,q:`The sum of two numbers is 105 and their difference is 45. Find the numbers.`,a:`<p>x + y = 105, x − y = 45 ⇒ x = 75, y = 30</p>`}
],
sa:[
{y:Y25,q:`The two angles of a right-angled triangle, other than 90°, are in the ratio 2 : 3. Form a pair of linear equations and solve.`,a:`<p>x + y = 90, 3x − 2y = 0</p><p>y = ${f('3x','2')} ⇒ ${f('5x','2')} = 90 ⇒ x = 36</p>${ans("36° and 54°")}`},
{y:Y25,q:`The monthly incomes of two persons are in the ratio 9 : 7 and their expenditures in the ratio 4 : 3. If each saves ₹5000, find their monthly incomes.`,a:`<p>Incomes 9x, 7x; expenditures 4y, 3y</p><p>9x − 4y = 5000, 7x − 3y = 5000</p><p>×3 and ×4: 27x − 12y = 15000, 28x − 12y = 20000 ⇒ x = 5000</p>${ans("₹45000 and ₹35000")}`},
{y:Y25C,q:`Check graphically whether 2x + 3y = 12 and 5x − 3y = 9 are consistent. If so, solve graphically.`,a:`${fig(plot({xr:[-1,7],yr:[-4,5],w:300,h:250,m:18,fs:9,fns:[{f:lineY(2,3,12)},{f:lineY(5,-3,9),c:RED}],pts:[[3,2,"(3, 2)",8,4]]}),"")}<p>The lines intersect, so the pair is consistent.</p>${ans("x = 3, y = 2")}`},
{y:Y25,q:`The perimeter of a rectangle is 70 cm. Its length is 5 cm more than twice its breadth. Find the dimensions.`,a:`<p>x + y = 35, x − 2y = 5 ⇒ 3y = 30</p>${ans("25 cm and 10 cm")}`},
{y:Y25C,q:`A 2-digit number is obtained either by multiplying the sum of its digits by 7 and adding 3, or by multiplying the difference of its digits by 19 and subtracting 1. The tens digit is greater. Find the number.`,a:`<p>10x + y = 7(x + y) + 3 ⇒ x − 2y = 1</p><p>10x + y = 19(x − y) − 1 ⇒ 9x − 20y = 1</p><p>x = 2y + 1 ⇒ 18y + 9 − 20y = 1 ⇒ y = 4, x = 9</p>${ans("94")}`},
{y:Y25,q:`For what values of m and n does 2x + 3y = 7 and m(x + 2y) + n(x − y) = 21 have infinitely many solutions?`,a:`<p>Second: (m + n)x + (2m − n)y = 21</p><p>${f('2','m + n')} = ${f('3','2m − n')} = ${f('7','21')} = ${f('1','3')}</p><p>m + n = 6, 2m − n = 9 ⇒ m = 5, n = 1</p>`},
{y:Y25C,q:`The ratio of monthly incomes of two persons is 11 : 7 and the ratio of their expenditures is 9 : 5. If each saves ₹400 per month, find their incomes.`,a:`<p>11x − 9y = 400, 7x − 5y = 400</p><p>×5 and ×9: 55x − 45y = 2000, 63x − 45y = 3600 ⇒ x = 200</p>${ans("₹2200 and ₹1400")}`},
{y:Y25,q:`The sum of the numerator and denominator of a fraction is 4 more than twice the numerator. If both are increased by 3, they are in the ratio 2 : 3. Find the fraction.`,a:`<p>x + y = 4 + 2x ⇒ y = x + 4</p><p>3(x + 3) = 2(y + 3) ⇒ 3x − 2y = −3</p><p>3x − 2x − 8 = −3 ⇒ x = 5, y = 9</p>${ans("5/9")}`},
{y:Y24,q:`Solve graphically: x − y + 1 = 0 and x + y = 5.`,a:`${fig(plot({xr:[-1,6],yr:[-1,6],w:300,h:260,m:18,fs:9,fns:[{f:x=>x+1},{f:x=>5-x,c:RED}],pts:[[2,3,"(2, 3)",8,4]]}),"")}${ans("x = 2, y = 3")}`}
],
la:[
{y:Y26,q:`Determine graphically the coordinates of the vertices of the triangle formed by 2x − 3y + 6 = 0, 2x + 3y − 18 = 0 and x = 0. Also find its area.`,a:`${fig(plot({xr:[-1,6],yr:[-1,7],w:320,h:280,m:18,fs:9,poly:[{pts:[[0,2],[0,6],[3,4]]}],fns:[{f:lineY(2,-3,-6)},{f:lineY(2,3,18),c:RED}],pts:[[0,2,"(0, 2)",6,14],[0,6,"(0, 6)",6,-6],[3,4,"(3, 4)",8,4]]}),"")}<p>Adding the equations: 4x − 12 = 0 ⇒ x = 3, y = 4</p><p>On x = 0: y = 2 and y = 6</p><p>Area = ${f('1','2')} × (6 − 2) × 3 = 6 sq units</p>${ans("(0, 2), (0, 6), (3, 4); area 6")}`}
],
case:[]
};

CH3.rsa = [
{q:`Solve: 2x + 3y = 11, x − 2y = −12.`,a:`<p>x = 2y − 12 ⇒ 4y − 24 + 3y = 11 ⇒ y = 5, x = −2</p>`},
{q:`Solve: 3x − 5y = −1, x − y = −1.`,a:`<p>x = y − 1 ⇒ 3y − 3 − 5y = −1 ⇒ y = −1, x = −2</p>`},
{q:`Show that 2x + 3y = 8 and 4x + 6y = 7 have no solution.`,a:`<p>${f('2','4')} = ${f('3','6')} ≠ ${f('8','7')} ⇒ parallel lines, no solution</p>`},
{q:`Solve: 0.4x + 0.3y = 1.7, 0.7x − 0.2y = 0.8.`,a:`<p>4x + 3y = 17, 7x − 2y = 8</p><p>×2 and ×3: 8x + 6y = 34, 21x − 6y = 24 ⇒ 29x = 58</p>${ans("x = 2, y = 3")}`},
{q:`Solve: ${f('x','3')} + ${f('y','4')} = 4, ${f('5x','6')} − ${f('y','8')} = 4.`,a:`<p>4x + 3y = 48, 20x − 3y = 96 ⇒ 24x = 144</p>${ans("x = 6, y = 8")}`},
{q:`Solve: 99x + 101y = 499, 101x + 99y = 501.`,a:`<p>Add: x + y = 5. Subtract: x − y = 1</p>${ans("x = 3, y = 2")}`},
{q:`For what value of k does 2x + ky = 1, 3x − 5y = 7 have a unique solution?`,a:`<p>${f('2','3')} ≠ ${f('k','−5')} ⇒ k ≠ ${f('−10','3')}</p>`},
{q:`Find k for which 3x + y = 1 and (2k − 1)x + (k − 1)y = 2k + 1 have no solution.`,a:`<p>${f('3','2k − 1')} = ${f('1','k − 1')} ⇒ k = 2</p><p>Check ${f('1','k − 1')} = 1 ≠ ${f('1','5')} ✓</p>${ans("k = 2")}`},
{q:`Find a and b for which 2x − 3y = 7 and (a + b)x − (a + b − 3)y = 4a + b have infinitely many solutions.`,a:`<p>${f('2','a + b')} = ${f('3','a + b − 3')} ⇒ a + b = −6</p><p>${f('2','−6')} = ${f('7','4a + b')} ⇒ 4a + b = −21</p>${ans("a = −5, b = −1")}`},
{q:`Solve graphically: x + 3y = 6, 2x − 3y = 12.`,a:`${fig(plot({xr:[-1,8],yr:[-5,3],w:300,h:240,m:18,fs:9,fns:[{f:lineY(1,3,6)},{f:lineY(2,-3,12),c:RED}],pts:[[6,0,"(6, 0)",6,-8]]}),"")}${ans("x = 6, y = 0")}`},
{q:`Solve graphically 2x + y = 6 and 2x − y = 2. Find the area of the triangle formed with the x-axis.`,a:`${fig(plot({xr:[-1,5],yr:[-3,7],w:300,h:260,m:18,fs:9,poly:[{pts:[[1,0],[3,0],[2,2]]}],fns:[{f:x=>6-2*x},{f:x=>2*x-2,c:RED}],pts:[[2,2,"(2, 2)",8,4],[1,0,"(1, 0)",-4,14,INK,"end"],[3,0,"(3, 0)",4,14]]}),"")}<p>Area = ${f('1','2')} × 2 × 2 = 2 sq units</p>`},
{q:`The sum of two numbers is 1000 and the difference of their squares is 256000. Find the numbers.`,a:`<p>(x + y)(x − y) = 256000 ⇒ x − y = 256</p>${ans("628 and 372")}`},
{q:`A father’s age is three times the sum of his two children’s ages. After 5 years, his age will be twice the sum of their ages. Find the father’s age.`,a:`<p>f = 3s, f + 5 = 2(s + 10) ⇒ 3s + 5 = 2s + 20 ⇒ s = 15</p>${ans("45 years")}`},
{q:`A two-digit number is 4 times the sum of its digits and twice the product of its digits. Find the number.`,a:`<p>10x + y = 4(x + y) ⇒ y = 2x</p><p>12x = 2x(2x) ⇒ x = 3, y = 6</p>${ans("36")}`},
{q:`If 1 is added to both numerator and denominator, a fraction becomes ${f('4','5')}. If 5 is subtracted from both, it becomes ${f('1','2')}. Find the fraction.`,a:`<p>5x − 4y = −1, 2x − y = 5 ⇒ y = 2x − 5</p><p>5x − 8x + 20 = −1 ⇒ x = 7, y = 9</p>${ans("7/9")}`},
{q:`Places A and B are 70 km apart. Two cars start from A and B at the same time. Going the same way they meet in 7 hours; going towards each other they meet in 1 hour. Find their speeds.`,a:`<p>7(x − y) = 70 ⇒ x − y = 10; x + y = 70</p>${ans("40 km/h and 30 km/h")}`},
{q:`2 tables and 3 chairs cost ₹3500; 3 tables and 2 chairs cost ₹4000. Find the cost of each.`,a:`<p>Add: x + y = 1500. Subtract: x − y = 500</p>${ans("Table ₹1000, chair ₹500")}`},
{q:`If a rectangle’s length increases by 2 m and breadth decreases by 2 m, its area falls by 28 m². If length decreases by 1 m and breadth increases by 2 m, area rises by 33 m². Find the dimensions.`,a:`<p>(l + 2)(b − 2) = lb − 28 ⇒ l − b = 12</p><p>(l − 1)(b + 2) = lb + 33 ⇒ 2l − b = 35</p>${ans("23 m × 11 m")}`},
{q:`In △ABC, ∠C = 3∠B = 2(∠A + ∠B). Find the angles.`,a:`<p>3B = 2A + 2B ⇒ B = 2A, C = 6A</p><p>A + 2A + 6A = 180 ⇒ A = 20°</p>${ans("20°, 40°, 120°")}`},
{q:`ABCD is a cyclic quadrilateral with ∠A = (2x + 4)°, ∠B = (y + 3)°, ∠C = (2y + 10)°, ∠D = (4x − 5)°. Find the angles.`,a:`<p>A + C = 180 ⇒ x + y = 83; B + D = 180 ⇒ 4x + y = 182</p><p>x = 33, y = 50</p>${ans("70°, 53°, 110°, 127°")}`},
{q:`If 10 students move from section A to B, both have equal numbers. If 10 move from B to A, A has thrice B. Find the numbers.`,a:`<p>a − b = 20, a + 10 = 3(b − 10) ⇒ a − 3b = −40</p>${ans("A = 50, B = 30")}`},
{q:`Jamila sold a table and a chair for ₹1050, at 10% and 25% profit. At 25% and 10% profit she would get ₹1065. Find the cost price of each.`,a:`<p>1.1x + 1.25y = 1050, 1.25x + 1.1y = 1065</p><p>Add: x + y = 900. Subtract: x − y = 100</p>${ans("Table ₹500, chair ₹400")}`},
{q:`Solve graphically: 2x − y = 1, x + 2y = 13. Find the area of the triangle formed with the y-axis.`,a:`${fig(plot({xr:[-1,6],yr:[-2,8],w:300,h:260,m:18,fs:9,poly:[{pts:[[0,-1],[0,6.5],[3,5]]}],fns:[{f:x=>2*x-1},{f:lineY(1,2,13),c:RED}],pts:[[3,5,"(3, 5)",8,4]]}),"")}<p>y-intercepts: −1 and 6.5 ⇒ base 7.5, height 3</p><p>Area = ${f('1','2')} × 7.5 × 3 = 11.25 sq units</p>`},
{q:`For which a and b do 2x + 3y = 7 and (a − b)x + (a + b)y = 3a + b − 2 have infinitely many solutions?`,a:`<p>${f('2','a − b')} = ${f('3','a + b')} ⇒ a = 5b</p><p>${f('2','a − b')} = ${f('7','3a + b − 2')} ⇒ a = 9b − 4</p>${ans("a = 5, b = 1")}`},
{q:`Solve for x and y: ax + by = a − b, bx − ay = a + b.`,a:`<p>Multiply by a and b and add: (a<sup>2</sup> + b<sup>2</sup>)x = a<sup>2</sup> + b<sup>2</sup> ⇒ x = 1</p><p>Then by = −b ⇒ y = −1</p>`}
];

CH3.cases = [
CH3.cases[0],
{title:"School fair tickets",story:"At a school fair, 300 tickets were sold for a total of ₹9600. Adult tickets cost ₹40 and student tickets cost ₹20.",qs:[
{m:1,q:`Write the pair of linear equations.`,a:`<p>x + y = 300, 40x + 20y = 9600</p>`},
{m:1,q:`How many adult tickets were sold?`,a:`<p>2x + y = 480 ⇒ x = 180</p>${ans("180 adult, 120 student")}`},
{m:2,q:`If 50 more student tickets had been sold, what would the total collection be?`,a:`<p>9600 + 50 × 20 = ₹10600</p>`}
]},
{title:"Choosing a data plan",story:"Plan A costs ₹200 a month plus ₹10 per GB. Plan B costs ₹100 a month plus ₹15 per GB.",
fig: fig(plot({xr:[0,35],yr:[0,650],w:420,h:270,gx:5,gy:50,lx:5,ly:100,xl:"GB",yl:"₹",fns:[{f:g=>200+10*g,label:"Plan A",lx:27,ly:420},{f:g=>100+15*g,c:RED,label:"Plan B",lx:30,ly:620,anchor:"end"}],pts:[[20,400,"(20, 400)",8,14]]}),"The plans cost the same at 20 GB.","wide"),
qs:[
{m:1,q:`Write the cost of each plan for x GB.`,a:`<p>A: y = 200 + 10x, B: y = 100 + 15x</p>`},
{m:1,q:`For how many GB do both plans cost the same?`,a:`<p>200 + 10x = 100 + 15x ⇒ x = 20</p>${ans("20 GB, ₹400")}`},
{m:2,q:`Which plan is cheaper for 30 GB, and by how much?`,a:`<p>A: 200 + 300 = ₹500, B: 100 + 450 = ₹550</p>${ans("Plan A, by ₹50")}`}
]}
];
