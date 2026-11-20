export const id = 85;
export const ids = [85];
export const modules = {
  39847: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      startWasmPadGameplay: () => Zv
    });
    Pv(39851);
    var hv = Pv(39854),
      Sv = Pv(39874),
      ev = Pv(1903),
      gv = Pv(39889),
      pv = Pv(4542),
      dv = Pv(4529),
      Nv = Pv(39894),
      lv = Pv(39898),
      Tv = Pv(4555),
      Wv = Pv(39975),
      wv = Pv(2306),
      av = Pv(8536),
      sv = Pv(39861),
      Cv = Pv(8513),
      iv = Pv(38629);
    const cv = vv => {
        const zv = Tv.b.indexOf(vv);
        if (zv < 0) throw new Error(`No core action "${vv}"`);
        return zv
      },
      Gv = cv("primary-fire"),
      mv = cv("alt-fire"),
      jv = cv("mid-fire"),
      fv = cv("jump"),
      Fv = cv("ReloadGun"),
      Yv = cv("SwapCameraZoom"),
      nv = cv("TouchAction1"),
      Ov = {
        SpecialAction1: cv("SpecialAction1"),
        SpecialAction2: cv("SpecialAction2")
      },
      Dv = (vv, zv) => {
        (0, wv.t)(pv.C.PadAction, vv, 0, 0, (0, wv.s)(zv, performance.now()))
      },
      Kv = vv => {
        Dv(vv, gv.zd.Down)
      },
      Vv = vv => {
        Dv(vv, 0)
      },
      Uv = vv => {
        Kv(vv), Vv(vv)
      },
      Rv = () => {
        const vv = (0, lv.h)();
        return null !== vv && void 0 !== vv && vv.isCoreRunning ? vv : null
      },
      xv = vv => gv.t.playerFlags(vv.api.apiView, 0),
      tv = vv => null !== vv && gv.t.targetBlockId(vv.api.apiView, 0) !== gv.dd,
      qv = () => {
        const vv = (0, av.c)(),
          zv = new sv.d;
        let Pv = !1;
        const hv = (vv, zv) => {
            (0, wv.t)(pv.C.PadLook, gv.Ed.Rate, vv, zv, 0)
          },
          Sv = () => {
            Pv = !1, zv.reset(), hv(0, 0)
          };
        return {
          update: (Sv, ev, dv) => {
            Pv || (vv.discardPending(), Pv = !0);
            const Nv = (0, sv.q)(zv, Sv, ev, dv, performance.now());
            hv(Nv.yawRadPerSec, Nv.pitchRadPerSec);
            const lv = vv.drainLookDelta();
            0 === lv.ND && 0 === lv.lD || (0, wv.t)(pv.C.PadLook, gv.Ed.Gyro, lv.ND, lv.lD, 0)
          },
          release: Sv,
          uninstall: Sv
        }
      },
      Iv = () => {
        const vv = Rv();
        return null !== vv && 0 !== (xv(vv) & gv.Gd.PadSneakToggled)
      },
      Qv = () => {
        const vv = (vv => {
          const zv = vv => function() {
            return (0, Wv.c)(), vv(...arguments)
          };
          return {
            primaryFireDown: zv((() => (Kv(Gv), 0))),
            primaryFireUp: zv((() => {
              Vv(Gv)
            })),
            altFireDown: zv((() => (Kv(mv), 0))),
            altFireUp: zv((() => {
              Vv(mv)
            })),
            jumpDown: zv((() => {
              Uv(fv)
            })),
            specialActionDown: zv((vv => {
              Kv(Ov[vv])
            })),
            specialActionUp: zv((vv => {
              Vv(Ov[vv])
            })),
            reloadGun: zv((() => {
              Uv(Fv)
            })),
            dropItem: zv((vv => {
              Dv(gv.Ad.Drop, gv.zd.Down | (vv ? gv.zd.Stack : 0))
            })),
            swapCameraZoom: zv((() => {
              Uv(Yv)
            })),
            pickBlock: zv((() => (Uv(jv), tv(vv()))))
          }
        })(Rv);
        let zv = !1,
          Pv = null;
        const hv = () => {
          var vv;
          null === (vv = Pv) || void 0 === vv || vv(), Pv = null
        };
        return {
          bodies: () => vv,
          look: qv(),
          move: (vv, Pv) => {
            var Sv;
            hv();
            const {
              bits: ev,
              flips: pv
            } = (vv => {
              if (null === vv) return {
                bits: gv.Cd.Peek,
                flips: 0
              };
              const zv = vv.sneakHeld ? gv.Cd.SneakHeld : 0;
              return "hold" === vv.mode ? {
                bits: zv | gv.Cd.SneakHoldMode,
                flips: vv.sneakTogglePressed ? 1 : 0
              } : {
                bits: zv,
                flips: vv.sneakPressed || vv.sneakTogglePressed ? 1 : 0
              }
            })(Pv);
            null !== (Sv = Rv()) && void 0 !== Sv && Sv.padMove(vv.x, vv.y, vv.magnitude, vv.headingOffset, (vv => gv.Cd.Active | (vv.jumpHeld ? gv.Cd.JumpHeld : 0) | (vv.jumpPressed ? gv.Cd.JumpPressed : 0) | (vv.running ? gv.Cd.Running : 0) | (vv.sprintHeld ? gv.Cd.SprintHeld : 0))(vv) | ev, pv) && (zv = !0), (0, Cv.e)(Iv())
          },
          stopMoving: () => {
            var vv;
            zv && (zv = !(null !== (vv = Rv()) && void 0 !== vv && vv.padMove(0, 0, 0, 0, 0, 0)), hv(), Pv = (0, dv.q)((() => {
              hv(), (0, Cv.e)(Iv())
            })))
          },
          uninstall: hv,
          deviceChanged: vv => {
            var Pv;
            "touch" === vv ? ((0, Cv.e)(!1), null !== (Pv = Rv()) && void 0 !== Pv && Pv.padMove(0, 0, 0, 0, gv.Cd.EndToggle, 0) && (zv = !1)) : "gamepad" === vv && (0, Cv.e)(Iv())
          },
          hasPlayer: () => null !== Rv(),
          isPlayerDead: () => {
            var vv;
            return !1 === (null === (vv = Rv()) || void 0 === vv ? void 0 : vv.localPlayerAlive())
          },
          isReplayMode: () => {
            const vv = Rv();
            return null !== vv && 0 !== (xv(vv) & gv.Gd.Replay)
          },
          isFreeCameraOn: () => {
            const vv = Rv();
            return null !== vv && 0 !== (xv(vv) & gv.Gd.FreeCam)
          },
          targetsBlock: () => tv(Rv()),
          selectedSlotEmpty: () => {
            var vv;
            return !(null !== (vv = Rv()) && void 0 !== vv && vv.items.Vp())
          },
          pickBlockAllowed: () => !!ev.c.get("creative") && !!ev.c.get("canPickBlocks"),
          scrollHotbar: vv => {
            Dv(gv.Ad.Hotbar, gv.zd.Down | (vv > 0 ? gv.zd.Next : 0))
          },
          hasFullInventory: Nv.n,
          hasLobbyTab: () => (0, iv.d)({
            lobbyLeaderboardInfo: ev.c.get("lobbyLeaderboardInfo"),
            lobbyManage: ev.c.get("lobbyManage")
          }),
          contextActionInputs: () => {
            var vv, zv, Pv, hv;
            const Sv = Rv();
            return {
              holdingGun: !1 !== (null === Sv || void 0 === Sv ? void 0 : Sv.localPlayerAlive()) && "Gun" === (null === Sv || void 0 === Sv || null === (vv = Sv.items.Vp()) || void 0 === vv || null === (zv = vv.typeObj) || void 0 === zv ? void 0 : zv.type),
              customButtons: null !== (Pv = ev.c.get("customButtons")) && void 0 !== Pv ? Pv : null,
              touchscreenActionButton: null !== (hv = ev.c.get("touchscreenActionButton")) && void 0 !== hv ? hv : null
            }
          },
          pressTouchButton: vv => {
            vv ? Kv(nv) : Vv(nv)
          }
        }
      },
      Zv = () => {
        const vv = (0, Sv.e)(Qv()),
          zv = (0, hv.d)(),
          Pv = null;
        return () => {
          vv(), zv(), null === Pv || void 0 === Pv || Pv()
        }
      }
  },
  4542: (vv, zv, Pv) => {
    Pv.d(zv, {
      $: () => nv,
      A: () => ev,
      C: () => av,
      Cb: () => Uv,
      E: () => Jv,
      Fb: () => Zv,
      Hb: () => xv,
      I: () => Nv,
      Jb: () => qv,
      Kb: () => Iv,
      M: () => sv,
      Mb: () => Gv,
      Ob: () => mv,
      P: () => dv,
      S: () => Wv,
      Sb: () => Lv,
      V: () => Tv,
      Vb: () => Sv,
      X: () => Fv,
      Xb: () => Bv,
      bb: () => Ov,
      d: () => yv,
      eb: () => Yv,
      f: () => Mv,
      fb: () => Dv,
      g: () => lv,
      h: () => cv,
      ib: () => Av,
      j: () => Hv,
      kb: () => Qv,
      lb: () => tv,
      m: () => iv,
      pb: () => Kv,
      q: () => Cv,
      qb: () => Rv,
      sb: () => Vv,
      t: () => gv,
      u: () => pv,
      wb: () => wv,
      x: () => hv,
      xb: () => fv,
      zb: () => jv
    });
    const hv = 32,
      Sv = 33.333333333333336,
      ev = {
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
      gv = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      pv = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      dv = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Nv = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      lv = {
        Look: 0,
        Remesh: 1
      },
      Tv = 8,
      Wv = 1,
      wv = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      av = {
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
      sv = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Cv = {
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
      iv = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      cv = 4,
      Gv = 4,
      mv = 65535,
      jv = {
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
      fv = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Fv = 88,
      Yv = 0,
      nv = 24,
      Ov = 48,
      Dv = 80,
      Kv = {
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
      Vv = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Uv = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Rv = {
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
      xv = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      tv = 65535,
      qv = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Iv = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Qv = 2,
      Zv = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Av = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Lv = {
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
      Hv = {
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
      Mv = {
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
      yv = 8,
      Bv = {
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
      Jv = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4529: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => pv,
      C: () => nv,
      c: () => Yv,
      d: () => mv,
      e: () => Uv,
      g: () => Vv,
      j: () => iv,
      k: () => fv,
      m: () => Gv,
      o: () => jv,
      q: () => Ov,
      u: () => Dv,
      w: () => Kv,
      x: () => cv,
      y: () => gv
    });
    var hv = Pv(4531);
    const Sv = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ev = Sv;

    function gv(vv) {
      ev = null !== vv && void 0 !== vv ? vv : Sv
    }

    function pv() {
      return ev
    }
    const dv = new Set,
      Nv = new Set;
    let lv = -1;
    const Tv = new Set,
      Wv = new Set;
    let wv = 0,
      av = 0;
    const sv = new Set,
      Cv = new Set;

    function iv(vv) {
      return dv.add(vv), () => {
        dv.delete(vv)
      }
    }

    function cv(vv, zv) {
      for (const hv of dv) try {
        hv(vv)
      } catch (Pv) {
        zv(Pv)
      }
    }

    function Gv(vv) {
      return Nv.add(vv), () => {
        Nv.delete(vv)
      }
    }

    function mv(vv, zv) {
      const Pv = lv < 0 ? 0 : vv - lv;
      lv = vv;
      for (const Sv of Nv) try {
        Sv(Pv)
      } catch (hv) {
        zv(hv)
      }
    }

    function jv(vv) {
      return Tv.add(vv), () => {
        Tv.delete(vv)
      }
    }

    function fv(vv) {
      return Wv.add(vv), () => {
        Wv.delete(vv)
      }
    }
    let Fv = 0;

    function Yv(vv) {
      Fv += vv
    }

    function nv() {
      const vv = Fv;
      return Fv = 0, vv
    }

    function Ov(vv) {
      return sv.add(vv), () => {
        sv.delete(vv)
      }
    }

    function Dv(vv) {
      return Cv.add(vv), () => {
        Cv.delete(vv)
      }
    }

    function Kv() {
      wv = 0, av = 0, lv = -1
    }

    function Vv(vv, zv) {
      if ("paced" === vv) return av += zv, null;
      if ("drawn" !== vv && "skipped" !== vv) return null;
      const Pv = zv + av;
      return av = 0, Pv
    }

    function Uv(vv, zv, Pv, Sv) {
      const ev = (0, hv.i)(zv),
        gv = vv > 0 ? performance.now() : 0;
      for (let hv = 0; hv < vv; hv++)
        for (const vv of sv) try {
          vv()
        } catch (pv) {
          Sv(pv)
        }
      if (vv > 0 && Yv(performance.now() - gv), null !== Pv) {
        for (const vv of Tv) try {
          vv(Pv)
        } catch (pv) {
          Sv(pv)
        }
        wv += Pv
      }
      if ("drawn" === zv) {
        const vv = wv;
        wv = 0;
        for (const zv of Wv) try {
          zv(vv)
        } catch (pv) {
          Sv(pv)
        }
      }
      for (const hv of Cv) try {
        hv(vv, ev)
      } catch (pv) {
        Sv(pv)
      }
    }
  },
  4535: (vv, zv, Pv) => {
    Pv.d(zv, {
      $: () => hv.q,
      $c: () => hv.pb,
      $d: () => Hv,
      Ab: () => lv,
      Bb: () => hv.C,
      Bc: () => hv.X,
      Cd: () => hv.Kb,
      Ce: () => tv,
      D: () => Rv,
      Db: () => yv,
      Ec: () => hv.$,
      Ee: () => xv,
      F: () => wz,
      Fb: () => rv,
      G: () => kv,
      Gd: () => Ov,
      Hc: () => hv.bb,
      He: () => dv,
      Ib: () => vz,
      Jd: () => hv.Mb,
      K: () => hv.f,
      Kc: () => hv.eb,
      Lb: () => Pz,
      Ld: () => hv.Ob,
      Le: () => Iv,
      M: () => Nv,
      Oc: () => hv.fb,
      Oe: () => Cz,
      P: () => hv.g,
      Pb: () => Sv.d,
      Pd: () => hv.Vb,
      Qc: () => hv.lb,
      Qe: () => wv,
      Rd: () => ev,
      S: () => uv,
      Sb: () => Yv,
      Sc: () => az,
      Sd: () => Cv,
      Td: () => dz,
      Vb: () => Qv,
      W: () => hv.h,
      Wc: () => lz,
      Xc: () => Sz,
      Xd: () => Av,
      Y: () => bv,
      Zb: () => Vv,
      ae: () => Zv,
      bc: () => Dv,
      be: () => Bv,
      cd: () => hv.qb,
      db: () => hv.t,
      e: () => zz,
      eb: () => hv.u,
      ec: () => hv.M,
      fc: () => Uv,
      fd: () => hv.sb,
      g: () => sv,
      gb: () => Tv,
      gd: () => Xv,
      ge: () => Mv,
      hc: () => jv,
      je: () => Ev,
      k: () => av,
      kb: () => cv,
      kc: () => gz,
      kd: () => hv.xb,
      le: () => Jv,
      md: () => hv.zb,
      n: () => Nz,
      nc: () => Gv,
      ne: () => pz,
      ob: () => hv.x,
      p: () => nv,
      pc: () => Tz,
      q: () => Fv,
      qd: () => hv.Cb,
      qe: () => sz,
      sb: () => hv.A,
      se: () => mv,
      t: () => hv.d,
      tb: () => Lv,
      tc: () => Sv.i,
      ud: () => hv.Hb,
      vc: () => iv,
      ve: () => ov,
      w: () => Wz,
      wb: () => ez,
      xc: () => hz,
      y: () => Kv,
      yd: () => hv.Jb,
      z: () => gv,
      ze: () => qv
    });
    var hv = Pv(4542),
      Sv = Pv(2304);
    const ev = Math.round(1e3 / hv.Vb),
      gv = 4,
      pv = 2;

    function dv() {
      return crypto.getRandomValues(new Uint32Array(pv))
    }
    const Nv = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      lv = 16,
      Tv = {
        Draws: 1,
        NetAll: 2
      },
      Wv = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function wv(vv) {
      return (vv.nametagsHidden ? fv.NametagsHidden : 0) | (vv.crouchToggle ? fv.CrouchToggle : 0) | (vv.bhopDisabled ? fv.BhopDisabled : 0) | (vv.disableBobbing ? fv.DisableBobbing : 0) | (vv.ezTowering ? fv.EzTowering : 0) | (vv.ezBridging ? fv.EzBridging : 0) | (vv.showChunkBorders ? fv.ShowChunkBorders : 0)
    }
    const av = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      sv = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Cv = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      iv = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      cv = 5,
      Gv = 4294967295;

    function mv(vv) {
      return (vv.showFog ? Wv.ShowFog : 0) | (vv.lighting ? Wv.Lighting : 0) | (vv.chunkFade ? Wv.ChunkFade : 0)
    }
    const jv = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      fv = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Fv = {
        Release: 1,
        KeepTouches: 2
      },
      Yv = {
        Point: 1,
        Stamped: 2
      },
      nv = {
        Add: 1,
        Clear: 2
      },
      Ov = 1,
      Dv = 8,
      Kv = 16777215,
      Vv = 4,
      Uv = {
        Resume: 1
      },
      Rv = {
        Held: 1
      };

    function xv(vv, zv) {
      return (vv | zv << 8) >>> 0
    }

    function tv(vv) {
      return 255 & vv
    }

    function qv(vv) {
      return vv >>> 8
    }

    function Iv(vv) {
      return vv + 3 & -4
    }
    const Qv = 16777216,
      Zv = 20;
    const Av = 8,
      Lv = 8,
      Hv = 16777216,
      Mv = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      yv = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Bv = 16,
      Jv = {
        Lost: 0,
        Gone: 1
      },
      Ev = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function ov(vv) {
      return vv === Ev.WorldgenSeed || vv === Ev.Generate
    }
    const bv = 4,
      rv = 99,
      kv = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Xv = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      uv = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      vz = 12,
      zz = 16,
      Pz = 4,
      hz = 12,
      Sz = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      ez = 4,
      gz = 8,
      pz = 8,
      dz = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Nz = {
        Crit: 1,
        HitSelf: 2
      },
      lz = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Tz = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Wz = 12,
      wz = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      az = 67108864;

    function sz(vv) {
      for (const [zv, Pv] of Object.entries(hv.f))
        if (Pv === vv) return zv;
      return `Unknown${vv}`
    }

    function Cz(vv) {
      return {
        status: vv[hv.A.Status],
        lastError: vv[hv.A.LastError],
        lastErrorDetail: vv[hv.A.LastErrorDetail],
        errorCount: vv[hv.A.ErrorCount],
        frameIndex: vv[hv.A.FrameIndex],
        tickIndex: vv[hv.A.TickIndex],
        renderPending: vv[hv.A.RenderPending],
        firstView: vv[hv.A.FirstView],
        chunksCancelled: vv[hv.A.ChunksCancelled]
      }
    }
  },
  4531: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv,
      f: () => ev,
      i: () => Sv
    });
    var hv = Pv(4535);

    function Sv(vv) {
      return "none" !== vv
    }

    function ev(vv, zv) {
      if (!vv) return "none";
      switch (zv) {
        case hv.eb.Drawn:
          return "drawn";
        case hv.eb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function gv(vv) {
      return "drawn" === vv
    }
  },
  4555: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      e: () => ev,
      f: () => gv,
      i: () => hv,
      l: () => pv
    });
    const hv = {
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
      Sv = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ev = {
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
      gv = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      pv = [16]
  },
  39975: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv,
      f: () => ev,
      j: () => Sv
    });
    let hv = null;

    function Sv(vv) {
      hv = vv
    }

    function ev(vv) {
      hv === vv && (hv = null)
    }

    function gv() {
      var vv;
      null === (vv = hv) || void 0 === vv || vv()
    }
  },
  4561: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      e: () => gv,
      g: () => Nv
    });
    var hv = Pv(2304),
      Sv = Pv(2306);
    const ev = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function gv(vv) {
      return vv instanceof HTMLElement && (!!(vv.isContentEditable || vv instanceof HTMLTextAreaElement || vv instanceof HTMLSelectElement) || vv instanceof HTMLInputElement && !ev.has(vv.type))
    }

    function pv(vv) {
      let zv = null;
      const Pv = Pv => {
          const Sv = gv(Pv);
          Sv !== zv && (zv = Sv, vv(hv.f.UiCapture, hv.u.Keyboard, 0, 0, Sv ? hv.u.Keyboard : 0))
        },
        Sv = vv => {
          Pv(vv.target)
        },
        ev = vv => {
          Pv(vv.relatedTarget)
        },
        pv = () => {
          Pv(document.activeElement)
        },
        dv = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Sv, dv), document.addEventListener("focusout", ev, dv), document.addEventListener("keydown", pv, dv), Pv(document.activeElement), () => {
        document.removeEventListener("focusin", Sv, dv), document.removeEventListener("focusout", ev, dv), document.removeEventListener("keydown", pv, dv)
      }
    }
    const dv = new Map;

    function Nv(vv, zv) {
      var Pv;
      let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      dv.set(hv, (null !== (Pv = dv.get(hv)) && void 0 !== Pv ? Pv : 0) & ~vv | zv & vv);
      let ev = 0;
      for (const Sv of dv.values()) ev |= Sv;
      return (0, Sv.E)(vv, ev & vv)
    }
  },
  36443: (vv, zv, Pv) => {
    function hv(vv) {
      return vv.includes("Leaf Bed")
    }

    function Sv(vv) {
      return / Bed(?: Head)?(?:\||$)/.test(vv) && !hv(vv)
    }

    function ev(vv) {
      return vv.includes(" Strongbed")
    }

    function gv(vv) {
      return hv(vv) || Sv(vv) || ev(vv)
    }
    Pv.d(zv, {
      e: () => gv,
      h: () => hv,
      k: () => ev,
      n: () => Sv
    })
  },
  36434: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Nv
    });
    var hv = Pv(36443),
      Sv = Pv(9101);
    const ev = [],
      gv = [],
      pv = [],
      dv = [];
    for (const lv of Object.keys(Sv.k))(0, hv.h)(lv) ? ev.push(lv) : (0, hv.n)(lv) && gv.push(lv), (0, hv.k)(lv) && pv.push(lv), (lv.includes(" Bed Head") || lv.includes(" Strongbed Head")) && dv.push(lv);
    const Nv = {
      leafBeds: ev,
      woolBeds: gv,
      strongBeds: pv,
      beds: [...ev, ...gv, ...pv],
      bedHeads: dv,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  6192: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      h: () => Sv,
      l: () => dv,
      n: () => ev,
      p: () => Nv,
      s: () => hv,
      u: () => pv
    });
    let hv = function(vv) {
        return vv[vv.DEFAULT = 0] = "DEFAULT", vv[vv.BOAT = 1] = "BOAT", vv[vv.GLIDER = 2] = "GLIDER", vv[vv.BALLOON = 3] = "BALLOON", vv[vv.SLEEPING = 4] = "SLEEPING", vv[vv.RIDING_MOB = 5] = "RIDING_MOB", vv[vv.CAR = 6] = "CAR", vv[vv.HOVERCRAFT = 7] = "HOVERCRAFT", vv
      }({}),
      Sv = function(vv) {
        return vv[vv.WOOD = 0] = "WOOD", vv[vv.OBSIDIAN = 1] = "OBSIDIAN", vv[vv.SPEED = 2] = "SPEED", vv
      }({}),
      ev = function(vv) {
        return vv[vv.WOOD = 0] = "WOOD", vv[vv.IRON = 1] = "IRON", vv[vv.GOLD = 2] = "GOLD", vv[vv.DIAMOND = 3] = "DIAMOND", vv
      }({}),
      gv = function(vv) {
        return vv[vv.YELLOW = 0] = "YELLOW", vv[vv.WHITE = 1] = "WHITE", vv[vv.RED = 2] = "RED", vv[vv.PURPLE = 3] = "PURPLE", vv[vv.PINK = 4] = "PINK", vv[vv.ORANGE = 5] = "ORANGE", vv[vv.MAGENTA = 6] = "MAGENTA", vv[vv.LIME = 7] = "LIME", vv[vv.LIGHT_GRAY = 8] = "LIGHT_GRAY", vv[vv.LIGHT_BLUE = 9] = "LIGHT_BLUE", vv[vv.GREEN = 10] = "GREEN", vv[vv.GRAY = 11] = "GRAY", vv[vv.CYAN = 12] = "CYAN", vv[vv.BROWN = 13] = "BROWN", vv[vv.BLUE = 14] = "BLUE", vv[vv.BLACK = 15] = "BLACK", vv
      }({}),
      pv = function(vv) {
        return vv[vv.ROTATION_1 = 0] = "ROTATION_1", vv[vv.ROTATION_2 = 1] = "ROTATION_2", vv[vv.ROTATION_3 = 2] = "ROTATION_3", vv[vv.ROTATION_4 = 3] = "ROTATION_4", vv
      }({}),
      dv = function(vv) {
        return vv[vv.KART = 0] = "KART", vv[vv.OFF_ROADER = 1] = "OFF_ROADER", vv[vv.CAR = 2] = "CAR", vv[vv.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", vv[vv.ARMORED_CAR = 4] = "ARMORED_CAR", vv[vv.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", vv[vv.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", vv[vv.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", vv
      }({});
    hv.DEFAULT, hv.BOAT, Sv.SPEED, hv.GLIDER, ev.DIAMOND, hv.BALLOON, gv.BLACK, hv.SLEEPING, pv.ROTATION_4, hv.RIDING_MOB, hv.CAR, dv.MOONSTONE_MINING_DRILL, hv.HOVERCRAFT;
    let Nv = function(vv) {
      return vv[vv.NORMAL = 0] = "NORMAL", vv[vv.GLIDING = 1] = "GLIDING", vv[vv.FLOATING = 2] = "FLOATING", vv
    }({})
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);