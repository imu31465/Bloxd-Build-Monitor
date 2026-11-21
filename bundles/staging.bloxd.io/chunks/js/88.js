export const id = 88;
export const ids = [88];
export const modules = {
  4688: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Wd,
      Db: () => sd,
      Eb: () => Bd,
      F: () => ed,
      Gb: () => jd,
      Hb: () => Td,
      I: () => Vd,
      L: () => Kd,
      Lb: () => fd,
      M: () => od,
      Ob: () => Ud,
      P: () => Cd,
      Qb: () => yd,
      Sb: () => xd,
      T: () => Rd,
      Tb: () => qd,
      Vb: () => cd,
      X: () => gd,
      Yb: () => Nd,
      Z: () => Ld,
      ab: () => Qd,
      ac: () => td,
      b: () => ud,
      bb: () => ad,
      d: () => rd,
      eb: () => Fd,
      gb: () => Yd,
      h: () => ld,
      ib: () => Md,
      jb: () => md,
      kb: () => Ed,
      l: () => vd,
      o: () => hd,
      ob: () => Dd,
      p: () => Gd,
      q: () => Id,
      sb: () => nd,
      tb: () => bd,
      u: () => Pd,
      vb: () => Xd,
      w: () => Zd,
      xb: () => Sd,
      y: () => pd,
      zb: () => Od
    });
    const pd = 32,
      Nd = 33.333333333333336,
      Wd = {
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
      Pd = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Zd = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      gd = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Cd = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Kd = 7,
      od = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      ld = {
        Look: 0,
        Remesh: 1
      },
      Qd = 8,
      Ld = 1,
      Od = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      ed = {
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
      Rd = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Id = {
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
      Gd = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      vd = 4,
      xd = 4,
      qd = 65535,
      Bd = {
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
      sd = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      ad = 88,
      Md = 0,
      Fd = 24,
      Yd = 48,
      md = 80,
      bd = {
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
      Sd = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      jd = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Xd = {
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
      fd = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      nd = 65535,
      Ud = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      yd = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Dd = 2,
      Td = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Ed = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      cd = {
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
      hd = {
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
      rd = {
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
      ud = 8,
      td = {
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
      Vd = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  40785: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd
    });
    const pd = 1 << 20,
      Nd = 1 << 21,
      Wd = 1024,
      Pd = 2048;

    function Zd(dd, Jd, kd) {
      const Zd = dd + pd,
        gd = Jd + Wd,
        Cd = kd + pd;
      return Zd < 0 || Zd >= Nd || Cd < 0 || Cd >= Nd || gd < 0 || gd >= Pd ? -1 : (Zd * Nd + Cd) * Pd + gd
    }
  },
  40781: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      g: () => Pd,
      h: () => Nd,
      l: () => Wd,
      m: () => Kd,
      n: () => Cd,
      q: () => gd,
      u: () => Zd
    });
    kd(3291);
    kd(40785);

    function pd(dd) {}

    function Nd(dd) {}

    function Wd(dd) {}

    function Pd(dd) {}

    function Zd(dd) {}

    function gd(dd, Jd, kd) {}

    function Cd(dd) {}

    function Kd(dd) {}
  },
  40771: (dd, Jd, kd) => {
    kd.d(Jd, {
      C: () => JJ,
      G: () => Ed,
      H: () => Td,
      J: () => td,
      L: () => ud,
      M: () => pJ,
      Q: () => Hd,
      R: () => Fd,
      d: () => kJ,
      f: () => ZJ,
      g: () => zd,
      h: () => dJ,
      l: () => rd,
      n: () => Ad,
      r: () => wd,
      s: () => PJ,
      v: () => yd,
      w: () => Dd,
      z: () => hd
    });
    var pd = kd(300),
      Nd = kd(268),
      Wd = kd(271),
      Pd = kd(22),
      Zd = kd(2704),
      gd = kd(661),
      Cd = kd(4376),
      Kd = kd(2651),
      od = kd(3282),
      ld = kd(95),
      Qd = kd(296),
      Ld = kd(33),
      Od = kd(282),
      ed = kd(111),
      Rd = kd(618),
      Id = kd(119),
      Gd = kd(113),
      vd = kd(4688),
      xd = kd(40775),
      qd = kd(1797),
      Bd = kd(40778);
    const sd = "bloxd-webgpuOffAfterLoss",
      ad = "context:webgl",
      Md = "probe:threw";

    function Fd(dd) {
      let Jd;
      try {
        Jd = dd.getContext("webgl", {
          powerPreference: Id.b
        })
      } catch {
        Jd = null
      }
      if (null === Jd) return null;
      let kd = null;
      try {
        const dd = Jd.getParameter(Jd.MAX_TEXTURE_SIZE);
        kd = "number" === typeof dd && dd > 0 ? dd : null
      } catch {
        kd = null
      }
      try {
        var pd;
        null === (pd = Jd.getExtension("WEBGL_lose_context")) || void 0 === pd || pd.loseContext()
      } catch {}
      return kd
    }
    const Yd = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      md = "mali_valhall",
      bd = new Set(["nvidia_pre_turing"]);

    function Sd(dd) {
      return function(dd) {
        try {
          return dd()
        } catch {
          return null
        }
      }((() => {
        var Jd, kd, pd, Pd;
        const Zd = null !== (Jd = null === (kd = dd.info) || void 0 === kd ? void 0 : kd.vendor) && void 0 !== Jd ? Jd : "";
        return "windows" === (0, ld.getOperatingSystem)() && "" !== Zd && "intel" !== (0, ld.normaliseGpuVendor)(Zd) ? null : ((0, ld.seedGpuVendor)(Zd), gd = (0, Nd.h)(), Cd = (0, Wd.g)(Zd, null !== (pd = null === (Pd = dd.info) || void 0 === Pd ? void 0 : Pd.architecture) && void 0 !== pd ? pd : ""), Yd.has(gd) ? "android_arm" === gd && Cd === md ? "webgpu_default" : "webgl_default" : null);
        var gd, Cd
      }))
    }

    function jd() {
      var dd;
      return {
        gpu: null !== (dd = navigator.gpu) && void 0 !== dd ? dd : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(dd) {
          let Jd, kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xd.d;
          try {
            Jd = dd.getContext("webgl")
          } catch {
            Jd = null
          }
          if (null === Jd) return [ad];
          const pd = [];
          try {
            for (const Nd of kd.extensions) null === Jd.getExtension(Nd) && pd.push(Nd);
            for (const [Nd, Wd] of Object.entries(kd.limits)) {
              const dd = Jd[Nd],
                kd = "number" === typeof dd ? Jd.getParameter(dd) : null;
              ("number" !== typeof kd || kd < Wd) && pd.push(`limit:${Nd}`)
            }
            const dd = Jd.getShaderPrecisionFormat(Jd.VERTEX_SHADER, Jd.HIGH_FLOAT);
            (null === dd || dd.precision < kd.vertexHighFloatBits) && pd.push("precision:vertex_high_float")
          } catch {
            pd.push(Md)
          }
          try {
            var Nd;
            null === (Nd = Jd.getExtension("WEBGL_lose_context")) || void 0 === Nd || Nd.loseContext()
          } catch {}
          return pd
        }(document.createElement("canvas")),
        offAfterLoss: dd => Xd((() => dd ? (0, Od.G)() : Pd.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: dd => Xd((() => (0, ed.c)(dd))),
        intelGen9: dd => Xd((() => (0, ed.g)(dd))),
        gpuClassWebGlArm: Sd,
        storeGpuClassVerdict: dd => {
          Ld.i.setItem(ed.x, dd)
        },
        gpuClassOnWebGl: dd => (0, Rd.e)(dd),
        override: () => function() {
          if ((0, Zd.m)("render") && "webgl1" === (0, Zd.i)("renderer")) return "webgl1";
          const dd = [() => new URLSearchParams(window.location.search).get(Kd.d), () => Ld.i.getItem(Kd.h), () => {
            const dd = localStorage.getItem(sd);
            return null !== dd && localStorage.removeItem(sd), "1" === dd ? "webgl2" : null
          }];
          for (const Jd of dd) {
            let dd = null;
            try {
              dd = fd(Jd())
            } catch {}
            if (null !== dd) return dd
          }
          return null
        }(),
        claimed: () => fd((0, gd.g)()),
        webGpuSetting: () => {
          const dd = Ld.i.getItem(pd._b);
          return "boolean" === typeof dd ? dd : null
        },
        heldBack: () => Rd.h,
        storeHoldbackSpared: dd => {
          Ld.i.setItem(ed.v, dd)
        },
        intelGen9OnWebGl: () => Rd.j,
        EQ: () => Xd((() => (0, od.d)(ld.featureFlags.settings.canUseShaderPacks))),
        windows: () => Xd((() => "windows" === (0, ld.getOperatingSystem)()))
      }
    }

    function Xd(dd) {
      try {
        return dd()
      } catch {
        return !1
      }
    }

    function fd(dd) {
      return "lite" === dd ? "webgpu" : "webgl2" === dd || "babylon" === dd ? "webgl" : null
    }
    async function nd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jd();
      const Jd = await async function(dd) {
        const Jd = function(dd) {
            const Jd = dd.override(),
              kd = dd.webGpuSetting(),
              pd = null === Jd && !0 !== kd && dd.EQ(),
              Nd = null !== Jd || null !== kd || pd ? null : dd.claimed(),
              Wd = null !== Jd ? "override" : !0 === kd ? "setting" : pd ? "pack" : !1 === kd ? "setting" : null !== Nd ? "claim" : "default",
              Pd = function(dd) {
                return "override" === dd || "setting" === dd
              }(Wd);
            if ("webgl" === Jd || "webgl1" === Jd || "webgl" === Nd || "setting" === Wd && !1 === kd) return {
              source: Wd,
              asked: Pd,
              refused: "not_requested"
            };
            if (!dd.gpu) return {
              source: Wd,
              asked: Pd,
              refused: "no_webgpu_api"
            };
            const Zd = "default" === Wd && dd.heldBack();
            if (Zd && !dd.windows()) return {
              source: Wd,
              asked: Pd,
              refused: "webgl_holdback"
            };
            if (!Pd && dd.offAfterLoss("pack" === Wd)) return {
              source: Wd,
              asked: Pd,
              refused: Zd ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: Wd,
              asked: Pd,
              heldBack: Zd,
              gpu: dd.gpu
            }
          }(dd),
          {
            source: kd
          } = Jd,
          pd = !Jd.asked,
          Nd = "gpu" in Jd && Jd.heldBack,
          Pd = function(dd) {
            return Nd && "none" !== dd ? {
              reason: "webgl_holdback",
              adapter: null,
              source: kd
            } : {
              reason: dd,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: kd
            }
          };
        if (!("gpu" in Jd)) return Pd(Jd.refused);
        let Zd;
        try {
          Zd = await (0, qd.m)((0, Gd.i)(Jd.gpu), NJ, `requestAdapter didn't settle in ${NJ/1e3} s`)
        } catch {
          return Pd("adapter_error")
        }
        if ("string" === typeof Zd) return Pd(Zd);
        const gd = (0, Gd.b)(Zd);
        if ((0, Gd.e)(Zd)) return Pd("software_adapter", gd);
        const Cd = dd.windows() && function(dd) {
          return bd.has((0, Wd.g)(dd.vendor, dd.architecture))
        }(gd);
        if (dd.storeHoldbackSpared(Cd), Nd && !Cd) return Pd("webgl_holdback");
        const Kd = dd.intelGen9(Zd),
          od = Kd ? null : dd.gpuClassWebGlArm(Zd);
        if (dd.storeGpuClassVerdict(null !== od && void 0 !== od && od), pd && dd.oldIntelDriver(Zd)) return Pd("old_intel_driver", gd);
        if ("default" === kd && dd.intelGen9OnWebGl() && Kd) return Pd("intel_gen9", gd);
        if ("default" === kd && null !== od && dd.gpuClassOnWebGl(od)) return Pd("gpu_class_webgl", gd);
        return Pd("none", gd)
      }(dd);
      if ("none" === Jd.reason) return {
        backend: "webgpu",
        ...Jd
      };
      if ("webgl1" !== dd.override() && dd.webgl2()) return {
        backend: "webgl",
        ...Jd
      };
      const kd = dd.webgl1();
      return 0 === kd.length ? {
        backend: "webgl1",
        ...Jd
      } : {
        missing: kd
      }
    }
    let Ud = !1;
    async function yd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jd();
      if (null === dd) return null;
      const kd = await nd(Jd);
      return Ud = !("missing" in kd) && "webgpu" === kd.backend && "claim" === kd.source, "missing" in kd ? kd : {
        ...kd,
        load: dd[kd.backend]
      }
    }
    async function Dd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jd().gpu,
        pd = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== dd.backend) return !1;
      const Nd = cd(Jd, "indirectDraws", "off", "on");
      if (null !== Nd) return Nd;
      if (null !== dd.adapter && (0, ed.k)(dd.adapter, pd)) return !0;
      if (null === kd) return !1;
      try {
        var Wd;
        const dd = await (0, qd.m)(kd.requestAdapter({
          powerPreference: "low-power"
        }).then((async dd => (null !== dd && await (0, Gd.d)(dd), dd))), NJ, `the low-power requestAdapter didn't settle in ${NJ/1e3} s`);
        return (0, ed.k)(null !== (Wd = null === dd || void 0 === dd ? void 0 : dd.info) && void 0 !== Wd ? Wd : {}, pd)
      } catch (Pd) {
        return Pd instanceof qd.i
      }
    }

    function Td(dd, Jd, kd) {
      if ("webgpu" !== dd.backend) return !1;
      const pd = cd(Jd, "terrainFetch", "texture", "storage");
      return null !== pd ? pd : null !== dd.adapter && (0, ed.e)(dd.adapter, kd)
    }

    function Ed(dd, Jd, kd) {
      if ("webgpu" !== dd.backend) return !1;
      const pd = cd(Jd, "sceneDepth", "off", "on");
      return null !== pd ? pd : null !== dd.adapter && (0, ed.f)(dd.adapter, kd)
    }

    function cd(dd, Jd, kd, pd) {
      const Nd = new URLSearchParams(dd).get(Jd),
        Wd = null !== Nd && void 0 !== Nd ? Nd : (0, gd.e)(Jd);
      return Wd !== kd && Wd !== pd ? null : (Ud ||= null === Nd, Wd === kd)
    }

    function hd(dd, Jd) {
      return "webgl" === dd.backend && (0, Wd.n)(Jd)
    }

    function rd(dd) {
      return null !== dd && "missing" in dd
    }

    function ud(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pd.d;
      try {
        const kd = "start_failed" === dd || "pipeline_failed" === dd,
          pd = Jd.turnOffWebGpuAfterDeviceLoss(kd ? "visible" : (0, Od.l)((0, Qd.h)()));
        return !Ud || pd && !Jd.isWebGpuOffAfterLoss() || (0, gd.q)("webgpuLoss"), Jd.isWebGpuOffAfterLoss() && "webgpu" === fd(Ld.i.getItem(Kd.h)) && Ld.i.removeItem(Kd.h), (0, Zd.m)("webgpuloss") && (0, Cd.d)((Jd => {
          Jd.noteWebGpuLoss("wasm", pd ? dd : `${dd}, which storage didn't keep`, null)
        })), pd
      } catch {
        return !1
      }
    }

    function td(dd) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Hd()) ? ud(dd) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Vd = "framePacing";

    function zd(dd) {
      const Jd = new URLSearchParams(dd).get(Vd);
      return null !== Jd && /^\d{1,9}$/.test(Jd) ? Number(Jd) : void 0
    }

    function Hd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === fd(new URLSearchParams(dd).get(Kd.d))
      } catch {
        return !1
      }
    }

    function wd(dd) {
      return !!Ad(dd) || dd instanceof Error && !(dd instanceof WebAssembly.RuntimeError) && dd.message.startsWith(`${vd.d.RenderSurfaceUnusable}:`)
    }

    function Ad(dd) {
      const {
        name: Jd,
        message: kd
      } = null !== dd && void 0 !== dd ? dd : {};
      return "InvalidStateError" === Jd && "string" === typeof kd && kd.startsWith("GPUDevice.")
    }

    function dJ(dd) {
      const Jd = dd;
      return "function" === typeof Jd.Kpd && "function" === typeof Jd.lpd ? Jd : null
    }

    function JJ(dd) {
      return "function" === typeof dd.Gpd ? dd : null
    }
    const kJ = "openRenderer";

    function pJ(dd) {
      const Jd = null === dd || void 0 === dd ? void 0 : dd.bWd();
      return void 0 === Jd ? void 0 : new Error(Jd)
    }
    const NJ = 5e3,
      WJ = 15e3;

    function PJ(dd, Jd, kd, pd, Nd, Wd) {
      return (0, qd.m)(function(dd, Jd, kd, pd, Nd, Wd) {
        return (0, Bd.f)(dd, Jd, (() => dd.Gpd(kd, pd, Nd, Wd.indirectHangs, Wd.storagePullBreaks, Wd.splitPassBreaks, Wd.framesAhead, Wd.instancedTerrainSlow)))
      }(dd, Jd, kd, pd, Nd, Wd), WJ, `${vd.d.RenderSurfaceUnusable}: the renderer didn't open in ${WJ/1e3} s`, gJ)
    }
    async function ZJ(dd, Jd, kd, pd, Nd, Wd) {
      if ("function" !== typeof dd.IPd) throw new Error("this core has no set_renderer");
      const Pd = await PJ(Jd, kJ, kd, Nd, pd, Wd);
      try {
        dd.IPd(Pd)
      } catch (Zd) {
        throw gJ(Pd), Zd
      }
    }

    function gJ(dd) {
      try {
        dd.free()
      } catch {}
    }
  },
  40775: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    const pd = {
      extensions: ["ANGLE_instanced_arrays", "OES_vertex_array_object", "OES_element_index_uint", "OES_standard_derivatives"],
      limits: {
        MAX_VERTEX_ATTRIBS: 16,
        MAX_TEXTURE_SIZE: 2048,
        MAX_TEXTURE_IMAGE_UNITS: 8,
        MAX_VARYING_VECTORS: 8,
        MAX_VERTEX_UNIFORM_VECTORS: 128,
        MAX_FRAGMENT_UNIFORM_VECTORS: 34
      },
      vertexHighFloatBits: 23
    }
  },
  40792: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => gd,
      f: () => Zd
    });
    var pd = kd(679),
      Nd = kd(681);

    function Wd(dd, Jd) {
      const kd = null === Jd ? void 0 : pd.c.get(Jd);
      return "all" === kd || "webgl" === kd && "webgpu" !== dd.backend ? Jd : null
    }

    function Pd(dd) {
      return "software_adapter" === dd.reason ? null : dd.adapter
    }

    function Zd(dd, Jd) {
      const kd = (0, pd.u)();
      return null === kd ? null : (0, pd.e)(Pd(dd), kd, Jd ? pd.j : pd.h)
    }

    function gd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nd.j;
      const pd = Wd(dd, Jd);
      return null !== pd && "webgl" === dd.backend && kd(pd) ? null : pd
    }
  },
  40778: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd,
      f: () => Kd,
      j: () => Pd,
      k: () => gd
    });
    var pd = kd(36458);
    class Nd extends Error {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${dd}: the module trapped${kd?" in an earlier call":""}: ${String(Jd)}`, {
          cause: Jd
        }), this.site = dd, this.trap = Jd, this.earlier = kd, this.name = "ModuleTrapError", Jd instanceof Error && void 0 !== Jd.stack && (this.stack = `${this.name}: ${this.message}\n${Jd.stack}`)
      }
    }
    const Wd = new WeakMap;

    function Pd(dd) {
      return Wd.has(dd)
    }

    function Zd(dd, Jd) {
      Wd.has(dd) || Wd.set(dd, Jd)
    }

    function gd(dd, Jd) {
      return !!(0, pd.h)(Jd) && (Zd(dd, Jd), !0)
    }
    const Cd = [
      ["error", dd => dd.error],
      ["unhandledrejection", dd => dd.reason]
    ];

    function Kd(dd, Jd, kd) {
      let Pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Wd.has(dd) ? Promise.reject(new Nd(Jd, Wd.get(dd), !0)) : new Promise(((Wd, gd) => {
        const Kd = kd => {
            Zd(dd, kd), Qd(), gd(new Nd(Jd, kd))
          },
          od = dd => {
            dd instanceof WebAssembly.RuntimeError ? Kd(dd) : (Qd(), gd(dd))
          },
          ld = Cd.map((dd => {
            let [Jd, kd] = dd;
            return [Jd, dd => {
              const Jd = kd(dd);
              (0, pd.h)(Jd) && Kd(Jd)
            }]
          })),
          Qd = () => {
            for (const [dd, Jd] of ld) null === Pd || void 0 === Pd || Pd.removeEventListener(dd, Jd)
          };
        for (const [dd, Jd] of ld) null === Pd || void 0 === Pd || Pd.addEventListener(dd, Jd);
        let Ld;
        try {
          Ld = kd()
        } catch (Od) {
          return void od(Od)
        }
        Ld.then((dd => {
          Qd(), Wd(dd)
        }), od)
      }))
    }
  },
  40801: (dd, Jd, kd) => {
    kd.d(Jd, {
      C: () => Td,
      E: () => Dd,
      H: () => jd,
      L: () => sd,
      P: () => bd,
      R: () => Sd,
      S: () => fd,
      T: () => md,
      d: () => Bd,
      e: () => vd,
      h: () => nd,
      i: () => Xd,
      k: () => Gd,
      o: () => qd,
      r: () => Rd,
      v: () => Md,
      z: () => Yd
    });
    var pd = kd(201),
      Nd = kd(271),
      Wd = kd(22),
      Pd = kd(296),
      Zd = kd(33),
      gd = kd(40771),
      Cd = kd(40792),
      Kd = kd(40807),
      od = (kd(40781), kd(40811)),
      ld = kd(40818);
    const Qd = "wasmJoinBuild";
    let Ld = null,
      Od = null,
      ed = null;

    function Rd(dd) {
      ed = dd
    }
    let Id = !1;

    function Gd() {
      Id = !0
    }

    function vd() {
      return Id
    }
    let xd = !1;

    function qd() {
      xd = !0
    }

    function Bd() {
      return xd
    }

    function sd() {
      return ed
    }
    let ad = null;

    function Md(dd) {
      ad = dd, (0, Pd.e)(dd)
    }
    const Fd = "wasmClientRenderLost";

    function Yd() {
      Zd.k.setItem(Fd, !0)
    }

    function md() {
      return !0 === Zd.k.getItem(Fd)
    }

    function bd() {
      return ad
    }

    function Sd() {
      return null === Ld && (Zd.i.removeItem("wasmLastPick"), Zd.i.removeItem("wasmGuessVerdict"), (0, Pd.j)(), Ld = (0, gd.v)(Kd.g).then((dd => (null === dd || (0, gd.l)(dd) || (Od = od.d[dd.backend], Wd.d.followGameGpu("webgpu" === dd.backend ? dd.adapter : null), "webgpu" === dd.backend && (0, ld.g)()), dd)))), Ld
    }

    function jd() {
      return Od
    }

    function Xd(dd) {
      return dd ? dd.load() : Promise.resolve().then((function() {
        var dd = new Error("Cannot find module '@bloxd/wasm/client'");
        throw dd.code = "MODULE_NOT_FOUND", dd
      })).then((dd => dd.bloxdWasmClient))
    }

    function fd(dd) {
      Zd.i.setItem(Qd, dd)
    }
    async function nd() {
      if (null === Kd.g) return Xd(null);
      const dd = Zd.i.getItem(Qd);
      let Jd = "none" === dd ? null : "webgl";
      return null !== dd && "none" !== dd && ("string" === typeof dd && void 0 !== (0, pd.d)(Kd.g, dd) ? Jd = dd : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(dd)}, is none of this client's: guessing WebGL2's`)), null === Jd ? null : Kd.g[Jd]()
    }
    let Ud = null,
      yd = null;

    function Dd() {
      return Ud ??= Sd().then((async dd => {
        var Jd;
        const kd = null !== dd && !(0, gd.l)(dd),
          pd = {
            indirectHangs: kd && await (0, gd.w)(dd, window.location.search),
            storagePullBreaks: kd && (0, gd.H)(dd, window.location.search),
            splitPassBreaks: kd && (0, gd.G)(dd, window.location.search),
            framesAhead: (0, gd.g)(window.location.search),
            instancedTerrainSlow: kd && (0, gd.z)(dd, null !== (Jd = (0, Cd.f)(dd, !1)) && void 0 !== Jd ? Jd : (0, Nd.c)())
          };
        return yd = pd.indirectHangs, pd
      })), Ud
    }

    function Td() {
      return yd
    }
  },
  40811: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    const pd = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40807: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      g: () => pd
    });
    const pd = {
        webgpu: async () => (await kd.e(8).then((() => kd(43151)))).bloxdWasmWebgpu,
        webgl: async () => (await kd.e(6).then((() => kd(43164)))).bloxdWasmWebgl,
        webgl1: async () => (await kd.e(7).then((() => kd(43175)))).bloxdWasmWebgl1
      },
      Nd = async () => (await kd.e(5).then((() => kd(43180)))).compileAnimationPackInWasm
  },
  40827: (dd, Jd, kd) => {
    function pd() {
      return kd(40835)
    }

    function Nd() {
      return kd(40842)
    }

    function Wd(dd) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(dd)
    }
    kd.d(Jd, {
      e: () => Wd,
      g: () => pd,
      h: () => Nd
    })
  },
  40818: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      g: () => gd
    });
    var pd = kd(95);
    const Nd = "webgpuPipeline";

    function Wd(dd) {
      return dd.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let Pd = null;

    function Zd() {
      if (null === Pd) try {
        dd = (0, pd.getBrowserName)(), Jd = (0, pd.getBrowserVersion)(), kd = (0, pd.getOperatingSystem)(), Nd = (0, pd.getOperatingSystemVersion)(), Pd = `${dd.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===Jd?"unknown":Wd(Jd)}-${kd}${void 0===Nd?"":`_${Wd(Nd)}`}`
      } catch (Zd) {
        console.warn("The user agent couldn't be read for its browser code", Zd), Pd = "unknown"
      }
      var dd, Jd, kd, Nd;
      return Pd
    }

    function gd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const Jd = `WGPU-${Zd()}`,
        pd = (dd, pd) => {
          const {
            reason: Wd,
            message: Pd
          } = pd, Zd = {
            pipeline: null !== dd && void 0 !== dd ? dd : "",
            reason: String(Wd),
            browserMessage: String(Pd)
          };
          Promise.all([kd.e(263), kd.e(87)]).then((() => kd(40940))).then((dd => {
            let {
              reportCrash: kd
            } = dd;
            kd({
              kind: "coreError",
              code: Jd,
              site: Nd,
              fatal: !1,
              message: `${Zd.pipeline} ${Zd.reason}: ${Zd.browserMessage}`,
              details: Zd,
              error: pd
            })
          })).catch((dd => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", dd)
          }))
        },
        Wd = dd.createRenderPipelineAsync;
      dd.createRenderPipelineAsync = function(dd) {
        return Wd.call(this, dd).catch((Jd => {
          throw pd(dd.label, Jd), Jd
        }))
      };
      const Pd = dd.createComputePipelineAsync;
      dd.createComputePipelineAsync = function(dd) {
        return Pd.call(this, dd).catch((Jd => {
          throw pd(dd.label, Jd), Jd
        }))
      }
    }
  },
  40762: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/bloxd_wasm_models_bg.df969d045c7e01bce06e.wasm"
  },
  40753: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/bloxd_wasm_workers_bg.1b50c07459d1b86abfd9.wasm"
  },
  40835: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40842: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  40745: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd,
      g: () => pd
    });
    const pd = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new kd.U(kd(40753))
      }
    };
    const Nd = {
      name: "bloxd_wasm_models",
      url: function() {
        return new kd.U(kd(40762))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);