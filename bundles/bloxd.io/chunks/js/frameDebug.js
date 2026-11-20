export const id = 33;
export const ids = [33];
export const modules = {
  8861: (UU, RU, gU) => {
    function tU(UU, RU) {
      return 0 === UU.length ? 0 : UU[Math.min(UU.length - 1, Math.floor(RU * UU.length))]
    }
    gU.d(RU, {
      d: () => tU
    })
  },
  8853: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      FrameDebugLog: () => WU,
      OUTLIER_BURST: () => GU,
      OUTLIER_MS: () => cU,
      OUTLIER_REFILL_MS: () => jU,
      SUMMARY_MS: () => KU,
      startFrameDebug: () => xU
    });
    var tU = gU(4456),
      pU = gU(8861),
      EU = gU(2624),
      PU = gU(1074),
      TU = gU(2672);
    class qU {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = UU => {
          const RU = UU;
          this.add(RU.startTime, RU.duration, RU.blockingDuration, (0, PU.k)(RU))
        }, this.onLongTask = UU => {
          this.add(UU.startTime, UU.duration, 0, 0)
        }, null !== (0, TU.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, TU.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(UU, RU, gU, tU) {
        this.entries.set([UU, RU, gU, tU], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(UU, RU) {
        if (null === this.kind) return "long tasks n/a";
        let gU = 0,
          tU = 0,
          pU = 0,
          EU = 0;
        for (let TU = 0; TU < this.size; TU++) {
          const PU = 4 * TU,
            qU = this.entries[PU] + this.entries[PU + 1];
          qU > UU && qU <= RU + 2 && (gU++, tU += this.entries[PU + 1], pU += this.entries[PU + 2], EU += this.entries[PU + 3])
        }
        const PU = "loaf" === this.kind && gU > 0 ? ` (blocking ${pU.toFixed(0)}, script ${EU.toFixed(0)})` : "";
        return `${gU} ${this.kind} ${tU.toFixed(0)} ms${PU}`
      }
    }
    const KU = 2e4,
      cU = 250,
      GU = 10,
      jU = 6e4,
      uU = 8192;

    function CU(UU) {
      return UU.toFixed(1)
    }

    function hU(UU) {
      return UU.mainMs = 0, UU.renderMs = 0, UU.ticks = 0, UU.tickMs = 0, UU.rafs = 0, UU.pendingBefore = -1, UU.pendingMax = -1, UU.pendingAfter = -1, UU.meshes = -1, UU
    }

    function QU() {
      return hU({})
    }
    class eU {
      constructor() {
        this.intervals = new Float64Array(uU), this.totals = QU(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        hU(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class WU {
      constructor() {
        this.longTasks = new qU, this.summary = new eU, this.current = QU(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = GU, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (UU, RU, gU, pU, EU, PU, TU) => {
          this.ahead = UU.headerWord(tU.A.Pacing) & tU.L.AheadMask, this.frame(RU, gU, pU, EU, UU.headerWord(tU.A.RenderUs) / 1e3, UU.headerWord(tU.A.TicksRun), PU, UU.headerWord(tU.A.RenderPending), TU)
        }, this.jsFrame = (UU, RU, gU) => {
          this.frame(UU, RU, !0, gU, RU - UU, 0, 0, -1, -1)
        }, this.jsTick = UU => {
          this.current.mainMs += UU, this.current.ticks++, this.current.tickMs += UU
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const UU = performance.now();
          let RU = 0;
          for (const gU of this.waiting) {
            if (gU.dueMs > UU) {
              this.waiting[RU++] = gU;
              continue
            }
            const tU = [`long frame ${CU(gU.intervalMs)} ms ending at ${CU(gU.endMs)} ms: main ${CU(gU.mainMs)} (render ${CU(gU.renderMs)}, ${gU.ticks} ticks ${CU(gU.tickMs)}), outside ${CU(gU.intervalMs-gU.mainMs)}`, `${gU.rafs} rafs`];
            gU.pendingBefore >= 0 && tU.push(`pending ${gU.pendingBefore} -> ${gU.pendingAfter} (max ${gU.pendingMax})`), gU.meshes >= 0 && tU.push(`${gU.meshes} meshes landed`), tU.push(this.longTasks.describe(gU.endMs - gU.intervalMs, gU.endMs)), (0, EU.h)("frame", tU.join("; "))
          }
          this.waiting.length = RU, RU > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - UU))
        }, this.flush = () => {
          const UU = this.summary,
            RU = UU.totals;
          if (0 === UU.frames) return UU.undrawn > 0 && (0, EU.h)("frame", `${KU/1e3}s: no frames drawn, ${UU.undrawn} undrawn, pending max ${RU.pendingMax}`), void UU.reset();
          const gU = UU.intervals.subarray(0, Math.min(UU.frames, uU)).sort(),
            tU = [`${UU.frames} frames, median ${CU((0,pU.d)(gU,.5))} p95 ${CU((0,pU.d)(gU,.95))} max ${CU(UU.maxMs)} ms, ${UU.slow} over 50, ${UU.shown+UU.dropped} over ${cU}`, `${RU.rafs} rafs, ${UU.undrawn} undrawn`, `main ${CU(RU.mainMs)} ms (render ${CU(RU.renderMs)}, ${RU.ticks} ticks ${CU(RU.tickMs)})`];
          RU.pendingMax >= 0 && tU.push(`pending max ${RU.pendingMax}`), RU.meshes >= 0 && tU.push(`${RU.meshes} meshes landed`), this.ahead >= 0 && tU.push(`${this.ahead} frames ahead`), tU.push(`outliers ${UU.shown} logged, ${UU.dropped} dropped`), (0, EU.h)("frame", `${KU/1e3}s: ${tU.join("; ")}`), UU.reset()
        }, setInterval(this.flush, KU), document.addEventListener("visibilitychange", this.restart)
      }
      start(UU, RU) {
        var gU;
        this.restart(), (0, EU.h)("frame", `start: ${UU} client, ${RU}, dpr ${window.devicePixelRatio}, long tasks ${null!==(gU=this.longTasks.kind)&&void 0!==gU?gU:"n/a"}; a summary each ${KU/1e3} s in game, outliers over ${cU} ms`)
      }
      frame(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        if (!tU) return this.restart(), void(this.lastPending = TU);
        const KU = this.current;
        gU ? (this.lastDrawnStartMs >= 0 && (KU.pendingAfter = this.lastPending, KU.meshes = qU < 0 ? -1 : qU - this.lastMeshes, this.closeInterval(UU - this.lastDrawnStartMs, UU)), this.lastDrawnStartMs = UU, hU(KU).pendingBefore = this.lastPending, this.lastMeshes = qU) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, KU.mainMs += RU - UU, KU.renderMs += pU, KU.ticks += EU, KU.tickMs += PU, KU.pendingMax = Math.max(KU.pendingMax, TU), this.lastPending = TU, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, TU)
      }
      closeInterval(UU, RU) {
        const gU = this.summary,
          tU = this.current;
        gU.frames < uU && (gU.intervals[gU.frames] = UU), gU.frames++, gU.maxMs = Math.max(gU.maxMs, UU);
        const pU = gU.totals;
        pU.mainMs += tU.mainMs, pU.renderMs += tU.renderMs, pU.ticks += tU.ticks, pU.tickMs += tU.tickMs, pU.rafs += tU.rafs, pU.meshes = tU.meshes < 0 ? -1 : Math.max(0, pU.meshes) + tU.meshes, UU > 50 && gU.slow++, UU > cU && this.outlier(UU, RU)
      }
      outlier(UU, RU) {
        const gU = Math.floor((RU - this.lastRefillMs) / jU);
        gU > 0 && (this.tokens = Math.min(GU, this.tokens + gU), this.lastRefillMs += gU * jU), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: RU,
          intervalMs: UU,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let fU = null;

    function xU(UU, RU) {
      return fU ??= new WU, fU.start(UU, RU), fU
    }
  },
  4456: (UU, RU, gU) => {
    gU.d(RU, {
      $: () => oU,
      A: () => EU,
      B: () => CU,
      Db: () => mU,
      F: () => AU,
      G: () => KU,
      Gb: () => YU,
      Hb: () => HU,
      J: () => hU,
      L: () => qU,
      Lb: () => VU,
      M: () => jU,
      N: () => GU,
      Ob: () => XU,
      R: () => JU,
      Rb: () => vU,
      S: () => nU,
      Tb: () => fU,
      V: () => bU,
      X: () => wU,
      Xb: () => xU,
      Zb: () => sU,
      b: () => FU,
      bc: () => pU,
      db: () => SU,
      dc: () => iU,
      e: () => kU,
      g: () => cU,
      hb: () => dU,
      j: () => WU,
      kb: () => rU,
      n: () => yU,
      nb: () => ZU,
      p: () => eU,
      pb: () => BU,
      s: () => QU,
      tb: () => aU,
      v: () => PU,
      w: () => TU,
      wb: () => uU,
      x: () => tU,
      zb: () => IU
    });
    const tU = 32,
      pU = 33.333333333333336,
      EU = {
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
      PU = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      TU = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      qU = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      KU = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      cU = {
        Look: 0,
        Remesh: 1
      },
      GU = 8,
      jU = 1,
      uU = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      CU = {
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
      hU = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      QU = {
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
      eU = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      WU = 4,
      fU = 4,
      xU = 65535,
      mU = {
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
      IU = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      JU = 88,
      wU = 0,
      nU = 24,
      bU = 48,
      oU = 80,
      ZU = {
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
      aU = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      YU = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      BU = {
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
      VU = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      rU = 65535,
      XU = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      vU = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      dU = 2,
      HU = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      SU = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      sU = {
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
      yU = {
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
      kU = {
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
      FU = 8,
      iU = {
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
      AU = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);