export const id = 33;
export const ids = [33];
export const modules = {
  34070: (DD, zD, wD) => {
    function pD(DD, zD) {
      return 0 === DD.length ? 0 : DD[Math.min(DD.length - 1, Math.floor(zD * DD.length))]
    }

    function sD(DD) {
      return DD.toFixed(1)
    }
    wD.d(zD, {
      d: () => sD,
      h: () => pD
    })
  },
  34068: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      FIRST_SUMMARIES_FOR_MS: () => GD,
      FIRST_SUMMARY_MS: () => BD,
      FrameDebugLog: () => XD,
      OUTLIER_BURST: () => nD,
      OUTLIER_MS: () => hD,
      OUTLIER_REFILL_MS: () => MD,
      SUMMARY_MS: () => ID,
      startFrameDebug: () => PD
    });
    var pD = wD(4820),
      sD = wD(4808),
      KD = wD(34070),
      rD = wD(2811),
      LD = wD(1092),
      cD = wD(2953);
    class gD {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = DD => {
          const zD = DD;
          this.add(zD.startTime, zD.duration, zD.blockingDuration, (0, LD.o)(zD))
        }, this.onLongTask = DD => {
          this.add(DD.startTime, DD.duration, 0, 0)
        }, null !== (0, cD.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, cD.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(DD, zD, wD, pD) {
        this.entries.set([DD, zD, wD, pD], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(DD, zD) {
        if (null === this.kind) return "long tasks n/a";
        let wD = 0,
          pD = 0,
          sD = 0,
          KD = 0;
        for (let LD = 0; LD < this.size; LD++) {
          const rD = 4 * LD,
            cD = this.entries[rD] + this.entries[rD + 1];
          cD > DD && cD <= zD + 2 && (wD++, pD += this.entries[rD + 1], sD += this.entries[rD + 2], KD += this.entries[rD + 3])
        }
        const rD = "loaf" === this.kind && wD > 0 ? ` (blocking ${sD.toFixed(0)}, script ${KD.toFixed(0)})` : "";
        return `${wD} ${this.kind} ${pD.toFixed(0)} ms${rD}`
      }
    }
    var RD = wD(34079);

    function AD(DD, zD) {
      return zD < 0 || DD < zD ? DD : DD - zD
    }
    class UD {
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
        }, this.lastMs = 0, this.hidden = new RD.b, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(DD) {
        this.source = DD
      }
      start(DD) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = DD
      }
      take(DD) {
        var zD;
        const wD = [];
        if (!0 === (null === (zD = this.source) || void 0 === zD ? void 0 : zD.call(this, this.now)) && (pD = this.now, sD = this.before, pD.chunksReceived !== sD.chunksReceived || pD.chunksCancelled !== sD.chunksCancelled || pD.chunksStored !== sD.chunksStored || pD.jobsSent !== sD.jobsSent || pD.jobsDone !== sD.jobsDone || pD.jobsInFlight !== sD.jobsInFlight || pD.workersLive !== sD.workersLive || pD.workersRetired !== sD.workersRetired)) {
          wD.push(function(DD, zD) {
            const wD = [`chunks +${AD(DD.chunksReceived,zD.chunksReceived)} got`, `+${AD(DD.chunksCancelled,zD.chunksCancelled)} cancelled`];
            DD.chunksStored >= 0 && wD.push(`${DD.chunksStored} stored`);
            const pD = `jobs +${AD(DD.jobsSent,zD.jobsSent)} sent, +${AD(DD.jobsDone,zD.jobsDone)} done, ${DD.jobsInFlight} in flight`;
            return `${wD.join(", ")}; ${pD}; workers ${DD.workersLive} live, ${DD.workersRetired} retired`
          }(this.now, this.before));
          const DD = this.before;
          this.before = this.now, this.now = DD
        }
        var pD, sD;
        const KD = this.hidden.totals(DD),
          rD = KD.changes - this.hiddenBefore.changes,
          LD = KD.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((rD > 0 || LD > 0) && (wD.push((0, RD.d)({
            changes: rD,
            hiddenMs: LD
          })), this.hiddenBefore = KD), 0 === wD.length) return null;
        const cD = `load ${Math.round((DD-this.lastMs)/1e3)}s: ${wD.join("; ")}`;
        return this.lastMs = DD, cD
      }
    }
    class fD {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(DD, zD, wD) {
        this.count++, "paced" === DD ? this.paced++ : "skipped" === DD && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = zD, this.longestAhead = wD)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const DD = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${DD} other, longest ${this.longest} in ${(0,KD.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const ID = 2e4,
      BD = 5e3,
      GD = 6e4,
      hD = 250,
      nD = 10,
      MD = 6e4,
      OD = 8192;

    function JD(DD) {
      return DD.mainMs = 0, DD.renderMs = 0, DD.ticks = 0, DD.tickMs = 0, DD.rafs = 0, DD.pendingBefore = -1, DD.pendingMax = -1, DD.pendingAfter = -1, DD
    }

    function ED() {
      return JD({})
    }
    class QD {
      constructor() {
        this.intervals = new Float64Array(OD), this.totals = ED(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new fD, this.shown = 0, this.dropped = 0
      }
      reset() {
        JD(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class XD {
      constructor() {
        this.longTasks = new gD, this.summary = new QD, this.current = ED(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = nD, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new UD, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (DD, zD, wD, sD, KD, rD) => {
          this.ahead = DD.headerWord(pD.G.Pacing) & pD._.AheadMask, this.frame(zD, wD, sD, KD, DD.headerWord(pD.G.RenderUs) / 1e3, DD.headerWord(pD.G.TicksRun), rD, DD.headerWord(pD.G.RenderPending))
        }, this.wasmPeekPaced = DD => {
          const zD = performance.now();
          this.frame(zD, zD, "paced", DD, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (DD, zD, wD) => {
          this.frame(DD, zD, "drawn", wD, zD - DD, 0, 0, -1)
        }, this.jsTick = DD => {
          this.current.mainMs += DD, this.current.ticks++, this.current.tickMs += DD
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const DD = performance.now();
          let zD = 0;
          for (const wD of this.waiting) {
            if (wD.dueMs > DD) {
              this.waiting[zD++] = wD;
              continue
            }
            const pD = [`long frame ${(0,KD.d)(wD.intervalMs)} ms ending at ${(0,KD.d)(wD.endMs)} ms: main ${(0,KD.d)(wD.mainMs)} (render ${(0,KD.d)(wD.renderMs)}, ${wD.ticks} ticks ${(0,KD.d)(wD.tickMs)}), outside ${(0,KD.d)(wD.intervalMs-wD.mainMs)}`, `${wD.rafs} rafs`];
            wD.pendingBefore >= 0 && pD.push(`pending ${wD.pendingBefore} -> ${wD.pendingAfter} (max ${wD.pendingMax})`), pD.push(this.longTasks.describe(wD.endMs - wD.intervalMs, wD.endMs)), (0, rD.l)("frame", pD.join("; "))
          }
          this.waiting.length = zD, zD > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - DD))
        }, this.flush = () => {
          this.flushTimer = null;
          const DD = performance.now(),
            zD = Math.round((DD - this.lastFlushMs) / 1e3);
          this.lastFlushMs = DD, this.scheduleFlush();
          if (this.logSummary(zD) || this.inGameSinceFlush) {
            const zD = this.loadLine.take(DD);
            null !== zD && (0, rD.l)("frame", zD)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(DD, zD) {
        var wD;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, rD.l)("frame", `start: ${DD} client, ${zD}, dpr ${window.devicePixelRatio}, long tasks ${null!==(wD=this.longTasks.kind)&&void 0!==wD?wD:"n/a"}; a summary each ${ID/1e3} s in game (${BD/1e3} s for the first ${GD/1e3} s), outliers over ${hD} ms`)
      }
      setLoadCounts(DD) {
        this.loadLine.setSource(DD)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const DD = performance.now() - this.startedMs < GD;
        this.flushTimer = setTimeout(this.flush, DD ? BD : ID)
      }
      frame(DD, zD, wD, pD, KD, rD, LD, cD) {
        if (!pD) return this.restart(), void(this.lastPending = cD);
        const gD = this.current;
        (0, sD.b)(wD) ? (this.lastDrawnStartMs >= 0 && (gD.pendingAfter = this.lastPending, this.closeInterval(DD - this.lastDrawnStartMs, DD)), this.lastDrawnStartMs = DD, JD(gD).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(wD, zD - this.lastDrawnStartMs, this.ahead), gD.mainMs += zD - DD, gD.renderMs += KD, gD.ticks += rD, gD.tickMs += LD, gD.pendingMax = Math.max(gD.pendingMax, cD), this.lastPending = cD, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, cD)
      }
      closeInterval(DD, zD) {
        const wD = this.summary,
          pD = this.current;
        wD.frames < OD && (wD.intervals[wD.frames] = DD), wD.frames++, wD.maxMs = Math.max(wD.maxMs, DD);
        const sD = wD.totals;
        sD.mainMs += pD.mainMs, sD.renderMs += pD.renderMs, sD.ticks += pD.ticks, sD.tickMs += pD.tickMs, sD.rafs += pD.rafs, DD > 50 && wD.slow++, DD > hD && this.outlier(DD, zD)
      }
      outlier(DD, zD) {
        const wD = Math.floor((zD - this.lastRefillMs) / MD);
        wD > 0 && (this.tokens = Math.min(nD, this.tokens + wD), this.lastRefillMs += wD * MD), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: zD,
          intervalMs: DD,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(DD) {
        const zD = this.summary,
          wD = zD.totals;
        if (0 === zD.frames) return zD.undrawn.count > 0 && (0, rD.l)("frame", `${DD}s: no frames drawn, ${zD.undrawn.describe()}; pending max ${wD.pendingMax}`), zD.undrawn.count > 0;
        const pD = zD.intervals.subarray(0, Math.min(zD.frames, OD)).sort(),
          sD = [`${zD.frames} frames, median ${(0,KD.d)((0,KD.h)(pD,.5))} p95 ${(0,KD.d)((0,KD.h)(pD,.95))} max ${(0,KD.d)(zD.maxMs)} ms, ${zD.slow} over 50, ${zD.shown+zD.dropped} over ${hD}`, `${wD.rafs} rafs, ${zD.undrawn.describe()}`, `main ${(0,KD.d)(wD.mainMs)} ms (render ${(0,KD.d)(wD.renderMs)}, ${wD.ticks} ticks ${(0,KD.d)(wD.tickMs)})`];
        return wD.pendingMax >= 0 && sD.push(`pending max ${wD.pendingMax}`), this.ahead >= 0 && sD.push(`${this.ahead} frames ahead`), sD.push(`outliers ${zD.shown} logged, ${zD.dropped} dropped`), (0, rD.l)("frame", `${DD}s: ${sD.join("; ")}`), !0
      }
    }
    let VD = null;

    function PD(DD, zD) {
      return VD ??= new XD, VD.start(DD, zD), VD
    }
  },
  34079: (DD, zD, wD) => {
    function pD(DD) {
      return `hidden ${DD.changes} changes, ${Math.round(DD.hiddenMs)} ms`
    }
    wD.d(zD, {
      b: () => sD,
      d: () => pD
    });
    class sD {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(DD) {
        this.changes++, document.hidden ? this.hiddenSinceMs = DD : this.hiddenSinceMs >= 0 && (this.hiddenMs += DD - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(DD) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? DD - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);