export const id = 30;
export const ids = [30];
export const modules = {
  36671: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      DUMP_GAP_MS: () => Ht,
      DiagSink: () => Et,
      ITEM_GAP_MS: () => qt,
      ITEM_METADATA_BYTES: () => jt,
      MAX_LINE_CHARS: () => mt,
      MAX_MESSAGE_BYTES: () => Dt
    });
    const Ot = "bloxdDiagSinkDays",
      qt = 4e4,
      Dt = 2048,
      mt = 400,
      dt = 262144,
      jt = 1500,
      Ht = 6e5,
      Xt = new TextEncoder;

    function Qt(tt) {
      return Xt.encode(tt).length
    }

    function lt(tt) {
      return jt + Qt(tt)
    }
    class Et {
      constructor(tt, et) {
        this.claim = tt, this.deps = et, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = et.now()
      }
      start() {
        setInterval((() => {
          this.BQ()
        }), qt), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(tt) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(tt) {
          const et = tt.replace(/\n/g, " | ");
          if (et.length <= mt) return et;
          let Vt = mt - 3;
          const Ot = et.charCodeAt(Vt - 1);
          return Ot >= 55296 && Ot <= 56319 && Vt--, `${et.slice(0,Vt)}...`
        }(tt)) : this.dropped = !0)
      }
      BQ() {
        this.deps.now() - this.lastDumpMs >= Ht && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < qt - 1e3) return;
        const tt = this.readDay(),
          et = [];
        let Vt = 0,
          Ot = null;
        for (const qt of this.queue) {
          const mt = Qt(qt) + (et.length > 0 ? 1 : 0);
          if (Vt + mt > Dt) break;
          const Ht = jt + Vt + mt;
          if (this.pageBytes + Ht > dt) {
            Ot = "page";
            break
          }
          if (!this.dayFits(tt, et.length + 1, Ht)) {
            Ot = "day";
            break
          }
          et.push(qt), Vt += mt
        }
        null === Ot && this.dropped && et.length === this.queue.length && (Ot = "page"), this.queue.splice(0, et.length), et.length > 0 && !this.sendCharged(tt, et.join("\n"), et.length, "lines") || null !== Ot && this.stopAt(Ot, tt)
      }
      queueDumps() {
        for (const [tt, et] of this.deps.dumps()) {
          const Vt = et.split("\n").slice(0, 20),
            Ot = Vt.join("\n");
          if (this.sentDumps.get(tt) !== Ot) {
            this.sentDumps.set(tt, Ot);
            for (const et of Vt) this.add(`[dump:${tt}] ${et}`)
          }
        }
      }
      stopAt(tt, et) {
        this.stopped = !0, this.queue.length = 0;
        const Vt = "page" === tt ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === tt) {
          if (et.capSent) return;
          et.capSent = !0
        } else if (!this.dayFits(et, 1, lt(Vt))) return;
        this.sendCharged(et, Vt, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(tt, et, Vt) {
        return tt.lines + et <= this.claim.perClientLines && tt.bytes + Vt <= this.dayBytes()
      }
      readDays() {
        var tt;
        return null !== (tt = this.deps.storage.getItem(Ot)) && void 0 !== tt ? tt : {}
      }
      readDay() {
        const tt = new Date(this.deps.now()).toISOString().slice(0, 10),
          et = this.readDays()[this.claim.claimId];
        return (null === et || void 0 === et ? void 0 : et.day) === tt ? et : {
          day: tt,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(tt) {
        const et = Object.fromEntries(Object.entries(this.readDays()).filter((et => {
          let [, Vt] = et;
          return Vt.day === tt.day
        })));
        return et[this.claim.claimId] = tt, this.deps.storage.setItem(Ot, et)
      }
      sendCharged(tt, et, Vt, Ot) {
        const qt = lt(et);
        return tt.lines += Vt, tt.bytes += qt, this.writeDay(tt) ? (this.pageLines += Vt, this.pageBytes += qt, this.lastSentMs = this.deps.now(), this.deps.send(et, {
          diag_kind: Ot
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);