export const id = 73;
export const ids = [73];
export const modules = {
  3846: (cB, Bc, nc) => {
    nc.d(Bc, {
      Ab: () => mB,
      C: () => qB,
      D: () => Mc,
      Db: () => ec,
      G: () => yB,
      Hb: () => Nc,
      J: () => pc,
      L: () => hc,
      Lb: () => Ic,
      N: () => zB,
      Nb: () => wc,
      O: () => aB,
      Q: () => Dc,
      U: () => Cc,
      X: () => bB,
      _: () => lc,
      b: () => Wc,
      bb: () => gB,
      c: () => oc,
      e: () => fc,
      eb: () => Yc,
      f: () => Ec,
      g: () => Tc,
      h: () => Oc,
      hb: () => Sc,
      kb: () => tB,
      l: () => uc,
      n: () => sc,
      nb: () => Lc,
      pb: () => vB,
      r: () => Vc,
      rb: () => Uc,
      u: () => rB,
      ub: () => Zc,
      w: () => Pc,
      y: () => kB,
      yb: () => Qc
    });
    const Vc = 32,
      Ic = 33.333333333333336,
      rB = {
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
        PacingLagUs: 30
      },
      uc = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2
      },
      sc = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Mc = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Pc = {
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
      qB = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Oc = {
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
      Tc = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      fc = 4,
      mB = 4,
      ec = 65535,
      tB = {
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
      Sc = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      yB = 88,
      zB = 0,
      pc = 24,
      hc = 48,
      aB = 80,
      lc = {
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
      Yc = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Lc = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      gB = {
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
      Uc = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      bB = 65535,
      Zc = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Qc = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Cc = 2,
      vB = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Dc = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Nc = {
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
      Ec = {
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
      oc = {
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
      Wc = 8,
      wc = {
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
      kB = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  3828: (cB, Bc, nc) => {
    nc.d(Bc, {
      C: () => bB,
      F: () => yB,
      J: () => uc,
      M: () => sc,
      N: () => Lc,
      c: () => Yc,
      f: () => pc,
      i: () => Qc,
      l: () => Zc,
      m: () => Sc,
      n: () => aB,
      o: () => zB,
      r: () => hc,
      v: () => gB,
      z: () => Uc
    });
    var Vc = nc(3835);
    const Ic = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let rB = Ic;

    function uc(cB) {
      rB = null !== cB && void 0 !== cB ? cB : Ic
    }

    function sc() {
      return rB
    }
    const Mc = new Set,
      Pc = new Set;
    let qB = -1;
    const Oc = new Set,
      Tc = new Set;
    let fc = 0,
      mB = 0;
    const ec = new Set,
      tB = new Set;

    function Sc(cB) {
      return Mc.add(cB), () => {
        Mc.delete(cB)
      }
    }

    function yB(cB, Bc) {
      for (const Vc of Mc) try {
        Vc(cB)
      } catch (nc) {
        Bc(nc)
      }
    }

    function zB(cB) {
      return Pc.add(cB), () => {
        Pc.delete(cB)
      }
    }

    function pc(cB, Bc) {
      const nc = qB < 0 ? 0 : cB - qB;
      qB = cB;
      for (const Ic of Pc) try {
        Ic(nc)
      } catch (Vc) {
        Bc(Vc)
      }
    }

    function hc(cB) {
      return Oc.add(cB), () => {
        Oc.delete(cB)
      }
    }

    function aB(cB) {
      return Tc.add(cB), () => {
        Tc.delete(cB)
      }
    }
    let lc = 0;

    function Yc(cB) {
      lc += cB
    }

    function Lc() {
      const cB = lc;
      return lc = 0, cB
    }

    function gB(cB) {
      return ec.add(cB), () => {
        ec.delete(cB)
      }
    }

    function Uc(cB) {
      return tB.add(cB), () => {
        tB.delete(cB)
      }
    }

    function bB() {
      fc = 0, mB = 0, qB = -1
    }

    function Zc(cB, Bc) {
      if ("paced" === cB) return mB += Bc, null;
      if ("drawn" !== cB && "skipped" !== cB) return null;
      const nc = Bc + mB;
      return mB = 0, nc
    }

    function Qc(cB, Bc, nc, Ic) {
      const rB = (0, Vc.g)(Bc),
        uc = cB > 0 ? performance.now() : 0;
      for (let Vc = 0; Vc < cB; Vc++)
        for (const cB of ec) try {
          cB()
        } catch (sc) {
          Ic(sc)
        }
      if (cB > 0 && Yc(performance.now() - uc), null !== nc) {
        for (const cB of Oc) try {
          cB(nc)
        } catch (sc) {
          Ic(sc)
        }
        fc += nc
      }
      if ("drawn" === Bc) {
        const cB = fc;
        fc = 0;
        for (const Bc of Tc) try {
          Bc(cB)
        } catch (sc) {
          Ic(sc)
        }
      }
      for (const Vc of tB) try {
        Vc(cB, rB)
      } catch (sc) {
        Ic(sc)
      }
    }
  },
  3838: (cB, Bc, nc) => {
    nc.d(Bc, {
      A: () => sB,
      Ab: () => Uc,
      Ac: () => Vc.yb,
      Bd: () => Qc,
      Cb: () => Vc.C,
      D: () => iB,
      Dc: () => gB,
      Ec: () => Vc.Ab,
      F: () => Vc.c,
      Fd: () => Zc,
      Gb: () => hc,
      Gc: () => Vc.Db,
      Hb: () => cn,
      Hd: () => Mc,
      Ic: () => Vc.Lb,
      J: () => Pc,
      Kb: () => zB,
      Ld: () => vB,
      Mb: () => rn,
      Mc: () => rB,
      Md: () => qn,
      N: () => Vc.e,
      Nb: () => Ic.i,
      Nc: () => tB,
      Nd: () => fc,
      Qb: () => Sc,
      R: () => jB,
      Rb: () => Vc.G,
      Rc: () => nB,
      Sb: () => Vc.J,
      T: () => Vc.h,
      U: () => Vc.l,
      Vb: () => Vc.L,
      Vc: () => Ec,
      Y: () => Vc.n,
      Yc: () => Wc,
      Z: () => Oc,
      Zb: () => Vc.N,
      _c: () => Nc,
      ab: () => yB,
      bb: () => Vc.r,
      bc: () => Vc.O,
      cb: () => Vc.u,
      cc: () => Vc.X,
      cd: () => Xc,
      db: () => oc,
      e: () => dc,
      eb: () => Gc,
      f: () => ec,
      gb: () => qB,
      gc: () => MB,
      h: () => mB,
      hc: () => IB,
      hd: () => wc,
      jb: () => Vc.w,
      jc: () => Vc._,
      k: () => VB,
      l: () => Lc,
      lc: () => Vc.bb,
      ld: () => Fc,
      mb: () => kB,
      nb: () => Rc,
      nc: () => Vc.eb,
      oc: () => Kc,
      od: () => Hc,
      p: () => lc,
      pb: () => xB,
      r: () => Vc.b,
      rd: () => BB,
      sc: () => Vc.hb,
      sd: () => PB,
      tb: () => Ac,
      uc: () => Vc.kb,
      ud: () => pc,
      v: () => uB,
      vb: () => Ic.e,
      wc: () => Vc.nb,
      wd: () => Jc,
      x: () => bB,
      xb: () => Yc,
      xc: () => Vc.rb,
      xd: () => Cc,
      y: () => uc,
      zb: () => Dc,
      zc: () => Vc.ub
    });
    var Vc = nc(3846),
      Ic = nc(1927);
    const rB = Math.round(1e3 / Vc.Lb),
      uc = 4,
      sc = 2;

    function Mc() {
      return crypto.getRandomValues(new Uint32Array(sc))
    }
    const Pc = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      qB = 16,
      Oc = {
        Draws: 1,
        NetAll: 2
      },
      Tc = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function fc(cB) {
      return (cB.nametagsHidden ? aB.NametagsHidden : 0) | (cB.crouchToggle ? aB.CrouchToggle : 0) | (cB.bhopDisabled ? aB.BhopDisabled : 0) | (cB.disableBobbing ? aB.DisableBobbing : 0) | (cB.ezTowering ? aB.EzTowering : 0) | (cB.ezBridging ? aB.EzBridging : 0) | (cB.showChunkBorders ? aB.ShowChunkBorders : 0) | (cB.edgeGuard ? aB.EdgeGuard : 0)
    }
    const mB = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      ec = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      tB = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Sc = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      yB = 5,
      zB = 4294967295;

    function pc(cB) {
      return (cB.showFog ? Tc.ShowFog : 0) | (cB.lighting ? Tc.Lighting : 0) | (cB.chunkFade ? Tc.ChunkFade : 0)
    }
    const hc = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      aB = {
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
      lc = {
        Release: 1
      },
      Yc = {
        Point: 1
      },
      Lc = {
        Add: 1,
        Clear: 2
      },
      gB = 1,
      Uc = 8,
      bB = 16777215;

    function Zc(cB, Bc) {
      return (cB | Bc << 8) >>> 0
    }

    function Qc(cB) {
      return 255 & cB
    }

    function Cc(cB) {
      return cB >>> 8
    }

    function vB(cB) {
      return cB + 3 & -4
    }
    const Dc = 16777216,
      Nc = 16,
      Ec = 8,
      oc = 8,
      Wc = 16777216,
      wc = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      kB = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Xc = 16,
      Hc = {
        Lost: 0,
        Gone: 1
      },
      Fc = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Jc(cB) {
      return cB === Fc.WorldgenSeed || cB === Fc.Generate
    }
    const jB = 4,
      Rc = 99,
      iB = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Kc = {
        BYTES: 8,
        WEBGPU: 1,
        WEBGPU_LOSSES_MAX: 1
      },
      xB = 12,
      dc = 16,
      Ac = 4,
      Gc = 4,
      cn = 8,
      BB = 8,
      nB = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      VB = {
        Crit: 1,
        HitSelf: 2
      },
      IB = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      rn = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      uB = 12,
      sB = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4
      },
      MB = 67108864;

    function PB(cB) {
      for (const [Bc, nc] of Object.entries(Vc.c))
        if (nc === cB) return Bc;
      return `Unknown${cB}`
    }

    function qn(cB) {
      return {
        status: cB[Vc.u.Status],
        lastError: cB[Vc.u.LastError],
        lastErrorDetail: cB[Vc.u.LastErrorDetail],
        errorCount: cB[Vc.u.ErrorCount],
        frameIndex: cB[Vc.u.FrameIndex],
        tickIndex: cB[Vc.u.TickIndex],
        renderPending: cB[Vc.u.RenderPending],
        firstView: cB[Vc.u.FirstView],
        chunksCancelled: cB[Vc.u.ChunksCancelled]
      }
    }
  },
  3835: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      e: () => rB,
      g: () => Ic
    });
    var Vc = nc(3838);

    function Ic(cB) {
      return "none" !== cB
    }

    function rB(cB, Bc) {
      if (!cB) return "none";
      switch (Bc) {
        case Vc.Y.Drawn:
          return "drawn";
        case Vc.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function uc(cB) {
      return "drawn" === cB
    }
  },
  3857: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      h: () => rB,
      j: () => uc,
      k: () => Vc,
      m: () => sc
    });
    const Vc = {
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
      Ic = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      rB = {
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
      uc = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190]
      },
      sc = [16]
  },
  3866: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      e: () => uc,
      h: () => Mc
    });
    var Vc = nc(1927),
      Ic = nc(1934);
    const rB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function uc(cB) {
      return cB instanceof HTMLElement && (!!(cB.isContentEditable || cB instanceof HTMLTextAreaElement || cB instanceof HTMLSelectElement) || cB instanceof HTMLInputElement && !rB.has(cB.type))
    }

    function sc(cB) {
      let Bc = null;
      const nc = nc => {
          const Ic = uc(nc);
          Ic !== Bc && (Bc = Ic, cB(Vc.f.UiCapture, Vc.x.Keyboard, 0, 0, Ic ? Vc.x.Keyboard : 0))
        },
        Ic = cB => {
          nc(cB.target)
        },
        rB = cB => {
          nc(cB.relatedTarget)
        },
        sc = () => {
          nc(document.activeElement)
        },
        Mc = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Ic, Mc), document.addEventListener("focusout", rB, Mc), document.addEventListener("keydown", sc, Mc), nc(document.activeElement), () => {
        document.removeEventListener("focusin", Ic, Mc), document.removeEventListener("focusout", rB, Mc), document.removeEventListener("keydown", sc, Mc)
      }
    }

    function Mc(cB, Bc) {
      return (0, Ic.D)(cB, Bc)
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);