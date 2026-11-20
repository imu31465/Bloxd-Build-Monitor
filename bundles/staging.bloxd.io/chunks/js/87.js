export const id = 87;
export const ids = [87];
export const modules = {
  4517: (bb, cb, sb) => {
    sb.d(cb, {
      Ab: () => Lb,
      B: () => mb,
      D: () => ob,
      Db: () => Pb,
      Eb: () => Zb,
      G: () => Hb,
      Gb: () => Eb,
      I: () => lb,
      Ib: () => Ob,
      L: () => Ib,
      Lb: () => Gb,
      Nb: () => Nb,
      O: () => Xb,
      Rb: () => Vb,
      S: () => Mb,
      U: () => Yb,
      Vb: () => qb,
      X: () => Jb,
      Xb: () => Wb,
      Yb: () => rb,
      _: () => gb,
      ab: () => hb,
      d: () => wb,
      db: () => Bb,
      f: () => Ab,
      fb: () => zb,
      h: () => fb,
      hb: () => Kb,
      i: () => Cb,
      jb: () => ib,
      k: () => db,
      l: () => eb,
      n: () => Qb,
      nb: () => tb,
      p: () => Tb,
      rb: () => Db,
      sb: () => yb,
      t: () => Ub,
      v: () => kb,
      vb: () => nb,
      xb: () => ub,
      y: () => ab
    });
    const kb = 32,
      Wb = 33.333333333333336,
      ab = {
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
      Tb = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Ub = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Ib = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Hb = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      fb = {
        Look: 0,
        Remesh: 1
      },
      Mb = 8,
      Xb = 1,
      nb = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      mb = {
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
      lb = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Qb = {
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
      eb = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Cb = 4,
      Nb = 4,
      Vb = 65535,
      Lb = {
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
      ub = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Yb = 88,
      hb = 0,
      Jb = 24,
      gb = 48,
      Bb = 80,
      tb = {
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
      yb = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Pb = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Db = {
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
      Eb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      ib = 65535,
      Ob = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Gb = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Kb = 2,
      Zb = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      zb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
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
      db = {
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
      Ab = {
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
      rb = {
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
      ob = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  40231: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub
    });
    const kb = 1 << 20,
      Wb = 1 << 21,
      ab = 1024,
      Tb = 2048;

    function Ub(bb, cb, sb) {
      const Ub = bb + kb,
        Ib = cb + ab,
        Hb = sb + kb;
      return Ub < 0 || Ub >= Wb || Hb < 0 || Hb >= Wb || Ib < 0 || Ib >= Tb ? -1 : (Ub * Wb + Hb) * Tb + Ib
    }
  },
  40223: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      i: () => Tb,
      j: () => Wb,
      l: () => ab,
      n: () => fb,
      p: () => Hb,
      q: () => Ib,
      r: () => Ub
    });
    sb(3230);
    sb(40231);

    function kb(bb) {}

    function Wb(bb) {}

    function ab(bb) {}

    function Tb(bb) {}

    function Ub(bb) {}

    function Ib(bb, cb, sb) {}

    function Hb(bb) {}

    function fb(bb) {}
  },
  40207: (bb, cb, sb) => {
    sb.d(cb, {
      C: () => db,
      F: () => qb,
      G: () => Sb,
      I: () => ob,
      M: () => sc,
      N: () => Fb,
      R: () => Bb,
      d: () => cc,
      e: () => Tc,
      f: () => vb,
      h: () => pb,
      l: () => rb,
      o: () => jb,
      p: () => xb,
      q: () => ac,
      u: () => Zb,
      w: () => zb,
      y: () => wb,
      z: () => bc
    });
    var kb = sb(334),
      Wb = sb(297),
      ab = sb(301),
      Tb = sb(19),
      Ub = sb(2680),
      Ib = sb(683),
      Hb = sb(4254),
      fb = sb(2637),
      Mb = sb(3222),
      Xb = sb(117),
      nb = sb(326),
      mb = sb(37),
      lb = sb(312),
      Qb = sb(145),
      eb = sb(640),
      Cb = sb(160),
      Nb = sb(153),
      Vb = sb(4517),
      Lb = sb(40212),
      ub = sb(1753),
      Yb = sb(40221);
    const hb = "bloxd-webgpuOffAfterLoss",
      Jb = "context:webgl",
      gb = "probe:threw";

    function Bb(bb) {
      let cb;
      try {
        cb = bb.getContext("webgl", {
          powerPreference: Cb.b
        })
      } catch {
        cb = null
      }
      if (null === cb) return null;
      let sb = null;
      try {
        const bb = cb.getParameter(cb.MAX_TEXTURE_SIZE);
        sb = "number" === typeof bb && bb > 0 ? bb : null
      } catch {
        sb = null
      }
      try {
        var kb;
        null === (kb = cb.getExtension("WEBGL_lose_context")) || void 0 === kb || kb.loseContext()
      } catch {}
      return sb
    }
    const tb = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      yb = "mali_valhall",
      Pb = new Set(["nvidia_pre_turing"]);

    function Db(bb) {
      return function(bb) {
        try {
          return bb()
        } catch {
          return null
        }
      }((() => {
        var cb, sb, kb, Tb;
        const Ub = null !== (cb = null === (sb = bb.info) || void 0 === sb ? void 0 : sb.vendor) && void 0 !== cb ? cb : "";
        return "windows" === (0, Xb.getOperatingSystem)() && "" !== Ub && "intel" !== (0, Xb.normaliseGpuVendor)(Ub) ? null : ((0, Xb.seedGpuVendor)(Ub), Ib = (0, Wb.i)(), Hb = (0, ab.f)(Ub, null !== (kb = null === (Tb = bb.info) || void 0 === Tb ? void 0 : Tb.architecture) && void 0 !== kb ? kb : ""), tb.has(Ib) ? "android_arm" === Ib && Hb === yb ? "webgpu_default" : "webgl_default" : null);
        var Ib, Hb
      }))
    }

    function Eb() {
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
          let cb, sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lb.d;
          try {
            cb = bb.getContext("webgl")
          } catch {
            cb = null
          }
          if (null === cb) return [Jb];
          const kb = [];
          try {
            for (const Wb of sb.extensions) null === cb.getExtension(Wb) && kb.push(Wb);
            for (const [Wb, ab] of Object.entries(sb.limits)) {
              const bb = cb[Wb],
                sb = "number" === typeof bb ? cb.getParameter(bb) : null;
              ("number" !== typeof sb || sb < ab) && kb.push(`limit:${Wb}`)
            }
            const bb = cb.getShaderPrecisionFormat(cb.VERTEX_SHADER, cb.HIGH_FLOAT);
            (null === bb || bb.precision < sb.vertexHighFloatBits) && kb.push("precision:vertex_high_float")
          } catch {
            kb.push(gb)
          }
          try {
            var Wb;
            null === (Wb = cb.getExtension("WEBGL_lose_context")) || void 0 === Wb || Wb.loseContext()
          } catch {}
          return kb
        }(document.createElement("canvas")),
        offAfterLoss: bb => ib((() => bb ? (0, lb.A)() : Tb.d.isWebGpuOffAfterLoss())),
        oldIntelDriver: bb => ib((() => (0, Qb.f)(bb))),
        intelGen9: bb => ib((() => (0, Qb.p)(bb))),
        gpuClassWebGlArm: Db,
        storeGpuClassVerdict: bb => {
          mb.h.setItem(Qb.z, bb)
        },
        gpuClassOnWebGl: bb => (0, eb.e)(bb),
        override: () => function() {
          if ((0, Ub.q)("render") && "webgl1" === (0, Ub.p)("renderer")) return "webgl1";
          const bb = [() => new URLSearchParams(window.location.search).get(fb.c), () => mb.h.getItem(fb.f), () => {
            const bb = localStorage.getItem(hb);
            return null !== bb && localStorage.removeItem(hb), "1" === bb ? "webgl2" : null
          }];
          for (const cb of bb) {
            let bb = null;
            try {
              bb = Ob(cb())
            } catch {}
            if (null !== bb) return bb
          }
          return null
        }(),
        claimed: () => Ob((0, Ib.h)()),
        webGpuSetting: () => {
          const bb = mb.h.getItem(kb.nc);
          return "boolean" === typeof bb ? bb : null
        },
        heldBack: () => eb.f,
        storeHoldbackSpared: bb => {
          mb.h.setItem(Qb.y, bb)
        },
        intelGen9OnWebGl: () => eb.g,
        Qm: () => ib((() => (0, Mb.e)(Xb.featureFlags.settings.canUseShaderPacks))),
        windows: () => ib((() => "windows" === (0, Xb.getOperatingSystem)()))
      }
    }

    function ib(bb) {
      try {
        return bb()
      } catch {
        return !1
      }
    }

    function Ob(bb) {
      return "lite" === bb ? "webgpu" : "webgl2" === bb || "babylon" === bb ? "webgl" : null
    }
    async function Gb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb();
      const cb = await async function(bb) {
        const cb = function(bb) {
            const cb = bb.override(),
              sb = bb.webGpuSetting(),
              kb = null === cb && !0 !== sb && bb.Qm(),
              Wb = null !== cb || null !== sb || kb ? null : bb.claimed(),
              ab = null !== cb ? "override" : !0 === sb ? "setting" : kb ? "pack" : !1 === sb ? "setting" : null !== Wb ? "claim" : "default",
              Tb = function(bb) {
                return "override" === bb || "setting" === bb
              }(ab);
            if ("webgl" === cb || "webgl1" === cb || "webgl" === Wb || "setting" === ab && !1 === sb) return {
              source: ab,
              asked: Tb,
              refused: "not_requested"
            };
            if (!bb.gpu) return {
              source: ab,
              asked: Tb,
              refused: "no_webgpu_api"
            };
            const Ub = "default" === ab && bb.heldBack();
            if (Ub && !bb.windows()) return {
              source: ab,
              asked: Tb,
              refused: "webgl_holdback"
            };
            if (!Tb && bb.offAfterLoss("pack" === ab)) return {
              source: ab,
              asked: Tb,
              refused: Ub ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: ab,
              asked: Tb,
              heldBack: Ub,
              gpu: bb.gpu
            }
          }(bb),
          {
            source: sb
          } = cb,
          kb = !cb.asked,
          Wb = "gpu" in cb && cb.heldBack,
          Tb = function(bb) {
            return Wb && "none" !== bb ? {
              reason: "webgl_holdback",
              adapter: null,
              source: sb
            } : {
              reason: bb,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: sb
            }
          };
        if (!("gpu" in cb)) return Tb(cb.refused);
        let Ub;
        try {
          Ub = await (0, ub.m)((0, Nb.k)(cb.gpu), kc, `requestAdapter didn't settle in ${kc/1e3} s`)
        } catch {
          return Tb("adapter_error")
        }
        if ("string" === typeof Ub) return Tb(Ub);
        const Ib = (0, Nb.b)(Ub);
        if ((0, Nb.d)(Ub)) return Tb("software_adapter", Ib);
        const Hb = bb.windows() && function(bb) {
          return Pb.has((0, ab.f)(bb.vendor, bb.architecture))
        }(Ib);
        if (bb.storeHoldbackSpared(Hb), Wb && !Hb) return Tb("webgl_holdback");
        const fb = bb.intelGen9(Ub),
          Mb = fb ? null : bb.gpuClassWebGlArm(Ub);
        if (bb.storeGpuClassVerdict(null !== Mb && void 0 !== Mb && Mb), kb && bb.oldIntelDriver(Ub)) return Tb("old_intel_driver", Ib);
        if ("default" === sb && bb.intelGen9OnWebGl() && fb) return Tb("intel_gen9", Ib);
        if ("default" === sb && null !== Mb && bb.gpuClassOnWebGl(Mb)) return Tb("gpu_class_webgl", Ib);
        return Tb("none", Ib)
      }(bb);
      if ("none" === cb.reason) return {
        backend: "webgpu",
        ...cb
      };
      if ("webgl1" !== bb.override() && bb.webgl2()) return {
        backend: "webgl",
        ...cb
      };
      const sb = bb.webgl1();
      return 0 === sb.length ? {
        backend: "webgl1",
        ...cb
      } : {
        missing: sb
      }
    }
    let Kb = !1;
    async function Zb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eb();
      if (null === bb) return null;
      const sb = await Gb(cb);
      return Kb = !("missing" in sb) && "webgpu" === sb.backend && "claim" === sb.source, "missing" in sb ? sb : {
        ...sb,
        load: bb[sb.backend]
      }
    }
    async function zb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eb().gpu,
        kb = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== bb.backend) return !1;
      const Wb = Ab(cb, "indirectDraws", "off", "on");
      if (null !== Wb) return Wb;
      if (null !== bb.adapter && (0, Qb.q)(bb.adapter, kb)) return !0;
      if (null === sb) return !1;
      try {
        var ab;
        const bb = await (0, ub.m)(sb.requestAdapter({
          powerPreference: "low-power"
        }), kc, `the low-power requestAdapter didn't settle in ${kc/1e3} s`);
        return (0, Qb.q)(null !== (ab = null === bb || void 0 === bb ? void 0 : bb.info) && void 0 !== ab ? ab : {}, kb)
      } catch (Tb) {
        return Tb instanceof ub.g
      }
    }

    function qb(bb, cb, sb) {
      if ("webgpu" !== bb.backend) return !1;
      const kb = Ab(cb, "terrainFetch", "texture", "storage");
      return null !== kb ? kb : null !== bb.adapter && (0, Qb.j)(bb.adapter, sb)
    }

    function db(bb, cb, sb) {
      if ("webgpu" !== bb.backend) return !1;
      const kb = Ab(cb, "sceneDepth", "off", "on");
      return null !== kb ? kb : null !== bb.adapter && (0, Qb.n)(bb.adapter, sb)
    }

    function Ab(bb, cb, sb, kb) {
      const Wb = new URLSearchParams(bb).get(cb),
        ab = null !== Wb && void 0 !== Wb ? Wb : (0, Ib.c)(cb);
      return ab !== sb && ab !== kb ? null : (Kb ||= null === Wb, ab === sb)
    }

    function wb(bb, cb) {
      return "webgl" === bb.backend && (0, ab.q)(cb)
    }

    function rb(bb) {
      return null !== bb && "missing" in bb
    }

    function ob(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tb.d;
      try {
        const sb = "start_failed" === bb || "pipeline_failed" === bb,
          kb = cb.turnOffWebGpuAfterDeviceLoss(sb ? "visible" : (0, lb.i)((0, nb.g)()));
        return !Kb || kb && !cb.isWebGpuOffAfterLoss() || (0, Ib.s)("webgpuLoss"), cb.isWebGpuOffAfterLoss() && "webgpu" === Ob(mb.h.getItem(fb.f)) && mb.h.removeItem(fb.f), (0, Ub.q)("webgpuloss") && (0, Hb.b)((cb => {
          cb.noteWebGpuLoss("wasm", kb ? bb : `${bb}, which storage didn't keep`, null)
        })), kb
      } catch {
        return !1
      }
    }

    function Sb(bb) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Fb()) ? ob(bb) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Rb = "framePacing";

    function vb(bb) {
      const cb = new URLSearchParams(bb).get(Rb);
      return null !== cb && /^\d{1,9}$/.test(cb) ? Number(cb) : void 0
    }

    function Fb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === Ob(new URLSearchParams(bb).get(fb.c))
      } catch {
        return !1
      }
    }

    function xb(bb) {
      return !!jb(bb) || bb instanceof Error && !(bb instanceof WebAssembly.RuntimeError) && bb.message.startsWith(`${Vb.f.RenderSurfaceUnusable}:`)
    }

    function jb(bb) {
      const {
        name: cb,
        message: sb
      } = null !== bb && void 0 !== bb ? bb : {};
      return "InvalidStateError" === cb && "string" === typeof sb && sb.startsWith("GPUDevice.")
    }

    function pb(bb) {
      const cb = bb;
      return "function" === typeof cb.Lsb && "function" === typeof cb.Ysb ? cb : null
    }

    function bc(bb) {
      return "function" === typeof bb.Psb ? bb : null
    }
    const cc = "openRenderer";

    function sc(bb) {
      const cb = null === bb || void 0 === bb ? void 0 : bb.rWb();
      return void 0 === cb ? void 0 : new Error(cb)
    }
    const kc = 5e3,
      Wc = 15e3;

    function ac(bb, cb, sb, kb, Wb, ab) {
      return (0, ub.m)(function(bb, cb, sb, kb, Wb, ab) {
        return (0, Yb.g)(bb, cb, (() => bb.Psb(sb, kb, Wb, ab.indirectHangs, ab.storagePullBreaks, ab.splitPassBreaks, ab.framesAhead, ab.instancedTerrainSlow)))
      }(bb, cb, sb, kb, Wb, ab), Wc, `${Vb.f.RenderSurfaceUnusable}: the renderer didn't open in ${Wc/1e3} s`, Uc)
    }
    async function Tc(bb, cb, sb, kb, Wb, ab) {
      if ("function" !== typeof bb.zab) throw new Error("this core has no set_renderer");
      const Tb = await ac(cb, cc, sb, Wb, kb, ab);
      try {
        bb.zab(Tb)
      } catch (Ub) {
        throw Uc(Tb), Ub
      }
    }

    function Uc(bb) {
      try {
        bb.free()
      } catch {}
    }
  },
  40212: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    const kb = {
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
  40235: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ib,
      e: () => Ub
    });
    var kb = sb(696),
      Wb = sb(701);

    function ab(bb, cb) {
      const sb = null === cb ? void 0 : kb.e.get(cb);
      return "all" === sb || "webgl" === sb && "webgpu" !== bb.backend ? cb : null
    }

    function Tb(bb) {
      return "software_adapter" === bb.reason ? null : bb.adapter
    }

    function Ub(bb, cb) {
      const sb = (0, kb.u)();
      return null === sb ? null : (0, kb.h)(Tb(bb), sb, cb ? kb.n : kb.j)
    }

    function Ib(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wb.k;
      const kb = ab(bb, cb);
      return null !== kb && "webgl" === bb.backend && sb(kb) ? null : kb
    }
  },
  40221: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      g: () => fb,
      j: () => Tb,
      k: () => Ib
    });
    var kb = sb(35945);
    class Wb extends Error {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${bb}: the module trapped${sb?" in an earlier call":""}: ${String(cb)}`, {
          cause: cb
        }), this.site = bb, this.trap = cb, this.earlier = sb, this.name = "ModuleTrapError", cb instanceof Error && void 0 !== cb.stack && (this.stack = `${this.name}: ${this.message}\n${cb.stack}`)
      }
    }
    const ab = new WeakMap;

    function Tb(bb) {
      return ab.has(bb)
    }

    function Ub(bb, cb) {
      ab.has(bb) || ab.set(bb, cb)
    }

    function Ib(bb, cb) {
      return !!(0, kb.g)(cb) && (Ub(bb, cb), !0)
    }
    const Hb = [
      ["error", bb => bb.error],
      ["unhandledrejection", bb => bb.reason]
    ];

    function fb(bb, cb, sb) {
      let Tb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return ab.has(bb) ? Promise.reject(new Wb(cb, ab.get(bb), !0)) : new Promise(((ab, Ib) => {
        const fb = sb => {
            Ub(bb, sb), nb(), Ib(new Wb(cb, sb))
          },
          Mb = bb => {
            bb instanceof WebAssembly.RuntimeError ? fb(bb) : (nb(), Ib(bb))
          },
          Xb = Hb.map((bb => {
            let [cb, sb] = bb;
            return [cb, bb => {
              const cb = sb(bb);
              (0, kb.g)(cb) && fb(cb)
            }]
          })),
          nb = () => {
            for (const [bb, cb] of Xb) null === Tb || void 0 === Tb || Tb.removeEventListener(bb, cb)
          };
        for (const [bb, cb] of Xb) null === Tb || void 0 === Tb || Tb.addEventListener(bb, cb);
        let mb;
        try {
          mb = sb()
        } catch (lb) {
          return void Mb(lb)
        }
        mb.then((bb => {
          nb(), ab(bb)
        }), Mb)
      }))
    }
  },
  40238: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => qb,
      C: () => zb,
      D: () => Eb,
      E: () => hb,
      G: () => Pb,
      I: () => Db,
      M: () => Ob,
      Q: () => yb,
      e: () => Yb,
      g: () => Vb,
      j: () => Gb,
      l: () => ib,
      o: () => Nb,
      r: () => ub,
      s: () => eb,
      v: () => gb,
      y: () => tb
    });
    var kb = sb(232),
      Wb = sb(301),
      ab = sb(19),
      Tb = sb(326),
      Ub = sb(37),
      Ib = sb(40207),
      Hb = sb(40235),
      fb = sb(40240),
      Mb = (sb(40223), sb(40248)),
      Xb = sb(40256);
    const nb = "wasmJoinBuild";
    let mb = null,
      lb = null,
      Qb = null;

    function eb(bb) {
      Qb = bb
    }
    let Cb = !1;

    function Nb() {
      Cb = !0
    }

    function Vb() {
      return Cb
    }
    let Lb = !1;

    function ub() {
      Lb = !0
    }

    function Yb() {
      return Lb
    }

    function hb() {
      return Qb
    }
    let Jb = null;

    function gb(bb) {
      Jb = bb, (0, Tb.c)(bb)
    }
    const Bb = "wasmClientRenderLost";

    function tb() {
      Ub.i.setItem(Bb, !0)
    }

    function yb() {
      return !0 === Ub.i.getItem(Bb)
    }

    function Pb() {
      return Jb
    }

    function Db() {
      return null === mb && (Ub.h.removeItem("wasmLastPick"), Ub.h.removeItem("wasmGuessVerdict"), (0, Tb.i)(), mb = (0, Ib.u)(fb.h).then((bb => (null === bb || (0, Ib.l)(bb) || (lb = Mb.d[bb.backend], ab.d.followGameGpu("webgpu" === bb.backend ? bb.adapter : null), "webgpu" === bb.backend && (0, Xb.d)()), bb)))), mb
    }

    function Eb() {
      return lb
    }

    function ib(bb) {
      return bb ? bb.load() : Promise.resolve().then((function() {
        var bb = new Error("Cannot find module '@bloxd/wasm/client'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      })).then((bb => bb.bloxdWasmClient))
    }

    function Ob(bb) {
      Ub.h.setItem(nb, bb)
    }
    async function Gb() {
      if (null === fb.h) return ib(null);
      const bb = Ub.h.getItem(nb);
      let cb = "none" === bb ? null : "webgl";
      return null !== bb && "none" !== bb && ("string" === typeof bb && void 0 !== (0, kb.e)(fb.h, bb) ? cb = bb : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(bb)}, is none of this client's: guessing WebGL2's`)), null === cb ? null : fb.h[cb]()
    }
    let Kb = null,
      Zb = null;

    function zb() {
      return Kb ??= Db().then((async bb => {
        var cb;
        const sb = null !== bb && !(0, Ib.l)(bb),
          kb = {
            indirectHangs: sb && await (0, Ib.w)(bb, window.location.search),
            storagePullBreaks: sb && (0, Ib.F)(bb, window.location.search),
            splitPassBreaks: sb && (0, Ib.C)(bb, window.location.search),
            framesAhead: (0, Ib.f)(window.location.search),
            instancedTerrainSlow: sb && (0, Ib.y)(bb, null !== (cb = (0, Hb.e)(bb, !1)) && void 0 !== cb ? cb : (0, Wb.b)())
          };
        return Zb = kb.indirectHangs, kb
      })), Kb
    }

    function qb() {
      return Zb
    }
  },
  40248: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    const kb = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40240: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb,
      h: () => kb
    });
    const kb = {
        webgpu: async () => (await sb.e(8).then((() => sb(42602)))).bloxdWasmWebgpu,
        webgl: async () => (await sb.e(6).then((() => sb(42612)))).bloxdWasmWebgl,
        webgl1: async () => (await sb.e(7).then((() => sb(42623)))).bloxdWasmWebgl1
      },
      Wb = async () => (await sb.e(5).then((() => sb(42631)))).compileAnimationPackInWasm
  },
  40259: (bb, cb, sb) => {
    function kb() {
      return sb(40263)
    }

    function Wb() {
      return sb(40271)
    }

    function ab(bb) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(bb)
    }
    sb.d(cb, {
      e: () => ab,
      f: () => kb,
      g: () => Wb
    })
  },
  40256: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      d: () => Ib
    });
    var kb = sb(117);
    const Wb = "webgpuPipeline";

    function ab(bb) {
      return bb.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let Tb = null;

    function Ub() {
      if (null === Tb) try {
        bb = (0, kb.getBrowserName)(), cb = (0, kb.getBrowserVersion)(), sb = (0, kb.getOperatingSystem)(), Wb = (0, kb.getOperatingSystemVersion)(), Tb = `${bb.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===cb?"unknown":ab(cb)}-${sb}${void 0===Wb?"":`_${ab(Wb)}`}`
      } catch (Ub) {
        console.warn("The user agent couldn't be read for its browser code", Ub), Tb = "unknown"
      }
      var bb, cb, sb, Wb;
      return Tb
    }

    function Ib() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const cb = `WGPU-${Ub()}`,
        kb = (bb, kb) => {
          const {
            reason: ab,
            message: Tb
          } = kb, Ub = {
            pipeline: null !== bb && void 0 !== bb ? bb : "",
            reason: String(ab),
            browserMessage: String(Tb)
          };
          Promise.all([sb.e(262), sb.e(86)]).then((() => sb(40373))).then((bb => {
            let {
              reportCrash: sb
            } = bb;
            sb({
              kind: "coreError",
              code: cb,
              site: Wb,
              fatal: !1,
              message: `${Ub.pipeline} ${Ub.reason}: ${Ub.browserMessage}`,
              details: Ub,
              error: kb
            })
          })).catch((bb => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", bb)
          }))
        },
        ab = bb.createRenderPipelineAsync;
      bb.createRenderPipelineAsync = function(bb) {
        return ab.call(this, bb).catch((cb => {
          throw kb(bb.label, cb), cb
        }))
      };
      const Tb = bb.createComputePipelineAsync;
      bb.createComputePipelineAsync = function(bb) {
        return Tb.call(this, bb).catch((cb => {
          throw kb(bb.label, cb), cb
        }))
      }
    }
  },
  40203: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/bloxd_wasm_models_bg.7eabea89c82dcc468558.wasm"
  },
  40197: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/bloxd_wasm_workers_bg.6dce0a8e6e443079e632.wasm"
  },
  40263: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40271: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  40189: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb,
      f: () => kb
    });
    const kb = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new sb.U(sb(40197))
      }
    };
    const Wb = {
      name: "bloxd_wasm_models",
      url: function() {
        return new sb.U(sb(40203))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);