export const id = 193;
export const ids = [193];
export const modules = {
  39310: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    class Op {
      constructor(pp, ip) {
        this.read = pp, this.apply = ip, this.release = null
      }
      turn(pp, ip) {
        const cp = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: ip,
          forcedCameraDirection: [pp[0], pp[1], pp[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), ip + 100),
          transitionMs: cp
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(pp) {
        null !== this.release && (clearTimeout(this.release.timer), pp && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38866: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      h: () => op
    });
    const Op = new Map;

    function op(pp, ip) {
      Op.set(pp, ip)
    }

    function Ip(pp) {
      return pp ? Op.get(pp) : void 0
    }
  },
  39818: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op
    });
    var Op = cp(38430);

    function op(pp, ip, cp) {
      var op, Ip, Sp, xp, Lp, Yp, Dp;
      const Ap = (0, Op.b)(pp, ip, cp[0], cp[1], cp[2]),
        Pp = Ap ? null !== (op = Ap.textCell) && void 0 !== op ? op : Ap.rect.anchor : cp,
        Wp = ip(Pp[0], Pp[1], Pp[2]);
      return {
        pos: [cp[0], cp[1], cp[2]],
        noticeboardSpan: Ap && {
          width: Ap.rect.width,
          height: Ap.rect.height
        },
        text: null !== (Ip = null === Wp || void 0 === Wp || null === (Sp = Wp.persisted) || void 0 === Sp || null === (xp = Sp.shared) || void 0 === xp ? void 0 : xp.text) && void 0 !== Ip ? Ip : "",
        textSize: null !== (Lp = null === Wp || void 0 === Wp || null === (Yp = Wp.persisted) || void 0 === Yp || null === (Dp = Yp.shared) || void 0 === Dp ? void 0 : Dp.textSize) && void 0 !== Lp ? Lp : null
      }
    }
  },
  38726: (pp, ip, cp) => {
    function Op(pp) {
      switch (pp.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    cp.d(ip, {
      e: () => op,
      h: () => Ip,
      j: () => Op
    });
    const op = 4,
      Ip = 3
  },
  39339: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      e: () => Ip
    });
    var Op = cp(337);
    const op = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class Ip {
      constructor(pp) {
        this.importGame = pp, this.loads = new Map, this.loaded = new Map
      }
      load(pp) {
        const ip = (0, Op.Mb)(pp);
        if (!op.has(ip)) return Promise.resolve(void 0);
        let cp = this.loads.get(ip);
        return cp || (cp = this.importGame(ip).then((pp => {
          const cp = pp.default;
          if ("function" !== typeof cp) throw new Error(`${ip}'s client code has no default-exported factory`);
          return this.loaded.set(ip, cp), cp
        })).catch((pp => {
          throw this.loads.delete(ip), pp
        })), this.loads.set(ip, cp)), cp
      }
      loadedFactory(pp) {
        const ip = (0, Op.Mb)(pp);
        if (!op.has(ip)) return;
        const cp = this.loaded.get(ip);
        if (!cp) throw new Error(`${ip}'s client code started before it loaded`);
        return cp
      }
    }
  },
  39827: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp
    });
    var Op = cp(9436),
      op = cp(34448),
      Ip = cp(3400);

    function Sp(pp) {
      if (pp === Op.d) return 0;
      const ip = (0, Ip.c)(pp);
      if (void 0 !== ip && ip <= op.MAX_BLOCK_ID) return ip;
      const cp = (0, Ip.c)(pp.split("|")[0]);
      if (void 0 !== cp && cp <= op.MAX_BLOCK_ID && (0, op.rootMetaDescOf)(cp) === pp) return cp;
      throw new Error(`Invalid block name. You sent ${pp}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39391: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    var Op = cp(25);
    class op {
      constructor(pp) {
        this.screen = pp, this.hidesHud = !1
      }
      show(pp, ip) {
        this.screen.setFade(pp.colour, pp.alpha), this.screen.setLetterbox(!0 === ip.letterbox, pp.alpha < 1), this.setHudHidden(!0 === ip.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(pp) {
        this.hidesHud !== pp && (this.hidesHud = pp, Op.c.set({
          isUiHiddenByCamera: pp
        }))
      }
    }
  },
  39362: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => xp,
      D: () => Dp,
      e: () => Op,
      i: () => Pp,
      l: () => Ap,
      m: () => Sp,
      o: () => yp,
      s: () => Lp,
      w: () => Up,
      y: () => Yp
    });
    const Op = Math.PI / 2 - .001,
      op = 2 * Math.PI,
      Ip = 1e-9;

    function Sp(pp, ip) {
      ip.heading = pp.heading, ip.pitch = pp.pitch
    }

    function xp(pp, ip) {
      const cp = ip - pp;
      return cp - op * Math.floor((cp + Math.PI) / op)
    }

    function Lp(pp, ip, cp) {
      return pp + xp(pp, ip) * cp
    }

    function Yp(pp) {
      if (!Number.isFinite(pp)) return pp;
      const ip = pp - op * Math.floor(pp / op);
      return ip < op ? ip : 0
    }

    function Dp(pp, ip) {
      return pp + xp(pp, ip)
    }

    function Ap(pp) {
      return Math.max(-Op, Math.min(Op, pp))
    }

    function Pp(pp, ip, cp) {
      const Op = Math.cos(ip);
      return cp[0] = Op * Math.sin(pp), cp[1] = -Math.sin(ip), cp[2] = Op * Math.cos(pp), cp
    }

    function Wp(pp, ip, cp, Op) {
      const op = Math.sqrt(pp * pp + cp * cp);
      return op < Ip && Math.abs(ip) < Ip || (op >= Ip && (Op.heading = Math.atan2(pp, cp)), Op.pitch = Ap(Math.atan2(-ip, op) + 0)), Op
    }

    function yp(pp, ip) {
      return Wp(pp[0], pp[1], pp[2], ip)
    }

    function Up(pp, ip, cp) {
      return Wp(ip[0] - pp[0], ip[1] - pp[1], ip[2] - pp[2], cp)
    }
  },
  39385: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      g: () => op
    });
    var Op = cp(39362);

    function op(pp) {
      var ip;
      const cp = "default" === pp.mode ? "movement" : null !== (ip = pp.playerFacing) && void 0 !== ip ? ip : "movement";
      return "cursor" === cp ? {
        facing: cp,
        mouseTurns: null
      } : {
        facing: cp,
        mouseTurns: "default" !== pp.mode && void 0 !== pp.playerLook ? "look" : "view"
      }
    }

    function Ip(pp, ip, cp, op, Ip, Sp) {
      return Sp.QE = 0, Sp.TE = 0, Sp.pointedAt = void 0, void 0 !== op ? Ip ? (Sp.pointedAt = op, pp) : (0, Op.y)(op.heading) : Ip ? (Sp.QE = ip, Sp.TE = cp, pp) : (0, Op.y)(pp + ip)
    }
  },
  39375: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => np
    });
    var Op = cp(39380),
      op = cp(39362),
      Ip = cp(37207);

    function Sp(pp, ip, cp, Op) {
      if (!(Op > 0)) return ip;
      const op = ip > pp ? Math.min(ip, pp + cp / Op) : Math.max(ip, pp - cp / Op);
      return Math.abs(ip - op) < 1e-9 ? ip : op
    }
    class xp {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Op.e,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(pp) {
        !this.isGoingOut() && this.sinceTurnMs < Op.j.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: pp
        } : (this.waiting = null, this.startOut(pp))
      }
      fadeIn(pp) {
        this.isGoingOut() ? this.sinceTurnMs < Op.j.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: pp
        } : (this.waiting = null, this.startIn(pp)) : this.waiting = null
      }
      advance(pp) {
        const ip = this.waiting;
        if (null === ip) return this.step(pp);
        const cp = Op.j.minFadeTurnMs - this.sinceTurnMs;
        if (cp > pp) return this.step(pp);
        const op = this.step(cp);
        return this.waiting = null, "out" === ip.turn ? this.startOut(ip.transition) : this.startIn(ip.minMs), this.step(pp - cp) || op
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(pp) {
        ("in" === this.phase || null === this.phase && this.clearMs < Op.j.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = pp.colour), this.outMs = pp.outMs, this.holdMs = pp.holdMs, this.inMs = pp.inMs
      }
      startIn(pp) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(pp, this.inMs)
      }
      step(pp) {
        const ip = this.screen;
        this.sinceTurnMs += pp, null === this.phase && (this.clearMs += pp);
        let cp = !1,
          op = pp;
        if ("out" === this.phase) {
          const Op = (1 - ip.alpha) * this.outMs;
          if (ip.alpha = Sp(ip.alpha, 1, pp, this.outMs), ip.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, op = Math.max(0, pp - Op), cp = !0
        }
        let Ip = pp;
        if ("hold" === this.phase) {
          this.heldMs += op;
          const pp = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Op.j.minFadeTurnMs);
          if (pp < 0 || cp) return cp;
          this.phase = "in", this.sinceTurnMs = pp, Ip = pp
        }
        return "in" === this.phase && (ip.alpha = Sp(ip.alpha, 0, Ip, this.inMs), ip.alpha <= 0 && (this.phase = null, this.clearMs = 0)), cp
      }
    }
    var Lp = cp(39356),
      Yp = cp(39383),
      Dp = cp(1927),
      Ap = cp(36767);

    function Pp(pp, ip) {
      for (let cp = 0; cp < ip.length; cp++) ip[cp] = pp[cp]
    }

    function Wp(pp, ip) {
      var cp;
      return null !== (cp = pp.fov) && void 0 !== cp ? cp : ip.getDefaultFov()
    }

    function yp(pp, ip, cp, Op, op) {
      const Ip = 2 / Op,
        Sp = Math.exp(-Ip * op);
      for (let xp = 0; xp < pp.length; xp++) {
        const Op = pp[xp] - cp[xp],
          Lp = (ip[xp] + Ip * Op) * op;
        pp[xp] = cp[xp] + (Op + Lp) * Sp, ip[xp] = (ip[xp] - Ip * Lp) * Sp
      }
    }
    class Up {
      constructor(pp, ip, cp, Op) {
        var Ip, Sp, xp, Lp, Yp;
        this.settings = pp, this.WP = ip, this.targets = cp, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.tw = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, op.y)((0, Dp.o)(null !== (Ip = pp.viewHeading) && void 0 !== Ip ? Ip : 0)),
          pitch: (0, op.l)((0, Dp.o)(null !== (Sp = pp.viewElevation) && void 0 !== Sp ? Sp : 45))
        }, this.closestDistance = null !== (xp = pp.closestDistance) && void 0 !== xp ? xp : Math.min(6, null !== (Lp = pp.furthestDistance) && void 0 !== Lp ? Lp : 1 / 0), this.furthestDistance = null !== (Yp = pp.furthestDistance) && void 0 !== Yp ? Yp : Math.max(64, this.closestDistance);
        const Ap = (0, op.i)(this.base.heading, this.base.pitch, this.forward),
          Pp = Op.position,
          Wp = this.closestDistance;
        this.goal = [Pp[0] + Ap[0] * Wp, Pp[1] + Ap[1] * Wp, Pp[2] + Ap[2] * Wp, Wp, this.base.heading, this.base.pitch]
      }
      update(pp, ip, cp) {
        var Op, Ip;
        this.placeGoal(null !== (Op = this.settings.fov) && void 0 !== Op ? Op : this.WP.getBaseFov()), this.goal[4] = (0, op.D)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Sp = null !== (Ip = this.settings.smoothMs) && void 0 !== Ip ? Ip : 400;
        !this.started || Sp < 1 ? (Pp(this.goal, this.smoothed), this.tw.fill(0), this.started = !0) : yp(this.smoothed, this.tw, this.goal, Sp, pp), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, op.l)(this.smoothed[5]), ip.apply(this.angles, cp);
        const xp = (0, op.i)(cp.heading, cp.pitch, this.forward);
        for (let op = 0; op < 3; op++) cp.position[op] = this.smoothed[op] - xp[op] * this.smoothed[3];
        cp.fov = Wp(this.settings, this.WP)
      }
      continueFrom(pp) {
        pp instanceof Up && (Pp(pp.goal, this.goal), Pp(pp.smoothed, this.smoothed), Pp(pp.tw, this.tw), this.framedTargets = pp.framedTargets, this.started = pp.started)
      }
      reset() {
        this.tw.fill(0), this.started = !1
      }
      placeGoal(pp) {
        var ip;
        let cp = 0;
        for (const Dp of this.settings.targets) {
          const pp = this.targets.currentAimPoint(Dp);
          pp && (0, Lp.g)(pp, this.pointAt(cp++))
        }
        if (cp > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const pp = this.targets.aimPoint(this.WP.localPlayerId);
          pp && (0, Lp.g)(pp, this.pointAt(cp++))
        }
        const Op = this.goal;
        if (0 === cp) return void(Op[3] = this.withinDistances(Op[3]));
        for (let Lp = 0; Lp < 3; Lp++) {
          let pp = 1 / 0,
            ip = -1 / 0;
          for (let Op = 0; Op < cp; Op++) pp = Math.min(pp, this.points[Op][Lp]), ip = Math.max(ip, this.points[Op][Lp]);
          Op[Lp] = (pp + ip) / 2
        }
        let op = 0;
        for (let Lp = 0; Lp < cp; Lp++) {
          const pp = this.points[Lp];
          op = Math.max(op, Math.hypot(pp[0] - Op[0], pp[1] - Op[1], pp[2] - Op[2]))
        }
        const Ip = Math.tan((0, Dp.o)(pp) / 2),
          Sp = Math.atan(Ip * (!0 === this.settings.letterbox ? Ap.i : 1)),
          xp = Math.atan(Ip * this.WP.getAspectRatio()),
          Yp = (op + (null !== (ip = this.settings.padding) && void 0 !== ip ? ip : 2)) / Math.sin(Math.min(Sp, xp));
        Op[3] = this.withinDistances(Yp)
      }
      withinDistances(pp) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, pp))
      }
      pointAt(pp) {
        return pp === this.points.length && this.points.push([0, 0, 0]), this.points[pp]
      }
    }
    class wp {
      constructor(pp) {
        this.limits = pp, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(pp) {
        this.limits && (this.yawOffset = pp.yawOffset, this.pitchOffset = pp.pitchOffset, this.idleMs = pp.idleMs)
      }
      update(pp, ip) {
        const cp = this.limits;
        if (!cp) return;
        const Op = Number.isFinite(ip.QE) ? ip.QE : 0,
          op = Number.isFinite(ip.TE) ? ip.TE : 0;
        if (ip.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: ip.pointedAt.heading,
          pitch: ip.pointedAt.pitch
        };
        else if (0 !== Op || 0 !== op) this.idleMs = 0, this.yawOffset += Op, this.pitchOffset += op;
        else {
          const ip = Math.max(0, this.idleMs + pp - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += pp, void 0 !== cp.returnMs && ip > 0) {
            const pp = cp.returnMs > 0 ? Math.exp(-3 * ip / cp.returnMs) : 0;
            this.yawOffset *= pp, this.pitchOffset *= pp
          }
        }
        this.clampOffsets(cp)
      }
      clampOffsets(pp) {
        if (pp.maxYaw >= 180) this.yawOffset = (0, op.B)(0, this.yawOffset);
        else {
          const ip = (0, Dp.o)(pp.maxYaw);
          this.yawOffset = Math.max(-ip, Math.min(ip, this.yawOffset))
        }
        const ip = (0, Dp.o)(pp.maxPitch);
        this.pitchOffset = Math.max(-ip, Math.min(ip, this.pitchOffset))
      }
      apply(pp, ip) {
        this.pointedAt && this.limits && (this.yawOffset = (0, op.B)(pp.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - pp.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const cp = (0, op.l)(pp.pitch + this.pitchOffset);
        this.pitchOffset = cp - pp.pitch, ip.heading = (0, op.y)(pp.heading + this.yawOffset), ip.pitch = cp
      }
      unapply(pp, ip) {
        ip.heading = (0, op.y)(pp.heading - this.yawOffset), ip.pitch = (0, op.l)(pp.pitch - this.pitchOffset)
      }
    }
    const vp = 1e-6;

    function tp(pp) {
      return Math.sqrt(pp[0] * pp[0] + pp[1] * pp[1] + pp[2] * pp[2])
    }

    function Hp(pp, ip, cp, Op, op) {
      const Ip = op * op,
        Sp = Ip * op;
      return (2 * Sp - 3 * Ip + 1) * pp + (Sp - 2 * Ip + op) * ip + (-2 * Sp + 3 * Ip) * cp + (Sp - Ip) * Op
    }

    function dp(pp, ip, cp, Op, op) {
      const Ip = op * op;
      return (6 * Ip - 6 * op) * pp + (3 * Ip - 4 * op + 1) * ip + (-6 * Ip + 6 * op) * cp + (3 * Ip - 2 * op) * Op
    }

    function ep(pp, ip) {
      const cp = ip[0] - pp[0],
        Op = ip[1] - pp[1],
        op = ip[2] - pp[2];
      return Math.sqrt(cp * cp + Op * Op + op * op)
    }

    function jp(pp, ip, cp, Op, op, Ip) {
      for (let Sp = 0; Sp < 3; Sp++) Ip[Sp] = op ? pp[Sp] * Op : cp[Sp] - ip[Sp];
      return op && function(pp, ip) {
        const cp = tp(pp);
        if (cp > ip) {
          const Op = ip / cp;
          pp[0] *= Op, pp[1] *= Op, pp[2] *= Op
        }
      }(Ip, 3 * ep(ip, cp)), Ip
    }

    function kp(pp, ip, cp, Op) {
      for (let op = 0; op < 3; op++) Op[op] = 6 * (ip[op] - pp[op]) - 2 * cp[op];
      if (tp(Op) < vp)
        for (let op = 0; op < 3; op++) Op[op] = ip[op] - pp[op];
      return Op
    }

    function mp(pp, ip) {
      return [2 * ip[0] - pp[0], 2 * ip[1] - pp[1], 2 * ip[2] - pp[2]]
    }

    function Rp(pp, ip, cp, Op, op, Ip, Sp) {
      if (!Ip && !Sp) return 0;
      const xp = Ip ? pp : 2 * ip - cp,
        Lp = Sp ? cp : 2 * ip - pp,
        Yp = Ip ? Op : op,
        Dp = Sp ? op : Op,
        Ap = (ip - xp) / Yp,
        Pp = (Lp - ip) / Dp;
      if (Ap * Pp <= 0) return 0;
      const Wp = (Lp - xp) / (Yp + Dp),
        yp = 3 * Math.min(Math.abs(Ap), Math.abs(Pp));
      return Math.max(-yp, Math.min(yp, Wp))
    }

    function qp(pp, ip, cp, Op, op, Ip, Sp) {
      const {
        u: xp,
        segmentMs: Lp
      } = pp;
      if (!pp.curved) return cp + (Op - cp) * xp;
      return Hp(cp, Rp(ip, cp, Op, pp.beforeMs, Lp, Ip, !0) * Lp, Op, Rp(cp, Op, op, Lp, pp.afterMs, !0, Sp) * Lp, xp)
    }

    function Mp(pp) {
      return Math.abs(pp.pitch) >= op.e
    }
    class Cp {
      constructor(pp, ip, cp, Op, op) {
        this.nodes = pp, this.prevNodes = cp, this.nextNodes = Op, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = pp.map(((pp, cp) => this.nodeTangent(ip, op, cp)))
      }
      sample(pp, ip, cp) {
        const {
          index: Op,
          toIndex: Ip,
          segmentMs: Sp,
          curved: xp
        } = pp, Lp = this.fromAngles, Yp = this.toAngles, Dp = this.nodeAngles(Op, cp.position, ip, Lp), Ap = this.nodeAngles(Ip, cp.position, ip, Yp);
        if (Sp > 0 && "aim" !== Dp && "aim" !== Ap && this.liveTangent(pp, Lp)) return cp.heading = (0, op.y)(Lp.heading), void(cp.pitch = Lp.pitch);
        if ("none" === Dp && "none" === Ap) return;
        !xp && Sp > 0 && ("tangent" === Dp && this.liveTangent(pp, Lp), "tangent" === Ap && this.liveTangent(pp, Yp)), "none" === Dp ? (0, op.m)(Yp, Lp) : "none" === Ap && (0, op.m)(Lp, Yp);
        const Pp = xp && pp.beforeIndex >= 0 && "none" !== this.nodeAngles(pp.beforeIndex, cp.position, ip, this.beforeAngles),
          Wp = xp && pp.afterIndex >= 0 && "none" !== this.nodeAngles(pp.afterIndex, cp.position, ip, this.afterAngles),
          yp = (0, op.D)(Lp.heading, Yp.heading),
          Up = qp(pp, Pp ? (0, op.D)(Lp.heading, this.beforeAngles.heading) : 0, Lp.heading, yp, Wp ? (0, op.D)(yp, this.afterAngles.heading) : 0, Pp, Wp);
        cp.heading = (0, op.y)(Up), cp.pitch = (0, op.l)(qp(pp, this.beforeAngles.pitch, Lp.pitch, Yp.pitch, this.afterAngles.pitch, Pp, Wp))
      }
      nodeAngles(pp, ip, cp, Op) {
        const op = this.rawNodeAngles(pp, ip, cp, Op);
        return "none" !== op && Mp(Op) && !this.borrowHeading(this.prevNodes[pp], ip, cp, Op) && this.borrowHeading(this.nextNodes[pp], ip, cp, Op), op
      }
      borrowHeading(pp, ip, cp, Op) {
        const op = this.borrowedAngles;
        return !(pp < 0 || "none" === this.rawNodeAngles(pp, ip, cp, op) || Mp(op)) && (Op.heading = op.heading, !0)
      }
      rawNodeAngles(pp, ip, cp, Op) {
        const Ip = this.nodes[pp].keyframe;
        if (Ip.lookDirection) return (0, op.o)(Ip.lookDirection, Op), "aim";
        if (void 0 !== Ip.lookAt) {
          const pp = cp(Ip.lookAt);
          if (pp) return (0, op.w)(ip, pp, Op), "aim"
        }
        const Sp = this.tangents[pp];
        return Sp ? ((0, op.m)(Sp, Op), "tangent") : "none"
      }
      liveTangent(pp, ip) {
        const cp = this.nodes[pp.index].position,
          Op = this.nodes[pp.toIndex].position,
          Ip = this.derivative;
        for (let op = 0; op < 3; op++) Ip[op] = dp(cp[op], pp.fromTangent[op], Op[op], pp.toTangent[op], pp.u);
        return tp(Ip) > 1e-9 ? ((0, op.o)(Ip, ip), !0) : !(ep(cp, Op) < vp) && ((0, op.o)(kp(cp, Op, pp.u < .5 ? pp.toTangent : pp.fromTangent, Ip), ip), !0)
      }
      nodeTangent(pp, ip, cp) {
        var Op;
        const Ip = pp[cp];
        if (tp(Ip) > 1e-9) return (0, op.o)(Ip, {
          heading: 0,
          pitch: 0
        });
        const Sp = null !== (Op = this.restDirectionTo(cp, cp + 1, pp, ip)) && void 0 !== Op ? Op : this.restDirectionTo(cp, cp - 1, pp, ip);
        return Sp ? (0, op.o)(Sp, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(pp, ip, cp, Op) {
        const op = this.nodes[pp],
          Ip = this.nodes[ip];
        if (!Ip || ep(op.position, Ip.position) < vp) return null;
        const [Sp, xp] = ip > pp ? [op, Ip] : [Ip, op], Lp = jp(cp[ip], Sp.position, xp.position, xp.timeMs - Sp.timeMs, Op, [0, 0, 0]);
        return kp(Sp.position, xp.position, Lp, [0, 0, 0])
      }
    }

    function Ep(pp, ip) {
      const cp = pp.lookDirection || ip.lookDirection ? function(pp, ip) {
        if (!pp || !ip) return pp === ip;
        const cp = tp(pp),
          Op = tp(ip);
        return Math.hypot(pp[0] / cp - ip[0] / Op, pp[1] / cp - ip[1] / Op, pp[2] / cp - ip[2] / Op) < vp
      }(pp.lookDirection, ip.lookDirection) : (Op = pp.lookAt, op = ip.lookAt, "object" !== typeof Op || "object" !== typeof op ? Op === op : ep(Op, op) < vp);
      var Op, op;
      return ep(pp.position, ip.position) < vp && pp.fov === ip.fov && cp
    }
    class Xp {
      constructor(pp, ip, cp) {
        if (this.smooth = ip, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === pp.length) throw new Error("A camera path needs at least one keyframe");
        for (let Ip = 1; Ip < pp.length; Ip++)
          if (!(pp[Ip].timeMs > pp[Ip - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = pp.map((pp => {
          var ip;
          return {
            timeMs: pp.timeMs,
            position: [...pp.position],
            keyframe: pp,
            easing: (0, Ip.j)(null !== (ip = pp.easing) && void 0 !== ip ? ip : "linear")
          }
        }));
        const Op = this.nodes[0],
          op = this.nodes[this.nodes.length - 1],
          Sp = cp && this.nodes.length > 1;
        Sp && !Ep(Op.keyframe, op.keyframe) && this.nodes.push({
          ...Op,
          timeMs: op.timeMs + (op.timeMs - Op.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Sp ? this.nodes[this.nodes.length - 1].timeMs - Op.timeMs : 0, this.prevNodes = this.nodes.map(((pp, ip) => this.neighbour(ip, -1))), this.nextNodes = this.nodes.map(((pp, ip) => this.neighbour(ip, 1))), this.prevGaps = this.prevNodes.map(((pp, ip) => pp >= 0 ? this.gapMs(ip, -1) : 0)), this.nextGaps = this.nextNodes.map(((pp, ip) => pp >= 0 ? this.gapMs(ip, 1) : 0)), this.velocities = this.nodes.map(((pp, ip) => {
          const cp = this.prevNodes[ip],
            Op = this.nextNodes[ip];
          return function(pp, ip, cp, Op, op, Ip) {
            if (Ip[0] = 0, Ip[1] = 0, Ip[2] = 0, !pp && !cp) return Ip;
            const Sp = null !== pp && void 0 !== pp ? pp : mp(null !== cp && void 0 !== cp ? cp : ip, ip),
              xp = null !== cp && void 0 !== cp ? cp : mp(null !== pp && void 0 !== pp ? pp : ip, ip),
              Lp = pp ? Op : op,
              Yp = cp ? op : Op,
              Dp = ep(Sp, ip),
              Ap = ep(ip, xp);
            if (Dp < vp || Ap < vp) return Ip;
            const Pp = Math.sqrt(Dp),
              Wp = Math.sqrt(Ap),
              yp = (Pp + Wp) / (Lp + Yp);
            for (let Up = 0; Up < 3; Up++) {
              const pp = (ip[Up] - Sp[Up]) / Pp - (xp[Up] - Sp[Up]) / (Pp + Wp) + (xp[Up] - ip[Up]) / Wp;
              Ip[Up] = pp * yp
            }
            return Ip
          }(cp >= 0 ? this.nodes[cp].position : null, pp.position, Op >= 0 ? this.nodes[Op].position : null, this.prevGaps[ip], this.nextGaps[ip], [0, 0, 0])
        })), this.aim = new Cp(this.nodes, this.velocities, this.prevNodes, this.nextNodes, ip)
      }
      sample(pp, ip, cp, Op) {
        const op = this.findSegment(this.pathTime(pp));
        this.samplePosition(op, Op.position), this.aim.sample(op, ip, Op);
        const {
          beforeIndex: Ip,
          afterIndex: Sp
        } = op;
        Op.fov = qp(op, Ip >= 0 ? this.fovAt(Ip, cp) : 0, this.fovAt(op.index, cp), this.fovAt(op.toIndex, cp), Sp >= 0 ? this.fovAt(Sp, cp) : 0, Ip >= 0, Sp >= 0)
      }
      pathTime(pp) {
        const ip = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || pp <= ip) return pp;
        const cp = pp - ip;
        return ip + cp - this.loopMs * Math.floor(cp / this.loopMs)
      }
      findSegment(pp) {
        const ip = this.nodes,
          cp = this.segment;
        let Op = cp.index;
        for (pp < ip[Op].timeMs && (Op = 0); Op < ip.length - 2 && ip[Op + 1].timeMs <= pp;) Op++;
        const op = Math.min(Op + 1, ip.length - 1),
          Sp = ip[op].timeMs - ip[Op].timeMs;
        return cp.index = Op, cp.toIndex = op, cp.segmentMs = Sp, cp.u = Sp > 0 ? (0, Ip.i)((pp - ip[Op].timeMs) / Sp, ip[Op].easing) : 1, cp.curved = this.smooth && Sp > 0, cp.beforeIndex = this.prevNodes[Op], cp.afterIndex = this.nextNodes[op], cp.beforeMs = this.prevGaps[Op], cp.afterMs = this.nextGaps[op], cp
      }
      samplePosition(pp, ip) {
        const {
          fromTangent: cp,
          toTangent: Op,
          curved: op
        } = pp, Ip = this.nodes[pp.index].position, Sp = this.nodes[pp.toIndex].position;
        jp(this.velocities[pp.index], Ip, Sp, pp.segmentMs, op, cp), jp(this.velocities[pp.toIndex], Ip, Sp, pp.segmentMs, op, Op);
        const xp = pp.u;
        for (let Lp = 0; Lp < 3; Lp++) ip[Lp] = op ? Hp(Ip[Lp], cp[Lp], Sp[Lp], Op[Lp], xp) : Ip[Lp] + (Sp[Lp] - Ip[Lp]) * xp
      }
      fovAt(pp, ip) {
        var cp;
        return null !== (cp = this.nodes[pp].keyframe.fov) && void 0 !== cp ? cp : ip
      }
      neighbour(pp, ip) {
        const cp = this.nodes.length - 1,
          Op = pp + ip;
        return Op >= 0 && Op <= cp ? Op : this.loopMs <= 0 || cp < 2 ? -1 : Op < 0 ? cp - 1 : 1
      }
      gapMs(pp, ip) {
        const cp = this.nodes.length - 1;
        if (1 === ip) {
          const ip = pp === cp ? 0 : pp;
          return this.nodes[ip + 1].timeMs - this.nodes[ip].timeMs
        }
        const Op = 0 === pp ? cp : pp;
        return this.nodes[Op].timeMs - this.nodes[Op - 1].timeMs
      }
    }
    class lp {
      constructor(pp) {
        this.WP = pp, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = ip => pp.getEntityPosition(ip), this.readAimPoint = ip => pp.getEntityAimPoint(ip)
      }
      aimPoint(pp) {
        return "string" !== typeof pp ? (0, Lp.o)(pp, 3) ? pp : null : this.resolve(pp, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(pp) {
        const ip = "string" === typeof pp ? this.WP.getEntityAimPoint(pp) : pp;
        return ip && (0, Lp.o)(ip, 3) ? ip : null
      }
      feetPosition(pp) {
        return this.resolve(pp, this.readFeet, this.lastFeet)
      }
      heading(pp) {
        const ip = this.WP.getEntityHeading(pp);
        if (null !== ip && Number.isFinite(ip)) return this.lastHeadings.set(pp, ip), ip;
        const cp = this.lastHeadings.get(pp);
        return void 0 !== cp ? cp : pp === this.WP.localPlayerId ? 0 : this.heading(this.WP.localPlayerId)
      }
      resolve(pp, ip, cp) {
        const Op = ip(pp);
        let op = cp.get(pp);
        return Op && (0, Lp.o)(Op, 3) ? (op || (op = [0, 0, 0], cp.set(pp, op)), op[0] = Op[0], op[1] = Op[1], op[2] = Op[2], op) : op || (pp === this.WP.localPlayerId ? null : this.resolve(this.WP.localPlayerId, ip, cp))
      }
    }

    function Qp(pp) {
      return {
        heading: pp.heading,
        pitch: pp.pitch
      }
    }

    function Jp(pp, ip) {
      Number.isFinite(pp.heading) && Number.isFinite(pp.pitch) || (0, op.m)(ip, pp)
    }

    function Bp(pp, ip, cp, Op, Ip) {
      if (ip) return void(0, op.o)(ip, Ip);
      const Sp = Op.aimPoint(cp);
      Sp && (0, op.w)(pp, Sp, Ip)
    }
    class Np {
      constructor(pp, ip, cp, Op) {
        this.settings = pp, this.WP = ip, this.targets = cp, this.base = void 0, this.base = Qp(Op)
      }
      update(pp, ip, cp) {
        var Op;
        const op = this.settings;
        (0, Lp.g)(op.position, cp.position), Bp(op.position, op.lookDirection, null !== (Op = op.lookAt) && void 0 !== Op ? Op : this.WP.localPlayerId, this.targets, this.base), ip.apply(this.base, cp), cp.fov = Wp(op, this.WP)
      }
      continueFrom(pp) {
        pp instanceof Np && (0, op.m)(pp.base, this.base)
      }
      reset(pp) {
        Jp(this.base, pp)
      }
    }
    class Tp {
      constructor(pp, ip, cp, Op) {
        this.settings = pp, this.WP = ip, this.targets = cp, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.tw = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = Qp(Op), this.goal = [...Op.position]
      }
      update(pp, ip, cp) {
        var Op, op, Ip;
        const Sp = this.settings,
          xp = null !== (Op = Sp.target) && void 0 !== Op ? Op : this.WP.localPlayerId,
          Yp = this.targets.feetPosition(xp);
        let Dp = !1;
        Yp && (Dp = this.foundFeet && ep(this.lastFeet, Yp) > 32 + .1 * pp, (0, Lp.g)(Yp, this.lastFeet), this.foundFeet = !0, this.placeGoal(Yp, xp));
        const Ap = null !== (op = Sp.smoothMs) && void 0 !== op ? op : 0;
        !this.started || Ap < 1 || Dp ? ((0, Lp.g)(this.goal, this.smoothed), this.tw.fill(0), this.started = !0) : yp(this.smoothed, this.tw, this.goal, Ap, pp), Dp && (this.distance = -1), (0, Lp.g)(this.smoothed, cp.position);
        const Pp = !0 === Sp.avoidTerrain ? this.pullIn(xp, pp, cp) : 1;
        let Up = this.goal;
        if ("target" === Sp.offsetSpace) Up = cp.position;
        else if (Pp < 1) {
          Up = this.aimOrigin;
          for (let pp = 0; pp < 3; pp++) Up[pp] = cp.position[pp] + (this.goal[pp] - this.smoothed[pp]) * Pp
        }
        Bp(Up, Sp.lookDirection, null !== (Ip = Sp.lookAt) && void 0 !== Ip ? Ip : xp, this.targets, this.base), ip.apply(this.base, cp), cp.fov = Wp(Sp, this.WP)
      }
      continueFrom(pp) {
        pp instanceof Tp && (0, Op.p)(pp.settings.target, this.settings.target) && ((0, op.m)(pp.base, this.base), (0, Lp.g)(pp.goal, this.goal), (0, Lp.g)(pp.lastFeet, this.lastFeet), this.foundFeet = pp.foundFeet, (0, Lp.g)(pp.smoothed, this.smoothed), (0, Lp.g)(pp.tw, this.tw), this.started = pp.started, !0 === pp.settings.avoidTerrain && (this.distance = pp.distance))
      }
      reset(pp) {
        Jp(this.base, pp), this.tw.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(pp, ip, cp) {
        const Op = this.targets.aimPoint(pp);
        if (!Op) return 1;
        const op = cp.position,
          Ip = ep(Op, op);
        if (!(Ip > 0)) return 1;
        const Sp = this.toCamera;
        for (let Lp = 0; Lp < 3; Lp++) Sp[Lp] = (op[Lp] - Op[Lp]) / Ip;
        const xp = function(pp, ip, cp) {
          return pp < 0 || ip < pp ? ip : ip + (pp - ip) * Math.exp(-cp / 150)
        }(this.distance, function(pp, ip, cp, Op) {
          const op = pp.raycastTerrain(ip, cp, Op);
          return null !== op && Number.isFinite(op) ? Math.min(Op, Math.max(0, op - .2)) : Op
        }(this.WP, Op, Sp, Ip), ip);
        if (Ip - xp < .001) return this.distance = -1, 1;
        this.distance = xp;
        for (let Lp = 0; Lp < 3; Lp++) op[Lp] = Op[Lp] + Sp[Lp] * xp;
        return xp / Ip
      }
      placeGoal(pp, ip) {
        const cp = this.settings.offset;
        let Op = cp[0],
          op = cp[2];
        if ("target" === this.settings.offsetSpace) {
          const pp = this.targets.heading(ip),
            Ip = Math.cos(pp),
            Sp = Math.sin(pp);
          Op = cp[0] * Ip + cp[2] * Sp, op = -cp[0] * Sp + cp[2] * Ip
        }
        this.goal[0] = pp[0] + Op, this.goal[1] = pp[1] + cp[1], this.goal[2] = pp[2] + op
      }
    }
    class fp {
      constructor(pp, ip, cp, Op) {
        var op, Ip;
        this.settings = pp, this.WP = ip, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = pp.keyframes.length > 0 ? new Xp(pp.keyframes, null === (op = pp.smooth) || void 0 === op || op, null !== (Ip = pp.loop) && void 0 !== Ip && Ip) : null, this.base = (0, Lp.e)(Op, (0, Lp.i)()), this.resolveTarget = pp => cp.aimPoint(pp)
      }
      update(pp, ip, cp) {
        this.elapsedMs += pp;
        const Op = Wp(this.settings, this.WP);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Op, this.base) : this.base.fov = Op, (0, Lp.g)(this.base.position, cp.position), cp.fov = this.base.fov, ip.apply(this.base, cp)
      }
      continueFrom(pp) {
        pp instanceof fp && (0, Op.p)(pp.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = pp.elapsedMs, (0, Lp.e)(pp.base, this.base))
      }
      reset(pp) {
        Jp(this.base, pp), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function bp(pp, ip) {
      return (0, Op.q)(pp, ip)
    }
    class hp {
      constructor(pp, ip, cp) {
        var Op;
        this.settings = pp, this.WP = ip, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const op = null !== cp && cp.settings.mode === pp.mode,
          Ip = op ? cp.pose : ip.getDefaultPose();
        this.pose = (0, Lp.e)(Ip, (0, Lp.i)()), this.lastGoodPose = (0, Lp.e)(op ? cp.lastGoodPose : Ip, (0, Lp.i)()), this.look = new wp(pp.playerLook), this.targets = null !== (Op = null === cp || void 0 === cp ? void 0 : cp.targets) && void 0 !== Op ? Op : new lp(ip);
        const Sp = (0, Lp.e)(Ip, (0, Lp.i)());
        op && cp.look.unapply(Sp, Sp), this.mode = function(pp, ip, cp, Op) {
          switch (pp.mode) {
            case "fixed":
              return new Np(pp, ip, cp, Op);
            case "follow":
              return new Tp(pp, ip, cp, Op);
            case "path":
              return new fp(pp, ip, cp, Op);
            case "frame":
              return new Up(pp, ip, cp, Op)
          }
        }(pp, ip, this.targets, Sp), op && (this.look.continueFrom(cp.look), this.mode.continueFrom(cp.mode))
      }
      update(pp, ip) {
        return this.look.update(pp, ip), this.mode.update(pp, this.look, this.pose), (0, Lp.k)(this.pose) ? (0, Lp.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, Lp.e)(this.lastGoodPose, this.pose), this.mode.reset((0, Lp.k)(this.lastGoodPose) ? this.lastGoodPose : this.WP.getDefaultPose())), this.pose
      }
    }

    function ap(pp) {
      return [0, 0, pp[2], pp[3]]
    }
    class np {
      constructor(pp) {
        this.WP = pp, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new xp, this.shot = null, this.blend = null, this.mixed = (0, Lp.i)(), this.output = (0, Lp.i)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(pp) {
        const ip = (0, Yp.c)(pp);
        if ((0, Op.p)(ip, this.pending ? this.pending.settings : this.settings)) return;
        const cp = bp(this.settings, ip);
        if (void 0 !== ip.transition && !cp) return this.pending = {
          settings: ip,
          shot: "default" === ip.mode ? null : new hp(ip, this.WP, null)
        }, void this.fade.fadeOut(ip.transition);
        const op = null !== this.pending;
        this.pending = null, !op && cp || this.fade.fadeIn(Op.j.minTransitionFadeMs), this.show(ip, !1)
      }
      show(pp, ip) {
        var cp, op;
        if ((0, Op.p)(pp, this.settings)) return;
        const Sp = !ip && bp(this.settings, pp);
        this.settings = pp;
        const xp = null !== this.blend && this.blend.elapsedMs > 0,
          Yp = (0, Lp.e)(this.hasOutput ? this.output : this.WP.getDefaultPose(), (0, Lp.i)());
        if (this.shot = "default" === pp.mode ? null : new hp(pp, this.WP, ip ? null : this.shot), Sp) return;
        const Dp = ip || !this.shot && !this.hasOutput ? 0 : null !== (cp = pp.blendInMs) && void 0 !== cp ? cp : 0;
        if (Dp <= 0) return void(this.blend = null);
        const Ap = (0, Ip.j)(null !== (op = pp.blendEasing) && void 0 !== op ? op : "easeInOut");
        this.blend = {
          from: Yp,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Dp,
          easing: xp ? ap(Ap) : Ap
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
      update(pp, ip) {
        const cp = Number.isFinite(pp) && pp > 0 ? pp : 0;
        if (this.fade.advance(cp) && null !== this.pending) {
          const {
            settings: pp
          } = this.pending;
          this.pending = null, this.show(pp, !0)
        }
        this.loadingPositions.length = 0;
        const Op = this.pending;
        if (null !== Op && void 0 !== Op && Op.shot) {
          const pp = "path" === Op.settings.mode ? 0 : cp;
          this.noteLoadingPosition(Op.shot.update(pp, Lp.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Sp = this.shot ? this.shot.update(cp, ip) : this.WP.getDefaultPose();
        this.shot && this.noteLoadingPosition(Sp.position);
        const xp = this.blend;
        if (!xp) return this.writeOutput(Sp);
        xp.elapsedMs += cp;
        const Yp = Math.min(1, xp.elapsedMs / xp.durationMs);
        if (xp.headingDelta = Number.isFinite(xp.headingDelta) ? (0, op.D)(xp.headingDelta, Sp.heading - xp.from.heading) : (0, op.B)(xp.from.heading, Sp.heading), (0, Lp.s)(xp.from, Sp, xp.headingDelta, (0, Ip.i)(Yp, xp.easing), this.mixed), Yp >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else xp.fromScripted && this.noteLoadingPosition(xp.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(pp) {
        if (pp.every(Number.isFinite)) {
          const ip = this.loadingPositions;
          ip.push((0, Lp.g)(pp, this.loadingSlots[ip.length]))
        }
      }
      writeOutput(pp) {
        const ip = this.output;
        (0, Lp.k)(pp) ? (0, Lp.e)(pp, ip) : this.hasOutput || (0, Lp.e)(this.WP.getDefaultPose(), ip), ip.pitch = (0, op.l)(ip.pitch);
        const cp = this.WP.getDefaultFov(),
          Ip = Number.isFinite(cp) && cp > 0 && cp < 180,
          Sp = Ip ? Math.min(Op.j.minFov, cp) : Op.j.minFov,
          xp = Ip ? Math.max(Op.j.maxFov, cp) : Op.j.maxFov;
        return ip.fov = Number.isFinite(ip.fov) ? Math.min(xp, Math.max(Sp, ip.fov)) : xp, this.hasOutput = !0, ip
      }
    }
  },
  39356: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      e: () => xp,
      g: () => Sp,
      i: () => Ip,
      k: () => Yp,
      o: () => Lp,
      s: () => Dp
    });
    var Op = cp(39362);
    const op = {
      QE: 0,
      TE: 0
    };

    function Ip() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Sp(pp, ip) {
      return ip[0] = pp[0], ip[1] = pp[1], ip[2] = pp[2], ip
    }

    function xp(pp, ip) {
      return Sp(pp.position, ip.position), ip.heading = pp.heading, ip.pitch = pp.pitch, ip.fov = pp.fov, ip
    }

    function Lp(pp, ip) {
      return Array.isArray(pp) && pp.length === ip && pp.every(Number.isFinite)
    }

    function Yp(pp) {
      return Lp(pp.position, 3) && Number.isFinite(pp.heading) && Number.isFinite(pp.pitch) && Number.isFinite(pp.fov)
    }

    function Dp(pp, ip, cp, op, Ip) {
      for (let Op = 0; Op < 3; Op++) Ip.position[Op] = pp.position[Op] + (ip.position[Op] - pp.position[Op]) * op;
      return Ip.heading = (0, Op.y)(pp.heading + cp * op), Ip.pitch = pp.pitch + (ip.pitch - pp.pitch) * op, Ip.fov = pp.fov + (ip.fov - pp.fov) * op, Ip
    }
  },
  39383: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => kp,
      e: () => Pp
    });
    var Op = cp(39380),
      op = cp(39356);
    const Ip = Op.h,
      Sp = Op.l;

    function xp(pp, ip, cp, Op) {
      return Number.isFinite(pp) ? Math.min(cp, Math.max(ip, pp)) : Op
    }

    function Lp(pp, ip, cp) {
      return void 0 !== pp && Number.isFinite(pp) ? Math.min(cp, Math.max(ip, pp)) : void 0
    }

    function Yp(pp) {
      const ip = Op.j.maxCoordinate;
      return [Math.min(ip, Math.max(-ip, pp[0])), Math.min(ip, Math.max(-ip, pp[1])), Math.min(ip, Math.max(-ip, pp[2]))]
    }

    function Dp(pp) {
      return "string" === typeof pp ? pp : (0, op.o)(pp, 3) ? Yp(pp) : void 0
    }
    const Ap = new RegExp(Op.o);

    function Pp(pp) {
      return "string" === typeof pp && Ap.test(pp)
    }

    function Wp(pp) {
      const ip = [];
      if (!Array.isArray(pp)) return ip;
      for (const cp of pp.slice(0, Op.j.maxFrameTargets)) {
        const pp = Dp(cp);
        void 0 === pp || "string" === typeof pp && !Pp(pp) || ip.push(pp)
      }
      return ip
    }

    function yp(pp) {
      if (!(0, op.o)(pp, 3)) return;
      const ip = Math.max(Math.abs(pp[0]), Math.abs(pp[1]), Math.abs(pp[2])),
        cp = Math.hypot(pp[0] / ip, pp[1] / ip, pp[2] / ip);
      return 0 === ip || ip * cp < Op.j.minDirectionLength ? void 0 : [pp[0] / ip / cp, pp[1] / ip / cp, pp[2] / ip / cp]
    }

    function Up(pp) {
      if (void 0 !== pp) return "string" === typeof pp ? Ip.includes(pp) ? pp : void 0 : (0, op.o)(pp, 4) ? [xp(pp[0], 0, 1, 0), xp(pp[1], Op.j.minEasingY, Op.j.maxEasingY, 0), xp(pp[2], 0, 1, 1), xp(pp[3], Op.j.minEasingY, Op.j.maxEasingY, 1)] : "linear"
    }

    function wp(pp) {
      if (pp) return {
        maxYaw: xp(pp.maxYaw, 0, Op.j.maxPlayerLook, 0),
        maxPitch: xp(pp.maxPitch, 0, Op.j.maxPlayerLook, 0),
        returnMs: Lp(pp.returnMs, 0, Op.j.maxReturnMs)
      }
    }
    const vp = new RegExp(Op.b);

    function tp(pp) {
      var ip;
      if ("object" !== typeof pp || null === pp) return;
      const cp = Op.j.maxTransitionMs,
        op = Op.j.minTransitionFadeMs;
      return {
        colour: "string" === typeof pp.colour && vp.test(pp.colour) ? pp.colour : Op.e,
        outMs: xp(pp.outMs, op, cp, op),
        holdMs: xp(null !== (ip = pp.holdMs) && void 0 !== ip ? ip : 0, 0, cp, 0),
        inMs: xp(pp.inMs, op, cp, op)
      }
    }

    function Hp(pp) {
      return !0 === pp || void 0
    }

    function dp(pp) {
      if ("object" !== typeof pp || null === pp) return !1;
      const ip = pp.lookAt;
      return Number.isFinite(pp.timeMs) && (0, op.o)(pp.position, 3) && (void 0 === ip || "string" === typeof ip || (0, op.o)(ip, 3))
    }

    function ep(pp) {
      return {
        ...pp,
        timeMs: xp(pp.timeMs, 0, Op.j.maxPathMs, 0),
        position: Yp(pp.position),
        lookAt: Dp(pp.lookAt),
        lookDirection: yp(pp.lookDirection),
        fov: Lp(pp.fov, Op.j.minFov, Op.j.maxFov),
        easing: Up(pp.easing)
      }
    }

    function jp(pp) {
      const ip = [];
      if (!Array.isArray(pp)) return ip;
      for (const cp of pp.slice(0, Op.j.maxKeyframes)) {
        if (!dp(cp)) continue;
        const pp = ep(cp);
        (0 === ip.length || pp.timeMs > ip[ip.length - 1].timeMs) && ip.push(pp)
      }
      return ip
    }

    function kp(pp) {
      if ("object" !== typeof pp || null === pp) return {
        mode: "default"
      };
      const ip = {
          blendInMs: Lp(pp.blendInMs, 0, Op.j.maxBlendInMs),
          blendEasing: Up(pp.blendEasing),
          transition: tp(pp.transition),
          letterbox: Hp(pp.letterbox),
          hideHud: Hp(pp.hideHud)
        },
        cp = {
          mode: "default",
          ...ip
        };
      if ("default" === pp.mode || "fixed" === pp.mode && !(0, op.o)(pp.position, 3)) return cp;
      const Ip = {
        ...ip,
        fov: Lp(pp.fov, Op.j.minFov, Op.j.maxFov),
        playerFacing: (Ap = pp.playerFacing, Sp.includes(Ap) ? Ap : void 0),
        playerLook: wp(pp.playerLook)
      };
      var Ap, Pp;
      switch (pp.mode) {
        case "fixed":
          return {
            ...pp, ...Ip, position: Yp(pp.position), lookAt: Dp(pp.lookAt), lookDirection: yp(pp.lookDirection)
          };
        case "follow":
          return {
            ...pp, ...Ip, target: "string" === typeof pp.target ? pp.target : void 0, lookAt: Dp(pp.lookAt), offset: (Pp = pp.offset, Array.isArray(Pp) ? [xp(Pp[0], -Op.j.maxOffset, Op.j.maxOffset, 0), xp(Pp[1], -Op.j.maxOffset, Op.j.maxOffset, 0), xp(Pp[2], -Op.j.maxOffset, Op.j.maxOffset, 0)] : [0, 0, 0]), lookDirection: yp(pp.lookDirection), smoothMs: Lp(pp.smoothMs, 0, Op.j.maxSmoothMs)
          };
        case "path":
          return {
            ...pp, ...Ip, keyframes: jp(pp.keyframes)
          };
        case "frame":
          return {
            ...pp, ...Ip, targets: Wp(pp.targets), viewHeading: Lp(pp.viewHeading, -Op.j.maxFrameHeading, Op.j.maxFrameHeading), viewElevation: Lp(pp.viewElevation, 0, Op.j.maxFrameElevation), padding: Lp(pp.padding, 0, Op.j.maxFrameDistance), closestDistance: Lp(pp.closestDistance, 0, Op.j.maxFrameDistance), furthestDistance: Lp(pp.furthestDistance, 0, Op.j.maxFrameDistance), smoothMs: Lp(pp.smoothMs, 0, Op.j.maxSmoothMs)
          };
        default:
          return cp
      }
    }
  },
  38883: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp
    });
    var Op = cp(1234);

    function op(pp) {
      const ip = /(\d*\.?\d+)px/.exec(pp);
      return ip ? Number(ip[1]) : null
    }

    function Ip(pp) {
      return pp.split(/[\s,]+/).pop()
    }
    let Sp = !1;
    const xp = {
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
      drawText: function(pp, ip, Op, xp, Lp, Yp) {
        if (Lp <= 0 || Yp <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Dp,
          fontVariant: Ap,
          fontWeight: Pp,
          fontSize: Wp,
          font: yp
        } = this, Up = [Dp, Ap, Pp, `${Wp}px`, yp].filter(Boolean).join(" "), wp = [
          [Pp, `${Wp}px`, Ip(yp)].filter(Boolean).join(" "), `${Wp}px sans-serif`
        ], vp = pp.font, tp = function(pp, ip, cp) {
          for (const Op of ip) {
            pp.font = Op;
            const ip = op(pp.font),
              Sp = Ip(Op);
            if (null !== ip && Math.abs(ip - cp) <= .5 && pp.font.toLowerCase().includes(Sp.toLowerCase())) return Op
          }
          return null
        }(pp, [Up, ...wp], Wp);
        tp !== Up && function(pp, ip, Op) {
          Sp || (Sp = !0, Promise.resolve().then((() => cp(1080))).then((cp => {
            let {
              NU: op
            } = cp;
            op(new Error("A canvas didn't take canvasTxt's font"), {
              font: pp,
              aW: ip,
              drawnWith: null !== Op && void 0 !== Op ? Op : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Up, vp, tp);
        const Hp = op(pp.font);
        if (null === tp && null !== Hp && Hp > 0) {
          const cp = Wp / Hp;
          pp.save();
          try {
            return pp.scale(cp, cp), {
              height: this.drawLines(pp, ip, Op / cp, xp / cp, Lp / cp, Yp / cp, Hp).height * cp
            }
          } finally {
            pp.restore()
          }
        }
        return this.drawLines(pp, ip, Op, xp, Lp, Yp, Wp)
      },
      drawLines: function(pp, ip, cp, op, Ip, Sp, xp) {
        const Lp = cp + Ip,
          Yp = op + Sp;
        let Dp, Ap = op + Sp / 2 + xp / 2;
        "right" === this.align ? (Dp = Lp, pp.textAlign = "right") : "left" === this.align ? (Dp = cp, pp.textAlign = "left") : (Dp = cp + Ip / 2, pp.textAlign = "center");
        for (const Op of ip) {
          pp.measureText(Op).width >= Ip && (ip = ip.replace(Op, ""))
        }
        ip = (0, Op.P)(ip);
        const Pp = [],
          Wp = ip.split("\n"),
          yp = this.justify ? pp.measureText("\u200a").width : 0;
        Wp.forEach((ip => {
          let cp = pp.measureText(ip).width;
          if (cp <= Ip) Pp.push(ip);
          else {
            let Op = ip;
            const op = Ip;
            let Sp, xp, Lp;
            for (cp = pp.measureText(Op).width; cp > op;) {
              for (Sp = 0, xp = 0, Lp = ""; xp < op;) Sp++, Lp = Op.substr(0, Sp), xp = pp.measureText(Lp).width;
              Sp--, Lp = Lp.substr(0, Sp);
              const ip = Sp;
              if (" " !== Op.substr(Sp, 1)) {
                for (;
                  " " !== Op.substr(Sp, 1) && 0 !== Sp;) Sp--;
                0 === Sp && (Sp = ip), Lp = Op.substr(0, Sp)
              }
              Lp = this.justify ? this.justifyLine(pp, Lp, yp, "\u200a", Ip) : Lp, Op = Op.substr(Sp), cp = pp.measureText(Op).width, Pp.push(Lp)
            }
            cp > 0 && Pp.push(Op)
          }
        }));
        const Up = this.lineHeight ? this.lineHeight : this.getTextHeight(pp, ip),
          wp = Up * (Pp.length - 1),
          vp = wp / 2;
        let tp = op;
        "top" === this.vAlign ? Ap = op + xp : "bottom" === this.vAlign ? (Ap = Yp - wp, tp = Yp) : (tp = op + Sp / 2, Ap -= vp), Pp.forEach((ip => {
          ip = ip.trim(), pp.fillText(ip, Dp, Ap), Ap += Up
        })), this.debug && (pp.lineWidth = 3, pp.strokeStyle = "#00909e", pp.strokeRect(cp, op, Ip, Sp), pp.lineWidth = 2, pp.strokeStyle = "#f6d743", pp.beginPath(), pp.moveTo(Dp, op), pp.lineTo(Dp, Yp), pp.stroke(), pp.strokeStyle = "#ff6363", pp.beginPath(), pp.moveTo(cp, tp), pp.lineTo(Lp, tp), pp.stroke());
        return {
          height: wp + Up
        }
      },
      getTextHeight: function(pp, ip) {
        const cp = pp.textBaseline;
        pp.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Op
        } = pp.measureText(ip);
        return pp.textBaseline = cp, Op
      },
      justifyLine: function(pp, ip, cp, Op, op) {
        const Ip = ip.trim(),
          Sp = pp.measureText(Ip).width,
          xp = Ip.split(/\s+/).length - 1,
          Lp = Math.floor((op - Sp) / cp);
        if (xp <= 0 || Lp <= 0) return Ip;
        const Yp = Math.floor(Lp / xp);
        let Dp = Lp - xp * Yp,
          Ap = [];
        for (let Pp = 0; Pp < Yp; Pp++) Ap.push(Op);
        Ap = Ap.join("");
        return Ip.replace(/\s+/g, (pp => {
          const ip = Dp > 0 ? Ap + Op : Ap;
          return Dp--, pp + ip
        }))
      }
    }
  },
  39304: (pp, ip, cp) => {
    function Op(pp, ip) {
      return ip.set(pp), ip
    }
    cp.d(ip, {
      d: () => Op
    })
  },
  38890: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Up,
      f: () => yp,
      i: () => Pp,
      l: () => Dp,
      n: () => Ap
    });
    var Op = cp(4341),
      op = cp(337);
    const Ip = 1024,
      Sp = 1536,
      xp = 2 * Op.l + 1,
      Lp = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Yp = 1.5;

    function Dp(pp, ip, cp) {
      if ("string" !== typeof pp) return ip;
      try {
        const cp = JSON.parse(pp);
        return cp && "object" === typeof cp ? cp : ip
      } catch (Op) {
        return void 0 !== cp && console.error(`Couldn't parse ${cp}`, Op), ip
      }
    }

    function Ap(pp) {
      return Dp(pp, null, "a leaderboard's rows")
    }

    function Pp(pp, ip) {
      var cp, Op;
      return null !== ip && void 0 !== ip ? ip : {
        status: null !== (cp = pp.status) && void 0 !== cp ? cp : "loading",
        entries: null !== (Op = pp.entries) && void 0 !== Op ? Op : []
      }
    }

    function Wp(pp, ip) {
      return "number" === typeof pp && Number.isFinite(pp) && pp > 0 ? pp : ip
    }

    function yp(pp, ip) {
      const cp = Wp(pp.size, 1);
      let Op = Wp(pp.width, Wp(2.5 * cp, 2.5)),
        op = Wp(pp.height, Wp(3.75 * cp, 3.75));
      Number.isFinite(Ip * op / Op) && Number.isFinite(Sp * Op / op) || (Op = 2.5, op = 3.75);
      const xp = op / Op,
        Lp = Math.max(1, Math.min(Ip, ip / xp));
      return {
        width: Op,
        height: op,
        layoutWidth: Math.max(Ip, Sp / xp),
        layoutHeight: Math.max(Sp, Ip * xp),
        pixelWidth: Math.round(Lp),
        pixelHeight: Math.round(Math.max(1, Math.min(ip, Lp * xp)))
      }
    }

    function Up(pp, ip, cp, Sp, Dp, Ap) {
      pp.setTransform(1, 0, 0, 1, 0, 0), pp.fillStyle = op.N.defaultNameTagBackground, pp.fillRect(0, 0, ip, cp), pp.scale(ip / Sp.layoutWidth, cp / Sp.layoutHeight), pp.translate((Sp.layoutWidth - Ip) / 2, 0),
        function(pp, ip, cp, Ip) {
          var Sp, Dp, Ap, Pp;
          const {
            top: Wp,
            around: yp,
            showPlayerText: Up,
            localPlayerDbId: tp
          } = cp, {
            whiteUiText: Hp,
            grayUiText: dp,
            yellowUiText: ep
          } = op.N;
          pp.textBaseline = "middle";
          const jp = function(ip, cp, Op, op, Ip, Sp) {
              let xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              pp.font = `bold ${op}px 'Jetbrains Mono', monospace`, pp.fillStyle = Ip, pp.textAlign = xp;
              let Lp = ip.replace(/[\r\n\t]/g, " ");
              if (pp.measureText(Lp).width > Sp) {
                for (; Lp.length > 0 && pp.measureText(`${Lp}\u2026`).width > Sp;) Lp = Lp.slice(0, -1);
                Lp += "\u2026"
              }
              pp.fillText(Lp, cp, Op)
            },
            kp = ip => {
              pp.fillStyle = Hp, pp.globalAlpha = .15, pp.fillRect(24, ip, 976, 2), pp.globalAlpha = 1
            },
            mp = null === tp ? null : (0, op.gc)(tp),
            Rp = pp => null !== mp && pp.playerHash === mp,
            qp = wp(Wp.entries, Op.n),
            Mp = "ready" === Wp.status && qp.length > 0,
            Cp = null === yp ? [] : wp(yp.entries, xp),
            Ep = qp.some(Rp),
            Xp = null === yp ? null : function(pp) {
              const ip = pp;
              if (!ip || !Number.isFinite(ip.rank) || !Number.isFinite(ip.tied) || !Number.isFinite(ip.total)) return null;
              return ip
            }(yp.standing),
            lp = Cp.find(Rp),
            Qp = qp.find(Rp),
            Jp = null === Xp || void 0 === lp ? null : {
              value: lp.value,
              rank: Xp.rank
            },
            Bp = vp(qp, void 0 === Qp || Qp.value === (null === Jp || void 0 === Jp ? void 0 : Jp.value) ? Jp : null),
            Np = vp(Cp, Jp),
            Tp = (pp, ip) => {
              const cp = pp.findIndex(Rp);
              return cp >= 0 ? ip[cp] : null
            },
            fp = null !== (Sp = null !== (Dp = null === Xp || void 0 === Xp ? void 0 : Xp.rank) && void 0 !== Dp ? Dp : Tp(Cp, Np)) && void 0 !== Sp ? Sp : Tp(qp, Bp);
          pp.font = "bold 34px 'Jetbrains Mono', monospace";
          const bp = [...Mp ? Bp : [], ...Ep ? [] : Np],
            hp = Math.min(280, Math.max(0, ...bp.map((ip => pp.measureText(Lp.format(ip)).width)))),
            ap = hp <= 80,
            np = ap ? 80 : 32 + hp,
            Fp = ap ? 148 : np + 28,
            gp = 660 - Fp;
          jp(`TOP ${Op.n}  /  ALL TIME`, 24, 52, 28, dp, 976), jp(Up ? String(null !== (Ap = ip.title) && void 0 !== Ap ? Ap : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Hp, 976), jp("RANK", 32, 174, 28, dp, Fp - 40), jp("PLAYER", Fp, 174, 28, dp, gp), jp(Up ? String(null !== (Pp = ip.scoreLabel) && void 0 !== Pp ? Pp : "Score").slice(0, 24) : "Score", 992, 174, 28, dp, 304, "right"), kp(202);
          const Gp = (Ip - 232) / (Op.n + Yp + xp),
            rp = 208 + Op.n * Gp,
            Zp = rp + Yp * Gp,
            zp = (ip, cp, Op, op) => {
              const Ip = Rp(ip);
              pp.fillStyle = Ip ? ep : Hp, pp.globalAlpha = Ip ? .15 : op ? .035 : 0, pp.fillRect(24, Op - Gp / 2 + 1, 976, Gp - 2), pp.globalAlpha = 1;
              const Sp = Ip ? ep : Hp;
              jp(Lp.format(cp), np, Op, 34, Sp, ap ? 80 : hp, ap ? "center" : "right"), jp(Up ? String(ip.name).slice(0, 64) : "Player", Fp, Op, 34, Sp, gp);
              const xp = Lp.format(ip.value);
              jp(pp.measureText(xp).width > 304 ? ip.value.toExponential(6) : xp, 992, Op, 34, Sp, 304, "right")
            };
          if (Mp)
            for (const [Op, op] of qp.entries()) zp(op, Bp[Op], 208 + (Op + .5) * Gp, Op % 2 === 0);
          else {
            const pp = "error" === Wp.status,
              ip = pp ? "Couldn't load leaderboard" : "ready" === Wp.status ? "No scores yet" : "Loading leaderboard\u2026",
              cp = pp ? "Trying again shortly" : "ready" === Wp.status ? "Be the first on the board!" : "Fetching the top players",
              Op = (208 + rp) / 2;
            jp(ip, 512, Op - 28, 40, pp ? op.N.redUiText : Hp, 960, "center"), jp(cp, 512, Op + 27, 30, dp, 960, "center")
          }
          const sp = rp + Yp * Gp / 2;
          if (null === fp) kp(sp);
          else {
            const ip = null === Xp ? 0 : Xp.tied - 1,
              cp = `YOUR RANK #${Lp.format(fp)}${null===Xp?"":` of ${Lp.format(Xp.total)}`}`;
            pp.font = "bold 36px 'Jetbrains Mono', monospace";
            const Op = Math.max(20, Math.min(36, Math.floor(34560 / pp.measureText(cp).width)));
            jp(cp, 512, sp - (ip > 0 ? 15 : 0), Op, ep, 960, "center"), ip > 0 && jp(`Tied with ${Lp.format(ip)} other${1===ip?"":"s"}`, 512, sp + 24, 24, dp, 960, "center")
          }
          if (null === yp) return;
          const Kp = Zp + xp * Gp / 2;
          if (Ep) jp(`You're in the top ${Op.n}!`, 512, Kp, 40, ep, 960, "center");
          else if (0 === Cp.length) jp("You're not on this board yet", 512, Kp, 34, dp, 960, "center");
          else
            for (const [Op, op] of Cp.entries()) zp(op, Np[Op], Zp + (Op + .5) * Gp, Op % 2 === 0)
        }(pp, Dp, Ap, Sp.layoutHeight)
    }

    function wp(pp, ip) {
      return Array.isArray(pp) ? pp.slice(0, ip).filter((pp => pp && Number.isFinite(pp.rank) && Number.isFinite(pp.value))) : []
    }

    function vp(pp, ip) {
      const cp = [];
      let Op = !1;
      return pp.forEach(((op, Ip) => {
        if (null !== ip && op.value === ip.value) return void cp.push(ip.rank);
        const Sp = Ip > 0 && op.value === pp[Ip - 1].value;
        Sp || (Op = 0 === Ip && 1 !== op.rank), cp.push(Sp && !Op ? cp[Ip - 1] : op.rank)
      })), cp
    }
  },
  39076: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      e: () => Ip
    });
    const Op = 32;

    function op(pp) {
      return Array.from(pp).length
    }

    function Ip(pp) {
      const ip = [""];
      let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        op = "";
      const Ip = () => {
        ip.push(""), cp = 0, op = ""
      };
      for (const Sp of pp.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Sp)) Ip();
        else if (/^\s+$/.test(Sp)) op += Sp;
      else if (Sp.length > 0) {
        const pp = Array.from(Sp);
        cp > 0 && cp + op.length + pp.length > Op && Ip(), ip[ip.length - 1] += op, cp += op.length, op = "";
        for (const op of pp) cp >= Op && Ip(), ip[ip.length - 1] += op, cp++
      }
      return ip[ip.length - 1] += op, ip
    }
  },
  39295: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(36832),
      op = cp.n(Op);
    const Ip = [1, 1, 1];

    function Sp(pp) {
      if (!pp) return [...Ip];
      try {
        const [ip, cp, Op] = op()(pp).rgb().array();
        return [ip / 255, cp / 255, Op / 255]
      } catch (ip) {
        return console.warn(`Invalid groundArrowPath colour "${pp}":`, ip), [...Ip]
      }
    }
  },
  39403: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp,
      g: () => Yp,
      h: () => Lp
    });
    var Op = cp(298),
      op = cp(2993);
    const Ip = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      Sp = 512;

    function xp(pp) {
      var ip;
      const cp = Math.min(screen.width, screen.height) * (null !== (ip = (0, Op.e)()) && void 0 !== ip ? ip : (0, op.l)());
      return Math.max(window.innerHeight * (0, op.l)(), cp) / (0, op.p)(pp)
    }

    function Lp(pp, ip, cp) {
      return ip / (2 * Math.tan(cp / 2)) > Sp ? pp : Yp(pp)
    }

    function Yp(pp) {
      return pp.map((pp => pp.replace(Ip, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34258: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      c: () => xp,
      d: () => Sp,
      h: () => op,
      l: () => Op
    });
    const Op = {
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
      op = "/textures/dayNight/sun.png",
      Ip = "/textures/dayNight/moon.png",
      Sp = "/textures/dayNight/stars",
      xp = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39380: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      e: () => Ap,
      h: () => Op,
      j: () => Lp,
      l: () => op,
      o: () => Yp,
      p: () => xp,
      q: () => Sp
    });
    const Op = ["linear", "easeIn", "easeOut", "easeInOut"],
      op = ["movement", "camera", "cursor"],
      Ip = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Sp(pp, ip) {
      return xp(pp, ip, Ip)
    }

    function xp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (pp === ip || Number.isNaN(pp) && Number.isNaN(ip)) return !0;
      if ("object" !== typeof pp || "object" !== typeof ip || null === pp || null === ip || Array.isArray(pp) !== Array.isArray(ip)) return !1;
      const Op = pp,
        op = ip;
      for (const Ip of new Set([...Object.keys(Op), ...Object.keys(op)]))
        if (!cp.includes(Ip) && !xp(Op[Ip], op[Ip])) return !1;
      return !0
    }
    const Lp = {
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
      Yp = "^-[1-9][0-9]*$",
      Dp = "^#[0-9a-fA-F]{6}$",
      Ap = "#000000"
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);