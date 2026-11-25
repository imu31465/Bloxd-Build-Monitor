export const id = 34;
export const ids = [34];
export const modules = {
  34364: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return 0 === QQ.length ? 0 : QQ[Math.min(QQ.length - 1, Math.floor(WQ * QQ.length))]
    }

    function qQ(QQ) {
      return QQ.toFixed(1)
    }
    XQ.d(WQ, {
      c: () => qQ,
      f: () => wQ
    })
  },
  34356: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      FIRST_SUMMARIES_FOR_MS: () => yQ,
      FIRST_SUMMARY_MS: () => BQ,
      FrameDebugLog: () => dQ,
      OUTLIER_BURST: () => DQ,
      OUTLIER_MS: () => VQ,
      OUTLIER_REFILL_MS: () => pQ,
      SUMMARY_MS: () => jQ,
      startFrameDebug: () => aQ
    });
    var wQ = XQ(5140),
      qQ = XQ(5126),
      TQ = XQ(34364),
      zQ = XQ(3045),
      sQ = XQ(1129),
      FQ = XQ(3215);
    class PQ {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = QQ => {
          const WQ = QQ;
          this.add(WQ.startTime, WQ.duration, WQ.blockingDuration, (0, sQ.p)(WQ))
        }, this.onLongTask = QQ => {
          this.add(QQ.startTime, QQ.duration, 0, 0)
        }, null !== (0, FQ.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, FQ.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(QQ, WQ, XQ, wQ) {
        this.entries.set([QQ, WQ, XQ, wQ], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(QQ, WQ) {
        if (null === this.kind) return "long tasks n/a";
        let XQ = 0,
          wQ = 0,
          qQ = 0,
          TQ = 0;
        for (let sQ = 0; sQ < this.size; sQ++) {
          const zQ = 4 * sQ,
            FQ = this.entries[zQ] + this.entries[zQ + 1];
          FQ > QQ && FQ <= WQ + 2 && (XQ++, wQ += this.entries[zQ + 1], qQ += this.entries[zQ + 2], TQ += this.entries[zQ + 3])
        }
        const zQ = "loaf" === this.kind && XQ > 0 ? ` (blocking ${qQ.toFixed(0)}, script ${TQ.toFixed(0)})` : "";
        return `${XQ} ${this.kind} ${wQ.toFixed(0)} ms${zQ}`
      }
    }
    var gQ = XQ(34367);

    function JQ(QQ, WQ) {
      return WQ < 0 || QQ < WQ ? QQ : QQ - WQ
    }
    class rQ {
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
        }, this.lastMs = 0, this.hidden = new gQ.c, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(QQ) {
        this.source = QQ
      }
      start(QQ) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = QQ
      }
      take(QQ) {
        var WQ;
        const XQ = [];
        if (!0 === (null === (WQ = this.source) || void 0 === WQ ? void 0 : WQ.call(this, this.now)) && (wQ = this.now, qQ = this.before, wQ.chunksReceived !== qQ.chunksReceived || wQ.chunksCancelled !== qQ.chunksCancelled || wQ.chunksStored !== qQ.chunksStored || wQ.jobsSent !== qQ.jobsSent || wQ.jobsDone !== qQ.jobsDone || wQ.jobsInFlight !== qQ.jobsInFlight || wQ.workersLive !== qQ.workersLive || wQ.workersRetired !== qQ.workersRetired)) {
          XQ.push(function(QQ, WQ) {
            const XQ = [`chunks +${JQ(QQ.chunksReceived,WQ.chunksReceived)} got`, `+${JQ(QQ.chunksCancelled,WQ.chunksCancelled)} cancelled`];
            QQ.chunksStored >= 0 && XQ.push(`${QQ.chunksStored} stored`);
            const wQ = `jobs +${JQ(QQ.jobsSent,WQ.jobsSent)} sent, +${JQ(QQ.jobsDone,WQ.jobsDone)} done, ${QQ.jobsInFlight} in flight`;
            return `${XQ.join(", ")}; ${wQ}; workers ${QQ.workersLive} live, ${QQ.workersRetired} retired`
          }(this.now, this.before));
          const QQ = this.before;
          this.before = this.now, this.now = QQ
        }
        var wQ, qQ;
        const TQ = this.hidden.totals(QQ),
          zQ = TQ.changes - this.hiddenBefore.changes,
          sQ = TQ.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((zQ > 0 || sQ > 0) && (XQ.push((0, gQ.f)({
            changes: zQ,
            hiddenMs: sQ
          })), this.hiddenBefore = TQ), 0 === XQ.length) return null;
        const FQ = `load ${Math.round((QQ-this.lastMs)/1e3)}s: ${XQ.join("; ")}`;
        return this.lastMs = QQ, FQ
      }
    }
    class IQ {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(QQ, WQ, XQ) {
        this.count++, "paced" === QQ ? this.paced++ : "skipped" === QQ && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = WQ, this.longestAhead = XQ)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const QQ = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${QQ} other, longest ${this.longest} in ${(0,TQ.c)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const jQ = 2e4,
      BQ = 5e3,
      yQ = 6e4,
      VQ = 250,
      DQ = 10,
      pQ = 6e4,
      GQ = 8192;

    function UQ(QQ) {
      return QQ.mainMs = 0, QQ.renderMs = 0, QQ.ticks = 0, QQ.tickMs = 0, QQ.rafs = 0, QQ.pendingBefore = -1, QQ.pendingMax = -1, QQ.pendingAfter = -1, QQ
    }

    function bQ() {
      return UQ({})
    }
    class vQ {
      constructor() {
        this.intervals = new Float64Array(GQ), this.totals = bQ(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new IQ, this.shown = 0, this.dropped = 0
      }
      reset() {
        UQ(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class dQ {
      constructor() {
        this.longTasks = new PQ, this.summary = new vQ, this.current = bQ(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = DQ, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new rQ, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (QQ, WQ, XQ, qQ, TQ, zQ) => {
          this.ahead = QQ.headerWord(wQ.F.Pacing) & wQ.Z.AheadMask, this.frame(WQ, XQ, qQ, TQ, QQ.headerWord(wQ.F.RenderUs) / 1e3, QQ.headerWord(wQ.F.TicksRun), zQ, QQ.headerWord(wQ.F.RenderPending))
        }, this.wasmPeekPaced = QQ => {
          const WQ = performance.now();
          this.frame(WQ, WQ, "paced", QQ, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (QQ, WQ, XQ) => {
          this.frame(QQ, WQ, "drawn", XQ, WQ - QQ, 0, 0, -1)
        }, this.jsTick = QQ => {
          this.current.mainMs += QQ, this.current.ticks++, this.current.tickMs += QQ
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const QQ = performance.now();
          let WQ = 0;
          for (const XQ of this.waiting) {
            if (XQ.dueMs > QQ) {
              this.waiting[WQ++] = XQ;
              continue
            }
            const wQ = [`long frame ${(0,TQ.c)(XQ.intervalMs)} ms ending at ${(0,TQ.c)(XQ.endMs)} ms: main ${(0,TQ.c)(XQ.mainMs)} (render ${(0,TQ.c)(XQ.renderMs)}, ${XQ.ticks} ticks ${(0,TQ.c)(XQ.tickMs)}), outside ${(0,TQ.c)(XQ.intervalMs-XQ.mainMs)}`, `${XQ.rafs} rafs`];
            XQ.pendingBefore >= 0 && wQ.push(`pending ${XQ.pendingBefore} -> ${XQ.pendingAfter} (max ${XQ.pendingMax})`), wQ.push(this.longTasks.describe(XQ.endMs - XQ.intervalMs, XQ.endMs)), (0, zQ.j)("frame", wQ.join("; "))
          }
          this.waiting.length = WQ, WQ > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - QQ))
        }, this.flush = () => {
          this.flushTimer = null;
          const QQ = performance.now(),
            WQ = Math.round((QQ - this.lastFlushMs) / 1e3);
          this.lastFlushMs = QQ, this.scheduleFlush();
          if (this.logSummary(WQ) || this.inGameSinceFlush) {
            const WQ = this.loadLine.take(QQ);
            null !== WQ && (0, zQ.j)("frame", WQ)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(QQ, WQ) {
        var XQ;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, zQ.j)("frame", `start: ${QQ} client, ${WQ}, dpr ${window.devicePixelRatio}, long tasks ${null!==(XQ=this.longTasks.kind)&&void 0!==XQ?XQ:"n/a"}; a summary each ${jQ/1e3} s in game (${BQ/1e3} s for the first ${yQ/1e3} s), outliers over ${VQ} ms`)
      }
      setLoadCounts(QQ) {
        this.loadLine.setSource(QQ)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const QQ = performance.now() - this.startedMs < yQ;
        this.flushTimer = setTimeout(this.flush, QQ ? BQ : jQ)
      }
      frame(QQ, WQ, XQ, wQ, TQ, zQ, sQ, FQ) {
        if (!wQ) return this.restart(), void(this.lastPending = FQ);
        const PQ = this.current;
        (0, qQ.b)(XQ) ? (this.lastDrawnStartMs >= 0 && (PQ.pendingAfter = this.lastPending, this.closeInterval(QQ - this.lastDrawnStartMs, QQ)), this.lastDrawnStartMs = QQ, UQ(PQ).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(XQ, WQ - this.lastDrawnStartMs, this.ahead), PQ.mainMs += WQ - QQ, PQ.renderMs += TQ, PQ.ticks += zQ, PQ.tickMs += sQ, PQ.pendingMax = Math.max(PQ.pendingMax, FQ), this.lastPending = FQ, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, FQ)
      }
      closeInterval(QQ, WQ) {
        const XQ = this.summary,
          wQ = this.current;
        XQ.frames < GQ && (XQ.intervals[XQ.frames] = QQ), XQ.frames++, XQ.maxMs = Math.max(XQ.maxMs, QQ);
        const qQ = XQ.totals;
        qQ.mainMs += wQ.mainMs, qQ.renderMs += wQ.renderMs, qQ.ticks += wQ.ticks, qQ.tickMs += wQ.tickMs, qQ.rafs += wQ.rafs, QQ > 50 && XQ.slow++, QQ > VQ && this.outlier(QQ, WQ)
      }
      outlier(QQ, WQ) {
        const XQ = Math.floor((WQ - this.lastRefillMs) / pQ);
        XQ > 0 && (this.tokens = Math.min(DQ, this.tokens + XQ), this.lastRefillMs += XQ * pQ), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: WQ,
          intervalMs: QQ,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(QQ) {
        const WQ = this.summary,
          XQ = WQ.totals;
        if (0 === WQ.frames) return WQ.undrawn.count > 0 && (0, zQ.j)("frame", `${QQ}s: no frames drawn, ${WQ.undrawn.describe()}; pending max ${XQ.pendingMax}`), WQ.undrawn.count > 0;
        const wQ = WQ.intervals.subarray(0, Math.min(WQ.frames, GQ)).sort(),
          qQ = [`${WQ.frames} frames, median ${(0,TQ.c)((0,TQ.f)(wQ,.5))} p95 ${(0,TQ.c)((0,TQ.f)(wQ,.95))} max ${(0,TQ.c)(WQ.maxMs)} ms, ${WQ.slow} over 50, ${WQ.shown+WQ.dropped} over ${VQ}`, `${XQ.rafs} rafs, ${WQ.undrawn.describe()}`, `main ${(0,TQ.c)(XQ.mainMs)} ms (render ${(0,TQ.c)(XQ.renderMs)}, ${XQ.ticks} ticks ${(0,TQ.c)(XQ.tickMs)})`];
        return XQ.pendingMax >= 0 && qQ.push(`pending max ${XQ.pendingMax}`), this.ahead >= 0 && qQ.push(`${this.ahead} frames ahead`), qQ.push(`outliers ${WQ.shown} logged, ${WQ.dropped} dropped`), (0, zQ.j)("frame", `${QQ}s: ${qQ.join("; ")}`), !0
      }
    }
    let HQ = null;

    function aQ(QQ, WQ) {
      return HQ ??= new dQ, HQ.start(QQ, WQ), HQ
    }
  },
  34367: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return `hidden ${QQ.changes} changes, ${Math.round(QQ.hiddenMs)} ms`
    }
    XQ.d(WQ, {
      c: () => qQ,
      f: () => wQ
    });
    class qQ {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(QQ) {
        this.changes++, document.hidden ? this.hiddenSinceMs = QQ : this.hiddenSinceMs >= 0 && (this.hiddenMs += QQ - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(QQ) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? QQ - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);