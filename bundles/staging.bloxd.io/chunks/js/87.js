export const id = 87;
export const ids = [87];
export const modules = {
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
  },
  39913: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => OY
    });
    const FY = 1 << 20,
      AY = 1 << 21,
      IY = 1024,
      RY = 2048;

    function OY(YY, rY, DY) {
      const OY = YY + FY,
        gY = rY + IY,
        aY = DY + FY;
      return OY < 0 || OY >= AY || aY < 0 || aY >= AY || gY < 0 || gY >= RY ? -1 : (OY * AY + aY) * RY + gY
    }
  },
  39906: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      d: () => RY,
      e: () => AY,
      h: () => IY,
      k: () => vY,
      m: () => aY,
      o: () => gY,
      s: () => OY
    });
    DY(3022);
    DY(39913);

    function FY(YY) {}

    function AY(YY) {}

    function IY(YY) {}

    function RY(YY) {}

    function OY(YY) {}

    function gY(YY, rY, DY) {}

    function aY(YY) {}

    function vY(YY) {}
  },
  39890: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => qY,
      D: () => Yr,
      G: () => bY,
      K: () => wY,
      O: () => GY,
      P: () => kY,
      R: () => Dr,
      S: () => PY,
      U: () => cY,
      b: () => rr,
      f: () => Rr,
      h: () => nY,
      i: () => tY,
      l: () => pY,
      n: () => LY,
      o: () => UY,
      s: () => Ir,
      w: () => JY,
      x: () => MY
    });
    var FY = DY(332),
      AY = DY(290),
      IY = DY(293),
      RY = DY(19),
      OY = DY(2565),
      gY = DY(680),
      aY = DY(4063),
      vY = DY(2521),
      uY = DY(3015),
      sY = DY(99),
      iY = DY(323),
      yY = DY(40),
      QY = DY(307),
      oY = DY(121),
      WY = DY(640),
      EY = DY(138),
      mY = DY(129),
      VY = DY(4382),
      SY = DY(39893),
      lY = DY(1744),
      TY = DY(39900);
    const eY = "bloxd-webgpuOffAfterLoss",
      NY = "context:webgl",
      BY = "probe:threw";

    function cY(YY) {
      let rY;
      try {
        rY = YY.getContext("webgl", {
          powerPreference: EY.e
        })
      } catch {
        rY = null
      }
      if (null === rY) return null;
      let DY = null;
      try {
        const YY = rY.getParameter(rY.MAX_TEXTURE_SIZE);
        DY = "number" === typeof YY && YY > 0 ? YY : null
      } catch {
        DY = null
      }
      try {
        var FY;
        null === (FY = rY.getExtension("WEBGL_lose_context")) || void 0 === FY || FY.loseContext()
      } catch {}
      return DY
    }
    const KY = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      HY = "mali_valhall",
      zY = new Set(["nvidia_pre_turing"]);

    function ZY(YY) {
      return function(YY) {
        try {
          return YY()
        } catch {
          return null
        }
      }((() => {
        var rY, DY, FY, RY;
        const OY = null !== (rY = null === (DY = YY.info) || void 0 === DY ? void 0 : DY.vendor) && void 0 !== rY ? rY : "";
        return "windows" === (0, sY.getOperatingSystem)() && "" !== OY && "intel" !== (0, sY.normaliseGpuVendor)(OY) ? null : ((0, sY.seedGpuVendor)(OY), gY = (0, AY.i)(), aY = (0, IY.c)(OY, null !== (FY = null === (RY = YY.info) || void 0 === RY ? void 0 : RY.architecture) && void 0 !== FY ? FY : ""), KY.has(gY) ? "android_arm" === gY && aY === HY ? "webgpu_default" : "webgl_default" : null);
        var gY, aY
      }))
    }

    function CY() {
      var YY;
      return {
        gpu: null !== (YY = navigator.gpu) && void 0 !== YY ? YY : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(YY) {
          let rY, DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SY.d;
          try {
            rY = YY.getContext("webgl")
          } catch {
            rY = null
          }
          if (null === rY) return [NY];
          const FY = [];
          try {
            for (const AY of DY.extensions) null === rY.getExtension(AY) && FY.push(AY);
            for (const [AY, IY] of Object.entries(DY.limits)) {
              const YY = rY[AY],
                DY = "number" === typeof YY ? rY.getParameter(YY) : null;
              ("number" !== typeof DY || DY < IY) && FY.push(`limit:${AY}`)
            }
            const YY = rY.getShaderPrecisionFormat(rY.VERTEX_SHADER, rY.HIGH_FLOAT);
            (null === YY || YY.precision < DY.vertexHighFloatBits) && FY.push("precision:vertex_high_float")
          } catch {
            FY.push(BY)
          }
          try {
            var AY;
            null === (AY = rY.getExtension("WEBGL_lose_context")) || void 0 === AY || AY.loseContext()
          } catch {}
          return FY
        }(document.createElement("canvas")),
        offAfterLoss: YY => fY((() => YY ? (0, QY.A)() : RY.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: YY => fY((() => (0, oY.f)(YY))),
        intelGen9: YY => fY((() => (0, oY.q)(YY))),
        gpuClassWebGlArm: ZY,
        storeGpuClassVerdict: YY => {
          yY.m.setItem(oY.K, YY)
        },
        gpuClassOnWebGl: YY => (0, WY.e)(YY),
        override: () => function() {
          if ((0, OY.q)("render") && "webgl1" === (0, OY.p)("renderer")) return "webgl1";
          const YY = [() => new URLSearchParams(window.location.search).get(vY.e), () => yY.m.getItem(vY.f), () => {
            const YY = localStorage.getItem(eY);
            return null !== YY && localStorage.removeItem(eY), "1" === YY ? "webgl2" : null
          }];
          for (const rY of YY) {
            let YY = null;
            try {
              YY = jY(rY())
            } catch {}
            if (null !== YY) return YY
          }
          return null
        }(),
        claimed: () => jY((0, gY.l)()),
        webGpuSetting: () => {
          const YY = yY.m.getItem(FY.ic);
          return "boolean" === typeof YY ? YY : null
        },
        heldBack: () => WY.g,
        storeHoldbackSpared: YY => {
          yY.m.setItem(oY.G, YY)
        },
        intelGen9OnWebGl: () => WY.k,
        vy: () => fY((() => (0, uY.c)(sY.featureFlags.settings.canUseShaderPacks))),
        windows: () => fY((() => "windows" === (0, sY.getOperatingSystem)()))
      }
    }

    function fY(YY) {
      try {
        return YY()
      } catch {
        return !1
      }
    }

    function jY(YY) {
      return "lite" === YY ? "webgpu" : "webgl2" === YY || "babylon" === YY ? "webgl" : null
    }
    async function hY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CY();
      const rY = await async function(YY) {
        const rY = function(YY) {
            const rY = YY.override(),
              DY = YY.webGpuSetting(),
              FY = null === rY && !0 !== DY && YY.vy(),
              AY = null !== rY || null !== DY || FY ? null : YY.claimed(),
              IY = null !== rY ? "override" : !0 === DY ? "setting" : FY ? "pack" : !1 === DY ? "setting" : null !== AY ? "claim" : "default",
              RY = function(YY) {
                return "override" === YY || "setting" === YY
              }(IY);
            if ("webgl" === rY || "webgl1" === rY || "webgl" === AY || "setting" === IY && !1 === DY) return {
              source: IY,
              asked: RY,
              refused: "not_requested"
            };
            if (!YY.gpu) return {
              source: IY,
              asked: RY,
              refused: "no_webgpu_api"
            };
            const OY = "default" === IY && YY.heldBack();
            if (OY && !YY.windows()) return {
              source: IY,
              asked: RY,
              refused: "webgl_holdback"
            };
            if (!RY && YY.offAfterLoss("pack" === IY)) return {
              source: IY,
              asked: RY,
              refused: OY ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: IY,
              asked: RY,
              heldBack: OY,
              gpu: YY.gpu
            }
          }(YY),
          {
            source: DY
          } = rY,
          FY = !rY.asked,
          AY = "gpu" in rY && rY.heldBack,
          RY = function(YY) {
            return AY && "none" !== YY ? {
              reason: "webgl_holdback",
              adapter: null,
              source: DY
            } : {
              reason: YY,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: DY
            }
          };
        if (!("gpu" in rY)) return RY(rY.refused);
        let OY;
        try {
          OY = await (0, lY.k)((0, mY.m)(rY.gpu), Fr, `requestAdapter didn't settle in ${Fr/1e3} s`)
        } catch {
          return RY("adapter_error")
        }
        if ("string" === typeof OY) return RY(OY);
        const gY = (0, mY.b)(OY);
        if ((0, mY.f)(OY)) return RY("software_adapter", gY);
        const aY = YY.windows() && function(YY) {
          return zY.has((0, IY.c)(YY.vendor, YY.architecture))
        }(gY);
        if (YY.storeHoldbackSpared(aY), AY && !aY) return RY("webgl_holdback");
        const vY = YY.intelGen9(OY),
          uY = vY ? null : YY.gpuClassWebGlArm(OY);
        if (YY.storeGpuClassVerdict(null !== uY && void 0 !== uY && uY), FY && YY.oldIntelDriver(OY)) return RY("old_intel_driver", gY);
        if ("default" === DY && YY.intelGen9OnWebGl() && vY) return RY("intel_gen9", gY);
        if ("default" === DY && null !== uY && YY.gpuClassOnWebGl(uY)) return RY("gpu_class_webgl", gY);
        return RY("none", gY)
      }(YY);
      if ("none" === rY.reason) return {
        backend: "webgpu",
        ...rY
      };
      if ("webgl1" !== YY.override() && YY.webgl2()) return {
        backend: "webgl",
        ...rY
      };
      const DY = YY.webgl1();
      return 0 === DY.length ? {
        backend: "webgl1",
        ...rY
      } : {
        missing: DY
      }
    }
    let dY = !1;
    async function JY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CY();
      if (null === YY) return null;
      const DY = await hY(rY);
      return dY = !("missing" in DY) && "webgpu" === DY.backend && "claim" === DY.source, "missing" in DY ? DY : {
        ...DY,
        load: YY[DY.backend]
      }
    }
    async function MY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CY().gpu,
        FY = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== YY.backend) return !1;
      const AY = XY(rY, "indirectDraws", "off", "on");
      if (null !== AY) return AY;
      if (null !== YY.adapter && (0, oY.u)(YY.adapter, FY)) return !0;
      if (null === DY) return !1;
      try {
        var IY;
        const YY = await (0, lY.k)(DY.requestAdapter({
          powerPreference: "low-power"
        }), Fr, `the low-power requestAdapter didn't settle in ${Fr/1e3} s`);
        return (0, oY.u)(null !== (IY = null === YY || void 0 === YY ? void 0 : YY.info) && void 0 !== IY ? IY : {}, FY)
      } catch (RY) {
        return RY instanceof lY.f
      }
    }

    function wY(YY, rY, DY) {
      if ("webgpu" !== YY.backend) return !1;
      const FY = XY(rY, "terrainFetch", "texture", "storage");
      return null !== FY ? FY : null !== YY.adapter && (0, oY.j)(YY.adapter, DY)
    }

    function bY(YY, rY, DY) {
      if ("webgpu" !== YY.backend) return !1;
      const FY = XY(rY, "sceneDepth", "off", "on");
      return null !== FY ? FY : null !== YY.adapter && (0, oY.m)(YY.adapter, DY)
    }

    function XY(YY, rY, DY, FY) {
      const AY = new URLSearchParams(YY).get(rY),
        IY = null !== AY && void 0 !== AY ? AY : (0, gY.g)(rY);
      return IY !== DY && IY !== FY ? null : (dY ||= null === AY, IY === DY)
    }

    function qY(YY, rY) {
      return "webgl" === YY.backend && (0, IY.l)(rY)
    }

    function pY(YY) {
      return null !== YY && "missing" in YY
    }

    function kY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RY.b;
      try {
        const DY = "start_failed" === YY || "pipeline_failed" === YY,
          FY = rY.turnOffWebGpuAfterDeviceLoss(DY ? "visible" : (0, QY.j)((0, iY.f)()));
        return !dY || FY && !rY.isWebGpuOffAfterLoss() || (0, gY.w)("webgpuLoss"), rY.isWebGpuOffAfterLoss() && "webgpu" === jY(yY.m.getItem(vY.f)) && yY.m.removeItem(vY.f), (0, OY.q)("webgpuloss") && (0, aY.c)((rY => {
          rY.noteWebGpuLoss("wasm", FY ? YY : `${YY}, which storage didn't keep`, null)
        })), FY
      } catch {
        return !1
      }
    }

    function GY(YY) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !PY()) ? kY(YY) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const xY = "framePacing";

    function nY(YY) {
      const rY = new URLSearchParams(YY).get(xY);
      return null !== rY && /^\d{1,9}$/.test(rY) ? Number(rY) : void 0
    }

    function PY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === jY(new URLSearchParams(YY).get(vY.e))
      } catch {
        return !1
      }
    }

    function UY(YY) {
      return !!LY(YY) || YY instanceof Error && !(YY instanceof WebAssembly.RuntimeError) && YY.message.startsWith(`${VY.f.RenderSurfaceUnusable}:`)
    }

    function LY(YY) {
      const {
        name: rY,
        message: DY
      } = null !== YY && void 0 !== YY ? YY : {};
      return "InvalidStateError" === rY && "string" === typeof DY && DY.startsWith("GPUDevice.")
    }

    function tY(YY) {
      const rY = YY;
      return "function" === typeof rY.IDY && "function" === typeof rY.RDY ? rY : null
    }

    function Yr(YY) {
      return "function" === typeof YY.iDY ? YY : null
    }
    const rr = "openRenderer";

    function Dr(YY) {
      const rY = null === YY || void 0 === YY ? void 0 : YY.NAY();
      return void 0 === rY ? void 0 : new Error(rY)
    }
    const Fr = 5e3,
      Ar = 15e3;

    function Ir(YY, rY, DY, FY, AY, IY) {
      return (0, lY.k)(function(YY, rY, DY, FY, AY, IY) {
        return (0, TY.g)(YY, rY, (() => YY.iDY(DY, FY, AY, IY.indirectHangs, IY.storagePullBreaks, IY.splitPassBreaks, IY.framesAhead, IY.instancedTerrainSlow)))
      }(YY, rY, DY, FY, AY, IY), Ar, `${VY.f.RenderSurfaceUnusable}: the renderer didn't open in ${Ar/1e3} s`, Or)
    }
    async function Rr(YY, rY, DY, FY, AY, IY) {
      if ("function" !== typeof YY.iIY) throw new Error("this core has no set_renderer");
      const RY = await Ir(rY, rr, DY, AY, FY, IY);
      try {
        YY.iIY(RY)
      } catch (OY) {
        throw Or(RY), OY
      }
    }

    function Or(YY) {
      try {
        YY.free()
      } catch {}
    }
  },
  39893: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    const FY = {
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
  39916: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => gY,
      e: () => OY
    });
    var FY = DY(695),
      AY = DY(704);

    function IY(YY, rY) {
      const DY = null === rY ? void 0 : FY.e.get(rY);
      return "all" === DY || "webgl" === DY && "webgpu" !== YY.backend ? rY : null
    }

    function RY(YY) {
      return "software_adapter" === YY.reason ? null : YY.adapter
    }

    function OY(YY, rY) {
      const DY = (0, FY.q)();
      return null === DY ? null : (0, FY.g)(RY(YY), DY, rY ? FY.k : FY.h)
    }

    function gY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AY.j;
      const FY = IY(YY, rY);
      return null !== FY && "webgl" === YY.backend && DY(FY) ? null : FY
    }
  },
  39900: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      g: () => vY,
      k: () => RY,
      m: () => gY
    });
    var FY = DY(39904);
    class AY extends Error {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${YY}: the module trapped${DY?" in an earlier call":""}: ${String(rY)}`, {
          cause: rY
        }), this.site = YY, this.trap = rY, this.earlier = DY, this.name = "ModuleTrapError", rY instanceof Error && void 0 !== rY.stack && (this.stack = `${this.name}: ${this.message}\n${rY.stack}`)
      }
    }
    const IY = new WeakMap;

    function RY(YY) {
      return IY.has(YY)
    }

    function OY(YY, rY) {
      IY.has(YY) || IY.set(YY, rY)
    }

    function gY(YY, rY) {
      return !!(0, FY.b)(rY) && (OY(YY, rY), !0)
    }
    const aY = [
      ["error", YY => YY.error],
      ["unhandledrejection", YY => YY.reason]
    ];

    function vY(YY, rY, DY) {
      let RY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return IY.has(YY) ? Promise.reject(new AY(rY, IY.get(YY), !0)) : new Promise(((IY, gY) => {
        const vY = DY => {
            OY(YY, DY), iY(), gY(new AY(rY, DY))
          },
          uY = YY => {
            YY instanceof WebAssembly.RuntimeError ? vY(YY) : (iY(), gY(YY))
          },
          sY = aY.map((YY => {
            let [rY, DY] = YY;
            return [rY, YY => {
              const rY = DY(YY);
              (0, FY.b)(rY) && vY(rY)
            }]
          })),
          iY = () => {
            for (const [YY, rY] of sY) null === RY || void 0 === RY || RY.removeEventListener(YY, rY)
          };
        for (const [YY, rY] of sY) null === RY || void 0 === RY || RY.addEventListener(YY, rY);
        let yY;
        try {
          yY = DY()
        } catch (QY) {
          return void uY(QY)
        }
        yY.then((YY => {
          iY(), IY(YY)
        }), uY)
      }))
    }
  },
  39924: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => wY,
      C: () => MY,
      G: () => CY,
      H: () => eY,
      K: () => zY,
      L: () => ZY,
      P: () => jY,
      R: () => HY,
      d: () => TY,
      g: () => VY,
      h: () => hY,
      i: () => fY,
      k: () => mY,
      m: () => lY,
      p: () => WY,
      t: () => BY,
      x: () => KY
    });
    var FY = DY(229),
      AY = DY(293),
      IY = DY(19),
      RY = DY(323),
      OY = DY(40),
      gY = DY(39890),
      aY = DY(39916),
      vY = DY(39928),
      uY = (DY(39906), DY(39937)),
      sY = DY(39945);
    const iY = "wasmJoinBuild";
    let yY = null,
      QY = null,
      oY = null;

    function WY(YY) {
      oY = YY
    }
    let EY = !1;

    function mY() {
      EY = !0
    }

    function VY() {
      return EY
    }
    let SY = !1;

    function lY() {
      SY = !0
    }

    function TY() {
      return SY
    }

    function eY() {
      return oY
    }
    let NY = null;

    function BY(YY) {
      NY = YY, (0, RY.d)(YY)
    }
    const cY = "wasmClientRenderLost";

    function KY() {
      OY.q.setItem(cY, !0)
    }

    function HY() {
      return !0 === OY.q.getItem(cY)
    }

    function zY() {
      return NY
    }

    function ZY() {
      return null === yY && (OY.m.removeItem("wasmLastPick"), OY.m.removeItem("wasmGuessVerdict"), (0, RY.j)(), yY = (0, gY.w)(vY.h).then((YY => (null === YY || (0, gY.l)(YY) || (QY = uY.b[YY.backend], IY.b.followGameGpu("webgpu" === YY.backend ? YY.adapter : null), "webgpu" === YY.backend && (0, sY.g)()), YY)))), yY
    }

    function CY() {
      return QY
    }

    function fY(YY) {
      return YY ? YY.load() : Promise.resolve().then((function() {
        var YY = new Error("Cannot find module '@bloxd/wasm/client'");
        throw YY.code = "MODULE_NOT_FOUND", YY
      })).then((YY => YY.bloxdWasmClient))
    }

    function jY(YY) {
      OY.m.setItem(iY, YY)
    }
    async function hY() {
      if (null === vY.h) return fY(null);
      const YY = OY.m.getItem(iY);
      let rY = "none" === YY ? null : "webgl";
      return null !== YY && "none" !== YY && ("string" === typeof YY && void 0 !== (0, FY.c)(vY.h, YY) ? rY = YY : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(YY)}, is none of this client's: guessing WebGL2's`)), null === rY ? null : vY.h[rY]()
    }
    let dY = null,
      JY = null;

    function MY() {
      return dY ??= ZY().then((async YY => {
        var rY;
        const DY = null !== YY && !(0, gY.l)(YY),
          FY = {
            indirectHangs: DY && await (0, gY.x)(YY, window.location.search),
            storagePullBreaks: DY && (0, gY.K)(YY, window.location.search),
            splitPassBreaks: DY && (0, gY.G)(YY, window.location.search),
            framesAhead: (0, gY.h)(window.location.search),
            instancedTerrainSlow: DY && (0, gY.A)(YY, null !== (rY = (0, aY.e)(YY, !1)) && void 0 !== rY ? rY : (0, AY.b)())
          };
        return JY = FY.indirectHangs, FY
      })), dY
    }

    function wY() {
      return JY
    }
  },
  39937: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    const FY = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39928: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      h: () => FY
    });
    const FY = {
        webgpu: async () => (await DY.e(8).then((() => DY(42298)))).bloxdWasmWebgpu,
        webgl: async () => (await DY.e(6).then((() => DY(42306)))).bloxdWasmWebgl,
        webgl1: async () => (await DY.e(7).then((() => DY(42314)))).bloxdWasmWebgl1
      },
      AY = async () => (await DY.e(5).then((() => DY(42327)))).compileAnimationPackInWasm
  },
  39951: (YY, rY, DY) => {
    function FY() {
      return DY(39955)
    }

    function AY() {
      return DY(39957)
    }

    function IY(YY) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(YY)
    }
    DY.d(rY, {
      e: () => IY,
      h: () => FY,
      l: () => AY
    })
  },
  39904: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      f: () => RY
    });
    const FY = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function AY(YY) {
      if (YY instanceof WebAssembly.RuntimeError) return !0;
      const rY = YY instanceof Error ? YY.stack : void 0;
      return "string" === typeof rY && FY.test(rY)
    }
    const IY = 500;

    function RY(YY) {
      let rY = "[object Object]";
      try {
        rY = String(YY)
      } catch {}
      if ("[object Object]" !== rY) return rY;
      try {
        var DY, FY;
        return null !== (DY = null === (FY = JSON.stringify(YY)) || void 0 === FY ? void 0 : FY.slice(0, IY)) && void 0 !== DY ? DY : rY
      } catch {
        return rY
      }
    }
  },
  39945: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY,
      g: () => gY
    });
    var FY = DY(99);
    const AY = "webgpuPipeline";

    function IY(YY) {
      return YY.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let RY = null;

    function OY() {
      if (null === RY) try {
        YY = (0, FY.getBrowserName)(), rY = (0, FY.getBrowserVersion)(), DY = (0, FY.getOperatingSystem)(), AY = (0, FY.getOperatingSystemVersion)(), RY = `${YY.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===rY?"unknown":IY(rY)}-${DY}${void 0===AY?"":`_${IY(AY)}`}`
      } catch (OY) {
        console.warn("The user agent couldn't be read for its browser code", OY), RY = "unknown"
      }
      var YY, rY, DY, AY;
      return RY
    }

    function gY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const rY = `WGPU-${OY()}`,
        FY = (YY, FY) => {
          const {
            reason: IY,
            message: RY
          } = FY, OY = {
            pipeline: null !== YY && void 0 !== YY ? YY : "",
            reason: String(IY),
            browserMessage: String(RY)
          };
          Promise.all([DY.e(261), DY.e(86)]).then((() => DY(40046))).then((YY => {
            let {
              reportCrash: DY
            } = YY;
            DY({
              kind: "coreError",
              code: rY,
              site: AY,
              fatal: !1,
              message: `${OY.pipeline} ${OY.reason}: ${OY.browserMessage}`,
              details: OY,
              error: FY
            })
          })).catch((YY => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", YY)
          }))
        },
        IY = YY.createRenderPipelineAsync;
      YY.createRenderPipelineAsync = function(YY) {
        return IY.call(this, YY).catch((rY => {
          throw FY(YY.label, rY), rY
        }))
      };
      const RY = YY.createComputePipelineAsync;
      YY.createComputePipelineAsync = function(YY) {
        return RY.call(this, YY).catch((rY => {
          throw FY(YY.label, rY), rY
        }))
      }
    }
  },
  39882: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/bloxd_wasm_models_bg.eb067ed06c6f9109e2ec.wasm"
  },
  39873: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/bloxd_wasm_workers_bg.673ba79f832578127320.wasm"
  },
  39955: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39957: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  39871: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      f: () => FY
    });
    const FY = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new DY.U(DY(39873))
      }
    };
    const AY = {
      name: "bloxd_wasm_models",
      url: function() {
        return new DY.U(DY(39882))
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);