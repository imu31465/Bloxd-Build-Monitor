export const id = 90;
export const ids = [90];
export const modules = {
  4818: (GG, bG, ZG) => {
    ZG.d(bG, {
      $: () => UG,
      Ab: () => jG,
      B: () => yG,
      D: () => kG,
      Db: () => AG,
      Gb: () => PG,
      H: () => wG,
      Hb: () => dG,
      K: () => LG,
      Kb: () => IG,
      M: () => EG,
      Mb: () => mG,
      Ob: () => MG,
      Pb: () => RG,
      Q: () => xG,
      R: () => pG,
      Sb: () => sG,
      T: () => fG,
      U: () => VG,
      Vb: () => nG,
      X: () => YG,
      Zb: () => gG,
      _: () => oG,
      _b: () => CG,
      ab: () => hG,
      bb: () => KG,
      cc: () => WG,
      e: () => rG,
      eb: () => FG,
      fc: () => HG,
      gb: () => aG,
      h: () => JG,
      i: () => NG,
      ib: () => cG,
      ic: () => SG,
      jc: () => OG,
      k: () => zG,
      lb: () => vG,
      m: () => DG,
      o: () => QG,
      ob: () => lG,
      pb: () => TG,
      q: () => iG,
      r: () => tG,
      sb: () => eG,
      v: () => uG,
      wb: () => qG,
      x: () => XG
    });
    const wG = 32,
      SG = 33.333333333333336,
      LG = {
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
      yG = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      kG = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      UG = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      YG = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      VG = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      pG = 14,
      fG = {
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
      QG = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      KG = 8,
      hG = 1,
      dG = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      JG = 6,
      rG = 1,
      zG = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      EG = {
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
      oG = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      XG = {
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
      uG = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      iG = 4,
      CG = 4,
      WG = 65535,
      mG = {
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
      IG = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      FG = 88,
      vG = 0,
      aG = 24,
      cG = 48,
      lG = 80,
      jG = {
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
      PG = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      MG = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      AG = {
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
      sG = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      qG = 65535,
      nG = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      gG = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      eG = 2,
      RG = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      TG = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      HG = {
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
      tG = {
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
      DG = {
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
      NG = 8,
      OG = {
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
      xG = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4810: (GG, bG, ZG) => {
    ZG.d(bG, {
      $: () => NG,
      $b: () => aG,
      Ad: () => wG.cc,
      B: () => FG,
      Bb: () => RG,
      Ce: () => KG,
      Db: () => bb,
      Dc: () => wG.lb,
      Dd: () => wG.ic,
      Eb: () => OG,
      F: () => yG,
      Hc: () => wG.ob,
      Hd: () => LG,
      I: () => cG,
      Ib: () => wG.R,
      Jb: () => Zb,
      Kb: () => Sb,
      Kd: () => JG,
      Lb: () => wG.T,
      Lc: () => wG.wb,
      M: () => hb,
      Mb: () => SG.e,
      Md: () => Vb,
      Nb: () => CG,
      Nd: () => qG,
      O: () => xG,
      Ob: () => AG,
      Pc: () => db,
      Pd: () => gG,
      Qd: () => sG,
      R: () => wG.m,
      Rb: () => vG,
      Rd: () => TG,
      T: () => YG,
      Tc: () => fb,
      Ub: () => IG,
      V: () => wG.o,
      X: () => Gb,
      Xc: () => yb,
      Xd: () => eG,
      Yb: () => wG._,
      Z: () => wG.q,
      Zd: () => tG,
      _c: () => wG.Ab,
      _d: () => HG,
      ac: () => XG,
      ae: () => Yb,
      bb: () => wG.x,
      bd: () => wG.Db,
      c: () => wb,
      cd: () => wG.Gb,
      de: () => Jb,
      ec: () => Ub,
      ed: () => BG,
      fb: () => wG.B,
      fe: () => oG,
      g: () => dG,
      ib: () => wG.D,
      ic: () => EG,
      id: () => wG.Kb,
      ie: () => DG,
      jc: () => Qb,
      k: () => hG,
      kb: () => pG,
      ke: () => PG,
      ld: () => wG.Mb,
      me: () => jG,
      n: () => pb,
      nb: () => zG,
      nc: () => SG.i,
      nd: () => wG.Ob,
      o: () => WG,
      ob: () => wG.H,
      pb: () => wG.K,
      qb: () => nG,
      qc: () => rG,
      qd: () => wG.Sb,
      qe: () => lG,
      rc: () => Lb,
      rd: () => wG.Vb,
      s: () => iG,
      sb: () => kb,
      sd: () => wG.Zb,
      td: () => fG,
      te: () => UG,
      vb: () => VG,
      vc: () => wG.eb,
      ve: () => MG,
      w: () => wG.i,
      wd: () => mG,
      x: () => Kb,
      xc: () => wG.gb,
      yb: () => wG.M,
      ye: () => rb,
      zc: () => wG.ib,
      zd: () => wG._b
    });
    var wG = ZG(4818),
      SG = ZG(2380);
    const LG = Math.round(1e3 / wG.ic),
      yG = 4,
      kG = 2;

    function UG() {
      return crypto.getRandomValues(new Uint32Array(kG))
    }
    const YG = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      VG = 16,
      pG = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      fG = 3,
      QG = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function KG(GG) {
      return (GG.nametagsHidden ? uG.NametagsHidden : 0) | (GG.crouchToggle ? uG.CrouchToggle : 0) | (GG.bhopDisabled ? uG.BhopDisabled : 0) | (GG.disableBobbing ? uG.DisableBobbing : 0) | (null !== GG.ezTowering ? uG.EzTowering : 0) | ("jump" === GG.ezTowering ? uG.EzTowerJump : 0) | (GG.ezBridging ? uG.EzBridging : 0) | (GG.showChunkBorders ? uG.ShowChunkBorders : 0) | (GG.touchWalk ? uG.TouchWalk : 0) | (GG.edgeGuard ? uG.EdgeGuard : 0) | (GG.edgeGuardLong ? uG.EdgeGuardLong : 0)
    }
    const hG = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      dG = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      JG = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      rG = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      zG = 5,
      EG = 4294967295;

    function oG(GG) {
      const bG = {
        off: 0,
        lit: QG.CellLight,
        all: QG.CellLight | QG.CellLightUnlit
      } [GG.cellLight];
      return (GG.showFog ? QG.ShowFog : 0) | (GG.lighting ? QG.Lighting : 0) | (GG.chunkFade ? QG.ChunkFade : 0) | bG
    }
    const XG = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      uG = {
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
      iG = {
        Release: 1,
        KeepTouches: 2
      },
      CG = {
        Point: 1,
        Stamped: 2
      },
      WG = {
        Add: 1,
        Clear: 2
      },
      mG = 1,
      IG = 8,
      FG = 16777215,
      vG = 4,
      aG = {
        Resume: 1
      },
      cG = {
        Held: 1
      };

    function lG(GG, bG) {
      return (GG | bG << 8) >>> 0
    }

    function jG(GG) {
      return 255 & GG
    }

    function PG(GG) {
      return GG >>> 8
    }

    function MG(GG) {
      return GG + 3 & -4
    }
    const AG = 16777216,
      sG = 20;
    const qG = 8,
      nG = 8,
      gG = 16777216,
      eG = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      RG = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      TG = 16,
      HG = {
        Lost: 0,
        Gone: 1
      },
      tG = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function DG(GG) {
      return GG === tG.WorldgenSeed || GG === tG.Generate
    }
    const NG = 4,
      OG = 99,
      xG = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      BG = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      Gb = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      bb = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      Zb = 12,
      wb = 16,
      Sb = 4,
      Lb = 12,
      yb = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      kb = 4,
      Ub = 8,
      Yb = 8,
      Vb = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      pb = {
        Crit: 1,
        HitSelf: 2
      },
      fb = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Qb = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Kb = 12,
      hb = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      db = 67108864;

    function Jb(GG) {
      for (const [bG, ZG] of Object.entries(wG.m))
        if (ZG === GG) return bG;
      return `Unknown${GG}`
    }

    function rb(GG) {
      return {
        status: GG[wG.K.Status],
        lastError: GG[wG.K.LastError],
        lastErrorDetail: GG[wG.K.LastErrorDetail],
        errorCount: GG[wG.K.ErrorCount],
        frameIndex: GG[wG.K.FrameIndex],
        tickIndex: GG[wG.K.TickIndex],
        renderPending: GG[wG.K.RenderPending],
        firstView: GG[wG.K.FirstView],
        chunksCancelled: GG[wG.K.ChunksCancelled]
      }
    }
  },
  4804: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      i: () => LG,
      l: () => SG
    });
    var wG = ZG(4810);

    function SG(GG) {
      return "none" !== GG
    }

    function LG(GG, bG) {
      if (!GG) return "none";
      switch (bG) {
        case wG.ib.Drawn:
          return "drawn";
        case wG.ib.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function yG(GG) {
      return "drawn" === GG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);