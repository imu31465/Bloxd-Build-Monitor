export const id = 78;
export const ids = [78];
export const modules = {
  39304: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      startWasmPadGameplay: () => pJ
    });
    ZJ(39312);
    var FJ = ZJ(39317),
      UJ = ZJ(39341),
      eJ = ZJ(1725),
      XJ = ZJ(39354),
      AJ = ZJ(4198),
      qJ = ZJ(4176),
      jJ = ZJ(39357),
      YJ = ZJ(39360),
      hJ = ZJ(4210),
      DJ = ZJ(39437),
      sJ = ZJ(2153),
      nJ = ZJ(8151),
      GJ = ZJ(39325),
      fJ = ZJ(8128);
    const xJ = JJ => {
        const cJ = hJ.c.indexOf(JJ);
        if (cJ < 0) throw new Error(`No core action "${JJ}"`);
        return cJ
      },
      rJ = xJ("primary-fire"),
      vJ = xJ("alt-fire"),
      mJ = xJ("mid-fire"),
      QJ = xJ("jump"),
      EJ = xJ("ReloadGun"),
      VJ = xJ("SwapCameraZoom"),
      KJ = xJ("TouchAction1"),
      yJ = {
        SpecialAction1: xJ("SpecialAction1"),
        SpecialAction2: xJ("SpecialAction2")
      },
      SJ = (JJ, cJ) => {
        (0, sJ.w)(AJ.E.PadAction, JJ, 0, 0, (0, sJ.u)(cJ, performance.now()))
      },
      IJ = JJ => {
        SJ(JJ, XJ.ld.Down)
      },
      MJ = JJ => {
        SJ(JJ, 0)
      },
      bJ = JJ => {
        IJ(JJ), MJ(JJ)
      },
      wJ = () => {
        const JJ = (0, YJ.j)();
        return null !== JJ && void 0 !== JJ && JJ.isCoreRunning ? JJ : null
      },
      WJ = JJ => XJ.s.playerFlags(JJ.api.apiView, 0),
      gJ = JJ => null !== JJ && XJ.s.targetBlockId(JJ.api.apiView, 0) !== XJ.Wc,
      HJ = () => {
        const JJ = (0, nJ.c)(),
          cJ = new GJ.b;
        let ZJ = !1;
        const FJ = (JJ, cJ) => {
            (0, sJ.w)(AJ.E.PadLook, XJ.td.Rate, JJ, cJ, 0)
          },
          UJ = () => {
            ZJ = !1, cJ.reset(), FJ(0, 0)
          };
        return {
          update: (UJ, eJ, qJ) => {
            ZJ || (JJ.discardPending(), ZJ = !0);
            const jJ = (0, GJ.n)(cJ, UJ, eJ, qJ, performance.now());
            FJ(jJ.yawRadPerSec, jJ.pitchRadPerSec);
            const YJ = JJ.drainLookDelta();
            0 === YJ.bK && 0 === YJ.zK || (0, sJ.w)(AJ.E.PadLook, XJ.td.Gyro, YJ.bK, YJ.zK, 0)
          },
          release: UJ,
          uninstall: UJ
        }
      },
      PJ = () => {
        const JJ = wJ();
        return null !== JJ && 0 !== (WJ(JJ) & XJ.Ad.PadSneakToggled)
      },
      kJ = () => {
        const JJ = (JJ => {
          const cJ = JJ => function() {
            return (0, DJ.d)(), JJ(...arguments)
          };
          return {
            primaryFireDown: cJ((() => (IJ(rJ), 0))),
            primaryFireUp: cJ((() => {
              MJ(rJ)
            })),
            altFireDown: cJ((() => (IJ(vJ), 0))),
            altFireUp: cJ((() => {
              MJ(vJ)
            })),
            jumpDown: cJ((() => {
              bJ(QJ)
            })),
            specialActionDown: cJ((JJ => {
              IJ(yJ[JJ])
            })),
            specialActionUp: cJ((JJ => {
              MJ(yJ[JJ])
            })),
            reloadGun: cJ((() => {
              bJ(EJ)
            })),
            dropItem: cJ((JJ => {
              SJ(XJ.od.Drop, XJ.ld.Down | (JJ ? XJ.ld.Stack : 0))
            })),
            swapCameraZoom: cJ((() => {
              bJ(VJ)
            })),
            Am: cJ((() => (bJ(mJ), gJ(JJ()))))
          }
        })(wJ);
        let cJ = !1,
          ZJ = null;
        const FJ = () => {
          var JJ;
          null === (JJ = ZJ) || void 0 === JJ || JJ(), ZJ = null
        };
        return {
          bodies: () => JJ,
          look: HJ(),
          move: (JJ, ZJ) => {
            var UJ;
            FJ();
            const {
              bits: eJ,
              flips: AJ
            } = (JJ => {
              if (null === JJ) return {
                bits: XJ.qd.Peek,
                flips: 0
              };
              const cJ = JJ.sneakHeld ? XJ.qd.SneakHeld : 0;
              return "hold" === JJ.mode ? {
                bits: cJ | XJ.qd.SneakHoldMode,
                flips: JJ.sneakTogglePressed ? 1 : 0
              } : {
                bits: cJ,
                flips: JJ.sneakPressed || JJ.sneakTogglePressed ? 1 : 0
              }
            })(ZJ);
            null !== (UJ = wJ()) && void 0 !== UJ && UJ.padMove(JJ.x, JJ.y, JJ.magnitude, JJ.headingOffset, (JJ => XJ.qd.Active | (JJ.jumpHeld ? XJ.qd.JumpHeld : 0) | (JJ.jumpPressed ? XJ.qd.JumpPressed : 0) | (JJ.running ? XJ.qd.Running : 0) | (JJ.sprintHeld ? XJ.qd.SprintHeld : 0))(JJ) | eJ, AJ) && (cJ = !0), (0, fJ.i)(PJ())
          },
          stopMoving: () => {
            var JJ;
            cJ && (cJ = !(null !== (JJ = wJ()) && void 0 !== JJ && JJ.padMove(0, 0, 0, 0, 0, 0)), FJ(), ZJ = (0, qJ.w)((() => {
              FJ(), (0, fJ.i)(PJ())
            })))
          },
          uninstall: FJ,
          deviceChanged: JJ => {
            var ZJ;
            "touch" === JJ ? ((0, fJ.i)(!1), null !== (ZJ = wJ()) && void 0 !== ZJ && ZJ.padMove(0, 0, 0, 0, XJ.qd.EndToggle, 0) && (cJ = !1)) : "gamepad" === JJ && (0, fJ.i)(PJ())
          },
          hasPlayer: () => null !== wJ(),
          isPlayerDead: () => {
            var JJ;
            return !1 === (null === (JJ = wJ()) || void 0 === JJ ? void 0 : JJ.localPlayerAlive())
          },
          isReplayMode: () => {
            const JJ = wJ();
            return null !== JJ && 0 !== (WJ(JJ) & XJ.Ad.Replay)
          },
          isFreeCameraOn: () => {
            const JJ = wJ();
            return null !== JJ && 0 !== (WJ(JJ) & XJ.Ad.FreeCam)
          },
          targetsBlock: () => gJ(wJ()),
          selectedSlotEmpty: () => {
            var JJ;
            return !(null !== (JJ = wJ()) && void 0 !== JJ && JJ.items.hj())
          },
          pickBlockAllowed: () => !!eJ.b.get("creative") && !!eJ.b.get("canPickBlocks"),
          scrollHotbar: JJ => {
            SJ(XJ.od.Hotbar, XJ.ld.Down | (JJ > 0 ? XJ.ld.Next : 0))
          },
          hasFullInventory: jJ.k,
          hasLobbyLeaderboard: () => !!eJ.b.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var JJ, cJ, ZJ, FJ;
            const UJ = wJ();
            return {
              holdingGun: !1 !== (null === UJ || void 0 === UJ ? void 0 : UJ.localPlayerAlive()) && "Gun" === (null === UJ || void 0 === UJ || null === (JJ = UJ.items.hj()) || void 0 === JJ || null === (cJ = JJ.typeObj) || void 0 === cJ ? void 0 : cJ.type),
              customButtons: null !== (ZJ = eJ.b.get("customButtons")) && void 0 !== ZJ ? ZJ : null,
              touchscreenActionButton: null !== (FJ = eJ.b.get("touchscreenActionButton")) && void 0 !== FJ ? FJ : null
            }
          },
          pressTouchButton: JJ => {
            JJ ? IJ(KJ) : MJ(KJ)
          }
        }
      },
      pJ = () => {
        const JJ = (0, UJ.e)(kJ()),
          cJ = (0, FJ.b)(),
          ZJ = null;
        return () => {
          JJ(), cJ(), null === ZJ || void 0 === ZJ || ZJ()
        }
      }
  },
  4198: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      $: () => MJ,
      A: () => FJ,
      Cb: () => GJ,
      D: () => eJ,
      Db: () => PJ,
      E: () => jJ,
      G: () => NJ,
      Hb: () => UJ,
      J: () => YJ,
      K: () => qJ,
      Lb: () => zJ,
      N: () => rJ,
      P: () => mJ,
      S: () => QJ,
      U: () => vJ,
      W: () => EJ,
      Z: () => HJ,
      _: () => WJ,
      cb: () => VJ,
      e: () => dJ,
      fb: () => SJ,
      g: () => pJ,
      ib: () => KJ,
      jb: () => xJ,
      k: () => sJ,
      l: () => kJ,
      m: () => DJ,
      mb: () => fJ,
      nb: () => yJ,
      p: () => hJ,
      pb: () => gJ,
      rb: () => IJ,
      t: () => XJ,
      tb: () => bJ,
      w: () => AJ,
      wb: () => wJ,
      yb: () => nJ
    });
    const FJ = 32,
      UJ = 33.333333333333336,
      eJ = {
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
        TerrainDrawn: 31
      },
      XJ = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      AJ = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      qJ = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      jJ = {
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
      YJ = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      hJ = {
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
      DJ = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      sJ = 4,
      nJ = 4,
      GJ = 65535,
      fJ = {
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
      xJ = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      rJ = 88,
      vJ = 0,
      mJ = 24,
      QJ = 48,
      EJ = 80,
      VJ = {
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
      KJ = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      yJ = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      SJ = {
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
      IJ = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      MJ = 65535,
      bJ = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      wJ = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      WJ = 2,
      gJ = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      HJ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      PJ = {
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
      kJ = {
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
      pJ = {
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
      dJ = 8,
      zJ = {
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
      NJ = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4176: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => MJ,
      B: () => rJ,
      E: () => XJ,
      F: () => AJ,
      H: () => yJ,
      c: () => KJ,
      e: () => mJ,
      f: () => wJ,
      i: () => bJ,
      m: () => xJ,
      o: () => EJ,
      p: () => vJ,
      s: () => QJ,
      w: () => SJ,
      y: () => IJ
    });
    var FJ = ZJ(4182);
    const UJ = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let eJ = UJ;

    function XJ(JJ) {
      eJ = null !== JJ && void 0 !== JJ ? JJ : UJ
    }

    function AJ() {
      return eJ
    }
    const qJ = new Set,
      jJ = new Set;
    let YJ = -1;
    const hJ = new Set,
      DJ = new Set;
    let sJ = 0,
      nJ = 0;
    const GJ = new Set,
      fJ = new Set;

    function xJ(JJ) {
      return qJ.add(JJ), () => {
        qJ.delete(JJ)
      }
    }

    function rJ(JJ, cJ) {
      for (const FJ of qJ) try {
        FJ(JJ)
      } catch (ZJ) {
        cJ(ZJ)
      }
    }

    function vJ(JJ) {
      return jJ.add(JJ), () => {
        jJ.delete(JJ)
      }
    }

    function mJ(JJ, cJ) {
      const ZJ = YJ < 0 ? 0 : JJ - YJ;
      YJ = JJ;
      for (const UJ of jJ) try {
        UJ(ZJ)
      } catch (FJ) {
        cJ(FJ)
      }
    }

    function QJ(JJ) {
      return hJ.add(JJ), () => {
        hJ.delete(JJ)
      }
    }

    function EJ(JJ) {
      return DJ.add(JJ), () => {
        DJ.delete(JJ)
      }
    }
    let VJ = 0;

    function KJ(JJ) {
      VJ += JJ
    }

    function yJ() {
      const JJ = VJ;
      return VJ = 0, JJ
    }

    function SJ(JJ) {
      return GJ.add(JJ), () => {
        GJ.delete(JJ)
      }
    }

    function IJ(JJ) {
      return fJ.add(JJ), () => {
        fJ.delete(JJ)
      }
    }

    function MJ() {
      sJ = 0, nJ = 0, YJ = -1
    }

    function bJ(JJ, cJ) {
      if ("paced" === JJ) return nJ += cJ, null;
      if ("drawn" !== JJ && "skipped" !== JJ) return null;
      const ZJ = cJ + nJ;
      return nJ = 0, ZJ
    }

    function wJ(JJ, cJ, ZJ, UJ) {
      const eJ = (0, FJ.g)(cJ),
        XJ = JJ > 0 ? performance.now() : 0;
      for (let FJ = 0; FJ < JJ; FJ++)
        for (const JJ of GJ) try {
          JJ()
        } catch (AJ) {
          UJ(AJ)
        }
      if (JJ > 0 && KJ(performance.now() - XJ), null !== ZJ) {
        for (const JJ of hJ) try {
          JJ(ZJ)
        } catch (AJ) {
          UJ(AJ)
        }
        sJ += ZJ
      }
      if ("drawn" === cJ) {
        const JJ = sJ;
        sJ = 0;
        for (const cJ of DJ) try {
          cJ(JJ)
        } catch (AJ) {
          UJ(AJ)
        }
      }
      for (const FJ of fJ) try {
        FJ(JJ, eJ)
      } catch (AJ) {
        UJ(AJ)
      }
    }
  },
  4189: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      Ac: () => jc,
      Bb: () => UJ.i,
      Bd: () => dJ,
      C: () => WJ,
      Cb: () => KJ,
      Dc: () => Fc,
      Ec: () => FJ.cb,
      Ed: () => uJ,
      Fb: () => pJ,
      G: () => Dc,
      I: () => tJ,
      Ib: () => bJ,
      Ic: () => FJ.fb,
      Jb: () => IJ,
      Jd: () => TJ,
      Lc: () => FJ.ib,
      Ld: () => RJ,
      M: () => FJ.g,
      Mc: () => oJ,
      Md: () => iJ,
      N: () => jJ,
      Nb: () => FJ.J,
      O: () => FJ.k,
      Oc: () => FJ.jb,
      Pd: () => Xc,
      Qb: () => wJ,
      R: () => aJ,
      Sc: () => FJ.mb,
      Sd: () => nc,
      T: () => FJ.p,
      Tb: () => QJ,
      Uc: () => FJ.nb,
      Ud: () => mJ,
      Vb: () => ec,
      Vd: () => LJ,
      W: () => FJ.t,
      Yc: () => FJ.rb,
      Yd: () => PJ,
      Z: () => FJ.w,
      Zb: () => vJ,
      ad: () => FJ.tb,
      ae: () => HJ,
      b: () => Jc,
      bb: () => hJ,
      bc: () => Yc,
      cc: () => UJ.p,
      cd: () => FJ.wb,
      d: () => GJ,
      eb: () => rJ,
      ec: () => xJ,
      ee: () => gJ,
      f: () => nJ,
      fd: () => SJ,
      fe: () => qJ,
      hc: () => Zc,
      he: () => kJ,
      ib: () => FJ.A,
      ic: () => FJ.N,
      id: () => FJ.yb,
      ie: () => Gc,
      j: () => qc,
      kc: () => FJ.P,
      kd: () => FJ.Cb,
      lb: () => FJ.D,
      lc: () => FJ.S,
      me: () => sJ,
      n: () => yJ,
      nc: () => FJ.U,
      nd: () => FJ.Hb,
      ob: () => NJ,
      pb: () => Uc,
      q: () => VJ,
      r: () => FJ.e,
      rb: () => YJ,
      rc: () => FJ.W,
      rd: () => eJ,
      s: () => hc,
      sb: () => FJ.E,
      ub: () => CJ,
      ud: () => fJ,
      vb: () => BJ,
      vc: () => FJ.$,
      vd: () => Ac,
      w: () => MJ,
      wb: () => lJ,
      wd: () => zJ,
      xc: () => sc,
      z: () => XJ,
      zb: () => cc,
      zd: () => OJ
    });
    var FJ = ZJ(4198),
      UJ = ZJ(2146);
    const eJ = Math.round(1e3 / FJ.Hb),
      XJ = 4,
      AJ = 2;

    function qJ() {
      return crypto.getRandomValues(new Uint32Array(AJ))
    }
    const jJ = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      YJ = 16,
      hJ = {
        Draws: 1,
        NetAll: 2
      },
      DJ = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function sJ(JJ) {
      return (JJ.nametagsHidden ? EJ.NametagsHidden : 0) | (JJ.crouchToggle ? EJ.CrouchToggle : 0) | (JJ.bhopDisabled ? EJ.BhopDisabled : 0) | (JJ.disableBobbing ? EJ.DisableBobbing : 0) | (JJ.ezTowering ? EJ.EzTowering : 0) | (JJ.ezBridging ? EJ.EzBridging : 0) | (JJ.showChunkBorders ? EJ.ShowChunkBorders : 0) | (JJ.edgeGuard ? EJ.EdgeGuard : 0)
    }
    const nJ = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      GJ = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      fJ = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      xJ = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      rJ = 5,
      vJ = 4294967295;

    function mJ(JJ) {
      return (JJ.showFog ? DJ.ShowFog : 0) | (JJ.lighting ? DJ.Lighting : 0) | (JJ.chunkFade ? DJ.ChunkFade : 0)
    }
    const QJ = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      EJ = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        EdgeGuard: 128,
        All: 255
      },
      VJ = {
        Release: 1,
        KeepTouches: 2
      },
      KJ = {
        Point: 1,
        Stamped: 2
      },
      yJ = {
        Add: 1,
        Clear: 2
      },
      SJ = 1,
      IJ = 8,
      MJ = 16777215,
      bJ = 4,
      wJ = {
        Resume: 1
      },
      WJ = {
        Held: 1
      };

    function gJ(JJ, cJ) {
      return (JJ | cJ << 8) >>> 0
    }

    function HJ(JJ) {
      return 255 & JJ
    }

    function PJ(JJ) {
      return JJ >>> 8
    }

    function kJ(JJ) {
      return JJ + 3 & -4
    }
    const pJ = 16777216,
      dJ = 16,
      zJ = 8,
      NJ = 8,
      OJ = 16777216,
      TJ = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      CJ = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      uJ = 16,
      iJ = {
        Lost: 0,
        Gone: 1
      },
      RJ = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function LJ(JJ) {
      return JJ === RJ.WorldgenSeed || JJ === RJ.Generate
    }
    const aJ = 4,
      BJ = 99,
      tJ = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      oJ = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      lJ = 12,
      Jc = 16,
      cc = 4,
      Zc = 12,
      Fc = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Uc = 4,
      ec = 8,
      Xc = 8,
      Ac = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      qc = {
        Crit: 1,
        HitSelf: 2
      },
      jc = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Yc = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      hc = 12,
      Dc = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      sc = 67108864;

    function nc(JJ) {
      for (const [cJ, ZJ] of Object.entries(FJ.g))
        if (ZJ === JJ) return cJ;
      return `Unknown${JJ}`
    }

    function Gc(JJ) {
      return {
        status: JJ[FJ.D.Status],
        lastError: JJ[FJ.D.LastError],
        lastErrorDetail: JJ[FJ.D.LastErrorDetail],
        errorCount: JJ[FJ.D.ErrorCount],
        frameIndex: JJ[FJ.D.FrameIndex],
        tickIndex: JJ[FJ.D.TickIndex],
        renderPending: JJ[FJ.D.RenderPending],
        firstView: JJ[FJ.D.FirstView],
        chunksCancelled: JJ[FJ.D.ChunksCancelled]
      }
    }
  },
  4182: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ,
      e: () => eJ,
      g: () => UJ
    });
    var FJ = ZJ(4189);

    function UJ(JJ) {
      return "none" !== JJ
    }

    function eJ(JJ, cJ) {
      if (!JJ) return "none";
      switch (cJ) {
        case FJ.Z.Drawn:
          return "drawn";
        case FJ.Z.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function XJ(JJ) {
      return "drawn" === JJ
    }
  },
  4210: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ,
      e: () => eJ,
      h: () => XJ,
      l: () => FJ,
      o: () => AJ
    });
    const FJ = {
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
      UJ = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      eJ = {
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
      XJ = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      AJ = [16]
  },
  39437: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      f: () => eJ,
      h: () => UJ
    });
    let FJ = null;

    function UJ(JJ) {
      FJ = JJ
    }

    function eJ(JJ) {
      FJ === JJ && (FJ = null)
    }

    function XJ() {
      var JJ;
      null === (JJ = FJ) || void 0 === JJ || JJ()
    }
  },
  4217: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => AJ,
      e: () => XJ,
      g: () => jJ
    });
    var FJ = ZJ(2146),
      UJ = ZJ(2153);
    const eJ = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function XJ(JJ) {
      return JJ instanceof HTMLElement && (!!(JJ.isContentEditable || JJ instanceof HTMLTextAreaElement || JJ instanceof HTMLSelectElement) || JJ instanceof HTMLInputElement && !eJ.has(JJ.type))
    }

    function AJ(JJ) {
      let cJ = null;
      const ZJ = ZJ => {
          const UJ = XJ(ZJ);
          UJ !== cJ && (cJ = UJ, JJ(FJ.l.UiCapture, FJ.D.Keyboard, 0, 0, UJ ? FJ.D.Keyboard : 0))
        },
        UJ = JJ => {
          ZJ(JJ.target)
        },
        eJ = JJ => {
          ZJ(JJ.relatedTarget)
        },
        AJ = () => {
          ZJ(document.activeElement)
        },
        qJ = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", UJ, qJ), document.addEventListener("focusout", eJ, qJ), document.addEventListener("keydown", AJ, qJ), ZJ(document.activeElement), () => {
        document.removeEventListener("focusin", UJ, qJ), document.removeEventListener("focusout", eJ, qJ), document.removeEventListener("keydown", AJ, qJ)
      }
    }
    const qJ = new Map;

    function jJ(JJ, cJ) {
      var ZJ;
      let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      qJ.set(FJ, (null !== (ZJ = qJ.get(FJ)) && void 0 !== ZJ ? ZJ : 0) & ~JJ | cJ & JJ);
      let eJ = 0;
      for (const UJ of qJ.values()) eJ |= UJ;
      return (0, UJ.H)(JJ, eJ & JJ)
    }
  },
  35948: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return JJ.includes("Leaf Bed")
    }

    function UJ(JJ) {
      return / Bed(?: Head)?(?:\||$)/.test(JJ) && !FJ(JJ)
    }

    function eJ(JJ) {
      return JJ.includes(" Strongbed")
    }

    function XJ(JJ) {
      return FJ(JJ) || UJ(JJ) || eJ(JJ)
    }
    ZJ.d(cJ, {
      e: () => XJ,
      h: () => FJ,
      l: () => eJ,
      m: () => UJ
    })
  },
  35944: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ
    });
    var FJ = ZJ(35948),
      UJ = ZJ(8636);
    const eJ = [],
      XJ = [],
      AJ = [],
      qJ = [];
    for (const YJ of Object.keys(UJ.o))(0, FJ.h)(YJ) ? eJ.push(YJ) : (0, FJ.m)(YJ) && XJ.push(YJ), (0, FJ.l)(YJ) && AJ.push(YJ), (YJ.includes(" Bed Head") || YJ.includes(" Strongbed Head")) && qJ.push(YJ);
    const jJ = {
      leafBeds: eJ,
      woolBeds: XJ,
      strongBeds: AJ,
      beds: [...eJ, ...XJ, ...AJ],
      bedHeads: qJ,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  5817: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      h: () => UJ,
      j: () => qJ,
      m: () => eJ,
      p: () => jJ,
      s: () => FJ,
      v: () => AJ
    });
    let FJ = function(JJ) {
        return JJ[JJ.DEFAULT = 0] = "DEFAULT", JJ[JJ.BOAT = 1] = "BOAT", JJ[JJ.GLIDER = 2] = "GLIDER", JJ[JJ.BALLOON = 3] = "BALLOON", JJ[JJ.SLEEPING = 4] = "SLEEPING", JJ[JJ.RIDING_MOB = 5] = "RIDING_MOB", JJ[JJ.CAR = 6] = "CAR", JJ[JJ.HOVERCRAFT = 7] = "HOVERCRAFT", JJ
      }({}),
      UJ = function(JJ) {
        return JJ[JJ.WOOD = 0] = "WOOD", JJ[JJ.OBSIDIAN = 1] = "OBSIDIAN", JJ[JJ.SPEED = 2] = "SPEED", JJ
      }({}),
      eJ = function(JJ) {
        return JJ[JJ.WOOD = 0] = "WOOD", JJ[JJ.IRON = 1] = "IRON", JJ[JJ.GOLD = 2] = "GOLD", JJ[JJ.DIAMOND = 3] = "DIAMOND", JJ
      }({}),
      XJ = function(JJ) {
        return JJ[JJ.YELLOW = 0] = "YELLOW", JJ[JJ.WHITE = 1] = "WHITE", JJ[JJ.RED = 2] = "RED", JJ[JJ.PURPLE = 3] = "PURPLE", JJ[JJ.PINK = 4] = "PINK", JJ[JJ.ORANGE = 5] = "ORANGE", JJ[JJ.MAGENTA = 6] = "MAGENTA", JJ[JJ.LIME = 7] = "LIME", JJ[JJ.LIGHT_GRAY = 8] = "LIGHT_GRAY", JJ[JJ.LIGHT_BLUE = 9] = "LIGHT_BLUE", JJ[JJ.GREEN = 10] = "GREEN", JJ[JJ.GRAY = 11] = "GRAY", JJ[JJ.CYAN = 12] = "CYAN", JJ[JJ.BROWN = 13] = "BROWN", JJ[JJ.BLUE = 14] = "BLUE", JJ[JJ.BLACK = 15] = "BLACK", JJ
      }({}),
      AJ = function(JJ) {
        return JJ[JJ.ROTATION_1 = 0] = "ROTATION_1", JJ[JJ.ROTATION_2 = 1] = "ROTATION_2", JJ[JJ.ROTATION_3 = 2] = "ROTATION_3", JJ[JJ.ROTATION_4 = 3] = "ROTATION_4", JJ
      }({}),
      qJ = function(JJ) {
        return JJ[JJ.KART = 0] = "KART", JJ[JJ.OFF_ROADER = 1] = "OFF_ROADER", JJ[JJ.CAR = 2] = "CAR", JJ[JJ.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", JJ[JJ.ARMORED_CAR = 4] = "ARMORED_CAR", JJ[JJ.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", JJ[JJ.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", JJ[JJ.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", JJ
      }({});
    FJ.DEFAULT, FJ.BOAT, UJ.SPEED, FJ.GLIDER, eJ.DIAMOND, FJ.BALLOON, XJ.BLACK, FJ.SLEEPING, AJ.ROTATION_4, FJ.RIDING_MOB, FJ.CAR, qJ.MOONSTONE_MINING_DRILL, FJ.HOVERCRAFT;
    let jJ = function(JJ) {
      return JJ[JJ.NORMAL = 0] = "NORMAL", JJ[JJ.GLIDING = 1] = "GLIDING", JJ[JJ.FLOATING = 2] = "FLOATING", JJ
    }({})
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);