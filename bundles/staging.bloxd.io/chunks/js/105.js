export const id = 105;
export const ids = [105, 106];
export const modules = {
  5685: (RR, JR, GR) => {
    GR.d(JR, {
      Ab: () => OR,
      Bb: () => DR,
      C: () => ZR,
      Db: () => ER,
      E: () => qR,
      Eb: () => jR,
      H: () => yR,
      Hb: () => mR,
      Ib: () => HR,
      Kb: () => PR,
      L: () => uR,
      Mb: () => oR,
      N: () => AR,
      Pb: () => LR,
      Q: () => sR,
      T: () => KR,
      Tb: () => bR,
      U: () => wR,
      Wb: () => gR,
      Y: () => VR,
      Yb: () => cR,
      ab: () => fR,
      ac: () => dR,
      b: () => UR,
      bc: () => IR,
      e: () => nR,
      eb: () => CR,
      ec: () => zR,
      hb: () => iR,
      hc: () => SR,
      i: () => FR,
      ic: () => lR,
      lb: () => aR,
      lc: () => pR,
      m: () => WR,
      nb: () => eR,
      nc: () => YR,
      oc: () => tR,
      p: () => QR,
      qb: () => vR,
      sc: () => TR,
      t: () => rR,
      tb: () => xR,
      u: () => BR,
      v: () => kR,
      w: () => MR,
      wb: () => NR,
      z: () => XR
    });
    const yR = 32,
      tR = 33.333333333333336,
      uR = {
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
      ZR = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      qR = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      iR = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      fR = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      VR = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      KR = 14,
      wR = {
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
      rR = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      eR = 8,
      aR = 1,
      LR = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      nR = 6,
      UR = 1,
      WR = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      AR = {
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
      CR = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      XR = {
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
      MR = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      BR = 4,
      lR = 4,
      pR = 65535,
      gR = {
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
      bR = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      vR = 88,
      OR = 0,
      xR = 24,
      NR = 48,
      DR = 80,
      HR = {
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
      oR = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      cR = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      PR = {
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
      IR = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      mR = 65535,
      zR = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      SR = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      jR = 2,
      dR = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      ER = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      YR = {
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
      kR = {
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
      QR = {
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
      FR = 8,
      TR = {
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
      sR = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5676: (RR, JR, GR) => {
    GR.d(JR, {
      $b: () => XR,
      Ab: () => JJ,
      Ae: () => eR,
      B: () => vR,
      Bb: () => TR,
      Bd: () => uR,
      C: () => ZR,
      Db: () => yR.T,
      Dc: () => yR.Ab,
      E: () => NR,
      Fb: () => GJ,
      Fd: () => nR,
      Gb: () => tJ,
      H: () => aJ,
      Hc: () => yR.Bb,
      Hd: () => VJ,
      Id: () => mR,
      J: () => sR,
      Jb: () => yR.U,
      K: () => yR.p,
      Kb: () => tR.f,
      Kc: () => yR.Hb,
      L: () => fR,
      M: () => yR.t,
      Md: () => SR,
      N: () => RJ,
      Nb: () => lR,
      Nc: () => LJ,
      Oc: () => wJ,
      Pd: () => IR,
      Qc: () => ZJ,
      R: () => yR.u,
      Rb: () => PR,
      Rd: () => ER,
      T: () => FR,
      Uc: () => yR.Ib,
      Vb: () => OR,
      Vc: () => yR.Kb,
      Wc: () => yR.Mb,
      X: () => yR.z,
      Xd: () => jR,
      Yb: () => bR,
      Yc: () => hR,
      Yd: () => kR,
      Zb: () => yR.eb,
      _: () => yR.C,
      _b: () => xR,
      ab: () => yR.E,
      ad: () => yR.Tb,
      ae: () => YR,
      bc: () => iJ,
      cb: () => KR,
      cd: () => yR.Wb,
      dd: () => yR.Yb,
      de: () => fJ,
      e: () => yJ,
      ec: () => AR,
      gb: () => WR,
      gc: () => rJ,
      gd: () => yR.bc,
      ge: () => nJ,
      i: () => LR,
      ie: () => CR,
      jb: () => yR.H,
      jc: () => tR.m,
      jd: () => yR.ec,
      je: () => QR,
      k: () => aR,
      kb: () => yR.L,
      ke: () => oR,
      ld: () => yR.hc,
      mc: () => UR,
      md: () => wR,
      me: () => HR,
      nb: () => zR,
      o: () => KJ,
      ob: () => qJ,
      pc: () => uJ,
      pd: () => gR,
      q: () => pR,
      qe: () => DR,
      re: () => iR,
      sb: () => VR,
      sc: () => yR.qb,
      sd: () => yR.ic,
      u: () => BR,
      vc: () => yR.tb,
      vd: () => yR.lc,
      ve: () => cR,
      w: () => yR.i,
      wb: () => yR.N,
      y: () => eJ,
      yb: () => dR,
      ye: () => UJ,
      zc: () => yR.wb,
      zd: () => yR.oc
    });
    var yR = GR(5685),
      tR = GR(3428);
    const uR = Math.round(1e3 / yR.oc),
      ZR = 4,
      qR = 2;

    function iR() {
      return crypto.getRandomValues(new Uint32Array(qR))
    }
    const fR = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      VR = 16,
      KR = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      wR = 3,
      rR = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function eR(RR) {
      return (RR.nametagsHidden ? MR.NametagsHidden : 0) | (RR.crouchToggle ? MR.CrouchToggle : 0) | (RR.bhopDisabled ? MR.BhopDisabled : 0) | (RR.disableBobbing ? MR.DisableBobbing : 0) | (null !== RR.ezTowering ? MR.EzTowering : 0) | ("jump" === RR.ezTowering ? MR.EzTowerJump : 0) | (RR.ezBridging ? MR.EzBridging : 0) | (RR.showChunkBorders ? MR.ShowChunkBorders : 0) | (RR.touchWalk ? MR.TouchWalk : 0) | (RR.edgeGuard ? MR.EdgeGuard : 0) | (RR.edgeGuardLong ? MR.EdgeGuardLong : 0)
    }
    const aR = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      LR = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      nR = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      UR = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      WR = 5,
      AR = 4294967295;

    function CR(RR) {
      const JR = {
        off: 0,
        lit: rR.CellLight,
        all: rR.CellLight | rR.CellLightUnlit
      } [RR.cellLight];
      return (RR.showFog ? rR.ShowFog : 0) | (RR.lighting ? rR.Lighting : 0) | (RR.chunkFade ? rR.ChunkFade : 0) | JR
    }
    const XR = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      MR = {
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
      BR = {
        Release: 1,
        KeepTouches: 2
      },
      lR = {
        Point: 1,
        Stamped: 2
      },
      pR = {
        Add: 1,
        Clear: 2
      },
      gR = 1,
      bR = 8,
      vR = 16777215,
      OR = 4,
      xR = {
        Resume: 1
      },
      NR = {
        Held: 1
      };

    function DR(RR, JR) {
      return (RR | JR << 8) >>> 0
    }

    function HR(RR) {
      return 255 & RR
    }

    function oR(RR) {
      return RR >>> 8
    }

    function cR(RR) {
      return RR + 3 & -4
    }
    const PR = 16777216,
      IR = 20;
    const mR = 8,
      zR = 8,
      SR = 16777216,
      jR = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      dR = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      ER = 16,
      YR = {
        Lost: 0,
        Gone: 1
      },
      kR = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function QR(RR) {
      return RR === kR.WorldgenSeed || RR === kR.Generate
    }
    const FR = 4,
      TR = 99,
      sR = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      hR = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      RJ = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17,
        LINKS_IN_FLIGHT_SHIFT: 18,
        LINKS_IN_FLIGHT_MAX: 15,
        OLDEST_LINK_SHIFT: 22,
        OLDEST_LINK_MAX: 1023,
        OLDEST_LINK_UNIT_MS: 100
      },
      JJ = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      GJ = 12,
      yJ = 16,
      tJ = 4,
      uJ = 12,
      ZJ = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      qJ = 4,
      iJ = 8,
      fJ = 8,
      VJ = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      KJ = {
        Crit: 1,
        HitSelf: 2
      },
      wJ = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      rJ = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      eJ = 12,
      aJ = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      LJ = 67108864;

    function nJ(RR) {
      for (const [JR, GR] of Object.entries(yR.p))
        if (GR === RR) return JR;
      return `Unknown${RR}`
    }

    function UJ(RR) {
      return {
        status: RR[yR.L.Status],
        lastError: RR[yR.L.LastError],
        lastErrorDetail: RR[yR.L.LastErrorDetail],
        errorCount: RR[yR.L.ErrorCount],
        frameIndex: RR[yR.L.FrameIndex],
        tickIndex: RR[yR.L.TickIndex],
        renderPending: RR[yR.L.RenderPending],
        firstView: RR[yR.L.FirstView],
        chunksCancelled: RR[yR.L.ChunksCancelled]
      }
    }
  },
  5671: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      e: () => uR,
      f: () => tR
    });
    var yR = GR(5676);

    function tR(RR) {
      return "none" !== RR
    }

    function uR(RR, JR) {
      if (!RR) return "none";
      switch (JR) {
        case yR.ab.Drawn:
          return "drawn";
        case yR.ab.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function ZR(RR) {
      return "drawn" === RR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);