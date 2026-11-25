export const id = 33;
export const ids = [33];
export const modules = {
  34232: (tt, et, Vt) => {
    function Ot(tt, et) {
      return 0 === tt.length ? 0 : tt[Math.min(tt.length - 1, Math.floor(et * tt.length))]
    }

    function qt(tt) {
      return tt.toFixed(1)
    }
    Vt.d(et, {
      d: () => qt,
      g: () => Ot
    })
  },
  34223: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      FIRST_SUMMARIES_FOR_MS: () => yt,
      FIRST_SUMMARY_MS: () => wt,
      FrameDebugLog: () => ht,
      OUTLIER_BURST: () => Mt,
      OUTLIER_MS: () => Nt,
      OUTLIER_REFILL_MS: () => bt,
      SUMMARY_MS: () => ft,
      startFrameDebug: () => Wt
    });
    var Ot = Vt(4963),
      qt = Vt(4958),
      Dt = Vt(34232),
      mt = Vt(2902),
      dt = Vt(1178),
      jt = Vt(3043);
    class Ht {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = tt => {
          const et = tt;
          this.add(et.startTime, et.duration, et.blockingDuration, (0, dt.i)(et))
        }, this.onLongTask = tt => {
          this.add(tt.startTime, tt.duration, 0, 0)
        }, null !== (0, jt.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, jt.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(tt, et, Vt, Ot) {
        this.entries.set([tt, et, Vt, Ot], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(tt, et) {
        if (null === this.kind) return "long tasks n/a";
        let Vt = 0,
          Ot = 0,
          qt = 0,
          Dt = 0;
        for (let dt = 0; dt < this.size; dt++) {
          const mt = 4 * dt,
            jt = this.entries[mt] + this.entries[mt + 1];
          jt > tt && jt <= et + 2 && (Vt++, Ot += this.entries[mt + 1], qt += this.entries[mt + 2], Dt += this.entries[mt + 3])
        }
        const mt = "loaf" === this.kind && Vt > 0 ? ` (blocking ${qt.toFixed(0)}, script ${Dt.toFixed(0)})` : "";
        return `${Vt} ${this.kind} ${Ot.toFixed(0)} ms${mt}`
      }
    }
    var Xt = Vt(34235);

    function Qt(tt, et) {
      return et < 0 || tt < et ? tt : tt - et
    }
    class lt {
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
        }, this.lastMs = 0, this.hidden = new Xt.d, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(tt) {
        this.source = tt
      }
      start(tt) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = tt
      }
      take(tt) {
        var et;
        const Vt = [];
        if (!0 === (null === (et = this.source) || void 0 === et ? void 0 : et.call(this, this.now)) && (Ot = this.now, qt = this.before, Ot.chunksReceived !== qt.chunksReceived || Ot.chunksCancelled !== qt.chunksCancelled || Ot.chunksStored !== qt.chunksStored || Ot.jobsSent !== qt.jobsSent || Ot.jobsDone !== qt.jobsDone || Ot.jobsInFlight !== qt.jobsInFlight || Ot.workersLive !== qt.workersLive || Ot.workersRetired !== qt.workersRetired)) {
          Vt.push(function(tt, et) {
            const Vt = [`chunks +${Qt(tt.chunksReceived,et.chunksReceived)} got`, `+${Qt(tt.chunksCancelled,et.chunksCancelled)} cancelled`];
            tt.chunksStored >= 0 && Vt.push(`${tt.chunksStored} stored`);
            const Ot = `jobs +${Qt(tt.jobsSent,et.jobsSent)} sent, +${Qt(tt.jobsDone,et.jobsDone)} done, ${tt.jobsInFlight} in flight`;
            return `${Vt.join(", ")}; ${Ot}; workers ${tt.workersLive} live, ${tt.workersRetired} retired`
          }(this.now, this.before));
          const tt = this.before;
          this.before = this.now, this.now = tt
        }
        var Ot, qt;
        const Dt = this.hidden.totals(tt),
          mt = Dt.changes - this.hiddenBefore.changes,
          dt = Dt.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((mt > 0 || dt > 0) && (Vt.push((0, Xt.f)({
            changes: mt,
            hiddenMs: dt
          })), this.hiddenBefore = Dt), 0 === Vt.length) return null;
        const jt = `load ${Math.round((tt-this.lastMs)/1e3)}s: ${Vt.join("; ")}`;
        return this.lastMs = tt, jt
      }
    }
    class Et {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(tt, et, Vt) {
        this.count++, "paced" === tt ? this.paced++ : "skipped" === tt && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = et, this.longestAhead = Vt)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const tt = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${tt} other, longest ${this.longest} in ${(0,Dt.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const ft = 2e4,
      wt = 5e3,
      yt = 6e4,
      Nt = 250,
      Mt = 10,
      bt = 6e4,
      Jt = 8192;

    function Ct(tt) {
      return tt.mainMs = 0, tt.renderMs = 0, tt.ticks = 0, tt.tickMs = 0, tt.rafs = 0, tt.pendingBefore = -1, tt.pendingMax = -1, tt.pendingAfter = -1, tt
    }

    function ut() {
      return Ct({})
    }
    class Kt {
      constructor() {
        this.intervals = new Float64Array(Jt), this.totals = ut(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new Et, this.shown = 0, this.dropped = 0
      }
      reset() {
        Ct(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class ht {
      constructor() {
        this.longTasks = new Ht, this.summary = new Kt, this.current = ut(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = Mt, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new lt, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (tt, et, Vt, qt, Dt, mt) => {
          this.ahead = tt.headerWord(Ot.J.Pacing) & Ot.bb.AheadMask, this.frame(et, Vt, qt, Dt, tt.headerWord(Ot.J.RenderUs) / 1e3, tt.headerWord(Ot.J.TicksRun), mt, tt.headerWord(Ot.J.RenderPending))
        }, this.wasmPeekPaced = tt => {
          const et = performance.now();
          this.frame(et, et, "paced", tt, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (tt, et, Vt) => {
          this.frame(tt, et, "drawn", Vt, et - tt, 0, 0, -1)
        }, this.jsTick = tt => {
          this.current.mainMs += tt, this.current.ticks++, this.current.tickMs += tt
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const tt = performance.now();
          let et = 0;
          for (const Vt of this.waiting) {
            if (Vt.dueMs > tt) {
              this.waiting[et++] = Vt;
              continue
            }
            const Ot = [`long frame ${(0,Dt.d)(Vt.intervalMs)} ms ending at ${(0,Dt.d)(Vt.endMs)} ms: main ${(0,Dt.d)(Vt.mainMs)} (render ${(0,Dt.d)(Vt.renderMs)}, ${Vt.ticks} ticks ${(0,Dt.d)(Vt.tickMs)}), outside ${(0,Dt.d)(Vt.intervalMs-Vt.mainMs)}`, `${Vt.rafs} rafs`];
            Vt.pendingBefore >= 0 && Ot.push(`pending ${Vt.pendingBefore} -> ${Vt.pendingAfter} (max ${Vt.pendingMax})`), Ot.push(this.longTasks.describe(Vt.endMs - Vt.intervalMs, Vt.endMs)), (0, mt.n)("frame", Ot.join("; "))
          }
          this.waiting.length = et, et > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - tt))
        }, this.flush = () => {
          this.flushTimer = null;
          const tt = performance.now(),
            et = Math.round((tt - this.lastFlushMs) / 1e3);
          this.lastFlushMs = tt, this.scheduleFlush();
          if (this.logSummary(et) || this.inGameSinceFlush) {
            const et = this.loadLine.take(tt);
            null !== et && (0, mt.n)("frame", et)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(tt, et) {
        var Vt;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, mt.n)("frame", `start: ${tt} client, ${et}, dpr ${window.devicePixelRatio}, long tasks ${null!==(Vt=this.longTasks.kind)&&void 0!==Vt?Vt:"n/a"}; a summary each ${ft/1e3} s in game (${wt/1e3} s for the first ${yt/1e3} s), outliers over ${Nt} ms`)
      }
      setLoadCounts(tt) {
        this.loadLine.setSource(tt)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const tt = performance.now() - this.startedMs < yt;
        this.flushTimer = setTimeout(this.flush, tt ? wt : ft)
      }
      frame(tt, et, Vt, Ot, Dt, mt, dt, jt) {
        if (!Ot) return this.restart(), void(this.lastPending = jt);
        const Ht = this.current;
        (0, qt.d)(Vt) ? (this.lastDrawnStartMs >= 0 && (Ht.pendingAfter = this.lastPending, this.closeInterval(tt - this.lastDrawnStartMs, tt)), this.lastDrawnStartMs = tt, Ct(Ht).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(Vt, et - this.lastDrawnStartMs, this.ahead), Ht.mainMs += et - tt, Ht.renderMs += Dt, Ht.ticks += mt, Ht.tickMs += dt, Ht.pendingMax = Math.max(Ht.pendingMax, jt), this.lastPending = jt, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, jt)
      }
      closeInterval(tt, et) {
        const Vt = this.summary,
          Ot = this.current;
        Vt.frames < Jt && (Vt.intervals[Vt.frames] = tt), Vt.frames++, Vt.maxMs = Math.max(Vt.maxMs, tt);
        const qt = Vt.totals;
        qt.mainMs += Ot.mainMs, qt.renderMs += Ot.renderMs, qt.ticks += Ot.ticks, qt.tickMs += Ot.tickMs, qt.rafs += Ot.rafs, tt > 50 && Vt.slow++, tt > Nt && this.outlier(tt, et)
      }
      outlier(tt, et) {
        const Vt = Math.floor((et - this.lastRefillMs) / bt);
        Vt > 0 && (this.tokens = Math.min(Mt, this.tokens + Vt), this.lastRefillMs += Vt * bt), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: et,
          intervalMs: tt,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(tt) {
        const et = this.summary,
          Vt = et.totals;
        if (0 === et.frames) return et.undrawn.count > 0 && (0, mt.n)("frame", `${tt}s: no frames drawn, ${et.undrawn.describe()}; pending max ${Vt.pendingMax}`), et.undrawn.count > 0;
        const Ot = et.intervals.subarray(0, Math.min(et.frames, Jt)).sort(),
          qt = [`${et.frames} frames, median ${(0,Dt.d)((0,Dt.g)(Ot,.5))} p95 ${(0,Dt.d)((0,Dt.g)(Ot,.95))} max ${(0,Dt.d)(et.maxMs)} ms, ${et.slow} over 50, ${et.shown+et.dropped} over ${Nt}`, `${Vt.rafs} rafs, ${et.undrawn.describe()}`, `main ${(0,Dt.d)(Vt.mainMs)} ms (render ${(0,Dt.d)(Vt.renderMs)}, ${Vt.ticks} ticks ${(0,Dt.d)(Vt.tickMs)})`];
        return Vt.pendingMax >= 0 && qt.push(`pending max ${Vt.pendingMax}`), this.ahead >= 0 && qt.push(`${this.ahead} frames ahead`), qt.push(`outliers ${et.shown} logged, ${et.dropped} dropped`), (0, mt.n)("frame", `${tt}s: ${qt.join("; ")}`), !0
      }
    }
    let vt = null;

    function Wt(tt, et) {
      return vt ??= new ht, vt.start(tt, et), vt
    }
  },
  34235: (tt, et, Vt) => {
    function Ot(tt) {
      return `hidden ${tt.changes} changes, ${Math.round(tt.hiddenMs)} ms`
    }
    Vt.d(et, {
      d: () => qt,
      f: () => Ot
    });
    class qt {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(tt) {
        this.changes++, document.hidden ? this.hiddenSinceMs = tt : this.hiddenSinceMs >= 0 && (this.hiddenMs += tt - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(tt) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? tt - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);