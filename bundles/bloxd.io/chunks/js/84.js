export const id = 84;
export const ids = [84];
export const modules = {
  40117: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      startWasmPadGameplay: () => cu
    });
    yu(40125);
    var Eu = yu(40127),
      Ku = yu(40145),
      Qu = yu(1878),
      mu = yu(40160),
      Ju = yu(4564),
      Nu = yu(4549),
      Xu = yu(40166),
      Vu = yu(40173),
      ru = yu(4578),
      Bu = yu(40243),
      xu = yu(2312),
      Su = yu(8594),
      pu = yu(40132),
      Tu = yu(8566);
    const Wu = uu => {
        const Ru = ru.b.indexOf(uu);
        if (Ru < 0) throw new Error(`No core action "${uu}"`);
        return Ru
      },
      ju = Wu("primary-fire"),
      Hu = Wu("alt-fire"),
      du = Wu("mid-fire"),
      bu = Wu("jump"),
      Cu = Wu("ReloadGun"),
      ku = Wu("SwapCameraZoom"),
      eu = Wu("TouchAction1"),
      Au = {
        SpecialAction1: Wu("SpecialAction1"),
        SpecialAction2: Wu("SpecialAction2")
      },
      Du = (uu, Ru) => {
        (0, xu.z)(Ju.G.PadAction, uu, 0, 0, (0, xu.v)(Ru, performance.now()))
      },
      Mu = uu => {
        Du(uu, mu.Ad.Down)
      },
      Iu = uu => {
        Du(uu, 0)
      },
      Gu = uu => {
        Mu(uu), Iu(uu)
      },
      Uu = () => {
        const uu = (0, Vu.i)();
        return null !== uu && void 0 !== uu && uu.isCoreRunning ? uu : null
      },
      nu = uu => mu.v.playerFlags(uu.api.apiView, 0),
      su = uu => null !== uu && mu.v.targetBlockId(uu.api.apiView, 0) !== mu.ad,
      tu = () => {
        const uu = (0, Su.d)(),
          Ru = new pu.e;
        let yu = !1;
        const Eu = (uu, Ru) => {
            (0, xu.z)(Ju.G.PadLook, mu.Id.Rate, uu, Ru, 0)
          },
          Ku = () => {
            yu = !1, Ru.reset(), Eu(0, 0)
          };
        return {
          update: (Ku, Qu, Nu) => {
            yu || (uu.discardPending(), yu = !0);
            const Xu = (0, pu.p)(Ru, Ku, Qu, Nu, performance.now());
            Eu(Xu.yawRadPerSec, Xu.pitchRadPerSec);
            const Vu = uu.drainLookDelta();
            0 === Vu.RD && 0 === Vu.mD || (0, xu.z)(Ju.G.PadLook, mu.Id.Gyro, Vu.RD, Vu.mD, 0)
          },
          release: Ku,
          uninstall: Ku
        }
      },
      lu = () => {
        const uu = Uu();
        return null !== uu && 0 !== (nu(uu) & mu.Nd.PadSneakToggled)
      },
      gu = () => {
        const uu = (uu => {
          const Ru = uu => function() {
            return (0, Bu.e)(), uu(...arguments)
          };
          return {
            primaryFireDown: Ru((() => (Mu(ju), 0))),
            primaryFireUp: Ru((() => {
              Iu(ju)
            })),
            altFireDown: Ru((() => (Mu(Hu), 0))),
            altFireUp: Ru((() => {
              Iu(Hu)
            })),
            jumpDown: Ru((() => {
              Gu(bu)
            })),
            specialActionDown: Ru((uu => {
              Mu(Au[uu])
            })),
            specialActionUp: Ru((uu => {
              Iu(Au[uu])
            })),
            reloadGun: Ru((() => {
              Gu(Cu)
            })),
            dropItem: Ru((uu => {
              Du(mu.Cd.Drop, mu.Ad.Down | (uu ? mu.Ad.Stack : 0))
            })),
            swapCameraZoom: Ru((() => {
              Gu(ku)
            })),
            pickBlock: Ru((() => (Gu(du), su(uu()))))
          }
        })(Uu);
        let Ru = !1,
          yu = null;
        const Eu = () => {
          var uu;
          null === (uu = yu) || void 0 === uu || uu(), yu = null
        };
        return {
          bodies: () => uu,
          look: tu(),
          move: (uu, yu) => {
            var Ku;
            Eu();
            const {
              bits: Qu,
              flips: Ju
            } = (uu => {
              if (null === uu) return {
                bits: mu.Fd.Peek,
                flips: 0
              };
              const Ru = uu.sneakHeld ? mu.Fd.SneakHeld : 0;
              return "hold" === uu.mode ? {
                bits: Ru | mu.Fd.SneakHoldMode,
                flips: uu.sneakTogglePressed ? 1 : 0
              } : {
                bits: Ru,
                flips: uu.sneakPressed || uu.sneakTogglePressed ? 1 : 0
              }
            })(yu);
            null !== (Ku = Uu()) && void 0 !== Ku && Ku.padMove(uu.x, uu.y, uu.magnitude, uu.headingOffset, (uu => mu.Fd.Active | (uu.jumpHeld ? mu.Fd.JumpHeld : 0) | (uu.jumpPressed ? mu.Fd.JumpPressed : 0) | (uu.running ? mu.Fd.Running : 0) | (uu.sprintHeld ? mu.Fd.SprintHeld : 0))(uu) | Qu, Ju) && (Ru = !0), (0, Tu.c)(lu())
          },
          stopMoving: () => {
            var uu;
            Ru && (Ru = !(null !== (uu = Uu()) && void 0 !== uu && uu.padMove(0, 0, 0, 0, 0, 0)), Eu(), yu = (0, Nu.y)((() => {
              Eu(), (0, Tu.c)(lu())
            })))
          },
          uninstall: Eu,
          deviceChanged: uu => {
            var yu;
            "touch" === uu ? ((0, Tu.c)(!1), null !== (yu = Uu()) && void 0 !== yu && yu.padMove(0, 0, 0, 0, mu.Fd.EndToggle, 0) && (Ru = !1)) : "gamepad" === uu && (0, Tu.c)(lu())
          },
          hasPlayer: () => null !== Uu(),
          isPlayerDead: () => {
            var uu;
            return !1 === (null === (uu = Uu()) || void 0 === uu ? void 0 : uu.localPlayerAlive())
          },
          isReplayMode: () => {
            const uu = Uu();
            return null !== uu && 0 !== (nu(uu) & mu.Nd.Replay)
          },
          isFreeCameraOn: () => {
            const uu = Uu();
            return null !== uu && 0 !== (nu(uu) & mu.Nd.FreeCam)
          },
          targetsBlock: () => su(Uu()),
          selectedSlotEmpty: () => {
            var uu;
            return !(null !== (uu = Uu()) && void 0 !== uu && uu.items.jJ())
          },
          pickBlockAllowed: () => !!Qu.b.get("creative") && !!Qu.b.get("canPickBlocks"),
          scrollHotbar: uu => {
            Du(mu.Cd.Hotbar, mu.Ad.Down | (uu > 0 ? mu.Ad.Next : 0))
          },
          hasFullInventory: Xu.k,
          hasLobbyLeaderboard: () => !!Qu.b.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var uu, Ru, yu, Eu;
            const Ku = Uu();
            return {
              holdingGun: !1 !== (null === Ku || void 0 === Ku ? void 0 : Ku.localPlayerAlive()) && "Gun" === (null === Ku || void 0 === Ku || null === (uu = Ku.items.jJ()) || void 0 === uu || null === (Ru = uu.typeObj) || void 0 === Ru ? void 0 : Ru.type),
              customButtons: null !== (yu = Qu.b.get("customButtons")) && void 0 !== yu ? yu : null,
              touchscreenActionButton: null !== (Eu = Qu.b.get("touchscreenActionButton")) && void 0 !== Eu ? Eu : null
            }
          },
          pressTouchButton: uu => {
            uu ? Mu(eu) : Iu(eu)
          }
        }
      },
      cu = () => {
        const uu = (0, Ku.b)(gu()),
          Ru = (0, Eu.b)(),
          yu = null;
        return () => {
          uu(), Ru(), null === yu || void 0 === yu || yu()
        }
      }
  },
  4564: (uu, Ru, yu) => {
    yu.d(Ru, {
      $: () => Du,
      $b: () => Pu,
      Ab: () => xu,
      B: () => Eu,
      Db: () => Cu,
      E: () => Qu,
      G: () => Su,
      H: () => iu,
      Hb: () => bu,
      Ib: () => Uu,
      L: () => Xu,
      Lb: () => Lu,
      N: () => pu,
      Pb: () => su,
      Q: () => Nu,
      R: () => Bu,
      Rb: () => lu,
      S: () => ru,
      Sb: () => gu,
      Tb: () => Hu,
      Vb: () => du,
      W: () => ku,
      X: () => Au,
      Yb: () => Fu,
      Zb: () => Ku,
      c: () => hu,
      db: () => eu,
      g: () => Zu,
      hb: () => Mu,
      i: () => Vu,
      j: () => ju,
      lb: () => zu,
      m: () => wu,
      ob: () => cu,
      p: () => Wu,
      rb: () => tu,
      s: () => Tu,
      ub: () => Iu,
      w: () => mu,
      x: () => Ju,
      xb: () => nu,
      yb: () => Gu
    });
    const Eu = 32,
      Ku = 33.333333333333336,
      Qu = {
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
      mu = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Ju = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Nu = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Xu = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Vu = {
        Look: 0,
        Remesh: 1
      },
      ru = 8,
      Bu = 1,
      xu = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Su = {
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
      pu = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Tu = {
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
      Wu = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      ju = 4,
      Hu = 4,
      du = 65535,
      bu = {
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
      Cu = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      ku = 88,
      eu = 0,
      Au = 24,
      Du = 48,
      Mu = 80,
      Iu = {
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
      Gu = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Uu = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      nu = {
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
      su = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      tu = 65535,
      lu = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      gu = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      cu = 2,
      Lu = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      zu = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Fu = {
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
      wu = {
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
      Zu = {
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
      hu = 8,
      Pu = {
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
      iu = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4549: (uu, Ru, yu) => {
    yu.d(Ru, {
      C: () => Mu,
      D: () => Iu,
      E: () => ju,
      G: () => mu,
      I: () => Ju,
      J: () => Au,
      e: () => eu,
      g: () => du,
      i: () => Uu,
      m: () => Gu,
      n: () => Wu,
      o: () => Cu,
      r: () => Hu,
      v: () => bu,
      y: () => Du
    });
    var Eu = yu(4558);
    const Ku = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Qu = Ku;

    function mu(uu) {
      Qu = null !== uu && void 0 !== uu ? uu : Ku
    }

    function Ju() {
      return Qu
    }
    const Nu = new Set,
      Xu = new Set;
    let Vu = -1;
    const ru = new Set,
      Bu = new Set;
    let xu = 0,
      Su = 0;
    const pu = new Set,
      Tu = new Set;

    function Wu(uu) {
      return Nu.add(uu), () => {
        Nu.delete(uu)
      }
    }

    function ju(uu, Ru) {
      for (const Eu of Nu) try {
        Eu(uu)
      } catch (yu) {
        Ru(yu)
      }
    }

    function Hu(uu) {
      return Xu.add(uu), () => {
        Xu.delete(uu)
      }
    }

    function du(uu, Ru) {
      const yu = Vu < 0 ? 0 : uu - Vu;
      Vu = uu;
      for (const Ku of Xu) try {
        Ku(yu)
      } catch (Eu) {
        Ru(Eu)
      }
    }

    function bu(uu) {
      return ru.add(uu), () => {
        ru.delete(uu)
      }
    }

    function Cu(uu) {
      return Bu.add(uu), () => {
        Bu.delete(uu)
      }
    }
    let ku = 0;

    function eu(uu) {
      ku += uu
    }

    function Au() {
      const uu = ku;
      return ku = 0, uu
    }

    function Du(uu) {
      return pu.add(uu), () => {
        pu.delete(uu)
      }
    }

    function Mu(uu) {
      return Tu.add(uu), () => {
        Tu.delete(uu)
      }
    }

    function Iu() {
      xu = 0, Su = 0, Vu = -1
    }

    function Gu(uu, Ru) {
      if ("paced" === uu) return Su += Ru, null;
      if ("drawn" !== uu && "skipped" !== uu) return null;
      const yu = Ru + Su;
      return Su = 0, yu
    }

    function Uu(uu, Ru, yu, Ku) {
      const Qu = (0, Eu.g)(Ru),
        mu = uu > 0 ? performance.now() : 0;
      for (let Eu = 0; Eu < uu; Eu++)
        for (const uu of pu) try {
          uu()
        } catch (Ju) {
          Ku(Ju)
        }
      if (uu > 0 && eu(performance.now() - mu), null !== yu) {
        for (const uu of ru) try {
          uu(yu)
        } catch (Ju) {
          Ku(Ju)
        }
        xu += yu
      }
      if ("drawn" === Ru) {
        const uu = xu;
        xu = 0;
        for (const Ru of Bu) try {
          Ru(uu)
        } catch (Ju) {
          Ku(Ju)
        }
      }
      for (const Eu of Tu) try {
        Eu(uu, Qu)
      } catch (Ju) {
        Ku(Ju)
      }
    }
  },
  4562: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => Iu,
      Bb: () => hu,
      Cb: () => Ou,
      Cc: () => Eu.rb,
      Db: () => fu,
      Dd: () => Pu,
      E: () => mu,
      F: () => nu,
      Fb: () => RR,
      Gc: () => xR,
      Ib: () => Ku.d,
      Ic: () => XR,
      Id: () => Zu,
      J: () => BR,
      Jd: () => Yu,
      K: () => vu,
      Kb: () => eu,
      Mb: () => cu,
      Mc: () => ER,
      Nc: () => Eu.ub,
      Nd: () => iu,
      O: () => Eu.g,
      Pb: () => Gu,
      Q: () => Xu,
      Qc: () => Eu.xb,
      R: () => Eu.i,
      Rd: () => mR,
      Sb: () => Mu,
      Sc: () => Eu.yb,
      Tb: () => Eu.N,
      U: () => Eu.j,
      Uc: () => au,
      Ud: () => SR,
      Vb: () => Uu,
      Vd: () => du,
      Wb: () => bu,
      Wc: () => Eu.Db,
      Wd: () => ou,
      Xb: () => QR,
      Xc: () => Eu.Hb,
      Y: () => qu,
      Yc: () => Eu.Ib,
      Yd: () => lu,
      Zc: () => Eu.Pb,
      Zd: () => tu,
      _b: () => Hu,
      _c: () => Eu.Rb,
      ab: () => Eu.s,
      ac: () => VR,
      bb: () => Eu.w,
      bc: () => Ku.h,
      bd: () => Eu.Sb,
      be: () => su,
      cc: () => Wu,
      d: () => uR,
      ee: () => Nu,
      fb: () => Eu.x,
      fc: () => yR,
      fd: () => Du,
      g: () => pu,
      he: () => gu,
      jb: () => ru,
      jc: () => Eu.W,
      jd: () => Eu.Tb,
      k: () => Su,
      ke: () => pR,
      m: () => NR,
      mb: () => ju,
      md: () => Eu.Vb,
      nb: () => Eu.B,
      nc: () => Eu.X,
      nd: () => Eu.Zb,
      od: () => Qu,
      oe: () => xu,
      p: () => Au,
      qb: () => Eu.E,
      rc: () => Eu.$,
      rd: () => Tu,
      sb: () => Fu,
      t: () => ku,
      ub: () => KR,
      uc: () => Eu.db,
      ud: () => JR,
      vb: () => Vu,
      w: () => Eu.c,
      xd: () => zu,
      yb: () => Eu.G,
      yc: () => Eu.hb,
      yd: () => wu,
      z: () => rR,
      zd: () => Lu
    });
    var Eu = yu(4564),
      Ku = yu(2306);
    const Qu = Math.round(1e3 / Eu.Zb),
      mu = 4,
      Ju = 2;

    function Nu() {
      return crypto.getRandomValues(new Uint32Array(Ju))
    }
    const Xu = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Vu = 16,
      ru = {
        Draws: 1,
        NetAll: 2
      },
      Bu = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function xu(uu) {
      return (uu.nametagsHidden ? Cu.NametagsHidden : 0) | (uu.crouchToggle ? Cu.CrouchToggle : 0) | (uu.bhopDisabled ? Cu.BhopDisabled : 0) | (uu.disableBobbing ? Cu.DisableBobbing : 0) | (uu.ezTowering ? Cu.EzTowering : 0) | (uu.ezBridging ? Cu.EzBridging : 0) | (uu.showChunkBorders ? Cu.ShowChunkBorders : 0)
    }
    const Su = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      pu = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Tu = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Wu = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      ju = 5,
      Hu = 4294967295;

    function du(uu) {
      return (uu.showFog ? Bu.ShowFog : 0) | (uu.lighting ? Bu.Lighting : 0) | (uu.chunkFade ? Bu.ChunkFade : 0)
    }
    const bu = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Cu = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      ku = {
        Release: 1,
        KeepTouches: 2
      },
      eu = {
        Point: 1,
        Stamped: 2
      },
      Au = {
        Add: 1,
        Clear: 2
      },
      Du = 1,
      Mu = 8,
      Iu = 16777215,
      Gu = 4,
      Uu = {
        Resume: 1
      },
      nu = {
        Held: 1
      };

    function su(uu, Ru) {
      return (uu | Ru << 8) >>> 0
    }

    function tu(uu) {
      return 255 & uu
    }

    function lu(uu) {
      return uu >>> 8
    }

    function gu(uu) {
      return uu + 3 & -4
    }
    const cu = 16777216,
      Lu = 20;
    const zu = 8,
      Fu = 8,
      wu = 16777216,
      Zu = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hu = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Pu = 16,
      iu = {
        Lost: 0,
        Gone: 1
      },
      Yu = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function ou(uu) {
      return uu === Yu.WorldgenSeed || uu === Yu.Generate
    }
    const qu = 4,
      Ou = 99,
      vu = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      au = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      fu = 12,
      uR = 16,
      RR = 4,
      yR = 12,
      ER = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      KR = 4,
      QR = 8,
      mR = 8,
      JR = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      NR = {
        Crit: 1,
        HitSelf: 2
      },
      XR = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      VR = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      rR = 12,
      BR = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      xR = 67108864;

    function SR(uu) {
      for (const [Ru, yu] of Object.entries(Eu.g))
        if (yu === uu) return Ru;
      return `Unknown${uu}`
    }

    function pR(uu) {
      return {
        status: uu[Eu.E.Status],
        lastError: uu[Eu.E.LastError],
        lastErrorDetail: uu[Eu.E.LastErrorDetail],
        errorCount: uu[Eu.E.ErrorCount],
        frameIndex: uu[Eu.E.FrameIndex],
        tickIndex: uu[Eu.E.TickIndex],
        renderPending: uu[Eu.E.RenderPending],
        firstView: uu[Eu.E.FirstView],
        chunksCancelled: uu[Eu.E.ChunksCancelled]
      }
    }
  },
  4558: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      d: () => Qu,
      g: () => Ku
    });
    var Eu = yu(4562);

    function Ku(uu) {
      return "none" !== uu
    }

    function Qu(uu, Ru) {
      if (!uu) return "none";
      switch (Ru) {
        case Eu.fb.Drawn:
          return "drawn";
        case Eu.fb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function mu(uu) {
      return "drawn" === uu
    }
  },
  4578: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku,
      e: () => Qu,
      f: () => mu,
      j: () => Eu,
      k: () => Ju
    });
    const Eu = {
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
      Ku = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Qu = {
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
      mu = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Ju = [16]
  },
  40243: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      i: () => Qu,
      k: () => Ku
    });
    let Eu = null;

    function Ku(uu) {
      Eu = uu
    }

    function Qu(uu) {
      Eu === uu && (Eu = null)
    }

    function mu() {
      var uu;
      null === (uu = Eu) || void 0 === uu || uu()
    }
  },
  4586: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju,
      f: () => mu,
      h: () => Xu
    });
    var Eu = yu(2306),
      Ku = yu(2312);
    const Qu = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function mu(uu) {
      return uu instanceof HTMLElement && (!!(uu.isContentEditable || uu instanceof HTMLTextAreaElement || uu instanceof HTMLSelectElement) || uu instanceof HTMLInputElement && !Qu.has(uu.type))
    }

    function Ju(uu) {
      let Ru = null;
      const yu = yu => {
          const Ku = mu(yu);
          Ku !== Ru && (Ru = Ku, uu(Eu.f.UiCapture, Eu.t.Keyboard, 0, 0, Ku ? Eu.t.Keyboard : 0))
        },
        Ku = uu => {
          yu(uu.target)
        },
        Qu = uu => {
          yu(uu.relatedTarget)
        },
        Ju = () => {
          yu(document.activeElement)
        },
        Nu = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Ku, Nu), document.addEventListener("focusout", Qu, Nu), document.addEventListener("keydown", Ju, Nu), yu(document.activeElement), () => {
        document.removeEventListener("focusin", Ku, Nu), document.removeEventListener("focusout", Qu, Nu), document.removeEventListener("keydown", Ju, Nu)
      }
    }
    const Nu = new Map;

    function Xu(uu, Ru) {
      var yu;
      let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Nu.set(Eu, (null !== (yu = Nu.get(Eu)) && void 0 !== yu ? yu : 0) & ~uu | Ru & uu);
      let Qu = 0;
      for (const Ku of Nu.values()) Qu |= Ku;
      return (0, Ku.J)(uu, Qu & uu)
    }
  },
  36707: (uu, Ru, yu) => {
    function Eu(uu) {
      return uu.includes("Leaf Bed")
    }

    function Ku(uu) {
      return / Bed(?: Head)?(?:\||$)/.test(uu) && !Eu(uu)
    }

    function Qu(uu) {
      return uu.includes(" Strongbed")
    }

    function mu(uu) {
      return Eu(uu) || Ku(uu) || Qu(uu)
    }
    yu.d(Ru, {
      b: () => mu,
      d: () => Eu,
      e: () => Qu,
      f: () => Ku
    })
  },
  36702: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Xu
    });
    var Eu = yu(36707),
      Ku = yu(9158);
    const Qu = [],
      mu = [],
      Ju = [],
      Nu = [];
    for (const Vu of Object.keys(Ku.q))(0, Eu.d)(Vu) ? Qu.push(Vu) : (0, Eu.f)(Vu) && mu.push(Vu), (0, Eu.e)(Vu) && Ju.push(Vu), (Vu.includes(" Bed Head") || Vu.includes(" Strongbed Head")) && Nu.push(Vu);
    const Xu = {
      leafBeds: Qu,
      woolBeds: mu,
      strongBeds: Ju,
      beds: [...Qu, ...mu, ...Ju],
      bedHeads: Nu,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6268: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      e: () => Ku,
      h: () => Nu,
      i: () => Qu,
      m: () => Xu,
      n: () => Eu,
      r: () => Ju
    });
    let Eu = function(uu) {
        return uu[uu.DEFAULT = 0] = "DEFAULT", uu[uu.BOAT = 1] = "BOAT", uu[uu.GLIDER = 2] = "GLIDER", uu[uu.BALLOON = 3] = "BALLOON", uu[uu.SLEEPING = 4] = "SLEEPING", uu[uu.RIDING_MOB = 5] = "RIDING_MOB", uu[uu.CAR = 6] = "CAR", uu[uu.HOVERCRAFT = 7] = "HOVERCRAFT", uu
      }({}),
      Ku = function(uu) {
        return uu[uu.WOOD = 0] = "WOOD", uu[uu.OBSIDIAN = 1] = "OBSIDIAN", uu[uu.SPEED = 2] = "SPEED", uu
      }({}),
      Qu = function(uu) {
        return uu[uu.WOOD = 0] = "WOOD", uu[uu.IRON = 1] = "IRON", uu[uu.GOLD = 2] = "GOLD", uu[uu.DIAMOND = 3] = "DIAMOND", uu
      }({}),
      mu = function(uu) {
        return uu[uu.YELLOW = 0] = "YELLOW", uu[uu.WHITE = 1] = "WHITE", uu[uu.RED = 2] = "RED", uu[uu.PURPLE = 3] = "PURPLE", uu[uu.PINK = 4] = "PINK", uu[uu.ORANGE = 5] = "ORANGE", uu[uu.MAGENTA = 6] = "MAGENTA", uu[uu.LIME = 7] = "LIME", uu[uu.LIGHT_GRAY = 8] = "LIGHT_GRAY", uu[uu.LIGHT_BLUE = 9] = "LIGHT_BLUE", uu[uu.GREEN = 10] = "GREEN", uu[uu.GRAY = 11] = "GRAY", uu[uu.CYAN = 12] = "CYAN", uu[uu.BROWN = 13] = "BROWN", uu[uu.BLUE = 14] = "BLUE", uu[uu.BLACK = 15] = "BLACK", uu
      }({}),
      Ju = function(uu) {
        return uu[uu.ROTATION_1 = 0] = "ROTATION_1", uu[uu.ROTATION_2 = 1] = "ROTATION_2", uu[uu.ROTATION_3 = 2] = "ROTATION_3", uu[uu.ROTATION_4 = 3] = "ROTATION_4", uu
      }({}),
      Nu = function(uu) {
        return uu[uu.KART = 0] = "KART", uu[uu.OFF_ROADER = 1] = "OFF_ROADER", uu[uu.CAR = 2] = "CAR", uu[uu.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", uu[uu.ARMORED_CAR = 4] = "ARMORED_CAR", uu[uu.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", uu[uu.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", uu[uu.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", uu
      }({});
    Eu.DEFAULT, Eu.BOAT, Ku.SPEED, Eu.GLIDER, Qu.DIAMOND, Eu.BALLOON, mu.BLACK, Eu.SLEEPING, Ju.ROTATION_4, Eu.RIDING_MOB, Eu.CAR, Nu.MOONSTONE_MINING_DRILL, Eu.HOVERCRAFT;
    let Xu = function(uu) {
      return uu[uu.NORMAL = 0] = "NORMAL", uu[uu.GLIDING = 1] = "GLIDING", uu[uu.FLOATING = 2] = "FLOATING", uu
    }({})
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);