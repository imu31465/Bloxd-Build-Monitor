export const id = 33;
export const ids = [33];
export const modules = {
  33640: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return 0 === kk.length ? 0 : kk[Math.min(kk.length - 1, Math.floor(ek * kk.length))]
    }

    function fk(kk) {
      return kk.toFixed(1)
    }
    ik.d(ek, {
      c: () => fk,
      d: () => Dk
    })
  },
  33631: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      FIRST_SUMMARIES_FOR_MS: () => wk,
      FIRST_SUMMARY_MS: () => Hk,
      FrameDebugLog: () => jk,
      OUTLIER_BURST: () => pk,
      OUTLIER_MS: () => lk,
      OUTLIER_REFILL_MS: () => yk,
      SUMMARY_MS: () => Uk,
      startFrameDebug: () => dk
    });
    var Dk = ik(4741),
      fk = ik(4728),
      Sk = ik(33640),
      bk = ik(2752),
      rk = ik(1057),
      Pk = ik(2902);
    class mk {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = kk => {
          const ek = kk;
          this.add(ek.startTime, ek.duration, ek.blockingDuration, (0, rk.l)(ek))
        }, this.onLongTask = kk => {
          this.add(kk.startTime, kk.duration, 0, 0)
        }, null !== (0, Pk.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Pk.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(kk, ek, ik, Dk) {
        this.entries.set([kk, ek, ik, Dk], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(kk, ek) {
        if (null === this.kind) return "long tasks n/a";
        let ik = 0,
          Dk = 0,
          fk = 0,
          Sk = 0;
        for (let rk = 0; rk < this.size; rk++) {
          const bk = 4 * rk,
            Pk = this.entries[bk] + this.entries[bk + 1];
          Pk > kk && Pk <= ek + 2 && (ik++, Dk += this.entries[bk + 1], fk += this.entries[bk + 2], Sk += this.entries[bk + 3])
        }
        const bk = "loaf" === this.kind && ik > 0 ? ` (blocking ${fk.toFixed(0)}, script ${Sk.toFixed(0)})` : "";
        return `${ik} ${this.kind} ${Dk.toFixed(0)} ms${bk}`
      }
    }
    var Mk = ik(33646);

    function Kk(kk, ek) {
      return ek < 0 || kk < ek ? kk : kk - ek
    }
    class xk {
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
        }, this.lastMs = 0, this.hidden = new Mk.e, this.hiddenBefore = {
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
        var ek;
        const ik = [];
        if (!0 === (null === (ek = this.source) || void 0 === ek ? void 0 : ek.call(this, this.now)) && (Dk = this.now, fk = this.before, Dk.chunksReceived !== fk.chunksReceived || Dk.chunksCancelled !== fk.chunksCancelled || Dk.chunksStored !== fk.chunksStored || Dk.jobsSent !== fk.jobsSent || Dk.jobsDone !== fk.jobsDone || Dk.jobsInFlight !== fk.jobsInFlight || Dk.workersLive !== fk.workersLive || Dk.workersRetired !== fk.workersRetired)) {
          ik.push(function(kk, ek) {
            const ik = [`chunks +${Kk(kk.chunksReceived,ek.chunksReceived)} got`, `+${Kk(kk.chunksCancelled,ek.chunksCancelled)} cancelled`];
            kk.chunksStored >= 0 && ik.push(`${kk.chunksStored} stored`);
            const Dk = `jobs +${Kk(kk.jobsSent,ek.jobsSent)} sent, +${Kk(kk.jobsDone,ek.jobsDone)} done, ${kk.jobsInFlight} in flight`;
            return `${ik.join(", ")}; ${Dk}; workers ${kk.workersLive} live, ${kk.workersRetired} retired`
          }(this.now, this.before));
          const kk = this.before;
          this.before = this.now, this.now = kk
        }
        var Dk, fk;
        const Sk = this.hidden.totals(kk),
          bk = Sk.changes - this.hiddenBefore.changes,
          rk = Sk.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((bk > 0 || rk > 0) && (ik.push((0, Mk.i)({
            changes: bk,
            hiddenMs: rk
          })), this.hiddenBefore = Sk), 0 === ik.length) return null;
        const Pk = `load ${Math.round((kk-this.lastMs)/1e3)}s: ${ik.join("; ")}`;
        return this.lastMs = kk, Pk
      }
    }
    class nk {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(kk, ek, ik) {
        this.count++, "paced" === kk ? this.paced++ : "skipped" === kk && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = ek, this.longestAhead = ik)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const kk = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${kk} other, longest ${this.longest} in ${(0,Sk.c)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const Uk = 2e4,
      Hk = 5e3,
      wk = 6e4,
      lk = 250,
      pk = 10,
      yk = 6e4,
      Yk = 8192;

    function Lk(kk) {
      return kk.mainMs = 0, kk.renderMs = 0, kk.ticks = 0, kk.tickMs = 0, kk.rafs = 0, kk.pendingBefore = -1, kk.pendingMax = -1, kk.pendingAfter = -1, kk
    }

    function Ck() {
      return Lk({})
    }
    class Ak {
      constructor() {
        this.intervals = new Float64Array(Yk), this.totals = Ck(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new nk, this.shown = 0, this.dropped = 0
      }
      reset() {
        Lk(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class jk {
      constructor() {
        this.longTasks = new mk, this.summary = new Ak, this.current = Ck(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = pk, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new xk, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (kk, ek, ik, fk, Sk, bk) => {
          this.ahead = kk.headerWord(Dk.L.Pacing) & Dk.fb.AheadMask, this.frame(ek, ik, fk, Sk, kk.headerWord(Dk.L.RenderUs) / 1e3, kk.headerWord(Dk.L.TicksRun), bk, kk.headerWord(Dk.L.RenderPending))
        }, this.wasmPeekPaced = kk => {
          const ek = performance.now();
          this.frame(ek, ek, "paced", kk, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (kk, ek, ik) => {
          this.frame(kk, ek, "drawn", ik, ek - kk, 0, 0, -1)
        }, this.jsTick = kk => {
          this.current.mainMs += kk, this.current.ticks++, this.current.tickMs += kk
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const kk = performance.now();
          let ek = 0;
          for (const ik of this.waiting) {
            if (ik.dueMs > kk) {
              this.waiting[ek++] = ik;
              continue
            }
            const Dk = [`long frame ${(0,Sk.c)(ik.intervalMs)} ms ending at ${(0,Sk.c)(ik.endMs)} ms: main ${(0,Sk.c)(ik.mainMs)} (render ${(0,Sk.c)(ik.renderMs)}, ${ik.ticks} ticks ${(0,Sk.c)(ik.tickMs)}), outside ${(0,Sk.c)(ik.intervalMs-ik.mainMs)}`, `${ik.rafs} rafs`];
            ik.pendingBefore >= 0 && Dk.push(`pending ${ik.pendingBefore} -> ${ik.pendingAfter} (max ${ik.pendingMax})`), Dk.push(this.longTasks.describe(ik.endMs - ik.intervalMs, ik.endMs)), (0, bk.l)("frame", Dk.join("; "))
          }
          this.waiting.length = ek, ek > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - kk))
        }, this.flush = () => {
          this.flushTimer = null;
          const kk = performance.now(),
            ek = Math.round((kk - this.lastFlushMs) / 1e3);
          this.lastFlushMs = kk, this.scheduleFlush();
          if (this.logSummary(ek) || this.inGameSinceFlush) {
            const ek = this.loadLine.take(kk);
            null !== ek && (0, bk.l)("frame", ek)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(kk, ek) {
        var ik;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, bk.l)("frame", `start: ${kk} client, ${ek}, dpr ${window.devicePixelRatio}, long tasks ${null!==(ik=this.longTasks.kind)&&void 0!==ik?ik:"n/a"}; a summary each ${Uk/1e3} s in game (${Hk/1e3} s for the first ${wk/1e3} s), outliers over ${lk} ms`)
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
        const kk = performance.now() - this.startedMs < wk;
        this.flushTimer = setTimeout(this.flush, kk ? Hk : Uk)
      }
      frame(kk, ek, ik, Dk, Sk, bk, rk, Pk) {
        if (!Dk) return this.restart(), void(this.lastPending = Pk);
        const mk = this.current;
        (0, fk.d)(ik) ? (this.lastDrawnStartMs >= 0 && (mk.pendingAfter = this.lastPending, this.closeInterval(kk - this.lastDrawnStartMs, kk)), this.lastDrawnStartMs = kk, Lk(mk).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(ik, ek - this.lastDrawnStartMs, this.ahead), mk.mainMs += ek - kk, mk.renderMs += Sk, mk.ticks += bk, mk.tickMs += rk, mk.pendingMax = Math.max(mk.pendingMax, Pk), this.lastPending = Pk, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, Pk)
      }
      closeInterval(kk, ek) {
        const ik = this.summary,
          Dk = this.current;
        ik.frames < Yk && (ik.intervals[ik.frames] = kk), ik.frames++, ik.maxMs = Math.max(ik.maxMs, kk);
        const fk = ik.totals;
        fk.mainMs += Dk.mainMs, fk.renderMs += Dk.renderMs, fk.ticks += Dk.ticks, fk.tickMs += Dk.tickMs, fk.rafs += Dk.rafs, kk > 50 && ik.slow++, kk > lk && this.outlier(kk, ek)
      }
      outlier(kk, ek) {
        const ik = Math.floor((ek - this.lastRefillMs) / yk);
        ik > 0 && (this.tokens = Math.min(pk, this.tokens + ik), this.lastRefillMs += ik * yk), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: ek,
          intervalMs: kk,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(kk) {
        const ek = this.summary,
          ik = ek.totals;
        if (0 === ek.frames) return ek.undrawn.count > 0 && (0, bk.l)("frame", `${kk}s: no frames drawn, ${ek.undrawn.describe()}; pending max ${ik.pendingMax}`), ek.undrawn.count > 0;
        const Dk = ek.intervals.subarray(0, Math.min(ek.frames, Yk)).sort(),
          fk = [`${ek.frames} frames, median ${(0,Sk.c)((0,Sk.d)(Dk,.5))} p95 ${(0,Sk.c)((0,Sk.d)(Dk,.95))} max ${(0,Sk.c)(ek.maxMs)} ms, ${ek.slow} over 50, ${ek.shown+ek.dropped} over ${lk}`, `${ik.rafs} rafs, ${ek.undrawn.describe()}`, `main ${(0,Sk.c)(ik.mainMs)} ms (render ${(0,Sk.c)(ik.renderMs)}, ${ik.ticks} ticks ${(0,Sk.c)(ik.tickMs)})`];
        return ik.pendingMax >= 0 && fk.push(`pending max ${ik.pendingMax}`), this.ahead >= 0 && fk.push(`${this.ahead} frames ahead`), fk.push(`outliers ${ek.shown} logged, ${ek.dropped} dropped`), (0, bk.l)("frame", `${kk}s: ${fk.join("; ")}`), !0
      }
    }
    let sk = null;

    function dk(kk, ek) {
      return sk ??= new jk, sk.start(kk, ek), sk
    }
  },
  33646: (kk, ek, ik) => {
    function Dk(kk) {
      return `hidden ${kk.changes} changes, ${Math.round(kk.hiddenMs)} ms`
    }
    ik.d(ek, {
      e: () => fk,
      i: () => Dk
    });
    class fk {
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