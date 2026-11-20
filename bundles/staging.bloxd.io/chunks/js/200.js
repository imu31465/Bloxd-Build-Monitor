export const id = 200;
export const ids = [200];
export const modules = {
  38417: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      constructor(bb, ab) {
        this.read = bb, this.apply = ab, this.release = null
      }
      turn(bb, ab) {
        const Ub = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: ab,
          forcedCameraDirection: [bb[0], bb[1], bb[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), ab + 100),
          transitionMs: Ub
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
  37955: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      h: () => Mb
    });
    const Ab = new Map;

    function Mb(bb, ab) {
      Ab.set(bb, ab)
    }

    function Tb(bb) {
      return bb ? Ab.get(bb) : void 0
    }
  },
  38838: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb
    });
    var Ab = Ub(37547);

    function Mb(bb, ab, Ub) {
      var Mb, Tb, Eb, Yb, Bb, eb, vb;
      const Lb = (0, Ab.b)(bb, ab, Ub[0], Ub[1], Ub[2]),
        Pb = Lb ? null !== (Mb = Lb.textCell) && void 0 !== Mb ? Mb : Lb.rect.anchor : Ub,
        Xb = ab(Pb[0], Pb[1], Pb[2]);
      return {
        pos: [Ub[0], Ub[1], Ub[2]],
        noticeboardSpan: Lb && {
          width: Lb.rect.width,
          height: Lb.rect.height
        },
        text: null !== (Tb = null === Xb || void 0 === Xb || null === (Eb = Xb.persisted) || void 0 === Eb || null === (Yb = Eb.shared) || void 0 === Yb ? void 0 : Yb.text) && void 0 !== Tb ? Tb : "",
        textSize: null !== (Bb = null === Xb || void 0 === Xb || null === (eb = Xb.persisted) || void 0 === eb || null === (vb = eb.shared) || void 0 === vb ? void 0 : vb.textSize) && void 0 !== Bb ? Bb : null
      }
    }
  },
  37837: (bb, ab, Ub) => {
    function Ab(bb) {
      switch (bb.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    Ub.d(ab, {
      c: () => Mb,
      f: () => Tb,
      i: () => Ab
    });
    const Mb = 4,
      Tb = 3
  },
  38439: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      f: () => Tb
    });
    var Ab = Ub(325);
    const Mb = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class Tb {
      constructor(bb) {
        this.importGame = bb, this.loads = new Map, this.loaded = new Map
      }
      load(bb) {
        const ab = (0, Ab.Gb)(bb);
        if (!Mb.has(ab)) return Promise.resolve(void 0);
        let Ub = this.loads.get(ab);
        return Ub || (Ub = this.importGame(ab).then((bb => {
          const Ub = bb.default;
          if ("function" !== typeof Ub) throw new Error(`${ab}'s client code has no default-exported factory`);
          return this.loaded.set(ab, Ub), Ub
        })).catch((bb => {
          throw this.loads.delete(ab), bb
        })), this.loads.set(ab, Ub)), Ub
      }
      loadedFactory(bb) {
        const ab = (0, Ab.Gb)(bb);
        if (!Mb.has(ab)) return;
        const Ub = this.loaded.get(ab);
        if (!Ub) throw new Error(`${ab}'s client code started before it loaded`);
        return Ub
      }
    }
  },
  38845: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(9094),
      Mb = Ub(8922),
      Tb = Ub(2989);

    function Eb(bb) {
      if (bb === Ab.c) return 0;
      const ab = (0, Tb.d)(bb);
      if (void 0 !== ab && ab <= Mb.MAX_BLOCK_ID) return ab;
      const Ub = (0, Tb.d)(bb.split("|")[0]);
      if (void 0 !== Ub && Ub <= Mb.MAX_BLOCK_ID && (0, Mb.rootMetaDescOf)(Ub) === bb) return Ub;
      throw new Error(`Invalid block name. You sent ${bb}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38487: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    var Ab = Ub(19);
    class Mb {
      constructor(bb) {
        this.screen = bb, this.hidesHud = !1
      }
      show(bb, ab) {
        this.screen.setFade(bb.colour, bb.alpha), this.screen.setLetterbox(!0 === ab.letterbox, bb.alpha < 1), this.setHudHidden(!0 === ab.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(bb) {
        this.hidesHud !== bb && (this.hidesHud = bb, Ab.c.set({
          isUiHiddenByCamera: bb
        }))
      }
    }
  },
  38456: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      g: () => Pb,
      h: () => Lb,
      k: () => Eb,
      l: () => jb,
      m: () => Bb,
      q: () => Rb,
      t: () => eb,
      x: () => Yb,
      z: () => vb
    });
    const Ab = Math.PI / 2 - .001,
      Mb = 2 * Math.PI,
      Tb = 1e-9;

    function Eb(bb, ab) {
      ab.heading = bb.heading, ab.pitch = bb.pitch
    }

    function Yb(bb, ab) {
      const Ub = ab - bb;
      return Ub - Mb * Math.floor((Ub + Math.PI) / Mb)
    }

    function Bb(bb, ab, Ub) {
      return bb + Yb(bb, ab) * Ub
    }

    function eb(bb) {
      if (!Number.isFinite(bb)) return bb;
      const ab = bb - Mb * Math.floor(bb / Mb);
      return ab < Mb ? ab : 0
    }

    function vb(bb, ab) {
      return bb + Yb(bb, ab)
    }

    function Lb(bb) {
      return Math.max(-Ab, Math.min(Ab, bb))
    }

    function Pb(bb, ab, Ub) {
      const Ab = Math.cos(ab);
      return Ub[0] = Ab * Math.sin(bb), Ub[1] = -Math.sin(ab), Ub[2] = Ab * Math.cos(bb), Ub
    }

    function Xb(bb, ab, Ub, Ab) {
      const Mb = Math.sqrt(bb * bb + Ub * Ub);
      return Mb < Tb && Math.abs(ab) < Tb || (Mb >= Tb && (Ab.heading = Math.atan2(bb, Ub)), Ab.pitch = Lb(Math.atan2(-ab, Mb) + 0)), Ab
    }

    function jb(bb, ab) {
      return Xb(bb[0], bb[1], bb[2], ab)
    }

    function Rb(bb, ab, Ub) {
      return Xb(ab[0] - bb[0], ab[1] - bb[1], ab[2] - bb[2], Ub)
    }
  },
  38481: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb,
      g: () => Mb
    });
    var Ab = Ub(38456);

    function Mb(bb) {
      var ab;
      const Ub = "default" === bb.mode ? "movement" : null !== (ab = bb.playerFacing) && void 0 !== ab ? ab : "movement";
      return "cursor" === Ub ? {
        facing: Ub,
        mouseTurns: null
      } : {
        facing: Ub,
        mouseTurns: "default" !== bb.mode && void 0 !== bb.playerLook ? "look" : "view"
      }
    }

    function Tb(bb, ab, Ub, Mb, Tb, Eb) {
      return Eb.XN = 0, Eb.kN = 0, Eb.pointedAt = void 0, void 0 !== Mb ? Tb ? (Eb.pointedAt = Mb, bb) : (0, Ab.t)(Mb.heading) : Tb ? (Eb.XN = ab, Eb.kN = Ub, bb) : (0, Ab.t)(bb + ab)
    }
  },
  38467: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => tb
    });
    var Ab = Ub(38471),
      Mb = Ub(38456),
      Tb = Ub(36327);

    function Eb(bb, ab, Ub, Ab) {
      if (!(Ab > 0)) return ab;
      const Mb = ab > bb ? Math.min(ab, bb + Ub / Ab) : Math.max(ab, bb - Ub / Ab);
      return Math.abs(ab - Mb) < 1e-9 ? ab : Mb
    }
    class Yb {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Ab.f,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(bb) {
        !this.isGoingOut() && this.sinceTurnMs < Ab.j.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: bb
        } : (this.waiting = null, this.startOut(bb))
      }
      fadeIn(bb) {
        this.isGoingOut() ? this.sinceTurnMs < Ab.j.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: bb
        } : (this.waiting = null, this.startIn(bb)) : this.waiting = null
      }
      advance(bb) {
        const ab = this.waiting;
        if (null === ab) return this.step(bb);
        const Ub = Ab.j.minFadeTurnMs - this.sinceTurnMs;
        if (Ub > bb) return this.step(bb);
        const Mb = this.step(Ub);
        return this.waiting = null, "out" === ab.turn ? this.startOut(ab.transition) : this.startIn(ab.minMs), this.step(bb - Ub) || Mb
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(bb) {
        ("in" === this.phase || null === this.phase && this.clearMs < Ab.j.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = bb.colour), this.outMs = bb.outMs, this.holdMs = bb.holdMs, this.inMs = bb.inMs
      }
      startIn(bb) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(bb, this.inMs)
      }
      step(bb) {
        const ab = this.screen;
        this.sinceTurnMs += bb, null === this.phase && (this.clearMs += bb);
        let Ub = !1,
          Mb = bb;
        if ("out" === this.phase) {
          const Ab = (1 - ab.alpha) * this.outMs;
          if (ab.alpha = Eb(ab.alpha, 1, bb, this.outMs), ab.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, Mb = Math.max(0, bb - Ab), Ub = !0
        }
        let Tb = bb;
        if ("hold" === this.phase) {
          this.heldMs += Mb;
          const bb = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Ab.j.minFadeTurnMs);
          if (bb < 0 || Ub) return Ub;
          this.phase = "in", this.sinceTurnMs = bb, Tb = bb
        }
        return "in" === this.phase && (ab.alpha = Eb(ab.alpha, 0, Tb, this.inMs), ab.alpha <= 0 && (this.phase = null, this.clearMs = 0)), Ub
      }
    }
    var Bb = Ub(38454),
      eb = Ub(38475),
      vb = Ub(1786),
      Lb = Ub(35995);

    function Pb(bb, ab) {
      for (let Ub = 0; Ub < ab.length; Ub++) ab[Ub] = bb[Ub]
    }

    function Xb(bb, ab) {
      var Ub;
      return null !== (Ub = bb.fov) && void 0 !== Ub ? Ub : ab.getDefaultFov()
    }

    function jb(bb, ab, Ub, Ab, Mb) {
      const Tb = 2 / Ab,
        Eb = Math.exp(-Tb * Mb);
      for (let Yb = 0; Yb < bb.length; Yb++) {
        const Ab = bb[Yb] - Ub[Yb],
          Bb = (ab[Yb] + Tb * Ab) * Mb;
        bb[Yb] = Ub[Yb] + (Ab + Bb) * Eb, ab[Yb] = (ab[Yb] - Tb * Bb) * Eb
      }
    }
    class Rb {
      constructor(bb, ab, Ub, Ab) {
        var Tb, Eb, Yb, Bb, eb;
        this.settings = bb, this.lL = ab, this.targets = Ub, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.QR = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Mb.t)((0, vb.i)(null !== (Tb = bb.viewHeading) && void 0 !== Tb ? Tb : 0)),
          pitch: (0, Mb.h)((0, vb.i)(null !== (Eb = bb.viewElevation) && void 0 !== Eb ? Eb : 45))
        }, this.closestDistance = null !== (Yb = bb.closestDistance) && void 0 !== Yb ? Yb : Math.min(6, null !== (Bb = bb.furthestDistance) && void 0 !== Bb ? Bb : 1 / 0), this.furthestDistance = null !== (eb = bb.furthestDistance) && void 0 !== eb ? eb : Math.max(64, this.closestDistance);
        const Lb = (0, Mb.g)(this.base.heading, this.base.pitch, this.forward),
          Pb = Ab.position,
          Xb = this.closestDistance;
        this.goal = [Pb[0] + Lb[0] * Xb, Pb[1] + Lb[1] * Xb, Pb[2] + Lb[2] * Xb, Xb, this.base.heading, this.base.pitch]
      }
      update(bb, ab, Ub) {
        var Ab, Tb;
        this.placeGoal(null !== (Ab = this.settings.fov) && void 0 !== Ab ? Ab : this.lL.getBaseFov()), this.goal[4] = (0, Mb.z)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Eb = null !== (Tb = this.settings.smoothMs) && void 0 !== Tb ? Tb : 400;
        !this.started || Eb < 1 ? (Pb(this.goal, this.smoothed), this.QR.fill(0), this.started = !0) : jb(this.smoothed, this.QR, this.goal, Eb, bb), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Mb.h)(this.smoothed[5]), ab.apply(this.angles, Ub);
        const Yb = (0, Mb.g)(Ub.heading, Ub.pitch, this.forward);
        for (let Mb = 0; Mb < 3; Mb++) Ub.position[Mb] = this.smoothed[Mb] - Yb[Mb] * this.smoothed[3];
        Ub.fov = Xb(this.settings, this.lL)
      }
      continueFrom(bb) {
        bb instanceof Rb && (Pb(bb.goal, this.goal), Pb(bb.smoothed, this.smoothed), Pb(bb.QR, this.QR), this.framedTargets = bb.framedTargets, this.started = bb.started)
      }
      reset() {
        this.QR.fill(0), this.started = !1
      }
      placeGoal(bb) {
        var ab;
        let Ub = 0;
        for (const vb of this.settings.targets) {
          const bb = this.targets.currentAimPoint(vb);
          bb && (0, Bb.h)(bb, this.pointAt(Ub++))
        }
        if (Ub > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const bb = this.targets.aimPoint(this.lL.localPlayerId);
          bb && (0, Bb.h)(bb, this.pointAt(Ub++))
        }
        const Ab = this.goal;
        if (0 === Ub) return void(Ab[3] = this.withinDistances(Ab[3]));
        for (let Bb = 0; Bb < 3; Bb++) {
          let bb = 1 / 0,
            ab = -1 / 0;
          for (let Ab = 0; Ab < Ub; Ab++) bb = Math.min(bb, this.points[Ab][Bb]), ab = Math.max(ab, this.points[Ab][Bb]);
          Ab[Bb] = (bb + ab) / 2
        }
        let Mb = 0;
        for (let Bb = 0; Bb < Ub; Bb++) {
          const bb = this.points[Bb];
          Mb = Math.max(Mb, Math.hypot(bb[0] - Ab[0], bb[1] - Ab[1], bb[2] - Ab[2]))
        }
        const Tb = Math.tan((0, vb.i)(bb) / 2),
          Eb = Math.atan(Tb * (!0 === this.settings.letterbox ? Lb.f : 1)),
          Yb = Math.atan(Tb * this.lL.getAspectRatio()),
          eb = (Mb + (null !== (ab = this.settings.padding) && void 0 !== ab ? ab : 2)) / Math.sin(Math.min(Eb, Yb));
        Ab[3] = this.withinDistances(eb)
      }
      withinDistances(bb) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, bb))
      }
      pointAt(bb) {
        return bb === this.points.length && this.points.push([0, 0, 0]), this.points[bb]
      }
    }
    class kb {
      constructor(bb) {
        this.limits = bb, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(bb) {
        this.limits && (this.yawOffset = bb.yawOffset, this.pitchOffset = bb.pitchOffset, this.idleMs = bb.idleMs)
      }
      update(bb, ab) {
        const Ub = this.limits;
        if (!Ub) return;
        const Ab = Number.isFinite(ab.XN) ? ab.XN : 0,
          Mb = Number.isFinite(ab.kN) ? ab.kN : 0;
        if (ab.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: ab.pointedAt.heading,
          pitch: ab.pointedAt.pitch
        };
        else if (0 !== Ab || 0 !== Mb) this.idleMs = 0, this.yawOffset += Ab, this.pitchOffset += Mb;
        else {
          const ab = Math.max(0, this.idleMs + bb - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += bb, void 0 !== Ub.returnMs && ab > 0) {
            const bb = Ub.returnMs > 0 ? Math.exp(-3 * ab / Ub.returnMs) : 0;
            this.yawOffset *= bb, this.pitchOffset *= bb
          }
        }
        this.clampOffsets(Ub)
      }
      clampOffsets(bb) {
        if (bb.maxYaw >= 180) this.yawOffset = (0, Mb.x)(0, this.yawOffset);
        else {
          const ab = (0, vb.i)(bb.maxYaw);
          this.yawOffset = Math.max(-ab, Math.min(ab, this.yawOffset))
        }
        const ab = (0, vb.i)(bb.maxPitch);
        this.pitchOffset = Math.max(-ab, Math.min(ab, this.pitchOffset))
      }
      apply(bb, ab) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Mb.x)(bb.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - bb.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const Ub = (0, Mb.h)(bb.pitch + this.pitchOffset);
        this.pitchOffset = Ub - bb.pitch, ab.heading = (0, Mb.t)(bb.heading + this.yawOffset), ab.pitch = Ub
      }
      unapply(bb, ab) {
        ab.heading = (0, Mb.t)(bb.heading - this.yawOffset), ab.pitch = (0, Mb.h)(bb.pitch - this.pitchOffset)
      }
    }
    const yb = 1e-6;

    function Zb(bb) {
      return Math.sqrt(bb[0] * bb[0] + bb[1] * bb[1] + bb[2] * bb[2])
    }

    function Db(bb, ab, Ub, Ab, Mb) {
      const Tb = Mb * Mb,
        Eb = Tb * Mb;
      return (2 * Eb - 3 * Tb + 1) * bb + (Eb - 2 * Tb + Mb) * ab + (-2 * Eb + 3 * Tb) * Ub + (Eb - Tb) * Ab
    }

    function zb(bb, ab, Ub, Ab, Mb) {
      const Tb = Mb * Mb;
      return (6 * Tb - 6 * Mb) * bb + (3 * Tb - 4 * Mb + 1) * ab + (-6 * Tb + 6 * Mb) * Ub + (3 * Tb - 2 * Mb) * Ab
    }

    function xb(bb, ab) {
      const Ub = ab[0] - bb[0],
        Ab = ab[1] - bb[1],
        Mb = ab[2] - bb[2];
      return Math.sqrt(Ub * Ub + Ab * Ab + Mb * Mb)
    }

    function ib(bb, ab, Ub, Ab, Mb, Tb) {
      for (let Eb = 0; Eb < 3; Eb++) Tb[Eb] = Mb ? bb[Eb] * Ab : Ub[Eb] - ab[Eb];
      return Mb && function(bb, ab) {
        const Ub = Zb(bb);
        if (Ub > ab) {
          const Ab = ab / Ub;
          bb[0] *= Ab, bb[1] *= Ab, bb[2] *= Ab
        }
      }(Tb, 3 * xb(ab, Ub)), Tb
    }

    function fb(bb, ab, Ub, Ab) {
      for (let Mb = 0; Mb < 3; Mb++) Ab[Mb] = 6 * (ab[Mb] - bb[Mb]) - 2 * Ub[Mb];
      if (Zb(Ab) < yb)
        for (let Mb = 0; Mb < 3; Mb++) Ab[Mb] = ab[Mb] - bb[Mb];
      return Ab
    }

    function mb(bb, ab) {
      return [2 * ab[0] - bb[0], 2 * ab[1] - bb[1], 2 * ab[2] - bb[2]]
    }

    function pb(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      if (!Tb && !Eb) return 0;
      const Yb = Tb ? bb : 2 * ab - Ub,
        Bb = Eb ? Ub : 2 * ab - bb,
        eb = Tb ? Ab : Mb,
        vb = Eb ? Mb : Ab,
        Lb = (ab - Yb) / eb,
        Pb = (Bb - ab) / vb;
      if (Lb * Pb <= 0) return 0;
      const Xb = (Bb - Yb) / (eb + vb),
        jb = 3 * Math.min(Math.abs(Lb), Math.abs(Pb));
      return Math.max(-jb, Math.min(jb, Xb))
    }

    function Nb(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      const {
        u: Yb,
        segmentMs: Bb
      } = bb;
      if (!bb.curved) return Ub + (Ab - Ub) * Yb;
      return Db(Ub, pb(ab, Ub, Ab, bb.beforeMs, Bb, Tb, !0) * Bb, Ab, pb(Ub, Ab, Mb, Bb, bb.afterMs, !0, Eb) * Bb, Yb)
    }

    function Wb(bb) {
      return Math.abs(bb.pitch) >= Mb.e
    }
    class Hb {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.nodes = bb, this.prevNodes = Ub, this.nextNodes = Ab, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = bb.map(((bb, Ub) => this.nodeTangent(ab, Mb, Ub)))
      }
      sample(bb, ab, Ub) {
        const {
          index: Ab,
          toIndex: Tb,
          segmentMs: Eb,
          curved: Yb
        } = bb, Bb = this.fromAngles, eb = this.toAngles, vb = this.nodeAngles(Ab, Ub.position, ab, Bb), Lb = this.nodeAngles(Tb, Ub.position, ab, eb);
        if (Eb > 0 && "aim" !== vb && "aim" !== Lb && this.liveTangent(bb, Bb)) return Ub.heading = (0, Mb.t)(Bb.heading), void(Ub.pitch = Bb.pitch);
        if ("none" === vb && "none" === Lb) return;
        !Yb && Eb > 0 && ("tangent" === vb && this.liveTangent(bb, Bb), "tangent" === Lb && this.liveTangent(bb, eb)), "none" === vb ? (0, Mb.k)(eb, Bb) : "none" === Lb && (0, Mb.k)(Bb, eb);
        const Pb = Yb && bb.beforeIndex >= 0 && "none" !== this.nodeAngles(bb.beforeIndex, Ub.position, ab, this.beforeAngles),
          Xb = Yb && bb.afterIndex >= 0 && "none" !== this.nodeAngles(bb.afterIndex, Ub.position, ab, this.afterAngles),
          jb = (0, Mb.z)(Bb.heading, eb.heading),
          Rb = Nb(bb, Pb ? (0, Mb.z)(Bb.heading, this.beforeAngles.heading) : 0, Bb.heading, jb, Xb ? (0, Mb.z)(jb, this.afterAngles.heading) : 0, Pb, Xb);
        Ub.heading = (0, Mb.t)(Rb), Ub.pitch = (0, Mb.h)(Nb(bb, this.beforeAngles.pitch, Bb.pitch, eb.pitch, this.afterAngles.pitch, Pb, Xb))
      }
      nodeAngles(bb, ab, Ub, Ab) {
        const Mb = this.rawNodeAngles(bb, ab, Ub, Ab);
        return "none" !== Mb && Wb(Ab) && !this.borrowHeading(this.prevNodes[bb], ab, Ub, Ab) && this.borrowHeading(this.nextNodes[bb], ab, Ub, Ab), Mb
      }
      borrowHeading(bb, ab, Ub, Ab) {
        const Mb = this.borrowedAngles;
        return !(bb < 0 || "none" === this.rawNodeAngles(bb, ab, Ub, Mb) || Wb(Mb)) && (Ab.heading = Mb.heading, !0)
      }
      rawNodeAngles(bb, ab, Ub, Ab) {
        const Tb = this.nodes[bb].keyframe;
        if (Tb.lookDirection) return (0, Mb.l)(Tb.lookDirection, Ab), "aim";
        if (void 0 !== Tb.lookAt) {
          const bb = Ub(Tb.lookAt);
          if (bb) return (0, Mb.q)(ab, bb, Ab), "aim"
        }
        const Eb = this.tangents[bb];
        return Eb ? ((0, Mb.k)(Eb, Ab), "tangent") : "none"
      }
      liveTangent(bb, ab) {
        const Ub = this.nodes[bb.index].position,
          Ab = this.nodes[bb.toIndex].position,
          Tb = this.derivative;
        for (let Mb = 0; Mb < 3; Mb++) Tb[Mb] = zb(Ub[Mb], bb.fromTangent[Mb], Ab[Mb], bb.toTangent[Mb], bb.u);
        return Zb(Tb) > 1e-9 ? ((0, Mb.l)(Tb, ab), !0) : !(xb(Ub, Ab) < yb) && ((0, Mb.l)(fb(Ub, Ab, bb.u < .5 ? bb.toTangent : bb.fromTangent, Tb), ab), !0)
      }
      nodeTangent(bb, ab, Ub) {
        var Ab;
        const Tb = bb[Ub];
        if (Zb(Tb) > 1e-9) return (0, Mb.l)(Tb, {
          heading: 0,
          pitch: 0
        });
        const Eb = null !== (Ab = this.restDirectionTo(Ub, Ub + 1, bb, ab)) && void 0 !== Ab ? Ab : this.restDirectionTo(Ub, Ub - 1, bb, ab);
        return Eb ? (0, Mb.l)(Eb, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(bb, ab, Ub, Ab) {
        const Mb = this.nodes[bb],
          Tb = this.nodes[ab];
        if (!Tb || xb(Mb.position, Tb.position) < yb) return null;
        const [Eb, Yb] = ab > bb ? [Mb, Tb] : [Tb, Mb], Bb = ib(Ub[ab], Eb.position, Yb.position, Yb.timeMs - Eb.timeMs, Ab, [0, 0, 0]);
        return fb(Eb.position, Yb.position, Bb, [0, 0, 0])
      }
    }

    function Ib(bb, ab) {
      const Ub = bb.lookDirection || ab.lookDirection ? function(bb, ab) {
        if (!bb || !ab) return bb === ab;
        const Ub = Zb(bb),
          Ab = Zb(ab);
        return Math.hypot(bb[0] / Ub - ab[0] / Ab, bb[1] / Ub - ab[1] / Ab, bb[2] / Ub - ab[2] / Ab) < yb
      }(bb.lookDirection, ab.lookDirection) : (Ab = bb.lookAt, Mb = ab.lookAt, "object" !== typeof Ab || "object" !== typeof Mb ? Ab === Mb : xb(Ab, Mb) < yb);
      var Ab, Mb;
      return xb(bb.position, ab.position) < yb && bb.fov === ab.fov && Ub
    }
    class db {
      constructor(bb, ab, Ub) {
        if (this.smooth = ab, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
        for (let Tb = 1; Tb < bb.length; Tb++)
          if (!(bb[Tb].timeMs > bb[Tb - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = bb.map((bb => {
          var ab;
          return {
            timeMs: bb.timeMs,
            position: [...bb.position],
            keyframe: bb,
            easing: (0, Tb.p)(null !== (ab = bb.easing) && void 0 !== ab ? ab : "linear")
          }
        }));
        const Ab = this.nodes[0],
          Mb = this.nodes[this.nodes.length - 1],
          Eb = Ub && this.nodes.length > 1;
        Eb && !Ib(Ab.keyframe, Mb.keyframe) && this.nodes.push({
          ...Ab,
          timeMs: Mb.timeMs + (Mb.timeMs - Ab.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Eb ? this.nodes[this.nodes.length - 1].timeMs - Ab.timeMs : 0, this.prevNodes = this.nodes.map(((bb, ab) => this.neighbour(ab, -1))), this.nextNodes = this.nodes.map(((bb, ab) => this.neighbour(ab, 1))), this.prevGaps = this.prevNodes.map(((bb, ab) => bb >= 0 ? this.gapMs(ab, -1) : 0)), this.nextGaps = this.nextNodes.map(((bb, ab) => bb >= 0 ? this.gapMs(ab, 1) : 0)), this.velocities = this.nodes.map(((bb, ab) => {
          const Ub = this.prevNodes[ab],
            Ab = this.nextNodes[ab];
          return function(bb, ab, Ub, Ab, Mb, Tb) {
            if (Tb[0] = 0, Tb[1] = 0, Tb[2] = 0, !bb && !Ub) return Tb;
            const Eb = null !== bb && void 0 !== bb ? bb : mb(null !== Ub && void 0 !== Ub ? Ub : ab, ab),
              Yb = null !== Ub && void 0 !== Ub ? Ub : mb(null !== bb && void 0 !== bb ? bb : ab, ab),
              Bb = bb ? Ab : Mb,
              eb = Ub ? Mb : Ab,
              vb = xb(Eb, ab),
              Lb = xb(ab, Yb);
            if (vb < yb || Lb < yb) return Tb;
            const Pb = Math.sqrt(vb),
              Xb = Math.sqrt(Lb),
              jb = (Pb + Xb) / (Bb + eb);
            for (let Rb = 0; Rb < 3; Rb++) {
              const bb = (ab[Rb] - Eb[Rb]) / Pb - (Yb[Rb] - Eb[Rb]) / (Pb + Xb) + (Yb[Rb] - ab[Rb]) / Xb;
              Tb[Rb] = bb * jb
            }
            return Tb
          }(Ub >= 0 ? this.nodes[Ub].position : null, bb.position, Ab >= 0 ? this.nodes[Ab].position : null, this.prevGaps[ab], this.nextGaps[ab], [0, 0, 0])
        })), this.aim = new Hb(this.nodes, this.velocities, this.prevNodes, this.nextNodes, ab)
      }
      sample(bb, ab, Ub, Ab) {
        const Mb = this.findSegment(this.pathTime(bb));
        this.samplePosition(Mb, Ab.position), this.aim.sample(Mb, ab, Ab);
        const {
          beforeIndex: Tb,
          afterIndex: Eb
        } = Mb;
        Ab.fov = Nb(Mb, Tb >= 0 ? this.fovAt(Tb, Ub) : 0, this.fovAt(Mb.index, Ub), this.fovAt(Mb.toIndex, Ub), Eb >= 0 ? this.fovAt(Eb, Ub) : 0, Tb >= 0, Eb >= 0)
      }
      pathTime(bb) {
        const ab = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || bb <= ab) return bb;
        const Ub = bb - ab;
        return ab + Ub - this.loopMs * Math.floor(Ub / this.loopMs)
      }
      findSegment(bb) {
        const ab = this.nodes,
          Ub = this.segment;
        let Ab = Ub.index;
        for (bb < ab[Ab].timeMs && (Ab = 0); Ab < ab.length - 2 && ab[Ab + 1].timeMs <= bb;) Ab++;
        const Mb = Math.min(Ab + 1, ab.length - 1),
          Eb = ab[Mb].timeMs - ab[Ab].timeMs;
        return Ub.index = Ab, Ub.toIndex = Mb, Ub.segmentMs = Eb, Ub.u = Eb > 0 ? (0, Tb.o)((bb - ab[Ab].timeMs) / Eb, ab[Ab].easing) : 1, Ub.curved = this.smooth && Eb > 0, Ub.beforeIndex = this.prevNodes[Ab], Ub.afterIndex = this.nextNodes[Mb], Ub.beforeMs = this.prevGaps[Ab], Ub.afterMs = this.nextGaps[Mb], Ub
      }
      samplePosition(bb, ab) {
        const {
          fromTangent: Ub,
          toTangent: Ab,
          curved: Mb
        } = bb, Tb = this.nodes[bb.index].position, Eb = this.nodes[bb.toIndex].position;
        ib(this.velocities[bb.index], Tb, Eb, bb.segmentMs, Mb, Ub), ib(this.velocities[bb.toIndex], Tb, Eb, bb.segmentMs, Mb, Ab);
        const Yb = bb.u;
        for (let Bb = 0; Bb < 3; Bb++) ab[Bb] = Mb ? Db(Tb[Bb], Ub[Bb], Eb[Bb], Ab[Bb], Yb) : Tb[Bb] + (Eb[Bb] - Tb[Bb]) * Yb
      }
      fovAt(bb, ab) {
        var Ub;
        return null !== (Ub = this.nodes[bb].keyframe.fov) && void 0 !== Ub ? Ub : ab
      }
      neighbour(bb, ab) {
        const Ub = this.nodes.length - 1,
          Ab = bb + ab;
        return Ab >= 0 && Ab <= Ub ? Ab : this.loopMs <= 0 || Ub < 2 ? -1 : Ab < 0 ? Ub - 1 : 1
      }
      gapMs(bb, ab) {
        const Ub = this.nodes.length - 1;
        if (1 === ab) {
          const ab = bb === Ub ? 0 : bb;
          return this.nodes[ab + 1].timeMs - this.nodes[ab].timeMs
        }
        const Ab = 0 === bb ? Ub : bb;
        return this.nodes[Ab].timeMs - this.nodes[Ab - 1].timeMs
      }
    }
    class Fb {
      constructor(bb) {
        this.lL = bb, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = ab => bb.getEntityPosition(ab), this.readAimPoint = ab => bb.getEntityAimPoint(ab)
      }
      aimPoint(bb) {
        return "string" !== typeof bb ? (0, Bb.q)(bb, 3) ? bb : null : this.resolve(bb, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(bb) {
        const ab = "string" === typeof bb ? this.lL.getEntityAimPoint(bb) : bb;
        return ab && (0, Bb.q)(ab, 3) ? ab : null
      }
      feetPosition(bb) {
        return this.resolve(bb, this.readFeet, this.lastFeet)
      }
      heading(bb) {
        const ab = this.lL.getEntityHeading(bb);
        if (null !== ab && Number.isFinite(ab)) return this.lastHeadings.set(bb, ab), ab;
        const Ub = this.lastHeadings.get(bb);
        return void 0 !== Ub ? Ub : bb === this.lL.localPlayerId ? 0 : this.heading(this.lL.localPlayerId)
      }
      resolve(bb, ab, Ub) {
        const Ab = ab(bb);
        let Mb = Ub.get(bb);
        return Ab && (0, Bb.q)(Ab, 3) ? (Mb || (Mb = [0, 0, 0], Ub.set(bb, Mb)), Mb[0] = Ab[0], Mb[1] = Ab[1], Mb[2] = Ab[2], Mb) : Mb || (bb === this.lL.localPlayerId ? null : this.resolve(this.lL.localPlayerId, ab, Ub))
      }
    }

    function hb(bb) {
      return {
        heading: bb.heading,
        pitch: bb.pitch
      }
    }

    function Gb(bb, ab) {
      Number.isFinite(bb.heading) && Number.isFinite(bb.pitch) || (0, Mb.k)(ab, bb)
    }

    function Qb(bb, ab, Ub, Ab, Tb) {
      if (ab) return void(0, Mb.l)(ab, Tb);
      const Eb = Ab.aimPoint(Ub);
      Eb && (0, Mb.q)(bb, Eb, Tb)
    }
    class qb {
      constructor(bb, ab, Ub, Ab) {
        this.settings = bb, this.lL = ab, this.targets = Ub, this.base = void 0, this.base = hb(Ab)
      }
      update(bb, ab, Ub) {
        var Ab;
        const Mb = this.settings;
        (0, Bb.h)(Mb.position, Ub.position), Qb(Mb.position, Mb.lookDirection, null !== (Ab = Mb.lookAt) && void 0 !== Ab ? Ab : this.lL.localPlayerId, this.targets, this.base), ab.apply(this.base, Ub), Ub.fov = Xb(Mb, this.lL)
      }
      continueFrom(bb) {
        bb instanceof qb && (0, Mb.k)(bb.base, this.base)
      }
      reset(bb) {
        Gb(this.base, bb)
      }
    }
    class ub {
      constructor(bb, ab, Ub, Ab) {
        this.settings = bb, this.lL = ab, this.targets = Ub, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.QR = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = hb(Ab), this.goal = [...Ab.position]
      }
      update(bb, ab, Ub) {
        var Ab, Mb, Tb;
        const Eb = this.settings,
          Yb = null !== (Ab = Eb.target) && void 0 !== Ab ? Ab : this.lL.localPlayerId,
          eb = this.targets.feetPosition(Yb);
        let vb = !1;
        eb && (vb = this.foundFeet && xb(this.lastFeet, eb) > 32 + .1 * bb, (0, Bb.h)(eb, this.lastFeet), this.foundFeet = !0, this.placeGoal(eb, Yb));
        const Lb = null !== (Mb = Eb.smoothMs) && void 0 !== Mb ? Mb : 0;
        !this.started || Lb < 1 || vb ? ((0, Bb.h)(this.goal, this.smoothed), this.QR.fill(0), this.started = !0) : jb(this.smoothed, this.QR, this.goal, Lb, bb), vb && (this.distance = -1), (0, Bb.h)(this.smoothed, Ub.position);
        const Pb = !0 === Eb.avoidTerrain ? this.pullIn(Yb, bb, Ub) : 1;
        let Rb = this.goal;
        if ("target" === Eb.offsetSpace) Rb = Ub.position;
        else if (Pb < 1) {
          Rb = this.aimOrigin;
          for (let bb = 0; bb < 3; bb++) Rb[bb] = Ub.position[bb] + (this.goal[bb] - this.smoothed[bb]) * Pb
        }
        Qb(Rb, Eb.lookDirection, null !== (Tb = Eb.lookAt) && void 0 !== Tb ? Tb : Yb, this.targets, this.base), ab.apply(this.base, Ub), Ub.fov = Xb(Eb, this.lL)
      }
      continueFrom(bb) {
        bb instanceof ub && (0, Ab.u)(bb.settings.target, this.settings.target) && ((0, Mb.k)(bb.base, this.base), (0, Bb.h)(bb.goal, this.goal), (0, Bb.h)(bb.lastFeet, this.lastFeet), this.foundFeet = bb.foundFeet, (0, Bb.h)(bb.smoothed, this.smoothed), (0, Bb.h)(bb.QR, this.QR), this.started = bb.started, !0 === bb.settings.avoidTerrain && (this.distance = bb.distance))
      }
      reset(bb) {
        Gb(this.base, bb), this.QR.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(bb, ab, Ub) {
        const Ab = this.targets.aimPoint(bb);
        if (!Ab) return 1;
        const Mb = Ub.position,
          Tb = xb(Ab, Mb);
        if (!(Tb > 0)) return 1;
        const Eb = this.toCamera;
        for (let Bb = 0; Bb < 3; Bb++) Eb[Bb] = (Mb[Bb] - Ab[Bb]) / Tb;
        const Yb = function(bb, ab, Ub) {
          return bb < 0 || ab < bb ? ab : ab + (bb - ab) * Math.exp(-Ub / 150)
        }(this.distance, function(bb, ab, Ub, Ab) {
          const Mb = bb.raycastTerrain(ab, Ub, Ab);
          return null !== Mb && Number.isFinite(Mb) ? Math.min(Ab, Math.max(0, Mb - .2)) : Ab
        }(this.lL, Ab, Eb, Tb), ab);
        if (Tb - Yb < .001) return this.distance = -1, 1;
        this.distance = Yb;
        for (let Bb = 0; Bb < 3; Bb++) Mb[Bb] = Ab[Bb] + Eb[Bb] * Yb;
        return Yb / Tb
      }
      placeGoal(bb, ab) {
        const Ub = this.settings.offset;
        let Ab = Ub[0],
          Mb = Ub[2];
        if ("target" === this.settings.offsetSpace) {
          const bb = this.targets.heading(ab),
            Tb = Math.cos(bb),
            Eb = Math.sin(bb);
          Ab = Ub[0] * Tb + Ub[2] * Eb, Mb = -Ub[0] * Eb + Ub[2] * Tb
        }
        this.goal[0] = bb[0] + Ab, this.goal[1] = bb[1] + Ub[1], this.goal[2] = bb[2] + Mb
      }
    }
    class rb {
      constructor(bb, ab, Ub, Ab) {
        var Mb, Tb;
        this.settings = bb, this.lL = ab, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = bb.keyframes.length > 0 ? new db(bb.keyframes, null === (Mb = bb.smooth) || void 0 === Mb || Mb, null !== (Tb = bb.loop) && void 0 !== Tb && Tb) : null, this.base = (0, Bb.e)(Ab, (0, Bb.j)()), this.resolveTarget = bb => Ub.aimPoint(bb)
      }
      update(bb, ab, Ub) {
        this.elapsedMs += bb;
        const Ab = Xb(this.settings, this.lL);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Ab, this.base) : this.base.fov = Ab, (0, Bb.h)(this.base.position, Ub.position), Ub.fov = this.base.fov, ab.apply(this.base, Ub)
      }
      continueFrom(bb) {
        bb instanceof rb && (0, Ab.u)(bb.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = bb.elapsedMs, (0, Bb.e)(bb.base, this.base))
      }
      reset(bb) {
        Gb(this.base, bb), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function Kb(bb, ab) {
      return (0, Ab.w)(bb, ab)
    }
    class ob {
      constructor(bb, ab, Ub) {
        var Ab;
        this.settings = bb, this.lL = ab, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Mb = null !== Ub && Ub.settings.mode === bb.mode,
          Tb = Mb ? Ub.pose : ab.getDefaultPose();
        this.pose = (0, Bb.e)(Tb, (0, Bb.j)()), this.lastGoodPose = (0, Bb.e)(Mb ? Ub.lastGoodPose : Tb, (0, Bb.j)()), this.look = new kb(bb.playerLook), this.targets = null !== (Ab = null === Ub || void 0 === Ub ? void 0 : Ub.targets) && void 0 !== Ab ? Ab : new Fb(ab);
        const Eb = (0, Bb.e)(Tb, (0, Bb.j)());
        Mb && Ub.look.unapply(Eb, Eb), this.mode = function(bb, ab, Ub, Ab) {
          switch (bb.mode) {
            case "fixed":
              return new qb(bb, ab, Ub, Ab);
            case "follow":
              return new ub(bb, ab, Ub, Ab);
            case "path":
              return new rb(bb, ab, Ub, Ab);
            case "frame":
              return new Rb(bb, ab, Ub, Ab)
          }
        }(bb, ab, this.targets, Eb), Mb && (this.look.continueFrom(Ub.look), this.mode.continueFrom(Ub.mode))
      }
      update(bb, ab) {
        return this.look.update(bb, ab), this.mode.update(bb, this.look, this.pose), (0, Bb.n)(this.pose) ? (0, Bb.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, Bb.e)(this.lastGoodPose, this.pose), this.mode.reset((0, Bb.n)(this.lastGoodPose) ? this.lastGoodPose : this.lL.getDefaultPose())), this.pose
      }
    }

    function lb(bb) {
      return [0, 0, bb[2], bb[3]]
    }
    class tb {
      constructor(bb) {
        this.lL = bb, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new Yb, this.shot = null, this.blend = null, this.mixed = (0, Bb.j)(), this.output = (0, Bb.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(bb) {
        const ab = (0, eb.c)(bb);
        if ((0, Ab.u)(ab, this.pending ? this.pending.settings : this.settings)) return;
        const Ub = Kb(this.settings, ab);
        if (void 0 !== ab.transition && !Ub) return this.pending = {
          settings: ab,
          shot: "default" === ab.mode ? null : new ob(ab, this.lL, null)
        }, void this.fade.fadeOut(ab.transition);
        const Mb = null !== this.pending;
        this.pending = null, !Mb && Ub || this.fade.fadeIn(Ab.j.minTransitionFadeMs), this.show(ab, !1)
      }
      show(bb, ab) {
        var Ub, Mb;
        if ((0, Ab.u)(bb, this.settings)) return;
        const Eb = !ab && Kb(this.settings, bb);
        this.settings = bb;
        const Yb = null !== this.blend && this.blend.elapsedMs > 0,
          eb = (0, Bb.e)(this.hasOutput ? this.output : this.lL.getDefaultPose(), (0, Bb.j)());
        if (this.shot = "default" === bb.mode ? null : new ob(bb, this.lL, ab ? null : this.shot), Eb) return;
        const vb = ab || !this.shot && !this.hasOutput ? 0 : null !== (Ub = bb.blendInMs) && void 0 !== Ub ? Ub : 0;
        if (vb <= 0) return void(this.blend = null);
        const Lb = (0, Tb.p)(null !== (Mb = bb.blendEasing) && void 0 !== Mb ? Mb : "easeInOut");
        this.blend = {
          from: eb,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: vb,
          easing: Yb ? lb(Lb) : Lb
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
      update(bb, ab) {
        const Ub = Number.isFinite(bb) && bb > 0 ? bb : 0;
        if (this.fade.advance(Ub) && null !== this.pending) {
          const {
            settings: bb
          } = this.pending;
          this.pending = null, this.show(bb, !0)
        }
        this.loadingPositions.length = 0;
        const Ab = this.pending;
        if (null !== Ab && void 0 !== Ab && Ab.shot) {
          const bb = "path" === Ab.settings.mode ? 0 : Ub;
          this.noteLoadingPosition(Ab.shot.update(bb, Bb.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Eb = this.shot ? this.shot.update(Ub, ab) : this.lL.getDefaultPose();
        this.shot && this.noteLoadingPosition(Eb.position);
        const Yb = this.blend;
        if (!Yb) return this.writeOutput(Eb);
        Yb.elapsedMs += Ub;
        const eb = Math.min(1, Yb.elapsedMs / Yb.durationMs);
        if (Yb.headingDelta = Number.isFinite(Yb.headingDelta) ? (0, Mb.z)(Yb.headingDelta, Eb.heading - Yb.from.heading) : (0, Mb.x)(Yb.from.heading, Eb.heading), (0, Bb.s)(Yb.from, Eb, Yb.headingDelta, (0, Tb.o)(eb, Yb.easing), this.mixed), eb >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else Yb.fromScripted && this.noteLoadingPosition(Yb.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(bb) {
        if (bb.every(Number.isFinite)) {
          const ab = this.loadingPositions;
          ab.push((0, Bb.h)(bb, this.loadingSlots[ab.length]))
        }
      }
      writeOutput(bb) {
        const ab = this.output;
        (0, Bb.n)(bb) ? (0, Bb.e)(bb, ab) : this.hasOutput || (0, Bb.e)(this.lL.getDefaultPose(), ab), ab.pitch = (0, Mb.h)(ab.pitch);
        const Ub = this.lL.getDefaultFov(),
          Tb = Number.isFinite(Ub) && Ub > 0 && Ub < 180,
          Eb = Tb ? Math.min(Ab.j.minFov, Ub) : Ab.j.minFov,
          Yb = Tb ? Math.max(Ab.j.maxFov, Ub) : Ab.j.maxFov;
        return ab.fov = Number.isFinite(ab.fov) ? Math.min(Yb, Math.max(Eb, ab.fov)) : Yb, this.hasOutput = !0, ab
      }
    }
  },
  38454: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      e: () => Yb,
      h: () => Eb,
      j: () => Tb,
      n: () => eb,
      q: () => Bb,
      s: () => vb
    });
    var Ab = Ub(38456);
    const Mb = {
      XN: 0,
      kN: 0
    };

    function Tb() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Eb(bb, ab) {
      return ab[0] = bb[0], ab[1] = bb[1], ab[2] = bb[2], ab
    }

    function Yb(bb, ab) {
      return Eb(bb.position, ab.position), ab.heading = bb.heading, ab.pitch = bb.pitch, ab.fov = bb.fov, ab
    }

    function Bb(bb, ab) {
      return Array.isArray(bb) && bb.length === ab && bb.every(Number.isFinite)
    }

    function eb(bb) {
      return Bb(bb.position, 3) && Number.isFinite(bb.heading) && Number.isFinite(bb.pitch) && Number.isFinite(bb.fov)
    }

    function vb(bb, ab, Ub, Mb, Tb) {
      for (let Ab = 0; Ab < 3; Ab++) Tb.position[Ab] = bb.position[Ab] + (ab.position[Ab] - bb.position[Ab]) * Mb;
      return Tb.heading = (0, Ab.t)(bb.heading + Ub * Mb), Tb.pitch = bb.pitch + (ab.pitch - bb.pitch) * Mb, Tb.fov = bb.fov + (ab.fov - bb.fov) * Mb, Tb
    }
  },
  38475: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => fb,
      f: () => Pb
    });
    var Ab = Ub(38471),
      Mb = Ub(38454);
    const Tb = Ab.h,
      Eb = Ab.m;

    function Yb(bb, ab, Ub, Ab) {
      return Number.isFinite(bb) ? Math.min(Ub, Math.max(ab, bb)) : Ab
    }

    function Bb(bb, ab, Ub) {
      return void 0 !== bb && Number.isFinite(bb) ? Math.min(Ub, Math.max(ab, bb)) : void 0
    }

    function eb(bb) {
      const ab = Ab.j.maxCoordinate;
      return [Math.min(ab, Math.max(-ab, bb[0])), Math.min(ab, Math.max(-ab, bb[1])), Math.min(ab, Math.max(-ab, bb[2]))]
    }

    function vb(bb) {
      return "string" === typeof bb ? bb : (0, Mb.q)(bb, 3) ? eb(bb) : void 0
    }
    const Lb = new RegExp(Ab.q);

    function Pb(bb) {
      return "string" === typeof bb && Lb.test(bb)
    }

    function Xb(bb) {
      const ab = [];
      if (!Array.isArray(bb)) return ab;
      for (const Ub of bb.slice(0, Ab.j.maxFrameTargets)) {
        const bb = vb(Ub);
        void 0 === bb || "string" === typeof bb && !Pb(bb) || ab.push(bb)
      }
      return ab
    }

    function jb(bb) {
      if (!(0, Mb.q)(bb, 3)) return;
      const ab = Math.max(Math.abs(bb[0]), Math.abs(bb[1]), Math.abs(bb[2])),
        Ub = Math.hypot(bb[0] / ab, bb[1] / ab, bb[2] / ab);
      return 0 === ab || ab * Ub < Ab.j.minDirectionLength ? void 0 : [bb[0] / ab / Ub, bb[1] / ab / Ub, bb[2] / ab / Ub]
    }

    function Rb(bb) {
      if (void 0 !== bb) return "string" === typeof bb ? Tb.includes(bb) ? bb : void 0 : (0, Mb.q)(bb, 4) ? [Yb(bb[0], 0, 1, 0), Yb(bb[1], Ab.j.minEasingY, Ab.j.maxEasingY, 0), Yb(bb[2], 0, 1, 1), Yb(bb[3], Ab.j.minEasingY, Ab.j.maxEasingY, 1)] : "linear"
    }

    function kb(bb) {
      if (bb) return {
        maxYaw: Yb(bb.maxYaw, 0, Ab.j.maxPlayerLook, 0),
        maxPitch: Yb(bb.maxPitch, 0, Ab.j.maxPlayerLook, 0),
        returnMs: Bb(bb.returnMs, 0, Ab.j.maxReturnMs)
      }
    }
    const yb = new RegExp(Ab.b);

    function Zb(bb) {
      var ab;
      if ("object" !== typeof bb || null === bb) return;
      const Ub = Ab.j.maxTransitionMs,
        Mb = Ab.j.minTransitionFadeMs;
      return {
        colour: "string" === typeof bb.colour && yb.test(bb.colour) ? bb.colour : Ab.f,
        outMs: Yb(bb.outMs, Mb, Ub, Mb),
        holdMs: Yb(null !== (ab = bb.holdMs) && void 0 !== ab ? ab : 0, 0, Ub, 0),
        inMs: Yb(bb.inMs, Mb, Ub, Mb)
      }
    }

    function Db(bb) {
      return !0 === bb || void 0
    }

    function zb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const ab = bb.lookAt;
      return Number.isFinite(bb.timeMs) && (0, Mb.q)(bb.position, 3) && (void 0 === ab || "string" === typeof ab || (0, Mb.q)(ab, 3))
    }

    function xb(bb) {
      return {
        ...bb,
        timeMs: Yb(bb.timeMs, 0, Ab.j.maxPathMs, 0),
        position: eb(bb.position),
        lookAt: vb(bb.lookAt),
        lookDirection: jb(bb.lookDirection),
        fov: Bb(bb.fov, Ab.j.minFov, Ab.j.maxFov),
        easing: Rb(bb.easing)
      }
    }

    function ib(bb) {
      const ab = [];
      if (!Array.isArray(bb)) return ab;
      for (const Ub of bb.slice(0, Ab.j.maxKeyframes)) {
        if (!zb(Ub)) continue;
        const bb = xb(Ub);
        (0 === ab.length || bb.timeMs > ab[ab.length - 1].timeMs) && ab.push(bb)
      }
      return ab
    }

    function fb(bb) {
      if ("object" !== typeof bb || null === bb) return {
        mode: "default"
      };
      const ab = {
          blendInMs: Bb(bb.blendInMs, 0, Ab.j.maxBlendInMs),
          blendEasing: Rb(bb.blendEasing),
          transition: Zb(bb.transition),
          letterbox: Db(bb.letterbox),
          hideHud: Db(bb.hideHud)
        },
        Ub = {
          mode: "default",
          ...ab
        };
      if ("default" === bb.mode || "fixed" === bb.mode && !(0, Mb.q)(bb.position, 3)) return Ub;
      const Tb = {
        ...ab,
        fov: Bb(bb.fov, Ab.j.minFov, Ab.j.maxFov),
        playerFacing: (Lb = bb.playerFacing, Eb.includes(Lb) ? Lb : void 0),
        playerLook: kb(bb.playerLook)
      };
      var Lb, Pb;
      switch (bb.mode) {
        case "fixed":
          return {
            ...bb, ...Tb, position: eb(bb.position), lookAt: vb(bb.lookAt), lookDirection: jb(bb.lookDirection)
          };
        case "follow":
          return {
            ...bb, ...Tb, target: "string" === typeof bb.target ? bb.target : void 0, lookAt: vb(bb.lookAt), offset: (Pb = bb.offset, Array.isArray(Pb) ? [Yb(Pb[0], -Ab.j.maxOffset, Ab.j.maxOffset, 0), Yb(Pb[1], -Ab.j.maxOffset, Ab.j.maxOffset, 0), Yb(Pb[2], -Ab.j.maxOffset, Ab.j.maxOffset, 0)] : [0, 0, 0]), lookDirection: jb(bb.lookDirection), smoothMs: Bb(bb.smoothMs, 0, Ab.j.maxSmoothMs)
          };
        case "path":
          return {
            ...bb, ...Tb, keyframes: ib(bb.keyframes)
          };
        case "frame":
          return {
            ...bb, ...Tb, targets: Xb(bb.targets), viewHeading: Bb(bb.viewHeading, -Ab.j.maxFrameHeading, Ab.j.maxFrameHeading), viewElevation: Bb(bb.viewElevation, 0, Ab.j.maxFrameElevation), padding: Bb(bb.padding, 0, Ab.j.maxFrameDistance), closestDistance: Bb(bb.closestDistance, 0, Ab.j.maxFrameDistance), furthestDistance: Bb(bb.furthestDistance, 0, Ab.j.maxFrameDistance), smoothMs: Bb(bb.smoothMs, 0, Ab.j.maxSmoothMs)
          };
        default:
          return Ub
      }
    }
  },
  37964: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb
    });
    var Ab = Ub(1162);

    function Mb(bb) {
      const ab = /(\d*\.?\d+)px/.exec(bb);
      return ab ? Number(ab[1]) : null
    }

    function Tb(bb) {
      return bb.split(/[\s,]+/).pop()
    }
    let Eb = !1;
    const Yb = {
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
      drawText: function(bb, ab, Ab, Yb, Bb, eb) {
        if (Bb <= 0 || eb <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: vb,
          fontVariant: Lb,
          fontWeight: Pb,
          fontSize: Xb,
          font: jb
        } = this, Rb = [vb, Lb, Pb, `${Xb}px`, jb].filter(Boolean).join(" "), kb = [
          [Pb, `${Xb}px`, Tb(jb)].filter(Boolean).join(" "), `${Xb}px sans-serif`
        ], yb = bb.font, Zb = function(bb, ab, Ub) {
          for (const Ab of ab) {
            bb.font = Ab;
            const ab = Mb(bb.font),
              Eb = Tb(Ab);
            if (null !== ab && Math.abs(ab - Ub) <= .5 && bb.font.toLowerCase().includes(Eb.toLowerCase())) return Ab
          }
          return null
        }(bb, [Rb, ...kb], Xb);
        Zb !== Rb && function(bb, ab, Ab) {
          Eb || (Eb = !0, Promise.resolve().then((() => Ub(1003))).then((Ub => {
            let {
              UR: Mb
            } = Ub;
            Mb(new Error("A canvas didn't take canvasTxt's font"), {
              font: bb,
              RX: ab,
              drawnWith: null !== Ab && void 0 !== Ab ? Ab : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Rb, yb, Zb);
        const Db = Mb(bb.font);
        if (null === Zb && null !== Db && Db > 0) {
          const Ub = Xb / Db;
          bb.save();
          try {
            return bb.scale(Ub, Ub), {
              height: this.drawLines(bb, ab, Ab / Ub, Yb / Ub, Bb / Ub, eb / Ub, Db).height * Ub
            }
          } finally {
            bb.restore()
          }
        }
        return this.drawLines(bb, ab, Ab, Yb, Bb, eb, Xb)
      },
      drawLines: function(bb, ab, Ub, Mb, Tb, Eb, Yb) {
        const Bb = Ub + Tb,
          eb = Mb + Eb;
        let vb, Lb = Mb + Eb / 2 + Yb / 2;
        "right" === this.align ? (vb = Bb, bb.textAlign = "right") : "left" === this.align ? (vb = Ub, bb.textAlign = "left") : (vb = Ub + Tb / 2, bb.textAlign = "center");
        for (const Ab of ab) {
          bb.measureText(Ab).width >= Tb && (ab = ab.replace(Ab, ""))
        }
        ab = (0, Ab.V)(ab);
        const Pb = [],
          Xb = ab.split("\n"),
          jb = this.justify ? bb.measureText("\u200a").width : 0;
        Xb.forEach((ab => {
          let Ub = bb.measureText(ab).width;
          if (Ub <= Tb) Pb.push(ab);
          else {
            let Ab = ab;
            const Mb = Tb;
            let Eb, Yb, Bb;
            for (Ub = bb.measureText(Ab).width; Ub > Mb;) {
              for (Eb = 0, Yb = 0, Bb = ""; Yb < Mb;) Eb++, Bb = Ab.substr(0, Eb), Yb = bb.measureText(Bb).width;
              Eb--, Bb = Bb.substr(0, Eb);
              const ab = Eb;
              if (" " !== Ab.substr(Eb, 1)) {
                for (;
                  " " !== Ab.substr(Eb, 1) && 0 !== Eb;) Eb--;
                0 === Eb && (Eb = ab), Bb = Ab.substr(0, Eb)
              }
              Bb = this.justify ? this.justifyLine(bb, Bb, jb, "\u200a", Tb) : Bb, Ab = Ab.substr(Eb), Ub = bb.measureText(Ab).width, Pb.push(Bb)
            }
            Ub > 0 && Pb.push(Ab)
          }
        }));
        const Rb = this.lineHeight ? this.lineHeight : this.getTextHeight(bb, ab),
          kb = Rb * (Pb.length - 1),
          yb = kb / 2;
        let Zb = Mb;
        "top" === this.vAlign ? Lb = Mb + Yb : "bottom" === this.vAlign ? (Lb = eb - kb, Zb = eb) : (Zb = Mb + Eb / 2, Lb -= yb), Pb.forEach((ab => {
          ab = ab.trim(), bb.fillText(ab, vb, Lb), Lb += Rb
        })), this.debug && (bb.lineWidth = 3, bb.strokeStyle = "#00909e", bb.strokeRect(Ub, Mb, Tb, Eb), bb.lineWidth = 2, bb.strokeStyle = "#f6d743", bb.beginPath(), bb.moveTo(vb, Mb), bb.lineTo(vb, eb), bb.stroke(), bb.strokeStyle = "#ff6363", bb.beginPath(), bb.moveTo(Ub, Zb), bb.lineTo(Bb, Zb), bb.stroke());
        return {
          height: kb + Rb
        }
      },
      getTextHeight: function(bb, ab) {
        const Ub = bb.textBaseline;
        bb.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Ab
        } = bb.measureText(ab);
        return bb.textBaseline = Ub, Ab
      },
      justifyLine: function(bb, ab, Ub, Ab, Mb) {
        const Tb = ab.trim(),
          Eb = bb.measureText(Tb).width,
          Yb = Tb.split(/\s+/).length - 1,
          Bb = Math.floor((Mb - Eb) / Ub);
        if (Yb <= 0 || Bb <= 0) return Tb;
        const eb = Math.floor(Bb / Yb);
        let vb = Bb - Yb * eb,
          Lb = [];
        for (let Pb = 0; Pb < eb; Pb++) Lb.push(Ab);
        Lb = Lb.join("");
        return Tb.replace(/\s+/g, (bb => {
          const ab = vb > 0 ? Lb + Ab : Lb;
          return vb--, bb + ab
        }))
      }
    }
  },
  38409: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return ab.set(bb), ab
    }
    Ub.d(ab, {
      e: () => Ab
    })
  },
  37973: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Rb,
      d: () => jb,
      g: () => Pb,
      j: () => vb,
      n: () => Lb
    });
    var Ab = Ub(3959),
      Mb = Ub(325);
    const Tb = 1024,
      Eb = 1536,
      Yb = 2 * Ab.l + 1,
      Bb = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      eb = 1.5;

    function vb(bb, ab, Ub) {
      if ("string" !== typeof bb) return ab;
      try {
        const Ub = JSON.parse(bb);
        return Ub && "object" === typeof Ub ? Ub : ab
      } catch (Ab) {
        return void 0 !== Ub && console.error(`Couldn't parse ${Ub}`, Ab), ab
      }
    }

    function Lb(bb) {
      return vb(bb, null, "a leaderboard's rows")
    }

    function Pb(bb, ab) {
      var Ub, Ab;
      return null !== ab && void 0 !== ab ? ab : {
        status: null !== (Ub = bb.status) && void 0 !== Ub ? Ub : "loading",
        entries: null !== (Ab = bb.entries) && void 0 !== Ab ? Ab : []
      }
    }

    function Xb(bb, ab) {
      return "number" === typeof bb && Number.isFinite(bb) && bb > 0 ? bb : ab
    }

    function jb(bb, ab) {
      const Ub = Xb(bb.size, 1);
      let Ab = Xb(bb.width, Xb(2.5 * Ub, 2.5)),
        Mb = Xb(bb.height, Xb(3.75 * Ub, 3.75));
      Number.isFinite(Tb * Mb / Ab) && Number.isFinite(Eb * Ab / Mb) || (Ab = 2.5, Mb = 3.75);
      const Yb = Mb / Ab,
        Bb = Math.max(1, Math.min(Tb, ab / Yb));
      return {
        width: Ab,
        height: Mb,
        layoutWidth: Math.max(Tb, Eb / Yb),
        layoutHeight: Math.max(Eb, Tb * Yb),
        pixelWidth: Math.round(Bb),
        pixelHeight: Math.round(Math.max(1, Math.min(ab, Bb * Yb)))
      }
    }

    function Rb(bb, ab, Ub, Eb, vb, Lb) {
      bb.setTransform(1, 0, 0, 1, 0, 0), bb.fillStyle = Mb.E.defaultNameTagBackground, bb.fillRect(0, 0, ab, Ub), bb.scale(ab / Eb.layoutWidth, Ub / Eb.layoutHeight), bb.translate((Eb.layoutWidth - Tb) / 2, 0),
        function(bb, ab, Ub, Tb) {
          var Eb, vb, Lb, Pb;
          const {
            top: Xb,
            around: jb,
            showPlayerText: Rb,
            localPlayerDbId: Zb
          } = Ub, {
            whiteUiText: Db,
            grayUiText: zb,
            yellowUiText: xb
          } = Mb.E;
          bb.textBaseline = "middle";
          const ib = function(ab, Ub, Ab, Mb, Tb, Eb) {
              let Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              bb.font = `bold ${Mb}px 'Jetbrains Mono', monospace`, bb.fillStyle = Tb, bb.textAlign = Yb;
              let Bb = ab.replace(/[\r\n\t]/g, " ");
              if (bb.measureText(Bb).width > Eb) {
                for (; Bb.length > 0 && bb.measureText(`${Bb}\u2026`).width > Eb;) Bb = Bb.slice(0, -1);
                Bb += "\u2026"
              }
              bb.fillText(Bb, Ub, Ab)
            },
            fb = ab => {
              bb.fillStyle = Db, bb.globalAlpha = .15, bb.fillRect(24, ab, 976, 2), bb.globalAlpha = 1
            },
            mb = null === Zb ? null : (0, Mb.$b)(Zb),
            pb = bb => null !== mb && bb.playerHash === mb,
            Nb = kb(Xb.entries, Ab.n),
            Wb = "ready" === Xb.status && Nb.length > 0,
            Hb = null === jb ? [] : kb(jb.entries, Yb),
            Ib = Nb.some(pb),
            db = null === jb ? null : function(bb) {
              const ab = bb;
              if (!ab || !Number.isFinite(ab.rank) || !Number.isFinite(ab.tied) || !Number.isFinite(ab.total)) return null;
              return ab
            }(jb.standing),
            Fb = Hb.find(pb),
            hb = Nb.find(pb),
            Gb = null === db || void 0 === Fb ? null : {
              value: Fb.value,
              rank: db.rank
            },
            Qb = yb(Nb, void 0 === hb || hb.value === (null === Gb || void 0 === Gb ? void 0 : Gb.value) ? Gb : null),
            qb = yb(Hb, Gb),
            ub = (bb, ab) => {
              const Ub = bb.findIndex(pb);
              return Ub >= 0 ? ab[Ub] : null
            },
            rb = null !== (Eb = null !== (vb = null === db || void 0 === db ? void 0 : db.rank) && void 0 !== vb ? vb : ub(Hb, qb)) && void 0 !== Eb ? Eb : ub(Nb, Qb);
          bb.font = "bold 34px 'Jetbrains Mono', monospace";
          const Kb = [...Wb ? Qb : [], ...Ib ? [] : qb],
            ob = Math.min(280, Math.max(0, ...Kb.map((ab => bb.measureText(Bb.format(ab)).width)))),
            lb = ob <= 80,
            tb = lb ? 80 : 32 + ob,
            wb = lb ? 148 : tb + 28,
            sb = 660 - wb;
          ib(`TOP ${Ab.n}  /  ALL TIME`, 24, 52, 28, zb, 976), ib(Rb ? String(null !== (Lb = ab.title) && void 0 !== Lb ? Lb : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Db, 976), ib("RANK", 32, 174, 28, zb, wb - 40), ib("PLAYER", wb, 174, 28, zb, sb), ib(Rb ? String(null !== (Pb = ab.scoreLabel) && void 0 !== Pb ? Pb : "Score").slice(0, 24) : "Score", 992, 174, 28, zb, 304, "right"), fb(202);
          const gb = (Tb - 232) / (Ab.n + eb + Yb),
            Cb = 208 + Ab.n * gb,
            Vb = Cb + eb * gb,
            Ob = (ab, Ub, Ab, Mb) => {
              const Tb = pb(ab);
              bb.fillStyle = Tb ? xb : Db, bb.globalAlpha = Tb ? .15 : Mb ? .035 : 0, bb.fillRect(24, Ab - gb / 2 + 1, 976, gb - 2), bb.globalAlpha = 1;
              const Eb = Tb ? xb : Db;
              ib(Bb.format(Ub), tb, Ab, 34, Eb, lb ? 80 : ob, lb ? "center" : "right"), ib(Rb ? String(ab.name).slice(0, 64) : "Player", wb, Ab, 34, Eb, sb);
              const Yb = Bb.format(ab.value);
              ib(bb.measureText(Yb).width > 304 ? ab.value.toExponential(6) : Yb, 992, Ab, 34, Eb, 304, "right")
            };
          if (Wb)
            for (const [Ab, Mb] of Nb.entries()) Ob(Mb, Qb[Ab], 208 + (Ab + .5) * gb, Ab % 2 === 0);
          else {
            const bb = "error" === Xb.status,
              ab = bb ? "Couldn't load leaderboard" : "ready" === Xb.status ? "No scores yet" : "Loading leaderboard\u2026",
              Ub = bb ? "Trying again shortly" : "ready" === Xb.status ? "Be the first on the board!" : "Fetching the top players",
              Ab = (208 + Cb) / 2;
            ib(ab, 512, Ab - 28, 40, bb ? Mb.E.redUiText : Db, 960, "center"), ib(Ub, 512, Ab + 27, 30, zb, 960, "center")
          }
          const cb = Cb + eb * gb / 2;
          if (null === rb) fb(cb);
          else {
            const ab = null === db ? 0 : db.tied - 1,
              Ub = `YOUR RANK #${Bb.format(rb)}${null===db?"":` of ${Bb.format(db.total)}`}`;
            bb.font = "bold 36px 'Jetbrains Mono', monospace";
            const Ab = Math.max(20, Math.min(36, Math.floor(34560 / bb.measureText(Ub).width)));
            ib(Ub, 512, cb - (ab > 0 ? 15 : 0), Ab, xb, 960, "center"), ab > 0 && ib(`Tied with ${Bb.format(ab)} other${1===ab?"":"s"}`, 512, cb + 24, 24, zb, 960, "center")
          }
          if (null === jb) return;
          const Jb = Vb + Yb * gb / 2;
          if (Ib) ib(`You're in the top ${Ab.n}!`, 512, Jb, 40, xb, 960, "center");
          else if (0 === Hb.length) ib("You're not on this board yet", 512, Jb, 34, zb, 960, "center");
          else
            for (const [Ab, Mb] of Hb.entries()) Ob(Mb, qb[Ab], Vb + (Ab + .5) * gb, Ab % 2 === 0)
        }(bb, vb, Lb, Eb.layoutHeight)
    }

    function kb(bb, ab) {
      return Array.isArray(bb) ? bb.slice(0, ab).filter((bb => bb && Number.isFinite(bb.rank) && Number.isFinite(bb.value))) : []
    }

    function yb(bb, ab) {
      const Ub = [];
      let Ab = !1;
      return bb.forEach(((Mb, Tb) => {
        if (null !== ab && Mb.value === ab.value) return void Ub.push(ab.rank);
        const Eb = Tb > 0 && Mb.value === bb[Tb - 1].value;
        Eb || (Ab = 0 === Tb && 1 !== Mb.rank), Ub.push(Eb && !Ab ? Ub[Tb - 1] : Mb.rank)
      })), Ub
    }
  },
  38175: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      f: () => Tb
    });
    const Ab = 32;

    function Mb(bb) {
      return Array.from(bb).length
    }

    function Tb(bb) {
      const ab = [""];
      let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Mb = "";
      const Tb = () => {
        ab.push(""), Ub = 0, Mb = ""
      };
      for (const Eb of bb.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Eb)) Tb();
        else if (/^\s+$/.test(Eb)) Mb += Eb;
      else if (Eb.length > 0) {
        const bb = Array.from(Eb);
        Ub > 0 && Ub + Mb.length + bb.length > Ab && Tb(), ab[ab.length - 1] += Mb, Ub += Mb.length, Mb = "";
        for (const Mb of bb) Ub >= Ab && Tb(), ab[ab.length - 1] += Mb, Ub++
      }
      return ab[ab.length - 1] += Mb, ab
    }
  },
  38401: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab = Ub(36042),
      Mb = Ub.n(Ab);
    const Tb = [1, 1, 1];

    function Eb(bb) {
      if (!bb) return [...Tb];
      try {
        const [ab, Ub, Ab] = Mb()(bb).rgb().array();
        return [ab / 255, Ub / 255, Ab / 255]
      } catch (ab) {
        return console.warn(`Invalid groundArrowPath colour "${bb}":`, ab), [...Tb]
      }
    }
  },
  33696: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      f: () => Yb,
      g: () => Eb,
      h: () => Mb,
      k: () => Ab
    });
    const Ab = {
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
      Mb = "/textures/dayNight/sun.png",
      Tb = "/textures/dayNight/moon.png",
      Eb = "/textures/dayNight/stars",
      Yb = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38471: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => vb,
      f: () => Lb,
      h: () => Ab,
      j: () => Bb,
      m: () => Mb,
      q: () => eb,
      u: () => Yb,
      w: () => Eb
    });
    const Ab = ["linear", "easeIn", "easeOut", "easeInOut"],
      Mb = ["movement", "camera", "cursor"],
      Tb = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Eb(bb, ab) {
      return Yb(bb, ab, Tb)
    }

    function Yb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (bb === ab || Number.isNaN(bb) && Number.isNaN(ab)) return !0;
      if ("object" !== typeof bb || "object" !== typeof ab || null === bb || null === ab || Array.isArray(bb) !== Array.isArray(ab)) return !1;
      const Ab = bb,
        Mb = ab;
      for (const Tb of new Set([...Object.keys(Ab), ...Object.keys(Mb)]))
        if (!Ub.includes(Tb) && !Yb(Ab[Tb], Mb[Tb])) return !1;
      return !0
    }
    const Bb = {
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
      eb = "^-[1-9][0-9]*$",
      vb = "^#[0-9a-fA-F]{6}$",
      Lb = "#000000"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);