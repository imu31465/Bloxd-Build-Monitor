export const id = 85;
export const ids = [85];
export const modules = {
  39997: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      startWasmPadGameplay: () => Mb
    });
    hb(40006);
    var Bb = hb(40014),
      Ob = hb(40026),
      Gb = hb(1836),
      Ub = hb(40035),
      Lb = hb(4564),
      Yb = hb(4545),
      Sb = hb(40040),
      ab = hb(40049),
      Hb = hb(4575),
      wb = hb(40116),
      Zb = hb(2276),
      Xb = hb(8589),
      pb = hb(40017),
      ob = hb(8558),
      Ab = hb(38727);
    const lb = bb => {
        const ub = Hb.b.indexOf(bb);
        if (ub < 0) throw new Error(`No core action "${bb}"`);
        return ub
      },
      Kb = lb("primary-fire"),
      Wb = lb("alt-fire"),
      Cb = lb("mid-fire"),
      db = lb("jump"),
      rb = lb("ReloadGun"),
      jb = lb("SwapCameraZoom"),
      nb = lb("TouchAction1"),
      Db = {
        SpecialAction1: lb("SpecialAction1"),
        SpecialAction2: lb("SpecialAction2")
      },
      xb = (bb, ub) => {
        (0, Zb.v)(Lb.C.PadAction, bb, 0, 0, (0, Zb.t)(ub, performance.now()))
      },
      zb = bb => {
        xb(bb, Ub.ud.Down)
      },
      gb = bb => {
        xb(bb, 0)
      },
      ib = bb => {
        zb(bb), gb(bb)
      },
      vb = () => {
        const bb = (0, ab.l)();
        return null !== bb && void 0 !== bb && bb.isCoreRunning ? bb : null
      },
      tb = bb => Ub.o.playerFlags(bb.api.apiView, 0),
      Jb = bb => null !== bb && Ub.o.targetBlockId(bb.api.apiView, 0) !== Ub.dd,
      eb = () => {
        const bb = (0, Xb.d)(),
          ub = new pb.b;
        let hb = !1;
        const Bb = (bb, ub) => {
            (0, Zb.v)(Lb.C.PadLook, Ub.yd.Rate, bb, ub, 0)
          },
          Ob = () => {
            hb = !1, ub.reset(), Bb(0, 0)
          };
        return {
          update: (Ob, Gb, Yb) => {
            hb || (bb.discardPending(), hb = !0);
            const Sb = (0, pb.q)(ub, Ob, Gb, Yb, performance.now());
            Bb(Sb.yawRadPerSec, Sb.pitchRadPerSec);
            const ab = bb.drainLookDelta();
            0 === ab.MJ && 0 === ab.mJ || (0, Zb.v)(Lb.C.PadLook, Ub.yd.Gyro, ab.MJ, ab.mJ, 0)
          },
          release: Ob,
          uninstall: Ob
        }
      },
      Nb = () => {
        const bb = vb();
        return null !== bb && 0 !== (tb(bb) & Ub.Ad.PadSneakToggled)
      },
      sb = () => {
        const bb = (bb => {
          const ub = bb => function() {
            return (0, wb.b)(), bb(...arguments)
          };
          return {
            primaryFireDown: ub((() => (zb(Kb), 0))),
            primaryFireUp: ub((() => {
              gb(Kb)
            })),
            altFireDown: ub((() => (zb(Wb), 0))),
            altFireUp: ub((() => {
              gb(Wb)
            })),
            jumpDown: ub((() => {
              ib(db)
            })),
            specialActionDown: ub((bb => {
              zb(Db[bb])
            })),
            specialActionUp: ub((bb => {
              gb(Db[bb])
            })),
            reloadGun: ub((() => {
              ib(rb)
            })),
            dropItem: ub((bb => {
              xb(Ub.vd.Drop, Ub.ud.Down | (bb ? Ub.ud.Stack : 0))
            })),
            swapCameraZoom: ub((() => {
              ib(jb)
            })),
            pickBlock: ub((() => (ib(Cb), Jb(bb()))))
          }
        })(vb);
        let ub = !1,
          hb = null;
        const Bb = () => {
          var bb;
          null === (bb = hb) || void 0 === bb || bb(), hb = null
        };
        return {
          bodies: () => bb,
          look: eb(),
          move: (bb, hb) => {
            var Ob;
            Bb();
            const {
              bits: Gb,
              flips: Lb
            } = (bb => {
              if (null === bb) return {
                bits: Ub.wd.Peek,
                flips: 0
              };
              const ub = bb.sneakHeld ? Ub.wd.SneakHeld : 0;
              return "hold" === bb.mode ? {
                bits: ub | Ub.wd.SneakHoldMode,
                flips: bb.sneakTogglePressed ? 1 : 0
              } : {
                bits: ub,
                flips: bb.sneakPressed || bb.sneakTogglePressed ? 1 : 0
              }
            })(hb);
            null !== (Ob = vb()) && void 0 !== Ob && Ob.padMove(bb.x, bb.y, bb.magnitude, bb.headingOffset, (bb => Ub.wd.Active | (bb.jumpHeld ? Ub.wd.JumpHeld : 0) | (bb.jumpPressed ? Ub.wd.JumpPressed : 0) | (bb.running ? Ub.wd.Running : 0) | (bb.sprintHeld ? Ub.wd.SprintHeld : 0))(bb) | Gb, Lb) && (ub = !0), (0, ob.g)(Nb())
          },
          stopMoving: () => {
            var bb;
            ub && (ub = !(null !== (bb = vb()) && void 0 !== bb && bb.padMove(0, 0, 0, 0, 0, 0)), Bb(), hb = (0, Yb.x)((() => {
              Bb(), (0, ob.g)(Nb())
            })))
          },
          uninstall: Bb,
          deviceChanged: bb => {
            var hb;
            "touch" === bb ? ((0, ob.g)(!1), null !== (hb = vb()) && void 0 !== hb && hb.padMove(0, 0, 0, 0, Ub.wd.EndToggle, 0) && (ub = !1)) : "gamepad" === bb && (0, ob.g)(Nb())
          },
          hasPlayer: () => null !== vb(),
          isPlayerDead: () => {
            var bb;
            return !1 === (null === (bb = vb()) || void 0 === bb ? void 0 : bb.localPlayerAlive())
          },
          isReplayMode: () => {
            const bb = vb();
            return null !== bb && 0 !== (tb(bb) & Ub.Ad.Replay)
          },
          isFreeCameraOn: () => {
            const bb = vb();
            return null !== bb && 0 !== (tb(bb) & Ub.Ad.FreeCam)
          },
          targetsBlock: () => Jb(vb()),
          selectedSlotEmpty: () => {
            var bb;
            return !(null !== (bb = vb()) && void 0 !== bb && bb.items.MS())
          },
          pickBlockAllowed: () => !!Gb.b.get("creative") && !!Gb.b.get("canPickBlocks"),
          scrollHotbar: bb => {
            xb(Ub.vd.Hotbar, Ub.ud.Down | (bb > 0 ? Ub.ud.Next : 0))
          },
          hasFullInventory: Sb.p,
          hasLobbyTab: () => (0, Ab.c)({
            lobbyLeaderboardInfo: Gb.b.get("lobbyLeaderboardInfo"),
            lobbyManage: Gb.b.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var bb, ub, hb, Bb;
            const Ob = vb();
            return {
              holdingGun: !1 !== (null === Ob || void 0 === Ob ? void 0 : Ob.localPlayerAlive()) && "Gun" === (null === Ob || void 0 === Ob || null === (bb = Ob.items.MS()) || void 0 === bb || null === (ub = bb.typeObj) || void 0 === ub ? void 0 : ub.type),
              customButtons: null !== (hb = Gb.b.get("customButtons")) && void 0 !== hb ? hb : null,
              touchscreenActionButton: null !== (Bb = Gb.b.get("touchscreenActionButton")) && void 0 !== Bb ? Bb : null
            }
          },
          pressTouchButton: bb => {
            bb ? zb(nb) : gb(nb)
          }
        }
      },
      Mb = () => {
        const bb = (0, Ob.c)(sb()),
          ub = (0, Bb.c)(),
          hb = null;
        return () => {
          bb(), ub(), null === hb || void 0 === hb || hb()
        }
      }
  },
  4564: (bb, ub, hb) => {
    hb.d(ub, {
      Ab: () => vb,
      B: () => Gb,
      C: () => ob,
      D: () => fb,
      Db: () => pb,
      Eb: () => jb,
      Gb: () => rb,
      H: () => ab,
      Kb: () => tb,
      L: () => Hb,
      Lb: () => Ib,
      Mb: () => eb,
      N: () => Sb,
      Q: () => Ab,
      Qb: () => sb,
      R: () => Yb,
      Tb: () => Mb,
      U: () => Xb,
      Vb: () => Cb,
      Wb: () => db,
      Y: () => Zb,
      _b: () => qb,
      ab: () => nb,
      b: () => Vb,
      cc: () => Ob,
      eb: () => xb,
      f: () => yb,
      fb: () => zb,
      fc: () => Fb,
      hb: () => Db,
      i: () => wb,
      ib: () => gb,
      l: () => Wb,
      m: () => Eb,
      mb: () => Pb,
      ob: () => mb,
      p: () => Kb,
      r: () => lb,
      s: () => Ub,
      sb: () => Nb,
      v: () => Lb,
      vb: () => ib,
      x: () => Bb,
      xb: () => Jb
    });
    const Bb = 32,
      Ob = 33.333333333333336,
      Gb = {
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
      Ub = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Lb = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Yb = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Sb = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      ab = 7,
      Hb = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      wb = {
        Look: 0,
        Remesh: 1
      },
      Zb = 8,
      Xb = 1,
      pb = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      ob = {
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
      Ab = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      lb = {
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
      Kb = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Wb = 4,
      Cb = 4,
      db = 65535,
      rb = {
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
      jb = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      nb = 88,
      Db = 0,
      xb = 24,
      zb = 48,
      gb = 80,
      ib = {
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
      vb = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      tb = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Jb = {
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
      eb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Nb = 65535,
      sb = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Mb = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      mb = 2,
      Ib = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Pb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      qb = {
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
      Eb = {
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
      yb = {
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
      Vb = 8,
      Fb = {
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
      fb = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4545: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => xb,
      D: () => zb,
      F: () => lb,
      I: () => Ub,
      K: () => Lb,
      N: () => nb,
      e: () => jb,
      g: () => Wb,
      h: () => ib,
      k: () => gb,
      o: () => Ab,
      p: () => db,
      q: () => Kb,
      u: () => Cb,
      x: () => Db
    });
    var Bb = hb(4547);
    const Ob = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Gb = Ob;

    function Ub(bb) {
      Gb = null !== bb && void 0 !== bb ? bb : Ob
    }

    function Lb() {
      return Gb
    }
    const Yb = new Set,
      Sb = new Set;
    let ab = -1;
    const Hb = new Set,
      wb = new Set;
    let Zb = 0,
      Xb = 0;
    const pb = new Set,
      ob = new Set;

    function Ab(bb) {
      return Yb.add(bb), () => {
        Yb.delete(bb)
      }
    }

    function lb(bb, ub) {
      for (const Bb of Yb) try {
        Bb(bb)
      } catch (hb) {
        ub(hb)
      }
    }

    function Kb(bb) {
      return Sb.add(bb), () => {
        Sb.delete(bb)
      }
    }

    function Wb(bb, ub) {
      const hb = ab < 0 ? 0 : bb - ab;
      ab = bb;
      for (const Ob of Sb) try {
        Ob(hb)
      } catch (Bb) {
        ub(Bb)
      }
    }

    function Cb(bb) {
      return Hb.add(bb), () => {
        Hb.delete(bb)
      }
    }

    function db(bb) {
      return wb.add(bb), () => {
        wb.delete(bb)
      }
    }
    let rb = 0;

    function jb(bb) {
      rb += bb
    }

    function nb() {
      const bb = rb;
      return rb = 0, bb
    }

    function Db(bb) {
      return pb.add(bb), () => {
        pb.delete(bb)
      }
    }

    function xb(bb) {
      return ob.add(bb), () => {
        ob.delete(bb)
      }
    }

    function zb() {
      Zb = 0, Xb = 0, ab = -1
    }

    function gb(bb, ub) {
      if ("paced" === bb) return Xb += ub, null;
      if ("drawn" !== bb && "skipped" !== bb) return null;
      const hb = ub + Xb;
      return Xb = 0, hb
    }

    function ib(bb, ub, hb, Ob) {
      const Gb = (0, Bb.k)(ub),
        Ub = bb > 0 ? performance.now() : 0;
      for (let Bb = 0; Bb < bb; Bb++)
        for (const bb of pb) try {
          bb()
        } catch (Lb) {
          Ob(Lb)
        }
      if (bb > 0 && jb(performance.now() - Ub), null !== hb) {
        for (const bb of Hb) try {
          bb(hb)
        } catch (Lb) {
          Ob(Lb)
        }
        Zb += hb
      }
      if ("drawn" === ub) {
        const bb = Zb;
        Zb = 0;
        for (const ub of wb) try {
          ub(bb)
        } catch (Lb) {
          Ob(Lb)
        }
      }
      for (const Bb of ob) try {
        Bb(bb, Gb)
      } catch (Lb) {
        Ob(Lb)
      }
    }
  },
  4555: (bb, ub, hb) => {
    hb.d(ub, {
      $c: () => Bb.Vb,
      A: () => Ub,
      Ab: () => Bb.L,
      Bb: () => Ob.e,
      Cb: () => jb,
      Cc: () => Bb.vb,
      Cd: () => qb,
      D: () => vb,
      Db: () => sb,
      E: () => Zu,
      Fb: () => gb,
      Fc: () => Bb.xb,
      Gd: () => Fb,
      H: () => cb,
      Hc: () => Bb.Ab,
      I: () => Bb.f,
      Ib: () => xb,
      Jc: () => Qb,
      Jd: () => Vb,
      Kc: () => Bb.Eb,
      Ld: () => Lu,
      M: () => Sb,
      Mb: () => Bb.Q,
      Mc: () => Bb.Gb,
      Md: () => pu,
      N: () => Bb.i,
      Nd: () => Wb,
      Oc: () => Bb.Kb,
      Od: () => fb,
      Pb: () => ib,
      Pc: () => Bb.Mb,
      Q: () => Rb,
      Qb: () => Cb,
      Rd: () => eb,
      S: () => Bb.l,
      Tc: () => Bb.Qb,
      Td: () => Jb,
      U: () => kb,
      Ub: () => Uu,
      Ud: () => tb,
      V: () => Bb.r,
      Vb: () => Kb,
      Vd: () => Yb,
      W: () => Bb.s,
      Xc: () => Bb.Tb,
      Xd: () => Nb,
      Y: () => Bb.v,
      Yc: () => Db,
      Zb: () => Hu,
      _: () => Hb,
      _d: () => ou,
      ab: () => lb,
      bb: () => Bb.x,
      bc: () => Ob.j,
      c: () => uu,
      ce: () => Zb,
      d: () => pb,
      dd: () => Bb.Wb,
      eb: () => Bb.B,
      ec: () => Ab,
      ed: () => Bb.cc,
      fb: () => Ib,
      h: () => Xb,
      hc: () => Bu,
      hd: () => Gb,
      jb: () => Gu,
      k: () => Su,
      kb: () => ab,
      lc: () => Bb.ab,
      ld: () => ob,
      mb: () => Bb.C,
      n: () => nb,
      nc: () => Bb.eb,
      o: () => rb,
      oc: () => Bb.fb,
      od: () => Yu,
      q: () => Bb.b,
      qb: () => Eb,
      qc: () => Bb.hb,
      qd: () => mb,
      s: () => wu,
      tb: () => Tb,
      tc: () => Bb.ib,
      td: () => Pb,
      uc: () => Bb.sb,
      vc: () => Xu,
      vd: () => Mb,
      w: () => zb,
      wb: () => Bb.H,
      wc: () => au,
      xd: () => yb,
      yb: () => bu,
      zb: () => hu,
      zc: () => Ou
    });
    var Bb = hb(4564),
      Ob = hb(2273);
    const Gb = Math.round(1e3 / Bb.cc),
      Ub = 4,
      Lb = 2;

    function Yb() {
      return crypto.getRandomValues(new Uint32Array(Lb))
    }
    const Sb = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      ab = 16,
      Hb = {
        Draws: 1,
        NetAll: 2
      },
      wb = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Zb(bb) {
      return (bb.nametagsHidden ? db.NametagsHidden : 0) | (bb.crouchToggle ? db.CrouchToggle : 0) | (bb.bhopDisabled ? db.BhopDisabled : 0) | (bb.disableBobbing ? db.DisableBobbing : 0) | (bb.ezTowering ? db.EzTowering : 0) | (bb.ezBridging ? db.EzBridging : 0) | (bb.showChunkBorders ? db.ShowChunkBorders : 0)
    }
    const Xb = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      pb = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      ob = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Ab = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      lb = 5,
      Kb = 4294967295;

    function Wb(bb) {
      return (bb.showFog ? wb.ShowFog : 0) | (bb.lighting ? wb.Lighting : 0) | (bb.chunkFade ? wb.ChunkFade : 0)
    }
    const Cb = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      db = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      rb = {
        Release: 1,
        KeepTouches: 2
      },
      jb = {
        Point: 1,
        Stamped: 2
      },
      nb = {
        Add: 1,
        Clear: 2
      },
      Db = 1,
      xb = 8,
      zb = 16777215,
      gb = 4,
      ib = {
        Resume: 1
      },
      vb = {
        Held: 1
      };

    function tb(bb, ub) {
      return (bb | ub << 8) >>> 0
    }

    function Jb(bb) {
      return 255 & bb
    }

    function eb(bb) {
      return bb >>> 8
    }

    function Nb(bb) {
      return bb + 3 & -4
    }
    const sb = 16777216,
      Mb = 20;
    const mb = 8,
      Ib = 8,
      Pb = 16777216,
      qb = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Eb = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      yb = 16,
      Vb = {
        Lost: 0,
        Gone: 1
      },
      Fb = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function fb(bb) {
      return bb === Fb.WorldgenSeed || bb === Fb.Generate
    }
    const kb = 4,
      Tb = 99,
      cb = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Qb = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Rb = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      bu = 12,
      uu = 16,
      hu = 4,
      Bu = 12,
      Ou = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Gu = 4,
      Uu = 8,
      Lu = 8,
      Yu = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Su = {
        Crit: 1,
        HitSelf: 2
      },
      au = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Hu = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      wu = 12,
      Zu = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Xu = 67108864;

    function pu(bb) {
      for (const [ub, hb] of Object.entries(Bb.f))
        if (hb === bb) return ub;
      return `Unknown${bb}`
    }

    function ou(bb) {
      return {
        status: bb[Bb.B.Status],
        lastError: bb[Bb.B.LastError],
        lastErrorDetail: bb[Bb.B.LastErrorDetail],
        errorCount: bb[Bb.B.ErrorCount],
        frameIndex: bb[Bb.B.FrameIndex],
        tickIndex: bb[Bb.B.TickIndex],
        renderPending: bb[Bb.B.RenderPending],
        firstView: bb[Bb.B.FirstView],
        chunksCancelled: bb[Bb.B.ChunksCancelled]
      }
    }
  },
  4547: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      h: () => Gb,
      k: () => Ob
    });
    var Bb = hb(4555);

    function Ob(bb) {
      return "none" !== bb
    }

    function Gb(bb, ub) {
      if (!bb) return "none";
      switch (ub) {
        case Bb.Y.Drawn:
          return "drawn";
        case Bb.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Ub(bb) {
      return "drawn" === bb
    }
  },
  4575: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      c: () => Gb,
      g: () => Ub,
      k: () => Bb,
      n: () => Lb
    });
    const Bb = {
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
      Ob = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Gb = {
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
      Ub = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Lb = [16]
  },
  40116: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      d: () => Gb,
      h: () => Ob
    });
    let Bb = null;

    function Ob(bb) {
      Bb = bb
    }

    function Gb(bb) {
      Bb === bb && (Bb = null)
    }

    function Ub() {
      var bb;
      null === (bb = Bb) || void 0 === bb || bb()
    }
  },
  4584: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      f: () => Ub,
      j: () => Sb
    });
    var Bb = hb(2273),
      Ob = hb(2276);
    const Gb = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Ub(bb) {
      return bb instanceof HTMLElement && (!!(bb.isContentEditable || bb instanceof HTMLTextAreaElement || bb instanceof HTMLSelectElement) || bb instanceof HTMLInputElement && !Gb.has(bb.type))
    }

    function Lb(bb) {
      let ub = null;
      const hb = hb => {
          const Ob = Ub(hb);
          Ob !== ub && (ub = Ob, bb(Bb.i.UiCapture, Bb.t.Keyboard, 0, 0, Ob ? Bb.t.Keyboard : 0))
        },
        Ob = bb => {
          hb(bb.target)
        },
        Gb = bb => {
          hb(bb.relatedTarget)
        },
        Lb = () => {
          hb(document.activeElement)
        },
        Yb = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Ob, Yb), document.addEventListener("focusout", Gb, Yb), document.addEventListener("keydown", Lb, Yb), hb(document.activeElement), () => {
        document.removeEventListener("focusin", Ob, Yb), document.removeEventListener("focusout", Gb, Yb), document.removeEventListener("keydown", Lb, Yb)
      }
    }
    const Yb = new Map;

    function Sb(bb, ub) {
      var hb;
      let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Yb.set(Bb, (null !== (hb = Yb.get(Bb)) && void 0 !== hb ? hb : 0) & ~bb | ub & bb);
      let Gb = 0;
      for (const Ob of Yb.values()) Gb |= Ob;
      return (0, Ob.C)(bb, Gb & bb)
    }
  },
  36591: (bb, ub, hb) => {
    function Bb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Ob(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !Bb(bb)
    }

    function Gb(bb) {
      return bb.includes(" Strongbed")
    }

    function Ub(bb) {
      return Bb(bb) || Ob(bb) || Gb(bb)
    }
    hb.d(ub, {
      b: () => Ub,
      f: () => Bb,
      g: () => Gb,
      i: () => Ob
    })
  },
  36584: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb
    });
    var Bb = hb(36591),
      Ob = hb(9181);
    const Gb = [],
      Ub = [],
      Lb = [],
      Yb = [];
    for (const ab of Object.keys(Ob.l))(0, Bb.f)(ab) ? Gb.push(ab) : (0, Bb.i)(ab) && Ub.push(ab), (0, Bb.g)(ab) && Lb.push(ab), (ab.includes(" Bed Head") || ab.includes(" Strongbed Head")) && Yb.push(ab);
    const Sb = {
      leafBeds: Gb,
      woolBeds: Ub,
      strongBeds: Lb,
      beds: [...Gb, ...Ub, ...Lb],
      bedHeads: Yb,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6213: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      f: () => Ob,
      i: () => Yb,
      l: () => Gb,
      m: () => Sb,
      n: () => Bb,
      o: () => Lb
    });
    let Bb = function(bb) {
        return bb[bb.DEFAULT = 0] = "DEFAULT", bb[bb.BOAT = 1] = "BOAT", bb[bb.GLIDER = 2] = "GLIDER", bb[bb.BALLOON = 3] = "BALLOON", bb[bb.SLEEPING = 4] = "SLEEPING", bb[bb.RIDING_MOB = 5] = "RIDING_MOB", bb[bb.CAR = 6] = "CAR", bb[bb.HOVERCRAFT = 7] = "HOVERCRAFT", bb
      }({}),
      Ob = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.OBSIDIAN = 1] = "OBSIDIAN", bb[bb.SPEED = 2] = "SPEED", bb
      }({}),
      Gb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.IRON = 1] = "IRON", bb[bb.GOLD = 2] = "GOLD", bb[bb.DIAMOND = 3] = "DIAMOND", bb
      }({}),
      Ub = function(bb) {
        return bb[bb.YELLOW = 0] = "YELLOW", bb[bb.WHITE = 1] = "WHITE", bb[bb.RED = 2] = "RED", bb[bb.PURPLE = 3] = "PURPLE", bb[bb.PINK = 4] = "PINK", bb[bb.ORANGE = 5] = "ORANGE", bb[bb.MAGENTA = 6] = "MAGENTA", bb[bb.LIME = 7] = "LIME", bb[bb.LIGHT_GRAY = 8] = "LIGHT_GRAY", bb[bb.LIGHT_BLUE = 9] = "LIGHT_BLUE", bb[bb.GREEN = 10] = "GREEN", bb[bb.GRAY = 11] = "GRAY", bb[bb.CYAN = 12] = "CYAN", bb[bb.BROWN = 13] = "BROWN", bb[bb.BLUE = 14] = "BLUE", bb[bb.BLACK = 15] = "BLACK", bb
      }({}),
      Lb = function(bb) {
        return bb[bb.ROTATION_1 = 0] = "ROTATION_1", bb[bb.ROTATION_2 = 1] = "ROTATION_2", bb[bb.ROTATION_3 = 2] = "ROTATION_3", bb[bb.ROTATION_4 = 3] = "ROTATION_4", bb
      }({}),
      Yb = function(bb) {
        return bb[bb.KART = 0] = "KART", bb[bb.OFF_ROADER = 1] = "OFF_ROADER", bb[bb.CAR = 2] = "CAR", bb[bb.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", bb[bb.ARMORED_CAR = 4] = "ARMORED_CAR", bb[bb.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", bb[bb.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", bb[bb.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", bb
      }({});
    Bb.DEFAULT, Bb.BOAT, Ob.SPEED, Bb.GLIDER, Gb.DIAMOND, Bb.BALLOON, Ub.BLACK, Bb.SLEEPING, Lb.ROTATION_4, Bb.RIDING_MOB, Bb.CAR, Yb.MOONSTONE_MINING_DRILL, Bb.HOVERCRAFT;
    let Sb = function(bb) {
      return bb[bb.NORMAL = 0] = "NORMAL", bb[bb.GLIDING = 1] = "GLIDING", bb[bb.FLOATING = 2] = "FLOATING", bb
    }({})
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);