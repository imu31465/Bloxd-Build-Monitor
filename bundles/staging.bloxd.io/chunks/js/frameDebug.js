export const id = 33;
export const ids = [33];
export const modules = {
  9210: (TT, kT, cT) => {
    function lT(TT, kT) {
      return 0 === TT.length ? 0 : TT[Math.min(TT.length - 1, Math.floor(kT * TT.length))]
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  9202: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      FrameDebugLog: () => QT,
      OUTLIER_BURST: () => AT,
      OUTLIER_MS: () => IT,
      OUTLIER_REFILL_MS: () => CT,
      SUMMARY_MS: () => xT,
      startFrameDebug: () => DT
    });
    var lT = cT(4769),
      MT = cT(9210),
      KT = cT(2853),
      OT = cT(1089),
      yT = cT(2916);
    class fT {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = TT => {
          const kT = TT;
          this.add(kT.startTime, kT.duration, kT.blockingDuration, (0, OT.k)(kT))
        }, this.onLongTask = TT => {
          this.add(TT.startTime, TT.duration, 0, 0)
        }, null !== (0, yT.c)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, yT.c)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(TT, kT, cT, lT) {
        this.entries.set([TT, kT, cT, lT], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(TT, kT) {
        if (null === this.kind) return "long tasks n/a";
        let cT = 0,
          lT = 0,
          MT = 0,
          KT = 0;
        for (let yT = 0; yT < this.size; yT++) {
          const OT = 4 * yT,
            fT = this.entries[OT] + this.entries[OT + 1];
          fT > TT && fT <= kT + 2 && (cT++, lT += this.entries[OT + 1], MT += this.entries[OT + 2], KT += this.entries[OT + 3])
        }
        const OT = "loaf" === this.kind && cT > 0 ? ` (blocking ${MT.toFixed(0)}, script ${KT.toFixed(0)})` : "";
        return `${cT} ${this.kind} ${lT.toFixed(0)} ms${OT}`
      }
    }
    const xT = 2e4,
      IT = 250,
      AT = 10,
      CT = 6e4,
      jT = 8192;

    function vT(TT) {
      return TT.toFixed(1)
    }

    function tT(TT) {
      return TT.mainMs = 0, TT.renderMs = 0, TT.ticks = 0, TT.tickMs = 0, TT.rafs = 0, TT.pendingBefore = -1, TT.pendingMax = -1, TT.pendingAfter = -1, TT.meshes = -1, TT
    }

    function hT() {
      return tT({})
    }
    class NT {
      constructor() {
        this.intervals = new Float64Array(jT), this.totals = hT(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        tT(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class QT {
      constructor() {
        this.longTasks = new fT, this.summary = new NT, this.current = hT(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = AT, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (TT, kT, cT, MT, KT, OT, yT) => {
          this.ahead = TT.headerWord(lT.B.Pacing) & lT.L.AheadMask, this.frame(kT, cT, MT, KT, TT.headerWord(lT.B.RenderUs) / 1e3, TT.headerWord(lT.B.TicksRun), OT, TT.headerWord(lT.B.RenderPending), yT)
        }, this.jsFrame = (TT, kT, cT) => {
          this.frame(TT, kT, !0, cT, kT - TT, 0, 0, -1, -1)
        }, this.jsTick = TT => {
          this.current.mainMs += TT, this.current.ticks++, this.current.tickMs += TT
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const TT = performance.now();
          let kT = 0;
          for (const cT of this.waiting) {
            if (cT.dueMs > TT) {
              this.waiting[kT++] = cT;
              continue
            }
            const lT = [`long frame ${vT(cT.intervalMs)} ms ending at ${vT(cT.endMs)} ms: main ${vT(cT.mainMs)} (render ${vT(cT.renderMs)}, ${cT.ticks} ticks ${vT(cT.tickMs)}), outside ${vT(cT.intervalMs-cT.mainMs)}`, `${cT.rafs} rafs`];
            cT.pendingBefore >= 0 && lT.push(`pending ${cT.pendingBefore} -> ${cT.pendingAfter} (max ${cT.pendingMax})`), cT.meshes >= 0 && lT.push(`${cT.meshes} meshes landed`), lT.push(this.longTasks.describe(cT.endMs - cT.intervalMs, cT.endMs)), (0, KT.k)("frame", lT.join("; "))
          }
          this.waiting.length = kT, kT > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - TT))
        }, this.flush = () => {
          const TT = this.summary,
            kT = TT.totals;
          if (0 === TT.frames) return TT.undrawn > 0 && (0, KT.k)("frame", `${xT/1e3}s: no frames drawn, ${TT.undrawn} undrawn, pending max ${kT.pendingMax}`), void TT.reset();
          const cT = TT.intervals.subarray(0, Math.min(TT.frames, jT)).sort(),
            lT = [`${TT.frames} frames, median ${vT((0,MT.b)(cT,.5))} p95 ${vT((0,MT.b)(cT,.95))} max ${vT(TT.maxMs)} ms, ${TT.slow} over 50, ${TT.shown+TT.dropped} over ${IT}`, `${kT.rafs} rafs, ${TT.undrawn} undrawn`, `main ${vT(kT.mainMs)} ms (render ${vT(kT.renderMs)}, ${kT.ticks} ticks ${vT(kT.tickMs)})`];
          kT.pendingMax >= 0 && lT.push(`pending max ${kT.pendingMax}`), kT.meshes >= 0 && lT.push(`${kT.meshes} meshes landed`), this.ahead >= 0 && lT.push(`${this.ahead} frames ahead`), lT.push(`outliers ${TT.shown} logged, ${TT.dropped} dropped`), (0, KT.k)("frame", `${xT/1e3}s: ${lT.join("; ")}`), TT.reset()
        }, setInterval(this.flush, xT), document.addEventListener("visibilitychange", this.restart)
      }
      start(TT, kT) {
        var cT;
        this.restart(), (0, KT.k)("frame", `start: ${TT} client, ${kT}, dpr ${window.devicePixelRatio}, long tasks ${null!==(cT=this.longTasks.kind)&&void 0!==cT?cT:"n/a"}; a summary each ${xT/1e3} s in game, outliers over ${IT} ms`)
      }
      frame(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        if (!lT) return this.restart(), void(this.lastPending = yT);
        const xT = this.current;
        cT ? (this.lastDrawnStartMs >= 0 && (xT.pendingAfter = this.lastPending, xT.meshes = fT < 0 ? -1 : fT - this.lastMeshes, this.closeInterval(TT - this.lastDrawnStartMs, TT)), this.lastDrawnStartMs = TT, tT(xT).pendingBefore = this.lastPending, this.lastMeshes = fT) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, xT.mainMs += kT - TT, xT.renderMs += MT, xT.ticks += KT, xT.tickMs += OT, xT.pendingMax = Math.max(xT.pendingMax, yT), this.lastPending = yT, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, yT)
      }
      closeInterval(TT, kT) {
        const cT = this.summary,
          lT = this.current;
        cT.frames < jT && (cT.intervals[cT.frames] = TT), cT.frames++, cT.maxMs = Math.max(cT.maxMs, TT);
        const MT = cT.totals;
        MT.mainMs += lT.mainMs, MT.renderMs += lT.renderMs, MT.ticks += lT.ticks, MT.tickMs += lT.tickMs, MT.rafs += lT.rafs, MT.meshes = lT.meshes < 0 ? -1 : Math.max(0, MT.meshes) + lT.meshes, TT > 50 && cT.slow++, TT > IT && this.outlier(TT, kT)
      }
      outlier(TT, kT) {
        const cT = Math.floor((kT - this.lastRefillMs) / CT);
        cT > 0 && (this.tokens = Math.min(AT, this.tokens + cT), this.lastRefillMs += cT * CT), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: kT,
          intervalMs: TT,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let ST = null;

    function DT(TT, kT) {
      return ST ??= new QT, ST.start(TT, kT), ST
    }
  },
  4769: (TT, kT, cT) => {
    cT.d(kT, {
      $: () => bT,
      Ab: () => aT,
      B: () => KT,
      Bb: () => oT,
      C: () => vT,
      D: () => YT,
      Fb: () => uT,
      H: () => xT,
      Hb: () => eT,
      K: () => tT,
      Kb: () => VT,
      L: () => fT,
      Mb: () => ET,
      O: () => CT,
      Ob: () => ST,
      P: () => AT,
      R: () => rT,
      Sb: () => DT,
      Tb: () => dT,
      V: () => wT,
      Vb: () => MT,
      Xb: () => UT,
      Y: () => mT,
      _: () => PT,
      ab: () => XT,
      cb: () => ZT,
      d: () => gT,
      e: () => RT,
      g: () => IT,
      gb: () => GT,
      j: () => QT,
      kb: () => zT,
      n: () => LT,
      ob: () => HT,
      q: () => NT,
      sb: () => JT,
      t: () => hT,
      vb: () => jT,
      x: () => OT,
      y: () => yT,
      yb: () => FT,
      z: () => lT
    });
    const lT = 32,
      MT = 33.333333333333336,
      KT = {
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
      OT = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      yT = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      fT = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      xT = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      IT = {
        Look: 0,
        Remesh: 1
      },
      AT = 8,
      CT = 1,
      jT = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      vT = {
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
      tT = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      hT = {
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
      NT = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      QT = 4,
      ST = 4,
      DT = 65535,
      aT = {
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
      FT = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      rT = 88,
      PT = 0,
      wT = 24,
      mT = 48,
      bT = 80,
      zT = {
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
      JT = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      oT = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      HT = {
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
      eT = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      GT = 65535,
      VT = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      ET = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      ZT = 2,
      uT = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      XT = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      dT = {
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
      LT = {
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
      RT = {
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
      gT = 8,
      UT = {
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
      YT = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);