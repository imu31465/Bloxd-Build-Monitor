export const id = 89;
export const ids = [89];
export const modules = {
  4820: (DD, zD, wD) => {
    wD.d(zD, {
      $b: () => PD,
      B: () => rD,
      Bb: () => iD,
      E: () => LD,
      F: () => pD,
      Fb: () => ND,
      G: () => KD,
      Hb: () => lD,
      Ib: () => GD,
      J: () => OD,
      Jb: () => xD,
      Lb: () => CD,
      M: () => HD,
      Mb: () => WD,
      O: () => AD,
      Qb: () => oD,
      R: () => UD,
      T: () => RD,
      Tb: () => ZD,
      Ub: () => kD,
      V: () => gD,
      Y: () => JD,
      Yb: () => mD,
      Zb: () => VD,
      _: () => cD,
      bb: () => BD,
      cc: () => uD,
      dc: () => sD,
      e: () => nD,
      eb: () => ID,
      ec: () => YD,
      gb: () => TD,
      h: () => hD,
      hb: () => jD,
      kb: () => dD,
      l: () => FD,
      lb: () => bD,
      m: () => MD,
      o: () => tD,
      pb: () => SD,
      q: () => fD,
      t: () => XD,
      tb: () => aD,
      ub: () => eD,
      v: () => vD,
      x: () => QD,
      xb: () => yD,
      y: () => ED
    });
    const pD = 32,
      sD = 33.333333333333336,
      KD = {
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
      rD = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      LD = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      cD = {
        AheadMask: 15,
        Defaulted: 128,
        LagsShift: 8,
        CountMask: 4095
      },
      gD = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      RD = {
        PlayerBound: 32,
        JoinPreload: 64
      },
      AD = 8,
      UD = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6,
        ViewQueuedPrograms: 7
      },
      fD = {
        Look: 0,
        Remesh: 1,
        CameraSet: 2
      },
      ID = 8,
      BD = 1,
      GD = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      hD = 6,
      nD = 1,
      MD = {
        SetCamDir: 0,
        Forced: 1,
        ScriptedTake: 2,
        ScriptedPose: 3,
        ScriptedRelease: 4
      },
      OD = {
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
      JD = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      ED = {
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
      QD = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      XD = 4,
      VD = 4,
      PD = 65535,
      CD = {
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
      xD = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      TD = 88,
      bD = 0,
      jD = 24,
      dD = 48,
      SD = 80,
      iD = {
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
      lD = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      WD = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      ND = {
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
      ZD = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      yD = 65535,
      kD = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      mD = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      eD = 2,
      oD = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      aD = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      uD = {
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
      vD = {
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
      tD = {
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
      FD = 8,
      YD = {
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
      HD = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4817: (DD, zD, wD) => {
    wD.d(zD, {
      $: () => AD,
      A: () => dD,
      Ac: () => pD.hb,
      Ad: () => pD.dc,
      Ae: () => nz,
      D: () => Bz,
      Db: () => pD.O,
      Dc: () => pD.kb,
      De: () => ID,
      E: () => HD,
      Ec: () => pD.lb,
      Ed: () => KD,
      F: () => pD.o,
      Fc: () => pD.pb,
      Fd: () => hD,
      Gc: () => pD.xb,
      Hb: () => wz,
      J: () => gD,
      Jc: () => Gz,
      Jd: () => Rz,
      K: () => pD.q,
      Lb: () => sz,
      Lc: () => Uz,
      M: () => Dz,
      Nb: () => pD.R,
      Nd: () => yD,
      Oc: () => rz,
      P: () => pD.t,
      Pb: () => sD.d,
      Q: () => FD,
      Qb: () => VD,
      Qd: () => mD,
      Rc: () => pD.Bb,
      Sb: () => ND,
      Sc: () => pD.Fb,
      U: () => pD.y,
      Ud: () => ZD,
      Vd: () => aD,
      W: () => pD.B,
      Wb: () => bD,
      Wc: () => pD.Hb,
      Y: () => pD.E,
      Yd: () => eD,
      Zb: () => xD,
      Zc: () => qD,
      Zd: () => vD,
      ac: () => pD.Y,
      ae: () => uD,
      bd: () => pD.Jb,
      c: () => pz,
      cb: () => MD,
      eb: () => pD.F,
      ec: () => jD,
      ee: () => gz,
      f: () => GD,
      fb: () => pD.G,
      fc: () => ED,
      fd: () => pD.Lb,
      fe: () => hz,
      gb: () => kD,
      hc: () => cz,
      hd: () => pD.Mb,
      i: () => BD,
      ib: () => Lz,
      id: () => pD.Tb,
      ie: () => JD,
      kb: () => RD,
      ke: () => tD,
      l: () => Az,
      lc: () => OD,
      md: () => pD.Ub,
      nb: () => pD.J,
      nd: () => pD.Yb,
      ne: () => lD,
      o: () => PD,
      p: () => XD,
      pc: () => fz,
      pd: () => UD,
      pe: () => iD,
      q: () => pD.l,
      qc: () => sD.k,
      rb: () => oD,
      re: () => SD,
      sc: () => nD,
      sd: () => CD,
      se: () => cD,
      u: () => Iz,
      v: () => TD,
      vb: () => zz,
      vd: () => pD.Zb,
      wc: () => Kz,
      wd: () => pD.$b,
      we: () => WD,
      x: () => rD,
      yc: () => pD.gb,
      zb: () => YD
    });
    var pD = wD(4820),
      sD = wD(2382);
    const KD = Math.round(1e3 / pD.dc),
      rD = 4,
      LD = 2;

    function cD() {
      return crypto.getRandomValues(new Uint32Array(LD))
    }
    const gD = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      RD = 16,
      AD = {
        Draws: 1,
        NetAll: 2,
        StopForSends: 4
      },
      UD = 3,
      fD = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4,
        CellLight: 8,
        CellLightUnlit: 16
      };

    function ID(DD) {
      return (DD.nametagsHidden ? QD.NametagsHidden : 0) | (DD.crouchToggle ? QD.CrouchToggle : 0) | (DD.bhopDisabled ? QD.BhopDisabled : 0) | (DD.disableBobbing ? QD.DisableBobbing : 0) | (DD.ezTowering ? QD.EzTowering : 0) | (DD.ezBridging ? QD.EzBridging : 0) | (DD.showChunkBorders ? QD.ShowChunkBorders : 0)
    }
    const BD = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      GD = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      hD = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      nD = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      MD = 5,
      OD = 4294967295;

    function JD(DD) {
      const zD = {
        off: 0,
        lit: fD.CellLight,
        all: fD.CellLight | fD.CellLightUnlit
      } [DD.cellLight];
      return (DD.showFog ? fD.ShowFog : 0) | (DD.lighting ? fD.Lighting : 0) | (DD.chunkFade ? fD.ChunkFade : 0) | zD
    }
    const ED = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      QD = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      XD = {
        Release: 1,
        KeepTouches: 2
      },
      VD = {
        Point: 1,
        Stamped: 2
      },
      PD = {
        Add: 1,
        Clear: 2
      },
      CD = 1,
      xD = 8,
      TD = 16777215,
      bD = 4,
      jD = {
        Resume: 1
      },
      dD = {
        Held: 1
      };

    function SD(DD, zD) {
      return (DD | zD << 8) >>> 0
    }

    function iD(DD) {
      return 255 & DD
    }

    function lD(DD) {
      return DD >>> 8
    }

    function WD(DD) {
      return DD + 3 & -4
    }
    const ND = 16777216,
      ZD = 20;
    const yD = 8,
      kD = 8,
      mD = 16777216,
      eD = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      oD = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      aD = 16,
      uD = {
        Lost: 0,
        Gone: 1
      },
      vD = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function tD(DD) {
      return DD === vD.WorldgenSeed || DD === vD.Generate
    }
    const FD = 4,
      YD = 99,
      HD = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      qD = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 2,
        LOST: 0,
        PIPELINE_FAILED: 1,
        RESTORE_LOST: 2
      },
      Dz = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      zz = {
        BYTES: 20,
        CHUNKS: 0,
        BYTES_HELD: 1,
        ASKED: 2,
        REPLACED: 3,
        DROPPED: 4
      },
      wz = 12,
      pz = 16,
      sz = 4,
      Kz = 12,
      rz = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Lz = 4,
      cz = 8,
      gz = 8,
      Rz = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Az = {
        Crit: 1,
        HitSelf: 2
      },
      Uz = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      fz = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Iz = 12,
      Bz = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Gz = 67108864;

    function hz(DD) {
      for (const [zD, wD] of Object.entries(pD.o))
        if (wD === DD) return zD;
      return `Unknown${DD}`
    }

    function nz(DD) {
      return {
        status: DD[pD.G.Status],
        lastError: DD[pD.G.LastError],
        lastErrorDetail: DD[pD.G.LastErrorDetail],
        errorCount: DD[pD.G.ErrorCount],
        frameIndex: DD[pD.G.FrameIndex],
        tickIndex: DD[pD.G.TickIndex],
        renderPending: DD[pD.G.RenderPending],
        firstView: DD[pD.G.FirstView],
        chunksCancelled: DD[pD.G.ChunksCancelled]
      }
    }
  },
  4808: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD,
      c: () => KD,
      f: () => sD
    });
    var pD = wD(4817);

    function sD(DD) {
      return "none" !== DD
    }

    function KD(DD, zD) {
      if (!DD) return "none";
      switch (zD) {
        case pD.Y.Drawn:
          return "drawn";
        case pD.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function rD(DD) {
      return "drawn" === DD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);