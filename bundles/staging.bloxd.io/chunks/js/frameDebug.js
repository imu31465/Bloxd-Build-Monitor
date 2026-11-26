export const id = 38;
export const ids = [38];
export const modules = {
  35156: (VV, eV, xV) => {
    function JV(VV, eV) {
      return 0 === VV.length ? 0 : VV[Math.min(VV.length - 1, Math.floor(eV * VV.length))]
    }

    function YV(VV) {
      return VV.toFixed(1)
    }
    xV.d(eV, {
      c: () => YV,
      e: () => JV
    })
  },
  35152: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      FIRST_SUMMARIES_FOR_MS: () => EV,
      FIRST_SUMMARY_MS: () => bV,
      FrameDebugLog: () => AV,
      OUTLIER_BURST: () => jV,
      OUTLIER_MS: () => BV,
      OUTLIER_REFILL_MS: () => qV,
      SUMMARY_MS: () => kV,
      startFrameDebug: () => XV
    });
    var JV = xV(5301),
      YV = xV(5288),
      UV = xV(35156),
      yV = xV(3142),
      pV = xV(1364),
      QV = xV(3311);
    class nV {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = VV => {
          const eV = VV;
          this.add(eV.startTime, eV.duration, eV.blockingDuration, (0, pV.s)(eV))
        }, this.onLongTask = VV => {
          this.add(VV.startTime, VV.duration, 0, 0)
        }, null !== (0, QV.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, QV.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(VV, eV, xV, JV) {
        this.entries.set([VV, eV, xV, JV], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(VV, eV) {
        if (null === this.kind) return "long tasks n/a";
        let xV = 0,
          JV = 0,
          YV = 0,
          UV = 0;
        for (let pV = 0; pV < this.size; pV++) {
          const yV = 4 * pV,
            QV = this.entries[yV] + this.entries[yV + 1];
          QV > VV && QV <= eV + 2 && (xV++, JV += this.entries[yV + 1], YV += this.entries[yV + 2], UV += this.entries[yV + 3])
        }
        const yV = "loaf" === this.kind && xV > 0 ? ` (blocking ${YV.toFixed(0)}, script ${UV.toFixed(0)})` : "";
        return `${xV} ${this.kind} ${JV.toFixed(0)} ms${yV}`
      }
    }
    var wV = xV(35165);

    function ZV(VV, eV) {
      return eV < 0 || VV < eV ? VV : VV - eV
    }
    class vV {
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
        }, this.lastMs = 0, this.hidden = new wV.c, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(VV) {
        this.source = VV
      }
      start(VV) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = VV
      }
      take(VV) {
        var eV;
        const xV = [];
        if (!0 === (null === (eV = this.source) || void 0 === eV ? void 0 : eV.call(this, this.now)) && (JV = this.now, YV = this.before, JV.chunksReceived !== YV.chunksReceived || JV.chunksCancelled !== YV.chunksCancelled || JV.chunksStored !== YV.chunksStored || JV.jobsSent !== YV.jobsSent || JV.jobsDone !== YV.jobsDone || JV.jobsInFlight !== YV.jobsInFlight || JV.workersLive !== YV.workersLive || JV.workersRetired !== YV.workersRetired)) {
          xV.push(function(VV, eV) {
            const xV = [`chunks +${ZV(VV.chunksReceived,eV.chunksReceived)} got`, `+${ZV(VV.chunksCancelled,eV.chunksCancelled)} cancelled`];
            VV.chunksStored >= 0 && xV.push(`${VV.chunksStored} stored`);
            const JV = `jobs +${ZV(VV.jobsSent,eV.jobsSent)} sent, +${ZV(VV.jobsDone,eV.jobsDone)} done, ${VV.jobsInFlight} in flight`;
            return `${xV.join(", ")}; ${JV}; workers ${VV.workersLive} live, ${VV.workersRetired} retired`
          }(this.now, this.before));
          const VV = this.before;
          this.before = this.now, this.now = VV
        }
        var JV, YV;
        const UV = this.hidden.totals(VV),
          yV = UV.changes - this.hiddenBefore.changes,
          pV = UV.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((yV > 0 || pV > 0) && (xV.push((0, wV.f)({
            changes: yV,
            hiddenMs: pV
          })), this.hiddenBefore = UV), 0 === xV.length) return null;
        const QV = `load ${Math.round((VV-this.lastMs)/1e3)}s: ${xV.join("; ")}`;
        return this.lastMs = VV, QV
      }
    }
    class rV {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(VV, eV, xV) {
        this.count++, "paced" === VV ? this.paced++ : "skipped" === VV && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = eV, this.longestAhead = xV)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const VV = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${VV} other, longest ${this.longest} in ${(0,UV.c)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const kV = 2e4,
      bV = 5e3,
      EV = 6e4,
      BV = 250,
      jV = 10,
      qV = 6e4,
      tV = 8192;

    function FV(VV) {
      return VV.mainMs = 0, VV.renderMs = 0, VV.ticks = 0, VV.tickMs = 0, VV.rafs = 0, VV.pendingBefore = -1, VV.pendingMax = -1, VV.pendingAfter = -1, VV
    }

    function TV() {
      return FV({})
    }
    class PV {
      constructor() {
        this.intervals = new Float64Array(tV), this.totals = TV(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new rV, this.shown = 0, this.dropped = 0
      }
      reset() {
        FV(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class AV {
      constructor() {
        this.longTasks = new nV, this.summary = new PV, this.current = TV(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = jV, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new vV, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (VV, eV, xV, YV, UV, yV) => {
          this.ahead = VV.headerWord(JV.Q.Pacing) & JV.gb.AheadMask, this.frame(eV, xV, YV, UV, VV.headerWord(JV.Q.RenderUs) / 1e3, VV.headerWord(JV.Q.TicksRun), yV, VV.headerWord(JV.Q.RenderPending))
        }, this.wasmPeekPaced = VV => {
          const eV = performance.now();
          this.frame(eV, eV, "paced", VV, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (VV, eV, xV) => {
          this.frame(VV, eV, "drawn", xV, eV - VV, 0, 0, -1)
        }, this.jsTick = VV => {
          this.current.mainMs += VV, this.current.ticks++, this.current.tickMs += VV
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const VV = performance.now();
          let eV = 0;
          for (const xV of this.waiting) {
            if (xV.dueMs > VV) {
              this.waiting[eV++] = xV;
              continue
            }
            const JV = [`long frame ${(0,UV.c)(xV.intervalMs)} ms ending at ${(0,UV.c)(xV.endMs)} ms: main ${(0,UV.c)(xV.mainMs)} (render ${(0,UV.c)(xV.renderMs)}, ${xV.ticks} ticks ${(0,UV.c)(xV.tickMs)}), outside ${(0,UV.c)(xV.intervalMs-xV.mainMs)}`, `${xV.rafs} rafs`];
            xV.pendingBefore >= 0 && JV.push(`pending ${xV.pendingBefore} -> ${xV.pendingAfter} (max ${xV.pendingMax})`), JV.push(this.longTasks.describe(xV.endMs - xV.intervalMs, xV.endMs)), (0, yV.i)("frame", JV.join("; "))
          }
          this.waiting.length = eV, eV > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - VV))
        }, this.flush = () => {
          this.flushTimer = null;
          const VV = performance.now(),
            eV = Math.round((VV - this.lastFlushMs) / 1e3);
          this.lastFlushMs = VV, this.scheduleFlush();
          if (this.logSummary(eV) || this.inGameSinceFlush) {
            const eV = this.loadLine.take(VV);
            null !== eV && (0, yV.i)("frame", eV)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(VV, eV) {
        var xV;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, yV.i)("frame", `start: ${VV} client, ${eV}, dpr ${window.devicePixelRatio}, long tasks ${null!==(xV=this.longTasks.kind)&&void 0!==xV?xV:"n/a"}; a summary each ${kV/1e3} s in game (${bV/1e3} s for the first ${EV/1e3} s), outliers over ${BV} ms`)
      }
      setLoadCounts(VV) {
        this.loadLine.setSource(VV)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const VV = performance.now() - this.startedMs < EV;
        this.flushTimer = setTimeout(this.flush, VV ? bV : kV)
      }
      frame(VV, eV, xV, JV, UV, yV, pV, QV) {
        if (!JV) return this.restart(), void(this.lastPending = QV);
        const nV = this.current;
        (0, YV.b)(xV) ? (this.lastDrawnStartMs >= 0 && (nV.pendingAfter = this.lastPending, this.closeInterval(VV - this.lastDrawnStartMs, VV)), this.lastDrawnStartMs = VV, FV(nV).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(xV, eV - this.lastDrawnStartMs, this.ahead), nV.mainMs += eV - VV, nV.renderMs += UV, nV.ticks += yV, nV.tickMs += pV, nV.pendingMax = Math.max(nV.pendingMax, QV), this.lastPending = QV, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, QV)
      }
      closeInterval(VV, eV) {
        const xV = this.summary,
          JV = this.current;
        xV.frames < tV && (xV.intervals[xV.frames] = VV), xV.frames++, xV.maxMs = Math.max(xV.maxMs, VV);
        const YV = xV.totals;
        YV.mainMs += JV.mainMs, YV.renderMs += JV.renderMs, YV.ticks += JV.ticks, YV.tickMs += JV.tickMs, YV.rafs += JV.rafs, VV > 50 && xV.slow++, VV > BV && this.outlier(VV, eV)
      }
      outlier(VV, eV) {
        const xV = Math.floor((eV - this.lastRefillMs) / qV);
        xV > 0 && (this.tokens = Math.min(jV, this.tokens + xV), this.lastRefillMs += xV * qV), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: eV,
          intervalMs: VV,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(VV) {
        const eV = this.summary,
          xV = eV.totals;
        if (0 === eV.frames) return eV.undrawn.count > 0 && (0, yV.i)("frame", `${VV}s: no frames drawn, ${eV.undrawn.describe()}; pending max ${xV.pendingMax}`), eV.undrawn.count > 0;
        const JV = eV.intervals.subarray(0, Math.min(eV.frames, tV)).sort(),
          YV = [`${eV.frames} frames, median ${(0,UV.c)((0,UV.e)(JV,.5))} p95 ${(0,UV.c)((0,UV.e)(JV,.95))} max ${(0,UV.c)(eV.maxMs)} ms, ${eV.slow} over 50, ${eV.shown+eV.dropped} over ${BV}`, `${xV.rafs} rafs, ${eV.undrawn.describe()}`, `main ${(0,UV.c)(xV.mainMs)} ms (render ${(0,UV.c)(xV.renderMs)}, ${xV.ticks} ticks ${(0,UV.c)(xV.tickMs)})`];
        return xV.pendingMax >= 0 && YV.push(`pending max ${xV.pendingMax}`), this.ahead >= 0 && YV.push(`${this.ahead} frames ahead`), YV.push(`outliers ${eV.shown} logged, ${eV.dropped} dropped`), (0, yV.i)("frame", `${VV}s: ${YV.join("; ")}`), !0
      }
    }
    let NV = null;

    function XV(VV, eV) {
      return NV ??= new AV, NV.start(VV, eV), NV
    }
  },
  35165: (VV, eV, xV) => {
    function JV(VV) {
      return `hidden ${VV.changes} changes, ${Math.round(VV.hiddenMs)} ms`
    }
    xV.d(eV, {
      c: () => YV,
      f: () => JV
    });
    class YV {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(VV) {
        this.changes++, document.hidden ? this.hiddenSinceMs = VV : this.hiddenSinceMs >= 0 && (this.hiddenMs += VV - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(VV) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? VV - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);