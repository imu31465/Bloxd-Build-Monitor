export const id = 102;
export const ids = [102];
export const modules = {
  5669: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => hb,
      c: () => Bb
    });
    var eb = Mb(1429),
      Hb = Mb(29);
    var pb = Mb(382);
    var Vb = Mb(661);
    var gb = Mb(3470),
      lb = Mb(5672),
      Lb = Mb(5693),
      Ib = Mb(5706);
    class Ob {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        this.id = bb, this.type = wb, this.parameters = Mb, this.tearDownNotification = eb, this.onDonePromise = Hb, this.resolveRequest = pb
      }
    }
    const Ub = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class tb {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        this.id = bb, this.type = wb, this.parameters = Mb, this.resolveRequest = eb, this.onDonePromise = Hb, this.tearDownNotification = pb, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const Vb = Bb[wb];
        if (!Vb) throw console.error(`No QTE implementation registered for type: ${wb}`), new Error(`No QTE implementation registered for type: ${wb}`);
        this.implementation = new Vb(Mb, (bb => {
          this.isCompleted = !0, this.resolveRequest(bb)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Hb.k.subscribe("QTEMouseState", (bb => {
          let {
            isDown: wb
          } = bb;
          this.isCompleted || this.implementation.handleMouseInput(wb)
        })), this.stopInputActions = (0, Lb.k)((bb => {
          this.isCompleted || !Ub.has(bb.action) && !(0, Lb.g)(bb) || this.implementation.handleMouseInput(bb.down)
        })), this.tickSub = Hb.k.subscribe("noaTick", (bb => {
          if (this.isCompleted) return;
          const wb = bb / 1e3;
          this.implementation.handleTick(wb)
        })), this.stopShellTicks = (0, lb.x)((() => {
          this.isCompleted || this.implementation.handleTick(gb.u / 1e3)
        }))
      }
      cleanup() {
        var bb, wb;
        this.mouseSub && (Hb.k.unsubscribe(this.mouseSub), this.mouseSub = null), null === (bb = this.stopInputActions) || void 0 === bb || bb.call(this), this.stopInputActions = null, null === (wb = this.stopShellTicks) || void 0 === wb || wb.call(this), this.stopShellTicks = null, this.tickSub && (Hb.k.unsubscribe(this.tickSub), this.tickSub = null)
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
    const Cb = new eb.c,
      Eb = new Map;
    let Fb = null;
    const Bb = {
      progressBar: class {
        constructor(bb, wb, Mb) {
          var eb, Hb, pb, Vb;
          this.resolveRequest = wb, this.tearDownNotification = Mb, this.progress = 0, this.zp = void 0, this.Xp = void 0, this.xp = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const gb = bb;
          this.zp = null !== (eb = gb.zp) && void 0 !== eb ? eb : .075, this.Xp = null !== (Hb = gb.Xp) && void 0 !== Hb ? Hb : 1, this.progress = null !== (pb = gb.hp) && void 0 !== pb ? pb : 30, this.xp = null !== (Vb = gb.xp) && void 0 !== Vb && Vb, this.parameters = gb
        }
        handleMouseInput(bb) {
          bb && !this.isCompleted && (this.clickCount++, this.progress += this.Xp, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.zp, this.xp && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(bb) {
          this.isCompleted = !0, this.resolveRequest(bb)
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
        constructor(bb, wb, Mb) {
          var eb;
          this.resolveRequest = wb, this.tearDownNotification = Mb, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = bb, this.timeWindowMs = null !== (eb = this.parameters.rp) && void 0 !== eb ? eb : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(bb) {
          if (!bb || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(bb) {
          this.isCompleted = !0, this.resolveRequest(bb)
        }
        getState() {
          const bb = Date.now() - this.startTime,
            wb = Math.max(0, this.timeWindowMs - bb);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: wb,
              rp: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(bb, wb, Mb) {
          var eb;
          this.resolveRequest = wb, this.tearDownNotification = Mb, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Hb = bb;
          this.parameters = {
            ...Hb,
            Yp: pb.e.clamp(Hb.Yp, .05, 1)
          }, this.progress = null !== (eb = Hb.hp) && void 0 !== eb ? eb : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(bb) {
          this.isMouseDown = bb
        }
        handleTick(bb) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(bb))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const bb = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += bb * this.parameters.Zp * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const bb = pb.e.clamp(1 - .7 * this.parameters.fp, 0, 1.4);
          return Math.floor(60 * bb + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.Ap : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = pb.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const bb = this.parameters.Yp / 2,
            wb = bb,
            Mb = 1 - bb;
          this.catchZonePosition <= wb ? (this.catchZonePosition = wb, this.catchZoneVelocity = 0) : this.catchZonePosition >= Mb && (this.catchZonePosition = Mb, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const bb = this.parameters.Yp / 2;
          return this.moverPosition >= this.catchZonePosition - bb && this.moverPosition <= this.catchZonePosition + bb
        }
        updateProgress(bb) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.Wp * bb : this.progress -= this.parameters.Jp * bb, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.xp && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(bb) {
          this.isCompleted = !0, this.resolveRequest(bb)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Yp: this.parameters.Yp,
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
        constructor(bb, wb, Mb) {
          var eb, Hb, Vb, gb, lb;
          this.resolveRequest = wb, this.tearDownNotification = Mb, this.startTime = void 0, this.speed = void 0, this.Np = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const Lb = bb;
          this.parameters = {
            ...Lb,
            speed: null !== (eb = Lb.speed) && void 0 !== eb ? eb : .5,
            Np: pb.e.clamp(Lb.Np, .05, 1),
            label: null !== (Hb = Lb.label) && void 0 !== Hb ? Hb : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (Vb = Lb.icon) && void 0 !== Vb ? Vb : null,
            scale: null !== (gb = Lb.scale) && void 0 !== gb ? gb : 1,
            rotation: null !== (lb = Lb.rotation) && void 0 !== lb ? lb : 0
          }, this.speed = this.parameters.speed, this.Np = this.parameters.Np, this.startTime = Date.now()
        }
        handleMouseInput(bb) {
          if (bb) {
            this.updateMarkerPosition();
            const bb = Math.abs(this.markerPosition - .5) <= this.Np / 2;
            this.complete(bb)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const bb = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = bb <= .5 ? 2 * bb : 2 - 2 * bb
        }
        complete(bb) {
          this.isCompleted = !0, this.resolveRequest(bb)
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
        constructor(bb, wb, Mb) {
          this.resolveRequest = wb, this.tearDownNotification = Mb, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = bb, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(bb) {
          if (!bb || this.isCompleted) return;
          const wb = this.getOuterCircleProgress();
          if (wb <= this.parameters.qp && wb >= -this.parameters.qp) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Qp) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, Vb.K)(this.parameters.ap) && this.misses > this.parameters.ap ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.qp && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Gp
        }
        complete(bb) {
          this.isCompleted = !0, this.resolveRequest(bb)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              Qp: this.parameters.Qp,
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

    function sb() {
      (0, Ib.h)(gb.y.Qte, Fb ? gb.y.Qte : 0), Fb ? Hb.k.iI("qteStateUpdated", Fb.getState()) : Hb.k.iI("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class mb {
      constructor(bb, wb) {
        this.resultPromise = bb, this.tearDownQTE = wb
      }
      static create(bb, wb, Mb) {
        const eb = Promise.race([bb, wb]);
        return new mb(eb, Mb)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class hb {
      static queueQTE(bb, wb, Mb) {
        let eb, Hb;
        const pb = new Promise((bb => {
            eb = bb
          })),
          Vb = new Promise((bb => {
            Hb = () => {
              bb("qteTornDown")
            }
          })),
          gb = Promise.race([pb, Vb]).then((() => {})),
          lb = new Ob(bb, wb, Mb, Hb, gb, eb);
        return Eb.set(bb, lb), Cb.enqueue(lb), Fb || this.processNextQTE(), mb.create(pb, Vb, Hb)
      }
      static async processNextQTE() {
        if (Fb || Cb.IO()) return void(Cb.IO() && Fb && (Fb = null, sb()));
        const bb = await Cb.dequeue();
        if (!Eb.has(bb.id)) return void await this.processNextQTE();
        Eb.delete(bb.id);
        const wb = new tb(bb.id, bb.type, bb.parameters, bb.resolveRequest, bb.onDonePromise, bb.tearDownNotification);
        Fb = wb, sb();
        try {
          await wb.waitUntilDone()
        } catch (Mb) {
          console.error("Error while waiting for QTE to resolve:", Mb.stack)
        }
        Fb === wb && (Fb.cleanup(), Fb = null, sb()), await this.processNextQTE()
      }
      static cancelQTE(bb) {
        if (Fb && Fb.id === bb) return Fb.tearDown(), Fb = null, sb(), void this.processNextQTE();
        const wb = Eb.get(bb);
        wb && (Eb.delete(bb), wb.tearDownNotification())
      }
      static getCurrentState() {
        return Fb ? Fb.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        Fb && (Fb.tearDown(), Fb = null), Eb.forEach(((bb, wb) => {
          this.cancelQTE(wb)
        })), Cb.emptyQueue(), Eb.clear(), sb()
      }
    }
  },
  5672: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => Rb,
      E: () => Db,
      I: () => sb,
      K: () => Vb,
      O: () => gb,
      R: () => Kb,
      b: () => jb,
      f: () => hb,
      i: () => Yb,
      l: () => cb,
      m: () => Bb,
      o: () => Xb,
      s: () => mb,
      w: () => zb,
      x: () => rb
    });
    var eb = Mb(5675);
    const Hb = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let pb = Hb;

    function Vb(bb) {
      pb = null !== bb && void 0 !== bb ? bb : Hb
    }

    function gb() {
      return pb
    }
    const lb = new Set,
      Lb = new Set;
    let Ib = -1;
    const Ob = new Set,
      Ub = new Set;
    let tb = 0,
      Cb = 0;
    const Eb = new Set,
      Fb = new Set;

    function Bb(bb) {
      return lb.add(bb), () => {
        lb.delete(bb)
      }
    }

    function sb(bb, wb) {
      for (const eb of lb) try {
        eb(bb)
      } catch (Mb) {
        wb(Mb)
      }
    }

    function mb(bb) {
      return Lb.add(bb), () => {
        Lb.delete(bb)
      }
    }

    function hb(bb, wb) {
      const Mb = Ib < 0 ? 0 : bb - Ib;
      Ib = bb;
      for (const Hb of Lb) try {
        Hb(Mb)
      } catch (eb) {
        wb(eb)
      }
    }

    function zb(bb) {
      return Ob.add(bb), () => {
        Ob.delete(bb)
      }
    }

    function Xb(bb) {
      return Ub.add(bb), () => {
        Ub.delete(bb)
      }
    }
    let xb = 0;

    function jb(bb) {
      xb += bb
    }

    function Kb() {
      const bb = xb;
      return xb = 0, bb
    }

    function rb(bb) {
      return Eb.add(bb), () => {
        Eb.delete(bb)
      }
    }

    function Rb(bb) {
      return Fb.add(bb), () => {
        Fb.delete(bb)
      }
    }

    function Db() {
      tb = 0, Cb = 0, Ib = -1
    }

    function cb(bb, wb) {
      if ("paced" === bb) return Cb += wb, null;
      if ("drawn" !== bb && "skipped" !== bb) return null;
      const Mb = wb + Cb;
      return Cb = 0, Mb
    }

    function Yb(bb, wb, Mb, Hb) {
      const pb = (0, eb.g)(wb),
        Vb = bb > 0 ? performance.now() : 0;
      for (let eb = 0; eb < bb; eb++)
        for (const bb of Eb) try {
          bb()
        } catch (gb) {
          Hb(gb)
        }
      if (bb > 0 && jb(performance.now() - Vb), null !== Mb) {
        for (const bb of Ob) try {
          bb(Mb)
        } catch (gb) {
          Hb(gb)
        }
        tb += Mb
      }
      if ("drawn" === wb) {
        const bb = tb;
        tb = 0;
        for (const wb of Ub) try {
          wb(bb)
        } catch (gb) {
          Hb(gb)
        }
      }
      for (const eb of Fb) try {
        eb(bb, pb)
      } catch (gb) {
        Hb(gb)
      }
    }
  },
  5693: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => lb,
      g: () => pb,
      k: () => gb
    });
    var eb = Mb(3470),
      Hb = Mb(5701);

    function pb(bb) {
      let {
        action: wb,
        flags: Mb
      } = bb;
      return "mid-fire" === wb && 0 !== (Mb & eb.b.AltLeftClick)
    }
    const Vb = new Set;

    function gb(bb) {
      return Vb.add(bb), () => {
        Vb.delete(bb)
      }
    }

    function lb(bb) {
      const wb = Hb.c[255 & bb];
      if (void 0 === wb) return;
      const Mb = bb >>> 8 & 255,
        pb = {
          action: wb,
          down: 0 !== (Mb & eb.b.Down),
          flags: Mb,
          press: bb >>> 16
        };
      for (const eb of Vb) eb(pb)
    }
  },
  5701: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      d: () => pb,
      h: () => Vb,
      k: () => eb,
      o: () => gb
    });
    const eb = {
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
      Hb = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      pb = {
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
      Vb = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      gb = [16]
  },
  5706: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      f: () => Vb,
      h: () => Lb
    });
    var eb = Mb(3470),
      Hb = Mb(3479);
    const pb = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Vb(bb) {
      return bb instanceof HTMLElement && (!!(bb.isContentEditable || bb instanceof HTMLTextAreaElement || bb instanceof HTMLSelectElement) || bb instanceof HTMLInputElement && !pb.has(bb.type))
    }

    function gb(bb) {
      let wb = null;
      const Mb = Mb => {
          const Hb = Vb(Mb);
          Hb !== wb && (wb = Hb, bb(eb.h.UiCapture, eb.y.Keyboard, 0, 0, Hb ? eb.y.Keyboard : 0))
        },
        Hb = bb => {
          Mb(bb.target)
        },
        pb = bb => {
          Mb(bb.relatedTarget)
        },
        gb = () => {
          Mb(document.activeElement)
        },
        lb = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Hb, lb), document.addEventListener("focusout", pb, lb), document.addEventListener("keydown", gb, lb), Mb(document.activeElement), () => {
        document.removeEventListener("focusin", Hb, lb), document.removeEventListener("focusout", pb, lb), document.removeEventListener("keydown", gb, lb)
      }
    }
    const lb = new Map;

    function Lb(bb, wb) {
      var Mb;
      let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      lb.set(eb, (null !== (Mb = lb.get(eb)) && void 0 !== Mb ? Mb : 0) & ~bb | wb & bb);
      let pb = 0;
      for (const Hb of lb.values()) pb |= Hb;
      return (0, Hb.u)(bb, pb & bb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);