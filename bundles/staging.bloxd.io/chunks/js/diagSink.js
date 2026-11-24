export const id = 30;
export const ids = [30];
export const modules = {
  36499: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      DUMP_GAP_MS: () => kT,
      DiagSink: () => pT,
      ITEM_GAP_MS: () => zT,
      ITEM_METADATA_BYTES: () => HT,
      MAX_LINE_CHARS: () => gT,
      MAX_MESSAGE_BYTES: () => MT
    });
    const WT = "bloxdDiagSinkDays",
      zT = 4e4,
      MT = 2048,
      gT = 400,
      nT = 262144,
      HT = 1500,
      kT = 6e5,
      jT = new TextEncoder;

    function lT(TT) {
      return jT.encode(TT).length
    }

    function LT(TT) {
      return HT + lT(TT)
    }
    class pT {
      constructor(TT, UT) {
        this.claim = TT, this.deps = UT, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = UT.now()
      }
      start() {
        setInterval((() => {
          this.Cl()
        }), zT), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(TT) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(TT) {
          const UT = TT.replace(/\n/g, " | ");
          if (UT.length <= gT) return UT;
          let mT = gT - 3;
          const WT = UT.charCodeAt(mT - 1);
          return WT >= 55296 && WT <= 56319 && mT--, `${UT.slice(0,mT)}...`
        }(TT)) : this.dropped = !0)
      }
      Cl() {
        this.deps.now() - this.lastDumpMs >= kT && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < zT - 1e3) return;
        const TT = this.readDay(),
          UT = [];
        let mT = 0,
          WT = null;
        for (const zT of this.queue) {
          const gT = lT(zT) + (UT.length > 0 ? 1 : 0);
          if (mT + gT > MT) break;
          const kT = HT + mT + gT;
          if (this.pageBytes + kT > nT) {
            WT = "page";
            break
          }
          if (!this.dayFits(TT, UT.length + 1, kT)) {
            WT = "day";
            break
          }
          UT.push(zT), mT += gT
        }
        null === WT && this.dropped && UT.length === this.queue.length && (WT = "page"), this.queue.splice(0, UT.length), UT.length > 0 && !this.sendCharged(TT, UT.join("\n"), UT.length, "lines") || null !== WT && this.stopAt(WT, TT)
      }
      queueDumps() {
        for (const [TT, UT] of this.deps.dumps()) {
          const mT = UT.split("\n").slice(0, 20),
            WT = mT.join("\n");
          if (this.sentDumps.get(TT) !== WT) {
            this.sentDumps.set(TT, WT);
            for (const UT of mT) this.add(`[dump:${TT}] ${UT}`)
          }
        }
      }
      stopAt(TT, UT) {
        this.stopped = !0, this.queue.length = 0;
        const mT = "page" === TT ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === TT) {
          if (UT.capSent) return;
          UT.capSent = !0
        } else if (!this.dayFits(UT, 1, LT(mT))) return;
        this.sendCharged(UT, mT, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(TT, UT, mT) {
        return TT.lines + UT <= this.claim.perClientLines && TT.bytes + mT <= this.dayBytes()
      }
      readDays() {
        var TT;
        return null !== (TT = this.deps.storage.getItem(WT)) && void 0 !== TT ? TT : {}
      }
      readDay() {
        const TT = new Date(this.deps.now()).toISOString().slice(0, 10),
          UT = this.readDays()[this.claim.claimId];
        return (null === UT || void 0 === UT ? void 0 : UT.day) === TT ? UT : {
          day: TT,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(TT) {
        const UT = Object.fromEntries(Object.entries(this.readDays()).filter((UT => {
          let [, mT] = UT;
          return mT.day === TT.day
        })));
        return UT[this.claim.claimId] = TT, this.deps.storage.setItem(WT, UT)
      }
      sendCharged(TT, UT, mT, WT) {
        const zT = LT(UT);
        return TT.lines += mT, TT.bytes += zT, this.writeDay(TT) ? (this.pageLines += mT, this.pageBytes += zT, this.lastSentMs = this.deps.now(), this.deps.send(UT, {
          diag_kind: WT
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);