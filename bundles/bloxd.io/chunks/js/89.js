export const id = 89;
export const ids = [89];
export const modules = {
  4935: (SS, HS, gS) => {
    gS.d(HS, {
      $: () => jS,
      B: () => NS,
      Cb: () => WS,
      E: () => tS,
      Eb: () => VS,
      Fb: () => GS,
      H: () => XS,
      Jb: () => cS,
      K: () => QS,
      Mb: () => dS,
      O: () => eS,
      P: () => fS,
      Pb: () => iS,
      Q: () => kS,
      T: () => IS,
      Tb: () => MS,
      Ub: () => zS,
      V: () => uS,
      X: () => DS,
      Yb: () => pS,
      Z: () => qS,
      _b: () => sS,
      bb: () => KS,
      bc: () => JS,
      c: () => nS,
      dc: () => OS,
      eb: () => vS,
      g: () => CS,
      gc: () => RS,
      h: () => lS,
      hb: () => LS,
      ic: () => bS,
      j: () => PS,
      k: () => oS,
      kc: () => mS,
      lb: () => YS,
      n: () => aS,
      nb: () => ES,
      o: () => ZS,
      pb: () => AS,
      r: () => TS,
      tb: () => FS,
      ub: () => BS,
      v: () => hS,
      wb: () => US,
      y: () => wS,
      yb: () => yS,
      z: () => xS
    });
    const tS = 32,
      bS = 33.333333333333336,
      XS = {
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
      xS = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      NS = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      qS = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      uS = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      IS = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      fS = 8,
      kS = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6,
        ViewQueuedPrograms: 7
      },
      aS = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      KS = 8,
      jS = 1,
      GS = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      CS = 6,
      nS = 1,
      PS = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      QS = {
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
      DS = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      wS = {
        RawMessage: 1,
        CoreErrors: 2,
        LocalHurt: 16,
        AttackHit: 17,
        HealthChanged: 18,
        LocalPlayerBound: 19,
        ConnectionState: 20,
        ReconnectGrace: 5,
        GameCalls: 96,
        JoinPreloadEnded: 6,
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
      hS = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      ZS = 4,
      JS = 4,
      OS = 65535,
      dS = {
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
      cS = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      vS = 88,
      ES = 0,
      LS = 24,
      YS = 48,
      AS = 80,
      yS = {
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
      VS = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      iS = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      WS = {
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
      zS = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      US = 65535,
      pS = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      sS = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      BS = 2,
      MS = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      FS = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      RS = {
        SkyTable: 600,
        SkyImagesReady: 601,
        SkyTableHeaderBytes: 8,
        SkyTableEntryBytes: 92,
        SkyImagesReadyBytes: 32,
        KindNone: 0,
        KindCustom: 1,
        KindEarth: 2,
        AddedId: 65534,
        MaxAdded: 32,
        CubeFaces: 6,
        Failed: 0
      },
      TS = {
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
      oS = {
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
      lS = 8,
      mS = {
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
      eS = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4926: (SS, HS, gS) => {
    gS.d(HS, {
      $b: () => JS,
      $c: () => xH,
      $d: () => uH,
      A: () => YS,
      Bc: () => nS,
      Bd: () => XS,
      Cb: () => NH,
      Db: () => IS,
      Dd: () => CS,
      E: () => jH,
      Ec: () => XH,
      Gb: () => tS.K,
      H: () => eS,
      Hb: () => MS,
      Hd: () => IH,
      Ic: () => tS.eb,
      K: () => tS.k,
      Kb: () => HH,
      Kd: () => US,
      Ld: () => sS,
      Mc: () => tS.hb,
      N: () => uS,
      Ob: () => mS,
      Oc: () => tS.lb,
      Od: () => zS,
      Pb: () => tS.P,
      Pc: () => tS.nb,
      Qb: () => gH,
      R: () => tS.n,
      Sc: () => tS.pb,
      Sd: () => FS,
      Tb: () => bH,
      U: () => SH,
      Uc: () => tS.wb,
      Vc: () => GH,
      Wd: () => BS,
      Xb: () => tS.Q,
      Xc: () => kH,
      Y: () => tS.o,
      Yd: () => TS,
      Zd: () => RS,
      _b: () => bS.c,
      ab: () => lS,
      ad: () => tS.yb,
      b: () => tH,
      cc: () => WS,
      de: () => CH,
      eb: () => tS.y,
      ed: () => tS.Cb,
      f: () => GS,
      fc: () => ES,
      gb: () => tS.z,
      gd: () => tS.Eb,
      he: () => DS,
      i: () => jS,
      ib: () => tS.B,
      ic: () => cS,
      id: () => rS,
      jd: () => tS.Jb,
      je: () => oS,
      kc: () => tS.X,
      ke: () => VS,
      lb: () => fS,
      ld: () => tS.Mb,
      m: () => fH,
      nc: () => LS,
      nd: () => tS.Pb,
      ob: () => PS,
      od: () => tS.Ub,
      oe: () => yS,
      p: () => OS,
      pc: () => wS,
      pd: () => tS.Yb,
      qd: () => tS._b,
      qe: () => AS,
      s: () => ZS,
      sb: () => tS.E,
      sc: () => qH,
      se: () => qS,
      td: () => kS,
      u: () => tS.h,
      ue: () => iS,
      v: () => KH,
      vd: () => dS,
      ve: () => nH,
      wb: () => tS.H,
      wc: () => QS,
      wd: () => tS.bc,
      we: () => KS,
      xc: () => aH,
      xd: () => tS.dc,
      y: () => vS,
      yb: () => pS,
      yc: () => bS.i,
      yd: () => tS.ic,
      z: () => xS
    });
    var tS = gS(4935),
      bS = gS(2510);
    const XS = Math.round(1e3 / tS.ic),
      xS = 4,
      NS = 2;

    function qS() {
      return crypto.getRandomValues(new Uint32Array(NS))
    }
    const uS = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      IS = 16,
      fS = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      kS = 3,
      aS = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function KS(SS) {
      return (SS.nametagsHidden ? hS.NametagsHidden : 0) | (SS.crouchToggle ? hS.CrouchToggle : 0) | (SS.bhopDisabled ? hS.BhopDisabled : 0) | (SS.disableBobbing ? hS.DisableBobbing : 0) | (SS.ezTowering ? hS.EzTowering : 0) | (SS.ezBridging ? hS.EzBridging : 0) | (SS.showChunkBorders ? hS.ShowChunkBorders : 0)
    }
    const jS = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      GS = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      CS = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      nS = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      PS = 5,
      QS = 4294967295;

    function DS(SS) {
      const HS = {
        off: 0,
        lit: aS.CellLight,
        all: aS.CellLight | aS.CellLightUnlit
      } [SS.cellLight];
      return (SS.showFog ? aS.ShowFog : 0) | (SS.lighting ? aS.Lighting : 0) | (SS.chunkFade ? aS.ChunkFade : 0) | HS
    }
    const wS = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      hS = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      ZS = {
        Release: 1,
        KeepTouches: 2
      },
      JS = {
        Point: 1,
        Stamped: 2
      },
      OS = {
        Add: 1,
        Clear: 2
      },
      dS = 1,
      cS = 8,
      vS = 16777215,
      ES = 4,
      LS = {
        Resume: 1
      },
      YS = {
        Held: 1
      };

    function AS(SS, HS) {
      return (SS | HS << 8) >>> 0
    }

    function yS(SS) {
      return 255 & SS
    }

    function VS(SS) {
      return SS >>> 8
    }

    function iS(SS) {
      return SS + 3 & -4
    }
    const WS = 16777216,
      zS = 20;
    const US = 8,
      pS = 8,
      sS = 16777216,
      BS = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      MS = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      FS = 16,
      RS = {
        Lost: 0,
        Gone: 1
      },
      TS = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function oS(SS) {
      return SS === TS.WorldgenSeed || SS === TS.Generate
    }
    const lS = 4,
      mS = 99,
      eS = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      rS = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      SH = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      HH = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      gH = 12,
      tH = 16,
      bH = 4,
      XH = 12,
      xH = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      NH = 4,
      qH = 8,
      uH = 8,
      IH = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      fH = {
        Crit: 1,
        HitSelf: 2
      },
      kH = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      aH = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      KH = 12,
      jH = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      GH = 67108864;

    function CH(SS) {
      for (const [HS, gS] of Object.entries(tS.k))
        if (gS === SS) return HS;
      return `Unknown${SS}`
    }

    function nH(SS) {
      return {
        status: SS[tS.H.Status],
        lastError: SS[tS.H.LastError],
        lastErrorDetail: SS[tS.H.LastErrorDetail],
        errorCount: SS[tS.H.ErrorCount],
        frameIndex: SS[tS.H.FrameIndex],
        tickIndex: SS[tS.H.TickIndex],
        renderPending: SS[tS.H.RenderPending],
        firstView: SS[tS.H.FirstView],
        chunksCancelled: SS[tS.H.ChunksCancelled]
      }
    }
  },
  4917: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      f: () => XS,
      h: () => bS
    });
    var tS = gS(4926);

    function bS(SS) {
      return "none" !== SS
    }

    function XS(SS, HS) {
      if (!SS) return "none";
      switch (HS) {
        case tS.ib.Drawn:
          return "drawn";
        case tS.ib.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function xS(SS) {
      return "drawn" === SS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);