export const id = 88;
export const ids = [88];
export const modules = {
  4625: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => xq,
      Ab: () => rq,
      B: () => Yq,
      C: () => Oq,
      E: () => dq,
      Eb: () => tq,
      G: () => wq,
      H: () => uq,
      Hb: () => Mq,
      L: () => Bq,
      Lb: () => Jq,
      Nb: () => zq,
      O: () => cq,
      Q: () => jq,
      Qb: () => pq,
      T: () => Aq,
      Tb: () => Gq,
      V: () => aq,
      Vb: () => Qq,
      Wb: () => yq,
      X: () => Nq,
      Z: () => vq,
      _: () => nq,
      _b: () => Rq,
      bb: () => bq,
      bc: () => lq,
      e: () => sq,
      ec: () => Xq,
      f: () => Fq,
      fb: () => hq,
      i: () => Wq,
      ib: () => iq,
      kb: () => kq,
      m: () => Pq,
      mb: () => Lq,
      pb: () => Sq,
      q: () => Uq,
      sb: () => Zq,
      t: () => oq,
      u: () => Hq,
      ub: () => Tq,
      wb: () => fq,
      y: () => mq,
      zb: () => Vq
    });
    const Yq = 32,
      lq = 33.333333333333336,
      Oq = {
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
      mq = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      xq = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Aq = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      cq = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      uq = 7,
      Bq = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      Wq = {
        Look: 0,
        Remesh: 1
      },
      Nq = 8,
      aq = 1,
      Vq = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      dq = {
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
      jq = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Hq = {
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
      oq = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Pq = 4,
      Qq = 4,
      yq = 65535,
      tq = {
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
      rq = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      vq = 88,
      hq = 0,
      nq = 24,
      bq = 48,
      iq = 80,
      Zq = {
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
      fq = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Mq = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Tq = {
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
      zq = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Sq = 65535,
      pq = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Gq = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Lq = 2,
      Jq = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      kq = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Rq = {
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
      Uq = {
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
      Fq = {
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
      sq = 8,
      Xq = {
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
      wq = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  40523: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq
    });
    const Yq = 1 << 20,
      lq = 1 << 21,
      Oq = 1024,
      mq = 2048;

    function xq(qq, Eq, gq) {
      const xq = qq + Yq,
        Aq = Eq + Oq,
        cq = gq + Yq;
      return xq < 0 || xq >= lq || cq < 0 || cq >= lq || Aq < 0 || Aq >= mq ? -1 : (xq * lq + cq) * mq + Aq
    }
  },
  40515: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      h: () => mq,
      i: () => lq,
      k: () => Oq,
      l: () => uq,
      p: () => cq,
      s: () => Aq,
      v: () => xq
    });
    gq(3328);
    gq(40523);

    function Yq(qq) {}

    function lq(qq) {}

    function Oq(qq) {}

    function mq(qq) {}

    function xq(qq) {}

    function Aq(qq, Eq, gq) {}

    function cq(qq) {}

    function uq(qq) {}
  },
  40498: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => Uq,
      B: () => qE,
      E: () => kq,
      G: () => Jq,
      K: () => Xq,
      M: () => sq,
      O: () => gE,
      P: () => Cq,
      Q: () => nq,
      b: () => EE,
      e: () => mE,
      h: () => Kq,
      l: () => Dq,
      p: () => Fq,
      r: () => eq,
      v: () => Iq,
      w: () => OE,
      y: () => Gq,
      z: () => Lq
    });
    var Yq = gq(296),
      lq = gq(260),
      Oq = gq(263),
      mq = gq(24),
      xq = gq(2733),
      Aq = gq(642),
      cq = gq(4343),
      uq = gq(2691),
      Bq = gq(3324),
      Wq = gq(96),
      Nq = gq(289),
      aq = gq(38),
      Vq = gq(275),
      dq = gq(118),
      jq = gq(605),
      Hq = gq(128),
      oq = gq(126),
      Pq = gq(4625),
      Qq = gq(40503),
      yq = gq(1758),
      tq = gq(40508);
    const rq = "bloxd-webgpuOffAfterLoss",
      vq = "context:webgl",
      hq = "probe:threw";

    function nq(qq) {
      let Eq;
      try {
        Eq = qq.getContext("webgl", {
          powerPreference: Hq.d
        })
      } catch {
        Eq = null
      }
      if (null === Eq) return null;
      let gq = null;
      try {
        const qq = Eq.getParameter(Eq.MAX_TEXTURE_SIZE);
        gq = "number" === typeof qq && qq > 0 ? qq : null
      } catch {
        gq = null
      }
      try {
        var Yq;
        null === (Yq = Eq.getExtension("WEBGL_lose_context")) || void 0 === Yq || Yq.loseContext()
      } catch {}
      return gq
    }
    const bq = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      iq = "mali_valhall",
      Zq = new Set(["nvidia_pre_turing"]);

    function fq(qq) {
      return function(qq) {
        try {
          return qq()
        } catch {
          return null
        }
      }((() => {
        var Eq, gq, Yq, mq;
        const xq = null !== (Eq = null === (gq = qq.info) || void 0 === gq ? void 0 : gq.vendor) && void 0 !== Eq ? Eq : "";
        return "windows" === (0, Wq.getOperatingSystem)() && "" !== xq && "intel" !== (0, Wq.normaliseGpuVendor)(xq) ? null : ((0, Wq.seedGpuVendor)(xq), Aq = (0, lq.l)(), cq = (0, Oq.c)(xq, null !== (Yq = null === (mq = qq.info) || void 0 === mq ? void 0 : mq.architecture) && void 0 !== Yq ? Yq : ""), bq.has(Aq) ? "android_arm" === Aq && cq === iq ? "webgpu_default" : "webgl_default" : null);
        var Aq, cq
      }))
    }

    function Mq() {
      var qq;
      return {
        gpu: null !== (qq = navigator.gpu) && void 0 !== qq ? qq : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(qq) {
          let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qq.c;
          try {
            Eq = qq.getContext("webgl")
          } catch {
            Eq = null
          }
          if (null === Eq) return [vq];
          const Yq = [];
          try {
            for (const lq of gq.extensions) null === Eq.getExtension(lq) && Yq.push(lq);
            for (const [lq, Oq] of Object.entries(gq.limits)) {
              const qq = Eq[lq],
                gq = "number" === typeof qq ? Eq.getParameter(qq) : null;
              ("number" !== typeof gq || gq < Oq) && Yq.push(`limit:${lq}`)
            }
            const qq = Eq.getShaderPrecisionFormat(Eq.VERTEX_SHADER, Eq.HIGH_FLOAT);
            (null === qq || qq.precision < gq.vertexHighFloatBits) && Yq.push("precision:vertex_high_float")
          } catch {
            Yq.push(hq)
          }
          try {
            var lq;
            null === (lq = Eq.getExtension("WEBGL_lose_context")) || void 0 === lq || lq.loseContext()
          } catch {}
          return Yq
        }(document.createElement("canvas")),
        offAfterLoss: qq => Tq((() => qq ? (0, Vq.A)() : mq.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: qq => Tq((() => (0, dq.h)(qq))),
        intelGen9: qq => Tq((() => (0, dq.p)(qq))),
        gpuClassWebGlArm: fq,
        storeGpuClassVerdict: qq => {
          aq.i.setItem(dq.B, qq)
        },
        gpuClassOnWebGl: qq => (0, jq.c)(qq),
        override: () => function() {
          if ((0, xq.s)("render") && "webgl1" === (0, xq.o)("renderer")) return "webgl1";
          const qq = [() => new URLSearchParams(window.location.search).get(uq.e), () => aq.i.getItem(uq.f), () => {
            const qq = localStorage.getItem(rq);
            return null !== qq && localStorage.removeItem(rq), "1" === qq ? "webgl2" : null
          }];
          for (const Eq of qq) {
            let qq = null;
            try {
              qq = zq(Eq())
            } catch {}
            if (null !== qq) return qq
          }
          return null
        }(),
        claimed: () => zq((0, Aq.m)()),
        webGpuSetting: () => {
          const qq = aq.i.getItem(Yq.dc);
          return "boolean" === typeof qq ? qq : null
        },
        heldBack: () => jq.d,
        storeHoldbackSpared: qq => {
          aq.i.setItem(dq.A, qq)
        },
        intelGen9OnWebGl: () => jq.e,
        pN: () => Tq((() => (0, Bq.d)(Wq.featureFlags.settings.canUseShaderPacks))),
        windows: () => Tq((() => "windows" === (0, Wq.getOperatingSystem)()))
      }
    }

    function Tq(qq) {
      try {
        return qq()
      } catch {
        return !1
      }
    }

    function zq(qq) {
      return "lite" === qq ? "webgpu" : "webgl2" === qq || "babylon" === qq ? "webgl" : null
    }
    async function Sq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mq();
      const Eq = await async function(qq) {
        const Eq = function(qq) {
            const Eq = qq.override(),
              gq = qq.webGpuSetting(),
              Yq = null === Eq && !0 !== gq && qq.pN(),
              lq = null !== Eq || null !== gq || Yq ? null : qq.claimed(),
              Oq = null !== Eq ? "override" : !0 === gq ? "setting" : Yq ? "pack" : !1 === gq ? "setting" : null !== lq ? "claim" : "default",
              mq = function(qq) {
                return "override" === qq || "setting" === qq
              }(Oq);
            if ("webgl" === Eq || "webgl1" === Eq || "webgl" === lq || "setting" === Oq && !1 === gq) return {
              source: Oq,
              asked: mq,
              refused: "not_requested"
            };
            if (!qq.gpu) return {
              source: Oq,
              asked: mq,
              refused: "no_webgpu_api"
            };
            const xq = "default" === Oq && qq.heldBack();
            if (xq && !qq.windows()) return {
              source: Oq,
              asked: mq,
              refused: "webgl_holdback"
            };
            if (!mq && qq.offAfterLoss("pack" === Oq)) return {
              source: Oq,
              asked: mq,
              refused: xq ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: Oq,
              asked: mq,
              heldBack: xq,
              gpu: qq.gpu
            }
          }(qq),
          {
            source: gq
          } = Eq,
          Yq = !Eq.asked,
          lq = "gpu" in Eq && Eq.heldBack,
          mq = function(qq) {
            return lq && "none" !== qq ? {
              reason: "webgl_holdback",
              adapter: null,
              source: gq
            } : {
              reason: qq,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: gq
            }
          };
        if (!("gpu" in Eq)) return mq(Eq.refused);
        let xq;
        try {
          xq = await (0, yq.k)((0, oq.n)(Eq.gpu), YE, `requestAdapter didn't settle in ${YE/1e3} s`)
        } catch {
          return mq("adapter_error")
        }
        if ("string" === typeof xq) return mq(xq);
        const Aq = (0, oq.e)(xq);
        if ((0, oq.i)(xq)) return mq("software_adapter", Aq);
        const cq = qq.windows() && function(qq) {
          return Zq.has((0, Oq.c)(qq.vendor, qq.architecture))
        }(Aq);
        if (qq.storeHoldbackSpared(cq), lq && !cq) return mq("webgl_holdback");
        const uq = qq.intelGen9(xq),
          Bq = uq ? null : qq.gpuClassWebGlArm(xq);
        if (qq.storeGpuClassVerdict(null !== Bq && void 0 !== Bq && Bq), Yq && qq.oldIntelDriver(xq)) return mq("old_intel_driver", Aq);
        if ("default" === gq && qq.intelGen9OnWebGl() && uq) return mq("intel_gen9", Aq);
        if ("default" === gq && null !== Bq && qq.gpuClassOnWebGl(Bq)) return mq("gpu_class_webgl", Aq);
        return mq("none", Aq)
      }(qq);
      if ("none" === Eq.reason) return {
        backend: "webgpu",
        ...Eq
      };
      if ("webgl1" !== qq.override() && qq.webgl2()) return {
        backend: "webgl",
        ...Eq
      };
      const gq = qq.webgl1();
      return 0 === gq.length ? {
        backend: "webgl1",
        ...Eq
      } : {
        missing: gq
      }
    }
    let pq = !1;
    async function Gq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mq();
      if (null === qq) return null;
      const gq = await Sq(Eq);
      return pq = !("missing" in gq) && "webgpu" === gq.backend && "claim" === gq.source, "missing" in gq ? gq : {
        ...gq,
        load: qq[gq.backend]
      }
    }
    async function Lq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mq().gpu,
        Yq = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== qq.backend) return !1;
      const lq = Rq(Eq, "indirectDraws", "off", "on");
      if (null !== lq) return lq;
      if (null !== qq.adapter && (0, dq.q)(qq.adapter, Yq)) return !0;
      if (null === gq) return !1;
      try {
        var Oq;
        const qq = await (0, yq.k)(gq.requestAdapter({
          powerPreference: "low-power"
        }).then((async qq => (null !== qq && await (0, oq.g)(qq), qq))), YE, `the low-power requestAdapter didn't settle in ${YE/1e3} s`);
        return (0, dq.q)(null !== (Oq = null === qq || void 0 === qq ? void 0 : qq.info) && void 0 !== Oq ? Oq : {}, Yq)
      } catch (mq) {
        return mq instanceof yq.f
      }
    }

    function Jq(qq, Eq, gq) {
      if ("webgpu" !== qq.backend) return !1;
      const Yq = Rq(Eq, "terrainFetch", "texture", "storage");
      return null !== Yq ? Yq : null !== qq.adapter && (0, dq.k)(qq.adapter, gq)
    }

    function kq(qq, Eq, gq) {
      if ("webgpu" !== qq.backend) return !1;
      const Yq = Rq(Eq, "sceneDepth", "off", "on");
      return null !== Yq ? Yq : null !== qq.adapter && (0, dq.l)(qq.adapter, gq)
    }

    function Rq(qq, Eq, gq, Yq) {
      const lq = new URLSearchParams(qq).get(Eq),
        Oq = null !== lq && void 0 !== lq ? lq : (0, Aq.g)(Eq);
      return Oq !== gq && Oq !== Yq ? null : (pq ||= null === lq, Oq === gq)
    }

    function Uq(qq, Eq) {
      return "webgl" === qq.backend && (0, Oq.g)(Eq)
    }

    function Fq(qq) {
      return null !== qq && "missing" in qq
    }

    function sq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq.b;
      try {
        const gq = "start_failed" === qq || "pipeline_failed" === qq,
          Yq = Eq.turnOffWebGpuAfterDeviceLoss(gq ? "visible" : (0, Vq.h)((0, Nq.i)()));
        return !pq || Yq && !Eq.isWebGpuOffAfterLoss() || (0, Aq.x)("webgpuLoss"), Eq.isWebGpuOffAfterLoss() && "webgpu" === zq(aq.i.getItem(uq.f)) && aq.i.removeItem(uq.f), (0, xq.s)("webgpuloss") && (0, cq.b)((Eq => {
          Eq.noteWebGpuLoss("wasm", Yq ? qq : `${qq}, which storage didn't keep`, null)
        })), Yq
      } catch {
        return !1
      }
    }

    function Xq(qq) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Cq()) ? sq(qq) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const wq = "framePacing";

    function Kq(qq) {
      const Eq = new URLSearchParams(qq).get(wq);
      return null !== Eq && /^\d{1,9}$/.test(Eq) ? Number(Eq) : void 0
    }

    function Cq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === zq(new URLSearchParams(qq).get(uq.e))
      } catch {
        return !1
      }
    }

    function Iq(qq) {
      return !!eq(qq) || qq instanceof Error && !(qq instanceof WebAssembly.RuntimeError) && qq.message.startsWith(`${Pq.f.RenderSurfaceUnusable}:`)
    }

    function eq(qq) {
      const {
        name: Eq,
        message: gq
      } = null !== qq && void 0 !== qq ? qq : {};
      return "InvalidStateError" === Eq && "string" === typeof gq && gq.startsWith("GPUDevice.")
    }

    function Dq(qq) {
      const Eq = qq;
      return "function" === typeof Eq.dYq && "function" === typeof Eq.jYq ? Eq : null
    }

    function qE(qq) {
      return "function" === typeof qq.rYq ? qq : null
    }
    const EE = "openRenderer";

    function gE(qq) {
      const Eq = null === qq || void 0 === qq ? void 0 : qq.fOq();
      return void 0 === Eq ? void 0 : new Error(Eq)
    }
    const YE = 5e3,
      lE = 15e3;

    function OE(qq, Eq, gq, Yq, lq, Oq) {
      return (0, yq.k)(function(qq, Eq, gq, Yq, lq, Oq) {
        return (0, tq.d)(qq, Eq, (() => qq.rYq(gq, Yq, lq, Oq.indirectHangs, Oq.storagePullBreaks, Oq.splitPassBreaks, Oq.framesAhead, Oq.instancedTerrainSlow)))
      }(qq, Eq, gq, Yq, lq, Oq), lE, `${Pq.f.RenderSurfaceUnusable}: the renderer didn't open in ${lE/1e3} s`, xE)
    }
    async function mE(qq, Eq, gq, Yq, lq, Oq) {
      if ("function" !== typeof qq.Hmq) throw new Error("this core has no set_renderer");
      const mq = await OE(Eq, EE, gq, lq, Yq, Oq);
      try {
        qq.Hmq(mq)
      } catch (xq) {
        throw xE(mq), xq
      }
    }

    function xE(qq) {
      try {
        qq.free()
      } catch {}
    }
  },
  40503: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    const Yq = {
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
  40526: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq,
      g: () => xq
    });
    var Yq = gq(658),
      lq = gq(660);

    function Oq(qq, Eq) {
      const gq = null === Eq ? void 0 : Yq.b.get(Eq);
      return "all" === gq || "webgl" === gq && "webgpu" !== qq.backend ? Eq : null
    }

    function mq(qq) {
      return "software_adapter" === qq.reason ? null : qq.adapter
    }

    function xq(qq, Eq) {
      const gq = (0, Yq.s)();
      return null === gq ? null : (0, Yq.f)(mq(qq), gq, Eq ? Yq.m : Yq.j)
    }

    function Aq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq.k;
      const Yq = Oq(qq, Eq);
      return null !== Yq && "webgl" === qq.backend && gq(Yq) ? null : Yq
    }
  },
  40508: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      d: () => uq,
      g: () => mq,
      k: () => Aq
    });
    var Yq = gq(36356);
    class lq extends Error {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${qq}: the module trapped${gq?" in an earlier call":""}: ${String(Eq)}`, {
          cause: Eq
        }), this.site = qq, this.trap = Eq, this.earlier = gq, this.name = "ModuleTrapError", Eq instanceof Error && void 0 !== Eq.stack && (this.stack = `${this.name}: ${this.message}\n${Eq.stack}`)
      }
    }
    const Oq = new WeakMap;

    function mq(qq) {
      return Oq.has(qq)
    }

    function xq(qq, Eq) {
      Oq.has(qq) || Oq.set(qq, Eq)
    }

    function Aq(qq, Eq) {
      return !!(0, Yq.i)(Eq) && (xq(qq, Eq), !0)
    }
    const cq = [
      ["error", qq => qq.error],
      ["unhandledrejection", qq => qq.reason]
    ];

    function uq(qq, Eq, gq) {
      let mq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Oq.has(qq) ? Promise.reject(new lq(Eq, Oq.get(qq), !0)) : new Promise(((Oq, Aq) => {
        const uq = gq => {
            xq(qq, gq), Nq(), Aq(new lq(Eq, gq))
          },
          Bq = qq => {
            qq instanceof WebAssembly.RuntimeError ? uq(qq) : (Nq(), Aq(qq))
          },
          Wq = cq.map((qq => {
            let [Eq, gq] = qq;
            return [Eq, qq => {
              const Eq = gq(qq);
              (0, Yq.i)(Eq) && uq(Eq)
            }]
          })),
          Nq = () => {
            for (const [qq, Eq] of Wq) null === mq || void 0 === mq || mq.removeEventListener(qq, Eq)
          };
        for (const [qq, Eq] of Wq) null === mq || void 0 === mq || mq.addEventListener(qq, Eq);
        let aq;
        try {
          aq = gq()
        } catch (Vq) {
          return void Bq(Vq)
        }
        aq.then((qq => {
          Nq(), Oq(qq)
        }), Bq)
      }))
    }
  },
  40534: (qq, Eq, gq) => {
    gq.d(Eq, {
      D: () => Lq,
      G: () => Mq,
      K: () => rq,
      L: () => Zq,
      P: () => fq,
      Q: () => zq,
      U: () => iq,
      c: () => tq,
      d: () => Pq,
      g: () => Sq,
      h: () => Tq,
      l: () => oq,
      n: () => yq,
      o: () => jq,
      s: () => hq,
      w: () => bq,
      z: () => Jq
    });
    var Yq = gq(201),
      lq = gq(263),
      Oq = gq(24),
      mq = gq(289),
      xq = gq(38),
      Aq = gq(40498),
      cq = gq(40526),
      uq = gq(40542),
      Bq = (gq(40515), gq(40548)),
      Wq = gq(40551);
    const Nq = "wasmJoinBuild";
    let aq = null,
      Vq = null,
      dq = null;

    function jq(qq) {
      dq = qq
    }
    let Hq = !1;

    function oq() {
      Hq = !0
    }

    function Pq() {
      return Hq
    }
    let Qq = !1;

    function yq() {
      Qq = !0
    }

    function tq() {
      return Qq
    }

    function rq() {
      return dq
    }
    let vq = null;

    function hq(qq) {
      vq = qq, (0, mq.e)(qq)
    }
    const nq = "wasmClientRenderLost";

    function bq() {
      xq.k.setItem(nq, !0)
    }

    function iq() {
      return !0 === xq.k.getItem(nq)
    }

    function Zq() {
      return vq
    }

    function fq() {
      return null === aq && (xq.i.removeItem("wasmLastPick"), xq.i.removeItem("wasmGuessVerdict"), (0, mq.k)(), aq = (0, Aq.y)(uq.h).then((qq => (null === qq || (0, Aq.p)(qq) || (Vq = Bq.d[qq.backend], Oq.b.followGameGpu("webgpu" === qq.backend ? qq.adapter : null), "webgpu" === qq.backend && (0, Wq.g)()), qq)))), aq
    }

    function Mq() {
      return Vq
    }

    function Tq(qq) {
      return qq ? qq.load() : Promise.resolve().then((function() {
        var qq = new Error("Cannot find module '@bloxd/wasm/client'");
        throw qq.code = "MODULE_NOT_FOUND", qq
      })).then((qq => qq.bloxdWasmClient))
    }

    function zq(qq) {
      xq.i.setItem(Nq, qq)
    }
    async function Sq() {
      if (null === uq.h) return Tq(null);
      const qq = xq.i.getItem(Nq);
      let Eq = "none" === qq ? null : "webgl";
      return null !== qq && "none" !== qq && ("string" === typeof qq && void 0 !== (0, Yq.b)(uq.h, qq) ? Eq = qq : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(qq)}, is none of this client's: guessing WebGL2's`)), null === Eq ? null : uq.h[Eq]()
    }
    let pq = null,
      Gq = null;

    function Lq() {
      return pq ??= fq().then((async qq => {
        var Eq;
        const gq = null !== qq && !(0, Aq.p)(qq),
          Yq = {
            indirectHangs: gq && await (0, Aq.z)(qq, window.location.search),
            storagePullBreaks: gq && (0, Aq.G)(qq, window.location.search),
            splitPassBreaks: gq && (0, Aq.E)(qq, window.location.search),
            framesAhead: (0, Aq.h)(window.location.search),
            instancedTerrainSlow: gq && (0, Aq.A)(qq, null !== (Eq = (0, cq.g)(qq, !1)) && void 0 !== Eq ? Eq : (0, lq.b)())
          };
        return Gq = Yq.indirectHangs, Yq
      })), pq
    }

    function Jq() {
      return Gq
    }
  },
  40548: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    const Yq = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40542: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq,
      h: () => Yq
    });
    const Yq = {
        webgpu: async () => (await gq.e(8).then((() => gq(42992)))).bloxdWasmWebgpu,
        webgl: async () => (await gq.e(6).then((() => gq(43003)))).bloxdWasmWebgl,
        webgl1: async () => (await gq.e(7).then((() => gq(43016)))).bloxdWasmWebgl1
      },
      lq = async () => (await gq.e(5).then((() => gq(43032)))).compileAnimationPackInWasm
  },
  40559: (qq, Eq, gq) => {
    function Yq() {
      return gq(40565)
    }

    function lq() {
      return gq(40573)
    }

    function Oq(qq) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(qq)
    }
    gq.d(Eq, {
      c: () => Oq,
      e: () => Yq,
      g: () => lq
    })
  },
  40551: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      g: () => Aq
    });
    var Yq = gq(96);
    const lq = "webgpuPipeline";

    function Oq(qq) {
      return qq.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let mq = null;

    function xq() {
      if (null === mq) try {
        qq = (0, Yq.getBrowserName)(), Eq = (0, Yq.getBrowserVersion)(), gq = (0, Yq.getOperatingSystem)(), lq = (0, Yq.getOperatingSystemVersion)(), mq = `${qq.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===Eq?"unknown":Oq(Eq)}-${gq}${void 0===lq?"":`_${Oq(lq)}`}`
      } catch (xq) {
        console.warn("The user agent couldn't be read for its browser code", xq), mq = "unknown"
      }
      var qq, Eq, gq, lq;
      return mq
    }

    function Aq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const Eq = `WGPU-${xq()}`,
        Yq = (qq, Yq) => {
          const {
            reason: Oq,
            message: mq
          } = Yq, xq = {
            pipeline: null !== qq && void 0 !== qq ? qq : "",
            reason: String(Oq),
            browserMessage: String(mq)
          };
          Promise.all([gq.e(263), gq.e(87)]).then((() => gq(40687))).then((qq => {
            let {
              reportCrash: gq
            } = qq;
            gq({
              kind: "coreError",
              code: Eq,
              site: lq,
              fatal: !1,
              message: `${xq.pipeline} ${xq.reason}: ${xq.browserMessage}`,
              details: xq,
              error: Yq
            })
          })).catch((qq => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", qq)
          }))
        },
        Oq = qq.createRenderPipelineAsync;
      qq.createRenderPipelineAsync = function(qq) {
        return Oq.call(this, qq).catch((Eq => {
          throw Yq(qq.label, Eq), Eq
        }))
      };
      const mq = qq.createComputePipelineAsync;
      qq.createComputePipelineAsync = function(qq) {
        return mq.call(this, qq).catch((Eq => {
          throw Yq(qq.label, Eq), Eq
        }))
      }
    }
  },
  40495: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/bloxd_wasm_models_bg.273d3ef33ab63e5ae007.wasm"
  },
  40493: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/bloxd_wasm_workers_bg.b1eeed671303ca766c1e.wasm"
  },
  40565: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40573: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  40490: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      c: () => Yq
    });
    const Yq = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new gq.U(gq(40493))
      }
    };
    const lq = {
      name: "bloxd_wasm_models",
      url: function() {
        return new gq.U(gq(40495))
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);