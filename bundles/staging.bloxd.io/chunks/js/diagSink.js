export const id = 30;
export const ids = [30];
export const modules = {
  35429: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      DUMP_GAP_MS: () => BT,
      DiagSink: () => LT,
      ITEM_GAP_MS: () => zT,
      ITEM_METADATA_BYTES: () => XT,
      MAX_MESSAGE_BYTES: () => kT
    });
    const iT = "bloxdDiagSinkDays",
      zT = 4e4,
      kT = 2048,
      WT = 262144,
      XT = 1500,
      BT = 6e5,
      FT = new TextEncoder;

    function ST(TT) {
      return FT.encode(TT).length
    }

    function DT(TT) {
      return XT + ST(TT)
    }
    class LT {
      constructor(TT, oT) {
        this.claim = TT, this.deps = oT, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = oT.now()
      }
      start() {
        setInterval((() => {
          this.dD()
        }), zT), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(TT) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(TT) {
          return TT.replace(/\n/g, " | ").slice(0, 400)
        }(TT)) : this.dropped = !0)
      }
      dD() {
        this.deps.now() - this.lastDumpMs >= BT && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < zT - 1e3) return;
        const TT = this.readDay(),
          oT = [];
        let IT = 0,
          iT = null;
        for (const zT of this.queue) {
          const BT = ST(zT) + (oT.length > 0 ? 1 : 0);
          if (IT + BT > kT) break;
          const FT = XT + IT + BT;
          if (this.pageBytes + FT > WT) {
            iT = "page";
            break
          }
          if (!this.dayFits(TT, oT.length + 1, FT)) {
            iT = "day";
            break
          }
          oT.push(zT), IT += BT
        }
        null === iT && this.dropped && oT.length === this.queue.length && (iT = "page"), this.queue.splice(0, oT.length), oT.length > 0 && !this.sendCharged(TT, oT.join("\n"), oT.length, "lines") || null !== iT && this.stopAt(iT, TT)
      }
      queueDumps() {
        for (const [TT, oT] of this.deps.dumps()) {
          const IT = oT.split("\n").slice(0, 20),
            iT = IT.join("\n");
          if (this.sentDumps.get(TT) !== iT) {
            this.sentDumps.set(TT, iT);
            for (const oT of IT) this.add(`[dump:${TT}] ${oT}`)
          }
        }
      }
      stopAt(TT, oT) {
        this.stopped = !0, this.queue.length = 0;
        const IT = "page" === TT ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === TT) {
          if (oT.capSent) return;
          oT.capSent = !0
        } else if (!this.dayFits(oT, 1, DT(IT))) return;
        this.sendCharged(oT, IT, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(TT, oT, IT) {
        return TT.lines + oT <= this.claim.perClientLines && TT.bytes + IT <= this.dayBytes()
      }
      readDays() {
        var TT;
        return null !== (TT = this.deps.storage.getItem(iT)) && void 0 !== TT ? TT : {}
      }
      readDay() {
        const TT = new Date(this.deps.now()).toISOString().slice(0, 10),
          oT = this.readDays()[this.claim.claimId];
        return (null === oT || void 0 === oT ? void 0 : oT.day) === TT ? oT : {
          day: TT,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(TT) {
        const oT = Object.fromEntries(Object.entries(this.readDays()).filter((oT => {
          let [, IT] = oT;
          return IT.day === TT.day
        })));
        return oT[this.claim.claimId] = TT, this.deps.storage.setItem(iT, oT)
      }
      sendCharged(TT, oT, IT, iT) {
        const zT = DT(oT);
        return TT.lines += IT, TT.bytes += zT, this.writeDay(TT) ? (this.pageLines += IT, this.pageBytes += zT, this.lastSentMs = this.deps.now(), this.deps.send(oT, {
          diag_kind: iT
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);