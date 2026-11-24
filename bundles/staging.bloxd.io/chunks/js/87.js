export const id = 87;
export const ids = [87];
export const modules = {
  4948: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Jt,
      h: () => Nt
    });
    var Ot = Vt(1404),
      qt = Vt(31);
    var Dt = Vt(391);
    var mt = Vt(710);
    var dt = Vt(2458),
      jt = Vt(4951),
      Ht = Vt(4971),
      Xt = Vt(4980);
    class Qt {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        this.id = tt, this.type = et, this.parameters = Vt, this.tearDownNotification = Ot, this.onDonePromise = qt, this.resolveRequest = Dt
      }
    }
    const lt = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class Et {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        this.id = tt, this.type = et, this.parameters = Vt, this.resolveRequest = Ot, this.onDonePromise = qt, this.tearDownNotification = Dt, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const mt = Nt[et];
        if (!mt) throw console.error(`No QTE implementation registered for type: ${et}`), new Error(`No QTE implementation registered for type: ${et}`);
        this.implementation = new mt(Vt, (tt => {
          this.isCompleted = !0, this.resolveRequest(tt)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = qt.j.subscribe("QTEMouseState", (tt => {
          let {
            isDown: et
          } = tt;
          this.isCompleted || this.implementation.handleMouseInput(et)
        })), this.stopInputActions = (0, Ht.i)((tt => {
          this.isCompleted || !lt.has(tt.action) && !(0, Ht.e)(tt) || this.implementation.handleMouseInput(tt.down)
        })), this.tickSub = qt.j.subscribe("noaTick", (tt => {
          if (this.isCompleted) return;
          const et = tt / 1e3;
          this.implementation.handleTick(et)
        })), this.stopShellTicks = (0, jt.p)((() => {
          this.isCompleted || this.implementation.handleTick(dt.q / 1e3)
        }))
      }
      cleanup() {
        var tt, et;
        this.mouseSub && (qt.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (tt = this.stopInputActions) || void 0 === tt || tt.call(this), this.stopInputActions = null, null === (et = this.stopShellTicks) || void 0 === et || et.call(this), this.stopShellTicks = null, this.tickSub && (qt.j.unsubscribe(this.tickSub), this.tickSub = null)
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
    const ft = new Ot.d,
      wt = new Map;
    let yt = null;
    const Nt = {
      progressBar: class {
        constructor(tt, et, Vt) {
          var Ot, qt, Dt, mt;
          this.resolveRequest = et, this.tearDownNotification = Vt, this.progress = 0, this.Oe = void 0, this.qe = void 0, this.De = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const dt = tt;
          this.Oe = null !== (Ot = dt.Oe) && void 0 !== Ot ? Ot : .075, this.qe = null !== (qt = dt.qe) && void 0 !== qt ? qt : 1, this.progress = null !== (Dt = dt.Ve) && void 0 !== Dt ? Dt : 30, this.De = null !== (mt = dt.De) && void 0 !== mt && mt, this.parameters = dt
        }
        handleMouseInput(tt) {
          tt && !this.isCompleted && (this.clickCount++, this.progress += this.qe, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.Oe, this.De && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(tt) {
          this.isCompleted = !0, this.resolveRequest(tt)
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
        constructor(tt, et, Vt) {
          var Ot;
          this.resolveRequest = et, this.tearDownNotification = Vt, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = tt, this.timeWindowMs = null !== (Ot = this.parameters.Qe) && void 0 !== Ot ? Ot : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(tt) {
          if (!tt || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(tt) {
          this.isCompleted = !0, this.resolveRequest(tt)
        }
        getState() {
          const tt = Date.now() - this.startTime,
            et = Math.max(0, this.timeWindowMs - tt);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: et,
              Qe: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(tt, et, Vt) {
          var Ot;
          this.resolveRequest = et, this.tearDownNotification = Vt, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const qt = tt;
          this.parameters = {
            ...qt,
            ye: Dt.e.clamp(qt.ye, .05, 1)
          }, this.progress = null !== (Ot = qt.Ve) && void 0 !== Ot ? Ot : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(tt) {
          this.isMouseDown = tt
        }
        handleTick(tt) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(tt))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const tt = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += tt * this.parameters.Ne * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const tt = Dt.e.clamp(1 - .7 * this.parameters.ae, 0, 1.4);
          return Math.floor(60 * tt + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.Me : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Dt.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const tt = this.parameters.ye / 2,
            et = tt,
            Vt = 1 - tt;
          this.catchZonePosition <= et ? (this.catchZonePosition = et, this.catchZoneVelocity = 0) : this.catchZonePosition >= Vt && (this.catchZonePosition = Vt, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const tt = this.parameters.ye / 2;
          return this.moverPosition >= this.catchZonePosition - tt && this.moverPosition <= this.catchZonePosition + tt
        }
        updateProgress(tt) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.Je * tt : this.progress -= this.parameters.Ce * tt, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.De && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(tt) {
          this.isCompleted = !0, this.resolveRequest(tt)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              ye: this.parameters.ye,
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
        constructor(tt, et, Vt) {
          var Ot, qt, mt, dt, jt;
          this.resolveRequest = et, this.tearDownNotification = Vt, this.startTime = void 0, this.speed = void 0, this.Ke = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const Ht = tt;
          this.parameters = {
            ...Ht,
            speed: null !== (Ot = Ht.speed) && void 0 !== Ot ? Ot : .5,
            Ke: Dt.e.clamp(Ht.Ke, .05, 1),
            label: null !== (qt = Ht.label) && void 0 !== qt ? qt : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (mt = Ht.icon) && void 0 !== mt ? mt : null,
            scale: null !== (dt = Ht.scale) && void 0 !== dt ? dt : 1,
            rotation: null !== (jt = Ht.rotation) && void 0 !== jt ? jt : 0
          }, this.speed = this.parameters.speed, this.Ke = this.parameters.Ke, this.startTime = Date.now()
        }
        handleMouseInput(tt) {
          if (tt) {
            this.updateMarkerPosition();
            const tt = Math.abs(this.markerPosition - .5) <= this.Ke / 2;
            this.complete(tt)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const tt = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = tt <= .5 ? 2 * tt : 2 - 2 * tt
        }
        complete(tt) {
          this.isCompleted = !0, this.resolveRequest(tt)
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
        constructor(tt, et, Vt) {
          this.resolveRequest = et, this.tearDownNotification = Vt, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = tt, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(tt) {
          if (!tt || this.isCompleted) return;
          const et = this.getOuterCircleProgress();
          if (et <= this.parameters.ce && et >= -this.parameters.ce) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.ve) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, mt.B)(this.parameters.Ie) && this.misses > this.parameters.Ie ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.ce && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Se
        }
        complete(tt) {
          this.isCompleted = !0, this.resolveRequest(tt)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              ve: this.parameters.ve,
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

    function Mt() {
      (0, Xt.g)(dt.u.Qte, yt ? dt.u.Qte : 0), yt ? qt.j.sw("qteStateUpdated", yt.getState()) : qt.j.sw("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class bt {
      constructor(tt, et) {
        this.resultPromise = tt, this.tearDownQTE = et
      }
      static create(tt, et, Vt) {
        const Ot = Promise.race([tt, et]);
        return new bt(Ot, Vt)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class Jt {
      static queueQTE(tt, et, Vt) {
        let Ot, qt;
        const Dt = new Promise((tt => {
            Ot = tt
          })),
          mt = new Promise((tt => {
            qt = () => {
              tt("qteTornDown")
            }
          })),
          dt = Promise.race([Dt, mt]).then((() => {})),
          jt = new Qt(tt, et, Vt, qt, dt, Ot);
        return wt.set(tt, jt), ft.enqueue(jt), yt || this.processNextQTE(), bt.create(Dt, mt, qt)
      }
      static async processNextQTE() {
        if (yt || ft.sE()) return void(ft.sE() && yt && (yt = null, Mt()));
        const tt = await ft.dequeue();
        if (!wt.has(tt.id)) return void await this.processNextQTE();
        wt.delete(tt.id);
        const et = new Et(tt.id, tt.type, tt.parameters, tt.resolveRequest, tt.onDonePromise, tt.tearDownNotification);
        yt = et, Mt();
        try {
          await et.waitUntilDone()
        } catch (Vt) {
          console.error("Error while waiting for QTE to resolve:", Vt.stack)
        }
        yt === et && (yt.cleanup(), yt = null, Mt()), await this.processNextQTE()
      }
      static cancelQTE(tt) {
        if (yt && yt.id === tt) return yt.tearDown(), yt = null, Mt(), void this.processNextQTE();
        const et = wt.get(tt);
        et && (wt.delete(tt), et.tearDownNotification())
      }
      static getCurrentState() {
        return yt ? yt.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        yt && (yt.tearDown(), yt = null), wt.forEach(((tt, et) => {
          this.cancelQTE(et)
        })), ft.emptyQueue(), wt.clear(), Mt()
      }
    }
  },
  4951: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => mt,
      C: () => dt,
      E: () => vt,
      c: () => ht,
      d: () => Jt,
      h: () => It,
      i: () => Rt,
      j: () => Nt,
      k: () => ut,
      m: () => bt,
      o: () => Ct,
      p: () => Wt,
      t: () => St,
      x: () => ct,
      z: () => Mt
    });
    var Ot = Vt(4958);
    const qt = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Dt = qt;

    function mt(tt) {
      Dt = null !== tt && void 0 !== tt ? tt : qt
    }

    function dt() {
      return Dt
    }
    const jt = new Set,
      Ht = new Set;
    let Xt = -1;
    const Qt = new Set,
      lt = new Set;
    let Et = 0,
      ft = 0;
    const wt = new Set,
      yt = new Set;

    function Nt(tt) {
      return jt.add(tt), () => {
        jt.delete(tt)
      }
    }

    function Mt(tt, et) {
      for (const Ot of jt) try {
        Ot(tt)
      } catch (Vt) {
        et(Vt)
      }
    }

    function bt(tt) {
      return Ht.add(tt), () => {
        Ht.delete(tt)
      }
    }

    function Jt(tt, et) {
      const Vt = Xt < 0 ? 0 : tt - Xt;
      Xt = tt;
      for (const qt of Ht) try {
        qt(Vt)
      } catch (Ot) {
        et(Ot)
      }
    }

    function Ct(tt) {
      return Qt.add(tt), () => {
        Qt.delete(tt)
      }
    }

    function ut(tt) {
      return lt.add(tt), () => {
        lt.delete(tt)
      }
    }
    let Kt = 0;

    function ht(tt) {
      Kt += tt
    }

    function vt() {
      const tt = Kt;
      return Kt = 0, tt
    }

    function Wt(tt) {
      return wt.add(tt), () => {
        wt.delete(tt)
      }
    }

    function St(tt) {
      return yt.add(tt), () => {
        yt.delete(tt)
      }
    }

    function ct() {
      Et = 0, ft = 0, Xt = -1
    }

    function Rt(tt, et) {
      if ("paced" === tt) return ft += et, null;
      if ("drawn" !== tt && "skipped" !== tt) return null;
      const Vt = et + ft;
      return ft = 0, Vt
    }

    function It(tt, et, Vt, qt) {
      const Dt = (0, Ot.f)(et),
        mt = tt > 0 ? performance.now() : 0;
      for (let Ot = 0; Ot < tt; Ot++)
        for (const tt of wt) try {
          tt()
        } catch (dt) {
          qt(dt)
        }
      if (tt > 0 && ht(performance.now() - mt), null !== Vt) {
        for (const tt of Qt) try {
          tt(Vt)
        } catch (dt) {
          qt(dt)
        }
        Et += Vt
      }
      if ("drawn" === et) {
        const tt = Et;
        Et = 0;
        for (const et of lt) try {
          et(tt)
        } catch (dt) {
          qt(dt)
        }
      }
      for (const Ot of yt) try {
        Ot(tt, Dt)
      } catch (dt) {
        qt(dt)
      }
    }
  },
  4971: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => jt,
      e: () => Dt,
      i: () => dt
    });
    var Ot = Vt(2458),
      qt = Vt(4974);

    function Dt(tt) {
      let {
        action: et,
        flags: Vt
      } = tt;
      return "mid-fire" === et && 0 !== (Vt & Ot.b.AltLeftClick)
    }
    const mt = new Set;

    function dt(tt) {
      return mt.add(tt), () => {
        mt.delete(tt)
      }
    }

    function jt(tt) {
      const et = qt.c[255 & tt];
      if (void 0 === et) return;
      const Vt = tt >>> 8 & 255,
        Dt = {
          action: et,
          down: 0 !== (Vt & Ot.b.Down),
          flags: Vt,
          press: tt >>> 16
        };
      for (const Ot of mt) Ot(Dt)
    }
  },
  4974: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      e: () => Dt,
      g: () => mt,
      h: () => Ot,
      i: () => dt
    });
    const Ot = {
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
      qt = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Dt = {
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
      mt = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      dt = [16]
  },
  4980: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => dt,
      f: () => mt,
      g: () => Ht
    });
    var Ot = Vt(2458),
      qt = Vt(2465);
    const Dt = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function mt(tt) {
      return tt instanceof HTMLElement && (!!(tt.isContentEditable || tt instanceof HTMLTextAreaElement || tt instanceof HTMLSelectElement) || tt instanceof HTMLInputElement && !Dt.has(tt.type))
    }

    function dt(tt) {
      let et = null;
      const Vt = Vt => {
          const qt = mt(Vt);
          qt !== et && (et = qt, tt(Ot.g.UiCapture, Ot.u.Keyboard, 0, 0, qt ? Ot.u.Keyboard : 0))
        },
        qt = tt => {
          Vt(tt.target)
        },
        Dt = tt => {
          Vt(tt.relatedTarget)
        },
        dt = () => {
          Vt(document.activeElement)
        },
        jt = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", qt, jt), document.addEventListener("focusout", Dt, jt), document.addEventListener("keydown", dt, jt), Vt(document.activeElement), () => {
        document.removeEventListener("focusin", qt, jt), document.removeEventListener("focusout", Dt, jt), document.removeEventListener("keydown", dt, jt)
      }
    }
    const jt = new Map;

    function Ht(tt, et) {
      var Vt;
      let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      jt.set(Ot, (null !== (Vt = jt.get(Ot)) && void 0 !== Vt ? Vt : 0) & ~tt | et & tt);
      let Dt = 0;
      for (const qt of jt.values()) Dt |= qt;
      return (0, qt.A)(tt, Dt & tt)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);