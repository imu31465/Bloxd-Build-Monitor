export const id = 36;
export const ids = [36];
export const modules = {
  37133: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      DUMP_GAP_MS: () => DU,
      DiagSink: () => IU,
      ITEM_GAP_MS: () => yU,
      ITEM_METADATA_BYTES: () => oU,
      MAX_LINE_CHARS: () => AU,
      MAX_MESSAGE_BYTES: () => QU
    });
    const cU = "bloxdDiagSinkDays",
      yU = 4e4,
      QU = 2048,
      AU = 400,
      FU = 262144,
      oU = 1500,
      DU = 6e5,
      EU = new TextEncoder;

    function YU(UU) {
      return EU.encode(UU).length
    }

    function NU(UU) {
      return oU + YU(UU)
    }
    class IU {
      constructor(UU, XU) {
        this.claim = UU, this.deps = XU, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = XU.now()
      }
      start() {
        setInterval((() => {
          this.LY()
        }), yU), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(UU) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(UU) {
          const XU = UU.replace(/\n/g, " | ");
          if (XU.length <= AU) return XU;
          let zU = AU - 3;
          const cU = XU.charCodeAt(zU - 1);
          return cU >= 55296 && cU <= 56319 && zU--, `${XU.slice(0,zU)}...`
        }(UU)) : this.dropped = !0)
      }
      LY() {
        this.deps.now() - this.lastDumpMs >= DU && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < yU - 1e3) return;
        const UU = this.readDay(),
          XU = [];
        let zU = 0,
          cU = null;
        for (const yU of this.queue) {
          const AU = YU(yU) + (XU.length > 0 ? 1 : 0);
          if (zU + AU > QU) break;
          const DU = oU + zU + AU;
          if (this.pageBytes + DU > FU) {
            cU = "page";
            break
          }
          if (!this.dayFits(UU, XU.length + 1, DU)) {
            cU = "day";
            break
          }
          XU.push(yU), zU += AU
        }
        null === cU && this.dropped && XU.length === this.queue.length && (cU = "page"), this.queue.splice(0, XU.length), XU.length > 0 && !this.sendCharged(UU, XU.join("\n"), XU.length, "lines") || null !== cU && this.stopAt(cU, UU)
      }
      queueDumps() {
        for (const [UU, XU] of this.deps.dumps()) {
          const zU = XU.split("\n").slice(0, 20),
            cU = zU.join("\n");
          if (this.sentDumps.get(UU) !== cU) {
            this.sentDumps.set(UU, cU);
            for (const XU of zU) this.add(`[dump:${UU}] ${XU}`)
          }
        }
      }
      stopAt(UU, XU) {
        this.stopped = !0, this.queue.length = 0;
        const zU = "page" === UU ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === UU) {
          if (XU.capSent) return;
          XU.capSent = !0
        } else if (!this.dayFits(XU, 1, NU(zU))) return;
        this.sendCharged(XU, zU, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(UU, XU, zU) {
        return UU.lines + XU <= this.claim.perClientLines && UU.bytes + zU <= this.dayBytes()
      }
      readDays() {
        var UU;
        return null !== (UU = this.deps.storage.getItem(cU)) && void 0 !== UU ? UU : {}
      }
      readDay() {
        const UU = new Date(this.deps.now()).toISOString().slice(0, 10),
          XU = this.readDays()[this.claim.claimId];
        return (null === XU || void 0 === XU ? void 0 : XU.day) === UU ? XU : {
          day: UU,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(UU) {
        const XU = Object.fromEntries(Object.entries(this.readDays()).filter((XU => {
          let [, zU] = XU;
          return zU.day === UU.day
        })));
        return XU[this.claim.claimId] = UU, this.deps.storage.setItem(cU, XU)
      }
      sendCharged(UU, XU, zU, cU) {
        const yU = NU(XU);
        return UU.lines += zU, UU.bytes += yU, this.writeDay(UU) ? (this.pageLines += zU, this.pageBytes += yU, this.lastSentMs = this.deps.now(), this.deps.send(XU, {
          diag_kind: cU
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);