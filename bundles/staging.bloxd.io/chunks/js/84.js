export const id = 84;
export const ids = [84];
export const modules = {
  39950: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      startWasmPadGameplay: () => Dk
    });
    Bk(39957);
    var Rk = Bk(39962),
      tk = Bk(39984),
      ak = Bk(1863),
      Xk = Bk(4e4),
      bk = Bk(4531),
      wk = Bk(4511),
      dk = Bk(40007),
      sk = Bk(40015),
      Vk = Bk(4541),
      Jk = Bk(40080),
      Ak = Bk(2305),
      ek = Bk(8529),
      yk = Bk(39970),
      fk = Bk(8509);
    const mk = kk => {
        const Fk = Vk.c.indexOf(kk);
        if (Fk < 0) throw new Error(`No core action "${kk}"`);
        return Fk
      },
      Wk = mk("primary-fire"),
      vk = mk("alt-fire"),
      ik = mk("mid-fire"),
      Yk = mk("jump"),
      Lk = mk("ReloadGun"),
      Ok = mk("SwapCameraZoom"),
      Ek = mk("TouchAction1"),
      Sk = {
        SpecialAction1: mk("SpecialAction1"),
        SpecialAction2: mk("SpecialAction2")
      },
      Nk = (kk, Fk) => {
        (0, Ak.q)(bk.A.PadAction, kk, 0, 0, (0, Ak.n)(Fk, performance.now()))
      },
      Hk = kk => {
        Nk(kk, Xk.qd.Down)
      },
      uk = kk => {
        Nk(kk, 0)
      },
      Mk = kk => {
        Hk(kk), uk(kk)
      },
      gk = () => {
        const kk = (0, sk.g)();
        return null !== kk && void 0 !== kk && kk.isCoreRunning ? kk : null
      },
      Uk = kk => Xk.w.playerFlags(kk.api.apiView, 0),
      ck = kk => null !== kk && Xk.w.targetBlockId(kk.api.apiView, 0) !== Xk._c,
      Gk = () => {
        const kk = (0, ek.e)(),
          Fk = new yk.b;
        let Bk = !1;
        const Rk = (kk, Fk) => {
            (0, Ak.q)(bk.A.PadLook, Xk.zd.Rate, kk, Fk, 0)
          },
          tk = () => {
            Bk = !1, Fk.reset(), Rk(0, 0)
          };
        return {
          update: (tk, ak, wk) => {
            Bk || (kk.discardPending(), Bk = !0);
            const dk = (0, yk.m)(Fk, tk, ak, wk, performance.now());
            Rk(dk.yawRadPerSec, dk.pitchRadPerSec);
            const sk = kk.drainLookDelta();
            0 === sk.ZE && 0 === sk.pE || (0, Ak.q)(bk.A.PadLook, Xk.zd.Gyro, sk.ZE, sk.pE, 0)
          },
          release: tk,
          uninstall: tk
        }
      },
      Tk = () => {
        const kk = gk();
        return null !== kk && 0 !== (Uk(kk) & Xk.Ed.PadSneakToggled)
      },
      rk = () => {
        const kk = (kk => {
          const Fk = kk => function() {
            return (0, Jk.d)(), kk(...arguments)
          };
          return {
            primaryFireDown: Fk((() => (Hk(Wk), 0))),
            primaryFireUp: Fk((() => {
              uk(Wk)
            })),
            altFireDown: Fk((() => (Hk(vk), 0))),
            altFireUp: Fk((() => {
              uk(vk)
            })),
            jumpDown: Fk((() => {
              Mk(Yk)
            })),
            specialActionDown: Fk((kk => {
              Hk(Sk[kk])
            })),
            specialActionUp: Fk((kk => {
              uk(Sk[kk])
            })),
            reloadGun: Fk((() => {
              Mk(Lk)
            })),
            dropItem: Fk((kk => {
              Nk(Xk.td.Drop, Xk.qd.Down | (kk ? Xk.qd.Stack : 0))
            })),
            swapCameraZoom: Fk((() => {
              Mk(Ok)
            })),
            pickBlock: Fk((() => (Mk(ik), ck(kk()))))
          }
        })(gk);
        let Fk = !1,
          Bk = null;
        const Rk = () => {
          var kk;
          null === (kk = Bk) || void 0 === kk || kk(), Bk = null
        };
        return {
          bodies: () => kk,
          look: Gk(),
          move: (kk, Bk) => {
            var tk;
            Rk();
            const {
              bits: ak,
              flips: bk
            } = (kk => {
              if (null === kk) return {
                bits: Xk.wd.Peek,
                flips: 0
              };
              const Fk = kk.sneakHeld ? Xk.wd.SneakHeld : 0;
              return "hold" === kk.mode ? {
                bits: Fk | Xk.wd.SneakHoldMode,
                flips: kk.sneakTogglePressed ? 1 : 0
              } : {
                bits: Fk,
                flips: kk.sneakPressed || kk.sneakTogglePressed ? 1 : 0
              }
            })(Bk);
            null !== (tk = gk()) && void 0 !== tk && tk.padMove(kk.x, kk.y, kk.magnitude, kk.headingOffset, (kk => Xk.wd.Active | (kk.jumpHeld ? Xk.wd.JumpHeld : 0) | (kk.jumpPressed ? Xk.wd.JumpPressed : 0) | (kk.running ? Xk.wd.Running : 0) | (kk.sprintHeld ? Xk.wd.SprintHeld : 0))(kk) | ak, bk) && (Fk = !0), (0, fk.c)(Tk())
          },
          stopMoving: () => {
            var kk;
            Fk && (Fk = !(null !== (kk = gk()) && void 0 !== kk && kk.padMove(0, 0, 0, 0, 0, 0)), Rk(), Bk = (0, wk.x)((() => {
              Rk(), (0, fk.c)(Tk())
            })))
          },
          uninstall: Rk,
          deviceChanged: kk => {
            var Bk;
            "touch" === kk ? ((0, fk.c)(!1), null !== (Bk = gk()) && void 0 !== Bk && Bk.padMove(0, 0, 0, 0, Xk.wd.EndToggle, 0) && (Fk = !1)) : "gamepad" === kk && (0, fk.c)(Tk())
          },
          hasPlayer: () => null !== gk(),
          isPlayerDead: () => {
            var kk;
            return !1 === (null === (kk = gk()) || void 0 === kk ? void 0 : kk.localPlayerAlive())
          },
          isReplayMode: () => {
            const kk = gk();
            return null !== kk && 0 !== (Uk(kk) & Xk.Ed.Replay)
          },
          isFreeCameraOn: () => {
            const kk = gk();
            return null !== kk && 0 !== (Uk(kk) & Xk.Ed.FreeCam)
          },
          targetsBlock: () => ck(gk()),
          selectedSlotEmpty: () => {
            var kk;
            return !(null !== (kk = gk()) && void 0 !== kk && kk.items.Hb())
          },
          pickBlockAllowed: () => !!ak.b.get("creative") && !!ak.b.get("canPickBlocks"),
          scrollHotbar: kk => {
            Nk(Xk.td.Hotbar, Xk.qd.Down | (kk > 0 ? Xk.qd.Next : 0))
          },
          hasFullInventory: dk.p,
          hasLobbyLeaderboard: () => !!ak.b.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var kk, Fk, Bk, Rk;
            const tk = gk();
            return {
              holdingGun: !1 !== (null === tk || void 0 === tk ? void 0 : tk.localPlayerAlive()) && "Gun" === (null === tk || void 0 === tk || null === (kk = tk.items.Hb()) || void 0 === kk || null === (Fk = kk.typeObj) || void 0 === Fk ? void 0 : Fk.type),
              customButtons: null !== (Bk = ak.b.get("customButtons")) && void 0 !== Bk ? Bk : null,
              touchscreenActionButton: null !== (Rk = ak.b.get("touchscreenActionButton")) && void 0 !== Rk ? Rk : null
            }
          },
          pressTouchButton: kk => {
            kk ? Hk(Ek) : uk(Ek)
          }
        }
      },
      Dk = () => {
        const kk = (0, tk.e)(rk()),
          Fk = (0, Rk.d)(),
          Bk = null;
        return () => {
          kk(), Fk(), null === Bk || void 0 === Bk || Bk()
        }
      }
  },
  4531: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      $: () => Hk,
      A: () => ek,
      Cb: () => zk,
      D: () => Kk,
      Db: () => ck,
      F: () => dk,
      Fb: () => Tk,
      G: () => yk,
      H: () => wk,
      Jb: () => rk,
      Kb: () => vk,
      L: () => Jk,
      Lb: () => ik,
      N: () => Vk,
      O: () => Ok,
      Ob: () => hk,
      R: () => Sk,
      Rb: () => tk,
      T: () => Nk,
      Tb: () => pk,
      X: () => Ek,
      bb: () => Pk,
      d: () => Zk,
      fb: () => Dk,
      g: () => Ck,
      h: () => sk,
      i: () => Wk,
      j: () => qk,
      jb: () => Gk,
      kb: () => uk,
      m: () => mk,
      ob: () => Uk,
      pb: () => Mk,
      q: () => fk,
      qb: () => Ak,
      t: () => Xk,
      tb: () => Lk,
      u: () => bk,
      vb: () => Yk,
      y: () => Rk,
      yb: () => gk,
      z: () => ak
    });
    const Rk = 32,
      tk = 33.333333333333336,
      ak = {
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
      Xk = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      bk = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      wk = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      dk = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      sk = {
        Look: 0,
        Remesh: 1
      },
      Vk = 8,
      Jk = 1,
      Ak = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      ek = {
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
      yk = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      fk = {
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
      mk = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Wk = 4,
      vk = 4,
      ik = 65535,
      Yk = {
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
      Lk = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Ok = 88,
      Ek = 0,
      Sk = 24,
      Nk = 48,
      Hk = 80,
      uk = {
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
      Mk = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      gk = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Uk = {
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
      ck = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Gk = 65535,
      Tk = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      rk = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Dk = 2,
      zk = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Pk = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      hk = {
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
      qk = {
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
      Ck = {
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
      Zk = 8,
      pk = {
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
      Kk = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4511: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => Hk,
      B: () => uk,
      D: () => Wk,
      G: () => Xk,
      J: () => bk,
      N: () => Sk,
      b: () => Ek,
      e: () => ik,
      h: () => gk,
      l: () => Mk,
      m: () => mk,
      p: () => Lk,
      s: () => vk,
      t: () => Yk,
      x: () => Nk
    });
    var Rk = Bk(4517);
    const tk = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ak = tk;

    function Xk(kk) {
      ak = null !== kk && void 0 !== kk ? kk : tk
    }

    function bk() {
      return ak
    }
    const wk = new Set,
      dk = new Set;
    let sk = -1;
    const Vk = new Set,
      Jk = new Set;
    let Ak = 0,
      ek = 0;
    const yk = new Set,
      fk = new Set;

    function mk(kk) {
      return wk.add(kk), () => {
        wk.delete(kk)
      }
    }

    function Wk(kk, Fk) {
      for (const Rk of wk) try {
        Rk(kk)
      } catch (Bk) {
        Fk(Bk)
      }
    }

    function vk(kk) {
      return dk.add(kk), () => {
        dk.delete(kk)
      }
    }

    function ik(kk, Fk) {
      const Bk = sk < 0 ? 0 : kk - sk;
      sk = kk;
      for (const tk of dk) try {
        tk(Bk)
      } catch (Rk) {
        Fk(Rk)
      }
    }

    function Yk(kk) {
      return Vk.add(kk), () => {
        Vk.delete(kk)
      }
    }

    function Lk(kk) {
      return Jk.add(kk), () => {
        Jk.delete(kk)
      }
    }
    let Ok = 0;

    function Ek(kk) {
      Ok += kk
    }

    function Sk() {
      const kk = Ok;
      return Ok = 0, kk
    }

    function Nk(kk) {
      return yk.add(kk), () => {
        yk.delete(kk)
      }
    }

    function Hk(kk) {
      return fk.add(kk), () => {
        fk.delete(kk)
      }
    }

    function uk() {
      Ak = 0, ek = 0, sk = -1
    }

    function Mk(kk, Fk) {
      if ("paced" === kk) return ek += Fk, null;
      if ("drawn" !== kk && "skipped" !== kk) return null;
      const Bk = Fk + ek;
      return ek = 0, Bk
    }

    function gk(kk, Fk, Bk, tk) {
      const ak = (0, Rk.i)(Fk),
        Xk = kk > 0 ? performance.now() : 0;
      for (let Rk = 0; Rk < kk; Rk++)
        for (const kk of yk) try {
          kk()
        } catch (bk) {
          tk(bk)
        }
      if (kk > 0 && Ek(performance.now() - Xk), null !== Bk) {
        for (const kk of Vk) try {
          kk(Bk)
        } catch (bk) {
          tk(bk)
        }
        Ak += Bk
      }
      if ("drawn" === Fk) {
        const kk = Ak;
        Ak = 0;
        for (const Fk of Jk) try {
          Fk(kk)
        } catch (bk) {
          tk(bk)
        }
      }
      for (const Rk of fk) try {
        Rk(kk, ak)
      } catch (bk) {
        tk(bk)
      }
    }
  },
  4524: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => Ik,
      Ab: () => Hk,
      B: () => Rk.g,
      Bc: () => Rk.Fb,
      C: () => dk,
      Cb: () => Rk.G,
      Cc: () => Rk.Jb,
      Eb: () => gk,
      Ec: () => Nk,
      G: () => Rk.h,
      Gc: () => Rk.Kb,
      Hb: () => Yk,
      I: () => Rk.i,
      Ib: () => XF,
      Jb: () => vk,
      K: () => lk,
      Kc: () => Rk.Lb,
      Lc: () => Rk.Rb,
      M: () => Rk.q,
      Nb: () => VF,
      Ob: () => tk.n,
      P: () => Rk.t,
      Pb: () => mk,
      Pc: () => ak,
      Qc: () => fk,
      Rb: () => RF,
      S: () => Rk.u,
      Sb: () => Rk.O,
      Sc: () => wF,
      T: () => Vk,
      Tc: () => Pk,
      Ub: () => Rk.R,
      Uc: () => qk,
      V: () => Wk,
      Wc: () => zk,
      Xc: () => pk,
      Yb: () => Rk.T,
      Z: () => Rk.y,
      Zb: () => Rk.X,
      _b: () => Rk.$,
      ab: () => Rk.z,
      bb: () => hk,
      cc: () => Rk.jb,
      db: () => aF,
      dc: () => eF,
      dd: () => Ck,
      e: () => FF,
      ec: () => sF,
      ed: () => xk,
      fd: () => Kk,
      g: () => yk,
      gb: () => sk,
      gd: () => bF,
      hb: () => Rk.A,
      hc: () => tF,
      hd: () => yF,
      i: () => ek,
      ib: () => Zk,
      ic: () => Rk.kb,
      jb: () => nk,
      jc: () => Rk.ob,
      jd: () => ik,
      k: () => dF,
      kd: () => jk,
      l: () => Sk,
      m: () => Ok,
      mb: () => kF,
      mc: () => Rk.pb,
      md: () => Tk,
      nc: () => Qk,
      o: () => Rk.d,
      ob: () => BF,
      od: () => Gk,
      p: () => JF,
      q: () => uk,
      qb: () => tk.g,
      qd: () => ck,
      rb: () => Ek,
      rc: () => Rk.tb,
      rd: () => wk,
      s: () => Xk,
      sc: () => Rk.vb,
      td: () => rk,
      u: () => Uk,
      ub: () => Dk,
      wb: () => Mk,
      wc: () => Rk.yb,
      wd: () => fF,
      xc: () => Rk.Db,
      xd: () => Ak,
      y: () => AF
    });
    var Rk = Bk(4531),
      tk = Bk(2303);
    const ak = Math.round(1e3 / Rk.Rb),
      Xk = 4,
      bk = 2;

    function wk() {
      return crypto.getRandomValues(new Uint32Array(bk))
    }
    const dk = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      sk = 16,
      Vk = {
        Draws: 1,
        NetAll: 2
      },
      Jk = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Ak(kk) {
      return (kk.nametagsHidden ? Lk.NametagsHidden : 0) | (kk.crouchToggle ? Lk.CrouchToggle : 0) | (kk.bhopDisabled ? Lk.BhopDisabled : 0) | (kk.disableBobbing ? Lk.DisableBobbing : 0) | (kk.ezTowering ? Lk.EzTowering : 0) | (kk.ezBridging ? Lk.EzBridging : 0) | (kk.showChunkBorders ? Lk.ShowChunkBorders : 0)
    }
    const ek = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      yk = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      fk = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      mk = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Wk = 5,
      vk = 4294967295;

    function ik(kk) {
      return (kk.showFog ? Jk.ShowFog : 0) | (kk.lighting ? Jk.Lighting : 0) | (kk.chunkFade ? Jk.ChunkFade : 0)
    }
    const Yk = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Lk = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Ok = {
        Release: 1,
        KeepTouches: 2
      },
      Ek = {
        Point: 1,
        Stamped: 2
      },
      Sk = {
        Add: 1,
        Clear: 2
      },
      Nk = 1,
      Hk = 8,
      uk = 16777215,
      Mk = 4,
      gk = {
        Resume: 1
      },
      Uk = {
        Held: 1
      };

    function ck(kk, Fk) {
      return (kk | Fk << 8) >>> 0
    }

    function Gk(kk) {
      return 255 & kk
    }

    function Tk(kk) {
      return kk >>> 8
    }

    function rk(kk) {
      return kk + 3 & -4
    }
    const Dk = 16777216,
      zk = 20;
    const Pk = 8,
      hk = 8,
      qk = 16777216,
      Ck = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Zk = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      pk = 16,
      Kk = {
        Lost: 0,
        Gone: 1
      },
      xk = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function jk(kk) {
      return kk === xk.WorldgenSeed || kk === xk.Generate
    }
    const lk = 4,
      nk = 99,
      Ik = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Qk = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      kF = 12,
      FF = 16,
      BF = 4,
      RF = 12,
      tF = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      aF = 4,
      XF = 8,
      bF = 8,
      wF = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      dF = {
        Crit: 1,
        HitSelf: 2
      },
      sF = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      VF = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      JF = 12,
      AF = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      eF = 67108864;

    function yF(kk) {
      for (const [Fk, Bk] of Object.entries(Rk.g))
        if (Bk === kk) return Fk;
      return `Unknown${kk}`
    }

    function fF(kk) {
      return {
        status: kk[Rk.z.Status],
        lastError: kk[Rk.z.LastError],
        lastErrorDetail: kk[Rk.z.LastErrorDetail],
        errorCount: kk[Rk.z.ErrorCount],
        frameIndex: kk[Rk.z.FrameIndex],
        tickIndex: kk[Rk.z.TickIndex],
        renderPending: kk[Rk.z.RenderPending],
        firstView: kk[Rk.z.FirstView],
        chunksCancelled: kk[Rk.z.ChunksCancelled]
      }
    }
  },
  4517: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      g: () => ak,
      i: () => tk
    });
    var Rk = Bk(4524);

    function tk(kk) {
      return "none" !== kk
    }

    function ak(kk, Fk) {
      if (!kk) return "none";
      switch (Fk) {
        case Rk.S.Drawn:
          return "drawn";
        case Rk.S.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Xk(kk) {
      return "drawn" === kk
    }
  },
  4541: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      f: () => ak,
      j: () => Xk,
      m: () => Rk,
      o: () => bk
    });
    const Rk = {
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
      tk = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ak = {
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
      Xk = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      bk = [16]
  },
  40080: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      g: () => ak,
      h: () => tk
    });
    let Rk = null;

    function tk(kk) {
      Rk = kk
    }

    function ak(kk) {
      Rk === kk && (Rk = null)
    }

    function Xk() {
      var kk;
      null === (kk = Rk) || void 0 === kk || kk()
    }
  },
  4546: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => bk,
      g: () => Xk,
      i: () => dk
    });
    var Rk = Bk(2303),
      tk = Bk(2305);
    const ak = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Xk(kk) {
      return kk instanceof HTMLElement && (!!(kk.isContentEditable || kk instanceof HTMLTextAreaElement || kk instanceof HTMLSelectElement) || kk instanceof HTMLInputElement && !ak.has(kk.type))
    }

    function bk(kk) {
      let Fk = null;
      const Bk = Bk => {
          const tk = Xk(Bk);
          tk !== Fk && (Fk = tk, kk(Rk.j.UiCapture, Rk.A.Keyboard, 0, 0, tk ? Rk.A.Keyboard : 0))
        },
        tk = kk => {
          Bk(kk.target)
        },
        ak = kk => {
          Bk(kk.relatedTarget)
        },
        bk = () => {
          Bk(document.activeElement)
        },
        wk = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", tk, wk), document.addEventListener("focusout", ak, wk), document.addEventListener("keydown", bk, wk), Bk(document.activeElement), () => {
        document.removeEventListener("focusin", tk, wk), document.removeEventListener("focusout", ak, wk), document.removeEventListener("keydown", bk, wk)
      }
    }
    const wk = new Map;

    function dk(kk, Fk) {
      var Bk;
      let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      wk.set(Rk, (null !== (Bk = wk.get(Rk)) && void 0 !== Bk ? Bk : 0) & ~kk | Fk & kk);
      let ak = 0;
      for (const tk of wk.values()) ak |= tk;
      return (0, tk.x)(kk, ak & kk)
    }
  },
  36614: (kk, Fk, Bk) => {
    function Rk(kk) {
      return kk.includes("Leaf Bed")
    }

    function tk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Rk(kk)
    }

    function ak(kk) {
      return kk.includes(" Strongbed")
    }

    function Xk(kk) {
      return Rk(kk) || tk(kk) || ak(kk)
    }
    Bk.d(Fk, {
      b: () => Xk,
      f: () => Rk,
      i: () => ak,
      l: () => tk
    })
  },
  36605: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => dk
    });
    var Rk = Bk(36614),
      tk = Bk(9095);
    const ak = [],
      Xk = [],
      bk = [],
      wk = [];
    for (const sk of Object.keys(tk.q))(0, Rk.f)(sk) ? ak.push(sk) : (0, Rk.l)(sk) && Xk.push(sk), (0, Rk.i)(sk) && bk.push(sk), (sk.includes(" Bed Head") || sk.includes(" Strongbed Head")) && wk.push(sk);
    const dk = {
      leafBeds: ak,
      woolBeds: Xk,
      strongBeds: bk,
      beds: [...ak, ...Xk, ...bk],
      bedHeads: wk,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6167: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      c: () => tk,
      f: () => wk,
      h: () => ak,
      j: () => dk,
      l: () => Rk,
      o: () => bk
    });
    let Rk = function(kk) {
        return kk[kk.DEFAULT = 0] = "DEFAULT", kk[kk.BOAT = 1] = "BOAT", kk[kk.GLIDER = 2] = "GLIDER", kk[kk.BALLOON = 3] = "BALLOON", kk[kk.SLEEPING = 4] = "SLEEPING", kk[kk.RIDING_MOB = 5] = "RIDING_MOB", kk[kk.CAR = 6] = "CAR", kk[kk.HOVERCRAFT = 7] = "HOVERCRAFT", kk
      }({}),
      tk = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.OBSIDIAN = 1] = "OBSIDIAN", kk[kk.SPEED = 2] = "SPEED", kk
      }({}),
      ak = function(kk) {
        return kk[kk.WOOD = 0] = "WOOD", kk[kk.IRON = 1] = "IRON", kk[kk.GOLD = 2] = "GOLD", kk[kk.DIAMOND = 3] = "DIAMOND", kk
      }({}),
      Xk = function(kk) {
        return kk[kk.YELLOW = 0] = "YELLOW", kk[kk.WHITE = 1] = "WHITE", kk[kk.RED = 2] = "RED", kk[kk.PURPLE = 3] = "PURPLE", kk[kk.PINK = 4] = "PINK", kk[kk.ORANGE = 5] = "ORANGE", kk[kk.MAGENTA = 6] = "MAGENTA", kk[kk.LIME = 7] = "LIME", kk[kk.LIGHT_GRAY = 8] = "LIGHT_GRAY", kk[kk.LIGHT_BLUE = 9] = "LIGHT_BLUE", kk[kk.GREEN = 10] = "GREEN", kk[kk.GRAY = 11] = "GRAY", kk[kk.CYAN = 12] = "CYAN", kk[kk.BROWN = 13] = "BROWN", kk[kk.BLUE = 14] = "BLUE", kk[kk.BLACK = 15] = "BLACK", kk
      }({}),
      bk = function(kk) {
        return kk[kk.ROTATION_1 = 0] = "ROTATION_1", kk[kk.ROTATION_2 = 1] = "ROTATION_2", kk[kk.ROTATION_3 = 2] = "ROTATION_3", kk[kk.ROTATION_4 = 3] = "ROTATION_4", kk
      }({}),
      wk = function(kk) {
        return kk[kk.KART = 0] = "KART", kk[kk.OFF_ROADER = 1] = "OFF_ROADER", kk[kk.CAR = 2] = "CAR", kk[kk.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", kk[kk.ARMORED_CAR = 4] = "ARMORED_CAR", kk[kk.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", kk[kk.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", kk[kk.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", kk
      }({});
    Rk.DEFAULT, Rk.BOAT, tk.SPEED, Rk.GLIDER, ak.DIAMOND, Rk.BALLOON, Xk.BLACK, Rk.SLEEPING, bk.ROTATION_4, Rk.RIDING_MOB, Rk.CAR, wk.MOONSTONE_MINING_DRILL, Rk.HOVERCRAFT;
    let dk = function(kk) {
      return kk[kk.NORMAL = 0] = "NORMAL", kk[kk.GLIDING = 1] = "GLIDING", kk[kk.FLOATING = 2] = "FLOATING", kk
    }({})
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);