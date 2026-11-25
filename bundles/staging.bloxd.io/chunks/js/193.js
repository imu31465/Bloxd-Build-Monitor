export const id = 193;
export const ids = [193];
export const modules = {
  39345: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      constructor(tt, et) {
        this.read = tt, this.apply = et, this.release = null
      }
      turn(tt, et) {
        const Vt = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: et,
          forcedCameraDirection: [tt[0], tt[1], tt[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), et + 100),
          transitionMs: Vt
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(tt) {
        null !== this.release && (clearTimeout(this.release.timer), tt && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38869: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      e: () => qt
    });
    const Ot = new Map;

    function qt(tt, et) {
      Ot.set(tt, et)
    }

    function Dt(tt) {
      return tt ? Ot.get(tt) : void 0
    }
  },
  39824: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt
    });
    var Ot = Vt(38460);

    function qt(tt, et, Vt) {
      var qt, Dt, mt, dt, jt, Ht, Xt;
      const Qt = (0, Ot.d)(tt, et, Vt[0], Vt[1], Vt[2]),
        lt = Qt ? null !== (qt = Qt.textCell) && void 0 !== qt ? qt : Qt.rect.anchor : Vt,
        Et = et(lt[0], lt[1], lt[2]);
      return {
        pos: [Vt[0], Vt[1], Vt[2]],
        noticeboardSpan: Qt && {
          width: Qt.rect.width,
          height: Qt.rect.height
        },
        text: null !== (Dt = null === Et || void 0 === Et || null === (mt = Et.persisted) || void 0 === mt || null === (dt = mt.shared) || void 0 === dt ? void 0 : dt.text) && void 0 !== Dt ? Dt : "",
        textSize: null !== (jt = null === Et || void 0 === Et || null === (Ht = Et.persisted) || void 0 === Ht || null === (Xt = Ht.shared) || void 0 === Xt ? void 0 : Xt.textSize) && void 0 !== jt ? jt : null
      }
    }
  },
  38728: (tt, et, Vt) => {
    function Ot(tt) {
      switch (tt.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    Vt.d(et, {
      d: () => qt,
      f: () => Dt,
      i: () => Ot
    });
    const qt = 4,
      Dt = 3
  },
  39367: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      e: () => Dt
    });
    var Ot = Vt(391);
    const qt = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class Dt {
      constructor(tt) {
        this.importGame = tt, this.loads = new Map, this.loaded = new Map
      }
      load(tt) {
        const et = (0, Ot.bc)(tt);
        if (!qt.has(et)) return Promise.resolve(void 0);
        let Vt = this.loads.get(et);
        return Vt || (Vt = this.importGame(et).then((tt => {
          const Vt = tt.default;
          if ("function" !== typeof Vt) throw new Error(`${et}'s client code has no default-exported factory`);
          return this.loaded.set(et, Vt), Vt
        })).catch((tt => {
          throw this.loads.delete(et), tt
        })), this.loads.set(et, Vt)), Vt
      }
      loadedFactory(tt) {
        const et = (0, Ot.bc)(tt);
        if (!qt.has(et)) return;
        const Vt = this.loaded.get(et);
        if (!Vt) throw new Error(`${et}'s client code started before it loaded`);
        return Vt
      }
    }
  },
  39827: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(9512),
      qt = Vt(34399),
      Dt = Vt(3346);

    function mt(tt) {
      if (tt === Ot.c) return 0;
      const et = (0, Dt.b)(tt);
      if (void 0 !== et && et <= qt.MAX_BLOCK_ID) return et;
      const Vt = (0, Dt.b)(tt.split("|")[0]);
      if (void 0 !== Vt && Vt <= qt.MAX_BLOCK_ID && (0, qt.rootMetaDescOf)(Vt) === tt) return Vt;
      throw new Error(`Invalid block name. You sent ${tt}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39415: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(26);
    class qt {
      constructor(tt) {
        this.screen = tt, this.hidesHud = !1
      }
      show(tt, et) {
        this.screen.setFade(tt.colour, tt.alpha), this.screen.setLetterbox(!0 === et.letterbox, tt.alpha < 1), this.setHudHidden(!0 === et.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(tt) {
        this.hidesHud !== tt && (this.hidesHud = tt, Ot.b.set({
          isUiHiddenByCamera: tt
        }))
      }
    }
  },
  39378: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      e: () => lt,
      g: () => Qt,
      i: () => mt,
      l: () => ft,
      m: () => jt,
      o: () => wt,
      r: () => Ht,
      s: () => dt,
      u: () => Xt
    });
    const Ot = Math.PI / 2 - .001,
      qt = 2 * Math.PI,
      Dt = 1e-9;

    function mt(tt, et) {
      et.heading = tt.heading, et.pitch = tt.pitch
    }

    function dt(tt, et) {
      const Vt = et - tt;
      return Vt - qt * Math.floor((Vt + Math.PI) / qt)
    }

    function jt(tt, et, Vt) {
      return tt + dt(tt, et) * Vt
    }

    function Ht(tt) {
      if (!Number.isFinite(tt)) return tt;
      const et = tt - qt * Math.floor(tt / qt);
      return et < qt ? et : 0
    }

    function Xt(tt, et) {
      return tt + dt(tt, et)
    }

    function Qt(tt) {
      return Math.max(-Ot, Math.min(Ot, tt))
    }

    function lt(tt, et, Vt) {
      const Ot = Math.cos(et);
      return Vt[0] = Ot * Math.sin(tt), Vt[1] = -Math.sin(et), Vt[2] = Ot * Math.cos(tt), Vt
    }

    function Et(tt, et, Vt, Ot) {
      const qt = Math.sqrt(tt * tt + Vt * Vt);
      return qt < Dt && Math.abs(et) < Dt || (qt >= Dt && (Ot.heading = Math.atan2(tt, Vt)), Ot.pitch = Qt(Math.atan2(-et, qt) + 0)), Ot
    }

    function ft(tt, et) {
      return Et(tt[0], tt[1], tt[2], et)
    }

    function wt(tt, et, Vt) {
      return Et(et[0] - tt[0], et[1] - tt[1], et[2] - tt[2], Vt)
    }
  },
  39410: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      f: () => qt
    });
    var Ot = Vt(39378);

    function qt(tt) {
      var et;
      const Vt = "default" === tt.mode ? "movement" : null !== (et = tt.playerFacing) && void 0 !== et ? et : "movement";
      return "cursor" === Vt ? {
        facing: Vt,
        mouseTurns: null
      } : {
        facing: Vt,
        mouseTurns: "default" !== tt.mode && void 0 !== tt.playerLook ? "look" : "view"
      }
    }

    function Dt(tt, et, Vt, qt, Dt, mt) {
      return mt.JR = 0, mt.uR = 0, mt.pointedAt = void 0, void 0 !== qt ? Dt ? (mt.pointedAt = qt, tt) : (0, Ot.r)(qt.heading) : Dt ? (mt.JR = et, mt.uR = Vt, tt) : (0, Ot.r)(tt + et)
    }
  },
  39392: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => At
    });
    var Ot = Vt(39398),
      qt = Vt(39378),
      Dt = Vt(37234);

    function mt(tt, et, Vt, Ot) {
      if (!(Ot > 0)) return et;
      const qt = et > tt ? Math.min(et, tt + Vt / Ot) : Math.max(et, tt - Vt / Ot);
      return Math.abs(et - qt) < 1e-9 ? et : qt
    }
    class dt {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Ot.g,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(tt) {
        !this.isGoingOut() && this.sinceTurnMs < Ot.j.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: tt
        } : (this.waiting = null, this.startOut(tt))
      }
      fadeIn(tt) {
        this.isGoingOut() ? this.sinceTurnMs < Ot.j.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: tt
        } : (this.waiting = null, this.startIn(tt)) : this.waiting = null
      }
      advance(tt) {
        const et = this.waiting;
        if (null === et) return this.step(tt);
        const Vt = Ot.j.minFadeTurnMs - this.sinceTurnMs;
        if (Vt > tt) return this.step(tt);
        const qt = this.step(Vt);
        return this.waiting = null, "out" === et.turn ? this.startOut(et.transition) : this.startIn(et.minMs), this.step(tt - Vt) || qt
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(tt) {
        ("in" === this.phase || null === this.phase && this.clearMs < Ot.j.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = tt.colour), this.outMs = tt.outMs, this.holdMs = tt.holdMs, this.inMs = tt.inMs
      }
      startIn(tt) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(tt, this.inMs)
      }
      step(tt) {
        const et = this.screen;
        this.sinceTurnMs += tt, null === this.phase && (this.clearMs += tt);
        let Vt = !1,
          qt = tt;
        if ("out" === this.phase) {
          const Ot = (1 - et.alpha) * this.outMs;
          if (et.alpha = mt(et.alpha, 1, tt, this.outMs), et.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, qt = Math.max(0, tt - Ot), Vt = !0
        }
        let Dt = tt;
        if ("hold" === this.phase) {
          this.heldMs += qt;
          const tt = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Ot.j.minFadeTurnMs);
          if (tt < 0 || Vt) return Vt;
          this.phase = "in", this.sinceTurnMs = tt, Dt = tt
        }
        return "in" === this.phase && (et.alpha = mt(et.alpha, 0, Dt, this.inMs), et.alpha <= 0 && (this.phase = null, this.clearMs = 0)), Vt
      }
    }
    var jt = Vt(39375),
      Ht = Vt(39406),
      Xt = Vt(1993),
      Qt = Vt(36816);

    function lt(tt, et) {
      for (let Vt = 0; Vt < et.length; Vt++) et[Vt] = tt[Vt]
    }

    function Et(tt, et) {
      var Vt;
      return null !== (Vt = tt.fov) && void 0 !== Vt ? Vt : et.getDefaultFov()
    }

    function ft(tt, et, Vt, Ot, qt) {
      const Dt = 2 / Ot,
        mt = Math.exp(-Dt * qt);
      for (let dt = 0; dt < tt.length; dt++) {
        const Ot = tt[dt] - Vt[dt],
          jt = (et[dt] + Dt * Ot) * qt;
        tt[dt] = Vt[dt] + (Ot + jt) * mt, et[dt] = (et[dt] - Dt * jt) * mt
      }
    }
    class wt {
      constructor(tt, et, Vt, Ot) {
        var Dt, mt, dt, jt, Ht;
        this.settings = tt, this.sQ = et, this.targets = Vt, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Dy = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, qt.r)((0, Xt.l)(null !== (Dt = tt.viewHeading) && void 0 !== Dt ? Dt : 0)),
          pitch: (0, qt.g)((0, Xt.l)(null !== (mt = tt.viewElevation) && void 0 !== mt ? mt : 45))
        }, this.closestDistance = null !== (dt = tt.closestDistance) && void 0 !== dt ? dt : Math.min(6, null !== (jt = tt.furthestDistance) && void 0 !== jt ? jt : 1 / 0), this.furthestDistance = null !== (Ht = tt.furthestDistance) && void 0 !== Ht ? Ht : Math.max(64, this.closestDistance);
        const Qt = (0, qt.e)(this.base.heading, this.base.pitch, this.forward),
          lt = Ot.position,
          Et = this.closestDistance;
        this.goal = [lt[0] + Qt[0] * Et, lt[1] + Qt[1] * Et, lt[2] + Qt[2] * Et, Et, this.base.heading, this.base.pitch]
      }
      update(tt, et, Vt) {
        var Ot, Dt;
        this.placeGoal(null !== (Ot = this.settings.fov) && void 0 !== Ot ? Ot : this.sQ.getBaseFov()), this.goal[4] = (0, qt.u)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const mt = null !== (Dt = this.settings.smoothMs) && void 0 !== Dt ? Dt : 400;
        !this.started || mt < 1 ? (lt(this.goal, this.smoothed), this.Dy.fill(0), this.started = !0) : ft(this.smoothed, this.Dy, this.goal, mt, tt), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, qt.g)(this.smoothed[5]), et.apply(this.angles, Vt);
        const dt = (0, qt.e)(Vt.heading, Vt.pitch, this.forward);
        for (let qt = 0; qt < 3; qt++) Vt.position[qt] = this.smoothed[qt] - dt[qt] * this.smoothed[3];
        Vt.fov = Et(this.settings, this.sQ)
      }
      continueFrom(tt) {
        tt instanceof wt && (lt(tt.goal, this.goal), lt(tt.smoothed, this.smoothed), lt(tt.Dy, this.Dy), this.framedTargets = tt.framedTargets, this.started = tt.started)
      }
      reset() {
        this.Dy.fill(0), this.started = !1
      }
      placeGoal(tt) {
        var et;
        let Vt = 0;
        for (const Xt of this.settings.targets) {
          const tt = this.targets.currentAimPoint(Xt);
          tt && (0, jt.h)(tt, this.pointAt(Vt++))
        }
        if (Vt > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const tt = this.targets.aimPoint(this.sQ.localPlayerId);
          tt && (0, jt.h)(tt, this.pointAt(Vt++))
        }
        const Ot = this.goal;
        if (0 === Vt) return void(Ot[3] = this.withinDistances(Ot[3]));
        for (let jt = 0; jt < 3; jt++) {
          let tt = 1 / 0,
            et = -1 / 0;
          for (let Ot = 0; Ot < Vt; Ot++) tt = Math.min(tt, this.points[Ot][jt]), et = Math.max(et, this.points[Ot][jt]);
          Ot[jt] = (tt + et) / 2
        }
        let qt = 0;
        for (let jt = 0; jt < Vt; jt++) {
          const tt = this.points[jt];
          qt = Math.max(qt, Math.hypot(tt[0] - Ot[0], tt[1] - Ot[1], tt[2] - Ot[2]))
        }
        const Dt = Math.tan((0, Xt.l)(tt) / 2),
          mt = Math.atan(Dt * (!0 === this.settings.letterbox ? Qt.e : 1)),
          dt = Math.atan(Dt * this.sQ.getAspectRatio()),
          Ht = (qt + (null !== (et = this.settings.padding) && void 0 !== et ? et : 2)) / Math.sin(Math.min(mt, dt));
        Ot[3] = this.withinDistances(Ht)
      }
      withinDistances(tt) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, tt))
      }
      pointAt(tt) {
        return tt === this.points.length && this.points.push([0, 0, 0]), this.points[tt]
      }
    }
    class yt {
      constructor(tt) {
        this.limits = tt, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(tt) {
        this.limits && (this.yawOffset = tt.yawOffset, this.pitchOffset = tt.pitchOffset, this.idleMs = tt.idleMs)
      }
      update(tt, et) {
        const Vt = this.limits;
        if (!Vt) return;
        const Ot = Number.isFinite(et.JR) ? et.JR : 0,
          qt = Number.isFinite(et.uR) ? et.uR : 0;
        if (et.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: et.pointedAt.heading,
          pitch: et.pointedAt.pitch
        };
        else if (0 !== Ot || 0 !== qt) this.idleMs = 0, this.yawOffset += Ot, this.pitchOffset += qt;
        else {
          const et = Math.max(0, this.idleMs + tt - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += tt, void 0 !== Vt.returnMs && et > 0) {
            const tt = Vt.returnMs > 0 ? Math.exp(-3 * et / Vt.returnMs) : 0;
            this.yawOffset *= tt, this.pitchOffset *= tt
          }
        }
        this.clampOffsets(Vt)
      }
      clampOffsets(tt) {
        if (tt.maxYaw >= 180) this.yawOffset = (0, qt.s)(0, this.yawOffset);
        else {
          const et = (0, Xt.l)(tt.maxYaw);
          this.yawOffset = Math.max(-et, Math.min(et, this.yawOffset))
        }
        const et = (0, Xt.l)(tt.maxPitch);
        this.pitchOffset = Math.max(-et, Math.min(et, this.pitchOffset))
      }
      apply(tt, et) {
        this.pointedAt && this.limits && (this.yawOffset = (0, qt.s)(tt.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - tt.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const Vt = (0, qt.g)(tt.pitch + this.pitchOffset);
        this.pitchOffset = Vt - tt.pitch, et.heading = (0, qt.r)(tt.heading + this.yawOffset), et.pitch = Vt
      }
      unapply(tt, et) {
        et.heading = (0, qt.r)(tt.heading - this.yawOffset), et.pitch = (0, qt.g)(tt.pitch - this.pitchOffset)
      }
    }
    const Nt = 1e-6;

    function Mt(tt) {
      return Math.sqrt(tt[0] * tt[0] + tt[1] * tt[1] + tt[2] * tt[2])
    }

    function bt(tt, et, Vt, Ot, qt) {
      const Dt = qt * qt,
        mt = Dt * qt;
      return (2 * mt - 3 * Dt + 1) * tt + (mt - 2 * Dt + qt) * et + (-2 * mt + 3 * Dt) * Vt + (mt - Dt) * Ot
    }

    function Jt(tt, et, Vt, Ot, qt) {
      const Dt = qt * qt;
      return (6 * Dt - 6 * qt) * tt + (3 * Dt - 4 * qt + 1) * et + (-6 * Dt + 6 * qt) * Vt + (3 * Dt - 2 * qt) * Ot
    }

    function Ct(tt, et) {
      const Vt = et[0] - tt[0],
        Ot = et[1] - tt[1],
        qt = et[2] - tt[2];
      return Math.sqrt(Vt * Vt + Ot * Ot + qt * qt)
    }

    function ut(tt, et, Vt, Ot, qt, Dt) {
      for (let mt = 0; mt < 3; mt++) Dt[mt] = qt ? tt[mt] * Ot : Vt[mt] - et[mt];
      return qt && function(tt, et) {
        const Vt = Mt(tt);
        if (Vt > et) {
          const Ot = et / Vt;
          tt[0] *= Ot, tt[1] *= Ot, tt[2] *= Ot
        }
      }(Dt, 3 * Ct(et, Vt)), Dt
    }

    function Kt(tt, et, Vt, Ot) {
      for (let qt = 0; qt < 3; qt++) Ot[qt] = 6 * (et[qt] - tt[qt]) - 2 * Vt[qt];
      if (Mt(Ot) < Nt)
        for (let qt = 0; qt < 3; qt++) Ot[qt] = et[qt] - tt[qt];
      return Ot
    }

    function ht(tt, et) {
      return [2 * et[0] - tt[0], 2 * et[1] - tt[1], 2 * et[2] - tt[2]]
    }

    function vt(tt, et, Vt, Ot, qt, Dt, mt) {
      if (!Dt && !mt) return 0;
      const dt = Dt ? tt : 2 * et - Vt,
        jt = mt ? Vt : 2 * et - tt,
        Ht = Dt ? Ot : qt,
        Xt = mt ? qt : Ot,
        Qt = (et - dt) / Ht,
        lt = (jt - et) / Xt;
      if (Qt * lt <= 0) return 0;
      const Et = (jt - dt) / (Ht + Xt),
        ft = 3 * Math.min(Math.abs(Qt), Math.abs(lt));
      return Math.max(-ft, Math.min(ft, Et))
    }

    function Wt(tt, et, Vt, Ot, qt, Dt, mt) {
      const {
        u: dt,
        segmentMs: jt
      } = tt;
      if (!tt.curved) return Vt + (Ot - Vt) * dt;
      return bt(Vt, vt(et, Vt, Ot, tt.beforeMs, jt, Dt, !0) * jt, Ot, vt(Vt, Ot, qt, jt, tt.afterMs, !0, mt) * jt, dt)
    }

    function St(tt) {
      return Math.abs(tt.pitch) >= qt.c
    }
    class ct {
      constructor(tt, et, Vt, Ot, qt) {
        this.nodes = tt, this.prevNodes = Vt, this.nextNodes = Ot, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
          heading: 0,
          pitch: 0
        }, this.fromAngles = {
          heading: 0,
          pitch: 0
        }, this.toAngles = {
          heading: 0,
          pitch: 0
        }, this.afterAngles = {
          heading: 0,
          pitch: 0
        }, this.borrowedAngles = {
          heading: 0,
          pitch: 0
        }, this.tangents = tt.map(((tt, Vt) => this.nodeTangent(et, qt, Vt)))
      }
      sample(tt, et, Vt) {
        const {
          index: Ot,
          toIndex: Dt,
          segmentMs: mt,
          curved: dt
        } = tt, jt = this.fromAngles, Ht = this.toAngles, Xt = this.nodeAngles(Ot, Vt.position, et, jt), Qt = this.nodeAngles(Dt, Vt.position, et, Ht);
        if (mt > 0 && "aim" !== Xt && "aim" !== Qt && this.liveTangent(tt, jt)) return Vt.heading = (0, qt.r)(jt.heading), void(Vt.pitch = jt.pitch);
        if ("none" === Xt && "none" === Qt) return;
        !dt && mt > 0 && ("tangent" === Xt && this.liveTangent(tt, jt), "tangent" === Qt && this.liveTangent(tt, Ht)), "none" === Xt ? (0, qt.i)(Ht, jt) : "none" === Qt && (0, qt.i)(jt, Ht);
        const lt = dt && tt.beforeIndex >= 0 && "none" !== this.nodeAngles(tt.beforeIndex, Vt.position, et, this.beforeAngles),
          Et = dt && tt.afterIndex >= 0 && "none" !== this.nodeAngles(tt.afterIndex, Vt.position, et, this.afterAngles),
          ft = (0, qt.u)(jt.heading, Ht.heading),
          wt = Wt(tt, lt ? (0, qt.u)(jt.heading, this.beforeAngles.heading) : 0, jt.heading, ft, Et ? (0, qt.u)(ft, this.afterAngles.heading) : 0, lt, Et);
        Vt.heading = (0, qt.r)(wt), Vt.pitch = (0, qt.g)(Wt(tt, this.beforeAngles.pitch, jt.pitch, Ht.pitch, this.afterAngles.pitch, lt, Et))
      }
      nodeAngles(tt, et, Vt, Ot) {
        const qt = this.rawNodeAngles(tt, et, Vt, Ot);
        return "none" !== qt && St(Ot) && !this.borrowHeading(this.prevNodes[tt], et, Vt, Ot) && this.borrowHeading(this.nextNodes[tt], et, Vt, Ot), qt
      }
      borrowHeading(tt, et, Vt, Ot) {
        const qt = this.borrowedAngles;
        return !(tt < 0 || "none" === this.rawNodeAngles(tt, et, Vt, qt) || St(qt)) && (Ot.heading = qt.heading, !0)
      }
      rawNodeAngles(tt, et, Vt, Ot) {
        const Dt = this.nodes[tt].keyframe;
        if (Dt.lookDirection) return (0, qt.l)(Dt.lookDirection, Ot), "aim";
        if (void 0 !== Dt.lookAt) {
          const tt = Vt(Dt.lookAt);
          if (tt) return (0, qt.o)(et, tt, Ot), "aim"
        }
        const mt = this.tangents[tt];
        return mt ? ((0, qt.i)(mt, Ot), "tangent") : "none"
      }
      liveTangent(tt, et) {
        const Vt = this.nodes[tt.index].position,
          Ot = this.nodes[tt.toIndex].position,
          Dt = this.derivative;
        for (let qt = 0; qt < 3; qt++) Dt[qt] = Jt(Vt[qt], tt.fromTangent[qt], Ot[qt], tt.toTangent[qt], tt.u);
        return Mt(Dt) > 1e-9 ? ((0, qt.l)(Dt, et), !0) : !(Ct(Vt, Ot) < Nt) && ((0, qt.l)(Kt(Vt, Ot, tt.u < .5 ? tt.toTangent : tt.fromTangent, Dt), et), !0)
      }
      nodeTangent(tt, et, Vt) {
        var Ot;
        const Dt = tt[Vt];
        if (Mt(Dt) > 1e-9) return (0, qt.l)(Dt, {
          heading: 0,
          pitch: 0
        });
        const mt = null !== (Ot = this.restDirectionTo(Vt, Vt + 1, tt, et)) && void 0 !== Ot ? Ot : this.restDirectionTo(Vt, Vt - 1, tt, et);
        return mt ? (0, qt.l)(mt, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(tt, et, Vt, Ot) {
        const qt = this.nodes[tt],
          Dt = this.nodes[et];
        if (!Dt || Ct(qt.position, Dt.position) < Nt) return null;
        const [mt, dt] = et > tt ? [qt, Dt] : [Dt, qt], jt = ut(Vt[et], mt.position, dt.position, dt.timeMs - mt.timeMs, Ot, [0, 0, 0]);
        return Kt(mt.position, dt.position, jt, [0, 0, 0])
      }
    }

    function Rt(tt, et) {
      const Vt = tt.lookDirection || et.lookDirection ? function(tt, et) {
        if (!tt || !et) return tt === et;
        const Vt = Mt(tt),
          Ot = Mt(et);
        return Math.hypot(tt[0] / Vt - et[0] / Ot, tt[1] / Vt - et[1] / Ot, tt[2] / Vt - et[2] / Ot) < Nt
      }(tt.lookDirection, et.lookDirection) : (Ot = tt.lookAt, qt = et.lookAt, "object" !== typeof Ot || "object" !== typeof qt ? Ot === qt : Ct(Ot, qt) < Nt);
      var Ot, qt;
      return Ct(tt.position, et.position) < Nt && tt.fov === et.fov && Vt
    }
    class It {
      constructor(tt, et, Vt) {
        if (this.smooth = et, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
            index: 0,
            toIndex: 0,
            u: 0,
            segmentMs: 0,
            curved: !1,
            beforeIndex: -1,
            afterIndex: -1,
            beforeMs: 0,
            afterMs: 0,
            fromTangent: [0, 0, 0],
            toTangent: [0, 0, 0]
          }, 0 === tt.length) throw new Error("A camera path needs at least one keyframe");
        for (let Dt = 1; Dt < tt.length; Dt++)
          if (!(tt[Dt].timeMs > tt[Dt - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = tt.map((tt => {
          var et;
          return {
            timeMs: tt.timeMs,
            position: [...tt.position],
            keyframe: tt,
            easing: (0, Dt.r)(null !== (et = tt.easing) && void 0 !== et ? et : "linear")
          }
        }));
        const Ot = this.nodes[0],
          qt = this.nodes[this.nodes.length - 1],
          mt = Vt && this.nodes.length > 1;
        mt && !Rt(Ot.keyframe, qt.keyframe) && this.nodes.push({
          ...Ot,
          timeMs: qt.timeMs + (qt.timeMs - Ot.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = mt ? this.nodes[this.nodes.length - 1].timeMs - Ot.timeMs : 0, this.prevNodes = this.nodes.map(((tt, et) => this.neighbour(et, -1))), this.nextNodes = this.nodes.map(((tt, et) => this.neighbour(et, 1))), this.prevGaps = this.prevNodes.map(((tt, et) => tt >= 0 ? this.gapMs(et, -1) : 0)), this.nextGaps = this.nextNodes.map(((tt, et) => tt >= 0 ? this.gapMs(et, 1) : 0)), this.velocities = this.nodes.map(((tt, et) => {
          const Vt = this.prevNodes[et],
            Ot = this.nextNodes[et];
          return function(tt, et, Vt, Ot, qt, Dt) {
            if (Dt[0] = 0, Dt[1] = 0, Dt[2] = 0, !tt && !Vt) return Dt;
            const mt = null !== tt && void 0 !== tt ? tt : ht(null !== Vt && void 0 !== Vt ? Vt : et, et),
              dt = null !== Vt && void 0 !== Vt ? Vt : ht(null !== tt && void 0 !== tt ? tt : et, et),
              jt = tt ? Ot : qt,
              Ht = Vt ? qt : Ot,
              Xt = Ct(mt, et),
              Qt = Ct(et, dt);
            if (Xt < Nt || Qt < Nt) return Dt;
            const lt = Math.sqrt(Xt),
              Et = Math.sqrt(Qt),
              ft = (lt + Et) / (jt + Ht);
            for (let wt = 0; wt < 3; wt++) {
              const tt = (et[wt] - mt[wt]) / lt - (dt[wt] - mt[wt]) / (lt + Et) + (dt[wt] - et[wt]) / Et;
              Dt[wt] = tt * ft
            }
            return Dt
          }(Vt >= 0 ? this.nodes[Vt].position : null, tt.position, Ot >= 0 ? this.nodes[Ot].position : null, this.prevGaps[et], this.nextGaps[et], [0, 0, 0])
        })), this.aim = new ct(this.nodes, this.velocities, this.prevNodes, this.nextNodes, et)
      }
      sample(tt, et, Vt, Ot) {
        const qt = this.findSegment(this.pathTime(tt));
        this.samplePosition(qt, Ot.position), this.aim.sample(qt, et, Ot);
        const {
          beforeIndex: Dt,
          afterIndex: mt
        } = qt;
        Ot.fov = Wt(qt, Dt >= 0 ? this.fovAt(Dt, Vt) : 0, this.fovAt(qt.index, Vt), this.fovAt(qt.toIndex, Vt), mt >= 0 ? this.fovAt(mt, Vt) : 0, Dt >= 0, mt >= 0)
      }
      pathTime(tt) {
        const et = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || tt <= et) return tt;
        const Vt = tt - et;
        return et + Vt - this.loopMs * Math.floor(Vt / this.loopMs)
      }
      findSegment(tt) {
        const et = this.nodes,
          Vt = this.segment;
        let Ot = Vt.index;
        for (tt < et[Ot].timeMs && (Ot = 0); Ot < et.length - 2 && et[Ot + 1].timeMs <= tt;) Ot++;
        const qt = Math.min(Ot + 1, et.length - 1),
          mt = et[qt].timeMs - et[Ot].timeMs;
        return Vt.index = Ot, Vt.toIndex = qt, Vt.segmentMs = mt, Vt.u = mt > 0 ? (0, Dt.p)((tt - et[Ot].timeMs) / mt, et[Ot].easing) : 1, Vt.curved = this.smooth && mt > 0, Vt.beforeIndex = this.prevNodes[Ot], Vt.afterIndex = this.nextNodes[qt], Vt.beforeMs = this.prevGaps[Ot], Vt.afterMs = this.nextGaps[qt], Vt
      }
      samplePosition(tt, et) {
        const {
          fromTangent: Vt,
          toTangent: Ot,
          curved: qt
        } = tt, Dt = this.nodes[tt.index].position, mt = this.nodes[tt.toIndex].position;
        ut(this.velocities[tt.index], Dt, mt, tt.segmentMs, qt, Vt), ut(this.velocities[tt.toIndex], Dt, mt, tt.segmentMs, qt, Ot);
        const dt = tt.u;
        for (let jt = 0; jt < 3; jt++) et[jt] = qt ? bt(Dt[jt], Vt[jt], mt[jt], Ot[jt], dt) : Dt[jt] + (mt[jt] - Dt[jt]) * dt
      }
      fovAt(tt, et) {
        var Vt;
        return null !== (Vt = this.nodes[tt].keyframe.fov) && void 0 !== Vt ? Vt : et
      }
      neighbour(tt, et) {
        const Vt = this.nodes.length - 1,
          Ot = tt + et;
        return Ot >= 0 && Ot <= Vt ? Ot : this.loopMs <= 0 || Vt < 2 ? -1 : Ot < 0 ? Vt - 1 : 1
      }
      gapMs(tt, et) {
        const Vt = this.nodes.length - 1;
        if (1 === et) {
          const et = tt === Vt ? 0 : tt;
          return this.nodes[et + 1].timeMs - this.nodes[et].timeMs
        }
        const Ot = 0 === tt ? Vt : tt;
        return this.nodes[Ot].timeMs - this.nodes[Ot - 1].timeMs
      }
    }
    class Pt {
      constructor(tt) {
        this.sQ = tt, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = et => tt.getEntityPosition(et), this.readAimPoint = et => tt.getEntityAimPoint(et)
      }
      aimPoint(tt) {
        return "string" !== typeof tt ? (0, jt.o)(tt, 3) ? tt : null : this.resolve(tt, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(tt) {
        const et = "string" === typeof tt ? this.sQ.getEntityAimPoint(tt) : tt;
        return et && (0, jt.o)(et, 3) ? et : null
      }
      feetPosition(tt) {
        return this.resolve(tt, this.readFeet, this.lastFeet)
      }
      heading(tt) {
        const et = this.sQ.getEntityHeading(tt);
        if (null !== et && Number.isFinite(et)) return this.lastHeadings.set(tt, et), et;
        const Vt = this.lastHeadings.get(tt);
        return void 0 !== Vt ? Vt : tt === this.sQ.localPlayerId ? 0 : this.heading(this.sQ.localPlayerId)
      }
      resolve(tt, et, Vt) {
        const Ot = et(tt);
        let qt = Vt.get(tt);
        return Ot && (0, jt.o)(Ot, 3) ? (qt || (qt = [0, 0, 0], Vt.set(tt, qt)), qt[0] = Ot[0], qt[1] = Ot[1], qt[2] = Ot[2], qt) : qt || (tt === this.sQ.localPlayerId ? null : this.resolve(this.sQ.localPlayerId, et, Vt))
      }
    }

    function Zt(tt) {
      return {
        heading: tt.heading,
        pitch: tt.pitch
      }
    }

    function Lt(tt, et) {
      Number.isFinite(tt.heading) && Number.isFinite(tt.pitch) || (0, qt.i)(et, tt)
    }

    function Ft(tt, et, Vt, Ot, Dt) {
      if (et) return void(0, qt.l)(et, Dt);
      const mt = Ot.aimPoint(Vt);
      mt && (0, qt.o)(tt, mt, Dt)
    }
    class kt {
      constructor(tt, et, Vt, Ot) {
        this.settings = tt, this.sQ = et, this.targets = Vt, this.base = void 0, this.base = Zt(Ot)
      }
      update(tt, et, Vt) {
        var Ot;
        const qt = this.settings;
        (0, jt.h)(qt.position, Vt.position), Ft(qt.position, qt.lookDirection, null !== (Ot = qt.lookAt) && void 0 !== Ot ? Ot : this.sQ.localPlayerId, this.targets, this.base), et.apply(this.base, Vt), Vt.fov = Et(qt, this.sQ)
      }
      continueFrom(tt) {
        tt instanceof kt && (0, qt.i)(tt.base, this.base)
      }
      reset(tt) {
        Lt(this.base, tt)
      }
    }
    class Gt {
      constructor(tt, et, Vt, Ot) {
        this.settings = tt, this.sQ = et, this.targets = Vt, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Dy = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = Zt(Ot), this.goal = [...Ot.position]
      }
      update(tt, et, Vt) {
        var Ot, qt, Dt;
        const mt = this.settings,
          dt = null !== (Ot = mt.target) && void 0 !== Ot ? Ot : this.sQ.localPlayerId,
          Ht = this.targets.feetPosition(dt);
        let Xt = !1;
        Ht && (Xt = this.foundFeet && Ct(this.lastFeet, Ht) > 32 + .1 * tt, (0, jt.h)(Ht, this.lastFeet), this.foundFeet = !0, this.placeGoal(Ht, dt));
        const Qt = null !== (qt = mt.smoothMs) && void 0 !== qt ? qt : 0;
        !this.started || Qt < 1 || Xt ? ((0, jt.h)(this.goal, this.smoothed), this.Dy.fill(0), this.started = !0) : ft(this.smoothed, this.Dy, this.goal, Qt, tt), Xt && (this.distance = -1), (0, jt.h)(this.smoothed, Vt.position);
        const lt = !0 === mt.avoidTerrain ? this.pullIn(dt, tt, Vt) : 1;
        let wt = this.goal;
        if ("target" === mt.offsetSpace) wt = Vt.position;
        else if (lt < 1) {
          wt = this.aimOrigin;
          for (let tt = 0; tt < 3; tt++) wt[tt] = Vt.position[tt] + (this.goal[tt] - this.smoothed[tt]) * lt
        }
        Ft(wt, mt.lookDirection, null !== (Dt = mt.lookAt) && void 0 !== Dt ? Dt : dt, this.targets, this.base), et.apply(this.base, Vt), Vt.fov = Et(mt, this.sQ)
      }
      continueFrom(tt) {
        tt instanceof Gt && (0, Ot.t)(tt.settings.target, this.settings.target) && ((0, qt.i)(tt.base, this.base), (0, jt.h)(tt.goal, this.goal), (0, jt.h)(tt.lastFeet, this.lastFeet), this.foundFeet = tt.foundFeet, (0, jt.h)(tt.smoothed, this.smoothed), (0, jt.h)(tt.Dy, this.Dy), this.started = tt.started, !0 === tt.settings.avoidTerrain && (this.distance = tt.distance))
      }
      reset(tt) {
        Lt(this.base, tt), this.Dy.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(tt, et, Vt) {
        const Ot = this.targets.aimPoint(tt);
        if (!Ot) return 1;
        const qt = Vt.position,
          Dt = Ct(Ot, qt);
        if (!(Dt > 0)) return 1;
        const mt = this.toCamera;
        for (let jt = 0; jt < 3; jt++) mt[jt] = (qt[jt] - Ot[jt]) / Dt;
        const dt = function(tt, et, Vt) {
          return tt < 0 || et < tt ? et : et + (tt - et) * Math.exp(-Vt / 150)
        }(this.distance, function(tt, et, Vt, Ot) {
          const qt = tt.raycastTerrain(et, Vt, Ot);
          return null !== qt && Number.isFinite(qt) ? Math.min(Ot, Math.max(0, qt - .2)) : Ot
        }(this.sQ, Ot, mt, Dt), et);
        if (Dt - dt < .001) return this.distance = -1, 1;
        this.distance = dt;
        for (let jt = 0; jt < 3; jt++) qt[jt] = Ot[jt] + mt[jt] * dt;
        return dt / Dt
      }
      placeGoal(tt, et) {
        const Vt = this.settings.offset;
        let Ot = Vt[0],
          qt = Vt[2];
        if ("target" === this.settings.offsetSpace) {
          const tt = this.targets.heading(et),
            Dt = Math.cos(tt),
            mt = Math.sin(tt);
          Ot = Vt[0] * Dt + Vt[2] * mt, qt = -Vt[0] * mt + Vt[2] * Dt
        }
        this.goal[0] = tt[0] + Ot, this.goal[1] = tt[1] + Vt[1], this.goal[2] = tt[2] + qt
      }
    }
    class zt {
      constructor(tt, et, Vt, Ot) {
        var qt, Dt;
        this.settings = tt, this.sQ = et, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = tt.keyframes.length > 0 ? new It(tt.keyframes, null === (qt = tt.smooth) || void 0 === qt || qt, null !== (Dt = tt.loop) && void 0 !== Dt && Dt) : null, this.base = (0, jt.g)(Ot, (0, jt.k)()), this.resolveTarget = tt => Vt.aimPoint(tt)
      }
      update(tt, et, Vt) {
        this.elapsedMs += tt;
        const Ot = Et(this.settings, this.sQ);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Ot, this.base) : this.base.fov = Ot, (0, jt.h)(this.base.position, Vt.position), Vt.fov = this.base.fov, et.apply(this.base, Vt)
      }
      continueFrom(tt) {
        tt instanceof zt && (0, Ot.t)(tt.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = tt.elapsedMs, (0, jt.g)(tt.base, this.base))
      }
      reset(tt) {
        Lt(this.base, tt), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function ot(tt, et) {
      return (0, Ot.x)(tt, et)
    }
    class rt {
      constructor(tt, et, Vt) {
        var Ot;
        this.settings = tt, this.sQ = et, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const qt = null !== Vt && Vt.settings.mode === tt.mode,
          Dt = qt ? Vt.pose : et.getDefaultPose();
        this.pose = (0, jt.g)(Dt, (0, jt.k)()), this.lastGoodPose = (0, jt.g)(qt ? Vt.lastGoodPose : Dt, (0, jt.k)()), this.look = new yt(tt.playerLook), this.targets = null !== (Ot = null === Vt || void 0 === Vt ? void 0 : Vt.targets) && void 0 !== Ot ? Ot : new Pt(et);
        const mt = (0, jt.g)(Dt, (0, jt.k)());
        qt && Vt.look.unapply(mt, mt), this.mode = function(tt, et, Vt, Ot) {
          switch (tt.mode) {
            case "fixed":
              return new kt(tt, et, Vt, Ot);
            case "follow":
              return new Gt(tt, et, Vt, Ot);
            case "path":
              return new zt(tt, et, Vt, Ot);
            case "frame":
              return new wt(tt, et, Vt, Ot)
          }
        }(tt, et, this.targets, mt), qt && (this.look.continueFrom(Vt.look), this.mode.continueFrom(Vt.mode))
      }
      update(tt, et) {
        return this.look.update(tt, et), this.mode.update(tt, this.look, this.pose), (0, jt.l)(this.pose) ? (0, jt.g)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, jt.g)(this.lastGoodPose, this.pose), this.mode.reset((0, jt.l)(this.lastGoodPose) ? this.lastGoodPose : this.sQ.getDefaultPose())), this.pose
      }
    }

    function Ut(tt) {
      return [0, 0, tt[2], tt[3]]
    }
    class At {
      constructor(tt) {
        this.sQ = tt, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new dt, this.shot = null, this.blend = null, this.mixed = (0, jt.k)(), this.output = (0, jt.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(tt) {
        const et = (0, Ht.c)(tt);
        if ((0, Ot.t)(et, this.pending ? this.pending.settings : this.settings)) return;
        const Vt = ot(this.settings, et);
        if (void 0 !== et.transition && !Vt) return this.pending = {
          settings: et,
          shot: "default" === et.mode ? null : new rt(et, this.sQ, null)
        }, void this.fade.fadeOut(et.transition);
        const qt = null !== this.pending;
        this.pending = null, !qt && Vt || this.fade.fadeIn(Ot.j.minTransitionFadeMs), this.show(et, !1)
      }
      show(tt, et) {
        var Vt, qt;
        if ((0, Ot.t)(tt, this.settings)) return;
        const mt = !et && ot(this.settings, tt);
        this.settings = tt;
        const dt = null !== this.blend && this.blend.elapsedMs > 0,
          Ht = (0, jt.g)(this.hasOutput ? this.output : this.sQ.getDefaultPose(), (0, jt.k)());
        if (this.shot = "default" === tt.mode ? null : new rt(tt, this.sQ, et ? null : this.shot), mt) return;
        const Xt = et || !this.shot && !this.hasOutput ? 0 : null !== (Vt = tt.blendInMs) && void 0 !== Vt ? Vt : 0;
        if (Xt <= 0) return void(this.blend = null);
        const Qt = (0, Dt.r)(null !== (qt = tt.blendEasing) && void 0 !== qt ? qt : "easeInOut");
        this.blend = {
          from: Ht,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Xt,
          easing: dt ? Ut(Qt) : Qt
        }
      }
      getSettings() {
        return this.settings
      }
      getScreenFade() {
        return this.fade.getScreen()
      }
      getLoadingPositions() {
        return this.loadingPositions
      }
      isActive() {
        return null !== this.shot || null !== this.blend
      }
      update(tt, et) {
        const Vt = Number.isFinite(tt) && tt > 0 ? tt : 0;
        if (this.fade.advance(Vt) && null !== this.pending) {
          const {
            settings: tt
          } = this.pending;
          this.pending = null, this.show(tt, !0)
        }
        this.loadingPositions.length = 0;
        const Ot = this.pending;
        if (null !== Ot && void 0 !== Ot && Ot.shot) {
          const tt = "path" === Ot.settings.mode ? 0 : Vt;
          this.noteLoadingPosition(Ot.shot.update(tt, jt.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const mt = this.shot ? this.shot.update(Vt, et) : this.sQ.getDefaultPose();
        this.shot && this.noteLoadingPosition(mt.position);
        const dt = this.blend;
        if (!dt) return this.writeOutput(mt);
        dt.elapsedMs += Vt;
        const Ht = Math.min(1, dt.elapsedMs / dt.durationMs);
        if (dt.headingDelta = Number.isFinite(dt.headingDelta) ? (0, qt.u)(dt.headingDelta, mt.heading - dt.from.heading) : (0, qt.s)(dt.from.heading, mt.heading), (0, jt.p)(dt.from, mt, dt.headingDelta, (0, Dt.p)(Ht, dt.easing), this.mixed), Ht >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else dt.fromScripted && this.noteLoadingPosition(dt.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(tt) {
        if (tt.every(Number.isFinite)) {
          const et = this.loadingPositions;
          et.push((0, jt.h)(tt, this.loadingSlots[et.length]))
        }
      }
      writeOutput(tt) {
        const et = this.output;
        (0, jt.l)(tt) ? (0, jt.g)(tt, et) : this.hasOutput || (0, jt.g)(this.sQ.getDefaultPose(), et), et.pitch = (0, qt.g)(et.pitch);
        const Vt = this.sQ.getDefaultFov(),
          Dt = Number.isFinite(Vt) && Vt > 0 && Vt < 180,
          mt = Dt ? Math.min(Ot.j.minFov, Vt) : Ot.j.minFov,
          dt = Dt ? Math.max(Ot.j.maxFov, Vt) : Ot.j.maxFov;
        return et.fov = Number.isFinite(et.fov) ? Math.min(dt, Math.max(mt, et.fov)) : dt, this.hasOutput = !0, et
      }
    }
  },
  39375: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt,
      g: () => dt,
      h: () => mt,
      k: () => Dt,
      l: () => Ht,
      o: () => jt,
      p: () => Xt
    });
    var Ot = Vt(39378);
    const qt = {
      JR: 0,
      uR: 0
    };

    function Dt() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function mt(tt, et) {
      return et[0] = tt[0], et[1] = tt[1], et[2] = tt[2], et
    }

    function dt(tt, et) {
      return mt(tt.position, et.position), et.heading = tt.heading, et.pitch = tt.pitch, et.fov = tt.fov, et
    }

    function jt(tt, et) {
      return Array.isArray(tt) && tt.length === et && tt.every(Number.isFinite)
    }

    function Ht(tt) {
      return jt(tt.position, 3) && Number.isFinite(tt.heading) && Number.isFinite(tt.pitch) && Number.isFinite(tt.fov)
    }

    function Xt(tt, et, Vt, qt, Dt) {
      for (let Ot = 0; Ot < 3; Ot++) Dt.position[Ot] = tt.position[Ot] + (et.position[Ot] - tt.position[Ot]) * qt;
      return Dt.heading = (0, Ot.r)(tt.heading + Vt * qt), Dt.pitch = tt.pitch + (et.pitch - tt.pitch) * qt, Dt.fov = tt.fov + (et.fov - tt.fov) * qt, Dt
    }
  },
  39406: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Kt,
      e: () => lt
    });
    var Ot = Vt(39398),
      qt = Vt(39375);
    const Dt = Ot.i,
      mt = Ot.m;

    function dt(tt, et, Vt, Ot) {
      return Number.isFinite(tt) ? Math.min(Vt, Math.max(et, tt)) : Ot
    }

    function jt(tt, et, Vt) {
      return void 0 !== tt && Number.isFinite(tt) ? Math.min(Vt, Math.max(et, tt)) : void 0
    }

    function Ht(tt) {
      const et = Ot.j.maxCoordinate;
      return [Math.min(et, Math.max(-et, tt[0])), Math.min(et, Math.max(-et, tt[1])), Math.min(et, Math.max(-et, tt[2]))]
    }

    function Xt(tt) {
      return "string" === typeof tt ? tt : (0, qt.o)(tt, 3) ? Ht(tt) : void 0
    }
    const Qt = new RegExp(Ot.p);

    function lt(tt) {
      return "string" === typeof tt && Qt.test(tt)
    }

    function Et(tt) {
      const et = [];
      if (!Array.isArray(tt)) return et;
      for (const Vt of tt.slice(0, Ot.j.maxFrameTargets)) {
        const tt = Xt(Vt);
        void 0 === tt || "string" === typeof tt && !lt(tt) || et.push(tt)
      }
      return et
    }

    function ft(tt) {
      if (!(0, qt.o)(tt, 3)) return;
      const et = Math.max(Math.abs(tt[0]), Math.abs(tt[1]), Math.abs(tt[2])),
        Vt = Math.hypot(tt[0] / et, tt[1] / et, tt[2] / et);
      return 0 === et || et * Vt < Ot.j.minDirectionLength ? void 0 : [tt[0] / et / Vt, tt[1] / et / Vt, tt[2] / et / Vt]
    }

    function wt(tt) {
      if (void 0 !== tt) return "string" === typeof tt ? Dt.includes(tt) ? tt : void 0 : (0, qt.o)(tt, 4) ? [dt(tt[0], 0, 1, 0), dt(tt[1], Ot.j.minEasingY, Ot.j.maxEasingY, 0), dt(tt[2], 0, 1, 1), dt(tt[3], Ot.j.minEasingY, Ot.j.maxEasingY, 1)] : "linear"
    }

    function yt(tt) {
      if (tt) return {
        maxYaw: dt(tt.maxYaw, 0, Ot.j.maxPlayerLook, 0),
        maxPitch: dt(tt.maxPitch, 0, Ot.j.maxPlayerLook, 0),
        returnMs: jt(tt.returnMs, 0, Ot.j.maxReturnMs)
      }
    }
    const Nt = new RegExp(Ot.d);

    function Mt(tt) {
      var et;
      if ("object" !== typeof tt || null === tt) return;
      const Vt = Ot.j.maxTransitionMs,
        qt = Ot.j.minTransitionFadeMs;
      return {
        colour: "string" === typeof tt.colour && Nt.test(tt.colour) ? tt.colour : Ot.g,
        outMs: dt(tt.outMs, qt, Vt, qt),
        holdMs: dt(null !== (et = tt.holdMs) && void 0 !== et ? et : 0, 0, Vt, 0),
        inMs: dt(tt.inMs, qt, Vt, qt)
      }
    }

    function bt(tt) {
      return !0 === tt || void 0
    }

    function Jt(tt) {
      if ("object" !== typeof tt || null === tt) return !1;
      const et = tt.lookAt;
      return Number.isFinite(tt.timeMs) && (0, qt.o)(tt.position, 3) && (void 0 === et || "string" === typeof et || (0, qt.o)(et, 3))
    }

    function Ct(tt) {
      return {
        ...tt,
        timeMs: dt(tt.timeMs, 0, Ot.j.maxPathMs, 0),
        position: Ht(tt.position),
        lookAt: Xt(tt.lookAt),
        lookDirection: ft(tt.lookDirection),
        fov: jt(tt.fov, Ot.j.minFov, Ot.j.maxFov),
        easing: wt(tt.easing)
      }
    }

    function ut(tt) {
      const et = [];
      if (!Array.isArray(tt)) return et;
      for (const Vt of tt.slice(0, Ot.j.maxKeyframes)) {
        if (!Jt(Vt)) continue;
        const tt = Ct(Vt);
        (0 === et.length || tt.timeMs > et[et.length - 1].timeMs) && et.push(tt)
      }
      return et
    }

    function Kt(tt) {
      if ("object" !== typeof tt || null === tt) return {
        mode: "default"
      };
      const et = {
          blendInMs: jt(tt.blendInMs, 0, Ot.j.maxBlendInMs),
          blendEasing: wt(tt.blendEasing),
          transition: Mt(tt.transition),
          letterbox: bt(tt.letterbox),
          hideHud: bt(tt.hideHud)
        },
        Vt = {
          mode: "default",
          ...et
        };
      if ("default" === tt.mode || "fixed" === tt.mode && !(0, qt.o)(tt.position, 3)) return Vt;
      const Dt = {
        ...et,
        fov: jt(tt.fov, Ot.j.minFov, Ot.j.maxFov),
        playerFacing: (Qt = tt.playerFacing, mt.includes(Qt) ? Qt : void 0),
        playerLook: yt(tt.playerLook)
      };
      var Qt, lt;
      switch (tt.mode) {
        case "fixed":
          return {
            ...tt, ...Dt, position: Ht(tt.position), lookAt: Xt(tt.lookAt), lookDirection: ft(tt.lookDirection)
          };
        case "follow":
          return {
            ...tt, ...Dt, target: "string" === typeof tt.target ? tt.target : void 0, lookAt: Xt(tt.lookAt), offset: (lt = tt.offset, Array.isArray(lt) ? [dt(lt[0], -Ot.j.maxOffset, Ot.j.maxOffset, 0), dt(lt[1], -Ot.j.maxOffset, Ot.j.maxOffset, 0), dt(lt[2], -Ot.j.maxOffset, Ot.j.maxOffset, 0)] : [0, 0, 0]), lookDirection: ft(tt.lookDirection), smoothMs: jt(tt.smoothMs, 0, Ot.j.maxSmoothMs)
          };
        case "path":
          return {
            ...tt, ...Dt, keyframes: ut(tt.keyframes)
          };
        case "frame":
          return {
            ...tt, ...Dt, targets: Et(tt.targets), viewHeading: jt(tt.viewHeading, -Ot.j.maxFrameHeading, Ot.j.maxFrameHeading), viewElevation: jt(tt.viewElevation, 0, Ot.j.maxFrameElevation), padding: jt(tt.padding, 0, Ot.j.maxFrameDistance), closestDistance: jt(tt.closestDistance, 0, Ot.j.maxFrameDistance), furthestDistance: jt(tt.furthestDistance, 0, Ot.j.maxFrameDistance), smoothMs: jt(tt.smoothMs, 0, Ot.j.maxSmoothMs)
          };
        default:
          return Vt
      }
    }
  },
  38876: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt
    });
    var Ot = Vt(1308);

    function qt(tt) {
      const et = /(\d*\.?\d+)px/.exec(tt);
      return et ? Number(et[1]) : null
    }

    function Dt(tt) {
      return tt.split(/[\s,]+/).pop()
    }
    let mt = !1;
    const dt = {
      debug: !1,
      align: "center",
      vAlign: "middle",
      fontSize: 14,
      fontWeight: "",
      fontStyle: "",
      fontVariant: "",
      font: "Arial",
      lineHeight: null,
      justify: !1,
      drawText: function(tt, et, Ot, dt, jt, Ht) {
        if (jt <= 0 || Ht <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Xt,
          fontVariant: Qt,
          fontWeight: lt,
          fontSize: Et,
          font: ft
        } = this, wt = [Xt, Qt, lt, `${Et}px`, ft].filter(Boolean).join(" "), yt = [
          [lt, `${Et}px`, Dt(ft)].filter(Boolean).join(" "), `${Et}px sans-serif`
        ], Nt = tt.font, Mt = function(tt, et, Vt) {
          for (const Ot of et) {
            tt.font = Ot;
            const et = qt(tt.font),
              mt = Dt(Ot);
            if (null !== et && Math.abs(et - Vt) <= .5 && tt.font.toLowerCase().includes(mt.toLowerCase())) return Ot
          }
          return null
        }(tt, [wt, ...yt], Et);
        Mt !== wt && function(tt, et, Ot) {
          mt || (mt = !0, Promise.resolve().then((() => Vt(1167))).then((Vt => {
            let {
              Nw: qt
            } = Vt;
            qt(new Error("A canvas didn't take canvasTxt's font"), {
              font: tt,
              hE: et,
              drawnWith: null !== Ot && void 0 !== Ot ? Ot : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(wt, Nt, Mt);
        const bt = qt(tt.font);
        if (null === Mt && null !== bt && bt > 0) {
          const Vt = Et / bt;
          tt.save();
          try {
            return tt.scale(Vt, Vt), {
              height: this.drawLines(tt, et, Ot / Vt, dt / Vt, jt / Vt, Ht / Vt, bt).height * Vt
            }
          } finally {
            tt.restore()
          }
        }
        return this.drawLines(tt, et, Ot, dt, jt, Ht, Et)
      },
      drawLines: function(tt, et, Vt, qt, Dt, mt, dt) {
        const jt = Vt + Dt,
          Ht = qt + mt;
        let Xt, Qt = qt + mt / 2 + dt / 2;
        "right" === this.align ? (Xt = jt, tt.textAlign = "right") : "left" === this.align ? (Xt = Vt, tt.textAlign = "left") : (Xt = Vt + Dt / 2, tt.textAlign = "center");
        for (const Ot of et) {
          tt.measureText(Ot).width >= Dt && (et = et.replace(Ot, ""))
        }
        et = (0, Ot.W)(et);
        const lt = [],
          Et = et.split("\n"),
          ft = this.justify ? tt.measureText("\u200a").width : 0;
        Et.forEach((et => {
          let Vt = tt.measureText(et).width;
          if (Vt <= Dt) lt.push(et);
          else {
            let Ot = et;
            const qt = Dt;
            let mt, dt, jt;
            for (Vt = tt.measureText(Ot).width; Vt > qt;) {
              for (mt = 0, dt = 0, jt = ""; dt < qt;) mt++, jt = Ot.substr(0, mt), dt = tt.measureText(jt).width;
              mt--, jt = jt.substr(0, mt);
              const et = mt;
              if (" " !== Ot.substr(mt, 1)) {
                for (;
                  " " !== Ot.substr(mt, 1) && 0 !== mt;) mt--;
                0 === mt && (mt = et), jt = Ot.substr(0, mt)
              }
              jt = this.justify ? this.justifyLine(tt, jt, ft, "\u200a", Dt) : jt, Ot = Ot.substr(mt), Vt = tt.measureText(Ot).width, lt.push(jt)
            }
            Vt > 0 && lt.push(Ot)
          }
        }));
        const wt = this.lineHeight ? this.lineHeight : this.getTextHeight(tt, et),
          yt = wt * (lt.length - 1),
          Nt = yt / 2;
        let Mt = qt;
        "top" === this.vAlign ? Qt = qt + dt : "bottom" === this.vAlign ? (Qt = Ht - yt, Mt = Ht) : (Mt = qt + mt / 2, Qt -= Nt), lt.forEach((et => {
          et = et.trim(), tt.fillText(et, Xt, Qt), Qt += wt
        })), this.debug && (tt.lineWidth = 3, tt.strokeStyle = "#00909e", tt.strokeRect(Vt, qt, Dt, mt), tt.lineWidth = 2, tt.strokeStyle = "#f6d743", tt.beginPath(), tt.moveTo(Xt, qt), tt.lineTo(Xt, Ht), tt.stroke(), tt.strokeStyle = "#ff6363", tt.beginPath(), tt.moveTo(Vt, Mt), tt.lineTo(jt, Mt), tt.stroke());
        return {
          height: yt + wt
        }
      },
      getTextHeight: function(tt, et) {
        const Vt = tt.textBaseline;
        tt.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Ot
        } = tt.measureText(et);
        return tt.textBaseline = Vt, Ot
      },
      justifyLine: function(tt, et, Vt, Ot, qt) {
        const Dt = et.trim(),
          mt = tt.measureText(Dt).width,
          dt = Dt.split(/\s+/).length - 1,
          jt = Math.floor((qt - mt) / Vt);
        if (dt <= 0 || jt <= 0) return Dt;
        const Ht = Math.floor(jt / dt);
        let Xt = jt - dt * Ht,
          Qt = [];
        for (let lt = 0; lt < Ht; lt++) Qt.push(Ot);
        Qt = Qt.join("");
        return Dt.replace(/\s+/g, (tt => {
          const et = Xt > 0 ? Qt + Ot : Qt;
          return Xt--, tt + et
        }))
      }
    }
  },
  39338: (tt, et, Vt) => {
    function Ot(tt, et) {
      return et.set(tt), et
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  38879: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => wt,
      e: () => ft,
      h: () => lt,
      k: () => Xt,
      n: () => Qt
    });
    var Ot = Vt(4339),
      qt = Vt(391);
    const Dt = 1024,
      mt = 1536,
      dt = 2 * Ot.j + 1,
      jt = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Ht = 1.5;

    function Xt(tt, et, Vt) {
      if ("string" !== typeof tt) return et;
      try {
        const Vt = JSON.parse(tt);
        return Vt && "object" === typeof Vt ? Vt : et
      } catch (Ot) {
        return void 0 !== Vt && console.error(`Couldn't parse ${Vt}`, Ot), et
      }
    }

    function Qt(tt) {
      return Xt(tt, null, "a leaderboard's rows")
    }

    function lt(tt, et) {
      var Vt, Ot;
      return null !== et && void 0 !== et ? et : {
        status: null !== (Vt = tt.status) && void 0 !== Vt ? Vt : "loading",
        entries: null !== (Ot = tt.entries) && void 0 !== Ot ? Ot : []
      }
    }

    function Et(tt, et) {
      return "number" === typeof tt && Number.isFinite(tt) && tt > 0 ? tt : et
    }

    function ft(tt, et) {
      const Vt = Et(tt.size, 1);
      let Ot = Et(tt.width, Et(2.5 * Vt, 2.5)),
        qt = Et(tt.height, Et(3.75 * Vt, 3.75));
      Number.isFinite(Dt * qt / Ot) && Number.isFinite(mt * Ot / qt) || (Ot = 2.5, qt = 3.75);
      const dt = qt / Ot,
        jt = Math.max(1, Math.min(Dt, et / dt));
      return {
        width: Ot,
        height: qt,
        layoutWidth: Math.max(Dt, mt / dt),
        layoutHeight: Math.max(mt, Dt * dt),
        pixelWidth: Math.round(jt),
        pixelHeight: Math.round(Math.max(1, Math.min(et, jt * dt)))
      }
    }

    function wt(tt, et, Vt, mt, Xt, Qt) {
      tt.setTransform(1, 0, 0, 1, 0, 0), tt.fillStyle = qt.P.defaultNameTagBackground, tt.fillRect(0, 0, et, Vt), tt.scale(et / mt.layoutWidth, Vt / mt.layoutHeight), tt.translate((mt.layoutWidth - Dt) / 2, 0),
        function(tt, et, Vt, Dt) {
          var mt, Xt, Qt, lt;
          const {
            top: Et,
            around: ft,
            showPlayerText: wt,
            localPlayerDbId: Mt
          } = Vt, {
            whiteUiText: bt,
            grayUiText: Jt,
            yellowUiText: Ct
          } = qt.P;
          tt.textBaseline = "middle";
          const ut = function(et, Vt, Ot, qt, Dt, mt) {
              let dt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              tt.font = `bold ${qt}px 'Jetbrains Mono', monospace`, tt.fillStyle = Dt, tt.textAlign = dt;
              let jt = et.replace(/[\r\n\t]/g, " ");
              if (tt.measureText(jt).width > mt) {
                for (; jt.length > 0 && tt.measureText(`${jt}\u2026`).width > mt;) jt = jt.slice(0, -1);
                jt += "\u2026"
              }
              tt.fillText(jt, Vt, Ot)
            },
            Kt = et => {
              tt.fillStyle = bt, tt.globalAlpha = .15, tt.fillRect(24, et, 976, 2), tt.globalAlpha = 1
            },
            ht = null === Mt ? null : (0, qt.uc)(Mt),
            vt = tt => null !== ht && tt.playerHash === ht,
            Wt = yt(Et.entries, Ot.m),
            St = "ready" === Et.status && Wt.length > 0,
            ct = null === ft ? [] : yt(ft.entries, dt),
            Rt = Wt.some(vt),
            It = null === ft ? null : function(tt) {
              const et = tt;
              if (!et || !Number.isFinite(et.rank) || !Number.isFinite(et.tied) || !Number.isFinite(et.total)) return null;
              return et
            }(ft.standing),
            Pt = ct.find(vt),
            Zt = Wt.find(vt),
            Lt = null === It || void 0 === Pt ? null : {
              value: Pt.value,
              rank: It.rank
            },
            Ft = Nt(Wt, void 0 === Zt || Zt.value === (null === Lt || void 0 === Lt ? void 0 : Lt.value) ? Lt : null),
            kt = Nt(ct, Lt),
            Gt = (tt, et) => {
              const Vt = tt.findIndex(vt);
              return Vt >= 0 ? et[Vt] : null
            },
            zt = null !== (mt = null !== (Xt = null === It || void 0 === It ? void 0 : It.rank) && void 0 !== Xt ? Xt : Gt(ct, kt)) && void 0 !== mt ? mt : Gt(Wt, Ft);
          tt.font = "bold 34px 'Jetbrains Mono', monospace";
          const ot = [...St ? Ft : [], ...Rt ? [] : kt],
            rt = Math.min(280, Math.max(0, ...ot.map((et => tt.measureText(jt.format(et)).width)))),
            Ut = rt <= 80,
            At = Ut ? 80 : 32 + rt,
            it = Ut ? 148 : At + 28,
            Yt = 660 - it;
          ut(`TOP ${Ot.m}  /  ALL TIME`, 24, 52, 28, Jt, 976), ut(wt ? String(null !== (Qt = et.title) && void 0 !== Qt ? Qt : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, bt, 976), ut("RANK", 32, 174, 28, Jt, it - 40), ut("PLAYER", it, 174, 28, Jt, Yt), ut(wt ? String(null !== (lt = et.scoreLabel) && void 0 !== lt ? lt : "Score").slice(0, 24) : "Score", 992, 174, 28, Jt, 304, "right"), Kt(202);
          const Bt = (Dt - 232) / (Ot.m + Ht + dt),
            pt = 208 + Ot.m * Bt,
            xt = pt + Ht * Bt,
            Tt = (et, Vt, Ot, qt) => {
              const Dt = vt(et);
              tt.fillStyle = Dt ? Ct : bt, tt.globalAlpha = Dt ? .15 : qt ? .035 : 0, tt.fillRect(24, Ot - Bt / 2 + 1, 976, Bt - 2), tt.globalAlpha = 1;
              const mt = Dt ? Ct : bt;
              ut(jt.format(Vt), At, Ot, 34, mt, Ut ? 80 : rt, Ut ? "center" : "right"), ut(wt ? String(et.name).slice(0, 64) : "Player", it, Ot, 34, mt, Yt);
              const dt = jt.format(et.value);
              ut(tt.measureText(dt).width > 304 ? et.value.toExponential(6) : dt, 992, Ot, 34, mt, 304, "right")
            };
          if (St)
            for (const [Ot, qt] of Wt.entries()) Tt(qt, Ft[Ot], 208 + (Ot + .5) * Bt, Ot % 2 === 0);
          else {
            const tt = "error" === Et.status,
              et = tt ? "Couldn't load leaderboard" : "ready" === Et.status ? "No scores yet" : "Loading leaderboard\u2026",
              Vt = tt ? "Trying again shortly" : "ready" === Et.status ? "Be the first on the board!" : "Fetching the top players",
              Ot = (208 + pt) / 2;
            ut(et, 512, Ot - 28, 40, tt ? qt.P.redUiText : bt, 960, "center"), ut(Vt, 512, Ot + 27, 30, Jt, 960, "center")
          }
          const gt = pt + Ht * Bt / 2;
          if (null === zt) Kt(gt);
          else {
            const et = null === It ? 0 : It.tied - 1,
              Vt = `YOUR RANK #${jt.format(zt)}${null===It?"":` of ${jt.format(It.total)}`}`;
            tt.font = "bold 36px 'Jetbrains Mono', monospace";
            const Ot = Math.max(20, Math.min(36, Math.floor(34560 / tt.measureText(Vt).width)));
            ut(Vt, 512, gt - (et > 0 ? 15 : 0), Ot, Ct, 960, "center"), et > 0 && ut(`Tied with ${jt.format(et)} other${1===et?"":"s"}`, 512, gt + 24, 24, Jt, 960, "center")
          }
          if (null === ft) return;
          const st = xt + dt * Bt / 2;
          if (Rt) ut(`You're in the top ${Ot.m}!`, 512, st, 40, Ct, 960, "center");
          else if (0 === ct.length) ut("You're not on this board yet", 512, st, 34, Jt, 960, "center");
          else
            for (const [Ot, qt] of ct.entries()) Tt(qt, kt[Ot], xt + (Ot + .5) * Bt, Ot % 2 === 0)
        }(tt, Xt, Qt, mt.layoutHeight)
    }

    function yt(tt, et) {
      return Array.isArray(tt) ? tt.slice(0, et).filter((tt => tt && Number.isFinite(tt.rank) && Number.isFinite(tt.value))) : []
    }

    function Nt(tt, et) {
      const Vt = [];
      let Ot = !1;
      return tt.forEach(((qt, Dt) => {
        if (null !== et && qt.value === et.value) return void Vt.push(et.rank);
        const mt = Dt > 0 && qt.value === tt[Dt - 1].value;
        mt || (Ot = 0 === Dt && 1 !== qt.rank), Vt.push(mt && !Ot ? Vt[Dt - 1] : qt.rank)
      })), Vt
    }
  },
  39070: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      i: () => Dt
    });
    const Ot = 32;

    function qt(tt) {
      return Array.from(tt).length
    }

    function Dt(tt) {
      const et = [""];
      let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        qt = "";
      const Dt = () => {
        et.push(""), Vt = 0, qt = ""
      };
      for (const mt of tt.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(mt)) Dt();
        else if (/^\s+$/.test(mt)) qt += mt;
      else if (mt.length > 0) {
        const tt = Array.from(mt);
        Vt > 0 && Vt + qt.length + tt.length > Ot && Dt(), et[et.length - 1] += qt, Vt += qt.length, qt = "";
        for (const qt of tt) Vt >= Ot && Dt(), et[et.length - 1] += qt, Vt++
      }
      return et[et.length - 1] += qt, et
    }
  },
  39334: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt
    });
    var Ot = Vt(36885),
      qt = Vt.n(Ot);
    const Dt = [1, 1, 1];

    function mt(tt) {
      if (!tt) return [...Dt];
      try {
        const [et, Vt, Ot] = qt()(tt).rgb().array();
        return [et / 255, Vt / 255, Ot / 255]
      } catch (et) {
        return console.warn(`Invalid groundArrowPath colour "${tt}":`, et), [...Dt]
      }
    }
  },
  39428: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt,
      f: () => Ht,
      h: () => jt
    });
    var Ot = Vt(340),
      qt = Vt(2984);
    const Dt = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      mt = 512;

    function dt(tt) {
      var et;
      const Vt = Math.min(screen.width, screen.height) * (null !== (et = (0, Ot.d)()) && void 0 !== et ? et : (0, qt.m)());
      return Math.max(window.innerHeight * (0, qt.m)(), Vt) / (0, qt.n)(tt)
    }

    function jt(tt, et, Vt) {
      return et / (2 * Math.tan(Vt / 2)) > mt ? tt : Ht(tt)
    }

    function Ht(tt) {
      return tt.map((tt => tt.replace(Dt, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34207: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      i: () => dt,
      k: () => mt,
      o: () => qt,
      q: () => Ot
    });
    const Ot = {
        default: {
          type: "earth",
          vertexTint: [137, 207, 240]
        },
        gloomy: {
          type: "custom",
          nx: "/textures/skyBoxes/gloomy/_nx.jpg",
          ny: "/textures/skyBoxes/gloomy/_ny.jpg",
          nz: "/textures/skyBoxes/gloomy/_nz.jpg",
          px: "/textures/skyBoxes/gloomy/_px.jpg",
          py: "/textures/skyBoxes/gloomy/_py.jpg",
          pz: "/textures/skyBoxes/gloomy/_pz.jpg"
        },
        interstellar: {
          type: "custom",
          nx: "/textures/skyBoxes/interstellar/_nx.jpg",
          ny: "/textures/skyBoxes/interstellar/_ny.jpg",
          nz: "/textures/skyBoxes/interstellar/_nz.jpg",
          px: "/textures/skyBoxes/interstellar/_px.jpg",
          py: "/textures/skyBoxes/interstellar/_py.jpg",
          pz: "/textures/skyBoxes/interstellar/_pz.jpg"
        },
        space_blue: {
          type: "custom",
          nx: "/textures/skyBoxes/space_blue/_nx.jpg",
          ny: "/textures/skyBoxes/space_blue/_ny.jpg",
          nz: "/textures/skyBoxes/space_blue/_nz.jpg",
          px: "/textures/skyBoxes/space_blue/_px.jpg",
          py: "/textures/skyBoxes/space_blue/_py.jpg",
          pz: "/textures/skyBoxes/space_blue/_pz.jpg"
        },
        space_lightblue: {
          type: "custom",
          nx: "/textures/skyBoxes/space_lightblue/_nx.jpg",
          ny: "/textures/skyBoxes/space_lightblue/_ny.jpg",
          nz: "/textures/skyBoxes/space_lightblue/_nz.jpg",
          px: "/textures/skyBoxes/space_lightblue/_px.jpg",
          py: "/textures/skyBoxes/space_lightblue/_py.jpg",
          pz: "/textures/skyBoxes/space_lightblue/_pz.jpg"
        },
        space_red: {
          type: "custom",
          nx: "/textures/skyBoxes/space_red/_nx.jpg",
          ny: "/textures/skyBoxes/space_red/_ny.jpg",
          nz: "/textures/skyBoxes/space_red/_nz.jpg",
          px: "/textures/skyBoxes/space_red/_px.jpg",
          py: "/textures/skyBoxes/space_red/_py.jpg",
          pz: "/textures/skyBoxes/space_red/_pz.jpg"
        },
        underwater: {
          type: "custom",
          nx: "/textures/skyBoxes/underwater/water.jpg",
          ny: "/textures/skyBoxes/underwater/water.jpg",
          nz: "/textures/skyBoxes/underwater/water.jpg",
          px: "/textures/skyBoxes/underwater/water.jpg",
          py: "/textures/skyBoxes/underwater/water.jpg",
          pz: "/textures/skyBoxes/underwater/water.jpg"
        },
        starry: {
          type: "custom",
          nx: "/textures/skyBoxes/starry/_nx.jpg",
          ny: "/textures/skyBoxes/starry/_ny.jpg",
          nz: "/textures/skyBoxes/starry/_nz.jpg",
          px: "/textures/skyBoxes/starry/_px.jpg",
          py: "/textures/skyBoxes/starry/_py.jpg",
          pz: "/textures/skyBoxes/starry/_pz.jpg"
        },
        space_red_2: {
          type: "custom",
          nx: "/textures/skyBoxes/space_red_2/_nx.jpg",
          ny: "/textures/skyBoxes/space_red_2/_ny.jpg",
          nz: "/textures/skyBoxes/space_red_2/_nz.jpg",
          px: "/textures/skyBoxes/space_red_2/_px.jpg",
          py: "/textures/skyBoxes/space_red_2/_py.jpg",
          pz: "/textures/skyBoxes/space_red_2/_pz.jpg"
        },
        space_white: {
          type: "custom",
          nx: "/textures/skyBoxes/space_white/_nx.jpg",
          ny: "/textures/skyBoxes/space_white/_ny.jpg",
          nz: "/textures/skyBoxes/space_white/_nz.jpg",
          px: "/textures/skyBoxes/space_white/_px.jpg",
          py: "/textures/skyBoxes/space_white/_py.jpg",
          pz: "/textures/skyBoxes/space_white/_pz.jpg"
        }
      },
      qt = "/textures/dayNight/sun.png",
      Dt = "/textures/dayNight/moon.png",
      mt = "/textures/dayNight/stars",
      dt = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39398: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt,
      g: () => Qt,
      i: () => Ot,
      j: () => jt,
      m: () => qt,
      p: () => Ht,
      t: () => dt,
      x: () => mt
    });
    const Ot = ["linear", "easeIn", "easeOut", "easeInOut"],
      qt = ["movement", "camera", "cursor"],
      Dt = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function mt(tt, et) {
      return dt(tt, et, Dt)
    }

    function dt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (tt === et || Number.isNaN(tt) && Number.isNaN(et)) return !0;
      if ("object" !== typeof tt || "object" !== typeof et || null === tt || null === et || Array.isArray(tt) !== Array.isArray(et)) return !1;
      const Ot = tt,
        qt = et;
      for (const Dt of new Set([...Object.keys(Ot), ...Object.keys(qt)]))
        if (!Vt.includes(Dt) && !dt(Ot[Dt], qt[Dt])) return !1;
      return !0
    }
    const jt = {
        maxBlendInMs: 1e4,
        minFov: 10,
        maxFov: 120,
        maxOffset: 128,
        maxSmoothMs: 5e3,
        maxReturnMs: 1e4,
        maxTransitionMs: 5e3,
        minTransitionFadeMs: 200,
        minFadeTurnMs: 333,
        maxPlayerLook: 180,
        maxKeyframes: 64,
        maxPathMs: 6e5,
        maxFrameTargets: 64,
        maxFrameDistance: 128,
        maxFrameHeading: 360,
        maxFrameElevation: 90,
        maxCoordinate: 1e6,
        minDirectionLength: 1e-6,
        minEasingY: -1,
        maxEasingY: 2
      },
      Ht = "^-[1-9][0-9]*$",
      Xt = "^#[0-9a-fA-F]{6}$",
      Qt = "#000000"
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);