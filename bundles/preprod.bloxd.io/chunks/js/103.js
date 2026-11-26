export const id = 103;
export const ids = [103, 104];
export const modules = {
  5326: (UU, XU, zU) => {
    zU.d(XU, {
      $: () => ZU,
      $b: () => MU,
      C: () => FU,
      Cb: () => vU,
      Eb: () => uU,
      F: () => cU,
      Fb: () => HU,
      I: () => QU,
      Jb: () => fU,
      K: () => BU,
      Mb: () => tU,
      O: () => TU,
      Qb: () => CU,
      R: () => YU,
      Sb: () => eU,
      T: () => NU,
      Vb: () => iU,
      W: () => EU,
      Xb: () => mU,
      Y: () => DU,
      b: () => kU,
      bc: () => VU,
      cb: () => oU,
      d: () => gU,
      e: () => KU,
      f: () => GU,
      fc: () => sU,
      gb: () => aU,
      gc: () => dU,
      h: () => jU,
      hb: () => pU,
      hc: () => LU,
      ic: () => xU,
      k: () => IU,
      lb: () => wU,
      mc: () => yU,
      o: () => WU,
      ob: () => OU,
      oc: () => bU,
      s: () => JU,
      sb: () => SU,
      t: () => PU,
      ub: () => qU,
      w: () => RU,
      xb: () => rU,
      yb: () => lU,
      z: () => AU,
      zb: () => nU
    });
    const cU = 32,
      yU = 33.333333333333336,
      QU = {
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
      AU = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      FU = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      oU = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      DU = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      EU = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      YU = 14,
      NU = {
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
      IU = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      pU = 8,
      aU = 1,
      tU = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      gU = 6,
      kU = 1,
      GU = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      BU = {
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
      ZU = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      RU = {
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
      PU = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      WU = 4,
      dU = 4,
      LU = 65535,
      eU = {
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
      CU = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      wU = 88,
      qU = 0,
      OU = 24,
      SU = 48,
      rU = 80,
      uU = {
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
      fU = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      iU = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      HU = {
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
      MU = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      vU = 65535,
      VU = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      sU = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      nU = 2,
      mU = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      lU = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      xU = {
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
      JU = {
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
      jU = {
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
      KU = 8,
      bU = {
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
      TU = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5318: (UU, XU, zU) => {
    zU.d(XU, {
      $: () => cU.C,
      $b: () => cU.$,
      Ac: () => cU.ub,
      Bb: () => XX,
      Bc: () => cU.xb,
      C: () => SU,
      Cc: () => cU.Cb,
      Cd: () => QU,
      De: () => iU,
      E: () => aX,
      Ee: () => kX,
      Fb: () => bU,
      Fe: () => pU,
      Gc: () => tX,
      Gd: () => gU,
      H: () => TU,
      Jb: () => cU.R,
      Jd: () => EX,
      K: () => cU.h,
      Kc: () => NX,
      L: () => DU,
      Lb: () => zX,
      Md: () => vU,
      Nb: () => yX,
      Oc: () => AX,
      Od: () => sU,
      P: () => cU.k,
      Pb: () => cU.T,
      Q: () => UX,
      R: () => cU.o,
      Rb: () => yU.g,
      Rc: () => cU.Eb,
      Sb: () => dU,
      Sd: () => MU,
      Tc: () => cU.Fb,
      V: () => KU,
      Vb: () => HU,
      W: () => cU.w,
      Wd: () => lU,
      Xc: () => cU.Jb,
      Yb: () => qU,
      Yc: () => hU,
      Zc: () => cU.Qb,
      _: () => cU.z,
      _b: () => CU,
      _d: () => nU,
      ac: () => OU,
      ae: () => JU,
      bd: () => cU.Sb,
      c: () => cX,
      cb: () => YU,
      db: () => GU,
      dc: () => RU,
      de: () => xU,
      e: () => tU,
      ed: () => cU.Vb,
      fb: () => cU.F,
      fc: () => oX,
      g: () => aU,
      ge: () => DX,
      h: () => YX,
      ic: () => BU,
      id: () => cU.$b,
      j: () => LU,
      jb: () => cU.I,
      jc: () => IX,
      ke: () => gX,
      le: () => ZU,
      mb: () => VU,
      md: () => cU.bc,
      n: () => WU,
      nc: () => yU.n,
      ob: () => FX,
      oc: () => kU,
      od: () => cU.fc,
      oe: () => jU,
      q: () => cU.e,
      qc: () => QX,
      qd: () => NU,
      sb: () => EU,
      sc: () => cU.lb,
      se: () => fU,
      tb: () => cU.K,
      u: () => pX,
      uc: () => cU.ob,
      ud: () => eU,
      ue: () => uU,
      vd: () => cU.gc,
      ve: () => rU,
      w: () => wU,
      wc: () => cU.sb,
      wd: () => cU.hc,
      xb: () => mU,
      y: () => AU,
      yd: () => cU.mc,
      ze: () => oU
    });
    var cU = zU(5326),
      yU = zU(2580);
    const QU = Math.round(1e3 / cU.mc),
      AU = 4,
      FU = 2;

    function oU() {
      return crypto.getRandomValues(new Uint32Array(FU))
    }
    const DU = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      EU = 16,
      YU = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      NU = 3,
      IU = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function pU(UU) {
      return (UU.nametagsHidden ? PU.NametagsHidden : 0) | (UU.crouchToggle ? PU.CrouchToggle : 0) | (UU.bhopDisabled ? PU.BhopDisabled : 0) | (UU.disableBobbing ? PU.DisableBobbing : 0) | (null !== UU.ezTowering ? PU.EzTowering : 0) | ("jump" === UU.ezTowering ? PU.EzTowerJump : 0) | (UU.ezBridging ? PU.EzBridging : 0) | (UU.showChunkBorders ? PU.ShowChunkBorders : 0) | (UU.touchWalk ? PU.TouchWalk : 0) | (UU.edgeGuard ? PU.EdgeGuard : 0) | (UU.edgeGuardLong ? PU.EdgeGuardLong : 0)
    }
    const aU = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      tU = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      gU = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      kU = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      GU = 5,
      BU = 4294967295;

    function ZU(UU) {
      const XU = {
        off: 0,
        lit: IU.CellLight,
        all: IU.CellLight | IU.CellLightUnlit
      } [UU.cellLight];
      return (UU.showFog ? IU.ShowFog : 0) | (UU.lighting ? IU.Lighting : 0) | (UU.chunkFade ? IU.ChunkFade : 0) | XU
    }
    const RU = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      PU = {
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
      WU = {
        Release: 1,
        KeepTouches: 2
      },
      dU = {
        Point: 1,
        Stamped: 2
      },
      LU = {
        Add: 1,
        Clear: 2
      },
      eU = 1,
      CU = 8,
      wU = 16777215,
      qU = 4,
      OU = {
        Resume: 1
      },
      SU = {
        Held: 1
      };

    function rU(UU, XU) {
      return (UU | XU << 8) >>> 0
    }

    function uU(UU) {
      return 255 & UU
    }

    function fU(UU) {
      return UU >>> 8
    }

    function iU(UU) {
      return UU + 3 & -4
    }
    const HU = 16777216,
      MU = 20;
    const vU = 8,
      VU = 8,
      sU = 16777216,
      nU = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      mU = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      lU = 16,
      xU = {
        Lost: 0,
        Gone: 1
      },
      JU = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function jU(UU) {
      return UU === JU.WorldgenSeed || UU === JU.Generate
    }
    const KU = 4,
      bU = 99,
      TU = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      hU = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      UX = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17,
        LINKS_IN_FLIGHT_SHIFT: 18,
        LINKS_IN_FLIGHT_MAX: 15,
        OLDEST_LINK_SHIFT: 22,
        OLDEST_LINK_MAX: 1023,
        OLDEST_LINK_UNIT_MS: 100
      },
      XX = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      zX = 12,
      cX = 16,
      yX = 4,
      QX = 12,
      AX = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      FX = 4,
      oX = 8,
      DX = 8,
      EX = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      YX = {
        Crit: 1,
        HitSelf: 2
      },
      NX = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      IX = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      pX = 12,
      aX = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      tX = 67108864;

    function gX(UU) {
      for (const [XU, zU] of Object.entries(cU.h))
        if (zU === UU) return XU;
      return `Unknown${UU}`
    }

    function kX(UU) {
      return {
        status: UU[cU.I.Status],
        lastError: UU[cU.I.LastError],
        lastErrorDetail: UU[cU.I.LastErrorDetail],
        errorCount: UU[cU.I.ErrorCount],
        frameIndex: UU[cU.I.FrameIndex],
        tickIndex: UU[cU.I.TickIndex],
        renderPending: UU[cU.I.RenderPending],
        firstView: UU[cU.I.FirstView],
        chunksCancelled: UU[cU.I.ChunksCancelled]
      }
    }
  },
  5315: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      g: () => QU,
      j: () => yU
    });
    var cU = zU(5318);

    function yU(UU) {
      return "none" !== UU
    }

    function QU(UU, XU) {
      if (!UU) return "none";
      switch (XU) {
        case cU.$.Drawn:
          return "drawn";
        case cU.$.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function AU(UU) {
      return "drawn" === UU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);