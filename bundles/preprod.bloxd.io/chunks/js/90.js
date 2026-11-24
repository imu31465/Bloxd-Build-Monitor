export const id = 90;
export const ids = [90];
export const modules = {
  4911: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Vp,
      Bb: () => Cp,
      C: () => Ap,
      Fb: () => Mp,
      G: () => Pp,
      Hb: () => Tp,
      I: () => Dp,
      Kb: () => gp,
      L: () => Yp,
      M: () => ep,
      Mb: () => bp,
      O: () => Lp,
      Ob: () => ap,
      Q: () => Up,
      Rb: () => np,
      S: () => yp,
      Sb: () => Rp,
      Tb: () => qp,
      Vb: () => rp,
      W: () => Ep,
      Wb: () => op,
      Zb: () => Kp,
      _: () => lp,
      cb: () => Qp,
      d: () => tp,
      e: () => vp,
      f: () => sp,
      gb: () => Xp,
      h: () => Hp,
      ib: () => Jp,
      k: () => zp,
      kb: () => Gp,
      lb: () => Fp,
      m: () => Wp,
      mb: () => hp,
      ob: () => Bp,
      p: () => mp,
      q: () => Zp,
      qb: () => fp,
      r: () => kp,
      s: () => jp,
      t: () => Sp,
      tb: () => Np,
      u: () => xp,
      w: () => Op,
      x: () => Ip,
      xb: () => wp,
      z: () => dp
    });
    const Op = 32,
      op = 33.333333333333336,
      Ip = {
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
      Sp = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      xp = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Lp = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      Yp = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Dp = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      Ap = 14,
      Pp = {
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
      Wp = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      yp = 8,
      Up = 1,
      wp = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      vp = 6,
      tp = 1,
      Hp = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      dp = {
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
      ep = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      jp = {
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
      kp = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      mp = 4,
      Rp = 4,
      qp = 65535,
      Mp = {
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
      Cp = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Ep = 88,
      Xp = 0,
      lp = 24,
      Qp = 48,
      Jp = 80,
      Bp = {
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
      Np = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Tp = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      fp = {
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
      bp = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      hp = 65535,
      ap = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      np = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Fp = 2,
      gp = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Gp = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      rp = {
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
      Zp = {
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
      zp = {
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
      sp = 8,
      Kp = {
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
      Vp = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4903: (pp, ip, cp) => {
    cp.d(ip, {
      $: () => sp,
      Ac: () => Op.gb,
      B: () => Sp,
      Bc: () => Op.ib,
      Bd: () => vp,
      Cd: () => Pi,
      D: () => Qp,
      Db: () => Oi,
      Dc: () => Op.mb,
      Fb: () => Kp,
      Gc: () => ti,
      Gd: () => hp,
      H: () => vi,
      Hb: () => Op.C,
      J: () => Vp,
      Jc: () => yi,
      Jd: () => np,
      Kb: () => oi,
      Lb: () => Si,
      M: () => Op.k,
      Mb: () => Op.G,
      Mc: () => Li,
      Nd: () => bp,
      P: () => Yp,
      Pb: () => op.g,
      Pc: () => Op.ob,
      Qb: () => Rp,
      Qd: () => Gp,
      Sc: () => Op.qb,
      T: () => Op.m,
      Td: () => Fp,
      U: () => ci,
      Ub: () => fp,
      Uc: () => Op.tb,
      Wd: () => Zp,
      Y: () => Op.p,
      Yb: () => Xp,
      Yc: () => ii,
      Yd: () => rp,
      Zb: () => Cp,
      Zc: () => Op.Bb,
      Zd: () => Ai,
      _b: () => Op.M,
      _c: () => Op.Fb,
      _d: () => Hi,
      ac: () => lp,
      ad: () => Op.Hb,
      bb: () => Op.s,
      cc: () => jp,
      ce: () => ep,
      dc: () => Di,
      dd: () => Op.Mb,
      e: () => Ii,
      ee: () => zp,
      fb: () => Op.t,
      gb: () => Op.u,
      gc: () => dp,
      gd: () => Op.Ob,
      hb: () => Ap,
      he: () => Np,
      i: () => wp,
      ib: () => Hp,
      ie: () => Bp,
      jd: () => Op.Rb,
      kc: () => Ui,
      lb: () => Op.w,
      m: () => Up,
      mc: () => op.m,
      me: () => Jp,
      nb: () => Op.x,
      nd: () => Pp,
      o: () => Wi,
      od: () => Mp,
      pc: () => tp,
      q: () => qp,
      qb: () => ap,
      qd: () => Op.Sb,
      qe: () => Lp,
      rb: () => Yi,
      s: () => mp,
      sb: () => Dp,
      sc: () => xi,
      sd: () => Op.Tb,
      u: () => Op.f,
      uc: () => Op.W,
      ue: () => Tp,
      vc: () => Op._,
      ve: () => di,
      w: () => wi,
      wb: () => Op.z,
      wc: () => Op.cb,
      wd: () => Op.Wb,
      we: () => yp,
      xd: () => Ip,
      y: () => Ep,
      zb: () => gp
    });
    var Op = cp(4911),
      op = cp(2457);
    const Ip = Math.round(1e3 / Op.Wb),
      Sp = 4,
      xp = 2;

    function Lp() {
      return crypto.getRandomValues(new Uint32Array(xp))
    }
    const Yp = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Dp = 16,
      Ap = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      Pp = 3,
      Wp = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function yp(pp) {
      return (pp.nametagsHidden ? kp.NametagsHidden : 0) | (pp.crouchToggle ? kp.CrouchToggle : 0) | (pp.bhopDisabled ? kp.BhopDisabled : 0) | (pp.disableBobbing ? kp.DisableBobbing : 0) | (null !== pp.ezTowering ? kp.EzTowering : 0) | ("jump" === pp.ezTowering ? kp.EzTowerJump : 0) | (pp.ezBridging ? kp.EzBridging : 0) | (pp.showChunkBorders ? kp.ShowChunkBorders : 0) | (pp.touchWalk ? kp.TouchWalk : 0) | (pp.edgeGuard ? kp.EdgeGuard : 0) | (pp.edgeGuardLong ? kp.EdgeGuardLong : 0)
    }
    const Up = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      wp = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      vp = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      tp = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Hp = 5,
      dp = 4294967295;

    function ep(pp) {
      const ip = {
        off: 0,
        lit: Wp.CellLight,
        all: Wp.CellLight | Wp.CellLightUnlit
      } [pp.cellLight];
      return (pp.showFog ? Wp.ShowFog : 0) | (pp.lighting ? Wp.Lighting : 0) | (pp.chunkFade ? Wp.ChunkFade : 0) | ip
    }
    const jp = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      kp = {
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
      mp = {
        Release: 1,
        KeepTouches: 2
      },
      Rp = {
        Point: 1,
        Stamped: 2
      },
      qp = {
        Add: 1,
        Clear: 2
      },
      Mp = 1,
      Cp = 8,
      Ep = 16777215,
      Xp = 4,
      lp = {
        Resume: 1
      },
      Qp = {
        Held: 1
      };

    function Jp(pp, ip) {
      return (pp | ip << 8) >>> 0
    }

    function Bp(pp) {
      return 255 & pp
    }

    function Np(pp) {
      return pp >>> 8
    }

    function Tp(pp) {
      return pp + 3 & -4
    }
    const fp = 16777216,
      bp = 20;
    const hp = 8,
      ap = 8,
      np = 16777216,
      Fp = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      gp = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Gp = 16,
      rp = {
        Lost: 0,
        Gone: 1
      },
      Zp = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function zp(pp) {
      return pp === Zp.WorldgenSeed || pp === Zp.Generate
    }
    const sp = 4,
      Kp = 99,
      Vp = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      ii = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      ci = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      Oi = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      oi = 12,
      Ii = 16,
      Si = 4,
      xi = 12,
      Li = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Yi = 4,
      Di = 8,
      Ai = 8,
      Pi = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Wi = {
        Crit: 1,
        HitSelf: 2
      },
      yi = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Ui = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      wi = 12,
      vi = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      ti = 67108864;

    function Hi(pp) {
      for (const [ip, cp] of Object.entries(Op.k))
        if (cp === pp) return ip;
      return `Unknown${pp}`
    }

    function di(pp) {
      return {
        status: pp[Op.x.Status],
        lastError: pp[Op.x.LastError],
        lastErrorDetail: pp[Op.x.LastErrorDetail],
        errorCount: pp[Op.x.ErrorCount],
        frameIndex: pp[Op.x.FrameIndex],
        tickIndex: pp[Op.x.TickIndex],
        renderPending: pp[Op.x.RenderPending],
        firstView: pp[Op.x.FirstView],
        chunksCancelled: pp[Op.x.ChunksCancelled]
      }
    }
  },
  4895: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      f: () => Ip,
      j: () => op
    });
    var Op = cp(4903);

    function op(pp) {
      return "none" !== pp
    }

    function Ip(pp, ip) {
      if (!pp) return "none";
      switch (ip) {
        case Op.gb.Drawn:
          return "drawn";
        case Op.gb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Sp(pp) {
      return "drawn" === pp
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);