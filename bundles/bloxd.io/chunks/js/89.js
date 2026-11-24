export const id = 89;
export const ids = [89];
export const modules = {
  4799: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      $b: () => ck,
      C: () => lk,
      Cb: () => dk,
      Db: () => Wk,
      E: () => Xk,
      F: () => ik,
      Gb: () => Rk,
      I: () => Kk,
      Kb: () => Nk,
      M: () => Mk,
      N: () => tk,
      Nb: () => Uk,
      O: () => Zk,
      Rb: () => Hk,
      S: () => Lk,
      Tb: () => Ok,
      Vb: () => Ek,
      W: () => qk,
      Xb: () => Ck,
      _: () => Qk,
      _b: () => Yk,
      bc: () => fk,
      cb: () => ak,
      e: () => xk,
      eb: () => wk,
      ec: () => Bk,
      f: () => Jk,
      fc: () => Sk,
      i: () => rk,
      ib: () => ek,
      jc: () => vk,
      k: () => Pk,
      lb: () => nk,
      lc: () => gk,
      m: () => hk,
      ob: () => pk,
      pc: () => Tk,
      q: () => jk,
      qb: () => uk,
      sc: () => Dk,
      tb: () => Gk,
      u: () => zk,
      vb: () => bk,
      w: () => mk,
      x: () => Vk,
      y: () => sk,
      yb: () => Ak,
      z: () => yk
    });
    const Xk = 32,
      Tk = 33.333333333333336,
      ik = {
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
      yk = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      lk = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      ak = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      qk = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Lk = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      tk = 8,
      Zk = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6,
        ViewQueuedPrograms: 7
      },
      jk = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      ek = 8,
      wk = 1,
      Hk = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Jk = 6,
      xk = 1,
      Pk = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      Kk = {
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
      Qk = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      sk = {
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
      Vk = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      zk = 4,
      Sk = 4,
      vk = 65535,
      Ek = {
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
      Ok = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      nk = 88,
      Gk = 0,
      pk = 24,
      uk = 48,
      bk = 80,
      Rk = {
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
      Uk = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Ck = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Nk = {
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
      ck = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Wk = 65535,
      fk = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Bk = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      dk = 2,
      Yk = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Ak = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      gk = {
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
      mk = {
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
      hk = {
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
      rk = 8,
      Dk = {
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
      Mk = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4797: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      $: () => tk,
      A: () => yk,
      Bb: () => Xk.N,
      Cb: () => XF,
      Cc: () => Xk.tb,
      Cd: () => Jk,
      E: () => uk,
      Fb: () => iF,
      Fd: () => tF,
      Gc: () => Xk.vb,
      Gd: () => Wk,
      Hc: () => Xk.Db,
      Hd: () => Bk,
      I: () => HF,
      Jb: () => Xk.O,
      Kb: () => Tk.i,
      L: () => Mk,
      Lc: () => JF,
      Ld: () => ck,
      Mb: () => Sk,
      Mc: () => jF,
      N: () => Xk.m,
      Nc: () => lF,
      Nd: () => Ak,
      O: () => qk,
      Ob: () => Nk,
      P: () => Xk.q,
      Pc: () => Xk.Gb,
      Pd: () => dk,
      R: () => FF,
      Sb: () => Gk,
      Sc: () => Xk.Kb,
      Sd: () => mk,
      Tb: () => Ok,
      U: () => Xk.u,
      Uc: () => Xk.Nb,
      W: () => rk,
      Wb: () => Xk._,
      Wd: () => gk,
      X: () => Xk.y,
      Xb: () => pk,
      Xc: () => kF,
      Y: () => Xk.z,
      Yd: () => LF,
      Zb: () => sk,
      _: () => Xk.C,
      _c: () => Xk.Tb,
      ad: () => Xk.Vb,
      ae: () => xF,
      bc: () => qF,
      be: () => Qk,
      cb: () => Pk,
      cd: () => Xk.Xb,
      ce: () => hk,
      db: () => Xk.E,
      de: () => Uk,
      e: () => TF,
      eb: () => Xk.F,
      ec: () => Kk,
      fc: () => eF,
      fd: () => Xk.$b,
      fe: () => Rk,
      g: () => Hk,
      h: () => wk,
      hd: () => Xk.bc,
      he: () => bk,
      ib: () => fk,
      ic: () => Tk.p,
      kd: () => Xk.ec,
      l: () => ZF,
      ld: () => Zk,
      le: () => ak,
      mb: () => aF,
      mc: () => xk,
      o: () => vk,
      od: () => Ek,
      p: () => zk,
      pb: () => Lk,
      pe: () => Ck,
      qc: () => yF,
      rb: () => Xk.I,
      rc: () => Xk.lb,
      rd: () => Xk.fc,
      se: () => PF,
      t: () => Xk.i,
      u: () => wF,
      ub: () => Yk,
      uc: () => Xk.ob,
      ud: () => Xk.jc,
      ue: () => ek,
      w: () => nk,
      yb: () => IF,
      yc: () => Xk.qb,
      yd: () => Xk.pc,
      zb: () => Dk,
      zd: () => ik
    });
    var Xk = Ik(4799),
      Tk = Ik(2331);
    const ik = Math.round(1e3 / Xk.pc),
      yk = 4,
      lk = 2;

    function ak() {
      return crypto.getRandomValues(new Uint32Array(lk))
    }
    const qk = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Lk = 16,
      tk = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      Zk = 3,
      jk = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function ek(kk) {
      return (kk.nametagsHidden ? Vk.NametagsHidden : 0) | (kk.crouchToggle ? Vk.CrouchToggle : 0) | (kk.bhopDisabled ? Vk.BhopDisabled : 0) | (kk.disableBobbing ? Vk.DisableBobbing : 0) | (kk.ezTowering ? Vk.EzTowering : 0) | (kk.ezBridging ? Vk.EzBridging : 0) | (kk.showChunkBorders ? Vk.ShowChunkBorders : 0)
    }
    const wk = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Hk = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Jk = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      xk = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Pk = 5,
      Kk = 4294967295;

    function Qk(kk) {
      const Fk = {
        off: 0,
        lit: jk.CellLight,
        all: jk.CellLight | jk.CellLightUnlit
      } [kk.cellLight];
      return (kk.showFog ? jk.ShowFog : 0) | (kk.lighting ? jk.Lighting : 0) | (kk.chunkFade ? jk.ChunkFade : 0) | Fk
    }
    const sk = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Vk = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      zk = {
        Release: 1,
        KeepTouches: 2
      },
      Sk = {
        Point: 1,
        Stamped: 2
      },
      vk = {
        Add: 1,
        Clear: 2
      },
      Ek = 1,
      Ok = 8,
      nk = 16777215,
      Gk = 4,
      pk = {
        Resume: 1
      },
      uk = {
        Held: 1
      };

    function bk(kk, Fk) {
      return (kk | Fk << 8) >>> 0
    }

    function Rk(kk) {
      return 255 & kk
    }

    function Uk(kk) {
      return kk >>> 8
    }

    function Ck(kk) {
      return kk + 3 & -4
    }
    const Nk = 16777216,
      ck = 20;
    const Wk = 8,
      fk = 8,
      Bk = 16777216,
      dk = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Yk = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Ak = 16,
      gk = {
        Lost: 0,
        Gone: 1
      },
      mk = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function hk(kk) {
      return kk === mk.WorldgenSeed || kk === mk.Generate
    }
    const rk = 4,
      Dk = 99,
      Mk = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      kF = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      FF = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      IF = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      XF = 12,
      TF = 16,
      iF = 4,
      yF = 12,
      lF = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      aF = 4,
      qF = 8,
      LF = 8,
      tF = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      ZF = {
        Crit: 1,
        HitSelf: 2
      },
      jF = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      eF = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      wF = 12,
      HF = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      JF = 67108864;

    function xF(kk) {
      for (const [Fk, Ik] of Object.entries(Xk.m))
        if (Ik === kk) return Fk;
      return `Unknown${kk}`
    }

    function PF(kk) {
      return {
        status: kk[Xk.F.Status],
        lastError: kk[Xk.F.LastError],
        lastErrorDetail: kk[Xk.F.LastErrorDetail],
        errorCount: kk[Xk.F.ErrorCount],
        frameIndex: kk[Xk.F.FrameIndex],
        tickIndex: kk[Xk.F.TickIndex],
        renderPending: kk[Xk.F.RenderPending],
        firstView: kk[Xk.F.FirstView],
        chunksCancelled: kk[Xk.F.ChunksCancelled]
      }
    }
  },
  4794: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk,
      e: () => ik,
      f: () => Tk
    });
    var Xk = Ik(4797);

    function Tk(kk) {
      return "none" !== kk
    }

    function ik(kk, Fk) {
      if (!kk) return "none";
      switch (Fk) {
        case Xk._.Drawn:
          return "drawn";
        case Xk._.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function yk(kk) {
      return "drawn" === kk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);