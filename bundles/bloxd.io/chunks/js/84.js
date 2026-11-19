export const id = 84;
export const ids = [84];
export const modules = {
  39649: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      startWasmPadGameplay: () => dY
    });
    DY(39651);
    var FY = DY(39658),
      AY = DY(39674),
      IY = DY(1823),
      RY = DY(39683),
      OY = DY(4382),
      gY = DY(4365),
      aY = DY(39686),
      vY = DY(39693),
      uY = DY(4392),
      sY = DY(39761),
      iY = DY(2256),
      yY = DY(8263),
      QY = DY(39663),
      oY = DY(8248);
    const WY = YY => {
        const rY = uY.c.indexOf(YY);
        if (rY < 0) throw new Error(`No core action "${YY}"`);
        return rY
      },
      EY = WY("primary-fire"),
      mY = WY("alt-fire"),
      VY = WY("mid-fire"),
      SY = WY("jump"),
      lY = WY("ReloadGun"),
      TY = WY("SwapCameraZoom"),
      eY = WY("TouchAction1"),
      NY = {
        SpecialAction1: WY("SpecialAction1"),
        SpecialAction2: WY("SpecialAction2")
      },
      BY = (YY, rY) => {
        (0, iY.x)(OY.C.PadAction, YY, 0, 0, (0, iY.u)(rY, performance.now()))
      },
      cY = YY => {
        BY(YY, RY.sd.Down)
      },
      KY = YY => {
        BY(YY, 0)
      },
      HY = YY => {
        cY(YY), KY(YY)
      },
      zY = () => {
        const YY = (0, vY.g)();
        return null !== YY && void 0 !== YY && YY.isCoreRunning ? YY : null
      },
      ZY = YY => RY.s.playerFlags(YY.api.apiView, 0),
      CY = YY => null !== YY && RY.s.targetBlockId(YY.api.apiView, 0) !== RY.$c,
      fY = () => {
        const YY = (0, yY.e)(),
          rY = new QY.c;
        let DY = !1;
        const FY = (YY, rY) => {
            (0, iY.x)(OY.C.PadLook, RY.xd.Rate, YY, rY, 0)
          },
          AY = () => {
            DY = !1, rY.reset(), FY(0, 0)
          };
        return {
          update: (AY, IY, gY) => {
            DY || (YY.discardPending(), DY = !0);
            const aY = (0, QY.n)(rY, AY, IY, gY, performance.now());
            FY(aY.yawRadPerSec, aY.pitchRadPerSec);
            const vY = YY.drainLookDelta();
            0 === vY.Tl && 0 === vY.Bl || (0, iY.x)(OY.C.PadLook, RY.xd.Gyro, vY.Tl, vY.Bl, 0)
          },
          release: AY,
          uninstall: AY
        }
      },
      jY = () => {
        const YY = zY();
        return null !== YY && 0 !== (ZY(YY) & RY.Cd.PadSneakToggled)
      },
      hY = () => {
        const YY = (YY => {
          const rY = YY => function() {
            return (0, sY.c)(), YY(...arguments)
          };
          return {
            primaryFireDown: rY((() => (cY(EY), 0))),
            primaryFireUp: rY((() => {
              KY(EY)
            })),
            altFireDown: rY((() => (cY(mY), 0))),
            altFireUp: rY((() => {
              KY(mY)
            })),
            jumpDown: rY((() => {
              HY(SY)
            })),
            specialActionDown: rY((YY => {
              cY(NY[YY])
            })),
            specialActionUp: rY((YY => {
              KY(NY[YY])
            })),
            reloadGun: rY((() => {
              HY(lY)
            })),
            dropItem: rY((YY => {
              BY(RY.ud.Drop, RY.sd.Down | (YY ? RY.sd.Stack : 0))
            })),
            swapCameraZoom: rY((() => {
              HY(TY)
            })),
            pickBlock: rY((() => (HY(VY), CY(YY()))))
          }
        })(zY);
        let rY = !1,
          DY = null;
        const FY = () => {
          var YY;
          null === (YY = DY) || void 0 === YY || YY(), DY = null
        };
        return {
          bodies: () => YY,
          look: fY(),
          move: (YY, DY) => {
            var AY;
            FY();
            const {
              bits: IY,
              flips: OY
            } = (YY => {
              if (null === YY) return {
                bits: RY.vd.Peek,
                flips: 0
              };
              const rY = YY.sneakHeld ? RY.vd.SneakHeld : 0;
              return "hold" === YY.mode ? {
                bits: rY | RY.vd.SneakHoldMode,
                flips: YY.sneakTogglePressed ? 1 : 0
              } : {
                bits: rY,
                flips: YY.sneakPressed || YY.sneakTogglePressed ? 1 : 0
              }
            })(DY);
            null !== (AY = zY()) && void 0 !== AY && AY.padMove(YY.x, YY.y, YY.magnitude, YY.headingOffset, (YY => RY.vd.Active | (YY.jumpHeld ? RY.vd.JumpHeld : 0) | (YY.jumpPressed ? RY.vd.JumpPressed : 0) | (YY.running ? RY.vd.Running : 0) | (YY.sprintHeld ? RY.vd.SprintHeld : 0))(YY) | IY, OY) && (rY = !0), (0, oY.g)(jY())
          },
          stopMoving: () => {
            var YY;
            rY && (rY = !(null !== (YY = zY()) && void 0 !== YY && YY.padMove(0, 0, 0, 0, 0, 0)), FY(), DY = (0, gY.w)((() => {
              FY(), (0, oY.g)(jY())
            })))
          },
          uninstall: FY,
          deviceChanged: YY => {
            var DY;
            "touch" === YY ? ((0, oY.g)(!1), null !== (DY = zY()) && void 0 !== DY && DY.padMove(0, 0, 0, 0, RY.vd.EndToggle, 0) && (rY = !1)) : "gamepad" === YY && (0, oY.g)(jY())
          },
          hasPlayer: () => null !== zY(),
          isPlayerDead: () => {
            var YY;
            return !1 === (null === (YY = zY()) || void 0 === YY ? void 0 : YY.localPlayerAlive())
          },
          isReplayMode: () => {
            const YY = zY();
            return null !== YY && 0 !== (ZY(YY) & RY.Cd.Replay)
          },
          isFreeCameraOn: () => {
            const YY = zY();
            return null !== YY && 0 !== (ZY(YY) & RY.Cd.FreeCam)
          },
          targetsBlock: () => CY(zY()),
          selectedSlotEmpty: () => {
            var YY;
            return !(null !== (YY = zY()) && void 0 !== YY && YY.items.ja())
          },
          pickBlockAllowed: () => !!IY.b.get("creative") && !!IY.b.get("canPickBlocks"),
          scrollHotbar: YY => {
            BY(RY.ud.Hotbar, RY.sd.Down | (YY > 0 ? RY.sd.Next : 0))
          },
          hasFullInventory: aY.j,
          hasLobbyLeaderboard: () => !!IY.b.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var YY, rY, DY, FY;
            const AY = zY();
            return {
              holdingGun: !1 !== (null === AY || void 0 === AY ? void 0 : AY.localPlayerAlive()) && "Gun" === (null === AY || void 0 === AY || null === (YY = AY.items.ja()) || void 0 === YY || null === (rY = YY.typeObj) || void 0 === rY ? void 0 : rY.type),
              customButtons: null !== (DY = IY.b.get("customButtons")) && void 0 !== DY ? DY : null,
              touchscreenActionButton: null !== (FY = IY.b.get("touchscreenActionButton")) && void 0 !== FY ? FY : null
            }
          },
          pressTouchButton: YY => {
            YY ? cY(eY) : KY(eY)
          }
        }
      },
      dY = () => {
        const YY = (0, AY.b)(hY()),
          rY = (0, FY.e)(),
          DY = null;
        return () => {
          YY(), rY(), null === DY || void 0 === DY || DY()
        }
      }
  },
  4382: (YY, rY, DY) => {
    DY.d(rY, {
      Ab: () => SY,
      B: () => IY,
      C: () => yY,
      Cb: () => zY,
      F: () => kY,
      Gb: () => JY,
      J: () => aY,
      Jb: () => CY,
      L: () => QY,
      Mb: () => jY,
      O: () => gY,
      Ob: () => hY,
      Qb: () => mY,
      R: () => sY,
      Sb: () => VY,
      T: () => uY,
      U: () => TY,
      Ub: () => wY,
      Wb: () => AY,
      Y: () => NY,
      _: () => BY,
      _b: () => pY,
      ab: () => eY,
      d: () => qY,
      db: () => cY,
      f: () => XY,
      fb: () => MY,
      j: () => vY,
      jb: () => dY,
      l: () => EY,
      lb: () => fY,
      nb: () => KY,
      o: () => bY,
      p: () => WY,
      pb: () => ZY,
      rb: () => HY,
      s: () => oY,
      u: () => RY,
      vb: () => iY,
      y: () => OY,
      yb: () => lY,
      z: () => FY
    });
    const FY = 32,
      AY = 33.333333333333336,
      IY = {
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
      RY = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      OY = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      gY = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      aY = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      vY = {
        Look: 0,
        Remesh: 1
      },
      uY = 8,
      sY = 1,
      iY = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      yY = {
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
      QY = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      oY = {
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
      WY = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      EY = 4,
      mY = 4,
      VY = 65535,
      SY = {
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
      lY = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      TY = 88,
      eY = 0,
      NY = 24,
      BY = 48,
      cY = 80,
      KY = {
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
      HY = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      zY = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      ZY = {
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
      CY = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      fY = 65535,
      jY = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      hY = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      dY = 2,
      JY = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      MY = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      wY = {
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
      bY = {
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
      XY = {
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
      qY = 8,
      pY = {
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
      kY = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4365: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => EY,
      C: () => RY,
      D: () => OY,
      H: () => NY,
      d: () => eY,
      f: () => VY,
      j: () => zY,
      k: () => HY,
      l: () => WY,
      m: () => lY,
      o: () => mY,
      s: () => SY,
      w: () => BY,
      x: () => cY,
      z: () => KY
    });
    var FY = DY(4371);
    const AY = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let IY = AY;

    function RY(YY) {
      IY = null !== YY && void 0 !== YY ? YY : AY
    }

    function OY() {
      return IY
    }
    const gY = new Set,
      aY = new Set;
    let vY = -1;
    const uY = new Set,
      sY = new Set;
    let iY = 0,
      yY = 0;
    const QY = new Set,
      oY = new Set;

    function WY(YY) {
      return gY.add(YY), () => {
        gY.delete(YY)
      }
    }

    function EY(YY, rY) {
      for (const FY of gY) try {
        FY(YY)
      } catch (DY) {
        rY(DY)
      }
    }

    function mY(YY) {
      return aY.add(YY), () => {
        aY.delete(YY)
      }
    }

    function VY(YY, rY) {
      const DY = vY < 0 ? 0 : YY - vY;
      vY = YY;
      for (const AY of aY) try {
        AY(DY)
      } catch (FY) {
        rY(FY)
      }
    }

    function SY(YY) {
      return uY.add(YY), () => {
        uY.delete(YY)
      }
    }

    function lY(YY) {
      return sY.add(YY), () => {
        sY.delete(YY)
      }
    }
    let TY = 0;

    function eY(YY) {
      TY += YY
    }

    function NY() {
      const YY = TY;
      return TY = 0, YY
    }

    function BY(YY) {
      return QY.add(YY), () => {
        QY.delete(YY)
      }
    }

    function cY(YY) {
      return oY.add(YY), () => {
        oY.delete(YY)
      }
    }

    function KY() {
      iY = 0, yY = 0, vY = -1
    }

    function HY(YY, rY) {
      if ("paced" === YY) return yY += rY, null;
      if ("drawn" !== YY && "skipped" !== YY) return null;
      const DY = rY + yY;
      return yY = 0, DY
    }

    function zY(YY, rY, DY, AY) {
      const IY = (0, FY.j)(rY),
        RY = YY > 0 ? performance.now() : 0;
      for (let FY = 0; FY < YY; FY++)
        for (const YY of QY) try {
          YY()
        } catch (OY) {
          AY(OY)
        }
      if (YY > 0 && eY(performance.now() - RY), null !== DY) {
        for (const YY of uY) try {
          YY(DY)
        } catch (OY) {
          AY(OY)
        }
        iY += DY
      }
      if ("drawn" === rY) {
        const YY = iY;
        iY = 0;
        for (const rY of sY) try {
          rY(YY)
        } catch (OY) {
          AY(OY)
        }
      }
      for (const FY of oY) try {
        FY(YY, IY)
      } catch (OY) {
        AY(OY)
      }
    }
  },
  4376: (YY, rY, DY) => {
    DY.d(rY, {
      $d: () => CY,
      A: () => ZY,
      Ab: () => PY,
      Ad: () => bY,
      Bb: () => tY,
      Bc: () => ir,
      Bd: () => JY,
      C: () => sr,
      Cd: () => pY,
      D: () => UY,
      Eb: () => rr,
      Ec: () => ar,
      G: () => FY.f,
      H: () => aY,
      I: () => FY.j,
      Ib: () => AY.g,
      Ic: () => Fr,
      Kb: () => eY,
      Kc: () => FY.nb,
      Kd: () => XY,
      L: () => FY.l,
      Ld: () => GY,
      Mb: () => dY,
      Nc: () => FY.pb,
      O: () => nY,
      Od: () => kY,
      Pd: () => Rr,
      Qb: () => HY,
      Qc: () => FY.rb,
      Qd: () => yr,
      R: () => FY.s,
      Rb: () => cY,
      S: () => FY.u,
      Sb: () => FY.L,
      Sd: () => VY,
      Tc: () => LY,
      Td: () => xY,
      W: () => FY.y,
      Wb: () => zY,
      Wd: () => jY,
      Xb: () => SY,
      Xc: () => FY.yb,
      Zb: () => Ir,
      Zc: () => FY.Ab,
      Zd: () => fY,
      _: () => uY,
      _c: () => FY.Cb,
      ac: () => mY,
      ad: () => FY.Jb,
      ae: () => gY,
      c: () => Yr,
      cb: () => EY,
      cd: () => FY.Mb,
      dc: () => vr,
      ed: () => FY.Ob,
      ee: () => hY,
      f: () => QY,
      fb: () => FY.z,
      hb: () => FY.B,
      hc: () => AY.k,
      i: () => yY,
      id: () => BY,
      ie: () => Qr,
      je: () => iY,
      kb: () => wY,
      kc: () => WY,
      l: () => gr,
      lc: () => Dr,
      ld: () => FY.Qb,
      m: () => NY,
      nb: () => Ar,
      nc: () => FY.U,
      nd: () => FY.Sb,
      pd: () => FY.Wb,
      q: () => TY,
      qb: () => vY,
      r: () => FY.d,
      rc: () => FY.Y,
      rd: () => IY,
      s: () => ur,
      tc: () => FY._,
      u: () => KY,
      ub: () => FY.C,
      ud: () => oY,
      wb: () => qY,
      x: () => RY,
      xc: () => FY.ab,
      xd: () => Or,
      yc: () => FY.db,
      zc: () => FY.lb,
      zd: () => MY
    });
    var FY = DY(4382),
      AY = DY(2251);
    const IY = Math.round(1e3 / FY.Wb),
      RY = 4,
      OY = 2;

    function gY() {
      return crypto.getRandomValues(new Uint32Array(OY))
    }
    const aY = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      vY = 16,
      uY = {
        Draws: 1,
        NetAll: 2
      },
      sY = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function iY(YY) {
      return (YY.nametagsHidden ? lY.NametagsHidden : 0) | (YY.crouchToggle ? lY.CrouchToggle : 0) | (YY.bhopDisabled ? lY.BhopDisabled : 0) | (YY.disableBobbing ? lY.DisableBobbing : 0) | (YY.ezTowering ? lY.EzTowering : 0) | (YY.ezBridging ? lY.EzBridging : 0) | (YY.showChunkBorders ? lY.ShowChunkBorders : 0)
    }
    const yY = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      QY = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      oY = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      WY = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      EY = 5,
      mY = 4294967295;

    function VY(YY) {
      return (YY.showFog ? sY.ShowFog : 0) | (YY.lighting ? sY.Lighting : 0) | (YY.chunkFade ? sY.ChunkFade : 0)
    }
    const SY = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      lY = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      TY = {
        Release: 1,
        KeepTouches: 2
      },
      eY = {
        Point: 1,
        Stamped: 2
      },
      NY = {
        Add: 1,
        Clear: 2
      },
      BY = 1,
      cY = 8,
      KY = 16777215,
      HY = 4,
      zY = {
        Resume: 1
      },
      ZY = {
        Held: 1
      };

    function CY(YY, rY) {
      return (YY | rY << 8) >>> 0
    }

    function fY(YY) {
      return 255 & YY
    }

    function jY(YY) {
      return YY >>> 8
    }

    function hY(YY) {
      return YY + 3 & -4
    }
    const dY = 16777216,
      JY = 20;
    const MY = 8,
      wY = 8,
      bY = 16777216,
      XY = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      qY = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      pY = 16,
      kY = {
        Lost: 0,
        Gone: 1
      },
      GY = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function xY(YY) {
      return YY === GY.WorldgenSeed || YY === GY.Generate
    }
    const nY = 4,
      PY = 99,
      UY = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      LY = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      tY = 12,
      Yr = 16,
      rr = 4,
      Dr = 12,
      Fr = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Ar = 4,
      Ir = 8,
      Rr = 8,
      Or = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      gr = {
        Crit: 1,
        HitSelf: 2
      },
      ar = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      vr = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      ur = 12,
      sr = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      ir = 67108864;

    function yr(YY) {
      for (const [rY, DY] of Object.entries(FY.f))
        if (DY === YY) return rY;
      return `Unknown${YY}`
    }

    function Qr(YY) {
      return {
        status: YY[FY.B.Status],
        lastError: YY[FY.B.LastError],
        lastErrorDetail: YY[FY.B.LastErrorDetail],
        errorCount: YY[FY.B.ErrorCount],
        frameIndex: YY[FY.B.FrameIndex],
        tickIndex: YY[FY.B.TickIndex],
        renderPending: YY[FY.B.RenderPending],
        firstView: YY[FY.B.FirstView],
        chunksCancelled: YY[FY.B.ChunksCancelled]
      }
    }
  },
  4371: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY,
      h: () => IY,
      j: () => AY
    });
    var FY = DY(4376);

    function AY(YY) {
      return "none" !== YY
    }

    function IY(YY, rY) {
      if (!YY) return "none";
      switch (rY) {
        case FY.W.Drawn:
          return "drawn";
        case FY.W.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function RY(YY) {
      return "drawn" === YY
    }
  },
  4392: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      d: () => IY,
      g: () => RY,
      k: () => FY,
      l: () => OY
    });
    const FY = {
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
      AY = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      IY = {
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
      RY = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      OY = [16]
  },
  39761: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      g: () => IY,
      j: () => AY
    });
    let FY = null;

    function AY(YY) {
      FY = YY
    }

    function IY(YY) {
      FY === YY && (FY = null)
    }

    function RY() {
      var YY;
      null === (YY = FY) || void 0 === YY || YY()
    }
  },
  4396: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      g: () => RY,
      k: () => aY
    });
    var FY = DY(2251),
      AY = DY(2256);
    const IY = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function RY(YY) {
      return YY instanceof HTMLElement && (!!(YY.isContentEditable || YY instanceof HTMLTextAreaElement || YY instanceof HTMLSelectElement) || YY instanceof HTMLInputElement && !IY.has(YY.type))
    }

    function OY(YY) {
      let rY = null;
      const DY = DY => {
          const AY = RY(DY);
          AY !== rY && (rY = AY, YY(FY.j.UiCapture, FY.w.Keyboard, 0, 0, AY ? FY.w.Keyboard : 0))
        },
        AY = YY => {
          DY(YY.target)
        },
        IY = YY => {
          DY(YY.relatedTarget)
        },
        OY = () => {
          DY(document.activeElement)
        },
        gY = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", AY, gY), document.addEventListener("focusout", IY, gY), document.addEventListener("keydown", OY, gY), DY(document.activeElement), () => {
        document.removeEventListener("focusin", AY, gY), document.removeEventListener("focusout", IY, gY), document.removeEventListener("keydown", OY, gY)
      }
    }
    const gY = new Map;

    function aY(YY, rY) {
      var DY;
      let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      gY.set(FY, (null !== (DY = gY.get(FY)) && void 0 !== DY ? DY : 0) & ~YY | rY & YY);
      let IY = 0;
      for (const AY of gY.values()) IY |= AY;
      return (0, AY.D)(YY, IY & YY)
    }
  },
  36318: (YY, rY, DY) => {
    function FY(YY) {
      return YY.includes("Leaf Bed")
    }

    function AY(YY) {
      return / Bed(?: Head)?(?:\||$)/.test(YY) && !FY(YY)
    }

    function IY(YY) {
      return YY.includes(" Strongbed")
    }

    function RY(YY) {
      return FY(YY) || AY(YY) || IY(YY)
    }
    DY.d(rY, {
      e: () => RY,
      h: () => FY,
      i: () => IY,
      l: () => AY
    })
  },
  36314: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY
    });
    var FY = DY(36318),
      AY = DY(8830);
    const IY = [],
      RY = [],
      OY = [],
      gY = [];
    for (const vY of Object.keys(AY.m))(0, FY.h)(vY) ? IY.push(vY) : (0, FY.l)(vY) && RY.push(vY), (0, FY.i)(vY) && OY.push(vY), (vY.includes(" Bed Head") || vY.includes(" Strongbed Head")) && gY.push(vY);
    const aY = {
      leafBeds: IY,
      woolBeds: RY,
      strongBeds: OY,
      beds: [...IY, ...RY, ...OY],
      bedHeads: gY,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6041: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      e: () => AY,
      h: () => gY,
      j: () => IY,
      m: () => aY,
      n: () => FY,
      p: () => OY
    });
    let FY = function(YY) {
        return YY[YY.DEFAULT = 0] = "DEFAULT", YY[YY.BOAT = 1] = "BOAT", YY[YY.GLIDER = 2] = "GLIDER", YY[YY.BALLOON = 3] = "BALLOON", YY[YY.SLEEPING = 4] = "SLEEPING", YY[YY.RIDING_MOB = 5] = "RIDING_MOB", YY[YY.CAR = 6] = "CAR", YY[YY.HOVERCRAFT = 7] = "HOVERCRAFT", YY
      }({}),
      AY = function(YY) {
        return YY[YY.WOOD = 0] = "WOOD", YY[YY.OBSIDIAN = 1] = "OBSIDIAN", YY[YY.SPEED = 2] = "SPEED", YY
      }({}),
      IY = function(YY) {
        return YY[YY.WOOD = 0] = "WOOD", YY[YY.IRON = 1] = "IRON", YY[YY.GOLD = 2] = "GOLD", YY[YY.DIAMOND = 3] = "DIAMOND", YY
      }({}),
      RY = function(YY) {
        return YY[YY.YELLOW = 0] = "YELLOW", YY[YY.WHITE = 1] = "WHITE", YY[YY.RED = 2] = "RED", YY[YY.PURPLE = 3] = "PURPLE", YY[YY.PINK = 4] = "PINK", YY[YY.ORANGE = 5] = "ORANGE", YY[YY.MAGENTA = 6] = "MAGENTA", YY[YY.LIME = 7] = "LIME", YY[YY.LIGHT_GRAY = 8] = "LIGHT_GRAY", YY[YY.LIGHT_BLUE = 9] = "LIGHT_BLUE", YY[YY.GREEN = 10] = "GREEN", YY[YY.GRAY = 11] = "GRAY", YY[YY.CYAN = 12] = "CYAN", YY[YY.BROWN = 13] = "BROWN", YY[YY.BLUE = 14] = "BLUE", YY[YY.BLACK = 15] = "BLACK", YY
      }({}),
      OY = function(YY) {
        return YY[YY.ROTATION_1 = 0] = "ROTATION_1", YY[YY.ROTATION_2 = 1] = "ROTATION_2", YY[YY.ROTATION_3 = 2] = "ROTATION_3", YY[YY.ROTATION_4 = 3] = "ROTATION_4", YY
      }({}),
      gY = function(YY) {
        return YY[YY.KART = 0] = "KART", YY[YY.OFF_ROADER = 1] = "OFF_ROADER", YY[YY.CAR = 2] = "CAR", YY[YY.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", YY[YY.ARMORED_CAR = 4] = "ARMORED_CAR", YY[YY.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", YY[YY.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", YY[YY.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", YY
      }({});
    FY.DEFAULT, FY.BOAT, AY.SPEED, FY.GLIDER, IY.DIAMOND, FY.BALLOON, RY.BLACK, FY.SLEEPING, OY.ROTATION_4, FY.RIDING_MOB, FY.CAR, gY.MOONSTONE_MINING_DRILL, FY.HOVERCRAFT;
    let aY = function(YY) {
      return YY[YY.NORMAL = 0] = "NORMAL", YY[YY.GLIDING = 1] = "GLIDING", YY[YY.FLOATING = 2] = "FLOATING", YY
    }({})
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);