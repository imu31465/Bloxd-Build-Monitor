export const id = 200;
export const ids = [200];
export const modules = {
  38696: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
      constructor(bb, cb) {
        this.read = bb, this.apply = cb, this.release = null
      }
      turn(bb, cb) {
        const sb = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: cb,
          forcedCameraDirection: [bb[0], bb[1], bb[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), cb + 100),
          transitionMs: sb
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
  38253: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      g: () => Wb
    });
    const kb = new Map;

    function Wb(bb, cb) {
      kb.set(bb, cb)
    }

    function ab(bb) {
      return bb ? kb.get(bb) : void 0
    }
  },
  39188: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(37825);

    function Wb(bb, cb, sb) {
      var Wb, ab, Tb, Ub, Ib, Hb, fb;
      const Mb = (0, kb.d)(bb, cb, sb[0], sb[1], sb[2]),
        Xb = Mb ? null !== (Wb = Mb.textCell) && void 0 !== Wb ? Wb : Mb.rect.anchor : sb,
        nb = cb(Xb[0], Xb[1], Xb[2]);
      return {
        pos: [sb[0], sb[1], sb[2]],
        noticeboardSpan: Mb && {
          width: Mb.rect.width,
          height: Mb.rect.height
        },
        text: null !== (ab = null === nb || void 0 === nb || null === (Tb = nb.persisted) || void 0 === Tb || null === (Ub = Tb.shared) || void 0 === Ub ? void 0 : Ub.text) && void 0 !== ab ? ab : "",
        textSize: null !== (Ib = null === nb || void 0 === nb || null === (Hb = nb.persisted) || void 0 === Hb || null === (fb = Hb.shared) || void 0 === fb ? void 0 : fb.textSize) && void 0 !== Ib ? Ib : null
      }
    }
  },
  38117: (bb, cb, sb) => {
    function kb(bb) {
      switch (bb.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    sb.d(cb, {
      b: () => Wb,
      e: () => ab,
      g: () => kb
    });
    const Wb = 4,
      ab = 3
  },
  38721: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => ab
    });
    var kb = sb(344);
    const Wb = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class ab {
      constructor(bb) {
        this.importGame = bb, this.loads = new Map, this.loaded = new Map
      }
      load(bb) {
        const cb = (0, kb.Wb)(bb);
        if (!Wb.has(cb)) return Promise.resolve(void 0);
        let sb = this.loads.get(cb);
        return sb || (sb = this.importGame(cb).then((bb => {
          const sb = bb.default;
          if ("function" !== typeof sb) throw new Error(`${cb}'s client code has no default-exported factory`);
          return this.loaded.set(cb, sb), sb
        })).catch((bb => {
          throw this.loads.delete(cb), bb
        })), this.loads.set(cb, sb)), sb
      }
      loadedFactory(bb) {
        const cb = (0, kb.Wb)(bb);
        if (!Wb.has(cb)) return;
        const sb = this.loaded.get(cb);
        if (!sb) throw new Error(`${cb}'s client code started before it loaded`);
        return sb
      }
    }
  },
  39193: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb
    });
    var kb = sb(9103),
      Wb = sb(8942),
      ab = sb(3050);

    function Tb(bb) {
      if (bb === kb.c) return 0;
      const cb = (0, ab.b)(bb);
      if (void 0 !== cb && cb <= Wb.MAX_BLOCK_ID) return cb;
      const sb = (0, ab.b)(bb.split("|")[0]);
      if (void 0 !== sb && sb <= Wb.MAX_BLOCK_ID && (0, Wb.rootMetaDescOf)(sb) === bb) return sb;
      throw new Error(`Invalid block name. You sent ${bb}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38781: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb
    });
    var kb = sb(19);
    class Wb {
      constructor(bb) {
        this.screen = bb, this.hidesHud = !1
      }
      show(bb, cb) {
        this.screen.setFade(bb.colour, bb.alpha), this.screen.setLetterbox(!0 === cb.letterbox, bb.alpha < 1), this.setHudHidden(!0 === cb.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(bb) {
        this.hidesHud !== bb && (this.hidesHud = bb, kb.d.set({
          isUiHiddenByCamera: bb
        }))
      }
    }
  },
  38744: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb,
      d: () => Xb,
      f: () => Mb,
      h: () => Tb,
      l: () => mb,
      o: () => Ib,
      p: () => lb,
      q: () => Hb,
      t: () => Ub,
      v: () => fb
    });
    const kb = Math.PI / 2 - .001,
      Wb = 2 * Math.PI,
      ab = 1e-9;

    function Tb(bb, cb) {
      cb.heading = bb.heading, cb.pitch = bb.pitch
    }

    function Ub(bb, cb) {
      const sb = cb - bb;
      return sb - Wb * Math.floor((sb + Math.PI) / Wb)
    }

    function Ib(bb, cb, sb) {
      return bb + Ub(bb, cb) * sb
    }

    function Hb(bb) {
      if (!Number.isFinite(bb)) return bb;
      const cb = bb - Wb * Math.floor(bb / Wb);
      return cb < Wb ? cb : 0
    }

    function fb(bb, cb) {
      return bb + Ub(bb, cb)
    }

    function Mb(bb) {
      return Math.max(-kb, Math.min(kb, bb))
    }

    function Xb(bb, cb, sb) {
      const kb = Math.cos(cb);
      return sb[0] = kb * Math.sin(bb), sb[1] = -Math.sin(cb), sb[2] = kb * Math.cos(bb), sb
    }

    function nb(bb, cb, sb, kb) {
      const Wb = Math.sqrt(bb * bb + sb * sb);
      return Wb < ab && Math.abs(cb) < ab || (Wb >= ab && (kb.heading = Math.atan2(bb, sb)), kb.pitch = Mb(Math.atan2(-cb, Wb) + 0)), kb
    }

    function mb(bb, cb) {
      return nb(bb[0], bb[1], bb[2], cb)
    }

    function lb(bb, cb, sb) {
      return nb(cb[0] - bb[0], cb[1] - bb[1], cb[2] - bb[2], sb)
    }
  },
  38776: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab,
      e: () => Wb
    });
    var kb = sb(38744);

    function Wb(bb) {
      var cb;
      const sb = "default" === bb.mode ? "movement" : null !== (cb = bb.playerFacing) && void 0 !== cb ? cb : "movement";
      return "cursor" === sb ? {
        facing: sb,
        mouseTurns: null
      } : {
        facing: sb,
        mouseTurns: "default" !== bb.mode && void 0 !== bb.playerLook ? "look" : "view"
      }
    }

    function ab(bb, cb, sb, Wb, ab, Tb) {
      return Tb.Eu = 0, Tb.bY = 0, Tb.pointedAt = void 0, void 0 !== Wb ? ab ? (Tb.pointedAt = Wb, bb) : (0, kb.q)(Wb.heading) : ab ? (Tb.Eu = cb, Tb.bY = sb, bb) : (0, kb.q)(bb + cb)
    }
  },
  38756: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ab
    });
    var kb = sb(38760),
      Wb = sb(38744),
      ab = sb(36567);

    function Tb(bb, cb, sb, kb) {
      if (!(kb > 0)) return cb;
      const Wb = cb > bb ? Math.min(cb, bb + sb / kb) : Math.max(cb, bb - sb / kb);
      return Math.abs(cb - Wb) < 1e-9 ? cb : Wb
    }
    class Ub {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: kb.e,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(bb) {
        !this.isGoingOut() && this.sinceTurnMs < kb.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: bb
        } : (this.waiting = null, this.startOut(bb))
      }
      fadeIn(bb) {
        this.isGoingOut() ? this.sinceTurnMs < kb.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: bb
        } : (this.waiting = null, this.startIn(bb)) : this.waiting = null
      }
      advance(bb) {
        const cb = this.waiting;
        if (null === cb) return this.step(bb);
        const sb = kb.k.minFadeTurnMs - this.sinceTurnMs;
        if (sb > bb) return this.step(bb);
        const Wb = this.step(sb);
        return this.waiting = null, "out" === cb.turn ? this.startOut(cb.transition) : this.startIn(cb.minMs), this.step(bb - sb) || Wb
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(bb) {
        ("in" === this.phase || null === this.phase && this.clearMs < kb.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = bb.colour), this.outMs = bb.outMs, this.holdMs = bb.holdMs, this.inMs = bb.inMs
      }
      startIn(bb) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(bb, this.inMs)
      }
      step(bb) {
        const cb = this.screen;
        this.sinceTurnMs += bb, null === this.phase && (this.clearMs += bb);
        let sb = !1,
          Wb = bb;
        if ("out" === this.phase) {
          const kb = (1 - cb.alpha) * this.outMs;
          if (cb.alpha = Tb(cb.alpha, 1, bb, this.outMs), cb.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, Wb = Math.max(0, bb - kb), sb = !0
        }
        let ab = bb;
        if ("hold" === this.phase) {
          this.heldMs += Wb;
          const bb = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - kb.k.minFadeTurnMs);
          if (bb < 0 || sb) return sb;
          this.phase = "in", this.sinceTurnMs = bb, ab = bb
        }
        return "in" === this.phase && (cb.alpha = Tb(cb.alpha, 0, ab, this.inMs), cb.alpha <= 0 && (this.phase = null, this.clearMs = 0)), sb
      }
    }
    var Ib = sb(38735),
      Hb = sb(38769),
      fb = sb(1832),
      Mb = sb(36223);

    function Xb(bb, cb) {
      for (let sb = 0; sb < cb.length; sb++) cb[sb] = bb[sb]
    }

    function nb(bb, cb) {
      var sb;
      return null !== (sb = bb.fov) && void 0 !== sb ? sb : cb.getDefaultFov()
    }

    function mb(bb, cb, sb, kb, Wb) {
      const ab = 2 / kb,
        Tb = Math.exp(-ab * Wb);
      for (let Ub = 0; Ub < bb.length; Ub++) {
        const kb = bb[Ub] - sb[Ub],
          Ib = (cb[Ub] + ab * kb) * Wb;
        bb[Ub] = sb[Ub] + (kb + Ib) * Tb, cb[Ub] = (cb[Ub] - ab * Ib) * Tb
      }
    }
    class lb {
      constructor(bb, cb, sb, kb) {
        var ab, Tb, Ub, Ib, Hb;
        this.settings = bb, this.fX = cb, this.targets = sb, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.BQ = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Wb.q)((0, fb.i)(null !== (ab = bb.viewHeading) && void 0 !== ab ? ab : 0)),
          pitch: (0, Wb.f)((0, fb.i)(null !== (Tb = bb.viewElevation) && void 0 !== Tb ? Tb : 45))
        }, this.closestDistance = null !== (Ub = bb.closestDistance) && void 0 !== Ub ? Ub : Math.min(6, null !== (Ib = bb.furthestDistance) && void 0 !== Ib ? Ib : 1 / 0), this.furthestDistance = null !== (Hb = bb.furthestDistance) && void 0 !== Hb ? Hb : Math.max(64, this.closestDistance);
        const Mb = (0, Wb.d)(this.base.heading, this.base.pitch, this.forward),
          Xb = kb.position,
          nb = this.closestDistance;
        this.goal = [Xb[0] + Mb[0] * nb, Xb[1] + Mb[1] * nb, Xb[2] + Mb[2] * nb, nb, this.base.heading, this.base.pitch]
      }
      update(bb, cb, sb) {
        var kb, ab;
        this.placeGoal(null !== (kb = this.settings.fov) && void 0 !== kb ? kb : this.fX.getBaseFov()), this.goal[4] = (0, Wb.v)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Tb = null !== (ab = this.settings.smoothMs) && void 0 !== ab ? ab : 400;
        !this.started || Tb < 1 ? (Xb(this.goal, this.smoothed), this.BQ.fill(0), this.started = !0) : mb(this.smoothed, this.BQ, this.goal, Tb, bb), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Wb.f)(this.smoothed[5]), cb.apply(this.angles, sb);
        const Ub = (0, Wb.d)(sb.heading, sb.pitch, this.forward);
        for (let Wb = 0; Wb < 3; Wb++) sb.position[Wb] = this.smoothed[Wb] - Ub[Wb] * this.smoothed[3];
        sb.fov = nb(this.settings, this.fX)
      }
      continueFrom(bb) {
        bb instanceof lb && (Xb(bb.goal, this.goal), Xb(bb.smoothed, this.smoothed), Xb(bb.BQ, this.BQ), this.framedTargets = bb.framedTargets, this.started = bb.started)
      }
      reset() {
        this.BQ.fill(0), this.started = !1
      }
      placeGoal(bb) {
        var cb;
        let sb = 0;
        for (const fb of this.settings.targets) {
          const bb = this.targets.currentAimPoint(fb);
          bb && (0, Ib.k)(bb, this.pointAt(sb++))
        }
        if (sb > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const bb = this.targets.aimPoint(this.fX.localPlayerId);
          bb && (0, Ib.k)(bb, this.pointAt(sb++))
        }
        const kb = this.goal;
        if (0 === sb) return void(kb[3] = this.withinDistances(kb[3]));
        for (let Ib = 0; Ib < 3; Ib++) {
          let bb = 1 / 0,
            cb = -1 / 0;
          for (let kb = 0; kb < sb; kb++) bb = Math.min(bb, this.points[kb][Ib]), cb = Math.max(cb, this.points[kb][Ib]);
          kb[Ib] = (bb + cb) / 2
        }
        let Wb = 0;
        for (let Ib = 0; Ib < sb; Ib++) {
          const bb = this.points[Ib];
          Wb = Math.max(Wb, Math.hypot(bb[0] - kb[0], bb[1] - kb[1], bb[2] - kb[2]))
        }
        const ab = Math.tan((0, fb.i)(bb) / 2),
          Tb = Math.atan(ab * (!0 === this.settings.letterbox ? Mb.e : 1)),
          Ub = Math.atan(ab * this.fX.getAspectRatio()),
          Hb = (Wb + (null !== (cb = this.settings.padding) && void 0 !== cb ? cb : 2)) / Math.sin(Math.min(Tb, Ub));
        kb[3] = this.withinDistances(Hb)
      }
      withinDistances(bb) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, bb))
      }
      pointAt(bb) {
        return bb === this.points.length && this.points.push([0, 0, 0]), this.points[bb]
      }
    }
    class Qb {
      constructor(bb) {
        this.limits = bb, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(bb) {
        this.limits && (this.yawOffset = bb.yawOffset, this.pitchOffset = bb.pitchOffset, this.idleMs = bb.idleMs)
      }
      update(bb, cb) {
        const sb = this.limits;
        if (!sb) return;
        const kb = Number.isFinite(cb.Eu) ? cb.Eu : 0,
          Wb = Number.isFinite(cb.bY) ? cb.bY : 0;
        if (cb.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: cb.pointedAt.heading,
          pitch: cb.pointedAt.pitch
        };
        else if (0 !== kb || 0 !== Wb) this.idleMs = 0, this.yawOffset += kb, this.pitchOffset += Wb;
        else {
          const cb = Math.max(0, this.idleMs + bb - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += bb, void 0 !== sb.returnMs && cb > 0) {
            const bb = sb.returnMs > 0 ? Math.exp(-3 * cb / sb.returnMs) : 0;
            this.yawOffset *= bb, this.pitchOffset *= bb
          }
        }
        this.clampOffsets(sb)
      }
      clampOffsets(bb) {
        if (bb.maxYaw >= 180) this.yawOffset = (0, Wb.t)(0, this.yawOffset);
        else {
          const cb = (0, fb.i)(bb.maxYaw);
          this.yawOffset = Math.max(-cb, Math.min(cb, this.yawOffset))
        }
        const cb = (0, fb.i)(bb.maxPitch);
        this.pitchOffset = Math.max(-cb, Math.min(cb, this.pitchOffset))
      }
      apply(bb, cb) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Wb.t)(bb.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - bb.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const sb = (0, Wb.f)(bb.pitch + this.pitchOffset);
        this.pitchOffset = sb - bb.pitch, cb.heading = (0, Wb.q)(bb.heading + this.yawOffset), cb.pitch = sb
      }
      unapply(bb, cb) {
        cb.heading = (0, Wb.q)(bb.heading - this.yawOffset), cb.pitch = (0, Wb.f)(bb.pitch - this.pitchOffset)
      }
    }
    const eb = 1e-6;

    function Cb(bb) {
      return Math.sqrt(bb[0] * bb[0] + bb[1] * bb[1] + bb[2] * bb[2])
    }

    function Nb(bb, cb, sb, kb, Wb) {
      const ab = Wb * Wb,
        Tb = ab * Wb;
      return (2 * Tb - 3 * ab + 1) * bb + (Tb - 2 * ab + Wb) * cb + (-2 * Tb + 3 * ab) * sb + (Tb - ab) * kb
    }

    function Vb(bb, cb, sb, kb, Wb) {
      const ab = Wb * Wb;
      return (6 * ab - 6 * Wb) * bb + (3 * ab - 4 * Wb + 1) * cb + (-6 * ab + 6 * Wb) * sb + (3 * ab - 2 * Wb) * kb
    }

    function Lb(bb, cb) {
      const sb = cb[0] - bb[0],
        kb = cb[1] - bb[1],
        Wb = cb[2] - bb[2];
      return Math.sqrt(sb * sb + kb * kb + Wb * Wb)
    }

    function ub(bb, cb, sb, kb, Wb, ab) {
      for (let Tb = 0; Tb < 3; Tb++) ab[Tb] = Wb ? bb[Tb] * kb : sb[Tb] - cb[Tb];
      return Wb && function(bb, cb) {
        const sb = Cb(bb);
        if (sb > cb) {
          const kb = cb / sb;
          bb[0] *= kb, bb[1] *= kb, bb[2] *= kb
        }
      }(ab, 3 * Lb(cb, sb)), ab
    }

    function Yb(bb, cb, sb, kb) {
      for (let Wb = 0; Wb < 3; Wb++) kb[Wb] = 6 * (cb[Wb] - bb[Wb]) - 2 * sb[Wb];
      if (Cb(kb) < eb)
        for (let Wb = 0; Wb < 3; Wb++) kb[Wb] = cb[Wb] - bb[Wb];
      return kb
    }

    function hb(bb, cb) {
      return [2 * cb[0] - bb[0], 2 * cb[1] - bb[1], 2 * cb[2] - bb[2]]
    }

    function Jb(bb, cb, sb, kb, Wb, ab, Tb) {
      if (!ab && !Tb) return 0;
      const Ub = ab ? bb : 2 * cb - sb,
        Ib = Tb ? sb : 2 * cb - bb,
        Hb = ab ? kb : Wb,
        fb = Tb ? Wb : kb,
        Mb = (cb - Ub) / Hb,
        Xb = (Ib - cb) / fb;
      if (Mb * Xb <= 0) return 0;
      const nb = (Ib - Ub) / (Hb + fb),
        mb = 3 * Math.min(Math.abs(Mb), Math.abs(Xb));
      return Math.max(-mb, Math.min(mb, nb))
    }

    function gb(bb, cb, sb, kb, Wb, ab, Tb) {
      const {
        u: Ub,
        segmentMs: Ib
      } = bb;
      if (!bb.curved) return sb + (kb - sb) * Ub;
      return Nb(sb, Jb(cb, sb, kb, bb.beforeMs, Ib, ab, !0) * Ib, kb, Jb(sb, kb, Wb, Ib, bb.afterMs, !0, Tb) * Ib, Ub)
    }

    function Bb(bb) {
      return Math.abs(bb.pitch) >= Wb.c
    }
    class tb {
      constructor(bb, cb, sb, kb, Wb) {
        this.nodes = bb, this.prevNodes = sb, this.nextNodes = kb, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = bb.map(((bb, sb) => this.nodeTangent(cb, Wb, sb)))
      }
      sample(bb, cb, sb) {
        const {
          index: kb,
          toIndex: ab,
          segmentMs: Tb,
          curved: Ub
        } = bb, Ib = this.fromAngles, Hb = this.toAngles, fb = this.nodeAngles(kb, sb.position, cb, Ib), Mb = this.nodeAngles(ab, sb.position, cb, Hb);
        if (Tb > 0 && "aim" !== fb && "aim" !== Mb && this.liveTangent(bb, Ib)) return sb.heading = (0, Wb.q)(Ib.heading), void(sb.pitch = Ib.pitch);
        if ("none" === fb && "none" === Mb) return;
        !Ub && Tb > 0 && ("tangent" === fb && this.liveTangent(bb, Ib), "tangent" === Mb && this.liveTangent(bb, Hb)), "none" === fb ? (0, Wb.h)(Hb, Ib) : "none" === Mb && (0, Wb.h)(Ib, Hb);
        const Xb = Ub && bb.beforeIndex >= 0 && "none" !== this.nodeAngles(bb.beforeIndex, sb.position, cb, this.beforeAngles),
          nb = Ub && bb.afterIndex >= 0 && "none" !== this.nodeAngles(bb.afterIndex, sb.position, cb, this.afterAngles),
          mb = (0, Wb.v)(Ib.heading, Hb.heading),
          lb = gb(bb, Xb ? (0, Wb.v)(Ib.heading, this.beforeAngles.heading) : 0, Ib.heading, mb, nb ? (0, Wb.v)(mb, this.afterAngles.heading) : 0, Xb, nb);
        sb.heading = (0, Wb.q)(lb), sb.pitch = (0, Wb.f)(gb(bb, this.beforeAngles.pitch, Ib.pitch, Hb.pitch, this.afterAngles.pitch, Xb, nb))
      }
      nodeAngles(bb, cb, sb, kb) {
        const Wb = this.rawNodeAngles(bb, cb, sb, kb);
        return "none" !== Wb && Bb(kb) && !this.borrowHeading(this.prevNodes[bb], cb, sb, kb) && this.borrowHeading(this.nextNodes[bb], cb, sb, kb), Wb
      }
      borrowHeading(bb, cb, sb, kb) {
        const Wb = this.borrowedAngles;
        return !(bb < 0 || "none" === this.rawNodeAngles(bb, cb, sb, Wb) || Bb(Wb)) && (kb.heading = Wb.heading, !0)
      }
      rawNodeAngles(bb, cb, sb, kb) {
        const ab = this.nodes[bb].keyframe;
        if (ab.lookDirection) return (0, Wb.l)(ab.lookDirection, kb), "aim";
        if (void 0 !== ab.lookAt) {
          const bb = sb(ab.lookAt);
          if (bb) return (0, Wb.p)(cb, bb, kb), "aim"
        }
        const Tb = this.tangents[bb];
        return Tb ? ((0, Wb.h)(Tb, kb), "tangent") : "none"
      }
      liveTangent(bb, cb) {
        const sb = this.nodes[bb.index].position,
          kb = this.nodes[bb.toIndex].position,
          ab = this.derivative;
        for (let Wb = 0; Wb < 3; Wb++) ab[Wb] = Vb(sb[Wb], bb.fromTangent[Wb], kb[Wb], bb.toTangent[Wb], bb.u);
        return Cb(ab) > 1e-9 ? ((0, Wb.l)(ab, cb), !0) : !(Lb(sb, kb) < eb) && ((0, Wb.l)(Yb(sb, kb, bb.u < .5 ? bb.toTangent : bb.fromTangent, ab), cb), !0)
      }
      nodeTangent(bb, cb, sb) {
        var kb;
        const ab = bb[sb];
        if (Cb(ab) > 1e-9) return (0, Wb.l)(ab, {
          heading: 0,
          pitch: 0
        });
        const Tb = null !== (kb = this.restDirectionTo(sb, sb + 1, bb, cb)) && void 0 !== kb ? kb : this.restDirectionTo(sb, sb - 1, bb, cb);
        return Tb ? (0, Wb.l)(Tb, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(bb, cb, sb, kb) {
        const Wb = this.nodes[bb],
          ab = this.nodes[cb];
        if (!ab || Lb(Wb.position, ab.position) < eb) return null;
        const [Tb, Ub] = cb > bb ? [Wb, ab] : [ab, Wb], Ib = ub(sb[cb], Tb.position, Ub.position, Ub.timeMs - Tb.timeMs, kb, [0, 0, 0]);
        return Yb(Tb.position, Ub.position, Ib, [0, 0, 0])
      }
    }

    function yb(bb, cb) {
      const sb = bb.lookDirection || cb.lookDirection ? function(bb, cb) {
        if (!bb || !cb) return bb === cb;
        const sb = Cb(bb),
          kb = Cb(cb);
        return Math.hypot(bb[0] / sb - cb[0] / kb, bb[1] / sb - cb[1] / kb, bb[2] / sb - cb[2] / kb) < eb
      }(bb.lookDirection, cb.lookDirection) : (kb = bb.lookAt, Wb = cb.lookAt, "object" !== typeof kb || "object" !== typeof Wb ? kb === Wb : Lb(kb, Wb) < eb);
      var kb, Wb;
      return Lb(bb.position, cb.position) < eb && bb.fov === cb.fov && sb
    }
    class Pb {
      constructor(bb, cb, sb) {
        if (this.smooth = cb, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
        for (let ab = 1; ab < bb.length; ab++)
          if (!(bb[ab].timeMs > bb[ab - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = bb.map((bb => {
          var cb;
          return {
            timeMs: bb.timeMs,
            position: [...bb.position],
            keyframe: bb,
            easing: (0, ab.p)(null !== (cb = bb.easing) && void 0 !== cb ? cb : "linear")
          }
        }));
        const kb = this.nodes[0],
          Wb = this.nodes[this.nodes.length - 1],
          Tb = sb && this.nodes.length > 1;
        Tb && !yb(kb.keyframe, Wb.keyframe) && this.nodes.push({
          ...kb,
          timeMs: Wb.timeMs + (Wb.timeMs - kb.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Tb ? this.nodes[this.nodes.length - 1].timeMs - kb.timeMs : 0, this.prevNodes = this.nodes.map(((bb, cb) => this.neighbour(cb, -1))), this.nextNodes = this.nodes.map(((bb, cb) => this.neighbour(cb, 1))), this.prevGaps = this.prevNodes.map(((bb, cb) => bb >= 0 ? this.gapMs(cb, -1) : 0)), this.nextGaps = this.nextNodes.map(((bb, cb) => bb >= 0 ? this.gapMs(cb, 1) : 0)), this.velocities = this.nodes.map(((bb, cb) => {
          const sb = this.prevNodes[cb],
            kb = this.nextNodes[cb];
          return function(bb, cb, sb, kb, Wb, ab) {
            if (ab[0] = 0, ab[1] = 0, ab[2] = 0, !bb && !sb) return ab;
            const Tb = null !== bb && void 0 !== bb ? bb : hb(null !== sb && void 0 !== sb ? sb : cb, cb),
              Ub = null !== sb && void 0 !== sb ? sb : hb(null !== bb && void 0 !== bb ? bb : cb, cb),
              Ib = bb ? kb : Wb,
              Hb = sb ? Wb : kb,
              fb = Lb(Tb, cb),
              Mb = Lb(cb, Ub);
            if (fb < eb || Mb < eb) return ab;
            const Xb = Math.sqrt(fb),
              nb = Math.sqrt(Mb),
              mb = (Xb + nb) / (Ib + Hb);
            for (let lb = 0; lb < 3; lb++) {
              const bb = (cb[lb] - Tb[lb]) / Xb - (Ub[lb] - Tb[lb]) / (Xb + nb) + (Ub[lb] - cb[lb]) / nb;
              ab[lb] = bb * mb
            }
            return ab
          }(sb >= 0 ? this.nodes[sb].position : null, bb.position, kb >= 0 ? this.nodes[kb].position : null, this.prevGaps[cb], this.nextGaps[cb], [0, 0, 0])
        })), this.aim = new tb(this.nodes, this.velocities, this.prevNodes, this.nextNodes, cb)
      }
      sample(bb, cb, sb, kb) {
        const Wb = this.findSegment(this.pathTime(bb));
        this.samplePosition(Wb, kb.position), this.aim.sample(Wb, cb, kb);
        const {
          beforeIndex: ab,
          afterIndex: Tb
        } = Wb;
        kb.fov = gb(Wb, ab >= 0 ? this.fovAt(ab, sb) : 0, this.fovAt(Wb.index, sb), this.fovAt(Wb.toIndex, sb), Tb >= 0 ? this.fovAt(Tb, sb) : 0, ab >= 0, Tb >= 0)
      }
      pathTime(bb) {
        const cb = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || bb <= cb) return bb;
        const sb = bb - cb;
        return cb + sb - this.loopMs * Math.floor(sb / this.loopMs)
      }
      findSegment(bb) {
        const cb = this.nodes,
          sb = this.segment;
        let kb = sb.index;
        for (bb < cb[kb].timeMs && (kb = 0); kb < cb.length - 2 && cb[kb + 1].timeMs <= bb;) kb++;
        const Wb = Math.min(kb + 1, cb.length - 1),
          Tb = cb[Wb].timeMs - cb[kb].timeMs;
        return sb.index = kb, sb.toIndex = Wb, sb.segmentMs = Tb, sb.u = Tb > 0 ? (0, ab.n)((bb - cb[kb].timeMs) / Tb, cb[kb].easing) : 1, sb.curved = this.smooth && Tb > 0, sb.beforeIndex = this.prevNodes[kb], sb.afterIndex = this.nextNodes[Wb], sb.beforeMs = this.prevGaps[kb], sb.afterMs = this.nextGaps[Wb], sb
      }
      samplePosition(bb, cb) {
        const {
          fromTangent: sb,
          toTangent: kb,
          curved: Wb
        } = bb, ab = this.nodes[bb.index].position, Tb = this.nodes[bb.toIndex].position;
        ub(this.velocities[bb.index], ab, Tb, bb.segmentMs, Wb, sb), ub(this.velocities[bb.toIndex], ab, Tb, bb.segmentMs, Wb, kb);
        const Ub = bb.u;
        for (let Ib = 0; Ib < 3; Ib++) cb[Ib] = Wb ? Nb(ab[Ib], sb[Ib], Tb[Ib], kb[Ib], Ub) : ab[Ib] + (Tb[Ib] - ab[Ib]) * Ub
      }
      fovAt(bb, cb) {
        var sb;
        return null !== (sb = this.nodes[bb].keyframe.fov) && void 0 !== sb ? sb : cb
      }
      neighbour(bb, cb) {
        const sb = this.nodes.length - 1,
          kb = bb + cb;
        return kb >= 0 && kb <= sb ? kb : this.loopMs <= 0 || sb < 2 ? -1 : kb < 0 ? sb - 1 : 1
      }
      gapMs(bb, cb) {
        const sb = this.nodes.length - 1;
        if (1 === cb) {
          const cb = bb === sb ? 0 : bb;
          return this.nodes[cb + 1].timeMs - this.nodes[cb].timeMs
        }
        const kb = 0 === bb ? sb : bb;
        return this.nodes[kb].timeMs - this.nodes[kb - 1].timeMs
      }
    }
    class Db {
      constructor(bb) {
        this.fX = bb, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = cb => bb.getEntityPosition(cb), this.readAimPoint = cb => bb.getEntityAimPoint(cb)
      }
      aimPoint(bb) {
        return "string" !== typeof bb ? (0, Ib.r)(bb, 3) ? bb : null : this.resolve(bb, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(bb) {
        const cb = "string" === typeof bb ? this.fX.getEntityAimPoint(bb) : bb;
        return cb && (0, Ib.r)(cb, 3) ? cb : null
      }
      feetPosition(bb) {
        return this.resolve(bb, this.readFeet, this.lastFeet)
      }
      heading(bb) {
        const cb = this.fX.getEntityHeading(bb);
        if (null !== cb && Number.isFinite(cb)) return this.lastHeadings.set(bb, cb), cb;
        const sb = this.lastHeadings.get(bb);
        return void 0 !== sb ? sb : bb === this.fX.localPlayerId ? 0 : this.heading(this.fX.localPlayerId)
      }
      resolve(bb, cb, sb) {
        const kb = cb(bb);
        let Wb = sb.get(bb);
        return kb && (0, Ib.r)(kb, 3) ? (Wb || (Wb = [0, 0, 0], sb.set(bb, Wb)), Wb[0] = kb[0], Wb[1] = kb[1], Wb[2] = kb[2], Wb) : Wb || (bb === this.fX.localPlayerId ? null : this.resolve(this.fX.localPlayerId, cb, sb))
      }
    }

    function Eb(bb) {
      return {
        heading: bb.heading,
        pitch: bb.pitch
      }
    }

    function ib(bb, cb) {
      Number.isFinite(bb.heading) && Number.isFinite(bb.pitch) || (0, Wb.h)(cb, bb)
    }

    function Ob(bb, cb, sb, kb, ab) {
      if (cb) return void(0, Wb.l)(cb, ab);
      const Tb = kb.aimPoint(sb);
      Tb && (0, Wb.p)(bb, Tb, ab)
    }
    class Gb {
      constructor(bb, cb, sb, kb) {
        this.settings = bb, this.fX = cb, this.targets = sb, this.base = void 0, this.base = Eb(kb)
      }
      update(bb, cb, sb) {
        var kb;
        const Wb = this.settings;
        (0, Ib.k)(Wb.position, sb.position), Ob(Wb.position, Wb.lookDirection, null !== (kb = Wb.lookAt) && void 0 !== kb ? kb : this.fX.localPlayerId, this.targets, this.base), cb.apply(this.base, sb), sb.fov = nb(Wb, this.fX)
      }
      continueFrom(bb) {
        bb instanceof Gb && (0, Wb.h)(bb.base, this.base)
      }
      reset(bb) {
        ib(this.base, bb)
      }
    }
    class Kb {
      constructor(bb, cb, sb, kb) {
        this.settings = bb, this.fX = cb, this.targets = sb, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.BQ = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = Eb(kb), this.goal = [...kb.position]
      }
      update(bb, cb, sb) {
        var kb, Wb, ab;
        const Tb = this.settings,
          Ub = null !== (kb = Tb.target) && void 0 !== kb ? kb : this.fX.localPlayerId,
          Hb = this.targets.feetPosition(Ub);
        let fb = !1;
        Hb && (fb = this.foundFeet && Lb(this.lastFeet, Hb) > 32 + .1 * bb, (0, Ib.k)(Hb, this.lastFeet), this.foundFeet = !0, this.placeGoal(Hb, Ub));
        const Mb = null !== (Wb = Tb.smoothMs) && void 0 !== Wb ? Wb : 0;
        !this.started || Mb < 1 || fb ? ((0, Ib.k)(this.goal, this.smoothed), this.BQ.fill(0), this.started = !0) : mb(this.smoothed, this.BQ, this.goal, Mb, bb), fb && (this.distance = -1), (0, Ib.k)(this.smoothed, sb.position);
        const Xb = !0 === Tb.avoidTerrain ? this.pullIn(Ub, bb, sb) : 1;
        let lb = this.goal;
        if ("target" === Tb.offsetSpace) lb = sb.position;
        else if (Xb < 1) {
          lb = this.aimOrigin;
          for (let bb = 0; bb < 3; bb++) lb[bb] = sb.position[bb] + (this.goal[bb] - this.smoothed[bb]) * Xb
        }
        Ob(lb, Tb.lookDirection, null !== (ab = Tb.lookAt) && void 0 !== ab ? ab : Ub, this.targets, this.base), cb.apply(this.base, sb), sb.fov = nb(Tb, this.fX)
      }
      continueFrom(bb) {
        bb instanceof Kb && (0, kb.r)(bb.settings.target, this.settings.target) && ((0, Wb.h)(bb.base, this.base), (0, Ib.k)(bb.goal, this.goal), (0, Ib.k)(bb.lastFeet, this.lastFeet), this.foundFeet = bb.foundFeet, (0, Ib.k)(bb.smoothed, this.smoothed), (0, Ib.k)(bb.BQ, this.BQ), this.started = bb.started, !0 === bb.settings.avoidTerrain && (this.distance = bb.distance))
      }
      reset(bb) {
        ib(this.base, bb), this.BQ.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(bb, cb, sb) {
        const kb = this.targets.aimPoint(bb);
        if (!kb) return 1;
        const Wb = sb.position,
          ab = Lb(kb, Wb);
        if (!(ab > 0)) return 1;
        const Tb = this.toCamera;
        for (let Ib = 0; Ib < 3; Ib++) Tb[Ib] = (Wb[Ib] - kb[Ib]) / ab;
        const Ub = function(bb, cb, sb) {
          return bb < 0 || cb < bb ? cb : cb + (bb - cb) * Math.exp(-sb / 150)
        }(this.distance, function(bb, cb, sb, kb) {
          const Wb = bb.raycastTerrain(cb, sb, kb);
          return null !== Wb && Number.isFinite(Wb) ? Math.min(kb, Math.max(0, Wb - .2)) : kb
        }(this.fX, kb, Tb, ab), cb);
        if (ab - Ub < .001) return this.distance = -1, 1;
        this.distance = Ub;
        for (let Ib = 0; Ib < 3; Ib++) Wb[Ib] = kb[Ib] + Tb[Ib] * Ub;
        return Ub / ab
      }
      placeGoal(bb, cb) {
        const sb = this.settings.offset;
        let kb = sb[0],
          Wb = sb[2];
        if ("target" === this.settings.offsetSpace) {
          const bb = this.targets.heading(cb),
            ab = Math.cos(bb),
            Tb = Math.sin(bb);
          kb = sb[0] * ab + sb[2] * Tb, Wb = -sb[0] * Tb + sb[2] * ab
        }
        this.goal[0] = bb[0] + kb, this.goal[1] = bb[1] + sb[1], this.goal[2] = bb[2] + Wb
      }
    }
    class Zb {
      constructor(bb, cb, sb, kb) {
        var Wb, ab;
        this.settings = bb, this.fX = cb, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = bb.keyframes.length > 0 ? new Pb(bb.keyframes, null === (Wb = bb.smooth) || void 0 === Wb || Wb, null !== (ab = bb.loop) && void 0 !== ab && ab) : null, this.base = (0, Ib.h)(kb, (0, Ib.o)()), this.resolveTarget = bb => sb.aimPoint(bb)
      }
      update(bb, cb, sb) {
        this.elapsedMs += bb;
        const kb = nb(this.settings, this.fX);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, kb, this.base) : this.base.fov = kb, (0, Ib.k)(this.base.position, sb.position), sb.fov = this.base.fov, cb.apply(this.base, sb)
      }
      continueFrom(bb) {
        bb instanceof Zb && (0, kb.r)(bb.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = bb.elapsedMs, (0, Ib.h)(bb.base, this.base))
      }
      reset(bb) {
        ib(this.base, bb), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function zb(bb, cb) {
      return (0, kb.u)(bb, cb)
    }
    class qb {
      constructor(bb, cb, sb) {
        var kb;
        this.settings = bb, this.fX = cb, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Wb = null !== sb && sb.settings.mode === bb.mode,
          ab = Wb ? sb.pose : cb.getDefaultPose();
        this.pose = (0, Ib.h)(ab, (0, Ib.o)()), this.lastGoodPose = (0, Ib.h)(Wb ? sb.lastGoodPose : ab, (0, Ib.o)()), this.look = new Qb(bb.playerLook), this.targets = null !== (kb = null === sb || void 0 === sb ? void 0 : sb.targets) && void 0 !== kb ? kb : new Db(cb);
        const Tb = (0, Ib.h)(ab, (0, Ib.o)());
        Wb && sb.look.unapply(Tb, Tb), this.mode = function(bb, cb, sb, kb) {
          switch (bb.mode) {
            case "fixed":
              return new Gb(bb, cb, sb, kb);
            case "follow":
              return new Kb(bb, cb, sb, kb);
            case "path":
              return new Zb(bb, cb, sb, kb);
            case "frame":
              return new lb(bb, cb, sb, kb)
          }
        }(bb, cb, this.targets, Tb), Wb && (this.look.continueFrom(sb.look), this.mode.continueFrom(sb.mode))
      }
      update(bb, cb) {
        return this.look.update(bb, cb), this.mode.update(bb, this.look, this.pose), (0, Ib.p)(this.pose) ? (0, Ib.h)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, Ib.h)(this.lastGoodPose, this.pose), this.mode.reset((0, Ib.p)(this.lastGoodPose) ? this.lastGoodPose : this.fX.getDefaultPose())), this.pose
      }
    }

    function db(bb) {
      return [0, 0, bb[2], bb[3]]
    }
    class Ab {
      constructor(bb) {
        this.fX = bb, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new Ub, this.shot = null, this.blend = null, this.mixed = (0, Ib.o)(), this.output = (0, Ib.o)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(bb) {
        const cb = (0, Hb.b)(bb);
        if ((0, kb.r)(cb, this.pending ? this.pending.settings : this.settings)) return;
        const sb = zb(this.settings, cb);
        if (void 0 !== cb.transition && !sb) return this.pending = {
          settings: cb,
          shot: "default" === cb.mode ? null : new qb(cb, this.fX, null)
        }, void this.fade.fadeOut(cb.transition);
        const Wb = null !== this.pending;
        this.pending = null, !Wb && sb || this.fade.fadeIn(kb.k.minTransitionFadeMs), this.show(cb, !1)
      }
      show(bb, cb) {
        var sb, Wb;
        if ((0, kb.r)(bb, this.settings)) return;
        const Tb = !cb && zb(this.settings, bb);
        this.settings = bb;
        const Ub = null !== this.blend && this.blend.elapsedMs > 0,
          Hb = (0, Ib.h)(this.hasOutput ? this.output : this.fX.getDefaultPose(), (0, Ib.o)());
        if (this.shot = "default" === bb.mode ? null : new qb(bb, this.fX, cb ? null : this.shot), Tb) return;
        const fb = cb || !this.shot && !this.hasOutput ? 0 : null !== (sb = bb.blendInMs) && void 0 !== sb ? sb : 0;
        if (fb <= 0) return void(this.blend = null);
        const Mb = (0, ab.p)(null !== (Wb = bb.blendEasing) && void 0 !== Wb ? Wb : "easeInOut");
        this.blend = {
          from: Hb,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: fb,
          easing: Ub ? db(Mb) : Mb
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
      update(bb, cb) {
        const sb = Number.isFinite(bb) && bb > 0 ? bb : 0;
        if (this.fade.advance(sb) && null !== this.pending) {
          const {
            settings: bb
          } = this.pending;
          this.pending = null, this.show(bb, !0)
        }
        this.loadingPositions.length = 0;
        const kb = this.pending;
        if (null !== kb && void 0 !== kb && kb.shot) {
          const bb = "path" === kb.settings.mode ? 0 : sb;
          this.noteLoadingPosition(kb.shot.update(bb, Ib.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Tb = this.shot ? this.shot.update(sb, cb) : this.fX.getDefaultPose();
        this.shot && this.noteLoadingPosition(Tb.position);
        const Ub = this.blend;
        if (!Ub) return this.writeOutput(Tb);
        Ub.elapsedMs += sb;
        const Hb = Math.min(1, Ub.elapsedMs / Ub.durationMs);
        if (Ub.headingDelta = Number.isFinite(Ub.headingDelta) ? (0, Wb.v)(Ub.headingDelta, Tb.heading - Ub.from.heading) : (0, Wb.t)(Ub.from.heading, Tb.heading), (0, Ib.u)(Ub.from, Tb, Ub.headingDelta, (0, ab.n)(Hb, Ub.easing), this.mixed), Hb >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else Ub.fromScripted && this.noteLoadingPosition(Ub.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(bb) {
        if (bb.every(Number.isFinite)) {
          const cb = this.loadingPositions;
          cb.push((0, Ib.k)(bb, this.loadingSlots[cb.length]))
        }
      }
      writeOutput(bb) {
        const cb = this.output;
        (0, Ib.p)(bb) ? (0, Ib.h)(bb, cb) : this.hasOutput || (0, Ib.h)(this.fX.getDefaultPose(), cb), cb.pitch = (0, Wb.f)(cb.pitch);
        const sb = this.fX.getDefaultFov(),
          ab = Number.isFinite(sb) && sb > 0 && sb < 180,
          Tb = ab ? Math.min(kb.k.minFov, sb) : kb.k.minFov,
          Ub = ab ? Math.max(kb.k.maxFov, sb) : kb.k.maxFov;
        return cb.fov = Number.isFinite(cb.fov) ? Math.min(Ub, Math.max(Tb, cb.fov)) : Ub, this.hasOutput = !0, cb
      }
    }
  },
  38735: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb,
      h: () => Ub,
      k: () => Tb,
      o: () => ab,
      p: () => Hb,
      r: () => Ib,
      u: () => fb
    });
    var kb = sb(38744);
    const Wb = {
      Eu: 0,
      bY: 0
    };

    function ab() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Tb(bb, cb) {
      return cb[0] = bb[0], cb[1] = bb[1], cb[2] = bb[2], cb
    }

    function Ub(bb, cb) {
      return Tb(bb.position, cb.position), cb.heading = bb.heading, cb.pitch = bb.pitch, cb.fov = bb.fov, cb
    }

    function Ib(bb, cb) {
      return Array.isArray(bb) && bb.length === cb && bb.every(Number.isFinite)
    }

    function Hb(bb) {
      return Ib(bb.position, 3) && Number.isFinite(bb.heading) && Number.isFinite(bb.pitch) && Number.isFinite(bb.fov)
    }

    function fb(bb, cb, sb, Wb, ab) {
      for (let kb = 0; kb < 3; kb++) ab.position[kb] = bb.position[kb] + (cb.position[kb] - bb.position[kb]) * Wb;
      return ab.heading = (0, kb.q)(bb.heading + sb * Wb), ab.pitch = bb.pitch + (cb.pitch - bb.pitch) * Wb, ab.fov = bb.fov + (cb.fov - bb.fov) * Wb, ab
    }
  },
  38769: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Yb,
      d: () => Xb
    });
    var kb = sb(38760),
      Wb = sb(38735);
    const ab = kb.g,
      Tb = kb.n;

    function Ub(bb, cb, sb, kb) {
      return Number.isFinite(bb) ? Math.min(sb, Math.max(cb, bb)) : kb
    }

    function Ib(bb, cb, sb) {
      return void 0 !== bb && Number.isFinite(bb) ? Math.min(sb, Math.max(cb, bb)) : void 0
    }

    function Hb(bb) {
      const cb = kb.k.maxCoordinate;
      return [Math.min(cb, Math.max(-cb, bb[0])), Math.min(cb, Math.max(-cb, bb[1])), Math.min(cb, Math.max(-cb, bb[2]))]
    }

    function fb(bb) {
      return "string" === typeof bb ? bb : (0, Wb.r)(bb, 3) ? Hb(bb) : void 0
    }
    const Mb = new RegExp(kb.q);

    function Xb(bb) {
      return "string" === typeof bb && Mb.test(bb)
    }

    function nb(bb) {
      const cb = [];
      if (!Array.isArray(bb)) return cb;
      for (const sb of bb.slice(0, kb.k.maxFrameTargets)) {
        const bb = fb(sb);
        void 0 === bb || "string" === typeof bb && !Xb(bb) || cb.push(bb)
      }
      return cb
    }

    function mb(bb) {
      if (!(0, Wb.r)(bb, 3)) return;
      const cb = Math.max(Math.abs(bb[0]), Math.abs(bb[1]), Math.abs(bb[2])),
        sb = Math.hypot(bb[0] / cb, bb[1] / cb, bb[2] / cb);
      return 0 === cb || cb * sb < kb.k.minDirectionLength ? void 0 : [bb[0] / cb / sb, bb[1] / cb / sb, bb[2] / cb / sb]
    }

    function lb(bb) {
      if (void 0 !== bb) return "string" === typeof bb ? ab.includes(bb) ? bb : void 0 : (0, Wb.r)(bb, 4) ? [Ub(bb[0], 0, 1, 0), Ub(bb[1], kb.k.minEasingY, kb.k.maxEasingY, 0), Ub(bb[2], 0, 1, 1), Ub(bb[3], kb.k.minEasingY, kb.k.maxEasingY, 1)] : "linear"
    }

    function Qb(bb) {
      if (bb) return {
        maxYaw: Ub(bb.maxYaw, 0, kb.k.maxPlayerLook, 0),
        maxPitch: Ub(bb.maxPitch, 0, kb.k.maxPlayerLook, 0),
        returnMs: Ib(bb.returnMs, 0, kb.k.maxReturnMs)
      }
    }
    const eb = new RegExp(kb.b);

    function Cb(bb) {
      var cb;
      if ("object" !== typeof bb || null === bb) return;
      const sb = kb.k.maxTransitionMs,
        Wb = kb.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof bb.colour && eb.test(bb.colour) ? bb.colour : kb.e,
        outMs: Ub(bb.outMs, Wb, sb, Wb),
        holdMs: Ub(null !== (cb = bb.holdMs) && void 0 !== cb ? cb : 0, 0, sb, 0),
        inMs: Ub(bb.inMs, Wb, sb, Wb)
      }
    }

    function Nb(bb) {
      return !0 === bb || void 0
    }

    function Vb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const cb = bb.lookAt;
      return Number.isFinite(bb.timeMs) && (0, Wb.r)(bb.position, 3) && (void 0 === cb || "string" === typeof cb || (0, Wb.r)(cb, 3))
    }

    function Lb(bb) {
      return {
        ...bb,
        timeMs: Ub(bb.timeMs, 0, kb.k.maxPathMs, 0),
        position: Hb(bb.position),
        lookAt: fb(bb.lookAt),
        lookDirection: mb(bb.lookDirection),
        fov: Ib(bb.fov, kb.k.minFov, kb.k.maxFov),
        easing: lb(bb.easing)
      }
    }

    function ub(bb) {
      const cb = [];
      if (!Array.isArray(bb)) return cb;
      for (const sb of bb.slice(0, kb.k.maxKeyframes)) {
        if (!Vb(sb)) continue;
        const bb = Lb(sb);
        (0 === cb.length || bb.timeMs > cb[cb.length - 1].timeMs) && cb.push(bb)
      }
      return cb
    }

    function Yb(bb) {
      if ("object" !== typeof bb || null === bb) return {
        mode: "default"
      };
      const cb = {
          blendInMs: Ib(bb.blendInMs, 0, kb.k.maxBlendInMs),
          blendEasing: lb(bb.blendEasing),
          transition: Cb(bb.transition),
          letterbox: Nb(bb.letterbox),
          hideHud: Nb(bb.hideHud)
        },
        sb = {
          mode: "default",
          ...cb
        };
      if ("default" === bb.mode || "fixed" === bb.mode && !(0, Wb.r)(bb.position, 3)) return sb;
      const ab = {
        ...cb,
        fov: Ib(bb.fov, kb.k.minFov, kb.k.maxFov),
        playerFacing: (Mb = bb.playerFacing, Tb.includes(Mb) ? Mb : void 0),
        playerLook: Qb(bb.playerLook)
      };
      var Mb, Xb;
      switch (bb.mode) {
        case "fixed":
          return {
            ...bb, ...ab, position: Hb(bb.position), lookAt: fb(bb.lookAt), lookDirection: mb(bb.lookDirection)
          };
        case "follow":
          return {
            ...bb, ...ab, target: "string" === typeof bb.target ? bb.target : void 0, lookAt: fb(bb.lookAt), offset: (Xb = bb.offset, Array.isArray(Xb) ? [Ub(Xb[0], -kb.k.maxOffset, kb.k.maxOffset, 0), Ub(Xb[1], -kb.k.maxOffset, kb.k.maxOffset, 0), Ub(Xb[2], -kb.k.maxOffset, kb.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: mb(bb.lookDirection), smoothMs: Ib(bb.smoothMs, 0, kb.k.maxSmoothMs)
          };
        case "path":
          return {
            ...bb, ...ab, keyframes: ub(bb.keyframes)
          };
        case "frame":
          return {
            ...bb, ...ab, targets: nb(bb.targets), viewHeading: Ib(bb.viewHeading, -kb.k.maxFrameHeading, kb.k.maxFrameHeading), viewElevation: Ib(bb.viewElevation, 0, kb.k.maxFrameElevation), padding: Ib(bb.padding, 0, kb.k.maxFrameDistance), closestDistance: Ib(bb.closestDistance, 0, kb.k.maxFrameDistance), furthestDistance: Ib(bb.furthestDistance, 0, kb.k.maxFrameDistance), smoothMs: Ib(bb.smoothMs, 0, kb.k.maxSmoothMs)
          };
        default:
          return sb
      }
    }
  },
  38263: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub
    });
    var kb = sb(1235);

    function Wb(bb) {
      const cb = /(\d*\.?\d+)px/.exec(bb);
      return cb ? Number(cb[1]) : null
    }

    function ab(bb) {
      return bb.split(/[\s,]+/).pop()
    }
    let Tb = !1;
    const Ub = {
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
      drawText: function(bb, cb, kb, Ub, Ib, Hb) {
        if (Ib <= 0 || Hb <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: fb,
          fontVariant: Mb,
          fontWeight: Xb,
          fontSize: nb,
          font: mb
        } = this, lb = [fb, Mb, Xb, `${nb}px`, mb].filter(Boolean).join(" "), Qb = [
          [Xb, `${nb}px`, ab(mb)].filter(Boolean).join(" "), `${nb}px sans-serif`
        ], eb = bb.font, Cb = function(bb, cb, sb) {
          for (const kb of cb) {
            bb.font = kb;
            const cb = Wb(bb.font),
              Tb = ab(kb);
            if (null !== cb && Math.abs(cb - sb) <= .5 && bb.font.toLowerCase().includes(Tb.toLowerCase())) return kb
          }
          return null
        }(bb, [lb, ...Qb], nb);
        Cb !== lb && function(bb, cb, kb) {
          Tb || (Tb = !0, Promise.resolve().then((() => sb(1058))).then((sb => {
            let {
              dl: Wb
            } = sb;
            Wb(new Error("A canvas didn't take canvasTxt's font"), {
              font: bb,
              vn: cb,
              drawnWith: null !== kb && void 0 !== kb ? kb : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(lb, eb, Cb);
        const Nb = Wb(bb.font);
        if (null === Cb && null !== Nb && Nb > 0) {
          const sb = nb / Nb;
          bb.save();
          try {
            return bb.scale(sb, sb), {
              height: this.drawLines(bb, cb, kb / sb, Ub / sb, Ib / sb, Hb / sb, Nb).height * sb
            }
          } finally {
            bb.restore()
          }
        }
        return this.drawLines(bb, cb, kb, Ub, Ib, Hb, nb)
      },
      drawLines: function(bb, cb, sb, Wb, ab, Tb, Ub) {
        const Ib = sb + ab,
          Hb = Wb + Tb;
        let fb, Mb = Wb + Tb / 2 + Ub / 2;
        "right" === this.align ? (fb = Ib, bb.textAlign = "right") : "left" === this.align ? (fb = sb, bb.textAlign = "left") : (fb = sb + ab / 2, bb.textAlign = "center");
        for (const kb of cb) {
          bb.measureText(kb).width >= ab && (cb = cb.replace(kb, ""))
        }
        cb = (0, kb.L)(cb);
        const Xb = [],
          nb = cb.split("\n"),
          mb = this.justify ? bb.measureText("\u200a").width : 0;
        nb.forEach((cb => {
          let sb = bb.measureText(cb).width;
          if (sb <= ab) Xb.push(cb);
          else {
            let kb = cb;
            const Wb = ab;
            let Tb, Ub, Ib;
            for (sb = bb.measureText(kb).width; sb > Wb;) {
              for (Tb = 0, Ub = 0, Ib = ""; Ub < Wb;) Tb++, Ib = kb.substr(0, Tb), Ub = bb.measureText(Ib).width;
              Tb--, Ib = Ib.substr(0, Tb);
              const cb = Tb;
              if (" " !== kb.substr(Tb, 1)) {
                for (;
                  " " !== kb.substr(Tb, 1) && 0 !== Tb;) Tb--;
                0 === Tb && (Tb = cb), Ib = kb.substr(0, Tb)
              }
              Ib = this.justify ? this.justifyLine(bb, Ib, mb, "\u200a", ab) : Ib, kb = kb.substr(Tb), sb = bb.measureText(kb).width, Xb.push(Ib)
            }
            sb > 0 && Xb.push(kb)
          }
        }));
        const lb = this.lineHeight ? this.lineHeight : this.getTextHeight(bb, cb),
          Qb = lb * (Xb.length - 1),
          eb = Qb / 2;
        let Cb = Wb;
        "top" === this.vAlign ? Mb = Wb + Ub : "bottom" === this.vAlign ? (Mb = Hb - Qb, Cb = Hb) : (Cb = Wb + Tb / 2, Mb -= eb), Xb.forEach((cb => {
          cb = cb.trim(), bb.fillText(cb, fb, Mb), Mb += lb
        })), this.debug && (bb.lineWidth = 3, bb.strokeStyle = "#00909e", bb.strokeRect(sb, Wb, ab, Tb), bb.lineWidth = 2, bb.strokeStyle = "#f6d743", bb.beginPath(), bb.moveTo(fb, Wb), bb.lineTo(fb, Hb), bb.stroke(), bb.strokeStyle = "#ff6363", bb.beginPath(), bb.moveTo(sb, Cb), bb.lineTo(Ib, Cb), bb.stroke());
        return {
          height: Qb + lb
        }
      },
      getTextHeight: function(bb, cb) {
        const sb = bb.textBaseline;
        bb.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: kb
        } = bb.measureText(cb);
        return bb.textBaseline = sb, kb
      },
      justifyLine: function(bb, cb, sb, kb, Wb) {
        const ab = cb.trim(),
          Tb = bb.measureText(ab).width,
          Ub = ab.split(/\s+/).length - 1,
          Ib = Math.floor((Wb - Tb) / sb);
        if (Ub <= 0 || Ib <= 0) return ab;
        const Hb = Math.floor(Ib / Ub);
        let fb = Ib - Ub * Hb,
          Mb = [];
        for (let Xb = 0; Xb < Hb; Xb++) Mb.push(kb);
        Mb = Mb.join("");
        return ab.replace(/\s+/g, (bb => {
          const cb = fb > 0 ? Mb + kb : Mb;
          return fb--, bb + cb
        }))
      }
    }
  },
  38691: (bb, cb, sb) => {
    function kb(bb, cb) {
      return cb.set(bb), cb
    }
    sb.d(cb, {
      c: () => kb
    })
  },
  38267: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => lb,
      g: () => mb,
      i: () => Xb,
      k: () => fb,
      o: () => Mb
    });
    var kb = sb(4023),
      Wb = sb(344);
    const ab = 1024,
      Tb = 1536,
      Ub = 2 * kb.k + 1,
      Ib = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Hb = 1.5;

    function fb(bb, cb, sb) {
      if ("string" !== typeof bb) return cb;
      try {
        const sb = JSON.parse(bb);
        return sb && "object" === typeof sb ? sb : cb
      } catch (kb) {
        return void 0 !== sb && console.error(`Couldn't parse ${sb}`, kb), cb
      }
    }

    function Mb(bb) {
      return fb(bb, null, "a leaderboard's rows")
    }

    function Xb(bb, cb) {
      var sb, kb;
      return null !== cb && void 0 !== cb ? cb : {
        status: null !== (sb = bb.status) && void 0 !== sb ? sb : "loading",
        entries: null !== (kb = bb.entries) && void 0 !== kb ? kb : []
      }
    }

    function nb(bb, cb) {
      return "number" === typeof bb && Number.isFinite(bb) && bb > 0 ? bb : cb
    }

    function mb(bb, cb) {
      const sb = nb(bb.size, 1);
      let kb = nb(bb.width, nb(2.5 * sb, 2.5)),
        Wb = nb(bb.height, nb(3.75 * sb, 3.75));
      Number.isFinite(ab * Wb / kb) && Number.isFinite(Tb * kb / Wb) || (kb = 2.5, Wb = 3.75);
      const Ub = Wb / kb,
        Ib = Math.max(1, Math.min(ab, cb / Ub));
      return {
        width: kb,
        height: Wb,
        layoutWidth: Math.max(ab, Tb / Ub),
        layoutHeight: Math.max(Tb, ab * Ub),
        pixelWidth: Math.round(Ib),
        pixelHeight: Math.round(Math.max(1, Math.min(cb, Ib * Ub)))
      }
    }

    function lb(bb, cb, sb, Tb, fb, Mb) {
      bb.setTransform(1, 0, 0, 1, 0, 0), bb.fillStyle = Wb.L.defaultNameTagBackground, bb.fillRect(0, 0, cb, sb), bb.scale(cb / Tb.layoutWidth, sb / Tb.layoutHeight), bb.translate((Tb.layoutWidth - ab) / 2, 0),
        function(bb, cb, sb, ab) {
          var Tb, fb, Mb, Xb;
          const {
            top: nb,
            around: mb,
            showPlayerText: lb,
            localPlayerDbId: Cb
          } = sb, {
            whiteUiText: Nb,
            grayUiText: Vb,
            yellowUiText: Lb
          } = Wb.L;
          bb.textBaseline = "middle";
          const ub = function(cb, sb, kb, Wb, ab, Tb) {
              let Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              bb.font = `bold ${Wb}px 'Jetbrains Mono', monospace`, bb.fillStyle = ab, bb.textAlign = Ub;
              let Ib = cb.replace(/[\r\n\t]/g, " ");
              if (bb.measureText(Ib).width > Tb) {
                for (; Ib.length > 0 && bb.measureText(`${Ib}\u2026`).width > Tb;) Ib = Ib.slice(0, -1);
                Ib += "\u2026"
              }
              bb.fillText(Ib, sb, kb)
            },
            Yb = cb => {
              bb.fillStyle = Nb, bb.globalAlpha = .15, bb.fillRect(24, cb, 976, 2), bb.globalAlpha = 1
            },
            hb = null === Cb ? null : (0, Wb.nc)(Cb),
            Jb = bb => null !== hb && bb.playerHash === hb,
            gb = Qb(nb.entries, kb.m),
            Bb = "ready" === nb.status && gb.length > 0,
            tb = null === mb ? [] : Qb(mb.entries, Ub),
            yb = gb.some(Jb),
            Pb = null === mb ? null : function(bb) {
              const cb = bb;
              if (!cb || !Number.isFinite(cb.rank) || !Number.isFinite(cb.tied) || !Number.isFinite(cb.total)) return null;
              return cb
            }(mb.standing),
            Db = tb.find(Jb),
            Eb = gb.find(Jb),
            ib = null === Pb || void 0 === Db ? null : {
              value: Db.value,
              rank: Pb.rank
            },
            Ob = eb(gb, void 0 === Eb || Eb.value === (null === ib || void 0 === ib ? void 0 : ib.value) ? ib : null),
            Gb = eb(tb, ib),
            Kb = (bb, cb) => {
              const sb = bb.findIndex(Jb);
              return sb >= 0 ? cb[sb] : null
            },
            Zb = null !== (Tb = null !== (fb = null === Pb || void 0 === Pb ? void 0 : Pb.rank) && void 0 !== fb ? fb : Kb(tb, Gb)) && void 0 !== Tb ? Tb : Kb(gb, Ob);
          bb.font = "bold 34px 'Jetbrains Mono', monospace";
          const zb = [...Bb ? Ob : [], ...yb ? [] : Gb],
            qb = Math.min(280, Math.max(0, ...zb.map((cb => bb.measureText(Ib.format(cb)).width)))),
            db = qb <= 80,
            Ab = db ? 80 : 32 + qb,
            wb = db ? 148 : Ab + 28,
            rb = 660 - wb;
          ub(`TOP ${kb.m}  /  ALL TIME`, 24, 52, 28, Vb, 976), ub(lb ? String(null !== (Mb = cb.title) && void 0 !== Mb ? Mb : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Nb, 976), ub("RANK", 32, 174, 28, Vb, wb - 40), ub("PLAYER", wb, 174, 28, Vb, rb), ub(lb ? String(null !== (Xb = cb.scoreLabel) && void 0 !== Xb ? Xb : "Score").slice(0, 24) : "Score", 992, 174, 28, Vb, 304, "right"), Yb(202);
          const ob = (ab - 232) / (kb.m + Hb + Ub),
            Sb = 208 + kb.m * ob,
            Rb = Sb + Hb * ob,
            vb = (cb, sb, kb, Wb) => {
              const ab = Jb(cb);
              bb.fillStyle = ab ? Lb : Nb, bb.globalAlpha = ab ? .15 : Wb ? .035 : 0, bb.fillRect(24, kb - ob / 2 + 1, 976, ob - 2), bb.globalAlpha = 1;
              const Tb = ab ? Lb : Nb;
              ub(Ib.format(sb), Ab, kb, 34, Tb, db ? 80 : qb, db ? "center" : "right"), ub(lb ? String(cb.name).slice(0, 64) : "Player", wb, kb, 34, Tb, rb);
              const Ub = Ib.format(cb.value);
              ub(bb.measureText(Ub).width > 304 ? cb.value.toExponential(6) : Ub, 992, kb, 34, Tb, 304, "right")
            };
          if (Bb)
            for (const [kb, Wb] of gb.entries()) vb(Wb, Ob[kb], 208 + (kb + .5) * ob, kb % 2 === 0);
          else {
            const bb = "error" === nb.status,
              cb = bb ? "Couldn't load leaderboard" : "ready" === nb.status ? "No scores yet" : "Loading leaderboard\u2026",
              sb = bb ? "Trying again shortly" : "ready" === nb.status ? "Be the first on the board!" : "Fetching the top players",
              kb = (208 + Sb) / 2;
            ub(cb, 512, kb - 28, 40, bb ? Wb.L.redUiText : Nb, 960, "center"), ub(sb, 512, kb + 27, 30, Vb, 960, "center")
          }
          const Fb = Sb + Hb * ob / 2;
          if (null === Zb) Yb(Fb);
          else {
            const cb = null === Pb ? 0 : Pb.tied - 1,
              sb = `YOUR RANK #${Ib.format(Zb)}${null===Pb?"":` of ${Ib.format(Pb.total)}`}`;
            bb.font = "bold 36px 'Jetbrains Mono', monospace";
            const kb = Math.max(20, Math.min(36, Math.floor(34560 / bb.measureText(sb).width)));
            ub(sb, 512, Fb - (cb > 0 ? 15 : 0), kb, Lb, 960, "center"), cb > 0 && ub(`Tied with ${Ib.format(cb)} other${1===cb?"":"s"}`, 512, Fb + 24, 24, Vb, 960, "center")
          }
          if (null === mb) return;
          const xb = Rb + Ub * ob / 2;
          if (yb) ub(`You're in the top ${kb.m}!`, 512, xb, 40, Lb, 960, "center");
          else if (0 === tb.length) ub("You're not on this board yet", 512, xb, 34, Vb, 960, "center");
          else
            for (const [kb, Wb] of tb.entries()) vb(Wb, Gb[kb], Rb + (kb + .5) * ob, kb % 2 === 0)
        }(bb, fb, Mb, Tb.layoutHeight)
    }

    function Qb(bb, cb) {
      return Array.isArray(bb) ? bb.slice(0, cb).filter((bb => bb && Number.isFinite(bb.rank) && Number.isFinite(bb.value))) : []
    }

    function eb(bb, cb) {
      const sb = [];
      let kb = !1;
      return bb.forEach(((Wb, ab) => {
        if (null !== cb && Wb.value === cb.value) return void sb.push(cb.rank);
        const Tb = ab > 0 && Wb.value === bb[ab - 1].value;
        Tb || (kb = 0 === ab && 1 !== Wb.rank), sb.push(Tb && !kb ? sb[ab - 1] : Wb.rank)
      })), sb
    }
  },
  38451: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      g: () => ab
    });
    const kb = 32;

    function Wb(bb) {
      return Array.from(bb).length
    }

    function ab(bb) {
      const cb = [""];
      let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Wb = "";
      const ab = () => {
        cb.push(""), sb = 0, Wb = ""
      };
      for (const Tb of bb.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Tb)) ab();
        else if (/^\s+$/.test(Tb)) Wb += Tb;
      else if (Tb.length > 0) {
        const bb = Array.from(Tb);
        sb > 0 && sb + Wb.length + bb.length > kb && ab(), cb[cb.length - 1] += Wb, sb += Wb.length, Wb = "";
        for (const Wb of bb) sb >= kb && ab(), cb[cb.length - 1] += Wb, sb++
      }
      return cb[cb.length - 1] += Wb, cb
    }
  },
  38684: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb
    });
    var kb = sb(36266),
      Wb = sb.n(kb);
    const ab = [1, 1, 1];

    function Tb(bb) {
      if (!bb) return [...ab];
      try {
        const [cb, sb, kb] = Wb()(bb).rgb().array();
        return [cb / 255, sb / 255, kb / 255]
      } catch (cb) {
        return console.warn(`Invalid groundArrowPath colour "${bb}":`, cb), [...ab]
      }
    }
  },
  33936: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab,
      f: () => Ub,
      j: () => Tb,
      n: () => Wb,
      o: () => kb
    });
    const kb = {
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
      Wb = "/textures/dayNight/sun.png",
      ab = "/textures/dayNight/moon.png",
      Tb = "/textures/dayNight/stars",
      Ub = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38760: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => fb,
      e: () => Mb,
      g: () => kb,
      k: () => Ib,
      n: () => Wb,
      q: () => Hb,
      r: () => Ub,
      u: () => Tb
    });
    const kb = ["linear", "easeIn", "easeOut", "easeInOut"],
      Wb = ["movement", "camera", "cursor"],
      ab = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Tb(bb, cb) {
      return Ub(bb, cb, ab)
    }

    function Ub(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (bb === cb || Number.isNaN(bb) && Number.isNaN(cb)) return !0;
      if ("object" !== typeof bb || "object" !== typeof cb || null === bb || null === cb || Array.isArray(bb) !== Array.isArray(cb)) return !1;
      const kb = bb,
        Wb = cb;
      for (const ab of new Set([...Object.keys(kb), ...Object.keys(Wb)]))
        if (!sb.includes(ab) && !Ub(kb[ab], Wb[ab])) return !1;
      return !0
    }
    const Ib = {
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
      Hb = "^-[1-9][0-9]*$",
      fb = "^#[0-9a-fA-F]{6}$",
      Mb = "#000000"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);