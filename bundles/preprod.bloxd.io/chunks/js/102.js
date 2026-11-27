export const id = 102;
export const ids = [102];
export const modules = {
  5525: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => MW,
      f: () => UW
    });
    var mW = OW(1335),
      EW = OW(27);
    var NW = OW(344);
    var PW = OW(643);
    var LW = OW(3305),
      cW = OW(5533),
      wW = OW(5560),
      tW = OW(5575);
    class ZW {
      constructor(WW, iW, OW, mW, EW, NW) {
        this.id = WW, this.type = iW, this.parameters = OW, this.tearDownNotification = mW, this.onDonePromise = EW, this.resolveRequest = NW
      }
    }
    const xW = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class lW {
      constructor(WW, iW, OW, mW, EW, NW) {
        this.id = WW, this.type = iW, this.parameters = OW, this.resolveRequest = mW, this.onDonePromise = EW, this.tearDownNotification = NW, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const PW = UW[iW];
        if (!PW) throw console.error(`No QTE implementation registered for type: ${iW}`), new Error(`No QTE implementation registered for type: ${iW}`);
        this.implementation = new PW(OW, (WW => {
          this.isCompleted = !0, this.resolveRequest(WW)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = EW.l.subscribe("QTEMouseState", (WW => {
          let {
            isDown: iW
          } = WW;
          this.isCompleted || this.implementation.handleMouseInput(iW)
        })), this.stopInputActions = (0, wW.g)((WW => {
          this.isCompleted || !xW.has(WW.action) && !(0, wW.f)(WW) || this.implementation.handleMouseInput(WW.down)
        })), this.tickSub = EW.l.subscribe("noaTick", (WW => {
          if (this.isCompleted) return;
          const iW = WW / 1e3;
          this.implementation.handleTick(iW)
        })), this.stopShellTicks = (0, cW.x)((() => {
          this.isCompleted || this.implementation.handleTick(LW.t / 1e3)
        }))
      }
      cleanup() {
        var WW, iW;
        this.mouseSub && (EW.l.unsubscribe(this.mouseSub), this.mouseSub = null), null === (WW = this.stopInputActions) || void 0 === WW || WW.call(this), this.stopInputActions = null, null === (iW = this.stopShellTicks) || void 0 === iW || iW.call(this), this.stopShellTicks = null, this.tickSub && (EW.l.unsubscribe(this.tickSub), this.tickSub = null)
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
    const AW = new mW.d,
      bW = new Map;
    let jW = null;
    const UW = {
      progressBar: class {
        constructor(WW, iW, OW) {
          var mW, EW, NW, PW;
          this.resolveRequest = iW, this.tearDownNotification = OW, this.progress = 0, this.KN = void 0, this.SN = void 0, this.YN = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const LW = WW;
          this.KN = null !== (mW = LW.KN) && void 0 !== mW ? mW : .075, this.SN = null !== (EW = LW.SN) && void 0 !== EW ? EW : 1, this.progress = null !== (NW = LW.MN) && void 0 !== NW ? NW : 30, this.YN = null !== (PW = LW.YN) && void 0 !== PW && PW, this.parameters = LW
        }
        handleMouseInput(WW) {
          WW && !this.isCompleted && (this.clickCount++, this.progress += this.SN, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.KN, this.YN && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(WW) {
          this.isCompleted = !0, this.resolveRequest(WW)
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
        constructor(WW, iW, OW) {
          var mW;
          this.resolveRequest = iW, this.tearDownNotification = OW, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = WW, this.timeWindowMs = null !== (mW = this.parameters.JN) && void 0 !== mW ? mW : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(WW) {
          if (!WW || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(WW) {
          this.isCompleted = !0, this.resolveRequest(WW)
        }
        getState() {
          const WW = Date.now() - this.startTime,
            iW = Math.max(0, this.timeWindowMs - WW);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: iW,
              JN: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(WW, iW, OW) {
          var mW;
          this.resolveRequest = iW, this.tearDownNotification = OW, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const EW = WW;
          this.parameters = {
            ...EW,
            uN: NW.e.clamp(EW.uN, .05, 1)
          }, this.progress = null !== (mW = EW.MN) && void 0 !== mW ? mW : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(WW) {
          this.isMouseDown = WW
        }
        handleTick(WW) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(WW))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const WW = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += WW * this.parameters.oN * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const WW = NW.e.clamp(1 - .7 * this.parameters.dN, 0, 1.4);
          return Math.floor(60 * WW + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.eN : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = NW.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const WW = this.parameters.uN / 2,
            iW = WW,
            OW = 1 - WW;
          this.catchZonePosition <= iW ? (this.catchZonePosition = iW, this.catchZoneVelocity = 0) : this.catchZonePosition >= OW && (this.catchZonePosition = OW, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const WW = this.parameters.uN / 2;
          return this.moverPosition >= this.catchZonePosition - WW && this.moverPosition <= this.catchZonePosition + WW
        }
        updateProgress(WW) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.vN * WW : this.progress -= this.parameters.gN * WW, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.YN && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(WW) {
          this.isCompleted = !0, this.resolveRequest(WW)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              uN: this.parameters.uN,
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
        constructor(WW, iW, OW) {
          var mW, EW, PW, LW, cW;
          this.resolveRequest = iW, this.tearDownNotification = OW, this.startTime = void 0, this.speed = void 0, this.VN = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const wW = WW;
          this.parameters = {
            ...wW,
            speed: null !== (mW = wW.speed) && void 0 !== mW ? mW : .5,
            VN: NW.e.clamp(wW.VN, .05, 1),
            label: null !== (EW = wW.label) && void 0 !== EW ? EW : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (PW = wW.icon) && void 0 !== PW ? PW : null,
            scale: null !== (LW = wW.scale) && void 0 !== LW ? LW : 1,
            rotation: null !== (cW = wW.rotation) && void 0 !== cW ? cW : 0
          }, this.speed = this.parameters.speed, this.VN = this.parameters.VN, this.startTime = Date.now()
        }
        handleMouseInput(WW) {
          if (WW) {
            this.updateMarkerPosition();
            const WW = Math.abs(this.markerPosition - .5) <= this.VN / 2;
            this.complete(WW)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const WW = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = WW <= .5 ? 2 * WW : 2 - 2 * WW
        }
        complete(WW) {
          this.isCompleted = !0, this.resolveRequest(WW)
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
        constructor(WW, iW, OW) {
          this.resolveRequest = iW, this.tearDownNotification = OW, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = WW, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(WW) {
          if (!WW || this.isCompleted) return;
          const iW = this.getOuterCircleProgress();
          if (iW <= this.parameters.XN && iW >= -this.parameters.XN) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.fN) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, PW.K)(this.parameters.BN) && this.misses > this.parameters.BN ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.XN && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.CN
        }
        complete(WW) {
          this.isCompleted = !0, this.resolveRequest(WW)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              fN: this.parameters.fN,
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

    function kW() {
      (0, tW.j)(LW.y.Qte, jW ? LW.y.Qte : 0), jW ? EW.l.iZ("qteStateUpdated", jW.getState()) : EW.l.iZ("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class sW {
      constructor(WW, iW) {
        this.resultPromise = WW, this.tearDownQTE = iW
      }
      static create(WW, iW, OW) {
        const mW = Promise.race([WW, iW]);
        return new sW(mW, OW)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class MW {
      static queueQTE(WW, iW, OW) {
        let mW, EW;
        const NW = new Promise((WW => {
            mW = WW
          })),
          PW = new Promise((WW => {
            EW = () => {
              WW("qteTornDown")
            }
          })),
          LW = Promise.race([NW, PW]).then((() => {})),
          cW = new ZW(WW, iW, OW, EW, LW, mW);
        return bW.set(WW, cW), AW.enqueue(cW), jW || this.processNextQTE(), sW.create(NW, PW, EW)
      }
      static async processNextQTE() {
        if (jW || AW.sZ()) return void(AW.sZ() && jW && (jW = null, kW()));
        const WW = await AW.dequeue();
        if (!bW.has(WW.id)) return void await this.processNextQTE();
        bW.delete(WW.id);
        const iW = new lW(WW.id, WW.type, WW.parameters, WW.resolveRequest, WW.onDonePromise, WW.tearDownNotification);
        jW = iW, kW();
        try {
          await iW.waitUntilDone()
        } catch (OW) {
          console.error("Error while waiting for QTE to resolve:", OW.stack)
        }
        jW === iW && (jW.cleanup(), jW = null, kW()), await this.processNextQTE()
      }
      static cancelQTE(WW) {
        if (jW && jW.id === WW) return jW.tearDown(), jW = null, kW(), void this.processNextQTE();
        const iW = bW.get(WW);
        iW && (bW.delete(WW), iW.tearDownNotification())
      }
      static getCurrentState() {
        return jW ? jW.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        jW && (jW.tearDown(), jW = null), bW.forEach(((WW, iW) => {
          this.cancelQTE(iW)
        })), AW.emptyQueue(), bW.clear(), kW()
      }
    }
  },
  5533: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => hW,
      D: () => HW,
      F: () => kW,
      G: () => PW,
      K: () => LW,
      N: () => TW,
      e: () => yW,
      g: () => MW,
      k: () => uW,
      m: () => nW,
      n: () => UW,
      o: () => SW,
      r: () => sW,
      v: () => KW,
      x: () => JW
    });
    var mW = OW(5540);
    const EW = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let NW = EW;

    function PW(WW) {
      NW = null !== WW && void 0 !== WW ? WW : EW
    }

    function LW() {
      return NW
    }
    const cW = new Set,
      wW = new Set;
    let tW = -1;
    const ZW = new Set,
      xW = new Set;
    let lW = 0,
      AW = 0;
    const bW = new Set,
      jW = new Set;

    function UW(WW) {
      return cW.add(WW), () => {
        cW.delete(WW)
      }
    }

    function kW(WW, iW) {
      for (const mW of cW) try {
        mW(WW)
      } catch (OW) {
        iW(OW)
      }
    }

    function sW(WW) {
      return wW.add(WW), () => {
        wW.delete(WW)
      }
    }

    function MW(WW, iW) {
      const OW = tW < 0 ? 0 : WW - tW;
      tW = WW;
      for (const EW of wW) try {
        EW(OW)
      } catch (mW) {
        iW(mW)
      }
    }

    function KW(WW) {
      return ZW.add(WW), () => {
        ZW.delete(WW)
      }
    }

    function SW(WW) {
      return xW.add(WW), () => {
        xW.delete(WW)
      }
    }
    let YW = 0;

    function yW(WW) {
      YW += WW
    }

    function TW() {
      const WW = YW;
      return YW = 0, WW
    }

    function JW(WW) {
      return bW.add(WW), () => {
        bW.delete(WW)
      }
    }

    function hW(WW) {
      return jW.add(WW), () => {
        jW.delete(WW)
      }
    }

    function HW() {
      lW = 0, AW = 0, tW = -1
    }

    function nW(WW, iW) {
      if ("paced" === WW) return AW += iW, null;
      if ("drawn" !== WW && "skipped" !== WW) return null;
      const OW = iW + AW;
      return AW = 0, OW
    }

    function uW(WW, iW, OW, EW) {
      const NW = (0, mW.g)(iW),
        PW = WW > 0 ? performance.now() : 0;
      for (let mW = 0; mW < WW; mW++)
        for (const WW of bW) try {
          WW()
        } catch (LW) {
          EW(LW)
        }
      if (WW > 0 && yW(performance.now() - PW), null !== OW) {
        for (const WW of ZW) try {
          WW(OW)
        } catch (LW) {
          EW(LW)
        }
        lW += OW
      }
      if ("drawn" === iW) {
        const WW = lW;
        lW = 0;
        for (const iW of xW) try {
          iW(WW)
        } catch (LW) {
          EW(LW)
        }
      }
      for (const mW of jW) try {
        mW(WW, NW)
      } catch (LW) {
        EW(LW)
      }
    }
  },
  5560: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW,
      f: () => NW,
      g: () => LW
    });
    var mW = OW(3305),
      EW = OW(5568);

    function NW(WW) {
      let {
        action: iW,
        flags: OW
      } = WW;
      return "mid-fire" === iW && 0 !== (OW & mW.e.AltLeftClick)
    }
    const PW = new Set;

    function LW(WW) {
      return PW.add(WW), () => {
        PW.delete(WW)
      }
    }

    function cW(WW) {
      const iW = EW.e[255 & WW];
      if (void 0 === iW) return;
      const OW = WW >>> 8 & 255,
        NW = {
          action: iW,
          down: 0 !== (OW & mW.e.Down),
          flags: OW,
          press: WW >>> 16
        };
      for (const mW of PW) mW(NW)
    }
  },
  5568: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      i: () => NW,
      m: () => PW,
      n: () => mW,
      q: () => LW
    });
    const mW = {
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
        TouchZoom: 191,
        TouchAction1: 192,
        TouchAction2: 193,
        TouchAction3: 194,
        TouchAttack: 195,
        TouchUse: 196
      },
      EW = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      NW = {
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
      PW = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      LW = [16]
  },
  5575: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      h: () => PW,
      j: () => wW
    });
    var mW = OW(3305),
      EW = OW(3308);
    const NW = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function PW(WW) {
      return WW instanceof HTMLElement && (!!(WW.isContentEditable || WW instanceof HTMLTextAreaElement || WW instanceof HTMLSelectElement) || WW instanceof HTMLInputElement && !NW.has(WW.type))
    }

    function LW(WW) {
      let iW = null;
      const OW = OW => {
          const EW = PW(OW);
          EW !== iW && (iW = EW, WW(mW.k.UiCapture, mW.y.Keyboard, 0, 0, EW ? mW.y.Keyboard : 0))
        },
        EW = WW => {
          OW(WW.target)
        },
        NW = WW => {
          OW(WW.relatedTarget)
        },
        LW = () => {
          OW(document.activeElement)
        },
        cW = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", EW, cW), document.addEventListener("focusout", NW, cW), document.addEventListener("keydown", LW, cW), OW(document.activeElement), () => {
        document.removeEventListener("focusin", EW, cW), document.removeEventListener("focusout", NW, cW), document.removeEventListener("keydown", LW, cW)
      }
    }
    const cW = new Map;

    function wW(WW, iW) {
      var OW;
      let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      cW.set(mW, (null !== (OW = cW.get(mW)) && void 0 !== OW ? OW : 0) & ~WW | iW & WW);
      let NW = 0;
      for (const EW of cW.values()) NW |= EW;
      return (0, EW.z)(WW, NW & WW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);