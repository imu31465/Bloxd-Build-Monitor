export const id = 85;
export const ids = [85];
export const modules = {
  40529: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      startWasmPadGameplay: () => yd
    });
    kd(40537);
    var pd = kd(40543),
      Nd = kd(40558),
      Wd = kd(1955),
      Pd = kd(40569),
      Zd = kd(4688),
      gd = kd(4666),
      Cd = kd(40571),
      Kd = kd(40575),
      od = kd(4704),
      ld = kd(40658),
      Qd = kd(2345),
      Ld = kd(8771),
      Od = kd(40548),
      ed = kd(8740),
      Rd = kd(39252);
    const Id = dd => {
        const Jd = od.c.indexOf(dd);
        if (Jd < 0) throw new Error(`No core action "${dd}"`);
        return Jd
      },
      Gd = Id("primary-fire"),
      vd = Id("alt-fire"),
      xd = Id("mid-fire"),
      qd = Id("jump"),
      Bd = Id("ReloadGun"),
      sd = Id("SwapCameraZoom"),
      ad = Id("TouchAction1"),
      Md = {
        SpecialAction1: Id("SpecialAction1"),
        SpecialAction2: Id("SpecialAction2")
      },
      Fd = (dd, Jd) => {
        (0, Qd.z)(Zd.F.PadAction, dd, 0, 0, (0, Qd.v)(Jd, performance.now()))
      },
      Yd = dd => {
        Fd(dd, Pd.Hd.Down)
      },
      md = dd => {
        Fd(dd, 0)
      },
      bd = dd => {
        Yd(dd), md(dd)
      },
      Sd = () => {
        const dd = (0, Kd.k)();
        return null !== dd && void 0 !== dd && dd.isCoreRunning ? dd : null
      },
      jd = dd => Pd.u.playerFlags(dd.api.apiView, 0),
      Xd = dd => null !== dd && Pd.u.targetBlockId(dd.api.apiView, 0) !== Pd.kd,
      fd = () => {
        const dd = (0, Ld.e)(),
          Jd = new Od.d;
        let kd = !1;
        const pd = (dd, Jd) => {
            (0, Qd.z)(Zd.F.PadLook, Pd.Qd.Rate, dd, Jd, 0)
          },
          Nd = () => {
            kd = !1, Jd.reset(), pd(0, 0)
          };
        return {
          update: (Nd, Wd, gd) => {
            kd || (dd.discardPending(), kd = !0);
            const Cd = (0, Od.s)(Jd, Nd, Wd, gd, performance.now());
            pd(Cd.yawRadPerSec, Cd.pitchRadPerSec);
            const Kd = dd.drainLookDelta();
            0 === Kd.bY && 0 === Kd.fY || (0, Qd.z)(Zd.F.PadLook, Pd.Qd.Gyro, Kd.bY, Kd.fY, 0)
          },
          release: Nd,
          uninstall: Nd
        }
      },
      nd = () => {
        const dd = Sd();
        return null !== dd && 0 !== (jd(dd) & Pd.Ud.PadSneakToggled)
      },
      Ud = () => {
        const dd = (dd => {
          const Jd = dd => function() {
            return (0, ld.d)(), dd(...arguments)
          };
          return {
            primaryFireDown: Jd((() => (Yd(Gd), 0))),
            primaryFireUp: Jd((() => {
              md(Gd)
            })),
            altFireDown: Jd((() => (Yd(vd), 0))),
            altFireUp: Jd((() => {
              md(vd)
            })),
            jumpDown: Jd((() => {
              bd(qd)
            })),
            specialActionDown: Jd((dd => {
              Yd(Md[dd])
            })),
            specialActionUp: Jd((dd => {
              md(Md[dd])
            })),
            reloadGun: Jd((() => {
              bd(Bd)
            })),
            dropItem: Jd((dd => {
              Fd(Pd.Kd.Drop, Pd.Hd.Down | (dd ? Pd.Hd.Stack : 0))
            })),
            swapCameraZoom: Jd((() => {
              bd(sd)
            })),
            pickBlock: Jd((() => (bd(xd), Xd(dd()))))
          }
        })(Sd);
        let Jd = !1,
          kd = null;
        const pd = () => {
          var dd;
          null === (dd = kd) || void 0 === dd || dd(), kd = null
        };
        return {
          bodies: () => dd,
          look: fd(),
          move: (dd, kd) => {
            var Nd;
            pd();
            const {
              bits: Wd,
              flips: Zd
            } = (dd => {
              if (null === dd) return {
                bits: Pd.Od.Peek,
                flips: 0
              };
              const Jd = dd.sneakHeld ? Pd.Od.SneakHeld : 0;
              return "hold" === dd.mode ? {
                bits: Jd | Pd.Od.SneakHoldMode,
                flips: dd.sneakTogglePressed ? 1 : 0
              } : {
                bits: Jd,
                flips: dd.sneakPressed || dd.sneakTogglePressed ? 1 : 0
              }
            })(kd);
            null !== (Nd = Sd()) && void 0 !== Nd && Nd.padMove(dd.x, dd.y, dd.magnitude, dd.headingOffset, (dd => Pd.Od.Active | (dd.jumpHeld ? Pd.Od.JumpHeld : 0) | (dd.jumpPressed ? Pd.Od.JumpPressed : 0) | (dd.running ? Pd.Od.Running : 0) | (dd.sprintHeld ? Pd.Od.SprintHeld : 0))(dd) | Wd, Zd) && (Jd = !0), (0, ed.e)(nd())
          },
          stopMoving: () => {
            var dd;
            Jd && (Jd = !(null !== (dd = Sd()) && void 0 !== dd && dd.padMove(0, 0, 0, 0, 0, 0)), pd(), kd = (0, gd.D)((() => {
              pd(), (0, ed.e)(nd())
            })))
          },
          uninstall: pd,
          deviceChanged: dd => {
            var kd;
            "touch" === dd ? ((0, ed.e)(!1), null !== (kd = Sd()) && void 0 !== kd && kd.padMove(0, 0, 0, 0, Pd.Od.EndToggle, 0) && (Jd = !1)) : "gamepad" === dd && (0, ed.e)(nd())
          },
          hasPlayer: () => null !== Sd(),
          isPlayerDead: () => {
            var dd;
            return !1 === (null === (dd = Sd()) || void 0 === dd ? void 0 : dd.localPlayerAlive())
          },
          isReplayMode: () => {
            const dd = Sd();
            return null !== dd && 0 !== (jd(dd) & Pd.Ud.Replay)
          },
          isFreeCameraOn: () => {
            const dd = Sd();
            return null !== dd && 0 !== (jd(dd) & Pd.Ud.FreeCam)
          },
          targetsBlock: () => Xd(Sd()),
          selectedSlotEmpty: () => {
            var dd;
            return !(null !== (dd = Sd()) && void 0 !== dd && dd.items.EC())
          },
          pickBlockAllowed: () => !!Wd.b.get("creative") && !!Wd.b.get("canPickBlocks"),
          scrollHotbar: dd => {
            Fd(Pd.Kd.Hotbar, Pd.Hd.Down | (dd > 0 ? Pd.Hd.Next : 0))
          },
          hasFullInventory: Cd.n,
          hasLobbyTab: () => (0, Rd.e)({
            lobbyLeaderboardInfo: Wd.b.get("lobbyLeaderboardInfo"),
            lobbyManage: Wd.b.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var dd, Jd, kd, pd;
            const Nd = Sd();
            return {
              holdingGun: !1 !== (null === Nd || void 0 === Nd ? void 0 : Nd.localPlayerAlive()) && "Gun" === (null === Nd || void 0 === Nd || null === (dd = Nd.items.EC()) || void 0 === dd || null === (Jd = dd.typeObj) || void 0 === Jd ? void 0 : Jd.type),
              customButtons: null !== (kd = Wd.b.get("customButtons")) && void 0 !== kd ? kd : null,
              touchscreenActionButton: null !== (pd = Wd.b.get("touchscreenActionButton")) && void 0 !== pd ? pd : null
            }
          },
          pressTouchButton: dd => {
            dd ? Yd(ad) : md(ad)
          }
        }
      },
      yd = () => {
        const dd = (0, Nd.c)(Ud()),
          Jd = (0, pd.e)(),
          kd = null;
        return () => {
          dd(), Jd(), null === kd || void 0 === kd || kd()
        }
      }
  },
  4688: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Wd,
      Db: () => sd,
      Eb: () => Bd,
      F: () => ed,
      Gb: () => jd,
      Hb: () => Td,
      I: () => Vd,
      L: () => Kd,
      Lb: () => fd,
      M: () => od,
      Ob: () => Ud,
      P: () => Cd,
      Qb: () => yd,
      Sb: () => xd,
      T: () => Rd,
      Tb: () => qd,
      Vb: () => cd,
      X: () => gd,
      Yb: () => Nd,
      Z: () => Ld,
      ab: () => Qd,
      ac: () => td,
      b: () => ud,
      bb: () => ad,
      d: () => rd,
      eb: () => Fd,
      gb: () => Yd,
      h: () => ld,
      ib: () => Md,
      jb: () => md,
      kb: () => Ed,
      l: () => vd,
      o: () => hd,
      ob: () => Dd,
      p: () => Gd,
      q: () => Id,
      sb: () => nd,
      tb: () => bd,
      u: () => Pd,
      vb: () => Xd,
      w: () => Zd,
      xb: () => Sd,
      y: () => pd,
      zb: () => Od
    });
    const pd = 32,
      Nd = 33.333333333333336,
      Wd = {
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
      Pd = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Zd = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      gd = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Cd = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Kd = 7,
      od = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      ld = {
        Look: 0,
        Remesh: 1
      },
      Qd = 8,
      Ld = 1,
      Od = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      ed = {
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
      Rd = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Id = {
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
      Gd = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      vd = 4,
      xd = 4,
      qd = 65535,
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
      sd = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      ad = 88,
      Md = 0,
      Fd = 24,
      Yd = 48,
      md = 80,
      bd = {
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
      Sd = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      jd = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Xd = {
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
      fd = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      nd = 65535,
      Ud = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      yd = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Dd = 2,
      Td = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Ed = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      cd = {
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
      hd = {
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
      rd = {
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
      ud = 8,
      td = {
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
      Vd = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4666: (dd, Jd, kd) => {
    kd.d(Jd, {
      D: () => Md,
      G: () => Fd,
      J: () => Yd,
      L: () => Id,
      O: () => Pd,
      P: () => Zd,
      T: () => ad,
      e: () => sd,
      i: () => vd,
      m: () => bd,
      n: () => md,
      q: () => Rd,
      s: () => qd,
      v: () => Gd,
      z: () => xd
    });
    var pd = kd(4673);
    const Nd = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Wd = Nd;

    function Pd(dd) {
      Wd = null !== dd && void 0 !== dd ? dd : Nd
    }

    function Zd() {
      return Wd
    }
    const gd = new Set,
      Cd = new Set;
    let Kd = -1;
    const od = new Set,
      ld = new Set;
    let Qd = 0,
      Ld = 0;
    const Od = new Set,
      ed = new Set;

    function Rd(dd) {
      return gd.add(dd), () => {
        gd.delete(dd)
      }
    }

    function Id(dd, Jd) {
      for (const pd of gd) try {
        pd(dd)
      } catch (kd) {
        Jd(kd)
      }
    }

    function Gd(dd) {
      return Cd.add(dd), () => {
        Cd.delete(dd)
      }
    }

    function vd(dd, Jd) {
      const kd = Kd < 0 ? 0 : dd - Kd;
      Kd = dd;
      for (const Nd of Cd) try {
        Nd(kd)
      } catch (pd) {
        Jd(pd)
      }
    }

    function xd(dd) {
      return od.add(dd), () => {
        od.delete(dd)
      }
    }

    function qd(dd) {
      return ld.add(dd), () => {
        ld.delete(dd)
      }
    }
    let Bd = 0;

    function sd(dd) {
      Bd += dd
    }

    function ad() {
      const dd = Bd;
      return Bd = 0, dd
    }

    function Md(dd) {
      return Od.add(dd), () => {
        Od.delete(dd)
      }
    }

    function Fd(dd) {
      return ed.add(dd), () => {
        ed.delete(dd)
      }
    }

    function Yd() {
      Qd = 0, Ld = 0, Kd = -1
    }

    function md(dd, Jd) {
      if ("paced" === dd) return Ld += Jd, null;
      if ("drawn" !== dd && "skipped" !== dd) return null;
      const kd = Jd + Ld;
      return Ld = 0, kd
    }

    function bd(dd, Jd, kd, Nd) {
      const Wd = (0, pd.h)(Jd),
        Pd = dd > 0 ? performance.now() : 0;
      for (let pd = 0; pd < dd; pd++)
        for (const dd of Od) try {
          dd()
        } catch (Zd) {
          Nd(Zd)
        }
      if (dd > 0 && sd(performance.now() - Pd), null !== kd) {
        for (const dd of od) try {
          dd(kd)
        } catch (Zd) {
          Nd(Zd)
        }
        Qd += kd
      }
      if ("drawn" === Jd) {
        const dd = Qd;
        Qd = 0;
        for (const Jd of ld) try {
          Jd(dd)
        } catch (Zd) {
          Nd(Zd)
        }
      }
      for (const pd of ed) try {
        pd(dd, Wd)
      } catch (Zd) {
        Nd(Zd)
      }
    }
  },
  4680: (dd, Jd, kd) => {
    kd.d(Jd, {
      $b: () => xd,
      A: () => Pd,
      Ab: () => JJ,
      B: () => Sd,
      Bc: () => pd.ib,
      Bd: () => pd.Tb,
      C: () => LJ,
      Cc: () => pd.jb,
      Eb: () => pJ,
      F: () => wd,
      Fc: () => pd.sb,
      Fd: () => pd.Yb,
      G: () => pd.d,
      Gd: () => Wd,
      Hc: () => OJ,
      Ib: () => pd.M,
      Id: () => ed,
      J: () => Cd,
      Kc: () => oJ,
      L: () => pd.h,
      Lb: () => Nd.g,
      Ld: () => CJ,
      Md: () => Dd,
      Nb: () => sd,
      Nc: () => WJ,
      O: () => dJ,
      Pd: () => Ed,
      Qc: () => pd.tb,
      Rb: () => Ud,
      S: () => pd.l,
      Sd: () => yd,
      U: () => zd,
      Uc: () => pd.vb,
      Vb: () => md,
      Wc: () => pd.xb,
      Wd: () => rd,
      X: () => pd.q,
      Xb: () => Fd,
      Zb: () => pd.T,
      _: () => pd.u,
      _b: () => bd,
      _c: () => Ad,
      ab: () => pd.w,
      b: () => kJ,
      bd: () => pd.Db,
      be: () => cd,
      c: () => Od,
      cc: () => ZJ,
      db: () => od,
      de: () => td,
      ed: () => pd.Eb,
      fe: () => ud,
      g: () => Ld,
      gb: () => Id,
      gc: () => Gd,
      ge: () => gJ,
      h: () => KJ,
      ib: () => pd.y,
      ic: () => lJ,
      id: () => pd.Gb,
      ie: () => eJ,
      j: () => ad,
      jb: () => pd.B,
      ke: () => vd,
      lc: () => Nd.l,
      ld: () => pd.Lb,
      m: () => Bd,
      nb: () => Td,
      ne: () => Vd,
      oe: () => fd,
      pc: () => Rd,
      pd: () => pd.Ob,
      q: () => pd.b,
      qe: () => Xd,
      rb: () => PJ,
      rc: () => NJ,
      sd: () => pd.Qb,
      tb: () => Kd,
      td: () => Md,
      te: () => jd,
      u: () => QJ,
      ub: () => pd.F,
      uc: () => pd.bb,
      vb: () => hd,
      ve: () => gd,
      w: () => Yd,
      xb: () => Hd,
      xc: () => pd.eb,
      xd: () => pd.Sb,
      xe: () => nd,
      yb: () => pd.L,
      ye: () => RJ,
      zc: () => pd.gb,
      ze: () => Qd
    });
    var pd = kd(4688),
      Nd = kd(2337);
    const Wd = Math.round(1e3 / pd.Yb),
      Pd = 4,
      Zd = 2;

    function gd() {
      return crypto.getRandomValues(new Uint32Array(Zd))
    }
    const Cd = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Kd = 16,
      od = {
        Draws: 1,
        NetAll: 2
      },
      ld = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Qd(dd) {
      return (dd.nametagsHidden ? qd.NametagsHidden : 0) | (dd.crouchToggle ? qd.CrouchToggle : 0) | (dd.bhopDisabled ? qd.BhopDisabled : 0) | (dd.disableBobbing ? qd.DisableBobbing : 0) | (dd.ezTowering ? qd.EzTowering : 0) | (dd.ezBridging ? qd.EzBridging : 0) | (dd.showChunkBorders ? qd.ShowChunkBorders : 0)
    }
    const Ld = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Od = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      ed = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Rd = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Id = 5,
      Gd = 4294967295;

    function vd(dd) {
      return (dd.showFog ? ld.ShowFog : 0) | (dd.lighting ? ld.Lighting : 0) | (dd.chunkFade ? ld.ChunkFade : 0)
    }
    const xd = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      qd = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Bd = {
        Release: 1,
        KeepTouches: 2
      },
      sd = {
        Point: 1,
        Stamped: 2
      },
      ad = {
        Add: 1,
        Clear: 2
      },
      Md = 1,
      Fd = 8,
      Yd = 16777215,
      md = 4,
      bd = {
        Resume: 1
      },
      Sd = {
        Held: 1
      };

    function jd(dd, Jd) {
      return (dd | Jd << 8) >>> 0
    }

    function Xd(dd) {
      return 255 & dd
    }

    function fd(dd) {
      return dd >>> 8
    }

    function nd(dd) {
      return dd + 3 & -4
    }
    const Ud = 16777216,
      yd = 20;
    const Dd = 8,
      Td = 8,
      Ed = 16777216,
      cd = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hd = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      rd = 16,
      ud = {
        Lost: 0,
        Gone: 1
      },
      td = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Vd(dd) {
      return dd === td.WorldgenSeed || dd === td.Generate
    }
    const zd = 4,
      Hd = 99,
      wd = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Ad = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      dJ = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      JJ = 12,
      kJ = 16,
      pJ = 4,
      NJ = 12,
      WJ = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      PJ = 4,
      ZJ = 8,
      gJ = 8,
      CJ = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      KJ = {
        Crit: 1,
        HitSelf: 2
      },
      oJ = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      lJ = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      QJ = 12,
      LJ = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      OJ = 67108864;

    function eJ(dd) {
      for (const [Jd, kd] of Object.entries(pd.d))
        if (kd === dd) return Jd;
      return `Unknown${dd}`
    }

    function RJ(dd) {
      return {
        status: dd[pd.B.Status],
        lastError: dd[pd.B.LastError],
        lastErrorDetail: dd[pd.B.LastErrorDetail],
        errorCount: dd[pd.B.ErrorCount],
        frameIndex: dd[pd.B.FrameIndex],
        tickIndex: dd[pd.B.TickIndex],
        renderPending: dd[pd.B.RenderPending],
        firstView: dd[pd.B.FirstView],
        chunksCancelled: dd[pd.B.ChunksCancelled]
      }
    }
  },
  4673: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      f: () => Wd,
      h: () => Nd
    });
    var pd = kd(4680);

    function Nd(dd) {
      return "none" !== dd
    }

    function Wd(dd, Jd) {
      if (!dd) return "none";
      switch (Jd) {
        case pd.ab.Drawn:
          return "drawn";
        case pd.ab.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Pd(dd) {
      return "drawn" === dd
    }
  },
  4704: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      f: () => Wd,
      j: () => Pd,
      n: () => pd,
      r: () => Zd
    });
    const pd = {
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
      Nd = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Wd = {
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
      Pd = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Zd = [16]
  },
  40658: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      e: () => Wd,
      f: () => Nd
    });
    let pd = null;

    function Nd(dd) {
      pd = dd
    }

    function Wd(dd) {
      pd === dd && (pd = null)
    }

    function Pd() {
      var dd;
      null === (dd = pd) || void 0 === dd || dd()
    }
  },
  4709: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd,
      f: () => Pd,
      i: () => Cd
    });
    var pd = kd(2337),
      Nd = kd(2345);
    const Wd = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Pd(dd) {
      return dd instanceof HTMLElement && (!!(dd.isContentEditable || dd instanceof HTMLTextAreaElement || dd instanceof HTMLSelectElement) || dd instanceof HTMLInputElement && !Wd.has(dd.type))
    }

    function Zd(dd) {
      let Jd = null;
      const kd = kd => {
          const Nd = Pd(kd);
          Nd !== Jd && (Jd = Nd, dd(pd.k.UiCapture, pd.y.Keyboard, 0, 0, Nd ? pd.y.Keyboard : 0))
        },
        Nd = dd => {
          kd(dd.target)
        },
        Wd = dd => {
          kd(dd.relatedTarget)
        },
        Zd = () => {
          kd(document.activeElement)
        },
        gd = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Nd, gd), document.addEventListener("focusout", Wd, gd), document.addEventListener("keydown", Zd, gd), kd(document.activeElement), () => {
        document.removeEventListener("focusin", Nd, gd), document.removeEventListener("focusout", Wd, gd), document.removeEventListener("keydown", Zd, gd)
      }
    }
    const gd = new Map;

    function Cd(dd, Jd) {
      var kd;
      let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      gd.set(pd, (null !== (kd = gd.get(pd)) && void 0 !== kd ? kd : 0) & ~dd | Jd & dd);
      let Wd = 0;
      for (const Nd of gd.values()) Wd |= Nd;
      return (0, Nd.F)(dd, Wd & dd)
    }
  },
  37106: (dd, Jd, kd) => {
    function pd(dd) {
      return dd.includes("Leaf Bed")
    }

    function Nd(dd) {
      return / Bed(?: Head)?(?:\||$)/.test(dd) && !pd(dd)
    }

    function Wd(dd) {
      return dd.includes(" Strongbed")
    }

    function Pd(dd) {
      return pd(dd) || Nd(dd) || Wd(dd)
    }
    kd.d(Jd, {
      c: () => Pd,
      f: () => pd,
      j: () => Wd,
      n: () => Nd
    })
  },
  37101: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd
    });
    var pd = kd(37106),
      Nd = kd(9331);
    const Wd = [],
      Pd = [],
      Zd = [],
      gd = [];
    for (const Kd of Object.keys(Nd.n))(0, pd.f)(Kd) ? Wd.push(Kd) : (0, pd.n)(Kd) && Pd.push(Kd), (0, pd.j)(Kd) && Zd.push(Kd), (Kd.includes(" Bed Head") || Kd.includes(" Strongbed Head")) && gd.push(Kd);
    const Cd = {
      leafBeds: Wd,
      woolBeds: Pd,
      strongBeds: Zd,
      beds: [...Wd, ...Pd, ...Zd],
      bedHeads: gd,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6347: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      c: () => Nd,
      d: () => gd,
      h: () => Wd,
      i: () => Cd,
      k: () => pd,
      o: () => Zd
    });
    let pd = function(dd) {
        return dd[dd.DEFAULT = 0] = "DEFAULT", dd[dd.BOAT = 1] = "BOAT", dd[dd.GLIDER = 2] = "GLIDER", dd[dd.BALLOON = 3] = "BALLOON", dd[dd.SLEEPING = 4] = "SLEEPING", dd[dd.RIDING_MOB = 5] = "RIDING_MOB", dd[dd.CAR = 6] = "CAR", dd[dd.HOVERCRAFT = 7] = "HOVERCRAFT", dd
      }({}),
      Nd = function(dd) {
        return dd[dd.WOOD = 0] = "WOOD", dd[dd.OBSIDIAN = 1] = "OBSIDIAN", dd[dd.SPEED = 2] = "SPEED", dd
      }({}),
      Wd = function(dd) {
        return dd[dd.WOOD = 0] = "WOOD", dd[dd.IRON = 1] = "IRON", dd[dd.GOLD = 2] = "GOLD", dd[dd.DIAMOND = 3] = "DIAMOND", dd
      }({}),
      Pd = function(dd) {
        return dd[dd.YELLOW = 0] = "YELLOW", dd[dd.WHITE = 1] = "WHITE", dd[dd.RED = 2] = "RED", dd[dd.PURPLE = 3] = "PURPLE", dd[dd.PINK = 4] = "PINK", dd[dd.ORANGE = 5] = "ORANGE", dd[dd.MAGENTA = 6] = "MAGENTA", dd[dd.LIME = 7] = "LIME", dd[dd.LIGHT_GRAY = 8] = "LIGHT_GRAY", dd[dd.LIGHT_BLUE = 9] = "LIGHT_BLUE", dd[dd.GREEN = 10] = "GREEN", dd[dd.GRAY = 11] = "GRAY", dd[dd.CYAN = 12] = "CYAN", dd[dd.BROWN = 13] = "BROWN", dd[dd.BLUE = 14] = "BLUE", dd[dd.BLACK = 15] = "BLACK", dd
      }({}),
      Zd = function(dd) {
        return dd[dd.ROTATION_1 = 0] = "ROTATION_1", dd[dd.ROTATION_2 = 1] = "ROTATION_2", dd[dd.ROTATION_3 = 2] = "ROTATION_3", dd[dd.ROTATION_4 = 3] = "ROTATION_4", dd
      }({}),
      gd = function(dd) {
        return dd[dd.KART = 0] = "KART", dd[dd.OFF_ROADER = 1] = "OFF_ROADER", dd[dd.CAR = 2] = "CAR", dd[dd.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", dd[dd.ARMORED_CAR = 4] = "ARMORED_CAR", dd[dd.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", dd[dd.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", dd[dd.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", dd
      }({});
    pd.DEFAULT, pd.BOAT, Nd.SPEED, pd.GLIDER, Wd.DIAMOND, pd.BALLOON, Pd.BLACK, pd.SLEEPING, Zd.ROTATION_4, pd.RIDING_MOB, pd.CAR, gd.MOONSTONE_MINING_DRILL, pd.HOVERCRAFT;
    let Cd = function(dd) {
      return dd[dd.NORMAL = 0] = "NORMAL", dd[dd.GLIDING = 1] = "GLIDING", dd[dd.FLOATING = 2] = "FLOATING", dd
    }({})
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);