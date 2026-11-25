export const id = 103;
export const ids = [103];
export const modules = {
  5200: (MM, rM, iM) => {
    iM.d(rM, {
      $b: () => tM,
      Ab: () => fM,
      Cb: () => ZM,
      D: () => PM,
      Db: () => dM,
      Fb: () => uM,
      H: () => OM,
      Jb: () => gM,
      K: () => jM,
      L: () => UM,
      M: () => VM,
      N: () => LM,
      Nb: () => oM,
      P: () => mM,
      Qb: () => FM,
      S: () => zM,
      T: () => QM,
      Tb: () => YM,
      Wb: () => AM,
      X: () => GM,
      Yb: () => xM,
      _: () => nM,
      _b: () => wM,
      bb: () => JM,
      d: () => lM,
      db: () => hM,
      dc: () => XM,
      fb: () => RM,
      fc: () => SM,
      g: () => yM,
      gb: () => WM,
      hb: () => sM,
      hc: () => TM,
      jb: () => pM,
      k: () => qM,
      l: () => EM,
      mb: () => DM,
      n: () => KM,
      o: () => HM,
      pb: () => BM,
      r: () => bM,
      t: () => IM,
      tb: () => vM,
      u: () => eM,
      w: () => CM,
      xb: () => NM,
      yb: () => kM,
      z: () => aM
    });
    const OM = 32,
      SM = 33.333333333333336,
      jM = {
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
      aM = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      PM = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      nM = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      QM = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      zM = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      LM = 14,
      mM = {
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
      HM = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      hM = 8,
      JM = 1,
      dM = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      yM = 6,
      lM = 1,
      EM = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      UM = {
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
      GM = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      CM = {
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
      eM = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      bM = 4,
      wM = 4,
      tM = 65535,
      gM = {
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
      uM = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      RM = 88,
      pM = 0,
      WM = 24,
      sM = 48,
      DM = 80,
      kM = {
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
      ZM = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      oM = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      fM = {
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
      YM = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      NM = 65535,
      AM = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      xM = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      vM = 2,
      FM = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      BM = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      XM = {
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
      IM = {
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
      KM = {
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
      qM = 8,
      TM = {
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
      VM = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5198: (MM, rM, iM) => {
    iM.d(rM, {
      $b: () => CM,
      A: () => aM,
      B: () => sM,
      Bb: () => TM,
      Cc: () => OM.jb,
      Cd: () => zr,
      Db: () => OM.N,
      Dd: () => NM,
      Eb: () => ir,
      Ec: () => OM.mb,
      F: () => Jr,
      Fc: () => OM.xb,
      G: () => VM,
      Gc: () => dr,
      H: () => OM.n,
      Hb: () => Sr,
      Hc: () => mr,
      Hd: () => xM,
      Jb: () => OM.P,
      Kd: () => YM,
      L: () => QM,
      Lc: () => ar,
      Mb: () => SM.h,
      Md: () => BM,
      N: () => OM.o,
      Ob: () => wM,
      Oc: () => OM.yb,
      Od: () => vM,
      P: () => Mr,
      Q: () => OM.r,
      Qc: () => OM.Ab,
      Sb: () => fM,
      Sc: () => OM.Cb,
      Sd: () => IM,
      Tb: () => pM,
      Tc: () => cM,
      U: () => qM,
      Ub: () => uM,
      Ud: () => XM,
      Vd: () => Qr,
      Wb: () => OM.X,
      Xb: () => WM,
      Xc: () => OM.Fb,
      Y: () => OM.w,
      Yd: () => yr,
      Zc: () => OM.Jb,
      _: () => OM.z,
      _c: () => OM.Nb,
      ae: () => GM,
      b: () => Or,
      c: () => dM,
      cb: () => OM.D,
      cc: () => nr,
      cd: () => OM.Tb,
      de: () => KM,
      eb: () => LM,
      ec: () => UM,
      fd: () => OM.Wb,
      g: () => JM,
      hb: () => EM,
      hc: () => Hr,
      hd: () => OM.Yb,
      he: () => ZM,
      ie: () => kM,
      jd: () => mM,
      k: () => Lr,
      ke: () => DM,
      lb: () => OM.H,
      lc: () => SM.p,
      ld: () => gM,
      m: () => tM,
      nd: () => OM._b,
      ne: () => nM,
      ob: () => OM.K,
      oc: () => lM,
      oe: () => oM,
      pb: () => AM,
      pd: () => OM.$b,
      pe: () => lr,
      q: () => bM,
      qb: () => Pr,
      rc: () => jr,
      s: () => OM.k,
      sb: () => zM,
      se: () => hM,
      tb: () => OM.L,
      td: () => OM.fc,
      ub: () => FM,
      uc: () => OM.fb,
      ud: () => jM,
      vc: () => OM.gb,
      w: () => hr,
      y: () => RM,
      yb: () => rr,
      yd: () => yM,
      zc: () => OM.hb
    });
    var OM = iM(5200),
      SM = iM(2619);
    const jM = Math.round(1e3 / OM.fc),
      aM = 4,
      PM = 2;

    function nM() {
      return crypto.getRandomValues(new Uint32Array(PM))
    }
    const QM = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      zM = 16,
      LM = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      mM = 3,
      HM = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function hM(MM) {
      return (MM.nametagsHidden ? eM.NametagsHidden : 0) | (MM.crouchToggle ? eM.CrouchToggle : 0) | (MM.bhopDisabled ? eM.BhopDisabled : 0) | (MM.disableBobbing ? eM.DisableBobbing : 0) | (null !== MM.ezTowering ? eM.EzTowering : 0) | ("jump" === MM.ezTowering ? eM.EzTowerJump : 0) | (MM.ezBridging ? eM.EzBridging : 0) | (MM.showChunkBorders ? eM.ShowChunkBorders : 0) | (MM.touchWalk ? eM.TouchWalk : 0) | (MM.edgeGuard ? eM.EdgeGuard : 0) | (MM.edgeGuardLong ? eM.EdgeGuardLong : 0)
    }
    const JM = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      dM = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      yM = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      lM = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      EM = 5,
      UM = 4294967295;

    function GM(MM) {
      const rM = {
        off: 0,
        lit: HM.CellLight,
        all: HM.CellLight | HM.CellLightUnlit
      } [MM.cellLight];
      return (MM.showFog ? HM.ShowFog : 0) | (MM.lighting ? HM.Lighting : 0) | (MM.chunkFade ? HM.ChunkFade : 0) | rM
    }
    const CM = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      eM = {
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
      bM = {
        Release: 1,
        KeepTouches: 2
      },
      wM = {
        Point: 1,
        Stamped: 2
      },
      tM = {
        Add: 1,
        Clear: 2
      },
      gM = 1,
      uM = 8,
      RM = 16777215,
      pM = 4,
      WM = {
        Resume: 1
      },
      sM = {
        Held: 1
      };

    function DM(MM, rM) {
      return (MM | rM << 8) >>> 0
    }

    function kM(MM) {
      return 255 & MM
    }

    function ZM(MM) {
      return MM >>> 8
    }

    function oM(MM) {
      return MM + 3 & -4
    }
    const fM = 16777216,
      YM = 20;
    const NM = 8,
      AM = 8,
      xM = 16777216,
      vM = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      FM = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      BM = 16,
      XM = {
        Lost: 0,
        Gone: 1
      },
      IM = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function KM(MM) {
      return MM === IM.WorldgenSeed || MM === IM.Generate
    }
    const qM = 4,
      TM = 99,
      VM = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      cM = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      Mr = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17,
        LINKS_IN_FLIGHT_SHIFT: 18,
        LINKS_IN_FLIGHT_MAX: 15,
        OLDEST_LINK_SHIFT: 22,
        OLDEST_LINK_MAX: 1023,
        OLDEST_LINK_UNIT_MS: 100
      },
      rr = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      ir = 12,
      Or = 16,
      Sr = 4,
      jr = 12,
      ar = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Pr = 4,
      nr = 8,
      Qr = 8,
      zr = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Lr = {
        Crit: 1,
        HitSelf: 2
      },
      mr = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Hr = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      hr = 12,
      Jr = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      dr = 67108864;

    function yr(MM) {
      for (const [rM, iM] of Object.entries(OM.n))
        if (iM === MM) return rM;
      return `Unknown${MM}`
    }

    function lr(MM) {
      return {
        status: MM[OM.K.Status],
        lastError: MM[OM.K.LastError],
        lastErrorDetail: MM[OM.K.LastErrorDetail],
        errorCount: MM[OM.K.ErrorCount],
        frameIndex: MM[OM.K.FrameIndex],
        tickIndex: MM[OM.K.TickIndex],
        renderPending: MM[OM.K.RenderPending],
        firstView: MM[OM.K.FirstView],
        chunksCancelled: MM[OM.K.ChunksCancelled]
      }
    }
  },
  5196: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      h: () => jM,
      l: () => SM
    });
    var OM = iM(5198);

    function SM(MM) {
      return "none" !== MM
    }

    function jM(MM, rM) {
      if (!MM) return "none";
      switch (rM) {
        case OM.cb.Drawn:
          return "drawn";
        case OM.cb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function aM(MM) {
      return "drawn" === MM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);