export const id = 84;
export const ids = [84];
export const modules = {
  4619: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => pQ,
      d: () => eQ
    });
    var LQ = wQ(1317),
      qQ = wQ(22);
    var oQ = wQ(317);
    var DQ = wQ(619);
    var kQ = wQ(2313),
      vQ = wQ(4621),
      mQ = wQ(4642),
      uQ = wQ(4657);
    class HQ {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.id = QQ, this.type = FQ, this.parameters = wQ, this.tearDownNotification = LQ, this.onDonePromise = qQ, this.resolveRequest = oQ
      }
    }
    const bQ = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class YQ {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.id = QQ, this.type = FQ, this.parameters = wQ, this.resolveRequest = LQ, this.onDonePromise = qQ, this.tearDownNotification = oQ, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const DQ = eQ[FQ];
        if (!DQ) throw console.error(`No QTE implementation registered for type: ${FQ}`), new Error(`No QTE implementation registered for type: ${FQ}`);
        this.implementation = new DQ(wQ, (QQ => {
          this.isCompleted = !0, this.resolveRequest(QQ)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = qQ.l.subscribe("QTEMouseState", (QQ => {
          let {
            isDown: FQ
          } = QQ;
          this.isCompleted || this.implementation.handleMouseInput(FQ)
        })), this.stopInputActions = (0, mQ.j)((QQ => {
          this.isCompleted || !bQ.has(QQ.action) && !(0, mQ.g)(QQ) || this.implementation.handleMouseInput(QQ.down)
        })), this.tickSub = qQ.l.subscribe("noaTick", (QQ => {
          if (this.isCompleted) return;
          const FQ = QQ / 1e3;
          this.implementation.handleTick(FQ)
        })), this.stopShellTicks = (0, vQ.x)((() => {
          this.isCompleted || this.implementation.handleTick(kQ.r / 1e3)
        }))
      }
      cleanup() {
        var QQ, FQ;
        this.mouseSub && (qQ.l.unsubscribe(this.mouseSub), this.mouseSub = null), null === (QQ = this.stopInputActions) || void 0 === QQ || QQ.call(this), this.stopInputActions = null, null === (FQ = this.stopShellTicks) || void 0 === FQ || FQ.call(this), this.stopShellTicks = null, this.tickSub && (qQ.l.unsubscribe(this.tickSub), this.tickSub = null)
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
    const xQ = new LQ.d,
      AQ = new Map;
    let tQ = null;
    const eQ = {
      progressBar: class {
        constructor(QQ, FQ, wQ) {
          var LQ, qQ, oQ, DQ;
          this.resolveRequest = FQ, this.tearDownNotification = wQ, this.progress = 0, this.IL = void 0, this.UL = void 0, this.NL = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const kQ = QQ;
          this.IL = null !== (LQ = kQ.IL) && void 0 !== LQ ? LQ : .075, this.UL = null !== (qQ = kQ.UL) && void 0 !== qQ ? qQ : 1, this.progress = null !== (oQ = kQ.rL) && void 0 !== oQ ? oQ : 30, this.NL = null !== (DQ = kQ.NL) && void 0 !== DQ && DQ, this.parameters = kQ
        }
        handleMouseInput(QQ) {
          QQ && !this.isCompleted && (this.clickCount++, this.progress += this.UL, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.IL, this.NL && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(QQ) {
          this.isCompleted = !0, this.resolveRequest(QQ)
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
        constructor(QQ, FQ, wQ) {
          var LQ;
          this.resolveRequest = FQ, this.tearDownNotification = wQ, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = QQ, this.timeWindowMs = null !== (LQ = this.parameters.zL) && void 0 !== LQ ? LQ : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(QQ) {
          if (!QQ || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(QQ) {
          this.isCompleted = !0, this.resolveRequest(QQ)
        }
        getState() {
          const QQ = Date.now() - this.startTime,
            FQ = Math.max(0, this.timeWindowMs - QQ);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: FQ,
              zL: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(QQ, FQ, wQ) {
          var LQ;
          this.resolveRequest = FQ, this.tearDownNotification = wQ, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const qQ = QQ;
          this.parameters = {
            ...qQ,
            XL: oQ.e.clamp(qQ.XL, .05, 1)
          }, this.progress = null !== (LQ = qQ.rL) && void 0 !== LQ ? LQ : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(QQ) {
          this.isMouseDown = QQ
        }
        handleTick(QQ) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(QQ))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const QQ = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += QQ * this.parameters.fL * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const QQ = oQ.e.clamp(1 - .7 * this.parameters.VL, 0, 1.4);
          return Math.floor(60 * QQ + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.hL : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = oQ.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const QQ = this.parameters.XL / 2,
            FQ = QQ,
            wQ = 1 - QQ;
          this.catchZonePosition <= FQ ? (this.catchZonePosition = FQ, this.catchZoneVelocity = 0) : this.catchZonePosition >= wQ && (this.catchZonePosition = wQ, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const QQ = this.parameters.XL / 2;
          return this.moverPosition >= this.catchZonePosition - QQ && this.moverPosition <= this.catchZonePosition + QQ
        }
        updateProgress(QQ) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.JL * QQ : this.progress -= this.parameters.EL * QQ, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.NL && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(QQ) {
          this.isCompleted = !0, this.resolveRequest(QQ)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              XL: this.parameters.XL,
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
        constructor(QQ, FQ, wQ) {
          var LQ, qQ, DQ, kQ, vQ;
          this.resolveRequest = FQ, this.tearDownNotification = wQ, this.startTime = void 0, this.speed = void 0, this.gL = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const mQ = QQ;
          this.parameters = {
            ...mQ,
            speed: null !== (LQ = mQ.speed) && void 0 !== LQ ? LQ : .5,
            gL: oQ.e.clamp(mQ.gL, .05, 1),
            label: null !== (qQ = mQ.label) && void 0 !== qQ ? qQ : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (DQ = mQ.icon) && void 0 !== DQ ? DQ : null,
            scale: null !== (kQ = mQ.scale) && void 0 !== kQ ? kQ : 1,
            rotation: null !== (vQ = mQ.rotation) && void 0 !== vQ ? vQ : 0
          }, this.speed = this.parameters.speed, this.gL = this.parameters.gL, this.startTime = Date.now()
        }
        handleMouseInput(QQ) {
          if (QQ) {
            this.updateMarkerPosition();
            const QQ = Math.abs(this.markerPosition - .5) <= this.gL / 2;
            this.complete(QQ)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const QQ = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = QQ <= .5 ? 2 * QQ : 2 - 2 * QQ
        }
        complete(QQ) {
          this.isCompleted = !0, this.resolveRequest(QQ)
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
        constructor(QQ, FQ, wQ) {
          this.resolveRequest = FQ, this.tearDownNotification = wQ, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = QQ, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(QQ) {
          if (!QQ || this.isCompleted) return;
          const FQ = this.getOuterCircleProgress();
          if (FQ <= this.parameters.BL && FQ >= -this.parameters.BL) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.ZL) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, DQ.F)(this.parameters.dL) && this.misses > this.parameters.dL ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.BL && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.yL
        }
        complete(QQ) {
          this.isCompleted = !0, this.resolveRequest(QQ)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              ZL: this.parameters.ZL,
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

    function MQ() {
      (0, uQ.i)(kQ.w.Qte, tQ ? kQ.w.Qte : 0), tQ ? qQ.l.GA("qteStateUpdated", tQ.getState()) : qQ.l.GA("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class GQ {
      constructor(QQ, FQ) {
        this.resultPromise = QQ, this.tearDownQTE = FQ
      }
      static create(QQ, FQ, wQ) {
        const LQ = Promise.race([QQ, FQ]);
        return new GQ(LQ, wQ)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class pQ {
      static queueQTE(QQ, FQ, wQ) {
        let LQ, qQ;
        const oQ = new Promise((QQ => {
            LQ = QQ
          })),
          DQ = new Promise((QQ => {
            qQ = () => {
              QQ("qteTornDown")
            }
          })),
          kQ = Promise.race([oQ, DQ]).then((() => {})),
          vQ = new HQ(QQ, FQ, wQ, qQ, kQ, LQ);
        return AQ.set(QQ, vQ), xQ.enqueue(vQ), tQ || this.processNextQTE(), GQ.create(oQ, DQ, qQ)
      }
      static async processNextQTE() {
        if (tQ || xQ.BY()) return void(xQ.BY() && tQ && (tQ = null, MQ()));
        const QQ = await xQ.dequeue();
        if (!AQ.has(QQ.id)) return void await this.processNextQTE();
        AQ.delete(QQ.id);
        const FQ = new YQ(QQ.id, QQ.type, QQ.parameters, QQ.resolveRequest, QQ.onDonePromise, QQ.tearDownNotification);
        tQ = FQ, MQ();
        try {
          await FQ.waitUntilDone()
        } catch (wQ) {
          console.error("Error while waiting for QTE to resolve:", wQ.stack)
        }
        tQ === FQ && (tQ.cleanup(), tQ = null, MQ()), await this.processNextQTE()
      }
      static cancelQTE(QQ) {
        if (tQ && tQ.id === QQ) return tQ.tearDown(), tQ = null, MQ(), void this.processNextQTE();
        const FQ = AQ.get(QQ);
        FQ && (AQ.delete(QQ), FQ.tearDownNotification())
      }
      static getCurrentState() {
        return tQ ? tQ.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        tQ && (tQ.tearDown(), tQ = null), AQ.forEach(((QQ, FQ) => {
          this.cancelQTE(FQ)
        })), xQ.emptyQueue(), AQ.clear(), MQ()
      }
    }
  },
  4638: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      Ab: () => zQ,
      B: () => LQ,
      Eb: () => IQ,
      F: () => oQ,
      I: () => tQ,
      Ib: () => TQ,
      L: () => gQ,
      Lb: () => UQ,
      Nb: () => AQ,
      O: () => uQ,
      Q: () => HQ,
      Qb: () => iQ,
      U: () => mQ,
      Ub: () => SQ,
      Vb: () => NQ,
      Y: () => eQ,
      Zb: () => XQ,
      ab: () => vQ,
      bc: () => KQ,
      cc: () => lQ,
      db: () => xQ,
      dc: () => jQ,
      e: () => EQ,
      eb: () => YQ,
      fc: () => cQ,
      h: () => JQ,
      hb: () => WQ,
      i: () => bQ,
      jc: () => CQ,
      l: () => pQ,
      lb: () => OQ,
      mc: () => VQ,
      n: () => hQ,
      nc: () => qQ,
      ob: () => sQ,
      pb: () => RQ,
      qb: () => rQ,
      r: () => GQ,
      rc: () => nQ,
      ub: () => fQ,
      v: () => MQ,
      wb: () => aQ,
      x: () => DQ,
      z: () => kQ
    });
    const LQ = 32,
      qQ = 33.333333333333336,
      oQ = {
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
      DQ = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      kQ = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      vQ = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      mQ = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      uQ = 7,
      HQ = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      bQ = {
        Look: 0,
        Remesh: 1
      },
      YQ = 8,
      xQ = 1,
      AQ = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      tQ = {
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
      eQ = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      MQ = {
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
      GQ = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      pQ = 4,
      cQ = 4,
      CQ = 65535,
      SQ = {
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
      iQ = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      WQ = 88,
      RQ = 0,
      OQ = 24,
      sQ = 48,
      rQ = 80,
      IQ = {
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
      UQ = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      NQ = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      TQ = {
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
      KQ = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      zQ = 65535,
      lQ = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      jQ = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      aQ = 2,
      XQ = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      fQ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      VQ = {
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
      hQ = {
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
      JQ = {
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
      EQ = 8,
      nQ = {
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
      gQ = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4621: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => sQ,
      B: () => MQ,
      F: () => DQ,
      H: () => kQ,
      I: () => WQ,
      d: () => iQ,
      e: () => pQ,
      f: () => IQ,
      g: () => rQ,
      k: () => eQ,
      n: () => CQ,
      r: () => GQ,
      v: () => cQ,
      x: () => RQ,
      y: () => OQ
    });
    var LQ = wQ(4626);
    const qQ = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let oQ = qQ;

    function DQ(QQ) {
      oQ = null !== QQ && void 0 !== QQ ? QQ : qQ
    }

    function kQ() {
      return oQ
    }
    const vQ = new Set,
      mQ = new Set;
    let uQ = -1;
    const HQ = new Set,
      bQ = new Set;
    let YQ = 0,
      xQ = 0;
    const AQ = new Set,
      tQ = new Set;

    function eQ(QQ) {
      return vQ.add(QQ), () => {
        vQ.delete(QQ)
      }
    }

    function MQ(QQ, FQ) {
      for (const LQ of vQ) try {
        LQ(QQ)
      } catch (wQ) {
        FQ(wQ)
      }
    }

    function GQ(QQ) {
      return mQ.add(QQ), () => {
        mQ.delete(QQ)
      }
    }

    function pQ(QQ, FQ) {
      const wQ = uQ < 0 ? 0 : QQ - uQ;
      uQ = QQ;
      for (const qQ of mQ) try {
        qQ(wQ)
      } catch (LQ) {
        FQ(LQ)
      }
    }

    function cQ(QQ) {
      return HQ.add(QQ), () => {
        HQ.delete(QQ)
      }
    }

    function CQ(QQ) {
      return bQ.add(QQ), () => {
        bQ.delete(QQ)
      }
    }
    let SQ = 0;

    function iQ(QQ) {
      SQ += QQ
    }

    function WQ() {
      const QQ = SQ;
      return SQ = 0, QQ
    }

    function RQ(QQ) {
      return AQ.add(QQ), () => {
        AQ.delete(QQ)
      }
    }

    function OQ(QQ) {
      return tQ.add(QQ), () => {
        tQ.delete(QQ)
      }
    }

    function sQ() {
      YQ = 0, xQ = 0, uQ = -1
    }

    function rQ(QQ, FQ) {
      if ("paced" === QQ) return xQ += FQ, null;
      if ("drawn" !== QQ && "skipped" !== QQ) return null;
      const wQ = FQ + xQ;
      return xQ = 0, wQ
    }

    function IQ(QQ, FQ, wQ, qQ) {
      const oQ = (0, LQ.h)(FQ),
        DQ = QQ > 0 ? performance.now() : 0;
      for (let LQ = 0; LQ < QQ; LQ++)
        for (const QQ of AQ) try {
          QQ()
        } catch (kQ) {
          qQ(kQ)
        }
      if (QQ > 0 && iQ(performance.now() - DQ), null !== wQ) {
        for (const QQ of HQ) try {
          QQ(wQ)
        } catch (kQ) {
          qQ(kQ)
        }
        YQ += wQ
      }
      if ("drawn" === FQ) {
        const QQ = YQ;
        YQ = 0;
        for (const FQ of bQ) try {
          FQ(QQ)
        } catch (kQ) {
          qQ(kQ)
        }
      }
      for (const LQ of tQ) try {
        LQ(QQ, oQ)
      } catch (kQ) {
        qQ(kQ)
      }
    }
  },
  4632: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      $: () => XQ,
      $b: () => qQ.k,
      $c: () => LQ.fc,
      Ab: () => rQ,
      Ac: () => LQ.Eb,
      Ad: () => kF,
      B: () => yQ,
      Cc: () => LQ.Ib,
      D: () => LQ.h,
      Db: () => OQ,
      Dd: () => AF,
      G: () => mQ,
      Gc: () => LQ.Lb,
      H: () => LQ.i,
      Hb: () => LQ.Y,
      Hd: () => pQ,
      I: () => dQ,
      Ic: () => BQ,
      J: () => LQ.l,
      Kc: () => LQ.Qb,
      Kd: () => gQ,
      L: () => PQ,
      Lb: () => IQ,
      Ld: () => KQ,
      O: () => LQ.v,
      Ob: () => cQ,
      Oc: () => LQ.Ub,
      Pc: () => LQ.Vb,
      Pd: () => TQ,
      Q: () => LQ.x,
      Qc: () => LQ.bc,
      Qd: () => NQ,
      R: () => LQ.z,
      Rb: () => DF,
      S: () => HQ,
      Sc: () => LQ.cc,
      T: () => MQ,
      U: () => LQ.B,
      Uc: () => LQ.dc,
      Ud: () => vQ,
      Vb: () => GQ,
      Xc: () => RQ,
      Y: () => LQ.F,
      Yd: () => zQ,
      Zb: () => HF,
      Zd: () => tF,
      ab: () => oF,
      ad: () => LQ.jc,
      ae: () => YQ,
      b: () => FF,
      bb: () => uQ,
      bd: () => LQ.nc,
      c: () => AQ,
      cc: () => eQ,
      cd: () => oQ,
      d: () => xQ,
      dc: () => LF,
      e: () => mF,
      ed: () => tQ,
      fb: () => LQ.I,
      fc: () => LQ.hb,
      gd: () => vF,
      h: () => WQ,
      hb: () => hQ,
      hc: () => LQ.lb,
      hd: () => aQ,
      ib: () => ZQ,
      id: () => fQ,
      jb: () => LQ.O,
      jc: () => LQ.ob,
      jd: () => jQ,
      kb: () => QF,
      l: () => SQ,
      m: () => LQ.e,
      mc: () => LQ.pb,
      md: () => JQ,
      n: () => bF,
      nb: () => wF,
      oc: () => LQ.qb,
      pb: () => LQ.Q,
      q: () => sQ,
      qd: () => VQ,
      rb: () => qQ.g,
      sb: () => iQ,
      sc: () => LQ.Ab,
      t: () => DQ,
      tc: () => xF,
      td: () => nQ,
      v: () => UQ,
      vc: () => uF,
      wb: () => lQ,
      wd: () => EQ,
      xc: () => qF,
      z: () => YF
    });
    var LQ = wQ(4638),
      qQ = wQ(2313);
    const oQ = Math.round(1e3 / LQ.nc),
      DQ = 4,
      kQ = 2;

    function vQ() {
      return crypto.getRandomValues(new Uint32Array(kQ))
    }
    const mQ = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      uQ = 16,
      HQ = {
        Draws: 1,
        NetAll: 2
      },
      bQ = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function YQ(QQ) {
      return (QQ.nametagsHidden ? CQ.NametagsHidden : 0) | (QQ.crouchToggle ? CQ.CrouchToggle : 0) | (QQ.bhopDisabled ? CQ.BhopDisabled : 0) | (QQ.disableBobbing ? CQ.DisableBobbing : 0) | (QQ.ezTowering ? CQ.EzTowering : 0) | (QQ.ezBridging ? CQ.EzBridging : 0) | (QQ.showChunkBorders ? CQ.ShowChunkBorders : 0)
    }
    const xQ = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      AQ = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      tQ = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      eQ = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      MQ = 5,
      GQ = 4294967295;

    function pQ(QQ) {
      return (QQ.showFog ? bQ.ShowFog : 0) | (QQ.lighting ? bQ.Lighting : 0) | (QQ.chunkFade ? bQ.ChunkFade : 0)
    }
    const cQ = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      CQ = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      SQ = {
        Release: 1,
        KeepTouches: 2
      },
      iQ = {
        Point: 1,
        Stamped: 2
      },
      WQ = {
        Add: 1,
        Clear: 2
      },
      RQ = 1,
      OQ = 8,
      sQ = 16777215,
      rQ = 4,
      IQ = {
        Resume: 1
      },
      UQ = {
        Held: 1
      };

    function NQ(QQ, FQ) {
      return (QQ | FQ << 8) >>> 0
    }

    function TQ(QQ) {
      return 255 & QQ
    }

    function KQ(QQ) {
      return QQ >>> 8
    }

    function zQ(QQ) {
      return QQ + 3 & -4
    }
    const lQ = 16777216,
      jQ = 20;
    const aQ = 8,
      XQ = 8,
      fQ = 16777216,
      VQ = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hQ = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      JQ = 16,
      EQ = {
        Lost: 0,
        Gone: 1
      },
      nQ = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function gQ(QQ) {
      return QQ === nQ.WorldgenSeed || QQ === nQ.Generate
    }
    const PQ = 4,
      ZQ = 99,
      yQ = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      BQ = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      dQ = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      QF = 12,
      FF = 16,
      wF = 4,
      LF = 12,
      qF = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      oF = 4,
      DF = 8,
      kF = 8,
      vF = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      mF = {
        Crit: 1,
        HitSelf: 2
      },
      uF = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      HF = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      bF = 12,
      YF = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      xF = 67108864;

    function AF(QQ) {
      for (const [FQ, wQ] of Object.entries(LQ.h))
        if (wQ === QQ) return FQ;
      return `Unknown${QQ}`
    }

    function tF(QQ) {
      return {
        status: QQ[LQ.F.Status],
        lastError: QQ[LQ.F.LastError],
        lastErrorDetail: QQ[LQ.F.LastErrorDetail],
        errorCount: QQ[LQ.F.ErrorCount],
        frameIndex: QQ[LQ.F.FrameIndex],
        tickIndex: QQ[LQ.F.TickIndex],
        renderPending: QQ[LQ.F.RenderPending],
        firstView: QQ[LQ.F.FirstView],
        chunksCancelled: QQ[LQ.F.ChunksCancelled]
      }
    }
  },
  4626: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      e: () => oQ,
      h: () => qQ
    });
    var LQ = wQ(4632);

    function qQ(QQ) {
      return "none" !== QQ
    }

    function oQ(QQ, FQ) {
      if (!QQ) return "none";
      switch (FQ) {
        case LQ.R.Drawn:
          return "drawn";
        case LQ.R.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function DQ(QQ) {
      return "drawn" === QQ
    }
  },
  4642: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ,
      g: () => oQ,
      j: () => kQ
    });
    var LQ = wQ(2313),
      qQ = wQ(4651);

    function oQ(QQ) {
      let {
        action: FQ,
        flags: wQ
      } = QQ;
      return "mid-fire" === FQ && 0 !== (wQ & LQ.c.AltLeftClick)
    }
    const DQ = new Set;

    function kQ(QQ) {
      return DQ.add(QQ), () => {
        DQ.delete(QQ)
      }
    }

    function vQ(QQ) {
      const FQ = qQ.b[255 & QQ];
      if (void 0 === FQ) return;
      const wQ = QQ >>> 8 & 255,
        oQ = {
          action: FQ,
          down: 0 !== (wQ & LQ.c.Down),
          flags: wQ,
          press: QQ >>> 16
        };
      for (const LQ of DQ) LQ(oQ)
    }
  },
  4651: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      c: () => oQ,
      d: () => DQ,
      f: () => LQ,
      g: () => kQ
    });
    const LQ = {
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
      qQ = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      oQ = {
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
      DQ = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      kQ = [16]
  },
  4657: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ,
      g: () => DQ,
      i: () => mQ
    });
    var LQ = wQ(2313),
      qQ = wQ(2320);
    const oQ = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function DQ(QQ) {
      return QQ instanceof HTMLElement && (!!(QQ.isContentEditable || QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLSelectElement) || QQ instanceof HTMLInputElement && !oQ.has(QQ.type))
    }

    function kQ(QQ) {
      let FQ = null;
      const wQ = wQ => {
          const qQ = DQ(wQ);
          qQ !== FQ && (FQ = qQ, QQ(LQ.i.UiCapture, LQ.w.Keyboard, 0, 0, qQ ? LQ.w.Keyboard : 0))
        },
        qQ = QQ => {
          wQ(QQ.target)
        },
        oQ = QQ => {
          wQ(QQ.relatedTarget)
        },
        kQ = () => {
          wQ(document.activeElement)
        },
        vQ = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", qQ, vQ), document.addEventListener("focusout", oQ, vQ), document.addEventListener("keydown", kQ, vQ), wQ(document.activeElement), () => {
        document.removeEventListener("focusin", qQ, vQ), document.removeEventListener("focusout", oQ, vQ), document.removeEventListener("keydown", kQ, vQ)
      }
    }
    const vQ = new Map;

    function mQ(QQ, FQ) {
      var wQ;
      let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      vQ.set(LQ, (null !== (wQ = vQ.get(LQ)) && void 0 !== wQ ? wQ : 0) & ~QQ | FQ & QQ);
      let oQ = 0;
      for (const qQ of vQ.values()) oQ |= qQ;
      return (0, qQ.A)(QQ, oQ & QQ)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);