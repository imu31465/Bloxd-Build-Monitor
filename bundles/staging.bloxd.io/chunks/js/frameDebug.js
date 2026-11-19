export const id = 33;
export const ids = [33];
export const modules = {
  8906: (DD, CD, cD) => {
    function ID(DD, CD) {
      return 0 === DD.length ? 0 : DD[Math.min(DD.length - 1, Math.floor(CD * DD.length))]
    }
    cD.d(CD, {
      b: () => ID
    })
  },
  8900: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      FrameDebugLog: () => ND,
      OUTLIER_BURST: () => BD,
      OUTLIER_MS: () => SD,
      OUTLIER_REFILL_MS: () => yD,
      SUMMARY_MS: () => wD,
      startFrameDebug: () => XD
    });
    var ID = cD(4585),
      pD = cD(8906),
      iD = cD(2727),
      fD = cD(1087),
      bD = cD(2769);
    class QD {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = DD => {
          const CD = DD;
          this.add(CD.startTime, CD.duration, CD.blockingDuration, (0, fD.o)(CD))
        }, this.onLongTask = DD => {
          this.add(DD.startTime, DD.duration, 0, 0)
        }, null !== (0, bD.c)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, bD.c)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(DD, CD, cD, ID) {
        this.entries.set([DD, CD, cD, ID], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(DD, CD) {
        if (null === this.kind) return "long tasks n/a";
        let cD = 0,
          ID = 0,
          pD = 0,
          iD = 0;
        for (let bD = 0; bD < this.size; bD++) {
          const fD = 4 * bD,
            QD = this.entries[fD] + this.entries[fD + 1];
          QD > DD && QD <= CD + 2 && (cD++, ID += this.entries[fD + 1], pD += this.entries[fD + 2], iD += this.entries[fD + 3])
        }
        const fD = "loaf" === this.kind && cD > 0 ? ` (blocking ${pD.toFixed(0)}, script ${iD.toFixed(0)})` : "";
        return `${cD} ${this.kind} ${ID.toFixed(0)} ms${fD}`
      }
    }
    const wD = 2e4,
      SD = 250,
      BD = 10,
      yD = 6e4,
      MD = 8192;

    function tD(DD) {
      return DD.toFixed(1)
    }

    function ZD(DD) {
      return DD.mainMs = 0, DD.renderMs = 0, DD.ticks = 0, DD.tickMs = 0, DD.rafs = 0, DD.pendingBefore = -1, DD.pendingMax = -1, DD.pendingAfter = -1, DD.meshes = -1, DD
    }

    function oD() {
      return ZD({})
    }
    class vD {
      constructor() {
        this.intervals = new Float64Array(MD), this.totals = oD(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        ZD(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class ND {
      constructor() {
        this.longTasks = new QD, this.summary = new vD, this.current = oD(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = BD, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (DD, CD, cD, pD, iD, fD, bD) => {
          this.ahead = DD.headerWord(ID.A.Pacing) & ID.Q.AheadMask, this.frame(CD, cD, pD, iD, DD.headerWord(ID.A.RenderUs) / 1e3, DD.headerWord(ID.A.TicksRun), fD, DD.headerWord(ID.A.RenderPending), bD)
        }, this.jsFrame = (DD, CD, cD) => {
          this.frame(DD, CD, !0, cD, CD - DD, 0, 0, -1, -1)
        }, this.jsTick = DD => {
          this.current.mainMs += DD, this.current.ticks++, this.current.tickMs += DD
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const DD = performance.now();
          let CD = 0;
          for (const cD of this.waiting) {
            if (cD.dueMs > DD) {
              this.waiting[CD++] = cD;
              continue
            }
            const ID = [`long frame ${tD(cD.intervalMs)} ms ending at ${tD(cD.endMs)} ms: main ${tD(cD.mainMs)} (render ${tD(cD.renderMs)}, ${cD.ticks} ticks ${tD(cD.tickMs)}), outside ${tD(cD.intervalMs-cD.mainMs)}`, `${cD.rafs} rafs`];
            cD.pendingBefore >= 0 && ID.push(`pending ${cD.pendingBefore} -> ${cD.pendingAfter} (max ${cD.pendingMax})`), cD.meshes >= 0 && ID.push(`${cD.meshes} meshes landed`), ID.push(this.longTasks.describe(cD.endMs - cD.intervalMs, cD.endMs)), (0, iD.j)("frame", ID.join("; "))
          }
          this.waiting.length = CD, CD > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - DD))
        }, this.flush = () => {
          const DD = this.summary,
            CD = DD.totals;
          if (0 === DD.frames) return DD.undrawn > 0 && (0, iD.j)("frame", `${wD/1e3}s: no frames drawn, ${DD.undrawn} undrawn, pending max ${CD.pendingMax}`), void DD.reset();
          const cD = DD.intervals.subarray(0, Math.min(DD.frames, MD)).sort(),
            ID = [`${DD.frames} frames, median ${tD((0,pD.b)(cD,.5))} p95 ${tD((0,pD.b)(cD,.95))} max ${tD(DD.maxMs)} ms, ${DD.slow} over 50, ${DD.shown+DD.dropped} over ${SD}`, `${CD.rafs} rafs, ${DD.undrawn} undrawn`, `main ${tD(CD.mainMs)} ms (render ${tD(CD.renderMs)}, ${CD.ticks} ticks ${tD(CD.tickMs)})`];
          CD.pendingMax >= 0 && ID.push(`pending max ${CD.pendingMax}`), CD.meshes >= 0 && ID.push(`${CD.meshes} meshes landed`), this.ahead >= 0 && ID.push(`${this.ahead} frames ahead`), ID.push(`outliers ${DD.shown} logged, ${DD.dropped} dropped`), (0, iD.j)("frame", `${wD/1e3}s: ${ID.join("; ")}`), DD.reset()
        }, setInterval(this.flush, wD), document.addEventListener("visibilitychange", this.restart)
      }
      start(DD, CD) {
        var cD;
        this.restart(), (0, iD.j)("frame", `start: ${DD} client, ${CD}, dpr ${window.devicePixelRatio}, long tasks ${null!==(cD=this.longTasks.kind)&&void 0!==cD?cD:"n/a"}; a summary each ${wD/1e3} s in game, outliers over ${SD} ms`)
      }
      frame(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        if (!ID) return this.restart(), void(this.lastPending = bD);
        const wD = this.current;
        cD ? (this.lastDrawnStartMs >= 0 && (wD.pendingAfter = this.lastPending, wD.meshes = QD < 0 ? -1 : QD - this.lastMeshes, this.closeInterval(DD - this.lastDrawnStartMs, DD)), this.lastDrawnStartMs = DD, ZD(wD).pendingBefore = this.lastPending, this.lastMeshes = QD) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, wD.mainMs += CD - DD, wD.renderMs += pD, wD.ticks += iD, wD.tickMs += fD, wD.pendingMax = Math.max(wD.pendingMax, bD), this.lastPending = bD, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, bD)
      }
      closeInterval(DD, CD) {
        const cD = this.summary,
          ID = this.current;
        cD.frames < MD && (cD.intervals[cD.frames] = DD), cD.frames++, cD.maxMs = Math.max(cD.maxMs, DD);
        const pD = cD.totals;
        pD.mainMs += ID.mainMs, pD.renderMs += ID.renderMs, pD.ticks += ID.ticks, pD.tickMs += ID.tickMs, pD.rafs += ID.rafs, pD.meshes = ID.meshes < 0 ? -1 : Math.max(0, pD.meshes) + ID.meshes, DD > 50 && cD.slow++, DD > SD && this.outlier(DD, CD)
      }
      outlier(DD, CD) {
        const cD = Math.floor((CD - this.lastRefillMs) / yD);
        cD > 0 && (this.tokens = Math.min(BD, this.tokens + cD), this.lastRefillMs += cD * yD), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: CD,
          intervalMs: DD,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let gD = null;

    function XD(DD, CD) {
      return gD ??= new ND, gD.start(DD, CD), gD
    }
  },
  4585: (DD, CD, cD) => {
    cD.d(CD, {
      $: () => HD,
      A: () => iD,
      Bb: () => nD,
      E: () => tD,
      Eb: () => mD,
      F: () => sD,
      Hb: () => KD,
      I: () => wD,
      Lb: () => TD,
      M: () => ZD,
      Ob: () => VD,
      Q: () => QD,
      Sb: () => jD,
      T: () => yD,
      Wb: () => lD,
      X: () => BD,
      Xb: () => gD,
      Y: () => OD,
      Zb: () => XD,
      _b: () => RD,
      cc: () => pD,
      db: () => UD,
      dc: () => WD,
      e: () => YD,
      eb: () => PD,
      g: () => dD,
      hb: () => xD,
      j: () => SD,
      k: () => ND,
      kb: () => GD,
      l: () => kD,
      lb: () => LD,
      o: () => vD,
      pb: () => zD,
      qb: () => qD,
      r: () => oD,
      rb: () => aD,
      s: () => fD,
      tb: () => JD,
      v: () => bD,
      xb: () => MD,
      y: () => ID
    });
    const ID = 32,
      pD = 33.333333333333336,
      iD = {
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
      fD = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      bD = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      QD = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      wD = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      SD = {
        Look: 0,
        Remesh: 1
      },
      BD = 8,
      yD = 1,
      MD = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      tD = {
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
      ZD = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      oD = {
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
      vD = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      ND = 4,
      gD = 4,
      XD = 65535,
      mD = {
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
      nD = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      OD = 88,
      PD = 0,
      HD = 24,
      UD = 48,
      xD = 80,
      qD = {
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
      JD = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      KD = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      aD = {
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
      VD = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      zD = 65535,
      jD = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      lD = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      LD = 2,
      TD = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      GD = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      RD = {
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
      kD = {
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
      dD = {
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
      YD = 8,
      WD = {
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
      sD = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);