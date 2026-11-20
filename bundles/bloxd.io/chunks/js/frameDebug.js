export const id = 33;
export const ids = [33];
export const modules = {
  8924: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return 0 === uu.length ? 0 : uu[Math.min(uu.length - 1, Math.floor(Ru * uu.length))]
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  8921: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      FrameDebugLog: () => ju,
      OUTLIER_BURST: () => ru,
      OUTLIER_MS: () => Vu,
      OUTLIER_REFILL_MS: () => Bu,
      SUMMARY_MS: () => Xu,
      startFrameDebug: () => du
    });
    var Eu = yu(4564),
      Ku = yu(8924),
      Qu = yu(2707),
      mu = yu(1069),
      Ju = yu(2758);
    class Nu {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = uu => {
          const Ru = uu;
          this.add(Ru.startTime, Ru.duration, Ru.blockingDuration, (0, mu.p)(Ru))
        }, this.onLongTask = uu => {
          this.add(uu.startTime, uu.duration, 0, 0)
        }, null !== (0, Ju.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Ju.d)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(uu, Ru, yu, Eu) {
        this.entries.set([uu, Ru, yu, Eu], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(uu, Ru) {
        if (null === this.kind) return "long tasks n/a";
        let yu = 0,
          Eu = 0,
          Ku = 0,
          Qu = 0;
        for (let Ju = 0; Ju < this.size; Ju++) {
          const mu = 4 * Ju,
            Nu = this.entries[mu] + this.entries[mu + 1];
          Nu > uu && Nu <= Ru + 2 && (yu++, Eu += this.entries[mu + 1], Ku += this.entries[mu + 2], Qu += this.entries[mu + 3])
        }
        const mu = "loaf" === this.kind && yu > 0 ? ` (blocking ${Ku.toFixed(0)}, script ${Qu.toFixed(0)})` : "";
        return `${yu} ${this.kind} ${Eu.toFixed(0)} ms${mu}`
      }
    }
    const Xu = 2e4,
      Vu = 250,
      ru = 10,
      Bu = 6e4,
      xu = 8192;

    function Su(uu) {
      return uu.toFixed(1)
    }

    function pu(uu) {
      return uu.mainMs = 0, uu.renderMs = 0, uu.ticks = 0, uu.tickMs = 0, uu.rafs = 0, uu.pendingBefore = -1, uu.pendingMax = -1, uu.pendingAfter = -1, uu.meshes = -1, uu
    }

    function Tu() {
      return pu({})
    }
    class Wu {
      constructor() {
        this.intervals = new Float64Array(xu), this.totals = Tu(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        pu(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class ju {
      constructor() {
        this.longTasks = new Nu, this.summary = new Wu, this.current = Tu(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = ru, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (uu, Ru, yu, Ku, Qu, mu, Ju) => {
          this.ahead = uu.headerWord(Eu.E.Pacing) & Eu.Q.AheadMask, this.frame(Ru, yu, Ku, Qu, uu.headerWord(Eu.E.RenderUs) / 1e3, uu.headerWord(Eu.E.TicksRun), mu, uu.headerWord(Eu.E.RenderPending), Ju)
        }, this.jsFrame = (uu, Ru, yu) => {
          this.frame(uu, Ru, !0, yu, Ru - uu, 0, 0, -1, -1)
        }, this.jsTick = uu => {
          this.current.mainMs += uu, this.current.ticks++, this.current.tickMs += uu
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const uu = performance.now();
          let Ru = 0;
          for (const yu of this.waiting) {
            if (yu.dueMs > uu) {
              this.waiting[Ru++] = yu;
              continue
            }
            const Eu = [`long frame ${Su(yu.intervalMs)} ms ending at ${Su(yu.endMs)} ms: main ${Su(yu.mainMs)} (render ${Su(yu.renderMs)}, ${yu.ticks} ticks ${Su(yu.tickMs)}), outside ${Su(yu.intervalMs-yu.mainMs)}`, `${yu.rafs} rafs`];
            yu.pendingBefore >= 0 && Eu.push(`pending ${yu.pendingBefore} -> ${yu.pendingAfter} (max ${yu.pendingMax})`), yu.meshes >= 0 && Eu.push(`${yu.meshes} meshes landed`), Eu.push(this.longTasks.describe(yu.endMs - yu.intervalMs, yu.endMs)), (0, Qu.i)("frame", Eu.join("; "))
          }
          this.waiting.length = Ru, Ru > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - uu))
        }, this.flush = () => {
          const uu = this.summary,
            Ru = uu.totals;
          if (0 === uu.frames) return uu.undrawn > 0 && (0, Qu.i)("frame", `${Xu/1e3}s: no frames drawn, ${uu.undrawn} undrawn, pending max ${Ru.pendingMax}`), void uu.reset();
          const yu = uu.intervals.subarray(0, Math.min(uu.frames, xu)).sort(),
            Eu = [`${uu.frames} frames, median ${Su((0,Ku.c)(yu,.5))} p95 ${Su((0,Ku.c)(yu,.95))} max ${Su(uu.maxMs)} ms, ${uu.slow} over 50, ${uu.shown+uu.dropped} over ${Vu}`, `${Ru.rafs} rafs, ${uu.undrawn} undrawn`, `main ${Su(Ru.mainMs)} ms (render ${Su(Ru.renderMs)}, ${Ru.ticks} ticks ${Su(Ru.tickMs)})`];
          Ru.pendingMax >= 0 && Eu.push(`pending max ${Ru.pendingMax}`), Ru.meshes >= 0 && Eu.push(`${Ru.meshes} meshes landed`), this.ahead >= 0 && Eu.push(`${this.ahead} frames ahead`), Eu.push(`outliers ${uu.shown} logged, ${uu.dropped} dropped`), (0, Qu.i)("frame", `${Xu/1e3}s: ${Eu.join("; ")}`), uu.reset()
        }, setInterval(this.flush, Xu), document.addEventListener("visibilitychange", this.restart)
      }
      start(uu, Ru) {
        var yu;
        this.restart(), (0, Qu.i)("frame", `start: ${uu} client, ${Ru}, dpr ${window.devicePixelRatio}, long tasks ${null!==(yu=this.longTasks.kind)&&void 0!==yu?yu:"n/a"}; a summary each ${Xu/1e3} s in game, outliers over ${Vu} ms`)
      }
      frame(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        if (!Eu) return this.restart(), void(this.lastPending = Ju);
        const Xu = this.current;
        yu ? (this.lastDrawnStartMs >= 0 && (Xu.pendingAfter = this.lastPending, Xu.meshes = Nu < 0 ? -1 : Nu - this.lastMeshes, this.closeInterval(uu - this.lastDrawnStartMs, uu)), this.lastDrawnStartMs = uu, pu(Xu).pendingBefore = this.lastPending, this.lastMeshes = Nu) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, Xu.mainMs += Ru - uu, Xu.renderMs += Ku, Xu.ticks += Qu, Xu.tickMs += mu, Xu.pendingMax = Math.max(Xu.pendingMax, Ju), this.lastPending = Ju, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, Ju)
      }
      closeInterval(uu, Ru) {
        const yu = this.summary,
          Eu = this.current;
        yu.frames < xu && (yu.intervals[yu.frames] = uu), yu.frames++, yu.maxMs = Math.max(yu.maxMs, uu);
        const Ku = yu.totals;
        Ku.mainMs += Eu.mainMs, Ku.renderMs += Eu.renderMs, Ku.ticks += Eu.ticks, Ku.tickMs += Eu.tickMs, Ku.rafs += Eu.rafs, Ku.meshes = Eu.meshes < 0 ? -1 : Math.max(0, Ku.meshes) + Eu.meshes, uu > 50 && yu.slow++, uu > Vu && this.outlier(uu, Ru)
      }
      outlier(uu, Ru) {
        const yu = Math.floor((Ru - this.lastRefillMs) / Bu);
        yu > 0 && (this.tokens = Math.min(ru, this.tokens + yu), this.lastRefillMs += yu * Bu), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: Ru,
          intervalMs: uu,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let Hu = null;

    function du(uu, Ru) {
      return Hu ??= new ju, Hu.start(uu, Ru), Hu
    }
  },
  4564: (uu, Ru, yu) => {
    yu.d(Ru, {
      $: () => Du,
      $b: () => Pu,
      Ab: () => xu,
      B: () => Eu,
      Db: () => Cu,
      E: () => Qu,
      G: () => Su,
      H: () => iu,
      Hb: () => bu,
      Ib: () => Uu,
      L: () => Xu,
      Lb: () => Lu,
      N: () => pu,
      Pb: () => su,
      Q: () => Nu,
      R: () => Bu,
      Rb: () => lu,
      S: () => ru,
      Sb: () => gu,
      Tb: () => Hu,
      Vb: () => du,
      W: () => ku,
      X: () => Au,
      Yb: () => Fu,
      Zb: () => Ku,
      c: () => hu,
      db: () => eu,
      g: () => Zu,
      hb: () => Mu,
      i: () => Vu,
      j: () => ju,
      lb: () => zu,
      m: () => wu,
      ob: () => cu,
      p: () => Wu,
      rb: () => tu,
      s: () => Tu,
      ub: () => Iu,
      w: () => mu,
      x: () => Ju,
      xb: () => nu,
      yb: () => Gu
    });
    const Eu = 32,
      Ku = 33.333333333333336,
      Qu = {
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
      mu = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Ju = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Nu = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Xu = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Vu = {
        Look: 0,
        Remesh: 1
      },
      ru = 8,
      Bu = 1,
      xu = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Su = {
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
      pu = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Tu = {
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
      Wu = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      ju = 4,
      Hu = 4,
      du = 65535,
      bu = {
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
      Cu = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      ku = 88,
      eu = 0,
      Au = 24,
      Du = 48,
      Mu = 80,
      Iu = {
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
      Gu = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Uu = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      nu = {
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
      su = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      tu = 65535,
      lu = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      gu = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      cu = 2,
      Lu = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      zu = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Fu = {
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
      wu = {
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
      Zu = {
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
      hu = 8,
      Pu = {
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
      iu = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);