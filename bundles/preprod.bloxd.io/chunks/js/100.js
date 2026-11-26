export const id = 100;
export const ids = [100];
export const modules = {
  5303: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => BU,
      g: () => gU
    });
    var cU = zU(1340),
      yU = zU(31);
    var QU = zU(344);
    var AU = zU(646);
    var FU = zU(2580),
      oU = zU(5312),
      DU = zU(5329),
      EU = zU(5342);
    class YU {
      constructor(UU, XU, zU, cU, yU, QU) {
        this.id = UU, this.type = XU, this.parameters = zU, this.tearDownNotification = cU, this.onDonePromise = yU, this.resolveRequest = QU
      }
    }
    const NU = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class IU {
      constructor(UU, XU, zU, cU, yU, QU) {
        this.id = UU, this.type = XU, this.parameters = zU, this.resolveRequest = cU, this.onDonePromise = yU, this.tearDownNotification = QU, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const AU = gU[XU];
        if (!AU) throw console.error(`No QTE implementation registered for type: ${XU}`), new Error(`No QTE implementation registered for type: ${XU}`);
        this.implementation = new AU(zU, (UU => {
          this.isCompleted = !0, this.resolveRequest(UU)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = yU.k.subscribe("QTEMouseState", (UU => {
          let {
            isDown: XU
          } = UU;
          this.isCompleted || this.implementation.handleMouseInput(XU)
        })), this.stopInputActions = (0, DU.k)((UU => {
          this.isCompleted || !NU.has(UU.action) && !(0, DU.g)(UU) || this.implementation.handleMouseInput(UU.down)
        })), this.tickSub = yU.k.subscribe("noaTick", (UU => {
          if (this.isCompleted) return;
          const XU = UU / 1e3;
          this.implementation.handleTick(XU)
        })), this.stopShellTicks = (0, oU.t)((() => {
          this.isCompleted || this.implementation.handleTick(FU.z / 1e3)
        }))
      }
      cleanup() {
        var UU, XU;
        this.mouseSub && (yU.k.unsubscribe(this.mouseSub), this.mouseSub = null), null === (UU = this.stopInputActions) || void 0 === UU || UU.call(this), this.stopInputActions = null, null === (XU = this.stopShellTicks) || void 0 === XU || XU.call(this), this.stopShellTicks = null, this.tickSub && (yU.k.unsubscribe(this.tickSub), this.tickSub = null)
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
    const pU = new cU.e,
      aU = new Map;
    let tU = null;
    const gU = {
      progressBar: class {
        constructor(UU, XU, zU) {
          var cU, yU, QU, AU;
          this.resolveRequest = XU, this.tearDownNotification = zU, this.progress = 0, this.rz = void 0, this.uz = void 0, this.fz = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const FU = UU;
          this.rz = null !== (cU = FU.rz) && void 0 !== cU ? cU : .075, this.uz = null !== (yU = FU.uz) && void 0 !== yU ? yU : 1, this.progress = null !== (QU = FU.Sz) && void 0 !== QU ? QU : 30, this.fz = null !== (AU = FU.fz) && void 0 !== AU && AU, this.parameters = FU
        }
        handleMouseInput(UU) {
          UU && !this.isCompleted && (this.clickCount++, this.progress += this.uz, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.rz, this.fz && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(UU) {
          this.isCompleted = !0, this.resolveRequest(UU)
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
        constructor(UU, XU, zU) {
          var cU;
          this.resolveRequest = XU, this.tearDownNotification = zU, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = UU, this.timeWindowMs = null !== (cU = this.parameters.vz) && void 0 !== cU ? cU : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(UU) {
          if (!UU || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(UU) {
          this.isCompleted = !0, this.resolveRequest(UU)
        }
        getState() {
          const UU = Date.now() - this.startTime,
            XU = Math.max(0, this.timeWindowMs - UU);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: XU,
              vz: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(UU, XU, zU) {
          var cU;
          this.resolveRequest = XU, this.tearDownNotification = zU, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const yU = UU;
          this.parameters = {
            ...yU,
            mz: QU.d.clamp(yU.mz, .05, 1)
          }, this.progress = null !== (cU = yU.Sz) && void 0 !== cU ? cU : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(UU) {
          this.isMouseDown = UU
        }
        handleTick(UU) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(UU))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const UU = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += UU * this.parameters.lz * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const UU = QU.d.clamp(1 - .7 * this.parameters.xz, 0, 1.4);
          return Math.floor(60 * UU + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.Jz : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = QU.d.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const UU = this.parameters.mz / 2,
            XU = UU,
            zU = 1 - UU;
          this.catchZonePosition <= XU ? (this.catchZonePosition = XU, this.catchZoneVelocity = 0) : this.catchZonePosition >= zU && (this.catchZonePosition = zU, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const UU = this.parameters.mz / 2;
          return this.moverPosition >= this.catchZonePosition - UU && this.moverPosition <= this.catchZonePosition + UU
        }
        updateProgress(UU) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.jz * UU : this.progress -= this.parameters.Kz * UU, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.fz && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(UU) {
          this.isCompleted = !0, this.resolveRequest(UU)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              mz: this.parameters.mz,
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
        constructor(UU, XU, zU) {
          var cU, yU, AU, FU, oU;
          this.resolveRequest = XU, this.tearDownNotification = zU, this.startTime = void 0, this.speed = void 0, this.Tz = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const DU = UU;
          this.parameters = {
            ...DU,
            speed: null !== (cU = DU.speed) && void 0 !== cU ? cU : .5,
            Tz: QU.d.clamp(DU.Tz, .05, 1),
            label: null !== (yU = DU.label) && void 0 !== yU ? yU : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (AU = DU.icon) && void 0 !== AU ? AU : null,
            scale: null !== (FU = DU.scale) && void 0 !== FU ? FU : 1,
            rotation: null !== (oU = DU.rotation) && void 0 !== oU ? oU : 0
          }, this.speed = this.parameters.speed, this.Tz = this.parameters.Tz, this.startTime = Date.now()
        }
        handleMouseInput(UU) {
          if (UU) {
            this.updateMarkerPosition();
            const UU = Math.abs(this.markerPosition - .5) <= this.Tz / 2;
            this.complete(UU)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const UU = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = UU <= .5 ? 2 * UU : 2 - 2 * UU
        }
        complete(UU) {
          this.isCompleted = !0, this.resolveRequest(UU)
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
        constructor(UU, XU, zU) {
          this.resolveRequest = XU, this.tearDownNotification = zU, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = UU, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(UU) {
          if (!UU || this.isCompleted) return;
          const XU = this.getOuterCircleProgress();
          if (XU <= this.parameters.zc && XU >= -this.parameters.zc) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Uc) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, AU.P)(this.parameters.yc) && this.misses > this.parameters.yc ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.zc && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Xc
        }
        complete(UU) {
          this.isCompleted = !0, this.resolveRequest(UU)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              Uc: this.parameters.Uc,
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

    function kU() {
      (0, EU.f)(FU.F.Qte, tU ? FU.F.Qte : 0), tU ? yU.k.UY("qteStateUpdated", tU.getState()) : yU.k.UY("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class GU {
      constructor(UU, XU) {
        this.resultPromise = UU, this.tearDownQTE = XU
      }
      static create(UU, XU, zU) {
        const cU = Promise.race([UU, XU]);
        return new GU(cU, zU)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class BU {
      static queueQTE(UU, XU, zU) {
        let cU, yU;
        const QU = new Promise((UU => {
            cU = UU
          })),
          AU = new Promise((UU => {
            yU = () => {
              UU("qteTornDown")
            }
          })),
          FU = Promise.race([QU, AU]).then((() => {})),
          oU = new YU(UU, XU, zU, yU, FU, cU);
        return aU.set(UU, oU), pU.enqueue(oU), tU || this.processNextQTE(), GU.create(QU, AU, yU)
      }
      static async processNextQTE() {
        if (tU || pU.kY()) return void(pU.kY() && tU && (tU = null, kU()));
        const UU = await pU.dequeue();
        if (!aU.has(UU.id)) return void await this.processNextQTE();
        aU.delete(UU.id);
        const XU = new IU(UU.id, UU.type, UU.parameters, UU.resolveRequest, UU.onDonePromise, UU.tearDownNotification);
        tU = XU, kU();
        try {
          await XU.waitUntilDone()
        } catch (zU) {
          console.error("Error while waiting for QTE to resolve:", zU.stack)
        }
        tU === XU && (tU.cleanup(), tU = null, kU()), await this.processNextQTE()
      }
      static cancelQTE(UU) {
        if (tU && tU.id === UU) return tU.tearDown(), tU = null, kU(), void this.processNextQTE();
        const XU = aU.get(UU);
        XU && (aU.delete(UU), XU.tearDownNotification())
      }
      static getCurrentState() {
        return tU ? tU.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        tU && (tU.tearDown(), tU = null), aU.forEach(((UU, XU) => {
          this.cancelQTE(XU)
        })), pU.emptyQueue(), aU.clear(), kU()
      }
    }
  },
  5312: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => kU,
      D: () => AU,
      H: () => FU,
      L: () => dU,
      b: () => WU,
      c: () => BU,
      f: () => qU,
      h: () => wU,
      j: () => gU,
      m: () => RU,
      n: () => GU,
      r: () => ZU,
      t: () => LU,
      x: () => eU,
      y: () => CU
    });
    var cU = zU(5315);
    const yU = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let QU = yU;

    function AU(UU) {
      QU = null !== UU && void 0 !== UU ? UU : yU
    }

    function FU() {
      return QU
    }
    const oU = new Set,
      DU = new Set;
    let EU = -1;
    const YU = new Set,
      NU = new Set;
    let IU = 0,
      pU = 0;
    const aU = new Set,
      tU = new Set;

    function gU(UU) {
      return oU.add(UU), () => {
        oU.delete(UU)
      }
    }

    function kU(UU, XU) {
      for (const cU of oU) try {
        cU(UU)
      } catch (zU) {
        XU(zU)
      }
    }

    function GU(UU) {
      return DU.add(UU), () => {
        DU.delete(UU)
      }
    }

    function BU(UU, XU) {
      const zU = EU < 0 ? 0 : UU - EU;
      EU = UU;
      for (const yU of DU) try {
        yU(zU)
      } catch (cU) {
        XU(cU)
      }
    }

    function ZU(UU) {
      return YU.add(UU), () => {
        YU.delete(UU)
      }
    }

    function RU(UU) {
      return NU.add(UU), () => {
        NU.delete(UU)
      }
    }
    let PU = 0;

    function WU(UU) {
      PU += UU
    }

    function dU() {
      const UU = PU;
      return PU = 0, UU
    }

    function LU(UU) {
      return aU.add(UU), () => {
        aU.delete(UU)
      }
    }

    function eU(UU) {
      return tU.add(UU), () => {
        tU.delete(UU)
      }
    }

    function CU() {
      IU = 0, pU = 0, EU = -1
    }

    function wU(UU, XU) {
      if ("paced" === UU) return pU += XU, null;
      if ("drawn" !== UU && "skipped" !== UU) return null;
      const zU = XU + pU;
      return pU = 0, zU
    }

    function qU(UU, XU, zU, yU) {
      const QU = (0, cU.j)(XU),
        AU = UU > 0 ? performance.now() : 0;
      for (let cU = 0; cU < UU; cU++)
        for (const UU of aU) try {
          UU()
        } catch (FU) {
          yU(FU)
        }
      if (UU > 0 && WU(performance.now() - AU), null !== zU) {
        for (const UU of YU) try {
          UU(zU)
        } catch (FU) {
          yU(FU)
        }
        IU += zU
      }
      if ("drawn" === XU) {
        const UU = IU;
        IU = 0;
        for (const XU of NU) try {
          XU(UU)
        } catch (FU) {
          yU(FU)
        }
      }
      for (const cU of tU) try {
        cU(UU, QU)
      } catch (FU) {
        yU(FU)
      }
    }
  },
  5329: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU,
      g: () => QU,
      k: () => FU
    });
    var cU = zU(2580),
      yU = zU(5336);

    function QU(UU) {
      let {
        action: XU,
        flags: zU
      } = UU;
      return "mid-fire" === XU && 0 !== (zU & cU.c.AltLeftClick)
    }
    const AU = new Set;

    function FU(UU) {
      return AU.add(UU), () => {
        AU.delete(UU)
      }
    }

    function oU(UU) {
      const XU = yU.c[255 & UU];
      if (void 0 === XU) return;
      const zU = UU >>> 8 & 255,
        QU = {
          action: XU,
          down: 0 !== (zU & cU.c.Down),
          flags: zU,
          press: UU >>> 16
        };
      for (const cU of AU) cU(QU)
    }
  },
  5336: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      g: () => QU,
      h: () => AU,
      j: () => cU,
      n: () => FU
    });
    const cU = {
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
      yU = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      QU = {
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
      AU = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      FU = [16]
  },
  5342: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      e: () => AU,
      f: () => DU
    });
    var cU = zU(2580),
      yU = zU(2588);
    const QU = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function AU(UU) {
      return UU instanceof HTMLElement && (!!(UU.isContentEditable || UU instanceof HTMLTextAreaElement || UU instanceof HTMLSelectElement) || UU instanceof HTMLInputElement && !QU.has(UU.type))
    }

    function FU(UU) {
      let XU = null;
      const zU = zU => {
          const yU = AU(zU);
          yU !== XU && (XU = yU, UU(cU.j.UiCapture, cU.F.Keyboard, 0, 0, yU ? cU.F.Keyboard : 0))
        },
        yU = UU => {
          zU(UU.target)
        },
        QU = UU => {
          zU(UU.relatedTarget)
        },
        FU = () => {
          zU(document.activeElement)
        },
        oU = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", yU, oU), document.addEventListener("focusout", QU, oU), document.addEventListener("keydown", FU, oU), zU(document.activeElement), () => {
        document.removeEventListener("focusin", yU, oU), document.removeEventListener("focusout", QU, oU), document.removeEventListener("keydown", FU, oU)
      }
    }
    const oU = new Map;

    function DU(UU, XU) {
      var zU;
      let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      oU.set(cU, (null !== (zU = oU.get(cU)) && void 0 !== zU ? zU : 0) & ~UU | XU & UU);
      let QU = 0;
      for (const yU of oU.values()) QU |= yU;
      return (0, yU.J)(UU, QU & UU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);