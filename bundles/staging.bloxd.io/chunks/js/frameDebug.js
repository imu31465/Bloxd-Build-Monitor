export const id = 33;
export const ids = [33];
export const modules = {
  8867: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return 0 === vv.length ? 0 : vv[Math.min(vv.length - 1, Math.floor(zv * vv.length))]
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  8863: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      FrameDebugLog: () => cv,
      OUTLIER_BURST: () => Tv,
      OUTLIER_MS: () => lv,
      OUTLIER_REFILL_MS: () => Wv,
      SUMMARY_MS: () => Nv,
      startFrameDebug: () => mv
    });
    var hv = Pv(4542),
      Sv = Pv(8867),
      ev = Pv(2682),
      gv = Pv(1072),
      pv = Pv(2750);
    class dv {
      constructor() {
        this.kind = void 0, this.entries = new Float64Array(256), this.next = 0, this.size = 0, this.onLongFrame = vv => {
          const zv = vv;
          this.add(zv.startTime, zv.duration, zv.blockingDuration, (0, gv.n)(zv))
        }, this.onLongTask = vv => {
          this.add(vv.startTime, vv.duration, 0, 0)
        }, null !== (0, pv.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, pv.b)("longtask", this.onLongTask) ? "longtask" : null
      }
      add(vv, zv, Pv, hv) {
        this.entries.set([vv, zv, Pv, hv], 4 * this.next), this.next = (this.next + 1) % 64, this.size = Math.min(this.size + 1, 64)
      }
      describe(vv, zv) {
        if (null === this.kind) return "long tasks n/a";
        let Pv = 0,
          hv = 0,
          Sv = 0,
          ev = 0;
        for (let pv = 0; pv < this.size; pv++) {
          const gv = 4 * pv,
            dv = this.entries[gv] + this.entries[gv + 1];
          dv > vv && dv <= zv + 2 && (Pv++, hv += this.entries[gv + 1], Sv += this.entries[gv + 2], ev += this.entries[gv + 3])
        }
        const gv = "loaf" === this.kind && Pv > 0 ? ` (blocking ${Sv.toFixed(0)}, script ${ev.toFixed(0)})` : "";
        return `${Pv} ${this.kind} ${hv.toFixed(0)} ms${gv}`
      }
    }
    const Nv = 2e4,
      lv = 250,
      Tv = 10,
      Wv = 6e4,
      wv = 8192;

    function av(vv) {
      return vv.toFixed(1)
    }

    function sv(vv) {
      return vv.mainMs = 0, vv.renderMs = 0, vv.ticks = 0, vv.tickMs = 0, vv.rafs = 0, vv.pendingBefore = -1, vv.pendingMax = -1, vv.pendingAfter = -1, vv.meshes = -1, vv
    }

    function Cv() {
      return sv({})
    }
    class iv {
      constructor() {
        this.intervals = new Float64Array(wv), this.totals = Cv(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
      reset() {
        sv(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
      }
    }
    class cv {
      constructor() {
        this.longTasks = new dv, this.summary = new iv, this.current = Cv(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = Tv, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restart = () => {
          this.lastDrawnStartMs = -1
        }, this.animationFrame = () => {
          this.current.rafs++
        }, this.wasmFrame = (vv, zv, Pv, Sv, ev, gv, pv) => {
          this.ahead = vv.headerWord(hv.A.Pacing) & hv.P.AheadMask, this.frame(zv, Pv, Sv, ev, vv.headerWord(hv.A.RenderUs) / 1e3, vv.headerWord(hv.A.TicksRun), gv, vv.headerWord(hv.A.RenderPending), pv)
        }, this.jsFrame = (vv, zv, Pv) => {
          this.frame(vv, zv, !0, Pv, zv - vv, 0, 0, -1, -1)
        }, this.jsTick = vv => {
          this.current.mainMs += vv, this.current.ticks++, this.current.tickMs += vv
        }, this.logOutliers = () => {
          this.outlierTimer = null;
          const vv = performance.now();
          let zv = 0;
          for (const Pv of this.waiting) {
            if (Pv.dueMs > vv) {
              this.waiting[zv++] = Pv;
              continue
            }
            const hv = [`long frame ${av(Pv.intervalMs)} ms ending at ${av(Pv.endMs)} ms: main ${av(Pv.mainMs)} (render ${av(Pv.renderMs)}, ${Pv.ticks} ticks ${av(Pv.tickMs)}), outside ${av(Pv.intervalMs-Pv.mainMs)}`, `${Pv.rafs} rafs`];
            Pv.pendingBefore >= 0 && hv.push(`pending ${Pv.pendingBefore} -> ${Pv.pendingAfter} (max ${Pv.pendingMax})`), Pv.meshes >= 0 && hv.push(`${Pv.meshes} meshes landed`), hv.push(this.longTasks.describe(Pv.endMs - Pv.intervalMs, Pv.endMs)), (0, ev.i)("frame", hv.join("; "))
          }
          this.waiting.length = zv, zv > 0 && (this.outlierTimer = setTimeout(this.logOutliers, this.waiting[0].dueMs - vv))
        }, this.flush = () => {
          const vv = this.summary,
            zv = vv.totals;
          if (0 === vv.frames) return vv.undrawn > 0 && (0, ev.i)("frame", `${Nv/1e3}s: no frames drawn, ${vv.undrawn} undrawn, pending max ${zv.pendingMax}`), void vv.reset();
          const Pv = vv.intervals.subarray(0, Math.min(vv.frames, wv)).sort(),
            hv = [`${vv.frames} frames, median ${av((0,Sv.b)(Pv,.5))} p95 ${av((0,Sv.b)(Pv,.95))} max ${av(vv.maxMs)} ms, ${vv.slow} over 50, ${vv.shown+vv.dropped} over ${lv}`, `${zv.rafs} rafs, ${vv.undrawn} undrawn`, `main ${av(zv.mainMs)} ms (render ${av(zv.renderMs)}, ${zv.ticks} ticks ${av(zv.tickMs)})`];
          zv.pendingMax >= 0 && hv.push(`pending max ${zv.pendingMax}`), zv.meshes >= 0 && hv.push(`${zv.meshes} meshes landed`), this.ahead >= 0 && hv.push(`${this.ahead} frames ahead`), hv.push(`outliers ${vv.shown} logged, ${vv.dropped} dropped`), (0, ev.i)("frame", `${Nv/1e3}s: ${hv.join("; ")}`), vv.reset()
        }, setInterval(this.flush, Nv), document.addEventListener("visibilitychange", this.restart)
      }
      start(vv, zv) {
        var Pv;
        this.restart(), (0, ev.i)("frame", `start: ${vv} client, ${zv}, dpr ${window.devicePixelRatio}, long tasks ${null!==(Pv=this.longTasks.kind)&&void 0!==Pv?Pv:"n/a"}; a summary each ${Nv/1e3} s in game, outliers over ${lv} ms`)
      }
      frame(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        if (!hv) return this.restart(), void(this.lastPending = pv);
        const Nv = this.current;
        Pv ? (this.lastDrawnStartMs >= 0 && (Nv.pendingAfter = this.lastPending, Nv.meshes = dv < 0 ? -1 : dv - this.lastMeshes, this.closeInterval(vv - this.lastDrawnStartMs, vv)), this.lastDrawnStartMs = vv, sv(Nv).pendingBefore = this.lastPending, this.lastMeshes = dv) : this.lastDrawnStartMs >= 0 && this.summary.undrawn++, Nv.mainMs += zv - vv, Nv.renderMs += Sv, Nv.ticks += ev, Nv.tickMs += gv, Nv.pendingMax = Math.max(Nv.pendingMax, pv), this.lastPending = pv, this.summary.totals.pendingMax = Math.max(this.summary.totals.pendingMax, pv)
      }
      closeInterval(vv, zv) {
        const Pv = this.summary,
          hv = this.current;
        Pv.frames < wv && (Pv.intervals[Pv.frames] = vv), Pv.frames++, Pv.maxMs = Math.max(Pv.maxMs, vv);
        const Sv = Pv.totals;
        Sv.mainMs += hv.mainMs, Sv.renderMs += hv.renderMs, Sv.ticks += hv.ticks, Sv.tickMs += hv.tickMs, Sv.rafs += hv.rafs, Sv.meshes = hv.meshes < 0 ? -1 : Math.max(0, Sv.meshes) + hv.meshes, vv > 50 && Pv.slow++, vv > lv && this.outlier(vv, zv)
      }
      outlier(vv, zv) {
        const Pv = Math.floor((zv - this.lastRefillMs) / Wv);
        Pv > 0 && (this.tokens = Math.min(Tv, this.tokens + Pv), this.lastRefillMs += Pv * Wv), 0 !== this.tokens ? (this.tokens--, this.summary.shown++, this.waiting.push({
          ...this.current,
          endMs: zv,
          intervalMs: vv,
          dueMs: performance.now() + 1e3
        }), this.outlierTimer ??= setTimeout(this.logOutliers, 1e3)) : this.summary.dropped++
      }
    }
    let Gv = null;

    function mv(vv, zv) {
      return Gv ??= new cv, Gv.start(vv, zv), Gv
    }
  },
  4542: (vv, zv, Pv) => {
    Pv.d(zv, {
      $: () => nv,
      A: () => ev,
      C: () => av,
      Cb: () => Uv,
      E: () => Jv,
      Fb: () => Zv,
      Hb: () => xv,
      I: () => Nv,
      Jb: () => qv,
      Kb: () => Iv,
      M: () => sv,
      Mb: () => Gv,
      Ob: () => mv,
      P: () => dv,
      S: () => Wv,
      Sb: () => Lv,
      V: () => Tv,
      Vb: () => Sv,
      X: () => Fv,
      Xb: () => Bv,
      bb: () => Ov,
      d: () => yv,
      eb: () => Yv,
      f: () => Mv,
      fb: () => Dv,
      g: () => lv,
      h: () => cv,
      ib: () => Av,
      j: () => Hv,
      kb: () => Qv,
      lb: () => tv,
      m: () => iv,
      pb: () => Kv,
      q: () => Cv,
      qb: () => Rv,
      sb: () => Vv,
      t: () => gv,
      u: () => pv,
      wb: () => wv,
      x: () => hv,
      xb: () => fv,
      zb: () => jv
    });
    const hv = 32,
      Sv = 33.333333333333336,
      ev = {
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
      gv = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      pv = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      dv = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Nv = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      lv = {
        Look: 0,
        Remesh: 1
      },
      Tv = 8,
      Wv = 1,
      wv = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      av = {
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
      sv = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Cv = {
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
      iv = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      cv = 4,
      Gv = 4,
      mv = 65535,
      jv = {
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
      fv = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Fv = 88,
      Yv = 0,
      nv = 24,
      Ov = 48,
      Dv = 80,
      Kv = {
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
      Vv = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Uv = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Rv = {
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
      xv = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      tv = 65535,
      qv = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Iv = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Qv = 2,
      Zv = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Av = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Lv = {
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
      Hv = {
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
      Mv = {
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
      yv = 8,
      Bv = {
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
      Jv = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);