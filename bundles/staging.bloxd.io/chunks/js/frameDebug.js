export const id = 33;
export const ids = [33];
export const modules = {
  34341: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return 0 === GG.length ? 0 : GG[Math.min(GG.length - 1, Math.floor(bG * GG.length))]
    }

    function SG(GG) {
      return GG.toFixed(1)
    }
    ZG.d(bG, {
      e: () => SG,
      i: () => wG
    })
  },
  34336: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      FIRST_SUMMARIES_FOR_MS: () => dG,
      FIRST_SUMMARY_MS: () => hG,
      FrameDebugLog: () => iG,
      OUTLIER_BURST: () => rG,
      OUTLIER_MS: () => JG,
      OUTLIER_REFILL_MS: () => zG,
      SUMMARY_MS: () => KG,
      startFrameDebug: () => WG
    });
    var wG = ZG(4818),
      SG = ZG(4804),
      LG = ZG(34341),
      yG = ZG(2801),
      kG = ZG(1053),
      UG = ZG(2961);
    class YG {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = GG => {
          const bG = GG;
          this.add(bG.startTime, bG.duration, bG.blockingDuration, (0, kG.m)(bG))
        }, this.onLongTask = GG => {
          this.add(GG.startTime, GG.duration, 0, 0)
        }, null !== (0, UG.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, UG.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(GG, bG, ZG, wG) {
        this.entries.set([GG, bG, ZG, wG], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(GG, bG) {
        if (null === this.kind) return "long tasks n/a";
        let ZG = 0,
          wG = 0,
          SG = 0,
          LG = 0;
        for (let kG = 0; kG < this.size; kG++) {
          const yG = 4 * kG,
            UG = this.entries[yG] + this.entries[yG + 1];
          UG > GG && UG <= bG + 2 && (ZG++, wG += this.entries[yG + 1], SG += this.entries[yG + 2], LG += this.entries[yG + 3])
        }
        const yG = "loaf" === this.kind && ZG > 0 ? ` (blocking ${SG.toFixed(0)}, script ${LG.toFixed(0)})` : "";
        return `${ZG} ${this.kind} ${wG.toFixed(0)} ms${yG}`
      }
    }
    var VG = ZG(34345);

    function pG(GG, bG) {
      return bG < 0 || GG < bG ? GG : GG - bG
    }
    class fG {
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
        }, this.lastMs = 0, this.hidden = new VG.c, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(GG) {
        this.source = GG
      }
      start(GG) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = GG
      }
      take(GG) {
        var bG;
        const ZG = [];
        if (!0 === (null === (bG = this.source) || void 0 === bG ? void 0 : bG.call(this, this.now)) && (wG = this.now, SG = this.before, wG.chunksReceived !== SG.chunksReceived || wG.chunksCancelled !== SG.chunksCancelled || wG.chunksStored !== SG.chunksStored || wG.jobsSent !== SG.jobsSent || wG.jobsDone !== SG.jobsDone || wG.jobsInFlight !== SG.jobsInFlight || wG.workersLive !== SG.workersLive || wG.workersRetired !== SG.workersRetired)) {
          ZG.push(function(GG, bG) {
            const ZG = [`chunks +${pG(GG.chunksReceived,bG.chunksReceived)} got`, `+${pG(GG.chunksCancelled,bG.chunksCancelled)} cancelled`];
            GG.chunksStored >= 0 && ZG.push(`${GG.chunksStored} stored`);
            const wG = `jobs +${pG(GG.jobsSent,bG.jobsSent)} sent, +${pG(GG.jobsDone,bG.jobsDone)} done, ${GG.jobsInFlight} in flight`;
            return `${ZG.join(", ")}; ${wG}; workers ${GG.workersLive} live, ${GG.workersRetired} retired`
          }(this.now, this.before));
          const GG = this.before;
          this.before = this.now, this.now = GG
        }
        var wG, SG;
        const LG = this.hidden.totals(GG),
          yG = LG.changes - this.hiddenBefore.changes,
          kG = LG.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((yG > 0 || kG > 0) && (ZG.push((0, VG.f)({
            changes: yG,
            hiddenMs: kG
          })), this.hiddenBefore = LG), 0 === ZG.length) return null;
        const UG = `load ${Math.round((GG-this.lastMs)/1e3)}s: ${ZG.join("; ")}`;
        return this.lastMs = GG, UG
      }
    }
    class QG {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(GG, bG, ZG) {
        this.count++, "paced" === GG ? this.paced++ : "skipped" === GG && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = bG, this.longestAhead = ZG)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const GG = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${GG} other, longest ${this.longest} in ${(0,LG.e)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const KG = 2e4,
      hG = 5e3,
      dG = 6e4,
      JG = 250,
      rG = 10,
      zG = 6e4,
      EG = 8192;

    function oG(GG) {
      return GG.mainMs = 0, GG.renderMs = 0, GG.ticks = 0, GG.tickMs = 0, GG.rafs = 0, GG.pendingBefore = -1, GG.pendingMax = -1, GG.pendingAfter = -1, GG
    }

    function XG() {
      return oG({})
    }
    class uG {
      constructor() {
        this.intervals = new Float64Array(EG), this.totals = XG(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new QG, this.shown = 0, this.dropped = 0
      }
      reset() {
        oG(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class iG {
      constructor() {
        this.longTasks = new YG, this.summary = new uG, this.current = XG(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = rG, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new fG, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (GG, bG, ZG, SG, LG, yG) => {
          this.ahead = GG.headerWord(wG.K.Pacing) & wG.$.AheadMask, this.frame(bG, ZG, SG, LG, GG.headerWord(wG.K.RenderUs) / 1e3, GG.headerWord(wG.K.TicksRun), yG, GG.headerWord(wG.K.RenderPending))
        }, this.wasmPeekPaced = GG => {
          const bG = performance.now();
          this.frame(bG, bG, "paced", GG, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (GG, bG, ZG) => {
          this.frame(GG, bG, "drawn", ZG, bG - GG, 0, 0, -1)
        }, this.jsTick = GG => {
          this.current.mainMs += GG, this.current.ticks++, this.current.tickMs += GG
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const GG = performance.now();
          let bG = 0;
          for (const ZG of this.waiting) {
            if (ZG.dueMs > GG) {
              this.waiting[bG++] = ZG;
              continue
            }
            const wG = [`long frame ${(0,LG.e)(ZG.intervalMs)} ms ending at ${(0,LG.e)(ZG.endMs)} ms: main ${(0,LG.e)(ZG.mainMs)} (render ${(0,LG.e)(ZG.renderMs)}, ${ZG.ticks} ticks ${(0,LG.e)(ZG.tickMs)}), outside ${(0,LG.e)(ZG.intervalMs-ZG.mainMs)}`, `${ZG.rafs} rafs`];
            ZG.pendingBefore >= 0 && wG.push(`pending ${ZG.pendingBefore} -> ${ZG.pendingAfter} (max ${ZG.pendingMax})`), wG.push(this.longTasks.describe(ZG.endMs - ZG.intervalMs, ZG.endMs)), (0, yG.j)("frame", wG.join("; "))
          }
          this.waiting.length = bG, bG > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - GG))
        }, this.flush = () => {
          this.flushTimer = null;
          const GG = performance.now(),
            bG = Math.round((GG - this.lastFlushMs) / 1e3);
          this.lastFlushMs = GG, this.scheduleFlush();
          if (this.logSummary(bG) || this.inGameSinceFlush) {
            const bG = this.loadLine.take(GG);
            null !== bG && (0, yG.j)("frame", bG)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(GG, bG) {
        var ZG;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, yG.j)("frame", `start: ${GG} client, ${bG}, dpr ${window.devicePixelRatio}, long tasks ${null!==(ZG=this.longTasks.kind)&&void 0!==ZG?ZG:"n/a"}; a summary each ${KG/1e3} s in game (${hG/1e3} s for the first ${dG/1e3} s), outliers over ${JG} ms`)
      }
      setLoadCounts(GG) {
        this.loadLine.setSource(GG)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const GG = performance.now() - this.startedMs < dG;
        this.flushTimer = setTimeout(this.flush, GG ? hG : KG)
      }
      frame(GG, bG, ZG, wG, LG, yG, kG, UG) {
        if (!wG) return this.restart(), void(this.lastPending = UG);
        const YG = this.current;
        (0, SG.e)(ZG) ? (this.lastDrawnStartMs >= 0 && (YG.pendingAfter = this.lastPending, this.closeInterval(GG - this.lastDrawnStartMs, GG)), this.lastDrawnStartMs = GG, oG(YG).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(ZG, bG - this.lastDrawnStartMs, this.ahead), YG.mainMs += bG - GG, YG.renderMs += LG, YG.ticks += yG, YG.tickMs += kG, YG.pendingMax = Math.max(YG.pendingMax, UG), this.lastPending = UG, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, UG)
      }
      closeInterval(GG, bG) {
        const ZG = this.summary,
          wG = this.current;
        ZG.frames < EG && (ZG.intervals[ZG.frames] = GG), ZG.frames++, ZG.maxMs = Math.max(ZG.maxMs, GG);
        const SG = ZG.totals;
        SG.mainMs += wG.mainMs, SG.renderMs += wG.renderMs, SG.ticks += wG.ticks, SG.tickMs += wG.tickMs, SG.rafs += wG.rafs, GG > 50 && ZG.slow++, GG > JG && this.outlier(GG, bG)
      }
      outlier(GG, bG) {
        const ZG = Math.floor((bG - this.lastRefillMs) / zG);
        ZG > 0 && (this.tokens = Math.min(rG, this.tokens + ZG), this.lastRefillMs += ZG * zG), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: bG,
          intervalMs: GG,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(GG) {
        const bG = this.summary,
          ZG = bG.totals;
        if (0 === bG.frames) return bG.undrawn.count > 0 && (0, yG.j)("frame", `${GG}s: no frames drawn, ${bG.undrawn.describe()}; pending max ${ZG.pendingMax}`), bG.undrawn.count > 0;
        const wG = bG.intervals.subarray(0, Math.min(bG.frames, EG)).sort(),
          SG = [`${bG.frames} frames, median ${(0,LG.e)((0,LG.i)(wG,.5))} p95 ${(0,LG.e)((0,LG.i)(wG,.95))} max ${(0,LG.e)(bG.maxMs)} ms, ${bG.slow} over 50, ${bG.shown+bG.dropped} over ${JG}`, `${ZG.rafs} rafs, ${bG.undrawn.describe()}`, `main ${(0,LG.e)(ZG.mainMs)} ms (render ${(0,LG.e)(ZG.renderMs)}, ${ZG.ticks} ticks ${(0,LG.e)(ZG.tickMs)})`];
        return ZG.pendingMax >= 0 && SG.push(`pending max ${ZG.pendingMax}`), this.ahead >= 0 && SG.push(`${this.ahead} frames ahead`), SG.push(`outliers ${bG.shown} logged, ${bG.dropped} dropped`), (0, yG.j)("frame", `${GG}s: ${SG.join("; ")}`), !0
      }
    }
    let CG = null;

    function WG(GG, bG) {
      return CG ??= new iG, CG.start(GG, bG), CG
    }
  },
  34345: (GG, bG, ZG) => {
    function wG(GG) {
      return `hidden ${GG.changes} changes, ${Math.round(GG.hiddenMs)} ms`
    }
    ZG.d(bG, {
      c: () => SG,
      f: () => wG
    });
    class SG {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(GG) {
        this.changes++, document.hidden ? this.hiddenSinceMs = GG : this.hiddenSinceMs >= 0 && (this.hiddenMs += GG - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(GG) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? GG - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);