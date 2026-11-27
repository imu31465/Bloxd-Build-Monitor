export const id = 102;
export const ids = [102];
export const modules = {
  5658: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => AR,
      g: () => nR
    });
    var yR = GR(1435),
      tR = GR(32);
    var uR = GR(377);
    var ZR = GR(679);
    var qR = GR(3428),
      iR = GR(5665),
      fR = GR(5692),
      VR = GR(5699);
    class KR {
      constructor(RR, JR, GR, yR, tR, uR) {
        this.id = RR, this.type = JR, this.parameters = GR, this.tearDownNotification = yR, this.onDonePromise = tR, this.resolveRequest = uR
      }
    }
    const wR = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class rR {
      constructor(RR, JR, GR, yR, tR, uR) {
        this.id = RR, this.type = JR, this.parameters = GR, this.resolveRequest = yR, this.onDonePromise = tR, this.tearDownNotification = uR, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const ZR = nR[JR];
        if (!ZR) throw console.error(`No QTE implementation registered for type: ${JR}`), new Error(`No QTE implementation registered for type: ${JR}`);
        this.implementation = new ZR(GR, (RR => {
          this.isCompleted = !0, this.resolveRequest(RR)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = tR.n.subscribe("QTEMouseState", (RR => {
          let {
            isDown: JR
          } = RR;
          this.isCompleted || this.implementation.handleMouseInput(JR)
        })), this.stopInputActions = (0, fR.f)((RR => {
          this.isCompleted || !wR.has(RR.action) && !(0, fR.d)(RR) || this.implementation.handleMouseInput(RR.down)
        })), this.tickSub = tR.n.subscribe("noaTick", (RR => {
          if (this.isCompleted) return;
          const JR = RR / 1e3;
          this.implementation.handleTick(JR)
        })), this.stopShellTicks = (0, iR.r)((() => {
          this.isCompleted || this.implementation.handleTick(qR.w / 1e3)
        }))
      }
      cleanup() {
        var RR, JR;
        this.mouseSub && (tR.n.unsubscribe(this.mouseSub), this.mouseSub = null), null === (RR = this.stopInputActions) || void 0 === RR || RR.call(this), this.stopInputActions = null, null === (JR = this.stopShellTicks) || void 0 === JR || JR.call(this), this.stopShellTicks = null, this.tickSub && (tR.n.unsubscribe(this.tickSub), this.tickSub = null)
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
    const eR = new yR.d,
      aR = new Map;
    let LR = null;
    const nR = {
      progressBar: class {
        constructor(RR, JR, GR) {
          var yR, tR, uR, ZR;
          this.resolveRequest = JR, this.tearDownNotification = GR, this.progress = 0, this.gu = void 0, this.bu = void 0, this.vu = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const qR = RR;
          this.gu = null !== (yR = qR.gu) && void 0 !== yR ? yR : .075, this.bu = null !== (tR = qR.bu) && void 0 !== tR ? tR : 1, this.progress = null !== (uR = qR.pu) && void 0 !== uR ? uR : 30, this.vu = null !== (ZR = qR.vu) && void 0 !== ZR && ZR, this.parameters = qR
        }
        handleMouseInput(RR) {
          RR && !this.isCompleted && (this.clickCount++, this.progress += this.bu, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.gu, this.vu && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(RR) {
          this.isCompleted = !0, this.resolveRequest(RR)
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
        constructor(RR, JR, GR) {
          var yR;
          this.resolveRequest = JR, this.tearDownNotification = GR, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = RR, this.timeWindowMs = null !== (yR = this.parameters.Du) && void 0 !== yR ? yR : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(RR) {
          if (!RR || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(RR) {
          this.isCompleted = !0, this.resolveRequest(RR)
        }
        getState() {
          const RR = Date.now() - this.startTime,
            JR = Math.max(0, this.timeWindowMs - RR);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: JR,
              Du: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(RR, JR, GR) {
          var yR;
          this.resolveRequest = JR, this.tearDownNotification = GR, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const tR = RR;
          this.parameters = {
            ...tR,
            Pu: uR.e.clamp(tR.Pu, .05, 1)
          }, this.progress = null !== (yR = tR.pu) && void 0 !== yR ? yR : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(RR) {
          this.isMouseDown = RR
        }
        handleTick(RR) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(RR))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const RR = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += RR * this.parameters.Iu * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const RR = uR.e.clamp(1 - .7 * this.parameters.mu, 0, 1.4);
          return Math.floor(60 * RR + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.zu : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = uR.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const RR = this.parameters.Pu / 2,
            JR = RR,
            GR = 1 - RR;
          this.catchZonePosition <= JR ? (this.catchZonePosition = JR, this.catchZoneVelocity = 0) : this.catchZonePosition >= GR && (this.catchZonePosition = GR, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const RR = this.parameters.Pu / 2;
          return this.moverPosition >= this.catchZonePosition - RR && this.moverPosition <= this.catchZonePosition + RR
        }
        updateProgress(RR) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.Su * RR : this.progress -= this.parameters.ju * RR, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.vu && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(RR) {
          this.isCompleted = !0, this.resolveRequest(RR)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Pu: this.parameters.Pu,
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
        constructor(RR, JR, GR) {
          var yR, tR, ZR, qR, iR;
          this.resolveRequest = JR, this.tearDownNotification = GR, this.startTime = void 0, this.speed = void 0, this.Eu = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const fR = RR;
          this.parameters = {
            ...fR,
            speed: null !== (yR = fR.speed) && void 0 !== yR ? yR : .5,
            Eu: uR.e.clamp(fR.Eu, .05, 1),
            label: null !== (tR = fR.label) && void 0 !== tR ? tR : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (ZR = fR.icon) && void 0 !== ZR ? ZR : null,
            scale: null !== (qR = fR.scale) && void 0 !== qR ? qR : 1,
            rotation: null !== (iR = fR.rotation) && void 0 !== iR ? iR : 0
          }, this.speed = this.parameters.speed, this.Eu = this.parameters.Eu, this.startTime = Date.now()
        }
        handleMouseInput(RR) {
          if (RR) {
            this.updateMarkerPosition();
            const RR = Math.abs(this.markerPosition - .5) <= this.Eu / 2;
            this.complete(RR)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const RR = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = RR <= .5 ? 2 * RR : 2 - 2 * RR
        }
        complete(RR) {
          this.isCompleted = !0, this.resolveRequest(RR)
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
        constructor(RR, JR, GR) {
          this.resolveRequest = JR, this.tearDownNotification = GR, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = RR, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(RR) {
          if (!RR || this.isCompleted) return;
          const JR = this.getOuterCircleProgress();
          if (JR <= this.parameters.Fu && JR >= -this.parameters.Fu) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.ku) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, ZR.I)(this.parameters.Tu) && this.misses > this.parameters.Tu ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.Fu && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Qu
        }
        complete(RR) {
          this.isCompleted = !0, this.resolveRequest(RR)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              ku: this.parameters.ku,
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

    function UR() {
      (0, VR.i)(qR.C.Qte, LR ? qR.C.Qte : 0), LR ? tR.n.JK("qteStateUpdated", LR.getState()) : tR.n.JK("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class WR {
      constructor(RR, JR) {
        this.resultPromise = RR, this.tearDownQTE = JR
      }
      static create(RR, JR, GR) {
        const yR = Promise.race([RR, JR]);
        return new WR(yR, GR)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class AR {
      static queueQTE(RR, JR, GR) {
        let yR, tR;
        const uR = new Promise((RR => {
            yR = RR
          })),
          ZR = new Promise((RR => {
            tR = () => {
              RR("qteTornDown")
            }
          })),
          qR = Promise.race([uR, ZR]).then((() => {})),
          iR = new KR(RR, JR, GR, tR, qR, yR);
        return aR.set(RR, iR), eR.enqueue(iR), LR || this.processNextQTE(), WR.create(uR, ZR, tR)
      }
      static async processNextQTE() {
        if (LR || eR.WK()) return void(eR.WK() && LR && (LR = null, UR()));
        const RR = await eR.dequeue();
        if (!aR.has(RR.id)) return void await this.processNextQTE();
        aR.delete(RR.id);
        const JR = new rR(RR.id, RR.type, RR.parameters, RR.resolveRequest, RR.onDonePromise, RR.tearDownNotification);
        LR = JR, UR();
        try {
          await JR.waitUntilDone()
        } catch (GR) {
          console.error("Error while waiting for QTE to resolve:", GR.stack)
        }
        LR === JR && (LR.cleanup(), LR = null, UR()), await this.processNextQTE()
      }
      static cancelQTE(RR) {
        if (LR && LR.id === RR) return LR.tearDown(), LR = null, UR(), void this.processNextQTE();
        const JR = aR.get(RR);
        JR && (aR.delete(RR), JR.tearDownNotification())
      }
      static getCurrentState() {
        return LR ? LR.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        LR && (LR.tearDown(), LR = null), aR.forEach(((RR, JR) => {
          this.cancelQTE(JR)
        })), eR.emptyQueue(), aR.clear(), UR()
      }
    }
  },
  5665: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => ZR,
      E: () => qR,
      H: () => lR,
      c: () => BR,
      d: () => AR,
      e: () => OR,
      f: () => vR,
      g: () => nR,
      k: () => XR,
      m: () => WR,
      n: () => CR,
      r: () => pR,
      t: () => gR,
      v: () => bR,
      z: () => UR
    });
    var yR = GR(5671);
    const tR = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let uR = tR;

    function ZR(RR) {
      uR = null !== RR && void 0 !== RR ? RR : tR
    }

    function qR() {
      return uR
    }
    const iR = new Set,
      fR = new Set;
    let VR = -1;
    const KR = new Set,
      wR = new Set;
    let rR = 0,
      eR = 0;
    const aR = new Set,
      LR = new Set;

    function nR(RR) {
      return iR.add(RR), () => {
        iR.delete(RR)
      }
    }

    function UR(RR, JR) {
      for (const yR of iR) try {
        yR(RR)
      } catch (GR) {
        JR(GR)
      }
    }

    function WR(RR) {
      return fR.add(RR), () => {
        fR.delete(RR)
      }
    }

    function AR(RR, JR) {
      const GR = VR < 0 ? 0 : RR - VR;
      VR = RR;
      for (const tR of fR) try {
        tR(GR)
      } catch (yR) {
        JR(yR)
      }
    }

    function CR(RR) {
      return KR.add(RR), () => {
        KR.delete(RR)
      }
    }

    function XR(RR) {
      return wR.add(RR), () => {
        wR.delete(RR)
      }
    }
    let MR = 0;

    function BR(RR) {
      MR += RR
    }

    function lR() {
      const RR = MR;
      return MR = 0, RR
    }

    function pR(RR) {
      return aR.add(RR), () => {
        aR.delete(RR)
      }
    }

    function gR(RR) {
      return LR.add(RR), () => {
        LR.delete(RR)
      }
    }

    function bR() {
      rR = 0, eR = 0, VR = -1
    }

    function vR(RR, JR) {
      if ("paced" === RR) return eR += JR, null;
      if ("drawn" !== RR && "skipped" !== RR) return null;
      const GR = JR + eR;
      return eR = 0, GR
    }

    function OR(RR, JR, GR, tR) {
      const uR = (0, yR.f)(JR),
        ZR = RR > 0 ? performance.now() : 0;
      for (let yR = 0; yR < RR; yR++)
        for (const RR of aR) try {
          RR()
        } catch (qR) {
          tR(qR)
        }
      if (RR > 0 && BR(performance.now() - ZR), null !== GR) {
        for (const RR of KR) try {
          RR(GR)
        } catch (qR) {
          tR(qR)
        }
        rR += GR
      }
      if ("drawn" === JR) {
        const RR = rR;
        rR = 0;
        for (const JR of wR) try {
          JR(RR)
        } catch (qR) {
          tR(qR)
        }
      }
      for (const yR of LR) try {
        yR(RR, uR)
      } catch (qR) {
        tR(qR)
      }
    }
  },
  5692: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => iR,
      d: () => uR,
      f: () => qR
    });
    var yR = GR(3428),
      tR = GR(5697);

    function uR(RR) {
      let {
        action: JR,
        flags: GR
      } = RR;
      return "mid-fire" === JR && 0 !== (GR & yR.b.AltLeftClick)
    }
    const ZR = new Set;

    function qR(RR) {
      return ZR.add(RR), () => {
        ZR.delete(RR)
      }
    }

    function iR(RR) {
      const JR = tR.e[255 & RR];
      if (void 0 === JR) return;
      const GR = RR >>> 8 & 255,
        uR = {
          action: JR,
          down: 0 !== (GR & yR.b.Down),
          flags: GR,
          press: RR >>> 16
        };
      for (const yR of ZR) yR(uR)
    }
  },
  5697: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      f: () => uR,
      g: () => ZR,
      i: () => yR,
      k: () => qR
    });
    const yR = {
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
      tR = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      uR = {
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
      ZR = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      qR = [16]
  },
  5699: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      h: () => ZR,
      i: () => fR
    });
    var yR = GR(3428),
      tR = GR(3437);
    const uR = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function ZR(RR) {
      return RR instanceof HTMLElement && (!!(RR.isContentEditable || RR instanceof HTMLTextAreaElement || RR instanceof HTMLSelectElement) || RR instanceof HTMLInputElement && !uR.has(RR.type))
    }

    function qR(RR) {
      let JR = null;
      const GR = GR => {
          const tR = ZR(GR);
          tR !== JR && (JR = tR, RR(yR.j.UiCapture, yR.C.Keyboard, 0, 0, tR ? yR.C.Keyboard : 0))
        },
        tR = RR => {
          GR(RR.target)
        },
        uR = RR => {
          GR(RR.relatedTarget)
        },
        qR = () => {
          GR(document.activeElement)
        },
        iR = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", tR, iR), document.addEventListener("focusout", uR, iR), document.addEventListener("keydown", qR, iR), GR(document.activeElement), () => {
        document.removeEventListener("focusin", tR, iR), document.removeEventListener("focusout", uR, iR), document.removeEventListener("keydown", qR, iR)
      }
    }
    const iR = new Map;

    function fR(RR, JR) {
      var GR;
      let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      iR.set(yR, (null !== (GR = iR.get(yR)) && void 0 !== GR ? GR : 0) & ~RR | JR & RR);
      let uR = 0;
      for (const tR of iR.values()) uR |= tR;
      return (0, tR.H)(RR, uR & RR)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);