export const id = 86;
export const ids = [86];
export const modules = {
  4716: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Yk,
      e: () => lk
    });
    var Dk = ik(1288),
      fk = ik(26);
    var Sk = ik(314);
    var bk = ik(594);
    var rk = ik(2388),
      Pk = ik(4721),
      mk = ik(4745),
      Mk = ik(4752);
    class Kk {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        this.id = kk, this.type = ek, this.parameters = ik, this.tearDownNotification = Dk, this.onDonePromise = fk, this.resolveRequest = Sk
      }
    }
    const xk = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class nk {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        this.id = kk, this.type = ek, this.parameters = ik, this.resolveRequest = Dk, this.onDonePromise = fk, this.tearDownNotification = Sk, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const bk = lk[ek];
        if (!bk) throw console.error(`No QTE implementation registered for type: ${ek}`), new Error(`No QTE implementation registered for type: ${ek}`);
        this.implementation = new bk(ik, (kk => {
          this.isCompleted = !0, this.resolveRequest(kk)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = fk.j.subscribe("QTEMouseState", (kk => {
          let {
            isDown: ek
          } = kk;
          this.isCompleted || this.implementation.handleMouseInput(ek)
        })), this.stopInputActions = (0, mk.j)((kk => {
          this.isCompleted || !xk.has(kk.action) && !(0, mk.f)(kk) || this.implementation.handleMouseInput(kk.down)
        })), this.tickSub = fk.j.subscribe("noaTick", (kk => {
          if (this.isCompleted) return;
          const ek = kk / 1e3;
          this.implementation.handleTick(ek)
        })), this.stopShellTicks = (0, Pk.x)((() => {
          this.isCompleted || this.implementation.handleTick(rk.r / 1e3)
        }))
      }
      cleanup() {
        var kk, ek;
        this.mouseSub && (fk.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (kk = this.stopInputActions) || void 0 === kk || kk.call(this), this.stopInputActions = null, null === (ek = this.stopShellTicks) || void 0 === ek || ek.call(this), this.stopShellTicks = null, this.tickSub && (fk.j.unsubscribe(this.tickSub), this.tickSub = null)
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
    const Uk = new Dk.e,
      Hk = new Map;
    let wk = null;
    const lk = {
      progressBar: class {
        constructor(kk, ek, ik) {
          var Dk, fk, Sk, bk;
          this.resolveRequest = ek, this.tearDownNotification = ik, this.progress = 0, this.bk = void 0, this.rk = void 0, this.Pk = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const rk = kk;
          this.bk = null !== (Dk = rk.bk) && void 0 !== Dk ? Dk : .075, this.rk = null !== (fk = rk.rk) && void 0 !== fk ? fk : 1, this.progress = null !== (Sk = rk.Sk) && void 0 !== Sk ? Sk : 30, this.Pk = null !== (bk = rk.Pk) && void 0 !== bk && bk, this.parameters = rk
        }
        handleMouseInput(kk) {
          kk && !this.isCompleted && (this.clickCount++, this.progress += this.rk, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.bk, this.Pk && this.progress <= 0) this.complete(!1);
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
        constructor(kk, ek, ik) {
          var Dk;
          this.resolveRequest = ek, this.tearDownNotification = ik, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = kk, this.timeWindowMs = null !== (Dk = this.parameters.nk) && void 0 !== Dk ? Dk : 3e3, this.startTime = Date.now()
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
            ek = Math.max(0, this.timeWindowMs - kk);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: ek,
              nk: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(kk, ek, ik) {
          var Dk;
          this.resolveRequest = ek, this.tearDownNotification = ik, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const fk = kk;
          this.parameters = {
            ...fk,
            lk: Sk.c.clamp(fk.lk, .05, 1)
          }, this.progress = null !== (Dk = fk.Sk) && void 0 !== Dk ? Dk : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
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
          this.moverPosition += kk * this.parameters.yk * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const kk = Sk.c.clamp(1 - .7 * this.parameters.Yk, 0, 1.4);
          return Math.floor(60 * kk + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.Lk : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Sk.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const kk = this.parameters.lk / 2,
            ek = kk,
            ik = 1 - kk;
          this.catchZonePosition <= ek ? (this.catchZonePosition = ek, this.catchZoneVelocity = 0) : this.catchZonePosition >= ik && (this.catchZonePosition = ik, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const kk = this.parameters.lk / 2;
          return this.moverPosition >= this.catchZonePosition - kk && this.moverPosition <= this.catchZonePosition + kk
        }
        updateProgress(kk) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.Ck * kk : this.progress -= this.parameters.Ak * kk, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.Pk && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
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
              lk: this.parameters.lk,
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
        constructor(kk, ek, ik) {
          var Dk, fk, bk, rk, Pk;
          this.resolveRequest = ek, this.tearDownNotification = ik, this.startTime = void 0, this.speed = void 0, this.sk = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const mk = kk;
          this.parameters = {
            ...mk,
            speed: null !== (Dk = mk.speed) && void 0 !== Dk ? Dk : .5,
            sk: Sk.c.clamp(mk.sk, .05, 1),
            label: null !== (fk = mk.label) && void 0 !== fk ? fk : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (bk = mk.icon) && void 0 !== bk ? bk : null,
            scale: null !== (rk = mk.scale) && void 0 !== rk ? rk : 1,
            rotation: null !== (Pk = mk.rotation) && void 0 !== Pk ? Pk : 0
          }, this.speed = this.parameters.speed, this.sk = this.parameters.sk, this.startTime = Date.now()
        }
        handleMouseInput(kk) {
          if (kk) {
            this.updateMarkerPosition();
            const kk = Math.abs(this.markerPosition - .5) <= this.sk / 2;
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
        constructor(kk, ek, ik) {
          this.resolveRequest = ek, this.tearDownNotification = ik, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = kk, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(kk) {
          if (!kk || this.isCompleted) return;
          const ek = this.getOuterCircleProgress();
          if (ek <= this.parameters.qk && ek >= -this.parameters.qk) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Fk) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, bk.F)(this.parameters.Ik) && this.misses > this.parameters.Ik ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.qk && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.uk
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
              Fk: this.parameters.Fk,
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

    function pk() {
      (0, Mk.j)(rk.t.Qte, wk ? rk.t.Qte : 0), wk ? fk.j.tm("qteStateUpdated", wk.getState()) : fk.j.tm("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class yk {
      constructor(kk, ek) {
        this.resultPromise = kk, this.tearDownQTE = ek
      }
      static create(kk, ek, ik) {
        const Dk = Promise.race([kk, ek]);
        return new yk(Dk, ik)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class Yk {
      static queueQTE(kk, ek, ik) {
        let Dk, fk;
        const Sk = new Promise((kk => {
            Dk = kk
          })),
          bk = new Promise((kk => {
            fk = () => {
              kk("qteTornDown")
            }
          })),
          rk = Promise.race([Sk, bk]).then((() => {})),
          Pk = new Kk(kk, ek, ik, fk, rk, Dk);
        return Hk.set(kk, Pk), Uk.enqueue(Pk), wk || this.processNextQTE(), yk.create(Sk, bk, fk)
      }
      static async processNextQTE() {
        if (wk || Uk.uU()) return void(Uk.uU() && wk && (wk = null, pk()));
        const kk = await Uk.dequeue();
        if (!Hk.has(kk.id)) return void await this.processNextQTE();
        Hk.delete(kk.id);
        const ek = new nk(kk.id, kk.type, kk.parameters, kk.resolveRequest, kk.onDonePromise, kk.tearDownNotification);
        wk = ek, pk();
        try {
          await ek.waitUntilDone()
        } catch (ik) {
          console.error("Error while waiting for QTE to resolve:", ik.stack)
        }
        wk === ek && (wk.cleanup(), wk = null, pk()), await this.processNextQTE()
      }
      static cancelQTE(kk) {
        if (wk && wk.id === kk) return wk.tearDown(), wk = null, pk(), void this.processNextQTE();
        const ek = Hk.get(kk);
        ek && (Hk.delete(kk), ek.tearDownNotification())
      }
      static getCurrentState() {
        return wk ? wk.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        wk && (wk.tearDown(), wk = null), Hk.forEach(((kk, ek) => {
          this.cancelQTE(ek)
        })), Uk.emptyQueue(), Hk.clear(), pk()
      }
    }
  },
  4721: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => Fk,
      D: () => pk,
      F: () => bk,
      J: () => rk,
      K: () => sk,
      c: () => jk,
      g: () => Yk,
      j: () => qk,
      l: () => uk,
      n: () => lk,
      q: () => Ck,
      r: () => yk,
      v: () => Lk,
      x: () => dk,
      y: () => Vk
    });
    var Dk = ik(4728);
    const fk = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Sk = fk;

    function bk(kk) {
      Sk = null !== kk && void 0 !== kk ? kk : fk
    }

    function rk() {
      return Sk
    }
    const Pk = new Set,
      mk = new Set;
    let Mk = -1;
    const Kk = new Set,
      xk = new Set;
    let nk = 0,
      Uk = 0;
    const Hk = new Set,
      wk = new Set;

    function lk(kk) {
      return Pk.add(kk), () => {
        Pk.delete(kk)
      }
    }

    function pk(kk, ek) {
      for (const Dk of Pk) try {
        Dk(kk)
      } catch (ik) {
        ek(ik)
      }
    }

    function yk(kk) {
      return mk.add(kk), () => {
        mk.delete(kk)
      }
    }

    function Yk(kk, ek) {
      const ik = Mk < 0 ? 0 : kk - Mk;
      Mk = kk;
      for (const fk of mk) try {
        fk(ik)
      } catch (Dk) {
        ek(Dk)
      }
    }

    function Lk(kk) {
      return Kk.add(kk), () => {
        Kk.delete(kk)
      }
    }

    function Ck(kk) {
      return xk.add(kk), () => {
        xk.delete(kk)
      }
    }
    let Ak = 0;

    function jk(kk) {
      Ak += kk
    }

    function sk() {
      const kk = Ak;
      return Ak = 0, kk
    }

    function dk(kk) {
      return Hk.add(kk), () => {
        Hk.delete(kk)
      }
    }

    function Vk(kk) {
      return wk.add(kk), () => {
        wk.delete(kk)
      }
    }

    function Fk() {
      nk = 0, Uk = 0, Mk = -1
    }

    function uk(kk, ek) {
      if ("paced" === kk) return Uk += ek, null;
      if ("drawn" !== kk && "skipped" !== kk) return null;
      const ik = ek + Uk;
      return Uk = 0, ik
    }

    function qk(kk, ek, ik, fk) {
      const Sk = (0, Dk.j)(ek),
        bk = kk > 0 ? performance.now() : 0;
      for (let Dk = 0; Dk < kk; Dk++)
        for (const kk of Hk) try {
          kk()
        } catch (rk) {
          fk(rk)
        }
      if (kk > 0 && jk(performance.now() - bk), null !== ik) {
        for (const kk of Kk) try {
          kk(ik)
        } catch (rk) {
          fk(rk)
        }
        nk += ik
      }
      if ("drawn" === ek) {
        const kk = nk;
        nk = 0;
        for (const ek of xk) try {
          ek(kk)
        } catch (rk) {
          fk(rk)
        }
      }
      for (const Dk of wk) try {
        Dk(kk, Sk)
      } catch (rk) {
        fk(rk)
      }
    }
  },
  4745: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Pk,
      f: () => Sk,
      j: () => rk
    });
    var Dk = ik(2388),
      fk = ik(4750);

    function Sk(kk) {
      let {
        action: ek,
        flags: ik
      } = kk;
      return "mid-fire" === ek && 0 !== (ik & Dk.d.AltLeftClick)
    }
    const bk = new Set;

    function rk(kk) {
      return bk.add(kk), () => {
        bk.delete(kk)
      }
    }

    function Pk(kk) {
      const ek = fk.e[255 & kk];
      if (void 0 === ek) return;
      const ik = kk >>> 8 & 255,
        Sk = {
          action: ek,
          down: 0 !== (ik & Dk.d.Down),
          flags: ik,
          press: kk >>> 16
        };
      for (const Dk of bk) Dk(Sk)
    }
  },
  4750: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      g: () => Sk,
      k: () => bk,
      n: () => Dk,
      q: () => rk
    });
    const Dk = {
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
      fk = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Sk = {
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
      bk = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      rk = [16]
  },
  4752: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk,
      i: () => bk,
      j: () => mk
    });
    var Dk = ik(2388),
      fk = ik(2395);
    const Sk = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function bk(kk) {
      return kk instanceof HTMLElement && (!!(kk.isContentEditable || kk instanceof HTMLTextAreaElement || kk instanceof HTMLSelectElement) || kk instanceof HTMLInputElement && !Sk.has(kk.type))
    }

    function rk(kk) {
      let ek = null;
      const ik = ik => {
          const fk = bk(ik);
          fk !== ek && (ek = fk, kk(Dk.k.UiCapture, Dk.t.Keyboard, 0, 0, fk ? Dk.t.Keyboard : 0))
        },
        fk = kk => {
          ik(kk.target)
        },
        Sk = kk => {
          ik(kk.relatedTarget)
        },
        rk = () => {
          ik(document.activeElement)
        },
        Pk = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", fk, Pk), document.addEventListener("focusout", Sk, Pk), document.addEventListener("keydown", rk, Pk), ik(document.activeElement), () => {
        document.removeEventListener("focusin", fk, Pk), document.removeEventListener("focusout", Sk, Pk), document.removeEventListener("keydown", rk, Pk)
      }
    }
    const Pk = new Map;

    function mk(kk, ek) {
      var ik;
      let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Pk.set(Dk, (null !== (ik = Pk.get(Dk)) && void 0 !== ik ? ik : 0) & ~kk | ek & kk);
      let Sk = 0;
      for (const fk of Pk.values()) Sk |= fk;
      return (0, fk.x)(kk, Sk & kk)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);