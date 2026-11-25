export const id = 33;
export const ids = [33];
export const modules = {
  34416: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return 0 === uu.length ? 0 : uu[Math.min(uu.length - 1, Math.floor(Eu * uu.length))]
    }

    function Uu(uu) {
      return uu.toFixed(1)
    }
    ju.d(Eu, {
      d: () => Uu,
      g: () => su
    })
  },
  34409: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      FIRST_SUMMARIES_FOR_MS: () => hu,
      FIRST_SUMMARY_MS: () => Yu,
      FrameDebugLog: () => Ju,
      OUTLIER_BURST: () => gu,
      OUTLIER_MS: () => Du,
      OUTLIER_REFILL_MS: () => Mu,
      SUMMARY_MS: () => Ou,
      startFrameDebug: () => au
    });
    var su = ju(4976),
      Uu = ju(4965),
      Zu = ju(34416),
      Xu = ju(2943),
      lu = ju(1145),
      qu = ju(3143);
    class fu {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = uu => {
          const Eu = uu;
          this.add(Eu.startTime, Eu.duration, Eu.blockingDuration, (0, lu.o)(Eu))
        }, this.onLongTask = uu => {
          this.add(uu.startTime, uu.duration, 0, 0)
        }, null !== (0, qu.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, qu.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(uu, Eu, ju, su) {
        this.entries.set([uu, Eu, ju, su], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(uu, Eu) {
        if (null === this.kind) return "long tasks n/a";
        let ju = 0,
          su = 0,
          Uu = 0,
          Zu = 0;
        for (let lu = 0; lu < this.size; lu++) {
          const Xu = 4 * lu,
            qu = this.entries[Xu] + this.entries[Xu + 1];
          qu > uu && qu <= Eu + 2 && (ju++, su += this.entries[Xu + 1], Uu += this.entries[Xu + 2], Zu += this.entries[Xu + 3])
        }
        const Xu = "loaf" === this.kind && ju > 0 ? ` (blocking ${Uu.toFixed(0)}, script ${Zu.toFixed(0)})` : "";
        return `${ju} ${this.kind} ${su.toFixed(0)} ms${Xu}`
      }
    }
    var Cu = ju(34424);

    function bu(uu, Eu) {
      return Eu < 0 || uu < Eu ? uu : uu - Eu
    }
    class cu {
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
        }, this.lastMs = 0, this.hidden = new Cu.b, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(uu) {
        this.source = uu
      }
      start(uu) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = uu
      }
      take(uu) {
        var Eu;
        const ju = [];
        if (!0 === (null === (Eu = this.source) || void 0 === Eu ? void 0 : Eu.call(this, this.now)) && (su = this.now, Uu = this.before, su.chunksReceived !== Uu.chunksReceived || su.chunksCancelled !== Uu.chunksCancelled || su.chunksStored !== Uu.chunksStored || su.jobsSent !== Uu.jobsSent || su.jobsDone !== Uu.jobsDone || su.jobsInFlight !== Uu.jobsInFlight || su.workersLive !== Uu.workersLive || su.workersRetired !== Uu.workersRetired)) {
          ju.push(function(uu, Eu) {
            const ju = [`chunks +${bu(uu.chunksReceived,Eu.chunksReceived)} got`, `+${bu(uu.chunksCancelled,Eu.chunksCancelled)} cancelled`];
            uu.chunksStored >= 0 && ju.push(`${uu.chunksStored} stored`);
            const su = `jobs +${bu(uu.jobsSent,Eu.jobsSent)} sent, +${bu(uu.jobsDone,Eu.jobsDone)} done, ${uu.jobsInFlight} in flight`;
            return `${ju.join(", ")}; ${su}; workers ${uu.workersLive} live, ${uu.workersRetired} retired`
          }(this.now, this.before));
          const uu = this.before;
          this.before = this.now, this.now = uu
        }
        var su, Uu;
        const Zu = this.hidden.totals(uu),
          Xu = Zu.changes - this.hiddenBefore.changes,
          lu = Zu.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((Xu > 0 || lu > 0) && (ju.push((0, Cu.d)({
            changes: Xu,
            hiddenMs: lu
          })), this.hiddenBefore = Zu), 0 === ju.length) return null;
        const qu = `load ${Math.round((uu-this.lastMs)/1e3)}s: ${ju.join("; ")}`;
        return this.lastMs = uu, qu
      }
    }
    class Nu {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(uu, Eu, ju) {
        this.count++, "paced" === uu ? this.paced++ : "skipped" === uu && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = Eu, this.longestAhead = ju)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const uu = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${uu} other, longest ${this.longest} in ${(0,Zu.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const Ou = 2e4,
      Yu = 5e3,
      hu = 6e4,
      Du = 250,
      gu = 10,
      Mu = 6e4,
      eu = 8192;

    function Gu(uu) {
      return uu.mainMs = 0, uu.renderMs = 0, uu.ticks = 0, uu.tickMs = 0, uu.rafs = 0, uu.pendingBefore = -1, uu.pendingMax = -1, uu.pendingAfter = -1, uu
    }

    function pu() {
      return Gu({})
    }
    class wu {
      constructor() {
        this.intervals = new Float64Array(eu), this.totals = pu(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new Nu, this.shown = 0, this.dropped = 0
      }
      reset() {
        Gu(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class Ju {
      constructor() {
        this.longTasks = new fu, this.summary = new wu, this.current = pu(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = gu, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new cu, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (uu, Eu, ju, Uu, Zu, Xu) => {
          this.ahead = uu.headerWord(su.K.Pacing) & su.cb.AheadMask, this.frame(Eu, ju, Uu, Zu, uu.headerWord(su.K.RenderUs) / 1e3, uu.headerWord(su.K.TicksRun), Xu, uu.headerWord(su.K.RenderPending))
        }, this.wasmPeekPaced = uu => {
          const Eu = performance.now();
          this.frame(Eu, Eu, "paced", uu, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (uu, Eu, ju) => {
          this.frame(uu, Eu, "drawn", ju, Eu - uu, 0, 0, -1)
        }, this.jsTick = uu => {
          this.current.mainMs += uu, this.current.ticks++, this.current.tickMs += uu
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const uu = performance.now();
          let Eu = 0;
          for (const ju of this.waiting) {
            if (ju.dueMs > uu) {
              this.waiting[Eu++] = ju;
              continue
            }
            const su = [`long frame ${(0,Zu.d)(ju.intervalMs)} ms ending at ${(0,Zu.d)(ju.endMs)} ms: main ${(0,Zu.d)(ju.mainMs)} (render ${(0,Zu.d)(ju.renderMs)}, ${ju.ticks} ticks ${(0,Zu.d)(ju.tickMs)}), outside ${(0,Zu.d)(ju.intervalMs-ju.mainMs)}`, `${ju.rafs} rafs`];
            ju.pendingBefore >= 0 && su.push(`pending ${ju.pendingBefore} -> ${ju.pendingAfter} (max ${ju.pendingMax})`), su.push(this.longTasks.describe(ju.endMs - ju.intervalMs, ju.endMs)), (0, Xu.k)("frame", su.join("; "))
          }
          this.waiting.length = Eu, Eu > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - uu))
        }, this.flush = () => {
          this.flushTimer = null;
          const uu = performance.now(),
            Eu = Math.round((uu - this.lastFlushMs) / 1e3);
          this.lastFlushMs = uu, this.scheduleFlush();
          if (this.logSummary(Eu) || this.inGameSinceFlush) {
            const Eu = this.loadLine.take(uu);
            null !== Eu && (0, Xu.k)("frame", Eu)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(uu, Eu) {
        var ju;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Xu.k)("frame", `start: ${uu} client, ${Eu}, dpr ${window.devicePixelRatio}, long tasks ${null!==(ju=this.longTasks.kind)&&void 0!==ju?ju:"n/a"}; a summary each ${Ou/1e3} s in game (${Yu/1e3} s for the first ${hu/1e3} s), outliers over ${Du} ms`)
      }
      setLoadCounts(uu) {
        this.loadLine.setSource(uu)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const uu = performance.now() - this.startedMs < hu;
        this.flushTimer = setTimeout(this.flush, uu ? Yu : Ou)
      }
      frame(uu, Eu, ju, su, Zu, Xu, lu, qu) {
        if (!su) return this.restart(), void(this.lastPending = qu);
        const fu = this.current;
        (0, Uu.e)(ju) ? (this.lastDrawnStartMs >= 0 && (fu.pendingAfter = this.lastPending, this.closeInterval(uu - this.lastDrawnStartMs, uu)), this.lastDrawnStartMs = uu, Gu(fu).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(ju, Eu - this.lastDrawnStartMs, this.ahead), fu.mainMs += Eu - uu, fu.renderMs += Zu, fu.ticks += Xu, fu.tickMs += lu, fu.pendingMax = Math.max(fu.pendingMax, qu), this.lastPending = qu, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, qu)
      }
      closeInterval(uu, Eu) {
        const ju = this.summary,
          su = this.current;
        ju.frames < eu && (ju.intervals[ju.frames] = uu), ju.frames++, ju.maxMs = Math.max(ju.maxMs, uu);
        const Uu = ju.totals;
        Uu.mainMs += su.mainMs, Uu.renderMs += su.renderMs, Uu.ticks += su.ticks, Uu.tickMs += su.tickMs, Uu.rafs += su.rafs, uu > 50 && ju.slow++, uu > Du && this.outlier(uu, Eu)
      }
      outlier(uu, Eu) {
        const ju = Math.floor((Eu - this.lastRefillMs) / Mu);
        ju > 0 && (this.tokens = Math.min(gu, this.tokens + ju), this.lastRefillMs += ju * Mu), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: Eu,
          intervalMs: uu,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(uu) {
        const Eu = this.summary,
          ju = Eu.totals;
        if (0 === Eu.frames) return Eu.undrawn.count > 0 && (0, Xu.k)("frame", `${uu}s: no frames drawn, ${Eu.undrawn.describe()}; pending max ${ju.pendingMax}`), Eu.undrawn.count > 0;
        const su = Eu.intervals.subarray(0, Math.min(Eu.frames, eu)).sort(),
          Uu = [`${Eu.frames} frames, median ${(0,Zu.d)((0,Zu.g)(su,.5))} p95 ${(0,Zu.d)((0,Zu.g)(su,.95))} max ${(0,Zu.d)(Eu.maxMs)} ms, ${Eu.slow} over 50, ${Eu.shown+Eu.dropped} over ${Du}`, `${ju.rafs} rafs, ${Eu.undrawn.describe()}`, `main ${(0,Zu.d)(ju.mainMs)} ms (render ${(0,Zu.d)(ju.renderMs)}, ${ju.ticks} ticks ${(0,Zu.d)(ju.tickMs)})`];
        return ju.pendingMax >= 0 && Uu.push(`pending max ${ju.pendingMax}`), this.ahead >= 0 && Uu.push(`${this.ahead} frames ahead`), Uu.push(`outliers ${Eu.shown} logged, ${Eu.dropped} dropped`), (0, Xu.k)("frame", `${uu}s: ${Uu.join("; ")}`), !0
      }
    }
    let du = null;

    function au(uu, Eu) {
      return du ??= new Ju, du.start(uu, Eu), du
    }
  },
  34424: (uu, Eu, ju) => {
    function su(uu) {
      return `hidden ${uu.changes} changes, ${Math.round(uu.hiddenMs)} ms`
    }
    ju.d(Eu, {
      b: () => Uu,
      d: () => su
    });
    class Uu {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(uu) {
        this.changes++, document.hidden ? this.hiddenSinceMs = uu : this.hiddenSinceMs >= 0 && (this.hiddenMs += uu - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(uu) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? uu - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);