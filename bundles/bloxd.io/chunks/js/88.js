export const id = 88;
export const ids = [88];
export const modules = {
  4542: (vv, zv, Pv) => {
    Pv.d(zv, {
      $: () => nv,
      A: () => ev,
      C: () => av,
      Cb: () => Uv,
      E: () => Jv,
      Fb: () => Zv,
      Hb: () => xv,
      I: () => Nv,
      Jb: () => qv,
      Kb: () => Iv,
      M: () => sv,
      Mb: () => Gv,
      Ob: () => mv,
      P: () => dv,
      S: () => Wv,
      Sb: () => Lv,
      V: () => Tv,
      Vb: () => Sv,
      X: () => Fv,
      Xb: () => Bv,
      bb: () => Ov,
      d: () => yv,
      eb: () => Yv,
      f: () => Mv,
      fb: () => Dv,
      g: () => lv,
      h: () => cv,
      ib: () => Av,
      j: () => Hv,
      kb: () => Qv,
      lb: () => tv,
      m: () => iv,
      pb: () => Kv,
      q: () => Cv,
      qb: () => Rv,
      sb: () => Vv,
      t: () => gv,
      u: () => pv,
      wb: () => wv,
      x: () => hv,
      xb: () => fv,
      zb: () => jv
    });
    const hv = 32,
      Sv = 33.333333333333336,
      ev = {
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
      gv = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      pv = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      dv = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Nv = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      lv = {
        Look: 0,
        Remesh: 1
      },
      Tv = 8,
      Wv = 1,
      wv = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      av = {
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
      sv = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Cv = {
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
      iv = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      cv = 4,
      Gv = 4,
      mv = 65535,
      jv = {
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
      fv = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Fv = 88,
      Yv = 0,
      nv = 24,
      Ov = 48,
      Dv = 80,
      Kv = {
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
      Vv = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Uv = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Rv = {
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
      xv = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      tv = 65535,
      qv = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Iv = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Qv = 2,
      Zv = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Av = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Lv = {
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
      Hv = {
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
      Mv = {
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
      yv = 8,
      Bv = {
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
      Jv = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  40102: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv
    });
    const hv = 1 << 20,
      Sv = 1 << 21,
      ev = 1024,
      gv = 2048;

    function pv(vv, zv, Pv) {
      const pv = vv + hv,
        dv = zv + ev,
        Nv = Pv + hv;
      return pv < 0 || pv >= Sv || Nv < 0 || Nv >= Sv || dv < 0 || dv >= gv ? -1 : (pv * Sv + Nv) * gv + dv
    }
  },
  40096: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      h: () => gv,
      i: () => Sv,
      j: () => ev,
      n: () => lv,
      p: () => Nv,
      r: () => dv,
      s: () => pv
    });
    Pv(3205);
    Pv(40102);

    function hv(vv) {}

    function Sv(vv) {}

    function ev(vv) {}

    function gv(vv) {}

    function pv(vv) {}

    function dv(vv, zv, Pv) {}

    function Nv(vv) {}

    function lv(vv) {}
  },
  40078: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => ez,
      B: () => Zv,
      E: () => Av,
      F: () => yv,
      G: () => vz,
      J: () => Hv,
      M: () => Lv,
      N: () => Ev,
      R: () => Jv,
      S: () => Pz,
      U: () => rv,
      Y: () => Dv,
      d: () => zz,
      h: () => gz,
      k: () => bv,
      n: () => uv,
      o: () => Bv,
      s: () => Xv,
      w: () => kv
    });
    var hv = Pv(302),
      Sv = Pv(263),
      ev = Pv(266),
      gv = Pv(22),
      pv = Pv(2682),
      dv = Pv(668),
      Nv = Pv(4271),
      lv = Pv(2623),
      Tv = Pv(3201),
      Wv = Pv(73),
      wv = Pv(295),
      av = Pv(39),
      sv = Pv(278),
      Cv = Pv(90),
      iv = Pv(630),
      cv = Pv(101),
      Gv = Pv(93),
      mv = Pv(4542),
      jv = Pv(40084),
      fv = Pv(1748),
      Fv = Pv(40087);
    const Yv = "bloxd-webgpuOffAfterLoss",
      nv = "context:webgl",
      Ov = "probe:threw";

    function Dv(vv) {
      let zv;
      try {
        zv = vv.getContext("webgl", {
          powerPreference: cv.b
        })
      } catch {
        zv = null
      }
      if (null === zv) return null;
      let Pv = null;
      try {
        const vv = zv.getParameter(zv.MAX_TEXTURE_SIZE);
        Pv = "number" === typeof vv && vv > 0 ? vv : null
      } catch {
        Pv = null
      }
      try {
        var hv;
        null === (hv = zv.getExtension("WEBGL_lose_context")) || void 0 === hv || hv.loseContext()
      } catch {}
      return Pv
    }
    const Kv = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      Vv = "mali_valhall",
      Uv = new Set(["nvidia_pre_turing"]);

    function Rv(vv) {
      return function(vv) {
        try {
          return vv()
        } catch {
          return null
        }
      }((() => {
        var zv, Pv, hv, gv;
        const pv = null !== (zv = null === (Pv = vv.info) || void 0 === Pv ? void 0 : Pv.vendor) && void 0 !== zv ? zv : "";
        return "windows" === (0, Wv.getOperatingSystem)() && "" !== pv && "intel" !== (0, Wv.normaliseGpuVendor)(pv) ? null : ((0, Wv.seedGpuVendor)(pv), dv = (0, Sv.h)(), Nv = (0, ev.h)(pv, null !== (hv = null === (gv = vv.info) || void 0 === gv ? void 0 : gv.architecture) && void 0 !== hv ? hv : ""), Kv.has(dv) ? "android_arm" === dv && Nv === Vv ? "webgpu_default" : "webgl_default" : null);
        var dv, Nv
      }))
    }

    function xv() {
      var vv;
      return {
        gpu: null !== (vv = navigator.gpu) && void 0 !== vv ? vv : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(vv) {
          let zv, Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jv.b;
          try {
            zv = vv.getContext("webgl")
          } catch {
            zv = null
          }
          if (null === zv) return [nv];
          const hv = [];
          try {
            for (const Sv of Pv.extensions) null === zv.getExtension(Sv) && hv.push(Sv);
            for (const [Sv, ev] of Object.entries(Pv.limits)) {
              const vv = zv[Sv],
                Pv = "number" === typeof vv ? zv.getParameter(vv) : null;
              ("number" !== typeof Pv || Pv < ev) && hv.push(`limit:${Sv}`)
            }
            const vv = zv.getShaderPrecisionFormat(zv.VERTEX_SHADER, zv.HIGH_FLOAT);
            (null === vv || vv.precision < Pv.vertexHighFloatBits) && hv.push("precision:vertex_high_float")
          } catch {
            hv.push(Ov)
          }
          try {
            var Sv;
            null === (Sv = zv.getExtension("WEBGL_lose_context")) || void 0 === Sv || Sv.loseContext()
          } catch {}
          return hv
        }(document.createElement("canvas")),
        offAfterLoss: vv => tv((() => vv ? (0, sv.C)() : gv.c.isWebGpuOffAfterLoss())),
        oldIntelDriver: vv => tv((() => (0, Cv.d)(vv))),
        intelGen9: vv => tv((() => (0, Cv.i)(vv))),
        gpuClassWebGlArm: Rv,
        storeGpuClassVerdict: vv => {
          av.h.setItem(Cv.t, vv)
        },
        gpuClassOnWebGl: vv => (0, iv.e)(vv),
        override: () => function() {
          if ((0, pv.o)("render") && "webgl1" === (0, pv.l)("renderer")) return "webgl1";
          const vv = [() => new URLSearchParams(window.location.search).get(lv.c), () => av.h.getItem(lv.g), () => {
            const vv = localStorage.getItem(Yv);
            return null !== vv && localStorage.removeItem(Yv), "1" === vv ? "webgl2" : null
          }];
          for (const zv of vv) {
            let vv = null;
            try {
              vv = qv(zv())
            } catch {}
            if (null !== vv) return vv
          }
          return null
        }(),
        claimed: () => qv((0, dv.m)()),
        webGpuSetting: () => {
          const vv = av.h.getItem(hv.bc);
          return "boolean" === typeof vv ? vv : null
        },
        heldBack: () => iv.i,
        storeHoldbackSpared: vv => {
          av.h.setItem(Cv.p, vv)
        },
        intelGen9OnWebGl: () => iv.k,
        Bw: () => tv((() => (0, Tv.e)(Wv.featureFlags.settings.canUseShaderPacks))),
        windows: () => tv((() => "windows" === (0, Wv.getOperatingSystem)()))
      }
    }

    function tv(vv) {
      try {
        return vv()
      } catch {
        return !1
      }
    }

    function qv(vv) {
      return "lite" === vv ? "webgpu" : "webgl2" === vv || "babylon" === vv ? "webgl" : null
    }
    async function Iv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xv();
      const zv = await async function(vv) {
        const zv = function(vv) {
            const zv = vv.override(),
              Pv = vv.webGpuSetting(),
              hv = null === zv && !0 !== Pv && vv.Bw(),
              Sv = null !== zv || null !== Pv || hv ? null : vv.claimed(),
              ev = null !== zv ? "override" : !0 === Pv ? "setting" : hv ? "pack" : !1 === Pv ? "setting" : null !== Sv ? "claim" : "default",
              gv = function(vv) {
                return "override" === vv || "setting" === vv
              }(ev);
            if ("webgl" === zv || "webgl1" === zv || "webgl" === Sv || "setting" === ev && !1 === Pv) return {
              source: ev,
              asked: gv,
              refused: "not_requested"
            };
            if (!vv.gpu) return {
              source: ev,
              asked: gv,
              refused: "no_webgpu_api"
            };
            const pv = "default" === ev && vv.heldBack();
            if (pv && !vv.windows()) return {
              source: ev,
              asked: gv,
              refused: "webgl_holdback"
            };
            if (!gv && vv.offAfterLoss("pack" === ev)) return {
              source: ev,
              asked: gv,
              refused: pv ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: ev,
              asked: gv,
              heldBack: pv,
              gpu: vv.gpu
            }
          }(vv),
          {
            source: Pv
          } = zv,
          hv = !zv.asked,
          Sv = "gpu" in zv && zv.heldBack,
          gv = function(vv) {
            return Sv && "none" !== vv ? {
              reason: "webgl_holdback",
              adapter: null,
              source: Pv
            } : {
              reason: vv,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: Pv
            }
          };
        if (!("gpu" in zv)) return gv(zv.refused);
        let pv;
        try {
          pv = await (0, fv.j)((0, Gv.p)(zv.gpu), hz, `requestAdapter didn't settle in ${hz/1e3} s`)
        } catch {
          return gv("adapter_error")
        }
        if ("string" === typeof pv) return gv(pv);
        const dv = (0, Gv.e)(pv);
        if ((0, Gv.k)(pv)) return gv("software_adapter", dv);
        const Nv = vv.windows() && function(vv) {
          return Uv.has((0, ev.h)(vv.vendor, vv.architecture))
        }(dv);
        if (vv.storeHoldbackSpared(Nv), Sv && !Nv) return gv("webgl_holdback");
        const lv = vv.intelGen9(pv),
          Tv = lv ? null : vv.gpuClassWebGlArm(pv);
        if (vv.storeGpuClassVerdict(null !== Tv && void 0 !== Tv && Tv), hv && vv.oldIntelDriver(pv)) return gv("old_intel_driver", dv);
        if ("default" === Pv && vv.intelGen9OnWebGl() && lv) return gv("intel_gen9", dv);
        if ("default" === Pv && null !== Tv && vv.gpuClassOnWebGl(Tv)) return gv("gpu_class_webgl", dv);
        return gv("none", dv)
      }(vv);
      if ("none" === zv.reason) return {
        backend: "webgpu",
        ...zv
      };
      if ("webgl1" !== vv.override() && vv.webgl2()) return {
        backend: "webgl",
        ...zv
      };
      const Pv = vv.webgl1();
      return 0 === Pv.length ? {
        backend: "webgl1",
        ...zv
      } : {
        missing: Pv
      }
    }
    let Qv = !1;
    async function Zv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xv();
      if (null === vv) return null;
      const Pv = await Iv(zv);
      return Qv = !("missing" in Pv) && "webgpu" === Pv.backend && "claim" === Pv.source, "missing" in Pv ? Pv : {
        ...Pv,
        load: vv[Pv.backend]
      }
    }
    async function Av(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xv().gpu,
        hv = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== vv.backend) return !1;
      const Sv = Mv(zv, "indirectDraws", "off", "on");
      if (null !== Sv) return Sv;
      if (null !== vv.adapter && (0, Cv.k)(vv.adapter, hv)) return !0;
      if (null === Pv) return !1;
      try {
        var ev;
        const vv = await (0, fv.j)(Pv.requestAdapter({
          powerPreference: "low-power"
        }).then((async vv => (null !== vv && await (0, Gv.h)(vv), vv))), hz, `the low-power requestAdapter didn't settle in ${hz/1e3} s`);
        return (0, Cv.k)(null !== (ev = null === vv || void 0 === vv ? void 0 : vv.info) && void 0 !== ev ? ev : {}, hv)
      } catch (gv) {
        return gv instanceof fv.h
      }
    }

    function Lv(vv, zv, Pv) {
      if ("webgpu" !== vv.backend) return !1;
      const hv = Mv(zv, "terrainFetch", "texture", "storage");
      return null !== hv ? hv : null !== vv.adapter && (0, Cv.f)(vv.adapter, Pv)
    }

    function Hv(vv, zv, Pv) {
      if ("webgpu" !== vv.backend) return !1;
      const hv = Mv(zv, "sceneDepth", "off", "on");
      return null !== hv ? hv : null !== vv.adapter && (0, Cv.g)(vv.adapter, Pv)
    }

    function Mv(vv, zv, Pv, hv) {
      const Sv = new URLSearchParams(vv).get(zv),
        ev = null !== Sv && void 0 !== Sv ? Sv : (0, dv.i)(zv);
      return ev !== Pv && ev !== hv ? null : (Qv ||= null === Sv, ev === Pv)
    }

    function yv(vv, zv) {
      return "webgl" === vv.backend && (0, ev.q)(zv)
    }

    function Bv(vv) {
      return null !== vv && "missing" in vv
    }

    function Jv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gv.c;
      try {
        const Pv = "start_failed" === vv || "pipeline_failed" === vv,
          hv = zv.turnOffWebGpuAfterDeviceLoss(Pv ? "visible" : (0, sv.k)((0, wv.i)()));
        return !Qv || hv && !zv.isWebGpuOffAfterLoss() || (0, dv.z)("webgpuLoss"), zv.isWebGpuOffAfterLoss() && "webgpu" === qv(av.h.getItem(lv.g)) && av.h.removeItem(lv.g), (0, pv.o)("webgpuloss") && (0, Nv.c)((zv => {
          zv.noteWebGpuLoss("wasm", hv ? vv : `${vv}, which storage didn't keep`, null)
        })), hv
      } catch {
        return !1
      }
    }

    function Ev(vv) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !rv()) ? Jv(vv) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const ov = "framePacing";

    function bv(vv) {
      const zv = new URLSearchParams(vv).get(ov);
      return null !== zv && /^\d{1,9}$/.test(zv) ? Number(zv) : void 0
    }

    function rv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === qv(new URLSearchParams(vv).get(lv.c))
      } catch {
        return !1
      }
    }

    function kv(vv) {
      return !!Xv(vv) || vv instanceof Error && !(vv instanceof WebAssembly.RuntimeError) && vv.message.startsWith(`${mv.f.RenderSurfaceUnusable}:`)
    }

    function Xv(vv) {
      const {
        name: zv,
        message: Pv
      } = null !== vv && void 0 !== vv ? vv : {};
      return "InvalidStateError" === zv && "string" === typeof Pv && Pv.startsWith("GPUDevice.")
    }

    function uv(vv) {
      const zv = vv;
      return "function" === typeof zv.bzv && "function" === typeof zv.rzv ? zv : null
    }

    function vz(vv) {
      return "function" === typeof vv.hPv ? vv : null
    }
    const zz = "openRenderer";

    function Pz(vv) {
      const zv = null === vv || void 0 === vv ? void 0 : vv.CSv();
      return void 0 === zv ? void 0 : new Error(zv)
    }
    const hz = 5e3,
      Sz = 15e3;

    function ez(vv, zv, Pv, hv, Sv, ev) {
      return (0, fv.j)(function(vv, zv, Pv, hv, Sv, ev) {
        return (0, Fv.g)(vv, zv, (() => vv.hPv(Pv, hv, Sv, ev.indirectHangs, ev.storagePullBreaks, ev.splitPassBreaks, ev.framesAhead, ev.instancedTerrainSlow)))
      }(vv, zv, Pv, hv, Sv, ev), Sz, `${mv.f.RenderSurfaceUnusable}: the renderer didn't open in ${Sz/1e3} s`, pz)
    }
    async function gz(vv, zv, Pv, hv, Sv, ev) {
      if ("function" !== typeof vv.hev) throw new Error("this core has no set_renderer");
      const gv = await ez(zv, zz, Pv, Sv, hv, ev);
      try {
        vv.hev(gv)
      } catch (pv) {
        throw pz(gv), pv
      }
    }

    function pz(vv) {
      try {
        vv.free()
      } catch {}
    }
  },
  40084: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    const hv = {
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
  40108: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => dv,
      i: () => pv
    });
    var hv = Pv(680),
      Sv = Pv(686);

    function ev(vv, zv) {
      const Pv = null === zv ? void 0 : hv.d.get(zv);
      return "all" === Pv || "webgl" === Pv && "webgpu" !== vv.backend ? zv : null
    }

    function gv(vv) {
      return "software_adapter" === vv.reason ? null : vv.adapter
    }

    function pv(vv, zv) {
      const Pv = (0, hv.u)();
      return null === Pv ? null : (0, hv.h)(gv(vv), Pv, zv ? hv.m : hv.j)
    }

    function dv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sv.i;
      const hv = ev(vv, zv);
      return null !== hv && "webgl" === vv.backend && Pv(hv) ? null : hv
    }
  },
  40087: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      g: () => lv,
      j: () => gv,
      k: () => dv
    });
    var hv = Pv(35852);
    class Sv extends Error {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${vv}: the module trapped${Pv?" in an earlier call":""}: ${String(zv)}`, {
          cause: zv
        }), this.site = vv, this.trap = zv, this.earlier = Pv, this.name = "ModuleTrapError", zv instanceof Error && void 0 !== zv.stack && (this.stack = `${this.name}: ${this.message}\n${zv.stack}`)
      }
    }
    const ev = new WeakMap;

    function gv(vv) {
      return ev.has(vv)
    }

    function pv(vv, zv) {
      ev.has(vv) || ev.set(vv, zv)
    }

    function dv(vv, zv) {
      return !!(0, hv.h)(zv) && (pv(vv, zv), !0)
    }
    const Nv = [
      ["error", vv => vv.error],
      ["unhandledrejection", vv => vv.reason]
    ];

    function lv(vv, zv, Pv) {
      let gv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return ev.has(vv) ? Promise.reject(new Sv(zv, ev.get(vv), !0)) : new Promise(((ev, dv) => {
        const lv = Pv => {
            pv(vv, Pv), wv(), dv(new Sv(zv, Pv))
          },
          Tv = vv => {
            vv instanceof WebAssembly.RuntimeError ? lv(vv) : (wv(), dv(vv))
          },
          Wv = Nv.map((vv => {
            let [zv, Pv] = vv;
            return [zv, vv => {
              const zv = Pv(vv);
              (0, hv.h)(zv) && lv(zv)
            }]
          })),
          wv = () => {
            for (const [vv, zv] of Wv) null === gv || void 0 === gv || gv.removeEventListener(vv, zv)
          };
        for (const [vv, zv] of Wv) null === gv || void 0 === gv || gv.addEventListener(vv, zv);
        let av;
        try {
          av = Pv()
        } catch (sv) {
          return void Tv(sv)
        }
        av.then((vv => {
          wv(), ev(vv)
        }), Tv)
      }))
    }
  },
  40112: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => xv,
      E: () => Yv,
      H: () => Uv,
      I: () => Rv,
      M: () => qv,
      O: () => Vv,
      c: () => Fv,
      e: () => mv,
      f: () => Iv,
      g: () => tv,
      i: () => Gv,
      j: () => fv,
      k: () => iv,
      o: () => Ov,
      q: () => Kv,
      u: () => Lv,
      w: () => Av
    });
    var hv = Pv(202),
      Sv = Pv(266),
      ev = Pv(22),
      gv = Pv(295),
      pv = Pv(39),
      dv = Pv(40078),
      Nv = Pv(40108),
      lv = Pv(40114),
      Tv = (Pv(40096), Pv(40116)),
      Wv = Pv(40125);
    const wv = "wasmJoinBuild";
    let av = null,
      sv = null,
      Cv = null;

    function iv(vv) {
      Cv = vv
    }
    let cv = !1;

    function Gv() {
      cv = !0
    }

    function mv() {
      return cv
    }
    let jv = !1;

    function fv() {
      jv = !0
    }

    function Fv() {
      return jv
    }

    function Yv() {
      return Cv
    }
    let nv = null;

    function Ov(vv) {
      nv = vv, (0, gv.b)(vv)
    }
    const Dv = "wasmClientRenderLost";

    function Kv() {
      pv.l.setItem(Dv, !0)
    }

    function Vv() {
      return !0 === pv.l.getItem(Dv)
    }

    function Uv() {
      return nv
    }

    function Rv() {
      return null === av && (pv.h.removeItem("wasmLastPick"), pv.h.removeItem("wasmGuessVerdict"), (0, gv.l)(), av = (0, dv.B)(lv.d).then((vv => (null === vv || (0, dv.o)(vv) || (sv = Tv.b[vv.backend], ev.c.followGameGpu("webgpu" === vv.backend ? vv.adapter : null), "webgpu" === vv.backend && (0, Wv.d)()), vv)))), av
    }

    function xv() {
      return sv
    }

    function tv(vv) {
      return vv ? vv.load() : Promise.resolve().then((function() {
        var vv = new Error("Cannot find module '@bloxd/wasm/client'");
        throw vv.code = "MODULE_NOT_FOUND", vv
      })).then((vv => vv.bloxdWasmClient))
    }

    function qv(vv) {
      pv.h.setItem(wv, vv)
    }
    async function Iv() {
      if (null === lv.d) return tv(null);
      const vv = pv.h.getItem(wv);
      let zv = "none" === vv ? null : "webgl";
      return null !== vv && "none" !== vv && ("string" === typeof vv && void 0 !== (0, hv.b)(lv.d, vv) ? zv = vv : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(vv)}, is none of this client's: guessing WebGL2's`)), null === zv ? null : lv.d[zv]()
    }
    let Qv = null,
      Zv = null;

    function Av() {
      return Qv ??= Rv().then((async vv => {
        var zv;
        const Pv = null !== vv && !(0, dv.o)(vv),
          hv = {
            indirectHangs: Pv && await (0, dv.E)(vv, window.location.search),
            storagePullBreaks: Pv && (0, dv.M)(vv, window.location.search),
            splitPassBreaks: Pv && (0, dv.J)(vv, window.location.search),
            framesAhead: (0, dv.k)(window.location.search),
            instancedTerrainSlow: Pv && (0, dv.F)(vv, null !== (zv = (0, Nv.i)(vv, !1)) && void 0 !== zv ? zv : (0, Sv.e)())
          };
        return Zv = hv.indirectHangs, hv
      })), Qv
    }

    function Lv() {
      return Zv
    }
  },
  40116: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    const hv = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40114: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      d: () => hv
    });
    const hv = {
        webgpu: async () => (await Pv.e(8).then((() => Pv(42627)))).bloxdWasmWebgpu,
        webgl: async () => (await Pv.e(6).then((() => Pv(42638)))).bloxdWasmWebgl,
        webgl1: async () => (await Pv.e(7).then((() => Pv(42648)))).bloxdWasmWebgl1
      },
      Sv = async () => (await Pv.e(5).then((() => Pv(42660)))).compileAnimationPackInWasm
  },
  40134: (vv, zv, Pv) => {
    function hv() {
      return Pv(40139)
    }

    function Sv() {
      return Pv(40146)
    }

    function ev(vv) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(vv)
    }
    Pv.d(zv, {
      d: () => ev,
      e: () => hv,
      g: () => Sv
    })
  },
  40125: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv,
      d: () => dv
    });
    var hv = Pv(73);
    const Sv = "webgpuPipeline";

    function ev(vv) {
      return vv.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let gv = null;

    function pv() {
      if (null === gv) try {
        vv = (0, hv.getBrowserName)(), zv = (0, hv.getBrowserVersion)(), Pv = (0, hv.getOperatingSystem)(), Sv = (0, hv.getOperatingSystemVersion)(), gv = `${vv.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===zv?"unknown":ev(zv)}-${Pv}${void 0===Sv?"":`_${ev(Sv)}`}`
      } catch (pv) {
        console.warn("The user agent couldn't be read for its browser code", pv), gv = "unknown"
      }
      var vv, zv, Pv, Sv;
      return gv
    }

    function dv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const zv = `WGPU-${pv()}`,
        hv = (vv, hv) => {
          const {
            reason: ev,
            message: gv
          } = hv, pv = {
            pipeline: null !== vv && void 0 !== vv ? vv : "",
            reason: String(ev),
            browserMessage: String(gv)
          };
          Promise.all([Pv.e(263), Pv.e(87)]).then((() => Pv(40235))).then((vv => {
            let {
              reportCrash: Pv
            } = vv;
            Pv({
              kind: "coreError",
              code: zv,
              site: Sv,
              fatal: !1,
              message: `${pv.pipeline} ${pv.reason}: ${pv.browserMessage}`,
              details: pv,
              error: hv
            })
          })).catch((vv => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", vv)
          }))
        },
        ev = vv.createRenderPipelineAsync;
      vv.createRenderPipelineAsync = function(vv) {
        return ev.call(this, vv).catch((zv => {
          throw hv(vv.label, zv), zv
        }))
      };
      const gv = vv.createComputePipelineAsync;
      vv.createComputePipelineAsync = function(vv) {
        return gv.call(this, vv).catch((zv => {
          throw hv(vv.label, zv), zv
        }))
      }
    }
  },
  40071: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/bloxd_wasm_models_bg.a746cbd0227bcbe1c6b5.wasm"
  },
  40068: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/bloxd_wasm_workers_bg.e7313a53d539b4250cbd.wasm"
  },
  40139: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40146: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  40065: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      e: () => hv
    });
    const hv = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new Pv.U(Pv(40068))
      }
    };
    const Sv = {
      name: "bloxd_wasm_models",
      url: function() {
        return new Pv.U(Pv(40071))
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);