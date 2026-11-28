export const id = 105;
export const ids = [105, 106];
export const modules = {
  5571: (dd, Od, md) => {
    md.d(Od, {
      $: () => Hd,
      $b: () => xd,
      Ab: () => nd,
      B: () => Xd,
      C: () => Kd,
      Db: () => yd,
      Eb: () => Sd,
      Fb: () => Bd,
      G: () => Wd,
      I: () => Rd,
      Ib: () => Ld,
      L: () => Yd,
      Mb: () => Id,
      N: () => dO,
      Ob: () => zd,
      R: () => td,
      Rb: () => jd,
      S: () => od,
      V: () => Qd,
      Vb: () => Dd,
      X: () => vd,
      Y: () => gd,
      Yb: () => Ud,
      Z: () => hd,
      ab: () => qd,
      bc: () => Cd,
      e: () => Td,
      eb: () => sd,
      fb: () => Vd,
      fc: () => Fd,
      h: () => bd,
      hc: () => Md,
      ib: () => Ad,
      k: () => fd,
      mb: () => ud,
      n: () => pd,
      ob: () => rd,
      p: () => kd,
      pb: () => ld,
      q: () => Nd,
      r: () => Jd,
      rb: () => ed,
      t: () => Zd,
      tb: () => cd,
      vb: () => Gd,
      w: () => Ed,
      x: () => wd,
      xb: () => Pd
    });
    const Wd = 32,
      Fd = 33.333333333333336,
      Rd = {
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
      Xd = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Kd = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      hd = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      vd = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Qd = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      td = 14,
      od = {
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
      Nd = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      qd = 8,
      Hd = 1,
      yd = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      bd = 6,
      Td = 1,
      pd = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      Yd = {
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
      gd = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      wd = {
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
      Ed = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Jd = 4,
      Ud = 4,
      xd = 65535,
      Bd = {
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
      Sd = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      sd = 88,
      ud = 0,
      Vd = 24,
      Ad = 48,
      rd = 80,
      Gd = {
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
      nd = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Ld = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Pd = {
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
      zd = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      cd = 65535,
      jd = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Dd = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      ed = 2,
      Id = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      ld = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Cd = {
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
      Zd = {
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
      kd = {
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
      fd = 8,
      Md = {
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
      dO = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5568: (dd, Od, md) => {
    md.d(Od, {
      $b: () => Wd.Y,
      Bc: () => Wd.ob,
      Be: () => qd,
      C: () => bO,
      Cb: () => Md,
      Cd: () => bd,
      E: () => dO,
      Ec: () => Wd.tb,
      F: () => Wd.p,
      Fb: () => Wd.R,
      Fd: () => oO,
      Hd: () => cd,
      Ib: () => FO,
      Ic: () => TO,
      Id: () => Dd,
      J: () => vd,
      Jb: () => XO,
      Jd: () => zd,
      Kb: () => Wd.S,
      Kd: () => ld,
      L: () => Wd.q,
      Lb: () => Fd.f,
      Lc: () => qO,
      Nb: () => Ud,
      Nc: () => hO,
      O: () => mO,
      Pd: () => ed,
      Qb: () => Pd,
      Rc: () => Wd.vb,
      S: () => Wd.r,
      Tb: () => ud,
      Td: () => Zd,
      Vc: () => Wd.xb,
      W: () => fd,
      Wd: () => Cd,
      Xb: () => Sd,
      Yc: () => Wd.Ab,
      Yd: () => tO,
      Z: () => Wd.x,
      _c: () => OO,
      ab: () => Wd.B,
      ae: () => pO,
      bd: () => Wd.Eb,
      be: () => gd,
      c: () => RO,
      cc: () => Vd,
      d: () => yd,
      eb: () => Wd.C,
      ec: () => wd,
      f: () => Hd,
      fb: () => td,
      fd: () => Wd.Fb,
      fe: () => kd,
      gb: () => pd,
      gd: () => Wd.Ib,
      h: () => NO,
      hd: () => Wd.Ob,
      ic: () => QO,
      ie: () => nd,
      j: () => xd,
      jc: () => Yd,
      kb: () => Wd.G,
      kd: () => Wd.Rb,
      l: () => Jd,
      ld: () => Wd.Vb,
      mb: () => Wd.I,
      mc: () => HO,
      me: () => Gd,
      nc: () => Fd.j,
      nd: () => od,
      ne: () => rd,
      ob: () => jd,
      p: () => Wd.k,
      pb: () => vO,
      pd: () => Bd,
      rb: () => Qd,
      rc: () => Td,
      re: () => hd,
      sc: () => KO,
      t: () => yO,
      tc: () => Wd.eb,
      td: () => Wd.Yb,
      ud: () => Wd.$b,
      vb: () => Wd.L,
      vc: () => Wd.fb,
      ve: () => Ld,
      w: () => sd,
      wb: () => Id,
      wc: () => Wd.ib,
      wd: () => Wd.fc,
      x: () => Xd,
      xc: () => Wd.mb,
      y: () => Ad,
      yb: () => WO,
      ye: () => YO,
      zd: () => Rd
    });
    var Wd = md(5571),
      Fd = md(3372);
    const Rd = Math.round(1e3 / Wd.fc),
      Xd = 4,
      Kd = 2;

    function hd() {
      return crypto.getRandomValues(new Uint32Array(Kd))
    }
    const vd = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Qd = 16,
      td = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      od = 3,
      Nd = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function qd(dd) {
      return (dd.nametagsHidden ? Ed.NametagsHidden : 0) | (dd.crouchToggle ? Ed.CrouchToggle : 0) | (dd.bhopDisabled ? Ed.BhopDisabled : 0) | (dd.disableBobbing ? Ed.DisableBobbing : 0) | (null !== dd.ezTowering ? Ed.EzTowering : 0) | ("jump" === dd.ezTowering ? Ed.EzTowerJump : 0) | (dd.ezBridging ? Ed.EzBridging : 0) | (dd.showChunkBorders ? Ed.ShowChunkBorders : 0) | (dd.touchWalk ? Ed.TouchWalk : 0) | (dd.edgeGuard ? Ed.EdgeGuard : 0) | (dd.edgeGuardLong ? Ed.EdgeGuardLong : 0)
    }
    const Hd = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      yd = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      bd = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Td = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      pd = 5,
      Yd = 4294967295;

    function gd(dd) {
      const Od = {
        off: 0,
        lit: Nd.CellLight,
        all: Nd.CellLight | Nd.CellLightUnlit
      } [dd.cellLight];
      return (dd.showFog ? Nd.ShowFog : 0) | (dd.lighting ? Nd.Lighting : 0) | (dd.chunkFade ? Nd.ChunkFade : 0) | Od
    }
    const wd = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Ed = {
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
      Jd = {
        Release: 1,
        KeepTouches: 2
      },
      Ud = {
        Point: 1,
        Stamped: 2
      },
      xd = {
        Add: 1,
        Clear: 2
      },
      Bd = 1,
      Sd = 8,
      sd = 16777215,
      ud = 4,
      Vd = {
        Resume: 1
      },
      Ad = {
        Held: 1
      };

    function rd(dd, Od) {
      return (dd | Od << 8) >>> 0
    }

    function Gd(dd) {
      return 255 & dd
    }

    function nd(dd) {
      return dd >>> 8
    }

    function Ld(dd) {
      return dd + 3 & -4
    }
    const Pd = 16777216,
      zd = 20;
    const cd = 8,
      jd = 8,
      Dd = 16777216,
      ed = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Id = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      ld = 16,
      Cd = {
        Lost: 0,
        Gone: 1
      },
      Zd = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function kd(dd) {
      return dd === Zd.WorldgenSeed || dd === Zd.Generate
    }
    const fd = 4,
      Md = 99,
      dO = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      OO = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      mO = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17,
        LINKS_IN_FLIGHT_SHIFT: 18,
        LINKS_IN_FLIGHT_MAX: 15,
        OLDEST_LINK_SHIFT: 22,
        OLDEST_LINK_MAX: 1023,
        OLDEST_LINK_UNIT_MS: 100
      },
      WO = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      FO = 12,
      RO = 16,
      XO = 4,
      KO = 12,
      hO = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      vO = 4,
      QO = 8,
      tO = 8,
      oO = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      NO = {
        Crit: 1,
        HitSelf: 2
      },
      qO = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      HO = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      yO = 12,
      bO = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      TO = 67108864;

    function pO(dd) {
      for (const [Od, md] of Object.entries(Wd.p))
        if (md === dd) return Od;
      return `Unknown${dd}`
    }

    function YO(dd) {
      return {
        status: dd[Wd.I.Status],
        lastError: dd[Wd.I.LastError],
        lastErrorDetail: dd[Wd.I.LastErrorDetail],
        errorCount: dd[Wd.I.ErrorCount],
        frameIndex: dd[Wd.I.FrameIndex],
        tickIndex: dd[Wd.I.TickIndex],
        renderPending: dd[Wd.I.RenderPending],
        firstView: dd[Wd.I.FirstView],
        chunksCancelled: dd[Wd.I.ChunksCancelled]
      }
    }
  },
  5565: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      g: () => Rd,
      i: () => Fd
    });
    var Wd = md(5568);

    function Fd(dd) {
      return "none" !== dd
    }

    function Rd(dd, Od) {
      if (!dd) return "none";
      switch (Od) {
        case Wd.eb.Drawn:
          return "drawn";
        case Wd.eb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Xd(dd) {
      return "drawn" === dd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);