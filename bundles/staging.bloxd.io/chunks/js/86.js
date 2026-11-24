export const id = 86;
export const ids = [86];
export const modules = {
  4717: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Km,
      h: () => jm
    });
    var hm = fm(1304),
      Am = fm(31);
    var am = fm(354);
    var xm = fm(653);
    var wm = fm(2364),
      Dm = fm(4722),
      im = fm(4747),
      Rm = fm(4763);
    class pm {
      constructor(mm, Tm, fm, hm, Am, am) {
        this.id = mm, this.type = Tm, this.parameters = fm, this.tearDownNotification = hm, this.onDonePromise = Am, this.resolveRequest = am
      }
    }
    const Em = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class om {
      constructor(mm, Tm, fm, hm, Am, am) {
        this.id = mm, this.type = Tm, this.parameters = fm, this.resolveRequest = hm, this.onDonePromise = Am, this.tearDownNotification = am, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const xm = jm[Tm];
        if (!xm) throw console.error(`No QTE implementation registered for type: ${Tm}`), new Error(`No QTE implementation registered for type: ${Tm}`);
        this.implementation = new xm(fm, (mm => {
          this.isCompleted = !0, this.resolveRequest(mm)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Am.j.subscribe("QTEMouseState", (mm => {
          let {
            isDown: Tm
          } = mm;
          this.isCompleted || this.implementation.handleMouseInput(Tm)
        })), this.stopInputActions = (0, im.g)((mm => {
          this.isCompleted || !Em.has(mm.action) && !(0, im.e)(mm) || this.implementation.handleMouseInput(mm.down)
        })), this.tickSub = Am.j.subscribe("noaTick", (mm => {
          if (this.isCompleted) return;
          const Tm = mm / 1e3;
          this.implementation.handleTick(Tm)
        })), this.stopShellTicks = (0, Dm.y)((() => {
          this.isCompleted || this.implementation.handleTick(wm.s / 1e3)
        }))
      }
      cleanup() {
        var mm, Tm;
        this.mouseSub && (Am.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (mm = this.stopInputActions) || void 0 === mm || mm.call(this), this.stopInputActions = null, null === (Tm = this.stopShellTicks) || void 0 === Tm || Tm.call(this), this.stopShellTicks = null, this.tickSub && (Am.j.unsubscribe(this.tickSub), this.tickSub = null)
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
    const Om = new hm.e,
      Ym = new Map;
    let qm = null;
    const jm = {
      progressBar: class {
        constructor(mm, Tm, fm) {
          var hm, Am, am, xm;
          this.resolveRequest = Tm, this.tearDownNotification = fm, this.progress = 0, this.ef = void 0, this.Nf = void 0, this.Gf = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const wm = mm;
          this.ef = null !== (hm = wm.ef) && void 0 !== hm ? hm : .075, this.Nf = null !== (Am = wm.Nf) && void 0 !== Am ? Am : 1, this.progress = null !== (am = wm.Sf) && void 0 !== am ? am : 30, this.Gf = null !== (xm = wm.Gf) && void 0 !== xm && xm, this.parameters = wm
        }
        handleMouseInput(mm) {
          mm && !this.isCompleted && (this.clickCount++, this.progress += this.Nf, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.ef, this.Gf && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(mm) {
          this.isCompleted = !0, this.resolveRequest(mm)
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
        constructor(mm, Tm, fm) {
          var hm;
          this.resolveRequest = Tm, this.tearDownNotification = fm, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = mm, this.timeWindowMs = null !== (hm = this.parameters.Cf) && void 0 !== hm ? hm : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(mm) {
          if (!mm || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(mm) {
          this.isCompleted = !0, this.resolveRequest(mm)
        }
        getState() {
          const mm = Date.now() - this.startTime,
            Tm = Math.max(0, this.timeWindowMs - mm);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: Tm,
              Cf: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(mm, Tm, fm) {
          var hm;
          this.resolveRequest = Tm, this.tearDownNotification = fm, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Am = mm;
          this.parameters = {
            ...Am,
            Mf: am.c.clamp(Am.Mf, .05, 1)
          }, this.progress = null !== (hm = Am.Sf) && void 0 !== hm ? hm : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(mm) {
          this.isMouseDown = mm
        }
        handleTick(mm) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(mm))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const mm = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += mm * this.parameters.uf * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const mm = am.c.clamp(1 - .7 * this.parameters.Bf, 0, 1.4);
          return Math.floor(60 * mm + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.Lf : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = am.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const mm = this.parameters.Mf / 2,
            Tm = mm,
            fm = 1 - mm;
          this.catchZonePosition <= Tm ? (this.catchZonePosition = Tm, this.catchZoneVelocity = 0) : this.catchZonePosition >= fm && (this.catchZonePosition = fm, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const mm = this.parameters.Mf / 2;
          return this.moverPosition >= this.catchZonePosition - mm && this.moverPosition <= this.catchZonePosition + mm
        }
        updateProgress(mm) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.vf * mm : this.progress -= this.parameters.tf * mm, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.Gf && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(mm) {
          this.isCompleted = !0, this.resolveRequest(mm)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Mf: this.parameters.Mf,
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
        constructor(mm, Tm, fm) {
          var hm, Am, xm, wm, Dm;
          this.resolveRequest = Tm, this.tearDownNotification = fm, this.startTime = void 0, this.speed = void 0, this.df = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const im = mm;
          this.parameters = {
            ...im,
            speed: null !== (hm = im.speed) && void 0 !== hm ? hm : .5,
            df: am.c.clamp(im.df, .05, 1),
            label: null !== (Am = im.label) && void 0 !== Am ? Am : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (xm = im.icon) && void 0 !== xm ? xm : null,
            scale: null !== (wm = im.scale) && void 0 !== wm ? wm : 1,
            rotation: null !== (Dm = im.rotation) && void 0 !== Dm ? Dm : 0
          }, this.speed = this.parameters.speed, this.df = this.parameters.df, this.startTime = Date.now()
        }
        handleMouseInput(mm) {
          if (mm) {
            this.updateMarkerPosition();
            const mm = Math.abs(this.markerPosition - .5) <= this.df / 2;
            this.complete(mm)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const mm = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = mm <= .5 ? 2 * mm : 2 - 2 * mm
        }
        complete(mm) {
          this.isCompleted = !0, this.resolveRequest(mm)
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
        constructor(mm, Tm, fm) {
          this.resolveRequest = Tm, this.tearDownNotification = fm, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = mm, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(mm) {
          if (!mm || this.isCompleted) return;
          const Tm = this.getOuterCircleProgress();
          if (Tm <= this.parameters.mh && Tm >= -this.parameters.mh) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Wf) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, xm.H)(this.parameters.Th) && this.misses > this.parameters.Th ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.mh && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Ff
        }
        complete(mm) {
          this.isCompleted = !0, this.resolveRequest(mm)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              Wf: this.parameters.Wf,
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

    function Vm() {
      (0, Rm.h)(wm.w.Qte, qm ? wm.w.Qte : 0), qm ? Am.j.gp("qteStateUpdated", qm.getState()) : Am.j.gp("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class Im {
      constructor(mm, Tm) {
        this.resultPromise = mm, this.tearDownQTE = Tm
      }
      static create(mm, Tm, fm) {
        const hm = Promise.race([mm, Tm]);
        return new Im(hm, fm)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class Km {
      static queueQTE(mm, Tm, fm) {
        let hm, Am;
        const am = new Promise((mm => {
            hm = mm
          })),
          xm = new Promise((mm => {
            Am = () => {
              mm("qteTornDown")
            }
          })),
          wm = Promise.race([am, xm]).then((() => {})),
          Dm = new pm(mm, Tm, fm, Am, wm, hm);
        return Ym.set(mm, Dm), Om.enqueue(Dm), qm || this.processNextQTE(), Im.create(am, xm, Am)
      }
      static async processNextQTE() {
        if (qm || Om.ZO()) return void(Om.ZO() && qm && (qm = null, Vm()));
        const mm = await Om.dequeue();
        if (!Ym.has(mm.id)) return void await this.processNextQTE();
        Ym.delete(mm.id);
        const Tm = new om(mm.id, mm.type, mm.parameters, mm.resolveRequest, mm.onDonePromise, mm.tearDownNotification);
        qm = Tm, Vm();
        try {
          await Tm.waitUntilDone()
        } catch (fm) {
          console.error("Error while waiting for QTE to resolve:", fm.stack)
        }
        qm === Tm && (qm.cleanup(), qm = null, Vm()), await this.processNextQTE()
      }
      static cancelQTE(mm) {
        if (qm && qm.id === mm) return qm.tearDown(), qm = null, Vm(), void this.processNextQTE();
        const Tm = Ym.get(mm);
        Tm && (Ym.delete(mm), Tm.tearDownNotification())
      }
      static getCurrentState() {
        return qm ? qm.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        qm && (qm.tearDown(), qm = null), Ym.forEach(((mm, Tm) => {
          this.cancelQTE(Tm)
        })), Om.emptyQueue(), Ym.clear(), Vm()
      }
    }
  },
  4722: (mm, Tm, fm) => {
    fm.d(Tm, {
      B: () => bm,
      F: () => Vm,
      G: () => xm,
      J: () => wm,
      K: () => zm,
      d: () => cm,
      h: () => Km,
      j: () => em,
      m: () => Sm,
      p: () => jm,
      q: () => nm,
      s: () => Im,
      u: () => Qm,
      y: () => Zm,
      z: () => km
    });
    var hm = fm(4729);
    const Am = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let am = Am;

    function xm(mm) {
      am = null !== mm && void 0 !== mm ? mm : Am
    }

    function wm() {
      return am
    }
    const Dm = new Set,
      im = new Set;
    let Rm = -1;
    const pm = new Set,
      Em = new Set;
    let om = 0,
      Om = 0;
    const Ym = new Set,
      qm = new Set;

    function jm(mm) {
      return Dm.add(mm), () => {
        Dm.delete(mm)
      }
    }

    function Vm(mm, Tm) {
      for (const hm of Dm) try {
        hm(mm)
      } catch (fm) {
        Tm(fm)
      }
    }

    function Im(mm) {
      return im.add(mm), () => {
        im.delete(mm)
      }
    }

    function Km(mm, Tm) {
      const fm = Rm < 0 ? 0 : mm - Rm;
      Rm = mm;
      for (const Am of im) try {
        Am(fm)
      } catch (hm) {
        Tm(hm)
      }
    }

    function Qm(mm) {
      return pm.add(mm), () => {
        pm.delete(mm)
      }
    }

    function nm(mm) {
      return Em.add(mm), () => {
        Em.delete(mm)
      }
    }
    let Jm = 0;

    function cm(mm) {
      Jm += mm
    }

    function zm() {
      const mm = Jm;
      return Jm = 0, mm
    }

    function Zm(mm) {
      return Ym.add(mm), () => {
        Ym.delete(mm)
      }
    }

    function km(mm) {
      return qm.add(mm), () => {
        qm.delete(mm)
      }
    }

    function bm() {
      om = 0, Om = 0, Rm = -1
    }

    function Sm(mm, Tm) {
      if ("paced" === mm) return Om += Tm, null;
      if ("drawn" !== mm && "skipped" !== mm) return null;
      const fm = Tm + Om;
      return Om = 0, fm
    }

    function em(mm, Tm, fm, Am) {
      const am = (0, hm.f)(Tm),
        xm = mm > 0 ? performance.now() : 0;
      for (let hm = 0; hm < mm; hm++)
        for (const mm of Ym) try {
          mm()
        } catch (wm) {
          Am(wm)
        }
      if (mm > 0 && cm(performance.now() - xm), null !== fm) {
        for (const mm of pm) try {
          mm(fm)
        } catch (wm) {
          Am(wm)
        }
        om += fm
      }
      if ("drawn" === Tm) {
        const mm = om;
        om = 0;
        for (const Tm of Em) try {
          Tm(mm)
        } catch (wm) {
          Am(wm)
        }
      }
      for (const hm of qm) try {
        hm(mm, am)
      } catch (wm) {
        Am(wm)
      }
    }
  },
  4747: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm,
      e: () => am,
      g: () => wm
    });
    var hm = fm(2364),
      Am = fm(4755);

    function am(mm) {
      let {
        action: Tm,
        flags: fm
      } = mm;
      return "mid-fire" === Tm && 0 !== (fm & hm.e.AltLeftClick)
    }
    const xm = new Set;

    function wm(mm) {
      return xm.add(mm), () => {
        xm.delete(mm)
      }
    }

    function Dm(mm) {
      const Tm = Am.e[255 & mm];
      if (void 0 === Tm) return;
      const fm = mm >>> 8 & 255,
        am = {
          action: Tm,
          down: 0 !== (fm & hm.e.Down),
          flags: fm,
          press: mm >>> 16
        };
      for (const hm of xm) hm(am)
    }
  },
  4755: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => am,
      h: () => xm,
      i: () => hm,
      m: () => wm
    });
    const hm = {
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
      Am = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      am = {
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
      xm = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      wm = [16]
  },
  4763: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      f: () => xm,
      h: () => im
    });
    var hm = fm(2364),
      Am = fm(2373);
    const am = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function xm(mm) {
      return mm instanceof HTMLElement && (!!(mm.isContentEditable || mm instanceof HTMLTextAreaElement || mm instanceof HTMLSelectElement) || mm instanceof HTMLInputElement && !am.has(mm.type))
    }

    function wm(mm) {
      let Tm = null;
      const fm = fm => {
          const Am = xm(fm);
          Am !== Tm && (Tm = Am, mm(hm.i.UiCapture, hm.w.Keyboard, 0, 0, Am ? hm.w.Keyboard : 0))
        },
        Am = mm => {
          fm(mm.target)
        },
        am = mm => {
          fm(mm.relatedTarget)
        },
        wm = () => {
          fm(document.activeElement)
        },
        Dm = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Am, Dm), document.addEventListener("focusout", am, Dm), document.addEventListener("keydown", wm, Dm), fm(document.activeElement), () => {
        document.removeEventListener("focusin", Am, Dm), document.removeEventListener("focusout", am, Dm), document.removeEventListener("keydown", wm, Dm)
      }
    }
    const Dm = new Map;

    function im(mm, Tm) {
      var fm;
      let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Dm.set(hm, (null !== (fm = Dm.get(hm)) && void 0 !== fm ? fm : 0) & ~mm | Tm & mm);
      let am = 0;
      for (const Am of Dm.values()) am |= Am;
      return (0, Am.E)(mm, am & mm)
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);