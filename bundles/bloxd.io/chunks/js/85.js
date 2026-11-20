export const id = 85;
export const ids = [85];
export const modules = {
  40167: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      startWasmPadGameplay: () => uT
    });
    cT(40169);
    var lT = cT(40176),
      MT = cT(40194),
      KT = cT(1974),
      OT = cT(40204),
      yT = cT(4769),
      fT = cT(4748),
      xT = cT(40210),
      IT = cT(40215),
      AT = cT(4782),
      CT = cT(40298),
      jT = cT(2443),
      vT = cT(8886),
      tT = cT(40182),
      hT = cT(8860),
      NT = cT(38914);
    const QT = TT => {
        const kT = AT.e.indexOf(TT);
        if (kT < 0) throw new Error(`No core action "${TT}"`);
        return kT
      },
      ST = QT("primary-fire"),
      DT = QT("alt-fire"),
      aT = QT("mid-fire"),
      FT = QT("jump"),
      rT = QT("ReloadGun"),
      PT = QT("SwapCameraZoom"),
      wT = QT("TouchAction1"),
      mT = {
        SpecialAction1: QT("SpecialAction1"),
        SpecialAction2: QT("SpecialAction2")
      },
      bT = (TT, kT) => {
        (0, jT.x)(yT.C.PadAction, TT, 0, 0, (0, jT.w)(kT, performance.now()))
      },
      zT = TT => {
        bT(TT, OT.yd.Down)
      },
      JT = TT => {
        bT(TT, 0)
      },
      oT = TT => {
        zT(TT), JT(TT)
      },
      HT = () => {
        const TT = (0, IT.g)();
        return null !== TT && void 0 !== TT && TT.isCoreRunning ? TT : null
      },
      eT = TT => OT.A.playerFlags(TT.api.apiView, 0),
      GT = TT => null !== TT && OT.A.targetBlockId(TT.api.apiView, 0) !== OT.dd,
      VT = () => {
        const TT = (0, vT.d)(),
          kT = new tT.e;
        let cT = !1;
        const lT = (TT, kT) => {
            (0, jT.x)(yT.C.PadLook, OT.Id.Rate, TT, kT, 0)
          },
          MT = () => {
            cT = !1, kT.reset(), lT(0, 0)
          };
        return {
          update: (MT, KT, fT) => {
            cT || (TT.discardPending(), cT = !0);
            const xT = (0, tT.t)(kT, MT, KT, fT, performance.now());
            lT(xT.yawRadPerSec, xT.pitchRadPerSec);
            const IT = TT.drainLookDelta();
            0 === IT.Rm && 0 === IT.Wm || (0, jT.x)(yT.C.PadLook, OT.Id.Gyro, IT.Rm, IT.Wm, 0)
          },
          release: MT,
          uninstall: MT
        }
      },
      ET = () => {
        const TT = HT();
        return null !== TT && 0 !== (eT(TT) & OT.Od.PadSneakToggled)
      },
      ZT = () => {
        const TT = (TT => {
          const kT = TT => function() {
            return (0, CT.e)(), TT(...arguments)
          };
          return {
            primaryFireDown: kT((() => (zT(ST), 0))),
            primaryFireUp: kT((() => {
              JT(ST)
            })),
            altFireDown: kT((() => (zT(DT), 0))),
            altFireUp: kT((() => {
              JT(DT)
            })),
            jumpDown: kT((() => {
              oT(FT)
            })),
            specialActionDown: kT((TT => {
              zT(mT[TT])
            })),
            specialActionUp: kT((TT => {
              JT(mT[TT])
            })),
            reloadGun: kT((() => {
              oT(rT)
            })),
            dropItem: kT((TT => {
              bT(OT.Bd.Drop, OT.yd.Down | (TT ? OT.yd.Stack : 0))
            })),
            swapCameraZoom: kT((() => {
              oT(PT)
            })),
            pickBlock: kT((() => (oT(aT), GT(TT()))))
          }
        })(HT);
        let kT = !1,
          cT = null;
        const lT = () => {
          var TT;
          null === (TT = cT) || void 0 === TT || TT(), cT = null
        };
        return {
          bodies: () => TT,
          look: VT(),
          move: (TT, cT) => {
            var MT;
            lT();
            const {
              bits: KT,
              flips: yT
            } = (TT => {
              if (null === TT) return {
                bits: OT.Fd.Peek,
                flips: 0
              };
              const kT = TT.sneakHeld ? OT.Fd.SneakHeld : 0;
              return "hold" === TT.mode ? {
                bits: kT | OT.Fd.SneakHoldMode,
                flips: TT.sneakTogglePressed ? 1 : 0
              } : {
                bits: kT,
                flips: TT.sneakPressed || TT.sneakTogglePressed ? 1 : 0
              }
            })(cT);
            null !== (MT = HT()) && void 0 !== MT && MT.padMove(TT.x, TT.y, TT.magnitude, TT.headingOffset, (TT => OT.Fd.Active | (TT.jumpHeld ? OT.Fd.JumpHeld : 0) | (TT.jumpPressed ? OT.Fd.JumpPressed : 0) | (TT.running ? OT.Fd.Running : 0) | (TT.sprintHeld ? OT.Fd.SprintHeld : 0))(TT) | KT, yT) && (kT = !0), (0, hT.e)(ET())
          },
          stopMoving: () => {
            var TT;
            kT && (kT = !(null !== (TT = HT()) && void 0 !== TT && TT.padMove(0, 0, 0, 0, 0, 0)), lT(), cT = (0, fT.s)((() => {
              lT(), (0, hT.e)(ET())
            })))
          },
          uninstall: lT,
          deviceChanged: TT => {
            var cT;
            "touch" === TT ? ((0, hT.e)(!1), null !== (cT = HT()) && void 0 !== cT && cT.padMove(0, 0, 0, 0, OT.Fd.EndToggle, 0) && (kT = !1)) : "gamepad" === TT && (0, hT.e)(ET())
          },
          hasPlayer: () => null !== HT(),
          isPlayerDead: () => {
            var TT;
            return !1 === (null === (TT = HT()) || void 0 === TT ? void 0 : TT.localPlayerAlive())
          },
          isReplayMode: () => {
            const TT = HT();
            return null !== TT && 0 !== (eT(TT) & OT.Od.Replay)
          },
          isFreeCameraOn: () => {
            const TT = HT();
            return null !== TT && 0 !== (eT(TT) & OT.Od.FreeCam)
          },
          targetsBlock: () => GT(HT()),
          selectedSlotEmpty: () => {
            var TT;
            return !(null !== (TT = HT()) && void 0 !== TT && TT.items.ty())
          },
          pickBlockAllowed: () => !!KT.b.get("creative") && !!KT.b.get("canPickBlocks"),
          scrollHotbar: TT => {
            bT(OT.Bd.Hotbar, OT.yd.Down | (TT > 0 ? OT.yd.Next : 0))
          },
          hasFullInventory: xT.q,
          hasLobbyTab: () => (0, NT.b)({
            lobbyLeaderboardInfo: KT.b.get("lobbyLeaderboardInfo"),
            lobbyManage: KT.b.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var TT, kT, cT, lT;
            const MT = HT();
            return {
              holdingGun: !1 !== (null === MT || void 0 === MT ? void 0 : MT.localPlayerAlive()) && "Gun" === (null === MT || void 0 === MT || null === (TT = MT.items.ty()) || void 0 === TT || null === (kT = TT.typeObj) || void 0 === kT ? void 0 : kT.type),
              customButtons: null !== (cT = KT.b.get("customButtons")) && void 0 !== cT ? cT : null,
              touchscreenActionButton: null !== (lT = KT.b.get("touchscreenActionButton")) && void 0 !== lT ? lT : null
            }
          },
          pressTouchButton: TT => {
            TT ? zT(wT) : JT(wT)
          }
        }
      },
      uT = () => {
        const TT = (0, MT.d)(ZT()),
          kT = (0, lT.d)(),
          cT = null;
        return () => {
          TT(), kT(), null === cT || void 0 === cT || cT()
        }
      }
  },
  4769: (TT, kT, cT) => {
    cT.d(kT, {
      $: () => bT,
      Ab: () => aT,
      B: () => KT,
      Bb: () => oT,
      C: () => vT,
      D: () => YT,
      Fb: () => uT,
      H: () => xT,
      Hb: () => eT,
      K: () => tT,
      Kb: () => VT,
      L: () => fT,
      Mb: () => ET,
      O: () => CT,
      Ob: () => ST,
      P: () => AT,
      R: () => rT,
      Sb: () => DT,
      Tb: () => dT,
      V: () => wT,
      Vb: () => MT,
      Xb: () => UT,
      Y: () => mT,
      _: () => PT,
      ab: () => XT,
      cb: () => ZT,
      d: () => gT,
      e: () => RT,
      g: () => IT,
      gb: () => GT,
      j: () => QT,
      kb: () => zT,
      n: () => LT,
      ob: () => HT,
      q: () => NT,
      sb: () => JT,
      t: () => hT,
      vb: () => jT,
      x: () => OT,
      y: () => yT,
      yb: () => FT,
      z: () => lT
    });
    const lT = 32,
      MT = 33.333333333333336,
      KT = {
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
      OT = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      yT = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      fT = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      xT = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      IT = {
        Look: 0,
        Remesh: 1
      },
      AT = 8,
      CT = 1,
      jT = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      vT = {
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
      tT = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      hT = {
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
      NT = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      QT = 4,
      ST = 4,
      DT = 65535,
      aT = {
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
      FT = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      rT = 88,
      PT = 0,
      wT = 24,
      mT = 48,
      bT = 80,
      zT = {
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
      JT = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      oT = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      HT = {
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
      eT = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      GT = 65535,
      VT = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      ET = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      ZT = 2,
      uT = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      XT = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      dT = {
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
      LT = {
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
      RT = {
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
      gT = 8,
      UT = {
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
      YT = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4748: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => QT,
      E: () => OT,
      G: () => yT,
      J: () => wT,
      c: () => PT,
      g: () => DT,
      h: () => oT,
      i: () => JT,
      j: () => NT,
      m: () => FT,
      n: () => ST,
      q: () => aT,
      s: () => mT,
      u: () => bT,
      y: () => zT
    });
    var lT = cT(4755);
    const MT = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let KT = MT;

    function OT(TT) {
      KT = null !== TT && void 0 !== TT ? TT : MT
    }

    function yT() {
      return KT
    }
    const fT = new Set,
      xT = new Set;
    let IT = -1;
    const AT = new Set,
      CT = new Set;
    let jT = 0,
      vT = 0;
    const tT = new Set,
      hT = new Set;

    function NT(TT) {
      return fT.add(TT), () => {
        fT.delete(TT)
      }
    }

    function QT(TT, kT) {
      for (const lT of fT) try {
        lT(TT)
      } catch (cT) {
        kT(cT)
      }
    }

    function ST(TT) {
      return xT.add(TT), () => {
        xT.delete(TT)
      }
    }

    function DT(TT, kT) {
      const cT = IT < 0 ? 0 : TT - IT;
      IT = TT;
      for (const MT of xT) try {
        MT(cT)
      } catch (lT) {
        kT(lT)
      }
    }

    function aT(TT) {
      return AT.add(TT), () => {
        AT.delete(TT)
      }
    }

    function FT(TT) {
      return CT.add(TT), () => {
        CT.delete(TT)
      }
    }
    let rT = 0;

    function PT(TT) {
      rT += TT
    }

    function wT() {
      const TT = rT;
      return rT = 0, TT
    }

    function mT(TT) {
      return tT.add(TT), () => {
        tT.delete(TT)
      }
    }

    function bT(TT) {
      return hT.add(TT), () => {
        hT.delete(TT)
      }
    }

    function zT() {
      jT = 0, vT = 0, IT = -1
    }

    function JT(TT, kT) {
      if ("paced" === TT) return vT += kT, null;
      if ("drawn" !== TT && "skipped" !== TT) return null;
      const cT = kT + vT;
      return vT = 0, cT
    }

    function oT(TT, kT, cT, MT) {
      const KT = (0, lT.k)(kT),
        OT = TT > 0 ? performance.now() : 0;
      for (let lT = 0; lT < TT; lT++)
        for (const TT of tT) try {
          TT()
        } catch (yT) {
          MT(yT)
        }
      if (TT > 0 && PT(performance.now() - OT), null !== cT) {
        for (const TT of AT) try {
          TT(cT)
        } catch (yT) {
          MT(yT)
        }
        jT += cT
      }
      if ("drawn" === kT) {
        const TT = jT;
        jT = 0;
        for (const kT of CT) try {
          kT(TT)
        } catch (yT) {
          MT(yT)
        }
      }
      for (const lT of hT) try {
        lT(TT, KT)
      } catch (yT) {
        MT(yT)
      }
    }
  },
  4761: (TT, kT, cT) => {
    cT.d(kT, {
      $: () => lT.y,
      $b: () => ST,
      $c: () => lT.Ab,
      B: () => iT,
      Bb: () => Tk,
      Dc: () => Ik,
      Dd: () => LT,
      E: () => lT.e,
      Ed: () => uT,
      Fb: () => ck,
      Fd: () => UT,
      Gc: () => Mk,
      H: () => xT,
      Hb: () => MT.c,
      Id: () => RT,
      Jb: () => PT,
      Jc: () => lT.kb,
      K: () => lT.g,
      Lb: () => ZT,
      Mb: () => JT,
      Md: () => BT,
      Nc: () => lT.ob,
      O: () => sT,
      Od: () => YT,
      Pb: () => bT,
      Q: () => lT.j,
      Qb: () => lT.K,
      Rc: () => lT.sb,
      Rd: () => yk,
      U: () => nT,
      Ub: () => oT,
      Vc: () => qT,
      Vd: () => tk,
      W: () => lT.t,
      Xb: () => aT,
      Xc: () => lT.yb,
      Zb: () => Ok,
      Zd: () => DT,
      _: () => lT.x,
      ac: () => Ak,
      ae: () => WT,
      bc: () => MT.j,
      be: () => VT,
      cd: () => lT.Bb,
      d: () => kk,
      db: () => AT,
      de: () => GT,
      e: () => tT,
      eb: () => QT,
      ec: () => NT,
      fc: () => lk,
      fe: () => eT,
      gd: () => lT.Hb,
      hb: () => lT.z,
      hc: () => lT.R,
      i: () => vT,
      id: () => lT.Kb,
      j: () => xk,
      je: () => fT,
      kb: () => lT.B,
      kd: () => lT.Mb,
      ke: () => ET,
      lb: () => dT,
      lc: () => lT.V,
      ld: () => mT,
      m: () => wT,
      mb: () => Kk,
      md: () => lT.Ob,
      n: () => rT,
      nd: () => lT.Sb,
      oe: () => hk,
      p: () => lT.d,
      pb: () => IT,
      pc: () => lT.Y,
      q: () => Ck,
      qd: () => lT.Vb,
      qe: () => jT,
      r: () => zT,
      rb: () => lT.C,
      rc: () => lT._,
      sc: () => lT.$,
      sd: () => KT,
      t: () => OT,
      vb: () => gT,
      vd: () => hT,
      w: () => HT,
      wc: () => lT.gb,
      x: () => jk,
      yd: () => fk,
      zb: () => pT,
      zc: () => vk,
      zd: () => XT
    });
    var lT = cT(4769),
      MT = cT(2435);
    const KT = Math.round(1e3 / lT.Vb),
      OT = 4,
      yT = 2;

    function fT() {
      return crypto.getRandomValues(new Uint32Array(yT))
    }
    const xT = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      IT = 16,
      AT = {
        Draws: 1,
        NetAll: 2
      },
      CT = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function jT(TT) {
      return (TT.nametagsHidden ? FT.NametagsHidden : 0) | (TT.crouchToggle ? FT.CrouchToggle : 0) | (TT.bhopDisabled ? FT.BhopDisabled : 0) | (TT.disableBobbing ? FT.DisableBobbing : 0) | (TT.ezTowering ? FT.EzTowering : 0) | (TT.ezBridging ? FT.EzBridging : 0) | (TT.showChunkBorders ? FT.ShowChunkBorders : 0)
    }
    const vT = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      tT = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      hT = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      NT = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      QT = 5,
      ST = 4294967295;

    function DT(TT) {
      return (TT.showFog ? CT.ShowFog : 0) | (TT.lighting ? CT.Lighting : 0) | (TT.chunkFade ? CT.ChunkFade : 0)
    }
    const aT = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      FT = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      rT = {
        Release: 1,
        KeepTouches: 2
      },
      PT = {
        Point: 1,
        Stamped: 2
      },
      wT = {
        Add: 1,
        Clear: 2
      },
      mT = 1,
      bT = 8,
      zT = 16777215,
      JT = 4,
      oT = {
        Resume: 1
      },
      HT = {
        Held: 1
      };

    function eT(TT, kT) {
      return (TT | kT << 8) >>> 0
    }

    function GT(TT) {
      return 255 & TT
    }

    function VT(TT) {
      return TT >>> 8
    }

    function ET(TT) {
      return TT + 3 & -4
    }
    const ZT = 16777216,
      uT = 20;
    const XT = 8,
      dT = 8,
      LT = 16777216,
      RT = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      gT = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      UT = 16,
      YT = {
        Lost: 0,
        Gone: 1
      },
      BT = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function WT(TT) {
      return TT === BT.WorldgenSeed || TT === BT.Generate
    }
    const nT = 4,
      pT = 99,
      iT = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      qT = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      sT = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      Tk = 12,
      kk = 16,
      ck = 4,
      lk = 12,
      Mk = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Kk = 4,
      Ok = 8,
      yk = 8,
      fk = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      xk = {
        Crit: 1,
        HitSelf: 2
      },
      Ik = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Ak = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Ck = 12,
      jk = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      vk = 67108864;

    function tk(TT) {
      for (const [kT, cT] of Object.entries(lT.e))
        if (cT === TT) return kT;
      return `Unknown${TT}`
    }

    function hk(TT) {
      return {
        status: TT[lT.B.Status],
        lastError: TT[lT.B.LastError],
        lastErrorDetail: TT[lT.B.LastErrorDetail],
        errorCount: TT[lT.B.ErrorCount],
        frameIndex: TT[lT.B.FrameIndex],
        tickIndex: TT[lT.B.TickIndex],
        renderPending: TT[lT.B.RenderPending],
        firstView: TT[lT.B.FirstView],
        chunksCancelled: TT[lT.B.ChunksCancelled]
      }
    }
  },
  4755: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      g: () => KT,
      k: () => MT
    });
    var lT = cT(4761);

    function MT(TT) {
      return "none" !== TT
    }

    function KT(TT, kT) {
      if (!TT) return "none";
      switch (kT) {
        case lT.$.Drawn:
          return "drawn";
        case lT.$.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function OT(TT) {
      return "drawn" === TT
    }
  },
  4782: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      i: () => KT,
      j: () => OT,
      k: () => lT,
      l: () => yT
    });
    const lT = {
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
      MT = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      KT = {
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
      OT = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      yT = [16]
  },
  40298: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      f: () => KT,
      h: () => MT
    });
    let lT = null;

    function MT(TT) {
      lT = TT
    }

    function KT(TT) {
      lT === TT && (lT = null)
    }

    function OT() {
      var TT;
      null === (TT = lT) || void 0 === TT || TT()
    }
  },
  4787: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      f: () => OT,
      h: () => xT
    });
    var lT = cT(2435),
      MT = cT(2443);
    const KT = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function OT(TT) {
      return TT instanceof HTMLElement && (!!(TT.isContentEditable || TT instanceof HTMLTextAreaElement || TT instanceof HTMLSelectElement) || TT instanceof HTMLInputElement && !KT.has(TT.type))
    }

    function yT(TT) {
      let kT = null;
      const cT = cT => {
          const MT = OT(cT);
          MT !== kT && (kT = MT, TT(lT.g.UiCapture, lT.s.Keyboard, 0, 0, MT ? lT.s.Keyboard : 0))
        },
        MT = TT => {
          cT(TT.target)
        },
        KT = TT => {
          cT(TT.relatedTarget)
        },
        yT = () => {
          cT(document.activeElement)
        },
        fT = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", MT, fT), document.addEventListener("focusout", KT, fT), document.addEventListener("keydown", yT, fT), cT(document.activeElement), () => {
        document.removeEventListener("focusin", MT, fT), document.removeEventListener("focusout", KT, fT), document.removeEventListener("keydown", yT, fT)
      }
    }
    const fT = new Map;

    function xT(TT, kT) {
      var cT;
      let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      fT.set(lT, (null !== (cT = fT.get(lT)) && void 0 !== cT ? cT : 0) & ~TT | kT & TT);
      let KT = 0;
      for (const MT of fT.values()) KT |= MT;
      return (0, MT.B)(TT, KT & TT)
    }
  },
  36761: (TT, kT, cT) => {
    function lT(TT) {
      return TT.includes("Leaf Bed")
    }

    function MT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !lT(TT)
    }

    function KT(TT) {
      return TT.includes(" Strongbed")
    }

    function OT(TT) {
      return lT(TT) || MT(TT) || KT(TT)
    }
    cT.d(kT, {
      c: () => OT,
      d: () => lT,
      e: () => KT,
      g: () => MT
    })
  },
  36756: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => xT
    });
    var lT = cT(36761),
      MT = cT(9447);
    const KT = [],
      OT = [],
      yT = [],
      fT = [];
    for (const IT of Object.keys(MT.n))(0, lT.d)(IT) ? KT.push(IT) : (0, lT.g)(IT) && OT.push(IT), (0, lT.e)(IT) && yT.push(IT), (IT.includes(" Bed Head") || IT.includes(" Strongbed Head")) && fT.push(IT);
    const xT = {
      leafBeds: KT,
      woolBeds: OT,
      strongBeds: yT,
      beds: [...KT, ...OT, ...yT],
      bedHeads: fT,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6486: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      i: () => MT,
      m: () => fT,
      q: () => KT,
      s: () => xT,
      v: () => lT,
      w: () => yT
    });
    let lT = function(TT) {
        return TT[TT.DEFAULT = 0] = "DEFAULT", TT[TT.BOAT = 1] = "BOAT", TT[TT.GLIDER = 2] = "GLIDER", TT[TT.BALLOON = 3] = "BALLOON", TT[TT.SLEEPING = 4] = "SLEEPING", TT[TT.RIDING_MOB = 5] = "RIDING_MOB", TT[TT.CAR = 6] = "CAR", TT[TT.HOVERCRAFT = 7] = "HOVERCRAFT", TT
      }({}),
      MT = function(TT) {
        return TT[TT.WOOD = 0] = "WOOD", TT[TT.OBSIDIAN = 1] = "OBSIDIAN", TT[TT.SPEED = 2] = "SPEED", TT
      }({}),
      KT = function(TT) {
        return TT[TT.WOOD = 0] = "WOOD", TT[TT.IRON = 1] = "IRON", TT[TT.GOLD = 2] = "GOLD", TT[TT.DIAMOND = 3] = "DIAMOND", TT
      }({}),
      OT = function(TT) {
        return TT[TT.YELLOW = 0] = "YELLOW", TT[TT.WHITE = 1] = "WHITE", TT[TT.RED = 2] = "RED", TT[TT.PURPLE = 3] = "PURPLE", TT[TT.PINK = 4] = "PINK", TT[TT.ORANGE = 5] = "ORANGE", TT[TT.MAGENTA = 6] = "MAGENTA", TT[TT.LIME = 7] = "LIME", TT[TT.LIGHT_GRAY = 8] = "LIGHT_GRAY", TT[TT.LIGHT_BLUE = 9] = "LIGHT_BLUE", TT[TT.GREEN = 10] = "GREEN", TT[TT.GRAY = 11] = "GRAY", TT[TT.CYAN = 12] = "CYAN", TT[TT.BROWN = 13] = "BROWN", TT[TT.BLUE = 14] = "BLUE", TT[TT.BLACK = 15] = "BLACK", TT
      }({}),
      yT = function(TT) {
        return TT[TT.ROTATION_1 = 0] = "ROTATION_1", TT[TT.ROTATION_2 = 1] = "ROTATION_2", TT[TT.ROTATION_3 = 2] = "ROTATION_3", TT[TT.ROTATION_4 = 3] = "ROTATION_4", TT
      }({}),
      fT = function(TT) {
        return TT[TT.KART = 0] = "KART", TT[TT.OFF_ROADER = 1] = "OFF_ROADER", TT[TT.CAR = 2] = "CAR", TT[TT.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", TT[TT.ARMORED_CAR = 4] = "ARMORED_CAR", TT[TT.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", TT[TT.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", TT[TT.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", TT
      }({});
    lT.DEFAULT, lT.BOAT, MT.SPEED, lT.GLIDER, KT.DIAMOND, lT.BALLOON, OT.BLACK, lT.SLEEPING, yT.ROTATION_4, lT.RIDING_MOB, lT.CAR, fT.MOONSTONE_MINING_DRILL, lT.HOVERCRAFT;
    let xT = function(TT) {
      return TT[TT.NORMAL = 0] = "NORMAL", TT[TT.GLIDING = 1] = "GLIDING", TT[TT.FLOATING = 2] = "FLOATING", TT
    }({})
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);