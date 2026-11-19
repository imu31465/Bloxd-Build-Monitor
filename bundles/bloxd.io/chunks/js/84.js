export const id = 84;
export const ids = [84];
export const modules = {
  39650: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      startWasmPadGameplay: () => LD
    });
    cD(39652);
    var ID = cD(39661),
      pD = cD(39674),
      iD = cD(1928),
      fD = cD(39680),
      bD = cD(4585),
      QD = cD(4571),
      wD = cD(39688),
      SD = cD(39692),
      BD = cD(4590),
      yD = cD(39752),
      MD = cD(2343),
      tD = cD(8555),
      ZD = cD(39668),
      oD = cD(8534);
    const vD = DD => {
        const CD = BD.c.indexOf(DD);
        if (CD < 0) throw new Error(`No core action "${DD}"`);
        return CD
      },
      ND = vD("primary-fire"),
      gD = vD("alt-fire"),
      XD = vD("mid-fire"),
      mD = vD("jump"),
      nD = vD("ReloadGun"),
      OD = vD("SwapCameraZoom"),
      PD = vD("TouchAction1"),
      HD = {
        SpecialAction1: vD("SpecialAction1"),
        SpecialAction2: vD("SpecialAction2")
      },
      UD = (DD, CD) => {
        (0, MD.t)(bD.E.PadAction, DD, 0, 0, (0, MD.r)(CD, performance.now()))
      },
      xD = DD => {
        UD(DD, fD.Kd.Down)
      },
      qD = DD => {
        UD(DD, 0)
      },
      JD = DD => {
        xD(DD), qD(DD)
      },
      KD = () => {
        const DD = (0, SD.g)();
        return null !== DD && void 0 !== DD && DD.isCoreRunning ? DD : null
      },
      aD = DD => fD.s.playerFlags(DD.api.apiView, 0),
      VD = DD => null !== DD && fD.s.targetBlockId(DD.api.apiView, 0) !== fD.qd,
      zD = () => {
        const DD = (0, tD.c)(),
          CD = new ZD.c;
        let cD = !1;
        const ID = (DD, CD) => {
            (0, MD.t)(bD.E.PadLook, fD.Sd.Rate, DD, CD, 0)
          },
          pD = () => {
            cD = !1, CD.reset(), ID(0, 0)
          };
        return {
          update: (pD, iD, QD) => {
            cD || (DD.discardPending(), cD = !0);
            const wD = (0, ZD.t)(CD, pD, iD, QD, performance.now());
            ID(wD.yawRadPerSec, wD.pitchRadPerSec);
            const SD = DD.drainLookDelta();
            0 === SD.Qq && 0 === SD.wq || (0, MD.t)(bD.E.PadLook, fD.Sd.Gyro, SD.Qq, SD.wq, 0)
          },
          release: pD,
          uninstall: pD
        }
      },
      jD = () => {
        const DD = KD();
        return null !== DD && 0 !== (aD(DD) & fD.Zd.PadSneakToggled)
      },
      lD = () => {
        const DD = (DD => {
          const CD = DD => function() {
            return (0, yD.b)(), DD(...arguments)
          };
          return {
            primaryFireDown: CD((() => (xD(ND), 0))),
            primaryFireUp: CD((() => {
              qD(ND)
            })),
            altFireDown: CD((() => (xD(gD), 0))),
            altFireUp: CD((() => {
              qD(gD)
            })),
            jumpDown: CD((() => {
              JD(mD)
            })),
            specialActionDown: CD((DD => {
              xD(HD[DD])
            })),
            specialActionUp: CD((DD => {
              qD(HD[DD])
            })),
            reloadGun: CD((() => {
              JD(nD)
            })),
            dropItem: CD((DD => {
              UD(fD.Md.Drop, fD.Kd.Down | (DD ? fD.Kd.Stack : 0))
            })),
            swapCameraZoom: CD((() => {
              JD(OD)
            })),
            pickBlock: CD((() => (JD(XD), VD(DD()))))
          }
        })(KD);
        let CD = !1,
          cD = null;
        const ID = () => {
          var DD;
          null === (DD = cD) || void 0 === DD || DD(), cD = null
        };
        return {
          bodies: () => DD,
          look: zD(),
          move: (DD, cD) => {
            var pD;
            ID();
            const {
              bits: iD,
              flips: bD
            } = (DD => {
              if (null === DD) return {
                bits: fD.Od.Peek,
                flips: 0
              };
              const CD = DD.sneakHeld ? fD.Od.SneakHeld : 0;
              return "hold" === DD.mode ? {
                bits: CD | fD.Od.SneakHoldMode,
                flips: DD.sneakTogglePressed ? 1 : 0
              } : {
                bits: CD,
                flips: DD.sneakPressed || DD.sneakTogglePressed ? 1 : 0
              }
            })(cD);
            null !== (pD = KD()) && void 0 !== pD && pD.padMove(DD.x, DD.y, DD.magnitude, DD.headingOffset, (DD => fD.Od.Active | (DD.jumpHeld ? fD.Od.JumpHeld : 0) | (DD.jumpPressed ? fD.Od.JumpPressed : 0) | (DD.running ? fD.Od.Running : 0) | (DD.sprintHeld ? fD.Od.SprintHeld : 0))(DD) | iD, bD) && (CD = !0), (0, oD.g)(jD())
          },
          stopMoving: () => {
            var DD;
            CD && (CD = !(null !== (DD = KD()) && void 0 !== DD && DD.padMove(0, 0, 0, 0, 0, 0)), ID(), cD = (0, QD.w)((() => {
              ID(), (0, oD.g)(jD())
            })))
          },
          uninstall: ID,
          deviceChanged: DD => {
            var cD;
            "touch" === DD ? ((0, oD.g)(!1), null !== (cD = KD()) && void 0 !== cD && cD.padMove(0, 0, 0, 0, fD.Od.EndToggle, 0) && (CD = !1)) : "gamepad" === DD && (0, oD.g)(jD())
          },
          hasPlayer: () => null !== KD(),
          isPlayerDead: () => {
            var DD;
            return !1 === (null === (DD = KD()) || void 0 === DD ? void 0 : DD.localPlayerAlive())
          },
          isReplayMode: () => {
            const DD = KD();
            return null !== DD && 0 !== (aD(DD) & fD.Zd.Replay)
          },
          isFreeCameraOn: () => {
            const DD = KD();
            return null !== DD && 0 !== (aD(DD) & fD.Zd.FreeCam)
          },
          targetsBlock: () => VD(KD()),
          selectedSlotEmpty: () => {
            var DD;
            return !(null !== (DD = KD()) && void 0 !== DD && DD.items.Lb())
          },
          pickBlockAllowed: () => !!iD.d.get("creative") && !!iD.d.get("canPickBlocks"),
          scrollHotbar: DD => {
            UD(fD.Md.Hotbar, fD.Kd.Down | (DD > 0 ? fD.Kd.Next : 0))
          },
          hasFullInventory: wD.m,
          hasLobbyLeaderboard: () => !!iD.d.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var DD, CD, cD, ID;
            const pD = KD();
            return {
              holdingGun: !1 !== (null === pD || void 0 === pD ? void 0 : pD.localPlayerAlive()) && "Gun" === (null === pD || void 0 === pD || null === (DD = pD.items.Lb()) || void 0 === DD || null === (CD = DD.typeObj) || void 0 === CD ? void 0 : CD.type),
              customButtons: null !== (cD = iD.d.get("customButtons")) && void 0 !== cD ? cD : null,
              touchscreenActionButton: null !== (ID = iD.d.get("touchscreenActionButton")) && void 0 !== ID ? ID : null
            }
          },
          pressTouchButton: DD => {
            DD ? xD(PD) : qD(PD)
          }
        }
      },
      LD = () => {
        const DD = (0, pD.d)(lD()),
          CD = (0, ID.b)(),
          cD = null;
        return () => {
          DD(), CD(), null === cD || void 0 === cD || cD()
        }
      }
  },
  4585: (DD, CD, cD) => {
    cD.d(CD, {
      $: () => HD,
      A: () => iD,
      Bb: () => nD,
      E: () => tD,
      Eb: () => mD,
      F: () => sD,
      Hb: () => KD,
      I: () => wD,
      Lb: () => TD,
      M: () => ZD,
      Ob: () => VD,
      Q: () => QD,
      Sb: () => jD,
      T: () => yD,
      Wb: () => lD,
      X: () => BD,
      Xb: () => gD,
      Y: () => OD,
      Zb: () => XD,
      _b: () => RD,
      cc: () => pD,
      db: () => UD,
      dc: () => WD,
      e: () => YD,
      eb: () => PD,
      g: () => dD,
      hb: () => xD,
      j: () => SD,
      k: () => ND,
      kb: () => GD,
      l: () => kD,
      lb: () => LD,
      o: () => vD,
      pb: () => zD,
      qb: () => qD,
      r: () => oD,
      rb: () => aD,
      s: () => fD,
      tb: () => JD,
      v: () => bD,
      xb: () => MD,
      y: () => ID
    });
    const ID = 32,
      pD = 33.333333333333336,
      iD = {
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
      fD = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      bD = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      QD = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      wD = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      SD = {
        Look: 0,
        Remesh: 1
      },
      BD = 8,
      yD = 1,
      MD = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      tD = {
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
      ZD = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      oD = {
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
      vD = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      ND = 4,
      gD = 4,
      XD = 65535,
      mD = {
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
      nD = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      OD = 88,
      PD = 0,
      HD = 24,
      UD = 48,
      xD = 80,
      qD = {
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
      JD = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      KD = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      aD = {
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
      VD = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      zD = 65535,
      jD = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      lD = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      LD = 2,
      TD = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      GD = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      RD = {
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
      kD = {
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
      dD = {
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
      YD = 8,
      WD = {
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
      sD = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4571: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => qD,
      E: () => ND,
      I: () => fD,
      K: () => bD,
      N: () => HD,
      e: () => PD,
      f: () => XD,
      h: () => KD,
      i: () => JD,
      j: () => vD,
      m: () => nD,
      q: () => gD,
      t: () => mD,
      w: () => UD,
      z: () => xD
    });
    var ID = cD(4575);
    const pD = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let iD = pD;

    function fD(DD) {
      iD = null !== DD && void 0 !== DD ? DD : pD
    }

    function bD() {
      return iD
    }
    const QD = new Set,
      wD = new Set;
    let SD = -1;
    const BD = new Set,
      yD = new Set;
    let MD = 0,
      tD = 0;
    const ZD = new Set,
      oD = new Set;

    function vD(DD) {
      return QD.add(DD), () => {
        QD.delete(DD)
      }
    }

    function ND(DD, CD) {
      for (const ID of QD) try {
        ID(DD)
      } catch (cD) {
        CD(cD)
      }
    }

    function gD(DD) {
      return wD.add(DD), () => {
        wD.delete(DD)
      }
    }

    function XD(DD, CD) {
      const cD = SD < 0 ? 0 : DD - SD;
      SD = DD;
      for (const pD of wD) try {
        pD(cD)
      } catch (ID) {
        CD(ID)
      }
    }

    function mD(DD) {
      return BD.add(DD), () => {
        BD.delete(DD)
      }
    }

    function nD(DD) {
      return yD.add(DD), () => {
        yD.delete(DD)
      }
    }
    let OD = 0;

    function PD(DD) {
      OD += DD
    }

    function HD() {
      const DD = OD;
      return OD = 0, DD
    }

    function UD(DD) {
      return ZD.add(DD), () => {
        ZD.delete(DD)
      }
    }

    function xD(DD) {
      return oD.add(DD), () => {
        oD.delete(DD)
      }
    }

    function qD() {
      MD = 0, tD = 0, SD = -1
    }

    function JD(DD, CD) {
      if ("paced" === DD) return tD += CD, null;
      if ("drawn" !== DD && "skipped" !== DD) return null;
      const cD = CD + tD;
      return tD = 0, cD
    }

    function KD(DD, CD, cD, pD) {
      const iD = (0, ID.e)(CD),
        fD = DD > 0 ? performance.now() : 0;
      for (let ID = 0; ID < DD; ID++)
        for (const DD of ZD) try {
          DD()
        } catch (bD) {
          pD(bD)
        }
      if (DD > 0 && PD(performance.now() - fD), null !== cD) {
        for (const DD of BD) try {
          DD(cD)
        } catch (bD) {
          pD(bD)
        }
        MD += cD
      }
      if ("drawn" === CD) {
        const DD = MD;
        MD = 0;
        for (const CD of yD) try {
          CD(DD)
        } catch (bD) {
          pD(bD)
        }
      }
      for (const ID of oD) try {
        ID(DD, iD)
      } catch (bD) {
        pD(bD)
      }
    }
  },
  4581: (DD, CD, cD) => {
    cD.d(CD, {
      $d: () => jD,
      A: () => qD,
      Ac: () => ID.pb,
      B: () => fD,
      Bd: () => TD,
      Cb: () => CC,
      D: () => aD,
      Dc: () => MC,
      Dd: () => WD,
      E: () => yC,
      Fb: () => pD.g,
      Fc: () => wC,
      Gc: () => IC,
      Gd: () => dD,
      H: () => rD,
      Hc: () => ID.qb,
      Ib: () => PD,
      Kc: () => ID.rb,
      Kd: () => ED,
      L: () => ID.g,
      Lb: () => LD,
      M: () => wD,
      Nb: () => JD,
      Nc: () => ID.tb,
      Nd: () => sD,
      O: () => ID.j,
      Pc: () => AD,
      Q: () => ID.k,
      Qc: () => ID.Bb,
      R: () => uD,
      Rb: () => xD,
      Rd: () => fC,
      Sd: () => tC,
      Tc: () => ID.Eb,
      U: () => ID.r,
      Ub: () => ID.M,
      Uc: () => ID.Hb,
      Wd: () => XD,
      X: () => ID.s,
      Xb: () => KD,
      Xc: () => ID.Ob,
      Y: () => ID.v,
      Yc: () => ID.Sb,
      Yd: () => eD,
      Zb: () => mD,
      ab: () => BD,
      ad: () => ID.Wb,
      bb: () => ND,
      bc: () => iC,
      db: () => ID.y,
      de: () => zD,
      e: () => DC,
      ed: () => UD,
      fc: () => gD,
      h: () => ZD,
      hb: () => ID.A,
      hd: () => ID.Xb,
      he: () => VD,
      ic: () => SC,
      id: () => ID.Zb,
      ie: () => QD,
      jc: () => pD.o,
      je: () => lD,
      k: () => tD,
      kb: () => RD,
      kc: () => vD,
      kd: () => ID.cc,
      lb: () => pC,
      le: () => ZC,
      n: () => QC,
      nc: () => cC,
      nd: () => iD,
      oe: () => MD,
      pb: () => SD,
      pd: () => oD,
      q: () => HD,
      qc: () => ID.Y,
      s: () => OD,
      sc: () => ID.$,
      tb: () => ID.E,
      td: () => bC,
      vb: () => YD,
      vc: () => ID.db,
      w: () => ID.e,
      wc: () => ID.eb,
      x: () => BC,
      xb: () => hD,
      xd: () => GD,
      yc: () => ID.hb,
      yd: () => kD,
      zb: () => FD
    });
    var ID = cD(4585),
      pD = cD(2338);
    const iD = Math.round(1e3 / ID.cc),
      fD = 4,
      bD = 2;

    function QD() {
      return crypto.getRandomValues(new Uint32Array(bD))
    }
    const wD = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      SD = 16,
      BD = {
        Draws: 1,
        NetAll: 2
      },
      yD = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function MD(DD) {
      return (DD.nametagsHidden ? nD.NametagsHidden : 0) | (DD.crouchToggle ? nD.CrouchToggle : 0) | (DD.bhopDisabled ? nD.BhopDisabled : 0) | (DD.disableBobbing ? nD.DisableBobbing : 0) | (DD.ezTowering ? nD.EzTowering : 0) | (DD.ezBridging ? nD.EzBridging : 0) | (DD.showChunkBorders ? nD.ShowChunkBorders : 0)
    }
    const tD = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      ZD = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      oD = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      vD = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      ND = 5,
      gD = 4294967295;

    function XD(DD) {
      return (DD.showFog ? yD.ShowFog : 0) | (DD.lighting ? yD.Lighting : 0) | (DD.chunkFade ? yD.ChunkFade : 0)
    }
    const mD = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      nD = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      OD = {
        Release: 1,
        KeepTouches: 2
      },
      PD = {
        Point: 1,
        Stamped: 2
      },
      HD = {
        Add: 1,
        Clear: 2
      },
      UD = 1,
      xD = 8,
      qD = 16777215,
      JD = 4,
      KD = {
        Resume: 1
      },
      aD = {
        Held: 1
      };

    function VD(DD, CD) {
      return (DD | CD << 8) >>> 0
    }

    function zD(DD) {
      return 255 & DD
    }

    function jD(DD) {
      return DD >>> 8
    }

    function lD(DD) {
      return DD + 3 & -4
    }
    const LD = 16777216,
      TD = 20;
    const GD = 8,
      RD = 8,
      kD = 16777216,
      dD = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      YD = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      WD = 16,
      sD = {
        Lost: 0,
        Gone: 1
      },
      ED = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function eD(DD) {
      return DD === ED.WorldgenSeed || DD === ED.Generate
    }
    const uD = 4,
      hD = 99,
      rD = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      AD = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      FD = 12,
      DC = 16,
      CC = 4,
      cC = 12,
      IC = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      pC = 4,
      iC = 8,
      fC = 8,
      bC = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      QC = {
        Crit: 1,
        HitSelf: 2
      },
      wC = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      SC = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      BC = 12,
      yC = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      MC = 67108864;

    function tC(DD) {
      for (const [CD, cD] of Object.entries(ID.g))
        if (cD === DD) return CD;
      return `Unknown${DD}`
    }

    function ZC(DD) {
      return {
        status: DD[ID.A.Status],
        lastError: DD[ID.A.LastError],
        lastErrorDetail: DD[ID.A.LastErrorDetail],
        errorCount: DD[ID.A.ErrorCount],
        frameIndex: DD[ID.A.FrameIndex],
        tickIndex: DD[ID.A.TickIndex],
        renderPending: DD[ID.A.RenderPending],
        firstView: DD[ID.A.FirstView],
        chunksCancelled: DD[ID.A.ChunksCancelled]
      }
    }
  },
  4575: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      c: () => iD,
      e: () => pD
    });
    var ID = cD(4581);

    function pD(DD) {
      return "none" !== DD
    }

    function iD(DD, CD) {
      if (!DD) return "none";
      switch (CD) {
        case ID.Y.Drawn:
          return "drawn";
        case ID.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function fD(DD) {
      return "drawn" === DD
    }
  },
  4590: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      e: () => iD,
      f: () => fD,
      j: () => ID,
      m: () => bD
    });
    const ID = {
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
      pD = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      iD = {
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
      fD = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      bD = [16]
  },
  39752: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      c: () => iD,
      g: () => pD
    });
    let ID = null;

    function pD(DD) {
      ID = DD
    }

    function iD(DD) {
      ID === DD && (ID = null)
    }

    function fD() {
      var DD;
      null === (DD = ID) || void 0 === DD || DD()
    }
  },
  4592: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD,
      g: () => fD,
      k: () => wD
    });
    var ID = cD(2338),
      pD = cD(2343);
    const iD = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function fD(DD) {
      return DD instanceof HTMLElement && (!!(DD.isContentEditable || DD instanceof HTMLTextAreaElement || DD instanceof HTMLSelectElement) || DD instanceof HTMLInputElement && !iD.has(DD.type))
    }

    function bD(DD) {
      let CD = null;
      const cD = cD => {
          const pD = fD(cD);
          pD !== CD && (CD = pD, DD(ID.k.UiCapture, ID.C.Keyboard, 0, 0, pD ? ID.C.Keyboard : 0))
        },
        pD = DD => {
          cD(DD.target)
        },
        iD = DD => {
          cD(DD.relatedTarget)
        },
        bD = () => {
          cD(document.activeElement)
        },
        QD = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", pD, QD), document.addEventListener("focusout", iD, QD), document.addEventListener("keydown", bD, QD), cD(document.activeElement), () => {
        document.removeEventListener("focusin", pD, QD), document.removeEventListener("focusout", iD, QD), document.removeEventListener("keydown", bD, QD)
      }
    }
    const QD = new Map;

    function wD(DD, CD) {
      var cD;
      let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      QD.set(ID, (null !== (cD = QD.get(ID)) && void 0 !== cD ? cD : 0) & ~DD | CD & DD);
      let iD = 0;
      for (const pD of QD.values()) iD |= pD;
      return (0, pD.y)(DD, iD & DD)
    }
  },
  36300: (DD, CD, cD) => {
    function ID(DD) {
      return DD.includes("Leaf Bed")
    }

    function pD(DD) {
      return / Bed(?: Head)?(?:\||$)/.test(DD) && !ID(DD)
    }

    function iD(DD) {
      return DD.includes(" Strongbed")
    }

    function fD(DD) {
      return ID(DD) || pD(DD) || iD(DD)
    }
    cD.d(CD, {
      b: () => fD,
      e: () => ID,
      h: () => iD,
      i: () => pD
    })
  },
  36292: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => wD
    });
    var ID = cD(36300),
      pD = cD(9141);
    const iD = [],
      fD = [],
      bD = [],
      QD = [];
    for (const SD of Object.keys(pD.n))(0, ID.e)(SD) ? iD.push(SD) : (0, ID.i)(SD) && fD.push(SD), (0, ID.h)(SD) && bD.push(SD), (SD.includes(" Bed Head") || SD.includes(" Strongbed Head")) && QD.push(SD);
    const wD = {
      leafBeds: iD,
      woolBeds: fD,
      strongBeds: bD,
      beds: [...iD, ...fD, ...bD],
      bedHeads: QD,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6212: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD,
      e: () => pD,
      i: () => QD,
      l: () => iD,
      n: () => wD,
      p: () => ID,
      q: () => bD
    });
    let ID = function(DD) {
        return DD[DD.DEFAULT = 0] = "DEFAULT", DD[DD.BOAT = 1] = "BOAT", DD[DD.GLIDER = 2] = "GLIDER", DD[DD.BALLOON = 3] = "BALLOON", DD[DD.SLEEPING = 4] = "SLEEPING", DD[DD.RIDING_MOB = 5] = "RIDING_MOB", DD[DD.CAR = 6] = "CAR", DD[DD.HOVERCRAFT = 7] = "HOVERCRAFT", DD
      }({}),
      pD = function(DD) {
        return DD[DD.WOOD = 0] = "WOOD", DD[DD.OBSIDIAN = 1] = "OBSIDIAN", DD[DD.SPEED = 2] = "SPEED", DD
      }({}),
      iD = function(DD) {
        return DD[DD.WOOD = 0] = "WOOD", DD[DD.IRON = 1] = "IRON", DD[DD.GOLD = 2] = "GOLD", DD[DD.DIAMOND = 3] = "DIAMOND", DD
      }({}),
      fD = function(DD) {
        return DD[DD.YELLOW = 0] = "YELLOW", DD[DD.WHITE = 1] = "WHITE", DD[DD.RED = 2] = "RED", DD[DD.PURPLE = 3] = "PURPLE", DD[DD.PINK = 4] = "PINK", DD[DD.ORANGE = 5] = "ORANGE", DD[DD.MAGENTA = 6] = "MAGENTA", DD[DD.LIME = 7] = "LIME", DD[DD.LIGHT_GRAY = 8] = "LIGHT_GRAY", DD[DD.LIGHT_BLUE = 9] = "LIGHT_BLUE", DD[DD.GREEN = 10] = "GREEN", DD[DD.GRAY = 11] = "GRAY", DD[DD.CYAN = 12] = "CYAN", DD[DD.BROWN = 13] = "BROWN", DD[DD.BLUE = 14] = "BLUE", DD[DD.BLACK = 15] = "BLACK", DD
      }({}),
      bD = function(DD) {
        return DD[DD.ROTATION_1 = 0] = "ROTATION_1", DD[DD.ROTATION_2 = 1] = "ROTATION_2", DD[DD.ROTATION_3 = 2] = "ROTATION_3", DD[DD.ROTATION_4 = 3] = "ROTATION_4", DD
      }({}),
      QD = function(DD) {
        return DD[DD.KART = 0] = "KART", DD[DD.OFF_ROADER = 1] = "OFF_ROADER", DD[DD.CAR = 2] = "CAR", DD[DD.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", DD[DD.ARMORED_CAR = 4] = "ARMORED_CAR", DD[DD.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", DD[DD.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", DD[DD.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", DD
      }({});
    ID.DEFAULT, ID.BOAT, pD.SPEED, ID.GLIDER, iD.DIAMOND, ID.BALLOON, fD.BLACK, ID.SLEEPING, bD.ROTATION_4, ID.RIDING_MOB, ID.CAR, QD.MOONSTONE_MINING_DRILL, ID.HOVERCRAFT;
    let wD = function(DD) {
      return DD[DD.NORMAL = 0] = "NORMAL", DD[DD.GLIDING = 1] = "GLIDING", DD[DD.FLOATING = 2] = "FLOATING", DD
    }({})
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);