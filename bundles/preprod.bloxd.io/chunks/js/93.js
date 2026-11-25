export const id = 93;
export const ids = [93];
export const modules = {
  5140: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $b: () => aQ,
      A: () => sQ,
      Ab: () => uQ,
      C: () => wQ,
      Cb: () => yQ,
      F: () => TQ,
      G: () => GQ,
      Gb: () => hQ,
      I: () => mQ,
      Ib: () => lQ,
      M: () => JQ,
      Mb: () => LQ,
      Nb: () => nQ,
      Pb: () => fQ,
      Q: () => rQ,
      Sb: () => tQ,
      U: () => gQ,
      V: () => PQ,
      Wb: () => oQ,
      X: () => UQ,
      Z: () => FQ,
      Zb: () => HQ,
      bb: () => BQ,
      c: () => DQ,
      cb: () => jQ,
      dc: () => YQ,
      f: () => VQ,
      fb: () => iQ,
      fc: () => qQ,
      gc: () => KQ,
      i: () => OQ,
      jb: () => AQ,
      l: () => pQ,
      mb: () => RQ,
      n: () => ZQ,
      nb: () => cQ,
      p: () => IQ,
      q: () => dQ,
      r: () => NQ,
      rb: () => EQ,
      tb: () => xQ,
      u: () => vQ,
      ub: () => eQ,
      vb: () => SQ,
      y: () => bQ,
      yb: () => CQ,
      z: () => zQ,
      zb: () => kQ
    });
    const wQ = 32,
      qQ = 33.333333333333336,
      TQ = {
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
      zQ = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      sQ = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      FQ = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      PQ = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      gQ = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      JQ = 14,
      rQ = {
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
      IQ = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      jQ = 8,
      BQ = 1,
      yQ = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      VQ = 6,
      DQ = 1,
      pQ = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      GQ = {
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
      UQ = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      bQ = {
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
        BhopDisabled: 30,
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
      vQ = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      dQ = 4,
      HQ = 4,
      aQ = 65535,
      lQ = {
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
      hQ = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      iQ = 88,
      cQ = 0,
      AQ = 24,
      RQ = 48,
      EQ = 80,
      CQ = {
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
      uQ = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      LQ = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      kQ = {
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
      fQ = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      SQ = 65535,
      tQ = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      oQ = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      eQ = 2,
      nQ = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      xQ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      YQ = {
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
      NQ = {
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
      ZQ = {
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
      OQ = 8,
      KQ = {
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
      mQ = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5134: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => wQ.z,
      $b: () => hQ,
      $d: () => YQ,
      A: () => zQ,
      Ad: () => lQ,
      Bc: () => TW,
      Cb: () => wQ.M,
      Cd: () => wQ.Zb,
      D: () => RQ,
      E: () => BW,
      Fb: () => XW,
      Fc: () => wQ.fb,
      Fd: () => wQ.$b,
      Gc: () => wQ.jb,
      H: () => mQ,
      Id: () => wQ.fc,
      Jb: () => qW,
      Jc: () => wQ.mb,
      K: () => wQ.n,
      Kd: () => TQ,
      Lc: () => wQ.nb,
      Ld: () => VQ,
      Mb: () => wQ.Q,
      Md: () => gW,
      N: () => PQ,
      Nd: () => SQ,
      Od: () => oQ,
      P: () => wQ.p,
      Pb: () => qQ.g,
      Pc: () => wQ.rb,
      Pd: () => fQ,
      Qc: () => wQ.vb,
      Qd: () => xQ,
      Rc: () => yW,
      S: () => QW,
      Sb: () => HQ,
      T: () => wQ.q,
      Uc: () => rW,
      V: () => OQ,
      Vb: () => kQ,
      Vc: () => zW,
      Xb: () => cQ,
      Xc: () => wQ.yb,
      Yc: () => wQ.zb,
      Yd: () => eQ,
      Z: () => wQ.y,
      Zd: () => NQ,
      ac: () => wQ.X,
      ad: () => wQ.Ab,
      be: () => PW,
      cb: () => wQ.A,
      cd: () => MQ,
      db: () => JQ,
      dc: () => AQ,
      de: () => VW,
      e: () => wW,
      f: () => yQ,
      fd: () => wQ.Gb,
      fe: () => UQ,
      gc: () => bQ,
      hb: () => pQ,
      ib: () => wQ.C,
      id: () => wQ.Ib,
      j: () => BQ,
      je: () => ZQ,
      k: () => JW,
      kc: () => FW,
      lb: () => wQ.F,
      mb: () => tQ,
      md: () => wQ.Mb,
      me: () => uQ,
      ne: () => CQ,
      o: () => aQ,
      ob: () => sW,
      oc: () => GQ,
      od: () => wQ.Pb,
      oe: () => EQ,
      p: () => dQ,
      pb: () => gQ,
      q: () => wQ.i,
      qb: () => wQ.G,
      rc: () => IW,
      rd: () => wQ.Sb,
      sb: () => nQ,
      se: () => FQ,
      t: () => jW,
      td: () => wQ.Wb,
      te: () => LQ,
      ue: () => DW,
      vc: () => qQ.k,
      wb: () => WW,
      x: () => iQ,
      xc: () => DQ,
      xd: () => rQ,
      yb: () => KQ,
      ye: () => jQ
    });
    var wQ = XQ(5140),
      qQ = XQ(2506);
    const TQ = Math.round(1e3 / wQ.fc),
      zQ = 4,
      sQ = 2;

    function FQ() {
      return crypto.getRandomValues(new Uint32Array(sQ))
    }
    const PQ = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      gQ = 16,
      JQ = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      rQ = 3,
      IQ = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function jQ(QQ) {
      return (QQ.nametagsHidden ? vQ.NametagsHidden : 0) | (QQ.crouchToggle ? vQ.CrouchToggle : 0) | (QQ.bhopDisabled ? vQ.BhopDisabled : 0) | (QQ.disableBobbing ? vQ.DisableBobbing : 0) | (null !== QQ.ezTowering ? vQ.EzTowering : 0) | ("jump" === QQ.ezTowering ? vQ.EzTowerJump : 0) | (QQ.ezBridging ? vQ.EzBridging : 0) | (QQ.showChunkBorders ? vQ.ShowChunkBorders : 0) | (QQ.touchWalk ? vQ.TouchWalk : 0) | (QQ.edgeGuard ? vQ.EdgeGuard : 0) | (QQ.edgeGuardLong ? vQ.EdgeGuardLong : 0)
    }
    const BQ = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      yQ = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      VQ = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      DQ = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      pQ = 5,
      GQ = 4294967295;

    function UQ(QQ) {
      const WQ = {
        off: 0,
        lit: IQ.CellLight,
        all: IQ.CellLight | IQ.CellLightUnlit
      } [QQ.cellLight];
      return (QQ.showFog ? IQ.ShowFog : 0) | (QQ.lighting ? IQ.Lighting : 0) | (QQ.chunkFade ? IQ.ChunkFade : 0) | WQ
    }
    const bQ = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      vQ = {
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
      dQ = {
        Release: 1,
        KeepTouches: 2
      },
      HQ = {
        Point: 1,
        Stamped: 2
      },
      aQ = {
        Add: 1,
        Clear: 2
      },
      lQ = 1,
      hQ = 8,
      iQ = 16777215,
      cQ = 4,
      AQ = {
        Resume: 1
      },
      RQ = {
        Held: 1
      };

    function EQ(QQ, WQ) {
      return (QQ | WQ << 8) >>> 0
    }

    function CQ(QQ) {
      return 255 & QQ
    }

    function uQ(QQ) {
      return QQ >>> 8
    }

    function LQ(QQ) {
      return QQ + 3 & -4
    }
    const kQ = 16777216,
      fQ = 20;
    const SQ = 8,
      tQ = 8,
      oQ = 16777216,
      eQ = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      nQ = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      xQ = 16,
      YQ = {
        Lost: 0,
        Gone: 1
      },
      NQ = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function ZQ(QQ) {
      return QQ === NQ.WorldgenSeed || QQ === NQ.Generate
    }
    const OQ = 4,
      KQ = 99,
      mQ = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      MQ = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      QW = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17,
        LINKS_IN_FLIGHT_SHIFT: 18,
        LINKS_IN_FLIGHT_MAX: 15,
        OLDEST_LINK_SHIFT: 22,
        OLDEST_LINK_MAX: 1023,
        OLDEST_LINK_UNIT_MS: 100
      },
      WW = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      XW = 12,
      wW = 16,
      qW = 4,
      TW = 12,
      zW = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      sW = 4,
      FW = 8,
      PW = 8,
      gW = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      JW = {
        Crit: 1,
        HitSelf: 2
      },
      rW = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      IW = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      jW = 12,
      BW = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      yW = 67108864;

    function VW(QQ) {
      for (const [WQ, XQ] of Object.entries(wQ.n))
        if (XQ === QQ) return WQ;
      return `Unknown${QQ}`
    }

    function DW(QQ) {
      return {
        status: QQ[wQ.F.Status],
        lastError: QQ[wQ.F.LastError],
        lastErrorDetail: QQ[wQ.F.LastErrorDetail],
        errorCount: QQ[wQ.F.ErrorCount],
        frameIndex: QQ[wQ.F.FrameIndex],
        tickIndex: QQ[wQ.F.TickIndex],
        renderPending: QQ[wQ.F.RenderPending],
        firstView: QQ[wQ.F.FirstView],
        chunksCancelled: QQ[wQ.F.ChunksCancelled]
      }
    }
  },
  5126: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      e: () => TQ,
      f: () => qQ
    });
    var wQ = XQ(5134);

    function qQ(QQ) {
      return "none" !== QQ
    }

    function TQ(QQ, WQ) {
      if (!QQ) return "none";
      switch (WQ) {
        case wQ.cb.Drawn:
          return "drawn";
        case wQ.cb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function zQ(QQ) {
      return "drawn" === QQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);