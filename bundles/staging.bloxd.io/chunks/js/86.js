export const id = 86;
export const ids = [86];
export const modules = {
  4706: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => AC,
      f: () => PC
    });
    var QC = ZC(1260),
      wC = ZC(28);
    var bC = ZC(326);
    var nC = ZC(600);
    var fC = ZC(2348),
      oC = ZC(4711),
      qC = ZC(4739),
      FC = ZC(4752);
    class WC {
      constructor(CC, zC, ZC, QC, wC, bC) {
        this.id = CC, this.type = zC, this.parameters = ZC, this.tearDownNotification = QC, this.onDonePromise = wC, this.resolveRequest = bC
      }
    }
    const NC = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class MC {
      constructor(CC, zC, ZC, QC, wC, bC) {
        this.id = CC, this.type = zC, this.parameters = ZC, this.resolveRequest = QC, this.onDonePromise = wC, this.tearDownNotification = bC, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const nC = PC[zC];
        if (!nC) throw console.error(`No QTE implementation registered for type: ${zC}`), new Error(`No QTE implementation registered for type: ${zC}`);
        this.implementation = new nC(ZC, (CC => {
          this.isCompleted = !0, this.resolveRequest(CC)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = wC.o.subscribe("QTEMouseState", (CC => {
          let {
            isDown: zC
          } = CC;
          this.isCompleted || this.implementation.handleMouseInput(zC)
        })), this.stopInputActions = (0, qC.k)((CC => {
          this.isCompleted || !NC.has(CC.action) && !(0, qC.g)(CC) || this.implementation.handleMouseInput(CC.down)
        })), this.tickSub = wC.o.subscribe("noaTick", (CC => {
          if (this.isCompleted) return;
          const zC = CC / 1e3;
          this.implementation.handleTick(zC)
        })), this.stopShellTicks = (0, oC.r)((() => {
          this.isCompleted || this.implementation.handleTick(fC.p / 1e3)
        }))
      }
      cleanup() {
        var CC, zC;
        this.mouseSub && (wC.o.unsubscribe(this.mouseSub), this.mouseSub = null), null === (CC = this.stopInputActions) || void 0 === CC || CC.call(this), this.stopInputActions = null, null === (zC = this.stopShellTicks) || void 0 === zC || zC.call(this), this.stopShellTicks = null, this.tickSub && (wC.o.unsubscribe(this.tickSub), this.tickSub = null)
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
    const gC = new QC.b,
      SC = new Map;
    let pC = null;
    const PC = {
      progressBar: class {
        constructor(CC, zC, ZC) {
          var QC, wC, bC, nC;
          this.resolveRequest = zC, this.tearDownNotification = ZC, this.progress = 0, this.vZ = void 0, this.eZ = void 0, this.hZ = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const fC = CC;
          this.vZ = null !== (QC = fC.vZ) && void 0 !== QC ? QC : .075, this.eZ = null !== (wC = fC.eZ) && void 0 !== wC ? wC : 1, this.progress = null !== (bC = fC.iZ) && void 0 !== bC ? bC : 30, this.hZ = null !== (nC = fC.hZ) && void 0 !== nC && nC, this.parameters = fC
        }
        handleMouseInput(CC) {
          CC && !this.isCompleted && (this.clickCount++, this.progress += this.eZ, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.vZ, this.hZ && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(CC) {
          this.isCompleted = !0, this.resolveRequest(CC)
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
        constructor(CC, zC, ZC) {
          var QC;
          this.resolveRequest = zC, this.tearDownNotification = ZC, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = CC, this.timeWindowMs = null !== (QC = this.parameters.HZ) && void 0 !== QC ? QC : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(CC) {
          if (!CC || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(CC) {
          this.isCompleted = !0, this.resolveRequest(CC)
        }
        getState() {
          const CC = Date.now() - this.startTime,
            zC = Math.max(0, this.timeWindowMs - CC);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: zC,
              HZ: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(CC, zC, ZC) {
          var QC;
          this.resolveRequest = zC, this.tearDownNotification = ZC, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const wC = CC;
          this.parameters = {
            ...wC,
            cZ: bC.c.clamp(wC.cZ, .05, 1)
          }, this.progress = null !== (QC = wC.iZ) && void 0 !== QC ? QC : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(CC) {
          this.isMouseDown = CC
        }
        handleTick(CC) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(CC))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const CC = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += CC * this.parameters.uZ * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const CC = bC.c.clamp(1 - .7 * this.parameters.rZ, 0, 1.4);
          return Math.floor(60 * CC + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.sZ : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = bC.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const CC = this.parameters.cZ / 2,
            zC = CC,
            ZC = 1 - CC;
          this.catchZonePosition <= zC ? (this.catchZonePosition = zC, this.catchZoneVelocity = 0) : this.catchZonePosition >= ZC && (this.catchZonePosition = ZC, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const CC = this.parameters.cZ / 2;
          return this.moverPosition >= this.catchZonePosition - CC && this.moverPosition <= this.catchZonePosition + CC
        }
        updateProgress(CC) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.TZ * CC : this.progress -= this.parameters.aZ * CC, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.hZ && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(CC) {
          this.isCompleted = !0, this.resolveRequest(CC)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              cZ: this.parameters.cZ,
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
        constructor(CC, zC, ZC) {
          var QC, wC, nC, fC, oC;
          this.resolveRequest = zC, this.tearDownNotification = ZC, this.startTime = void 0, this.speed = void 0, this.DZ = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const qC = CC;
          this.parameters = {
            ...qC,
            speed: null !== (QC = qC.speed) && void 0 !== QC ? QC : .5,
            DZ: bC.c.clamp(qC.DZ, .05, 1),
            label: null !== (wC = qC.label) && void 0 !== wC ? wC : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (nC = qC.icon) && void 0 !== nC ? nC : null,
            scale: null !== (fC = qC.scale) && void 0 !== fC ? fC : 1,
            rotation: null !== (oC = qC.rotation) && void 0 !== oC ? oC : 0
          }, this.speed = this.parameters.speed, this.DZ = this.parameters.DZ, this.startTime = Date.now()
        }
        handleMouseInput(CC) {
          if (CC) {
            this.updateMarkerPosition();
            const CC = Math.abs(this.markerPosition - .5) <= this.DZ / 2;
            this.complete(CC)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const CC = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = CC <= .5 ? 2 * CC : 2 - 2 * CC
        }
        complete(CC) {
          this.isCompleted = !0, this.resolveRequest(CC)
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
        constructor(CC, zC, ZC) {
          this.resolveRequest = zC, this.tearDownNotification = ZC, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = CC, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(CC) {
          if (!CC || this.isCompleted) return;
          const zC = this.getOuterCircleProgress();
          if (zC <= this.parameters.UZ && zC >= -this.parameters.UZ) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.yZ) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, nC.H)(this.parameters.BZ) && this.misses > this.parameters.BZ ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.UZ && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.LZ
        }
        complete(CC) {
          this.isCompleted = !0, this.resolveRequest(CC)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              yZ: this.parameters.yZ,
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

    function GC() {
      (0, FC.e)(fC.v.Qte, pC ? fC.v.Qte : 0), pC ? wC.o.bp("qteStateUpdated", pC.getState()) : wC.o.bp("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class RC {
      constructor(CC, zC) {
        this.resultPromise = CC, this.tearDownQTE = zC
      }
      static create(CC, zC, ZC) {
        const QC = Promise.race([CC, zC]);
        return new RC(QC, ZC)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class AC {
      static queueQTE(CC, zC, ZC) {
        let QC, wC;
        const bC = new Promise((CC => {
            QC = CC
          })),
          nC = new Promise((CC => {
            wC = () => {
              CC("qteTornDown")
            }
          })),
          fC = Promise.race([bC, nC]).then((() => {})),
          oC = new WC(CC, zC, ZC, wC, fC, QC);
        return SC.set(CC, oC), gC.enqueue(oC), pC || this.processNextQTE(), RC.create(bC, nC, wC)
      }
      static async processNextQTE() {
        if (pC || gC.fg()) return void(gC.fg() && pC && (pC = null, GC()));
        const CC = await gC.dequeue();
        if (!SC.has(CC.id)) return void await this.processNextQTE();
        SC.delete(CC.id);
        const zC = new MC(CC.id, CC.type, CC.parameters, CC.resolveRequest, CC.onDonePromise, CC.tearDownNotification);
        pC = zC, GC();
        try {
          await zC.waitUntilDone()
        } catch (ZC) {
          console.error("Error while waiting for QTE to resolve:", ZC.stack)
        }
        pC === zC && (pC.cleanup(), pC = null, GC()), await this.processNextQTE()
      }
      static cancelQTE(CC) {
        if (pC && pC.id === CC) return pC.tearDown(), pC = null, GC(), void this.processNextQTE();
        const zC = SC.get(CC);
        zC && (SC.delete(CC), zC.tearDownNotification())
      }
      static getCurrentState() {
        return pC ? pC.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        pC && (pC.tearDown(), pC = null), SC.forEach(((CC, zC) => {
          this.cancelQTE(zC)
        })), gC.emptyQueue(), SC.clear(), GC()
      }
    }
  },
  4711: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => GC,
      B: () => nC,
      E: () => fC,
      G: () => vC,
      b: () => iC,
      e: () => AC,
      h: () => dC,
      j: () => YC,
      k: () => PC,
      m: () => JC,
      n: () => RC,
      p: () => xC,
      r: () => eC,
      u: () => hC,
      w: () => KC
    });
    var QC = ZC(4719);
    const wC = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let bC = wC;

    function nC(CC) {
      bC = null !== CC && void 0 !== CC ? CC : wC
    }

    function fC() {
      return bC
    }
    const oC = new Set,
      qC = new Set;
    let FC = -1;
    const WC = new Set,
      NC = new Set;
    let MC = 0,
      gC = 0;
    const SC = new Set,
      pC = new Set;

    function PC(CC) {
      return oC.add(CC), () => {
        oC.delete(CC)
      }
    }

    function GC(CC, zC) {
      for (const QC of oC) try {
        QC(CC)
      } catch (ZC) {
        zC(ZC)
      }
    }

    function RC(CC) {
      return qC.add(CC), () => {
        qC.delete(CC)
      }
    }

    function AC(CC, zC) {
      const ZC = FC < 0 ? 0 : CC - FC;
      FC = CC;
      for (const wC of qC) try {
        wC(ZC)
      } catch (QC) {
        zC(QC)
      }
    }

    function xC(CC) {
      return WC.add(CC), () => {
        WC.delete(CC)
      }
    }

    function JC(CC) {
      return NC.add(CC), () => {
        NC.delete(CC)
      }
    }
    let IC = 0;

    function iC(CC) {
      IC += CC
    }

    function vC() {
      const CC = IC;
      return IC = 0, CC
    }

    function eC(CC) {
      return SC.add(CC), () => {
        SC.delete(CC)
      }
    }

    function hC(CC) {
      return pC.add(CC), () => {
        pC.delete(CC)
      }
    }

    function KC() {
      MC = 0, gC = 0, FC = -1
    }

    function YC(CC, zC) {
      if ("paced" === CC) return gC += zC, null;
      if ("drawn" !== CC && "skipped" !== CC) return null;
      const ZC = zC + gC;
      return gC = 0, ZC
    }

    function dC(CC, zC, ZC, wC) {
      const bC = (0, QC.i)(zC),
        nC = CC > 0 ? performance.now() : 0;
      for (let QC = 0; QC < CC; QC++)
        for (const CC of SC) try {
          CC()
        } catch (fC) {
          wC(fC)
        }
      if (CC > 0 && iC(performance.now() - nC), null !== ZC) {
        for (const CC of WC) try {
          CC(ZC)
        } catch (fC) {
          wC(fC)
        }
        MC += ZC
      }
      if ("drawn" === zC) {
        const CC = MC;
        MC = 0;
        for (const zC of NC) try {
          zC(CC)
        } catch (fC) {
          wC(fC)
        }
      }
      for (const QC of pC) try {
        QC(CC, bC)
      } catch (fC) {
        wC(fC)
      }
    }
  },
  4739: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => oC,
      g: () => bC,
      k: () => fC
    });
    var QC = ZC(2348),
      wC = ZC(4745);

    function bC(CC) {
      let {
        action: zC,
        flags: ZC
      } = CC;
      return "mid-fire" === zC && 0 !== (ZC & QC.c.AltLeftClick)
    }
    const nC = new Set;

    function fC(CC) {
      return nC.add(CC), () => {
        nC.delete(CC)
      }
    }

    function oC(CC) {
      const zC = wC.c[255 & CC];
      if (void 0 === zC) return;
      const ZC = CC >>> 8 & 255,
        bC = {
          action: zC,
          down: 0 !== (ZC & QC.c.Down),
          flags: ZC,
          press: CC >>> 16
        };
      for (const QC of nC) QC(bC)
    }
  },
  4745: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      d: () => bC,
      f: () => nC,
      g: () => QC,
      h: () => fC
    });
    const QC = {
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
      wC = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      bC = {
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
      nC = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      fC = [16]
  },
  4752: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC,
      d: () => nC,
      e: () => qC
    });
    var QC = ZC(2348),
      wC = ZC(2351);
    const bC = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function nC(CC) {
      return CC instanceof HTMLElement && (!!(CC.isContentEditable || CC instanceof HTMLTextAreaElement || CC instanceof HTMLSelectElement) || CC instanceof HTMLInputElement && !bC.has(CC.type))
    }

    function fC(CC) {
      let zC = null;
      const ZC = ZC => {
          const wC = nC(ZC);
          wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
        },
        wC = CC => {
          ZC(CC.target)
        },
        bC = CC => {
          ZC(CC.relatedTarget)
        },
        fC = () => {
          ZC(document.activeElement)
        },
        oC = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", wC, oC), document.addEventListener("focusout", bC, oC), document.addEventListener("keydown", fC, oC), ZC(document.activeElement), () => {
        document.removeEventListener("focusin", wC, oC), document.removeEventListener("focusout", bC, oC), document.removeEventListener("keydown", fC, oC)
      }
    }
    const oC = new Map;

    function qC(CC, zC) {
      var ZC;
      let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
      let bC = 0;
      for (const wC of oC.values()) bC |= wC;
      return (0, wC.v)(CC, bC & CC)
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);