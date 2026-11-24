export const id = 33;
export const ids = [33];
export const modules = {
  34146: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return 0 === mm.length ? 0 : mm[Math.min(mm.length - 1, Math.floor(Tm * mm.length))]
    }

    function Am(mm) {
      return mm.toFixed(1)
    }
    fm.d(Tm, {
      e: () => Am,
      g: () => hm
    })
  },
  34137: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      FIRST_SUMMARIES_FOR_MS: () => qm,
      FIRST_SUMMARY_MS: () => Ym,
      FrameDebugLog: () => cm,
      OUTLIER_BURST: () => Vm,
      OUTLIER_MS: () => jm,
      OUTLIER_REFILL_MS: () => Im,
      SUMMARY_MS: () => Om,
      startFrameDebug: () => Zm
    });
    var hm = fm(4741),
      Am = fm(4729),
      am = fm(34146),
      xm = fm(2813),
      wm = fm(1121),
      Dm = fm(2964);
    class im {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = mm => {
          const Tm = mm;
          this.add(Tm.startTime, Tm.duration, Tm.blockingDuration, (0, wm.l)(Tm))
        }, this.onLongTask = mm => {
          this.add(mm.startTime, mm.duration, 0, 0)
        }, null !== (0, Dm.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Dm.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(mm, Tm, fm, hm) {
        this.entries.set([mm, Tm, fm, hm], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(mm, Tm) {
        if (null === this.kind) return "long tasks n/a";
        let fm = 0,
          hm = 0,
          Am = 0,
          am = 0;
        for (let wm = 0; wm < this.size; wm++) {
          const xm = 4 * wm,
            Dm = this.entries[xm] + this.entries[xm + 1];
          Dm > mm && Dm <= Tm + 2 && (fm++, hm += this.entries[xm + 1], Am += this.entries[xm + 2], am += this.entries[xm + 3])
        }
        const xm = "loaf" === this.kind && fm > 0 ? ` (blocking ${Am.toFixed(0)}, script ${am.toFixed(0)})` : "";
        return `${fm} ${this.kind} ${hm.toFixed(0)} ms${xm}`
      }
    }
    var Rm = fm(34153);

    function pm(mm, Tm) {
      return Tm < 0 || mm < Tm ? mm : mm - Tm
    }
    class Em {
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
        }, this.lastMs = 0, this.hidden = new Rm.d, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(mm) {
        this.source = mm
      }
      start(mm) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = mm
      }
      take(mm) {
        var Tm;
        const fm = [];
        if (!0 === (null === (Tm = this.source) || void 0 === Tm ? void 0 : Tm.call(this, this.now)) && (hm = this.now, Am = this.before, hm.chunksReceived !== Am.chunksReceived || hm.chunksCancelled !== Am.chunksCancelled || hm.chunksStored !== Am.chunksStored || hm.jobsSent !== Am.jobsSent || hm.jobsDone !== Am.jobsDone || hm.jobsInFlight !== Am.jobsInFlight || hm.workersLive !== Am.workersLive || hm.workersRetired !== Am.workersRetired)) {
          fm.push(function(mm, Tm) {
            const fm = [`chunks +${pm(mm.chunksReceived,Tm.chunksReceived)} got`, `+${pm(mm.chunksCancelled,Tm.chunksCancelled)} cancelled`];
            mm.chunksStored >= 0 && fm.push(`${mm.chunksStored} stored`);
            const hm = `jobs +${pm(mm.jobsSent,Tm.jobsSent)} sent, +${pm(mm.jobsDone,Tm.jobsDone)} done, ${mm.jobsInFlight} in flight`;
            return `${fm.join(", ")}; ${hm}; workers ${mm.workersLive} live, ${mm.workersRetired} retired`
          }(this.now, this.before));
          const mm = this.before;
          this.before = this.now, this.now = mm
        }
        var hm, Am;
        const am = this.hidden.totals(mm),
          xm = am.changes - this.hiddenBefore.changes,
          wm = am.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((xm > 0 || wm > 0) && (fm.push((0, Rm.g)({
            changes: xm,
            hiddenMs: wm
          })), this.hiddenBefore = am), 0 === fm.length) return null;
        const Dm = `load ${Math.round((mm-this.lastMs)/1e3)}s: ${fm.join("; ")}`;
        return this.lastMs = mm, Dm
      }
    }
    class om {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(mm, Tm, fm) {
        this.count++, "paced" === mm ? this.paced++ : "skipped" === mm && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = Tm, this.longestAhead = fm)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const mm = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${mm} other, longest ${this.longest} in ${(0,am.e)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const Om = 2e4,
      Ym = 5e3,
      qm = 6e4,
      jm = 250,
      Vm = 10,
      Im = 6e4,
      Km = 8192;

    function Qm(mm) {
      return mm.mainMs = 0, mm.renderMs = 0, mm.ticks = 0, mm.tickMs = 0, mm.rafs = 0, mm.pendingBefore = -1, mm.pendingMax = -1, mm.pendingAfter = -1, mm
    }

    function nm() {
      return Qm({})
    }
    class Jm {
      constructor() {
        this.intervals = new Float64Array(Km), this.totals = nm(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new om, this.shown = 0, this.dropped = 0
      }
      reset() {
        Qm(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class cm {
      constructor() {
        this.longTasks = new im, this.summary = new Jm, this.current = nm(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = Vm, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new Em, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (mm, Tm, fm, Am, am, xm) => {
          this.ahead = mm.headerWord(hm.L.Pacing) & hm.bb.AheadMask, this.frame(Tm, fm, Am, am, mm.headerWord(hm.L.RenderUs) / 1e3, mm.headerWord(hm.L.TicksRun), xm, mm.headerWord(hm.L.RenderPending))
        }, this.wasmPeekPaced = mm => {
          const Tm = performance.now();
          this.frame(Tm, Tm, "paced", mm, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (mm, Tm, fm) => {
          this.frame(mm, Tm, "drawn", fm, Tm - mm, 0, 0, -1)
        }, this.jsTick = mm => {
          this.current.mainMs += mm, this.current.ticks++, this.current.tickMs += mm
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const mm = performance.now();
          let Tm = 0;
          for (const fm of this.waiting) {
            if (fm.dueMs > mm) {
              this.waiting[Tm++] = fm;
              continue
            }
            const hm = [`long frame ${(0,am.e)(fm.intervalMs)} ms ending at ${(0,am.e)(fm.endMs)} ms: main ${(0,am.e)(fm.mainMs)} (render ${(0,am.e)(fm.renderMs)}, ${fm.ticks} ticks ${(0,am.e)(fm.tickMs)}), outside ${(0,am.e)(fm.intervalMs-fm.mainMs)}`, `${fm.rafs} rafs`];
            fm.pendingBefore >= 0 && hm.push(`pending ${fm.pendingBefore} -> ${fm.pendingAfter} (max ${fm.pendingMax})`), hm.push(this.longTasks.describe(fm.endMs - fm.intervalMs, fm.endMs)), (0, xm.g)("frame", hm.join("; "))
          }
          this.waiting.length = Tm, Tm > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - mm))
        }, this.flush = () => {
          this.flushTimer = null;
          const mm = performance.now(),
            Tm = Math.round((mm - this.lastFlushMs) / 1e3);
          this.lastFlushMs = mm, this.scheduleFlush();
          if (this.logSummary(Tm) || this.inGameSinceFlush) {
            const Tm = this.loadLine.take(mm);
            null !== Tm && (0, xm.g)("frame", Tm)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(mm, Tm) {
        var fm;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, xm.g)("frame", `start: ${mm} client, ${Tm}, dpr ${window.devicePixelRatio}, long tasks ${null!==(fm=this.longTasks.kind)&&void 0!==fm?fm:"n/a"}; a summary each ${Om/1e3} s in game (${Ym/1e3} s for the first ${qm/1e3} s), outliers over ${jm} ms`)
      }
      setLoadCounts(mm) {
        this.loadLine.setSource(mm)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const mm = performance.now() - this.startedMs < qm;
        this.flushTimer = setTimeout(this.flush, mm ? Ym : Om)
      }
      frame(mm, Tm, fm, hm, am, xm, wm, Dm) {
        if (!hm) return this.restart(), void(this.lastPending = Dm);
        const im = this.current;
        (0, Am.b)(fm) ? (this.lastDrawnStartMs >= 0 && (im.pendingAfter = this.lastPending, this.closeInterval(mm - this.lastDrawnStartMs, mm)), this.lastDrawnStartMs = mm, Qm(im).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(fm, Tm - this.lastDrawnStartMs, this.ahead), im.mainMs += Tm - mm, im.renderMs += am, im.ticks += xm, im.tickMs += wm, im.pendingMax = Math.max(im.pendingMax, Dm), this.lastPending = Dm, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, Dm)
      }
      closeInterval(mm, Tm) {
        const fm = this.summary,
          hm = this.current;
        fm.frames < Km && (fm.intervals[fm.frames] = mm), fm.frames++, fm.maxMs = Math.max(fm.maxMs, mm);
        const Am = fm.totals;
        Am.mainMs += hm.mainMs, Am.renderMs += hm.renderMs, Am.ticks += hm.ticks, Am.tickMs += hm.tickMs, Am.rafs += hm.rafs, mm > 50 && fm.slow++, mm > jm && this.outlier(mm, Tm)
      }
      outlier(mm, Tm) {
        const fm = Math.floor((Tm - this.lastRefillMs) / Im);
        fm > 0 && (this.tokens = Math.min(Vm, this.tokens + fm), this.lastRefillMs += fm * Im), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: Tm,
          intervalMs: mm,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(mm) {
        const Tm = this.summary,
          fm = Tm.totals;
        if (0 === Tm.frames) return Tm.undrawn.count > 0 && (0, xm.g)("frame", `${mm}s: no frames drawn, ${Tm.undrawn.describe()}; pending max ${fm.pendingMax}`), Tm.undrawn.count > 0;
        const hm = Tm.intervals.subarray(0, Math.min(Tm.frames, Km)).sort(),
          Am = [`${Tm.frames} frames, median ${(0,am.e)((0,am.g)(hm,.5))} p95 ${(0,am.e)((0,am.g)(hm,.95))} max ${(0,am.e)(Tm.maxMs)} ms, ${Tm.slow} over 50, ${Tm.shown+Tm.dropped} over ${jm}`, `${fm.rafs} rafs, ${Tm.undrawn.describe()}`, `main ${(0,am.e)(fm.mainMs)} ms (render ${(0,am.e)(fm.renderMs)}, ${fm.ticks} ticks ${(0,am.e)(fm.tickMs)})`];
        return fm.pendingMax >= 0 && Am.push(`pending max ${fm.pendingMax}`), this.ahead >= 0 && Am.push(`${this.ahead} frames ahead`), Am.push(`outliers ${Tm.shown} logged, ${Tm.dropped} dropped`), (0, xm.g)("frame", `${mm}s: ${Am.join("; ")}`), !0
      }
    }
    let zm = null;

    function Zm(mm, Tm) {
      return zm ??= new cm, zm.start(mm, Tm), zm
    }
  },
  34153: (mm, Tm, fm) => {
    function hm(mm) {
      return `hidden ${mm.changes} changes, ${Math.round(mm.hiddenMs)} ms`
    }
    fm.d(Tm, {
      d: () => Am,
      g: () => hm
    });
    class Am {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(mm) {
        this.changes++, document.hidden ? this.hiddenSinceMs = mm : this.hiddenSinceMs >= 0 && (this.hiddenMs += mm - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(mm) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? mm - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);