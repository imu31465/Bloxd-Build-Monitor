export const id = 87;
export const ids = [87];
export const modules = {
  4866: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => gB,
      e: () => kB
    });
    var QB = zB(1337),
      nB = zB(31);
    var dB = zB(376);
    var IB = zB(658);
    var NB = zB(2482),
      uB = zB(4873),
      UB = zB(4897),
      aB = zB(4909);
    class pB {
      constructor(BB, jB, zB, QB, nB, dB) {
        this.id = BB, this.type = jB, this.parameters = zB, this.tearDownNotification = QB, this.onDonePromise = nB, this.resolveRequest = dB
      }
    }
    const rB = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class sB {
      constructor(BB, jB, zB, QB, nB, dB) {
        this.id = BB, this.type = jB, this.parameters = zB, this.resolveRequest = QB, this.onDonePromise = nB, this.tearDownNotification = dB, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const IB = kB[jB];
        if (!IB) throw console.error(`No QTE implementation registered for type: ${jB}`), new Error(`No QTE implementation registered for type: ${jB}`);
        this.implementation = new IB(zB, (BB => {
          this.isCompleted = !0, this.resolveRequest(BB)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = nB.n.subscribe("QTEMouseState", (BB => {
          let {
            isDown: jB
          } = BB;
          this.isCompleted || this.implementation.handleMouseInput(jB)
        })), this.stopInputActions = (0, UB.k)((BB => {
          this.isCompleted || !rB.has(BB.action) && !(0, UB.g)(BB) || this.implementation.handleMouseInput(BB.down)
        })), this.tickSub = nB.n.subscribe("noaTick", (BB => {
          if (this.isCompleted) return;
          const jB = BB / 1e3;
          this.implementation.handleTick(jB)
        })), this.stopShellTicks = (0, uB.y)((() => {
          this.isCompleted || this.implementation.handleTick(NB.p / 1e3)
        }))
      }
      cleanup() {
        var BB, jB;
        this.mouseSub && (nB.n.unsubscribe(this.mouseSub), this.mouseSub = null), null === (BB = this.stopInputActions) || void 0 === BB || BB.call(this), this.stopInputActions = null, null === (jB = this.stopShellTicks) || void 0 === jB || jB.call(this), this.stopShellTicks = null, this.tickSub && (nB.n.unsubscribe(this.tickSub), this.tickSub = null)
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
    const JB = new QB.c,
      mB = new Map;
    let yB = null;
    const kB = {
      progressBar: class {
        constructor(BB, jB, zB) {
          var QB, nB, dB, IB;
          this.resolveRequest = jB, this.tearDownNotification = zB, this.progress = 0, this.RB = void 0, this.OB = void 0, this.Bj = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const NB = BB;
          this.RB = null !== (QB = NB.RB) && void 0 !== QB ? QB : .075, this.OB = null !== (nB = NB.OB) && void 0 !== nB ? nB : 1, this.progress = null !== (dB = NB.vB) && void 0 !== dB ? dB : 30, this.Bj = null !== (IB = NB.Bj) && void 0 !== IB && IB, this.parameters = NB
        }
        handleMouseInput(BB) {
          BB && !this.isCompleted && (this.clickCount++, this.progress += this.OB, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.RB, this.Bj && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(BB) {
          this.isCompleted = !0, this.resolveRequest(BB)
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
        constructor(BB, jB, zB) {
          var QB;
          this.resolveRequest = jB, this.tearDownNotification = zB, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = BB, this.timeWindowMs = null !== (QB = this.parameters.Ij) && void 0 !== QB ? QB : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(BB) {
          if (!BB || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(BB) {
          this.isCompleted = !0, this.resolveRequest(BB)
        }
        getState() {
          const BB = Date.now() - this.startTime,
            jB = Math.max(0, this.timeWindowMs - BB);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: jB,
              Ij: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(BB, jB, zB) {
          var QB;
          this.resolveRequest = jB, this.tearDownNotification = zB, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const nB = BB;
          this.parameters = {
            ...nB,
            aj: dB.b.clamp(nB.aj, .05, 1)
          }, this.progress = null !== (QB = nB.vB) && void 0 !== QB ? QB : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(BB) {
          this.isMouseDown = BB
        }
        handleTick(BB) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(BB))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const BB = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += BB * this.parameters.pj * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const BB = dB.b.clamp(1 - .7 * this.parameters.rj, 0, 1.4);
          return Math.floor(60 * BB + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.sj : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = dB.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const BB = this.parameters.aj / 2,
            jB = BB,
            zB = 1 - BB;
          this.catchZonePosition <= jB ? (this.catchZonePosition = jB, this.catchZoneVelocity = 0) : this.catchZonePosition >= zB && (this.catchZonePosition = zB, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const BB = this.parameters.aj / 2;
          return this.moverPosition >= this.catchZonePosition - BB && this.moverPosition <= this.catchZonePosition + BB
        }
        updateProgress(BB) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.Jj * BB : this.progress -= this.parameters.mj * BB, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.Bj && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(BB) {
          this.isCompleted = !0, this.resolveRequest(BB)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              aj: this.parameters.aj,
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
        constructor(BB, jB, zB) {
          var QB, nB, IB, NB, uB;
          this.resolveRequest = jB, this.tearDownNotification = zB, this.startTime = void 0, this.speed = void 0, this.kj = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const UB = BB;
          this.parameters = {
            ...UB,
            speed: null !== (QB = UB.speed) && void 0 !== QB ? QB : .5,
            kj: dB.b.clamp(UB.kj, .05, 1),
            label: null !== (nB = UB.label) && void 0 !== nB ? nB : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (IB = UB.icon) && void 0 !== IB ? IB : null,
            scale: null !== (NB = UB.scale) && void 0 !== NB ? NB : 1,
            rotation: null !== (uB = UB.rotation) && void 0 !== uB ? uB : 0
          }, this.speed = this.parameters.speed, this.kj = this.parameters.kj, this.startTime = Date.now()
        }
        handleMouseInput(BB) {
          if (BB) {
            this.updateMarkerPosition();
            const BB = Math.abs(this.markerPosition - .5) <= this.kj / 2;
            this.complete(BB)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const BB = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = BB <= .5 ? 2 * BB : 2 - 2 * BB
        }
        complete(BB) {
          this.isCompleted = !0, this.resolveRequest(BB)
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
        constructor(BB, jB, zB) {
          this.resolveRequest = jB, this.tearDownNotification = zB, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = BB, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(BB) {
          if (!BB || this.isCompleted) return;
          const jB = this.getOuterCircleProgress();
          if (jB <= this.parameters.tj && jB >= -this.parameters.tj) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Lj) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, IB.I)(this.parameters.Sj) && this.misses > this.parameters.Sj ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.tj && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.gj
        }
        complete(BB) {
          this.isCompleted = !0, this.resolveRequest(BB)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              Lj: this.parameters.Lj,
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

    function GB() {
      (0, aB.l)(NB.t.Qte, yB ? NB.t.Qte : 0), yB ? nB.n.Ly("qteStateUpdated", yB.getState()) : nB.n.Ly("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class LB {
      constructor(BB, jB) {
        this.resultPromise = BB, this.tearDownQTE = jB
      }
      static create(BB, jB, zB) {
        const QB = Promise.race([BB, jB]);
        return new LB(QB, zB)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class gB {
      static queueQTE(BB, jB, zB) {
        let QB, nB;
        const dB = new Promise((BB => {
            QB = BB
          })),
          IB = new Promise((BB => {
            nB = () => {
              BB("qteTornDown")
            }
          })),
          NB = Promise.race([dB, IB]).then((() => {})),
          uB = new pB(BB, jB, zB, nB, NB, QB);
        return mB.set(BB, uB), JB.enqueue(uB), yB || this.processNextQTE(), LB.create(dB, IB, nB)
      }
      static async processNextQTE() {
        if (yB || JB.tJ()) return void(JB.tJ() && yB && (yB = null, GB()));
        const BB = await JB.dequeue();
        if (!mB.has(BB.id)) return void await this.processNextQTE();
        mB.delete(BB.id);
        const jB = new sB(BB.id, BB.type, BB.parameters, BB.resolveRequest, BB.onDonePromise, BB.tearDownNotification);
        yB = jB, GB();
        try {
          await jB.waitUntilDone()
        } catch (zB) {
          console.error("Error while waiting for QTE to resolve:", zB.stack)
        }
        yB === jB && (yB.cleanup(), yB = null, GB()), await this.processNextQTE()
      }
      static cancelQTE(BB) {
        if (yB && yB.id === BB) return yB.tearDown(), yB = null, GB(), void this.processNextQTE();
        const jB = mB.get(BB);
        jB && (mB.delete(BB), jB.tearDownNotification())
      }
      static getCurrentState() {
        return yB ? yB.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        yB && (yB.tearDown(), yB = null), mB.forEach(((BB, jB) => {
          this.cancelQTE(jB)
        })), JB.emptyQueue(), mB.clear(), GB()
      }
    }
  },
  4873: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => fB,
      E: () => oB,
      F: () => GB,
      H: () => IB,
      I: () => NB,
      K: () => iB,
      e: () => EB,
      g: () => gB,
      h: () => DB,
      l: () => HB,
      p: () => kB,
      r: () => SB,
      t: () => LB,
      u: () => tB,
      y: () => qB
    });
    var QB = zB(4879);
    const nB = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let dB = nB;

    function IB(BB) {
      dB = null !== BB && void 0 !== BB ? BB : nB
    }

    function NB() {
      return dB
    }
    const uB = new Set,
      UB = new Set;
    let aB = -1;
    const pB = new Set,
      rB = new Set;
    let sB = 0,
      JB = 0;
    const mB = new Set,
      yB = new Set;

    function kB(BB) {
      return uB.add(BB), () => {
        uB.delete(BB)
      }
    }

    function GB(BB, jB) {
      for (const QB of uB) try {
        QB(BB)
      } catch (zB) {
        jB(zB)
      }
    }

    function LB(BB) {
      return UB.add(BB), () => {
        UB.delete(BB)
      }
    }

    function gB(BB, jB) {
      const zB = aB < 0 ? 0 : BB - aB;
      aB = BB;
      for (const nB of UB) try {
        nB(zB)
      } catch (QB) {
        jB(QB)
      }
    }

    function tB(BB) {
      return pB.add(BB), () => {
        pB.delete(BB)
      }
    }

    function SB(BB) {
      return rB.add(BB), () => {
        rB.delete(BB)
      }
    }
    let MB = 0;

    function EB(BB) {
      MB += BB
    }

    function iB() {
      const BB = MB;
      return MB = 0, BB
    }

    function qB(BB) {
      return mB.add(BB), () => {
        mB.delete(BB)
      }
    }

    function fB(BB) {
      return yB.add(BB), () => {
        yB.delete(BB)
      }
    }

    function oB() {
      sB = 0, JB = 0, aB = -1
    }

    function HB(BB, jB) {
      if ("paced" === BB) return JB += jB, null;
      if ("drawn" !== BB && "skipped" !== BB) return null;
      const zB = jB + JB;
      return JB = 0, zB
    }

    function DB(BB, jB, zB, nB) {
      const dB = (0, QB.i)(jB),
        IB = BB > 0 ? performance.now() : 0;
      for (let QB = 0; QB < BB; QB++)
        for (const BB of mB) try {
          BB()
        } catch (NB) {
          nB(NB)
        }
      if (BB > 0 && EB(performance.now() - IB), null !== zB) {
        for (const BB of pB) try {
          BB(zB)
        } catch (NB) {
          nB(NB)
        }
        sB += zB
      }
      if ("drawn" === jB) {
        const BB = sB;
        sB = 0;
        for (const jB of rB) try {
          jB(BB)
        } catch (NB) {
          nB(NB)
        }
      }
      for (const QB of yB) try {
        QB(BB, dB)
      } catch (NB) {
        nB(NB)
      }
    }
  },
  4897: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => uB,
      g: () => dB,
      k: () => NB
    });
    var QB = zB(2482),
      nB = zB(4906);

    function dB(BB) {
      let {
        action: jB,
        flags: zB
      } = BB;
      return "mid-fire" === jB && 0 !== (zB & QB.c.AltLeftClick)
    }
    const IB = new Set;

    function NB(BB) {
      return IB.add(BB), () => {
        IB.delete(BB)
      }
    }

    function uB(BB) {
      const jB = nB.e[255 & BB];
      if (void 0 === jB) return;
      const zB = BB >>> 8 & 255,
        dB = {
          action: jB,
          down: 0 !== (zB & QB.c.Down),
          flags: zB,
          press: BB >>> 16
        };
      for (const QB of IB) QB(dB)
    }
  },
  4906: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      i: () => dB,
      m: () => IB,
      n: () => QB,
      r: () => NB
    });
    const QB = {
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
      nB = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      dB = {
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
      IB = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      NB = [16]
  },
  4909: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      h: () => IB,
      l: () => UB
    });
    var QB = zB(2482),
      nB = zB(2491);
    const dB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function IB(BB) {
      return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !dB.has(BB.type))
    }

    function NB(BB) {
      let jB = null;
      const zB = zB => {
          const nB = IB(zB);
          nB !== jB && (jB = nB, BB(QB.j.UiCapture, QB.t.Keyboard, 0, 0, nB ? QB.t.Keyboard : 0))
        },
        nB = BB => {
          zB(BB.target)
        },
        dB = BB => {
          zB(BB.relatedTarget)
        },
        NB = () => {
          zB(document.activeElement)
        },
        uB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", nB, uB), document.addEventListener("focusout", dB, uB), document.addEventListener("keydown", NB, uB), zB(document.activeElement), () => {
        document.removeEventListener("focusin", nB, uB), document.removeEventListener("focusout", dB, uB), document.removeEventListener("keydown", NB, uB)
      }
    }
    const uB = new Map;

    function UB(BB, jB) {
      var zB;
      let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      uB.set(QB, (null !== (zB = uB.get(QB)) && void 0 !== zB ? zB : 0) & ~BB | jB & BB);
      let dB = 0;
      for (const nB of uB.values()) dB |= nB;
      return (0, nB.D)(BB, dB & BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);