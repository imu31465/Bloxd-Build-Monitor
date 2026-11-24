export const id = 33;
export const ids = [33];
export const modules = {
  34101: (BB, jB, zB) => {
    function QB(BB, jB) {
      return 0 === BB.length ? 0 : BB[Math.min(BB.length - 1, Math.floor(jB * BB.length))]
    }

    function nB(BB) {
      return BB.toFixed(1)
    }
    zB.d(jB, {
      e: () => nB,
      f: () => QB
    })
  },
  34098: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      FIRST_SUMMARIES_FOR_MS: () => yB,
      FIRST_SUMMARY_MS: () => mB,
      FrameDebugLog: () => EB,
      OUTLIER_BURST: () => GB,
      OUTLIER_MS: () => kB,
      OUTLIER_REFILL_MS: () => LB,
      SUMMARY_MS: () => JB,
      startFrameDebug: () => qB
    });
    var QB = zB(4893),
      nB = zB(4879),
      dB = zB(34101),
      IB = zB(2912),
      NB = zB(1135),
      uB = zB(3069);
    class UB {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = BB => {
          const jB = BB;
          this.add(jB.startTime, jB.duration, jB.blockingDuration, (0, NB.l)(jB))
        }, this.onLongTask = BB => {
          this.add(BB.startTime, BB.duration, 0, 0)
        }, null !== (0, uB.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, uB.d)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(BB, jB, zB, QB) {
        this.entries.set([BB, jB, zB, QB], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(BB, jB) {
        if (null === this.kind) return "long tasks n/a";
        let zB = 0,
          QB = 0,
          nB = 0,
          dB = 0;
        for (let NB = 0; NB < this.size; NB++) {
          const IB = 4 * NB,
            uB = this.entries[IB] + this.entries[IB + 1];
          uB > BB && uB <= jB + 2 && (zB++, QB += this.entries[IB + 1], nB += this.entries[IB + 2], dB += this.entries[IB + 3])
        }
        const IB = "loaf" === this.kind && zB > 0 ? ` (blocking ${nB.toFixed(0)}, script ${dB.toFixed(0)})` : "";
        return `${zB} ${this.kind} ${QB.toFixed(0)} ms${IB}`
      }
    }
    var aB = zB(34105);

    function pB(BB, jB) {
      return jB < 0 || BB < jB ? BB : BB - jB
    }
    class rB {
      constructor() {
        this.source = null, this.now = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = 0, this.hidden = new aB.e, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(BB) {
        this.source = BB
      }
      start(BB) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = BB
      }
      take(BB) {
        var jB;
        const zB = [];
        if (!0 === (null === (jB = this.source) || void 0 === jB ? void 0 : jB.call(this, this.now)) && (QB = this.now, nB = this.before, QB.chunksReceived !== nB.chunksReceived || QB.chunksCancelled !== nB.chunksCancelled || QB.chunksStored !== nB.chunksStored || QB.jobsSent !== nB.jobsSent || QB.jobsDone !== nB.jobsDone || QB.jobsInFlight !== nB.jobsInFlight || QB.workersLive !== nB.workersLive || QB.workersRetired !== nB.workersRetired)) {
          zB.push(function(BB, jB) {
            const zB = [`chunks +${pB(BB.chunksReceived,jB.chunksReceived)} got`, `+${pB(BB.chunksCancelled,jB.chunksCancelled)} cancelled`];
            BB.chunksStored >= 0 && zB.push(`${BB.chunksStored} stored`);
            const QB = `jobs +${pB(BB.jobsSent,jB.jobsSent)} sent, +${pB(BB.jobsDone,jB.jobsDone)} done, ${BB.jobsInFlight} in flight`;
            return `${zB.join(", ")}; ${QB}; workers ${BB.workersLive} live, ${BB.workersRetired} retired`
          }(this.now, this.before));
          const BB = this.before;
          this.before = this.now, this.now = BB
        }
        var QB, nB;
        const dB = this.hidden.totals(BB),
          IB = dB.changes - this.hiddenBefore.changes,
          NB = dB.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((IB > 0 || NB > 0) && (zB.push((0, aB.h)({
            changes: IB,
            hiddenMs: NB
          })), this.hiddenBefore = dB), 0 === zB.length) return null;
        const uB = `load ${Math.round((BB-this.lastMs)/1e3)}s: ${zB.join("; ")}`;
        return this.lastMs = BB, uB
      }
    }
    class sB {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(BB, jB, zB) {
        this.count++, "paced" === BB ? this.paced++ : "skipped" === BB && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = jB, this.longestAhead = zB)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const BB = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${BB} other, longest ${this.longest} in ${(0,dB.e)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const JB = 2e4,
      mB = 5e3,
      yB = 6e4,
      kB = 250,
      GB = 10,
      LB = 6e4,
      gB = 8192;

    function tB(BB) {
      return BB.mainMs = 0, BB.renderMs = 0, BB.ticks = 0, BB.tickMs = 0, BB.rafs = 0, BB.pendingBefore = -1, BB.pendingMax = -1, BB.pendingAfter = -1, BB
    }

    function SB() {
      return tB({})
    }
    class MB {
      constructor() {
        this.intervals = new Float64Array(gB), this.totals = SB(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new sB, this.shown = 0, this.dropped = 0
      }
      reset() {
        tB(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class EB {
      constructor() {
        this.longTasks = new UB, this.summary = new MB, this.current = SB(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = GB, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new rB, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (BB, jB, zB, nB, dB, IB) => {
          this.ahead = BB.headerWord(QB.C.Pacing) & QB.S.AheadMask, this.frame(jB, zB, nB, dB, BB.headerWord(QB.C.RenderUs) / 1e3, BB.headerWord(QB.C.TicksRun), IB, BB.headerWord(QB.C.RenderPending))
        }, this.wasmPeekPaced = BB => {
          const jB = performance.now();
          this.frame(jB, jB, "paced", BB, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (BB, jB, zB) => {
          this.frame(BB, jB, "drawn", zB, jB - BB, 0, 0, -1)
        }, this.jsTick = BB => {
          this.current.mainMs += BB, this.current.ticks++, this.current.tickMs += BB
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const BB = performance.now();
          let jB = 0;
          for (const zB of this.waiting) {
            if (zB.dueMs > BB) {
              this.waiting[jB++] = zB;
              continue
            }
            const QB = [`long frame ${(0,dB.e)(zB.intervalMs)} ms ending at ${(0,dB.e)(zB.endMs)} ms: main ${(0,dB.e)(zB.mainMs)} (render ${(0,dB.e)(zB.renderMs)}, ${zB.ticks} ticks ${(0,dB.e)(zB.tickMs)}), outside ${(0,dB.e)(zB.intervalMs-zB.mainMs)}`, `${zB.rafs} rafs`];
            zB.pendingBefore >= 0 && QB.push(`pending ${zB.pendingBefore} -> ${zB.pendingAfter} (max ${zB.pendingMax})`), QB.push(this.longTasks.describe(zB.endMs - zB.intervalMs, zB.endMs)), (0, IB.n)("frame", QB.join("; "))
          }
          this.waiting.length = jB, jB > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - BB))
        }, this.flush = () => {
          this.flushTimer = null;
          const BB = performance.now(),
            jB = Math.round((BB - this.lastFlushMs) / 1e3);
          this.lastFlushMs = BB, this.scheduleFlush();
          if (this.logSummary(jB) || this.inGameSinceFlush) {
            const jB = this.loadLine.take(BB);
            null !== jB && (0, IB.n)("frame", jB)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(BB, jB) {
        var zB;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, IB.n)("frame", `start: ${BB} client, ${jB}, dpr ${window.devicePixelRatio}, long tasks ${null!==(zB=this.longTasks.kind)&&void 0!==zB?zB:"n/a"}; a summary each ${JB/1e3} s in game (${mB/1e3} s for the first ${yB/1e3} s), outliers over ${kB} ms`)
      }
      setLoadCounts(BB) {
        this.loadLine.setSource(BB)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const BB = performance.now() - this.startedMs < yB;
        this.flushTimer = setTimeout(this.flush, BB ? mB : JB)
      }
      frame(BB, jB, zB, QB, dB, IB, NB, uB) {
        if (!QB) return this.restart(), void(this.lastPending = uB);
        const UB = this.current;
        (0, nB.e)(zB) ? (this.lastDrawnStartMs >= 0 && (UB.pendingAfter = this.lastPending, this.closeInterval(BB - this.lastDrawnStartMs, BB)), this.lastDrawnStartMs = BB, tB(UB).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(zB, jB - this.lastDrawnStartMs, this.ahead), UB.mainMs += jB - BB, UB.renderMs += dB, UB.ticks += IB, UB.tickMs += NB, UB.pendingMax = Math.max(UB.pendingMax, uB), this.lastPending = uB, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, uB)
      }
      closeInterval(BB, jB) {
        const zB = this.summary,
          QB = this.current;
        zB.frames < gB && (zB.intervals[zB.frames] = BB), zB.frames++, zB.maxMs = Math.max(zB.maxMs, BB);
        const nB = zB.totals;
        nB.mainMs += QB.mainMs, nB.renderMs += QB.renderMs, nB.ticks += QB.ticks, nB.tickMs += QB.tickMs, nB.rafs += QB.rafs, BB > 50 && zB.slow++, BB > kB && this.outlier(BB, jB)
      }
      outlier(BB, jB) {
        const zB = Math.floor((jB - this.lastRefillMs) / LB);
        zB > 0 && (this.tokens = Math.min(GB, this.tokens + zB), this.lastRefillMs += zB * LB), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: jB,
          intervalMs: BB,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(BB) {
        const jB = this.summary,
          zB = jB.totals;
        if (0 === jB.frames) return jB.undrawn.count > 0 && (0, IB.n)("frame", `${BB}s: no frames drawn, ${jB.undrawn.describe()}; pending max ${zB.pendingMax}`), jB.undrawn.count > 0;
        const QB = jB.intervals.subarray(0, Math.min(jB.frames, gB)).sort(),
          nB = [`${jB.frames} frames, median ${(0,dB.e)((0,dB.f)(QB,.5))} p95 ${(0,dB.e)((0,dB.f)(QB,.95))} max ${(0,dB.e)(jB.maxMs)} ms, ${jB.slow} over 50, ${jB.shown+jB.dropped} over ${kB}`, `${zB.rafs} rafs, ${jB.undrawn.describe()}`, `main ${(0,dB.e)(zB.mainMs)} ms (render ${(0,dB.e)(zB.renderMs)}, ${zB.ticks} ticks ${(0,dB.e)(zB.tickMs)})`];
        return zB.pendingMax >= 0 && nB.push(`pending max ${zB.pendingMax}`), this.ahead >= 0 && nB.push(`${this.ahead} frames ahead`), nB.push(`outliers ${jB.shown} logged, ${jB.dropped} dropped`), (0, IB.n)("frame", `${BB}s: ${nB.join("; ")}`), !0
      }
    }
    let iB = null;

    function qB(BB, jB) {
      return iB ??= new EB, iB.start(BB, jB), iB
    }
  },
  34105: (BB, jB, zB) => {
    function QB(BB) {
      return `hidden ${BB.changes} changes, ${Math.round(BB.hiddenMs)} ms`
    }
    zB.d(jB, {
      e: () => nB,
      h: () => QB
    });
    class nB {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(BB) {
        this.changes++, document.hidden ? this.hiddenSinceMs = BB : this.hiddenSinceMs >= 0 && (this.hiddenMs += BB - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(BB) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? BB - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);