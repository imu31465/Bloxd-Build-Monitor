export const id = 84;
export const ids = [84];
export const modules = {
  39680: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      startWasmPadGameplay: () => dz
    });
    sz(39683);
    var Fz = sz(39686),
      Wz = sz(39702),
      Xz = sz(1884),
      Oz = sz(39714),
      oz = sz(4436),
      vz = sz(4419),
      Uz = sz(39716),
      Kz = sz(39720),
      uz = sz(4446),
      Nz = sz(39797),
      bz = sz(2277),
      wz = sz(8351),
      Dz = sz(39688),
      gz = sz(8325);
    const Hz = zz => {
        const tz = uz.b.indexOf(zz);
        if (tz < 0) throw new Error(`No core action "${zz}"`);
        return tz
      },
      Bz = Hz("primary-fire"),
      Pz = Hz("alt-fire"),
      rz = Hz("mid-fire"),
      Yz = Hz("jump"),
      xz = Hz("ReloadGun"),
      mz = Hz("SwapCameraZoom"),
      Jz = Hz("TouchAction1"),
      Iz = {
        SpecialAction1: Hz("SpecialAction1"),
        SpecialAction2: Hz("SpecialAction2")
      },
      Cz = (zz, tz) => {
        (0, bz.r)(oz.G.PadAction, zz, 0, 0, (0, bz.p)(tz, performance.now()))
      },
      ez = zz => {
        Cz(zz, Oz.Ad.Down)
      },
      Zz = zz => {
        Cz(zz, 0)
      },
      Gz = zz => {
        ez(zz), Zz(zz)
      },
      Tz = () => {
        const zz = (0, Kz.f)();
        return null !== zz && void 0 !== zz && zz.isCoreRunning ? zz : null
      },
      cz = zz => Oz.t.playerFlags(zz.api.apiView, 0),
      jz = zz => null !== zz && Oz.t.targetBlockId(zz.api.apiView, 0) !== Oz.fd,
      Az = () => {
        const zz = (0, wz.b)(),
          tz = new Dz.d;
        let sz = !1;
        const Fz = (zz, tz) => {
            (0, bz.r)(oz.G.PadLook, Oz.Gd.Rate, zz, tz, 0)
          },
          Wz = () => {
            sz = !1, tz.reset(), Fz(0, 0)
          };
        return {
          update: (Wz, Xz, vz) => {
            sz || (zz.discardPending(), sz = !0);
            const Uz = (0, Dz.o)(tz, Wz, Xz, vz, performance.now());
            Fz(Uz.yawRadPerSec, Uz.pitchRadPerSec);
            const Kz = zz.drainLookDelta();
            0 === Kz.mJ && 0 === Kz.eJ || (0, bz.r)(oz.G.PadLook, Oz.Gd.Gyro, Kz.mJ, Kz.eJ, 0)
          },
          release: Wz,
          uninstall: Wz
        }
      },
      yz = () => {
        const zz = Tz();
        return null !== zz && 0 !== (cz(zz) & Oz.Nd.PadSneakToggled)
      },
      Mz = () => {
        const zz = (zz => {
          const tz = zz => function() {
            return (0, Nz.b)(), zz(...arguments)
          };
          return {
            primaryFireDown: tz((() => (ez(Bz), 0))),
            primaryFireUp: tz((() => {
              Zz(Bz)
            })),
            altFireDown: tz((() => (ez(Pz), 0))),
            altFireUp: tz((() => {
              Zz(Pz)
            })),
            jumpDown: tz((() => {
              Gz(Yz)
            })),
            specialActionDown: tz((zz => {
              ez(Iz[zz])
            })),
            specialActionUp: tz((zz => {
              Zz(Iz[zz])
            })),
            reloadGun: tz((() => {
              Gz(xz)
            })),
            dropItem: tz((zz => {
              Cz(Oz.Dd.Drop, Oz.Ad.Down | (zz ? Oz.Ad.Stack : 0))
            })),
            swapCameraZoom: tz((() => {
              Gz(mz)
            })),
            pickBlock: tz((() => (Gz(rz), jz(zz()))))
          }
        })(Tz);
        let tz = !1,
          sz = null;
        const Fz = () => {
          var zz;
          null === (zz = sz) || void 0 === zz || zz(), sz = null
        };
        return {
          bodies: () => zz,
          look: Az(),
          move: (zz, sz) => {
            var Wz;
            Fz();
            const {
              bits: Xz,
              flips: oz
            } = (zz => {
              if (null === zz) return {
                bits: Oz.Ed.Peek,
                flips: 0
              };
              const tz = zz.sneakHeld ? Oz.Ed.SneakHeld : 0;
              return "hold" === zz.mode ? {
                bits: tz | Oz.Ed.SneakHoldMode,
                flips: zz.sneakTogglePressed ? 1 : 0
              } : {
                bits: tz,
                flips: zz.sneakPressed || zz.sneakTogglePressed ? 1 : 0
              }
            })(sz);
            null !== (Wz = Tz()) && void 0 !== Wz && Wz.padMove(zz.x, zz.y, zz.magnitude, zz.headingOffset, (zz => Oz.Ed.Active | (zz.jumpHeld ? Oz.Ed.JumpHeld : 0) | (zz.jumpPressed ? Oz.Ed.JumpPressed : 0) | (zz.running ? Oz.Ed.Running : 0) | (zz.sprintHeld ? Oz.Ed.SprintHeld : 0))(zz) | Xz, oz) && (tz = !0), (0, gz.g)(yz())
          },
          stopMoving: () => {
            var zz;
            tz && (tz = !(null !== (zz = Tz()) && void 0 !== zz && zz.padMove(0, 0, 0, 0, 0, 0)), Fz(), sz = (0, vz.y)((() => {
              Fz(), (0, gz.g)(yz())
            })))
          },
          uninstall: Fz,
          deviceChanged: zz => {
            var sz;
            "touch" === zz ? ((0, gz.g)(!1), null !== (sz = Tz()) && void 0 !== sz && sz.padMove(0, 0, 0, 0, Oz.Ed.EndToggle, 0) && (tz = !1)) : "gamepad" === zz && (0, gz.g)(yz())
          },
          hasPlayer: () => null !== Tz(),
          isPlayerDead: () => {
            var zz;
            return !1 === (null === (zz = Tz()) || void 0 === zz ? void 0 : zz.localPlayerAlive())
          },
          isReplayMode: () => {
            const zz = Tz();
            return null !== zz && 0 !== (cz(zz) & Oz.Nd.Replay)
          },
          isFreeCameraOn: () => {
            const zz = Tz();
            return null !== zz && 0 !== (cz(zz) & Oz.Nd.FreeCam)
          },
          targetsBlock: () => jz(Tz()),
          selectedSlotEmpty: () => {
            var zz;
            return !(null !== (zz = Tz()) && void 0 !== zz && zz.items.po())
          },
          pickBlockAllowed: () => !!Xz.e.get("creative") && !!Xz.e.get("canPickBlocks"),
          scrollHotbar: zz => {
            Cz(Oz.Dd.Hotbar, Oz.Ad.Down | (zz > 0 ? Oz.Ad.Next : 0))
          },
          hasFullInventory: Uz.o,
          hasLobbyLeaderboard: () => !!Xz.e.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var zz, tz, sz, Fz;
            const Wz = Tz();
            return {
              holdingGun: !1 !== (null === Wz || void 0 === Wz ? void 0 : Wz.localPlayerAlive()) && "Gun" === (null === Wz || void 0 === Wz || null === (zz = Wz.items.po()) || void 0 === zz || null === (tz = zz.typeObj) || void 0 === tz ? void 0 : tz.type),
              customButtons: null !== (sz = Xz.e.get("customButtons")) && void 0 !== sz ? sz : null,
              touchscreenActionButton: null !== (Fz = Xz.e.get("touchscreenActionButton")) && void 0 !== Fz ? Fz : null
            }
          },
          pressTouchButton: zz => {
            zz ? ez(Jz) : Zz(Jz)
          }
        }
      },
      dz = () => {
        const zz = (0, Wz.c)(Mz()),
          tz = (0, Fz.c)(),
          sz = null;
        return () => {
          zz(), tz(), null === sz || void 0 === sz || sz()
        }
      }
  },
  4436: (zz, tz, sz) => {
    sz.d(tz, {
      D: () => Xz,
      Db: () => Gz,
      G: () => wz,
      Gb: () => bz,
      Hb: () => xz,
      Ib: () => Yz,
      J: () => az,
      Jb: () => Tz,
      K: () => Uz,
      Nb: () => hz,
      O: () => Dz,
      Ob: () => jz,
      R: () => vz,
      Sb: () => yz,
      V: () => Nz,
      Wb: () => Mz,
      Xb: () => Pz,
      Y: () => uz,
      _b: () => rz,
      ab: () => mz,
      ac: () => kz,
      c: () => lz,
      cb: () => Iz,
      dc: () => Wz,
      eb: () => Cz,
      fc: () => nz,
      g: () => Lz,
      gb: () => Jz,
      j: () => Kz,
      jb: () => ez,
      n: () => Bz,
      nb: () => Qz,
      q: () => iz,
      qb: () => dz,
      r: () => Hz,
      s: () => gz,
      tb: () => Az,
      v: () => Oz,
      vb: () => Zz,
      x: () => oz,
      z: () => Fz,
      zb: () => cz
    });
    const Fz = 32,
      Wz = 33.333333333333336,
      Xz = {
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
      Oz = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      oz = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      vz = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Uz = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Kz = {
        Look: 0,
        Remesh: 1
      },
      uz = 8,
      Nz = 1,
      bz = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      wz = {
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
      Dz = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      gz = {
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
      Hz = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Bz = 4,
      Pz = 4,
      rz = 65535,
      Yz = {
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
      xz = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      mz = 88,
      Jz = 0,
      Iz = 24,
      Cz = 48,
      ez = 80,
      Zz = {
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
      Gz = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Tz = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      cz = {
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
      jz = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Az = 65535,
      yz = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Mz = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      dz = 2,
      hz = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Qz = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      kz = {
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
      iz = {
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
      Lz = {
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
      lz = 8,
      nz = {
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
      az = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4419: (zz, tz, sz) => {
    sz.d(tz, {
      C: () => Zz,
      E: () => Bz,
      I: () => Oz,
      L: () => oz,
      N: () => Iz,
      d: () => Jz,
      h: () => rz,
      i: () => Tz,
      k: () => Gz,
      n: () => Hz,
      q: () => xz,
      t: () => Pz,
      x: () => Yz,
      y: () => Cz,
      z: () => ez
    });
    var Fz = sz(4427);
    const Wz = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Xz = Wz;

    function Oz(zz) {
      Xz = null !== zz && void 0 !== zz ? zz : Wz
    }

    function oz() {
      return Xz
    }
    const vz = new Set,
      Uz = new Set;
    let Kz = -1;
    const uz = new Set,
      Nz = new Set;
    let bz = 0,
      wz = 0;
    const Dz = new Set,
      gz = new Set;

    function Hz(zz) {
      return vz.add(zz), () => {
        vz.delete(zz)
      }
    }

    function Bz(zz, tz) {
      for (const Fz of vz) try {
        Fz(zz)
      } catch (sz) {
        tz(sz)
      }
    }

    function Pz(zz) {
      return Uz.add(zz), () => {
        Uz.delete(zz)
      }
    }

    function rz(zz, tz) {
      const sz = Kz < 0 ? 0 : zz - Kz;
      Kz = zz;
      for (const Wz of Uz) try {
        Wz(sz)
      } catch (Fz) {
        tz(Fz)
      }
    }

    function Yz(zz) {
      return uz.add(zz), () => {
        uz.delete(zz)
      }
    }

    function xz(zz) {
      return Nz.add(zz), () => {
        Nz.delete(zz)
      }
    }
    let mz = 0;

    function Jz(zz) {
      mz += zz
    }

    function Iz() {
      const zz = mz;
      return mz = 0, zz
    }

    function Cz(zz) {
      return Dz.add(zz), () => {
        Dz.delete(zz)
      }
    }

    function ez(zz) {
      return gz.add(zz), () => {
        gz.delete(zz)
      }
    }

    function Zz() {
      bz = 0, wz = 0, Kz = -1
    }

    function Gz(zz, tz) {
      if ("paced" === zz) return wz += tz, null;
      if ("drawn" !== zz && "skipped" !== zz) return null;
      const sz = tz + wz;
      return wz = 0, sz
    }

    function Tz(zz, tz, sz, Wz) {
      const Xz = (0, Fz.j)(tz),
        Oz = zz > 0 ? performance.now() : 0;
      for (let Fz = 0; Fz < zz; Fz++)
        for (const zz of Dz) try {
          zz()
        } catch (oz) {
          Wz(oz)
        }
      if (zz > 0 && Jz(performance.now() - Oz), null !== sz) {
        for (const zz of uz) try {
          zz(sz)
        } catch (oz) {
          Wz(oz)
        }
        bz += sz
      }
      if ("drawn" === tz) {
        const zz = bz;
        bz = 0;
        for (const tz of Nz) try {
          tz(zz)
        } catch (oz) {
          Wz(oz)
        }
      }
      for (const Fz of gz) try {
        Fz(zz, Xz)
      } catch (oz) {
        Wz(oz)
      }
    }
  },
  4432: (zz, tz, sz) => {
    sz.d(tz, {
      $: () => Fz.x,
      $b: () => Hz,
      A: () => Oz,
      Ab: () => Jz,
      B: () => cz,
      Bb: () => dz,
      Cd: () => iz,
      Dc: () => Ft,
      Dd: () => hz,
      Eb: () => Gz,
      Ec: () => Fz.vb,
      F: () => Nt,
      Fd: () => nz,
      Gc: () => Fz.zb,
      Hb: () => ez,
      I: () => pz,
      Ib: () => Fz.O,
      Kb: () => Tz,
      Kc: () => Fz.Db,
      L: () => Fz.g,
      Lb: () => Yz,
      Lc: () => fz,
      M: () => Uz,
      Md: () => Lz,
      Ob: () => Xt,
      Oc: () => Fz.Hb,
      P: () => Fz.j,
      Pd: () => qz,
      Rc: () => Fz.Ib,
      S: () => Fz.n,
      Sb: () => Pz,
      Sd: () => az,
      Tc: () => Fz.Jb,
      Ud: () => Ot,
      V: () => Vz,
      Vc: () => Fz.Ob,
      Wb: () => Kt,
      Wd: () => wt,
      X: () => Fz.s,
      Y: () => Fz.v,
      Yc: () => Fz.Sb,
      Zb: () => Wz.m,
      _d: () => rz,
      ab: () => uz,
      ad: () => Fz.Wb,
      bc: () => st,
      be: () => Sz,
      cc: () => Fz.ab,
      ce: () => yz,
      d: () => zt,
      de: () => Az,
      e: () => Dz,
      eb: () => Bz,
      ec: () => Fz.cb,
      ed: () => Cz,
      h: () => wz,
      hb: () => Fz.z,
      he: () => jz,
      ib: () => Fz.D,
      ic: () => Fz.eb,
      id: () => Fz.Xb,
      je: () => vz,
      kb: () => kz,
      kd: () => Fz._b,
      ke: () => Mz,
      l: () => vt,
      lc: () => Fz.gb,
      mb: () => Wt,
      ne: () => Dt,
      o: () => Iz,
      od: () => Fz.dc,
      pb: () => Kz,
      pc: () => Fz.jb,
      pe: () => bz,
      qb: () => Fz.G,
      qd: () => Xz,
      rb: () => lz,
      s: () => mz,
      sb: () => Rz,
      sd: () => gz,
      tc: () => Fz.tb,
      ub: () => Ez,
      v: () => Fz.c,
      vb: () => tt,
      vd: () => ot,
      w: () => ut,
      wc: () => bt,
      xb: () => Wz.f,
      y: () => Zz,
      zc: () => Ut,
      zd: () => Qz
    });
    var Fz = sz(4436),
      Wz = sz(2273);
    const Xz = Math.round(1e3 / Fz.dc),
      Oz = 4,
      oz = 2;

    function vz() {
      return crypto.getRandomValues(new Uint32Array(oz))
    }
    const Uz = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Kz = 16,
      uz = {
        Draws: 1,
        NetAll: 2
      },
      Nz = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function bz(zz) {
      return (zz.nametagsHidden ? xz.NametagsHidden : 0) | (zz.crouchToggle ? xz.CrouchToggle : 0) | (zz.bhopDisabled ? xz.BhopDisabled : 0) | (zz.disableBobbing ? xz.DisableBobbing : 0) | (zz.ezTowering ? xz.EzTowering : 0) | (zz.ezBridging ? xz.EzBridging : 0) | (zz.showChunkBorders ? xz.ShowChunkBorders : 0)
    }
    const wz = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Dz = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      gz = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Hz = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Bz = 5,
      Pz = 4294967295;

    function rz(zz) {
      return (zz.showFog ? Nz.ShowFog : 0) | (zz.lighting ? Nz.Lighting : 0) | (zz.chunkFade ? Nz.ChunkFade : 0)
    }
    const Yz = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      xz = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      mz = {
        Release: 1,
        KeepTouches: 2
      },
      Jz = {
        Point: 1,
        Stamped: 2
      },
      Iz = {
        Add: 1,
        Clear: 2
      },
      Cz = 1,
      ez = 8,
      Zz = 16777215,
      Gz = 4,
      Tz = {
        Resume: 1
      },
      cz = {
        Held: 1
      };

    function jz(zz, tz) {
      return (zz | tz << 8) >>> 0
    }

    function Az(zz) {
      return 255 & zz
    }

    function yz(zz) {
      return zz >>> 8
    }

    function Mz(zz) {
      return zz + 3 & -4
    }
    const dz = 16777216,
      hz = 20;
    const Qz = 8,
      kz = 8,
      iz = 16777216,
      Lz = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      lz = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      nz = 16,
      az = {
        Lost: 0,
        Gone: 1
      },
      qz = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Sz(zz) {
      return zz === qz.WorldgenSeed || zz === qz.Generate
    }
    const Vz = 4,
      Rz = 99,
      pz = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      fz = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Ez = 12,
      zt = 16,
      tt = 4,
      st = 12,
      Ft = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Wt = 4,
      Xt = 8,
      Ot = 8,
      ot = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      vt = {
        Crit: 1,
        HitSelf: 2
      },
      Ut = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Kt = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      ut = 12,
      Nt = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      bt = 67108864;

    function wt(zz) {
      for (const [tz, sz] of Object.entries(Fz.g))
        if (sz === zz) return tz;
      return `Unknown${zz}`
    }

    function Dt(zz) {
      return {
        status: zz[Fz.D.Status],
        lastError: zz[Fz.D.LastError],
        lastErrorDetail: zz[Fz.D.LastErrorDetail],
        errorCount: zz[Fz.D.ErrorCount],
        frameIndex: zz[Fz.D.FrameIndex],
        tickIndex: zz[Fz.D.TickIndex],
        renderPending: zz[Fz.D.RenderPending],
        firstView: zz[Fz.D.FirstView],
        chunksCancelled: zz[Fz.D.ChunksCancelled]
      }
    }
  },
  4427: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      h: () => Xz,
      j: () => Wz
    });
    var Fz = sz(4432);

    function Wz(zz) {
      return "none" !== zz
    }

    function Xz(zz, tz) {
      if (!zz) return "none";
      switch (tz) {
        case Fz.$.Drawn:
          return "drawn";
        case Fz.$.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Oz(zz) {
      return "drawn" === zz
    }
  },
  4446: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      f: () => Xz,
      j: () => Oz,
      n: () => Fz,
      q: () => oz
    });
    const Fz = {
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
      Wz = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Xz = {
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
      Oz = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      oz = [16]
  },
  39797: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      c: () => Xz,
      e: () => Wz
    });
    let Fz = null;

    function Wz(zz) {
      Fz = zz
    }

    function Xz(zz) {
      Fz === zz && (Fz = null)
    }

    function Oz() {
      var zz;
      null === (zz = Fz) || void 0 === zz || zz()
    }
  },
  4450: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      i: () => Oz,
      k: () => Uz
    });
    var Fz = sz(2273),
      Wz = sz(2277);
    const Xz = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Oz(zz) {
      return zz instanceof HTMLElement && (!!(zz.isContentEditable || zz instanceof HTMLTextAreaElement || zz instanceof HTMLSelectElement) || zz instanceof HTMLInputElement && !Xz.has(zz.type))
    }

    function oz(zz) {
      let tz = null;
      const sz = sz => {
          const Wz = Oz(sz);
          Wz !== tz && (tz = Wz, zz(Fz.j.UiCapture, Fz.x.Keyboard, 0, 0, Wz ? Fz.x.Keyboard : 0))
        },
        Wz = zz => {
          sz(zz.target)
        },
        Xz = zz => {
          sz(zz.relatedTarget)
        },
        oz = () => {
          sz(document.activeElement)
        },
        vz = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Wz, vz), document.addEventListener("focusout", Xz, vz), document.addEventListener("keydown", oz, vz), sz(document.activeElement), () => {
        document.removeEventListener("focusin", Wz, vz), document.removeEventListener("focusout", Xz, vz), document.removeEventListener("keydown", oz, vz)
      }
    }
    const vz = new Map;

    function Uz(zz, tz) {
      var sz;
      let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      vz.set(Fz, (null !== (sz = vz.get(Fz)) && void 0 !== sz ? sz : 0) & ~zz | tz & zz);
      let Xz = 0;
      for (const Wz of vz.values()) Xz |= Wz;
      return (0, Wz.z)(zz, Xz & zz)
    }
  },
  36339: (zz, tz, sz) => {
    function Fz(zz) {
      return zz.includes("Leaf Bed")
    }

    function Wz(zz) {
      return / Bed(?: Head)?(?:\||$)/.test(zz) && !Fz(zz)
    }

    function Xz(zz) {
      return zz.includes(" Strongbed")
    }

    function Oz(zz) {
      return Fz(zz) || Wz(zz) || Xz(zz)
    }
    sz.d(tz, {
      e: () => Oz,
      i: () => Fz,
      l: () => Xz,
      m: () => Wz
    })
  },
  36336: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz
    });
    var Fz = sz(36339),
      Wz = sz(8940);
    const Xz = [],
      Oz = [],
      oz = [],
      vz = [];
    for (const Kz of Object.keys(Wz.l))(0, Fz.i)(Kz) ? Xz.push(Kz) : (0, Fz.m)(Kz) && Oz.push(Kz), (0, Fz.l)(Kz) && oz.push(Kz), (Kz.includes(" Bed Head") || Kz.includes(" Strongbed Head")) && vz.push(Kz);
    const Uz = {
      leafBeds: Xz,
      woolBeds: Oz,
      strongBeds: oz,
      beds: [...Xz, ...Oz, ...oz],
      bedHeads: vz,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6057: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      e: () => Wz,
      h: () => vz,
      l: () => Xz,
      o: () => Uz,
      r: () => Fz,
      u: () => oz
    });
    let Fz = function(zz) {
        return zz[zz.DEFAULT = 0] = "DEFAULT", zz[zz.BOAT = 1] = "BOAT", zz[zz.GLIDER = 2] = "GLIDER", zz[zz.BALLOON = 3] = "BALLOON", zz[zz.SLEEPING = 4] = "SLEEPING", zz[zz.RIDING_MOB = 5] = "RIDING_MOB", zz[zz.CAR = 6] = "CAR", zz[zz.HOVERCRAFT = 7] = "HOVERCRAFT", zz
      }({}),
      Wz = function(zz) {
        return zz[zz.WOOD = 0] = "WOOD", zz[zz.OBSIDIAN = 1] = "OBSIDIAN", zz[zz.SPEED = 2] = "SPEED", zz
      }({}),
      Xz = function(zz) {
        return zz[zz.WOOD = 0] = "WOOD", zz[zz.IRON = 1] = "IRON", zz[zz.GOLD = 2] = "GOLD", zz[zz.DIAMOND = 3] = "DIAMOND", zz
      }({}),
      Oz = function(zz) {
        return zz[zz.YELLOW = 0] = "YELLOW", zz[zz.WHITE = 1] = "WHITE", zz[zz.RED = 2] = "RED", zz[zz.PURPLE = 3] = "PURPLE", zz[zz.PINK = 4] = "PINK", zz[zz.ORANGE = 5] = "ORANGE", zz[zz.MAGENTA = 6] = "MAGENTA", zz[zz.LIME = 7] = "LIME", zz[zz.LIGHT_GRAY = 8] = "LIGHT_GRAY", zz[zz.LIGHT_BLUE = 9] = "LIGHT_BLUE", zz[zz.GREEN = 10] = "GREEN", zz[zz.GRAY = 11] = "GRAY", zz[zz.CYAN = 12] = "CYAN", zz[zz.BROWN = 13] = "BROWN", zz[zz.BLUE = 14] = "BLUE", zz[zz.BLACK = 15] = "BLACK", zz
      }({}),
      oz = function(zz) {
        return zz[zz.ROTATION_1 = 0] = "ROTATION_1", zz[zz.ROTATION_2 = 1] = "ROTATION_2", zz[zz.ROTATION_3 = 2] = "ROTATION_3", zz[zz.ROTATION_4 = 3] = "ROTATION_4", zz
      }({}),
      vz = function(zz) {
        return zz[zz.KART = 0] = "KART", zz[zz.OFF_ROADER = 1] = "OFF_ROADER", zz[zz.CAR = 2] = "CAR", zz[zz.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", zz[zz.ARMORED_CAR = 4] = "ARMORED_CAR", zz[zz.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", zz[zz.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", zz[zz.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", zz
      }({});
    Fz.DEFAULT, Fz.BOAT, Wz.SPEED, Fz.GLIDER, Xz.DIAMOND, Fz.BALLOON, Oz.BLACK, Fz.SLEEPING, oz.ROTATION_4, Fz.RIDING_MOB, Fz.CAR, vz.MOONSTONE_MINING_DRILL, Fz.HOVERCRAFT;
    let Uz = function(zz) {
      return zz[zz.NORMAL = 0] = "NORMAL", zz[zz.GLIDING = 1] = "GLIDING", zz[zz.FLOATING = 2] = "FLOATING", zz
    }({})
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);