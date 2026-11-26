export const id = 39;
export const ids = [39];
export const modules = {
  34648: (BB, OB, GB) => {
    function YB(BB, OB) {
      return 0 === BB.length ? 0 : BB[Math.min(BB.length - 1, Math.floor(OB * BB.length))]
    }

    function DB(BB) {
      return BB.toFixed(1)
    }
    GB.d(OB, {
      d: () => DB,
      f: () => YB
    })
  },
  34643: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      FIRST_SUMMARIES_FOR_MS: () => ZB,
      FIRST_SUMMARY_MS: () => qB,
      FrameDebugLog: () => UB,
      OUTLIER_BURST: () => RB,
      OUTLIER_MS: () => NB,
      OUTLIER_REFILL_MS: () => WB,
      SUMMARY_MS: () => pB,
      startFrameDebug: () => kB
    });
    var YB = GB(5287),
      DB = GB(5276),
      QB = GB(34648),
      oB = GB(3136),
      jB = GB(1316),
      yB = GB(3331);
    class JB {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = BB => {
          const OB = BB;
          this.add(OB.startTime, OB.duration, OB.blockingDuration, (0, jB.q)(OB))
        }, this.onLongTask = BB => {
          this.add(BB.startTime, BB.duration, 0, 0)
        }, null !== (0, yB.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, yB.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(BB, OB, GB, YB) {
        this.entries.set([BB, OB, GB, YB], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(BB, OB) {
        if (null === this.kind) return "long tasks n/a";
        let GB = 0,
          YB = 0,
          DB = 0,
          QB = 0;
        for (let jB = 0; jB < this.size; jB++) {
          const oB = 4 * jB,
            yB = this.entries[oB] + this.entries[oB + 1];
          yB > BB && yB <= OB + 2 && (GB++, YB += this.entries[oB + 1], DB += this.entries[oB + 2], QB += this.entries[oB + 3])
        }
        const oB = "loaf" === this.kind && GB > 0 ? ` (blocking ${DB.toFixed(0)}, script ${QB.toFixed(0)})` : "";
        return `${GB} ${this.kind} ${YB.toFixed(0)} ms${oB}`
      }
    }
    var MB = GB(34654);

    function PB(BB, OB) {
      return OB < 0 || BB < OB ? BB : BB - OB
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
        }, this.lastMs = 0, this.hidden = new MB.c, this.hiddenBefore = {
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
        var OB;
        const GB = [];
        if (!0 === (null === (OB = this.source) || void 0 === OB ? void 0 : OB.call(this, this.now)) && (YB = this.now, DB = this.before, YB.chunksReceived !== DB.chunksReceived || YB.chunksCancelled !== DB.chunksCancelled || YB.chunksStored !== DB.chunksStored || YB.jobsSent !== DB.jobsSent || YB.jobsDone !== DB.jobsDone || YB.jobsInFlight !== DB.jobsInFlight || YB.workersLive !== DB.workersLive || YB.workersRetired !== DB.workersRetired)) {
          GB.push(function(BB, OB) {
            const GB = [`chunks +${PB(BB.chunksReceived,OB.chunksReceived)} got`, `+${PB(BB.chunksCancelled,OB.chunksCancelled)} cancelled`];
            BB.chunksStored >= 0 && GB.push(`${BB.chunksStored} stored`);
            const YB = `jobs +${PB(BB.jobsSent,OB.jobsSent)} sent, +${PB(BB.jobsDone,OB.jobsDone)} done, ${BB.jobsInFlight} in flight`;
            return `${GB.join(", ")}; ${YB}; workers ${BB.workersLive} live, ${BB.workersRetired} retired`
          }(this.now, this.before));
          const BB = this.before;
          this.before = this.now, this.now = BB
        }
        var YB, DB;
        const QB = this.hidden.totals(BB),
          oB = QB.changes - this.hiddenBefore.changes,
          jB = QB.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((oB > 0 || jB > 0) && (GB.push((0, MB.d)({
            changes: oB,
            hiddenMs: jB
          })), this.hiddenBefore = QB), 0 === GB.length) return null;
        const yB = `load ${Math.round((BB-this.lastMs)/1e3)}s: ${GB.join("; ")}`;
        return this.lastMs = BB, yB
      }
    }
    class lB {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(BB, OB, GB) {
        this.count++, "paced" === BB ? this.paced++ : "skipped" === BB && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = OB, this.longestAhead = GB)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const BB = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${BB} other, longest ${this.longest} in ${(0,QB.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const pB = 2e4,
      qB = 5e3,
      ZB = 6e4,
      NB = 250,
      RB = 10,
      WB = 6e4,
      AB = 8192;

    function VB(BB) {
      return BB.mainMs = 0, BB.renderMs = 0, BB.ticks = 0, BB.tickMs = 0, BB.rafs = 0, BB.pendingBefore = -1, BB.pendingMax = -1, BB.pendingAfter = -1, BB
    }

    function SB() {
      return VB({})
    }
    class nB {
      constructor() {
        this.intervals = new Float64Array(AB), this.totals = SB(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new lB, this.shown = 0, this.dropped = 0
      }
      reset() {
        VB(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class UB {
      constructor() {
        this.longTasks = new JB, this.summary = new nB, this.current = SB(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = RB, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new zB, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (BB, OB, GB, DB, QB, oB) => {
          this.ahead = BB.headerWord(YB.O.Pacing) & YB.fb.AheadMask, this.frame(OB, GB, DB, QB, BB.headerWord(YB.O.RenderUs) / 1e3, BB.headerWord(YB.O.TicksRun), oB, BB.headerWord(YB.O.RenderPending))
        }, this.wasmPeekPaced = BB => {
          const OB = performance.now();
          this.frame(OB, OB, "paced", BB, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (BB, OB, GB) => {
          this.frame(BB, OB, "drawn", GB, OB - BB, 0, 0, -1)
        }, this.jsTick = BB => {
          this.current.mainMs += BB, this.current.ticks++, this.current.tickMs += BB
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const BB = performance.now();
          let OB = 0;
          for (const GB of this.waiting) {
            if (GB.dueMs > BB) {
              this.waiting[OB++] = GB;
              continue
            }
            const YB = [`long frame ${(0,QB.d)(GB.intervalMs)} ms ending at ${(0,QB.d)(GB.endMs)} ms: main ${(0,QB.d)(GB.mainMs)} (render ${(0,QB.d)(GB.renderMs)}, ${GB.ticks} ticks ${(0,QB.d)(GB.tickMs)}), outside ${(0,QB.d)(GB.intervalMs-GB.mainMs)}`, `${GB.rafs} rafs`];
            GB.pendingBefore >= 0 && YB.push(`pending ${GB.pendingBefore} -> ${GB.pendingAfter} (max ${GB.pendingMax})`), YB.push(this.longTasks.describe(GB.endMs - GB.intervalMs, GB.endMs)), (0, oB.m)("frame", YB.join("; "))
          }
          this.waiting.length = OB, OB > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - BB))
        }, this.flush = () => {
          this.flushTimer = null;
          const BB = performance.now(),
            OB = Math.round((BB - this.lastFlushMs) / 1e3);
          this.lastFlushMs = BB, this.scheduleFlush();
          if (this.logSummary(OB) || this.inGameSinceFlush) {
            const OB = this.loadLine.take(BB);
            null !== OB && (0, oB.m)("frame", OB)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(BB, OB) {
        var GB;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, oB.m)("frame", `start: ${BB} client, ${OB}, dpr ${window.devicePixelRatio}, long tasks ${null!==(GB=this.longTasks.kind)&&void 0!==GB?GB:"n/a"}; a summary each ${pB/1e3} s in game (${qB/1e3} s for the first ${ZB/1e3} s), outliers over ${NB} ms`)
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
        const BB = performance.now() - this.startedMs < ZB;
        this.flushTimer = setTimeout(this.flush, BB ? qB : pB)
      }
      frame(BB, OB, GB, YB, QB, oB, jB, yB) {
        if (!YB) return this.restart(), void(this.lastPending = yB);
        const JB = this.current;
        (0, DB.d)(GB) ? (this.lastDrawnStartMs >= 0 && (JB.pendingAfter = this.lastPending, this.closeInterval(BB - this.lastDrawnStartMs, BB)), this.lastDrawnStartMs = BB, VB(JB).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(GB, OB - this.lastDrawnStartMs, this.ahead), JB.mainMs += OB - BB, JB.renderMs += QB, JB.ticks += oB, JB.tickMs += jB, JB.pendingMax = Math.max(JB.pendingMax, yB), this.lastPending = yB, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, yB)
      }
      closeInterval(BB, OB) {
        const GB = this.summary,
          YB = this.current;
        GB.frames < AB && (GB.intervals[GB.frames] = BB), GB.frames++, GB.maxMs = Math.max(GB.maxMs, BB);
        const DB = GB.totals;
        DB.mainMs += YB.mainMs, DB.renderMs += YB.renderMs, DB.ticks += YB.ticks, DB.tickMs += YB.tickMs, DB.rafs += YB.rafs, BB > 50 && GB.slow++, BB > NB && this.outlier(BB, OB)
      }
      outlier(BB, OB) {
        const GB = Math.floor((OB - this.lastRefillMs) / WB);
        GB > 0 && (this.tokens = Math.min(RB, this.tokens + GB), this.lastRefillMs += GB * WB), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: OB,
          intervalMs: BB,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(BB) {
        const OB = this.summary,
          GB = OB.totals;
        if (0 === OB.frames) return OB.undrawn.count > 0 && (0, oB.m)("frame", `${BB}s: no frames drawn, ${OB.undrawn.describe()}; pending max ${GB.pendingMax}`), OB.undrawn.count > 0;
        const YB = OB.intervals.subarray(0, Math.min(OB.frames, AB)).sort(),
          DB = [`${OB.frames} frames, median ${(0,QB.d)((0,QB.f)(YB,.5))} p95 ${(0,QB.d)((0,QB.f)(YB,.95))} max ${(0,QB.d)(OB.maxMs)} ms, ${OB.slow} over 50, ${OB.shown+OB.dropped} over ${NB}`, `${GB.rafs} rafs, ${OB.undrawn.describe()}`, `main ${(0,QB.d)(GB.mainMs)} ms (render ${(0,QB.d)(GB.renderMs)}, ${GB.ticks} ticks ${(0,QB.d)(GB.tickMs)})`];
        return GB.pendingMax >= 0 && DB.push(`pending max ${GB.pendingMax}`), this.ahead >= 0 && DB.push(`${this.ahead} frames ahead`), DB.push(`outliers ${OB.shown} logged, ${OB.dropped} dropped`), (0, oB.m)("frame", `${BB}s: ${DB.join("; ")}`), !0
      }
    }
    let fB = null;

    function kB(BB, OB) {
      return fB ??= new UB, fB.start(BB, OB), fB
    }
  },
  34654: (BB, OB, GB) => {
    function YB(BB) {
      return `hidden ${BB.changes} changes, ${Math.round(BB.hiddenMs)} ms`
    }
    GB.d(OB, {
      c: () => DB,
      d: () => YB
    });
    class DB {
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