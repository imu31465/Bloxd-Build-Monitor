export const id = 35;
export const ids = [35];
export const modules = {
  37579: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      DUMP_GAP_MS: () => nV,
      DiagSink: () => rV,
      ITEM_GAP_MS: () => YV,
      ITEM_METADATA_BYTES: () => QV,
      MAX_LINE_CHARS: () => yV,
      MAX_MESSAGE_BYTES: () => UV
    });
    const JV = "bloxdDiagSinkDays",
      YV = 4e4,
      UV = 2048,
      yV = 400,
      pV = 262144,
      QV = 1500,
      nV = 6e5,
      wV = new TextEncoder;

    function ZV(VV) {
      return wV.encode(VV).length
    }

    function vV(VV) {
      return QV + ZV(VV)
    }
    class rV {
      constructor(VV, eV) {
        this.claim = VV, this.deps = eV, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = eV.now()
      }
      start() {
        setInterval((() => {
          this.iZ()
        }), YV), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(VV) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(VV) {
          const eV = VV.replace(/\n/g, " | ");
          if (eV.length <= yV) return eV;
          let xV = yV - 3;
          const JV = eV.charCodeAt(xV - 1);
          return JV >= 55296 && JV <= 56319 && xV--, `${eV.slice(0,xV)}...`
        }(VV)) : this.dropped = !0)
      }
      iZ() {
        this.deps.now() - this.lastDumpMs >= nV && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < YV - 1e3) return;
        const VV = this.readDay(),
          eV = [];
        let xV = 0,
          JV = null;
        for (const YV of this.queue) {
          const yV = ZV(YV) + (eV.length > 0 ? 1 : 0);
          if (xV + yV > UV) break;
          const nV = QV + xV + yV;
          if (this.pageBytes + nV > pV) {
            JV = "page";
            break
          }
          if (!this.dayFits(VV, eV.length + 1, nV)) {
            JV = "day";
            break
          }
          eV.push(YV), xV += yV
        }
        null === JV && this.dropped && eV.length === this.queue.length && (JV = "page"), this.queue.splice(0, eV.length), eV.length > 0 && !this.sendCharged(VV, eV.join("\n"), eV.length, "lines") || null !== JV && this.stopAt(JV, VV)
      }
      queueDumps() {
        for (const [VV, eV] of this.deps.dumps()) {
          const xV = eV.split("\n").slice(0, 20),
            JV = xV.join("\n");
          if (this.sentDumps.get(VV) !== JV) {
            this.sentDumps.set(VV, JV);
            for (const eV of xV) this.add(`[dump:${VV}] ${eV}`)
          }
        }
      }
      stopAt(VV, eV) {
        this.stopped = !0, this.queue.length = 0;
        const xV = "page" === VV ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === VV) {
          if (eV.capSent) return;
          eV.capSent = !0
        } else if (!this.dayFits(eV, 1, vV(xV))) return;
        this.sendCharged(eV, xV, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(VV, eV, xV) {
        return VV.lines + eV <= this.claim.perClientLines && VV.bytes + xV <= this.dayBytes()
      }
      readDays() {
        var VV;
        return null !== (VV = this.deps.storage.getItem(JV)) && void 0 !== VV ? VV : {}
      }
      readDay() {
        const VV = new Date(this.deps.now()).toISOString().slice(0, 10),
          eV = this.readDays()[this.claim.claimId];
        return (null === eV || void 0 === eV ? void 0 : eV.day) === VV ? eV : {
          day: VV,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(VV) {
        const eV = Object.fromEntries(Object.entries(this.readDays()).filter((eV => {
          let [, xV] = eV;
          return xV.day === VV.day
        })));
        return eV[this.claim.claimId] = VV, this.deps.storage.setItem(JV, eV)
      }
      sendCharged(VV, eV, xV, JV) {
        const YV = vV(eV);
        return VV.lines += xV, VV.bytes += YV, this.writeDay(VV) ? (this.pageLines += xV, this.pageBytes += YV, this.lastSentMs = this.deps.now(), this.deps.send(eV, {
          diag_kind: JV
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);