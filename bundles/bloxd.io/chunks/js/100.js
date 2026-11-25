export const id = 100;
export const ids = [100];
export const modules = {
  5184: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => UM,
      f: () => yM
    });
    var OM = iM(1352),
      SM = iM(22);
    var jM = iM(332);
    var aM = iM(625);
    var PM = iM(2619),
      nM = iM(5188),
      QM = iM(5204),
      zM = iM(5214);
    class LM {
      constructor(MM, rM, iM, OM, SM, jM) {
        this.id = MM, this.type = rM, this.parameters = iM, this.tearDownNotification = OM, this.onDonePromise = SM, this.resolveRequest = jM
      }
    }
    const mM = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class HM {
      constructor(MM, rM, iM, OM, SM, jM) {
        this.id = MM, this.type = rM, this.parameters = iM, this.resolveRequest = OM, this.onDonePromise = SM, this.tearDownNotification = jM, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const aM = yM[rM];
        if (!aM) throw console.error(`No QTE implementation registered for type: ${rM}`), new Error(`No QTE implementation registered for type: ${rM}`);
        this.implementation = new aM(iM, (MM => {
          this.isCompleted = !0, this.resolveRequest(MM)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = SM.i.subscribe("QTEMouseState", (MM => {
          let {
            isDown: rM
          } = MM;
          this.isCompleted || this.implementation.handleMouseInput(rM)
        })), this.stopInputActions = (0, QM.f)((MM => {
          this.isCompleted || !mM.has(MM.action) && !(0, QM.e)(MM) || this.implementation.handleMouseInput(MM.down)
        })), this.tickSub = SM.i.subscribe("noaTick", (MM => {
          if (this.isCompleted) return;
          const rM = MM / 1e3;
          this.implementation.handleTick(rM)
        })), this.stopShellTicks = (0, nM.y)((() => {
          this.isCompleted || this.implementation.handleTick(PM.v / 1e3)
        }))
      }
      cleanup() {
        var MM, rM;
        this.mouseSub && (SM.i.unsubscribe(this.mouseSub), this.mouseSub = null), null === (MM = this.stopInputActions) || void 0 === MM || MM.call(this), this.stopInputActions = null, null === (rM = this.stopShellTicks) || void 0 === rM || rM.call(this), this.stopShellTicks = null, this.tickSub && (SM.i.unsubscribe(this.tickSub), this.tickSub = null)
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
    const hM = new OM.d,
      JM = new Map;
    let dM = null;
    const yM = {
      progressBar: class {
        constructor(MM, rM, iM) {
          var OM, SM, jM, aM;
          this.resolveRequest = rM, this.tearDownNotification = iM, this.progress = 0, this.RO = void 0, this.pO = void 0, this.WO = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const PM = MM;
          this.RO = null !== (OM = PM.RO) && void 0 !== OM ? OM : .075, this.pO = null !== (SM = PM.pO) && void 0 !== SM ? SM : 1, this.progress = null !== (jM = PM.uO) && void 0 !== jM ? jM : 30, this.WO = null !== (aM = PM.WO) && void 0 !== aM && aM, this.parameters = PM
        }
        handleMouseInput(MM) {
          MM && !this.isCompleted && (this.clickCount++, this.progress += this.pO, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.RO, this.WO && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(MM) {
          this.isCompleted = !0, this.resolveRequest(MM)
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
        constructor(MM, rM, iM) {
          var OM;
          this.resolveRequest = rM, this.tearDownNotification = iM, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = MM, this.timeWindowMs = null !== (OM = this.parameters.kO) && void 0 !== OM ? OM : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(MM) {
          if (!MM || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(MM) {
          this.isCompleted = !0, this.resolveRequest(MM)
        }
        getState() {
          const MM = Date.now() - this.startTime,
            rM = Math.max(0, this.timeWindowMs - MM);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: rM,
              kO: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(MM, rM, iM) {
          var OM;
          this.resolveRequest = rM, this.tearDownNotification = iM, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const SM = MM;
          this.parameters = {
            ...SM,
            YO: jM.d.clamp(SM.YO, .05, 1)
          }, this.progress = null !== (OM = SM.uO) && void 0 !== OM ? OM : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(MM) {
          this.isMouseDown = MM
        }
        handleTick(MM) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(MM))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const MM = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += MM * this.parameters.AO * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const MM = jM.d.clamp(1 - .7 * this.parameters.xO, 0, 1.4);
          return Math.floor(60 * MM + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.vO : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = jM.d.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const MM = this.parameters.YO / 2,
            rM = MM,
            iM = 1 - MM;
          this.catchZonePosition <= rM ? (this.catchZonePosition = rM, this.catchZoneVelocity = 0) : this.catchZonePosition >= iM && (this.catchZonePosition = iM, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const MM = this.parameters.YO / 2;
          return this.moverPosition >= this.catchZonePosition - MM && this.moverPosition <= this.catchZonePosition + MM
        }
        updateProgress(MM) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.FO * MM : this.progress -= this.parameters.BO * MM, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.WO && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(MM) {
          this.isCompleted = !0, this.resolveRequest(MM)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              YO: this.parameters.YO,
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
        constructor(MM, rM, iM) {
          var OM, SM, aM, PM, nM;
          this.resolveRequest = rM, this.tearDownNotification = iM, this.startTime = void 0, this.speed = void 0, this.IO = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const QM = MM;
          this.parameters = {
            ...QM,
            speed: null !== (OM = QM.speed) && void 0 !== OM ? OM : .5,
            IO: jM.d.clamp(QM.IO, .05, 1),
            label: null !== (SM = QM.label) && void 0 !== SM ? SM : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (aM = QM.icon) && void 0 !== aM ? aM : null,
            scale: null !== (PM = QM.scale) && void 0 !== PM ? PM : 1,
            rotation: null !== (nM = QM.rotation) && void 0 !== nM ? nM : 0
          }, this.speed = this.parameters.speed, this.IO = this.parameters.IO, this.startTime = Date.now()
        }
        handleMouseInput(MM) {
          if (MM) {
            this.updateMarkerPosition();
            const MM = Math.abs(this.markerPosition - .5) <= this.IO / 2;
            this.complete(MM)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const MM = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = MM <= .5 ? 2 * MM : 2 - 2 * MM
        }
        complete(MM) {
          this.isCompleted = !0, this.resolveRequest(MM)
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
        constructor(MM, rM, iM) {
          this.resolveRequest = rM, this.tearDownNotification = iM, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = MM, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(MM) {
          if (!MM || this.isCompleted) return;
          const rM = this.getOuterCircleProgress();
          if (rM <= this.parameters.cO && rM >= -this.parameters.cO) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.qO) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, aM.J)(this.parameters.MS) && this.misses > this.parameters.MS ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.cO && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.VO
        }
        complete(MM) {
          this.isCompleted = !0, this.resolveRequest(MM)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              qO: this.parameters.qO,
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

    function lM() {
      (0, zM.k)(PM.C.Qte, dM ? PM.C.Qte : 0), dM ? SM.i.Tz("qteStateUpdated", dM.getState()) : SM.i.Tz("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class EM {
      constructor(MM, rM) {
        this.resultPromise = MM, this.tearDownQTE = rM
      }
      static create(MM, rM, iM) {
        const OM = Promise.race([MM, rM]);
        return new EM(OM, iM)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class UM {
      static queueQTE(MM, rM, iM) {
        let OM, SM;
        const jM = new Promise((MM => {
            OM = MM
          })),
          aM = new Promise((MM => {
            SM = () => {
              MM("qteTornDown")
            }
          })),
          PM = Promise.race([jM, aM]).then((() => {})),
          nM = new LM(MM, rM, iM, SM, PM, OM);
        return JM.set(MM, nM), hM.enqueue(nM), dM || this.processNextQTE(), EM.create(jM, aM, SM)
      }
      static async processNextQTE() {
        if (dM || hM.dL()) return void(hM.dL() && dM && (dM = null, lM()));
        const MM = await hM.dequeue();
        if (!JM.has(MM.id)) return void await this.processNextQTE();
        JM.delete(MM.id);
        const rM = new HM(MM.id, MM.type, MM.parameters, MM.resolveRequest, MM.onDonePromise, MM.tearDownNotification);
        dM = rM, lM();
        try {
          await rM.waitUntilDone()
        } catch (iM) {
          console.error("Error while waiting for QTE to resolve:", iM.stack)
        }
        dM === rM && (dM.cleanup(), dM = null, lM()), await this.processNextQTE()
      }
      static cancelQTE(MM) {
        if (dM && dM.id === MM) return dM.tearDown(), dM = null, lM(), void this.processNextQTE();
        const rM = JM.get(MM);
        rM && (JM.delete(MM), rM.tearDownNotification())
      }
      static getCurrentState() {
        return dM ? dM.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        dM && (dM.tearDown(), dM = null), JM.forEach(((MM, rM) => {
          this.cancelQTE(rM)
        })), hM.emptyQueue(), JM.clear(), lM()
      }
    }
  },
  5188: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => gM,
      B: () => uM,
      F: () => lM,
      H: () => aM,
      I: () => PM,
      K: () => wM,
      e: () => bM,
      g: () => UM,
      i: () => pM,
      k: () => RM,
      n: () => yM,
      r: () => CM,
      v: () => EM,
      x: () => GM,
      y: () => tM
    });
    var OM = iM(5196);
    const SM = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let jM = SM;

    function aM(MM) {
      jM = null !== MM && void 0 !== MM ? MM : SM
    }

    function PM() {
      return jM
    }
    const nM = new Set,
      QM = new Set;
    let zM = -1;
    const LM = new Set,
      mM = new Set;
    let HM = 0,
      hM = 0;
    const JM = new Set,
      dM = new Set;

    function yM(MM) {
      return nM.add(MM), () => {
        nM.delete(MM)
      }
    }

    function lM(MM, rM) {
      for (const OM of nM) try {
        OM(MM)
      } catch (iM) {
        rM(iM)
      }
    }

    function EM(MM) {
      return QM.add(MM), () => {
        QM.delete(MM)
      }
    }

    function UM(MM, rM) {
      const iM = zM < 0 ? 0 : MM - zM;
      zM = MM;
      for (const SM of QM) try {
        SM(iM)
      } catch (OM) {
        rM(OM)
      }
    }

    function GM(MM) {
      return LM.add(MM), () => {
        LM.delete(MM)
      }
    }

    function CM(MM) {
      return mM.add(MM), () => {
        mM.delete(MM)
      }
    }
    let eM = 0;

    function bM(MM) {
      eM += MM
    }

    function wM() {
      const MM = eM;
      return eM = 0, MM
    }

    function tM(MM) {
      return JM.add(MM), () => {
        JM.delete(MM)
      }
    }

    function gM(MM) {
      return dM.add(MM), () => {
        dM.delete(MM)
      }
    }

    function uM() {
      HM = 0, hM = 0, zM = -1
    }

    function RM(MM, rM) {
      if ("paced" === MM) return hM += rM, null;
      if ("drawn" !== MM && "skipped" !== MM) return null;
      const iM = rM + hM;
      return hM = 0, iM
    }

    function pM(MM, rM, iM, SM) {
      const jM = (0, OM.l)(rM),
        aM = MM > 0 ? performance.now() : 0;
      for (let OM = 0; OM < MM; OM++)
        for (const MM of JM) try {
          MM()
        } catch (PM) {
          SM(PM)
        }
      if (MM > 0 && bM(performance.now() - aM), null !== iM) {
        for (const MM of LM) try {
          MM(iM)
        } catch (PM) {
          SM(PM)
        }
        HM += iM
      }
      if ("drawn" === rM) {
        const MM = HM;
        HM = 0;
        for (const rM of mM) try {
          rM(MM)
        } catch (PM) {
          SM(PM)
        }
      }
      for (const OM of dM) try {
        OM(MM, jM)
      } catch (PM) {
        SM(PM)
      }
    }
  },
  5204: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM,
      e: () => jM,
      f: () => PM
    });
    var OM = iM(2619),
      SM = iM(5207);

    function jM(MM) {
      let {
        action: rM,
        flags: iM
      } = MM;
      return "mid-fire" === rM && 0 !== (iM & OM.d.AltLeftClick)
    }
    const aM = new Set;

    function PM(MM) {
      return aM.add(MM), () => {
        aM.delete(MM)
      }
    }

    function nM(MM) {
      const rM = SM.c[255 & MM];
      if (void 0 === rM) return;
      const iM = MM >>> 8 & 255,
        jM = {
          action: rM,
          down: 0 !== (iM & OM.d.Down),
          flags: iM,
          press: MM >>> 16
        };
      for (const OM of aM) OM(jM)
    }
  },
  5207: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      g: () => jM,
      j: () => aM,
      n: () => OM,
      o: () => PM
    });
    const OM = {
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
      SM = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      jM = {
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
      aM = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      PM = [16]
  },
  5214: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      h: () => aM,
      k: () => QM
    });
    var OM = iM(2619),
      SM = iM(2622);
    const jM = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function aM(MM) {
      return MM instanceof HTMLElement && (!!(MM.isContentEditable || MM instanceof HTMLTextAreaElement || MM instanceof HTMLSelectElement) || MM instanceof HTMLInputElement && !jM.has(MM.type))
    }

    function PM(MM) {
      let rM = null;
      const iM = iM => {
          const SM = aM(iM);
          SM !== rM && (rM = SM, MM(OM.l.UiCapture, OM.C.Keyboard, 0, 0, SM ? OM.C.Keyboard : 0))
        },
        SM = MM => {
          iM(MM.target)
        },
        jM = MM => {
          iM(MM.relatedTarget)
        },
        PM = () => {
          iM(document.activeElement)
        },
        nM = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", SM, nM), document.addEventListener("focusout", jM, nM), document.addEventListener("keydown", PM, nM), iM(document.activeElement), () => {
        document.removeEventListener("focusin", SM, nM), document.removeEventListener("focusout", jM, nM), document.removeEventListener("keydown", PM, nM)
      }
    }
    const nM = new Map;

    function QM(MM, rM) {
      var iM;
      let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      nM.set(OM, (null !== (iM = nM.get(OM)) && void 0 !== iM ? iM : 0) & ~MM | rM & MM);
      let jM = 0;
      for (const SM of nM.values()) jM |= SM;
      return (0, SM.B)(MM, jM & MM)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);