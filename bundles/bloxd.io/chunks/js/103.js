export const id = 103;
export const ids = [103, 104];
export const modules = {
  5268: (HH, BH, LH) => {
    LH.d(BH, {
      $: () => CH,
      $b: () => RH,
      A: () => UH,
      Ab: () => ZH,
      C: () => hH,
      Db: () => DH,
      Eb: () => jH,
      Fb: () => eH,
      G: () => tH,
      H: () => AH,
      Hb: () => NH,
      I: () => SH,
      Kb: () => qH,
      Lb: () => WH,
      M: () => PH,
      Ob: () => oH,
      Q: () => pH,
      Qb: () => mH,
      T: () => XH,
      Tb: () => gH,
      V: () => GH,
      Xb: () => wH,
      Y: () => EH,
      ac: () => nH,
      bc: () => FH,
      c: () => xH,
      d: () => MH,
      db: () => TH,
      ec: () => bH,
      fb: () => zH,
      gb: () => QH,
      gc: () => kH,
      h: () => JH,
      hb: () => uH,
      ic: () => dH,
      l: () => vH,
      lb: () => IH,
      lc: () => rH,
      nc: () => iH,
      p: () => sH,
      pb: () => lH,
      q: () => YH,
      s: () => OH,
      tb: () => KH,
      ub: () => fH,
      v: () => aH,
      wb: () => cH,
      z: () => VH
    });
    const AH = 32,
      rH = 33.333333333333336,
      SH = {
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
      hH = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      tH = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      zH = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      CH = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      EH = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      XH = 14,
      GH = {
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
      YH = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      uH = 8,
      QH = 1,
      WH = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      MH = 6,
      xH = 1,
      vH = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      PH = {
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
      TH = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      UH = {
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
      VH = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      OH = 4,
      bH = 4,
      kH = 65535,
      mH = {
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
      oH = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      IH = 88,
      fH = 0,
      lH = 24,
      KH = 48,
      cH = 80,
      eH = {
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
      qH = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      gH = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      NH = {
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
      RH = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      jH = 65535,
      nH = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      FH = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      DH = 2,
      wH = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      ZH = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      dH = {
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
      aH = {
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
      sH = {
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
      JH = 8,
      iH = {
        GameCodeMessage: 4,
        NewOtherEntitySettings: 23,
        NewClientOptions: 37,
        Chat: 64,
        ChatRemoved: 108,
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
      pH = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5265: (HH, BH, LH) => {
    LH.d(BH, {
      $: () => AH.G,
      $c: () => AH.Qb,
      Ab: () => AH.T,
      Ad: () => EB,
      Bd: () => jH,
      C: () => QB,
      Cb: () => LB,
      D: () => pH,
      Dc: () => AH.Eb,
      Ed: () => FH,
      F: () => AH.p,
      Fd: () => RH,
      Gb: () => rB,
      Hc: () => WB,
      Ic: () => GB,
      J: () => CH,
      Jc: () => hB,
      Jd: () => ZH,
      Kb: () => AH.V,
      Ld: () => DH,
      Mc: () => AH.Fb,
      N: () => AH.q,
      Nb: () => rH.e,
      P: () => HB,
      Pd: () => aH,
      Qb: () => bH,
      Qc: () => AH.Hb,
      R: () => AH.s,
      Rd: () => dH,
      Sc: () => AH.Kb,
      Tb: () => NH,
      U: () => JH,
      Vb: () => fH,
      Vc: () => yH,
      Vd: () => CB,
      X: () => AH.A,
      Zb: () => oH,
      Zc: () => AH.Ob,
      Zd: () => MB,
      _: () => AH.C,
      _b: () => AH.db,
      ae: () => TH,
      bc: () => lH,
      c: () => AB,
      cb: () => XH,
      cc: () => UH,
      cd: () => AH.Tb,
      e: () => WH,
      ec: () => zB,
      ed: () => AH.$b,
      ee: () => sH,
      gb: () => vH,
      gc: () => PH,
      gd: () => AH.ac,
      h: () => QH,
      hd: () => AH.bc,
      he: () => qH,
      jc: () => YB,
      jd: () => GH,
      kb: () => AH.H,
      l: () => XB,
      lb: () => AH.I,
      le: () => eH,
      mc: () => rH.i,
      me: () => cH,
      n: () => kH,
      nc: () => xH,
      nd: () => mH,
      o: () => OH,
      ob: () => nH,
      pb: () => tB,
      pc: () => SB,
      pd: () => AH.ec,
      qc: () => AH.lb,
      qd: () => AH.gc,
      qe: () => zH,
      r: () => AH.h,
      sb: () => EH,
      t: () => uB,
      tb: () => AH.M,
      td: () => AH.lc,
      te: () => gH,
      ub: () => wH,
      uc: () => AH.pb,
      ue: () => xB,
      vc: () => AH.tb,
      w: () => IH,
      wc: () => AH.ub,
      wd: () => SH,
      we: () => uH,
      y: () => hH,
      yb: () => BB,
      z: () => KH,
      zb: () => iH,
      zc: () => AH.wb,
      zd: () => MH
    });
    var AH = LH(5268),
      rH = LH(2600);
    const SH = Math.round(1e3 / AH.lc),
      hH = 4,
      tH = 2;

    function zH() {
      return crypto.getRandomValues(new Uint32Array(tH))
    }
    const CH = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      EH = 16,
      XH = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      GH = 3,
      YH = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function uH(HH) {
      return (HH.nametagsHidden ? VH.NametagsHidden : 0) | (HH.crouchToggle ? VH.CrouchToggle : 0) | (HH.bhopDisabled ? VH.BhopDisabled : 0) | (HH.disableBobbing ? VH.DisableBobbing : 0) | (null !== HH.ezTowering ? VH.EzTowering : 0) | ("jump" === HH.ezTowering ? VH.EzTowerJump : 0) | (HH.ezBridging ? VH.EzBridging : 0) | (HH.showChunkBorders ? VH.ShowChunkBorders : 0) | (HH.touchWalk ? VH.TouchWalk : 0) | (HH.edgeGuard ? VH.EdgeGuard : 0) | (HH.edgeGuardLong ? VH.EdgeGuardLong : 0)
    }
    const QH = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      WH = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      MH = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      xH = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      vH = 5,
      PH = 4294967295;

    function TH(HH) {
      const BH = {
        off: 0,
        lit: YH.CellLight,
        all: YH.CellLight | YH.CellLightUnlit
      } [HH.cellLight];
      return (HH.showFog ? YH.ShowFog : 0) | (HH.lighting ? YH.Lighting : 0) | (HH.chunkFade ? YH.ChunkFade : 0) | BH
    }
    const UH = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      VH = {
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
      OH = {
        Release: 1,
        KeepTouches: 2
      },
      bH = {
        Point: 1,
        Stamped: 2
      },
      kH = {
        Add: 1,
        Clear: 2
      },
      mH = 1,
      oH = 8,
      IH = 16777215,
      fH = 4,
      lH = {
        Resume: 1
      },
      KH = {
        Held: 1
      };

    function cH(HH, BH) {
      return (HH | BH << 8) >>> 0
    }

    function eH(HH) {
      return 255 & HH
    }

    function qH(HH) {
      return HH >>> 8
    }

    function gH(HH) {
      return HH + 3 & -4
    }
    const NH = 16777216,
      RH = 20;
    const jH = 8,
      nH = 8,
      FH = 16777216,
      DH = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      wH = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      ZH = 16,
      dH = {
        Lost: 0,
        Gone: 1
      },
      aH = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function sH(HH) {
      return HH === aH.WorldgenSeed || HH === aH.Generate
    }
    const JH = 4,
      iH = 99,
      pH = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      yH = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      HB = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17,
        LINKS_IN_FLIGHT_SHIFT: 18,
        LINKS_IN_FLIGHT_MAX: 15,
        OLDEST_LINK_SHIFT: 22,
        OLDEST_LINK_MAX: 1023,
        OLDEST_LINK_UNIT_MS: 100
      },
      BB = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      LB = 12,
      AB = 16,
      rB = 4,
      SB = 12,
      hB = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      tB = 4,
      zB = 8,
      CB = 8,
      EB = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      XB = {
        Crit: 1,
        HitSelf: 2
      },
      GB = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      YB = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      uB = 12,
      QB = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      WB = 67108864;

    function MB(HH) {
      for (const [BH, LH] of Object.entries(AH.p))
        if (LH === HH) return BH;
      return `Unknown${HH}`
    }

    function xB(HH) {
      return {
        status: HH[AH.I.Status],
        lastError: HH[AH.I.LastError],
        lastErrorDetail: HH[AH.I.LastErrorDetail],
        errorCount: HH[AH.I.ErrorCount],
        frameIndex: HH[AH.I.FrameIndex],
        tickIndex: HH[AH.I.TickIndex],
        renderPending: HH[AH.I.RenderPending],
        firstView: HH[AH.I.FirstView],
        chunksCancelled: HH[AH.I.ChunksCancelled]
      }
    }
  },
  5260: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      d: () => SH,
      e: () => rH
    });
    var AH = LH(5265);

    function rH(HH) {
      return "none" !== HH
    }

    function SH(HH, BH) {
      if (!HH) return "none";
      switch (BH) {
        case AH.$.Drawn:
          return "drawn";
        case AH.$.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function hH(HH) {
      return "drawn" === HH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);