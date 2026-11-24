export const id = 90;
export const ids = [90];
export const modules = {
  4904: (TT, UT, mT) => {
    mT.d(UT, {
      $: () => BT,
      $b: () => oT,
      A: () => gT,
      C: () => nT,
      Cb: () => wT,
      D: () => WT,
      Db: () => dT,
      Eb: () => FT,
      F: () => MT,
      G: () => iT,
      Ib: () => ST,
      K: () => AT,
      Kb: () => VT,
      L: () => lT,
      Mb: () => CT,
      Nb: () => rT,
      O: () => LT,
      Pb: () => JT,
      R: () => jT,
      Sb: () => xT,
      Tb: () => NT,
      V: () => kT,
      X: () => bT,
      Xb: () => zT,
      Y: () => HT,
      _: () => ZT,
      bb: () => tT,
      d: () => fT,
      f: () => vT,
      fb: () => yT,
      i: () => DT,
      j: () => qT,
      jb: () => XT,
      l: () => hT,
      nb: () => aT,
      o: () => pT,
      ob: () => IT,
      p: () => YT,
      pb: () => GT,
      q: () => ET,
      qb: () => KT,
      rb: () => uT,
      s: () => eT,
      tb: () => QT,
      vb: () => PT,
      w: () => OT,
      wb: () => sT,
      yb: () => cT
    });
    const WT = 32,
      zT = 33.333333333333336,
      MT = {
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
      gT = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      nT = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      HT = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      kT = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      jT = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      lT = 14,
      LT = {
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
      pT = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      BT = 8,
      ZT = 1,
      cT = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      vT = 6,
      fT = 1,
      qT = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      iT = {
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
      bT = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      OT = {
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
      eT = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      YT = 4,
      JT = 4,
      xT = 65535,
      dT = {
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
      wT = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      tT = 88,
      aT = 0,
      yT = 24,
      XT = 48,
      IT = 80,
      QT = {
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
      sT = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      FT = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      PT = {
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
      VT = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      uT = 65535,
      CT = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      rT = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      KT = 2,
      ST = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      GT = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      NT = {
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
      ET = {
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
      hT = {
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
      DT = 8,
      oT = {
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
      AT = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4895: (TT, UT, mT) => {
    mT.d(UT, {
      $: () => TU,
      Ab: () => CT,
      Ac: () => WT.bb,
      Ad: () => WT.Pb,
      Ae: () => QT,
      Be: () => IT,
      C: () => tT,
      Dc: () => WT.fb,
      De: () => HT,
      Eb: () => nU,
      Ed: () => WT.Sb,
      Fb: () => jT,
      Fc: () => WT.jb,
      G: () => gT,
      Gb: () => WT.G,
      Ge: () => FT,
      Hb: () => ST,
      Hc: () => WT.nb,
      Ic: () => WT.ob,
      Id: () => WT.Xb,
      Jb: () => UU,
      Jc: () => WT.rb,
      Je: () => fU,
      K: () => XT,
      Kc: () => cU,
      Lb: () => oT,
      Le: () => BT,
      Mb: () => WT.L,
      Md: () => MT,
      Nc: () => LU,
      O: () => ZU,
      Ob: () => mU,
      Pd: () => vT,
      Q: () => AT,
      Qb: () => zU,
      Rc: () => gU,
      Rd: () => jU,
      S: () => WT.l,
      Tb: () => WT.O,
      Ub: () => zT.e,
      V: () => kT,
      Vc: () => WT.tb,
      Vd: () => uT,
      Wd: () => rT,
      X: () => WT.o,
      Xc: () => WT.vb,
      Yb: () => JT,
      Zb: () => PT,
      Zc: () => WT.wb,
      _b: () => aT,
      _c: () => RT,
      _d: () => VT,
      ac: () => wT,
      b: () => WU,
      bc: () => WT.X,
      bd: () => WT.Cb,
      be: () => GT,
      cb: () => WT.p,
      cc: () => yT,
      dd: () => WT.Db,
      e: () => cT,
      gb: () => DT,
      gc: () => OT,
      hb: () => WT.w,
      hd: () => WT.Eb,
      i: () => ZT,
      ie: () => KT,
      jc: () => HU,
      jd: () => WT.Kb,
      kb: () => WT.A,
      kc: () => iT,
      lc: () => pU,
      le: () => ET,
      m: () => lU,
      md: () => WT.Mb,
      me: () => NT,
      nb: () => WT.C,
      ne: () => kU,
      o: () => xT,
      oc: () => zT.k,
      pb: () => lT,
      pe: () => vU,
      qd: () => WT.Nb,
      qe: () => bT,
      rb: () => qT,
      s: () => YT,
      sc: () => fT,
      te: () => hT,
      ud: () => LT,
      v: () => WT.i,
      vb: () => WT.D,
      wc: () => MU,
      xd: () => dT,
      xe: () => sT,
      yb: () => WT.F,
      z: () => BU
    });
    var WT = mT(4904),
      zT = mT(2522);
    const MT = Math.round(1e3 / WT.Xb),
      gT = 4,
      nT = 2;

    function HT() {
      return crypto.getRandomValues(new Uint32Array(nT))
    }
    const kT = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      jT = 16,
      lT = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      LT = 3,
      pT = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function BT(TT) {
      return (TT.nametagsHidden ? eT.NametagsHidden : 0) | (TT.crouchToggle ? eT.CrouchToggle : 0) | (TT.bhopDisabled ? eT.BhopDisabled : 0) | (TT.disableBobbing ? eT.DisableBobbing : 0) | (null !== TT.ezTowering ? eT.EzTowering : 0) | ("jump" === TT.ezTowering ? eT.EzTowerJump : 0) | (TT.ezBridging ? eT.EzBridging : 0) | (TT.showChunkBorders ? eT.ShowChunkBorders : 0) | (TT.touchWalk ? eT.TouchWalk : 0) | (TT.edgeGuard ? eT.EdgeGuard : 0) | (TT.edgeGuardLong ? eT.EdgeGuardLong : 0)
    }
    const ZT = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      cT = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      vT = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      fT = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      qT = 5,
      iT = 4294967295;

    function bT(TT) {
      const UT = {
        off: 0,
        lit: pT.CellLight,
        all: pT.CellLight | pT.CellLightUnlit
      } [TT.cellLight];
      return (TT.showFog ? pT.ShowFog : 0) | (TT.lighting ? pT.Lighting : 0) | (TT.chunkFade ? pT.ChunkFade : 0) | UT
    }
    const OT = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      eT = {
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
      YT = {
        Release: 1,
        KeepTouches: 2
      },
      JT = {
        Point: 1,
        Stamped: 2
      },
      xT = {
        Add: 1,
        Clear: 2
      },
      dT = 1,
      wT = 8,
      tT = 16777215,
      aT = 4,
      yT = {
        Resume: 1
      },
      XT = {
        Held: 1
      };

    function IT(TT, UT) {
      return (TT | UT << 8) >>> 0
    }

    function QT(TT) {
      return 255 & TT
    }

    function sT(TT) {
      return TT >>> 8
    }

    function FT(TT) {
      return TT + 3 & -4
    }
    const PT = 16777216,
      VT = 20;
    const uT = 8,
      CT = 8,
      rT = 16777216,
      KT = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      ST = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      GT = 16,
      NT = {
        Lost: 0,
        Gone: 1
      },
      ET = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function hT(TT) {
      return TT === ET.WorldgenSeed || TT === ET.Generate
    }
    const DT = 4,
      oT = 99,
      AT = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      RT = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      TU = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      UU = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      mU = 12,
      WU = 16,
      zU = 4,
      MU = 12,
      gU = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      nU = 4,
      HU = 8,
      kU = 8,
      jU = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      lU = {
        Crit: 1,
        HitSelf: 2
      },
      LU = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      pU = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      BU = 12,
      ZU = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      cU = 67108864;

    function vU(TT) {
      for (const [UT, mT] of Object.entries(WT.l))
        if (mT === TT) return UT;
      return `Unknown${TT}`
    }

    function fU(TT) {
      return {
        status: TT[WT.F.Status],
        lastError: TT[WT.F.LastError],
        lastErrorDetail: TT[WT.F.LastErrorDetail],
        errorCount: TT[WT.F.ErrorCount],
        frameIndex: TT[WT.F.FrameIndex],
        tickIndex: TT[WT.F.TickIndex],
        renderPending: TT[WT.F.RenderPending],
        firstView: TT[WT.F.FirstView],
        chunksCancelled: TT[WT.F.ChunksCancelled]
      }
    }
  },
  4890: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      f: () => MT,
      g: () => zT
    });
    var WT = mT(4895);

    function zT(TT) {
      return "none" !== TT
    }

    function MT(TT, UT) {
      if (!TT) return "none";
      switch (UT) {
        case WT.nb.Drawn:
          return "drawn";
        case WT.nb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function gT(TT) {
      return "drawn" === TT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);