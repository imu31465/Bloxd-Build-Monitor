export const id = 90;
export const ids = [90];
export const modules = {
  4976: (uu, Eu, ju) => {
    ju.d(Eu, {
      $: () => Gu,
      C: () => Xu,
      Cb: () => Wu,
      F: () => lu,
      Gb: () => Qu,
      H: () => su,
      Jb: () => hu,
      K: () => Zu,
      L: () => eu,
      Nb: () => ou,
      O: () => zu,
      Pb: () => Pu,
      R: () => bu,
      S: () => cu,
      Sb: () => iu,
      Ub: () => tu,
      V: () => Cu,
      Wb: () => Su,
      X: () => fu,
      Xb: () => Fu,
      Yb: () => Bu,
      ac: () => du,
      b: () => gu,
      cb: () => qu,
      db: () => Yu,
      ec: () => au,
      f: () => Du,
      fb: () => Ou,
      fc: () => Tu,
      g: () => nu,
      h: () => Mu,
      hb: () => ku,
      j: () => Au,
      jc: () => Uu,
      lb: () => vu,
      mb: () => Ku,
      mc: () => yu,
      n: () => Nu,
      pb: () => mu,
      r: () => Ju,
      s: () => Hu,
      tb: () => Vu,
      ub: () => xu,
      v: () => wu,
      vb: () => Lu,
      xb: () => Iu,
      y: () => pu,
      zb: () => ru
    });
    const su = 32,
      Uu = 33.333333333333336,
      Zu = {
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
      Xu = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      lu = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      qu = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      fu = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Cu = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      bu = 14,
      cu = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6,
        ViewQueuedPrograms: 7,
        FirstViewLinkMs: 8,
        FirstViewTerrainMs: 9,
        FirstViewHeldMs: 10,
        FirstViewOtherMs: 11,
        FirstViewGaps: 12,
        FirstViewGapMs: 13
      },
      Nu = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      Ou = 8,
      Yu = 1,
      hu = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Du = 6,
      gu = 1,
      Mu = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      eu = {
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
      Gu = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      pu = {
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
      wu = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Ju = 4,
      du = 4,
      au = 65535,
      Pu = {
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
      ou = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      ku = 88,
      mu = 0,
      vu = 24,
      Ku = 48,
      Vu = 80,
      ru = {
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
      Qu = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      iu = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Wu = {
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
      Su = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Iu = 65535,
      Fu = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Bu = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Lu = 2,
      tu = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      xu = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Tu = {
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
      Hu = {
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
      Au = {
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
      nu = 8,
      yu = {
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
      zu = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4970: (uu, Eu, ju) => {
    ju.d(Eu, {
      Ab: () => EE,
      Ac: () => su.mb,
      Ae: () => Ou,
      B: () => zu,
      Cd: () => su.jc,
      D: () => su.j,
      Db: () => yu,
      Ec: () => su.pb,
      Ed: () => Zu,
      F: () => fu,
      Fb: () => su.R,
      Fd: () => Du,
      Hc: () => su.tb,
      I: () => su.n,
      Ib: () => jE,
      Id: () => CE,
      Jc: () => su.xb,
      Kd: () => Iu,
      L: () => uE,
      Lb: () => UE,
      Lc: () => hE,
      Mb: () => su.S,
      Mc: () => cE,
      Md: () => Bu,
      N: () => su.r,
      Nc: () => XE,
      Qb: () => Uu.e,
      Qc: () => su.zb,
      Qd: () => Su,
      R: () => nu,
      Sd: () => xu,
      T: () => su.y,
      Tb: () => du,
      Tc: () => su.Cb,
      W: () => su.C,
      Wc: () => su.Gb,
      Xb: () => Wu,
      Xd: () => Lu,
      Y: () => su.F,
      Yb: () => mu,
      Zc: () => Ru,
      Zd: () => Hu,
      _b: () => ou,
      ab: () => bu,
      ac: () => su.$,
      bd: () => su.Nb,
      be: () => Tu,
      cc: () => vu,
      d: () => sE,
      db: () => Mu,
      dc: () => pu,
      eb: () => su.H,
      ec: () => qE,
      ed: () => su.Pb,
      fe: () => fE,
      g: () => hu,
      hb: () => su.K,
      hc: () => eu,
      hd: () => su.Sb,
      he: () => DE,
      ic: () => NE,
      ie: () => Gu,
      j: () => Yu,
      je: () => Au,
      kb: () => Fu,
      kd: () => su.Wb,
      lc: () => Uu.l,
      m: () => bE,
      nb: () => lE,
      nd: () => su.Xb,
      ne: () => Qu,
      o: () => au,
      oc: () => gu,
      od: () => su.Yb,
      oe: () => ru,
      pb: () => Cu,
      pd: () => cu,
      r: () => Ju,
      s: () => su.g,
      sb: () => su.L,
      sc: () => ZE,
      se: () => Vu,
      t: () => OE,
      td: () => Pu,
      v: () => ku,
      ve: () => qu,
      wb: () => tu,
      wc: () => su.hb,
      x: () => Xu,
      xd: () => su.ac,
      xe: () => iu,
      y: () => Ku,
      z: () => YE,
      zc: () => su.lb,
      zd: () => su.ec,
      ze: () => gE
    });
    var su = ju(4976),
      Uu = ju(2516);
    const Zu = Math.round(1e3 / su.jc),
      Xu = 4,
      lu = 2;

    function qu() {
      return crypto.getRandomValues(new Uint32Array(lu))
    }
    const fu = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Cu = 16,
      bu = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      cu = 3,
      Nu = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function Ou(uu) {
      return (uu.nametagsHidden ? wu.NametagsHidden : 0) | (uu.crouchToggle ? wu.CrouchToggle : 0) | (uu.bhopDisabled ? wu.BhopDisabled : 0) | (uu.disableBobbing ? wu.DisableBobbing : 0) | (null !== uu.ezTowering ? wu.EzTowering : 0) | ("jump" === uu.ezTowering ? wu.EzTowerJump : 0) | (uu.ezBridging ? wu.EzBridging : 0) | (uu.showChunkBorders ? wu.ShowChunkBorders : 0) | (uu.touchWalk ? wu.TouchWalk : 0) | (uu.edgeGuard ? wu.EdgeGuard : 0) | (uu.edgeGuardLong ? wu.EdgeGuardLong : 0)
    }
    const Yu = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      hu = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Du = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      gu = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Mu = 5,
      eu = 4294967295;

    function Gu(uu) {
      const Eu = {
        off: 0,
        lit: Nu.CellLight,
        all: Nu.CellLight | Nu.CellLightUnlit
      } [uu.cellLight];
      return (uu.showFog ? Nu.ShowFog : 0) | (uu.lighting ? Nu.Lighting : 0) | (uu.chunkFade ? Nu.ChunkFade : 0) | Eu
    }
    const pu = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      wu = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        TouchWalk: 128,
        EdgeGuard: 256,
        EdgeGuardLong: 512,
        EzTowerJump: 1024,
        All: 2047
      },
      Ju = {
        Release: 1,
        KeepTouches: 2
      },
      du = {
        Point: 1,
        Stamped: 2
      },
      au = {
        Add: 1,
        Clear: 2
      },
      Pu = 1,
      ou = 8,
      ku = 16777215,
      mu = 4,
      vu = {
        Resume: 1
      },
      Ku = {
        Held: 1
      };

    function Vu(uu, Eu) {
      return (uu | Eu << 8) >>> 0
    }

    function ru(uu) {
      return 255 & uu
    }

    function Qu(uu) {
      return uu >>> 8
    }

    function iu(uu) {
      return uu + 3 & -4
    }
    const Wu = 16777216,
      Su = 20;
    const Iu = 8,
      Fu = 8,
      Bu = 16777216,
      Lu = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      tu = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      xu = 16,
      Tu = {
        Lost: 0,
        Gone: 1
      },
      Hu = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Au(uu) {
      return uu === Hu.WorldgenSeed || uu === Hu.Generate
    }
    const nu = 4,
      yu = 99,
      zu = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Ru = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      uE = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      EE = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      jE = 12,
      sE = 16,
      UE = 4,
      ZE = 12,
      XE = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      lE = 4,
      qE = 8,
      fE = 8,
      CE = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      bE = {
        Crit: 1,
        HitSelf: 2
      },
      cE = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      NE = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      OE = 12,
      YE = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      hE = 67108864;

    function DE(uu) {
      for (const [Eu, ju] of Object.entries(su.j))
        if (ju === uu) return Eu;
      return `Unknown${uu}`
    }

    function gE(uu) {
      return {
        status: uu[su.K.Status],
        lastError: uu[su.K.LastError],
        lastErrorDetail: uu[su.K.LastErrorDetail],
        errorCount: uu[su.K.ErrorCount],
        frameIndex: uu[su.K.FrameIndex],
        tickIndex: uu[su.K.TickIndex],
        renderPending: uu[su.K.RenderPending],
        firstView: uu[su.K.FirstView],
        chunksCancelled: uu[su.K.ChunksCancelled]
      }
    }
  },
  4965: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      h: () => Zu,
      k: () => Uu
    });
    var su = ju(4970);

    function Uu(uu) {
      return "none" !== uu
    }

    function Zu(uu, Eu) {
      if (!uu) return "none";
      switch (Eu) {
        case su.Y.Drawn:
          return "drawn";
        case su.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Xu(uu) {
      return "drawn" === uu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);