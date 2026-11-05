# MathsBlade – Class 10 CBSE Maths

Static website: upload this whole folder to any web host (Netlify, GitHub Pages, Hostinger, Vercel). No build step.

## Folder structure

```
index.html                     page shell (header, footer, script and style links)
assets/
  favicon.png                  browser tab icon
  apple-touch-icon.png         phone home-screen icon
  logo-mark.png                π logo in the header
css/
  main.css                     theme colours (blue / pink, light / dark), layout, notes, notebook answers
  exam.css                     board exam screen, results, leaderboard
  accounts.css                 sign up / sign in, account page
js/
  config.js                    ← YOUR SETTINGS: YouTube link, Google Sheet URL, Firebase config
  helpers.js                   fraction helper, graph plotter, diagrams
  data/
    ch1-real-numbers.js        Chapter 1 notes, NCERT solutions, test
    ch2-polynomials.js         Chapter 2 notes, NCERT solutions, test
    ch3-linear-equations.js    Chapter 3 notes, NCERT solutions, test
    practice-pyqs-top25-cases.js  year-tagged PYQs, Top 25, case studies (all chapters)
  exam.js                      1-hour board papers (questions + exam engine)
  leaderboard.js               registration + leaderboard storage
  auth.js                      sign up / sign in / account page
  app.js                       routing, home page, chapter pages, labs, colour mode
setup/
  ACCOUNTS-firebase-setup.txt          turn on real student accounts
  LEADERBOARD-google-sheet-setup.txt   turn on the shared leaderboard
  leaderboard-apps-script.gs           code for the Google Sheet
```

## Settings

Edit only `js/config.js`:

- `YOUTUBE_URL` – your channel.
- `LEADERBOARD_SHEET_URL` – see `setup/LEADERBOARD-google-sheet-setup.txt`.
- `FIREBASE_CONFIG` – see `setup/ACCOUNTS-firebase-setup.txt`.

## Adding a chapter later

1. Create `js/data/ch4-quadratic-equations.js` with `const CH4 = {...}` (copy the shape of Chapter 3).
2. Add its PYQs / Top 25 / cases and its board paper (`CH4.exam`) the same way.
3. Add `<script src="js/data/ch4-quadratic-equations.js"></script>` in `index.html` after Chapter 3.
4. In `js/app.js`, change `const CHAPTERS = [CH1, CH2, CH3];` to include `CH4`, and remove it from `COMING`.

Scripts must stay in the order listed in `index.html`.
