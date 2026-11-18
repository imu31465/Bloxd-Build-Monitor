export const id = 77;
export const ids = [77];
export const modules = {
  4171: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => mJ,
      d: () => xJ
    });
    var FJ = ZJ(1197),
      UJ = ZJ(17);
    var eJ = ZJ(235);
    var XJ = ZJ(535);
    var AJ = ZJ(2146),
      qJ = ZJ(4176),
      jJ = ZJ(4207),
      YJ = ZJ(4217);
    class hJ {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.id = JJ, this.type = cJ, this.parameters = ZJ, this.tearDownNotification = FJ, this.onDonePromise = UJ, this.resolveRequest = eJ
      }
    }
    const DJ = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class sJ {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.id = JJ, this.type = cJ, this.parameters = ZJ, this.resolveRequest = FJ, this.onDonePromise = UJ, this.tearDownNotification = eJ, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const XJ = xJ[cJ];
        if (!XJ) throw console.error(`No QTE implementation registered for type: ${cJ}`), new Error(`No QTE implementation registered for type: ${cJ}`);
        this.implementation = new XJ(ZJ, (JJ => {
          this.isCompleted = !0, this.resolveRequest(JJ)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = UJ.i.subscribe("QTEMouseState", (JJ => {
          let {
            isDown: cJ
          } = JJ;
          this.isCompleted || this.implementation.handleMouseInput(cJ)
        })), this.stopInputActions = (0, jJ.g)((JJ => {
          this.isCompleted || !DJ.has(JJ.action) && !(0, jJ.e)(JJ) || this.implementation.handleMouseInput(JJ.down)
        })), this.tickSub = UJ.i.subscribe("noaTick", (JJ => {
          if (this.isCompleted) return;
          const cJ = JJ / 1e3;
          this.implementation.handleTick(cJ)
        })), this.stopShellTicks = (0, qJ.w)((() => {
          this.isCompleted || this.implementation.handleTick(AJ.y / 1e3)
        }))
      }
      cleanup() {
        var JJ, cJ;
        this.mouseSub && (UJ.i.unsubscribe(this.mouseSub), this.mouseSub = null), null === (JJ = this.stopInputActions) || void 0 === JJ || JJ.call(this), this.stopInputActions = null, null === (cJ = this.stopShellTicks) || void 0 === cJ || cJ.call(this), this.stopShellTicks = null, this.tickSub && (UJ.i.unsubscribe(this.tickSub), this.tickSub = null)
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
    const nJ = new FJ.e,
      GJ = new Map;
    let fJ = null;
    const xJ = {
      progressBar: class {
        constructor(JJ, cJ, ZJ) {
          var FJ, UJ, eJ, XJ;
          this.resolveRequest = cJ, this.tearDownNotification = ZJ, this.progress = 0, this.yU = void 0, this.SU = void 0, this.IU = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const AJ = JJ;
          this.yU = null !== (FJ = AJ.yU) && void 0 !== FJ ? FJ : .075, this.SU = null !== (UJ = AJ.SU) && void 0 !== UJ ? UJ : 1, this.progress = null !== (eJ = AJ.KU) && void 0 !== eJ ? eJ : 30, this.IU = null !== (XJ = AJ.IU) && void 0 !== XJ && XJ, this.parameters = AJ
        }
        handleMouseInput(JJ) {
          JJ && !this.isCompleted && (this.clickCount++, this.progress += this.SU, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.yU, this.IU && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(JJ) {
          this.isCompleted = !0, this.resolveRequest(JJ)
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
        constructor(JJ, cJ, ZJ) {
          var FJ;
          this.resolveRequest = cJ, this.tearDownNotification = ZJ, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = JJ, this.timeWindowMs = null !== (FJ = this.parameters.wU) && void 0 !== FJ ? FJ : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(JJ) {
          if (!JJ || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(JJ) {
          this.isCompleted = !0, this.resolveRequest(JJ)
        }
        getState() {
          const JJ = Date.now() - this.startTime,
            cJ = Math.max(0, this.timeWindowMs - JJ);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: cJ,
              wU: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(JJ, cJ, ZJ) {
          var FJ;
          this.resolveRequest = cJ, this.tearDownNotification = ZJ, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const UJ = JJ;
          this.parameters = {
            ...UJ,
            PU: eJ.c.clamp(UJ.PU, .05, 1)
          }, this.progress = null !== (FJ = UJ.KU) && void 0 !== FJ ? FJ : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(JJ) {
          this.isMouseDown = JJ
        }
        handleTick(JJ) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(JJ))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const JJ = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += JJ * this.parameters.kU * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const JJ = eJ.c.clamp(1 - .7 * this.parameters.pU, 0, 1.4);
          return Math.floor(60 * JJ + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.dU : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = eJ.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const JJ = this.parameters.PU / 2,
            cJ = JJ,
            ZJ = 1 - JJ;
          this.catchZonePosition <= cJ ? (this.catchZonePosition = cJ, this.catchZoneVelocity = 0) : this.catchZonePosition >= ZJ && (this.catchZonePosition = ZJ, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const JJ = this.parameters.PU / 2;
          return this.moverPosition >= this.catchZonePosition - JJ && this.moverPosition <= this.catchZonePosition + JJ
        }
        updateProgress(JJ) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.zU * JJ : this.progress -= this.parameters.NU * JJ, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.IU && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(JJ) {
          this.isCompleted = !0, this.resolveRequest(JJ)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              PU: this.parameters.PU,
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
        constructor(JJ, cJ, ZJ) {
          var FJ, UJ, XJ, AJ, qJ;
          this.resolveRequest = cJ, this.tearDownNotification = ZJ, this.startTime = void 0, this.speed = void 0, this.TU = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const jJ = JJ;
          this.parameters = {
            ...jJ,
            speed: null !== (FJ = jJ.speed) && void 0 !== FJ ? FJ : .5,
            TU: eJ.c.clamp(jJ.TU, .05, 1),
            label: null !== (UJ = jJ.label) && void 0 !== UJ ? UJ : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (XJ = jJ.icon) && void 0 !== XJ ? XJ : null,
            scale: null !== (AJ = jJ.scale) && void 0 !== AJ ? AJ : 1,
            rotation: null !== (qJ = jJ.rotation) && void 0 !== qJ ? qJ : 0
          }, this.speed = this.parameters.speed, this.TU = this.parameters.TU, this.startTime = Date.now()
        }
        handleMouseInput(JJ) {
          if (JJ) {
            this.updateMarkerPosition();
            const JJ = Math.abs(this.markerPosition - .5) <= this.TU / 2;
            this.complete(JJ)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const JJ = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = JJ <= .5 ? 2 * JJ : 2 - 2 * JJ
        }
        complete(JJ) {
          this.isCompleted = !0, this.resolveRequest(JJ)
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
        constructor(JJ, cJ, ZJ) {
          this.resolveRequest = cJ, this.tearDownNotification = ZJ, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = JJ, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(JJ) {
          if (!JJ || this.isCompleted) return;
          const cJ = this.getOuterCircleProgress();
          if (cJ <= this.parameters.RU && cJ >= -this.parameters.RU) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.uU) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, XJ.P)(this.parameters.LU) && this.misses > this.parameters.LU ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.RU && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.iU
        }
        complete(JJ) {
          this.isCompleted = !0, this.resolveRequest(JJ)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              uU: this.parameters.uU,
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

    function rJ() {
      (0, YJ.g)(AJ.D.Qte, fJ ? AJ.D.Qte : 0), fJ ? UJ.i.Uf("qteStateUpdated", fJ.getState()) : UJ.i.Uf("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class vJ {
      constructor(JJ, cJ) {
        this.resultPromise = JJ, this.tearDownQTE = cJ
      }
      static create(JJ, cJ, ZJ) {
        const FJ = Promise.race([JJ, cJ]);
        return new vJ(FJ, ZJ)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class mJ {
      static queueQTE(JJ, cJ, ZJ) {
        let FJ, UJ;
        const eJ = new Promise((JJ => {
            FJ = JJ
          })),
          XJ = new Promise((JJ => {
            UJ = () => {
              JJ("qteTornDown")
            }
          })),
          AJ = Promise.race([eJ, XJ]).then((() => {})),
          qJ = new hJ(JJ, cJ, ZJ, UJ, AJ, FJ);
        return GJ.set(JJ, qJ), nJ.enqueue(qJ), fJ || this.processNextQTE(), vJ.create(eJ, XJ, UJ)
      }
      static async processNextQTE() {
        if (fJ || nJ.jn()) return void(nJ.jn() && fJ && (fJ = null, rJ()));
        const JJ = await nJ.dequeue();
        if (!GJ.has(JJ.id)) return void await this.processNextQTE();
        GJ.delete(JJ.id);
        const cJ = new sJ(JJ.id, JJ.type, JJ.parameters, JJ.resolveRequest, JJ.onDonePromise, JJ.tearDownNotification);
        fJ = cJ, rJ();
        try {
          await cJ.waitUntilDone()
        } catch (ZJ) {
          console.error("Error while waiting for QTE to resolve:", ZJ.stack)
        }
        fJ === cJ && (fJ.cleanup(), fJ = null, rJ()), await this.processNextQTE()
      }
      static cancelQTE(JJ) {
        if (fJ && fJ.id === JJ) return fJ.tearDown(), fJ = null, rJ(), void this.processNextQTE();
        const cJ = GJ.get(JJ);
        cJ && (GJ.delete(JJ), cJ.tearDownNotification())
      }
      static getCurrentState() {
        return fJ ? fJ.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        fJ && (fJ.tearDown(), fJ = null), GJ.forEach(((JJ, cJ) => {
          this.cancelQTE(cJ)
        })), nJ.emptyQueue(), GJ.clear(), rJ()
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
  4207: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => qJ,
      e: () => eJ,
      g: () => AJ
    });
    var FJ = ZJ(2146),
      UJ = ZJ(4210);

    function eJ(JJ) {
      let {
        action: cJ,
        flags: ZJ
      } = JJ;
      return "mid-fire" === cJ && 0 !== (ZJ & FJ.e.AltLeftClick)
    }
    const XJ = new Set;

    function AJ(JJ) {
      return XJ.add(JJ), () => {
        XJ.delete(JJ)
      }
    }

    function qJ(JJ) {
      const cJ = UJ.c[255 & JJ];
      if (void 0 === cJ) return;
      const ZJ = JJ >>> 8 & 255,
        eJ = {
          action: cJ,
          down: 0 !== (ZJ & FJ.e.Down),
          flags: ZJ,
          press: JJ >>> 16
        };
      for (const FJ of XJ) FJ(eJ)
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
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);