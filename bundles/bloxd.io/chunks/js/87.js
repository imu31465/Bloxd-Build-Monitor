export const id = 87;
export const ids = [87];
export const modules = {
  4958: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => eu,
      f: () => Du
    });
    var su = ju(1359),
      Uu = ju(24);
    var Zu = ju(349);
    var Xu = ju(649);
    var lu = ju(2516),
      qu = ju(4962),
      fu = ju(4979),
      Cu = ju(4986);
    class bu {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        this.id = uu, this.type = Eu, this.parameters = ju, this.tearDownNotification = su, this.onDonePromise = Uu, this.resolveRequest = Zu
      }
    }
    const cu = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class Nu {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        this.id = uu, this.type = Eu, this.parameters = ju, this.resolveRequest = su, this.onDonePromise = Uu, this.tearDownNotification = Zu, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const Xu = Du[Eu];
        if (!Xu) throw console.error(`No QTE implementation registered for type: ${Eu}`), new Error(`No QTE implementation registered for type: ${Eu}`);
        this.implementation = new Xu(ju, (uu => {
          this.isCompleted = !0, this.resolveRequest(uu)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Uu.h.subscribe("QTEMouseState", (uu => {
          let {
            isDown: Eu
          } = uu;
          this.isCompleted || this.implementation.handleMouseInput(Eu)
        })), this.stopInputActions = (0, fu.f)((uu => {
          this.isCompleted || !cu.has(uu.action) && !(0, fu.c)(uu) || this.implementation.handleMouseInput(uu.down)
        })), this.tickSub = Uu.h.subscribe("noaTick", (uu => {
          if (this.isCompleted) return;
          const Eu = uu / 1e3;
          this.implementation.handleTick(Eu)
        })), this.stopShellTicks = (0, qu.u)((() => {
          this.isCompleted || this.implementation.handleTick(lu.v / 1e3)
        }))
      }
      cleanup() {
        var uu, Eu;
        this.mouseSub && (Uu.h.unsubscribe(this.mouseSub), this.mouseSub = null), null === (uu = this.stopInputActions) || void 0 === uu || uu.call(this), this.stopInputActions = null, null === (Eu = this.stopShellTicks) || void 0 === Eu || Eu.call(this), this.stopShellTicks = null, this.tickSub && (Uu.h.unsubscribe(this.tickSub), this.tickSub = null)
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
    const Ou = new su.b,
      Yu = new Map;
    let hu = null;
    const Du = {
      progressBar: class {
        constructor(uu, Eu, ju) {
          var su, Uu, Zu, Xu;
          this.resolveRequest = Eu, this.tearDownNotification = ju, this.progress = 0, this.Ru = void 0, this.uE = void 0, this.EE = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const lu = uu;
          this.Ru = null !== (su = lu.Ru) && void 0 !== su ? su : .075, this.uE = null !== (Uu = lu.uE) && void 0 !== Uu ? Uu : 1, this.progress = null !== (Zu = lu.zu) && void 0 !== Zu ? Zu : 30, this.EE = null !== (Xu = lu.EE) && void 0 !== Xu && Xu, this.parameters = lu
        }
        handleMouseInput(uu) {
          uu && !this.isCompleted && (this.clickCount++, this.progress += this.uE, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.Ru, this.EE && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(uu) {
          this.isCompleted = !0, this.resolveRequest(uu)
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
        constructor(uu, Eu, ju) {
          var su;
          this.resolveRequest = Eu, this.tearDownNotification = ju, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = uu, this.timeWindowMs = null !== (su = this.parameters.XE) && void 0 !== su ? su : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(uu) {
          if (!uu || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(uu) {
          this.isCompleted = !0, this.resolveRequest(uu)
        }
        getState() {
          const uu = Date.now() - this.startTime,
            Eu = Math.max(0, this.timeWindowMs - uu);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: Eu,
              XE: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(uu, Eu, ju) {
          var su;
          this.resolveRequest = Eu, this.tearDownNotification = ju, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Uu = uu;
          this.parameters = {
            ...Uu,
            CE: Zu.b.clamp(Uu.CE, .05, 1)
          }, this.progress = null !== (su = Uu.zu) && void 0 !== su ? su : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(uu) {
          this.isMouseDown = uu
        }
        handleTick(uu) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(uu))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const uu = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += uu * this.parameters.bE * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const uu = Zu.b.clamp(1 - .7 * this.parameters.cE, 0, 1.4);
          return Math.floor(60 * uu + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.NE : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Zu.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const uu = this.parameters.CE / 2,
            Eu = uu,
            ju = 1 - uu;
          this.catchZonePosition <= Eu ? (this.catchZonePosition = Eu, this.catchZoneVelocity = 0) : this.catchZonePosition >= ju && (this.catchZonePosition = ju, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const uu = this.parameters.CE / 2;
          return this.moverPosition >= this.catchZonePosition - uu && this.moverPosition <= this.catchZonePosition + uu
        }
        updateProgress(uu) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.OE * uu : this.progress -= this.parameters.YE * uu, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.EE && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(uu) {
          this.isCompleted = !0, this.resolveRequest(uu)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              CE: this.parameters.CE,
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
        constructor(uu, Eu, ju) {
          var su, Uu, Xu, lu, qu;
          this.resolveRequest = Eu, this.tearDownNotification = ju, this.startTime = void 0, this.speed = void 0, this.DE = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const fu = uu;
          this.parameters = {
            ...fu,
            speed: null !== (su = fu.speed) && void 0 !== su ? su : .5,
            DE: Zu.b.clamp(fu.DE, .05, 1),
            label: null !== (Uu = fu.label) && void 0 !== Uu ? Uu : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (Xu = fu.icon) && void 0 !== Xu ? Xu : null,
            scale: null !== (lu = fu.scale) && void 0 !== lu ? lu : 1,
            rotation: null !== (qu = fu.rotation) && void 0 !== qu ? qu : 0
          }, this.speed = this.parameters.speed, this.DE = this.parameters.DE, this.startTime = Date.now()
        }
        handleMouseInput(uu) {
          if (uu) {
            this.updateMarkerPosition();
            const uu = Math.abs(this.markerPosition - .5) <= this.DE / 2;
            this.complete(uu)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const uu = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = uu <= .5 ? 2 * uu : 2 - 2 * uu
        }
        complete(uu) {
          this.isCompleted = !0, this.resolveRequest(uu)
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
        constructor(uu, Eu, ju) {
          this.resolveRequest = Eu, this.tearDownNotification = ju, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = uu, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(uu) {
          if (!uu || this.isCompleted) return;
          const Eu = this.getOuterCircleProgress();
          if (Eu <= this.parameters.GE && Eu >= -this.parameters.GE) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.ME) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, Xu.H)(this.parameters.pE) && this.misses > this.parameters.pE ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.GE && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.eE
        }
        complete(uu) {
          this.isCompleted = !0, this.resolveRequest(uu)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              ME: this.parameters.ME,
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

    function gu() {
      (0, Cu.g)(lu.x.Qte, hu ? lu.x.Qte : 0), hu ? Uu.h.TY("qteStateUpdated", hu.getState()) : Uu.h.TY("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class Mu {
      constructor(uu, Eu) {
        this.resultPromise = uu, this.tearDownQTE = Eu
      }
      static create(uu, Eu, ju) {
        const su = Promise.race([uu, Eu]);
        return new Mu(su, ju)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class eu {
      static queueQTE(uu, Eu, ju) {
        let su, Uu;
        const Zu = new Promise((uu => {
            su = uu
          })),
          Xu = new Promise((uu => {
            Uu = () => {
              uu("qteTornDown")
            }
          })),
          lu = Promise.race([Zu, Xu]).then((() => {})),
          qu = new bu(uu, Eu, ju, Uu, lu, su);
        return Yu.set(uu, qu), Ou.enqueue(qu), hu || this.processNextQTE(), Mu.create(Zu, Xu, Uu)
      }
      static async processNextQTE() {
        if (hu || Ou.EO()) return void(Ou.EO() && hu && (hu = null, gu()));
        const uu = await Ou.dequeue();
        if (!Yu.has(uu.id)) return void await this.processNextQTE();
        Yu.delete(uu.id);
        const Eu = new Nu(uu.id, uu.type, uu.parameters, uu.resolveRequest, uu.onDonePromise, uu.tearDownNotification);
        hu = Eu, gu();
        try {
          await Eu.waitUntilDone()
        } catch (ju) {
          console.error("Error while waiting for QTE to resolve:", ju.stack)
        }
        hu === Eu && (hu.cleanup(), hu = null, gu()), await this.processNextQTE()
      }
      static cancelQTE(uu) {
        if (hu && hu.id === uu) return hu.tearDown(), hu = null, gu(), void this.processNextQTE();
        const Eu = Yu.get(uu);
        Eu && (Yu.delete(uu), Eu.tearDownNotification())
      }
      static getCurrentState() {
        return hu ? hu.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        hu && (hu.tearDown(), hu = null), Yu.forEach(((uu, Eu) => {
          this.cancelQTE(Eu)
        })), Ou.emptyQueue(), Yu.clear(), gu()
      }
    }
  },
  4962: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => ou,
      C: () => gu,
      F: () => Xu,
      H: () => lu,
      I: () => du,
      b: () => Ju,
      e: () => eu,
      h: () => mu,
      l: () => ku,
      m: () => Du,
      p: () => pu,
      r: () => Mu,
      t: () => Gu,
      u: () => au,
      y: () => Pu
    });
    var su = ju(4965);
    const Uu = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Zu = Uu;

    function Xu(uu) {
      Zu = null !== uu && void 0 !== uu ? uu : Uu
    }

    function lu() {
      return Zu
    }
    const qu = new Set,
      fu = new Set;
    let Cu = -1;
    const bu = new Set,
      cu = new Set;
    let Nu = 0,
      Ou = 0;
    const Yu = new Set,
      hu = new Set;

    function Du(uu) {
      return qu.add(uu), () => {
        qu.delete(uu)
      }
    }

    function gu(uu, Eu) {
      for (const su of qu) try {
        su(uu)
      } catch (ju) {
        Eu(ju)
      }
    }

    function Mu(uu) {
      return fu.add(uu), () => {
        fu.delete(uu)
      }
    }

    function eu(uu, Eu) {
      const ju = Cu < 0 ? 0 : uu - Cu;
      Cu = uu;
      for (const Uu of fu) try {
        Uu(ju)
      } catch (su) {
        Eu(su)
      }
    }

    function Gu(uu) {
      return bu.add(uu), () => {
        bu.delete(uu)
      }
    }

    function pu(uu) {
      return cu.add(uu), () => {
        cu.delete(uu)
      }
    }
    let wu = 0;

    function Ju(uu) {
      wu += uu
    }

    function du() {
      const uu = wu;
      return wu = 0, uu
    }

    function au(uu) {
      return Yu.add(uu), () => {
        Yu.delete(uu)
      }
    }

    function Pu(uu) {
      return hu.add(uu), () => {
        hu.delete(uu)
      }
    }

    function ou() {
      Nu = 0, Ou = 0, Cu = -1
    }

    function ku(uu, Eu) {
      if ("paced" === uu) return Ou += Eu, null;
      if ("drawn" !== uu && "skipped" !== uu) return null;
      const ju = Eu + Ou;
      return Ou = 0, ju
    }

    function mu(uu, Eu, ju, Uu) {
      const Zu = (0, su.k)(Eu),
        Xu = uu > 0 ? performance.now() : 0;
      for (let su = 0; su < uu; su++)
        for (const uu of Yu) try {
          uu()
        } catch (lu) {
          Uu(lu)
        }
      if (uu > 0 && Ju(performance.now() - Xu), null !== ju) {
        for (const uu of bu) try {
          uu(ju)
        } catch (lu) {
          Uu(lu)
        }
        Nu += ju
      }
      if ("drawn" === Eu) {
        const uu = Nu;
        Nu = 0;
        for (const Eu of cu) try {
          Eu(uu)
        } catch (lu) {
          Uu(lu)
        }
      }
      for (const su of hu) try {
        su(uu, Zu)
      } catch (lu) {
        Uu(lu)
      }
    }
  },
  4979: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => qu,
      c: () => Zu,
      f: () => lu
    });
    var su = ju(2516),
      Uu = ju(4983);

    function Zu(uu) {
      let {
        action: Eu,
        flags: ju
      } = uu;
      return "mid-fire" === Eu && 0 !== (ju & su.b.AltLeftClick)
    }
    const Xu = new Set;

    function lu(uu) {
      return Xu.add(uu), () => {
        Xu.delete(uu)
      }
    }

    function qu(uu) {
      const Eu = Uu.e[255 & uu];
      if (void 0 === Eu) return;
      const ju = uu >>> 8 & 255,
        Zu = {
          action: Eu,
          down: 0 !== (ju & su.b.Down),
          flags: ju,
          press: uu >>> 16
        };
      for (const su of Xu) su(Zu)
    }
  },
  4983: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      h: () => Zu,
      j: () => Xu,
      k: () => su,
      l: () => lu
    });
    const su = {
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
      Uu = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Zu = {
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
      Xu = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      lu = [16]
  },
  4986: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      d: () => Xu,
      g: () => fu
    });
    var su = ju(2516),
      Uu = ju(2519);
    const Zu = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Xu(uu) {
      return uu instanceof HTMLElement && (!!(uu.isContentEditable || uu instanceof HTMLTextAreaElement || uu instanceof HTMLSelectElement) || uu instanceof HTMLInputElement && !Zu.has(uu.type))
    }

    function lu(uu) {
      let Eu = null;
      const ju = ju => {
          const Uu = Xu(ju);
          Uu !== Eu && (Eu = Uu, uu(su.h.UiCapture, su.x.Keyboard, 0, 0, Uu ? su.x.Keyboard : 0))
        },
        Uu = uu => {
          ju(uu.target)
        },
        Zu = uu => {
          ju(uu.relatedTarget)
        },
        lu = () => {
          ju(document.activeElement)
        },
        qu = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Uu, qu), document.addEventListener("focusout", Zu, qu), document.addEventListener("keydown", lu, qu), ju(document.activeElement), () => {
        document.removeEventListener("focusin", Uu, qu), document.removeEventListener("focusout", Zu, qu), document.removeEventListener("keydown", lu, qu)
      }
    }
    const qu = new Map;

    function fu(uu, Eu) {
      var ju;
      let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      qu.set(su, (null !== (ju = qu.get(su)) && void 0 !== ju ? ju : 0) & ~uu | Eu & uu);
      let Zu = 0;
      for (const Uu of qu.values()) Zu |= Uu;
      return (0, Uu.x)(uu, Zu & uu)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);