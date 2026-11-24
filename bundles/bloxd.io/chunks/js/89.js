export const id = 89;
export const ids = [89];
export const modules = {
  4741: (mm, Tm, fm) => {
    fm.d(Tm, {
      $: () => Qm,
      $b: () => Zm,
      A: () => nm,
      Ab: () => Pm,
      E: () => xm,
      Eb: () => Cm,
      Fb: () => Hm,
      G: () => wm,
      Hb: () => qm,
      K: () => hm,
      L: () => am,
      Lb: () => bm,
      M: () => Km,
      N: () => Fm,
      Ob: () => km,
      Pb: () => ym,
      Q: () => pm,
      Qb: () => Bm,
      Tb: () => rm,
      U: () => Em,
      Xb: () => lm,
      Y: () => Rm,
      Zb: () => Mm,
      _: () => im,
      _b: () => zm,
      b: () => Vm,
      bb: () => Dm,
      bc: () => tm,
      cb: () => Ym,
      dc: () => Am,
      e: () => jm,
      gb: () => Om,
      gc: () => Wm,
      hb: () => Sm,
      i: () => gm,
      lb: () => Nm,
      m: () => Im,
      mb: () => Gm,
      p: () => dm,
      pb: () => em,
      q: () => om,
      qb: () => Xm,
      t: () => cm,
      tb: () => Lm,
      ub: () => um,
      w: () => Um,
      xb: () => sm,
      y: () => Jm
    });
    const hm = 32,
      Am = 33.333333333333336,
      am = {
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
      xm = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      wm = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Dm = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      im = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Rm = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      pm = 8,
      Em = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6,
        ViewQueuedPrograms: 7
      },
      om = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      Om = 8,
      Ym = 1,
      qm = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      jm = 6,
      Vm = 1,
      Im = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      Km = {
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
      Qm = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      nm = {
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
      Jm = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      cm = 4,
      zm = 4,
      Zm = 65535,
      km = {
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
      bm = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Sm = 88,
      em = 0,
      Nm = 24,
      Gm = 48,
      Xm = 80,
      Pm = {
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
      Hm = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      ym = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Cm = {
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
      rm = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      sm = 65535,
      lm = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Mm = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      um = 2,
      Bm = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Lm = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      tm = {
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
      Um = {
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
      dm = {
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
      gm = 8,
      Wm = {
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
      Fm = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4732: (mm, Tm, fm) => {
    fm.d(Tm, {
      Ab: () => fT,
      B: () => Sm,
      Bd: () => am,
      Cc: () => hm.xb,
      Db: () => Wm,
      Dd: () => jm,
      Eb: () => hm.Q,
      F: () => xm,
      Fc: () => jT,
      Gb: () => hT,
      Hd: () => pT,
      I: () => Gm,
      Jb: () => aT,
      Jc: () => oT,
      Kc: () => wT,
      L: () => qT,
      Lc: () => hm.Ab,
      Ld: () => sm,
      Mb: () => hm.U,
      Nd: () => Mm,
      O: () => Fm,
      Pb: () => Am.h,
      Pc: () => hm.Eb,
      Q: () => hm.p,
      Rd: () => rm,
      S: () => im,
      Sd: () => Lm,
      T: () => hm.q,
      Tb: () => zm,
      Tc: () => hm.Fb,
      Ub: () => Cm,
      V: () => TT,
      Vb: () => em,
      W: () => hm.t,
      Wc: () => mT,
      X: () => gm,
      Xb: () => bm,
      Yd: () => um,
      Z: () => hm.A,
      _b: () => hm.$,
      _c: () => hm.Lb,
      _d: () => Um,
      ab: () => hm.E,
      ac: () => Nm,
      ae: () => tm,
      bb: () => hm.G,
      bd: () => hm.Ob,
      be: () => RT,
      c: () => AT,
      cc: () => nm,
      db: () => pm,
      e: () => qm,
      ec: () => iT,
      ee: () => VT,
      fc: () => Km,
      fd: () => hm.Pb,
      fe: () => Qm,
      gc: () => OT,
      gd: () => hm.Tb,
      ge: () => dm,
      h: () => Ym,
      hb: () => Im,
      hd: () => hm.Xb,
      ib: () => hm.K,
      ic: () => Am.k,
      ie: () => Hm,
      jc: () => Vm,
      l: () => ET,
      lb: () => hm.L,
      lc: () => xT,
      ld: () => hm.Zb,
      le: () => Pm,
      me: () => Xm,
      o: () => Zm,
      ob: () => lm,
      od: () => Em,
      pc: () => hm.hb,
      qc: () => hm.lb,
      qd: () => km,
      qe: () => Dm,
      rb: () => DT,
      s: () => cm,
      sd: () => hm._b,
      tc: () => hm.mb,
      te: () => ym,
      v: () => hm.i,
      vb: () => Rm,
      vc: () => hm.pb,
      ve: () => IT,
      wb: () => hm.M,
      wd: () => hm.$b,
      xb: () => Bm,
      xe: () => Om,
      z: () => YT,
      zc: () => hm.qb,
      zd: () => hm.dc
    });
    var hm = fm(4741),
      Am = fm(2364);
    const am = Math.round(1e3 / hm.dc),
      xm = 4,
      wm = 2;

    function Dm() {
      return crypto.getRandomValues(new Uint32Array(wm))
    }
    const im = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Rm = 16,
      pm = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      Em = 3,
      om = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function Om(mm) {
      return (mm.nametagsHidden ? Jm.NametagsHidden : 0) | (mm.crouchToggle ? Jm.CrouchToggle : 0) | (mm.bhopDisabled ? Jm.BhopDisabled : 0) | (mm.disableBobbing ? Jm.DisableBobbing : 0) | (mm.ezTowering ? Jm.EzTowering : 0) | (mm.ezBridging ? Jm.EzBridging : 0) | (mm.showChunkBorders ? Jm.ShowChunkBorders : 0)
    }
    const Ym = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      qm = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      jm = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Vm = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Im = 5,
      Km = 4294967295;

    function Qm(mm) {
      const Tm = {
        off: 0,
        lit: om.CellLight,
        all: om.CellLight | om.CellLightUnlit
      } [mm.cellLight];
      return (mm.showFog ? om.ShowFog : 0) | (mm.lighting ? om.Lighting : 0) | (mm.chunkFade ? om.ChunkFade : 0) | Tm
    }
    const nm = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Jm = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      cm = {
        Release: 1,
        KeepTouches: 2
      },
      zm = {
        Point: 1,
        Stamped: 2
      },
      Zm = {
        Add: 1,
        Clear: 2
      },
      km = 1,
      bm = 8,
      Sm = 16777215,
      em = 4,
      Nm = {
        Resume: 1
      },
      Gm = {
        Held: 1
      };

    function Xm(mm, Tm) {
      return (mm | Tm << 8) >>> 0
    }

    function Pm(mm) {
      return 255 & mm
    }

    function Hm(mm) {
      return mm >>> 8
    }

    function ym(mm) {
      return mm + 3 & -4
    }
    const Cm = 16777216,
      rm = 20;
    const sm = 8,
      lm = 8,
      Mm = 16777216,
      um = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Bm = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Lm = 16,
      tm = {
        Lost: 0,
        Gone: 1
      },
      Um = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function dm(mm) {
      return mm === Um.WorldgenSeed || mm === Um.Generate
    }
    const gm = 4,
      Wm = 99,
      Fm = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      mT = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      TT = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      fT = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      hT = 12,
      AT = 16,
      aT = 4,
      xT = 12,
      wT = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      DT = 4,
      iT = 8,
      RT = 8,
      pT = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      ET = {
        Crit: 1,
        HitSelf: 2
      },
      oT = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      OT = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      YT = 12,
      qT = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      jT = 67108864;

    function VT(mm) {
      for (const [Tm, fm] of Object.entries(hm.p))
        if (fm === mm) return Tm;
      return `Unknown${mm}`
    }

    function IT(mm) {
      return {
        status: mm[hm.L.Status],
        lastError: mm[hm.L.LastError],
        lastErrorDetail: mm[hm.L.LastErrorDetail],
        errorCount: mm[hm.L.ErrorCount],
        frameIndex: mm[hm.L.FrameIndex],
        tickIndex: mm[hm.L.TickIndex],
        renderPending: mm[hm.L.RenderPending],
        firstView: mm[hm.L.FirstView],
        chunksCancelled: mm[hm.L.ChunksCancelled]
      }
    }
  },
  4729: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      e: () => am,
      f: () => Am
    });
    var hm = fm(4732);

    function Am(mm) {
      return "none" !== mm
    }

    function am(mm, Tm) {
      if (!mm) return "none";
      switch (Tm) {
        case hm.bb.Drawn:
          return "drawn";
        case hm.bb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function xm(mm) {
      return "drawn" === mm
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);