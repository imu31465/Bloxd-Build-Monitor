export const id = 90;
export const ids = [90];
export const modules = {
  4963: (tt, et, Vt) => {
    Vt.d(et, {
      $: () => Ct,
      Cb: () => kt,
      D: () => dt,
      Eb: () => yt,
      G: () => Ot,
      Hb: () => ct,
      J: () => Dt,
      L: () => Jt,
      Lb: () => St,
      M: () => nt,
      Nb: () => Gt,
      Ob: () => Yt,
      Q: () => Qt,
      S: () => lt,
      Sb: () => ot,
      Vb: () => Ut,
      W: () => Xt,
      X: () => Ht,
      Zb: () => At,
      _b: () => vt,
      bb: () => jt,
      bc: () => Wt,
      d: () => Mt,
      db: () => wt,
      e: () => Nt,
      ec: () => pt,
      fb: () => ft,
      fc: () => qt,
      g: () => gt,
      gc: () => st,
      hb: () => Rt,
      ib: () => Pt,
      jb: () => Zt,
      k: () => bt,
      l: () => Tt,
      lb: () => It,
      m: () => Et,
      mb: () => Lt,
      o: () => ht,
      ob: () => Bt,
      q: () => xt,
      sb: () => it,
      u: () => Kt,
      vb: () => rt,
      w: () => ut,
      wb: () => Ft,
      yb: () => zt,
      z: () => mt
    });
    const Ot = 32,
      qt = 33.333333333333336,
      Dt = {
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
      mt = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      dt = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      jt = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      Ht = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Xt = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      Qt = 14,
      lt = {
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
      Et = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      ft = 8,
      wt = 1,
      yt = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Nt = 6,
      Mt = 1,
      bt = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      Jt = {
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
      Ct = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      ut = {
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
      Kt = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      ht = 4,
      vt = 4,
      Wt = 65535,
      St = {
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
      ct = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Rt = 88,
      It = 0,
      Pt = 24,
      Zt = 48,
      Lt = 80,
      Ft = {
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
      kt = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Gt = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      zt = {
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
      ot = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      rt = 65535,
      Ut = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      At = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      it = 2,
      Yt = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Bt = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      pt = {
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
      xt = {
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
      Tt = {
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
      gt = 8,
      st = {
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
      nt = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4960: (tt, et, Vt) => {
    Vt.d(et, {
      $b: () => vt,
      Ac: () => Mt,
      Ae: () => Lt,
      Bd: () => Ot._b,
      Cb: () => Xt,
      Cd: () => Ot.bc,
      D: () => Zt,
      Dc: () => me,
      De: () => jt,
      Fb: () => Ot.L,
      Fc: () => Ot.hb,
      Fe: () => Gt,
      Gc: () => Ot.ib,
      Gd: () => Ot.fc,
      Ge: () => Me,
      H: () => ye,
      Ib: () => Yt,
      Ic: () => Ot.jb,
      Id: () => Dt,
      K: () => nt,
      Kb: () => Ve,
      Ke: () => ft,
      Lb: () => st,
      M: () => Ot.l,
      Mc: () => Ot.lb,
      Md: () => Nt,
      Ob: () => Ot.Q,
      Pd: () => Qe,
      Q: () => Ht,
      Qb: () => Oe,
      Qc: () => Ot.mb,
      R: () => Ot.m,
      Rb: () => De,
      Rd: () => rt,
      Sd: () => At,
      Uc: () => Ot.vb,
      V: () => ee,
      Vb: () => Ot.S,
      Vd: () => ot,
      Xb: () => qt.e,
      Xc: () => Ne,
      Yc: () => Ee,
      Z: () => Ot.o,
      Zc: () => de,
      Zd: () => Bt,
      ad: () => Ot.wb,
      bb: () => gt,
      bc: () => zt,
      d: () => qe,
      db: () => Ot.w,
      de: () => it,
      ec: () => It,
      ed: () => Ot.yb,
      f: () => yt,
      fd: () => Ot.Cb,
      g: () => wt,
      hb: () => Ot.z,
      hd: () => te,
      he: () => xt,
      i: () => le,
      ic: () => ct,
      je: () => pt,
      kc: () => Ot.$,
      l: () => Wt,
      lb: () => Ot.D,
      lc: () => Pt,
      ld: () => Ot.Hb,
      mb: () => Qt,
      md: () => Ot.Lb,
      me: () => Xe,
      nc: () => ut,
      nd: () => Ot.Nb,
      p: () => ht,
      pb: () => bt,
      q: () => Ot.g,
      qb: () => Ot.G,
      qc: () => He,
      qe: () => ae,
      rd: () => Ot.Sb,
      s: () => we,
      sb: () => Ot.J,
      uc: () => Jt,
      ud: () => Ot.Vb,
      ue: () => Ct,
      v: () => Rt,
      vb: () => Ut,
      ve: () => Tt,
      wc: () => fe,
      wd: () => Ot.Zb,
      yb: () => je,
      yc: () => qt.k,
      yd: () => lt,
      ye: () => kt,
      z: () => mt,
      zd: () => St,
      ze: () => Ft
    });
    var Ot = Vt(4963),
      qt = Vt(2458);
    const Dt = Math.round(1e3 / Ot.fc),
      mt = 4,
      dt = 2;

    function jt() {
      return crypto.getRandomValues(new Uint32Array(dt))
    }
    const Ht = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Xt = 16,
      Qt = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      lt = 3,
      Et = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function ft(tt) {
      return (tt.nametagsHidden ? Kt.NametagsHidden : 0) | (tt.crouchToggle ? Kt.CrouchToggle : 0) | (tt.bhopDisabled ? Kt.BhopDisabled : 0) | (tt.disableBobbing ? Kt.DisableBobbing : 0) | (null !== tt.ezTowering ? Kt.EzTowering : 0) | ("jump" === tt.ezTowering ? Kt.EzTowerJump : 0) | (tt.ezBridging ? Kt.EzBridging : 0) | (tt.showChunkBorders ? Kt.ShowChunkBorders : 0) | (tt.touchWalk ? Kt.TouchWalk : 0) | (tt.edgeGuard ? Kt.EdgeGuard : 0) | (tt.edgeGuardLong ? Kt.EdgeGuardLong : 0)
    }
    const wt = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      yt = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Nt = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Mt = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      bt = 5,
      Jt = 4294967295;

    function Ct(tt) {
      const et = {
        off: 0,
        lit: Et.CellLight,
        all: Et.CellLight | Et.CellLightUnlit
      } [tt.cellLight];
      return (tt.showFog ? Et.ShowFog : 0) | (tt.lighting ? Et.Lighting : 0) | (tt.chunkFade ? Et.ChunkFade : 0) | et
    }
    const ut = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Kt = {
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
      ht = {
        Release: 1,
        KeepTouches: 2
      },
      vt = {
        Point: 1,
        Stamped: 2
      },
      Wt = {
        Add: 1,
        Clear: 2
      },
      St = 1,
      ct = 8,
      Rt = 16777215,
      It = 4,
      Pt = {
        Resume: 1
      },
      Zt = {
        Held: 1
      };

    function Lt(tt, et) {
      return (tt | et << 8) >>> 0
    }

    function Ft(tt) {
      return 255 & tt
    }

    function kt(tt) {
      return tt >>> 8
    }

    function Gt(tt) {
      return tt + 3 & -4
    }
    const zt = 16777216,
      ot = 20;
    const rt = 8,
      Ut = 8,
      At = 16777216,
      it = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Yt = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Bt = 16,
      pt = {
        Lost: 0,
        Gone: 1
      },
      xt = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Tt(tt) {
      return tt === xt.WorldgenSeed || tt === xt.Generate
    }
    const gt = 4,
      st = 99,
      nt = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      te = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      ee = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      Ve = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      Oe = 12,
      qe = 16,
      De = 4,
      me = 12,
      de = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      je = 4,
      He = 8,
      Xe = 8,
      Qe = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      le = {
        Crit: 1,
        HitSelf: 2
      },
      Ee = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      fe = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      we = 12,
      ye = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Ne = 67108864;

    function ae(tt) {
      for (const [et, Vt] of Object.entries(Ot.l))
        if (Vt === tt) return et;
      return `Unknown${tt}`
    }

    function Me(tt) {
      return {
        status: tt[Ot.J.Status],
        lastError: tt[Ot.J.LastError],
        lastErrorDetail: tt[Ot.J.LastErrorDetail],
        errorCount: tt[Ot.J.ErrorCount],
        frameIndex: tt[Ot.J.FrameIndex],
        tickIndex: tt[Ot.J.TickIndex],
        renderPending: tt[Ot.J.RenderPending],
        firstView: tt[Ot.J.FirstView],
        chunksCancelled: tt[Ot.J.ChunksCancelled]
      }
    }
  },
  4958: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      e: () => Dt,
      f: () => qt
    });
    var Ot = Vt(4960);

    function qt(tt) {
      return "none" !== tt
    }

    function Dt(tt, et) {
      if (!tt) return "none";
      switch (et) {
        case Ot.lb.Drawn:
          return "drawn";
        case Ot.lb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function mt(tt) {
      return "drawn" === tt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);