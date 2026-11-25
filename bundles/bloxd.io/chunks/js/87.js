export const id = 87;
export const ids = [87];
export const modules = {
  4952: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => dB,
      g: () => yB
    });
    var TB = ZB(1368),
      JB = ZB(24);
    var oB = ZB(360);
    var GB = ZB(665);
    var vB = ZB(2481),
      kB = ZB(4958),
      cB = ZB(4978),
      nB = ZB(4990);
    class hB {
      constructor(BB, IB, ZB, TB, JB, oB) {
        this.id = BB, this.type = IB, this.parameters = ZB, this.tearDownNotification = TB, this.onDonePromise = JB, this.resolveRequest = oB
      }
    }
    const zB = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class FB {
      constructor(BB, IB, ZB, TB, JB, oB) {
        this.id = BB, this.type = IB, this.parameters = ZB, this.resolveRequest = TB, this.onDonePromise = JB, this.tearDownNotification = oB, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const GB = yB[IB];
        if (!GB) throw console.error(`No QTE implementation registered for type: ${IB}`), new Error(`No QTE implementation registered for type: ${IB}`);
        this.implementation = new GB(ZB, (BB => {
          this.isCompleted = !0, this.resolveRequest(BB)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = JB.l.subscribe("QTEMouseState", (BB => {
          let {
            isDown: IB
          } = BB;
          this.isCompleted || this.implementation.handleMouseInput(IB)
        })), this.stopInputActions = (0, cB.e)((BB => {
          this.isCompleted || !zB.has(BB.action) && !(0, cB.c)(BB) || this.implementation.handleMouseInput(BB.down)
        })), this.tickSub = JB.l.subscribe("noaTick", (BB => {
          if (this.isCompleted) return;
          const IB = BB / 1e3;
          this.implementation.handleTick(IB)
        })), this.stopShellTicks = (0, kB.u)((() => {
          this.isCompleted || this.implementation.handleTick(vB.j / 1e3)
        }))
      }
      cleanup() {
        var BB, IB;
        this.mouseSub && (JB.l.unsubscribe(this.mouseSub), this.mouseSub = null), null === (BB = this.stopInputActions) || void 0 === BB || BB.call(this), this.stopInputActions = null, null === (IB = this.stopShellTicks) || void 0 === IB || IB.call(this), this.stopShellTicks = null, this.tickSub && (JB.l.unsubscribe(this.tickSub), this.tickSub = null)
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
    const NB = new TB.c,
      gB = new Map;
    let qB = null;
    const yB = {
      progressBar: class {
        constructor(BB, IB, ZB) {
          var TB, JB, oB, GB;
          this.resolveRequest = IB, this.tearDownNotification = ZB, this.progress = 0, this.VB = void 0, this.SB = void 0, this.BI = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const vB = BB;
          this.VB = null !== (TB = vB.VB) && void 0 !== TB ? TB : .075, this.SB = null !== (JB = vB.SB) && void 0 !== JB ? JB : 1, this.progress = null !== (oB = vB.DB) && void 0 !== oB ? oB : 30, this.BI = null !== (GB = vB.BI) && void 0 !== GB && GB, this.parameters = vB
        }
        handleMouseInput(BB) {
          BB && !this.isCompleted && (this.clickCount++, this.progress += this.SB, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.VB, this.BI && this.progress <= 0) this.complete(!1);
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
        constructor(BB, IB, ZB) {
          var TB;
          this.resolveRequest = IB, this.tearDownNotification = ZB, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = BB, this.timeWindowMs = null !== (TB = this.parameters.oI) && void 0 !== TB ? TB : 3e3, this.startTime = Date.now()
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
            IB = Math.max(0, this.timeWindowMs - BB);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: IB,
              oI: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(BB, IB, ZB) {
          var TB;
          this.resolveRequest = IB, this.tearDownNotification = ZB, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const JB = BB;
          this.parameters = {
            ...JB,
            cI: oB.e.clamp(JB.cI, .05, 1)
          }, this.progress = null !== (TB = JB.DB) && void 0 !== TB ? TB : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
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
          this.moverPosition += BB * this.parameters.nI * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const BB = oB.e.clamp(1 - .7 * this.parameters.hI, 0, 1.4);
          return Math.floor(60 * BB + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.zI : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = oB.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const BB = this.parameters.cI / 2,
            IB = BB,
            ZB = 1 - BB;
          this.catchZonePosition <= IB ? (this.catchZonePosition = IB, this.catchZoneVelocity = 0) : this.catchZonePosition >= ZB && (this.catchZonePosition = ZB, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const BB = this.parameters.cI / 2;
          return this.moverPosition >= this.catchZonePosition - BB && this.moverPosition <= this.catchZonePosition + BB
        }
        updateProgress(BB) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.FI * BB : this.progress -= this.parameters.NI * BB, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.BI && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
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
              cI: this.parameters.cI,
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
        constructor(BB, IB, ZB) {
          var TB, JB, GB, vB, kB;
          this.resolveRequest = IB, this.tearDownNotification = ZB, this.startTime = void 0, this.speed = void 0, this.qI = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const cB = BB;
          this.parameters = {
            ...cB,
            speed: null !== (TB = cB.speed) && void 0 !== TB ? TB : .5,
            qI: oB.e.clamp(cB.qI, .05, 1),
            label: null !== (JB = cB.label) && void 0 !== JB ? JB : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (GB = cB.icon) && void 0 !== GB ? GB : null,
            scale: null !== (vB = cB.scale) && void 0 !== vB ? vB : 1,
            rotation: null !== (kB = cB.rotation) && void 0 !== kB ? kB : 0
          }, this.speed = this.parameters.speed, this.qI = this.parameters.qI, this.startTime = Date.now()
        }
        handleMouseInput(BB) {
          if (BB) {
            this.updateMarkerPosition();
            const BB = Math.abs(this.markerPosition - .5) <= this.qI / 2;
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
        constructor(BB, IB, ZB) {
          this.resolveRequest = IB, this.tearDownNotification = ZB, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = BB, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(BB) {
          if (!BB || this.isCompleted) return;
          const IB = this.getOuterCircleProgress();
          if (IB <= this.parameters.dI && IB >= -this.parameters.dI) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.UI) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, GB.L)(this.parameters.CI) && this.misses > this.parameters.CI ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.dI && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.WI
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
              UI: this.parameters.UI,
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

    function UB() {
      (0, nB.f)(vB.o.Qte, qB ? vB.o.Qte : 0), qB ? JB.l.Gq("qteStateUpdated", qB.getState()) : JB.l.Gq("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class WB {
      constructor(BB, IB) {
        this.resultPromise = BB, this.tearDownQTE = IB
      }
      static create(BB, IB, ZB) {
        const TB = Promise.race([BB, IB]);
        return new WB(TB, ZB)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class dB {
      static queueQTE(BB, IB, ZB) {
        let TB, JB;
        const oB = new Promise((BB => {
            TB = BB
          })),
          GB = new Promise((BB => {
            JB = () => {
              BB("qteTornDown")
            }
          })),
          vB = Promise.race([oB, GB]).then((() => {})),
          kB = new hB(BB, IB, ZB, JB, vB, TB);
        return gB.set(BB, kB), NB.enqueue(kB), qB || this.processNextQTE(), WB.create(oB, GB, JB)
      }
      static async processNextQTE() {
        if (qB || NB.hN()) return void(NB.hN() && qB && (qB = null, UB()));
        const BB = await NB.dequeue();
        if (!gB.has(BB.id)) return void await this.processNextQTE();
        gB.delete(BB.id);
        const IB = new FB(BB.id, BB.type, BB.parameters, BB.resolveRequest, BB.onDonePromise, BB.tearDownNotification);
        qB = IB, UB();
        try {
          await IB.waitUntilDone()
        } catch (ZB) {
          console.error("Error while waiting for QTE to resolve:", ZB.stack)
        }
        qB === IB && (qB.cleanup(), qB = null, UB()), await this.processNextQTE()
      }
      static cancelQTE(BB) {
        if (qB && qB.id === BB) return qB.tearDown(), qB = null, UB(), void this.processNextQTE();
        const IB = gB.get(BB);
        IB && (gB.delete(BB), IB.tearDownNotification())
      }
      static getCurrentState() {
        return qB ? qB.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        qB && (qB.tearDown(), qB = null), gB.forEach(((BB, IB) => {
          this.cancelQTE(IB)
        })), NB.emptyQueue(), gB.clear(), UB()
      }
    }
  },
  4958: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => pB,
      B: () => UB,
      E: () => GB,
      H: () => vB,
      I: () => OB,
      b: () => wB,
      e: () => dB,
      f: () => HB,
      g: () => aB,
      j: () => yB,
      n: () => QB,
      p: () => WB,
      s: () => CB,
      u: () => YB,
      y: () => iB
    });
    var TB = ZB(4960);
    const JB = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let oB = JB;

    function GB(BB) {
      oB = null !== BB && void 0 !== BB ? BB : JB
    }

    function vB() {
      return oB
    }
    const kB = new Set,
      cB = new Set;
    let nB = -1;
    const hB = new Set,
      zB = new Set;
    let FB = 0,
      NB = 0;
    const gB = new Set,
      qB = new Set;

    function yB(BB) {
      return kB.add(BB), () => {
        kB.delete(BB)
      }
    }

    function UB(BB, IB) {
      for (const TB of kB) try {
        TB(BB)
      } catch (ZB) {
        IB(ZB)
      }
    }

    function WB(BB) {
      return cB.add(BB), () => {
        cB.delete(BB)
      }
    }

    function dB(BB, IB) {
      const ZB = nB < 0 ? 0 : BB - nB;
      nB = BB;
      for (const JB of cB) try {
        JB(ZB)
      } catch (TB) {
        IB(TB)
      }
    }

    function CB(BB) {
      return hB.add(BB), () => {
        hB.delete(BB)
      }
    }

    function QB(BB) {
      return zB.add(BB), () => {
        zB.delete(BB)
      }
    }
    let sB = 0;

    function wB(BB) {
      sB += BB
    }

    function OB() {
      const BB = sB;
      return sB = 0, BB
    }

    function YB(BB) {
      return gB.add(BB), () => {
        gB.delete(BB)
      }
    }

    function iB(BB) {
      return qB.add(BB), () => {
        qB.delete(BB)
      }
    }

    function pB() {
      FB = 0, NB = 0, nB = -1
    }

    function aB(BB, IB) {
      if ("paced" === BB) return NB += IB, null;
      if ("drawn" !== BB && "skipped" !== BB) return null;
      const ZB = IB + NB;
      return NB = 0, ZB
    }

    function HB(BB, IB, ZB, JB) {
      const oB = (0, TB.j)(IB),
        GB = BB > 0 ? performance.now() : 0;
      for (let TB = 0; TB < BB; TB++)
        for (const BB of gB) try {
          BB()
        } catch (vB) {
          JB(vB)
        }
      if (BB > 0 && wB(performance.now() - GB), null !== ZB) {
        for (const BB of hB) try {
          BB(ZB)
        } catch (vB) {
          JB(vB)
        }
        FB += ZB
      }
      if ("drawn" === IB) {
        const BB = FB;
        FB = 0;
        for (const IB of zB) try {
          IB(BB)
        } catch (vB) {
          JB(vB)
        }
      }
      for (const TB of qB) try {
        TB(BB, oB)
      } catch (vB) {
        JB(vB)
      }
    }
  },
  4978: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      c: () => oB,
      e: () => vB
    });
    var TB = ZB(2481),
      JB = ZB(4983);

    function oB(BB) {
      let {
        action: IB,
        flags: ZB
      } = BB;
      return "mid-fire" === IB && 0 !== (ZB & TB.b.AltLeftClick)
    }
    const GB = new Set;

    function vB(BB) {
      return GB.add(BB), () => {
        GB.delete(BB)
      }
    }

    function kB(BB) {
      const IB = JB.d[255 & BB];
      if (void 0 === IB) return;
      const ZB = BB >>> 8 & 255,
        oB = {
          action: IB,
          down: 0 !== (ZB & TB.b.Down),
          flags: ZB,
          press: BB >>> 16
        };
      for (const TB of GB) TB(oB)
    }
  },
  4983: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB,
      f: () => oB,
      h: () => GB,
      i: () => TB,
      k: () => vB
    });
    const TB = {
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
      JB = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      oB = {
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
      GB = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      vB = [16]
  },
  4990: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB,
      d: () => GB,
      f: () => cB
    });
    var TB = ZB(2481),
      JB = ZB(2489);
    const oB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function GB(BB) {
      return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !oB.has(BB.type))
    }

    function vB(BB) {
      let IB = null;
      const ZB = ZB => {
          const JB = GB(ZB);
          JB !== IB && (IB = JB, BB(TB.d.UiCapture, TB.o.Keyboard, 0, 0, JB ? TB.o.Keyboard : 0))
        },
        JB = BB => {
          ZB(BB.target)
        },
        oB = BB => {
          ZB(BB.relatedTarget)
        },
        vB = () => {
          ZB(document.activeElement)
        },
        kB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", JB, kB), document.addEventListener("focusout", oB, kB), document.addEventListener("keydown", vB, kB), ZB(document.activeElement), () => {
        document.removeEventListener("focusin", JB, kB), document.removeEventListener("focusout", oB, kB), document.removeEventListener("keydown", vB, kB)
      }
    }
    const kB = new Map;

    function cB(BB, IB) {
      var ZB;
      let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      kB.set(TB, (null !== (ZB = kB.get(TB)) && void 0 !== ZB ? ZB : 0) & ~BB | IB & BB);
      let oB = 0;
      for (const JB of kB.values()) oB |= JB;
      return (0, JB.D)(BB, oB & BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);