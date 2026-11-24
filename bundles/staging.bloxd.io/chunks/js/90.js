export const id = 90;
export const ids = [90];
export const modules = {
  4893: (BB, jB, zB) => {
    zB.d(jB, {
      $: () => VB,
      A: () => NB,
      Ab: () => TB,
      B: () => QB,
      C: () => dB,
      D: () => gB,
      E: () => RB,
      Eb: () => WB,
      Fb: () => eB,
      G: () => pB,
      J: () => rB,
      Jb: () => iB,
      K: () => aB,
      M: () => UB,
      Mb: () => qB,
      Pb: () => KB,
      Q: () => tB,
      S: () => uB,
      Sb: () => nB,
      T: () => mB,
      U: () => JB,
      W: () => HB,
      Wb: () => vB,
      Y: () => FB,
      Z: () => YB,
      _: () => DB,
      bb: () => xB,
      d: () => GB,
      e: () => kB,
      eb: () => lB,
      gb: () => PB,
      h: () => bB,
      hb: () => hB,
      ib: () => AB,
      l: () => LB,
      m: () => cB,
      mb: () => XB,
      ob: () => yB,
      p: () => sB,
      q: () => EB,
      r: () => CB,
      rb: () => oB,
      sb: () => fB,
      u: () => MB,
      v: () => SB,
      vb: () => ZB,
      xb: () => wB,
      y: () => IB
    });
    const QB = 32,
      nB = 33.333333333333336,
      dB = {
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
      IB = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      NB = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      uB = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      UB = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      aB = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      pB = 14,
      rB = {
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
      sB = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      JB = 8,
      mB = 1,
      yB = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      kB = 6,
      GB = 1,
      LB = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      gB = {
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
      tB = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      SB = {
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
      MB = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      EB = 4,
      iB = 4,
      qB = 65535,
      fB = {
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
      oB = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      HB = 88,
      DB = 0,
      FB = 24,
      YB = 48,
      VB = 80,
      hB = {
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
      XB = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      ZB = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      AB = {
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
      TB = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      PB = 65535,
      WB = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      eB = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      lB = 2,
      wB = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      xB = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      KB = {
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
      CB = {
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
      cB = {
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
      bB = 8,
      vB = {
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
      RB = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4887: (BB, jB, zB) => {
    zB.d(jB, {
      $c: () => QB.vb,
      $d: () => hB,
      Ab: () => zj,
      Ac: () => QB.$,
      Ad: () => eB,
      B: () => IB,
      Bd: () => TB,
      C: () => YB,
      Cb: () => nj,
      Cc: () => QB.gb,
      Db: () => QB.J,
      Dd: () => xB,
      E: () => mj,
      Ec: () => yj,
      Gc: () => rj,
      H: () => RB,
      Hb: () => nB.g,
      Id: () => lB,
      J: () => QB.m,
      Jd: () => CB,
      K: () => UB,
      Kc: () => Ij,
      L: () => QB.p,
      Lb: () => iB,
      Ld: () => KB,
      Mb: () => AB,
      Md: () => Uj,
      N: () => Bj,
      Nb: () => DB,
      O: () => QB.q,
      Oc: () => QB.hb,
      Od: () => kj,
      Q: () => bB,
      Qc: () => QB.ib,
      Rb: () => oB,
      Rc: () => QB.mb,
      Sd: () => tB,
      Tb: () => QB.Q,
      Tc: () => OB,
      U: () => QB.v,
      Wc: () => QB.rb,
      Wd: () => cB,
      X: () => QB.y,
      Xb: () => FB,
      Xc: () => QB.sb,
      Y: () => QB.A,
      Zb: () => SB,
      _: () => pB,
      _d: () => XB,
      ac: () => uj,
      bd: () => QB.Ab,
      cb: () => LB,
      de: () => VB,
      e: () => Qj,
      ec: () => gB,
      fb: () => QB.B,
      fc: () => sj,
      fd: () => QB.Eb,
      g: () => yB,
      gd: () => QB.Fb,
      ge: () => uB,
      h: () => mB,
      ie: () => ZB,
      jb: () => QB.C,
      jc: () => nB.k,
      jd: () => rB,
      kb: () => WB,
      kd: () => fB,
      l: () => pj,
      le: () => Gj,
      mb: () => Nj,
      md: () => QB.Jb,
      me: () => JB,
      nb: () => aB,
      nc: () => GB,
      nd: () => QB.Mb,
      oc: () => dj,
      p: () => qB,
      pb: () => QB.D,
      pd: () => QB.Sb,
      qd: () => dB,
      rc: () => QB.W,
      s: () => EB,
      sb: () => wB,
      tb: () => jj,
      tc: () => QB.Y,
      u: () => QB.h,
      uc: () => QB.Z,
      ud: () => kB,
      wb: () => vB,
      x: () => Jj,
      xb: () => QB.G,
      xc: () => QB._,
      y: () => HB,
      yd: () => aj,
      zd: () => PB
    });
    var QB = zB(4893),
      nB = zB(2482);
    const dB = Math.round(1e3 / QB.Sb),
      IB = 4,
      NB = 2;

    function uB() {
      return crypto.getRandomValues(new Uint32Array(NB))
    }
    const UB = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      aB = 16,
      pB = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      rB = 3,
      sB = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function JB(BB) {
      return (BB.nametagsHidden ? MB.NametagsHidden : 0) | (BB.crouchToggle ? MB.CrouchToggle : 0) | (BB.bhopDisabled ? MB.BhopDisabled : 0) | (BB.disableBobbing ? MB.DisableBobbing : 0) | (null !== BB.ezTowering ? MB.EzTowering : 0) | ("jump" === BB.ezTowering ? MB.EzTowerJump : 0) | (BB.ezBridging ? MB.EzBridging : 0) | (BB.showChunkBorders ? MB.ShowChunkBorders : 0) | (BB.touchWalk ? MB.TouchWalk : 0) | (BB.edgeGuard ? MB.EdgeGuard : 0) | (BB.edgeGuardLong ? MB.EdgeGuardLong : 0)
    }
    const mB = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      yB = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      kB = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      GB = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      LB = 5,
      gB = 4294967295;

    function tB(BB) {
      const jB = {
        off: 0,
        lit: sB.CellLight,
        all: sB.CellLight | sB.CellLightUnlit
      } [BB.cellLight];
      return (BB.showFog ? sB.ShowFog : 0) | (BB.lighting ? sB.Lighting : 0) | (BB.chunkFade ? sB.ChunkFade : 0) | jB
    }
    const SB = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      MB = {
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
      EB = {
        Release: 1,
        KeepTouches: 2
      },
      iB = {
        Point: 1,
        Stamped: 2
      },
      qB = {
        Add: 1,
        Clear: 2
      },
      fB = 1,
      oB = 8,
      HB = 16777215,
      DB = 4,
      FB = {
        Resume: 1
      },
      YB = {
        Held: 1
      };

    function VB(BB, jB) {
      return (BB | jB << 8) >>> 0
    }

    function hB(BB) {
      return 255 & BB
    }

    function XB(BB) {
      return BB >>> 8
    }

    function ZB(BB) {
      return BB + 3 & -4
    }
    const AB = 16777216,
      TB = 20;
    const PB = 8,
      WB = 8,
      eB = 16777216,
      lB = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      wB = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      xB = 16,
      KB = {
        Lost: 0,
        Gone: 1
      },
      CB = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function cB(BB) {
      return BB === CB.WorldgenSeed || BB === CB.Generate
    }
    const bB = 4,
      vB = 99,
      RB = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      OB = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      Bj = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      jj = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      zj = 12,
      Qj = 16,
      nj = 4,
      dj = 12,
      Ij = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Nj = 4,
      uj = 8,
      Uj = 8,
      aj = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      pj = {
        Crit: 1,
        HitSelf: 2
      },
      rj = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      sj = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Jj = 12,
      mj = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      yj = 67108864;

    function kj(BB) {
      for (const [jB, zB] of Object.entries(QB.m))
        if (zB === BB) return jB;
      return `Unknown${BB}`
    }

    function Gj(BB) {
      return {
        status: BB[QB.C.Status],
        lastError: BB[QB.C.LastError],
        lastErrorDetail: BB[QB.C.LastErrorDetail],
        errorCount: BB[QB.C.ErrorCount],
        frameIndex: BB[QB.C.FrameIndex],
        tickIndex: BB[QB.C.TickIndex],
        renderPending: BB[QB.C.RenderPending],
        firstView: BB[QB.C.FirstView],
        chunksCancelled: BB[QB.C.ChunksCancelled]
      }
    }
  },
  4879: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB,
      h: () => dB,
      i: () => nB
    });
    var QB = zB(4887);

    function nB(BB) {
      return "none" !== BB
    }

    function dB(BB, jB) {
      if (!BB) return "none";
      switch (jB) {
        case QB.Y.Drawn:
          return "drawn";
        case QB.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function IB(BB) {
      return "drawn" === BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);