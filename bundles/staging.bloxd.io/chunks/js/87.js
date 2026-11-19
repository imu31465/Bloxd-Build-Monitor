export const id = 87;
export const ids = [87];
export const modules = {
  4285: (TT, oT, IT) => {
    IT.d(oT, {
      $b: () => tT,
      A: () => kT,
      Ab: () => xT,
      Bb: () => mT,
      C: () => cT,
      F: () => GT,
      Fb: () => wT,
      Gb: () => jT,
      J: () => FT,
      Jb: () => HT,
      Kb: () => UT,
      N: () => KT,
      Nb: () => YT,
      P: () => BT,
      Pb: () => QT,
      Rb: () => gT,
      T: () => LT,
      Tb: () => hT,
      Ub: () => qT,
      W: () => DT,
      Yb: () => zT,
      _: () => eT,
      bb: () => uT,
      c: () => sT,
      d: () => lT,
      eb: () => vT,
      f: () => ST,
      gb: () => RT,
      hb: () => ET,
      j: () => AT,
      kb: () => nT,
      l: () => ZT,
      mb: () => OT,
      n: () => rT,
      o: () => MT,
      qb: () => aT,
      r: () => WT,
      u: () => XT,
      ub: () => fT,
      vb: () => JT,
      xb: () => CT,
      y: () => iT
    });
    const iT = 32,
      zT = 33.333333333333336,
      kT = {
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
      WT = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      XT = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      BT = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      FT = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      ST = {
        Look: 0,
        Remesh: 1
      },
      DT = 8,
      LT = 1,
      xT = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      cT = {
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
      KT = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      MT = {
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
      rT = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      AT = 4,
      gT = 4,
      hT = 65535,
      wT = {
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
      mT = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      eT = 88,
      RT = 0,
      uT = 24,
      vT = 48,
      ET = 80,
      fT = {
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
      CT = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      jT = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      JT = {
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
      UT = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      aT = 65535,
      YT = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      QT = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      OT = 2,
      HT = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      nT = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      qT = {
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
      ZT = {
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
      lT = {
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
      sT = 8,
      tT = {
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
      GT = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  39586: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT
    });
    const iT = 1 << 20,
      zT = 1 << 21,
      kT = 1024,
      WT = 2048;

    function XT(TT, oT, IT) {
      const XT = TT + iT,
        BT = oT + kT,
        FT = IT + iT;
      return XT < 0 || XT >= zT || FT < 0 || FT >= zT || BT < 0 || BT >= WT ? -1 : (XT * zT + FT) * WT + BT
    }
  },
  39581: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT,
      e: () => WT,
      f: () => zT,
      h: () => kT,
      j: () => ST,
      l: () => FT,
      n: () => BT,
      r: () => XT
    });
    IT(3014);
    IT(39586);

    function iT(TT) {}

    function zT(TT) {}

    function kT(TT) {}

    function WT(TT) {}

    function XT(TT) {}

    function BT(TT, oT, IT) {}

    function FT(TT) {}

    function ST(TT) {}
  },
  39567: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => HT,
      E: () => nT,
      F: () => sT,
      I: () => To,
      J: () => ZT,
      K: () => qT,
      M: () => pT,
      O: () => GT,
      R: () => Io,
      U: () => NT,
      W: () => ET,
      d: () => oo,
      g: () => Wo,
      k: () => yT,
      n: () => VT,
      r: () => tT,
      s: () => dT,
      u: () => PT,
      x: () => ko
    });
    var iT = IT(306),
      zT = IT(263),
      kT = IT(270),
      WT = IT(12),
      XT = IT(2541),
      BT = IT(661),
      FT = IT(4034),
      ST = IT(2486),
      DT = IT(3012),
      LT = IT(90),
      xT = IT(303),
      cT = IT(26),
      KT = IT(282),
      MT = IT(120),
      rT = IT(632),
      AT = IT(134),
      gT = IT(126),
      hT = IT(4285),
      wT = IT(39572),
      mT = IT(1693),
      eT = IT(39577);
    const RT = "bloxd-webgpuOffAfterLoss",
      uT = "context:webgl",
      vT = "probe:threw";

    function ET(TT) {
      let oT;
      try {
        oT = TT.getContext("webgl", {
          powerPreference: AT.e
        })
      } catch {
        oT = null
      }
      if (null === oT) return null;
      let IT = null;
      try {
        const TT = oT.getParameter(oT.MAX_TEXTURE_SIZE);
        IT = "number" === typeof TT && TT > 0 ? TT : null
      } catch {
        IT = null
      }
      try {
        var iT;
        null === (iT = oT.getExtension("WEBGL_lose_context")) || void 0 === iT || iT.loseContext()
      } catch {}
      return IT
    }
    const fT = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      CT = "mali_valhall",
      jT = new Set(["nvidia_pre_turing"]);

    function JT(TT) {
      return function(TT) {
        try {
          return TT()
        } catch {
          return null
        }
      }((() => {
        var oT, IT, iT, WT;
        const XT = null !== (oT = null === (IT = TT.info) || void 0 === IT ? void 0 : IT.vendor) && void 0 !== oT ? oT : "";
        return "windows" === (0, LT.getOperatingSystem)() && "" !== XT && "intel" !== (0, LT.normaliseGpuVendor)(XT) ? null : ((0, LT.seedGpuVendor)(XT), BT = (0, zT.h)(), FT = (0, kT.f)(XT, null !== (iT = null === (WT = TT.info) || void 0 === WT ? void 0 : WT.architecture) && void 0 !== iT ? iT : ""), fT.has(BT) ? "android_arm" === BT && FT === CT ? "webgpu_default" : "webgl_default" : null);
        var BT, FT
      }))
    }

    function UT() {
      var TT;
      return {
        gpu: null !== (TT = navigator.gpu) && void 0 !== TT ? TT : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(TT) {
          let oT, IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wT.d;
          try {
            oT = TT.getContext("webgl")
          } catch {
            oT = null
          }
          if (null === oT) return [uT];
          const iT = [];
          try {
            for (const zT of IT.extensions) null === oT.getExtension(zT) && iT.push(zT);
            for (const [zT, kT] of Object.entries(IT.limits)) {
              const TT = oT[zT],
                IT = "number" === typeof TT ? oT.getParameter(TT) : null;
              ("number" !== typeof IT || IT < kT) && iT.push(`limit:${zT}`)
            }
            const TT = oT.getShaderPrecisionFormat(oT.VERTEX_SHADER, oT.HIGH_FLOAT);
            (null === TT || TT.precision < IT.vertexHighFloatBits) && iT.push("precision:vertex_high_float")
          } catch {
            iT.push(vT)
          }
          try {
            var zT;
            null === (zT = oT.getExtension("WEBGL_lose_context")) || void 0 === zT || zT.loseContext()
          } catch {}
          return iT
        }(document.createElement("canvas")),
        offAfterLoss: TT => aT((() => TT ? (0, KT.C)() : WT.c.isWebGpuOffAfterLoss())),
        oldIntelDriver: TT => aT((() => (0, MT.e)(TT))),
        intelGen9: TT => aT((() => (0, MT.n)(TT))),
        gpuClassWebGlArm: JT,
        storeGpuClassVerdict: TT => {
          cT.e.setItem(MT.B, TT)
        },
        gpuClassOnWebGl: TT => (0, rT.c)(TT),
        override: () => function() {
          if ((0, XT.r)("render") && "webgl1" === (0, XT.n)("renderer")) return "webgl1";
          const TT = [() => new URLSearchParams(window.location.search).get(ST.d), () => cT.e.getItem(ST.h), () => {
            const TT = localStorage.getItem(RT);
            return null !== TT && localStorage.removeItem(RT), "1" === TT ? "webgl2" : null
          }];
          for (const oT of TT) {
            let TT = null;
            try {
              TT = YT(oT())
            } catch {}
            if (null !== TT) return TT
          }
          return null
        }(),
        claimed: () => YT((0, BT.n)()),
        webGpuSetting: () => {
          const TT = cT.e.getItem(iT.hc);
          return "boolean" === typeof TT ? TT : null
        },
        heldBack: () => rT.g,
        storeHoldbackSpared: TT => {
          cT.e.setItem(MT.y, TT)
        },
        intelGen9OnWebGl: () => rT.k,
        Fc: () => aT((() => (0, DT.i)(LT.featureFlags.settings.canUseShaderPacks))),
        windows: () => aT((() => "windows" === (0, LT.getOperatingSystem)()))
      }
    }

    function aT(TT) {
      try {
        return TT()
      } catch {
        return !1
      }
    }

    function YT(TT) {
      return "lite" === TT ? "webgpu" : "webgl2" === TT || "babylon" === TT ? "webgl" : null
    }
    async function QT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UT();
      const oT = await async function(TT) {
        const oT = function(TT) {
            const oT = TT.override(),
              IT = TT.webGpuSetting(),
              iT = null === oT && !0 !== IT && TT.Fc(),
              zT = null !== oT || null !== IT || iT ? null : TT.claimed(),
              kT = null !== oT ? "override" : !0 === IT ? "setting" : iT ? "pack" : !1 === IT ? "setting" : null !== zT ? "claim" : "default",
              WT = function(TT) {
                return "override" === TT || "setting" === TT
              }(kT);
            if ("webgl" === oT || "webgl1" === oT || "webgl" === zT || "setting" === kT && !1 === IT) return {
              source: kT,
              asked: WT,
              refused: "not_requested"
            };
            if (!TT.gpu) return {
              source: kT,
              asked: WT,
              refused: "no_webgpu_api"
            };
            const XT = "default" === kT && TT.heldBack();
            if (XT && !TT.windows()) return {
              source: kT,
              asked: WT,
              refused: "webgl_holdback"
            };
            if (!WT && TT.offAfterLoss("pack" === kT)) return {
              source: kT,
              asked: WT,
              refused: XT ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: kT,
              asked: WT,
              heldBack: XT,
              gpu: TT.gpu
            }
          }(TT),
          {
            source: IT
          } = oT,
          iT = !oT.asked,
          zT = "gpu" in oT && oT.heldBack,
          WT = function(TT) {
            return zT && "none" !== TT ? {
              reason: "webgl_holdback",
              adapter: null,
              source: IT
            } : {
              reason: TT,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: IT
            }
          };
        if (!("gpu" in oT)) return WT(oT.refused);
        let XT;
        try {
          XT = await (0, mT.k)((0, gT.n)(oT.gpu), io, `requestAdapter didn't settle in ${io/1e3} s`)
        } catch {
          return WT("adapter_error")
        }
        if ("string" === typeof XT) return WT(XT);
        const BT = (0, gT.e)(XT);
        if ((0, gT.i)(XT)) return WT("software_adapter", BT);
        const FT = TT.windows() && function(TT) {
          return jT.has((0, kT.f)(TT.vendor, TT.architecture))
        }(BT);
        if (TT.storeHoldbackSpared(FT), zT && !FT) return WT("webgl_holdback");
        const ST = TT.intelGen9(XT),
          DT = ST ? null : TT.gpuClassWebGlArm(XT);
        if (TT.storeGpuClassVerdict(null !== DT && void 0 !== DT && DT), iT && TT.oldIntelDriver(XT)) return WT("old_intel_driver", BT);
        if ("default" === IT && TT.intelGen9OnWebGl() && ST) return WT("intel_gen9", BT);
        if ("default" === IT && null !== DT && TT.gpuClassOnWebGl(DT)) return WT("gpu_class_webgl", BT);
        return WT("none", BT)
      }(TT);
      if ("none" === oT.reason) return {
        backend: "webgpu",
        ...oT
      };
      if ("webgl1" !== TT.override() && TT.webgl2()) return {
        backend: "webgl",
        ...oT
      };
      const IT = TT.webgl1();
      return 0 === IT.length ? {
        backend: "webgl1",
        ...oT
      } : {
        missing: IT
      }
    }
    let OT = !1;
    async function HT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UT();
      if (null === TT) return null;
      const IT = await QT(oT);
      return OT = !("missing" in IT) && "webgpu" === IT.backend && "claim" === IT.source, "missing" in IT ? IT : {
        ...IT,
        load: TT[IT.backend]
      }
    }
    async function nT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UT().gpu,
        iT = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== TT.backend) return !1;
      const zT = lT(oT, "indirectDraws", "off", "on");
      if (null !== zT) return zT;
      if (null !== TT.adapter && (0, MT.q)(TT.adapter, iT)) return !0;
      if (null === IT) return !1;
      try {
        var kT;
        const TT = await (0, mT.k)(IT.requestAdapter({
          powerPreference: "low-power"
        }), io, `the low-power requestAdapter didn't settle in ${io/1e3} s`);
        return (0, MT.q)(null !== (kT = null === TT || void 0 === TT ? void 0 : TT.info) && void 0 !== kT ? kT : {}, iT)
      } catch (WT) {
        return WT instanceof mT.e
      }
    }

    function qT(TT, oT, IT) {
      if ("webgpu" !== TT.backend) return !1;
      const iT = lT(oT, "terrainFetch", "texture", "storage");
      return null !== iT ? iT : null !== TT.adapter && (0, MT.i)(TT.adapter, IT)
    }

    function ZT(TT, oT, IT) {
      if ("webgpu" !== TT.backend) return !1;
      const iT = lT(oT, "sceneDepth", "off", "on");
      return null !== iT ? iT : null !== TT.adapter && (0, MT.k)(TT.adapter, IT)
    }

    function lT(TT, oT, IT, iT) {
      const zT = new URLSearchParams(TT).get(oT),
        kT = null !== zT && void 0 !== zT ? zT : (0, BT.h)(oT);
      return kT !== IT && kT !== iT ? null : (OT ||= null === zT, kT === IT)
    }

    function sT(TT, oT) {
      return "webgl" === TT.backend && (0, kT.m)(oT)
    }

    function tT(TT) {
      return null !== TT && "missing" in TT
    }

    function GT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT.c;
      try {
        const IT = "start_failed" === TT || "pipeline_failed" === TT,
          iT = oT.turnOffWebGpuAfterDeviceLoss(IT ? "visible" : (0, KT.k)((0, xT.g)()));
        return !OT || iT && !oT.isWebGpuOffAfterLoss() || (0, BT.z)("webgpuLoss"), oT.isWebGpuOffAfterLoss() && "webgpu" === YT(cT.e.getItem(ST.h)) && cT.e.removeItem(ST.h), (0, XT.r)("webgpuloss") && (0, FT.e)((oT => {
          oT.noteWebGpuLoss("wasm", iT ? TT : `${TT}, which storage didn't keep`, null)
        })), iT
      } catch {
        return !1
      }
    }

    function pT(TT) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !NT()) ? GT(TT) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const bT = "framePacing";

    function yT(TT) {
      const oT = new URLSearchParams(TT).get(bT);
      return null !== oT && /^\d{1,9}$/.test(oT) ? Number(oT) : void 0
    }

    function NT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === YT(new URLSearchParams(TT).get(ST.d))
      } catch {
        return !1
      }
    }

    function PT(TT) {
      return !!dT(TT) || TT instanceof Error && !(TT instanceof WebAssembly.RuntimeError) && TT.message.startsWith(`${hT.d.RenderSurfaceUnusable}:`)
    }

    function dT(TT) {
      const {
        name: oT,
        message: IT
      } = null !== TT && void 0 !== TT ? TT : {};
      return "InvalidStateError" === oT && "string" === typeof IT && IT.startsWith("GPUDevice.")
    }

    function VT(TT) {
      const oT = TT;
      return "function" === typeof oT.CIT && "function" === typeof oT.jIT ? oT : null
    }

    function To(TT) {
      return "function" === typeof TT.qIT ? TT : null
    }
    const oo = "openRenderer";

    function Io(TT) {
      const oT = null === TT || void 0 === TT ? void 0 : TT.zkT();
      return void 0 === oT ? void 0 : new Error(oT)
    }
    const io = 5e3,
      zo = 15e3;

    function ko(TT, oT, IT, iT, zT, kT) {
      return (0, mT.k)(function(TT, oT, IT, iT, zT, kT) {
        return (0, eT.g)(TT, oT, (() => TT.qIT(IT, iT, zT, kT.indirectHangs, kT.storagePullBreaks, kT.splitPassBreaks, kT.framesAhead, kT.instancedTerrainSlow)))
      }(TT, oT, IT, iT, zT, kT), zo, `${hT.d.RenderSurfaceUnusable}: the renderer didn't open in ${zo/1e3} s`, Xo)
    }
    async function Wo(TT, oT, IT, iT, zT, kT) {
      if ("function" !== typeof TT.GkT) throw new Error("this core has no set_renderer");
      const WT = await ko(oT, oo, IT, zT, iT, kT);
      try {
        TT.GkT(WT)
      } catch (XT) {
        throw Xo(WT), XT
      }
    }

    function Xo(TT) {
      try {
        TT.free()
      } catch {}
    }
  },
  39572: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    const iT = {
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
  39588: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => BT,
      f: () => XT
    });
    var iT = IT(679),
      zT = IT(681);

    function kT(TT, oT) {
      const IT = null === oT ? void 0 : iT.d.get(oT);
      return "all" === IT || "webgl" === IT && "webgpu" !== TT.backend ? oT : null
    }

    function WT(TT) {
      return "software_adapter" === TT.reason ? null : TT.adapter
    }

    function XT(TT, oT) {
      const IT = (0, iT.t)();
      return null === IT ? null : (0, iT.h)(WT(TT), IT, oT ? iT.m : iT.j)
    }

    function BT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.l;
      const iT = kT(TT, oT);
      return null !== iT && "webgl" === TT.backend && IT(iT) ? null : iT
    }
  },
  39577: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      g: () => ST,
      i: () => WT,
      m: () => BT
    });
    var iT = IT(39579);
    class zT extends Error {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${TT}: the module trapped${IT?" in an earlier call":""}: ${String(oT)}`, {
          cause: oT
        }), this.site = TT, this.trap = oT, this.earlier = IT, this.name = "ModuleTrapError", oT instanceof Error && void 0 !== oT.stack && (this.stack = `${this.name}: ${this.message}\n${oT.stack}`)
      }
    }
    const kT = new WeakMap;

    function WT(TT) {
      return kT.has(TT)
    }

    function XT(TT, oT) {
      kT.has(TT) || kT.set(TT, oT)
    }

    function BT(TT, oT) {
      return !!(0, iT.d)(oT) && (XT(TT, oT), !0)
    }
    const FT = [
      ["error", TT => TT.error],
      ["unhandledrejection", TT => TT.reason]
    ];

    function ST(TT, oT, IT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return kT.has(TT) ? Promise.reject(new zT(oT, kT.get(TT), !0)) : new Promise(((kT, BT) => {
        const ST = IT => {
            XT(TT, IT), xT(), BT(new zT(oT, IT))
          },
          DT = TT => {
            TT instanceof WebAssembly.RuntimeError ? ST(TT) : (xT(), BT(TT))
          },
          LT = FT.map((TT => {
            let [oT, IT] = TT;
            return [oT, TT => {
              const oT = IT(TT);
              (0, iT.d)(oT) && ST(oT)
            }]
          })),
          xT = () => {
            for (const [TT, oT] of LT) null === WT || void 0 === WT || WT.removeEventListener(TT, oT)
          };
        for (const [TT, oT] of LT) null === WT || void 0 === WT || WT.addEventListener(TT, oT);
        let cT;
        try {
          cT = IT()
        } catch (KT) {
          return void DT(KT)
        }
        cT.then((TT => {
          xT(), kT(TT)
        }), DT)
      }))
    }
  },
  39593: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => RT,
      E: () => jT,
      F: () => JT,
      H: () => YT,
      L: () => CT,
      d: () => eT,
      e: () => hT,
      h: () => QT,
      i: () => aT,
      l: () => gT,
      n: () => mT,
      o: () => rT,
      p: () => vT,
      s: () => fT,
      u: () => qT,
      x: () => nT,
      z: () => UT
    });
    var iT = IT(199),
      zT = IT(270),
      kT = IT(12),
      WT = IT(303),
      XT = IT(26),
      BT = IT(39567),
      FT = IT(39588),
      ST = IT(39597),
      DT = (IT(39581), IT(39606)),
      LT = IT(39615);
    const xT = "wasmJoinBuild";
    let cT = null,
      KT = null,
      MT = null;

    function rT(TT) {
      MT = TT
    }
    let AT = !1;

    function gT() {
      AT = !0
    }

    function hT() {
      return AT
    }
    let wT = !1;

    function mT() {
      wT = !0
    }

    function eT() {
      return wT
    }

    function RT() {
      return MT
    }
    let uT = null;

    function vT(TT) {
      uT = TT, (0, WT.e)(TT)
    }
    const ET = "wasmClientRenderLost";

    function fT() {
      XT.h.setItem(ET, !0)
    }

    function CT() {
      return !0 === XT.h.getItem(ET)
    }

    function jT() {
      return uT
    }

    function JT() {
      return null === cT && (XT.e.removeItem("wasmLastPick"), XT.e.removeItem("wasmGuessVerdict"), (0, WT.j)(), cT = (0, BT.B)(ST.f).then((TT => (null === TT || (0, BT.r)(TT) || (KT = DT.c[TT.backend], kT.c.followGameGpu("webgpu" === TT.backend ? TT.adapter : null), "webgpu" === TT.backend && (0, LT.d)()), TT)))), cT
    }

    function UT() {
      return KT
    }

    function aT(TT) {
      return TT ? TT.load() : Promise.resolve().then((function() {
        var TT = new Error("Cannot find module '@bloxd/wasm/client'");
        throw TT.code = "MODULE_NOT_FOUND", TT
      })).then((TT => TT.bloxdWasmClient))
    }

    function YT(TT) {
      XT.e.setItem(xT, TT)
    }
    async function QT() {
      if (null === ST.f) return aT(null);
      const TT = XT.e.getItem(xT);
      let oT = "none" === TT ? null : "webgl";
      return null !== TT && "none" !== TT && ("string" === typeof TT && void 0 !== (0, iT.b)(ST.f, TT) ? oT = TT : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(TT)}, is none of this client's: guessing WebGL2's`)), null === oT ? null : ST.f[oT]()
    }
    let OT = null,
      HT = null;

    function nT() {
      return OT ??= JT().then((async TT => {
        var oT;
        const IT = null !== TT && !(0, BT.r)(TT),
          iT = {
            indirectHangs: IT && await (0, BT.E)(TT, window.location.search),
            storagePullBreaks: IT && (0, BT.K)(TT, window.location.search),
            splitPassBreaks: IT && (0, BT.J)(TT, window.location.search),
            framesAhead: (0, BT.k)(window.location.search),
            instancedTerrainSlow: IT && (0, BT.F)(TT, null !== (oT = (0, FT.f)(TT, !1)) && void 0 !== oT ? oT : (0, zT.c)())
          };
        return HT = iT.indirectHangs, iT
      })), OT
    }

    function qT() {
      return HT
    }
  },
  39606: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    const iT = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39597: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      f: () => iT
    });
    const iT = {
        webgpu: async () => (await IT.e(8).then((() => IT(42064)))).bloxdWasmWebgpu,
        webgl: async () => (await IT.e(6).then((() => IT(42077)))).bloxdWasmWebgl,
        webgl1: async () => (await IT.e(7).then((() => IT(42083)))).bloxdWasmWebgl1
      },
      zT = async () => (await IT.e(5).then((() => IT(42093)))).compileAnimationPackInWasm
  },
  39624: (TT, oT, IT) => {
    function iT() {
      return IT(39631)
    }

    function zT() {
      return IT(39640)
    }

    function kT(TT) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(TT)
    }
    IT.d(oT, {
      c: () => kT,
      d: () => iT,
      g: () => zT
    })
  },
  39579: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      h: () => WT
    });
    const iT = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function zT(TT) {
      if (TT instanceof WebAssembly.RuntimeError) return !0;
      const oT = TT instanceof Error ? TT.stack : void 0;
      return "string" === typeof oT && iT.test(oT)
    }
    const kT = 500;

    function WT(TT) {
      let oT = "[object Object]";
      try {
        oT = String(TT)
      } catch {}
      if ("[object Object]" !== oT) return oT;
      try {
        var IT, iT;
        return null !== (IT = null === (iT = JSON.stringify(TT)) || void 0 === iT ? void 0 : iT.slice(0, kT)) && void 0 !== IT ? IT : oT
      } catch {
        return oT
      }
    }
  },
  39615: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      d: () => BT
    });
    var iT = IT(90);
    const zT = "webgpuPipeline";

    function kT(TT) {
      return TT.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let WT = null;

    function XT() {
      if (null === WT) try {
        TT = (0, iT.getBrowserName)(), oT = (0, iT.getBrowserVersion)(), IT = (0, iT.getOperatingSystem)(), zT = (0, iT.getOperatingSystemVersion)(), WT = `${TT.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===oT?"unknown":kT(oT)}-${IT}${void 0===zT?"":`_${kT(zT)}`}`
      } catch (XT) {
        console.warn("The user agent couldn't be read for its browser code", XT), WT = "unknown"
      }
      var TT, oT, IT, zT;
      return WT
    }

    function BT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const oT = `WGPU-${XT()}`,
        iT = (TT, iT) => {
          const {
            reason: kT,
            message: WT
          } = iT, XT = {
            pipeline: null !== TT && void 0 !== TT ? TT : "",
            reason: String(kT),
            browserMessage: String(WT)
          };
          Promise.all([IT.e(261), IT.e(86)]).then((() => IT(39745))).then((TT => {
            let {
              reportCrash: IT
            } = TT;
            IT({
              kind: "coreError",
              code: oT,
              site: zT,
              fatal: !1,
              message: `${XT.pipeline} ${XT.reason}: ${XT.browserMessage}`,
              details: XT,
              error: iT
            })
          })).catch((TT => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", TT)
          }))
        },
        kT = TT.createRenderPipelineAsync;
      TT.createRenderPipelineAsync = function(TT) {
        return kT.call(this, TT).catch((oT => {
          throw iT(TT.label, oT), oT
        }))
      };
      const WT = TT.createComputePipelineAsync;
      TT.createComputePipelineAsync = function(TT) {
        return WT.call(this, TT).catch((oT => {
          throw iT(TT.label, oT), oT
        }))
      }
    }
  },
  39561: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/bloxd_wasm_models_bg.87b170210f13f7b7bd81.wasm"
  },
  39556: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/bloxd_wasm_workers_bg.74497504dfda1ff0ba97.wasm"
  },
  39631: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39640: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  39553: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      c: () => iT
    });
    const iT = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new IT.U(IT(39556))
      }
    };
    const zT = {
      name: "bloxd_wasm_models",
      url: function() {
        return new IT.U(IT(39561))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);