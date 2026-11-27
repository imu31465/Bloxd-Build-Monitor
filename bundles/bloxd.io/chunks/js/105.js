export const id = 105;
export const ids = [105, 106];
export const modules = {
  5617: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      $b: () => ir,
      Ab: () => wr,
      D: () => yr,
      Db: () => Ar,
      F: () => jr,
      Gb: () => gr,
      I: () => Ir,
      Jb: () => Gr,
      K: () => Zr,
      Kb: () => Cr,
      L: () => ar,
      M: () => er,
      N: () => sr,
      Nb: () => hr,
      O: () => xr,
      P: () => mr,
      Qb: () => lr,
      T: () => pr,
      Tb: () => Lr,
      V: () => Er,
      Vb: () => Mr,
      Wb: () => cr,
      X: () => Kr,
      Xb: () => kr,
      _: () => fr,
      _b: () => Vr,
      cb: () => tr,
      dc: () => vr,
      e: () => Yr,
      gb: () => Ur,
      hc: () => Or,
      i: () => zr,
      j: () => Dr,
      k: () => nr,
      kb: () => Xr,
      kc: () => or,
      mc: () => Wr,
      nb: () => Hr,
      o: () => Jr,
      pc: () => dr,
      qb: () => qr,
      r: () => Nr,
      sb: () => Pr,
      t: () => Tr,
      ub: () => Rr,
      x: () => br,
      xb: () => Fr,
      z: () => Br
    });
    const Zr = 32,
      Wr = 33.333333333333336,
      ar = {
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
      jr = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Ir = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      fr = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      Er = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      pr = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      xr = 14,
      mr = {
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
      Nr = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      Ur = 8,
      tr = 1,
      hr = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      zr = 6,
      Yr = 1,
      nr = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      er = {
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
      Kr = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      yr = {
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
      Br = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Tr = 4,
      vr = 4,
      Or = 65535,
      Lr = {
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
      lr = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Xr = 88,
      Pr = 0,
      Hr = 24,
      qr = 48,
      Rr = 80,
      gr = {
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
      Cr = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Mr = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Gr = {
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
      kr = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Ar = 65535,
      Vr = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      ir = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      wr = 2,
      cr = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Fr = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      or = {
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
      br = {
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
      Jr = {
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
      Dr = 8,
      dr = {
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
      sr = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5610: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      $: () => Zr.D,
      Ab: () => cr,
      Ad: () => mr,
      Ae: () => Jr,
      B: () => Xr,
      Bb: () => SS,
      Be: () => Cr,
      C: () => jr,
      Cb: () => dr,
      Cc: () => Zr.nb,
      Dd: () => Lr,
      Ee: () => gr,
      F: () => qr,
      Fb: () => Zr.O,
      Fc: () => Zr.qb,
      G: () => tS,
      Gb: () => QS,
      Ge: () => Rr,
      H: () => sr,
      Hc: () => Zr.sb,
      Hd: () => Zr.dc,
      He: () => fr,
      J: () => Zr.o,
      Kb: () => WS,
      Kc: () => Zr.ub,
      Kd: () => Zr.hc,
      Ke: () => Mr,
      L: () => Er,
      Ld: () => Zr.mc,
      Mc: () => Zr.Db,
      Me: () => YS,
      O: () => Zr.r,
      Ob: () => Zr.P,
      Pc: () => hS,
      Pd: () => ar,
      Qb: () => Wr.f,
      Qd: () => zr,
      Qe: () => Ur,
      S: () => rS,
      Sc: () => mS,
      Sd: () => pS,
      U: () => Zr.t,
      Ub: () => vr,
      Vd: () => Ar,
      Wc: () => jS,
      Y: () => Dr,
      Yb: () => Gr,
      Zc: () => Zr.Gb,
      Zd: () => ir,
      _c: () => Zr.Jb,
      ac: () => Pr,
      bb: () => Zr.F,
      bd: () => Zr.Kb,
      be: () => kr,
      cc: () => lr,
      dc: () => Zr.X,
      e: () => ZS,
      eb: () => Zr.I,
      fc: () => Hr,
      fd: () => ur,
      fe: () => Fr,
      g: () => hr,
      gb: () => xr,
      j: () => tr,
      jb: () => nr,
      jc: () => yr,
      jd: () => Zr.Qb,
      kd: () => Zr.Tb,
      ke: () => wr,
      lb: () => Zr.K,
      lc: () => fS,
      m: () => xS,
      mb: () => Zr.L,
      mc: () => er,
      me: () => br,
      nc: () => NS,
      o: () => Or,
      od: () => Zr.Vb,
      oe: () => or,
      qb: () => Vr,
      rb: () => IS,
      rc: () => Wr.k,
      rd: () => Zr.Xb,
      s: () => Tr,
      se: () => ES,
      t: () => Zr.j,
      tb: () => pr,
      te: () => zS,
      uc: () => Yr,
      vd: () => Zr._b,
      x: () => US,
      xb: () => Zr.M,
      xc: () => aS,
      xe: () => Kr,
      yd: () => Zr.$b,
      zc: () => Zr.kb
    });
    var Zr = Qr(5617),
      Wr = Qr(3372);
    const ar = Math.round(1e3 / Zr.mc),
      jr = 4,
      Ir = 2;

    function fr() {
      return crypto.getRandomValues(new Uint32Array(Ir))
    }
    const Er = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      pr = 16,
      xr = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      mr = 3,
      Nr = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function Ur(rr) {
      return (rr.nametagsHidden ? Br.NametagsHidden : 0) | (rr.crouchToggle ? Br.CrouchToggle : 0) | (rr.bhopDisabled ? Br.BhopDisabled : 0) | (rr.disableBobbing ? Br.DisableBobbing : 0) | (null !== rr.ezTowering ? Br.EzTowering : 0) | ("jump" === rr.ezTowering ? Br.EzTowerJump : 0) | (rr.ezBridging ? Br.EzBridging : 0) | (rr.showChunkBorders ? Br.ShowChunkBorders : 0) | (rr.touchWalk ? Br.TouchWalk : 0) | (rr.edgeGuard ? Br.EdgeGuard : 0) | (rr.edgeGuardLong ? Br.EdgeGuardLong : 0)
    }
    const tr = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      hr = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      zr = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Yr = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      nr = 5,
      er = 4294967295;

    function Kr(rr) {
      const Sr = {
        off: 0,
        lit: Nr.CellLight,
        all: Nr.CellLight | Nr.CellLightUnlit
      } [rr.cellLight];
      return (rr.showFog ? Nr.ShowFog : 0) | (rr.lighting ? Nr.Lighting : 0) | (rr.chunkFade ? Nr.ChunkFade : 0) | Sr
    }
    const yr = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Br = {
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
      Tr = {
        Release: 1,
        KeepTouches: 2
      },
      vr = {
        Point: 1,
        Stamped: 2
      },
      Or = {
        Add: 1,
        Clear: 2
      },
      Lr = 1,
      lr = 8,
      Xr = 16777215,
      Pr = 4,
      Hr = {
        Resume: 1
      },
      qr = {
        Held: 1
      };

    function Rr(rr, Sr) {
      return (rr | Sr << 8) >>> 0
    }

    function gr(rr) {
      return 255 & rr
    }

    function Cr(rr) {
      return rr >>> 8
    }

    function Mr(rr) {
      return rr + 3 & -4
    }
    const Gr = 16777216,
      kr = 20;
    const Ar = 8,
      Vr = 8,
      ir = 16777216,
      wr = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      cr = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Fr = 16,
      or = {
        Lost: 0,
        Gone: 1
      },
      br = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Jr(rr) {
      return rr === br.WorldgenSeed || rr === br.Generate
    }
    const Dr = 4,
      dr = 99,
      sr = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      ur = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      rS = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17,
        LINKS_IN_FLIGHT_SHIFT: 18,
        LINKS_IN_FLIGHT_MAX: 15,
        OLDEST_LINK_SHIFT: 22,
        OLDEST_LINK_MAX: 1023,
        OLDEST_LINK_UNIT_MS: 100
      },
      SS = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      QS = 12,
      ZS = 16,
      WS = 4,
      aS = 12,
      jS = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      IS = 4,
      fS = 8,
      ES = 8,
      pS = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      xS = {
        Crit: 1,
        HitSelf: 2
      },
      mS = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      NS = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      US = 12,
      tS = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      hS = 67108864;

    function zS(rr) {
      for (const [Sr, Qr] of Object.entries(Zr.o))
        if (Qr === rr) return Sr;
      return `Unknown${rr}`
    }

    function YS(rr) {
      return {
        status: rr[Zr.L.Status],
        lastError: rr[Zr.L.LastError],
        lastErrorDetail: rr[Zr.L.LastErrorDetail],
        errorCount: rr[Zr.L.ErrorCount],
        frameIndex: rr[Zr.L.FrameIndex],
        tickIndex: rr[Zr.L.TickIndex],
        renderPending: rr[Zr.L.RenderPending],
        firstView: rr[Zr.L.FirstView],
        chunksCancelled: rr[Zr.L.ChunksCancelled]
      }
    }
  },
  5604: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      e: () => ar,
      i: () => Wr
    });
    var Zr = Qr(5610);

    function Wr(rr) {
      return "none" !== rr
    }

    function ar(rr, Sr) {
      if (!rr) return "none";
      switch (Sr) {
        case Zr.eb.Drawn:
          return "drawn";
        case Zr.eb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function jr(rr) {
      return "drawn" === rr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);