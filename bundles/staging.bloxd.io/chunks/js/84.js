export const id = 84;
export const ids = [84];
export const modules = {
  4657: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => vd,
      h: () => Rd
    });
    var pd = kd(1327),
      Nd = kd(29);
    var Wd = kd(313);
    var Pd = kd(610);
    var Zd = kd(2337),
      gd = kd(4666),
      Cd = kd(4696),
      Kd = kd(4709);
    class od {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        this.id = dd, this.type = Jd, this.parameters = kd, this.tearDownNotification = pd, this.onDonePromise = Nd, this.resolveRequest = Wd
      }
    }
    const ld = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class Qd {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        this.id = dd, this.type = Jd, this.parameters = kd, this.resolveRequest = pd, this.onDonePromise = Nd, this.tearDownNotification = Wd, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const Pd = Rd[Jd];
        if (!Pd) throw console.error(`No QTE implementation registered for type: ${Jd}`), new Error(`No QTE implementation registered for type: ${Jd}`);
        this.implementation = new Pd(kd, (dd => {
          this.isCompleted = !0, this.resolveRequest(dd)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Nd.j.subscribe("QTEMouseState", (dd => {
          let {
            isDown: Jd
          } = dd;
          this.isCompleted || this.implementation.handleMouseInput(Jd)
        })), this.stopInputActions = (0, Cd.i)((dd => {
          this.isCompleted || !ld.has(dd.action) && !(0, Cd.e)(dd) || this.implementation.handleMouseInput(dd.down)
        })), this.tickSub = Nd.j.subscribe("noaTick", (dd => {
          if (this.isCompleted) return;
          const Jd = dd / 1e3;
          this.implementation.handleTick(Jd)
        })), this.stopShellTicks = (0, gd.D)((() => {
          this.isCompleted || this.implementation.handleTick(Zd.t / 1e3)
        }))
      }
      cleanup() {
        var dd, Jd;
        this.mouseSub && (Nd.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (dd = this.stopInputActions) || void 0 === dd || dd.call(this), this.stopInputActions = null, null === (Jd = this.stopShellTicks) || void 0 === Jd || Jd.call(this), this.stopShellTicks = null, this.tickSub && (Nd.j.unsubscribe(this.tickSub), this.tickSub = null)
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
    const Ld = new pd.e,
      Od = new Map;
    let ed = null;
    const Rd = {
      progressBar: class {
        constructor(dd, Jd, kd) {
          var pd, Nd, Wd, Pd;
          this.resolveRequest = Jd, this.tearDownNotification = kd, this.progress = 0, this.hp = void 0, this.rp = void 0, this.tp = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const Zd = dd;
          this.hp = null !== (pd = Zd.hp) && void 0 !== pd ? pd : .075, this.rp = null !== (Nd = Zd.rp) && void 0 !== Nd ? Nd : 1, this.progress = null !== (Wd = Zd.cp) && void 0 !== Wd ? Wd : 30, this.tp = null !== (Pd = Zd.tp) && void 0 !== Pd && Pd, this.parameters = Zd
        }
        handleMouseInput(dd) {
          dd && !this.isCompleted && (this.clickCount++, this.progress += this.rp, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.hp, this.tp && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(dd) {
          this.isCompleted = !0, this.resolveRequest(dd)
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
        constructor(dd, Jd, kd) {
          var pd;
          this.resolveRequest = Jd, this.tearDownNotification = kd, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = dd, this.timeWindowMs = null !== (pd = this.parameters.Hp) && void 0 !== pd ? pd : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(dd) {
          if (!dd || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(dd) {
          this.isCompleted = !0, this.resolveRequest(dd)
        }
        getState() {
          const dd = Date.now() - this.startTime,
            Jd = Math.max(0, this.timeWindowMs - dd);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: Jd,
              Hp: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(dd, Jd, kd) {
          var pd;
          this.resolveRequest = Jd, this.tearDownNotification = kd, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Nd = dd;
          this.parameters = {
            ...Nd,
            JN: Wd.b.clamp(Nd.JN, .05, 1)
          }, this.progress = null !== (pd = Nd.cp) && void 0 !== pd ? pd : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(dd) {
          this.isMouseDown = dd
        }
        handleTick(dd) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(dd))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const dd = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += dd * this.parameters.kN * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const dd = Wd.b.clamp(1 - .7 * this.parameters.pN, 0, 1.4);
          return Math.floor(60 * dd + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.NN : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Wd.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const dd = this.parameters.JN / 2,
            Jd = dd,
            kd = 1 - dd;
          this.catchZonePosition <= Jd ? (this.catchZonePosition = Jd, this.catchZoneVelocity = 0) : this.catchZonePosition >= kd && (this.catchZonePosition = kd, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const dd = this.parameters.JN / 2;
          return this.moverPosition >= this.catchZonePosition - dd && this.moverPosition <= this.catchZonePosition + dd
        }
        updateProgress(dd) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.WN * dd : this.progress -= this.parameters.PN * dd, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.tp && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(dd) {
          this.isCompleted = !0, this.resolveRequest(dd)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              JN: this.parameters.JN,
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
        constructor(dd, Jd, kd) {
          var pd, Nd, Pd, Zd, gd;
          this.resolveRequest = Jd, this.tearDownNotification = kd, this.startTime = void 0, this.speed = void 0, this.gN = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const Cd = dd;
          this.parameters = {
            ...Cd,
            speed: null !== (pd = Cd.speed) && void 0 !== pd ? pd : .5,
            gN: Wd.b.clamp(Cd.gN, .05, 1),
            label: null !== (Nd = Cd.label) && void 0 !== Nd ? Nd : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (Pd = Cd.icon) && void 0 !== Pd ? Pd : null,
            scale: null !== (Zd = Cd.scale) && void 0 !== Zd ? Zd : 1,
            rotation: null !== (gd = Cd.rotation) && void 0 !== gd ? gd : 0
          }, this.speed = this.parameters.speed, this.gN = this.parameters.gN, this.startTime = Date.now()
        }
        handleMouseInput(dd) {
          if (dd) {
            this.updateMarkerPosition();
            const dd = Math.abs(this.markerPosition - .5) <= this.gN / 2;
            this.complete(dd)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const dd = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = dd <= .5 ? 2 * dd : 2 - 2 * dd
        }
        complete(dd) {
          this.isCompleted = !0, this.resolveRequest(dd)
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
        constructor(dd, Jd, kd) {
          this.resolveRequest = Jd, this.tearDownNotification = kd, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = dd, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(dd) {
          if (!dd || this.isCompleted) return;
          const Jd = this.getOuterCircleProgress();
          if (Jd <= this.parameters.lN && Jd >= -this.parameters.lN) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.KN) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, Pd.I)(this.parameters.QN) && this.misses > this.parameters.QN ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.lN && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.oN
        }
        complete(dd) {
          this.isCompleted = !0, this.resolveRequest(dd)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              KN: this.parameters.KN,
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

    function Id() {
      (0, Kd.i)(Zd.y.Qte, ed ? Zd.y.Qte : 0), ed ? Nd.j.nO("qteStateUpdated", ed.getState()) : Nd.j.nO("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class Gd {
      constructor(dd, Jd) {
        this.resultPromise = dd, this.tearDownQTE = Jd
      }
      static create(dd, Jd, kd) {
        const pd = Promise.race([dd, Jd]);
        return new Gd(pd, kd)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class vd {
      static queueQTE(dd, Jd, kd) {
        let pd, Nd;
        const Wd = new Promise((dd => {
            pd = dd
          })),
          Pd = new Promise((dd => {
            Nd = () => {
              dd("qteTornDown")
            }
          })),
          Zd = Promise.race([Wd, Pd]).then((() => {})),
          gd = new od(dd, Jd, kd, Nd, Zd, pd);
        return Od.set(dd, gd), Ld.enqueue(gd), ed || this.processNextQTE(), Gd.create(Wd, Pd, Nd)
      }
      static async processNextQTE() {
        if (ed || Ld.VQ()) return void(Ld.VQ() && ed && (ed = null, Id()));
        const dd = await Ld.dequeue();
        if (!Od.has(dd.id)) return void await this.processNextQTE();
        Od.delete(dd.id);
        const Jd = new Qd(dd.id, dd.type, dd.parameters, dd.resolveRequest, dd.onDonePromise, dd.tearDownNotification);
        ed = Jd, Id();
        try {
          await Jd.waitUntilDone()
        } catch (kd) {
          console.error("Error while waiting for QTE to resolve:", kd.stack)
        }
        ed === Jd && (ed.cleanup(), ed = null, Id()), await this.processNextQTE()
      }
      static cancelQTE(dd) {
        if (ed && ed.id === dd) return ed.tearDown(), ed = null, Id(), void this.processNextQTE();
        const Jd = Od.get(dd);
        Jd && (Od.delete(dd), Jd.tearDownNotification())
      }
      static getCurrentState() {
        return ed ? ed.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        ed && (ed.tearDown(), ed = null), Od.forEach(((dd, Jd) => {
          this.cancelQTE(Jd)
        })), Ld.emptyQueue(), Od.clear(), Id()
      }
    }
  },
  4688: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Wd,
      Db: () => sd,
      Eb: () => Bd,
      F: () => ed,
      Gb: () => jd,
      Hb: () => Td,
      I: () => Vd,
      L: () => Kd,
      Lb: () => fd,
      M: () => od,
      Ob: () => Ud,
      P: () => Cd,
      Qb: () => yd,
      Sb: () => xd,
      T: () => Rd,
      Tb: () => qd,
      Vb: () => cd,
      X: () => gd,
      Yb: () => Nd,
      Z: () => Ld,
      ab: () => Qd,
      ac: () => td,
      b: () => ud,
      bb: () => ad,
      d: () => rd,
      eb: () => Fd,
      gb: () => Yd,
      h: () => ld,
      ib: () => Md,
      jb: () => md,
      kb: () => Ed,
      l: () => vd,
      o: () => hd,
      ob: () => Dd,
      p: () => Gd,
      q: () => Id,
      sb: () => nd,
      tb: () => bd,
      u: () => Pd,
      vb: () => Xd,
      w: () => Zd,
      xb: () => Sd,
      y: () => pd,
      zb: () => Od
    });
    const pd = 32,
      Nd = 33.333333333333336,
      Wd = {
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
      Pd = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Zd = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      gd = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Cd = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Kd = 7,
      od = {
        ChunksReceived: 0,
        ChunksStored: 1,
        JobsSent: 2,
        JobsDone: 3,
        JobsInFlight: 4,
        WorkersLive: 5,
        WorkersRetired: 6
      },
      ld = {
        Look: 0,
        Remesh: 1
      },
      Qd = 8,
      Ld = 1,
      Od = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      ed = {
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
      Rd = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Id = {
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
      Gd = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      vd = 4,
      xd = 4,
      qd = 65535,
      Bd = {
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
      sd = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      ad = 88,
      Md = 0,
      Fd = 24,
      Yd = 48,
      md = 80,
      bd = {
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
      Sd = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      jd = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Xd = {
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
      fd = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      nd = 65535,
      Ud = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      yd = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Dd = 2,
      Td = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Ed = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      cd = {
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
      hd = {
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
      rd = {
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
      ud = 8,
      td = {
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
      Vd = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4666: (dd, Jd, kd) => {
    kd.d(Jd, {
      D: () => Md,
      G: () => Fd,
      J: () => Yd,
      L: () => Id,
      O: () => Pd,
      P: () => Zd,
      T: () => ad,
      e: () => sd,
      i: () => vd,
      m: () => bd,
      n: () => md,
      q: () => Rd,
      s: () => qd,
      v: () => Gd,
      z: () => xd
    });
    var pd = kd(4673);
    const Nd = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Wd = Nd;

    function Pd(dd) {
      Wd = null !== dd && void 0 !== dd ? dd : Nd
    }

    function Zd() {
      return Wd
    }
    const gd = new Set,
      Cd = new Set;
    let Kd = -1;
    const od = new Set,
      ld = new Set;
    let Qd = 0,
      Ld = 0;
    const Od = new Set,
      ed = new Set;

    function Rd(dd) {
      return gd.add(dd), () => {
        gd.delete(dd)
      }
    }

    function Id(dd, Jd) {
      for (const pd of gd) try {
        pd(dd)
      } catch (kd) {
        Jd(kd)
      }
    }

    function Gd(dd) {
      return Cd.add(dd), () => {
        Cd.delete(dd)
      }
    }

    function vd(dd, Jd) {
      const kd = Kd < 0 ? 0 : dd - Kd;
      Kd = dd;
      for (const Nd of Cd) try {
        Nd(kd)
      } catch (pd) {
        Jd(pd)
      }
    }

    function xd(dd) {
      return od.add(dd), () => {
        od.delete(dd)
      }
    }

    function qd(dd) {
      return ld.add(dd), () => {
        ld.delete(dd)
      }
    }
    let Bd = 0;

    function sd(dd) {
      Bd += dd
    }

    function ad() {
      const dd = Bd;
      return Bd = 0, dd
    }

    function Md(dd) {
      return Od.add(dd), () => {
        Od.delete(dd)
      }
    }

    function Fd(dd) {
      return ed.add(dd), () => {
        ed.delete(dd)
      }
    }

    function Yd() {
      Qd = 0, Ld = 0, Kd = -1
    }

    function md(dd, Jd) {
      if ("paced" === dd) return Ld += Jd, null;
      if ("drawn" !== dd && "skipped" !== dd) return null;
      const kd = Jd + Ld;
      return Ld = 0, kd
    }

    function bd(dd, Jd, kd, Nd) {
      const Wd = (0, pd.h)(Jd),
        Pd = dd > 0 ? performance.now() : 0;
      for (let pd = 0; pd < dd; pd++)
        for (const dd of Od) try {
          dd()
        } catch (Zd) {
          Nd(Zd)
        }
      if (dd > 0 && sd(performance.now() - Pd), null !== kd) {
        for (const dd of od) try {
          dd(kd)
        } catch (Zd) {
          Nd(Zd)
        }
        Qd += kd
      }
      if ("drawn" === Jd) {
        const dd = Qd;
        Qd = 0;
        for (const Jd of ld) try {
          Jd(dd)
        } catch (Zd) {
          Nd(Zd)
        }
      }
      for (const pd of ed) try {
        pd(dd, Wd)
      } catch (Zd) {
        Nd(Zd)
      }
    }
  },
  4680: (dd, Jd, kd) => {
    kd.d(Jd, {
      $b: () => xd,
      A: () => Pd,
      Ab: () => JJ,
      B: () => Sd,
      Bc: () => pd.ib,
      Bd: () => pd.Tb,
      C: () => LJ,
      Cc: () => pd.jb,
      Eb: () => pJ,
      F: () => wd,
      Fc: () => pd.sb,
      Fd: () => pd.Yb,
      G: () => pd.d,
      Gd: () => Wd,
      Hc: () => OJ,
      Ib: () => pd.M,
      Id: () => ed,
      J: () => Cd,
      Kc: () => oJ,
      L: () => pd.h,
      Lb: () => Nd.g,
      Ld: () => CJ,
      Md: () => Dd,
      Nb: () => sd,
      Nc: () => WJ,
      O: () => dJ,
      Pd: () => Ed,
      Qc: () => pd.tb,
      Rb: () => Ud,
      S: () => pd.l,
      Sd: () => yd,
      U: () => zd,
      Uc: () => pd.vb,
      Vb: () => md,
      Wc: () => pd.xb,
      Wd: () => rd,
      X: () => pd.q,
      Xb: () => Fd,
      Zb: () => pd.T,
      _: () => pd.u,
      _b: () => bd,
      _c: () => Ad,
      ab: () => pd.w,
      b: () => kJ,
      bd: () => pd.Db,
      be: () => cd,
      c: () => Od,
      cc: () => ZJ,
      db: () => od,
      de: () => td,
      ed: () => pd.Eb,
      fe: () => ud,
      g: () => Ld,
      gb: () => Id,
      gc: () => Gd,
      ge: () => gJ,
      h: () => KJ,
      ib: () => pd.y,
      ic: () => lJ,
      id: () => pd.Gb,
      ie: () => eJ,
      j: () => ad,
      jb: () => pd.B,
      ke: () => vd,
      lc: () => Nd.l,
      ld: () => pd.Lb,
      m: () => Bd,
      nb: () => Td,
      ne: () => Vd,
      oe: () => fd,
      pc: () => Rd,
      pd: () => pd.Ob,
      q: () => pd.b,
      qe: () => Xd,
      rb: () => PJ,
      rc: () => NJ,
      sd: () => pd.Qb,
      tb: () => Kd,
      td: () => Md,
      te: () => jd,
      u: () => QJ,
      ub: () => pd.F,
      uc: () => pd.bb,
      vb: () => hd,
      ve: () => gd,
      w: () => Yd,
      xb: () => Hd,
      xc: () => pd.eb,
      xd: () => pd.Sb,
      xe: () => nd,
      yb: () => pd.L,
      ye: () => RJ,
      zc: () => pd.gb,
      ze: () => Qd
    });
    var pd = kd(4688),
      Nd = kd(2337);
    const Wd = Math.round(1e3 / pd.Yb),
      Pd = 4,
      Zd = 2;

    function gd() {
      return crypto.getRandomValues(new Uint32Array(Zd))
    }
    const Cd = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Kd = 16,
      od = {
        Draws: 1,
        NetAll: 2
      },
      ld = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Qd(dd) {
      return (dd.nametagsHidden ? qd.NametagsHidden : 0) | (dd.crouchToggle ? qd.CrouchToggle : 0) | (dd.bhopDisabled ? qd.BhopDisabled : 0) | (dd.disableBobbing ? qd.DisableBobbing : 0) | (dd.ezTowering ? qd.EzTowering : 0) | (dd.ezBridging ? qd.EzBridging : 0) | (dd.showChunkBorders ? qd.ShowChunkBorders : 0)
    }
    const Ld = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Od = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      ed = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Rd = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Id = 5,
      Gd = 4294967295;

    function vd(dd) {
      return (dd.showFog ? ld.ShowFog : 0) | (dd.lighting ? ld.Lighting : 0) | (dd.chunkFade ? ld.ChunkFade : 0)
    }
    const xd = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      qd = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Bd = {
        Release: 1,
        KeepTouches: 2
      },
      sd = {
        Point: 1,
        Stamped: 2
      },
      ad = {
        Add: 1,
        Clear: 2
      },
      Md = 1,
      Fd = 8,
      Yd = 16777215,
      md = 4,
      bd = {
        Resume: 1
      },
      Sd = {
        Held: 1
      };

    function jd(dd, Jd) {
      return (dd | Jd << 8) >>> 0
    }

    function Xd(dd) {
      return 255 & dd
    }

    function fd(dd) {
      return dd >>> 8
    }

    function nd(dd) {
      return dd + 3 & -4
    }
    const Ud = 16777216,
      yd = 20;
    const Dd = 8,
      Td = 8,
      Ed = 16777216,
      cd = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hd = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      rd = 16,
      ud = {
        Lost: 0,
        Gone: 1
      },
      td = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Vd(dd) {
      return dd === td.WorldgenSeed || dd === td.Generate
    }
    const zd = 4,
      Hd = 99,
      wd = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Ad = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      dJ = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      JJ = 12,
      kJ = 16,
      pJ = 4,
      NJ = 12,
      WJ = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      PJ = 4,
      ZJ = 8,
      gJ = 8,
      CJ = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      KJ = {
        Crit: 1,
        HitSelf: 2
      },
      oJ = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      lJ = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      QJ = 12,
      LJ = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      OJ = 67108864;

    function eJ(dd) {
      for (const [Jd, kd] of Object.entries(pd.d))
        if (kd === dd) return Jd;
      return `Unknown${dd}`
    }

    function RJ(dd) {
      return {
        status: dd[pd.B.Status],
        lastError: dd[pd.B.LastError],
        lastErrorDetail: dd[pd.B.LastErrorDetail],
        errorCount: dd[pd.B.ErrorCount],
        frameIndex: dd[pd.B.FrameIndex],
        tickIndex: dd[pd.B.TickIndex],
        renderPending: dd[pd.B.RenderPending],
        firstView: dd[pd.B.FirstView],
        chunksCancelled: dd[pd.B.ChunksCancelled]
      }
    }
  },
  4673: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      f: () => Wd,
      h: () => Nd
    });
    var pd = kd(4680);

    function Nd(dd) {
      return "none" !== dd
    }

    function Wd(dd, Jd) {
      if (!dd) return "none";
      switch (Jd) {
        case pd.ab.Drawn:
          return "drawn";
        case pd.ab.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Pd(dd) {
      return "drawn" === dd
    }
  },
  4696: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd,
      e: () => Wd,
      i: () => Zd
    });
    var pd = kd(2337),
      Nd = kd(4704);

    function Wd(dd) {
      let {
        action: Jd,
        flags: kd
      } = dd;
      return "mid-fire" === Jd && 0 !== (kd & pd.d.AltLeftClick)
    }
    const Pd = new Set;

    function Zd(dd) {
      return Pd.add(dd), () => {
        Pd.delete(dd)
      }
    }

    function gd(dd) {
      const Jd = Nd.c[255 & dd];
      if (void 0 === Jd) return;
      const kd = dd >>> 8 & 255,
        Wd = {
          action: Jd,
          down: 0 !== (kd & pd.d.Down),
          flags: kd,
          press: dd >>> 16
        };
      for (const pd of Pd) pd(Wd)
    }
  },
  4704: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      f: () => Wd,
      j: () => Pd,
      n: () => pd,
      r: () => Zd
    });
    const pd = {
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
      Nd = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Wd = {
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
      Pd = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Zd = [16]
  },
  4709: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd,
      f: () => Pd,
      i: () => Cd
    });
    var pd = kd(2337),
      Nd = kd(2345);
    const Wd = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Pd(dd) {
      return dd instanceof HTMLElement && (!!(dd.isContentEditable || dd instanceof HTMLTextAreaElement || dd instanceof HTMLSelectElement) || dd instanceof HTMLInputElement && !Wd.has(dd.type))
    }

    function Zd(dd) {
      let Jd = null;
      const kd = kd => {
          const Nd = Pd(kd);
          Nd !== Jd && (Jd = Nd, dd(pd.k.UiCapture, pd.y.Keyboard, 0, 0, Nd ? pd.y.Keyboard : 0))
        },
        Nd = dd => {
          kd(dd.target)
        },
        Wd = dd => {
          kd(dd.relatedTarget)
        },
        Zd = () => {
          kd(document.activeElement)
        },
        gd = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Nd, gd), document.addEventListener("focusout", Wd, gd), document.addEventListener("keydown", Zd, gd), kd(document.activeElement), () => {
        document.removeEventListener("focusin", Nd, gd), document.removeEventListener("focusout", Wd, gd), document.removeEventListener("keydown", Zd, gd)
      }
    }
    const gd = new Map;

    function Cd(dd, Jd) {
      var kd;
      let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      gd.set(pd, (null !== (kd = gd.get(pd)) && void 0 !== kd ? kd : 0) & ~dd | Jd & dd);
      let Wd = 0;
      for (const Nd of gd.values()) Wd |= Nd;
      return (0, Nd.F)(dd, Wd & dd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);