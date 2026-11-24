export const id = 30;
export const ids = [30];
export const modules = {
  36454: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      DUMP_GAP_MS: () => cB,
      DiagSink: () => FB,
      ITEM_GAP_MS: () => JB,
      ITEM_METADATA_BYTES: () => kB,
      MAX_LINE_CHARS: () => GB,
      MAX_MESSAGE_BYTES: () => oB
    });
    const TB = "bloxdDiagSinkDays",
      JB = 4e4,
      oB = 2048,
      GB = 400,
      vB = 262144,
      kB = 1500,
      cB = 6e5,
      nB = new TextEncoder;

    function hB(BB) {
      return nB.encode(BB).length
    }

    function zB(BB) {
      return kB + hB(BB)
    }
    class FB {
      constructor(BB, IB) {
        this.claim = BB, this.deps = IB, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = IB.now()
      }
      start() {
        setInterval((() => {
          this.Iz()
        }), JB), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(BB) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(BB) {
          const IB = BB.replace(/\n/g, " | ");
          if (IB.length <= GB) return IB;
          let ZB = GB - 3;
          const TB = IB.charCodeAt(ZB - 1);
          return TB >= 55296 && TB <= 56319 && ZB--, `${IB.slice(0,ZB)}...`
        }(BB)) : this.dropped = !0)
      }
      Iz() {
        this.deps.now() - this.lastDumpMs >= cB && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < JB - 1e3) return;
        const BB = this.readDay(),
          IB = [];
        let ZB = 0,
          TB = null;
        for (const JB of this.queue) {
          const GB = hB(JB) + (IB.length > 0 ? 1 : 0);
          if (ZB + GB > oB) break;
          const cB = kB + ZB + GB;
          if (this.pageBytes + cB > vB) {
            TB = "page";
            break
          }
          if (!this.dayFits(BB, IB.length + 1, cB)) {
            TB = "day";
            break
          }
          IB.push(JB), ZB += GB
        }
        null === TB && this.dropped && IB.length === this.queue.length && (TB = "page"), this.queue.splice(0, IB.length), IB.length > 0 && !this.sendCharged(BB, IB.join("\n"), IB.length, "lines") || null !== TB && this.stopAt(TB, BB)
      }
      queueDumps() {
        for (const [BB, IB] of this.deps.dumps()) {
          const ZB = IB.split("\n").slice(0, 20),
            TB = ZB.join("\n");
          if (this.sentDumps.get(BB) !== TB) {
            this.sentDumps.set(BB, TB);
            for (const IB of ZB) this.add(`[dump:${BB}] ${IB}`)
          }
        }
      }
      stopAt(BB, IB) {
        this.stopped = !0, this.queue.length = 0;
        const ZB = "page" === BB ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === BB) {
          if (IB.capSent) return;
          IB.capSent = !0
        } else if (!this.dayFits(IB, 1, zB(ZB))) return;
        this.sendCharged(IB, ZB, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(BB, IB, ZB) {
        return BB.lines + IB <= this.claim.perClientLines && BB.bytes + ZB <= this.dayBytes()
      }
      readDays() {
        var BB;
        return null !== (BB = this.deps.storage.getItem(TB)) && void 0 !== BB ? BB : {}
      }
      readDay() {
        const BB = new Date(this.deps.now()).toISOString().slice(0, 10),
          IB = this.readDays()[this.claim.claimId];
        return (null === IB || void 0 === IB ? void 0 : IB.day) === BB ? IB : {
          day: BB,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(BB) {
        const IB = Object.fromEntries(Object.entries(this.readDays()).filter((IB => {
          let [, ZB] = IB;
          return ZB.day === BB.day
        })));
        return IB[this.claim.claimId] = BB, this.deps.storage.setItem(TB, IB)
      }
      sendCharged(BB, IB, ZB, TB) {
        const JB = zB(IB);
        return BB.lines += ZB, BB.bytes += JB, this.writeDay(BB) ? (this.pageLines += ZB, this.pageBytes += JB, this.lastSentMs = this.deps.now(), this.deps.send(IB, {
          diag_kind: TB
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);