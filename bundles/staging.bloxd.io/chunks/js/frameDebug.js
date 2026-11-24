export const id = 33;
export const ids = [33];
export const modules = {
  34082: (SS, HS, gS) => {
    function tS(SS, HS) {
      return 0 === SS.length ? 0 : SS[Math.min(SS.length - 1, Math.floor(HS * SS.length))]
    }

    function bS(SS) {
      return SS.toFixed(1)
    }
    gS.d(HS, {
      d: () => bS,
      h: () => tS
    })
  },
  34078: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      FIRST_SUMMARIES_FOR_MS: () => GS,
      FIRST_SUMMARY_MS: () => jS,
      FrameDebugLog: () => ZS,
      OUTLIER_BURST: () => nS,
      OUTLIER_MS: () => CS,
      OUTLIER_REFILL_MS: () => PS,
      SUMMARY_MS: () => KS,
      startFrameDebug: () => OS
    });
    var tS = gS(4935),
      bS = gS(4917),
      XS = gS(34082),
      xS = gS(2953),
      NS = gS(1172),
      qS = gS(3113);
    class uS {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = SS => {
          const HS = SS;
          this.add(HS.startTime, HS.duration, HS.blockingDuration, (0, NS.n)(HS))
        }, this.onLongTask = SS => {
          this.add(SS.startTime, SS.duration, 0, 0)
        }, null !== (0, qS.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, qS.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(SS, HS, gS, tS) {
        this.entries.set([SS, HS, gS, tS], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(SS, HS) {
        if (null === this.kind) return "long tasks n/a";
        let gS = 0,
          tS = 0,
          bS = 0,
          XS = 0;
        for (let NS = 0; NS < this.size; NS++) {
          const xS = 4 * NS,
            qS = this.entries[xS] + this.entries[xS + 1];
          qS > SS && qS <= HS + 2 && (gS++, tS += this.entries[xS + 1], bS += this.entries[xS + 2], XS += this.entries[xS + 3])
        }
        const xS = "loaf" === this.kind && gS > 0 ? ` (blocking ${bS.toFixed(0)}, script ${XS.toFixed(0)})` : "";
        return `${gS} ${this.kind} ${tS.toFixed(0)} ms${xS}`
      }
    }
    var IS = gS(34090);

    function fS(SS, HS) {
      return HS < 0 || SS < HS ? SS : SS - HS
    }
    class kS {
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
        }, this.lastMs = 0, this.hidden = new IS.e, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(SS) {
        this.source = SS
      }
      start(SS) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = SS
      }
      take(SS) {
        var HS;
        const gS = [];
        if (!0 === (null === (HS = this.source) || void 0 === HS ? void 0 : HS.call(this, this.now)) && (tS = this.now, bS = this.before, tS.chunksReceived !== bS.chunksReceived || tS.chunksCancelled !== bS.chunksCancelled || tS.chunksStored !== bS.chunksStored || tS.jobsSent !== bS.jobsSent || tS.jobsDone !== bS.jobsDone || tS.jobsInFlight !== bS.jobsInFlight || tS.workersLive !== bS.workersLive || tS.workersRetired !== bS.workersRetired)) {
          gS.push(function(SS, HS) {
            const gS = [`chunks +${fS(SS.chunksReceived,HS.chunksReceived)} got`, `+${fS(SS.chunksCancelled,HS.chunksCancelled)} cancelled`];
            SS.chunksStored >= 0 && gS.push(`${SS.chunksStored} stored`);
            const tS = `jobs +${fS(SS.jobsSent,HS.jobsSent)} sent, +${fS(SS.jobsDone,HS.jobsDone)} done, ${SS.jobsInFlight} in flight`;
            return `${gS.join(", ")}; ${tS}; workers ${SS.workersLive} live, ${SS.workersRetired} retired`
          }(this.now, this.before));
          const SS = this.before;
          this.before = this.now, this.now = SS
        }
        var tS, bS;
        const XS = this.hidden.totals(SS),
          xS = XS.changes - this.hiddenBefore.changes,
          NS = XS.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((xS > 0 || NS > 0) && (gS.push((0, IS.f)({
            changes: xS,
            hiddenMs: NS
          })), this.hiddenBefore = XS), 0 === gS.length) return null;
        const qS = `load ${Math.round((SS-this.lastMs)/1e3)}s: ${gS.join("; ")}`;
        return this.lastMs = SS, qS
      }
    }
    class aS {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(SS, HS, gS) {
        this.count++, "paced" === SS ? this.paced++ : "skipped" === SS && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = HS, this.longestAhead = gS)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const SS = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${SS} other, longest ${this.longest} in ${(0,XS.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const KS = 2e4,
      jS = 5e3,
      GS = 6e4,
      CS = 250,
      nS = 10,
      PS = 6e4,
      QS = 8192;

    function DS(SS) {
      return SS.mainMs = 0, SS.renderMs = 0, SS.ticks = 0, SS.tickMs = 0, SS.rafs = 0, SS.pendingBefore = -1, SS.pendingMax = -1, SS.pendingAfter = -1, SS
    }

    function wS() {
      return DS({})
    }
    class hS {
      constructor() {
        this.intervals = new Float64Array(QS), this.totals = wS(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new aS, this.shown = 0, this.dropped = 0
      }
      reset() {
        DS(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class ZS {
      constructor() {
        this.longTasks = new uS, this.summary = new hS, this.current = wS(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = nS, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new kS, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (SS, HS, gS, bS, XS, xS) => {
          this.ahead = SS.headerWord(tS.H.Pacing) & tS.Z.AheadMask, this.frame(HS, gS, bS, XS, SS.headerWord(tS.H.RenderUs) / 1e3, SS.headerWord(tS.H.TicksRun), xS, SS.headerWord(tS.H.RenderPending))
        }, this.wasmPeekPaced = SS => {
          const HS = performance.now();
          this.frame(HS, HS, "paced", SS, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (SS, HS, gS) => {
          this.frame(SS, HS, "drawn", gS, HS - SS, 0, 0, -1)
        }, this.jsTick = SS => {
          this.current.mainMs += SS, this.current.ticks++, this.current.tickMs += SS
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const SS = performance.now();
          let HS = 0;
          for (const gS of this.waiting) {
            if (gS.dueMs > SS) {
              this.waiting[HS++] = gS;
              continue
            }
            const tS = [`long frame ${(0,XS.d)(gS.intervalMs)} ms ending at ${(0,XS.d)(gS.endMs)} ms: main ${(0,XS.d)(gS.mainMs)} (render ${(0,XS.d)(gS.renderMs)}, ${gS.ticks} ticks ${(0,XS.d)(gS.tickMs)}), outside ${(0,XS.d)(gS.intervalMs-gS.mainMs)}`, `${gS.rafs} rafs`];
            gS.pendingBefore >= 0 && tS.push(`pending ${gS.pendingBefore} -> ${gS.pendingAfter} (max ${gS.pendingMax})`), tS.push(this.longTasks.describe(gS.endMs - gS.intervalMs, gS.endMs)), (0, xS.i)("frame", tS.join("; "))
          }
          this.waiting.length = HS, HS > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - SS))
        }, this.flush = () => {
          this.flushTimer = null;
          const SS = performance.now(),
            HS = Math.round((SS - this.lastFlushMs) / 1e3);
          this.lastFlushMs = SS, this.scheduleFlush();
          if (this.logSummary(HS) || this.inGameSinceFlush) {
            const HS = this.loadLine.take(SS);
            null !== HS && (0, xS.i)("frame", HS)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(SS, HS) {
        var gS;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, xS.i)("frame", `start: ${SS} client, ${HS}, dpr ${window.devicePixelRatio}, long tasks ${null!==(gS=this.longTasks.kind)&&void 0!==gS?gS:"n/a"}; a summary each ${KS/1e3} s in game (${jS/1e3} s for the first ${GS/1e3} s), outliers over ${CS} ms`)
      }
      setLoadCounts(SS) {
        this.loadLine.setSource(SS)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const SS = performance.now() - this.startedMs < GS;
        this.flushTimer = setTimeout(this.flush, SS ? jS : KS)
      }
      frame(SS, HS, gS, tS, XS, xS, NS, qS) {
        if (!tS) return this.restart(), void(this.lastPending = qS);
        const uS = this.current;
        (0, bS.c)(gS) ? (this.lastDrawnStartMs >= 0 && (uS.pendingAfter = this.lastPending, this.closeInterval(SS - this.lastDrawnStartMs, SS)), this.lastDrawnStartMs = SS, DS(uS).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(gS, HS - this.lastDrawnStartMs, this.ahead), uS.mainMs += HS - SS, uS.renderMs += XS, uS.ticks += xS, uS.tickMs += NS, uS.pendingMax = Math.max(uS.pendingMax, qS), this.lastPending = qS, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, qS)
      }
      closeInterval(SS, HS) {
        const gS = this.summary,
          tS = this.current;
        gS.frames < QS && (gS.intervals[gS.frames] = SS), gS.frames++, gS.maxMs = Math.max(gS.maxMs, SS);
        const bS = gS.totals;
        bS.mainMs += tS.mainMs, bS.renderMs += tS.renderMs, bS.ticks += tS.ticks, bS.tickMs += tS.tickMs, bS.rafs += tS.rafs, SS > 50 && gS.slow++, SS > CS && this.outlier(SS, HS)
      }
      outlier(SS, HS) {
        const gS = Math.floor((HS - this.lastRefillMs) / PS);
        gS > 0 && (this.tokens = Math.min(nS, this.tokens + gS), this.lastRefillMs += gS * PS), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: HS,
          intervalMs: SS,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(SS) {
        const HS = this.summary,
          gS = HS.totals;
        if (0 === HS.frames) return HS.undrawn.count > 0 && (0, xS.i)("frame", `${SS}s: no frames drawn, ${HS.undrawn.describe()}; pending max ${gS.pendingMax}`), HS.undrawn.count > 0;
        const tS = HS.intervals.subarray(0, Math.min(HS.frames, QS)).sort(),
          bS = [`${HS.frames} frames, median ${(0,XS.d)((0,XS.h)(tS,.5))} p95 ${(0,XS.d)((0,XS.h)(tS,.95))} max ${(0,XS.d)(HS.maxMs)} ms, ${HS.slow} over 50, ${HS.shown+HS.dropped} over ${CS}`, `${gS.rafs} rafs, ${HS.undrawn.describe()}`, `main ${(0,XS.d)(gS.mainMs)} ms (render ${(0,XS.d)(gS.renderMs)}, ${gS.ticks} ticks ${(0,XS.d)(gS.tickMs)})`];
        return gS.pendingMax >= 0 && bS.push(`pending max ${gS.pendingMax}`), this.ahead >= 0 && bS.push(`${this.ahead} frames ahead`), bS.push(`outliers ${HS.shown} logged, ${HS.dropped} dropped`), (0, xS.i)("frame", `${SS}s: ${bS.join("; ")}`), !0
      }
    }
    let JS = null;

    function OS(SS, HS) {
      return JS ??= new ZS, JS.start(SS, HS), JS
    }
  },
  34090: (SS, HS, gS) => {
    function tS(SS) {
      return `hidden ${SS.changes} changes, ${Math.round(SS.hiddenMs)} ms`
    }
    gS.d(HS, {
      e: () => bS,
      f: () => tS
    });
    class bS {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(SS) {
        this.changes++, document.hidden ? this.hiddenSinceMs = SS : this.hiddenSinceMs >= 0 && (this.hiddenMs += SS - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(SS) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? SS - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);