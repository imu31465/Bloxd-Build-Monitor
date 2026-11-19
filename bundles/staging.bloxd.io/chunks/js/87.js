export const id = 87;
export const ids = [87];
export const modules = {
  4585: (DD, CD, cD) => {
    cD.d(CD, {
      $: () => HD,
      A: () => iD,
      Bb: () => nD,
      E: () => tD,
      Eb: () => mD,
      F: () => sD,
      Hb: () => KD,
      I: () => wD,
      Lb: () => TD,
      M: () => ZD,
      Ob: () => VD,
      Q: () => QD,
      Sb: () => jD,
      T: () => yD,
      Wb: () => lD,
      X: () => BD,
      Xb: () => gD,
      Y: () => OD,
      Zb: () => XD,
      _b: () => RD,
      cc: () => pD,
      db: () => UD,
      dc: () => WD,
      e: () => YD,
      eb: () => PD,
      g: () => dD,
      hb: () => xD,
      j: () => SD,
      k: () => ND,
      kb: () => GD,
      l: () => kD,
      lb: () => LD,
      o: () => vD,
      pb: () => zD,
      qb: () => qD,
      r: () => oD,
      rb: () => aD,
      s: () => fD,
      tb: () => JD,
      v: () => bD,
      xb: () => MD,
      y: () => ID
    });
    const ID = 32,
      pD = 33.333333333333336,
      iD = {
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
      fD = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      bD = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      QD = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      wD = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      SD = {
        Look: 0,
        Remesh: 1
      },
      BD = 8,
      yD = 1,
      MD = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      tD = {
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
      ZD = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      oD = {
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
      vD = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      ND = 4,
      gD = 4,
      XD = 65535,
      mD = {
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
      nD = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      OD = 88,
      PD = 0,
      HD = 24,
      UD = 48,
      xD = 80,
      qD = {
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
      JD = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      KD = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      aD = {
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
      VD = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      zD = 65535,
      jD = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      lD = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      LD = 2,
      TD = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      GD = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      RD = {
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
      kD = {
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
      dD = {
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
      YD = 8,
      WD = {
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
      sD = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  39877: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD
    });
    const ID = 1 << 20,
      pD = 1 << 21,
      iD = 1024,
      fD = 2048;

    function bD(DD, CD, cD) {
      const bD = DD + ID,
        QD = CD + iD,
        wD = cD + ID;
      return bD < 0 || bD >= pD || wD < 0 || wD >= pD || QD < 0 || QD >= fD ? -1 : (bD * pD + wD) * fD + QD
    }
  },
  39875: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      g: () => fD,
      k: () => pD,
      m: () => iD,
      o: () => SD,
      p: () => wD,
      s: () => QD,
      v: () => bD
    });
    cD(3260);
    cD(39877);

    function ID(DD) {}

    function pD(DD) {}

    function iD(DD) {}

    function fD(DD) {}

    function bD(DD) {}

    function QD(DD, CD, cD) {}

    function wD(DD) {}

    function SD(DD) {}
  },
  39852: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => GD,
      F: () => YD,
      H: () => DC,
      L: () => kD,
      P: () => RD,
      T: () => ED,
      W: () => sD,
      Z: () => cC,
      _: () => hD,
      c: () => CC,
      cb: () => xD,
      g: () => fC,
      i: () => uD,
      k: () => FD,
      o: () => WD,
      p: () => AD,
      s: () => rD,
      v: () => iC,
      x: () => TD
    });
    var ID = cD(312),
      pD = cD(280),
      iD = cD(288),
      fD = cD(16),
      bD = cD(2727),
      QD = cD(684),
      wD = cD(4314),
      SD = cD(2668),
      BD = cD(3255),
      yD = cD(90),
      MD = cD(309),
      tD = cD(36),
      ZD = cD(298),
      oD = cD(110),
      vD = cD(639),
      ND = cD(116),
      gD = cD(114),
      XD = cD(4585),
      mD = cD(39860),
      nD = cD(1763),
      OD = cD(39866);
    const PD = "bloxd-webgpuOffAfterLoss",
      HD = "context:webgl",
      UD = "probe:threw";

    function xD(DD) {
      let CD;
      try {
        CD = DD.getContext("webgl", {
          powerPreference: ND.d
        })
      } catch {
        CD = null
      }
      if (null === CD) return null;
      let cD = null;
      try {
        const DD = CD.getParameter(CD.MAX_TEXTURE_SIZE);
        cD = "number" === typeof DD && DD > 0 ? DD : null
      } catch {
        cD = null
      }
      try {
        var ID;
        null === (ID = CD.getExtension("WEBGL_lose_context")) || void 0 === ID || ID.loseContext()
      } catch {}
      return cD
    }
    const qD = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      JD = "mali_valhall",
      KD = new Set(["nvidia_pre_turing"]);

    function aD(DD) {
      return function(DD) {
        try {
          return DD()
        } catch {
          return null
        }
      }((() => {
        var CD, cD, ID, fD;
        const bD = null !== (CD = null === (cD = DD.info) || void 0 === cD ? void 0 : cD.vendor) && void 0 !== CD ? CD : "";
        return "windows" === (0, yD.getOperatingSystem)() && "" !== bD && "intel" !== (0, yD.normaliseGpuVendor)(bD) ? null : ((0, yD.seedGpuVendor)(bD), QD = (0, pD.e)(), wD = (0, iD.f)(bD, null !== (ID = null === (fD = DD.info) || void 0 === fD ? void 0 : fD.architecture) && void 0 !== ID ? ID : ""), qD.has(QD) ? "android_arm" === QD && wD === JD ? "webgpu_default" : "webgl_default" : null);
        var QD, wD
      }))
    }

    function VD() {
      var DD;
      return {
        gpu: null !== (DD = navigator.gpu) && void 0 !== DD ? DD : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(DD) {
          let CD, cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mD.e;
          try {
            CD = DD.getContext("webgl")
          } catch {
            CD = null
          }
          if (null === CD) return [HD];
          const ID = [];
          try {
            for (const pD of cD.extensions) null === CD.getExtension(pD) && ID.push(pD);
            for (const [pD, iD] of Object.entries(cD.limits)) {
              const DD = CD[pD],
                cD = "number" === typeof DD ? CD.getParameter(DD) : null;
              ("number" !== typeof cD || cD < iD) && ID.push(`limit:${pD}`)
            }
            const DD = CD.getShaderPrecisionFormat(CD.VERTEX_SHADER, CD.HIGH_FLOAT);
            (null === DD || DD.precision < cD.vertexHighFloatBits) && ID.push("precision:vertex_high_float")
          } catch {
            ID.push(UD)
          }
          try {
            var pD;
            null === (pD = CD.getExtension("WEBGL_lose_context")) || void 0 === pD || pD.loseContext()
          } catch {}
          return ID
        }(document.createElement("canvas")),
        offAfterLoss: DD => zD((() => DD ? (0, ZD.x)() : fD.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: DD => zD((() => (0, oD.e)(DD))),
        intelGen9: DD => zD((() => (0, oD.l)(DD))),
        gpuClassWebGlArm: aD,
        storeGpuClassVerdict: DD => {
          tD.h.setItem(oD.G, DD)
        },
        gpuClassOnWebGl: DD => (0, vD.e)(DD),
        override: () => function() {
          if ((0, bD.o)("render") && "webgl1" === (0, bD.n)("renderer")) return "webgl1";
          const DD = [() => new URLSearchParams(window.location.search).get(SD.d), () => tD.h.getItem(SD.f), () => {
            const DD = localStorage.getItem(PD);
            return null !== DD && localStorage.removeItem(PD), "1" === DD ? "webgl2" : null
          }];
          for (const CD of DD) {
            let DD = null;
            try {
              DD = jD(CD())
            } catch {}
            if (null !== DD) return DD
          }
          return null
        }(),
        claimed: () => jD((0, QD.m)()),
        webGpuSetting: () => {
          const DD = tD.h.getItem(ID.jc);
          return "boolean" === typeof DD ? DD : null
        },
        heldBack: () => vD.h,
        storeHoldbackSpared: DD => {
          tD.h.setItem(oD.C, DD)
        },
        intelGen9OnWebGl: () => vD.j,
        gt: () => zD((() => (0, BD.g)(yD.featureFlags.settings.canUseShaderPacks))),
        windows: () => zD((() => "windows" === (0, yD.getOperatingSystem)()))
      }
    }

    function zD(DD) {
      try {
        return DD()
      } catch {
        return !1
      }
    }

    function jD(DD) {
      return "lite" === DD ? "webgpu" : "webgl2" === DD || "babylon" === DD ? "webgl" : null
    }
    async function lD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VD();
      const CD = await async function(DD) {
        const CD = function(DD) {
            const CD = DD.override(),
              cD = DD.webGpuSetting(),
              ID = null === CD && !0 !== cD && DD.gt(),
              pD = null !== CD || null !== cD || ID ? null : DD.claimed(),
              iD = null !== CD ? "override" : !0 === cD ? "setting" : ID ? "pack" : !1 === cD ? "setting" : null !== pD ? "claim" : "default",
              fD = function(DD) {
                return "override" === DD || "setting" === DD
              }(iD);
            if ("webgl" === CD || "webgl1" === CD || "webgl" === pD || "setting" === iD && !1 === cD) return {
              source: iD,
              asked: fD,
              refused: "not_requested"
            };
            if (!DD.gpu) return {
              source: iD,
              asked: fD,
              refused: "no_webgpu_api"
            };
            const bD = "default" === iD && DD.heldBack();
            if (bD && !DD.windows()) return {
              source: iD,
              asked: fD,
              refused: "webgl_holdback"
            };
            if (!fD && DD.offAfterLoss("pack" === iD)) return {
              source: iD,
              asked: fD,
              refused: bD ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: iD,
              asked: fD,
              heldBack: bD,
              gpu: DD.gpu
            }
          }(DD),
          {
            source: cD
          } = CD,
          ID = !CD.asked,
          pD = "gpu" in CD && CD.heldBack,
          fD = function(DD) {
            return pD && "none" !== DD ? {
              reason: "webgl_holdback",
              adapter: null,
              source: cD
            } : {
              reason: DD,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: cD
            }
          };
        if (!("gpu" in CD)) return fD(CD.refused);
        let bD;
        try {
          bD = await (0, nD.k)((0, gD.h)(CD.gpu), IC, `requestAdapter didn't settle in ${IC/1e3} s`)
        } catch {
          return fD("adapter_error")
        }
        if ("string" === typeof bD) return fD(bD);
        const QD = (0, gD.b)(bD);
        if ((0, gD.c)(bD)) return fD("software_adapter", QD);
        const wD = DD.windows() && function(DD) {
          return KD.has((0, iD.f)(DD.vendor, DD.architecture))
        }(QD);
        if (DD.storeHoldbackSpared(wD), pD && !wD) return fD("webgl_holdback");
        const SD = DD.intelGen9(bD),
          BD = SD ? null : DD.gpuClassWebGlArm(bD);
        if (DD.storeGpuClassVerdict(null !== BD && void 0 !== BD && BD), ID && DD.oldIntelDriver(bD)) return fD("old_intel_driver", QD);
        if ("default" === cD && DD.intelGen9OnWebGl() && SD) return fD("intel_gen9", QD);
        if ("default" === cD && null !== BD && DD.gpuClassOnWebGl(BD)) return fD("gpu_class_webgl", QD);
        return fD("none", QD)
      }(DD);
      if ("none" === CD.reason) return {
        backend: "webgpu",
        ...CD
      };
      if ("webgl1" !== DD.override() && DD.webgl2()) return {
        backend: "webgl",
        ...CD
      };
      const cD = DD.webgl1();
      return 0 === cD.length ? {
        backend: "webgl1",
        ...CD
      } : {
        missing: cD
      }
    }
    let LD = !1;
    async function TD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VD();
      if (null === DD) return null;
      const cD = await lD(CD);
      return LD = !("missing" in cD) && "webgpu" === cD.backend && "claim" === cD.source, "missing" in cD ? cD : {
        ...cD,
        load: DD[cD.backend]
      }
    }
    async function GD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VD().gpu,
        ID = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== DD.backend) return !1;
      const pD = dD(CD, "indirectDraws", "off", "on");
      if (null !== pD) return pD;
      if (null !== DD.adapter && (0, oD.n)(DD.adapter, ID)) return !0;
      if (null === cD) return !1;
      try {
        var iD;
        const DD = await (0, nD.k)(cD.requestAdapter({
          powerPreference: "low-power"
        }), IC, `the low-power requestAdapter didn't settle in ${IC/1e3} s`);
        return (0, oD.n)(null !== (iD = null === DD || void 0 === DD ? void 0 : DD.info) && void 0 !== iD ? iD : {}, ID)
      } catch (fD) {
        return fD instanceof nD.e
      }
    }

    function RD(DD, CD, cD) {
      if ("webgpu" !== DD.backend) return !1;
      const ID = dD(CD, "terrainFetch", "texture", "storage");
      return null !== ID ? ID : null !== DD.adapter && (0, oD.g)(DD.adapter, cD)
    }

    function kD(DD, CD, cD) {
      if ("webgpu" !== DD.backend) return !1;
      const ID = dD(CD, "sceneDepth", "off", "on");
      return null !== ID ? ID : null !== DD.adapter && (0, oD.k)(DD.adapter, cD)
    }

    function dD(DD, CD, cD, ID) {
      const pD = new URLSearchParams(DD).get(CD),
        iD = null !== pD && void 0 !== pD ? pD : (0, QD.f)(CD);
      return iD !== cD && iD !== ID ? null : (LD ||= null === pD, iD === cD)
    }

    function YD(DD, CD) {
      return "webgl" === DD.backend && (0, iD.m)(CD)
    }

    function WD(DD) {
      return null !== DD && "missing" in DD
    }

    function sD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fD.d;
      try {
        const cD = "start_failed" === DD || "pipeline_failed" === DD,
          ID = CD.turnOffWebGpuAfterDeviceLoss(cD ? "visible" : (0, ZD.j)((0, MD.g)()));
        return !LD || ID && !CD.isWebGpuOffAfterLoss() || (0, QD.t)("webgpuLoss"), CD.isWebGpuOffAfterLoss() && "webgpu" === jD(tD.h.getItem(SD.f)) && tD.h.removeItem(SD.f), (0, bD.o)("webgpuloss") && (0, wD.b)((CD => {
          CD.noteWebGpuLoss("wasm", ID ? DD : `${DD}, which storage didn't keep`, null)
        })), ID
      } catch {
        return !1
      }
    }

    function ED(DD) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !hD()) ? sD(DD) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const eD = "framePacing";

    function uD(DD) {
      const CD = new URLSearchParams(DD).get(eD);
      return null !== CD && /^\d{1,9}$/.test(CD) ? Number(CD) : void 0
    }

    function hD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === jD(new URLSearchParams(DD).get(SD.d))
      } catch {
        return !1
      }
    }

    function rD(DD) {
      return !!AD(DD) || DD instanceof Error && !(DD instanceof WebAssembly.RuntimeError) && DD.message.startsWith(`${XD.g.RenderSurfaceUnusable}:`)
    }

    function AD(DD) {
      const {
        name: CD,
        message: cD
      } = null !== DD && void 0 !== DD ? DD : {};
      return "InvalidStateError" === CD && "string" === typeof cD && cD.startsWith("GPUDevice.")
    }

    function FD(DD) {
      const CD = DD;
      return "function" === typeof CD.bcD && "function" === typeof CD.QcD ? CD : null
    }

    function DC(DD) {
      return "function" === typeof DD.ocD ? DD : null
    }
    const CC = "openRenderer";

    function cC(DD) {
      const CD = null === DD || void 0 === DD ? void 0 : DD.dpD();
      return void 0 === CD ? void 0 : new Error(CD)
    }
    const IC = 5e3,
      pC = 15e3;

    function iC(DD, CD, cD, ID, pD, iD) {
      return (0, nD.k)(function(DD, CD, cD, ID, pD, iD) {
        return (0, OD.e)(DD, CD, (() => DD.ocD(cD, ID, pD, iD.indirectHangs, iD.storagePullBreaks, iD.splitPassBreaks, iD.framesAhead, iD.instancedTerrainSlow)))
      }(DD, CD, cD, ID, pD, iD), pC, `${XD.g.RenderSurfaceUnusable}: the renderer didn't open in ${pC/1e3} s`, bC)
    }
    async function fC(DD, CD, cD, ID, pD, iD) {
      if ("function" !== typeof DD.aiD) throw new Error("this core has no set_renderer");
      const fD = await iC(CD, CC, cD, pD, ID, iD);
      try {
        DD.aiD(fD)
      } catch (bD) {
        throw bC(fD), bD
      }
    }

    function bC(DD) {
      try {
        DD.free()
      } catch {}
    }
  },
  39860: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    const ID = {
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
  39883: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => QD,
      g: () => bD
    });
    var ID = cD(706),
      pD = cD(710);

    function iD(DD, CD) {
      const cD = null === CD ? void 0 : ID.d.get(CD);
      return "all" === cD || "webgl" === cD && "webgpu" !== DD.backend ? CD : null
    }

    function fD(DD) {
      return "software_adapter" === DD.reason ? null : DD.adapter
    }

    function bD(DD, CD) {
      const cD = (0, ID.p)();
      return null === cD ? null : (0, ID.f)(fD(DD), cD, CD ? ID.k : ID.g)
    }

    function QD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pD.m;
      const ID = iD(DD, CD);
      return null !== ID && "webgl" === DD.backend && cD(ID) ? null : ID
    }
  },
  39866: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      e: () => SD,
      g: () => fD,
      j: () => QD
    });
    var ID = cD(39872);
    class pD extends Error {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${DD}: the module trapped${cD?" in an earlier call":""}: ${String(CD)}`, {
          cause: CD
        }), this.site = DD, this.trap = CD, this.earlier = cD, this.name = "ModuleTrapError", CD instanceof Error && void 0 !== CD.stack && (this.stack = `${this.name}: ${this.message}\n${CD.stack}`)
      }
    }
    const iD = new WeakMap;

    function fD(DD) {
      return iD.has(DD)
    }

    function bD(DD, CD) {
      iD.has(DD) || iD.set(DD, CD)
    }

    function QD(DD, CD) {
      return !!(0, ID.e)(CD) && (bD(DD, CD), !0)
    }
    const wD = [
      ["error", DD => DD.error],
      ["unhandledrejection", DD => DD.reason]
    ];

    function SD(DD, CD, cD) {
      let fD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return iD.has(DD) ? Promise.reject(new pD(CD, iD.get(DD), !0)) : new Promise(((iD, QD) => {
        const SD = cD => {
            bD(DD, cD), MD(), QD(new pD(CD, cD))
          },
          BD = DD => {
            DD instanceof WebAssembly.RuntimeError ? SD(DD) : (MD(), QD(DD))
          },
          yD = wD.map((DD => {
            let [CD, cD] = DD;
            return [CD, DD => {
              const CD = cD(DD);
              (0, ID.e)(CD) && SD(CD)
            }]
          })),
          MD = () => {
            for (const [DD, CD] of yD) null === fD || void 0 === fD || fD.removeEventListener(DD, CD)
          };
        for (const [DD, CD] of yD) null === fD || void 0 === fD || fD.addEventListener(DD, CD);
        let tD;
        try {
          tD = cD()
        } catch (ZD) {
          return void BD(ZD)
        }
        tD.then((DD => {
          MD(), iD(DD)
        }), BD)
      }))
    }
  },
  39890: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => RD,
      F: () => GD,
      G: () => VD,
      I: () => PD,
      M: () => KD,
      N: () => aD,
      R: () => jD,
      S: () => JD,
      e: () => OD,
      g: () => XD,
      j: () => lD,
      k: () => zD,
      o: () => gD,
      p: () => nD,
      s: () => vD,
      u: () => UD,
      y: () => qD
    });
    var ID = cD(208),
      pD = cD(288),
      iD = cD(16),
      fD = cD(309),
      bD = cD(36),
      QD = cD(39852),
      wD = cD(39883),
      SD = cD(39896),
      BD = (cD(39875), cD(39900)),
      yD = cD(39908);
    const MD = "wasmJoinBuild";
    let tD = null,
      ZD = null,
      oD = null;

    function vD(DD) {
      oD = DD
    }
    let ND = !1;

    function gD() {
      ND = !0
    }

    function XD() {
      return ND
    }
    let mD = !1;

    function nD() {
      mD = !0
    }

    function OD() {
      return mD
    }

    function PD() {
      return oD
    }
    let HD = null;

    function UD(DD) {
      HD = DD, (0, fD.c)(DD)
    }
    const xD = "wasmClientRenderLost";

    function qD() {
      bD.j.setItem(xD, !0)
    }

    function JD() {
      return !0 === bD.j.getItem(xD)
    }

    function KD() {
      return HD
    }

    function aD() {
      return null === tD && (bD.h.removeItem("wasmLastPick"), bD.h.removeItem("wasmGuessVerdict"), (0, fD.j)(), tD = (0, QD.x)(SD.d).then((DD => (null === DD || (0, QD.o)(DD) || (ZD = BD.d[DD.backend], iD.d.followGameGpu("webgpu" === DD.backend ? DD.adapter : null), "webgpu" === DD.backend && (0, yD.h)()), DD)))), tD
    }

    function VD() {
      return ZD
    }

    function zD(DD) {
      return DD ? DD.load() : Promise.resolve().then((function() {
        var DD = new Error("Cannot find module '@bloxd/wasm/client'");
        throw DD.code = "MODULE_NOT_FOUND", DD
      })).then((DD => DD.bloxdWasmClient))
    }

    function jD(DD) {
      bD.h.setItem(MD, DD)
    }
    async function lD() {
      if (null === SD.d) return zD(null);
      const DD = bD.h.getItem(MD);
      let CD = "none" === DD ? null : "webgl";
      return null !== DD && "none" !== DD && ("string" === typeof DD && void 0 !== (0, ID.c)(SD.d, DD) ? CD = DD : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(DD)}, is none of this client's: guessing WebGL2's`)), null === CD ? null : SD.d[CD]()
    }
    let LD = null,
      TD = null;

    function GD() {
      return LD ??= aD().then((async DD => {
        var CD;
        const cD = null !== DD && !(0, QD.o)(DD),
          ID = {
            indirectHangs: cD && await (0, QD.B)(DD, window.location.search),
            storagePullBreaks: cD && (0, QD.P)(DD, window.location.search),
            splitPassBreaks: cD && (0, QD.L)(DD, window.location.search),
            framesAhead: (0, QD.i)(window.location.search),
            instancedTerrainSlow: cD && (0, QD.F)(DD, null !== (CD = (0, wD.g)(DD, !1)) && void 0 !== CD ? CD : (0, pD.e)())
          };
        return TD = ID.indirectHangs, ID
      })), LD
    }

    function RD() {
      return TD
    }
  },
  39900: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    const ID = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39896: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      d: () => ID
    });
    const ID = {
        webgpu: async () => (await cD.e(8).then((() => cD(42391)))).bloxdWasmWebgpu,
        webgl: async () => (await cD.e(6).then((() => cD(42405)))).bloxdWasmWebgl,
        webgl1: async () => (await cD.e(7).then((() => cD(42417)))).bloxdWasmWebgl1
      },
      pD = async () => (await cD.e(5).then((() => cD(42427)))).compileAnimationPackInWasm
  },
  39913: (DD, CD, cD) => {
    function ID() {
      return cD(39921)
    }

    function pD() {
      return cD(39929)
    }

    function iD(DD) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(DD)
    }
    cD.d(CD, {
      b: () => iD,
      d: () => ID,
      e: () => pD
    })
  },
  39872: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      h: () => fD
    });
    const ID = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function pD(DD) {
      if (DD instanceof WebAssembly.RuntimeError) return !0;
      const CD = DD instanceof Error ? DD.stack : void 0;
      return "string" === typeof CD && ID.test(CD)
    }
    const iD = 500;

    function fD(DD) {
      let CD = "[object Object]";
      try {
        CD = String(DD)
      } catch {}
      if ("[object Object]" !== CD) return CD;
      try {
        var cD, ID;
        return null !== (cD = null === (ID = JSON.stringify(DD)) || void 0 === ID ? void 0 : ID.slice(0, iD)) && void 0 !== cD ? cD : CD
      } catch {
        return CD
      }
    }
  },
  39908: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => bD,
      h: () => QD
    });
    var ID = cD(90);
    const pD = "webgpuPipeline";

    function iD(DD) {
      return DD.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let fD = null;

    function bD() {
      if (null === fD) try {
        DD = (0, ID.getBrowserName)(), CD = (0, ID.getBrowserVersion)(), cD = (0, ID.getOperatingSystem)(), pD = (0, ID.getOperatingSystemVersion)(), fD = `${DD.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===CD?"unknown":iD(CD)}-${cD}${void 0===pD?"":`_${iD(pD)}`}`
      } catch (bD) {
        console.warn("The user agent couldn't be read for its browser code", bD), fD = "unknown"
      }
      var DD, CD, cD, pD;
      return fD
    }

    function QD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const CD = `WGPU-${bD()}`,
        ID = (DD, ID) => {
          const {
            reason: iD,
            message: fD
          } = ID, bD = {
            pipeline: null !== DD && void 0 !== DD ? DD : "",
            reason: String(iD),
            browserMessage: String(fD)
          };
          Promise.all([cD.e(262), cD.e(86)]).then((() => cD(40032))).then((DD => {
            let {
              reportCrash: cD
            } = DD;
            cD({
              kind: "coreError",
              code: CD,
              site: pD,
              fatal: !1,
              message: `${bD.pipeline} ${bD.reason}: ${bD.browserMessage}`,
              details: bD,
              error: ID
            })
          })).catch((DD => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", DD)
          }))
        },
        iD = DD.createRenderPipelineAsync;
      DD.createRenderPipelineAsync = function(DD) {
        return iD.call(this, DD).catch((CD => {
          throw ID(DD.label, CD), CD
        }))
      };
      const fD = DD.createComputePipelineAsync;
      DD.createComputePipelineAsync = function(DD) {
        return fD.call(this, DD).catch((CD => {
          throw ID(DD.label, CD), CD
        }))
      }
    }
  },
  39846: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/bloxd_wasm_models_bg.9870a613252fde5d8186.wasm"
  },
  39839: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/bloxd_wasm_workers_bg.150cf40a95a9ef218c83.wasm"
  },
  39921: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39929: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  39834: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD,
      e: () => ID
    });
    const ID = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new cD.U(cD(39839))
      }
    };
    const pD = {
      name: "bloxd_wasm_models",
      url: function() {
        return new cD.U(cD(39846))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);