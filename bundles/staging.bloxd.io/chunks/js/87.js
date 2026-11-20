export const id = 87;
export const ids = [87];
export const modules = {
  4485: (bb, ab, Ub) => {
    Ub.d(ab, {
      $: () => mb,
      B: () => Yb,
      Cb: () => db,
      Db: () => rb,
      E: () => Ab,
      F: () => Tb,
      Fb: () => hb,
      Gb: () => Qb,
      J: () => jb,
      Jb: () => qb,
      L: () => gb,
      Lb: () => Db,
      M: () => eb,
      Mb: () => zb,
      N: () => Rb,
      O: () => Bb,
      P: () => Pb,
      Pb: () => ob,
      Rb: () => Mb,
      S: () => Lb,
      Tb: () => sb,
      V: () => fb,
      Z: () => pb,
      _: () => Nb,
      db: () => Wb,
      e: () => wb,
      gb: () => Kb,
      h: () => tb,
      jb: () => ub,
      l: () => vb,
      lb: () => Gb,
      m: () => Zb,
      nb: () => Hb,
      p: () => lb,
      qb: () => Fb,
      r: () => yb,
      tb: () => Ib,
      u: () => kb,
      ub: () => Xb,
      x: () => Eb,
      xb: () => ib,
      yb: () => xb
    });
    const Ab = 32,
      Mb = 33.333333333333336,
      Tb = {
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
      Eb = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Yb = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Bb = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      eb = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      vb = {
        Look: 0,
        Remesh: 1
      },
      Lb = 8,
      Pb = 1,
      Xb = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      jb = {
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
      Rb = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      kb = {
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
      yb = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Zb = 4,
      Db = 4,
      zb = 65535,
      xb = {
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
      ib = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      fb = 88,
      mb = 0,
      pb = 24,
      Nb = 48,
      Wb = 80,
      Hb = {
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
      Ib = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      db = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Fb = {
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
      hb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Gb = 65535,
      Qb = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      qb = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      ub = 2,
      rb = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Kb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      ob = {
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
      lb = {
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
      tb = {
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
      wb = 8,
      sb = {
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
      gb = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  39929: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb
    });
    const Ab = 1 << 20,
      Mb = 1 << 21,
      Tb = 1024,
      Eb = 2048;

    function Yb(bb, ab, Ub) {
      const Yb = bb + Ab,
        Bb = ab + Tb,
        eb = Ub + Ab;
      return Yb < 0 || Yb >= Mb || eb < 0 || eb >= Mb || Bb < 0 || Bb >= Eb ? -1 : (Yb * Mb + eb) * Eb + Bb
    }
  },
  39921: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab,
      e: () => Eb,
      i: () => Mb,
      k: () => Tb,
      l: () => vb,
      p: () => eb,
      t: () => Bb,
      w: () => Yb
    });
    Ub(3138);
    Ub(39929);

    function Ab(bb) {}

    function Mb(bb) {}

    function Tb(bb) {}

    function Eb(bb) {}

    function Yb(bb) {}

    function Bb(bb, ab, Ub) {}

    function eb(bb) {}

    function vb(bb) {}
  },
  39902: (bb, ab, Ub) => {
    Ub.d(ab, {
      B: () => rb,
      C: () => Kb,
      F: () => wb,
      G: () => ba,
      H: () => lb,
      K: () => ob,
      O: () => Cb,
      P: () => gb,
      S: () => Ua,
      T: () => cb,
      U: () => Wb,
      e: () => aa,
      g: () => Ea,
      k: () => Ob,
      n: () => Sb,
      p: () => sb,
      s: () => nb,
      u: () => Jb,
      x: () => Ta
    });
    var Ab = Ub(307),
      Mb = Ub(275),
      Tb = Ub(283),
      Eb = Ub(19),
      Yb = Ub(2621),
      Bb = Ub(644),
      eb = Ub(4198),
      vb = Ub(2572),
      Lb = Ub(3132),
      Pb = Ub(101),
      Xb = Ub(299),
      jb = Ub(31),
      Rb = Ub(292),
      kb = Ub(119),
      yb = Ub(597),
      Zb = Ub(131),
      Db = Ub(124),
      zb = Ub(4485),
      xb = Ub(39907),
      ib = Ub(1687),
      fb = Ub(39916);
    const mb = "bloxd-webgpuOffAfterLoss",
      pb = "context:webgl",
      Nb = "probe:threw";

    function Wb(bb) {
      let ab;
      try {
        ab = bb.getContext("webgl", {
          powerPreference: Zb.d
        })
      } catch {
        ab = null
      }
      if (null === ab) return null;
      let Ub = null;
      try {
        const bb = ab.getParameter(ab.MAX_TEXTURE_SIZE);
        Ub = "number" === typeof bb && bb > 0 ? bb : null
      } catch {
        Ub = null
      }
      try {
        var Ab;
        null === (Ab = ab.getExtension("WEBGL_lose_context")) || void 0 === Ab || Ab.loseContext()
      } catch {}
      return Ub
    }
    const Hb = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      Ib = "mali_valhall",
      db = new Set(["nvidia_pre_turing"]);

    function Fb(bb) {
      return function(bb) {
        try {
          return bb()
        } catch {
          return null
        }
      }((() => {
        var ab, Ub, Ab, Eb;
        const Yb = null !== (ab = null === (Ub = bb.info) || void 0 === Ub ? void 0 : Ub.vendor) && void 0 !== ab ? ab : "";
        return "windows" === (0, Pb.getOperatingSystem)() && "" !== Yb && "intel" !== (0, Pb.normaliseGpuVendor)(Yb) ? null : ((0, Pb.seedGpuVendor)(Yb), Bb = (0, Mb.i)(), eb = (0, Tb.f)(Yb, null !== (Ab = null === (Eb = bb.info) || void 0 === Eb ? void 0 : Eb.architecture) && void 0 !== Ab ? Ab : ""), Hb.has(Bb) ? "android_arm" === Bb && eb === Ib ? "webgpu_default" : "webgl_default" : null);
        var Bb, eb
      }))
    }

    function hb() {
      var bb;
      return {
        gpu: null !== (bb = navigator.gpu) && void 0 !== bb ? bb : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(bb) {
          let ab, Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xb.c;
          try {
            ab = bb.getContext("webgl")
          } catch {
            ab = null
          }
          if (null === ab) return [pb];
          const Ab = [];
          try {
            for (const Mb of Ub.extensions) null === ab.getExtension(Mb) && Ab.push(Mb);
            for (const [Mb, Tb] of Object.entries(Ub.limits)) {
              const bb = ab[Mb],
                Ub = "number" === typeof bb ? ab.getParameter(bb) : null;
              ("number" !== typeof Ub || Ub < Tb) && Ab.push(`limit:${Mb}`)
            }
            const bb = ab.getShaderPrecisionFormat(ab.VERTEX_SHADER, ab.HIGH_FLOAT);
            (null === bb || bb.precision < Ub.vertexHighFloatBits) && Ab.push("precision:vertex_high_float")
          } catch {
            Ab.push(Nb)
          }
          try {
            var Mb;
            null === (Mb = ab.getExtension("WEBGL_lose_context")) || void 0 === Mb || Mb.loseContext()
          } catch {}
          return Ab
        }(document.createElement("canvas")),
        offAfterLoss: bb => Gb((() => bb ? (0, Rb.A)() : Eb.c.isWebGpuOffAfterLoss())),
        oldIntelDriver: bb => Gb((() => (0, kb.i)(bb))),
        intelGen9: bb => Gb((() => (0, kb.t)(bb))),
        gpuClassWebGlArm: Fb,
        storeGpuClassVerdict: bb => {
          jb.f.setItem(kb.H, bb)
        },
        gpuClassOnWebGl: bb => (0, yb.c)(bb),
        override: () => function() {
          if ((0, Yb.s)("render") && "webgl1" === (0, Yb.r)("renderer")) return "webgl1";
          const bb = [() => new URLSearchParams(window.location.search).get(vb.c), () => jb.f.getItem(vb.g), () => {
            const bb = localStorage.getItem(mb);
            return null !== bb && localStorage.removeItem(mb), "1" === bb ? "webgl2" : null
          }];
          for (const ab of bb) {
            let bb = null;
            try {
              bb = Qb(ab())
            } catch {}
            if (null !== bb) return bb
          }
          return null
        }(),
        claimed: () => Qb((0, Bb.m)()),
        webGpuSetting: () => {
          const bb = jb.f.getItem(Ab.ic);
          return "boolean" === typeof bb ? bb : null
        },
        heldBack: () => yb.e,
        storeHoldbackSpared: bb => {
          jb.f.setItem(kb.F, bb)
        },
        intelGen9OnWebGl: () => yb.f,
        QX: () => Gb((() => (0, Lb.g)(Pb.featureFlags.settings.canUseShaderPacks))),
        windows: () => Gb((() => "windows" === (0, Pb.getOperatingSystem)()))
      }
    }

    function Gb(bb) {
      try {
        return bb()
      } catch {
        return !1
      }
    }

    function Qb(bb) {
      return "lite" === bb ? "webgpu" : "webgl2" === bb || "babylon" === bb ? "webgl" : null
    }
    async function qb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hb();
      const ab = await async function(bb) {
        const ab = function(bb) {
            const ab = bb.override(),
              Ub = bb.webGpuSetting(),
              Ab = null === ab && !0 !== Ub && bb.QX(),
              Mb = null !== ab || null !== Ub || Ab ? null : bb.claimed(),
              Tb = null !== ab ? "override" : !0 === Ub ? "setting" : Ab ? "pack" : !1 === Ub ? "setting" : null !== Mb ? "claim" : "default",
              Eb = function(bb) {
                return "override" === bb || "setting" === bb
              }(Tb);
            if ("webgl" === ab || "webgl1" === ab || "webgl" === Mb || "setting" === Tb && !1 === Ub) return {
              source: Tb,
              asked: Eb,
              refused: "not_requested"
            };
            if (!bb.gpu) return {
              source: Tb,
              asked: Eb,
              refused: "no_webgpu_api"
            };
            const Yb = "default" === Tb && bb.heldBack();
            if (Yb && !bb.windows()) return {
              source: Tb,
              asked: Eb,
              refused: "webgl_holdback"
            };
            if (!Eb && bb.offAfterLoss("pack" === Tb)) return {
              source: Tb,
              asked: Eb,
              refused: Yb ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: Tb,
              asked: Eb,
              heldBack: Yb,
              gpu: bb.gpu
            }
          }(bb),
          {
            source: Ub
          } = ab,
          Ab = !ab.asked,
          Mb = "gpu" in ab && ab.heldBack,
          Eb = function(bb) {
            return Mb && "none" !== bb ? {
              reason: "webgl_holdback",
              adapter: null,
              source: Ub
            } : {
              reason: bb,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: Ub
            }
          };
        if (!("gpu" in ab)) return Eb(ab.refused);
        let Yb;
        try {
          Yb = await (0, ib.o)((0, Db.m)(ab.gpu), Aa, `requestAdapter didn't settle in ${Aa/1e3} s`)
        } catch {
          return Eb("adapter_error")
        }
        if ("string" === typeof Yb) return Eb(Yb);
        const Bb = (0, Db.c)(Yb);
        if ((0, Db.f)(Yb)) return Eb("software_adapter", Bb);
        const eb = bb.windows() && function(bb) {
          return db.has((0, Tb.f)(bb.vendor, bb.architecture))
        }(Bb);
        if (bb.storeHoldbackSpared(eb), Mb && !eb) return Eb("webgl_holdback");
        const vb = bb.intelGen9(Yb),
          Lb = vb ? null : bb.gpuClassWebGlArm(Yb);
        if (bb.storeGpuClassVerdict(null !== Lb && void 0 !== Lb && Lb), Ab && bb.oldIntelDriver(Yb)) return Eb("old_intel_driver", Bb);
        if ("default" === Ub && bb.intelGen9OnWebGl() && vb) return Eb("intel_gen9", Bb);
        if ("default" === Ub && null !== Lb && bb.gpuClassOnWebGl(Lb)) return Eb("gpu_class_webgl", Bb);
        return Eb("none", Bb)
      }(bb);
      if ("none" === ab.reason) return {
        backend: "webgpu",
        ...ab
      };
      if ("webgl1" !== bb.override() && bb.webgl2()) return {
        backend: "webgl",
        ...ab
      };
      const Ub = bb.webgl1();
      return 0 === Ub.length ? {
        backend: "webgl1",
        ...ab
      } : {
        missing: Ub
      }
    }
    let ub = !1;
    async function rb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hb();
      if (null === bb) return null;
      const Ub = await qb(ab);
      return ub = !("missing" in Ub) && "webgpu" === Ub.backend && "claim" === Ub.source, "missing" in Ub ? Ub : {
        ...Ub,
        load: bb[Ub.backend]
      }
    }
    async function Kb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hb().gpu,
        Ab = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== bb.backend) return !1;
      const Mb = tb(ab, "indirectDraws", "off", "on");
      if (null !== Mb) return Mb;
      if (null !== bb.adapter && (0, kb.v)(bb.adapter, Ab)) return !0;
      if (null === Ub) return !1;
      try {
        var Tb;
        const bb = await (0, ib.o)(Ub.requestAdapter({
          powerPreference: "low-power"
        }), Aa, `the low-power requestAdapter didn't settle in ${Aa/1e3} s`);
        return (0, kb.v)(null !== (Tb = null === bb || void 0 === bb ? void 0 : bb.info) && void 0 !== Tb ? Tb : {}, Ab)
      } catch (Eb) {
        return Eb instanceof ib.h
      }
    }

    function ob(bb, ab, Ub) {
      if ("webgpu" !== bb.backend) return !1;
      const Ab = tb(ab, "terrainFetch", "texture", "storage");
      return null !== Ab ? Ab : null !== bb.adapter && (0, kb.l)(bb.adapter, Ub)
    }

    function lb(bb, ab, Ub) {
      if ("webgpu" !== bb.backend) return !1;
      const Ab = tb(ab, "sceneDepth", "off", "on");
      return null !== Ab ? Ab : null !== bb.adapter && (0, kb.p)(bb.adapter, Ub)
    }

    function tb(bb, ab, Ub, Ab) {
      const Mb = new URLSearchParams(bb).get(ab),
        Tb = null !== Mb && void 0 !== Mb ? Mb : (0, Bb.h)(ab);
      return Tb !== Ub && Tb !== Ab ? null : (ub ||= null === Mb, Tb === Ub)
    }

    function wb(bb, ab) {
      return "webgl" === bb.backend && (0, Tb.o)(ab)
    }

    function sb(bb) {
      return null !== bb && "missing" in bb
    }

    function gb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eb.c;
      try {
        const Ub = "start_failed" === bb || "pipeline_failed" === bb,
          Ab = ab.turnOffWebGpuAfterDeviceLoss(Ub ? "visible" : (0, Rb.i)((0, Xb.f)()));
        return !ub || Ab && !ab.isWebGpuOffAfterLoss() || (0, Bb.u)("webgpuLoss"), ab.isWebGpuOffAfterLoss() && "webgpu" === Qb(jb.f.getItem(vb.g)) && jb.f.removeItem(vb.g), (0, Yb.s)("webgpuloss") && (0, eb.e)((ab => {
          ab.noteWebGpuLoss("wasm", Ab ? bb : `${bb}, which storage didn't keep`, null)
        })), Ab
      } catch {
        return !1
      }
    }

    function Cb(bb) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !cb()) ? gb(bb) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Vb = "framePacing";

    function Ob(bb) {
      const ab = new URLSearchParams(bb).get(Vb);
      return null !== ab && /^\d{1,9}$/.test(ab) ? Number(ab) : void 0
    }

    function cb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === Qb(new URLSearchParams(bb).get(vb.c))
      } catch {
        return !1
      }
    }

    function Jb(bb) {
      return !!nb(bb) || bb instanceof Error && !(bb instanceof WebAssembly.RuntimeError) && bb.message.startsWith(`${zb.h.RenderSurfaceUnusable}:`)
    }

    function nb(bb) {
      const {
        name: ab,
        message: Ub
      } = null !== bb && void 0 !== bb ? bb : {};
      return "InvalidStateError" === ab && "string" === typeof Ub && Ub.startsWith("GPUDevice.")
    }

    function Sb(bb) {
      const ab = bb;
      return "function" === typeof ab.fUb && "function" === typeof ab.mUb ? ab : null
    }

    function ba(bb) {
      return "function" === typeof bb.FUb ? bb : null
    }
    const aa = "openRenderer";

    function Ua(bb) {
      const ab = null === bb || void 0 === bb ? void 0 : bb.sMb();
      return void 0 === ab ? void 0 : new Error(ab)
    }
    const Aa = 5e3,
      Ma = 15e3;

    function Ta(bb, ab, Ub, Ab, Mb, Tb) {
      return (0, ib.o)(function(bb, ab, Ub, Ab, Mb, Tb) {
        return (0, fb.h)(bb, ab, (() => bb.FUb(Ub, Ab, Mb, Tb.indirectHangs, Tb.storagePullBreaks, Tb.splitPassBreaks, Tb.framesAhead, Tb.instancedTerrainSlow)))
      }(bb, ab, Ub, Ab, Mb, Tb), Ma, `${zb.h.RenderSurfaceUnusable}: the renderer didn't open in ${Ma/1e3} s`, Ya)
    }
    async function Ea(bb, ab, Ub, Ab, Mb, Tb) {
      if ("function" !== typeof bb.dTb) throw new Error("this core has no set_renderer");
      const Eb = await Ta(ab, aa, Ub, Mb, Ab, Tb);
      try {
        bb.dTb(Eb)
      } catch (Yb) {
        throw Ya(Eb), Yb
      }
    }

    function Ya(bb) {
      try {
        bb.free()
      } catch {}
    }
  },
  39907: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab
    });
    const Ab = {
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
  39932: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Bb,
      d: () => Yb
    });
    var Ab = Ub(653),
      Mb = Ub(660);

    function Tb(bb, ab) {
      const Ub = null === ab ? void 0 : Ab.d.get(ab);
      return "all" === Ub || "webgl" === Ub && "webgpu" !== bb.backend ? ab : null
    }

    function Eb(bb) {
      return "software_adapter" === bb.reason ? null : bb.adapter
    }

    function Yb(bb, ab) {
      const Ub = (0, Ab.p)();
      return null === Ub ? null : (0, Ab.e)(Eb(bb), Ub, ab ? Ab.j : Ab.g)
    }

    function Bb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mb.l;
      const Ab = Tb(bb, ab);
      return null !== Ab && "webgl" === bb.backend && Ub(Ab) ? null : Ab
    }
  },
  39916: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      h: () => vb,
      l: () => Eb,
      n: () => Bb
    });
    var Ab = Ub(35745);
    class Mb extends Error {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${bb}: the module trapped${Ub?" in an earlier call":""}: ${String(ab)}`, {
          cause: ab
        }), this.site = bb, this.trap = ab, this.earlier = Ub, this.name = "ModuleTrapError", ab instanceof Error && void 0 !== ab.stack && (this.stack = `${this.name}: ${this.message}\n${ab.stack}`)
      }
    }
    const Tb = new WeakMap;

    function Eb(bb) {
      return Tb.has(bb)
    }

    function Yb(bb, ab) {
      Tb.has(bb) || Tb.set(bb, ab)
    }

    function Bb(bb, ab) {
      return !!(0, Ab.d)(ab) && (Yb(bb, ab), !0)
    }
    const eb = [
      ["error", bb => bb.error],
      ["unhandledrejection", bb => bb.reason]
    ];

    function vb(bb, ab, Ub) {
      let Eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Tb.has(bb) ? Promise.reject(new Mb(ab, Tb.get(bb), !0)) : new Promise(((Tb, Bb) => {
        const vb = Ub => {
            Yb(bb, Ub), Xb(), Bb(new Mb(ab, Ub))
          },
          Lb = bb => {
            bb instanceof WebAssembly.RuntimeError ? vb(bb) : (Xb(), Bb(bb))
          },
          Pb = eb.map((bb => {
            let [ab, Ub] = bb;
            return [ab, bb => {
              const ab = Ub(bb);
              (0, Ab.d)(ab) && vb(ab)
            }]
          })),
          Xb = () => {
            for (const [bb, ab] of Pb) null === Eb || void 0 === Eb || Eb.removeEventListener(bb, ab)
          };
        for (const [bb, ab] of Pb) null === Eb || void 0 === Eb || Eb.addEventListener(bb, ab);
        let jb;
        try {
          jb = Ub()
        } catch (Rb) {
          return void Lb(Rb)
        }
        jb.then((bb => {
          Xb(), Tb(bb)
        }), Lb)
      }))
    }
  },
  39940: (bb, ab, Ub) => {
    Ub.d(ab, {
      C: () => Kb,
      G: () => hb,
      K: () => mb,
      O: () => db,
      R: () => Fb,
      U: () => Qb,
      W: () => Ib,
      c: () => fb,
      d: () => zb,
      f: () => qb,
      h: () => Gb,
      k: () => Db,
      o: () => ib,
      s: () => yb,
      t: () => Nb,
      x: () => Hb,
      y: () => ob
    });
    var Ab = Ub(212),
      Mb = Ub(283),
      Tb = Ub(19),
      Eb = Ub(299),
      Yb = Ub(31),
      Bb = Ub(39902),
      eb = Ub(39932),
      vb = Ub(39942),
      Lb = (Ub(39921), Ub(39946)),
      Pb = Ub(39955);
    const Xb = "wasmJoinBuild";
    let jb = null,
      Rb = null,
      kb = null;

    function yb(bb) {
      kb = bb
    }
    let Zb = !1;

    function Db() {
      Zb = !0
    }

    function zb() {
      return Zb
    }
    let xb = !1;

    function ib() {
      xb = !0
    }

    function fb() {
      return xb
    }

    function mb() {
      return kb
    }
    let pb = null;

    function Nb(bb) {
      pb = bb, (0, Eb.b)(bb)
    }
    const Wb = "wasmClientRenderLost";

    function Hb() {
      Yb.j.setItem(Wb, !0)
    }

    function Ib() {
      return !0 === Yb.j.getItem(Wb)
    }

    function db() {
      return pb
    }

    function Fb() {
      return null === jb && (Yb.f.removeItem("wasmLastPick"), Yb.f.removeItem("wasmGuessVerdict"), (0, Eb.i)(), jb = (0, Bb.B)(vb.e).then((bb => (null === bb || (0, Bb.p)(bb) || (Rb = Lb.e[bb.backend], Tb.c.followGameGpu("webgpu" === bb.backend ? bb.adapter : null), "webgpu" === bb.backend && (0, Pb.c)()), bb)))), jb
    }

    function hb() {
      return Rb
    }

    function Gb(bb) {
      return bb ? bb.load() : Promise.resolve().then((function() {
        var bb = new Error("Cannot find module '@bloxd/wasm/client'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      })).then((bb => bb.bloxdWasmClient))
    }

    function Qb(bb) {
      Yb.f.setItem(Xb, bb)
    }
    async function qb() {
      if (null === vb.e) return Gb(null);
      const bb = Yb.f.getItem(Xb);
      let ab = "none" === bb ? null : "webgl";
      return null !== bb && "none" !== bb && ("string" === typeof bb && void 0 !== (0, Ab.c)(vb.e, bb) ? ab = bb : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(bb)}, is none of this client's: guessing WebGL2's`)), null === ab ? null : vb.e[ab]()
    }
    let ub = null,
      rb = null;

    function Kb() {
      return ub ??= Fb().then((async bb => {
        var ab;
        const Ub = null !== bb && !(0, Bb.p)(bb),
          Ab = {
            indirectHangs: Ub && await (0, Bb.C)(bb, window.location.search),
            storagePullBreaks: Ub && (0, Bb.K)(bb, window.location.search),
            splitPassBreaks: Ub && (0, Bb.H)(bb, window.location.search),
            framesAhead: (0, Bb.k)(window.location.search),
            instancedTerrainSlow: Ub && (0, Bb.F)(bb, null !== (ab = (0, eb.d)(bb, !1)) && void 0 !== ab ? ab : (0, Mb.c)())
          };
        return rb = Ab.indirectHangs, Ab
      })), ub
    }

    function ob() {
      return rb
    }
  },
  39946: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    const Ab = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39942: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      e: () => Ab
    });
    const Ab = {
        webgpu: async () => (await Ub.e(8).then((() => Ub(42348)))).bloxdWasmWebgpu,
        webgl: async () => (await Ub.e(6).then((() => Ub(42354)))).bloxdWasmWebgl,
        webgl1: async () => (await Ub.e(7).then((() => Ub(42361)))).bloxdWasmWebgl1
      },
      Mb = async () => (await Ub.e(5).then((() => Ub(42372)))).compileAnimationPackInWasm
  },
  39961: (bb, ab, Ub) => {
    function Ab() {
      return Ub(39967)
    }

    function Mb() {
      return Ub(39976)
    }

    function Tb(bb) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(bb)
    }
    Ub.d(ab, {
      e: () => Tb,
      g: () => Ab,
      k: () => Mb
    })
  },
  39955: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Yb,
      c: () => Bb
    });
    var Ab = Ub(101);
    const Mb = "webgpuPipeline";

    function Tb(bb) {
      return bb.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let Eb = null;

    function Yb() {
      if (null === Eb) try {
        bb = (0, Ab.getBrowserName)(), ab = (0, Ab.getBrowserVersion)(), Ub = (0, Ab.getOperatingSystem)(), Mb = (0, Ab.getOperatingSystemVersion)(), Eb = `${bb.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===ab?"unknown":Tb(ab)}-${Ub}${void 0===Mb?"":`_${Tb(Mb)}`}`
      } catch (Yb) {
        console.warn("The user agent couldn't be read for its browser code", Yb), Eb = "unknown"
      }
      var bb, ab, Ub, Mb;
      return Eb
    }

    function Bb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const ab = `WGPU-${Yb()}`,
        Ab = (bb, Ab) => {
          const {
            reason: Tb,
            message: Eb
          } = Ab, Yb = {
            pipeline: null !== bb && void 0 !== bb ? bb : "",
            reason: String(Tb),
            browserMessage: String(Eb)
          };
          Promise.all([Ub.e(262), Ub.e(86)]).then((() => Ub(40052))).then((bb => {
            let {
              reportCrash: Ub
            } = bb;
            Ub({
              kind: "coreError",
              code: ab,
              site: Mb,
              fatal: !1,
              message: `${Yb.pipeline} ${Yb.reason}: ${Yb.browserMessage}`,
              details: Yb,
              error: Ab
            })
          })).catch((bb => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", bb)
          }))
        },
        Tb = bb.createRenderPipelineAsync;
      bb.createRenderPipelineAsync = function(bb) {
        return Tb.call(this, bb).catch((ab => {
          throw Ab(bb.label, ab), ab
        }))
      };
      const Eb = bb.createComputePipelineAsync;
      bb.createComputePipelineAsync = function(bb) {
        return Eb.call(this, bb).catch((ab => {
          throw Ab(bb.label, ab), ab
        }))
      }
    }
  },
  39893: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/bloxd_wasm_models_bg.98fed3206659a71f45aa.wasm"
  },
  39884: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/bloxd_wasm_workers_bg.5b6a53c4ae05a70e295f.wasm"
  },
  39967: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39976: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  39882: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      g: () => Ab
    });
    const Ab = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new Ub.U(Ub(39884))
      }
    };
    const Mb = {
      name: "bloxd_wasm_models",
      url: function() {
        return new Ub.U(Ub(39893))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);