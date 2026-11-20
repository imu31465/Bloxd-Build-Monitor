export const id = 30;
export const ids = [30];
export const modules = {
  36003: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      DUMP_GAP_MS: () => qU,
      DiagSink: () => jU,
      ITEM_GAP_MS: () => pU,
      ITEM_METADATA_BYTES: () => TU,
      MAX_MESSAGE_BYTES: () => EU
    });
    const tU = "bloxdDiagSinkDays",
      pU = 4e4,
      EU = 2048,
      PU = 262144,
      TU = 1500,
      qU = 6e5,
      KU = new TextEncoder;

    function cU(UU) {
      return KU.encode(UU).length
    }

    function GU(UU) {
      return TU + cU(UU)
    }
    class jU {
      constructor(UU, RU) {
        this.claim = UU, this.deps = RU, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = RU.now()
      }
      start() {
        setInterval((() => {
          this.HG()
        }), pU), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(UU) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(UU) {
          return UU.replace(/\n/g, " | ").slice(0, 400)
        }(UU)) : this.dropped = !0)
      }
      HG() {
        this.deps.now() - this.lastDumpMs >= qU && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < pU - 1e3) return;
        const UU = this.readDay(),
          RU = [];
        let gU = 0,
          tU = null;
        for (const pU of this.queue) {
          const qU = cU(pU) + (RU.length > 0 ? 1 : 0);
          if (gU + qU > EU) break;
          const KU = TU + gU + qU;
          if (this.pageBytes + KU > PU) {
            tU = "page";
            break
          }
          if (!this.dayFits(UU, RU.length + 1, KU)) {
            tU = "day";
            break
          }
          RU.push(pU), gU += qU
        }
        null === tU && this.dropped && RU.length === this.queue.length && (tU = "page"), this.queue.splice(0, RU.length), RU.length > 0 && !this.sendCharged(UU, RU.join("\n"), RU.length, "lines") || null !== tU && this.stopAt(tU, UU)
      }
      queueDumps() {
        for (const [UU, RU] of this.deps.dumps()) {
          const gU = RU.split("\n").slice(0, 20),
            tU = gU.join("\n");
          if (this.sentDumps.get(UU) !== tU) {
            this.sentDumps.set(UU, tU);
            for (const RU of gU) this.add(`[dump:${UU}] ${RU}`)
          }
        }
      }
      stopAt(UU, RU) {
        this.stopped = !0, this.queue.length = 0;
        const gU = "page" === UU ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === UU) {
          if (RU.capSent) return;
          RU.capSent = !0
        } else if (!this.dayFits(RU, 1, GU(gU))) return;
        this.sendCharged(RU, gU, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(UU, RU, gU) {
        return UU.lines + RU <= this.claim.perClientLines && UU.bytes + gU <= this.dayBytes()
      }
      readDays() {
        var UU;
        return null !== (UU = this.deps.storage.getItem(tU)) && void 0 !== UU ? UU : {}
      }
      readDay() {
        const UU = new Date(this.deps.now()).toISOString().slice(0, 10),
          RU = this.readDays()[this.claim.claimId];
        return (null === RU || void 0 === RU ? void 0 : RU.day) === UU ? RU : {
          day: UU,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(UU) {
        const RU = Object.fromEntries(Object.entries(this.readDays()).filter((RU => {
          let [, gU] = RU;
          return gU.day === UU.day
        })));
        return RU[this.claim.claimId] = UU, this.deps.storage.setItem(tU, RU)
      }
      sendCharged(UU, RU, gU, tU) {
        const pU = GU(RU);
        return UU.lines += gU, UU.bytes += pU, this.writeDay(UU) ? (this.pageLines += gU, this.pageBytes += pU, this.lastSentMs = this.deps.now(), this.deps.send(RU, {
          diag_kind: tU
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);