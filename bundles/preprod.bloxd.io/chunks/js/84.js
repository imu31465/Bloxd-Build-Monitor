export const id = 84;
export const ids = [84];
export const modules = {
  4606: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Pq,
      d: () => jq
    });
    var Yq = gq(1292),
      lq = gq(31);
    var Oq = gq(307);
    var mq = gq(598);
    var xq = gq(2357),
      Aq = gq(4608),
      cq = gq(4627),
      uq = gq(4637);
    class Bq {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        this.id = qq, this.type = Eq, this.parameters = gq, this.tearDownNotification = Yq, this.onDonePromise = lq, this.resolveRequest = Oq
      }
    }
    const Wq = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class Nq {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        this.id = qq, this.type = Eq, this.parameters = gq, this.resolveRequest = Yq, this.onDonePromise = lq, this.tearDownNotification = Oq, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const mq = jq[Eq];
        if (!mq) throw console.error(`No QTE implementation registered for type: ${Eq}`), new Error(`No QTE implementation registered for type: ${Eq}`);
        this.implementation = new mq(gq, (qq => {
          this.isCompleted = !0, this.resolveRequest(qq)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = lq.i.subscribe("QTEMouseState", (qq => {
          let {
            isDown: Eq
          } = qq;
          this.isCompleted || this.implementation.handleMouseInput(Eq)
        })), this.stopInputActions = (0, cq.h)((qq => {
          this.isCompleted || !Wq.has(qq.action) && !(0, cq.d)(qq) || this.implementation.handleMouseInput(qq.down)
        })), this.tickSub = lq.i.subscribe("noaTick", (qq => {
          if (this.isCompleted) return;
          const Eq = qq / 1e3;
          this.implementation.handleTick(Eq)
        })), this.stopShellTicks = (0, Aq.x)((() => {
          this.isCompleted || this.implementation.handleTick(xq.x / 1e3)
        }))
      }
      cleanup() {
        var qq, Eq;
        this.mouseSub && (lq.i.unsubscribe(this.mouseSub), this.mouseSub = null), null === (qq = this.stopInputActions) || void 0 === qq || qq.call(this), this.stopInputActions = null, null === (Eq = this.stopShellTicks) || void 0 === Eq || Eq.call(this), this.stopShellTicks = null, this.tickSub && (lq.i.unsubscribe(this.tickSub), this.tickSub = null)
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
    const aq = new Yq.c,
      Vq = new Map;
    let dq = null;
    const jq = {
      progressBar: class {
        constructor(qq, Eq, gq) {
          var Yq, lq, Oq, mq;
          this.resolveRequest = Eq, this.tearDownNotification = gq, this.progress = 0, this.fY = void 0, this.MY = void 0, this.TY = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const xq = qq;
          this.fY = null !== (Yq = xq.fY) && void 0 !== Yq ? Yq : .075, this.MY = null !== (lq = xq.MY) && void 0 !== lq ? lq : 1, this.progress = null !== (Oq = xq.ZY) && void 0 !== Oq ? Oq : 30, this.TY = null !== (mq = xq.TY) && void 0 !== mq && mq, this.parameters = xq
        }
        handleMouseInput(qq) {
          qq && !this.isCompleted && (this.clickCount++, this.progress += this.MY, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.fY, this.TY && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(qq) {
          this.isCompleted = !0, this.resolveRequest(qq)
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
        constructor(qq, Eq, gq) {
          var Yq;
          this.resolveRequest = Eq, this.tearDownNotification = gq, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = qq, this.timeWindowMs = null !== (Yq = this.parameters.pY) && void 0 !== Yq ? Yq : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(qq) {
          if (!qq || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(qq) {
          this.isCompleted = !0, this.resolveRequest(qq)
        }
        getState() {
          const qq = Date.now() - this.startTime,
            Eq = Math.max(0, this.timeWindowMs - qq);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: Eq,
              pY: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(qq, Eq, gq) {
          var Yq;
          this.resolveRequest = Eq, this.tearDownNotification = gq, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const lq = qq;
          this.parameters = {
            ...lq,
            kY: Oq.c.clamp(lq.kY, .05, 1)
          }, this.progress = null !== (Yq = lq.ZY) && void 0 !== Yq ? Yq : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(qq) {
          this.isMouseDown = qq
        }
        handleTick(qq) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(qq))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const qq = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += qq * this.parameters.RY * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const qq = Oq.c.clamp(1 - .7 * this.parameters.UY, 0, 1.4);
          return Math.floor(60 * qq + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.FY : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Oq.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const qq = this.parameters.kY / 2,
            Eq = qq,
            gq = 1 - qq;
          this.catchZonePosition <= Eq ? (this.catchZonePosition = Eq, this.catchZoneVelocity = 0) : this.catchZonePosition >= gq && (this.catchZonePosition = gq, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const qq = this.parameters.kY / 2;
          return this.moverPosition >= this.catchZonePosition - qq && this.moverPosition <= this.catchZonePosition + qq
        }
        updateProgress(qq) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.sY * qq : this.progress -= this.parameters.XY * qq, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.TY && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(qq) {
          this.isCompleted = !0, this.resolveRequest(qq)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              kY: this.parameters.kY,
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
        constructor(qq, Eq, gq) {
          var Yq, lq, mq, xq, Aq;
          this.resolveRequest = Eq, this.tearDownNotification = gq, this.startTime = void 0, this.speed = void 0, this.KY = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const cq = qq;
          this.parameters = {
            ...cq,
            speed: null !== (Yq = cq.speed) && void 0 !== Yq ? Yq : .5,
            KY: Oq.c.clamp(cq.KY, .05, 1),
            label: null !== (lq = cq.label) && void 0 !== lq ? lq : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (mq = cq.icon) && void 0 !== mq ? mq : null,
            scale: null !== (xq = cq.scale) && void 0 !== xq ? xq : 1,
            rotation: null !== (Aq = cq.rotation) && void 0 !== Aq ? Aq : 0
          }, this.speed = this.parameters.speed, this.KY = this.parameters.KY, this.startTime = Date.now()
        }
        handleMouseInput(qq) {
          if (qq) {
            this.updateMarkerPosition();
            const qq = Math.abs(this.markerPosition - .5) <= this.KY / 2;
            this.complete(qq)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const qq = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = qq <= .5 ? 2 * qq : 2 - 2 * qq
        }
        complete(qq) {
          this.isCompleted = !0, this.resolveRequest(qq)
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
        constructor(qq, Eq, gq) {
          this.resolveRequest = Eq, this.tearDownNotification = gq, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = qq, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(qq) {
          if (!qq || this.isCompleted) return;
          const Eq = this.getOuterCircleProgress();
          if (Eq <= this.parameters.DY && Eq >= -this.parameters.DY) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.IY) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, mq.H)(this.parameters.ql) && this.misses > this.parameters.ql ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.DY && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.eY
        }
        complete(qq) {
          this.isCompleted = !0, this.resolveRequest(qq)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              IY: this.parameters.IY,
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

    function Hq() {
      (0, uq.k)(xq.C.Qte, dq ? xq.C.Qte : 0), dq ? lq.i.TV("qteStateUpdated", dq.getState()) : lq.i.TV("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class oq {
      constructor(qq, Eq) {
        this.resultPromise = qq, this.tearDownQTE = Eq
      }
      static create(qq, Eq, gq) {
        const Yq = Promise.race([qq, Eq]);
        return new oq(Yq, gq)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class Pq {
      static queueQTE(qq, Eq, gq) {
        let Yq, lq;
        const Oq = new Promise((qq => {
            Yq = qq
          })),
          mq = new Promise((qq => {
            lq = () => {
              qq("qteTornDown")
            }
          })),
          xq = Promise.race([Oq, mq]).then((() => {})),
          Aq = new Bq(qq, Eq, gq, lq, xq, Yq);
        return Vq.set(qq, Aq), aq.enqueue(Aq), dq || this.processNextQTE(), oq.create(Oq, mq, lq)
      }
      static async processNextQTE() {
        if (dq || aq.UN()) return void(aq.UN() && dq && (dq = null, Hq()));
        const qq = await aq.dequeue();
        if (!Vq.has(qq.id)) return void await this.processNextQTE();
        Vq.delete(qq.id);
        const Eq = new Nq(qq.id, qq.type, qq.parameters, qq.resolveRequest, qq.onDonePromise, qq.tearDownNotification);
        dq = Eq, Hq();
        try {
          await Eq.waitUntilDone()
        } catch (gq) {
          console.error("Error while waiting for QTE to resolve:", gq.stack)
        }
        dq === Eq && (dq.cleanup(), dq = null, Hq()), await this.processNextQTE()
      }
      static cancelQTE(qq) {
        if (dq && dq.id === qq) return dq.tearDown(), dq = null, Hq(), void this.processNextQTE();
        const Eq = Vq.get(qq);
        Eq && (Vq.delete(qq), Eq.tearDownNotification())
      }
      static getCurrentState() {
        return dq ? dq.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        dq && (dq.tearDown(), dq = null), Vq.forEach(((qq, Eq) => {
          this.cancelQTE(Eq)
        })), aq.emptyQueue(), Vq.clear(), Hq()
      }
    }
  },
  4625: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => xq,
      Ab: () => rq,
      B: () => Yq,
      C: () => Oq,
      E: () => dq,
      Eb: () => tq,
      G: () => wq,
      H: () => uq,
      Hb: () => Mq,
      L: () => Bq,
      Lb: () => Jq,
      Nb: () => zq,
      O: () => cq,
      Q: () => jq,
      Qb: () => pq,
      T: () => Aq,
      Tb: () => Gq,
      V: () => aq,
      Vb: () => Qq,
      Wb: () => yq,
      X: () => Nq,
      Z: () => vq,
      _: () => nq,
      _b: () => Rq,
      bb: () => bq,
      bc: () => lq,
      e: () => sq,
      ec: () => Xq,
      f: () => Fq,
      fb: () => hq,
      i: () => Wq,
      ib: () => iq,
      kb: () => kq,
      m: () => Pq,
      mb: () => Lq,
      pb: () => Sq,
      q: () => Uq,
      sb: () => Zq,
      t: () => oq,
      u: () => Hq,
      ub: () => Tq,
      wb: () => fq,
      y: () => mq,
      zb: () => Vq
    });
    const Yq = 32,
      lq = 33.333333333333336,
      Oq = {
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
      mq = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      xq = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Aq = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      cq = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      uq = 7,
      Bq = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      Wq = {
        Look: 0,
        Remesh: 1
      },
      Nq = 8,
      aq = 1,
      Vq = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      dq = {
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
      jq = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Hq = {
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
      oq = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Pq = 4,
      Qq = 4,
      yq = 65535,
      tq = {
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
      rq = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      vq = 88,
      hq = 0,
      nq = 24,
      bq = 48,
      iq = 80,
      Zq = {
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
      fq = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Mq = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Tq = {
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
      zq = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Sq = 65535,
      pq = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Gq = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Lq = 2,
      Jq = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      kq = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Rq = {
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
      Uq = {
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
      Fq = {
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
      sq = 8,
      Xq = {
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
      wq = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4608: (qq, Eq, gq) => {
    gq.d(Eq, {
      B: () => bq,
      F: () => Hq,
      J: () => mq,
      M: () => xq,
      N: () => vq,
      e: () => rq,
      f: () => Pq,
      h: () => Zq,
      l: () => iq,
      m: () => jq,
      p: () => yq,
      s: () => oq,
      w: () => Qq,
      x: () => hq,
      y: () => nq
    });
    var Yq = gq(4616);
    const lq = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Oq = lq;

    function mq(qq) {
      Oq = null !== qq && void 0 !== qq ? qq : lq
    }

    function xq() {
      return Oq
    }
    const Aq = new Set,
      cq = new Set;
    let uq = -1;
    const Bq = new Set,
      Wq = new Set;
    let Nq = 0,
      aq = 0;
    const Vq = new Set,
      dq = new Set;

    function jq(qq) {
      return Aq.add(qq), () => {
        Aq.delete(qq)
      }
    }

    function Hq(qq, Eq) {
      for (const Yq of Aq) try {
        Yq(qq)
      } catch (gq) {
        Eq(gq)
      }
    }

    function oq(qq) {
      return cq.add(qq), () => {
        cq.delete(qq)
      }
    }

    function Pq(qq, Eq) {
      const gq = uq < 0 ? 0 : qq - uq;
      uq = qq;
      for (const lq of cq) try {
        lq(gq)
      } catch (Yq) {
        Eq(Yq)
      }
    }

    function Qq(qq) {
      return Bq.add(qq), () => {
        Bq.delete(qq)
      }
    }

    function yq(qq) {
      return Wq.add(qq), () => {
        Wq.delete(qq)
      }
    }
    let tq = 0;

    function rq(qq) {
      tq += qq
    }

    function vq() {
      const qq = tq;
      return tq = 0, qq
    }

    function hq(qq) {
      return Vq.add(qq), () => {
        Vq.delete(qq)
      }
    }

    function nq(qq) {
      return dq.add(qq), () => {
        dq.delete(qq)
      }
    }

    function bq() {
      Nq = 0, aq = 0, uq = -1
    }

    function iq(qq, Eq) {
      if ("paced" === qq) return aq += Eq, null;
      if ("drawn" !== qq && "skipped" !== qq) return null;
      const gq = Eq + aq;
      return aq = 0, gq
    }

    function Zq(qq, Eq, gq, lq) {
      const Oq = (0, Yq.g)(Eq),
        mq = qq > 0 ? performance.now() : 0;
      for (let Yq = 0; Yq < qq; Yq++)
        for (const qq of Vq) try {
          qq()
        } catch (xq) {
          lq(xq)
        }
      if (qq > 0 && rq(performance.now() - mq), null !== gq) {
        for (const qq of Bq) try {
          qq(gq)
        } catch (xq) {
          lq(xq)
        }
        Nq += gq
      }
      if ("drawn" === Eq) {
        const qq = Nq;
        Nq = 0;
        for (const Eq of Wq) try {
          Eq(qq)
        } catch (xq) {
          lq(xq)
        }
      }
      for (const Yq of dq) try {
        Yq(qq, Oq)
      } catch (xq) {
        lq(xq)
      }
    }
  },
  4622: (qq, Eq, gq) => {
    gq.d(Eq, {
      $c: () => eq,
      Ab: () => qE,
      Ac: () => Yq.bb,
      Bd: () => Yq.bc,
      Be: () => Aq,
      Ce: () => Sq,
      D: () => cq,
      Eb: () => gE,
      Ec: () => Yq.fb,
      Fd: () => Oq,
      Fe: () => dE,
      Gb: () => Yq.L,
      H: () => Yq.i,
      Hb: () => lq.h,
      Hd: () => dq,
      He: () => Nq,
      I: () => Dq,
      Ic: () => Yq.ib,
      Kc: () => Yq.pb,
      Kd: () => AE,
      Lb: () => rq,
      Lc: () => aE,
      M: () => Yq.m,
      Md: () => Lq,
      Nd: () => kq,
      P: () => Kq,
      Pb: () => pq,
      Pc: () => uE,
      Rc: () => lE,
      Rd: () => Gq,
      S: () => Yq.u,
      Sb: () => iq,
      Tb: () => nq,
      Ub: () => Yq.Q,
      Uc: () => Yq.sb,
      Vd: () => Fq,
      W: () => Yq.y,
      Wb: () => Zq,
      Xc: () => Yq.ub,
      Y: () => Yq.A,
      _: () => Bq,
      _b: () => Qq,
      _c: () => Yq.wb,
      ae: () => Rq,
      bb: () => Hq,
      bc: () => mE,
      c: () => EE,
      ce: () => Xq,
      d: () => Vq,
      db: () => Yq.B,
      dd: () => Yq.Ab,
      f: () => aq,
      fc: () => oq,
      g: () => cE,
      gd: () => Yq.Eb,
      ge: () => sq,
      hb: () => Yq.C,
      hc: () => BE,
      i: () => vq,
      ic: () => lq.l,
      id: () => Yq.Hb,
      je: () => xE,
      kb: () => Jq,
      l: () => tq,
      ld: () => Yq.Nb,
      m: () => Yq.e,
      mc: () => jq,
      ne: () => VE,
      o: () => WE,
      ob: () => OE,
      p: () => bq,
      pd: () => Yq.Qb,
      q: () => mq,
      qc: () => YE,
      r: () => fq,
      rb: () => uq,
      rd: () => Yq.Tb,
      re: () => Pq,
      sb: () => Yq.E,
      se: () => wq,
      u: () => NE,
      uc: () => Yq.Z,
      ue: () => zq,
      vd: () => hq,
      ve: () => Tq,
      w: () => Iq,
      wb: () => Uq,
      xb: () => Cq,
      xc: () => Yq._,
      yd: () => Yq.Vb,
      z: () => Yq.f,
      zb: () => Yq.H,
      zd: () => Yq.Wb,
      ze: () => Mq
    });
    var Yq = gq(4625),
      lq = gq(2357);
    const Oq = Math.round(1e3 / Yq.bc),
      mq = 4,
      xq = 2;

    function Aq() {
      return crypto.getRandomValues(new Uint32Array(xq))
    }
    const cq = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      uq = 16,
      Bq = {
        Draws: 1,
        NetAll: 2
      },
      Wq = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Nq(qq) {
      return (qq.nametagsHidden ? yq.NametagsHidden : 0) | (qq.crouchToggle ? yq.CrouchToggle : 0) | (qq.bhopDisabled ? yq.BhopDisabled : 0) | (qq.disableBobbing ? yq.DisableBobbing : 0) | (qq.ezTowering ? yq.EzTowering : 0) | (qq.ezBridging ? yq.EzBridging : 0) | (qq.showChunkBorders ? yq.ShowChunkBorders : 0)
    }
    const aq = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Vq = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      dq = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      jq = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Hq = 5,
      oq = 4294967295;

    function Pq(qq) {
      return (qq.showFog ? Wq.ShowFog : 0) | (qq.lighting ? Wq.Lighting : 0) | (qq.chunkFade ? Wq.ChunkFade : 0)
    }
    const Qq = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      yq = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      tq = {
        Release: 1,
        KeepTouches: 2
      },
      rq = {
        Point: 1,
        Stamped: 2
      },
      vq = {
        Add: 1,
        Clear: 2
      },
      hq = 1,
      nq = 8,
      bq = 16777215,
      iq = 4,
      Zq = {
        Resume: 1
      },
      fq = {
        Held: 1
      };

    function Mq(qq, Eq) {
      return (qq | Eq << 8) >>> 0
    }

    function Tq(qq) {
      return 255 & qq
    }

    function zq(qq) {
      return qq >>> 8
    }

    function Sq(qq) {
      return qq + 3 & -4
    }
    const pq = 16777216,
      Gq = 20;
    const Lq = 8,
      Jq = 8,
      kq = 16777216,
      Rq = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Uq = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Fq = 16,
      sq = {
        Lost: 0,
        Gone: 1
      },
      Xq = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function wq(qq) {
      return qq === Xq.WorldgenSeed || qq === Xq.Generate
    }
    const Kq = 4,
      Cq = 99,
      Iq = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      eq = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Dq = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      qE = 12,
      EE = 16,
      gE = 4,
      YE = 12,
      lE = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      OE = 4,
      mE = 8,
      xE = 8,
      AE = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      cE = {
        Crit: 1,
        HitSelf: 2
      },
      uE = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      BE = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      WE = 12,
      NE = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      aE = 67108864;

    function VE(qq) {
      for (const [Eq, gq] of Object.entries(Yq.f))
        if (gq === qq) return Eq;
      return `Unknown${qq}`
    }

    function dE(qq) {
      return {
        status: qq[Yq.C.Status],
        lastError: qq[Yq.C.LastError],
        lastErrorDetail: qq[Yq.C.LastErrorDetail],
        errorCount: qq[Yq.C.ErrorCount],
        frameIndex: qq[Yq.C.FrameIndex],
        tickIndex: qq[Yq.C.TickIndex],
        renderPending: qq[Yq.C.RenderPending],
        firstView: qq[Yq.C.FirstView],
        chunksCancelled: qq[Yq.C.ChunksCancelled]
      }
    }
  },
  4616: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      e: () => Oq,
      g: () => lq
    });
    var Yq = gq(4622);

    function lq(qq) {
      return "none" !== qq
    }

    function Oq(qq, Eq) {
      if (!qq) return "none";
      switch (Eq) {
        case Yq.Y.Drawn:
          return "drawn";
        case Yq.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function mq(qq) {
      return "drawn" === qq
    }
  },
  4627: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq,
      d: () => Oq,
      h: () => xq
    });
    var Yq = gq(2357),
      lq = gq(4629);

    function Oq(qq) {
      let {
        action: Eq,
        flags: gq
      } = qq;
      return "mid-fire" === Eq && 0 !== (gq & Yq.e.AltLeftClick)
    }
    const mq = new Set;

    function xq(qq) {
      return mq.add(qq), () => {
        mq.delete(qq)
      }
    }

    function Aq(qq) {
      const Eq = lq.b[255 & qq];
      if (void 0 === Eq) return;
      const gq = qq >>> 8 & 255,
        Oq = {
          action: Eq,
          down: 0 !== (gq & Yq.e.Down),
          flags: gq,
          press: qq >>> 16
        };
      for (const Yq of mq) Yq(Oq)
    }
  },
  4629: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      f: () => Oq,
      i: () => mq,
      l: () => Yq,
      m: () => xq
    });
    const Yq = {
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
      lq = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Oq = {
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
      mq = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      xq = [16]
  },
  4637: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq,
      h: () => mq,
      k: () => cq
    });
    var Yq = gq(2357),
      lq = gq(2364);
    const Oq = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function mq(qq) {
      return qq instanceof HTMLElement && (!!(qq.isContentEditable || qq instanceof HTMLTextAreaElement || qq instanceof HTMLSelectElement) || qq instanceof HTMLInputElement && !Oq.has(qq.type))
    }

    function xq(qq) {
      let Eq = null;
      const gq = gq => {
          const lq = mq(gq);
          lq !== Eq && (Eq = lq, qq(Yq.i.UiCapture, Yq.C.Keyboard, 0, 0, lq ? Yq.C.Keyboard : 0))
        },
        lq = qq => {
          gq(qq.target)
        },
        Oq = qq => {
          gq(qq.relatedTarget)
        },
        xq = () => {
          gq(document.activeElement)
        },
        Aq = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", lq, Aq), document.addEventListener("focusout", Oq, Aq), document.addEventListener("keydown", xq, Aq), gq(document.activeElement), () => {
        document.removeEventListener("focusin", lq, Aq), document.removeEventListener("focusout", Oq, Aq), document.removeEventListener("keydown", xq, Aq)
      }
    }
    const Aq = new Map;

    function cq(qq, Eq) {
      var gq;
      let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Aq.set(Yq, (null !== (gq = Aq.get(Yq)) && void 0 !== gq ? gq : 0) & ~qq | Eq & qq);
      let Oq = 0;
      for (const lq of Aq.values()) Oq |= lq;
      return (0, lq.B)(qq, Oq & qq)
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);