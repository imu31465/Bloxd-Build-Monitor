export const id = 105;
export const ids = [105, 106];
export const modules = {
  5685: (bb, wb, Mb) => {
    Mb.d(wb, {
      $: () => Lb,
      $b: () => Gb,
      A: () => Vb,
      Cb: () => Qb,
      E: () => gb,
      Eb: () => Wb,
      Fb: () => Nb,
      H: () => eb,
      Jb: () => Jb,
      L: () => pb,
      Lb: () => Fb,
      O: () => hb,
      Ob: () => Db,
      Q: () => Tb,
      Rb: () => Rb,
      Sb: () => Sb,
      U: () => Ob,
      W: () => Ub,
      Wb: () => ib,
      X: () => Ib,
      Yb: () => vb,
      b: () => sb,
      cc: () => qb,
      db: () => zb,
      dc: () => Kb,
      f: () => Bb,
      fc: () => rb,
      hb: () => lb,
      i: () => yb,
      jb: () => Eb,
      jc: () => db,
      m: () => mb,
      mb: () => Cb,
      mc: () => Hb,
      nc: () => ob,
      p: () => nb,
      pb: () => cb,
      q: () => tb,
      qb: () => Zb,
      t: () => jb,
      tb: () => fb,
      ub: () => Yb,
      vb: () => Ab,
      wb: () => ub,
      x: () => Pb,
      y: () => xb,
      yb: () => ab,
      z: () => Xb
    });
    const eb = 32,
      Hb = 33.333333333333336,
      pb = {
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
      Vb = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      gb = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      lb = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      Lb = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Ib = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      Ob = 14,
      Ub = {
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
      tb = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      Cb = 8,
      Eb = 1,
      Fb = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Bb = 6,
      sb = 1,
      mb = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      hb = {
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
      zb = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Xb = {
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
      xb = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      jb = 4,
      Kb = 4,
      rb = 65535,
      Rb = {
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
      Db = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      cb = 88,
      Yb = 0,
      Zb = 24,
      fb = 48,
      Ab = 80,
      Wb = {
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
      Jb = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Sb = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Nb = {
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
      vb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Qb = 65535,
      Gb = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      qb = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      ab = 2,
      ib = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      ub = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      db = {
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
      Pb = {
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
      nb = {
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
      yb = 8,
      ob = {
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
      Tb = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5678: (bb, wb, Mb) => {
    Mb.d(wb, {
      Ac: () => eb.vb,
      B: () => Ew,
      Bd: () => pb,
      Be: () => Sb,
      Cb: () => eb.U,
      Cc: () => eb.Cb,
      Cd: () => Bb,
      Ce: () => sw,
      Db: () => Mw,
      E: () => Tb,
      Fb: () => Hw,
      Fd: () => Iw,
      Gb: () => eb.W,
      Gc: () => Fw,
      Ge: () => Cb,
      Hc: () => Uw,
      I: () => eb.p,
      Ib: () => Hb.e,
      Id: () => Qb,
      Jd: () => qb,
      L: () => Lb,
      Lb: () => Kb,
      Lc: () => Vw,
      Ld: () => vb,
      M: () => eb.q,
      Nb: () => Nb,
      Nc: () => eb.Eb,
      Od: () => ub,
      Q: () => bw,
      Rb: () => Yb,
      Rc: () => eb.Fb,
      Tc: () => eb.Jb,
      Td: () => ab,
      U: () => eb.t,
      Ub: () => Db,
      V: () => yb,
      Vc: () => kb,
      W: () => eb.z,
      Wb: () => eb.db,
      Wd: () => Pb,
      X: () => eb.A,
      Zb: () => Zb,
      Zc: () => eb.Ob,
      _: () => eb.E,
      _d: () => db,
      ab: () => Ob,
      ad: () => eb.Rb,
      bc: () => Xb,
      cd: () => eb.Sb,
      ce: () => Lw,
      e: () => ew,
      eb: () => mb,
      fc: () => lw,
      gc: () => hb,
      gd: () => eb.Yb,
      ge: () => Bw,
      h: () => Fb,
      hc: () => tw,
      i: () => Eb,
      ib: () => eb.H,
      ie: () => zb,
      jd: () => eb.$b,
      je: () => nb,
      k: () => Ow,
      kb: () => eb.L,
      kc: () => Hb.k,
      lc: () => sb,
      mb: () => Gb,
      mc: () => pw,
      md: () => eb.cc,
      nb: () => gw,
      nd: () => Ub,
      ne: () => Jb,
      o: () => rb,
      oc: () => eb.pb,
      od: () => Rb,
      p: () => jb,
      pb: () => Ib,
      qb: () => eb.O,
      qe: () => Wb,
      r: () => eb.i,
      rc: () => eb.qb,
      sd: () => eb.dc,
      tc: () => eb.tb,
      te: () => Ab,
      u: () => Cw,
      ub: () => ib,
      vd: () => eb.fc,
      w: () => cb,
      wb: () => ww,
      wc: () => eb.ub,
      x: () => Vb,
      xd: () => eb.mc,
      xe: () => lb,
      y: () => fb,
      zb: () => ob
    });
    var eb = Mb(5685),
      Hb = Mb(3470);
    const pb = Math.round(1e3 / eb.mc),
      Vb = 4,
      gb = 2;

    function lb() {
      return crypto.getRandomValues(new Uint32Array(gb))
    }
    const Lb = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Ib = 16,
      Ob = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      Ub = 3,
      tb = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function Cb(bb) {
      return (bb.nametagsHidden ? xb.NametagsHidden : 0) | (bb.crouchToggle ? xb.CrouchToggle : 0) | (bb.bhopDisabled ? xb.BhopDisabled : 0) | (bb.disableBobbing ? xb.DisableBobbing : 0) | (null !== bb.ezTowering ? xb.EzTowering : 0) | ("jump" === bb.ezTowering ? xb.EzTowerJump : 0) | (bb.ezBridging ? xb.EzBridging : 0) | (bb.showChunkBorders ? xb.ShowChunkBorders : 0) | (bb.touchWalk ? xb.TouchWalk : 0) | (bb.edgeGuard ? xb.EdgeGuard : 0) | (bb.edgeGuardLong ? xb.EdgeGuardLong : 0)
    }
    const Eb = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Fb = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Bb = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      sb = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      mb = 5,
      hb = 4294967295;

    function zb(bb) {
      const wb = {
        off: 0,
        lit: tb.CellLight,
        all: tb.CellLight | tb.CellLightUnlit
      } [bb.cellLight];
      return (bb.showFog ? tb.ShowFog : 0) | (bb.lighting ? tb.Lighting : 0) | (bb.chunkFade ? tb.ChunkFade : 0) | wb
    }
    const Xb = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      xb = {
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
      jb = {
        Release: 1,
        KeepTouches: 2
      },
      Kb = {
        Point: 1,
        Stamped: 2
      },
      rb = {
        Add: 1,
        Clear: 2
      },
      Rb = 1,
      Db = 8,
      cb = 16777215,
      Yb = 4,
      Zb = {
        Resume: 1
      },
      fb = {
        Held: 1
      };

    function Ab(bb, wb) {
      return (bb | wb << 8) >>> 0
    }

    function Wb(bb) {
      return 255 & bb
    }

    function Jb(bb) {
      return bb >>> 8
    }

    function Sb(bb) {
      return bb + 3 & -4
    }
    const Nb = 16777216,
      vb = 20;
    const Qb = 8,
      Gb = 8,
      qb = 16777216,
      ab = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      ib = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      ub = 16,
      db = {
        Lost: 0,
        Gone: 1
      },
      Pb = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function nb(bb) {
      return bb === Pb.WorldgenSeed || bb === Pb.Generate
    }
    const yb = 4,
      ob = 99,
      Tb = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      kb = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      bw = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17,
        LINKS_IN_FLIGHT_SHIFT: 18,
        LINKS_IN_FLIGHT_MAX: 15,
        OLDEST_LINK_SHIFT: 22,
        OLDEST_LINK_MAX: 1023,
        OLDEST_LINK_UNIT_MS: 100
      },
      ww = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      Mw = 12,
      ew = 16,
      Hw = 4,
      pw = 12,
      Vw = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      gw = 4,
      lw = 8,
      Lw = 8,
      Iw = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Ow = {
        Crit: 1,
        HitSelf: 2
      },
      Uw = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      tw = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Cw = 12,
      Ew = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Fw = 67108864;

    function Bw(bb) {
      for (const [wb, Mb] of Object.entries(eb.p))
        if (Mb === bb) return wb;
      return `Unknown${bb}`
    }

    function sw(bb) {
      return {
        status: bb[eb.L.Status],
        lastError: bb[eb.L.LastError],
        lastErrorDetail: bb[eb.L.LastErrorDetail],
        errorCount: bb[eb.L.ErrorCount],
        frameIndex: bb[eb.L.FrameIndex],
        tickIndex: bb[eb.L.TickIndex],
        renderPending: bb[eb.L.RenderPending],
        firstView: bb[eb.L.FirstView],
        chunksCancelled: bb[eb.L.ChunksCancelled]
      }
    }
  },
  5675: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      e: () => pb,
      g: () => Hb
    });
    var eb = Mb(5678);

    function Hb(bb) {
      return "none" !== bb
    }

    function pb(bb, wb) {
      if (!bb) return "none";
      switch (wb) {
        case eb._.Drawn:
          return "drawn";
        case eb._.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Vb(bb) {
      return "drawn" === bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);