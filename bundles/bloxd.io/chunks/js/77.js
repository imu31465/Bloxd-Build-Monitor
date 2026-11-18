export const id = 77;
export const ids = [77];
export const modules = {
  4167: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => iB,
      f: () => EB
    });
    var VB = dB(1193),
      yB = dB(24);
    var pB = dB(279);
    var lB = dB(572);
    var JB = dB(2101),
      YB = dB(4169),
      gB = dB(4199),
      oB = dB(4209);
    class kB {
      constructor(BB, TB, dB, VB, yB, pB) {
        this.id = BB, this.type = TB, this.parameters = dB, this.tearDownNotification = VB, this.onDonePromise = yB, this.resolveRequest = pB
      }
    }
    const LB = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class OB {
      constructor(BB, TB, dB, VB, yB, pB) {
        this.id = BB, this.type = TB, this.parameters = dB, this.resolveRequest = VB, this.onDonePromise = yB, this.tearDownNotification = pB, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const lB = EB[TB];
        if (!lB) throw console.error(`No QTE implementation registered for type: ${TB}`), new Error(`No QTE implementation registered for type: ${TB}`);
        this.implementation = new lB(dB, (BB => {
          this.isCompleted = !0, this.resolveRequest(BB)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = yB.h.subscribe("QTEMouseState", (BB => {
          let {
            isDown: TB
          } = BB;
          this.isCompleted || this.implementation.handleMouseInput(TB)
        })), this.stopInputActions = (0, gB.f)((BB => {
          this.isCompleted || !LB.has(BB.action) && !(0, gB.c)(BB) || this.implementation.handleMouseInput(BB.down)
        })), this.tickSub = yB.h.subscribe("noaTick", (BB => {
          if (this.isCompleted) return;
          const TB = BB / 1e3;
          this.implementation.handleTick(TB)
        })), this.stopShellTicks = (0, YB.w)((() => {
          this.isCompleted || this.implementation.handleTick(JB.x / 1e3)
        }))
      }
      cleanup() {
        var BB, TB;
        this.mouseSub && (yB.h.unsubscribe(this.mouseSub), this.mouseSub = null), null === (BB = this.stopInputActions) || void 0 === BB || BB.call(this), this.stopInputActions = null, null === (TB = this.stopShellTicks) || void 0 === TB || TB.call(this), this.stopShellTicks = null, this.tickSub && (yB.h.unsubscribe(this.tickSub), this.tickSub = null)
      }
      async waitUntilDone() {
        await this.onDonePromise
      }
      getState() {
        return this.implementation.getState()
      }
      tearDown() {
        this.isCompleted = !0, this.cleanup(), this.implementation.tearDown()
      }
    }
    const DB = new VB.b,
      uB = new Map;
    let HB = null;
    const EB = {
      progressBar: class {
        constructor(BB, TB, dB) {
          var VB, yB, pB, lB;
          this.resolveRequest = TB, this.tearDownNotification = dB, this.progress = 0, this.yV = void 0, this.pV = void 0, this.lV = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const JB = BB;
          this.yV = null !== (VB = JB.yV) && void 0 !== VB ? VB : .075, this.pV = null !== (yB = JB.pV) && void 0 !== yB ? yB : 1, this.progress = null !== (pB = JB.VV) && void 0 !== pB ? pB : 30, this.lV = null !== (lB = JB.lV) && void 0 !== lB && lB, this.parameters = JB
        }
        handleMouseInput(BB) {
          BB && !this.isCompleted && (this.clickCount++, this.progress += this.pV, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.yV, this.lV && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(BB) {
          this.isCompleted = !0, this.resolveRequest(BB)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              progress: this.progress,
              clickCount: this.clickCount
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      timedClick: class {
        constructor(BB, TB, dB) {
          var VB;
          this.resolveRequest = TB, this.tearDownNotification = dB, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = BB, this.timeWindowMs = null !== (VB = this.parameters.gV) && void 0 !== VB ? VB : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(BB) {
          if (!BB || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(BB) {
          this.isCompleted = !0, this.resolveRequest(BB)
        }
        getState() {
          const BB = Date.now() - this.startTime,
            TB = Math.max(0, this.timeWindowMs - BB);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: TB,
              gV: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(BB, TB, dB) {
          var VB;
          this.resolveRequest = TB, this.tearDownNotification = dB, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const yB = BB;
          this.parameters = {
            ...yB,
            OV: pB.e.clamp(yB.OV, .05, 1)
          }, this.progress = null !== (VB = yB.VV) && void 0 !== VB ? VB : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(BB) {
          this.isMouseDown = BB
        }
        handleTick(BB) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(BB))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const BB = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += BB * this.parameters.DV * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const BB = pB.e.clamp(1 - .7 * this.parameters.uV, 0, 1.4);
          return Math.floor(60 * BB + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.HV : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = pB.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const BB = this.parameters.OV / 2,
            TB = BB,
            dB = 1 - BB;
          this.catchZonePosition <= TB ? (this.catchZonePosition = TB, this.catchZoneVelocity = 0) : this.catchZonePosition >= dB && (this.catchZonePosition = dB, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const BB = this.parameters.OV / 2;
          return this.moverPosition >= this.catchZonePosition - BB && this.moverPosition <= this.catchZonePosition + BB
        }
        updateProgress(BB) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.EV * BB : this.progress -= this.parameters.vV * BB, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.lV && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(BB) {
          this.isCompleted = !0, this.resolveRequest(BB)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              OV: this.parameters.OV,
              moverPosition: this.moverPosition,
              progress: this.progress,
              isCatching: this.isMoverInCatchZone()
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      precisionBar: class {
        constructor(BB, TB, dB) {
          var VB, yB, lB, JB, YB;
          this.resolveRequest = TB, this.tearDownNotification = dB, this.startTime = void 0, this.speed = void 0, this.iV = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const gB = BB;
          this.parameters = {
            ...gB,
            speed: null !== (VB = gB.speed) && void 0 !== VB ? VB : .5,
            iV: pB.e.clamp(gB.iV, .05, 1),
            label: null !== (yB = gB.label) && void 0 !== yB ? yB : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (lB = gB.icon) && void 0 !== lB ? lB : null,
            scale: null !== (JB = gB.scale) && void 0 !== JB ? JB : 1,
            rotation: null !== (YB = gB.rotation) && void 0 !== YB ? YB : 0
          }, this.speed = this.parameters.speed, this.iV = this.parameters.iV, this.startTime = Date.now()
        }
        handleMouseInput(BB) {
          if (BB) {
            this.updateMarkerPosition();
            const BB = Math.abs(this.markerPosition - .5) <= this.iV / 2;
            this.complete(BB)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const BB = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = BB <= .5 ? 2 * BB : 2 - 2 * BB
        }
        complete(BB) {
          this.isCompleted = !0, this.resolveRequest(BB)
        }
        getState() {
          return this.updateMarkerPosition(), {
            type: this.type,
            parameters: this.parameters,
            state: {
              markerPosition: this.markerPosition
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      rhythmClick: class {
        constructor(BB, TB, dB) {
          this.resolveRequest = TB, this.tearDownNotification = dB, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = BB, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(BB) {
          if (!BB || this.isCompleted) return;
          const TB = this.getOuterCircleProgress();
          if (TB <= this.parameters.sV && TB >= -this.parameters.sV) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.tV) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, lB.M)(this.parameters.MV) && this.misses > this.parameters.MV ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.sV && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.fV
        }
        complete(BB) {
          this.isCompleted = !0, this.resolveRequest(BB)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              tV: this.parameters.tV,
              misses: this.misses,
              lastClickResult: this.lastClickResult
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      }
    };

    function vB() {
      (0, oB.f)(JB.A.Qte, HB ? JB.A.Qte : 0), HB ? yB.h.yH("qteStateUpdated", HB.getState()) : yB.h.yH("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class mB {
      constructor(BB, TB) {
        this.resultPromise = BB, this.tearDownQTE = TB
      }
      static create(BB, TB, dB) {
        const VB = Promise.race([BB, TB]);
        return new mB(VB, dB)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class iB {
      static queueQTE(BB, TB, dB) {
        let VB, yB;
        const pB = new Promise((BB => {
            VB = BB
          })),
          lB = new Promise((BB => {
            yB = () => {
              BB("qteTornDown")
            }
          })),
          JB = Promise.race([pB, lB]).then((() => {})),
          YB = new kB(BB, TB, dB, yB, JB, VB);
        return uB.set(BB, YB), DB.enqueue(YB), HB || this.processNextQTE(), mB.create(pB, lB, yB)
      }
      static async processNextQTE() {
        if (HB || DB.OD()) return void(DB.OD() && HB && (HB = null, vB()));
        const BB = await DB.dequeue();
        if (!uB.has(BB.id)) return void await this.processNextQTE();
        uB.delete(BB.id);
        const TB = new OB(BB.id, BB.type, BB.parameters, BB.resolveRequest, BB.onDonePromise, BB.tearDownNotification);
        HB = TB, vB();
        try {
          await TB.waitUntilDone()
        } catch (dB) {
          console.error("Error while waiting for QTE to resolve:", dB.stack)
        }
        HB === TB && (HB.cleanup(), HB = null, vB()), await this.processNextQTE()
      }
      static cancelQTE(BB) {
        if (HB && HB.id === BB) return HB.tearDown(), HB = null, vB(), void this.processNextQTE();
        const TB = uB.get(BB);
        TB && (uB.delete(BB), TB.tearDownNotification())
      }
      static getCurrentState() {
        return HB ? HB.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        HB && (HB.tearDown(), HB = null), uB.forEach(((BB, TB) => {
          this.cancelQTE(TB)
        })), DB.emptyQueue(), uB.clear(), vB()
      }
    }
  },
  4192: (BB, TB, dB) => {
    dB.d(TB, {
      $: () => UB,
      A: () => pB,
      Ab: () => uB,
      C: () => gB,
      Db: () => SB,
      G: () => ZB,
      Hb: () => yB,
      J: () => oB,
      Jb: () => aB,
      L: () => YB,
      P: () => vB,
      Q: () => iB,
      R: () => NB,
      S: () => mB,
      V: () => tB,
      X: () => cB,
      _: () => rB,
      ab: () => fB,
      cb: () => zB,
      e: () => RB,
      eb: () => sB,
      f: () => QB,
      fb: () => EB,
      h: () => OB,
      hb: () => HB,
      i: () => PB,
      l: () => LB,
      lb: () => MB,
      m: () => kB,
      p: () => lB,
      pb: () => IB,
      qb: () => wB,
      t: () => JB,
      tb: () => FB,
      w: () => VB,
      wb: () => KB,
      zb: () => DB
    });
    const VB = 32,
      yB = 33.333333333333336,
      pB = {
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
      lB = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      JB = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      YB = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      gB = {
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
      oB = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      kB = {
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
      LB = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      OB = 4,
      DB = 4,
      uB = 65535,
      HB = {
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
      EB = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      vB = 88,
      mB = 0,
      iB = 24,
      NB = 48,
      tB = 80,
      fB = {
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
      sB = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      MB = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      zB = {
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
      wB = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      UB = 65535,
      FB = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      KB = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      rB = 2,
      IB = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      cB = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      SB = {
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
      PB = {
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
      QB = {
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
      RB = 8,
      aB = {
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
      ZB = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4169: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => wB,
      D: () => UB,
      H: () => vB,
      K: () => lB,
      N: () => JB,
      P: () => MB,
      e: () => sB,
      g: () => iB,
      j: () => KB,
      n: () => FB,
      p: () => EB,
      s: () => tB,
      t: () => mB,
      v: () => NB,
      w: () => zB
    });
    var VB = dB(4177);
    const yB = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let pB = yB;

    function lB(BB) {
      pB = null !== BB && void 0 !== BB ? BB : yB
    }

    function JB() {
      return pB
    }
    const YB = new Set,
      gB = new Set;
    let oB = -1;
    const kB = new Set,
      LB = new Set;
    let OB = 0,
      DB = 0;
    const uB = new Set,
      HB = new Set;

    function EB(BB) {
      return YB.add(BB), () => {
        YB.delete(BB)
      }
    }

    function vB(BB, TB) {
      for (const VB of YB) try {
        VB(BB)
      } catch (dB) {
        TB(dB)
      }
    }

    function mB(BB) {
      return gB.add(BB), () => {
        gB.delete(BB)
      }
    }

    function iB(BB, TB) {
      const dB = oB < 0 ? 0 : BB - oB;
      oB = BB;
      for (const yB of gB) try {
        yB(dB)
      } catch (VB) {
        TB(VB)
      }
    }

    function NB(BB) {
      return kB.add(BB), () => {
        kB.delete(BB)
      }
    }

    function tB(BB) {
      return LB.add(BB), () => {
        LB.delete(BB)
      }
    }
    let fB = 0;

    function sB(BB) {
      fB += BB
    }

    function MB() {
      const BB = fB;
      return fB = 0, BB
    }

    function zB(BB) {
      return uB.add(BB), () => {
        uB.delete(BB)
      }
    }

    function wB(BB) {
      return HB.add(BB), () => {
        HB.delete(BB)
      }
    }

    function UB() {
      OB = 0, DB = 0, oB = -1
    }

    function FB(BB, TB) {
      if ("paced" === BB) return DB += TB, null;
      if ("drawn" !== BB && "skipped" !== BB) return null;
      const dB = TB + DB;
      return DB = 0, dB
    }

    function KB(BB, TB, dB, yB) {
      const pB = (0, VB.k)(TB),
        lB = BB > 0 ? performance.now() : 0;
      for (let VB = 0; VB < BB; VB++)
        for (const BB of uB) try {
          BB()
        } catch (JB) {
          yB(JB)
        }
      if (BB > 0 && sB(performance.now() - lB), null !== dB) {
        for (const BB of kB) try {
          BB(dB)
        } catch (JB) {
          yB(JB)
        }
        OB += dB
      }
      if ("drawn" === TB) {
        const BB = OB;
        OB = 0;
        for (const TB of LB) try {
          TB(BB)
        } catch (JB) {
          yB(JB)
        }
      }
      for (const VB of HB) try {
        VB(BB, pB)
      } catch (JB) {
        yB(JB)
      }
    }
  },
  4186: (BB, TB, dB) => {
    dB.d(TB, {
      $c: () => VB.qb,
      $d: () => cB,
      B: () => VB.f,
      Bb: () => TT,
      Bc: () => OT,
      Bd: () => aB,
      Cc: () => gT,
      Cd: () => XB,
      Db: () => yB.g,
      Dd: () => RB,
      Eb: () => sB,
      F: () => gB,
      Fb: () => QB,
      Fd: () => CB,
      G: () => VB.h,
      Gc: () => VT,
      I: () => jB,
      Jb: () => FB,
      Jd: () => WB,
      K: () => VB.m,
      Kc: () => VB.ab,
      M: () => VB.p,
      Mb: () => wB,
      Mc: () => VB.cb,
      Md: () => qB,
      Nc: () => VB.eb,
      Nd: () => GB,
      Ob: () => VB.J,
      P: () => VB.t,
      Pd: () => lT,
      Rc: () => nB,
      Rd: () => DT,
      Sb: () => KB,
      T: () => kB,
      Tc: () => VB.fb,
      Ud: () => iB,
      Wb: () => NB,
      Wc: () => VB.hb,
      Wd: () => xB,
      X: () => vB,
      Yb: () => pT,
      Yc: () => VB.lb,
      Zb: () => mB,
      _: () => VB.w,
      _d: () => SB,
      ac: () => oT,
      b: () => BT,
      cb: () => VB.A,
      cc: () => yB.o,
      ce: () => IB,
      dd: () => VB.tb,
      ec: () => EB,
      f: () => uB,
      fb: () => ZB,
      fe: () => YB,
      g: () => DB,
      hb: () => yT,
      hc: () => dT,
      hd: () => VB.wb,
      i: () => YT,
      ic: () => VB.P,
      j: () => MB,
      je: () => PB,
      kc: () => VB.Q,
      kd: () => zB,
      l: () => fB,
      lb: () => oB,
      le: () => uT,
      mc: () => VB.R,
      n: () => VB.e,
      nd: () => VB.zb,
      od: () => VB.Ab,
      pb: () => VB.C,
      pc: () => VB.S,
      pe: () => OB,
      q: () => kT,
      r: () => UB,
      s: () => lB,
      sd: () => VB.Hb,
      t: () => rB,
      tb: () => hB,
      tc: () => VB.V,
      ud: () => pB,
      v: () => LT,
      vb: () => AB,
      vd: () => HB,
      x: () => bB,
      xc: () => VB.$,
      xd: () => JT,
      yb: () => eB
    });
    var VB = dB(4192),
      yB = dB(2101);
    const pB = Math.round(1e3 / VB.Hb),
      lB = 4,
      JB = 2;

    function YB() {
      return crypto.getRandomValues(new Uint32Array(JB))
    }
    const gB = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      oB = 16,
      kB = {
        Draws: 1,
        NetAll: 2
      },
      LB = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function OB(BB) {
      return (BB.nametagsHidden ? tB.NametagsHidden : 0) | (BB.crouchToggle ? tB.CrouchToggle : 0) | (BB.bhopDisabled ? tB.BhopDisabled : 0) | (BB.disableBobbing ? tB.DisableBobbing : 0) | (BB.ezTowering ? tB.EzTowering : 0) | (BB.ezBridging ? tB.EzBridging : 0) | (BB.showChunkBorders ? tB.ShowChunkBorders : 0) | (BB.edgeGuard ? tB.EdgeGuard : 0)
    }
    const DB = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      uB = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      HB = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      EB = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      vB = 5,
      mB = 4294967295;

    function iB(BB) {
      return (BB.showFog ? LB.ShowFog : 0) | (BB.lighting ? LB.Lighting : 0) | (BB.chunkFade ? LB.ChunkFade : 0)
    }
    const NB = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      tB = {
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
      fB = {
        Release: 1,
        KeepTouches: 2
      },
      sB = {
        Point: 1,
        Stamped: 2
      },
      MB = {
        Add: 1,
        Clear: 2
      },
      zB = 1,
      wB = 8,
      UB = 16777215,
      FB = 4,
      KB = {
        Resume: 1
      },
      rB = {
        Held: 1
      };

    function IB(BB, TB) {
      return (BB | TB << 8) >>> 0
    }

    function cB(BB) {
      return 255 & BB
    }

    function SB(BB) {
      return BB >>> 8
    }

    function PB(BB) {
      return BB + 3 & -4
    }
    const QB = 16777216,
      RB = 20;
    const aB = 8,
      ZB = 8,
      XB = 16777216,
      WB = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hB = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      CB = 16,
      GB = {
        Lost: 0,
        Gone: 1
      },
      qB = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function xB(BB) {
      return BB === qB.WorldgenSeed || BB === qB.Generate
    }
    const jB = 4,
      AB = 99,
      bB = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      nB = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      eB = 12,
      BT = 16,
      TT = 4,
      dT = 12,
      VT = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      yT = 4,
      pT = 8,
      lT = 8,
      JT = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      YT = {
        Crit: 1,
        HitSelf: 2
      },
      gT = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      oT = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      kT = 12,
      LT = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      OT = 67108864;

    function DT(BB) {
      for (const [TB, dB] of Object.entries(VB.f))
        if (dB === BB) return TB;
      return `Unknown${BB}`
    }

    function uT(BB) {
      return {
        status: BB[VB.A.Status],
        lastError: BB[VB.A.LastError],
        lastErrorDetail: BB[VB.A.LastErrorDetail],
        errorCount: BB[VB.A.ErrorCount],
        frameIndex: BB[VB.A.FrameIndex],
        tickIndex: BB[VB.A.TickIndex],
        renderPending: BB[VB.A.RenderPending],
        firstView: BB[VB.A.FirstView],
        chunksCancelled: BB[VB.A.ChunksCancelled]
      }
    }
  },
  4177: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      h: () => pB,
      k: () => yB
    });
    var VB = dB(4186);

    function yB(BB) {
      return "none" !== BB
    }

    function pB(BB, TB) {
      if (!BB) return "none";
      switch (TB) {
        case VB.P.Drawn:
          return "drawn";
        case VB.P.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function lB(BB) {
      return "drawn" === BB
    }
  },
  4199: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => YB,
      c: () => pB,
      f: () => JB
    });
    var VB = dB(2101),
      yB = dB(4206);

    function pB(BB) {
      let {
        action: TB,
        flags: dB
      } = BB;
      return "mid-fire" === TB && 0 !== (dB & VB.e.AltLeftClick)
    }
    const lB = new Set;

    function JB(BB) {
      return lB.add(BB), () => {
        lB.delete(BB)
      }
    }

    function YB(BB) {
      const TB = yB.e[255 & BB];
      if (void 0 === TB) return;
      const dB = BB >>> 8 & 255,
        pB = {
          action: TB,
          down: 0 !== (dB & VB.e.Down),
          flags: dB,
          press: BB >>> 16
        };
      for (const VB of lB) VB(pB)
    }
  },
  4206: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => yB,
      i: () => pB,
      j: () => lB,
      n: () => VB,
      q: () => JB
    });
    const VB = {
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
      yB = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      pB = {
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
      lB = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      JB = [16]
  },
  4209: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      d: () => lB,
      f: () => gB
    });
    var VB = dB(2101),
      yB = dB(2109);
    const pB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function lB(BB) {
      return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !pB.has(BB.type))
    }

    function JB(BB) {
      let TB = null;
      const dB = dB => {
          const yB = lB(dB);
          yB !== TB && (TB = yB, BB(VB.k.UiCapture, VB.A.Keyboard, 0, 0, yB ? VB.A.Keyboard : 0))
        },
        yB = BB => {
          dB(BB.target)
        },
        pB = BB => {
          dB(BB.relatedTarget)
        },
        JB = () => {
          dB(document.activeElement)
        },
        YB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", yB, YB), document.addEventListener("focusout", pB, YB), document.addEventListener("keydown", JB, YB), dB(document.activeElement), () => {
        document.removeEventListener("focusin", yB, YB), document.removeEventListener("focusout", pB, YB), document.removeEventListener("keydown", JB, YB)
      }
    }
    const YB = new Map;

    function gB(BB, TB) {
      var dB;
      let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      YB.set(VB, (null !== (dB = YB.get(VB)) && void 0 !== dB ? dB : 0) & ~BB | TB & BB);
      let pB = 0;
      for (const yB of YB.values()) pB |= yB;
      return (0, yB.x)(BB, pB & BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);