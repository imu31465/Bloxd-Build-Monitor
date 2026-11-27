export const id = 40;
export const ids = [40];
export const modules = {
  35093: (WW, iW, OW) => {
    function mW(WW, iW) {
      return 0 === WW.length ? 0 : WW[Math.min(WW.length - 1, Math.floor(iW * WW.length))]
    }

    function EW(WW) {
      return WW.toFixed(1)
    }
    OW.d(iW, {
      c: () => EW,
      d: () => mW
    })
  },
  35091: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      FIRST_SUMMARIES_FOR_MS: () => jW,
      FIRST_SUMMARY_MS: () => bW,
      FrameDebugLog: () => yW,
      OUTLIER_BURST: () => kW,
      OUTLIER_MS: () => UW,
      OUTLIER_REFILL_MS: () => sW,
      SUMMARY_MS: () => AW,
      startFrameDebug: () => JW
    });
    var mW = OW(5551),
      EW = OW(5540),
      NW = OW(35093),
      PW = OW(3866),
      LW = OW(1319),
      cW = OW(4037);
    class wW {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = WW => {
          const iW = WW;
          this.add(iW.startTime, iW.duration, iW.blockingDuration, (0, LW.p)(iW))
        }, this.onLongTask = WW => {
          this.add(WW.startTime, WW.duration, 0, 0)
        }, null !== (0, cW.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, cW.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(WW, iW, OW, mW) {
        this.entries.set([WW, iW, OW, mW], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(WW, iW) {
        if (null === this.kind) return "long tasks n/a";
        let OW = 0,
          mW = 0,
          EW = 0,
          NW = 0;
        for (let LW = 0; LW < this.size; LW++) {
          const PW = 4 * LW,
            cW = this.entries[PW] + this.entries[PW + 1];
          cW > WW && cW <= iW + 2 && (OW++, mW += this.entries[PW + 1], EW += this.entries[PW + 2], NW += this.entries[PW + 3])
        }
        const PW = "loaf" === this.kind && OW > 0 ? ` (blocking ${EW.toFixed(0)}, script ${NW.toFixed(0)})` : "";
        return `${OW} ${this.kind} ${mW.toFixed(0)} ms${PW}`
      }
    }
    var tW = OW(35100);

    function ZW(WW, iW) {
      return iW < 0 || WW < iW ? WW : WW - iW
    }
    class xW {
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
        }, this.lastMs = 0, this.hidden = new tW.d, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(WW) {
        this.source = WW
      }
      start(WW) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = WW
      }
      take(WW) {
        var iW;
        const OW = [];
        if (!0 === (null === (iW = this.source) || void 0 === iW ? void 0 : iW.call(this, this.now)) && (mW = this.now, EW = this.before, mW.chunksReceived !== EW.chunksReceived || mW.chunksCancelled !== EW.chunksCancelled || mW.chunksStored !== EW.chunksStored || mW.jobsSent !== EW.jobsSent || mW.jobsDone !== EW.jobsDone || mW.jobsInFlight !== EW.jobsInFlight || mW.workersLive !== EW.workersLive || mW.workersRetired !== EW.workersRetired)) {
          OW.push(function(WW, iW) {
            const OW = [`chunks +${ZW(WW.chunksReceived,iW.chunksReceived)} got`, `+${ZW(WW.chunksCancelled,iW.chunksCancelled)} cancelled`];
            WW.chunksStored >= 0 && OW.push(`${WW.chunksStored} stored`);
            const mW = `jobs +${ZW(WW.jobsSent,iW.jobsSent)} sent, +${ZW(WW.jobsDone,iW.jobsDone)} done, ${WW.jobsInFlight} in flight`;
            return `${OW.join(", ")}; ${mW}; workers ${WW.workersLive} live, ${WW.workersRetired} retired`
          }(this.now, this.before));
          const WW = this.before;
          this.before = this.now, this.now = WW
        }
        var mW, EW;
        const NW = this.hidden.totals(WW),
          PW = NW.changes - this.hiddenBefore.changes,
          LW = NW.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((PW > 0 || LW > 0) && (OW.push((0, tW.e)({
            changes: PW,
            hiddenMs: LW
          })), this.hiddenBefore = NW), 0 === OW.length) return null;
        const cW = `load ${Math.round((WW-this.lastMs)/1e3)}s: ${OW.join("; ")}`;
        return this.lastMs = WW, cW
      }
    }
    class lW {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(WW, iW, OW) {
        this.count++, "paced" === WW ? this.paced++ : "skipped" === WW && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = iW, this.longestAhead = OW)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const WW = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${WW} other, longest ${this.longest} in ${(0,NW.c)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const AW = 2e4,
      bW = 5e3,
      jW = 6e4,
      UW = 250,
      kW = 10,
      sW = 6e4,
      MW = 8192;

    function KW(WW) {
      return WW.mainMs = 0, WW.renderMs = 0, WW.ticks = 0, WW.tickMs = 0, WW.rafs = 0, WW.pendingBefore = -1, WW.pendingMax = -1, WW.pendingAfter = -1, WW
    }

    function SW() {
      return KW({})
    }
    class YW {
      constructor() {
        this.intervals = new Float64Array(MW), this.totals = SW(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new lW, this.shown = 0, this.dropped = 0
      }
      reset() {
        KW(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class yW {
      constructor() {
        this.longTasks = new wW, this.summary = new YW, this.current = SW(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = kW, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new xW, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (WW, iW, OW, EW, NW, PW) => {
          this.ahead = WW.headerWord(mW.M.Pacing) & mW.cb.AheadMask, this.frame(iW, OW, EW, NW, WW.headerWord(mW.M.RenderUs) / 1e3, WW.headerWord(mW.M.TicksRun), PW, WW.headerWord(mW.M.RenderPending))
        }, this.wasmPeekPaced = WW => {
          const iW = performance.now();
          this.frame(iW, iW, "paced", WW, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (WW, iW, OW) => {
          this.frame(WW, iW, "drawn", OW, iW - WW, 0, 0, -1)
        }, this.jsTick = WW => {
          this.current.mainMs += WW, this.current.ticks++, this.current.tickMs += WW
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const WW = performance.now();
          let iW = 0;
          for (const OW of this.waiting) {
            if (OW.dueMs > WW) {
              this.waiting[iW++] = OW;
              continue
            }
            const mW = [`long frame ${(0,NW.c)(OW.intervalMs)} ms ending at ${(0,NW.c)(OW.endMs)} ms: main ${(0,NW.c)(OW.mainMs)} (render ${(0,NW.c)(OW.renderMs)}, ${OW.ticks} ticks ${(0,NW.c)(OW.tickMs)}), outside ${(0,NW.c)(OW.intervalMs-OW.mainMs)}`, `${OW.rafs} rafs`];
            OW.pendingBefore >= 0 && mW.push(`pending ${OW.pendingBefore} -> ${OW.pendingAfter} (max ${OW.pendingMax})`), mW.push(this.longTasks.describe(OW.endMs - OW.intervalMs, OW.endMs)), (0, PW.m)("frame", mW.join("; "))
          }
          this.waiting.length = iW, iW > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - WW))
        }, this.flush = () => {
          this.flushTimer = null;
          const WW = performance.now(),
            iW = Math.round((WW - this.lastFlushMs) / 1e3);
          this.lastFlushMs = WW, this.scheduleFlush();
          if (this.logSummary(iW) || this.inGameSinceFlush) {
            const iW = this.loadLine.take(WW);
            null !== iW && (0, PW.m)("frame", iW)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(WW, iW) {
        var OW;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, PW.m)("frame", `start: ${WW} client, ${iW}, dpr ${window.devicePixelRatio}, long tasks ${null!==(OW=this.longTasks.kind)&&void 0!==OW?OW:"n/a"}; a summary each ${AW/1e3} s in game (${bW/1e3} s for the first ${jW/1e3} s), outliers over ${UW} ms`)
      }
      setLoadCounts(WW) {
        this.loadLine.setSource(WW)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const WW = performance.now() - this.startedMs < jW;
        this.flushTimer = setTimeout(this.flush, WW ? bW : AW)
      }
      frame(WW, iW, OW, mW, NW, PW, LW, cW) {
        if (!mW) return this.restart(), void(this.lastPending = cW);
        const wW = this.current;
        (0, EW.b)(OW) ? (this.lastDrawnStartMs >= 0 && (wW.pendingAfter = this.lastPending, this.closeInterval(WW - this.lastDrawnStartMs, WW)), this.lastDrawnStartMs = WW, KW(wW).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(OW, iW - this.lastDrawnStartMs, this.ahead), wW.mainMs += iW - WW, wW.renderMs += NW, wW.ticks += PW, wW.tickMs += LW, wW.pendingMax = Math.max(wW.pendingMax, cW), this.lastPending = cW, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, cW)
      }
      closeInterval(WW, iW) {
        const OW = this.summary,
          mW = this.current;
        OW.frames < MW && (OW.intervals[OW.frames] = WW), OW.frames++, OW.maxMs = Math.max(OW.maxMs, WW);
        const EW = OW.totals;
        EW.mainMs += mW.mainMs, EW.renderMs += mW.renderMs, EW.ticks += mW.ticks, EW.tickMs += mW.tickMs, EW.rafs += mW.rafs, WW > 50 && OW.slow++, WW > UW && this.outlier(WW, iW)
      }
      outlier(WW, iW) {
        const OW = Math.floor((iW - this.lastRefillMs) / sW);
        OW > 0 && (this.tokens = Math.min(kW, this.tokens + OW), this.lastRefillMs += OW * sW), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: iW,
          intervalMs: WW,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(WW) {
        const iW = this.summary,
          OW = iW.totals;
        if (0 === iW.frames) return iW.undrawn.count > 0 && (0, PW.m)("frame", `${WW}s: no frames drawn, ${iW.undrawn.describe()}; pending max ${OW.pendingMax}`), iW.undrawn.count > 0;
        const mW = iW.intervals.subarray(0, Math.min(iW.frames, MW)).sort(),
          EW = [`${iW.frames} frames, median ${(0,NW.c)((0,NW.d)(mW,.5))} p95 ${(0,NW.c)((0,NW.d)(mW,.95))} max ${(0,NW.c)(iW.maxMs)} ms, ${iW.slow} over 50, ${iW.shown+iW.dropped} over ${UW}`, `${OW.rafs} rafs, ${iW.undrawn.describe()}`, `main ${(0,NW.c)(OW.mainMs)} ms (render ${(0,NW.c)(OW.renderMs)}, ${OW.ticks} ticks ${(0,NW.c)(OW.tickMs)})`];
        return OW.pendingMax >= 0 && EW.push(`pending max ${OW.pendingMax}`), this.ahead >= 0 && EW.push(`${this.ahead} frames ahead`), EW.push(`outliers ${iW.shown} logged, ${iW.dropped} dropped`), (0, PW.m)("frame", `${WW}s: ${EW.join("; ")}`), !0
      }
    }
    let TW = null;

    function JW(WW, iW) {
      return TW ??= new yW, TW.start(WW, iW), TW
    }
  },
  35100: (WW, iW, OW) => {
    function mW(WW) {
      return `hidden ${WW.changes} changes, ${Math.round(WW.hiddenMs)} ms`
    }
    OW.d(iW, {
      d: () => EW,
      e: () => mW
    });
    class EW {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(WW) {
        this.changes++, document.hidden ? this.hiddenSinceMs = WW : this.hiddenSinceMs >= 0 && (this.hiddenMs += WW - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(WW) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? WW - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);