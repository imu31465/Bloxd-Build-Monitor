export const id = 88;
export const ids = [88];
export const modules = {
  4564: (bb, ub, hb) => {
    hb.d(ub, {
      Ab: () => vb,
      B: () => Gb,
      C: () => ob,
      D: () => fb,
      Db: () => pb,
      Eb: () => jb,
      Gb: () => rb,
      H: () => ab,
      Kb: () => tb,
      L: () => Hb,
      Lb: () => Ib,
      Mb: () => eb,
      N: () => Sb,
      Q: () => Ab,
      Qb: () => sb,
      R: () => Yb,
      Tb: () => Mb,
      U: () => Xb,
      Vb: () => Cb,
      Wb: () => db,
      Y: () => Zb,
      _b: () => qb,
      ab: () => nb,
      b: () => Vb,
      cc: () => Ob,
      eb: () => xb,
      f: () => yb,
      fb: () => zb,
      fc: () => Fb,
      hb: () => Db,
      i: () => wb,
      ib: () => gb,
      l: () => Wb,
      m: () => Eb,
      mb: () => Pb,
      ob: () => mb,
      p: () => Kb,
      r: () => lb,
      s: () => Ub,
      sb: () => Nb,
      v: () => Lb,
      vb: () => ib,
      x: () => Bb,
      xb: () => Jb
    });
    const Bb = 32,
      Ob = 33.333333333333336,
      Gb = {
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
      Ub = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Lb = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Yb = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Sb = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      ab = 7,
      Hb = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      wb = {
        Look: 0,
        Remesh: 1
      },
      Zb = 8,
      Xb = 1,
      pb = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      ob = {
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
      Ab = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      lb = {
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
      Kb = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Wb = 4,
      Cb = 4,
      db = 65535,
      rb = {
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
      jb = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      nb = 88,
      Db = 0,
      xb = 24,
      zb = 48,
      gb = 80,
      ib = {
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
      vb = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      tb = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Jb = {
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
      eb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Nb = 65535,
      sb = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Mb = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      mb = 2,
      Ib = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Pb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      qb = {
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
      Eb = {
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
      yb = {
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
      Vb = 8,
      Fb = {
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
      fb = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  40244: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb
    });
    const Bb = 1 << 20,
      Ob = 1 << 21,
      Gb = 1024,
      Ub = 2048;

    function Lb(bb, ub, hb) {
      const Lb = bb + Bb,
        Yb = ub + Gb,
        Sb = hb + Bb;
      return Lb < 0 || Lb >= Ob || Sb < 0 || Sb >= Ob || Yb < 0 || Yb >= Ub ? -1 : (Lb * Ob + Sb) * Ub + Yb
    }
  },
  40238: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      h: () => Ub,
      i: () => Ob,
      m: () => Gb,
      p: () => ab,
      t: () => Sb,
      u: () => Yb,
      y: () => Lb
    });
    hb(3244);
    hb(40244);

    function Bb(bb) {}

    function Ob(bb) {}

    function Gb(bb) {}

    function Ub(bb) {}

    function Lb(bb) {}

    function Yb(bb, ub, hb) {}

    function Sb(bb) {}

    function ab(bb) {}
  },
  40212: (bb, ub, hb) => {
    hb.d(ub, {
      C: () => mb,
      F: () => Eb,
      J: () => bu,
      L: () => Pb,
      O: () => Ib,
      Q: () => Fb,
      T: () => Vb,
      X: () => hu,
      Z: () => Tb,
      _: () => xb,
      d: () => uu,
      f: () => Uu,
      j: () => kb,
      l: () => Rb,
      p: () => yb,
      s: () => Qb,
      w: () => cb,
      y: () => Gu,
      z: () => Mb
    });
    var Bb = hb(298),
      Ob = hb(260),
      Gb = hb(263),
      Ub = hb(13),
      Lb = hb(2633),
      Yb = hb(625),
      Sb = hb(4274),
      ab = hb(2585),
      Hb = hb(3237),
      wb = hb(86),
      Zb = hb(290),
      Xb = hb(29),
      pb = hb(270),
      ob = hb(104),
      Ab = hb(597),
      lb = hb(113),
      Kb = hb(111),
      Wb = hb(4564),
      Cb = hb(40221),
      db = hb(1672),
      rb = hb(40230);
    const jb = "bloxd-webgpuOffAfterLoss",
      nb = "context:webgl",
      Db = "probe:threw";

    function xb(bb) {
      let ub;
      try {
        ub = bb.getContext("webgl", {
          powerPreference: lb.b
        })
      } catch {
        ub = null
      }
      if (null === ub) return null;
      let hb = null;
      try {
        const bb = ub.getParameter(ub.MAX_TEXTURE_SIZE);
        hb = "number" === typeof bb && bb > 0 ? bb : null
      } catch {
        hb = null
      }
      try {
        var Bb;
        null === (Bb = ub.getExtension("WEBGL_lose_context")) || void 0 === Bb || Bb.loseContext()
      } catch {}
      return hb
    }
    const zb = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      gb = "mali_valhall",
      ib = new Set(["nvidia_pre_turing"]);

    function vb(bb) {
      return function(bb) {
        try {
          return bb()
        } catch {
          return null
        }
      }((() => {
        var ub, hb, Bb, Ub;
        const Lb = null !== (ub = null === (hb = bb.info) || void 0 === hb ? void 0 : hb.vendor) && void 0 !== ub ? ub : "";
        return "windows" === (0, wb.getOperatingSystem)() && "" !== Lb && "intel" !== (0, wb.normaliseGpuVendor)(Lb) ? null : ((0, wb.seedGpuVendor)(Lb), Yb = (0, Ob.k)(), Sb = (0, Gb.h)(Lb, null !== (Bb = null === (Ub = bb.info) || void 0 === Ub ? void 0 : Ub.architecture) && void 0 !== Bb ? Bb : ""), zb.has(Yb) ? "android_arm" === Yb && Sb === gb ? "webgpu_default" : "webgl_default" : null);
        var Yb, Sb
      }))
    }

    function tb() {
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
          let ub, hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cb.d;
          try {
            ub = bb.getContext("webgl")
          } catch {
            ub = null
          }
          if (null === ub) return [nb];
          const Bb = [];
          try {
            for (const Ob of hb.extensions) null === ub.getExtension(Ob) && Bb.push(Ob);
            for (const [Ob, Gb] of Object.entries(hb.limits)) {
              const bb = ub[Ob],
                hb = "number" === typeof bb ? ub.getParameter(bb) : null;
              ("number" !== typeof hb || hb < Gb) && Bb.push(`limit:${Ob}`)
            }
            const bb = ub.getShaderPrecisionFormat(ub.VERTEX_SHADER, ub.HIGH_FLOAT);
            (null === bb || bb.precision < hb.vertexHighFloatBits) && Bb.push("precision:vertex_high_float")
          } catch {
            Bb.push(Db)
          }
          try {
            var Ob;
            null === (Ob = ub.getExtension("WEBGL_lose_context")) || void 0 === Ob || Ob.loseContext()
          } catch {}
          return Bb
        }(document.createElement("canvas")),
        offAfterLoss: bb => Jb((() => bb ? (0, pb.A)() : Ub.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: bb => Jb((() => (0, ob.i)(bb))),
        intelGen9: bb => Jb((() => (0, ob.q)(bb))),
        gpuClassWebGlArm: vb,
        storeGpuClassVerdict: bb => {
          Xb.j.setItem(ob.F, bb)
        },
        gpuClassOnWebGl: bb => (0, Ab.c)(bb),
        override: () => function() {
          if ((0, Lb.o)("render") && "webgl1" === (0, Lb.n)("renderer")) return "webgl1";
          const bb = [() => new URLSearchParams(window.location.search).get(ab.b), () => Xb.j.getItem(ab.f), () => {
            const bb = localStorage.getItem(jb);
            return null !== bb && localStorage.removeItem(jb), "1" === bb ? "webgl2" : null
          }];
          for (const ub of bb) {
            let bb = null;
            try {
              bb = eb(ub())
            } catch {}
            if (null !== bb) return bb
          }
          return null
        }(),
        claimed: () => eb((0, Yb.h)()),
        webGpuSetting: () => {
          const bb = Xb.j.getItem(Bb.tc);
          return "boolean" === typeof bb ? bb : null
        },
        heldBack: () => Ab.f,
        storeHoldbackSpared: bb => {
          Xb.j.setItem(ob.D, bb)
        },
        intelGen9OnWebGl: () => Ab.j,
        vZ: () => Jb((() => (0, Hb.e)(wb.featureFlags.settings.canUseShaderPacks))),
        windows: () => Jb((() => "windows" === (0, wb.getOperatingSystem)()))
      }
    }

    function Jb(bb) {
      try {
        return bb()
      } catch {
        return !1
      }
    }

    function eb(bb) {
      return "lite" === bb ? "webgpu" : "webgl2" === bb || "babylon" === bb ? "webgl" : null
    }
    async function Nb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tb();
      const ub = await async function(bb) {
        const ub = function(bb) {
            const ub = bb.override(),
              hb = bb.webGpuSetting(),
              Bb = null === ub && !0 !== hb && bb.vZ(),
              Ob = null !== ub || null !== hb || Bb ? null : bb.claimed(),
              Gb = null !== ub ? "override" : !0 === hb ? "setting" : Bb ? "pack" : !1 === hb ? "setting" : null !== Ob ? "claim" : "default",
              Ub = function(bb) {
                return "override" === bb || "setting" === bb
              }(Gb);
            if ("webgl" === ub || "webgl1" === ub || "webgl" === Ob || "setting" === Gb && !1 === hb) return {
              source: Gb,
              asked: Ub,
              refused: "not_requested"
            };
            if (!bb.gpu) return {
              source: Gb,
              asked: Ub,
              refused: "no_webgpu_api"
            };
            const Lb = "default" === Gb && bb.heldBack();
            if (Lb && !bb.windows()) return {
              source: Gb,
              asked: Ub,
              refused: "webgl_holdback"
            };
            if (!Ub && bb.offAfterLoss("pack" === Gb)) return {
              source: Gb,
              asked: Ub,
              refused: Lb ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: Gb,
              asked: Ub,
              heldBack: Lb,
              gpu: bb.gpu
            }
          }(bb),
          {
            source: hb
          } = ub,
          Bb = !ub.asked,
          Ob = "gpu" in ub && ub.heldBack,
          Ub = function(bb) {
            return Ob && "none" !== bb ? {
              reason: "webgl_holdback",
              adapter: null,
              source: hb
            } : {
              reason: bb,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: hb
            }
          };
        if (!("gpu" in ub)) return Ub(ub.refused);
        let Lb;
        try {
          Lb = await (0, db.q)((0, Kb.p)(ub.gpu), Bu, `requestAdapter didn't settle in ${Bu/1e3} s`)
        } catch {
          return Ub("adapter_error")
        }
        if ("string" === typeof Lb) return Ub(Lb);
        const Yb = (0, Kb.e)(Lb);
        if ((0, Kb.k)(Lb)) return Ub("software_adapter", Yb);
        const Sb = bb.windows() && function(bb) {
          return ib.has((0, Gb.h)(bb.vendor, bb.architecture))
        }(Yb);
        if (bb.storeHoldbackSpared(Sb), Ob && !Sb) return Ub("webgl_holdback");
        const ab = bb.intelGen9(Lb),
          Hb = ab ? null : bb.gpuClassWebGlArm(Lb);
        if (bb.storeGpuClassVerdict(null !== Hb && void 0 !== Hb && Hb), Bb && bb.oldIntelDriver(Lb)) return Ub("old_intel_driver", Yb);
        if ("default" === hb && bb.intelGen9OnWebGl() && ab) return Ub("intel_gen9", Yb);
        if ("default" === hb && null !== Hb && bb.gpuClassOnWebGl(Hb)) return Ub("gpu_class_webgl", Yb);
        return Ub("none", Yb)
      }(bb);
      if ("none" === ub.reason) return {
        backend: "webgpu",
        ...ub
      };
      if ("webgl1" !== bb.override() && bb.webgl2()) return {
        backend: "webgl",
        ...ub
      };
      const hb = bb.webgl1();
      return 0 === hb.length ? {
        backend: "webgl1",
        ...ub
      } : {
        missing: hb
      }
    }
    let sb = !1;
    async function Mb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tb();
      if (null === bb) return null;
      const hb = await Nb(ub);
      return sb = !("missing" in hb) && "webgpu" === hb.backend && "claim" === hb.source, "missing" in hb ? hb : {
        ...hb,
        load: bb[hb.backend]
      }
    }
    async function mb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tb().gpu,
        Bb = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== bb.backend) return !1;
      const Ob = qb(ub, "indirectDraws", "off", "on");
      if (null !== Ob) return Ob;
      if (null !== bb.adapter && (0, ob.r)(bb.adapter, Bb)) return !0;
      if (null === hb) return !1;
      try {
        var Gb;
        const bb = await (0, db.q)(hb.requestAdapter({
          powerPreference: "low-power"
        }).then((async bb => (null !== bb && await (0, Kb.h)(bb), bb))), Bu, `the low-power requestAdapter didn't settle in ${Bu/1e3} s`);
        return (0, ob.r)(null !== (Gb = null === bb || void 0 === bb ? void 0 : bb.info) && void 0 !== Gb ? Gb : {}, Bb)
      } catch (Ub) {
        return Ub instanceof db.i
      }
    }

    function Ib(bb, ub, hb) {
      if ("webgpu" !== bb.backend) return !1;
      const Bb = qb(ub, "terrainFetch", "texture", "storage");
      return null !== Bb ? Bb : null !== bb.adapter && (0, ob.j)(bb.adapter, hb)
    }

    function Pb(bb, ub, hb) {
      if ("webgpu" !== bb.backend) return !1;
      const Bb = qb(ub, "sceneDepth", "off", "on");
      return null !== Bb ? Bb : null !== bb.adapter && (0, ob.m)(bb.adapter, hb)
    }

    function qb(bb, ub, hb, Bb) {
      const Ob = new URLSearchParams(bb).get(ub),
        Gb = null !== Ob && void 0 !== Ob ? Ob : (0, Yb.d)(ub);
      return Gb !== hb && Gb !== Bb ? null : (sb ||= null === Ob, Gb === hb)
    }

    function Eb(bb, ub) {
      return "webgl" === bb.backend && (0, Gb.q)(ub)
    }

    function yb(bb) {
      return null !== bb && "missing" in bb
    }

    function Vb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ub.d;
      try {
        const hb = "start_failed" === bb || "pipeline_failed" === bb,
          Bb = ub.turnOffWebGpuAfterDeviceLoss(hb ? "visible" : (0, pb.j)((0, Zb.h)()));
        return !sb || Bb && !ub.isWebGpuOffAfterLoss() || (0, Yb.p)("webgpuLoss"), ub.isWebGpuOffAfterLoss() && "webgpu" === eb(Xb.j.getItem(ab.f)) && Xb.j.removeItem(ab.f), (0, Lb.o)("webgpuloss") && (0, Sb.c)((ub => {
          ub.noteWebGpuLoss("wasm", Bb ? bb : `${bb}, which storage didn't keep`, null)
        })), Bb
      } catch {
        return !1
      }
    }

    function Fb(bb) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Tb()) ? Vb(bb) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const fb = "framePacing";

    function kb(bb) {
      const ub = new URLSearchParams(bb).get(fb);
      return null !== ub && /^\d{1,9}$/.test(ub) ? Number(ub) : void 0
    }

    function Tb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === eb(new URLSearchParams(bb).get(ab.b))
      } catch {
        return !1
      }
    }

    function cb(bb) {
      return !!Qb(bb) || bb instanceof Error && !(bb instanceof WebAssembly.RuntimeError) && bb.message.startsWith(`${Wb.f.RenderSurfaceUnusable}:`)
    }

    function Qb(bb) {
      const {
        name: ub,
        message: hb
      } = null !== bb && void 0 !== bb ? bb : {};
      return "InvalidStateError" === ub && "string" === typeof hb && hb.startsWith("GPUDevice.")
    }

    function Rb(bb) {
      const ub = bb;
      return "function" === typeof ub.uBb && "function" === typeof ub.hBb ? ub : null
    }

    function bu(bb) {
      return "function" === typeof bb.SBb ? bb : null
    }
    const uu = "openRenderer";

    function hu(bb) {
      const ub = null === bb || void 0 === bb ? void 0 : bb.KGb();
      return void 0 === ub ? void 0 : new Error(ub)
    }
    const Bu = 5e3,
      Ou = 15e3;

    function Gu(bb, ub, hb, Bb, Ob, Gb) {
      return (0, db.q)(function(bb, ub, hb, Bb, Ob, Gb) {
        return (0, rb.e)(bb, ub, (() => bb.SBb(hb, Bb, Ob, Gb.indirectHangs, Gb.storagePullBreaks, Gb.splitPassBreaks, Gb.framesAhead, Gb.instancedTerrainSlow)))
      }(bb, ub, hb, Bb, Ob, Gb), Ou, `${Wb.f.RenderSurfaceUnusable}: the renderer didn't open in ${Ou/1e3} s`, Lu)
    }
    async function Uu(bb, ub, hb, Bb, Ob, Gb) {
      if ("function" !== typeof bb.UUb) throw new Error("this core has no set_renderer");
      const Ub = await Gu(ub, uu, hb, Ob, Bb, Gb);
      try {
        bb.UUb(Ub)
      } catch (Lb) {
        throw Lu(Ub), Lb
      }
    }

    function Lu(bb) {
      try {
        bb.free()
      } catch {}
    }
  },
  40221: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    const Bb = {
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
  40250: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Yb,
      h: () => Lb
    });
    var Bb = hb(637),
      Ob = hb(645);

    function Gb(bb, ub) {
      const hb = null === ub ? void 0 : Bb.e.get(ub);
      return "all" === hb || "webgl" === hb && "webgpu" !== bb.backend ? ub : null
    }

    function Ub(bb) {
      return "software_adapter" === bb.reason ? null : bb.adapter
    }

    function Lb(bb, ub) {
      const hb = (0, Bb.s)();
      return null === hb ? null : (0, Bb.h)(Ub(bb), hb, ub ? Bb.l : Bb.i)
    }

    function Yb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ob.h;
      const Bb = Gb(bb, ub);
      return null !== Bb && "webgl" === bb.backend && hb(Bb) ? null : Bb
    }
  },
  40230: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob,
      e: () => ab,
      i: () => Ub,
      k: () => Yb
    });
    var Bb = hb(35925);
    class Ob extends Error {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${bb}: the module trapped${hb?" in an earlier call":""}: ${String(ub)}`, {
          cause: ub
        }), this.site = bb, this.trap = ub, this.earlier = hb, this.name = "ModuleTrapError", ub instanceof Error && void 0 !== ub.stack && (this.stack = `${this.name}: ${this.message}\n${ub.stack}`)
      }
    }
    const Gb = new WeakMap;

    function Ub(bb) {
      return Gb.has(bb)
    }

    function Lb(bb, ub) {
      Gb.has(bb) || Gb.set(bb, ub)
    }

    function Yb(bb, ub) {
      return !!(0, Bb.i)(ub) && (Lb(bb, ub), !0)
    }
    const Sb = [
      ["error", bb => bb.error],
      ["unhandledrejection", bb => bb.reason]
    ];

    function ab(bb, ub, hb) {
      let Ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Gb.has(bb) ? Promise.reject(new Ob(ub, Gb.get(bb), !0)) : new Promise(((Gb, Yb) => {
        const ab = hb => {
            Lb(bb, hb), Zb(), Yb(new Ob(ub, hb))
          },
          Hb = bb => {
            bb instanceof WebAssembly.RuntimeError ? ab(bb) : (Zb(), Yb(bb))
          },
          wb = Sb.map((bb => {
            let [ub, hb] = bb;
            return [ub, bb => {
              const ub = hb(bb);
              (0, Bb.i)(ub) && ab(ub)
            }]
          })),
          Zb = () => {
            for (const [bb, ub] of wb) null === Ub || void 0 === Ub || Ub.removeEventListener(bb, ub)
          };
        for (const [bb, ub] of wb) null === Ub || void 0 === Ub || Ub.addEventListener(bb, ub);
        let Xb;
        try {
          Xb = hb()
        } catch (pb) {
          return void Hb(pb)
        }
        Xb.then((bb => {
          Zb(), Gb(bb)
        }), Hb)
      }))
    }
  },
  40256: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => mb,
      E: () => tb,
      H: () => jb,
      J: () => ib,
      K: () => vb,
      L: () => eb,
      P: () => gb,
      b: () => rb,
      c: () => Wb,
      g: () => Nb,
      i: () => Jb,
      k: () => Kb,
      l: () => db,
      p: () => Ab,
      s: () => Db,
      u: () => zb,
      y: () => Ib
    });
    var Bb = hb(197),
      Ob = hb(263),
      Gb = hb(13),
      Ub = hb(290),
      Lb = hb(29),
      Yb = hb(40212),
      Sb = hb(40250),
      ab = hb(40264),
      Hb = (hb(40238), hb(40267)),
      wb = hb(40272);
    const Zb = "wasmJoinBuild";
    let Xb = null,
      pb = null,
      ob = null;

    function Ab(bb) {
      ob = bb
    }
    let lb = !1;

    function Kb() {
      lb = !0
    }

    function Wb() {
      return lb
    }
    let Cb = !1;

    function db() {
      Cb = !0
    }

    function rb() {
      return Cb
    }

    function jb() {
      return ob
    }
    let nb = null;

    function Db(bb) {
      nb = bb, (0, Ub.c)(bb)
    }
    const xb = "wasmClientRenderLost";

    function zb() {
      Lb.m.setItem(xb, !0)
    }

    function gb() {
      return !0 === Lb.m.getItem(xb)
    }

    function ib() {
      return nb
    }

    function vb() {
      return null === Xb && (Lb.j.removeItem("wasmLastPick"), Lb.j.removeItem("wasmGuessVerdict"), (0, Ub.l)(), Xb = (0, Yb.z)(ab.f).then((bb => (null === bb || (0, Yb.p)(bb) || (pb = Hb.b[bb.backend], Gb.d.followGameGpu("webgpu" === bb.backend ? bb.adapter : null), "webgpu" === bb.backend && (0, wb.f)()), bb)))), Xb
    }

    function tb() {
      return pb
    }

    function Jb(bb) {
      return bb ? bb.load() : Promise.resolve().then((function() {
        var bb = new Error("Cannot find module '@bloxd/wasm/client'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      })).then((bb => bb.bloxdWasmClient))
    }

    function eb(bb) {
      Lb.j.setItem(Zb, bb)
    }
    async function Nb() {
      if (null === ab.f) return Jb(null);
      const bb = Lb.j.getItem(Zb);
      let ub = "none" === bb ? null : "webgl";
      return null !== bb && "none" !== bb && ("string" === typeof bb && void 0 !== (0, Bb.d)(ab.f, bb) ? ub = bb : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(bb)}, is none of this client's: guessing WebGL2's`)), null === ub ? null : ab.f[ub]()
    }
    let sb = null,
      Mb = null;

    function mb() {
      return sb ??= vb().then((async bb => {
        var ub;
        const hb = null !== bb && !(0, Yb.p)(bb),
          Bb = {
            indirectHangs: hb && await (0, Yb.C)(bb, window.location.search),
            storagePullBreaks: hb && (0, Yb.O)(bb, window.location.search),
            splitPassBreaks: hb && (0, Yb.L)(bb, window.location.search),
            framesAhead: (0, Yb.j)(window.location.search),
            instancedTerrainSlow: hb && (0, Yb.F)(bb, null !== (ub = (0, Sb.h)(bb, !1)) && void 0 !== ub ? ub : (0, Ob.d)())
          };
        return Mb = Bb.indirectHangs, Bb
      })), sb
    }

    function Ib() {
      return Mb
    }
  },
  40267: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    const Bb = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40264: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      f: () => Bb
    });
    const Bb = {
        webgpu: async () => (await hb.e(8).then((() => hb(42637)))).bloxdWasmWebgpu,
        webgl: async () => (await hb.e(6).then((() => hb(42650)))).bloxdWasmWebgl,
        webgl1: async () => (await hb.e(7).then((() => hb(42660)))).bloxdWasmWebgl1
      },
      Ob = async () => (await hb.e(5).then((() => hb(42670)))).compileAnimationPackInWasm
  },
  40278: (bb, ub, hb) => {
    function Bb() {
      return hb(40282)
    }

    function Ob() {
      return hb(40284)
    }

    function Gb(bb) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(bb)
    }
    hb.d(ub, {
      e: () => Gb,
      h: () => Bb,
      i: () => Ob
    })
  },
  40272: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb,
      f: () => Yb
    });
    var Bb = hb(86);
    const Ob = "webgpuPipeline";

    function Gb(bb) {
      return bb.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let Ub = null;

    function Lb() {
      if (null === Ub) try {
        bb = (0, Bb.getBrowserName)(), ub = (0, Bb.getBrowserVersion)(), hb = (0, Bb.getOperatingSystem)(), Ob = (0, Bb.getOperatingSystemVersion)(), Ub = `${bb.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===ub?"unknown":Gb(ub)}-${hb}${void 0===Ob?"":`_${Gb(Ob)}`}`
      } catch (Lb) {
        console.warn("The user agent couldn't be read for its browser code", Lb), Ub = "unknown"
      }
      var bb, ub, hb, Ob;
      return Ub
    }

    function Yb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const ub = `WGPU-${Lb()}`,
        Bb = (bb, Bb) => {
          const {
            reason: Gb,
            message: Ub
          } = Bb, Lb = {
            pipeline: null !== bb && void 0 !== bb ? bb : "",
            reason: String(Gb),
            browserMessage: String(Ub)
          };
          Promise.all([hb.e(263), hb.e(87)]).then((() => hb(40369))).then((bb => {
            let {
              reportCrash: hb
            } = bb;
            hb({
              kind: "coreError",
              code: ub,
              site: Ob,
              fatal: !1,
              message: `${Lb.pipeline} ${Lb.reason}: ${Lb.browserMessage}`,
              details: Lb,
              error: Bb
            })
          })).catch((bb => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", bb)
          }))
        },
        Gb = bb.createRenderPipelineAsync;
      bb.createRenderPipelineAsync = function(bb) {
        return Gb.call(this, bb).catch((ub => {
          throw Bb(bb.label, ub), ub
        }))
      };
      const Ub = bb.createComputePipelineAsync;
      bb.createComputePipelineAsync = function(bb) {
        return Ub.call(this, bb).catch((ub => {
          throw Bb(bb.label, ub), ub
        }))
      }
    }
  },
  40208: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/bloxd_wasm_models_bg.0c9950bb81cc2ebb8cdb.wasm"
  },
  40204: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/bloxd_wasm_workers_bg.63bce317c258eca422da.wasm"
  },
  40282: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40284: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  40198: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob,
      g: () => Bb
    });
    const Bb = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new hb.U(hb(40204))
      }
    };
    const Ob = {
      name: "bloxd_wasm_models",
      url: function() {
        return new hb.U(hb(40208))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);