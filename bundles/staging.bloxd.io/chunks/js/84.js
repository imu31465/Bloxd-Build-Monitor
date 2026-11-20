export const id = 84;
export const ids = [84];
export const modules = {
  39964: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      startWasmPadGameplay: () => Kb
    });
    sb(39969);
    var kb = sb(39971),
      Wb = sb(39989),
      ab = sb(1895),
      Tb = sb(40002),
      Ub = sb(4517),
      Ib = sb(4498),
      Hb = sb(40005),
      fb = sb(40014),
      Mb = sb(4530),
      Xb = sb(40099),
      nb = sb(2310),
      mb = sb(8468),
      lb = sb(39977),
      Qb = sb(8442);
    const eb = bb => {
        const cb = Mb.b.indexOf(bb);
        if (cb < 0) throw new Error(`No core action "${bb}"`);
        return cb
      },
      Cb = eb("primary-fire"),
      Nb = eb("alt-fire"),
      Vb = eb("mid-fire"),
      Lb = eb("jump"),
      ub = eb("ReloadGun"),
      Yb = eb("SwapCameraZoom"),
      hb = eb("TouchAction1"),
      Jb = {
        SpecialAction1: eb("SpecialAction1"),
        SpecialAction2: eb("SpecialAction2")
      },
      gb = (bb, cb) => {
        (0, nb.o)(Ub.B.PadAction, bb, 0, 0, (0, nb.m)(cb, performance.now()))
      },
      Bb = bb => {
        gb(bb, Tb.yd.Down)
      },
      tb = bb => {
        gb(bb, 0)
      },
      yb = bb => {
        Bb(bb), tb(bb)
      },
      Pb = () => {
        const bb = (0, fb.h)();
        return null !== bb && void 0 !== bb && bb.isCoreRunning ? bb : null
      },
      Db = bb => Tb.n.playerFlags(bb.api.apiView, 0),
      Eb = bb => null !== bb && Tb.n.targetBlockId(bb.api.apiView, 0) !== Tb.cd,
      ib = () => {
        const bb = (0, mb.d)(),
          cb = new lb.c;
        let sb = !1;
        const kb = (bb, cb) => {
            (0, nb.o)(Ub.B.PadLook, Tb.Jd.Rate, bb, cb, 0)
          },
          Wb = () => {
            sb = !1, cb.reset(), kb(0, 0)
          };
        return {
          update: (Wb, ab, Ib) => {
            sb || (bb.discardPending(), sb = !0);
            const Hb = (0, lb.m)(cb, Wb, ab, Ib, performance.now());
            kb(Hb.yawRadPerSec, Hb.pitchRadPerSec);
            const fb = bb.drainLookDelta();
            0 === fb.Eu && 0 === fb.bY || (0, nb.o)(Ub.B.PadLook, Tb.Jd.Gyro, fb.Eu, fb.bY, 0)
          },
          release: Wb,
          uninstall: Wb
        }
      },
      Ob = () => {
        const bb = Pb();
        return null !== bb && 0 !== (Db(bb) & Tb.Nd.PadSneakToggled)
      },
      Gb = () => {
        const bb = (bb => {
          const cb = bb => function() {
            return (0, Xb.e)(), bb(...arguments)
          };
          return {
            primaryFireDown: cb((() => (Bb(Cb), 0))),
            primaryFireUp: cb((() => {
              tb(Cb)
            })),
            altFireDown: cb((() => (Bb(Nb), 0))),
            altFireUp: cb((() => {
              tb(Nb)
            })),
            jumpDown: cb((() => {
              yb(Lb)
            })),
            specialActionDown: cb((bb => {
              Bb(Jb[bb])
            })),
            specialActionUp: cb((bb => {
              tb(Jb[bb])
            })),
            reloadGun: cb((() => {
              yb(ub)
            })),
            dropItem: cb((bb => {
              gb(Tb.Cd.Drop, Tb.yd.Down | (bb ? Tb.yd.Stack : 0))
            })),
            swapCameraZoom: cb((() => {
              yb(Yb)
            })),
            pickBlock: cb((() => (yb(Vb), Eb(bb()))))
          }
        })(Pb);
        let cb = !1,
          sb = null;
        const kb = () => {
          var bb;
          null === (bb = sb) || void 0 === bb || bb(), sb = null
        };
        return {
          bodies: () => bb,
          look: ib(),
          move: (bb, sb) => {
            var Wb;
            kb();
            const {
              bits: ab,
              flips: Ub
            } = (bb => {
              if (null === bb) return {
                bits: Tb.Fd.Peek,
                flips: 0
              };
              const cb = bb.sneakHeld ? Tb.Fd.SneakHeld : 0;
              return "hold" === bb.mode ? {
                bits: cb | Tb.Fd.SneakHoldMode,
                flips: bb.sneakTogglePressed ? 1 : 0
              } : {
                bits: cb,
                flips: bb.sneakPressed || bb.sneakTogglePressed ? 1 : 0
              }
            })(sb);
            null !== (Wb = Pb()) && void 0 !== Wb && Wb.padMove(bb.x, bb.y, bb.magnitude, bb.headingOffset, (bb => Tb.Fd.Active | (bb.jumpHeld ? Tb.Fd.JumpHeld : 0) | (bb.jumpPressed ? Tb.Fd.JumpPressed : 0) | (bb.running ? Tb.Fd.Running : 0) | (bb.sprintHeld ? Tb.Fd.SprintHeld : 0))(bb) | ab, Ub) && (cb = !0), (0, Qb.h)(Ob())
          },
          stopMoving: () => {
            var bb;
            cb && (cb = !(null !== (bb = Pb()) && void 0 !== bb && bb.padMove(0, 0, 0, 0, 0, 0)), kb(), sb = (0, Ib.C)((() => {
              kb(), (0, Qb.h)(Ob())
            })))
          },
          uninstall: kb,
          deviceChanged: bb => {
            var sb;
            "touch" === bb ? ((0, Qb.h)(!1), null !== (sb = Pb()) && void 0 !== sb && sb.padMove(0, 0, 0, 0, Tb.Fd.EndToggle, 0) && (cb = !1)) : "gamepad" === bb && (0, Qb.h)(Ob())
          },
          hasPlayer: () => null !== Pb(),
          isPlayerDead: () => {
            var bb;
            return !1 === (null === (bb = Pb()) || void 0 === bb ? void 0 : bb.localPlayerAlive())
          },
          isReplayMode: () => {
            const bb = Pb();
            return null !== bb && 0 !== (Db(bb) & Tb.Nd.Replay)
          },
          isFreeCameraOn: () => {
            const bb = Pb();
            return null !== bb && 0 !== (Db(bb) & Tb.Nd.FreeCam)
          },
          targetsBlock: () => Eb(Pb()),
          selectedSlotEmpty: () => {
            var bb;
            return !(null !== (bb = Pb()) && void 0 !== bb && bb.items.qU())
          },
          pickBlockAllowed: () => !!ab.e.get("creative") && !!ab.e.get("canPickBlocks"),
          scrollHotbar: bb => {
            gb(Tb.Cd.Hotbar, Tb.yd.Down | (bb > 0 ? Tb.yd.Next : 0))
          },
          hasFullInventory: Hb.o,
          hasLobbyLeaderboard: () => !!ab.e.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var bb, cb, sb, kb;
            const Wb = Pb();
            return {
              holdingGun: !1 !== (null === Wb || void 0 === Wb ? void 0 : Wb.localPlayerAlive()) && "Gun" === (null === Wb || void 0 === Wb || null === (bb = Wb.items.qU()) || void 0 === bb || null === (cb = bb.typeObj) || void 0 === cb ? void 0 : cb.type),
              customButtons: null !== (sb = ab.e.get("customButtons")) && void 0 !== sb ? sb : null,
              touchscreenActionButton: null !== (kb = ab.e.get("touchscreenActionButton")) && void 0 !== kb ? kb : null
            }
          },
          pressTouchButton: bb => {
            bb ? Bb(hb) : tb(hb)
          }
        }
      },
      Kb = () => {
        const bb = (0, Wb.d)(Gb()),
          cb = (0, kb.e)(),
          sb = null;
        return () => {
          bb(), cb(), null === sb || void 0 === sb || sb()
        }
      }
  },
  4517: (bb, cb, sb) => {
    sb.d(cb, {
      Ab: () => Lb,
      B: () => mb,
      D: () => ob,
      Db: () => Pb,
      Eb: () => Zb,
      G: () => Hb,
      Gb: () => Eb,
      I: () => lb,
      Ib: () => Ob,
      L: () => Ib,
      Lb: () => Gb,
      Nb: () => Nb,
      O: () => Xb,
      Rb: () => Vb,
      S: () => Mb,
      U: () => Yb,
      Vb: () => qb,
      X: () => Jb,
      Xb: () => Wb,
      Yb: () => rb,
      _: () => gb,
      ab: () => hb,
      d: () => wb,
      db: () => Bb,
      f: () => Ab,
      fb: () => zb,
      h: () => fb,
      hb: () => Kb,
      i: () => Cb,
      jb: () => ib,
      k: () => db,
      l: () => eb,
      n: () => Qb,
      nb: () => tb,
      p: () => Tb,
      rb: () => Db,
      sb: () => yb,
      t: () => Ub,
      v: () => kb,
      vb: () => nb,
      xb: () => ub,
      y: () => ab
    });
    const kb = 32,
      Wb = 33.333333333333336,
      ab = {
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
      Tb = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Ub = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Ib = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Hb = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      fb = {
        Look: 0,
        Remesh: 1
      },
      Mb = 8,
      Xb = 1,
      nb = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      mb = {
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
      lb = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Qb = {
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
      eb = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Cb = 4,
      Nb = 4,
      Vb = 65535,
      Lb = {
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
      ub = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Yb = 88,
      hb = 0,
      Jb = 24,
      gb = 48,
      Bb = 80,
      tb = {
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
      yb = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Pb = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Db = {
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
      Eb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      ib = 65535,
      Ob = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Gb = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Kb = 2,
      Zb = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      zb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
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
      db = {
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
      Ab = {
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
      wb = 8,
      rb = {
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
      ob = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4498: (bb, cb, sb) => {
    sb.d(cb, {
      C: () => gb,
      G: () => Bb,
      H: () => tb,
      L: () => Cb,
      M: () => Tb,
      N: () => Ub,
      P: () => Jb,
      c: () => hb,
      g: () => Vb,
      k: () => Pb,
      o: () => yb,
      r: () => eb,
      u: () => ub,
      v: () => Nb,
      y: () => Lb
    });
    var kb = sb(4507);
    const Wb = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ab = Wb;

    function Tb(bb) {
      ab = null !== bb && void 0 !== bb ? bb : Wb
    }

    function Ub() {
      return ab
    }
    const Ib = new Set,
      Hb = new Set;
    let fb = -1;
    const Mb = new Set,
      Xb = new Set;
    let nb = 0,
      mb = 0;
    const lb = new Set,
      Qb = new Set;

    function eb(bb) {
      return Ib.add(bb), () => {
        Ib.delete(bb)
      }
    }

    function Cb(bb, cb) {
      for (const kb of Ib) try {
        kb(bb)
      } catch (sb) {
        cb(sb)
      }
    }

    function Nb(bb) {
      return Hb.add(bb), () => {
        Hb.delete(bb)
      }
    }

    function Vb(bb, cb) {
      const sb = fb < 0 ? 0 : bb - fb;
      fb = bb;
      for (const Wb of Hb) try {
        Wb(sb)
      } catch (kb) {
        cb(kb)
      }
    }

    function Lb(bb) {
      return Mb.add(bb), () => {
        Mb.delete(bb)
      }
    }

    function ub(bb) {
      return Xb.add(bb), () => {
        Xb.delete(bb)
      }
    }
    let Yb = 0;

    function hb(bb) {
      Yb += bb
    }

    function Jb() {
      const bb = Yb;
      return Yb = 0, bb
    }

    function gb(bb) {
      return lb.add(bb), () => {
        lb.delete(bb)
      }
    }

    function Bb(bb) {
      return Qb.add(bb), () => {
        Qb.delete(bb)
      }
    }

    function tb() {
      nb = 0, mb = 0, fb = -1
    }

    function yb(bb, cb) {
      if ("paced" === bb) return mb += cb, null;
      if ("drawn" !== bb && "skipped" !== bb) return null;
      const sb = cb + mb;
      return mb = 0, sb
    }

    function Pb(bb, cb, sb, Wb) {
      const ab = (0, kb.h)(cb),
        Tb = bb > 0 ? performance.now() : 0;
      for (let kb = 0; kb < bb; kb++)
        for (const bb of lb) try {
          bb()
        } catch (Ub) {
          Wb(Ub)
        }
      if (bb > 0 && hb(performance.now() - Tb), null !== sb) {
        for (const bb of Mb) try {
          bb(sb)
        } catch (Ub) {
          Wb(Ub)
        }
        nb += sb
      }
      if ("drawn" === cb) {
        const bb = nb;
        nb = 0;
        for (const cb of Xb) try {
          cb(bb)
        } catch (Ub) {
          Wb(Ub)
        }
      }
      for (const kb of Qb) try {
        kb(bb, ab)
      } catch (Ub) {
        Wb(Ub)
      }
    }
  },
  4512: (bb, cb, sb) => {
    sb.d(cb, {
      $c: () => kb.sb,
      $d: () => Sb,
      Bb: () => cc,
      Bc: () => kb._,
      Bd: () => kb.Nb,
      C: () => kb.f,
      Cd: () => kb.Rb,
      Ce: () => lc,
      F: () => Hb,
      Fb: () => Wb.e,
      Fc: () => kb.ab,
      Fe: () => nb,
      Gd: () => kb.Xb,
      Hc: () => kb.db,
      Hd: () => ab,
      I: () => kb.h,
      Ib: () => hb,
      K: () => kb.i,
      Kd: () => Qb,
      Lc: () => kb.jb,
      Ld: () => Uc,
      M: () => vb,
      Mb: () => Kb,
      Nc: () => nc,
      Od: () => zb,
      P: () => kb.n,
      Pb: () => yb,
      Pc: () => Hc,
      Qd: () => db,
      Sd: () => Zb,
      T: () => kb.p,
      Tb: () => Bb,
      Tc: () => kc,
      Vc: () => kb.nb,
      Vd: () => rb,
      W: () => kb.t,
      Xb: () => kb.I,
      Xc: () => kb.rb,
      Zd: () => Ab,
      _: () => Mb,
      _b: () => Pb,
      bb: () => Cb,
      c: () => bc,
      cb: () => kb.v,
      cc: () => Lb,
      cd: () => jb,
      ce: () => ob,
      f: () => lb,
      fc: () => ac,
      fd: () => kb.xb,
      fe: () => Tc,
      g: () => mb,
      gb: () => kb.y,
      ge: () => mc,
      he: () => Vb,
      i: () => Ic,
      ib: () => qb,
      id: () => kb.Ab,
      jb: () => Wc,
      jc: () => Nb,
      ke: () => Rb,
      lc: () => fc,
      m: () => Jb,
      mb: () => fb,
      md: () => kb.Db,
      n: () => Yb,
      oe: () => Ob,
      pc: () => Wb.i,
      pd: () => kb.Gb,
      q: () => kb.d,
      qb: () => kb.B,
      r: () => Mc,
      rc: () => eb,
      sc: () => sc,
      se: () => ib,
      t: () => tb,
      tb: () => wb,
      td: () => kb.Ib,
      u: () => Tb,
      ud: () => kb.Lb,
      v: () => Db,
      vb: () => Fb,
      ve: () => Eb,
      wc: () => kb.U,
      x: () => Xc,
      xd: () => gb,
      xe: () => Ib,
      yb: () => pb,
      yc: () => kb.X,
      z: () => xb,
      ze: () => Gb
    });
    var kb = sb(4517),
      Wb = sb(2305);
    const ab = Math.round(1e3 / kb.Xb),
      Tb = 4,
      Ub = 2;

    function Ib() {
      return crypto.getRandomValues(new Uint32Array(Ub))
    }
    const Hb = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      fb = 16,
      Mb = {
        Draws: 1,
        NetAll: 2
      },
      Xb = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function nb(bb) {
      return (bb.nametagsHidden ? ub.NametagsHidden : 0) | (bb.crouchToggle ? ub.CrouchToggle : 0) | (bb.bhopDisabled ? ub.BhopDisabled : 0) | (bb.disableBobbing ? ub.DisableBobbing : 0) | (bb.ezTowering ? ub.EzTowering : 0) | (bb.ezBridging ? ub.EzBridging : 0) | (bb.showChunkBorders ? ub.ShowChunkBorders : 0)
    }
    const mb = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      lb = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Qb = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      eb = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Cb = 5,
      Nb = 4294967295;

    function Vb(bb) {
      return (bb.showFog ? Xb.ShowFog : 0) | (bb.lighting ? Xb.Lighting : 0) | (bb.chunkFade ? Xb.ChunkFade : 0)
    }
    const Lb = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      ub = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Yb = {
        Release: 1,
        KeepTouches: 2
      },
      hb = {
        Point: 1,
        Stamped: 2
      },
      Jb = {
        Add: 1,
        Clear: 2
      },
      gb = 1,
      Bb = 8,
      tb = 16777215,
      yb = 4,
      Pb = {
        Resume: 1
      },
      Db = {
        Held: 1
      };

    function Eb(bb, cb) {
      return (bb | cb << 8) >>> 0
    }

    function ib(bb) {
      return 255 & bb
    }

    function Ob(bb) {
      return bb >>> 8
    }

    function Gb(bb) {
      return bb + 3 & -4
    }
    const Kb = 16777216,
      Zb = 20;
    const zb = 8,
      qb = 8,
      db = 16777216,
      Ab = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      wb = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      rb = 16,
      ob = {
        Lost: 0,
        Gone: 1
      },
      Sb = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Rb(bb) {
      return bb === Sb.WorldgenSeed || bb === Sb.Generate
    }
    const vb = 4,
      Fb = 99,
      xb = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      jb = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      pb = 12,
      bc = 16,
      cc = 4,
      sc = 12,
      kc = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Wc = 4,
      ac = 8,
      Tc = 8,
      Uc = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Ic = {
        Crit: 1,
        HitSelf: 2
      },
      Hc = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      fc = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Mc = 12,
      Xc = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      nc = 67108864;

    function mc(bb) {
      for (const [cb, sb] of Object.entries(kb.f))
        if (sb === bb) return cb;
      return `Unknown${bb}`
    }

    function lc(bb) {
      return {
        status: bb[kb.y.Status],
        lastError: bb[kb.y.LastError],
        lastErrorDetail: bb[kb.y.LastErrorDetail],
        errorCount: bb[kb.y.ErrorCount],
        frameIndex: bb[kb.y.FrameIndex],
        tickIndex: bb[kb.y.TickIndex],
        renderPending: bb[kb.y.RenderPending],
        firstView: bb[kb.y.FirstView],
        chunksCancelled: bb[kb.y.ChunksCancelled]
      }
    }
  },
  4507: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      g: () => ab,
      h: () => Wb
    });
    var kb = sb(4512);

    function Wb(bb) {
      return "none" !== bb
    }

    function ab(bb, cb) {
      if (!bb) return "none";
      switch (cb) {
        case kb.W.Drawn:
          return "drawn";
        case kb.W.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Tb(bb) {
      return "drawn" === bb
    }
  },
  4530: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      f: () => ab,
      h: () => Tb,
      i: () => kb,
      m: () => Ub
    });
    const kb = {
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
      Wb = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ab = {
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
      Tb = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Ub = [16]
  },
  40099: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      h: () => ab,
      l: () => Wb
    });
    let kb = null;

    function Wb(bb) {
      kb = bb
    }

    function ab(bb) {
      kb === bb && (kb = null)
    }

    function Tb() {
      var bb;
      null === (bb = kb) || void 0 === bb || bb()
    }
  },
  4536: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      c: () => Tb,
      d: () => Hb
    });
    var kb = sb(2305),
      Wb = sb(2310);
    const ab = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Tb(bb) {
      return bb instanceof HTMLElement && (!!(bb.isContentEditable || bb instanceof HTMLTextAreaElement || bb instanceof HTMLSelectElement) || bb instanceof HTMLInputElement && !ab.has(bb.type))
    }

    function Ub(bb) {
      let cb = null;
      const sb = sb => {
          const Wb = Tb(sb);
          Wb !== cb && (cb = Wb, bb(kb.h.UiCapture, kb.z.Keyboard, 0, 0, Wb ? kb.z.Keyboard : 0))
        },
        Wb = bb => {
          sb(bb.target)
        },
        ab = bb => {
          sb(bb.relatedTarget)
        },
        Ub = () => {
          sb(document.activeElement)
        },
        Ib = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Wb, Ib), document.addEventListener("focusout", ab, Ib), document.addEventListener("keydown", Ub, Ib), sb(document.activeElement), () => {
        document.removeEventListener("focusin", Wb, Ib), document.removeEventListener("focusout", ab, Ib), document.removeEventListener("keydown", Ub, Ib)
      }
    }
    const Ib = new Map;

    function Hb(bb, cb) {
      var sb;
      let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Ib.set(kb, (null !== (sb = Ib.get(kb)) && void 0 !== sb ? sb : 0) & ~bb | cb & bb);
      let ab = 0;
      for (const Wb of Ib.values()) ab |= Wb;
      return (0, Wb.w)(bb, ab & bb)
    }
  },
  36505: (bb, cb, sb) => {
    function kb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Wb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !kb(bb)
    }

    function ab(bb) {
      return bb.includes(" Strongbed")
    }

    function Tb(bb) {
      return kb(bb) || Wb(bb) || ab(bb)
    }
    sb.d(cb, {
      e: () => Tb,
      f: () => kb,
      h: () => ab,
      j: () => Wb
    })
  },
  36502: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb
    });
    var kb = sb(36505),
      Wb = sb(9017);
    const ab = [],
      Tb = [],
      Ub = [],
      Ib = [];
    for (const fb of Object.keys(Wb.k))(0, kb.f)(fb) ? ab.push(fb) : (0, kb.j)(fb) && Tb.push(fb), (0, kb.h)(fb) && Ub.push(fb), (fb.includes(" Bed Head") || fb.includes(" Strongbed Head")) && Ib.push(fb);
    const Hb = {
      leafBeds: ab,
      woolBeds: Tb,
      strongBeds: Ub,
      beds: [...ab, ...Tb, ...Ub],
      bedHeads: Ib,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6134: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      i: () => Wb,
      m: () => Ib,
      q: () => ab,
      r: () => Hb,
      t: () => kb,
      w: () => Ub
    });
    let kb = function(bb) {
        return bb[bb.DEFAULT = 0] = "DEFAULT", bb[bb.BOAT = 1] = "BOAT", bb[bb.GLIDER = 2] = "GLIDER", bb[bb.BALLOON = 3] = "BALLOON", bb[bb.SLEEPING = 4] = "SLEEPING", bb[bb.RIDING_MOB = 5] = "RIDING_MOB", bb[bb.CAR = 6] = "CAR", bb[bb.HOVERCRAFT = 7] = "HOVERCRAFT", bb
      }({}),
      Wb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.OBSIDIAN = 1] = "OBSIDIAN", bb[bb.SPEED = 2] = "SPEED", bb
      }({}),
      ab = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.IRON = 1] = "IRON", bb[bb.GOLD = 2] = "GOLD", bb[bb.DIAMOND = 3] = "DIAMOND", bb
      }({}),
      Tb = function(bb) {
        return bb[bb.YELLOW = 0] = "YELLOW", bb[bb.WHITE = 1] = "WHITE", bb[bb.RED = 2] = "RED", bb[bb.PURPLE = 3] = "PURPLE", bb[bb.PINK = 4] = "PINK", bb[bb.ORANGE = 5] = "ORANGE", bb[bb.MAGENTA = 6] = "MAGENTA", bb[bb.LIME = 7] = "LIME", bb[bb.LIGHT_GRAY = 8] = "LIGHT_GRAY", bb[bb.LIGHT_BLUE = 9] = "LIGHT_BLUE", bb[bb.GREEN = 10] = "GREEN", bb[bb.GRAY = 11] = "GRAY", bb[bb.CYAN = 12] = "CYAN", bb[bb.BROWN = 13] = "BROWN", bb[bb.BLUE = 14] = "BLUE", bb[bb.BLACK = 15] = "BLACK", bb
      }({}),
      Ub = function(bb) {
        return bb[bb.ROTATION_1 = 0] = "ROTATION_1", bb[bb.ROTATION_2 = 1] = "ROTATION_2", bb[bb.ROTATION_3 = 2] = "ROTATION_3", bb[bb.ROTATION_4 = 3] = "ROTATION_4", bb
      }({}),
      Ib = function(bb) {
        return bb[bb.KART = 0] = "KART", bb[bb.OFF_ROADER = 1] = "OFF_ROADER", bb[bb.CAR = 2] = "CAR", bb[bb.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", bb[bb.ARMORED_CAR = 4] = "ARMORED_CAR", bb[bb.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", bb[bb.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", bb[bb.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", bb
      }({});
    kb.DEFAULT, kb.BOAT, Wb.SPEED, kb.GLIDER, ab.DIAMOND, kb.BALLOON, Tb.BLACK, kb.SLEEPING, Ub.ROTATION_4, kb.RIDING_MOB, kb.CAR, Ib.MOONSTONE_MINING_DRILL, kb.HOVERCRAFT;
    let Hb = function(bb) {
      return bb[bb.NORMAL = 0] = "NORMAL", bb[bb.GLIDING = 1] = "GLIDING", bb[bb.FLOATING = 2] = "FLOATING", bb
    }({})
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);