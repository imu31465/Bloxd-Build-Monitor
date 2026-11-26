export const id = 39;
export const ids = [39];
export const modules = {
  34832: (HH, BH, LH) => {
    function AH(HH, BH) {
      return 0 === HH.length ? 0 : HH[Math.min(HH.length - 1, Math.floor(BH * HH.length))]
    }

    function rH(HH) {
      return HH.toFixed(1)
    }
    LH.d(BH, {
      d: () => rH,
      g: () => AH
    })
  },
  34830: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      FIRST_SUMMARIES_FOR_MS: () => WH,
      FIRST_SUMMARY_MS: () => QH,
      FrameDebugLog: () => OH,
      OUTLIER_BURST: () => xH,
      OUTLIER_MS: () => MH,
      OUTLIER_REFILL_MS: () => vH,
      SUMMARY_MS: () => uH,
      startFrameDebug: () => kH
    });
    var AH = LH(5268),
      rH = LH(5260),
      SH = LH(34832),
      hH = LH(3105),
      tH = LH(1270),
      zH = LH(3277);
    class CH {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = HH => {
          const BH = HH;
          this.add(BH.startTime, BH.duration, BH.blockingDuration, (0, tH.q)(BH))
        }, this.onLongTask = HH => {
          this.add(HH.startTime, HH.duration, 0, 0)
        }, null !== (0, zH.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, zH.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(HH, BH, LH, AH) {
        this.entries.set([HH, BH, LH, AH], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(HH, BH) {
        if (null === this.kind) return "long tasks n/a";
        let LH = 0,
          AH = 0,
          rH = 0,
          SH = 0;
        for (let tH = 0; tH < this.size; tH++) {
          const hH = 4 * tH,
            zH = this.entries[hH] + this.entries[hH + 1];
          zH > HH && zH <= BH + 2 && (LH++, AH += this.entries[hH + 1], rH += this.entries[hH + 2], SH += this.entries[hH + 3])
        }
        const hH = "loaf" === this.kind && LH > 0 ? ` (blocking ${rH.toFixed(0)}, script ${SH.toFixed(0)})` : "";
        return `${LH} ${this.kind} ${AH.toFixed(0)} ms${hH}`
      }
    }
    var EH = LH(34837);

    function XH(HH, BH) {
      return BH < 0 || HH < BH ? HH : HH - BH
    }
    class GH {
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
        }, this.lastMs = 0, this.hidden = new EH.b, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(HH) {
        this.source = HH
      }
      start(HH) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = HH
      }
      take(HH) {
        var BH;
        const LH = [];
        if (!0 === (null === (BH = this.source) || void 0 === BH ? void 0 : BH.call(this, this.now)) && (AH = this.now, rH = this.before, AH.chunksReceived !== rH.chunksReceived || AH.chunksCancelled !== rH.chunksCancelled || AH.chunksStored !== rH.chunksStored || AH.jobsSent !== rH.jobsSent || AH.jobsDone !== rH.jobsDone || AH.jobsInFlight !== rH.jobsInFlight || AH.workersLive !== rH.workersLive || AH.workersRetired !== rH.workersRetired)) {
          LH.push(function(HH, BH) {
            const LH = [`chunks +${XH(HH.chunksReceived,BH.chunksReceived)} got`, `+${XH(HH.chunksCancelled,BH.chunksCancelled)} cancelled`];
            HH.chunksStored >= 0 && LH.push(`${HH.chunksStored} stored`);
            const AH = `jobs +${XH(HH.jobsSent,BH.jobsSent)} sent, +${XH(HH.jobsDone,BH.jobsDone)} done, ${HH.jobsInFlight} in flight`;
            return `${LH.join(", ")}; ${AH}; workers ${HH.workersLive} live, ${HH.workersRetired} retired`
          }(this.now, this.before));
          const HH = this.before;
          this.before = this.now, this.now = HH
        }
        var AH, rH;
        const SH = this.hidden.totals(HH),
          hH = SH.changes - this.hiddenBefore.changes,
          tH = SH.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((hH > 0 || tH > 0) && (LH.push((0, EH.c)({
            changes: hH,
            hiddenMs: tH
          })), this.hiddenBefore = SH), 0 === LH.length) return null;
        const zH = `load ${Math.round((HH-this.lastMs)/1e3)}s: ${LH.join("; ")}`;
        return this.lastMs = HH, zH
      }
    }
    class YH {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(HH, BH, LH) {
        this.count++, "paced" === HH ? this.paced++ : "skipped" === HH && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = BH, this.longestAhead = LH)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const HH = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${HH} other, longest ${this.longest} in ${(0,SH.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const uH = 2e4,
      QH = 5e3,
      WH = 6e4,
      MH = 250,
      xH = 10,
      vH = 6e4,
      PH = 8192;

    function TH(HH) {
      return HH.mainMs = 0, HH.renderMs = 0, HH.ticks = 0, HH.tickMs = 0, HH.rafs = 0, HH.pendingBefore = -1, HH.pendingMax = -1, HH.pendingAfter = -1, HH
    }

    function UH() {
      return TH({})
    }
    class VH {
      constructor() {
        this.intervals = new Float64Array(PH), this.totals = UH(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new YH, this.shown = 0, this.dropped = 0
      }
      reset() {
        TH(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class OH {
      constructor() {
        this.longTasks = new CH, this.summary = new VH, this.current = UH(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = xH, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new GH, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (HH, BH, LH, rH, SH, hH) => {
          this.ahead = HH.headerWord(AH.I.Pacing) & AH.fb.AheadMask, this.frame(BH, LH, rH, SH, HH.headerWord(AH.I.RenderUs) / 1e3, HH.headerWord(AH.I.TicksRun), hH, HH.headerWord(AH.I.RenderPending))
        }, this.wasmPeekPaced = HH => {
          const BH = performance.now();
          this.frame(BH, BH, "paced", HH, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (HH, BH, LH) => {
          this.frame(HH, BH, "drawn", LH, BH - HH, 0, 0, -1)
        }, this.jsTick = HH => {
          this.current.mainMs += HH, this.current.ticks++, this.current.tickMs += HH
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const HH = performance.now();
          let BH = 0;
          for (const LH of this.waiting) {
            if (LH.dueMs > HH) {
              this.waiting[BH++] = LH;
              continue
            }
            const AH = [`long frame ${(0,SH.d)(LH.intervalMs)} ms ending at ${(0,SH.d)(LH.endMs)} ms: main ${(0,SH.d)(LH.mainMs)} (render ${(0,SH.d)(LH.renderMs)}, ${LH.ticks} ticks ${(0,SH.d)(LH.tickMs)}), outside ${(0,SH.d)(LH.intervalMs-LH.mainMs)}`, `${LH.rafs} rafs`];
            LH.pendingBefore >= 0 && AH.push(`pending ${LH.pendingBefore} -> ${LH.pendingAfter} (max ${LH.pendingMax})`), AH.push(this.longTasks.describe(LH.endMs - LH.intervalMs, LH.endMs)), (0, hH.j)("frame", AH.join("; "))
          }
          this.waiting.length = BH, BH > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - HH))
        }, this.flush = () => {
          this.flushTimer = null;
          const HH = performance.now(),
            BH = Math.round((HH - this.lastFlushMs) / 1e3);
          this.lastFlushMs = HH, this.scheduleFlush();
          if (this.logSummary(BH) || this.inGameSinceFlush) {
            const BH = this.loadLine.take(HH);
            null !== BH && (0, hH.j)("frame", BH)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(HH, BH) {
        var LH;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, hH.j)("frame", `start: ${HH} client, ${BH}, dpr ${window.devicePixelRatio}, long tasks ${null!==(LH=this.longTasks.kind)&&void 0!==LH?LH:"n/a"}; a summary each ${uH/1e3} s in game (${QH/1e3} s for the first ${WH/1e3} s), outliers over ${MH} ms`)
      }
      setLoadCounts(HH) {
        this.loadLine.setSource(HH)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const HH = performance.now() - this.startedMs < WH;
        this.flushTimer = setTimeout(this.flush, HH ? QH : uH)
      }
      frame(HH, BH, LH, AH, SH, hH, tH, zH) {
        if (!AH) return this.restart(), void(this.lastPending = zH);
        const CH = this.current;
        (0, rH.b)(LH) ? (this.lastDrawnStartMs >= 0 && (CH.pendingAfter = this.lastPending, this.closeInterval(HH - this.lastDrawnStartMs, HH)), this.lastDrawnStartMs = HH, TH(CH).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(LH, BH - this.lastDrawnStartMs, this.ahead), CH.mainMs += BH - HH, CH.renderMs += SH, CH.ticks += hH, CH.tickMs += tH, CH.pendingMax = Math.max(CH.pendingMax, zH), this.lastPending = zH, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, zH)
      }
      closeInterval(HH, BH) {
        const LH = this.summary,
          AH = this.current;
        LH.frames < PH && (LH.intervals[LH.frames] = HH), LH.frames++, LH.maxMs = Math.max(LH.maxMs, HH);
        const rH = LH.totals;
        rH.mainMs += AH.mainMs, rH.renderMs += AH.renderMs, rH.ticks += AH.ticks, rH.tickMs += AH.tickMs, rH.rafs += AH.rafs, HH > 50 && LH.slow++, HH > MH && this.outlier(HH, BH)
      }
      outlier(HH, BH) {
        const LH = Math.floor((BH - this.lastRefillMs) / vH);
        LH > 0 && (this.tokens = Math.min(xH, this.tokens + LH), this.lastRefillMs += LH * vH), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: BH,
          intervalMs: HH,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(HH) {
        const BH = this.summary,
          LH = BH.totals;
        if (0 === BH.frames) return BH.undrawn.count > 0 && (0, hH.j)("frame", `${HH}s: no frames drawn, ${BH.undrawn.describe()}; pending max ${LH.pendingMax}`), BH.undrawn.count > 0;
        const AH = BH.intervals.subarray(0, Math.min(BH.frames, PH)).sort(),
          rH = [`${BH.frames} frames, median ${(0,SH.d)((0,SH.g)(AH,.5))} p95 ${(0,SH.d)((0,SH.g)(AH,.95))} max ${(0,SH.d)(BH.maxMs)} ms, ${BH.slow} over 50, ${BH.shown+BH.dropped} over ${MH}`, `${LH.rafs} rafs, ${BH.undrawn.describe()}`, `main ${(0,SH.d)(LH.mainMs)} ms (render ${(0,SH.d)(LH.renderMs)}, ${LH.ticks} ticks ${(0,SH.d)(LH.tickMs)})`];
        return LH.pendingMax >= 0 && rH.push(`pending max ${LH.pendingMax}`), this.ahead >= 0 && rH.push(`${this.ahead} frames ahead`), rH.push(`outliers ${BH.shown} logged, ${BH.dropped} dropped`), (0, hH.j)("frame", `${HH}s: ${rH.join("; ")}`), !0
      }
    }
    let bH = null;

    function kH(HH, BH) {
      return bH ??= new OH, bH.start(HH, BH), bH
    }
  },
  34837: (HH, BH, LH) => {
    function AH(HH) {
      return `hidden ${HH.changes} changes, ${Math.round(HH.hiddenMs)} ms`
    }
    LH.d(BH, {
      b: () => rH,
      c: () => AH
    });
    class rH {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(HH) {
        this.changes++, document.hidden ? this.hiddenSinceMs = HH : this.hiddenSinceMs >= 0 && (this.hiddenMs += HH - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(HH) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? HH - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);