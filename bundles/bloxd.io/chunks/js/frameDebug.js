export const id = 33;
export const ids = [33];
export const modules = {
  8710: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return 0 === zz.length ? 0 : zz[Math.min(zz.length - 1, Math.floor(tz * zz.length))]
    }
    sz.d(tz, {
      e: () => Fz
    })
  },
  8704: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      FrameDebugLog: () => Bz,
      OUTLIER_BURST: () => uz,
      OUTLIER_MS: () => Kz,
      OUTLIER_REFILL_MS: () => Nz,
      SUMMARY_MS: () => Uz,
      startFrameDebug: () => rz
    });
    var Fz = sz(4436),
      Wz = sz(8710),
      Xz = sz(2637),
      Oz = sz(1073),
      oz = sz(2715);
    class vz {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = zz => {
          const tz = zz;
          this.add(tz.startTime, tz.duration, tz.blockingDuration, (0, Oz.r)(tz))
        }, this.onLongTask = zz => {
          this.add(zz.startTime, zz.duration, 0, 0)
        }, null !== (0, oz.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, oz.e)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(zz, tz, sz, Fz) {
        this.entries.set([zz, tz, sz, Fz], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(zz, tz) {
        if (null === this.kind) return "long tasks n/a";
        let sz = 0,
          Fz = 0,
          Wz = 0,
          Xz = 0;
        for (let oz = 0; oz < this.size; oz++) {
          const Oz = 4 * oz,
            vz = this.entries[Oz] + this.entries[Oz + 1];
          vz > zz && vz <= tz + 2 && (sz++, Fz += this.entries[Oz + 1], Wz += this.entries[Oz + 2], Xz += this.entries[Oz + 3])
        }
        const Oz = "loaf" === this.kind && sz > 0 ? ` (blocking ${Wz.toFixed(0)}, script ${Xz.toFixed(0)})` : "";
        return `${sz} ${this.kind} ${Fz.toFixed(0)} ms${Oz}`
      }
    }
    const Uz = 2e4,
      Kz = 250,
      uz = 10,
      Nz = 6e4,
      bz = 8192;

    function wz(zz) {
      return zz.toFixed(1)
    }

    function Dz(zz) {
      return zz.mainMs = 0, zz.renderMs = 0, zz.ticks = 0, zz.tickMs = 0, zz.rafs = 0, zz.pendingBefore = -1, zz.pendingMax = -1, zz.pendingAfter = -1, zz.meshes = -1, zz
    }

    function gz() {
      return Dz({})
    }
    class Hz {
      constructor() {
        this.intervals = new Float64Array(bz), this.totals = gz(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        Dz(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class Bz {
      constructor() {
        this.longTasks = new vz, this.summary = new Hz, this.current = gz(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = uz, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (zz, tz, sz, Wz, Xz, Oz, oz) => {
          this.ahead = zz.headerWord(Fz.D.Pacing) & Fz.R.AheadMask, this.frame(tz, sz, Wz, Xz, zz.headerWord(Fz.D.RenderUs) / 1e3, zz.headerWord(Fz.D.TicksRun), Oz, zz.headerWord(Fz.D.RenderPending), oz)
        }, this.jsFrame = (zz, tz, sz) => {
          this.frame(zz, tz, !0, sz, tz - zz, 0, 0, -1, -1)
        }, this.jsTick = zz => {
          this.current.mainMs += zz, this.current.ticks++, this.current.tickMs += zz
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const zz = performance.now();
          let tz = 0;
          for (const sz of this.waiting) {
            if (sz.dueMs > zz) {
              this.waiting[tz++] = sz;
              continue
            }
            const Fz = [`long frame ${wz(sz.intervalMs)} ms ending at ${wz(sz.endMs)} ms: main ${wz(sz.mainMs)} (render ${wz(sz.renderMs)}, ${sz.ticks} ticks ${wz(sz.tickMs)}), outside ${wz(sz.intervalMs-sz.mainMs)}`, `${sz.rafs} rafs`];
            sz.pendingBefore >= 0 && Fz.push(`pending ${sz.pendingBefore} -> ${sz.pendingAfter} (max ${sz.pendingMax})`), sz.meshes >= 0 && Fz.push(`${sz.meshes} meshes landed`), Fz.push(this.longTasks.describe(sz.endMs - sz.intervalMs, sz.endMs)), (0, Xz.g)("frame", Fz.join("; "))
          }
          this.waiting.length = tz, tz > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - zz))
        }, this.flush = () => {
          const zz = this.summary,
            tz = zz.totals;
          if (0 === zz.frames) return zz.undrawn > 0 && (0, Xz.g)("frame", `${Uz/1e3}s: no frames drawn, ${zz.undrawn} undrawn, pending max ${tz.pendingMax}`), void zz.reset();
          const sz = zz.intervals.subarray(0, Math.min(zz.frames, bz)).sort(),
            Fz = [`${zz.frames} frames, median ${wz((0,Wz.e)(sz,.5))} p95 ${wz((0,Wz.e)(sz,.95))} max ${wz(zz.maxMs)} ms, ${zz.slow} over 50, ${zz.shown+zz.dropped} over ${Kz}`, `${tz.rafs} rafs, ${zz.undrawn} undrawn`, `main ${wz(tz.mainMs)} ms (render ${wz(tz.renderMs)}, ${tz.ticks} ticks ${wz(tz.tickMs)})`];
          tz.pendingMax >= 0 && Fz.push(`pending max ${tz.pendingMax}`), tz.meshes >= 0 && Fz.push(`${tz.meshes} meshes landed`), this.ahead >= 0 && Fz.push(`${this.ahead} frames ahead`), Fz.push(`outliers ${zz.shown} logged, ${zz.dropped} dropped`), (0, Xz.g)("frame", `${Uz/1e3}s: ${Fz.join("; ")}`), zz.reset()
        }, setInterval(this.flush, Uz), document.addEventListener("visibilitychange", this.restart)
      }
      start(zz, tz) {
        var sz;
        this.restart(), (0, Xz.g)("frame", `start: ${zz} client, ${tz}, dpr ${window.devicePixelRatio}, long tasks ${null!==(sz=this.longTasks.kind)&&void 0!==sz?sz:"n/a"}; a summary each ${Uz/1e3} s in game, outliers over ${Kz} ms`)
      }
      frame(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        if (!Fz) return this.restart(), void(this.lastPending = oz);
        const Uz = this.current;
        sz ? (this.lastDrawnStartMs >= 0 && (Uz.pendingAfter = this.lastPending, Uz.meshes = vz < 0 ? -1 : vz - this.lastMeshes, this.closeInterval(zz - this.lastDrawnStartMs, zz)), this.lastDrawnStartMs = zz, Dz(Uz).pendingBefore = this.lastPending, this.lastMeshes = vz) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, Uz.mainMs += tz - zz, Uz.renderMs += Wz, Uz.ticks += Xz, Uz.tickMs += Oz, Uz.pendingMax = Math.max(Uz.pendingMax, oz), this.lastPending = oz, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, oz)
      }
      closeInterval(zz, tz) {
        const sz = this.summary,
          Fz = this.current;
        sz.frames < bz && (sz.intervals[sz.frames] = zz), sz.frames++, sz.maxMs = Math.max(sz.maxMs, zz);
        const Wz = sz.totals;
        Wz.mainMs += Fz.mainMs, Wz.renderMs += Fz.renderMs, Wz.ticks += Fz.ticks, Wz.tickMs += Fz.tickMs, Wz.rafs += Fz.rafs, Wz.meshes = Fz.meshes < 0 ? -1 : Math.max(0, Wz.meshes) + Fz.meshes, zz > 50 && sz.slow++, zz > Kz && this.outlier(zz, tz)
      }
      outlier(zz, tz) {
        const sz = Math.floor((tz - this.lastRefillMs) / Nz);
        sz > 0 && (this.tokens = Math.min(uz, this.tokens + sz), this.lastRefillMs += sz * Nz), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: tz,
          intervalMs: zz,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let Pz = null;

    function rz(zz, tz) {
      return Pz ??= new Bz, Pz.start(zz, tz), Pz
    }
  },
  4436: (zz, tz, sz) => {
    sz.d(tz, {
      D: () => Xz,
      Db: () => Gz,
      G: () => wz,
      Gb: () => bz,
      Hb: () => xz,
      Ib: () => Yz,
      J: () => az,
      Jb: () => Tz,
      K: () => Uz,
      Nb: () => hz,
      O: () => Dz,
      Ob: () => jz,
      R: () => vz,
      Sb: () => yz,
      V: () => Nz,
      Wb: () => Mz,
      Xb: () => Pz,
      Y: () => uz,
      _b: () => rz,
      ab: () => mz,
      ac: () => kz,
      c: () => lz,
      cb: () => Iz,
      dc: () => Wz,
      eb: () => Cz,
      fc: () => nz,
      g: () => Lz,
      gb: () => Jz,
      j: () => Kz,
      jb: () => ez,
      n: () => Bz,
      nb: () => Qz,
      q: () => iz,
      qb: () => dz,
      r: () => Hz,
      s: () => gz,
      tb: () => Az,
      v: () => Oz,
      vb: () => Zz,
      x: () => oz,
      z: () => Fz,
      zb: () => cz
    });
    const Fz = 32,
      Wz = 33.333333333333336,
      Xz = {
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
      Oz = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      oz = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      vz = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Uz = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Kz = {
        Look: 0,
        Remesh: 1
      },
      uz = 8,
      Nz = 1,
      bz = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      wz = {
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
      Dz = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      gz = {
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
      Hz = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Bz = 4,
      Pz = 4,
      rz = 65535,
      Yz = {
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
      xz = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      mz = 88,
      Jz = 0,
      Iz = 24,
      Cz = 48,
      ez = 80,
      Zz = {
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
      Gz = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Tz = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      cz = {
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
      jz = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Az = 65535,
      yz = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Mz = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      dz = 2,
      hz = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Qz = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      kz = {
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
      iz = {
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
      Lz = {
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
      lz = 8,
      nz = {
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
      az = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);