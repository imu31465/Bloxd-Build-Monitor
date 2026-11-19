export const id = 83;
export const ids = [83];
export const modules = {
  4361: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => VY,
      e: () => WY
    });
    var FY = DY(1307),
      AY = DY(25);
    var IY = DY(341);
    var RY = DY(625);
    var OY = DY(2251),
      gY = DY(4365),
      aY = DY(4386),
      vY = DY(4396);
    class uY {
      constructor(YY, rY, DY, FY, AY, IY) {
        this.id = YY, this.type = rY, this.parameters = DY, this.tearDownNotification = FY, this.onDonePromise = AY, this.resolveRequest = IY
      }
    }
    const sY = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class iY {
      constructor(YY, rY, DY, FY, AY, IY) {
        this.id = YY, this.type = rY, this.parameters = DY, this.resolveRequest = FY, this.onDonePromise = AY, this.tearDownNotification = IY, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const RY = WY[rY];
        if (!RY) throw console.error(`No QTE implementation registered for type: ${rY}`), new Error(`No QTE implementation registered for type: ${rY}`);
        this.implementation = new RY(DY, (YY => {
          this.isCompleted = !0, this.resolveRequest(YY)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = AY.g.subscribe("QTEMouseState", (YY => {
          let {
            isDown: rY
          } = YY;
          this.isCompleted || this.implementation.handleMouseInput(rY)
        })), this.stopInputActions = (0, aY.h)((YY => {
          this.isCompleted || !sY.has(YY.action) && !(0, aY.e)(YY) || this.implementation.handleMouseInput(YY.down)
        })), this.tickSub = AY.g.subscribe("noaTick", (YY => {
          if (this.isCompleted) return;
          const rY = YY / 1e3;
          this.implementation.handleTick(rY)
        })), this.stopShellTicks = (0, gY.w)((() => {
          this.isCompleted || this.implementation.handleTick(OY.t / 1e3)
        }))
      }
      cleanup() {
        var YY, rY;
        this.mouseSub && (AY.g.unsubscribe(this.mouseSub), this.mouseSub = null), null === (YY = this.stopInputActions) || void 0 === YY || YY.call(this), this.stopInputActions = null, null === (rY = this.stopShellTicks) || void 0 === rY || rY.call(this), this.stopShellTicks = null, this.tickSub && (AY.g.unsubscribe(this.tickSub), this.tickSub = null)
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
    const yY = new FY.c,
      QY = new Map;
    let oY = null;
    const WY = {
      progressBar: class {
        constructor(YY, rY, DY) {
          var FY, AY, IY, RY;
          this.resolveRequest = rY, this.tearDownNotification = DY, this.progress = 0, this.bD = void 0, this.XD = void 0, this.qD = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const OY = YY;
          this.bD = null !== (FY = OY.bD) && void 0 !== FY ? FY : .075, this.XD = null !== (AY = OY.XD) && void 0 !== AY ? AY : 1, this.progress = null !== (IY = OY.wD) && void 0 !== IY ? IY : 30, this.qD = null !== (RY = OY.qD) && void 0 !== RY && RY, this.parameters = OY
        }
        handleMouseInput(YY) {
          YY && !this.isCompleted && (this.clickCount++, this.progress += this.XD, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.bD, this.qD && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(YY) {
          this.isCompleted = !0, this.resolveRequest(YY)
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
        constructor(YY, rY, DY) {
          var FY;
          this.resolveRequest = rY, this.tearDownNotification = DY, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = YY, this.timeWindowMs = null !== (FY = this.parameters.GD) && void 0 !== FY ? FY : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(YY) {
          if (!YY || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(YY) {
          this.isCompleted = !0, this.resolveRequest(YY)
        }
        getState() {
          const YY = Date.now() - this.startTime,
            rY = Math.max(0, this.timeWindowMs - YY);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: rY,
              GD: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(YY, rY, DY) {
          var FY;
          this.resolveRequest = rY, this.tearDownNotification = DY, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const AY = YY;
          this.parameters = {
            ...AY,
            UD: IY.c.clamp(AY.UD, .05, 1)
          }, this.progress = null !== (FY = AY.wD) && void 0 !== FY ? FY : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(YY) {
          this.isMouseDown = YY
        }
        handleTick(YY) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(YY))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const YY = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += YY * this.parameters.LD * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const YY = IY.c.clamp(1 - .7 * this.parameters.tD, 0, 1.4);
          return Math.floor(60 * YY + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.YF : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = IY.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const YY = this.parameters.UD / 2,
            rY = YY,
            DY = 1 - YY;
          this.catchZonePosition <= rY ? (this.catchZonePosition = rY, this.catchZoneVelocity = 0) : this.catchZonePosition >= DY && (this.catchZonePosition = DY, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const YY = this.parameters.UD / 2;
          return this.moverPosition >= this.catchZonePosition - YY && this.moverPosition <= this.catchZonePosition + YY
        }
        updateProgress(YY) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.rF * YY : this.progress -= this.parameters.DF * YY, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.qD && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(YY) {
          this.isCompleted = !0, this.resolveRequest(YY)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              UD: this.parameters.UD,
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
        constructor(YY, rY, DY) {
          var FY, AY, RY, OY, gY;
          this.resolveRequest = rY, this.tearDownNotification = DY, this.startTime = void 0, this.speed = void 0, this.AF = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const aY = YY;
          this.parameters = {
            ...aY,
            speed: null !== (FY = aY.speed) && void 0 !== FY ? FY : .5,
            AF: IY.c.clamp(aY.AF, .05, 1),
            label: null !== (AY = aY.label) && void 0 !== AY ? AY : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (RY = aY.icon) && void 0 !== RY ? RY : null,
            scale: null !== (OY = aY.scale) && void 0 !== OY ? OY : 1,
            rotation: null !== (gY = aY.rotation) && void 0 !== gY ? gY : 0
          }, this.speed = this.parameters.speed, this.AF = this.parameters.AF, this.startTime = Date.now()
        }
        handleMouseInput(YY) {
          if (YY) {
            this.updateMarkerPosition();
            const YY = Math.abs(this.markerPosition - .5) <= this.AF / 2;
            this.complete(YY)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const YY = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = YY <= .5 ? 2 * YY : 2 - 2 * YY
        }
        complete(YY) {
          this.isCompleted = !0, this.resolveRequest(YY)
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
        constructor(YY, rY, DY) {
          this.resolveRequest = rY, this.tearDownNotification = DY, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = YY, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(YY) {
          if (!YY || this.isCompleted) return;
          const rY = this.getOuterCircleProgress();
          if (rY <= this.parameters.aF && rY >= -this.parameters.aF) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.RF) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, RY.H)(this.parameters.vF) && this.misses > this.parameters.vF ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.aF && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.gF
        }
        complete(YY) {
          this.isCompleted = !0, this.resolveRequest(YY)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              RF: this.parameters.RF,
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

    function EY() {
      (0, vY.k)(OY.w.Qte, oY ? OY.w.Qte : 0), oY ? AY.g.vo("qteStateUpdated", oY.getState()) : AY.g.vo("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class mY {
      constructor(YY, rY) {
        this.resultPromise = YY, this.tearDownQTE = rY
      }
      static create(YY, rY, DY) {
        const FY = Promise.race([YY, rY]);
        return new mY(FY, DY)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class VY {
      static queueQTE(YY, rY, DY) {
        let FY, AY;
        const IY = new Promise((YY => {
            FY = YY
          })),
          RY = new Promise((YY => {
            AY = () => {
              YY("qteTornDown")
            }
          })),
          OY = Promise.race([IY, RY]).then((() => {})),
          gY = new uY(YY, rY, DY, AY, OY, FY);
        return QY.set(YY, gY), yY.enqueue(gY), oY || this.processNextQTE(), mY.create(IY, RY, AY)
      }
      static async processNextQTE() {
        if (oY || yY.Ey()) return void(yY.Ey() && oY && (oY = null, EY()));
        const YY = await yY.dequeue();
        if (!QY.has(YY.id)) return void await this.processNextQTE();
        QY.delete(YY.id);
        const rY = new iY(YY.id, YY.type, YY.parameters, YY.resolveRequest, YY.onDonePromise, YY.tearDownNotification);
        oY = rY, EY();
        try {
          await rY.waitUntilDone()
        } catch (DY) {
          console.error("Error while waiting for QTE to resolve:", DY.stack)
        }
        oY === rY && (oY.cleanup(), oY = null, EY()), await this.processNextQTE()
      }
      static cancelQTE(YY) {
        if (oY && oY.id === YY) return oY.tearDown(), oY = null, EY(), void this.processNextQTE();
        const rY = QY.get(YY);
        rY && (QY.delete(YY), rY.tearDownNotification())
      }
      static getCurrentState() {
        return oY ? oY.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        oY && (oY.tearDown(), oY = null), QY.forEach(((YY, rY) => {
          this.cancelQTE(rY)
        })), yY.emptyQueue(), QY.clear(), EY()
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
  4386: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => gY,
      e: () => IY,
      h: () => OY
    });
    var FY = DY(2251),
      AY = DY(4392);

    function IY(YY) {
      let {
        action: rY,
        flags: DY
      } = YY;
      return "mid-fire" === rY && 0 !== (DY & FY.c.AltLeftClick)
    }
    const RY = new Set;

    function OY(YY) {
      return RY.add(YY), () => {
        RY.delete(YY)
      }
    }

    function gY(YY) {
      const rY = AY.c[255 & YY];
      if (void 0 === rY) return;
      const DY = YY >>> 8 & 255,
        IY = {
          action: rY,
          down: 0 !== (DY & FY.c.Down),
          flags: DY,
          press: YY >>> 16
        };
      for (const FY of RY) FY(IY)
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
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);