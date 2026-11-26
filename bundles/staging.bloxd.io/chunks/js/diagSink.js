export const id = 36;
export const ids = [36];
export const modules = {
  37102: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      DUMP_GAP_MS: () => JB,
      DiagSink: () => lB,
      ITEM_GAP_MS: () => DB,
      ITEM_METADATA_BYTES: () => yB,
      MAX_LINE_CHARS: () => oB,
      MAX_MESSAGE_BYTES: () => QB
    });
    const YB = "bloxdDiagSinkDays",
      DB = 4e4,
      QB = 2048,
      oB = 400,
      jB = 262144,
      yB = 1500,
      JB = 6e5,
      MB = new TextEncoder;

    function PB(BB) {
      return MB.encode(BB).length
    }

    function zB(BB) {
      return yB + PB(BB)
    }
    class lB {
      constructor(BB, OB) {
        this.claim = BB, this.deps = OB, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = OB.now()
      }
      start() {
        setInterval((() => {
          this.kP()
        }), DB), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(BB) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(BB) {
          const OB = BB.replace(/\n/g, " | ");
          if (OB.length <= oB) return OB;
          let GB = oB - 3;
          const YB = OB.charCodeAt(GB - 1);
          return YB >= 55296 && YB <= 56319 && GB--, `${OB.slice(0,GB)}...`
        }(BB)) : this.dropped = !0)
      }
      kP() {
        this.deps.now() - this.lastDumpMs >= JB && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < DB - 1e3) return;
        const BB = this.readDay(),
          OB = [];
        let GB = 0,
          YB = null;
        for (const DB of this.queue) {
          const oB = PB(DB) + (OB.length > 0 ? 1 : 0);
          if (GB + oB > QB) break;
          const JB = yB + GB + oB;
          if (this.pageBytes + JB > jB) {
            YB = "page";
            break
          }
          if (!this.dayFits(BB, OB.length + 1, JB)) {
            YB = "day";
            break
          }
          OB.push(DB), GB += oB
        }
        null === YB && this.dropped && OB.length === this.queue.length && (YB = "page"), this.queue.splice(0, OB.length), OB.length > 0 && !this.sendCharged(BB, OB.join("\n"), OB.length, "lines") || null !== YB && this.stopAt(YB, BB)
      }
      queueDumps() {
        for (const [BB, OB] of this.deps.dumps()) {
          const GB = OB.split("\n").slice(0, 20),
            YB = GB.join("\n");
          if (this.sentDumps.get(BB) !== YB) {
            this.sentDumps.set(BB, YB);
            for (const OB of GB) this.add(`[dump:${BB}] ${OB}`)
          }
        }
      }
      stopAt(BB, OB) {
        this.stopped = !0, this.queue.length = 0;
        const GB = "page" === BB ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === BB) {
          if (OB.capSent) return;
          OB.capSent = !0
        } else if (!this.dayFits(OB, 1, zB(GB))) return;
        this.sendCharged(OB, GB, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(BB, OB, GB) {
        return BB.lines + OB <= this.claim.perClientLines && BB.bytes + GB <= this.dayBytes()
      }
      readDays() {
        var BB;
        return null !== (BB = this.deps.storage.getItem(YB)) && void 0 !== BB ? BB : {}
      }
      readDay() {
        const BB = new Date(this.deps.now()).toISOString().slice(0, 10),
          OB = this.readDays()[this.claim.claimId];
        return (null === OB || void 0 === OB ? void 0 : OB.day) === BB ? OB : {
          day: BB,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(BB) {
        const OB = Object.fromEntries(Object.entries(this.readDays()).filter((OB => {
          let [, GB] = OB;
          return GB.day === BB.day
        })));
        return OB[this.claim.claimId] = BB, this.deps.storage.setItem(YB, OB)
      }
      sendCharged(BB, OB, GB, YB) {
        const DB = zB(OB);
        return BB.lines += GB, BB.bytes += DB, this.writeDay(BB) ? (this.pageLines += GB, this.pageBytes += DB, this.lastSentMs = this.deps.now(), this.deps.send(OB, {
          diag_kind: YB
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);