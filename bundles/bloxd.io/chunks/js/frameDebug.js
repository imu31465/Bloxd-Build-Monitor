export const id = 40;
export const ids = [40];
export const modules = {
  35186: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return 0 === bb.length ? 0 : bb[Math.min(bb.length - 1, Math.floor(wb * bb.length))]
    }

    function Hb(bb) {
      return bb.toFixed(1)
    }
    Mb.d(wb, {
      b: () => Hb,
      e: () => eb
    })
  },
  35181: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      FIRST_SUMMARIES_FOR_MS: () => Fb,
      FIRST_SUMMARY_MS: () => Eb,
      FrameDebugLog: () => jb,
      OUTLIER_BURST: () => sb,
      OUTLIER_MS: () => Bb,
      OUTLIER_REFILL_MS: () => mb,
      SUMMARY_MS: () => Cb,
      startFrameDebug: () => rb
    });
    var eb = Mb(5685),
      Hb = Mb(5675),
      pb = Mb(35186),
      Vb = Mb(4060),
      gb = Mb(1415),
      lb = Mb(4239);
    class Lb {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = bb => {
          const wb = bb;
          this.add(wb.startTime, wb.duration, wb.blockingDuration, (0, gb.r)(wb))
        }, this.onLongTask = bb => {
          this.add(bb.startTime, bb.duration, 0, 0)
        }, null !== (0, lb.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, lb.d)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(bb, wb, Mb, eb) {
        this.entries.set([bb, wb, Mb, eb], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(bb, wb) {
        if (null === this.kind) return "long tasks n/a";
        let Mb = 0,
          eb = 0,
          Hb = 0,
          pb = 0;
        for (let gb = 0; gb < this.size; gb++) {
          const Vb = 4 * gb,
            lb = this.entries[Vb] + this.entries[Vb + 1];
          lb > bb && lb <= wb + 2 && (Mb++, eb += this.entries[Vb + 1], Hb += this.entries[Vb + 2], pb += this.entries[Vb + 3])
        }
        const Vb = "loaf" === this.kind && Mb > 0 ? ` (blocking ${Hb.toFixed(0)}, script ${pb.toFixed(0)})` : "";
        return `${Mb} ${this.kind} ${eb.toFixed(0)} ms${Vb}`
      }
    }
    var Ib = Mb(35190);

    function Ob(bb, wb) {
      return wb < 0 || bb < wb ? bb : bb - wb
    }
    class Ub {
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
        }, this.lastMs = 0, this.hidden = new Ib.d, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(bb) {
        this.source = bb
      }
      start(bb) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = bb
      }
      take(bb) {
        var wb;
        const Mb = [];
        if (!0 === (null === (wb = this.source) || void 0 === wb ? void 0 : wb.call(this, this.now)) && (eb = this.now, Hb = this.before, eb.chunksReceived !== Hb.chunksReceived || eb.chunksCancelled !== Hb.chunksCancelled || eb.chunksStored !== Hb.chunksStored || eb.jobsSent !== Hb.jobsSent || eb.jobsDone !== Hb.jobsDone || eb.jobsInFlight !== Hb.jobsInFlight || eb.workersLive !== Hb.workersLive || eb.workersRetired !== Hb.workersRetired)) {
          Mb.push(function(bb, wb) {
            const Mb = [`chunks +${Ob(bb.chunksReceived,wb.chunksReceived)} got`, `+${Ob(bb.chunksCancelled,wb.chunksCancelled)} cancelled`];
            bb.chunksStored >= 0 && Mb.push(`${bb.chunksStored} stored`);
            const eb = `jobs +${Ob(bb.jobsSent,wb.jobsSent)} sent, +${Ob(bb.jobsDone,wb.jobsDone)} done, ${bb.jobsInFlight} in flight`;
            return `${Mb.join(", ")}; ${eb}; workers ${bb.workersLive} live, ${bb.workersRetired} retired`
          }(this.now, this.before));
          const bb = this.before;
          this.before = this.now, this.now = bb
        }
        var eb, Hb;
        const pb = this.hidden.totals(bb),
          Vb = pb.changes - this.hiddenBefore.changes,
          gb = pb.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((Vb > 0 || gb > 0) && (Mb.push((0, Ib.f)({
            changes: Vb,
            hiddenMs: gb
          })), this.hiddenBefore = pb), 0 === Mb.length) return null;
        const lb = `load ${Math.round((bb-this.lastMs)/1e3)}s: ${Mb.join("; ")}`;
        return this.lastMs = bb, lb
      }
    }
    class tb {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(bb, wb, Mb) {
        this.count++, "paced" === bb ? this.paced++ : "skipped" === bb && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = wb, this.longestAhead = Mb)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const bb = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${bb} other, longest ${this.longest} in ${(0,pb.b)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const Cb = 2e4,
      Eb = 5e3,
      Fb = 6e4,
      Bb = 250,
      sb = 10,
      mb = 6e4,
      hb = 8192;

    function zb(bb) {
      return bb.mainMs = 0, bb.renderMs = 0, bb.ticks = 0, bb.tickMs = 0, bb.rafs = 0, bb.pendingBefore = -1, bb.pendingMax = -1, bb.pendingAfter = -1, bb
    }

    function Xb() {
      return zb({})
    }
    class xb {
      constructor() {
        this.intervals = new Float64Array(hb), this.totals = Xb(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new tb, this.shown = 0, this.dropped = 0
      }
      reset() {
        zb(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class jb {
      constructor() {
        this.longTasks = new Lb, this.summary = new xb, this.current = Xb(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = sb, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new Ub, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (bb, wb, Mb, Hb, pb, Vb) => {
          this.ahead = bb.headerWord(eb.L.Pacing) & eb.hb.AheadMask, this.frame(wb, Mb, Hb, pb, bb.headerWord(eb.L.RenderUs) / 1e3, bb.headerWord(eb.L.TicksRun), Vb, bb.headerWord(eb.L.RenderPending))
        }, this.wasmPeekPaced = bb => {
          const wb = performance.now();
          this.frame(wb, wb, "paced", bb, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (bb, wb, Mb) => {
          this.frame(bb, wb, "drawn", Mb, wb - bb, 0, 0, -1)
        }, this.jsTick = bb => {
          this.current.mainMs += bb, this.current.ticks++, this.current.tickMs += bb
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const bb = performance.now();
          let wb = 0;
          for (const Mb of this.waiting) {
            if (Mb.dueMs > bb) {
              this.waiting[wb++] = Mb;
              continue
            }
            const eb = [`long frame ${(0,pb.b)(Mb.intervalMs)} ms ending at ${(0,pb.b)(Mb.endMs)} ms: main ${(0,pb.b)(Mb.mainMs)} (render ${(0,pb.b)(Mb.renderMs)}, ${Mb.ticks} ticks ${(0,pb.b)(Mb.tickMs)}), outside ${(0,pb.b)(Mb.intervalMs-Mb.mainMs)}`, `${Mb.rafs} rafs`];
            Mb.pendingBefore >= 0 && eb.push(`pending ${Mb.pendingBefore} -> ${Mb.pendingAfter} (max ${Mb.pendingMax})`), eb.push(this.longTasks.describe(Mb.endMs - Mb.intervalMs, Mb.endMs)), (0, Vb.j)("frame", eb.join("; "))
          }
          this.waiting.length = wb, wb > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - bb))
        }, this.flush = () => {
          this.flushTimer = null;
          const bb = performance.now(),
            wb = Math.round((bb - this.lastFlushMs) / 1e3);
          this.lastFlushMs = bb, this.scheduleFlush();
          if (this.logSummary(wb) || this.inGameSinceFlush) {
            const wb = this.loadLine.take(bb);
            null !== wb && (0, Vb.j)("frame", wb)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(bb, wb) {
        var Mb;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Vb.j)("frame", `start: ${bb} client, ${wb}, dpr ${window.devicePixelRatio}, long tasks ${null!==(Mb=this.longTasks.kind)&&void 0!==Mb?Mb:"n/a"}; a summary each ${Cb/1e3} s in game (${Eb/1e3} s for the first ${Fb/1e3} s), outliers over ${Bb} ms`)
      }
      setLoadCounts(bb) {
        this.loadLine.setSource(bb)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const bb = performance.now() - this.startedMs < Fb;
        this.flushTimer = setTimeout(this.flush, bb ? Eb : Cb)
      }
      frame(bb, wb, Mb, eb, pb, Vb, gb, lb) {
        if (!eb) return this.restart(), void(this.lastPending = lb);
        const Lb = this.current;
        (0, Hb.b)(Mb) ? (this.lastDrawnStartMs >= 0 && (Lb.pendingAfter = this.lastPending, this.closeInterval(bb - this.lastDrawnStartMs, bb)), this.lastDrawnStartMs = bb, zb(Lb).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(Mb, wb - this.lastDrawnStartMs, this.ahead), Lb.mainMs += wb - bb, Lb.renderMs += pb, Lb.ticks += Vb, Lb.tickMs += gb, Lb.pendingMax = Math.max(Lb.pendingMax, lb), this.lastPending = lb, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, lb)
      }
      closeInterval(bb, wb) {
        const Mb = this.summary,
          eb = this.current;
        Mb.frames < hb && (Mb.intervals[Mb.frames] = bb), Mb.frames++, Mb.maxMs = Math.max(Mb.maxMs, bb);
        const Hb = Mb.totals;
        Hb.mainMs += eb.mainMs, Hb.renderMs += eb.renderMs, Hb.ticks += eb.ticks, Hb.tickMs += eb.tickMs, Hb.rafs += eb.rafs, bb > 50 && Mb.slow++, bb > Bb && this.outlier(bb, wb)
      }
      outlier(bb, wb) {
        const Mb = Math.floor((wb - this.lastRefillMs) / mb);
        Mb > 0 && (this.tokens = Math.min(sb, this.tokens + Mb), this.lastRefillMs += Mb * mb), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: wb,
          intervalMs: bb,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(bb) {
        const wb = this.summary,
          Mb = wb.totals;
        if (0 === wb.frames) return wb.undrawn.count > 0 && (0, Vb.j)("frame", `${bb}s: no frames drawn, ${wb.undrawn.describe()}; pending max ${Mb.pendingMax}`), wb.undrawn.count > 0;
        const eb = wb.intervals.subarray(0, Math.min(wb.frames, hb)).sort(),
          Hb = [`${wb.frames} frames, median ${(0,pb.b)((0,pb.e)(eb,.5))} p95 ${(0,pb.b)((0,pb.e)(eb,.95))} max ${(0,pb.b)(wb.maxMs)} ms, ${wb.slow} over 50, ${wb.shown+wb.dropped} over ${Bb}`, `${Mb.rafs} rafs, ${wb.undrawn.describe()}`, `main ${(0,pb.b)(Mb.mainMs)} ms (render ${(0,pb.b)(Mb.renderMs)}, ${Mb.ticks} ticks ${(0,pb.b)(Mb.tickMs)})`];
        return Mb.pendingMax >= 0 && Hb.push(`pending max ${Mb.pendingMax}`), this.ahead >= 0 && Hb.push(`${this.ahead} frames ahead`), Hb.push(`outliers ${wb.shown} logged, ${wb.dropped} dropped`), (0, Vb.j)("frame", `${bb}s: ${Hb.join("; ")}`), !0
      }
    }
    let Kb = null;

    function rb(bb, wb) {
      return Kb ??= new jb, Kb.start(bb, wb), Kb
    }
  },
  35190: (bb, wb, Mb) => {
    function eb(bb) {
      return `hidden ${bb.changes} changes, ${Math.round(bb.hiddenMs)} ms`
    }
    Mb.d(wb, {
      d: () => Hb,
      f: () => eb
    });
    class Hb {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(bb) {
        this.changes++, document.hidden ? this.hiddenSinceMs = bb : this.hiddenSinceMs >= 0 && (this.hiddenMs += bb - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(bb) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? bb - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);