export const id = 48;
export const ids = [48];
export const modules = {
  3846: (cB, Bc, nc) => {
    nc.d(Bc, {
      Ab: () => mB,
      C: () => qB,
      D: () => Mc,
      Db: () => ec,
      G: () => yB,
      Hb: () => Nc,
      J: () => pc,
      L: () => hc,
      Lb: () => Ic,
      N: () => zB,
      Nb: () => wc,
      O: () => aB,
      Q: () => Dc,
      U: () => Cc,
      X: () => bB,
      _: () => lc,
      b: () => Wc,
      bb: () => gB,
      c: () => oc,
      e: () => fc,
      eb: () => Yc,
      f: () => Ec,
      g: () => Tc,
      h: () => Oc,
      hb: () => Sc,
      kb: () => tB,
      l: () => uc,
      n: () => sc,
      nb: () => Lc,
      pb: () => vB,
      r: () => Vc,
      rb: () => Uc,
      u: () => rB,
      ub: () => Zc,
      w: () => Pc,
      y: () => kB,
      yb: () => Qc
    });
    const Vc = 32,
      Ic = 33.333333333333336,
      rB = {
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
        PacingLagUs: 30
      },
      uc = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2
      },
      sc = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Mc = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Pc = {
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
      qB = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Oc = {
        RawMessage: 1,
        CoreErrors: 2,
        LocalHurt: 16,
        AttackHit: 17,
        HealthChanged: 18,
        LocalPlayerBound: 19,
        ConnectionState: 20,
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
      Tc = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      fc = 4,
      mB = 4,
      ec = 65535,
      tB = {
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
      Sc = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      yB = 88,
      zB = 0,
      pc = 24,
      hc = 48,
      aB = 80,
      lc = {
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
      Yc = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Lc = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      gB = {
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
      Uc = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      bB = 65535,
      Zc = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Qc = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Cc = 2,
      vB = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Dc = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Nc = {
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
      Ec = {
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
      oc = {
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
      Wc = 8,
      wc = {
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
        ProgressBarUpdate: 33,
        RemoveMiddleScreenBar: 90,
        WorldVariation: 5,
        EditItemCraftingRecipes: 78
      },
      kB = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  38773: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      prefetchWasmClient: () => fc,
      startJoinLoad: () => Tc
    });
    var Vc = nc(2870),
      Ic = nc(35045),
      rB = nc(38780),
      uc = nc(38798),
      sc = nc(38820),
      Mc = nc(38827);
    const Pc = "[bloxd-wasm-client]";
    let qB = null,
      Oc = null;

    function Tc() {
      return Oc ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const cB = await (0, sc.A)();
        if (null === cB || (0, uc.v)(cB)) return;
        const Bc = await cB.load();
        "unloaded" === (0, Vc.E)() && (0, sc.k)(), await (0, Ic.h)(Bc, rB.f)
      })().catch((cB => {
        console.warn(`${Pc} the join's early load did not start: the boot loads the client itself`, cB)
      })), Oc
    }

    function fc() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
      return qB ??= async function(cB) {
        if (!await async function(cB) {
            if (cB()) return !1;
            let Bc;
            try {
              var Vc;
              const cB = await fetch(`${nc.p}static/js/8f728.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!cB.ok) throw new Error(`HTTP ${cB.status}`);
              if (/\bno-store\b/.test(null !== (Vc = cB.headers.get("Cache-Control")) && void 0 !== Vc ? Vc : "")) return !1;
              const Ic = await cB.json();
              if (!Array.isArray(Ic)) throw new Error("not a list");
              Bc = Ic
            } catch (rB) {
              return console.warn(`${Pc} the join's chunk list did not load: the join downloads its chunks itself`, rB), !cB()
            }
            if (cB()) return !1;
            const Ic = document.createElement("link").relList.supports("prefetch");
            for (const uc of Bc) {
              const cB = `${nc.p}${uc}`;
              Ic ? mB(cB) : ec(cB).catch((Bc => {
                console.warn(`${Pc} prefetching ${cB} failed`, Bc)
              }))
            }
            return !0
          }(cB)) return;
        const Bc = [ec((0, Mc.d)())];
        "unloaded" === (0, Vc.E)() && Bc.push(ec(rB.f.url().href), (0, sc.h)().then((Bc => {
          if (null === Bc || "unloaded" !== (0, Vc.E)() || cB()) return;
          const nc = new AbortController;
          return Bc.superseded.then((() => {
            nc.abort()
          })), ec(Bc.build.url().href, nc.signal).catch((cB => {
            if (!nc.signal.aborted) throw cB
          }))
        })));
        await Promise.all(Bc)
      }(cB).catch((cB => {
        console.warn(`${Pc} the prefetch failed: the join downloads the client itself`, cB)
      })), qB
    }

    function mB(cB) {
      const Bc = document.createElement("link");
      Bc.rel = "prefetch", Bc.href = cB, cB.endsWith(".js") && (Bc.crossOrigin = "anonymous"), document.head.appendChild(Bc)
    }
    async function ec(cB, Bc) {
      const nc = await fetch(cB, {
        priority: "low",
        signal: Bc
      });
      if (!nc.ok) throw new Error(`Fetching ${cB} failed: HTTP ${nc.status}`);
      const Vc = nc.body.getReader();
      for (; !(await Vc.read()).done;);
    }
  },
  38827: (cB, Bc, nc) => {
    function Vc() {
      return nc(38831)
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  38831: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/JetBrainsMonoNL-ExtraBold.e920f8e3b489009b4837.woff2"
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);