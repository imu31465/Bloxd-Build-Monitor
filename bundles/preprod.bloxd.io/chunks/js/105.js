export const id = 105;
export const ids = [105, 106];
export const modules = {
  5551: (WW, iW, OW) => {
    OW.d(iW, {
      $b: () => qW,
      Bb: () => eW,
      C: () => SW,
      D: () => PW,
      Db: () => RW,
      Eb: () => BW,
      H: () => LW,
      Hb: () => fW,
      Jb: () => vW,
      K: () => mW,
      M: () => NW,
      N: () => MW,
      Nb: () => VW,
      Ob: () => gW,
      Qb: () => jW,
      R: () => FW,
      Rb: () => HW,
      T: () => ZW,
      U: () => xW,
      Ub: () => hW,
      V: () => tW,
      Y: () => wW,
      Yb: () => DW,
      ab: () => KW,
      c: () => kW,
      cb: () => cW,
      dc: () => pW,
      e: () => UW,
      gb: () => bW,
      gc: () => CW,
      h: () => rW,
      ic: () => XW,
      k: () => sW,
      kb: () => AW,
      kc: () => TW,
      lc: () => JW,
      nb: () => nW,
      nc: () => GW,
      o: () => aW,
      pb: () => oW,
      q: () => lW,
      rc: () => EW,
      tb: () => dW,
      u: () => yW,
      uc: () => zW,
      x: () => IW,
      xb: () => uW,
      z: () => YW
    });
    const mW = 32,
      EW = 33.333333333333336,
      NW = {
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
      PW = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      LW = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      cW = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      wW = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      tW = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      ZW = 14,
      xW = {
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
      lW = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      AW = 8,
      bW = 1,
      jW = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      UW = 6,
      kW = 1,
      sW = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      MW = {
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
      KW = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      SW = {
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
      YW = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      yW = 4,
      TW = 4,
      JW = 65535,
      hW = {
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
      HW = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      nW = 88,
      uW = 0,
      oW = 24,
      dW = 48,
      eW = 80,
      vW = {
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
      gW = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      DW = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      VW = {
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
      pW = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      fW = 65535,
      CW = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      XW = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      BW = 2,
      qW = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      RW = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      GW = {
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
      IW = {
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
      aW = {
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
      rW = 8,
      zW = {
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
      FW = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5546: (WW, iW, OW) => {
    OW.d(iW, {
      $d: () => GW,
      A: () => bi,
      Ac: () => mW.pb,
      Bb: () => Ei,
      Be: () => AW,
      C: () => FW,
      Cd: () => mW.kc,
      D: () => mW.o,
      Dc: () => mW.tb,
      E: () => wW,
      Eb: () => mW.U,
      Ed: () => mW.lc,
      G: () => mW.q,
      Hb: () => EW.h,
      Hc: () => mW.xb,
      Ic: () => mW.Bb,
      Id: () => mW.rc,
      Jd: () => NW,
      K: () => Wi,
      Kd: () => UW,
      Lb: () => TW,
      Lc: () => mW.Hb,
      Ld: () => ti,
      M: () => mW.u,
      Mb: () => VW,
      Md: () => fW,
      N: () => rW,
      Oc: () => ji,
      Od: () => XW,
      Pd: () => pW,
      Q: () => mW.C,
      Qb: () => uW,
      S: () => mW.D,
      Sc: () => xi,
      Sd: () => RW,
      Tc: () => Pi,
      Ub: () => HW,
      Uc: () => mW.Jb,
      V: () => mW.H,
      Wb: () => mW.ab,
      Xd: () => BW,
      Y: () => ZW,
      Yc: () => mW.Nb,
      Z: () => sW,
      _: () => mW.K,
      _b: () => oW,
      _d: () => IW,
      ab: () => mW.M,
      ad: () => mW.Ob,
      b: () => mi,
      bb: () => CW,
      bc: () => SW,
      be: () => wi,
      cd: () => QW,
      db: () => Li,
      de: () => Ui,
      e: () => jW,
      fc: () => ci,
      fd: () => mW.Rb,
      gb: () => tW,
      gc: () => MW,
      gd: () => mW.Ub,
      ge: () => KW,
      h: () => bW,
      hb: () => mW.N,
      hc: () => li,
      ib: () => qW,
      j: () => Zi,
      je: () => aW,
      k: () => JW,
      kd: () => mW.Yb,
      lc: () => EW.n,
      ld: () => mW.dc,
      mb: () => ii,
      me: () => gW,
      n: () => yW,
      ne: () => vW,
      o: () => mW.h,
      pc: () => kW,
      pd: () => mW.gc,
      qb: () => zW,
      r: () => Ai,
      re: () => eW,
      tb: () => mW.T,
      tc: () => Ni,
      td: () => mW.ic,
      te: () => cW,
      u: () => nW,
      v: () => PW,
      vd: () => xW,
      wc: () => mW.nb,
      x: () => dW,
      xb: () => Oi,
      xe: () => DW,
      ye: () => ki,
      zd: () => hW
    });
    var mW = OW(5551),
      EW = OW(3305);
    const NW = Math.round(1e3 / mW.rc),
      PW = 4,
      LW = 2;

    function cW() {
      return crypto.getRandomValues(new Uint32Array(LW))
    }
    const wW = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      tW = 16,
      ZW = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      xW = 3,
      lW = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function AW(WW) {
      return (WW.nametagsHidden ? YW.NametagsHidden : 0) | (WW.crouchToggle ? YW.CrouchToggle : 0) | (WW.bhopDisabled ? YW.BhopDisabled : 0) | (WW.disableBobbing ? YW.DisableBobbing : 0) | (null !== WW.ezTowering ? YW.EzTowering : 0) | ("jump" === WW.ezTowering ? YW.EzTowerJump : 0) | (WW.ezBridging ? YW.EzBridging : 0) | (WW.showChunkBorders ? YW.ShowChunkBorders : 0) | (WW.touchWalk ? YW.TouchWalk : 0) | (WW.edgeGuard ? YW.EdgeGuard : 0) | (WW.edgeGuardLong ? YW.EdgeGuardLong : 0)
    }
    const bW = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      jW = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      UW = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      kW = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      sW = 5,
      MW = 4294967295;

    function KW(WW) {
      const iW = {
        off: 0,
        lit: lW.CellLight,
        all: lW.CellLight | lW.CellLightUnlit
      } [WW.cellLight];
      return (WW.showFog ? lW.ShowFog : 0) | (WW.lighting ? lW.Lighting : 0) | (WW.chunkFade ? lW.ChunkFade : 0) | iW
    }
    const SW = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      YW = {
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
      yW = {
        Release: 1,
        KeepTouches: 2
      },
      TW = {
        Point: 1,
        Stamped: 2
      },
      JW = {
        Add: 1,
        Clear: 2
      },
      hW = 1,
      HW = 8,
      nW = 16777215,
      uW = 4,
      oW = {
        Resume: 1
      },
      dW = {
        Held: 1
      };

    function eW(WW, iW) {
      return (WW | iW << 8) >>> 0
    }

    function vW(WW) {
      return 255 & WW
    }

    function gW(WW) {
      return WW >>> 8
    }

    function DW(WW) {
      return WW + 3 & -4
    }
    const VW = 16777216,
      pW = 20;
    const fW = 8,
      CW = 8,
      XW = 16777216,
      BW = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      qW = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      RW = 16,
      GW = {
        Lost: 0,
        Gone: 1
      },
      IW = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function aW(WW) {
      return WW === IW.WorldgenSeed || WW === IW.Generate
    }
    const rW = 4,
      zW = 99,
      FW = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      QW = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      Wi = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17,
        LINKS_IN_FLIGHT_SHIFT: 18,
        LINKS_IN_FLIGHT_MAX: 15,
        OLDEST_LINK_SHIFT: 22,
        OLDEST_LINK_MAX: 1023,
        OLDEST_LINK_UNIT_MS: 100
      },
      ii = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      Oi = 12,
      mi = 16,
      Ei = 4,
      Ni = 12,
      Pi = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Li = 4,
      ci = 8,
      wi = 8,
      ti = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Zi = {
        Crit: 1,
        HitSelf: 2
      },
      xi = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      li = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Ai = 12,
      bi = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      ji = 67108864;

    function Ui(WW) {
      for (const [iW, OW] of Object.entries(mW.o))
        if (OW === WW) return iW;
      return `Unknown${WW}`
    }

    function ki(WW) {
      return {
        status: WW[mW.M.Status],
        lastError: WW[mW.M.LastError],
        lastErrorDetail: WW[mW.M.LastErrorDetail],
        errorCount: WW[mW.M.ErrorCount],
        frameIndex: WW[mW.M.FrameIndex],
        tickIndex: WW[mW.M.TickIndex],
        renderPending: WW[mW.M.RenderPending],
        firstView: WW[mW.M.FirstView],
        chunksCancelled: WW[mW.M.ChunksCancelled]
      }
    }
  },
  5540: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      f: () => NW,
      g: () => EW
    });
    var mW = OW(5546);

    function EW(WW) {
      return "none" !== WW
    }

    function NW(WW, iW) {
      if (!WW) return "none";
      switch (iW) {
        case mW.V.Drawn:
          return "drawn";
        case mW.V.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function PW(WW) {
      return "drawn" === WW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);