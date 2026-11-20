export const id = 33;
export const ids = [33];
export const modules = {
  8805: (bb, cb, sb) => {
    function kb(bb, cb) {
      return 0 === bb.length ? 0 : bb[Math.min(bb.length - 1, Math.floor(cb * bb.length))]
    }
    sb.d(cb, {
      d: () => kb
    })
  },
  8800: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      FrameDebugLog: () => Cb,
      OUTLIER_BURST: () => Mb,
      OUTLIER_MS: () => fb,
      OUTLIER_REFILL_MS: () => Xb,
      SUMMARY_MS: () => Hb,
      startFrameDebug: () => Vb
    });
    var kb = sb(4517),
      Wb = sb(8805),
      ab = sb(2680),
      Tb = sb(1075),
      Ub = sb(2733);
    class Ib {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = bb => {
          const cb = bb;
          this.add(cb.startTime, cb.duration, cb.blockingDuration, (0, Tb.s)(cb))
        }, this.onLongTask = bb => {
          this.add(bb.startTime, bb.duration, 0, 0)
        }, null !== (0, Ub.c)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Ub.c)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(bb, cb, sb, kb) {
        this.entries.set([bb, cb, sb, kb], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(bb, cb) {
        if (null === this.kind) return "long tasks n/a";
        let sb = 0,
          kb = 0,
          Wb = 0,
          ab = 0;
        for (let Ub = 0; Ub < this.size; Ub++) {
          const Tb = 4 * Ub,
            Ib = this.entries[Tb] + this.entries[Tb + 1];
          Ib > bb && Ib <= cb + 2 && (sb++, kb += this.entries[Tb + 1], Wb += this.entries[Tb + 2], ab += this.entries[Tb + 3])
        }
        const Tb = "loaf" === this.kind && sb > 0 ? ` (blocking ${Wb.toFixed(0)}, script ${ab.toFixed(0)})` : "";
        return `${sb} ${this.kind} ${kb.toFixed(0)} ms${Tb}`
      }
    }
    const Hb = 2e4,
      fb = 250,
      Mb = 10,
      Xb = 6e4,
      nb = 8192;

    function mb(bb) {
      return bb.toFixed(1)
    }

    function lb(bb) {
      return bb.mainMs = 0, bb.renderMs = 0, bb.ticks = 0, bb.tickMs = 0, bb.rafs = 0, bb.pendingBefore = -1, bb.pendingMax = -1, bb.pendingAfter = -1, bb.meshes = -1, bb
    }

    function Qb() {
      return lb({})
    }
    class eb {
      constructor() {
        this.intervals = new Float64Array(nb), this.totals = Qb(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        lb(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class Cb {
      constructor() {
        this.longTasks = new Ib, this.summary = new eb, this.current = Qb(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = Mb, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (bb, cb, sb, Wb, ab, Tb, Ub) => {
          this.ahead = bb.headerWord(kb.y.Pacing) & kb.L.AheadMask, this.frame(cb, sb, Wb, ab, bb.headerWord(kb.y.RenderUs) / 1e3, bb.headerWord(kb.y.TicksRun), Tb, bb.headerWord(kb.y.RenderPending), Ub)
        }, this.jsFrame = (bb, cb, sb) => {
          this.frame(bb, cb, !0, sb, cb - bb, 0, 0, -1, -1)
        }, this.jsTick = bb => {
          this.current.mainMs += bb, this.current.ticks++, this.current.tickMs += bb
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const bb = performance.now();
          let cb = 0;
          for (const sb of this.waiting) {
            if (sb.dueMs > bb) {
              this.waiting[cb++] = sb;
              continue
            }
            const kb = [`long frame ${mb(sb.intervalMs)} ms ending at ${mb(sb.endMs)} ms: main ${mb(sb.mainMs)} (render ${mb(sb.renderMs)}, ${sb.ticks} ticks ${mb(sb.tickMs)}), outside ${mb(sb.intervalMs-sb.mainMs)}`, `${sb.rafs} rafs`];
            sb.pendingBefore >= 0 && kb.push(`pending ${sb.pendingBefore} -> ${sb.pendingAfter} (max ${sb.pendingMax})`), sb.meshes >= 0 && kb.push(`${sb.meshes} meshes landed`), kb.push(this.longTasks.describe(sb.endMs - sb.intervalMs, sb.endMs)), (0, ab.m)("frame", kb.join("; "))
          }
          this.waiting.length = cb, cb > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - bb))
        }, this.flush = () => {
          const bb = this.summary,
            cb = bb.totals;
          if (0 === bb.frames) return bb.undrawn > 0 && (0, ab.m)("frame", `${Hb/1e3}s: no frames drawn, ${bb.undrawn} undrawn, pending max ${cb.pendingMax}`), void bb.reset();
          const sb = bb.intervals.subarray(0, Math.min(bb.frames, nb)).sort(),
            kb = [`${bb.frames} frames, median ${mb((0,Wb.d)(sb,.5))} p95 ${mb((0,Wb.d)(sb,.95))} max ${mb(bb.maxMs)} ms, ${bb.slow} over 50, ${bb.shown+bb.dropped} over ${fb}`, `${cb.rafs} rafs, ${bb.undrawn} undrawn`, `main ${mb(cb.mainMs)} ms (render ${mb(cb.renderMs)}, ${cb.ticks} ticks ${mb(cb.tickMs)})`];
          cb.pendingMax >= 0 && kb.push(`pending max ${cb.pendingMax}`), cb.meshes >= 0 && kb.push(`${cb.meshes} meshes landed`), this.ahead >= 0 && kb.push(`${this.ahead} frames ahead`), kb.push(`outliers ${bb.shown} logged, ${bb.dropped} dropped`), (0, ab.m)("frame", `${Hb/1e3}s: ${kb.join("; ")}`), bb.reset()
        }, setInterval(this.flush, Hb), document.addEventListener("visibilitychange", this.restart)
      }
      start(bb, cb) {
        var sb;
        this.restart(), (0, ab.m)("frame", `start: ${bb} client, ${cb}, dpr ${window.devicePixelRatio}, long tasks ${null!==(sb=this.longTasks.kind)&&void 0!==sb?sb:"n/a"}; a summary each ${Hb/1e3} s in game, outliers over ${fb} ms`)
      }
      frame(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        if (!kb) return this.restart(), void(this.lastPending = Ub);
        const Hb = this.current;
        sb ? (this.lastDrawnStartMs >= 0 && (Hb.pendingAfter = this.lastPending, Hb.meshes = Ib < 0 ? -1 : Ib - this.lastMeshes, this.closeInterval(bb - this.lastDrawnStartMs, bb)), this.lastDrawnStartMs = bb, lb(Hb).pendingBefore = this.lastPending, this.lastMeshes = Ib) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, Hb.mainMs += cb - bb, Hb.renderMs += Wb, Hb.ticks += ab, Hb.tickMs += Tb, Hb.pendingMax = Math.max(Hb.pendingMax, Ub), this.lastPending = Ub, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, Ub)
      }
      closeInterval(bb, cb) {
        const sb = this.summary,
          kb = this.current;
        sb.frames < nb && (sb.intervals[sb.frames] = bb), sb.frames++, sb.maxMs = Math.max(sb.maxMs, bb);
        const Wb = sb.totals;
        Wb.mainMs += kb.mainMs, Wb.renderMs += kb.renderMs, Wb.ticks += kb.ticks, Wb.tickMs += kb.tickMs, Wb.rafs += kb.rafs, Wb.meshes = kb.meshes < 0 ? -1 : Math.max(0, Wb.meshes) + kb.meshes, bb > 50 && sb.slow++, bb > fb && this.outlier(bb, cb)
      }
      outlier(bb, cb) {
        const sb = Math.floor((cb - this.lastRefillMs) / Xb);
        sb > 0 && (this.tokens = Math.min(Mb, this.tokens + sb), this.lastRefillMs += sb * Xb), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: cb,
          intervalMs: bb,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let Nb = null;

    function Vb(bb, cb) {
      return Nb ??= new Cb, Nb.start(bb, cb), Nb
    }
  },
  4517: (bb, cb, sb) => {
    sb.d(cb, {
      Ab: () => Lb,
      B: () => mb,
      D: () => ob,
      Db: () => Pb,
      Eb: () => Zb,
      G: () => Hb,
      Gb: () => Eb,
      I: () => lb,
      Ib: () => Ob,
      L: () => Ib,
      Lb: () => Gb,
      Nb: () => Nb,
      O: () => Xb,
      Rb: () => Vb,
      S: () => Mb,
      U: () => Yb,
      Vb: () => qb,
      X: () => Jb,
      Xb: () => Wb,
      Yb: () => rb,
      _: () => gb,
      ab: () => hb,
      d: () => wb,
      db: () => Bb,
      f: () => Ab,
      fb: () => zb,
      h: () => fb,
      hb: () => Kb,
      i: () => Cb,
      jb: () => ib,
      k: () => db,
      l: () => eb,
      n: () => Qb,
      nb: () => tb,
      p: () => Tb,
      rb: () => Db,
      sb: () => yb,
      t: () => Ub,
      v: () => kb,
      vb: () => nb,
      xb: () => ub,
      y: () => ab
    });
    const kb = 32,
      Wb = 33.333333333333336,
      ab = {
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
      Tb = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Ub = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Ib = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Hb = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      fb = {
        Look: 0,
        Remesh: 1
      },
      Mb = 8,
      Xb = 1,
      nb = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      mb = {
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
      lb = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Qb = {
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
      eb = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Cb = 4,
      Nb = 4,
      Vb = 65535,
      Lb = {
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
      ub = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Yb = 88,
      hb = 0,
      Jb = 24,
      gb = 48,
      Bb = 80,
      tb = {
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
      yb = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Pb = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Db = {
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
      Eb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      ib = 65535,
      Ob = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Gb = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Kb = 2,
      Zb = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      zb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      qb = {
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
      db = {
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
      Ab = {
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
      rb = {
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
      ob = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);