export const id = 100;
export const ids = [100];
export const modules = {
  5269: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => AB,
      g: () => NB
    });
    var YB = GB(1333),
      DB = GB(25);
    var QB = GB(353);
    var oB = GB(641);
    var jB = GB(2617),
      yB = GB(5274),
      JB = GB(5296),
      MB = GB(5313);
    class PB {
      constructor(BB, OB, GB, YB, DB, QB) {
        this.id = BB, this.type = OB, this.parameters = GB, this.tearDownNotification = YB, this.onDonePromise = DB, this.resolveRequest = QB
      }
    }
    const zB = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class lB {
      constructor(BB, OB, GB, YB, DB, QB) {
        this.id = BB, this.type = OB, this.parameters = GB, this.resolveRequest = YB, this.onDonePromise = DB, this.tearDownNotification = QB, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const oB = NB[OB];
        if (!oB) throw console.error(`No QTE implementation registered for type: ${OB}`), new Error(`No QTE implementation registered for type: ${OB}`);
        this.implementation = new oB(GB, (BB => {
          this.isCompleted = !0, this.resolveRequest(BB)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = DB.o.subscribe("QTEMouseState", (BB => {
          let {
            isDown: OB
          } = BB;
          this.isCompleted || this.implementation.handleMouseInput(OB)
        })), this.stopInputActions = (0, JB.g)((BB => {
          this.isCompleted || !zB.has(BB.action) && !(0, JB.f)(BB) || this.implementation.handleMouseInput(BB.down)
        })), this.tickSub = DB.o.subscribe("noaTick", (BB => {
          if (this.isCompleted) return;
          const OB = BB / 1e3;
          this.implementation.handleTick(OB)
        })), this.stopShellTicks = (0, yB.z)((() => {
          this.isCompleted || this.implementation.handleTick(jB.q / 1e3)
        }))
      }
      cleanup() {
        var BB, OB;
        this.mouseSub && (DB.o.unsubscribe(this.mouseSub), this.mouseSub = null), null === (BB = this.stopInputActions) || void 0 === BB || BB.call(this), this.stopInputActions = null, null === (OB = this.stopShellTicks) || void 0 === OB || OB.call(this), this.stopShellTicks = null, this.tickSub && (DB.o.unsubscribe(this.tickSub), this.tickSub = null)
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
    const pB = new YB.c,
      qB = new Map;
    let ZB = null;
    const NB = {
      progressBar: class {
        constructor(BB, OB, GB) {
          var YB, DB, QB, oB;
          this.resolveRequest = OB, this.tearDownNotification = GB, this.progress = 0, this.rO = void 0, this.XO = void 0, this.wO = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const jB = BB;
          this.rO = null !== (YB = jB.rO) && void 0 !== YB ? YB : .075, this.XO = null !== (DB = jB.XO) && void 0 !== DB ? DB : 1, this.progress = null !== (QB = jB.gO) && void 0 !== QB ? QB : 30, this.wO = null !== (oB = jB.wO) && void 0 !== oB && oB, this.parameters = jB
        }
        handleMouseInput(BB) {
          BB && !this.isCompleted && (this.clickCount++, this.progress += this.XO, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.rO, this.wO && this.progress <= 0) this.complete(!1);
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
        constructor(BB, OB, GB) {
          var YB;
          this.resolveRequest = OB, this.tearDownNotification = GB, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = BB, this.timeWindowMs = null !== (YB = this.parameters.hO) && void 0 !== YB ? YB : 3e3, this.startTime = Date.now()
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
            OB = Math.max(0, this.timeWindowMs - BB);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: OB,
              hO: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(BB, OB, GB) {
          var YB;
          this.resolveRequest = OB, this.tearDownNotification = GB, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const DB = BB;
          this.parameters = {
            ...DB,
            CO: QB.b.clamp(DB.CO, .05, 1)
          }, this.progress = null !== (YB = DB.gO) && void 0 !== YB ? YB : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
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
          this.moverPosition += BB * this.parameters.HO * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const BB = QB.b.clamp(1 - .7 * this.parameters.vO, 0, 1.4);
          return Math.floor(60 * BB + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.sO : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = QB.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const BB = this.parameters.CO / 2,
            OB = BB,
            GB = 1 - BB;
          this.catchZonePosition <= OB ? (this.catchZonePosition = OB, this.catchZoneVelocity = 0) : this.catchZonePosition >= GB && (this.catchZonePosition = GB, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const BB = this.parameters.CO / 2;
          return this.moverPosition >= this.catchZonePosition - BB && this.moverPosition <= this.catchZonePosition + BB
        }
        updateProgress(BB) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.xO * BB : this.progress -= this.parameters.tO * BB, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.wO && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
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
              CO: this.parameters.CO,
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
        constructor(BB, OB, GB) {
          var YB, DB, oB, jB, yB;
          this.resolveRequest = OB, this.tearDownNotification = GB, this.startTime = void 0, this.speed = void 0, this.GG = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const JB = BB;
          this.parameters = {
            ...JB,
            speed: null !== (YB = JB.speed) && void 0 !== YB ? YB : .5,
            GG: QB.b.clamp(JB.GG, .05, 1),
            label: null !== (DB = JB.label) && void 0 !== DB ? DB : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (oB = JB.icon) && void 0 !== oB ? oB : null,
            scale: null !== (jB = JB.scale) && void 0 !== jB ? jB : 1,
            rotation: null !== (yB = JB.rotation) && void 0 !== yB ? yB : 0
          }, this.speed = this.parameters.speed, this.GG = this.parameters.GG, this.startTime = Date.now()
        }
        handleMouseInput(BB) {
          if (BB) {
            this.updateMarkerPosition();
            const BB = Math.abs(this.markerPosition - .5) <= this.GG / 2;
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
        constructor(BB, OB, GB) {
          this.resolveRequest = OB, this.tearDownNotification = GB, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = BB, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(BB) {
          if (!BB || this.isCompleted) return;
          const OB = this.getOuterCircleProgress();
          if (OB <= this.parameters.oG && OB >= -this.parameters.oG) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.DG) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, oB.Q)(this.parameters.jG) && this.misses > this.parameters.jG ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.oG && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.QG
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
              DG: this.parameters.DG,
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

    function RB() {
      (0, MB.m)(jB.y.Qte, ZB ? jB.y.Qte : 0), ZB ? DB.o.tM("qteStateUpdated", ZB.getState()) : DB.o.tM("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class WB {
      constructor(BB, OB) {
        this.resultPromise = BB, this.tearDownQTE = OB
      }
      static create(BB, OB, GB) {
        const YB = Promise.race([BB, OB]);
        return new WB(YB, GB)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class AB {
      static queueQTE(BB, OB, GB) {
        let YB, DB;
        const QB = new Promise((BB => {
            YB = BB
          })),
          oB = new Promise((BB => {
            DB = () => {
              BB("qteTornDown")
            }
          })),
          jB = Promise.race([QB, oB]).then((() => {})),
          yB = new PB(BB, OB, GB, DB, jB, YB);
        return qB.set(BB, yB), pB.enqueue(yB), ZB || this.processNextQTE(), WB.create(QB, oB, DB)
      }
      static async processNextQTE() {
        if (ZB || pB.NP()) return void(pB.NP() && ZB && (ZB = null, RB()));
        const BB = await pB.dequeue();
        if (!qB.has(BB.id)) return void await this.processNextQTE();
        qB.delete(BB.id);
        const OB = new lB(BB.id, BB.type, BB.parameters, BB.resolveRequest, BB.onDonePromise, BB.tearDownNotification);
        ZB = OB, RB();
        try {
          await OB.waitUntilDone()
        } catch (GB) {
          console.error("Error while waiting for QTE to resolve:", GB.stack)
        }
        ZB === OB && (ZB.cleanup(), ZB = null, RB()), await this.processNextQTE()
      }
      static cancelQTE(BB) {
        if (ZB && ZB.id === BB) return ZB.tearDown(), ZB = null, RB(), void this.processNextQTE();
        const OB = qB.get(BB);
        OB && (qB.delete(BB), OB.tearDownNotification())
      }
      static getCurrentState() {
        return ZB ? ZB.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        ZB && (ZB.tearDown(), ZB = null), qB.forEach(((BB, OB) => {
          this.cancelQTE(OB)
        })), pB.emptyQueue(), qB.clear(), RB()
      }
    }
  },
  5274: (BB, OB, GB) => {
    GB.d(OB, {
      C: () => dB,
      E: () => KB,
      I: () => RB,
      M: () => oB,
      O: () => jB,
      P: () => fB,
      d: () => UB,
      e: () => AB,
      i: () => mB,
      m: () => uB,
      o: () => NB,
      s: () => SB,
      v: () => WB,
      w: () => VB,
      z: () => kB
    });
    var YB = GB(5276);
    const DB = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let QB = DB;

    function oB(BB) {
      QB = null !== BB && void 0 !== BB ? BB : DB
    }

    function jB() {
      return QB
    }
    const yB = new Set,
      JB = new Set;
    let MB = -1;
    const PB = new Set,
      zB = new Set;
    let lB = 0,
      pB = 0;
    const qB = new Set,
      ZB = new Set;

    function NB(BB) {
      return yB.add(BB), () => {
        yB.delete(BB)
      }
    }

    function RB(BB, OB) {
      for (const YB of yB) try {
        YB(BB)
      } catch (GB) {
        OB(GB)
      }
    }

    function WB(BB) {
      return JB.add(BB), () => {
        JB.delete(BB)
      }
    }

    function AB(BB, OB) {
      const GB = MB < 0 ? 0 : BB - MB;
      MB = BB;
      for (const DB of JB) try {
        DB(GB)
      } catch (YB) {
        OB(YB)
      }
    }

    function VB(BB) {
      return PB.add(BB), () => {
        PB.delete(BB)
      }
    }

    function SB(BB) {
      return zB.add(BB), () => {
        zB.delete(BB)
      }
    }
    let nB = 0;

    function UB(BB) {
      nB += BB
    }

    function fB() {
      const BB = nB;
      return nB = 0, BB
    }

    function kB(BB) {
      return qB.add(BB), () => {
        qB.delete(BB)
      }
    }

    function dB(BB) {
      return ZB.add(BB), () => {
        ZB.delete(BB)
      }
    }

    function KB() {
      lB = 0, pB = 0, MB = -1
    }

    function uB(BB, OB) {
      if ("paced" === BB) return pB += OB, null;
      if ("drawn" !== BB && "skipped" !== BB) return null;
      const GB = OB + pB;
      return pB = 0, GB
    }

    function mB(BB, OB, GB, DB) {
      const QB = (0, YB.k)(OB),
        oB = BB > 0 ? performance.now() : 0;
      for (let YB = 0; YB < BB; YB++)
        for (const BB of qB) try {
          BB()
        } catch (jB) {
          DB(jB)
        }
      if (BB > 0 && UB(performance.now() - oB), null !== GB) {
        for (const BB of PB) try {
          BB(GB)
        } catch (jB) {
          DB(jB)
        }
        lB += GB
      }
      if ("drawn" === OB) {
        const BB = lB;
        lB = 0;
        for (const OB of zB) try {
          OB(BB)
        } catch (jB) {
          DB(jB)
        }
      }
      for (const YB of ZB) try {
        YB(BB, QB)
      } catch (jB) {
        DB(jB)
      }
    }
  },
  5296: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB,
      f: () => QB,
      g: () => jB
    });
    var YB = GB(2617),
      DB = GB(5305);

    function QB(BB) {
      let {
        action: OB,
        flags: GB
      } = BB;
      return "mid-fire" === OB && 0 !== (GB & YB.c.AltLeftClick)
    }
    const oB = new Set;

    function jB(BB) {
      return oB.add(BB), () => {
        oB.delete(BB)
      }
    }

    function yB(BB) {
      const OB = DB.c[255 & BB];
      if (void 0 === OB) return;
      const GB = BB >>> 8 & 255,
        QB = {
          action: OB,
          down: 0 !== (GB & YB.c.Down),
          flags: GB,
          press: BB >>> 16
        };
      for (const YB of oB) YB(QB)
    }
  },
  5305: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      d: () => QB,
      g: () => oB,
      i: () => YB,
      l: () => jB
    });
    const YB = {
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
      DB = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      QB = {
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
      oB = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      jB = [16]
  },
  5313: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      i: () => oB,
      m: () => JB
    });
    var YB = GB(2617),
      DB = GB(2619);
    const QB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function oB(BB) {
      return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !QB.has(BB.type))
    }

    function jB(BB) {
      let OB = null;
      const GB = GB => {
          const DB = oB(GB);
          DB !== OB && (OB = DB, BB(YB.f.UiCapture, YB.y.Keyboard, 0, 0, DB ? YB.y.Keyboard : 0))
        },
        DB = BB => {
          GB(BB.target)
        },
        QB = BB => {
          GB(BB.relatedTarget)
        },
        jB = () => {
          GB(document.activeElement)
        },
        yB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", DB, yB), document.addEventListener("focusout", QB, yB), document.addEventListener("keydown", jB, yB), GB(document.activeElement), () => {
        document.removeEventListener("focusin", DB, yB), document.removeEventListener("focusout", QB, yB), document.removeEventListener("keydown", jB, yB)
      }
    }
    const yB = new Map;

    function JB(BB, OB) {
      var GB;
      let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      yB.set(YB, (null !== (GB = yB.get(YB)) && void 0 !== GB ? GB : 0) & ~BB | OB & BB);
      let QB = 0;
      for (const DB of yB.values()) QB |= DB;
      return (0, DB.u)(BB, QB & BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);