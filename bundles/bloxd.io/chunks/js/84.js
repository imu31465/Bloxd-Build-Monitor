export const id = 84;
export const ids = [84];
export const modules = {
  39915: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      startWasmPadGameplay: () => dU
    });
    gU(39924);
    var tU = gU(39928),
      pU = gU(39942),
      EU = gU(1821),
      PU = gU(39955),
      TU = gU(4456),
      qU = gU(4443),
      KU = gU(39962),
      cU = gU(39971),
      GU = gU(4469),
      jU = gU(40049),
      uU = gU(2241),
      CU = gU(8480),
      hU = gU(39934),
      QU = gU(8457);
    const eU = UU => {
        const RU = GU.e.indexOf(UU);
        if (RU < 0) throw new Error(`No core action "${UU}"`);
        return RU
      },
      WU = eU("primary-fire"),
      fU = eU("alt-fire"),
      xU = eU("mid-fire"),
      mU = eU("jump"),
      IU = eU("ReloadGun"),
      JU = eU("SwapCameraZoom"),
      wU = eU("TouchAction1"),
      nU = {
        SpecialAction1: eU("SpecialAction1"),
        SpecialAction2: eU("SpecialAction2")
      },
      bU = (UU, RU) => {
        (0, uU.x)(TU.B.PadAction, UU, 0, 0, (0, uU.t)(RU, performance.now()))
      },
      oU = UU => {
        bU(UU, PU.Ed.Down)
      },
      ZU = UU => {
        bU(UU, 0)
      },
      aU = UU => {
        oU(UU), ZU(UU)
      },
      YU = () => {
        const UU = (0, cU.i)();
        return null !== UU && void 0 !== UU && UU.isCoreRunning ? UU : null
      },
      BU = UU => PU.w.playerFlags(UU.api.apiView, 0),
      VU = UU => null !== UU && PU.w.targetBlockId(UU.api.apiView, 0) !== PU.fd,
      rU = () => {
        const UU = (0, CU.c)(),
          RU = new hU.d;
        let gU = !1;
        const tU = (UU, RU) => {
            (0, uU.x)(TU.B.PadLook, PU.Kd.Rate, UU, RU, 0)
          },
          pU = () => {
            gU = !1, RU.reset(), tU(0, 0)
          };
        return {
          update: (pU, EU, qU) => {
            gU || (UU.discardPending(), gU = !0);
            const KU = (0, hU.p)(RU, pU, EU, qU, performance.now());
            tU(KU.yawRadPerSec, KU.pitchRadPerSec);
            const cU = UU.drainLookDelta();
            0 === cU.Xw && 0 === cU.Ow || (0, uU.x)(TU.B.PadLook, PU.Kd.Gyro, cU.Xw, cU.Ow, 0)
          },
          release: pU,
          uninstall: pU
        }
      },
      XU = () => {
        const UU = YU();
        return null !== UU && 0 !== (BU(UU) & PU.Pd.PadSneakToggled)
      },
      vU = () => {
        const UU = (UU => {
          const RU = UU => function() {
            return (0, jU.d)(), UU(...arguments)
          };
          return {
            primaryFireDown: RU((() => (oU(WU), 0))),
            primaryFireUp: RU((() => {
              ZU(WU)
            })),
            altFireDown: RU((() => (oU(fU), 0))),
            altFireUp: RU((() => {
              ZU(fU)
            })),
            jumpDown: RU((() => {
              aU(mU)
            })),
            specialActionDown: RU((UU => {
              oU(nU[UU])
            })),
            specialActionUp: RU((UU => {
              ZU(nU[UU])
            })),
            reloadGun: RU((() => {
              aU(IU)
            })),
            dropItem: RU((UU => {
              bU(PU.Fd.Drop, PU.Ed.Down | (UU ? PU.Ed.Stack : 0))
            })),
            swapCameraZoom: RU((() => {
              aU(JU)
            })),
            pickBlock: RU((() => (aU(xU), VU(UU()))))
          }
        })(YU);
        let RU = !1,
          gU = null;
        const tU = () => {
          var UU;
          null === (UU = gU) || void 0 === UU || UU(), gU = null
        };
        return {
          bodies: () => UU,
          look: rU(),
          move: (UU, gU) => {
            var pU;
            tU();
            const {
              bits: EU,
              flips: TU
            } = (UU => {
              if (null === UU) return {
                bits: PU.Hd.Peek,
                flips: 0
              };
              const RU = UU.sneakHeld ? PU.Hd.SneakHeld : 0;
              return "hold" === UU.mode ? {
                bits: RU | PU.Hd.SneakHoldMode,
                flips: UU.sneakTogglePressed ? 1 : 0
              } : {
                bits: RU,
                flips: UU.sneakPressed || UU.sneakTogglePressed ? 1 : 0
              }
            })(gU);
            null !== (pU = YU()) && void 0 !== pU && pU.padMove(UU.x, UU.y, UU.magnitude, UU.headingOffset, (UU => PU.Hd.Active | (UU.jumpHeld ? PU.Hd.JumpHeld : 0) | (UU.jumpPressed ? PU.Hd.JumpPressed : 0) | (UU.running ? PU.Hd.Running : 0) | (UU.sprintHeld ? PU.Hd.SprintHeld : 0))(UU) | EU, TU) && (RU = !0), (0, QU.h)(XU())
          },
          stopMoving: () => {
            var UU;
            RU && (RU = !(null !== (UU = YU()) && void 0 !== UU && UU.padMove(0, 0, 0, 0, 0, 0)), tU(), gU = (0, qU.x)((() => {
              tU(), (0, QU.h)(XU())
            })))
          },
          uninstall: tU,
          deviceChanged: UU => {
            var gU;
            "touch" === UU ? ((0, QU.h)(!1), null !== (gU = YU()) && void 0 !== gU && gU.padMove(0, 0, 0, 0, PU.Hd.EndToggle, 0) && (RU = !1)) : "gamepad" === UU && (0, QU.h)(XU())
          },
          hasPlayer: () => null !== YU(),
          isPlayerDead: () => {
            var UU;
            return !1 === (null === (UU = YU()) || void 0 === UU ? void 0 : UU.localPlayerAlive())
          },
          isReplayMode: () => {
            const UU = YU();
            return null !== UU && 0 !== (BU(UU) & PU.Pd.Replay)
          },
          isFreeCameraOn: () => {
            const UU = YU();
            return null !== UU && 0 !== (BU(UU) & PU.Pd.FreeCam)
          },
          targetsBlock: () => VU(YU()),
          selectedSlotEmpty: () => {
            var UU;
            return !(null !== (UU = YU()) && void 0 !== UU && UU.items.WT())
          },
          pickBlockAllowed: () => !!EU.b.get("creative") && !!EU.b.get("canPickBlocks"),
          scrollHotbar: UU => {
            bU(PU.Fd.Hotbar, PU.Ed.Down | (UU > 0 ? PU.Ed.Next : 0))
          },
          hasFullInventory: KU.n,
          hasLobbyLeaderboard: () => !!EU.b.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var UU, RU, gU, tU;
            const pU = YU();
            return {
              holdingGun: !1 !== (null === pU || void 0 === pU ? void 0 : pU.localPlayerAlive()) && "Gun" === (null === pU || void 0 === pU || null === (UU = pU.items.WT()) || void 0 === UU || null === (RU = UU.typeObj) || void 0 === RU ? void 0 : RU.type),
              customButtons: null !== (gU = EU.b.get("customButtons")) && void 0 !== gU ? gU : null,
              touchscreenActionButton: null !== (tU = EU.b.get("touchscreenActionButton")) && void 0 !== tU ? tU : null
            }
          },
          pressTouchButton: UU => {
            UU ? oU(wU) : ZU(wU)
          }
        }
      },
      dU = () => {
        const UU = (0, pU.d)(vU()),
          RU = (0, tU.e)(),
          gU = null;
        return () => {
          UU(), RU(), null === gU || void 0 === gU || gU()
        }
      }
  },
  4456: (UU, RU, gU) => {
    gU.d(RU, {
      $: () => oU,
      A: () => EU,
      B: () => CU,
      Db: () => mU,
      F: () => AU,
      G: () => KU,
      Gb: () => YU,
      Hb: () => HU,
      J: () => hU,
      L: () => qU,
      Lb: () => VU,
      M: () => jU,
      N: () => GU,
      Ob: () => XU,
      R: () => JU,
      Rb: () => vU,
      S: () => nU,
      Tb: () => fU,
      V: () => bU,
      X: () => wU,
      Xb: () => xU,
      Zb: () => sU,
      b: () => FU,
      bc: () => pU,
      db: () => SU,
      dc: () => iU,
      e: () => kU,
      g: () => cU,
      hb: () => dU,
      j: () => WU,
      kb: () => rU,
      n: () => yU,
      nb: () => ZU,
      p: () => eU,
      pb: () => BU,
      s: () => QU,
      tb: () => aU,
      v: () => PU,
      w: () => TU,
      wb: () => uU,
      x: () => tU,
      zb: () => IU
    });
    const tU = 32,
      pU = 33.333333333333336,
      EU = {
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
      PU = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      TU = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      qU = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      KU = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      cU = {
        Look: 0,
        Remesh: 1
      },
      GU = 8,
      jU = 1,
      uU = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      CU = {
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
      hU = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      QU = {
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
      eU = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      WU = 4,
      fU = 4,
      xU = 65535,
      mU = {
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
      IU = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      JU = 88,
      wU = 0,
      nU = 24,
      bU = 48,
      oU = 80,
      ZU = {
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
      aU = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      YU = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      BU = {
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
      VU = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      rU = 65535,
      XU = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      vU = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      dU = 2,
      HU = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      SU = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      sU = {
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
      yU = {
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
      kU = {
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
      FU = 8,
      iU = {
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
      AU = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4443: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => oU,
      D: () => ZU,
      F: () => WU,
      G: () => PU,
      J: () => TU,
      L: () => nU,
      c: () => wU,
      e: () => xU,
      i: () => YU,
      l: () => aU,
      n: () => eU,
      o: () => IU,
      s: () => fU,
      u: () => mU,
      x: () => bU
    });
    var tU = gU(4446);
    const pU = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let EU = pU;

    function PU(UU) {
      EU = null !== UU && void 0 !== UU ? UU : pU
    }

    function TU() {
      return EU
    }
    const qU = new Set,
      KU = new Set;
    let cU = -1;
    const GU = new Set,
      jU = new Set;
    let uU = 0,
      CU = 0;
    const hU = new Set,
      QU = new Set;

    function eU(UU) {
      return qU.add(UU), () => {
        qU.delete(UU)
      }
    }

    function WU(UU, RU) {
      for (const tU of qU) try {
        tU(UU)
      } catch (gU) {
        RU(gU)
      }
    }

    function fU(UU) {
      return KU.add(UU), () => {
        KU.delete(UU)
      }
    }

    function xU(UU, RU) {
      const gU = cU < 0 ? 0 : UU - cU;
      cU = UU;
      for (const pU of KU) try {
        pU(gU)
      } catch (tU) {
        RU(tU)
      }
    }

    function mU(UU) {
      return GU.add(UU), () => {
        GU.delete(UU)
      }
    }

    function IU(UU) {
      return jU.add(UU), () => {
        jU.delete(UU)
      }
    }
    let JU = 0;

    function wU(UU) {
      JU += UU
    }

    function nU() {
      const UU = JU;
      return JU = 0, UU
    }

    function bU(UU) {
      return hU.add(UU), () => {
        hU.delete(UU)
      }
    }

    function oU(UU) {
      return QU.add(UU), () => {
        QU.delete(UU)
      }
    }

    function ZU() {
      uU = 0, CU = 0, cU = -1
    }

    function aU(UU, RU) {
      if ("paced" === UU) return CU += RU, null;
      if ("drawn" !== UU && "skipped" !== UU) return null;
      const gU = RU + CU;
      return CU = 0, gU
    }

    function YU(UU, RU, gU, pU) {
      const EU = (0, tU.j)(RU),
        PU = UU > 0 ? performance.now() : 0;
      for (let tU = 0; tU < UU; tU++)
        for (const UU of hU) try {
          UU()
        } catch (TU) {
          pU(TU)
        }
      if (UU > 0 && wU(performance.now() - PU), null !== gU) {
        for (const UU of GU) try {
          UU(gU)
        } catch (TU) {
          pU(TU)
        }
        uU += gU
      }
      if ("drawn" === RU) {
        const UU = uU;
        uU = 0;
        for (const RU of jU) try {
          RU(UU)
        } catch (TU) {
          pU(TU)
        }
      }
      for (const tU of QU) try {
        tU(UU, EU)
      } catch (TU) {
        pU(TU)
      }
    }
  },
  4449: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => BU,
      Bc: () => tU.V,
      Bd: () => QU,
      Cc: () => tU.X,
      Db: () => LU,
      Ec: () => tU.$,
      F: () => jR,
      Fd: () => TR,
      Gb: () => OU,
      Hc: () => tU.kb,
      Id: () => SU,
      J: () => NU,
      Jc: () => uR,
      Kb: () => RR,
      L: () => tU.e,
      Lb: () => pU.d,
      Ld: () => yU,
      Mb: () => wU,
      Nc: () => KR,
      Ob: () => dU,
      Oc: () => tR,
      Od: () => HU,
      P: () => KU,
      Pb: () => aU,
      Pc: () => tU.nb,
      Pd: () => iU,
      R: () => tU.g,
      Rc: () => tU.pb,
      Sc: () => tU.tb,
      Tb: () => oU,
      U: () => tU.j,
      Uc: () => lU,
      V: () => DU,
      Vd: () => kU,
      Wb: () => tU.J,
      Wc: () => tU.zb,
      Xd: () => zU,
      Z: () => tU.s,
      Zb: () => YU,
      Zc: () => tU.Db,
      _: () => tU.v,
      _d: () => AU,
      ab: () => tU.w,
      ac: () => mU,
      ae: () => PR,
      b: () => UR,
      bd: () => tU.Gb,
      c: () => hU,
      cb: () => GU,
      de: () => CR,
      ec: () => ER,
      ee: () => xU,
      f: () => CU,
      fb: () => WU,
      fd: () => tU.Lb,
      fe: () => MU,
      g: () => qR,
      gc: () => fU,
      hd: () => tU.Ob,
      ib: () => tU.x,
      ie: () => XU,
      j: () => nU,
      jb: () => tU.A,
      kb: () => sU,
      kc: () => cR,
      kd: () => tU.Rb,
      ke: () => rU,
      ld: () => bU,
      m: () => JU,
      md: () => tU.Tb,
      me: () => VU,
      ob: () => pR,
      oc: () => pU.i,
      p: () => tU.b,
      pe: () => qU,
      qc: () => eU,
      qd: () => tU.Xb,
      s: () => GR,
      sb: () => cU,
      te: () => vU,
      uc: () => gR,
      ud: () => tU.bc,
      vb: () => tU.B,
      w: () => ZU,
      wc: () => tU.R,
      we: () => hR,
      x: () => PU,
      xd: () => EU,
      zb: () => FU,
      zc: () => tU.S,
      ze: () => uU
    });
    var tU = gU(4456),
      pU = gU(2233);
    const EU = Math.round(1e3 / tU.bc),
      PU = 4,
      TU = 2;

    function qU() {
      return crypto.getRandomValues(new Uint32Array(TU))
    }
    const KU = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      cU = 16,
      GU = {
        Draws: 1,
        NetAll: 2
      },
      jU = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function uU(UU) {
      return (UU.nametagsHidden ? IU.NametagsHidden : 0) | (UU.crouchToggle ? IU.CrouchToggle : 0) | (UU.bhopDisabled ? IU.BhopDisabled : 0) | (UU.disableBobbing ? IU.DisableBobbing : 0) | (UU.ezTowering ? IU.EzTowering : 0) | (UU.ezBridging ? IU.EzBridging : 0) | (UU.showChunkBorders ? IU.ShowChunkBorders : 0)
    }
    const CU = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      hU = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      QU = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      eU = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      WU = 5,
      fU = 4294967295;

    function xU(UU) {
      return (UU.showFog ? jU.ShowFog : 0) | (UU.lighting ? jU.Lighting : 0) | (UU.chunkFade ? jU.ChunkFade : 0)
    }
    const mU = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      IU = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      JU = {
        Release: 1,
        KeepTouches: 2
      },
      wU = {
        Point: 1,
        Stamped: 2
      },
      nU = {
        Add: 1,
        Clear: 2
      },
      bU = 1,
      oU = 8,
      ZU = 16777215,
      aU = 4,
      YU = {
        Resume: 1
      },
      BU = {
        Held: 1
      };

    function VU(UU, RU) {
      return (UU | RU << 8) >>> 0
    }

    function rU(UU) {
      return 255 & UU
    }

    function XU(UU) {
      return UU >>> 8
    }

    function vU(UU) {
      return UU + 3 & -4
    }
    const dU = 16777216,
      HU = 20;
    const SU = 8,
      sU = 8,
      yU = 16777216,
      kU = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      FU = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      iU = 16,
      AU = {
        Lost: 0,
        Gone: 1
      },
      zU = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function MU(UU) {
      return UU === zU.WorldgenSeed || UU === zU.Generate
    }
    const DU = 4,
      LU = 99,
      NU = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      lU = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      OU = 12,
      UR = 16,
      RR = 4,
      gR = 12,
      tR = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      pR = 4,
      ER = 8,
      PR = 8,
      TR = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      qR = {
        Crit: 1,
        HitSelf: 2
      },
      KR = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      cR = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      GR = 12,
      jR = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      uR = 67108864;

    function CR(UU) {
      for (const [RU, gU] of Object.entries(tU.e))
        if (gU === UU) return RU;
      return `Unknown${UU}`
    }

    function hR(UU) {
      return {
        status: UU[tU.A.Status],
        lastError: UU[tU.A.LastError],
        lastErrorDetail: UU[tU.A.LastErrorDetail],
        errorCount: UU[tU.A.ErrorCount],
        frameIndex: UU[tU.A.FrameIndex],
        tickIndex: UU[tU.A.TickIndex],
        renderPending: UU[tU.A.RenderPending],
        firstView: UU[tU.A.FirstView],
        chunksCancelled: UU[tU.A.ChunksCancelled]
      }
    }
  },
  4446: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      f: () => EU,
      j: () => pU
    });
    var tU = gU(4449);

    function pU(UU) {
      return "none" !== UU
    }

    function EU(UU, RU) {
      if (!UU) return "none";
      switch (RU) {
        case tU.ab.Drawn:
          return "drawn";
        case tU.ab.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function PU(UU) {
      return "drawn" === UU
    }
  },
  4469: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      g: () => EU,
      j: () => PU,
      n: () => tU,
      r: () => TU
    });
    const tU = {
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
      pU = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      EU = {
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
      PU = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      TU = [16]
  },
  40049: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      f: () => EU,
      j: () => pU
    });
    let tU = null;

    function pU(UU) {
      tU = UU
    }

    function EU(UU) {
      tU === UU && (tU = null)
    }

    function PU() {
      var UU;
      null === (UU = tU) || void 0 === UU || UU()
    }
  },
  4477: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      e: () => PU,
      f: () => KU
    });
    var tU = gU(2233),
      pU = gU(2241);
    const EU = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function PU(UU) {
      return UU instanceof HTMLElement && (!!(UU.isContentEditable || UU instanceof HTMLTextAreaElement || UU instanceof HTMLSelectElement) || UU instanceof HTMLInputElement && !EU.has(UU.type))
    }

    function TU(UU) {
      let RU = null;
      const gU = gU => {
          const pU = PU(gU);
          pU !== RU && (RU = pU, UU(tU.h.UiCapture, tU.z.Keyboard, 0, 0, pU ? tU.z.Keyboard : 0))
        },
        pU = UU => {
          gU(UU.target)
        },
        EU = UU => {
          gU(UU.relatedTarget)
        },
        TU = () => {
          gU(document.activeElement)
        },
        qU = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", pU, qU), document.addEventListener("focusout", EU, qU), document.addEventListener("keydown", TU, qU), gU(document.activeElement), () => {
        document.removeEventListener("focusin", pU, qU), document.removeEventListener("focusout", EU, qU), document.removeEventListener("keydown", TU, qU)
      }
    }
    const qU = new Map;

    function KU(UU, RU) {
      var gU;
      let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      qU.set(tU, (null !== (gU = qU.get(tU)) && void 0 !== gU ? gU : 0) & ~UU | RU & UU);
      let EU = 0;
      for (const pU of qU.values()) EU |= pU;
      return (0, pU.H)(UU, EU & UU)
    }
  },
  36470: (UU, RU, gU) => {
    function tU(UU) {
      return UU.includes("Leaf Bed")
    }

    function pU(UU) {
      return / Bed(?: Head)?(?:\||$)/.test(UU) && !tU(UU)
    }

    function EU(UU) {
      return UU.includes(" Strongbed")
    }

    function PU(UU) {
      return tU(UU) || pU(UU) || EU(UU)
    }
    gU.d(RU, {
      d: () => PU,
      e: () => tU,
      i: () => EU,
      m: () => pU
    })
  },
  36467: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU
    });
    var tU = gU(36470),
      pU = gU(9078);
    const EU = [],
      PU = [],
      TU = [],
      qU = [];
    for (const cU of Object.keys(pU.k))(0, tU.e)(cU) ? EU.push(cU) : (0, tU.m)(cU) && PU.push(cU), (0, tU.i)(cU) && TU.push(cU), (cU.includes(" Bed Head") || cU.includes(" Strongbed Head")) && qU.push(cU);
    const KU = {
      leafBeds: EU,
      woolBeds: PU,
      strongBeds: TU,
      beds: [...EU, ...PU, ...TU],
      bedHeads: qU,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6152: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      h: () => pU,
      l: () => qU,
      p: () => EU,
      r: () => KU,
      u: () => tU,
      y: () => TU
    });
    let tU = function(UU) {
        return UU[UU.DEFAULT = 0] = "DEFAULT", UU[UU.BOAT = 1] = "BOAT", UU[UU.GLIDER = 2] = "GLIDER", UU[UU.BALLOON = 3] = "BALLOON", UU[UU.SLEEPING = 4] = "SLEEPING", UU[UU.RIDING_MOB = 5] = "RIDING_MOB", UU[UU.CAR = 6] = "CAR", UU[UU.HOVERCRAFT = 7] = "HOVERCRAFT", UU
      }({}),
      pU = function(UU) {
        return UU[UU.WOOD = 0] = "WOOD", UU[UU.OBSIDIAN = 1] = "OBSIDIAN", UU[UU.SPEED = 2] = "SPEED", UU
      }({}),
      EU = function(UU) {
        return UU[UU.WOOD = 0] = "WOOD", UU[UU.IRON = 1] = "IRON", UU[UU.GOLD = 2] = "GOLD", UU[UU.DIAMOND = 3] = "DIAMOND", UU
      }({}),
      PU = function(UU) {
        return UU[UU.YELLOW = 0] = "YELLOW", UU[UU.WHITE = 1] = "WHITE", UU[UU.RED = 2] = "RED", UU[UU.PURPLE = 3] = "PURPLE", UU[UU.PINK = 4] = "PINK", UU[UU.ORANGE = 5] = "ORANGE", UU[UU.MAGENTA = 6] = "MAGENTA", UU[UU.LIME = 7] = "LIME", UU[UU.LIGHT_GRAY = 8] = "LIGHT_GRAY", UU[UU.LIGHT_BLUE = 9] = "LIGHT_BLUE", UU[UU.GREEN = 10] = "GREEN", UU[UU.GRAY = 11] = "GRAY", UU[UU.CYAN = 12] = "CYAN", UU[UU.BROWN = 13] = "BROWN", UU[UU.BLUE = 14] = "BLUE", UU[UU.BLACK = 15] = "BLACK", UU
      }({}),
      TU = function(UU) {
        return UU[UU.ROTATION_1 = 0] = "ROTATION_1", UU[UU.ROTATION_2 = 1] = "ROTATION_2", UU[UU.ROTATION_3 = 2] = "ROTATION_3", UU[UU.ROTATION_4 = 3] = "ROTATION_4", UU
      }({}),
      qU = function(UU) {
        return UU[UU.KART = 0] = "KART", UU[UU.OFF_ROADER = 1] = "OFF_ROADER", UU[UU.CAR = 2] = "CAR", UU[UU.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", UU[UU.ARMORED_CAR = 4] = "ARMORED_CAR", UU[UU.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", UU[UU.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", UU[UU.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", UU
      }({});
    tU.DEFAULT, tU.BOAT, pU.SPEED, tU.GLIDER, EU.DIAMOND, tU.BALLOON, PU.BLACK, tU.SLEEPING, TU.ROTATION_4, tU.RIDING_MOB, tU.CAR, qU.MOONSTONE_MINING_DRILL, tU.HOVERCRAFT;
    let KU = function(UU) {
      return UU[UU.NORMAL = 0] = "NORMAL", UU[UU.GLIDING = 1] = "GLIDING", UU[UU.FLOATING = 2] = "FLOATING", UU
    }({})
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);