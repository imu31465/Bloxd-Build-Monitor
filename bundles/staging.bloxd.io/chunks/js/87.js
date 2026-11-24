export const id = 87;
export const ids = [87];
export const modules = {
  4879: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => iT,
      e: () => vT
    });
    var WT = mT(1408),
      zT = mT(31);
    var MT = mT(366);
    var gT = mT(653);
    var nT = mT(2522),
      HT = mT(4883),
      kT = mT(4906),
      jT = mT(4915);
    class lT {
      constructor(TT, UT, mT, WT, zT, MT) {
        this.id = TT, this.type = UT, this.parameters = mT, this.tearDownNotification = WT, this.onDonePromise = zT, this.resolveRequest = MT
      }
    }
    const LT = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class pT {
      constructor(TT, UT, mT, WT, zT, MT) {
        this.id = TT, this.type = UT, this.parameters = mT, this.resolveRequest = WT, this.onDonePromise = zT, this.tearDownNotification = MT, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const gT = vT[UT];
        if (!gT) throw console.error(`No QTE implementation registered for type: ${UT}`), new Error(`No QTE implementation registered for type: ${UT}`);
        this.implementation = new gT(mT, (TT => {
          this.isCompleted = !0, this.resolveRequest(TT)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = zT.j.subscribe("QTEMouseState", (TT => {
          let {
            isDown: UT
          } = TT;
          this.isCompleted || this.implementation.handleMouseInput(UT)
        })), this.stopInputActions = (0, kT.h)((TT => {
          this.isCompleted || !LT.has(TT.action) && !(0, kT.f)(TT) || this.implementation.handleMouseInput(TT.down)
        })), this.tickSub = zT.j.subscribe("noaTick", (TT => {
          if (this.isCompleted) return;
          const UT = TT / 1e3;
          this.implementation.handleTick(UT)
        })), this.stopShellTicks = (0, HT.C)((() => {
          this.isCompleted || this.implementation.handleTick(nT.u / 1e3)
        }))
      }
      cleanup() {
        var TT, UT;
        this.mouseSub && (zT.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (TT = this.stopInputActions) || void 0 === TT || TT.call(this), this.stopInputActions = null, null === (UT = this.stopShellTicks) || void 0 === UT || UT.call(this), this.stopShellTicks = null, this.tickSub && (zT.j.unsubscribe(this.tickSub), this.tickSub = null)
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
    const BT = new WT.d,
      ZT = new Map;
    let cT = null;
    const vT = {
      progressBar: class {
        constructor(TT, UT, mT) {
          var WT, zT, MT, gT;
          this.resolveRequest = UT, this.tearDownNotification = mT, this.progress = 0, this.DT = void 0, this.oT = void 0, this.AT = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const nT = TT;
          this.DT = null !== (WT = nT.DT) && void 0 !== WT ? WT : .075, this.oT = null !== (zT = nT.oT) && void 0 !== zT ? zT : 1, this.progress = null !== (MT = nT.hT) && void 0 !== MT ? MT : 30, this.AT = null !== (gT = nT.AT) && void 0 !== gT && gT, this.parameters = nT
        }
        handleMouseInput(TT) {
          TT && !this.isCompleted && (this.clickCount++, this.progress += this.oT, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.DT, this.AT && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(TT) {
          this.isCompleted = !0, this.resolveRequest(TT)
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
        constructor(TT, UT, mT) {
          var WT;
          this.resolveRequest = UT, this.tearDownNotification = mT, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = TT, this.timeWindowMs = null !== (WT = this.parameters.WU) && void 0 !== WT ? WT : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(TT) {
          if (!TT || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(TT) {
          this.isCompleted = !0, this.resolveRequest(TT)
        }
        getState() {
          const TT = Date.now() - this.startTime,
            UT = Math.max(0, this.timeWindowMs - TT);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: UT,
              WU: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(TT, UT, mT) {
          var WT;
          this.resolveRequest = UT, this.tearDownNotification = mT, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const zT = TT;
          this.parameters = {
            ...zT,
            nU: MT.e.clamp(zT.nU, .05, 1)
          }, this.progress = null !== (WT = zT.hT) && void 0 !== WT ? WT : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(TT) {
          this.isMouseDown = TT
        }
        handleTick(TT) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(TT))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const TT = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += TT * this.parameters.HU * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const TT = MT.e.clamp(1 - .7 * this.parameters.kU, 0, 1.4);
          return Math.floor(60 * TT + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.jU : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = MT.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const TT = this.parameters.nU / 2,
            UT = TT,
            mT = 1 - TT;
          this.catchZonePosition <= UT ? (this.catchZonePosition = UT, this.catchZoneVelocity = 0) : this.catchZonePosition >= mT && (this.catchZonePosition = mT, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const TT = this.parameters.nU / 2;
          return this.moverPosition >= this.catchZonePosition - TT && this.moverPosition <= this.catchZonePosition + TT
        }
        updateProgress(TT) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.lU * TT : this.progress -= this.parameters.LU * TT, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.AT && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(TT) {
          this.isCompleted = !0, this.resolveRequest(TT)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              nU: this.parameters.nU,
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
        constructor(TT, UT, mT) {
          var WT, zT, gT, nT, HT;
          this.resolveRequest = UT, this.tearDownNotification = mT, this.startTime = void 0, this.speed = void 0, this.BU = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const kT = TT;
          this.parameters = {
            ...kT,
            speed: null !== (WT = kT.speed) && void 0 !== WT ? WT : .5,
            BU: MT.e.clamp(kT.BU, .05, 1),
            label: null !== (zT = kT.label) && void 0 !== zT ? zT : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (gT = kT.icon) && void 0 !== gT ? gT : null,
            scale: null !== (nT = kT.scale) && void 0 !== nT ? nT : 1,
            rotation: null !== (HT = kT.rotation) && void 0 !== HT ? HT : 0
          }, this.speed = this.parameters.speed, this.BU = this.parameters.BU, this.startTime = Date.now()
        }
        handleMouseInput(TT) {
          if (TT) {
            this.updateMarkerPosition();
            const TT = Math.abs(this.markerPosition - .5) <= this.BU / 2;
            this.complete(TT)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const TT = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = TT <= .5 ? 2 * TT : 2 - 2 * TT
        }
        complete(TT) {
          this.isCompleted = !0, this.resolveRequest(TT)
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
        constructor(TT, UT, mT) {
          this.resolveRequest = UT, this.tearDownNotification = mT, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = TT, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(TT) {
          if (!TT || this.isCompleted) return;
          const UT = this.getOuterCircleProgress();
          if (UT <= this.parameters.fU && UT >= -this.parameters.fU) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.cU) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, gT.E)(this.parameters.qU) && this.misses > this.parameters.qU ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.fU && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.vU
        }
        complete(TT) {
          this.isCompleted = !0, this.resolveRequest(TT)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              cU: this.parameters.cU,
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

    function fT() {
      (0, jT.g)(nT.y.Qte, cT ? nT.y.Qte : 0), cT ? zT.j.EZ("qteStateUpdated", cT.getState()) : zT.j.EZ("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class qT {
      constructor(TT, UT) {
        this.resultPromise = TT, this.tearDownQTE = UT
      }
      static create(TT, UT, mT) {
        const WT = Promise.race([TT, UT]);
        return new qT(WT, mT)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class iT {
      static queueQTE(TT, UT, mT) {
        let WT, zT;
        const MT = new Promise((TT => {
            WT = TT
          })),
          gT = new Promise((TT => {
            zT = () => {
              TT("qteTornDown")
            }
          })),
          nT = Promise.race([MT, gT]).then((() => {})),
          HT = new lT(TT, UT, mT, zT, nT, WT);
        return ZT.set(TT, HT), BT.enqueue(HT), cT || this.processNextQTE(), qT.create(MT, gT, zT)
      }
      static async processNextQTE() {
        if (cT || BT.TB()) return void(BT.TB() && cT && (cT = null, fT()));
        const TT = await BT.dequeue();
        if (!ZT.has(TT.id)) return void await this.processNextQTE();
        ZT.delete(TT.id);
        const UT = new pT(TT.id, TT.type, TT.parameters, TT.resolveRequest, TT.onDonePromise, TT.tearDownNotification);
        cT = UT, fT();
        try {
          await UT.waitUntilDone()
        } catch (mT) {
          console.error("Error while waiting for QTE to resolve:", mT.stack)
        }
        cT === UT && (cT.cleanup(), cT = null, fT()), await this.processNextQTE()
      }
      static cancelQTE(TT) {
        if (cT && cT.id === TT) return cT.tearDown(), cT = null, fT(), void this.processNextQTE();
        const UT = ZT.get(TT);
        UT && (ZT.delete(TT), UT.tearDownNotification())
      }
      static getCurrentState() {
        return cT ? cT.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        cT && (cT.tearDown(), cT = null), ZT.forEach(((TT, UT) => {
          this.cancelQTE(UT)
        })), BT.emptyQueue(), ZT.clear(), fT()
      }
    }
  },
  4883: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => bT,
      C: () => xT,
      G: () => dT,
      I: () => wT,
      K: () => fT,
      L: () => gT,
      N: () => nT,
      Q: () => JT,
      c: () => YT,
      g: () => iT,
      k: () => aT,
      n: () => tT,
      r: () => vT,
      u: () => OT,
      x: () => qT
    });
    var WT = mT(4890);
    const zT = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let MT = zT;

    function gT(TT) {
      MT = null !== TT && void 0 !== TT ? TT : zT
    }

    function nT() {
      return MT
    }
    const HT = new Set,
      kT = new Set;
    let jT = -1;
    const lT = new Set,
      LT = new Set;
    let pT = 0,
      BT = 0;
    const ZT = new Set,
      cT = new Set;

    function vT(TT) {
      return HT.add(TT), () => {
        HT.delete(TT)
      }
    }

    function fT(TT, UT) {
      for (const WT of HT) try {
        WT(TT)
      } catch (mT) {
        UT(mT)
      }
    }

    function qT(TT) {
      return kT.add(TT), () => {
        kT.delete(TT)
      }
    }

    function iT(TT, UT) {
      const mT = jT < 0 ? 0 : TT - jT;
      jT = TT;
      for (const zT of kT) try {
        zT(mT)
      } catch (WT) {
        UT(WT)
      }
    }

    function bT(TT) {
      return lT.add(TT), () => {
        lT.delete(TT)
      }
    }

    function OT(TT) {
      return LT.add(TT), () => {
        LT.delete(TT)
      }
    }
    let eT = 0;

    function YT(TT) {
      eT += TT
    }

    function JT() {
      const TT = eT;
      return eT = 0, TT
    }

    function xT(TT) {
      return ZT.add(TT), () => {
        ZT.delete(TT)
      }
    }

    function dT(TT) {
      return cT.add(TT), () => {
        cT.delete(TT)
      }
    }

    function wT() {
      pT = 0, BT = 0, jT = -1
    }

    function tT(TT, UT) {
      if ("paced" === TT) return BT += UT, null;
      if ("drawn" !== TT && "skipped" !== TT) return null;
      const mT = UT + BT;
      return BT = 0, mT
    }

    function aT(TT, UT, mT, zT) {
      const MT = (0, WT.g)(UT),
        gT = TT > 0 ? performance.now() : 0;
      for (let WT = 0; WT < TT; WT++)
        for (const TT of ZT) try {
          TT()
        } catch (nT) {
          zT(nT)
        }
      if (TT > 0 && YT(performance.now() - gT), null !== mT) {
        for (const TT of lT) try {
          TT(mT)
        } catch (nT) {
          zT(nT)
        }
        pT += mT
      }
      if ("drawn" === UT) {
        const TT = pT;
        pT = 0;
        for (const UT of LT) try {
          UT(TT)
        } catch (nT) {
          zT(nT)
        }
      }
      for (const WT of cT) try {
        WT(TT, MT)
      } catch (nT) {
        zT(nT)
      }
    }
  },
  4906: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => HT,
      f: () => MT,
      h: () => nT
    });
    var WT = mT(2522),
      zT = mT(4912);

    function MT(TT) {
      let {
        action: UT,
        flags: mT
      } = TT;
      return "mid-fire" === UT && 0 !== (mT & WT.b.AltLeftClick)
    }
    const gT = new Set;

    function nT(TT) {
      return gT.add(TT), () => {
        gT.delete(TT)
      }
    }

    function HT(TT) {
      const UT = zT.c[255 & TT];
      if (void 0 === UT) return;
      const mT = TT >>> 8 & 255,
        MT = {
          action: UT,
          down: 0 !== (mT & WT.b.Down),
          flags: mT,
          press: TT >>> 16
        };
      for (const WT of gT) WT(MT)
    }
  },
  4912: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      e: () => MT,
      f: () => gT,
      g: () => WT,
      i: () => nT
    });
    const WT = {
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
      zT = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      MT = {
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
      gT = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      nT = [16]
  },
  4915: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      e: () => gT,
      g: () => kT
    });
    var WT = mT(2522),
      zT = mT(2525);
    const MT = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function gT(TT) {
      return TT instanceof HTMLElement && (!!(TT.isContentEditable || TT instanceof HTMLTextAreaElement || TT instanceof HTMLSelectElement) || TT instanceof HTMLInputElement && !MT.has(TT.type))
    }

    function nT(TT) {
      let UT = null;
      const mT = mT => {
          const zT = gT(mT);
          zT !== UT && (UT = zT, TT(WT.g.UiCapture, WT.y.Keyboard, 0, 0, zT ? WT.y.Keyboard : 0))
        },
        zT = TT => {
          mT(TT.target)
        },
        MT = TT => {
          mT(TT.relatedTarget)
        },
        nT = () => {
          mT(document.activeElement)
        },
        HT = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", zT, HT), document.addEventListener("focusout", MT, HT), document.addEventListener("keydown", nT, HT), mT(document.activeElement), () => {
        document.removeEventListener("focusin", zT, HT), document.removeEventListener("focusout", MT, HT), document.removeEventListener("keydown", nT, HT)
      }
    }
    const HT = new Map;

    function kT(TT, UT) {
      var mT;
      let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      HT.set(WT, (null !== (mT = HT.get(WT)) && void 0 !== mT ? mT : 0) & ~TT | UT & TT);
      let MT = 0;
      for (const zT of HT.values()) MT |= zT;
      return (0, zT.A)(TT, MT & TT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);