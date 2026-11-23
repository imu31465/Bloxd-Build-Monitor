export const id = 33;
export const ids = [33];
export const modules = {
  34020: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return 0 === kk.length ? 0 : kk[Math.min(kk.length - 1, Math.floor(Fk * kk.length))]
    }

    function Tk(kk) {
      return kk.toFixed(1)
    }
    Ik.d(Fk, {
      b: () => Tk,
      d: () => Xk
    })
  },
  34018: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      FIRST_SUMMARIES_FOR_MS: () => Hk,
      FIRST_SUMMARY_MS: () => wk,
      FrameDebugLog: () => zk,
      OUTLIER_BURST: () => xk,
      OUTLIER_MS: () => Jk,
      OUTLIER_REFILL_MS: () => Pk,
      SUMMARY_MS: () => ek,
      startFrameDebug: () => vk
    });
    var Xk = Ik(4799),
      Tk = Ik(4794),
      ik = Ik(34020),
      yk = Ik(2744),
      lk = Ik(1084),
      ak = Ik(2877);
    class qk {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = kk => {
          const Fk = kk;
          this.add(Fk.startTime, Fk.duration, Fk.blockingDuration, (0, lk.m)(Fk))
        }, this.onLongTask = kk => {
          this.add(kk.startTime, kk.duration, 0, 0)
        }, null !== (0, ak.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, ak.d)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(kk, Fk, Ik, Xk) {
        this.entries.set([kk, Fk, Ik, Xk], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(kk, Fk) {
        if (null === this.kind) return "long tasks n/a";
        let Ik = 0,
          Xk = 0,
          Tk = 0,
          ik = 0;
        for (let lk = 0; lk < this.size; lk++) {
          const yk = 4 * lk,
            ak = this.entries[yk] + this.entries[yk + 1];
          ak > kk && ak <= Fk + 2 && (Ik++, Xk += this.entries[yk + 1], Tk += this.entries[yk + 2], ik += this.entries[yk + 3])
        }
        const yk = "loaf" === this.kind && Ik > 0 ? ` (blocking ${Tk.toFixed(0)}, script ${ik.toFixed(0)})` : "";
        return `${Ik} ${this.kind} ${Xk.toFixed(0)} ms${yk}`
      }
    }
    var Lk = Ik(34023);

    function tk(kk, Fk) {
      return Fk < 0 || kk < Fk ? kk : kk - Fk
    }
    class Zk {
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
        }, this.lastMs = 0, this.hidden = new Lk.d, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(kk) {
        this.source = kk
      }
      start(kk) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = kk
      }
      take(kk) {
        var Fk;
        const Ik = [];
        if (!0 === (null === (Fk = this.source) || void 0 === Fk ? void 0 : Fk.call(this, this.now)) && (Xk = this.now, Tk = this.before, Xk.chunksReceived !== Tk.chunksReceived || Xk.chunksCancelled !== Tk.chunksCancelled || Xk.chunksStored !== Tk.chunksStored || Xk.jobsSent !== Tk.jobsSent || Xk.jobsDone !== Tk.jobsDone || Xk.jobsInFlight !== Tk.jobsInFlight || Xk.workersLive !== Tk.workersLive || Xk.workersRetired !== Tk.workersRetired)) {
          Ik.push(function(kk, Fk) {
            const Ik = [`chunks +${tk(kk.chunksReceived,Fk.chunksReceived)} got`, `+${tk(kk.chunksCancelled,Fk.chunksCancelled)} cancelled`];
            kk.chunksStored >= 0 && Ik.push(`${kk.chunksStored} stored`);
            const Xk = `jobs +${tk(kk.jobsSent,Fk.jobsSent)} sent, +${tk(kk.jobsDone,Fk.jobsDone)} done, ${kk.jobsInFlight} in flight`;
            return `${Ik.join(", ")}; ${Xk}; workers ${kk.workersLive} live, ${kk.workersRetired} retired`
          }(this.now, this.before));
          const kk = this.before;
          this.before = this.now, this.now = kk
        }
        var Xk, Tk;
        const ik = this.hidden.totals(kk),
          yk = ik.changes - this.hiddenBefore.changes,
          lk = ik.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((yk > 0 || lk > 0) && (Ik.push((0, Lk.e)({
            changes: yk,
            hiddenMs: lk
          })), this.hiddenBefore = ik), 0 === Ik.length) return null;
        const ak = `load ${Math.round((kk-this.lastMs)/1e3)}s: ${Ik.join("; ")}`;
        return this.lastMs = kk, ak
      }
    }
    class jk {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(kk, Fk, Ik) {
        this.count++, "paced" === kk ? this.paced++ : "skipped" === kk && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = Fk, this.longestAhead = Ik)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const kk = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${kk} other, longest ${this.longest} in ${(0,ik.b)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const ek = 2e4,
      wk = 5e3,
      Hk = 6e4,
      Jk = 250,
      xk = 10,
      Pk = 6e4,
      Kk = 8192;

    function Qk(kk) {
      return kk.mainMs = 0, kk.renderMs = 0, kk.ticks = 0, kk.tickMs = 0, kk.rafs = 0, kk.pendingBefore = -1, kk.pendingMax = -1, kk.pendingAfter = -1, kk
    }

    function sk() {
      return Qk({})
    }
    class Vk {
      constructor() {
        this.intervals = new Float64Array(Kk), this.totals = sk(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new jk, this.shown = 0, this.dropped = 0
      }
      reset() {
        Qk(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class zk {
      constructor() {
        this.longTasks = new qk, this.summary = new Vk, this.current = sk(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = xk, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new Zk, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (kk, Fk, Ik, Tk, ik, yk) => {
          this.ahead = kk.headerWord(Xk.F.Pacing) & Xk.cb.AheadMask, this.frame(Fk, Ik, Tk, ik, kk.headerWord(Xk.F.RenderUs) / 1e3, kk.headerWord(Xk.F.TicksRun), yk, kk.headerWord(Xk.F.RenderPending))
        }, this.wasmPeekPaced = kk => {
          const Fk = performance.now();
          this.frame(Fk, Fk, "paced", kk, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (kk, Fk, Ik) => {
          this.frame(kk, Fk, "drawn", Ik, Fk - kk, 0, 0, -1)
        }, this.jsTick = kk => {
          this.current.mainMs += kk, this.current.ticks++, this.current.tickMs += kk
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const kk = performance.now();
          let Fk = 0;
          for (const Ik of this.waiting) {
            if (Ik.dueMs > kk) {
              this.waiting[Fk++] = Ik;
              continue
            }
            const Xk = [`long frame ${(0,ik.b)(Ik.intervalMs)} ms ending at ${(0,ik.b)(Ik.endMs)} ms: main ${(0,ik.b)(Ik.mainMs)} (render ${(0,ik.b)(Ik.renderMs)}, ${Ik.ticks} ticks ${(0,ik.b)(Ik.tickMs)}), outside ${(0,ik.b)(Ik.intervalMs-Ik.mainMs)}`, `${Ik.rafs} rafs`];
            Ik.pendingBefore >= 0 && Xk.push(`pending ${Ik.pendingBefore} -> ${Ik.pendingAfter} (max ${Ik.pendingMax})`), Xk.push(this.longTasks.describe(Ik.endMs - Ik.intervalMs, Ik.endMs)), (0, yk.g)("frame", Xk.join("; "))
          }
          this.waiting.length = Fk, Fk > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - kk))
        }, this.flush = () => {
          this.flushTimer = null;
          const kk = performance.now(),
            Fk = Math.round((kk - this.lastFlushMs) / 1e3);
          this.lastFlushMs = kk, this.scheduleFlush();
          if (this.logSummary(Fk) || this.inGameSinceFlush) {
            const Fk = this.loadLine.take(kk);
            null !== Fk && (0, yk.g)("frame", Fk)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(kk, Fk) {
        var Ik;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, yk.g)("frame", `start: ${kk} client, ${Fk}, dpr ${window.devicePixelRatio}, long tasks ${null!==(Ik=this.longTasks.kind)&&void 0!==Ik?Ik:"n/a"}; a summary each ${ek/1e3} s in game (${wk/1e3} s for the first ${Hk/1e3} s), outliers over ${Jk} ms`)
      }
      setLoadCounts(kk) {
        this.loadLine.setSource(kk)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const kk = performance.now() - this.startedMs < Hk;
        this.flushTimer = setTimeout(this.flush, kk ? wk : ek)
      }
      frame(kk, Fk, Ik, Xk, ik, yk, lk, ak) {
        if (!Xk) return this.restart(), void(this.lastPending = ak);
        const qk = this.current;
        (0, Tk.d)(Ik) ? (this.lastDrawnStartMs >= 0 && (qk.pendingAfter = this.lastPending, this.closeInterval(kk - this.lastDrawnStartMs, kk)), this.lastDrawnStartMs = kk, Qk(qk).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(Ik, Fk - this.lastDrawnStartMs, this.ahead), qk.mainMs += Fk - kk, qk.renderMs += ik, qk.ticks += yk, qk.tickMs += lk, qk.pendingMax = Math.max(qk.pendingMax, ak), this.lastPending = ak, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, ak)
      }
      closeInterval(kk, Fk) {
        const Ik = this.summary,
          Xk = this.current;
        Ik.frames < Kk && (Ik.intervals[Ik.frames] = kk), Ik.frames++, Ik.maxMs = Math.max(Ik.maxMs, kk);
        const Tk = Ik.totals;
        Tk.mainMs += Xk.mainMs, Tk.renderMs += Xk.renderMs, Tk.ticks += Xk.ticks, Tk.tickMs += Xk.tickMs, Tk.rafs += Xk.rafs, kk > 50 && Ik.slow++, kk > Jk && this.outlier(kk, Fk)
      }
      outlier(kk, Fk) {
        const Ik = Math.floor((Fk - this.lastRefillMs) / Pk);
        Ik > 0 && (this.tokens = Math.min(xk, this.tokens + Ik), this.lastRefillMs += Ik * Pk), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: Fk,
          intervalMs: kk,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(kk) {
        const Fk = this.summary,
          Ik = Fk.totals;
        if (0 === Fk.frames) return Fk.undrawn.count > 0 && (0, yk.g)("frame", `${kk}s: no frames drawn, ${Fk.undrawn.describe()}; pending max ${Ik.pendingMax}`), Fk.undrawn.count > 0;
        const Xk = Fk.intervals.subarray(0, Math.min(Fk.frames, Kk)).sort(),
          Tk = [`${Fk.frames} frames, median ${(0,ik.b)((0,ik.d)(Xk,.5))} p95 ${(0,ik.b)((0,ik.d)(Xk,.95))} max ${(0,ik.b)(Fk.maxMs)} ms, ${Fk.slow} over 50, ${Fk.shown+Fk.dropped} over ${Jk}`, `${Ik.rafs} rafs, ${Fk.undrawn.describe()}`, `main ${(0,ik.b)(Ik.mainMs)} ms (render ${(0,ik.b)(Ik.renderMs)}, ${Ik.ticks} ticks ${(0,ik.b)(Ik.tickMs)})`];
        return Ik.pendingMax >= 0 && Tk.push(`pending max ${Ik.pendingMax}`), this.ahead >= 0 && Tk.push(`${this.ahead} frames ahead`), Tk.push(`outliers ${Fk.shown} logged, ${Fk.dropped} dropped`), (0, yk.g)("frame", `${kk}s: ${Tk.join("; ")}`), !0
      }
    }
    let Sk = null;

    function vk(kk, Fk) {
      return Sk ??= new zk, Sk.start(kk, Fk), Sk
    }
  },
  34023: (kk, Fk, Ik) => {
    function Xk(kk) {
      return `hidden ${kk.changes} changes, ${Math.round(kk.hiddenMs)} ms`
    }
    Ik.d(Fk, {
      d: () => Tk,
      e: () => Xk
    });
    class Tk {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(kk) {
        this.changes++, document.hidden ? this.hiddenSinceMs = kk : this.hiddenSinceMs >= 0 && (this.hiddenMs += kk - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(kk) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? kk - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);