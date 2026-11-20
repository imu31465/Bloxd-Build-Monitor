export const id = 201;
export const ids = [201];
export const modules = {
  39082: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      constructor(qq, Eq) {
        this.read = qq, this.apply = Eq, this.release = null
      }
      turn(qq, Eq) {
        const gq = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: Eq,
          forcedCameraDirection: [qq[0], qq[1], qq[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), Eq + 100),
          transitionMs: gq
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(qq) {
        null !== this.release && (clearTimeout(this.release.timer), qq && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38625: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      g: () => lq
    });
    const Yq = new Map;

    function lq(qq, Eq) {
      Yq.set(qq, Eq)
    }

    function Oq(qq) {
      return qq ? Yq.get(qq) : void 0
    }
  },
  39516: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    var Yq = gq(38202);

    function lq(qq, Eq, gq) {
      var lq, Oq, mq, xq, Aq, cq, uq;
      const Bq = (0, Yq.b)(qq, Eq, gq[0], gq[1], gq[2]),
        Wq = Bq ? null !== (lq = Bq.textCell) && void 0 !== lq ? lq : Bq.rect.anchor : gq,
        Nq = Eq(Wq[0], Wq[1], Wq[2]);
      return {
        pos: [gq[0], gq[1], gq[2]],
        noticeboardSpan: Bq && {
          width: Bq.rect.width,
          height: Bq.rect.height
        },
        text: null !== (Oq = null === Nq || void 0 === Nq || null === (mq = Nq.persisted) || void 0 === mq || null === (xq = mq.shared) || void 0 === xq ? void 0 : xq.text) && void 0 !== Oq ? Oq : "",
        textSize: null !== (Aq = null === Nq || void 0 === Nq || null === (cq = Nq.persisted) || void 0 === cq || null === (uq = cq.shared) || void 0 === uq ? void 0 : uq.textSize) && void 0 !== Aq ? Aq : null
      }
    }
  },
  38477: (qq, Eq, gq) => {
    function Yq(qq) {
      switch (qq.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    gq.d(Eq, {
      e: () => lq,
      g: () => Oq,
      h: () => Yq
    });
    const lq = 4,
      Oq = 3
  },
  39102: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      f: () => Oq
    });
    var Yq = gq(307);
    const lq = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class Oq {
      constructor(qq) {
        this.importGame = qq, this.loads = new Map, this.loaded = new Map
      }
      load(qq) {
        const Eq = (0, Yq.Yb)(qq);
        if (!lq.has(Eq)) return Promise.resolve(void 0);
        let gq = this.loads.get(Eq);
        return gq || (gq = this.importGame(Eq).then((qq => {
          const gq = qq.default;
          if ("function" !== typeof gq) throw new Error(`${Eq}'s client code has no default-exported factory`);
          return this.loaded.set(Eq, gq), gq
        })).catch((qq => {
          throw this.loads.delete(Eq), qq
        })), this.loads.set(Eq, gq)), gq
      }
      loadedFactory(qq) {
        const Eq = (0, Yq.Yb)(qq);
        if (!lq.has(Eq)) return;
        const gq = this.loaded.get(Eq);
        if (!gq) throw new Error(`${Eq}'s client code started before it loaded`);
        return gq
      }
    }
  },
  39523: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(9464),
      lq = gq(9301),
      Oq = gq(3166);

    function mq(qq) {
      if (qq === Yq.b) return 0;
      const Eq = (0, Oq.e)(qq);
      if (void 0 !== Eq && Eq <= lq.MAX_BLOCK_ID) return Eq;
      const gq = (0, Oq.e)(qq.split("|")[0]);
      if (void 0 !== gq && gq <= lq.MAX_BLOCK_ID && (0, lq.rootMetaDescOf)(gq) === qq) return gq;
      throw new Error(`Invalid block name. You sent ${qq}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39155: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq
    });
    var Yq = gq(24);
    class lq {
      constructor(qq) {
        this.screen = qq, this.hidesHud = !1
      }
      show(qq, Eq) {
        this.screen.setFade(qq.colour, qq.alpha), this.screen.setLetterbox(!0 === Eq.letterbox, qq.alpha < 1), this.setHudHidden(!0 === Eq.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(qq) {
        this.hidesHud !== qq && (this.hidesHud = qq, Yq.b.set({
          isUiHiddenByCamera: qq
        }))
      }
    }
  },
  39118: (qq, Eq, gq) => {
    gq.d(Eq, {
      C: () => uq,
      d: () => Yq,
      h: () => Wq,
      k: () => Bq,
      o: () => mq,
      p: () => aq,
      q: () => Aq,
      s: () => Vq,
      v: () => cq,
      z: () => xq
    });
    const Yq = Math.PI / 2 - .001,
      lq = 2 * Math.PI,
      Oq = 1e-9;

    function mq(qq, Eq) {
      Eq.heading = qq.heading, Eq.pitch = qq.pitch
    }

    function xq(qq, Eq) {
      const gq = Eq - qq;
      return gq - lq * Math.floor((gq + Math.PI) / lq)
    }

    function Aq(qq, Eq, gq) {
      return qq + xq(qq, Eq) * gq
    }

    function cq(qq) {
      if (!Number.isFinite(qq)) return qq;
      const Eq = qq - lq * Math.floor(qq / lq);
      return Eq < lq ? Eq : 0
    }

    function uq(qq, Eq) {
      return qq + xq(qq, Eq)
    }

    function Bq(qq) {
      return Math.max(-Yq, Math.min(Yq, qq))
    }

    function Wq(qq, Eq, gq) {
      const Yq = Math.cos(Eq);
      return gq[0] = Yq * Math.sin(qq), gq[1] = -Math.sin(Eq), gq[2] = Yq * Math.cos(qq), gq
    }

    function Nq(qq, Eq, gq, Yq) {
      const lq = Math.sqrt(qq * qq + gq * gq);
      return lq < Oq && Math.abs(Eq) < Oq || (lq >= Oq && (Yq.heading = Math.atan2(qq, gq)), Yq.pitch = Bq(Math.atan2(-Eq, lq) + 0)), Yq
    }

    function aq(qq, Eq) {
      return Nq(qq[0], qq[1], qq[2], Eq)
    }

    function Vq(qq, Eq, gq) {
      return Nq(Eq[0] - qq[0], Eq[1] - qq[1], Eq[2] - qq[2], gq)
    }
  },
  39147: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      f: () => lq
    });
    var Yq = gq(39118);

    function lq(qq) {
      var Eq;
      const gq = "default" === qq.mode ? "movement" : null !== (Eq = qq.playerFacing) && void 0 !== Eq ? Eq : "movement";
      return "cursor" === gq ? {
        facing: gq,
        mouseTurns: null
      } : {
        facing: gq,
        mouseTurns: "default" !== qq.mode && void 0 !== qq.playerLook ? "look" : "view"
      }
    }

    function Oq(qq, Eq, gq, lq, Oq, mq) {
      return mq.VJ = 0, mq.dJ = 0, mq.pointedAt = void 0, void 0 !== lq ? Oq ? (mq.pointedAt = lq, qq) : (0, Yq.v)(lq.heading) : Oq ? (mq.VJ = Eq, mq.dJ = gq, qq) : (0, Yq.v)(qq + Eq)
    }
  },
  39129: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Rq
    });
    var Yq = gq(39138),
      lq = gq(39118),
      Oq = gq(37042);

    function mq(qq, Eq, gq, Yq) {
      if (!(Yq > 0)) return Eq;
      const lq = Eq > qq ? Math.min(Eq, qq + gq / Yq) : Math.max(Eq, qq - gq / Yq);
      return Math.abs(Eq - lq) < 1e-9 ? Eq : lq
    }
    class xq {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Yq.h,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(qq) {
        !this.isGoingOut() && this.sinceTurnMs < Yq.m.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: qq
        } : (this.waiting = null, this.startOut(qq))
      }
      fadeIn(qq) {
        this.isGoingOut() ? this.sinceTurnMs < Yq.m.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: qq
        } : (this.waiting = null, this.startIn(qq)) : this.waiting = null
      }
      advance(qq) {
        const Eq = this.waiting;
        if (null === Eq) return this.step(qq);
        const gq = Yq.m.minFadeTurnMs - this.sinceTurnMs;
        if (gq > qq) return this.step(qq);
        const lq = this.step(gq);
        return this.waiting = null, "out" === Eq.turn ? this.startOut(Eq.transition) : this.startIn(Eq.minMs), this.step(qq - gq) || lq
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(qq) {
        ("in" === this.phase || null === this.phase && this.clearMs < Yq.m.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = qq.colour), this.outMs = qq.outMs, this.holdMs = qq.holdMs, this.inMs = qq.inMs
      }
      startIn(qq) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(qq, this.inMs)
      }
      step(qq) {
        const Eq = this.screen;
        this.sinceTurnMs += qq, null === this.phase && (this.clearMs += qq);
        let gq = !1,
          lq = qq;
        if ("out" === this.phase) {
          const Yq = (1 - Eq.alpha) * this.outMs;
          if (Eq.alpha = mq(Eq.alpha, 1, qq, this.outMs), Eq.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, lq = Math.max(0, qq - Yq), gq = !0
        }
        let Oq = qq;
        if ("hold" === this.phase) {
          this.heldMs += lq;
          const qq = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Yq.m.minFadeTurnMs);
          if (qq < 0 || gq) return gq;
          this.phase = "in", this.sinceTurnMs = qq, Oq = qq
        }
        return "in" === this.phase && (Eq.alpha = mq(Eq.alpha, 0, Oq, this.inMs), Eq.alpha <= 0 && (this.phase = null, this.clearMs = 0)), gq
      }
    }
    var Aq = gq(39115),
      cq = gq(39141),
      uq = gq(1870),
      Bq = gq(36626);

    function Wq(qq, Eq) {
      for (let gq = 0; gq < Eq.length; gq++) Eq[gq] = qq[gq]
    }

    function Nq(qq, Eq) {
      var gq;
      return null !== (gq = qq.fov) && void 0 !== gq ? gq : Eq.getDefaultFov()
    }

    function aq(qq, Eq, gq, Yq, lq) {
      const Oq = 2 / Yq,
        mq = Math.exp(-Oq * lq);
      for (let xq = 0; xq < qq.length; xq++) {
        const Yq = qq[xq] - gq[xq],
          Aq = (Eq[xq] + Oq * Yq) * lq;
        qq[xq] = gq[xq] + (Yq + Aq) * mq, Eq[xq] = (Eq[xq] - Oq * Aq) * mq
      }
    }
    class Vq {
      constructor(qq, Eq, gq, Yq) {
        var Oq, mq, xq, Aq, cq;
        this.settings = qq, this.kB = Eq, this.targets = gq, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.JV = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, lq.v)((0, uq.j)(null !== (Oq = qq.viewHeading) && void 0 !== Oq ? Oq : 0)),
          pitch: (0, lq.k)((0, uq.j)(null !== (mq = qq.viewElevation) && void 0 !== mq ? mq : 45))
        }, this.closestDistance = null !== (xq = qq.closestDistance) && void 0 !== xq ? xq : Math.min(6, null !== (Aq = qq.furthestDistance) && void 0 !== Aq ? Aq : 1 / 0), this.furthestDistance = null !== (cq = qq.furthestDistance) && void 0 !== cq ? cq : Math.max(64, this.closestDistance);
        const Bq = (0, lq.h)(this.base.heading, this.base.pitch, this.forward),
          Wq = Yq.position,
          Nq = this.closestDistance;
        this.goal = [Wq[0] + Bq[0] * Nq, Wq[1] + Bq[1] * Nq, Wq[2] + Bq[2] * Nq, Nq, this.base.heading, this.base.pitch]
      }
      update(qq, Eq, gq) {
        var Yq, Oq;
        this.placeGoal(null !== (Yq = this.settings.fov) && void 0 !== Yq ? Yq : this.kB.getBaseFov()), this.goal[4] = (0, lq.C)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const mq = null !== (Oq = this.settings.smoothMs) && void 0 !== Oq ? Oq : 400;
        !this.started || mq < 1 ? (Wq(this.goal, this.smoothed), this.JV.fill(0), this.started = !0) : aq(this.smoothed, this.JV, this.goal, mq, qq), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, lq.k)(this.smoothed[5]), Eq.apply(this.angles, gq);
        const xq = (0, lq.h)(gq.heading, gq.pitch, this.forward);
        for (let lq = 0; lq < 3; lq++) gq.position[lq] = this.smoothed[lq] - xq[lq] * this.smoothed[3];
        gq.fov = Nq(this.settings, this.kB)
      }
      continueFrom(qq) {
        qq instanceof Vq && (Wq(qq.goal, this.goal), Wq(qq.smoothed, this.smoothed), Wq(qq.JV, this.JV), this.framedTargets = qq.framedTargets, this.started = qq.started)
      }
      reset() {
        this.JV.fill(0), this.started = !1
      }
      placeGoal(qq) {
        var Eq;
        let gq = 0;
        for (const uq of this.settings.targets) {
          const qq = this.targets.currentAimPoint(uq);
          qq && (0, Aq.g)(qq, this.pointAt(gq++))
        }
        if (gq > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const qq = this.targets.aimPoint(this.kB.localPlayerId);
          qq && (0, Aq.g)(qq, this.pointAt(gq++))
        }
        const Yq = this.goal;
        if (0 === gq) return void(Yq[3] = this.withinDistances(Yq[3]));
        for (let Aq = 0; Aq < 3; Aq++) {
          let qq = 1 / 0,
            Eq = -1 / 0;
          for (let Yq = 0; Yq < gq; Yq++) qq = Math.min(qq, this.points[Yq][Aq]), Eq = Math.max(Eq, this.points[Yq][Aq]);
          Yq[Aq] = (qq + Eq) / 2
        }
        let lq = 0;
        for (let Aq = 0; Aq < gq; Aq++) {
          const qq = this.points[Aq];
          lq = Math.max(lq, Math.hypot(qq[0] - Yq[0], qq[1] - Yq[1], qq[2] - Yq[2]))
        }
        const Oq = Math.tan((0, uq.j)(qq) / 2),
          mq = Math.atan(Oq * (!0 === this.settings.letterbox ? Bq.c : 1)),
          xq = Math.atan(Oq * this.kB.getAspectRatio()),
          cq = (lq + (null !== (Eq = this.settings.padding) && void 0 !== Eq ? Eq : 2)) / Math.sin(Math.min(mq, xq));
        Yq[3] = this.withinDistances(cq)
      }
      withinDistances(qq) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, qq))
      }
      pointAt(qq) {
        return qq === this.points.length && this.points.push([0, 0, 0]), this.points[qq]
      }
    }
    class dq {
      constructor(qq) {
        this.limits = qq, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(qq) {
        this.limits && (this.yawOffset = qq.yawOffset, this.pitchOffset = qq.pitchOffset, this.idleMs = qq.idleMs)
      }
      update(qq, Eq) {
        const gq = this.limits;
        if (!gq) return;
        const Yq = Number.isFinite(Eq.VJ) ? Eq.VJ : 0,
          lq = Number.isFinite(Eq.dJ) ? Eq.dJ : 0;
        if (Eq.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: Eq.pointedAt.heading,
          pitch: Eq.pointedAt.pitch
        };
        else if (0 !== Yq || 0 !== lq) this.idleMs = 0, this.yawOffset += Yq, this.pitchOffset += lq;
        else {
          const Eq = Math.max(0, this.idleMs + qq - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += qq, void 0 !== gq.returnMs && Eq > 0) {
            const qq = gq.returnMs > 0 ? Math.exp(-3 * Eq / gq.returnMs) : 0;
            this.yawOffset *= qq, this.pitchOffset *= qq
          }
        }
        this.clampOffsets(gq)
      }
      clampOffsets(qq) {
        if (qq.maxYaw >= 180) this.yawOffset = (0, lq.z)(0, this.yawOffset);
        else {
          const Eq = (0, uq.j)(qq.maxYaw);
          this.yawOffset = Math.max(-Eq, Math.min(Eq, this.yawOffset))
        }
        const Eq = (0, uq.j)(qq.maxPitch);
        this.pitchOffset = Math.max(-Eq, Math.min(Eq, this.pitchOffset))
      }
      apply(qq, Eq) {
        this.pointedAt && this.limits && (this.yawOffset = (0, lq.z)(qq.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - qq.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const gq = (0, lq.k)(qq.pitch + this.pitchOffset);
        this.pitchOffset = gq - qq.pitch, Eq.heading = (0, lq.v)(qq.heading + this.yawOffset), Eq.pitch = gq
      }
      unapply(qq, Eq) {
        Eq.heading = (0, lq.v)(qq.heading - this.yawOffset), Eq.pitch = (0, lq.k)(qq.pitch - this.pitchOffset)
      }
    }
    const jq = 1e-6;

    function Hq(qq) {
      return Math.sqrt(qq[0] * qq[0] + qq[1] * qq[1] + qq[2] * qq[2])
    }

    function oq(qq, Eq, gq, Yq, lq) {
      const Oq = lq * lq,
        mq = Oq * lq;
      return (2 * mq - 3 * Oq + 1) * qq + (mq - 2 * Oq + lq) * Eq + (-2 * mq + 3 * Oq) * gq + (mq - Oq) * Yq
    }

    function Pq(qq, Eq, gq, Yq, lq) {
      const Oq = lq * lq;
      return (6 * Oq - 6 * lq) * qq + (3 * Oq - 4 * lq + 1) * Eq + (-6 * Oq + 6 * lq) * gq + (3 * Oq - 2 * lq) * Yq
    }

    function Qq(qq, Eq) {
      const gq = Eq[0] - qq[0],
        Yq = Eq[1] - qq[1],
        lq = Eq[2] - qq[2];
      return Math.sqrt(gq * gq + Yq * Yq + lq * lq)
    }

    function yq(qq, Eq, gq, Yq, lq, Oq) {
      for (let mq = 0; mq < 3; mq++) Oq[mq] = lq ? qq[mq] * Yq : gq[mq] - Eq[mq];
      return lq && function(qq, Eq) {
        const gq = Hq(qq);
        if (gq > Eq) {
          const Yq = Eq / gq;
          qq[0] *= Yq, qq[1] *= Yq, qq[2] *= Yq
        }
      }(Oq, 3 * Qq(Eq, gq)), Oq
    }

    function tq(qq, Eq, gq, Yq) {
      for (let lq = 0; lq < 3; lq++) Yq[lq] = 6 * (Eq[lq] - qq[lq]) - 2 * gq[lq];
      if (Hq(Yq) < jq)
        for (let lq = 0; lq < 3; lq++) Yq[lq] = Eq[lq] - qq[lq];
      return Yq
    }

    function rq(qq, Eq) {
      return [2 * Eq[0] - qq[0], 2 * Eq[1] - qq[1], 2 * Eq[2] - qq[2]]
    }

    function vq(qq, Eq, gq, Yq, lq, Oq, mq) {
      if (!Oq && !mq) return 0;
      const xq = Oq ? qq : 2 * Eq - gq,
        Aq = mq ? gq : 2 * Eq - qq,
        cq = Oq ? Yq : lq,
        uq = mq ? lq : Yq,
        Bq = (Eq - xq) / cq,
        Wq = (Aq - Eq) / uq;
      if (Bq * Wq <= 0) return 0;
      const Nq = (Aq - xq) / (cq + uq),
        aq = 3 * Math.min(Math.abs(Bq), Math.abs(Wq));
      return Math.max(-aq, Math.min(aq, Nq))
    }

    function hq(qq, Eq, gq, Yq, lq, Oq, mq) {
      const {
        u: xq,
        segmentMs: Aq
      } = qq;
      if (!qq.curved) return gq + (Yq - gq) * xq;
      return oq(gq, vq(Eq, gq, Yq, qq.beforeMs, Aq, Oq, !0) * Aq, Yq, vq(gq, Yq, lq, Aq, qq.afterMs, !0, mq) * Aq, xq)
    }

    function nq(qq) {
      return Math.abs(qq.pitch) >= lq.d
    }
    class bq {
      constructor(qq, Eq, gq, Yq, lq) {
        this.nodes = qq, this.prevNodes = gq, this.nextNodes = Yq, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = qq.map(((qq, gq) => this.nodeTangent(Eq, lq, gq)))
      }
      sample(qq, Eq, gq) {
        const {
          index: Yq,
          toIndex: Oq,
          segmentMs: mq,
          curved: xq
        } = qq, Aq = this.fromAngles, cq = this.toAngles, uq = this.nodeAngles(Yq, gq.position, Eq, Aq), Bq = this.nodeAngles(Oq, gq.position, Eq, cq);
        if (mq > 0 && "aim" !== uq && "aim" !== Bq && this.liveTangent(qq, Aq)) return gq.heading = (0, lq.v)(Aq.heading), void(gq.pitch = Aq.pitch);
        if ("none" === uq && "none" === Bq) return;
        !xq && mq > 0 && ("tangent" === uq && this.liveTangent(qq, Aq), "tangent" === Bq && this.liveTangent(qq, cq)), "none" === uq ? (0, lq.o)(cq, Aq) : "none" === Bq && (0, lq.o)(Aq, cq);
        const Wq = xq && qq.beforeIndex >= 0 && "none" !== this.nodeAngles(qq.beforeIndex, gq.position, Eq, this.beforeAngles),
          Nq = xq && qq.afterIndex >= 0 && "none" !== this.nodeAngles(qq.afterIndex, gq.position, Eq, this.afterAngles),
          aq = (0, lq.C)(Aq.heading, cq.heading),
          Vq = hq(qq, Wq ? (0, lq.C)(Aq.heading, this.beforeAngles.heading) : 0, Aq.heading, aq, Nq ? (0, lq.C)(aq, this.afterAngles.heading) : 0, Wq, Nq);
        gq.heading = (0, lq.v)(Vq), gq.pitch = (0, lq.k)(hq(qq, this.beforeAngles.pitch, Aq.pitch, cq.pitch, this.afterAngles.pitch, Wq, Nq))
      }
      nodeAngles(qq, Eq, gq, Yq) {
        const lq = this.rawNodeAngles(qq, Eq, gq, Yq);
        return "none" !== lq && nq(Yq) && !this.borrowHeading(this.prevNodes[qq], Eq, gq, Yq) && this.borrowHeading(this.nextNodes[qq], Eq, gq, Yq), lq
      }
      borrowHeading(qq, Eq, gq, Yq) {
        const lq = this.borrowedAngles;
        return !(qq < 0 || "none" === this.rawNodeAngles(qq, Eq, gq, lq) || nq(lq)) && (Yq.heading = lq.heading, !0)
      }
      rawNodeAngles(qq, Eq, gq, Yq) {
        const Oq = this.nodes[qq].keyframe;
        if (Oq.lookDirection) return (0, lq.p)(Oq.lookDirection, Yq), "aim";
        if (void 0 !== Oq.lookAt) {
          const qq = gq(Oq.lookAt);
          if (qq) return (0, lq.s)(Eq, qq, Yq), "aim"
        }
        const mq = this.tangents[qq];
        return mq ? ((0, lq.o)(mq, Yq), "tangent") : "none"
      }
      liveTangent(qq, Eq) {
        const gq = this.nodes[qq.index].position,
          Yq = this.nodes[qq.toIndex].position,
          Oq = this.derivative;
        for (let lq = 0; lq < 3; lq++) Oq[lq] = Pq(gq[lq], qq.fromTangent[lq], Yq[lq], qq.toTangent[lq], qq.u);
        return Hq(Oq) > 1e-9 ? ((0, lq.p)(Oq, Eq), !0) : !(Qq(gq, Yq) < jq) && ((0, lq.p)(tq(gq, Yq, qq.u < .5 ? qq.toTangent : qq.fromTangent, Oq), Eq), !0)
      }
      nodeTangent(qq, Eq, gq) {
        var Yq;
        const Oq = qq[gq];
        if (Hq(Oq) > 1e-9) return (0, lq.p)(Oq, {
          heading: 0,
          pitch: 0
        });
        const mq = null !== (Yq = this.restDirectionTo(gq, gq + 1, qq, Eq)) && void 0 !== Yq ? Yq : this.restDirectionTo(gq, gq - 1, qq, Eq);
        return mq ? (0, lq.p)(mq, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(qq, Eq, gq, Yq) {
        const lq = this.nodes[qq],
          Oq = this.nodes[Eq];
        if (!Oq || Qq(lq.position, Oq.position) < jq) return null;
        const [mq, xq] = Eq > qq ? [lq, Oq] : [Oq, lq], Aq = yq(gq[Eq], mq.position, xq.position, xq.timeMs - mq.timeMs, Yq, [0, 0, 0]);
        return tq(mq.position, xq.position, Aq, [0, 0, 0])
      }
    }

    function iq(qq, Eq) {
      const gq = qq.lookDirection || Eq.lookDirection ? function(qq, Eq) {
        if (!qq || !Eq) return qq === Eq;
        const gq = Hq(qq),
          Yq = Hq(Eq);
        return Math.hypot(qq[0] / gq - Eq[0] / Yq, qq[1] / gq - Eq[1] / Yq, qq[2] / gq - Eq[2] / Yq) < jq
      }(qq.lookDirection, Eq.lookDirection) : (Yq = qq.lookAt, lq = Eq.lookAt, "object" !== typeof Yq || "object" !== typeof lq ? Yq === lq : Qq(Yq, lq) < jq);
      var Yq, lq;
      return Qq(qq.position, Eq.position) < jq && qq.fov === Eq.fov && gq
    }
    class Zq {
      constructor(qq, Eq, gq) {
        if (this.smooth = Eq, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === qq.length) throw new Error("A camera path needs at least one keyframe");
        for (let Oq = 1; Oq < qq.length; Oq++)
          if (!(qq[Oq].timeMs > qq[Oq - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = qq.map((qq => {
          var Eq;
          return {
            timeMs: qq.timeMs,
            position: [...qq.position],
            keyframe: qq,
            easing: (0, Oq.r)(null !== (Eq = qq.easing) && void 0 !== Eq ? Eq : "linear")
          }
        }));
        const Yq = this.nodes[0],
          lq = this.nodes[this.nodes.length - 1],
          mq = gq && this.nodes.length > 1;
        mq && !iq(Yq.keyframe, lq.keyframe) && this.nodes.push({
          ...Yq,
          timeMs: lq.timeMs + (lq.timeMs - Yq.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = mq ? this.nodes[this.nodes.length - 1].timeMs - Yq.timeMs : 0, this.prevNodes = this.nodes.map(((qq, Eq) => this.neighbour(Eq, -1))), this.nextNodes = this.nodes.map(((qq, Eq) => this.neighbour(Eq, 1))), this.prevGaps = this.prevNodes.map(((qq, Eq) => qq >= 0 ? this.gapMs(Eq, -1) : 0)), this.nextGaps = this.nextNodes.map(((qq, Eq) => qq >= 0 ? this.gapMs(Eq, 1) : 0)), this.velocities = this.nodes.map(((qq, Eq) => {
          const gq = this.prevNodes[Eq],
            Yq = this.nextNodes[Eq];
          return function(qq, Eq, gq, Yq, lq, Oq) {
            if (Oq[0] = 0, Oq[1] = 0, Oq[2] = 0, !qq && !gq) return Oq;
            const mq = null !== qq && void 0 !== qq ? qq : rq(null !== gq && void 0 !== gq ? gq : Eq, Eq),
              xq = null !== gq && void 0 !== gq ? gq : rq(null !== qq && void 0 !== qq ? qq : Eq, Eq),
              Aq = qq ? Yq : lq,
              cq = gq ? lq : Yq,
              uq = Qq(mq, Eq),
              Bq = Qq(Eq, xq);
            if (uq < jq || Bq < jq) return Oq;
            const Wq = Math.sqrt(uq),
              Nq = Math.sqrt(Bq),
              aq = (Wq + Nq) / (Aq + cq);
            for (let Vq = 0; Vq < 3; Vq++) {
              const qq = (Eq[Vq] - mq[Vq]) / Wq - (xq[Vq] - mq[Vq]) / (Wq + Nq) + (xq[Vq] - Eq[Vq]) / Nq;
              Oq[Vq] = qq * aq
            }
            return Oq
          }(gq >= 0 ? this.nodes[gq].position : null, qq.position, Yq >= 0 ? this.nodes[Yq].position : null, this.prevGaps[Eq], this.nextGaps[Eq], [0, 0, 0])
        })), this.aim = new bq(this.nodes, this.velocities, this.prevNodes, this.nextNodes, Eq)
      }
      sample(qq, Eq, gq, Yq) {
        const lq = this.findSegment(this.pathTime(qq));
        this.samplePosition(lq, Yq.position), this.aim.sample(lq, Eq, Yq);
        const {
          beforeIndex: Oq,
          afterIndex: mq
        } = lq;
        Yq.fov = hq(lq, Oq >= 0 ? this.fovAt(Oq, gq) : 0, this.fovAt(lq.index, gq), this.fovAt(lq.toIndex, gq), mq >= 0 ? this.fovAt(mq, gq) : 0, Oq >= 0, mq >= 0)
      }
      pathTime(qq) {
        const Eq = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || qq <= Eq) return qq;
        const gq = qq - Eq;
        return Eq + gq - this.loopMs * Math.floor(gq / this.loopMs)
      }
      findSegment(qq) {
        const Eq = this.nodes,
          gq = this.segment;
        let Yq = gq.index;
        for (qq < Eq[Yq].timeMs && (Yq = 0); Yq < Eq.length - 2 && Eq[Yq + 1].timeMs <= qq;) Yq++;
        const lq = Math.min(Yq + 1, Eq.length - 1),
          mq = Eq[lq].timeMs - Eq[Yq].timeMs;
        return gq.index = Yq, gq.toIndex = lq, gq.segmentMs = mq, gq.u = mq > 0 ? (0, Oq.o)((qq - Eq[Yq].timeMs) / mq, Eq[Yq].easing) : 1, gq.curved = this.smooth && mq > 0, gq.beforeIndex = this.prevNodes[Yq], gq.afterIndex = this.nextNodes[lq], gq.beforeMs = this.prevGaps[Yq], gq.afterMs = this.nextGaps[lq], gq
      }
      samplePosition(qq, Eq) {
        const {
          fromTangent: gq,
          toTangent: Yq,
          curved: lq
        } = qq, Oq = this.nodes[qq.index].position, mq = this.nodes[qq.toIndex].position;
        yq(this.velocities[qq.index], Oq, mq, qq.segmentMs, lq, gq), yq(this.velocities[qq.toIndex], Oq, mq, qq.segmentMs, lq, Yq);
        const xq = qq.u;
        for (let Aq = 0; Aq < 3; Aq++) Eq[Aq] = lq ? oq(Oq[Aq], gq[Aq], mq[Aq], Yq[Aq], xq) : Oq[Aq] + (mq[Aq] - Oq[Aq]) * xq
      }
      fovAt(qq, Eq) {
        var gq;
        return null !== (gq = this.nodes[qq].keyframe.fov) && void 0 !== gq ? gq : Eq
      }
      neighbour(qq, Eq) {
        const gq = this.nodes.length - 1,
          Yq = qq + Eq;
        return Yq >= 0 && Yq <= gq ? Yq : this.loopMs <= 0 || gq < 2 ? -1 : Yq < 0 ? gq - 1 : 1
      }
      gapMs(qq, Eq) {
        const gq = this.nodes.length - 1;
        if (1 === Eq) {
          const Eq = qq === gq ? 0 : qq;
          return this.nodes[Eq + 1].timeMs - this.nodes[Eq].timeMs
        }
        const Yq = 0 === qq ? gq : qq;
        return this.nodes[Yq].timeMs - this.nodes[Yq - 1].timeMs
      }
    }
    class fq {
      constructor(qq) {
        this.kB = qq, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Eq => qq.getEntityPosition(Eq), this.readAimPoint = Eq => qq.getEntityAimPoint(Eq)
      }
      aimPoint(qq) {
        return "string" !== typeof qq ? (0, Aq.q)(qq, 3) ? qq : null : this.resolve(qq, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(qq) {
        const Eq = "string" === typeof qq ? this.kB.getEntityAimPoint(qq) : qq;
        return Eq && (0, Aq.q)(Eq, 3) ? Eq : null
      }
      feetPosition(qq) {
        return this.resolve(qq, this.readFeet, this.lastFeet)
      }
      heading(qq) {
        const Eq = this.kB.getEntityHeading(qq);
        if (null !== Eq && Number.isFinite(Eq)) return this.lastHeadings.set(qq, Eq), Eq;
        const gq = this.lastHeadings.get(qq);
        return void 0 !== gq ? gq : qq === this.kB.localPlayerId ? 0 : this.heading(this.kB.localPlayerId)
      }
      resolve(qq, Eq, gq) {
        const Yq = Eq(qq);
        let lq = gq.get(qq);
        return Yq && (0, Aq.q)(Yq, 3) ? (lq || (lq = [0, 0, 0], gq.set(qq, lq)), lq[0] = Yq[0], lq[1] = Yq[1], lq[2] = Yq[2], lq) : lq || (qq === this.kB.localPlayerId ? null : this.resolve(this.kB.localPlayerId, Eq, gq))
      }
    }

    function Mq(qq) {
      return {
        heading: qq.heading,
        pitch: qq.pitch
      }
    }

    function Tq(qq, Eq) {
      Number.isFinite(qq.heading) && Number.isFinite(qq.pitch) || (0, lq.o)(Eq, qq)
    }

    function zq(qq, Eq, gq, Yq, Oq) {
      if (Eq) return void(0, lq.p)(Eq, Oq);
      const mq = Yq.aimPoint(gq);
      mq && (0, lq.s)(qq, mq, Oq)
    }
    class Sq {
      constructor(qq, Eq, gq, Yq) {
        this.settings = qq, this.kB = Eq, this.targets = gq, this.base = void 0, this.base = Mq(Yq)
      }
      update(qq, Eq, gq) {
        var Yq;
        const lq = this.settings;
        (0, Aq.g)(lq.position, gq.position), zq(lq.position, lq.lookDirection, null !== (Yq = lq.lookAt) && void 0 !== Yq ? Yq : this.kB.localPlayerId, this.targets, this.base), Eq.apply(this.base, gq), gq.fov = Nq(lq, this.kB)
      }
      continueFrom(qq) {
        qq instanceof Sq && (0, lq.o)(qq.base, this.base)
      }
      reset(qq) {
        Tq(this.base, qq)
      }
    }
    class pq {
      constructor(qq, Eq, gq, Yq) {
        this.settings = qq, this.kB = Eq, this.targets = gq, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.JV = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = Mq(Yq), this.goal = [...Yq.position]
      }
      update(qq, Eq, gq) {
        var Yq, lq, Oq;
        const mq = this.settings,
          xq = null !== (Yq = mq.target) && void 0 !== Yq ? Yq : this.kB.localPlayerId,
          cq = this.targets.feetPosition(xq);
        let uq = !1;
        cq && (uq = this.foundFeet && Qq(this.lastFeet, cq) > 32 + .1 * qq, (0, Aq.g)(cq, this.lastFeet), this.foundFeet = !0, this.placeGoal(cq, xq));
        const Bq = null !== (lq = mq.smoothMs) && void 0 !== lq ? lq : 0;
        !this.started || Bq < 1 || uq ? ((0, Aq.g)(this.goal, this.smoothed), this.JV.fill(0), this.started = !0) : aq(this.smoothed, this.JV, this.goal, Bq, qq), uq && (this.distance = -1), (0, Aq.g)(this.smoothed, gq.position);
        const Wq = !0 === mq.avoidTerrain ? this.pullIn(xq, qq, gq) : 1;
        let Vq = this.goal;
        if ("target" === mq.offsetSpace) Vq = gq.position;
        else if (Wq < 1) {
          Vq = this.aimOrigin;
          for (let qq = 0; qq < 3; qq++) Vq[qq] = gq.position[qq] + (this.goal[qq] - this.smoothed[qq]) * Wq
        }
        zq(Vq, mq.lookDirection, null !== (Oq = mq.lookAt) && void 0 !== Oq ? Oq : xq, this.targets, this.base), Eq.apply(this.base, gq), gq.fov = Nq(mq, this.kB)
      }
      continueFrom(qq) {
        qq instanceof pq && (0, Yq.v)(qq.settings.target, this.settings.target) && ((0, lq.o)(qq.base, this.base), (0, Aq.g)(qq.goal, this.goal), (0, Aq.g)(qq.lastFeet, this.lastFeet), this.foundFeet = qq.foundFeet, (0, Aq.g)(qq.smoothed, this.smoothed), (0, Aq.g)(qq.JV, this.JV), this.started = qq.started, !0 === qq.settings.avoidTerrain && (this.distance = qq.distance))
      }
      reset(qq) {
        Tq(this.base, qq), this.JV.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(qq, Eq, gq) {
        const Yq = this.targets.aimPoint(qq);
        if (!Yq) return 1;
        const lq = gq.position,
          Oq = Qq(Yq, lq);
        if (!(Oq > 0)) return 1;
        const mq = this.toCamera;
        for (let Aq = 0; Aq < 3; Aq++) mq[Aq] = (lq[Aq] - Yq[Aq]) / Oq;
        const xq = function(qq, Eq, gq) {
          return qq < 0 || Eq < qq ? Eq : Eq + (qq - Eq) * Math.exp(-gq / 150)
        }(this.distance, function(qq, Eq, gq, Yq) {
          const lq = qq.raycastTerrain(Eq, gq, Yq);
          return null !== lq && Number.isFinite(lq) ? Math.min(Yq, Math.max(0, lq - .2)) : Yq
        }(this.kB, Yq, mq, Oq), Eq);
        if (Oq - xq < .001) return this.distance = -1, 1;
        this.distance = xq;
        for (let Aq = 0; Aq < 3; Aq++) lq[Aq] = Yq[Aq] + mq[Aq] * xq;
        return xq / Oq
      }
      placeGoal(qq, Eq) {
        const gq = this.settings.offset;
        let Yq = gq[0],
          lq = gq[2];
        if ("target" === this.settings.offsetSpace) {
          const qq = this.targets.heading(Eq),
            Oq = Math.cos(qq),
            mq = Math.sin(qq);
          Yq = gq[0] * Oq + gq[2] * mq, lq = -gq[0] * mq + gq[2] * Oq
        }
        this.goal[0] = qq[0] + Yq, this.goal[1] = qq[1] + gq[1], this.goal[2] = qq[2] + lq
      }
    }
    class Gq {
      constructor(qq, Eq, gq, Yq) {
        var lq, Oq;
        this.settings = qq, this.kB = Eq, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = qq.keyframes.length > 0 ? new Zq(qq.keyframes, null === (lq = qq.smooth) || void 0 === lq || lq, null !== (Oq = qq.loop) && void 0 !== Oq && Oq) : null, this.base = (0, Aq.e)(Yq, (0, Aq.j)()), this.resolveTarget = qq => gq.aimPoint(qq)
      }
      update(qq, Eq, gq) {
        this.elapsedMs += qq;
        const Yq = Nq(this.settings, this.kB);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Yq, this.base) : this.base.fov = Yq, (0, Aq.g)(this.base.position, gq.position), gq.fov = this.base.fov, Eq.apply(this.base, gq)
      }
      continueFrom(qq) {
        qq instanceof Gq && (0, Yq.v)(qq.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = qq.elapsedMs, (0, Aq.e)(qq.base, this.base))
      }
      reset(qq) {
        Tq(this.base, qq), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function Lq(qq, Eq) {
      return (0, Yq.y)(qq, Eq)
    }
    class Jq {
      constructor(qq, Eq, gq) {
        var Yq;
        this.settings = qq, this.kB = Eq, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const lq = null !== gq && gq.settings.mode === qq.mode,
          Oq = lq ? gq.pose : Eq.getDefaultPose();
        this.pose = (0, Aq.e)(Oq, (0, Aq.j)()), this.lastGoodPose = (0, Aq.e)(lq ? gq.lastGoodPose : Oq, (0, Aq.j)()), this.look = new dq(qq.playerLook), this.targets = null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.targets) && void 0 !== Yq ? Yq : new fq(Eq);
        const mq = (0, Aq.e)(Oq, (0, Aq.j)());
        lq && gq.look.unapply(mq, mq), this.mode = function(qq, Eq, gq, Yq) {
          switch (qq.mode) {
            case "fixed":
              return new Sq(qq, Eq, gq, Yq);
            case "follow":
              return new pq(qq, Eq, gq, Yq);
            case "path":
              return new Gq(qq, Eq, gq, Yq);
            case "frame":
              return new Vq(qq, Eq, gq, Yq)
          }
        }(qq, Eq, this.targets, mq), lq && (this.look.continueFrom(gq.look), this.mode.continueFrom(gq.mode))
      }
      update(qq, Eq) {
        return this.look.update(qq, Eq), this.mode.update(qq, this.look, this.pose), (0, Aq.m)(this.pose) ? (0, Aq.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, Aq.e)(this.lastGoodPose, this.pose), this.mode.reset((0, Aq.m)(this.lastGoodPose) ? this.lastGoodPose : this.kB.getDefaultPose())), this.pose
      }
    }

    function kq(qq) {
      return [0, 0, qq[2], qq[3]]
    }
    class Rq {
      constructor(qq) {
        this.kB = qq, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new xq, this.shot = null, this.blend = null, this.mixed = (0, Aq.j)(), this.output = (0, Aq.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(qq) {
        const Eq = (0, cq.b)(qq);
        if ((0, Yq.v)(Eq, this.pending ? this.pending.settings : this.settings)) return;
        const gq = Lq(this.settings, Eq);
        if (void 0 !== Eq.transition && !gq) return this.pending = {
          settings: Eq,
          shot: "default" === Eq.mode ? null : new Jq(Eq, this.kB, null)
        }, void this.fade.fadeOut(Eq.transition);
        const lq = null !== this.pending;
        this.pending = null, !lq && gq || this.fade.fadeIn(Yq.m.minTransitionFadeMs), this.show(Eq, !1)
      }
      show(qq, Eq) {
        var gq, lq;
        if ((0, Yq.v)(qq, this.settings)) return;
        const mq = !Eq && Lq(this.settings, qq);
        this.settings = qq;
        const xq = null !== this.blend && this.blend.elapsedMs > 0,
          cq = (0, Aq.e)(this.hasOutput ? this.output : this.kB.getDefaultPose(), (0, Aq.j)());
        if (this.shot = "default" === qq.mode ? null : new Jq(qq, this.kB, Eq ? null : this.shot), mq) return;
        const uq = Eq || !this.shot && !this.hasOutput ? 0 : null !== (gq = qq.blendInMs) && void 0 !== gq ? gq : 0;
        if (uq <= 0) return void(this.blend = null);
        const Bq = (0, Oq.r)(null !== (lq = qq.blendEasing) && void 0 !== lq ? lq : "easeInOut");
        this.blend = {
          from: cq,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: uq,
          easing: xq ? kq(Bq) : Bq
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
      update(qq, Eq) {
        const gq = Number.isFinite(qq) && qq > 0 ? qq : 0;
        if (this.fade.advance(gq) && null !== this.pending) {
          const {
            settings: qq
          } = this.pending;
          this.pending = null, this.show(qq, !0)
        }
        this.loadingPositions.length = 0;
        const Yq = this.pending;
        if (null !== Yq && void 0 !== Yq && Yq.shot) {
          const qq = "path" === Yq.settings.mode ? 0 : gq;
          this.noteLoadingPosition(Yq.shot.update(qq, Aq.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const mq = this.shot ? this.shot.update(gq, Eq) : this.kB.getDefaultPose();
        this.shot && this.noteLoadingPosition(mq.position);
        const xq = this.blend;
        if (!xq) return this.writeOutput(mq);
        xq.elapsedMs += gq;
        const cq = Math.min(1, xq.elapsedMs / xq.durationMs);
        if (xq.headingDelta = Number.isFinite(xq.headingDelta) ? (0, lq.C)(xq.headingDelta, mq.heading - xq.from.heading) : (0, lq.z)(xq.from.heading, mq.heading), (0, Aq.s)(xq.from, mq, xq.headingDelta, (0, Oq.o)(cq, xq.easing), this.mixed), cq >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else xq.fromScripted && this.noteLoadingPosition(xq.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(qq) {
        if (qq.every(Number.isFinite)) {
          const Eq = this.loadingPositions;
          Eq.push((0, Aq.g)(qq, this.loadingSlots[Eq.length]))
        }
      }
      writeOutput(qq) {
        const Eq = this.output;
        (0, Aq.m)(qq) ? (0, Aq.e)(qq, Eq) : this.hasOutput || (0, Aq.e)(this.kB.getDefaultPose(), Eq), Eq.pitch = (0, lq.k)(Eq.pitch);
        const gq = this.kB.getDefaultFov(),
          Oq = Number.isFinite(gq) && gq > 0 && gq < 180,
          mq = Oq ? Math.min(Yq.m.minFov, gq) : Yq.m.minFov,
          xq = Oq ? Math.max(Yq.m.maxFov, gq) : Yq.m.maxFov;
        return Eq.fov = Number.isFinite(Eq.fov) ? Math.min(xq, Math.max(mq, Eq.fov)) : xq, this.hasOutput = !0, Eq
      }
    }
  },
  39115: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      e: () => xq,
      g: () => mq,
      j: () => Oq,
      m: () => cq,
      q: () => Aq,
      s: () => uq
    });
    var Yq = gq(39118);
    const lq = {
      VJ: 0,
      dJ: 0
    };

    function Oq() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function mq(qq, Eq) {
      return Eq[0] = qq[0], Eq[1] = qq[1], Eq[2] = qq[2], Eq
    }

    function xq(qq, Eq) {
      return mq(qq.position, Eq.position), Eq.heading = qq.heading, Eq.pitch = qq.pitch, Eq.fov = qq.fov, Eq
    }

    function Aq(qq, Eq) {
      return Array.isArray(qq) && qq.length === Eq && qq.every(Number.isFinite)
    }

    function cq(qq) {
      return Aq(qq.position, 3) && Number.isFinite(qq.heading) && Number.isFinite(qq.pitch) && Number.isFinite(qq.fov)
    }

    function uq(qq, Eq, gq, lq, Oq) {
      for (let Yq = 0; Yq < 3; Yq++) Oq.position[Yq] = qq.position[Yq] + (Eq.position[Yq] - qq.position[Yq]) * lq;
      return Oq.heading = (0, Yq.v)(qq.heading + gq * lq), Oq.pitch = qq.pitch + (Eq.pitch - qq.pitch) * lq, Oq.fov = qq.fov + (Eq.fov - qq.fov) * lq, Oq
    }
  },
  39141: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => tq,
      c: () => Wq
    });
    var Yq = gq(39138),
      lq = gq(39115);
    const Oq = Yq.l,
      mq = Yq.q;

    function xq(qq, Eq, gq, Yq) {
      return Number.isFinite(qq) ? Math.min(gq, Math.max(Eq, qq)) : Yq
    }

    function Aq(qq, Eq, gq) {
      return void 0 !== qq && Number.isFinite(qq) ? Math.min(gq, Math.max(Eq, qq)) : void 0
    }

    function cq(qq) {
      const Eq = Yq.m.maxCoordinate;
      return [Math.min(Eq, Math.max(-Eq, qq[0])), Math.min(Eq, Math.max(-Eq, qq[1])), Math.min(Eq, Math.max(-Eq, qq[2]))]
    }

    function uq(qq) {
      return "string" === typeof qq ? qq : (0, lq.q)(qq, 3) ? cq(qq) : void 0
    }
    const Bq = new RegExp(Yq.u);

    function Wq(qq) {
      return "string" === typeof qq && Bq.test(qq)
    }

    function Nq(qq) {
      const Eq = [];
      if (!Array.isArray(qq)) return Eq;
      for (const gq of qq.slice(0, Yq.m.maxFrameTargets)) {
        const qq = uq(gq);
        void 0 === qq || "string" === typeof qq && !Wq(qq) || Eq.push(qq)
      }
      return Eq
    }

    function aq(qq) {
      if (!(0, lq.q)(qq, 3)) return;
      const Eq = Math.max(Math.abs(qq[0]), Math.abs(qq[1]), Math.abs(qq[2])),
        gq = Math.hypot(qq[0] / Eq, qq[1] / Eq, qq[2] / Eq);
      return 0 === Eq || Eq * gq < Yq.m.minDirectionLength ? void 0 : [qq[0] / Eq / gq, qq[1] / Eq / gq, qq[2] / Eq / gq]
    }

    function Vq(qq) {
      if (void 0 !== qq) return "string" === typeof qq ? Oq.includes(qq) ? qq : void 0 : (0, lq.q)(qq, 4) ? [xq(qq[0], 0, 1, 0), xq(qq[1], Yq.m.minEasingY, Yq.m.maxEasingY, 0), xq(qq[2], 0, 1, 1), xq(qq[3], Yq.m.minEasingY, Yq.m.maxEasingY, 1)] : "linear"
    }

    function dq(qq) {
      if (qq) return {
        maxYaw: xq(qq.maxYaw, 0, Yq.m.maxPlayerLook, 0),
        maxPitch: xq(qq.maxPitch, 0, Yq.m.maxPlayerLook, 0),
        returnMs: Aq(qq.returnMs, 0, Yq.m.maxReturnMs)
      }
    }
    const jq = new RegExp(Yq.d);

    function Hq(qq) {
      var Eq;
      if ("object" !== typeof qq || null === qq) return;
      const gq = Yq.m.maxTransitionMs,
        lq = Yq.m.minTransitionFadeMs;
      return {
        colour: "string" === typeof qq.colour && jq.test(qq.colour) ? qq.colour : Yq.h,
        outMs: xq(qq.outMs, lq, gq, lq),
        holdMs: xq(null !== (Eq = qq.holdMs) && void 0 !== Eq ? Eq : 0, 0, gq, 0),
        inMs: xq(qq.inMs, lq, gq, lq)
      }
    }

    function oq(qq) {
      return !0 === qq || void 0
    }

    function Pq(qq) {
      if ("object" !== typeof qq || null === qq) return !1;
      const Eq = qq.lookAt;
      return Number.isFinite(qq.timeMs) && (0, lq.q)(qq.position, 3) && (void 0 === Eq || "string" === typeof Eq || (0, lq.q)(Eq, 3))
    }

    function Qq(qq) {
      return {
        ...qq,
        timeMs: xq(qq.timeMs, 0, Yq.m.maxPathMs, 0),
        position: cq(qq.position),
        lookAt: uq(qq.lookAt),
        lookDirection: aq(qq.lookDirection),
        fov: Aq(qq.fov, Yq.m.minFov, Yq.m.maxFov),
        easing: Vq(qq.easing)
      }
    }

    function yq(qq) {
      const Eq = [];
      if (!Array.isArray(qq)) return Eq;
      for (const gq of qq.slice(0, Yq.m.maxKeyframes)) {
        if (!Pq(gq)) continue;
        const qq = Qq(gq);
        (0 === Eq.length || qq.timeMs > Eq[Eq.length - 1].timeMs) && Eq.push(qq)
      }
      return Eq
    }

    function tq(qq) {
      if ("object" !== typeof qq || null === qq) return {
        mode: "default"
      };
      const Eq = {
          blendInMs: Aq(qq.blendInMs, 0, Yq.m.maxBlendInMs),
          blendEasing: Vq(qq.blendEasing),
          transition: Hq(qq.transition),
          letterbox: oq(qq.letterbox),
          hideHud: oq(qq.hideHud)
        },
        gq = {
          mode: "default",
          ...Eq
        };
      if ("default" === qq.mode || "fixed" === qq.mode && !(0, lq.q)(qq.position, 3)) return gq;
      const Oq = {
        ...Eq,
        fov: Aq(qq.fov, Yq.m.minFov, Yq.m.maxFov),
        playerFacing: (Bq = qq.playerFacing, mq.includes(Bq) ? Bq : void 0),
        playerLook: dq(qq.playerLook)
      };
      var Bq, Wq;
      switch (qq.mode) {
        case "fixed":
          return {
            ...qq, ...Oq, position: cq(qq.position), lookAt: uq(qq.lookAt), lookDirection: aq(qq.lookDirection)
          };
        case "follow":
          return {
            ...qq, ...Oq, target: "string" === typeof qq.target ? qq.target : void 0, lookAt: uq(qq.lookAt), offset: (Wq = qq.offset, Array.isArray(Wq) ? [xq(Wq[0], -Yq.m.maxOffset, Yq.m.maxOffset, 0), xq(Wq[1], -Yq.m.maxOffset, Yq.m.maxOffset, 0), xq(Wq[2], -Yq.m.maxOffset, Yq.m.maxOffset, 0)] : [0, 0, 0]), lookDirection: aq(qq.lookDirection), smoothMs: Aq(qq.smoothMs, 0, Yq.m.maxSmoothMs)
          };
        case "path":
          return {
            ...qq, ...Oq, keyframes: yq(qq.keyframes)
          };
        case "frame":
          return {
            ...qq, ...Oq, targets: Nq(qq.targets), viewHeading: Aq(qq.viewHeading, -Yq.m.maxFrameHeading, Yq.m.maxFrameHeading), viewElevation: Aq(qq.viewElevation, 0, Yq.m.maxFrameElevation), padding: Aq(qq.padding, 0, Yq.m.maxFrameDistance), closestDistance: Aq(qq.closestDistance, 0, Yq.m.maxFrameDistance), furthestDistance: Aq(qq.furthestDistance, 0, Yq.m.maxFrameDistance), smoothMs: Aq(qq.smoothMs, 0, Yq.m.maxSmoothMs)
          };
        default:
          return gq
      }
    }
  },
  38638: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq
    });
    var Yq = gq(1214);

    function lq(qq) {
      const Eq = /(\d*\.?\d+)px/.exec(qq);
      return Eq ? Number(Eq[1]) : null
    }

    function Oq(qq) {
      return qq.split(/[\s,]+/).pop()
    }
    let mq = !1;
    const xq = {
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
      drawText: function(qq, Eq, Yq, xq, Aq, cq) {
        if (Aq <= 0 || cq <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: uq,
          fontVariant: Bq,
          fontWeight: Wq,
          fontSize: Nq,
          font: aq
        } = this, Vq = [uq, Bq, Wq, `${Nq}px`, aq].filter(Boolean).join(" "), dq = [
          [Wq, `${Nq}px`, Oq(aq)].filter(Boolean).join(" "), `${Nq}px sans-serif`
        ], jq = qq.font, Hq = function(qq, Eq, gq) {
          for (const Yq of Eq) {
            qq.font = Yq;
            const Eq = lq(qq.font),
              mq = Oq(Yq);
            if (null !== Eq && Math.abs(Eq - gq) <= .5 && qq.font.toLowerCase().includes(mq.toLowerCase())) return Yq
          }
          return null
        }(qq, [Vq, ...dq], Nq);
        Hq !== Vq && function(qq, Eq, Yq) {
          mq || (mq = !0, Promise.resolve().then((() => gq(1046))).then((gq => {
            let {
              lV: lq
            } = gq;
            lq(new Error("A canvas didn't take canvasTxt's font"), {
              font: qq,
              jN: Eq,
              drawnWith: null !== Yq && void 0 !== Yq ? Yq : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Vq, jq, Hq);
        const oq = lq(qq.font);
        if (null === Hq && null !== oq && oq > 0) {
          const gq = Nq / oq;
          qq.save();
          try {
            return qq.scale(gq, gq), {
              height: this.drawLines(qq, Eq, Yq / gq, xq / gq, Aq / gq, cq / gq, oq).height * gq
            }
          } finally {
            qq.restore()
          }
        }
        return this.drawLines(qq, Eq, Yq, xq, Aq, cq, Nq)
      },
      drawLines: function(qq, Eq, gq, lq, Oq, mq, xq) {
        const Aq = gq + Oq,
          cq = lq + mq;
        let uq, Bq = lq + mq / 2 + xq / 2;
        "right" === this.align ? (uq = Aq, qq.textAlign = "right") : "left" === this.align ? (uq = gq, qq.textAlign = "left") : (uq = gq + Oq / 2, qq.textAlign = "center");
        for (const Yq of Eq) {
          qq.measureText(Yq).width >= Oq && (Eq = Eq.replace(Yq, ""))
        }
        Eq = (0, Yq.W)(Eq);
        const Wq = [],
          Nq = Eq.split("\n"),
          aq = this.justify ? qq.measureText("\u200a").width : 0;
        Nq.forEach((Eq => {
          let gq = qq.measureText(Eq).width;
          if (gq <= Oq) Wq.push(Eq);
          else {
            let Yq = Eq;
            const lq = Oq;
            let mq, xq, Aq;
            for (gq = qq.measureText(Yq).width; gq > lq;) {
              for (mq = 0, xq = 0, Aq = ""; xq < lq;) mq++, Aq = Yq.substr(0, mq), xq = qq.measureText(Aq).width;
              mq--, Aq = Aq.substr(0, mq);
              const Eq = mq;
              if (" " !== Yq.substr(mq, 1)) {
                for (;
                  " " !== Yq.substr(mq, 1) && 0 !== mq;) mq--;
                0 === mq && (mq = Eq), Aq = Yq.substr(0, mq)
              }
              Aq = this.justify ? this.justifyLine(qq, Aq, aq, "\u200a", Oq) : Aq, Yq = Yq.substr(mq), gq = qq.measureText(Yq).width, Wq.push(Aq)
            }
            gq > 0 && Wq.push(Yq)
          }
        }));
        const Vq = this.lineHeight ? this.lineHeight : this.getTextHeight(qq, Eq),
          dq = Vq * (Wq.length - 1),
          jq = dq / 2;
        let Hq = lq;
        "top" === this.vAlign ? Bq = lq + xq : "bottom" === this.vAlign ? (Bq = cq - dq, Hq = cq) : (Hq = lq + mq / 2, Bq -= jq), Wq.forEach((Eq => {
          Eq = Eq.trim(), qq.fillText(Eq, uq, Bq), Bq += Vq
        })), this.debug && (qq.lineWidth = 3, qq.strokeStyle = "#00909e", qq.strokeRect(gq, lq, Oq, mq), qq.lineWidth = 2, qq.strokeStyle = "#f6d743", qq.beginPath(), qq.moveTo(uq, lq), qq.lineTo(uq, cq), qq.stroke(), qq.strokeStyle = "#ff6363", qq.beginPath(), qq.moveTo(gq, Hq), qq.lineTo(Aq, Hq), qq.stroke());
        return {
          height: dq + Vq
        }
      },
      getTextHeight: function(qq, Eq) {
        const gq = qq.textBaseline;
        qq.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Yq
        } = qq.measureText(Eq);
        return qq.textBaseline = gq, Yq
      },
      justifyLine: function(qq, Eq, gq, Yq, lq) {
        const Oq = Eq.trim(),
          mq = qq.measureText(Oq).width,
          xq = Oq.split(/\s+/).length - 1,
          Aq = Math.floor((lq - mq) / gq);
        if (xq <= 0 || Aq <= 0) return Oq;
        const cq = Math.floor(Aq / xq);
        let uq = Aq - xq * cq,
          Bq = [];
        for (let Wq = 0; Wq < cq; Wq++) Bq.push(Yq);
        Bq = Bq.join("");
        return Oq.replace(/\s+/g, (qq => {
          const Eq = uq > 0 ? Bq + Yq : Bq;
          return uq--, qq + Eq
        }))
      }
    }
  },
  39080: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return Eq.set(qq), Eq
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  38642: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Vq,
      g: () => aq,
      k: () => Wq,
      l: () => uq,
      n: () => Bq
    });
    var Yq = gq(4096),
      lq = gq(307);
    const Oq = 1024,
      mq = 1536,
      xq = 2 * Yq.j + 1,
      Aq = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      cq = 1.5;

    function uq(qq, Eq, gq) {
      if ("string" !== typeof qq) return Eq;
      try {
        const gq = JSON.parse(qq);
        return gq && "object" === typeof gq ? gq : Eq
      } catch (Yq) {
        return void 0 !== gq && console.error(`Couldn't parse ${gq}`, Yq), Eq
      }
    }

    function Bq(qq) {
      return uq(qq, null, "a leaderboard's rows")
    }

    function Wq(qq, Eq) {
      var gq, Yq;
      return null !== Eq && void 0 !== Eq ? Eq : {
        status: null !== (gq = qq.status) && void 0 !== gq ? gq : "loading",
        entries: null !== (Yq = qq.entries) && void 0 !== Yq ? Yq : []
      }
    }

    function Nq(qq, Eq) {
      return "number" === typeof qq && Number.isFinite(qq) && qq > 0 ? qq : Eq
    }

    function aq(qq, Eq) {
      const gq = Nq(qq.size, 1);
      let Yq = Nq(qq.width, Nq(2.5 * gq, 2.5)),
        lq = Nq(qq.height, Nq(3.75 * gq, 3.75));
      Number.isFinite(Oq * lq / Yq) && Number.isFinite(mq * Yq / lq) || (Yq = 2.5, lq = 3.75);
      const xq = lq / Yq,
        Aq = Math.max(1, Math.min(Oq, Eq / xq));
      return {
        width: Yq,
        height: lq,
        layoutWidth: Math.max(Oq, mq / xq),
        layoutHeight: Math.max(mq, Oq * xq),
        pixelWidth: Math.round(Aq),
        pixelHeight: Math.round(Math.max(1, Math.min(Eq, Aq * xq)))
      }
    }

    function Vq(qq, Eq, gq, mq, uq, Bq) {
      qq.setTransform(1, 0, 0, 1, 0, 0), qq.fillStyle = lq.M.defaultNameTagBackground, qq.fillRect(0, 0, Eq, gq), qq.scale(Eq / mq.layoutWidth, gq / mq.layoutHeight), qq.translate((mq.layoutWidth - Oq) / 2, 0),
        function(qq, Eq, gq, Oq) {
          var mq, uq, Bq, Wq;
          const {
            top: Nq,
            around: aq,
            showPlayerText: Vq,
            localPlayerDbId: Hq
          } = gq, {
            whiteUiText: oq,
            grayUiText: Pq,
            yellowUiText: Qq
          } = lq.M;
          qq.textBaseline = "middle";
          const yq = function(Eq, gq, Yq, lq, Oq, mq) {
              let xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              qq.font = `bold ${lq}px 'Jetbrains Mono', monospace`, qq.fillStyle = Oq, qq.textAlign = xq;
              let Aq = Eq.replace(/[\r\n\t]/g, " ");
              if (qq.measureText(Aq).width > mq) {
                for (; Aq.length > 0 && qq.measureText(`${Aq}\u2026`).width > mq;) Aq = Aq.slice(0, -1);
                Aq += "\u2026"
              }
              qq.fillText(Aq, gq, Yq)
            },
            tq = Eq => {
              qq.fillStyle = oq, qq.globalAlpha = .15, qq.fillRect(24, Eq, 976, 2), qq.globalAlpha = 1
            },
            rq = null === Hq ? null : (0, lq.wc)(Hq),
            vq = qq => null !== rq && qq.playerHash === rq,
            hq = dq(Nq.entries, Yq.k),
            nq = "ready" === Nq.status && hq.length > 0,
            bq = null === aq ? [] : dq(aq.entries, xq),
            iq = hq.some(vq),
            Zq = null === aq ? null : function(qq) {
              const Eq = qq;
              if (!Eq || !Number.isFinite(Eq.rank) || !Number.isFinite(Eq.tied) || !Number.isFinite(Eq.total)) return null;
              return Eq
            }(aq.standing),
            fq = bq.find(vq),
            Mq = hq.find(vq),
            Tq = null === Zq || void 0 === fq ? null : {
              value: fq.value,
              rank: Zq.rank
            },
            zq = jq(hq, void 0 === Mq || Mq.value === (null === Tq || void 0 === Tq ? void 0 : Tq.value) ? Tq : null),
            Sq = jq(bq, Tq),
            pq = (qq, Eq) => {
              const gq = qq.findIndex(vq);
              return gq >= 0 ? Eq[gq] : null
            },
            Gq = null !== (mq = null !== (uq = null === Zq || void 0 === Zq ? void 0 : Zq.rank) && void 0 !== uq ? uq : pq(bq, Sq)) && void 0 !== mq ? mq : pq(hq, zq);
          qq.font = "bold 34px 'Jetbrains Mono', monospace";
          const Lq = [...nq ? zq : [], ...iq ? [] : Sq],
            Jq = Math.min(280, Math.max(0, ...Lq.map((Eq => qq.measureText(Aq.format(Eq)).width)))),
            kq = Jq <= 80,
            Rq = kq ? 80 : 32 + Jq,
            Uq = kq ? 148 : Rq + 28,
            Fq = 660 - Uq;
          yq(`TOP ${Yq.k}  /  ALL TIME`, 24, 52, 28, Pq, 976), yq(Vq ? String(null !== (Bq = Eq.title) && void 0 !== Bq ? Bq : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, oq, 976), yq("RANK", 32, 174, 28, Pq, Uq - 40), yq("PLAYER", Uq, 174, 28, Pq, Fq), yq(Vq ? String(null !== (Wq = Eq.scoreLabel) && void 0 !== Wq ? Wq : "Score").slice(0, 24) : "Score", 992, 174, 28, Pq, 304, "right"), tq(202);
          const sq = (Oq - 232) / (Yq.k + cq + xq),
            Xq = 208 + Yq.k * sq,
            wq = Xq + cq * sq,
            Kq = (Eq, gq, Yq, lq) => {
              const Oq = vq(Eq);
              qq.fillStyle = Oq ? Qq : oq, qq.globalAlpha = Oq ? .15 : lq ? .035 : 0, qq.fillRect(24, Yq - sq / 2 + 1, 976, sq - 2), qq.globalAlpha = 1;
              const mq = Oq ? Qq : oq;
              yq(Aq.format(gq), Rq, Yq, 34, mq, kq ? 80 : Jq, kq ? "center" : "right"), yq(Vq ? String(Eq.name).slice(0, 64) : "Player", Uq, Yq, 34, mq, Fq);
              const xq = Aq.format(Eq.value);
              yq(qq.measureText(xq).width > 304 ? Eq.value.toExponential(6) : xq, 992, Yq, 34, mq, 304, "right")
            };
          if (nq)
            for (const [Yq, lq] of hq.entries()) Kq(lq, zq[Yq], 208 + (Yq + .5) * sq, Yq % 2 === 0);
          else {
            const qq = "error" === Nq.status,
              Eq = qq ? "Couldn't load leaderboard" : "ready" === Nq.status ? "No scores yet" : "Loading leaderboard\u2026",
              gq = qq ? "Trying again shortly" : "ready" === Nq.status ? "Be the first on the board!" : "Fetching the top players",
              Yq = (208 + Xq) / 2;
            yq(Eq, 512, Yq - 28, 40, qq ? lq.M.redUiText : oq, 960, "center"), yq(gq, 512, Yq + 27, 30, Pq, 960, "center")
          }
          const Cq = Xq + cq * sq / 2;
          if (null === Gq) tq(Cq);
          else {
            const Eq = null === Zq ? 0 : Zq.tied - 1,
              gq = `YOUR RANK #${Aq.format(Gq)}${null===Zq?"":` of ${Aq.format(Zq.total)}`}`;
            qq.font = "bold 36px 'Jetbrains Mono', monospace";
            const Yq = Math.max(20, Math.min(36, Math.floor(34560 / qq.measureText(gq).width)));
            yq(gq, 512, Cq - (Eq > 0 ? 15 : 0), Yq, Qq, 960, "center"), Eq > 0 && yq(`Tied with ${Aq.format(Eq)} other${1===Eq?"":"s"}`, 512, Cq + 24, 24, Pq, 960, "center")
          }
          if (null === aq) return;
          const Iq = wq + xq * sq / 2;
          if (iq) yq(`You're in the top ${Yq.k}!`, 512, Iq, 40, Qq, 960, "center");
          else if (0 === bq.length) yq("You're not on this board yet", 512, Iq, 34, Pq, 960, "center");
          else
            for (const [Yq, lq] of bq.entries()) Kq(lq, Sq[Yq], wq + (Yq + .5) * sq, Yq % 2 === 0)
        }(qq, uq, Bq, mq.layoutHeight)
    }

    function dq(qq, Eq) {
      return Array.isArray(qq) ? qq.slice(0, Eq).filter((qq => qq && Number.isFinite(qq.rank) && Number.isFinite(qq.value))) : []
    }

    function jq(qq, Eq) {
      const gq = [];
      let Yq = !1;
      return qq.forEach(((lq, Oq) => {
        if (null !== Eq && lq.value === Eq.value) return void gq.push(Eq.rank);
        const mq = Oq > 0 && lq.value === qq[Oq - 1].value;
        mq || (Yq = 0 === Oq && 1 !== lq.rank), gq.push(mq && !Yq ? gq[Oq - 1] : lq.rank)
      })), gq
    }
  },
  38817: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq,
      e: () => Oq
    });
    const Yq = 32;

    function lq(qq) {
      return Array.from(qq).length
    }

    function Oq(qq) {
      const Eq = [""];
      let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        lq = "";
      const Oq = () => {
        Eq.push(""), gq = 0, lq = ""
      };
      for (const mq of qq.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(mq)) Oq();
        else if (/^\s+$/.test(mq)) lq += mq;
      else if (mq.length > 0) {
        const qq = Array.from(mq);
        gq > 0 && gq + lq.length + qq.length > Yq && Oq(), Eq[Eq.length - 1] += lq, gq += lq.length, lq = "";
        for (const lq of qq) gq >= Yq && Oq(), Eq[Eq.length - 1] += lq, gq++
      }
      return Eq[Eq.length - 1] += lq, Eq
    }
  },
  39077: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(36687),
      lq = gq.n(Yq);
    const Oq = [1, 1, 1];

    function mq(qq) {
      if (!qq) return [...Oq];
      try {
        const [Eq, gq, Yq] = lq()(qq).rgb().array();
        return [Eq / 255, gq / 255, Yq / 255]
      } catch (Eq) {
        return console.warn(`Invalid groundArrowPath colour "${qq}":`, Eq), [...Oq]
      }
    }
  },
  34293: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      f: () => xq,
      g: () => mq,
      j: () => lq,
      k: () => Yq
    });
    const Yq = {
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
      lq = "/textures/dayNight/sun.png",
      Oq = "/textures/dayNight/moon.png",
      mq = "/textures/dayNight/stars",
      xq = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39138: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      h: () => Bq,
      l: () => Yq,
      m: () => Aq,
      q: () => lq,
      u: () => cq,
      v: () => xq,
      y: () => mq
    });
    const Yq = ["linear", "easeIn", "easeOut", "easeInOut"],
      lq = ["movement", "camera", "cursor"],
      Oq = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function mq(qq, Eq) {
      return xq(qq, Eq, Oq)
    }

    function xq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (qq === Eq || Number.isNaN(qq) && Number.isNaN(Eq)) return !0;
      if ("object" !== typeof qq || "object" !== typeof Eq || null === qq || null === Eq || Array.isArray(qq) !== Array.isArray(Eq)) return !1;
      const Yq = qq,
        lq = Eq;
      for (const Oq of new Set([...Object.keys(Yq), ...Object.keys(lq)]))
        if (!gq.includes(Oq) && !xq(Yq[Oq], lq[Oq])) return !1;
      return !0
    }
    const Aq = {
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
      cq = "^-[1-9][0-9]*$",
      uq = "^#[0-9a-fA-F]{6}$",
      Bq = "#000000"
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);