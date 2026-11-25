export const id = 87;
export const ids = [87];
export const modules = {
  4792: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => EG,
      g: () => JG
    });
    var wG = ZG(1270),
      SG = ZG(19);
    var LG = ZG(352);
    var yG = ZG(604);
    var kG = ZG(2380),
      UG = ZG(4800),
      YG = ZG(4827),
      VG = ZG(4842);
    class pG {
      constructor(GG, bG, ZG, wG, SG, LG) {
        this.id = GG, this.type = bG, this.parameters = ZG, this.tearDownNotification = wG, this.onDonePromise = SG, this.resolveRequest = LG
      }
    }
    const fG = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class QG {
      constructor(GG, bG, ZG, wG, SG, LG) {
        this.id = GG, this.type = bG, this.parameters = ZG, this.resolveRequest = wG, this.onDonePromise = SG, this.tearDownNotification = LG, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const yG = JG[bG];
        if (!yG) throw console.error(`No QTE implementation registered for type: ${bG}`), new Error(`No QTE implementation registered for type: ${bG}`);
        this.implementation = new yG(ZG, (GG => {
          this.isCompleted = !0, this.resolveRequest(GG)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = SG.l.subscribe("QTEMouseState", (GG => {
          let {
            isDown: bG
          } = GG;
          this.isCompleted || this.implementation.handleMouseInput(bG)
        })), this.stopInputActions = (0, YG.j)((GG => {
          this.isCompleted || !fG.has(GG.action) && !(0, YG.g)(GG) || this.implementation.handleMouseInput(GG.down)
        })), this.tickSub = SG.l.subscribe("noaTick", (GG => {
          if (this.isCompleted) return;
          const bG = GG / 1e3;
          this.implementation.handleTick(bG)
        })), this.stopShellTicks = (0, UG.t)((() => {
          this.isCompleted || this.implementation.handleTick(kG.p / 1e3)
        }))
      }
      cleanup() {
        var GG, bG;
        this.mouseSub && (SG.l.unsubscribe(this.mouseSub), this.mouseSub = null), null === (GG = this.stopInputActions) || void 0 === GG || GG.call(this), this.stopInputActions = null, null === (bG = this.stopShellTicks) || void 0 === bG || bG.call(this), this.stopShellTicks = null, this.tickSub && (SG.l.unsubscribe(this.tickSub), this.tickSub = null)
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
    const KG = new wG.c,
      hG = new Map;
    let dG = null;
    const JG = {
      progressBar: class {
        constructor(GG, bG, ZG) {
          var wG, SG, LG, yG;
          this.resolveRequest = bG, this.tearDownNotification = ZG, this.progress = 0, this.OG = void 0, this.xG = void 0, this.BG = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const kG = GG;
          this.OG = null !== (wG = kG.OG) && void 0 !== wG ? wG : .075, this.xG = null !== (SG = kG.xG) && void 0 !== SG ? SG : 1, this.progress = null !== (LG = kG.NG) && void 0 !== LG ? LG : 30, this.BG = null !== (yG = kG.BG) && void 0 !== yG && yG, this.parameters = kG
        }
        handleMouseInput(GG) {
          GG && !this.isCompleted && (this.clickCount++, this.progress += this.xG, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.OG, this.BG && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(GG) {
          this.isCompleted = !0, this.resolveRequest(GG)
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
        constructor(GG, bG, ZG) {
          var wG;
          this.resolveRequest = bG, this.tearDownNotification = ZG, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = GG, this.timeWindowMs = null !== (wG = this.parameters.Lb) && void 0 !== wG ? wG : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(GG) {
          if (!GG || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(GG) {
          this.isCompleted = !0, this.resolveRequest(GG)
        }
        getState() {
          const GG = Date.now() - this.startTime,
            bG = Math.max(0, this.timeWindowMs - GG);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: bG,
              Lb: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(GG, bG, ZG) {
          var wG;
          this.resolveRequest = bG, this.tearDownNotification = ZG, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const SG = GG;
          this.parameters = {
            ...SG,
            Yb: LG.c.clamp(SG.Yb, .05, 1)
          }, this.progress = null !== (wG = SG.NG) && void 0 !== wG ? wG : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(GG) {
          this.isMouseDown = GG
        }
        handleTick(GG) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(GG))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const GG = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += GG * this.parameters.Vb * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const GG = LG.c.clamp(1 - .7 * this.parameters.pb, 0, 1.4);
          return Math.floor(60 * GG + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.fb : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = LG.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const GG = this.parameters.Yb / 2,
            bG = GG,
            ZG = 1 - GG;
          this.catchZonePosition <= bG ? (this.catchZonePosition = bG, this.catchZoneVelocity = 0) : this.catchZonePosition >= ZG && (this.catchZonePosition = ZG, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const GG = this.parameters.Yb / 2;
          return this.moverPosition >= this.catchZonePosition - GG && this.moverPosition <= this.catchZonePosition + GG
        }
        updateProgress(GG) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.Qb * GG : this.progress -= this.parameters.Kb * GG, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.BG && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(GG) {
          this.isCompleted = !0, this.resolveRequest(GG)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Yb: this.parameters.Yb,
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
        constructor(GG, bG, ZG) {
          var wG, SG, yG, kG, UG;
          this.resolveRequest = bG, this.tearDownNotification = ZG, this.startTime = void 0, this.speed = void 0, this.Jb = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const YG = GG;
          this.parameters = {
            ...YG,
            speed: null !== (wG = YG.speed) && void 0 !== wG ? wG : .5,
            Jb: LG.c.clamp(YG.Jb, .05, 1),
            label: null !== (SG = YG.label) && void 0 !== SG ? SG : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (yG = YG.icon) && void 0 !== yG ? yG : null,
            scale: null !== (kG = YG.scale) && void 0 !== kG ? kG : 1,
            rotation: null !== (UG = YG.rotation) && void 0 !== UG ? UG : 0
          }, this.speed = this.parameters.speed, this.Jb = this.parameters.Jb, this.startTime = Date.now()
        }
        handleMouseInput(GG) {
          if (GG) {
            this.updateMarkerPosition();
            const GG = Math.abs(this.markerPosition - .5) <= this.Jb / 2;
            this.complete(GG)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const GG = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = GG <= .5 ? 2 * GG : 2 - 2 * GG
        }
        complete(GG) {
          this.isCompleted = !0, this.resolveRequest(GG)
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
        constructor(GG, bG, ZG) {
          this.resolveRequest = bG, this.tearDownNotification = ZG, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = GG, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(GG) {
          if (!GG || this.isCompleted) return;
          const bG = this.getOuterCircleProgress();
          if (bG <= this.parameters.ob && bG >= -this.parameters.ob) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.zb) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, yG.L)(this.parameters.Xb) && this.misses > this.parameters.Xb ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.ob && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Eb
        }
        complete(GG) {
          this.isCompleted = !0, this.resolveRequest(GG)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              zb: this.parameters.zb,
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

    function rG() {
      (0, VG.j)(kG.t.Qte, dG ? kG.t.Qte : 0), dG ? SG.l.xh("qteStateUpdated", dG.getState()) : SG.l.xh("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class zG {
      constructor(GG, bG) {
        this.resultPromise = GG, this.tearDownQTE = bG
      }
      static create(GG, bG, ZG) {
        const wG = Promise.race([GG, bG]);
        return new zG(wG, ZG)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class EG {
      static queueQTE(GG, bG, ZG) {
        let wG, SG;
        const LG = new Promise((GG => {
            wG = GG
          })),
          yG = new Promise((GG => {
            SG = () => {
              GG("qteTornDown")
            }
          })),
          kG = Promise.race([LG, yG]).then((() => {})),
          UG = new pG(GG, bG, ZG, SG, kG, wG);
        return hG.set(GG, UG), KG.enqueue(UG), dG || this.processNextQTE(), zG.create(LG, yG, SG)
      }
      static async processNextQTE() {
        if (dG || KG.wK()) return void(KG.wK() && dG && (dG = null, rG()));
        const GG = await KG.dequeue();
        if (!hG.has(GG.id)) return void await this.processNextQTE();
        hG.delete(GG.id);
        const bG = new QG(GG.id, GG.type, GG.parameters, GG.resolveRequest, GG.onDonePromise, GG.tearDownNotification);
        dG = bG, rG();
        try {
          await bG.waitUntilDone()
        } catch (ZG) {
          console.error("Error while waiting for QTE to resolve:", ZG.stack)
        }
        dG === bG && (dG.cleanup(), dG = null, rG()), await this.processNextQTE()
      }
      static cancelQTE(GG) {
        if (dG && dG.id === GG) return dG.tearDown(), dG = null, rG(), void this.processNextQTE();
        const bG = hG.get(GG);
        bG && (hG.delete(GG), bG.tearDownNotification())
      }
      static getCurrentState() {
        return dG ? dG.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        dG && (dG.tearDown(), dG = null), hG.forEach(((GG, bG) => {
          this.cancelQTE(bG)
        })), KG.emptyQueue(), hG.clear(), rG()
      }
    }
  },
  4800: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => rG,
      E: () => yG,
      I: () => kG,
      K: () => CG,
      c: () => iG,
      g: () => EG,
      j: () => vG,
      k: () => FG,
      l: () => JG,
      n: () => XG,
      p: () => zG,
      r: () => oG,
      t: () => WG,
      u: () => mG,
      y: () => IG
    });
    var wG = ZG(4804);
    const SG = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let LG = SG;

    function yG(GG) {
      LG = null !== GG && void 0 !== GG ? GG : SG
    }

    function kG() {
      return LG
    }
    const UG = new Set,
      YG = new Set;
    let VG = -1;
    const pG = new Set,
      fG = new Set;
    let QG = 0,
      KG = 0;
    const hG = new Set,
      dG = new Set;

    function JG(GG) {
      return UG.add(GG), () => {
        UG.delete(GG)
      }
    }

    function rG(GG, bG) {
      for (const wG of UG) try {
        wG(GG)
      } catch (ZG) {
        bG(ZG)
      }
    }

    function zG(GG) {
      return YG.add(GG), () => {
        YG.delete(GG)
      }
    }

    function EG(GG, bG) {
      const ZG = VG < 0 ? 0 : GG - VG;
      VG = GG;
      for (const SG of YG) try {
        SG(ZG)
      } catch (wG) {
        bG(wG)
      }
    }

    function oG(GG) {
      return pG.add(GG), () => {
        pG.delete(GG)
      }
    }

    function XG(GG) {
      return fG.add(GG), () => {
        fG.delete(GG)
      }
    }
    let uG = 0;

    function iG(GG) {
      uG += GG
    }

    function CG() {
      const GG = uG;
      return uG = 0, GG
    }

    function WG(GG) {
      return hG.add(GG), () => {
        hG.delete(GG)
      }
    }

    function mG(GG) {
      return dG.add(GG), () => {
        dG.delete(GG)
      }
    }

    function IG() {
      QG = 0, KG = 0, VG = -1
    }

    function FG(GG, bG) {
      if ("paced" === GG) return KG += bG, null;
      if ("drawn" !== GG && "skipped" !== GG) return null;
      const ZG = bG + KG;
      return KG = 0, ZG
    }

    function vG(GG, bG, ZG, SG) {
      const LG = (0, wG.l)(bG),
        yG = GG > 0 ? performance.now() : 0;
      for (let wG = 0; wG < GG; wG++)
        for (const GG of hG) try {
          GG()
        } catch (kG) {
          SG(kG)
        }
      if (GG > 0 && iG(performance.now() - yG), null !== ZG) {
        for (const GG of pG) try {
          GG(ZG)
        } catch (kG) {
          SG(kG)
        }
        QG += ZG
      }
      if ("drawn" === bG) {
        const GG = QG;
        QG = 0;
        for (const bG of fG) try {
          bG(GG)
        } catch (kG) {
          SG(kG)
        }
      }
      for (const wG of dG) try {
        wG(GG, LG)
      } catch (kG) {
        SG(kG)
      }
    }
  },
  4827: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG,
      g: () => LG,
      j: () => kG
    });
    var wG = ZG(2380),
      SG = ZG(4836);

    function LG(GG) {
      let {
        action: bG,
        flags: ZG
      } = GG;
      return "mid-fire" === bG && 0 !== (ZG & wG.b.AltLeftClick)
    }
    const yG = new Set;

    function kG(GG) {
      return yG.add(GG), () => {
        yG.delete(GG)
      }
    }

    function UG(GG) {
      const bG = SG.e[255 & GG];
      if (void 0 === bG) return;
      const ZG = GG >>> 8 & 255,
        LG = {
          action: bG,
          down: 0 !== (ZG & wG.b.Down),
          flags: ZG,
          press: GG >>> 16
        };
      for (const wG of yG) wG(LG)
    }
  },
  4836: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG,
      h: () => LG,
      i: () => yG,
      k: () => wG,
      m: () => kG
    });
    const wG = {
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
      SG = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      LG = {
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
      yG = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      kG = [16]
  },
  4842: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG,
      f: () => yG,
      j: () => YG
    });
    var wG = ZG(2380),
      SG = ZG(2388);
    const LG = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function yG(GG) {
      return GG instanceof HTMLElement && (!!(GG.isContentEditable || GG instanceof HTMLTextAreaElement || GG instanceof HTMLSelectElement) || GG instanceof HTMLInputElement && !LG.has(GG.type))
    }

    function kG(GG) {
      let bG = null;
      const ZG = ZG => {
          const SG = yG(ZG);
          SG !== bG && (bG = SG, GG(wG.g.UiCapture, wG.t.Keyboard, 0, 0, SG ? wG.t.Keyboard : 0))
        },
        SG = GG => {
          ZG(GG.target)
        },
        LG = GG => {
          ZG(GG.relatedTarget)
        },
        kG = () => {
          ZG(document.activeElement)
        },
        UG = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", SG, UG), document.addEventListener("focusout", LG, UG), document.addEventListener("keydown", kG, UG), ZG(document.activeElement), () => {
        document.removeEventListener("focusin", SG, UG), document.removeEventListener("focusout", LG, UG), document.removeEventListener("keydown", kG, UG)
      }
    }
    const UG = new Map;

    function YG(GG, bG) {
      var ZG;
      let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      UG.set(wG, (null !== (ZG = UG.get(wG)) && void 0 !== ZG ? ZG : 0) & ~GG | bG & GG);
      let LG = 0;
      for (const SG of UG.values()) LG |= SG;
      return (0, SG.G)(GG, LG & GG)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);