export const id = 88;
export const ids = [88];
export const modules = {
  4769: (TT, kT, cT) => {
    cT.d(kT, {
      $: () => bT,
      Ab: () => aT,
      B: () => KT,
      Bb: () => oT,
      C: () => vT,
      D: () => YT,
      Fb: () => uT,
      H: () => xT,
      Hb: () => eT,
      K: () => tT,
      Kb: () => VT,
      L: () => fT,
      Mb: () => ET,
      O: () => CT,
      Ob: () => ST,
      P: () => AT,
      R: () => rT,
      Sb: () => DT,
      Tb: () => dT,
      V: () => wT,
      Vb: () => MT,
      Xb: () => UT,
      Y: () => mT,
      _: () => PT,
      ab: () => XT,
      cb: () => ZT,
      d: () => gT,
      e: () => RT,
      g: () => IT,
      gb: () => GT,
      j: () => QT,
      kb: () => zT,
      n: () => LT,
      ob: () => HT,
      q: () => NT,
      sb: () => JT,
      t: () => hT,
      vb: () => jT,
      x: () => OT,
      y: () => yT,
      yb: () => FT,
      z: () => lT
    });
    const lT = 32,
      MT = 33.333333333333336,
      KT = {
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
      OT = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      yT = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      fT = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      xT = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      IT = {
        Look: 0,
        Remesh: 1
      },
      AT = 8,
      CT = 1,
      jT = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      vT = {
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
      tT = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      hT = {
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
      NT = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      QT = 4,
      ST = 4,
      DT = 65535,
      aT = {
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
      FT = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      rT = 88,
      PT = 0,
      wT = 24,
      mT = 48,
      bT = 80,
      zT = {
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
      JT = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      oT = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      HT = {
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
      eT = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      GT = 65535,
      VT = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      ET = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      ZT = 2,
      uT = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      XT = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      dT = {
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
      LT = {
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
      RT = {
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
      gT = 8,
      UT = {
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
      YT = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  40450: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT
    });
    const lT = 1 << 20,
      MT = 1 << 21,
      KT = 1024,
      OT = 2048;

    function yT(TT, kT, cT) {
      const yT = TT + lT,
        fT = kT + KT,
        xT = cT + lT;
      return yT < 0 || yT >= MT || xT < 0 || xT >= MT || fT < 0 || fT >= OT ? -1 : (yT * MT + xT) * OT + fT
    }
  },
  40443: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT,
      c: () => OT,
      d: () => MT,
      h: () => KT,
      k: () => IT,
      l: () => xT,
      n: () => fT,
      o: () => yT
    });
    cT(3390);
    cT(40450);

    function lT(TT) {}

    function MT(TT) {}

    function KT(TT) {}

    function OT(TT) {}

    function yT(TT) {}

    function fT(TT, kT, cT) {}

    function xT(TT) {}

    function IT(TT) {}
  },
  40426: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => gT,
      D: () => Tk,
      E: () => LT,
      H: () => dT,
      L: () => BT,
      N: () => YT,
      R: () => ck,
      T: () => pT,
      X: () => bT,
      c: () => kk,
      f: () => Ok,
      h: () => nT,
      i: () => sT,
      l: () => UT,
      o: () => qT,
      q: () => iT,
      s: () => Kk,
      u: () => uT,
      w: () => XT
    });
    var lT = cT(328),
      MT = cT(291),
      KT = cT(298),
      OT = cT(31),
      yT = cT(2853),
      fT = cT(666),
      xT = cT(4499),
      IT = cT(2810),
      AT = cT(3383),
      CT = cT(118),
      jT = cT(326),
      vT = cT(47),
      tT = cT(307),
      hT = cT(141),
      NT = cT(630),
      QT = cT(150),
      ST = cT(145),
      DT = cT(4769),
      aT = cT(40434),
      FT = cT(1792),
      rT = cT(40440);
    const PT = "bloxd-webgpuOffAfterLoss",
      wT = "context:webgl",
      mT = "probe:threw";

    function bT(TT) {
      let kT;
      try {
        kT = TT.getContext("webgl", {
          powerPreference: QT.b
        })
      } catch {
        kT = null
      }
      if (null === kT) return null;
      let cT = null;
      try {
        const TT = kT.getParameter(kT.MAX_TEXTURE_SIZE);
        cT = "number" === typeof TT && TT > 0 ? TT : null
      } catch {
        cT = null
      }
      try {
        var lT;
        null === (lT = kT.getExtension("WEBGL_lose_context")) || void 0 === lT || lT.loseContext()
      } catch {}
      return cT
    }
    const zT = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      JT = "mali_valhall",
      oT = new Set(["nvidia_pre_turing"]);

    function HT(TT) {
      return function(TT) {
        try {
          return TT()
        } catch {
          return null
        }
      }((() => {
        var kT, cT, lT, OT;
        const yT = null !== (kT = null === (cT = TT.info) || void 0 === cT ? void 0 : cT.vendor) && void 0 !== kT ? kT : "";
        return "windows" === (0, CT.getOperatingSystem)() && "" !== yT && "intel" !== (0, CT.normaliseGpuVendor)(yT) ? null : ((0, CT.seedGpuVendor)(yT), fT = (0, MT.i)(), xT = (0, KT.i)(yT, null !== (lT = null === (OT = TT.info) || void 0 === OT ? void 0 : OT.architecture) && void 0 !== lT ? lT : ""), zT.has(fT) ? "android_arm" === fT && xT === JT ? "webgpu_default" : "webgl_default" : null);
        var fT, xT
      }))
    }

    function eT() {
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
          let kT, cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aT.b;
          try {
            kT = TT.getContext("webgl")
          } catch {
            kT = null
          }
          if (null === kT) return [wT];
          const lT = [];
          try {
            for (const MT of cT.extensions) null === kT.getExtension(MT) && lT.push(MT);
            for (const [MT, KT] of Object.entries(cT.limits)) {
              const TT = kT[MT],
                cT = "number" === typeof TT ? kT.getParameter(TT) : null;
              ("number" !== typeof cT || cT < KT) && lT.push(`limit:${MT}`)
            }
            const TT = kT.getShaderPrecisionFormat(kT.VERTEX_SHADER, kT.HIGH_FLOAT);
            (null === TT || TT.precision < cT.vertexHighFloatBits) && lT.push("precision:vertex_high_float")
          } catch {
            lT.push(mT)
          }
          try {
            var MT;
            null === (MT = kT.getExtension("WEBGL_lose_context")) || void 0 === MT || MT.loseContext()
          } catch {}
          return lT
        }(document.createElement("canvas")),
        offAfterLoss: TT => GT((() => TT ? (0, tT.u)() : OT.e.isWebGpuOffAfterLoss())),
        oldIntelDriver: TT => GT((() => (0, hT.f)(TT))),
        intelGen9: TT => GT((() => (0, hT.l)(TT))),
        gpuClassWebGlArm: HT,
        storeGpuClassVerdict: TT => {
          vT.e.setItem(hT.D, TT)
        },
        gpuClassOnWebGl: TT => (0, NT.b)(TT),
        override: () => function() {
          if ((0, yT.o)("render") && "webgl1" === (0, yT.m)("renderer")) return "webgl1";
          const TT = [() => new URLSearchParams(window.location.search).get(IT.d), () => vT.e.getItem(IT.f), () => {
            const TT = localStorage.getItem(PT);
            return null !== TT && localStorage.removeItem(PT), "1" === TT ? "webgl2" : null
          }];
          for (const kT of TT) {
            let TT = null;
            try {
              TT = VT(kT())
            } catch {}
            if (null !== TT) return TT
          }
          return null
        }(),
        claimed: () => VT((0, fT.l)()),
        webGpuSetting: () => {
          const TT = vT.e.getItem(lT.Sb);
          return "boolean" === typeof TT ? TT : null
        },
        heldBack: () => NT.d,
        storeHoldbackSpared: TT => {
          vT.e.setItem(hT.B, TT)
        },
        intelGen9OnWebGl: () => NT.g,
        Bj: () => GT((() => (0, AT.g)(CT.featureFlags.settings.canUseShaderPacks))),
        windows: () => GT((() => "windows" === (0, CT.getOperatingSystem)()))
      }
    }

    function GT(TT) {
      try {
        return TT()
      } catch {
        return !1
      }
    }

    function VT(TT) {
      return "lite" === TT ? "webgpu" : "webgl2" === TT || "babylon" === TT ? "webgl" : null
    }
    async function ET() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT();
      const kT = await async function(TT) {
        const kT = function(TT) {
            const kT = TT.override(),
              cT = TT.webGpuSetting(),
              lT = null === kT && !0 !== cT && TT.Bj(),
              MT = null !== kT || null !== cT || lT ? null : TT.claimed(),
              KT = null !== kT ? "override" : !0 === cT ? "setting" : lT ? "pack" : !1 === cT ? "setting" : null !== MT ? "claim" : "default",
              OT = function(TT) {
                return "override" === TT || "setting" === TT
              }(KT);
            if ("webgl" === kT || "webgl1" === kT || "webgl" === MT || "setting" === KT && !1 === cT) return {
              source: KT,
              asked: OT,
              refused: "not_requested"
            };
            if (!TT.gpu) return {
              source: KT,
              asked: OT,
              refused: "no_webgpu_api"
            };
            const yT = "default" === KT && TT.heldBack();
            if (yT && !TT.windows()) return {
              source: KT,
              asked: OT,
              refused: "webgl_holdback"
            };
            if (!OT && TT.offAfterLoss("pack" === KT)) return {
              source: KT,
              asked: OT,
              refused: yT ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: KT,
              asked: OT,
              heldBack: yT,
              gpu: TT.gpu
            }
          }(TT),
          {
            source: cT
          } = kT,
          lT = !kT.asked,
          MT = "gpu" in kT && kT.heldBack,
          OT = function(TT) {
            return MT && "none" !== TT ? {
              reason: "webgl_holdback",
              adapter: null,
              source: cT
            } : {
              reason: TT,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: cT
            }
          };
        if (!("gpu" in kT)) return OT(kT.refused);
        let yT;
        try {
          yT = await (0, FT.m)((0, ST.k)(kT.gpu), lk, `requestAdapter didn't settle in ${lk/1e3} s`)
        } catch {
          return OT("adapter_error")
        }
        if ("string" === typeof yT) return OT(yT);
        const fT = (0, ST.b)(yT);
        if ((0, ST.h)(yT)) return OT("software_adapter", fT);
        const xT = TT.windows() && function(TT) {
          return oT.has((0, KT.i)(TT.vendor, TT.architecture))
        }(fT);
        if (TT.storeHoldbackSpared(xT), MT && !xT) return OT("webgl_holdback");
        const IT = TT.intelGen9(yT),
          AT = IT ? null : TT.gpuClassWebGlArm(yT);
        if (TT.storeGpuClassVerdict(null !== AT && void 0 !== AT && AT), lT && TT.oldIntelDriver(yT)) return OT("old_intel_driver", fT);
        if ("default" === cT && TT.intelGen9OnWebGl() && IT) return OT("intel_gen9", fT);
        if ("default" === cT && null !== AT && TT.gpuClassOnWebGl(AT)) return OT("gpu_class_webgl", fT);
        return OT("none", fT)
      }(TT);
      if ("none" === kT.reason) return {
        backend: "webgpu",
        ...kT
      };
      if ("webgl1" !== TT.override() && TT.webgl2()) return {
        backend: "webgl",
        ...kT
      };
      const cT = TT.webgl1();
      return 0 === cT.length ? {
        backend: "webgl1",
        ...kT
      } : {
        missing: cT
      }
    }
    let ZT = !1;
    async function uT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT();
      if (null === TT) return null;
      const cT = await ET(kT);
      return ZT = !("missing" in cT) && "webgpu" === cT.backend && "claim" === cT.source, "missing" in cT ? cT : {
        ...cT,
        load: TT[cT.backend]
      }
    }
    async function XT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eT().gpu,
        lT = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== TT.backend) return !1;
      const MT = RT(kT, "indirectDraws", "off", "on");
      if (null !== MT) return MT;
      if (null !== TT.adapter && (0, hT.o)(TT.adapter, lT)) return !0;
      if (null === cT) return !1;
      try {
        var KT;
        const TT = await (0, FT.m)(cT.requestAdapter({
          powerPreference: "low-power"
        }).then((async TT => (null !== TT && await (0, ST.e)(TT), TT))), lk, `the low-power requestAdapter didn't settle in ${lk/1e3} s`);
        return (0, hT.o)(null !== (KT = null === TT || void 0 === TT ? void 0 : TT.info) && void 0 !== KT ? KT : {}, lT)
      } catch (OT) {
        return OT instanceof FT.h
      }
    }

    function dT(TT, kT, cT) {
      if ("webgpu" !== TT.backend) return !1;
      const lT = RT(kT, "terrainFetch", "texture", "storage");
      return null !== lT ? lT : null !== TT.adapter && (0, hT.i)(TT.adapter, cT)
    }

    function LT(TT, kT, cT) {
      if ("webgpu" !== TT.backend) return !1;
      const lT = RT(kT, "sceneDepth", "off", "on");
      return null !== lT ? lT : null !== TT.adapter && (0, hT.k)(TT.adapter, cT)
    }

    function RT(TT, kT, cT, lT) {
      const MT = new URLSearchParams(TT).get(kT),
        KT = null !== MT && void 0 !== MT ? MT : (0, fT.h)(kT);
      return KT !== cT && KT !== lT ? null : (ZT ||= null === MT, KT === cT)
    }

    function gT(TT, kT) {
      return "webgl" === TT.backend && (0, KT.n)(kT)
    }

    function UT(TT) {
      return null !== TT && "missing" in TT
    }

    function YT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OT.e;
      try {
        const cT = "start_failed" === TT || "pipeline_failed" === TT,
          lT = kT.turnOffWebGpuAfterDeviceLoss(cT ? "visible" : (0, tT.j)((0, jT.f)()));
        return !ZT || lT && !kT.isWebGpuOffAfterLoss() || (0, fT.w)("webgpuLoss"), kT.isWebGpuOffAfterLoss() && "webgpu" === VT(vT.e.getItem(IT.f)) && vT.e.removeItem(IT.f), (0, yT.o)("webgpuloss") && (0, xT.d)((kT => {
          kT.noteWebGpuLoss("wasm", lT ? TT : `${TT}, which storage didn't keep`, null)
        })), lT
      } catch {
        return !1
      }
    }

    function BT(TT) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !pT()) ? YT(TT) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const WT = "framePacing";

    function nT(TT) {
      const kT = new URLSearchParams(TT).get(WT);
      return null !== kT && /^\d{1,9}$/.test(kT) ? Number(kT) : void 0
    }

    function pT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === VT(new URLSearchParams(TT).get(IT.d))
      } catch {
        return !1
      }
    }

    function iT(TT) {
      return !!qT(TT) || TT instanceof Error && !(TT instanceof WebAssembly.RuntimeError) && TT.message.startsWith(`${DT.e.RenderSurfaceUnusable}:`)
    }

    function qT(TT) {
      const {
        name: kT,
        message: cT
      } = null !== TT && void 0 !== TT ? TT : {};
      return "InvalidStateError" === kT && "string" === typeof cT && cT.startsWith("GPUDevice.")
    }

    function sT(TT) {
      const kT = TT;
      return "function" === typeof kT.xcT && "function" === typeof kT.IcT ? kT : null
    }

    function Tk(TT) {
      return "function" === typeof TT.NcT ? TT : null
    }
    const kk = "openRenderer";

    function ck(TT) {
      const kT = null === TT || void 0 === TT ? void 0 : TT.HMT();
      return void 0 === kT ? void 0 : new Error(kT)
    }
    const lk = 5e3,
      Mk = 15e3;

    function Kk(TT, kT, cT, lT, MT, KT) {
      return (0, FT.m)(function(TT, kT, cT, lT, MT, KT) {
        return (0, rT.h)(TT, kT, (() => TT.NcT(cT, lT, MT, KT.indirectHangs, KT.storagePullBreaks, KT.splitPassBreaks, KT.framesAhead, KT.instancedTerrainSlow)))
      }(TT, kT, cT, lT, MT, KT), Mk, `${DT.e.RenderSurfaceUnusable}: the renderer didn't open in ${Mk/1e3} s`, yk)
    }
    async function Ok(TT, kT, cT, lT, MT, KT) {
      if ("function" !== typeof TT.DKT) throw new Error("this core has no set_renderer");
      const OT = await Kk(kT, kk, cT, MT, lT, KT);
      try {
        TT.DKT(OT)
      } catch (yT) {
        throw yk(OT), yT
      }
    }

    function yk(TT) {
      try {
        TT.free()
      } catch {}
    }
  },
  40434: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    const lT = {
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
  40458: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT,
      g: () => yT
    });
    var lT = cT(685),
      MT = cT(694);

    function KT(TT, kT) {
      const cT = null === kT ? void 0 : lT.c.get(kT);
      return "all" === cT || "webgl" === cT && "webgpu" !== TT.backend ? kT : null
    }

    function OT(TT) {
      return "software_adapter" === TT.reason ? null : TT.adapter
    }

    function yT(TT, kT) {
      const cT = (0, lT.o)();
      return null === cT ? null : (0, lT.f)(OT(TT), cT, kT ? lT.j : lT.i)
    }

    function fT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MT.j;
      const lT = KT(TT, kT);
      return null !== lT && "webgl" === TT.backend && cT(lT) ? null : lT
    }
  },
  40440: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT,
      h: () => IT,
      i: () => OT,
      m: () => fT
    });
    var lT = cT(36089);
    class MT extends Error {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${TT}: the module trapped${cT?" in an earlier call":""}: ${String(kT)}`, {
          cause: kT
        }), this.site = TT, this.trap = kT, this.earlier = cT, this.name = "ModuleTrapError", kT instanceof Error && void 0 !== kT.stack && (this.stack = `${this.name}: ${this.message}\n${kT.stack}`)
      }
    }
    const KT = new WeakMap;

    function OT(TT) {
      return KT.has(TT)
    }

    function yT(TT, kT) {
      KT.has(TT) || KT.set(TT, kT)
    }

    function fT(TT, kT) {
      return !!(0, lT.h)(kT) && (yT(TT, kT), !0)
    }
    const xT = [
      ["error", TT => TT.error],
      ["unhandledrejection", TT => TT.reason]
    ];

    function IT(TT, kT, cT) {
      let OT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return KT.has(TT) ? Promise.reject(new MT(kT, KT.get(TT), !0)) : new Promise(((KT, fT) => {
        const IT = cT => {
            yT(TT, cT), jT(), fT(new MT(kT, cT))
          },
          AT = TT => {
            TT instanceof WebAssembly.RuntimeError ? IT(TT) : (jT(), fT(TT))
          },
          CT = xT.map((TT => {
            let [kT, cT] = TT;
            return [kT, TT => {
              const kT = cT(TT);
              (0, lT.h)(kT) && IT(kT)
            }]
          })),
          jT = () => {
            for (const [TT, kT] of CT) null === OT || void 0 === OT || OT.removeEventListener(TT, kT)
          };
        for (const [TT, kT] of CT) null === OT || void 0 === OT || OT.addEventListener(TT, kT);
        let vT;
        try {
          vT = cT()
        } catch (tT) {
          return void AT(tT)
        }
        vT.then((TT => {
          jT(), KT(TT)
        }), AT)
      }))
    }
  },
  40461: (TT, kT, cT) => {
    cT.d(kT, {
      C: () => mT,
      F: () => zT,
      H: () => dT,
      K: () => XT,
      O: () => eT,
      S: () => PT,
      V: () => oT,
      Y: () => HT,
      _: () => VT,
      bb: () => JT,
      e: () => rT,
      i: () => DT,
      m: () => ET,
      o: () => GT,
      s: () => ST,
      v: () => FT,
      y: () => NT
    });
    var lT = cT(229),
      MT = cT(298),
      KT = cT(31),
      OT = cT(326),
      yT = cT(47),
      fT = cT(40426),
      xT = cT(40458),
      IT = cT(40465),
      AT = (cT(40443), cT(40467)),
      CT = cT(40473);
    const jT = "wasmJoinBuild";
    let vT = null,
      tT = null,
      hT = null;

    function NT(TT) {
      hT = TT
    }
    let QT = !1;

    function ST() {
      QT = !0
    }

    function DT() {
      return QT
    }
    let aT = !1;

    function FT() {
      aT = !0
    }

    function rT() {
      return aT
    }

    function PT() {
      return hT
    }
    let wT = null;

    function mT(TT) {
      wT = TT, (0, OT.b)(TT)
    }
    const bT = "wasmClientRenderLost";

    function zT() {
      yT.g.setItem(bT, !0)
    }

    function JT() {
      return !0 === yT.g.getItem(bT)
    }

    function oT() {
      return wT
    }

    function HT() {
      return null === vT && (yT.e.removeItem("wasmLastPick"), yT.e.removeItem("wasmGuessVerdict"), (0, OT.i)(), vT = (0, fT.u)(IT.i).then((TT => (null === TT || (0, fT.l)(TT) || (tT = AT.e[TT.backend], KT.e.followGameGpu("webgpu" === TT.backend ? TT.adapter : null), "webgpu" === TT.backend && (0, CT.f)()), TT)))), vT
    }

    function eT() {
      return tT
    }

    function GT(TT) {
      return TT ? TT.load() : Promise.resolve().then((function() {
        var TT = new Error("Cannot find module '@bloxd/wasm/client'");
        throw TT.code = "MODULE_NOT_FOUND", TT
      })).then((TT => TT.bloxdWasmClient))
    }

    function VT(TT) {
      yT.e.setItem(jT, TT)
    }
    async function ET() {
      if (null === IT.i) return GT(null);
      const TT = yT.e.getItem(jT);
      let kT = "none" === TT ? null : "webgl";
      return null !== TT && "none" !== TT && ("string" === typeof TT && void 0 !== (0, lT.d)(IT.i, TT) ? kT = TT : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(TT)}, is none of this client's: guessing WebGL2's`)), null === kT ? null : IT.i[kT]()
    }
    let ZT = null,
      uT = null;

    function XT() {
      return ZT ??= HT().then((async TT => {
        var kT;
        const cT = null !== TT && !(0, fT.l)(TT),
          lT = {
            indirectHangs: cT && await (0, fT.w)(TT, window.location.search),
            storagePullBreaks: cT && (0, fT.H)(TT, window.location.search),
            splitPassBreaks: cT && (0, fT.E)(TT, window.location.search),
            framesAhead: (0, fT.h)(window.location.search),
            instancedTerrainSlow: cT && (0, fT.A)(TT, null !== (kT = (0, xT.g)(TT, !1)) && void 0 !== kT ? kT : (0, MT.e)())
          };
        return uT = lT.indirectHangs, lT
      })), ZT
    }

    function dT() {
      return uT
    }
  },
  40467: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    const lT = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40465: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      i: () => lT
    });
    const lT = {
        webgpu: async () => (await cT.e(8).then((() => cT(42729)))).bloxdWasmWebgpu,
        webgl: async () => (await cT.e(6).then((() => cT(42745)))).bloxdWasmWebgl,
        webgl1: async () => (await cT.e(7).then((() => cT(42758)))).bloxdWasmWebgl1
      },
      MT = async () => (await cT.e(5).then((() => cT(42771)))).compileAnimationPackInWasm
  },
  40477: (TT, kT, cT) => {
    function lT() {
      return cT(40479)
    }

    function MT() {
      return cT(40481)
    }

    function KT(TT) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(TT)
    }
    cT.d(kT, {
      c: () => KT,
      g: () => lT,
      h: () => MT
    })
  },
  40473: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT,
      f: () => fT
    });
    var lT = cT(118);
    const MT = "webgpuPipeline";

    function KT(TT) {
      return TT.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let OT = null;

    function yT() {
      if (null === OT) try {
        TT = (0, lT.getBrowserName)(), kT = (0, lT.getBrowserVersion)(), cT = (0, lT.getOperatingSystem)(), MT = (0, lT.getOperatingSystemVersion)(), OT = `${TT.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===kT?"unknown":KT(kT)}-${cT}${void 0===MT?"":`_${KT(MT)}`}`
      } catch (yT) {
        console.warn("The user agent couldn't be read for its browser code", yT), OT = "unknown"
      }
      var TT, kT, cT, MT;
      return OT
    }

    function fT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const kT = `WGPU-${yT()}`,
        lT = (TT, lT) => {
          const {
            reason: KT,
            message: OT
          } = lT, yT = {
            pipeline: null !== TT && void 0 !== TT ? TT : "",
            reason: String(KT),
            browserMessage: String(OT)
          };
          Promise.all([cT.e(263), cT.e(87)]).then((() => cT(40557))).then((TT => {
            let {
              reportCrash: cT
            } = TT;
            cT({
              kind: "coreError",
              code: kT,
              site: MT,
              fatal: !1,
              message: `${yT.pipeline} ${yT.reason}: ${yT.browserMessage}`,
              details: yT,
              error: lT
            })
          })).catch((TT => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", TT)
          }))
        },
        KT = TT.createRenderPipelineAsync;
      TT.createRenderPipelineAsync = function(TT) {
        return KT.call(this, TT).catch((kT => {
          throw lT(TT.label, kT), kT
        }))
      };
      const OT = TT.createComputePipelineAsync;
      TT.createComputePipelineAsync = function(TT) {
        return OT.call(this, TT).catch((kT => {
          throw lT(TT.label, kT), kT
        }))
      }
    }
  },
  40422: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/bloxd_wasm_models_bg.011f7c7db56d32487826.wasm"
  },
  40416: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/bloxd_wasm_workers_bg.f47afb17c771c525f495.wasm"
  },
  40479: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40481: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  40409: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      f: () => lT
    });
    const lT = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new cT.U(cT(40416))
      }
    };
    const MT = {
      name: "bloxd_wasm_models",
      url: function() {
        return new cT.U(cT(40422))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);