export const id = 30;
export const ids = [30];
export const modules = {
  36069: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      DUMP_GAP_MS: () => mQ,
      DiagSink: () => YQ,
      ITEM_GAP_MS: () => qQ,
      ITEM_METADATA_BYTES: () => vQ,
      MAX_LINE_CHARS: () => DQ,
      MAX_MESSAGE_BYTES: () => oQ
    });
    const LQ = "bloxdDiagSinkDays",
      qQ = 4e4,
      oQ = 2048,
      DQ = 400,
      kQ = 262144,
      vQ = 1500,
      mQ = 6e5,
      uQ = new TextEncoder;

    function HQ(QQ) {
      return uQ.encode(QQ).length
    }

    function bQ(QQ) {
      return vQ + HQ(QQ)
    }
    class YQ {
      constructor(QQ, FQ) {
        this.claim = QQ, this.deps = FQ, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = FQ.now()
      }
      start() {
        setInterval((() => {
          this.fH()
        }), qQ), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(QQ) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(QQ) {
          const FQ = QQ.replace(/\n/g, " | ");
          if (FQ.length <= DQ) return FQ;
          let wQ = DQ - 3;
          const LQ = FQ.charCodeAt(wQ - 1);
          return LQ >= 55296 && LQ <= 56319 && wQ--, `${FQ.slice(0,wQ)}...`
        }(QQ)) : this.dropped = !0)
      }
      fH() {
        this.deps.now() - this.lastDumpMs >= mQ && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < qQ - 1e3) return;
        const QQ = this.readDay(),
          FQ = [];
        let wQ = 0,
          LQ = null;
        for (const qQ of this.queue) {
          const DQ = HQ(qQ) + (FQ.length > 0 ? 1 : 0);
          if (wQ + DQ > oQ) break;
          const mQ = vQ + wQ + DQ;
          if (this.pageBytes + mQ > kQ) {
            LQ = "page";
            break
          }
          if (!this.dayFits(QQ, FQ.length + 1, mQ)) {
            LQ = "day";
            break
          }
          FQ.push(qQ), wQ += DQ
        }
        null === LQ && this.dropped && FQ.length === this.queue.length && (LQ = "page"), this.queue.splice(0, FQ.length), FQ.length > 0 && !this.sendCharged(QQ, FQ.join("\n"), FQ.length, "lines") || null !== LQ && this.stopAt(LQ, QQ)
      }
      queueDumps() {
        for (const [QQ, FQ] of this.deps.dumps()) {
          const wQ = FQ.split("\n").slice(0, 20),
            LQ = wQ.join("\n");
          if (this.sentDumps.get(QQ) !== LQ) {
            this.sentDumps.set(QQ, LQ);
            for (const FQ of wQ) this.add(`[dump:${QQ}] ${FQ}`)
          }
        }
      }
      stopAt(QQ, FQ) {
        this.stopped = !0, this.queue.length = 0;
        const wQ = "page" === QQ ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === QQ) {
          if (FQ.capSent) return;
          FQ.capSent = !0
        } else if (!this.dayFits(FQ, 1, bQ(wQ))) return;
        this.sendCharged(FQ, wQ, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(QQ, FQ, wQ) {
        return QQ.lines + FQ <= this.claim.perClientLines && QQ.bytes + wQ <= this.dayBytes()
      }
      readDays() {
        var QQ;
        return null !== (QQ = this.deps.storage.getItem(LQ)) && void 0 !== QQ ? QQ : {}
      }
      readDay() {
        const QQ = new Date(this.deps.now()).toISOString().slice(0, 10),
          FQ = this.readDays()[this.claim.claimId];
        return (null === FQ || void 0 === FQ ? void 0 : FQ.day) === QQ ? FQ : {
          day: QQ,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(QQ) {
        const FQ = Object.fromEntries(Object.entries(this.readDays()).filter((FQ => {
          let [, wQ] = FQ;
          return wQ.day === QQ.day
        })));
        return FQ[this.claim.claimId] = QQ, this.deps.storage.setItem(LQ, FQ)
      }
      sendCharged(QQ, FQ, wQ, LQ) {
        const qQ = bQ(FQ);
        return QQ.lines += wQ, QQ.bytes += qQ, this.writeDay(QQ) ? (this.pageLines += wQ, this.pageBytes += qQ, this.lastSentMs = this.deps.now(), this.deps.send(FQ, {
          diag_kind: LQ
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);