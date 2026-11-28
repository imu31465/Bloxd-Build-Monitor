export const id = 102;
export const ids = [102];
export const modules = {
  5550: (dd, Od, md) => {
    md.d(Od, {
      e: () => Yd,
      h: () => bd
    });
    var Wd = md(1401),
      Fd = md(32);
    var Rd = md(405);
    var Xd = md(701);
    var Kd = md(3372),
      hd = md(5558),
      vd = md(5580),
      Qd = md(5590);
    class td {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        this.id = dd, this.type = Od, this.parameters = md, this.tearDownNotification = Wd, this.onDonePromise = Fd, this.resolveRequest = Rd
      }
    }
    const od = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class Nd {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        this.id = dd, this.type = Od, this.parameters = md, this.resolveRequest = Wd, this.onDonePromise = Fd, this.tearDownNotification = Rd, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const Xd = bd[Od];
        if (!Xd) throw console.error(`No QTE implementation registered for type: ${Od}`), new Error(`No QTE implementation registered for type: ${Od}`);
        this.implementation = new Xd(md, (dd => {
          this.isCompleted = !0, this.resolveRequest(dd)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Fd.j.subscribe("QTEMouseState", (dd => {
          let {
            isDown: Od
          } = dd;
          this.isCompleted || this.implementation.handleMouseInput(Od)
        })), this.stopInputActions = (0, vd.h)((dd => {
          this.isCompleted || !od.has(dd.action) && !(0, vd.e)(dd) || this.implementation.handleMouseInput(dd.down)
        })), this.tickSub = Fd.j.subscribe("noaTick", (dd => {
          if (this.isCompleted) return;
          const Od = dd / 1e3;
          this.implementation.handleTick(Od)
        })), this.stopShellTicks = (0, hd.A)((() => {
          this.isCompleted || this.implementation.handleTick(Kd.t / 1e3)
        }))
      }
      cleanup() {
        var dd, Od;
        this.mouseSub && (Fd.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (dd = this.stopInputActions) || void 0 === dd || dd.call(this), this.stopInputActions = null, null === (Od = this.stopShellTicks) || void 0 === Od || Od.call(this), this.stopShellTicks = null, this.tickSub && (Fd.j.unsubscribe(this.tickSub), this.tickSub = null)
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
    const qd = new Wd.d,
      Hd = new Map;
    let yd = null;
    const bd = {
      progressBar: class {
        constructor(dd, Od, md) {
          var Wd, Fd, Rd, Xd;
          this.resolveRequest = Od, this.tearDownNotification = md, this.progress = 0, this.wR = void 0, this.aR = void 0, this.ER = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const Kd = dd;
          this.wR = null !== (Wd = Kd.wR) && void 0 !== Wd ? Wd : .075, this.aR = null !== (Fd = Kd.aR) && void 0 !== Fd ? Fd : 1, this.progress = null !== (Rd = Kd.gR) && void 0 !== Rd ? Rd : 30, this.ER = null !== (Xd = Kd.ER) && void 0 !== Xd && Xd, this.parameters = Kd
        }
        handleMouseInput(dd) {
          dd && !this.isCompleted && (this.clickCount++, this.progress += this.aR, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.wR, this.ER && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(dd) {
          this.isCompleted = !0, this.resolveRequest(dd)
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
        constructor(dd, Od, md) {
          var Wd;
          this.resolveRequest = Od, this.tearDownNotification = md, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = dd, this.timeWindowMs = null !== (Wd = this.parameters.xR) && void 0 !== Wd ? Wd : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(dd) {
          if (!dd || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(dd) {
          this.isCompleted = !0, this.resolveRequest(dd)
        }
        getState() {
          const dd = Date.now() - this.startTime,
            Od = Math.max(0, this.timeWindowMs - dd);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: Od,
              xR: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(dd, Od, md) {
          var Wd;
          this.resolveRequest = Od, this.tearDownNotification = md, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Fd = dd;
          this.parameters = {
            ...Fd,
            VR: Rd.b.clamp(Fd.VR, .05, 1)
          }, this.progress = null !== (Wd = Fd.gR) && void 0 !== Wd ? Wd : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(dd) {
          this.isMouseDown = dd
        }
        handleTick(dd) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(dd))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const dd = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += dd * this.parameters.iR * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const dd = Rd.b.clamp(1 - .7 * this.parameters.AR, 0, 1.4);
          return Math.floor(60 * dd + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.rR : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Rd.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const dd = this.parameters.VR / 2,
            Od = dd,
            md = 1 - dd;
          this.catchZonePosition <= Od ? (this.catchZonePosition = Od, this.catchZoneVelocity = 0) : this.catchZonePosition >= md && (this.catchZonePosition = md, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const dd = this.parameters.VR / 2;
          return this.moverPosition >= this.catchZonePosition - dd && this.moverPosition <= this.catchZonePosition + dd
        }
        updateProgress(dd) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.GR * dd : this.progress -= this.parameters.nR * dd, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.ER && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(dd) {
          this.isCompleted = !0, this.resolveRequest(dd)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              VR: this.parameters.VR,
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
        constructor(dd, Od, md) {
          var Wd, Fd, Xd, Kd, hd;
          this.resolveRequest = Od, this.tearDownNotification = md, this.startTime = void 0, this.speed = void 0, this.PR = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const vd = dd;
          this.parameters = {
            ...vd,
            speed: null !== (Wd = vd.speed) && void 0 !== Wd ? Wd : .5,
            PR: Rd.b.clamp(vd.PR, .05, 1),
            label: null !== (Fd = vd.label) && void 0 !== Fd ? Fd : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (Xd = vd.icon) && void 0 !== Xd ? Xd : null,
            scale: null !== (Kd = vd.scale) && void 0 !== Kd ? Kd : 1,
            rotation: null !== (hd = vd.rotation) && void 0 !== hd ? hd : 0
          }, this.speed = this.parameters.speed, this.PR = this.parameters.PR, this.startTime = Date.now()
        }
        handleMouseInput(dd) {
          if (dd) {
            this.updateMarkerPosition();
            const dd = Math.abs(this.markerPosition - .5) <= this.PR / 2;
            this.complete(dd)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const dd = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = dd <= .5 ? 2 * dd : 2 - 2 * dd
        }
        complete(dd) {
          this.isCompleted = !0, this.resolveRequest(dd)
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
        constructor(dd, Od, md) {
          this.resolveRequest = Od, this.tearDownNotification = md, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = dd, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(dd) {
          if (!dd || this.isCompleted) return;
          const Od = this.getOuterCircleProgress();
          if (Od <= this.parameters.DR && Od >= -this.parameters.DR) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.cR) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, Xd.O)(this.parameters.eR) && this.misses > this.parameters.eR ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.DR && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.jR
        }
        complete(dd) {
          this.isCompleted = !0, this.resolveRequest(dd)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              cR: this.parameters.cR,
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

    function Td() {
      (0, Qd.i)(Kd.w.Qte, yd ? Kd.w.Qte : 0), yd ? Fd.j.lQ("qteStateUpdated", yd.getState()) : Fd.j.lQ("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class pd {
      constructor(dd, Od) {
        this.resultPromise = dd, this.tearDownQTE = Od
      }
      static create(dd, Od, md) {
        const Wd = Promise.race([dd, Od]);
        return new pd(Wd, md)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class Yd {
      static queueQTE(dd, Od, md) {
        let Wd, Fd;
        const Rd = new Promise((dd => {
            Wd = dd
          })),
          Xd = new Promise((dd => {
            Fd = () => {
              dd("qteTornDown")
            }
          })),
          Kd = Promise.race([Rd, Xd]).then((() => {})),
          hd = new td(dd, Od, md, Fd, Kd, Wd);
        return Hd.set(dd, hd), qd.enqueue(hd), yd || this.processNextQTE(), pd.create(Rd, Xd, Fd)
      }
      static async processNextQTE() {
        if (yd || qd.Nt()) return void(qd.Nt() && yd && (yd = null, Td()));
        const dd = await qd.dequeue();
        if (!Hd.has(dd.id)) return void await this.processNextQTE();
        Hd.delete(dd.id);
        const Od = new Nd(dd.id, dd.type, dd.parameters, dd.resolveRequest, dd.onDonePromise, dd.tearDownNotification);
        yd = Od, Td();
        try {
          await Od.waitUntilDone()
        } catch (md) {
          console.error("Error while waiting for QTE to resolve:", md.stack)
        }
        yd === Od && (yd.cleanup(), yd = null, Td()), await this.processNextQTE()
      }
      static cancelQTE(dd) {
        if (yd && yd.id === dd) return yd.tearDown(), yd = null, Td(), void this.processNextQTE();
        const Od = Hd.get(dd);
        Od && (Hd.delete(dd), Od.tearDownNotification())
      }
      static getCurrentState() {
        return yd ? yd.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        yd && (yd.tearDown(), yd = null), Hd.forEach(((dd, Od) => {
          this.cancelQTE(Od)
        })), qd.emptyQueue(), Hd.clear(), Td()
      }
    }
  },
  5558: (dd, Od, md) => {
    md.d(Od, {
      A: () => xd,
      B: () => Bd,
      F: () => Sd,
      I: () => Td,
      M: () => Xd,
      O: () => Kd,
      S: () => Ud,
      e: () => Jd,
      h: () => Yd,
      i: () => ud,
      l: () => sd,
      n: () => bd,
      r: () => wd,
      u: () => pd,
      x: () => gd
    });
    var Wd = md(5565);
    const Fd = {
      lockPointer: () => !1,
      unlockPointer: () => {},
      leaveGame: () => {}
    };
    let Rd = Fd;

    function Xd(dd) {
      Rd = null !== dd && void 0 !== dd ? dd : Fd
    }

    function Kd() {
      return Rd
    }
    const hd = new Set,
      vd = new Set;
    let Qd = -1;
    const td = new Set,
      od = new Set;
    let Nd = 0,
      qd = 0;
    const Hd = new Set,
      yd = new Set;

    function bd(dd) {
      return hd.add(dd), () => {
        hd.delete(dd)
      }
    }

    function Td(dd, Od) {
      for (const Wd of hd) try {
        Wd(dd)
      } catch (md) {
        Od(md)
      }
    }

    function pd(dd) {
      return vd.add(dd), () => {
        vd.delete(dd)
      }
    }

    function Yd(dd, Od) {
      const md = Qd < 0 ? 0 : dd - Qd;
      Qd = dd;
      for (const Fd of vd) try {
        Fd(md)
      } catch (Wd) {
        Od(Wd)
      }
    }

    function gd(dd) {
      return td.add(dd), () => {
        td.delete(dd)
      }
    }

    function wd(dd) {
      return od.add(dd), () => {
        od.delete(dd)
      }
    }
    let Ed = 0;

    function Jd(dd) {
      Ed += dd
    }

    function Ud() {
      const dd = Ed;
      return Ed = 0, dd
    }

    function xd(dd) {
      return Hd.add(dd), () => {
        Hd.delete(dd)
      }
    }

    function Bd(dd) {
      return yd.add(dd), () => {
        yd.delete(dd)
      }
    }

    function Sd() {
      Nd = 0, qd = 0, Qd = -1
    }

    function sd(dd, Od) {
      if ("paced" === dd) return qd += Od, null;
      if ("drawn" !== dd && "skipped" !== dd) return null;
      const md = Od + qd;
      return qd = 0, md
    }

    function ud(dd, Od, md, Fd) {
      const Rd = (0, Wd.i)(Od),
        Xd = dd > 0 ? performance.now() : 0;
      for (let Wd = 0; Wd < dd; Wd++)
        for (const dd of Hd) try {
          dd()
        } catch (Kd) {
          Fd(Kd)
        }
      if (dd > 0 && Jd(performance.now() - Xd), null !== md) {
        for (const dd of td) try {
          dd(md)
        } catch (Kd) {
          Fd(Kd)
        }
        Nd += md
      }
      if ("drawn" === Od) {
        const dd = Nd;
        Nd = 0;
        for (const Od of od) try {
          Od(dd)
        } catch (Kd) {
          Fd(Kd)
        }
      }
      for (const Wd of yd) try {
        Wd(dd, Rd)
      } catch (Kd) {
        Fd(Kd)
      }
    }
  },
  5580: (dd, Od, md) => {
    md.d(Od, {
      c: () => hd,
      e: () => Rd,
      h: () => Kd
    });
    var Wd = md(3372),
      Fd = md(5588);

    function Rd(dd) {
      let {
        action: Od,
        flags: md
      } = dd;
      return "mid-fire" === Od && 0 !== (md & Wd.c.AltLeftClick)
    }
    const Xd = new Set;

    function Kd(dd) {
      return Xd.add(dd), () => {
        Xd.delete(dd)
      }
    }

    function hd(dd) {
      const Od = Fd.e[255 & dd];
      if (void 0 === Od) return;
      const md = dd >>> 8 & 255,
        Rd = {
          action: Od,
          down: 0 !== (md & Wd.c.Down),
          flags: md,
          press: dd >>> 16
        };
      for (const Wd of Xd) Wd(Rd)
    }
  },
  5588: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      f: () => Rd,
      i: () => Xd,
      m: () => Wd,
      n: () => Kd
    });
    const Wd = {
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
      Fd = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustomization", "OpenSettings", "OpenInviteLink", "OpenTasksAndLeaderboard", "OpenCodeEditor", "OpenEmoteWheel", "HideUi", "ShowDebugOverlay", "HotBarSlot1", "HotBarSlot2", "HotBarSlot3", "HotBarSlot4", "HotBarSlot5", "HotBarSlot6", "HotBarSlot7", "HotBarSlot8", "HotBarSlot9", "HotBarSlot10", "toggleFreeCam", "freeCamForward", "freeCamBackward", "freeCamLeft", "freeCamRight", "freeCamUp", "freeCamDown", "recordGame", "recordClip", "replayViewerOpen", "replayPlayPause", "replaySkipBack", "replaySkipForward", "replayChangeCameraMode", "replayLoad", "replaySave", "replaySaveAs", "replayExit", "replaySpeedUp", "replaySpeedDown", "replayTimelineZoomIn", "replayTimelineZoomOut", "replayRecordKeyframe", "replayExportVideo", "AltHeld", "CtrlCrouch", "KeyYPressed", "KeyXPressed", "ToggleFullCoordinateOverlay", "TouchAction1", "TouchAction2", "TouchAction3", "TouchDig", "TouchHold", "TouchTap", "TouchInteract", "TouchBoost", "Custom0", "Custom1", "Custom2", "Custom3", "Custom4", "Custom5", "Custom6", "Custom7", "Custom8", "Custom9", "Custom10", "Custom11", "Custom12", "Custom13", "Custom14", "Custom15"],
      Rd = {
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
      Xd = {
        jump: [188],
        crouch: [189],
        SwapCameraZoom: [190],
        Zoom: [191],
        "primary-fire": [195],
        "alt-fire": [196]
      },
      Kd = [16]
  },
  5590: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      e: () => Xd,
      i: () => vd
    });
    var Wd = md(3372),
      Fd = md(3378);
    const Rd = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);

    function Xd(dd) {
      return dd instanceof HTMLElement && (!!(dd.isContentEditable || dd instanceof HTMLTextAreaElement || dd instanceof HTMLSelectElement) || dd instanceof HTMLInputElement && !Rd.has(dd.type))
    }

    function Kd(dd) {
      let Od = null;
      const md = md => {
          const Fd = Xd(md);
          Fd !== Od && (Od = Fd, dd(Wd.h.UiCapture, Wd.w.Keyboard, 0, 0, Fd ? Wd.w.Keyboard : 0))
        },
        Fd = dd => {
          md(dd.target)
        },
        Rd = dd => {
          md(dd.relatedTarget)
        },
        Kd = () => {
          md(document.activeElement)
        },
        hd = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("focusin", Fd, hd), document.addEventListener("focusout", Rd, hd), document.addEventListener("keydown", Kd, hd), md(document.activeElement), () => {
        document.removeEventListener("focusin", Fd, hd), document.removeEventListener("focusout", Rd, hd), document.removeEventListener("keydown", Kd, hd)
      }
    }
    const hd = new Map;

    function vd(dd, Od) {
      var md;
      let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
      hd.set(Wd, (null !== (md = hd.get(Wd)) && void 0 !== md ? md : 0) & ~dd | Od & dd);
      let Rd = 0;
      for (const Fd of hd.values()) Rd |= Fd;
      return (0, Fd.s)(dd, Rd & dd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);