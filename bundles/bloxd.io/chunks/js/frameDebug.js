export const id = 33;
export const ids = [33];
export const modules = {
  8636: (TT, oT, IT) => {
    function iT(TT, oT) {
      return 0 === TT.length ? 0 : TT[Math.min(TT.length - 1, Math.floor(oT * TT.length))]
    }
    IT.d(oT, {
      b: () => iT
    })
  },
  8627: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      FrameDebugLog: () => AT,
      OUTLIER_BURST: () => DT,
      OUTLIER_MS: () => ST,
      OUTLIER_REFILL_MS: () => LT,
      SUMMARY_MS: () => FT,
      startFrameDebug: () => hT
    });
    var iT = IT(4285),
      zT = IT(8636),
      kT = IT(2541),
      WT = IT(1077),
      XT = IT(2592);
    class BT {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = TT => {
          const oT = TT;
          this.add(oT.startTime, oT.duration, oT.blockingDuration, (0, WT.p)(oT))
        }, this.onLongTask = TT => {
          this.add(TT.startTime, TT.duration, 0, 0)
        }, null !== (0, XT.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, XT.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(TT, oT, IT, iT) {
        this.entries.set([TT, oT, IT, iT], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(TT, oT) {
        if (null === this.kind) return "long tasks n/a";
        let IT = 0,
          iT = 0,
          zT = 0,
          kT = 0;
        for (let XT = 0; XT < this.size; XT++) {
          const WT = 4 * XT,
            BT = this.entries[WT] + this.entries[WT + 1];
          BT > TT && BT <= oT + 2 && (IT++, iT += this.entries[WT + 1], zT += this.entries[WT + 2], kT += this.entries[WT + 3])
        }
        const WT = "loaf" === this.kind && IT > 0 ? ` (blocking ${zT.toFixed(0)}, script ${kT.toFixed(0)})` : "";
        return `${IT} ${this.kind} ${iT.toFixed(0)} ms${WT}`
      }
    }
    const FT = 2e4,
      ST = 250,
      DT = 10,
      LT = 6e4,
      xT = 8192;

    function cT(TT) {
      return TT.toFixed(1)
    }

    function KT(TT) {
      return TT.mainMs = 0, TT.renderMs = 0, TT.ticks = 0, TT.tickMs = 0, TT.rafs = 0, TT.pendingBefore = -1, TT.pendingMax = -1, TT.pendingAfter = -1, TT.meshes = -1, TT
    }

    function MT() {
      return KT({})
    }
    class rT {
      constructor() {
        this.intervals = new Float64Array(xT), this.totals = MT(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        KT(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class AT {
      constructor() {
        this.longTasks = new BT, this.summary = new rT, this.current = MT(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = DT, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (TT, oT, IT, zT, kT, WT, XT) => {
          this.ahead = TT.headerWord(iT.A.Pacing) & iT.P.AheadMask, this.frame(oT, IT, zT, kT, TT.headerWord(iT.A.RenderUs) / 1e3, TT.headerWord(iT.A.TicksRun), WT, TT.headerWord(iT.A.RenderPending), XT)
        }, this.jsFrame = (TT, oT, IT) => {
          this.frame(TT, oT, !0, IT, oT - TT, 0, 0, -1, -1)
        }, this.jsTick = TT => {
          this.current.mainMs += TT, this.current.ticks++, this.current.tickMs += TT
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const TT = performance.now();
          let oT = 0;
          for (const IT of this.waiting) {
            if (IT.dueMs > TT) {
              this.waiting[oT++] = IT;
              continue
            }
            const iT = [`long frame ${cT(IT.intervalMs)} ms ending at ${cT(IT.endMs)} ms: main ${cT(IT.mainMs)} (render ${cT(IT.renderMs)}, ${IT.ticks} ticks ${cT(IT.tickMs)}), outside ${cT(IT.intervalMs-IT.mainMs)}`, `${IT.rafs} rafs`];
            IT.pendingBefore >= 0 && iT.push(`pending ${IT.pendingBefore} -> ${IT.pendingAfter} (max ${IT.pendingMax})`), IT.meshes >= 0 && iT.push(`${IT.meshes} meshes landed`), iT.push(this.longTasks.describe(IT.endMs - IT.intervalMs, IT.endMs)), (0, kT.l)("frame", iT.join("; "))
          }
          this.waiting.length = oT, oT > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - TT))
        }, this.flush = () => {
          const TT = this.summary,
            oT = TT.totals;
          if (0 === TT.frames) return TT.undrawn > 0 && (0, kT.l)("frame", `${FT/1e3}s: no frames drawn, ${TT.undrawn} undrawn, pending max ${oT.pendingMax}`), void TT.reset();
          const IT = TT.intervals.subarray(0, Math.min(TT.frames, xT)).sort(),
            iT = [`${TT.frames} frames, median ${cT((0,zT.b)(IT,.5))} p95 ${cT((0,zT.b)(IT,.95))} max ${cT(TT.maxMs)} ms, ${TT.slow} over 50, ${TT.shown+TT.dropped} over ${ST}`, `${oT.rafs} rafs, ${TT.undrawn} undrawn`, `main ${cT(oT.mainMs)} ms (render ${cT(oT.renderMs)}, ${oT.ticks} ticks ${cT(oT.tickMs)})`];
          oT.pendingMax >= 0 && iT.push(`pending max ${oT.pendingMax}`), oT.meshes >= 0 && iT.push(`${oT.meshes} meshes landed`), this.ahead >= 0 && iT.push(`${this.ahead} frames ahead`), iT.push(`outliers ${TT.shown} logged, ${TT.dropped} dropped`), (0, kT.l)("frame", `${FT/1e3}s: ${iT.join("; ")}`), TT.reset()
        }, setInterval(this.flush, FT), document.addEventListener("visibilitychange", this.restart)
      }
      start(TT, oT) {
        var IT;
        this.restart(), (0, kT.l)("frame", `start: ${TT} client, ${oT}, dpr ${window.devicePixelRatio}, long tasks ${null!==(IT=this.longTasks.kind)&&void 0!==IT?IT:"n/a"}; a summary each ${FT/1e3} s in game, outliers over ${ST} ms`)
      }
      frame(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        if (!iT) return this.restart(), void(this.lastPending = XT);
        const FT = this.current;
        IT ? (this.lastDrawnStartMs >= 0 && (FT.pendingAfter = this.lastPending, FT.meshes = BT < 0 ? -1 : BT - this.lastMeshes, this.closeInterval(TT - this.lastDrawnStartMs, TT)), this.lastDrawnStartMs = TT, KT(FT).pendingBefore = this.lastPending, this.lastMeshes = BT) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, FT.mainMs += oT - TT, FT.renderMs += zT, FT.ticks += kT, FT.tickMs += WT, FT.pendingMax = Math.max(FT.pendingMax, XT), this.lastPending = XT, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, XT)
      }
      closeInterval(TT, oT) {
        const IT = this.summary,
          iT = this.current;
        IT.frames < xT && (IT.intervals[IT.frames] = TT), IT.frames++, IT.maxMs = Math.max(IT.maxMs, TT);
        const zT = IT.totals;
        zT.mainMs += iT.mainMs, zT.renderMs += iT.renderMs, zT.ticks += iT.ticks, zT.tickMs += iT.tickMs, zT.rafs += iT.rafs, zT.meshes = iT.meshes < 0 ? -1 : Math.max(0, zT.meshes) + iT.meshes, TT > 50 && IT.slow++, TT > ST && this.outlier(TT, oT)
      }
      outlier(TT, oT) {
        const IT = Math.floor((oT - this.lastRefillMs) / LT);
        IT > 0 && (this.tokens = Math.min(DT, this.tokens + IT), this.lastRefillMs += IT * LT), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: oT,
          intervalMs: TT,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let gT = null;

    function hT(TT, oT) {
      return gT ??= new AT, gT.start(TT, oT), gT
    }
  },
  4285: (TT, oT, IT) => {
    IT.d(oT, {
      $b: () => tT,
      A: () => kT,
      Ab: () => xT,
      Bb: () => mT,
      C: () => cT,
      F: () => GT,
      Fb: () => wT,
      Gb: () => jT,
      J: () => FT,
      Jb: () => HT,
      Kb: () => UT,
      N: () => KT,
      Nb: () => YT,
      P: () => BT,
      Pb: () => QT,
      Rb: () => gT,
      T: () => LT,
      Tb: () => hT,
      Ub: () => qT,
      W: () => DT,
      Yb: () => zT,
      _: () => eT,
      bb: () => uT,
      c: () => sT,
      d: () => lT,
      eb: () => vT,
      f: () => ST,
      gb: () => RT,
      hb: () => ET,
      j: () => AT,
      kb: () => nT,
      l: () => ZT,
      mb: () => OT,
      n: () => rT,
      o: () => MT,
      qb: () => aT,
      r: () => WT,
      u: () => XT,
      ub: () => fT,
      vb: () => JT,
      xb: () => CT,
      y: () => iT
    });
    const iT = 32,
      zT = 33.333333333333336,
      kT = {
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
      WT = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      XT = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      BT = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      FT = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      ST = {
        Look: 0,
        Remesh: 1
      },
      DT = 8,
      LT = 1,
      xT = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      cT = {
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
      KT = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      MT = {
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
      rT = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      AT = 4,
      gT = 4,
      hT = 65535,
      wT = {
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
      mT = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      eT = 88,
      RT = 0,
      uT = 24,
      vT = 48,
      ET = 80,
      fT = {
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
      CT = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      jT = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      JT = {
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
      UT = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      aT = 65535,
      YT = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      QT = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      OT = 2,
      HT = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      nT = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      qT = {
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
      ZT = {
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
      lT = {
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
      sT = 8,
      tT = {
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
      GT = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);