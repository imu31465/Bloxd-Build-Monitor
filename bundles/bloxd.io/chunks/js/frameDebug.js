export const id = 40;
export const ids = [40];
export const modules = {
  35313: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return 0 === rr.length ? 0 : rr[Math.min(rr.length - 1, Math.floor(Sr * rr.length))]
    }

    function Wr(rr) {
      return rr.toFixed(1)
    }
    Qr.d(Sr, {
      d: () => Wr,
      h: () => Zr
    })
  },
  35304: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      FIRST_SUMMARIES_FOR_MS: () => hr,
      FIRST_SUMMARY_MS: () => tr,
      FrameDebugLog: () => Tr,
      OUTLIER_BURST: () => Yr,
      OUTLIER_MS: () => zr,
      OUTLIER_REFILL_MS: () => nr,
      SUMMARY_MS: () => Ur,
      startFrameDebug: () => Or
    });
    var Zr = Qr(5617),
      Wr = Qr(5604),
      ar = Qr(35313),
      jr = Qr(3909),
      Ir = Qr(1385),
      fr = Qr(4079);
    class Er {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = rr => {
          const Sr = rr;
          this.add(Sr.startTime, Sr.duration, Sr.blockingDuration, (0, Ir.r)(Sr))
        }, this.onLongTask = rr => {
          this.add(rr.startTime, rr.duration, 0, 0)
        }, null !== (0, fr.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, fr.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(rr, Sr, Qr, Zr) {
        this.entries.set([rr, Sr, Qr, Zr], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(rr, Sr) {
        if (null === this.kind) return "long tasks n/a";
        let Qr = 0,
          Zr = 0,
          Wr = 0,
          ar = 0;
        for (let Ir = 0; Ir < this.size; Ir++) {
          const jr = 4 * Ir,
            fr = this.entries[jr] + this.entries[jr + 1];
          fr > rr && fr <= Sr + 2 && (Qr++, Zr += this.entries[jr + 1], Wr += this.entries[jr + 2], ar += this.entries[jr + 3])
        }
        const jr = "loaf" === this.kind && Qr > 0 ? ` (blocking ${Wr.toFixed(0)}, script ${ar.toFixed(0)})` : "";
        return `${Qr} ${this.kind} ${Zr.toFixed(0)} ms${jr}`
      }
    }
    var pr = Qr(35315);

    function xr(rr, Sr) {
      return Sr < 0 || rr < Sr ? rr : rr - Sr
    }
    class mr {
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
        }, this.lastMs = 0, this.hidden = new pr.c, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(rr) {
        this.source = rr
      }
      start(rr) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = rr
      }
      take(rr) {
        var Sr;
        const Qr = [];
        if (!0 === (null === (Sr = this.source) || void 0 === Sr ? void 0 : Sr.call(this, this.now)) && (Zr = this.now, Wr = this.before, Zr.chunksReceived !== Wr.chunksReceived || Zr.chunksCancelled !== Wr.chunksCancelled || Zr.chunksStored !== Wr.chunksStored || Zr.jobsSent !== Wr.jobsSent || Zr.jobsDone !== Wr.jobsDone || Zr.jobsInFlight !== Wr.jobsInFlight || Zr.workersLive !== Wr.workersLive || Zr.workersRetired !== Wr.workersRetired)) {
          Qr.push(function(rr, Sr) {
            const Qr = [`chunks +${xr(rr.chunksReceived,Sr.chunksReceived)} got`, `+${xr(rr.chunksCancelled,Sr.chunksCancelled)} cancelled`];
            rr.chunksStored >= 0 && Qr.push(`${rr.chunksStored} stored`);
            const Zr = `jobs +${xr(rr.jobsSent,Sr.jobsSent)} sent, +${xr(rr.jobsDone,Sr.jobsDone)} done, ${rr.jobsInFlight} in flight`;
            return `${Qr.join(", ")}; ${Zr}; workers ${rr.workersLive} live, ${rr.workersRetired} retired`
          }(this.now, this.before));
          const rr = this.before;
          this.before = this.now, this.now = rr
        }
        var Zr, Wr;
        const ar = this.hidden.totals(rr),
          jr = ar.changes - this.hiddenBefore.changes,
          Ir = ar.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((jr > 0 || Ir > 0) && (Qr.push((0, pr.g)({
            changes: jr,
            hiddenMs: Ir
          })), this.hiddenBefore = ar), 0 === Qr.length) return null;
        const fr = `load ${Math.round((rr-this.lastMs)/1e3)}s: ${Qr.join("; ")}`;
        return this.lastMs = rr, fr
      }
    }
    class Nr {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(rr, Sr, Qr) {
        this.count++, "paced" === rr ? this.paced++ : "skipped" === rr && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = Sr, this.longestAhead = Qr)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const rr = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${rr} other, longest ${this.longest} in ${(0,ar.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const Ur = 2e4,
      tr = 5e3,
      hr = 6e4,
      zr = 250,
      Yr = 10,
      nr = 6e4,
      er = 8192;

    function Kr(rr) {
      return rr.mainMs = 0, rr.renderMs = 0, rr.ticks = 0, rr.tickMs = 0, rr.rafs = 0, rr.pendingBefore = -1, rr.pendingMax = -1, rr.pendingAfter = -1, rr
    }

    function yr() {
      return Kr({})
    }
    class Br {
      constructor() {
        this.intervals = new Float64Array(er), this.totals = yr(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new Nr, this.shown = 0, this.dropped = 0
      }
      reset() {
        Kr(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class Tr {
      constructor() {
        this.longTasks = new Er, this.summary = new Br, this.current = yr(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = Yr, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new mr, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (rr, Sr, Qr, Wr, ar, jr) => {
          this.ahead = rr.headerWord(Zr.L.Pacing) & Zr._.AheadMask, this.frame(Sr, Qr, Wr, ar, rr.headerWord(Zr.L.RenderUs) / 1e3, rr.headerWord(Zr.L.TicksRun), jr, rr.headerWord(Zr.L.RenderPending))
        }, this.wasmPeekPaced = rr => {
          const Sr = performance.now();
          this.frame(Sr, Sr, "paced", rr, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (rr, Sr, Qr) => {
          this.frame(rr, Sr, "drawn", Qr, Sr - rr, 0, 0, -1)
        }, this.jsTick = rr => {
          this.current.mainMs += rr, this.current.ticks++, this.current.tickMs += rr
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const rr = performance.now();
          let Sr = 0;
          for (const Qr of this.waiting) {
            if (Qr.dueMs > rr) {
              this.waiting[Sr++] = Qr;
              continue
            }
            const Zr = [`long frame ${(0,ar.d)(Qr.intervalMs)} ms ending at ${(0,ar.d)(Qr.endMs)} ms: main ${(0,ar.d)(Qr.mainMs)} (render ${(0,ar.d)(Qr.renderMs)}, ${Qr.ticks} ticks ${(0,ar.d)(Qr.tickMs)}), outside ${(0,ar.d)(Qr.intervalMs-Qr.mainMs)}`, `${Qr.rafs} rafs`];
            Qr.pendingBefore >= 0 && Zr.push(`pending ${Qr.pendingBefore} -> ${Qr.pendingAfter} (max ${Qr.pendingMax})`), Zr.push(this.longTasks.describe(Qr.endMs - Qr.intervalMs, Qr.endMs)), (0, jr.l)("frame", Zr.join("; "))
          }
          this.waiting.length = Sr, Sr > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - rr))
        }, this.flush = () => {
          this.flushTimer = null;
          const rr = performance.now(),
            Sr = Math.round((rr - this.lastFlushMs) / 1e3);
          this.lastFlushMs = rr, this.scheduleFlush();
          if (this.logSummary(Sr) || this.inGameSinceFlush) {
            const Sr = this.loadLine.take(rr);
            null !== Sr && (0, jr.l)("frame", Sr)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(rr, Sr) {
        var Qr;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, jr.l)("frame", `start: ${rr} client, ${Sr}, dpr ${window.devicePixelRatio}, long tasks ${null!==(Qr=this.longTasks.kind)&&void 0!==Qr?Qr:"n/a"}; a summary each ${Ur/1e3} s in game (${tr/1e3} s for the first ${hr/1e3} s), outliers over ${zr} ms`)
      }
      setLoadCounts(rr) {
        this.loadLine.setSource(rr)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const rr = performance.now() - this.startedMs < hr;
        this.flushTimer = setTimeout(this.flush, rr ? tr : Ur)
      }
      frame(rr, Sr, Qr, Zr, ar, jr, Ir, fr) {
        if (!Zr) return this.restart(), void(this.lastPending = fr);
        const Er = this.current;
        (0, Wr.c)(Qr) ? (this.lastDrawnStartMs >= 0 && (Er.pendingAfter = this.lastPending, this.closeInterval(rr - this.lastDrawnStartMs, rr)), this.lastDrawnStartMs = rr, Kr(Er).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(Qr, Sr - this.lastDrawnStartMs, this.ahead), Er.mainMs += Sr - rr, Er.renderMs += ar, Er.ticks += jr, Er.tickMs += Ir, Er.pendingMax = Math.max(Er.pendingMax, fr), this.lastPending = fr, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, fr)
      }
      closeInterval(rr, Sr) {
        const Qr = this.summary,
          Zr = this.current;
        Qr.frames < er && (Qr.intervals[Qr.frames] = rr), Qr.frames++, Qr.maxMs = Math.max(Qr.maxMs, rr);
        const Wr = Qr.totals;
        Wr.mainMs += Zr.mainMs, Wr.renderMs += Zr.renderMs, Wr.ticks += Zr.ticks, Wr.tickMs += Zr.tickMs, Wr.rafs += Zr.rafs, rr > 50 && Qr.slow++, rr > zr && this.outlier(rr, Sr)
      }
      outlier(rr, Sr) {
        const Qr = Math.floor((Sr - this.lastRefillMs) / nr);
        Qr > 0 && (this.tokens = Math.min(Yr, this.tokens + Qr), this.lastRefillMs += Qr * nr), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: Sr,
          intervalMs: rr,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(rr) {
        const Sr = this.summary,
          Qr = Sr.totals;
        if (0 === Sr.frames) return Sr.undrawn.count > 0 && (0, jr.l)("frame", `${rr}s: no frames drawn, ${Sr.undrawn.describe()}; pending max ${Qr.pendingMax}`), Sr.undrawn.count > 0;
        const Zr = Sr.intervals.subarray(0, Math.min(Sr.frames, er)).sort(),
          Wr = [`${Sr.frames} frames, median ${(0,ar.d)((0,ar.h)(Zr,.5))} p95 ${(0,ar.d)((0,ar.h)(Zr,.95))} max ${(0,ar.d)(Sr.maxMs)} ms, ${Sr.slow} over 50, ${Sr.shown+Sr.dropped} over ${zr}`, `${Qr.rafs} rafs, ${Sr.undrawn.describe()}`, `main ${(0,ar.d)(Qr.mainMs)} ms (render ${(0,ar.d)(Qr.renderMs)}, ${Qr.ticks} ticks ${(0,ar.d)(Qr.tickMs)})`];
        return Qr.pendingMax >= 0 && Wr.push(`pending max ${Qr.pendingMax}`), this.ahead >= 0 && Wr.push(`${this.ahead} frames ahead`), Wr.push(`outliers ${Sr.shown} logged, ${Sr.dropped} dropped`), (0, jr.l)("frame", `${rr}s: ${Wr.join("; ")}`), !0
      }
    }
    let vr = null;

    function Or(rr, Sr) {
      return vr ??= new Tr, vr.start(rr, Sr), vr
    }
  },
  35315: (rr, Sr, Qr) => {
    function Zr(rr) {
      return `hidden ${rr.changes} changes, ${Math.round(rr.hiddenMs)} ms`
    }
    Qr.d(Sr, {
      c: () => Wr,
      g: () => Zr
    });
    class Wr {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(rr) {
        this.changes++, document.hidden ? this.hiddenSinceMs = rr : this.hiddenSinceMs >= 0 && (this.hiddenMs += rr - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(rr) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? rr - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);