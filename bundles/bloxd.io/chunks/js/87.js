export const id = 87;
export const ids = [87];
export const modules = {
  4564: (zz, uz, bz) => {
    bz.d(uz, {
      $: () => Jz,
      A: () => iz,
      Ab: () => Pz,
      Cb: () => Uz,
      E: () => Zz,
      Eb: () => az,
      Gb: () => mz,
      I: () => Wz,
      Jb: () => qz,
      M: () => Hz,
      Mb: () => fz,
      N: () => Rz,
      Ob: () => sz,
      P: () => tz,
      Q: () => dz,
      Qb: () => gz,
      S: () => pz,
      Tb: () => nz,
      W: () => Nz,
      Wb: () => Qz,
      Z: () => xz,
      ab: () => vz,
      bb: () => Az,
      c: () => Dz,
      cb: () => cz,
      fb: () => hz,
      g: () => yz,
      j: () => Oz,
      jb: () => Vz,
      m: () => Xz,
      mb: () => Tz,
      o: () => Sz,
      pb: () => Gz,
      q: () => wz,
      qb: () => Lz,
      s: () => Kz,
      u: () => lz,
      ub: () => Fz,
      vb: () => oz,
      wb: () => rz,
      x: () => Mz,
      y: () => Ez
    });
    const Ez = 32,
      nz = 33.333333333333336,
      iz = {
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
      lz = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Mz = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      tz = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Hz = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Oz = {
        Look: 0,
        Remesh: 1
      },
      pz = 8,
      dz = 1,
      Fz = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Zz = {
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
      Rz = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Kz = {
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
      wz = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Xz = 4,
      fz = 4,
      sz = 65535,
      rz = {
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
      oz = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Nz = 88,
      vz = 0,
      xz = 24,
      Jz = 48,
      Az = 80,
      Tz = {
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
      Lz = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Pz = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Gz = {
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
      az = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Vz = 65535,
      mz = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      qz = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      hz = 2,
      Uz = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      cz = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      gz = {
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
      Sz = {
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
      yz = {
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
      Dz = 8,
      Qz = {
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
      Wz = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  39993: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz
    });
    const Ez = 1 << 20,
      nz = 1 << 21,
      iz = 1024,
      lz = 2048;

    function Mz(zz, uz, bz) {
      const Mz = zz + Ez,
        tz = uz + iz,
        Hz = bz + Ez;
      return Mz < 0 || Mz >= nz || Hz < 0 || Hz >= nz || tz < 0 || tz >= lz ? -1 : (Mz * nz + Hz) * lz + tz
    }
  },
  39987: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      f: () => lz,
      g: () => nz,
      k: () => iz,
      l: () => Oz,
      o: () => Hz,
      q: () => tz,
      u: () => Mz
    });
    bz(3204);
    bz(39993);

    function Ez(zz) {}

    function nz(zz) {}

    function iz(zz) {}

    function lz(zz) {}

    function Mz(zz) {}

    function tz(zz, uz, bz) {}

    function Hz(zz) {}

    function Oz(zz) {}
  },
  39965: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Dz,
      E: () => zu,
      F: () => Sz,
      J: () => gz,
      N: () => ez,
      Q: () => Wz,
      S: () => bu,
      W: () => Bz,
      Y: () => Az,
      c: () => uu,
      f: () => lu,
      h: () => Iz,
      i: () => kz,
      m: () => Qz,
      o: () => Yz,
      r: () => Cz,
      t: () => iu,
      x: () => Uz,
      z: () => cz
    });
    var Ez = bz(316),
      nz = bz(277),
      iz = bz(284),
      lz = bz(20),
      Mz = bz(2689),
      tz = bz(646),
      Hz = bz(4284),
      Oz = bz(2644),
      pz = bz(3198),
      dz = bz(96),
      Fz = bz(311),
      Zz = bz(33),
      Rz = bz(298),
      Kz = bz(115),
      wz = bz(601),
      Xz = bz(125),
      fz = bz(120),
      sz = bz(4564),
      rz = bz(39967),
      oz = bz(1732),
      Nz = bz(39976);
    const vz = "bloxd-webgpuOffAfterLoss",
      xz = "context:webgl",
      Jz = "probe:threw";

    function Az(zz) {
      let uz;
      try {
        uz = zz.getContext("webgl", {
          powerPreference: Xz.b
        })
      } catch {
        uz = null
      }
      if (null === uz) return null;
      let bz = null;
      try {
        const zz = uz.getParameter(uz.MAX_TEXTURE_SIZE);
        bz = "number" === typeof zz && zz > 0 ? zz : null
      } catch {
        bz = null
      }
      try {
        var Ez;
        null === (Ez = uz.getExtension("WEBGL_lose_context")) || void 0 === Ez || Ez.loseContext()
      } catch {}
      return bz
    }
    const Tz = new Set(["android_arm", "chromeos_other", "windows_intel_low"]),
      Lz = "mali_valhall",
      Pz = new Set(["nvidia_pre_turing"]);

    function Gz(zz) {
      return function(zz) {
        try {
          return zz()
        } catch {
          return null
        }
      }((() => {
        var uz, bz, Ez, lz;
        const Mz = null !== (uz = null === (bz = zz.info) || void 0 === bz ? void 0 : bz.vendor) && void 0 !== uz ? uz : "";
        return "windows" === (0, dz.getOperatingSystem)() && "" !== Mz && "intel" !== (0, dz.normaliseGpuVendor)(Mz) ? null : ((0, dz.seedGpuVendor)(Mz), tz = (0, nz.j)(), Hz = (0, iz.d)(Mz, null !== (Ez = null === (lz = zz.info) || void 0 === lz ? void 0 : lz.architecture) && void 0 !== Ez ? Ez : ""), Tz.has(tz) ? "android_arm" === tz && Hz === Lz ? "webgpu_default" : "webgl_default" : null);
        var tz, Hz
      }))
    }

    function az() {
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
          let uz, bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rz.c;
          try {
            uz = zz.getContext("webgl")
          } catch {
            uz = null
          }
          if (null === uz) return [xz];
          const Ez = [];
          try {
            for (const nz of bz.extensions) null === uz.getExtension(nz) && Ez.push(nz);
            for (const [nz, iz] of Object.entries(bz.limits)) {
              const zz = uz[nz],
                bz = "number" === typeof zz ? uz.getParameter(zz) : null;
              ("number" !== typeof bz || bz < iz) && Ez.push(`limit:${nz}`)
            }
            const zz = uz.getShaderPrecisionFormat(uz.VERTEX_SHADER, uz.HIGH_FLOAT);
            (null === zz || zz.precision < bz.vertexHighFloatBits) && Ez.push("precision:vertex_high_float")
          } catch {
            Ez.push(Jz)
          }
          try {
            var nz;
            null === (nz = uz.getExtension("WEBGL_lose_context")) || void 0 === nz || nz.loseContext()
          } catch {}
          return Ez
        }(document.createElement("canvas")),
        offAfterLoss: zz => Vz((() => zz ? (0, Rz.w)() : lz.e.isWebGpuOffAfterLoss())),
        oldIntelDriver: zz => Vz((() => (0, Kz.h)(zz))),
        intelGen9: zz => Vz((() => (0, Kz.p)(zz))),
        gpuClassWebGlArm: Gz,
        storeGpuClassVerdict: zz => {
          Zz.g.setItem(Kz.D, zz)
        },
        gpuClassOnWebGl: zz => (0, wz.b)(zz),
        override: () => function() {
          if ((0, Mz.n)("render") && "webgl1" === (0, Mz.m)("renderer")) return "webgl1";
          const zz = [() => new URLSearchParams(window.location.search).get(Oz.c), () => Zz.g.getItem(Oz.e), () => {
            const zz = localStorage.getItem(vz);
            return null !== zz && localStorage.removeItem(vz), "1" === zz ? "webgl2" : null
          }];
          for (const uz of zz) {
            let zz = null;
            try {
              zz = mz(uz())
            } catch {}
            if (null !== zz) return zz
          }
          return null
        }(),
        claimed: () => mz((0, tz.l)()),
        webGpuSetting: () => {
          const zz = Zz.g.getItem(Ez.zc);
          return "boolean" === typeof zz ? zz : null
        },
        heldBack: () => wz.d,
        storeHoldbackSpared: zz => {
          Zz.g.setItem(Kz.B, zz)
        },
        intelGen9OnWebGl: () => wz.e,
        JZ: () => Vz((() => (0, pz.c)(dz.featureFlags.settings.canUseShaderPacks))),
        windows: () => Vz((() => "windows" === (0, dz.getOperatingSystem)()))
      }
    }

    function Vz(zz) {
      try {
        return zz()
      } catch {
        return !1
      }
    }

    function mz(zz) {
      return "lite" === zz ? "webgpu" : "webgl2" === zz || "babylon" === zz ? "webgl" : null
    }
    async function qz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : az();
      const uz = await async function(zz) {
        const uz = function(zz) {
            const uz = zz.override(),
              bz = zz.webGpuSetting(),
              Ez = null === uz && !0 !== bz && zz.JZ(),
              nz = null !== uz || null !== bz || Ez ? null : zz.claimed(),
              iz = null !== uz ? "override" : !0 === bz ? "setting" : Ez ? "pack" : !1 === bz ? "setting" : null !== nz ? "claim" : "default",
              lz = function(zz) {
                return "override" === zz || "setting" === zz
              }(iz);
            if ("webgl" === uz || "webgl1" === uz || "webgl" === nz || "setting" === iz && !1 === bz) return {
              source: iz,
              asked: lz,
              refused: "not_requested"
            };
            if (!zz.gpu) return {
              source: iz,
              asked: lz,
              refused: "no_webgpu_api"
            };
            const Mz = "default" === iz && zz.heldBack();
            if (Mz && !zz.windows()) return {
              source: iz,
              asked: lz,
              refused: "webgl_holdback"
            };
            if (!lz && zz.offAfterLoss("pack" === iz)) return {
              source: iz,
              asked: lz,
              refused: Mz ? "webgl_holdback" : "off_after_loss"
            };
            return {
              source: iz,
              asked: lz,
              heldBack: Mz,
              gpu: zz.gpu
            }
          }(zz),
          {
            source: bz
          } = uz,
          Ez = !uz.asked,
          nz = "gpu" in uz && uz.heldBack,
          lz = function(zz) {
            return nz && "none" !== zz ? {
              reason: "webgl_holdback",
              adapter: null,
              source: bz
            } : {
              reason: zz,
              adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              source: bz
            }
          };
        if (!("gpu" in uz)) return lz(uz.refused);
        let Mz;
        try {
          Mz = await (0, oz.l)((0, fz.o)(uz.gpu), Eu, `requestAdapter didn't settle in ${Eu/1e3} s`)
        } catch {
          return lz("adapter_error")
        }
        if ("string" === typeof Mz) return lz(Mz);
        const tz = (0, fz.d)(Mz);
        if ((0, fz.g)(Mz)) return lz("software_adapter", tz);
        const Hz = zz.windows() && function(zz) {
          return Pz.has((0, iz.d)(zz.vendor, zz.architecture))
        }(tz);
        if (zz.storeHoldbackSpared(Hz), nz && !Hz) return lz("webgl_holdback");
        const Oz = zz.intelGen9(Mz),
          pz = Oz ? null : zz.gpuClassWebGlArm(Mz);
        if (zz.storeGpuClassVerdict(null !== pz && void 0 !== pz && pz), Ez && zz.oldIntelDriver(Mz)) return lz("old_intel_driver", tz);
        if ("default" === bz && zz.intelGen9OnWebGl() && Oz) return lz("intel_gen9", tz);
        if ("default" === bz && null !== pz && zz.gpuClassOnWebGl(pz)) return lz("gpu_class_webgl", tz);
        return lz("none", tz)
      }(zz);
      if ("none" === uz.reason) return {
        backend: "webgpu",
        ...uz
      };
      if ("webgl1" !== zz.override() && zz.webgl2()) return {
        backend: "webgl",
        ...uz
      };
      const bz = zz.webgl1();
      return 0 === bz.length ? {
        backend: "webgl1",
        ...uz
      } : {
        missing: bz
      }
    }
    let hz = !1;
    async function Uz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : az();
      if (null === zz) return null;
      const bz = await qz(uz);
      return hz = !("missing" in bz) && "webgpu" === bz.backend && "claim" === bz.source, "missing" in bz ? bz : {
        ...bz,
        load: zz[bz.backend]
      }
    }
    async function cz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : az().gpu,
        Ez = arguments.length > 3 ? arguments[3] : void 0;
      if ("webgpu" !== zz.backend) return !1;
      const nz = yz(uz, "indirectDraws", "off", "on");
      if (null !== nz) return nz;
      if (null !== zz.adapter && (0, Kz.q)(zz.adapter, Ez)) return !0;
      if (null === bz) return !1;
      try {
        var iz;
        const zz = await (0, oz.l)(bz.requestAdapter({
          powerPreference: "low-power"
        }), Eu, `the low-power requestAdapter didn't settle in ${Eu/1e3} s`);
        return (0, Kz.q)(null !== (iz = null === zz || void 0 === zz ? void 0 : zz.info) && void 0 !== iz ? iz : {}, Ez)
      } catch (lz) {
        return lz instanceof oz.e
      }
    }

    function gz(zz, uz, bz) {
      if ("webgpu" !== zz.backend) return !1;
      const Ez = yz(uz, "terrainFetch", "texture", "storage");
      return null !== Ez ? Ez : null !== zz.adapter && (0, Kz.k)(zz.adapter, bz)
    }

    function Sz(zz, uz, bz) {
      if ("webgpu" !== zz.backend) return !1;
      const Ez = yz(uz, "sceneDepth", "off", "on");
      return null !== Ez ? Ez : null !== zz.adapter && (0, Kz.o)(zz.adapter, bz)
    }

    function yz(zz, uz, bz, Ez) {
      const nz = new URLSearchParams(zz).get(uz),
        iz = null !== nz && void 0 !== nz ? nz : (0, tz.e)(uz);
      return iz !== bz && iz !== Ez ? null : (hz ||= null === nz, iz === bz)
    }

    function Dz(zz, uz) {
      return "webgl" === zz.backend && (0, iz.l)(uz)
    }

    function Qz(zz) {
      return null !== zz && "missing" in zz
    }

    function Wz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lz.e;
      try {
        const bz = "start_failed" === zz || "pipeline_failed" === zz,
          Ez = uz.turnOffWebGpuAfterDeviceLoss(bz ? "visible" : (0, Rz.i)((0, Fz.k)()));
        return !hz || Ez && !uz.isWebGpuOffAfterLoss() || (0, tz.u)("webgpuLoss"), uz.isWebGpuOffAfterLoss() && "webgpu" === mz(Zz.g.getItem(Oz.e)) && Zz.g.removeItem(Oz.e), (0, Mz.n)("webgpuloss") && (0, Hz.d)((uz => {
          uz.noteWebGpuLoss("wasm", Ez ? zz : `${zz}, which storage didn't keep`, null)
        })), Ez
      } catch {
        return !1
      }
    }

    function ez(zz) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Bz()) ? Wz(zz) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
    }
    const jz = "framePacing";

    function Iz(zz) {
      const uz = new URLSearchParams(zz).get(jz);
      return null !== uz && /^\d{1,9}$/.test(uz) ? Number(uz) : void 0
    }

    function Bz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
      try {
        return "webgpu" === mz(new URLSearchParams(zz).get(Oz.c))
      } catch {
        return !1
      }
    }

    function Cz(zz) {
      return !!Yz(zz) || zz instanceof Error && !(zz instanceof WebAssembly.RuntimeError) && zz.message.startsWith(`${sz.g.RenderSurfaceUnusable}:`)
    }

    function Yz(zz) {
      const {
        name: uz,
        message: bz
      } = null !== zz && void 0 !== zz ? zz : {};
      return "InvalidStateError" === uz && "string" === typeof bz && bz.startsWith("GPUDevice.")
    }

    function kz(zz) {
      const uz = zz;
      return "function" === typeof uz.Obz && "function" === typeof uz.pbz ? uz : null
    }

    function zu(zz) {
      return "function" === typeof zz.Xbz ? zz : null
    }
    const uu = "openRenderer";

    function bu(zz) {
      const uz = null === zz || void 0 === zz ? void 0 : zz.Lnz();
      return void 0 === uz ? void 0 : new Error(uz)
    }
    const Eu = 5e3,
      nu = 15e3;

    function iu(zz, uz, bz, Ez, nz, iz) {
      return (0, oz.l)(function(zz, uz, bz, Ez, nz, iz) {
        return (0, Nz.i)(zz, uz, (() => zz.Xbz(bz, Ez, nz, iz.indirectHangs, iz.storagePullBreaks, iz.splitPassBreaks, iz.framesAhead, iz.instancedTerrainSlow)))
      }(zz, uz, bz, Ez, nz, iz), nu, `${sz.g.RenderSurfaceUnusable}: the renderer didn't open in ${nu/1e3} s`, Mu)
    }
    async function lu(zz, uz, bz, Ez, nz, iz) {
      if ("function" !== typeof zz.fiz) throw new Error("this core has no set_renderer");
      const lz = await iu(uz, uu, bz, nz, Ez, iz);
      try {
        zz.fiz(lz)
      } catch (Mz) {
        throw Mu(lz), Mz
      }
    }

    function Mu(zz) {
      try {
        zz.free()
      } catch {}
    }
  },
  39967: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez
    });
    const Ez = {
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
  39997: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => tz,
      f: () => Mz
    });
    var Ez = bz(659),
      nz = bz(668);

    function iz(zz, uz) {
      const bz = null === uz ? void 0 : Ez.d.get(uz);
      return "all" === bz || "webgl" === bz && "webgpu" !== zz.backend ? uz : null
    }

    function lz(zz) {
      return "software_adapter" === zz.reason ? null : zz.adapter
    }

    function Mz(zz, uz) {
      const bz = (0, Ez.p)();
      return null === bz ? null : (0, Ez.e)(lz(zz), bz, uz ? Ez.i : Ez.f)
    }

    function tz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nz.k;
      const Ez = iz(zz, uz);
      return null !== Ez && "webgl" === zz.backend && bz(Ez) ? null : Ez
    }
  },
  39976: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      i: () => Oz,
      m: () => lz,
      q: () => tz
    });
    var Ez = bz(39979);
    class nz extends Error {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(`${zz}: the module trapped${bz?" in an earlier call":""}: ${String(uz)}`, {
          cause: uz
        }), this.site = zz, this.trap = uz, this.earlier = bz, this.name = "ModuleTrapError", uz instanceof Error && void 0 !== uz.stack && (this.stack = `${this.name}: ${this.message}\n${uz.stack}`)
      }
    }
    const iz = new WeakMap;

    function lz(zz) {
      return iz.has(zz)
    }

    function Mz(zz, uz) {
      iz.has(zz) || iz.set(zz, uz)
    }

    function tz(zz, uz) {
      return !!(0, Ez.d)(uz) && (Mz(zz, uz), !0)
    }
    const Hz = [
      ["error", zz => zz.error],
      ["unhandledrejection", zz => zz.reason]
    ];

    function Oz(zz, uz, bz) {
      let lz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
      return iz.has(zz) ? Promise.reject(new nz(uz, iz.get(zz), !0)) : new Promise(((iz, tz) => {
        const Oz = bz => {
            Mz(zz, bz), Fz(), tz(new nz(uz, bz))
          },
          pz = zz => {
            zz instanceof WebAssembly.RuntimeError ? Oz(zz) : (Fz(), tz(zz))
          },
          dz = Hz.map((zz => {
            let [uz, bz] = zz;
            return [uz, zz => {
              const uz = bz(zz);
              (0, Ez.d)(uz) && Oz(uz)
            }]
          })),
          Fz = () => {
            for (const [zz, uz] of dz) null === lz || void 0 === lz || lz.removeEventListener(zz, uz)
          };
        for (const [zz, uz] of dz) null === lz || void 0 === lz || lz.addEventListener(zz, uz);
        let Zz;
        try {
          Zz = bz()
        } catch (Rz) {
          return void pz(Rz)
        }
        Zz.then((zz => {
          Fz(), iz(zz)
        }), pz)
      }))
    }
  },
  40002: (zz, uz, bz) => {
    bz.d(uz, {
      B: () => cz,
      C: () => az,
      D: () => vz,
      F: () => Pz,
      I: () => Gz,
      M: () => mz,
      N: () => Lz,
      e: () => Nz,
      f: () => sz,
      j: () => qz,
      k: () => Vz,
      o: () => fz,
      s: () => oz,
      v: () => wz,
      w: () => Jz,
      y: () => Tz,
      z: () => gz
    });
    var Ez = bz(206),
      nz = bz(284),
      iz = bz(20),
      lz = bz(311),
      Mz = bz(33),
      tz = bz(39965),
      Hz = bz(39997),
      Oz = bz(40009),
      pz = (bz(39987), bz(40013)),
      dz = bz(40017);
    const Fz = "wasmJoinBuild";
    let Zz = null,
      Rz = null,
      Kz = null;

    function wz(zz) {
      Kz = zz
    }
    let Xz = !1;

    function fz() {
      Xz = !0
    }

    function sz() {
      return Xz
    }
    let rz = !1;

    function oz() {
      rz = !0
    }

    function Nz() {
      return rz
    }

    function vz() {
      return Kz
    }
    let xz = null;

    function Jz(zz) {
      xz = zz, (0, lz.d)(zz)
    }
    const Az = "wasmClientRenderLost";

    function Tz() {
      Mz.h.setItem(Az, !0)
    }

    function Lz() {
      return !0 === Mz.h.getItem(Az)
    }

    function Pz() {
      return xz
    }

    function Gz() {
      return null === Zz && (Mz.g.removeItem("wasmLastPick"), Mz.g.removeItem("wasmGuessVerdict"), (0, lz.m)(), Zz = (0, tz.x)(Oz.d).then((zz => (null === zz || (0, tz.m)(zz) || (Rz = pz.e[zz.backend], iz.e.followGameGpu("webgpu" === zz.backend ? zz.adapter : null), "webgpu" === zz.backend && (0, dz.h)()), zz)))), Zz
    }

    function az() {
      return Rz
    }

    function Vz(zz) {
      return zz ? zz.load() : Promise.resolve().then((function() {
        var zz = new Error("Cannot find module '@bloxd/wasm/client'");
        throw zz.code = "MODULE_NOT_FOUND", zz
      })).then((zz => zz.bloxdWasmClient))
    }

    function mz(zz) {
      Mz.g.setItem(Fz, zz)
    }
    async function qz() {
      if (null === Oz.d) return Vz(null);
      const zz = Mz.g.getItem(Fz);
      let uz = "none" === zz ? null : "webgl";
      return null !== zz && "none" !== zz && ("string" === typeof zz && void 0 !== (0, Ez.e)(Oz.d, zz) ? uz = zz : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(zz)}, is none of this client's: guessing WebGL2's`)), null === uz ? null : Oz.d[uz]()
    }
    let hz = null,
      Uz = null;

    function cz() {
      return hz ??= Gz().then((async zz => {
        var uz;
        const bz = null !== zz && !(0, tz.m)(zz),
          Ez = {
            indirectHangs: bz && await (0, tz.z)(zz, window.location.search),
            storagePullBreaks: bz && (0, tz.J)(zz, window.location.search),
            splitPassBreaks: bz && (0, tz.F)(zz, window.location.search),
            framesAhead: (0, tz.h)(window.location.search),
            instancedTerrainSlow: bz && (0, tz.A)(zz, null !== (uz = (0, Hz.f)(zz, !1)) && void 0 !== uz ? uz : (0, nz.c)())
          };
        return Uz = Ez.indirectHangs, Ez
      })), hz
    }

    function gz() {
      return Uz
    }
  },
  40013: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    const Ez = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40009: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      d: () => Ez
    });
    const Ez = {
        webgpu: async () => (await bz.e(8).then((() => bz(42494)))).bloxdWasmWebgpu,
        webgl: async () => (await bz.e(6).then((() => bz(42510)))).bloxdWasmWebgl,
        webgl1: async () => (await bz.e(7).then((() => bz(42524)))).bloxdWasmWebgl1
      },
      nz = async () => (await bz.e(5).then((() => bz(42538)))).compileAnimationPackInWasm
  },
  40025: (zz, uz, bz) => {
    function Ez() {
      return bz(40027)
    }

    function nz() {
      return bz(40036)
    }

    function iz(zz) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(zz)
    }
    bz.d(uz, {
      e: () => iz,
      i: () => Ez,
      m: () => nz
    })
  },
  39979: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      e: () => lz
    });
    const Ez = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function nz(zz) {
      if (zz instanceof WebAssembly.RuntimeError) return !0;
      const uz = zz instanceof Error ? zz.stack : void 0;
      return "string" === typeof uz && Ez.test(uz)
    }
    const iz = 500;

    function lz(zz) {
      let uz = "[object Object]";
      try {
        uz = String(zz)
      } catch {}
      if ("[object Object]" !== uz) return uz;
      try {
        var bz, Ez;
        return null !== (bz = null === (Ez = JSON.stringify(zz)) || void 0 === Ez ? void 0 : Ez.slice(0, iz)) && void 0 !== bz ? bz : uz
      } catch {
        return uz
      }
    }
  },
  40017: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      h: () => tz
    });
    var Ez = bz(96);
    const nz = "webgpuPipeline";

    function iz(zz) {
      return zz.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
    }
    let lz = null;

    function Mz() {
      if (null === lz) try {
        zz = (0, Ez.getBrowserName)(), uz = (0, Ez.getBrowserVersion)(), bz = (0, Ez.getOperatingSystem)(), nz = (0, Ez.getOperatingSystemVersion)(), lz = `${zz.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===uz?"unknown":iz(uz)}-${bz}${void 0===nz?"":`_${iz(nz)}`}`
      } catch (Mz) {
        console.warn("The user agent couldn't be read for its browser code", Mz), lz = "unknown"
      }
      var zz, uz, bz, nz;
      return lz
    }

    function tz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
      const uz = `WGPU-${Mz()}`,
        Ez = (zz, Ez) => {
          const {
            reason: iz,
            message: lz
          } = Ez, Mz = {
            pipeline: null !== zz && void 0 !== zz ? zz : "",
            reason: String(iz),
            browserMessage: String(lz)
          };
          Promise.all([bz.e(262), bz.e(86)]).then((() => bz(40140))).then((zz => {
            let {
              reportCrash: bz
            } = zz;
            bz({
              kind: "coreError",
              code: uz,
              site: nz,
              fatal: !1,
              message: `${Mz.pipeline} ${Mz.reason}: ${Mz.browserMessage}`,
              details: Mz,
              error: Ez
            })
          })).catch((zz => {
            console.warn("A rejected WebGPU pipeline compile couldn't be reported", zz)
          }))
        },
        iz = zz.createRenderPipelineAsync;
      zz.createRenderPipelineAsync = function(zz) {
        return iz.call(this, zz).catch((uz => {
          throw Ez(zz.label, uz), uz
        }))
      };
      const lz = zz.createComputePipelineAsync;
      zz.createComputePipelineAsync = function(zz) {
        return lz.call(this, zz).catch((uz => {
          throw Ez(zz.label, uz), uz
        }))
      }
    }
  },
  39957: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/bloxd_wasm_models_bg.00aaab2512bf782de621.wasm"
  },
  39948: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/bloxd_wasm_workers_bg.a38acf9b069083b75635.wasm"
  },
  40027: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40036: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  39940: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      h: () => Ez
    });
    const Ez = {
      name: "bloxd_wasm_workers",
      url: function() {
        return new bz.U(bz(39948))
      }
    };
    const nz = {
      name: "bloxd_wasm_models",
      url: function() {
        return new bz.U(bz(39957))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);