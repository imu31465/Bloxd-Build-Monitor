export const id = 30;
export const ids = [30];
export const modules = {
  36588: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      DUMP_GAP_MS: () => Cd,
      DiagSink: () => Qd,
      ITEM_GAP_MS: () => Nd,
      ITEM_METADATA_BYTES: () => gd,
      MAX_LINE_CHARS: () => Pd,
      MAX_MESSAGE_BYTES: () => Wd
    });
    const pd = "bloxdDiagSinkDays",
      Nd = 4e4,
      Wd = 2048,
      Pd = 400,
      Zd = 262144,
      gd = 1500,
      Cd = 6e5,
      Kd = new TextEncoder;

    function od(dd) {
      return Kd.encode(dd).length
    }

    function ld(dd) {
      return gd + od(dd)
    }
    class Qd {
      constructor(dd, Jd) {
        this.claim = dd, this.deps = Jd, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = Jd.now()
      }
      start() {
        setInterval((() => {
          this.Do()
        }), Nd), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(dd) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(dd) {
          const Jd = dd.replace(/\n/g, " | ");
          if (Jd.length <= Pd) return Jd;
          let kd = Pd - 3;
          const pd = Jd.charCodeAt(kd - 1);
          return pd >= 55296 && pd <= 56319 && kd--, `${Jd.slice(0,kd)}...`
        }(dd)) : this.dropped = !0)
      }
      Do() {
        this.deps.now() - this.lastDumpMs >= Cd && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Nd - 1e3) return;
        const dd = this.readDay(),
          Jd = [];
        let kd = 0,
          pd = null;
        for (const Nd of this.queue) {
          const Pd = od(Nd) + (Jd.length > 0 ? 1 : 0);
          if (kd + Pd > Wd) break;
          const Cd = gd + kd + Pd;
          if (this.pageBytes + Cd > Zd) {
            pd = "page";
            break
          }
          if (!this.dayFits(dd, Jd.length + 1, Cd)) {
            pd = "day";
            break
          }
          Jd.push(Nd), kd += Pd
        }
        null === pd && this.dropped && Jd.length === this.queue.length && (pd = "page"), this.queue.splice(0, Jd.length), Jd.length > 0 && !this.sendCharged(dd, Jd.join("\n"), Jd.length, "lines") || null !== pd && this.stopAt(pd, dd)
      }
      queueDumps() {
        for (const [dd, Jd] of this.deps.dumps()) {
          const kd = Jd.split("\n").slice(0, 20),
            pd = kd.join("\n");
          if (this.sentDumps.get(dd) !== pd) {
            this.sentDumps.set(dd, pd);
            for (const Jd of kd) this.add(`[dump:${dd}] ${Jd}`)
          }
        }
      }
      stopAt(dd, Jd) {
        this.stopped = !0, this.queue.length = 0;
        const kd = "page" === dd ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === dd) {
          if (Jd.capSent) return;
          Jd.capSent = !0
        } else if (!this.dayFits(Jd, 1, ld(kd))) return;
        this.sendCharged(Jd, kd, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(dd, Jd, kd) {
        return dd.lines + Jd <= this.claim.perClientLines && dd.bytes + kd <= this.dayBytes()
      }
      readDays() {
        var dd;
        return null !== (dd = this.deps.storage.getItem(pd)) && void 0 !== dd ? dd : {}
      }
      readDay() {
        const dd = new Date(this.deps.now()).toISOString().slice(0, 10),
          Jd = this.readDays()[this.claim.claimId];
        return (null === Jd || void 0 === Jd ? void 0 : Jd.day) === dd ? Jd : {
          day: dd,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(dd) {
        const Jd = Object.fromEntries(Object.entries(this.readDays()).filter((Jd => {
          let [, kd] = Jd;
          return kd.day === dd.day
        })));
        return Jd[this.claim.claimId] = dd, this.deps.storage.setItem(pd, Jd)
      }
      sendCharged(dd, Jd, kd, pd) {
        const Nd = ld(Jd);
        return dd.lines += kd, dd.bytes += Nd, this.writeDay(dd) ? (this.pageLines += kd, this.pageBytes += Nd, this.lastSentMs = this.deps.now(), this.deps.send(Jd, {
          diag_kind: pd
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);