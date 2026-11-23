export const id = 33;
export const ids = [33];
export const modules = {
  34014: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return 0 === CC.length ? 0 : CC[Math.min(CC.length - 1, Math.floor(zC * CC.length))]
    }

    function wC(CC) {
      return CC.toFixed(1)
    }
    ZC.d(zC, {
      b: () => wC,
      e: () => QC
    })
  },
  34008: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      FIRST_SUMMARIES_FOR_MS: () => pC,
      FIRST_SUMMARY_MS: () => SC,
      FrameDebugLog: () => iC,
      OUTLIER_BURST: () => GC,
      OUTLIER_MS: () => PC,
      OUTLIER_REFILL_MS: () => RC,
      SUMMARY_MS: () => gC,
      startFrameDebug: () => eC
    });
    var QC = ZC(4733),
      wC = ZC(4719),
      bC = ZC(34014),
      nC = ZC(2800),
      fC = ZC(1045),
      oC = ZC(2947);
    class qC {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = CC => {
          const zC = CC;
          this.add(zC.startTime, zC.duration, zC.blockingDuration, (0, fC.p)(zC))
        }, this.onLongTask = CC => {
          this.add(CC.startTime, CC.duration, 0, 0)
        }, null !== (0, oC.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, oC.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(CC, zC, ZC, QC) {
        this.entries.set([CC, zC, ZC, QC], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(CC, zC) {
        if (null === this.kind) return "long tasks n/a";
        let ZC = 0,
          QC = 0,
          wC = 0,
          bC = 0;
        for (let fC = 0; fC < this.size; fC++) {
          const nC = 4 * fC,
            oC = this.entries[nC] + this.entries[nC + 1];
          oC > CC && oC <= zC + 2 && (ZC++, QC += this.entries[nC + 1], wC += this.entries[nC + 2], bC += this.entries[nC + 3])
        }
        const nC = "loaf" === this.kind && ZC > 0 ? ` (blocking ${wC.toFixed(0)}, script ${bC.toFixed(0)})` : "";
        return `${ZC} ${this.kind} ${QC.toFixed(0)} ms${nC}`
      }
    }
    var FC = ZC(34016);

    function WC(CC, zC) {
      return zC < 0 || CC < zC ? CC : CC - zC
    }
    class NC {
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
        }, this.lastMs = 0, this.hidden = new FC.d, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(CC) {
        this.source = CC
      }
      start(CC) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = CC
      }
      take(CC) {
        var zC;
        const ZC = [];
        if (!0 === (null === (zC = this.source) || void 0 === zC ? void 0 : zC.call(this, this.now)) && (QC = this.now, wC = this.before, QC.chunksReceived !== wC.chunksReceived || QC.chunksCancelled !== wC.chunksCancelled || QC.chunksStored !== wC.chunksStored || QC.jobsSent !== wC.jobsSent || QC.jobsDone !== wC.jobsDone || QC.jobsInFlight !== wC.jobsInFlight || QC.workersLive !== wC.workersLive || QC.workersRetired !== wC.workersRetired)) {
          ZC.push(function(CC, zC) {
            const ZC = [`chunks +${WC(CC.chunksReceived,zC.chunksReceived)} got`, `+${WC(CC.chunksCancelled,zC.chunksCancelled)} cancelled`];
            CC.chunksStored >= 0 && ZC.push(`${CC.chunksStored} stored`);
            const QC = `jobs +${WC(CC.jobsSent,zC.jobsSent)} sent, +${WC(CC.jobsDone,zC.jobsDone)} done, ${CC.jobsInFlight} in flight`;
            return `${ZC.join(", ")}; ${QC}; workers ${CC.workersLive} live, ${CC.workersRetired} retired`
          }(this.now, this.before));
          const CC = this.before;
          this.before = this.now, this.now = CC
        }
        var QC, wC;
        const bC = this.hidden.totals(CC),
          nC = bC.changes - this.hiddenBefore.changes,
          fC = bC.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((nC > 0 || fC > 0) && (ZC.push((0, FC.f)({
            changes: nC,
            hiddenMs: fC
          })), this.hiddenBefore = bC), 0 === ZC.length) return null;
        const oC = `load ${Math.round((CC-this.lastMs)/1e3)}s: ${ZC.join("; ")}`;
        return this.lastMs = CC, oC
      }
    }
    class MC {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(CC, zC, ZC) {
        this.count++, "paced" === CC ? this.paced++ : "skipped" === CC && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = zC, this.longestAhead = ZC)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const CC = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${CC} other, longest ${this.longest} in ${(0,bC.b)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const gC = 2e4,
      SC = 5e3,
      pC = 6e4,
      PC = 250,
      GC = 10,
      RC = 6e4,
      AC = 8192;

    function xC(CC) {
      return CC.mainMs = 0, CC.renderMs = 0, CC.ticks = 0, CC.tickMs = 0, CC.rafs = 0, CC.pendingBefore = -1, CC.pendingMax = -1, CC.pendingAfter = -1, CC
    }

    function JC() {
      return xC({})
    }
    class IC {
      constructor() {
        this.intervals = new Float64Array(AC), this.totals = JC(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new MC, this.shown = 0, this.dropped = 0
      }
      reset() {
        xC(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class iC {
      constructor() {
        this.longTasks = new qC, this.summary = new IC, this.current = JC(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = GC, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new NC, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (CC, zC, ZC, wC, bC, nC) => {
          this.ahead = CC.headerWord(QC.O.Pacing) & QC.kb.AheadMask, this.frame(zC, ZC, wC, bC, CC.headerWord(QC.O.RenderUs) / 1e3, CC.headerWord(QC.O.TicksRun), nC, CC.headerWord(QC.O.RenderPending))
        }, this.wasmPeekPaced = CC => {
          const zC = performance.now();
          this.frame(zC, zC, "paced", CC, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (CC, zC, ZC) => {
          this.frame(CC, zC, "drawn", ZC, zC - CC, 0, 0, -1)
        }, this.jsTick = CC => {
          this.current.mainMs += CC, this.current.ticks++, this.current.tickMs += CC
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const CC = performance.now();
          let zC = 0;
          for (const ZC of this.waiting) {
            if (ZC.dueMs > CC) {
              this.waiting[zC++] = ZC;
              continue
            }
            const QC = [`long frame ${(0,bC.b)(ZC.intervalMs)} ms ending at ${(0,bC.b)(ZC.endMs)} ms: main ${(0,bC.b)(ZC.mainMs)} (render ${(0,bC.b)(ZC.renderMs)}, ${ZC.ticks} ticks ${(0,bC.b)(ZC.tickMs)}), outside ${(0,bC.b)(ZC.intervalMs-ZC.mainMs)}`, `${ZC.rafs} rafs`];
            ZC.pendingBefore >= 0 && QC.push(`pending ${ZC.pendingBefore} -> ${ZC.pendingAfter} (max ${ZC.pendingMax})`), QC.push(this.longTasks.describe(ZC.endMs - ZC.intervalMs, ZC.endMs)), (0, nC.i)("frame", QC.join("; "))
          }
          this.waiting.length = zC, zC > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - CC))
        }, this.flush = () => {
          this.flushTimer = null;
          const CC = performance.now(),
            zC = Math.round((CC - this.lastFlushMs) / 1e3);
          this.lastFlushMs = CC, this.scheduleFlush();
          if (this.logSummary(zC) || this.inGameSinceFlush) {
            const zC = this.loadLine.take(CC);
            null !== zC && (0, nC.i)("frame", zC)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(CC, zC) {
        var ZC;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, nC.i)("frame", `start: ${CC} client, ${zC}, dpr ${window.devicePixelRatio}, long tasks ${null!==(ZC=this.longTasks.kind)&&void 0!==ZC?ZC:"n/a"}; a summary each ${gC/1e3} s in game (${SC/1e3} s for the first ${pC/1e3} s), outliers over ${PC} ms`)
      }
      setLoadCounts(CC) {
        this.loadLine.setSource(CC)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const CC = performance.now() - this.startedMs < pC;
        this.flushTimer = setTimeout(this.flush, CC ? SC : gC)
      }
      frame(CC, zC, ZC, QC, bC, nC, fC, oC) {
        if (!QC) return this.restart(), void(this.lastPending = oC);
        const qC = this.current;
        (0, wC.d)(ZC) ? (this.lastDrawnStartMs >= 0 && (qC.pendingAfter = this.lastPending, this.closeInterval(CC - this.lastDrawnStartMs, CC)), this.lastDrawnStartMs = CC, xC(qC).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(ZC, zC - this.lastDrawnStartMs, this.ahead), qC.mainMs += zC - CC, qC.renderMs += bC, qC.ticks += nC, qC.tickMs += fC, qC.pendingMax = Math.max(qC.pendingMax, oC), this.lastPending = oC, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, oC)
      }
      closeInterval(CC, zC) {
        const ZC = this.summary,
          QC = this.current;
        ZC.frames < AC && (ZC.intervals[ZC.frames] = CC), ZC.frames++, ZC.maxMs = Math.max(ZC.maxMs, CC);
        const wC = ZC.totals;
        wC.mainMs += QC.mainMs, wC.renderMs += QC.renderMs, wC.ticks += QC.ticks, wC.tickMs += QC.tickMs, wC.rafs += QC.rafs, CC > 50 && ZC.slow++, CC > PC && this.outlier(CC, zC)
      }
      outlier(CC, zC) {
        const ZC = Math.floor((zC - this.lastRefillMs) / RC);
        ZC > 0 && (this.tokens = Math.min(GC, this.tokens + ZC), this.lastRefillMs += ZC * RC), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: zC,
          intervalMs: CC,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(CC) {
        const zC = this.summary,
          ZC = zC.totals;
        if (0 === zC.frames) return zC.undrawn.count > 0 && (0, nC.i)("frame", `${CC}s: no frames drawn, ${zC.undrawn.describe()}; pending max ${ZC.pendingMax}`), zC.undrawn.count > 0;
        const QC = zC.intervals.subarray(0, Math.min(zC.frames, AC)).sort(),
          wC = [`${zC.frames} frames, median ${(0,bC.b)((0,bC.e)(QC,.5))} p95 ${(0,bC.b)((0,bC.e)(QC,.95))} max ${(0,bC.b)(zC.maxMs)} ms, ${zC.slow} over 50, ${zC.shown+zC.dropped} over ${PC}`, `${ZC.rafs} rafs, ${zC.undrawn.describe()}`, `main ${(0,bC.b)(ZC.mainMs)} ms (render ${(0,bC.b)(ZC.renderMs)}, ${ZC.ticks} ticks ${(0,bC.b)(ZC.tickMs)})`];
        return ZC.pendingMax >= 0 && wC.push(`pending max ${ZC.pendingMax}`), this.ahead >= 0 && wC.push(`${this.ahead} frames ahead`), wC.push(`outliers ${zC.shown} logged, ${zC.dropped} dropped`), (0, nC.i)("frame", `${CC}s: ${wC.join("; ")}`), !0
      }
    }
    let vC = null;

    function eC(CC, zC) {
      return vC ??= new iC, vC.start(CC, zC), vC
    }
  },
  34016: (CC, zC, ZC) => {
    function QC(CC) {
      return `hidden ${CC.changes} changes, ${Math.round(CC.hiddenMs)} ms`
    }
    ZC.d(zC, {
      d: () => wC,
      f: () => QC
    });
    class wC {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(CC) {
        this.changes++, document.hidden ? this.hiddenSinceMs = CC : this.hiddenSinceMs >= 0 && (this.hiddenMs += CC - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(CC) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? CC - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);