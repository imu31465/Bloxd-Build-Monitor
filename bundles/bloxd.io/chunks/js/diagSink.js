export const id = 30;
export const ids = [30];
export const modules = {
  36229: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      DUMP_GAP_MS: () => xT,
      DiagSink: () => jT,
      ITEM_GAP_MS: () => MT,
      ITEM_METADATA_BYTES: () => fT,
      MAX_LINE_CHARS: () => OT,
      MAX_MESSAGE_BYTES: () => KT
    });
    const lT = "bloxdDiagSinkDays",
      MT = 4e4,
      KT = 2048,
      OT = 400,
      yT = 262144,
      fT = 1500,
      xT = 6e5,
      IT = new TextEncoder;

    function AT(TT) {
      return IT.encode(TT).length
    }

    function CT(TT) {
      return fT + AT(TT)
    }
    class jT {
      constructor(TT, kT) {
        this.claim = TT, this.deps = kT, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = kT.now()
      }
      start() {
        setInterval((() => {
          this.UA()
        }), MT), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(TT) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(TT) {
          const kT = TT.replace(/\n/g, " | ");
          if (kT.length <= OT) return kT;
          let cT = OT - 3;
          const lT = kT.charCodeAt(cT - 1);
          return lT >= 55296 && lT <= 56319 && cT--, `${kT.slice(0,cT)}...`
        }(TT)) : this.dropped = !0)
      }
      UA() {
        this.deps.now() - this.lastDumpMs >= xT && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < MT - 1e3) return;
        const TT = this.readDay(),
          kT = [];
        let cT = 0,
          lT = null;
        for (const MT of this.queue) {
          const OT = AT(MT) + (kT.length > 0 ? 1 : 0);
          if (cT + OT > KT) break;
          const xT = fT + cT + OT;
          if (this.pageBytes + xT > yT) {
            lT = "page";
            break
          }
          if (!this.dayFits(TT, kT.length + 1, xT)) {
            lT = "day";
            break
          }
          kT.push(MT), cT += OT
        }
        null === lT && this.dropped && kT.length === this.queue.length && (lT = "page"), this.queue.splice(0, kT.length), kT.length > 0 && !this.sendCharged(TT, kT.join("\n"), kT.length, "lines") || null !== lT && this.stopAt(lT, TT)
      }
      queueDumps() {
        for (const [TT, kT] of this.deps.dumps()) {
          const cT = kT.split("\n").slice(0, 20),
            lT = cT.join("\n");
          if (this.sentDumps.get(TT) !== lT) {
            this.sentDumps.set(TT, lT);
            for (const kT of cT) this.add(`[dump:${TT}] ${kT}`)
          }
        }
      }
      stopAt(TT, kT) {
        this.stopped = !0, this.queue.length = 0;
        const cT = "page" === TT ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === TT) {
          if (kT.capSent) return;
          kT.capSent = !0
        } else if (!this.dayFits(kT, 1, CT(cT))) return;
        this.sendCharged(kT, cT, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(TT, kT, cT) {
        return TT.lines + kT <= this.claim.perClientLines && TT.bytes + cT <= this.dayBytes()
      }
      readDays() {
        var TT;
        return null !== (TT = this.deps.storage.getItem(lT)) && void 0 !== TT ? TT : {}
      }
      readDay() {
        const TT = new Date(this.deps.now()).toISOString().slice(0, 10),
          kT = this.readDays()[this.claim.claimId];
        return (null === kT || void 0 === kT ? void 0 : kT.day) === TT ? kT : {
          day: TT,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(TT) {
        const kT = Object.fromEntries(Object.entries(this.readDays()).filter((kT => {
          let [, cT] = kT;
          return cT.day === TT.day
        })));
        return kT[this.claim.claimId] = TT, this.deps.storage.setItem(lT, kT)
      }
      sendCharged(TT, kT, cT, lT) {
        const MT = CT(kT);
        return TT.lines += cT, TT.bytes += MT, this.writeDay(TT) ? (this.pageLines += cT, this.pageBytes += MT, this.lastSentMs = this.deps.now(), this.deps.send(kT, {
          diag_kind: lT
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);