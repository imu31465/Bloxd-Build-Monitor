export const id = 47;
export const ids = [47];
export const modules = {
  3793: (FF, WF, SF) => {
    SF.d(WF, {
      $: () => OF,
      A: () => uF,
      Cb: () => ZF,
      D: () => dF,
      Db: () => EF,
      Fb: () => QF,
      H: () => yW,
      Jb: () => cW,
      L: () => PF,
      Lb: () => AF,
      O: () => tW,
      Ob: () => fF,
      P: () => aW,
      R: () => kW,
      T: () => TF,
      U: () => qW,
      W: () => MF,
      Z: () => oF,
      bb: () => VF,
      e: () => IF,
      eb: () => LF,
      f: () => zW,
      fb: () => NF,
      g: () => eF,
      h: () => GF,
      j: () => iW,
      jb: () => gW,
      n: () => RF,
      nb: () => rW,
      p: () => hF,
      pb: () => DF,
      s: () => bW,
      tb: () => YF,
      w: () => CF,
      xb: () => mW,
      zb: () => xW
    });
    const CF = 32,
      AF = 33.333333333333336,
      uF = {
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
      hF = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2
      },
      bW = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      dF = {
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
      PF = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      RF = {
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
      iW = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      eF = 4,
      EF = 4,
      QF = 65535,
      rW = {
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
      gW = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      tW = 88,
      TF = 0,
      aW = 24,
      kW = 48,
      qW = 80,
      VF = {
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
      NF = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      DF = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      LF = {
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
      mW = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      OF = 65535,
      xW = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      ZF = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      oF = 2,
      YF = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      MF = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      cW = {
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
      GF = {
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
      zW = {
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
      IF = 8,
      fF = {
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
      yW = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  38659: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      prefetchWasmClient: () => EF,
      startJoinLoad: () => eF
    });
    var CF = SF(2903),
      AF = SF(34921),
      uF = SF(38665),
      hF = SF(38682),
      bW = SF(38707),
      dF = SF(38716);
    const PF = "[bloxd-wasm-client]";
    let RF = null,
      iW = null;

    function eF() {
      return iW ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const FF = await (0, bW.J)();
        if (null === FF || (0, hF.s)(FF)) return;
        const WF = await FF.load();
        "unloaded" === (0, CF.E)() && (0, bW.o)(), await (0, AF.i)(WF, uF.g)
      })().catch((FF => {
        console.warn(`${PF} the join's early load did not start: the boot loads the client itself`, FF)
      })), iW
    }

    function EF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
      return RF ??= async function(FF) {
        if (!await async function(FF) {
            if (FF()) return !1;
            let WF;
            try {
              var CF;
              const FF = await fetch(`${SF.p}static/js/90jf8k.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!FF.ok) throw new Error(`HTTP ${FF.status}`);
              if (/\bno-store\b/.test(null !== (CF = FF.headers.get("Cache-Control")) && void 0 !== CF ? CF : "")) return !1;
              const AF = await FF.json();
              if (!Array.isArray(AF)) throw new Error("not a list");
              WF = AF
            } catch (uF) {
              return console.warn(`${PF} the join's chunk list did not load: the join downloads its chunks itself`, uF), !FF()
            }
            if (FF()) return !1;
            const AF = document.createElement("link").relList.supports("prefetch");
            for (const hF of WF) {
              const FF = `${SF.p}${hF}`;
              AF ? QF(FF) : rW(FF).catch((WF => {
                console.warn(`${PF} prefetching ${FF} failed`, WF)
              }))
            }
            return !0
          }(FF)) return;
        const WF = [rW((0, dF.c)())];
        "unloaded" === (0, CF.E)() && WF.push(rW(uF.g.url().href), (0, bW.i)().then((WF => {
          if (null === WF || "unloaded" !== (0, CF.E)() || FF()) return;
          const SF = new AbortController;
          return WF.superseded.then((() => {
            SF.abort()
          })), rW(WF.build.url().href, SF.signal).catch((FF => {
            if (!SF.signal.aborted) throw FF
          }))
        })));
        await Promise.all(WF)
      }(FF).catch((FF => {
        console.warn(`${PF} the prefetch failed: the join downloads the client itself`, FF)
      })), RF
    }

    function QF(FF) {
      const WF = document.createElement("link");
      WF.rel = "prefetch", WF.href = FF, FF.endsWith(".js") && (WF.crossOrigin = "anonymous"), document.head.appendChild(WF)
    }
    async function rW(FF, WF) {
      const SF = await fetch(FF, {
        priority: "low",
        signal: WF
      });
      if (!SF.ok) throw new Error(`Fetching ${FF} failed: HTTP ${SF.status}`);
      const CF = SF.body.getReader();
      for (; !(await CF.read()).done;);
    }
  },
  38716: (FF, WF, SF) => {
    function CF() {
      return SF(38720)
    }
    SF.d(WF, {
      c: () => CF
    })
  },
  38720: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/JetBrainsMonoNL-ExtraBold.e920f8e3b489009b4837.woff2"
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);