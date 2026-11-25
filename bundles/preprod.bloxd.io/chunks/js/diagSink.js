export const id = 31;
export const ids = [31];
export const modules = {
  36735: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      DUMP_GAP_MS: () => PQ,
      DiagSink: () => IQ,
      ITEM_GAP_MS: () => qQ,
      ITEM_METADATA_BYTES: () => FQ,
      MAX_LINE_CHARS: () => zQ,
      MAX_MESSAGE_BYTES: () => TQ
    });
    const wQ = "bloxdDiagSinkDays",
      qQ = 4e4,
      TQ = 2048,
      zQ = 400,
      sQ = 262144,
      FQ = 1500,
      PQ = 6e5,
      gQ = new TextEncoder;

    function JQ(QQ) {
      return gQ.encode(QQ).length
    }

    function rQ(QQ) {
      return FQ + JQ(QQ)
    }
    class IQ {
      constructor(QQ, WQ) {
        this.claim = QQ, this.deps = WQ, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = WQ.now()
      }
      start() {
        setInterval((() => {
          this.fJ()
        }), qQ), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(QQ) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(QQ) {
          const WQ = QQ.replace(/\n/g, " | ");
          if (WQ.length <= zQ) return WQ;
          let XQ = zQ - 3;
          const wQ = WQ.charCodeAt(XQ - 1);
          return wQ >= 55296 && wQ <= 56319 && XQ--, `${WQ.slice(0,XQ)}...`
        }(QQ)) : this.dropped = !0)
      }
      fJ() {
        this.deps.now() - this.lastDumpMs >= PQ && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < qQ - 1e3) return;
        const QQ = this.readDay(),
          WQ = [];
        let XQ = 0,
          wQ = null;
        for (const qQ of this.queue) {
          const zQ = JQ(qQ) + (WQ.length > 0 ? 1 : 0);
          if (XQ + zQ > TQ) break;
          const PQ = FQ + XQ + zQ;
          if (this.pageBytes + PQ > sQ) {
            wQ = "page";
            break
          }
          if (!this.dayFits(QQ, WQ.length + 1, PQ)) {
            wQ = "day";
            break
          }
          WQ.push(qQ), XQ += zQ
        }
        null === wQ && this.dropped && WQ.length === this.queue.length && (wQ = "page"), this.queue.splice(0, WQ.length), WQ.length > 0 && !this.sendCharged(QQ, WQ.join("\n"), WQ.length, "lines") || null !== wQ && this.stopAt(wQ, QQ)
      }
      queueDumps() {
        for (const [QQ, WQ] of this.deps.dumps()) {
          const XQ = WQ.split("\n").slice(0, 20),
            wQ = XQ.join("\n");
          if (this.sentDumps.get(QQ) !== wQ) {
            this.sentDumps.set(QQ, wQ);
            for (const WQ of XQ) this.add(`[dump:${QQ}] ${WQ}`)
          }
        }
      }
      stopAt(QQ, WQ) {
        this.stopped = !0, this.queue.length = 0;
        const XQ = "page" === QQ ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === QQ) {
          if (WQ.capSent) return;
          WQ.capSent = !0
        } else if (!this.dayFits(WQ, 1, rQ(XQ))) return;
        this.sendCharged(WQ, XQ, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(QQ, WQ, XQ) {
        return QQ.lines + WQ <= this.claim.perClientLines && QQ.bytes + XQ <= this.dayBytes()
      }
      readDays() {
        var QQ;
        return null !== (QQ = this.deps.storage.getItem(wQ)) && void 0 !== QQ ? QQ : {}
      }
      readDay() {
        const QQ = new Date(this.deps.now()).toISOString().slice(0, 10),
          WQ = this.readDays()[this.claim.claimId];
        return (null === WQ || void 0 === WQ ? void 0 : WQ.day) === QQ ? WQ : {
          day: QQ,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(QQ) {
        const WQ = Object.fromEntries(Object.entries(this.readDays()).filter((WQ => {
          let [, XQ] = WQ;
          return XQ.day === QQ.day
        })));
        return WQ[this.claim.claimId] = QQ, this.deps.storage.setItem(wQ, WQ)
      }
      sendCharged(QQ, WQ, XQ, wQ) {
        const qQ = rQ(WQ);
        return QQ.lines += XQ, QQ.bytes += qQ, this.writeDay(QQ) ? (this.pageLines += XQ, this.pageBytes += qQ, this.lastSentMs = this.deps.now(), this.deps.send(WQ, {
          diag_kind: wQ
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);