export const id = 84;
export const ids = [84];
export const modules = {
  39660: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      startWasmPadGameplay: () => ub
    });
    Ub(39663);
    var Ab = Ub(39671),
      Mb = Ub(39689),
      Tb = Ub(1844),
      Eb = Ub(39701),
      Yb = Ub(4485),
      Bb = Ub(4469),
      eb = Ub(39705),
      vb = Ub(39714),
      Lb = Ub(4494),
      Pb = Ub(39780),
      Xb = Ub(2260),
      jb = Ub(8423),
      Rb = Ub(39679),
      kb = Ub(8394);
    const yb = bb => {
        const ab = Lb.c.indexOf(bb);
        if (ab < 0) throw new Error(`No core action "${bb}"`);
        return ab
      },
      Zb = yb("primary-fire"),
      Db = yb("alt-fire"),
      zb = yb("mid-fire"),
      xb = yb("jump"),
      ib = yb("ReloadGun"),
      fb = yb("SwapCameraZoom"),
      mb = yb("TouchAction1"),
      pb = {
        SpecialAction1: yb("SpecialAction1"),
        SpecialAction2: yb("SpecialAction2")
      },
      Nb = (bb, ab) => {
        (0, Xb.n)(Yb.J.PadAction, bb, 0, 0, (0, Xb.l)(ab, performance.now()))
      },
      Wb = bb => {
        Nb(bb, Eb.pd.Down)
      },
      Hb = bb => {
        Nb(bb, 0)
      },
      Ib = bb => {
        Wb(bb), Hb(bb)
      },
      db = () => {
        const bb = (0, vb.i)();
        return null !== bb && void 0 !== bb && bb.isCoreRunning ? bb : null
      },
      Fb = bb => Eb.t.playerFlags(bb.api.apiView, 0),
      hb = bb => null !== bb && Eb.t.targetBlockId(bb.api.apiView, 0) !== Eb.Wc,
      Gb = () => {
        const bb = (0, jb.b)(),
          ab = new Rb.c;
        let Ub = !1;
        const Ab = (bb, ab) => {
            (0, Xb.n)(Yb.J.PadLook, Eb.xd.Rate, bb, ab, 0)
          },
          Mb = () => {
            Ub = !1, ab.reset(), Ab(0, 0)
          };
        return {
          update: (Mb, Tb, Bb) => {
            Ub || (bb.discardPending(), Ub = !0);
            const eb = (0, Rb.s)(ab, Mb, Tb, Bb, performance.now());
            Ab(eb.yawRadPerSec, eb.pitchRadPerSec);
            const vb = bb.drainLookDelta();
            0 === vb.XN && 0 === vb.kN || (0, Xb.n)(Yb.J.PadLook, Eb.xd.Gyro, vb.XN, vb.kN, 0)
          },
          release: Mb,
          uninstall: Mb
        }
      },
      Qb = () => {
        const bb = db();
        return null !== bb && 0 !== (Fb(bb) & Eb.Ed.PadSneakToggled)
      },
      qb = () => {
        const bb = (bb => {
          const ab = bb => function() {
            return (0, Pb.b)(), bb(...arguments)
          };
          return {
            primaryFireDown: ab((() => (Wb(Zb), 0))),
            primaryFireUp: ab((() => {
              Hb(Zb)
            })),
            altFireDown: ab((() => (Wb(Db), 0))),
            altFireUp: ab((() => {
              Hb(Db)
            })),
            jumpDown: ab((() => {
              Ib(xb)
            })),
            specialActionDown: ab((bb => {
              Wb(pb[bb])
            })),
            specialActionUp: ab((bb => {
              Hb(pb[bb])
            })),
            reloadGun: ab((() => {
              Ib(ib)
            })),
            dropItem: ab((bb => {
              Nb(Eb.sd.Drop, Eb.pd.Down | (bb ? Eb.pd.Stack : 0))
            })),
            swapCameraZoom: ab((() => {
              Ib(fb)
            })),
            pickBlock: ab((() => (Ib(zb), hb(bb()))))
          }
        })(db);
        let ab = !1,
          Ub = null;
        const Ab = () => {
          var bb;
          null === (bb = Ub) || void 0 === bb || bb(), Ub = null
        };
        return {
          bodies: () => bb,
          look: Gb(),
          move: (bb, Ub) => {
            var Mb;
            Ab();
            const {
              bits: Tb,
              flips: Yb
            } = (bb => {
              if (null === bb) return {
                bits: Eb.wd.Peek,
                flips: 0
              };
              const ab = bb.sneakHeld ? Eb.wd.SneakHeld : 0;
              return "hold" === bb.mode ? {
                bits: ab | Eb.wd.SneakHoldMode,
                flips: bb.sneakTogglePressed ? 1 : 0
              } : {
                bits: ab,
                flips: bb.sneakPressed || bb.sneakTogglePressed ? 1 : 0
              }
            })(Ub);
            null !== (Mb = db()) && void 0 !== Mb && Mb.padMove(bb.x, bb.y, bb.magnitude, bb.headingOffset, (bb => Eb.wd.Active | (bb.jumpHeld ? Eb.wd.JumpHeld : 0) | (bb.jumpPressed ? Eb.wd.JumpPressed : 0) | (bb.running ? Eb.wd.Running : 0) | (bb.sprintHeld ? Eb.wd.SprintHeld : 0))(bb) | Tb, Yb) && (ab = !0), (0, kb.f)(Qb())
          },
          stopMoving: () => {
            var bb;
            ab && (ab = !(null !== (bb = db()) && void 0 !== bb && bb.padMove(0, 0, 0, 0, 0, 0)), Ab(), Ub = (0, Bb.x)((() => {
              Ab(), (0, kb.f)(Qb())
            })))
          },
          uninstall: Ab,
          deviceChanged: bb => {
            var Ub;
            "touch" === bb ? ((0, kb.f)(!1), null !== (Ub = db()) && void 0 !== Ub && Ub.padMove(0, 0, 0, 0, Eb.wd.EndToggle, 0) && (ab = !1)) : "gamepad" === bb && (0, kb.f)(Qb())
          },
          hasPlayer: () => null !== db(),
          isPlayerDead: () => {
            var bb;
            return !1 === (null === (bb = db()) || void 0 === bb ? void 0 : bb.localPlayerAlive())
          },
          isReplayMode: () => {
            const bb = db();
            return null !== bb && 0 !== (Fb(bb) & Eb.Ed.Replay)
          },
          isFreeCameraOn: () => {
            const bb = db();
            return null !== bb && 0 !== (Fb(bb) & Eb.Ed.FreeCam)
          },
          targetsBlock: () => hb(db()),
          selectedSlotEmpty: () => {
            var bb;
            return !(null !== (bb = db()) && void 0 !== bb && bb.items.PY())
          },
          pickBlockAllowed: () => !!Tb.e.get("creative") && !!Tb.e.get("canPickBlocks"),
          scrollHotbar: bb => {
            Nb(Eb.sd.Hotbar, Eb.pd.Down | (bb > 0 ? Eb.pd.Next : 0))
          },
          hasFullInventory: eb.m,
          hasLobbyLeaderboard: () => !!Tb.e.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var bb, ab, Ub, Ab;
            const Mb = db();
            return {
              holdingGun: !1 !== (null === Mb || void 0 === Mb ? void 0 : Mb.localPlayerAlive()) && "Gun" === (null === Mb || void 0 === Mb || null === (bb = Mb.items.PY()) || void 0 === bb || null === (ab = bb.typeObj) || void 0 === ab ? void 0 : ab.type),
              customButtons: null !== (Ub = Tb.e.get("customButtons")) && void 0 !== Ub ? Ub : null,
              touchscreenActionButton: null !== (Ab = Tb.e.get("touchscreenActionButton")) && void 0 !== Ab ? Ab : null
            }
          },
          pressTouchButton: bb => {
            bb ? Wb(mb) : Hb(mb)
          }
        }
      },
      ub = () => {
        const bb = (0, Mb.b)(qb()),
          ab = (0, Ab.b)(),
          Ub = null;
        return () => {
          bb(), ab(), null === Ub || void 0 === Ub || Ub()
        }
      }
  },
  4485: (bb, ab, Ub) => {
    Ub.d(ab, {
      $: () => mb,
      B: () => Yb,
      Cb: () => db,
      Db: () => rb,
      E: () => Ab,
      F: () => Tb,
      Fb: () => hb,
      Gb: () => Qb,
      J: () => jb,
      Jb: () => qb,
      L: () => gb,
      Lb: () => Db,
      M: () => eb,
      Mb: () => zb,
      N: () => Rb,
      O: () => Bb,
      P: () => Pb,
      Pb: () => ob,
      Rb: () => Mb,
      S: () => Lb,
      Tb: () => sb,
      V: () => fb,
      Z: () => pb,
      _: () => Nb,
      db: () => Wb,
      e: () => wb,
      gb: () => Kb,
      h: () => tb,
      jb: () => ub,
      l: () => vb,
      lb: () => Gb,
      m: () => Zb,
      nb: () => Hb,
      p: () => lb,
      qb: () => Fb,
      r: () => yb,
      tb: () => Ib,
      u: () => kb,
      ub: () => Xb,
      x: () => Eb,
      xb: () => ib,
      yb: () => xb
    });
    const Ab = 32,
      Mb = 33.333333333333336,
      Tb = {
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
      Eb = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Yb = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Bb = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      eb = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      vb = {
        Look: 0,
        Remesh: 1
      },
      Lb = 8,
      Pb = 1,
      Xb = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      jb = {
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
      Rb = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      kb = {
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
      yb = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Zb = 4,
      Db = 4,
      zb = 65535,
      xb = {
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
      ib = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      fb = 88,
      mb = 0,
      pb = 24,
      Nb = 48,
      Wb = 80,
      Hb = {
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
      Ib = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      db = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Fb = {
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
      hb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Gb = 65535,
      Qb = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      qb = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      ub = 2,
      rb = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Kb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      ob = {
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
      lb = {
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
      tb = {
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
      sb = {
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
      gb = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4469: (bb, ab, Ub) => {
    Ub.d(ab, {
      B: () => Wb,
      E: () => Hb,
      H: () => Zb,
      J: () => Eb,
      K: () => Yb,
      O: () => pb,
      e: () => mb,
      f: () => zb,
      h: () => db,
      k: () => Ib,
      n: () => yb,
      o: () => ib,
      r: () => Db,
      v: () => xb,
      x: () => Nb
    });
    var Ab = Ub(4477);
    const Mb = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Tb = Mb;

    function Eb(bb) {
      Tb = null !== bb && void 0 !== bb ? bb : Mb
    }

    function Yb() {
      return Tb
    }
    const Bb = new Set,
      eb = new Set;
    let vb = -1;
    const Lb = new Set,
      Pb = new Set;
    let Xb = 0,
      jb = 0;
    const Rb = new Set,
      kb = new Set;

    function yb(bb) {
      return Bb.add(bb), () => {
        Bb.delete(bb)
      }
    }

    function Zb(bb, ab) {
      for (const Ab of Bb) try {
        Ab(bb)
      } catch (Ub) {
        ab(Ub)
      }
    }

    function Db(bb) {
      return eb.add(bb), () => {
        eb.delete(bb)
      }
    }

    function zb(bb, ab) {
      const Ub = vb < 0 ? 0 : bb - vb;
      vb = bb;
      for (const Mb of eb) try {
        Mb(Ub)
      } catch (Ab) {
        ab(Ab)
      }
    }

    function xb(bb) {
      return Lb.add(bb), () => {
        Lb.delete(bb)
      }
    }

    function ib(bb) {
      return Pb.add(bb), () => {
        Pb.delete(bb)
      }
    }
    let fb = 0;

    function mb(bb) {
      fb += bb
    }

    function pb() {
      const bb = fb;
      return fb = 0, bb
    }

    function Nb(bb) {
      return Rb.add(bb), () => {
        Rb.delete(bb)
      }
    }

    function Wb(bb) {
      return kb.add(bb), () => {
        kb.delete(bb)
      }
    }

    function Hb() {
      Xb = 0, jb = 0, vb = -1
    }

    function Ib(bb, ab) {
      if ("paced" === bb) return jb += ab, null;
      if ("drawn" !== bb && "skipped" !== bb) return null;
      const Ub = ab + jb;
      return jb = 0, Ub
    }

    function db(bb, ab, Ub, Mb) {
      const Tb = (0, Ab.g)(ab),
        Eb = bb > 0 ? performance.now() : 0;
      for (let Ab = 0; Ab < bb; Ab++)
        for (const bb of Rb) try {
          bb()
        } catch (Yb) {
          Mb(Yb)
        }
      if (bb > 0 && mb(performance.now() - Eb), null !== Ub) {
        for (const bb of Lb) try {
          bb(Ub)
        } catch (Yb) {
          Mb(Yb)
        }
        Xb += Ub
      }
      if ("drawn" === ab) {
        const bb = Xb;
        Xb = 0;
        for (const ab of Pb) try {
          ab(bb)
        } catch (Yb) {
          Mb(Yb)
        }
      }
      for (const Ab of kb) try {
        Ab(bb, Tb)
      } catch (Yb) {
        Mb(Yb)
      }
    }
  },
  4479: (bb, ab, Ub) => {
    Ub.d(ab, {
      $c: () => Ab.Jb,
      Ab: () => Mb.c,
      B: () => Fb,
      C: () => Pa,
      Cd: () => tb,
      Dc: () => Aa,
      Dd: () => Cb,
      Eb: () => mb,
      Ed: () => gb,
      Fc: () => Ab.nb,
      G: () => Jb,
      Gd: () => Ea,
      H: () => Ab.h,
      Hb: () => ub,
      I: () => eb,
      Ic: () => Ab.qb,
      Jd: () => ja,
      Kb: () => Ib,
      Lb: () => Wb,
      M: () => Ab.l,
      Mb: () => Ab.N,
      Mc: () => Ab.tb,
      Md: () => zb,
      Ob: () => db,
      P: () => Ab.m,
      Pc: () => nb,
      Qb: () => xb,
      Qd: () => Vb,
      R: () => Ob,
      Rc: () => Ab.xb,
      Rd: () => Qb,
      Sc: () => Ab.yb,
      Tb: () => Ta,
      Td: () => Gb,
      V: () => Ab.u,
      Vc: () => Ab.Cb,
      Vd: () => hb,
      W: () => Ab.x,
      Wb: () => Db,
      Wc: () => Ab.Fb,
      X: () => Ab.B,
      Yd: () => Bb,
      _: () => Lb,
      _b: () => va,
      _c: () => Ab.Gb,
      ab: () => Zb,
      ac: () => Mb.h,
      ae: () => qb,
      bd: () => Nb,
      be: () => Ra,
      c: () => ba,
      cb: () => Ab.E,
      cd: () => Ab.Lb,
      ce: () => Xb,
      dc: () => yb,
      e: () => Rb,
      ed: () => Ab.Mb,
      fc: () => Ua,
      gb: () => Ab.F,
      gd: () => Ab.Rb,
      h: () => jb,
      ib: () => ob,
      ic: () => Ab.V,
      id: () => Tb,
      j: () => Ba,
      kc: () => Ab.Z,
      kd: () => kb,
      lb: () => Ma,
      m: () => pb,
      nd: () => Ya,
      o: () => fb,
      ob: () => vb,
      oc: () => Ab._,
      od: () => Kb,
      p: () => Ab.e,
      qc: () => Ab.$,
      rb: () => Ab.J,
      sb: () => wb,
      sc: () => Ab.db,
      sd: () => lb,
      t: () => La,
      td: () => rb,
      vb: () => cb,
      vc: () => Ab.lb,
      wb: () => Sb,
      x: () => Hb,
      xb: () => aa,
      xc: () => Xa,
      xd: () => sb,
      z: () => Eb,
      zc: () => ea
    });
    var Ab = Ub(4485),
      Mb = Ub(2254);
    const Tb = Math.round(1e3 / Ab.Rb),
      Eb = 4,
      Yb = 2;

    function Bb() {
      return crypto.getRandomValues(new Uint32Array(Yb))
    }
    const eb = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      vb = 16,
      Lb = {
        Draws: 1,
        NetAll: 2
      },
      Pb = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Xb(bb) {
      return (bb.nametagsHidden ? ib.NametagsHidden : 0) | (bb.crouchToggle ? ib.CrouchToggle : 0) | (bb.bhopDisabled ? ib.BhopDisabled : 0) | (bb.disableBobbing ? ib.DisableBobbing : 0) | (bb.ezTowering ? ib.EzTowering : 0) | (bb.ezBridging ? ib.EzBridging : 0) | (bb.showChunkBorders ? ib.ShowChunkBorders : 0)
    }
    const jb = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Rb = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      kb = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      yb = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Zb = 5,
      Db = 4294967295;

    function zb(bb) {
      return (bb.showFog ? Pb.ShowFog : 0) | (bb.lighting ? Pb.Lighting : 0) | (bb.chunkFade ? Pb.ChunkFade : 0)
    }
    const xb = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      ib = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      fb = {
        Release: 1,
        KeepTouches: 2
      },
      mb = {
        Point: 1,
        Stamped: 2
      },
      pb = {
        Add: 1,
        Clear: 2
      },
      Nb = 1,
      Wb = 8,
      Hb = 16777215,
      Ib = 4,
      db = {
        Resume: 1
      },
      Fb = {
        Held: 1
      };

    function hb(bb, ab) {
      return (bb | ab << 8) >>> 0
    }

    function Gb(bb) {
      return 255 & bb
    }

    function Qb(bb) {
      return bb >>> 8
    }

    function qb(bb) {
      return bb + 3 & -4
    }
    const ub = 16777216,
      rb = 20;
    const Kb = 8,
      ob = 8,
      lb = 16777216,
      tb = {
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
      sb = 16,
      gb = {
        Lost: 0,
        Gone: 1
      },
      Cb = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Vb(bb) {
      return bb === Cb.WorldgenSeed || bb === Cb.Generate
    }
    const Ob = 4,
      cb = 99,
      Jb = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      nb = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Sb = 12,
      ba = 16,
      aa = 4,
      Ua = 12,
      Aa = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Ma = 4,
      Ta = 8,
      Ea = 8,
      Ya = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Ba = {
        Crit: 1,
        HitSelf: 2
      },
      ea = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      va = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      La = 12,
      Pa = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Xa = 67108864;

    function ja(bb) {
      for (const [ab, Ub] of Object.entries(Ab.h))
        if (Ub === bb) return ab;
      return `Unknown${bb}`
    }

    function Ra(bb) {
      return {
        status: bb[Ab.F.Status],
        lastError: bb[Ab.F.LastError],
        lastErrorDetail: bb[Ab.F.LastErrorDetail],
        errorCount: bb[Ab.F.ErrorCount],
        frameIndex: bb[Ab.F.FrameIndex],
        tickIndex: bb[Ab.F.TickIndex],
        renderPending: bb[Ab.F.RenderPending],
        firstView: bb[Ab.F.FirstView],
        chunksCancelled: bb[Ab.F.ChunksCancelled]
      }
    }
  },
  4477: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      f: () => Tb,
      g: () => Mb
    });
    var Ab = Ub(4479);

    function Mb(bb) {
      return "none" !== bb
    }

    function Tb(bb, ab) {
      if (!bb) return "none";
      switch (ab) {
        case Ab.X.Drawn:
          return "drawn";
        case Ab.X.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Eb(bb) {
      return "drawn" === bb
    }
  },
  4494: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      d: () => Tb,
      f: () => Eb,
      h: () => Ab,
      l: () => Yb
    });
    const Ab = {
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
      Mb = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Tb = {
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
      Eb = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Yb = [16]
  },
  39780: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb,
      c: () => Tb,
      f: () => Mb
    });
    let Ab = null;

    function Mb(bb) {
      Ab = bb
    }

    function Tb(bb) {
      Ab === bb && (Ab = null)
    }

    function Eb() {
      var bb;
      null === (bb = Ab) || void 0 === bb || bb()
    }
  },
  4501: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb,
      h: () => Eb,
      l: () => eb
    });
    var Ab = Ub(2254),
      Mb = Ub(2260);
    const Tb = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Eb(bb) {
      return bb instanceof HTMLElement && (!!(bb.isContentEditable || bb instanceof HTMLTextAreaElement || bb instanceof HTMLSelectElement) || bb instanceof HTMLInputElement && !Tb.has(bb.type))
    }

    function Yb(bb) {
      let ab = null;
      const Ub = Ub => {
          const Mb = Eb(Ub);
          Mb !== ab && (ab = Mb, bb(Ab.g.UiCapture, Ab.v.Keyboard, 0, 0, Mb ? Ab.v.Keyboard : 0))
        },
        Mb = bb => {
          Ub(bb.target)
        },
        Tb = bb => {
          Ub(bb.relatedTarget)
        },
        Yb = () => {
          Ub(document.activeElement)
        },
        Bb = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Mb, Bb), document.addEventListener("focusout", Tb, Bb), document.addEventListener("keydown", Yb, Bb), Ub(document.activeElement), () => {
        document.removeEventListener("focusin", Mb, Bb), document.removeEventListener("focusout", Tb, Bb), document.removeEventListener("keydown", Yb, Bb)
      }
    }
    const Bb = new Map;

    function eb(bb, ab) {
      var Ub;
      let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Bb.set(Ab, (null !== (Ub = Bb.get(Ab)) && void 0 !== Ub ? Ub : 0) & ~bb | ab & bb);
      let Tb = 0;
      for (const Mb of Bb.values()) Tb |= Mb;
      return (0, Mb.u)(bb, Tb & bb)
    }
  },
  36263: (bb, ab, Ub) => {
    function Ab(bb) {
      return bb.includes("Leaf Bed")
    }

    function Mb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !Ab(bb)
    }

    function Tb(bb) {
      return bb.includes(" Strongbed")
    }

    function Eb(bb) {
      return Ab(bb) || Mb(bb) || Tb(bb)
    }
    Ub.d(ab, {
      d: () => Eb,
      g: () => Ab,
      h: () => Tb,
      i: () => Mb
    })
  },
  36260: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb
    });
    var Ab = Ub(36263),
      Mb = Ub(9007);
    const Tb = [],
      Eb = [],
      Yb = [],
      Bb = [];
    for (const vb of Object.keys(Mb.p))(0, Ab.g)(vb) ? Tb.push(vb) : (0, Ab.i)(vb) && Eb.push(vb), (0, Ab.h)(vb) && Yb.push(vb), (vb.includes(" Bed Head") || vb.includes(" Strongbed Head")) && Bb.push(vb);
    const eb = {
      leafBeds: Tb,
      woolBeds: Eb,
      strongBeds: Yb,
      beds: [...Tb, ...Eb, ...Yb],
      bedHeads: Bb,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6091: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb,
      e: () => Mb,
      i: () => Bb,
      l: () => Tb,
      o: () => eb,
      p: () => Ab,
      r: () => Yb
    });
    let Ab = function(bb) {
        return bb[bb.DEFAULT = 0] = "DEFAULT", bb[bb.BOAT = 1] = "BOAT", bb[bb.GLIDER = 2] = "GLIDER", bb[bb.BALLOON = 3] = "BALLOON", bb[bb.SLEEPING = 4] = "SLEEPING", bb[bb.RIDING_MOB = 5] = "RIDING_MOB", bb[bb.CAR = 6] = "CAR", bb[bb.HOVERCRAFT = 7] = "HOVERCRAFT", bb
      }({}),
      Mb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.OBSIDIAN = 1] = "OBSIDIAN", bb[bb.SPEED = 2] = "SPEED", bb
      }({}),
      Tb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.IRON = 1] = "IRON", bb[bb.GOLD = 2] = "GOLD", bb[bb.DIAMOND = 3] = "DIAMOND", bb
      }({}),
      Eb = function(bb) {
        return bb[bb.YELLOW = 0] = "YELLOW", bb[bb.WHITE = 1] = "WHITE", bb[bb.RED = 2] = "RED", bb[bb.PURPLE = 3] = "PURPLE", bb[bb.PINK = 4] = "PINK", bb[bb.ORANGE = 5] = "ORANGE", bb[bb.MAGENTA = 6] = "MAGENTA", bb[bb.LIME = 7] = "LIME", bb[bb.LIGHT_GRAY = 8] = "LIGHT_GRAY", bb[bb.LIGHT_BLUE = 9] = "LIGHT_BLUE", bb[bb.GREEN = 10] = "GREEN", bb[bb.GRAY = 11] = "GRAY", bb[bb.CYAN = 12] = "CYAN", bb[bb.BROWN = 13] = "BROWN", bb[bb.BLUE = 14] = "BLUE", bb[bb.BLACK = 15] = "BLACK", bb
      }({}),
      Yb = function(bb) {
        return bb[bb.ROTATION_1 = 0] = "ROTATION_1", bb[bb.ROTATION_2 = 1] = "ROTATION_2", bb[bb.ROTATION_3 = 2] = "ROTATION_3", bb[bb.ROTATION_4 = 3] = "ROTATION_4", bb
      }({}),
      Bb = function(bb) {
        return bb[bb.KART = 0] = "KART", bb[bb.OFF_ROADER = 1] = "OFF_ROADER", bb[bb.CAR = 2] = "CAR", bb[bb.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", bb[bb.ARMORED_CAR = 4] = "ARMORED_CAR", bb[bb.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", bb[bb.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", bb[bb.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", bb
      }({});
    Ab.DEFAULT, Ab.BOAT, Mb.SPEED, Ab.GLIDER, Tb.DIAMOND, Ab.BALLOON, Eb.BLACK, Ab.SLEEPING, Yb.ROTATION_4, Ab.RIDING_MOB, Ab.CAR, Bb.MOONSTONE_MINING_DRILL, Ab.HOVERCRAFT;
    let eb = function(bb) {
      return bb[bb.NORMAL = 0] = "NORMAL", bb[bb.GLIDING = 1] = "GLIDING", bb[bb.FLOATING = 2] = "FLOATING", bb
    }({})
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);