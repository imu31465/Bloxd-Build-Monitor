export const id = 90;
export const ids = [90];
export const modules = {
  4975: (BB, IB, ZB) => {
    ZB.d(IB, {
      $: () => gB,
      B: () => QB,
      Bb: () => XB,
      D: () => GB,
      E: () => vB,
      Fb: () => rB,
      G: () => TB,
      Ib: () => qB,
      J: () => oB,
      L: () => dB,
      Lb: () => pB,
      N: () => VB,
      P: () => hB,
      Pb: () => iB,
      S: () => zB,
      Tb: () => mB,
      V: () => nB,
      Vb: () => AB,
      W: () => cB,
      Yb: () => LB,
      Z: () => CB,
      _: () => kB,
      _b: () => uB,
      ab: () => NB,
      bb: () => aB,
      bc: () => fB,
      c: () => UB,
      cc: () => OB,
      eb: () => MB,
      f: () => yB,
      fc: () => YB,
      gc: () => bB,
      hb: () => jB,
      i: () => DB,
      kb: () => HB,
      kc: () => JB,
      lb: () => PB,
      m: () => WB,
      n: () => EB,
      nc: () => KB,
      pb: () => tB,
      qb: () => lB,
      r: () => FB,
      t: () => wB,
      tb: () => eB,
      w: () => xB,
      xb: () => RB,
      y: () => sB
    });
    const TB = 32,
      JB = 33.333333333333336,
      oB = {
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
      GB = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      vB = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      kB = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      cB = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      nB = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      hB = 14,
      zB = {
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
      FB = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      NB = 8,
      gB = 1,
      qB = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      yB = 6,
      UB = 1,
      WB = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      dB = {
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
      CB = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      QB = {
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
      sB = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      wB = 4,
      OB = 4,
      YB = 65535,
      iB = {
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
      pB = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      aB = 88,
      HB = 0,
      MB = 24,
      jB = 48,
      PB = 80,
      RB = {
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
      rB = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      mB = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      XB = {
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
      LB = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      eB = 65535,
      uB = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      fB = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      lB = 2,
      AB = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      tB = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      bB = {
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
      xB = {
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
      EB = {
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
      DB = 8,
      KB = {
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
      VB = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4969: (BB, IB, ZB) => {
    ZB.d(IB, {
      $: () => TB.E,
      Ad: () => TB.kc,
      B: () => GB,
      Bb: () => KB,
      Bc: () => TB.hb,
      C: () => jB,
      Db: () => TB.P,
      Dd: () => oB,
      De: () => NB,
      Fb: () => ZI,
      Fc: () => TB.kb,
      G: () => gI,
      Gb: () => JI,
      H: () => VB,
      Hb: () => TB.S,
      Hd: () => yB,
      Jc: () => TB.lb,
      Jd: () => nI,
      K: () => TB.n,
      L: () => cB,
      Lb: () => JB.c,
      Ld: () => eB,
      Mc: () => TB.tb,
      Nb: () => OB,
      Nd: () => fB,
      O: () => TB.r,
      Q: () => BI,
      Qb: () => XB,
      Qc: () => qI,
      Qd: () => LB,
      R: () => TB.t,
      Rc: () => zI,
      Sb: () => HB,
      Sd: () => tB,
      U: () => DB,
      Uc: () => GI,
      Vd: () => lB,
      Wb: () => pB,
      Wc: () => TB.xb,
      Wd: () => xB,
      X: () => TB.B,
      Y: () => TB.D,
      Yb: () => TB.Z,
      Yc: () => TB.Bb,
      _d: () => bB,
      ac: () => MB,
      ad: () => TB.Fb,
      b: () => TI,
      cb: () => hB,
      ce: () => cI,
      dc: () => QB,
      e: () => qB,
      ed: () => SB,
      fe: () => yI,
      gb: () => WB,
      h: () => gB,
      hc: () => kI,
      he: () => CB,
      id: () => TB.Lb,
      ie: () => EB,
      j: () => hI,
      jc: () => dB,
      jd: () => TB.Pb,
      kb: () => TB.G,
      ld: () => TB.Tb,
      le: () => rB,
      mb: () => TB.J,
      n: () => YB,
      nc: () => FI,
      od: () => TB.Yb,
      oe: () => RB,
      pc: () => JB.e,
      q: () => wB,
      qb: () => uB,
      qc: () => UB,
      rd: () => TB._b,
      re: () => PB,
      s: () => TB.i,
      sd: () => TB.bc,
      tb: () => vI,
      tc: () => oI,
      ub: () => nB,
      ud: () => zB,
      ue: () => kB,
      vb: () => TB.L,
      vd: () => iB,
      w: () => NI,
      wc: () => TB.bb,
      xb: () => AB,
      xd: () => TB.cc,
      xe: () => mB,
      yc: () => TB.eb,
      z: () => aB,
      zb: () => II,
      zd: () => TB.fc,
      ze: () => UI
    });
    var TB = ZB(4975),
      JB = ZB(2481);
    const oB = Math.round(1e3 / TB.kc),
      GB = 4,
      vB = 2;

    function kB() {
      return crypto.getRandomValues(new Uint32Array(vB))
    }
    const cB = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      nB = 16,
      hB = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      zB = 3,
      FB = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function NB(BB) {
      return (BB.nametagsHidden ? sB.NametagsHidden : 0) | (BB.crouchToggle ? sB.CrouchToggle : 0) | (BB.bhopDisabled ? sB.BhopDisabled : 0) | (BB.disableBobbing ? sB.DisableBobbing : 0) | (null !== BB.ezTowering ? sB.EzTowering : 0) | ("jump" === BB.ezTowering ? sB.EzTowerJump : 0) | (BB.ezBridging ? sB.EzBridging : 0) | (BB.showChunkBorders ? sB.ShowChunkBorders : 0) | (BB.touchWalk ? sB.TouchWalk : 0) | (BB.edgeGuard ? sB.EdgeGuard : 0) | (BB.edgeGuardLong ? sB.EdgeGuardLong : 0)
    }
    const gB = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      qB = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      yB = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      UB = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      WB = 5,
      dB = 4294967295;

    function CB(BB) {
      const IB = {
        off: 0,
        lit: FB.CellLight,
        all: FB.CellLight | FB.CellLightUnlit
      } [BB.cellLight];
      return (BB.showFog ? FB.ShowFog : 0) | (BB.lighting ? FB.Lighting : 0) | (BB.chunkFade ? FB.ChunkFade : 0) | IB
    }
    const QB = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      sB = {
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
      wB = {
        Release: 1,
        KeepTouches: 2
      },
      OB = {
        Point: 1,
        Stamped: 2
      },
      YB = {
        Add: 1,
        Clear: 2
      },
      iB = 1,
      pB = 8,
      aB = 16777215,
      HB = 4,
      MB = {
        Resume: 1
      },
      jB = {
        Held: 1
      };

    function PB(BB, IB) {
      return (BB | IB << 8) >>> 0
    }

    function RB(BB) {
      return 255 & BB
    }

    function rB(BB) {
      return BB >>> 8
    }

    function mB(BB) {
      return BB + 3 & -4
    }
    const XB = 16777216,
      LB = 20;
    const eB = 8,
      uB = 8,
      fB = 16777216,
      lB = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      AB = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      tB = 16,
      bB = {
        Lost: 0,
        Gone: 1
      },
      xB = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function EB(BB) {
      return BB === xB.WorldgenSeed || BB === xB.Generate
    }
    const DB = 4,
      KB = 99,
      VB = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      SB = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      BI = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      II = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      ZI = 12,
      TI = 16,
      JI = 4,
      oI = 12,
      GI = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      vI = 4,
      kI = 8,
      cI = 8,
      nI = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      hI = {
        Crit: 1,
        HitSelf: 2
      },
      zI = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      FI = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      NI = 12,
      gI = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      qI = 67108864;

    function yI(BB) {
      for (const [IB, ZB] of Object.entries(TB.n))
        if (ZB === BB) return IB;
      return `Unknown${BB}`
    }

    function UI(BB) {
      return {
        status: BB[TB.J.Status],
        lastError: BB[TB.J.LastError],
        lastErrorDetail: BB[TB.J.LastErrorDetail],
        errorCount: BB[TB.J.ErrorCount],
        frameIndex: BB[TB.J.FrameIndex],
        tickIndex: BB[TB.J.TickIndex],
        renderPending: BB[TB.J.RenderPending],
        firstView: BB[TB.J.FirstView],
        chunksCancelled: BB[TB.J.ChunksCancelled]
      }
    }
  },
  4960: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB,
      g: () => oB,
      j: () => JB
    });
    var TB = ZB(4969);

    function JB(BB) {
      return "none" !== BB
    }

    function oB(BB, IB) {
      if (!BB) return "none";
      switch (IB) {
        case TB.$.Drawn:
          return "drawn";
        case TB.$.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function GB(BB) {
      return "drawn" === BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);