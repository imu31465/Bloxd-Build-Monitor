export const id = 83;
export const ids = [83];
export const modules = {
  4462: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => zb,
      f: () => yb
    });
    var Ab = Ub(1235),
      Mb = Ub(22);
    var Tb = Ub(325);
    var Eb = Ub(591);
    var Yb = Ub(2254),
      Bb = Ub(4469),
      eb = Ub(4487),
      vb = Ub(4501);
    class Lb {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        this.id = bb, this.type = ab, this.parameters = Ub, this.tearDownNotification = Ab, this.onDonePromise = Mb, this.resolveRequest = Tb
      }
    }
    const Pb = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class Xb {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        this.id = bb, this.type = ab, this.parameters = Ub, this.resolveRequest = Ab, this.onDonePromise = Mb, this.tearDownNotification = Tb, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const Eb = yb[ab];
        if (!Eb) throw console.error(`No QTE implementation registered for type: ${ab}`), new Error(`No QTE implementation registered for type: ${ab}`);
        this.implementation = new Eb(Ub, (bb => {
          this.isCompleted = !0, this.resolveRequest(bb)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Mb.m.subscribe("QTEMouseState", (bb => {
          let {
            isDown: ab
          } = bb;
          this.isCompleted || this.implementation.handleMouseInput(ab)
        })), this.stopInputActions = (0, eb.l)((bb => {
          this.isCompleted || !Pb.has(bb.action) && !(0, eb.h)(bb) || this.implementation.handleMouseInput(bb.down)
        })), this.tickSub = Mb.m.subscribe("noaTick", (bb => {
          if (this.isCompleted) return;
          const ab = bb / 1e3;
          this.implementation.handleTick(ab)
        })), this.stopShellTicks = (0, Bb.x)((() => {
          this.isCompleted || this.implementation.handleTick(Yb.o / 1e3)
        }))
      }
      cleanup() {
        var bb, ab;
        this.mouseSub && (Mb.m.unsubscribe(this.mouseSub), this.mouseSub = null), null === (bb = this.stopInputActions) || void 0 === bb || bb.call(this), this.stopInputActions = null, null === (ab = this.stopShellTicks) || void 0 === ab || ab.call(this), this.stopShellTicks = null, this.tickSub && (Mb.m.unsubscribe(this.tickSub), this.tickSub = null)
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
    const jb = new Ab.d,
      Rb = new Map;
    let kb = null;
    const yb = {
      progressBar: class {
        constructor(bb, ab, Ub) {
          var Ab, Mb, Tb, Eb;
          this.resolveRequest = ab, this.tearDownNotification = Ub, this.progress = 0, this.ub = void 0, this.Kb = void 0, this.ob = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const Yb = bb;
          this.ub = null !== (Ab = Yb.ub) && void 0 !== Ab ? Ab : .075, this.Kb = null !== (Mb = Yb.Kb) && void 0 !== Mb ? Mb : 1, this.progress = null !== (Tb = Yb.qb) && void 0 !== Tb ? Tb : 30, this.ob = null !== (Eb = Yb.ob) && void 0 !== Eb && Eb, this.parameters = Yb
        }
        handleMouseInput(bb) {
          bb && !this.isCompleted && (this.clickCount++, this.progress += this.Kb, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.ub, this.ob && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(bb) {
          this.isCompleted = !0, this.resolveRequest(bb)
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
        constructor(bb, ab, Ub) {
          var Ab;
          this.resolveRequest = ab, this.tearDownNotification = Ub, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = bb, this.timeWindowMs = null !== (Ab = this.parameters.Vb) && void 0 !== Ab ? Ab : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(bb) {
          if (!bb || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(bb) {
          this.isCompleted = !0, this.resolveRequest(bb)
        }
        getState() {
          const bb = Date.now() - this.startTime,
            ab = Math.max(0, this.timeWindowMs - bb);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: ab,
              Vb: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(bb, ab, Ub) {
          var Ab;
          this.resolveRequest = ab, this.tearDownNotification = Ub, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Mb = bb;
          this.parameters = {
            ...Mb,
            Sb: Tb.d.clamp(Mb.Sb, .05, 1)
          }, this.progress = null !== (Ab = Mb.qb) && void 0 !== Ab ? Ab : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(bb) {
          this.isMouseDown = bb
        }
        handleTick(bb) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(bb))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const bb = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += bb * this.parameters.ba * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const bb = Tb.d.clamp(1 - .7 * this.parameters.aa, 0, 1.4);
          return Math.floor(60 * bb + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.Ua : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Tb.d.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const bb = this.parameters.Sb / 2,
            ab = bb,
            Ub = 1 - bb;
          this.catchZonePosition <= ab ? (this.catchZonePosition = ab, this.catchZoneVelocity = 0) : this.catchZonePosition >= Ub && (this.catchZonePosition = Ub, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const bb = this.parameters.Sb / 2;
          return this.moverPosition >= this.catchZonePosition - bb && this.moverPosition <= this.catchZonePosition + bb
        }
        updateProgress(bb) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.Aa * bb : this.progress -= this.parameters.Ma * bb, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.ob && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(bb) {
          this.isCompleted = !0, this.resolveRequest(bb)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Sb: this.parameters.Sb,
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
        constructor(bb, ab, Ub) {
          var Ab, Mb, Eb, Yb, Bb;
          this.resolveRequest = ab, this.tearDownNotification = Ub, this.startTime = void 0, this.speed = void 0, this.Ea = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const eb = bb;
          this.parameters = {
            ...eb,
            speed: null !== (Ab = eb.speed) && void 0 !== Ab ? Ab : .5,
            Ea: Tb.d.clamp(eb.Ea, .05, 1),
            label: null !== (Mb = eb.label) && void 0 !== Mb ? Mb : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (Eb = eb.icon) && void 0 !== Eb ? Eb : null,
            scale: null !== (Yb = eb.scale) && void 0 !== Yb ? Yb : 1,
            rotation: null !== (Bb = eb.rotation) && void 0 !== Bb ? Bb : 0
          }, this.speed = this.parameters.speed, this.Ea = this.parameters.Ea, this.startTime = Date.now()
        }
        handleMouseInput(bb) {
          if (bb) {
            this.updateMarkerPosition();
            const bb = Math.abs(this.markerPosition - .5) <= this.Ea / 2;
            this.complete(bb)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const bb = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = bb <= .5 ? 2 * bb : 2 - 2 * bb
        }
        complete(bb) {
          this.isCompleted = !0, this.resolveRequest(bb)
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
        constructor(bb, ab, Ub) {
          this.resolveRequest = ab, this.tearDownNotification = Ub, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = bb, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(bb) {
          if (!bb || this.isCompleted) return;
          const ab = this.getOuterCircleProgress();
          if (ab <= this.parameters.va && ab >= -this.parameters.va) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Ba) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, Eb.I)(this.parameters.La) && this.misses > this.parameters.La ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.va && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.ea
        }
        complete(bb) {
          this.isCompleted = !0, this.resolveRequest(bb)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              Ba: this.parameters.Ba,
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

    function Zb() {
      (0, vb.l)(Yb.v.Qte, kb ? Yb.v.Qte : 0), kb ? Mb.m.IR("qteStateUpdated", kb.getState()) : Mb.m.IR("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class Db {
      constructor(bb, ab) {
        this.resultPromise = bb, this.tearDownQTE = ab
      }
      static create(bb, ab, Ub) {
        const Ab = Promise.race([bb, ab]);
        return new Db(Ab, Ub)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class zb {
      static queueQTE(bb, ab, Ub) {
        let Ab, Mb;
        const Tb = new Promise((bb => {
            Ab = bb
          })),
          Eb = new Promise((bb => {
            Mb = () => {
              bb("qteTornDown")
            }
          })),
          Yb = Promise.race([Tb, Eb]).then((() => {})),
          Bb = new Lb(bb, ab, Ub, Mb, Yb, Ab);
        return Rb.set(bb, Bb), jb.enqueue(Bb), kb || this.processNextQTE(), Db.create(Tb, Eb, Mb)
      }
      static async processNextQTE() {
        if (kb || jb.lX()) return void(jb.lX() && kb && (kb = null, Zb()));
        const bb = await jb.dequeue();
        if (!Rb.has(bb.id)) return void await this.processNextQTE();
        Rb.delete(bb.id);
        const ab = new Xb(bb.id, bb.type, bb.parameters, bb.resolveRequest, bb.onDonePromise, bb.tearDownNotification);
        kb = ab, Zb();
        try {
          await ab.waitUntilDone()
        } catch (Ub) {
          console.error("Error while waiting for QTE to resolve:", Ub.stack)
        }
        kb === ab && (kb.cleanup(), kb = null, Zb()), await this.processNextQTE()
      }
      static cancelQTE(bb) {
        if (kb && kb.id === bb) return kb.tearDown(), kb = null, Zb(), void this.processNextQTE();
        const ab = Rb.get(bb);
        ab && (Rb.delete(bb), ab.tearDownNotification())
      }
      static getCurrentState() {
        return kb ? kb.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        kb && (kb.tearDown(), kb = null), Rb.forEach(((bb, ab) => {
          this.cancelQTE(ab)
        })), jb.emptyQueue(), Rb.clear(), Zb()
      }
    }
  },
  4485: (bb, ab, Ub) => {
    Ub.d(ab, {
      $: () => mb,
      B: () => Yb,
      Cb: () => db,
      Db: () => rb,
      E: () => Ab,
      F: () => Tb,
      Fb: () => hb,
      Gb: () => Qb,
      J: () => jb,
      Jb: () => qb,
      L: () => gb,
      Lb: () => Db,
      M: () => eb,
      Mb: () => zb,
      N: () => Rb,
      O: () => Bb,
      P: () => Pb,
      Pb: () => ob,
      Rb: () => Mb,
      S: () => Lb,
      Tb: () => sb,
      V: () => fb,
      Z: () => pb,
      _: () => Nb,
      db: () => Wb,
      e: () => wb,
      gb: () => Kb,
      h: () => tb,
      jb: () => ub,
      l: () => vb,
      lb: () => Gb,
      m: () => Zb,
      nb: () => Hb,
      p: () => lb,
      qb: () => Fb,
      r: () => yb,
      tb: () => Ib,
      u: () => kb,
      ub: () => Xb,
      x: () => Eb,
      xb: () => ib,
      yb: () => xb
    });
    const Ab = 32,
      Mb = 33.333333333333336,
      Tb = {
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
      Eb = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Yb = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Bb = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      eb = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      vb = {
        Look: 0,
        Remesh: 1
      },
      Lb = 8,
      Pb = 1,
      Xb = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      jb = {
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
      Rb = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      kb = {
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
      yb = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Zb = 4,
      Db = 4,
      zb = 65535,
      xb = {
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
      ib = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      fb = 88,
      mb = 0,
      pb = 24,
      Nb = 48,
      Wb = 80,
      Hb = {
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
      Ib = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      db = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      Fb = {
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
      hb = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Gb = 65535,
      Qb = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      qb = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      ub = 2,
      rb = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Kb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      ob = {
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
      lb = {
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
      tb = {
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
      wb = 8,
      sb = {
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
      gb = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4469: (bb, ab, Ub) => {
    Ub.d(ab, {
      B: () => Wb,
      E: () => Hb,
      H: () => Zb,
      J: () => Eb,
      K: () => Yb,
      O: () => pb,
      e: () => mb,
      f: () => zb,
      h: () => db,
      k: () => Ib,
      n: () => yb,
      o: () => ib,
      r: () => Db,
      v: () => xb,
      x: () => Nb
    });
    var Ab = Ub(4477);
    const Mb = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Tb = Mb;

    function Eb(bb) {
      Tb = null !== bb && void 0 !== bb ? bb : Mb
    }

    function Yb() {
      return Tb
    }
    const Bb = new Set,
      eb = new Set;
    let vb = -1;
    const Lb = new Set,
      Pb = new Set;
    let Xb = 0,
      jb = 0;
    const Rb = new Set,
      kb = new Set;

    function yb(bb) {
      return Bb.add(bb), () => {
        Bb.delete(bb)
      }
    }

    function Zb(bb, ab) {
      for (const Ab of Bb) try {
        Ab(bb)
      } catch (Ub) {
        ab(Ub)
      }
    }

    function Db(bb) {
      return eb.add(bb), () => {
        eb.delete(bb)
      }
    }

    function zb(bb, ab) {
      const Ub = vb < 0 ? 0 : bb - vb;
      vb = bb;
      for (const Mb of eb) try {
        Mb(Ub)
      } catch (Ab) {
        ab(Ab)
      }
    }

    function xb(bb) {
      return Lb.add(bb), () => {
        Lb.delete(bb)
      }
    }

    function ib(bb) {
      return Pb.add(bb), () => {
        Pb.delete(bb)
      }
    }
    let fb = 0;

    function mb(bb) {
      fb += bb
    }

    function pb() {
      const bb = fb;
      return fb = 0, bb
    }

    function Nb(bb) {
      return Rb.add(bb), () => {
        Rb.delete(bb)
      }
    }

    function Wb(bb) {
      return kb.add(bb), () => {
        kb.delete(bb)
      }
    }

    function Hb() {
      Xb = 0, jb = 0, vb = -1
    }

    function Ib(bb, ab) {
      if ("paced" === bb) return jb += ab, null;
      if ("drawn" !== bb && "skipped" !== bb) return null;
      const Ub = ab + jb;
      return jb = 0, Ub
    }

    function db(bb, ab, Ub, Mb) {
      const Tb = (0, Ab.g)(ab),
        Eb = bb > 0 ? performance.now() : 0;
      for (let Ab = 0; Ab < bb; Ab++)
        for (const bb of Rb) try {
          bb()
        } catch (Yb) {
          Mb(Yb)
        }
      if (bb > 0 && mb(performance.now() - Eb), null !== Ub) {
        for (const bb of Lb) try {
          bb(Ub)
        } catch (Yb) {
          Mb(Yb)
        }
        Xb += Ub
      }
      if ("drawn" === ab) {
        const bb = Xb;
        Xb = 0;
        for (const ab of Pb) try {
          ab(bb)
        } catch (Yb) {
          Mb(Yb)
        }
      }
      for (const Ab of kb) try {
        Ab(bb, Tb)
      } catch (Yb) {
        Mb(Yb)
      }
    }
  },
  4479: (bb, ab, Ub) => {
    Ub.d(ab, {
      $c: () => Ab.Jb,
      Ab: () => Mb.c,
      B: () => Fb,
      C: () => Pa,
      Cd: () => tb,
      Dc: () => Aa,
      Dd: () => Cb,
      Eb: () => mb,
      Ed: () => gb,
      Fc: () => Ab.nb,
      G: () => Jb,
      Gd: () => Ea,
      H: () => Ab.h,
      Hb: () => ub,
      I: () => eb,
      Ic: () => Ab.qb,
      Jd: () => ja,
      Kb: () => Ib,
      Lb: () => Wb,
      M: () => Ab.l,
      Mb: () => Ab.N,
      Mc: () => Ab.tb,
      Md: () => zb,
      Ob: () => db,
      P: () => Ab.m,
      Pc: () => nb,
      Qb: () => xb,
      Qd: () => Vb,
      R: () => Ob,
      Rc: () => Ab.xb,
      Rd: () => Qb,
      Sc: () => Ab.yb,
      Tb: () => Ta,
      Td: () => Gb,
      V: () => Ab.u,
      Vc: () => Ab.Cb,
      Vd: () => hb,
      W: () => Ab.x,
      Wb: () => Db,
      Wc: () => Ab.Fb,
      X: () => Ab.B,
      Yd: () => Bb,
      _: () => Lb,
      _b: () => va,
      _c: () => Ab.Gb,
      ab: () => Zb,
      ac: () => Mb.h,
      ae: () => qb,
      bd: () => Nb,
      be: () => Ra,
      c: () => ba,
      cb: () => Ab.E,
      cd: () => Ab.Lb,
      ce: () => Xb,
      dc: () => yb,
      e: () => Rb,
      ed: () => Ab.Mb,
      fc: () => Ua,
      gb: () => Ab.F,
      gd: () => Ab.Rb,
      h: () => jb,
      ib: () => ob,
      ic: () => Ab.V,
      id: () => Tb,
      j: () => Ba,
      kc: () => Ab.Z,
      kd: () => kb,
      lb: () => Ma,
      m: () => pb,
      nd: () => Ya,
      o: () => fb,
      ob: () => vb,
      oc: () => Ab._,
      od: () => Kb,
      p: () => Ab.e,
      qc: () => Ab.$,
      rb: () => Ab.J,
      sb: () => wb,
      sc: () => Ab.db,
      sd: () => lb,
      t: () => La,
      td: () => rb,
      vb: () => cb,
      vc: () => Ab.lb,
      wb: () => Sb,
      x: () => Hb,
      xb: () => aa,
      xc: () => Xa,
      xd: () => sb,
      z: () => Eb,
      zc: () => ea
    });
    var Ab = Ub(4485),
      Mb = Ub(2254);
    const Tb = Math.round(1e3 / Ab.Rb),
      Eb = 4,
      Yb = 2;

    function Bb() {
      return crypto.getRandomValues(new Uint32Array(Yb))
    }
    const eb = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      vb = 16,
      Lb = {
        Draws: 1,
        NetAll: 2
      },
      Pb = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Xb(bb) {
      return (bb.nametagsHidden ? ib.NametagsHidden : 0) | (bb.crouchToggle ? ib.CrouchToggle : 0) | (bb.bhopDisabled ? ib.BhopDisabled : 0) | (bb.disableBobbing ? ib.DisableBobbing : 0) | (bb.ezTowering ? ib.EzTowering : 0) | (bb.ezBridging ? ib.EzBridging : 0) | (bb.showChunkBorders ? ib.ShowChunkBorders : 0)
    }
    const jb = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Rb = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      kb = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      yb = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Zb = 5,
      Db = 4294967295;

    function zb(bb) {
      return (bb.showFog ? Pb.ShowFog : 0) | (bb.lighting ? Pb.Lighting : 0) | (bb.chunkFade ? Pb.ChunkFade : 0)
    }
    const xb = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      ib = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      fb = {
        Release: 1,
        KeepTouches: 2
      },
      mb = {
        Point: 1,
        Stamped: 2
      },
      pb = {
        Add: 1,
        Clear: 2
      },
      Nb = 1,
      Wb = 8,
      Hb = 16777215,
      Ib = 4,
      db = {
        Resume: 1
      },
      Fb = {
        Held: 1
      };

    function hb(bb, ab) {
      return (bb | ab << 8) >>> 0
    }

    function Gb(bb) {
      return 255 & bb
    }

    function Qb(bb) {
      return bb >>> 8
    }

    function qb(bb) {
      return bb + 3 & -4
    }
    const ub = 16777216,
      rb = 20;
    const Kb = 8,
      ob = 8,
      lb = 16777216,
      tb = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      wb = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      sb = 16,
      gb = {
        Lost: 0,
        Gone: 1
      },
      Cb = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Vb(bb) {
      return bb === Cb.WorldgenSeed || bb === Cb.Generate
    }
    const Ob = 4,
      cb = 99,
      Jb = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      nb = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Sb = 12,
      ba = 16,
      aa = 4,
      Ua = 12,
      Aa = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Ma = 4,
      Ta = 8,
      Ea = 8,
      Ya = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Ba = {
        Crit: 1,
        HitSelf: 2
      },
      ea = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      va = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      La = 12,
      Pa = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Xa = 67108864;

    function ja(bb) {
      for (const [ab, Ub] of Object.entries(Ab.h))
        if (Ub === bb) return ab;
      return `Unknown${bb}`
    }

    function Ra(bb) {
      return {
        status: bb[Ab.F.Status],
        lastError: bb[Ab.F.LastError],
        lastErrorDetail: bb[Ab.F.LastErrorDetail],
        errorCount: bb[Ab.F.ErrorCount],
        frameIndex: bb[Ab.F.FrameIndex],
        tickIndex: bb[Ab.F.TickIndex],
        renderPending: bb[Ab.F.RenderPending],
        firstView: bb[Ab.F.FirstView],
        chunksCancelled: bb[Ab.F.ChunksCancelled]
      }
    }
  },
  4477: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      f: () => Tb,
      g: () => Mb
    });
    var Ab = Ub(4479);

    function Mb(bb) {
      return "none" !== bb
    }

    function Tb(bb, ab) {
      if (!bb) return "none";
      switch (ab) {
        case Ab.X.Drawn:
          return "drawn";
        case Ab.X.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Eb(bb) {
      return "drawn" === bb
    }
  },
  4487: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Bb,
      h: () => Tb,
      l: () => Yb
    });
    var Ab = Ub(2254),
      Mb = Ub(4494);

    function Tb(bb) {
      let {
        action: ab,
        flags: Ub
      } = bb;
      return "mid-fire" === ab && 0 !== (Ub & Ab.b.AltLeftClick)
    }
    const Eb = new Set;

    function Yb(bb) {
      return Eb.add(bb), () => {
        Eb.delete(bb)
      }
    }

    function Bb(bb) {
      const ab = Mb.c[255 & bb];
      if (void 0 === ab) return;
      const Ub = bb >>> 8 & 255,
        Tb = {
          action: ab,
          down: 0 !== (Ub & Ab.b.Down),
          flags: Ub,
          press: bb >>> 16
        };
      for (const Ab of Eb) Ab(Tb)
    }
  },
  4494: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      d: () => Tb,
      f: () => Eb,
      h: () => Ab,
      l: () => Yb
    });
    const Ab = {
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
      Mb = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Tb = {
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
      Eb = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Yb = [16]
  },
  4501: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb,
      h: () => Eb,
      l: () => eb
    });
    var Ab = Ub(2254),
      Mb = Ub(2260);
    const Tb = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Eb(bb) {
      return bb instanceof HTMLElement && (!!(bb.isContentEditable || bb instanceof HTMLTextAreaElement || bb instanceof HTMLSelectElement) || bb instanceof HTMLInputElement && !Tb.has(bb.type))
    }

    function Yb(bb) {
      let ab = null;
      const Ub = Ub => {
          const Mb = Eb(Ub);
          Mb !== ab && (ab = Mb, bb(Ab.g.UiCapture, Ab.v.Keyboard, 0, 0, Mb ? Ab.v.Keyboard : 0))
        },
        Mb = bb => {
          Ub(bb.target)
        },
        Tb = bb => {
          Ub(bb.relatedTarget)
        },
        Yb = () => {
          Ub(document.activeElement)
        },
        Bb = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Mb, Bb), document.addEventListener("focusout", Tb, Bb), document.addEventListener("keydown", Yb, Bb), Ub(document.activeElement), () => {
        document.removeEventListener("focusin", Mb, Bb), document.removeEventListener("focusout", Tb, Bb), document.removeEventListener("keydown", Yb, Bb)
      }
    }
    const Bb = new Map;

    function eb(bb, ab) {
      var Ub;
      let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Bb.set(Ab, (null !== (Ub = Bb.get(Ab)) && void 0 !== Ub ? Ub : 0) & ~bb | ab & bb);
      let Tb = 0;
      for (const Mb of Bb.values()) Tb |= Mb;
      return (0, Mb.u)(bb, Tb & bb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);