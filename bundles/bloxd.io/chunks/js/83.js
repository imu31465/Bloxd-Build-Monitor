export const id = 83;
export const ids = [83];
export const modules = {
  4562: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => XD,
      f: () => vD
    });
    var ID = cD(1302),
      pD = cD(20);
    var iD = cD(326);
    var fD = cD(624);
    var bD = cD(2338),
      QD = cD(4571),
      wD = cD(4588),
      SD = cD(4592);
    class BD {
      constructor(DD, CD, cD, ID, pD, iD) {
        this.id = DD, this.type = CD, this.parameters = cD, this.tearDownNotification = ID, this.onDonePromise = pD, this.resolveRequest = iD
      }
    }
    const yD = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class MD {
      constructor(DD, CD, cD, ID, pD, iD) {
        this.id = DD, this.type = CD, this.parameters = cD, this.resolveRequest = ID, this.onDonePromise = pD, this.tearDownNotification = iD, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const fD = vD[CD];
        if (!fD) throw console.error(`No QTE implementation registered for type: ${CD}`), new Error(`No QTE implementation registered for type: ${CD}`);
        this.implementation = new fD(cD, (DD => {
          this.isCompleted = !0, this.resolveRequest(DD)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = pD.i.subscribe("QTEMouseState", (DD => {
          let {
            isDown: CD
          } = DD;
          this.isCompleted || this.implementation.handleMouseInput(CD)
        })), this.stopInputActions = (0, wD.k)((DD => {
          this.isCompleted || !yD.has(DD.action) && !(0, wD.g)(DD) || this.implementation.handleMouseInput(DD.down)
        })), this.tickSub = pD.i.subscribe("noaTick", (DD => {
          if (this.isCompleted) return;
          const CD = DD / 1e3;
          this.implementation.handleTick(CD)
        })), this.stopShellTicks = (0, QD.w)((() => {
          this.isCompleted || this.implementation.handleTick(bD.w / 1e3)
        }))
      }
      cleanup() {
        var DD, CD;
        this.mouseSub && (pD.i.unsubscribe(this.mouseSub), this.mouseSub = null), null === (DD = this.stopInputActions) || void 0 === DD || DD.call(this), this.stopInputActions = null, null === (CD = this.stopShellTicks) || void 0 === CD || CD.call(this), this.stopShellTicks = null, this.tickSub && (pD.i.unsubscribe(this.tickSub), this.tickSub = null)
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
    const tD = new ID.d,
      ZD = new Map;
    let oD = null;
    const vD = {
      progressBar: class {
        constructor(DD, CD, cD) {
          var ID, pD, iD, fD;
          this.resolveRequest = CD, this.tearDownNotification = cD, this.progress = 0, this.aD = void 0, this.VD = void 0, this.zD = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const bD = DD;
          this.aD = null !== (ID = bD.aD) && void 0 !== ID ? ID : .075, this.VD = null !== (pD = bD.VD) && void 0 !== pD ? pD : 1, this.progress = null !== (iD = bD.KD) && void 0 !== iD ? iD : 30, this.zD = null !== (fD = bD.zD) && void 0 !== fD && fD, this.parameters = bD
        }
        handleMouseInput(DD) {
          DD && !this.isCompleted && (this.clickCount++, this.progress += this.VD, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.aD, this.zD && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(DD) {
          this.isCompleted = !0, this.resolveRequest(DD)
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
        constructor(DD, CD, cD) {
          var ID;
          this.resolveRequest = CD, this.tearDownNotification = cD, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = DD, this.timeWindowMs = null !== (ID = this.parameters.GD) && void 0 !== ID ? ID : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(DD) {
          if (!DD || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(DD) {
          this.isCompleted = !0, this.resolveRequest(DD)
        }
        getState() {
          const DD = Date.now() - this.startTime,
            CD = Math.max(0, this.timeWindowMs - DD);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: CD,
              GD: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(DD, CD, cD) {
          var ID;
          this.resolveRequest = CD, this.tearDownNotification = cD, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const pD = DD;
          this.parameters = {
            ...pD,
            YD: iD.e.clamp(pD.YD, .05, 1)
          }, this.progress = null !== (ID = pD.KD) && void 0 !== ID ? ID : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(DD) {
          this.isMouseDown = DD
        }
        handleTick(DD) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(DD))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const DD = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += DD * this.parameters.WD * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const DD = iD.e.clamp(1 - .7 * this.parameters.sD, 0, 1.4);
          return Math.floor(60 * DD + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.ED : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = iD.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const DD = this.parameters.YD / 2,
            CD = DD,
            cD = 1 - DD;
          this.catchZonePosition <= CD ? (this.catchZonePosition = CD, this.catchZoneVelocity = 0) : this.catchZonePosition >= cD && (this.catchZonePosition = cD, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const DD = this.parameters.YD / 2;
          return this.moverPosition >= this.catchZonePosition - DD && this.moverPosition <= this.catchZonePosition + DD
        }
        updateProgress(DD) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.eD * DD : this.progress -= this.parameters.uD * DD, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.zD && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(DD) {
          this.isCompleted = !0, this.resolveRequest(DD)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              YD: this.parameters.YD,
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
        constructor(DD, CD, cD) {
          var ID, pD, fD, bD, QD;
          this.resolveRequest = CD, this.tearDownNotification = cD, this.startTime = void 0, this.speed = void 0, this.rD = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const wD = DD;
          this.parameters = {
            ...wD,
            speed: null !== (ID = wD.speed) && void 0 !== ID ? ID : .5,
            rD: iD.e.clamp(wD.rD, .05, 1),
            label: null !== (pD = wD.label) && void 0 !== pD ? pD : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (fD = wD.icon) && void 0 !== fD ? fD : null,
            scale: null !== (bD = wD.scale) && void 0 !== bD ? bD : 1,
            rotation: null !== (QD = wD.rotation) && void 0 !== QD ? QD : 0
          }, this.speed = this.parameters.speed, this.rD = this.parameters.rD, this.startTime = Date.now()
        }
        handleMouseInput(DD) {
          if (DD) {
            this.updateMarkerPosition();
            const DD = Math.abs(this.markerPosition - .5) <= this.rD / 2;
            this.complete(DD)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const DD = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = DD <= .5 ? 2 * DD : 2 - 2 * DD
        }
        complete(DD) {
          this.isCompleted = !0, this.resolveRequest(DD)
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
        constructor(DD, CD, cD) {
          this.resolveRequest = CD, this.tearDownNotification = cD, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = DD, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(DD) {
          if (!DD || this.isCompleted) return;
          const CD = this.getOuterCircleProgress();
          if (CD <= this.parameters.CC && CD >= -this.parameters.CC) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.FD) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, fD.C)(this.parameters.cC) && this.misses > this.parameters.cC ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.CC && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.DC
        }
        complete(DD) {
          this.isCompleted = !0, this.resolveRequest(DD)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              FD: this.parameters.FD,
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

    function ND() {
      (0, SD.k)(bD.C.Qte, oD ? bD.C.Qte : 0), oD ? pD.i.Uo("qteStateUpdated", oD.getState()) : pD.i.Uo("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class gD {
      constructor(DD, CD) {
        this.resultPromise = DD, this.tearDownQTE = CD
      }
      static create(DD, CD, cD) {
        const ID = Promise.race([DD, CD]);
        return new gD(ID, cD)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class XD {
      static queueQTE(DD, CD, cD) {
        let ID, pD;
        const iD = new Promise((DD => {
            ID = DD
          })),
          fD = new Promise((DD => {
            pD = () => {
              DD("qteTornDown")
            }
          })),
          bD = Promise.race([iD, fD]).then((() => {})),
          QD = new BD(DD, CD, cD, pD, bD, ID);
        return ZD.set(DD, QD), tD.enqueue(QD), oD || this.processNextQTE(), gD.create(iD, fD, pD)
      }
      static async processNextQTE() {
        if (oD || tD.xt()) return void(tD.xt() && oD && (oD = null, ND()));
        const DD = await tD.dequeue();
        if (!ZD.has(DD.id)) return void await this.processNextQTE();
        ZD.delete(DD.id);
        const CD = new MD(DD.id, DD.type, DD.parameters, DD.resolveRequest, DD.onDonePromise, DD.tearDownNotification);
        oD = CD, ND();
        try {
          await CD.waitUntilDone()
        } catch (cD) {
          console.error("Error while waiting for QTE to resolve:", cD.stack)
        }
        oD === CD && (oD.cleanup(), oD = null, ND()), await this.processNextQTE()
      }
      static cancelQTE(DD) {
        if (oD && oD.id === DD) return oD.tearDown(), oD = null, ND(), void this.processNextQTE();
        const CD = ZD.get(DD);
        CD && (ZD.delete(DD), CD.tearDownNotification())
      }
      static getCurrentState() {
        return oD ? oD.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        oD && (oD.tearDown(), oD = null), ZD.forEach(((DD, CD) => {
          this.cancelQTE(CD)
        })), tD.emptyQueue(), ZD.clear(), ND()
      }
    }
  },
  4585: (DD, CD, cD) => {
    cD.d(CD, {
      $: () => HD,
      A: () => iD,
      Bb: () => nD,
      E: () => tD,
      Eb: () => mD,
      F: () => sD,
      Hb: () => KD,
      I: () => wD,
      Lb: () => TD,
      M: () => ZD,
      Ob: () => VD,
      Q: () => QD,
      Sb: () => jD,
      T: () => yD,
      Wb: () => lD,
      X: () => BD,
      Xb: () => gD,
      Y: () => OD,
      Zb: () => XD,
      _b: () => RD,
      cc: () => pD,
      db: () => UD,
      dc: () => WD,
      e: () => YD,
      eb: () => PD,
      g: () => dD,
      hb: () => xD,
      j: () => SD,
      k: () => ND,
      kb: () => GD,
      l: () => kD,
      lb: () => LD,
      o: () => vD,
      pb: () => zD,
      qb: () => qD,
      r: () => oD,
      rb: () => aD,
      s: () => fD,
      tb: () => JD,
      v: () => bD,
      xb: () => MD,
      y: () => ID
    });
    const ID = 32,
      pD = 33.333333333333336,
      iD = {
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
      fD = {
        NotYet: 0,
        Drawn: 1,
        Backstop: 2,
        HeldBackstop: 3
      },
      bD = {
        NotDrawn: 0,
        Drawn: 1,
        Paced: 2
      },
      QD = {
        AheadMask: 15,
        Joining: 64,
        Tiered: 128,
        LagsShift: 8,
        SwitchesShift: 20,
        CountMask: 4095
      },
      wD = {
        TerrainDrawn: 1,
        ChunkRequested: 2,
        ChunkStored: 4,
        MeshLanded: 8,
        PlayerChunk: 16
      },
      SD = {
        Look: 0,
        Remesh: 1
      },
      BD = 8,
      yD = 1,
      MD = {
        Edit: 0,
        Sent: 1,
        Done: 2,
        Failed: 3,
        Shown: 4,
        Replaced: 5,
        Emptied: 6
      },
      tD = {
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
      ZD = {
        Frame: 1,
        Open: 2,
        Close: 3
      },
      oD = {
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
      vD = {
        EntityInfo: 1,
        EntityTable: 2,
        CoreErrors: 4,
        Other: 8,
        NetSession: 16,
        ItemsUi: 32,
        PlayerHud: 64,
        GameCalls: 128
      },
      ND = 4,
      gD = 4,
      XD = 65535,
      mD = {
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
      nD = {
        Busy: 0,
        Range: 1,
        OtherBody: 2,
        TooLarge: 3,
        Corrupt: 4,
        Ended: 5
      },
      OD = 88,
      PD = 0,
      HD = 24,
      UD = 48,
      xD = 80,
      qD = {
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
      JD = {
        ToggleRecording: 0,
        SaveClip: 1,
        ViewerOpened: 2,
        ViewerClosed: 3
      },
      KD = {
        Clip: 0,
        Recording: 1,
        Edited: 2
      },
      aD = {
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
      VD = {
        Cleared: 0,
        Text: 1,
        Int: 2,
        Double: 3
      },
      zD = 65535,
      jD = {
        FlyingText: 1,
        PlayerKilled: 2,
        Killfeed: 3
      },
      lD = {
        None: 0,
        Paused: 1,
        Playing: 2,
        Cropping: 3,
        Loading: 4
      },
      LD = 2,
      TD = {
        UiText: 0,
        Environment: 6,
        Hud: 12,
        Count: 19
      },
      GD = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"],
      RD = {
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
      kD = {
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
      dD = {
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
      YD = 8,
      WD = {
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
      sD = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
  },
  4571: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => qD,
      E: () => ND,
      I: () => fD,
      K: () => bD,
      N: () => HD,
      e: () => PD,
      f: () => XD,
      h: () => KD,
      i: () => JD,
      j: () => vD,
      m: () => nD,
      q: () => gD,
      t: () => mD,
      w: () => UD,
      z: () => xD
    });
    var ID = cD(4575);
    const pD = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let iD = pD;

    function fD(DD) {
      iD = null !== DD && void 0 !== DD ? DD : pD
    }

    function bD() {
      return iD
    }
    const QD = new Set,
      wD = new Set;
    let SD = -1;
    const BD = new Set,
      yD = new Set;
    let MD = 0,
      tD = 0;
    const ZD = new Set,
      oD = new Set;

    function vD(DD) {
      return QD.add(DD), () => {
        QD.delete(DD)
      }
    }

    function ND(DD, CD) {
      for (const ID of QD) try {
        ID(DD)
      } catch (cD) {
        CD(cD)
      }
    }

    function gD(DD) {
      return wD.add(DD), () => {
        wD.delete(DD)
      }
    }

    function XD(DD, CD) {
      const cD = SD < 0 ? 0 : DD - SD;
      SD = DD;
      for (const pD of wD) try {
        pD(cD)
      } catch (ID) {
        CD(ID)
      }
    }

    function mD(DD) {
      return BD.add(DD), () => {
        BD.delete(DD)
      }
    }

    function nD(DD) {
      return yD.add(DD), () => {
        yD.delete(DD)
      }
    }
    let OD = 0;

    function PD(DD) {
      OD += DD
    }

    function HD() {
      const DD = OD;
      return OD = 0, DD
    }

    function UD(DD) {
      return ZD.add(DD), () => {
        ZD.delete(DD)
      }
    }

    function xD(DD) {
      return oD.add(DD), () => {
        oD.delete(DD)
      }
    }

    function qD() {
      MD = 0, tD = 0, SD = -1
    }

    function JD(DD, CD) {
      if ("paced" === DD) return tD += CD, null;
      if ("drawn" !== DD && "skipped" !== DD) return null;
      const cD = CD + tD;
      return tD = 0, cD
    }

    function KD(DD, CD, cD, pD) {
      const iD = (0, ID.e)(CD),
        fD = DD > 0 ? performance.now() : 0;
      for (let ID = 0; ID < DD; ID++)
        for (const DD of ZD) try {
          DD()
        } catch (bD) {
          pD(bD)
        }
      if (DD > 0 && PD(performance.now() - fD), null !== cD) {
        for (const DD of BD) try {
          DD(cD)
        } catch (bD) {
          pD(bD)
        }
        MD += cD
      }
      if ("drawn" === CD) {
        const DD = MD;
        MD = 0;
        for (const CD of yD) try {
          CD(DD)
        } catch (bD) {
          pD(bD)
        }
      }
      for (const ID of oD) try {
        ID(DD, iD)
      } catch (bD) {
        pD(bD)
      }
    }
  },
  4581: (DD, CD, cD) => {
    cD.d(CD, {
      $d: () => jD,
      A: () => qD,
      Ac: () => ID.pb,
      B: () => fD,
      Bd: () => TD,
      Cb: () => CC,
      D: () => aD,
      Dc: () => MC,
      Dd: () => WD,
      E: () => yC,
      Fb: () => pD.g,
      Fc: () => wC,
      Gc: () => IC,
      Gd: () => dD,
      H: () => rD,
      Hc: () => ID.qb,
      Ib: () => PD,
      Kc: () => ID.rb,
      Kd: () => ED,
      L: () => ID.g,
      Lb: () => LD,
      M: () => wD,
      Nb: () => JD,
      Nc: () => ID.tb,
      Nd: () => sD,
      O: () => ID.j,
      Pc: () => AD,
      Q: () => ID.k,
      Qc: () => ID.Bb,
      R: () => uD,
      Rb: () => xD,
      Rd: () => fC,
      Sd: () => tC,
      Tc: () => ID.Eb,
      U: () => ID.r,
      Ub: () => ID.M,
      Uc: () => ID.Hb,
      Wd: () => XD,
      X: () => ID.s,
      Xb: () => KD,
      Xc: () => ID.Ob,
      Y: () => ID.v,
      Yc: () => ID.Sb,
      Yd: () => eD,
      Zb: () => mD,
      ab: () => BD,
      ad: () => ID.Wb,
      bb: () => ND,
      bc: () => iC,
      db: () => ID.y,
      de: () => zD,
      e: () => DC,
      ed: () => UD,
      fc: () => gD,
      h: () => ZD,
      hb: () => ID.A,
      hd: () => ID.Xb,
      he: () => VD,
      ic: () => SC,
      id: () => ID.Zb,
      ie: () => QD,
      jc: () => pD.o,
      je: () => lD,
      k: () => tD,
      kb: () => RD,
      kc: () => vD,
      kd: () => ID.cc,
      lb: () => pC,
      le: () => ZC,
      n: () => QC,
      nc: () => cC,
      nd: () => iD,
      oe: () => MD,
      pb: () => SD,
      pd: () => oD,
      q: () => HD,
      qc: () => ID.Y,
      s: () => OD,
      sc: () => ID.$,
      tb: () => ID.E,
      td: () => bC,
      vb: () => YD,
      vc: () => ID.db,
      w: () => ID.e,
      wc: () => ID.eb,
      x: () => BC,
      xb: () => hD,
      xd: () => GD,
      yc: () => ID.hb,
      yd: () => kD,
      zb: () => FD
    });
    var ID = cD(4585),
      pD = cD(2338);
    const iD = Math.round(1e3 / ID.cc),
      fD = 4,
      bD = 2;

    function QD() {
      return crypto.getRandomValues(new Uint32Array(bD))
    }
    const wD = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      SD = 16,
      BD = {
        Draws: 1,
        NetAll: 2
      },
      yD = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function MD(DD) {
      return (DD.nametagsHidden ? nD.NametagsHidden : 0) | (DD.crouchToggle ? nD.CrouchToggle : 0) | (DD.bhopDisabled ? nD.BhopDisabled : 0) | (DD.disableBobbing ? nD.DisableBobbing : 0) | (DD.ezTowering ? nD.EzTowering : 0) | (DD.ezBridging ? nD.EzBridging : 0) | (DD.showChunkBorders ? nD.ShowChunkBorders : 0)
    }
    const tD = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      ZD = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      oD = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      vD = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      ND = 5,
      gD = 4294967295;

    function XD(DD) {
      return (DD.showFog ? yD.ShowFog : 0) | (DD.lighting ? yD.Lighting : 0) | (DD.chunkFade ? yD.ChunkFade : 0)
    }
    const mD = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      nD = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      OD = {
        Release: 1,
        KeepTouches: 2
      },
      PD = {
        Point: 1,
        Stamped: 2
      },
      HD = {
        Add: 1,
        Clear: 2
      },
      UD = 1,
      xD = 8,
      qD = 16777215,
      JD = 4,
      KD = {
        Resume: 1
      },
      aD = {
        Held: 1
      };

    function VD(DD, CD) {
      return (DD | CD << 8) >>> 0
    }

    function zD(DD) {
      return 255 & DD
    }

    function jD(DD) {
      return DD >>> 8
    }

    function lD(DD) {
      return DD + 3 & -4
    }
    const LD = 16777216,
      TD = 20;
    const GD = 8,
      RD = 8,
      kD = 16777216,
      dD = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      YD = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      WD = 16,
      sD = {
        Lost: 0,
        Gone: 1
      },
      ED = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function eD(DD) {
      return DD === ED.WorldgenSeed || DD === ED.Generate
    }
    const uD = 4,
      hD = 99,
      rD = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      AD = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      FD = 12,
      DC = 16,
      CC = 4,
      cC = 12,
      IC = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      pC = 4,
      iC = 8,
      fC = 8,
      bC = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      QC = {
        Crit: 1,
        HitSelf: 2
      },
      wC = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      SC = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      BC = 12,
      yC = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      MC = 67108864;

    function tC(DD) {
      for (const [CD, cD] of Object.entries(ID.g))
        if (cD === DD) return CD;
      return `Unknown${DD}`
    }

    function ZC(DD) {
      return {
        status: DD[ID.A.Status],
        lastError: DD[ID.A.LastError],
        lastErrorDetail: DD[ID.A.LastErrorDetail],
        errorCount: DD[ID.A.ErrorCount],
        frameIndex: DD[ID.A.FrameIndex],
        tickIndex: DD[ID.A.TickIndex],
        renderPending: DD[ID.A.RenderPending],
        firstView: DD[ID.A.FirstView],
        chunksCancelled: DD[ID.A.ChunksCancelled]
      }
    }
  },
  4575: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      c: () => iD,
      e: () => pD
    });
    var ID = cD(4581);

    function pD(DD) {
      return "none" !== DD
    }

    function iD(DD, CD) {
      if (!DD) return "none";
      switch (CD) {
        case ID.Y.Drawn:
          return "drawn";
        case ID.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function fD(DD) {
      return "drawn" === DD
    }
  },
  4588: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => QD,
      g: () => iD,
      k: () => bD
    });
    var ID = cD(2338),
      pD = cD(4590);

    function iD(DD) {
      let {
        action: CD,
        flags: cD
      } = DD;
      return "mid-fire" === CD && 0 !== (cD & ID.d.AltLeftClick)
    }
    const fD = new Set;

    function bD(DD) {
      return fD.add(DD), () => {
        fD.delete(DD)
      }
    }

    function QD(DD) {
      const CD = pD.c[255 & DD];
      if (void 0 === CD) return;
      const cD = DD >>> 8 & 255,
        iD = {
          action: CD,
          down: 0 !== (cD & ID.d.Down),
          flags: cD,
          press: DD >>> 16
        };
      for (const ID of fD) ID(iD)
    }
  },
  4590: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      e: () => iD,
      f: () => fD,
      j: () => ID,
      m: () => bD
    });
    const ID = {
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
      pD = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      iD = {
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
      fD = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      bD = [16]
  },
  4592: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD,
      g: () => fD,
      k: () => wD
    });
    var ID = cD(2338),
      pD = cD(2343);
    const iD = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function fD(DD) {
      return DD instanceof HTMLElement && (!!(DD.isContentEditable || DD instanceof HTMLTextAreaElement || DD instanceof HTMLSelectElement) || DD instanceof HTMLInputElement && !iD.has(DD.type))
    }

    function bD(DD) {
      let CD = null;
      const cD = cD => {
          const pD = fD(cD);
          pD !== CD && (CD = pD, DD(ID.k.UiCapture, ID.C.Keyboard, 0, 0, pD ? ID.C.Keyboard : 0))
        },
        pD = DD => {
          cD(DD.target)
        },
        iD = DD => {
          cD(DD.relatedTarget)
        },
        bD = () => {
          cD(document.activeElement)
        },
        QD = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", pD, QD), document.addEventListener("focusout", iD, QD), document.addEventListener("keydown", bD, QD), cD(document.activeElement), () => {
        document.removeEventListener("focusin", pD, QD), document.removeEventListener("focusout", iD, QD), document.removeEventListener("keydown", bD, QD)
      }
    }
    const QD = new Map;

    function wD(DD, CD) {
      var cD;
      let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      QD.set(ID, (null !== (cD = QD.get(ID)) && void 0 !== cD ? cD : 0) & ~DD | CD & DD);
      let iD = 0;
      for (const pD of QD.values()) iD |= pD;
      return (0, pD.y)(DD, iD & DD)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);