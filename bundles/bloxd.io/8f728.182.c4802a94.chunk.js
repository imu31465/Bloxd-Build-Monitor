export const id = 182;
export const ids = [182];
export const modules = {
  37156: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => Ic
    });
    const Vc = new Map;

    function Ic(cB, Bc) {
      Vc.set(cB, Bc)
    }

    function rB(cB) {
      return cB ? Vc.get(cB) : void 0
    }
  },
  37825: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    var Vc = nc(36784);

    function Ic(cB, Bc, nc) {
      var Ic, rB, uc, sc, Mc, Pc, qB;
      const Oc = (0, Vc.b)(cB, Bc, nc[0], nc[1], nc[2]),
        Tc = Oc ? null !== (Ic = Oc.textCell) && void 0 !== Ic ? Ic : Oc.rect.anchor : nc,
        fc = Bc(Tc[0], Tc[1], Tc[2]);
      return {
        pos: [nc[0], nc[1], nc[2]],
        noticeboardSpan: Oc && {
          width: Oc.rect.width,
          height: Oc.rect.height
        },
        text: null !== (rB = null === fc || void 0 === fc || null === (uc = fc.persisted) || void 0 === uc || null === (sc = uc.shared) || void 0 === sc ? void 0 : sc.text) && void 0 !== rB ? rB : "",
        textSize: null !== (Mc = null === fc || void 0 === fc || null === (Pc = fc.persisted) || void 0 === Pc || null === (qB = Pc.shared) || void 0 === qB ? void 0 : qB.textSize) && void 0 !== Mc ? Mc : null
      }
    }
  },
  37045: (cB, Bc, nc) => {
    function Vc(cB) {
      switch (cB.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    nc.d(Bc, {
      c: () => Ic,
      g: () => rB,
      h: () => Vc
    });
    const Ic = 4,
      rB = 3
  },
  37592: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => rB
    });
    var Vc = nc(302);
    const Ic = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class rB {
      constructor(cB) {
        this.importGame = cB, this.loads = new Map, this.loaded = new Map
      }
      load(cB) {
        const Bc = (0, Vc.Db)(cB);
        if (!Ic.has(Bc)) return Promise.resolve(void 0);
        let nc = this.loads.get(Bc);
        return nc || (nc = this.importGame(Bc).then((cB => {
          const nc = cB.default;
          if ("function" !== typeof nc) throw new Error(`${Bc}'s client code has no default-exported factory`);
          return this.loaded.set(Bc, nc), nc
        })).catch((cB => {
          throw this.loads.delete(Bc), cB
        })), this.loads.set(Bc, nc)), nc
      }
      loadedFactory(cB) {
        const Bc = (0, Vc.Db)(cB);
        if (!Ic.has(Bc)) return;
        const nc = this.loaded.get(Bc);
        if (!nc) throw new Error(`${Bc}'s client code started before it loaded`);
        return nc
      }
    }
  },
  37828: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(8327),
      Ic = nc(35325),
      rB = nc(2444);

    function uc(cB) {
      if (cB === Vc.b) return 0;
      const Bc = (0, rB.e)(cB);
      if (void 0 !== Bc && Bc <= Ic.MAX_BLOCK_ID) return Bc;
      const nc = (0, rB.e)(cB.split("|")[0]);
      if (void 0 !== nc && nc <= Ic.MAX_BLOCK_ID && (0, Ic.rootMetaDescOf)(nc) === cB) return nc;
      throw new Error(`Invalid block name. You sent ${cB}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  37637: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic
    });
    var Vc = nc(27);
    class Ic {
      constructor(cB) {
        this.screen = cB, this.hidesHud = !1
      }
      show(cB, Bc) {
        this.screen.setFade(cB.colour, cB.alpha), this.screen.setLetterbox(!0 === Bc.letterbox, cB.alpha < 1), this.setHudHidden(!0 === Bc.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(cB) {
        this.hidesHud !== cB && (this.hidesHud = cB, Vc.d.set({
          isUiHiddenByCamera: cB
        }))
      }
    }
  },
  37608: (cB, Bc, nc) => {
    nc.d(Bc, {
      A: () => qB,
      b: () => Vc,
      d: () => Tc,
      f: () => Oc,
      h: () => uc,
      k: () => mB,
      n: () => Mc,
      r: () => ec,
      v: () => Pc,
      z: () => sc
    });
    const Vc = Math.PI / 2 - .001,
      Ic = 2 * Math.PI,
      rB = 1e-9;

    function uc(cB, Bc) {
      Bc.heading = cB.heading, Bc.pitch = cB.pitch
    }

    function sc(cB, Bc) {
      const nc = Bc - cB;
      return nc - Ic * Math.floor((nc + Math.PI) / Ic)
    }

    function Mc(cB, Bc, nc) {
      return cB + sc(cB, Bc) * nc
    }

    function Pc(cB) {
      if (!Number.isFinite(cB)) return cB;
      const Bc = cB - Ic * Math.floor(cB / Ic);
      return Bc < Ic ? Bc : 0
    }

    function qB(cB, Bc) {
      return cB + sc(cB, Bc)
    }

    function Oc(cB) {
      return Math.max(-Vc, Math.min(Vc, cB))
    }

    function Tc(cB, Bc, nc) {
      const Vc = Math.cos(Bc);
      return nc[0] = Vc * Math.sin(cB), nc[1] = -Math.sin(Bc), nc[2] = Vc * Math.cos(cB), nc
    }

    function fc(cB, Bc, nc, Vc) {
      const Ic = Math.sqrt(cB * cB + nc * nc);
      return Ic < rB && Math.abs(Bc) < rB || (Ic >= rB && (Vc.heading = Math.atan2(cB, nc)), Vc.pitch = Oc(Math.atan2(-Bc, Ic) + 0)), Vc
    }

    function mB(cB, Bc) {
      return fc(cB[0], cB[1], cB[2], Bc)
    }

    function ec(cB, Bc, nc) {
      return fc(Bc[0] - cB[0], Bc[1] - cB[1], Bc[2] - cB[2], nc)
    }
  },
  37631: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      d: () => Ic
    });
    var Vc = nc(37608);

    function Ic(cB) {
      var Bc;
      const nc = "default" === cB.mode ? "movement" : null !== (Bc = cB.playerFacing) && void 0 !== Bc ? Bc : "movement";
      return "cursor" === nc ? {
        facing: nc,
        mouseTurns: null
      } : {
        facing: nc,
        mouseTurns: "default" !== cB.mode && void 0 !== cB.playerLook ? "look" : "view"
      }
    }

    function rB(cB, Bc, nc, Ic, rB, uc) {
      return uc.QBc = 0, uc.CBc = 0, uc.pointedAt = void 0, void 0 !== Ic ? rB ? (uc.pointedAt = Ic, cB) : (0, Vc.v)(Ic.heading) : rB ? (uc.QBc = Bc, uc.CBc = nc, cB) : (0, Vc.v)(cB + Bc)
    }
  },
  37619: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Hc
    });
    var Vc = nc(37622),
      Ic = nc(37608),
      rB = nc(35592);

    function uc(cB, Bc, nc, Vc) {
      if (!(Vc > 0)) return Bc;
      const Ic = Bc > cB ? Math.min(Bc, cB + nc / Vc) : Math.max(Bc, cB - nc / Vc);
      return Math.abs(Bc - Ic) < 1e-9 ? Bc : Ic
    }
    class sc {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Vc.f,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(cB) {
        !this.isGoingOut() && this.sinceTurnMs < Vc.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: cB
        } : (this.waiting = null, this.startOut(cB))
      }
      fadeIn(cB) {
        this.isGoingOut() ? this.sinceTurnMs < Vc.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: cB
        } : (this.waiting = null, this.startIn(cB)) : this.waiting = null
      }
      advance(cB) {
        const Bc = this.waiting;
        if (null === Bc) return this.step(cB);
        const nc = Vc.k.minFadeTurnMs - this.sinceTurnMs;
        if (nc > cB) return this.step(cB);
        const Ic = this.step(nc);
        return this.waiting = null, "out" === Bc.turn ? this.startOut(Bc.transition) : this.startIn(Bc.minMs), this.step(cB - nc) || Ic
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(cB) {
        ("in" === this.phase || null === this.phase && this.clearMs < Vc.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = cB.colour), this.outMs = cB.outMs, this.holdMs = cB.holdMs, this.inMs = cB.inMs
      }
      startIn(cB) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(cB, this.inMs)
      }
      step(cB) {
        const Bc = this.screen;
        this.sinceTurnMs += cB, null === this.phase && (this.clearMs += cB);
        let nc = !1,
          Ic = cB;
        if ("out" === this.phase) {
          const Vc = (1 - Bc.alpha) * this.outMs;
          if (Bc.alpha = uc(Bc.alpha, 1, cB, this.outMs), Bc.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, Ic = Math.max(0, cB - Vc), nc = !0
        }
        let rB = cB;
        if ("hold" === this.phase) {
          this.heldMs += Ic;
          const cB = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Vc.k.minFadeTurnMs);
          if (cB < 0 || nc) return nc;
          this.phase = "in", this.sinceTurnMs = cB, rB = cB
        }
        return "in" === this.phase && (Bc.alpha = uc(Bc.alpha, 0, rB, this.inMs), Bc.alpha <= 0 && (this.phase = null, this.clearMs = 0)), nc
      }
    }
    var Mc = nc(37604),
      Pc = nc(37627),
      qB = nc(1534),
      Oc = nc(35225);

    function Tc(cB, Bc) {
      for (let nc = 0; nc < Bc.length; nc++) Bc[nc] = cB[nc]
    }

    function fc(cB, Bc) {
      var nc;
      return null !== (nc = cB.fov) && void 0 !== nc ? nc : Bc.getDefaultFov()
    }

    function mB(cB, Bc, nc, Vc, Ic) {
      const rB = 2 / Vc,
        uc = Math.exp(-rB * Ic);
      for (let sc = 0; sc < cB.length; sc++) {
        const Vc = cB[sc] - nc[sc],
          Mc = (Bc[sc] + rB * Vc) * Ic;
        cB[sc] = nc[sc] + (Vc + Mc) * uc, Bc[sc] = (Bc[sc] - rB * Mc) * uc
      }
    }
    class ec {
      constructor(cB, Bc, nc, Vc) {
        var rB, uc, sc, Mc, Pc;
        this.settings = cB, this.rn = Bc, this.targets = nc, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Qu = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Ic.v)((0, qB.m)(null !== (rB = cB.viewHeading) && void 0 !== rB ? rB : 0)),
          pitch: (0, Ic.f)((0, qB.m)(null !== (uc = cB.viewElevation) && void 0 !== uc ? uc : 45))
        }, this.closestDistance = null !== (sc = cB.closestDistance) && void 0 !== sc ? sc : Math.min(6, null !== (Mc = cB.furthestDistance) && void 0 !== Mc ? Mc : 1 / 0), this.furthestDistance = null !== (Pc = cB.furthestDistance) && void 0 !== Pc ? Pc : Math.max(64, this.closestDistance);
        const Oc = (0, Ic.d)(this.base.heading, this.base.pitch, this.forward),
          Tc = Vc.position,
          fc = this.closestDistance;
        this.goal = [Tc[0] + Oc[0] * fc, Tc[1] + Oc[1] * fc, Tc[2] + Oc[2] * fc, fc, this.base.heading, this.base.pitch]
      }
      update(cB, Bc, nc) {
        var Vc, rB;
        this.placeGoal(null !== (Vc = this.settings.fov) && void 0 !== Vc ? Vc : this.rn.getBaseFov()), this.goal[4] = (0, Ic.A)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const uc = null !== (rB = this.settings.smoothMs) && void 0 !== rB ? rB : 400;
        !this.started || uc < 1 ? (Tc(this.goal, this.smoothed), this.Qu.fill(0), this.started = !0) : mB(this.smoothed, this.Qu, this.goal, uc, cB), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Ic.f)(this.smoothed[5]), Bc.apply(this.angles, nc);
        const sc = (0, Ic.d)(nc.heading, nc.pitch, this.forward);
        for (let Ic = 0; Ic < 3; Ic++) nc.position[Ic] = this.smoothed[Ic] - sc[Ic] * this.smoothed[3];
        nc.fov = fc(this.settings, this.rn)
      }
      continueFrom(cB) {
        cB instanceof ec && (Tc(cB.goal, this.goal), Tc(cB.smoothed, this.smoothed), Tc(cB.Qu, this.Qu), this.framedTargets = cB.framedTargets, this.started = cB.started)
      }
      reset() {
        this.Qu.fill(0), this.started = !1
      }
      placeGoal(cB) {
        var Bc;
        let nc = 0;
        for (const qB of this.settings.targets) {
          const cB = this.targets.currentAimPoint(qB);
          cB && (0, Mc.g)(cB, this.pointAt(nc++))
        }
        if (nc > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const cB = this.targets.aimPoint(this.rn.localPlayerId);
          cB && (0, Mc.g)(cB, this.pointAt(nc++))
        }
        const Vc = this.goal;
        if (0 === nc) return void(Vc[3] = this.withinDistances(Vc[3]));
        for (let Mc = 0; Mc < 3; Mc++) {
          let cB = 1 / 0,
            Bc = -1 / 0;
          for (let Vc = 0; Vc < nc; Vc++) cB = Math.min(cB, this.points[Vc][Mc]), Bc = Math.max(Bc, this.points[Vc][Mc]);
          Vc[Mc] = (cB + Bc) / 2
        }
        let Ic = 0;
        for (let Mc = 0; Mc < nc; Mc++) {
          const cB = this.points[Mc];
          Ic = Math.max(Ic, Math.hypot(cB[0] - Vc[0], cB[1] - Vc[1], cB[2] - Vc[2]))
        }
        const rB = Math.tan((0, qB.m)(cB) / 2),
          uc = Math.atan(rB * (!0 === this.settings.letterbox ? Oc.c : 1)),
          sc = Math.atan(rB * this.rn.getAspectRatio()),
          Pc = (Ic + (null !== (Bc = this.settings.padding) && void 0 !== Bc ? Bc : 2)) / Math.sin(Math.min(uc, sc));
        Vc[3] = this.withinDistances(Pc)
      }
      withinDistances(cB) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, cB))
      }
      pointAt(cB) {
        return cB === this.points.length && this.points.push([0, 0, 0]), this.points[cB]
      }
    }
    class tB {
      constructor(cB) {
        this.limits = cB, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(cB) {
        this.limits && (this.yawOffset = cB.yawOffset, this.pitchOffset = cB.pitchOffset, this.idleMs = cB.idleMs)
      }
      update(cB, Bc) {
        const nc = this.limits;
        if (!nc) return;
        const Vc = Number.isFinite(Bc.QBc) ? Bc.QBc : 0,
          Ic = Number.isFinite(Bc.CBc) ? Bc.CBc : 0;
        if (Bc.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: Bc.pointedAt.heading,
          pitch: Bc.pointedAt.pitch
        };
        else if (0 !== Vc || 0 !== Ic) this.idleMs = 0, this.yawOffset += Vc, this.pitchOffset += Ic;
        else {
          const Bc = Math.max(0, this.idleMs + cB - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += cB, void 0 !== nc.returnMs && Bc > 0) {
            const cB = nc.returnMs > 0 ? Math.exp(-3 * Bc / nc.returnMs) : 0;
            this.yawOffset *= cB, this.pitchOffset *= cB
          }
        }
        this.clampOffsets(nc)
      }
      clampOffsets(cB) {
        if (cB.maxYaw >= 180) this.yawOffset = (0, Ic.z)(0, this.yawOffset);
        else {
          const Bc = (0, qB.m)(cB.maxYaw);
          this.yawOffset = Math.max(-Bc, Math.min(Bc, this.yawOffset))
        }
        const Bc = (0, qB.m)(cB.maxPitch);
        this.pitchOffset = Math.max(-Bc, Math.min(Bc, this.pitchOffset))
      }
      apply(cB, Bc) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Ic.z)(cB.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - cB.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const nc = (0, Ic.f)(cB.pitch + this.pitchOffset);
        this.pitchOffset = nc - cB.pitch, Bc.heading = (0, Ic.v)(cB.heading + this.yawOffset), Bc.pitch = nc
      }
      unapply(cB, Bc) {
        Bc.heading = (0, Ic.v)(cB.heading - this.yawOffset), Bc.pitch = (0, Ic.f)(cB.pitch - this.pitchOffset)
      }
    }
    const Sc = 1e-6;

    function yB(cB) {
      return Math.sqrt(cB[0] * cB[0] + cB[1] * cB[1] + cB[2] * cB[2])
    }

    function zB(cB, Bc, nc, Vc, Ic) {
      const rB = Ic * Ic,
        uc = rB * Ic;
      return (2 * uc - 3 * rB + 1) * cB + (uc - 2 * rB + Ic) * Bc + (-2 * uc + 3 * rB) * nc + (uc - rB) * Vc
    }

    function pc(cB, Bc, nc, Vc, Ic) {
      const rB = Ic * Ic;
      return (6 * rB - 6 * Ic) * cB + (3 * rB - 4 * Ic + 1) * Bc + (-6 * rB + 6 * Ic) * nc + (3 * rB - 2 * Ic) * Vc
    }

    function hc(cB, Bc) {
      const nc = Bc[0] - cB[0],
        Vc = Bc[1] - cB[1],
        Ic = Bc[2] - cB[2];
      return Math.sqrt(nc * nc + Vc * Vc + Ic * Ic)
    }

    function aB(cB, Bc, nc, Vc, Ic, rB) {
      for (let uc = 0; uc < 3; uc++) rB[uc] = Ic ? cB[uc] * Vc : nc[uc] - Bc[uc];
      return Ic && function(cB, Bc) {
        const nc = yB(cB);
        if (nc > Bc) {
          const Vc = Bc / nc;
          cB[0] *= Vc, cB[1] *= Vc, cB[2] *= Vc
        }
      }(rB, 3 * hc(Bc, nc)), rB
    }

    function lc(cB, Bc, nc, Vc) {
      for (let Ic = 0; Ic < 3; Ic++) Vc[Ic] = 6 * (Bc[Ic] - cB[Ic]) - 2 * nc[Ic];
      if (yB(Vc) < Sc)
        for (let Ic = 0; Ic < 3; Ic++) Vc[Ic] = Bc[Ic] - cB[Ic];
      return Vc
    }

    function Yc(cB, Bc) {
      return [2 * Bc[0] - cB[0], 2 * Bc[1] - cB[1], 2 * Bc[2] - cB[2]]
    }

    function Lc(cB, Bc, nc, Vc, Ic, rB, uc) {
      if (!rB && !uc) return 0;
      const sc = rB ? cB : 2 * Bc - nc,
        Mc = uc ? nc : 2 * Bc - cB,
        Pc = rB ? Vc : Ic,
        qB = uc ? Ic : Vc,
        Oc = (Bc - sc) / Pc,
        Tc = (Mc - Bc) / qB;
      if (Oc * Tc <= 0) return 0;
      const fc = (Mc - sc) / (Pc + qB),
        mB = 3 * Math.min(Math.abs(Oc), Math.abs(Tc));
      return Math.max(-mB, Math.min(mB, fc))
    }

    function gB(cB, Bc, nc, Vc, Ic, rB, uc) {
      const {
        u: sc,
        segmentMs: Mc
      } = cB;
      if (!cB.curved) return nc + (Vc - nc) * sc;
      return zB(nc, Lc(Bc, nc, Vc, cB.beforeMs, Mc, rB, !0) * Mc, Vc, Lc(nc, Vc, Ic, Mc, cB.afterMs, !0, uc) * Mc, sc)
    }

    function Uc(cB) {
      return Math.abs(cB.pitch) >= Ic.b
    }
    class bB {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.nodes = cB, this.prevNodes = nc, this.nextNodes = Vc, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = cB.map(((cB, nc) => this.nodeTangent(Bc, Ic, nc)))
      }
      sample(cB, Bc, nc) {
        const {
          index: Vc,
          toIndex: rB,
          segmentMs: uc,
          curved: sc
        } = cB, Mc = this.fromAngles, Pc = this.toAngles, qB = this.nodeAngles(Vc, nc.position, Bc, Mc), Oc = this.nodeAngles(rB, nc.position, Bc, Pc);
        if (uc > 0 && "aim" !== qB && "aim" !== Oc && this.liveTangent(cB, Mc)) return nc.heading = (0, Ic.v)(Mc.heading), void(nc.pitch = Mc.pitch);
        if ("none" === qB && "none" === Oc) return;
        !sc && uc > 0 && ("tangent" === qB && this.liveTangent(cB, Mc), "tangent" === Oc && this.liveTangent(cB, Pc)), "none" === qB ? (0, Ic.h)(Pc, Mc) : "none" === Oc && (0, Ic.h)(Mc, Pc);
        const Tc = sc && cB.beforeIndex >= 0 && "none" !== this.nodeAngles(cB.beforeIndex, nc.position, Bc, this.beforeAngles),
          fc = sc && cB.afterIndex >= 0 && "none" !== this.nodeAngles(cB.afterIndex, nc.position, Bc, this.afterAngles),
          mB = (0, Ic.A)(Mc.heading, Pc.heading),
          ec = gB(cB, Tc ? (0, Ic.A)(Mc.heading, this.beforeAngles.heading) : 0, Mc.heading, mB, fc ? (0, Ic.A)(mB, this.afterAngles.heading) : 0, Tc, fc);
        nc.heading = (0, Ic.v)(ec), nc.pitch = (0, Ic.f)(gB(cB, this.beforeAngles.pitch, Mc.pitch, Pc.pitch, this.afterAngles.pitch, Tc, fc))
      }
      nodeAngles(cB, Bc, nc, Vc) {
        const Ic = this.rawNodeAngles(cB, Bc, nc, Vc);
        return "none" !== Ic && Uc(Vc) && !this.borrowHeading(this.prevNodes[cB], Bc, nc, Vc) && this.borrowHeading(this.nextNodes[cB], Bc, nc, Vc), Ic
      }
      borrowHeading(cB, Bc, nc, Vc) {
        const Ic = this.borrowedAngles;
        return !(cB < 0 || "none" === this.rawNodeAngles(cB, Bc, nc, Ic) || Uc(Ic)) && (Vc.heading = Ic.heading, !0)
      }
      rawNodeAngles(cB, Bc, nc, Vc) {
        const rB = this.nodes[cB].keyframe;
        if (rB.lookDirection) return (0, Ic.k)(rB.lookDirection, Vc), "aim";
        if (void 0 !== rB.lookAt) {
          const cB = nc(rB.lookAt);
          if (cB) return (0, Ic.r)(Bc, cB, Vc), "aim"
        }
        const uc = this.tangents[cB];
        return uc ? ((0, Ic.h)(uc, Vc), "tangent") : "none"
      }
      liveTangent(cB, Bc) {
        const nc = this.nodes[cB.index].position,
          Vc = this.nodes[cB.toIndex].position,
          rB = this.derivative;
        for (let Ic = 0; Ic < 3; Ic++) rB[Ic] = pc(nc[Ic], cB.fromTangent[Ic], Vc[Ic], cB.toTangent[Ic], cB.u);
        return yB(rB) > 1e-9 ? ((0, Ic.k)(rB, Bc), !0) : !(hc(nc, Vc) < Sc) && ((0, Ic.k)(lc(nc, Vc, cB.u < .5 ? cB.toTangent : cB.fromTangent, rB), Bc), !0)
      }
      nodeTangent(cB, Bc, nc) {
        var Vc;
        const rB = cB[nc];
        if (yB(rB) > 1e-9) return (0, Ic.k)(rB, {
          heading: 0,
          pitch: 0
        });
        const uc = null !== (Vc = this.restDirectionTo(nc, nc + 1, cB, Bc)) && void 0 !== Vc ? Vc : this.restDirectionTo(nc, nc - 1, cB, Bc);
        return uc ? (0, Ic.k)(uc, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(cB, Bc, nc, Vc) {
        const Ic = this.nodes[cB],
          rB = this.nodes[Bc];
        if (!rB || hc(Ic.position, rB.position) < Sc) return null;
        const [uc, sc] = Bc > cB ? [Ic, rB] : [rB, Ic], Mc = aB(nc[Bc], uc.position, sc.position, sc.timeMs - uc.timeMs, Vc, [0, 0, 0]);
        return lc(uc.position, sc.position, Mc, [0, 0, 0])
      }
    }

    function Zc(cB, Bc) {
      const nc = cB.lookDirection || Bc.lookDirection ? function(cB, Bc) {
        if (!cB || !Bc) return cB === Bc;
        const nc = yB(cB),
          Vc = yB(Bc);
        return Math.hypot(cB[0] / nc - Bc[0] / Vc, cB[1] / nc - Bc[1] / Vc, cB[2] / nc - Bc[2] / Vc) < Sc
      }(cB.lookDirection, Bc.lookDirection) : (Vc = cB.lookAt, Ic = Bc.lookAt, "object" !== typeof Vc || "object" !== typeof Ic ? Vc === Ic : hc(Vc, Ic) < Sc);
      var Vc, Ic;
      return hc(cB.position, Bc.position) < Sc && cB.fov === Bc.fov && nc
    }
    class Qc {
      constructor(cB, Bc, nc) {
        if (this.smooth = Bc, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === cB.length) throw new Error("A camera path needs at least one keyframe");
        for (let rB = 1; rB < cB.length; rB++)
          if (!(cB[rB].timeMs > cB[rB - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = cB.map((cB => {
          var Bc;
          return {
            timeMs: cB.timeMs,
            position: [...cB.position],
            keyframe: cB,
            easing: (0, rB.n)(null !== (Bc = cB.easing) && void 0 !== Bc ? Bc : "linear")
          }
        }));
        const Vc = this.nodes[0],
          Ic = this.nodes[this.nodes.length - 1],
          uc = nc && this.nodes.length > 1;
        uc && !Zc(Vc.keyframe, Ic.keyframe) && this.nodes.push({
          ...Vc,
          timeMs: Ic.timeMs + (Ic.timeMs - Vc.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = uc ? this.nodes[this.nodes.length - 1].timeMs - Vc.timeMs : 0, this.prevNodes = this.nodes.map(((cB, Bc) => this.neighbour(Bc, -1))), this.nextNodes = this.nodes.map(((cB, Bc) => this.neighbour(Bc, 1))), this.prevGaps = this.prevNodes.map(((cB, Bc) => cB >= 0 ? this.gapMs(Bc, -1) : 0)), this.nextGaps = this.nextNodes.map(((cB, Bc) => cB >= 0 ? this.gapMs(Bc, 1) : 0)), this.velocities = this.nodes.map(((cB, Bc) => {
          const nc = this.prevNodes[Bc],
            Vc = this.nextNodes[Bc];
          return function(cB, Bc, nc, Vc, Ic, rB) {
            if (rB[0] = 0, rB[1] = 0, rB[2] = 0, !cB && !nc) return rB;
            const uc = null !== cB && void 0 !== cB ? cB : Yc(null !== nc && void 0 !== nc ? nc : Bc, Bc),
              sc = null !== nc && void 0 !== nc ? nc : Yc(null !== cB && void 0 !== cB ? cB : Bc, Bc),
              Mc = cB ? Vc : Ic,
              Pc = nc ? Ic : Vc,
              qB = hc(uc, Bc),
              Oc = hc(Bc, sc);
            if (qB < Sc || Oc < Sc) return rB;
            const Tc = Math.sqrt(qB),
              fc = Math.sqrt(Oc),
              mB = (Tc + fc) / (Mc + Pc);
            for (let ec = 0; ec < 3; ec++) {
              const cB = (Bc[ec] - uc[ec]) / Tc - (sc[ec] - uc[ec]) / (Tc + fc) + (sc[ec] - Bc[ec]) / fc;
              rB[ec] = cB * mB
            }
            return rB
          }(nc >= 0 ? this.nodes[nc].position : null, cB.position, Vc >= 0 ? this.nodes[Vc].position : null, this.prevGaps[Bc], this.nextGaps[Bc], [0, 0, 0])
        })), this.aim = new bB(this.nodes, this.velocities, this.prevNodes, this.nextNodes, Bc)
      }
      sample(cB, Bc, nc, Vc) {
        const Ic = this.findSegment(this.pathTime(cB));
        this.samplePosition(Ic, Vc.position), this.aim.sample(Ic, Bc, Vc);
        const {
          beforeIndex: rB,
          afterIndex: uc
        } = Ic;
        Vc.fov = gB(Ic, rB >= 0 ? this.fovAt(rB, nc) : 0, this.fovAt(Ic.index, nc), this.fovAt(Ic.toIndex, nc), uc >= 0 ? this.fovAt(uc, nc) : 0, rB >= 0, uc >= 0)
      }
      pathTime(cB) {
        const Bc = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || cB <= Bc) return cB;
        const nc = cB - Bc;
        return Bc + nc - this.loopMs * Math.floor(nc / this.loopMs)
      }
      findSegment(cB) {
        const Bc = this.nodes,
          nc = this.segment;
        let Vc = nc.index;
        for (cB < Bc[Vc].timeMs && (Vc = 0); Vc < Bc.length - 2 && Bc[Vc + 1].timeMs <= cB;) Vc++;
        const Ic = Math.min(Vc + 1, Bc.length - 1),
          uc = Bc[Ic].timeMs - Bc[Vc].timeMs;
        return nc.index = Vc, nc.toIndex = Ic, nc.segmentMs = uc, nc.u = uc > 0 ? (0, rB.j)((cB - Bc[Vc].timeMs) / uc, Bc[Vc].easing) : 1, nc.curved = this.smooth && uc > 0, nc.beforeIndex = this.prevNodes[Vc], nc.afterIndex = this.nextNodes[Ic], nc.beforeMs = this.prevGaps[Vc], nc.afterMs = this.nextGaps[Ic], nc
      }
      samplePosition(cB, Bc) {
        const {
          fromTangent: nc,
          toTangent: Vc,
          curved: Ic
        } = cB, rB = this.nodes[cB.index].position, uc = this.nodes[cB.toIndex].position;
        aB(this.velocities[cB.index], rB, uc, cB.segmentMs, Ic, nc), aB(this.velocities[cB.toIndex], rB, uc, cB.segmentMs, Ic, Vc);
        const sc = cB.u;
        for (let Mc = 0; Mc < 3; Mc++) Bc[Mc] = Ic ? zB(rB[Mc], nc[Mc], uc[Mc], Vc[Mc], sc) : rB[Mc] + (uc[Mc] - rB[Mc]) * sc
      }
      fovAt(cB, Bc) {
        var nc;
        return null !== (nc = this.nodes[cB].keyframe.fov) && void 0 !== nc ? nc : Bc
      }
      neighbour(cB, Bc) {
        const nc = this.nodes.length - 1,
          Vc = cB + Bc;
        return Vc >= 0 && Vc <= nc ? Vc : this.loopMs <= 0 || nc < 2 ? -1 : Vc < 0 ? nc - 1 : 1
      }
      gapMs(cB, Bc) {
        const nc = this.nodes.length - 1;
        if (1 === Bc) {
          const Bc = cB === nc ? 0 : cB;
          return this.nodes[Bc + 1].timeMs - this.nodes[Bc].timeMs
        }
        const Vc = 0 === cB ? nc : cB;
        return this.nodes[Vc].timeMs - this.nodes[Vc - 1].timeMs
      }
    }
    class Cc {
      constructor(cB) {
        this.rn = cB, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Bc => cB.getEntityPosition(Bc), this.readAimPoint = Bc => cB.getEntityAimPoint(Bc)
      }
      aimPoint(cB) {
        return "string" !== typeof cB ? (0, Mc.n)(cB, 3) ? cB : null : this.resolve(cB, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(cB) {
        const Bc = "string" === typeof cB ? this.rn.getEntityAimPoint(cB) : cB;
        return Bc && (0, Mc.n)(Bc, 3) ? Bc : null
      }
      feetPosition(cB) {
        return this.resolve(cB, this.readFeet, this.lastFeet)
      }
      heading(cB) {
        const Bc = this.rn.getEntityHeading(cB);
        if (null !== Bc && Number.isFinite(Bc)) return this.lastHeadings.set(cB, Bc), Bc;
        const nc = this.lastHeadings.get(cB);
        return void 0 !== nc ? nc : cB === this.rn.localPlayerId ? 0 : this.heading(this.rn.localPlayerId)
      }
      resolve(cB, Bc, nc) {
        const Vc = Bc(cB);
        let Ic = nc.get(cB);
        return Vc && (0, Mc.n)(Vc, 3) ? (Ic || (Ic = [0, 0, 0], nc.set(cB, Ic)), Ic[0] = Vc[0], Ic[1] = Vc[1], Ic[2] = Vc[2], Ic) : Ic || (cB === this.rn.localPlayerId ? null : this.resolve(this.rn.localPlayerId, Bc, nc))
      }
    }

    function vB(cB) {
      return {
        heading: cB.heading,
        pitch: cB.pitch
      }
    }

    function Dc(cB, Bc) {
      Number.isFinite(cB.heading) && Number.isFinite(cB.pitch) || (0, Ic.h)(Bc, cB)
    }

    function Nc(cB, Bc, nc, Vc, rB) {
      if (Bc) return void(0, Ic.k)(Bc, rB);
      const uc = Vc.aimPoint(nc);
      uc && (0, Ic.r)(cB, uc, rB)
    }
    class Ec {
      constructor(cB, Bc, nc, Vc) {
        this.settings = cB, this.rn = Bc, this.targets = nc, this.base = void 0, this.base = vB(Vc)
      }
      update(cB, Bc, nc) {
        var Vc;
        const Ic = this.settings;
        (0, Mc.g)(Ic.position, nc.position), Nc(Ic.position, Ic.lookDirection, null !== (Vc = Ic.lookAt) && void 0 !== Vc ? Vc : this.rn.localPlayerId, this.targets, this.base), Bc.apply(this.base, nc), nc.fov = fc(Ic, this.rn)
      }
      continueFrom(cB) {
        cB instanceof Ec && (0, Ic.h)(cB.base, this.base)
      }
      reset(cB) {
        Dc(this.base, cB)
      }
    }
    class oc {
      constructor(cB, Bc, nc, Vc) {
        this.settings = cB, this.rn = Bc, this.targets = nc, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Qu = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = vB(Vc), this.goal = [...Vc.position]
      }
      update(cB, Bc, nc) {
        var Vc, Ic, rB;
        const uc = this.settings,
          sc = null !== (Vc = uc.target) && void 0 !== Vc ? Vc : this.rn.localPlayerId,
          Pc = this.targets.feetPosition(sc);
        let qB = !1;
        Pc && (qB = this.foundFeet && hc(this.lastFeet, Pc) > 32 + .1 * cB, (0, Mc.g)(Pc, this.lastFeet), this.foundFeet = !0, this.placeGoal(Pc, sc));
        const Oc = null !== (Ic = uc.smoothMs) && void 0 !== Ic ? Ic : 0;
        !this.started || Oc < 1 || qB ? ((0, Mc.g)(this.goal, this.smoothed), this.Qu.fill(0), this.started = !0) : mB(this.smoothed, this.Qu, this.goal, Oc, cB), qB && (this.distance = -1), (0, Mc.g)(this.smoothed, nc.position);
        const Tc = !0 === uc.avoidTerrain ? this.pullIn(sc, cB, nc) : 1;
        let ec = this.goal;
        if ("target" === uc.offsetSpace) ec = nc.position;
        else if (Tc < 1) {
          ec = this.aimOrigin;
          for (let cB = 0; cB < 3; cB++) ec[cB] = nc.position[cB] + (this.goal[cB] - this.smoothed[cB]) * Tc
        }
        Nc(ec, uc.lookDirection, null !== (rB = uc.lookAt) && void 0 !== rB ? rB : sc, this.targets, this.base), Bc.apply(this.base, nc), nc.fov = fc(uc, this.rn)
      }
      continueFrom(cB) {
        cB instanceof oc && (0, Vc.t)(cB.settings.target, this.settings.target) && ((0, Ic.h)(cB.base, this.base), (0, Mc.g)(cB.goal, this.goal), (0, Mc.g)(cB.lastFeet, this.lastFeet), this.foundFeet = cB.foundFeet, (0, Mc.g)(cB.smoothed, this.smoothed), (0, Mc.g)(cB.Qu, this.Qu), this.started = cB.started, !0 === cB.settings.avoidTerrain && (this.distance = cB.distance))
      }
      reset(cB) {
        Dc(this.base, cB), this.Qu.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(cB, Bc, nc) {
        const Vc = this.targets.aimPoint(cB);
        if (!Vc) return 1;
        const Ic = nc.position,
          rB = hc(Vc, Ic);
        if (!(rB > 0)) return 1;
        const uc = this.toCamera;
        for (let Mc = 0; Mc < 3; Mc++) uc[Mc] = (Ic[Mc] - Vc[Mc]) / rB;
        const sc = function(cB, Bc, nc) {
          return cB < 0 || Bc < cB ? Bc : Bc + (cB - Bc) * Math.exp(-nc / 150)
        }(this.distance, function(cB, Bc, nc, Vc) {
          const Ic = cB.raycastTerrain(Bc, nc, Vc);
          return null !== Ic && Number.isFinite(Ic) ? Math.min(Vc, Math.max(0, Ic - .2)) : Vc
        }(this.rn, Vc, uc, rB), Bc);
        if (rB - sc < .001) return this.distance = -1, 1;
        this.distance = sc;
        for (let Mc = 0; Mc < 3; Mc++) Ic[Mc] = Vc[Mc] + uc[Mc] * sc;
        return sc / rB
      }
      placeGoal(cB, Bc) {
        const nc = this.settings.offset;
        let Vc = nc[0],
          Ic = nc[2];
        if ("target" === this.settings.offsetSpace) {
          const cB = this.targets.heading(Bc),
            rB = Math.cos(cB),
            uc = Math.sin(cB);
          Vc = nc[0] * rB + nc[2] * uc, Ic = -nc[0] * uc + nc[2] * rB
        }
        this.goal[0] = cB[0] + Vc, this.goal[1] = cB[1] + nc[1], this.goal[2] = cB[2] + Ic
      }
    }
    class Wc {
      constructor(cB, Bc, nc, Vc) {
        var Ic, rB;
        this.settings = cB, this.rn = Bc, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = cB.keyframes.length > 0 ? new Qc(cB.keyframes, null === (Ic = cB.smooth) || void 0 === Ic || Ic, null !== (rB = cB.loop) && void 0 !== rB && rB) : null, this.base = (0, Mc.c)(Vc, (0, Mc.j)()), this.resolveTarget = cB => nc.aimPoint(cB)
      }
      update(cB, Bc, nc) {
        this.elapsedMs += cB;
        const Vc = fc(this.settings, this.rn);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Vc, this.base) : this.base.fov = Vc, (0, Mc.g)(this.base.position, nc.position), nc.fov = this.base.fov, Bc.apply(this.base, nc)
      }
      continueFrom(cB) {
        cB instanceof Wc && (0, Vc.t)(cB.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = cB.elapsedMs, (0, Mc.c)(cB.base, this.base))
      }
      reset(cB) {
        Dc(this.base, cB), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function wc(cB, Bc) {
      return (0, Vc.v)(cB, Bc)
    }
    class kB {
      constructor(cB, Bc, nc) {
        var Vc;
        this.settings = cB, this.rn = Bc, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Ic = null !== nc && nc.settings.mode === cB.mode,
          rB = Ic ? nc.pose : Bc.getDefaultPose();
        this.pose = (0, Mc.c)(rB, (0, Mc.j)()), this.lastGoodPose = (0, Mc.c)(Ic ? nc.lastGoodPose : rB, (0, Mc.j)()), this.look = new tB(cB.playerLook), this.targets = null !== (Vc = null === nc || void 0 === nc ? void 0 : nc.targets) && void 0 !== Vc ? Vc : new Cc(Bc);
        const uc = (0, Mc.c)(rB, (0, Mc.j)());
        Ic && nc.look.unapply(uc, uc), this.mode = function(cB, Bc, nc, Vc) {
          switch (cB.mode) {
            case "fixed":
              return new Ec(cB, Bc, nc, Vc);
            case "follow":
              return new oc(cB, Bc, nc, Vc);
            case "path":
              return new Wc(cB, Bc, nc, Vc);
            case "frame":
              return new ec(cB, Bc, nc, Vc)
          }
        }(cB, Bc, this.targets, uc), Ic && (this.look.continueFrom(nc.look), this.mode.continueFrom(nc.mode))
      }
      update(cB, Bc) {
        return this.look.update(cB, Bc), this.mode.update(cB, this.look, this.pose), (0, Mc.m)(this.pose) ? (0, Mc.c)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, Mc.c)(this.lastGoodPose, this.pose), this.mode.reset((0, Mc.m)(this.lastGoodPose) ? this.lastGoodPose : this.rn.getDefaultPose())), this.pose
      }
    }

    function Xc(cB) {
      return [0, 0, cB[2], cB[3]]
    }
    class Hc {
      constructor(cB) {
        this.rn = cB, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new sc, this.shot = null, this.blend = null, this.mixed = (0, Mc.j)(), this.output = (0, Mc.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(cB) {
        const Bc = (0, Pc.e)(cB);
        if ((0, Vc.t)(Bc, this.pending ? this.pending.settings : this.settings)) return;
        const nc = wc(this.settings, Bc);
        if (void 0 !== Bc.transition && !nc) return this.pending = {
          settings: Bc,
          shot: "default" === Bc.mode ? null : new kB(Bc, this.rn, null)
        }, void this.fade.fadeOut(Bc.transition);
        const Ic = null !== this.pending;
        this.pending = null, !Ic && nc || this.fade.fadeIn(Vc.k.minTransitionFadeMs), this.show(Bc, !1)
      }
      show(cB, Bc) {
        var nc, Ic;
        if ((0, Vc.t)(cB, this.settings)) return;
        const uc = !Bc && wc(this.settings, cB);
        this.settings = cB;
        const sc = null !== this.blend && this.blend.elapsedMs > 0,
          Pc = (0, Mc.c)(this.hasOutput ? this.output : this.rn.getDefaultPose(), (0, Mc.j)());
        if (this.shot = "default" === cB.mode ? null : new kB(cB, this.rn, Bc ? null : this.shot), uc) return;
        const qB = Bc || !this.shot && !this.hasOutput ? 0 : null !== (nc = cB.blendInMs) && void 0 !== nc ? nc : 0;
        if (qB <= 0) return void(this.blend = null);
        const Oc = (0, rB.n)(null !== (Ic = cB.blendEasing) && void 0 !== Ic ? Ic : "easeInOut");
        this.blend = {
          from: Pc,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: qB,
          easing: sc ? Xc(Oc) : Oc
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
      update(cB, Bc) {
        const nc = Number.isFinite(cB) && cB > 0 ? cB : 0;
        if (this.fade.advance(nc) && null !== this.pending) {
          const {
            settings: cB
          } = this.pending;
          this.pending = null, this.show(cB, !0)
        }
        this.loadingPositions.length = 0;
        const Vc = this.pending;
        if (null !== Vc && void 0 !== Vc && Vc.shot) {
          const cB = "path" === Vc.settings.mode ? 0 : nc;
          this.noteLoadingPosition(Vc.shot.update(cB, Mc.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const uc = this.shot ? this.shot.update(nc, Bc) : this.rn.getDefaultPose();
        this.shot && this.noteLoadingPosition(uc.position);
        const sc = this.blend;
        if (!sc) return this.writeOutput(uc);
        sc.elapsedMs += nc;
        const Pc = Math.min(1, sc.elapsedMs / sc.durationMs);
        if (sc.headingDelta = Number.isFinite(sc.headingDelta) ? (0, Ic.A)(sc.headingDelta, uc.heading - sc.from.heading) : (0, Ic.z)(sc.from.heading, uc.heading), (0, Mc.r)(sc.from, uc, sc.headingDelta, (0, rB.j)(Pc, sc.easing), this.mixed), Pc >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else sc.fromScripted && this.noteLoadingPosition(sc.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(cB) {
        if (cB.every(Number.isFinite)) {
          const Bc = this.loadingPositions;
          Bc.push((0, Mc.g)(cB, this.loadingSlots[Bc.length]))
        }
      }
      writeOutput(cB) {
        const Bc = this.output;
        (0, Mc.m)(cB) ? (0, Mc.c)(cB, Bc) : this.hasOutput || (0, Mc.c)(this.rn.getDefaultPose(), Bc), Bc.pitch = (0, Ic.f)(Bc.pitch);
        const nc = this.rn.getDefaultFov(),
          rB = Number.isFinite(nc) && nc > 0 && nc < 180,
          uc = rB ? Math.min(Vc.k.minFov, nc) : Vc.k.minFov,
          sc = rB ? Math.max(Vc.k.maxFov, nc) : Vc.k.maxFov;
        return Bc.fov = Number.isFinite(Bc.fov) ? Math.min(sc, Math.max(uc, Bc.fov)) : sc, this.hasOutput = !0, Bc
      }
    }
  },
  37604: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      c: () => sc,
      g: () => uc,
      j: () => rB,
      m: () => Pc,
      n: () => Mc,
      r: () => qB
    });
    var Vc = nc(37608);
    const Ic = {
      QBc: 0,
      CBc: 0
    };

    function rB() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function uc(cB, Bc) {
      return Bc[0] = cB[0], Bc[1] = cB[1], Bc[2] = cB[2], Bc
    }

    function sc(cB, Bc) {
      return uc(cB.position, Bc.position), Bc.heading = cB.heading, Bc.pitch = cB.pitch, Bc.fov = cB.fov, Bc
    }

    function Mc(cB, Bc) {
      return Array.isArray(cB) && cB.length === Bc && cB.every(Number.isFinite)
    }

    function Pc(cB) {
      return Mc(cB.position, 3) && Number.isFinite(cB.heading) && Number.isFinite(cB.pitch) && Number.isFinite(cB.fov)
    }

    function qB(cB, Bc, nc, Ic, rB) {
      for (let Vc = 0; Vc < 3; Vc++) rB.position[Vc] = cB.position[Vc] + (Bc.position[Vc] - cB.position[Vc]) * Ic;
      return rB.heading = (0, Vc.v)(cB.heading + nc * Ic), rB.pitch = cB.pitch + (Bc.pitch - cB.pitch) * Ic, rB.fov = cB.fov + (Bc.fov - cB.fov) * Ic, rB
    }
  },
  37627: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => lc,
      g: () => Tc
    });
    var Vc = nc(37622),
      Ic = nc(37604);
    const rB = Vc.i,
      uc = Vc.n;

    function sc(cB, Bc, nc, Vc) {
      return Number.isFinite(cB) ? Math.min(nc, Math.max(Bc, cB)) : Vc
    }

    function Mc(cB, Bc, nc) {
      return void 0 !== cB && Number.isFinite(cB) ? Math.min(nc, Math.max(Bc, cB)) : void 0
    }

    function Pc(cB) {
      const Bc = Vc.k.maxCoordinate;
      return [Math.min(Bc, Math.max(-Bc, cB[0])), Math.min(Bc, Math.max(-Bc, cB[1])), Math.min(Bc, Math.max(-Bc, cB[2]))]
    }

    function qB(cB) {
      return "string" === typeof cB ? cB : (0, Ic.n)(cB, 3) ? Pc(cB) : void 0
    }
    const Oc = new RegExp(Vc.p);

    function Tc(cB) {
      return "string" === typeof cB && Oc.test(cB)
    }

    function fc(cB) {
      const Bc = [];
      if (!Array.isArray(cB)) return Bc;
      for (const nc of cB.slice(0, Vc.k.maxFrameTargets)) {
        const cB = qB(nc);
        void 0 === cB || "string" === typeof cB && !Tc(cB) || Bc.push(cB)
      }
      return Bc
    }

    function mB(cB) {
      if (!(0, Ic.n)(cB, 3)) return;
      const Bc = Math.max(Math.abs(cB[0]), Math.abs(cB[1]), Math.abs(cB[2])),
        nc = Math.hypot(cB[0] / Bc, cB[1] / Bc, cB[2] / Bc);
      return 0 === Bc || Bc * nc < Vc.k.minDirectionLength ? void 0 : [cB[0] / Bc / nc, cB[1] / Bc / nc, cB[2] / Bc / nc]
    }

    function ec(cB) {
      if (void 0 !== cB) return "string" === typeof cB ? rB.includes(cB) ? cB : void 0 : (0, Ic.n)(cB, 4) ? [sc(cB[0], 0, 1, 0), sc(cB[1], Vc.k.minEasingY, Vc.k.maxEasingY, 0), sc(cB[2], 0, 1, 1), sc(cB[3], Vc.k.minEasingY, Vc.k.maxEasingY, 1)] : "linear"
    }

    function tB(cB) {
      if (cB) return {
        maxYaw: sc(cB.maxYaw, 0, Vc.k.maxPlayerLook, 0),
        maxPitch: sc(cB.maxPitch, 0, Vc.k.maxPlayerLook, 0),
        returnMs: Mc(cB.returnMs, 0, Vc.k.maxReturnMs)
      }
    }
    const Sc = new RegExp(Vc.c);

    function yB(cB) {
      var Bc;
      if ("object" !== typeof cB || null === cB) return;
      const nc = Vc.k.maxTransitionMs,
        Ic = Vc.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof cB.colour && Sc.test(cB.colour) ? cB.colour : Vc.f,
        outMs: sc(cB.outMs, Ic, nc, Ic),
        holdMs: sc(null !== (Bc = cB.holdMs) && void 0 !== Bc ? Bc : 0, 0, nc, 0),
        inMs: sc(cB.inMs, Ic, nc, Ic)
      }
    }

    function zB(cB) {
      return !0 === cB || void 0
    }

    function pc(cB) {
      if ("object" !== typeof cB || null === cB) return !1;
      const Bc = cB.lookAt;
      return Number.isFinite(cB.timeMs) && (0, Ic.n)(cB.position, 3) && (void 0 === Bc || "string" === typeof Bc || (0, Ic.n)(Bc, 3))
    }

    function hc(cB) {
      return {
        ...cB,
        timeMs: sc(cB.timeMs, 0, Vc.k.maxPathMs, 0),
        position: Pc(cB.position),
        lookAt: qB(cB.lookAt),
        lookDirection: mB(cB.lookDirection),
        fov: Mc(cB.fov, Vc.k.minFov, Vc.k.maxFov),
        easing: ec(cB.easing)
      }
    }

    function aB(cB) {
      const Bc = [];
      if (!Array.isArray(cB)) return Bc;
      for (const nc of cB.slice(0, Vc.k.maxKeyframes)) {
        if (!pc(nc)) continue;
        const cB = hc(nc);
        (0 === Bc.length || cB.timeMs > Bc[Bc.length - 1].timeMs) && Bc.push(cB)
      }
      return Bc
    }

    function lc(cB) {
      if ("object" !== typeof cB || null === cB) return {
        mode: "default"
      };
      const Bc = {
          blendInMs: Mc(cB.blendInMs, 0, Vc.k.maxBlendInMs),
          blendEasing: ec(cB.blendEasing),
          transition: yB(cB.transition),
          letterbox: zB(cB.letterbox),
          hideHud: zB(cB.hideHud)
        },
        nc = {
          mode: "default",
          ...Bc
        };
      if ("default" === cB.mode || "fixed" === cB.mode && !(0, Ic.n)(cB.position, 3)) return nc;
      const rB = {
        ...Bc,
        fov: Mc(cB.fov, Vc.k.minFov, Vc.k.maxFov),
        playerFacing: (Oc = cB.playerFacing, uc.includes(Oc) ? Oc : void 0),
        playerLook: tB(cB.playerLook)
      };
      var Oc, Tc;
      switch (cB.mode) {
        case "fixed":
          return {
            ...cB, ...rB, position: Pc(cB.position), lookAt: qB(cB.lookAt), lookDirection: mB(cB.lookDirection)
          };
        case "follow":
          return {
            ...cB, ...rB, target: "string" === typeof cB.target ? cB.target : void 0, lookAt: qB(cB.lookAt), offset: (Tc = cB.offset, Array.isArray(Tc) ? [sc(Tc[0], -Vc.k.maxOffset, Vc.k.maxOffset, 0), sc(Tc[1], -Vc.k.maxOffset, Vc.k.maxOffset, 0), sc(Tc[2], -Vc.k.maxOffset, Vc.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: mB(cB.lookDirection), smoothMs: Mc(cB.smoothMs, 0, Vc.k.maxSmoothMs)
          };
        case "path":
          return {
            ...cB, ...rB, keyframes: aB(cB.keyframes)
          };
        case "frame":
          return {
            ...cB, ...rB, targets: fc(cB.targets), viewHeading: Mc(cB.viewHeading, -Vc.k.maxFrameHeading, Vc.k.maxFrameHeading), viewElevation: Mc(cB.viewElevation, 0, Vc.k.maxFrameElevation), padding: Mc(cB.padding, 0, Vc.k.maxFrameDistance), closestDistance: Mc(cB.closestDistance, 0, Vc.k.maxFrameDistance), furthestDistance: Mc(cB.furthestDistance, 0, Vc.k.maxFrameDistance), smoothMs: Mc(cB.smoothMs, 0, Vc.k.maxSmoothMs)
          };
        default:
          return nc
      }
    }
  },
  37580: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      return Bc.set(cB), Bc
    }
    nc.d(Bc, {
      b: () => Vc
    })
  },
  37576: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(35273),
      Ic = nc.n(Vc);
    const rB = [1, 1, 1];

    function uc(cB) {
      if (!cB) return [...rB];
      try {
        const [Bc, nc, Vc] = Ic()(cB).rgb().array();
        return [Bc / 255, nc / 255, Vc / 255]
      } catch (Bc) {
        return console.warn(`Invalid groundArrowPath colour "${cB}":`, Bc), [...rB]
      }
    }
  },
  33024: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      f: () => sc,
      g: () => uc,
      h: () => Ic,
      j: () => Vc
    });
    const Vc = {
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
      Ic = "/textures/dayNight/sun.png",
      rB = "/textures/dayNight/moon.png",
      uc = "/textures/dayNight/stars",
      sc = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  37622: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => qB,
      f: () => Oc,
      i: () => Vc,
      k: () => Mc,
      n: () => Ic,
      p: () => Pc,
      t: () => sc,
      v: () => uc
    });
    const Vc = ["linear", "easeIn", "easeOut", "easeInOut"],
      Ic = ["movement", "camera", "cursor"],
      rB = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function uc(cB, Bc) {
      return sc(cB, Bc, rB)
    }

    function sc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (cB === Bc || Number.isNaN(cB) && Number.isNaN(Bc)) return !0;
      if ("object" !== typeof cB || "object" !== typeof Bc || null === cB || null === Bc || Array.isArray(cB) !== Array.isArray(Bc)) return !1;
      const Vc = cB,
        Ic = Bc;
      for (const rB of new Set([...Object.keys(Vc), ...Object.keys(Ic)]))
        if (!nc.includes(rB) && !sc(Vc[rB], Ic[rB])) return !1;
      return !0
    }
    const Mc = {
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
      Pc = "^-[1-9][0-9]*$",
      qB = "^#[0-9a-fA-F]{6}$",
      Oc = "#000000"
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);