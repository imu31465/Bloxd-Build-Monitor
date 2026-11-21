export const id = 33;
export const ids = [33];
export const modules = {
  8968: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return 0 === QQ.length ? 0 : QQ[Math.min(QQ.length - 1, Math.floor(FQ * QQ.length))]
    }

    function qQ(QQ) {
      return QQ.toFixed(1)
    }
    wQ.d(FQ, {
      c: () => qQ,
      g: () => LQ
    })
  },
  8960: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      FIRST_SUMMARIES_FOR_MS: () => AQ,
      FIRST_SUMMARY_MS: () => xQ,
      FrameDebugLog: () => SQ,
      OUTLIER_BURST: () => eQ,
      OUTLIER_MS: () => tQ,
      OUTLIER_REFILL_MS: () => MQ,
      SUMMARY_MS: () => YQ,
      startFrameDebug: () => WQ
    });
    var LQ = wQ(4638),
      qQ = wQ(4626),
      oQ = wQ(8968),
      DQ = wQ(2753),
      kQ = wQ(1095),
      vQ = wQ(2883);
    class mQ {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = QQ => {
          const FQ = QQ;
          this.add(FQ.startTime, FQ.duration, FQ.blockingDuration, (0, kQ.o)(FQ))
        }, this.onLongTask = QQ => {
          this.add(QQ.startTime, QQ.duration, 0, 0)
        }, null !== (0, vQ.c)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, vQ.c)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(QQ, FQ, wQ, LQ) {
        this.entries.set([QQ, FQ, wQ, LQ], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(QQ, FQ) {
        if (null === this.kind) return "long tasks n/a";
        let wQ = 0,
          LQ = 0,
          qQ = 0,
          oQ = 0;
        for (let kQ = 0; kQ < this.size; kQ++) {
          const DQ = 4 * kQ,
            vQ = this.entries[DQ] + this.entries[DQ + 1];
          vQ > QQ && vQ <= FQ + 2 && (wQ++, LQ += this.entries[DQ + 1], qQ += this.entries[DQ + 2], oQ += this.entries[DQ + 3])
        }
        const DQ = "loaf" === this.kind && wQ > 0 ? ` (blocking ${qQ.toFixed(0)}, script ${oQ.toFixed(0)})` : "";
        return `${wQ} ${this.kind} ${LQ.toFixed(0)} ms${DQ}`
      }
    }

    function uQ(QQ, FQ) {
      return FQ < 0 || QQ < FQ ? QQ : QQ - FQ
    }
    class HQ {
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
      visibilityChanged(QQ) {
        this.visibilityChanges++, document.hidden ? this.hiddenSinceMs = QQ : this.hiddenSinceMs >= 0 && (this.hiddenMs += QQ - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      take(QQ) {
        var FQ;
        const wQ = [];
        if (!0 === (null === (FQ = this.source) || void 0 === FQ ? void 0 : FQ.call(this, this.now)) && (LQ = this.now, qQ = this.before, LQ.chunksReceived !== qQ.chunksReceived || LQ.chunksCancelled !== qQ.chunksCancelled || LQ.chunksStored !== qQ.chunksStored || LQ.jobsSent !== qQ.jobsSent || LQ.jobsDone !== qQ.jobsDone || LQ.jobsInFlight !== qQ.jobsInFlight || LQ.workersLive !== qQ.workersLive || LQ.workersRetired !== qQ.workersRetired)) {
          wQ.push(function(QQ, FQ) {
            const wQ = [`chunks +${uQ(QQ.chunksReceived,FQ.chunksReceived)} got`, `+${uQ(QQ.chunksCancelled,FQ.chunksCancelled)} cancelled`];
            QQ.chunksStored >= 0 && wQ.push(`${QQ.chunksStored} stored`);
            const LQ = `jobs +${uQ(QQ.jobsSent,FQ.jobsSent)} sent, +${uQ(QQ.jobsDone,FQ.jobsDone)} done, ${QQ.jobsInFlight} in flight`;
            return `${wQ.join(", ")}; ${LQ}; workers ${QQ.workersLive} live, ${QQ.workersRetired} retired`
          }(this.now, this.before));
          const QQ = this.before;
          this.before = this.now, this.now = QQ
        }
        var LQ, qQ;
        if (this.hiddenSinceMs >= 0 && (this.hiddenMs += QQ - this.hiddenSinceMs, this.hiddenSinceMs = QQ), (this.visibilityChanges > 0 || this.hiddenMs > 0) && (wQ.push(`hidden ${this.visibilityChanges} changes, ${Math.round(this.hiddenMs)} ms`), this.visibilityChanges = 0, this.hiddenMs = 0), 0 === wQ.length) return null;
        const oQ = `load ${Math.round((QQ-this.lastMs)/1e3)}s: ${wQ.join("; ")}`;
        return this.lastMs = QQ, oQ
      }
    }
    class bQ {
      constructor() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.run = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
      drawn() {
        this.run = 0
      }
      add(QQ, FQ, wQ) {
        this.count++, "paced" === QQ ? this.paced++ : "skipped" === QQ && this.skipped++, this.run++, this.run > this.longest && (this.longest = this.run, this.longestMs = FQ, this.longestAhead = wQ)
      }
      describe() {
        if (0 === this.count) return "0 undrawn";
        const QQ = this.count - this.paced - this.skipped;
        return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${QQ} other, longest ${this.longest} in ${(0,oQ.c)(this.longestMs)} ms at ${this.longestAhead} ahead`
      }
      reset() {
        this.count = 0, this.paced = 0, this.skipped = 0, this.longest = 0, this.longestMs = 0, this.longestAhead = -1
      }
    }
    const YQ = 2e4,
      xQ = 5e3,
      AQ = 6e4,
      tQ = 250,
      eQ = 10,
      MQ = 6e4,
      GQ = 8192;

    function pQ(QQ) {
      return QQ.mainMs = 0, QQ.renderMs = 0, QQ.ticks = 0, QQ.tickMs = 0, QQ.rafs = 0, QQ.pendingBefore = -1, QQ.pendingMax = -1, QQ.pendingAfter = -1, QQ
    }

    function cQ() {
      return pQ({})
    }
    class CQ {
      constructor() {
        this.intervals = new Float64Array(GQ), this.totals = cQ(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new bQ, this.shown = 0, this.dropped = 0
      }
      reset() {
        pQ(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
      }
    }
    class SQ {
      constructor() {
        this.longTasks = new mQ, this.summary = new CQ, this.current = cQ(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = eQ, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.startedMs = 0, this.lastFlushMs = 0, this.loadLine = new HQ, this.inGameSinceFlush = !1, this.visibilityChanged = () => {
          this.restart(), this.loadLine.visibilityChanged(performance.now())
        }, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (QQ, FQ, wQ, qQ, oQ, DQ) => {
          this.ahead = QQ.headerWord(LQ.F.Pacing) & LQ.ab.AheadMask, this.frame(FQ, wQ, qQ, oQ, QQ.headerWord(LQ.F.RenderUs) / 1e3, QQ.headerWord(LQ.F.TicksRun), DQ, QQ.headerWord(LQ.F.RenderPending))
        }, this.wasmPeekPaced = QQ => {
          const FQ = performance.now();
          this.frame(FQ, FQ, "paced", QQ, 0, 0, 0, this.lastPending)
        }, this.jsFrame = (QQ, FQ, wQ) => {
          this.frame(QQ, FQ, "drawn", wQ, FQ - QQ, 0, 0, -1)
        }, this.jsTick = QQ => {
          this.current.mainMs += QQ, this.current.ticks++, this.current.tickMs += QQ
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const QQ = performance.now();
          let FQ = 0;
          for (const wQ of this.waiting) {
            if (wQ.dueMs > QQ) {
              this.waiting[FQ++] = wQ;
              continue
            }
            const LQ = [`long frame ${(0,oQ.c)(wQ.intervalMs)} ms ending at ${(0,oQ.c)(wQ.endMs)} ms: main ${(0,oQ.c)(wQ.mainMs)} (render ${(0,oQ.c)(wQ.renderMs)}, ${wQ.ticks} ticks ${(0,oQ.c)(wQ.tickMs)}), outside ${(0,oQ.c)(wQ.intervalMs-wQ.mainMs)}`, `${wQ.rafs} rafs`];
            wQ.pendingBefore >= 0 && LQ.push(`pending ${wQ.pendingBefore} -> ${wQ.pendingAfter} (max ${wQ.pendingMax})`), LQ.push(this.longTasks.describe(wQ.endMs - wQ.intervalMs, wQ.endMs)), (0, DQ.m)("frame", LQ.join("; "))
          }
          this.waiting.length = FQ, FQ > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - QQ))
        }, this.flush = () => {
          this.flushTimer = null;
          const QQ = performance.now(),
            FQ = Math.round((QQ - this.lastFlushMs) / 1e3);
          this.lastFlushMs = QQ, this.scheduleFlush();
          if (this.logSummary(FQ) || this.inGameSinceFlush) {
            const FQ = this.loadLine.take(QQ);
            null !== FQ && (0, DQ.m)("frame", FQ)
          }
          this.inGameSinceFlush = !1, this.summary.reset()
        }, document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      start(QQ, FQ) {
        var wQ;
        this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, DQ.m)("frame", `start: ${QQ} client, ${FQ}, dpr ${window.devicePixelRatio}, long tasks ${null!==(wQ=this.longTasks.kind)&&void 0!==wQ?wQ:"n/a"}; a summary each ${YQ/1e3} s in game (${xQ/1e3} s for the first ${AQ/1e3} s), outliers over ${tQ} ms`)
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
        const QQ = performance.now() - this.startedMs < AQ;
        this.flushTimer = setTimeout(this.flush, QQ ? xQ : YQ)
      }
      frame(QQ, FQ, wQ, LQ, oQ, DQ, kQ, vQ) {
        if (!LQ) return this.restart(), void(this.lastPending = vQ);
        const mQ = this.current;
        (0, qQ.c)(wQ) ? (this.lastDrawnStartMs >= 0 && (mQ.pendingAfter = this.lastPending, this.closeInterval(QQ - this.lastDrawnStartMs, QQ)), this.lastDrawnStartMs = QQ, pQ(mQ).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this.summary.undrawn.add(wQ, FQ - this.lastDrawnStartMs, this.ahead), mQ.mainMs += FQ - QQ, mQ.renderMs += oQ, mQ.ticks += DQ, mQ.tickMs += kQ, mQ.pendingMax = Math.max(mQ.pendingMax, vQ), this.lastPending = vQ, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, vQ)
      }
      closeInterval(QQ, FQ) {
        const wQ = this.summary,
          LQ = this.current;
        wQ.frames < GQ && (wQ.intervals[wQ.frames] = QQ), wQ.frames++, wQ.maxMs = Math.max(wQ.maxMs, QQ);
        const qQ = wQ.totals;
        qQ.mainMs += LQ.mainMs, qQ.renderMs += LQ.renderMs, qQ.ticks += LQ.ticks, qQ.tickMs += LQ.tickMs, qQ.rafs += LQ.rafs, QQ > 50 && wQ.slow++, QQ > tQ && this.outlier(QQ, FQ)
      }
      outlier(QQ, FQ) {
        const wQ = Math.floor((FQ - this.lastRefillMs) / MQ);
        wQ > 0 && (this.tokens = Math.min(eQ, this.tokens + wQ), this.lastRefillMs += wQ * MQ), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: FQ,
          intervalMs: QQ,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
      logSummary(QQ) {
        const FQ = this.summary,
          wQ = FQ.totals;
        if (0 === FQ.frames) return FQ.undrawn.count > 0 && (0, DQ.m)("frame", `${QQ}s: no frames drawn, ${FQ.undrawn.describe()}; pending max ${wQ.pendingMax}`), FQ.undrawn.count > 0;
        const LQ = FQ.intervals.subarray(0, Math.min(FQ.frames, GQ)).sort(),
          qQ = [`${FQ.frames} frames, median ${(0,oQ.c)((0,oQ.g)(LQ,.5))} p95 ${(0,oQ.c)((0,oQ.g)(LQ,.95))} max ${(0,oQ.c)(FQ.maxMs)} ms, ${FQ.slow} over 50, ${FQ.shown+FQ.dropped} over ${tQ}`, `${wQ.rafs} rafs, ${FQ.undrawn.describe()}`, `main ${(0,oQ.c)(wQ.mainMs)} ms (render ${(0,oQ.c)(wQ.renderMs)}, ${wQ.ticks} ticks ${(0,oQ.c)(wQ.tickMs)})`];
        return wQ.pendingMax >= 0 && qQ.push(`pending max ${wQ.pendingMax}`), this.ahead >= 0 && qQ.push(`${this.ahead} frames ahead`), qQ.push(`outliers ${FQ.shown} logged, ${FQ.dropped} dropped`), (0, DQ.m)("frame", `${QQ}s: ${qQ.join("; ")}`), !0
      }
    }
    let iQ = null;

    function WQ(QQ, FQ) {
      return iQ ??= new SQ, iQ.start(QQ, FQ), iQ
    }
  },
  4638: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      Ab: () => zQ,
      B: () => LQ,
      Eb: () => IQ,
      F: () => oQ,
      I: () => tQ,
      Ib: () => TQ,
      L: () => gQ,
      Lb: () => UQ,
      Nb: () => AQ,
      O: () => uQ,
      Q: () => HQ,
      Qb: () => iQ,
      U: () => mQ,
      Ub: () => SQ,
      Vb: () => NQ,
      Y: () => eQ,
      Zb: () => XQ,
      ab: () => vQ,
      bc: () => KQ,
      cc: () => lQ,
      db: () => xQ,
      dc: () => jQ,
      e: () => EQ,
      eb: () => YQ,
      fc: () => cQ,
      h: () => JQ,
      hb: () => WQ,
      i: () => bQ,
      jc: () => CQ,
      l: () => pQ,
      lb: () => OQ,
      mc: () => VQ,
      n: () => hQ,
      nc: () => qQ,
      ob: () => sQ,
      pb: () => RQ,
      qb: () => rQ,
      r: () => GQ,
      rc: () => nQ,
      ub: () => fQ,
      v: () => MQ,
      wb: () => aQ,
      x: () => DQ,
      z: () => kQ
    });
    const LQ = 32,
      qQ = 33.333333333333336,
      oQ = {
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
      DQ = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      kQ = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      vQ = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      mQ = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      uQ = 7,
      HQ = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      bQ = {
        Look: 0,
        Remesh: 1
      },
      YQ = 8,
      xQ = 1,
      AQ = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      tQ = {
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
      eQ = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      MQ = {
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
      GQ = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      pQ = 4,
      cQ = 4,
      CQ = 65535,
      SQ = {
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
      iQ = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      WQ = 88,
      RQ = 0,
      OQ = 24,
      sQ = 48,
      rQ = 80,
      IQ = {
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
      UQ = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      NQ = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      TQ = {
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
      KQ = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      zQ = 65535,
      lQ = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      jQ = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      aQ = 2,
      XQ = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      fQ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      VQ = {
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
      hQ = {
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
      JQ = {
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
      EQ = 8,
      nQ = {
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
      gQ = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4632: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      $: () => XQ,
      $b: () => qQ.k,
      $c: () => LQ.fc,
      Ab: () => rQ,
      Ac: () => LQ.Eb,
      Ad: () => kF,
      B: () => yQ,
      Cc: () => LQ.Ib,
      D: () => LQ.h,
      Db: () => OQ,
      Dd: () => AF,
      G: () => mQ,
      Gc: () => LQ.Lb,
      H: () => LQ.i,
      Hb: () => LQ.Y,
      Hd: () => pQ,
      I: () => dQ,
      Ic: () => BQ,
      J: () => LQ.l,
      Kc: () => LQ.Qb,
      Kd: () => gQ,
      L: () => PQ,
      Lb: () => IQ,
      Ld: () => KQ,
      O: () => LQ.v,
      Ob: () => cQ,
      Oc: () => LQ.Ub,
      Pc: () => LQ.Vb,
      Pd: () => TQ,
      Q: () => LQ.x,
      Qc: () => LQ.bc,
      Qd: () => NQ,
      R: () => LQ.z,
      Rb: () => DF,
      S: () => HQ,
      Sc: () => LQ.cc,
      T: () => MQ,
      U: () => LQ.B,
      Uc: () => LQ.dc,
      Ud: () => vQ,
      Vb: () => GQ,
      Xc: () => RQ,
      Y: () => LQ.F,
      Yd: () => zQ,
      Zb: () => HF,
      Zd: () => tF,
      ab: () => oF,
      ad: () => LQ.jc,
      ae: () => YQ,
      b: () => FF,
      bb: () => uQ,
      bd: () => LQ.nc,
      c: () => AQ,
      cc: () => eQ,
      cd: () => oQ,
      d: () => xQ,
      dc: () => LF,
      e: () => mF,
      ed: () => tQ,
      fb: () => LQ.I,
      fc: () => LQ.hb,
      gd: () => vF,
      h: () => WQ,
      hb: () => hQ,
      hc: () => LQ.lb,
      hd: () => aQ,
      ib: () => ZQ,
      id: () => fQ,
      jb: () => LQ.O,
      jc: () => LQ.ob,
      jd: () => jQ,
      kb: () => QF,
      l: () => SQ,
      m: () => LQ.e,
      mc: () => LQ.pb,
      md: () => JQ,
      n: () => bF,
      nb: () => wF,
      oc: () => LQ.qb,
      pb: () => LQ.Q,
      q: () => sQ,
      qd: () => VQ,
      rb: () => qQ.g,
      sb: () => iQ,
      sc: () => LQ.Ab,
      t: () => DQ,
      tc: () => xF,
      td: () => nQ,
      v: () => UQ,
      vc: () => uF,
      wb: () => lQ,
      wd: () => EQ,
      xc: () => qF,
      z: () => YF
    });
    var LQ = wQ(4638),
      qQ = wQ(2313);
    const oQ = Math.round(1e3 / LQ.nc),
      DQ = 4,
      kQ = 2;

    function vQ() {
      return crypto.getRandomValues(new Uint32Array(kQ))
    }
    const mQ = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      uQ = 16,
      HQ = {
        Draws: 1,
        NetAll: 2
      },
      bQ = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function YQ(QQ) {
      return (QQ.nametagsHidden ? CQ.NametagsHidden : 0) | (QQ.crouchToggle ? CQ.CrouchToggle : 0) | (QQ.bhopDisabled ? CQ.BhopDisabled : 0) | (QQ.disableBobbing ? CQ.DisableBobbing : 0) | (QQ.ezTowering ? CQ.EzTowering : 0) | (QQ.ezBridging ? CQ.EzBridging : 0) | (QQ.showChunkBorders ? CQ.ShowChunkBorders : 0)
    }
    const xQ = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      AQ = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      tQ = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      eQ = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      MQ = 5,
      GQ = 4294967295;

    function pQ(QQ) {
      return (QQ.showFog ? bQ.ShowFog : 0) | (QQ.lighting ? bQ.Lighting : 0) | (QQ.chunkFade ? bQ.ChunkFade : 0)
    }
    const cQ = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      CQ = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      SQ = {
        Release: 1,
        KeepTouches: 2
      },
      iQ = {
        Point: 1,
        Stamped: 2
      },
      WQ = {
        Add: 1,
        Clear: 2
      },
      RQ = 1,
      OQ = 8,
      sQ = 16777215,
      rQ = 4,
      IQ = {
        Resume: 1
      },
      UQ = {
        Held: 1
      };

    function NQ(QQ, FQ) {
      return (QQ | FQ << 8) >>> 0
    }

    function TQ(QQ) {
      return 255 & QQ
    }

    function KQ(QQ) {
      return QQ >>> 8
    }

    function zQ(QQ) {
      return QQ + 3 & -4
    }
    const lQ = 16777216,
      jQ = 20;
    const aQ = 8,
      XQ = 8,
      fQ = 16777216,
      VQ = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hQ = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      JQ = 16,
      EQ = {
        Lost: 0,
        Gone: 1
      },
      nQ = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function gQ(QQ) {
      return QQ === nQ.WorldgenSeed || QQ === nQ.Generate
    }
    const PQ = 4,
      ZQ = 99,
      yQ = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      BQ = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      dQ = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      QF = 12,
      FF = 16,
      wF = 4,
      LF = 12,
      qF = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      oF = 4,
      DF = 8,
      kF = 8,
      vF = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      mF = {
        Crit: 1,
        HitSelf: 2
      },
      uF = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      HF = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      bF = 12,
      YF = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      xF = 67108864;

    function AF(QQ) {
      for (const [FQ, wQ] of Object.entries(LQ.h))
        if (wQ === QQ) return FQ;
      return `Unknown${QQ}`
    }

    function tF(QQ) {
      return {
        status: QQ[LQ.F.Status],
        lastError: QQ[LQ.F.LastError],
        lastErrorDetail: QQ[LQ.F.LastErrorDetail],
        errorCount: QQ[LQ.F.ErrorCount],
        frameIndex: QQ[LQ.F.FrameIndex],
        tickIndex: QQ[LQ.F.TickIndex],
        renderPending: QQ[LQ.F.RenderPending],
        firstView: QQ[LQ.F.FirstView],
        chunksCancelled: QQ[LQ.F.ChunksCancelled]
      }
    }
  },
  4626: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      e: () => oQ,
      h: () => qQ
    });
    var LQ = wQ(4632);

    function qQ(QQ) {
      return "none" !== QQ
    }

    function oQ(QQ, FQ) {
      if (!QQ) return "none";
      switch (FQ) {
        case LQ.R.Drawn:
          return "drawn";
        case LQ.R.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function DQ(QQ) {
      return "drawn" === QQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);