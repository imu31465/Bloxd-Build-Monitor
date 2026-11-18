export const id = 183;
export const ids = [183];
export const modules = {
  37783: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy
    });
    class Uy {
      constructor(yb, bb) {
        this.read = yb, this.apply = bb, this.release = null
      }
      turn(yb, bb) {
        const Wy = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: bb,
          forcedCameraDirection: [yb[0], yb[1], yb[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), bb + 100),
          transitionMs: Wy
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(yb) {
        null !== this.release && (clearTimeout(this.release.timer), yb && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  37314: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      g: () => hy
    });
    const Uy = new Map;

    function hy(yb, bb) {
      Uy.set(yb, bb)
    }

    function fy(yb) {
      return yb ? Uy.get(yb) : void 0
    }
  },
  38206: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy
    });
    var Uy = Wy(36916);

    function hy(yb, bb, Wy) {
      var hy, fy, Zy, cb, Py, oy, By;
      const Ky = (0, Uy.d)(yb, bb, Wy[0], Wy[1], Wy[2]),
        ey = Ky ? null !== (hy = Ky.textCell) && void 0 !== hy ? hy : Ky.rect.anchor : Wy,
        qb = bb(ey[0], ey[1], ey[2]);
      return {
        pos: [Wy[0], Wy[1], Wy[2]],
        noticeboardSpan: Ky && {
          width: Ky.rect.width,
          height: Ky.rect.height
        },
        text: null !== (fy = null === qb || void 0 === qb || null === (Zy = qb.persisted) || void 0 === Zy || null === (cb = Zy.shared) || void 0 === cb ? void 0 : cb.text) && void 0 !== fy ? fy : "",
        textSize: null !== (Py = null === qb || void 0 === qb || null === (oy = qb.persisted) || void 0 === oy || null === (By = oy.shared) || void 0 === By ? void 0 : By.textSize) && void 0 !== Py ? Py : null
      }
    }
  },
  37188: (yb, bb, Wy) => {
    function Uy(yb) {
      switch (yb.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    Wy.d(bb, {
      d: () => hy,
      h: () => fy,
      i: () => Uy
    });
    const hy = 4,
      fy = 3
  },
  37804: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      i: () => fy
    });
    var Uy = Wy(258);
    const hy = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class fy {
      constructor(yb) {
        this.importGame = yb, this.loads = new Map, this.loaded = new Map
      }
      load(yb) {
        const bb = (0, Uy.Rb)(yb);
        if (!hy.has(bb)) return Promise.resolve(void 0);
        let Wy = this.loads.get(bb);
        return Wy || (Wy = this.importGame(bb).then((yb => {
          const Wy = yb.default;
          if ("function" !== typeof Wy) throw new Error(`${bb}'s client code has no default-exported factory`);
          return this.loaded.set(bb, Wy), Wy
        })).catch((yb => {
          throw this.loads.delete(bb), yb
        })), this.loads.set(bb, Wy)), Wy
      }
      loadedFactory(yb) {
        const bb = (0, Uy.Rb)(yb);
        if (!hy.has(bb)) return;
        const Wy = this.loaded.get(bb);
        if (!Wy) throw new Error(`${bb}'s client code started before it loaded`);
        return Wy
      }
    }
  },
  38215: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(8556),
      hy = Wy(35464),
      fy = Wy(2597);

    function Zy(yb) {
      if (yb === Uy.e) return 0;
      const bb = (0, fy.b)(yb);
      if (void 0 !== bb && bb <= hy.MAX_BLOCK_ID) return bb;
      const Wy = (0, fy.b)(yb.split("|")[0]);
      if (void 0 !== Wy && Wy <= hy.MAX_BLOCK_ID && (0, hy.rootMetaDescOf)(Wy) === yb) return Wy;
      throw new Error(`Invalid block name. You sent ${yb}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  37859: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = Wy(19);
    class hy {
      constructor(yb) {
        this.screen = yb, this.hidesHud = !1
      }
      show(yb, bb) {
        this.screen.setFade(yb.colour, yb.alpha), this.screen.setLetterbox(!0 === bb.letterbox, yb.alpha < 1), this.setHudHidden(!0 === bb.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(yb) {
        this.hidesHud !== yb && (this.hidesHud = yb, Uy.d.set({
          isUiHiddenByCamera: yb
        }))
      }
    }
  },
  37832: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy,
      h: () => ey,
      i: () => Ky,
      k: () => Zy,
      l: () => sy,
      m: () => Py,
      o: () => Sy,
      r: () => oy,
      s: () => cb,
      w: () => By
    });
    const Uy = Math.PI / 2 - .001,
      hy = 2 * Math.PI,
      fy = 1e-9;

    function Zy(yb, bb) {
      bb.heading = yb.heading, bb.pitch = yb.pitch
    }

    function cb(yb, bb) {
      const Wy = bb - yb;
      return Wy - hy * Math.floor((Wy + Math.PI) / hy)
    }

    function Py(yb, bb, Wy) {
      return yb + cb(yb, bb) * Wy
    }

    function oy(yb) {
      if (!Number.isFinite(yb)) return yb;
      const bb = yb - hy * Math.floor(yb / hy);
      return bb < hy ? bb : 0
    }

    function By(yb, bb) {
      return yb + cb(yb, bb)
    }

    function Ky(yb) {
      return Math.max(-Uy, Math.min(Uy, yb))
    }

    function ey(yb, bb, Wy) {
      const Uy = Math.cos(bb);
      return Wy[0] = Uy * Math.sin(yb), Wy[1] = -Math.sin(bb), Wy[2] = Uy * Math.cos(yb), Wy
    }

    function qb(yb, bb, Wy, Uy) {
      const hy = Math.sqrt(yb * yb + Wy * Wy);
      return hy < fy && Math.abs(bb) < fy || (hy >= fy && (Uy.heading = Math.atan2(yb, Wy)), Uy.pitch = Ky(Math.atan2(-bb, hy) + 0)), Uy
    }

    function sy(yb, bb) {
      return qb(yb[0], yb[1], yb[2], bb)
    }

    function Sy(yb, bb, Wy) {
      return qb(bb[0] - yb[0], bb[1] - yb[1], bb[2] - yb[2], Wy)
    }
  },
  37857: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      f: () => hy
    });
    var Uy = Wy(37832);

    function hy(yb) {
      var bb;
      const Wy = "default" === yb.mode ? "movement" : null !== (bb = yb.playerFacing) && void 0 !== bb ? bb : "movement";
      return "cursor" === Wy ? {
        facing: Wy,
        mouseTurns: null
      } : {
        facing: Wy,
        mouseTurns: "default" !== yb.mode && void 0 !== yb.playerLook ? "look" : "view"
      }
    }

    function fy(yb, bb, Wy, hy, fy, Zy) {
      return Zy.aWy = 0, Zy.Fby = 0, Zy.pointedAt = void 0, void 0 !== hy ? fy ? (Zy.pointedAt = hy, yb) : (0, Uy.r)(hy.heading) : fy ? (Zy.aWy = bb, Zy.Fby = Wy, yb) : (0, Uy.r)(yb + bb)
    }
  },
  37846: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => jb
    });
    var Uy = Wy(37848),
      hy = Wy(37832),
      fy = Wy(35719);

    function Zy(yb, bb, Wy, Uy) {
      if (!(Uy > 0)) return bb;
      const hy = bb > yb ? Math.min(bb, yb + Wy / Uy) : Math.max(bb, yb - Wy / Uy);
      return Math.abs(bb - hy) < 1e-9 ? bb : hy
    }
    class cb {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Uy.e,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(yb) {
        !this.isGoingOut() && this.sinceTurnMs < Uy.j.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: yb
        } : (this.waiting = null, this.startOut(yb))
      }
      fadeIn(yb) {
        this.isGoingOut() ? this.sinceTurnMs < Uy.j.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: yb
        } : (this.waiting = null, this.startIn(yb)) : this.waiting = null
      }
      advance(yb) {
        const bb = this.waiting;
        if (null === bb) return this.step(yb);
        const Wy = Uy.j.minFadeTurnMs - this.sinceTurnMs;
        if (Wy > yb) return this.step(yb);
        const hy = this.step(Wy);
        return this.waiting = null, "out" === bb.turn ? this.startOut(bb.transition) : this.startIn(bb.minMs), this.step(yb - Wy) || hy
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(yb) {
        ("in" === this.phase || null === this.phase && this.clearMs < Uy.j.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = yb.colour), this.outMs = yb.outMs, this.holdMs = yb.holdMs, this.inMs = yb.inMs
      }
      startIn(yb) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(yb, this.inMs)
      }
      step(yb) {
        const bb = this.screen;
        this.sinceTurnMs += yb, null === this.phase && (this.clearMs += yb);
        let Wy = !1,
          hy = yb;
        if ("out" === this.phase) {
          const Uy = (1 - bb.alpha) * this.outMs;
          if (bb.alpha = Zy(bb.alpha, 1, yb, this.outMs), bb.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, hy = Math.max(0, yb - Uy), Wy = !0
        }
        let fy = yb;
        if ("hold" === this.phase) {
          this.heldMs += hy;
          const yb = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Uy.j.minFadeTurnMs);
          if (yb < 0 || Wy) return Wy;
          this.phase = "in", this.sinceTurnMs = yb, fy = yb
        }
        return "in" === this.phase && (bb.alpha = Zy(bb.alpha, 0, fy, this.inMs), bb.alpha <= 0 && (this.phase = null, this.clearMs = 0)), Wy
      }
    }
    var Py = Wy(37826),
      oy = Wy(37853),
      By = Wy(1541),
      Ky = Wy(35344);

    function ey(yb, bb) {
      for (let Wy = 0; Wy < bb.length; Wy++) bb[Wy] = yb[Wy]
    }

    function qb(yb, bb) {
      var Wy;
      return null !== (Wy = yb.fov) && void 0 !== Wy ? Wy : bb.getDefaultFov()
    }

    function sy(yb, bb, Wy, Uy, hy) {
      const fy = 2 / Uy,
        Zy = Math.exp(-fy * hy);
      for (let cb = 0; cb < yb.length; cb++) {
        const Uy = yb[cb] - Wy[cb],
          Py = (bb[cb] + fy * Uy) * hy;
        yb[cb] = Wy[cb] + (Uy + Py) * Zy, bb[cb] = (bb[cb] - fy * Py) * Zy
      }
    }
    class Sy {
      constructor(yb, bb, Wy, Uy) {
        var fy, Zy, cb, Py, oy;
        this.settings = yb, this.Kb = bb, this.targets = Wy, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.nZ = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, hy.r)((0, By.j)(null !== (fy = yb.viewHeading) && void 0 !== fy ? fy : 0)),
          pitch: (0, hy.i)((0, By.j)(null !== (Zy = yb.viewElevation) && void 0 !== Zy ? Zy : 45))
        }, this.closestDistance = null !== (cb = yb.closestDistance) && void 0 !== cb ? cb : Math.min(6, null !== (Py = yb.furthestDistance) && void 0 !== Py ? Py : 1 / 0), this.furthestDistance = null !== (oy = yb.furthestDistance) && void 0 !== oy ? oy : Math.max(64, this.closestDistance);
        const Ky = (0, hy.h)(this.base.heading, this.base.pitch, this.forward),
          ey = Uy.position,
          qb = this.closestDistance;
        this.goal = [ey[0] + Ky[0] * qb, ey[1] + Ky[1] * qb, ey[2] + Ky[2] * qb, qb, this.base.heading, this.base.pitch]
      }
      update(yb, bb, Wy) {
        var Uy, fy;
        this.placeGoal(null !== (Uy = this.settings.fov) && void 0 !== Uy ? Uy : this.Kb.getBaseFov()), this.goal[4] = (0, hy.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Zy = null !== (fy = this.settings.smoothMs) && void 0 !== fy ? fy : 400;
        !this.started || Zy < 1 ? (ey(this.goal, this.smoothed), this.nZ.fill(0), this.started = !0) : sy(this.smoothed, this.nZ, this.goal, Zy, yb), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, hy.i)(this.smoothed[5]), bb.apply(this.angles, Wy);
        const cb = (0, hy.h)(Wy.heading, Wy.pitch, this.forward);
        for (let hy = 0; hy < 3; hy++) Wy.position[hy] = this.smoothed[hy] - cb[hy] * this.smoothed[3];
        Wy.fov = qb(this.settings, this.Kb)
      }
      continueFrom(yb) {
        yb instanceof Sy && (ey(yb.goal, this.goal), ey(yb.smoothed, this.smoothed), ey(yb.nZ, this.nZ), this.framedTargets = yb.framedTargets, this.started = yb.started)
      }
      reset() {
        this.nZ.fill(0), this.started = !1
      }
      placeGoal(yb) {
        var bb;
        let Wy = 0;
        for (const By of this.settings.targets) {
          const yb = this.targets.currentAimPoint(By);
          yb && (0, Py.j)(yb, this.pointAt(Wy++))
        }
        if (Wy > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const yb = this.targets.aimPoint(this.Kb.localPlayerId);
          yb && (0, Py.j)(yb, this.pointAt(Wy++))
        }
        const Uy = this.goal;
        if (0 === Wy) return void(Uy[3] = this.withinDistances(Uy[3]));
        for (let Py = 0; Py < 3; Py++) {
          let yb = 1 / 0,
            bb = -1 / 0;
          for (let Uy = 0; Uy < Wy; Uy++) yb = Math.min(yb, this.points[Uy][Py]), bb = Math.max(bb, this.points[Uy][Py]);
          Uy[Py] = (yb + bb) / 2
        }
        let hy = 0;
        for (let Py = 0; Py < Wy; Py++) {
          const yb = this.points[Py];
          hy = Math.max(hy, Math.hypot(yb[0] - Uy[0], yb[1] - Uy[1], yb[2] - Uy[2]))
        }
        const fy = Math.tan((0, By.j)(yb) / 2),
          Zy = Math.atan(fy * (!0 === this.settings.letterbox ? Ky.d : 1)),
          cb = Math.atan(fy * this.Kb.getAspectRatio()),
          oy = (hy + (null !== (bb = this.settings.padding) && void 0 !== bb ? bb : 2)) / Math.sin(Math.min(Zy, cb));
        Uy[3] = this.withinDistances(oy)
      }
      withinDistances(yb) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, yb))
      }
      pointAt(yb) {
        return yb === this.points.length && this.points.push([0, 0, 0]), this.points[yb]
      }
    }
    class Ey {
      constructor(yb) {
        this.limits = yb, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(yb) {
        this.limits && (this.yawOffset = yb.yawOffset, this.pitchOffset = yb.pitchOffset, this.idleMs = yb.idleMs)
      }
      update(yb, bb) {
        const Wy = this.limits;
        if (!Wy) return;
        const Uy = Number.isFinite(bb.aWy) ? bb.aWy : 0,
          hy = Number.isFinite(bb.Fby) ? bb.Fby : 0;
        if (bb.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: bb.pointedAt.heading,
          pitch: bb.pointedAt.pitch
        };
        else if (0 !== Uy || 0 !== hy) this.idleMs = 0, this.yawOffset += Uy, this.pitchOffset += hy;
        else {
          const bb = Math.max(0, this.idleMs + yb - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += yb, void 0 !== Wy.returnMs && bb > 0) {
            const yb = Wy.returnMs > 0 ? Math.exp(-3 * bb / Wy.returnMs) : 0;
            this.yawOffset *= yb, this.pitchOffset *= yb
          }
        }
        this.clampOffsets(Wy)
      }
      clampOffsets(yb) {
        if (yb.maxYaw >= 180) this.yawOffset = (0, hy.s)(0, this.yawOffset);
        else {
          const bb = (0, By.j)(yb.maxYaw);
          this.yawOffset = Math.max(-bb, Math.min(bb, this.yawOffset))
        }
        const bb = (0, By.j)(yb.maxPitch);
        this.pitchOffset = Math.max(-bb, Math.min(bb, this.pitchOffset))
      }
      apply(yb, bb) {
        this.pointedAt && this.limits && (this.yawOffset = (0, hy.s)(yb.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - yb.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const Wy = (0, hy.i)(yb.pitch + this.pitchOffset);
        this.pitchOffset = Wy - yb.pitch, bb.heading = (0, hy.r)(yb.heading + this.yawOffset), bb.pitch = Wy
      }
      unapply(yb, bb) {
        bb.heading = (0, hy.r)(yb.heading - this.yawOffset), bb.pitch = (0, hy.i)(yb.pitch - this.pitchOffset)
      }
    }
    const ly = 1e-6;

    function mb(yb) {
      return Math.sqrt(yb[0] * yb[0] + yb[1] * yb[1] + yb[2] * yb[2])
    }

    function Cy(yb, bb, Wy, Uy, hy) {
      const fy = hy * hy,
        Zy = fy * hy;
      return (2 * Zy - 3 * fy + 1) * yb + (Zy - 2 * fy + hy) * bb + (-2 * Zy + 3 * fy) * Wy + (Zy - fy) * Uy
    }

    function Ty(yb, bb, Wy, Uy, hy) {
      const fy = hy * hy;
      return (6 * fy - 6 * hy) * yb + (3 * fy - 4 * hy + 1) * bb + (-6 * fy + 6 * hy) * Wy + (3 * fy - 2 * hy) * Uy
    }

    function Vy(yb, bb) {
      const Wy = bb[0] - yb[0],
        Uy = bb[1] - yb[1],
        hy = bb[2] - yb[2];
      return Math.sqrt(Wy * Wy + Uy * Uy + hy * hy)
    }

    function Jy(yb, bb, Wy, Uy, hy, fy) {
      for (let Zy = 0; Zy < 3; Zy++) fy[Zy] = hy ? yb[Zy] * Uy : Wy[Zy] - bb[Zy];
      return hy && function(yb, bb) {
        const Wy = mb(yb);
        if (Wy > bb) {
          const Uy = bb / Wy;
          yb[0] *= Uy, yb[1] *= Uy, yb[2] *= Uy
        }
      }(fy, 3 * Vy(bb, Wy)), fy
    }

    function gb(yb, bb, Wy, Uy) {
      for (let hy = 0; hy < 3; hy++) Uy[hy] = 6 * (bb[hy] - yb[hy]) - 2 * Wy[hy];
      if (mb(Uy) < ly)
        for (let hy = 0; hy < 3; hy++) Uy[hy] = bb[hy] - yb[hy];
      return Uy
    }

    function Gy(yb, bb) {
      return [2 * bb[0] - yb[0], 2 * bb[1] - yb[1], 2 * bb[2] - yb[2]]
    }

    function Oy(yb, bb, Wy, Uy, hy, fy, Zy) {
      if (!fy && !Zy) return 0;
      const cb = fy ? yb : 2 * bb - Wy,
        Py = Zy ? Wy : 2 * bb - yb,
        oy = fy ? Uy : hy,
        By = Zy ? hy : Uy,
        Ky = (bb - cb) / oy,
        ey = (Py - bb) / By;
      if (Ky * ey <= 0) return 0;
      const qb = (Py - cb) / (oy + By),
        sy = 3 * Math.min(Math.abs(Ky), Math.abs(ey));
      return Math.max(-sy, Math.min(sy, qb))
    }

    function Ry(yb, bb, Wy, Uy, hy, fy, Zy) {
      const {
        u: cb,
        segmentMs: Py
      } = yb;
      if (!yb.curved) return Wy + (Uy - Wy) * cb;
      return Cy(Wy, Oy(bb, Wy, Uy, yb.beforeMs, Py, fy, !0) * Py, Uy, Oy(Wy, Uy, hy, Py, yb.afterMs, !0, Zy) * Py, cb)
    }

    function vb(yb) {
      return Math.abs(yb.pitch) >= hy.d
    }
    class ib {
      constructor(yb, bb, Wy, Uy, hy) {
        this.nodes = yb, this.prevNodes = Wy, this.nextNodes = Uy, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = yb.map(((yb, Wy) => this.nodeTangent(bb, hy, Wy)))
      }
      sample(yb, bb, Wy) {
        const {
          index: Uy,
          toIndex: fy,
          segmentMs: Zy,
          curved: cb
        } = yb, Py = this.fromAngles, oy = this.toAngles, By = this.nodeAngles(Uy, Wy.position, bb, Py), Ky = this.nodeAngles(fy, Wy.position, bb, oy);
        if (Zy > 0 && "aim" !== By && "aim" !== Ky && this.liveTangent(yb, Py)) return Wy.heading = (0, hy.r)(Py.heading), void(Wy.pitch = Py.pitch);
        if ("none" === By && "none" === Ky) return;
        !cb && Zy > 0 && ("tangent" === By && this.liveTangent(yb, Py), "tangent" === Ky && this.liveTangent(yb, oy)), "none" === By ? (0, hy.k)(oy, Py) : "none" === Ky && (0, hy.k)(Py, oy);
        const ey = cb && yb.beforeIndex >= 0 && "none" !== this.nodeAngles(yb.beforeIndex, Wy.position, bb, this.beforeAngles),
          qb = cb && yb.afterIndex >= 0 && "none" !== this.nodeAngles(yb.afterIndex, Wy.position, bb, this.afterAngles),
          sy = (0, hy.w)(Py.heading, oy.heading),
          Sy = Ry(yb, ey ? (0, hy.w)(Py.heading, this.beforeAngles.heading) : 0, Py.heading, sy, qb ? (0, hy.w)(sy, this.afterAngles.heading) : 0, ey, qb);
        Wy.heading = (0, hy.r)(Sy), Wy.pitch = (0, hy.i)(Ry(yb, this.beforeAngles.pitch, Py.pitch, oy.pitch, this.afterAngles.pitch, ey, qb))
      }
      nodeAngles(yb, bb, Wy, Uy) {
        const hy = this.rawNodeAngles(yb, bb, Wy, Uy);
        return "none" !== hy && vb(Uy) && !this.borrowHeading(this.prevNodes[yb], bb, Wy, Uy) && this.borrowHeading(this.nextNodes[yb], bb, Wy, Uy), hy
      }
      borrowHeading(yb, bb, Wy, Uy) {
        const hy = this.borrowedAngles;
        return !(yb < 0 || "none" === this.rawNodeAngles(yb, bb, Wy, hy) || vb(hy)) && (Uy.heading = hy.heading, !0)
      }
      rawNodeAngles(yb, bb, Wy, Uy) {
        const fy = this.nodes[yb].keyframe;
        if (fy.lookDirection) return (0, hy.l)(fy.lookDirection, Uy), "aim";
        if (void 0 !== fy.lookAt) {
          const yb = Wy(fy.lookAt);
          if (yb) return (0, hy.o)(bb, yb, Uy), "aim"
        }
        const Zy = this.tangents[yb];
        return Zy ? ((0, hy.k)(Zy, Uy), "tangent") : "none"
      }
      liveTangent(yb, bb) {
        const Wy = this.nodes[yb.index].position,
          Uy = this.nodes[yb.toIndex].position,
          fy = this.derivative;
        for (let hy = 0; hy < 3; hy++) fy[hy] = Ty(Wy[hy], yb.fromTangent[hy], Uy[hy], yb.toTangent[hy], yb.u);
        return mb(fy) > 1e-9 ? ((0, hy.l)(fy, bb), !0) : !(Vy(Wy, Uy) < ly) && ((0, hy.l)(gb(Wy, Uy, yb.u < .5 ? yb.toTangent : yb.fromTangent, fy), bb), !0)
      }
      nodeTangent(yb, bb, Wy) {
        var Uy;
        const fy = yb[Wy];
        if (mb(fy) > 1e-9) return (0, hy.l)(fy, {
          heading: 0,
          pitch: 0
        });
        const Zy = null !== (Uy = this.restDirectionTo(Wy, Wy + 1, yb, bb)) && void 0 !== Uy ? Uy : this.restDirectionTo(Wy, Wy - 1, yb, bb);
        return Zy ? (0, hy.l)(Zy, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(yb, bb, Wy, Uy) {
        const hy = this.nodes[yb],
          fy = this.nodes[bb];
        if (!fy || Vy(hy.position, fy.position) < ly) return null;
        const [Zy, cb] = bb > yb ? [hy, fy] : [fy, hy], Py = Jy(Wy[bb], Zy.position, cb.position, cb.timeMs - Zy.timeMs, Uy, [0, 0, 0]);
        return gb(Zy.position, cb.position, Py, [0, 0, 0])
      }
    }

    function My(yb, bb) {
      const Wy = yb.lookDirection || bb.lookDirection ? function(yb, bb) {
        if (!yb || !bb) return yb === bb;
        const Wy = mb(yb),
          Uy = mb(bb);
        return Math.hypot(yb[0] / Wy - bb[0] / Uy, yb[1] / Wy - bb[1] / Uy, yb[2] / Wy - bb[2] / Uy) < ly
      }(yb.lookDirection, bb.lookDirection) : (Uy = yb.lookAt, hy = bb.lookAt, "object" !== typeof Uy || "object" !== typeof hy ? Uy === hy : Vy(Uy, hy) < ly);
      var Uy, hy;
      return Vy(yb.position, bb.position) < ly && yb.fov === bb.fov && Wy
    }
    class Yy {
      constructor(yb, bb, Wy) {
        if (this.smooth = bb, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === yb.length) throw new Error("A camera path needs at least one keyframe");
        for (let fy = 1; fy < yb.length; fy++)
          if (!(yb[fy].timeMs > yb[fy - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = yb.map((yb => {
          var bb;
          return {
            timeMs: yb.timeMs,
            position: [...yb.position],
            keyframe: yb,
            easing: (0, fy.p)(null !== (bb = yb.easing) && void 0 !== bb ? bb : "linear")
          }
        }));
        const Uy = this.nodes[0],
          hy = this.nodes[this.nodes.length - 1],
          Zy = Wy && this.nodes.length > 1;
        Zy && !My(Uy.keyframe, hy.keyframe) && this.nodes.push({
          ...Uy,
          timeMs: hy.timeMs + (hy.timeMs - Uy.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Zy ? this.nodes[this.nodes.length - 1].timeMs - Uy.timeMs : 0, this.prevNodes = this.nodes.map(((yb, bb) => this.neighbour(bb, -1))), this.nextNodes = this.nodes.map(((yb, bb) => this.neighbour(bb, 1))), this.prevGaps = this.prevNodes.map(((yb, bb) => yb >= 0 ? this.gapMs(bb, -1) : 0)), this.nextGaps = this.nextNodes.map(((yb, bb) => yb >= 0 ? this.gapMs(bb, 1) : 0)), this.velocities = this.nodes.map(((yb, bb) => {
          const Wy = this.prevNodes[bb],
            Uy = this.nextNodes[bb];
          return function(yb, bb, Wy, Uy, hy, fy) {
            if (fy[0] = 0, fy[1] = 0, fy[2] = 0, !yb && !Wy) return fy;
            const Zy = null !== yb && void 0 !== yb ? yb : Gy(null !== Wy && void 0 !== Wy ? Wy : bb, bb),
              cb = null !== Wy && void 0 !== Wy ? Wy : Gy(null !== yb && void 0 !== yb ? yb : bb, bb),
              Py = yb ? Uy : hy,
              oy = Wy ? hy : Uy,
              By = Vy(Zy, bb),
              Ky = Vy(bb, cb);
            if (By < ly || Ky < ly) return fy;
            const ey = Math.sqrt(By),
              qb = Math.sqrt(Ky),
              sy = (ey + qb) / (Py + oy);
            for (let Sy = 0; Sy < 3; Sy++) {
              const yb = (bb[Sy] - Zy[Sy]) / ey - (cb[Sy] - Zy[Sy]) / (ey + qb) + (cb[Sy] - bb[Sy]) / qb;
              fy[Sy] = yb * sy
            }
            return fy
          }(Wy >= 0 ? this.nodes[Wy].position : null, yb.position, Uy >= 0 ? this.nodes[Uy].position : null, this.prevGaps[bb], this.nextGaps[bb], [0, 0, 0])
        })), this.aim = new ib(this.nodes, this.velocities, this.prevNodes, this.nextNodes, bb)
      }
      sample(yb, bb, Wy, Uy) {
        const hy = this.findSegment(this.pathTime(yb));
        this.samplePosition(hy, Uy.position), this.aim.sample(hy, bb, Uy);
        const {
          beforeIndex: fy,
          afterIndex: Zy
        } = hy;
        Uy.fov = Ry(hy, fy >= 0 ? this.fovAt(fy, Wy) : 0, this.fovAt(hy.index, Wy), this.fovAt(hy.toIndex, Wy), Zy >= 0 ? this.fovAt(Zy, Wy) : 0, fy >= 0, Zy >= 0)
      }
      pathTime(yb) {
        const bb = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || yb <= bb) return yb;
        const Wy = yb - bb;
        return bb + Wy - this.loopMs * Math.floor(Wy / this.loopMs)
      }
      findSegment(yb) {
        const bb = this.nodes,
          Wy = this.segment;
        let Uy = Wy.index;
        for (yb < bb[Uy].timeMs && (Uy = 0); Uy < bb.length - 2 && bb[Uy + 1].timeMs <= yb;) Uy++;
        const hy = Math.min(Uy + 1, bb.length - 1),
          Zy = bb[hy].timeMs - bb[Uy].timeMs;
        return Wy.index = Uy, Wy.toIndex = hy, Wy.segmentMs = Zy, Wy.u = Zy > 0 ? (0, fy.l)((yb - bb[Uy].timeMs) / Zy, bb[Uy].easing) : 1, Wy.curved = this.smooth && Zy > 0, Wy.beforeIndex = this.prevNodes[Uy], Wy.afterIndex = this.nextNodes[hy], Wy.beforeMs = this.prevGaps[Uy], Wy.afterMs = this.nextGaps[hy], Wy
      }
      samplePosition(yb, bb) {
        const {
          fromTangent: Wy,
          toTangent: Uy,
          curved: hy
        } = yb, fy = this.nodes[yb.index].position, Zy = this.nodes[yb.toIndex].position;
        Jy(this.velocities[yb.index], fy, Zy, yb.segmentMs, hy, Wy), Jy(this.velocities[yb.toIndex], fy, Zy, yb.segmentMs, hy, Uy);
        const cb = yb.u;
        for (let Py = 0; Py < 3; Py++) bb[Py] = hy ? Cy(fy[Py], Wy[Py], Zy[Py], Uy[Py], cb) : fy[Py] + (Zy[Py] - fy[Py]) * cb
      }
      fovAt(yb, bb) {
        var Wy;
        return null !== (Wy = this.nodes[yb].keyframe.fov) && void 0 !== Wy ? Wy : bb
      }
      neighbour(yb, bb) {
        const Wy = this.nodes.length - 1,
          Uy = yb + bb;
        return Uy >= 0 && Uy <= Wy ? Uy : this.loopMs <= 0 || Wy < 2 ? -1 : Uy < 0 ? Wy - 1 : 1
      }
      gapMs(yb, bb) {
        const Wy = this.nodes.length - 1;
        if (1 === bb) {
          const bb = yb === Wy ? 0 : yb;
          return this.nodes[bb + 1].timeMs - this.nodes[bb].timeMs
        }
        const Uy = 0 === yb ? Wy : yb;
        return this.nodes[Uy].timeMs - this.nodes[Uy - 1].timeMs
      }
    }
    class Xy {
      constructor(yb) {
        this.Kb = yb, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = bb => yb.getEntityPosition(bb), this.readAimPoint = bb => yb.getEntityAimPoint(bb)
      }
      aimPoint(yb) {
        return "string" !== typeof yb ? (0, Py.o)(yb, 3) ? yb : null : this.resolve(yb, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(yb) {
        const bb = "string" === typeof yb ? this.Kb.getEntityAimPoint(yb) : yb;
        return bb && (0, Py.o)(bb, 3) ? bb : null
      }
      feetPosition(yb) {
        return this.resolve(yb, this.readFeet, this.lastFeet)
      }
      heading(yb) {
        const bb = this.Kb.getEntityHeading(yb);
        if (null !== bb && Number.isFinite(bb)) return this.lastHeadings.set(yb, bb), bb;
        const Wy = this.lastHeadings.get(yb);
        return void 0 !== Wy ? Wy : yb === this.Kb.localPlayerId ? 0 : this.heading(this.Kb.localPlayerId)
      }
      resolve(yb, bb, Wy) {
        const Uy = bb(yb);
        let hy = Wy.get(yb);
        return Uy && (0, Py.o)(Uy, 3) ? (hy || (hy = [0, 0, 0], Wy.set(yb, hy)), hy[0] = Uy[0], hy[1] = Uy[1], hy[2] = Uy[2], hy) : hy || (yb === this.Kb.localPlayerId ? null : this.resolve(this.Kb.localPlayerId, bb, Wy))
      }
    }

    function ny(yb) {
      return {
        heading: yb.heading,
        pitch: yb.pitch
      }
    }

    function uy(yb, bb) {
      Number.isFinite(yb.heading) && Number.isFinite(yb.pitch) || (0, hy.k)(bb, yb)
    }

    function rb(yb, bb, Wy, Uy, fy) {
      if (bb) return void(0, hy.l)(bb, fy);
      const Zy = Uy.aimPoint(Wy);
      Zy && (0, hy.o)(yb, Zy, fy)
    }
    class Hy {
      constructor(yb, bb, Wy, Uy) {
        this.settings = yb, this.Kb = bb, this.targets = Wy, this.base = void 0, this.base = ny(Uy)
      }
      update(yb, bb, Wy) {
        var Uy;
        const hy = this.settings;
        (0, Py.j)(hy.position, Wy.position), rb(hy.position, hy.lookDirection, null !== (Uy = hy.lookAt) && void 0 !== Uy ? Uy : this.Kb.localPlayerId, this.targets, this.base), bb.apply(this.base, Wy), Wy.fov = qb(hy, this.Kb)
      }
      continueFrom(yb) {
        yb instanceof Hy && (0, hy.k)(yb.base, this.base)
      }
      reset(yb) {
        uy(this.base, yb)
      }
    }
    class ab {
      constructor(yb, bb, Wy, Uy) {
        this.settings = yb, this.Kb = bb, this.targets = Wy, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.nZ = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = ny(Uy), this.goal = [...Uy.position]
      }
      update(yb, bb, Wy) {
        var Uy, hy, fy;
        const Zy = this.settings,
          cb = null !== (Uy = Zy.target) && void 0 !== Uy ? Uy : this.Kb.localPlayerId,
          oy = this.targets.feetPosition(cb);
        let By = !1;
        oy && (By = this.foundFeet && Vy(this.lastFeet, oy) > 32 + .1 * yb, (0, Py.j)(oy, this.lastFeet), this.foundFeet = !0, this.placeGoal(oy, cb));
        const Ky = null !== (hy = Zy.smoothMs) && void 0 !== hy ? hy : 0;
        !this.started || Ky < 1 || By ? ((0, Py.j)(this.goal, this.smoothed), this.nZ.fill(0), this.started = !0) : sy(this.smoothed, this.nZ, this.goal, Ky, yb), By && (this.distance = -1), (0, Py.j)(this.smoothed, Wy.position);
        const ey = !0 === Zy.avoidTerrain ? this.pullIn(cb, yb, Wy) : 1;
        let Sy = this.goal;
        if ("target" === Zy.offsetSpace) Sy = Wy.position;
        else if (ey < 1) {
          Sy = this.aimOrigin;
          for (let yb = 0; yb < 3; yb++) Sy[yb] = Wy.position[yb] + (this.goal[yb] - this.smoothed[yb]) * ey
        }
        rb(Sy, Zy.lookDirection, null !== (fy = Zy.lookAt) && void 0 !== fy ? fy : cb, this.targets, this.base), bb.apply(this.base, Wy), Wy.fov = qb(Zy, this.Kb)
      }
      continueFrom(yb) {
        yb instanceof ab && (0, Uy.p)(yb.settings.target, this.settings.target) && ((0, hy.k)(yb.base, this.base), (0, Py.j)(yb.goal, this.goal), (0, Py.j)(yb.lastFeet, this.lastFeet), this.foundFeet = yb.foundFeet, (0, Py.j)(yb.smoothed, this.smoothed), (0, Py.j)(yb.nZ, this.nZ), this.started = yb.started, !0 === yb.settings.avoidTerrain && (this.distance = yb.distance))
      }
      reset(yb) {
        uy(this.base, yb), this.nZ.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(yb, bb, Wy) {
        const Uy = this.targets.aimPoint(yb);
        if (!Uy) return 1;
        const hy = Wy.position,
          fy = Vy(Uy, hy);
        if (!(fy > 0)) return 1;
        const Zy = this.toCamera;
        for (let Py = 0; Py < 3; Py++) Zy[Py] = (hy[Py] - Uy[Py]) / fy;
        const cb = function(yb, bb, Wy) {
          return yb < 0 || bb < yb ? bb : bb + (yb - bb) * Math.exp(-Wy / 150)
        }(this.distance, function(yb, bb, Wy, Uy) {
          const hy = yb.raycastTerrain(bb, Wy, Uy);
          return null !== hy && Number.isFinite(hy) ? Math.min(Uy, Math.max(0, hy - .2)) : Uy
        }(this.Kb, Uy, Zy, fy), bb);
        if (fy - cb < .001) return this.distance = -1, 1;
        this.distance = cb;
        for (let Py = 0; Py < 3; Py++) hy[Py] = Uy[Py] + Zy[Py] * cb;
        return cb / fy
      }
      placeGoal(yb, bb) {
        const Wy = this.settings.offset;
        let Uy = Wy[0],
          hy = Wy[2];
        if ("target" === this.settings.offsetSpace) {
          const yb = this.targets.heading(bb),
            fy = Math.cos(yb),
            Zy = Math.sin(yb);
          Uy = Wy[0] * fy + Wy[2] * Zy, hy = -Wy[0] * Zy + Wy[2] * fy
        }
        this.goal[0] = yb[0] + Uy, this.goal[1] = yb[1] + Wy[1], this.goal[2] = yb[2] + hy
      }
    }
    class Fy {
      constructor(yb, bb, Wy, Uy) {
        var hy, fy;
        this.settings = yb, this.Kb = bb, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = yb.keyframes.length > 0 ? new Yy(yb.keyframes, null === (hy = yb.smooth) || void 0 === hy || hy, null !== (fy = yb.loop) && void 0 !== fy && fy) : null, this.base = (0, Py.f)(Uy, (0, Py.k)()), this.resolveTarget = yb => Wy.aimPoint(yb)
      }
      update(yb, bb, Wy) {
        this.elapsedMs += yb;
        const Uy = qb(this.settings, this.Kb);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Uy, this.base) : this.base.fov = Uy, (0, Py.j)(this.base.position, Wy.position), Wy.fov = this.base.fov, bb.apply(this.base, Wy)
      }
      continueFrom(yb) {
        yb instanceof Fy && (0, Uy.p)(yb.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = yb.elapsedMs, (0, Py.f)(yb.base, this.base))
      }
      reset(yb) {
        uy(this.base, yb), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function py(yb, bb) {
      return (0, Uy.r)(yb, bb)
    }
    class Ly {
      constructor(yb, bb, Wy) {
        var Uy;
        this.settings = yb, this.Kb = bb, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const hy = null !== Wy && Wy.settings.mode === yb.mode,
          fy = hy ? Wy.pose : bb.getDefaultPose();
        this.pose = (0, Py.f)(fy, (0, Py.k)()), this.lastGoodPose = (0, Py.f)(hy ? Wy.lastGoodPose : fy, (0, Py.k)()), this.look = new Ey(yb.playerLook), this.targets = null !== (Uy = null === Wy || void 0 === Wy ? void 0 : Wy.targets) && void 0 !== Uy ? Uy : new Xy(bb);
        const Zy = (0, Py.f)(fy, (0, Py.k)());
        hy && Wy.look.unapply(Zy, Zy), this.mode = function(yb, bb, Wy, Uy) {
          switch (yb.mode) {
            case "fixed":
              return new Hy(yb, bb, Wy, Uy);
            case "follow":
              return new ab(yb, bb, Wy, Uy);
            case "path":
              return new Fy(yb, bb, Wy, Uy);
            case "frame":
              return new Sy(yb, bb, Wy, Uy)
          }
        }(yb, bb, this.targets, Zy), hy && (this.look.continueFrom(Wy.look), this.mode.continueFrom(Wy.mode))
      }
      update(yb, bb) {
        return this.look.update(yb, bb), this.mode.update(yb, this.look, this.pose), (0, Py.m)(this.pose) ? (0, Py.f)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, Py.f)(this.lastGoodPose, this.pose), this.mode.reset((0, Py.m)(this.lastGoodPose) ? this.lastGoodPose : this.Kb.getDefaultPose())), this.pose
      }
    }

    function Qy(yb) {
      return [0, 0, yb[2], yb[3]]
    }
    class jb {
      constructor(yb) {
        this.Kb = yb, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new cb, this.shot = null, this.blend = null, this.mixed = (0, Py.k)(), this.output = (0, Py.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(yb) {
        const bb = (0, oy.e)(yb);
        if ((0, Uy.p)(bb, this.pending ? this.pending.settings : this.settings)) return;
        const Wy = py(this.settings, bb);
        if (void 0 !== bb.transition && !Wy) return this.pending = {
          settings: bb,
          shot: "default" === bb.mode ? null : new Ly(bb, this.Kb, null)
        }, void this.fade.fadeOut(bb.transition);
        const hy = null !== this.pending;
        this.pending = null, !hy && Wy || this.fade.fadeIn(Uy.j.minTransitionFadeMs), this.show(bb, !1)
      }
      show(yb, bb) {
        var Wy, hy;
        if ((0, Uy.p)(yb, this.settings)) return;
        const Zy = !bb && py(this.settings, yb);
        this.settings = yb;
        const cb = null !== this.blend && this.blend.elapsedMs > 0,
          oy = (0, Py.f)(this.hasOutput ? this.output : this.Kb.getDefaultPose(), (0, Py.k)());
        if (this.shot = "default" === yb.mode ? null : new Ly(yb, this.Kb, bb ? null : this.shot), Zy) return;
        const By = bb || !this.shot && !this.hasOutput ? 0 : null !== (Wy = yb.blendInMs) && void 0 !== Wy ? Wy : 0;
        if (By <= 0) return void(this.blend = null);
        const Ky = (0, fy.p)(null !== (hy = yb.blendEasing) && void 0 !== hy ? hy : "easeInOut");
        this.blend = {
          from: oy,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: By,
          easing: cb ? Qy(Ky) : Ky
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
      update(yb, bb) {
        const Wy = Number.isFinite(yb) && yb > 0 ? yb : 0;
        if (this.fade.advance(Wy) && null !== this.pending) {
          const {
            settings: yb
          } = this.pending;
          this.pending = null, this.show(yb, !0)
        }
        this.loadingPositions.length = 0;
        const Uy = this.pending;
        if (null !== Uy && void 0 !== Uy && Uy.shot) {
          const yb = "path" === Uy.settings.mode ? 0 : Wy;
          this.noteLoadingPosition(Uy.shot.update(yb, Py.c).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Zy = this.shot ? this.shot.update(Wy, bb) : this.Kb.getDefaultPose();
        this.shot && this.noteLoadingPosition(Zy.position);
        const cb = this.blend;
        if (!cb) return this.writeOutput(Zy);
        cb.elapsedMs += Wy;
        const oy = Math.min(1, cb.elapsedMs / cb.durationMs);
        if (cb.headingDelta = Number.isFinite(cb.headingDelta) ? (0, hy.w)(cb.headingDelta, Zy.heading - cb.from.heading) : (0, hy.s)(cb.from.heading, Zy.heading), (0, Py.q)(cb.from, Zy, cb.headingDelta, (0, fy.l)(oy, cb.easing), this.mixed), oy >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else cb.fromScripted && this.noteLoadingPosition(cb.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(yb) {
        if (yb.every(Number.isFinite)) {
          const bb = this.loadingPositions;
          bb.push((0, Py.j)(yb, this.loadingSlots[bb.length]))
        }
      }
      writeOutput(yb) {
        const bb = this.output;
        (0, Py.m)(yb) ? (0, Py.f)(yb, bb) : this.hasOutput || (0, Py.f)(this.Kb.getDefaultPose(), bb), bb.pitch = (0, hy.i)(bb.pitch);
        const Wy = this.Kb.getDefaultFov(),
          fy = Number.isFinite(Wy) && Wy > 0 && Wy < 180,
          Zy = fy ? Math.min(Uy.j.minFov, Wy) : Uy.j.minFov,
          cb = fy ? Math.max(Uy.j.maxFov, Wy) : Uy.j.maxFov;
        return bb.fov = Number.isFinite(bb.fov) ? Math.min(cb, Math.max(Zy, bb.fov)) : cb, this.hasOutput = !0, bb
      }
    }
  },
  37826: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy,
      f: () => cb,
      j: () => Zy,
      k: () => fy,
      m: () => oy,
      o: () => Py,
      q: () => By
    });
    var Uy = Wy(37832);
    const hy = {
      aWy: 0,
      Fby: 0
    };

    function fy() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Zy(yb, bb) {
      return bb[0] = yb[0], bb[1] = yb[1], bb[2] = yb[2], bb
    }

    function cb(yb, bb) {
      return Zy(yb.position, bb.position), bb.heading = yb.heading, bb.pitch = yb.pitch, bb.fov = yb.fov, bb
    }

    function Py(yb, bb) {
      return Array.isArray(yb) && yb.length === bb && yb.every(Number.isFinite)
    }

    function oy(yb) {
      return Py(yb.position, 3) && Number.isFinite(yb.heading) && Number.isFinite(yb.pitch) && Number.isFinite(yb.fov)
    }

    function By(yb, bb, Wy, hy, fy) {
      for (let Uy = 0; Uy < 3; Uy++) fy.position[Uy] = yb.position[Uy] + (bb.position[Uy] - yb.position[Uy]) * hy;
      return fy.heading = (0, Uy.r)(yb.heading + Wy * hy), fy.pitch = yb.pitch + (bb.pitch - yb.pitch) * hy, fy.fov = yb.fov + (bb.fov - yb.fov) * hy, fy
    }
  },
  37853: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => gb,
      f: () => ey
    });
    var Uy = Wy(37848),
      hy = Wy(37826);
    const fy = Uy.f,
      Zy = Uy.k;

    function cb(yb, bb, Wy, Uy) {
      return Number.isFinite(yb) ? Math.min(Wy, Math.max(bb, yb)) : Uy
    }

    function Py(yb, bb, Wy) {
      return void 0 !== yb && Number.isFinite(yb) ? Math.min(Wy, Math.max(bb, yb)) : void 0
    }

    function oy(yb) {
      const bb = Uy.j.maxCoordinate;
      return [Math.min(bb, Math.max(-bb, yb[0])), Math.min(bb, Math.max(-bb, yb[1])), Math.min(bb, Math.max(-bb, yb[2]))]
    }

    function By(yb) {
      return "string" === typeof yb ? yb : (0, hy.o)(yb, 3) ? oy(yb) : void 0
    }
    const Ky = new RegExp(Uy.n);

    function ey(yb) {
      return "string" === typeof yb && Ky.test(yb)
    }

    function qb(yb) {
      const bb = [];
      if (!Array.isArray(yb)) return bb;
      for (const Wy of yb.slice(0, Uy.j.maxFrameTargets)) {
        const yb = By(Wy);
        void 0 === yb || "string" === typeof yb && !ey(yb) || bb.push(yb)
      }
      return bb
    }

    function sy(yb) {
      if (!(0, hy.o)(yb, 3)) return;
      const bb = Math.max(Math.abs(yb[0]), Math.abs(yb[1]), Math.abs(yb[2])),
        Wy = Math.hypot(yb[0] / bb, yb[1] / bb, yb[2] / bb);
      return 0 === bb || bb * Wy < Uy.j.minDirectionLength ? void 0 : [yb[0] / bb / Wy, yb[1] / bb / Wy, yb[2] / bb / Wy]
    }

    function Sy(yb) {
      if (void 0 !== yb) return "string" === typeof yb ? fy.includes(yb) ? yb : void 0 : (0, hy.o)(yb, 4) ? [cb(yb[0], 0, 1, 0), cb(yb[1], Uy.j.minEasingY, Uy.j.maxEasingY, 0), cb(yb[2], 0, 1, 1), cb(yb[3], Uy.j.minEasingY, Uy.j.maxEasingY, 1)] : "linear"
    }

    function Ey(yb) {
      if (yb) return {
        maxYaw: cb(yb.maxYaw, 0, Uy.j.maxPlayerLook, 0),
        maxPitch: cb(yb.maxPitch, 0, Uy.j.maxPlayerLook, 0),
        returnMs: Py(yb.returnMs, 0, Uy.j.maxReturnMs)
      }
    }
    const ly = new RegExp(Uy.b);

    function mb(yb) {
      var bb;
      if ("object" !== typeof yb || null === yb) return;
      const Wy = Uy.j.maxTransitionMs,
        hy = Uy.j.minTransitionFadeMs;
      return {
        colour: "string" === typeof yb.colour && ly.test(yb.colour) ? yb.colour : Uy.e,
        outMs: cb(yb.outMs, hy, Wy, hy),
        holdMs: cb(null !== (bb = yb.holdMs) && void 0 !== bb ? bb : 0, 0, Wy, 0),
        inMs: cb(yb.inMs, hy, Wy, hy)
      }
    }

    function Cy(yb) {
      return !0 === yb || void 0
    }

    function Ty(yb) {
      if ("object" !== typeof yb || null === yb) return !1;
      const bb = yb.lookAt;
      return Number.isFinite(yb.timeMs) && (0, hy.o)(yb.position, 3) && (void 0 === bb || "string" === typeof bb || (0, hy.o)(bb, 3))
    }

    function Vy(yb) {
      return {
        ...yb,
        timeMs: cb(yb.timeMs, 0, Uy.j.maxPathMs, 0),
        position: oy(yb.position),
        lookAt: By(yb.lookAt),
        lookDirection: sy(yb.lookDirection),
        fov: Py(yb.fov, Uy.j.minFov, Uy.j.maxFov),
        easing: Sy(yb.easing)
      }
    }

    function Jy(yb) {
      const bb = [];
      if (!Array.isArray(yb)) return bb;
      for (const Wy of yb.slice(0, Uy.j.maxKeyframes)) {
        if (!Ty(Wy)) continue;
        const yb = Vy(Wy);
        (0 === bb.length || yb.timeMs > bb[bb.length - 1].timeMs) && bb.push(yb)
      }
      return bb
    }

    function gb(yb) {
      if ("object" !== typeof yb || null === yb) return {
        mode: "default"
      };
      const bb = {
          blendInMs: Py(yb.blendInMs, 0, Uy.j.maxBlendInMs),
          blendEasing: Sy(yb.blendEasing),
          transition: mb(yb.transition),
          letterbox: Cy(yb.letterbox),
          hideHud: Cy(yb.hideHud)
        },
        Wy = {
          mode: "default",
          ...bb
        };
      if ("default" === yb.mode || "fixed" === yb.mode && !(0, hy.o)(yb.position, 3)) return Wy;
      const fy = {
        ...bb,
        fov: Py(yb.fov, Uy.j.minFov, Uy.j.maxFov),
        playerFacing: (Ky = yb.playerFacing, Zy.includes(Ky) ? Ky : void 0),
        playerLook: Ey(yb.playerLook)
      };
      var Ky, ey;
      switch (yb.mode) {
        case "fixed":
          return {
            ...yb, ...fy, position: oy(yb.position), lookAt: By(yb.lookAt), lookDirection: sy(yb.lookDirection)
          };
        case "follow":
          return {
            ...yb, ...fy, target: "string" === typeof yb.target ? yb.target : void 0, lookAt: By(yb.lookAt), offset: (ey = yb.offset, Array.isArray(ey) ? [cb(ey[0], -Uy.j.maxOffset, Uy.j.maxOffset, 0), cb(ey[1], -Uy.j.maxOffset, Uy.j.maxOffset, 0), cb(ey[2], -Uy.j.maxOffset, Uy.j.maxOffset, 0)] : [0, 0, 0]), lookDirection: sy(yb.lookDirection), smoothMs: Py(yb.smoothMs, 0, Uy.j.maxSmoothMs)
          };
        case "path":
          return {
            ...yb, ...fy, keyframes: Jy(yb.keyframes)
          };
        case "frame":
          return {
            ...yb, ...fy, targets: qb(yb.targets), viewHeading: Py(yb.viewHeading, -Uy.j.maxFrameHeading, Uy.j.maxFrameHeading), viewElevation: Py(yb.viewElevation, 0, Uy.j.maxFrameElevation), padding: Py(yb.padding, 0, Uy.j.maxFrameDistance), closestDistance: Py(yb.closestDistance, 0, Uy.j.maxFrameDistance), furthestDistance: Py(yb.furthestDistance, 0, Uy.j.maxFrameDistance), smoothMs: Py(yb.smoothMs, 0, Uy.j.maxSmoothMs)
          };
        default:
          return Wy
      }
    }
  },
  37774: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      return bb.set(yb), bb
    }
    Wy.d(bb, {
      b: () => Uy
    })
  },
  37769: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy = Wy(35415),
      hy = Wy.n(Uy);
    const fy = [1, 1, 1];

    function Zy(yb) {
      if (!yb) return [...fy];
      try {
        const [bb, Wy, Uy] = hy()(yb).rgb().array();
        return [bb / 255, Wy / 255, Uy / 255]
      } catch (bb) {
        return console.warn(`Invalid groundArrowPath colour "${yb}":`, bb), [...fy]
      }
    }
  },
  33184: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy,
      c: () => cb,
      f: () => Zy,
      i: () => hy,
      m: () => Uy
    });
    const Uy = {
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
      hy = "/textures/dayNight/sun.png",
      fy = "/textures/dayNight/moon.png",
      Zy = "/textures/dayNight/stars",
      cb = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  37848: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => By,
      e: () => Ky,
      f: () => Uy,
      j: () => Py,
      k: () => hy,
      n: () => oy,
      p: () => cb,
      r: () => Zy
    });
    const Uy = ["linear", "easeIn", "easeOut", "easeInOut"],
      hy = ["movement", "camera", "cursor"],
      fy = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Zy(yb, bb) {
      return cb(yb, bb, fy)
    }

    function cb(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (yb === bb || Number.isNaN(yb) && Number.isNaN(bb)) return !0;
      if ("object" !== typeof yb || "object" !== typeof bb || null === yb || null === bb || Array.isArray(yb) !== Array.isArray(bb)) return !1;
      const Uy = yb,
        hy = bb;
      for (const fy of new Set([...Object.keys(Uy), ...Object.keys(hy)]))
        if (!Wy.includes(fy) && !cb(Uy[fy], hy[fy])) return !1;
      return !0
    }
    const Py = {
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
      oy = "^-[1-9][0-9]*$",
      By = "^#[0-9a-fA-F]{6}$",
      Ky = "#000000"
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);