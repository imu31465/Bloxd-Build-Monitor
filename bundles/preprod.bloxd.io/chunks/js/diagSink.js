export const id = 35;
export const ids = [35];
export const modules = {
  37378: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      DUMP_GAP_MS: () => QM,
      DiagSink: () => HM,
      ITEM_GAP_MS: () => SM,
      ITEM_METADATA_BYTES: () => nM,
      MAX_LINE_CHARS: () => aM,
      MAX_MESSAGE_BYTES: () => jM
    });
    const OM = "bloxdDiagSinkDays",
      SM = 4e4,
      jM = 2048,
      aM = 400,
      PM = 262144,
      nM = 1500,
      QM = 6e5,
      zM = new TextEncoder;

    function LM(MM) {
      return zM.encode(MM).length
    }

    function mM(MM) {
      return nM + LM(MM)
    }
    class HM {
      constructor(MM, rM) {
        this.claim = MM, this.deps = rM, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = rM.now()
      }
      start() {
        setInterval((() => {
          this.bL()
        }), SM), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(MM) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(MM) {
          const rM = MM.replace(/\n/g, " | ");
          if (rM.length <= aM) return rM;
          let iM = aM - 3;
          const OM = rM.charCodeAt(iM - 1);
          return OM >= 55296 && OM <= 56319 && iM--, `${rM.slice(0,iM)}...`
        }(MM)) : this.dropped = !0)
      }
      bL() {
        this.deps.now() - this.lastDumpMs >= QM && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < SM - 1e3) return;
        const MM = this.readDay(),
          rM = [];
        let iM = 0,
          OM = null;
        for (const SM of this.queue) {
          const aM = LM(SM) + (rM.length > 0 ? 1 : 0);
          if (iM + aM > jM) break;
          const QM = nM + iM + aM;
          if (this.pageBytes + QM > PM) {
            OM = "page";
            break
          }
          if (!this.dayFits(MM, rM.length + 1, QM)) {
            OM = "day";
            break
          }
          rM.push(SM), iM += aM
        }
        null === OM && this.dropped && rM.length === this.queue.length && (OM = "page"), this.queue.splice(0, rM.length), rM.length > 0 && !this.sendCharged(MM, rM.join("\n"), rM.length, "lines") || null !== OM && this.stopAt(OM, MM)
      }
      queueDumps() {
        for (const [MM, rM] of this.deps.dumps()) {
          const iM = rM.split("\n").slice(0, 20),
            OM = iM.join("\n");
          if (this.sentDumps.get(MM) !== OM) {
            this.sentDumps.set(MM, OM);
            for (const rM of iM) this.add(`[dump:${MM}] ${rM}`)
          }
        }
      }
      stopAt(MM, rM) {
        this.stopped = !0, this.queue.length = 0;
        const iM = "page" === MM ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === MM) {
          if (rM.capSent) return;
          rM.capSent = !0
        } else if (!this.dayFits(rM, 1, mM(iM))) return;
        this.sendCharged(rM, iM, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(MM, rM, iM) {
        return MM.lines + rM <= this.claim.perClientLines && MM.bytes + iM <= this.dayBytes()
      }
      readDays() {
        var MM;
        return null !== (MM = this.deps.storage.getItem(OM)) && void 0 !== MM ? MM : {}
      }
      readDay() {
        const MM = new Date(this.deps.now()).toISOString().slice(0, 10),
          rM = this.readDays()[this.claim.claimId];
        return (null === rM || void 0 === rM ? void 0 : rM.day) === MM ? rM : {
          day: MM,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(MM) {
        const rM = Object.fromEntries(Object.entries(this.readDays()).filter((rM => {
          let [, iM] = rM;
          return iM.day === MM.day
        })));
        return rM[this.claim.claimId] = MM, this.deps.storage.setItem(OM, rM)
      }
      sendCharged(MM, rM, iM, OM) {
        const SM = mM(rM);
        return MM.lines += iM, MM.bytes += SM, this.writeDay(MM) ? (this.pageLines += iM, this.pageBytes += SM, this.lastSentMs = this.deps.now(), this.deps.send(rM, {
          diag_kind: OM
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);