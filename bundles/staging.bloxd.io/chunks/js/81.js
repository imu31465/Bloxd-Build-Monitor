export const id = 81;
export const ids = [81];
export const modules = {
  4198: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      $: () => MJ,
      A: () => FJ,
      Cb: () => GJ,
      D: () => eJ,
      Db: () => PJ,
      E: () => jJ,
      G: () => NJ,
      Hb: () => UJ,
      J: () => YJ,
      K: () => qJ,
      Lb: () => zJ,
      N: () => rJ,
      P: () => mJ,
      S: () => QJ,
      U: () => vJ,
      W: () => EJ,
      Z: () => HJ,
      _: () => WJ,
      cb: () => VJ,
      e: () => dJ,
      fb: () => SJ,
      g: () => pJ,
      ib: () => KJ,
      jb: () => xJ,
      k: () => sJ,
      l: () => kJ,
      m: () => DJ,
      mb: () => fJ,
      nb: () => yJ,
      p: () => hJ,
      pb: () => gJ,
      rb: () => IJ,
      t: () => XJ,
      tb: () => bJ,
      w: () => AJ,
      wb: () => wJ,
      yb: () => nJ
    });
    const FJ = 32,
      UJ = 33.333333333333336,
      eJ = {
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
      XJ = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      AJ = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      qJ = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      jJ = {
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
      YJ = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      hJ = {
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
      DJ = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      sJ = 4,
      nJ = 4,
      GJ = 65535,
      fJ = {
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
      xJ = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      rJ = 88,
      vJ = 0,
      mJ = 24,
      QJ = 48,
      EJ = 80,
      VJ = {
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
      KJ = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      yJ = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      SJ = {
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
      IJ = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      MJ = 65535,
      bJ = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      wJ = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      WJ = 2,
      gJ = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      HJ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      PJ = {
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
      kJ = {
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
      pJ = {
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
      dJ = 8,
      zJ = {
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
      NJ = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  39529: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => Ac,
      C: () => pJ,
      E: () => kJ,
      I: () => OJ,
      J: () => zJ,
      K: () => PJ,
      O: () => TJ,
      R: () => Zc,
      U: () => uJ,
      V: () => CJ,
      X: () => aJ,
      Z: () => LJ,
      ab: () => Uc,
      cb: () => oJ,
      d: () => Fc,
      db: () => NJ,
      e: () => VJ,
      eb: () => IJ,
      g: () => qc,
      k: () => HJ,
      n: () => tJ,
      p: () => gJ,
      q: () => WJ,
      r: () => cc,
      t: () => RJ,
      x: () => Jc,
      z: () => lJ
    });
    var FJ = ZJ(227),
      UJ = ZJ(211),
      eJ = ZJ(218),
      XJ = ZJ(13),
      AJ = ZJ(2610),
      qJ = ZJ(2426),
      jJ = ZJ(2938),
      YJ = ZJ(80),
      hJ = ZJ(112),
      DJ = ZJ(225),
      sJ = ZJ(29),
      nJ = ZJ(223),
      GJ = ZJ(95),
      fJ = ZJ(544),
      xJ = ZJ(101),
      rJ = ZJ(97),
      vJ = ZJ(4198),
      mJ = ZJ(39531),
      QJ = ZJ(2538),
      EJ = ZJ(39537);
    const VJ = ["override", "setting", "pack", "default"],
      KJ = "bloxd-webgpuOffAfterLoss",
      yJ = "context:webgl",
      SJ = "probe:threw";

    function IJ(JJ) {
      let cJ;
      try {
        cJ = JJ.getContext("webgl", {
          powerPreference: xJ.e
        })
      } catch {
        cJ = null
      }
      if (null === cJ) return null;
      let ZJ = null;
      try {
        const JJ = cJ.getParameter(cJ.MAX_TEXTURE_SIZE);
        ZJ = "number" === typeof JJ && JJ > 0 ? JJ : null
      } catch {
        ZJ = null
      }
      try {
        var FJ;
        null === (FJ = cJ.getExtension("WEBGL_lose_context")) || void 0 === FJ || FJ.loseContext()
      } catch {}
      return ZJ
    }
    const MJ = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      bJ = "mali_valhall",
      wJ = new Set(["nvidia_pre_turing"]);

    function WJ(JJ) {
      return wJ.has((0, eJ.d)(JJ.vendor, JJ.architecture))
    }

    function gJ(JJ, cJ) {
      return kJ((() => {
        var ZJ, FJ, UJ, XJ;
        const AJ = null !== (ZJ = null === (FJ = JJ.info) || void 0 === FJ ? void 0 : FJ.vendor) && void 0 !== ZJ ? ZJ : "";
        if ("windows" === (0, YJ.getOperatingSystem)() && "" !== AJ && "intel" !== (0, YJ.normaliseGpuVendor)(AJ)) return null;
        const qJ = cJ(AJ);
        return null === qJ ? null : function(JJ, cJ) {
          return MJ.has(JJ) ? "android_arm" === JJ && cJ === bJ ? "webgpu_default" : "webgl_default" : null
        }(qJ, (0, eJ.d)(AJ, null !== (UJ = null === (XJ = JJ.info) || void 0 === XJ ? void 0 : XJ.architecture) && void 0 !== UJ ? UJ : ""))
      }))
    }

    function HJ() {
      var JJ;
      return {
        gpu: null !== (JJ = navigator.gpu) && void 0 !== JJ ? JJ : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(JJ) {
          let cJ, ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mJ.d;
          try {
            cJ = JJ.getContext("webgl")
          } catch {
            cJ = null
          }
          if (null === cJ) return [yJ];
          const FJ = [];
          try {
            for (const UJ of ZJ.extensions) null === cJ.getExtension(UJ) && FJ.push(UJ);
            for (const [UJ, eJ] of Object.entries(ZJ.limits)) {
              const JJ = cJ[UJ],
                ZJ = "number" === typeof JJ ? cJ.getParameter(JJ) : null;
              ("number" !== typeof ZJ || ZJ < eJ) && FJ.push(`limit:${UJ}`)
            }
            const JJ = cJ.getShaderPrecisionFormat(cJ.VERTEX_SHADER, cJ.HIGH_FLOAT);
            (null === JJ || JJ.precision < ZJ.vertexHighFloatBits) && FJ.push("precision:vertex_high_float")
          } catch {
            FJ.push(SJ)
          }
          try {
            var UJ;
            null === (UJ = cJ.getExtension("WEBGL_lose_context")) || void 0 === UJ || UJ.loseContext()
          } catch {}
          return FJ
        }(document.createElement("canvas")),
        offAfterLoss: JJ => pJ((() => JJ ? (0, nJ.p)() : XJ.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: JJ => pJ((() => (0, GJ.e)(JJ))),
        intelGen9: JJ => pJ((() => (0, GJ.l)(JJ))),
        gpuClassWebGlArm: JJ => gJ(JJ, (JJ => ((0, YJ.seedGpuVendor)(JJ), (0, UJ.j)()))),
        storeGpuClassVerdict: JJ => {
          sJ.j.setItem(GJ.B, JJ)
        },
        gpuClassOnWebGl: JJ => (0, fJ.e)(JJ),
        override: () => PJ(!0),
        webGpuSetting: () => {
          const JJ = sJ.j.getItem(FJ.Ub);
          return "boolean" === typeof JJ ? JJ : null
        },
        heldBack: () => fJ.h,
        storeHoldbackSpared: JJ => {
          sJ.j.setItem(GJ.x, JJ)
        },
        intelGen9OnWebGl: () => fJ.k,
        Jn: () => pJ((() => (0, jJ.d)(YJ.featureFlags.settings.canUseShaderPacks))),
        ios: () => "mobileIos" === hJ.n || pJ((() => "ios" === (0, YJ.getOperatingSystem)())),
        windows: () => pJ((() => "windows" === (0, YJ.getOperatingSystem)()))
      }
    }

    function PJ(JJ) {
      if ((0, AJ.q)("render") && "webgl1" === (0, AJ.m)("renderer")) return "webgl1";
      const cJ = [() => new URLSearchParams(window.location.search).get(qJ.c), () => sJ.j.getItem(qJ.f), () => {
        const cJ = localStorage.getItem(KJ);
        return null !== cJ && JJ && localStorage.removeItem(KJ), "1" === cJ ? "webgl2" : null
      }];
      for (const ZJ of cJ) {
        let JJ = null;
        try {
          JJ = dJ(ZJ())
        } catch {}
        if (null !== JJ) return JJ
      }
      return null
    }

    function kJ(JJ) {
      try {
        return JJ()
      } catch {
        return null
      }
    }

    function pJ(JJ) {
      try {
        return JJ()
      } catch {
        return !1
      }
    }

    function dJ(JJ) {
      return "lite" === JJ ? "webgpu" : "webgl2" === JJ || "babylon" === JJ ? "webgl" : null
    }
    async function zJ(JJ) {
      var cJ, ZJ, FJ, UJ;
      let eJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const XJ = NJ(JJ),
        {
          source: AJ
        } = XJ,
        qJ = !XJ.asked,
        jJ = "gpu" in XJ && XJ.heldBack,
        YJ = function(JJ) {
          return jJ && "none" !== JJ ? {
            reason: "webgl_holdback",
            adapter: null,
            source: AJ
          } : {
            reason: JJ,
            adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            source: AJ
          }
        };
      if (!("gpu" in XJ)) return YJ(XJ.refused);
      let hJ;
      try {
        hJ = await (0, QJ.k)((0, rJ.j)(XJ.gpu, eJ), ec, `requestAdapter didn't settle in ${ec/1e3} s`)
      } catch {
        return YJ("adapter_error")
      }
      if ("string" === typeof hJ) return YJ(hJ);
      const DJ = {
        vendor: null !== (cJ = null === (ZJ = hJ.info) || void 0 === ZJ ? void 0 : ZJ.vendor) && void 0 !== cJ ? cJ : "",
        architecture: null !== (FJ = null === (UJ = hJ.info) || void 0 === UJ ? void 0 : UJ.architecture) && void 0 !== FJ ? FJ : ""
      };
      if ((0, rJ.d)(hJ)) return YJ("software_adapter", DJ);
      const sJ = JJ.windows() && WJ(DJ);
      if (JJ.storeHoldbackSpared(sJ), jJ && !sJ) return YJ("webgl_holdback");
      const nJ = JJ.intelGen9(hJ),
        GJ = nJ ? null : JJ.gpuClassWebGlArm(hJ);
      return JJ.storeGpuClassVerdict(null !== GJ && void 0 !== GJ && GJ), qJ && JJ.oldIntelDriver(hJ) ? YJ("old_intel_driver", DJ) : "default" === AJ && JJ.intelGen9OnWebGl() && nJ ? YJ("intel_gen9", DJ) : "default" === AJ && null !== GJ && JJ.gpuClassOnWebGl(GJ) ? YJ("gpu_class_webgl", DJ) : YJ("none", DJ)
    }

    function NJ(JJ) {
      const cJ = JJ.override(),
        ZJ = JJ.webGpuSetting(),
        FJ = null !== cJ ? "override" : !0 === ZJ ? "setting" : JJ.Jn() ? "pack" : !1 === ZJ ? "setting" : "default",
        UJ = function(JJ) {
          return "override" === JJ || "setting" === JJ
        }(FJ);
      if ("webgl" === cJ || "webgl1" === cJ || "setting" === FJ && !1 === ZJ) return {
        source: FJ,
        asked: UJ,
        refused: "not_requested"
      };
      if (!JJ.gpu) return {
        source: FJ,
        asked: UJ,
        refused: "no_webgpu_api"
      };
      if ("override" !== FJ && JJ.ios()) return {
        source: FJ,
        asked: UJ,
        refused: "gpu_class_webgl"
      };
      const eJ = "default" === FJ && JJ.heldBack();
      return eJ && !JJ.windows() ? {
        source: FJ,
        asked: UJ,
        refused: "webgl_holdback"
      } : !UJ && JJ.offAfterLoss("pack" === FJ) ? {
        source: FJ,
        asked: UJ,
        refused: eJ ? "webgl_holdback" : "off_after_loss"
      } : {
        source: FJ,
        asked: UJ,
        heldBack: eJ,
        gpu: JJ.gpu
      }
    }
    async function OJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HJ();
      if (null === JJ) return null;
      const ZJ = await async function() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HJ();
        const cJ = await zJ(JJ);
        if ("none" === cJ.reason) return {
          backend: "webgpu",
          ...cJ
        };
        if ("webgl1" !== JJ.override() && JJ.webgl2()) return {
          backend: "webgl",
          ...cJ
        };
        const ZJ = JJ.webgl1();
        return 0 === ZJ.length ? {
          backend: "webgl1",
          ...cJ
        } : {
          missing: ZJ
        }
      }(cJ);
      return "missing" in ZJ ? ZJ : {
        ...ZJ,
        load: JJ[ZJ.backend]
      }
    }
    async function TJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HJ().gpu,
        FJ = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== JJ.backend) return !1;
      const UJ = iJ(cJ, "indirectDraws", "off", "on");
      if (null !== UJ) return UJ;
      if (null !== JJ.adapter && (0, GJ.p)(JJ.adapter, FJ)) return !0;
      if (null === ZJ) return !1;
      try {
        var eJ;
        const JJ = await (0, QJ.k)(ZJ.requestAdapter({
          powerPreference: "low-power"
        }), ec, `the low-power requestAdapter didn't settle in ${ec/1e3} s`);
        return (0, GJ.p)(null !== (eJ = null === JJ || void 0 === JJ ? void 0 : JJ.info) && void 0 !== eJ ? eJ : {}, FJ)
      } catch (XJ) {
        return XJ instanceof QJ.g
      }
    }

    function CJ(JJ, cJ, ZJ) {
      if ("webgpu" !== JJ.backend) return !1;
      const FJ = iJ(cJ, "terrainFetch", "texture", "storage");
      return null !== FJ ? FJ : null !== JJ.adapter && (0, GJ.g)(JJ.adapter, ZJ)
    }

    function uJ(JJ, cJ, ZJ) {
      if ("webgpu" !== JJ.backend) return !1;
      const FJ = iJ(cJ, "sceneDepth", "off", "on");
      return null !== FJ ? FJ : null !== JJ.adapter && (0, GJ.k)(JJ.adapter, ZJ)
    }

    function iJ(JJ, cJ, ZJ, FJ) {
      const UJ = new URLSearchParams(JJ).get(cJ);
      return UJ !== ZJ && UJ !== FJ ? null : UJ === ZJ
    }

    function RJ(JJ) {
      return null !== JJ && "missing" in JJ
    }

    function LJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XJ.d;
      try {
        const ZJ = "start_failed" === JJ || "pipeline_failed" === JJ,
          FJ = cJ.turnOffWebGpuAfterDeviceLoss(ZJ ? "visible" : (0, nJ.h)((0, DJ.k)()));
        return cJ.isWebGpuOffAfterLoss() && "webgpu" === dJ(sJ.j.getItem(qJ.f)) && sJ.j.removeItem(qJ.f), FJ
      } catch {
        return !1
      }
    }

    function aJ(JJ) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !oJ()) ? LJ(JJ) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const BJ = "framePacing";

    function tJ(JJ) {
      const cJ = new URLSearchParams(JJ).get(BJ);
      return null !== cJ && /^\d{1,9}$/.test(cJ) ? Number(cJ) : void 0
    }

    function oJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === dJ(new URLSearchParams(JJ).get(qJ.c))
      } catch {
        return !1
      }
    }

    function lJ(JJ) {
      return !!Jc(JJ) || JJ instanceof Error && !(JJ instanceof WebAssembly.RuntimeError) && JJ.message.startsWith(`${vJ.g.RenderSurfaceUnusable}:`)
    }

    function Jc(JJ) {
      const {
        name: cJ,
        message: ZJ
      } = null !== JJ && void 0 !== JJ ? JJ : {};
      return "InvalidStateError" === cJ && "string" === typeof ZJ && ZJ.startsWith("GPUDevice.")
    }

    function cc(JJ) {
      const cJ = JJ;
      return "function" === typeof cJ.dZJ && "function" === typeof cJ.zZJ ? cJ : null
    }

    function Zc(JJ) {
      return "function" === typeof JJ.RZJ ? JJ : null
    }
    const Fc = "openRenderer";

    function Uc(JJ) {
      const cJ = null === JJ || void 0 === JJ ? void 0 : JJ.eeJ();
      return void 0 === cJ ? void 0 : new Error(cJ)
    }
    const ec = 5e3,
      Xc = 15e3;

    function Ac(JJ, cJ, ZJ, FJ, UJ, eJ) {
      return (0, QJ.k)(function(JJ, cJ, ZJ, FJ, UJ, eJ) {
        return (0, EJ.h)(JJ, cJ, (() => JJ.RZJ(ZJ, FJ, UJ, eJ.indirectHangs, eJ.storagePullBreaks, eJ.splitPassBreaks, eJ.framesAhead)))
      }(JJ, cJ, ZJ, FJ, UJ, eJ), Xc, `${vJ.g.RenderSurfaceUnusable}: the renderer didn't open in ${Xc/1e3} s`, jc)
    }
    async function qc(JJ, cJ, ZJ, FJ, UJ, eJ) {
      if ("function" !== typeof JJ.ReJ) throw new Error("this core has no set_renderer");
      const XJ = await Ac(cJ, Fc, ZJ, UJ, FJ, eJ);
      try {
        JJ.ReJ(XJ)
      } catch (AJ) {
        throw jc(XJ), AJ
      }
    }

    function jc(JJ) {
      try {
        JJ.free()
      } catch {}
    }
  },
  39531: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    const FJ = {
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
  39548: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => YJ
    });
    var FJ = ZJ(218),
      UJ = ZJ(547),
      eJ = ZJ(80),
      XJ = ZJ(101);
    const AJ = new Set(["android", "ios"]);

    function qJ(JJ, cJ, ZJ) {
      const eJ = function(JJ, cJ, ZJ) {
          const UJ = "software_adapter" === JJ.reason ? null : JJ.adapter,
            eJ = null === UJ || "" === UJ.vendor ? null : (0, FJ.d)(UJ.vendor, UJ.architecture);
          if (null !== eJ && "other_intel" !== eJ) return eJ;
          if (AJ.has(cJ)) return null;
          const XJ = ZJ();
          return null === XJ ? null : (0, FJ.f)(XJ.vendor, XJ.renderer)
        }(JJ, cJ, ZJ),
        XJ = null === eJ ? void 0 : UJ.d.get(eJ);
      return "all" === XJ || "webgl" === XJ && "webgpu" !== JJ.backend ? eJ : null
    }
    let jJ = null;

    function YJ(JJ) {
      let cJ;
      try {
        cJ = (0, eJ.getOperatingSystem)()
      } catch {
        return null
      }
      return qJ(JJ, cJ, (() => (jJ ??= function() {
        let JJ = null;
        try {
          var cJ, ZJ, FJ, UJ;
          const eJ = document.createElement("canvas"),
            AJ = {
              powerPreference: XJ.e
            };
          JJ = null !== (cJ = eJ.getContext("webgl2", AJ)) && void 0 !== cJ ? cJ : eJ.getContext("webgl", AJ);
          const qJ = null === (ZJ = JJ) || void 0 === ZJ ? void 0 : ZJ.getExtension("WEBGL_debug_renderer_info");
          if (!JJ || !qJ) return null;
          const jJ = String(null !== (FJ = JJ.getParameter(qJ.UNMASKED_RENDERER_WEBGL)) && void 0 !== FJ ? FJ : "");
          return "" === jJ ? null : {
            vendor: String(null !== (UJ = JJ.getParameter(qJ.UNMASKED_VENDOR_WEBGL)) && void 0 !== UJ ? UJ : ""),
            renderer: jJ
          }
        } catch {
          return null
        } finally {
          try {
            var eJ, AJ;
            null === (eJ = JJ) || void 0 === eJ || null === (AJ = eJ.getExtension("WEBGL_lose_context")) || void 0 === AJ || AJ.loseContext()
          } catch {}
        }
      }(), jJ)))
    }
  },
  39537: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      h: () => YJ,
      k: () => XJ,
      m: () => qJ
    });
    var FJ = ZJ(39543);
    class UJ extends Error {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${JJ}: the module trapped${ZJ?" in an earlier call":""}: ${String(cJ)}`, {
          cause: cJ
        }), this.site = JJ, this.trap = cJ, this.earlier = ZJ, this.name = "ModuleTrapError", cJ instanceof Error && void 0 !== cJ.stack && (this.stack = `${this.name}: ${this.message}\n${cJ.stack}`)
      }
    }
    const eJ = new WeakMap;

    function XJ(JJ) {
      return eJ.has(JJ)
    }

    function AJ(JJ, cJ) {
      eJ.has(JJ) || eJ.set(JJ, cJ)
    }

    function qJ(JJ, cJ) {
      return !!(0, FJ.b)(cJ) && (AJ(JJ, cJ), !0)
    }
    const jJ = [
      ["error", JJ => JJ.error],
      ["unhandledrejection", JJ => JJ.reason]
    ];

    function YJ(JJ, cJ, ZJ) {
      let XJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return eJ.has(JJ) ? Promise.reject(new UJ(cJ, eJ.get(JJ), !0)) : new Promise(((eJ, qJ) => {
        const YJ = ZJ => {
            AJ(JJ, ZJ), sJ(), qJ(new UJ(cJ, ZJ))
          },
          hJ = JJ => {
            JJ instanceof WebAssembly.RuntimeError ? YJ(JJ) : (sJ(), qJ(JJ))
          },
          DJ = jJ.map((JJ => {
            let [cJ, ZJ] = JJ;
            return [cJ, JJ => {
              const cJ = ZJ(JJ);
              (0, FJ.b)(cJ) && YJ(cJ)
            }]
          })),
          sJ = () => {
            for (const [JJ, cJ] of DJ) null === XJ || void 0 === XJ || XJ.removeEventListener(JJ, cJ)
          };
        for (const [JJ, cJ] of DJ) null === XJ || void 0 === XJ || XJ.addEventListener(JJ, cJ);
        let nJ;
        try {
          nJ = ZJ()
        } catch (GJ) {
          return void hJ(GJ)
        }
        nJ.then((JJ => {
          sJ(), eJ(JJ)
        }), hJ)
      }))
    }
  },
  39555: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => dJ,
      i: () => PJ,
      k: () => aJ,
      l: () => BJ,
      o: () => HJ,
      q: () => pJ,
      t: () => WJ,
      u: () => OJ,
      v: () => CJ,
      z: () => Jc,
      C: () => lJ,
      D: () => LJ,
      H: () => zJ,
      K: () => iJ,
      O: () => RJ,
      Q: () => uJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(225),
      eJ = ZJ(29),
      XJ = ZJ(153),
      AJ = ZJ(538),
      qJ = ZJ(211),
      jJ = ZJ(80),
      YJ = ZJ(223),
      hJ = ZJ(39529),
      DJ = ZJ(39561);
    const sJ = "bloxd-wasmLastPick",
      nJ = "bloxd-wasmGuessVerdict",
      GJ = new Set(["none", "old_intel_driver", "intel_gen9", "gpu_class_webgl", "no_adapter", "software_adapter"]),
      fJ = new Set(["no_adapter", "software_adapter"]),
      xJ = {
        storeGpuClassVerdict: () => {},
        storeHoldbackSpared: () => {}
      };

    function rJ(JJ) {
      try {
        var cJ;
        return JSON.parse(null !== (cJ = localStorage.getItem(JJ)) && void 0 !== cJ ? cJ : "null")
      } catch {
        return null
      }
    }

    function vJ(JJ, cJ) {
      try {
        localStorage.setItem(JJ, JSON.stringify(cJ))
      } catch {}
    }

    function mJ(JJ, cJ) {
      return JJ.includes(cJ)
    }

    function QJ() {
      const {
        webgl2: JJ,
        webgl1: cJ,
        storeGpuClassVerdict: ZJ,
        storeHoldbackSpared: FJ,
        ...UJ
      } = (0, hJ.k)();
      return {
        ...UJ,
        override: () => (0, hJ.K)(!1),
        gpuClassWebGlArm: JJ => (0, hJ.p)(JJ, qJ.s),
        webgl2Api: "undefined" !== typeof WebGL2RenderingContext,
        lastPick: () => {
          var JJ;
          const {
            backend: cJ,
            source: ZJ,
            reason: FJ
          } = null !== (JJ = rJ(sJ)) && void 0 !== JJ ? JJ : {};
          return "string" === typeof(UJ = cJ) && Object.hasOwn(DJ.b, UJ) && mJ(hJ.e, ZJ) && mJ(XJ.E, FJ) ? {
            backend: cJ,
            source: ZJ,
            reason: FJ
          } : null;
          var UJ
        },
        guessVerdict: JJ => {
          const cJ = rJ(nJ),
            ZJ = (0, hJ.E)(YJ.b);
          return null === ZJ || "boolean" !== typeof(null === cJ || void 0 === cJ ? void 0 : cJ.webGpu) || cJ.source !== JJ || cJ.browser !== ZJ || cJ.version !== String(AJ.b) ? null : cJ.webGpu
        },
        recordGuessVerdict: JJ => {
          const cJ = (0, hJ.E)(YJ.b);
          null !== cJ && vJ(nJ, {
            ...JJ,
            browser: cJ,
            version: String(AJ.b)
          })
        },
        watchShown: () => {
          let JJ = (0, hJ.C)((() => "visible" === document.visibilityState));
          const cJ = () => {
            JJ = !1
          };
          return (0, hJ.C)((() => (document.addEventListener("visibilitychange", cJ), !0))), () => ((0, hJ.C)((() => (document.removeEventListener("visibilitychange", cJ), !0))), JJ)
        },
        asksForAdapter: (0, hJ.C)((() => {
          const JJ = (0, jJ.getOperatingSystem)();
          return "android" === JJ || "chrome_os" === JJ || "windows" === JJ
        }))
      }
    }
    async function EJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QJ();
      if ("webgl1" === JJ.override()) return "webgl1";
      const cJ = JJ.lastPick(),
        ZJ = (0, hJ.db)(JJ);
      if ("gpu" in ZJ) {
        if (null !== cJ && function(JJ, cJ) {
            return GJ.has(JJ.reason) && (fJ.has(JJ.reason) || JJ.source === cJ.source)
          }(cJ, ZJ)) return cJ.backend;
        if (await async function(JJ, cJ) {
            const {
              source: ZJ,
              heldBack: FJ
            } = cJ;
            if (!JJ.asksForAdapter) return !FJ;
            const UJ = JJ.guessVerdict(ZJ);
            if (null !== UJ) return UJ;
            const eJ = JJ.watchShown(),
              {
                reason: XJ,
                adapter: AJ
              } = await (0, hJ.J)({
                ...JJ,
                ...xJ,
                heldBack: () => !1
              }, !1),
              qJ = eJ(),
              jJ = "none" === XJ && (!FJ || null !== AJ && (0, hJ.q)(AJ));
            return !GJ.has(XJ) || !qJ && fJ.has(XJ) || JJ.recordGuessVerdict({
              webGpu: jJ,
              source: ZJ
            }), jJ
          }(JJ, ZJ)) return "webgpu"
      }
      return null !== cJ && "webgpu" !== cJ.backend ? cJ.backend : JJ.webgl2Api ? "webgl" : null
    }
    var VJ = ZJ(39567),
      KJ = ZJ(39572);
    let yJ = null,
      SJ = () => {};
    const IJ = new Promise((JJ => {
        SJ = JJ
      })),
      MJ = new Promise((() => {}));
    let bJ = null,
      wJ = null;

    function WJ(JJ) {
      wJ = JJ
    }
    let gJ = !1;

    function HJ() {
      gJ = !0
    }

    function PJ() {
      return gJ
    }
    let kJ = !1;

    function pJ() {
      kJ = !0
    }

    function dJ() {
      return kJ
    }

    function zJ() {
      return wJ
    }
    let NJ = null;

    function OJ(JJ) {
      NJ = JJ, (0, UJ.c)(JJ)
    }
    const TJ = "wasmClientRenderLost";

    function CJ() {
      eJ.k.setItem(TJ, !0)
    }

    function uJ() {
      return !0 === eJ.k.getItem(TJ)
    }

    function iJ() {
      return NJ
    }

    function RJ() {
      return null === yJ && ((0, UJ.l)(), yJ = (0, hJ.I)(VJ.f).then((JJ => (null === JJ || (0, hJ.t)(JJ) || (bJ = DJ.b[JJ.backend], function(JJ) {
        let {
          backend: cJ,
          source: ZJ,
          reason: FJ
        } = JJ;
        "override" === ZJ && "webgl1" === cJ || vJ(sJ, {
          backend: cJ,
          source: ZJ,
          reason: FJ
        })
      }(JJ), FJ.d.followGameGpu("webgpu" === JJ.backend ? JJ.adapter : null), "webgpu" === JJ.backend && (0, KJ.e)()), JJ))), SJ(yJ.catch((() => null)))), yJ
    }

    function LJ() {
      return bJ
    }
    async function aJ() {
      if (null !== yJ) {
        const JJ = await yJ;
        return (0, hJ.t)(JJ) ? null : {
          build: await BJ(JJ),
          superseded: MJ
        }
      }
      if (null === VJ.f) return {
        build: await BJ(null),
        superseded: MJ
      };
      const JJ = await EJ();
      if (null === JJ || null !== yJ) return null;
      const cJ = await VJ.f[JJ]();
      if (null !== yJ) return null;
      return {
        build: cJ,
        superseded: IJ.then((cJ => null === cJ || (0, hJ.t)(cJ) || cJ.backend !== JJ ? void 0 : MJ))
      }
    }

    function BJ(JJ) {
      return JJ ? JJ.load() : Promise.resolve().then((function() {
        var JJ = new Error("Cannot find module '@bloxd/wasm/client'");
        throw JJ.code = "MODULE_NOT_FOUND", JJ
      })).then((JJ => JJ.bloxdWasmClient))
    }
    let tJ = null,
      oJ = null;

    function lJ() {
      return tJ ??= RJ().then((async JJ => {
        const cJ = null !== JJ && !(0, hJ.t)(JJ),
          ZJ = {
            indirectHangs: cJ && await (0, hJ.O)(JJ, window.location.search),
            storagePullBreaks: cJ && (0, hJ.V)(JJ, window.location.search),
            splitPassBreaks: cJ && (0, hJ.U)(JJ, window.location.search),
            framesAhead: (0, hJ.n)(window.location.search)
          };
        return oJ = ZJ.indirectHangs, ZJ
      })), tJ
    }

    function Jc() {
      return oJ
    }
  },
  39561: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    const FJ = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39567: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ,
      f: () => FJ
    });
    const FJ = {
        webgpu: async () => (await ZJ.e(8).then((() => ZJ(41902)))).bloxdWasmWebgpu,
        webgl: async () => (await ZJ.e(6).then((() => ZJ(41913)))).bloxdWasmWebgl,
        webgl1: async () => (await ZJ.e(7).then((() => ZJ(41924)))).bloxdWasmWebgl1
      },
      UJ = async () => (await ZJ.e(5).then((() => ZJ(41932)))).compileAnimationPackInWasm
  },
  39580: (JJ, cJ, ZJ) => {
    function FJ() {
      return ZJ(39583)
    }

    function UJ() {
      return ZJ(39590)
    }

    function eJ(JJ) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(JJ)
    }
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => FJ,
      e: () => UJ
    })
  },
  39543: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      d: () => XJ
    });
    const FJ = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function UJ(JJ) {
      if (JJ instanceof WebAssembly.RuntimeError) return !0;
      const cJ = JJ instanceof Error ? JJ.stack : void 0;
      return "string" === typeof cJ && FJ.test(cJ)
    }
    const eJ = 500;

    function XJ(JJ) {
      let cJ = "[object Object]";
      try {
        cJ = String(JJ)
      } catch {}
      if ("[object Object]" !== cJ) return cJ;
      try {
        var ZJ, FJ;
        return null !== (ZJ = null === (FJ = JSON.stringify(JJ)) || void 0 === FJ ? void 0 : FJ.slice(0, eJ)) && void 0 !== ZJ ? ZJ : cJ
      } catch {
        return cJ
      }
    }
  },
  39572: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      e: () => qJ
    });
    var FJ = ZJ(80);
    const UJ = "webgpuPipeline";

    function eJ(JJ) {
      return JJ.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let XJ = null;

    function AJ() {
      if (null === XJ) try {
        JJ = (0, FJ.getBrowserName)(), cJ = (0, FJ.getBrowserVersion)(), ZJ = (0, FJ.getOperatingSystem)(), UJ = (0, FJ.getOperatingSystemVersion)(), XJ = `${JJ.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===cJ?"unknown":eJ(cJ)}-${ZJ}${void 0===UJ?"":`_${eJ(UJ)}`}`
      } catch (AJ) {
        console.warn("The user agent couldn't be read for its browser code", AJ), XJ = "unknown"
      }
      var JJ, cJ, ZJ, UJ;
      return XJ
    }

    function qJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const cJ = `WGPU-${AJ()}`,
        FJ = (JJ, FJ) => {
          const {
            reason: eJ,
            message: XJ
          } = FJ, AJ = {
            pipeline: null !== JJ && void 0 !== JJ ? JJ : "",
            reason: String(eJ),
            browserMessage: String(XJ)
          };
          Promise.all([ZJ.e(251), ZJ.e(80)]).then((() => ZJ(39705))).then((JJ => {
            let {
              reportCrash: ZJ
            } = JJ;
            ZJ({
              kind: "coreError",
              code: cJ,
              site: UJ,
              fatal: !1,
              message: `${AJ.pipeline} ${AJ.reason}: ${AJ.browserMessage}`,
              details: AJ,
              error: FJ
            })
          })).catch((JJ => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", JJ)
          }))
        },
        eJ = JJ.createRenderPipelineAsync;
      JJ.createRenderPipelineAsync = function(JJ) {
        return eJ.call(this, JJ).catch((cJ => {
          throw FJ(JJ.label, cJ), cJ
        }))
      };
      const XJ = JJ.createComputePipelineAsync;
      JJ.createComputePipelineAsync = function(JJ) {
        return XJ.call(this, JJ).catch((cJ => {
          throw FJ(JJ.label, cJ), cJ
        }))
      }
    }
  },
  39525: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/bloxd_wasm_models_bg.fbeac42ec822a59eeb26.wasm"
  },
  39520: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/bloxd_wasm_workers_bg.ae7611ef49d80b6e0f15.wasm"
  },
  39583: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39590: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  35441: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => DJ,
      i: () => YJ
    });
    var FJ = ZJ(3178),
      UJ = ZJ(3190),
      eJ = ZJ(5963),
      XJ = ZJ(5971),
      AJ = ZJ(35447);
    let qJ = null,
      jJ = !1;

    function YJ(JJ, cJ, ZJ) {
      return null === qJ ? qJ = hJ(JJ, cJ, ZJ?.priority) : JJ !== qJ.build ? console.warn(`Bloxd wasm: ${JJ.name} was asked for after ${qJ.build.name} started loading, which this thread keeps`) : cJ.name !== qJ.workers.name && console.warn(`Bloxd wasm: ${cJ.name} was asked for workers after ${qJ.workers.name}, which this thread keeps`), ZJ?.reloadFailedDownload && !jJ && (0, FJ.X)() && (jJ = !0, qJ = hJ(qJ.build, qJ.workers)), qJ.loaded
    }

    function hJ(JJ, cJ, ZJ) {
      const eJ = (0, FJ.H)((async () => {
        (0, XJ.u)();
        const FJ = sJ(JJ, ZJ),
          eJ = cJ.name === JJ.name ? FJ : sJ(cJ, ZJ);
        await (0, UJ.f)([FJ, eJ]);
        const AJ = await FJ,
          qJ = await eJ;
        return (0, XJ.u)(), {
          module: AJ,
          workerModule: qJ
        }
      }), JJ);
      return {
        build: JJ,
        workers: cJ,
        loaded: eJ
      }
    }
    async function DJ(JJ) {
      return sJ(JJ)
    }

    function sJ(JJ, cJ) {
      return (0, AJ.c)(JJ, (0, eJ.e)(JJ.name), cJ)
    }
  },
  39516: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      g: () => FJ
    });
    const FJ = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new ZJ.U(ZJ(39520))
      }
    };
    const UJ = {
      name: "bloxd_wasm_models",
      url: function() {
        return new ZJ.U(ZJ(39525))
      }
    }
  },
  5963: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(3183);
    const UJ = {
      bloxd_wasm: () => "523d3e5949bf2a4753ef5ca2a73400ebb345835b7971369ead2f990b98be43ec",
      bloxd_wasm_client: () => "d4cb36df94a07de19e42eeffa0530f0524c7d89d6cd225e6e3040a8fe33cb61f",
      bloxd_wasm_workers: () => "b13b723c21ff4be0aa4bb62ce03a9989f6e3a955e9dbcbcab4ce4af24b202aca",
      bloxd_wasm_models: () => "f6812c5c938dcbac86f88041ffced930fe9d08400f719159d23aa9e3370f1e40",
      bloxd_wasm_webgpu: () => "e406b84c9505f7a02226339b21c94d9a9039f99b240ba6ea17b3503c03394d97",
      bloxd_wasm_webgl: () => "31e54300aadfdf39d9adf46e78a03ba62332faca6c028e444167fa4ad879a305",
      bloxd_wasm_webgl1: () => "eabb7ee7c8fbfb9be543faab1ff74311865cfd0aa56a6ee1f3f14d03e5ae7d24",
      bloxd_wasm_replay: () => "4f3a9b06c75077dd5f30c00cad61978d804090ee39979df7a1cfbfc9252724da",
      bloxd_wasm_recorder: () => "27d0a05e493ac60b3abbc822d35e07432c9fd8fda5fab082d13b04b57a84627e",
      bloxd_wasm_anim: () => "df3ee160579d661f445b2f411e354890d481e89dda8265b662e7e3f787cf6236",
      bloxd_wasm_textures: () => "1fc5f5b691e5b407d47f375467e6fd9d0f10cb030443922e1b8b25cd186e7173",
      bloxd_wasm_shader_pack: () => "749cb76383a9de0896958e82b823c3a4f9479f89c71e25be0da5c1167b8eeea1"
    };
    var eJ = ZJ(5971);

    function XJ(JJ) {
      const cJ = Object.prototype.hasOwnProperty.call(UJ, JJ) ? UJ[JJ]() : void 0;
      if (void 0 !== cJ) return {
        sha256: cJ,
        onMismatch: eJ.t
      };
      throw new FJ.j(`${JJ} has no release digest, so this build refuses it`)
    }
  },
  35447: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => fJ,
      c: () => xJ
    });
    var FJ = ZJ(3183),
      UJ = ZJ(3190),
      eJ = ZJ(5971);
    const XJ = ".zst.bin",
      AJ = Reflect.apply,
      qJ = ArrayBuffer,
      jJ = "undefined" === typeof Response ? void 0 : Response,
      YJ = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      hJ = function() {
        let JJ;
        void 0 !== YJ && new YJ({
          __proto__: null,
          start(cJ) {
            const {
              enqueue: ZJ,
              close: FJ,
              error: UJ
            } = Object.getPrototypeOf(cJ);
            JJ = {
              enqueue: ZJ,
              close: FJ,
              error: UJ
            }
          }
        }, {
          __proto__: null
        });
        return JJ
      }(),
      DJ = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== hJ && (0, eJ.g)(jJ, "Response", !0) && (0, eJ.g)(YJ, "ReadableStream", !0) && (0, eJ.g)(hJ.enqueue, "enqueue") && (0, eJ.g)(hJ.close, "close") && (0, eJ.g)(hJ.error, "error") && (0, eJ.g)(FJ.Y, "body") && (0, eJ.g)(FJ.Q, "getReader") && (0, eJ.g)(FJ.X, "read")
        } catch {
          return !1
        }
      }();
    let sJ = !1;

    function nJ(JJ) {
      for (const cJ of "bloxd_wasm_webgpu:4943446,bloxd_wasm_webgl:5219211,bloxd_wasm_webgl1:4722370,bloxd_wasm_workers:196044,bloxd_wasm_models:312534,bloxd_wasm_client:3645615"?.split(",") ?? []) {
        const [ZJ, FJ] = cJ.split(":");
        if (ZJ === JJ) {
          const JJ = Number(FJ);
          return Number.isInteger(JJ) && JJ > 0 ? JJ : void 0
        }
      }
    }

    function GJ(JJ) {
      const cJ = nJ(JJ.name);
      if (void 0 !== cJ && DJ && !sJ) return {
        href: `${JJ.url().href}${XJ}`,
        length: cJ
      }
    }

    function fJ(JJ) {
      return GJ(JJ)?.href ?? JJ.url().href
    }

    function xJ(JJ, cJ, eJ) {
      const XJ = JJ.url(),
        DJ = GJ(JJ);
      return void 0 !== DJ ? async function(JJ, cJ, eJ, XJ) {
        let {
          href: DJ,
          length: nJ
        } = cJ;
        try {
          return await (0, FJ.bb)(DJ, ((JJ, cJ, GJ) => async function(JJ, cJ, eJ, XJ, DJ, nJ, GJ) {
            const fJ = new qJ(cJ);
            let xJ;
            rJ ??= (0, FJ.W)(ZJ.e(60).then((() => ZJ(39858))));
            try {
              xJ = await fetch(JJ, void 0 === GJ ? {
                signal: eJ
              } : {
                signal: eJ,
                priority: GJ
              })
            } catch (PJ) {
              throw new Error(`Fetching ${JJ} failed: ${mJ(PJ)}`)
            }
            const {
              ok: QJ,
              status: EJ,
              body: VJ
            } = function(JJ, cJ) {
              try {
                const {
                  ok: JJ,
                  status: ZJ
                } = cJ;
                return {
                  ok: JJ,
                  status: ZJ,
                  body: AJ(FJ.Y, cJ, [])
                }
              } catch {
                throw new Error(`${JJ} came in a response a page script made`)
              }
            }(JJ, xJ);
            if (!QJ) throw new Error(`Fetching ${JJ} failed: HTTP ${EJ}`);
            XJ();
            const {
              reader: KJ,
              controller: yJ,
              compiled: SJ
            } = function(JJ, cJ) {
              let ZJ;
              try {
                let JJ;
                ZJ = AJ(FJ.Q, cJ, []);
                const UJ = new YJ({
                    __proto__: null,
                    start(cJ) {
                      JJ = cJ
                    }
                  }, {
                    __proto__: null
                  }),
                  eJ = new jJ(UJ, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: ZJ,
                  controller: JJ,
                  compiled: (0, FJ.W)((0, FJ.B)((0, FJ.eb)(eJ)))
                }
              } catch (PJ) {
                throw void 0 !== ZJ && vJ(ZJ), new Error(`${JJ} could not be streamed into a compile: ${mJ(PJ)}`)
              }
            }(JJ, VJ), {
              enqueue: IJ,
              close: MJ,
              error: bJ
            } = hJ, wJ = JJ => {
              try {
                AJ(bJ, yJ, [JJ])
              } catch {} finally {
                vJ(KJ)
              }
            };
            eJ.addEventListener("abort", (() => {
              wJ(new Error(`${JJ} stalled`))
            }), {
              once: !0
            });
            let WJ = !1;
            (0, UJ.v)(SJ, (() => {}), (() => {
              WJ = !0, vJ(KJ)
            }));
            let gJ = 0;
            try {
              let ZJ;
              try {
                ZJ = await rJ
              } catch (PJ) {
                throw sJ = !0, new Error(`The zstd decoder did not load: ${mJ(PJ)}`)
              }
              const {
                ZstdFrameDecoder: UJ
              } = ZJ, eJ = new UJ(cJ);
              for (; !eJ.done && !WJ;) {
                let cJ;
                try {
                  cJ = await AJ(FJ.X, KJ, [])
                } catch (PJ) {
                  throw new Error(`Downloading ${JJ} failed: ${mJ(PJ)}`)
                }
                if (cJ.done || WJ) break;
                XJ();
                try {
                  eJ.push(cJ.value)
                } catch (PJ) {
                  throw new Error(`${JJ} did not decode: ${mJ(PJ)}`)
                }
                const {
                  output: ZJ,
                  decoded: UJ
                } = eJ;
                if (null !== ZJ && UJ !== gJ) {
                  AJ(FJ.ab, new FJ.m(fJ), [ZJ.subarray(gJ, UJ), gJ]);
                  try {
                    AJ(IJ, yJ, [new FJ.m(fJ, gJ, UJ - gJ)])
                  } catch {
                    WJ = !0
                  }
                  gJ = UJ
                }
              }
              if (DJ(), WJ) throw await SJ, new Error(`${JJ}'s compile stopped reading before its end`);
              if (!eJ.done) throw new Error(`${JJ} ended before its module did`);
              vJ(KJ);
              try {
                AJ(MJ, yJ, [])
              } catch {}
            } catch (PJ) {
              throw wJ(PJ), PJ
            }
            const HJ = await SJ;
            void 0 !== nJ && await (0, FJ.x)(JJ, new FJ.m(fJ), {
              sha256: nJ.sha256,
              onMismatch: () => {}
            });
            return HJ
          }(DJ, nJ, JJ, cJ, GJ, eJ, XJ)))
        } catch (fJ) {
          console.warn(`${mJ(fJ)}: loading ${JJ.href} instead`)
        }
        const GJ = await (0, FJ.H)(JJ, eJ, {
          hideThen: !0,
          priority: XJ
        });
        return GJ
      }(XJ, DJ, cJ, eJ): (0, FJ.H)(XJ, cJ, {
        hideThen: void 0 !== nJ(JJ.name),
        priority: eJ
      })
    }
    let rJ = null;

    function vJ(JJ) {
      try {
        (0, FJ.W)(JJ.cancel())
      } catch {}
    }

    function mJ(JJ) {
      return JJ instanceof Error ? JJ.message : String(JJ)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);