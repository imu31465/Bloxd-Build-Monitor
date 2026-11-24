export const id = 30;
export const ids = [30];
export const modules = {
  36501: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      DUMP_GAP_MS: () => UB,
      DiagSink: () => sB,
      ITEM_GAP_MS: () => nB,
      ITEM_METADATA_BYTES: () => uB,
      MAX_LINE_CHARS: () => IB,
      MAX_MESSAGE_BYTES: () => dB
    });
    const QB = "bloxdDiagSinkDays",
      nB = 4e4,
      dB = 2048,
      IB = 400,
      NB = 262144,
      uB = 1500,
      UB = 6e5,
      aB = new TextEncoder;

    function pB(BB) {
      return aB.encode(BB).length
    }

    function rB(BB) {
      return uB + pB(BB)
    }
    class sB {
      constructor(BB, jB) {
        this.claim = BB, this.deps = jB, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = jB.now()
      }
      start() {
        setInterval((() => {
          this.vp()
        }), nB), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(BB) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(BB) {
          const jB = BB.replace(/\n/g, " | ");
          if (jB.length <= IB) return jB;
          let zB = IB - 3;
          const QB = jB.charCodeAt(zB - 1);
          return QB >= 55296 && QB <= 56319 && zB--, `${jB.slice(0,zB)}...`
        }(BB)) : this.dropped = !0)
      }
      vp() {
        this.deps.now() - this.lastDumpMs >= UB && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < nB - 1e3) return;
        const BB = this.readDay(),
          jB = [];
        let zB = 0,
          QB = null;
        for (const nB of this.queue) {
          const IB = pB(nB) + (jB.length > 0 ? 1 : 0);
          if (zB + IB > dB) break;
          const UB = uB + zB + IB;
          if (this.pageBytes + UB > NB) {
            QB = "page";
            break
          }
          if (!this.dayFits(BB, jB.length + 1, UB)) {
            QB = "day";
            break
          }
          jB.push(nB), zB += IB
        }
        null === QB && this.dropped && jB.length === this.queue.length && (QB = "page"), this.queue.splice(0, jB.length), jB.length > 0 && !this.sendCharged(BB, jB.join("\n"), jB.length, "lines") || null !== QB && this.stopAt(QB, BB)
      }
      queueDumps() {
        for (const [BB, jB] of this.deps.dumps()) {
          const zB = jB.split("\n").slice(0, 20),
            QB = zB.join("\n");
          if (this.sentDumps.get(BB) !== QB) {
            this.sentDumps.set(BB, QB);
            for (const jB of zB) this.add(`[dump:${BB}] ${jB}`)
          }
        }
      }
      stopAt(BB, jB) {
        this.stopped = !0, this.queue.length = 0;
        const zB = "page" === BB ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === BB) {
          if (jB.capSent) return;
          jB.capSent = !0
        } else if (!this.dayFits(jB, 1, rB(zB))) return;
        this.sendCharged(jB, zB, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(BB, jB, zB) {
        return BB.lines + jB <= this.claim.perClientLines && BB.bytes + zB <= this.dayBytes()
      }
      readDays() {
        var BB;
        return null !== (BB = this.deps.storage.getItem(QB)) && void 0 !== BB ? BB : {}
      }
      readDay() {
        const BB = new Date(this.deps.now()).toISOString().slice(0, 10),
          jB = this.readDays()[this.claim.claimId];
        return (null === jB || void 0 === jB ? void 0 : jB.day) === BB ? jB : {
          day: BB,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(BB) {
        const jB = Object.fromEntries(Object.entries(this.readDays()).filter((jB => {
          let [, zB] = jB;
          return zB.day === BB.day
        })));
        return jB[this.claim.claimId] = BB, this.deps.storage.setItem(QB, jB)
      }
      sendCharged(BB, jB, zB, QB) {
        const nB = rB(jB);
        return BB.lines += zB, BB.bytes += nB, this.writeDay(BB) ? (this.pageLines += zB, this.pageBytes += nB, this.lastSentMs = this.deps.now(), this.deps.send(jB, {
          diag_kind: QB
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);