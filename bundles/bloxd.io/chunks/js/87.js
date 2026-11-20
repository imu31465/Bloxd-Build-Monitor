export const id = 87;
export const ids = [87];
export const modules = {
  4456: (UU, RU, gU) => {
    gU.d(RU, {
      $: () => oU,
      A: () => EU,
      B: () => CU,
      Db: () => mU,
      F: () => AU,
      G: () => KU,
      Gb: () => YU,
      Hb: () => HU,
      J: () => hU,
      L: () => qU,
      Lb: () => VU,
      M: () => jU,
      N: () => GU,
      Ob: () => XU,
      R: () => JU,
      Rb: () => vU,
      S: () => nU,
      Tb: () => fU,
      V: () => bU,
      X: () => wU,
      Xb: () => xU,
      Zb: () => sU,
      b: () => FU,
      bc: () => pU,
      db: () => SU,
      dc: () => iU,
      e: () => kU,
      g: () => cU,
      hb: () => dU,
      j: () => WU,
      kb: () => rU,
      n: () => yU,
      nb: () => ZU,
      p: () => eU,
      pb: () => BU,
      s: () => QU,
      tb: () => aU,
      v: () => PU,
      w: () => TU,
      wb: () => uU,
      x: () => tU,
      zb: () => IU
    });
    const tU = 32,
      pU = 33.333333333333336,
      EU = {
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
      PU = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      TU = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      qU = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      KU = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      cU = {
        Look: 0,
        Remesh: 1
      },
      GU = 8,
      jU = 1,
      uU = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      CU = {
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
      hU = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      QU = {
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
      eU = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      WU = 4,
      fU = 4,
      xU = 65535,
      mU = {
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
      IU = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      JU = 88,
      wU = 0,
      nU = 24,
      bU = 48,
      oU = 80,
      ZU = {
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
      aU = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      YU = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      BU = {
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
      VU = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      rU = 65535,
      XU = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      vU = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      dU = 2,
      HU = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      SU = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      sU = {
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
      yU = {
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
      kU = {
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
      FU = 8,
      iU = {
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
      AU = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  40190: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => TU
    });
    const tU = 1 << 20,
      pU = 1 << 21,
      EU = 1024,
      PU = 2048;

    function TU(UU, RU, gU) {
      const TU = UU + tU,
        qU = RU + EU,
        KU = gU + tU;
      return TU < 0 || TU >= pU || KU < 0 || KU >= pU || qU < 0 || qU >= PU ? -1 : (TU * pU + KU) * PU + qU
    }
  },
  40186: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU,
      d: () => PU,
      e: () => pU,
      g: () => EU,
      j: () => cU,
      m: () => KU,
      p: () => qU,
      s: () => TU
    });
    gU(3153);
    gU(40190);

    function tU(UU) {}

    function pU(UU) {}

    function EU(UU) {}

    function PU(UU) {}

    function TU(UU) {}

    function qU(UU, RU, gU) {}

    function KU(UU) {}

    function cU(UU) {}
  },
  40166: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => FU,
      E: () => UR,
      I: () => yU,
      L: () => sU,
      M: () => zU,
      O: () => AU,
      S: () => gR,
      W: () => LU,
      X: () => oU,
      c: () => RR,
      e: () => PR,
      f: () => DU,
      h: () => OU,
      k: () => iU,
      o: () => lU,
      q: () => NU,
      t: () => ER,
      w: () => HU,
      y: () => SU
    });
    var tU = gU(299),
      pU = gU(260),
      EU = gU(263),
      PU = gU(21),
      TU = gU(2624),
      qU = gU(641),
      KU = gU(4183),
      cU = gU(2577),
      GU = gU(3151),
      jU = gU(96),
      uU = gU(291),
      CU = gU(34),
      hU = gU(274),
      QU = gU(122),
      eU = gU(594),
      WU = gU(131),
      fU = gU(124),
      xU = gU(4456),
      mU = gU(40172),
      IU = gU(1675),
      JU = gU(40177);
    const wU = "bloxd-webgpuOffAfterLoss",
      nU = "context:webgl",
      bU = "probe:threw";

    function oU(UU) {
      let RU;
      try {
        RU = UU.getContext("webgl", {
          powerPreference: WU.c
        })
      } catch {
        RU = null
      }
      if (null === RU) return null;
      let gU = null;
      try {
        const UU = RU.getParameter(RU.MAX_TEXTURE_SIZE);
        gU = "number" === typeof UU && UU > 0 ? UU : null
      } catch {
        gU = null
      }
      try {
        var tU;
        null === (tU = RU.getExtension("WEBGL_lose_context")) || void 0 === tU || tU.loseContext()
      } catch {}
      return gU
    }
    const ZU = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      aU = "mali_valhall",
      YU = new Set(["nvidia_pre_turing"]);

    function BU(UU) {
      return function(UU) {
        try {
          return UU()
        } catch {
          return null
        }
      }((() => {
        var RU, gU, tU, PU;
        const TU = null !== (RU = null === (gU = UU.info) || void 0 === gU ? void 0 : gU.vendor) && void 0 !== RU ? RU : "";
        return "windows" === (0, jU.getOperatingSystem)() && "" !== TU && "intel" !== (0, jU.normaliseGpuVendor)(TU) ? null : ((0, jU.seedGpuVendor)(TU), qU = (0, pU.j)(), KU = (0, EU.g)(TU, null !== (tU = null === (PU = UU.info) || void 0 === PU ? void 0 : PU.architecture) && void 0 !== tU ? tU : ""), ZU.has(qU) ? "android_arm" === qU && KU === aU ? "webgpu_default" : "webgl_default" : null);
        var qU, KU
      }))
    }

    function VU() {
      var UU;
      return {
        gpu: null !== (UU = navigator.gpu) && void 0 !== UU ? UU : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(UU) {
          let RU, gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mU.c;
          try {
            RU = UU.getContext("webgl")
          } catch {
            RU = null
          }
          if (null === RU) return [nU];
          const tU = [];
          try {
            for (const pU of gU.extensions) null === RU.getExtension(pU) && tU.push(pU);
            for (const [pU, EU] of Object.entries(gU.limits)) {
              const UU = RU[pU],
                gU = "number" === typeof UU ? RU.getParameter(UU) : null;
              ("number" !== typeof gU || gU < EU) && tU.push(`limit:${pU}`)
            }
            const UU = RU.getShaderPrecisionFormat(RU.VERTEX_SHADER, RU.HIGH_FLOAT);
            (null === UU || UU.precision < gU.vertexHighFloatBits) && tU.push("precision:vertex_high_float")
          } catch {
            tU.push(bU)
          }
          try {
            var pU;
            null === (pU = RU.getExtension("WEBGL_lose_context")) || void 0 === pU || pU.loseContext()
          } catch {}
          return tU
        }(document.createElement("canvas")),
        offAfterLoss: UU => rU((() => UU ? (0, hU.x)() : PU.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: UU => rU((() => (0, QU.i)(UU))),
        intelGen9: UU => rU((() => (0, QU.p)(UU))),
        gpuClassWebGlArm: BU,
        storeGpuClassVerdict: UU => {
          CU.k.setItem(QU.F, UU)
        },
        gpuClassOnWebGl: UU => (0, eU.b)(UU),
        override: () => function() {
          if ((0, TU.l)("render") && "webgl1" === (0, TU.j)("renderer")) return "webgl1";
          const UU = [() => new URLSearchParams(window.location.search).get(cU.e), () => CU.k.getItem(cU.i), () => {
            const UU = localStorage.getItem(wU);
            return null !== UU && localStorage.removeItem(wU), "1" === UU ? "webgl2" : null
          }];
          for (const RU of UU) {
            let UU = null;
            try {
              UU = XU(RU())
            } catch {}
            if (null !== UU) return UU
          }
          return null
        }(),
        claimed: () => XU((0, qU.k)()),
        webGpuSetting: () => {
          const UU = CU.k.getItem(tU.gc);
          return "boolean" === typeof UU ? UU : null
        },
        heldBack: () => eU.f,
        storeHoldbackSpared: UU => {
          CU.k.setItem(QU.D, UU)
        },
        intelGen9OnWebGl: () => eU.i,
        Fu: () => rU((() => (0, GU.f)(jU.featureFlags.settings.canUseShaderPacks))),
        windows: () => rU((() => "windows" === (0, jU.getOperatingSystem)()))
      }
    }

    function rU(UU) {
      try {
        return UU()
      } catch {
        return !1
      }
    }

    function XU(UU) {
      return "lite" === UU ? "webgpu" : "webgl2" === UU || "babylon" === UU ? "webgl" : null
    }
    async function vU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VU();
      const RU = await async function(UU) {
        const RU = function(UU) {
            const RU = UU.override(),
              gU = UU.webGpuSetting(),
              tU = null === RU && !0 !== gU && UU.Fu(),
              pU = null !== RU || null !== gU || tU ? null : UU.claimed(),
              EU = null !== RU ? "override" : !0 === gU ? "setting" : tU ? "pack" : !1 === gU ? "setting" : null !== pU ? "claim" : "default",
              PU = function(UU) {
                return "override" === UU || "setting" === UU
              }(EU);
            if ("webgl" === RU || "webgl1" === RU || "webgl" === pU || "setting" === EU && !1 === gU) return {
              source: EU,
              asked: PU,
              refused: "not_requested"
            };
            if (!UU.gpu) return {
              source: EU,
              asked: PU,
              refused: "no_webgpu_api"
            };
            const TU = "default" === EU && UU.heldBack();
            if (TU && !UU.windows()) return {
              source: EU,
              asked: PU,
              refused: "webgl_holdback"
            };
            if (!PU && UU.offAfterLoss("pack" === EU)) return {
              source: EU,
              asked: PU,
              refused: TU ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: EU,
              asked: PU,
              heldBack: TU,
              gpu: UU.gpu
            }
          }(UU),
          {
            source: gU
          } = RU,
          tU = !RU.asked,
          pU = "gpu" in RU && RU.heldBack,
          PU = function(UU) {
            return pU && "none" !== UU ? {
              reason: "webgl_holdback",
              adapter: null,
              source: gU
            } : {
              reason: UU,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: gU
            }
          };
        if (!("gpu" in RU)) return PU(RU.refused);
        let TU;
        try {
          TU = await (0, IU.i)((0, fU.j)(RU.gpu), tR, `requestAdapter didn't settle in ${tR/1e3} s`)
        } catch {
          return PU("adapter_error")
        }
        if ("string" === typeof TU) return PU(TU);
        const qU = (0, fU.d)(TU);
        if ((0, fU.f)(TU)) return PU("software_adapter", qU);
        const KU = UU.windows() && function(UU) {
          return YU.has((0, EU.g)(UU.vendor, UU.architecture))
        }(qU);
        if (UU.storeHoldbackSpared(KU), pU && !KU) return PU("webgl_holdback");
        const cU = UU.intelGen9(TU),
          GU = cU ? null : UU.gpuClassWebGlArm(TU);
        if (UU.storeGpuClassVerdict(null !== GU && void 0 !== GU && GU), tU && UU.oldIntelDriver(TU)) return PU("old_intel_driver", qU);
        if ("default" === gU && UU.intelGen9OnWebGl() && cU) return PU("intel_gen9", qU);
        if ("default" === gU && null !== GU && UU.gpuClassOnWebGl(GU)) return PU("gpu_class_webgl", qU);
        return PU("none", qU)
      }(UU);
      if ("none" === RU.reason) return {
        backend: "webgpu",
        ...RU
      };
      if ("webgl1" !== UU.override() && UU.webgl2()) return {
        backend: "webgl",
        ...RU
      };
      const gU = UU.webgl1();
      return 0 === gU.length ? {
        backend: "webgl1",
        ...RU
      } : {
        missing: gU
      }
    }
    let dU = !1;
    async function HU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VU();
      if (null === UU) return null;
      const gU = await vU(RU);
      return dU = !("missing" in gU) && "webgpu" === gU.backend && "claim" === gU.source, "missing" in gU ? gU : {
        ...gU,
        load: UU[gU.backend]
      }
    }
    async function SU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VU().gpu,
        tU = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== UU.backend) return !1;
      const pU = kU(RU, "indirectDraws", "off", "on");
      if (null !== pU) return pU;
      if (null !== UU.adapter && (0, QU.q)(UU.adapter, tU)) return !0;
      if (null === gU) return !1;
      try {
        var EU;
        const UU = await (0, IU.i)(gU.requestAdapter({
          powerPreference: "low-power"
        }), tR, `the low-power requestAdapter didn't settle in ${tR/1e3} s`);
        return (0, QU.q)(null !== (EU = null === UU || void 0 === UU ? void 0 : UU.info) && void 0 !== EU ? EU : {}, tU)
      } catch (PU) {
        return PU instanceof IU.f
      }
    }

    function sU(UU, RU, gU) {
      if ("webgpu" !== UU.backend) return !1;
      const tU = kU(RU, "terrainFetch", "texture", "storage");
      return null !== tU ? tU : null !== UU.adapter && (0, QU.l)(UU.adapter, gU)
    }

    function yU(UU, RU, gU) {
      if ("webgpu" !== UU.backend) return !1;
      const tU = kU(RU, "sceneDepth", "off", "on");
      return null !== tU ? tU : null !== UU.adapter && (0, QU.n)(UU.adapter, gU)
    }

    function kU(UU, RU, gU, tU) {
      const pU = new URLSearchParams(UU).get(RU),
        EU = null !== pU && void 0 !== pU ? pU : (0, qU.g)(RU);
      return EU !== gU && EU !== tU ? null : (dU ||= null === pU, EU === gU)
    }

    function FU(UU, RU) {
      return "webgl" === UU.backend && (0, EU.p)(RU)
    }

    function iU(UU) {
      return null !== UU && "missing" in UU
    }

    function AU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PU.b;
      try {
        const gU = "start_failed" === UU || "pipeline_failed" === UU,
          tU = RU.turnOffWebGpuAfterDeviceLoss(gU ? "visible" : (0, hU.g)((0, uU.j)()));
        return !dU || tU && !RU.isWebGpuOffAfterLoss() || (0, qU.t)("webgpuLoss"), RU.isWebGpuOffAfterLoss() && "webgpu" === XU(CU.k.getItem(cU.i)) && CU.k.removeItem(cU.i), (0, TU.l)("webgpuloss") && (0, KU.b)((RU => {
          RU.noteWebGpuLoss("wasm", tU ? UU : `${UU}, which storage didn't keep`, null)
        })), tU
      } catch {
        return !1
      }
    }

    function zU(UU) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !LU()) ? AU(UU) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const MU = "framePacing";

    function DU(UU) {
      const RU = new URLSearchParams(UU).get(MU);
      return null !== RU && /^\d{1,9}$/.test(RU) ? Number(RU) : void 0
    }

    function LU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === XU(new URLSearchParams(UU).get(cU.e))
      } catch {
        return !1
      }
    }

    function NU(UU) {
      return !!lU(UU) || UU instanceof Error && !(UU instanceof WebAssembly.RuntimeError) && UU.message.startsWith(`${xU.e.RenderSurfaceUnusable}:`)
    }

    function lU(UU) {
      const {
        name: RU,
        message: gU
      } = null !== UU && void 0 !== UU ? UU : {};
      return "InvalidStateError" === RU && "string" === typeof gU && gU.startsWith("GPUDevice.")
    }

    function OU(UU) {
      const RU = UU;
      return "function" === typeof RU.JgU && "function" === typeof RU.wgU ? RU : null
    }

    function UR(UU) {
      return "function" === typeof UU.BgU ? UU : null
    }
    const RR = "openRenderer";

    function gR(UU) {
      const RU = null === UU || void 0 === UU ? void 0 : UU.zpU();
      return void 0 === RU ? void 0 : new Error(RU)
    }
    const tR = 5e3,
      pR = 15e3;

    function ER(UU, RU, gU, tU, pU, EU) {
      return (0, IU.i)(function(UU, RU, gU, tU, pU, EU) {
        return (0, JU.g)(UU, RU, (() => UU.BgU(gU, tU, pU, EU.indirectHangs, EU.storagePullBreaks, EU.splitPassBreaks, EU.framesAhead, EU.instancedTerrainSlow)))
      }(UU, RU, gU, tU, pU, EU), pR, `${xU.e.RenderSurfaceUnusable}: the renderer didn't open in ${pR/1e3} s`, TR)
    }
    async function PR(UU, RU, gU, tU, pU, EU) {
      if ("function" !== typeof UU.VEU) throw new Error("this core has no set_renderer");
      const PU = await ER(RU, RR, gU, pU, tU, EU);
      try {
        UU.VEU(PU)
      } catch (TU) {
        throw TR(PU), TU
      }
    }

    function TR(UU) {
      try {
        UU.free()
      } catch {}
    }
  },
  40172: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU
    });
    const tU = {
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
  40193: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => qU,
      g: () => TU
    });
    var tU = gU(657),
      pU = gU(663);

    function EU(UU, RU) {
      const gU = null === RU ? void 0 : tU.b.get(RU);
      return "all" === gU || "webgl" === gU && "webgpu" !== UU.backend ? RU : null
    }

    function PU(UU) {
      return "software_adapter" === UU.reason ? null : UU.adapter
    }

    function TU(UU, RU) {
      const gU = (0, tU.s)();
      return null === gU ? null : (0, tU.f)(PU(UU), gU, RU ? tU.l : tU.i)
    }

    function qU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pU.j;
      const tU = EU(UU, RU);
      return null !== tU && "webgl" === UU.backend && gU(tU) ? null : tU
    }
  },
  40177: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      g: () => cU,
      j: () => PU,
      k: () => qU
    });
    var tU = gU(35889);
    class pU extends Error {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${UU}: the module trapped${gU?" in an earlier call":""}: ${String(RU)}`, {
          cause: RU
        }), this.site = UU, this.trap = RU, this.earlier = gU, this.name = "ModuleTrapError", RU instanceof Error && void 0 !== RU.stack && (this.stack = `${this.name}: ${this.message}\n${RU.stack}`)
      }
    }
    const EU = new WeakMap;

    function PU(UU) {
      return EU.has(UU)
    }

    function TU(UU, RU) {
      EU.has(UU) || EU.set(UU, RU)
    }

    function qU(UU, RU) {
      return !!(0, tU.h)(RU) && (TU(UU, RU), !0)
    }
    const KU = [
      ["error", UU => UU.error],
      ["unhandledrejection", UU => UU.reason]
    ];

    function cU(UU, RU, gU) {
      let PU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return EU.has(UU) ? Promise.reject(new pU(RU, EU.get(UU), !0)) : new Promise(((EU, qU) => {
        const cU = gU => {
            TU(UU, gU), uU(), qU(new pU(RU, gU))
          },
          GU = UU => {
            UU instanceof WebAssembly.RuntimeError ? cU(UU) : (uU(), qU(UU))
          },
          jU = KU.map((UU => {
            let [RU, gU] = UU;
            return [RU, UU => {
              const RU = gU(UU);
              (0, tU.h)(RU) && cU(RU)
            }]
          })),
          uU = () => {
            for (const [UU, RU] of jU) null === PU || void 0 === PU || PU.removeEventListener(UU, RU)
          };
        for (const [UU, RU] of jU) null === PU || void 0 === PU || PU.addEventListener(UU, RU);
        let CU;
        try {
          CU = gU()
        } catch (hU) {
          return void GU(hU)
        }
        CU.then((UU => {
          uU(), EU(UU)
        }), GU)
      }))
    }
  },
  40201: (UU, RU, gU) => {
    gU.d(RU, {
      A: () => sU,
      D: () => SU,
      H: () => VU,
      I: () => wU,
      L: () => YU,
      P: () => BU,
      S: () => XU,
      V: () => aU,
      b: () => JU,
      f: () => xU,
      h: () => vU,
      j: () => rU,
      m: () => fU,
      o: () => IU,
      r: () => eU,
      v: () => bU,
      z: () => ZU
    });
    var tU = gU(201),
      pU = gU(263),
      EU = gU(21),
      PU = gU(291),
      TU = gU(34),
      qU = gU(40166),
      KU = gU(40193),
      cU = gU(40203),
      GU = (gU(40186), gU(40207)),
      jU = gU(40210);
    const uU = "wasmJoinBuild";
    let CU = null,
      hU = null,
      QU = null;

    function eU(UU) {
      QU = UU
    }
    let WU = !1;

    function fU() {
      WU = !0
    }

    function xU() {
      return WU
    }
    let mU = !1;

    function IU() {
      mU = !0
    }

    function JU() {
      return mU
    }

    function wU() {
      return QU
    }
    let nU = null;

    function bU(UU) {
      nU = UU, (0, PU.e)(UU)
    }
    const oU = "wasmClientRenderLost";

    function ZU() {
      TU.l.setItem(oU, !0)
    }

    function aU() {
      return !0 === TU.l.getItem(oU)
    }

    function YU() {
      return nU
    }

    function BU() {
      return null === CU && (TU.k.removeItem("wasmLastPick"), TU.k.removeItem("wasmGuessVerdict"), (0, PU.l)(), CU = (0, qU.w)(cU.f).then((UU => (null === UU || (0, qU.k)(UU) || (hU = GU.e[UU.backend], EU.b.followGameGpu("webgpu" === UU.backend ? UU.adapter : null), "webgpu" === UU.backend && (0, jU.g)()), UU)))), CU
    }

    function VU() {
      return hU
    }

    function rU(UU) {
      return UU ? UU.load() : Promise.resolve().then((function() {
        var UU = new Error("Cannot find module '@bloxd/wasm/client'");
        throw UU.code = "MODULE_NOT_FOUND", UU
      })).then((UU => UU.bloxdWasmClient))
    }

    function XU(UU) {
      TU.k.setItem(uU, UU)
    }
    async function vU() {
      if (null === cU.f) return rU(null);
      const UU = TU.k.getItem(uU);
      let RU = "none" === UU ? null : "webgl";
      return null !== UU && "none" !== UU && ("string" === typeof UU && void 0 !== (0, tU.b)(cU.f, UU) ? RU = UU : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(UU)}, is none of this client's: guessing WebGL2's`)), null === RU ? null : cU.f[RU]()
    }
    let dU = null,
      HU = null;

    function SU() {
      return dU ??= BU().then((async UU => {
        var RU;
        const gU = null !== UU && !(0, qU.k)(UU),
          tU = {
            indirectHangs: gU && await (0, qU.y)(UU, window.location.search),
            storagePullBreaks: gU && (0, qU.L)(UU, window.location.search),
            splitPassBreaks: gU && (0, qU.I)(UU, window.location.search),
            framesAhead: (0, qU.f)(window.location.search),
            instancedTerrainSlow: gU && (0, qU.B)(UU, null !== (RU = (0, KU.g)(UU, !1)) && void 0 !== RU ? RU : (0, pU.c)())
          };
        return HU = tU.indirectHangs, tU
      })), dU
    }

    function sU() {
      return HU
    }
  },
  40207: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    const tU = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40203: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      f: () => tU
    });
    const tU = {
        webgpu: async () => (await gU.e(8).then((() => gU(42571)))).bloxdWasmWebgpu,
        webgl: async () => (await gU.e(6).then((() => gU(42587)))).bloxdWasmWebgl,
        webgl1: async () => (await gU.e(7).then((() => gU(42592)))).bloxdWasmWebgl1
      },
      pU = async () => (await gU.e(5).then((() => gU(42606)))).compileAnimationPackInWasm
  },
  40218: (UU, RU, gU) => {
    function tU() {
      return gU(40226)
    }

    function pU() {
      return gU(40235)
    }

    function EU(UU) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(UU)
    }
    gU.d(RU, {
      e: () => EU,
      f: () => tU,
      g: () => pU
    })
  },
  40210: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU,
      g: () => qU
    });
    var tU = gU(96);
    const pU = "webgpuPipeline";

    function EU(UU) {
      return UU.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let PU = null;

    function TU() {
      if (null === PU) try {
        UU = (0, tU.getBrowserName)(), RU = (0, tU.getBrowserVersion)(), gU = (0, tU.getOperatingSystem)(), pU = (0, tU.getOperatingSystemVersion)(), PU = `${UU.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===RU?"unknown":EU(RU)}-${gU}${void 0===pU?"":`_${EU(pU)}`}`
      } catch (TU) {
        console.warn("The user agent couldn't be read for its browser code", TU), PU = "unknown"
      }
      var UU, RU, gU, pU;
      return PU
    }

    function qU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const RU = `WGPU-${TU()}`,
        tU = (UU, tU) => {
          const {
            reason: EU,
            message: PU
          } = tU, TU = {
            pipeline: null !== UU && void 0 !== UU ? UU : "",
            reason: String(EU),
            browserMessage: String(PU)
          };
          Promise.all([gU.e(262), gU.e(86)]).then((() => gU(40319))).then((UU => {
            let {
              reportCrash: gU
            } = UU;
            gU({
              kind: "coreError",
              code: RU,
              site: pU,
              fatal: !1,
              message: `${TU.pipeline} ${TU.reason}: ${TU.browserMessage}`,
              details: TU,
              error: tU
            })
          })).catch((UU => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", UU)
          }))
        },
        EU = UU.createRenderPipelineAsync;
      UU.createRenderPipelineAsync = function(UU) {
        return EU.call(this, UU).catch((RU => {
          throw tU(UU.label, RU), RU
        }))
      };
      const PU = UU.createComputePipelineAsync;
      UU.createComputePipelineAsync = function(UU) {
        return PU.call(this, UU).catch((RU => {
          throw tU(UU.label, RU), RU
        }))
      }
    }
  },
  40158: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/bloxd_wasm_models_bg.8c4fc469aca40ce98e8d.wasm"
  },
  40153: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/bloxd_wasm_workers_bg.5fef21cdf91bff05701f.wasm"
  },
  40226: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40235: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  40150: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU,
      d: () => tU
    });
    const tU = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new gU.U(gU(40153))
      }
    };
    const pU = {
      name: "bloxd_wasm_models",
      url: function() {
        return new gU.U(gU(40158))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);