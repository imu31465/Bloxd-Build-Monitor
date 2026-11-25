export const id = 33;
export const ids = [33];
export const modules = {
  34039: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return 0 === BB.length ? 0 : BB[Math.min(BB.length - 1, Math.floor(IB * BB.length))]
    }

    function JB(BB) {
      return BB.toFixed(1)
    }
    ZB.d(IB, {
      c: () => JB,
      f: () => TB
    })
  },
  34031: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      FIRST_SUMMARIES_FOR_MS: () => qB,
      FIRST_SUMMARY_MS: () => gB,
      FrameDebugLog: () => wB,
      OUTLIER_BURST: () => UB,
      OUTLIER_MS: () => yB,
      OUTLIER_REFILL_MS: () => WB,
      SUMMARY_MS: () => NB,
      startFrameDebug: () => YB
    });
    var TB = ZB(4975),
      JB = ZB(4960),
      oB = ZB(34039),
      GB = ZB(2973),
      vB = ZB(1143),
      kB = ZB(3130);
    class cB {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = BB => {
          const IB = BB;
          this.add(IB.startTime, IB.duration, IB.blockingDuration, (0, vB.l)(IB))
        }, this.onLongTask = BB => {
          this.add(BB.startTime, BB.duration, 0, 0)
        }, null !== (0, kB.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, kB.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(BB, IB, ZB, TB) {
        this.entries.set([BB, IB, ZB, TB], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(BB, IB) {
        if (null === this.kind) return "long tasks n/a";
        let ZB = 0,
          TB = 0,
          JB = 0,
          oB = 0;
        for (let vB = 0; vB < this.size; vB++) {
          const GB = 4 * vB,
            kB = this.entries[GB] + this.entries[GB + 1];
          kB > BB && kB <= IB + 2 && (ZB++, TB += this.entries[GB + 1], JB += this.entries[GB + 2], oB += this.entries[GB + 3])
        }
        const GB = "loaf" === this.kind && ZB > 0 ? ` (blocking ${JB.toFixed(0)}, script ${oB.toFixed(0)})` : "";
        return `${ZB} ${this.kind} ${TB.toFixed(0)} ms${GB}`
      }
    }
    var nB = ZB(34046);

    function hB(BB, IB) {
      return IB < 0 || BB < IB ? BB : BB - IB
    }
    class zB {
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
        }, this.lastMs = 0, this.hidden = new nB.b, this.hiddenBefore = {
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
        var IB;
        const ZB = [];
        if (!0 === (null === (IB = this.source) || void 0 === IB ? void 0 : IB.call(this, this.now)) && (TB = this.now, JB = this.before, TB.chunksReceived !== JB.chunksReceived || TB.chunksCancelled !== JB.chunksCancelled || TB.chunksStored !== JB.chunksStored || TB.jobsSent !== JB.jobsSent || TB.jobsDone !== JB.jobsDone || TB.jobsInFlight !== JB.jobsInFlight || TB.workersLive !== JB.workersLive || TB.workersRetired !== JB.workersRetired)) {
          ZB.push(function(BB, IB) {
            const ZB = [`chunks +${hB(BB.chunksReceived,IB.chunksReceived)} got`, `+${hB(BB.chunksCancelled,IB.chunksCancelled)} cancelled`];
            BB.chunksStored >= 0 && ZB.push(`${BB.chunksStored} stored`);
            const TB = `jobs +${hB(BB.jobsSent,IB.jobsSent)} sent, +${hB(BB.jobsDone,IB.jobsDone)} done, ${BB.jobsInFlight} in flight`;
            return `${ZB.join(", ")}; ${TB}; workers ${BB.workersLive} live, ${BB.workersRetired} retired`
          }(this.now, this.before));
          const BB = this.before;
          this.before = this.now, this.now = BB
        }
        var TB, JB;
        const oB = this.hidden.totals(BB),
          GB = oB.changes - this.hiddenBefore.changes,
          vB = oB.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((GB > 0 || vB > 0) && (ZB.push((0, nB.f)({
            changes: GB,
            hiddenMs: vB
          })), this.hiddenBefore = oB), 0 === ZB.length) return null;
        const kB = `load ${Math.round((BB-this.lastMs)/1e3)}s: ${ZB.join("; ")}`;
        return this.lastMs = BB, kB
      }
    }
    class FB {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(BB, IB, ZB) {
        this.count++, "paced" === BB ? this.paced++ : "skipped" === BB && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = IB, this.longestAhead = ZB)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const BB = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${BB} other, longest ${this.longest} in ${(0,oB.c)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const NB = 2e4,
      gB = 5e3,
      qB = 6e4,
      yB = 250,
      UB = 10,
      WB = 6e4,
      dB = 8192;

    function CB(BB) {
      return BB.mainMs = 0, BB.renderMs = 0, BB.ticks = 0, BB.tickMs = 0, BB.rafs = 0, BB.pendingBefore = -1, BB.pendingMax = -1, BB.pendingAfter = -1, BB
    }

    function QB() {
      return CB({})
    }
    class sB {
      constructor() {
        this.intervals = new Float64Array(dB), this.totals = QB(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new FB, this.shown = 0, this.dropped = 0
      }
      reset() {
        CB(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class wB {
      constructor() {
        this.longTasks = new cB, this.summary = new sB, this.current = QB(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = UB, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new zB, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (BB, IB, ZB, JB, oB, GB) => {
          this.ahead = BB.headerWord(TB.J.Pacing) & TB._.AheadMask, this.frame(IB, ZB, JB, oB, BB.headerWord(TB.J.RenderUs) / 1e3, BB.headerWord(TB.J.TicksRun), GB, BB.headerWord(TB.J.RenderPending))
        }, this.wasmPeekPaced = BB => {
          const IB = performance.now();
          this.frame(IB, IB, "paced", BB, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (BB, IB, ZB) => {
          this.frame(BB, IB, "drawn", ZB, IB - BB, 0, 0, -1)
        }, this.jsTick = BB => {
          this.current.mainMs += BB, this.current.ticks++, this.current.tickMs += BB
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const BB = performance.now();
          let IB = 0;
          for (const ZB of this.waiting) {
            if (ZB.dueMs > BB) {
              this.waiting[IB++] = ZB;
              continue
            }
            const TB = [`long frame ${(0,oB.c)(ZB.intervalMs)} ms ending at ${(0,oB.c)(ZB.endMs)} ms: main ${(0,oB.c)(ZB.mainMs)} (render ${(0,oB.c)(ZB.renderMs)}, ${ZB.ticks} ticks ${(0,oB.c)(ZB.tickMs)}), outside ${(0,oB.c)(ZB.intervalMs-ZB.mainMs)}`, `${ZB.rafs} rafs`];
            ZB.pendingBefore >= 0 && TB.push(`pending ${ZB.pendingBefore} -> ${ZB.pendingAfter} (max ${ZB.pendingMax})`), TB.push(this.longTasks.describe(ZB.endMs - ZB.intervalMs, ZB.endMs)), (0, GB.o)("frame", TB.join("; "))
          }
          this.waiting.length = IB, IB > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - BB))
        }, this.flush = () => {
          this.flushTimer = null;
          const BB = performance.now(),
            IB = Math.round((BB - this.lastFlushMs) / 1e3);
          this.lastFlushMs = BB, this.scheduleFlush();
          if (this.logSummary(IB) || this.inGameSinceFlush) {
            const IB = this.loadLine.take(BB);
            null !== IB && (0, GB.o)("frame", IB)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(BB, IB) {
        var ZB;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, GB.o)("frame", `start: ${BB} client, ${IB}, dpr ${window.devicePixelRatio}, long tasks ${null!==(ZB=this.longTasks.kind)&&void 0!==ZB?ZB:"n/a"}; a summary each ${NB/1e3} s in game (${gB/1e3} s for the first ${qB/1e3} s), outliers over ${yB} ms`)
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
        const BB = performance.now() - this.startedMs < qB;
        this.flushTimer = setTimeout(this.flush, BB ? gB : NB)
      }
      frame(BB, IB, ZB, TB, oB, GB, vB, kB) {
        if (!TB) return this.restart(), void(this.lastPending = kB);
        const cB = this.current;
        (0, JB.e)(ZB) ? (this.lastDrawnStartMs >= 0 && (cB.pendingAfter = this.lastPending, this.closeInterval(BB - this.lastDrawnStartMs, BB)), this.lastDrawnStartMs = BB, CB(cB).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(ZB, IB - this.lastDrawnStartMs, this.ahead), cB.mainMs += IB - BB, cB.renderMs += oB, cB.ticks += GB, cB.tickMs += vB, cB.pendingMax = Math.max(cB.pendingMax, kB), this.lastPending = kB, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, kB)
      }
      closeInterval(BB, IB) {
        const ZB = this.summary,
          TB = this.current;
        ZB.frames < dB && (ZB.intervals[ZB.frames] = BB), ZB.frames++, ZB.maxMs = Math.max(ZB.maxMs, BB);
        const JB = ZB.totals;
        JB.mainMs += TB.mainMs, JB.renderMs += TB.renderMs, JB.ticks += TB.ticks, JB.tickMs += TB.tickMs, JB.rafs += TB.rafs, BB > 50 && ZB.slow++, BB > yB && this.outlier(BB, IB)
      }
      outlier(BB, IB) {
        const ZB = Math.floor((IB - this.lastRefillMs) / WB);
        ZB > 0 && (this.tokens = Math.min(UB, this.tokens + ZB), this.lastRefillMs += ZB * WB), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: IB,
          intervalMs: BB,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(BB) {
        const IB = this.summary,
          ZB = IB.totals;
        if (0 === IB.frames) return IB.undrawn.count > 0 && (0, GB.o)("frame", `${BB}s: no frames drawn, ${IB.undrawn.describe()}; pending max ${ZB.pendingMax}`), IB.undrawn.count > 0;
        const TB = IB.intervals.subarray(0, Math.min(IB.frames, dB)).sort(),
          JB = [`${IB.frames} frames, median ${(0,oB.c)((0,oB.f)(TB,.5))} p95 ${(0,oB.c)((0,oB.f)(TB,.95))} max ${(0,oB.c)(IB.maxMs)} ms, ${IB.slow} over 50, ${IB.shown+IB.dropped} over ${yB}`, `${ZB.rafs} rafs, ${IB.undrawn.describe()}`, `main ${(0,oB.c)(ZB.mainMs)} ms (render ${(0,oB.c)(ZB.renderMs)}, ${ZB.ticks} ticks ${(0,oB.c)(ZB.tickMs)})`];
        return ZB.pendingMax >= 0 && JB.push(`pending max ${ZB.pendingMax}`), this.ahead >= 0 && JB.push(`${this.ahead} frames ahead`), JB.push(`outliers ${IB.shown} logged, ${IB.dropped} dropped`), (0, GB.o)("frame", `${BB}s: ${JB.join("; ")}`), !0
      }
    }
    let OB = null;

    function YB(BB, IB) {
      return OB ??= new wB, OB.start(BB, IB), OB
    }
  },
  34046: (BB, IB, ZB) => {
    function TB(BB) {
      return `hidden ${BB.changes} changes, ${Math.round(BB.hiddenMs)} ms`
    }
    ZB.d(IB, {
      b: () => JB,
      f: () => TB
    });
    class JB {
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