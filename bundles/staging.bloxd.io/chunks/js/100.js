export const id = 100;
export const ids = [100];
export const modules = {
  5273: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => tV,
      g: () => BV
    });
    var JV = xV(1375),
      YV = xV(32);
    var UV = xV(375);
    var yV = xV(657);
    var pV = xV(2660),
      QV = xV(5281),
      nV = xV(5307),
      wV = xV(5319);
    class ZV {
      constructor(VV, eV, xV, JV, YV, UV) {
        this.id = VV, this.type = eV, this.parameters = xV, this.tearDownNotification = JV, this.onDonePromise = YV, this.resolveRequest = UV
      }
    }
    const vV = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class rV {
      constructor(VV, eV, xV, JV, YV, UV) {
        this.id = VV, this.type = eV, this.parameters = xV, this.resolveRequest = JV, this.onDonePromise = YV, this.tearDownNotification = UV, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const yV = BV[eV];
        if (!yV) throw console.error(`No QTE implementation registered for type: ${eV}`), new Error(`No QTE implementation registered for type: ${eV}`);
        this.implementation = new yV(xV, (VV => {
          this.isCompleted = !0, this.resolveRequest(VV)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = YV.h.subscribe("QTEMouseState", (VV => {
          let {
            isDown: eV
          } = VV;
          this.isCompleted || this.implementation.handleMouseInput(eV)
        })), this.stopInputActions = (0, nV.e)((VV => {
          this.isCompleted || !vV.has(VV.action) && !(0, nV.d)(VV) || this.implementation.handleMouseInput(VV.down)
        })), this.tickSub = YV.h.subscribe("noaTick", (VV => {
          if (this.isCompleted) return;
          const eV = VV / 1e3;
          this.implementation.handleTick(eV)
        })), this.stopShellTicks = (0, QV.u)((() => {
          this.isCompleted || this.implementation.handleTick(pV.s / 1e3)
        }))
      }
      cleanup() {
        var VV, eV;
        this.mouseSub && (YV.h.unsubscribe(this.mouseSub), this.mouseSub = null), null === (VV = this.stopInputActions) || void 0 === VV || VV.call(this), this.stopInputActions = null, null === (eV = this.stopShellTicks) || void 0 === eV || eV.call(this), this.stopShellTicks = null, this.tickSub && (YV.h.unsubscribe(this.tickSub), this.tickSub = null)
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
    const kV = new JV.b,
      bV = new Map;
    let EV = null;
    const BV = {
      progressBar: class {
        constructor(VV, eV, xV) {
          var JV, YV, UV, yV;
          this.resolveRequest = eV, this.tearDownNotification = xV, this.progress = 0, this.hJ = void 0, this.lJ = void 0, this.LJ = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const pV = VV;
          this.hJ = null !== (JV = pV.hJ) && void 0 !== JV ? JV : .075, this.lJ = null !== (YV = pV.lJ) && void 0 !== YV ? YV : 1, this.progress = null !== (UV = pV.cJ) && void 0 !== UV ? UV : 30, this.LJ = null !== (yV = pV.LJ) && void 0 !== yV && yV, this.parameters = pV
        }
        handleMouseInput(VV) {
          VV && !this.isCompleted && (this.clickCount++, this.progress += this.lJ, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.hJ, this.LJ && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(VV) {
          this.isCompleted = !0, this.resolveRequest(VV)
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
        constructor(VV, eV, xV) {
          var JV;
          this.resolveRequest = eV, this.tearDownNotification = xV, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = VV, this.timeWindowMs = null !== (JV = this.parameters.KJ) && void 0 !== JV ? JV : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(VV) {
          if (!VV || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(VV) {
          this.isCompleted = !0, this.resolveRequest(VV)
        }
        getState() {
          const VV = Date.now() - this.startTime,
            eV = Math.max(0, this.timeWindowMs - VV);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: eV,
              KJ: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(VV, eV, xV) {
          var JV;
          this.resolveRequest = eV, this.tearDownNotification = xV, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const YV = VV;
          this.parameters = {
            ...YV,
            SJ: UV.b.clamp(YV.SJ, .05, 1)
          }, this.progress = null !== (JV = YV.cJ) && void 0 !== JV ? JV : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(VV) {
          this.isMouseDown = VV
        }
        handleTick(VV) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(VV))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const VV = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += VV * this.parameters.IJ * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const VV = UV.b.clamp(1 - .7 * this.parameters.dJ, 0, 1.4);
          return Math.floor(60 * VV + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.OJ : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = UV.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const VV = this.parameters.SJ / 2,
            eV = VV,
            xV = 1 - VV;
          this.catchZonePosition <= eV ? (this.catchZonePosition = eV, this.catchZoneVelocity = 0) : this.catchZonePosition >= xV && (this.catchZonePosition = xV, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const VV = this.parameters.SJ / 2;
          return this.moverPosition >= this.catchZonePosition - VV && this.moverPosition <= this.catchZonePosition + VV
        }
        updateProgress(VV) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.VY * VV : this.progress -= this.parameters.eY * VV, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.LJ && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(VV) {
          this.isCompleted = !0, this.resolveRequest(VV)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              SJ: this.parameters.SJ,
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
        constructor(VV, eV, xV) {
          var JV, YV, yV, pV, QV;
          this.resolveRequest = eV, this.tearDownNotification = xV, this.startTime = void 0, this.speed = void 0, this.JY = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const nV = VV;
          this.parameters = {
            ...nV,
            speed: null !== (JV = nV.speed) && void 0 !== JV ? JV : .5,
            JY: UV.b.clamp(nV.JY, .05, 1),
            label: null !== (YV = nV.label) && void 0 !== YV ? YV : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (yV = nV.icon) && void 0 !== yV ? yV : null,
            scale: null !== (pV = nV.scale) && void 0 !== pV ? pV : 1,
            rotation: null !== (QV = nV.rotation) && void 0 !== QV ? QV : 0
          }, this.speed = this.parameters.speed, this.JY = this.parameters.JY, this.startTime = Date.now()
        }
        handleMouseInput(VV) {
          if (VV) {
            this.updateMarkerPosition();
            const VV = Math.abs(this.markerPosition - .5) <= this.JY / 2;
            this.complete(VV)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const VV = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = VV <= .5 ? 2 * VV : 2 - 2 * VV
        }
        complete(VV) {
          this.isCompleted = !0, this.resolveRequest(VV)
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
        constructor(VV, eV, xV) {
          this.resolveRequest = eV, this.tearDownNotification = xV, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = VV, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(VV) {
          if (!VV || this.isCompleted) return;
          const eV = this.getOuterCircleProgress();
          if (eV <= this.parameters.pY && eV >= -this.parameters.pY) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.UY) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, yV.J)(this.parameters.QY) && this.misses > this.parameters.QY ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.pY && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.yY
        }
        complete(VV) {
          this.isCompleted = !0, this.resolveRequest(VV)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              UY: this.parameters.UY,
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

    function jV() {
      (0, wV.h)(pV.y.Qte, EV ? pV.y.Qte : 0), EV ? YV.h.QZ("qteStateUpdated", EV.getState()) : YV.h.QZ("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class qV {
      constructor(VV, eV) {
        this.resultPromise = VV, this.tearDownQTE = eV
      }
      static create(VV, eV, xV) {
        const JV = Promise.race([VV, eV]);
        return new qV(JV, xV)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class tV {
      static queueQTE(VV, eV, xV) {
        let JV, YV;
        const UV = new Promise((VV => {
            JV = VV
          })),
          yV = new Promise((VV => {
            YV = () => {
              VV("qteTornDown")
            }
          })),
          pV = Promise.race([UV, yV]).then((() => {})),
          QV = new ZV(VV, eV, xV, YV, pV, JV);
        return bV.set(VV, QV), kV.enqueue(QV), EV || this.processNextQTE(), qV.create(UV, yV, YV)
      }
      static async processNextQTE() {
        if (EV || kV.XZ()) return void(kV.XZ() && EV && (EV = null, jV()));
        const VV = await kV.dequeue();
        if (!bV.has(VV.id)) return void await this.processNextQTE();
        bV.delete(VV.id);
        const eV = new rV(VV.id, VV.type, VV.parameters, VV.resolveRequest, VV.onDonePromise, VV.tearDownNotification);
        EV = eV, jV();
        try {
          await eV.waitUntilDone()
        } catch (xV) {
          console.error("Error while waiting for QTE to resolve:", xV.stack)
        }
        EV === eV && (EV.cleanup(), EV = null, jV()), await this.processNextQTE()
      }
      static cancelQTE(VV) {
        if (EV && EV.id === VV) return EV.tearDown(), EV = null, jV(), void this.processNextQTE();
        const eV = bV.get(VV);
        eV && (bV.delete(VV), eV.tearDownNotification())
      }
      static getCurrentState() {
        return EV ? EV.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        EV && (EV.tearDown(), EV = null), bV.forEach(((VV, eV) => {
          this.cancelQTE(eV)
        })), kV.emptyQueue(), bV.clear(), jV()
      }
    }
  },
  5281: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => zV,
      C: () => jV,
      E: () => yV,
      G: () => pV,
      J: () => NV,
      b: () => AV,
      d: () => tV,
      g: () => WV,
      h: () => GV,
      l: () => BV,
      m: () => TV,
      o: () => qV,
      s: () => FV,
      u: () => XV,
      w: () => MV
    });
    var JV = xV(5288);
    const YV = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let UV = YV;

    function yV(VV) {
      UV = null !== VV && void 0 !== VV ? VV : YV
    }

    function pV() {
      return UV
    }
    const QV = new Set,
      nV = new Set;
    let wV = -1;
    const ZV = new Set,
      vV = new Set;
    let rV = 0,
      kV = 0;
    const bV = new Set,
      EV = new Set;

    function BV(VV) {
      return QV.add(VV), () => {
        QV.delete(VV)
      }
    }

    function jV(VV, eV) {
      for (const JV of QV) try {
        JV(VV)
      } catch (xV) {
        eV(xV)
      }
    }

    function qV(VV) {
      return nV.add(VV), () => {
        nV.delete(VV)
      }
    }

    function tV(VV, eV) {
      const xV = wV < 0 ? 0 : VV - wV;
      wV = VV;
      for (const YV of nV) try {
        YV(xV)
      } catch (JV) {
        eV(JV)
      }
    }

    function FV(VV) {
      return ZV.add(VV), () => {
        ZV.delete(VV)
      }
    }

    function TV(VV) {
      return vV.add(VV), () => {
        vV.delete(VV)
      }
    }
    let PV = 0;

    function AV(VV) {
      PV += VV
    }

    function NV() {
      const VV = PV;
      return PV = 0, VV
    }

    function XV(VV) {
      return bV.add(VV), () => {
        bV.delete(VV)
      }
    }

    function MV(VV) {
      return EV.add(VV), () => {
        EV.delete(VV)
      }
    }

    function zV() {
      rV = 0, kV = 0, wV = -1
    }

    function GV(VV, eV) {
      if ("paced" === VV) return kV += eV, null;
      if ("drawn" !== VV && "skipped" !== VV) return null;
      const xV = eV + kV;
      return kV = 0, xV
    }

    function WV(VV, eV, xV, YV) {
      const UV = (0, JV.e)(eV),
        yV = VV > 0 ? performance.now() : 0;
      for (let JV = 0; JV < VV; JV++)
        for (const VV of bV) try {
          VV()
        } catch (pV) {
          YV(pV)
        }
      if (VV > 0 && AV(performance.now() - yV), null !== xV) {
        for (const VV of ZV) try {
          VV(xV)
        } catch (pV) {
          YV(pV)
        }
        rV += xV
      }
      if ("drawn" === eV) {
        const VV = rV;
        rV = 0;
        for (const eV of vV) try {
          eV(VV)
        } catch (pV) {
          YV(pV)
        }
      }
      for (const JV of EV) try {
        JV(VV, UV)
      } catch (pV) {
        YV(pV)
      }
    }
  },
  5307: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV,
      d: () => UV,
      e: () => pV
    });
    var JV = xV(2660),
      YV = xV(5310);

    function UV(VV) {
      let {
        action: eV,
        flags: xV
      } = VV;
      return "mid-fire" === eV && 0 !== (xV & JV.c.AltLeftClick)
    }
    const yV = new Set;

    function pV(VV) {
      return yV.add(VV), () => {
        yV.delete(VV)
      }
    }

    function QV(VV) {
      const eV = YV.e[255 & VV];
      if (void 0 === eV) return;
      const xV = VV >>> 8 & 255,
        UV = {
          action: eV,
          down: 0 !== (xV & JV.c.Down),
          flags: xV,
          press: VV >>> 16
        };
      for (const JV of yV) JV(UV)
    }
  },
  5310: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      h: () => UV,
      l: () => yV,
      p: () => JV,
      q: () => pV
    });
    const JV = {
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
      YV = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      UV = {
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
      yV = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      pV = [16]
  },
  5319: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      f: () => yV,
      h: () => nV
    });
    var JV = xV(2660),
      YV = xV(2663);
    const UV = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function yV(VV) {
      return VV instanceof HTMLElement && (!!(VV.isContentEditable || VV instanceof HTMLTextAreaElement || VV instanceof HTMLSelectElement) || VV instanceof HTMLInputElement && !UV.has(VV.type))
    }

    function pV(VV) {
      let eV = null;
      const xV = xV => {
          const YV = yV(xV);
          YV !== eV && (eV = YV, VV(JV.i.UiCapture, JV.y.Keyboard, 0, 0, YV ? JV.y.Keyboard : 0))
        },
        YV = VV => {
          xV(VV.target)
        },
        UV = VV => {
          xV(VV.relatedTarget)
        },
        pV = () => {
          xV(document.activeElement)
        },
        QV = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", YV, QV), document.addEventListener("focusout", UV, QV), document.addEventListener("keydown", pV, QV), xV(document.activeElement), () => {
        document.removeEventListener("focusin", YV, QV), document.removeEventListener("focusout", UV, QV), document.removeEventListener("keydown", pV, QV)
      }
    }
    const QV = new Map;

    function nV(VV, eV) {
      var xV;
      let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      QV.set(JV, (null !== (xV = QV.get(JV)) && void 0 !== xV ? xV : 0) & ~VV | eV & VV);
      let UV = 0;
      for (const YV of QV.values()) UV |= YV;
      return (0, YV.D)(VV, UV & VV)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);