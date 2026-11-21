export const id = 85;
export const ids = [85];
export const modules = {
  39967: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      startWasmPadGameplay: () => jQ
    });
    wQ(39969);
    var LQ = wQ(39973),
      qQ = wQ(39989),
      oQ = wQ(1911),
      DQ = wQ(40003),
      kQ = wQ(4638),
      vQ = wQ(4621),
      mQ = wQ(40005),
      uQ = wQ(40009),
      HQ = wQ(4651),
      bQ = wQ(40089),
      YQ = wQ(2320),
      xQ = wQ(8614),
      AQ = wQ(39978),
      tQ = wQ(8596),
      eQ = wQ(38642);
    const MQ = QQ => {
        const FQ = HQ.b.indexOf(QQ);
        if (FQ < 0) throw new Error(`No core action "${QQ}"`);
        return FQ
      },
      GQ = MQ("primary-fire"),
      pQ = MQ("alt-fire"),
      cQ = MQ("mid-fire"),
      CQ = MQ("jump"),
      SQ = MQ("ReloadGun"),
      iQ = MQ("SwapCameraZoom"),
      WQ = MQ("TouchAction1"),
      RQ = {
        SpecialAction1: MQ("SpecialAction1"),
        SpecialAction2: MQ("SpecialAction2")
      },
      OQ = (QQ, FQ) => {
        (0, YQ.v)(kQ.I.PadAction, QQ, 0, 0, (0, YQ.t)(FQ, performance.now()))
      },
      sQ = QQ => {
        OQ(QQ, DQ.wd.Down)
      },
      rQ = QQ => {
        OQ(QQ, 0)
      },
      IQ = QQ => {
        sQ(QQ), rQ(QQ)
      },
      UQ = () => {
        const QQ = (0, uQ.k)();
        return null !== QQ && void 0 !== QQ && QQ.isCoreRunning ? QQ : null
      },
      NQ = QQ => DQ.v.playerFlags(QQ.api.apiView, 0),
      TQ = QQ => null !== QQ && DQ.v.targetBlockId(QQ.api.apiView, 0) !== DQ.ed,
      KQ = () => {
        const QQ = (0, xQ.d)(),
          FQ = new AQ.c;
        let wQ = !1;
        const LQ = (QQ, FQ) => {
            (0, YQ.v)(kQ.I.PadLook, DQ.Cd.Rate, QQ, FQ, 0)
          },
          qQ = () => {
            wQ = !1, FQ.reset(), LQ(0, 0)
          };
        return {
          update: (qQ, oQ, vQ) => {
            wQ || (QQ.discardPending(), wQ = !0);
            const mQ = (0, AQ.o)(FQ, qQ, oQ, vQ, performance.now());
            LQ(mQ.yawRadPerSec, mQ.pitchRadPerSec);
            const uQ = QQ.drainLookDelta();
            0 === uQ.PU && 0 === uQ.dU || (0, YQ.v)(kQ.I.PadLook, DQ.Cd.Gyro, uQ.PU, uQ.dU, 0)
          },
          release: qQ,
          uninstall: qQ
        }
      },
      zQ = () => {
        const QQ = UQ();
        return null !== QQ && 0 !== (NQ(QQ) & DQ.Gd.PadSneakToggled)
      },
      lQ = () => {
        const QQ = (QQ => {
          const FQ = QQ => function() {
            return (0, bQ.d)(), QQ(...arguments)
          };
          return {
            primaryFireDown: FQ((() => (sQ(GQ), 0))),
            primaryFireUp: FQ((() => {
              rQ(GQ)
            })),
            altFireDown: FQ((() => (sQ(pQ), 0))),
            altFireUp: FQ((() => {
              rQ(pQ)
            })),
            jumpDown: FQ((() => {
              IQ(CQ)
            })),
            specialActionDown: FQ((QQ => {
              sQ(RQ[QQ])
            })),
            specialActionUp: FQ((QQ => {
              rQ(RQ[QQ])
            })),
            reloadGun: FQ((() => {
              IQ(SQ)
            })),
            dropItem: FQ((QQ => {
              OQ(DQ.yd.Drop, DQ.wd.Down | (QQ ? DQ.wd.Stack : 0))
            })),
            swapCameraZoom: FQ((() => {
              IQ(iQ)
            })),
            pickBlock: FQ((() => (IQ(cQ), TQ(QQ()))))
          }
        })(UQ);
        let FQ = !1,
          wQ = null;
        const LQ = () => {
          var QQ;
          null === (QQ = wQ) || void 0 === QQ || QQ(), wQ = null
        };
        return {
          bodies: () => QQ,
          look: KQ(),
          move: (QQ, wQ) => {
            var qQ;
            LQ();
            const {
              bits: oQ,
              flips: kQ
            } = (QQ => {
              if (null === QQ) return {
                bits: DQ.zd.Peek,
                flips: 0
              };
              const FQ = QQ.sneakHeld ? DQ.zd.SneakHeld : 0;
              return "hold" === QQ.mode ? {
                bits: FQ | DQ.zd.SneakHoldMode,
                flips: QQ.sneakTogglePressed ? 1 : 0
              } : {
                bits: FQ,
                flips: QQ.sneakPressed || QQ.sneakTogglePressed ? 1 : 0
              }
            })(wQ);
            null !== (qQ = UQ()) && void 0 !== qQ && qQ.padMove(QQ.x, QQ.y, QQ.magnitude, QQ.headingOffset, (QQ => DQ.zd.Active | (QQ.jumpHeld ? DQ.zd.JumpHeld : 0) | (QQ.jumpPressed ? DQ.zd.JumpPressed : 0) | (QQ.running ? DQ.zd.Running : 0) | (QQ.sprintHeld ? DQ.zd.SprintHeld : 0))(QQ) | oQ, kQ) && (FQ = !0), (0, tQ.i)(zQ())
          },
          stopMoving: () => {
            var QQ;
            FQ && (FQ = !(null !== (QQ = UQ()) && void 0 !== QQ && QQ.padMove(0, 0, 0, 0, 0, 0)), LQ(), wQ = (0, vQ.x)((() => {
              LQ(), (0, tQ.i)(zQ())
            })))
          },
          uninstall: LQ,
          deviceChanged: QQ => {
            var wQ;
            "touch" === QQ ? ((0, tQ.i)(!1), null !== (wQ = UQ()) && void 0 !== wQ && wQ.padMove(0, 0, 0, 0, DQ.zd.EndToggle, 0) && (FQ = !1)) : "gamepad" === QQ && (0, tQ.i)(zQ())
          },
          hasPlayer: () => null !== UQ(),
          isPlayerDead: () => {
            var QQ;
            return !1 === (null === (QQ = UQ()) || void 0 === QQ ? void 0 : QQ.localPlayerAlive())
          },
          isReplayMode: () => {
            const QQ = UQ();
            return null !== QQ && 0 !== (NQ(QQ) & DQ.Gd.Replay)
          },
          isFreeCameraOn: () => {
            const QQ = UQ();
            return null !== QQ && 0 !== (NQ(QQ) & DQ.Gd.FreeCam)
          },
          targetsBlock: () => TQ(UQ()),
          selectedSlotEmpty: () => {
            var QQ;
            return !(null !== (QQ = UQ()) && void 0 !== QQ && QQ.items.ym())
          },
          pickBlockAllowed: () => !!oQ.b.get("creative") && !!oQ.b.get("canPickBlocks"),
          scrollHotbar: QQ => {
            OQ(DQ.yd.Hotbar, DQ.wd.Down | (QQ > 0 ? DQ.wd.Next : 0))
          },
          hasFullInventory: mQ.l,
          hasLobbyTab: () => (0, eQ.b)({
            lobbyLeaderboardInfo: oQ.b.get("lobbyLeaderboardInfo"),
            lobbyManage: oQ.b.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var QQ, FQ, wQ, LQ;
            const qQ = UQ();
            return {
              holdingGun: !1 !== (null === qQ || void 0 === qQ ? void 0 : qQ.localPlayerAlive()) && "Gun" === (null === qQ || void 0 === qQ || null === (QQ = qQ.items.ym()) || void 0 === QQ || null === (FQ = QQ.typeObj) || void 0 === FQ ? void 0 : FQ.type),
              customButtons: null !== (wQ = oQ.b.get("customButtons")) && void 0 !== wQ ? wQ : null,
              touchscreenActionButton: null !== (LQ = oQ.b.get("touchscreenActionButton")) && void 0 !== LQ ? LQ : null
            }
          },
          pressTouchButton: QQ => {
            QQ ? sQ(WQ) : rQ(WQ)
          }
        }
      },
      jQ = () => {
        const QQ = (0, qQ.e)(lQ()),
          FQ = (0, LQ.d)(),
          wQ = null;
        return () => {
          QQ(), FQ(), null === wQ || void 0 === wQ || wQ()
        }
      }
  },
  4638: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      Ab: () => zQ,
      B: () => LQ,
      Eb: () => IQ,
      F: () => oQ,
      I: () => tQ,
      Ib: () => TQ,
      L: () => gQ,
      Lb: () => UQ,
      Nb: () => AQ,
      O: () => uQ,
      Q: () => HQ,
      Qb: () => iQ,
      U: () => mQ,
      Ub: () => SQ,
      Vb: () => NQ,
      Y: () => eQ,
      Zb: () => XQ,
      ab: () => vQ,
      bc: () => KQ,
      cc: () => lQ,
      db: () => xQ,
      dc: () => jQ,
      e: () => EQ,
      eb: () => YQ,
      fc: () => cQ,
      h: () => JQ,
      hb: () => WQ,
      i: () => bQ,
      jc: () => CQ,
      l: () => pQ,
      lb: () => OQ,
      mc: () => VQ,
      n: () => hQ,
      nc: () => qQ,
      ob: () => sQ,
      pb: () => RQ,
      qb: () => rQ,
      r: () => GQ,
      rc: () => nQ,
      ub: () => fQ,
      v: () => MQ,
      wb: () => aQ,
      x: () => DQ,
      z: () => kQ
    });
    const LQ = 32,
      qQ = 33.333333333333336,
      oQ = {
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
      DQ = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      kQ = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      vQ = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      mQ = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      uQ = 7,
      HQ = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      bQ = {
        Look: 0,
        Remesh: 1
      },
      YQ = 8,
      xQ = 1,
      AQ = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      tQ = {
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
      eQ = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      MQ = {
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
      GQ = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      pQ = 4,
      cQ = 4,
      CQ = 65535,
      SQ = {
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
      iQ = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      WQ = 88,
      RQ = 0,
      OQ = 24,
      sQ = 48,
      rQ = 80,
      IQ = {
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
      UQ = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      NQ = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      TQ = {
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
      KQ = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      zQ = 65535,
      lQ = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      jQ = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      aQ = 2,
      XQ = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      fQ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      VQ = {
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
      hQ = {
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
      JQ = {
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
      EQ = 8,
      nQ = {
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
      gQ = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4621: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => sQ,
      B: () => MQ,
      F: () => DQ,
      H: () => kQ,
      I: () => WQ,
      d: () => iQ,
      e: () => pQ,
      f: () => IQ,
      g: () => rQ,
      k: () => eQ,
      n: () => CQ,
      r: () => GQ,
      v: () => cQ,
      x: () => RQ,
      y: () => OQ
    });
    var LQ = wQ(4626);
    const qQ = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let oQ = qQ;

    function DQ(QQ) {
      oQ = null !== QQ && void 0 !== QQ ? QQ : qQ
    }

    function kQ() {
      return oQ
    }
    const vQ = new Set,
      mQ = new Set;
    let uQ = -1;
    const HQ = new Set,
      bQ = new Set;
    let YQ = 0,
      xQ = 0;
    const AQ = new Set,
      tQ = new Set;

    function eQ(QQ) {
      return vQ.add(QQ), () => {
        vQ.delete(QQ)
      }
    }

    function MQ(QQ, FQ) {
      for (const LQ of vQ) try {
        LQ(QQ)
      } catch (wQ) {
        FQ(wQ)
      }
    }

    function GQ(QQ) {
      return mQ.add(QQ), () => {
        mQ.delete(QQ)
      }
    }

    function pQ(QQ, FQ) {
      const wQ = uQ < 0 ? 0 : QQ - uQ;
      uQ = QQ;
      for (const qQ of mQ) try {
        qQ(wQ)
      } catch (LQ) {
        FQ(LQ)
      }
    }

    function cQ(QQ) {
      return HQ.add(QQ), () => {
        HQ.delete(QQ)
      }
    }

    function CQ(QQ) {
      return bQ.add(QQ), () => {
        bQ.delete(QQ)
      }
    }
    let SQ = 0;

    function iQ(QQ) {
      SQ += QQ
    }

    function WQ() {
      const QQ = SQ;
      return SQ = 0, QQ
    }

    function RQ(QQ) {
      return AQ.add(QQ), () => {
        AQ.delete(QQ)
      }
    }

    function OQ(QQ) {
      return tQ.add(QQ), () => {
        tQ.delete(QQ)
      }
    }

    function sQ() {
      YQ = 0, xQ = 0, uQ = -1
    }

    function rQ(QQ, FQ) {
      if ("paced" === QQ) return xQ += FQ, null;
      if ("drawn" !== QQ && "skipped" !== QQ) return null;
      const wQ = FQ + xQ;
      return xQ = 0, wQ
    }

    function IQ(QQ, FQ, wQ, qQ) {
      const oQ = (0, LQ.h)(FQ),
        DQ = QQ > 0 ? performance.now() : 0;
      for (let LQ = 0; LQ < QQ; LQ++)
        for (const QQ of AQ) try {
          QQ()
        } catch (kQ) {
          qQ(kQ)
        }
      if (QQ > 0 && iQ(performance.now() - DQ), null !== wQ) {
        for (const QQ of HQ) try {
          QQ(wQ)
        } catch (kQ) {
          qQ(kQ)
        }
        YQ += wQ
      }
      if ("drawn" === FQ) {
        const QQ = YQ;
        YQ = 0;
        for (const FQ of bQ) try {
          FQ(QQ)
        } catch (kQ) {
          qQ(kQ)
        }
      }
      for (const LQ of tQ) try {
        LQ(QQ, oQ)
      } catch (kQ) {
        qQ(kQ)
      }
    }
  },
  4632: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      $: () => XQ,
      $b: () => qQ.k,
      $c: () => LQ.fc,
      Ab: () => rQ,
      Ac: () => LQ.Eb,
      Ad: () => kF,
      B: () => yQ,
      Cc: () => LQ.Ib,
      D: () => LQ.h,
      Db: () => OQ,
      Dd: () => AF,
      G: () => mQ,
      Gc: () => LQ.Lb,
      H: () => LQ.i,
      Hb: () => LQ.Y,
      Hd: () => pQ,
      I: () => dQ,
      Ic: () => BQ,
      J: () => LQ.l,
      Kc: () => LQ.Qb,
      Kd: () => gQ,
      L: () => PQ,
      Lb: () => IQ,
      Ld: () => KQ,
      O: () => LQ.v,
      Ob: () => cQ,
      Oc: () => LQ.Ub,
      Pc: () => LQ.Vb,
      Pd: () => TQ,
      Q: () => LQ.x,
      Qc: () => LQ.bc,
      Qd: () => NQ,
      R: () => LQ.z,
      Rb: () => DF,
      S: () => HQ,
      Sc: () => LQ.cc,
      T: () => MQ,
      U: () => LQ.B,
      Uc: () => LQ.dc,
      Ud: () => vQ,
      Vb: () => GQ,
      Xc: () => RQ,
      Y: () => LQ.F,
      Yd: () => zQ,
      Zb: () => HF,
      Zd: () => tF,
      ab: () => oF,
      ad: () => LQ.jc,
      ae: () => YQ,
      b: () => FF,
      bb: () => uQ,
      bd: () => LQ.nc,
      c: () => AQ,
      cc: () => eQ,
      cd: () => oQ,
      d: () => xQ,
      dc: () => LF,
      e: () => mF,
      ed: () => tQ,
      fb: () => LQ.I,
      fc: () => LQ.hb,
      gd: () => vF,
      h: () => WQ,
      hb: () => hQ,
      hc: () => LQ.lb,
      hd: () => aQ,
      ib: () => ZQ,
      id: () => fQ,
      jb: () => LQ.O,
      jc: () => LQ.ob,
      jd: () => jQ,
      kb: () => QF,
      l: () => SQ,
      m: () => LQ.e,
      mc: () => LQ.pb,
      md: () => JQ,
      n: () => bF,
      nb: () => wF,
      oc: () => LQ.qb,
      pb: () => LQ.Q,
      q: () => sQ,
      qd: () => VQ,
      rb: () => qQ.g,
      sb: () => iQ,
      sc: () => LQ.Ab,
      t: () => DQ,
      tc: () => xF,
      td: () => nQ,
      v: () => UQ,
      vc: () => uF,
      wb: () => lQ,
      wd: () => EQ,
      xc: () => qF,
      z: () => YF
    });
    var LQ = wQ(4638),
      qQ = wQ(2313);
    const oQ = Math.round(1e3 / LQ.nc),
      DQ = 4,
      kQ = 2;

    function vQ() {
      return crypto.getRandomValues(new Uint32Array(kQ))
    }
    const mQ = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      uQ = 16,
      HQ = {
        Draws: 1,
        NetAll: 2
      },
      bQ = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function YQ(QQ) {
      return (QQ.nametagsHidden ? CQ.NametagsHidden : 0) | (QQ.crouchToggle ? CQ.CrouchToggle : 0) | (QQ.bhopDisabled ? CQ.BhopDisabled : 0) | (QQ.disableBobbing ? CQ.DisableBobbing : 0) | (QQ.ezTowering ? CQ.EzTowering : 0) | (QQ.ezBridging ? CQ.EzBridging : 0) | (QQ.showChunkBorders ? CQ.ShowChunkBorders : 0)
    }
    const xQ = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      AQ = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      tQ = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      eQ = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      MQ = 5,
      GQ = 4294967295;

    function pQ(QQ) {
      return (QQ.showFog ? bQ.ShowFog : 0) | (QQ.lighting ? bQ.Lighting : 0) | (QQ.chunkFade ? bQ.ChunkFade : 0)
    }
    const cQ = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      CQ = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      SQ = {
        Release: 1,
        KeepTouches: 2
      },
      iQ = {
        Point: 1,
        Stamped: 2
      },
      WQ = {
        Add: 1,
        Clear: 2
      },
      RQ = 1,
      OQ = 8,
      sQ = 16777215,
      rQ = 4,
      IQ = {
        Resume: 1
      },
      UQ = {
        Held: 1
      };

    function NQ(QQ, FQ) {
      return (QQ | FQ << 8) >>> 0
    }

    function TQ(QQ) {
      return 255 & QQ
    }

    function KQ(QQ) {
      return QQ >>> 8
    }

    function zQ(QQ) {
      return QQ + 3 & -4
    }
    const lQ = 16777216,
      jQ = 20;
    const aQ = 8,
      XQ = 8,
      fQ = 16777216,
      VQ = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hQ = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      JQ = 16,
      EQ = {
        Lost: 0,
        Gone: 1
      },
      nQ = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function gQ(QQ) {
      return QQ === nQ.WorldgenSeed || QQ === nQ.Generate
    }
    const PQ = 4,
      ZQ = 99,
      yQ = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      BQ = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      dQ = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      QF = 12,
      FF = 16,
      wF = 4,
      LF = 12,
      qF = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      oF = 4,
      DF = 8,
      kF = 8,
      vF = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      mF = {
        Crit: 1,
        HitSelf: 2
      },
      uF = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      HF = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      bF = 12,
      YF = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      xF = 67108864;

    function AF(QQ) {
      for (const [FQ, wQ] of Object.entries(LQ.h))
        if (wQ === QQ) return FQ;
      return `Unknown${QQ}`
    }

    function tF(QQ) {
      return {
        status: QQ[LQ.F.Status],
        lastError: QQ[LQ.F.LastError],
        lastErrorDetail: QQ[LQ.F.LastErrorDetail],
        errorCount: QQ[LQ.F.ErrorCount],
        frameIndex: QQ[LQ.F.FrameIndex],
        tickIndex: QQ[LQ.F.TickIndex],
        renderPending: QQ[LQ.F.RenderPending],
        firstView: QQ[LQ.F.FirstView],
        chunksCancelled: QQ[LQ.F.ChunksCancelled]
      }
    }
  },
  4626: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      e: () => oQ,
      h: () => qQ
    });
    var LQ = wQ(4632);

    function qQ(QQ) {
      return "none" !== QQ
    }

    function oQ(QQ, FQ) {
      if (!QQ) return "none";
      switch (FQ) {
        case LQ.R.Drawn:
          return "drawn";
        case LQ.R.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function DQ(QQ) {
      return "drawn" === QQ
    }
  },
  4651: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      c: () => oQ,
      d: () => DQ,
      f: () => LQ,
      g: () => kQ
    });
    const LQ = {
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
      qQ = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      oQ = {
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
      DQ = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      kQ = [16]
  },
  40089: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ,
      g: () => oQ,
      j: () => qQ
    });
    let LQ = null;

    function qQ(QQ) {
      LQ = QQ
    }

    function oQ(QQ) {
      LQ === QQ && (LQ = null)
    }

    function DQ() {
      var QQ;
      null === (QQ = LQ) || void 0 === QQ || QQ()
    }
  },
  4657: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ,
      g: () => DQ,
      i: () => mQ
    });
    var LQ = wQ(2313),
      qQ = wQ(2320);
    const oQ = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function DQ(QQ) {
      return QQ instanceof HTMLElement && (!!(QQ.isContentEditable || QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLSelectElement) || QQ instanceof HTMLInputElement && !oQ.has(QQ.type))
    }

    function kQ(QQ) {
      let FQ = null;
      const wQ = wQ => {
          const qQ = DQ(wQ);
          qQ !== FQ && (FQ = qQ, QQ(LQ.i.UiCapture, LQ.w.Keyboard, 0, 0, qQ ? LQ.w.Keyboard : 0))
        },
        qQ = QQ => {
          wQ(QQ.target)
        },
        oQ = QQ => {
          wQ(QQ.relatedTarget)
        },
        kQ = () => {
          wQ(document.activeElement)
        },
        vQ = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", qQ, vQ), document.addEventListener("focusout", oQ, vQ), document.addEventListener("keydown", kQ, vQ), wQ(document.activeElement), () => {
        document.removeEventListener("focusin", qQ, vQ), document.removeEventListener("focusout", oQ, vQ), document.removeEventListener("keydown", kQ, vQ)
      }
    }
    const vQ = new Map;

    function mQ(QQ, FQ) {
      var wQ;
      let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      vQ.set(LQ, (null !== (wQ = vQ.get(LQ)) && void 0 !== wQ ? wQ : 0) & ~QQ | FQ & QQ);
      let oQ = 0;
      for (const qQ of vQ.values()) oQ |= qQ;
      return (0, qQ.A)(QQ, oQ & QQ)
    }
  },
  36561: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return QQ.includes("Leaf Bed")
    }

    function qQ(QQ) {
      return / Bed(?: Head)?(?:\||$)/.test(QQ) && !LQ(QQ)
    }

    function oQ(QQ) {
      return QQ.includes(" Strongbed")
    }

    function DQ(QQ) {
      return LQ(QQ) || qQ(QQ) || oQ(QQ)
    }
    wQ.d(FQ, {
      e: () => DQ,
      i: () => LQ,
      m: () => oQ,
      q: () => qQ
    })
  },
  36554: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => mQ
    });
    var LQ = wQ(36561),
      qQ = wQ(9195);
    const oQ = [],
      DQ = [],
      kQ = [],
      vQ = [];
    for (const uQ of Object.keys(qQ.k))(0, LQ.i)(uQ) ? oQ.push(uQ) : (0, LQ.q)(uQ) && DQ.push(uQ), (0, LQ.m)(uQ) && kQ.push(uQ), (uQ.includes(" Bed Head") || uQ.includes(" Strongbed Head")) && vQ.push(uQ);
    const mQ = {
      leafBeds: oQ,
      woolBeds: DQ,
      strongBeds: kQ,
      beds: [...oQ, ...DQ, ...kQ],
      bedHeads: vQ,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6314: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ,
      h: () => qQ,
      l: () => vQ,
      o: () => oQ,
      q: () => mQ,
      r: () => LQ,
      s: () => kQ
    });
    let LQ = function(QQ) {
        return QQ[QQ.DEFAULT = 0] = "DEFAULT", QQ[QQ.BOAT = 1] = "BOAT", QQ[QQ.GLIDER = 2] = "GLIDER", QQ[QQ.BALLOON = 3] = "BALLOON", QQ[QQ.SLEEPING = 4] = "SLEEPING", QQ[QQ.RIDING_MOB = 5] = "RIDING_MOB", QQ[QQ.CAR = 6] = "CAR", QQ[QQ.HOVERCRAFT = 7] = "HOVERCRAFT", QQ
      }({}),
      qQ = function(QQ) {
        return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.OBSIDIAN = 1] = "OBSIDIAN", QQ[QQ.SPEED = 2] = "SPEED", QQ
      }({}),
      oQ = function(QQ) {
        return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.IRON = 1] = "IRON", QQ[QQ.GOLD = 2] = "GOLD", QQ[QQ.DIAMOND = 3] = "DIAMOND", QQ
      }({}),
      DQ = function(QQ) {
        return QQ[QQ.YELLOW = 0] = "YELLOW", QQ[QQ.WHITE = 1] = "WHITE", QQ[QQ.RED = 2] = "RED", QQ[QQ.PURPLE = 3] = "PURPLE", QQ[QQ.PINK = 4] = "PINK", QQ[QQ.ORANGE = 5] = "ORANGE", QQ[QQ.MAGENTA = 6] = "MAGENTA", QQ[QQ.LIME = 7] = "LIME", QQ[QQ.LIGHT_GRAY = 8] = "LIGHT_GRAY", QQ[QQ.LIGHT_BLUE = 9] = "LIGHT_BLUE", QQ[QQ.GREEN = 10] = "GREEN", QQ[QQ.GRAY = 11] = "GRAY", QQ[QQ.CYAN = 12] = "CYAN", QQ[QQ.BROWN = 13] = "BROWN", QQ[QQ.BLUE = 14] = "BLUE", QQ[QQ.BLACK = 15] = "BLACK", QQ
      }({}),
      kQ = function(QQ) {
        return QQ[QQ.ROTATION_1 = 0] = "ROTATION_1", QQ[QQ.ROTATION_2 = 1] = "ROTATION_2", QQ[QQ.ROTATION_3 = 2] = "ROTATION_3", QQ[QQ.ROTATION_4 = 3] = "ROTATION_4", QQ
      }({}),
      vQ = function(QQ) {
        return QQ[QQ.KART = 0] = "KART", QQ[QQ.OFF_ROADER = 1] = "OFF_ROADER", QQ[QQ.CAR = 2] = "CAR", QQ[QQ.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", QQ[QQ.ARMORED_CAR = 4] = "ARMORED_CAR", QQ[QQ.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", QQ[QQ.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", QQ[QQ.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", QQ
      }({});
    LQ.DEFAULT, LQ.BOAT, qQ.SPEED, LQ.GLIDER, oQ.DIAMOND, LQ.BALLOON, DQ.BLACK, LQ.SLEEPING, kQ.ROTATION_4, LQ.RIDING_MOB, LQ.CAR, vQ.MOONSTONE_MINING_DRILL, LQ.HOVERCRAFT;
    let mQ = function(QQ) {
      return QQ[QQ.NORMAL = 0] = "NORMAL", QQ[QQ.GLIDING = 1] = "GLIDING", QQ[QQ.FLOATING = 2] = "FLOATING", QQ
    }({})
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);