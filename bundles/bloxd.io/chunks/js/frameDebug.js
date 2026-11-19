export const id = 33;
export const ids = [33];
export const modules = {
  8629: (YY, rY, DY) => {
    function FY(YY, rY) {
      return 0 === YY.length ? 0 : YY[Math.min(YY.length - 1, Math.floor(rY * YY.length))]
    }
    DY.d(rY, {
      d: () => FY
    })
  },
  8621: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      FrameDebugLog: () => EY,
      OUTLIER_BURST: () => uY,
      OUTLIER_MS: () => vY,
      OUTLIER_REFILL_MS: () => sY,
      SUMMARY_MS: () => aY,
      startFrameDebug: () => VY
    });
    var FY = DY(4382),
      AY = DY(8629),
      IY = DY(2565),
      RY = DY(1119),
      OY = DY(2606);
    class gY {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = YY => {
          const rY = YY;
          this.add(rY.startTime, rY.duration, rY.blockingDuration, (0, RY.k)(rY))
        }, this.onLongTask = YY => {
          this.add(YY.startTime, YY.duration, 0, 0)
        }, null !== (0, OY.c)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, OY.c)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(YY, rY, DY, FY) {
        this.entries.set([YY, rY, DY, FY], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(YY, rY) {
        if (null === this.kind) return "long tasks n/a";
        let DY = 0,
          FY = 0,
          AY = 0,
          IY = 0;
        for (let OY = 0; OY < this.size; OY++) {
          const RY = 4 * OY,
            gY = this.entries[RY] + this.entries[RY + 1];
          gY > YY && gY <= rY + 2 && (DY++, FY += this.entries[RY + 1], AY += this.entries[RY + 2], IY += this.entries[RY + 3])
        }
        const RY = "loaf" === this.kind && DY > 0 ? ` (blocking ${AY.toFixed(0)}, script ${IY.toFixed(0)})` : "";
        return `${DY} ${this.kind} ${FY.toFixed(0)} ms${RY}`
      }
    }
    const aY = 2e4,
      vY = 250,
      uY = 10,
      sY = 6e4,
      iY = 8192;

    function yY(YY) {
      return YY.toFixed(1)
    }

    function QY(YY) {
      return YY.mainMs = 0, YY.renderMs = 0, YY.ticks = 0, YY.tickMs = 0, YY.rafs = 0, YY.pendingBefore = -1, YY.pendingMax = -1, YY.pendingAfter = -1, YY.meshes = -1, YY
    }

    function oY() {
      return QY({})
    }
    class WY {
      constructor() {
        this.intervals = new Float64Array(iY), this.totals = oY(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        QY(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class EY {
      constructor() {
        this.longTasks = new gY, this.summary = new WY, this.current = oY(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = uY, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (YY, rY, DY, AY, IY, RY, OY) => {
          this.ahead = YY.headerWord(FY.B.Pacing) & FY.O.AheadMask, this.frame(rY, DY, AY, IY, YY.headerWord(FY.B.RenderUs) / 1e3, YY.headerWord(FY.B.TicksRun), RY, YY.headerWord(FY.B.RenderPending), OY)
        }, this.jsFrame = (YY, rY, DY) => {
          this.frame(YY, rY, !0, DY, rY - YY, 0, 0, -1, -1)
        }, this.jsTick = YY => {
          this.current.mainMs += YY, this.current.ticks++, this.current.tickMs += YY
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const YY = performance.now();
          let rY = 0;
          for (const DY of this.waiting) {
            if (DY.dueMs > YY) {
              this.waiting[rY++] = DY;
              continue
            }
            const FY = [`long frame ${yY(DY.intervalMs)} ms ending at ${yY(DY.endMs)} ms: main ${yY(DY.mainMs)} (render ${yY(DY.renderMs)}, ${DY.ticks} ticks ${yY(DY.tickMs)}), outside ${yY(DY.intervalMs-DY.mainMs)}`, `${DY.rafs} rafs`];
            DY.pendingBefore >= 0 && FY.push(`pending ${DY.pendingBefore} -> ${DY.pendingAfter} (max ${DY.pendingMax})`), DY.meshes >= 0 && FY.push(`${DY.meshes} meshes landed`), FY.push(this.longTasks.describe(DY.endMs - DY.intervalMs, DY.endMs)), (0, IY.n)("frame", FY.join("; "))
          }
          this.waiting.length = rY, rY > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - YY))
        }, this.flush = () => {
          const YY = this.summary,
            rY = YY.totals;
          if (0 === YY.frames) return YY.undrawn > 0 && (0, IY.n)("frame", `${aY/1e3}s: no frames drawn, ${YY.undrawn} undrawn, pending max ${rY.pendingMax}`), void YY.reset();
          const DY = YY.intervals.subarray(0, Math.min(YY.frames, iY)).sort(),
            FY = [`${YY.frames} frames, median ${yY((0,AY.d)(DY,.5))} p95 ${yY((0,AY.d)(DY,.95))} max ${yY(YY.maxMs)} ms, ${YY.slow} over 50, ${YY.shown+YY.dropped} over ${vY}`, `${rY.rafs} rafs, ${YY.undrawn} undrawn`, `main ${yY(rY.mainMs)} ms (render ${yY(rY.renderMs)}, ${rY.ticks} ticks ${yY(rY.tickMs)})`];
          rY.pendingMax >= 0 && FY.push(`pending max ${rY.pendingMax}`), rY.meshes >= 0 && FY.push(`${rY.meshes} meshes landed`), this.ahead >= 0 && FY.push(`${this.ahead} frames ahead`), FY.push(`outliers ${YY.shown} logged, ${YY.dropped} dropped`), (0, IY.n)("frame", `${aY/1e3}s: ${FY.join("; ")}`), YY.reset()
        }, setInterval(this.flush, aY), document.addEventListener("visibilitychange", this.restart)
      }
      start(YY, rY) {
        var DY;
        this.restart(), (0, IY.n)("frame", `start: ${YY} client, ${rY}, dpr ${window.devicePixelRatio}, long tasks ${null!==(DY=this.longTasks.kind)&&void 0!==DY?DY:"n/a"}; a summary each ${aY/1e3} s in game, outliers over ${vY} ms`)
      }
      frame(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        if (!FY) return this.restart(), void(this.lastPending = OY);
        const aY = this.current;
        DY ? (this.lastDrawnStartMs >= 0 && (aY.pendingAfter = this.lastPending, aY.meshes = gY < 0 ? -1 : gY - this.lastMeshes, this.closeInterval(YY - this.lastDrawnStartMs, YY)), this.lastDrawnStartMs = YY, QY(aY).pendingBefore = this.lastPending, this.lastMeshes = gY) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, aY.mainMs += rY - YY, aY.renderMs += AY, aY.ticks += IY, aY.tickMs += RY, aY.pendingMax = Math.max(aY.pendingMax, OY), this.lastPending = OY, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, OY)
      }
      closeInterval(YY, rY) {
        const DY = this.summary,
          FY = this.current;
        DY.frames < iY && (DY.intervals[DY.frames] = YY), DY.frames++, DY.maxMs = Math.max(DY.maxMs, YY);
        const AY = DY.totals;
        AY.mainMs += FY.mainMs, AY.renderMs += FY.renderMs, AY.ticks += FY.ticks, AY.tickMs += FY.tickMs, AY.rafs += FY.rafs, AY.meshes = FY.meshes < 0 ? -1 : Math.max(0, AY.meshes) + FY.meshes, YY > 50 && DY.slow++, YY > vY && this.outlier(YY, rY)
      }
      outlier(YY, rY) {
        const DY = Math.floor((rY - this.lastRefillMs) / sY);
        DY > 0 && (this.tokens = Math.min(uY, this.tokens + DY), this.lastRefillMs += DY * sY), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: rY,
          intervalMs: YY,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let mY = null;

    function VY(YY, rY) {
      return mY ??= new EY, mY.start(YY, rY), mY
    }
  },
  4382: (YY, rY, DY) => {
    DY.d(rY, {
      Ab: () => SY,
      B: () => IY,
      C: () => yY,
      Cb: () => zY,
      F: () => kY,
      Gb: () => JY,
      J: () => aY,
      Jb: () => CY,
      L: () => QY,
      Mb: () => jY,
      O: () => gY,
      Ob: () => hY,
      Qb: () => mY,
      R: () => sY,
      Sb: () => VY,
      T: () => uY,
      U: () => TY,
      Ub: () => wY,
      Wb: () => AY,
      Y: () => NY,
      _: () => BY,
      _b: () => pY,
      ab: () => eY,
      d: () => qY,
      db: () => cY,
      f: () => XY,
      fb: () => MY,
      j: () => vY,
      jb: () => dY,
      l: () => EY,
      lb: () => fY,
      nb: () => KY,
      o: () => bY,
      p: () => WY,
      pb: () => ZY,
      rb: () => HY,
      s: () => oY,
      u: () => RY,
      vb: () => iY,
      y: () => OY,
      yb: () => lY,
      z: () => FY
    });
    const FY = 32,
      AY = 33.333333333333336,
      IY = {
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
      RY = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      OY = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      gY = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      aY = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      vY = {
        Look: 0,
        Remesh: 1
      },
      uY = 8,
      sY = 1,
      iY = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      yY = {
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
      QY = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      oY = {
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
      WY = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      EY = 4,
      mY = 4,
      VY = 65535,
      SY = {
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
      lY = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      TY = 88,
      eY = 0,
      NY = 24,
      BY = 48,
      cY = 80,
      KY = {
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
      HY = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      zY = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      ZY = {
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
      CY = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      fY = 65535,
      jY = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      hY = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      dY = 2,
      JY = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      MY = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      wY = {
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
      bY = {
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
      XY = {
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
      qY = 8,
      pY = {
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
      kY = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);