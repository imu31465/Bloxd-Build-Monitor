export const id = 75;
export const ids = [75];
export const modules = {
  35279: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      h: () => fy
    });
    let Uy = !1;

    function hy() {
      return Uy
    }

    function fy(yb) {
      return Uy !== yb && (Uy = yb, !0)
    }
  },
  3983: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ty,
      h: () => ly
    });
    var Uy = Wy(1158),
      hy = Wy(23);
    var fy = Wy(258);
    var Zy = Wy(547);
    var cb = Wy(1977),
      Py = Wy(3991),
      oy = Wy(4006),
      By = Wy(4022);
    class Ky {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        this.id = yb, this.type = bb, this.parameters = Wy, this.tearDownNotification = Uy, this.onDonePromise = hy, this.resolveRequest = fy
      }
    }
    const ey = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
    class qb {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        this.id = yb, this.type = bb, this.parameters = Wy, this.resolveRequest = Uy, this.onDonePromise = hy, this.tearDownNotification = fy, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
        const Zy = ly[bb];
        if (!Zy) throw console.error(`No QTE implementation registered for type: ${bb}`), new Error(`No QTE implementation registered for type: ${bb}`);
        this.implementation = new Zy(Wy, (yb => {
          this.isCompleted = !0, this.resolveRequest(yb)
        }), this.tearDownNotification), this.setupInputHandlers()
      }
      setupInputHandlers() {
        this.mouseSub = hy.g.subscribe("QTEMouseState", (yb => {
          let {
            isDown: bb
          } = yb;
          this.isCompleted || this.implementation.handleMouseInput(bb)
        })), this.stopInputActions = (0, oy.k)((yb => {
          this.isCompleted || !ey.has(yb.action) && !(0, oy.h)(yb) || this.implementation.handleMouseInput(yb.down)
        })), this.tickSub = hy.g.subscribe("noaTick", (yb => {
          if (this.isCompleted) return;
          const bb = yb / 1e3;
          this.implementation.handleTick(bb)
        })), this.stopShellTicks = (0, Py.z)((() => {
          this.isCompleted || this.implementation.handleTick(cb.q / 1e3)
        }))
      }
      cleanup() {
        var yb, bb;
        this.mouseSub && (hy.g.unsubscribe(this.mouseSub), this.mouseSub = null), null === (yb = this.stopInputActions) || void 0 === yb || yb.call(this), this.stopInputActions = null, null === (bb = this.stopShellTicks) || void 0 === bb || bb.call(this), this.stopShellTicks = null, this.tickSub && (hy.g.unsubscribe(this.tickSub), this.tickSub = null)
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
    const sy = new Uy.b,
      Sy = new Map;
    let Ey = null;
    const ly = {
      progressBar: class {
        constructor(yb, bb, Wy) {
          var Uy, hy, fy, Zy;
          this.resolveRequest = bb, this.tearDownNotification = Wy, this.progress = 0, this.Z2 = void 0, this.y5 = void 0, this.piy = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
          const cb = yb;
          this.Z2 = null !== (Uy = cb.Z2) && void 0 !== Uy ? Uy : .075, this.y5 = null !== (hy = cb.y5) && void 0 !== hy ? hy : 1, this.progress = null !== (fy = cb.rM) && void 0 !== fy ? fy : 30, this.piy = null !== (Zy = cb.piy) && void 0 !== Zy && Zy, this.parameters = cb
        }
        handleMouseInput(yb) {
          yb && !this.isCompleted && (this.clickCount++, this.progress += this.y5, this.progress >= 100 && this.complete(!0))
        }
        handleTick() {
          if (!this.isCompleted)
            if (this.progress -= this.Z2, this.piy && this.progress <= 0) this.complete(!1);
            else if (this.progress <= 0) this.progress = 0;
          else if (this.progress >= 100) return void this.complete(!0)
        }
        complete(yb) {
          this.isCompleted = !0, this.resolveRequest(yb)
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
        constructor(yb, bb, Wy) {
          var Uy;
          this.resolveRequest = bb, this.tearDownNotification = Wy, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = yb, this.timeWindowMs = null !== (Uy = this.parameters.B3) && void 0 !== Uy ? Uy : 3e3, this.startTime = Date.now()
        }
        handleMouseInput(yb) {
          if (!yb || this.isCompleted) return;
          Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
        }
        handleTick() {
          if (this.isCompleted) return;
          Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
        }
        complete(yb) {
          this.isCompleted = !0, this.resolveRequest(yb)
        }
        getState() {
          const yb = Date.now() - this.startTime,
            bb = Math.max(0, this.timeWindowMs - yb);
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              timeRemaining: bb,
              B3: this.timeWindowMs
            },
            isActive: !0
          }
        }
        tearDown() {
          this.tearDownNotification()
        }
      },
      gravityBar: class {
        constructor(yb, bb, Wy) {
          var Uy;
          this.resolveRequest = bb, this.tearDownNotification = Wy, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
          const hy = yb;
          this.parameters = {
            ...hy,
            t5: fy.c.clamp(hy.t5, .05, 1)
          }, this.progress = null !== (Uy = hy.rM) && void 0 !== Uy ? Uy : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        handleMouseInput(yb) {
          this.isMouseDown = yb
        }
        handleTick(yb) {
          this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(yb))
        }
        updateMover() {
          this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
          const yb = Math.sign(this.moverTarget - this.moverPosition);
          this.moverPosition += yb * this.parameters.I3 * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
        }
        pickNewMoverTarget() {
          this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
        }
        randomNumTicksUntilDirectionChange() {
          const yb = fy.c.clamp(1 - .7 * this.parameters.A3, 0, 1.4);
          return Math.floor(60 * yb + 40 * Math.random())
        }
        updateCatchZone() {
          this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.P5 : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = fy.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
          const yb = this.parameters.t5 / 2,
            bb = yb,
            Wy = 1 - yb;
          this.catchZonePosition <= bb ? (this.catchZonePosition = bb, this.catchZoneVelocity = 0) : this.catchZonePosition >= Wy && (this.catchZonePosition = Wy, this.catchZoneVelocity = 0)
        }
        isMoverInCatchZone() {
          const yb = this.parameters.t5 / 2;
          return this.moverPosition >= this.catchZonePosition - yb && this.moverPosition <= this.catchZonePosition + yb
        }
        updateProgress(yb) {
          this.isMoverInCatchZone() ? this.progress += this.parameters.o5 * yb : this.progress -= this.parameters.B5 * yb, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.piy && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
        }
        complete(yb) {
          this.isCompleted = !0, this.resolveRequest(yb)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              catchZonePosition: this.catchZonePosition,
              t5: this.parameters.t5,
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
        constructor(yb, bb, Wy) {
          var Uy, hy, Zy, cb, Py;
          this.resolveRequest = bb, this.tearDownNotification = Wy, this.startTime = void 0, this.speed = void 0, this.i6 = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
          const oy = yb;
          this.parameters = {
            ...oy,
            speed: null !== (Uy = oy.speed) && void 0 !== Uy ? Uy : .5,
            i6: fy.c.clamp(oy.i6, .05, 1),
            label: null !== (hy = oy.label) && void 0 !== hy ? hy : [{
              str: "Click when the marker is within the green zone."
            }],
            icon: null !== (Zy = oy.icon) && void 0 !== Zy ? Zy : null,
            scale: null !== (cb = oy.scale) && void 0 !== cb ? cb : 1,
            rotation: null !== (Py = oy.rotation) && void 0 !== Py ? Py : 0
          }, this.speed = this.parameters.speed, this.i6 = this.parameters.i6, this.startTime = Date.now()
        }
        handleMouseInput(yb) {
          if (yb) {
            this.updateMarkerPosition();
            const yb = Math.abs(this.markerPosition - .5) <= this.i6 / 2;
            this.complete(yb)
          }
        }
        handleTick() {
          this.isCompleted || this.updateMarkerPosition()
        }
        updateMarkerPosition() {
          const yb = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
          this.markerPosition = yb <= .5 ? 2 * yb : 2 - 2 * yb
        }
        complete(yb) {
          this.isCompleted = !0, this.resolveRequest(yb)
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
        constructor(yb, bb, Wy) {
          this.resolveRequest = bb, this.tearDownNotification = Wy, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = yb, this.shrinkStartTime = Date.now()
        }
        handleMouseInput(yb) {
          if (!yb || this.isCompleted) return;
          const bb = this.getOuterCircleProgress();
          if (bb <= this.parameters.f6 && bb >= -this.parameters.f6) {
            if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.I5) return void this.complete(!0)
          } else this.handleMiss();
          this.shrinkStartTime = Date.now()
        }
        handleMiss() {
          this.misses++, this.lastClickResult = !1, !(0, Zy.D)(this.parameters.R6) && this.misses > this.parameters.R6 ? this.complete(!1) : this.shrinkStartTime = Date.now()
        }
        handleTick() {
          if (this.isCompleted) return;
          this.getOuterCircleProgress() < -this.parameters.f6 && this.handleMiss()
        }
        getOuterCircleProgress() {
          return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.U6
        }
        complete(yb) {
          this.isCompleted = !0, this.resolveRequest(yb)
        }
        getState() {
          return {
            type: this.type,
            parameters: this.parameters,
            state: {
              outerCircleProgress: this.getOuterCircleProgress(),
              successes: this.successes,
              I5: this.parameters.I5,
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

    function mb() {
      (0, By.h)(cb.v.Qte, Ey ? cb.v.Qte : 0), Ey ? hy.g.EZ("qteStateUpdated", Ey.getState()) : hy.g.EZ("qteStateUpdated", {
        type: null,
        typeSpecificParameters: null,
        isActive: !1
      })
    }
    class Cy {
      constructor(yb, bb) {
        this.resultPromise = yb, this.tearDownQTE = bb
      }
      static create(yb, bb, Wy) {
        const Uy = Promise.race([yb, bb]);
        return new Cy(Uy, Wy)
      }
      async getResult() {
        return await this.resultPromise
      }
    }
    class Ty {
      static queueQTE(yb, bb, Wy) {
        let Uy, hy;
        const fy = new Promise((yb => {
            Uy = yb
          })),
          Zy = new Promise((yb => {
            hy = () => {
              yb("qteTornDown")
            }
          })),
          cb = Promise.race([fy, Zy]).then((() => {})),
          Py = new Ky(yb, bb, Wy, hy, cb, Uy);
        return Sy.set(yb, Py), sy.enqueue(Py), Ey || this.processNextQTE(), Cy.create(fy, Zy, hy)
      }
      static async processNextQTE() {
        if (Ey || sy.gh()) return void(sy.gh() && Ey && (Ey = null, mb()));
        const yb = await sy.dequeue();
        if (!Sy.has(yb.id)) return void await this.processNextQTE();
        Sy.delete(yb.id);
        const bb = new qb(yb.id, yb.type, yb.parameters, yb.resolveRequest, yb.onDonePromise, yb.tearDownNotification);
        Ey = bb, mb();
        try {
          await bb.waitUntilDone()
        } catch (Wy) {
          console.error("Error while waiting for QTE to resolve:", Wy.stack)
        }
        Ey === bb && (Ey.cleanup(), Ey = null, mb()), await this.processNextQTE()
      }
      static cancelQTE(yb) {
        if (Ey && Ey.id === yb) return Ey.tearDown(), Ey = null, mb(), void this.processNextQTE();
        const bb = Sy.get(yb);
        bb && (Sy.delete(yb), bb.tearDownNotification())
      }
      static getCurrentState() {
        return Ey ? Ey.getState() : {
          type: null,
          parameters: null,
          state: null,
          isActive: !1
        }
      }
      static reset() {
        Ey && (Ey.tearDown(), Ey = null), Sy.forEach(((yb, bb) => {
          this.cancelQTE(bb)
        })), sy.emptyQueue(), Sy.clear(), mb()
      }
    }
  },
  35272: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => ey,
      h: () => By,
      l: () => qb,
      m: () => Ky
    });
    var Uy = Wy(258),
      hy = Wy(568),
      fy = Wy(945),
      Zy = Wy(33);
    const cb = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Py = "playSessionGameNameWithVariation",
      oy = "wasMatchmakePlayer";

    function By() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy.g;
      (0, fy.j)(yb, cb)
    }

    function Ky() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy.g).setItem(oy, !0)
    }

    function ey() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy.g;
      return (0, fy.d)(yb, cb)
    }

    function qb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zy.g;
      const Wy = (0, fy.d)(bb, cb),
        By = function(yb) {
          const bb = yb.getItem(Py);
          return "string" !== typeof bb ? null : bb
        }(bb),
        Ky = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy.g).getItem(oy)
        }(bb);
      let ey;
      return ey = null !== Wy && null !== By && (0, fy.g)(bb, cb) && function(yb, bb, Wy) {
          const hy = (0, Uy.Rb)(yb),
            fy = (0, Uy.Rb)(bb),
            Zy = (0, Uy.Mb)(yb),
            cb = (0, Uy.Mb)(bb);
          return !(hy !== fy || !Wy) || hy === fy && Zy === cb
        }(By, yb, Ky) ? Wy : (0, hy.e)(), (0, fy.k)(bb, cb, ey), bb.setItem(Py, yb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy.g).removeItem(oy)
        }(bb), ey
    }
  },
  4006: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Py,
      h: () => fy,
      k: () => cb
    });
    var Uy = Wy(1977),
      hy = Wy(4013);

    function fy(yb) {
      let {
        action: bb,
        flags: Wy
      } = yb;
      return "mid-fire" === bb && 0 !== (Wy & Uy.b.AltLeftClick)
    }
    const Zy = new Set;

    function cb(yb) {
      return Zy.add(yb), () => {
        Zy.delete(yb)
      }
    }

    function Py(yb) {
      const bb = hy.b[255 & yb];
      if (void 0 === bb) return;
      const Wy = yb >>> 8 & 255,
        fy = {
          action: bb,
          down: 0 !== (Wy & Uy.b.Down),
          flags: Wy,
          press: yb >>> 16
        };
      for (const Uy of Zy) Uy(fy)
    }
  },
  8556: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      g: () => fy
    });
    var Uy = Wy(8504);
    const hy = "Air",
      fy = Object.freeze(new Uy.h(hy, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  35604: (yb, bb, Wy) => {
    Wy.d(bb, {
      A: () => Zy,
      e: () => hy,
      h: () => fy,
      l: () => ey,
      o: () => cb,
      q: () => Py,
      u: () => oy,
      w: () => Ky,
      z: () => By
    });
    var Uy = Wy(1102);
    let hy = function(yb) {
        return yb[yb.Join = 0] = "Join", yb[yb.Leave = 1] = "Leave", yb[yb.Push = 2] = "Push", yb[yb.Cursor = 3] = "Cursor", yb[yb.Submit = 4] = "Submit", yb[yb.ReloadAsVariation = 5] = "ReloadAsVariation", yb[yb.CreateFile = 6] = "CreateFile", yb[yb.RenameFile = 7] = "RenameFile", yb[yb.DeleteFile = 8] = "DeleteFile", yb[yb.SetEngine = 9] = "SetEngine", yb[yb.RenameFolder = 10] = "RenameFolder", yb
      }({}),
      fy = function(yb) {
        return yb[yb.Joined = 0] = "Joined", yb[yb.Updates = 1] = "Updates", yb[yb.Presence = 2] = "Presence", yb[yb.RemoteCursor = 3] = "RemoteCursor", yb[yb.ForceClose = 4] = "ForceClose", yb[yb.LobbyFilesChanged = 5] = "LobbyFilesChanged", yb[yb.EngineSettings = 6] = "EngineSettings", yb
      }({});

    function Zy(yb) {
      return "lobby" === yb.kind ? `lobby:${yb.path}` : `codeBlock:${yb.pos[0]},${yb.pos[1]},${yb.pos[2]}`
    }

    function cb(yb) {
      if ("lobby" === yb) return {
        kind: "lobby",
        path: Uy.h
      };
      if (yb.startsWith("lobby:")) {
        const bb = yb.slice(6);
        return Ky(bb) ? {
          kind: "lobby",
          path: bb
        } : null
      }
      const bb = yb.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return bb ? {
        kind: "codeBlock",
        pos: [parseInt(bb[1]), parseInt(bb[2]), parseInt(bb[3])]
      } : null
    }

    function Py(yb) {
      return yb.endsWith(".d.ts")
    }

    function oy(yb) {
      return yb.endsWith(".ts") && !Py(yb)
    }
    const By = 64;

    function Ky(yb) {
      if (!yb || yb !== yb.trim()) return !1;
      if (yb.length > By) return !1;
      if (yb.startsWith("/") || yb.includes("\\") || yb.includes("\0")) return !1;
      if (!Py(yb) && !oy(yb) && ! function(yb) {
          return yb.endsWith(".js") && !yb.endsWith(".min.js") && !yb.endsWith(".bundle.js")
        }(yb)) return !1;
      const bb = yb.split("/");
      for (const Wy of bb)
        if ("" === Wy || "." === Wy || ".." === Wy) return !1;
      return !0
    }
    const ey = 14e3
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);