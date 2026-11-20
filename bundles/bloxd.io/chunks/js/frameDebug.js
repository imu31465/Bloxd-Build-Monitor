export const id = 33;
export const ids = [33];
export const modules = {
  8779: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return 0 === bb.length ? 0 : bb[Math.min(bb.length - 1, Math.floor(ab * bb.length))]
    }
    Ub.d(ab, {
      d: () => Ab
    })
  },
  8775: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      FrameDebugLog: () => Zb,
      OUTLIER_BURST: () => Lb,
      OUTLIER_MS: () => vb,
      OUTLIER_REFILL_MS: () => Pb,
      SUMMARY_MS: () => eb,
      startFrameDebug: () => zb
    });
    var Ab = Ub(4485),
      Mb = Ub(8779),
      Tb = Ub(2621),
      Eb = Ub(1011),
      Yb = Ub(2683);
    class Bb {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = bb => {
          const ab = bb;
          this.add(ab.startTime, ab.duration, ab.blockingDuration, (0, Eb.n)(ab))
        }, this.onLongTask = bb => {
          this.add(bb.startTime, bb.duration, 0, 0)
        }, null !== (0, Yb.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Yb.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(bb, ab, Ub, Ab) {
        this.entries.set([bb, ab, Ub, Ab], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(bb, ab) {
        if (null === this.kind) return "long tasks n/a";
        let Ub = 0,
          Ab = 0,
          Mb = 0,
          Tb = 0;
        for (let Yb = 0; Yb < this.size; Yb++) {
          const Eb = 4 * Yb,
            Bb = this.entries[Eb] + this.entries[Eb + 1];
          Bb > bb && Bb <= ab + 2 && (Ub++, Ab += this.entries[Eb + 1], Mb += this.entries[Eb + 2], Tb += this.entries[Eb + 3])
        }
        const Eb = "loaf" === this.kind && Ub > 0 ? ` (blocking ${Mb.toFixed(0)}, script ${Tb.toFixed(0)})` : "";
        return `${Ub} ${this.kind} ${Ab.toFixed(0)} ms${Eb}`
      }
    }
    const eb = 2e4,
      vb = 250,
      Lb = 10,
      Pb = 6e4,
      Xb = 8192;

    function jb(bb) {
      return bb.toFixed(1)
    }

    function Rb(bb) {
      return bb.mainMs = 0, bb.renderMs = 0, bb.ticks = 0, bb.tickMs = 0, bb.rafs = 0, bb.pendingBefore = -1, bb.pendingMax = -1, bb.pendingAfter = -1, bb.meshes = -1, bb
    }

    function kb() {
      return Rb({})
    }
    class yb {
      constructor() {
        this.intervals = new Float64Array(Xb), this.totals = kb(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        Rb(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class Zb {
      constructor() {
        this.longTasks = new Bb, this.summary = new yb, this.current = kb(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = Lb, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (bb, ab, Ub, Mb, Tb, Eb, Yb) => {
          this.ahead = bb.headerWord(Ab.F.Pacing) & Ab.O.AheadMask, this.frame(ab, Ub, Mb, Tb, bb.headerWord(Ab.F.RenderUs) / 1e3, bb.headerWord(Ab.F.TicksRun), Eb, bb.headerWord(Ab.F.RenderPending), Yb)
        }, this.jsFrame = (bb, ab, Ub) => {
          this.frame(bb, ab, !0, Ub, ab - bb, 0, 0, -1, -1)
        }, this.jsTick = bb => {
          this.current.mainMs += bb, this.current.ticks++, this.current.tickMs += bb
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const bb = performance.now();
          let ab = 0;
          for (const Ub of this.waiting) {
            if (Ub.dueMs > bb) {
              this.waiting[ab++] = Ub;
              continue
            }
            const Ab = [`long frame ${jb(Ub.intervalMs)} ms ending at ${jb(Ub.endMs)} ms: main ${jb(Ub.mainMs)} (render ${jb(Ub.renderMs)}, ${Ub.ticks} ticks ${jb(Ub.tickMs)}), outside ${jb(Ub.intervalMs-Ub.mainMs)}`, `${Ub.rafs} rafs`];
            Ub.pendingBefore >= 0 && Ab.push(`pending ${Ub.pendingBefore} -> ${Ub.pendingAfter} (max ${Ub.pendingMax})`), Ub.meshes >= 0 && Ab.push(`${Ub.meshes} meshes landed`), Ab.push(this.longTasks.describe(Ub.endMs - Ub.intervalMs, Ub.endMs)), (0, Tb.n)("frame", Ab.join("; "))
          }
          this.waiting.length = ab, ab > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - bb))
        }, this.flush = () => {
          const bb = this.summary,
            ab = bb.totals;
          if (0 === bb.frames) return bb.undrawn > 0 && (0, Tb.n)("frame", `${eb/1e3}s: no frames drawn, ${bb.undrawn} undrawn, pending max ${ab.pendingMax}`), void bb.reset();
          const Ub = bb.intervals.subarray(0, Math.min(bb.frames, Xb)).sort(),
            Ab = [`${bb.frames} frames, median ${jb((0,Mb.d)(Ub,.5))} p95 ${jb((0,Mb.d)(Ub,.95))} max ${jb(bb.maxMs)} ms, ${bb.slow} over 50, ${bb.shown+bb.dropped} over ${vb}`, `${ab.rafs} rafs, ${bb.undrawn} undrawn`, `main ${jb(ab.mainMs)} ms (render ${jb(ab.renderMs)}, ${ab.ticks} ticks ${jb(ab.tickMs)})`];
          ab.pendingMax >= 0 && Ab.push(`pending max ${ab.pendingMax}`), ab.meshes >= 0 && Ab.push(`${ab.meshes} meshes landed`), this.ahead >= 0 && Ab.push(`${this.ahead} frames ahead`), Ab.push(`outliers ${bb.shown} logged, ${bb.dropped} dropped`), (0, Tb.n)("frame", `${eb/1e3}s: ${Ab.join("; ")}`), bb.reset()
        }, setInterval(this.flush, eb), document.addEventListener("visibilitychange", this.restart)
      }
      start(bb, ab) {
        var Ub;
        this.restart(), (0, Tb.n)("frame", `start: ${bb} client, ${ab}, dpr ${window.devicePixelRatio}, long tasks ${null!==(Ub=this.longTasks.kind)&&void 0!==Ub?Ub:"n/a"}; a summary each ${eb/1e3} s in game, outliers over ${vb} ms`)
      }
      frame(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        if (!Ab) return this.restart(), void(this.lastPending = Yb);
        const eb = this.current;
        Ub ? (this.lastDrawnStartMs >= 0 && (eb.pendingAfter = this.lastPending, eb.meshes = Bb < 0 ? -1 : Bb - this.lastMeshes, this.closeInterval(bb - this.lastDrawnStartMs, bb)), this.lastDrawnStartMs = bb, Rb(eb).pendingBefore = this.lastPending, this.lastMeshes = Bb) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, eb.mainMs += ab - bb, eb.renderMs += Mb, eb.ticks += Tb, eb.tickMs += Eb, eb.pendingMax = Math.max(eb.pendingMax, Yb), this.lastPending = Yb, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, Yb)
      }
      closeInterval(bb, ab) {
        const Ub = this.summary,
          Ab = this.current;
        Ub.frames < Xb && (Ub.intervals[Ub.frames] = bb), Ub.frames++, Ub.maxMs = Math.max(Ub.maxMs, bb);
        const Mb = Ub.totals;
        Mb.mainMs += Ab.mainMs, Mb.renderMs += Ab.renderMs, Mb.ticks += Ab.ticks, Mb.tickMs += Ab.tickMs, Mb.rafs += Ab.rafs, Mb.meshes = Ab.meshes < 0 ? -1 : Math.max(0, Mb.meshes) + Ab.meshes, bb > 50 && Ub.slow++, bb > vb && this.outlier(bb, ab)
      }
      outlier(bb, ab) {
        const Ub = Math.floor((ab - this.lastRefillMs) / Pb);
        Ub > 0 && (this.tokens = Math.min(Lb, this.tokens + Ub), this.lastRefillMs += Ub * Pb), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: ab,
          intervalMs: bb,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let Db = null;

    function zb(bb, ab) {
      return Db ??= new Zb, Db.start(bb, ab), Db
    }
  },
  4485: (bb, ab, Ub) => {
    Ub.d(ab, {
      $: () => mb,
      B: () => Yb,
      Cb: () => db,
      Db: () => rb,
      E: () => Ab,
      F: () => Tb,
      Fb: () => hb,
      Gb: () => Qb,
      J: () => jb,
      Jb: () => qb,
      L: () => gb,
      Lb: () => Db,
      M: () => eb,
      Mb: () => zb,
      N: () => Rb,
      O: () => Bb,
      P: () => Pb,
      Pb: () => ob,
      Rb: () => Mb,
      S: () => Lb,
      Tb: () => sb,
      V: () => fb,
      Z: () => pb,
      _: () => Nb,
      db: () => Wb,
      e: () => wb,
      gb: () => Kb,
      h: () => tb,
      jb: () => ub,
      l: () => vb,
      lb: () => Gb,
      m: () => Zb,
      nb: () => Hb,
      p: () => lb,
      qb: () => Fb,
      r: () => yb,
      tb: () => Ib,
      u: () => kb,
      ub: () => Xb,
      x: () => Eb,
      xb: () => ib,
      yb: () => xb
    });
    const Ab = 32,
      Mb = 33.333333333333336,
      Tb = {
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
      Eb = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Yb = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Bb = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      eb = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      vb = {
        Look: 0,
        Remesh: 1
      },
      Lb = 8,
      Pb = 1,
      Xb = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      jb = {
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
      Rb = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      kb = {
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
      yb = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Zb = 4,
      Db = 4,
      zb = 65535,
      xb = {
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
      ib = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      fb = 88,
      mb = 0,
      pb = 24,
      Nb = 48,
      Wb = 80,
      Hb = {
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
      Ib = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      db = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Fb = {
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
      hb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Gb = 65535,
      Qb = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      qb = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      ub = 2,
      rb = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Kb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      ob = {
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
      lb = {
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
      tb = {
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
      wb = 8,
      sb = {
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
      gb = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);