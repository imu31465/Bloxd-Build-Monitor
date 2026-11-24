export const id = 30;
export const ids = [30];
export const modules = {
  36502: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      DUMP_GAP_MS: () => im,
      DiagSink: () => om,
      ITEM_GAP_MS: () => Am,
      ITEM_METADATA_BYTES: () => Dm,
      MAX_LINE_CHARS: () => xm,
      MAX_MESSAGE_BYTES: () => am
    });
    const hm = "bloxdDiagSinkDays",
      Am = 4e4,
      am = 2048,
      xm = 400,
      wm = 262144,
      Dm = 1500,
      im = 6e5,
      Rm = new TextEncoder;

    function pm(mm) {
      return Rm.encode(mm).length
    }

    function Em(mm) {
      return Dm + pm(mm)
    }
    class om {
      constructor(mm, Tm) {
        this.claim = mm, this.deps = Tm, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = Tm.now()
      }
      start() {
        setInterval((() => {
          this.DE()
        }), Am), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(mm) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(mm) {
          const Tm = mm.replace(/\n/g, " | ");
          if (Tm.length <= xm) return Tm;
          let fm = xm - 3;
          const hm = Tm.charCodeAt(fm - 1);
          return hm >= 55296 && hm <= 56319 && fm--, `${Tm.slice(0,fm)}...`
        }(mm)) : this.dropped = !0)
      }
      DE() {
        this.deps.now() - this.lastDumpMs >= im && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Am - 1e3) return;
        const mm = this.readDay(),
          Tm = [];
        let fm = 0,
          hm = null;
        for (const Am of this.queue) {
          const xm = pm(Am) + (Tm.length > 0 ? 1 : 0);
          if (fm + xm > am) break;
          const im = Dm + fm + xm;
          if (this.pageBytes + im > wm) {
            hm = "page";
            break
          }
          if (!this.dayFits(mm, Tm.length + 1, im)) {
            hm = "day";
            break
          }
          Tm.push(Am), fm += xm
        }
        null === hm && this.dropped && Tm.length === this.queue.length && (hm = "page"), this.queue.splice(0, Tm.length), Tm.length > 0 && !this.sendCharged(mm, Tm.join("\n"), Tm.length, "lines") || null !== hm && this.stopAt(hm, mm)
      }
      queueDumps() {
        for (const [mm, Tm] of this.deps.dumps()) {
          const fm = Tm.split("\n").slice(0, 20),
            hm = fm.join("\n");
          if (this.sentDumps.get(mm) !== hm) {
            this.sentDumps.set(mm, hm);
            for (const Tm of fm) this.add(`[dump:${mm}] ${Tm}`)
          }
        }
      }
      stopAt(mm, Tm) {
        this.stopped = !0, this.queue.length = 0;
        const fm = "page" === mm ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === mm) {
          if (Tm.capSent) return;
          Tm.capSent = !0
        } else if (!this.dayFits(Tm, 1, Em(fm))) return;
        this.sendCharged(Tm, fm, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(mm, Tm, fm) {
        return mm.lines + Tm <= this.claim.perClientLines && mm.bytes + fm <= this.dayBytes()
      }
      readDays() {
        var mm;
        return null !== (mm = this.deps.storage.getItem(hm)) && void 0 !== mm ? mm : {}
      }
      readDay() {
        const mm = new Date(this.deps.now()).toISOString().slice(0, 10),
          Tm = this.readDays()[this.claim.claimId];
        return (null === Tm || void 0 === Tm ? void 0 : Tm.day) === mm ? Tm : {
          day: mm,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(mm) {
        const Tm = Object.fromEntries(Object.entries(this.readDays()).filter((Tm => {
          let [, fm] = Tm;
          return fm.day === mm.day
        })));
        return Tm[this.claim.claimId] = mm, this.deps.storage.setItem(hm, Tm)
      }
      sendCharged(mm, Tm, fm, hm) {
        const Am = Em(Tm);
        return mm.lines += fm, mm.bytes += Am, this.writeDay(mm) ? (this.pageLines += fm, this.pageBytes += Am, this.lastSentMs = this.deps.now(), this.deps.send(Tm, {
          diag_kind: hm
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);