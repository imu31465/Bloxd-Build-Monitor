export const id = 76;
export const ids = [76];
export const modules = {
  4001: (yb, bb, Wy) => {
    Wy.d(bb, {
      $: () => ib,
      B: () => Ly,
      Cb: () => Yy,
      D: () => By,
      F: () => Py,
      Gb: () => sy,
      H: () => mb,
      I: () => Ty,
      Jb: () => Sy,
      M: () => Vy,
      Nb: () => rb,
      Pb: () => hy,
      Q: () => Cy,
      T: () => Jy,
      Tb: () => py,
      W: () => uy,
      Y: () => Xy,
      bb: () => gb,
      c: () => Fy,
      cb: () => Ry,
      db: () => Gy,
      f: () => ab,
      hb: () => ly,
      j: () => qb,
      jb: () => Ey,
      m: () => Hy,
      nb: () => Oy,
      o: () => ey,
      q: () => Ky,
      r: () => Zy,
      rb: () => ny,
      u: () => cb,
      v: () => Uy,
      vb: () => vb,
      x: () => fy,
      yb: () => My,
      z: () => oy
    });
    const Uy = 32,
      hy = 33.333333333333336,
      fy = {
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
      Zy = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2
      },
      cb = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Py = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      oy = {
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
      By = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Ky = {
        RawMessage: 1,
        CoreErrors: 2,
        LocalHurt: 16,
        AttackHit: 17,
        HealthChanged: 18,
        LocalPlayerBound: 19,
        ConnectionState: 20,
        ReconnectGrace: 5,
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
      ey = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      qb = 4,
      sy = 4,
      Sy = 65535,
      Ey = {
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
      ly = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      mb = 88,
      Cy = 0,
      Ty = 24,
      Vy = 48,
      Jy = 80,
      gb = {
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
      Gy = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Oy = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Ry = {
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
      vb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      ib = 65535,
      My = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Yy = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Xy = 2,
      ny = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      uy = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      rb = {
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
      Hy = {
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
      ab = {
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
      Fy = 8,
      py = {
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
      Ly = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  3991: (yb, bb, Wy) => {
    Wy.d(bb, {
      D: () => vb,
      F: () => ib,
      H: () => mb,
      K: () => Zy,
      M: () => cb,
      O: () => Oy,
      d: () => Gy,
      h: () => Ty,
      j: () => Yy,
      m: () => My,
      p: () => ly,
      r: () => Jy,
      t: () => Cy,
      w: () => Vy,
      z: () => Ry
    });
    var Uy = Wy(3994);
    const hy = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let fy = hy;

    function Zy(yb) {
      fy = null !== yb && void 0 !== yb ? yb : hy
    }

    function cb() {
      return fy
    }
    const Py = new Set,
      oy = new Set;
    let By = -1;
    const Ky = new Set,
      ey = new Set;
    let qb = 0,
      sy = 0;
    const Sy = new Set,
      Ey = new Set;

    function ly(yb) {
      return Py.add(yb), () => {
        Py.delete(yb)
      }
    }

    function mb(yb, bb) {
      for (const Uy of Py) try {
        Uy(yb)
      } catch (Wy) {
        bb(Wy)
      }
    }

    function Cy(yb) {
      return oy.add(yb), () => {
        oy.delete(yb)
      }
    }

    function Ty(yb, bb) {
      const Wy = By < 0 ? 0 : yb - By;
      By = yb;
      for (const hy of oy) try {
        hy(Wy)
      } catch (Uy) {
        bb(Uy)
      }
    }

    function Vy(yb) {
      return Ky.add(yb), () => {
        Ky.delete(yb)
      }
    }

    function Jy(yb) {
      return ey.add(yb), () => {
        ey.delete(yb)
      }
    }
    let gb = 0;

    function Gy(yb) {
      gb += yb
    }

    function Oy() {
      const yb = gb;
      return gb = 0, yb
    }

    function Ry(yb) {
      return Sy.add(yb), () => {
        Sy.delete(yb)
      }
    }

    function vb(yb) {
      return Ey.add(yb), () => {
        Ey.delete(yb)
      }
    }

    function ib() {
      qb = 0, sy = 0, By = -1
    }

    function My(yb, bb) {
      if ("paced" === yb) return sy += bb, null;
      if ("drawn" !== yb && "skipped" !== yb) return null;
      const Wy = bb + sy;
      return sy = 0, Wy
    }

    function Yy(yb, bb, Wy, hy) {
      const fy = (0, Uy.g)(bb),
        Zy = yb > 0 ? performance.now() : 0;
      for (let Uy = 0; Uy < yb; Uy++)
        for (const yb of Sy) try {
          yb()
        } catch (cb) {
          hy(cb)
        }
      if (yb > 0 && Gy(performance.now() - Zy), null !== Wy) {
        for (const yb of Ky) try {
          yb(Wy)
        } catch (cb) {
          hy(cb)
        }
        qb += Wy
      }
      if ("drawn" === bb) {
        const yb = qb;
        qb = 0;
        for (const bb of ey) try {
          bb(yb)
        } catch (cb) {
          hy(cb)
        }
      }
      for (const Uy of Ey) try {
        Uy(yb, fy)
      } catch (cb) {
        hy(cb)
      }
    }
  },
  3996: (yb, bb, Wy) => {
    Wy.d(bb, {
      A: () => eb,
      Ac: () => Uy.bb,
      Ad: () => kb,
      C: () => xb,
      Db: () => vb,
      Dc: () => Uy.cb,
      Dd: () => wy,
      F: () => Uy.f,
      Fb: () => Uy.D,
      Fc: () => Uy.db,
      G: () => oy,
      Hc: () => Ay,
      Hd: () => Zb,
      J: () => Uy.j,
      Jb: () => Yy,
      Jc: () => Uy.hb,
      Jd: () => sb,
      Kc: () => Uy.jb,
      Ld: () => Ty,
      Mc: () => Uy.nb,
      Md: () => Ny,
      N: () => zb,
      Nb: () => Vy,
      Nc: () => Uy.vb,
      Nd: () => rb,
      O: () => Uy.q,
      P: () => Uy.r,
      Pc: () => Uy.yb,
      Q: () => Uy.u,
      Qb: () => fb,
      R: () => Ky,
      Rd: () => uy,
      Sc: () => Uy.Cb,
      Sd: () => ny,
      Tb: () => Cy,
      Td: () => Py,
      Ub: () => Bb,
      V: () => mb,
      Vc: () => Ry,
      W: () => Uy.v,
      Wc: () => Uy.Gb,
      Wd: () => Hy,
      Xb: () => hy.j,
      Yb: () => ly,
      Yd: () => Sb,
      Zb: () => Wb,
      Zc: () => Uy.Jb,
      Zd: () => qb,
      _: () => Uy.x,
      ab: () => Ly,
      ac: () => Uy.H,
      bd: () => Uy.Pb,
      cb: () => hb,
      d: () => yW,
      dc: () => Uy.I,
      ed: () => fy,
      f: () => Sy,
      fb: () => By,
      fd: () => Ey,
      g: () => sy,
      hb: () => Uy.z,
      hc: () => Uy.M,
      hd: () => cW,
      ic: () => Uy.Q,
      j: () => Pb,
      jb: () => Dy,
      jd: () => py,
      k: () => Oy,
      kb: () => Iy,
      kd: () => Qy,
      lb: () => dy,
      mc: () => Uy.T,
      n: () => gb,
      nb: () => bW,
      nd: () => Fy,
      o: () => Uy.c,
      p: () => Kb,
      pc: () => Uy.$,
      pd: () => tb,
      qb: () => hy.d,
      rc: () => qW,
      t: () => ib,
      ub: () => Gy,
      v: () => Zy,
      vc: () => ob,
      xb: () => ab,
      xc: () => Ub,
      z: () => Xy,
      zb: () => My,
      zd: () => jb
    });
    var Uy = Wy(4001),
      hy = Wy(1977);
    const fy = Math.round(1e3 / Uy.Pb),
      Zy = 4,
      cb = 2;

    function Py() {
      return crypto.getRandomValues(new Uint32Array(cb))
    }
    const oy = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      By = 16,
      Ky = {
        Draws: 1,
        NetAll: 2
      },
      ey = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function qb(yb) {
      return (yb.nametagsHidden ? Jy.NametagsHidden : 0) | (yb.crouchToggle ? Jy.CrouchToggle : 0) | (yb.bhopDisabled ? Jy.BhopDisabled : 0) | (yb.disableBobbing ? Jy.DisableBobbing : 0) | (yb.ezTowering ? Jy.EzTowering : 0) | (yb.ezBridging ? Jy.EzBridging : 0) | (yb.showChunkBorders ? Jy.ShowChunkBorders : 0) | (yb.edgeGuard ? Jy.EdgeGuard : 0)
    }
    const sy = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Sy = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Ey = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      ly = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      mb = 5,
      Cy = 4294967295;

    function Ty(yb) {
      return (yb.showFog ? ey.ShowFog : 0) | (yb.lighting ? ey.Lighting : 0) | (yb.chunkFade ? ey.ChunkFade : 0)
    }
    const Vy = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Jy = {
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
      gb = {
        Release: 1,
        KeepTouches: 2
      },
      Gy = {
        Point: 1,
        Stamped: 2
      },
      Oy = {
        Add: 1,
        Clear: 2
      },
      Ry = 1,
      vb = 8,
      ib = 16777215,
      My = 4,
      Yy = {
        Resume: 1
      },
      Xy = {
        Held: 1
      };

    function ny(yb, bb) {
      return (yb | bb << 8) >>> 0
    }

    function uy(yb) {
      return 255 & yb
    }

    function rb(yb) {
      return yb >>> 8
    }

    function Hy(yb) {
      return yb + 3 & -4
    }
    const ab = 16777216,
      Fy = 16,
      py = 8,
      Ly = 8,
      Qy = 16777216,
      jb = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Dy = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      tb = 16,
      wy = {
        Lost: 0,
        Gone: 1
      },
      kb = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Ny(yb) {
      return yb === kb.WorldgenSeed || yb === kb.Generate
    }
    const zb = 4,
      Iy = 99,
      xb = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Ay = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      dy = 12,
      yW = 16,
      bW = 4,
      Wb = 12,
      Ub = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      hb = 4,
      fb = 8,
      Zb = 8,
      cW = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Pb = {
        Crit: 1,
        HitSelf: 2
      },
      ob = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Bb = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Kb = 12,
      eb = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      qW = 67108864;

    function sb(yb) {
      for (const [bb, Wy] of Object.entries(Uy.f))
        if (Wy === yb) return bb;
      return `Unknown${yb}`
    }

    function Sb(yb) {
      return {
        status: yb[Uy.x.Status],
        lastError: yb[Uy.x.LastError],
        lastErrorDetail: yb[Uy.x.LastErrorDetail],
        errorCount: yb[Uy.x.ErrorCount],
        frameIndex: yb[Uy.x.FrameIndex],
        tickIndex: yb[Uy.x.TickIndex],
        renderPending: yb[Uy.x.RenderPending],
        firstView: yb[Uy.x.FirstView],
        chunksCancelled: yb[Uy.x.ChunksCancelled]
      }
    }
  },
  3994: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      c: () => fy,
      g: () => hy
    });
    var Uy = Wy(3996);

    function hy(yb) {
      return "none" !== yb
    }

    function fy(yb, bb) {
      if (!yb) return "none";
      switch (bb) {
        case Uy.Q.Drawn:
          return "drawn";
        case Uy.Q.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Zy(yb) {
      return "drawn" === yb
    }
  },
  4013: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      f: () => fy,
      j: () => Zy,
      k: () => Uy,
      n: () => cb
    });
    const Uy = {
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
        TouchAction3: 193,
        TouchAttack: 194,
        TouchUse: 195
      },
      hy = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      fy = {
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
      Zy = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      cb = [16]
  },
  4022: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      g: () => Zy,
      h: () => oy
    });
    var Uy = Wy(1977),
      hy = Wy(1983);
    const fy = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Zy(yb) {
      return yb instanceof HTMLElement && (!!(yb.isContentEditable || yb instanceof HTMLTextAreaElement || yb instanceof HTMLSelectElement) || yb instanceof HTMLInputElement && !fy.has(yb.type))
    }

    function cb(yb) {
      let bb = null;
      const Wy = Wy => {
          const hy = Zy(Wy);
          hy !== bb && (bb = hy, yb(Uy.f.UiCapture, Uy.v.Keyboard, 0, 0, hy ? Uy.v.Keyboard : 0))
        },
        hy = yb => {
          Wy(yb.target)
        },
        fy = yb => {
          Wy(yb.relatedTarget)
        },
        cb = () => {
          Wy(document.activeElement)
        },
        Py = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", hy, Py), document.addEventListener("focusout", fy, Py), document.addEventListener("keydown", cb, Py), Wy(document.activeElement), () => {
        document.removeEventListener("focusin", hy, Py), document.removeEventListener("focusout", fy, Py), document.removeEventListener("keydown", cb, Py)
      }
    }
    const Py = new Map;

    function oy(yb, bb) {
      var Wy;
      let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Py.set(Uy, (null !== (Wy = Py.get(Uy)) && void 0 !== Wy ? Wy : 0) & ~yb | bb & yb);
      let fy = 0;
      for (const hy of Py.values()) fy |= hy;
      return (0, hy.B)(yb, fy & yb)
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);