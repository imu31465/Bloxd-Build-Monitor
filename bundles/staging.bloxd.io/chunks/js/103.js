export const id = 103;
export const ids = [103];
export const modules = {
  5301: (VV, eV, xV) => {
    xV.d(eV, {
      $b: () => mV,
      B: () => uV,
      Bb: () => KV,
      Db: () => fV,
      E: () => PV,
      G: () => TV,
      H: () => yV,
      Hb: () => hV,
      Ib: () => iV,
      K: () => pV,
      Lb: () => oV,
      N: () => JV,
      Pb: () => CV,
      Q: () => UV,
      Rb: () => EV,
      T: () => tV,
      Vb: () => zV,
      W: () => dV,
      Wb: () => MV,
      Y: () => ZV,
      Z: () => vV,
      _: () => wV,
      _b: () => aV,
      ac: () => cV,
      cb: () => nV,
      cc: () => lV,
      db: () => FV,
      e: () => jV,
      ec: () => LV,
      fc: () => NV,
      gb: () => QV,
      gc: () => XV,
      i: () => BV,
      ib: () => bV,
      ic: () => HV,
      lc: () => YV,
      m: () => SV,
      mb: () => kV,
      mc: () => IV,
      q: () => qV,
      qb: () => GV,
      rb: () => RV,
      s: () => sV,
      tb: () => gV,
      v: () => rV,
      wb: () => WV,
      y: () => AV,
      zb: () => DV
    });
    const JV = 32,
      YV = 33.333333333333336,
      UV = {
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
      yV = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      pV = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      QV = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      nV = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      wV = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      ZV = 14,
      vV = {
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
      rV = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      kV = 8,
      bV = 1,
      EV = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      BV = 6,
      jV = 1,
      qV = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      tV = {
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
      FV = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      TV = {
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
      PV = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      AV = 4,
      NV = 4,
      XV = 65535,
      MV = {
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
      zV = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      GV = 88,
      WV = 0,
      RV = 24,
      gV = 48,
      DV = 80,
      iV = {
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
      CV = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      aV = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      oV = {
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
      cV = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      hV = 65535,
      lV = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      LV = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      fV = 2,
      mV = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      KV = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      HV = {
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
      uV = {
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
      sV = {
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
      SV = 8,
      IV = {
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
      dV = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  5297: (VV, eV, xV) => {
    xV.d(eV, {
      $b: () => oV,
      $c: () => JV.Pb,
      Ae: () => je,
      B: () => ke,
      Bb: () => pe,
      Bc: () => JV.qb,
      Bd: () => JV.lc,
      Be: () => kV,
      Cd: () => UV,
      D: () => GV,
      E: () => yV,
      Fb: () => wV,
      Fc: () => JV.rb,
      Fd: () => BV,
      G: () => gV,
      Gb: () => JV.T,
      Gc: () => JV.tb,
      H: () => be,
      Id: () => we,
      Jb: () => mV,
      Jd: () => hV,
      Kc: () => JV.wb,
      Kd: () => LV,
      L: () => dV,
      Lb: () => ee,
      Lc: () => JV.zb,
      Ld: () => cV,
      M: () => JV.s,
      Mb: () => IV,
      Mc: () => JV.Hb,
      Nd: () => KV,
      Ob: () => JV.Y,
      Pb: () => xe,
      Q: () => nV,
      Qc: () => Ee,
      Rb: () => Ye,
      Tb: () => JV.Z,
      U: () => JV.v,
      Uc: () => ve,
      Vc: () => ye,
      Vd: () => fV,
      Wb: () => YV.e,
      Xd: () => uV,
      Y: () => Ve,
      Yc: () => JV.Ib,
      Yd: () => HV,
      Zb: () => NV,
      _c: () => JV.Lb,
      _d: () => ne,
      ab: () => JV.y,
      ac: () => WV,
      bd: () => OV,
      be: () => Be,
      db: () => SV,
      e: () => Je,
      ec: () => zV,
      ed: () => JV.Vb,
      fc: () => JV.db,
      fd: () => JV.Wb,
      fe: () => FV,
      gc: () => RV,
      hb: () => JV.G,
      hd: () => JV._b,
      i: () => EV,
      ib: () => JV.H,
      jc: () => TV,
      je: () => sV,
      k: () => bV,
      l: () => Ze,
      ld: () => JV.ac,
      mb: () => JV.K,
      nc: () => Qe,
      ne: () => CV,
      od: () => JV.cc,
      oe: () => iV,
      p: () => XV,
      pc: () => tV,
      qb: () => ZV,
      qd: () => JV.ec,
      re: () => DV,
      sc: () => re,
      sd: () => vV,
      t: () => AV,
      tb: () => qV,
      tc: () => YV.k,
      td: () => MV,
      vb: () => JV.N,
      vc: () => jV,
      ve: () => QV,
      wd: () => JV.fc,
      x: () => JV.m,
      xb: () => JV.Q,
      xd: () => JV.gc,
      yb: () => lV,
      yc: () => Ue,
      ze: () => aV
    });
    var JV = xV(5301),
      YV = xV(2660);
    const UV = Math.round(1e3 / JV.lc),
      yV = 4,
      pV = 2;

    function QV() {
      return crypto.getRandomValues(new Uint32Array(pV))
    }
    const nV = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      wV = 16,
      ZV = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      vV = 3,
      rV = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function kV(VV) {
      return (VV.nametagsHidden ? PV.NametagsHidden : 0) | (VV.crouchToggle ? PV.CrouchToggle : 0) | (VV.bhopDisabled ? PV.BhopDisabled : 0) | (VV.disableBobbing ? PV.DisableBobbing : 0) | (null !== VV.ezTowering ? PV.EzTowering : 0) | ("jump" === VV.ezTowering ? PV.EzTowerJump : 0) | (VV.ezBridging ? PV.EzBridging : 0) | (VV.showChunkBorders ? PV.ShowChunkBorders : 0) | (VV.touchWalk ? PV.TouchWalk : 0) | (VV.edgeGuard ? PV.EdgeGuard : 0) | (VV.edgeGuardLong ? PV.EdgeGuardLong : 0)
    }
    const bV = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      EV = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      BV = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      jV = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      qV = 5,
      tV = 4294967295;

    function FV(VV) {
      const eV = {
        off: 0,
        lit: rV.CellLight,
        all: rV.CellLight | rV.CellLightUnlit
      } [VV.cellLight];
      return (VV.showFog ? rV.ShowFog : 0) | (VV.lighting ? rV.Lighting : 0) | (VV.chunkFade ? rV.ChunkFade : 0) | eV
    }
    const TV = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      PV = {
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
      AV = {
        Release: 1,
        KeepTouches: 2
      },
      NV = {
        Point: 1,
        Stamped: 2
      },
      XV = {
        Add: 1,
        Clear: 2
      },
      MV = 1,
      zV = 8,
      GV = 16777215,
      WV = 4,
      RV = {
        Resume: 1
      },
      gV = {
        Held: 1
      };

    function DV(VV, eV) {
      return (VV | eV << 8) >>> 0
    }

    function iV(VV) {
      return 255 & VV
    }

    function CV(VV) {
      return VV >>> 8
    }

    function aV(VV) {
      return VV + 3 & -4
    }
    const oV = 16777216,
      cV = 20;
    const hV = 8,
      lV = 8,
      LV = 16777216,
      fV = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      mV = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      KV = 16,
      HV = {
        Lost: 0,
        Gone: 1
      },
      uV = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function sV(VV) {
      return VV === uV.WorldgenSeed || VV === uV.Generate
    }
    const SV = 4,
      IV = 99,
      dV = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      OV = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      Ve = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17,
        LINKS_IN_FLIGHT_SHIFT: 18,
        LINKS_IN_FLIGHT_MAX: 15,
        OLDEST_LINK_SHIFT: 22,
        OLDEST_LINK_MAX: 1023,
        OLDEST_LINK_UNIT_MS: 100
      },
      ee = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      xe = 12,
      Je = 16,
      Ye = 4,
      Ue = 12,
      ye = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      pe = 4,
      Qe = 8,
      ne = 8,
      we = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Ze = {
        Crit: 1,
        HitSelf: 2
      },
      ve = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      re = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      ke = 12,
      be = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Ee = 67108864;

    function Be(VV) {
      for (const [eV, xV] of Object.entries(JV.s))
        if (xV === VV) return eV;
      return `Unknown${VV}`
    }

    function je(VV) {
      return {
        status: VV[JV.Q.Status],
        lastError: VV[JV.Q.LastError],
        lastErrorDetail: VV[JV.Q.LastErrorDetail],
        errorCount: VV[JV.Q.ErrorCount],
        frameIndex: VV[JV.Q.FrameIndex],
        tickIndex: VV[JV.Q.TickIndex],
        renderPending: VV[JV.Q.RenderPending],
        firstView: VV[JV.Q.FirstView],
        chunksCancelled: VV[JV.Q.ChunksCancelled]
      }
    }
  },
  5288: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      d: () => UV,
      e: () => YV
    });
    var JV = xV(5297);

    function YV(VV) {
      return "none" !== VV
    }

    function UV(VV, eV) {
      if (!VV) return "none";
      switch (eV) {
        case JV.mb.Drawn:
          return "drawn";
        case JV.mb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function yV(VV) {
      return "drawn" === VV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);