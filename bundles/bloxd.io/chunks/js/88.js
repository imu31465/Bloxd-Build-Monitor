export const id = 88;
export const ids = [88];
export const modules = {
  4638: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      Ab: () => zQ,
      B: () => LQ,
      Eb: () => IQ,
      F: () => oQ,
      I: () => tQ,
      Ib: () => TQ,
      L: () => gQ,
      Lb: () => UQ,
      Nb: () => AQ,
      O: () => uQ,
      Q: () => HQ,
      Qb: () => iQ,
      U: () => mQ,
      Ub: () => SQ,
      Vb: () => NQ,
      Y: () => eQ,
      Zb: () => XQ,
      ab: () => vQ,
      bc: () => KQ,
      cc: () => lQ,
      db: () => xQ,
      dc: () => jQ,
      e: () => EQ,
      eb: () => YQ,
      fc: () => cQ,
      h: () => JQ,
      hb: () => WQ,
      i: () => bQ,
      jc: () => CQ,
      l: () => pQ,
      lb: () => OQ,
      mc: () => VQ,
      n: () => hQ,
      nc: () => qQ,
      ob: () => sQ,
      pb: () => RQ,
      qb: () => rQ,
      r: () => GQ,
      rc: () => nQ,
      ub: () => fQ,
      v: () => MQ,
      wb: () => aQ,
      x: () => DQ,
      z: () => kQ
    });
    const LQ = 32,
      qQ = 33.333333333333336,
      oQ = {
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
      DQ = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      kQ = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      vQ = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      mQ = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      uQ = 7,
      HQ = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      bQ = {
        Look: 0,
        Remesh: 1
      },
      YQ = 8,
      xQ = 1,
      AQ = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      tQ = {
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
      eQ = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      MQ = {
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
      GQ = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      pQ = 4,
      cQ = 4,
      CQ = 65535,
      SQ = {
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
      iQ = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      WQ = 88,
      RQ = 0,
      OQ = 24,
      sQ = 48,
      rQ = 80,
      IQ = {
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
      UQ = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      NQ = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      TQ = {
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
      KQ = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      zQ = 65535,
      lQ = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      jQ = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      aQ = 2,
      XQ = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      fQ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      VQ = {
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
      hQ = {
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
      JQ = {
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
      EQ = 8,
      nQ = {
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
      gQ = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  40232: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ
    });
    const LQ = 1 << 20,
      qQ = 1 << 21,
      oQ = 1024,
      DQ = 2048;

    function kQ(QQ, FQ, wQ) {
      const kQ = QQ + LQ,
        vQ = FQ + oQ,
        mQ = wQ + LQ;
      return kQ < 0 || kQ >= qQ || mQ < 0 || mQ >= qQ || vQ < 0 || vQ >= DQ ? -1 : (kQ * qQ + mQ) * DQ + vQ
    }
  },
  40229: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ,
      e: () => DQ,
      f: () => qQ,
      j: () => oQ,
      l: () => uQ,
      n: () => mQ,
      o: () => vQ,
      q: () => kQ
    });
    wQ(3325);
    wQ(40232);

    function LQ(QQ) {}

    function qQ(QQ) {}

    function oQ(QQ) {}

    function DQ(QQ) {}

    function kQ(QQ) {}

    function vQ(QQ, FQ, wQ) {}

    function mQ(QQ) {}

    function uQ(QQ) {}
  },
  40222: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      D: () => aQ,
      H: () => hQ,
      J: () => QF,
      M: () => fQ,
      N: () => XQ,
      Q: () => nQ,
      T: () => EQ,
      U: () => wF,
      Y: () => ZQ,
      ab: () => OQ,
      c: () => FF,
      d: () => DF,
      h: () => PQ,
      l: () => dQ,
      p: () => JQ,
      t: () => BQ,
      v: () => yQ,
      w: () => oF,
      z: () => jQ
    });
    var LQ = wQ(307),
      qQ = wQ(268),
      oQ = wQ(273),
      DQ = wQ(17),
      kQ = wQ(2753),
      vQ = wQ(656),
      mQ = wQ(4358),
      uQ = wQ(2697),
      HQ = wQ(3318),
      bQ = wQ(96),
      YQ = wQ(299),
      xQ = wQ(27),
      AQ = wQ(282),
      tQ = wQ(118),
      eQ = wQ(629),
      MQ = wQ(126),
      GQ = wQ(124),
      pQ = wQ(4638),
      cQ = wQ(40224),
      CQ = wQ(1772),
      SQ = wQ(40226);
    const iQ = "bloxd-webgpuOffAfterLoss",
      WQ = "context:webgl",
      RQ = "probe:threw";

    function OQ(QQ) {
      let FQ;
      try {
        FQ = QQ.getContext("webgl", {
          powerPreference: MQ.c
        })
      } catch {
        FQ = null
      }
      if (null === FQ) return null;
      let wQ = null;
      try {
        const QQ = FQ.getParameter(FQ.MAX_TEXTURE_SIZE);
        wQ = "number" === typeof QQ && QQ > 0 ? QQ : null
      } catch {
        wQ = null
      }
      try {
        var LQ;
        null === (LQ = FQ.getExtension("WEBGL_lose_context")) || void 0 === LQ || LQ.loseContext()
      } catch {}
      return wQ
    }
    const sQ = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      rQ = "mali_valhall",
      IQ = new Set(["nvidia_pre_turing"]);

    function UQ(QQ) {
      return function(QQ) {
        try {
          return QQ()
        } catch {
          return null
        }
      }((() => {
        var FQ, wQ, LQ, DQ;
        const kQ = null !== (FQ = null === (wQ = QQ.info) || void 0 === wQ ? void 0 : wQ.vendor) && void 0 !== FQ ? FQ : "";
        return "windows" === (0, bQ.getOperatingSystem)() && "" !== kQ && "intel" !== (0, bQ.normaliseGpuVendor)(kQ) ? null : ((0, bQ.seedGpuVendor)(kQ), vQ = (0, qQ.k)(), mQ = (0, oQ.f)(kQ, null !== (LQ = null === (DQ = QQ.info) || void 0 === DQ ? void 0 : DQ.architecture) && void 0 !== LQ ? LQ : ""), sQ.has(vQ) ? "android_arm" === vQ && mQ === rQ ? "webgpu_default" : "webgl_default" : null);
        var vQ, mQ
      }))
    }

    function NQ() {
      var QQ;
      return {
        gpu: null !== (QQ = navigator.gpu) && void 0 !== QQ ? QQ : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(QQ) {
          let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cQ.b;
          try {
            FQ = QQ.getContext("webgl")
          } catch {
            FQ = null
          }
          if (null === FQ) return [WQ];
          const LQ = [];
          try {
            for (const qQ of wQ.extensions) null === FQ.getExtension(qQ) && LQ.push(qQ);
            for (const [qQ, oQ] of Object.entries(wQ.limits)) {
              const QQ = FQ[qQ],
                wQ = "number" === typeof QQ ? FQ.getParameter(QQ) : null;
              ("number" !== typeof wQ || wQ < oQ) && LQ.push(`limit:${qQ}`)
            }
            const QQ = FQ.getShaderPrecisionFormat(FQ.VERTEX_SHADER, FQ.HIGH_FLOAT);
            (null === QQ || QQ.precision < wQ.vertexHighFloatBits) && LQ.push("precision:vertex_high_float")
          } catch {
            LQ.push(RQ)
          }
          try {
            var qQ;
            null === (qQ = FQ.getExtension("WEBGL_lose_context")) || void 0 === qQ || qQ.loseContext()
          } catch {}
          return LQ
        }(document.createElement("canvas")),
        offAfterLoss: QQ => TQ((() => QQ ? (0, AQ.v)() : DQ.c.isWebGpuOffAfterLoss())),
        oldIntelDriver: QQ => TQ((() => (0, tQ.g)(QQ))),
        intelGen9: QQ => TQ((() => (0, tQ.n)(QQ))),
        gpuClassWebGlArm: UQ,
        storeGpuClassVerdict: QQ => {
          xQ.i.setItem(tQ.F, QQ)
        },
        gpuClassOnWebGl: QQ => (0, eQ.c)(QQ),
        override: () => function() {
          if ((0, kQ.o)("render") && "webgl1" === (0, kQ.n)("renderer")) return "webgl1";
          const QQ = [() => new URLSearchParams(window.location.search).get(uQ.b), () => xQ.i.getItem(uQ.e), () => {
            const QQ = localStorage.getItem(iQ);
            return null !== QQ && localStorage.removeItem(iQ), "1" === QQ ? "webgl2" : null
          }];
          for (const FQ of QQ) {
            let QQ = null;
            try {
              QQ = KQ(FQ())
            } catch {}
            if (null !== QQ) return QQ
          }
          return null
        }(),
        claimed: () => KQ((0, vQ.j)()),
        webGpuSetting: () => {
          const QQ = xQ.i.getItem(LQ.lc);
          return "boolean" === typeof QQ ? QQ : null
        },
        heldBack: () => eQ.g,
        storeHoldbackSpared: QQ => {
          xQ.i.setItem(tQ.D, QQ)
        },
        intelGen9OnWebGl: () => eQ.j,
        JY: () => TQ((() => (0, HQ.f)(bQ.featureFlags.settings.canUseShaderPacks))),
        windows: () => TQ((() => "windows" === (0, bQ.getOperatingSystem)()))
      }
    }

    function TQ(QQ) {
      try {
        return QQ()
      } catch {
        return !1
      }
    }

    function KQ(QQ) {
      return "lite" === QQ ? "webgpu" : "webgl2" === QQ || "babylon" === QQ ? "webgl" : null
    }
    async function zQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NQ();
      const FQ = await async function(QQ) {
        const FQ = function(QQ) {
            const FQ = QQ.override(),
              wQ = QQ.webGpuSetting(),
              LQ = null === FQ && !0 !== wQ && QQ.JY(),
              qQ = null !== FQ || null !== wQ || LQ ? null : QQ.claimed(),
              oQ = null !== FQ ? "override" : !0 === wQ ? "setting" : LQ ? "pack" : !1 === wQ ? "setting" : null !== qQ ? "claim" : "default",
              DQ = function(QQ) {
                return "override" === QQ || "setting" === QQ
              }(oQ);
            if ("webgl" === FQ || "webgl1" === FQ || "webgl" === qQ || "setting" === oQ && !1 === wQ) return {
              source: oQ,
              asked: DQ,
              refused: "not_requested"
            };
            if (!QQ.gpu) return {
              source: oQ,
              asked: DQ,
              refused: "no_webgpu_api"
            };
            const kQ = "default" === oQ && QQ.heldBack();
            if (kQ && !QQ.windows()) return {
              source: oQ,
              asked: DQ,
              refused: "webgl_holdback"
            };
            if (!DQ && QQ.offAfterLoss("pack" === oQ)) return {
              source: oQ,
              asked: DQ,
              refused: kQ ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: oQ,
              asked: DQ,
              heldBack: kQ,
              gpu: QQ.gpu
            }
          }(QQ),
          {
            source: wQ
          } = FQ,
          LQ = !FQ.asked,
          qQ = "gpu" in FQ && FQ.heldBack,
          DQ = function(QQ) {
            return qQ && "none" !== QQ ? {
              reason: "webgl_holdback",
              adapter: null,
              source: wQ
            } : {
              reason: QQ,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: wQ
            }
          };
        if (!("gpu" in FQ)) return DQ(FQ.refused);
        let kQ;
        try {
          kQ = await (0, CQ.l)((0, GQ.l)(FQ.gpu), LF, `requestAdapter didn't settle in ${LF/1e3} s`)
        } catch {
          return DQ("adapter_error")
        }
        if ("string" === typeof kQ) return DQ(kQ);
        const vQ = (0, GQ.d)(kQ);
        if ((0, GQ.g)(kQ)) return DQ("software_adapter", vQ);
        const mQ = QQ.windows() && function(QQ) {
          return IQ.has((0, oQ.f)(QQ.vendor, QQ.architecture))
        }(vQ);
        if (QQ.storeHoldbackSpared(mQ), qQ && !mQ) return DQ("webgl_holdback");
        const uQ = QQ.intelGen9(kQ),
          HQ = uQ ? null : QQ.gpuClassWebGlArm(kQ);
        if (QQ.storeGpuClassVerdict(null !== HQ && void 0 !== HQ && HQ), LQ && QQ.oldIntelDriver(kQ)) return DQ("old_intel_driver", vQ);
        if ("default" === wQ && QQ.intelGen9OnWebGl() && uQ) return DQ("intel_gen9", vQ);
        if ("default" === wQ && null !== HQ && QQ.gpuClassOnWebGl(HQ)) return DQ("gpu_class_webgl", vQ);
        return DQ("none", vQ)
      }(QQ);
      if ("none" === FQ.reason) return {
        backend: "webgpu",
        ...FQ
      };
      if ("webgl1" !== QQ.override() && QQ.webgl2()) return {
        backend: "webgl",
        ...FQ
      };
      const wQ = QQ.webgl1();
      return 0 === wQ.length ? {
        backend: "webgl1",
        ...FQ
      } : {
        missing: wQ
      }
    }
    let lQ = !1;
    async function jQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NQ();
      if (null === QQ) return null;
      const wQ = await zQ(FQ);
      return lQ = !("missing" in wQ) && "webgpu" === wQ.backend && "claim" === wQ.source, "missing" in wQ ? wQ : {
        ...wQ,
        load: QQ[wQ.backend]
      }
    }
    async function aQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NQ().gpu,
        LQ = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== QQ.backend) return !1;
      const qQ = VQ(FQ, "indirectDraws", "off", "on");
      if (null !== qQ) return qQ;
      if (null !== QQ.adapter && (0, tQ.q)(QQ.adapter, LQ)) return !0;
      if (null === wQ) return !1;
      try {
        var oQ;
        const QQ = await (0, CQ.l)(wQ.requestAdapter({
          powerPreference: "low-power"
        }).then((async QQ => (null !== QQ && await (0, GQ.e)(QQ), QQ))), LF, `the low-power requestAdapter didn't settle in ${LF/1e3} s`);
        return (0, tQ.q)(null !== (oQ = null === QQ || void 0 === QQ ? void 0 : QQ.info) && void 0 !== oQ ? oQ : {}, LQ)
      } catch (DQ) {
        return DQ instanceof CQ.g
      }
    }

    function XQ(QQ, FQ, wQ) {
      if ("webgpu" !== QQ.backend) return !1;
      const LQ = VQ(FQ, "terrainFetch", "texture", "storage");
      return null !== LQ ? LQ : null !== QQ.adapter && (0, tQ.k)(QQ.adapter, wQ)
    }

    function fQ(QQ, FQ, wQ) {
      if ("webgpu" !== QQ.backend) return !1;
      const LQ = VQ(FQ, "sceneDepth", "off", "on");
      return null !== LQ ? LQ : null !== QQ.adapter && (0, tQ.l)(QQ.adapter, wQ)
    }

    function VQ(QQ, FQ, wQ, LQ) {
      const qQ = new URLSearchParams(QQ).get(FQ),
        oQ = null !== qQ && void 0 !== qQ ? qQ : (0, vQ.d)(FQ);
      return oQ !== wQ && oQ !== LQ ? null : (lQ ||= null === qQ, oQ === wQ)
    }

    function hQ(QQ, FQ) {
      return "webgl" === QQ.backend && (0, oQ.q)(FQ)
    }

    function JQ(QQ) {
      return null !== QQ && "missing" in QQ
    }

    function EQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DQ.c;
      try {
        const wQ = "start_failed" === QQ || "pipeline_failed" === QQ,
          LQ = FQ.turnOffWebGpuAfterDeviceLoss(wQ ? "visible" : (0, AQ.j)((0, YQ.g)()));
        return !lQ || LQ && !FQ.isWebGpuOffAfterLoss() || (0, vQ.s)("webgpuLoss"), FQ.isWebGpuOffAfterLoss() && "webgpu" === KQ(xQ.i.getItem(uQ.e)) && xQ.i.removeItem(uQ.e), (0, kQ.o)("webgpuloss") && (0, mQ.b)((FQ => {
          FQ.noteWebGpuLoss("wasm", LQ ? QQ : `${QQ}, which storage didn't keep`, null)
        })), LQ
      } catch {
        return !1
      }
    }

    function nQ(QQ) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !ZQ()) ? EQ(QQ) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const gQ = "framePacing";

    function PQ(QQ) {
      const FQ = new URLSearchParams(QQ).get(gQ);
      return null !== FQ && /^\d{1,9}$/.test(FQ) ? Number(FQ) : void 0
    }

    function ZQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === KQ(new URLSearchParams(QQ).get(uQ.b))
      } catch {
        return !1
      }
    }

    function yQ(QQ) {
      return !!BQ(QQ) || QQ instanceof Error && !(QQ instanceof WebAssembly.RuntimeError) && QQ.message.startsWith(`${pQ.h.RenderSurfaceUnusable}:`)
    }

    function BQ(QQ) {
      const {
        name: FQ,
        message: wQ
      } = null !== QQ && void 0 !== QQ ? QQ : {};
      return "InvalidStateError" === FQ && "string" === typeof wQ && wQ.startsWith("GPUDevice.")
    }

    function dQ(QQ) {
      const FQ = QQ;
      return "function" === typeof FQ.bLQ && "function" === typeof FQ.YLQ ? FQ : null
    }

    function QF(QQ) {
      return "function" === typeof QQ.CLQ ? QQ : null
    }
    const FF = "openRenderer";

    function wF(QQ) {
      const FQ = null === QQ || void 0 === QQ ? void 0 : QQ.KoQ();
      return void 0 === FQ ? void 0 : new Error(FQ)
    }
    const LF = 5e3,
      qF = 15e3;

    function oF(QQ, FQ, wQ, LQ, qQ, oQ) {
      return (0, CQ.l)(function(QQ, FQ, wQ, LQ, qQ, oQ) {
        return (0, SQ.f)(QQ, FQ, (() => QQ.CLQ(wQ, LQ, qQ, oQ.indirectHangs, oQ.storagePullBreaks, oQ.splitPassBreaks, oQ.framesAhead, oQ.instancedTerrainSlow)))
      }(QQ, FQ, wQ, LQ, qQ, oQ), qF, `${pQ.h.RenderSurfaceUnusable}: the renderer didn't open in ${qF/1e3} s`, kF)
    }
    async function DF(QQ, FQ, wQ, LQ, qQ, oQ) {
      if ("function" !== typeof QQ.SDQ) throw new Error("this core has no set_renderer");
      const DQ = await oF(FQ, FF, wQ, qQ, LQ, oQ);
      try {
        QQ.SDQ(DQ)
      } catch (kQ) {
        throw kF(DQ), kQ
      }
    }

    function kF(QQ) {
      try {
        QQ.free()
      } catch {}
    }
  },
  40224: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    const LQ = {
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
  40239: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => vQ,
      d: () => kQ
    });
    var LQ = wQ(671),
      qQ = wQ(676);

    function oQ(QQ, FQ) {
      const wQ = null === FQ ? void 0 : LQ.c.get(FQ);
      return "all" === wQ || "webgl" === wQ && "webgpu" !== QQ.backend ? FQ : null
    }

    function DQ(QQ) {
      return "software_adapter" === QQ.reason ? null : QQ.adapter
    }

    function kQ(QQ, FQ) {
      const wQ = (0, LQ.n)();
      return null === wQ ? null : (0, LQ.d)(DQ(QQ), wQ, FQ ? LQ.i : LQ.h)
    }

    function vQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.j;
      const LQ = oQ(QQ, FQ);
      return null !== LQ && "webgl" === QQ.backend && wQ(LQ) ? null : LQ
    }
  },
  40226: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      f: () => uQ,
      g: () => DQ,
      j: () => vQ
    });
    var LQ = wQ(35943);
    class qQ extends Error {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${QQ}: the module trapped${wQ?" in an earlier call":""}: ${String(FQ)}`, {
          cause: FQ
        }), this.site = QQ, this.trap = FQ, this.earlier = wQ, this.name = "ModuleTrapError", FQ instanceof Error && void 0 !== FQ.stack && (this.stack = `${this.name}: ${this.message}\n${FQ.stack}`)
      }
    }
    const oQ = new WeakMap;

    function DQ(QQ) {
      return oQ.has(QQ)
    }

    function kQ(QQ, FQ) {
      oQ.has(QQ) || oQ.set(QQ, FQ)
    }

    function vQ(QQ, FQ) {
      return !!(0, LQ.h)(FQ) && (kQ(QQ, FQ), !0)
    }
    const mQ = [
      ["error", QQ => QQ.error],
      ["unhandledrejection", QQ => QQ.reason]
    ];

    function uQ(QQ, FQ, wQ) {
      let DQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return oQ.has(QQ) ? Promise.reject(new qQ(FQ, oQ.get(QQ), !0)) : new Promise(((oQ, vQ) => {
        const uQ = wQ => {
            kQ(QQ, wQ), YQ(), vQ(new qQ(FQ, wQ))
          },
          HQ = QQ => {
            QQ instanceof WebAssembly.RuntimeError ? uQ(QQ) : (YQ(), vQ(QQ))
          },
          bQ = mQ.map((QQ => {
            let [FQ, wQ] = QQ;
            return [FQ, QQ => {
              const FQ = wQ(QQ);
              (0, LQ.h)(FQ) && uQ(FQ)
            }]
          })),
          YQ = () => {
            for (const [QQ, FQ] of bQ) null === DQ || void 0 === DQ || DQ.removeEventListener(QQ, FQ)
          };
        for (const [QQ, FQ] of bQ) null === DQ || void 0 === DQ || DQ.addEventListener(QQ, FQ);
        let xQ;
        try {
          xQ = wQ()
        } catch (AQ) {
          return void HQ(AQ)
        }
        xQ.then((QQ => {
          YQ(), oQ(QQ)
        }), HQ)
      }))
    }
  },
  40242: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => aQ,
      D: () => NQ,
      G: () => iQ,
      J: () => IQ,
      M: () => UQ,
      O: () => KQ,
      R: () => rQ,
      c: () => SQ,
      d: () => pQ,
      h: () => zQ,
      k: () => TQ,
      n: () => GQ,
      p: () => CQ,
      q: () => eQ,
      s: () => RQ,
      w: () => sQ,
      z: () => XQ
    });
    var LQ = wQ(217),
      qQ = wQ(273),
      oQ = wQ(17),
      DQ = wQ(299),
      kQ = wQ(27),
      vQ = wQ(40222),
      mQ = wQ(40239),
      uQ = wQ(40250),
      HQ = (wQ(40229), wQ(40254)),
      bQ = wQ(40259);
    const YQ = "wasmJoinBuild";
    let xQ = null,
      AQ = null,
      tQ = null;

    function eQ(QQ) {
      tQ = QQ
    }
    let MQ = !1;

    function GQ() {
      MQ = !0
    }

    function pQ() {
      return MQ
    }
    let cQ = !1;

    function CQ() {
      cQ = !0
    }

    function SQ() {
      return cQ
    }

    function iQ() {
      return tQ
    }
    let WQ = null;

    function RQ(QQ) {
      WQ = QQ, (0, DQ.b)(QQ)
    }
    const OQ = "wasmClientRenderLost";

    function sQ() {
      kQ.m.setItem(OQ, !0)
    }

    function rQ() {
      return !0 === kQ.m.getItem(OQ)
    }

    function IQ() {
      return WQ
    }

    function UQ() {
      return null === xQ && (kQ.i.removeItem("wasmLastPick"), kQ.i.removeItem("wasmGuessVerdict"), (0, DQ.h)(), xQ = (0, vQ.z)(uQ.e).then((QQ => (null === QQ || (0, vQ.p)(QQ) || (AQ = HQ.b[QQ.backend], oQ.c.followGameGpu("webgpu" === QQ.backend ? QQ.adapter : null), "webgpu" === QQ.backend && (0, bQ.f)()), QQ)))), xQ
    }

    function NQ() {
      return AQ
    }

    function TQ(QQ) {
      return QQ ? QQ.load() : Promise.resolve().then((function() {
        var QQ = new Error("Cannot find module '@bloxd/wasm/client'");
        throw QQ.code = "MODULE_NOT_FOUND", QQ
      })).then((QQ => QQ.bloxdWasmClient))
    }

    function KQ(QQ) {
      kQ.i.setItem(YQ, QQ)
    }
    async function zQ() {
      if (null === uQ.e) return TQ(null);
      const QQ = kQ.i.getItem(YQ);
      let FQ = "none" === QQ ? null : "webgl";
      return null !== QQ && "none" !== QQ && ("string" === typeof QQ && void 0 !== (0, LQ.b)(uQ.e, QQ) ? FQ = QQ : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(QQ)}, is none of this client's: guessing WebGL2's`)), null === FQ ? null : uQ.e[FQ]()
    }
    let lQ = null,
      jQ = null;

    function aQ() {
      return lQ ??= UQ().then((async QQ => {
        var FQ;
        const wQ = null !== QQ && !(0, vQ.p)(QQ),
          LQ = {
            indirectHangs: wQ && await (0, vQ.D)(QQ, window.location.search),
            storagePullBreaks: wQ && (0, vQ.N)(QQ, window.location.search),
            splitPassBreaks: wQ && (0, vQ.M)(QQ, window.location.search),
            framesAhead: (0, vQ.h)(window.location.search),
            instancedTerrainSlow: wQ && (0, vQ.H)(QQ, null !== (FQ = (0, mQ.d)(QQ, !1)) && void 0 !== FQ ? FQ : (0, qQ.e)())
          };
        return jQ = LQ.indirectHangs, LQ
      })), lQ
    }

    function XQ() {
      return jQ
    }
  },
  40254: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    const LQ = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40250: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      e: () => LQ
    });
    const LQ = {
        webgpu: async () => (await wQ.e(8).then((() => wQ(42644)))).bloxdWasmWebgpu,
        webgl: async () => (await wQ.e(6).then((() => wQ(42656)))).bloxdWasmWebgl,
        webgl1: async () => (await wQ.e(7).then((() => wQ(42666)))).bloxdWasmWebgl1
      },
      qQ = async () => (await wQ.e(5).then((() => wQ(42675)))).compileAnimationPackInWasm
  },
  40262: (QQ, FQ, wQ) => {
    function LQ() {
      return wQ(40264)
    }

    function qQ() {
      return wQ(40268)
    }

    function oQ(QQ) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(QQ)
    }
    wQ.d(FQ, {
      c: () => oQ,
      d: () => LQ,
      e: () => qQ
    })
  },
  40259: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      f: () => vQ
    });
    var LQ = wQ(96);
    const qQ = "webgpuPipeline";

    function oQ(QQ) {
      return QQ.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let DQ = null;

    function kQ() {
      if (null === DQ) try {
        QQ = (0, LQ.getBrowserName)(), FQ = (0, LQ.getBrowserVersion)(), wQ = (0, LQ.getOperatingSystem)(), qQ = (0, LQ.getOperatingSystemVersion)(), DQ = `${QQ.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===FQ?"unknown":oQ(FQ)}-${wQ}${void 0===qQ?"":`_${oQ(qQ)}`}`
      } catch (kQ) {
        console.warn("The user agent couldn't be read for its browser code", kQ), DQ = "unknown"
      }
      var QQ, FQ, wQ, qQ;
      return DQ
    }

    function vQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const FQ = `WGPU-${kQ()}`,
        LQ = (QQ, LQ) => {
          const {
            reason: oQ,
            message: DQ
          } = LQ, kQ = {
            pipeline: null !== QQ && void 0 !== QQ ? QQ : "",
            reason: String(oQ),
            browserMessage: String(DQ)
          };
          Promise.all([wQ.e(263), wQ.e(87)]).then((() => wQ(40369))).then((QQ => {
            let {
              reportCrash: wQ
            } = QQ;
            wQ({
              kind: "coreError",
              code: FQ,
              site: qQ,
              fatal: !1,
              message: `${kQ.pipeline} ${kQ.reason}: ${kQ.browserMessage}`,
              details: kQ,
              error: LQ
            })
          })).catch((QQ => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", QQ)
          }))
        },
        oQ = QQ.createRenderPipelineAsync;
      QQ.createRenderPipelineAsync = function(QQ) {
        return oQ.call(this, QQ).catch((FQ => {
          throw LQ(QQ.label, FQ), FQ
        }))
      };
      const DQ = QQ.createComputePipelineAsync;
      QQ.createComputePipelineAsync = function(QQ) {
        return DQ.call(this, QQ).catch((FQ => {
          throw LQ(QQ.label, FQ), FQ
        }))
      }
    }
  },
  40217: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/bloxd_wasm_models_bg.593d3d487912d0f5515a.wasm"
  },
  40209: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/bloxd_wasm_workers_bg.bbb759863ba8f8a8aa47.wasm"
  },
  40264: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40268: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  40201: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      e: () => LQ
    });
    const LQ = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new wQ.U(wQ(40209))
      }
    };
    const qQ = {
      name: "bloxd_wasm_models",
      url: function() {
        return new wQ.U(wQ(40217))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);