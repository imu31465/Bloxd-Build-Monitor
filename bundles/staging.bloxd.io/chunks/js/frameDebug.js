export const id = 38;
export const ids = [38];
export const modules = {
  34896: (MM, rM, iM) => {
    function OM(MM, rM) {
      return 0 === MM.length ? 0 : MM[Math.min(MM.length - 1, Math.floor(rM * MM.length))]
    }

    function SM(MM) {
      return MM.toFixed(1)
    }
    iM.d(rM, {
      e: () => SM,
      f: () => OM
    })
  },
  34891: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      FIRST_SUMMARIES_FOR_MS: () => dM,
      FIRST_SUMMARY_MS: () => JM,
      FrameDebugLog: () => bM,
      OUTLIER_BURST: () => lM,
      OUTLIER_MS: () => yM,
      OUTLIER_REFILL_MS: () => EM,
      SUMMARY_MS: () => hM,
      startFrameDebug: () => tM
    });
    var OM = iM(5200),
      SM = iM(5196),
      jM = iM(34896),
      aM = iM(3122),
      PM = iM(1341),
      nM = iM(3306);
    class QM {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = MM => {
          const rM = MM;
          this.add(rM.startTime, rM.duration, rM.blockingDuration, (0, PM.q)(rM))
        }, this.onLongTask = MM => {
          this.add(MM.startTime, MM.duration, 0, 0)
        }, null !== (0, nM.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, nM.d)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(MM, rM, iM, OM) {
        this.entries.set([MM, rM, iM, OM], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(MM, rM) {
        if (null === this.kind) return "long tasks n/a";
        let iM = 0,
          OM = 0,
          SM = 0,
          jM = 0;
        for (let PM = 0; PM < this.size; PM++) {
          const aM = 4 * PM,
            nM = this.entries[aM] + this.entries[aM + 1];
          nM > MM && nM <= rM + 2 && (iM++, OM += this.entries[aM + 1], SM += this.entries[aM + 2], jM += this.entries[aM + 3])
        }
        const aM = "loaf" === this.kind && iM > 0 ? ` (blocking ${SM.toFixed(0)}, script ${jM.toFixed(0)})` : "";
        return `${iM} ${this.kind} ${OM.toFixed(0)} ms${aM}`
      }
    }
    var zM = iM(34904);

    function LM(MM, rM) {
      return rM < 0 || MM < rM ? MM : MM - rM
    }
    class mM {
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
        }, this.lastMs = 0, this.hidden = new zM.b, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(MM) {
        this.source = MM
      }
      start(MM) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = MM
      }
      take(MM) {
        var rM;
        const iM = [];
        if (!0 === (null === (rM = this.source) || void 0 === rM ? void 0 : rM.call(this, this.now)) && (OM = this.now, SM = this.before, OM.chunksReceived !== SM.chunksReceived || OM.chunksCancelled !== SM.chunksCancelled || OM.chunksStored !== SM.chunksStored || OM.jobsSent !== SM.jobsSent || OM.jobsDone !== SM.jobsDone || OM.jobsInFlight !== SM.jobsInFlight || OM.workersLive !== SM.workersLive || OM.workersRetired !== SM.workersRetired)) {
          iM.push(function(MM, rM) {
            const iM = [`chunks +${LM(MM.chunksReceived,rM.chunksReceived)} got`, `+${LM(MM.chunksCancelled,rM.chunksCancelled)} cancelled`];
            MM.chunksStored >= 0 && iM.push(`${MM.chunksStored} stored`);
            const OM = `jobs +${LM(MM.jobsSent,rM.jobsSent)} sent, +${LM(MM.jobsDone,rM.jobsDone)} done, ${MM.jobsInFlight} in flight`;
            return `${iM.join(", ")}; ${OM}; workers ${MM.workersLive} live, ${MM.workersRetired} retired`
          }(this.now, this.before));
          const MM = this.before;
          this.before = this.now, this.now = MM
        }
        var OM, SM;
        const jM = this.hidden.totals(MM),
          aM = jM.changes - this.hiddenBefore.changes,
          PM = jM.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((aM > 0 || PM > 0) && (iM.push((0, zM.c)({
            changes: aM,
            hiddenMs: PM
          })), this.hiddenBefore = jM), 0 === iM.length) return null;
        const nM = `load ${Math.round((MM-this.lastMs)/1e3)}s: ${iM.join("; ")}`;
        return this.lastMs = MM, nM
      }
    }
    class HM {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(MM, rM, iM) {
        this.count++, "paced" === MM ? this.paced++ : "skipped" === MM && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = rM, this.longestAhead = iM)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const MM = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${MM} other, longest ${this.longest} in ${(0,jM.e)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const hM = 2e4,
      JM = 5e3,
      dM = 6e4,
      yM = 250,
      lM = 10,
      EM = 6e4,
      UM = 8192;

    function GM(MM) {
      return MM.mainMs = 0, MM.renderMs = 0, MM.ticks = 0, MM.tickMs = 0, MM.rafs = 0, MM.pendingBefore = -1, MM.pendingMax = -1, MM.pendingAfter = -1, MM
    }

    function CM() {
      return GM({})
    }
    class eM {
      constructor() {
        this.intervals = new Float64Array(UM), this.totals = CM(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new HM, this.shown = 0, this.dropped = 0
      }
      reset() {
        GM(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class bM {
      constructor() {
        this.longTasks = new QM, this.summary = new eM, this.current = CM(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = lM, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new mM, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (MM, rM, iM, SM, jM, aM) => {
          this.ahead = MM.headerWord(OM.K.Pacing) & OM._.AheadMask, this.frame(rM, iM, SM, jM, MM.headerWord(OM.K.RenderUs) / 1e3, MM.headerWord(OM.K.TicksRun), aM, MM.headerWord(OM.K.RenderPending))
        }, this.wasmPeekPaced = MM => {
          const rM = performance.now();
          this.frame(rM, rM, "paced", MM, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (MM, rM, iM) => {
          this.frame(MM, rM, "drawn", iM, rM - MM, 0, 0, -1)
        }, this.jsTick = MM => {
          this.current.mainMs += MM, this.current.ticks++, this.current.tickMs += MM
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const MM = performance.now();
          let rM = 0;
          for (const iM of this.waiting) {
            if (iM.dueMs > MM) {
              this.waiting[rM++] = iM;
              continue
            }
            const OM = [`long frame ${(0,jM.e)(iM.intervalMs)} ms ending at ${(0,jM.e)(iM.endMs)} ms: main ${(0,jM.e)(iM.mainMs)} (render ${(0,jM.e)(iM.renderMs)}, ${iM.ticks} ticks ${(0,jM.e)(iM.tickMs)}), outside ${(0,jM.e)(iM.intervalMs-iM.mainMs)}`, `${iM.rafs} rafs`];
            iM.pendingBefore >= 0 && OM.push(`pending ${iM.pendingBefore} -> ${iM.pendingAfter} (max ${iM.pendingMax})`), OM.push(this.longTasks.describe(iM.endMs - iM.intervalMs, iM.endMs)), (0, aM.k)("frame", OM.join("; "))
          }
          this.waiting.length = rM, rM > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - MM))
        }, this.flush = () => {
          this.flushTimer = null;
          const MM = performance.now(),
            rM = Math.round((MM - this.lastFlushMs) / 1e3);
          this.lastFlushMs = MM, this.scheduleFlush();
          if (this.logSummary(rM) || this.inGameSinceFlush) {
            const rM = this.loadLine.take(MM);
            null !== rM && (0, aM.k)("frame", rM)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(MM, rM) {
        var iM;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, aM.k)("frame", `start: ${MM} client, ${rM}, dpr ${window.devicePixelRatio}, long tasks ${null!==(iM=this.longTasks.kind)&&void 0!==iM?iM:"n/a"}; a summary each ${hM/1e3} s in game (${JM/1e3} s for the first ${dM/1e3} s), outliers over ${yM} ms`)
      }
      setLoadCounts(MM) {
        this.loadLine.setSource(MM)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const MM = performance.now() - this.startedMs < dM;
        this.flushTimer = setTimeout(this.flush, MM ? JM : hM)
      }
      frame(MM, rM, iM, OM, jM, aM, PM, nM) {
        if (!OM) return this.restart(), void(this.lastPending = nM);
        const QM = this.current;
        (0, SM.d)(iM) ? (this.lastDrawnStartMs >= 0 && (QM.pendingAfter = this.lastPending, this.closeInterval(MM - this.lastDrawnStartMs, MM)), this.lastDrawnStartMs = MM, GM(QM).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(iM, rM - this.lastDrawnStartMs, this.ahead), QM.mainMs += rM - MM, QM.renderMs += jM, QM.ticks += aM, QM.tickMs += PM, QM.pendingMax = Math.max(QM.pendingMax, nM), this.lastPending = nM, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, nM)
      }
      closeInterval(MM, rM) {
        const iM = this.summary,
          OM = this.current;
        iM.frames < UM && (iM.intervals[iM.frames] = MM), iM.frames++, iM.maxMs = Math.max(iM.maxMs, MM);
        const SM = iM.totals;
        SM.mainMs += OM.mainMs, SM.renderMs += OM.renderMs, SM.ticks += OM.ticks, SM.tickMs += OM.tickMs, SM.rafs += OM.rafs, MM > 50 && iM.slow++, MM > yM && this.outlier(MM, rM)
      }
      outlier(MM, rM) {
        const iM = Math.floor((rM - this.lastRefillMs) / EM);
        iM > 0 && (this.tokens = Math.min(lM, this.tokens + iM), this.lastRefillMs += iM * EM), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: rM,
          intervalMs: MM,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(MM) {
        const rM = this.summary,
          iM = rM.totals;
        if (0 === rM.frames) return rM.undrawn.count > 0 && (0, aM.k)("frame", `${MM}s: no frames drawn, ${rM.undrawn.describe()}; pending max ${iM.pendingMax}`), rM.undrawn.count > 0;
        const OM = rM.intervals.subarray(0, Math.min(rM.frames, UM)).sort(),
          SM = [`${rM.frames} frames, median ${(0,jM.e)((0,jM.f)(OM,.5))} p95 ${(0,jM.e)((0,jM.f)(OM,.95))} max ${(0,jM.e)(rM.maxMs)} ms, ${rM.slow} over 50, ${rM.shown+rM.dropped} over ${yM}`, `${iM.rafs} rafs, ${rM.undrawn.describe()}`, `main ${(0,jM.e)(iM.mainMs)} ms (render ${(0,jM.e)(iM.renderMs)}, ${iM.ticks} ticks ${(0,jM.e)(iM.tickMs)})`];
        return iM.pendingMax >= 0 && SM.push(`pending max ${iM.pendingMax}`), this.ahead >= 0 && SM.push(`${this.ahead} frames ahead`), SM.push(`outliers ${rM.shown} logged, ${rM.dropped} dropped`), (0, aM.k)("frame", `${MM}s: ${SM.join("; ")}`), !0
      }
    }
    let wM = null;

    function tM(MM, rM) {
      return wM ??= new bM, wM.start(MM, rM), wM
    }
  },
  34904: (MM, rM, iM) => {
    function OM(MM) {
      return `hidden ${MM.changes} changes, ${Math.round(MM.hiddenMs)} ms`
    }
    iM.d(rM, {
      b: () => SM,
      c: () => OM
    });
    class SM {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(MM) {
        this.changes++, document.hidden ? this.hiddenSinceMs = MM : this.hiddenSinceMs >= 0 && (this.hiddenMs += MM - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(MM) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? MM - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);