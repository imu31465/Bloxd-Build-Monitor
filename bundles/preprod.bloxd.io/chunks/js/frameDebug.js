export const id = 33;
export const ids = [33];
export const modules = {
  8867: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return 0 === zz.length ? 0 : zz[Math.min(zz.length - 1, Math.floor(uz * zz.length))]
    }
    bz.d(uz, {
      c: () => Ez
    })
  },
  8860: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      FrameDebugLog: () => Xz,
      OUTLIER_BURST: () => pz,
      OUTLIER_MS: () => Oz,
      OUTLIER_REFILL_MS: () => dz,
      SUMMARY_MS: () => Hz,
      startFrameDebug: () => sz
    });
    var Ez = bz(4564),
      nz = bz(8867),
      iz = bz(2689),
      lz = bz(1074),
      Mz = bz(2740);
    class tz {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = zz => {
          const uz = zz;
          this.add(uz.startTime, uz.duration, uz.blockingDuration, (0, lz.q)(uz))
        }, this.onLongTask = zz => {
          this.add(zz.startTime, zz.duration, 0, 0)
        }, null !== (0, Mz.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Mz.d)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(zz, uz, bz, Ez) {
        this.entries.set([zz, uz, bz, Ez], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(zz, uz) {
        if (null === this.kind) return "long tasks n/a";
        let bz = 0,
          Ez = 0,
          nz = 0,
          iz = 0;
        for (let Mz = 0; Mz < this.size; Mz++) {
          const lz = 4 * Mz,
            tz = this.entries[lz] + this.entries[lz + 1];
          tz > zz && tz <= uz + 2 && (bz++, Ez += this.entries[lz + 1], nz += this.entries[lz + 2], iz += this.entries[lz + 3])
        }
        const lz = "loaf" === this.kind && bz > 0 ? ` (blocking ${nz.toFixed(0)}, script ${iz.toFixed(0)})` : "";
        return `${bz} ${this.kind} ${Ez.toFixed(0)} ms${lz}`
      }
    }
    const Hz = 2e4,
      Oz = 250,
      pz = 10,
      dz = 6e4,
      Fz = 8192;

    function Zz(zz) {
      return zz.toFixed(1)
    }

    function Rz(zz) {
      return zz.mainMs = 0, zz.renderMs = 0, zz.ticks = 0, zz.tickMs = 0, zz.rafs = 0, zz.pendingBefore = -1, zz.pendingMax = -1, zz.pendingAfter = -1, zz.meshes = -1, zz
    }

    function Kz() {
      return Rz({})
    }
    class wz {
      constructor() {
        this.intervals = new Float64Array(Fz), this.totals = Kz(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        Rz(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class Xz {
      constructor() {
        this.longTasks = new tz, this.summary = new wz, this.current = Kz(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = pz, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (zz, uz, bz, nz, iz, lz, Mz) => {
          this.ahead = zz.headerWord(Ez.A.Pacing) & Ez.P.AheadMask, this.frame(uz, bz, nz, iz, zz.headerWord(Ez.A.RenderUs) / 1e3, zz.headerWord(Ez.A.TicksRun), lz, zz.headerWord(Ez.A.RenderPending), Mz)
        }, this.jsFrame = (zz, uz, bz) => {
          this.frame(zz, uz, !0, bz, uz - zz, 0, 0, -1, -1)
        }, this.jsTick = zz => {
          this.current.mainMs += zz, this.current.ticks++, this.current.tickMs += zz
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const zz = performance.now();
          let uz = 0;
          for (const bz of this.waiting) {
            if (bz.dueMs > zz) {
              this.waiting[uz++] = bz;
              continue
            }
            const Ez = [`long frame ${Zz(bz.intervalMs)} ms ending at ${Zz(bz.endMs)} ms: main ${Zz(bz.mainMs)} (render ${Zz(bz.renderMs)}, ${bz.ticks} ticks ${Zz(bz.tickMs)}), outside ${Zz(bz.intervalMs-bz.mainMs)}`, `${bz.rafs} rafs`];
            bz.pendingBefore >= 0 && Ez.push(`pending ${bz.pendingBefore} -> ${bz.pendingAfter} (max ${bz.pendingMax})`), bz.meshes >= 0 && Ez.push(`${bz.meshes} meshes landed`), Ez.push(this.longTasks.describe(bz.endMs - bz.intervalMs, bz.endMs)), (0, iz.i)("frame", Ez.join("; "))
          }
          this.waiting.length = uz, uz > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - zz))
        }, this.flush = () => {
          const zz = this.summary,
            uz = zz.totals;
          if (0 === zz.frames) return zz.undrawn > 0 && (0, iz.i)("frame", `${Hz/1e3}s: no frames drawn, ${zz.undrawn} undrawn, pending max ${uz.pendingMax}`), void zz.reset();
          const bz = zz.intervals.subarray(0, Math.min(zz.frames, Fz)).sort(),
            Ez = [`${zz.frames} frames, median ${Zz((0,nz.c)(bz,.5))} p95 ${Zz((0,nz.c)(bz,.95))} max ${Zz(zz.maxMs)} ms, ${zz.slow} over 50, ${zz.shown+zz.dropped} over ${Oz}`, `${uz.rafs} rafs, ${zz.undrawn} undrawn`, `main ${Zz(uz.mainMs)} ms (render ${Zz(uz.renderMs)}, ${uz.ticks} ticks ${Zz(uz.tickMs)})`];
          uz.pendingMax >= 0 && Ez.push(`pending max ${uz.pendingMax}`), uz.meshes >= 0 && Ez.push(`${uz.meshes} meshes landed`), this.ahead >= 0 && Ez.push(`${this.ahead} frames ahead`), Ez.push(`outliers ${zz.shown} logged, ${zz.dropped} dropped`), (0, iz.i)("frame", `${Hz/1e3}s: ${Ez.join("; ")}`), zz.reset()
        }, setInterval(this.flush, Hz), document.addEventListener("visibilitychange", this.restart)
      }
      start(zz, uz) {
        var bz;
        this.restart(), (0, iz.i)("frame", `start: ${zz} client, ${uz}, dpr ${window.devicePixelRatio}, long tasks ${null!==(bz=this.longTasks.kind)&&void 0!==bz?bz:"n/a"}; a summary each ${Hz/1e3} s in game, outliers over ${Oz} ms`)
      }
      frame(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        if (!Ez) return this.restart(), void(this.lastPending = Mz);
        const Hz = this.current;
        bz ? (this.lastDrawnStartMs >= 0 && (Hz.pendingAfter = this.lastPending, Hz.meshes = tz < 0 ? -1 : tz - this.lastMeshes, this.closeInterval(zz - this.lastDrawnStartMs, zz)), this.lastDrawnStartMs = zz, Rz(Hz).pendingBefore = this.lastPending, this.lastMeshes = tz) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, Hz.mainMs += uz - zz, Hz.renderMs += nz, Hz.ticks += iz, Hz.tickMs += lz, Hz.pendingMax = Math.max(Hz.pendingMax, Mz), this.lastPending = Mz, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, Mz)
      }
      closeInterval(zz, uz) {
        const bz = this.summary,
          Ez = this.current;
        bz.frames < Fz && (bz.intervals[bz.frames] = zz), bz.frames++, bz.maxMs = Math.max(bz.maxMs, zz);
        const nz = bz.totals;
        nz.mainMs += Ez.mainMs, nz.renderMs += Ez.renderMs, nz.ticks += Ez.ticks, nz.tickMs += Ez.tickMs, nz.rafs += Ez.rafs, nz.meshes = Ez.meshes < 0 ? -1 : Math.max(0, nz.meshes) + Ez.meshes, zz > 50 && bz.slow++, zz > Oz && this.outlier(zz, uz)
      }
      outlier(zz, uz) {
        const bz = Math.floor((uz - this.lastRefillMs) / dz);
        bz > 0 && (this.tokens = Math.min(pz, this.tokens + bz), this.lastRefillMs += bz * dz), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: uz,
          intervalMs: zz,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let fz = null;

    function sz(zz, uz) {
      return fz ??= new Xz, fz.start(zz, uz), fz
    }
  },
  4564: (zz, uz, bz) => {
    bz.d(uz, {
      $: () => Jz,
      A: () => iz,
      Ab: () => Pz,
      Cb: () => Uz,
      E: () => Zz,
      Eb: () => az,
      Gb: () => mz,
      I: () => Wz,
      Jb: () => qz,
      M: () => Hz,
      Mb: () => fz,
      N: () => Rz,
      Ob: () => sz,
      P: () => tz,
      Q: () => dz,
      Qb: () => gz,
      S: () => pz,
      Tb: () => nz,
      W: () => Nz,
      Wb: () => Qz,
      Z: () => xz,
      ab: () => vz,
      bb: () => Az,
      c: () => Dz,
      cb: () => cz,
      fb: () => hz,
      g: () => yz,
      j: () => Oz,
      jb: () => Vz,
      m: () => Xz,
      mb: () => Tz,
      o: () => Sz,
      pb: () => Gz,
      q: () => wz,
      qb: () => Lz,
      s: () => Kz,
      u: () => lz,
      ub: () => Fz,
      vb: () => oz,
      wb: () => rz,
      x: () => Mz,
      y: () => Ez
    });
    const Ez = 32,
      nz = 33.333333333333336,
      iz = {
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
      lz = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Mz = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      tz = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Hz = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Oz = {
        Look: 0,
        Remesh: 1
      },
      pz = 8,
      dz = 1,
      Fz = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Zz = {
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
      Rz = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Kz = {
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
      wz = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Xz = 4,
      fz = 4,
      sz = 65535,
      rz = {
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
      oz = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Nz = 88,
      vz = 0,
      xz = 24,
      Jz = 48,
      Az = 80,
      Tz = {
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
      Lz = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Pz = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Gz = {
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
      az = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Vz = 65535,
      mz = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      qz = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      hz = 2,
      Uz = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      cz = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      gz = {
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
      Sz = {
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
      yz = {
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
      Dz = 8,
      Qz = {
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
      Wz = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);