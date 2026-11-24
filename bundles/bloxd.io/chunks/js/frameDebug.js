export const id = 33;
export const ids = [33];
export const modules = {
  34280: (pp, ip, cp) => {
    function Op(pp, ip) {
      return 0 === pp.length ? 0 : pp[Math.min(pp.length - 1, Math.floor(ip * pp.length))]
    }

    function op(pp) {
      return pp.toFixed(1)
    }
    cp.d(ip, {
      d: () => op,
      f: () => Op
    })
  },
  34273: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      FIRST_SUMMARIES_FOR_MS: () => wp,
      FIRST_SUMMARY_MS: () => Up,
      FrameDebugLog: () => mp,
      OUTLIER_BURST: () => tp,
      OUTLIER_MS: () => vp,
      OUTLIER_REFILL_MS: () => Hp,
      SUMMARY_MS: () => yp,
      startFrameDebug: () => qp
    });
    var Op = cp(4911),
      op = cp(4895),
      Ip = cp(34280),
      Sp = cp(2908),
      xp = cp(1101),
      Lp = cp(3058);
    class Yp {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = pp => {
          const ip = pp;
          this.add(ip.startTime, ip.duration, ip.blockingDuration, (0, xp.n)(ip))
        }, this.onLongTask = pp => {
          this.add(pp.startTime, pp.duration, 0, 0)
        }, null !== (0, Lp.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Lp.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(pp, ip, cp, Op) {
        this.entries.set([pp, ip, cp, Op], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(pp, ip) {
        if (null === this.kind) return "long tasks n/a";
        let cp = 0,
          Op = 0,
          op = 0,
          Ip = 0;
        for (let xp = 0; xp < this.size; xp++) {
          const Sp = 4 * xp,
            Lp = this.entries[Sp] + this.entries[Sp + 1];
          Lp > pp && Lp <= ip + 2 && (cp++, Op += this.entries[Sp + 1], op += this.entries[Sp + 2], Ip += this.entries[Sp + 3])
        }
        const Sp = "loaf" === this.kind && cp > 0 ? ` (blocking ${op.toFixed(0)}, script ${Ip.toFixed(0)})` : "";
        return `${cp} ${this.kind} ${Op.toFixed(0)} ms${Sp}`
      }
    }
    var Dp = cp(34287);

    function Ap(pp, ip) {
      return ip < 0 || pp < ip ? pp : pp - ip
    }
    class Pp {
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
        }, this.lastMs = 0, this.hidden = new Dp.c, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(pp) {
        this.source = pp
      }
      start(pp) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = pp
      }
      take(pp) {
        var ip;
        const cp = [];
        if (!0 === (null === (ip = this.source) || void 0 === ip ? void 0 : ip.call(this, this.now)) && (Op = this.now, op = this.before, Op.chunksReceived !== op.chunksReceived || Op.chunksCancelled !== op.chunksCancelled || Op.chunksStored !== op.chunksStored || Op.jobsSent !== op.jobsSent || Op.jobsDone !== op.jobsDone || Op.jobsInFlight !== op.jobsInFlight || Op.workersLive !== op.workersLive || Op.workersRetired !== op.workersRetired)) {
          cp.push(function(pp, ip) {
            const cp = [`chunks +${Ap(pp.chunksReceived,ip.chunksReceived)} got`, `+${Ap(pp.chunksCancelled,ip.chunksCancelled)} cancelled`];
            pp.chunksStored >= 0 && cp.push(`${pp.chunksStored} stored`);
            const Op = `jobs +${Ap(pp.jobsSent,ip.jobsSent)} sent, +${Ap(pp.jobsDone,ip.jobsDone)} done, ${pp.jobsInFlight} in flight`;
            return `${cp.join(", ")}; ${Op}; workers ${pp.workersLive} live, ${pp.workersRetired} retired`
          }(this.now, this.before));
          const pp = this.before;
          this.before = this.now, this.now = pp
        }
        var Op, op;
        const Ip = this.hidden.totals(pp),
          Sp = Ip.changes - this.hiddenBefore.changes,
          xp = Ip.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((Sp > 0 || xp > 0) && (cp.push((0, Dp.e)({
            changes: Sp,
            hiddenMs: xp
          })), this.hiddenBefore = Ip), 0 === cp.length) return null;
        const Lp = `load ${Math.round((pp-this.lastMs)/1e3)}s: ${cp.join("; ")}`;
        return this.lastMs = pp, Lp
      }
    }
    class Wp {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(pp, ip, cp) {
        this.count++, "paced" === pp ? this.paced++ : "skipped" === pp && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = ip, this.longestAhead = cp)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const pp = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${pp} other, longest ${this.longest} in ${(0,Ip.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const yp = 2e4,
      Up = 5e3,
      wp = 6e4,
      vp = 250,
      tp = 10,
      Hp = 6e4,
      dp = 8192;

    function ep(pp) {
      return pp.mainMs = 0, pp.renderMs = 0, pp.ticks = 0, pp.tickMs = 0, pp.rafs = 0, pp.pendingBefore = -1, pp.pendingMax = -1, pp.pendingAfter = -1, pp
    }

    function jp() {
      return ep({})
    }
    class kp {
      constructor() {
        this.intervals = new Float64Array(dp), this.totals = jp(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new Wp, this.shown = 0, this.dropped = 0
      }
      reset() {
        ep(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class mp {
      constructor() {
        this.longTasks = new Yp, this.summary = new kp, this.current = jp(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = tp, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new Pp, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (pp, ip, cp, op, Ip, Sp) => {
          this.ahead = pp.headerWord(Op.x.Pacing) & Op.O.AheadMask, this.frame(ip, cp, op, Ip, pp.headerWord(Op.x.RenderUs) / 1e3, pp.headerWord(Op.x.TicksRun), Sp, pp.headerWord(Op.x.RenderPending))
        }, this.wasmPeekPaced = pp => {
          const ip = performance.now();
          this.frame(ip, ip, "paced", pp, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (pp, ip, cp) => {
          this.frame(pp, ip, "drawn", cp, ip - pp, 0, 0, -1)
        }, this.jsTick = pp => {
          this.current.mainMs += pp, this.current.ticks++, this.current.tickMs += pp
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const pp = performance.now();
          let ip = 0;
          for (const cp of this.waiting) {
            if (cp.dueMs > pp) {
              this.waiting[ip++] = cp;
              continue
            }
            const Op = [`long frame ${(0,Ip.d)(cp.intervalMs)} ms ending at ${(0,Ip.d)(cp.endMs)} ms: main ${(0,Ip.d)(cp.mainMs)} (render ${(0,Ip.d)(cp.renderMs)}, ${cp.ticks} ticks ${(0,Ip.d)(cp.tickMs)}), outside ${(0,Ip.d)(cp.intervalMs-cp.mainMs)}`, `${cp.rafs} rafs`];
            cp.pendingBefore >= 0 && Op.push(`pending ${cp.pendingBefore} -> ${cp.pendingAfter} (max ${cp.pendingMax})`), Op.push(this.longTasks.describe(cp.endMs - cp.intervalMs, cp.endMs)), (0, Sp.n)("frame", Op.join("; "))
          }
          this.waiting.length = ip, ip > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - pp))
        }, this.flush = () => {
          this.flushTimer = null;
          const pp = performance.now(),
            ip = Math.round((pp - this.lastFlushMs) / 1e3);
          this.lastFlushMs = pp, this.scheduleFlush();
          if (this.logSummary(ip) || this.inGameSinceFlush) {
            const ip = this.loadLine.take(pp);
            null !== ip && (0, Sp.n)("frame", ip)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(pp, ip) {
        var cp;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Sp.n)("frame", `start: ${pp} client, ${ip}, dpr ${window.devicePixelRatio}, long tasks ${null!==(cp=this.longTasks.kind)&&void 0!==cp?cp:"n/a"}; a summary each ${yp/1e3} s in game (${Up/1e3} s for the first ${wp/1e3} s), outliers over ${vp} ms`)
      }
      setLoadCounts(pp) {
        this.loadLine.setSource(pp)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const pp = performance.now() - this.startedMs < wp;
        this.flushTimer = setTimeout(this.flush, pp ? Up : yp)
      }
      frame(pp, ip, cp, Op, Ip, Sp, xp, Lp) {
        if (!Op) return this.restart(), void(this.lastPending = Lp);
        const Yp = this.current;
        (0, op.e)(cp) ? (this.lastDrawnStartMs >= 0 && (Yp.pendingAfter = this.lastPending, this.closeInterval(pp - this.lastDrawnStartMs, pp)), this.lastDrawnStartMs = pp, ep(Yp).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(cp, ip - this.lastDrawnStartMs, this.ahead), Yp.mainMs += ip - pp, Yp.renderMs += Ip, Yp.ticks += Sp, Yp.tickMs += xp, Yp.pendingMax = Math.max(Yp.pendingMax, Lp), this.lastPending = Lp, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, Lp)
      }
      closeInterval(pp, ip) {
        const cp = this.summary,
          Op = this.current;
        cp.frames < dp && (cp.intervals[cp.frames] = pp), cp.frames++, cp.maxMs = Math.max(cp.maxMs, pp);
        const op = cp.totals;
        op.mainMs += Op.mainMs, op.renderMs += Op.renderMs, op.ticks += Op.ticks, op.tickMs += Op.tickMs, op.rafs += Op.rafs, pp > 50 && cp.slow++, pp > vp && this.outlier(pp, ip)
      }
      outlier(pp, ip) {
        const cp = Math.floor((ip - this.lastRefillMs) / Hp);
        cp > 0 && (this.tokens = Math.min(tp, this.tokens + cp), this.lastRefillMs += cp * Hp), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: ip,
          intervalMs: pp,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(pp) {
        const ip = this.summary,
          cp = ip.totals;
        if (0 === ip.frames) return ip.undrawn.count > 0 && (0, Sp.n)("frame", `${pp}s: no frames drawn, ${ip.undrawn.describe()}; pending max ${cp.pendingMax}`), ip.undrawn.count > 0;
        const Op = ip.intervals.subarray(0, Math.min(ip.frames, dp)).sort(),
          op = [`${ip.frames} frames, median ${(0,Ip.d)((0,Ip.f)(Op,.5))} p95 ${(0,Ip.d)((0,Ip.f)(Op,.95))} max ${(0,Ip.d)(ip.maxMs)} ms, ${ip.slow} over 50, ${ip.shown+ip.dropped} over ${vp}`, `${cp.rafs} rafs, ${ip.undrawn.describe()}`, `main ${(0,Ip.d)(cp.mainMs)} ms (render ${(0,Ip.d)(cp.renderMs)}, ${cp.ticks} ticks ${(0,Ip.d)(cp.tickMs)})`];
        return cp.pendingMax >= 0 && op.push(`pending max ${cp.pendingMax}`), this.ahead >= 0 && op.push(`${this.ahead} frames ahead`), op.push(`outliers ${ip.shown} logged, ${ip.dropped} dropped`), (0, Sp.n)("frame", `${pp}s: ${op.join("; ")}`), !0
      }
    }
    let Rp = null;

    function qp(pp, ip) {
      return Rp ??= new mp, Rp.start(pp, ip), Rp
    }
  },
  34287: (pp, ip, cp) => {
    function Op(pp) {
      return `hidden ${pp.changes} changes, ${Math.round(pp.hiddenMs)} ms`
    }
    cp.d(ip, {
      c: () => op,
      e: () => Op
    });
    class op {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(pp) {
        this.changes++, document.hidden ? this.hiddenSinceMs = pp : this.hiddenSinceMs >= 0 && (this.hiddenMs += pp - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(pp) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? pp - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);