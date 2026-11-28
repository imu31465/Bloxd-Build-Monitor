export const id = 40;
export const ids = [40];
export const modules = {
  35401: (dd, Od, md) => {
    function Wd(dd, Od) {
      return 0 === dd.length ? 0 : dd[Math.min(dd.length - 1, Math.floor(Od * dd.length))]
    }

    function Fd(dd) {
      return dd.toFixed(1)
    }
    md.d(Od, {
      d: () => Fd,
      e: () => Wd
    })
  },
  35392: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      FIRST_SUMMARIES_FOR_MS: () => yd,
      FIRST_SUMMARY_MS: () => Hd,
      FrameDebugLog: () => Jd,
      OUTLIER_BURST: () => Td,
      OUTLIER_MS: () => bd,
      OUTLIER_REFILL_MS: () => pd,
      SUMMARY_MS: () => qd,
      startFrameDebug: () => xd
    });
    var Wd = md(5571),
      Fd = md(5565),
      Rd = md(35401),
      Xd = md(3903),
      Kd = md(1382),
      hd = md(4065);
    class vd {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = dd => {
          const Od = dd;
          this.add(Od.startTime, Od.duration, Od.blockingDuration, (0, Kd.s)(Od))
        }, this.onLongTask = dd => {
          this.add(dd.startTime, dd.duration, 0, 0)
        }, null !== (0, hd.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, hd.d)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(dd, Od, md, Wd) {
        this.entries.set([dd, Od, md, Wd], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(dd, Od) {
        if (null === this.kind) return "long tasks n/a";
        let md = 0,
          Wd = 0,
          Fd = 0,
          Rd = 0;
        for (let Kd = 0; Kd < this.size; Kd++) {
          const Xd = 4 * Kd,
            hd = this.entries[Xd] + this.entries[Xd + 1];
          hd > dd && hd <= Od + 2 && (md++, Wd += this.entries[Xd + 1], Fd += this.entries[Xd + 2], Rd += this.entries[Xd + 3])
        }
        const Xd = "loaf" === this.kind && md > 0 ? ` (blocking ${Fd.toFixed(0)}, script ${Rd.toFixed(0)})` : "";
        return `${md} ${this.kind} ${Wd.toFixed(0)} ms${Xd}`
      }
    }
    var Qd = md(35404);

    function td(dd, Od) {
      return Od < 0 || dd < Od ? dd : dd - Od
    }
    class od {
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
        }, this.lastMs = 0, this.hidden = new Qd.d, this.hiddenBefore = {
          changes: 0,
          hiddenMs: 0
        }
      }
      setSource(dd) {
        this.source = dd
      }
      start(dd) {
        this.before = {
          chunksReceived: -1,
          chunksCancelled: -1,
          chunksStored: -1,
          jobsSent: -1,
          jobsDone: -1,
          jobsInFlight: -1,
          workersLive: -1,
          workersRetired: -1
        }, this.lastMs = dd
      }
      take(dd) {
        var Od;
        const md = [];
        if (!0 === (null === (Od = this.source) || void 0 === Od ? void 0 : Od.call(this, this.now)) && (Wd = this.now, Fd = this.before, Wd.chunksReceived !== Fd.chunksReceived || Wd.chunksCancelled !== Fd.chunksCancelled || Wd.chunksStored !== Fd.chunksStored || Wd.jobsSent !== Fd.jobsSent || Wd.jobsDone !== Fd.jobsDone || Wd.jobsInFlight !== Fd.jobsInFlight || Wd.workersLive !== Fd.workersLive || Wd.workersRetired !== Fd.workersRetired)) {
          md.push(function(dd, Od) {
            const md = [`chunks +${td(dd.chunksReceived,Od.chunksReceived)} got`, `+${td(dd.chunksCancelled,Od.chunksCancelled)} cancelled`];
            dd.chunksStored >= 0 && md.push(`${dd.chunksStored} stored`);
            const Wd = `jobs +${td(dd.jobsSent,Od.jobsSent)} sent, +${td(dd.jobsDone,Od.jobsDone)} done, ${dd.jobsInFlight} in flight`;
            return `${md.join(", ")}; ${Wd}; workers ${dd.workersLive} live, ${dd.workersRetired} retired`
          }(this.now, this.before));
          const dd = this.before;
          this.before = this.now, this.now = dd
        }
        var Wd, Fd;
        const Rd = this.hidden.totals(dd),
          Xd = Rd.changes - this.hiddenBefore.changes,
          Kd = Rd.hiddenMs - this.hiddenBefore.hiddenMs;
        if ((Xd > 0 || Kd > 0) && (md.push((0, Qd.g)({
            changes: Xd,
            hiddenMs: Kd
          })), this.hiddenBefore = Rd), 0 === md.length) return null;
        const hd = `load ${Math.round((dd-this.lastMs)/1e3)}s: ${md.join("; ")}`;
        return this.lastMs = dd, hd
      }
    }
    class Nd {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(dd, Od, md) {
        this.count++, "paced" === dd ? this.paced++ : "skipped" === dd && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = Od, this.longestAhead = md)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const dd = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${dd} other, longest ${this.longest} in ${(0,Rd.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const qd = 2e4,
      Hd = 5e3,
      yd = 6e4,
      bd = 250,
      Td = 10,
      pd = 6e4,
      Yd = 8192;

    function gd(dd) {
      return dd.mainMs = 0, dd.renderMs = 0, dd.ticks = 0, dd.tickMs = 0, dd.rafs = 0, dd.pendingBefore = -1, dd.pendingMax = -1, dd.pendingAfter = -1, dd
    }

    function wd() {
      return gd({})
    }
    class Ed {
      constructor() {
        this.intervals = new Float64Array(Yd), this.totals = wd(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new Nd, this.shown = 0, this.dropped = 0
      }
      reset() {
        gd(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class Jd {
      constructor() {
        this.longTasks = new vd, this.summary = new Ed, this.current = wd(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = Td, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new od, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.hidden.changed(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (dd, Od, md, Fd, Rd, Xd) => {
          this.ahead = dd.headerWord(Wd.I.Pacing) & Wd.Z.AheadMask, this.frame(Od, md, Fd, Rd, dd.headerWord(Wd.I.RenderUs) / 1e3, dd.headerWord(Wd.I.TicksRun), Xd, dd.headerWord(Wd.I.RenderPending))
        }, this.wasmPeekPaced = dd => {
          const Od = performance.now();
          this.frame(Od, Od, "paced", dd, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (dd, Od, md) => {
          this.frame(dd, Od, "drawn", md, Od - dd, 0, 0, -1)
        }, this.jsTick = dd => {
          this.current.mainMs += dd, this.current.ticks++, this.current.tickMs += dd
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const dd = performance.now();
          let Od = 0;
          for (const md of this.waiting) {
            if (md.dueMs > dd) {
              this.waiting[Od++] = md;
              continue
            }
            const Wd = [`long frame ${(0,Rd.d)(md.intervalMs)} ms ending at ${(0,Rd.d)(md.endMs)} ms: main ${(0,Rd.d)(md.mainMs)} (render ${(0,Rd.d)(md.renderMs)}, ${md.ticks} ticks ${(0,Rd.d)(md.tickMs)}), outside ${(0,Rd.d)(md.intervalMs-md.mainMs)}`, `${md.rafs} rafs`];
            md.pendingBefore >= 0 && Wd.push(`pending ${md.pendingBefore} -> ${md.pendingAfter} (max ${md.pendingMax})`), Wd.push(this.longTasks.describe(md.endMs - md.intervalMs, md.endMs)), (0, Xd.k)("frame", Wd.join("; "))
          }
          this.waiting.length = Od, Od > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - dd))
        }, this.flush = () => {
          this.flushTimer = null;
          const dd = performance.now(),
            Od = Math.round((dd - this.lastFlushMs) / 1e3);
          this.lastFlushMs = dd, this.scheduleFlush();
          if (this.logSummary(Od) || this.inGameSinceFlush) {
            const Od = this.loadLine.take(dd);
            null !== Od && (0, Xd.k)("frame", Od)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(dd, Od) {
        var md;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Xd.k)("frame", `start: ${dd} client, ${Od}, dpr ${window.devicePixelRatio}, long tasks ${null!==(md=this.longTasks.kind)&&void 0!==md?md:"n/a"}; a summary each ${qd/1e3} s in game (${Hd/1e3} s for the first ${yd/1e3} s), outliers over ${bd} ms`)
      }
      setLoadCounts(dd) {
        this.loadLine.setSource(dd)
      }
      joined() {
        this.startedMs = performance.now(), this.scheduleFlush()
      }
      inGame() {
        this.inGameSinceFlush = !0
      }
      scheduleFlush() {
        null !== this.flushTimer && clearTimeout(this.flushTimer);
        const dd = performance.now() - this.startedMs < yd;
        this.flushTimer = setTimeout(this.flush, dd ? Hd : qd)
      }
      frame(dd, Od, md, Wd, Rd, Xd, Kd, hd) {
        if (!Wd) return this.restart(), void(this.lastPending = hd);
        const vd = this.current;
        (0, Fd.d)(md) ? (this.lastDrawnStartMs >= 0 && (vd.pendingAfter = this.lastPending, this.closeInterval(dd - this.lastDrawnStartMs, dd)), this.lastDrawnStartMs = dd, gd(vd).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(md, Od - this.lastDrawnStartMs, this.ahead), vd.mainMs += Od - dd, vd.renderMs += Rd, vd.ticks += Xd, vd.tickMs += Kd, vd.pendingMax = Math.max(vd.pendingMax, hd), this.lastPending = hd, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, hd)
      }
      closeInterval(dd, Od) {
        const md = this.summary,
          Wd = this.current;
        md.frames < Yd && (md.intervals[md.frames] = dd), md.frames++, md.maxMs = Math.max(md.maxMs, dd);
        const Fd = md.totals;
        Fd.mainMs += Wd.mainMs, Fd.renderMs += Wd.renderMs, Fd.ticks += Wd.ticks, Fd.tickMs += Wd.tickMs, Fd.rafs += Wd.rafs, dd > 50 && md.slow++, dd > bd && this.outlier(dd, Od)
      }
      outlier(dd, Od) {
        const md = Math.floor((Od - this.lastRefillMs) / pd);
        md > 0 && (this.tokens = Math.min(Td, this.tokens + md), this.lastRefillMs += md * pd), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: Od,
          intervalMs: dd,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(dd) {
        const Od = this.summary,
          md = Od.totals;
        if (0 === Od.frames) return Od.undrawn.count > 0 && (0, Xd.k)("frame", `${dd}s: no frames drawn, ${Od.undrawn.describe()}; pending max ${md.pendingMax}`), Od.undrawn.count > 0;
        const Wd = Od.intervals.subarray(0, Math.min(Od.frames, Yd)).sort(),
          Fd = [`${Od.frames} frames, median ${(0,Rd.d)((0,Rd.e)(Wd,.5))} p95 ${(0,Rd.d)((0,Rd.e)(Wd,.95))} max ${(0,Rd.d)(Od.maxMs)} ms, ${Od.slow} over 50, ${Od.shown+Od.dropped} over ${bd}`, `${md.rafs} rafs, ${Od.undrawn.describe()}`, `main ${(0,Rd.d)(md.mainMs)} ms (render ${(0,Rd.d)(md.renderMs)}, ${md.ticks} ticks ${(0,Rd.d)(md.tickMs)})`];
        return md.pendingMax >= 0 && Fd.push(`pending max ${md.pendingMax}`), this.ahead >= 0 && Fd.push(`${this.ahead} frames ahead`), Fd.push(`outliers ${Od.shown} logged, ${Od.dropped} dropped`), (0, Xd.k)("frame", `${dd}s: ${Fd.join("; ")}`), !0
      }
    }
    let Ud = null;

    function xd(dd, Od) {
      return Ud ??= new Jd, Ud.start(dd, Od), Ud
    }
  },
  35404: (dd, Od, md) => {
    function Wd(dd) {
      return `hidden ${dd.changes} changes, ${Math.round(dd.hiddenMs)} ms`
    }
    md.d(Od, {
      d: () => Fd,
      g: () => Wd
    });
    class Fd {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(dd) {
        this.changes++, document.hidden ? this.hiddenSinceMs = dd : this.hiddenSinceMs >= 0 && (this.hiddenMs += dd - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(dd) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? dd - this.hiddenSinceMs : 0)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);