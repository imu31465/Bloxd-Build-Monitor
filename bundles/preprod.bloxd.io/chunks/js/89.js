export const id = 89;
export const ids = [89];
export const modules = {
  4733: (CC, zC, ZC) => {
    ZC.d(zC, {
      $b: () => pC,
      A: () => LC,
      Bc: () => OC,
      C: () => IC,
      Db: () => HC,
      G: () => JC,
      Gb: () => dC,
      H: () => nC,
      I: () => fC,
      Jb: () => EC,
      Lb: () => jC,
      M: () => QC,
      O: () => bC,
      Ob: () => tC,
      Q: () => AC,
      Rb: () => sC,
      S: () => kC,
      Vb: () => lC,
      W: () => WC,
      Yb: () => uC,
      Z: () => NC,
      _b: () => XC,
      ab: () => FC,
      ac: () => KC,
      d: () => GC,
      eb: () => qC,
      ec: () => hC,
      fc: () => cC,
      gc: () => DC,
      h: () => PC,
      hc: () => rC,
      i: () => BC,
      ib: () => xC,
      jc: () => TC,
      kb: () => oC,
      m: () => RC,
      mc: () => aC,
      nb: () => SC,
      o: () => UC,
      qc: () => vC,
      rb: () => gC,
      s: () => MC,
      uc: () => eC,
      vb: () => YC,
      w: () => iC,
      xc: () => yC,
      yc: () => wC,
      zb: () => mC
    });
    const QC = 32,
      wC = 33.333333333333336,
      bC = {
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
      nC = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      fC = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      oC = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      qC = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      FC = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      WC = 8,
      NC = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6,
        ViewQueuedPrograms: 7
      },
      MC = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      gC = 8,
      SC = 1,
      pC = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      PC = 6,
      GC = 1,
      RC = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      AC = {
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
      xC = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      JC = {
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
      IC = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      iC = 4,
      vC = 4,
      eC = 65535,
      hC = {
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
      KC = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      YC = 88,
      dC = 0,
      mC = 24,
      HC = 48,
      EC = 80,
      lC = {
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
      XC = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      cC = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      uC = {
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
      rC = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      sC = 65535,
      TC = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      aC = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      tC = 2,
      DC = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      jC = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      yC = {
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
      LC = {
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
      UC = {
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
      BC = 8,
      OC = {
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
      kC = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4727: (CC, zC, ZC) => {
    ZC.d(zC, {
      $: () => BC,
      $d: () => Pz,
      Ac: () => QC.Gb,
      B: () => YC,
      Bb: () => zz,
      Bc: () => QC.Jb,
      C: () => nC,
      Cb: () => OC,
      Cd: () => Fz,
      Dd: () => sC,
      Eb: () => QC.W,
      Ec: () => QC.Rb,
      Fb: () => Zz,
      G: () => HC,
      Hb: () => wz,
      Hc: () => pz,
      Hd: () => aC,
      J: () => Sz,
      Jb: () => QC.Z,
      Jd: () => rC,
      Kc: () => Nz,
      Lb: () => wC.f,
      Lc: () => nz,
      M: () => kC,
      Mb: () => vC,
      Md: () => jC,
      N: () => QC.o,
      Oc: () => QC.Vb,
      Pd: () => tC,
      Qb: () => uC,
      R: () => qC,
      Rd: () => LC,
      Sc: () => QC.Yb,
      T: () => QC.s,
      Tb: () => dC,
      Tc: () => QC._b,
      Ud: () => yC,
      Vc: () => VC,
      W: () => Cz,
      Wb: () => KC,
      Wc: () => QC.ac,
      Xd: () => qz,
      Yb: () => QC.ib,
      _: () => QC.w,
      _c: () => QC.ec,
      ab: () => QC.G,
      ac: () => mC,
      ad: () => QC.fc,
      be: () => xC,
      d: () => Qz,
      db: () => QC.H,
      dc: () => JC,
      eb: () => QC.I,
      ec: () => oz,
      ed: () => QC.hc,
      fc: () => AC,
      fd: () => QC.jc,
      fe: () => UC,
      g: () => pC,
      ge: () => XC,
      hc: () => Mz,
      ib: () => WC,
      id: () => QC.mc,
      jc: () => wC.k,
      je: () => lC,
      k: () => SC,
      kb: () => RC,
      kd: () => NC,
      lb: () => QC.M,
      ld: () => hC,
      m: () => Wz,
      mc: () => GC,
      me: () => EC,
      ne: () => oC,
      o: () => eC,
      oc: () => bz,
      od: () => QC.qc,
      pb: () => QC.O,
      pe: () => cC,
      qb: () => TC,
      qd: () => QC.uc,
      r: () => iC,
      rb: () => fz,
      re: () => Gz,
      sb: () => FC,
      sc: () => QC.vb,
      td: () => QC.yc,
      v: () => QC.i,
      ve: () => gC,
      wb: () => QC.Q,
      wc: () => QC.zb,
      x: () => gz,
      xb: () => DC,
      xd: () => bC,
      yc: () => QC.Db,
      yd: () => PC
    });
    var QC = ZC(4733),
      wC = ZC(2348);
    const bC = Math.round(1e3 / QC.yc),
      nC = 4,
      fC = 2;

    function oC() {
      return crypto.getRandomValues(new Uint32Array(fC))
    }
    const qC = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      FC = 16,
      WC = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      NC = 3,
      MC = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function gC(CC) {
      return (CC.nametagsHidden ? IC.NametagsHidden : 0) | (CC.crouchToggle ? IC.CrouchToggle : 0) | (CC.bhopDisabled ? IC.BhopDisabled : 0) | (CC.disableBobbing ? IC.DisableBobbing : 0) | (CC.ezTowering ? IC.EzTowering : 0) | (CC.ezBridging ? IC.EzBridging : 0) | (CC.showChunkBorders ? IC.ShowChunkBorders : 0)
    }
    const SC = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      pC = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      PC = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      GC = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      RC = 5,
      AC = 4294967295;

    function xC(CC) {
      const zC = {
        off: 0,
        lit: MC.CellLight,
        all: MC.CellLight | MC.CellLightUnlit
      } [CC.cellLight];
      return (CC.showFog ? MC.ShowFog : 0) | (CC.lighting ? MC.Lighting : 0) | (CC.chunkFade ? MC.ChunkFade : 0) | zC
    }
    const JC = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      IC = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      iC = {
        Release: 1,
        KeepTouches: 2
      },
      vC = {
        Point: 1,
        Stamped: 2
      },
      eC = {
        Add: 1,
        Clear: 2
      },
      hC = 1,
      KC = 8,
      YC = 16777215,
      dC = 4,
      mC = {
        Resume: 1
      },
      HC = {
        Held: 1
      };

    function EC(CC, zC) {
      return (CC | zC << 8) >>> 0
    }

    function lC(CC) {
      return 255 & CC
    }

    function XC(CC) {
      return CC >>> 8
    }

    function cC(CC) {
      return CC + 3 & -4
    }
    const uC = 16777216,
      rC = 20;
    const sC = 8,
      TC = 8,
      aC = 16777216,
      tC = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      DC = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      jC = 16,
      yC = {
        Lost: 0,
        Gone: 1
      },
      LC = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function UC(CC) {
      return CC === LC.WorldgenSeed || CC === LC.Generate
    }
    const BC = 4,
      OC = 99,
      kC = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      VC = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      Cz = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      zz = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      Zz = 12,
      Qz = 16,
      wz = 4,
      bz = 12,
      nz = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      fz = 4,
      oz = 8,
      qz = 8,
      Fz = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Wz = {
        Crit: 1,
        HitSelf: 2
      },
      Nz = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Mz = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      gz = 12,
      Sz = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      pz = 67108864;

    function Pz(CC) {
      for (const [zC, ZC] of Object.entries(QC.o))
        if (ZC === CC) return zC;
      return `Unknown${CC}`
    }

    function Gz(CC) {
      return {
        status: CC[QC.O.Status],
        lastError: CC[QC.O.LastError],
        lastErrorDetail: CC[QC.O.LastErrorDetail],
        errorCount: CC[QC.O.ErrorCount],
        frameIndex: CC[QC.O.FrameIndex],
        tickIndex: CC[QC.O.TickIndex],
        renderPending: CC[QC.O.RenderPending],
        firstView: CC[QC.O.FirstView],
        chunksCancelled: CC[QC.O.ChunksCancelled]
      }
    }
  },
  4719: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC,
      f: () => bC,
      i: () => wC
    });
    var QC = ZC(4727);

    function wC(CC) {
      return "none" !== CC
    }

    function bC(CC, zC) {
      if (!CC) return "none";
      switch (zC) {
        case QC.eb.Drawn:
          return "drawn";
        case QC.eb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function nC(CC) {
      return "drawn" === CC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);