export const id = 39;
export const ids = [39];
export const modules = {
  34729: (UU, XU, zU) => {
    function cU(UU, XU) {
      return 0 === UU.length ? 0 : UU[Math.min(UU.length - 1, Math.floor(XU * UU.length))]
    }

    function yU(UU) {
      return UU.toFixed(1)
    }
    zU.d(XU, {
      b: () => yU,
      f: () => cU
    })
  },
  34724: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      FIRST_SUMMARIES_FOR_MS: () => tU,
      FIRST_SUMMARY_MS: () => aU,
      FrameDebugLog: () => WU,
      OUTLIER_BURST: () => kU,
      OUTLIER_MS: () => gU,
      OUTLIER_REFILL_MS: () => GU,
      SUMMARY_MS: () => pU,
      startFrameDebug: () => LU
    });
    var cU = zU(5326),
      yU = zU(5315),
      QU = zU(34729),
      AU = zU(3099),
      FU = zU(1330),
      oU = zU(3276);
    class DU {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = UU => {
          const XU = UU;
          this.add(XU.startTime, XU.duration, XU.blockingDuration, (0, FU.s)(XU))
        }, this.onLongTask = UU => {
          this.add(UU.startTime, UU.duration, 0, 0)
        }, null !== (0, oU.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, oU.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(UU, XU, zU, cU) {
        this.entries.set([UU, XU, zU, cU], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(UU, XU) {
        if (null === this.kind) return "long tasks n/a";
        let zU = 0,
          cU = 0,
          yU = 0,
          QU = 0;
        for (let FU = 0; FU < this.size; FU++) {
          const AU = 4 * FU,
            oU = this.entries[AU] + this.entries[AU + 1];
          oU > UU && oU <= XU + 2 && (zU++, cU += this.entries[AU + 1], yU += this.entries[AU + 2], QU += this.entries[AU + 3])
        }
        const AU = "loaf" === this.kind && zU > 0 ? ` (blocking ${yU.toFixed(0)}, script ${QU.toFixed(0)})` : "";
        return `${zU} ${this.kind} ${cU.toFixed(0)} ms${AU}`
      }
    }
    var EU = zU(34733);

    function YU(UU, XU) {
      return XU < 0 || UU < XU ? UU : UU - XU
    }
    class NU {
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
        }, this.lastMs = 0, this.hidden = new EU.e, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(UU) {
        this.source = UU
      }
      start(UU) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = UU
      }
      take(UU) {
        var XU;
        const zU = [];
        if (!0 === (null === (XU = this.source) || void 0 === XU ? void 0 : XU.call(this, this.now)) && (cU = this.now, yU = this.before, cU.chunksReceived !== yU.chunksReceived || cU.chunksCancelled !== yU.chunksCancelled || cU.chunksStored !== yU.chunksStored || cU.jobsSent !== yU.jobsSent || cU.jobsDone !== yU.jobsDone || cU.jobsInFlight !== yU.jobsInFlight || cU.workersLive !== yU.workersLive || cU.workersRetired !== yU.workersRetired)) {
          zU.push(function(UU, XU) {
            const zU = [`chunks +${YU(UU.chunksReceived,XU.chunksReceived)} got`, `+${YU(UU.chunksCancelled,XU.chunksCancelled)} cancelled`];
            UU.chunksStored >= 0 && zU.push(`${UU.chunksStored} stored`);
            const cU = `jobs +${YU(UU.jobsSent,XU.jobsSent)} sent, +${YU(UU.jobsDone,XU.jobsDone)} done, ${UU.jobsInFlight} in flight`;
            return `${zU.join(", ")}; ${cU}; workers ${UU.workersLive} live, ${UU.workersRetired} retired`
          }(this.now, this.before));
          const UU = this.before;
          this.before = this.now, this.now = UU
        }
        var cU, yU;
        const QU = this.hidden.totals(UU),
          AU = QU.changes - this.hiddenBefore.changes,
          FU = QU.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((AU > 0 || FU > 0) && (zU.push((0, EU.i)({
            changes: AU,
            hiddenMs: FU
          })), this.hiddenBefore = QU), 0 === zU.length) return null;
        const oU = `load ${Math.round((UU-this.lastMs)/1e3)}s: ${zU.join("; ")}`;
        return this.lastMs = UU, oU
      }
    }
    class IU {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(UU, XU, zU) {
        this.count++, "paced" === UU ? this.paced++ : "skipped" === UU && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = XU, this.longestAhead = zU)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const UU = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${UU} other, longest ${this.longest} in ${(0,QU.b)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const pU = 2e4,
      aU = 5e3,
      tU = 6e4,
      gU = 250,
      kU = 10,
      GU = 6e4,
      BU = 8192;

    function ZU(UU) {
      return UU.mainMs = 0, UU.renderMs = 0, UU.ticks = 0, UU.tickMs = 0, UU.rafs = 0, UU.pendingBefore = -1, UU.pendingMax = -1, UU.pendingAfter = -1, UU
    }

    function RU() {
      return ZU({})
    }
    class PU {
      constructor() {
        this.intervals = new Float64Array(BU), this.totals = RU(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new IU, this.shown = 0, this.dropped = 0
      }
      reset() {
        ZU(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class WU {
      constructor() {
        this.longTasks = new DU, this.summary = new PU, this.current = RU(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = kU, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new NU, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (UU, XU, zU, yU, QU, AU) => {
          this.ahead = UU.headerWord(cU.I.Pacing) & cU.cb.AheadMask, this.frame(XU, zU, yU, QU, UU.headerWord(cU.I.RenderUs) / 1e3, UU.headerWord(cU.I.TicksRun), AU, UU.headerWord(cU.I.RenderPending))
        }, this.wasmPeekPaced = UU => {
          const XU = performance.now();
          this.frame(XU, XU, "paced", UU, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (UU, XU, zU) => {
          this.frame(UU, XU, "drawn", zU, XU - UU, 0, 0, -1)
        }, this.jsTick = UU => {
          this.current.mainMs += UU, this.current.ticks++, this.current.tickMs += UU
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const UU = performance.now();
          let XU = 0;
          for (const zU of this.waiting) {
            if (zU.dueMs > UU) {
              this.waiting[XU++] = zU;
              continue
            }
            const cU = [`long frame ${(0,QU.b)(zU.intervalMs)} ms ending at ${(0,QU.b)(zU.endMs)} ms: main ${(0,QU.b)(zU.mainMs)} (render ${(0,QU.b)(zU.renderMs)}, ${zU.ticks} ticks ${(0,QU.b)(zU.tickMs)}), outside ${(0,QU.b)(zU.intervalMs-zU.mainMs)}`, `${zU.rafs} rafs`];
            zU.pendingBefore >= 0 && cU.push(`pending ${zU.pendingBefore} -> ${zU.pendingAfter} (max ${zU.pendingMax})`), cU.push(this.longTasks.describe(zU.endMs - zU.intervalMs, zU.endMs)), (0, AU.l)("frame", cU.join("; "))
          }
          this.waiting.length = XU, XU > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - UU))
        }, this.flush = () => {
          this.flushTimer = null;
          const UU = performance.now(),
            XU = Math.round((UU - this.lastFlushMs) / 1e3);
          this.lastFlushMs = UU, this.scheduleFlush();
          if (this.logSummary(XU) || this.inGameSinceFlush) {
            const XU = this.loadLine.take(UU);
            null !== XU && (0, AU.l)("frame", XU)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(UU, XU) {
        var zU;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, AU.l)("frame", `start: ${UU} client, ${XU}, dpr ${window.devicePixelRatio}, long tasks ${null!==(zU=this.longTasks.kind)&&void 0!==zU?zU:"n/a"}; a summary each ${pU/1e3} s in game (${aU/1e3} s for the first ${tU/1e3} s), outliers over ${gU} ms`)
      }
      setLoadCounts(UU) {
        this.loadLine.setSource(UU)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const UU = performance.now() - this.startedMs < tU;
        this.flushTimer = setTimeout(this.flush, UU ? aU : pU)
      }
      frame(UU, XU, zU, cU, QU, AU, FU, oU) {
        if (!cU) return this.restart(), void(this.lastPending = oU);
        const DU = this.current;
        (0, yU.c)(zU) ? (this.lastDrawnStartMs >= 0 && (DU.pendingAfter = this.lastPending, this.closeInterval(UU - this.lastDrawnStartMs, UU)), this.lastDrawnStartMs = UU, ZU(DU).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(zU, XU - this.lastDrawnStartMs, this.ahead), DU.mainMs += XU - UU, DU.renderMs += QU, DU.ticks += AU, DU.tickMs += FU, DU.pendingMax = Math.max(DU.pendingMax, oU), this.lastPending = oU, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, oU)
      }
      closeInterval(UU, XU) {
        const zU = this.summary,
          cU = this.current;
        zU.frames < BU && (zU.intervals[zU.frames] = UU), zU.frames++, zU.maxMs = Math.max(zU.maxMs, UU);
        const yU = zU.totals;
        yU.mainMs += cU.mainMs, yU.renderMs += cU.renderMs, yU.ticks += cU.ticks, yU.tickMs += cU.tickMs, yU.rafs += cU.rafs, UU > 50 && zU.slow++, UU > gU && this.outlier(UU, XU)
      }
      outlier(UU, XU) {
        const zU = Math.floor((XU - this.lastRefillMs) / GU);
        zU > 0 && (this.tokens = Math.min(kU, this.tokens + zU), this.lastRefillMs += zU * GU), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: XU,
          intervalMs: UU,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(UU) {
        const XU = this.summary,
          zU = XU.totals;
        if (0 === XU.frames) return XU.undrawn.count > 0 && (0, AU.l)("frame", `${UU}s: no frames drawn, ${XU.undrawn.describe()}; pending max ${zU.pendingMax}`), XU.undrawn.count > 0;
        const cU = XU.intervals.subarray(0, Math.min(XU.frames, BU)).sort(),
          yU = [`${XU.frames} frames, median ${(0,QU.b)((0,QU.f)(cU,.5))} p95 ${(0,QU.b)((0,QU.f)(cU,.95))} max ${(0,QU.b)(XU.maxMs)} ms, ${XU.slow} over 50, ${XU.shown+XU.dropped} over ${gU}`, `${zU.rafs} rafs, ${XU.undrawn.describe()}`, `main ${(0,QU.b)(zU.mainMs)} ms (render ${(0,QU.b)(zU.renderMs)}, ${zU.ticks} ticks ${(0,QU.b)(zU.tickMs)})`];
        return zU.pendingMax >= 0 && yU.push(`pending max ${zU.pendingMax}`), this.ahead >= 0 && yU.push(`${this.ahead} frames ahead`), yU.push(`outliers ${XU.shown} logged, ${XU.dropped} dropped`), (0, AU.l)("frame", `${UU}s: ${yU.join("; ")}`), !0
      }
    }
    let dU = null;

    function LU(UU, XU) {
      return dU ??= new WU, dU.start(UU, XU), dU
    }
  },
  34733: (UU, XU, zU) => {
    function cU(UU) {
      return `hidden ${UU.changes} changes, ${Math.round(UU.hiddenMs)} ms`
    }
    zU.d(XU, {
      e: () => yU,
      i: () => cU
    });
    class yU {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(UU) {
        this.changes++, document.hidden ? this.hiddenSinceMs = UU : this.hiddenSinceMs >= 0 && (this.hiddenMs += UU - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(UU) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? UU - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);