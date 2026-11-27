export const id = 100;
export const ids = [100];
export const modules = {
  5255: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ee,
      g: () => Xe
    });
    var ye = He(1288),
      be = He(27);
    var Me = He(347);
    var Ke = He(610);
    var Ue = He(2492),
      Fe = He(5262),
      Je = He(5282),
      oe = He(5291);
    class Re {
      constructor(ee, ie, He, ye, be, Me) {
        this.id = ee, this.type = ie, this.parameters = He, this.tearDownNotification = ye, this.onDonePromise = be, this.resolveRequest = Me
      }
    }
    const ke = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class qe {
      constructor(ee, ie, He, ye, be, Me) {
        this.id = ee, this.type = ie, this.parameters = He, this.resolveRequest = ye, this.onDonePromise = be, this.tearDownNotification = Me, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const Ke = Xe[ie];
        if (!Ke) throw console.error(`No QTE implementation registered for type: ${ie}`), new Error(`No QTE implementation registered for type: ${ie}`);
        this.implementation = new Ke(He, (ee => {
          this.isCompleted = !0, this.resolveRequest(ee)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = be.h.subscribe("QTEMouseState", (ee => {
          let {
            isDown: ie
          } = ee;
          this.isCompleted || this.implementation.handleMouseInput(ie)
        })), this.stopInputActions = (0, Je.j)((ee => {
          this.isCompleted || !ke.has(ee.action) && !(0, Je.f)(ee) || this.implementation.handleMouseInput(ee.down)
        })), this.tickSub = be.h.subscribe("noaTick", (ee => {
          if (this.isCompleted) return;
          const ie = ee / 1e3;
          this.implementation.handleTick(ie)
        })), this.stopShellTicks = (0, Fe.w)((() => {
          this.isCompleted || this.implementation.handleTick(Ue.l / 1e3)
        }))
      }
      cleanup() {
        var ee, ie;
        this.mouseSub && (be.h.unsubscribe(this.mouseSub), this.mouseSub = null), null === (ee = this.stopInputActions) || void 0 === ee || ee.call(this), this.stopInputActions = null, null === (ie = this.stopShellTicks) || void 0 === ie || ie.call(this), this.stopShellTicks = null, this.tickSub && (be.h.unsubscribe(this.tickSub), this.tickSub = null)
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
    const fe = new ye.b,
      Te = new Map;
    let pe = null;
    const Xe = {
      progressBar: class {
        constructor(ee, ie, He) {
          var ye, be, Me, Ke;
          this.resolveRequest = ie, this.tearDownNotification = He, this.progress = 0, this.ni = void 0, this.ji = void 0, this.si = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const Ue = ee;
          this.ni = null !== (ye = Ue.ni) && void 0 !== ye ? ye : .075, this.ji = null !== (be = Ue.ji) && void 0 !== be ? be : 1, this.progress = null !== (Me = Ue.Si) && void 0 !== Me ? Me : 30, this.si = null !== (Ke = Ue.si) && void 0 !== Ke && Ke, this.parameters = Ue
        }
        handleMouseInput(ee) {
          ee && !this.isCompleted && (this.clickCount++, this.progress += this.ji, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.ni, this.si && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(ee) {
          this.isCompleted = !0, this.resolveRequest(ee)
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
        constructor(ee, ie, He) {
          var ye;
          this.resolveRequest = ie, this.tearDownNotification = He, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = ee, this.timeWindowMs = null !== (ye = this.parameters.Gi) && void 0 !== ye ? ye : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(ee) {
          if (!ee || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(ee) {
          this.isCompleted = !0, this.resolveRequest(ee)
        }
        getState() {
          const ee = Date.now() - this.startTime,
            ie = Math.max(0, this.timeWindowMs - ee);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: ie,
              Gi: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(ee, ie, He) {
          var ye;
          this.resolveRequest = ie, this.tearDownNotification = He, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const be = ee;
          this.parameters = {
            ...be,
            iH: Me.c.clamp(be.iH, .05, 1)
          }, this.progress = null !== (ye = be.Si) && void 0 !== ye ? ye : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(ee) {
          this.isMouseDown = ee
        }
        handleTick(ee) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(ee))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const ee = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += ee * this.parameters.HH * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const ee = Me.c.clamp(1 - .7 * this.parameters.yH, 0, 1.4);
          return Math.floor(60 * ee + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.bH : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Me.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const ee = this.parameters.iH / 2,
            ie = ee,
            He = 1 - ee;
          this.catchZonePosition <= ie ? (this.catchZonePosition = ie, this.catchZoneVelocity = 0) : this.catchZonePosition >= He && (this.catchZonePosition = He, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const ee = this.parameters.iH / 2;
          return this.moverPosition >= this.catchZonePosition - ee && this.moverPosition <= this.catchZonePosition + ee
        }
        updateProgress(ee) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.KH * ee : this.progress -= this.parameters.UH * ee, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.si && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(ee) {
          this.isCompleted = !0, this.resolveRequest(ee)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              iH: this.parameters.iH,
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
        constructor(ee, ie, He) {
          var ye, be, Ke, Ue, Fe;
          this.resolveRequest = ie, this.tearDownNotification = He, this.startTime = void 0, this.speed = void 0, this.JH = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const Je = ee;
          this.parameters = {
            ...Je,
            speed: null !== (ye = Je.speed) && void 0 !== ye ? ye : .5,
            JH: Me.c.clamp(Je.JH, .05, 1),
            label: null !== (be = Je.label) && void 0 !== be ? be : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (Ke = Je.icon) && void 0 !== Ke ? Ke : null,
            scale: null !== (Ue = Je.scale) && void 0 !== Ue ? Ue : 1,
            rotation: null !== (Fe = Je.rotation) && void 0 !== Fe ? Fe : 0
          }, this.speed = this.parameters.speed, this.JH = this.parameters.JH, this.startTime = Date.now()
        }
        handleMouseInput(ee) {
          if (ee) {
            this.updateMarkerPosition();
            const ee = Math.abs(this.markerPosition - .5) <= this.JH / 2;
            this.complete(ee)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const ee = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = ee <= .5 ? 2 * ee : 2 - 2 * ee
        }
        complete(ee) {
          this.isCompleted = !0, this.resolveRequest(ee)
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
        constructor(ee, ie, He) {
          this.resolveRequest = ie, this.tearDownNotification = He, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = ee, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(ee) {
          if (!ee || this.isCompleted) return;
          const ie = this.getOuterCircleProgress();
          if (ie <= this.parameters.qH && ie >= -this.parameters.qH) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.RH) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, Ke.P)(this.parameters.fH) && this.misses > this.parameters.fH ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.qH && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.kH
        }
        complete(ee) {
          this.isCompleted = !0, this.resolveRequest(ee)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              RH: this.parameters.RH,
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

    function ze() {
      (0, oe.h)(Ue.p.Qte, pe ? Ue.p.Qte : 0), pe ? be.h.yR("qteStateUpdated", pe.getState()) : be.h.yR("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class Be {
      constructor(ee, ie) {
        this.resultPromise = ee, this.tearDownQTE = ie
      }
      static create(ee, ie, He) {
        const ye = Promise.race([ee, ie]);
        return new Be(ye, He)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class Ee {
      static queueQTE(ee, ie, He) {
        let ye, be;
        const Me = new Promise((ee => {
            ye = ee
          })),
          Ke = new Promise((ee => {
            be = () => {
              ee("qteTornDown")
            }
          })),
          Ue = Promise.race([Me, Ke]).then((() => {})),
          Fe = new Re(ee, ie, He, be, Ue, ye);
        return Te.set(ee, Fe), fe.enqueue(Fe), pe || this.processNextQTE(), Be.create(Me, Ke, be)
      }
      static async processNextQTE() {
        if (pe || fe.dR()) return void(fe.dR() && pe && (pe = null, ze()));
        const ee = await fe.dequeue();
        if (!Te.has(ee.id)) return void await this.processNextQTE();
        Te.delete(ee.id);
        const ie = new qe(ee.id, ee.type, ee.parameters, ee.resolveRequest, ee.onDonePromise, ee.tearDownNotification);
        pe = ie, ze();
        try {
          await ie.waitUntilDone()
        } catch (He) {
          console.error("Error while waiting for QTE to resolve:", He.stack)
        }
        pe === ie && (pe.cleanup(), pe = null, ze()), await this.processNextQTE()
      }
      static cancelQTE(ee) {
        if (pe && pe.id === ee) return pe.tearDown(), pe = null, ze(), void this.processNextQTE();
        const ie = Te.get(ee);
        ie && (Te.delete(ee), ie.tearDownNotification())
      }
      static getCurrentState() {
        return pe ? pe.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        pe && (pe.tearDown(), pe = null), Te.forEach(((ee, ie) => {
          this.cancelQTE(ie)
        })), fe.emptyQueue(), Te.clear(), ze()
      }
    }
  },
  5262: (ee, ie, He) => {
    He.d(ie, {
      A: () => we,
      E: () => De,
      H: () => ze,
      K: () => Ke,
      O: () => Ue,
      Q: () => te,
      c: () => We,
      d: () => Ee,
      e: () => Ae,
      g: () => Pe,
      k: () => Xe,
      o: () => Oe,
      q: () => Be,
      u: () => ge,
      w: () => Ze
    });
    var ye = He(5265);
    const be = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Me = be;

    function Ke(ee) {
      Me = null !== ee && void 0 !== ee ? ee : be
    }

    function Ue() {
      return Me
    }
    const Fe = new Set,
      Je = new Set;
    let oe = -1;
    const Re = new Set,
      ke = new Set;
    let qe = 0,
      fe = 0;
    const Te = new Set,
      pe = new Set;

    function Xe(ee) {
      return Fe.add(ee), () => {
        Fe.delete(ee)
      }
    }

    function ze(ee, ie) {
      for (const ye of Fe) try {
        ye(ee)
      } catch (He) {
        ie(He)
      }
    }

    function Be(ee) {
      return Je.add(ee), () => {
        Je.delete(ee)
      }
    }

    function Ee(ee, ie) {
      const He = oe < 0 ? 0 : ee - oe;
      oe = ee;
      for (const be of Je) try {
        be(He)
      } catch (ye) {
        ie(ye)
      }
    }

    function ge(ee) {
      return Re.add(ee), () => {
        Re.delete(ee)
      }
    }

    function Oe(ee) {
      return ke.add(ee), () => {
        ke.delete(ee)
      }
    }
    let de = 0;

    function We(ee) {
      de += ee
    }

    function te() {
      const ee = de;
      return de = 0, ee
    }

    function Ze(ee) {
      return Te.add(ee), () => {
        Te.delete(ee)
      }
    }

    function we(ee) {
      return pe.add(ee), () => {
        pe.delete(ee)
      }
    }

    function De() {
      qe = 0, fe = 0, oe = -1
    }

    function Pe(ee, ie) {
      if ("paced" === ee) return fe += ie, null;
      if ("drawn" !== ee && "skipped" !== ee) return null;
      const He = ie + fe;
      return fe = 0, He
    }

    function Ae(ee, ie, He, be) {
      const Me = (0, ye.h)(ie),
        Ke = ee > 0 ? performance.now() : 0;
      for (let ye = 0; ye < ee; ye++)
        for (const ee of Te) try {
          ee()
        } catch (Ue) {
          be(Ue)
        }
      if (ee > 0 && We(performance.now() - Ke), null !== He) {
        for (const ee of Re) try {
          ee(He)
        } catch (Ue) {
          be(Ue)
        }
        qe += He
      }
      if ("drawn" === ie) {
        const ee = qe;
        qe = 0;
        for (const ie of ke) try {
          ie(ee)
        } catch (Ue) {
          be(Ue)
        }
      }
      for (const ye of pe) try {
        ye(ee, Me)
      } catch (Ue) {
        be(Ue)
      }
    }
  },
  5282: (ee, ie, He) => {
    He.d(ie, {
      d: () => Fe,
      f: () => Me,
      j: () => Ue
    });
    var ye = He(2492),
      be = He(5286);

    function Me(ee) {
      let {
        action: ie,
        flags: He
      } = ee;
      return "mid-fire" === ie && 0 !== (He & ye.d.AltLeftClick)
    }
    const Ke = new Set;

    function Ue(ee) {
      return Ke.add(ee), () => {
        Ke.delete(ee)
      }
    }

    function Fe(ee) {
      const ie = be.d[255 & ee];
      if (void 0 === ie) return;
      const He = ee >>> 8 & 255,
        Me = {
          action: ie,
          down: 0 !== (He & ye.d.Down),
          flags: He,
          press: ee >>> 16
        };
      for (const ye of Ke) ye(Me)
    }
  },
  5286: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => Me,
      l: () => Ke,
      p: () => ye,
      t: () => Ue
    });
    const ye = {
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
      be = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Me = {
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
      Ke = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        "primary-fire": [194],
        "alt-fire": [195]
      },
      Ue = [16]
  },
  5291: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => Ke,
      h: () => Je
    });
    var ye = He(2492),
      be = He(2495);
    const Me = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Ke(ee) {
      return ee instanceof HTMLElement && (!!(ee.isContentEditable || ee instanceof HTMLTextAreaElement || ee instanceof HTMLSelectElement) || ee instanceof HTMLInputElement && !Me.has(ee.type))
    }

    function Ue(ee) {
      let ie = null;
      const He = He => {
          const be = Ke(He);
          be !== ie && (ie = be, ee(ye.f.UiCapture, ye.p.Keyboard, 0, 0, be ? ye.p.Keyboard : 0))
        },
        be = ee => {
          He(ee.target)
        },
        Me = ee => {
          He(ee.relatedTarget)
        },
        Ue = () => {
          He(document.activeElement)
        },
        Fe = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", be, Fe), document.addEventListener("focusout", Me, Fe), document.addEventListener("keydown", Ue, Fe), He(document.activeElement), () => {
        document.removeEventListener("focusin", be, Fe), document.removeEventListener("focusout", Me, Fe), document.removeEventListener("keydown", Ue, Fe)
      }
    }
    const Fe = new Map;

    function Je(ee, ie) {
      var He;
      let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      Fe.set(ye, (null !== (He = Fe.get(ye)) && void 0 !== He ? He : 0) & ~ee | ie & ee);
      let Me = 0;
      for (const be of Fe.values()) Me |= be;
      return (0, be.A)(ee, Me & ee)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);