export const id = 100;
export const ids = [100];
export const modules = {
  5253: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => PH,
      f: () => MH
    });
    var AH = LH(1280),
      rH = LH(18);
    var SH = LH(317);
    var hH = LH(619);
    var tH = LH(2600),
      zH = LH(5255),
      CH = LH(5275),
      EH = LH(5288);
    class XH {
      constructor(HH, BH, LH, AH, rH, SH) {
        this.id = HH, this.type = BH, this.parameters = LH, this.tearDownNotification = AH, this.onDonePromise = rH, this.resolveRequest = SH
      }
    }
    const GH = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class YH {
      constructor(HH, BH, LH, AH, rH, SH) {
        this.id = HH, this.type = BH, this.parameters = LH, this.resolveRequest = AH, this.onDonePromise = rH, this.tearDownNotification = SH, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const hH = MH[BH];
        if (!hH) throw console.error(`No QTE implementation registered for type: ${BH}`), new Error(`No QTE implementation registered for type: ${BH}`);
        this.implementation = new hH(LH, (HH => {
          this.isCompleted = !0, this.resolveRequest(HH)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = rH.k.subscribe("QTEMouseState", (HH => {
          let {
            isDown: BH
          } = HH;
          this.isCompleted || this.implementation.handleMouseInput(BH)
        })), this.stopInputActions = (0, CH.k)((HH => {
          this.isCompleted || !GH.has(HH.action) && !(0, CH.i)(HH) || this.implementation.handleMouseInput(HH.down)
        })), this.tickSub = rH.k.subscribe("noaTick", (HH => {
          if (this.isCompleted) return;
          const BH = HH / 1e3;
          this.implementation.handleTick(BH)
        })), this.stopShellTicks = (0, zH.v)((() => {
          this.isCompleted || this.implementation.handleTick(tH.o / 1e3)
        }))
      }
      cleanup() {
        var HH, BH;
        this.mouseSub && (rH.k.unsubscribe(this.mouseSub), this.mouseSub = null), null === (HH = this.stopInputActions) || void 0 === HH || HH.call(this), this.stopInputActions = null, null === (BH = this.stopShellTicks) || void 0 === BH || BH.call(this), this.stopShellTicks = null, this.tickSub && (rH.k.unsubscribe(this.tickSub), this.tickSub = null)
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
    const uH = new AH.b,
      QH = new Map;
    let WH = null;
    const MH = {
      progressBar: class {
        constructor(HH, BH, LH) {
          var AH, rH, SH, hH;
          this.resolveRequest = BH, this.tearDownNotification = LH, this.progress = 0, this.nH = void 0, this.FH = void 0, this.DH = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const tH = HH;
          this.nH = null !== (AH = tH.nH) && void 0 !== AH ? AH : .075, this.FH = null !== (rH = tH.FH) && void 0 !== rH ? rH : 1, this.progress = null !== (SH = tH.jH) && void 0 !== SH ? SH : 30, this.DH = null !== (hH = tH.DH) && void 0 !== hH && hH, this.parameters = tH
        }
        handleMouseInput(HH) {
          HH && !this.isCompleted && (this.clickCount++, this.progress += this.FH, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.nH, this.DH && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(HH) {
          this.isCompleted = !0, this.resolveRequest(HH)
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
        constructor(HH, BH, LH) {
          var AH;
          this.resolveRequest = BH, this.tearDownNotification = LH, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = HH, this.timeWindowMs = null !== (AH = this.parameters.sH) && void 0 !== AH ? AH : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(HH) {
          if (!HH || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(HH) {
          this.isCompleted = !0, this.resolveRequest(HH)
        }
        getState() {
          const HH = Date.now() - this.startTime,
            BH = Math.max(0, this.timeWindowMs - HH);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: BH,
              sH: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(HH, BH, LH) {
          var AH;
          this.resolveRequest = BH, this.tearDownNotification = LH, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const rH = HH;
          this.parameters = {
            ...rH,
            yH: SH.d.clamp(rH.yH, .05, 1)
          }, this.progress = null !== (AH = rH.jH) && void 0 !== AH ? AH : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(HH) {
          this.isMouseDown = HH
        }
        handleTick(HH) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(HH))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const HH = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += HH * this.parameters.HB * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const HH = SH.d.clamp(1 - .7 * this.parameters.BB, 0, 1.4);
          return Math.floor(60 * HH + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.LB : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = SH.d.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const HH = this.parameters.yH / 2,
            BH = HH,
            LH = 1 - HH;
          this.catchZonePosition <= BH ? (this.catchZonePosition = BH, this.catchZoneVelocity = 0) : this.catchZonePosition >= LH && (this.catchZonePosition = LH, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const HH = this.parameters.yH / 2;
          return this.moverPosition >= this.catchZonePosition - HH && this.moverPosition <= this.catchZonePosition + HH
        }
        updateProgress(HH) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.AB * HH : this.progress -= this.parameters.rB * HH, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.DH && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(HH) {
          this.isCompleted = !0, this.resolveRequest(HH)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              yH: this.parameters.yH,
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
        constructor(HH, BH, LH) {
          var AH, rH, hH, tH, zH;
          this.resolveRequest = BH, this.tearDownNotification = LH, this.startTime = void 0, this.speed = void 0, this.hB = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const CH = HH;
          this.parameters = {
            ...CH,
            speed: null !== (AH = CH.speed) && void 0 !== AH ? AH : .5,
            hB: SH.d.clamp(CH.hB, .05, 1),
            label: null !== (rH = CH.label) && void 0 !== rH ? rH : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (hH = CH.icon) && void 0 !== hH ? hH : null,
            scale: null !== (tH = CH.scale) && void 0 !== tH ? tH : 1,
            rotation: null !== (zH = CH.rotation) && void 0 !== zH ? zH : 0
          }, this.speed = this.parameters.speed, this.hB = this.parameters.hB, this.startTime = Date.now()
        }
        handleMouseInput(HH) {
          if (HH) {
            this.updateMarkerPosition();
            const HH = Math.abs(this.markerPosition - .5) <= this.hB / 2;
            this.complete(HH)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const HH = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = HH <= .5 ? 2 * HH : 2 - 2 * HH
        }
        complete(HH) {
          this.isCompleted = !0, this.resolveRequest(HH)
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
        constructor(HH, BH, LH) {
          this.resolveRequest = BH, this.tearDownNotification = LH, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = HH, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(HH) {
          if (!HH || this.isCompleted) return;
          const BH = this.getOuterCircleProgress();
          if (BH <= this.parameters.EB && BH >= -this.parameters.EB) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.zB) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, hH.M)(this.parameters.XB) && this.misses > this.parameters.XB ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.EB && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.CB
        }
        complete(HH) {
          this.isCompleted = !0, this.resolveRequest(HH)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              zB: this.parameters.zB,
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

    function xH() {
      (0, EH.k)(tH.w.Qte, WH ? tH.w.Qte : 0), WH ? rH.k.AX("qteStateUpdated", WH.getState()) : rH.k.AX("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class vH {
      constructor(HH, BH) {
        this.resultPromise = HH, this.tearDownQTE = BH
      }
      static create(HH, BH, LH) {
        const AH = Promise.race([HH, BH]);
        return new vH(AH, LH)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class PH {
      static queueQTE(HH, BH, LH) {
        let AH, rH;
        const SH = new Promise((HH => {
            AH = HH
          })),
          hH = new Promise((HH => {
            rH = () => {
              HH("qteTornDown")
            }
          })),
          tH = Promise.race([SH, hH]).then((() => {})),
          zH = new XH(HH, BH, LH, rH, tH, AH);
        return QH.set(HH, zH), uH.enqueue(zH), WH || this.processNextQTE(), vH.create(SH, hH, rH)
      }
      static async processNextQTE() {
        if (WH || uH.TX()) return void(uH.TX() && WH && (WH = null, xH()));
        const HH = await uH.dequeue();
        if (!QH.has(HH.id)) return void await this.processNextQTE();
        QH.delete(HH.id);
        const BH = new YH(HH.id, HH.type, HH.parameters, HH.resolveRequest, HH.onDonePromise, HH.tearDownNotification);
        WH = BH, xH();
        try {
          await BH.waitUntilDone()
        } catch (LH) {
          console.error("Error while waiting for QTE to resolve:", LH.stack)
        }
        WH === BH && (WH.cleanup(), WH = null, xH()), await this.processNextQTE()
      }
      static cancelQTE(HH) {
        if (WH && WH.id === HH) return WH.tearDown(), WH = null, xH(), void this.processNextQTE();
        const BH = QH.get(HH);
        BH && (QH.delete(HH), BH.tearDownNotification())
      }
      static getCurrentState() {
        return WH ? WH.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        WH && (WH.tearDown(), WH = null), QH.forEach(((HH, BH) => {
          this.cancelQTE(BH)
        })), uH.emptyQueue(), QH.clear(), xH()
      }
    }
  },
  5255: (HH, BH, LH) => {
    LH.d(BH, {
      D: () => oH,
      F: () => xH,
      J: () => hH,
      L: () => tH,
      P: () => bH,
      c: () => OH,
      d: () => PH,
      e: () => fH,
      g: () => IH,
      k: () => MH,
      n: () => UH,
      p: () => vH,
      r: () => TH,
      v: () => kH,
      z: () => mH
    });
    var AH = LH(5260);
    const rH = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let SH = rH;

    function hH(HH) {
      SH = null !== HH && void 0 !== HH ? HH : rH
    }

    function tH() {
      return SH
    }
    const zH = new Set,
      CH = new Set;
    let EH = -1;
    const XH = new Set,
      GH = new Set;
    let YH = 0,
      uH = 0;
    const QH = new Set,
      WH = new Set;

    function MH(HH) {
      return zH.add(HH), () => {
        zH.delete(HH)
      }
    }

    function xH(HH, BH) {
      for (const AH of zH) try {
        AH(HH)
      } catch (LH) {
        BH(LH)
      }
    }

    function vH(HH) {
      return CH.add(HH), () => {
        CH.delete(HH)
      }
    }

    function PH(HH, BH) {
      const LH = EH < 0 ? 0 : HH - EH;
      EH = HH;
      for (const rH of CH) try {
        rH(LH)
      } catch (AH) {
        BH(AH)
      }
    }

    function TH(HH) {
      return XH.add(HH), () => {
        XH.delete(HH)
      }
    }

    function UH(HH) {
      return GH.add(HH), () => {
        GH.delete(HH)
      }
    }
    let VH = 0;

    function OH(HH) {
      VH += HH
    }

    function bH() {
      const HH = VH;
      return VH = 0, HH
    }

    function kH(HH) {
      return QH.add(HH), () => {
        QH.delete(HH)
      }
    }

    function mH(HH) {
      return WH.add(HH), () => {
        WH.delete(HH)
      }
    }

    function oH() {
      YH = 0, uH = 0, EH = -1
    }

    function IH(HH, BH) {
      if ("paced" === HH) return uH += BH, null;
      if ("drawn" !== HH && "skipped" !== HH) return null;
      const LH = BH + uH;
      return uH = 0, LH
    }

    function fH(HH, BH, LH, rH) {
      const SH = (0, AH.e)(BH),
        hH = HH > 0 ? performance.now() : 0;
      for (let AH = 0; AH < HH; AH++)
        for (const HH of QH) try {
          HH()
        } catch (tH) {
          rH(tH)
        }
      if (HH > 0 && OH(performance.now() - hH), null !== LH) {
        for (const HH of XH) try {
          HH(LH)
        } catch (tH) {
          rH(tH)
        }
        YH += LH
      }
      if ("drawn" === BH) {
        const HH = YH;
        YH = 0;
        for (const BH of GH) try {
          BH(HH)
        } catch (tH) {
          rH(tH)
        }
      }
      for (const AH of WH) try {
        AH(HH, SH)
      } catch (tH) {
        rH(tH)
      }
    }
  },
  5275: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => zH,
      i: () => SH,
      k: () => tH
    });
    var AH = LH(2600),
      rH = LH(5279);

    function SH(HH) {
      let {
        action: BH,
        flags: LH
      } = HH;
      return "mid-fire" === BH && 0 !== (LH & AH.c.AltLeftClick)
    }
    const hH = new Set;

    function tH(HH) {
      return hH.add(HH), () => {
        hH.delete(HH)
      }
    }

    function zH(HH) {
      const BH = rH.c[255 & HH];
      if (void 0 === BH) return;
      const LH = HH >>> 8 & 255,
        SH = {
          action: BH,
          down: 0 !== (LH & AH.c.Down),
          flags: LH,
          press: HH >>> 16
        };
      for (const AH of hH) AH(SH)
    }
  },
  5279: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      f: () => SH,
      i: () => hH,
      j: () => AH,
      k: () => tH
    });
    const AH = {
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
      rH = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      SH = {
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
      hH = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      tH = [16]
  },
  5288: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      g: () => hH,
      k: () => CH
    });
    var AH = LH(2600),
      rH = LH(2605);
    const SH = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function hH(HH) {
      return HH instanceof HTMLElement && (!!(HH.isContentEditable || HH instanceof HTMLTextAreaElement || HH instanceof HTMLSelectElement) || HH instanceof HTMLInputElement && !SH.has(HH.type))
    }

    function tH(HH) {
      let BH = null;
      const LH = LH => {
          const rH = hH(LH);
          rH !== BH && (BH = rH, HH(AH.g.UiCapture, AH.w.Keyboard, 0, 0, rH ? AH.w.Keyboard : 0))
        },
        rH = HH => {
          LH(HH.target)
        },
        SH = HH => {
          LH(HH.relatedTarget)
        },
        tH = () => {
          LH(document.activeElement)
        },
        zH = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", rH, zH), document.addEventListener("focusout", SH, zH), document.addEventListener("keydown", tH, zH), LH(document.activeElement), () => {
        document.removeEventListener("focusin", rH, zH), document.removeEventListener("focusout", SH, zH), document.removeEventListener("keydown", tH, zH)
      }
    }
    const zH = new Map;

    function CH(HH, BH) {
      var LH;
      let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      zH.set(AH, (null !== (LH = zH.get(AH)) && void 0 !== LH ? LH : 0) & ~HH | BH & HH);
      let SH = 0;
      for (const rH of zH.values()) SH |= rH;
      return (0, rH.E)(HH, SH & HH)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);