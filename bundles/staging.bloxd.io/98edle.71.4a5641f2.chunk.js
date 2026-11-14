export const id = 71;
export const ids = [71];
export const modules = {
  34716: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW,
      f: () => zR
    });
    let wW = !1;

    function CW() {
      return wW
    }

    function zR(WW) {
      return wW !== WW && (wW = WW, !0)
    }
  },
  3748: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => oW,
      g: () => JW
    });
    var wW = MW(1132),
      CW = MW(33);
    var zR = MW(284);
    var AW = MW(564);
    var bR = MW(1939),
      yR = MW(3756),
      NW = MW(3777),
      eW = MW(3790);
    class BW {
      constructor(WW, RW, MW, wW, CW, zR) {
        this.id = WW, this.type = RW, this.parameters = MW, this.tearDownNotification = wW, this.onDonePromise = CW, this.resolveRequest = zR
      }
    }
    const tR = new Set(["primary-fire", "alt-fire", "TouchDig"]);
    class TW {
      constructor(WW, RW, MW, wW, CW, zR) {
        this.id = WW, this.type = RW, this.parameters = MW, this.resolveRequest = wW, this.onDonePromise = CW, this.tearDownNotification = zR, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const AW = JW[RW];
        if (!AW) throw console.error(`No QTE implementation registered for type: ${RW}`), new Error(`No QTE implementation registered for type: ${RW}`);
        this.implementation = new AW(MW, (WW => {
          this.isCompleted = !0, this.resolveRequest(WW)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = CW.k.subscribe("QTEMouseState", (WW => {
          let {
            isDown: RW
          } = WW;
          this.isCompleted || this.implementation.handleMouseInput(RW)
        })), this.stopInputActions = (0, NW.l)((WW => {
          this.isCompleted || !tR.has(WW.action) && !(0, NW.i)(WW) || this.implementation.handleMouseInput(WW.down)
        })), this.tickSub = CW.k.subscribe("noaTick", (WW => {
          if (this.isCompleted) return;
          const RW = WW / 1e3;
          this.implementation.handleTick(RW)
        })), this.stopShellTicks = (0, yR.t)((() => {
          this.isCompleted || this.implementation.handleTick(bR.t / 1e3)
        }))
      }
      cleanup() {
        var WW, RW;
        this.mouseSub && (CW.k.unsubscribe(this.mouseSub), this.mouseSub = null), null === (WW = this.stopInputActions) || void 0 === WW || WW.call(this), this.stopInputActions = null, null === (RW = this.stopShellTicks) || void 0 === RW || RW.call(this), this.stopShellTicks = null, this.tickSub && (CW.k.unsubscribe(this.tickSub), this.tickSub = null)
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
    const gR = new wW.d,
      iR = new Map;
    let YW = null;
    const JW = {
      progressBar: class {
        constructor(WW, RW, MW) {
          var wW, CW, zR, AW;
          this.resolveRequest = RW, this.tearDownNotification = MW, this.progress = 0, this.J_ = void 0, this.P_ = void 0, this.cV = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const bR = WW;
          this.J_ = null !== (wW = bR.J_) && void 0 !== wW ? wW : .075, this.P_ = null !== (CW = bR.P_) && void 0 !== CW ? CW : 1, this.progress = null !== (zR = bR.rV) && void 0 !== zR ? zR : 30, this.cV = null !== (AW = bR.cV) && void 0 !== AW && AW, this.parameters = bR
        }
        handleMouseInput(WW) {
          WW && !this.isCompleted && (this.clickCount++, this.progress += this.P_, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.J_, this.cV && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(WW) {
          this.isCompleted = !0, this.resolveRequest(WW)
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
        constructor(WW, RW, MW) {
          var wW;
          this.resolveRequest = RW, this.tearDownNotification = MW, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = WW, this.timeWindowMs = null !== (wW = this.parameters.F_) && void 0 !== wW ? wW : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(WW) {
          if (!WW || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(WW) {
          this.isCompleted = !0, this.resolveRequest(WW)
        }
        getState() {
          const WW = Date.now() - this.startTime,
            RW = Math.max(0, this.timeWindowMs - WW);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: RW,
              F_: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(WW, RW, MW) {
          var wW;
          this.resolveRequest = RW, this.tearDownNotification = MW, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const CW = WW;
          this.parameters = {
            ...CW,
            h_: zR.d.clamp(CW.h_, .05, 1)
          }, this.progress = null !== (wW = CW.rV) && void 0 !== wW ? wW : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(WW) {
          this.isMouseDown = WW
        }
        handleTick(WW) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(WW))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const WW = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += WW * this.parameters.U_ * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const WW = zR.d.clamp(1 - .7 * this.parameters.E_, 0, 1.4);
          return Math.floor(60 * WW + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.n_ : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = zR.d.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const WW = this.parameters.h_ / 2,
            RW = WW,
            MW = 1 - WW;
          this.catchZonePosition <= RW ? (this.catchZonePosition = RW, this.catchZoneVelocity = 0) : this.catchZonePosition >= MW && (this.catchZonePosition = MW, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const WW = this.parameters.h_ / 2;
          return this.moverPosition >= this.catchZonePosition - WW && this.moverPosition <= this.catchZonePosition + WW
        }
        updateProgress(WW) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.L_ * WW : this.progress -= this.parameters.S_ * WW, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.cV && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(WW) {
          this.isCompleted = !0, this.resolveRequest(WW)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              h_: this.parameters.h_,
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
        constructor(WW, RW, MW) {
          var wW, CW, AW, bR, yR;
          this.resolveRequest = RW, this.tearDownNotification = MW, this.startTime = void 0, this.speed = void 0, this.B3 = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const NW = WW;
          this.parameters = {
            ...NW,
            speed: null !== (wW = NW.speed) && void 0 !== wW ? wW : .5,
            B3: zR.d.clamp(NW.B3, .05, 1),
            label: null !== (CW = NW.label) && void 0 !== CW ? CW : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (AW = NW.icon) && void 0 !== AW ? AW : null,
            scale: null !== (bR = NW.scale) && void 0 !== bR ? bR : 1,
            rotation: null !== (yR = NW.rotation) && void 0 !== yR ? yR : 0
          }, this.speed = this.parameters.speed, this.B3 = this.parameters.B3, this.startTime = Date.now()
        }
        handleMouseInput(WW) {
          if (WW) {
            this.updateMarkerPosition();
            const WW = Math.abs(this.markerPosition - .5) <= this.B3 / 2;
            this.complete(WW)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const WW = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = WW <= .5 ? 2 * WW : 2 - 2 * WW
        }
        complete(WW) {
          this.isCompleted = !0, this.resolveRequest(WW)
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
        constructor(WW, RW, MW) {
          this.resolveRequest = RW, this.tearDownNotification = MW, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = WW, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(WW) {
          if (!WW || this.isCompleted) return;
          const RW = this.getOuterCircleProgress();
          if (RW <= this.parameters.r4 && RW >= -this.parameters.r4) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.I3) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, AW.S)(this.parameters.X3) && this.misses > this.parameters.X3 ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.r4 && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.o3
        }
        complete(WW) {
          this.isCompleted = !0, this.resolveRequest(WW)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              I3: this.parameters.I3,
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

    function PW() {
      (0, eW.j)(bR.z.Qte, YW ? bR.z.Qte : 0), YW ? CW.k.Sz("qteStateUpdated", YW.getState()) : CW.k.Sz("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class IW {
      constructor(WW, RW) {
        this.resultPromise = WW, this.tearDownQTE = RW
      }
      static create(WW, RW, MW) {
        const wW = Promise.race([WW, RW]);
        return new IW(wW, MW)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class oW {
      static queueQTE(WW, RW, MW) {
        let wW, CW;
        const zR = new Promise((WW => {
            wW = WW
          })),
          AW = new Promise((WW => {
            CW = () => {
              WW("qteTornDown")
            }
          })),
          bR = Promise.race([zR, AW]).then((() => {})),
          yR = new BW(WW, RW, MW, CW, bR, wW);
        return iR.set(WW, yR), gR.enqueue(yR), YW || this.processNextQTE(), IW.create(zR, AW, CW)
      }
      static async processNextQTE() {
        if (YW || gR.gC()) return void(gR.gC() && YW && (YW = null, PW()));
        const WW = await gR.dequeue();
        if (!iR.has(WW.id)) return void await this.processNextQTE();
        iR.delete(WW.id);
        const RW = new TW(WW.id, WW.type, WW.parameters, WW.resolveRequest, WW.onDonePromise, WW.tearDownNotification);
        YW = RW, PW();
        try {
          await RW.waitUntilDone()
        } catch (MW) {
          console.error("Error while waiting for QTE to resolve:", MW.stack)
        }
        YW === RW && (YW.cleanup(), YW = null, PW()), await this.processNextQTE()
      }
      static cancelQTE(WW) {
        if (YW && YW.id === WW) return YW.tearDown(), YW = null, PW(), void this.processNextQTE();
        const RW = iR.get(WW);
        RW && (iR.delete(WW), RW.tearDownNotification())
      }
      static getCurrentState() {
        return YW ? YW.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        YW && (YW.tearDown(), YW = null), iR.forEach(((WW, RW) => {
          this.cancelQTE(RW)
        })), gR.emptyQueue(), iR.clear(), PW()
      }
    }
  },
  34706: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR,
      h: () => eW,
      k: () => TW,
      o: () => BW
    });
    var wW = MW(284),
      CW = MW(260),
      zR = MW(938),
      AW = MW(50);
    const bR = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      yR = "playSessionGameNameWithVariation",
      NW = "wasMatchmakePlayer";

    function eW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.j;
      (0, zR.l)(WW, bR)
    }

    function BW() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.j).setItem(NW, !0)
    }

    function tR() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.j;
      return (0, zR.e)(WW, bR)
    }

    function TW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AW.j;
      const MW = (0, zR.e)(RW, bR),
        eW = function(WW) {
          const RW = WW.getItem(yR);
          return "string" !== typeof RW ? null : RW
        }(RW),
        BW = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.j).getItem(NW)
        }(RW);
      let tR;
      return tR = null !== MW && null !== eW && (0, zR.i)(RW, bR) && function(WW, RW, MW) {
          const CW = (0, wW.Pb)(WW),
            zR = (0, wW.Pb)(RW),
            AW = (0, wW.Jb)(WW),
            bR = (0, wW.Jb)(RW);
          return !(CW !== zR || !MW) || CW === zR && AW === bR
        }(eW, WW, BW) ? MW : (0, CW.b)(), (0, zR.m)(RW, bR, tR), RW.setItem(yR, WW),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.j).removeItem(NW)
        }(RW), tR
    }
  },
  8262: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      e: () => zR
    });
    var wW = MW(8220);
    const CW = "Air",
      zR = Object.freeze(new wW.e(CW, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  35047: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      e: () => zR,
      h: () => tR,
      k: () => bR,
      l: () => yR,
      m: () => NW,
      o: () => BW,
      q: () => eW,
      u: () => AW
    });
    var wW = MW(1066);
    let CW = function(WW) {
        return WW[WW.Join = 0] = "Join", WW[WW.Leave = 1] = "Leave", WW[WW.Push = 2] = "Push", WW[WW.Cursor = 3] = "Cursor", WW[WW.Submit = 4] = "Submit", WW[WW.ReloadAsVariation = 5] = "ReloadAsVariation", WW[WW.CreateFile = 6] = "CreateFile", WW[WW.RenameFile = 7] = "RenameFile", WW[WW.DeleteFile = 8] = "DeleteFile", WW[WW.SetEngine = 9] = "SetEngine", WW[WW.RenameFolder = 10] = "RenameFolder", WW
      }({}),
      zR = function(WW) {
        return WW[WW.Joined = 0] = "Joined", WW[WW.Updates = 1] = "Updates", WW[WW.Presence = 2] = "Presence", WW[WW.RemoteCursor = 3] = "RemoteCursor", WW[WW.ForceClose = 4] = "ForceClose", WW[WW.LobbyFilesChanged = 5] = "LobbyFilesChanged", WW[WW.EngineSettings = 6] = "EngineSettings", WW
      }({});

    function AW(WW) {
      return "lobby" === WW.kind ? `lobby:${WW.path}` : `codeBlock:${WW.pos[0]},${WW.pos[1]},${WW.pos[2]}`
    }

    function bR(WW) {
      if ("lobby" === WW) return {
        kind: "lobby",
        path: wW.k
      };
      if (WW.startsWith("lobby:")) {
        const RW = WW.slice(6);
        return BW(RW) ? {
          kind: "lobby",
          path: RW
        } : null
      }
      const RW = WW.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return RW ? {
        kind: "codeBlock",
        pos: [parseInt(RW[1]), parseInt(RW[2]), parseInt(RW[3])]
      } : null
    }

    function yR(WW) {
      return WW.endsWith(".d.ts")
    }

    function NW(WW) {
      return WW.endsWith(".ts") && !yR(WW)
    }
    const eW = 64;

    function BW(WW) {
      if (!WW || WW !== WW.trim()) return !1;
      if (WW.length > eW) return !1;
      if (WW.startsWith("/") || WW.includes("\\") || WW.includes("\0")) return !1;
      if (!yR(WW) && !NW(WW) && ! function(WW) {
          return WW.endsWith(".js") && !WW.endsWith(".min.js") && !WW.endsWith(".bundle.js")
        }(WW)) return !1;
      const RW = WW.split("/");
      for (const MW of RW)
        if ("" === MW || "." === MW || ".." === MW) return !1;
      return !0
    }
    const tR = 14e3
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);