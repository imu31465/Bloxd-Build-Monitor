export const id = 83;
export const ids = [83];
export const modules = {
  4546: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => du,
      h: () => Wu
    });
    var Eu = yu(1261),
      Ku = yu(34);
    var Qu = yu(343);
    var mu = yu(610);
    var Ju = yu(2306),
      Nu = yu(4549),
      Xu = yu(4573),
      Vu = yu(4586);
    class ru {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        this.id = uu, this.type = Ru, this.parameters = yu, this.tearDownNotification = Eu, this.onDonePromise = Ku, this.resolveRequest = Qu
      }
    }
    const Bu = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class xu {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        this.id = uu, this.type = Ru, this.parameters = yu, this.resolveRequest = Eu, this.onDonePromise = Ku, this.tearDownNotification = Qu, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const mu = Wu[Ru];
        if (!mu) throw console.error(`No QTE implementation registered for type: ${Ru}`), new Error(`No QTE implementation registered for type: ${Ru}`);
        this.implementation = new mu(yu, (uu => {
          this.isCompleted = !0, this.resolveRequest(uu)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Ku.k.subscribe("QTEMouseState", (uu => {
          let {
            isDown: Ru
          } = uu;
          this.isCompleted || this.implementation.handleMouseInput(Ru)
        })), this.stopInputActions = (0, Xu.h)((uu => {
          this.isCompleted || !Bu.has(uu.action) && !(0, Xu.g)(uu) || this.implementation.handleMouseInput(uu.down)
        })), this.tickSub = Ku.k.subscribe("noaTick", (uu => {
          if (this.isCompleted) return;
          const Ru = uu / 1e3;
          this.implementation.handleTick(Ru)
        })), this.stopShellTicks = (0, Nu.y)((() => {
          this.isCompleted || this.implementation.handleTick(Ju.r / 1e3)
        }))
      }
      cleanup() {
        var uu, Ru;
        this.mouseSub && (Ku.k.unsubscribe(this.mouseSub), this.mouseSub = null), null === (uu = this.stopInputActions) || void 0 === uu || uu.call(this), this.stopInputActions = null, null === (Ru = this.stopShellTicks) || void 0 === Ru || Ru.call(this), this.stopShellTicks = null, this.tickSub && (Ku.k.unsubscribe(this.tickSub), this.tickSub = null)
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
    const Su = new Eu.c,
      pu = new Map;
    let Tu = null;
    const Wu = {
      progressBar: class {
        constructor(uu, Ru, yu) {
          var Eu, Ku, Qu, mu;
          this.resolveRequest = Ru, this.tearDownNotification = yu, this.progress = 0, this.tu = void 0, this.lu = void 0, this.gu = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const Ju = uu;
          this.tu = null !== (Eu = Ju.tu) && void 0 !== Eu ? Eu : .075, this.lu = null !== (Ku = Ju.lu) && void 0 !== Ku ? Ku : 1, this.progress = null !== (Qu = Ju.nu) && void 0 !== Qu ? Qu : 30, this.gu = null !== (mu = Ju.gu) && void 0 !== mu && mu, this.parameters = Ju
        }
        handleMouseInput(uu) {
          uu && !this.isCompleted && (this.clickCount++, this.progress += this.lu, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.tu, this.gu && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(uu) {
          this.isCompleted = !0, this.resolveRequest(uu)
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
        constructor(uu, Ru, yu) {
          var Eu;
          this.resolveRequest = Ru, this.tearDownNotification = yu, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = uu, this.timeWindowMs = null !== (Eu = this.parameters.wu) && void 0 !== Eu ? Eu : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(uu) {
          if (!uu || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(uu) {
          this.isCompleted = !0, this.resolveRequest(uu)
        }
        getState() {
          const uu = Date.now() - this.startTime,
            Ru = Math.max(0, this.timeWindowMs - uu);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: Ru,
              wu: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(uu, Ru, yu) {
          var Eu;
          this.resolveRequest = Ru, this.tearDownNotification = yu, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Ku = uu;
          this.parameters = {
            ...Ku,
            Yu: Qu.c.clamp(Ku.Yu, .05, 1)
          }, this.progress = null !== (Eu = Ku.nu) && void 0 !== Eu ? Eu : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(uu) {
          this.isMouseDown = uu
        }
        handleTick(uu) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(uu))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const uu = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += uu * this.parameters.ou * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const uu = Qu.c.clamp(1 - .7 * this.parameters.qu, 0, 1.4);
          return Math.floor(60 * uu + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.Ou : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Qu.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const uu = this.parameters.Yu / 2,
            Ru = uu,
            yu = 1 - uu;
          this.catchZonePosition <= Ru ? (this.catchZonePosition = Ru, this.catchZoneVelocity = 0) : this.catchZonePosition >= yu && (this.catchZonePosition = yu, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const uu = this.parameters.Yu / 2;
          return this.moverPosition >= this.catchZonePosition - uu && this.moverPosition <= this.catchZonePosition + uu
        }
        updateProgress(uu) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.vu * uu : this.progress -= this.parameters.au * uu, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.gu && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(uu) {
          this.isCompleted = !0, this.resolveRequest(uu)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Yu: this.parameters.Yu,
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
        constructor(uu, Ru, yu) {
          var Eu, Ku, mu, Ju, Nu;
          this.resolveRequest = Ru, this.tearDownNotification = yu, this.startTime = void 0, this.speed = void 0, this.uR = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const Xu = uu;
          this.parameters = {
            ...Xu,
            speed: null !== (Eu = Xu.speed) && void 0 !== Eu ? Eu : .5,
            uR: Qu.c.clamp(Xu.uR, .05, 1),
            label: null !== (Ku = Xu.label) && void 0 !== Ku ? Ku : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (mu = Xu.icon) && void 0 !== mu ? mu : null,
            scale: null !== (Ju = Xu.scale) && void 0 !== Ju ? Ju : 1,
            rotation: null !== (Nu = Xu.rotation) && void 0 !== Nu ? Nu : 0
          }, this.speed = this.parameters.speed, this.uR = this.parameters.uR, this.startTime = Date.now()
        }
        handleMouseInput(uu) {
          if (uu) {
            this.updateMarkerPosition();
            const uu = Math.abs(this.markerPosition - .5) <= this.uR / 2;
            this.complete(uu)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const uu = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = uu <= .5 ? 2 * uu : 2 - 2 * uu
        }
        complete(uu) {
          this.isCompleted = !0, this.resolveRequest(uu)
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
        constructor(uu, Ru, yu) {
          this.resolveRequest = Ru, this.tearDownNotification = yu, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = uu, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(uu) {
          if (!uu || this.isCompleted) return;
          const Ru = this.getOuterCircleProgress();
          if (Ru <= this.parameters.KR && Ru >= -this.parameters.KR) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.yR) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, mu.E)(this.parameters.QR) && this.misses > this.parameters.QR ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.KR && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.ER
        }
        complete(uu) {
          this.isCompleted = !0, this.resolveRequest(uu)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              yR: this.parameters.yR,
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

    function ju() {
      (0, Vu.h)(Ju.t.Qte, Tu ? Ju.t.Qte : 0), Tu ? Ku.k.Op("qteStateUpdated", Tu.getState()) : Ku.k.Op("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class Hu {
      constructor(uu, Ru) {
        this.resultPromise = uu, this.tearDownQTE = Ru
      }
      static create(uu, Ru, yu) {
        const Eu = Promise.race([uu, Ru]);
        return new Hu(Eu, yu)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class du {
      static queueQTE(uu, Ru, yu) {
        let Eu, Ku;
        const Qu = new Promise((uu => {
            Eu = uu
          })),
          mu = new Promise((uu => {
            Ku = () => {
              uu("qteTornDown")
            }
          })),
          Ju = Promise.race([Qu, mu]).then((() => {})),
          Nu = new ru(uu, Ru, yu, Ku, Ju, Eu);
        return pu.set(uu, Nu), Su.enqueue(Nu), Tu || this.processNextQTE(), Hu.create(Qu, mu, Ku)
      }
      static async processNextQTE() {
        if (Tu || Su.RS()) return void(Su.RS() && Tu && (Tu = null, ju()));
        const uu = await Su.dequeue();
        if (!pu.has(uu.id)) return void await this.processNextQTE();
        pu.delete(uu.id);
        const Ru = new xu(uu.id, uu.type, uu.parameters, uu.resolveRequest, uu.onDonePromise, uu.tearDownNotification);
        Tu = Ru, ju();
        try {
          await Ru.waitUntilDone()
        } catch (yu) {
          console.error("Error while waiting for QTE to resolve:", yu.stack)
        }
        Tu === Ru && (Tu.cleanup(), Tu = null, ju()), await this.processNextQTE()
      }
      static cancelQTE(uu) {
        if (Tu && Tu.id === uu) return Tu.tearDown(), Tu = null, ju(), void this.processNextQTE();
        const Ru = pu.get(uu);
        Ru && (pu.delete(uu), Ru.tearDownNotification())
      }
      static getCurrentState() {
        return Tu ? Tu.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        Tu && (Tu.tearDown(), Tu = null), pu.forEach(((uu, Ru) => {
          this.cancelQTE(Ru)
        })), Su.emptyQueue(), pu.clear(), ju()
      }
    }
  },
  4564: (uu, Ru, yu) => {
    yu.d(Ru, {
      $: () => Du,
      $b: () => Pu,
      Ab: () => xu,
      B: () => Eu,
      Db: () => Cu,
      E: () => Qu,
      G: () => Su,
      H: () => iu,
      Hb: () => bu,
      Ib: () => Uu,
      L: () => Xu,
      Lb: () => Lu,
      N: () => pu,
      Pb: () => su,
      Q: () => Nu,
      R: () => Bu,
      Rb: () => lu,
      S: () => ru,
      Sb: () => gu,
      Tb: () => Hu,
      Vb: () => du,
      W: () => ku,
      X: () => Au,
      Yb: () => Fu,
      Zb: () => Ku,
      c: () => hu,
      db: () => eu,
      g: () => Zu,
      hb: () => Mu,
      i: () => Vu,
      j: () => ju,
      lb: () => zu,
      m: () => wu,
      ob: () => cu,
      p: () => Wu,
      rb: () => tu,
      s: () => Tu,
      ub: () => Iu,
      w: () => mu,
      x: () => Ju,
      xb: () => nu,
      yb: () => Gu
    });
    const Eu = 32,
      Ku = 33.333333333333336,
      Qu = {
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
      mu = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      Ju = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      Nu = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Xu = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Vu = {
        Look: 0,
        Remesh: 1
      },
      ru = 8,
      Bu = 1,
      xu = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      Su = {
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
      pu = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      Tu = {
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
      Wu = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      ju = 4,
      Hu = 4,
      du = 65535,
      bu = {
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
      Cu = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      ku = 88,
      eu = 0,
      Au = 24,
      Du = 48,
      Mu = 80,
      Iu = {
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
      Gu = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Uu = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      nu = {
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
      su = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      tu = 65535,
      lu = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      gu = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      cu = 2,
      Lu = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      zu = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      Fu = {
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
      wu = {
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
      Zu = {
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
      hu = 8,
      Pu = {
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
      iu = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4549: (uu, Ru, yu) => {
    yu.d(Ru, {
      C: () => Mu,
      D: () => Iu,
      E: () => ju,
      G: () => mu,
      I: () => Ju,
      J: () => Au,
      e: () => eu,
      g: () => du,
      i: () => Uu,
      m: () => Gu,
      n: () => Wu,
      o: () => Cu,
      r: () => Hu,
      v: () => bu,
      y: () => Du
    });
    var Eu = yu(4558);
    const Ku = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Qu = Ku;

    function mu(uu) {
      Qu = null !== uu && void 0 !== uu ? uu : Ku
    }

    function Ju() {
      return Qu
    }
    const Nu = new Set,
      Xu = new Set;
    let Vu = -1;
    const ru = new Set,
      Bu = new Set;
    let xu = 0,
      Su = 0;
    const pu = new Set,
      Tu = new Set;

    function Wu(uu) {
      return Nu.add(uu), () => {
        Nu.delete(uu)
      }
    }

    function ju(uu, Ru) {
      for (const Eu of Nu) try {
        Eu(uu)
      } catch (yu) {
        Ru(yu)
      }
    }

    function Hu(uu) {
      return Xu.add(uu), () => {
        Xu.delete(uu)
      }
    }

    function du(uu, Ru) {
      const yu = Vu < 0 ? 0 : uu - Vu;
      Vu = uu;
      for (const Ku of Xu) try {
        Ku(yu)
      } catch (Eu) {
        Ru(Eu)
      }
    }

    function bu(uu) {
      return ru.add(uu), () => {
        ru.delete(uu)
      }
    }

    function Cu(uu) {
      return Bu.add(uu), () => {
        Bu.delete(uu)
      }
    }
    let ku = 0;

    function eu(uu) {
      ku += uu
    }

    function Au() {
      const uu = ku;
      return ku = 0, uu
    }

    function Du(uu) {
      return pu.add(uu), () => {
        pu.delete(uu)
      }
    }

    function Mu(uu) {
      return Tu.add(uu), () => {
        Tu.delete(uu)
      }
    }

    function Iu() {
      xu = 0, Su = 0, Vu = -1
    }

    function Gu(uu, Ru) {
      if ("paced" === uu) return Su += Ru, null;
      if ("drawn" !== uu && "skipped" !== uu) return null;
      const yu = Ru + Su;
      return Su = 0, yu
    }

    function Uu(uu, Ru, yu, Ku) {
      const Qu = (0, Eu.g)(Ru),
        mu = uu > 0 ? performance.now() : 0;
      for (let Eu = 0; Eu < uu; Eu++)
        for (const uu of pu) try {
          uu()
        } catch (Ju) {
          Ku(Ju)
        }
      if (uu > 0 && eu(performance.now() - mu), null !== yu) {
        for (const uu of ru) try {
          uu(yu)
        } catch (Ju) {
          Ku(Ju)
        }
        xu += yu
      }
      if ("drawn" === Ru) {
        const uu = xu;
        xu = 0;
        for (const Ru of Bu) try {
          Ru(uu)
        } catch (Ju) {
          Ku(Ju)
        }
      }
      for (const Eu of Tu) try {
        Eu(uu, Qu)
      } catch (Ju) {
        Ku(Ju)
      }
    }
  },
  4562: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => Iu,
      Bb: () => hu,
      Cb: () => Ou,
      Cc: () => Eu.rb,
      Db: () => fu,
      Dd: () => Pu,
      E: () => mu,
      F: () => nu,
      Fb: () => RR,
      Gc: () => xR,
      Ib: () => Ku.d,
      Ic: () => XR,
      Id: () => Zu,
      J: () => BR,
      Jd: () => Yu,
      K: () => vu,
      Kb: () => eu,
      Mb: () => cu,
      Mc: () => ER,
      Nc: () => Eu.ub,
      Nd: () => iu,
      O: () => Eu.g,
      Pb: () => Gu,
      Q: () => Xu,
      Qc: () => Eu.xb,
      R: () => Eu.i,
      Rd: () => mR,
      Sb: () => Mu,
      Sc: () => Eu.yb,
      Tb: () => Eu.N,
      U: () => Eu.j,
      Uc: () => au,
      Ud: () => SR,
      Vb: () => Uu,
      Vd: () => du,
      Wb: () => bu,
      Wc: () => Eu.Db,
      Wd: () => ou,
      Xb: () => QR,
      Xc: () => Eu.Hb,
      Y: () => qu,
      Yc: () => Eu.Ib,
      Yd: () => lu,
      Zc: () => Eu.Pb,
      Zd: () => tu,
      _b: () => Hu,
      _c: () => Eu.Rb,
      ab: () => Eu.s,
      ac: () => VR,
      bb: () => Eu.w,
      bc: () => Ku.h,
      bd: () => Eu.Sb,
      be: () => su,
      cc: () => Wu,
      d: () => uR,
      ee: () => Nu,
      fb: () => Eu.x,
      fc: () => yR,
      fd: () => Du,
      g: () => pu,
      he: () => gu,
      jb: () => ru,
      jc: () => Eu.W,
      jd: () => Eu.Tb,
      k: () => Su,
      ke: () => pR,
      m: () => NR,
      mb: () => ju,
      md: () => Eu.Vb,
      nb: () => Eu.B,
      nc: () => Eu.X,
      nd: () => Eu.Zb,
      od: () => Qu,
      oe: () => xu,
      p: () => Au,
      qb: () => Eu.E,
      rc: () => Eu.$,
      rd: () => Tu,
      sb: () => Fu,
      t: () => ku,
      ub: () => KR,
      uc: () => Eu.db,
      ud: () => JR,
      vb: () => Vu,
      w: () => Eu.c,
      xd: () => zu,
      yb: () => Eu.G,
      yc: () => Eu.hb,
      yd: () => wu,
      z: () => rR,
      zd: () => Lu
    });
    var Eu = yu(4564),
      Ku = yu(2306);
    const Qu = Math.round(1e3 / Eu.Zb),
      mu = 4,
      Ju = 2;

    function Nu() {
      return crypto.getRandomValues(new Uint32Array(Ju))
    }
    const Xu = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Vu = 16,
      ru = {
        Draws: 1,
        NetAll: 2
      },
      Bu = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function xu(uu) {
      return (uu.nametagsHidden ? Cu.NametagsHidden : 0) | (uu.crouchToggle ? Cu.CrouchToggle : 0) | (uu.bhopDisabled ? Cu.BhopDisabled : 0) | (uu.disableBobbing ? Cu.DisableBobbing : 0) | (uu.ezTowering ? Cu.EzTowering : 0) | (uu.ezBridging ? Cu.EzBridging : 0) | (uu.showChunkBorders ? Cu.ShowChunkBorders : 0)
    }
    const Su = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      pu = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Tu = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Wu = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      ju = 5,
      Hu = 4294967295;

    function du(uu) {
      return (uu.showFog ? Bu.ShowFog : 0) | (uu.lighting ? Bu.Lighting : 0) | (uu.chunkFade ? Bu.ChunkFade : 0)
    }
    const bu = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Cu = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      ku = {
        Release: 1,
        KeepTouches: 2
      },
      eu = {
        Point: 1,
        Stamped: 2
      },
      Au = {
        Add: 1,
        Clear: 2
      },
      Du = 1,
      Mu = 8,
      Iu = 16777215,
      Gu = 4,
      Uu = {
        Resume: 1
      },
      nu = {
        Held: 1
      };

    function su(uu, Ru) {
      return (uu | Ru << 8) >>> 0
    }

    function tu(uu) {
      return 255 & uu
    }

    function lu(uu) {
      return uu >>> 8
    }

    function gu(uu) {
      return uu + 3 & -4
    }
    const cu = 16777216,
      Lu = 20;
    const zu = 8,
      Fu = 8,
      wu = 16777216,
      Zu = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hu = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Pu = 16,
      iu = {
        Lost: 0,
        Gone: 1
      },
      Yu = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function ou(uu) {
      return uu === Yu.WorldgenSeed || uu === Yu.Generate
    }
    const qu = 4,
      Ou = 99,
      vu = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      au = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      fu = 12,
      uR = 16,
      RR = 4,
      yR = 12,
      ER = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      KR = 4,
      QR = 8,
      mR = 8,
      JR = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      NR = {
        Crit: 1,
        HitSelf: 2
      },
      XR = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      VR = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      rR = 12,
      BR = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      xR = 67108864;

    function SR(uu) {
      for (const [Ru, yu] of Object.entries(Eu.g))
        if (yu === uu) return Ru;
      return `Unknown${uu}`
    }

    function pR(uu) {
      return {
        status: uu[Eu.E.Status],
        lastError: uu[Eu.E.LastError],
        lastErrorDetail: uu[Eu.E.LastErrorDetail],
        errorCount: uu[Eu.E.ErrorCount],
        frameIndex: uu[Eu.E.FrameIndex],
        tickIndex: uu[Eu.E.TickIndex],
        renderPending: uu[Eu.E.RenderPending],
        firstView: uu[Eu.E.FirstView],
        chunksCancelled: uu[Eu.E.ChunksCancelled]
      }
    }
  },
  4558: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      d: () => Qu,
      g: () => Ku
    });
    var Eu = yu(4562);

    function Ku(uu) {
      return "none" !== uu
    }

    function Qu(uu, Ru) {
      if (!uu) return "none";
      switch (Ru) {
        case Eu.fb.Drawn:
          return "drawn";
        case Eu.fb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function mu(uu) {
      return "drawn" === uu
    }
  },
  4573: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Nu,
      g: () => Qu,
      h: () => Ju
    });
    var Eu = yu(2306),
      Ku = yu(4578);

    function Qu(uu) {
      let {
        action: Ru,
        flags: yu
      } = uu;
      return "mid-fire" === Ru && 0 !== (yu & Eu.b.AltLeftClick)
    }
    const mu = new Set;

    function Ju(uu) {
      return mu.add(uu), () => {
        mu.delete(uu)
      }
    }

    function Nu(uu) {
      const Ru = Ku.b[255 & uu];
      if (void 0 === Ru) return;
      const yu = uu >>> 8 & 255,
        Qu = {
          action: Ru,
          down: 0 !== (yu & Eu.b.Down),
          flags: yu,
          press: uu >>> 16
        };
      for (const Eu of mu) Eu(Qu)
    }
  },
  4578: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku,
      e: () => Qu,
      f: () => mu,
      j: () => Eu,
      k: () => Ju
    });
    const Eu = {
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
      Ku = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Qu = {
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
      mu = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Ju = [16]
  },
  4586: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju,
      f: () => mu,
      h: () => Xu
    });
    var Eu = yu(2306),
      Ku = yu(2312);
    const Qu = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function mu(uu) {
      return uu instanceof HTMLElement && (!!(uu.isContentEditable || uu instanceof HTMLTextAreaElement || uu instanceof HTMLSelectElement) || uu instanceof HTMLInputElement && !Qu.has(uu.type))
    }

    function Ju(uu) {
      let Ru = null;
      const yu = yu => {
          const Ku = mu(yu);
          Ku !== Ru && (Ru = Ku, uu(Eu.f.UiCapture, Eu.t.Keyboard, 0, 0, Ku ? Eu.t.Keyboard : 0))
        },
        Ku = uu => {
          yu(uu.target)
        },
        Qu = uu => {
          yu(uu.relatedTarget)
        },
        Ju = () => {
          yu(document.activeElement)
        },
        Nu = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Ku, Nu), document.addEventListener("focusout", Qu, Nu), document.addEventListener("keydown", Ju, Nu), yu(document.activeElement), () => {
        document.removeEventListener("focusin", Ku, Nu), document.removeEventListener("focusout", Qu, Nu), document.removeEventListener("keydown", Ju, Nu)
      }
    }
    const Nu = new Map;

    function Xu(uu, Ru) {
      var yu;
      let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Nu.set(Eu, (null !== (yu = Nu.get(Eu)) && void 0 !== yu ? yu : 0) & ~uu | Ru & uu);
      let Qu = 0;
      for (const Ku of Nu.values()) Qu |= Ku;
      return (0, Ku.J)(uu, Qu & uu)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);