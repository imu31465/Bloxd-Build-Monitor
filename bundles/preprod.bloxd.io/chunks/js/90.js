export const id = 90;
export const ids = [90];
export const modules = {
  5111: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => GQ,
      d: () => VQ
    });
    var wQ = XQ(1357),
      qQ = XQ(31);
    var TQ = XQ(402);
    var zQ = XQ(663);
    var sQ = XQ(2506),
      FQ = XQ(5118),
      PQ = XQ(5146),
      gQ = XQ(5153);
    class JQ {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.id = QQ, this.type = WQ, this.parameters = XQ, this.tearDownNotification = wQ, this.onDonePromise = qQ, this.resolveRequest = TQ
      }
    }
    const rQ = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class IQ {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.id = QQ, this.type = WQ, this.parameters = XQ, this.resolveRequest = wQ, this.onDonePromise = qQ, this.tearDownNotification = TQ, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const zQ = VQ[WQ];
        if (!zQ) throw console.error(`No QTE implementation registered for type: ${WQ}`), new Error(`No QTE implementation registered for type: ${WQ}`);
        this.implementation = new zQ(XQ, (QQ => {
          this.isCompleted = !0, this.resolveRequest(QQ)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = qQ.k.subscribe("QTEMouseState", (QQ => {
          let {
            isDown: WQ
          } = QQ;
          this.isCompleted || this.implementation.handleMouseInput(WQ)
        })), this.stopInputActions = (0, PQ.j)((QQ => {
          this.isCompleted || !rQ.has(QQ.action) && !(0, PQ.h)(QQ) || this.implementation.handleMouseInput(QQ.down)
        })), this.tickSub = qQ.k.subscribe("noaTick", (QQ => {
          if (this.isCompleted) return;
          const WQ = QQ / 1e3;
          this.implementation.handleTick(WQ)
        })), this.stopShellTicks = (0, FQ.w)((() => {
          this.isCompleted || this.implementation.handleTick(sQ.q / 1e3)
        }))
      }
      cleanup() {
        var QQ, WQ;
        this.mouseSub && (qQ.k.unsubscribe(this.mouseSub), this.mouseSub = null), null === (QQ = this.stopInputActions) || void 0 === QQ || QQ.call(this), this.stopInputActions = null, null === (WQ = this.stopShellTicks) || void 0 === WQ || WQ.call(this), this.stopShellTicks = null, this.tickSub && (qQ.k.unsubscribe(this.tickSub), this.tickSub = null)
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
    const jQ = new wQ.b,
      BQ = new Map;
    let yQ = null;
    const VQ = {
      progressBar: class {
        constructor(QQ, WQ, XQ) {
          var wQ, qQ, TQ, zQ;
          this.resolveRequest = WQ, this.tearDownNotification = XQ, this.progress = 0, this.OQ = void 0, this.KQ = void 0, this.mQ = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const sQ = QQ;
          this.OQ = null !== (wQ = sQ.OQ) && void 0 !== wQ ? wQ : .075, this.KQ = null !== (qQ = sQ.KQ) && void 0 !== qQ ? qQ : 1, this.progress = null !== (TQ = sQ.ZQ) && void 0 !== TQ ? TQ : 30, this.mQ = null !== (zQ = sQ.mQ) && void 0 !== zQ && zQ, this.parameters = sQ
        }
        handleMouseInput(QQ) {
          QQ && !this.isCompleted && (this.clickCount++, this.progress += this.KQ, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.OQ, this.mQ && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(QQ) {
          this.isCompleted = !0, this.resolveRequest(QQ)
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
        constructor(QQ, WQ, XQ) {
          var wQ;
          this.resolveRequest = WQ, this.tearDownNotification = XQ, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = QQ, this.timeWindowMs = null !== (wQ = this.parameters.wW) && void 0 !== wQ ? wQ : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(QQ) {
          if (!QQ || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(QQ) {
          this.isCompleted = !0, this.resolveRequest(QQ)
        }
        getState() {
          const QQ = Date.now() - this.startTime,
            WQ = Math.max(0, this.timeWindowMs - QQ);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: WQ,
              wW: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(QQ, WQ, XQ) {
          var wQ;
          this.resolveRequest = WQ, this.tearDownNotification = XQ, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const qQ = QQ;
          this.parameters = {
            ...qQ,
            sW: TQ.b.clamp(qQ.sW, .05, 1)
          }, this.progress = null !== (wQ = qQ.ZQ) && void 0 !== wQ ? wQ : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(QQ) {
          this.isMouseDown = QQ
        }
        handleTick(QQ) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(QQ))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const QQ = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += QQ * this.parameters.FW * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const QQ = TQ.b.clamp(1 - .7 * this.parameters.PW, 0, 1.4);
          return Math.floor(60 * QQ + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.gW : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = TQ.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const QQ = this.parameters.sW / 2,
            WQ = QQ,
            XQ = 1 - QQ;
          this.catchZonePosition <= WQ ? (this.catchZonePosition = WQ, this.catchZoneVelocity = 0) : this.catchZonePosition >= XQ && (this.catchZonePosition = XQ, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const QQ = this.parameters.sW / 2;
          return this.moverPosition >= this.catchZonePosition - QQ && this.moverPosition <= this.catchZonePosition + QQ
        }
        updateProgress(QQ) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.JW * QQ : this.progress -= this.parameters.rW * QQ, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.mQ && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(QQ) {
          this.isCompleted = !0, this.resolveRequest(QQ)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              sW: this.parameters.sW,
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
        constructor(QQ, WQ, XQ) {
          var wQ, qQ, zQ, sQ, FQ;
          this.resolveRequest = WQ, this.tearDownNotification = XQ, this.startTime = void 0, this.speed = void 0, this.jW = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const PQ = QQ;
          this.parameters = {
            ...PQ,
            speed: null !== (wQ = PQ.speed) && void 0 !== wQ ? wQ : .5,
            jW: TQ.b.clamp(PQ.jW, .05, 1),
            label: null !== (qQ = PQ.label) && void 0 !== qQ ? qQ : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (zQ = PQ.icon) && void 0 !== zQ ? zQ : null,
            scale: null !== (sQ = PQ.scale) && void 0 !== sQ ? sQ : 1,
            rotation: null !== (FQ = PQ.rotation) && void 0 !== FQ ? FQ : 0
          }, this.speed = this.parameters.speed, this.jW = this.parameters.jW, this.startTime = Date.now()
        }
        handleMouseInput(QQ) {
          if (QQ) {
            this.updateMarkerPosition();
            const QQ = Math.abs(this.markerPosition - .5) <= this.jW / 2;
            this.complete(QQ)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const QQ = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = QQ <= .5 ? 2 * QQ : 2 - 2 * QQ
        }
        complete(QQ) {
          this.isCompleted = !0, this.resolveRequest(QQ)
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
        constructor(QQ, WQ, XQ) {
          this.resolveRequest = WQ, this.tearDownNotification = XQ, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = QQ, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(QQ) {
          if (!QQ || this.isCompleted) return;
          const WQ = this.getOuterCircleProgress();
          if (WQ <= this.parameters.DW && WQ >= -this.parameters.DW) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.yW) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, zQ.G)(this.parameters.pW) && this.misses > this.parameters.pW ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.DW && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.VW
        }
        complete(QQ) {
          this.isCompleted = !0, this.resolveRequest(QQ)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              yW: this.parameters.yW,
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

    function DQ() {
      (0, gQ.i)(sQ.x.Qte, yQ ? sQ.x.Qte : 0), yQ ? qQ.k.mB("qteStateUpdated", yQ.getState()) : qQ.k.mB("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class pQ {
      constructor(QQ, WQ) {
        this.resultPromise = QQ, this.tearDownQTE = WQ
      }
      static create(QQ, WQ, XQ) {
        const wQ = Promise.race([QQ, WQ]);
        return new pQ(wQ, XQ)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class GQ {
      static queueQTE(QQ, WQ, XQ) {
        let wQ, qQ;
        const TQ = new Promise((QQ => {
            wQ = QQ
          })),
          zQ = new Promise((QQ => {
            qQ = () => {
              QQ("qteTornDown")
            }
          })),
          sQ = Promise.race([TQ, zQ]).then((() => {})),
          FQ = new JQ(QQ, WQ, XQ, qQ, sQ, wQ);
        return BQ.set(QQ, FQ), jQ.enqueue(FQ), yQ || this.processNextQTE(), pQ.create(TQ, zQ, qQ)
      }
      static async processNextQTE() {
        if (yQ || jQ.mI()) return void(jQ.mI() && yQ && (yQ = null, DQ()));
        const QQ = await jQ.dequeue();
        if (!BQ.has(QQ.id)) return void await this.processNextQTE();
        BQ.delete(QQ.id);
        const WQ = new IQ(QQ.id, QQ.type, QQ.parameters, QQ.resolveRequest, QQ.onDonePromise, QQ.tearDownNotification);
        yQ = WQ, DQ();
        try {
          await WQ.waitUntilDone()
        } catch (XQ) {
          console.error("Error while waiting for QTE to resolve:", XQ.stack)
        }
        yQ === WQ && (yQ.cleanup(), yQ = null, DQ()), await this.processNextQTE()
      }
      static cancelQTE(QQ) {
        if (yQ && yQ.id === QQ) return yQ.tearDown(), yQ = null, DQ(), void this.processNextQTE();
        const WQ = BQ.get(QQ);
        WQ && (BQ.delete(QQ), WQ.tearDownNotification())
      }
      static getCurrentState() {
        return yQ ? yQ.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        yQ && (yQ.tearDown(), yQ = null), BQ.forEach(((QQ, WQ) => {
          this.cancelQTE(WQ)
        })), jQ.emptyQueue(), BQ.clear(), DQ()
      }
    }
  },
  5118: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => DQ,
      F: () => zQ,
      H: () => sQ,
      I: () => HQ,
      d: () => dQ,
      e: () => GQ,
      g: () => cQ,
      h: () => iQ,
      k: () => VQ,
      o: () => bQ,
      s: () => pQ,
      t: () => UQ,
      w: () => aQ,
      x: () => lQ,
      y: () => hQ
    });
    var wQ = XQ(5126);
    const qQ = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let TQ = qQ;

    function zQ(QQ) {
      TQ = null !== QQ && void 0 !== QQ ? QQ : qQ
    }

    function sQ() {
      return TQ
    }
    const FQ = new Set,
      PQ = new Set;
    let gQ = -1;
    const JQ = new Set,
      rQ = new Set;
    let IQ = 0,
      jQ = 0;
    const BQ = new Set,
      yQ = new Set;

    function VQ(QQ) {
      return FQ.add(QQ), () => {
        FQ.delete(QQ)
      }
    }

    function DQ(QQ, WQ) {
      for (const wQ of FQ) try {
        wQ(QQ)
      } catch (XQ) {
        WQ(XQ)
      }
    }

    function pQ(QQ) {
      return PQ.add(QQ), () => {
        PQ.delete(QQ)
      }
    }

    function GQ(QQ, WQ) {
      const XQ = gQ < 0 ? 0 : QQ - gQ;
      gQ = QQ;
      for (const qQ of PQ) try {
        qQ(XQ)
      } catch (wQ) {
        WQ(wQ)
      }
    }

    function UQ(QQ) {
      return JQ.add(QQ), () => {
        JQ.delete(QQ)
      }
    }

    function bQ(QQ) {
      return rQ.add(QQ), () => {
        rQ.delete(QQ)
      }
    }
    let vQ = 0;

    function dQ(QQ) {
      vQ += QQ
    }

    function HQ() {
      const QQ = vQ;
      return vQ = 0, QQ
    }

    function aQ(QQ) {
      return BQ.add(QQ), () => {
        BQ.delete(QQ)
      }
    }

    function lQ(QQ) {
      return yQ.add(QQ), () => {
        yQ.delete(QQ)
      }
    }

    function hQ() {
      IQ = 0, jQ = 0, gQ = -1
    }

    function iQ(QQ, WQ) {
      if ("paced" === QQ) return jQ += WQ, null;
      if ("drawn" !== QQ && "skipped" !== QQ) return null;
      const XQ = WQ + jQ;
      return jQ = 0, XQ
    }

    function cQ(QQ, WQ, XQ, qQ) {
      const TQ = (0, wQ.f)(WQ),
        zQ = QQ > 0 ? performance.now() : 0;
      for (let wQ = 0; wQ < QQ; wQ++)
        for (const QQ of BQ) try {
          QQ()
        } catch (sQ) {
          qQ(sQ)
        }
      if (QQ > 0 && dQ(performance.now() - zQ), null !== XQ) {
        for (const QQ of JQ) try {
          QQ(XQ)
        } catch (sQ) {
          qQ(sQ)
        }
        IQ += XQ
      }
      if ("drawn" === WQ) {
        const QQ = IQ;
        IQ = 0;
        for (const WQ of rQ) try {
          WQ(QQ)
        } catch (sQ) {
          qQ(sQ)
        }
      }
      for (const wQ of yQ) try {
        wQ(QQ, TQ)
      } catch (sQ) {
        qQ(sQ)
      }
    }
  },
  5146: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      h: () => TQ,
      j: () => sQ
    });
    var wQ = XQ(2506),
      qQ = XQ(5148);

    function TQ(QQ) {
      let {
        action: WQ,
        flags: XQ
      } = QQ;
      return "mid-fire" === WQ && 0 !== (XQ & wQ.e.AltLeftClick)
    }
    const zQ = new Set;

    function sQ(QQ) {
      return zQ.add(QQ), () => {
        zQ.delete(QQ)
      }
    }

    function FQ(QQ) {
      const WQ = qQ.b[255 & QQ];
      if (void 0 === WQ) return;
      const XQ = QQ >>> 8 & 255,
        TQ = {
          action: WQ,
          down: 0 !== (XQ & wQ.e.Down),
          flags: XQ,
          press: QQ >>> 16
        };
      for (const wQ of zQ) wQ(TQ)
    }
  },
  5148: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      c: () => TQ,
      e: () => zQ,
      i: () => wQ,
      j: () => sQ
    });
    const wQ = {
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
      qQ = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      TQ = {
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
      zQ = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      sQ = [16]
  },
  5153: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ,
      f: () => zQ,
      i: () => PQ
    });
    var wQ = XQ(2506),
      qQ = XQ(2510);
    const TQ = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function zQ(QQ) {
      return QQ instanceof HTMLElement && (!!(QQ.isContentEditable || QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLSelectElement) || QQ instanceof HTMLInputElement && !TQ.has(QQ.type))
    }

    function sQ(QQ) {
      let WQ = null;
      const XQ = XQ => {
          const qQ = zQ(XQ);
          qQ !== WQ && (WQ = qQ, QQ(wQ.j.UiCapture, wQ.x.Keyboard, 0, 0, qQ ? wQ.x.Keyboard : 0))
        },
        qQ = QQ => {
          XQ(QQ.target)
        },
        TQ = QQ => {
          XQ(QQ.relatedTarget)
        },
        sQ = () => {
          XQ(document.activeElement)
        },
        FQ = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", qQ, FQ), document.addEventListener("focusout", TQ, FQ), document.addEventListener("keydown", sQ, FQ), XQ(document.activeElement), () => {
        document.removeEventListener("focusin", qQ, FQ), document.removeEventListener("focusout", TQ, FQ), document.removeEventListener("keydown", sQ, FQ)
      }
    }
    const FQ = new Map;

    function PQ(QQ, WQ) {
      var XQ;
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      FQ.set(wQ, (null !== (XQ = FQ.get(wQ)) && void 0 !== XQ ? XQ : 0) & ~QQ | WQ & QQ);
      let TQ = 0;
      for (const qQ of FQ.values()) TQ |= qQ;
      return (0, qQ.C)(QQ, TQ & QQ)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);