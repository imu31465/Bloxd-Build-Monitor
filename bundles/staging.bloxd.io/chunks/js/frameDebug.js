export const id = 33;
export const ids = [33];
export const modules = {
  9098: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return 0 === dd.length ? 0 : dd[Math.min(dd.length - 1, Math.floor(Jd * dd.length))]
    }

    function Nd(dd) {
      return dd.toFixed(1)
    }
    kd.d(Jd, {
      c: () => Nd,
      e: () => pd
    })
  },
  9094: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      FIRST_SUMMARIES_FOR_MS: () => Od,
      FIRST_SUMMARY_MS: () => Ld,
      FrameDebugLog: () => Bd,
      OUTLIER_BURST: () => Rd,
      OUTLIER_MS: () => ed,
      OUTLIER_REFILL_MS: () => Id,
      SUMMARY_MS: () => Qd,
      startFrameDebug: () => ad
    });
    var pd = kd(4688),
      Nd = kd(4673),
      Wd = kd(9098),
      Pd = kd(2704),
      Zd = kd(1093),
      gd = kd(2834);
    class Cd {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = dd => {
          const Jd = dd;
          this.add(Jd.startTime, Jd.duration, Jd.blockingDuration, (0, Zd.p)(Jd))
        }, this.onLongTask = dd => {
          this.add(dd.startTime, dd.duration, 0, 0)
        }, null !== (0, gd.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, gd.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(dd, Jd, kd, pd) {
        this.entries.set([dd, Jd, kd, pd], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(dd, Jd) {
        if (null === this.kind) return "long tasks n/a";
        let kd = 0,
          pd = 0,
          Nd = 0,
          Wd = 0;
        for (let Zd = 0; Zd < this.size; Zd++) {
          const Pd = 4 * Zd,
            gd = this.entries[Pd] + this.entries[Pd + 1];
          gd > dd && gd <= Jd + 2 && (kd++, pd += this.entries[Pd + 1], Nd += this.entries[Pd + 2], Wd += this.entries[Pd + 3])
        }
        const Pd = "loaf" === this.kind && kd > 0 ? ` (blocking ${Nd.toFixed(0)}, script ${Wd.toFixed(0)})` : "";
        return `${kd} ${this.kind} ${pd.toFixed(0)} ms${Pd}`
      }
    }

    function Kd(dd, Jd) {
      return Jd < 0 || dd < Jd ? dd : dd - Jd
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
        }, this.lastMs = 0, this.visibilityChanges = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
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
      visibilityChanged(dd) {
        this.visibilityChanges++, document.hidden ? this.hiddenSinceMs = dd : this.hiddenSinceMs >= 0 && (this.hiddenMs += dd - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      take(dd) {
        var Jd;
        const kd = [];
        if (!0 === (null === (Jd = this.source) || void 0 === Jd ? void 0 : Jd.call(this, this.now)) && (pd = this.now, Nd = this.before, pd.chunksReceived !== Nd.chunksReceived || pd.chunksCancelled !== Nd.chunksCancelled || pd.chunksStored !== Nd.chunksStored || pd.jobsSent !== Nd.jobsSent || pd.jobsDone !== Nd.jobsDone || pd.jobsInFlight !== Nd.jobsInFlight || pd.workersLive !== Nd.workersLive || pd.workersRetired !== Nd.workersRetired)) {
          kd.push(function(dd, Jd) {
            const kd = [`chunks +${Kd(dd.chunksReceived,Jd.chunksReceived)} got`, `+${Kd(dd.chunksCancelled,Jd.chunksCancelled)} cancelled`];
            dd.chunksStored >= 0 && kd.push(`${dd.chunksStored} stored`);
            const pd = `jobs +${Kd(dd.jobsSent,Jd.jobsSent)} sent, +${Kd(dd.jobsDone,Jd.jobsDone)} done, ${dd.jobsInFlight} in flight`;
            return `${kd.join(", ")}; ${pd}; workers ${dd.workersLive} live, ${dd.workersRetired} retired`
          }(this.now, this.before));
          const dd = this.before;
          this.before = this.now, this.now = dd
        }
        var pd, Nd;
        if (this.hiddenSinceMs >= 0 && (this.hiddenMs += dd - this.hiddenSinceMs, this.hiddenSinceMs = dd), (this.visibilityChanges > 0 || this.hiddenMs > 0) && (kd.push(`hidden ${this.visibilityChanges} changes, ${Math.round(this.hiddenMs)} ms`), this.visibilityChanges = 0, this.hiddenMs = 0), 0 === kd.length) return null;
        const Wd = `load ${Math.round((dd-this.lastMs)/1e3)}s: ${kd.join("; ")}`;
        return this.lastMs = dd, Wd
      }
    }
    class ld {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(dd, Jd, kd) {
        this.count++, "paced" === dd ? this.paced++ : "skipped" === dd && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = Jd, this.longestAhead = kd)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const dd = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${dd} other, longest ${this.longest} in ${(0,Wd.c)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const Qd = 2e4,
      Ld = 5e3,
      Od = 6e4,
      ed = 250,
      Rd = 10,
      Id = 6e4,
      Gd = 8192;

    function vd(dd) {
      return dd.mainMs = 0, dd.renderMs = 0, dd.ticks = 0, dd.tickMs = 0, dd.rafs = 0, dd.pendingBefore = -1, dd.pendingMax = -1, dd.pendingAfter = -1, dd
    }

    function xd() {
      return vd({})
    }
    class qd {
      constructor() {
        this.intervals = new Float64Array(Gd), this.totals = xd(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new ld, this.shown = 0, this.dropped = 0
      }
      reset() {
        vd(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class Bd {
      constructor() {
        this.longTasks = new Cd, this.summary = new qd, this.current = xd(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = Rd, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new od, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.visibilityChanged(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (dd, Jd, kd, Nd, Wd, Pd) => {
          this.ahead = dd.headerWord(pd.B.Pacing) & pd.X.AheadMask, this.frame(Jd, kd, Nd, Wd, dd.headerWord(pd.B.RenderUs) / 1e3, dd.headerWord(pd.B.TicksRun), Pd, dd.headerWord(pd.B.RenderPending))
        }, this.wasmPeekPaced = dd => {
          const Jd = performance.now();
          this.frame(Jd, Jd, "paced", dd, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (dd, Jd, kd) => {
          this.frame(dd, Jd, "drawn", kd, Jd - dd, 0, 0, -1)
        }, this.jsTick = dd => {
          this.current.mainMs += dd, this.current.ticks++, this.current.tickMs += dd
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const dd = performance.now();
          let Jd = 0;
          for (const kd of this.waiting) {
            if (kd.dueMs > dd) {
              this.waiting[Jd++] = kd;
              continue
            }
            const pd = [`long frame ${(0,Wd.c)(kd.intervalMs)} ms ending at ${(0,Wd.c)(kd.endMs)} ms: main ${(0,Wd.c)(kd.mainMs)} (render ${(0,Wd.c)(kd.renderMs)}, ${kd.ticks} ticks ${(0,Wd.c)(kd.tickMs)}), outside ${(0,Wd.c)(kd.intervalMs-kd.mainMs)}`, `${kd.rafs} rafs`];
            kd.pendingBefore >= 0 && pd.push(`pending ${kd.pendingBefore} -> ${kd.pendingAfter} (max ${kd.pendingMax})`), pd.push(this.longTasks.describe(kd.endMs - kd.intervalMs, kd.endMs)), (0, Pd.h)("frame", pd.join("; "))
          }
          this.waiting.length = Jd, Jd > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - dd))
        }, this.flush = () => {
          this.flushTimer = null;
          const dd = performance.now(),
            Jd = Math.round((dd - this.lastFlushMs) / 1e3);
          this.lastFlushMs = dd, this.scheduleFlush();
          if (this.logSummary(Jd) || this.inGameSinceFlush) {
            const Jd = this.loadLine.take(dd);
            null !== Jd && (0, Pd.h)("frame", Jd)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(dd, Jd) {
        var kd;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Pd.h)("frame", `start: ${dd} client, ${Jd}, dpr ${window.devicePixelRatio}, long tasks ${null!==(kd=this.longTasks.kind)&&void 0!==kd?kd:"n/a"}; a summary each ${Qd/1e3} s in game (${Ld/1e3} s for the first ${Od/1e3} s), outliers over ${ed} ms`)
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
        const dd = performance.now() - this.startedMs < Od;
        this.flushTimer = setTimeout(this.flush, dd ? Ld : Qd)
      }
      frame(dd, Jd, kd, pd, Wd, Pd, Zd, gd) {
        if (!pd) return this.restart(), void(this.lastPending = gd);
        const Cd = this.current;
        (0, Nd.b)(kd) ? (this.lastDrawnStartMs >= 0 && (Cd.pendingAfter = this.lastPending, this.closeInterval(dd - this.lastDrawnStartMs, dd)), this.lastDrawnStartMs = dd, vd(Cd).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(kd, Jd - this.lastDrawnStartMs, this.ahead), Cd.mainMs += Jd - dd, Cd.renderMs += Wd, Cd.ticks += Pd, Cd.tickMs += Zd, Cd.pendingMax = Math.max(Cd.pendingMax, gd), this.lastPending = gd, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, gd)
      }
      closeInterval(dd, Jd) {
        const kd = this.summary,
          pd = this.current;
        kd.frames < Gd && (kd.intervals[kd.frames] = dd), kd.frames++, kd.maxMs = Math.max(kd.maxMs, dd);
        const Nd = kd.totals;
        Nd.mainMs += pd.mainMs, Nd.renderMs += pd.renderMs, Nd.ticks += pd.ticks, Nd.tickMs += pd.tickMs, Nd.rafs += pd.rafs, dd > 50 && kd.slow++, dd > ed && this.outlier(dd, Jd)
      }
      outlier(dd, Jd) {
        const kd = Math.floor((Jd - this.lastRefillMs) / Id);
        kd > 0 && (this.tokens = Math.min(Rd, this.tokens + kd), this.lastRefillMs += kd * Id), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: Jd,
          intervalMs: dd,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(dd) {
        const Jd = this.summary,
          kd = Jd.totals;
        if (0 === Jd.frames) return Jd.undrawn.count > 0 && (0, Pd.h)("frame", `${dd}s: no frames drawn, ${Jd.undrawn.describe()}; pending max ${kd.pendingMax}`), Jd.undrawn.count > 0;
        const pd = Jd.intervals.subarray(0, Math.min(Jd.frames, Gd)).sort(),
          Nd = [`${Jd.frames} frames, median ${(0,Wd.c)((0,Wd.e)(pd,.5))} p95 ${(0,Wd.c)((0,Wd.e)(pd,.95))} max ${(0,Wd.c)(Jd.maxMs)} ms, ${Jd.slow} over 50, ${Jd.shown+Jd.dropped} over ${ed}`, `${kd.rafs} rafs, ${Jd.undrawn.describe()}`, `main ${(0,Wd.c)(kd.mainMs)} ms (render ${(0,Wd.c)(kd.renderMs)}, ${kd.ticks} ticks ${(0,Wd.c)(kd.tickMs)})`];
        return kd.pendingMax >= 0 && Nd.push(`pending max ${kd.pendingMax}`), this.ahead >= 0 && Nd.push(`${this.ahead} frames ahead`), Nd.push(`outliers ${Jd.shown} logged, ${Jd.dropped} dropped`), (0, Pd.h)("frame", `${dd}s: ${Nd.join("; ")}`), !0
      }
    }
    let sd = null;

    function ad(dd, Jd) {
      return sd ??= new Bd, sd.start(dd, Jd), sd
    }
  },
  4688: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Wd,
      Db: () => sd,
      Eb: () => Bd,
      F: () => ed,
      Gb: () => jd,
      Hb: () => Td,
      I: () => Vd,
      L: () => Kd,
      Lb: () => fd,
      M: () => od,
      Ob: () => Ud,
      P: () => Cd,
      Qb: () => yd,
      Sb: () => xd,
      T: () => Rd,
      Tb: () => qd,
      Vb: () => cd,
      X: () => gd,
      Yb: () => Nd,
      Z: () => Ld,
      ab: () => Qd,
      ac: () => td,
      b: () => ud,
      bb: () => ad,
      d: () => rd,
      eb: () => Fd,
      gb: () => Yd,
      h: () => ld,
      ib: () => Md,
      jb: () => md,
      kb: () => Ed,
      l: () => vd,
      o: () => hd,
      ob: () => Dd,
      p: () => Gd,
      q: () => Id,
      sb: () => nd,
      tb: () => bd,
      u: () => Pd,
      vb: () => Xd,
      w: () => Zd,
      xb: () => Sd,
      y: () => pd,
      zb: () => Od
    });
    const pd = 32,
      Nd = 33.333333333333336,
      Wd = {
        AbiVersion: 0,
        Status: 1,
        LastError: 2,
        ErrorCount: 3,
        FrameIndex: 4,
        TicksRun: 5,
        TicksDropped: 6,
        Alpha: 7,
        NetOutPtr: 8,
        NetOutLen: 9,
        WorkerOutPtr: 10,
        WorkerOutLen: 11,
        EventsPtr: 12,
        EventsLen: 13,
        ScenePtr: 14,
        SceneLen: 15,
        TickIndex: 16,
        LastErrorDetail: 17,
        RenderPending: 18,
        GpuSampled: 19,
        GpuTimed: 20,
        GpuFrameUs: 21,
        TickUs: 22,
        RenderUs: 23,
        FirstView: 24,
        ChunksCancelled: 25,
        PingSent: 26,
        NetInKept: 27,
        FrameDraw: 28,
        Pacing: 29,
        PacingLagUs: 30,
        LoadSteps: 31
      },
      Pd = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Zd = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      gd = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Cd = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Kd = 7,
      od = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      ld = {
        Look: 0,
        Remesh: 1
      },
      Qd = 8,
      Ld = 1,
      Od = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      ed = {
        KeyDown: 1,
        KeyUp: 2,
        MouseMove: 3,
        MouseDown: 4,
        MouseUp: 5,
        Wheel: 6,
        TouchStart: 7,
        TouchMove: 8,
        TouchEnd: 9,
        TouchCancel: 10,
        PointerLock: 11,
        Resize: 12,
        Focus: 13,
        Blur: 14,
        UiPrefs: 15,
        Binding: 16,
        UiCapture: 17,
        Sensitivity: 18,
        Joystick: 19,
        TouchButton: 20,
        TouchZone: 21,
        Options: 22,
        AntiCheat: 23,
        PadAction: 24,
        PadLook: 25,
        EnvPrefs: 32
      },
      Rd = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Id = {
        RawMessage: 1,
        CoreErrors: 2,
        LocalHurt: 16,
        AttackHit: 17,
        HealthChanged: 18,
        LocalPlayerBound: 19,
        ConnectionState: 20,
        ReconnectGrace: 5,
        GameCalls: 96,
        LocalTeleported: 21,
        PhysicsType: 22,
        VehicleEffect: 23,
        InputAction: 24,
        ZoomChanged: 25,
        ZoomDisabled: 26,
        SendRefused: 27,
        KeepAliveDue: 28,
        GameCamera: 29,
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        EnvLighting: 54,
        SkyImages: 64,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62,
        Images: 128,
        ModelRequests: 129,
        ModelTaken: 130,
        RenderReload: 3,
        TerrainTexturesWanted: 4
      },
      Gd = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      vd = 4,
      xd = 4,
      qd = 65535,
      Bd = {
        Open: 1,
        TooLarge: 2,
        NothingStaged: 3,
        NotPlayback: 4,
        NotOpen: 5,
        BadValue: 6,
        Crop: 7,
        NotLive: 8,
        ModuleLoad: 9,
        ModuleTrap: 10,
        Port: 11
      },
      sd = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      ad = 88,
      Md = 0,
      Fd = 24,
      Yd = 48,
      md = 80,
      bd = {
        FilePartDone: 526,
        FileDone: 527,
        Control: 528,
        Prefs: 529,
        Option: 530,
        FlyingText: 531,
        PlayerKilled: 532,
        Killfeed: 533,
        Session: 534
      },
      Sd = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      jd = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Xd = {
        RecordingStarted: 0,
        RecordingStopped: 1,
        RecordingDiscarded: 2,
        ClipSaved: 3,
        ClipEmpty: 4,
        ClippingNotOn: 5,
        Disallowed: 6,
        ClippingOn: 7,
        ClippingOff: 8,
        LimitReached: 9,
        ClipSettingsChanged: 10,
        SaveBusy: 11,
        CloseViewerFirst: 12,
        FileDiscarded: 13,
        SaveFailed: 14,
        RecordingTurnedOff: 15
      },
      fd = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      nd = 65535,
      Ud = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      yd = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Dd = 2,
      Td = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Ed = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      cd = {
        SkyTable: 600,
        SkyImagesReady: 601,
        SkyTableHeaderBytes: 8,
        SkyTableEntryBytes: 92,
        SkyImagesReadyBytes: 32,
        KindNone: 0,
        KindCustom: 1,
        KindEarth: 2,
        CubeFaces: 6,
        Failed: 0
      },
      hd = {
        Bytes: 88,
        Inclination: 0,
        Turbidity: 1,
        Luminance: 2,
        Rayleigh: 3,
        MieCoefficient: 4,
        MieDirectionalG: 5,
        Distance: 6,
        Azimuth: 7,
        Params: 8,
        SunPosition: 256,
        CameraOffsetX: 512,
        CameraOffsetY: 1024,
        CameraOffsetZ: 2048,
        Up: 4096,
        VertexTint: 8192,
        UseSunPosition: 16384,
        Dithering: 32768,
        InfiniteDistance: 65536,
        SunPositionAt: 32,
        CameraOffsetAt: 44,
        UpAt: 56,
        VertexTintAt: 68,
        PresentAt: 80,
        FlagsAt: 84
      },
      rd = {
        None: 0,
        InputOverCapacity: 1,
        InputTruncated: 2,
        InputUnknownKind: 3,
        InputNonFinite: 4,
        NetOverCapacity: 16,
        NetTruncated: 17,
        NetOversize: 18,
        NetBadKind: 19,
        NetConnUnknown: 20,
        NetConnBackwards: 21,
        WorkerOverCapacity: 32,
        WorkerTruncated: 33,
        WorkerUnknownKind: 34,
        TimeNonFinite: 48,
        TimeBackwards: 49,
        GameCallThrew: 50,
        ResumeUnconsumed: 51,
        CallLogMismatch: 52,
        TerrainTextureRefused: 53,
        TerrainTextureMissing: 54,
        ShaderPackRefused: 55,
        ReserveTooLarge: 64,
        ReserveFailed: 65,
        GrowFailed: 66,
        EventOversize: 80,
        OutputFull: 81,
        StateCorrupt: 128,
        OriginRefused: 129,
        CoreBusy: 138,
        WorldWorldgenRefused: 88,
        WorldWorldgenResultMalformed: 89,
        WorldBlockDataInvalid: 90,
        WorldNetDecode: 96,
        WorldChunkId: 97,
        WorldChunkVoxels: 98,
        WorldChunkLight: 99,
        WorldSendFailed: 100,
        WorldEditInvalid: 101,
        WorldPlayerInvalid: 102,
        WorldNoVoxels: 103,
        WorldStoreCorrupt: 224,
        WorldWorldgenTrapped: 226,
        WorldRegistryInvalid: 227,
        WorldStreamStartInvalid: 228,
        PresentationRigRefused: 160,
        PresentationSceneRefused: 161,
        PresentationModelMissing: 162,
        PresentationAnimDecode: 163,
        PresentationSettingDecode: 164,
        PresentationParticleDecode: 165,
        PresentationNodeUnknown: 166,
        PresentationStateFull: 167,
        PresentationBindingUnfit: 168,
        PresentationClipUnplayable: 169,
        PresentationObjectOpsDropped: 170,
        PresentationImageFailed: 171,
        PresentationDracoFailure: 144,
        NetNotGameRoom: 184,
        NetEnvelope: 185,
        NetMessageDecode: 186,
        NetNoHandshake: 187,
        NetRejoin: 188,
        NetHandshake: 189,
        NetSchemaDesync: 136,
        ReplicationUnknownType: 192,
        ReplicationBadId: 193,
        ReplicationFull: 194,
        ReplicationNamesFull: 195,
        ReplicationRosterFull: 196,
        ReplicationEffectsFull: 197,
        ReplicationNoDecoder: 198,
        ReplicationResetFailed: 137,
        OptionsMalformed: 56,
        OptionsRecordBad: 57,
        ItemsDeadlinesFull: 73,
        ItemsThrowablesFull: 75,
        ItemsSendLatchFull: 76,
        ItemsBadSlotJson: 77,
        ItemsUnknownItem: 78,
        ItemsMessageDecode: 79,
        ItemsRecipeBad: 82,
        ItemsSendFailed: 83,
        ItemsMarkerLost: 84,
        ItemsCallStackFull: 85,
        ItemsUiDropsFull: 272,
        ItemsReplayRefused: 273,
        ApiCmdUnknownKind: 67,
        ApiCmdBadLength: 68,
        ApiCmdTruncated: 69,
        ApiQueryBadArgs: 70,
        ApiScratchTooLarge: 71,
        AudioUnknownSound: 86,
        JobsRefused: 104,
        JobsResultMalformed: 105,
        JobsUnknownJob: 106,
        JobsWorkerIndexInvalid: 107,
        JobsWorkerOutFull: 108,
        JobsTablesRefused: 109,
        JobsVisInputRefused: 110,
        JobsKeyInvalid: 111,
        JobsTrapped: 288,
        JobsTrapGaveUp: 289,
        JobsTablesRetired: 290,
        JobsHeapGaveUp: 291,
        JobsTablesTrapped: 232,
        JobsWorkerTablesRefused: 233,
        EffectsUnknownPreset: 256,
        EffectsParticleCmdBad: 257,
        EffectsParticleKeysFull: 258,
        EffectsUnknownAnchor: 259,
        EffectsGrowingFull: 260,
        EffectsMessageDecode: 261,
        EnvUnknownSky: 264,
        EnvSkyTableBad: 265,
        EnvSkyRowsRefused: 266,
        EnvSkyReleasesLost: 267,
        EnvOverlayRowsRefused: 268,
        SendsSendRefused: 58,
        SendsSendMalformed: 59,
        SendsSendQueueFull: 60,
        SendsAntiCheatRecordBad: 61,
        SendsSendFailed: 62,
        RenderDeviceLost: 176,
        RenderSceneRowNotDrawn: 177,
        RenderChunkMeshNotDrawn: 178,
        RenderShaderPackNotRun: 179,
        RenderInternal: 180,
        RenderCaveCullingOff: 181,
        RenderGlErrorAfterRestore: 182,
        RenderSerialLinks: 183,
        RenderOutOfMemory: 200,
        RenderValidation: 201,
        RenderSurfaceUnusable: 202,
        RenderPipelineFailed: 203,
        RenderStateCorrupt: 204,
        RenderDeviceUnrecoverable: 205,
        PlayerMessageDecode: 112,
        PlayerMovementFailed: 113,
        PlayerPhysicsFailed: 114,
        PlayerConfirmQueueFull: 115,
        PlayerSendFailed: 116,
        PlayerBadPhysicsState: 117,
        PlayerBadOverride: 118,
        PlayerNonFinitePosition: 119,
        PlayerEventsFull: 120,
        PlayerMultiplierSetDropped: 121,
        CameraNonFinite: 126,
        CameraCmdBad: 127,
        CameraScriptedPoseRefused: 296,
        InputBadKey: 122,
        InputBadAction: 123,
        InputBadTouch: 124,
        InputEdgesFull: 125,
        ReplayDrops: 87,
        ReplayRecorderDrops: 304
      },
      ud = 8,
      td = {
        GameCodeMessage: 4,
        NewOtherEntitySettings: 23,
        NewClientOptions: 37,
        Chat: 64,
        UiRequestPopup: 8,
        TaskProgress: 9,
        CustomKillfeed: 15,
        TopRightHelper: 24,
        NewUiRequest: 51,
        PlayerKilled: 61,
        OverShopInfo: 43,
        ShowShopTutorial: 76,
        SetCookie: 0,
        LeaveValues: 85,
        CustomAnalyticsEvent: 31,
        ProgressionEvent: 19,
        ResourceEvent: 22,
        LeaderboardResponse: 30,
        ResumeComplete: 105,
        ProgressBarUpdate: 33,
        RemoveMiddleScreenBar: 90,
        WorldVariation: 5,
        EditItemCraftingRecipes: 78
      },
      Vd = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4680: (dd, Jd, kd) => {
    kd.d(Jd, {
      $b: () => xd,
      A: () => Pd,
      Ab: () => JJ,
      B: () => Sd,
      Bc: () => pd.ib,
      Bd: () => pd.Tb,
      C: () => LJ,
      Cc: () => pd.jb,
      Eb: () => pJ,
      F: () => wd,
      Fc: () => pd.sb,
      Fd: () => pd.Yb,
      G: () => pd.d,
      Gd: () => Wd,
      Hc: () => OJ,
      Ib: () => pd.M,
      Id: () => ed,
      J: () => Cd,
      Kc: () => oJ,
      L: () => pd.h,
      Lb: () => Nd.g,
      Ld: () => CJ,
      Md: () => Dd,
      Nb: () => sd,
      Nc: () => WJ,
      O: () => dJ,
      Pd: () => Ed,
      Qc: () => pd.tb,
      Rb: () => Ud,
      S: () => pd.l,
      Sd: () => yd,
      U: () => zd,
      Uc: () => pd.vb,
      Vb: () => md,
      Wc: () => pd.xb,
      Wd: () => rd,
      X: () => pd.q,
      Xb: () => Fd,
      Zb: () => pd.T,
      _: () => pd.u,
      _b: () => bd,
      _c: () => Ad,
      ab: () => pd.w,
      b: () => kJ,
      bd: () => pd.Db,
      be: () => cd,
      c: () => Od,
      cc: () => ZJ,
      db: () => od,
      de: () => td,
      ed: () => pd.Eb,
      fe: () => ud,
      g: () => Ld,
      gb: () => Id,
      gc: () => Gd,
      ge: () => gJ,
      h: () => KJ,
      ib: () => pd.y,
      ic: () => lJ,
      id: () => pd.Gb,
      ie: () => eJ,
      j: () => ad,
      jb: () => pd.B,
      ke: () => vd,
      lc: () => Nd.l,
      ld: () => pd.Lb,
      m: () => Bd,
      nb: () => Td,
      ne: () => Vd,
      oe: () => fd,
      pc: () => Rd,
      pd: () => pd.Ob,
      q: () => pd.b,
      qe: () => Xd,
      rb: () => PJ,
      rc: () => NJ,
      sd: () => pd.Qb,
      tb: () => Kd,
      td: () => Md,
      te: () => jd,
      u: () => QJ,
      ub: () => pd.F,
      uc: () => pd.bb,
      vb: () => hd,
      ve: () => gd,
      w: () => Yd,
      xb: () => Hd,
      xc: () => pd.eb,
      xd: () => pd.Sb,
      xe: () => nd,
      yb: () => pd.L,
      ye: () => RJ,
      zc: () => pd.gb,
      ze: () => Qd
    });
    var pd = kd(4688),
      Nd = kd(2337);
    const Wd = Math.round(1e3 / pd.Yb),
      Pd = 4,
      Zd = 2;

    function gd() {
      return crypto.getRandomValues(new Uint32Array(Zd))
    }
    const Cd = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Kd = 16,
      od = {
        Draws: 1,
        NetAll: 2
      },
      ld = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Qd(dd) {
      return (dd.nametagsHidden ? qd.NametagsHidden : 0) | (dd.crouchToggle ? qd.CrouchToggle : 0) | (dd.bhopDisabled ? qd.BhopDisabled : 0) | (dd.disableBobbing ? qd.DisableBobbing : 0) | (dd.ezTowering ? qd.EzTowering : 0) | (dd.ezBridging ? qd.EzBridging : 0) | (dd.showChunkBorders ? qd.ShowChunkBorders : 0)
    }
    const Ld = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Od = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      ed = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Rd = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Id = 5,
      Gd = 4294967295;

    function vd(dd) {
      return (dd.showFog ? ld.ShowFog : 0) | (dd.lighting ? ld.Lighting : 0) | (dd.chunkFade ? ld.ChunkFade : 0)
    }
    const xd = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      qd = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Bd = {
        Release: 1,
        KeepTouches: 2
      },
      sd = {
        Point: 1,
        Stamped: 2
      },
      ad = {
        Add: 1,
        Clear: 2
      },
      Md = 1,
      Fd = 8,
      Yd = 16777215,
      md = 4,
      bd = {
        Resume: 1
      },
      Sd = {
        Held: 1
      };

    function jd(dd, Jd) {
      return (dd | Jd << 8) >>> 0
    }

    function Xd(dd) {
      return 255 & dd
    }

    function fd(dd) {
      return dd >>> 8
    }

    function nd(dd) {
      return dd + 3 & -4
    }
    const Ud = 16777216,
      yd = 20;
    const Dd = 8,
      Td = 8,
      Ed = 16777216,
      cd = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hd = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      rd = 16,
      ud = {
        Lost: 0,
        Gone: 1
      },
      td = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Vd(dd) {
      return dd === td.WorldgenSeed || dd === td.Generate
    }
    const zd = 4,
      Hd = 99,
      wd = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Ad = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      dJ = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      JJ = 12,
      kJ = 16,
      pJ = 4,
      NJ = 12,
      WJ = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      PJ = 4,
      ZJ = 8,
      gJ = 8,
      CJ = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      KJ = {
        Crit: 1,
        HitSelf: 2
      },
      oJ = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      lJ = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      QJ = 12,
      LJ = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      OJ = 67108864;

    function eJ(dd) {
      for (const [Jd, kd] of Object.entries(pd.d))
        if (kd === dd) return Jd;
      return `Unknown${dd}`
    }

    function RJ(dd) {
      return {
        status: dd[pd.B.Status],
        lastError: dd[pd.B.LastError],
        lastErrorDetail: dd[pd.B.LastErrorDetail],
        errorCount: dd[pd.B.ErrorCount],
        frameIndex: dd[pd.B.FrameIndex],
        tickIndex: dd[pd.B.TickIndex],
        renderPending: dd[pd.B.RenderPending],
        firstView: dd[pd.B.FirstView],
        chunksCancelled: dd[pd.B.ChunksCancelled]
      }
    }
  },
  4673: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      f: () => Wd,
      h: () => Nd
    });
    var pd = kd(4680);

    function Nd(dd) {
      return "none" !== dd
    }

    function Wd(dd, Jd) {
      if (!dd) return "none";
      switch (Jd) {
        case pd.ab.Drawn:
          return "drawn";
        case pd.ab.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Pd(dd) {
      return "drawn" === dd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);