export const id = 84;
export const ids = [84];
export const modules = {
  4525: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => mv,
      e: () => iv
    });
    var hv = Pv(1291),
      Sv = Pv(26);
    var ev = Pv(312);
    var gv = Pv(626);
    var pv = Pv(2304),
      dv = Pv(4529),
      Nv = Pv(4550),
      lv = Pv(4561);
    class Tv {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        this.id = vv, this.type = zv, this.parameters = Pv, this.tearDownNotification = hv, this.onDonePromise = Sv, this.resolveRequest = ev
      }
    }
    const Wv = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class wv {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        this.id = vv, this.type = zv, this.parameters = Pv, this.resolveRequest = hv, this.onDonePromise = Sv, this.tearDownNotification = ev, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const gv = iv[zv];
        if (!gv) throw console.error(`No QTE implementation registered for type: ${zv}`), new Error(`No QTE implementation registered for type: ${zv}`);
        this.implementation = new gv(Pv, (vv => {
          this.isCompleted = !0, this.resolveRequest(vv)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Sv.j.subscribe("QTEMouseState", (vv => {
          let {
            isDown: zv
          } = vv;
          this.isCompleted || this.implementation.handleMouseInput(zv)
        })), this.stopInputActions = (0, Nv.h)((vv => {
          this.isCompleted || !Wv.has(vv.action) && !(0, Nv.g)(vv) || this.implementation.handleMouseInput(vv.down)
        })), this.tickSub = Sv.j.subscribe("noaTick", (vv => {
          if (this.isCompleted) return;
          const zv = vv / 1e3;
          this.implementation.handleTick(zv)
        })), this.stopShellTicks = (0, dv.q)((() => {
          this.isCompleted || this.implementation.handleTick(pv.q / 1e3)
        }))
      }
      cleanup() {
        var vv, zv;
        this.mouseSub && (Sv.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (vv = this.stopInputActions) || void 0 === vv || vv.call(this), this.stopInputActions = null, null === (zv = this.stopShellTicks) || void 0 === zv || zv.call(this), this.stopShellTicks = null, this.tickSub && (Sv.j.unsubscribe(this.tickSub), this.tickSub = null)
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
    const av = new hv.c,
      sv = new Map;
    let Cv = null;
    const iv = {
      progressBar: class {
        constructor(vv, zv, Pv) {
          var hv, Sv, ev, gv;
          this.resolveRequest = zv, this.tearDownNotification = Pv, this.progress = 0, this.Lz = void 0, this.Mz = void 0, this.yz = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const pv = vv;
          this.Lz = null !== (hv = pv.Lz) && void 0 !== hv ? hv : .075, this.Mz = null !== (Sv = pv.Mz) && void 0 !== Sv ? Sv : 1, this.progress = null !== (ev = pv.Az) && void 0 !== ev ? ev : 30, this.yz = null !== (gv = pv.yz) && void 0 !== gv && gv, this.parameters = pv
        }
        handleMouseInput(vv) {
          vv && !this.isCompleted && (this.clickCount++, this.progress += this.Mz, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.Lz, this.yz && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(vv) {
          this.isCompleted = !0, this.resolveRequest(vv)
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
        constructor(vv, zv, Pv) {
          var hv;
          this.resolveRequest = zv, this.tearDownNotification = Pv, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = vv, this.timeWindowMs = null !== (hv = this.parameters.Ez) && void 0 !== hv ? hv : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(vv) {
          if (!vv || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(vv) {
          this.isCompleted = !0, this.resolveRequest(vv)
        }
        getState() {
          const vv = Date.now() - this.startTime,
            zv = Math.max(0, this.timeWindowMs - vv);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: zv,
              Ez: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(vv, zv, Pv) {
          var hv;
          this.resolveRequest = zv, this.tearDownNotification = Pv, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Sv = vv;
          this.parameters = {
            ...Sv,
            Xz: ev.d.clamp(Sv.Xz, .05, 1)
          }, this.progress = null !== (hv = Sv.Az) && void 0 !== hv ? hv : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(vv) {
          this.isMouseDown = vv
        }
        handleTick(vv) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(vv))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const vv = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += vv * this.parameters.vP * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const vv = ev.d.clamp(1 - .7 * this.parameters.zP, 0, 1.4);
          return Math.floor(60 * vv + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.PP : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = ev.d.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const vv = this.parameters.Xz / 2,
            zv = vv,
            Pv = 1 - vv;
          this.catchZonePosition <= zv ? (this.catchZonePosition = zv, this.catchZoneVelocity = 0) : this.catchZonePosition >= Pv && (this.catchZonePosition = Pv, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const vv = this.parameters.Xz / 2;
          return this.moverPosition >= this.catchZonePosition - vv && this.moverPosition <= this.catchZonePosition + vv
        }
        updateProgress(vv) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.hP * vv : this.progress -= this.parameters.SP * vv, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.yz && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(vv) {
          this.isCompleted = !0, this.resolveRequest(vv)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Xz: this.parameters.Xz,
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
        constructor(vv, zv, Pv) {
          var hv, Sv, gv, pv, dv;
          this.resolveRequest = zv, this.tearDownNotification = Pv, this.startTime = void 0, this.speed = void 0, this.gP = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const Nv = vv;
          this.parameters = {
            ...Nv,
            speed: null !== (hv = Nv.speed) && void 0 !== hv ? hv : .5,
            gP: ev.d.clamp(Nv.gP, .05, 1),
            label: null !== (Sv = Nv.label) && void 0 !== Sv ? Sv : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (gv = Nv.icon) && void 0 !== gv ? gv : null,
            scale: null !== (pv = Nv.scale) && void 0 !== pv ? pv : 1,
            rotation: null !== (dv = Nv.rotation) && void 0 !== dv ? dv : 0
          }, this.speed = this.parameters.speed, this.gP = this.parameters.gP, this.startTime = Date.now()
        }
        handleMouseInput(vv) {
          if (vv) {
            this.updateMarkerPosition();
            const vv = Math.abs(this.markerPosition - .5) <= this.gP / 2;
            this.complete(vv)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const vv = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = vv <= .5 ? 2 * vv : 2 - 2 * vv
        }
        complete(vv) {
          this.isCompleted = !0, this.resolveRequest(vv)
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
        constructor(vv, zv, Pv) {
          this.resolveRequest = zv, this.tearDownNotification = Pv, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = vv, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(vv) {
          if (!vv || this.isCompleted) return;
          const zv = this.getOuterCircleProgress();
          if (zv <= this.parameters.lP && zv >= -this.parameters.lP) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.dP) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, gv.N)(this.parameters.TP) && this.misses > this.parameters.TP ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.lP && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.NP
        }
        complete(vv) {
          this.isCompleted = !0, this.resolveRequest(vv)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              dP: this.parameters.dP,
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

    function cv() {
      (0, lv.g)(pv.u.Qte, Cv ? pv.u.Qte : 0), Cv ? Sv.j.zC("qteStateUpdated", Cv.getState()) : Sv.j.zC("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class Gv {
      constructor(vv, zv) {
        this.resultPromise = vv, this.tearDownQTE = zv
      }
      static create(vv, zv, Pv) {
        const hv = Promise.race([vv, zv]);
        return new Gv(hv, Pv)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class mv {
      static queueQTE(vv, zv, Pv) {
        let hv, Sv;
        const ev = new Promise((vv => {
            hv = vv
          })),
          gv = new Promise((vv => {
            Sv = () => {
              vv("qteTornDown")
            }
          })),
          pv = Promise.race([ev, gv]).then((() => {})),
          dv = new Tv(vv, zv, Pv, Sv, pv, hv);
        return sv.set(vv, dv), av.enqueue(dv), Cv || this.processNextQTE(), Gv.create(ev, gv, Sv)
      }
      static async processNextQTE() {
        if (Cv || av.kw()) return void(av.kw() && Cv && (Cv = null, cv()));
        const vv = await av.dequeue();
        if (!sv.has(vv.id)) return void await this.processNextQTE();
        sv.delete(vv.id);
        const zv = new wv(vv.id, vv.type, vv.parameters, vv.resolveRequest, vv.onDonePromise, vv.tearDownNotification);
        Cv = zv, cv();
        try {
          await zv.waitUntilDone()
        } catch (Pv) {
          console.error("Error while waiting for QTE to resolve:", Pv.stack)
        }
        Cv === zv && (Cv.cleanup(), Cv = null, cv()), await this.processNextQTE()
      }
      static cancelQTE(vv) {
        if (Cv && Cv.id === vv) return Cv.tearDown(), Cv = null, cv(), void this.processNextQTE();
        const zv = sv.get(vv);
        zv && (sv.delete(vv), zv.tearDownNotification())
      }
      static getCurrentState() {
        return Cv ? Cv.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        Cv && (Cv.tearDown(), Cv = null), sv.forEach(((vv, zv) => {
          this.cancelQTE(zv)
        })), av.emptyQueue(), sv.clear(), cv()
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
  4550: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv,
      g: () => ev,
      h: () => pv
    });
    var hv = Pv(2304),
      Sv = Pv(4555);

    function ev(vv) {
      let {
        action: zv,
        flags: Pv
      } = vv;
      return "mid-fire" === zv && 0 !== (Pv & hv.c.AltLeftClick)
    }
    const gv = new Set;

    function pv(vv) {
      return gv.add(vv), () => {
        gv.delete(vv)
      }
    }

    function dv(vv) {
      const zv = Sv.b[255 & vv];
      if (void 0 === zv) return;
      const Pv = vv >>> 8 & 255,
        ev = {
          action: zv,
          down: 0 !== (Pv & hv.c.Down),
          flags: Pv,
          press: vv >>> 16
        };
      for (const hv of gv) hv(ev)
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
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);