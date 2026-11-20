export const id = 83;
export const ids = [83];
export const modules = {
  4507: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ik,
      d: () => mk
    });
    var Rk = Bk(1253),
      tk = Bk(29);
    var ak = Bk(291);
    var Xk = Bk(606);
    var bk = Bk(2303),
      wk = Bk(4511),
      dk = Bk(4533),
      sk = Bk(4546);
    class Vk {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        this.id = kk, this.type = Fk, this.parameters = Bk, this.tearDownNotification = Rk, this.onDonePromise = tk, this.resolveRequest = ak
      }
    }
    const Jk = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class Ak {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        this.id = kk, this.type = Fk, this.parameters = Bk, this.resolveRequest = Rk, this.onDonePromise = tk, this.tearDownNotification = ak, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const Xk = mk[Fk];
        if (!Xk) throw console.error(`No QTE implementation registered for type: ${Fk}`), new Error(`No QTE implementation registered for type: ${Fk}`);
        this.implementation = new Xk(Bk, (kk => {
          this.isCompleted = !0, this.resolveRequest(kk)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = tk.o.subscribe("QTEMouseState", (kk => {
          let {
            isDown: Fk
          } = kk;
          this.isCompleted || this.implementation.handleMouseInput(Fk)
        })), this.stopInputActions = (0, dk.l)((kk => {
          this.isCompleted || !Jk.has(kk.action) && !(0, dk.h)(kk) || this.implementation.handleMouseInput(kk.down)
        })), this.tickSub = tk.o.subscribe("noaTick", (kk => {
          if (this.isCompleted) return;
          const Fk = kk / 1e3;
          this.implementation.handleTick(Fk)
        })), this.stopShellTicks = (0, wk.x)((() => {
          this.isCompleted || this.implementation.handleTick(bk.u / 1e3)
        }))
      }
      cleanup() {
        var kk, Fk;
        this.mouseSub && (tk.o.unsubscribe(this.mouseSub), this.mouseSub = null), null === (kk = this.stopInputActions) || void 0 === kk || kk.call(this), this.stopInputActions = null, null === (Fk = this.stopShellTicks) || void 0 === Fk || Fk.call(this), this.stopShellTicks = null, this.tickSub && (tk.o.unsubscribe(this.tickSub), this.tickSub = null)
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
    const ek = new Rk.c,
      yk = new Map;
    let fk = null;
    const mk = {
      progressBar: class {
        constructor(kk, Fk, Bk) {
          var Rk, tk, ak, Xk;
          this.resolveRequest = Fk, this.tearDownNotification = Bk, this.progress = 0, this.Gk = void 0, this.Tk = void 0, this.rk = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const bk = kk;
          this.Gk = null !== (Rk = bk.Gk) && void 0 !== Rk ? Rk : .075, this.Tk = null !== (tk = bk.Tk) && void 0 !== tk ? tk : 1, this.progress = null !== (ak = bk.Uk) && void 0 !== ak ? ak : 30, this.rk = null !== (Xk = bk.rk) && void 0 !== Xk && Xk, this.parameters = bk
        }
        handleMouseInput(kk) {
          kk && !this.isCompleted && (this.clickCount++, this.progress += this.Tk, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.Gk, this.rk && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(kk) {
          this.isCompleted = !0, this.resolveRequest(kk)
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
        constructor(kk, Fk, Bk) {
          var Rk;
          this.resolveRequest = Fk, this.tearDownNotification = Bk, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = kk, this.timeWindowMs = null !== (Rk = this.parameters.qk) && void 0 !== Rk ? Rk : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(kk) {
          if (!kk || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(kk) {
          this.isCompleted = !0, this.resolveRequest(kk)
        }
        getState() {
          const kk = Date.now() - this.startTime,
            Fk = Math.max(0, this.timeWindowMs - kk);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: Fk,
              qk: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(kk, Fk, Bk) {
          var Rk;
          this.resolveRequest = Fk, this.tearDownNotification = Bk, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const tk = kk;
          this.parameters = {
            ...tk,
            xk: ak.b.clamp(tk.xk, .05, 1)
          }, this.progress = null !== (Rk = tk.Uk) && void 0 !== Rk ? Rk : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(kk) {
          this.isMouseDown = kk
        }
        handleTick(kk) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(kk))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const kk = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += kk * this.parameters.jk * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const kk = ak.b.clamp(1 - .7 * this.parameters.lk, 0, 1.4);
          return Math.floor(60 * kk + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.nk : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = ak.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const kk = this.parameters.xk / 2,
            Fk = kk,
            Bk = 1 - kk;
          this.catchZonePosition <= Fk ? (this.catchZonePosition = Fk, this.catchZoneVelocity = 0) : this.catchZonePosition >= Bk && (this.catchZonePosition = Bk, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const kk = this.parameters.xk / 2;
          return this.moverPosition >= this.catchZonePosition - kk && this.moverPosition <= this.catchZonePosition + kk
        }
        updateProgress(kk) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.Ik * kk : this.progress -= this.parameters.Qk * kk, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.rk && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(kk) {
          this.isCompleted = !0, this.resolveRequest(kk)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              xk: this.parameters.xk,
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
        constructor(kk, Fk, Bk) {
          var Rk, tk, Xk, bk, wk;
          this.resolveRequest = Fk, this.tearDownNotification = Bk, this.startTime = void 0, this.speed = void 0, this.FF = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const dk = kk;
          this.parameters = {
            ...dk,
            speed: null !== (Rk = dk.speed) && void 0 !== Rk ? Rk : .5,
            FF: ak.b.clamp(dk.FF, .05, 1),
            label: null !== (tk = dk.label) && void 0 !== tk ? tk : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (Xk = dk.icon) && void 0 !== Xk ? Xk : null,
            scale: null !== (bk = dk.scale) && void 0 !== bk ? bk : 1,
            rotation: null !== (wk = dk.rotation) && void 0 !== wk ? wk : 0
          }, this.speed = this.parameters.speed, this.FF = this.parameters.FF, this.startTime = Date.now()
        }
        handleMouseInput(kk) {
          if (kk) {
            this.updateMarkerPosition();
            const kk = Math.abs(this.markerPosition - .5) <= this.FF / 2;
            this.complete(kk)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const kk = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = kk <= .5 ? 2 * kk : 2 - 2 * kk
        }
        complete(kk) {
          this.isCompleted = !0, this.resolveRequest(kk)
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
        constructor(kk, Fk, Bk) {
          this.resolveRequest = Fk, this.tearDownNotification = Bk, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = kk, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(kk) {
          if (!kk || this.isCompleted) return;
          const Fk = this.getOuterCircleProgress();
          if (Fk <= this.parameters.aF && Fk >= -this.parameters.aF) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.RF) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, Xk.F)(this.parameters.XF) && this.misses > this.parameters.XF ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.aF && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.tF
        }
        complete(kk) {
          this.isCompleted = !0, this.resolveRequest(kk)
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

    function Wk() {
      (0, sk.i)(bk.A.Qte, fk ? bk.A.Qte : 0), fk ? tk.o.Hf("qteStateUpdated", fk.getState()) : tk.o.Hf("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class vk {
      constructor(kk, Fk) {
        this.resultPromise = kk, this.tearDownQTE = Fk
      }
      static create(kk, Fk, Bk) {
        const Rk = Promise.race([kk, Fk]);
        return new vk(Rk, Bk)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class ik {
      static queueQTE(kk, Fk, Bk) {
        let Rk, tk;
        const ak = new Promise((kk => {
            Rk = kk
          })),
          Xk = new Promise((kk => {
            tk = () => {
              kk("qteTornDown")
            }
          })),
          bk = Promise.race([ak, Xk]).then((() => {})),
          wk = new Vk(kk, Fk, Bk, tk, bk, Rk);
        return yk.set(kk, wk), ek.enqueue(wk), fk || this.processNextQTE(), vk.create(ak, Xk, tk)
      }
      static async processNextQTE() {
        if (fk || ek.Se()) return void(ek.Se() && fk && (fk = null, Wk()));
        const kk = await ek.dequeue();
        if (!yk.has(kk.id)) return void await this.processNextQTE();
        yk.delete(kk.id);
        const Fk = new Ak(kk.id, kk.type, kk.parameters, kk.resolveRequest, kk.onDonePromise, kk.tearDownNotification);
        fk = Fk, Wk();
        try {
          await Fk.waitUntilDone()
        } catch (Bk) {
          console.error("Error while waiting for QTE to resolve:", Bk.stack)
        }
        fk === Fk && (fk.cleanup(), fk = null, Wk()), await this.processNextQTE()
      }
      static cancelQTE(kk) {
        if (fk && fk.id === kk) return fk.tearDown(), fk = null, Wk(), void this.processNextQTE();
        const Fk = yk.get(kk);
        Fk && (yk.delete(kk), Fk.tearDownNotification())
      }
      static getCurrentState() {
        return fk ? fk.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        fk && (fk.tearDown(), fk = null), yk.forEach(((kk, Fk) => {
          this.cancelQTE(Fk)
        })), ek.emptyQueue(), yk.clear(), Wk()
      }
    }
  },
  4531: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      $: () => Hk,
      A: () => ek,
      Cb: () => zk,
      D: () => Kk,
      Db: () => ck,
      F: () => dk,
      Fb: () => Tk,
      G: () => yk,
      H: () => wk,
      Jb: () => rk,
      Kb: () => vk,
      L: () => Jk,
      Lb: () => ik,
      N: () => Vk,
      O: () => Ok,
      Ob: () => hk,
      R: () => Sk,
      Rb: () => tk,
      T: () => Nk,
      Tb: () => pk,
      X: () => Ek,
      bb: () => Pk,
      d: () => Zk,
      fb: () => Dk,
      g: () => Ck,
      h: () => sk,
      i: () => Wk,
      j: () => qk,
      jb: () => Gk,
      kb: () => uk,
      m: () => mk,
      ob: () => Uk,
      pb: () => Mk,
      q: () => fk,
      qb: () => Ak,
      t: () => Xk,
      tb: () => Lk,
      u: () => bk,
      vb: () => Yk,
      y: () => Rk,
      yb: () => gk,
      z: () => ak
    });
    const Rk = 32,
      tk = 33.333333333333336,
      ak = {
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
      Xk = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      bk = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      wk = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      dk = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      sk = {
        Look: 0,
        Remesh: 1
      },
      Vk = 8,
      Jk = 1,
      Ak = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      ek = {
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
      yk = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      fk = {
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
      mk = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Wk = 4,
      vk = 4,
      ik = 65535,
      Yk = {
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
      Lk = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      Ok = 88,
      Ek = 0,
      Sk = 24,
      Nk = 48,
      Hk = 80,
      uk = {
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
      Mk = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      gk = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Uk = {
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
      ck = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Gk = 65535,
      Tk = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      rk = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      Dk = 2,
      zk = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Pk = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      hk = {
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
      qk = {
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
      Ck = {
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
      Zk = 8,
      pk = {
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
      Kk = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4511: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => Hk,
      B: () => uk,
      D: () => Wk,
      G: () => Xk,
      J: () => bk,
      N: () => Sk,
      b: () => Ek,
      e: () => ik,
      h: () => gk,
      l: () => Mk,
      m: () => mk,
      p: () => Lk,
      s: () => vk,
      t: () => Yk,
      x: () => Nk
    });
    var Rk = Bk(4517);
    const tk = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ak = tk;

    function Xk(kk) {
      ak = null !== kk && void 0 !== kk ? kk : tk
    }

    function bk() {
      return ak
    }
    const wk = new Set,
      dk = new Set;
    let sk = -1;
    const Vk = new Set,
      Jk = new Set;
    let Ak = 0,
      ek = 0;
    const yk = new Set,
      fk = new Set;

    function mk(kk) {
      return wk.add(kk), () => {
        wk.delete(kk)
      }
    }

    function Wk(kk, Fk) {
      for (const Rk of wk) try {
        Rk(kk)
      } catch (Bk) {
        Fk(Bk)
      }
    }

    function vk(kk) {
      return dk.add(kk), () => {
        dk.delete(kk)
      }
    }

    function ik(kk, Fk) {
      const Bk = sk < 0 ? 0 : kk - sk;
      sk = kk;
      for (const tk of dk) try {
        tk(Bk)
      } catch (Rk) {
        Fk(Rk)
      }
    }

    function Yk(kk) {
      return Vk.add(kk), () => {
        Vk.delete(kk)
      }
    }

    function Lk(kk) {
      return Jk.add(kk), () => {
        Jk.delete(kk)
      }
    }
    let Ok = 0;

    function Ek(kk) {
      Ok += kk
    }

    function Sk() {
      const kk = Ok;
      return Ok = 0, kk
    }

    function Nk(kk) {
      return yk.add(kk), () => {
        yk.delete(kk)
      }
    }

    function Hk(kk) {
      return fk.add(kk), () => {
        fk.delete(kk)
      }
    }

    function uk() {
      Ak = 0, ek = 0, sk = -1
    }

    function Mk(kk, Fk) {
      if ("paced" === kk) return ek += Fk, null;
      if ("drawn" !== kk && "skipped" !== kk) return null;
      const Bk = Fk + ek;
      return ek = 0, Bk
    }

    function gk(kk, Fk, Bk, tk) {
      const ak = (0, Rk.i)(Fk),
        Xk = kk > 0 ? performance.now() : 0;
      for (let Rk = 0; Rk < kk; Rk++)
        for (const kk of yk) try {
          kk()
        } catch (bk) {
          tk(bk)
        }
      if (kk > 0 && Ek(performance.now() - Xk), null !== Bk) {
        for (const kk of Vk) try {
          kk(Bk)
        } catch (bk) {
          tk(bk)
        }
        Ak += Bk
      }
      if ("drawn" === Fk) {
        const kk = Ak;
        Ak = 0;
        for (const Fk of Jk) try {
          Fk(kk)
        } catch (bk) {
          tk(bk)
        }
      }
      for (const Rk of fk) try {
        Rk(kk, ak)
      } catch (bk) {
        tk(bk)
      }
    }
  },
  4524: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => Ik,
      Ab: () => Hk,
      B: () => Rk.g,
      Bc: () => Rk.Fb,
      C: () => dk,
      Cb: () => Rk.G,
      Cc: () => Rk.Jb,
      Eb: () => gk,
      Ec: () => Nk,
      G: () => Rk.h,
      Gc: () => Rk.Kb,
      Hb: () => Yk,
      I: () => Rk.i,
      Ib: () => XF,
      Jb: () => vk,
      K: () => lk,
      Kc: () => Rk.Lb,
      Lc: () => Rk.Rb,
      M: () => Rk.q,
      Nb: () => VF,
      Ob: () => tk.n,
      P: () => Rk.t,
      Pb: () => mk,
      Pc: () => ak,
      Qc: () => fk,
      Rb: () => RF,
      S: () => Rk.u,
      Sb: () => Rk.O,
      Sc: () => wF,
      T: () => Vk,
      Tc: () => Pk,
      Ub: () => Rk.R,
      Uc: () => qk,
      V: () => Wk,
      Wc: () => zk,
      Xc: () => pk,
      Yb: () => Rk.T,
      Z: () => Rk.y,
      Zb: () => Rk.X,
      _b: () => Rk.$,
      ab: () => Rk.z,
      bb: () => hk,
      cc: () => Rk.jb,
      db: () => aF,
      dc: () => eF,
      dd: () => Ck,
      e: () => FF,
      ec: () => sF,
      ed: () => xk,
      fd: () => Kk,
      g: () => yk,
      gb: () => sk,
      gd: () => bF,
      hb: () => Rk.A,
      hc: () => tF,
      hd: () => yF,
      i: () => ek,
      ib: () => Zk,
      ic: () => Rk.kb,
      jb: () => nk,
      jc: () => Rk.ob,
      jd: () => ik,
      k: () => dF,
      kd: () => jk,
      l: () => Sk,
      m: () => Ok,
      mb: () => kF,
      mc: () => Rk.pb,
      md: () => Tk,
      nc: () => Qk,
      o: () => Rk.d,
      ob: () => BF,
      od: () => Gk,
      p: () => JF,
      q: () => uk,
      qb: () => tk.g,
      qd: () => ck,
      rb: () => Ek,
      rc: () => Rk.tb,
      rd: () => wk,
      s: () => Xk,
      sc: () => Rk.vb,
      td: () => rk,
      u: () => Uk,
      ub: () => Dk,
      wb: () => Mk,
      wc: () => Rk.yb,
      wd: () => fF,
      xc: () => Rk.Db,
      xd: () => Ak,
      y: () => AF
    });
    var Rk = Bk(4531),
      tk = Bk(2303);
    const ak = Math.round(1e3 / Rk.Rb),
      Xk = 4,
      bk = 2;

    function wk() {
      return crypto.getRandomValues(new Uint32Array(bk))
    }
    const dk = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      sk = 16,
      Vk = {
        Draws: 1,
        NetAll: 2
      },
      Jk = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Ak(kk) {
      return (kk.nametagsHidden ? Lk.NametagsHidden : 0) | (kk.crouchToggle ? Lk.CrouchToggle : 0) | (kk.bhopDisabled ? Lk.BhopDisabled : 0) | (kk.disableBobbing ? Lk.DisableBobbing : 0) | (kk.ezTowering ? Lk.EzTowering : 0) | (kk.ezBridging ? Lk.EzBridging : 0) | (kk.showChunkBorders ? Lk.ShowChunkBorders : 0)
    }
    const ek = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      yk = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      fk = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      mk = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Wk = 5,
      vk = 4294967295;

    function ik(kk) {
      return (kk.showFog ? Jk.ShowFog : 0) | (kk.lighting ? Jk.Lighting : 0) | (kk.chunkFade ? Jk.ChunkFade : 0)
    }
    const Yk = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Lk = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Ok = {
        Release: 1,
        KeepTouches: 2
      },
      Ek = {
        Point: 1,
        Stamped: 2
      },
      Sk = {
        Add: 1,
        Clear: 2
      },
      Nk = 1,
      Hk = 8,
      uk = 16777215,
      Mk = 4,
      gk = {
        Resume: 1
      },
      Uk = {
        Held: 1
      };

    function ck(kk, Fk) {
      return (kk | Fk << 8) >>> 0
    }

    function Gk(kk) {
      return 255 & kk
    }

    function Tk(kk) {
      return kk >>> 8
    }

    function rk(kk) {
      return kk + 3 & -4
    }
    const Dk = 16777216,
      zk = 20;
    const Pk = 8,
      hk = 8,
      qk = 16777216,
      Ck = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Zk = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      pk = 16,
      Kk = {
        Lost: 0,
        Gone: 1
      },
      xk = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function jk(kk) {
      return kk === xk.WorldgenSeed || kk === xk.Generate
    }
    const lk = 4,
      nk = 99,
      Ik = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Qk = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      kF = 12,
      FF = 16,
      BF = 4,
      RF = 12,
      tF = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      aF = 4,
      XF = 8,
      bF = 8,
      wF = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      dF = {
        Crit: 1,
        HitSelf: 2
      },
      sF = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      VF = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      JF = 12,
      AF = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      eF = 67108864;

    function yF(kk) {
      for (const [Fk, Bk] of Object.entries(Rk.g))
        if (Bk === kk) return Fk;
      return `Unknown${kk}`
    }

    function fF(kk) {
      return {
        status: kk[Rk.z.Status],
        lastError: kk[Rk.z.LastError],
        lastErrorDetail: kk[Rk.z.LastErrorDetail],
        errorCount: kk[Rk.z.ErrorCount],
        frameIndex: kk[Rk.z.FrameIndex],
        tickIndex: kk[Rk.z.TickIndex],
        renderPending: kk[Rk.z.RenderPending],
        firstView: kk[Rk.z.FirstView],
        chunksCancelled: kk[Rk.z.ChunksCancelled]
      }
    }
  },
  4517: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      g: () => ak,
      i: () => tk
    });
    var Rk = Bk(4524);

    function tk(kk) {
      return "none" !== kk
    }

    function ak(kk, Fk) {
      if (!kk) return "none";
      switch (Fk) {
        case Rk.S.Drawn:
          return "drawn";
        case Rk.S.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Xk(kk) {
      return "drawn" === kk
    }
  },
  4533: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => wk,
      h: () => ak,
      l: () => bk
    });
    var Rk = Bk(2303),
      tk = Bk(4541);

    function ak(kk) {
      let {
        action: Fk,
        flags: Bk
      } = kk;
      return "mid-fire" === Fk && 0 !== (Bk & Rk.d.AltLeftClick)
    }
    const Xk = new Set;

    function bk(kk) {
      return Xk.add(kk), () => {
        Xk.delete(kk)
      }
    }

    function wk(kk) {
      const Fk = tk.c[255 & kk];
      if (void 0 === Fk) return;
      const Bk = kk >>> 8 & 255,
        ak = {
          action: Fk,
          down: 0 !== (Bk & Rk.d.Down),
          flags: Bk,
          press: kk >>> 16
        };
      for (const Rk of Xk) Rk(ak)
    }
  },
  4541: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      f: () => ak,
      j: () => Xk,
      m: () => Rk,
      o: () => bk
    });
    const Rk = {
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
      tk = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ak = {
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
      Xk = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      bk = [16]
  },
  4546: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => bk,
      g: () => Xk,
      i: () => dk
    });
    var Rk = Bk(2303),
      tk = Bk(2305);
    const ak = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Xk(kk) {
      return kk instanceof HTMLElement && (!!(kk.isContentEditable || kk instanceof HTMLTextAreaElement || kk instanceof HTMLSelectElement) || kk instanceof HTMLInputElement && !ak.has(kk.type))
    }

    function bk(kk) {
      let Fk = null;
      const Bk = Bk => {
          const tk = Xk(Bk);
          tk !== Fk && (Fk = tk, kk(Rk.j.UiCapture, Rk.A.Keyboard, 0, 0, tk ? Rk.A.Keyboard : 0))
        },
        tk = kk => {
          Bk(kk.target)
        },
        ak = kk => {
          Bk(kk.relatedTarget)
        },
        bk = () => {
          Bk(document.activeElement)
        },
        wk = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", tk, wk), document.addEventListener("focusout", ak, wk), document.addEventListener("keydown", bk, wk), Bk(document.activeElement), () => {
        document.removeEventListener("focusin", tk, wk), document.removeEventListener("focusout", ak, wk), document.removeEventListener("keydown", bk, wk)
      }
    }
    const wk = new Map;

    function dk(kk, Fk) {
      var Bk;
      let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      wk.set(Rk, (null !== (Bk = wk.get(Rk)) && void 0 !== Bk ? Bk : 0) & ~kk | Fk & kk);
      let ak = 0;
      for (const tk of wk.values()) ak |= tk;
      return (0, tk.x)(kk, ak & kk)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);