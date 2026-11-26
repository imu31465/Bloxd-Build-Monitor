export const id = 103;
export const ids = [103, 104];
export const modules = {
  5287: (BB, OB, GB) => {
    GB.d(OB, {
      $b: () => eB,
      A: () => nB,
      Bb: () => iB,
      Cb: () => TB,
      E: () => SB,
      Eb: () => aB,
      G: () => oB,
      Hb: () => EB,
      K: () => jB,
      Kb: () => LB,
      L: () => YB,
      Mb: () => XB,
      O: () => QB,
      Ob: () => gB,
      Q: () => AB,
      R: () => xB,
      Rb: () => ZB,
      S: () => PB,
      Sb: () => KB,
      Tb: () => dB,
      W: () => zB,
      Xb: () => rB,
      _: () => MB,
      ac: () => wB,
      bb: () => JB,
      cb: () => VB,
      dc: () => cB,
      e: () => RB,
      fb: () => yB,
      fc: () => hB,
      h: () => NB,
      hc: () => fB,
      jb: () => qB,
      k: () => vB,
      kb: () => pB,
      kc: () => kB,
      lc: () => bB,
      m: () => WB,
      nc: () => DB,
      ob: () => uB,
      oc: () => sB,
      p: () => HB,
      q: () => lB,
      sb: () => IB,
      tb: () => FB,
      u: () => UB,
      w: () => CB,
      xb: () => mB
    });
    const YB = 32,
      DB = 33.333333333333336,
      QB = {
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
      oB = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      jB = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      yB = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      JB = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      MB = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      PB = 14,
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
      lB = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      pB = 8,
      qB = 1,
      ZB = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      NB = 6,
      RB = 1,
      WB = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      AB = {
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
      VB = {
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
      nB = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      UB = 4,
      fB = 4,
      kB = 65535,
      dB = {
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
      KB = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      uB = 88,
      mB = 0,
      IB = 24,
      FB = 48,
      iB = 80,
      LB = {
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
      gB = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      rB = {
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
      wB = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      EB = 65535,
      cB = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      hB = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      aB = 2,
      eB = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      TB = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
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
      HB = {
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
      vB = 8,
      sB = {
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
      xB = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5281: (BB, OB, GB) => {
    GB.d(OB, {
      $: () => YB.K,
      $b: () => mB,
      $d: () => NO,
      Ac: () => QO,
      Ad: () => YB.nc,
      B: () => FB,
      Cb: () => OO,
      Cd: () => QB,
      E: () => qO,
      Ec: () => YB.ob,
      Ed: () => NB,
      Gb: () => sB,
      Gc: () => YB.sb,
      Gd: () => MO,
      H: () => xB,
      Hd: () => EB,
      I: () => YB.p,
      J: () => JB,
      Kb: () => YB.S,
      Kc: () => YB.tb,
      Kd: () => hB,
      Ld: () => wB,
      Mb: () => GO,
      N: () => YB.q,
      Nc: () => YB.xb,
      Od: () => TB,
      Pc: () => YB.Bb,
      Q: () => BO,
      Qb: () => DO,
      Rc: () => YB.Hb,
      Tc: () => ZO,
      U: () => YB.u,
      Ub: () => YB.W,
      Uc: () => zO,
      Ud: () => aB,
      V: () => vB,
      Wc: () => oO,
      Wd: () => CB,
      Xb: () => DB.d,
      Xc: () => YB.Kb,
      Y: () => YB.E,
      Yd: () => bB,
      Z: () => YB.G,
      Zb: () => fB,
      Zc: () => YB.Mb,
      Zd: () => JO,
      _b: () => XB,
      ad: () => YB.Ob,
      b: () => YO,
      be: () => VB,
      cc: () => KB,
      db: () => PB,
      dd: () => tB,
      de: () => HB,
      f: () => ZB,
      fd: () => YB.Sb,
      gb: () => WB,
      gc: () => YB.cb,
      ge: () => gB,
      hc: () => IB,
      i: () => qB,
      ib: () => YB.L,
      j: () => PO,
      jd: () => YB.Tb,
      kc: () => SB,
      ke: () => LB,
      ld: () => YB.Xb,
      le: () => iB,
      mb: () => YB.O,
      me: () => yB,
      n: () => kB,
      nb: () => cB,
      nc: () => yO,
      od: () => YB.ac,
      pb: () => jO,
      q: () => UB,
      qc: () => AB,
      qd: () => YB.dc,
      qe: () => rB,
      r: () => YB.k,
      re: () => RO,
      s: () => pO,
      sc: () => lO,
      sd: () => YB.fc,
      t: () => uB,
      tb: () => MB,
      td: () => zB,
      ub: () => YB.Q,
      ud: () => dB,
      ue: () => pB,
      vc: () => DB.j,
      vd: () => YB.hc,
      x: () => oB,
      xd: () => YB.kc,
      yb: () => eB,
      zc: () => RB
    });
    var YB = GB(5287),
      DB = GB(2617);
    const QB = Math.round(1e3 / YB.nc),
      oB = 4,
      jB = 2;

    function yB() {
      return crypto.getRandomValues(new Uint32Array(jB))
    }
    const JB = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      MB = 16,
      PB = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      zB = 3,
      lB = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function pB(BB) {
      return (BB.nametagsHidden ? nB.NametagsHidden : 0) | (BB.crouchToggle ? nB.CrouchToggle : 0) | (BB.bhopDisabled ? nB.BhopDisabled : 0) | (BB.disableBobbing ? nB.DisableBobbing : 0) | (null !== BB.ezTowering ? nB.EzTowering : 0) | ("jump" === BB.ezTowering ? nB.EzTowerJump : 0) | (BB.ezBridging ? nB.EzBridging : 0) | (BB.showChunkBorders ? nB.ShowChunkBorders : 0) | (BB.touchWalk ? nB.TouchWalk : 0) | (BB.edgeGuard ? nB.EdgeGuard : 0) | (BB.edgeGuardLong ? nB.EdgeGuardLong : 0)
    }
    const qB = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      ZB = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      NB = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      RB = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      WB = 5,
      AB = 4294967295;

    function VB(BB) {
      const OB = {
        off: 0,
        lit: lB.CellLight,
        all: lB.CellLight | lB.CellLightUnlit
      } [BB.cellLight];
      return (BB.showFog ? lB.ShowFog : 0) | (BB.lighting ? lB.Lighting : 0) | (BB.chunkFade ? lB.ChunkFade : 0) | OB
    }
    const SB = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      nB = {
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
      UB = {
        Release: 1,
        KeepTouches: 2
      },
      fB = {
        Point: 1,
        Stamped: 2
      },
      kB = {
        Add: 1,
        Clear: 2
      },
      dB = 1,
      KB = 8,
      uB = 16777215,
      mB = 4,
      IB = {
        Resume: 1
      },
      FB = {
        Held: 1
      };

    function iB(BB, OB) {
      return (BB | OB << 8) >>> 0
    }

    function LB(BB) {
      return 255 & BB
    }

    function gB(BB) {
      return BB >>> 8
    }

    function rB(BB) {
      return BB + 3 & -4
    }
    const XB = 16777216,
      wB = 20;
    const EB = 8,
      cB = 8,
      hB = 16777216,
      aB = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      eB = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      TB = 16,
      bB = {
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

    function HB(BB) {
      return BB === CB.WorldgenSeed || BB === CB.Generate
    }
    const vB = 4,
      sB = 99,
      xB = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      tB = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      BO = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17,
        LINKS_IN_FLIGHT_SHIFT: 18,
        LINKS_IN_FLIGHT_MAX: 15,
        OLDEST_LINK_SHIFT: 22,
        OLDEST_LINK_MAX: 1023,
        OLDEST_LINK_UNIT_MS: 100
      },
      OO = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      GO = 12,
      YO = 16,
      DO = 4,
      QO = 12,
      oO = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      jO = 4,
      yO = 8,
      JO = 8,
      MO = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      PO = {
        Crit: 1,
        HitSelf: 2
      },
      zO = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      lO = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      pO = 12,
      qO = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      ZO = 67108864;

    function NO(BB) {
      for (const [OB, GB] of Object.entries(YB.p))
        if (GB === BB) return OB;
      return `Unknown${BB}`
    }

    function RO(BB) {
      return {
        status: BB[YB.O.Status],
        lastError: BB[YB.O.LastError],
        lastErrorDetail: BB[YB.O.LastErrorDetail],
        errorCount: BB[YB.O.ErrorCount],
        frameIndex: BB[YB.O.FrameIndex],
        tickIndex: BB[YB.O.TickIndex],
        renderPending: BB[YB.O.RenderPending],
        firstView: BB[YB.O.FirstView],
        chunksCancelled: BB[YB.O.ChunksCancelled]
      }
    }
  },
  5276: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      g: () => QB,
      k: () => DB
    });
    var YB = GB(5281);

    function DB(BB) {
      return "none" !== BB
    }

    function QB(BB, OB) {
      if (!BB) return "none";
      switch (OB) {
        case YB.$.Drawn:
          return "drawn";
        case YB.$.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function oB(BB) {
      return "drawn" === BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);