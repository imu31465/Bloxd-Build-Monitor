export const id = 30;
export const ids = [30];
export const modules = {
  36761: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      DUMP_GAP_MS: () => YG,
      DiagSink: () => QG,
      ITEM_GAP_MS: () => SG,
      ITEM_METADATA_BYTES: () => UG,
      MAX_LINE_CHARS: () => yG,
      MAX_MESSAGE_BYTES: () => LG
    });
    const wG = "bloxdDiagSinkDays",
      SG = 4e4,
      LG = 2048,
      yG = 400,
      kG = 262144,
      UG = 1500,
      YG = 6e5,
      VG = new TextEncoder;

    function pG(GG) {
      return VG.encode(GG).length
    }

    function fG(GG) {
      return UG + pG(GG)
    }
    class QG {
      constructor(GG, bG) {
        this.claim = GG, this.deps = bG, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = bG.now()
      }
      start() {
        setInterval((() => {
          this.Tp()
        }), SG), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(GG) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(GG) {
          const bG = GG.replace(/\n/g, " | ");
          if (bG.length <= yG) return bG;
          let ZG = yG - 3;
          const wG = bG.charCodeAt(ZG - 1);
          return wG >= 55296 && wG <= 56319 && ZG--, `${bG.slice(0,ZG)}...`
        }(GG)) : this.dropped = !0)
      }
      Tp() {
        this.deps.now() - this.lastDumpMs >= YG && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < SG - 1e3) return;
        const GG = this.readDay(),
          bG = [];
        let ZG = 0,
          wG = null;
        for (const SG of this.queue) {
          const yG = pG(SG) + (bG.length > 0 ? 1 : 0);
          if (ZG + yG > LG) break;
          const YG = UG + ZG + yG;
          if (this.pageBytes + YG > kG) {
            wG = "page";
            break
          }
          if (!this.dayFits(GG, bG.length + 1, YG)) {
            wG = "day";
            break
          }
          bG.push(SG), ZG += yG
        }
        null === wG && this.dropped && bG.length === this.queue.length && (wG = "page"), this.queue.splice(0, bG.length), bG.length > 0 && !this.sendCharged(GG, bG.join("\n"), bG.length, "lines") || null !== wG && this.stopAt(wG, GG)
      }
      queueDumps() {
        for (const [GG, bG] of this.deps.dumps()) {
          const ZG = bG.split("\n").slice(0, 20),
            wG = ZG.join("\n");
          if (this.sentDumps.get(GG) !== wG) {
            this.sentDumps.set(GG, wG);
            for (const bG of ZG) this.add(`[dump:${GG}] ${bG}`)
          }
        }
      }
      stopAt(GG, bG) {
        this.stopped = !0, this.queue.length = 0;
        const ZG = "page" === GG ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === GG) {
          if (bG.capSent) return;
          bG.capSent = !0
        } else if (!this.dayFits(bG, 1, fG(ZG))) return;
        this.sendCharged(bG, ZG, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(GG, bG, ZG) {
        return GG.lines + bG <= this.claim.perClientLines && GG.bytes + ZG <= this.dayBytes()
      }
      readDays() {
        var GG;
        return null !== (GG = this.deps.storage.getItem(wG)) && void 0 !== GG ? GG : {}
      }
      readDay() {
        const GG = new Date(this.deps.now()).toISOString().slice(0, 10),
          bG = this.readDays()[this.claim.claimId];
        return (null === bG || void 0 === bG ? void 0 : bG.day) === GG ? bG : {
          day: GG,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(GG) {
        const bG = Object.fromEntries(Object.entries(this.readDays()).filter((bG => {
          let [, ZG] = bG;
          return ZG.day === GG.day
        })));
        return bG[this.claim.claimId] = GG, this.deps.storage.setItem(wG, bG)
      }
      sendCharged(GG, bG, ZG, wG) {
        const SG = fG(bG);
        return GG.lines += ZG, GG.bytes += SG, this.writeDay(GG) ? (this.pageLines += ZG, this.pageBytes += SG, this.lastSentMs = this.deps.now(), this.deps.send(bG, {
          diag_kind: wG
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);