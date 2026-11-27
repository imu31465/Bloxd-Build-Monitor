export const id = 40;
export const ids = [40];
export const modules = {
  35005: (RR, JR, GR) => {
    function yR(RR, JR) {
      return 0 === RR.length ? 0 : RR[Math.min(RR.length - 1, Math.floor(JR * RR.length))]
    }

    function tR(RR) {
      return RR.toFixed(1)
    }
    GR.d(JR, {
      d: () => tR,
      g: () => yR
    })
  },
  34998: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      FIRST_SUMMARIES_FOR_MS: () => LR,
      FIRST_SUMMARY_MS: () => aR,
      FrameDebugLog: () => BR,
      OUTLIER_BURST: () => UR,
      OUTLIER_MS: () => nR,
      OUTLIER_REFILL_MS: () => WR,
      SUMMARY_MS: () => eR,
      startFrameDebug: () => pR
    });
    var yR = GR(5685),
      tR = GR(5671),
      uR = GR(35005),
      ZR = GR(3960),
      qR = GR(1419),
      iR = GR(4128);
    class fR {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = RR => {
          const JR = RR;
          this.add(JR.startTime, JR.duration, JR.blockingDuration, (0, qR.m)(JR))
        }, this.onLongTask = RR => {
          this.add(RR.startTime, RR.duration, 0, 0)
        }, null !== (0, iR.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, iR.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(RR, JR, GR, yR) {
        this.entries.set([RR, JR, GR, yR], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(RR, JR) {
        if (null === this.kind) return "long tasks n/a";
        let GR = 0,
          yR = 0,
          tR = 0,
          uR = 0;
        for (let qR = 0; qR < this.size; qR++) {
          const ZR = 4 * qR,
            iR = this.entries[ZR] + this.entries[ZR + 1];
          iR > RR && iR <= JR + 2 && (GR++, yR += this.entries[ZR + 1], tR += this.entries[ZR + 2], uR += this.entries[ZR + 3])
        }
        const ZR = "loaf" === this.kind && GR > 0 ? ` (blocking ${tR.toFixed(0)}, script ${uR.toFixed(0)})` : "";
        return `${GR} ${this.kind} ${yR.toFixed(0)} ms${ZR}`
      }
    }
    var VR = GR(35012);

    function KR(RR, JR) {
      return JR < 0 || RR < JR ? RR : RR - JR
    }
    class wR {
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
        }, this.lastMs = 0, this.hidden = new VR.b, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(RR) {
        this.source = RR
      }
      start(RR) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = RR
      }
      take(RR) {
        var JR;
        const GR = [];
        if (!0 === (null === (JR = this.source) || void 0 === JR ? void 0 : JR.call(this, this.now)) && (yR = this.now, tR = this.before, yR.chunksReceived !== tR.chunksReceived || yR.chunksCancelled !== tR.chunksCancelled || yR.chunksStored !== tR.chunksStored || yR.jobsSent !== tR.jobsSent || yR.jobsDone !== tR.jobsDone || yR.jobsInFlight !== tR.jobsInFlight || yR.workersLive !== tR.workersLive || yR.workersRetired !== tR.workersRetired)) {
          GR.push(function(RR, JR) {
            const GR = [`chunks +${KR(RR.chunksReceived,JR.chunksReceived)} got`, `+${KR(RR.chunksCancelled,JR.chunksCancelled)} cancelled`];
            RR.chunksStored >= 0 && GR.push(`${RR.chunksStored} stored`);
            const yR = `jobs +${KR(RR.jobsSent,JR.jobsSent)} sent, +${KR(RR.jobsDone,JR.jobsDone)} done, ${RR.jobsInFlight} in flight`;
            return `${GR.join(", ")}; ${yR}; workers ${RR.workersLive} live, ${RR.workersRetired} retired`
          }(this.now, this.before));
          const RR = this.before;
          this.before = this.now, this.now = RR
        }
        var yR, tR;
        const uR = this.hidden.totals(RR),
          ZR = uR.changes - this.hiddenBefore.changes,
          qR = uR.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((ZR > 0 || qR > 0) && (GR.push((0, VR.c)({
            changes: ZR,
            hiddenMs: qR
          })), this.hiddenBefore = uR), 0 === GR.length) return null;
        const iR = `load ${Math.round((RR-this.lastMs)/1e3)}s: ${GR.join("; ")}`;
        return this.lastMs = RR, iR
      }
    }
    class rR {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(RR, JR, GR) {
        this.count++, "paced" === RR ? this.paced++ : "skipped" === RR && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = JR, this.longestAhead = GR)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const RR = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${RR} other, longest ${this.longest} in ${(0,uR.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const eR = 2e4,
      aR = 5e3,
      LR = 6e4,
      nR = 250,
      UR = 10,
      WR = 6e4,
      AR = 8192;

    function CR(RR) {
      return RR.mainMs = 0, RR.renderMs = 0, RR.ticks = 0, RR.tickMs = 0, RR.rafs = 0, RR.pendingBefore = -1, RR.pendingMax = -1, RR.pendingAfter = -1, RR
    }

    function XR() {
      return CR({})
    }
    class MR {
      constructor() {
        this.intervals = new Float64Array(AR), this.totals = XR(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new rR, this.shown = 0, this.dropped = 0
      }
      reset() {
        CR(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class BR {
      constructor() {
        this.longTasks = new fR, this.summary = new MR, this.current = XR(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = UR, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new wR, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (RR, JR, GR, tR, uR, ZR) => {
          this.ahead = RR.headerWord(yR.L.Pacing) & yR.hb.AheadMask, this.frame(JR, GR, tR, uR, RR.headerWord(yR.L.RenderUs) / 1e3, RR.headerWord(yR.L.TicksRun), ZR, RR.headerWord(yR.L.RenderPending))
        }, this.wasmPeekPaced = RR => {
          const JR = performance.now();
          this.frame(JR, JR, "paced", RR, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (RR, JR, GR) => {
          this.frame(RR, JR, "drawn", GR, JR - RR, 0, 0, -1)
        }, this.jsTick = RR => {
          this.current.mainMs += RR, this.current.ticks++, this.current.tickMs += RR
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const RR = performance.now();
          let JR = 0;
          for (const GR of this.waiting) {
            if (GR.dueMs > RR) {
              this.waiting[JR++] = GR;
              continue
            }
            const yR = [`long frame ${(0,uR.d)(GR.intervalMs)} ms ending at ${(0,uR.d)(GR.endMs)} ms: main ${(0,uR.d)(GR.mainMs)} (render ${(0,uR.d)(GR.renderMs)}, ${GR.ticks} ticks ${(0,uR.d)(GR.tickMs)}), outside ${(0,uR.d)(GR.intervalMs-GR.mainMs)}`, `${GR.rafs} rafs`];
            GR.pendingBefore >= 0 && yR.push(`pending ${GR.pendingBefore} -> ${GR.pendingAfter} (max ${GR.pendingMax})`), yR.push(this.longTasks.describe(GR.endMs - GR.intervalMs, GR.endMs)), (0, ZR.k)("frame", yR.join("; "))
          }
          this.waiting.length = JR, JR > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - RR))
        }, this.flush = () => {
          this.flushTimer = null;
          const RR = performance.now(),
            JR = Math.round((RR - this.lastFlushMs) / 1e3);
          this.lastFlushMs = RR, this.scheduleFlush();
          if (this.logSummary(JR) || this.inGameSinceFlush) {
            const JR = this.loadLine.take(RR);
            null !== JR && (0, ZR.k)("frame", JR)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(RR, JR) {
        var GR;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, ZR.k)("frame", `start: ${RR} client, ${JR}, dpr ${window.devicePixelRatio}, long tasks ${null!==(GR=this.longTasks.kind)&&void 0!==GR?GR:"n/a"}; a summary each ${eR/1e3} s in game (${aR/1e3} s for the first ${LR/1e3} s), outliers over ${nR} ms`)
      }
      setLoadCounts(RR) {
        this.loadLine.setSource(RR)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const RR = performance.now() - this.startedMs < LR;
        this.flushTimer = setTimeout(this.flush, RR ? aR : eR)
      }
      frame(RR, JR, GR, yR, uR, ZR, qR, iR) {
        if (!yR) return this.restart(), void(this.lastPending = iR);
        const fR = this.current;
        (0, tR.c)(GR) ? (this.lastDrawnStartMs >= 0 && (fR.pendingAfter = this.lastPending, this.closeInterval(RR - this.lastDrawnStartMs, RR)), this.lastDrawnStartMs = RR, CR(fR).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(GR, JR - this.lastDrawnStartMs, this.ahead), fR.mainMs += JR - RR, fR.renderMs += uR, fR.ticks += ZR, fR.tickMs += qR, fR.pendingMax = Math.max(fR.pendingMax, iR), this.lastPending = iR, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, iR)
      }
      closeInterval(RR, JR) {
        const GR = this.summary,
          yR = this.current;
        GR.frames < AR && (GR.intervals[GR.frames] = RR), GR.frames++, GR.maxMs = Math.max(GR.maxMs, RR);
        const tR = GR.totals;
        tR.mainMs += yR.mainMs, tR.renderMs += yR.renderMs, tR.ticks += yR.ticks, tR.tickMs += yR.tickMs, tR.rafs += yR.rafs, RR > 50 && GR.slow++, RR > nR && this.outlier(RR, JR)
      }
      outlier(RR, JR) {
        const GR = Math.floor((JR - this.lastRefillMs) / WR);
        GR > 0 && (this.tokens = Math.min(UR, this.tokens + GR), this.lastRefillMs += GR * WR), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: JR,
          intervalMs: RR,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(RR) {
        const JR = this.summary,
          GR = JR.totals;
        if (0 === JR.frames) return JR.undrawn.count > 0 && (0, ZR.k)("frame", `${RR}s: no frames drawn, ${JR.undrawn.describe()}; pending max ${GR.pendingMax}`), JR.undrawn.count > 0;
        const yR = JR.intervals.subarray(0, Math.min(JR.frames, AR)).sort(),
          tR = [`${JR.frames} frames, median ${(0,uR.d)((0,uR.g)(yR,.5))} p95 ${(0,uR.d)((0,uR.g)(yR,.95))} max ${(0,uR.d)(JR.maxMs)} ms, ${JR.slow} over 50, ${JR.shown+JR.dropped} over ${nR}`, `${GR.rafs} rafs, ${JR.undrawn.describe()}`, `main ${(0,uR.d)(GR.mainMs)} ms (render ${(0,uR.d)(GR.renderMs)}, ${GR.ticks} ticks ${(0,uR.d)(GR.tickMs)})`];
        return GR.pendingMax >= 0 && tR.push(`pending max ${GR.pendingMax}`), this.ahead >= 0 && tR.push(`${this.ahead} frames ahead`), tR.push(`outliers ${JR.shown} logged, ${JR.dropped} dropped`), (0, ZR.k)("frame", `${RR}s: ${tR.join("; ")}`), !0
      }
    }
    let lR = null;

    function pR(RR, JR) {
      return lR ??= new BR, lR.start(RR, JR), lR
    }
  },
  35012: (RR, JR, GR) => {
    function yR(RR) {
      return `hidden ${RR.changes} changes, ${Math.round(RR.hiddenMs)} ms`
    }
    GR.d(JR, {
      b: () => tR,
      c: () => yR
    });
    class tR {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(RR) {
        this.changes++, document.hidden ? this.hiddenSinceMs = RR : this.hiddenSinceMs >= 0 && (this.hiddenMs += RR - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(RR) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? RR - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);