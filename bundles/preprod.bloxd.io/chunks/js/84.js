export const id = 84;
export const ids = [84];
export const modules = {
  39696: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      startWasmPadGameplay: () => hz
    });
    bz(39704);
    var Ez = bz(39708),
      nz = bz(39724),
      iz = bz(1892),
      lz = bz(39740),
      Mz = bz(4564),
      tz = bz(4544),
      Hz = bz(39742),
      Oz = bz(39750),
      pz = bz(4571),
      dz = bz(39829),
      Fz = bz(2294),
      Zz = bz(8530),
      Rz = bz(39712),
      Kz = bz(8507);
    const wz = zz => {
        const uz = pz.d.indexOf(zz);
        if (uz < 0) throw new Error(`No core action "${zz}"`);
        return uz
      },
      Xz = wz("primary-fire"),
      fz = wz("alt-fire"),
      sz = wz("mid-fire"),
      rz = wz("jump"),
      oz = wz("ReloadGun"),
      Nz = wz("SwapCameraZoom"),
      vz = wz("TouchAction1"),
      xz = {
        SpecialAction1: wz("SpecialAction1"),
        SpecialAction2: wz("SpecialAction2")
      },
      Jz = (zz, uz) => {
        (0, Fz.q)(Mz.E.PadAction, zz, 0, 0, (0, Fz.p)(uz, performance.now()))
      },
      Az = zz => {
        Jz(zz, lz.yd.Down)
      },
      Tz = zz => {
        Jz(zz, 0)
      },
      Lz = zz => {
        Az(zz), Tz(zz)
      },
      Pz = () => {
        const zz = (0, Oz.j)();
        return null !== zz && void 0 !== zz && zz.isCoreRunning ? zz : null
      },
      Gz = zz => lz.z.playerFlags(zz.api.apiView, 0),
      az = zz => null !== zz && lz.z.targetBlockId(zz.api.apiView, 0) !== lz.cd,
      Vz = () => {
        const zz = (0, Zz.e)(),
          uz = new Rz.e;
        let bz = !1;
        const Ez = (zz, uz) => {
            (0, Fz.q)(Mz.E.PadLook, lz.Cd.Rate, zz, uz, 0)
          },
          nz = () => {
            bz = !1, uz.reset(), Ez(0, 0)
          };
        return {
          update: (nz, iz, tz) => {
            bz || (zz.discardPending(), bz = !0);
            const Hz = (0, Rz.t)(uz, nz, iz, tz, performance.now());
            Ez(Hz.yawRadPerSec, Hz.pitchRadPerSec);
            const Oz = zz.drainLookDelta();
            0 === Oz.QJ && 0 === Oz.eJ || (0, Fz.q)(Mz.E.PadLook, lz.Cd.Gyro, Oz.QJ, Oz.eJ, 0)
          },
          release: nz,
          uninstall: nz
        }
      },
      mz = () => {
        const zz = Pz();
        return null !== zz && 0 !== (Gz(zz) & lz.Id.PadSneakToggled)
      },
      qz = () => {
        const zz = (zz => {
          const uz = zz => function() {
            return (0, dz.e)(), zz(...arguments)
          };
          return {
            primaryFireDown: uz((() => (Az(Xz), 0))),
            primaryFireUp: uz((() => {
              Tz(Xz)
            })),
            altFireDown: uz((() => (Az(fz), 0))),
            altFireUp: uz((() => {
              Tz(fz)
            })),
            jumpDown: uz((() => {
              Lz(rz)
            })),
            specialActionDown: uz((zz => {
              Az(xz[zz])
            })),
            specialActionUp: uz((zz => {
              Tz(xz[zz])
            })),
            reloadGun: uz((() => {
              Lz(oz)
            })),
            dropItem: uz((zz => {
              Jz(lz.zd.Drop, lz.yd.Down | (zz ? lz.yd.Stack : 0))
            })),
            swapCameraZoom: uz((() => {
              Lz(Nz)
            })),
            pickBlock: uz((() => (Lz(sz), az(zz()))))
          }
        })(Pz);
        let uz = !1,
          bz = null;
        const Ez = () => {
          var zz;
          null === (zz = bz) || void 0 === zz || zz(), bz = null
        };
        return {
          bodies: () => zz,
          look: Vz(),
          move: (zz, bz) => {
            var nz;
            Ez();
            const {
              bits: iz,
              flips: Mz
            } = (zz => {
              if (null === zz) return {
                bits: lz.Bd.Peek,
                flips: 0
              };
              const uz = zz.sneakHeld ? lz.Bd.SneakHeld : 0;
              return "hold" === zz.mode ? {
                bits: uz | lz.Bd.SneakHoldMode,
                flips: zz.sneakTogglePressed ? 1 : 0
              } : {
                bits: uz,
                flips: zz.sneakPressed || zz.sneakTogglePressed ? 1 : 0
              }
            })(bz);
            null !== (nz = Pz()) && void 0 !== nz && nz.padMove(zz.x, zz.y, zz.magnitude, zz.headingOffset, (zz => lz.Bd.Active | (zz.jumpHeld ? lz.Bd.JumpHeld : 0) | (zz.jumpPressed ? lz.Bd.JumpPressed : 0) | (zz.running ? lz.Bd.Running : 0) | (zz.sprintHeld ? lz.Bd.SprintHeld : 0))(zz) | iz, Mz) && (uz = !0), (0, Kz.e)(mz())
          },
          stopMoving: () => {
            var zz;
            uz && (uz = !(null !== (zz = Pz()) && void 0 !== zz && zz.padMove(0, 0, 0, 0, 0, 0)), Ez(), bz = (0, tz.A)((() => {
              Ez(), (0, Kz.e)(mz())
            })))
          },
          uninstall: Ez,
          deviceChanged: zz => {
            var bz;
            "touch" === zz ? ((0, Kz.e)(!1), null !== (bz = Pz()) && void 0 !== bz && bz.padMove(0, 0, 0, 0, lz.Bd.EndToggle, 0) && (uz = !1)) : "gamepad" === zz && (0, Kz.e)(mz())
          },
          hasPlayer: () => null !== Pz(),
          isPlayerDead: () => {
            var zz;
            return !1 === (null === (zz = Pz()) || void 0 === zz ? void 0 : zz.localPlayerAlive())
          },
          isReplayMode: () => {
            const zz = Pz();
            return null !== zz && 0 !== (Gz(zz) & lz.Id.Replay)
          },
          isFreeCameraOn: () => {
            const zz = Pz();
            return null !== zz && 0 !== (Gz(zz) & lz.Id.FreeCam)
          },
          targetsBlock: () => az(Pz()),
          selectedSlotEmpty: () => {
            var zz;
            return !(null !== (zz = Pz()) && void 0 !== zz && zz.items.yM())
          },
          pickBlockAllowed: () => !!iz.b.get("creative") && !!iz.b.get("canPickBlocks"),
          scrollHotbar: zz => {
            Jz(lz.zd.Hotbar, lz.yd.Down | (zz > 0 ? lz.yd.Next : 0))
          },
          hasFullInventory: Hz.g,
          hasLobbyLeaderboard: () => !!iz.b.get("lobbyLeaderboardInfo"),
          contextActionInputs: () => {
            var zz, uz, bz, Ez;
            const nz = Pz();
            return {
              holdingGun: !1 !== (null === nz || void 0 === nz ? void 0 : nz.localPlayerAlive()) && "Gun" === (null === nz || void 0 === nz || null === (zz = nz.items.yM()) || void 0 === zz || null === (uz = zz.typeObj) || void 0 === uz ? void 0 : uz.type),
              customButtons: null !== (bz = iz.b.get("customButtons")) && void 0 !== bz ? bz : null,
              touchscreenActionButton: null !== (Ez = iz.b.get("touchscreenActionButton")) && void 0 !== Ez ? Ez : null
            }
          },
          pressTouchButton: zz => {
            zz ? Az(vz) : Tz(vz)
          }
        }
      },
      hz = () => {
        const zz = (0, nz.d)(qz()),
          uz = (0, Ez.e)(),
          bz = null;
        return () => {
          zz(), uz(), null === bz || void 0 === bz || bz()
        }
      }
  },
  4564: (zz, uz, bz) => {
    bz.d(uz, {
      $: () => Jz,
      A: () => iz,
      Ab: () => Pz,
      Cb: () => Uz,
      E: () => Zz,
      Eb: () => az,
      Gb: () => mz,
      I: () => Wz,
      Jb: () => qz,
      M: () => Hz,
      Mb: () => fz,
      N: () => Rz,
      Ob: () => sz,
      P: () => tz,
      Q: () => dz,
      Qb: () => gz,
      S: () => pz,
      Tb: () => nz,
      W: () => Nz,
      Wb: () => Qz,
      Z: () => xz,
      ab: () => vz,
      bb: () => Az,
      c: () => Dz,
      cb: () => cz,
      fb: () => hz,
      g: () => yz,
      j: () => Oz,
      jb: () => Vz,
      m: () => Xz,
      mb: () => Tz,
      o: () => Sz,
      pb: () => Gz,
      q: () => wz,
      qb: () => Lz,
      s: () => Kz,
      u: () => lz,
      ub: () => Fz,
      vb: () => oz,
      wb: () => rz,
      x: () => Mz,
      y: () => Ez
    });
    const Ez = 32,
      nz = 33.333333333333336,
      iz = {
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
      lz = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Mz = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      tz = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Hz = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Oz = {
        Look: 0,
        Remesh: 1
      },
      pz = 8,
      dz = 1,
      Fz = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Zz = {
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
      Rz = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Kz = {
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
      wz = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Xz = 4,
      fz = 4,
      sz = 65535,
      rz = {
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
      oz = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Nz = 88,
      vz = 0,
      xz = 24,
      Jz = 48,
      Az = 80,
      Tz = {
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
      Lz = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Pz = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Gz = {
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
      az = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Vz = 65535,
      mz = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      qz = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      hz = 2,
      Uz = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      cz = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      gz = {
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
      Sz = {
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
      yz = {
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
      Dz = 8,
      Qz = {
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
      Wz = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4544: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Jz,
      C: () => Az,
      F: () => Tz,
      H: () => Xz,
      L: () => lz,
      M: () => Mz,
      O: () => xz,
      b: () => vz,
      c: () => sz,
      g: () => Pz,
      j: () => Lz,
      l: () => wz,
      o: () => oz,
      s: () => fz,
      w: () => rz
    });
    var Ez = bz(4552);
    const nz = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let iz = nz;

    function lz(zz) {
      iz = null !== zz && void 0 !== zz ? zz : nz
    }

    function Mz() {
      return iz
    }
    const tz = new Set,
      Hz = new Set;
    let Oz = -1;
    const pz = new Set,
      dz = new Set;
    let Fz = 0,
      Zz = 0;
    const Rz = new Set,
      Kz = new Set;

    function wz(zz) {
      return tz.add(zz), () => {
        tz.delete(zz)
      }
    }

    function Xz(zz, uz) {
      for (const Ez of tz) try {
        Ez(zz)
      } catch (bz) {
        uz(bz)
      }
    }

    function fz(zz) {
      return Hz.add(zz), () => {
        Hz.delete(zz)
      }
    }

    function sz(zz, uz) {
      const bz = Oz < 0 ? 0 : zz - Oz;
      Oz = zz;
      for (const nz of Hz) try {
        nz(bz)
      } catch (Ez) {
        uz(Ez)
      }
    }

    function rz(zz) {
      return pz.add(zz), () => {
        pz.delete(zz)
      }
    }

    function oz(zz) {
      return dz.add(zz), () => {
        dz.delete(zz)
      }
    }
    let Nz = 0;

    function vz(zz) {
      Nz += zz
    }

    function xz() {
      const zz = Nz;
      return Nz = 0, zz
    }

    function Jz(zz) {
      return Rz.add(zz), () => {
        Rz.delete(zz)
      }
    }

    function Az(zz) {
      return Kz.add(zz), () => {
        Kz.delete(zz)
      }
    }

    function Tz() {
      Fz = 0, Zz = 0, Oz = -1
    }

    function Lz(zz, uz) {
      if ("paced" === zz) return Zz += uz, null;
      if ("drawn" !== zz && "skipped" !== zz) return null;
      const bz = uz + Zz;
      return Zz = 0, bz
    }

    function Pz(zz, uz, bz, nz) {
      const iz = (0, Ez.l)(uz),
        lz = zz > 0 ? performance.now() : 0;
      for (let Ez = 0; Ez < zz; Ez++)
        for (const zz of Rz) try {
          zz()
        } catch (Mz) {
          nz(Mz)
        }
      if (zz > 0 && vz(performance.now() - lz), null !== bz) {
        for (const zz of pz) try {
          zz(bz)
        } catch (Mz) {
          nz(Mz)
        }
        Fz += bz
      }
      if ("drawn" === uz) {
        const zz = Fz;
        Fz = 0;
        for (const uz of dz) try {
          uz(zz)
        } catch (Mz) {
          nz(Mz)
        }
      }
      for (const Ez of Kz) try {
        Ez(zz, iz)
      } catch (Mz) {
        nz(Mz)
      }
    }
  },
  4560: (zz, uz, bz) => {
    bz.d(uz, {
      $c: () => Ez.Gb,
      Ab: () => uu,
      B: () => du,
      Bc: () => Fu,
      Bd: () => Uz,
      C: () => Cz,
      Dd: () => Qz,
      Eb: () => nz.e,
      Fb: () => vz,
      Fc: () => Hu,
      G: () => Ez.g,
      H: () => Hz,
      Ic: () => Eu,
      Id: () => yz,
      Jb: () => hz,
      L: () => Ez.j,
      Lc: () => Ez.mb,
      Ld: () => ez,
      Mc: () => Ez.pb,
      Nb: () => Lz,
      Nd: () => Wz,
      P: () => Ez.m,
      Pb: () => Az,
      Pc: () => Ez.qb,
      Qb: () => Ez.N,
      Qc: () => Yz,
      Qd: () => lu,
      S: () => Iz,
      Tb: () => Pz,
      Tc: () => Ez.vb,
      Td: () => Zu,
      V: () => Ez.s,
      Vb: () => rz,
      Vc: () => Ez.wb,
      W: () => Ez.u,
      Wd: () => sz,
      Y: () => Ez.x,
      Yb: () => iu,
      Yc: () => Ez.Ab,
      Z: () => pz,
      Zc: () => Ez.Eb,
      _b: () => fz,
      _d: () => jz,
      ab: () => Xz,
      bc: () => Ou,
      be: () => mz,
      c: () => zu,
      cb: () => Ez.y,
      ce: () => Vz,
      db: () => Ez.A,
      dd: () => Ez.Jb,
      de: () => az,
      f: () => Rz,
      fc: () => nz.i,
      fd: () => Jz,
      ge: () => tz,
      h: () => Zz,
      hb: () => gz,
      i: () => tu,
      ic: () => wz,
      ie: () => qz,
      jc: () => bu,
      jd: () => Ez.Mb,
      kb: () => nu,
      l: () => xz,
      mb: () => Oz,
      me: () => Ru,
      n: () => Nz,
      nc: () => Ez.W,
      nd: () => Ez.Ob,
      od: () => Ez.Tb,
      p: () => Ez.c,
      pb: () => Ez.E,
      pe: () => Fz,
      qc: () => Ez.Z,
      qd: () => iz,
      rc: () => Ez.$,
      s: () => pu,
      sb: () => Dz,
      sd: () => Kz,
      tc: () => Ez.ab,
      td: () => Mu,
      u: () => Tz,
      ub: () => Bz,
      vd: () => cz,
      w: () => lz,
      wc: () => Ez.bb,
      xd: () => Sz,
      yb: () => kz,
      yc: () => Ez.jb,
      z: () => Gz
    });
    var Ez = bz(4564),
      nz = bz(2289);
    const iz = Math.round(1e3 / Ez.Tb),
      lz = 4,
      Mz = 2;

    function tz() {
      return crypto.getRandomValues(new Uint32Array(Mz))
    }
    const Hz = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Oz = 16,
      pz = {
        Draws: 1,
        NetAll: 2
      },
      dz = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Fz(zz) {
      return (zz.nametagsHidden ? oz.NametagsHidden : 0) | (zz.crouchToggle ? oz.CrouchToggle : 0) | (zz.bhopDisabled ? oz.BhopDisabled : 0) | (zz.disableBobbing ? oz.DisableBobbing : 0) | (zz.ezTowering ? oz.EzTowering : 0) | (zz.ezBridging ? oz.EzBridging : 0) | (zz.showChunkBorders ? oz.ShowChunkBorders : 0)
    }
    const Zz = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Rz = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Kz = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      wz = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Xz = 5,
      fz = 4294967295;

    function sz(zz) {
      return (zz.showFog ? dz.ShowFog : 0) | (zz.lighting ? dz.Lighting : 0) | (zz.chunkFade ? dz.ChunkFade : 0)
    }
    const rz = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      oz = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Nz = {
        Release: 1,
        KeepTouches: 2
      },
      vz = {
        Point: 1,
        Stamped: 2
      },
      xz = {
        Add: 1,
        Clear: 2
      },
      Jz = 1,
      Az = 8,
      Tz = 16777215,
      Lz = 4,
      Pz = {
        Resume: 1
      },
      Gz = {
        Held: 1
      };

    function az(zz, uz) {
      return (zz | uz << 8) >>> 0
    }

    function Vz(zz) {
      return 255 & zz
    }

    function mz(zz) {
      return zz >>> 8
    }

    function qz(zz) {
      return zz + 3 & -4
    }
    const hz = 16777216,
      Uz = 20;
    const cz = 8,
      gz = 8,
      Sz = 16777216,
      yz = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Dz = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Qz = 16,
      Wz = {
        Lost: 0,
        Gone: 1
      },
      ez = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function jz(zz) {
      return zz === ez.WorldgenSeed || zz === ez.Generate
    }
    const Iz = 4,
      Bz = 99,
      Cz = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Yz = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      kz = 12,
      zu = 16,
      uu = 4,
      bu = 12,
      Eu = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      nu = 4,
      iu = 8,
      lu = 8,
      Mu = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      tu = {
        Crit: 1,
        HitSelf: 2
      },
      Hu = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Ou = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      pu = 12,
      du = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Fu = 67108864;

    function Zu(zz) {
      for (const [uz, bz] of Object.entries(Ez.g))
        if (bz === zz) return uz;
      return `Unknown${zz}`
    }

    function Ru(zz) {
      return {
        status: zz[Ez.A.Status],
        lastError: zz[Ez.A.LastError],
        lastErrorDetail: zz[Ez.A.LastErrorDetail],
        errorCount: zz[Ez.A.ErrorCount],
        frameIndex: zz[Ez.A.FrameIndex],
        tickIndex: zz[Ez.A.TickIndex],
        renderPending: zz[Ez.A.RenderPending],
        firstView: zz[Ez.A.FirstView],
        chunksCancelled: zz[Ez.A.ChunksCancelled]
      }
    }
  },
  4552: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz,
      h: () => iz,
      l: () => nz
    });
    var Ez = bz(4560);

    function nz(zz) {
      return "none" !== zz
    }

    function iz(zz, uz) {
      if (!zz) return "none";
      switch (uz) {
        case Ez.Y.Drawn:
          return "drawn";
        case Ez.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function lz(zz) {
      return "drawn" === zz
    }
  },
  4571: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      f: () => iz,
      i: () => lz,
      m: () => Ez,
      n: () => Mz
    });
    const Ez = {
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
      nz = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      iz = {
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
      lz = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Mz = [16]
  },
  39829: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz,
      f: () => iz,
      g: () => nz
    });
    let Ez = null;

    function nz(zz) {
      Ez = zz
    }

    function iz(zz) {
      Ez === zz && (Ez = null)
    }

    function lz() {
      var zz;
      null === (zz = Ez) || void 0 === zz || zz()
    }
  },
  4575: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      g: () => lz,
      i: () => Hz
    });
    var Ez = bz(2289),
      nz = bz(2294);
    const iz = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function lz(zz) {
      return zz instanceof HTMLElement && (!!(zz.isContentEditable || zz instanceof HTMLTextAreaElement || zz instanceof HTMLSelectElement) || zz instanceof HTMLInputElement && !iz.has(zz.type))
    }

    function Mz(zz) {
      let uz = null;
      const bz = bz => {
          const nz = lz(bz);
          nz !== uz && (uz = nz, zz(Ez.f.UiCapture, Ez.z.Keyboard, 0, 0, nz ? Ez.z.Keyboard : 0))
        },
        nz = zz => {
          bz(zz.target)
        },
        iz = zz => {
          bz(zz.relatedTarget)
        },
        Mz = () => {
          bz(document.activeElement)
        },
        tz = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", nz, tz), document.addEventListener("focusout", iz, tz), document.addEventListener("keydown", Mz, tz), bz(document.activeElement), () => {
        document.removeEventListener("focusin", nz, tz), document.removeEventListener("focusout", iz, tz), document.removeEventListener("keydown", Mz, tz)
      }
    }
    const tz = new Map;

    function Hz(zz, uz) {
      var bz;
      let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      tz.set(Ez, (null !== (bz = tz.get(Ez)) && void 0 !== bz ? bz : 0) & ~zz | uz & zz);
      let iz = 0;
      for (const nz of tz.values()) iz |= nz;
      return (0, nz.x)(zz, iz & zz)
    }
  },
  36365: (zz, uz, bz) => {
    function Ez(zz) {
      return zz.includes("Leaf Bed")
    }

    function nz(zz) {
      return / Bed(?: Head)?(?:\||$)/.test(zz) && !Ez(zz)
    }

    function iz(zz) {
      return zz.includes(" Strongbed")
    }

    function lz(zz) {
      return Ez(zz) || nz(zz) || iz(zz)
    }
    bz.d(uz, {
      e: () => lz,
      g: () => Ez,
      j: () => iz,
      k: () => nz
    })
  },
  36363: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hz
    });
    var Ez = bz(36365),
      nz = bz(9078);
    const iz = [],
      lz = [],
      Mz = [],
      tz = [];
    for (const Oz of Object.keys(nz.p))(0, Ez.g)(Oz) ? iz.push(Oz) : (0, Ez.k)(Oz) && lz.push(Oz), (0, Ez.j)(Oz) && Mz.push(Oz), (Oz.includes(" Bed Head") || Oz.includes(" Strongbed Head")) && tz.push(Oz);
    const Hz = {
      leafBeds: iz,
      woolBeds: lz,
      strongBeds: Mz,
      beds: [...iz, ...lz, ...Mz],
      bedHeads: tz,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6204: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      d: () => nz,
      f: () => tz,
      i: () => iz,
      l: () => Hz,
      m: () => Ez,
      q: () => Mz
    });
    let Ez = function(zz) {
        return zz[zz.DEFAULT = 0] = "DEFAULT", zz[zz.BOAT = 1] = "BOAT", zz[zz.GLIDER = 2] = "GLIDER", zz[zz.BALLOON = 3] = "BALLOON", zz[zz.SLEEPING = 4] = "SLEEPING", zz[zz.RIDING_MOB = 5] = "RIDING_MOB", zz[zz.CAR = 6] = "CAR", zz[zz.HOVERCRAFT = 7] = "HOVERCRAFT", zz
      }({}),
      nz = function(zz) {
        return zz[zz.WOOD = 0] = "WOOD", zz[zz.OBSIDIAN = 1] = "OBSIDIAN", zz[zz.SPEED = 2] = "SPEED", zz
      }({}),
      iz = function(zz) {
        return zz[zz.WOOD = 0] = "WOOD", zz[zz.IRON = 1] = "IRON", zz[zz.GOLD = 2] = "GOLD", zz[zz.DIAMOND = 3] = "DIAMOND", zz
      }({}),
      lz = function(zz) {
        return zz[zz.YELLOW = 0] = "YELLOW", zz[zz.WHITE = 1] = "WHITE", zz[zz.RED = 2] = "RED", zz[zz.PURPLE = 3] = "PURPLE", zz[zz.PINK = 4] = "PINK", zz[zz.ORANGE = 5] = "ORANGE", zz[zz.MAGENTA = 6] = "MAGENTA", zz[zz.LIME = 7] = "LIME", zz[zz.LIGHT_GRAY = 8] = "LIGHT_GRAY", zz[zz.LIGHT_BLUE = 9] = "LIGHT_BLUE", zz[zz.GREEN = 10] = "GREEN", zz[zz.GRAY = 11] = "GRAY", zz[zz.CYAN = 12] = "CYAN", zz[zz.BROWN = 13] = "BROWN", zz[zz.BLUE = 14] = "BLUE", zz[zz.BLACK = 15] = "BLACK", zz
      }({}),
      Mz = function(zz) {
        return zz[zz.ROTATION_1 = 0] = "ROTATION_1", zz[zz.ROTATION_2 = 1] = "ROTATION_2", zz[zz.ROTATION_3 = 2] = "ROTATION_3", zz[zz.ROTATION_4 = 3] = "ROTATION_4", zz
      }({}),
      tz = function(zz) {
        return zz[zz.KART = 0] = "KART", zz[zz.OFF_ROADER = 1] = "OFF_ROADER", zz[zz.CAR = 2] = "CAR", zz[zz.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", zz[zz.ARMORED_CAR = 4] = "ARMORED_CAR", zz[zz.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", zz[zz.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", zz[zz.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", zz
      }({});
    Ez.DEFAULT, Ez.BOAT, nz.SPEED, Ez.GLIDER, iz.DIAMOND, Ez.BALLOON, lz.BLACK, Ez.SLEEPING, Mz.ROTATION_4, Ez.RIDING_MOB, Ez.CAR, tz.MOONSTONE_MINING_DRILL, Ez.HOVERCRAFT;
    let Hz = function(zz) {
      return zz[zz.NORMAL = 0] = "NORMAL", zz[zz.GLIDING = 1] = "GLIDING", zz[zz.FLOATING = 2] = "FLOATING", zz
    }({})
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);