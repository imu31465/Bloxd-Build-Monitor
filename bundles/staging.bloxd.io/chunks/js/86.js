export const id = 86;
export const ids = [86];
export const modules = {
  4784: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Kk,
      c: () => Jk
    });
    var Xk = Ik(1283),
      Tk = Ik(34);
    var ik = Ik(337);
    var yk = Ik(628);
    var lk = Ik(2331),
      ak = Ik(4792),
      qk = Ik(4801),
      Lk = Ik(4814);
    class tk {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        this.id = kk, this.type = Fk, this.parameters = Ik, this.tearDownNotification = Xk, this.onDonePromise = Tk, this.resolveRequest = ik
      }
    }
    const Zk = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class jk {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        this.id = kk, this.type = Fk, this.parameters = Ik, this.resolveRequest = Xk, this.onDonePromise = Tk, this.tearDownNotification = ik, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const yk = Jk[Fk];
        if (!yk) throw console.error(`No QTE implementation registered for type: ${Fk}`), new Error(`No QTE implementation registered for type: ${Fk}`);
        this.implementation = new yk(Ik, (kk => {
          this.isCompleted = !0, this.resolveRequest(kk)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Tk.g.subscribe("QTEMouseState", (kk => {
          let {
            isDown: Fk
          } = kk;
          this.isCompleted || this.implementation.handleMouseInput(Fk)
        })), this.stopInputActions = (0, qk.g)((kk => {
          this.isCompleted || !Zk.has(kk.action) && !(0, qk.f)(kk) || this.implementation.handleMouseInput(kk.down)
        })), this.tickSub = Tk.g.subscribe("noaTick", (kk => {
          if (this.isCompleted) return;
          const Fk = kk / 1e3;
          this.implementation.handleTick(Fk)
        })), this.stopShellTicks = (0, ak.y)((() => {
          this.isCompleted || this.implementation.handleTick(lk.x / 1e3)
        }))
      }
      cleanup() {
        var kk, Fk;
        this.mouseSub && (Tk.g.unsubscribe(this.mouseSub), this.mouseSub = null), null === (kk = this.stopInputActions) || void 0 === kk || kk.call(this), this.stopInputActions = null, null === (Fk = this.stopShellTicks) || void 0 === Fk || Fk.call(this), this.stopShellTicks = null, this.tickSub && (Tk.g.unsubscribe(this.tickSub), this.tickSub = null)
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
    const ek = new Xk.c,
      wk = new Map;
    let Hk = null;
    const Jk = {
      progressBar: class {
        constructor(kk, Fk, Ik) {
          var Xk, Tk, ik, yk;
          this.resolveRequest = Fk, this.tearDownNotification = Ik, this.progress = 0, this.oI = void 0, this.vI = void 0, this.EI = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const lk = kk;
          this.oI = null !== (Xk = lk.oI) && void 0 !== Xk ? Xk : .075, this.vI = null !== (Tk = lk.vI) && void 0 !== Tk ? Tk : 1, this.progress = null !== (ik = lk.SI) && void 0 !== ik ? ik : 30, this.EI = null !== (yk = lk.EI) && void 0 !== yk && yk, this.parameters = lk
        }
        handleMouseInput(kk) {
          kk && !this.isCompleted && (this.clickCount++, this.progress += this.vI, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.oI, this.EI && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(kk) {
          this.isCompleted = !0, this.resolveRequest(kk)
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
        constructor(kk, Fk, Ik) {
          var Xk;
          this.resolveRequest = Fk, this.tearDownNotification = Ik, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = kk, this.timeWindowMs = null !== (Xk = this.parameters.uI) && void 0 !== Xk ? Xk : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(kk) {
          if (!kk || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(kk) {
          this.isCompleted = !0, this.resolveRequest(kk)
        }
        getState() {
          const kk = Date.now() - this.startTime,
            Fk = Math.max(0, this.timeWindowMs - kk);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: Fk,
              uI: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(kk, Fk, Ik) {
          var Xk;
          this.resolveRequest = Fk, this.tearDownNotification = Ik, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Tk = kk;
          this.parameters = {
            ...Tk,
            CI: ik.e.clamp(Tk.CI, .05, 1)
          }, this.progress = null !== (Xk = Tk.SI) && void 0 !== Xk ? Xk : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(kk) {
          this.isMouseDown = kk
        }
        handleTick(kk) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(kk))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const kk = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += kk * this.parameters.NI * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const kk = ik.e.clamp(1 - .7 * this.parameters.cI, 0, 1.4);
          return Math.floor(60 * kk + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.WI : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = ik.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const kk = this.parameters.CI / 2,
            Fk = kk,
            Ik = 1 - kk;
          this.catchZonePosition <= Fk ? (this.catchZonePosition = Fk, this.catchZoneVelocity = 0) : this.catchZonePosition >= Ik && (this.catchZonePosition = Ik, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const kk = this.parameters.CI / 2;
          return this.moverPosition >= this.catchZonePosition - kk && this.moverPosition <= this.catchZonePosition + kk
        }
        updateProgress(kk) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.fI * kk : this.progress -= this.parameters.BI * kk, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.EI && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(kk) {
          this.isCompleted = !0, this.resolveRequest(kk)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              CI: this.parameters.CI,
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
        constructor(kk, Fk, Ik) {
          var Xk, Tk, yk, lk, ak;
          this.resolveRequest = Fk, this.tearDownNotification = Ik, this.startTime = void 0, this.speed = void 0, this.YI = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const qk = kk;
          this.parameters = {
            ...qk,
            speed: null !== (Xk = qk.speed) && void 0 !== Xk ? Xk : .5,
            YI: ik.e.clamp(qk.YI, .05, 1),
            label: null !== (Tk = qk.label) && void 0 !== Tk ? Tk : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (yk = qk.icon) && void 0 !== yk ? yk : null,
            scale: null !== (lk = qk.scale) && void 0 !== lk ? lk : 1,
            rotation: null !== (ak = qk.rotation) && void 0 !== ak ? ak : 0
          }, this.speed = this.parameters.speed, this.YI = this.parameters.YI, this.startTime = Date.now()
        }
        handleMouseInput(kk) {
          if (kk) {
            this.updateMarkerPosition();
            const kk = Math.abs(this.markerPosition - .5) <= this.YI / 2;
            this.complete(kk)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const kk = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = kk <= .5 ? 2 * kk : 2 - 2 * kk
        }
        complete(kk) {
          this.isCompleted = !0, this.resolveRequest(kk)
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
        constructor(kk, Fk, Ik) {
          this.resolveRequest = Fk, this.tearDownNotification = Ik, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = kk, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(kk) {
          if (!kk || this.isCompleted) return;
          const Fk = this.getOuterCircleProgress();
          if (Fk <= this.parameters.hI && Fk >= -this.parameters.hI) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.gI) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, yk.Q)(this.parameters.rI) && this.misses > this.parameters.rI ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.hI && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.mI
        }
        complete(kk) {
          this.isCompleted = !0, this.resolveRequest(kk)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              gI: this.parameters.gI,
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

    function xk() {
      (0, Lk.g)(lk.A.Qte, Hk ? lk.A.Qte : 0), Hk ? Tk.g.GL("qteStateUpdated", Hk.getState()) : Tk.g.GL("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class Pk {
      constructor(kk, Fk) {
        this.resultPromise = kk, this.tearDownQTE = Fk
      }
      static create(kk, Fk, Ik) {
        const Xk = Promise.race([kk, Fk]);
        return new Pk(Xk, Ik)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class Kk {
      static queueQTE(kk, Fk, Ik) {
        let Xk, Tk;
        const ik = new Promise((kk => {
            Xk = kk
          })),
          yk = new Promise((kk => {
            Tk = () => {
              kk("qteTornDown")
            }
          })),
          lk = Promise.race([ik, yk]).then((() => {})),
          ak = new tk(kk, Fk, Ik, Tk, lk, Xk);
        return wk.set(kk, ak), ek.enqueue(ak), Hk || this.processNextQTE(), Pk.create(ik, yk, Tk)
      }
      static async processNextQTE() {
        if (Hk || ek.ye()) return void(ek.ye() && Hk && (Hk = null, xk()));
        const kk = await ek.dequeue();
        if (!wk.has(kk.id)) return void await this.processNextQTE();
        wk.delete(kk.id);
        const Fk = new jk(kk.id, kk.type, kk.parameters, kk.resolveRequest, kk.onDonePromise, kk.tearDownNotification);
        Hk = Fk, xk();
        try {
          await Fk.waitUntilDone()
        } catch (Ik) {
          console.error("Error while waiting for QTE to resolve:", Ik.stack)
        }
        Hk === Fk && (Hk.cleanup(), Hk = null, xk()), await this.processNextQTE()
      }
      static cancelQTE(kk) {
        if (Hk && Hk.id === kk) return Hk.tearDown(), Hk = null, xk(), void this.processNextQTE();
        const Fk = wk.get(kk);
        Fk && (wk.delete(kk), Fk.tearDownNotification())
      }
      static getCurrentState() {
        return Hk ? Hk.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        Hk && (Hk.tearDown(), Hk = null), wk.forEach(((kk, Fk) => {
          this.cancelQTE(Fk)
        })), ek.emptyQueue(), wk.clear(), xk()
      }
    }
  },
  4792: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      A: () => Ok,
      D: () => xk,
      F: () => yk,
      I: () => lk,
      L: () => Sk,
      c: () => zk,
      g: () => Kk,
      k: () => Gk,
      l: () => nk,
      o: () => Jk,
      s: () => sk,
      t: () => Pk,
      u: () => Qk,
      y: () => vk,
      z: () => Ek
    });
    var Xk = Ik(4794);
    const Tk = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let ik = Tk;

    function yk(kk) {
      ik = null !== kk && void 0 !== kk ? kk : Tk
    }

    function lk() {
      return ik
    }
    const ak = new Set,
      qk = new Set;
    let Lk = -1;
    const tk = new Set,
      Zk = new Set;
    let jk = 0,
      ek = 0;
    const wk = new Set,
      Hk = new Set;

    function Jk(kk) {
      return ak.add(kk), () => {
        ak.delete(kk)
      }
    }

    function xk(kk, Fk) {
      for (const Xk of ak) try {
        Xk(kk)
      } catch (Ik) {
        Fk(Ik)
      }
    }

    function Pk(kk) {
      return qk.add(kk), () => {
        qk.delete(kk)
      }
    }

    function Kk(kk, Fk) {
      const Ik = Lk < 0 ? 0 : kk - Lk;
      Lk = kk;
      for (const Tk of qk) try {
        Tk(Ik)
      } catch (Xk) {
        Fk(Xk)
      }
    }

    function Qk(kk) {
      return tk.add(kk), () => {
        tk.delete(kk)
      }
    }

    function sk(kk) {
      return Zk.add(kk), () => {
        Zk.delete(kk)
      }
    }
    let Vk = 0;

    function zk(kk) {
      Vk += kk
    }

    function Sk() {
      const kk = Vk;
      return Vk = 0, kk
    }

    function vk(kk) {
      return wk.add(kk), () => {
        wk.delete(kk)
      }
    }

    function Ek(kk) {
      return Hk.add(kk), () => {
        Hk.delete(kk)
      }
    }

    function Ok() {
      jk = 0, ek = 0, Lk = -1
    }

    function nk(kk, Fk) {
      if ("paced" === kk) return ek += Fk, null;
      if ("drawn" !== kk && "skipped" !== kk) return null;
      const Ik = Fk + ek;
      return ek = 0, Ik
    }

    function Gk(kk, Fk, Ik, Tk) {
      const ik = (0, Xk.f)(Fk),
        yk = kk > 0 ? performance.now() : 0;
      for (let Xk = 0; Xk < kk; Xk++)
        for (const kk of wk) try {
          kk()
        } catch (lk) {
          Tk(lk)
        }
      if (kk > 0 && zk(performance.now() - yk), null !== Ik) {
        for (const kk of tk) try {
          kk(Ik)
        } catch (lk) {
          Tk(lk)
        }
        jk += Ik
      }
      if ("drawn" === Fk) {
        const kk = jk;
        jk = 0;
        for (const Fk of Zk) try {
          Fk(kk)
        } catch (lk) {
          Tk(lk)
        }
      }
      for (const Xk of Hk) try {
        Xk(kk, ik)
      } catch (lk) {
        Tk(lk)
      }
    }
  },
  4801: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak,
      f: () => ik,
      g: () => lk
    });
    var Xk = Ik(2331),
      Tk = Ik(4810);

    function ik(kk) {
      let {
        action: Fk,
        flags: Ik
      } = kk;
      return "mid-fire" === Fk && 0 !== (Ik & Xk.e.AltLeftClick)
    }
    const yk = new Set;

    function lk(kk) {
      return yk.add(kk), () => {
        yk.delete(kk)
      }
    }

    function ak(kk) {
      const Fk = Tk.e[255 & kk];
      if (void 0 === Fk) return;
      const Ik = kk >>> 8 & 255,
        ik = {
          action: Fk,
          down: 0 !== (Ik & Xk.e.Down),
          flags: Ik,
          press: kk >>> 16
        };
      for (const Xk of yk) Xk(ik)
    }
  },
  4810: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      g: () => ik,
      k: () => yk,
      o: () => Xk,
      s: () => lk
    });
    const Xk = {
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
      Tk = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      ik = {
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
      yk = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      lk = [16]
  },
  4814: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      f: () => yk,
      g: () => qk
    });
    var Xk = Ik(2331),
      Tk = Ik(2338);
    const ik = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function yk(kk) {
      return kk instanceof HTMLElement && (!!(kk.isContentEditable || kk instanceof HTMLTextAreaElement || kk instanceof HTMLSelectElement) || kk instanceof HTMLInputElement && !ik.has(kk.type))
    }

    function lk(kk) {
      let Fk = null;
      const Ik = Ik => {
          const Tk = yk(Ik);
          Tk !== Fk && (Fk = Tk, kk(Xk.m.UiCapture, Xk.A.Keyboard, 0, 0, Tk ? Xk.A.Keyboard : 0))
        },
        Tk = kk => {
          Ik(kk.target)
        },
        ik = kk => {
          Ik(kk.relatedTarget)
        },
        lk = () => {
          Ik(document.activeElement)
        },
        ak = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Tk, ak), document.addEventListener("focusout", ik, ak), document.addEventListener("keydown", lk, ak), Ik(document.activeElement), () => {
        document.removeEventListener("focusin", Tk, ak), document.removeEventListener("focusout", ik, ak), document.removeEventListener("keydown", lk, ak)
      }
    }
    const ak = new Map;

    function qk(kk, Fk) {
      var Ik;
      let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      ak.set(Xk, (null !== (Ik = ak.get(Xk)) && void 0 !== Ik ? Ik : 0) & ~kk | Fk & kk);
      let ik = 0;
      for (const Tk of ak.values()) ik |= Tk;
      return (0, Tk.x)(kk, ik & kk)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);