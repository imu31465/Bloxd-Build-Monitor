export const id = 102;
export const ids = [102];
export const modules = {
  5594: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => er,
      i: () => zr
    });
    var Zr = Qr(1405),
      Wr = Qr(34);
    var ar = Qr(379);
    var jr = Qr(688);
    var Ir = Qr(3372),
      fr = Qr(5602),
      Er = Qr(5619),
      pr = Qr(5628);
    class xr {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        this.id = rr, this.type = Sr, this.parameters = Qr, this.tearDownNotification = Zr, this.onDonePromise = Wr, this.resolveRequest = ar
      }
    }
    const mr = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class Nr {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        this.id = rr, this.type = Sr, this.parameters = Qr, this.resolveRequest = Zr, this.onDonePromise = Wr, this.tearDownNotification = ar, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const jr = zr[Sr];
        if (!jr) throw console.error(`No QTE implementation registered for type: ${Sr}`), new Error(`No QTE implementation registered for type: ${Sr}`);
        this.implementation = new jr(Qr, (rr => {
          this.isCompleted = !0, this.resolveRequest(rr)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Wr.i.subscribe("QTEMouseState", (rr => {
          let {
            isDown: Sr
          } = rr;
          this.isCompleted || this.implementation.handleMouseInput(Sr)
        })), this.stopInputActions = (0, Er.l)((rr => {
          this.isCompleted || !mr.has(rr.action) && !(0, Er.i)(rr) || this.implementation.handleMouseInput(rr.down)
        })), this.tickSub = Wr.i.subscribe("noaTick", (rr => {
          if (this.isCompleted) return;
          const Sr = rr / 1e3;
          this.implementation.handleTick(Sr)
        })), this.stopShellTicks = (0, fr.z)((() => {
          this.isCompleted || this.implementation.handleTick(Ir.q / 1e3)
        }))
      }
      cleanup() {
        var rr, Sr;
        this.mouseSub && (Wr.i.unsubscribe(this.mouseSub), this.mouseSub = null), null === (rr = this.stopInputActions) || void 0 === rr || rr.call(this), this.stopInputActions = null, null === (Sr = this.stopShellTicks) || void 0 === Sr || Sr.call(this), this.stopShellTicks = null, this.tickSub && (Wr.i.unsubscribe(this.tickSub), this.tickSub = null)
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
    const Ur = new Zr.c,
      tr = new Map;
    let hr = null;
    const zr = {
      progressBar: class {
        constructor(rr, Sr, Qr) {
          var Zr, Wr, ar, jr;
          this.resolveRequest = Sr, this.tearDownNotification = Qr, this.progress = 0, this.Ba = void 0, this.Ta = void 0, this.va = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const Ir = rr;
          this.Ba = null !== (Zr = Ir.Ba) && void 0 !== Zr ? Zr : .075, this.Ta = null !== (Wr = Ir.Ta) && void 0 !== Wr ? Wr : 1, this.progress = null !== (ar = Ir.ya) && void 0 !== ar ? ar : 30, this.va = null !== (jr = Ir.va) && void 0 !== jr && jr, this.parameters = Ir
        }
        handleMouseInput(rr) {
          rr && !this.isCompleted && (this.clickCount++, this.progress += this.Ta, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.Ba, this.va && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(rr) {
          this.isCompleted = !0, this.resolveRequest(rr)
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
        constructor(rr, Sr, Qr) {
          var Zr;
          this.resolveRequest = Sr, this.tearDownNotification = Qr, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = rr, this.timeWindowMs = null !== (Zr = this.parameters.la) && void 0 !== Zr ? Zr : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(rr) {
          if (!rr || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(rr) {
          this.isCompleted = !0, this.resolveRequest(rr)
        }
        getState() {
          const rr = Date.now() - this.startTime,
            Sr = Math.max(0, this.timeWindowMs - rr);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: Sr,
              la: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(rr, Sr, Qr) {
          var Zr;
          this.resolveRequest = Sr, this.tearDownNotification = Qr, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Wr = rr;
          this.parameters = {
            ...Wr,
            qa: ar.b.clamp(Wr.qa, .05, 1)
          }, this.progress = null !== (Zr = Wr.ya) && void 0 !== Zr ? Zr : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(rr) {
          this.isMouseDown = rr
        }
        handleTick(rr) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(rr))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const rr = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += rr * this.parameters.Ra * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const rr = ar.b.clamp(1 - .7 * this.parameters.ga, 0, 1.4);
          return Math.floor(60 * rr + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.Ca : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = ar.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const rr = this.parameters.qa / 2,
            Sr = rr,
            Qr = 1 - rr;
          this.catchZonePosition <= Sr ? (this.catchZonePosition = Sr, this.catchZoneVelocity = 0) : this.catchZonePosition >= Qr && (this.catchZonePosition = Qr, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const rr = this.parameters.qa / 2;
          return this.moverPosition >= this.catchZonePosition - rr && this.moverPosition <= this.catchZonePosition + rr
        }
        updateProgress(rr) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.Ma * rr : this.progress -= this.parameters.Ga * rr, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.va && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(rr) {
          this.isCompleted = !0, this.resolveRequest(rr)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              qa: this.parameters.qa,
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
        constructor(rr, Sr, Qr) {
          var Zr, Wr, jr, Ir, fr;
          this.resolveRequest = Sr, this.tearDownNotification = Qr, this.startTime = void 0, this.speed = void 0, this.Aa = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const Er = rr;
          this.parameters = {
            ...Er,
            speed: null !== (Zr = Er.speed) && void 0 !== Zr ? Zr : .5,
            Aa: ar.b.clamp(Er.Aa, .05, 1),
            label: null !== (Wr = Er.label) && void 0 !== Wr ? Wr : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (jr = Er.icon) && void 0 !== jr ? jr : null,
            scale: null !== (Ir = Er.scale) && void 0 !== Ir ? Ir : 1,
            rotation: null !== (fr = Er.rotation) && void 0 !== fr ? fr : 0
          }, this.speed = this.parameters.speed, this.Aa = this.parameters.Aa, this.startTime = Date.now()
        }
        handleMouseInput(rr) {
          if (rr) {
            this.updateMarkerPosition();
            const rr = Math.abs(this.markerPosition - .5) <= this.Aa / 2;
            this.complete(rr)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const rr = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = rr <= .5 ? 2 * rr : 2 - 2 * rr
        }
        complete(rr) {
          this.isCompleted = !0, this.resolveRequest(rr)
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
        constructor(rr, Sr, Qr) {
          this.resolveRequest = Sr, this.tearDownNotification = Qr, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = rr, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(rr) {
          if (!rr || this.isCompleted) return;
          const Sr = this.getOuterCircleProgress();
          if (Sr <= this.parameters.ca && Sr >= -this.parameters.ca) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.ia) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, jr.L)(this.parameters.Fa) && this.misses > this.parameters.Fa ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.ca && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.wa
        }
        complete(rr) {
          this.isCompleted = !0, this.resolveRequest(rr)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              ia: this.parameters.ia,
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

    function Yr() {
      (0, pr.f)(Ir.y.Qte, hr ? Ir.y.Qte : 0), hr ? Wr.i.Jp("qteStateUpdated", hr.getState()) : Wr.i.Jp("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class nr {
      constructor(rr, Sr) {
        this.resultPromise = rr, this.tearDownQTE = Sr
      }
      static create(rr, Sr, Qr) {
        const Zr = Promise.race([rr, Sr]);
        return new nr(Zr, Qr)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class er {
      static queueQTE(rr, Sr, Qr) {
        let Zr, Wr;
        const ar = new Promise((rr => {
            Zr = rr
          })),
          jr = new Promise((rr => {
            Wr = () => {
              rr("qteTornDown")
            }
          })),
          Ir = Promise.race([ar, jr]).then((() => {})),
          fr = new xr(rr, Sr, Qr, Wr, Ir, Zr);
        return tr.set(rr, fr), Ur.enqueue(fr), hr || this.processNextQTE(), nr.create(ar, jr, Wr)
      }
      static async processNextQTE() {
        if (hr || Ur.nx()) return void(Ur.nx() && hr && (hr = null, Yr()));
        const rr = await Ur.dequeue();
        if (!tr.has(rr.id)) return void await this.processNextQTE();
        tr.delete(rr.id);
        const Sr = new Nr(rr.id, rr.type, rr.parameters, rr.resolveRequest, rr.onDonePromise, rr.tearDownNotification);
        hr = Sr, Yr();
        try {
          await Sr.waitUntilDone()
        } catch (Qr) {
          console.error("Error while waiting for QTE to resolve:", Qr.stack)
        }
        hr === Sr && (hr.cleanup(), hr = null, Yr()), await this.processNextQTE()
      }
      static cancelQTE(rr) {
        if (hr && hr.id === rr) return hr.tearDown(), hr = null, Yr(), void this.processNextQTE();
        const Sr = tr.get(rr);
        Sr && (tr.delete(rr), Sr.tearDownNotification())
      }
      static getCurrentState() {
        return hr ? hr.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        hr && (hr.tearDown(), hr = null), tr.forEach(((rr, Sr) => {
          this.cancelQTE(Sr)
        })), Ur.emptyQueue(), tr.clear(), Yr()
      }
    }
  },
  5602: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => Lr,
      E: () => lr,
      G: () => Yr,
      K: () => jr,
      N: () => Ir,
      Q: () => vr,
      e: () => Tr,
      i: () => er,
      m: () => Pr,
      p: () => Xr,
      r: () => zr,
      u: () => yr,
      v: () => nr,
      w: () => Kr,
      z: () => Or
    });
    var Zr = Qr(5604);
    const Wr = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ar = Wr;

    function jr(rr) {
      ar = null !== rr && void 0 !== rr ? rr : Wr
    }

    function Ir() {
      return ar
    }
    const fr = new Set,
      Er = new Set;
    let pr = -1;
    const xr = new Set,
      mr = new Set;
    let Nr = 0,
      Ur = 0;
    const tr = new Set,
      hr = new Set;

    function zr(rr) {
      return fr.add(rr), () => {
        fr.delete(rr)
      }
    }

    function Yr(rr, Sr) {
      for (const Zr of fr) try {
        Zr(rr)
      } catch (Qr) {
        Sr(Qr)
      }
    }

    function nr(rr) {
      return Er.add(rr), () => {
        Er.delete(rr)
      }
    }

    function er(rr, Sr) {
      const Qr = pr < 0 ? 0 : rr - pr;
      pr = rr;
      for (const Wr of Er) try {
        Wr(Qr)
      } catch (Zr) {
        Sr(Zr)
      }
    }

    function Kr(rr) {
      return xr.add(rr), () => {
        xr.delete(rr)
      }
    }

    function yr(rr) {
      return mr.add(rr), () => {
        mr.delete(rr)
      }
    }
    let Br = 0;

    function Tr(rr) {
      Br += rr
    }

    function vr() {
      const rr = Br;
      return Br = 0, rr
    }

    function Or(rr) {
      return tr.add(rr), () => {
        tr.delete(rr)
      }
    }

    function Lr(rr) {
      return hr.add(rr), () => {
        hr.delete(rr)
      }
    }

    function lr() {
      Nr = 0, Ur = 0, pr = -1
    }

    function Xr(rr, Sr) {
      if ("paced" === rr) return Ur += Sr, null;
      if ("drawn" !== rr && "skipped" !== rr) return null;
      const Qr = Sr + Ur;
      return Ur = 0, Qr
    }

    function Pr(rr, Sr, Qr, Wr) {
      const ar = (0, Zr.i)(Sr),
        jr = rr > 0 ? performance.now() : 0;
      for (let Zr = 0; Zr < rr; Zr++)
        for (const rr of tr) try {
          rr()
        } catch (Ir) {
          Wr(Ir)
        }
      if (rr > 0 && Tr(performance.now() - jr), null !== Qr) {
        for (const rr of xr) try {
          rr(Qr)
        } catch (Ir) {
          Wr(Ir)
        }
        Nr += Qr
      }
      if ("drawn" === Sr) {
        const rr = Nr;
        Nr = 0;
        for (const Sr of mr) try {
          Sr(rr)
        } catch (Ir) {
          Wr(Ir)
        }
      }
      for (const Zr of hr) try {
        Zr(rr, ar)
      } catch (Ir) {
        Wr(Ir)
      }
    }
  },
  5619: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => fr,
      i: () => ar,
      l: () => Ir
    });
    var Zr = Qr(3372),
      Wr = Qr(5623);

    function ar(rr) {
      let {
        action: Sr,
        flags: Qr
      } = rr;
      return "mid-fire" === Sr && 0 !== (Qr & Zr.e.AltLeftClick)
    }
    const jr = new Set;

    function Ir(rr) {
      return jr.add(rr), () => {
        jr.delete(rr)
      }
    }

    function fr(rr) {
      const Sr = Wr.d[255 & rr];
      if (void 0 === Sr) return;
      const Qr = rr >>> 8 & 255,
        ar = {
          action: Sr,
          down: 0 !== (Qr & Zr.e.Down),
          flags: Qr,
          press: rr >>> 16
        };
      for (const Zr of jr) Zr(ar)
    }
  },
  5623: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr,
      e: () => ar,
      g: () => jr,
      i: () => Zr,
      m: () => Ir
    });
    const Zr = {
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
      Wr = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ar = {
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
      jr = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      Ir = [16]
  },
  5628: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      e: () => jr,
      f: () => Er
    });
    var Zr = Qr(3372),
      Wr = Qr(3378);
    const ar = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function jr(rr) {
      return rr instanceof HTMLElement && (!!(rr.isContentEditable || rr instanceof HTMLTextAreaElement || rr instanceof HTMLSelectElement) || rr instanceof HTMLInputElement && !ar.has(rr.type))
    }

    function Ir(rr) {
      let Sr = null;
      const Qr = Qr => {
          const Wr = jr(Qr);
          Wr !== Sr && (Sr = Wr, rr(Zr.g.UiCapture, Zr.y.Keyboard, 0, 0, Wr ? Zr.y.Keyboard : 0))
        },
        Wr = rr => {
          Qr(rr.target)
        },
        ar = rr => {
          Qr(rr.relatedTarget)
        },
        Ir = () => {
          Qr(document.activeElement)
        },
        fr = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Wr, fr), document.addEventListener("focusout", ar, fr), document.addEventListener("keydown", Ir, fr), Qr(document.activeElement), () => {
        document.removeEventListener("focusin", Wr, fr), document.removeEventListener("focusout", ar, fr), document.removeEventListener("keydown", Ir, fr)
      }
    }
    const fr = new Map;

    function Er(rr, Sr) {
      var Qr;
      let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      fr.set(Zr, (null !== (Qr = fr.get(Zr)) && void 0 !== Qr ? Qr : 0) & ~rr | Sr & rr);
      let ar = 0;
      for (const Wr of fr.values()) ar |= Wr;
      return (0, Wr.A)(rr, ar & rr)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);