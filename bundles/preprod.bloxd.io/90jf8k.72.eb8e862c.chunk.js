export const id = 72;
export const ids = [72];
export const modules = {
  3793: (FF, WF, SF) => {
    SF.d(WF, {
      $: () => OF,
      A: () => uF,
      Cb: () => ZF,
      D: () => dF,
      Db: () => EF,
      Fb: () => QF,
      H: () => yW,
      Jb: () => cW,
      L: () => PF,
      Lb: () => AF,
      O: () => tW,
      Ob: () => fF,
      P: () => aW,
      R: () => kW,
      T: () => TF,
      U: () => qW,
      W: () => MF,
      Z: () => oF,
      bb: () => VF,
      e: () => IF,
      eb: () => LF,
      f: () => zW,
      fb: () => NF,
      g: () => eF,
      h: () => GF,
      j: () => iW,
      jb: () => gW,
      n: () => RF,
      nb: () => rW,
      p: () => hF,
      pb: () => DF,
      s: () => bW,
      tb: () => YF,
      w: () => CF,
      xb: () => mW,
      zb: () => xW
    });
    const CF = 32,
      AF = 33.333333333333336,
      uF = {
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
        FrameDraw: 28
      },
      hF = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2
      },
      bW = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      dF = {
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
        EnvPrefs: 32
      },
      PF = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      RF = {
        RawMessage: 1,
        CoreErrors: 2,
        LocalHurt: 16,
        AttackHit: 17,
        HealthChanged: 18,
        LocalPlayerBound: 19,
        ConnectionState: 20,
        GameCalls: 96,
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
      iW = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      eF = 4,
      EF = 4,
      QF = 65535,
      rW = {
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
      gW = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      tW = 88,
      TF = 0,
      aW = 24,
      kW = 48,
      qW = 80,
      VF = {
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
      NF = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      DF = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      LF = {
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
      mW = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      OF = 65535,
      xW = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      ZF = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      oF = 2,
      YF = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      MF = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      cW = {
        SkyTable: 600,
        SkyImagesReady: 601,
        SkyTableHeaderBytes: 8,
        SkyTableEntryBytes: 92,
        SkyImagesReadyBytes: 32,
        KindNone: 0,
        KindCustom: 1,
        KindEarth: 2,
        CubeFaces: 6,
        Failed: 0
      },
      GF = {
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
      zW = {
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
      IF = 8,
      fF = {
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
        ProgressBarUpdate: 33,
        RemoveMiddleScreenBar: 90,
        WorldVariation: 5,
        EditItemCraftingRecipes: 78
      },
      yW = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  3773: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => xW,
      D: () => TF,
      H: () => hF,
      I: () => bW,
      J: () => LF,
      d: () => DF,
      h: () => kW,
      i: () => oF,
      k: () => ZF,
      m: () => tW,
      q: () => VF,
      s: () => aW,
      u: () => qW,
      w: () => mW,
      y: () => OF
    });
    var CF = SF(3780);
    const AF = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let uF = AF;

    function hF(FF) {
      uF = null !== FF && void 0 !== FF ? FF : AF
    }

    function bW() {
      return uF
    }
    const dF = new Set,
      PF = new Set;
    let RF = -1;
    const iW = new Set,
      eF = new Set;
    let EF = 0,
      QF = 0;
    const rW = new Set,
      gW = new Set;

    function tW(FF) {
      return dF.add(FF), () => {
        dF.delete(FF)
      }
    }

    function TF(FF, WF) {
      for (const CF of dF) try {
        CF(FF)
      } catch (SF) {
        WF(SF)
      }
    }

    function aW(FF) {
      return PF.add(FF), () => {
        PF.delete(FF)
      }
    }

    function kW(FF, WF) {
      const SF = RF < 0 ? 0 : FF - RF;
      RF = FF;
      for (const AF of PF) try {
        AF(SF)
      } catch (CF) {
        WF(CF)
      }
    }

    function qW(FF) {
      return iW.add(FF), () => {
        iW.delete(FF)
      }
    }

    function VF(FF) {
      return eF.add(FF), () => {
        eF.delete(FF)
      }
    }
    let NF = 0;

    function DF(FF) {
      NF += FF
    }

    function LF() {
      const FF = NF;
      return NF = 0, FF
    }

    function mW(FF) {
      return rW.add(FF), () => {
        rW.delete(FF)
      }
    }

    function OF(FF) {
      return gW.add(FF), () => {
        gW.delete(FF)
      }
    }

    function xW() {
      EF = 0, QF = 0, RF = -1
    }

    function ZF(FF, WF) {
      if ("paced" === FF) return QF += WF, null;
      if ("drawn" !== FF && "skipped" !== FF) return null;
      const SF = WF + QF;
      return QF = 0, SF
    }

    function oF(FF, WF, SF, AF) {
      const uF = (0, CF.k)(WF),
        hF = FF > 0 ? performance.now() : 0;
      for (let CF = 0; CF < FF; CF++)
        for (const FF of rW) try {
          FF()
        } catch (bW) {
          AF(bW)
        }
      if (FF > 0 && DF(performance.now() - hF), null !== SF) {
        for (const FF of iW) try {
          FF(SF)
        } catch (bW) {
          AF(bW)
        }
        EF += SF
      }
      if ("drawn" === WF) {
        const FF = EF;
        EF = 0;
        for (const WF of eF) try {
          WF(FF)
        } catch (bW) {
          AF(bW)
        }
      }
      for (const CF of gW) try {
        CF(FF, uF)
      } catch (bW) {
        AF(bW)
      }
    }
  },
  3786: (FF, WF, SF) => {
    SF.d(WF, {
      $c: () => gW,
      $d: () => MF,
      B: () => hF,
      Cb: () => OF,
      Cd: () => HF,
      Dc: () => CF.pb,
      F: () => bS,
      Fd: () => WW,
      Gb: () => CF.L,
      Gc: () => CF.xb,
      H: () => BF,
      I: () => CF.f,
      Ib: () => qW,
      J: () => PF,
      Jd: () => PW,
      Kc: () => CF.zb,
      Lc: () => CF.Cb,
      Ld: () => kW,
      M: () => CF.g,
      Mb: () => FW,
      Mc: () => mW,
      Md: () => wF,
      Nb: () => aW,
      Oc: () => CF.Db,
      Od: () => YF,
      Pb: () => uW,
      Q: () => XF,
      Qb: () => AF.m,
      R: () => CF.n,
      Sb: () => tW,
      Sc: () => CF.Fb,
      Sd: () => oF,
      T: () => CF.p,
      U: () => CF.s,
      Ub: () => CF.O,
      Vc: () => CF.Lb,
      Vd: () => ZF,
      W: () => iW,
      Wb: () => CF.P,
      Xc: () => uF,
      Yd: () => dF,
      Z: () => TF,
      Zb: () => CF.R,
      _: () => CF.w,
      bc: () => CF.T,
      bd: () => SW,
      cb: () => CF.A,
      cd: () => zW,
      db: () => IF,
      dd: () => fF,
      de: () => RW,
      e: () => JF,
      eb: () => lF,
      ec: () => CF.U,
      fc: () => CF.$,
      g: () => rW,
      gb: () => RF,
      hb: () => CF.D,
      hd: () => GF,
      he: () => EF,
      ic: () => dW,
      j: () => QF,
      jb: () => sF,
      jd: () => nF,
      lb: () => UF,
      lc: () => AW,
      m: () => CW,
      nb: () => vW,
      p: () => LF,
      pb: () => pF,
      pc: () => CF.bb,
      r: () => NF,
      rb: () => AF.h,
      rc: () => CF.eb,
      sc: () => CF.fb,
      tc: () => jW,
      u: () => CF.e,
      ub: () => DF,
      ud: () => yW,
      vc: () => CF.jb,
      y: () => hW,
      yb: () => cW,
      yd: () => KF,
      z: () => xW,
      zc: () => CF.nb
    });
    var CF = SF(3793),
      AF = SF(1939);
    const uF = Math.round(1e3 / CF.Lb),
      hF = 4,
      bW = 2;

    function dF() {
      return crypto.getRandomValues(new Uint32Array(bW))
    }
    const PF = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      RF = 16,
      iW = {
        Draws: 1,
        NetAll: 2
      },
      eF = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function EF(FF) {
      return (FF.nametagsHidden ? VF.NametagsHidden : 0) | (FF.crouchToggle ? VF.CrouchToggle : 0) | (FF.bhopDisabled ? VF.BhopDisabled : 0) | (FF.disableBobbing ? VF.DisableBobbing : 0) | (FF.ezTowering ? VF.EzTowering : 0) | (FF.ezBridging ? VF.EzBridging : 0) | (FF.showChunkBorders ? VF.ShowChunkBorders : 0) | (FF.edgeGuard ? VF.EdgeGuard : 0)
    }
    const QF = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      rW = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      gW = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      tW = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      TF = 5,
      aW = 4294967295;

    function kW(FF) {
      return (FF.showFog ? eF.ShowFog : 0) | (FF.lighting ? eF.Lighting : 0) | (FF.chunkFade ? eF.ChunkFade : 0)
    }
    const qW = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      VF = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        EdgeGuard: 128,
        All: 255
      },
      NF = {
        Release: 1
      },
      DF = {
        Point: 1
      },
      LF = {
        Add: 1,
        Clear: 2
      },
      mW = 1,
      OF = 8,
      xW = 16777215;

    function ZF(FF, WF) {
      return (FF | WF << 8) >>> 0
    }

    function oF(FF) {
      return 255 & FF
    }

    function YF(FF) {
      return FF >>> 8
    }

    function MF(FF) {
      return FF + 3 & -4
    }
    const cW = 16777216,
      GF = 16,
      zW = 8,
      IF = 8,
      fF = 16777216,
      yW = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      sF = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      nF = 16,
      HF = {
        Lost: 0,
        Gone: 1
      },
      KF = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function wF(FF) {
      return FF === KF.WorldgenSeed || FF === KF.Generate
    }
    const XF = 4,
      UF = 99,
      BF = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      jW = {
        BYTES: 8,
        WEBGPU: 1,
        WEBGPU_LOSSES_MAX: 1
      },
      vW = 12,
      JF = 16,
      pF = 4,
      lF = 4,
      FW = 8,
      WW = 8,
      SW = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      CW = {
        Crit: 1,
        HitSelf: 2
      },
      AW = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      uW = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      hW = 12,
      bS = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4
      },
      dW = 67108864;

    function PW(FF) {
      for (const [WF, SF] of Object.entries(CF.f))
        if (SF === FF) return WF;
      return `Unknown${FF}`
    }

    function RW(FF) {
      return {
        status: FF[CF.A.Status],
        lastError: FF[CF.A.LastError],
        lastErrorDetail: FF[CF.A.LastErrorDetail],
        errorCount: FF[CF.A.ErrorCount],
        frameIndex: FF[CF.A.FrameIndex],
        tickIndex: FF[CF.A.TickIndex],
        renderPending: FF[CF.A.RenderPending],
        firstView: FF[CF.A.FirstView],
        chunksCancelled: FF[CF.A.ChunksCancelled]
      }
    }
  },
  3780: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF,
      g: () => uF,
      k: () => AF
    });
    var CF = SF(3786);

    function AF(FF) {
      return "none" !== FF
    }

    function uF(FF, WF) {
      if (!FF) return "none";
      switch (WF) {
        case CF.U.Drawn:
          return "drawn";
        case CF.U.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function hF(FF) {
      return "drawn" === FF
    }
  },
  3802: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => dF,
      g: () => uF,
      h: () => bW
    });
    var CF = SF(1939),
      AF = SF(3810);

    function uF(FF) {
      let {
        action: WF,
        flags: SF
      } = FF;
      return "mid-fire" === WF && 0 !== (SF & CF.e.AltLeftClick)
    }
    const hF = new Set;

    function bW(FF) {
      return hF.add(FF), () => {
        hF.delete(FF)
      }
    }

    function dF(FF) {
      const WF = AF.b[255 & FF];
      if (void 0 === WF) return;
      const SF = FF >>> 8 & 255,
        uF = {
          action: WF,
          down: 0 !== (SF & CF.e.Down),
          flags: SF,
          press: FF >>> 16
        };
      for (const CF of hF) CF(uF)
    }
  },
  3810: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF,
      f: () => uF,
      g: () => hF,
      i: () => CF,
      k: () => bW
    });
    const CF = {
        Mouse1: 1,
        Mouse2: 2,
        Mouse3: 3,
        "Alt+Left Click": 4,
        F2: 5,
        F4: 6,
        F5: 7,
        F8: 8,
        F9: 9,
        Digit0: 10,
        Digit1: 11,
        Digit2: 12,
        Digit3: 13,
        Digit4: 14,
        Digit5: 15,
        Digit6: 16,
        Digit7: 17,
        Digit8: 18,
        Digit9: 19,
        KeyQ: 20,
        KeyW: 21,
        KeyE: 22,
        KeyR: 23,
        KeyT: 24,
        KeyY: 25,
        KeyU: 26,
        KeyI: 27,
        KeyO: 28,
        KeyP: 29,
        KeyA: 30,
        KeyS: 31,
        KeyD: 32,
        KeyF: 33,
        KeyG: 34,
        KeyH: 35,
        KeyJ: 36,
        KeyK: 37,
        KeyL: 38,
        KeyZ: 39,
        KeyX: 40,
        KeyC: 41,
        KeyV: 42,
        KeyB: 43,
        KeyN: 44,
        KeyM: 45,
        ArrowUp: 46,
        ArrowLeft: 47,
        ArrowRight: 48,
        ArrowDown: 49,
        ShiftLeft: 50,
        ShiftRight: 51,
        ControlLeft: 52,
        ControlRight: 53,
        Minus: 54,
        Equal: 55,
        BracketLeft: 56,
        BracketRight: 57,
        Tab: 58,
        Space: 59,
        CapsLock: 60,
        Backslash: 61,
        IntlBackslash: 62,
        PageUp: 63,
        PageDown: 64,
        Backquote: 65,
        Comma: 66,
        IntlRo: 67,
        IntlYen: 68,
        Period: 69,
        Quote: 70,
        Semicolon: 71,
        Slash: 72,
        AltLeft: 73,
        AltRight: 74,
        Backspace: 75,
        ContextMenu: 76,
        Enter: 77,
        MetaLeft: 78,
        MetaRight: 79,
        Convert: 80,
        KanaMode: 81,
        Lang1: 82,
        Lang2: 83,
        Lang3: 84,
        Lang4: 85,
        Lang5: 86,
        NonConvert: 87,
        Delete: 88,
        End: 89,
        Help: 90,
        Home: 91,
        Insert: 92,
        NumLock: 93,
        Numpad0: 94,
        Numpad1: 95,
        Numpad2: 96,
        Numpad3: 97,
        Numpad4: 98,
        Numpad5: 99,
        Numpad6: 100,
        Numpad7: 101,
        Numpad8: 102,
        Numpad9: 103,
        NumpadAdd: 104,
        NumpadBackspace: 105,
        NumpadClear: 106,
        NumpadClearEntry: 107,
        NumpadComma: 108,
        NumpadDecimal: 109,
        NumpadDivide: 110,
        NumpadEnter: 111,
        NumpadEqual: 112,
        NumpadHash: 113,
        NumpadMemoryAdd: 114,
        NumpadMemoryClear: 115,
        NumpadMemoryRecall: 116,
        NumpadMemoryStore: 117,
        NumpadMemorySubtract: 118,
        NumpadMultiply: 119,
        NumpadParenLeft: 120,
        NumpadParenRight: 121,
        NumpadStar: 122,
        NumpadSubtract: 123,
        Escape: 124,
        F1: 125,
        F3: 126,
        F6: 127,
        F7: 128,
        F10: 129,
        F11: 130,
        F12: 131,
        F13: 132,
        F14: 133,
        F15: 134,
        F16: 135,
        F17: 136,
        F18: 137,
        F19: 138,
        F20: 139,
        F21: 140,
        F22: 141,
        F23: 142,
        F24: 143,
        Fn: 144,
        FnLock: 145,
        PrintScreen: 146,
        ScrollLock: 147,
        Pause: 148,
        BrowserBack: 149,
        BrowserFavorites: 150,
        BrowserForward: 151,
        BrowserHome: 152,
        BrowserRefresh: 153,
        BrowserSearch: 154,
        BrowserStop: 155,
        Eject: 156,
        LaunchApp1: 157,
        LaunchApp2: 158,
        LaunchMail: 159,
        MediaPlayPause: 160,
        MediaSelect: 161,
        MediaStop: 162,
        MediaTrackNext: 163,
        MediaTrackPrevious: 164,
        Power: 165,
        Sleep: 166,
        AudioVolumeDown: 167,
        AudioVolumeMute: 168,
        AudioVolumeUp: 169,
        WakeUp: 170,
        Hyper: 171,
        Super: 172,
        Turbo: 173,
        Abort: 174,
        Resume: 175,
        Suspend: 176,
        Again: 177,
        Copy: 178,
        Cut: 179,
        Find: 180,
        Open: 181,
        Paste: 182,
        Props: 183,
        Select: 184,
        Undo: 185,
        Hiragana: 186,
        Katakana: 187,
        TouchJump: 188,
        TouchCrouch: 189,
        TouchPov: 190,
        TouchAction1: 191,
        TouchAction2: 192,
        TouchAction3: 193
      },
      AF = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      uF = {
        forward: [21, 46],
        backward: [31, 49],
        left: [30, 47],
        right: [32, 48],
        sprint: [50, 51],
        jump: [59],
        crouch: [52, 41, 60, 61, 62, 53],
        "primary-fire": [1],
        "alt-fire": [3, 22],
        SpecialAction1: [23],
        SpecialAction2: [33],
        ReloadGun: [23],
        DropItem: [20],
        "mid-fire": [2, 4],
        Zoom: [42],
        SwapCameraZoom: [29, 7],
        OpenInventory: [58],
        OpenLobbyLeaderboard: [34],
        OpenShop: [43],
        OpenCharacterCustomization: [44],
        OpenSettings: [28],
        OpenInviteLink: [27],
        OpenTasksAndLeaderboard: [45],
        OpenCodeEditor: [8],
        OpenEmoteWheel: [39, 2],
        HideUi: [6],
        ShowDebugOverlay: [5],
        HotBarSlot1: [11],
        HotBarSlot2: [12],
        HotBarSlot3: [13],
        HotBarSlot4: [14],
        HotBarSlot5: [15],
        HotBarSlot6: [16],
        HotBarSlot7: [17],
        HotBarSlot8: [18],
        HotBarSlot9: [19],
        HotBarSlot10: [10],
        toggleFreeCam: [9],
        freeCamForward: [46],
        freeCamBackward: [49],
        freeCamLeft: [47],
        freeCamRight: [48],
        freeCamUp: [63],
        freeCamDown: [64],
        recordGame: [56],
        recordClip: [35],
        replayViewerOpen: [26],
        replayPlayPause: [42, 58],
        replaySkipBack: [20],
        replaySkipForward: [22],
        replayChangeCameraMode: [23],
        replayLoad: [38],
        replaySave: [37],
        replaySaveAs: [36],
        replayExit: [29],
        replaySpeedUp: [55],
        replaySpeedDown: [54],
        replayTimelineZoomIn: [10],
        replayTimelineZoomOut: [19],
        replayRecordKeyframe: [24],
        replayExportVideo: [40]
      },
      hF = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190]
      },
      bW = [16]
  },
  3812: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => bW,
      d: () => hF,
      h: () => dF
    });
    var CF = SF(1939),
      AF = SF(1943);
    const uF = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function hF(FF) {
      return FF instanceof HTMLElement && (!!(FF.isContentEditable || FF instanceof HTMLTextAreaElement || FF instanceof HTMLSelectElement) || FF instanceof HTMLInputElement && !uF.has(FF.type))
    }

    function bW(FF) {
      let WF = null;
      const SF = SF => {
          const AF = hF(SF);
          AF !== WF && (WF = AF, FF(CF.i.UiCapture, CF.z.Keyboard, 0, 0, AF ? CF.z.Keyboard : 0))
        },
        AF = FF => {
          SF(FF.target)
        },
        uF = FF => {
          SF(FF.relatedTarget)
        },
        bW = () => {
          SF(document.activeElement)
        },
        dF = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", AF, dF), document.addEventListener("focusout", uF, dF), document.addEventListener("keydown", bW, dF), SF(document.activeElement), () => {
        document.removeEventListener("focusin", AF, dF), document.removeEventListener("focusout", uF, dF), document.removeEventListener("keydown", bW, dF)
      }
    }

    function dF(FF, WF) {
      return (0, AF.w)(FF, WF)
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);