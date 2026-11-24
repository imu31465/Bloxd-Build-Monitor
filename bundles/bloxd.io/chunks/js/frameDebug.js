export const id = 33;
export const ids = [33];
export const modules = {
  34123: (TT, UT, mT) => {
    function WT(TT, UT) {
      return 0 === TT.length ? 0 : TT[Math.min(TT.length - 1, Math.floor(UT * TT.length))]
    }

    function zT(TT) {
      return TT.toFixed(1)
    }
    mT.d(UT, {
      d: () => zT,
      h: () => WT
    })
  },
  34114: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      FIRST_SUMMARIES_FOR_MS: () => cT,
      FIRST_SUMMARY_MS: () => ZT,
      FrameDebugLog: () => YT,
      OUTLIER_BURST: () => fT,
      OUTLIER_MS: () => vT,
      OUTLIER_REFILL_MS: () => qT,
      SUMMARY_MS: () => BT,
      startFrameDebug: () => xT
    });
    var WT = mT(4904),
      zT = mT(4890),
      MT = mT(34123),
      gT = mT(2929),
      nT = mT(1176),
      HT = mT(3106);
    class kT {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = TT => {
          const UT = TT;
          this.add(UT.startTime, UT.duration, UT.blockingDuration, (0, nT.l)(UT))
        }, this.onLongTask = TT => {
          this.add(TT.startTime, TT.duration, 0, 0)
        }, null !== (0, HT.c)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, HT.c)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(TT, UT, mT, WT) {
        this.entries.set([TT, UT, mT, WT], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(TT, UT) {
        if (null === this.kind) return "long tasks n/a";
        let mT = 0,
          WT = 0,
          zT = 0,
          MT = 0;
        for (let nT = 0; nT < this.size; nT++) {
          const gT = 4 * nT,
            HT = this.entries[gT] + this.entries[gT + 1];
          HT > TT && HT <= UT + 2 && (mT++, WT += this.entries[gT + 1], zT += this.entries[gT + 2], MT += this.entries[gT + 3])
        }
        const gT = "loaf" === this.kind && mT > 0 ? ` (blocking ${zT.toFixed(0)}, script ${MT.toFixed(0)})` : "";
        return `${mT} ${this.kind} ${WT.toFixed(0)} ms${gT}`
      }
    }
    var jT = mT(34126);

    function lT(TT, UT) {
      return UT < 0 || TT < UT ? TT : TT - UT
    }
    class LT {
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
        }, this.lastMs = 0, this.hidden = new jT.b, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(TT) {
        this.source = TT
      }
      start(TT) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = TT
      }
      take(TT) {
        var UT;
        const mT = [];
        if (!0 === (null === (UT = this.source) || void 0 === UT ? void 0 : UT.call(this, this.now)) && (WT = this.now, zT = this.before, WT.chunksReceived !== zT.chunksReceived || WT.chunksCancelled !== zT.chunksCancelled || WT.chunksStored !== zT.chunksStored || WT.jobsSent !== zT.jobsSent || WT.jobsDone !== zT.jobsDone || WT.jobsInFlight !== zT.jobsInFlight || WT.workersLive !== zT.workersLive || WT.workersRetired !== zT.workersRetired)) {
          mT.push(function(TT, UT) {
            const mT = [`chunks +${lT(TT.chunksReceived,UT.chunksReceived)} got`, `+${lT(TT.chunksCancelled,UT.chunksCancelled)} cancelled`];
            TT.chunksStored >= 0 && mT.push(`${TT.chunksStored} stored`);
            const WT = `jobs +${lT(TT.jobsSent,UT.jobsSent)} sent, +${lT(TT.jobsDone,UT.jobsDone)} done, ${TT.jobsInFlight} in flight`;
            return `${mT.join(", ")}; ${WT}; workers ${TT.workersLive} live, ${TT.workersRetired} retired`
          }(this.now, this.before));
          const TT = this.before;
          this.before = this.now, this.now = TT
        }
        var WT, zT;
        const MT = this.hidden.totals(TT),
          gT = MT.changes - this.hiddenBefore.changes,
          nT = MT.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((gT > 0 || nT > 0) && (mT.push((0, jT.e)({
            changes: gT,
            hiddenMs: nT
          })), this.hiddenBefore = MT), 0 === mT.length) return null;
        const HT = `load ${Math.round((TT-this.lastMs)/1e3)}s: ${mT.join("; ")}`;
        return this.lastMs = TT, HT
      }
    }
    class pT {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(TT, UT, mT) {
        this.count++, "paced" === TT ? this.paced++ : "skipped" === TT && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = UT, this.longestAhead = mT)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const TT = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${TT} other, longest ${this.longest} in ${(0,MT.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const BT = 2e4,
      ZT = 5e3,
      cT = 6e4,
      vT = 250,
      fT = 10,
      qT = 6e4,
      iT = 8192;

    function bT(TT) {
      return TT.mainMs = 0, TT.renderMs = 0, TT.ticks = 0, TT.tickMs = 0, TT.rafs = 0, TT.pendingBefore = -1, TT.pendingMax = -1, TT.pendingAfter = -1, TT
    }

    function OT() {
      return bT({})
    }
    class eT {
      constructor() {
        this.intervals = new Float64Array(iT), this.totals = OT(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new pT, this.shown = 0, this.dropped = 0
      }
      reset() {
        bT(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class YT {
      constructor() {
        this.longTasks = new kT, this.summary = new eT, this.current = OT(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = fT, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new LT, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (TT, UT, mT, zT, MT, gT) => {
          this.ahead = TT.headerWord(WT.F.Pacing) & WT.Y.AheadMask, this.frame(UT, mT, zT, MT, TT.headerWord(WT.F.RenderUs) / 1e3, TT.headerWord(WT.F.TicksRun), gT, TT.headerWord(WT.F.RenderPending))
        }, this.wasmPeekPaced = TT => {
          const UT = performance.now();
          this.frame(UT, UT, "paced", TT, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (TT, UT, mT) => {
          this.frame(TT, UT, "drawn", mT, UT - TT, 0, 0, -1)
        }, this.jsTick = TT => {
          this.current.mainMs += TT, this.current.ticks++, this.current.tickMs += TT
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const TT = performance.now();
          let UT = 0;
          for (const mT of this.waiting) {
            if (mT.dueMs > TT) {
              this.waiting[UT++] = mT;
              continue
            }
            const WT = [`long frame ${(0,MT.d)(mT.intervalMs)} ms ending at ${(0,MT.d)(mT.endMs)} ms: main ${(0,MT.d)(mT.mainMs)} (render ${(0,MT.d)(mT.renderMs)}, ${mT.ticks} ticks ${(0,MT.d)(mT.tickMs)}), outside ${(0,MT.d)(mT.intervalMs-mT.mainMs)}`, `${mT.rafs} rafs`];
            mT.pendingBefore >= 0 && WT.push(`pending ${mT.pendingBefore} -> ${mT.pendingAfter} (max ${mT.pendingMax})`), WT.push(this.longTasks.describe(mT.endMs - mT.intervalMs, mT.endMs)), (0, gT.m)("frame", WT.join("; "))
          }
          this.waiting.length = UT, UT > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - TT))
        }, this.flush = () => {
          this.flushTimer = null;
          const TT = performance.now(),
            UT = Math.round((TT - this.lastFlushMs) / 1e3);
          this.lastFlushMs = TT, this.scheduleFlush();
          if (this.logSummary(UT) || this.inGameSinceFlush) {
            const UT = this.loadLine.take(TT);
            null !== UT && (0, gT.m)("frame", UT)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(TT, UT) {
        var mT;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, gT.m)("frame", `start: ${TT} client, ${UT}, dpr ${window.devicePixelRatio}, long tasks ${null!==(mT=this.longTasks.kind)&&void 0!==mT?mT:"n/a"}; a summary each ${BT/1e3} s in game (${ZT/1e3} s for the first ${cT/1e3} s), outliers over ${vT} ms`)
      }
      setLoadCounts(TT) {
        this.loadLine.setSource(TT)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const TT = performance.now() - this.startedMs < cT;
        this.flushTimer = setTimeout(this.flush, TT ? ZT : BT)
      }
      frame(TT, UT, mT, WT, MT, gT, nT, HT) {
        if (!WT) return this.restart(), void(this.lastPending = HT);
        const kT = this.current;
        (0, zT.c)(mT) ? (this.lastDrawnStartMs >= 0 && (kT.pendingAfter = this.lastPending, this.closeInterval(TT - this.lastDrawnStartMs, TT)), this.lastDrawnStartMs = TT, bT(kT).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(mT, UT - this.lastDrawnStartMs, this.ahead), kT.mainMs += UT - TT, kT.renderMs += MT, kT.ticks += gT, kT.tickMs += nT, kT.pendingMax = Math.max(kT.pendingMax, HT), this.lastPending = HT, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, HT)
      }
      closeInterval(TT, UT) {
        const mT = this.summary,
          WT = this.current;
        mT.frames < iT && (mT.intervals[mT.frames] = TT), mT.frames++, mT.maxMs = Math.max(mT.maxMs, TT);
        const zT = mT.totals;
        zT.mainMs += WT.mainMs, zT.renderMs += WT.renderMs, zT.ticks += WT.ticks, zT.tickMs += WT.tickMs, zT.rafs += WT.rafs, TT > 50 && mT.slow++, TT > vT && this.outlier(TT, UT)
      }
      outlier(TT, UT) {
        const mT = Math.floor((UT - this.lastRefillMs) / qT);
        mT > 0 && (this.tokens = Math.min(fT, this.tokens + mT), this.lastRefillMs += mT * qT), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: UT,
          intervalMs: TT,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(TT) {
        const UT = this.summary,
          mT = UT.totals;
        if (0 === UT.frames) return UT.undrawn.count > 0 && (0, gT.m)("frame", `${TT}s: no frames drawn, ${UT.undrawn.describe()}; pending max ${mT.pendingMax}`), UT.undrawn.count > 0;
        const WT = UT.intervals.subarray(0, Math.min(UT.frames, iT)).sort(),
          zT = [`${UT.frames} frames, median ${(0,MT.d)((0,MT.h)(WT,.5))} p95 ${(0,MT.d)((0,MT.h)(WT,.95))} max ${(0,MT.d)(UT.maxMs)} ms, ${UT.slow} over 50, ${UT.shown+UT.dropped} over ${vT}`, `${mT.rafs} rafs, ${UT.undrawn.describe()}`, `main ${(0,MT.d)(mT.mainMs)} ms (render ${(0,MT.d)(mT.renderMs)}, ${mT.ticks} ticks ${(0,MT.d)(mT.tickMs)})`];
        return mT.pendingMax >= 0 && zT.push(`pending max ${mT.pendingMax}`), this.ahead >= 0 && zT.push(`${this.ahead} frames ahead`), zT.push(`outliers ${UT.shown} logged, ${UT.dropped} dropped`), (0, gT.m)("frame", `${TT}s: ${zT.join("; ")}`), !0
      }
    }
    let JT = null;

    function xT(TT, UT) {
      return JT ??= new YT, JT.start(TT, UT), JT
    }
  },
  34126: (TT, UT, mT) => {
    function WT(TT) {
      return `hidden ${TT.changes} changes, ${Math.round(TT.hiddenMs)} ms`
    }
    mT.d(UT, {
      b: () => zT,
      e: () => WT
    });
    class zT {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(TT) {
        this.changes++, document.hidden ? this.hiddenSinceMs = TT : this.hiddenSinceMs >= 0 && (this.hiddenMs += TT - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(TT) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? TT - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);