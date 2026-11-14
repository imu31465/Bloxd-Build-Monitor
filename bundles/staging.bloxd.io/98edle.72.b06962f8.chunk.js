export const id = 72;
export const ids = [72];
export const modules = {
  3775: (WW, RW, MW) => {
    MW.d(RW, {
      $: () => FW,
      A: () => mR,
      B: () => NW,
      Db: () => gR,
      F: () => JW,
      Fb: () => pW,
      I: () => IW,
      Jb: () => CW,
      Kb: () => VW,
      L: () => oW,
      M: () => PW,
      P: () => lW,
      T: () => dW,
      V: () => aR,
      Y: () => XW,
      ab: () => rR,
      e: () => EW,
      eb: () => fW,
      i: () => UW,
      ib: () => YW,
      k: () => tR,
      l: () => hW,
      lb: () => iR,
      m: () => BW,
      mb: () => QW,
      n: () => eW,
      p: () => AW,
      pb: () => sW,
      r: () => bR,
      sb: () => cR,
      t: () => wW,
      tb: () => jR,
      w: () => zR,
      wb: () => kR,
      z: () => yR,
      zb: () => TW
    });
    const wW = 32,
      CW = 33.333333333333336,
      zR = {
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
      AW = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2
      },
      bR = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      yR = {
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
      NW = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      eW = {
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
      BW = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      tR = 4,
      TW = 4,
      gR = 65535,
      iR = {
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
      YW = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      JW = 88,
      PW = 0,
      IW = 24,
      oW = 48,
      lW = 80,
      FW = {
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
      fW = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      QW = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      rR = {
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
      cR = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      XW = 65535,
      jR = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      kR = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      aR = 2,
      sW = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      dW = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      pW = {
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
      hW = {
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
      UW = {
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
      EW = 8,
      VW = {
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
      mR = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  3756: (WW, RW, MW) => {
    MW.d(RW, {
      C: () => PW,
      G: () => AW,
      I: () => bR,
      M: () => rR,
      c: () => QW,
      g: () => oW,
      i: () => aR,
      j: () => kR,
      l: () => JW,
      p: () => FW,
      r: () => IW,
      s: () => lW,
      t: () => cR,
      v: () => XW,
      z: () => jR
    });
    var wW = MW(3765);
    const CW = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let zR = CW;

    function AW(WW) {
      zR = null !== WW && void 0 !== WW ? WW : CW
    }

    function bR() {
      return zR
    }
    const yR = new Set,
      NW = new Set;
    let eW = -1;
    const BW = new Set,
      tR = new Set;
    let TW = 0,
      gR = 0;
    const iR = new Set,
      YW = new Set;

    function JW(WW) {
      return yR.add(WW), () => {
        yR.delete(WW)
      }
    }

    function PW(WW, RW) {
      for (const wW of yR) try {
        wW(WW)
      } catch (MW) {
        RW(MW)
      }
    }

    function IW(WW) {
      return NW.add(WW), () => {
        NW.delete(WW)
      }
    }

    function oW(WW, RW) {
      const MW = eW < 0 ? 0 : WW - eW;
      eW = WW;
      for (const CW of NW) try {
        CW(MW)
      } catch (wW) {
        RW(wW)
      }
    }

    function lW(WW) {
      return BW.add(WW), () => {
        BW.delete(WW)
      }
    }

    function FW(WW) {
      return tR.add(WW), () => {
        tR.delete(WW)
      }
    }
    let fW = 0;

    function QW(WW) {
      fW += WW
    }

    function rR() {
      const WW = fW;
      return fW = 0, WW
    }

    function cR(WW) {
      return iR.add(WW), () => {
        iR.delete(WW)
      }
    }

    function XW(WW) {
      return YW.add(WW), () => {
        YW.delete(WW)
      }
    }

    function jR() {
      TW = 0, gR = 0, eW = -1
    }

    function kR(WW, RW) {
      if ("paced" === WW) return gR += RW, null;
      if ("drawn" !== WW && "skipped" !== WW) return null;
      const MW = RW + gR;
      return gR = 0, MW
    }

    function aR(WW, RW, MW, CW) {
      const zR = (0, wW.f)(RW),
        AW = WW > 0 ? performance.now() : 0;
      for (let wW = 0; wW < WW; wW++)
        for (const WW of iR) try {
          WW()
        } catch (bR) {
          CW(bR)
        }
      if (WW > 0 && QW(performance.now() - AW), null !== MW) {
        for (const WW of BW) try {
          WW(MW)
        } catch (bR) {
          CW(bR)
        }
        TW += MW
      }
      if ("drawn" === RW) {
        const WW = TW;
        TW = 0;
        for (const RW of tR) try {
          RW(WW)
        } catch (bR) {
          CW(bR)
        }
      }
      for (const wW of YW) try {
        wW(WW, zR)
      } catch (bR) {
        CW(bR)
      }
    }
  },
  3773: (WW, RW, MW) => {
    MW.d(RW, {
      $: () => wW.t,
      $c: () => YW,
      Ab: () => XW,
      Ac: () => wW.ib,
      Ad: () => NR,
      B: () => wW.i,
      Dc: () => wW.lb,
      Dd: () => oW,
      E: () => NW,
      Eb: () => wW.B,
      Ed: () => OW,
      F: () => wW.k,
      Fc: () => wW.mb,
      Fd: () => sW,
      Gd: () => aR,
      Hc: () => wW.sb,
      Ib: () => lW,
      Id: () => kR,
      J: () => nW,
      Kc: () => wW.tb,
      Lc: () => wW.wb,
      Ld: () => yR,
      Mb: () => WR,
      Mc: () => cR,
      Md: () => dW,
      N: () => wW.n,
      Ob: () => IW,
      Pd: () => eR,
      Qb: () => zM,
      Qc: () => wW.zb,
      R: () => wW.p,
      Sd: () => TW,
      Ub: () => CW.l,
      Uc: () => wW.Db,
      V: () => wW.r,
      Xc: () => wW.Jb,
      Y: () => BW,
      Yb: () => JW,
      Z: () => PW,
      _b: () => wW.F,
      _c: () => zR,
      ac: () => wW.I,
      bb: () => wW.w,
      bd: () => MR,
      cb: () => EW,
      cc: () => wW.L,
      d: () => qR,
      db: () => SW,
      e: () => iR,
      ed: () => UW,
      fb: () => eW,
      fc: () => wW.M,
      h: () => gR,
      hc: () => wW.P,
      i: () => wR,
      id: () => VW,
      jb: () => wW.z,
      jd: () => hW,
      kb: () => xR,
      lb: () => GW,
      lc: () => wW.Y,
      m: () => rR,
      mb: () => DW,
      md: () => vR,
      n: () => fW,
      o: () => wW.e,
      ob: () => ZW,
      oc: () => yM,
      p: () => AR,
      pc: () => CR,
      r: () => jR,
      rd: () => mR,
      sb: () => CW.f,
      sc: () => wW.$,
      sd: () => uW,
      u: () => AW,
      uc: () => wW.ab,
      vc: () => wW.eb,
      vd: () => KW,
      w: () => bM,
      wb: () => QW,
      xc: () => HW,
      xd: () => RR,
      y: () => LW,
      yb: () => pW
    });
    var wW = MW(3775),
      CW = MW(1939);
    const zR = Math.round(1e3 / wW.Jb),
      AW = 4,
      bR = 2;

    function yR() {
      return crypto.getRandomValues(new Uint32Array(bR))
    }
    const NW = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      eW = 16,
      BW = {
        Draws: 1,
        NetAll: 2
      },
      tR = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function TW(WW) {
      return (WW.nametagsHidden ? FW.NametagsHidden : 0) | (WW.crouchToggle ? FW.CrouchToggle : 0) | (WW.bhopDisabled ? FW.BhopDisabled : 0) | (WW.disableBobbing ? FW.DisableBobbing : 0) | (WW.ezTowering ? FW.EzTowering : 0) | (WW.ezBridging ? FW.EzBridging : 0) | (WW.showChunkBorders ? FW.ShowChunkBorders : 0) | (WW.edgeGuard ? FW.EdgeGuard : 0)
    }
    const gR = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      iR = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      YW = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      JW = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      PW = 5,
      IW = 4294967295;

    function oW(WW) {
      return (WW.showFog ? tR.ShowFog : 0) | (WW.lighting ? tR.Lighting : 0) | (WW.chunkFade ? tR.ChunkFade : 0)
    }
    const lW = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      FW = {
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
      fW = {
        Release: 1
      },
      QW = {
        Point: 1
      },
      rR = {
        Add: 1,
        Clear: 2
      },
      cR = 1,
      XW = 8,
      jR = 16777215;

    function kR(WW, RW) {
      return (WW | RW << 8) >>> 0
    }

    function aR(WW) {
      return 255 & WW
    }

    function sW(WW) {
      return WW >>> 8
    }

    function dW(WW) {
      return WW + 3 & -4
    }
    const pW = 16777216,
      hW = 16,
      UW = 8,
      EW = 8,
      VW = 16777216,
      mR = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      xR = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      vR = 16,
      KW = {
        Lost: 0,
        Gone: 1
      },
      uW = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function OW(WW) {
      return WW === uW.WorldgenSeed || WW === uW.Generate
    }
    const nW = 4,
      GW = 99,
      LW = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      HW = {
        BYTES: 8,
        WEBGPU: 1,
        WEBGPU_LOSSES_MAX: 1
      },
      DW = 12,
      qR = 16,
      ZW = 4,
      SW = 4,
      WR = 8,
      RR = 8,
      MR = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      wR = {
        Crit: 1,
        HitSelf: 2
      },
      CR = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      zM = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      AR = 12,
      bM = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4
      },
      yM = 67108864;

    function NR(WW) {
      for (const [RW, MW] of Object.entries(wW.i))
        if (MW === WW) return RW;
      return `Unknown${WW}`
    }

    function eR(WW) {
      return {
        status: WW[wW.w.Status],
        lastError: WW[wW.w.LastError],
        lastErrorDetail: WW[wW.w.LastErrorDetail],
        errorCount: WW[wW.w.ErrorCount],
        frameIndex: WW[wW.w.FrameIndex],
        tickIndex: WW[wW.w.TickIndex],
        renderPending: WW[wW.w.RenderPending],
        firstView: WW[wW.w.FirstView],
        chunksCancelled: WW[wW.w.ChunksCancelled]
      }
    }
  },
  3765: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      d: () => zR,
      f: () => CW
    });
    var wW = MW(3773);

    function CW(WW) {
      return "none" !== WW
    }

    function zR(WW, RW) {
      if (!WW) return "none";
      switch (RW) {
        case wW.V.Drawn:
          return "drawn";
        case wW.V.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function AW(WW) {
      return "drawn" === WW
    }
  },
  3777: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => yR,
      i: () => zR,
      l: () => bR
    });
    var wW = MW(1939),
      CW = MW(3781);

    function zR(WW) {
      let {
        action: RW,
        flags: MW
      } = WW;
      return "mid-fire" === RW && 0 !== (MW & wW.c.AltLeftClick)
    }
    const AW = new Set;

    function bR(WW) {
      return AW.add(WW), () => {
        AW.delete(WW)
      }
    }

    function yR(WW) {
      const RW = CW.b[255 & WW];
      if (void 0 === RW) return;
      const MW = WW >>> 8 & 255,
        zR = {
          action: RW,
          down: 0 !== (MW & wW.c.Down),
          flags: MW,
          press: WW >>> 16
        };
      for (const wW of AW) wW(zR)
    }
  },
  3781: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW,
      e: () => zR,
      h: () => AW,
      k: () => wW,
      m: () => bR
    });
    const wW = {
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
      CW = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      zR = {
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
      AW = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190]
      },
      bR = [16]
  },
  3790: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => bR,
      f: () => AW,
      j: () => yR
    });
    var wW = MW(1939),
      CW = MW(1945);
    const zR = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function AW(WW) {
      return WW instanceof HTMLElement && (!!(WW.isContentEditable || WW instanceof HTMLTextAreaElement || WW instanceof HTMLSelectElement) || WW instanceof HTMLInputElement && !zR.has(WW.type))
    }

    function bR(WW) {
      let RW = null;
      const MW = MW => {
          const CW = AW(MW);
          CW !== RW && (RW = CW, WW(wW.j.UiCapture, wW.z.Keyboard, 0, 0, CW ? wW.z.Keyboard : 0))
        },
        CW = WW => {
          MW(WW.target)
        },
        zR = WW => {
          MW(WW.relatedTarget)
        },
        bR = () => {
          MW(document.activeElement)
        },
        yR = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", CW, yR), document.addEventListener("focusout", zR, yR), document.addEventListener("keydown", bR, yR), MW(document.activeElement), () => {
        document.removeEventListener("focusin", CW, yR), document.removeEventListener("focusout", zR, yR), document.removeEventListener("keydown", bR, yR)
      }
    }

    function yR(WW, RW) {
      return (0, CW.B)(WW, RW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);