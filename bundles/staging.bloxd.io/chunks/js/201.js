export const id = 201;
export const ids = [201];
export const modules = {
  38755: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    class Bb {
      constructor(bb, ub) {
        this.read = bb, this.apply = ub, this.release = null
      }
      turn(bb, ub) {
        const hb = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: ub,
          forcedCameraDirection: [bb[0], bb[1], bb[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), ub + 100),
          transitionMs: hb
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(bb) {
        null !== this.release && (clearTimeout(this.release.timer), bb && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38264: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      d: () => Ob
    });
    const Bb = new Map;

    function Ob(bb, ub) {
      Bb.set(bb, ub)
    }

    function Gb(bb) {
      return bb ? Bb.get(bb) : void 0
    }
  },
  39214: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(37824);

    function Ob(bb, ub, hb) {
      var Ob, Gb, Ub, Lb, Yb, Sb, ab;
      const Hb = (0, Bb.e)(bb, ub, hb[0], hb[1], hb[2]),
        wb = Hb ? null !== (Ob = Hb.textCell) && void 0 !== Ob ? Ob : Hb.rect.anchor : hb,
        Zb = ub(wb[0], wb[1], wb[2]);
      return {
        pos: [hb[0], hb[1], hb[2]],
        noticeboardSpan: Hb && {
          width: Hb.rect.width,
          height: Hb.rect.height
        },
        text: null !== (Gb = null === Zb || void 0 === Zb || null === (Ub = Zb.persisted) || void 0 === Ub || null === (Lb = Ub.shared) || void 0 === Lb ? void 0 : Lb.text) && void 0 !== Gb ? Gb : "",
        textSize: null !== (Yb = null === Zb || void 0 === Zb || null === (Sb = Zb.persisted) || void 0 === Sb || null === (ab = Sb.shared) || void 0 === ab ? void 0 : ab.textSize) && void 0 !== Yb ? Yb : null
      }
    }
  },
  38128: (bb, ub, hb) => {
    function Bb(bb) {
      switch (bb.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    hb.d(ub, {
      d: () => Ob,
      h: () => Gb,
      k: () => Bb
    });
    const Ob = 4,
      Gb = 3
  },
  38777: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      e: () => Gb
    });
    var Bb = hb(314);
    const Ob = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class Gb {
      constructor(bb) {
        this.importGame = bb, this.loads = new Map, this.loaded = new Map
      }
      load(bb) {
        const ub = (0, Bb.Xb)(bb);
        if (!Ob.has(ub)) return Promise.resolve(void 0);
        let hb = this.loads.get(ub);
        return hb || (hb = this.importGame(ub).then((bb => {
          const hb = bb.default;
          if ("function" !== typeof hb) throw new Error(`${ub}'s client code has no default-exported factory`);
          return this.loaded.set(ub, hb), hb
        })).catch((bb => {
          throw this.loads.delete(ub), bb
        })), this.loads.set(ub, hb)), hb
      }
      loadedFactory(bb) {
        const ub = (0, Bb.Xb)(bb);
        if (!Ob.has(ub)) return;
        const hb = this.loaded.get(ub);
        if (!hb) throw new Error(`${ub}'s client code started before it loaded`);
        return hb
      }
    }
  },
  39218: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    var Bb = hb(9280),
      Ob = hb(9106),
      Gb = hb(3063);

    function Ub(bb) {
      if (bb === Bb.e) return 0;
      const ub = (0, Gb.e)(bb);
      if (void 0 !== ub && ub <= Ob.MAX_BLOCK_ID) return ub;
      const hb = (0, Gb.e)(bb.split("|")[0]);
      if (void 0 !== hb && hb <= Ob.MAX_BLOCK_ID && (0, Ob.rootMetaDescOf)(hb) === bb) return hb;
      throw new Error(`Invalid block name. You sent ${bb}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38828: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(13);
    class Ob {
      constructor(bb) {
        this.screen = bb, this.hidesHud = !1
      }
      show(bb, ub) {
        this.screen.setFade(bb.colour, bb.alpha), this.screen.setLetterbox(!0 === ub.letterbox, bb.alpha < 1), this.setHudHidden(!0 === ub.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(bb) {
        this.hidesHud !== bb && (this.hidesHud = bb, Bb.d.set({
          isUiHiddenByCamera: bb
        }))
      }
    }
  },
  38798: (bb, ub, hb) => {
    hb.d(ub, {
      C: () => Lb,
      F: () => ab,
      e: () => Bb,
      g: () => wb,
      i: () => Hb,
      m: () => Ub,
      o: () => Xb,
      s: () => Yb,
      w: () => pb,
      y: () => Sb
    });
    const Bb = Math.PI / 2 - .001,
      Ob = 2 * Math.PI,
      Gb = 1e-9;

    function Ub(bb, ub) {
      ub.heading = bb.heading, ub.pitch = bb.pitch
    }

    function Lb(bb, ub) {
      const hb = ub - bb;
      return hb - Ob * Math.floor((hb + Math.PI) / Ob)
    }

    function Yb(bb, ub, hb) {
      return bb + Lb(bb, ub) * hb
    }

    function Sb(bb) {
      if (!Number.isFinite(bb)) return bb;
      const ub = bb - Ob * Math.floor(bb / Ob);
      return ub < Ob ? ub : 0
    }

    function ab(bb, ub) {
      return bb + Lb(bb, ub)
    }

    function Hb(bb) {
      return Math.max(-Bb, Math.min(Bb, bb))
    }

    function wb(bb, ub, hb) {
      const Bb = Math.cos(ub);
      return hb[0] = Bb * Math.sin(bb), hb[1] = -Math.sin(ub), hb[2] = Bb * Math.cos(bb), hb
    }

    function Zb(bb, ub, hb, Bb) {
      const Ob = Math.sqrt(bb * bb + hb * hb);
      return Ob < Gb && Math.abs(ub) < Gb || (Ob >= Gb && (Bb.heading = Math.atan2(bb, hb)), Bb.pitch = Hb(Math.atan2(-ub, Ob) + 0)), Bb
    }

    function Xb(bb, ub) {
      return Zb(bb[0], bb[1], bb[2], ub)
    }

    function pb(bb, ub, hb) {
      return Zb(ub[0] - bb[0], ub[1] - bb[1], ub[2] - bb[2], hb)
    }
  },
  38825: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      e: () => Ob
    });
    var Bb = hb(38798);

    function Ob(bb) {
      var ub;
      const hb = "default" === bb.mode ? "movement" : null !== (ub = bb.playerFacing) && void 0 !== ub ? ub : "movement";
      return "cursor" === hb ? {
        facing: hb,
        mouseTurns: null
      } : {
        facing: hb,
        mouseTurns: "default" !== bb.mode && void 0 !== bb.playerLook ? "look" : "view"
      }
    }

    function Gb(bb, ub, hb, Ob, Gb, Ub) {
      return Ub.MJ = 0, Ub.mJ = 0, Ub.pointedAt = void 0, void 0 !== Ob ? Gb ? (Ub.pointedAt = Ob, bb) : (0, Bb.y)(Ob.heading) : Gb ? (Ub.MJ = ub, Ub.mJ = hb, bb) : (0, Bb.y)(bb + ub)
    }
  },
  38810: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => qb
    });
    var Bb = hb(38814),
      Ob = hb(38798),
      Gb = hb(36647);

    function Ub(bb, ub, hb, Bb) {
      if (!(Bb > 0)) return ub;
      const Ob = ub > bb ? Math.min(ub, bb + hb / Bb) : Math.max(ub, bb - hb / Bb);
      return Math.abs(ub - Ob) < 1e-9 ? ub : Ob
    }
    class Lb {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Bb.g,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(bb) {
        !this.isGoingOut() && this.sinceTurnMs < Bb.m.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: bb
        } : (this.waiting = null, this.startOut(bb))
      }
      fadeIn(bb) {
        this.isGoingOut() ? this.sinceTurnMs < Bb.m.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: bb
        } : (this.waiting = null, this.startIn(bb)) : this.waiting = null
      }
      advance(bb) {
        const ub = this.waiting;
        if (null === ub) return this.step(bb);
        const hb = Bb.m.minFadeTurnMs - this.sinceTurnMs;
        if (hb > bb) return this.step(bb);
        const Ob = this.step(hb);
        return this.waiting = null, "out" === ub.turn ? this.startOut(ub.transition) : this.startIn(ub.minMs), this.step(bb - hb) || Ob
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(bb) {
        ("in" === this.phase || null === this.phase && this.clearMs < Bb.m.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = bb.colour), this.outMs = bb.outMs, this.holdMs = bb.holdMs, this.inMs = bb.inMs
      }
      startIn(bb) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(bb, this.inMs)
      }
      step(bb) {
        const ub = this.screen;
        this.sinceTurnMs += bb, null === this.phase && (this.clearMs += bb);
        let hb = !1,
          Ob = bb;
        if ("out" === this.phase) {
          const Bb = (1 - ub.alpha) * this.outMs;
          if (ub.alpha = Ub(ub.alpha, 1, bb, this.outMs), ub.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, Ob = Math.max(0, bb - Bb), hb = !0
        }
        let Gb = bb;
        if ("hold" === this.phase) {
          this.heldMs += Ob;
          const bb = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Bb.m.minFadeTurnMs);
          if (bb < 0 || hb) return hb;
          this.phase = "in", this.sinceTurnMs = bb, Gb = bb
        }
        return "in" === this.phase && (ub.alpha = Ub(ub.alpha, 0, Gb, this.inMs), ub.alpha <= 0 && (this.phase = null, this.clearMs = 0)), hb
      }
    }
    var Yb = hb(38791),
      Sb = hb(38816),
      ab = hb(1784),
      Hb = hb(36188);

    function wb(bb, ub) {
      for (let hb = 0; hb < ub.length; hb++) ub[hb] = bb[hb]
    }

    function Zb(bb, ub) {
      var hb;
      return null !== (hb = bb.fov) && void 0 !== hb ? hb : ub.getDefaultFov()
    }

    function Xb(bb, ub, hb, Bb, Ob) {
      const Gb = 2 / Bb,
        Ub = Math.exp(-Gb * Ob);
      for (let Lb = 0; Lb < bb.length; Lb++) {
        const Bb = bb[Lb] - hb[Lb],
          Yb = (ub[Lb] + Gb * Bb) * Ob;
        bb[Lb] = hb[Lb] + (Bb + Yb) * Ub, ub[Lb] = (ub[Lb] - Gb * Yb) * Ub
      }
    }
    class pb {
      constructor(bb, ub, hb, Bb) {
        var Gb, Ub, Lb, Yb, Sb;
        this.settings = bb, this.eH = ub, this.targets = hb, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Mp = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Ob.y)((0, ab.k)(null !== (Gb = bb.viewHeading) && void 0 !== Gb ? Gb : 0)),
          pitch: (0, Ob.i)((0, ab.k)(null !== (Ub = bb.viewElevation) && void 0 !== Ub ? Ub : 45))
        }, this.closestDistance = null !== (Lb = bb.closestDistance) && void 0 !== Lb ? Lb : Math.min(6, null !== (Yb = bb.furthestDistance) && void 0 !== Yb ? Yb : 1 / 0), this.furthestDistance = null !== (Sb = bb.furthestDistance) && void 0 !== Sb ? Sb : Math.max(64, this.closestDistance);
        const Hb = (0, Ob.g)(this.base.heading, this.base.pitch, this.forward),
          wb = Bb.position,
          Zb = this.closestDistance;
        this.goal = [wb[0] + Hb[0] * Zb, wb[1] + Hb[1] * Zb, wb[2] + Hb[2] * Zb, Zb, this.base.heading, this.base.pitch]
      }
      update(bb, ub, hb) {
        var Bb, Gb;
        this.placeGoal(null !== (Bb = this.settings.fov) && void 0 !== Bb ? Bb : this.eH.getBaseFov()), this.goal[4] = (0, Ob.F)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Ub = null !== (Gb = this.settings.smoothMs) && void 0 !== Gb ? Gb : 400;
        !this.started || Ub < 1 ? (wb(this.goal, this.smoothed), this.Mp.fill(0), this.started = !0) : Xb(this.smoothed, this.Mp, this.goal, Ub, bb), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Ob.i)(this.smoothed[5]), ub.apply(this.angles, hb);
        const Lb = (0, Ob.g)(hb.heading, hb.pitch, this.forward);
        for (let Ob = 0; Ob < 3; Ob++) hb.position[Ob] = this.smoothed[Ob] - Lb[Ob] * this.smoothed[3];
        hb.fov = Zb(this.settings, this.eH)
      }
      continueFrom(bb) {
        bb instanceof pb && (wb(bb.goal, this.goal), wb(bb.smoothed, this.smoothed), wb(bb.Mp, this.Mp), this.framedTargets = bb.framedTargets, this.started = bb.started)
      }
      reset() {
        this.Mp.fill(0), this.started = !1
      }
      placeGoal(bb) {
        var ub;
        let hb = 0;
        for (const ab of this.settings.targets) {
          const bb = this.targets.currentAimPoint(ab);
          bb && (0, Yb.e)(bb, this.pointAt(hb++))
        }
        if (hb > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const bb = this.targets.aimPoint(this.eH.localPlayerId);
          bb && (0, Yb.e)(bb, this.pointAt(hb++))
        }
        const Bb = this.goal;
        if (0 === hb) return void(Bb[3] = this.withinDistances(Bb[3]));
        for (let Yb = 0; Yb < 3; Yb++) {
          let bb = 1 / 0,
            ub = -1 / 0;
          for (let Bb = 0; Bb < hb; Bb++) bb = Math.min(bb, this.points[Bb][Yb]), ub = Math.max(ub, this.points[Bb][Yb]);
          Bb[Yb] = (bb + ub) / 2
        }
        let Ob = 0;
        for (let Yb = 0; Yb < hb; Yb++) {
          const bb = this.points[Yb];
          Ob = Math.max(Ob, Math.hypot(bb[0] - Bb[0], bb[1] - Bb[1], bb[2] - Bb[2]))
        }
        const Gb = Math.tan((0, ab.k)(bb) / 2),
          Ub = Math.atan(Gb * (!0 === this.settings.letterbox ? Hb.g : 1)),
          Lb = Math.atan(Gb * this.eH.getAspectRatio()),
          Sb = (Ob + (null !== (ub = this.settings.padding) && void 0 !== ub ? ub : 2)) / Math.sin(Math.min(Ub, Lb));
        Bb[3] = this.withinDistances(Sb)
      }
      withinDistances(bb) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, bb))
      }
      pointAt(bb) {
        return bb === this.points.length && this.points.push([0, 0, 0]), this.points[bb]
      }
    }
    class ob {
      constructor(bb) {
        this.limits = bb, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(bb) {
        this.limits && (this.yawOffset = bb.yawOffset, this.pitchOffset = bb.pitchOffset, this.idleMs = bb.idleMs)
      }
      update(bb, ub) {
        const hb = this.limits;
        if (!hb) return;
        const Bb = Number.isFinite(ub.MJ) ? ub.MJ : 0,
          Ob = Number.isFinite(ub.mJ) ? ub.mJ : 0;
        if (ub.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: ub.pointedAt.heading,
          pitch: ub.pointedAt.pitch
        };
        else if (0 !== Bb || 0 !== Ob) this.idleMs = 0, this.yawOffset += Bb, this.pitchOffset += Ob;
        else {
          const ub = Math.max(0, this.idleMs + bb - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += bb, void 0 !== hb.returnMs && ub > 0) {
            const bb = hb.returnMs > 0 ? Math.exp(-3 * ub / hb.returnMs) : 0;
            this.yawOffset *= bb, this.pitchOffset *= bb
          }
        }
        this.clampOffsets(hb)
      }
      clampOffsets(bb) {
        if (bb.maxYaw >= 180) this.yawOffset = (0, Ob.C)(0, this.yawOffset);
        else {
          const ub = (0, ab.k)(bb.maxYaw);
          this.yawOffset = Math.max(-ub, Math.min(ub, this.yawOffset))
        }
        const ub = (0, ab.k)(bb.maxPitch);
        this.pitchOffset = Math.max(-ub, Math.min(ub, this.pitchOffset))
      }
      apply(bb, ub) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Ob.C)(bb.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - bb.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const hb = (0, Ob.i)(bb.pitch + this.pitchOffset);
        this.pitchOffset = hb - bb.pitch, ub.heading = (0, Ob.y)(bb.heading + this.yawOffset), ub.pitch = hb
      }
      unapply(bb, ub) {
        ub.heading = (0, Ob.y)(bb.heading - this.yawOffset), ub.pitch = (0, Ob.i)(bb.pitch - this.pitchOffset)
      }
    }
    const Ab = 1e-6;

    function lb(bb) {
      return Math.sqrt(bb[0] * bb[0] + bb[1] * bb[1] + bb[2] * bb[2])
    }

    function Kb(bb, ub, hb, Bb, Ob) {
      const Gb = Ob * Ob,
        Ub = Gb * Ob;
      return (2 * Ub - 3 * Gb + 1) * bb + (Ub - 2 * Gb + Ob) * ub + (-2 * Ub + 3 * Gb) * hb + (Ub - Gb) * Bb
    }

    function Wb(bb, ub, hb, Bb, Ob) {
      const Gb = Ob * Ob;
      return (6 * Gb - 6 * Ob) * bb + (3 * Gb - 4 * Ob + 1) * ub + (-6 * Gb + 6 * Ob) * hb + (3 * Gb - 2 * Ob) * Bb
    }

    function Cb(bb, ub) {
      const hb = ub[0] - bb[0],
        Bb = ub[1] - bb[1],
        Ob = ub[2] - bb[2];
      return Math.sqrt(hb * hb + Bb * Bb + Ob * Ob)
    }

    function db(bb, ub, hb, Bb, Ob, Gb) {
      for (let Ub = 0; Ub < 3; Ub++) Gb[Ub] = Ob ? bb[Ub] * Bb : hb[Ub] - ub[Ub];
      return Ob && function(bb, ub) {
        const hb = lb(bb);
        if (hb > ub) {
          const Bb = ub / hb;
          bb[0] *= Bb, bb[1] *= Bb, bb[2] *= Bb
        }
      }(Gb, 3 * Cb(ub, hb)), Gb
    }

    function rb(bb, ub, hb, Bb) {
      for (let Ob = 0; Ob < 3; Ob++) Bb[Ob] = 6 * (ub[Ob] - bb[Ob]) - 2 * hb[Ob];
      if (lb(Bb) < Ab)
        for (let Ob = 0; Ob < 3; Ob++) Bb[Ob] = ub[Ob] - bb[Ob];
      return Bb
    }

    function jb(bb, ub) {
      return [2 * ub[0] - bb[0], 2 * ub[1] - bb[1], 2 * ub[2] - bb[2]]
    }

    function nb(bb, ub, hb, Bb, Ob, Gb, Ub) {
      if (!Gb && !Ub) return 0;
      const Lb = Gb ? bb : 2 * ub - hb,
        Yb = Ub ? hb : 2 * ub - bb,
        Sb = Gb ? Bb : Ob,
        ab = Ub ? Ob : Bb,
        Hb = (ub - Lb) / Sb,
        wb = (Yb - ub) / ab;
      if (Hb * wb <= 0) return 0;
      const Zb = (Yb - Lb) / (Sb + ab),
        Xb = 3 * Math.min(Math.abs(Hb), Math.abs(wb));
      return Math.max(-Xb, Math.min(Xb, Zb))
    }

    function Db(bb, ub, hb, Bb, Ob, Gb, Ub) {
      const {
        u: Lb,
        segmentMs: Yb
      } = bb;
      if (!bb.curved) return hb + (Bb - hb) * Lb;
      return Kb(hb, nb(ub, hb, Bb, bb.beforeMs, Yb, Gb, !0) * Yb, Bb, nb(hb, Bb, Ob, Yb, bb.afterMs, !0, Ub) * Yb, Lb)
    }

    function xb(bb) {
      return Math.abs(bb.pitch) >= Ob.e
    }
    class zb {
      constructor(bb, ub, hb, Bb, Ob) {
        this.nodes = bb, this.prevNodes = hb, this.nextNodes = Bb, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = bb.map(((bb, hb) => this.nodeTangent(ub, Ob, hb)))
      }
      sample(bb, ub, hb) {
        const {
          index: Bb,
          toIndex: Gb,
          segmentMs: Ub,
          curved: Lb
        } = bb, Yb = this.fromAngles, Sb = this.toAngles, ab = this.nodeAngles(Bb, hb.position, ub, Yb), Hb = this.nodeAngles(Gb, hb.position, ub, Sb);
        if (Ub > 0 && "aim" !== ab && "aim" !== Hb && this.liveTangent(bb, Yb)) return hb.heading = (0, Ob.y)(Yb.heading), void(hb.pitch = Yb.pitch);
        if ("none" === ab && "none" === Hb) return;
        !Lb && Ub > 0 && ("tangent" === ab && this.liveTangent(bb, Yb), "tangent" === Hb && this.liveTangent(bb, Sb)), "none" === ab ? (0, Ob.m)(Sb, Yb) : "none" === Hb && (0, Ob.m)(Yb, Sb);
        const wb = Lb && bb.beforeIndex >= 0 && "none" !== this.nodeAngles(bb.beforeIndex, hb.position, ub, this.beforeAngles),
          Zb = Lb && bb.afterIndex >= 0 && "none" !== this.nodeAngles(bb.afterIndex, hb.position, ub, this.afterAngles),
          Xb = (0, Ob.F)(Yb.heading, Sb.heading),
          pb = Db(bb, wb ? (0, Ob.F)(Yb.heading, this.beforeAngles.heading) : 0, Yb.heading, Xb, Zb ? (0, Ob.F)(Xb, this.afterAngles.heading) : 0, wb, Zb);
        hb.heading = (0, Ob.y)(pb), hb.pitch = (0, Ob.i)(Db(bb, this.beforeAngles.pitch, Yb.pitch, Sb.pitch, this.afterAngles.pitch, wb, Zb))
      }
      nodeAngles(bb, ub, hb, Bb) {
        const Ob = this.rawNodeAngles(bb, ub, hb, Bb);
        return "none" !== Ob && xb(Bb) && !this.borrowHeading(this.prevNodes[bb], ub, hb, Bb) && this.borrowHeading(this.nextNodes[bb], ub, hb, Bb), Ob
      }
      borrowHeading(bb, ub, hb, Bb) {
        const Ob = this.borrowedAngles;
        return !(bb < 0 || "none" === this.rawNodeAngles(bb, ub, hb, Ob) || xb(Ob)) && (Bb.heading = Ob.heading, !0)
      }
      rawNodeAngles(bb, ub, hb, Bb) {
        const Gb = this.nodes[bb].keyframe;
        if (Gb.lookDirection) return (0, Ob.o)(Gb.lookDirection, Bb), "aim";
        if (void 0 !== Gb.lookAt) {
          const bb = hb(Gb.lookAt);
          if (bb) return (0, Ob.w)(ub, bb, Bb), "aim"
        }
        const Ub = this.tangents[bb];
        return Ub ? ((0, Ob.m)(Ub, Bb), "tangent") : "none"
      }
      liveTangent(bb, ub) {
        const hb = this.nodes[bb.index].position,
          Bb = this.nodes[bb.toIndex].position,
          Gb = this.derivative;
        for (let Ob = 0; Ob < 3; Ob++) Gb[Ob] = Wb(hb[Ob], bb.fromTangent[Ob], Bb[Ob], bb.toTangent[Ob], bb.u);
        return lb(Gb) > 1e-9 ? ((0, Ob.o)(Gb, ub), !0) : !(Cb(hb, Bb) < Ab) && ((0, Ob.o)(rb(hb, Bb, bb.u < .5 ? bb.toTangent : bb.fromTangent, Gb), ub), !0)
      }
      nodeTangent(bb, ub, hb) {
        var Bb;
        const Gb = bb[hb];
        if (lb(Gb) > 1e-9) return (0, Ob.o)(Gb, {
          heading: 0,
          pitch: 0
        });
        const Ub = null !== (Bb = this.restDirectionTo(hb, hb + 1, bb, ub)) && void 0 !== Bb ? Bb : this.restDirectionTo(hb, hb - 1, bb, ub);
        return Ub ? (0, Ob.o)(Ub, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(bb, ub, hb, Bb) {
        const Ob = this.nodes[bb],
          Gb = this.nodes[ub];
        if (!Gb || Cb(Ob.position, Gb.position) < Ab) return null;
        const [Ub, Lb] = ub > bb ? [Ob, Gb] : [Gb, Ob], Yb = db(hb[ub], Ub.position, Lb.position, Lb.timeMs - Ub.timeMs, Bb, [0, 0, 0]);
        return rb(Ub.position, Lb.position, Yb, [0, 0, 0])
      }
    }

    function gb(bb, ub) {
      const hb = bb.lookDirection || ub.lookDirection ? function(bb, ub) {
        if (!bb || !ub) return bb === ub;
        const hb = lb(bb),
          Bb = lb(ub);
        return Math.hypot(bb[0] / hb - ub[0] / Bb, bb[1] / hb - ub[1] / Bb, bb[2] / hb - ub[2] / Bb) < Ab
      }(bb.lookDirection, ub.lookDirection) : (Bb = bb.lookAt, Ob = ub.lookAt, "object" !== typeof Bb || "object" !== typeof Ob ? Bb === Ob : Cb(Bb, Ob) < Ab);
      var Bb, Ob;
      return Cb(bb.position, ub.position) < Ab && bb.fov === ub.fov && hb
    }
    class ib {
      constructor(bb, ub, hb) {
        if (this.smooth = ub, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === bb.length) throw new Error("A camera path needs at least one keyframe");
        for (let Gb = 1; Gb < bb.length; Gb++)
          if (!(bb[Gb].timeMs > bb[Gb - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = bb.map((bb => {
          var ub;
          return {
            timeMs: bb.timeMs,
            position: [...bb.position],
            keyframe: bb,
            easing: (0, Gb.k)(null !== (ub = bb.easing) && void 0 !== ub ? ub : "linear")
          }
        }));
        const Bb = this.nodes[0],
          Ob = this.nodes[this.nodes.length - 1],
          Ub = hb && this.nodes.length > 1;
        Ub && !gb(Bb.keyframe, Ob.keyframe) && this.nodes.push({
          ...Bb,
          timeMs: Ob.timeMs + (Ob.timeMs - Bb.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Ub ? this.nodes[this.nodes.length - 1].timeMs - Bb.timeMs : 0, this.prevNodes = this.nodes.map(((bb, ub) => this.neighbour(ub, -1))), this.nextNodes = this.nodes.map(((bb, ub) => this.neighbour(ub, 1))), this.prevGaps = this.prevNodes.map(((bb, ub) => bb >= 0 ? this.gapMs(ub, -1) : 0)), this.nextGaps = this.nextNodes.map(((bb, ub) => bb >= 0 ? this.gapMs(ub, 1) : 0)), this.velocities = this.nodes.map(((bb, ub) => {
          const hb = this.prevNodes[ub],
            Bb = this.nextNodes[ub];
          return function(bb, ub, hb, Bb, Ob, Gb) {
            if (Gb[0] = 0, Gb[1] = 0, Gb[2] = 0, !bb && !hb) return Gb;
            const Ub = null !== bb && void 0 !== bb ? bb : jb(null !== hb && void 0 !== hb ? hb : ub, ub),
              Lb = null !== hb && void 0 !== hb ? hb : jb(null !== bb && void 0 !== bb ? bb : ub, ub),
              Yb = bb ? Bb : Ob,
              Sb = hb ? Ob : Bb,
              ab = Cb(Ub, ub),
              Hb = Cb(ub, Lb);
            if (ab < Ab || Hb < Ab) return Gb;
            const wb = Math.sqrt(ab),
              Zb = Math.sqrt(Hb),
              Xb = (wb + Zb) / (Yb + Sb);
            for (let pb = 0; pb < 3; pb++) {
              const bb = (ub[pb] - Ub[pb]) / wb - (Lb[pb] - Ub[pb]) / (wb + Zb) + (Lb[pb] - ub[pb]) / Zb;
              Gb[pb] = bb * Xb
            }
            return Gb
          }(hb >= 0 ? this.nodes[hb].position : null, bb.position, Bb >= 0 ? this.nodes[Bb].position : null, this.prevGaps[ub], this.nextGaps[ub], [0, 0, 0])
        })), this.aim = new zb(this.nodes, this.velocities, this.prevNodes, this.nextNodes, ub)
      }
      sample(bb, ub, hb, Bb) {
        const Ob = this.findSegment(this.pathTime(bb));
        this.samplePosition(Ob, Bb.position), this.aim.sample(Ob, ub, Bb);
        const {
          beforeIndex: Gb,
          afterIndex: Ub
        } = Ob;
        Bb.fov = Db(Ob, Gb >= 0 ? this.fovAt(Gb, hb) : 0, this.fovAt(Ob.index, hb), this.fovAt(Ob.toIndex, hb), Ub >= 0 ? this.fovAt(Ub, hb) : 0, Gb >= 0, Ub >= 0)
      }
      pathTime(bb) {
        const ub = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || bb <= ub) return bb;
        const hb = bb - ub;
        return ub + hb - this.loopMs * Math.floor(hb / this.loopMs)
      }
      findSegment(bb) {
        const ub = this.nodes,
          hb = this.segment;
        let Bb = hb.index;
        for (bb < ub[Bb].timeMs && (Bb = 0); Bb < ub.length - 2 && ub[Bb + 1].timeMs <= bb;) Bb++;
        const Ob = Math.min(Bb + 1, ub.length - 1),
          Ub = ub[Ob].timeMs - ub[Bb].timeMs;
        return hb.index = Bb, hb.toIndex = Ob, hb.segmentMs = Ub, hb.u = Ub > 0 ? (0, Gb.j)((bb - ub[Bb].timeMs) / Ub, ub[Bb].easing) : 1, hb.curved = this.smooth && Ub > 0, hb.beforeIndex = this.prevNodes[Bb], hb.afterIndex = this.nextNodes[Ob], hb.beforeMs = this.prevGaps[Bb], hb.afterMs = this.nextGaps[Ob], hb
      }
      samplePosition(bb, ub) {
        const {
          fromTangent: hb,
          toTangent: Bb,
          curved: Ob
        } = bb, Gb = this.nodes[bb.index].position, Ub = this.nodes[bb.toIndex].position;
        db(this.velocities[bb.index], Gb, Ub, bb.segmentMs, Ob, hb), db(this.velocities[bb.toIndex], Gb, Ub, bb.segmentMs, Ob, Bb);
        const Lb = bb.u;
        for (let Yb = 0; Yb < 3; Yb++) ub[Yb] = Ob ? Kb(Gb[Yb], hb[Yb], Ub[Yb], Bb[Yb], Lb) : Gb[Yb] + (Ub[Yb] - Gb[Yb]) * Lb
      }
      fovAt(bb, ub) {
        var hb;
        return null !== (hb = this.nodes[bb].keyframe.fov) && void 0 !== hb ? hb : ub
      }
      neighbour(bb, ub) {
        const hb = this.nodes.length - 1,
          Bb = bb + ub;
        return Bb >= 0 && Bb <= hb ? Bb : this.loopMs <= 0 || hb < 2 ? -1 : Bb < 0 ? hb - 1 : 1
      }
      gapMs(bb, ub) {
        const hb = this.nodes.length - 1;
        if (1 === ub) {
          const ub = bb === hb ? 0 : bb;
          return this.nodes[ub + 1].timeMs - this.nodes[ub].timeMs
        }
        const Bb = 0 === bb ? hb : bb;
        return this.nodes[Bb].timeMs - this.nodes[Bb - 1].timeMs
      }
    }
    class vb {
      constructor(bb) {
        this.eH = bb, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = ub => bb.getEntityPosition(ub), this.readAimPoint = ub => bb.getEntityAimPoint(ub)
      }
      aimPoint(bb) {
        return "string" !== typeof bb ? (0, Yb.n)(bb, 3) ? bb : null : this.resolve(bb, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(bb) {
        const ub = "string" === typeof bb ? this.eH.getEntityAimPoint(bb) : bb;
        return ub && (0, Yb.n)(ub, 3) ? ub : null
      }
      feetPosition(bb) {
        return this.resolve(bb, this.readFeet, this.lastFeet)
      }
      heading(bb) {
        const ub = this.eH.getEntityHeading(bb);
        if (null !== ub && Number.isFinite(ub)) return this.lastHeadings.set(bb, ub), ub;
        const hb = this.lastHeadings.get(bb);
        return void 0 !== hb ? hb : bb === this.eH.localPlayerId ? 0 : this.heading(this.eH.localPlayerId)
      }
      resolve(bb, ub, hb) {
        const Bb = ub(bb);
        let Ob = hb.get(bb);
        return Bb && (0, Yb.n)(Bb, 3) ? (Ob || (Ob = [0, 0, 0], hb.set(bb, Ob)), Ob[0] = Bb[0], Ob[1] = Bb[1], Ob[2] = Bb[2], Ob) : Ob || (bb === this.eH.localPlayerId ? null : this.resolve(this.eH.localPlayerId, ub, hb))
      }
    }

    function tb(bb) {
      return {
        heading: bb.heading,
        pitch: bb.pitch
      }
    }

    function Jb(bb, ub) {
      Number.isFinite(bb.heading) && Number.isFinite(bb.pitch) || (0, Ob.m)(ub, bb)
    }

    function eb(bb, ub, hb, Bb, Gb) {
      if (ub) return void(0, Ob.o)(ub, Gb);
      const Ub = Bb.aimPoint(hb);
      Ub && (0, Ob.w)(bb, Ub, Gb)
    }
    class Nb {
      constructor(bb, ub, hb, Bb) {
        this.settings = bb, this.eH = ub, this.targets = hb, this.base = void 0, this.base = tb(Bb)
      }
      update(bb, ub, hb) {
        var Bb;
        const Ob = this.settings;
        (0, Yb.e)(Ob.position, hb.position), eb(Ob.position, Ob.lookDirection, null !== (Bb = Ob.lookAt) && void 0 !== Bb ? Bb : this.eH.localPlayerId, this.targets, this.base), ub.apply(this.base, hb), hb.fov = Zb(Ob, this.eH)
      }
      continueFrom(bb) {
        bb instanceof Nb && (0, Ob.m)(bb.base, this.base)
      }
      reset(bb) {
        Jb(this.base, bb)
      }
    }
    class sb {
      constructor(bb, ub, hb, Bb) {
        this.settings = bb, this.eH = ub, this.targets = hb, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Mp = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = tb(Bb), this.goal = [...Bb.position]
      }
      update(bb, ub, hb) {
        var Bb, Ob, Gb;
        const Ub = this.settings,
          Lb = null !== (Bb = Ub.target) && void 0 !== Bb ? Bb : this.eH.localPlayerId,
          Sb = this.targets.feetPosition(Lb);
        let ab = !1;
        Sb && (ab = this.foundFeet && Cb(this.lastFeet, Sb) > 32 + .1 * bb, (0, Yb.e)(Sb, this.lastFeet), this.foundFeet = !0, this.placeGoal(Sb, Lb));
        const Hb = null !== (Ob = Ub.smoothMs) && void 0 !== Ob ? Ob : 0;
        !this.started || Hb < 1 || ab ? ((0, Yb.e)(this.goal, this.smoothed), this.Mp.fill(0), this.started = !0) : Xb(this.smoothed, this.Mp, this.goal, Hb, bb), ab && (this.distance = -1), (0, Yb.e)(this.smoothed, hb.position);
        const wb = !0 === Ub.avoidTerrain ? this.pullIn(Lb, bb, hb) : 1;
        let pb = this.goal;
        if ("target" === Ub.offsetSpace) pb = hb.position;
        else if (wb < 1) {
          pb = this.aimOrigin;
          for (let bb = 0; bb < 3; bb++) pb[bb] = hb.position[bb] + (this.goal[bb] - this.smoothed[bb]) * wb
        }
        eb(pb, Ub.lookDirection, null !== (Gb = Ub.lookAt) && void 0 !== Gb ? Gb : Lb, this.targets, this.base), ub.apply(this.base, hb), hb.fov = Zb(Ub, this.eH)
      }
      continueFrom(bb) {
        bb instanceof sb && (0, Bb.u)(bb.settings.target, this.settings.target) && ((0, Ob.m)(bb.base, this.base), (0, Yb.e)(bb.goal, this.goal), (0, Yb.e)(bb.lastFeet, this.lastFeet), this.foundFeet = bb.foundFeet, (0, Yb.e)(bb.smoothed, this.smoothed), (0, Yb.e)(bb.Mp, this.Mp), this.started = bb.started, !0 === bb.settings.avoidTerrain && (this.distance = bb.distance))
      }
      reset(bb) {
        Jb(this.base, bb), this.Mp.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(bb, ub, hb) {
        const Bb = this.targets.aimPoint(bb);
        if (!Bb) return 1;
        const Ob = hb.position,
          Gb = Cb(Bb, Ob);
        if (!(Gb > 0)) return 1;
        const Ub = this.toCamera;
        for (let Yb = 0; Yb < 3; Yb++) Ub[Yb] = (Ob[Yb] - Bb[Yb]) / Gb;
        const Lb = function(bb, ub, hb) {
          return bb < 0 || ub < bb ? ub : ub + (bb - ub) * Math.exp(-hb / 150)
        }(this.distance, function(bb, ub, hb, Bb) {
          const Ob = bb.raycastTerrain(ub, hb, Bb);
          return null !== Ob && Number.isFinite(Ob) ? Math.min(Bb, Math.max(0, Ob - .2)) : Bb
        }(this.eH, Bb, Ub, Gb), ub);
        if (Gb - Lb < .001) return this.distance = -1, 1;
        this.distance = Lb;
        for (let Yb = 0; Yb < 3; Yb++) Ob[Yb] = Bb[Yb] + Ub[Yb] * Lb;
        return Lb / Gb
      }
      placeGoal(bb, ub) {
        const hb = this.settings.offset;
        let Bb = hb[0],
          Ob = hb[2];
        if ("target" === this.settings.offsetSpace) {
          const bb = this.targets.heading(ub),
            Gb = Math.cos(bb),
            Ub = Math.sin(bb);
          Bb = hb[0] * Gb + hb[2] * Ub, Ob = -hb[0] * Ub + hb[2] * Gb
        }
        this.goal[0] = bb[0] + Bb, this.goal[1] = bb[1] + hb[1], this.goal[2] = bb[2] + Ob
      }
    }
    class Mb {
      constructor(bb, ub, hb, Bb) {
        var Ob, Gb;
        this.settings = bb, this.eH = ub, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = bb.keyframes.length > 0 ? new ib(bb.keyframes, null === (Ob = bb.smooth) || void 0 === Ob || Ob, null !== (Gb = bb.loop) && void 0 !== Gb && Gb) : null, this.base = (0, Yb.d)(Bb, (0, Yb.g)()), this.resolveTarget = bb => hb.aimPoint(bb)
      }
      update(bb, ub, hb) {
        this.elapsedMs += bb;
        const Bb = Zb(this.settings, this.eH);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Bb, this.base) : this.base.fov = Bb, (0, Yb.e)(this.base.position, hb.position), hb.fov = this.base.fov, ub.apply(this.base, hb)
      }
      continueFrom(bb) {
        bb instanceof Mb && (0, Bb.u)(bb.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = bb.elapsedMs, (0, Yb.d)(bb.base, this.base))
      }
      reset(bb) {
        Jb(this.base, bb), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function mb(bb, ub) {
      return (0, Bb.y)(bb, ub)
    }
    class Ib {
      constructor(bb, ub, hb) {
        var Bb;
        this.settings = bb, this.eH = ub, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Ob = null !== hb && hb.settings.mode === bb.mode,
          Gb = Ob ? hb.pose : ub.getDefaultPose();
        this.pose = (0, Yb.d)(Gb, (0, Yb.g)()), this.lastGoodPose = (0, Yb.d)(Ob ? hb.lastGoodPose : Gb, (0, Yb.g)()), this.look = new ob(bb.playerLook), this.targets = null !== (Bb = null === hb || void 0 === hb ? void 0 : hb.targets) && void 0 !== Bb ? Bb : new vb(ub);
        const Ub = (0, Yb.d)(Gb, (0, Yb.g)());
        Ob && hb.look.unapply(Ub, Ub), this.mode = function(bb, ub, hb, Bb) {
          switch (bb.mode) {
            case "fixed":
              return new Nb(bb, ub, hb, Bb);
            case "follow":
              return new sb(bb, ub, hb, Bb);
            case "path":
              return new Mb(bb, ub, hb, Bb);
            case "frame":
              return new pb(bb, ub, hb, Bb)
          }
        }(bb, ub, this.targets, Ub), Ob && (this.look.continueFrom(hb.look), this.mode.continueFrom(hb.mode))
      }
      update(bb, ub) {
        return this.look.update(bb, ub), this.mode.update(bb, this.look, this.pose), (0, Yb.j)(this.pose) ? (0, Yb.d)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, Yb.d)(this.lastGoodPose, this.pose), this.mode.reset((0, Yb.j)(this.lastGoodPose) ? this.lastGoodPose : this.eH.getDefaultPose())), this.pose
      }
    }

    function Pb(bb) {
      return [0, 0, bb[2], bb[3]]
    }
    class qb {
      constructor(bb) {
        this.eH = bb, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new Lb, this.shot = null, this.blend = null, this.mixed = (0, Yb.g)(), this.output = (0, Yb.g)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(bb) {
        const ub = (0, Sb.b)(bb);
        if ((0, Bb.u)(ub, this.pending ? this.pending.settings : this.settings)) return;
        const hb = mb(this.settings, ub);
        if (void 0 !== ub.transition && !hb) return this.pending = {
          settings: ub,
          shot: "default" === ub.mode ? null : new Ib(ub, this.eH, null)
        }, void this.fade.fadeOut(ub.transition);
        const Ob = null !== this.pending;
        this.pending = null, !Ob && hb || this.fade.fadeIn(Bb.m.minTransitionFadeMs), this.show(ub, !1)
      }
      show(bb, ub) {
        var hb, Ob;
        if ((0, Bb.u)(bb, this.settings)) return;
        const Ub = !ub && mb(this.settings, bb);
        this.settings = bb;
        const Lb = null !== this.blend && this.blend.elapsedMs > 0,
          Sb = (0, Yb.d)(this.hasOutput ? this.output : this.eH.getDefaultPose(), (0, Yb.g)());
        if (this.shot = "default" === bb.mode ? null : new Ib(bb, this.eH, ub ? null : this.shot), Ub) return;
        const ab = ub || !this.shot && !this.hasOutput ? 0 : null !== (hb = bb.blendInMs) && void 0 !== hb ? hb : 0;
        if (ab <= 0) return void(this.blend = null);
        const Hb = (0, Gb.k)(null !== (Ob = bb.blendEasing) && void 0 !== Ob ? Ob : "easeInOut");
        this.blend = {
          from: Sb,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: ab,
          easing: Lb ? Pb(Hb) : Hb
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
      update(bb, ub) {
        const hb = Number.isFinite(bb) && bb > 0 ? bb : 0;
        if (this.fade.advance(hb) && null !== this.pending) {
          const {
            settings: bb
          } = this.pending;
          this.pending = null, this.show(bb, !0)
        }
        this.loadingPositions.length = 0;
        const Bb = this.pending;
        if (null !== Bb && void 0 !== Bb && Bb.shot) {
          const bb = "path" === Bb.settings.mode ? 0 : hb;
          this.noteLoadingPosition(Bb.shot.update(bb, Yb.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Ub = this.shot ? this.shot.update(hb, ub) : this.eH.getDefaultPose();
        this.shot && this.noteLoadingPosition(Ub.position);
        const Lb = this.blend;
        if (!Lb) return this.writeOutput(Ub);
        Lb.elapsedMs += hb;
        const Sb = Math.min(1, Lb.elapsedMs / Lb.durationMs);
        if (Lb.headingDelta = Number.isFinite(Lb.headingDelta) ? (0, Ob.F)(Lb.headingDelta, Ub.heading - Lb.from.heading) : (0, Ob.C)(Lb.from.heading, Ub.heading), (0, Yb.q)(Lb.from, Ub, Lb.headingDelta, (0, Gb.j)(Sb, Lb.easing), this.mixed), Sb >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else Lb.fromScripted && this.noteLoadingPosition(Lb.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(bb) {
        if (bb.every(Number.isFinite)) {
          const ub = this.loadingPositions;
          ub.push((0, Yb.e)(bb, this.loadingSlots[ub.length]))
        }
      }
      writeOutput(bb) {
        const ub = this.output;
        (0, Yb.j)(bb) ? (0, Yb.d)(bb, ub) : this.hasOutput || (0, Yb.d)(this.eH.getDefaultPose(), ub), ub.pitch = (0, Ob.i)(ub.pitch);
        const hb = this.eH.getDefaultFov(),
          Gb = Number.isFinite(hb) && hb > 0 && hb < 180,
          Ub = Gb ? Math.min(Bb.m.minFov, hb) : Bb.m.minFov,
          Lb = Gb ? Math.max(Bb.m.maxFov, hb) : Bb.m.maxFov;
        return ub.fov = Number.isFinite(ub.fov) ? Math.min(Lb, Math.max(Ub, ub.fov)) : Lb, this.hasOutput = !0, ub
      }
    }
  },
  38791: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      d: () => Lb,
      e: () => Ub,
      g: () => Gb,
      j: () => Sb,
      n: () => Yb,
      q: () => ab
    });
    var Bb = hb(38798);
    const Ob = {
      MJ: 0,
      mJ: 0
    };

    function Gb() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Ub(bb, ub) {
      return ub[0] = bb[0], ub[1] = bb[1], ub[2] = bb[2], ub
    }

    function Lb(bb, ub) {
      return Ub(bb.position, ub.position), ub.heading = bb.heading, ub.pitch = bb.pitch, ub.fov = bb.fov, ub
    }

    function Yb(bb, ub) {
      return Array.isArray(bb) && bb.length === ub && bb.every(Number.isFinite)
    }

    function Sb(bb) {
      return Yb(bb.position, 3) && Number.isFinite(bb.heading) && Number.isFinite(bb.pitch) && Number.isFinite(bb.fov)
    }

    function ab(bb, ub, hb, Ob, Gb) {
      for (let Bb = 0; Bb < 3; Bb++) Gb.position[Bb] = bb.position[Bb] + (ub.position[Bb] - bb.position[Bb]) * Ob;
      return Gb.heading = (0, Bb.y)(bb.heading + hb * Ob), Gb.pitch = bb.pitch + (ub.pitch - bb.pitch) * Ob, Gb.fov = bb.fov + (ub.fov - bb.fov) * Ob, Gb
    }
  },
  38816: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => rb,
      c: () => wb
    });
    var Bb = hb(38814),
      Ob = hb(38791);
    const Gb = Bb.i,
      Ub = Bb.p;

    function Lb(bb, ub, hb, Bb) {
      return Number.isFinite(bb) ? Math.min(hb, Math.max(ub, bb)) : Bb
    }

    function Yb(bb, ub, hb) {
      return void 0 !== bb && Number.isFinite(bb) ? Math.min(hb, Math.max(ub, bb)) : void 0
    }

    function Sb(bb) {
      const ub = Bb.m.maxCoordinate;
      return [Math.min(ub, Math.max(-ub, bb[0])), Math.min(ub, Math.max(-ub, bb[1])), Math.min(ub, Math.max(-ub, bb[2]))]
    }

    function ab(bb) {
      return "string" === typeof bb ? bb : (0, Ob.n)(bb, 3) ? Sb(bb) : void 0
    }
    const Hb = new RegExp(Bb.s);

    function wb(bb) {
      return "string" === typeof bb && Hb.test(bb)
    }

    function Zb(bb) {
      const ub = [];
      if (!Array.isArray(bb)) return ub;
      for (const hb of bb.slice(0, Bb.m.maxFrameTargets)) {
        const bb = ab(hb);
        void 0 === bb || "string" === typeof bb && !wb(bb) || ub.push(bb)
      }
      return ub
    }

    function Xb(bb) {
      if (!(0, Ob.n)(bb, 3)) return;
      const ub = Math.max(Math.abs(bb[0]), Math.abs(bb[1]), Math.abs(bb[2])),
        hb = Math.hypot(bb[0] / ub, bb[1] / ub, bb[2] / ub);
      return 0 === ub || ub * hb < Bb.m.minDirectionLength ? void 0 : [bb[0] / ub / hb, bb[1] / ub / hb, bb[2] / ub / hb]
    }

    function pb(bb) {
      if (void 0 !== bb) return "string" === typeof bb ? Gb.includes(bb) ? bb : void 0 : (0, Ob.n)(bb, 4) ? [Lb(bb[0], 0, 1, 0), Lb(bb[1], Bb.m.minEasingY, Bb.m.maxEasingY, 0), Lb(bb[2], 0, 1, 1), Lb(bb[3], Bb.m.minEasingY, Bb.m.maxEasingY, 1)] : "linear"
    }

    function ob(bb) {
      if (bb) return {
        maxYaw: Lb(bb.maxYaw, 0, Bb.m.maxPlayerLook, 0),
        maxPitch: Lb(bb.maxPitch, 0, Bb.m.maxPlayerLook, 0),
        returnMs: Yb(bb.returnMs, 0, Bb.m.maxReturnMs)
      }
    }
    const Ab = new RegExp(Bb.d);

    function lb(bb) {
      var ub;
      if ("object" !== typeof bb || null === bb) return;
      const hb = Bb.m.maxTransitionMs,
        Ob = Bb.m.minTransitionFadeMs;
      return {
        colour: "string" === typeof bb.colour && Ab.test(bb.colour) ? bb.colour : Bb.g,
        outMs: Lb(bb.outMs, Ob, hb, Ob),
        holdMs: Lb(null !== (ub = bb.holdMs) && void 0 !== ub ? ub : 0, 0, hb, 0),
        inMs: Lb(bb.inMs, Ob, hb, Ob)
      }
    }

    function Kb(bb) {
      return !0 === bb || void 0
    }

    function Wb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const ub = bb.lookAt;
      return Number.isFinite(bb.timeMs) && (0, Ob.n)(bb.position, 3) && (void 0 === ub || "string" === typeof ub || (0, Ob.n)(ub, 3))
    }

    function Cb(bb) {
      return {
        ...bb,
        timeMs: Lb(bb.timeMs, 0, Bb.m.maxPathMs, 0),
        position: Sb(bb.position),
        lookAt: ab(bb.lookAt),
        lookDirection: Xb(bb.lookDirection),
        fov: Yb(bb.fov, Bb.m.minFov, Bb.m.maxFov),
        easing: pb(bb.easing)
      }
    }

    function db(bb) {
      const ub = [];
      if (!Array.isArray(bb)) return ub;
      for (const hb of bb.slice(0, Bb.m.maxKeyframes)) {
        if (!Wb(hb)) continue;
        const bb = Cb(hb);
        (0 === ub.length || bb.timeMs > ub[ub.length - 1].timeMs) && ub.push(bb)
      }
      return ub
    }

    function rb(bb) {
      if ("object" !== typeof bb || null === bb) return {
        mode: "default"
      };
      const ub = {
          blendInMs: Yb(bb.blendInMs, 0, Bb.m.maxBlendInMs),
          blendEasing: pb(bb.blendEasing),
          transition: lb(bb.transition),
          letterbox: Kb(bb.letterbox),
          hideHud: Kb(bb.hideHud)
        },
        hb = {
          mode: "default",
          ...ub
        };
      if ("default" === bb.mode || "fixed" === bb.mode && !(0, Ob.n)(bb.position, 3)) return hb;
      const Gb = {
        ...ub,
        fov: Yb(bb.fov, Bb.m.minFov, Bb.m.maxFov),
        playerFacing: (Hb = bb.playerFacing, Ub.includes(Hb) ? Hb : void 0),
        playerLook: ob(bb.playerLook)
      };
      var Hb, wb;
      switch (bb.mode) {
        case "fixed":
          return {
            ...bb, ...Gb, position: Sb(bb.position), lookAt: ab(bb.lookAt), lookDirection: Xb(bb.lookDirection)
          };
        case "follow":
          return {
            ...bb, ...Gb, target: "string" === typeof bb.target ? bb.target : void 0, lookAt: ab(bb.lookAt), offset: (wb = bb.offset, Array.isArray(wb) ? [Lb(wb[0], -Bb.m.maxOffset, Bb.m.maxOffset, 0), Lb(wb[1], -Bb.m.maxOffset, Bb.m.maxOffset, 0), Lb(wb[2], -Bb.m.maxOffset, Bb.m.maxOffset, 0)] : [0, 0, 0]), lookDirection: Xb(bb.lookDirection), smoothMs: Yb(bb.smoothMs, 0, Bb.m.maxSmoothMs)
          };
        case "path":
          return {
            ...bb, ...Gb, keyframes: db(bb.keyframes)
          };
        case "frame":
          return {
            ...bb, ...Gb, targets: Zb(bb.targets), viewHeading: Yb(bb.viewHeading, -Bb.m.maxFrameHeading, Bb.m.maxFrameHeading), viewElevation: Yb(bb.viewElevation, 0, Bb.m.maxFrameElevation), padding: Yb(bb.padding, 0, Bb.m.maxFrameDistance), closestDistance: Yb(bb.closestDistance, 0, Bb.m.maxFrameDistance), furthestDistance: Yb(bb.furthestDistance, 0, Bb.m.maxFrameDistance), smoothMs: Yb(bb.smoothMs, 0, Bb.m.maxSmoothMs)
          };
        default:
          return hb
      }
    }
  },
  38277: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb
    });
    var Bb = hb(1124);

    function Ob(bb) {
      const ub = /(\d*\.?\d+)px/.exec(bb);
      return ub ? Number(ub[1]) : null
    }

    function Gb(bb) {
      return bb.split(/[\s,]+/).pop()
    }
    let Ub = !1;
    const Lb = {
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
      drawText: function(bb, ub, Bb, Lb, Yb, Sb) {
        if (Yb <= 0 || Sb <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: ab,
          fontVariant: Hb,
          fontWeight: wb,
          fontSize: Zb,
          font: Xb
        } = this, pb = [ab, Hb, wb, `${Zb}px`, Xb].filter(Boolean).join(" "), ob = [
          [wb, `${Zb}px`, Gb(Xb)].filter(Boolean).join(" "), `${Zb}px sans-serif`
        ], Ab = bb.font, lb = function(bb, ub, hb) {
          for (const Bb of ub) {
            bb.font = Bb;
            const ub = Ob(bb.font),
              Ub = Gb(Bb);
            if (null !== ub && Math.abs(ub - hb) <= .5 && bb.font.toLowerCase().includes(Ub.toLowerCase())) return Bb
          }
          return null
        }(bb, [pb, ...ob], Zb);
        lb !== pb && function(bb, ub, Bb) {
          Ub || (Ub = !0, Promise.resolve().then((() => hb(981))).then((hb => {
            let {
              cX: Ob
            } = hb;
            Ob(new Error("A canvas didn't take canvasTxt's font"), {
              font: bb,
              HZ: ub,
              drawnWith: null !== Bb && void 0 !== Bb ? Bb : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(pb, Ab, lb);
        const Kb = Ob(bb.font);
        if (null === lb && null !== Kb && Kb > 0) {
          const hb = Zb / Kb;
          bb.save();
          try {
            return bb.scale(hb, hb), {
              height: this.drawLines(bb, ub, Bb / hb, Lb / hb, Yb / hb, Sb / hb, Kb).height * hb
            }
          } finally {
            bb.restore()
          }
        }
        return this.drawLines(bb, ub, Bb, Lb, Yb, Sb, Zb)
      },
      drawLines: function(bb, ub, hb, Ob, Gb, Ub, Lb) {
        const Yb = hb + Gb,
          Sb = Ob + Ub;
        let ab, Hb = Ob + Ub / 2 + Lb / 2;
        "right" === this.align ? (ab = Yb, bb.textAlign = "right") : "left" === this.align ? (ab = hb, bb.textAlign = "left") : (ab = hb + Gb / 2, bb.textAlign = "center");
        for (const Bb of ub) {
          bb.measureText(Bb).width >= Gb && (ub = ub.replace(Bb, ""))
        }
        ub = (0, Bb.cb)(ub);
        const wb = [],
          Zb = ub.split("\n"),
          Xb = this.justify ? bb.measureText("\u200a").width : 0;
        Zb.forEach((ub => {
          let hb = bb.measureText(ub).width;
          if (hb <= Gb) wb.push(ub);
          else {
            let Bb = ub;
            const Ob = Gb;
            let Ub, Lb, Yb;
            for (hb = bb.measureText(Bb).width; hb > Ob;) {
              for (Ub = 0, Lb = 0, Yb = ""; Lb < Ob;) Ub++, Yb = Bb.substr(0, Ub), Lb = bb.measureText(Yb).width;
              Ub--, Yb = Yb.substr(0, Ub);
              const ub = Ub;
              if (" " !== Bb.substr(Ub, 1)) {
                for (;
                  " " !== Bb.substr(Ub, 1) && 0 !== Ub;) Ub--;
                0 === Ub && (Ub = ub), Yb = Bb.substr(0, Ub)
              }
              Yb = this.justify ? this.justifyLine(bb, Yb, Xb, "\u200a", Gb) : Yb, Bb = Bb.substr(Ub), hb = bb.measureText(Bb).width, wb.push(Yb)
            }
            hb > 0 && wb.push(Bb)
          }
        }));
        const pb = this.lineHeight ? this.lineHeight : this.getTextHeight(bb, ub),
          ob = pb * (wb.length - 1),
          Ab = ob / 2;
        let lb = Ob;
        "top" === this.vAlign ? Hb = Ob + Lb : "bottom" === this.vAlign ? (Hb = Sb - ob, lb = Sb) : (lb = Ob + Ub / 2, Hb -= Ab), wb.forEach((ub => {
          ub = ub.trim(), bb.fillText(ub, ab, Hb), Hb += pb
        })), this.debug && (bb.lineWidth = 3, bb.strokeStyle = "#00909e", bb.strokeRect(hb, Ob, Gb, Ub), bb.lineWidth = 2, bb.strokeStyle = "#f6d743", bb.beginPath(), bb.moveTo(ab, Ob), bb.lineTo(ab, Sb), bb.stroke(), bb.strokeStyle = "#ff6363", bb.beginPath(), bb.moveTo(hb, lb), bb.lineTo(Yb, lb), bb.stroke());
        return {
          height: ob + pb
        }
      },
      getTextHeight: function(bb, ub) {
        const hb = bb.textBaseline;
        bb.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Bb
        } = bb.measureText(ub);
        return bb.textBaseline = hb, Bb
      },
      justifyLine: function(bb, ub, hb, Bb, Ob) {
        const Gb = ub.trim(),
          Ub = bb.measureText(Gb).width,
          Lb = Gb.split(/\s+/).length - 1,
          Yb = Math.floor((Ob - Ub) / hb);
        if (Lb <= 0 || Yb <= 0) return Gb;
        const Sb = Math.floor(Yb / Lb);
        let ab = Yb - Lb * Sb,
          Hb = [];
        for (let wb = 0; wb < Sb; wb++) Hb.push(Bb);
        Hb = Hb.join("");
        return Gb.replace(/\s+/g, (bb => {
          const ub = ab > 0 ? Hb + Bb : Hb;
          return ab--, bb + ub
        }))
      }
    }
  },
  38752: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return ub.set(bb), ub
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  38286: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => pb,
      d: () => Xb,
      g: () => wb,
      j: () => ab,
      k: () => Hb
    });
    var Bb = hb(4013),
      Ob = hb(314);
    const Gb = 1024,
      Ub = 1536,
      Lb = 2 * Bb.i + 1,
      Yb = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Sb = 1.5;

    function ab(bb, ub, hb) {
      if ("string" !== typeof bb) return ub;
      try {
        const hb = JSON.parse(bb);
        return hb && "object" === typeof hb ? hb : ub
      } catch (Bb) {
        return void 0 !== hb && console.error(`Couldn't parse ${hb}`, Bb), ub
      }
    }

    function Hb(bb) {
      return ab(bb, null, "a leaderboard's rows")
    }

    function wb(bb, ub) {
      var hb, Bb;
      return null !== ub && void 0 !== ub ? ub : {
        status: null !== (hb = bb.status) && void 0 !== hb ? hb : "loading",
        entries: null !== (Bb = bb.entries) && void 0 !== Bb ? Bb : []
      }
    }

    function Zb(bb, ub) {
      return "number" === typeof bb && Number.isFinite(bb) && bb > 0 ? bb : ub
    }

    function Xb(bb, ub) {
      const hb = Zb(bb.size, 1);
      let Bb = Zb(bb.width, Zb(2.5 * hb, 2.5)),
        Ob = Zb(bb.height, Zb(3.75 * hb, 3.75));
      Number.isFinite(Gb * Ob / Bb) && Number.isFinite(Ub * Bb / Ob) || (Bb = 2.5, Ob = 3.75);
      const Lb = Ob / Bb,
        Yb = Math.max(1, Math.min(Gb, ub / Lb));
      return {
        width: Bb,
        height: Ob,
        layoutWidth: Math.max(Gb, Ub / Lb),
        layoutHeight: Math.max(Ub, Gb * Lb),
        pixelWidth: Math.round(Yb),
        pixelHeight: Math.round(Math.max(1, Math.min(ub, Yb * Lb)))
      }
    }

    function pb(bb, ub, hb, Ub, ab, Hb) {
      bb.setTransform(1, 0, 0, 1, 0, 0), bb.fillStyle = Ob.I.defaultNameTagBackground, bb.fillRect(0, 0, ub, hb), bb.scale(ub / Ub.layoutWidth, hb / Ub.layoutHeight), bb.translate((Ub.layoutWidth - Gb) / 2, 0),
        function(bb, ub, hb, Gb) {
          var Ub, ab, Hb, wb;
          const {
            top: Zb,
            around: Xb,
            showPlayerText: pb,
            localPlayerDbId: lb
          } = hb, {
            whiteUiText: Kb,
            grayUiText: Wb,
            yellowUiText: Cb
          } = Ob.I;
          bb.textBaseline = "middle";
          const db = function(ub, hb, Bb, Ob, Gb, Ub) {
              let Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              bb.font = `bold ${Ob}px 'Jetbrains Mono', monospace`, bb.fillStyle = Gb, bb.textAlign = Lb;
              let Yb = ub.replace(/[\r\n\t]/g, " ");
              if (bb.measureText(Yb).width > Ub) {
                for (; Yb.length > 0 && bb.measureText(`${Yb}\u2026`).width > Ub;) Yb = Yb.slice(0, -1);
                Yb += "\u2026"
              }
              bb.fillText(Yb, hb, Bb)
            },
            rb = ub => {
              bb.fillStyle = Kb, bb.globalAlpha = .15, bb.fillRect(24, ub, 976, 2), bb.globalAlpha = 1
            },
            jb = null === lb ? null : (0, Ob.qc)(lb),
            nb = bb => null !== jb && bb.playerHash === jb,
            Db = ob(Zb.entries, Bb.k),
            xb = "ready" === Zb.status && Db.length > 0,
            zb = null === Xb ? [] : ob(Xb.entries, Lb),
            gb = Db.some(nb),
            ib = null === Xb ? null : function(bb) {
              const ub = bb;
              if (!ub || !Number.isFinite(ub.rank) || !Number.isFinite(ub.tied) || !Number.isFinite(ub.total)) return null;
              return ub
            }(Xb.standing),
            vb = zb.find(nb),
            tb = Db.find(nb),
            Jb = null === ib || void 0 === vb ? null : {
              value: vb.value,
              rank: ib.rank
            },
            eb = Ab(Db, void 0 === tb || tb.value === (null === Jb || void 0 === Jb ? void 0 : Jb.value) ? Jb : null),
            Nb = Ab(zb, Jb),
            sb = (bb, ub) => {
              const hb = bb.findIndex(nb);
              return hb >= 0 ? ub[hb] : null
            },
            Mb = null !== (Ub = null !== (ab = null === ib || void 0 === ib ? void 0 : ib.rank) && void 0 !== ab ? ab : sb(zb, Nb)) && void 0 !== Ub ? Ub : sb(Db, eb);
          bb.font = "bold 34px 'Jetbrains Mono', monospace";
          const mb = [...xb ? eb : [], ...gb ? [] : Nb],
            Ib = Math.min(280, Math.max(0, ...mb.map((ub => bb.measureText(Yb.format(ub)).width)))),
            Pb = Ib <= 80,
            qb = Pb ? 80 : 32 + Ib,
            Eb = Pb ? 148 : qb + 28,
            yb = 660 - Eb;
          db(`TOP ${Bb.k}  /  ALL TIME`, 24, 52, 28, Wb, 976), db(pb ? String(null !== (Hb = ub.title) && void 0 !== Hb ? Hb : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Kb, 976), db("RANK", 32, 174, 28, Wb, Eb - 40), db("PLAYER", Eb, 174, 28, Wb, yb), db(pb ? String(null !== (wb = ub.scoreLabel) && void 0 !== wb ? wb : "Score").slice(0, 24) : "Score", 992, 174, 28, Wb, 304, "right"), rb(202);
          const Vb = (Gb - 232) / (Bb.k + Sb + Lb),
            Fb = 208 + Bb.k * Vb,
            fb = Fb + Sb * Vb,
            kb = (ub, hb, Bb, Ob) => {
              const Gb = nb(ub);
              bb.fillStyle = Gb ? Cb : Kb, bb.globalAlpha = Gb ? .15 : Ob ? .035 : 0, bb.fillRect(24, Bb - Vb / 2 + 1, 976, Vb - 2), bb.globalAlpha = 1;
              const Ub = Gb ? Cb : Kb;
              db(Yb.format(hb), qb, Bb, 34, Ub, Pb ? 80 : Ib, Pb ? "center" : "right"), db(pb ? String(ub.name).slice(0, 64) : "Player", Eb, Bb, 34, Ub, yb);
              const Lb = Yb.format(ub.value);
              db(bb.measureText(Lb).width > 304 ? ub.value.toExponential(6) : Lb, 992, Bb, 34, Ub, 304, "right")
            };
          if (xb)
            for (const [Bb, Ob] of Db.entries()) kb(Ob, eb[Bb], 208 + (Bb + .5) * Vb, Bb % 2 === 0);
          else {
            const bb = "error" === Zb.status,
              ub = bb ? "Couldn't load leaderboard" : "ready" === Zb.status ? "No scores yet" : "Loading leaderboard\u2026",
              hb = bb ? "Trying again shortly" : "ready" === Zb.status ? "Be the first on the board!" : "Fetching the top players",
              Bb = (208 + Fb) / 2;
            db(ub, 512, Bb - 28, 40, bb ? Ob.I.redUiText : Kb, 960, "center"), db(hb, 512, Bb + 27, 30, Wb, 960, "center")
          }
          const Tb = Fb + Sb * Vb / 2;
          if (null === Mb) rb(Tb);
          else {
            const ub = null === ib ? 0 : ib.tied - 1,
              hb = `YOUR RANK #${Yb.format(Mb)}${null===ib?"":` of ${Yb.format(ib.total)}`}`;
            bb.font = "bold 36px 'Jetbrains Mono', monospace";
            const Bb = Math.max(20, Math.min(36, Math.floor(34560 / bb.measureText(hb).width)));
            db(hb, 512, Tb - (ub > 0 ? 15 : 0), Bb, Cb, 960, "center"), ub > 0 && db(`Tied with ${Yb.format(ub)} other${1===ub?"":"s"}`, 512, Tb + 24, 24, Wb, 960, "center")
          }
          if (null === Xb) return;
          const cb = fb + Lb * Vb / 2;
          if (gb) db(`You're in the top ${Bb.k}!`, 512, cb, 40, Cb, 960, "center");
          else if (0 === zb.length) db("You're not on this board yet", 512, cb, 34, Wb, 960, "center");
          else
            for (const [Bb, Ob] of zb.entries()) kb(Ob, Nb[Bb], fb + (Bb + .5) * Vb, Bb % 2 === 0)
        }(bb, ab, Hb, Ub.layoutHeight)
    }

    function ob(bb, ub) {
      return Array.isArray(bb) ? bb.slice(0, ub).filter((bb => bb && Number.isFinite(bb.rank) && Number.isFinite(bb.value))) : []
    }

    function Ab(bb, ub) {
      const hb = [];
      let Bb = !1;
      return bb.forEach(((Ob, Gb) => {
        if (null !== ub && Ob.value === ub.value) return void hb.push(ub.rank);
        const Ub = Gb > 0 && Ob.value === bb[Gb - 1].value;
        Ub || (Bb = 0 === Gb && 1 !== Ob.rank), hb.push(Ub && !Bb ? hb[Gb - 1] : Ob.rank)
      })), hb
    }
  },
  38491: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      e: () => Gb
    });
    const Bb = 32;

    function Ob(bb) {
      return Array.from(bb).length
    }

    function Gb(bb) {
      const ub = [""];
      let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ob = "";
      const Gb = () => {
        ub.push(""), hb = 0, Ob = ""
      };
      for (const Ub of bb.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Ub)) Gb();
        else if (/^\s+$/.test(Ub)) Ob += Ub;
      else if (Ub.length > 0) {
        const bb = Array.from(Ub);
        hb > 0 && hb + Ob.length + bb.length > Bb && Gb(), ub[ub.length - 1] += Ob, hb += Ob.length, Ob = "";
        for (const Ob of bb) hb >= Bb && Gb(), ub[ub.length - 1] += Ob, hb++
      }
      return ub[ub.length - 1] += Ob, ub
    }
  },
  38750: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    var Bb = hb(36242),
      Ob = hb.n(Bb);
    const Gb = [1, 1, 1];

    function Ub(bb) {
      if (!bb) return [...Gb];
      try {
        const [ub, hb, Bb] = Ob()(bb).rgb().array();
        return [ub / 255, hb / 255, Bb / 255]
      } catch (ub) {
        return console.warn(`Invalid groundArrowPath colour "${bb}":`, ub), [...Gb]
      }
    }
  },
  33944: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      e: () => Lb,
      f: () => Ub,
      j: () => Ob,
      m: () => Bb
    });
    const Bb = {
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
      Ob = "/textures/dayNight/sun.png",
      Gb = "/textures/dayNight/moon.png",
      Ub = "/textures/dayNight/stars",
      Lb = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38814: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => ab,
      g: () => Hb,
      i: () => Bb,
      m: () => Yb,
      p: () => Ob,
      s: () => Sb,
      u: () => Lb,
      y: () => Ub
    });
    const Bb = ["linear", "easeIn", "easeOut", "easeInOut"],
      Ob = ["movement", "camera", "cursor"],
      Gb = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Ub(bb, ub) {
      return Lb(bb, ub, Gb)
    }

    function Lb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (bb === ub || Number.isNaN(bb) && Number.isNaN(ub)) return !0;
      if ("object" !== typeof bb || "object" !== typeof ub || null === bb || null === ub || Array.isArray(bb) !== Array.isArray(ub)) return !1;
      const Bb = bb,
        Ob = ub;
      for (const Gb of new Set([...Object.keys(Bb), ...Object.keys(Ob)]))
        if (!hb.includes(Gb) && !Lb(Bb[Gb], Ob[Gb])) return !1;
      return !0
    }
    const Yb = {
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
      Sb = "^-[1-9][0-9]*$",
      ab = "^#[0-9a-fA-F]{6}$",
      Hb = "#000000"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);