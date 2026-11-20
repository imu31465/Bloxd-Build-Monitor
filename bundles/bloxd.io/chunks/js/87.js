export const id = 87;
export const ids = [87];
export const modules = {
  4531: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      $: () => Hk,
      A: () => ek,
      Cb: () => zk,
      D: () => Kk,
      Db: () => ck,
      F: () => dk,
      Fb: () => Tk,
      G: () => yk,
      H: () => wk,
      Jb: () => rk,
      Kb: () => vk,
      L: () => Jk,
      Lb: () => ik,
      N: () => Vk,
      O: () => Ok,
      Ob: () => hk,
      R: () => Sk,
      Rb: () => tk,
      T: () => Nk,
      Tb: () => pk,
      X: () => Ek,
      bb: () => Pk,
      d: () => Zk,
      fb: () => Dk,
      g: () => Ck,
      h: () => sk,
      i: () => Wk,
      j: () => qk,
      jb: () => Gk,
      kb: () => uk,
      m: () => mk,
      ob: () => Uk,
      pb: () => Mk,
      q: () => fk,
      qb: () => Ak,
      t: () => Xk,
      tb: () => Lk,
      u: () => bk,
      vb: () => Yk,
      y: () => Rk,
      yb: () => gk,
      z: () => ak
    });
    const Rk = 32,
      tk = 33.333333333333336,
      ak = {
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
      Xk = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      bk = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      wk = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      dk = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      sk = {
        Look: 0,
        Remesh: 1
      },
      Vk = 8,
      Jk = 1,
      Ak = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      ek = {
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
      yk = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      fk = {
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
      mk = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Wk = 4,
      vk = 4,
      ik = 65535,
      Yk = {
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
      Lk = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Ok = 88,
      Ek = 0,
      Sk = 24,
      Nk = 48,
      Hk = 80,
      uk = {
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
      Mk = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      gk = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Uk = {
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
      ck = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Gk = 65535,
      Tk = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      rk = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Dk = 2,
      zk = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Pk = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      hk = {
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
      qk = {
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
      Ck = {
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
      Zk = 8,
      pk = {
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
      Kk = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  40216: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => bk
    });
    const Rk = 1 << 20,
      tk = 1 << 21,
      ak = 1024,
      Xk = 2048;

    function bk(kk, Fk, Bk) {
      const bk = kk + Rk,
        wk = Fk + ak,
        dk = Bk + Rk;
      return bk < 0 || bk >= tk || dk < 0 || dk >= tk || wk < 0 || wk >= Xk ? -1 : (bk * tk + dk) * Xk + wk
    }
  },
  40207: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      h: () => Xk,
      l: () => tk,
      n: () => ak,
      p: () => sk,
      t: () => dk,
      w: () => wk,
      y: () => bk
    });
    Bk(3262);
    Bk(40216);

    function Rk(kk) {}

    function tk(kk) {}

    function ak(kk) {}

    function Xk(kk) {}

    function bk(kk) {}

    function wk(kk, Fk, Bk) {}

    function dk(kk) {}

    function sk(kk) {}
  },
  40189: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      B: () => Zk,
      C: () => FF,
      D: () => qk,
      H: () => hk,
      L: () => xk,
      M: () => Kk,
      N: () => RF,
      P: () => nk,
      R: () => Hk,
      c: () => BF,
      d: () => bF,
      h: () => lk,
      i: () => kF,
      k: () => pk,
      m: () => Qk,
      o: () => Ik,
      r: () => XF,
      t: () => zk,
      x: () => Pk
    });
    var Rk = Bk(279),
      tk = Bk(245),
      ak = Bk(252),
      Xk = Bk(22),
      bk = Bk(2711),
      wk = Bk(646),
      dk = Bk(4255),
      sk = Bk(2654),
      Vk = Bk(3255),
      Jk = Bk(98),
      Ak = Bk(276),
      ek = Bk(42),
      yk = Bk(267),
      fk = Bk(117),
      mk = Bk(617),
      Wk = Bk(130),
      vk = Bk(123),
      ik = Bk(4531),
      Yk = Bk(40197),
      Lk = Bk(1698),
      Ok = Bk(40200);
    const Ek = "bloxd-webgpuOffAfterLoss",
      Sk = "context:webgl",
      Nk = "probe:threw";

    function Hk(kk) {
      let Fk;
      try {
        Fk = kk.getContext("webgl", {
          powerPreference: Wk.d
        })
      } catch {
        Fk = null
      }
      if (null === Fk) return null;
      let Bk = null;
      try {
        const kk = Fk.getParameter(Fk.MAX_TEXTURE_SIZE);
        Bk = "number" === typeof kk && kk > 0 ? kk : null
      } catch {
        Bk = null
      }
      try {
        var Rk;
        null === (Rk = Fk.getExtension("WEBGL_lose_context")) || void 0 === Rk || Rk.loseContext()
      } catch {}
      return Bk
    }
    const uk = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      Mk = "mali_valhall",
      gk = new Set(["nvidia_pre_turing"]);

    function Uk(kk) {
      return function(kk) {
        try {
          return kk()
        } catch {
          return null
        }
      }((() => {
        var Fk, Bk, Rk, Xk;
        const bk = null !== (Fk = null === (Bk = kk.info) || void 0 === Bk ? void 0 : Bk.vendor) && void 0 !== Fk ? Fk : "";
        return "windows" === (0, Jk.getOperatingSystem)() && "" !== bk && "intel" !== (0, Jk.normaliseGpuVendor)(bk) ? null : ((0, Jk.seedGpuVendor)(bk), wk = (0, tk.i)(), dk = (0, ak.f)(bk, null !== (Rk = null === (Xk = kk.info) || void 0 === Xk ? void 0 : Xk.architecture) && void 0 !== Rk ? Rk : ""), uk.has(wk) ? "android_arm" === wk && dk === Mk ? "webgpu_default" : "webgl_default" : null);
        var wk, dk
      }))
    }

    function ck() {
      var kk;
      return {
        gpu: null !== (kk = navigator.gpu) && void 0 !== kk ? kk : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(kk) {
          let Fk, Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yk.c;
          try {
            Fk = kk.getContext("webgl")
          } catch {
            Fk = null
          }
          if (null === Fk) return [Sk];
          const Rk = [];
          try {
            for (const tk of Bk.extensions) null === Fk.getExtension(tk) && Rk.push(tk);
            for (const [tk, ak] of Object.entries(Bk.limits)) {
              const kk = Fk[tk],
                Bk = "number" === typeof kk ? Fk.getParameter(kk) : null;
              ("number" !== typeof Bk || Bk < ak) && Rk.push(`limit:${tk}`)
            }
            const kk = Fk.getShaderPrecisionFormat(Fk.VERTEX_SHADER, Fk.HIGH_FLOAT);
            (null === kk || kk.precision < Bk.vertexHighFloatBits) && Rk.push("precision:vertex_high_float")
          } catch {
            Rk.push(Nk)
          }
          try {
            var tk;
            null === (tk = Fk.getExtension("WEBGL_lose_context")) || void 0 === tk || tk.loseContext()
          } catch {}
          return Rk
        }(document.createElement("canvas")),
        offAfterLoss: kk => Gk((() => kk ? (0, yk.o)() : Xk.c.isWebGpuOffAfterLoss())),
        oldIntelDriver: kk => Gk((() => (0, fk.g)(kk))),
        intelGen9: kk => Gk((() => (0, fk.l)(kk))),
        gpuClassWebGlArm: Uk,
        storeGpuClassVerdict: kk => {
          ek.i.setItem(fk.E, kk)
        },
        gpuClassOnWebGl: kk => (0, mk.d)(kk),
        override: () => function() {
          if ((0, bk.p)("render") && "webgl1" === (0, bk.m)("renderer")) return "webgl1";
          const kk = [() => new URLSearchParams(window.location.search).get(sk.d), () => ek.i.getItem(sk.h), () => {
            const kk = localStorage.getItem(Ek);
            return null !== kk && localStorage.removeItem(Ek), "1" === kk ? "webgl2" : null
          }];
          for (const Fk of kk) {
            let kk = null;
            try {
              kk = Tk(Fk())
            } catch {}
            if (null !== kk) return kk
          }
          return null
        }(),
        claimed: () => Tk((0, wk.f)()),
        webGpuSetting: () => {
          const kk = ek.i.getItem(Rk.dc);
          return "boolean" === typeof kk ? kk : null
        },
        heldBack: () => mk.f,
        storeHoldbackSpared: kk => {
          ek.i.setItem(fk.B, kk)
        },
        intelGen9OnWebGl: () => mk.j,
        ie: () => Gk((() => (0, Vk.c)(Jk.featureFlags.settings.canUseShaderPacks))),
        windows: () => Gk((() => "windows" === (0, Jk.getOperatingSystem)()))
      }
    }

    function Gk(kk) {
      try {
        return kk()
      } catch {
        return !1
      }
    }

    function Tk(kk) {
      return "lite" === kk ? "webgpu" : "webgl2" === kk || "babylon" === kk ? "webgl" : null
    }
    async function rk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ck();
      const Fk = await async function(kk) {
        const Fk = function(kk) {
            const Fk = kk.override(),
              Bk = kk.webGpuSetting(),
              Rk = null === Fk && !0 !== Bk && kk.ie(),
              tk = null !== Fk || null !== Bk || Rk ? null : kk.claimed(),
              ak = null !== Fk ? "override" : !0 === Bk ? "setting" : Rk ? "pack" : !1 === Bk ? "setting" : null !== tk ? "claim" : "default",
              Xk = function(kk) {
                return "override" === kk || "setting" === kk
              }(ak);
            if ("webgl" === Fk || "webgl1" === Fk || "webgl" === tk || "setting" === ak && !1 === Bk) return {
              source: ak,
              asked: Xk,
              refused: "not_requested"
            };
            if (!kk.gpu) return {
              source: ak,
              asked: Xk,
              refused: "no_webgpu_api"
            };
            const bk = "default" === ak && kk.heldBack();
            if (bk && !kk.windows()) return {
              source: ak,
              asked: Xk,
              refused: "webgl_holdback"
            };
            if (!Xk && kk.offAfterLoss("pack" === ak)) return {
              source: ak,
              asked: Xk,
              refused: bk ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: ak,
              asked: Xk,
              heldBack: bk,
              gpu: kk.gpu
            }
          }(kk),
          {
            source: Bk
          } = Fk,
          Rk = !Fk.asked,
          tk = "gpu" in Fk && Fk.heldBack,
          Xk = function(kk) {
            return tk && "none" !== kk ? {
              reason: "webgl_holdback",
              adapter: null,
              source: Bk
            } : {
              reason: kk,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: Bk
            }
          };
        if (!("gpu" in Fk)) return Xk(Fk.refused);
        let bk;
        try {
          bk = await (0, Lk.m)((0, vk.l)(Fk.gpu), tF, `requestAdapter didn't settle in ${tF/1e3} s`)
        } catch {
          return Xk("adapter_error")
        }
        if ("string" === typeof bk) return Xk(bk);
        const wk = (0, vk.e)(bk);
        if ((0, vk.g)(bk)) return Xk("software_adapter", wk);
        const dk = kk.windows() && function(kk) {
          return gk.has((0, ak.f)(kk.vendor, kk.architecture))
        }(wk);
        if (kk.storeHoldbackSpared(dk), tk && !dk) return Xk("webgl_holdback");
        const sk = kk.intelGen9(bk),
          Vk = sk ? null : kk.gpuClassWebGlArm(bk);
        if (kk.storeGpuClassVerdict(null !== Vk && void 0 !== Vk && Vk), Rk && kk.oldIntelDriver(bk)) return Xk("old_intel_driver", wk);
        if ("default" === Bk && kk.intelGen9OnWebGl() && sk) return Xk("intel_gen9", wk);
        if ("default" === Bk && null !== Vk && kk.gpuClassOnWebGl(Vk)) return Xk("gpu_class_webgl", wk);
        return Xk("none", wk)
      }(kk);
      if ("none" === Fk.reason) return {
        backend: "webgpu",
        ...Fk
      };
      if ("webgl1" !== kk.override() && kk.webgl2()) return {
        backend: "webgl",
        ...Fk
      };
      const Bk = kk.webgl1();
      return 0 === Bk.length ? {
        backend: "webgl1",
        ...Fk
      } : {
        missing: Bk
      }
    }
    let Dk = !1;
    async function zk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ck();
      if (null === kk) return null;
      const Bk = await rk(Fk);
      return Dk = !("missing" in Bk) && "webgpu" === Bk.backend && "claim" === Bk.source, "missing" in Bk ? Bk : {
        ...Bk,
        load: kk[Bk.backend]
      }
    }
    async function Pk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ck().gpu,
        Rk = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== kk.backend) return !1;
      const tk = Ck(Fk, "indirectDraws", "off", "on");
      if (null !== tk) return tk;
      if (null !== kk.adapter && (0, fk.p)(kk.adapter, Rk)) return !0;
      if (null === Bk) return !1;
      try {
        var ak;
        const kk = await (0, Lk.m)(Bk.requestAdapter({
          powerPreference: "low-power"
        }), tF, `the low-power requestAdapter didn't settle in ${tF/1e3} s`);
        return (0, fk.p)(null !== (ak = null === kk || void 0 === kk ? void 0 : kk.info) && void 0 !== ak ? ak : {}, Rk)
      } catch (Xk) {
        return Xk instanceof Lk.h
      }
    }

    function hk(kk, Fk, Bk) {
      if ("webgpu" !== kk.backend) return !1;
      const Rk = Ck(Fk, "terrainFetch", "texture", "storage");
      return null !== Rk ? Rk : null !== kk.adapter && (0, fk.h)(kk.adapter, Bk)
    }

    function qk(kk, Fk, Bk) {
      if ("webgpu" !== kk.backend) return !1;
      const Rk = Ck(Fk, "sceneDepth", "off", "on");
      return null !== Rk ? Rk : null !== kk.adapter && (0, fk.j)(kk.adapter, Bk)
    }

    function Ck(kk, Fk, Bk, Rk) {
      const tk = new URLSearchParams(kk).get(Fk),
        ak = null !== tk && void 0 !== tk ? tk : (0, wk.c)(Fk);
      return ak !== Bk && ak !== Rk ? null : (Dk ||= null === tk, ak === Bk)
    }

    function Zk(kk, Fk) {
      return "webgl" === kk.backend && (0, ak.k)(Fk)
    }

    function pk(kk) {
      return null !== kk && "missing" in kk
    }

    function Kk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.c;
      try {
        const Bk = "start_failed" === kk || "pipeline_failed" === kk,
          Rk = Fk.turnOffWebGpuAfterDeviceLoss(Bk ? "visible" : (0, yk.e)((0, Ak.g)()));
        return !Dk || Rk && !Fk.isWebGpuOffAfterLoss() || (0, wk.p)("webgpuLoss"), Fk.isWebGpuOffAfterLoss() && "webgpu" === Tk(ek.i.getItem(sk.h)) && ek.i.removeItem(sk.h), (0, bk.p)("webgpuloss") && (0, dk.e)((Fk => {
          Fk.noteWebGpuLoss("wasm", Rk ? kk : `${kk}, which storage didn't keep`, null)
        })), Rk
      } catch {
        return !1
      }
    }

    function xk(kk) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !nk()) ? Kk(kk) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const jk = "framePacing";

    function lk(kk) {
      const Fk = new URLSearchParams(kk).get(jk);
      return null !== Fk && /^\d{1,9}$/.test(Fk) ? Number(Fk) : void 0
    }

    function nk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === Tk(new URLSearchParams(kk).get(sk.d))
      } catch {
        return !1
      }
    }

    function Ik(kk) {
      return !!Qk(kk) || kk instanceof Error && !(kk instanceof WebAssembly.RuntimeError) && kk.message.startsWith(`${ik.g.RenderSurfaceUnusable}:`)
    }

    function Qk(kk) {
      const {
        name: Fk,
        message: Bk
      } = null !== kk && void 0 !== kk ? kk : {};
      return "InvalidStateError" === Fk && "string" === typeof Bk && Bk.startsWith("GPUDevice.")
    }

    function kF(kk) {
      const Fk = kk;
      return "function" === typeof Fk.NBk && "function" === typeof Fk.HBk ? Fk : null
    }

    function FF(kk) {
      return "function" === typeof kk.TBk ? kk : null
    }
    const BF = "openRenderer";

    function RF(kk) {
      const Fk = null === kk || void 0 === kk ? void 0 : kk.ltk();
      return void 0 === Fk ? void 0 : new Error(Fk)
    }
    const tF = 5e3,
      aF = 15e3;

    function XF(kk, Fk, Bk, Rk, tk, ak) {
      return (0, Lk.m)(function(kk, Fk, Bk, Rk, tk, ak) {
        return (0, Ok.f)(kk, Fk, (() => kk.TBk(Bk, Rk, tk, ak.indirectHangs, ak.storagePullBreaks, ak.splitPassBreaks, ak.framesAhead, ak.instancedTerrainSlow)))
      }(kk, Fk, Bk, Rk, tk, ak), aF, `${ik.g.RenderSurfaceUnusable}: the renderer didn't open in ${aF/1e3} s`, wF)
    }
    async function bF(kk, Fk, Bk, Rk, tk, ak) {
      if ("function" !== typeof kk.Zak) throw new Error("this core has no set_renderer");
      const Xk = await XF(Fk, BF, Bk, tk, Rk, ak);
      try {
        kk.Zak(Xk)
      } catch (bk) {
        throw wF(Xk), bk
      }
    }

    function wF(kk) {
      try {
        kk.free()
      } catch {}
    }
  },
  40197: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk
    });
    const Rk = {
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
  40224: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => wk,
      f: () => bk
    });
    var Rk = Bk(665),
      tk = Bk(670);

    function ak(kk, Fk) {
      const Bk = null === Fk ? void 0 : Rk.e.get(Fk);
      return "all" === Bk || "webgl" === Bk && "webgpu" !== kk.backend ? Fk : null
    }

    function Xk(kk) {
      return "software_adapter" === kk.reason ? null : kk.adapter
    }

    function bk(kk, Fk) {
      const Bk = (0, Rk.s)();
      return null === Bk ? null : (0, Rk.f)(Xk(kk), Bk, Fk ? Rk.i : Rk.h)
    }

    function wk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tk.i;
      const Rk = ak(kk, Fk);
      return null !== Rk && "webgl" === kk.backend && Bk(Rk) ? null : Rk
    }
  },
  40200: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      f: () => sk,
      g: () => Xk,
      h: () => wk
    });
    var Rk = Bk(36019);
    class tk extends Error {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${kk}: the module trapped${Bk?" in an earlier call":""}: ${String(Fk)}`, {
          cause: Fk
        }), this.site = kk, this.trap = Fk, this.earlier = Bk, this.name = "ModuleTrapError", Fk instanceof Error && void 0 !== Fk.stack && (this.stack = `${this.name}: ${this.message}\n${Fk.stack}`)
      }
    }
    const ak = new WeakMap;

    function Xk(kk) {
      return ak.has(kk)
    }

    function bk(kk, Fk) {
      ak.has(kk) || ak.set(kk, Fk)
    }

    function wk(kk, Fk) {
      return !!(0, Rk.f)(Fk) && (bk(kk, Fk), !0)
    }
    const dk = [
      ["error", kk => kk.error],
      ["unhandledrejection", kk => kk.reason]
    ];

    function sk(kk, Fk, Bk) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return ak.has(kk) ? Promise.reject(new tk(Fk, ak.get(kk), !0)) : new Promise(((ak, wk) => {
        const sk = Bk => {
            bk(kk, Bk), Ak(), wk(new tk(Fk, Bk))
          },
          Vk = kk => {
            kk instanceof WebAssembly.RuntimeError ? sk(kk) : (Ak(), wk(kk))
          },
          Jk = dk.map((kk => {
            let [Fk, Bk] = kk;
            return [Fk, kk => {
              const Fk = Bk(kk);
              (0, Rk.f)(Fk) && sk(Fk)
            }]
          })),
          Ak = () => {
            for (const [kk, Fk] of Jk) null === Xk || void 0 === Xk || Xk.removeEventListener(kk, Fk)
          };
        for (const [kk, Fk] of Jk) null === Xk || void 0 === Xk || Xk.addEventListener(kk, Fk);
        let ek;
        try {
          ek = Bk()
        } catch (yk) {
          return void Vk(yk)
        }
        ek.then((kk => {
          Ak(), ak(kk)
        }), Vk)
      }))
    }
  },
  40231: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      C: () => uk,
      G: () => hk,
      H: () => Pk,
      I: () => ck,
      J: () => Ek,
      M: () => gk,
      P: () => Uk,
      Q: () => Tk,
      T: () => Mk,
      e: () => Ok,
      i: () => ik,
      k: () => rk,
      o: () => Gk,
      s: () => vk,
      u: () => Lk,
      v: () => mk,
      y: () => Nk
    });
    var Rk = Bk(194),
      tk = Bk(252),
      ak = Bk(22),
      Xk = Bk(276),
      bk = Bk(42),
      wk = Bk(40189),
      dk = Bk(40224),
      sk = Bk(40239),
      Vk = (Bk(40207), Bk(40245)),
      Jk = Bk(40252);
    const Ak = "wasmJoinBuild";
    let ek = null,
      yk = null,
      fk = null;

    function mk(kk) {
      fk = kk
    }
    let Wk = !1;

    function vk() {
      Wk = !0
    }

    function ik() {
      return Wk
    }
    let Yk = !1;

    function Lk() {
      Yk = !0
    }

    function Ok() {
      return Yk
    }

    function Ek() {
      return fk
    }
    let Sk = null;

    function Nk(kk) {
      Sk = kk, (0, Xk.b)(kk)
    }
    const Hk = "wasmClientRenderLost";

    function uk() {
      bk.j.setItem(Hk, !0)
    }

    function Mk() {
      return !0 === bk.j.getItem(Hk)
    }

    function gk() {
      return Sk
    }

    function Uk() {
      return null === ek && (bk.i.removeItem("wasmLastPick"), bk.i.removeItem("wasmGuessVerdict"), (0, Xk.j)(), ek = (0, wk.t)(sk.i).then((kk => (null === kk || (0, wk.k)(kk) || (yk = Vk.e[kk.backend], ak.c.followGameGpu("webgpu" === kk.backend ? kk.adapter : null), "webgpu" === kk.backend && (0, Jk.h)()), kk)))), ek
    }

    function ck() {
      return yk
    }

    function Gk(kk) {
      return kk ? kk.load() : Promise.resolve().then((function() {
        var kk = new Error("Cannot find module '@bloxd/wasm/client'");
        throw kk.code = "MODULE_NOT_FOUND", kk
      })).then((kk => kk.bloxdWasmClient))
    }

    function Tk(kk) {
      bk.i.setItem(Ak, kk)
    }
    async function rk() {
      if (null === sk.i) return Gk(null);
      const kk = bk.i.getItem(Ak);
      let Fk = "none" === kk ? null : "webgl";
      return null !== kk && "none" !== kk && ("string" === typeof kk && void 0 !== (0, Rk.d)(sk.i, kk) ? Fk = kk : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(kk)}, is none of this client's: guessing WebGL2's`)), null === Fk ? null : sk.i[Fk]()
    }
    let Dk = null,
      zk = null;

    function Pk() {
      return Dk ??= Uk().then((async kk => {
        var Fk;
        const Bk = null !== kk && !(0, wk.k)(kk),
          Rk = {
            indirectHangs: Bk && await (0, wk.x)(kk, window.location.search),
            storagePullBreaks: Bk && (0, wk.H)(kk, window.location.search),
            splitPassBreaks: Bk && (0, wk.D)(kk, window.location.search),
            framesAhead: (0, wk.h)(window.location.search),
            instancedTerrainSlow: Bk && (0, wk.B)(kk, null !== (Fk = (0, dk.f)(kk, !1)) && void 0 !== Fk ? Fk : (0, tk.c)())
          };
        return zk = Rk.indirectHangs, Rk
      })), Dk
    }

    function hk() {
      return zk
    }
  },
  40245: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    const Rk = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40239: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      i: () => Rk
    });
    const Rk = {
        webgpu: async () => (await Bk.e(8).then((() => Bk(42701)))).bloxdWasmWebgpu,
        webgl: async () => (await Bk.e(6).then((() => Bk(42716)))).bloxdWasmWebgl,
        webgl1: async () => (await Bk.e(7).then((() => Bk(42721)))).bloxdWasmWebgl1
      },
      tk = async () => (await Bk.e(5).then((() => Bk(42726)))).compileAnimationPackInWasm
  },
  40254: (kk, Fk, Bk) => {
    function Rk() {
      return Bk(40261)
    }

    function tk() {
      return Bk(40269)
    }

    function ak(kk) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(kk)
    }
    Bk.d(Fk, {
      d: () => ak,
      g: () => Rk,
      i: () => tk
    })
  },
  40252: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => bk,
      h: () => wk
    });
    var Rk = Bk(98);
    const tk = "webgpuPipeline";

    function ak(kk) {
      return kk.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let Xk = null;

    function bk() {
      if (null === Xk) try {
        kk = (0, Rk.getBrowserName)(), Fk = (0, Rk.getBrowserVersion)(), Bk = (0, Rk.getOperatingSystem)(), tk = (0, Rk.getOperatingSystemVersion)(), Xk = `${kk.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===Fk?"unknown":ak(Fk)}-${Bk}${void 0===tk?"":`_${ak(tk)}`}`
      } catch (bk) {
        console.warn("The user agent couldn't be read for its browser code", bk), Xk = "unknown"
      }
      var kk, Fk, Bk, tk;
      return Xk
    }

    function wk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const Fk = `WGPU-${bk()}`,
        Rk = (kk, Rk) => {
          const {
            reason: ak,
            message: Xk
          } = Rk, bk = {
            pipeline: null !== kk && void 0 !== kk ? kk : "",
            reason: String(ak),
            browserMessage: String(Xk)
          };
          Promise.all([Bk.e(262), Bk.e(86)]).then((() => Bk(40355))).then((kk => {
            let {
              reportCrash: Bk
            } = kk;
            Bk({
              kind: "coreError",
              code: Fk,
              site: tk,
              fatal: !1,
              message: `${bk.pipeline} ${bk.reason}: ${bk.browserMessage}`,
              details: bk,
              error: Rk
            })
          })).catch((kk => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", kk)
          }))
        },
        ak = kk.createRenderPipelineAsync;
      kk.createRenderPipelineAsync = function(kk) {
        return ak.call(this, kk).catch((Fk => {
          throw Rk(kk.label, Fk), Fk
        }))
      };
      const Xk = kk.createComputePipelineAsync;
      kk.createComputePipelineAsync = function(kk) {
        return Xk.call(this, kk).catch((Fk => {
          throw Rk(kk.label, Fk), Fk
        }))
      }
    }
  },
  40181: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/bloxd_wasm_models_bg.1fb247e637799831e033.wasm"
  },
  40178: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/bloxd_wasm_workers_bg.17a3611f7c9ecb9d22c6.wasm"
  },
  40261: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40269: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  40171: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      f: () => Rk
    });
    const Rk = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new Bk.U(Bk(40178))
      }
    };
    const tk = {
      name: "bloxd_wasm_models",
      url: function() {
        return new Bk.U(Bk(40181))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);