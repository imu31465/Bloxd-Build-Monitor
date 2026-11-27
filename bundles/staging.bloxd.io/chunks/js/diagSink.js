export const id = 37;
export const ids = [37];
export const modules = {
  37677: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      DUMP_GAP_MS: () => wW,
      DiagSink: () => lW,
      ITEM_GAP_MS: () => EW,
      ITEM_METADATA_BYTES: () => cW,
      MAX_LINE_CHARS: () => PW,
      MAX_MESSAGE_BYTES: () => NW
    });
    const mW = "bloxdDiagSinkDays",
      EW = 4e4,
      NW = 2048,
      PW = 400,
      LW = 262144,
      cW = 1500,
      wW = 6e5,
      tW = new TextEncoder;

    function ZW(WW) {
      return tW.encode(WW).length
    }

    function xW(WW) {
      return cW + ZW(WW)
    }
    class lW {
      constructor(WW, iW) {
        this.claim = WW, this.deps = iW, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = iW.now()
      }
      start() {
        setInterval((() => {
          this.hZ()
        }), EW), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(WW) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(WW) {
          const iW = WW.replace(/\n/g, " | ");
          if (iW.length <= PW) return iW;
          let OW = PW - 3;
          const mW = iW.charCodeAt(OW - 1);
          return mW >= 55296 && mW <= 56319 && OW--, `${iW.slice(0,OW)}...`
        }(WW)) : this.dropped = !0)
      }
      hZ() {
        this.deps.now() - this.lastDumpMs >= wW && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < EW - 1e3) return;
        const WW = this.readDay(),
          iW = [];
        let OW = 0,
          mW = null;
        for (const EW of this.queue) {
          const PW = ZW(EW) + (iW.length > 0 ? 1 : 0);
          if (OW + PW > NW) break;
          const wW = cW + OW + PW;
          if (this.pageBytes + wW > LW) {
            mW = "page";
            break
          }
          if (!this.dayFits(WW, iW.length + 1, wW)) {
            mW = "day";
            break
          }
          iW.push(EW), OW += PW
        }
        null === mW && this.dropped && iW.length === this.queue.length && (mW = "page"), this.queue.splice(0, iW.length), iW.length > 0 && !this.sendCharged(WW, iW.join("\n"), iW.length, "lines") || null !== mW && this.stopAt(mW, WW)
      }
      queueDumps() {
        for (const [WW, iW] of this.deps.dumps()) {
          const OW = iW.split("\n").slice(0, 20),
            mW = OW.join("\n");
          if (this.sentDumps.get(WW) !== mW) {
            this.sentDumps.set(WW, mW);
            for (const iW of OW) this.add(`[dump:${WW}] ${iW}`)
          }
        }
      }
      stopAt(WW, iW) {
        this.stopped = !0, this.queue.length = 0;
        const OW = "page" === WW ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === WW) {
          if (iW.capSent) return;
          iW.capSent = !0
        } else if (!this.dayFits(iW, 1, xW(OW))) return;
        this.sendCharged(iW, OW, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(WW, iW, OW) {
        return WW.lines + iW <= this.claim.perClientLines && WW.bytes + OW <= this.dayBytes()
      }
      readDays() {
        var WW;
        return null !== (WW = this.deps.storage.getItem(mW)) && void 0 !== WW ? WW : {}
      }
      readDay() {
        const WW = new Date(this.deps.now()).toISOString().slice(0, 10),
          iW = this.readDays()[this.claim.claimId];
        return (null === iW || void 0 === iW ? void 0 : iW.day) === WW ? iW : {
          day: WW,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(WW) {
        const iW = Object.fromEntries(Object.entries(this.readDays()).filter((iW => {
          let [, OW] = iW;
          return OW.day === WW.day
        })));
        return iW[this.claim.claimId] = WW, this.deps.storage.setItem(mW, iW)
      }
      sendCharged(WW, iW, OW, mW) {
        const EW = xW(iW);
        return WW.lines += OW, WW.bytes += EW, this.writeDay(WW) ? (this.pageLines += OW, this.pageBytes += EW, this.lastSentMs = this.deps.now(), this.deps.send(iW, {
          diag_kind: mW
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);