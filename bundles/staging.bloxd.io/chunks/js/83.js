export const id = 83;
export const ids = [83];
export const modules = {
  4266: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => hT,
      f: () => rT
    });
    var iT = IT(1272),
      zT = IT(16);
    var kT = IT(314);
    var WT = IT(618);
    var XT = IT(2201),
      BT = IT(4269),
      FT = IT(4292),
      ST = IT(4299);
    class DT {
      constructor(TT, oT, IT, iT, zT, kT) {
        this.id = TT, this.type = oT, this.parameters = IT, this.tearDownNotification = iT, this.onDonePromise = zT, this.resolveRequest = kT
      }
    }
    const LT = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class xT {
      constructor(TT, oT, IT, iT, zT, kT) {
        this.id = TT, this.type = oT, this.parameters = IT, this.resolveRequest = iT, this.onDonePromise = zT, this.tearDownNotification = kT, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const WT = rT[oT];
        if (!WT) throw console.error(`No QTE implementation registered for type: ${oT}`), new Error(`No QTE implementation registered for type: ${oT}`);
        this.implementation = new WT(IT, (TT => {
          this.isCompleted = !0, this.resolveRequest(TT)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = zT.h.subscribe("QTEMouseState", (TT => {
          let {
            isDown: oT
          } = TT;
          this.isCompleted || this.implementation.handleMouseInput(oT)
        })), this.stopInputActions = (0, FT.f)((TT => {
          this.isCompleted || !LT.has(TT.action) && !(0, FT.e)(TT) || this.implementation.handleMouseInput(TT.down)
        })), this.tickSub = zT.h.subscribe("noaTick", (TT => {
          if (this.isCompleted) return;
          const oT = TT / 1e3;
          this.implementation.handleTick(oT)
        })), this.stopShellTicks = (0, BT.y)((() => {
          this.isCompleted || this.implementation.handleTick(XT.u / 1e3)
        }))
      }
      cleanup() {
        var TT, oT;
        this.mouseSub && (zT.h.unsubscribe(this.mouseSub), this.mouseSub = null), null === (TT = this.stopInputActions) || void 0 === TT || TT.call(this), this.stopInputActions = null, null === (oT = this.stopShellTicks) || void 0 === oT || oT.call(this), this.stopShellTicks = null, this.tickSub && (zT.h.unsubscribe(this.tickSub), this.tickSub = null)
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
    const cT = new iT.d,
      KT = new Map;
    let MT = null;
    const rT = {
      progressBar: class {
        constructor(TT, oT, IT) {
          var iT, zT, kT, WT;
          this.resolveRequest = oT, this.tearDownNotification = IT, this.progress = 0, this.GI = void 0, this.pI = void 0, this.bI = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const XT = TT;
          this.GI = null !== (iT = XT.GI) && void 0 !== iT ? iT : .075, this.pI = null !== (zT = XT.pI) && void 0 !== zT ? zT : 1, this.progress = null !== (kT = XT.tI) && void 0 !== kT ? kT : 30, this.bI = null !== (WT = XT.bI) && void 0 !== WT && WT, this.parameters = XT
        }
        handleMouseInput(TT) {
          TT && !this.isCompleted && (this.clickCount++, this.progress += this.pI, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.GI, this.bI && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(TT) {
          this.isCompleted = !0, this.resolveRequest(TT)
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
        constructor(TT, oT, IT) {
          var iT;
          this.resolveRequest = oT, this.tearDownNotification = IT, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = TT, this.timeWindowMs = null !== (iT = this.parameters.dI) && void 0 !== iT ? iT : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(TT) {
          if (!TT || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(TT) {
          this.isCompleted = !0, this.resolveRequest(TT)
        }
        getState() {
          const TT = Date.now() - this.startTime,
            oT = Math.max(0, this.timeWindowMs - TT);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: oT,
              dI: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(TT, oT, IT) {
          var iT;
          this.resolveRequest = oT, this.tearDownNotification = IT, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const zT = TT;
          this.parameters = {
            ...zT,
            Ii: kT.e.clamp(zT.Ii, .05, 1)
          }, this.progress = null !== (iT = zT.tI) && void 0 !== iT ? iT : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(TT) {
          this.isMouseDown = TT
        }
        handleTick(TT) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(TT))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const TT = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += TT * this.parameters.ii * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const TT = kT.e.clamp(1 - .7 * this.parameters.zi, 0, 1.4);
          return Math.floor(60 * TT + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.ki : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = kT.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const TT = this.parameters.Ii / 2,
            oT = TT,
            IT = 1 - TT;
          this.catchZonePosition <= oT ? (this.catchZonePosition = oT, this.catchZoneVelocity = 0) : this.catchZonePosition >= IT && (this.catchZonePosition = IT, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const TT = this.parameters.Ii / 2;
          return this.moverPosition >= this.catchZonePosition - TT && this.moverPosition <= this.catchZonePosition + TT
        }
        updateProgress(TT) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.Wi * TT : this.progress -= this.parameters.Xi * TT, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.bI && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(TT) {
          this.isCompleted = !0, this.resolveRequest(TT)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Ii: this.parameters.Ii,
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
        constructor(TT, oT, IT) {
          var iT, zT, WT, XT, BT;
          this.resolveRequest = oT, this.tearDownNotification = IT, this.startTime = void 0, this.speed = void 0, this.Fi = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const FT = TT;
          this.parameters = {
            ...FT,
            speed: null !== (iT = FT.speed) && void 0 !== iT ? iT : .5,
            Fi: kT.e.clamp(FT.Fi, .05, 1),
            label: null !== (zT = FT.label) && void 0 !== zT ? zT : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (WT = FT.icon) && void 0 !== WT ? WT : null,
            scale: null !== (XT = FT.scale) && void 0 !== XT ? XT : 1,
            rotation: null !== (BT = FT.rotation) && void 0 !== BT ? BT : 0
          }, this.speed = this.parameters.speed, this.Fi = this.parameters.Fi, this.startTime = Date.now()
        }
        handleMouseInput(TT) {
          if (TT) {
            this.updateMarkerPosition();
            const TT = Math.abs(this.markerPosition - .5) <= this.Fi / 2;
            this.complete(TT)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const TT = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = TT <= .5 ? 2 * TT : 2 - 2 * TT
        }
        complete(TT) {
          this.isCompleted = !0, this.resolveRequest(TT)
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
        constructor(TT, oT, IT) {
          this.resolveRequest = oT, this.tearDownNotification = IT, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = TT, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(TT) {
          if (!TT || this.isCompleted) return;
          const oT = this.getOuterCircleProgress();
          if (oT <= this.parameters.xi && oT >= -this.parameters.xi) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Di) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, WT.K)(this.parameters.Ki) && this.misses > this.parameters.Ki ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.xi && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Li
        }
        complete(TT) {
          this.isCompleted = !0, this.resolveRequest(TT)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              Di: this.parameters.Di,
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

    function AT() {
      (0, ST.g)(XT.A.Qte, MT ? XT.A.Qte : 0), MT ? zT.h.XM("qteStateUpdated", MT.getState()) : zT.h.XM("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class gT {
      constructor(TT, oT) {
        this.resultPromise = TT, this.tearDownQTE = oT
      }
      static create(TT, oT, IT) {
        const iT = Promise.race([TT, oT]);
        return new gT(iT, IT)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class hT {
      static queueQTE(TT, oT, IT) {
        let iT, zT;
        const kT = new Promise((TT => {
            iT = TT
          })),
          WT = new Promise((TT => {
            zT = () => {
              TT("qteTornDown")
            }
          })),
          XT = Promise.race([kT, WT]).then((() => {})),
          BT = new DT(TT, oT, IT, zT, XT, iT);
        return KT.set(TT, BT), cT.enqueue(BT), MT || this.processNextQTE(), gT.create(kT, WT, zT)
      }
      static async processNextQTE() {
        if (MT || cT.Mc()) return void(cT.Mc() && MT && (MT = null, AT()));
        const TT = await cT.dequeue();
        if (!KT.has(TT.id)) return void await this.processNextQTE();
        KT.delete(TT.id);
        const oT = new xT(TT.id, TT.type, TT.parameters, TT.resolveRequest, TT.onDonePromise, TT.tearDownNotification);
        MT = oT, AT();
        try {
          await oT.waitUntilDone()
        } catch (IT) {
          console.error("Error while waiting for QTE to resolve:", IT.stack)
        }
        MT === oT && (MT.cleanup(), MT = null, AT()), await this.processNextQTE()
      }
      static cancelQTE(TT) {
        if (MT && MT.id === TT) return MT.tearDown(), MT = null, AT(), void this.processNextQTE();
        const oT = KT.get(TT);
        oT && (KT.delete(TT), oT.tearDownNotification())
      }
      static getCurrentState() {
        return MT ? MT.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        MT && (MT.tearDown(), MT = null), KT.forEach(((TT, oT) => {
          this.cancelQTE(oT)
        })), cT.emptyQueue(), KT.clear(), AT()
      }
    }
  },
  4285: (TT, oT, IT) => {
    IT.d(oT, {
      $b: () => tT,
      A: () => kT,
      Ab: () => xT,
      Bb: () => mT,
      C: () => cT,
      F: () => GT,
      Fb: () => wT,
      Gb: () => jT,
      J: () => FT,
      Jb: () => HT,
      Kb: () => UT,
      N: () => KT,
      Nb: () => YT,
      P: () => BT,
      Pb: () => QT,
      Rb: () => gT,
      T: () => LT,
      Tb: () => hT,
      Ub: () => qT,
      W: () => DT,
      Yb: () => zT,
      _: () => eT,
      bb: () => uT,
      c: () => sT,
      d: () => lT,
      eb: () => vT,
      f: () => ST,
      gb: () => RT,
      hb: () => ET,
      j: () => AT,
      kb: () => nT,
      l: () => ZT,
      mb: () => OT,
      n: () => rT,
      o: () => MT,
      qb: () => aT,
      r: () => WT,
      u: () => XT,
      ub: () => fT,
      vb: () => JT,
      xb: () => CT,
      y: () => iT
    });
    const iT = 32,
      zT = 33.333333333333336,
      kT = {
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
      WT = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      XT = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      BT = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      FT = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      ST = {
        Look: 0,
        Remesh: 1
      },
      DT = 8,
      LT = 1,
      xT = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      cT = {
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
      KT = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      MT = {
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
      rT = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      AT = 4,
      gT = 4,
      hT = 65535,
      wT = {
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
      mT = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      eT = 88,
      RT = 0,
      uT = 24,
      vT = 48,
      ET = 80,
      fT = {
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
      CT = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      jT = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      JT = {
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
      UT = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      aT = 65535,
      YT = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      QT = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      OT = 2,
      HT = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      nT = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      qT = {
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
      ZT = {
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
      lT = {
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
      sT = 8,
      tT = {
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
      GT = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4269: (TT, oT, IT) => {
    IT.d(oT, {
      C: () => ET,
      G: () => fT,
      J: () => AT,
      M: () => WT,
      O: () => XT,
      S: () => uT,
      c: () => RT,
      e: () => hT,
      i: () => jT,
      m: () => CT,
      o: () => rT,
      q: () => mT,
      s: () => gT,
      u: () => wT,
      y: () => vT
    });
    var iT = IT(4274);
    const zT = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let kT = zT;

    function WT(TT) {
      kT = null !== TT && void 0 !== TT ? TT : zT
    }

    function XT() {
      return kT
    }
    const BT = new Set,
      FT = new Set;
    let ST = -1;
    const DT = new Set,
      LT = new Set;
    let xT = 0,
      cT = 0;
    const KT = new Set,
      MT = new Set;

    function rT(TT) {
      return BT.add(TT), () => {
        BT.delete(TT)
      }
    }

    function AT(TT, oT) {
      for (const iT of BT) try {
        iT(TT)
      } catch (IT) {
        oT(IT)
      }
    }

    function gT(TT) {
      return FT.add(TT), () => {
        FT.delete(TT)
      }
    }

    function hT(TT, oT) {
      const IT = ST < 0 ? 0 : TT - ST;
      ST = TT;
      for (const zT of FT) try {
        zT(IT)
      } catch (iT) {
        oT(iT)
      }
    }

    function wT(TT) {
      return DT.add(TT), () => {
        DT.delete(TT)
      }
    }

    function mT(TT) {
      return LT.add(TT), () => {
        LT.delete(TT)
      }
    }
    let eT = 0;

    function RT(TT) {
      eT += TT
    }

    function uT() {
      const TT = eT;
      return eT = 0, TT
    }

    function vT(TT) {
      return KT.add(TT), () => {
        KT.delete(TT)
      }
    }

    function ET(TT) {
      return MT.add(TT), () => {
        MT.delete(TT)
      }
    }

    function fT() {
      xT = 0, cT = 0, ST = -1
    }

    function CT(TT, oT) {
      if ("paced" === TT) return cT += oT, null;
      if ("drawn" !== TT && "skipped" !== TT) return null;
      const IT = oT + cT;
      return cT = 0, IT
    }

    function jT(TT, oT, IT, zT) {
      const kT = (0, iT.j)(oT),
        WT = TT > 0 ? performance.now() : 0;
      for (let iT = 0; iT < TT; iT++)
        for (const TT of KT) try {
          TT()
        } catch (XT) {
          zT(XT)
        }
      if (TT > 0 && RT(performance.now() - WT), null !== IT) {
        for (const TT of DT) try {
          TT(IT)
        } catch (XT) {
          zT(XT)
        }
        xT += IT
      }
      if ("drawn" === oT) {
        const TT = xT;
        xT = 0;
        for (const oT of LT) try {
          oT(TT)
        } catch (XT) {
          zT(XT)
        }
      }
      for (const iT of MT) try {
        iT(TT, kT)
      } catch (XT) {
        zT(XT)
      }
    }
  },
  4276: (TT, oT, IT) => {
    IT.d(oT, {
      $c: () => dT,
      B: () => WT,
      Bb: () => VT,
      Cb: () => oo,
      Cc: () => iT.hb,
      D: () => JT,
      Dc: () => iT.qb,
      Dd: () => kT,
      Eb: () => zT.f,
      F: () => Lo,
      G: () => PT,
      Gb: () => RT,
      Hc: () => xo,
      Hd: () => MT,
      I: () => iT.d,
      J: () => FT,
      Jb: () => OT,
      Jd: () => Xo,
      K: () => iT.f,
      Kc: () => Fo,
      M: () => iT.j,
      Nb: () => CT,
      Nd: () => nT,
      Oc: () => io,
      Od: () => ZT,
      P: () => yT,
      Qb: () => ET,
      Qc: () => iT.ub,
      R: () => iT.o,
      Rb: () => iT.N,
      Rd: () => HT,
      Sb: () => jT,
      Uc: () => iT.vb,
      V: () => iT.r,
      Vb: () => wT,
      Vd: () => tT,
      Xc: () => iT.xb,
      Z: () => iT.u,
      Zb: () => ko,
      ab: () => DT,
      ae: () => lT,
      bb: () => AT,
      bc: () => gT,
      be: () => pT,
      ce: () => GT,
      dd: () => iT.Bb,
      e: () => To,
      eb: () => iT.y,
      ed: () => iT.Fb,
      ee: () => Wo,
      fc: () => So,
      g: () => KT,
      gb: () => iT.A,
      gd: () => iT.Gb,
      h: () => cT,
      he: () => co,
      ic: () => zT.m,
      ie: () => hT,
      je: () => bT,
      kb: () => qT,
      kd: () => iT.Kb,
      l: () => Bo,
      lc: () => rT,
      ld: () => iT.Nb,
      le: () => YT,
      m: () => uT,
      ne: () => aT,
      ob: () => zo,
      pc: () => Io,
      pd: () => iT.Pb,
      pe: () => UT,
      q: () => eT,
      qe: () => BT,
      rd: () => vT,
      sb: () => ST,
      se: () => QT,
      t: () => iT.c,
      tc: () => iT._,
      te: () => Ko,
      ud: () => iT.Rb,
      vb: () => iT.C,
      wb: () => sT,
      wd: () => iT.Tb,
      we: () => xT,
      x: () => Do,
      xb: () => NT,
      xc: () => iT.bb,
      y: () => fT,
      yc: () => iT.eb,
      zc: () => iT.gb,
      zd: () => iT.Yb
    });
    var iT = IT(4285),
      zT = IT(2201);
    const kT = Math.round(1e3 / iT.Yb),
      WT = 4,
      XT = 2;

    function BT() {
      return crypto.getRandomValues(new Uint32Array(XT))
    }
    const FT = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      ST = 16,
      DT = {
        Draws: 1,
        NetAll: 2
      },
      LT = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function xT(TT) {
      return (TT.nametagsHidden ? mT.NametagsHidden : 0) | (TT.crouchToggle ? mT.CrouchToggle : 0) | (TT.bhopDisabled ? mT.BhopDisabled : 0) | (TT.disableBobbing ? mT.DisableBobbing : 0) | (TT.ezTowering ? mT.EzTowering : 0) | (TT.ezBridging ? mT.EzBridging : 0) | (TT.showChunkBorders ? mT.ShowChunkBorders : 0)
    }
    const cT = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      KT = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      MT = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      rT = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      AT = 5,
      gT = 4294967295;

    function hT(TT) {
      return (TT.showFog ? LT.ShowFog : 0) | (TT.lighting ? LT.Lighting : 0) | (TT.chunkFade ? LT.ChunkFade : 0)
    }
    const wT = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      mT = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      eT = {
        Release: 1,
        KeepTouches: 2
      },
      RT = {
        Point: 1,
        Stamped: 2
      },
      uT = {
        Add: 1,
        Clear: 2
      },
      vT = 1,
      ET = 8,
      fT = 16777215,
      CT = 4,
      jT = {
        Resume: 1
      },
      JT = {
        Held: 1
      };

    function UT(TT, oT) {
      return (TT | oT << 8) >>> 0
    }

    function aT(TT) {
      return 255 & TT
    }

    function YT(TT) {
      return TT >>> 8
    }

    function QT(TT) {
      return TT + 3 & -4
    }
    const OT = 16777216,
      HT = 20;
    const nT = 8,
      qT = 8,
      ZT = 16777216,
      lT = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      sT = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      tT = 16,
      GT = {
        Lost: 0,
        Gone: 1
      },
      pT = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function bT(TT) {
      return TT === pT.WorldgenSeed || TT === pT.Generate
    }
    const yT = 4,
      NT = 99,
      PT = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      dT = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      VT = 12,
      To = 16,
      oo = 4,
      Io = 12,
      io = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      zo = 4,
      ko = 8,
      Wo = 8,
      Xo = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Bo = {
        Crit: 1,
        HitSelf: 2
      },
      Fo = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      So = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Do = 12,
      Lo = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      xo = 67108864;

    function co(TT) {
      for (const [oT, IT] of Object.entries(iT.d))
        if (IT === TT) return oT;
      return `Unknown${TT}`
    }

    function Ko(TT) {
      return {
        status: TT[iT.A.Status],
        lastError: TT[iT.A.LastError],
        lastErrorDetail: TT[iT.A.LastErrorDetail],
        errorCount: TT[iT.A.ErrorCount],
        frameIndex: TT[iT.A.FrameIndex],
        tickIndex: TT[iT.A.TickIndex],
        renderPending: TT[iT.A.RenderPending],
        firstView: TT[iT.A.FirstView],
        chunksCancelled: TT[iT.A.ChunksCancelled]
      }
    }
  },
  4274: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT,
      h: () => kT,
      j: () => zT
    });
    var iT = IT(4276);

    function zT(TT) {
      return "none" !== TT
    }

    function kT(TT, oT) {
      if (!TT) return "none";
      switch (oT) {
        case iT.Z.Drawn:
          return "drawn";
        case iT.Z.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function WT(TT) {
      return "drawn" === TT
    }
  },
  4292: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT,
      e: () => kT,
      f: () => XT
    });
    var iT = IT(2201),
      zT = IT(4295);

    function kT(TT) {
      let {
        action: oT,
        flags: IT
      } = TT;
      return "mid-fire" === oT && 0 !== (IT & iT.d.AltLeftClick)
    }
    const WT = new Set;

    function XT(TT) {
      return WT.add(TT), () => {
        WT.delete(TT)
      }
    }

    function BT(TT) {
      const oT = zT.d[255 & TT];
      if (void 0 === oT) return;
      const IT = TT >>> 8 & 255,
        kT = {
          action: oT,
          down: 0 !== (IT & iT.d.Down),
          flags: IT,
          press: TT >>> 16
        };
      for (const iT of WT) iT(kT)
    }
  },
  4295: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      e: () => kT,
      h: () => WT,
      i: () => iT,
      j: () => XT
    });
    const iT = {
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
      zT = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      kT = {
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
      WT = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      XT = [16]
  },
  4299: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      f: () => WT,
      g: () => FT
    });
    var iT = IT(2201),
      zT = IT(2204);
    const kT = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function WT(TT) {
      return TT instanceof HTMLElement && (!!(TT.isContentEditable || TT instanceof HTMLTextAreaElement || TT instanceof HTMLSelectElement) || TT instanceof HTMLInputElement && !kT.has(TT.type))
    }

    function XT(TT) {
      let oT = null;
      const IT = IT => {
          const zT = WT(IT);
          zT !== oT && (oT = zT, TT(iT.j.UiCapture, iT.A.Keyboard, 0, 0, zT ? iT.A.Keyboard : 0))
        },
        zT = TT => {
          IT(TT.target)
        },
        kT = TT => {
          IT(TT.relatedTarget)
        },
        XT = () => {
          IT(document.activeElement)
        },
        BT = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", zT, BT), document.addEventListener("focusout", kT, BT), document.addEventListener("keydown", XT, BT), IT(document.activeElement), () => {
        document.removeEventListener("focusin", zT, BT), document.removeEventListener("focusout", kT, BT), document.removeEventListener("keydown", XT, BT)
      }
    }
    const BT = new Map;

    function FT(TT, oT) {
      var IT;
      let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      BT.set(iT, (null !== (IT = BT.get(iT)) && void 0 !== IT ? IT : 0) & ~TT | oT & TT);
      let kT = 0;
      for (const zT of BT.values()) kT |= zT;
      return (0, zT.D)(TT, kT & TT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);