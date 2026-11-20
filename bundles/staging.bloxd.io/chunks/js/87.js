export const id = 87;
export const ids = [87];
export const modules = {
  4564: (uu, Ru, yu) => {
    yu.d(Ru, {
      $: () => Du,
      $b: () => Pu,
      Ab: () => xu,
      B: () => Eu,
      Db: () => Cu,
      E: () => Qu,
      G: () => Su,
      H: () => iu,
      Hb: () => bu,
      Ib: () => Uu,
      L: () => Xu,
      Lb: () => Lu,
      N: () => pu,
      Pb: () => su,
      Q: () => Nu,
      R: () => Bu,
      Rb: () => lu,
      S: () => ru,
      Sb: () => gu,
      Tb: () => Hu,
      Vb: () => du,
      W: () => ku,
      X: () => Au,
      Yb: () => Fu,
      Zb: () => Ku,
      c: () => hu,
      db: () => eu,
      g: () => Zu,
      hb: () => Mu,
      i: () => Vu,
      j: () => ju,
      lb: () => zu,
      m: () => wu,
      ob: () => cu,
      p: () => Wu,
      rb: () => tu,
      s: () => Tu,
      ub: () => Iu,
      w: () => mu,
      x: () => Ju,
      xb: () => nu,
      yb: () => Gu
    });
    const Eu = 32,
      Ku = 33.333333333333336,
      Qu = {
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
      mu = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Ju = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Nu = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Xu = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Vu = {
        Look: 0,
        Remesh: 1
      },
      ru = 8,
      Bu = 1,
      xu = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Su = {
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
      pu = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Tu = {
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
      Wu = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      ju = 4,
      Hu = 4,
      du = 65535,
      bu = {
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
      Cu = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      ku = 88,
      eu = 0,
      Au = 24,
      Du = 48,
      Mu = 80,
      Iu = {
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
      Gu = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Uu = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      nu = {
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
      su = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      tu = 65535,
      lu = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      gu = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      cu = 2,
      Lu = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      zu = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Fu = {
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
      wu = {
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
      Zu = {
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
      hu = 8,
      Pu = {
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
      iu = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  40381: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju
    });
    const Eu = 1 << 20,
      Ku = 1 << 21,
      Qu = 1024,
      mu = 2048;

    function Ju(uu, Ru, yu) {
      const Ju = uu + Eu,
        Nu = Ru + Qu,
        Xu = yu + Eu;
      return Ju < 0 || Ju >= Ku || Xu < 0 || Xu >= Ku || Nu < 0 || Nu >= mu ? -1 : (Ju * Ku + Xu) * mu + Nu
    }
  },
  40374: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      h: () => mu,
      k: () => Ku,
      m: () => Qu,
      n: () => Vu,
      r: () => Xu,
      s: () => Nu,
      v: () => Ju
    });
    yu(3262);
    yu(40381);

    function Eu(uu) {}

    function Ku(uu) {}

    function Qu(uu) {}

    function mu(uu) {}

    function Ju(uu) {}

    function Nu(uu, Ru, yu) {}

    function Xu(uu) {}

    function Vu(uu) {}
  },
  40361: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => zu,
      B: () => hu,
      F: () => uR,
      I: () => wu,
      L: () => Fu,
      N: () => Yu,
      Q: () => iu,
      R: () => yR,
      V: () => Ou,
      X: () => Mu,
      d: () => RR,
      f: () => mR,
      h: () => qu,
      j: () => fu,
      l: () => Pu,
      o: () => au,
      q: () => vu,
      u: () => QR,
      w: () => Lu
    });
    var Eu = yu(330),
      Ku = yu(288),
      Qu = yu(293),
      mu = yu(27),
      Ju = yu(2707),
      Nu = yu(654),
      Xu = yu(4284),
      Vu = yu(2655),
      ru = yu(3255),
      Bu = yu(106),
      xu = yu(325),
      Su = yu(47),
      pu = yu(305),
      Tu = yu(129),
      Wu = yu(616),
      ju = yu(143),
      Hu = yu(137),
      du = yu(4564),
      bu = yu(40366),
      Cu = yu(1699),
      ku = yu(40371);
    const eu = "bloxd-webgpuOffAfterLoss",
      Au = "context:webgl",
      Du = "probe:threw";

    function Mu(uu) {
      let Ru;
      try {
        Ru = uu.getContext("webgl", {
          powerPreference: ju.b
        })
      } catch {
        Ru = null
      }
      if (null === Ru) return null;
      let yu = null;
      try {
        const uu = Ru.getParameter(Ru.MAX_TEXTURE_SIZE);
        yu = "number" === typeof uu && uu > 0 ? uu : null
      } catch {
        yu = null
      }
      try {
        var Eu;
        null === (Eu = Ru.getExtension("WEBGL_lose_context")) || void 0 === Eu || Eu.loseContext()
      } catch {}
      return yu
    }
    const Iu = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      Gu = "mali_valhall",
      Uu = new Set(["nvidia_pre_turing"]);

    function nu(uu) {
      return function(uu) {
        try {
          return uu()
        } catch {
          return null
        }
      }((() => {
        var Ru, yu, Eu, mu;
        const Ju = null !== (Ru = null === (yu = uu.info) || void 0 === yu ? void 0 : yu.vendor) && void 0 !== Ru ? Ru : "";
        return "windows" === (0, Bu.getOperatingSystem)() && "" !== Ju && "intel" !== (0, Bu.normaliseGpuVendor)(Ju) ? null : ((0, Bu.seedGpuVendor)(Ju), Nu = (0, Ku.h)(), Xu = (0, Qu.f)(Ju, null !== (Eu = null === (mu = uu.info) || void 0 === mu ? void 0 : mu.architecture) && void 0 !== Eu ? Eu : ""), Iu.has(Nu) ? "android_arm" === Nu && Xu === Gu ? "webgpu_default" : "webgl_default" : null);
        var Nu, Xu
      }))
    }

    function su() {
      var uu;
      return {
        gpu: null !== (uu = navigator.gpu) && void 0 !== uu ? uu : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(uu) {
          let Ru, yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bu.b;
          try {
            Ru = uu.getContext("webgl")
          } catch {
            Ru = null
          }
          if (null === Ru) return [Au];
          const Eu = [];
          try {
            for (const Ku of yu.extensions) null === Ru.getExtension(Ku) && Eu.push(Ku);
            for (const [Ku, Qu] of Object.entries(yu.limits)) {
              const uu = Ru[Ku],
                yu = "number" === typeof uu ? Ru.getParameter(uu) : null;
              ("number" !== typeof yu || yu < Qu) && Eu.push(`limit:${Ku}`)
            }
            const uu = Ru.getShaderPrecisionFormat(Ru.VERTEX_SHADER, Ru.HIGH_FLOAT);
            (null === uu || uu.precision < yu.vertexHighFloatBits) && Eu.push("precision:vertex_high_float")
          } catch {
            Eu.push(Du)
          }
          try {
            var Ku;
            null === (Ku = Ru.getExtension("WEBGL_lose_context")) || void 0 === Ku || Ku.loseContext()
          } catch {}
          return Eu
        }(document.createElement("canvas")),
        offAfterLoss: uu => tu((() => uu ? (0, pu.v)() : mu.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: uu => tu((() => (0, Tu.f)(uu))),
        intelGen9: uu => tu((() => (0, Tu.p)(uu))),
        gpuClassWebGlArm: nu,
        storeGpuClassVerdict: uu => {
          Su.i.setItem(Tu.F, uu)
        },
        gpuClassOnWebGl: uu => (0, Wu.c)(uu),
        override: () => function() {
          if ((0, Ju.m)("render") && "webgl1" === (0, Ju.k)("renderer")) return "webgl1";
          const uu = [() => new URLSearchParams(window.location.search).get(Vu.b), () => Su.i.getItem(Vu.f), () => {
            const uu = localStorage.getItem(eu);
            return null !== uu && localStorage.removeItem(eu), "1" === uu ? "webgl2" : null
          }];
          for (const Ru of uu) {
            let uu = null;
            try {
              uu = lu(Ru())
            } catch {}
            if (null !== uu) return uu
          }
          return null
        }(),
        claimed: () => lu((0, Nu.h)()),
        webGpuSetting: () => {
          const uu = Su.i.getItem(Eu.pc);
          return "boolean" === typeof uu ? uu : null
        },
        heldBack: () => Wu.d,
        storeHoldbackSpared: uu => {
          Su.i.setItem(Tu.D, uu)
        },
        intelGen9OnWebGl: () => Wu.h,
        ix: () => tu((() => (0, ru.h)(Bu.featureFlags.settings.canUseShaderPacks))),
        windows: () => tu((() => "windows" === (0, Bu.getOperatingSystem)()))
      }
    }

    function tu(uu) {
      try {
        return uu()
      } catch {
        return !1
      }
    }

    function lu(uu) {
      return "lite" === uu ? "webgpu" : "webgl2" === uu || "babylon" === uu ? "webgl" : null
    }
    async function gu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : su();
      const Ru = await async function(uu) {
        const Ru = function(uu) {
            const Ru = uu.override(),
              yu = uu.webGpuSetting(),
              Eu = null === Ru && !0 !== yu && uu.ix(),
              Ku = null !== Ru || null !== yu || Eu ? null : uu.claimed(),
              Qu = null !== Ru ? "override" : !0 === yu ? "setting" : Eu ? "pack" : !1 === yu ? "setting" : null !== Ku ? "claim" : "default",
              mu = function(uu) {
                return "override" === uu || "setting" === uu
              }(Qu);
            if ("webgl" === Ru || "webgl1" === Ru || "webgl" === Ku || "setting" === Qu && !1 === yu) return {
              source: Qu,
              asked: mu,
              refused: "not_requested"
            };
            if (!uu.gpu) return {
              source: Qu,
              asked: mu,
              refused: "no_webgpu_api"
            };
            const Ju = "default" === Qu && uu.heldBack();
            if (Ju && !uu.windows()) return {
              source: Qu,
              asked: mu,
              refused: "webgl_holdback"
            };
            if (!mu && uu.offAfterLoss("pack" === Qu)) return {
              source: Qu,
              asked: mu,
              refused: Ju ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: Qu,
              asked: mu,
              heldBack: Ju,
              gpu: uu.gpu
            }
          }(uu),
          {
            source: yu
          } = Ru,
          Eu = !Ru.asked,
          Ku = "gpu" in Ru && Ru.heldBack,
          mu = function(uu) {
            return Ku && "none" !== uu ? {
              reason: "webgl_holdback",
              adapter: null,
              source: yu
            } : {
              reason: uu,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: yu
            }
          };
        if (!("gpu" in Ru)) return mu(Ru.refused);
        let Ju;
        try {
          Ju = await (0, Cu.i)((0, Hu.l)(Ru.gpu), ER, `requestAdapter didn't settle in ${ER/1e3} s`)
        } catch {
          return mu("adapter_error")
        }
        if ("string" === typeof Ju) return mu(Ju);
        const Nu = (0, Hu.d)(Ju);
        if ((0, Hu.h)(Ju)) return mu("software_adapter", Nu);
        const Xu = uu.windows() && function(uu) {
          return Uu.has((0, Qu.f)(uu.vendor, uu.architecture))
        }(Nu);
        if (uu.storeHoldbackSpared(Xu), Ku && !Xu) return mu("webgl_holdback");
        const Vu = uu.intelGen9(Ju),
          ru = Vu ? null : uu.gpuClassWebGlArm(Ju);
        if (uu.storeGpuClassVerdict(null !== ru && void 0 !== ru && ru), Eu && uu.oldIntelDriver(Ju)) return mu("old_intel_driver", Nu);
        if ("default" === yu && uu.intelGen9OnWebGl() && Vu) return mu("intel_gen9", Nu);
        if ("default" === yu && null !== ru && uu.gpuClassOnWebGl(ru)) return mu("gpu_class_webgl", Nu);
        return mu("none", Nu)
      }(uu);
      if ("none" === Ru.reason) return {
        backend: "webgpu",
        ...Ru
      };
      if ("webgl1" !== uu.override() && uu.webgl2()) return {
        backend: "webgl",
        ...Ru
      };
      const yu = uu.webgl1();
      return 0 === yu.length ? {
        backend: "webgl1",
        ...Ru
      } : {
        missing: yu
      }
    }
    let cu = !1;
    async function Lu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : su();
      if (null === uu) return null;
      const yu = await gu(Ru);
      return cu = !("missing" in yu) && "webgpu" === yu.backend && "claim" === yu.source, "missing" in yu ? yu : {
        ...yu,
        load: uu[yu.backend]
      }
    }
    async function zu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : su().gpu,
        Eu = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== uu.backend) return !1;
      const Ku = Zu(Ru, "indirectDraws", "off", "on");
      if (null !== Ku) return Ku;
      if (null !== uu.adapter && (0, Tu.t)(uu.adapter, Eu)) return !0;
      if (null === yu) return !1;
      try {
        var Qu;
        const uu = await (0, Cu.i)(yu.requestAdapter({
          powerPreference: "low-power"
        }), ER, `the low-power requestAdapter didn't settle in ${ER/1e3} s`);
        return (0, Tu.t)(null !== (Qu = null === uu || void 0 === uu ? void 0 : uu.info) && void 0 !== Qu ? Qu : {}, Eu)
      } catch (mu) {
        return mu instanceof Cu.d
      }
    }

    function Fu(uu, Ru, yu) {
      if ("webgpu" !== uu.backend) return !1;
      const Eu = Zu(Ru, "terrainFetch", "texture", "storage");
      return null !== Eu ? Eu : null !== uu.adapter && (0, Tu.i)(uu.adapter, yu)
    }

    function wu(uu, Ru, yu) {
      if ("webgpu" !== uu.backend) return !1;
      const Eu = Zu(Ru, "sceneDepth", "off", "on");
      return null !== Eu ? Eu : null !== uu.adapter && (0, Tu.m)(uu.adapter, yu)
    }

    function Zu(uu, Ru, yu, Eu) {
      const Ku = new URLSearchParams(uu).get(Ru),
        Qu = null !== Ku && void 0 !== Ku ? Ku : (0, Nu.f)(Ru);
      return Qu !== yu && Qu !== Eu ? null : (cu ||= null === Ku, Qu === yu)
    }

    function hu(uu, Ru) {
      return "webgl" === uu.backend && (0, Qu.k)(Ru)
    }

    function Pu(uu) {
      return null !== uu && "missing" in uu
    }

    function iu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mu.d;
      try {
        const yu = "start_failed" === uu || "pipeline_failed" === uu,
          Eu = Ru.turnOffWebGpuAfterDeviceLoss(yu ? "visible" : (0, pu.i)((0, xu.h)()));
        return !cu || Eu && !Ru.isWebGpuOffAfterLoss() || (0, Nu.s)("webgpuLoss"), Ru.isWebGpuOffAfterLoss() && "webgpu" === lu(Su.i.getItem(Vu.f)) && Su.i.removeItem(Vu.f), (0, Ju.m)("webgpuloss") && (0, Xu.d)((Ru => {
          Ru.noteWebGpuLoss("wasm", Eu ? uu : `${uu}, which storage didn't keep`, null)
        })), Eu
      } catch {
        return !1
      }
    }

    function Yu(uu) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Ou()) ? iu(uu) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const ou = "framePacing";

    function qu(uu) {
      const Ru = new URLSearchParams(uu).get(ou);
      return null !== Ru && /^\d{1,9}$/.test(Ru) ? Number(Ru) : void 0
    }

    function Ou() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === lu(new URLSearchParams(uu).get(Vu.b))
      } catch {
        return !1
      }
    }

    function vu(uu) {
      return !!au(uu) || uu instanceof Error && !(uu instanceof WebAssembly.RuntimeError) && uu.message.startsWith(`${du.g.RenderSurfaceUnusable}:`)
    }

    function au(uu) {
      const {
        name: Ru,
        message: yu
      } = null !== uu && void 0 !== uu ? uu : {};
      return "InvalidStateError" === Ru && "string" === typeof yu && yu.startsWith("GPUDevice.")
    }

    function fu(uu) {
      const Ru = uu;
      return "function" === typeof Ru.xEu && "function" === typeof Ru.SEu ? Ru : null
    }

    function uR(uu) {
      return "function" === typeof uu.bEu ? uu : null
    }
    const RR = "openRenderer";

    function yR(uu) {
      const Ru = null === uu || void 0 === uu ? void 0 : uu.sQu();
      return void 0 === Ru ? void 0 : new Error(Ru)
    }
    const ER = 5e3,
      KR = 15e3;

    function QR(uu, Ru, yu, Eu, Ku, Qu) {
      return (0, Cu.i)(function(uu, Ru, yu, Eu, Ku, Qu) {
        return (0, ku.d)(uu, Ru, (() => uu.bEu(yu, Eu, Ku, Qu.indirectHangs, Qu.storagePullBreaks, Qu.splitPassBreaks, Qu.framesAhead, Qu.instancedTerrainSlow)))
      }(uu, Ru, yu, Eu, Ku, Qu), KR, `${du.g.RenderSurfaceUnusable}: the renderer didn't open in ${KR/1e3} s`, JR)
    }
    async function mR(uu, Ru, yu, Eu, Ku, Qu) {
      if ("function" !== typeof uu.Hmu) throw new Error("this core has no set_renderer");
      const mu = await QR(Ru, RR, yu, Ku, Eu, Qu);
      try {
        uu.Hmu(mu)
      } catch (Ju) {
        throw JR(mu), Ju
      }
    }

    function JR(uu) {
      try {
        uu.free()
      } catch {}
    }
  },
  40366: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    const Eu = {
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
  40384: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Nu,
      e: () => Ju
    });
    var Eu = yu(673),
      Ku = yu(680);

    function Qu(uu, Ru) {
      const yu = null === Ru ? void 0 : Eu.b.get(Ru);
      return "all" === yu || "webgl" === yu && "webgpu" !== uu.backend ? Ru : null
    }

    function mu(uu) {
      return "software_adapter" === uu.reason ? null : uu.adapter
    }

    function Ju(uu, Ru) {
      const yu = (0, Eu.u)();
      return null === yu ? null : (0, Eu.f)(mu(uu), yu, Ru ? Eu.m : Eu.i)
    }

    function Nu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ku.l;
      const Eu = Qu(uu, Ru);
      return null !== Eu && "webgl" === uu.backend && yu(Eu) ? null : Eu
    }
  },
  40371: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku,
      d: () => Vu,
      h: () => mu,
      i: () => Nu
    });
    var Eu = yu(36176);
    class Ku extends Error {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${uu}: the module trapped${yu?" in an earlier call":""}: ${String(Ru)}`, {
          cause: Ru
        }), this.site = uu, this.trap = Ru, this.earlier = yu, this.name = "ModuleTrapError", Ru instanceof Error && void 0 !== Ru.stack && (this.stack = `${this.name}: ${this.message}\n${Ru.stack}`)
      }
    }
    const Qu = new WeakMap;

    function mu(uu) {
      return Qu.has(uu)
    }

    function Ju(uu, Ru) {
      Qu.has(uu) || Qu.set(uu, Ru)
    }

    function Nu(uu, Ru) {
      return !!(0, Eu.g)(Ru) && (Ju(uu, Ru), !0)
    }
    const Xu = [
      ["error", uu => uu.error],
      ["unhandledrejection", uu => uu.reason]
    ];

    function Vu(uu, Ru, yu) {
      let mu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Qu.has(uu) ? Promise.reject(new Ku(Ru, Qu.get(uu), !0)) : new Promise(((Qu, Nu) => {
        const Vu = yu => {
            Ju(uu, yu), xu(), Nu(new Ku(Ru, yu))
          },
          ru = uu => {
            uu instanceof WebAssembly.RuntimeError ? Vu(uu) : (xu(), Nu(uu))
          },
          Bu = Xu.map((uu => {
            let [Ru, yu] = uu;
            return [Ru, uu => {
              const Ru = yu(uu);
              (0, Eu.g)(Ru) && Vu(Ru)
            }]
          })),
          xu = () => {
            for (const [uu, Ru] of Bu) null === mu || void 0 === mu || mu.removeEventListener(uu, Ru)
          };
        for (const [uu, Ru] of Bu) null === mu || void 0 === mu || mu.addEventListener(uu, Ru);
        let Su;
        try {
          Su = yu()
        } catch (pu) {
          return void ru(pu)
        }
        Su.then((uu => {
          xu(), Qu(uu)
        }), ru)
      }))
    }
  },
  40393: (uu, Ru, yu) => {
    yu.d(Ru, {
      D: () => zu,
      E: () => su,
      F: () => eu,
      I: () => Uu,
      L: () => nu,
      O: () => lu,
      P: () => Gu,
      e: () => ku,
      g: () => du,
      k: () => gu,
      m: () => tu,
      o: () => Hu,
      r: () => Cu,
      t: () => Wu,
      w: () => Du,
      x: () => Iu,
      z: () => Fu
    });
    var Eu = yu(228),
      Ku = yu(293),
      Qu = yu(27),
      mu = yu(325),
      Ju = yu(47),
      Nu = yu(40361),
      Xu = yu(40384),
      Vu = yu(40401),
      ru = (yu(40374), yu(40403)),
      Bu = yu(40405);
    const xu = "wasmJoinBuild";
    let Su = null,
      pu = null,
      Tu = null;

    function Wu(uu) {
      Tu = uu
    }
    let ju = !1;

    function Hu() {
      ju = !0
    }

    function du() {
      return ju
    }
    let bu = !1;

    function Cu() {
      bu = !0
    }

    function ku() {
      return bu
    }

    function eu() {
      return Tu
    }
    let Au = null;

    function Du(uu) {
      Au = uu, (0, mu.e)(uu)
    }
    const Mu = "wasmClientRenderLost";

    function Iu() {
      Ju.j.setItem(Mu, !0)
    }

    function Gu() {
      return !0 === Ju.j.getItem(Mu)
    }

    function Uu() {
      return Au
    }

    function nu() {
      return null === Su && (Ju.i.removeItem("wasmLastPick"), Ju.i.removeItem("wasmGuessVerdict"), (0, mu.l)(), Su = (0, Nu.w)(Vu.e).then((uu => (null === uu || (0, Nu.l)(uu) || (pu = ru.b[uu.backend], Qu.d.followGameGpu("webgpu" === uu.backend ? uu.adapter : null), "webgpu" === uu.backend && (0, Bu.f)()), uu)))), Su
    }

    function su() {
      return pu
    }

    function tu(uu) {
      return uu ? uu.load() : Promise.resolve().then((function() {
        var uu = new Error("Cannot find module '@bloxd/wasm/client'");
        throw uu.code = "MODULE_NOT_FOUND", uu
      })).then((uu => uu.bloxdWasmClient))
    }

    function lu(uu) {
      Ju.i.setItem(xu, uu)
    }
    async function gu() {
      if (null === Vu.e) return tu(null);
      const uu = Ju.i.getItem(xu);
      let Ru = "none" === uu ? null : "webgl";
      return null !== uu && "none" !== uu && ("string" === typeof uu && void 0 !== (0, Eu.b)(Vu.e, uu) ? Ru = uu : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(uu)}, is none of this client's: guessing WebGL2's`)), null === Ru ? null : Vu.e[Ru]()
    }
    let cu = null,
      Lu = null;

    function zu() {
      return cu ??= nu().then((async uu => {
        var Ru;
        const yu = null !== uu && !(0, Nu.l)(uu),
          Eu = {
            indirectHangs: yu && await (0, Nu.A)(uu, window.location.search),
            storagePullBreaks: yu && (0, Nu.L)(uu, window.location.search),
            splitPassBreaks: yu && (0, Nu.I)(uu, window.location.search),
            framesAhead: (0, Nu.h)(window.location.search),
            instancedTerrainSlow: yu && (0, Nu.B)(uu, null !== (Ru = (0, Xu.e)(uu, !1)) && void 0 !== Ru ? Ru : (0, Ku.c)())
          };
        return Lu = Eu.indirectHangs, Eu
      })), cu
    }

    function Fu() {
      return Lu
    }
  },
  40403: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    const Eu = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40401: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      e: () => Eu
    });
    const Eu = {
        webgpu: async () => (await yu.e(8).then((() => yu(42808)))).bloxdWasmWebgpu,
        webgl: async () => (await yu.e(6).then((() => yu(42815)))).bloxdWasmWebgl,
        webgl1: async () => (await yu.e(7).then((() => yu(42827)))).bloxdWasmWebgl1
      },
      Ku = async () => (await yu.e(5).then((() => yu(42841)))).compileAnimationPackInWasm
  },
  40410: (uu, Ru, yu) => {
    function Eu() {
      return yu(40412)
    }

    function Ku() {
      return yu(40416)
    }

    function Qu(uu) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(uu)
    }
    yu.d(Ru, {
      c: () => Qu,
      g: () => Eu,
      i: () => Ku
    })
  },
  40405: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ju,
      f: () => Nu
    });
    var Eu = yu(106);
    const Ku = "webgpuPipeline";

    function Qu(uu) {
      return uu.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let mu = null;

    function Ju() {
      if (null === mu) try {
        uu = (0, Eu.getBrowserName)(), Ru = (0, Eu.getBrowserVersion)(), yu = (0, Eu.getOperatingSystem)(), Ku = (0, Eu.getOperatingSystemVersion)(), mu = `${uu.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===Ru?"unknown":Qu(Ru)}-${yu}${void 0===Ku?"":`_${Qu(Ku)}`}`
      } catch (Ju) {
        console.warn("The user agent couldn't be read for its browser code", Ju), mu = "unknown"
      }
      var uu, Ru, yu, Ku;
      return mu
    }

    function Nu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const Ru = `WGPU-${Ju()}`,
        Eu = (uu, Eu) => {
          const {
            reason: Qu,
            message: mu
          } = Eu, Ju = {
            pipeline: null !== uu && void 0 !== uu ? uu : "",
            reason: String(Qu),
            browserMessage: String(mu)
          };
          Promise.all([yu.e(262), yu.e(86)]).then((() => yu(40513))).then((uu => {
            let {
              reportCrash: yu
            } = uu;
            yu({
              kind: "coreError",
              code: Ru,
              site: Ku,
              fatal: !1,
              message: `${Ju.pipeline} ${Ju.reason}: ${Ju.browserMessage}`,
              details: Ju,
              error: Eu
            })
          })).catch((uu => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", uu)
          }))
        },
        Qu = uu.createRenderPipelineAsync;
      uu.createRenderPipelineAsync = function(uu) {
        return Qu.call(this, uu).catch((Ru => {
          throw Eu(uu.label, Ru), Ru
        }))
      };
      const mu = uu.createComputePipelineAsync;
      uu.createComputePipelineAsync = function(uu) {
        return mu.call(this, uu).catch((Ru => {
          throw Eu(uu.label, Ru), Ru
        }))
      }
    }
  },
  40354: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/bloxd_wasm_models_bg.ee72044a657ebe08ec1c.wasm"
  },
  40349: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/bloxd_wasm_workers_bg.16f06191eb66a031fedc.wasm"
  },
  40412: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40416: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  40341: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku,
      e: () => Eu
    });
    const Eu = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new yu.U(yu(40349))
      }
    };
    const Ku = {
      name: "bloxd_wasm_models",
      url: function() {
        return new yu.U(yu(40354))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);