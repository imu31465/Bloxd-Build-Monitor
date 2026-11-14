export const id = 72;
export const ids = [72];
export const modules = {
  35136: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      e: () => rB
    });
    let Vc = !1;

    function Ic() {
      return Vc
    }

    function rB(cB) {
      return Vc !== cB && (Vc = cB, !0)
    }
  },
  3823: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => pc,
      f: () => Sc
    });
    var Vc = nc(1156),
      Ic = nc(35);
    var rB = nc(302);
    var uc = nc(569);
    var sc = nc(1927),
      Mc = nc(3828),
      Pc = nc(3855),
      qB = nc(3866);
    class Oc {
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        this.id = cB, this.type = Bc, this.parameters = nc, this.tearDownNotification = Vc, this.onDonePromise = Ic, this.resolveRequest = rB
      }
    }
    const Tc = new Set(["primary-fire", "alt-fire", "TouchDig"]);
    class fc {
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        this.id = cB, this.type = Bc, this.parameters = nc, this.resolveRequest = Vc, this.onDonePromise = Ic, this.tearDownNotification = rB, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const uc = Sc[Bc];
        if (!uc) throw console.error(`No QTE implementation registered for type: ${Bc}`), new Error(`No QTE implementation registered for type: ${Bc}`);
        this.implementation = new uc(nc, (cB => {
          this.isCompleted = !0, this.resolveRequest(cB)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = Ic.i.subscribe("QTEMouseState", (cB => {
          let {
            isDown: Bc
          } = cB;
          this.isCompleted || this.implementation.handleMouseInput(Bc)
        })), this.stopInputActions = (0, Pc.j)((cB => {
          this.isCompleted || !Tc.has(cB.action) && !(0, Pc.f)(cB) || this.implementation.handleMouseInput(cB.down)
        })), this.tickSub = Ic.i.subscribe("noaTick", (cB => {
          if (this.isCompleted) return;
          const Bc = cB / 1e3;
          this.implementation.handleTick(Bc)
        })), this.stopShellTicks = (0, Mc.v)((() => {
          this.isCompleted || this.implementation.handleTick(sc.s / 1e3)
        }))
      }
      cleanup() {
        var cB, Bc;
        this.mouseSub && (Ic.i.unsubscribe(this.mouseSub), this.mouseSub = null), null === (cB = this.stopInputActions) || void 0 === cB || cB.call(this), this.stopInputActions = null, null === (Bc = this.stopShellTicks) || void 0 === Bc || Bc.call(this), this.stopShellTicks = null, this.tickSub && (Ic.i.unsubscribe(this.tickSub), this.tickSub = null)
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
    const mB = new Vc.d,
      ec = new Map;
    let tB = null;
    const Sc = {
      progressBar: class {
        constructor(cB, Bc, nc) {
          var Vc, Ic, rB, uc;
          this.resolveRequest = Bc, this.tearDownNotification = nc, this.progress = 0, this.rG = void 0, this.sA = void 0, this.yE = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const sc = cB;
          this.rG = null !== (Vc = sc.rG) && void 0 !== Vc ? Vc : .075, this.sA = null !== (Ic = sc.sA) && void 0 !== Ic ? Ic : 1, this.progress = null !== (rB = sc.qE) && void 0 !== rB ? rB : 30, this.yE = null !== (uc = sc.yE) && void 0 !== uc && uc, this.parameters = sc
        }
        handleMouseInput(cB) {
          cB && !this.isCompleted && (this.clickCount++, this.progress += this.sA, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.rG, this.yE && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(cB) {
          this.isCompleted = !0, this.resolveRequest(cB)
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
        constructor(cB, Bc, nc) {
          var Vc;
          this.resolveRequest = Bc, this.tearDownNotification = nc, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = cB, this.timeWindowMs = null !== (Vc = this.parameters.aG) && void 0 !== Vc ? Vc : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(cB) {
          if (!cB || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(cB) {
          this.isCompleted = !0, this.resolveRequest(cB)
        }
        getState() {
          const cB = Date.now() - this.startTime,
            Bc = Math.max(0, this.timeWindowMs - cB);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: Bc,
              aG: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(cB, Bc, nc) {
          var Vc;
          this.resolveRequest = Bc, this.tearDownNotification = nc, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const Ic = cB;
          this.parameters = {
            ...Ic,
            iG: rB.b.clamp(Ic.iG, .05, 1)
          }, this.progress = null !== (Vc = Ic.qE) && void 0 !== Vc ? Vc : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(cB) {
          this.isMouseDown = cB
        }
        handleTick(cB) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(cB))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const cB = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += cB * this.parameters.xG * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const cB = rB.b.clamp(1 - .7 * this.parameters.nG, 0, 1.4);
          return Math.floor(60 * cB + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.r4 : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = rB.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const cB = this.parameters.iG / 2,
            Bc = cB,
            nc = 1 - cB;
          this.catchZonePosition <= Bc ? (this.catchZonePosition = Bc, this.catchZoneVelocity = 0) : this.catchZonePosition >= nc && (this.catchZonePosition = nc, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const cB = this.parameters.iG / 2;
          return this.moverPosition >= this.catchZonePosition - cB && this.moverPosition <= this.catchZonePosition + cB
        }
        updateProgress(cB) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.sG * cB : this.progress -= this.parameters.pG * cB, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.yE && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(cB) {
          this.isCompleted = !0, this.resolveRequest(cB)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              iG: this.parameters.iG,
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
        constructor(cB, Bc, nc) {
          var Vc, Ic, uc, sc, Mc;
          this.resolveRequest = Bc, this.tearDownNotification = nc, this.startTime = void 0, this.speed = void 0, this.lG = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const Pc = cB;
          this.parameters = {
            ...Pc,
            speed: null !== (Vc = Pc.speed) && void 0 !== Vc ? Vc : .5,
            lG: rB.b.clamp(Pc.lG, .05, 1),
            label: null !== (Ic = Pc.label) && void 0 !== Ic ? Ic : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (uc = Pc.icon) && void 0 !== uc ? uc : null,
            scale: null !== (sc = Pc.scale) && void 0 !== sc ? sc : 1,
            rotation: null !== (Mc = Pc.rotation) && void 0 !== Mc ? Mc : 0
          }, this.speed = this.parameters.speed, this.lG = this.parameters.lG, this.startTime = Date.now()
        }
        handleMouseInput(cB) {
          if (cB) {
            this.updateMarkerPosition();
            const cB = Math.abs(this.markerPosition - .5) <= this.lG / 2;
            this.complete(cB)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const cB = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = cB <= .5 ? 2 * cB : 2 - 2 * cB
        }
        complete(cB) {
          this.isCompleted = !0, this.resolveRequest(cB)
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
        constructor(cB, Bc, nc) {
          this.resolveRequest = Bc, this.tearDownNotification = nc, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = cB, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(cB) {
          if (!cB || this.isCompleted) return;
          const Bc = this.getOuterCircleProgress();
          if (Bc <= this.parameters.JG && Bc >= -this.parameters.JG) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.QG) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, uc.E)(this.parameters.i4) && this.misses > this.parameters.i4 ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.JG && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.WG
        }
        complete(cB) {
          this.isCompleted = !0, this.resolveRequest(cB)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              QG: this.parameters.QG,
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

    function yB() {
      (0, qB.h)(sc.x.Qte, tB ? sc.x.Qte : 0), tB ? Ic.i.Vu("qteStateUpdated", tB.getState()) : Ic.i.Vu("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class zB {
      constructor(cB, Bc) {
        this.resultPromise = cB, this.tearDownQTE = Bc
      }
      static create(cB, Bc, nc) {
        const Vc = Promise.race([cB, Bc]);
        return new zB(Vc, nc)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class pc {
      static queueQTE(cB, Bc, nc) {
        let Vc, Ic;
        const rB = new Promise((cB => {
            Vc = cB
          })),
          uc = new Promise((cB => {
            Ic = () => {
              cB("qteTornDown")
            }
          })),
          sc = Promise.race([rB, uc]).then((() => {})),
          Mc = new Oc(cB, Bc, nc, Ic, sc, Vc);
        return ec.set(cB, Mc), mB.enqueue(Mc), tB || this.processNextQTE(), zB.create(rB, uc, Ic)
      }
      static async processNextQTE() {
        if (tB || mB.hV()) return void(mB.hV() && tB && (tB = null, yB()));
        const cB = await mB.dequeue();
        if (!ec.has(cB.id)) return void await this.processNextQTE();
        ec.delete(cB.id);
        const Bc = new fc(cB.id, cB.type, cB.parameters, cB.resolveRequest, cB.onDonePromise, cB.tearDownNotification);
        tB = Bc, yB();
        try {
          await Bc.waitUntilDone()
        } catch (nc) {
          console.error("Error while waiting for QTE to resolve:", nc.stack)
        }
        tB === Bc && (tB.cleanup(), tB = null, yB()), await this.processNextQTE()
      }
      static cancelQTE(cB) {
        if (tB && tB.id === cB) return tB.tearDown(), tB = null, yB(), void this.processNextQTE();
        const Bc = ec.get(cB);
        Bc && (ec.delete(cB), Bc.tearDownNotification())
      }
      static getCurrentState() {
        return tB ? tB.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        tB && (tB.tearDown(), tB = null), ec.forEach(((cB, Bc) => {
          this.cancelQTE(Bc)
        })), mB.emptyQueue(), ec.clear(), yB()
      }
    }
  },
  35124: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Tc,
      h: () => qB,
      l: () => fc,
      n: () => Oc
    });
    var Vc = nc(302),
      Ic = nc(279),
      rB = nc(954),
      uc = nc(51);
    const sc = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Mc = "playSessionGameNameWithVariation",
      Pc = "wasMatchmakePlayer";

    function qB() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.i;
      (0, rB.i)(cB, sc)
    }

    function Oc() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.i).setItem(Pc, !0)
    }

    function Tc() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.i;
      return (0, rB.d)(cB, sc)
    }

    function fc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uc.i;
      const nc = (0, rB.d)(Bc, sc),
        qB = function(cB) {
          const Bc = cB.getItem(Mc);
          return "string" !== typeof Bc ? null : Bc
        }(Bc),
        Oc = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.i).getItem(Pc)
        }(Bc);
      let Tc;
      return Tc = null !== nc && null !== qB && (0, rB.g)(Bc, sc) && function(cB, Bc, nc) {
          const Ic = (0, Vc.Db)(cB),
            rB = (0, Vc.Db)(Bc),
            uc = (0, Vc.Ab)(cB),
            sc = (0, Vc.Ab)(Bc);
          return !(Ic !== rB || !nc) || Ic === rB && uc === sc
        }(qB, cB, Oc) ? nc : (0, Ic.d)(), (0, rB.m)(Bc, sc, Tc), Bc.setItem(Mc, cB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.i).removeItem(Pc)
        }(Bc), Tc
    }
  },
  3855: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Mc,
      f: () => rB,
      j: () => sc
    });
    var Vc = nc(1927),
      Ic = nc(3857);

    function rB(cB) {
      let {
        action: Bc,
        flags: nc
      } = cB;
      return "mid-fire" === Bc && 0 !== (nc & Vc.d.AltLeftClick)
    }
    const uc = new Set;

    function sc(cB) {
      return uc.add(cB), () => {
        uc.delete(cB)
      }
    }

    function Mc(cB) {
      const Bc = Ic.e[255 & cB];
      if (void 0 === Bc) return;
      const nc = cB >>> 8 & 255,
        rB = {
          action: Bc,
          down: 0 !== (nc & Vc.d.Down),
          flags: nc,
          press: cB >>> 16
        };
      for (const Vc of uc) Vc(rB)
    }
  },
  8327: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      f: () => rB
    });
    var Vc = nc(8290);
    const Ic = "Air",
      rB = Object.freeze(new Vc.f(Ic, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  35484: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      d: () => rB,
      e: () => Tc,
      i: () => sc,
      j: () => Mc,
      m: () => Pc,
      p: () => Oc,
      r: () => qB,
      s: () => uc
    });
    var Vc = nc(1108);
    let Ic = function(cB) {
        return cB[cB.Join = 0] = "Join", cB[cB.Leave = 1] = "Leave", cB[cB.Push = 2] = "Push", cB[cB.Cursor = 3] = "Cursor", cB[cB.Submit = 4] = "Submit", cB[cB.ReloadAsVariation = 5] = "ReloadAsVariation", cB[cB.CreateFile = 6] = "CreateFile", cB[cB.RenameFile = 7] = "RenameFile", cB[cB.DeleteFile = 8] = "DeleteFile", cB[cB.SetEngine = 9] = "SetEngine", cB[cB.RenameFolder = 10] = "RenameFolder", cB
      }({}),
      rB = function(cB) {
        return cB[cB.Joined = 0] = "Joined", cB[cB.Updates = 1] = "Updates", cB[cB.Presence = 2] = "Presence", cB[cB.RemoteCursor = 3] = "RemoteCursor", cB[cB.ForceClose = 4] = "ForceClose", cB[cB.LobbyFilesChanged = 5] = "LobbyFilesChanged", cB[cB.EngineSettings = 6] = "EngineSettings", cB
      }({});

    function uc(cB) {
      return "lobby" === cB.kind ? `lobby:${cB.path}` : `codeBlock:${cB.pos[0]},${cB.pos[1]},${cB.pos[2]}`
    }

    function sc(cB) {
      if ("lobby" === cB) return {
        kind: "lobby",
        path: Vc.g
      };
      if (cB.startsWith("lobby:")) {
        const Bc = cB.slice(6);
        return Oc(Bc) ? {
          kind: "lobby",
          path: Bc
        } : null
      }
      const Bc = cB.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Bc ? {
        kind: "codeBlock",
        pos: [parseInt(Bc[1]), parseInt(Bc[2]), parseInt(Bc[3])]
      } : null
    }

    function Mc(cB) {
      return cB.endsWith(".d.ts")
    }

    function Pc(cB) {
      return cB.endsWith(".ts") && !Mc(cB)
    }
    const qB = 64;

    function Oc(cB) {
      if (!cB || cB !== cB.trim()) return !1;
      if (cB.length > qB) return !1;
      if (cB.startsWith("/") || cB.includes("\\") || cB.includes("\0")) return !1;
      if (!Mc(cB) && !Pc(cB) && ! function(cB) {
          return cB.endsWith(".js") && !cB.endsWith(".min.js") && !cB.endsWith(".bundle.js")
        }(cB)) return !1;
      const Bc = cB.split("/");
      for (const nc of Bc)
        if ("" === nc || "." === nc || ".." === nc) return !1;
      return !0
    }
    const Tc = 14e3
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);