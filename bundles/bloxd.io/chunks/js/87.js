export const id = 87;
export const ids = [87];
export const modules = {
  4436: (zz, tz, sz) => {
    sz.d(tz, {
      D: () => Xz,
      Db: () => Gz,
      G: () => wz,
      Gb: () => bz,
      Hb: () => xz,
      Ib: () => Yz,
      J: () => az,
      Jb: () => Tz,
      K: () => Uz,
      Nb: () => hz,
      O: () => Dz,
      Ob: () => jz,
      R: () => vz,
      Sb: () => yz,
      V: () => Nz,
      Wb: () => Mz,
      Xb: () => Pz,
      Y: () => uz,
      _b: () => rz,
      ab: () => mz,
      ac: () => kz,
      c: () => lz,
      cb: () => Iz,
      dc: () => Wz,
      eb: () => Cz,
      fc: () => nz,
      g: () => Lz,
      gb: () => Jz,
      j: () => Kz,
      jb: () => ez,
      n: () => Bz,
      nb: () => Qz,
      q: () => iz,
      qb: () => dz,
      r: () => Hz,
      s: () => gz,
      tb: () => Az,
      v: () => Oz,
      vb: () => Zz,
      x: () => oz,
      z: () => Fz,
      zb: () => cz
    });
    const Fz = 32,
      Wz = 33.333333333333336,
      Xz = {
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
      Oz = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      oz = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      vz = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Uz = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Kz = {
        Look: 0,
        Remesh: 1
      },
      uz = 8,
      Nz = 1,
      bz = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      wz = {
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
      Dz = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      gz = {
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
      Hz = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Bz = 4,
      Pz = 4,
      rz = 65535,
      Yz = {
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
      xz = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      mz = 88,
      Jz = 0,
      Iz = 24,
      Cz = 48,
      ez = 80,
      Zz = {
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
      Gz = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Tz = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      cz = {
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
      jz = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Az = 65535,
      yz = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Mz = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      dz = 2,
      hz = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Qz = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      kz = {
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
      iz = {
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
      Lz = {
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
      lz = 8,
      nz = {
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
      az = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  39905: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz
    });
    const Fz = 1 << 20,
      Wz = 1 << 21,
      Xz = 1024,
      Oz = 2048;

    function oz(zz, tz, sz) {
      const oz = zz + Fz,
        vz = tz + Xz,
        Uz = sz + Fz;
      return oz < 0 || oz >= Wz || Uz < 0 || Uz >= Wz || vz < 0 || vz >= Oz ? -1 : (oz * Wz + Uz) * Oz + vz
    }
  },
  39903: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      f: () => Oz,
      j: () => Wz,
      k: () => Xz,
      o: () => Kz,
      q: () => Uz,
      u: () => vz,
      y: () => oz
    });
    sz(3135);
    sz(39905);

    function Fz(zz) {}

    function Wz(zz) {}

    function Xz(zz) {}

    function Oz(zz) {}

    function oz(zz) {}

    function vz(zz, tz, sz) {}

    function Uz(zz) {}

    function Kz(zz) {}
  },
  39887: (zz, tz, sz) => {
    sz.d(tz, {
      A: () => lz,
      D: () => zt,
      F: () => iz,
      J: () => kz,
      M: () => qz,
      N: () => az,
      P: () => st,
      S: () => Rz,
      W: () => ez,
      c: () => tt,
      d: () => Ot,
      g: () => Vz,
      k: () => Ez,
      m: () => nz,
      p: () => fz,
      r: () => pz,
      u: () => Xt,
      v: () => hz,
      w: () => Qz
    });
    var Fz = sz(308),
      Wz = sz(273),
      Xz = sz(277),
      Oz = sz(30),
      oz = sz(2637),
      vz = sz(644),
      Uz = sz(4156),
      Kz = sz(2579),
      uz = sz(3133),
      Nz = sz(106),
      bz = sz(302),
      wz = sz(44),
      Dz = sz(290),
      gz = sz(123),
      Hz = sz(593),
      Bz = sz(129),
      Pz = sz(126),
      rz = sz(4436),
      Yz = sz(39894),
      xz = sz(1715),
      mz = sz(39901);
    const Jz = "bloxd-webgpuOffAfterLoss",
      Iz = "context:webgl",
      Cz = "probe:threw";

    function ez(zz) {
      let tz;
      try {
        tz = zz.getContext("webgl", {
          powerPreference: Bz.b
        })
      } catch {
        tz = null
      }
      if (null === tz) return null;
      let sz = null;
      try {
        const zz = tz.getParameter(tz.MAX_TEXTURE_SIZE);
        sz = "number" === typeof zz && zz > 0 ? zz : null
      } catch {
        sz = null
      }
      try {
        var Fz;
        null === (Fz = tz.getExtension("WEBGL_lose_context")) || void 0 === Fz || Fz.loseContext()
      } catch {}
      return sz
    }
    const Zz = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      Gz = "mali_valhall",
      Tz = new Set(["nvidia_pre_turing"]);

    function cz(zz) {
      return function(zz) {
        try {
          return zz()
        } catch {
          return null
        }
      }((() => {
        var tz, sz, Fz, Oz;
        const oz = null !== (tz = null === (sz = zz.info) || void 0 === sz ? void 0 : sz.vendor) && void 0 !== tz ? tz : "";
        return "windows" === (0, Nz.getOperatingSystem)() && "" !== oz && "intel" !== (0, Nz.normaliseGpuVendor)(oz) ? null : ((0, Nz.seedGpuVendor)(oz), vz = (0, Wz.j)(), Uz = (0, Xz.h)(oz, null !== (Fz = null === (Oz = zz.info) || void 0 === Oz ? void 0 : Oz.architecture) && void 0 !== Fz ? Fz : ""), Zz.has(vz) ? "android_arm" === vz && Uz === Gz ? "webgpu_default" : "webgl_default" : null);
        var vz, Uz
      }))
    }

    function jz() {
      var zz;
      return {
        gpu: null !== (zz = navigator.gpu) && void 0 !== zz ? zz : null,
        webgl2: () => {
          try {
            return null !== document.createElement("canvas").getContext("webgl2")
          } catch {
            return !1
          }
        },
        webgl1: () => function(zz) {
          let tz, sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yz.b;
          try {
            tz = zz.getContext("webgl")
          } catch {
            tz = null
          }
          if (null === tz) return [Iz];
          const Fz = [];
          try {
            for (const Wz of sz.extensions) null === tz.getExtension(Wz) && Fz.push(Wz);
            for (const [Wz, Xz] of Object.entries(sz.limits)) {
              const zz = tz[Wz],
                sz = "number" === typeof zz ? tz.getParameter(zz) : null;
              ("number" !== typeof sz || sz < Xz) && Fz.push(`limit:${Wz}`)
            }
            const zz = tz.getShaderPrecisionFormat(tz.VERTEX_SHADER, tz.HIGH_FLOAT);
            (null === zz || zz.precision < sz.vertexHighFloatBits) && Fz.push("precision:vertex_high_float")
          } catch {
            Fz.push(Cz)
          }
          try {
            var Wz;
            null === (Wz = tz.getExtension("WEBGL_lose_context")) || void 0 === Wz || Wz.loseContext()
          } catch {}
          return Fz
        }(document.createElement("canvas")),
        offAfterLoss: zz => Az((() => zz ? (0, Dz.z)() : Oz.b.isWebGpuOffAfterLoss())),
        oldIntelDriver: zz => Az((() => (0, gz.e)(zz))),
        intelGen9: zz => Az((() => (0, gz.h)(zz))),
        gpuClassWebGlArm: cz,
        storeGpuClassVerdict: zz => {
          wz.f.setItem(gz.v, zz)
        },
        gpuClassOnWebGl: zz => (0, Hz.e)(zz),
        override: () => function() {
          if ((0, oz.i)("render") && "webgl1" === (0, oz.h)("renderer")) return "webgl1";
          const zz = [() => new URLSearchParams(window.location.search).get(Kz.d), () => wz.f.getItem(Kz.h), () => {
            const zz = localStorage.getItem(Jz);
            return null !== zz && localStorage.removeItem(Jz), "1" === zz ? "webgl2" : null
          }];
          for (const tz of zz) {
            let zz = null;
            try {
              zz = yz(tz())
            } catch {}
            if (null !== zz) return zz
          }
          return null
        }(),
        claimed: () => yz((0, vz.j)()),
        webGpuSetting: () => {
          const zz = wz.f.getItem(Fz.ec);
          return "boolean" === typeof zz ? zz : null
        },
        heldBack: () => Hz.g,
        storeHoldbackSpared: zz => {
          wz.f.setItem(gz.u, zz)
        },
        intelGen9OnWebGl: () => Hz.k,
        Cw: () => Az((() => (0, uz.f)(Nz.featureFlags.settings.canUseShaderPacks))),
        windows: () => Az((() => "windows" === (0, Nz.getOperatingSystem)()))
      }
    }

    function Az(zz) {
      try {
        return zz()
      } catch {
        return !1
      }
    }

    function yz(zz) {
      return "lite" === zz ? "webgpu" : "webgl2" === zz || "babylon" === zz ? "webgl" : null
    }
    async function Mz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jz();
      const tz = await async function(zz) {
        const tz = function(zz) {
            const tz = zz.override(),
              sz = zz.webGpuSetting(),
              Fz = null === tz && !0 !== sz && zz.Cw(),
              Wz = null !== tz || null !== sz || Fz ? null : zz.claimed(),
              Xz = null !== tz ? "override" : !0 === sz ? "setting" : Fz ? "pack" : !1 === sz ? "setting" : null !== Wz ? "claim" : "default",
              Oz = function(zz) {
                return "override" === zz || "setting" === zz
              }(Xz);
            if ("webgl" === tz || "webgl1" === tz || "webgl" === Wz || "setting" === Xz && !1 === sz) return {
              source: Xz,
              asked: Oz,
              refused: "not_requested"
            };
            if (!zz.gpu) return {
              source: Xz,
              asked: Oz,
              refused: "no_webgpu_api"
            };
            const oz = "default" === Xz && zz.heldBack();
            if (oz && !zz.windows()) return {
              source: Xz,
              asked: Oz,
              refused: "webgl_holdback"
            };
            if (!Oz && zz.offAfterLoss("pack" === Xz)) return {
              source: Xz,
              asked: Oz,
              refused: oz ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: Xz,
              asked: Oz,
              heldBack: oz,
              gpu: zz.gpu
            }
          }(zz),
          {
            source: sz
          } = tz,
          Fz = !tz.asked,
          Wz = "gpu" in tz && tz.heldBack,
          Oz = function(zz) {
            return Wz && "none" !== zz ? {
              reason: "webgl_holdback",
              adapter: null,
              source: sz
            } : {
              reason: zz,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: sz
            }
          };
        if (!("gpu" in tz)) return Oz(tz.refused);
        let oz;
        try {
          oz = await (0, xz.f)((0, Pz.o)(tz.gpu), Ft, `requestAdapter didn't settle in ${Ft/1e3} s`)
        } catch {
          return Oz("adapter_error")
        }
        if ("string" === typeof oz) return Oz(oz);
        const vz = (0, Pz.e)(oz);
        if ((0, Pz.i)(oz)) return Oz("software_adapter", vz);
        const Uz = zz.windows() && function(zz) {
          return Tz.has((0, Xz.h)(zz.vendor, zz.architecture))
        }(vz);
        if (zz.storeHoldbackSpared(Uz), Wz && !Uz) return Oz("webgl_holdback");
        const Kz = zz.intelGen9(oz),
          uz = Kz ? null : zz.gpuClassWebGlArm(oz);
        if (zz.storeGpuClassVerdict(null !== uz && void 0 !== uz && uz), Fz && zz.oldIntelDriver(oz)) return Oz("old_intel_driver", vz);
        if ("default" === sz && zz.intelGen9OnWebGl() && Kz) return Oz("intel_gen9", vz);
        if ("default" === sz && null !== uz && zz.gpuClassOnWebGl(uz)) return Oz("gpu_class_webgl", vz);
        return Oz("none", vz)
      }(zz);
      if ("none" === tz.reason) return {
        backend: "webgpu",
        ...tz
      };
      if ("webgl1" !== zz.override() && zz.webgl2()) return {
        backend: "webgl",
        ...tz
      };
      const sz = zz.webgl1();
      return 0 === sz.length ? {
        backend: "webgl1",
        ...tz
      } : {
        missing: sz
      }
    }
    let dz = !1;
    async function hz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jz();
      if (null === zz) return null;
      const sz = await Mz(tz);
      return dz = !("missing" in sz) && "webgpu" === sz.backend && "claim" === sz.source, "missing" in sz ? sz : {
        ...sz,
        load: zz[sz.backend]
      }
    }
    async function Qz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jz().gpu,
        Fz = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== zz.backend) return !1;
      const Wz = Lz(tz, "indirectDraws", "off", "on");
      if (null !== Wz) return Wz;
      if (null !== zz.adapter && (0, gz.l)(zz.adapter, Fz)) return !0;
      if (null === sz) return !1;
      try {
        var Xz;
        const zz = await (0, xz.f)(sz.requestAdapter({
          powerPreference: "low-power"
        }), Ft, `the low-power requestAdapter didn't settle in ${Ft/1e3} s`);
        return (0, gz.l)(null !== (Xz = null === zz || void 0 === zz ? void 0 : zz.info) && void 0 !== Xz ? Xz : {}, Fz)
      } catch (Oz) {
        return Oz instanceof xz.d
      }
    }

    function kz(zz, tz, sz) {
      if ("webgpu" !== zz.backend) return !1;
      const Fz = Lz(tz, "terrainFetch", "texture", "storage");
      return null !== Fz ? Fz : null !== zz.adapter && (0, gz.f)(zz.adapter, sz)
    }

    function iz(zz, tz, sz) {
      if ("webgpu" !== zz.backend) return !1;
      const Fz = Lz(tz, "sceneDepth", "off", "on");
      return null !== Fz ? Fz : null !== zz.adapter && (0, gz.g)(zz.adapter, sz)
    }

    function Lz(zz, tz, sz, Fz) {
      const Wz = new URLSearchParams(zz).get(tz),
        Xz = null !== Wz && void 0 !== Wz ? Wz : (0, vz.e)(tz);
      return Xz !== sz && Xz !== Fz ? null : (dz ||= null === Wz, Xz === sz)
    }

    function lz(zz, tz) {
      return "webgl" === zz.backend && (0, Xz.s)(tz)
    }

    function nz(zz) {
      return null !== zz && "missing" in zz
    }

    function az(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oz.b;
      try {
        const sz = "start_failed" === zz || "pipeline_failed" === zz,
          Fz = tz.turnOffWebGpuAfterDeviceLoss(sz ? "visible" : (0, Dz.i)((0, bz.l)()));
        return !dz || Fz && !tz.isWebGpuOffAfterLoss() || (0, vz.u)("webgpuLoss"), tz.isWebGpuOffAfterLoss() && "webgpu" === yz(wz.f.getItem(Kz.h)) && wz.f.removeItem(Kz.h), (0, oz.i)("webgpuloss") && (0, Uz.b)((tz => {
          tz.noteWebGpuLoss("wasm", Fz ? zz : `${zz}, which storage didn't keep`, null)
        })), Fz
      } catch {
        return !1
      }
    }

    function qz(zz) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Rz()) ? az(zz) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const Sz = "framePacing";

    function Vz(zz) {
      const tz = new URLSearchParams(zz).get(Sz);
      return null !== tz && /^\d{1,9}$/.test(tz) ? Number(tz) : void 0
    }

    function Rz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === yz(new URLSearchParams(zz).get(Kz.d))
      } catch {
        return !1
      }
    }

    function pz(zz) {
      return !!fz(zz) || zz instanceof Error && !(zz instanceof WebAssembly.RuntimeError) && zz.message.startsWith(`${rz.g.RenderSurfaceUnusable}:`)
    }

    function fz(zz) {
      const {
        name: tz,
        message: sz
      } = null !== zz && void 0 !== zz ? zz : {};
      return "InvalidStateError" === tz && "string" === typeof sz && sz.startsWith("GPUDevice.")
    }

    function Ez(zz) {
      const tz = zz;
      return "function" === typeof tz.Isz && "function" === typeof tz.Csz ? tz : null
    }

    function zt(zz) {
      return "function" === typeof zz.Asz ? zz : null
    }
    const tt = "openRenderer";

    function st(zz) {
      const tz = null === zz || void 0 === zz ? void 0 : zz.SWz();
      return void 0 === tz ? void 0 : new Error(tz)
    }
    const Ft = 5e3,
      Wt = 15e3;

    function Xt(zz, tz, sz, Fz, Wz, Xz) {
      return (0, xz.f)(function(zz, tz, sz, Fz, Wz, Xz) {
        return (0, mz.e)(zz, tz, (() => zz.Asz(sz, Fz, Wz, Xz.indirectHangs, Xz.storagePullBreaks, Xz.splitPassBreaks, Xz.framesAhead, Xz.instancedTerrainSlow)))
      }(zz, tz, sz, Fz, Wz, Xz), Wt, `${rz.g.RenderSurfaceUnusable}: the renderer didn't open in ${Wt/1e3} s`, ot)
    }
    async function Ot(zz, tz, sz, Fz, Wz, Xz) {
      if ("function" !== typeof zz.dXz) throw new Error("this core has no set_renderer");
      const Oz = await Xt(tz, tt, sz, Wz, Fz, Xz);
      try {
        zz.dXz(Oz)
      } catch (oz) {
        throw ot(Oz), oz
      }
    }

    function ot(zz) {
      try {
        zz.free()
      } catch {}
    }
  },
  39894: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz
    });
    const Fz = {
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
  39908: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz,
      d: () => oz
    });
    var Fz = sz(664),
      Wz = sz(666);

    function Xz(zz, tz) {
      const sz = null === tz ? void 0 : Fz.c.get(tz);
      return "all" === sz || "webgl" === sz && "webgpu" !== zz.backend ? tz : null
    }

    function Oz(zz) {
      return "software_adapter" === zz.reason ? null : zz.adapter
    }

    function oz(zz, tz) {
      const sz = (0, Fz.v)();
      return null === sz ? null : (0, Fz.g)(Oz(zz), sz, tz ? Fz.l : Fz.h)
    }

    function vz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wz.k;
      const Fz = Xz(zz, tz);
      return null !== Fz && "webgl" === zz.backend && sz(Fz) ? null : Fz
    }
  },
  39901: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      e: () => Kz,
      i: () => Oz,
      j: () => vz
    });
    var Fz = sz(35805);
    class Wz extends Error {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${zz}: the module trapped${sz?" in an earlier call":""}: ${String(tz)}`, {
          cause: tz
        }), this.site = zz, this.trap = tz, this.earlier = sz, this.name = "ModuleTrapError", tz instanceof Error && void 0 !== tz.stack && (this.stack = `${this.name}: ${this.message}\n${tz.stack}`)
      }
    }
    const Xz = new WeakMap;

    function Oz(zz) {
      return Xz.has(zz)
    }

    function oz(zz, tz) {
      Xz.has(zz) || Xz.set(zz, tz)
    }

    function vz(zz, tz) {
      return !!(0, Fz.f)(tz) && (oz(zz, tz), !0)
    }
    const Uz = [
      ["error", zz => zz.error],
      ["unhandledrejection", zz => zz.reason]
    ];

    function Kz(zz, tz, sz) {
      let Oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return Xz.has(zz) ? Promise.reject(new Wz(tz, Xz.get(zz), !0)) : new Promise(((Xz, vz) => {
        const Kz = sz => {
            oz(zz, sz), bz(), vz(new Wz(tz, sz))
          },
          uz = zz => {
            zz instanceof WebAssembly.RuntimeError ? Kz(zz) : (bz(), vz(zz))
          },
          Nz = Uz.map((zz => {
            let [tz, sz] = zz;
            return [tz, zz => {
              const tz = sz(zz);
              (0, Fz.f)(tz) && Kz(tz)
            }]
          })),
          bz = () => {
            for (const [zz, tz] of Nz) null === Oz || void 0 === Oz || Oz.removeEventListener(zz, tz)
          };
        for (const [zz, tz] of Nz) null === Oz || void 0 === Oz || Oz.addEventListener(zz, tz);
        let wz;
        try {
          wz = sz()
        } catch (Dz) {
          return void uz(Dz)
        }
        wz.then((zz => {
          bz(), Xz(zz)
        }), uz)
      }))
    }
  },
  39912: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => jz,
      D: () => Jz,
      F: () => Tz,
      I: () => cz,
      L: () => yz,
      P: () => Gz,
      d: () => mz,
      f: () => rz,
      h: () => Mz,
      k: () => Az,
      l: () => Pz,
      m: () => xz,
      q: () => Hz,
      r: () => Cz,
      u: () => Zz,
      x: () => kz,
      z: () => Qz
    });
    var Fz = sz(214),
      Wz = sz(277),
      Xz = sz(30),
      Oz = sz(302),
      oz = sz(44),
      vz = sz(39887),
      Uz = sz(39908),
      Kz = sz(39918),
      uz = (sz(39903), sz(39927)),
      Nz = sz(39931);
    const bz = "wasmJoinBuild";
    let wz = null,
      Dz = null,
      gz = null;

    function Hz(zz) {
      gz = zz
    }
    let Bz = !1;

    function Pz() {
      Bz = !0
    }

    function rz() {
      return Bz
    }
    let Yz = !1;

    function xz() {
      Yz = !0
    }

    function mz() {
      return Yz
    }

    function Jz() {
      return gz
    }
    let Iz = null;

    function Cz(zz) {
      Iz = zz, (0, Oz.d)(zz)
    }
    const ez = "wasmClientRenderLost";

    function Zz() {
      oz.j.setItem(ez, !0)
    }

    function Gz() {
      return !0 === oz.j.getItem(ez)
    }

    function Tz() {
      return Iz
    }

    function cz() {
      return null === wz && (oz.f.removeItem("wasmLastPick"), oz.f.removeItem("wasmGuessVerdict"), (0, Oz.o)(), wz = (0, vz.v)(Kz.d).then((zz => (null === zz || (0, vz.m)(zz) || (Dz = uz.e[zz.backend], Xz.b.followGameGpu("webgpu" === zz.backend ? zz.adapter : null), "webgpu" === zz.backend && (0, Nz.d)()), zz)))), wz
    }

    function jz() {
      return Dz
    }

    function Az(zz) {
      return zz ? zz.load() : Promise.resolve().then((function() {
        var zz = new Error("Cannot find module '@bloxd/wasm/client'");
        throw zz.code = "MODULE_NOT_FOUND", zz
      })).then((zz => zz.bloxdWasmClient))
    }

    function yz(zz) {
      oz.f.setItem(bz, zz)
    }
    async function Mz() {
      if (null === Kz.d) return Az(null);
      const zz = oz.f.getItem(bz);
      let tz = "none" === zz ? null : "webgl";
      return null !== zz && "none" !== zz && ("string" === typeof zz && void 0 !== (0, Fz.e)(Kz.d, zz) ? tz = zz : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(zz)}, is none of this client's: guessing WebGL2's`)), null === tz ? null : Kz.d[tz]()
    }
    let dz = null,
      hz = null;

    function Qz() {
      return dz ??= cz().then((async zz => {
        var tz;
        const sz = null !== zz && !(0, vz.m)(zz),
          Fz = {
            indirectHangs: sz && await (0, vz.w)(zz, window.location.search),
            storagePullBreaks: sz && (0, vz.J)(zz, window.location.search),
            splitPassBreaks: sz && (0, vz.F)(zz, window.location.search),
            framesAhead: (0, vz.g)(window.location.search),
            instancedTerrainSlow: sz && (0, vz.A)(zz, null !== (tz = (0, Uz.d)(zz, !1)) && void 0 !== tz ? tz : (0, Wz.e)())
          };
        return hz = Fz.indirectHangs, Fz
      })), dz
    }

    function kz() {
      return hz
    }
  },
  39927: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    const Fz = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  39918: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      d: () => Fz
    });
    const Fz = {
        webgpu: async () => (await sz.e(8).then((() => sz(42294)))).bloxdWasmWebgpu,
        webgl: async () => (await sz.e(6).then((() => sz(42303)))).bloxdWasmWebgl,
        webgl1: async () => (await sz.e(7).then((() => sz(42314)))).bloxdWasmWebgl1
      },
      Wz = async () => (await sz.e(5).then((() => sz(42328)))).compileAnimationPackInWasm
  },
  39938: (zz, tz, sz) => {
    function Fz() {
      return sz(39943)
    }

    function Wz() {
      return sz(39947)
    }

    function Xz(zz) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(zz)
    }
    sz.d(tz, {
      c: () => Xz,
      g: () => Fz,
      j: () => Wz
    })
  },
  39931: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      d: () => vz
    });
    var Fz = sz(106);
    const Wz = "webgpuPipeline";

    function Xz(zz) {
      return zz.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let Oz = null;

    function oz() {
      if (null === Oz) try {
        zz = (0, Fz.getBrowserName)(), tz = (0, Fz.getBrowserVersion)(), sz = (0, Fz.getOperatingSystem)(), Wz = (0, Fz.getOperatingSystemVersion)(), Oz = `${zz.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===tz?"unknown":Xz(tz)}-${sz}${void 0===Wz?"":`_${Xz(Wz)}`}`
      } catch (oz) {
        console.warn("The user agent couldn't be read for its browser code", oz), Oz = "unknown"
      }
      var zz, tz, sz, Wz;
      return Oz
    }

    function vz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const tz = `WGPU-${oz()}`,
        Fz = (zz, Fz) => {
          const {
            reason: Xz,
            message: Oz
          } = Fz, oz = {
            pipeline: null !== zz && void 0 !== zz ? zz : "",
            reason: String(Xz),
            browserMessage: String(Oz)
          };
          Promise.all([sz.e(262), sz.e(86)]).then((() => sz(40033))).then((zz => {
            let {
              reportCrash: sz
            } = zz;
            sz({
              kind: "coreError",
              code: tz,
              site: Wz,
              fatal: !1,
              message: `${oz.pipeline} ${oz.reason}: ${oz.browserMessage}`,
              details: oz,
              error: Fz
            })
          })).catch((zz => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", zz)
          }))
        },
        Xz = zz.createRenderPipelineAsync;
      zz.createRenderPipelineAsync = function(zz) {
        return Xz.call(this, zz).catch((tz => {
          throw Fz(zz.label, tz), tz
        }))
      };
      const Oz = zz.createComputePipelineAsync;
      zz.createComputePipelineAsync = function(zz) {
        return Oz.call(this, zz).catch((tz => {
          throw Fz(zz.label, tz), tz
        }))
      }
    }
  },
  39879: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/bloxd_wasm_models_bg.48243d0ab8fffb703925.wasm"
  },
  39877: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/bloxd_wasm_workers_bg.8fec01ac6a33cb4fe19c.wasm"
  },
  39943: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  39947: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  39875: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz,
      h: () => Fz
    });
    const Fz = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new sz.U(sz(39877))
      }
    };
    const Wz = {
      name: "bloxd_wasm_models",
      url: function() {
        return new sz.U(sz(39879))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);