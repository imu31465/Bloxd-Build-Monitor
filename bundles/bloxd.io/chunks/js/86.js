export const id = 86;
export const ids = [86];
export const modules = {
  4904: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => QS,
      f: () => CS
    });
    var tS = gS(1386),
      bS = gS(31);
    var XS = gS(387);
    var xS = gS(680);
    var NS = gS(2510),
      qS = gS(4911),
      uS = gS(4938),
      IS = gS(4954);
    class fS {
      constructor(SS, HS, gS, tS, bS, XS) {
        this.id = SS, this.type = HS, this.parameters = gS, this.tearDownNotification = tS, this.onDonePromise = bS, this.resolveRequest = XS
      }
    }
    const kS = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class aS {
      constructor(SS, HS, gS, tS, bS, XS) {
        this.id = SS, this.type = HS, this.parameters = gS, this.resolveRequest = tS, this.onDonePromise = bS, this.tearDownNotification = XS, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const xS = CS[HS];
        if (!xS) throw console.error(`No QTE implementation registered for type: ${HS}`), new Error(`No QTE implementation registered for type: ${HS}`);
        this.implementation = new xS(gS, (SS => {
          this.isCompleted = !0, this.resolveRequest(SS)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = bS.k.subscribe("QTEMouseState", (SS => {
          let {
            isDown: HS
          } = SS;
          this.isCompleted || this.implementation.handleMouseInput(HS)
        })), this.stopInputActions = (0, uS.h)((SS => {
          this.isCompleted || !kS.has(SS.action) && !(0, uS.e)(SS) || this.implementation.handleMouseInput(SS.down)
        })), this.tickSub = bS.k.subscribe("noaTick", (SS => {
          if (this.isCompleted) return;
          const HS = SS / 1e3;
          this.implementation.handleTick(HS)
        })), this.stopShellTicks = (0, qS.w)((() => {
          this.isCompleted || this.implementation.handleTick(NS.u / 1e3)
        }))
      }
      cleanup() {
        var SS, HS;
        this.mouseSub && (bS.k.unsubscribe(this.mouseSub), this.mouseSub = null), null === (SS = this.stopInputActions) || void 0 === SS || SS.call(this), this.stopInputActions = null, null === (HS = this.stopShellTicks) || void 0 === HS || HS.call(this), this.stopShellTicks = null, this.tickSub && (bS.k.unsubscribe(this.tickSub), this.tickSub = null)
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
    const KS = new tS.e,
      jS = new Map;
    let GS = null;
    const CS = {
      progressBar: class {
        constructor(SS, HS, gS) {
          var tS, bS, XS, xS;
          this.resolveRequest = HS, this.tearDownNotification = gS, this.progress = 0, this.Dg = void 0, this.wg = void 0, this.hg = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const NS = SS;
          this.Dg = null !== (tS = NS.Dg) && void 0 !== tS ? tS : .075, this.wg = null !== (bS = NS.wg) && void 0 !== bS ? bS : 1, this.progress = null !== (XS = NS.Qg) && void 0 !== XS ? XS : 30, this.hg = null !== (xS = NS.hg) && void 0 !== xS && xS, this.parameters = NS
        }
        handleMouseInput(SS) {
          SS && !this.isCompleted && (this.clickCount++, this.progress += this.wg, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.Dg, this.hg && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(SS) {
          this.isCompleted = !0, this.resolveRequest(SS)
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
        constructor(SS, HS, gS) {
          var tS;
          this.resolveRequest = HS, this.tearDownNotification = gS, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = SS, this.timeWindowMs = null !== (tS = this.parameters.vg) && void 0 !== tS ? tS : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(SS) {
          if (!SS || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(SS) {
          this.isCompleted = !0, this.resolveRequest(SS)
        }
        getState() {
          const SS = Date.now() - this.startTime,
            HS = Math.max(0, this.timeWindowMs - SS);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: HS,
              vg: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(SS, HS, gS) {
          var tS;
          this.resolveRequest = HS, this.tearDownNotification = gS, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const bS = SS;
          this.parameters = {
            ...bS,
            Ag: XS.b.clamp(bS.Ag, .05, 1)
          }, this.progress = null !== (tS = bS.Qg) && void 0 !== tS ? tS : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(SS) {
          this.isMouseDown = SS
        }
        handleTick(SS) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(SS))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const SS = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += SS * this.parameters.yg * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const SS = XS.b.clamp(1 - .7 * this.parameters.Vg, 0, 1.4);
          return Math.floor(60 * SS + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.ig : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = XS.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const SS = this.parameters.Ag / 2,
            HS = SS,
            gS = 1 - SS;
          this.catchZonePosition <= HS ? (this.catchZonePosition = HS, this.catchZoneVelocity = 0) : this.catchZonePosition >= gS && (this.catchZonePosition = gS, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const SS = this.parameters.Ag / 2;
          return this.moverPosition >= this.catchZonePosition - SS && this.moverPosition <= this.catchZonePosition + SS
        }
        updateProgress(SS) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.Wg * SS : this.progress -= this.parameters.zg * SS, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.hg && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(SS) {
          this.isCompleted = !0, this.resolveRequest(SS)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              Ag: this.parameters.Ag,
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
        constructor(SS, HS, gS) {
          var tS, bS, xS, NS, qS;
          this.resolveRequest = HS, this.tearDownNotification = gS, this.startTime = void 0, this.speed = void 0, this.sg = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const uS = SS;
          this.parameters = {
            ...uS,
            speed: null !== (tS = uS.speed) && void 0 !== tS ? tS : .5,
            sg: XS.b.clamp(uS.sg, .05, 1),
            label: null !== (bS = uS.label) && void 0 !== bS ? bS : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (xS = uS.icon) && void 0 !== xS ? xS : null,
            scale: null !== (NS = uS.scale) && void 0 !== NS ? NS : 1,
            rotation: null !== (qS = uS.rotation) && void 0 !== qS ? qS : 0
          }, this.speed = this.parameters.speed, this.sg = this.parameters.sg, this.startTime = Date.now()
        }
        handleMouseInput(SS) {
          if (SS) {
            this.updateMarkerPosition();
            const SS = Math.abs(this.markerPosition - .5) <= this.sg / 2;
            this.complete(SS)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const SS = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = SS <= .5 ? 2 * SS : 2 - 2 * SS
        }
        complete(SS) {
          this.isCompleted = !0, this.resolveRequest(SS)
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
        constructor(SS, HS, gS) {
          this.resolveRequest = HS, this.tearDownNotification = gS, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = SS, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(SS) {
          if (!SS || this.isCompleted) return;
          const HS = this.getOuterCircleProgress();
          if (HS <= this.parameters.Rg && HS >= -this.parameters.Rg) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Mg) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, xS.K)(this.parameters.Tg) && this.misses > this.parameters.Tg ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.Rg && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Fg
        }
        complete(SS) {
          this.isCompleted = !0, this.resolveRequest(SS)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              Mg: this.parameters.Mg,
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

    function nS() {
      (0, IS.i)(NS.A.Qte, GS ? NS.A.Qte : 0), GS ? bS.k.cj("qteStateUpdated", GS.getState()) : bS.k.cj("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class PS {
      constructor(SS, HS) {
        this.resultPromise = SS, this.tearDownQTE = HS
      }
      static create(SS, HS, gS) {
        const tS = Promise.race([SS, HS]);
        return new PS(tS, gS)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class QS {
      static queueQTE(SS, HS, gS) {
        let tS, bS;
        const XS = new Promise((SS => {
            tS = SS
          })),
          xS = new Promise((SS => {
            bS = () => {
              SS("qteTornDown")
            }
          })),
          NS = Promise.race([XS, xS]).then((() => {})),
          qS = new fS(SS, HS, gS, bS, NS, tS);
        return jS.set(SS, qS), KS.enqueue(qS), GS || this.processNextQTE(), PS.create(XS, xS, bS)
      }
      static async processNextQTE() {
        if (GS || KS.IK()) return void(KS.IK() && GS && (GS = null, nS()));
        const SS = await KS.dequeue();
        if (!jS.has(SS.id)) return void await this.processNextQTE();
        jS.delete(SS.id);
        const HS = new aS(SS.id, SS.type, SS.parameters, SS.resolveRequest, SS.onDonePromise, SS.tearDownNotification);
        GS = HS, nS();
        try {
          await HS.waitUntilDone()
        } catch (gS) {
          console.error("Error while waiting for QTE to resolve:", gS.stack)
        }
        GS === HS && (GS.cleanup(), GS = null, nS()), await this.processNextQTE()
      }
      static cancelQTE(SS) {
        if (GS && GS.id === SS) return GS.tearDown(), GS = null, nS(), void this.processNextQTE();
        const HS = jS.get(SS);
        HS && (jS.delete(SS), HS.tearDownNotification())
      }
      static getCurrentState() {
        return GS ? GS.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        GS && (GS.tearDown(), GS = null), jS.forEach(((SS, HS) => {
          this.cancelQTE(HS)
        })), KS.emptyQueue(), jS.clear(), nS()
      }
    }
  },
  4911: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => dS,
      B: () => cS,
      D: () => nS,
      H: () => xS,
      J: () => NS,
      M: () => JS,
      e: () => ZS,
      f: () => QS,
      i: () => ES,
      j: () => vS,
      k: () => CS,
      n: () => wS,
      r: () => PS,
      t: () => DS,
      w: () => OS
    });
    var tS = gS(4917);
    const bS = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let XS = bS;

    function xS(SS) {
      XS = null !== SS && void 0 !== SS ? SS : bS
    }

    function NS() {
      return XS
    }
    const qS = new Set,
      uS = new Set;
    let IS = -1;
    const fS = new Set,
      kS = new Set;
    let aS = 0,
      KS = 0;
    const jS = new Set,
      GS = new Set;

    function CS(SS) {
      return qS.add(SS), () => {
        qS.delete(SS)
      }
    }

    function nS(SS, HS) {
      for (const tS of qS) try {
        tS(SS)
      } catch (gS) {
        HS(gS)
      }
    }

    function PS(SS) {
      return uS.add(SS), () => {
        uS.delete(SS)
      }
    }

    function QS(SS, HS) {
      const gS = IS < 0 ? 0 : SS - IS;
      IS = SS;
      for (const bS of uS) try {
        bS(gS)
      } catch (tS) {
        HS(tS)
      }
    }

    function DS(SS) {
      return fS.add(SS), () => {
        fS.delete(SS)
      }
    }

    function wS(SS) {
      return kS.add(SS), () => {
        kS.delete(SS)
      }
    }
    let hS = 0;

    function ZS(SS) {
      hS += SS
    }

    function JS() {
      const SS = hS;
      return hS = 0, SS
    }

    function OS(SS) {
      return jS.add(SS), () => {
        jS.delete(SS)
      }
    }

    function dS(SS) {
      return GS.add(SS), () => {
        GS.delete(SS)
      }
    }

    function cS() {
      aS = 0, KS = 0, IS = -1
    }

    function vS(SS, HS) {
      if ("paced" === SS) return KS += HS, null;
      if ("drawn" !== SS && "skipped" !== SS) return null;
      const gS = HS + KS;
      return KS = 0, gS
    }

    function ES(SS, HS, gS, bS) {
      const XS = (0, tS.h)(HS),
        xS = SS > 0 ? performance.now() : 0;
      for (let tS = 0; tS < SS; tS++)
        for (const SS of jS) try {
          SS()
        } catch (NS) {
          bS(NS)
        }
      if (SS > 0 && ZS(performance.now() - xS), null !== gS) {
        for (const SS of fS) try {
          SS(gS)
        } catch (NS) {
          bS(NS)
        }
        aS += gS
      }
      if ("drawn" === HS) {
        const SS = aS;
        aS = 0;
        for (const HS of kS) try {
          HS(SS)
        } catch (NS) {
          bS(NS)
        }
      }
      for (const tS of GS) try {
        tS(SS, XS)
      } catch (NS) {
        bS(NS)
      }
    }
  },
  4938: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => qS,
      e: () => XS,
      h: () => NS
    });
    var tS = gS(2510),
      bS = gS(4947);

    function XS(SS) {
      let {
        action: HS,
        flags: gS
      } = SS;
      return "mid-fire" === HS && 0 !== (gS & tS.b.AltLeftClick)
    }
    const xS = new Set;

    function NS(SS) {
      return xS.add(SS), () => {
        xS.delete(SS)
      }
    }

    function qS(SS) {
      const HS = bS.b[255 & SS];
      if (void 0 === HS) return;
      const gS = SS >>> 8 & 255,
        XS = {
          action: HS,
          down: 0 !== (gS & tS.b.Down),
          flags: gS,
          press: SS >>> 16
        };
      for (const tS of xS) tS(XS)
    }
  },
  4947: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      f: () => XS,
      g: () => xS,
      i: () => tS,
      j: () => NS
    });
    const tS = {
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
      bS = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      XS = {
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
      xS = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      NS = [16]
  },
  4954: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      e: () => xS,
      i: () => uS
    });
    var tS = gS(2510),
      bS = gS(2517);
    const XS = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function xS(SS) {
      return SS instanceof HTMLElement && (!!(SS.isContentEditable || SS instanceof HTMLTextAreaElement || SS instanceof HTMLSelectElement) || SS instanceof HTMLInputElement && !XS.has(SS.type))
    }

    function NS(SS) {
      let HS = null;
      const gS = gS => {
          const bS = xS(gS);
          bS !== HS && (HS = bS, SS(tS.g.UiCapture, tS.A.Keyboard, 0, 0, bS ? tS.A.Keyboard : 0))
        },
        bS = SS => {
          gS(SS.target)
        },
        XS = SS => {
          gS(SS.relatedTarget)
        },
        NS = () => {
          gS(document.activeElement)
        },
        qS = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", bS, qS), document.addEventListener("focusout", XS, qS), document.addEventListener("keydown", NS, qS), gS(document.activeElement), () => {
        document.removeEventListener("focusin", bS, qS), document.removeEventListener("focusout", XS, qS), document.removeEventListener("keydown", NS, qS)
      }
    }
    const qS = new Map;

    function uS(SS, HS) {
      var gS;
      let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      qS.set(tS, (null !== (gS = qS.get(tS)) && void 0 !== gS ? gS : 0) & ~SS | HS & SS);
      let XS = 0;
      for (const bS of qS.values()) XS |= bS;
      return (0, bS.D)(SS, XS & SS)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);