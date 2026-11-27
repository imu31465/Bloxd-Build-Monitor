export const id = 39;
export const ids = [39];
export const modules = {
  34730: (ee, ie, He) => {
    function ye(ee, ie) {
      return 0 === ee.length ? 0 : ee[Math.min(ee.length - 1, Math.floor(ie * ee.length))]
    }

    function be(ee) {
      return ee.toFixed(1)
    }
    He.d(ie, {
      d: () => be,
      e: () => ye
    })
  },
  34721: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      FIRST_SUMMARIES_FOR_MS: () => pe,
      FIRST_SUMMARY_MS: () => Te,
      FrameDebugLog: () => We,
      OUTLIER_BURST: () => ze,
      OUTLIER_MS: () => Xe,
      OUTLIER_REFILL_MS: () => Be,
      SUMMARY_MS: () => fe,
      startFrameDebug: () => Ze
    });
    var ye = He(5279),
      be = He(5265),
      Me = He(34730),
      Ke = He(3037),
      Ue = He(1281),
      Fe = He(3207);
    class Je {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = ee => {
          const ie = ee;
          this.add(ie.startTime, ie.duration, ie.blockingDuration, (0, Ue.q)(ie))
        }, this.onLongTask = ee => {
          this.add(ee.startTime, ee.duration, 0, 0)
        }, null !== (0, Fe.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Fe.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(ee, ie, He, ye) {
        this.entries.set([ee, ie, He, ye], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(ee, ie) {
        if (null === this.kind) return "long tasks n/a";
        let He = 0,
          ye = 0,
          be = 0,
          Me = 0;
        for (let Ue = 0; Ue < this.size; Ue++) {
          const Ke = 4 * Ue,
            Fe = this.entries[Ke] + this.entries[Ke + 1];
          Fe > ee && Fe <= ie + 2 && (He++, ye += this.entries[Ke + 1], be += this.entries[Ke + 2], Me += this.entries[Ke + 3])
        }
        const Ke = "loaf" === this.kind && He > 0 ? ` (blocking ${be.toFixed(0)}, script ${Me.toFixed(0)})` : "";
        return `${He} ${this.kind} ${ye.toFixed(0)} ms${Ke}`
      }
    }
    var oe = He(34736);

    function Re(ee, ie) {
      return ie < 0 || ee < ie ? ee : ee - ie
    }
    class ke {
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
        }, this.lastMs = 0, this.hidden = new oe.c, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(ee) {
        this.source = ee
      }
      start(ee) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = ee
      }
      take(ee) {
        var ie;
        const He = [];
        if (!0 === (null === (ie = this.source) || void 0 === ie ? void 0 : ie.call(this, this.now)) && (ye = this.now, be = this.before, ye.chunksReceived !== be.chunksReceived || ye.chunksCancelled !== be.chunksCancelled || ye.chunksStored !== be.chunksStored || ye.jobsSent !== be.jobsSent || ye.jobsDone !== be.jobsDone || ye.jobsInFlight !== be.jobsInFlight || ye.workersLive !== be.workersLive || ye.workersRetired !== be.workersRetired)) {
          He.push(function(ee, ie) {
            const He = [`chunks +${Re(ee.chunksReceived,ie.chunksReceived)} got`, `+${Re(ee.chunksCancelled,ie.chunksCancelled)} cancelled`];
            ee.chunksStored >= 0 && He.push(`${ee.chunksStored} stored`);
            const ye = `jobs +${Re(ee.jobsSent,ie.jobsSent)} sent, +${Re(ee.jobsDone,ie.jobsDone)} done, ${ee.jobsInFlight} in flight`;
            return `${He.join(", ")}; ${ye}; workers ${ee.workersLive} live, ${ee.workersRetired} retired`
          }(this.now, this.before));
          const ee = this.before;
          this.before = this.now, this.now = ee
        }
        var ye, be;
        const Me = this.hidden.totals(ee),
          Ke = Me.changes - this.hiddenBefore.changes,
          Ue = Me.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((Ke > 0 || Ue > 0) && (He.push((0, oe.e)({
            changes: Ke,
            hiddenMs: Ue
          })), this.hiddenBefore = Me), 0 === He.length) return null;
        const Fe = `load ${Math.round((ee-this.lastMs)/1e3)}s: ${He.join("; ")}`;
        return this.lastMs = ee, Fe
      }
    }
    class qe {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(ee, ie, He) {
        this.count++, "paced" === ee ? this.paced++ : "skipped" === ee && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = ie, this.longestAhead = He)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const ee = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${ee} other, longest ${this.longest} in ${(0,Me.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const fe = 2e4,
      Te = 5e3,
      pe = 6e4,
      Xe = 250,
      ze = 10,
      Be = 6e4,
      Ee = 8192;

    function ge(ee) {
      return ee.mainMs = 0, ee.renderMs = 0, ee.ticks = 0, ee.tickMs = 0, ee.rafs = 0, ee.pendingBefore = -1, ee.pendingMax = -1, ee.pendingAfter = -1, ee
    }

    function Oe() {
      return ge({})
    }
    class de {
      constructor() {
        this.intervals = new Float64Array(Ee), this.totals = Oe(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new qe, this.shown = 0, this.dropped = 0
      }
      reset() {
        ge(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class We {
      constructor() {
        this.longTasks = new Je, this.summary = new de, this.current = Oe(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = ze, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new ke, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (ee, ie, He, be, Me, Ke) => {
          this.ahead = ee.headerWord(ye.F.Pacing) & ye.Y.AheadMask, this.frame(ie, He, be, Me, ee.headerWord(ye.F.RenderUs) / 1e3, ee.headerWord(ye.F.TicksRun), Ke, ee.headerWord(ye.F.RenderPending))
        }, this.wasmPeekPaced = ee => {
          const ie = performance.now();
          this.frame(ie, ie, "paced", ee, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (ee, ie, He) => {
          this.frame(ee, ie, "drawn", He, ie - ee, 0, 0, -1)
        }, this.jsTick = ee => {
          this.current.mainMs += ee, this.current.ticks++, this.current.tickMs += ee
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const ee = performance.now();
          let ie = 0;
          for (const He of this.waiting) {
            if (He.dueMs > ee) {
              this.waiting[ie++] = He;
              continue
            }
            const ye = [`long frame ${(0,Me.d)(He.intervalMs)} ms ending at ${(0,Me.d)(He.endMs)} ms: main ${(0,Me.d)(He.mainMs)} (render ${(0,Me.d)(He.renderMs)}, ${He.ticks} ticks ${(0,Me.d)(He.tickMs)}), outside ${(0,Me.d)(He.intervalMs-He.mainMs)}`, `${He.rafs} rafs`];
            He.pendingBefore >= 0 && ye.push(`pending ${He.pendingBefore} -> ${He.pendingAfter} (max ${He.pendingMax})`), ye.push(this.longTasks.describe(He.endMs - He.intervalMs, He.endMs)), (0, Ke.m)("frame", ye.join("; "))
          }
          this.waiting.length = ie, ie > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - ee))
        }, this.flush = () => {
          this.flushTimer = null;
          const ee = performance.now(),
            ie = Math.round((ee - this.lastFlushMs) / 1e3);
          this.lastFlushMs = ee, this.scheduleFlush();
          if (this.logSummary(ie) || this.inGameSinceFlush) {
            const ie = this.loadLine.take(ee);
            null !== ie && (0, Ke.m)("frame", ie)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(ee, ie) {
        var He;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Ke.m)("frame", `start: ${ee} client, ${ie}, dpr ${window.devicePixelRatio}, long tasks ${null!==(He=this.longTasks.kind)&&void 0!==He?He:"n/a"}; a summary each ${fe/1e3} s in game (${Te/1e3} s for the first ${pe/1e3} s), outliers over ${Xe} ms`)
      }
      setLoadCounts(ee) {
        this.loadLine.setSource(ee)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const ee = performance.now() - this.startedMs < pe;
        this.flushTimer = setTimeout(this.flush, ee ? Te : fe)
      }
      frame(ee, ie, He, ye, Me, Ke, Ue, Fe) {
        if (!ye) return this.restart(), void(this.lastPending = Fe);
        const Je = this.current;
        (0, be.b)(He) ? (this.lastDrawnStartMs >= 0 && (Je.pendingAfter = this.lastPending, this.closeInterval(ee - this.lastDrawnStartMs, ee)), this.lastDrawnStartMs = ee, ge(Je).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(He, ie - this.lastDrawnStartMs, this.ahead), Je.mainMs += ie - ee, Je.renderMs += Me, Je.ticks += Ke, Je.tickMs += Ue, Je.pendingMax = Math.max(Je.pendingMax, Fe), this.lastPending = Fe, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, Fe)
      }
      closeInterval(ee, ie) {
        const He = this.summary,
          ye = this.current;
        He.frames < Ee && (He.intervals[He.frames] = ee), He.frames++, He.maxMs = Math.max(He.maxMs, ee);
        const be = He.totals;
        be.mainMs += ye.mainMs, be.renderMs += ye.renderMs, be.ticks += ye.ticks, be.tickMs += ye.tickMs, be.rafs += ye.rafs, ee > 50 && He.slow++, ee > Xe && this.outlier(ee, ie)
      }
      outlier(ee, ie) {
        const He = Math.floor((ie - this.lastRefillMs) / Be);
        He > 0 && (this.tokens = Math.min(ze, this.tokens + He), this.lastRefillMs += He * Be), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: ie,
          intervalMs: ee,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(ee) {
        const ie = this.summary,
          He = ie.totals;
        if (0 === ie.frames) return ie.undrawn.count > 0 && (0, Ke.m)("frame", `${ee}s: no frames drawn, ${ie.undrawn.describe()}; pending max ${He.pendingMax}`), ie.undrawn.count > 0;
        const ye = ie.intervals.subarray(0, Math.min(ie.frames, Ee)).sort(),
          be = [`${ie.frames} frames, median ${(0,Me.d)((0,Me.e)(ye,.5))} p95 ${(0,Me.d)((0,Me.e)(ye,.95))} max ${(0,Me.d)(ie.maxMs)} ms, ${ie.slow} over 50, ${ie.shown+ie.dropped} over ${Xe}`, `${He.rafs} rafs, ${ie.undrawn.describe()}`, `main ${(0,Me.d)(He.mainMs)} ms (render ${(0,Me.d)(He.renderMs)}, ${He.ticks} ticks ${(0,Me.d)(He.tickMs)})`];
        return He.pendingMax >= 0 && be.push(`pending max ${He.pendingMax}`), this.ahead >= 0 && be.push(`${this.ahead} frames ahead`), be.push(`outliers ${ie.shown} logged, ${ie.dropped} dropped`), (0, Ke.m)("frame", `${ee}s: ${be.join("; ")}`), !0
      }
    }
    let te = null;

    function Ze(ee, ie) {
      return te ??= new We, te.start(ee, ie), te
    }
  },
  34736: (ee, ie, He) => {
    function ye(ee) {
      return `hidden ${ee.changes} changes, ${Math.round(ee.hiddenMs)} ms`
    }
    He.d(ie, {
      c: () => be,
      e: () => ye
    });
    class be {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(ee) {
        this.changes++, document.hidden ? this.hiddenSinceMs = ee : this.hiddenSinceMs >= 0 && (this.hiddenMs += ee - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(ee) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? ee - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);