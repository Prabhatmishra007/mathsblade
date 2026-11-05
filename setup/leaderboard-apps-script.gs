/**
 * MathsBlade leaderboard – Google Apps Script backend
 * ---------------------------------------------------
 * Stores registrations and scores in THIS Google Sheet (private to you)
 * and returns a public leaderboard that shows only first name + surname
 * initial and scores. Emails and phone numbers are never sent back.
 *
 * Optional: type a number in the "Teacher total" column of the Scores
 * sheet to override a student's self-checked total. The leaderboard then
 * uses your number and marks the row "teacher-checked".
 */
const TZ = "Asia/Kolkata";
const SCORE_HEADERS = ["Time","Chapter","Name","Email","Phone","Section A (auto)","B–E (self-checked)","Total","Warnings","Minutes","Teacher total (optional)","School"];
const REG_HEADERS = ["Time","Name","Email","Phone","Chapter","School"];

function sheet_(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); sh.appendRow(headers); sh.setFrozenRows(1); }
  return sh;
}
function clean_(s, n) { return String(s == null ? "" : s).replace(/[<>=]/g, "").trim().slice(0, n); }
function num_(v, lo, hi) { v = Number(v); if (!isFinite(v)) return lo; return Math.min(hi, Math.max(lo, Math.round(v * 2) / 2)); }
function key_(email) {
  const b = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(email).trim().toLowerCase(), Utilities.Charset.UTF_8);
  return b.slice(0, 8).map(function (x) { return ((x + 256) % 256).toString(16).padStart(2, "0"); }).join("");
}
function short_(name) {
  const p = clean_(name, 40).split(/\s+/).filter(String);
  if (!p.length) return "Student";
  const cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
  return p.length > 1 ? cap(p[0]) + " " + p[p.length - 1].charAt(0).toUpperCase() + "." : cap(p[0]);
}
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function better_(a, b) { return a.total > b.total || (a.total === b.total && (a.viol < b.viol || (a.viol === b.viol && a.mins < b.mins))); }

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const ch = String(d.ch || "");
    const email = clean_(d.email, 80).toLowerCase();
    const phone = String(d.phone || "").replace(/\D/g, "").slice(-10);
    if (!/^ch\d{1,2}$/.test(ch) && !(d.action === "register" && ch === "account")) return json_({ ok: false, error: "chapter" });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return json_({ ok: false, error: "email" });
    if (!/^[6-9]\d{9}$/.test(phone)) return json_({ ok: false, error: "phone" });
    const name = clean_(d.name, 40);
    const school = clean_(d.school, 60);
    if (d.action === "register") {
      sheet_("Registrations", REG_HEADERS).appendRow([new Date(), name, email, "'" + phone, ch, school]);
      return json_({ ok: true });
    }
    if (d.action === "score") {
      const auto = num_(d.auto, 0, 11), self = num_(d.self, 0, 19);
      sheet_("Scores", SCORE_HEADERS).appendRow([new Date(), ch, name, email, "'" + phone, auto, self, auto + self, num_(d.viol, 0, 3), num_(d.mins, 0, 60), "", school]);
      return json_({ ok: true });
    }
    return json_({ ok: false, error: "action" });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const ch = String((e.parameter && e.parameter.ch) || "");
  if (!/^ch\d{1,2}$/.test(ch)) return json_({ ok: false, rows: [] });
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Scores");
  if (!sh) return json_({ ok: true, rows: [] });
  const best = {};
  sh.getDataRange().getValues().slice(1).forEach(function (r) {
    if (String(r[1]) !== ch) return;
    const teacher = r[10] === "" || r[10] === null ? null : num_(r[10], 0, 30);
    const row = {
      name: short_(r[2]), school: clean_(r[11], 60), auto: Number(r[5]) || 0, self: Number(r[6]) || 0,
      total: teacher !== null ? teacher : Number(r[7]) || 0, checked: teacher !== null,
      viol: Number(r[8]) || 0, mins: Number(r[9]) || 0,
      date: r[0] instanceof Date ? Utilities.formatDate(r[0], TZ, "d MMM") : "",
      key: key_(r[3])
    };
    if (!best[row.key] || better_(row, best[row.key])) best[row.key] = row;
  });
  const rows = Object.keys(best).map(function (k) { return best[k]; })
    .sort(function (a, b) { return better_(a, b) ? -1 : better_(b, a) ? 1 : 0; })
    .slice(0, 50);
  return json_({ ok: true, rows: rows });
}
