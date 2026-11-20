export const id = 85;
export const ids = [85];
export const modules = {
  40287: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      startWasmPadGameplay: () => Gq
    });
    gq(40293);
    var Yq = gq(40295),
      lq = gq(40309),
      Oq = gq(1926),
      mq = gq(40318),
      xq = gq(4625),
      Aq = gq(4608),
      cq = gq(40320),
      uq = gq(40325),
      Bq = gq(4629),
      Wq = gq(40394),
      Nq = gq(2364),
      aq = gq(8826),
      Vq = gq(40301),
      dq = gq(8803),
      jq = gq(39056);
    const Hq = qq => {
        const Eq = Bq.b.indexOf(qq);
        if (Eq < 0) throw new Error(`No core action "${qq}"`);
        return Eq
      },
      oq = Hq("primary-fire"),
      Pq = Hq("alt-fire"),
      Qq = Hq("mid-fire"),
      yq = Hq("jump"),
      tq = Hq("ReloadGun"),
      rq = Hq("SwapCameraZoom"),
      vq = Hq("TouchAction1"),
      hq = {
        SpecialAction1: Hq("SpecialAction1"),
        SpecialAction2: Hq("SpecialAction2")
      },
      nq = (qq, Eq) => {
        (0, Nq.r)(xq.E.PadAction, qq, 0, 0, (0, Nq.q)(Eq, performance.now()))
      },
      bq = qq => {
        nq(qq, mq.Ed.Down)
      },
      iq = qq => {
        nq(qq, 0)
      },
      Zq = qq => {
        bq(qq), iq(qq)
      },
      fq = () => {
        const qq = (0, uq.e)();
        return null !== qq && void 0 !== qq && qq.isCoreRunning ? qq : null
      },
      Mq = qq => mq.t.playerFlags(qq.api.apiView, 0),
      Tq = qq => null !== qq && mq.t.targetBlockId(qq.api.apiView, 0) !== mq.id,
      zq = () => {
        const qq = (0, aq.b)(),
          Eq = new Vq.d;
        let gq = !1;
        const Yq = (qq, Eq) => {
            (0, Nq.r)(xq.E.PadLook, mq.Ld.Rate, qq, Eq, 0)
          },
          lq = () => {
            gq = !1, Eq.reset(), Yq(0, 0)
          };
        return {
          update: (lq, Oq, Aq) => {
            gq || (qq.discardPending(), gq = !0);
            const cq = (0, Vq.o)(Eq, lq, Oq, Aq, performance.now());
            Yq(cq.yawRadPerSec, cq.pitchRadPerSec);
            const uq = qq.drainLookDelta();
            0 === uq.VJ && 0 === uq.dJ || (0, Nq.r)(xq.E.PadLook, mq.Ld.Gyro, uq.VJ, uq.dJ, 0)
          },
          release: lq,
          uninstall: lq
        }
      },
      Sq = () => {
        const qq = fq();
        return null !== qq && 0 !== (Mq(qq) & mq.Pd.PadSneakToggled)
      },
      pq = () => {
        const qq = (qq => {
          const Eq = qq => function() {
            return (0, Wq.e)(), qq(...arguments)
          };
          return {
            primaryFireDown: Eq((() => (bq(oq), 0))),
            primaryFireUp: Eq((() => {
              iq(oq)
            })),
            altFireDown: Eq((() => (bq(Pq), 0))),
            altFireUp: Eq((() => {
              iq(Pq)
            })),
            jumpDown: Eq((() => {
              Zq(yq)
            })),
            specialActionDown: Eq((qq => {
              bq(hq[qq])
            })),
            specialActionUp: Eq((qq => {
              iq(hq[qq])
            })),
            reloadGun: Eq((() => {
              Zq(tq)
            })),
            dropItem: Eq((qq => {
              nq(mq.Fd.Drop, mq.Ed.Down | (qq ? mq.Ed.Stack : 0))
            })),
            swapCameraZoom: Eq((() => {
              Zq(rq)
            })),
            pickBlock: Eq((() => (Zq(Qq), Tq(qq()))))
          }
        })(fq);
        let Eq = !1,
          gq = null;
        const Yq = () => {
          var qq;
          null === (qq = gq) || void 0 === qq || qq(), gq = null
        };
        return {
          bodies: () => qq,
          look: zq(),
          move: (qq, gq) => {
            var lq;
            Yq();
            const {
              bits: Oq,
              flips: xq
            } = (qq => {
              if (null === qq) return {
                bits: mq.Id.Peek,
                flips: 0
              };
              const Eq = qq.sneakHeld ? mq.Id.SneakHeld : 0;
              return "hold" === qq.mode ? {
                bits: Eq | mq.Id.SneakHoldMode,
                flips: qq.sneakTogglePressed ? 1 : 0
              } : {
                bits: Eq,
                flips: qq.sneakPressed || qq.sneakTogglePressed ? 1 : 0
              }
            })(gq);
            null !== (lq = fq()) && void 0 !== lq && lq.padMove(qq.x, qq.y, qq.magnitude, qq.headingOffset, (qq => mq.Id.Active | (qq.jumpHeld ? mq.Id.JumpHeld : 0) | (qq.jumpPressed ? mq.Id.JumpPressed : 0) | (qq.running ? mq.Id.Running : 0) | (qq.sprintHeld ? mq.Id.SprintHeld : 0))(qq) | Oq, xq) && (Eq = !0), (0, dq.f)(Sq())
          },
          stopMoving: () => {
            var qq;
            Eq && (Eq = !(null !== (qq = fq()) && void 0 !== qq && qq.padMove(0, 0, 0, 0, 0, 0)), Yq(), gq = (0, Aq.x)((() => {
              Yq(), (0, dq.f)(Sq())
            })))
          },
          uninstall: Yq,
          deviceChanged: qq => {
            var gq;
            "touch" === qq ? ((0, dq.f)(!1), null !== (gq = fq()) && void 0 !== gq && gq.padMove(0, 0, 0, 0, mq.Id.EndToggle, 0) && (Eq = !1)) : "gamepad" === qq && (0, dq.f)(Sq())
          },
          hasPlayer: () => null !== fq(),
          isPlayerDead: () => {
            var qq;
            return !1 === (null === (qq = fq()) || void 0 === qq ? void 0 : qq.localPlayerAlive())
          },
          isReplayMode: () => {
            const qq = fq();
            return null !== qq && 0 !== (Mq(qq) & mq.Pd.Replay)
          },
          isFreeCameraOn: () => {
            const qq = fq();
            return null !== qq && 0 !== (Mq(qq) & mq.Pd.FreeCam)
          },
          targetsBlock: () => Tq(fq()),
          selectedSlotEmpty: () => {
            var qq;
            return !(null !== (qq = fq()) && void 0 !== qq && qq.items.Fc())
          },
          pickBlockAllowed: () => !!Oq.c.get("creative") && !!Oq.c.get("canPickBlocks"),
          scrollHotbar: qq => {
            nq(mq.Fd.Hotbar, mq.Ed.Down | (qq > 0 ? mq.Ed.Next : 0))
          },
          hasFullInventory: cq.j,
          hasLobbyTab: () => (0, jq.d)({
            lobbyLeaderboardInfo: Oq.c.get("lobbyLeaderboardInfo"),
            lobbyManage: Oq.c.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var qq, Eq, gq, Yq;
            const lq = fq();
            return {
              holdingGun: !1 !== (null === lq || void 0 === lq ? void 0 : lq.localPlayerAlive()) && "Gun" === (null === lq || void 0 === lq || null === (qq = lq.items.Fc()) || void 0 === qq || null === (Eq = qq.typeObj) || void 0 === Eq ? void 0 : Eq.type),
              customButtons: null !== (gq = Oq.c.get("customButtons")) && void 0 !== gq ? gq : null,
              touchscreenActionButton: null !== (Yq = Oq.c.get("touchscreenActionButton")) && void 0 !== Yq ? Yq : null
            }
          },
          pressTouchButton: qq => {
            qq ? bq(vq) : iq(vq)
          }
        }
      },
      Gq = () => {
        const qq = (0, lq.d)(pq()),
          Eq = (0, Yq.e)(),
          gq = null;
        return () => {
          qq(), Eq(), null === gq || void 0 === gq || gq()
        }
      }
  },
  4625: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => xq,
      Ab: () => rq,
      B: () => Yq,
      C: () => Oq,
      E: () => dq,
      Eb: () => tq,
      G: () => wq,
      H: () => uq,
      Hb: () => Mq,
      L: () => Bq,
      Lb: () => Jq,
      Nb: () => zq,
      O: () => cq,
      Q: () => jq,
      Qb: () => pq,
      T: () => Aq,
      Tb: () => Gq,
      V: () => aq,
      Vb: () => Qq,
      Wb: () => yq,
      X: () => Nq,
      Z: () => vq,
      _: () => nq,
      _b: () => Rq,
      bb: () => bq,
      bc: () => lq,
      e: () => sq,
      ec: () => Xq,
      f: () => Fq,
      fb: () => hq,
      i: () => Wq,
      ib: () => iq,
      kb: () => kq,
      m: () => Pq,
      mb: () => Lq,
      pb: () => Sq,
      q: () => Uq,
      sb: () => Zq,
      t: () => oq,
      u: () => Hq,
      ub: () => Tq,
      wb: () => fq,
      y: () => mq,
      zb: () => Vq
    });
    const Yq = 32,
      lq = 33.333333333333336,
      Oq = {
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
      mq = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      xq = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Aq = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      cq = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      uq = 7,
      Bq = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      Wq = {
        Look: 0,
        Remesh: 1
      },
      Nq = 8,
      aq = 1,
      Vq = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      dq = {
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
      jq = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Hq = {
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
      oq = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Pq = 4,
      Qq = 4,
      yq = 65535,
      tq = {
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
      rq = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      vq = 88,
      hq = 0,
      nq = 24,
      bq = 48,
      iq = 80,
      Zq = {
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
      fq = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Mq = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Tq = {
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
      zq = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Sq = 65535,
      pq = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Gq = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Lq = 2,
      Jq = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      kq = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Rq = {
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
      Uq = {
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
      Fq = {
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
      sq = 8,
      Xq = {
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
      wq = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4608: (qq, Eq, gq) => {
    gq.d(Eq, {
      B: () => bq,
      F: () => Hq,
      J: () => mq,
      M: () => xq,
      N: () => vq,
      e: () => rq,
      f: () => Pq,
      h: () => Zq,
      l: () => iq,
      m: () => jq,
      p: () => yq,
      s: () => oq,
      w: () => Qq,
      x: () => hq,
      y: () => nq
    });
    var Yq = gq(4616);
    const lq = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Oq = lq;

    function mq(qq) {
      Oq = null !== qq && void 0 !== qq ? qq : lq
    }

    function xq() {
      return Oq
    }
    const Aq = new Set,
      cq = new Set;
    let uq = -1;
    const Bq = new Set,
      Wq = new Set;
    let Nq = 0,
      aq = 0;
    const Vq = new Set,
      dq = new Set;

    function jq(qq) {
      return Aq.add(qq), () => {
        Aq.delete(qq)
      }
    }

    function Hq(qq, Eq) {
      for (const Yq of Aq) try {
        Yq(qq)
      } catch (gq) {
        Eq(gq)
      }
    }

    function oq(qq) {
      return cq.add(qq), () => {
        cq.delete(qq)
      }
    }

    function Pq(qq, Eq) {
      const gq = uq < 0 ? 0 : qq - uq;
      uq = qq;
      for (const lq of cq) try {
        lq(gq)
      } catch (Yq) {
        Eq(Yq)
      }
    }

    function Qq(qq) {
      return Bq.add(qq), () => {
        Bq.delete(qq)
      }
    }

    function yq(qq) {
      return Wq.add(qq), () => {
        Wq.delete(qq)
      }
    }
    let tq = 0;

    function rq(qq) {
      tq += qq
    }

    function vq() {
      const qq = tq;
      return tq = 0, qq
    }

    function hq(qq) {
      return Vq.add(qq), () => {
        Vq.delete(qq)
      }
    }

    function nq(qq) {
      return dq.add(qq), () => {
        dq.delete(qq)
      }
    }

    function bq() {
      Nq = 0, aq = 0, uq = -1
    }

    function iq(qq, Eq) {
      if ("paced" === qq) return aq += Eq, null;
      if ("drawn" !== qq && "skipped" !== qq) return null;
      const gq = Eq + aq;
      return aq = 0, gq
    }

    function Zq(qq, Eq, gq, lq) {
      const Oq = (0, Yq.g)(Eq),
        mq = qq > 0 ? performance.now() : 0;
      for (let Yq = 0; Yq < qq; Yq++)
        for (const qq of Vq) try {
          qq()
        } catch (xq) {
          lq(xq)
        }
      if (qq > 0 && rq(performance.now() - mq), null !== gq) {
        for (const qq of Bq) try {
          qq(gq)
        } catch (xq) {
          lq(xq)
        }
        Nq += gq
      }
      if ("drawn" === Eq) {
        const qq = Nq;
        Nq = 0;
        for (const Eq of Wq) try {
          Eq(qq)
        } catch (xq) {
          lq(xq)
        }
      }
      for (const Yq of dq) try {
        Yq(qq, Oq)
      } catch (xq) {
        lq(xq)
      }
    }
  },
  4622: (qq, Eq, gq) => {
    gq.d(Eq, {
      $c: () => eq,
      Ab: () => qE,
      Ac: () => Yq.bb,
      Bd: () => Yq.bc,
      Be: () => Aq,
      Ce: () => Sq,
      D: () => cq,
      Eb: () => gE,
      Ec: () => Yq.fb,
      Fd: () => Oq,
      Fe: () => dE,
      Gb: () => Yq.L,
      H: () => Yq.i,
      Hb: () => lq.h,
      Hd: () => dq,
      He: () => Nq,
      I: () => Dq,
      Ic: () => Yq.ib,
      Kc: () => Yq.pb,
      Kd: () => AE,
      Lb: () => rq,
      Lc: () => aE,
      M: () => Yq.m,
      Md: () => Lq,
      Nd: () => kq,
      P: () => Kq,
      Pb: () => pq,
      Pc: () => uE,
      Rc: () => lE,
      Rd: () => Gq,
      S: () => Yq.u,
      Sb: () => iq,
      Tb: () => nq,
      Ub: () => Yq.Q,
      Uc: () => Yq.sb,
      Vd: () => Fq,
      W: () => Yq.y,
      Wb: () => Zq,
      Xc: () => Yq.ub,
      Y: () => Yq.A,
      _: () => Bq,
      _b: () => Qq,
      _c: () => Yq.wb,
      ae: () => Rq,
      bb: () => Hq,
      bc: () => mE,
      c: () => EE,
      ce: () => Xq,
      d: () => Vq,
      db: () => Yq.B,
      dd: () => Yq.Ab,
      f: () => aq,
      fc: () => oq,
      g: () => cE,
      gd: () => Yq.Eb,
      ge: () => sq,
      hb: () => Yq.C,
      hc: () => BE,
      i: () => vq,
      ic: () => lq.l,
      id: () => Yq.Hb,
      je: () => xE,
      kb: () => Jq,
      l: () => tq,
      ld: () => Yq.Nb,
      m: () => Yq.e,
      mc: () => jq,
      ne: () => VE,
      o: () => WE,
      ob: () => OE,
      p: () => bq,
      pd: () => Yq.Qb,
      q: () => mq,
      qc: () => YE,
      r: () => fq,
      rb: () => uq,
      rd: () => Yq.Tb,
      re: () => Pq,
      sb: () => Yq.E,
      se: () => wq,
      u: () => NE,
      uc: () => Yq.Z,
      ue: () => zq,
      vd: () => hq,
      ve: () => Tq,
      w: () => Iq,
      wb: () => Uq,
      xb: () => Cq,
      xc: () => Yq._,
      yd: () => Yq.Vb,
      z: () => Yq.f,
      zb: () => Yq.H,
      zd: () => Yq.Wb,
      ze: () => Mq
    });
    var Yq = gq(4625),
      lq = gq(2357);
    const Oq = Math.round(1e3 / Yq.bc),
      mq = 4,
      xq = 2;

    function Aq() {
      return crypto.getRandomValues(new Uint32Array(xq))
    }
    const cq = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      uq = 16,
      Bq = {
        Draws: 1,
        NetAll: 2
      },
      Wq = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Nq(qq) {
      return (qq.nametagsHidden ? yq.NametagsHidden : 0) | (qq.crouchToggle ? yq.CrouchToggle : 0) | (qq.bhopDisabled ? yq.BhopDisabled : 0) | (qq.disableBobbing ? yq.DisableBobbing : 0) | (qq.ezTowering ? yq.EzTowering : 0) | (qq.ezBridging ? yq.EzBridging : 0) | (qq.showChunkBorders ? yq.ShowChunkBorders : 0)
    }
    const aq = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Vq = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      dq = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      jq = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Hq = 5,
      oq = 4294967295;

    function Pq(qq) {
      return (qq.showFog ? Wq.ShowFog : 0) | (qq.lighting ? Wq.Lighting : 0) | (qq.chunkFade ? Wq.ChunkFade : 0)
    }
    const Qq = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      yq = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      tq = {
        Release: 1,
        KeepTouches: 2
      },
      rq = {
        Point: 1,
        Stamped: 2
      },
      vq = {
        Add: 1,
        Clear: 2
      },
      hq = 1,
      nq = 8,
      bq = 16777215,
      iq = 4,
      Zq = {
        Resume: 1
      },
      fq = {
        Held: 1
      };

    function Mq(qq, Eq) {
      return (qq | Eq << 8) >>> 0
    }

    function Tq(qq) {
      return 255 & qq
    }

    function zq(qq) {
      return qq >>> 8
    }

    function Sq(qq) {
      return qq + 3 & -4
    }
    const pq = 16777216,
      Gq = 20;
    const Lq = 8,
      Jq = 8,
      kq = 16777216,
      Rq = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Uq = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Fq = 16,
      sq = {
        Lost: 0,
        Gone: 1
      },
      Xq = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function wq(qq) {
      return qq === Xq.WorldgenSeed || qq === Xq.Generate
    }
    const Kq = 4,
      Cq = 99,
      Iq = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      eq = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Dq = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      qE = 12,
      EE = 16,
      gE = 4,
      YE = 12,
      lE = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      OE = 4,
      mE = 8,
      xE = 8,
      AE = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      cE = {
        Crit: 1,
        HitSelf: 2
      },
      uE = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      BE = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      WE = 12,
      NE = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      aE = 67108864;

    function VE(qq) {
      for (const [Eq, gq] of Object.entries(Yq.f))
        if (gq === qq) return Eq;
      return `Unknown${qq}`
    }

    function dE(qq) {
      return {
        status: qq[Yq.C.Status],
        lastError: qq[Yq.C.LastError],
        lastErrorDetail: qq[Yq.C.LastErrorDetail],
        errorCount: qq[Yq.C.ErrorCount],
        frameIndex: qq[Yq.C.FrameIndex],
        tickIndex: qq[Yq.C.TickIndex],
        renderPending: qq[Yq.C.RenderPending],
        firstView: qq[Yq.C.FirstView],
        chunksCancelled: qq[Yq.C.ChunksCancelled]
      }
    }
  },
  4616: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      e: () => Oq,
      g: () => lq
    });
    var Yq = gq(4622);

    function lq(qq) {
      return "none" !== qq
    }

    function Oq(qq, Eq) {
      if (!qq) return "none";
      switch (Eq) {
        case Yq.Y.Drawn:
          return "drawn";
        case Yq.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function mq(qq) {
      return "drawn" === qq
    }
  },
  4629: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      f: () => Oq,
      i: () => mq,
      l: () => Yq,
      m: () => xq
    });
    const Yq = {
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
      lq = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Oq = {
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
      mq = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      xq = [16]
  },
  40394: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq,
      f: () => Oq,
      i: () => lq
    });
    let Yq = null;

    function lq(qq) {
      Yq = qq
    }

    function Oq(qq) {
      Yq === qq && (Yq = null)
    }

    function mq() {
      var qq;
      null === (qq = Yq) || void 0 === qq || qq()
    }
  },
  4637: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq,
      h: () => mq,
      k: () => cq
    });
    var Yq = gq(2357),
      lq = gq(2364);
    const Oq = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function mq(qq) {
      return qq instanceof HTMLElement && (!!(qq.isContentEditable || qq instanceof HTMLTextAreaElement || qq instanceof HTMLSelectElement) || qq instanceof HTMLInputElement && !Oq.has(qq.type))
    }

    function xq(qq) {
      let Eq = null;
      const gq = gq => {
          const lq = mq(gq);
          lq !== Eq && (Eq = lq, qq(Yq.i.UiCapture, Yq.C.Keyboard, 0, 0, lq ? Yq.C.Keyboard : 0))
        },
        lq = qq => {
          gq(qq.target)
        },
        Oq = qq => {
          gq(qq.relatedTarget)
        },
        xq = () => {
          gq(document.activeElement)
        },
        Aq = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", lq, Aq), document.addEventListener("focusout", Oq, Aq), document.addEventListener("keydown", xq, Aq), gq(document.activeElement), () => {
        document.removeEventListener("focusin", lq, Aq), document.removeEventListener("focusout", Oq, Aq), document.removeEventListener("keydown", xq, Aq)
      }
    }
    const Aq = new Map;

    function cq(qq, Eq) {
      var gq;
      let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Aq.set(Yq, (null !== (gq = Aq.get(Yq)) && void 0 !== gq ? gq : 0) & ~qq | Eq & qq);
      let Oq = 0;
      for (const lq of Aq.values()) Oq |= lq;
      return (0, lq.B)(qq, Oq & qq)
    }
  },
  36985: (qq, Eq, gq) => {
    function Yq(qq) {
      return qq.includes("Leaf Bed")
    }

    function lq(qq) {
      return / Bed(?: Head)?(?:\||$)/.test(qq) && !Yq(qq)
    }

    function Oq(qq) {
      return qq.includes(" Strongbed")
    }

    function mq(qq) {
      return Yq(qq) || lq(qq) || Oq(qq)
    }
    gq.d(Eq, {
      b: () => mq,
      c: () => Yq,
      d: () => Oq,
      f: () => lq
    })
  },
  36979: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq
    });
    var Yq = gq(36985),
      lq = gq(9379);
    const Oq = [],
      mq = [],
      xq = [],
      Aq = [];
    for (const uq of Object.keys(lq.o))(0, Yq.c)(uq) ? Oq.push(uq) : (0, Yq.f)(uq) && mq.push(uq), (0, Yq.d)(uq) && xq.push(uq), (uq.includes(" Bed Head") || uq.includes(" Strongbed Head")) && Aq.push(uq);
    const cq = {
      leafBeds: Oq,
      woolBeds: mq,
      strongBeds: xq,
      beds: [...Oq, ...mq, ...xq],
      bedHeads: Aq,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6348: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq,
      i: () => lq,
      l: () => Aq,
      m: () => Oq,
      p: () => cq,
      t: () => Yq,
      w: () => xq
    });
    let Yq = function(qq) {
        return qq[qq.DEFAULT = 0] = "DEFAULT", qq[qq.BOAT = 1] = "BOAT", qq[qq.GLIDER = 2] = "GLIDER", qq[qq.BALLOON = 3] = "BALLOON", qq[qq.SLEEPING = 4] = "SLEEPING", qq[qq.RIDING_MOB = 5] = "RIDING_MOB", qq[qq.CAR = 6] = "CAR", qq[qq.HOVERCRAFT = 7] = "HOVERCRAFT", qq
      }({}),
      lq = function(qq) {
        return qq[qq.WOOD = 0] = "WOOD", qq[qq.OBSIDIAN = 1] = "OBSIDIAN", qq[qq.SPEED = 2] = "SPEED", qq
      }({}),
      Oq = function(qq) {
        return qq[qq.WOOD = 0] = "WOOD", qq[qq.IRON = 1] = "IRON", qq[qq.GOLD = 2] = "GOLD", qq[qq.DIAMOND = 3] = "DIAMOND", qq
      }({}),
      mq = function(qq) {
        return qq[qq.YELLOW = 0] = "YELLOW", qq[qq.WHITE = 1] = "WHITE", qq[qq.RED = 2] = "RED", qq[qq.PURPLE = 3] = "PURPLE", qq[qq.PINK = 4] = "PINK", qq[qq.ORANGE = 5] = "ORANGE", qq[qq.MAGENTA = 6] = "MAGENTA", qq[qq.LIME = 7] = "LIME", qq[qq.LIGHT_GRAY = 8] = "LIGHT_GRAY", qq[qq.LIGHT_BLUE = 9] = "LIGHT_BLUE", qq[qq.GREEN = 10] = "GREEN", qq[qq.GRAY = 11] = "GRAY", qq[qq.CYAN = 12] = "CYAN", qq[qq.BROWN = 13] = "BROWN", qq[qq.BLUE = 14] = "BLUE", qq[qq.BLACK = 15] = "BLACK", qq
      }({}),
      xq = function(qq) {
        return qq[qq.ROTATION_1 = 0] = "ROTATION_1", qq[qq.ROTATION_2 = 1] = "ROTATION_2", qq[qq.ROTATION_3 = 2] = "ROTATION_3", qq[qq.ROTATION_4 = 3] = "ROTATION_4", qq
      }({}),
      Aq = function(qq) {
        return qq[qq.KART = 0] = "KART", qq[qq.OFF_ROADER = 1] = "OFF_ROADER", qq[qq.CAR = 2] = "CAR", qq[qq.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", qq[qq.ARMORED_CAR = 4] = "ARMORED_CAR", qq[qq.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", qq[qq.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", qq[qq.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", qq
      }({});
    Yq.DEFAULT, Yq.BOAT, lq.SPEED, Yq.GLIDER, Oq.DIAMOND, Yq.BALLOON, mq.BLACK, Yq.SLEEPING, xq.ROTATION_4, Yq.RIDING_MOB, Yq.CAR, Aq.MOONSTONE_MINING_DRILL, Yq.HOVERCRAFT;
    let cq = function(qq) {
      return qq[qq.NORMAL = 0] = "NORMAL", qq[qq.GLIDING = 1] = "GLIDING", qq[qq.FLOATING = 2] = "FLOATING", qq
    }({})
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);