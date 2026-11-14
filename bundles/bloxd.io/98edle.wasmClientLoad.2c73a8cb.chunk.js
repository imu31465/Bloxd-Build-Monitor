export const id = 47;
export const ids = [47];
export const modules = {
  3775: (WW, RW, MW) => {
    MW.d(RW, {
      $: () => FW,
      A: () => mR,
      B: () => NW,
      Db: () => gR,
      F: () => JW,
      Fb: () => pW,
      I: () => IW,
      Jb: () => CW,
      Kb: () => VW,
      L: () => oW,
      M: () => PW,
      P: () => lW,
      T: () => dW,
      V: () => aR,
      Y: () => XW,
      ab: () => rR,
      e: () => EW,
      eb: () => fW,
      i: () => UW,
      ib: () => YW,
      k: () => tR,
      l: () => hW,
      lb: () => iR,
      m: () => BW,
      mb: () => QW,
      n: () => eW,
      p: () => AW,
      pb: () => sW,
      r: () => bR,
      sb: () => cR,
      t: () => wW,
      tb: () => jR,
      w: () => zR,
      wb: () => kR,
      z: () => yR,
      zb: () => TW
    });
    const wW = 32,
      CW = 33.333333333333336,
      zR = {
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
        FrameDraw: 28
      },
      AW = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2
      },
      bR = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      yR = {
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
        EnvPrefs: 32
      },
      NW = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      eW = {
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
      BW = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      tR = 4,
      TW = 4,
      gR = 65535,
      iR = {
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
      YW = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      JW = 88,
      PW = 0,
      IW = 24,
      oW = 48,
      lW = 80,
      FW = {
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
      fW = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      QW = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      rR = {
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
      cR = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      XW = 65535,
      jR = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      kR = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      aR = 2,
      sW = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      dW = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      pW = {
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
      hW = {
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
      UW = {
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
      EW = 8,
      VW = {
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
      mR = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  38270: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      prefetchWasmClient: () => TW,
      startJoinLoad: () => tR
    });
    var wW = MW(2793),
      CW = MW(34631),
      zR = MW(38277),
      AW = MW(38292),
      bR = MW(38326),
      yR = MW(38338);
    const NW = "[bloxd-wasm-client]";
    let eW = null,
      BW = null;

    function tR() {
      return BW ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const WW = await (0, bR.D)();
        if (null === WW || (0, AW.l)(WW)) return;
        const RW = await WW.load();
        "unloaded" === (0, wW.J)() && (0, bR.q)(), await (0, CW.c)(RW, zR.i)
      })().catch((WW => {
        console.warn(`${NW} the join's early load did not start: the boot loads the client itself`, WW)
      })), BW
    }

    function TW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
      return eW ??= async function(WW) {
        if (!await async function(WW) {
            if (WW()) return !1;
            let RW;
            try {
              var wW;
              const WW = await fetch(`${MW.p}static/js/98edle.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!WW.ok) throw new Error(`HTTP ${WW.status}`);
              if (/\bno-store\b/.test(null !== (wW = WW.headers.get("Cache-Control")) && void 0 !== wW ? wW : "")) return !1;
              const CW = await WW.json();
              if (!Array.isArray(CW)) throw new Error("not a list");
              RW = CW
            } catch (zR) {
              return console.warn(`${NW} the join's chunk list did not load: the join downloads its chunks itself`, zR), !WW()
            }
            if (WW()) return !1;
            const CW = document.createElement("link").relList.supports("prefetch");
            for (const AW of RW) {
              const WW = `${MW.p}${AW}`;
              CW ? gR(WW) : iR(WW).catch((RW => {
                console.warn(`${NW} prefetching ${WW} failed`, RW)
              }))
            }
            return !0
          }(WW)) return;
        const RW = [iR((0, yR.e)())];
        "unloaded" === (0, wW.J)() && RW.push(iR(zR.i.url().href), (0, bR.j)().then((RW => {
          if (null === RW || "unloaded" !== (0, wW.J)() || WW()) return;
          const MW = new AbortController;
          return RW.superseded.then((() => {
            MW.abort()
          })), iR(RW.build.url().href, MW.signal).catch((WW => {
            if (!MW.signal.aborted) throw WW
          }))
        })));
        await Promise.all(RW)
      }(WW).catch((WW => {
        console.warn(`${NW} the prefetch failed: the join downloads the client itself`, WW)
      })), eW
    }

    function gR(WW) {
      const RW = document.createElement("link");
      RW.rel = "prefetch", RW.href = WW, WW.endsWith(".js") && (RW.crossOrigin = "anonymous"), document.head.appendChild(RW)
    }
    async function iR(WW, RW) {
      const MW = await fetch(WW, {
        priority: "low",
        signal: RW
      });
      if (!MW.ok) throw new Error(`Fetching ${WW} failed: HTTP ${MW.status}`);
      const wW = MW.body.getReader();
      for (; !(await wW.read()).done;);
    }
  },
  38338: (WW, RW, MW) => {
    function wW() {
      return MW(38341)
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  38341: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/JetBrainsMonoNL-ExtraBold.e920f8e3b489009b4837.woff2"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);