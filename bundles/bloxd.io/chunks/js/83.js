export const id = 83;
export const ids = [83];
export const modules = {
  4438: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => xU,
      d: () => eU
    });
    var tU = gU(1299),
      pU = gU(24);
    var EU = gU(311);
    var PU = gU(581);
    var TU = gU(2233),
      qU = gU(4443),
      KU = gU(4460),
      cU = gU(4477);
    class GU {
      constructor(UU, RU, gU, tU, pU, EU) {
        this.id = UU, this.type = RU, this.parameters = gU, this.tearDownNotification = tU, this.onDonePromise = pU, this.resolveRequest = EU
      }
    }
    const jU = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class uU {
      constructor(UU, RU, gU, tU, pU, EU) {
        this.id = UU, this.type = RU, this.parameters = gU, this.resolveRequest = tU, this.onDonePromise = pU, this.tearDownNotification = EU, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const PU = eU[RU];
        if (!PU) throw console.error(`No QTE implementation registered for type: ${RU}`), new Error(`No QTE implementation registered for type: ${RU}`);
        this.implementation = new PU(gU, (UU => {
          this.isCompleted = !0, this.resolveRequest(UU)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = pU.p.subscribe("QTEMouseState", (UU => {
          let {
            isDown: RU
          } = UU;
          this.isCompleted || this.implementation.handleMouseInput(RU)
        })), this.stopInputActions = (0, KU.i)((UU => {
          this.isCompleted || !jU.has(UU.action) && !(0, KU.e)(UU) || this.implementation.handleMouseInput(UU.down)
        })), this.tickSub = pU.p.subscribe("noaTick", (UU => {
          if (this.isCompleted) return;
          const RU = UU / 1e3;
          this.implementation.handleTick(RU)
        })), this.stopShellTicks = (0, qU.x)((() => {
          this.isCompleted || this.implementation.handleTick(TU.u / 1e3)
        }))
      }
      cleanup() {
        var UU, RU;
        this.mouseSub && (pU.p.unsubscribe(this.mouseSub), this.mouseSub = null), null === (UU = this.stopInputActions) || void 0 === UU || UU.call(this), this.stopInputActions = null, null === (RU = this.stopShellTicks) || void 0 === RU || RU.call(this), this.stopShellTicks = null, this.tickSub && (pU.p.unsubscribe(this.tickSub), this.tickSub = null)
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
    const CU = new tU.d,
      hU = new Map;
    let QU = null;
    const eU = {
      progressBar: class {
        constructor(UU, RU, gU) {
          var tU, pU, EU, PU;
          this.resolveRequest = RU, this.tearDownNotification = gU, this.progress = 0, this.YU = void 0, this.BU = void 0, this.VU = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const TU = UU;
          this.YU = null !== (tU = TU.YU) && void 0 !== tU ? tU : .075, this.BU = null !== (pU = TU.BU) && void 0 !== pU ? pU : 1, this.progress = null !== (EU = TU.aU) && void 0 !== EU ? EU : 30, this.VU = null !== (PU = TU.VU) && void 0 !== PU && PU, this.parameters = TU
        }
        handleMouseInput(UU) {
          UU && !this.isCompleted && (this.clickCount++, this.progress += this.BU, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.YU, this.VU && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(UU) {
          this.isCompleted = !0, this.resolveRequest(UU)
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
        constructor(UU, RU, gU) {
          var tU;
          this.resolveRequest = RU, this.tearDownNotification = gU, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = UU, this.timeWindowMs = null !== (tU = this.parameters.HU) && void 0 !== tU ? tU : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(UU) {
          if (!UU || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(UU) {
          this.isCompleted = !0, this.resolveRequest(UU)
        }
        getState() {
          const UU = Date.now() - this.startTime,
            RU = Math.max(0, this.timeWindowMs - UU);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: RU,
              HU: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(UU, RU, gU) {
          var tU;
          this.resolveRequest = RU, this.tearDownNotification = gU, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const pU = UU;
          this.parameters = {
            ...pU,
            kU: EU.c.clamp(pU.kU, .05, 1)
          }, this.progress = null !== (tU = pU.aU) && void 0 !== tU ? tU : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(UU) {
          this.isMouseDown = UU
        }
        handleTick(UU) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(UU))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const UU = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += UU * this.parameters.FU * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const UU = EU.c.clamp(1 - .7 * this.parameters.iU, 0, 1.4);
          return Math.floor(60 * UU + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.AU : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = EU.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const UU = this.parameters.kU / 2,
            RU = UU,
            gU = 1 - UU;
          this.catchZonePosition <= RU ? (this.catchZonePosition = RU, this.catchZoneVelocity = 0) : this.catchZonePosition >= gU && (this.catchZonePosition = gU, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const UU = this.parameters.kU / 2;
          return this.moverPosition >= this.catchZonePosition - UU && this.moverPosition <= this.catchZonePosition + UU
        }
        updateProgress(UU) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.zU * UU : this.progress -= this.parameters.MU * UU, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.VU && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(UU) {
          this.isCompleted = !0, this.resolveRequest(UU)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              kU: this.parameters.kU,
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
        constructor(UU, RU, gU) {
          var tU, pU, PU, TU, qU;
          this.resolveRequest = RU, this.tearDownNotification = gU, this.startTime = void 0, this.speed = void 0, this.LU = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const KU = UU;
          this.parameters = {
            ...KU,
            speed: null !== (tU = KU.speed) && void 0 !== tU ? tU : .5,
            LU: EU.c.clamp(KU.LU, .05, 1),
            label: null !== (pU = KU.label) && void 0 !== pU ? pU : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (PU = KU.icon) && void 0 !== PU ? PU : null,
            scale: null !== (TU = KU.scale) && void 0 !== TU ? TU : 1,
            rotation: null !== (qU = KU.rotation) && void 0 !== qU ? qU : 0
          }, this.speed = this.parameters.speed, this.LU = this.parameters.LU, this.startTime = Date.now()
        }
        handleMouseInput(UU) {
          if (UU) {
            this.updateMarkerPosition();
            const UU = Math.abs(this.markerPosition - .5) <= this.LU / 2;
            this.complete(UU)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const UU = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = UU <= .5 ? 2 * UU : 2 - 2 * UU
        }
        complete(UU) {
          this.isCompleted = !0, this.resolveRequest(UU)
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
        constructor(UU, RU, gU) {
          this.resolveRequest = RU, this.tearDownNotification = gU, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = UU, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(UU) {
          if (!UU || this.isCompleted) return;
          const RU = this.getOuterCircleProgress();
          if (RU <= this.parameters.UR && RU >= -this.parameters.UR) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.lU) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, PU.E)(this.parameters.RR) && this.misses > this.parameters.RR ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.UR && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.OU
        }
        complete(UU) {
          this.isCompleted = !0, this.resolveRequest(UU)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              lU: this.parameters.lU,
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

    function WU() {
      (0, cU.f)(TU.z.Qte, QU ? TU.z.Qte : 0), QU ? pU.p.yh("qteStateUpdated", QU.getState()) : pU.p.yh("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class fU {
      constructor(UU, RU) {
        this.resultPromise = UU, this.tearDownQTE = RU
      }
      static create(UU, RU, gU) {
        const tU = Promise.race([UU, RU]);
        return new fU(tU, gU)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class xU {
      static queueQTE(UU, RU, gU) {
        let tU, pU;
        const EU = new Promise((UU => {
            tU = UU
          })),
          PU = new Promise((UU => {
            pU = () => {
              UU("qteTornDown")
            }
          })),
          TU = Promise.race([EU, PU]).then((() => {})),
          qU = new GU(UU, RU, gU, pU, TU, tU);
        return hU.set(UU, qU), CU.enqueue(qU), QU || this.processNextQTE(), fU.create(EU, PU, pU)
      }
      static async processNextQTE() {
        if (QU || CU.Lu()) return void(CU.Lu() && QU && (QU = null, WU()));
        const UU = await CU.dequeue();
        if (!hU.has(UU.id)) return void await this.processNextQTE();
        hU.delete(UU.id);
        const RU = new uU(UU.id, UU.type, UU.parameters, UU.resolveRequest, UU.onDonePromise, UU.tearDownNotification);
        QU = RU, WU();
        try {
          await RU.waitUntilDone()
        } catch (gU) {
          console.error("Error while waiting for QTE to resolve:", gU.stack)
        }
        QU === RU && (QU.cleanup(), QU = null, WU()), await this.processNextQTE()
      }
      static cancelQTE(UU) {
        if (QU && QU.id === UU) return QU.tearDown(), QU = null, WU(), void this.processNextQTE();
        const RU = hU.get(UU);
        RU && (hU.delete(UU), RU.tearDownNotification())
      }
      static getCurrentState() {
        return QU ? QU.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        QU && (QU.tearDown(), QU = null), hU.forEach(((UU, RU) => {
          this.cancelQTE(RU)
        })), CU.emptyQueue(), hU.clear(), WU()
      }
    }
  },
  4456: (UU, RU, gU) => {
    gU.d(RU, {
      $: () => oU,
      A: () => EU,
      B: () => CU,
      Db: () => mU,
      F: () => AU,
      G: () => KU,
      Gb: () => YU,
      Hb: () => HU,
      J: () => hU,
      L: () => qU,
      Lb: () => VU,
      M: () => jU,
      N: () => GU,
      Ob: () => XU,
      R: () => JU,
      Rb: () => vU,
      S: () => nU,
      Tb: () => fU,
      V: () => bU,
      X: () => wU,
      Xb: () => xU,
      Zb: () => sU,
      b: () => FU,
      bc: () => pU,
      db: () => SU,
      dc: () => iU,
      e: () => kU,
      g: () => cU,
      hb: () => dU,
      j: () => WU,
      kb: () => rU,
      n: () => yU,
      nb: () => ZU,
      p: () => eU,
      pb: () => BU,
      s: () => QU,
      tb: () => aU,
      v: () => PU,
      w: () => TU,
      wb: () => uU,
      x: () => tU,
      zb: () => IU
    });
    const tU = 32,
      pU = 33.333333333333336,
      EU = {
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
      PU = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      TU = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      qU = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      KU = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      cU = {
        Look: 0,
        Remesh: 1
      },
      GU = 8,
      jU = 1,
      uU = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      CU = {
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
      hU = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      QU = {
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
      eU = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      WU = 4,
      fU = 4,
      xU = 65535,
      mU = {
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
      IU = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      JU = 88,
      wU = 0,
      nU = 24,
      bU = 48,
      oU = 80,
      ZU = {
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
      aU = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      YU = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      BU = {
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
      VU = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      rU = 65535,
      XU = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      vU = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      dU = 2,
      HU = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      SU = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      sU = {
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
      yU = {
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
      kU = {
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
      FU = 8,
      iU = {
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
      AU = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4443: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => oU,
      D: () => ZU,
      F: () => WU,
      G: () => PU,
      J: () => TU,
      L: () => nU,
      c: () => wU,
      e: () => xU,
      i: () => YU,
      l: () => aU,
      n: () => eU,
      o: () => IU,
      s: () => fU,
      u: () => mU,
      x: () => bU
    });
    var tU = gU(4446);
    const pU = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let EU = pU;

    function PU(UU) {
      EU = null !== UU && void 0 !== UU ? UU : pU
    }

    function TU() {
      return EU
    }
    const qU = new Set,
      KU = new Set;
    let cU = -1;
    const GU = new Set,
      jU = new Set;
    let uU = 0,
      CU = 0;
    const hU = new Set,
      QU = new Set;

    function eU(UU) {
      return qU.add(UU), () => {
        qU.delete(UU)
      }
    }

    function WU(UU, RU) {
      for (const tU of qU) try {
        tU(UU)
      } catch (gU) {
        RU(gU)
      }
    }

    function fU(UU) {
      return KU.add(UU), () => {
        KU.delete(UU)
      }
    }

    function xU(UU, RU) {
      const gU = cU < 0 ? 0 : UU - cU;
      cU = UU;
      for (const pU of KU) try {
        pU(gU)
      } catch (tU) {
        RU(tU)
      }
    }

    function mU(UU) {
      return GU.add(UU), () => {
        GU.delete(UU)
      }
    }

    function IU(UU) {
      return jU.add(UU), () => {
        jU.delete(UU)
      }
    }
    let JU = 0;

    function wU(UU) {
      JU += UU
    }

    function nU() {
      const UU = JU;
      return JU = 0, UU
    }

    function bU(UU) {
      return hU.add(UU), () => {
        hU.delete(UU)
      }
    }

    function oU(UU) {
      return QU.add(UU), () => {
        QU.delete(UU)
      }
    }

    function ZU() {
      uU = 0, CU = 0, cU = -1
    }

    function aU(UU, RU) {
      if ("paced" === UU) return CU += RU, null;
      if ("drawn" !== UU && "skipped" !== UU) return null;
      const gU = RU + CU;
      return CU = 0, gU
    }

    function YU(UU, RU, gU, pU) {
      const EU = (0, tU.j)(RU),
        PU = UU > 0 ? performance.now() : 0;
      for (let tU = 0; tU < UU; tU++)
        for (const UU of hU) try {
          UU()
        } catch (TU) {
          pU(TU)
        }
      if (UU > 0 && wU(performance.now() - PU), null !== gU) {
        for (const UU of GU) try {
          UU(gU)
        } catch (TU) {
          pU(TU)
        }
        uU += gU
      }
      if ("drawn" === RU) {
        const UU = uU;
        uU = 0;
        for (const RU of jU) try {
          RU(UU)
        } catch (TU) {
          pU(TU)
        }
      }
      for (const tU of QU) try {
        tU(UU, EU)
      } catch (TU) {
        pU(TU)
      }
    }
  },
  4449: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => BU,
      Bc: () => tU.V,
      Bd: () => QU,
      Cc: () => tU.X,
      Db: () => LU,
      Ec: () => tU.$,
      F: () => jR,
      Fd: () => TR,
      Gb: () => OU,
      Hc: () => tU.kb,
      Id: () => SU,
      J: () => NU,
      Jc: () => uR,
      Kb: () => RR,
      L: () => tU.e,
      Lb: () => pU.d,
      Ld: () => yU,
      Mb: () => wU,
      Nc: () => KR,
      Ob: () => dU,
      Oc: () => tR,
      Od: () => HU,
      P: () => KU,
      Pb: () => aU,
      Pc: () => tU.nb,
      Pd: () => iU,
      R: () => tU.g,
      Rc: () => tU.pb,
      Sc: () => tU.tb,
      Tb: () => oU,
      U: () => tU.j,
      Uc: () => lU,
      V: () => DU,
      Vd: () => kU,
      Wb: () => tU.J,
      Wc: () => tU.zb,
      Xd: () => zU,
      Z: () => tU.s,
      Zb: () => YU,
      Zc: () => tU.Db,
      _: () => tU.v,
      _d: () => AU,
      ab: () => tU.w,
      ac: () => mU,
      ae: () => PR,
      b: () => UR,
      bd: () => tU.Gb,
      c: () => hU,
      cb: () => GU,
      de: () => CR,
      ec: () => ER,
      ee: () => xU,
      f: () => CU,
      fb: () => WU,
      fd: () => tU.Lb,
      fe: () => MU,
      g: () => qR,
      gc: () => fU,
      hd: () => tU.Ob,
      ib: () => tU.x,
      ie: () => XU,
      j: () => nU,
      jb: () => tU.A,
      kb: () => sU,
      kc: () => cR,
      kd: () => tU.Rb,
      ke: () => rU,
      ld: () => bU,
      m: () => JU,
      md: () => tU.Tb,
      me: () => VU,
      ob: () => pR,
      oc: () => pU.i,
      p: () => tU.b,
      pe: () => qU,
      qc: () => eU,
      qd: () => tU.Xb,
      s: () => GR,
      sb: () => cU,
      te: () => vU,
      uc: () => gR,
      ud: () => tU.bc,
      vb: () => tU.B,
      w: () => ZU,
      wc: () => tU.R,
      we: () => hR,
      x: () => PU,
      xd: () => EU,
      zb: () => FU,
      zc: () => tU.S,
      ze: () => uU
    });
    var tU = gU(4456),
      pU = gU(2233);
    const EU = Math.round(1e3 / tU.bc),
      PU = 4,
      TU = 2;

    function qU() {
      return crypto.getRandomValues(new Uint32Array(TU))
    }
    const KU = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      cU = 16,
      GU = {
        Draws: 1,
        NetAll: 2
      },
      jU = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function uU(UU) {
      return (UU.nametagsHidden ? IU.NametagsHidden : 0) | (UU.crouchToggle ? IU.CrouchToggle : 0) | (UU.bhopDisabled ? IU.BhopDisabled : 0) | (UU.disableBobbing ? IU.DisableBobbing : 0) | (UU.ezTowering ? IU.EzTowering : 0) | (UU.ezBridging ? IU.EzBridging : 0) | (UU.showChunkBorders ? IU.ShowChunkBorders : 0)
    }
    const CU = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      hU = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      QU = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      eU = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      WU = 5,
      fU = 4294967295;

    function xU(UU) {
      return (UU.showFog ? jU.ShowFog : 0) | (UU.lighting ? jU.Lighting : 0) | (UU.chunkFade ? jU.ChunkFade : 0)
    }
    const mU = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      IU = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      JU = {
        Release: 1,
        KeepTouches: 2
      },
      wU = {
        Point: 1,
        Stamped: 2
      },
      nU = {
        Add: 1,
        Clear: 2
      },
      bU = 1,
      oU = 8,
      ZU = 16777215,
      aU = 4,
      YU = {
        Resume: 1
      },
      BU = {
        Held: 1
      };

    function VU(UU, RU) {
      return (UU | RU << 8) >>> 0
    }

    function rU(UU) {
      return 255 & UU
    }

    function XU(UU) {
      return UU >>> 8
    }

    function vU(UU) {
      return UU + 3 & -4
    }
    const dU = 16777216,
      HU = 20;
    const SU = 8,
      sU = 8,
      yU = 16777216,
      kU = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      FU = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      iU = 16,
      AU = {
        Lost: 0,
        Gone: 1
      },
      zU = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function MU(UU) {
      return UU === zU.WorldgenSeed || UU === zU.Generate
    }
    const DU = 4,
      LU = 99,
      NU = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      lU = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      OU = 12,
      UR = 16,
      RR = 4,
      gR = 12,
      tR = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      pR = 4,
      ER = 8,
      PR = 8,
      TR = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      qR = {
        Crit: 1,
        HitSelf: 2
      },
      KR = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      cR = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      GR = 12,
      jR = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      uR = 67108864;

    function CR(UU) {
      for (const [RU, gU] of Object.entries(tU.e))
        if (gU === UU) return RU;
      return `Unknown${UU}`
    }

    function hR(UU) {
      return {
        status: UU[tU.A.Status],
        lastError: UU[tU.A.LastError],
        lastErrorDetail: UU[tU.A.LastErrorDetail],
        errorCount: UU[tU.A.ErrorCount],
        frameIndex: UU[tU.A.FrameIndex],
        tickIndex: UU[tU.A.TickIndex],
        renderPending: UU[tU.A.RenderPending],
        firstView: UU[tU.A.FirstView],
        chunksCancelled: UU[tU.A.ChunksCancelled]
      }
    }
  },
  4446: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      f: () => EU,
      j: () => pU
    });
    var tU = gU(4449);

    function pU(UU) {
      return "none" !== UU
    }

    function EU(UU, RU) {
      if (!UU) return "none";
      switch (RU) {
        case tU.ab.Drawn:
          return "drawn";
        case tU.ab.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function PU(UU) {
      return "drawn" === UU
    }
  },
  4460: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => qU,
      e: () => EU,
      i: () => TU
    });
    var tU = gU(2233),
      pU = gU(4469);

    function EU(UU) {
      let {
        action: RU,
        flags: gU
      } = UU;
      return "mid-fire" === RU && 0 !== (gU & tU.b.AltLeftClick)
    }
    const PU = new Set;

    function TU(UU) {
      return PU.add(UU), () => {
        PU.delete(UU)
      }
    }

    function qU(UU) {
      const RU = pU.e[255 & UU];
      if (void 0 === RU) return;
      const gU = UU >>> 8 & 255,
        EU = {
          action: RU,
          down: 0 !== (gU & tU.b.Down),
          flags: gU,
          press: UU >>> 16
        };
      for (const tU of PU) tU(EU)
    }
  },
  4469: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      g: () => EU,
      j: () => PU,
      n: () => tU,
      r: () => TU
    });
    const tU = {
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
      pU = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      EU = {
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
      PU = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      TU = [16]
  },
  4477: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      e: () => PU,
      f: () => KU
    });
    var tU = gU(2233),
      pU = gU(2241);
    const EU = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function PU(UU) {
      return UU instanceof HTMLElement && (!!(UU.isContentEditable || UU instanceof HTMLTextAreaElement || UU instanceof HTMLSelectElement) || UU instanceof HTMLInputElement && !EU.has(UU.type))
    }

    function TU(UU) {
      let RU = null;
      const gU = gU => {
          const pU = PU(gU);
          pU !== RU && (RU = pU, UU(tU.h.UiCapture, tU.z.Keyboard, 0, 0, pU ? tU.z.Keyboard : 0))
        },
        pU = UU => {
          gU(UU.target)
        },
        EU = UU => {
          gU(UU.relatedTarget)
        },
        TU = () => {
          gU(document.activeElement)
        },
        qU = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", pU, qU), document.addEventListener("focusout", EU, qU), document.addEventListener("keydown", TU, qU), gU(document.activeElement), () => {
        document.removeEventListener("focusin", pU, qU), document.removeEventListener("focusout", EU, qU), document.removeEventListener("keydown", TU, qU)
      }
    }
    const qU = new Map;

    function KU(UU, RU) {
      var gU;
      let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      qU.set(tU, (null !== (gU = qU.get(tU)) && void 0 !== gU ? gU : 0) & ~UU | RU & UU);
      let EU = 0;
      for (const pU of qU.values()) EU |= pU;
      return (0, pU.H)(UU, EU & UU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);