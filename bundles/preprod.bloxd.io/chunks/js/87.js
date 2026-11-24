export const id = 87;
export const ids = [87];
export const modules = {
  4882: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => dp,
      e: () => vp
    });
    var Op = cp(1325),
      op = cp(34);
    var Ip = cp(337);
    var Sp = cp(640);
    var xp = cp(2457),
      Lp = cp(4886),
      Yp = cp(4919),
      Dp = cp(4927);
    class Ap {
      constructor(pp, ip, cp, Op, op, Ip) {
        this.id = pp, this.type = ip, this.parameters = cp, this.tearDownNotification = Op, this.onDonePromise = op, this.resolveRequest = Ip
      }
    }
    const Pp = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class Wp {
      constructor(pp, ip, cp, Op, op, Ip) {
        this.id = pp, this.type = ip, this.parameters = cp, this.resolveRequest = Op, this.onDonePromise = op, this.tearDownNotification = Ip, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const Sp = vp[ip];
        if (!Sp) throw console.error(`No QTE implementation registered for type: ${ip}`), new Error(`No QTE implementation registered for type: ${ip}`);
        this.implementation = new Sp(cp, (pp => {
          this.isCompleted = !0, this.resolveRequest(pp)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = op.m.subscribe("QTEMouseState", (pp => {
          let {
            isDown: ip
          } = pp;
          this.isCompleted || this.implementation.handleMouseInput(ip)
        })), this.stopInputActions = (0, Yp.f)((pp => {
          this.isCompleted || !Pp.has(pp.action) && !(0, Yp.e)(pp) || this.implementation.handleMouseInput(pp.down)
        })), this.tickSub = op.m.subscribe("noaTick", (pp => {
          if (this.isCompleted) return;
          const ip = pp / 1e3;
          this.implementation.handleTick(ip)
        })), this.stopShellTicks = (0, Lp.s)((() => {
          this.isCompleted || this.implementation.handleTick(xp.u / 1e3)
        }))
      }
      cleanup() {
        var pp, ip;
        this.mouseSub && (op.m.unsubscribe(this.mouseSub), this.mouseSub = null), null === (pp = this.stopInputActions) || void 0 === pp || pp.call(this), this.stopInputActions = null, null === (ip = this.stopShellTicks) || void 0 === ip || ip.call(this), this.stopShellTicks = null, this.tickSub && (op.m.unsubscribe(this.tickSub), this.tickSub = null)
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
    const yp = new Op.c,
      Up = new Map;
    let wp = null;
    const vp = {
      progressBar: class {
        constructor(pp, ip, cp) {
          var Op, op, Ip, Sp;
          this.resolveRequest = ip, this.tearDownNotification = cp, this.progress = 0, this.oi = void 0, this.Ii = void 0, this.Si = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const xp = pp;
          this.oi = null !== (Op = xp.oi) && void 0 !== Op ? Op : .075, this.Ii = null !== (op = xp.Ii) && void 0 !== op ? op : 1, this.progress = null !== (Ip = xp.Oi) && void 0 !== Ip ? Ip : 30, this.Si = null !== (Sp = xp.Si) && void 0 !== Sp && Sp, this.parameters = xp
        }
        handleMouseInput(pp) {
          pp && !this.isCompleted && (this.clickCount++, this.progress += this.Ii, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.oi, this.Si && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(pp) {
          this.isCompleted = !0, this.resolveRequest(pp)
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
        constructor(pp, ip, cp) {
          var Op;
          this.resolveRequest = ip, this.tearDownNotification = cp, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = pp, this.timeWindowMs = null !== (Op = this.parameters.Ai) && void 0 !== Op ? Op : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(pp) {
          if (!pp || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(pp) {
          this.isCompleted = !0, this.resolveRequest(pp)
        }
        getState() {
          const pp = Date.now() - this.startTime,
            ip = Math.max(0, this.timeWindowMs - pp);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: ip,
              Ai: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(pp, ip, cp) {
          var Op;
          this.resolveRequest = ip, this.tearDownNotification = cp, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const op = pp;
          this.parameters = {
            ...op,
            Ui: Ip.d.clamp(op.Ui, .05, 1)
          }, this.progress = null !== (Op = op.Oi) && void 0 !== Op ? Op : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(pp) {
          this.isMouseDown = pp
        }
        handleTick(pp) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(pp))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const pp = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += pp * this.parameters.Hi * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const pp = Ip.d.clamp(1 - .7 * this.parameters.ui, 0, 1.4);
          return Math.floor(60 * pp + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.ji : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Ip.d.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const pp = this.parameters.Ui / 2,
            ip = pp,
            cp = 1 - pp;
          this.catchZonePosition <= ip ? (this.catchZonePosition = ip, this.catchZoneVelocity = 0) : this.catchZonePosition >= cp && (this.catchZonePosition = cp, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const pp = this.parameters.Ui / 2;
          return this.moverPosition >= this.catchZonePosition - pp && this.moverPosition <= this.catchZonePosition + pp
        }
        updateProgress(pp) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.ki * pp : this.progress -= this.parameters.mi * pp, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.Si && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(pp) {
          this.isCompleted = !0, this.resolveRequest(pp)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Ui: this.parameters.Ui,
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
        constructor(pp, ip, cp) {
          var Op, op, Sp, xp, Lp;
          this.resolveRequest = ip, this.tearDownNotification = cp, this.startTime = void 0, this.speed = void 0, this.qi = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const Yp = pp;
          this.parameters = {
            ...Yp,
            speed: null !== (Op = Yp.speed) && void 0 !== Op ? Op : .5,
            qi: Ip.d.clamp(Yp.qi, .05, 1),
            label: null !== (op = Yp.label) && void 0 !== op ? op : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (Sp = Yp.icon) && void 0 !== Sp ? Sp : null,
            scale: null !== (xp = Yp.scale) && void 0 !== xp ? xp : 1,
            rotation: null !== (Lp = Yp.rotation) && void 0 !== Lp ? Lp : 0
          }, this.speed = this.parameters.speed, this.qi = this.parameters.qi, this.startTime = Date.now()
        }
        handleMouseInput(pp) {
          if (pp) {
            this.updateMarkerPosition();
            const pp = Math.abs(this.markerPosition - .5) <= this.qi / 2;
            this.complete(pp)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const pp = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = pp <= .5 ? 2 * pp : 2 - 2 * pp
        }
        complete(pp) {
          this.isCompleted = !0, this.resolveRequest(pp)
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
        constructor(pp, ip, cp) {
          this.resolveRequest = ip, this.tearDownNotification = cp, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = pp, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(pp) {
          if (!pp || this.isCompleted) return;
          const ip = this.getOuterCircleProgress();
          if (ip <= this.parameters.Xi && ip >= -this.parameters.Xi) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Ci) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, Sp.G)(this.parameters.li) && this.misses > this.parameters.li ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.Xi && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Ei
        }
        complete(pp) {
          this.isCompleted = !0, this.resolveRequest(pp)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              Ci: this.parameters.Ci,
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

    function tp() {
      (0, Dp.g)(xp.C.Qte, wp ? xp.C.Qte : 0), wp ? op.m.GA("qteStateUpdated", wp.getState()) : op.m.GA("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class Hp {
      constructor(pp, ip) {
        this.resultPromise = pp, this.tearDownQTE = ip
      }
      static create(pp, ip, cp) {
        const Op = Promise.race([pp, ip]);
        return new Hp(Op, cp)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class dp {
      static queueQTE(pp, ip, cp) {
        let Op, op;
        const Ip = new Promise((pp => {
            Op = pp
          })),
          Sp = new Promise((pp => {
            op = () => {
              pp("qteTornDown")
            }
          })),
          xp = Promise.race([Ip, Sp]).then((() => {})),
          Lp = new Ap(pp, ip, cp, op, xp, Op);
        return Up.set(pp, Lp), yp.enqueue(Lp), wp || this.processNextQTE(), Hp.create(Ip, Sp, op)
      }
      static async processNextQTE() {
        if (wp || yp.wy()) return void(yp.wy() && wp && (wp = null, tp()));
        const pp = await yp.dequeue();
        if (!Up.has(pp.id)) return void await this.processNextQTE();
        Up.delete(pp.id);
        const ip = new Wp(pp.id, pp.type, pp.parameters, pp.resolveRequest, pp.onDonePromise, pp.tearDownNotification);
        wp = ip, tp();
        try {
          await ip.waitUntilDone()
        } catch (cp) {
          console.error("Error while waiting for QTE to resolve:", cp.stack)
        }
        wp === ip && (wp.cleanup(), wp = null, tp()), await this.processNextQTE()
      }
      static cancelQTE(pp) {
        if (wp && wp.id === pp) return wp.tearDown(), wp = null, tp(), void this.processNextQTE();
        const ip = Up.get(pp);
        ip && (Up.delete(pp), ip.tearDownNotification())
      }
      static getCurrentState() {
        return wp ? wp.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        wp && (wp.tearDown(), wp = null), Up.forEach(((pp, ip) => {
          this.cancelQTE(ip)
        })), yp.emptyQueue(), Up.clear(), tp()
      }
    }
  },
  4886: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => tp,
      D: () => Sp,
      H: () => xp,
      K: () => Rp,
      b: () => mp,
      c: () => dp,
      f: () => Xp,
      h: () => Ep,
      j: () => vp,
      m: () => jp,
      n: () => Hp,
      p: () => ep,
      s: () => qp,
      u: () => Mp,
      y: () => Cp
    });
    var Op = cp(4895);
    const op = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Ip = op;

    function Sp(pp) {
      Ip = null !== pp && void 0 !== pp ? pp : op
    }

    function xp() {
      return Ip
    }
    const Lp = new Set,
      Yp = new Set;
    let Dp = -1;
    const Ap = new Set,
      Pp = new Set;
    let Wp = 0,
      yp = 0;
    const Up = new Set,
      wp = new Set;

    function vp(pp) {
      return Lp.add(pp), () => {
        Lp.delete(pp)
      }
    }

    function tp(pp, ip) {
      for (const Op of Lp) try {
        Op(pp)
      } catch (cp) {
        ip(cp)
      }
    }

    function Hp(pp) {
      return Yp.add(pp), () => {
        Yp.delete(pp)
      }
    }

    function dp(pp, ip) {
      const cp = Dp < 0 ? 0 : pp - Dp;
      Dp = pp;
      for (const op of Yp) try {
        op(cp)
      } catch (Op) {
        ip(Op)
      }
    }

    function ep(pp) {
      return Ap.add(pp), () => {
        Ap.delete(pp)
      }
    }

    function jp(pp) {
      return Pp.add(pp), () => {
        Pp.delete(pp)
      }
    }
    let kp = 0;

    function mp(pp) {
      kp += pp
    }

    function Rp() {
      const pp = kp;
      return kp = 0, pp
    }

    function qp(pp) {
      return Up.add(pp), () => {
        Up.delete(pp)
      }
    }

    function Mp(pp) {
      return wp.add(pp), () => {
        wp.delete(pp)
      }
    }

    function Cp() {
      Wp = 0, yp = 0, Dp = -1
    }

    function Ep(pp, ip) {
      if ("paced" === pp) return yp += ip, null;
      if ("drawn" !== pp && "skipped" !== pp) return null;
      const cp = ip + yp;
      return yp = 0, cp
    }

    function Xp(pp, ip, cp, op) {
      const Ip = (0, Op.j)(ip),
        Sp = pp > 0 ? performance.now() : 0;
      for (let Op = 0; Op < pp; Op++)
        for (const pp of Up) try {
          pp()
        } catch (xp) {
          op(xp)
        }
      if (pp > 0 && mp(performance.now() - Sp), null !== cp) {
        for (const pp of Ap) try {
          pp(cp)
        } catch (xp) {
          op(xp)
        }
        Wp += cp
      }
      if ("drawn" === ip) {
        const pp = Wp;
        Wp = 0;
        for (const ip of Pp) try {
          ip(pp)
        } catch (xp) {
          op(xp)
        }
      }
      for (const Op of wp) try {
        Op(pp, Ip)
      } catch (xp) {
        op(xp)
      }
    }
  },
  4919: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp,
      e: () => Ip,
      f: () => xp
    });
    var Op = cp(2457),
      op = cp(4921);

    function Ip(pp) {
      let {
        action: ip,
        flags: cp
      } = pp;
      return "mid-fire" === ip && 0 !== (cp & Op.c.AltLeftClick)
    }
    const Sp = new Set;

    function xp(pp) {
      return Sp.add(pp), () => {
        Sp.delete(pp)
      }
    }

    function Lp(pp) {
      const ip = op.c[255 & pp];
      if (void 0 === ip) return;
      const cp = pp >>> 8 & 255,
        Ip = {
          action: ip,
          down: 0 !== (cp & Op.c.Down),
          flags: cp,
          press: pp >>> 16
        };
      for (const Op of Sp) Op(Ip)
    }
  },
  4921: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      e: () => Ip,
      i: () => Sp,
      j: () => Op,
      n: () => xp
    });
    const Op = {
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
      op = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Ip = {
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
      Sp = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      xp = [16]
  },
  4927: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      e: () => Sp,
      g: () => Yp
    });
    var Op = cp(2457),
      op = cp(2463);
    const Ip = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Sp(pp) {
      return pp instanceof HTMLElement && (!!(pp.isContentEditable || pp instanceof HTMLTextAreaElement || pp instanceof HTMLSelectElement) || pp instanceof HTMLInputElement && !Ip.has(pp.type))
    }

    function xp(pp) {
      let ip = null;
      const cp = cp => {
          const op = Sp(cp);
          op !== ip && (ip = op, pp(Op.i.UiCapture, Op.C.Keyboard, 0, 0, op ? Op.C.Keyboard : 0))
        },
        op = pp => {
          cp(pp.target)
        },
        Ip = pp => {
          cp(pp.relatedTarget)
        },
        xp = () => {
          cp(document.activeElement)
        },
        Lp = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", op, Lp), document.addEventListener("focusout", Ip, Lp), document.addEventListener("keydown", xp, Lp), cp(document.activeElement), () => {
        document.removeEventListener("focusin", op, Lp), document.removeEventListener("focusout", Ip, Lp), document.removeEventListener("keydown", xp, Lp)
      }
    }
    const Lp = new Map;

    function Yp(pp, ip) {
      var cp;
      let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Lp.set(Op, (null !== (cp = Lp.get(Op)) && void 0 !== cp ? cp : 0) & ~pp | ip & pp);
      let Ip = 0;
      for (const op of Lp.values()) Ip |= op;
      return (0, op.E)(pp, Ip & pp)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);