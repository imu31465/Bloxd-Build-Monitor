export const id = 103;
export const ids = [103, 104];
export const modules = {
  5279: (ee, ie, He) => {
    He.d(ie, {
      $b: () => te,
      A: () => Ue,
      Ab: () => pe,
      Bb: () => De,
      C: () => ye,
      Eb: () => we,
      F: () => Me,
      Ib: () => Le,
      J: () => Ee,
      Mb: () => ne,
      N: () => re,
      O: () => Re,
      Pb: () => ve,
      S: () => ke,
      T: () => oe,
      Tb: () => me,
      U: () => Je,
      W: () => ge,
      Xb: () => le,
      Y: () => Fe,
      ab: () => Te,
      cb: () => fe,
      d: () => ze,
      dc: () => Ze,
      ec: () => se,
      f: () => Xe,
      gb: () => Pe,
      gc: () => be,
      i: () => Ne,
      ib: () => Ye,
      ic: () => Ge,
      l: () => Be,
      lb: () => Ve,
      mb: () => Ae,
      o: () => he,
      ob: () => ae,
      p: () => qe,
      pb: () => je,
      r: () => We,
      s: () => Ie,
      sb: () => Se,
      t: () => de,
      tb: () => ue,
      ub: () => ce,
      vb: () => Ce,
      x: () => Oe,
      z: () => Ke,
      zb: () => xe
    });
    const ye = 32,
      be = 33.333333333333336,
      Me = {
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
      Ke = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Ue = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Fe = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      Je = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      oe = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      Re = 14,
      ke = {
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
      qe = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      fe = 8,
      Te = 1,
      pe = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Xe = 6,
      ze = 1,
      Be = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      Ee = {
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
      ge = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Oe = {
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
      de = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      We = 4,
      te = 4,
      Ze = 65535,
      we = {
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
      De = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Pe = 88,
      Ae = 0,
      Ye = 24,
      Ve = 48,
      ae = 80,
      ce = {
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
      xe = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Le = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Ce = {
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
      ve = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      ue = 65535,
      me = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      le = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Se = 2,
      ne = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      je = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      se = {
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
      Ie = {
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
      he = {
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
      Ne = 8,
      Ge = {
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
      re = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5271: (ee, ie, He) => {
    He.d(ie, {
      $c: () => ke,
      A: () => re,
      Ac: () => Xi,
      Bb: () => bi,
      Bd: () => ve,
      Cb: () => ye.S,
      Cc: () => ki,
      E: () => ye.o,
      Ec: () => Ki,
      Ed: () => je,
      F: () => Je,
      Fb: () => be.e,
      Fc: () => ye.ub,
      H: () => ye.p,
      Hb: () => te,
      Jc: () => ye.vb,
      Kb: () => Ce,
      L: () => ei,
      Ld: () => Se,
      Nc: () => ye.zb,
      Ob: () => Ae,
      Od: () => Ie,
      P: () => ye.r,
      Pc: () => Qe,
      Qc: () => ye.Bb,
      Rb: () => De,
      Rc: () => ye.Eb,
      S: () => Ne,
      Sc: () => ye.Ib,
      Sd: () => se,
      Td: () => Ji,
      U: () => ye.x,
      Ub: () => ye.W,
      Uc: () => ye.Pb,
      V: () => ye.z,
      Wc: () => ye.Tb,
      Xb: () => Ye,
      Xd: () => zi,
      Yb: () => Oe,
      Yc: () => ye.Xb,
      Yd: () => ge,
      Z: () => ye.A,
      _: () => Re,
      _b: () => Fi,
      _d: () => he,
      ac: () => Ee,
      ad: () => we,
      b: () => yi,
      bb: () => Be,
      bd: () => ye.$b,
      ce: () => xe,
      dc: () => qi,
      e: () => pe,
      eb: () => ye.C,
      ee: () => ce,
      fd: () => ye.dc,
      g: () => Te,
      gc: () => be.h,
      h: () => Ri,
      ib: () => ye.F,
      id: () => ye.gc,
      ie: () => ae,
      k: () => Ze,
      kc: () => ze,
      ke: () => Fe,
      l: () => We,
      lb: () => me,
      le: () => Le,
      m: () => ye.i,
      mc: () => Mi,
      md: () => Me,
      nb: () => Ui,
      nc: () => ye.gb,
      o: () => fi,
      oe: () => Bi,
      pb: () => oe,
      pc: () => ye.ib,
      qb: () => ye.J,
      qd: () => Xe,
      r: () => Pe,
      s: () => Ke,
      sb: () => ne,
      sc: () => ye.lb,
      sd: () => oi,
      se: () => fe,
      ub: () => ii,
      v: () => Ve,
      vb: () => Ge,
      vc: () => ye.mb,
      vd: () => ue,
      x: () => Ti,
      xb: () => ye.O,
      yc: () => ye.ob,
      zb: () => Hi,
      zc: () => ye.tb,
      zd: () => le
    });
    var ye = He(5279),
      be = He(2492);
    const Me = Math.round(1e3 / ye.gc),
      Ke = 4,
      Ue = 2;

    function Fe() {
      return crypto.getRandomValues(new Uint32Array(Ue))
    }
    const Je = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      oe = 16,
      Re = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      ke = 3,
      qe = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function fe(ee) {
      return (ee.nametagsHidden ? de.NametagsHidden : 0) | (ee.crouchToggle ? de.CrouchToggle : 0) | (ee.bhopDisabled ? de.BhopDisabled : 0) | (ee.disableBobbing ? de.DisableBobbing : 0) | (null !== ee.ezTowering ? de.EzTowering : 0) | ("jump" === ee.ezTowering ? de.EzTowerJump : 0) | (ee.ezBridging ? de.EzBridging : 0) | (ee.showChunkBorders ? de.ShowChunkBorders : 0) | (ee.touchWalk ? de.TouchWalk : 0) | (ee.edgeGuard ? de.EdgeGuard : 0) | (ee.edgeGuardLong ? de.EdgeGuardLong : 0)
    }
    const Te = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      pe = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Xe = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      ze = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Be = 5,
      Ee = 4294967295;

    function ge(ee) {
      const ie = {
        off: 0,
        lit: qe.CellLight,
        all: qe.CellLight | qe.CellLightUnlit
      } [ee.cellLight];
      return (ee.showFog ? qe.ShowFog : 0) | (ee.lighting ? qe.Lighting : 0) | (ee.chunkFade ? qe.ChunkFade : 0) | ie
    }
    const Oe = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      de = {
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
      We = {
        Release: 1,
        KeepTouches: 2
      },
      te = {
        Point: 1,
        Stamped: 2
      },
      Ze = {
        Add: 1,
        Clear: 2
      },
      we = 1,
      De = 8,
      Pe = 16777215,
      Ae = 4,
      Ye = {
        Resume: 1
      },
      Ve = {
        Held: 1
      };

    function ae(ee, ie) {
      return (ee | ie << 8) >>> 0
    }

    function ce(ee) {
      return 255 & ee
    }

    function xe(ee) {
      return ee >>> 8
    }

    function Le(ee) {
      return ee + 3 & -4
    }
    const Ce = 16777216,
      ve = 20;
    const ue = 8,
      me = 8,
      le = 16777216,
      Se = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      ne = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      je = 16,
      se = {
        Lost: 0,
        Gone: 1
      },
      Ie = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function he(ee) {
      return ee === Ie.WorldgenSeed || ee === Ie.Generate
    }
    const Ne = 4,
      Ge = 99,
      re = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Qe = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      ei = {
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
      Hi = 12,
      yi = 16,
      bi = 4,
      Mi = 12,
      Ki = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Ui = 4,
      Fi = 8,
      Ji = 8,
      oi = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Ri = {
        Crit: 1,
        HitSelf: 2
      },
      ki = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      qi = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      fi = 12,
      Ti = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Xi = 67108864;

    function zi(ee) {
      for (const [ie, He] of Object.entries(ye.o))
        if (He === ee) return ie;
      return `Unknown${ee}`
    }

    function Bi(ee) {
      return {
        status: ee[ye.F.Status],
        lastError: ee[ye.F.LastError],
        lastErrorDetail: ee[ye.F.LastErrorDetail],
        errorCount: ee[ye.F.ErrorCount],
        frameIndex: ee[ye.F.FrameIndex],
        tickIndex: ee[ye.F.TickIndex],
        renderPending: ee[ye.F.RenderPending],
        firstView: ee[ye.F.FirstView],
        chunksCancelled: ee[ye.F.ChunksCancelled]
      }
    }
  },
  5265: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      d: () => Me,
      h: () => be
    });
    var ye = He(5271);

    function be(ee) {
      return "none" !== ee
    }

    function Me(ee, ie) {
      if (!ee) return "none";
      switch (ie) {
        case ye.Z.Drawn:
          return "drawn";
        case ye.Z.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Ke(ee) {
      return "drawn" === ee
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);