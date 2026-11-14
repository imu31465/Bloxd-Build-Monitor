export const id = 71;
export const ids = [71];
export const modules = {
  35009: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      g: () => uF
    });
    let CF = !1;

    function AF() {
      return CF
    }

    function uF(FF) {
      return CF !== FF && (CF = FF, !0)
    }
  },
  3764: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => kW,
      f: () => tW
    });
    var CF = SF(1160),
      AF = SF(20);
    var uF = SF(271);
    var hF = SF(568);
    var bW = SF(1939),
      dF = SF(3773),
      PF = SF(3802),
      RF = SF(3812);
    class iW {
      constructor(FF, WF, SF, CF, AF, uF) {
        this.id = FF, this.type = WF, this.parameters = SF, this.tearDownNotification = CF, this.onDonePromise = AF, this.resolveRequest = uF
      }
    }
    const eF = new Set(["primary-fire", "alt-fire", "TouchDig"]);
    class EF {
      constructor(FF, WF, SF, CF, AF, uF) {
        this.id = FF, this.type = WF, this.parameters = SF, this.resolveRequest = CF, this.onDonePromise = AF, this.tearDownNotification = uF, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const hF = tW[WF];
        if (!hF) throw console.error(`No QTE implementation registered for type: ${WF}`), new Error(`No QTE implementation registered for type: ${WF}`);
        this.implementation = new hF(SF, (FF => {
          this.isCompleted = !0, this.resolveRequest(FF)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = AF.j.subscribe("QTEMouseState", (FF => {
          let {
            isDown: WF
          } = FF;
          this.isCompleted || this.implementation.handleMouseInput(WF)
        })), this.stopInputActions = (0, PF.h)((FF => {
          this.isCompleted || !eF.has(FF.action) && !(0, PF.g)(FF) || this.implementation.handleMouseInput(FF.down)
        })), this.tickSub = AF.j.subscribe("noaTick", (FF => {
          if (this.isCompleted) return;
          const WF = FF / 1e3;
          this.implementation.handleTick(WF)
        })), this.stopShellTicks = (0, dF.w)((() => {
          this.isCompleted || this.implementation.handleTick(bW.s / 1e3)
        }))
      }
      cleanup() {
        var FF, WF;
        this.mouseSub && (AF.j.unsubscribe(this.mouseSub), this.mouseSub = null), null === (FF = this.stopInputActions) || void 0 === FF || FF.call(this), this.stopInputActions = null, null === (WF = this.stopShellTicks) || void 0 === WF || WF.call(this), this.stopShellTicks = null, this.tickSub && (AF.j.unsubscribe(this.tickSub), this.tickSub = null)
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
    const QF = new CF.b,
      rW = new Map;
    let gW = null;
    const tW = {
      progressBar: class {
        constructor(FF, WF, SF) {
          var CF, AF, uF, hF;
          this.resolveRequest = WF, this.tearDownNotification = SF, this.progress = 0, this.gJ = void 0, this.Tv = void 0, this.AY = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const bW = FF;
          this.gJ = null !== (CF = bW.gJ) && void 0 !== CF ? CF : .075, this.Tv = null !== (AF = bW.Tv) && void 0 !== AF ? AF : 1, this.progress = null !== (uF = bW.FY) && void 0 !== uF ? uF : 30, this.AY = null !== (hF = bW.AY) && void 0 !== hF && hF, this.parameters = bW
        }
        handleMouseInput(FF) {
          FF && !this.isCompleted && (this.clickCount++, this.progress += this.Tv, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.gJ, this.AY && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(FF) {
          this.isCompleted = !0, this.resolveRequest(FF)
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
        constructor(FF, WF, SF) {
          var CF;
          this.resolveRequest = WF, this.tearDownNotification = SF, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = FF, this.timeWindowMs = null !== (CF = this.parameters.Dv) && void 0 !== CF ? CF : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(FF) {
          if (!FF || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(FF) {
          this.isCompleted = !0, this.resolveRequest(FF)
        }
        getState() {
          const FF = Date.now() - this.startTime,
            WF = Math.max(0, this.timeWindowMs - FF);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: WF,
              Dv: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(FF, WF, SF) {
          var CF;
          this.resolveRequest = WF, this.tearDownNotification = SF, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const AF = FF;
          this.parameters = {
            ...AF,
            vJ: uF.c.clamp(AF.vJ, .05, 1)
          }, this.progress = null !== (CF = AF.FY) && void 0 !== CF ? CF : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(FF) {
          this.isMouseDown = FF
        }
        handleTick(FF) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(FF))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const FF = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += FF * this.parameters.WJ * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const FF = uF.c.clamp(1 - .7 * this.parameters.dJ, 0, 1.4);
          return Math.floor(60 * FF + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.PJ : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = uF.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const FF = this.parameters.vJ / 2,
            WF = FF,
            SF = 1 - FF;
          this.catchZonePosition <= WF ? (this.catchZonePosition = WF, this.catchZoneVelocity = 0) : this.catchZonePosition >= SF && (this.catchZonePosition = SF, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const FF = this.parameters.vJ / 2;
          return this.moverPosition >= this.catchZonePosition - FF && this.moverPosition <= this.catchZonePosition + FF
        }
        updateProgress(FF) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.RJ * FF : this.progress -= this.parameters.QJ * FF, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.AY && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(FF) {
          this.isCompleted = !0, this.resolveRequest(FF)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              vJ: this.parameters.vJ,
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
        constructor(FF, WF, SF) {
          var CF, AF, hF, bW, dF;
          this.resolveRequest = WF, this.tearDownNotification = SF, this.startTime = void 0, this.speed = void 0, this.VJ = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const PF = FF;
          this.parameters = {
            ...PF,
            speed: null !== (CF = PF.speed) && void 0 !== CF ? CF : .5,
            VJ: uF.c.clamp(PF.VJ, .05, 1),
            label: null !== (AF = PF.label) && void 0 !== AF ? AF : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (hF = PF.icon) && void 0 !== hF ? hF : null,
            scale: null !== (bW = PF.scale) && void 0 !== bW ? bW : 1,
            rotation: null !== (dF = PF.rotation) && void 0 !== dF ? dF : 0
          }, this.speed = this.parameters.speed, this.VJ = this.parameters.VJ, this.startTime = Date.now()
        }
        handleMouseInput(FF) {
          if (FF) {
            this.updateMarkerPosition();
            const FF = Math.abs(this.markerPosition - .5) <= this.VJ / 2;
            this.complete(FF)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const FF = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = FF <= .5 ? 2 * FF : 2 - 2 * FF
        }
        complete(FF) {
          this.isCompleted = !0, this.resolveRequest(FF)
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
        constructor(FF, WF, SF) {
          this.resolveRequest = WF, this.tearDownNotification = SF, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = FF, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(FF) {
          if (!FF || this.isCompleted) return;
          const WF = this.getOuterCircleProgress();
          if (WF <= this.parameters.OJ && WF >= -this.parameters.OJ) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.LJ) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, hF.Q)(this.parameters.ZJ) && this.misses > this.parameters.ZJ ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.OJ && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.mp
        }
        complete(FF) {
          this.isCompleted = !0, this.resolveRequest(FF)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              LJ: this.parameters.LJ,
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

    function TF() {
      (0, RF.h)(bW.z.Qte, gW ? bW.z.Qte : 0), gW ? AF.j.Uu("qteStateUpdated", gW.getState()) : AF.j.Uu("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class aW {
      constructor(FF, WF) {
        this.resultPromise = FF, this.tearDownQTE = WF
      }
      static create(FF, WF, SF) {
        const CF = Promise.race([FF, WF]);
        return new aW(CF, SF)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class kW {
      static queueQTE(FF, WF, SF) {
        let CF, AF;
        const uF = new Promise((FF => {
            CF = FF
          })),
          hF = new Promise((FF => {
            AF = () => {
              FF("qteTornDown")
            }
          })),
          bW = Promise.race([uF, hF]).then((() => {})),
          dF = new iW(FF, WF, SF, AF, bW, CF);
        return rW.set(FF, dF), QF.enqueue(dF), gW || this.processNextQTE(), aW.create(uF, hF, AF)
      }
      static async processNextQTE() {
        if (gW || QF.QC()) return void(QF.QC() && gW && (gW = null, TF()));
        const FF = await QF.dequeue();
        if (!rW.has(FF.id)) return void await this.processNextQTE();
        rW.delete(FF.id);
        const WF = new EF(FF.id, FF.type, FF.parameters, FF.resolveRequest, FF.onDonePromise, FF.tearDownNotification);
        gW = WF, TF();
        try {
          await WF.waitUntilDone()
        } catch (SF) {
          console.error("Error while waiting for QTE to resolve:", SF.stack)
        }
        gW === WF && (gW.cleanup(), gW = null, TF()), await this.processNextQTE()
      }
      static cancelQTE(FF) {
        if (gW && gW.id === FF) return gW.tearDown(), gW = null, TF(), void this.processNextQTE();
        const WF = rW.get(FF);
        WF && (rW.delete(FF), WF.tearDownNotification())
      }
      static getCurrentState() {
        return gW ? gW.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        gW && (gW.tearDown(), gW = null), rW.forEach(((FF, WF) => {
          this.cancelQTE(WF)
        })), QF.emptyQueue(), rW.clear(), TF()
      }
    }
  },
  34993: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eF,
      e: () => RF,
      f: () => EF,
      i: () => iW
    });
    var CF = SF(271),
      AF = SF(244),
      uF = SF(964),
      hF = SF(33);
    const bW = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      dF = "playSessionGameNameWithVariation",
      PF = "wasMatchmakePlayer";

    function RF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.k;
      (0, uF.h)(FF, bW)
    }

    function iW() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.k).setItem(PF, !0)
    }

    function eF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.k;
      return (0, uF.c)(FF, bW)
    }

    function EF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hF.k;
      const SF = (0, uF.c)(WF, bW),
        RF = function(FF) {
          const WF = FF.getItem(dF);
          return "string" !== typeof WF ? null : WF
        }(WF),
        iW = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.k).getItem(PF)
        }(WF);
      let eF;
      return eF = null !== SF && null !== RF && (0, uF.d)(WF, bW) && function(FF, WF, SF) {
          const AF = (0, CF.Yb)(FF),
            uF = (0, CF.Yb)(WF),
            hF = (0, CF.Ub)(FF),
            bW = (0, CF.Ub)(WF);
          return !(AF !== uF || !SF) || AF === uF && hF === bW
        }(RF, FF, iW) ? SF : (0, AF.c)(), (0, uF.i)(WF, bW, eF), WF.setItem(dF, FF),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.k).removeItem(PF)
        }(WF), eF
    }
  },
  8331: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      i: () => uF
    });
    var CF = SF(8286);
    const AF = "Air",
      uF = Object.freeze(new CF.d(AF, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  35350: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF,
      f: () => uF,
      h: () => eF,
      i: () => bW,
      j: () => dF,
      m: () => PF,
      n: () => iW,
      q: () => RF,
      s: () => hF
    });
    var CF = SF(1101);
    let AF = function(FF) {
        return FF[FF.Join = 0] = "Join", FF[FF.Leave = 1] = "Leave", FF[FF.Push = 2] = "Push", FF[FF.Cursor = 3] = "Cursor", FF[FF.Submit = 4] = "Submit", FF[FF.ReloadAsVariation = 5] = "ReloadAsVariation", FF[FF.CreateFile = 6] = "CreateFile", FF[FF.RenameFile = 7] = "RenameFile", FF[FF.DeleteFile = 8] = "DeleteFile", FF[FF.SetEngine = 9] = "SetEngine", FF[FF.RenameFolder = 10] = "RenameFolder", FF
      }({}),
      uF = function(FF) {
        return FF[FF.Joined = 0] = "Joined", FF[FF.Updates = 1] = "Updates", FF[FF.Presence = 2] = "Presence", FF[FF.RemoteCursor = 3] = "RemoteCursor", FF[FF.ForceClose = 4] = "ForceClose", FF[FF.LobbyFilesChanged = 5] = "LobbyFilesChanged", FF[FF.EngineSettings = 6] = "EngineSettings", FF
      }({});

    function hF(FF) {
      return "lobby" === FF.kind ? `lobby:${FF.path}` : `codeBlock:${FF.pos[0]},${FF.pos[1]},${FF.pos[2]}`
    }

    function bW(FF) {
      if ("lobby" === FF) return {
        kind: "lobby",
        path: CF.h
      };
      if (FF.startsWith("lobby:")) {
        const WF = FF.slice(6);
        return iW(WF) ? {
          kind: "lobby",
          path: WF
        } : null
      }
      const WF = FF.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return WF ? {
        kind: "codeBlock",
        pos: [parseInt(WF[1]), parseInt(WF[2]), parseInt(WF[3])]
      } : null
    }

    function dF(FF) {
      return FF.endsWith(".d.ts")
    }

    function PF(FF) {
      return FF.endsWith(".ts") && !dF(FF)
    }
    const RF = 64;

    function iW(FF) {
      if (!FF || FF !== FF.trim()) return !1;
      if (FF.length > RF) return !1;
      if (FF.startsWith("/") || FF.includes("\\") || FF.includes("\0")) return !1;
      if (!dF(FF) && !PF(FF) && ! function(FF) {
          return FF.endsWith(".js") && !FF.endsWith(".min.js") && !FF.endsWith(".bundle.js")
        }(FF)) return !1;
      const WF = FF.split("/");
      for (const SF of WF)
        if ("" === SF || "." === SF || ".." === SF) return !1;
      return !0
    }
    const eF = 14e3
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);