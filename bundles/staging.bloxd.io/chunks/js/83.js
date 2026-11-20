export const id = 83;
export const ids = [83];
export const modules = {
  4411: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => rz,
      g: () => Hz
    });
    var Fz = sz(1285),
      Wz = sz(34);
    var Xz = sz(321);
    var Oz = sz(580);
    var oz = sz(2273),
      vz = sz(4419),
      Uz = sz(4438),
      Kz = sz(4450);
    class uz {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        this.id = zz, this.type = tz, this.parameters = sz, this.tearDownNotification = Fz, this.onDonePromise = Wz, this.resolveRequest = Xz
      }
    }
    const Nz = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class bz {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        this.id = zz, this.type = tz, this.parameters = sz, this.resolveRequest = Fz, this.onDonePromise = Wz, this.tearDownNotification = Xz, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const Oz = Hz[tz];
        if (!Oz) throw console.error(`No QTE implementation registered for type: ${tz}`), new Error(`No QTE implementation registered for type: ${tz}`);
        this.implementation = new Oz(sz, (zz => {
          this.isCompleted = !0, this.resolveRequest(zz)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Wz.o.subscribe("QTEMouseState", (zz => {
          let {
            isDown: tz
          } = zz;
          this.isCompleted || this.implementation.handleMouseInput(tz)
        })), this.stopInputActions = (0, Uz.k)((zz => {
          this.isCompleted || !Nz.has(zz.action) && !(0, Uz.i)(zz) || this.implementation.handleMouseInput(zz.down)
        })), this.tickSub = Wz.o.subscribe("noaTick", (zz => {
          if (this.isCompleted) return;
          const tz = zz / 1e3;
          this.implementation.handleTick(tz)
        })), this.stopShellTicks = (0, vz.y)((() => {
          this.isCompleted || this.implementation.handleTick(oz.t / 1e3)
        }))
      }
      cleanup() {
        var zz, tz;
        this.mouseSub && (Wz.o.unsubscribe(this.mouseSub), this.mouseSub = null), null === (zz = this.stopInputActions) || void 0 === zz || zz.call(this), this.stopInputActions = null, null === (tz = this.stopShellTicks) || void 0 === tz || tz.call(this), this.stopShellTicks = null, this.tickSub && (Wz.o.unsubscribe(this.tickSub), this.tickSub = null)
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
    const wz = new Fz.e,
      Dz = new Map;
    let gz = null;
    const Hz = {
      progressBar: class {
        constructor(zz, tz, sz) {
          var Fz, Wz, Xz, Oz;
          this.resolveRequest = tz, this.tearDownNotification = sz, this.progress = 0, this.Mz = void 0, this.dz = void 0, this.hz = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const oz = zz;
          this.Mz = null !== (Fz = oz.Mz) && void 0 !== Fz ? Fz : .075, this.dz = null !== (Wz = oz.dz) && void 0 !== Wz ? Wz : 1, this.progress = null !== (Xz = oz.yz) && void 0 !== Xz ? Xz : 30, this.hz = null !== (Oz = oz.hz) && void 0 !== Oz && Oz, this.parameters = oz
        }
        handleMouseInput(zz) {
          zz && !this.isCompleted && (this.clickCount++, this.progress += this.dz, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.Mz, this.hz && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(zz) {
          this.isCompleted = !0, this.resolveRequest(zz)
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
        constructor(zz, tz, sz) {
          var Fz;
          this.resolveRequest = tz, this.tearDownNotification = sz, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = zz, this.timeWindowMs = null !== (Fz = this.parameters.lz) && void 0 !== Fz ? Fz : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(zz) {
          if (!zz || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(zz) {
          this.isCompleted = !0, this.resolveRequest(zz)
        }
        getState() {
          const zz = Date.now() - this.startTime,
            tz = Math.max(0, this.timeWindowMs - zz);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: tz,
              lz: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(zz, tz, sz) {
          var Fz;
          this.resolveRequest = tz, this.tearDownNotification = sz, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Wz = zz;
          this.parameters = {
            ...Wz,
            Sz: Xz.c.clamp(Wz.Sz, .05, 1)
          }, this.progress = null !== (Fz = Wz.yz) && void 0 !== Fz ? Fz : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(zz) {
          this.isMouseDown = zz
        }
        handleTick(zz) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(zz))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const zz = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += zz * this.parameters.Vz * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const zz = Xz.c.clamp(1 - .7 * this.parameters.Rz, 0, 1.4);
          return Math.floor(60 * zz + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.pz : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Xz.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const zz = this.parameters.Sz / 2,
            tz = zz,
            sz = 1 - zz;
          this.catchZonePosition <= tz ? (this.catchZonePosition = tz, this.catchZoneVelocity = 0) : this.catchZonePosition >= sz && (this.catchZonePosition = sz, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const zz = this.parameters.Sz / 2;
          return this.moverPosition >= this.catchZonePosition - zz && this.moverPosition <= this.catchZonePosition + zz
        }
        updateProgress(zz) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.fz * zz : this.progress -= this.parameters.Ez * zz, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.hz && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(zz) {
          this.isCompleted = !0, this.resolveRequest(zz)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Sz: this.parameters.Sz,
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
        constructor(zz, tz, sz) {
          var Fz, Wz, Oz, oz, vz;
          this.resolveRequest = tz, this.tearDownNotification = sz, this.startTime = void 0, this.speed = void 0, this.tt = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const Uz = zz;
          this.parameters = {
            ...Uz,
            speed: null !== (Fz = Uz.speed) && void 0 !== Fz ? Fz : .5,
            tt: Xz.c.clamp(Uz.tt, .05, 1),
            label: null !== (Wz = Uz.label) && void 0 !== Wz ? Wz : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (Oz = Uz.icon) && void 0 !== Oz ? Oz : null,
            scale: null !== (oz = Uz.scale) && void 0 !== oz ? oz : 1,
            rotation: null !== (vz = Uz.rotation) && void 0 !== vz ? vz : 0
          }, this.speed = this.parameters.speed, this.tt = this.parameters.tt, this.startTime = Date.now()
        }
        handleMouseInput(zz) {
          if (zz) {
            this.updateMarkerPosition();
            const zz = Math.abs(this.markerPosition - .5) <= this.tt / 2;
            this.complete(zz)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const zz = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = zz <= .5 ? 2 * zz : 2 - 2 * zz
        }
        complete(zz) {
          this.isCompleted = !0, this.resolveRequest(zz)
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
        constructor(zz, tz, sz) {
          this.resolveRequest = tz, this.tearDownNotification = sz, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = zz, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(zz) {
          if (!zz || this.isCompleted) return;
          const tz = this.getOuterCircleProgress();
          if (tz <= this.parameters.Ot && tz >= -this.parameters.Ot) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Wt) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, Oz.G)(this.parameters.ot) && this.misses > this.parameters.ot ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.Ot && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Xt
        }
        complete(zz) {
          this.isCompleted = !0, this.resolveRequest(zz)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              Wt: this.parameters.Wt,
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

    function Bz() {
      (0, Kz.k)(oz.x.Qte, gz ? oz.x.Qte : 0), gz ? Wz.o.Yg("qteStateUpdated", gz.getState()) : Wz.o.Yg("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class Pz {
      constructor(zz, tz) {
        this.resultPromise = zz, this.tearDownQTE = tz
      }
      static create(zz, tz, sz) {
        const Fz = Promise.race([zz, tz]);
        return new Pz(Fz, sz)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class rz {
      static queueQTE(zz, tz, sz) {
        let Fz, Wz;
        const Xz = new Promise((zz => {
            Fz = zz
          })),
          Oz = new Promise((zz => {
            Wz = () => {
              zz("qteTornDown")
            }
          })),
          oz = Promise.race([Xz, Oz]).then((() => {})),
          vz = new uz(zz, tz, sz, Wz, oz, Fz);
        return Dz.set(zz, vz), wz.enqueue(vz), gz || this.processNextQTE(), Pz.create(Xz, Oz, Wz)
      }
      static async processNextQTE() {
        if (gz || wz.Aw()) return void(wz.Aw() && gz && (gz = null, Bz()));
        const zz = await wz.dequeue();
        if (!Dz.has(zz.id)) return void await this.processNextQTE();
        Dz.delete(zz.id);
        const tz = new bz(zz.id, zz.type, zz.parameters, zz.resolveRequest, zz.onDonePromise, zz.tearDownNotification);
        gz = tz, Bz();
        try {
          await tz.waitUntilDone()
        } catch (sz) {
          console.error("Error while waiting for QTE to resolve:", sz.stack)
        }
        gz === tz && (gz.cleanup(), gz = null, Bz()), await this.processNextQTE()
      }
      static cancelQTE(zz) {
        if (gz && gz.id === zz) return gz.tearDown(), gz = null, Bz(), void this.processNextQTE();
        const tz = Dz.get(zz);
        tz && (Dz.delete(zz), tz.tearDownNotification())
      }
      static getCurrentState() {
        return gz ? gz.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        gz && (gz.tearDown(), gz = null), Dz.forEach(((zz, tz) => {
          this.cancelQTE(tz)
        })), wz.emptyQueue(), Dz.clear(), Bz()
      }
    }
  },
  4436: (zz, tz, sz) => {
    sz.d(tz, {
      D: () => Xz,
      Db: () => Gz,
      G: () => wz,
      Gb: () => bz,
      Hb: () => xz,
      Ib: () => Yz,
      J: () => az,
      Jb: () => Tz,
      K: () => Uz,
      Nb: () => hz,
      O: () => Dz,
      Ob: () => jz,
      R: () => vz,
      Sb: () => yz,
      V: () => Nz,
      Wb: () => Mz,
      Xb: () => Pz,
      Y: () => uz,
      _b: () => rz,
      ab: () => mz,
      ac: () => kz,
      c: () => lz,
      cb: () => Iz,
      dc: () => Wz,
      eb: () => Cz,
      fc: () => nz,
      g: () => Lz,
      gb: () => Jz,
      j: () => Kz,
      jb: () => ez,
      n: () => Bz,
      nb: () => Qz,
      q: () => iz,
      qb: () => dz,
      r: () => Hz,
      s: () => gz,
      tb: () => Az,
      v: () => Oz,
      vb: () => Zz,
      x: () => oz,
      z: () => Fz,
      zb: () => cz
    });
    const Fz = 32,
      Wz = 33.333333333333336,
      Xz = {
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
      Oz = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      oz = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      vz = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      Uz = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      Kz = {
        Look: 0,
        Remesh: 1
      },
      uz = 8,
      Nz = 1,
      bz = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      wz = {
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
      Dz = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      gz = {
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
      Hz = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      Bz = 4,
      Pz = 4,
      rz = 65535,
      Yz = {
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
      xz = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      mz = 88,
      Jz = 0,
      Iz = 24,
      Cz = 48,
      ez = 80,
      Zz = {
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
      Gz = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      Tz = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      cz = {
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
      jz = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      Az = 65535,
      yz = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      Mz = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      dz = 2,
      hz = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      Qz = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      kz = {
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
      iz = {
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
      Lz = {
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
      lz = 8,
      nz = {
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
      az = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4419: (zz, tz, sz) => {
    sz.d(tz, {
      C: () => Zz,
      E: () => Bz,
      I: () => Oz,
      L: () => oz,
      N: () => Iz,
      d: () => Jz,
      h: () => rz,
      i: () => Tz,
      k: () => Gz,
      n: () => Hz,
      q: () => xz,
      t: () => Pz,
      x: () => Yz,
      y: () => Cz,
      z: () => ez
    });
    var Fz = sz(4427);
    const Wz = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Xz = Wz;

    function Oz(zz) {
      Xz = null !== zz && void 0 !== zz ? zz : Wz
    }

    function oz() {
      return Xz
    }
    const vz = new Set,
      Uz = new Set;
    let Kz = -1;
    const uz = new Set,
      Nz = new Set;
    let bz = 0,
      wz = 0;
    const Dz = new Set,
      gz = new Set;

    function Hz(zz) {
      return vz.add(zz), () => {
        vz.delete(zz)
      }
    }

    function Bz(zz, tz) {
      for (const Fz of vz) try {
        Fz(zz)
      } catch (sz) {
        tz(sz)
      }
    }

    function Pz(zz) {
      return Uz.add(zz), () => {
        Uz.delete(zz)
      }
    }

    function rz(zz, tz) {
      const sz = Kz < 0 ? 0 : zz - Kz;
      Kz = zz;
      for (const Wz of Uz) try {
        Wz(sz)
      } catch (Fz) {
        tz(Fz)
      }
    }

    function Yz(zz) {
      return uz.add(zz), () => {
        uz.delete(zz)
      }
    }

    function xz(zz) {
      return Nz.add(zz), () => {
        Nz.delete(zz)
      }
    }
    let mz = 0;

    function Jz(zz) {
      mz += zz
    }

    function Iz() {
      const zz = mz;
      return mz = 0, zz
    }

    function Cz(zz) {
      return Dz.add(zz), () => {
        Dz.delete(zz)
      }
    }

    function ez(zz) {
      return gz.add(zz), () => {
        gz.delete(zz)
      }
    }

    function Zz() {
      bz = 0, wz = 0, Kz = -1
    }

    function Gz(zz, tz) {
      if ("paced" === zz) return wz += tz, null;
      if ("drawn" !== zz && "skipped" !== zz) return null;
      const sz = tz + wz;
      return wz = 0, sz
    }

    function Tz(zz, tz, sz, Wz) {
      const Xz = (0, Fz.j)(tz),
        Oz = zz > 0 ? performance.now() : 0;
      for (let Fz = 0; Fz < zz; Fz++)
        for (const zz of Dz) try {
          zz()
        } catch (oz) {
          Wz(oz)
        }
      if (zz > 0 && Jz(performance.now() - Oz), null !== sz) {
        for (const zz of uz) try {
          zz(sz)
        } catch (oz) {
          Wz(oz)
        }
        bz += sz
      }
      if ("drawn" === tz) {
        const zz = bz;
        bz = 0;
        for (const tz of Nz) try {
          tz(zz)
        } catch (oz) {
          Wz(oz)
        }
      }
      for (const Fz of gz) try {
        Fz(zz, Xz)
      } catch (oz) {
        Wz(oz)
      }
    }
  },
  4432: (zz, tz, sz) => {
    sz.d(tz, {
      $: () => Fz.x,
      $b: () => Hz,
      A: () => Oz,
      Ab: () => Jz,
      B: () => cz,
      Bb: () => dz,
      Cd: () => iz,
      Dc: () => Ft,
      Dd: () => hz,
      Eb: () => Gz,
      Ec: () => Fz.vb,
      F: () => Nt,
      Fd: () => nz,
      Gc: () => Fz.zb,
      Hb: () => ez,
      I: () => pz,
      Ib: () => Fz.O,
      Kb: () => Tz,
      Kc: () => Fz.Db,
      L: () => Fz.g,
      Lb: () => Yz,
      Lc: () => fz,
      M: () => Uz,
      Md: () => Lz,
      Ob: () => Xt,
      Oc: () => Fz.Hb,
      P: () => Fz.j,
      Pd: () => qz,
      Rc: () => Fz.Ib,
      S: () => Fz.n,
      Sb: () => Pz,
      Sd: () => az,
      Tc: () => Fz.Jb,
      Ud: () => Ot,
      V: () => Vz,
      Vc: () => Fz.Ob,
      Wb: () => Kt,
      Wd: () => wt,
      X: () => Fz.s,
      Y: () => Fz.v,
      Yc: () => Fz.Sb,
      Zb: () => Wz.m,
      _d: () => rz,
      ab: () => uz,
      ad: () => Fz.Wb,
      bc: () => st,
      be: () => Sz,
      cc: () => Fz.ab,
      ce: () => yz,
      d: () => zt,
      de: () => Az,
      e: () => Dz,
      eb: () => Bz,
      ec: () => Fz.cb,
      ed: () => Cz,
      h: () => wz,
      hb: () => Fz.z,
      he: () => jz,
      ib: () => Fz.D,
      ic: () => Fz.eb,
      id: () => Fz.Xb,
      je: () => vz,
      kb: () => kz,
      kd: () => Fz._b,
      ke: () => Mz,
      l: () => vt,
      lc: () => Fz.gb,
      mb: () => Wt,
      ne: () => Dt,
      o: () => Iz,
      od: () => Fz.dc,
      pb: () => Kz,
      pc: () => Fz.jb,
      pe: () => bz,
      qb: () => Fz.G,
      qd: () => Xz,
      rb: () => lz,
      s: () => mz,
      sb: () => Rz,
      sd: () => gz,
      tc: () => Fz.tb,
      ub: () => Ez,
      v: () => Fz.c,
      vb: () => tt,
      vd: () => ot,
      w: () => ut,
      wc: () => bt,
      xb: () => Wz.f,
      y: () => Zz,
      zc: () => Ut,
      zd: () => Qz
    });
    var Fz = sz(4436),
      Wz = sz(2273);
    const Xz = Math.round(1e3 / Fz.dc),
      Oz = 4,
      oz = 2;

    function vz() {
      return crypto.getRandomValues(new Uint32Array(oz))
    }
    const Uz = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Kz = 16,
      uz = {
        Draws: 1,
        NetAll: 2
      },
      Nz = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function bz(zz) {
      return (zz.nametagsHidden ? xz.NametagsHidden : 0) | (zz.crouchToggle ? xz.CrouchToggle : 0) | (zz.bhopDisabled ? xz.BhopDisabled : 0) | (zz.disableBobbing ? xz.DisableBobbing : 0) | (zz.ezTowering ? xz.EzTowering : 0) | (zz.ezBridging ? xz.EzBridging : 0) | (zz.showChunkBorders ? xz.ShowChunkBorders : 0)
    }
    const wz = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Dz = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      gz = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Hz = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Bz = 5,
      Pz = 4294967295;

    function rz(zz) {
      return (zz.showFog ? Nz.ShowFog : 0) | (zz.lighting ? Nz.Lighting : 0) | (zz.chunkFade ? Nz.ChunkFade : 0)
    }
    const Yz = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      xz = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      mz = {
        Release: 1,
        KeepTouches: 2
      },
      Jz = {
        Point: 1,
        Stamped: 2
      },
      Iz = {
        Add: 1,
        Clear: 2
      },
      Cz = 1,
      ez = 8,
      Zz = 16777215,
      Gz = 4,
      Tz = {
        Resume: 1
      },
      cz = {
        Held: 1
      };

    function jz(zz, tz) {
      return (zz | tz << 8) >>> 0
    }

    function Az(zz) {
      return 255 & zz
    }

    function yz(zz) {
      return zz >>> 8
    }

    function Mz(zz) {
      return zz + 3 & -4
    }
    const dz = 16777216,
      hz = 20;
    const Qz = 8,
      kz = 8,
      iz = 16777216,
      Lz = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      lz = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      nz = 16,
      az = {
        Lost: 0,
        Gone: 1
      },
      qz = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Sz(zz) {
      return zz === qz.WorldgenSeed || zz === qz.Generate
    }
    const Vz = 4,
      Rz = 99,
      pz = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      fz = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Ez = 12,
      zt = 16,
      tt = 4,
      st = 12,
      Ft = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Wt = 4,
      Xt = 8,
      Ot = 8,
      ot = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      vt = {
        Crit: 1,
        HitSelf: 2
      },
      Ut = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Kt = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      ut = 12,
      Nt = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      bt = 67108864;

    function wt(zz) {
      for (const [tz, sz] of Object.entries(Fz.g))
        if (sz === zz) return tz;
      return `Unknown${zz}`
    }

    function Dt(zz) {
      return {
        status: zz[Fz.D.Status],
        lastError: zz[Fz.D.LastError],
        lastErrorDetail: zz[Fz.D.LastErrorDetail],
        errorCount: zz[Fz.D.ErrorCount],
        frameIndex: zz[Fz.D.FrameIndex],
        tickIndex: zz[Fz.D.TickIndex],
        renderPending: zz[Fz.D.RenderPending],
        firstView: zz[Fz.D.FirstView],
        chunksCancelled: zz[Fz.D.ChunksCancelled]
      }
    }
  },
  4427: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      h: () => Xz,
      j: () => Wz
    });
    var Fz = sz(4432);

    function Wz(zz) {
      return "none" !== zz
    }

    function Xz(zz, tz) {
      if (!zz) return "none";
      switch (tz) {
        case Fz.$.Drawn:
          return "drawn";
        case Fz.$.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Oz(zz) {
      return "drawn" === zz
    }
  },
  4438: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => vz,
      i: () => Xz,
      k: () => oz
    });
    var Fz = sz(2273),
      Wz = sz(4446);

    function Xz(zz) {
      let {
        action: tz,
        flags: sz
      } = zz;
      return "mid-fire" === tz && 0 !== (sz & Fz.b.AltLeftClick)
    }
    const Oz = new Set;

    function oz(zz) {
      return Oz.add(zz), () => {
        Oz.delete(zz)
      }
    }

    function vz(zz) {
      const tz = Wz.b[255 & zz];
      if (void 0 === tz) return;
      const sz = zz >>> 8 & 255,
        Xz = {
          action: tz,
          down: 0 !== (sz & Fz.b.Down),
          flags: sz,
          press: zz >>> 16
        };
      for (const Fz of Oz) Fz(Xz)
    }
  },
  4446: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      f: () => Xz,
      j: () => Oz,
      n: () => Fz,
      q: () => oz
    });
    const Fz = {
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
      Wz = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Xz = {
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
      Oz = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      oz = [16]
  },
  4450: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      i: () => Oz,
      k: () => Uz
    });
    var Fz = sz(2273),
      Wz = sz(2277);
    const Xz = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Oz(zz) {
      return zz instanceof HTMLElement && (!!(zz.isContentEditable || zz instanceof HTMLTextAreaElement || zz instanceof HTMLSelectElement) || zz instanceof HTMLInputElement && !Xz.has(zz.type))
    }

    function oz(zz) {
      let tz = null;
      const sz = sz => {
          const Wz = Oz(sz);
          Wz !== tz && (tz = Wz, zz(Fz.j.UiCapture, Fz.x.Keyboard, 0, 0, Wz ? Fz.x.Keyboard : 0))
        },
        Wz = zz => {
          sz(zz.target)
        },
        Xz = zz => {
          sz(zz.relatedTarget)
        },
        oz = () => {
          sz(document.activeElement)
        },
        vz = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Wz, vz), document.addEventListener("focusout", Xz, vz), document.addEventListener("keydown", oz, vz), sz(document.activeElement), () => {
        document.removeEventListener("focusin", Wz, vz), document.removeEventListener("focusout", Xz, vz), document.removeEventListener("keydown", oz, vz)
      }
    }
    const vz = new Map;

    function Uz(zz, tz) {
      var sz;
      let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      vz.set(Fz, (null !== (sz = vz.get(Fz)) && void 0 !== sz ? sz : 0) & ~zz | tz & zz);
      let Xz = 0;
      for (const Wz of vz.values()) Xz |= Wz;
      return (0, Wz.z)(zz, Xz & zz)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);