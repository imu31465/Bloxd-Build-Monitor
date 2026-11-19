export const id = 30;
export const ids = [30];
export const modules = {
  35850: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      DUMP_GAP_MS: () => QD,
      DiagSink: () => yD,
      ITEM_GAP_MS: () => pD,
      ITEM_METADATA_BYTES: () => bD,
      MAX_MESSAGE_BYTES: () => iD
    });
    const ID = "bloxdDiagSinkDays",
      pD = 4e4,
      iD = 2048,
      fD = 262144,
      bD = 1500,
      QD = 6e5,
      wD = new TextEncoder;

    function SD(DD) {
      return wD.encode(DD).length
    }

    function BD(DD) {
      return bD + SD(DD)
    }
    class yD {
      constructor(DD, CD) {
        this.claim = DD, this.deps = CD, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = CD.now()
      }
      start() {
        setInterval((() => {
          this.wy()
        }), pD), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(DD) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(DD) {
          return DD.replace(/\n/g, " | ").slice(0, 400)
        }(DD)) : this.dropped = !0)
      }
      wy() {
        this.deps.now() - this.lastDumpMs >= QD && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < pD - 1e3) return;
        const DD = this.readDay(),
          CD = [];
        let cD = 0,
          ID = null;
        for (const pD of this.queue) {
          const QD = SD(pD) + (CD.length > 0 ? 1 : 0);
          if (cD + QD > iD) break;
          const wD = bD + cD + QD;
          if (this.pageBytes + wD > fD) {
            ID = "page";
            break
          }
          if (!this.dayFits(DD, CD.length + 1, wD)) {
            ID = "day";
            break
          }
          CD.push(pD), cD += QD
        }
        null === ID && this.dropped && CD.length === this.queue.length && (ID = "page"), this.queue.splice(0, CD.length), CD.length > 0 && !this.sendCharged(DD, CD.join("\n"), CD.length, "lines") || null !== ID && this.stopAt(ID, DD)
      }
      queueDumps() {
        for (const [DD, CD] of this.deps.dumps()) {
          const cD = CD.split("\n").slice(0, 20),
            ID = cD.join("\n");
          if (this.sentDumps.get(DD) !== ID) {
            this.sentDumps.set(DD, ID);
            for (const CD of cD) this.add(`[dump:${DD}] ${CD}`)
          }
        }
      }
      stopAt(DD, CD) {
        this.stopped = !0, this.queue.length = 0;
        const cD = "page" === DD ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === DD) {
          if (CD.capSent) return;
          CD.capSent = !0
        } else if (!this.dayFits(CD, 1, BD(cD))) return;
        this.sendCharged(CD, cD, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(DD, CD, cD) {
        return DD.lines + CD <= this.claim.perClientLines && DD.bytes + cD <= this.dayBytes()
      }
      readDays() {
        var DD;
        return null !== (DD = this.deps.storage.getItem(ID)) && void 0 !== DD ? DD : {}
      }
      readDay() {
        const DD = new Date(this.deps.now()).toISOString().slice(0, 10),
          CD = this.readDays()[this.claim.claimId];
        return (null === CD || void 0 === CD ? void 0 : CD.day) === DD ? CD : {
          day: DD,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(DD) {
        const CD = Object.fromEntries(Object.entries(this.readDays()).filter((CD => {
          let [, cD] = CD;
          return cD.day === DD.day
        })));
        return CD[this.claim.claimId] = DD, this.deps.storage.setItem(ID, CD)
      }
      sendCharged(DD, CD, cD, ID) {
        const pD = BD(CD);
        return DD.lines += cD, DD.bytes += pD, this.writeDay(DD) ? (this.pageLines += cD, this.pageBytes += pD, this.lastSentMs = this.deps.now(), this.deps.send(CD, {
          diag_kind: ID
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);