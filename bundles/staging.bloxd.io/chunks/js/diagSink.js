export const id = 30;
export const ids = [30];
export const modules = {
  36422: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      DUMP_GAP_MS: () => gD,
      DiagSink: () => fD,
      ITEM_GAP_MS: () => sD,
      ITEM_METADATA_BYTES: () => cD,
      MAX_LINE_CHARS: () => rD,
      MAX_MESSAGE_BYTES: () => KD
    });
    const pD = "bloxdDiagSinkDays",
      sD = 4e4,
      KD = 2048,
      rD = 400,
      LD = 262144,
      cD = 1500,
      gD = 6e5,
      RD = new TextEncoder;

    function AD(DD) {
      return RD.encode(DD).length
    }

    function UD(DD) {
      return cD + AD(DD)
    }
    class fD {
      constructor(DD, zD) {
        this.claim = DD, this.deps = zD, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = zD.now()
      }
      start() {
        setInterval((() => {
          this.DU()
        }), sD), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(DD) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(DD) {
          const zD = DD.replace(/\n/g, " | ");
          if (zD.length <= rD) return zD;
          let wD = rD - 3;
          const pD = zD.charCodeAt(wD - 1);
          return pD >= 55296 && pD <= 56319 && wD--, `${zD.slice(0,wD)}...`
        }(DD)) : this.dropped = !0)
      }
      DU() {
        this.deps.now() - this.lastDumpMs >= gD && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < sD - 1e3) return;
        const DD = this.readDay(),
          zD = [];
        let wD = 0,
          pD = null;
        for (const sD of this.queue) {
          const rD = AD(sD) + (zD.length > 0 ? 1 : 0);
          if (wD + rD > KD) break;
          const gD = cD + wD + rD;
          if (this.pageBytes + gD > LD) {
            pD = "page";
            break
          }
          if (!this.dayFits(DD, zD.length + 1, gD)) {
            pD = "day";
            break
          }
          zD.push(sD), wD += rD
        }
        null === pD && this.dropped && zD.length === this.queue.length && (pD = "page"), this.queue.splice(0, zD.length), zD.length > 0 && !this.sendCharged(DD, zD.join("\n"), zD.length, "lines") || null !== pD && this.stopAt(pD, DD)
      }
      queueDumps() {
        for (const [DD, zD] of this.deps.dumps()) {
          const wD = zD.split("\n").slice(0, 20),
            pD = wD.join("\n");
          if (this.sentDumps.get(DD) !== pD) {
            this.sentDumps.set(DD, pD);
            for (const zD of wD) this.add(`[dump:${DD}] ${zD}`)
          }
        }
      }
      stopAt(DD, zD) {
        this.stopped = !0, this.queue.length = 0;
        const wD = "page" === DD ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === DD) {
          if (zD.capSent) return;
          zD.capSent = !0
        } else if (!this.dayFits(zD, 1, UD(wD))) return;
        this.sendCharged(zD, wD, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(DD, zD, wD) {
        return DD.lines + zD <= this.claim.perClientLines && DD.bytes + wD <= this.dayBytes()
      }
      readDays() {
        var DD;
        return null !== (DD = this.deps.storage.getItem(pD)) && void 0 !== DD ? DD : {}
      }
      readDay() {
        const DD = new Date(this.deps.now()).toISOString().slice(0, 10),
          zD = this.readDays()[this.claim.claimId];
        return (null === zD || void 0 === zD ? void 0 : zD.day) === DD ? zD : {
          day: DD,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(DD) {
        const zD = Object.fromEntries(Object.entries(this.readDays()).filter((zD => {
          let [, wD] = zD;
          return wD.day === DD.day
        })));
        return zD[this.claim.claimId] = DD, this.deps.storage.setItem(pD, zD)
      }
      sendCharged(DD, zD, wD, pD) {
        const sD = UD(zD);
        return DD.lines += wD, DD.bytes += sD, this.writeDay(DD) ? (this.pageLines += wD, this.pageBytes += sD, this.lastSentMs = this.deps.now(), this.deps.send(zD, {
          diag_kind: pD
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);