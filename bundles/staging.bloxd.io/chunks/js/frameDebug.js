export const id = 33;
export const ids = [33];
export const modules = {
  8878: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return 0 === kk.length ? 0 : kk[Math.min(kk.length - 1, Math.floor(Fk * kk.length))]
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  },
  8876: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      FrameDebugLog: () => Wk,
      OUTLIER_BURST: () => Vk,
      OUTLIER_MS: () => sk,
      OUTLIER_REFILL_MS: () => Jk,
      SUMMARY_MS: () => dk,
      startFrameDebug: () => ik
    });
    var Rk = Bk(4531),
      tk = Bk(8878),
      ak = Bk(2711),
      Xk = Bk(1058),
      bk = Bk(2766);
    class wk {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = kk => {
          const Fk = kk;
          this.add(Fk.startTime, Fk.duration, Fk.blockingDuration, (0, Xk.j)(Fk))
        }, this.onLongTask = kk => {
          this.add(kk.startTime, kk.duration, 0, 0)
        }, null !== (0, bk.c)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, bk.c)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(kk, Fk, Bk, Rk) {
        this.entries.set([kk, Fk, Bk, Rk], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(kk, Fk) {
        if (null === this.kind) return "long tasks n/a";
        let Bk = 0,
          Rk = 0,
          tk = 0,
          ak = 0;
        for (let bk = 0; bk < this.size; bk++) {
          const Xk = 4 * bk,
            wk = this.entries[Xk] + this.entries[Xk + 1];
          wk > kk && wk <= Fk + 2 && (Bk++, Rk += this.entries[Xk + 1], tk += this.entries[Xk + 2], ak += this.entries[Xk + 3])
        }
        const Xk = "loaf" === this.kind && Bk > 0 ? ` (blocking ${tk.toFixed(0)}, script ${ak.toFixed(0)})` : "";
        return `${Bk} ${this.kind} ${Rk.toFixed(0)} ms${Xk}`
      }
    }
    const dk = 2e4,
      sk = 250,
      Vk = 10,
      Jk = 6e4,
      Ak = 8192;

    function ek(kk) {
      return kk.toFixed(1)
    }

    function yk(kk) {
      return kk.mainMs = 0, kk.renderMs = 0, kk.ticks = 0, kk.tickMs = 0, kk.rafs = 0, kk.pendingBefore = -1, kk.pendingMax = -1, kk.pendingAfter = -1, kk.meshes = -1, kk
    }

    function fk() {
      return yk({})
    }
    class mk {
      constructor() {
        this.intervals = new Float64Array(Ak), this.totals = fk(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        yk(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class Wk {
      constructor() {
        this.longTasks = new wk, this.summary = new mk, this.current = fk(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = Vk, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (kk, Fk, Bk, tk, ak, Xk, bk) => {
          this.ahead = kk.headerWord(Rk.z.Pacing) & Rk.H.AheadMask, this.frame(Fk, Bk, tk, ak, kk.headerWord(Rk.z.RenderUs) / 1e3, kk.headerWord(Rk.z.TicksRun), Xk, kk.headerWord(Rk.z.RenderPending), bk)
        }, this.jsFrame = (kk, Fk, Bk) => {
          this.frame(kk, Fk, !0, Bk, Fk - kk, 0, 0, -1, -1)
        }, this.jsTick = kk => {
          this.current.mainMs += kk, this.current.ticks++, this.current.tickMs += kk
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const kk = performance.now();
          let Fk = 0;
          for (const Bk of this.waiting) {
            if (Bk.dueMs > kk) {
              this.waiting[Fk++] = Bk;
              continue
            }
            const Rk = [`long frame ${ek(Bk.intervalMs)} ms ending at ${ek(Bk.endMs)} ms: main ${ek(Bk.mainMs)} (render ${ek(Bk.renderMs)}, ${Bk.ticks} ticks ${ek(Bk.tickMs)}), outside ${ek(Bk.intervalMs-Bk.mainMs)}`, `${Bk.rafs} rafs`];
            Bk.pendingBefore >= 0 && Rk.push(`pending ${Bk.pendingBefore} -> ${Bk.pendingAfter} (max ${Bk.pendingMax})`), Bk.meshes >= 0 && Rk.push(`${Bk.meshes} meshes landed`), Rk.push(this.longTasks.describe(Bk.endMs - Bk.intervalMs, Bk.endMs)), (0, ak.k)("frame", Rk.join("; "))
          }
          this.waiting.length = Fk, Fk > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - kk))
        }, this.flush = () => {
          const kk = this.summary,
            Fk = kk.totals;
          if (0 === kk.frames) return kk.undrawn > 0 && (0, ak.k)("frame", `${dk/1e3}s: no frames drawn, ${kk.undrawn} undrawn, pending max ${Fk.pendingMax}`), void kk.reset();
          const Bk = kk.intervals.subarray(0, Math.min(kk.frames, Ak)).sort(),
            Rk = [`${kk.frames} frames, median ${ek((0,tk.c)(Bk,.5))} p95 ${ek((0,tk.c)(Bk,.95))} max ${ek(kk.maxMs)} ms, ${kk.slow} over 50, ${kk.shown+kk.dropped} over ${sk}`, `${Fk.rafs} rafs, ${kk.undrawn} undrawn`, `main ${ek(Fk.mainMs)} ms (render ${ek(Fk.renderMs)}, ${Fk.ticks} ticks ${ek(Fk.tickMs)})`];
          Fk.pendingMax >= 0 && Rk.push(`pending max ${Fk.pendingMax}`), Fk.meshes >= 0 && Rk.push(`${Fk.meshes} meshes landed`), this.ahead >= 0 && Rk.push(`${this.ahead} frames ahead`), Rk.push(`outliers ${kk.shown} logged, ${kk.dropped} dropped`), (0, ak.k)("frame", `${dk/1e3}s: ${Rk.join("; ")}`), kk.reset()
        }, setInterval(this.flush, dk), document.addEventListener("visibilitychange", this.restart)
      }
      start(kk, Fk) {
        var Bk;
        this.restart(), (0, ak.k)("frame", `start: ${kk} client, ${Fk}, dpr ${window.devicePixelRatio}, long tasks ${null!==(Bk=this.longTasks.kind)&&void 0!==Bk?Bk:"n/a"}; a summary each ${dk/1e3} s in game, outliers over ${sk} ms`)
      }
      frame(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        if (!Rk) return this.restart(), void(this.lastPending = bk);
        const dk = this.current;
        Bk ? (this.lastDrawnStartMs >= 0 && (dk.pendingAfter = this.lastPending, dk.meshes = wk < 0 ? -1 : wk - this.lastMeshes, this.closeInterval(kk - this.lastDrawnStartMs, kk)), this.lastDrawnStartMs = kk, yk(dk).pendingBefore = this.lastPending, this.lastMeshes = wk) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, dk.mainMs += Fk - kk, dk.renderMs += tk, dk.ticks += ak, dk.tickMs += Xk, dk.pendingMax = Math.max(dk.pendingMax, bk), this.lastPending = bk, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, bk)
      }
      closeInterval(kk, Fk) {
        const Bk = this.summary,
          Rk = this.current;
        Bk.frames < Ak && (Bk.intervals[Bk.frames] = kk), Bk.frames++, Bk.maxMs = Math.max(Bk.maxMs, kk);
        const tk = Bk.totals;
        tk.mainMs += Rk.mainMs, tk.renderMs += Rk.renderMs, tk.ticks += Rk.ticks, tk.tickMs += Rk.tickMs, tk.rafs += Rk.rafs, tk.meshes = Rk.meshes < 0 ? -1 : Math.max(0, tk.meshes) + Rk.meshes, kk > 50 && Bk.slow++, kk > sk && this.outlier(kk, Fk)
      }
      outlier(kk, Fk) {
        const Bk = Math.floor((Fk - this.lastRefillMs) / Jk);
        Bk > 0 && (this.tokens = Math.min(Vk, this.tokens + Bk), this.lastRefillMs += Bk * Jk), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: Fk,
          intervalMs: kk,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let vk = null;

    function ik(kk, Fk) {
      return vk ??= new Wk, vk.start(kk, Fk), vk
    }
  },
  4531: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      $: () => Hk,
      A: () => ek,
      Cb: () => zk,
      D: () => Kk,
      Db: () => ck,
      F: () => dk,
      Fb: () => Tk,
      G: () => yk,
      H: () => wk,
      Jb: () => rk,
      Kb: () => vk,
      L: () => Jk,
      Lb: () => ik,
      N: () => Vk,
      O: () => Ok,
      Ob: () => hk,
      R: () => Sk,
      Rb: () => tk,
      T: () => Nk,
      Tb: () => pk,
      X: () => Ek,
      bb: () => Pk,
      d: () => Zk,
      fb: () => Dk,
      g: () => Ck,
      h: () => sk,
      i: () => Wk,
      j: () => qk,
      jb: () => Gk,
      kb: () => uk,
      m: () => mk,
      ob: () => Uk,
      pb: () => Mk,
      q: () => fk,
      qb: () => Ak,
      t: () => Xk,
      tb: () => Lk,
      u: () => bk,
      vb: () => Yk,
      y: () => Rk,
      yb: () => gk,
      z: () => ak
    });
    const Rk = 32,
      tk = 33.333333333333336,
      ak = {
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
      Xk = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      bk = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      wk = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      dk = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      sk = {
        Look: 0,
        Remesh: 1
      },
      Vk = 8,
      Jk = 1,
      Ak = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      ek = {
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
      yk = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      fk = {
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
      mk = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Wk = 4,
      vk = 4,
      ik = 65535,
      Yk = {
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
      Lk = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Ok = 88,
      Ek = 0,
      Sk = 24,
      Nk = 48,
      Hk = 80,
      uk = {
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
      Mk = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      gk = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Uk = {
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
      ck = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Gk = 65535,
      Tk = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      rk = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Dk = 2,
      zk = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Pk = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      hk = {
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
      qk = {
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
      Ck = {
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
      Zk = 8,
      pk = {
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
      Kk = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);