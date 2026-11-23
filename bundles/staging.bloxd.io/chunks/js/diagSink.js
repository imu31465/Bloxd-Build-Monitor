export const id = 30;
export const ids = [30];
export const modules = {
  36309: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      DUMP_GAP_MS: () => qC,
      DiagSink: () => MC,
      ITEM_GAP_MS: () => wC,
      ITEM_METADATA_BYTES: () => oC,
      MAX_LINE_CHARS: () => nC,
      MAX_MESSAGE_BYTES: () => bC
    });
    const QC = "bloxdDiagSinkDays",
      wC = 4e4,
      bC = 2048,
      nC = 400,
      fC = 262144,
      oC = 1500,
      qC = 6e5,
      FC = new TextEncoder;

    function WC(CC) {
      return FC.encode(CC).length
    }

    function NC(CC) {
      return oC + WC(CC)
    }
    class MC {
      constructor(CC, zC) {
        this.claim = CC, this.deps = zC, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = zC.now()
      }
      start() {
        setInterval((() => {
          this.ZN()
        }), wC), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(CC) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(CC) {
          const zC = CC.replace(/\n/g, " | ");
          if (zC.length <= nC) return zC;
          let ZC = nC - 3;
          const QC = zC.charCodeAt(ZC - 1);
          return QC >= 55296 && QC <= 56319 && ZC--, `${zC.slice(0,ZC)}...`
        }(CC)) : this.dropped = !0)
      }
      ZN() {
        this.deps.now() - this.lastDumpMs >= qC && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < wC - 1e3) return;
        const CC = this.readDay(),
          zC = [];
        let ZC = 0,
          QC = null;
        for (const wC of this.queue) {
          const nC = WC(wC) + (zC.length > 0 ? 1 : 0);
          if (ZC + nC > bC) break;
          const qC = oC + ZC + nC;
          if (this.pageBytes + qC > fC) {
            QC = "page";
            break
          }
          if (!this.dayFits(CC, zC.length + 1, qC)) {
            QC = "day";
            break
          }
          zC.push(wC), ZC += nC
        }
        null === QC && this.dropped && zC.length === this.queue.length && (QC = "page"), this.queue.splice(0, zC.length), zC.length > 0 && !this.sendCharged(CC, zC.join("\n"), zC.length, "lines") || null !== QC && this.stopAt(QC, CC)
      }
      queueDumps() {
        for (const [CC, zC] of this.deps.dumps()) {
          const ZC = zC.split("\n").slice(0, 20),
            QC = ZC.join("\n");
          if (this.sentDumps.get(CC) !== QC) {
            this.sentDumps.set(CC, QC);
            for (const zC of ZC) this.add(`[dump:${CC}] ${zC}`)
          }
        }
      }
      stopAt(CC, zC) {
        this.stopped = !0, this.queue.length = 0;
        const ZC = "page" === CC ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === CC) {
          if (zC.capSent) return;
          zC.capSent = !0
        } else if (!this.dayFits(zC, 1, NC(ZC))) return;
        this.sendCharged(zC, ZC, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(CC, zC, ZC) {
        return CC.lines + zC <= this.claim.perClientLines && CC.bytes + ZC <= this.dayBytes()
      }
      readDays() {
        var CC;
        return null !== (CC = this.deps.storage.getItem(QC)) && void 0 !== CC ? CC : {}
      }
      readDay() {
        const CC = new Date(this.deps.now()).toISOString().slice(0, 10),
          zC = this.readDays()[this.claim.claimId];
        return (null === zC || void 0 === zC ? void 0 : zC.day) === CC ? zC : {
          day: CC,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(CC) {
        const zC = Object.fromEntries(Object.entries(this.readDays()).filter((zC => {
          let [, ZC] = zC;
          return ZC.day === CC.day
        })));
        return zC[this.claim.claimId] = CC, this.deps.storage.setItem(QC, zC)
      }
      sendCharged(CC, zC, ZC, QC) {
        const wC = NC(zC);
        return CC.lines += ZC, CC.bytes += wC, this.writeDay(CC) ? (this.pageLines += ZC, this.pageBytes += wC, this.lastSentMs = this.deps.now(), this.deps.send(zC, {
          diag_kind: QC
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);