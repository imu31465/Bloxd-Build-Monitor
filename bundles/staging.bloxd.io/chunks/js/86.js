export const id = 86;
export const ids = [86];
export const modules = {
  4791: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => OD,
      f: () => hD
    });
    var pD = wD(1316),
      sD = wD(25);
    var KD = wD(351);
    var rD = wD(619);
    var LD = wD(2382),
      cD = wD(4800),
      gD = wD(4823),
      RD = wD(4832);
    class AD {
      constructor(DD, zD, wD, pD, sD, KD) {
        this.id = DD, this.type = zD, this.parameters = wD, this.tearDownNotification = pD, this.onDonePromise = sD, this.resolveRequest = KD
      }
    }
    const UD = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class fD {
      constructor(DD, zD, wD, pD, sD, KD) {
        this.id = DD, this.type = zD, this.parameters = wD, this.resolveRequest = pD, this.onDonePromise = sD, this.tearDownNotification = KD, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const rD = hD[zD];
        if (!rD) throw console.error(`No QTE implementation registered for type: ${zD}`), new Error(`No QTE implementation registered for type: ${zD}`);
        this.implementation = new rD(wD, (DD => {
          this.isCompleted = !0, this.resolveRequest(DD)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = sD.l.subscribe("QTEMouseState", (DD => {
          let {
            isDown: zD
          } = DD;
          this.isCompleted || this.implementation.handleMouseInput(zD)
        })), this.stopInputActions = (0, gD.l)((DD => {
          this.isCompleted || !UD.has(DD.action) && !(0, gD.h)(DD) || this.implementation.handleMouseInput(DD.down)
        })), this.tickSub = sD.l.subscribe("noaTick", (DD => {
          if (this.isCompleted) return;
          const zD = DD / 1e3;
          this.implementation.handleTick(zD)
        })), this.stopShellTicks = (0, cD.v)((() => {
          this.isCompleted || this.implementation.handleTick(LD.o / 1e3)
        }))
      }
      cleanup() {
        var DD, zD;
        this.mouseSub && (sD.l.unsubscribe(this.mouseSub), this.mouseSub = null), null === (DD = this.stopInputActions) || void 0 === DD || DD.call(this), this.stopInputActions = null, null === (zD = this.stopShellTicks) || void 0 === zD || zD.call(this), this.stopShellTicks = null, this.tickSub && (sD.l.unsubscribe(this.tickSub), this.tickSub = null)
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
    const ID = new pD.d,
      BD = new Map;
    let GD = null;
    const hD = {
      progressBar: class {
        constructor(DD, zD, wD) {
          var pD, sD, KD, rD;
          this.resolveRequest = zD, this.tearDownNotification = wD, this.progress = 0, this.Vw = void 0, this.Pw = void 0, this.Cw = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const LD = DD;
          this.Vw = null !== (pD = LD.Vw) && void 0 !== pD ? pD : .075, this.Pw = null !== (sD = LD.Pw) && void 0 !== sD ? sD : 1, this.progress = null !== (KD = LD.Xw) && void 0 !== KD ? KD : 30, this.Cw = null !== (rD = LD.Cw) && void 0 !== rD && rD, this.parameters = LD
        }
        handleMouseInput(DD) {
          DD && !this.isCompleted && (this.clickCount++, this.progress += this.Pw, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.Vw, this.Cw && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(DD) {
          this.isCompleted = !0, this.resolveRequest(DD)
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
        constructor(DD, zD, wD) {
          var pD;
          this.resolveRequest = zD, this.tearDownNotification = wD, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = DD, this.timeWindowMs = null !== (pD = this.parameters.dw) && void 0 !== pD ? pD : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(DD) {
          if (!DD || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(DD) {
          this.isCompleted = !0, this.resolveRequest(DD)
        }
        getState() {
          const DD = Date.now() - this.startTime,
            zD = Math.max(0, this.timeWindowMs - DD);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: zD,
              dw: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(DD, zD, wD) {
          var pD;
          this.resolveRequest = zD, this.tearDownNotification = wD, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const sD = DD;
          this.parameters = {
            ...sD,
            Ww: KD.c.clamp(sD.Ww, .05, 1)
          }, this.progress = null !== (pD = sD.Xw) && void 0 !== pD ? pD : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(DD) {
          this.isMouseDown = DD
        }
        handleTick(DD) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(DD))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const DD = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += DD * this.parameters.Nw * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const DD = KD.c.clamp(1 - .7 * this.parameters.Zw, 0, 1.4);
          return Math.floor(60 * DD + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.yw : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = KD.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const DD = this.parameters.Ww / 2,
            zD = DD,
            wD = 1 - DD;
          this.catchZonePosition <= zD ? (this.catchZonePosition = zD, this.catchZoneVelocity = 0) : this.catchZonePosition >= wD && (this.catchZonePosition = wD, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const DD = this.parameters.Ww / 2;
          return this.moverPosition >= this.catchZonePosition - DD && this.moverPosition <= this.catchZonePosition + DD
        }
        updateProgress(DD) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.kw * DD : this.progress -= this.parameters.mw * DD, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.Cw && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(DD) {
          this.isCompleted = !0, this.resolveRequest(DD)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Ww: this.parameters.Ww,
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
        constructor(DD, zD, wD) {
          var pD, sD, rD, LD, cD;
          this.resolveRequest = zD, this.tearDownNotification = wD, this.startTime = void 0, this.speed = void 0, this.ow = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const gD = DD;
          this.parameters = {
            ...gD,
            speed: null !== (pD = gD.speed) && void 0 !== pD ? pD : .5,
            ow: KD.c.clamp(gD.ow, .05, 1),
            label: null !== (sD = gD.label) && void 0 !== sD ? sD : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (rD = gD.icon) && void 0 !== rD ? rD : null,
            scale: null !== (LD = gD.scale) && void 0 !== LD ? LD : 1,
            rotation: null !== (cD = gD.rotation) && void 0 !== cD ? cD : 0
          }, this.speed = this.parameters.speed, this.ow = this.parameters.ow, this.startTime = Date.now()
        }
        handleMouseInput(DD) {
          if (DD) {
            this.updateMarkerPosition();
            const DD = Math.abs(this.markerPosition - .5) <= this.ow / 2;
            this.complete(DD)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const DD = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = DD <= .5 ? 2 * DD : 2 - 2 * DD
        }
        complete(DD) {
          this.isCompleted = !0, this.resolveRequest(DD)
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
        constructor(DD, zD, wD) {
          this.resolveRequest = zD, this.tearDownNotification = wD, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = DD, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(DD) {
          if (!DD || this.isCompleted) return;
          const zD = this.getOuterCircleProgress();
          if (zD <= this.parameters.Fw && zD >= -this.parameters.Fw) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.uw) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, rD.B)(this.parameters.Yw) && this.misses > this.parameters.Yw ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.Fw && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.tw
        }
        complete(DD) {
          this.isCompleted = !0, this.resolveRequest(DD)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              uw: this.parameters.uw,
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

    function nD() {
      (0, RD.j)(LD.s.Qte, GD ? LD.s.Qte : 0), GD ? sD.l.KG("qteStateUpdated", GD.getState()) : sD.l.KG("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class MD {
      constructor(DD, zD) {
        this.resultPromise = DD, this.tearDownQTE = zD
      }
      static create(DD, zD, wD) {
        const pD = Promise.race([DD, zD]);
        return new MD(pD, wD)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class OD {
      static queueQTE(DD, zD, wD) {
        let pD, sD;
        const KD = new Promise((DD => {
            pD = DD
          })),
          rD = new Promise((DD => {
            sD = () => {
              DD("qteTornDown")
            }
          })),
          LD = Promise.race([KD, rD]).then((() => {})),
          cD = new AD(DD, zD, wD, sD, LD, pD);
        return BD.set(DD, cD), ID.enqueue(cD), GD || this.processNextQTE(), MD.create(KD, rD, sD)
      }
      static async processNextQTE() {
        if (GD || ID.AI()) return void(ID.AI() && GD && (GD = null, nD()));
        const DD = await ID.dequeue();
        if (!BD.has(DD.id)) return void await this.processNextQTE();
        BD.delete(DD.id);
        const zD = new fD(DD.id, DD.type, DD.parameters, DD.resolveRequest, DD.onDonePromise, DD.tearDownNotification);
        GD = zD, nD();
        try {
          await zD.waitUntilDone()
        } catch (wD) {
          console.error("Error while waiting for QTE to resolve:", wD.stack)
        }
        GD === zD && (GD.cleanup(), GD = null, nD()), await this.processNextQTE()
      }
      static cancelQTE(DD) {
        if (GD && GD.id === DD) return GD.tearDown(), GD = null, nD(), void this.processNextQTE();
        const zD = BD.get(DD);
        zD && (BD.delete(DD), zD.tearDownNotification())
      }
      static getCurrentState() {
        return GD ? GD.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        GD && (GD.tearDown(), GD = null), BD.forEach(((DD, zD) => {
          this.cancelQTE(zD)
        })), ID.emptyQueue(), BD.clear(), nD()
      }
    }
  },
  4800: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => nD,
      C: () => rD,
      G: () => LD,
      I: () => VD,
      b: () => XD,
      c: () => OD,
      f: () => bD,
      h: () => TD,
      l: () => hD,
      p: () => ED,
      q: () => MD,
      t: () => JD,
      v: () => PD,
      w: () => CD,
      y: () => xD
    });
    var pD = wD(4808);
    const sD = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let KD = sD;

    function rD(DD) {
      KD = null !== DD && void 0 !== DD ? DD : sD
    }

    function LD() {
      return KD
    }
    const cD = new Set,
      gD = new Set;
    let RD = -1;
    const AD = new Set,
      UD = new Set;
    let fD = 0,
      ID = 0;
    const BD = new Set,
      GD = new Set;

    function hD(DD) {
      return cD.add(DD), () => {
        cD.delete(DD)
      }
    }

    function nD(DD, zD) {
      for (const pD of cD) try {
        pD(DD)
      } catch (wD) {
        zD(wD)
      }
    }

    function MD(DD) {
      return gD.add(DD), () => {
        gD.delete(DD)
      }
    }

    function OD(DD, zD) {
      const wD = RD < 0 ? 0 : DD - RD;
      RD = DD;
      for (const sD of gD) try {
        sD(wD)
      } catch (pD) {
        zD(pD)
      }
    }

    function JD(DD) {
      return AD.add(DD), () => {
        AD.delete(DD)
      }
    }

    function ED(DD) {
      return UD.add(DD), () => {
        UD.delete(DD)
      }
    }
    let QD = 0;

    function XD(DD) {
      QD += DD
    }

    function VD() {
      const DD = QD;
      return QD = 0, DD
    }

    function PD(DD) {
      return BD.add(DD), () => {
        BD.delete(DD)
      }
    }

    function CD(DD) {
      return GD.add(DD), () => {
        GD.delete(DD)
      }
    }

    function xD() {
      fD = 0, ID = 0, RD = -1
    }

    function TD(DD, zD) {
      if ("paced" === DD) return ID += zD, null;
      if ("drawn" !== DD && "skipped" !== DD) return null;
      const wD = zD + ID;
      return ID = 0, wD
    }

    function bD(DD, zD, wD, sD) {
      const KD = (0, pD.f)(zD),
        rD = DD > 0 ? performance.now() : 0;
      for (let pD = 0; pD < DD; pD++)
        for (const DD of BD) try {
          DD()
        } catch (LD) {
          sD(LD)
        }
      if (DD > 0 && XD(performance.now() - rD), null !== wD) {
        for (const DD of AD) try {
          DD(wD)
        } catch (LD) {
          sD(LD)
        }
        fD += wD
      }
      if ("drawn" === zD) {
        const DD = fD;
        fD = 0;
        for (const zD of UD) try {
          zD(DD)
        } catch (LD) {
          sD(LD)
        }
      }
      for (const pD of GD) try {
        pD(DD, KD)
      } catch (LD) {
        sD(LD)
      }
    }
  },
  4823: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => cD,
      h: () => KD,
      l: () => LD
    });
    var pD = wD(2382),
      sD = wD(4827);

    function KD(DD) {
      let {
        action: zD,
        flags: wD
      } = DD;
      return "mid-fire" === zD && 0 !== (wD & pD.c.AltLeftClick)
    }
    const rD = new Set;

    function LD(DD) {
      return rD.add(DD), () => {
        rD.delete(DD)
      }
    }

    function cD(DD) {
      const zD = sD.c[255 & DD];
      if (void 0 === zD) return;
      const wD = DD >>> 8 & 255,
        KD = {
          action: zD,
          down: 0 !== (wD & pD.c.Down),
          flags: wD,
          press: DD >>> 16
        };
      for (const pD of rD) pD(KD)
    }
  },
  4827: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      f: () => KD,
      i: () => rD,
      j: () => pD,
      l: () => LD
    });
    const pD = {
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
      sD = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      KD = {
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
      rD = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      LD = [16]
  },
  4832: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      g: () => rD,
      j: () => gD
    });
    var pD = wD(2382),
      sD = wD(2389);
    const KD = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function rD(DD) {
      return DD instanceof HTMLElement && (!!(DD.isContentEditable || DD instanceof HTMLTextAreaElement || DD instanceof HTMLSelectElement) || DD instanceof HTMLInputElement && !KD.has(DD.type))
    }

    function LD(DD) {
      let zD = null;
      const wD = wD => {
          const sD = rD(wD);
          sD !== zD && (zD = sD, DD(pD.h.UiCapture, pD.s.Keyboard, 0, 0, sD ? pD.s.Keyboard : 0))
        },
        sD = DD => {
          wD(DD.target)
        },
        KD = DD => {
          wD(DD.relatedTarget)
        },
        LD = () => {
          wD(document.activeElement)
        },
        cD = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", sD, cD), document.addEventListener("focusout", KD, cD), document.addEventListener("keydown", LD, cD), wD(document.activeElement), () => {
        document.removeEventListener("focusin", sD, cD), document.removeEventListener("focusout", KD, cD), document.removeEventListener("keydown", LD, cD)
      }
    }
    const cD = new Map;

    function gD(DD, zD) {
      var wD;
      let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      cD.set(pD, (null !== (wD = cD.get(pD)) && void 0 !== wD ? wD : 0) & ~DD | zD & DD);
      let KD = 0;
      for (const sD of cD.values()) KD |= sD;
      return (0, sD.A)(DD, KD & DD)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);