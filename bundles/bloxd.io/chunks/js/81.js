export const id = 81;
export const ids = [81];
export const modules = {
  4192: (BB, TB, dB) => {
    dB.d(TB, {
      $: () => UB,
      A: () => pB,
      Ab: () => uB,
      C: () => gB,
      Db: () => SB,
      G: () => ZB,
      Hb: () => yB,
      J: () => oB,
      Jb: () => aB,
      L: () => YB,
      P: () => vB,
      Q: () => iB,
      R: () => NB,
      S: () => mB,
      V: () => tB,
      X: () => cB,
      _: () => rB,
      ab: () => fB,
      cb: () => zB,
      e: () => RB,
      eb: () => sB,
      f: () => QB,
      fb: () => EB,
      h: () => OB,
      hb: () => HB,
      i: () => PB,
      l: () => LB,
      lb: () => MB,
      m: () => kB,
      p: () => lB,
      pb: () => IB,
      qb: () => wB,
      t: () => JB,
      tb: () => FB,
      w: () => VB,
      wb: () => KB,
      zb: () => DB
    });
    const VB = 32,
      yB = 33.333333333333336,
      pB = {
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
        TerrainDrawn: 31
      },
      lB = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      JB = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      YB = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      gB = {
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
      oB = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      kB = {
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
      LB = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      OB = 4,
      DB = 4,
      uB = 65535,
      HB = {
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
      EB = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      vB = 88,
      mB = 0,
      iB = 24,
      NB = 48,
      tB = 80,
      fB = {
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
      sB = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      MB = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      zB = {
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
      wB = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      UB = 65535,
      FB = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      KB = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      rB = 2,
      IB = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      cB = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      SB = {
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
      PB = {
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
      QB = {
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
      RB = 8,
      aB = {
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
      ZB = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  39499: (BB, TB, dB) => {
    dB.d(TB, {
      $: () => hB,
      C: () => GB,
      G: () => eB,
      I: () => nB,
      K: () => lT,
      M: () => PB,
      P: () => SB,
      S: () => ZB,
      T: () => RB,
      U: () => cB,
      X: () => XB,
      Z: () => TT,
      bb: () => WB,
      e: () => dT,
      fb: () => xB,
      i: () => tB,
      jb: () => qB,
      l: () => JT,
      lb: () => VT,
      mb: () => bB,
      n: () => IB,
      pb: () => aB,
      r: () => AB,
      rb: () => zB,
      u: () => rB,
      w: () => KB,
      y: () => BT
    });
    var VB = dB(270),
      yB = dB(244),
      pB = dB(252),
      lB = dB(21),
      JB = dB(2583),
      YB = dB(2402),
      gB = dB(2939),
      oB = dB(95),
      kB = dB(262),
      LB = dB(33),
      OB = dB(256),
      DB = dB(113),
      uB = dB(584),
      HB = dB(122),
      EB = dB(119),
      vB = dB(4192),
      mB = dB(39508),
      iB = dB(2512),
      NB = dB(39514);
    const tB = ["override", "setting", "pack", "default"],
      fB = "bloxd-webgpuOffAfterLoss",
      sB = "context:webgl",
      MB = "probe:threw";

    function zB(BB) {
      let TB;
      try {
        TB = BB.getContext("webgl", {
          powerPreference: HB.b
        })
      } catch {
        TB = null
      }
      if (null === TB) return null;
      let dB = null;
      try {
        const BB = TB.getParameter(TB.MAX_TEXTURE_SIZE);
        dB = "number" === typeof BB && BB > 0 ? BB : null
      } catch {
        dB = null
      }
      try {
        var VB;
        null === (VB = TB.getExtension("WEBGL_lose_context")) || void 0 === VB || VB.loseContext()
      } catch {}
      return dB
    }
    const wB = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      UB = "mali_valhall",
      FB = new Set(["nvidia_pre_turing"]);

    function KB(BB) {
      return FB.has((0, pB.f)(BB.vendor, BB.architecture))
    }

    function rB(BB, TB) {
      return SB((() => {
        var dB, VB, yB, lB;
        const JB = null !== (dB = null === (VB = BB.info) || void 0 === VB ? void 0 : VB.vendor) && void 0 !== dB ? dB : "";
        if ("windows" === (0, oB.getOperatingSystem)() && "" !== JB && "intel" !== (0, oB.normaliseGpuVendor)(JB)) return null;
        const YB = TB(JB);
        return null === YB ? null : function(BB, TB) {
          return wB.has(BB) ? "android_arm" === BB && TB === UB ? "webgpu_default" : "webgl_default" : null
        }(YB, (0, pB.f)(JB, null !== (yB = null === (lB = BB.info) || void 0 === lB ? void 0 : lB.architecture) && void 0 !== yB ? yB : ""))
      }))
    }

    function IB() {
      var BB;
      return {
        gpu: null !== (BB = navigator.gpu) && void 0 !== BB ? BB : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(BB) {
          let TB, dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mB.e;
          try {
            TB = BB.getContext("webgl")
          } catch {
            TB = null
          }
          if (null === TB) return [sB];
          const VB = [];
          try {
            for (const yB of dB.extensions) null === TB.getExtension(yB) && VB.push(yB);
            for (const [yB, pB] of Object.entries(dB.limits)) {
              const BB = TB[yB],
                dB = "number" === typeof BB ? TB.getParameter(BB) : null;
              ("number" !== typeof dB || dB < pB) && VB.push(`limit:${yB}`)
            }
            const BB = TB.getShaderPrecisionFormat(TB.VERTEX_SHADER, TB.HIGH_FLOAT);
            (null === BB || BB.precision < dB.vertexHighFloatBits) && VB.push("precision:vertex_high_float")
          } catch {
            VB.push(MB)
          }
          try {
            var yB;
            null === (yB = TB.getExtension("WEBGL_lose_context")) || void 0 === yB || yB.loseContext()
          } catch {}
          return VB
        }(document.createElement("canvas")),
        offAfterLoss: BB => PB((() => BB ? (0, OB.w)() : lB.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: BB => PB((() => (0, DB.e)(BB))),
        intelGen9: BB => PB((() => (0, DB.k)(BB))),
        gpuClassWebGlArm: BB => rB(BB, (BB => ((0, oB.seedGpuVendor)(BB), (0, yB.j)()))),
        storeGpuClassVerdict: BB => {
          LB.j.setItem(DB.y, BB)
        },
        gpuClassOnWebGl: BB => (0, uB.e)(BB),
        override: () => cB(!0),
        webGpuSetting: () => {
          const BB = LB.j.getItem(VB.jc);
          return "boolean" === typeof BB ? BB : null
        },
        heldBack: () => uB.h,
        storeHoldbackSpared: BB => {
          LB.j.setItem(DB.x, BB)
        },
        intelGen9OnWebGl: () => uB.l,
        pD: () => PB((() => (0, gB.f)(oB.featureFlags.settings.canUseShaderPacks))),
        windows: () => PB((() => "windows" === (0, oB.getOperatingSystem)()))
      }
    }

    function cB(BB) {
      if ((0, JB.n)("render") && "webgl1" === (0, JB.m)("renderer")) return "webgl1";
      const TB = [() => new URLSearchParams(window.location.search).get(YB.b), () => LB.j.getItem(YB.c), () => {
        const TB = localStorage.getItem(fB);
        return null !== TB && BB && localStorage.removeItem(fB), "1" === TB ? "webgl2" : null
      }];
      for (const dB of TB) {
        let BB = null;
        try {
          BB = QB(dB())
        } catch {}
        if (null !== BB) return BB
      }
      return null
    }

    function SB(BB) {
      try {
        return BB()
      } catch {
        return null
      }
    }

    function PB(BB) {
      try {
        return BB()
      } catch {
        return !1
      }
    }

    function QB(BB) {
      return "lite" === BB ? "webgpu" : "webgl2" === BB || "babylon" === BB ? "webgl" : null
    }
    async function RB(BB) {
      var TB, dB, VB, yB;
      let pB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const lB = aB(BB),
        {
          source: JB
        } = lB,
        YB = !lB.asked,
        gB = "gpu" in lB && lB.heldBack,
        oB = function(BB) {
          return gB && "none" !== BB ? {
            reason: "webgl_holdback",
            adapter: null,
            source: JB
          } : {
            reason: BB,
            adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            source: JB
          }
        };
      if (!("gpu" in lB)) return oB(lB.refused);
      let kB;
      try {
        kB = await (0, iB.j)((0, EB.g)(lB.gpu, pB), yT, `requestAdapter didn't settle in ${yT/1e3} s`)
      } catch {
        return oB("adapter_error")
      }
      if ("string" === typeof kB) return oB(kB);
      const LB = {
        vendor: null !== (TB = null === (dB = kB.info) || void 0 === dB ? void 0 : dB.vendor) && void 0 !== TB ? TB : "",
        architecture: null !== (VB = null === (yB = kB.info) || void 0 === yB ? void 0 : yB.architecture) && void 0 !== VB ? VB : ""
      };
      if ((0, EB.c)(kB)) return oB("software_adapter", LB);
      const OB = BB.windows() && KB(LB);
      if (BB.storeHoldbackSpared(OB), gB && !OB) return oB("webgl_holdback");
      const DB = BB.intelGen9(kB),
        uB = DB ? null : BB.gpuClassWebGlArm(kB);
      return BB.storeGpuClassVerdict(null !== uB && void 0 !== uB && uB), YB && BB.oldIntelDriver(kB) ? oB("old_intel_driver", LB) : "default" === JB && BB.intelGen9OnWebGl() && DB ? oB("intel_gen9", LB) : "default" === JB && null !== uB && BB.gpuClassOnWebGl(uB) ? oB("gpu_class_webgl", LB) : oB("none", LB)
    }

    function aB(BB) {
      const TB = BB.override(),
        dB = BB.webGpuSetting(),
        VB = null !== TB ? "override" : !0 === dB ? "setting" : BB.pD() ? "pack" : !1 === dB ? "setting" : "default",
        yB = function(BB) {
          return "override" === BB || "setting" === BB
        }(VB);
      if ("webgl" === TB || "webgl1" === TB || "setting" === VB && !1 === dB) return {
        source: VB,
        asked: yB,
        refused: "not_requested"
      };
      if (!BB.gpu) return {
        source: VB,
        asked: yB,
        refused: "no_webgpu_api"
      };
      const pB = "default" === VB && BB.heldBack();
      return pB && !BB.windows() ? {
        source: VB,
        asked: yB,
        refused: "webgl_holdback"
      } : !yB && BB.offAfterLoss("pack" === VB) ? {
        source: VB,
        asked: yB,
        refused: pB ? "webgl_holdback" : "off_after_loss"
      } : {
        source: VB,
        asked: yB,
        heldBack: pB,
        gpu: BB.gpu
      }
    }
    async function ZB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IB();
      if (null === BB) return null;
      const dB = await async function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB();
        const TB = await RB(BB);
        if ("none" === TB.reason) return {
          backend: "webgpu",
          ...TB
        };
        if ("webgl1" !== BB.override() && BB.webgl2()) return {
          backend: "webgl",
          ...TB
        };
        const dB = BB.webgl1();
        return 0 === dB.length ? {
          backend: "webgl1",
          ...TB
        } : {
          missing: dB
        }
      }(TB);
      return "missing" in dB ? dB : {
        ...dB,
        load: BB[dB.backend]
      }
    }
    async function XB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB().gpu,
        VB = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== BB.backend) return !1;
      const yB = CB(TB, "indirectDraws", "off", "on");
      if (null !== yB) return yB;
      if (null !== BB.adapter && (0, DB.n)(BB.adapter, VB)) return !0;
      if (null === dB) return !1;
      try {
        var pB;
        const BB = await (0, iB.j)(dB.requestAdapter({
          powerPreference: "low-power"
        }), yT, `the low-power requestAdapter didn't settle in ${yT/1e3} s`);
        return (0, DB.n)(null !== (pB = null === BB || void 0 === BB ? void 0 : BB.info) && void 0 !== pB ? pB : {}, VB)
      } catch (lB) {
        return lB instanceof iB.d
      }
    }

    function WB(BB, TB, dB) {
      if ("webgpu" !== BB.backend) return !1;
      const VB = CB(TB, "terrainFetch", "texture", "storage");
      return null !== VB ? VB : null !== BB.adapter && (0, DB.g)(BB.adapter, dB)
    }

    function hB(BB, TB, dB) {
      if ("webgpu" !== BB.backend) return !1;
      const VB = CB(TB, "sceneDepth", "off", "on");
      return null !== VB ? VB : null !== BB.adapter && (0, DB.h)(BB.adapter, dB)
    }

    function CB(BB, TB, dB, VB) {
      const yB = new URLSearchParams(BB).get(TB);
      return yB !== dB && yB !== VB ? null : yB === dB
    }

    function GB(BB) {
      return null !== BB && "missing" in BB
    }

    function qB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lB.d;
      try {
        const dB = "start_failed" === BB || "pipeline_failed" === BB,
          VB = TB.turnOffWebGpuAfterDeviceLoss(dB ? "visible" : (0, OB.j)((0, kB.h)()));
        return TB.isWebGpuOffAfterLoss() && "webgpu" === QB(LB.j.getItem(YB.c)) && LB.j.removeItem(YB.c), VB
      } catch {
        return !1
      }
    }

    function xB(BB) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !bB()) ? qB(BB) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const jB = "framePacing";

    function AB(BB) {
      const TB = new URLSearchParams(BB).get(jB);
      return null !== TB && /^\d{1,9}$/.test(TB) ? Number(TB) : void 0
    }

    function bB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === QB(new URLSearchParams(BB).get(YB.b))
      } catch {
        return !1
      }
    }

    function nB(BB) {
      return !!eB(BB) || BB instanceof Error && !(BB instanceof WebAssembly.RuntimeError) && BB.message.startsWith(`${vB.f.RenderSurfaceUnusable}:`)
    }

    function eB(BB) {
      const {
        name: TB,
        message: dB
      } = null !== BB && void 0 !== BB ? BB : {};
      return "InvalidStateError" === TB && "string" === typeof dB && dB.startsWith("GPUDevice.")
    }

    function BT(BB) {
      const TB = BB;
      return "function" === typeof TB.DVB && "function" === typeof TB.uVB ? TB : null
    }

    function TT(BB) {
      return "function" === typeof BB.tVB ? BB : null
    }
    const dT = "openRenderer";

    function VT(BB) {
      const TB = null === BB || void 0 === BB ? void 0 : BB.SpB();
      return void 0 === TB ? void 0 : new Error(TB)
    }
    const yT = 5e3,
      pT = 15e3;

    function lT(BB, TB, dB, VB, yB, pB) {
      return (0, iB.j)(function(BB, TB, dB, VB, yB, pB) {
        return (0, NB.g)(BB, TB, (() => BB.tVB(dB, VB, yB, pB.indirectHangs, pB.storagePullBreaks, pB.splitPassBreaks, pB.framesAhead)))
      }(BB, TB, dB, VB, yB, pB), pT, `${vB.f.RenderSurfaceUnusable}: the renderer didn't open in ${pT/1e3} s`, YT)
    }
    async function JT(BB, TB, dB, VB, yB, pB) {
      if ("function" !== typeof BB.flB) throw new Error("this core has no set_renderer");
      const lB = await lT(TB, dT, dB, yB, VB, pB);
      try {
        BB.flB(lB)
      } catch (JB) {
        throw YT(lB), JB
      }
    }

    function YT(BB) {
      try {
        BB.free()
      } catch {}
    }
  },
  39508: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    const VB = {
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
  39524: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => oB
    });
    var VB = dB(252),
      yB = dB(586),
      pB = dB(95),
      lB = dB(122);
    const JB = new Set(["android", "ios"]);

    function YB(BB, TB, dB) {
      const pB = function(BB, TB, dB) {
          const yB = "software_adapter" === BB.reason ? null : BB.adapter,
            pB = null === yB || "" === yB.vendor ? null : (0, VB.f)(yB.vendor, yB.architecture);
          if (null !== pB && "other_intel" !== pB) return pB;
          if (JB.has(TB)) return null;
          const lB = dB();
          return null === lB ? null : (0, VB.j)(lB.vendor, lB.renderer)
        }(BB, TB, dB),
        lB = null === pB ? void 0 : yB.c.get(pB);
      return "all" === lB || "webgl" === lB && "webgpu" !== BB.backend ? pB : null
    }
    let gB = null;

    function oB(BB) {
      let TB;
      try {
        TB = (0, pB.getOperatingSystem)()
      } catch {
        return null
      }
      return YB(BB, TB, (() => (gB ??= function() {
        let BB = null;
        try {
          var TB, dB, VB, yB;
          const pB = document.createElement("canvas"),
            JB = {
              powerPreference: lB.b
            };
          BB = null !== (TB = pB.getContext("webgl2", JB)) && void 0 !== TB ? TB : pB.getContext("webgl", JB);
          const YB = null === (dB = BB) || void 0 === dB ? void 0 : dB.getExtension("WEBGL_debug_renderer_info");
          if (!BB || !YB) return null;
          const gB = String(null !== (VB = BB.getParameter(YB.UNMASKED_RENDERER_WEBGL)) && void 0 !== VB ? VB : "");
          return "" === gB ? null : {
            vendor: String(null !== (yB = BB.getParameter(YB.UNMASKED_VENDOR_WEBGL)) && void 0 !== yB ? yB : ""),
            renderer: gB
          }
        } catch {
          return null
        } finally {
          try {
            var pB, JB;
            null === (pB = BB) || void 0 === pB || null === (JB = pB.getExtension("WEBGL_lose_context")) || void 0 === JB || JB.loseContext()
          } catch {}
        }
      }(), gB)))
    }
  },
  39514: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      g: () => oB,
      i: () => lB,
      l: () => YB
    });
    var VB = dB(39517);
    class yB extends Error {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${BB}: the module trapped${dB?" in an earlier call":""}: ${String(TB)}`, {
          cause: TB
        }), this.site = BB, this.trap = TB, this.earlier = dB, this.name = "ModuleTrapError", TB instanceof Error && void 0 !== TB.stack && (this.stack = `${this.name}: ${this.message}\n${TB.stack}`)
      }
    }
    const pB = new WeakMap;

    function lB(BB) {
      return pB.has(BB)
    }

    function JB(BB, TB) {
      pB.has(BB) || pB.set(BB, TB)
    }

    function YB(BB, TB) {
      return !!(0, VB.b)(TB) && (JB(BB, TB), !0)
    }
    const gB = [
      ["error", BB => BB.error],
      ["unhandledrejection", BB => BB.reason]
    ];

    function oB(BB, TB, dB) {
      let lB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return pB.has(BB) ? Promise.reject(new yB(TB, pB.get(BB), !0)) : new Promise(((pB, YB) => {
        const oB = dB => {
            JB(BB, dB), OB(), YB(new yB(TB, dB))
          },
          kB = BB => {
            BB instanceof WebAssembly.RuntimeError ? oB(BB) : (OB(), YB(BB))
          },
          LB = gB.map((BB => {
            let [TB, dB] = BB;
            return [TB, BB => {
              const TB = dB(BB);
              (0, VB.b)(TB) && oB(TB)
            }]
          })),
          OB = () => {
            for (const [BB, TB] of LB) null === lB || void 0 === lB || lB.removeEventListener(BB, TB)
          };
        for (const [BB, TB] of LB) null === lB || void 0 === lB || lB.addEventListener(BB, TB);
        let DB;
        try {
          DB = dB()
        } catch (uB) {
          return void kB(uB)
        }
        DB.then((BB => {
          OB(), pB(BB)
        }), kB)
      }))
    }
  },
  39527: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => RB,
      d: () => SB,
      g: () => jB,
      i: () => AB,
      m: () => cB,
      q: () => QB,
      u: () => rB,
      w: () => XB,
      z: () => hB,
      B: () => BT,
      E: () => eB,
      G: () => xB,
      H: () => aB,
      J: () => GB,
      L: () => qB,
      M: () => CB
    });
    var VB = dB(21),
      yB = dB(262),
      pB = dB(33),
      lB = dB(170),
      JB = dB(581),
      YB = dB(244),
      gB = dB(95),
      oB = dB(256),
      kB = dB(39499),
      LB = dB(39531);
    const OB = "bloxd-wasmLastPick",
      DB = "bloxd-wasmGuessVerdict",
      uB = new Set(["none", "old_intel_driver", "intel_gen9", "gpu_class_webgl", "no_adapter", "software_adapter"]),
      HB = new Set(["no_adapter", "software_adapter"]),
      EB = {
        storeGpuClassVerdict: () => {},
        storeHoldbackSpared: () => {}
      };

    function vB(BB) {
      try {
        var TB;
        return JSON.parse(null !== (TB = localStorage.getItem(BB)) && void 0 !== TB ? TB : "null")
      } catch {
        return null
      }
    }

    function mB(BB, TB) {
      try {
        localStorage.setItem(BB, JSON.stringify(TB))
      } catch {}
    }

    function iB(BB, TB) {
      return BB.includes(TB)
    }

    function NB() {
      const {
        webgl2: BB,
        webgl1: TB,
        storeGpuClassVerdict: dB,
        storeHoldbackSpared: VB,
        ...yB
      } = (0, kB.n)();
      return {
        ...yB,
        override: () => (0, kB.U)(!1),
        gpuClassWebGlArm: BB => (0, kB.u)(BB, YB.v),
        webgl2Api: "undefined" !== typeof WebGL2RenderingContext,
        lastPick: () => {
          var BB;
          const {
            backend: TB,
            source: dB,
            reason: VB
          } = null !== (BB = vB(OB)) && void 0 !== BB ? BB : {};
          return "string" === typeof(yB = TB) && Object.hasOwn(LB.b, yB) && iB(kB.i, dB) && iB(lB.I, VB) ? {
            backend: TB,
            source: dB,
            reason: VB
          } : null;
          var yB
        },
        guessVerdict: BB => {
          const TB = vB(DB),
            dB = (0, kB.P)(oB.c);
          return null === dB || "boolean" !== typeof(null === TB || void 0 === TB ? void 0 : TB.webGpu) || TB.source !== BB || TB.browser !== dB || TB.version !== String(JB.b) ? null : TB.webGpu
        },
        recordGuessVerdict: BB => {
          const TB = (0, kB.P)(oB.c);
          null !== TB && mB(DB, {
            ...BB,
            browser: TB,
            version: String(JB.b)
          })
        },
        watchShown: () => {
          let BB = (0, kB.M)((() => "visible" === document.visibilityState));
          const TB = () => {
            BB = !1
          };
          return (0, kB.M)((() => (document.addEventListener("visibilitychange", TB), !0))), () => ((0, kB.M)((() => (document.removeEventListener("visibilitychange", TB), !0))), BB)
        },
        asksForAdapter: (0, kB.M)((() => {
          const BB = (0, gB.getOperatingSystem)();
          return "android" === BB || "chrome_os" === BB || "windows" === BB
        }))
      }
    }
    async function tB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NB();
      if ("webgl1" === BB.override()) return "webgl1";
      const TB = BB.lastPick(),
        dB = (0, kB.pb)(BB);
      if ("gpu" in dB) {
        if (null !== TB && function(BB, TB) {
            return uB.has(BB.reason) && (HB.has(BB.reason) || BB.source === TB.source)
          }(TB, dB)) return TB.backend;
        if (await async function(BB, TB) {
            const {
              source: dB,
              heldBack: VB
            } = TB;
            if (!BB.asksForAdapter) return !VB;
            const yB = BB.guessVerdict(dB);
            if (null !== yB) return yB;
            const pB = BB.watchShown(),
              {
                reason: lB,
                adapter: JB
              } = await (0, kB.T)({
                ...BB,
                ...EB,
                heldBack: () => !1
              }, !1),
              YB = pB(),
              gB = "none" === lB && (!VB || null !== JB && (0, kB.w)(JB));
            return !uB.has(lB) || !YB && HB.has(lB) || BB.recordGuessVerdict({
              webGpu: gB,
              source: dB
            }), gB
          }(BB, dB)) return "webgpu"
      }
      return null !== TB && "webgpu" !== TB.backend ? TB.backend : BB.webgl2Api ? "webgl" : null
    }
    var fB = dB(39538),
      sB = dB(39543);
    let MB = null,
      zB = () => {};
    const wB = new Promise((BB => {
        zB = BB
      })),
      UB = new Promise((() => {}));
    let FB = null,
      KB = null;

    function rB(BB) {
      KB = BB
    }
    let IB = !1;

    function cB() {
      IB = !0
    }

    function SB() {
      return IB
    }
    let PB = !1;

    function QB() {
      PB = !0
    }

    function RB() {
      return PB
    }

    function aB() {
      return KB
    }
    let ZB = null;

    function XB(BB) {
      ZB = BB, (0, yB.e)(BB)
    }
    const WB = "wasmClientRenderLost";

    function hB() {
      pB.m.setItem(WB, !0)
    }

    function CB() {
      return !0 === pB.m.getItem(WB)
    }

    function GB() {
      return ZB
    }

    function qB() {
      return null === MB && ((0, yB.k)(), MB = (0, kB.S)(fB.f).then((BB => (null === BB || (0, kB.C)(BB) || (FB = LB.b[BB.backend], function(BB) {
        let {
          backend: TB,
          source: dB,
          reason: VB
        } = BB;
        "override" === dB && "webgl1" === TB || mB(OB, {
          backend: TB,
          source: dB,
          reason: VB
        })
      }(BB), VB.d.followGameGpu("webgpu" === BB.backend ? BB.adapter : null), "webgpu" === BB.backend && (0, sB.d)()), BB))), zB(MB.catch((() => null)))), MB
    }

    function xB() {
      return FB
    }
    async function jB() {
      if (null !== MB) {
        const BB = await MB;
        return (0, kB.C)(BB) ? null : {
          build: await AB(BB),
          superseded: UB
        }
      }
      if (null === fB.f) return {
        build: await AB(null),
        superseded: UB
      };
      const BB = await tB();
      if (null === BB || null !== MB) return null;
      const TB = await fB.f[BB]();
      if (null !== MB) return null;
      return {
        build: TB,
        superseded: wB.then((TB => null === TB || (0, kB.C)(TB) || TB.backend !== BB ? void 0 : UB))
      }
    }

    function AB(BB) {
      return BB ? BB.load() : Promise.resolve().then((function() {
        var BB = new Error("Cannot find module '@bloxd/wasm/client'");
        throw BB.code = "MODULE_NOT_FOUND", BB
      })).then((BB => BB.bloxdWasmClient))
    }
    let bB = null,
      nB = null;

    function eB() {
      return bB ??= qB().then((async BB => {
        const TB = null !== BB && !(0, kB.C)(BB),
          dB = {
            indirectHangs: TB && await (0, kB.X)(BB, window.location.search),
            storagePullBreaks: TB && (0, kB.bb)(BB, window.location.search),
            splitPassBreaks: TB && (0, kB.$)(BB, window.location.search),
            framesAhead: (0, kB.r)(window.location.search)
          };
        return nB = dB.indirectHangs, dB
      })), bB
    }

    function BT() {
      return nB
    }
  },
  39531: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    const VB = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39538: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      f: () => VB
    });
    const VB = {
        webgpu: async () => (await dB.e(8).then((() => dB(41944)))).bloxdWasmWebgpu,
        webgl: async () => (await dB.e(6).then((() => dB(41958)))).bloxdWasmWebgl,
        webgl1: async () => (await dB.e(7).then((() => dB(41968)))).bloxdWasmWebgl1
      },
      yB = async () => (await dB.e(5).then((() => dB(41979)))).compileAnimationPackInWasm
  },
  39550: (BB, TB, dB) => {
    function VB() {
      return dB(39554)
    }

    function yB() {
      return dB(39560)
    }

    function pB(BB) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(BB)
    }
    dB.d(TB, {
      c: () => pB,
      g: () => VB,
      i: () => yB
    })
  },
  39517: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      f: () => lB
    });
    const VB = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function yB(BB) {
      if (BB instanceof WebAssembly.RuntimeError) return !0;
      const TB = BB instanceof Error ? BB.stack : void 0;
      return "string" === typeof TB && VB.test(TB)
    }
    const pB = 500;

    function lB(BB) {
      let TB = "[object Object]";
      try {
        TB = String(BB)
      } catch {}
      if ("[object Object]" !== TB) return TB;
      try {
        var dB, VB;
        return null !== (dB = null === (VB = JSON.stringify(BB)) || void 0 === VB ? void 0 : VB.slice(0, pB)) && void 0 !== dB ? dB : TB
      } catch {
        return TB
      }
    }
  },
  39543: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      d: () => YB
    });
    var VB = dB(95);
    const yB = "webgpuPipeline";

    function pB(BB) {
      return BB.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let lB = null;

    function JB() {
      if (null === lB) try {
        BB = (0, VB.getBrowserName)(), TB = (0, VB.getBrowserVersion)(), dB = (0, VB.getOperatingSystem)(), yB = (0, VB.getOperatingSystemVersion)(), lB = `${BB.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===TB?"unknown":pB(TB)}-${dB}${void 0===yB?"":`_${pB(yB)}`}`
      } catch (JB) {
        console.warn("The user agent couldn't be read for its browser code", JB), lB = "unknown"
      }
      var BB, TB, dB, yB;
      return lB
    }

    function YB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const TB = `WGPU-${JB()}`,
        VB = (BB, VB) => {
          const {
            reason: pB,
            message: lB
          } = VB, JB = {
            pipeline: null !== BB && void 0 !== BB ? BB : "",
            reason: String(pB),
            browserMessage: String(lB)
          };
          Promise.all([dB.e(251), dB.e(80)]).then((() => dB(39676))).then((BB => {
            let {
              reportCrash: dB
            } = BB;
            dB({
              kind: "coreError",
              code: TB,
              site: yB,
              fatal: !1,
              message: `${JB.pipeline} ${JB.reason}: ${JB.browserMessage}`,
              details: JB,
              error: VB
            })
          })).catch((BB => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", BB)
          }))
        },
        pB = BB.createRenderPipelineAsync;
      BB.createRenderPipelineAsync = function(BB) {
        return pB.call(this, BB).catch((TB => {
          throw VB(BB.label, TB), TB
        }))
      };
      const lB = BB.createComputePipelineAsync;
      BB.createComputePipelineAsync = function(BB) {
        return lB.call(this, BB).catch((TB => {
          throw VB(BB.label, TB), TB
        }))
      }
    }
  },
  39494: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/bloxd_wasm_models_bg.e83b2210a144dbedb2d6.wasm"
  },
  39488: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/bloxd_wasm_workers_bg.ba8a8b9db4d3239d6e31.wasm"
  },
  39554: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39560: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  35348: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => LB,
      h: () => oB
    });
    var VB = dB(3211),
      yB = dB(3219),
      pB = dB(5953),
      lB = dB(5959),
      JB = dB(35355);
    let YB = null,
      gB = !1;

    function oB(BB, TB, dB) {
      return null === YB ? YB = kB(BB, TB, dB?.priority) : BB !== YB.build ? console.warn(`Bloxd wasm: ${BB.name} was asked for after ${YB.build.name} started loading, which this thread keeps`) : TB.name !== YB.workers.name && console.warn(`Bloxd wasm: ${TB.name} was asked for workers after ${YB.workers.name}, which this thread keeps`), dB?.reloadFailedDownload && !gB && (0, VB.ab)() && (gB = !0, YB = kB(YB.build, YB.workers)), YB.loaded
    }

    function kB(BB, TB, dB) {
      const pB = (0, VB.J)((async () => {
        (0, lB.A)();
        const VB = OB(BB, dB),
          pB = TB.name === BB.name ? VB : OB(TB, dB);
        await (0, yB.d)([VB, pB]);
        const JB = await VB,
          YB = await pB;
        return (0, lB.A)(), {
          module: JB,
          workerModule: YB
        }
      }), BB);
      return {
        build: BB,
        workers: TB,
        loaded: pB
      }
    }
    async function LB(BB) {
      return OB(BB)
    }

    function OB(BB, TB) {
      return (0, JB.d)(BB, (0, pB.c)(BB.name), TB)
    }
  },
  39481: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => yB,
      i: () => VB
    });
    const VB = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new dB.U(dB(39488))
      }
    };
    const yB = {
      name: "bloxd_wasm_models",
      url: function() {
        return new dB.U(dB(39494))
      }
    }
  },
  5953: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(3216);
    const yB = {
      bloxd_wasm: () => "6a2efd5680223ac4664cc3045620a185da94b2f4e06849c44e38e480fc80e38a",
      bloxd_wasm_client: () => "607784131ab158c610f964eeccd0a0852f74d8ce3d4f4aee969d2f319a80e3b6",
      bloxd_wasm_workers: () => "d5276c08ec0e736252a42b7c12c1091036eec7cc17105f167a56c574e34a0505",
      bloxd_wasm_models: () => "92f9285c30a7dd1629d525045b29e9aca6c3d567d620b4834fec4760fd172ddc",
      bloxd_wasm_webgpu: () => "ed656d46a24419edcd62f7bc46fd9a190039bf0f388edff699daa513cf32f6d2",
      bloxd_wasm_webgl: () => "52116128612eeabf26c6510c105a72c4a8c70bb8b756449209899fb860a93f15",
      bloxd_wasm_webgl1: () => "3697a90b61a47ddbbdceb28b1c9caaf73e71aabf414852b8293dc48cb3f6a6a8",
      bloxd_wasm_replay: () => "5464460b78e15b4bb176525399accbb59f863e7383feb54312b177c696166e48",
      bloxd_wasm_recorder: () => "e1fdcb56336c3bc38215a981e4378ac3821b8912419bc7fd948eb1da353324ba",
      bloxd_wasm_anim: () => "74e56eee078a428190364a7d35938aac7810b6b32140848c6b994c19e70e3042",
      bloxd_wasm_textures: () => "4b25ea5144f7ce6b7af54af6beda3d49671ed61aae27771d204b13971136dce5",
      bloxd_wasm_shader_pack: () => "4746bfad07ac1f13f98ece970e8e224d9432f9561a8a4390c6f598c4e17052f5"
    };
    var pB = dB(5959);

    function lB(BB) {
      const TB = Object.prototype.hasOwnProperty.call(yB, BB) ? yB[BB]() : void 0;
      if (void 0 !== TB) return {
        sha256: TB,
        onMismatch: pB.w
      };
      throw new VB.j(`${BB} has no release digest, so this build refuses it`)
    }
  },
  35355: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => HB,
      d: () => EB
    });
    var VB = dB(3216),
      yB = dB(3219),
      pB = dB(5959);
    const lB = ".zst.bin",
      JB = Reflect.apply,
      YB = ArrayBuffer,
      gB = "undefined" === typeof Response ? void 0 : Response,
      oB = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      kB = function() {
        let BB;
        void 0 !== oB && new oB({
          __proto__: null,
          start(TB) {
            const {
              enqueue: dB,
              close: VB,
              error: yB
            } = Object.getPrototypeOf(TB);
            BB = {
              enqueue: dB,
              close: VB,
              error: yB
            }
          }
        }, {
          __proto__: null
        });
        return BB
      }(),
      LB = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== kB && (0, pB.j)(gB, "Response", !0) && (0, pB.j)(oB, "ReadableStream", !0) && (0, pB.j)(kB.enqueue, "enqueue") && (0, pB.j)(kB.close, "close") && (0, pB.j)(kB.error, "error") && (0, pB.j)(VB.Z, "body") && (0, pB.j)(VB.Q, "getReader") && (0, pB.j)(VB.W, "read")
        } catch {
          return !1
        }
      }();
    let OB = !1;

    function DB(BB) {
      for (const TB of "bloxd_wasm_webgpu:4954899,bloxd_wasm_webgl:5221928,bloxd_wasm_webgl1:4725588,bloxd_wasm_workers:196044,bloxd_wasm_models:312534,bloxd_wasm_client:3648335"?.split(",") ?? []) {
        const [dB, VB] = TB.split(":");
        if (dB === BB) {
          const BB = Number(VB);
          return Number.isInteger(BB) && BB > 0 ? BB : void 0
        }
      }
    }

    function uB(BB) {
      const TB = DB(BB.name);
      if (void 0 !== TB && LB && !OB) return {
        href: `${BB.url().href}${lB}`,
        length: TB
      }
    }

    function HB(BB) {
      return uB(BB)?.href ?? BB.url().href
    }

    function EB(BB, TB, pB) {
      const lB = BB.url(),
        LB = uB(BB);
      return void 0 !== LB ? async function(BB, TB, pB, lB) {
        let {
          href: LB,
          length: DB
        } = TB;
        try {
          return await (0, VB.fb)(LB, ((BB, TB, uB) => async function(BB, TB, pB, lB, LB, DB, uB) {
            const HB = new YB(TB);
            let EB;
            vB ??= (0, VB.S)(dB.e(60).then((() => dB(39813))));
            try {
              EB = await fetch(BB, void 0 === uB ? {
                signal: pB
              } : {
                signal: pB,
                priority: uB
              })
            } catch (SB) {
              throw new Error(`Fetching ${BB} failed: ${iB(SB)}`)
            }
            const {
              ok: NB,
              status: tB,
              body: fB
            } = function(BB, TB) {
              try {
                const {
                  ok: BB,
                  status: dB
                } = TB;
                return {
                  ok: BB,
                  status: dB,
                  body: JB(VB.Z, TB, [])
                }
              } catch {
                throw new Error(`${BB} came in a response a page script made`)
              }
            }(BB, EB);
            if (!NB) throw new Error(`Fetching ${BB} failed: HTTP ${tB}`);
            lB();
            const {
              reader: sB,
              controller: MB,
              compiled: zB
            } = function(BB, TB) {
              let dB;
              try {
                let BB;
                dB = JB(VB.Q, TB, []);
                const yB = new oB({
                    __proto__: null,
                    start(TB) {
                      BB = TB
                    }
                  }, {
                    __proto__: null
                  }),
                  pB = new gB(yB, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: dB,
                  controller: BB,
                  compiled: (0, VB.S)((0, VB.B)((0, VB.jb)(pB)))
                }
              } catch (SB) {
                throw void 0 !== dB && mB(dB), new Error(`${BB} could not be streamed into a compile: ${iB(SB)}`)
              }
            }(BB, fB), {
              enqueue: wB,
              close: UB,
              error: FB
            } = kB, KB = BB => {
              try {
                JB(FB, MB, [BB])
              } catch {} finally {
                mB(sB)
              }
            };
            pB.addEventListener("abort", (() => {
              KB(new Error(`${BB} stalled`))
            }), {
              once: !0
            });
            let rB = !1;
            (0, yB.q)(zB, (() => {}), (() => {
              rB = !0, mB(sB)
            }));
            let IB = 0;
            try {
              let dB;
              try {
                dB = await vB
              } catch (SB) {
                throw OB = !0, new Error(`The zstd decoder did not load: ${iB(SB)}`)
              }
              const {
                ZstdFrameDecoder: yB
              } = dB, pB = new yB(TB);
              for (; !pB.done && !rB;) {
                let TB;
                try {
                  TB = await JB(VB.W, sB, [])
                } catch (SB) {
                  throw new Error(`Downloading ${BB} failed: ${iB(SB)}`)
                }
                if (TB.done || rB) break;
                lB();
                try {
                  pB.push(TB.value)
                } catch (SB) {
                  throw new Error(`${BB} did not decode: ${iB(SB)}`)
                }
                const {
                  output: dB,
                  decoded: yB
                } = pB;
                if (null !== dB && yB !== IB) {
                  JB(VB.bb, new VB.o(HB), [dB.subarray(IB, yB), IB]);
                  try {
                    JB(wB, MB, [new VB.o(HB, IB, yB - IB)])
                  } catch {
                    rB = !0
                  }
                  IB = yB
                }
              }
              if (LB(), rB) throw await zB, new Error(`${BB}'s compile stopped reading before its end`);
              if (!pB.done) throw new Error(`${BB} ended before its module did`);
              mB(sB);
              try {
                JB(UB, MB, [])
              } catch {}
            } catch (SB) {
              throw KB(SB), SB
            }
            const cB = await zB;
            void 0 !== DB && await (0, VB.x)(BB, new VB.o(HB), {
              sha256: DB.sha256,
              onMismatch: () => {}
            });
            return cB
          }(LB, DB, BB, TB, uB, pB, lB)))
        } catch (HB) {
          console.warn(`${iB(HB)}: loading ${BB.href} instead`)
        }
        const uB = await (0, VB.G)(BB, pB, {
          hideThen: !0,
          priority: lB
        });
        return uB
      }(lB, LB, TB, pB): (0, VB.G)(lB, TB, {
        hideThen: void 0 !== DB(BB.name),
        priority: pB
      })
    }
    let vB = null;

    function mB(BB) {
      try {
        (0, VB.S)(BB.cancel())
      } catch {}
    }

    function iB(BB) {
      return BB instanceof Error ? BB.message : String(BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);