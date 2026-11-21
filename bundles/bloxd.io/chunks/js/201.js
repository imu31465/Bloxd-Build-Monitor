export const id = 201;
export const ids = [201];
export const modules = {
  39274: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    class pd {
      constructor(dd, Jd) {
        this.read = dd, this.apply = Jd, this.release = null
      }
      turn(dd, Jd) {
        const kd = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: Jd,
          forcedCameraDirection: [dd[0], dd[1], dd[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), Jd + 100),
          transitionMs: kd
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(dd) {
        null !== this.release && (clearTimeout(this.release.timer), dd && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38785: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      i: () => Nd
    });
    const pd = new Map;

    function Nd(dd, Jd) {
      pd.set(dd, Jd)
    }

    function Wd(dd) {
      return dd ? pd.get(dd) : void 0
    }
  },
  39709: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    var pd = kd(38392);

    function Nd(dd, Jd, kd) {
      var Nd, Wd, Pd, Zd, gd, Cd, Kd;
      const od = (0, pd.e)(dd, Jd, kd[0], kd[1], kd[2]),
        ld = od ? null !== (Nd = od.textCell) && void 0 !== Nd ? Nd : od.rect.anchor : kd,
        Qd = Jd(ld[0], ld[1], ld[2]);
      return {
        pos: [kd[0], kd[1], kd[2]],
        noticeboardSpan: od && {
          width: od.rect.width,
          height: od.rect.height
        },
        text: null !== (Wd = null === Qd || void 0 === Qd || null === (Pd = Qd.persisted) || void 0 === Pd || null === (Zd = Pd.shared) || void 0 === Zd ? void 0 : Zd.text) && void 0 !== Wd ? Wd : "",
        textSize: null !== (gd = null === Qd || void 0 === Qd || null === (Cd = Qd.persisted) || void 0 === Cd || null === (Kd = Cd.shared) || void 0 === Kd ? void 0 : Kd.textSize) && void 0 !== gd ? gd : null
      }
    }
  },
  38642: (dd, Jd, kd) => {
    function pd(dd) {
      switch (dd.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    kd.d(Jd, {
      c: () => Nd,
      d: () => Wd,
      e: () => pd
    });
    const Nd = 4,
      Wd = 3
  },
  39292: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      e: () => Wd
    });
    var pd = kd(313);
    const Nd = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class Wd {
      constructor(dd) {
        this.importGame = dd, this.loads = new Map, this.loaded = new Map
      }
      load(dd) {
        const Jd = (0, pd._b)(dd);
        if (!Nd.has(Jd)) return Promise.resolve(void 0);
        let kd = this.loads.get(Jd);
        return kd || (kd = this.importGame(Jd).then((dd => {
          const kd = dd.default;
          if ("function" !== typeof kd) throw new Error(`${Jd}'s client code has no default-exported factory`);
          return this.loaded.set(Jd, kd), kd
        })).catch((dd => {
          throw this.loads.delete(Jd), dd
        })), this.loads.set(Jd, kd)), kd
      }
      loadedFactory(dd) {
        const Jd = (0, pd._b)(dd);
        if (!Nd.has(Jd)) return;
        const kd = this.loaded.get(Jd);
        if (!kd) throw new Error(`${Jd}'s client code started before it loaded`);
        return kd
      }
    }
  },
  39712: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd
    });
    var pd = kd(9422),
      Nd = kd(9252),
      Wd = kd(3130);

    function Pd(dd) {
      if (dd === pd.d) return 0;
      const Jd = (0, Wd.c)(dd);
      if (void 0 !== Jd && Jd <= Nd.MAX_BLOCK_ID) return Jd;
      const kd = (0, Wd.c)(dd.split("|")[0]);
      if (void 0 !== kd && kd <= Nd.MAX_BLOCK_ID && (0, Nd.rootMetaDescOf)(kd) === dd) return kd;
      throw new Error(`Invalid block name. You sent ${dd}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39344: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    var pd = kd(22);
    class Nd {
      constructor(dd) {
        this.screen = dd, this.hidesHud = !1
      }
      show(dd, Jd) {
        this.screen.setFade(dd.colour, dd.alpha), this.screen.setLetterbox(!0 === Jd.letterbox, dd.alpha < 1), this.setHudHidden(!0 === Jd.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(dd) {
        this.hidesHud !== dd && (this.hidesHud = dd, pd.d.set({
          isUiHiddenByCamera: dd
        }))
      }
    }
  },
  39312: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => Kd,
      c: () => pd,
      f: () => ld,
      i: () => od,
      j: () => Pd,
      n: () => Ld,
      q: () => gd,
      u: () => Od,
      w: () => Cd,
      z: () => Zd
    });
    const pd = Math.PI / 2 - .001,
      Nd = 2 * Math.PI,
      Wd = 1e-9;

    function Pd(dd, Jd) {
      Jd.heading = dd.heading, Jd.pitch = dd.pitch
    }

    function Zd(dd, Jd) {
      const kd = Jd - dd;
      return kd - Nd * Math.floor((kd + Math.PI) / Nd)
    }

    function gd(dd, Jd, kd) {
      return dd + Zd(dd, Jd) * kd
    }

    function Cd(dd) {
      if (!Number.isFinite(dd)) return dd;
      const Jd = dd - Nd * Math.floor(dd / Nd);
      return Jd < Nd ? Jd : 0
    }

    function Kd(dd, Jd) {
      return dd + Zd(dd, Jd)
    }

    function od(dd) {
      return Math.max(-pd, Math.min(pd, dd))
    }

    function ld(dd, Jd, kd) {
      const pd = Math.cos(Jd);
      return kd[0] = pd * Math.sin(dd), kd[1] = -Math.sin(Jd), kd[2] = pd * Math.cos(dd), kd
    }

    function Qd(dd, Jd, kd, pd) {
      const Nd = Math.sqrt(dd * dd + kd * kd);
      return Nd < Wd && Math.abs(Jd) < Wd || (Nd >= Wd && (pd.heading = Math.atan2(dd, kd)), pd.pitch = od(Math.atan2(-Jd, Nd) + 0)), pd
    }

    function Ld(dd, Jd) {
      return Qd(dd[0], dd[1], dd[2], Jd)
    }

    function Od(dd, Jd, kd) {
      return Qd(Jd[0] - dd[0], Jd[1] - dd[1], Jd[2] - dd[2], kd)
    }
  },
  39335: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      c: () => Nd
    });
    var pd = kd(39312);

    function Nd(dd) {
      var Jd;
      const kd = "default" === dd.mode ? "movement" : null !== (Jd = dd.playerFacing) && void 0 !== Jd ? Jd : "movement";
      return "cursor" === kd ? {
        facing: kd,
        mouseTurns: null
      } : {
        facing: kd,
        mouseTurns: "default" !== dd.mode && void 0 !== dd.playerLook ? "look" : "view"
      }
    }

    function Wd(dd, Jd, kd, Nd, Wd, Pd) {
      return Pd.bY = 0, Pd.fY = 0, Pd.pointedAt = void 0, void 0 !== Nd ? Wd ? (Pd.pointedAt = Nd, dd) : (0, pd.w)(Nd.heading) : Wd ? (Pd.bY = Jd, Pd.fY = kd, dd) : (0, pd.w)(dd + Jd)
    }
  },
  39319: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => cd
    });
    var pd = kd(39326),
      Nd = kd(39312),
      Wd = kd(37150);

    function Pd(dd, Jd, kd, pd) {
      if (!(pd > 0)) return Jd;
      const Nd = Jd > dd ? Math.min(Jd, dd + kd / pd) : Math.max(Jd, dd - kd / pd);
      return Math.abs(Jd - Nd) < 1e-9 ? Jd : Nd
    }
    class Zd {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: pd.h,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(dd) {
        !this.isGoingOut() && this.sinceTurnMs < pd.o.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: dd
        } : (this.waiting = null, this.startOut(dd))
      }
      fadeIn(dd) {
        this.isGoingOut() ? this.sinceTurnMs < pd.o.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: dd
        } : (this.waiting = null, this.startIn(dd)) : this.waiting = null
      }
      advance(dd) {
        const Jd = this.waiting;
        if (null === Jd) return this.step(dd);
        const kd = pd.o.minFadeTurnMs - this.sinceTurnMs;
        if (kd > dd) return this.step(dd);
        const Nd = this.step(kd);
        return this.waiting = null, "out" === Jd.turn ? this.startOut(Jd.transition) : this.startIn(Jd.minMs), this.step(dd - kd) || Nd
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(dd) {
        ("in" === this.phase || null === this.phase && this.clearMs < pd.o.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = dd.colour), this.outMs = dd.outMs, this.holdMs = dd.holdMs, this.inMs = dd.inMs
      }
      startIn(dd) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(dd, this.inMs)
      }
      step(dd) {
        const Jd = this.screen;
        this.sinceTurnMs += dd, null === this.phase && (this.clearMs += dd);
        let kd = !1,
          Nd = dd;
        if ("out" === this.phase) {
          const pd = (1 - Jd.alpha) * this.outMs;
          if (Jd.alpha = Pd(Jd.alpha, 1, dd, this.outMs), Jd.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, Nd = Math.max(0, dd - pd), kd = !0
        }
        let Wd = dd;
        if ("hold" === this.phase) {
          this.heldMs += Nd;
          const dd = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - pd.o.minFadeTurnMs);
          if (dd < 0 || kd) return kd;
          this.phase = "in", this.sinceTurnMs = dd, Wd = dd
        }
        return "in" === this.phase && (Jd.alpha = Pd(Jd.alpha, 0, Wd, this.inMs), Jd.alpha <= 0 && (this.phase = null, this.clearMs = 0)), kd
      }
    }
    var gd = kd(39304),
      Cd = kd(39328),
      Kd = kd(1901),
      od = kd(36745);

    function ld(dd, Jd) {
      for (let kd = 0; kd < Jd.length; kd++) Jd[kd] = dd[kd]
    }

    function Qd(dd, Jd) {
      var kd;
      return null !== (kd = dd.fov) && void 0 !== kd ? kd : Jd.getDefaultFov()
    }

    function Ld(dd, Jd, kd, pd, Nd) {
      const Wd = 2 / pd,
        Pd = Math.exp(-Wd * Nd);
      for (let Zd = 0; Zd < dd.length; Zd++) {
        const pd = dd[Zd] - kd[Zd],
          gd = (Jd[Zd] + Wd * pd) * Nd;
        dd[Zd] = kd[Zd] + (pd + gd) * Pd, Jd[Zd] = (Jd[Zd] - Wd * gd) * Pd
      }
    }
    class Od {
      constructor(dd, Jd, kd, pd) {
        var Wd, Pd, Zd, gd, Cd;
        this.settings = dd, this.Vo = Jd, this.targets = kd, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.hO = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Nd.w)((0, Kd.p)(null !== (Wd = dd.viewHeading) && void 0 !== Wd ? Wd : 0)),
          pitch: (0, Nd.i)((0, Kd.p)(null !== (Pd = dd.viewElevation) && void 0 !== Pd ? Pd : 45))
        }, this.closestDistance = null !== (Zd = dd.closestDistance) && void 0 !== Zd ? Zd : Math.min(6, null !== (gd = dd.furthestDistance) && void 0 !== gd ? gd : 1 / 0), this.furthestDistance = null !== (Cd = dd.furthestDistance) && void 0 !== Cd ? Cd : Math.max(64, this.closestDistance);
        const od = (0, Nd.f)(this.base.heading, this.base.pitch, this.forward),
          ld = pd.position,
          Qd = this.closestDistance;
        this.goal = [ld[0] + od[0] * Qd, ld[1] + od[1] * Qd, ld[2] + od[2] * Qd, Qd, this.base.heading, this.base.pitch]
      }
      update(dd, Jd, kd) {
        var pd, Wd;
        this.placeGoal(null !== (pd = this.settings.fov) && void 0 !== pd ? pd : this.Vo.getBaseFov()), this.goal[4] = (0, Nd.A)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Pd = null !== (Wd = this.settings.smoothMs) && void 0 !== Wd ? Wd : 400;
        !this.started || Pd < 1 ? (ld(this.goal, this.smoothed), this.hO.fill(0), this.started = !0) : Ld(this.smoothed, this.hO, this.goal, Pd, dd), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Nd.i)(this.smoothed[5]), Jd.apply(this.angles, kd);
        const Zd = (0, Nd.f)(kd.heading, kd.pitch, this.forward);
        for (let Nd = 0; Nd < 3; Nd++) kd.position[Nd] = this.smoothed[Nd] - Zd[Nd] * this.smoothed[3];
        kd.fov = Qd(this.settings, this.Vo)
      }
      continueFrom(dd) {
        dd instanceof Od && (ld(dd.goal, this.goal), ld(dd.smoothed, this.smoothed), ld(dd.hO, this.hO), this.framedTargets = dd.framedTargets, this.started = dd.started)
      }
      reset() {
        this.hO.fill(0), this.started = !1
      }
      placeGoal(dd) {
        var Jd;
        let kd = 0;
        for (const Kd of this.settings.targets) {
          const dd = this.targets.currentAimPoint(Kd);
          dd && (0, gd.f)(dd, this.pointAt(kd++))
        }
        if (kd > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const dd = this.targets.aimPoint(this.Vo.localPlayerId);
          dd && (0, gd.f)(dd, this.pointAt(kd++))
        }
        const pd = this.goal;
        if (0 === kd) return void(pd[3] = this.withinDistances(pd[3]));
        for (let gd = 0; gd < 3; gd++) {
          let dd = 1 / 0,
            Jd = -1 / 0;
          for (let pd = 0; pd < kd; pd++) dd = Math.min(dd, this.points[pd][gd]), Jd = Math.max(Jd, this.points[pd][gd]);
          pd[gd] = (dd + Jd) / 2
        }
        let Nd = 0;
        for (let gd = 0; gd < kd; gd++) {
          const dd = this.points[gd];
          Nd = Math.max(Nd, Math.hypot(dd[0] - pd[0], dd[1] - pd[1], dd[2] - pd[2]))
        }
        const Wd = Math.tan((0, Kd.p)(dd) / 2),
          Pd = Math.atan(Wd * (!0 === this.settings.letterbox ? od.f : 1)),
          Zd = Math.atan(Wd * this.Vo.getAspectRatio()),
          Cd = (Nd + (null !== (Jd = this.settings.padding) && void 0 !== Jd ? Jd : 2)) / Math.sin(Math.min(Pd, Zd));
        pd[3] = this.withinDistances(Cd)
      }
      withinDistances(dd) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, dd))
      }
      pointAt(dd) {
        return dd === this.points.length && this.points.push([0, 0, 0]), this.points[dd]
      }
    }
    class ed {
      constructor(dd) {
        this.limits = dd, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(dd) {
        this.limits && (this.yawOffset = dd.yawOffset, this.pitchOffset = dd.pitchOffset, this.idleMs = dd.idleMs)
      }
      update(dd, Jd) {
        const kd = this.limits;
        if (!kd) return;
        const pd = Number.isFinite(Jd.bY) ? Jd.bY : 0,
          Nd = Number.isFinite(Jd.fY) ? Jd.fY : 0;
        if (Jd.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: Jd.pointedAt.heading,
          pitch: Jd.pointedAt.pitch
        };
        else if (0 !== pd || 0 !== Nd) this.idleMs = 0, this.yawOffset += pd, this.pitchOffset += Nd;
        else {
          const Jd = Math.max(0, this.idleMs + dd - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += dd, void 0 !== kd.returnMs && Jd > 0) {
            const dd = kd.returnMs > 0 ? Math.exp(-3 * Jd / kd.returnMs) : 0;
            this.yawOffset *= dd, this.pitchOffset *= dd
          }
        }
        this.clampOffsets(kd)
      }
      clampOffsets(dd) {
        if (dd.maxYaw >= 180) this.yawOffset = (0, Nd.z)(0, this.yawOffset);
        else {
          const Jd = (0, Kd.p)(dd.maxYaw);
          this.yawOffset = Math.max(-Jd, Math.min(Jd, this.yawOffset))
        }
        const Jd = (0, Kd.p)(dd.maxPitch);
        this.pitchOffset = Math.max(-Jd, Math.min(Jd, this.pitchOffset))
      }
      apply(dd, Jd) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Nd.z)(dd.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - dd.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const kd = (0, Nd.i)(dd.pitch + this.pitchOffset);
        this.pitchOffset = kd - dd.pitch, Jd.heading = (0, Nd.w)(dd.heading + this.yawOffset), Jd.pitch = kd
      }
      unapply(dd, Jd) {
        Jd.heading = (0, Nd.w)(dd.heading - this.yawOffset), Jd.pitch = (0, Nd.i)(dd.pitch - this.pitchOffset)
      }
    }
    const Rd = 1e-6;

    function Id(dd) {
      return Math.sqrt(dd[0] * dd[0] + dd[1] * dd[1] + dd[2] * dd[2])
    }

    function Gd(dd, Jd, kd, pd, Nd) {
      const Wd = Nd * Nd,
        Pd = Wd * Nd;
      return (2 * Pd - 3 * Wd + 1) * dd + (Pd - 2 * Wd + Nd) * Jd + (-2 * Pd + 3 * Wd) * kd + (Pd - Wd) * pd
    }

    function vd(dd, Jd, kd, pd, Nd) {
      const Wd = Nd * Nd;
      return (6 * Wd - 6 * Nd) * dd + (3 * Wd - 4 * Nd + 1) * Jd + (-6 * Wd + 6 * Nd) * kd + (3 * Wd - 2 * Nd) * pd
    }

    function xd(dd, Jd) {
      const kd = Jd[0] - dd[0],
        pd = Jd[1] - dd[1],
        Nd = Jd[2] - dd[2];
      return Math.sqrt(kd * kd + pd * pd + Nd * Nd)
    }

    function qd(dd, Jd, kd, pd, Nd, Wd) {
      for (let Pd = 0; Pd < 3; Pd++) Wd[Pd] = Nd ? dd[Pd] * pd : kd[Pd] - Jd[Pd];
      return Nd && function(dd, Jd) {
        const kd = Id(dd);
        if (kd > Jd) {
          const pd = Jd / kd;
          dd[0] *= pd, dd[1] *= pd, dd[2] *= pd
        }
      }(Wd, 3 * xd(Jd, kd)), Wd
    }

    function Bd(dd, Jd, kd, pd) {
      for (let Nd = 0; Nd < 3; Nd++) pd[Nd] = 6 * (Jd[Nd] - dd[Nd]) - 2 * kd[Nd];
      if (Id(pd) < Rd)
        for (let Nd = 0; Nd < 3; Nd++) pd[Nd] = Jd[Nd] - dd[Nd];
      return pd
    }

    function sd(dd, Jd) {
      return [2 * Jd[0] - dd[0], 2 * Jd[1] - dd[1], 2 * Jd[2] - dd[2]]
    }

    function ad(dd, Jd, kd, pd, Nd, Wd, Pd) {
      if (!Wd && !Pd) return 0;
      const Zd = Wd ? dd : 2 * Jd - kd,
        gd = Pd ? kd : 2 * Jd - dd,
        Cd = Wd ? pd : Nd,
        Kd = Pd ? Nd : pd,
        od = (Jd - Zd) / Cd,
        ld = (gd - Jd) / Kd;
      if (od * ld <= 0) return 0;
      const Qd = (gd - Zd) / (Cd + Kd),
        Ld = 3 * Math.min(Math.abs(od), Math.abs(ld));
      return Math.max(-Ld, Math.min(Ld, Qd))
    }

    function Md(dd, Jd, kd, pd, Nd, Wd, Pd) {
      const {
        u: Zd,
        segmentMs: gd
      } = dd;
      if (!dd.curved) return kd + (pd - kd) * Zd;
      return Gd(kd, ad(Jd, kd, pd, dd.beforeMs, gd, Wd, !0) * gd, pd, ad(kd, pd, Nd, gd, dd.afterMs, !0, Pd) * gd, Zd)
    }

    function Fd(dd) {
      return Math.abs(dd.pitch) >= Nd.c
    }
    class Yd {
      constructor(dd, Jd, kd, pd, Nd) {
        this.nodes = dd, this.prevNodes = kd, this.nextNodes = pd, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = dd.map(((dd, kd) => this.nodeTangent(Jd, Nd, kd)))
      }
      sample(dd, Jd, kd) {
        const {
          index: pd,
          toIndex: Wd,
          segmentMs: Pd,
          curved: Zd
        } = dd, gd = this.fromAngles, Cd = this.toAngles, Kd = this.nodeAngles(pd, kd.position, Jd, gd), od = this.nodeAngles(Wd, kd.position, Jd, Cd);
        if (Pd > 0 && "aim" !== Kd && "aim" !== od && this.liveTangent(dd, gd)) return kd.heading = (0, Nd.w)(gd.heading), void(kd.pitch = gd.pitch);
        if ("none" === Kd && "none" === od) return;
        !Zd && Pd > 0 && ("tangent" === Kd && this.liveTangent(dd, gd), "tangent" === od && this.liveTangent(dd, Cd)), "none" === Kd ? (0, Nd.j)(Cd, gd) : "none" === od && (0, Nd.j)(gd, Cd);
        const ld = Zd && dd.beforeIndex >= 0 && "none" !== this.nodeAngles(dd.beforeIndex, kd.position, Jd, this.beforeAngles),
          Qd = Zd && dd.afterIndex >= 0 && "none" !== this.nodeAngles(dd.afterIndex, kd.position, Jd, this.afterAngles),
          Ld = (0, Nd.A)(gd.heading, Cd.heading),
          Od = Md(dd, ld ? (0, Nd.A)(gd.heading, this.beforeAngles.heading) : 0, gd.heading, Ld, Qd ? (0, Nd.A)(Ld, this.afterAngles.heading) : 0, ld, Qd);
        kd.heading = (0, Nd.w)(Od), kd.pitch = (0, Nd.i)(Md(dd, this.beforeAngles.pitch, gd.pitch, Cd.pitch, this.afterAngles.pitch, ld, Qd))
      }
      nodeAngles(dd, Jd, kd, pd) {
        const Nd = this.rawNodeAngles(dd, Jd, kd, pd);
        return "none" !== Nd && Fd(pd) && !this.borrowHeading(this.prevNodes[dd], Jd, kd, pd) && this.borrowHeading(this.nextNodes[dd], Jd, kd, pd), Nd
      }
      borrowHeading(dd, Jd, kd, pd) {
        const Nd = this.borrowedAngles;
        return !(dd < 0 || "none" === this.rawNodeAngles(dd, Jd, kd, Nd) || Fd(Nd)) && (pd.heading = Nd.heading, !0)
      }
      rawNodeAngles(dd, Jd, kd, pd) {
        const Wd = this.nodes[dd].keyframe;
        if (Wd.lookDirection) return (0, Nd.n)(Wd.lookDirection, pd), "aim";
        if (void 0 !== Wd.lookAt) {
          const dd = kd(Wd.lookAt);
          if (dd) return (0, Nd.u)(Jd, dd, pd), "aim"
        }
        const Pd = this.tangents[dd];
        return Pd ? ((0, Nd.j)(Pd, pd), "tangent") : "none"
      }
      liveTangent(dd, Jd) {
        const kd = this.nodes[dd.index].position,
          pd = this.nodes[dd.toIndex].position,
          Wd = this.derivative;
        for (let Nd = 0; Nd < 3; Nd++) Wd[Nd] = vd(kd[Nd], dd.fromTangent[Nd], pd[Nd], dd.toTangent[Nd], dd.u);
        return Id(Wd) > 1e-9 ? ((0, Nd.n)(Wd, Jd), !0) : !(xd(kd, pd) < Rd) && ((0, Nd.n)(Bd(kd, pd, dd.u < .5 ? dd.toTangent : dd.fromTangent, Wd), Jd), !0)
      }
      nodeTangent(dd, Jd, kd) {
        var pd;
        const Wd = dd[kd];
        if (Id(Wd) > 1e-9) return (0, Nd.n)(Wd, {
          heading: 0,
          pitch: 0
        });
        const Pd = null !== (pd = this.restDirectionTo(kd, kd + 1, dd, Jd)) && void 0 !== pd ? pd : this.restDirectionTo(kd, kd - 1, dd, Jd);
        return Pd ? (0, Nd.n)(Pd, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(dd, Jd, kd, pd) {
        const Nd = this.nodes[dd],
          Wd = this.nodes[Jd];
        if (!Wd || xd(Nd.position, Wd.position) < Rd) return null;
        const [Pd, Zd] = Jd > dd ? [Nd, Wd] : [Wd, Nd], gd = qd(kd[Jd], Pd.position, Zd.position, Zd.timeMs - Pd.timeMs, pd, [0, 0, 0]);
        return Bd(Pd.position, Zd.position, gd, [0, 0, 0])
      }
    }

    function md(dd, Jd) {
      const kd = dd.lookDirection || Jd.lookDirection ? function(dd, Jd) {
        if (!dd || !Jd) return dd === Jd;
        const kd = Id(dd),
          pd = Id(Jd);
        return Math.hypot(dd[0] / kd - Jd[0] / pd, dd[1] / kd - Jd[1] / pd, dd[2] / kd - Jd[2] / pd) < Rd
      }(dd.lookDirection, Jd.lookDirection) : (pd = dd.lookAt, Nd = Jd.lookAt, "object" !== typeof pd || "object" !== typeof Nd ? pd === Nd : xd(pd, Nd) < Rd);
      var pd, Nd;
      return xd(dd.position, Jd.position) < Rd && dd.fov === Jd.fov && kd
    }
    class bd {
      constructor(dd, Jd, kd) {
        if (this.smooth = Jd, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === dd.length) throw new Error("A camera path needs at least one keyframe");
        for (let Wd = 1; Wd < dd.length; Wd++)
          if (!(dd[Wd].timeMs > dd[Wd - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = dd.map((dd => {
          var Jd;
          return {
            timeMs: dd.timeMs,
            position: [...dd.position],
            keyframe: dd,
            easing: (0, Wd.m)(null !== (Jd = dd.easing) && void 0 !== Jd ? Jd : "linear")
          }
        }));
        const pd = this.nodes[0],
          Nd = this.nodes[this.nodes.length - 1],
          Pd = kd && this.nodes.length > 1;
        Pd && !md(pd.keyframe, Nd.keyframe) && this.nodes.push({
          ...pd,
          timeMs: Nd.timeMs + (Nd.timeMs - pd.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Pd ? this.nodes[this.nodes.length - 1].timeMs - pd.timeMs : 0, this.prevNodes = this.nodes.map(((dd, Jd) => this.neighbour(Jd, -1))), this.nextNodes = this.nodes.map(((dd, Jd) => this.neighbour(Jd, 1))), this.prevGaps = this.prevNodes.map(((dd, Jd) => dd >= 0 ? this.gapMs(Jd, -1) : 0)), this.nextGaps = this.nextNodes.map(((dd, Jd) => dd >= 0 ? this.gapMs(Jd, 1) : 0)), this.velocities = this.nodes.map(((dd, Jd) => {
          const kd = this.prevNodes[Jd],
            pd = this.nextNodes[Jd];
          return function(dd, Jd, kd, pd, Nd, Wd) {
            if (Wd[0] = 0, Wd[1] = 0, Wd[2] = 0, !dd && !kd) return Wd;
            const Pd = null !== dd && void 0 !== dd ? dd : sd(null !== kd && void 0 !== kd ? kd : Jd, Jd),
              Zd = null !== kd && void 0 !== kd ? kd : sd(null !== dd && void 0 !== dd ? dd : Jd, Jd),
              gd = dd ? pd : Nd,
              Cd = kd ? Nd : pd,
              Kd = xd(Pd, Jd),
              od = xd(Jd, Zd);
            if (Kd < Rd || od < Rd) return Wd;
            const ld = Math.sqrt(Kd),
              Qd = Math.sqrt(od),
              Ld = (ld + Qd) / (gd + Cd);
            for (let Od = 0; Od < 3; Od++) {
              const dd = (Jd[Od] - Pd[Od]) / ld - (Zd[Od] - Pd[Od]) / (ld + Qd) + (Zd[Od] - Jd[Od]) / Qd;
              Wd[Od] = dd * Ld
            }
            return Wd
          }(kd >= 0 ? this.nodes[kd].position : null, dd.position, pd >= 0 ? this.nodes[pd].position : null, this.prevGaps[Jd], this.nextGaps[Jd], [0, 0, 0])
        })), this.aim = new Yd(this.nodes, this.velocities, this.prevNodes, this.nextNodes, Jd)
      }
      sample(dd, Jd, kd, pd) {
        const Nd = this.findSegment(this.pathTime(dd));
        this.samplePosition(Nd, pd.position), this.aim.sample(Nd, Jd, pd);
        const {
          beforeIndex: Wd,
          afterIndex: Pd
        } = Nd;
        pd.fov = Md(Nd, Wd >= 0 ? this.fovAt(Wd, kd) : 0, this.fovAt(Nd.index, kd), this.fovAt(Nd.toIndex, kd), Pd >= 0 ? this.fovAt(Pd, kd) : 0, Wd >= 0, Pd >= 0)
      }
      pathTime(dd) {
        const Jd = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || dd <= Jd) return dd;
        const kd = dd - Jd;
        return Jd + kd - this.loopMs * Math.floor(kd / this.loopMs)
      }
      findSegment(dd) {
        const Jd = this.nodes,
          kd = this.segment;
        let pd = kd.index;
        for (dd < Jd[pd].timeMs && (pd = 0); pd < Jd.length - 2 && Jd[pd + 1].timeMs <= dd;) pd++;
        const Nd = Math.min(pd + 1, Jd.length - 1),
          Pd = Jd[Nd].timeMs - Jd[pd].timeMs;
        return kd.index = pd, kd.toIndex = Nd, kd.segmentMs = Pd, kd.u = Pd > 0 ? (0, Wd.i)((dd - Jd[pd].timeMs) / Pd, Jd[pd].easing) : 1, kd.curved = this.smooth && Pd > 0, kd.beforeIndex = this.prevNodes[pd], kd.afterIndex = this.nextNodes[Nd], kd.beforeMs = this.prevGaps[pd], kd.afterMs = this.nextGaps[Nd], kd
      }
      samplePosition(dd, Jd) {
        const {
          fromTangent: kd,
          toTangent: pd,
          curved: Nd
        } = dd, Wd = this.nodes[dd.index].position, Pd = this.nodes[dd.toIndex].position;
        qd(this.velocities[dd.index], Wd, Pd, dd.segmentMs, Nd, kd), qd(this.velocities[dd.toIndex], Wd, Pd, dd.segmentMs, Nd, pd);
        const Zd = dd.u;
        for (let gd = 0; gd < 3; gd++) Jd[gd] = Nd ? Gd(Wd[gd], kd[gd], Pd[gd], pd[gd], Zd) : Wd[gd] + (Pd[gd] - Wd[gd]) * Zd
      }
      fovAt(dd, Jd) {
        var kd;
        return null !== (kd = this.nodes[dd].keyframe.fov) && void 0 !== kd ? kd : Jd
      }
      neighbour(dd, Jd) {
        const kd = this.nodes.length - 1,
          pd = dd + Jd;
        return pd >= 0 && pd <= kd ? pd : this.loopMs <= 0 || kd < 2 ? -1 : pd < 0 ? kd - 1 : 1
      }
      gapMs(dd, Jd) {
        const kd = this.nodes.length - 1;
        if (1 === Jd) {
          const Jd = dd === kd ? 0 : dd;
          return this.nodes[Jd + 1].timeMs - this.nodes[Jd].timeMs
        }
        const pd = 0 === dd ? kd : dd;
        return this.nodes[pd].timeMs - this.nodes[pd - 1].timeMs
      }
    }
    class Sd {
      constructor(dd) {
        this.Vo = dd, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Jd => dd.getEntityPosition(Jd), this.readAimPoint = Jd => dd.getEntityAimPoint(Jd)
      }
      aimPoint(dd) {
        return "string" !== typeof dd ? (0, gd.l)(dd, 3) ? dd : null : this.resolve(dd, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(dd) {
        const Jd = "string" === typeof dd ? this.Vo.getEntityAimPoint(dd) : dd;
        return Jd && (0, gd.l)(Jd, 3) ? Jd : null
      }
      feetPosition(dd) {
        return this.resolve(dd, this.readFeet, this.lastFeet)
      }
      heading(dd) {
        const Jd = this.Vo.getEntityHeading(dd);
        if (null !== Jd && Number.isFinite(Jd)) return this.lastHeadings.set(dd, Jd), Jd;
        const kd = this.lastHeadings.get(dd);
        return void 0 !== kd ? kd : dd === this.Vo.localPlayerId ? 0 : this.heading(this.Vo.localPlayerId)
      }
      resolve(dd, Jd, kd) {
        const pd = Jd(dd);
        let Nd = kd.get(dd);
        return pd && (0, gd.l)(pd, 3) ? (Nd || (Nd = [0, 0, 0], kd.set(dd, Nd)), Nd[0] = pd[0], Nd[1] = pd[1], Nd[2] = pd[2], Nd) : Nd || (dd === this.Vo.localPlayerId ? null : this.resolve(this.Vo.localPlayerId, Jd, kd))
      }
    }

    function jd(dd) {
      return {
        heading: dd.heading,
        pitch: dd.pitch
      }
    }

    function Xd(dd, Jd) {
      Number.isFinite(dd.heading) && Number.isFinite(dd.pitch) || (0, Nd.j)(Jd, dd)
    }

    function fd(dd, Jd, kd, pd, Wd) {
      if (Jd) return void(0, Nd.n)(Jd, Wd);
      const Pd = pd.aimPoint(kd);
      Pd && (0, Nd.u)(dd, Pd, Wd)
    }
    class nd {
      constructor(dd, Jd, kd, pd) {
        this.settings = dd, this.Vo = Jd, this.targets = kd, this.base = void 0, this.base = jd(pd)
      }
      update(dd, Jd, kd) {
        var pd;
        const Nd = this.settings;
        (0, gd.f)(Nd.position, kd.position), fd(Nd.position, Nd.lookDirection, null !== (pd = Nd.lookAt) && void 0 !== pd ? pd : this.Vo.localPlayerId, this.targets, this.base), Jd.apply(this.base, kd), kd.fov = Qd(Nd, this.Vo)
      }
      continueFrom(dd) {
        dd instanceof nd && (0, Nd.j)(dd.base, this.base)
      }
      reset(dd) {
        Xd(this.base, dd)
      }
    }
    class Ud {
      constructor(dd, Jd, kd, pd) {
        this.settings = dd, this.Vo = Jd, this.targets = kd, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.hO = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = jd(pd), this.goal = [...pd.position]
      }
      update(dd, Jd, kd) {
        var pd, Nd, Wd;
        const Pd = this.settings,
          Zd = null !== (pd = Pd.target) && void 0 !== pd ? pd : this.Vo.localPlayerId,
          Cd = this.targets.feetPosition(Zd);
        let Kd = !1;
        Cd && (Kd = this.foundFeet && xd(this.lastFeet, Cd) > 32 + .1 * dd, (0, gd.f)(Cd, this.lastFeet), this.foundFeet = !0, this.placeGoal(Cd, Zd));
        const od = null !== (Nd = Pd.smoothMs) && void 0 !== Nd ? Nd : 0;
        !this.started || od < 1 || Kd ? ((0, gd.f)(this.goal, this.smoothed), this.hO.fill(0), this.started = !0) : Ld(this.smoothed, this.hO, this.goal, od, dd), Kd && (this.distance = -1), (0, gd.f)(this.smoothed, kd.position);
        const ld = !0 === Pd.avoidTerrain ? this.pullIn(Zd, dd, kd) : 1;
        let Od = this.goal;
        if ("target" === Pd.offsetSpace) Od = kd.position;
        else if (ld < 1) {
          Od = this.aimOrigin;
          for (let dd = 0; dd < 3; dd++) Od[dd] = kd.position[dd] + (this.goal[dd] - this.smoothed[dd]) * ld
        }
        fd(Od, Pd.lookDirection, null !== (Wd = Pd.lookAt) && void 0 !== Wd ? Wd : Zd, this.targets, this.base), Jd.apply(this.base, kd), kd.fov = Qd(Pd, this.Vo)
      }
      continueFrom(dd) {
        dd instanceof Ud && (0, pd.t)(dd.settings.target, this.settings.target) && ((0, Nd.j)(dd.base, this.base), (0, gd.f)(dd.goal, this.goal), (0, gd.f)(dd.lastFeet, this.lastFeet), this.foundFeet = dd.foundFeet, (0, gd.f)(dd.smoothed, this.smoothed), (0, gd.f)(dd.hO, this.hO), this.started = dd.started, !0 === dd.settings.avoidTerrain && (this.distance = dd.distance))
      }
      reset(dd) {
        Xd(this.base, dd), this.hO.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(dd, Jd, kd) {
        const pd = this.targets.aimPoint(dd);
        if (!pd) return 1;
        const Nd = kd.position,
          Wd = xd(pd, Nd);
        if (!(Wd > 0)) return 1;
        const Pd = this.toCamera;
        for (let gd = 0; gd < 3; gd++) Pd[gd] = (Nd[gd] - pd[gd]) / Wd;
        const Zd = function(dd, Jd, kd) {
          return dd < 0 || Jd < dd ? Jd : Jd + (dd - Jd) * Math.exp(-kd / 150)
        }(this.distance, function(dd, Jd, kd, pd) {
          const Nd = dd.raycastTerrain(Jd, kd, pd);
          return null !== Nd && Number.isFinite(Nd) ? Math.min(pd, Math.max(0, Nd - .2)) : pd
        }(this.Vo, pd, Pd, Wd), Jd);
        if (Wd - Zd < .001) return this.distance = -1, 1;
        this.distance = Zd;
        for (let gd = 0; gd < 3; gd++) Nd[gd] = pd[gd] + Pd[gd] * Zd;
        return Zd / Wd
      }
      placeGoal(dd, Jd) {
        const kd = this.settings.offset;
        let pd = kd[0],
          Nd = kd[2];
        if ("target" === this.settings.offsetSpace) {
          const dd = this.targets.heading(Jd),
            Wd = Math.cos(dd),
            Pd = Math.sin(dd);
          pd = kd[0] * Wd + kd[2] * Pd, Nd = -kd[0] * Pd + kd[2] * Wd
        }
        this.goal[0] = dd[0] + pd, this.goal[1] = dd[1] + kd[1], this.goal[2] = dd[2] + Nd
      }
    }
    class yd {
      constructor(dd, Jd, kd, pd) {
        var Nd, Wd;
        this.settings = dd, this.Vo = Jd, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = dd.keyframes.length > 0 ? new bd(dd.keyframes, null === (Nd = dd.smooth) || void 0 === Nd || Nd, null !== (Wd = dd.loop) && void 0 !== Wd && Wd) : null, this.base = (0, gd.e)(pd, (0, gd.g)()), this.resolveTarget = dd => kd.aimPoint(dd)
      }
      update(dd, Jd, kd) {
        this.elapsedMs += dd;
        const pd = Qd(this.settings, this.Vo);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, pd, this.base) : this.base.fov = pd, (0, gd.f)(this.base.position, kd.position), kd.fov = this.base.fov, Jd.apply(this.base, kd)
      }
      continueFrom(dd) {
        dd instanceof yd && (0, pd.t)(dd.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = dd.elapsedMs, (0, gd.e)(dd.base, this.base))
      }
      reset(dd) {
        Xd(this.base, dd), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function Dd(dd, Jd) {
      return (0, pd.u)(dd, Jd)
    }
    class Td {
      constructor(dd, Jd, kd) {
        var pd;
        this.settings = dd, this.Vo = Jd, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Nd = null !== kd && kd.settings.mode === dd.mode,
          Wd = Nd ? kd.pose : Jd.getDefaultPose();
        this.pose = (0, gd.e)(Wd, (0, gd.g)()), this.lastGoodPose = (0, gd.e)(Nd ? kd.lastGoodPose : Wd, (0, gd.g)()), this.look = new ed(dd.playerLook), this.targets = null !== (pd = null === kd || void 0 === kd ? void 0 : kd.targets) && void 0 !== pd ? pd : new Sd(Jd);
        const Pd = (0, gd.e)(Wd, (0, gd.g)());
        Nd && kd.look.unapply(Pd, Pd), this.mode = function(dd, Jd, kd, pd) {
          switch (dd.mode) {
            case "fixed":
              return new nd(dd, Jd, kd, pd);
            case "follow":
              return new Ud(dd, Jd, kd, pd);
            case "path":
              return new yd(dd, Jd, kd, pd);
            case "frame":
              return new Od(dd, Jd, kd, pd)
          }
        }(dd, Jd, this.targets, Pd), Nd && (this.look.continueFrom(kd.look), this.mode.continueFrom(kd.mode))
      }
      update(dd, Jd) {
        return this.look.update(dd, Jd), this.mode.update(dd, this.look, this.pose), (0, gd.h)(this.pose) ? (0, gd.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, gd.e)(this.lastGoodPose, this.pose), this.mode.reset((0, gd.h)(this.lastGoodPose) ? this.lastGoodPose : this.Vo.getDefaultPose())), this.pose
      }
    }

    function Ed(dd) {
      return [0, 0, dd[2], dd[3]]
    }
    class cd {
      constructor(dd) {
        this.Vo = dd, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new Zd, this.shot = null, this.blend = null, this.mixed = (0, gd.g)(), this.output = (0, gd.g)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(dd) {
        const Jd = (0, Cd.b)(dd);
        if ((0, pd.t)(Jd, this.pending ? this.pending.settings : this.settings)) return;
        const kd = Dd(this.settings, Jd);
        if (void 0 !== Jd.transition && !kd) return this.pending = {
          settings: Jd,
          shot: "default" === Jd.mode ? null : new Td(Jd, this.Vo, null)
        }, void this.fade.fadeOut(Jd.transition);
        const Nd = null !== this.pending;
        this.pending = null, !Nd && kd || this.fade.fadeIn(pd.o.minTransitionFadeMs), this.show(Jd, !1)
      }
      show(dd, Jd) {
        var kd, Nd;
        if ((0, pd.t)(dd, this.settings)) return;
        const Pd = !Jd && Dd(this.settings, dd);
        this.settings = dd;
        const Zd = null !== this.blend && this.blend.elapsedMs > 0,
          Cd = (0, gd.e)(this.hasOutput ? this.output : this.Vo.getDefaultPose(), (0, gd.g)());
        if (this.shot = "default" === dd.mode ? null : new Td(dd, this.Vo, Jd ? null : this.shot), Pd) return;
        const Kd = Jd || !this.shot && !this.hasOutput ? 0 : null !== (kd = dd.blendInMs) && void 0 !== kd ? kd : 0;
        if (Kd <= 0) return void(this.blend = null);
        const od = (0, Wd.m)(null !== (Nd = dd.blendEasing) && void 0 !== Nd ? Nd : "easeInOut");
        this.blend = {
          from: Cd,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Kd,
          easing: Zd ? Ed(od) : od
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
      update(dd, Jd) {
        const kd = Number.isFinite(dd) && dd > 0 ? dd : 0;
        if (this.fade.advance(kd) && null !== this.pending) {
          const {
            settings: dd
          } = this.pending;
          this.pending = null, this.show(dd, !0)
        }
        this.loadingPositions.length = 0;
        const pd = this.pending;
        if (null !== pd && void 0 !== pd && pd.shot) {
          const dd = "path" === pd.settings.mode ? 0 : kd;
          this.noteLoadingPosition(pd.shot.update(dd, gd.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Pd = this.shot ? this.shot.update(kd, Jd) : this.Vo.getDefaultPose();
        this.shot && this.noteLoadingPosition(Pd.position);
        const Zd = this.blend;
        if (!Zd) return this.writeOutput(Pd);
        Zd.elapsedMs += kd;
        const Cd = Math.min(1, Zd.elapsedMs / Zd.durationMs);
        if (Zd.headingDelta = Number.isFinite(Zd.headingDelta) ? (0, Nd.A)(Zd.headingDelta, Pd.heading - Zd.from.heading) : (0, Nd.z)(Zd.from.heading, Pd.heading), (0, gd.n)(Zd.from, Pd, Zd.headingDelta, (0, Wd.i)(Cd, Zd.easing), this.mixed), Cd >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else Zd.fromScripted && this.noteLoadingPosition(Zd.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(dd) {
        if (dd.every(Number.isFinite)) {
          const Jd = this.loadingPositions;
          Jd.push((0, gd.f)(dd, this.loadingSlots[Jd.length]))
        }
      }
      writeOutput(dd) {
        const Jd = this.output;
        (0, gd.h)(dd) ? (0, gd.e)(dd, Jd) : this.hasOutput || (0, gd.e)(this.Vo.getDefaultPose(), Jd), Jd.pitch = (0, Nd.i)(Jd.pitch);
        const kd = this.Vo.getDefaultFov(),
          Wd = Number.isFinite(kd) && kd > 0 && kd < 180,
          Pd = Wd ? Math.min(pd.o.minFov, kd) : pd.o.minFov,
          Zd = Wd ? Math.max(pd.o.maxFov, kd) : pd.o.maxFov;
        return Jd.fov = Number.isFinite(Jd.fov) ? Math.min(Zd, Math.max(Pd, Jd.fov)) : Zd, this.hasOutput = !0, Jd
      }
    }
  },
  39304: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      e: () => Zd,
      f: () => Pd,
      g: () => Wd,
      h: () => Cd,
      l: () => gd,
      n: () => Kd
    });
    var pd = kd(39312);
    const Nd = {
      bY: 0,
      fY: 0
    };

    function Wd() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Pd(dd, Jd) {
      return Jd[0] = dd[0], Jd[1] = dd[1], Jd[2] = dd[2], Jd
    }

    function Zd(dd, Jd) {
      return Pd(dd.position, Jd.position), Jd.heading = dd.heading, Jd.pitch = dd.pitch, Jd.fov = dd.fov, Jd
    }

    function gd(dd, Jd) {
      return Array.isArray(dd) && dd.length === Jd && dd.every(Number.isFinite)
    }

    function Cd(dd) {
      return gd(dd.position, 3) && Number.isFinite(dd.heading) && Number.isFinite(dd.pitch) && Number.isFinite(dd.fov)
    }

    function Kd(dd, Jd, kd, Nd, Wd) {
      for (let pd = 0; pd < 3; pd++) Wd.position[pd] = dd.position[pd] + (Jd.position[pd] - dd.position[pd]) * Nd;
      return Wd.heading = (0, pd.w)(dd.heading + kd * Nd), Wd.pitch = dd.pitch + (Jd.pitch - dd.pitch) * Nd, Wd.fov = dd.fov + (Jd.fov - dd.fov) * Nd, Wd
    }
  },
  39328: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Bd,
      e: () => ld
    });
    var pd = kd(39326),
      Nd = kd(39304);
    const Wd = pd.k,
      Pd = pd.r;

    function Zd(dd, Jd, kd, pd) {
      return Number.isFinite(dd) ? Math.min(kd, Math.max(Jd, dd)) : pd
    }

    function gd(dd, Jd, kd) {
      return void 0 !== dd && Number.isFinite(dd) ? Math.min(kd, Math.max(Jd, dd)) : void 0
    }

    function Cd(dd) {
      const Jd = pd.o.maxCoordinate;
      return [Math.min(Jd, Math.max(-Jd, dd[0])), Math.min(Jd, Math.max(-Jd, dd[1])), Math.min(Jd, Math.max(-Jd, dd[2]))]
    }

    function Kd(dd) {
      return "string" === typeof dd ? dd : (0, Nd.l)(dd, 3) ? Cd(dd) : void 0
    }
    const od = new RegExp(pd.s);

    function ld(dd) {
      return "string" === typeof dd && od.test(dd)
    }

    function Qd(dd) {
      const Jd = [];
      if (!Array.isArray(dd)) return Jd;
      for (const kd of dd.slice(0, pd.o.maxFrameTargets)) {
        const dd = Kd(kd);
        void 0 === dd || "string" === typeof dd && !ld(dd) || Jd.push(dd)
      }
      return Jd
    }

    function Ld(dd) {
      if (!(0, Nd.l)(dd, 3)) return;
      const Jd = Math.max(Math.abs(dd[0]), Math.abs(dd[1]), Math.abs(dd[2])),
        kd = Math.hypot(dd[0] / Jd, dd[1] / Jd, dd[2] / Jd);
      return 0 === Jd || Jd * kd < pd.o.minDirectionLength ? void 0 : [dd[0] / Jd / kd, dd[1] / Jd / kd, dd[2] / Jd / kd]
    }

    function Od(dd) {
      if (void 0 !== dd) return "string" === typeof dd ? Wd.includes(dd) ? dd : void 0 : (0, Nd.l)(dd, 4) ? [Zd(dd[0], 0, 1, 0), Zd(dd[1], pd.o.minEasingY, pd.o.maxEasingY, 0), Zd(dd[2], 0, 1, 1), Zd(dd[3], pd.o.minEasingY, pd.o.maxEasingY, 1)] : "linear"
    }

    function ed(dd) {
      if (dd) return {
        maxYaw: Zd(dd.maxYaw, 0, pd.o.maxPlayerLook, 0),
        maxPitch: Zd(dd.maxPitch, 0, pd.o.maxPlayerLook, 0),
        returnMs: gd(dd.returnMs, 0, pd.o.maxReturnMs)
      }
    }
    const Rd = new RegExp(pd.d);

    function Id(dd) {
      var Jd;
      if ("object" !== typeof dd || null === dd) return;
      const kd = pd.o.maxTransitionMs,
        Nd = pd.o.minTransitionFadeMs;
      return {
        colour: "string" === typeof dd.colour && Rd.test(dd.colour) ? dd.colour : pd.h,
        outMs: Zd(dd.outMs, Nd, kd, Nd),
        holdMs: Zd(null !== (Jd = dd.holdMs) && void 0 !== Jd ? Jd : 0, 0, kd, 0),
        inMs: Zd(dd.inMs, Nd, kd, Nd)
      }
    }

    function Gd(dd) {
      return !0 === dd || void 0
    }

    function vd(dd) {
      if ("object" !== typeof dd || null === dd) return !1;
      const Jd = dd.lookAt;
      return Number.isFinite(dd.timeMs) && (0, Nd.l)(dd.position, 3) && (void 0 === Jd || "string" === typeof Jd || (0, Nd.l)(Jd, 3))
    }

    function xd(dd) {
      return {
        ...dd,
        timeMs: Zd(dd.timeMs, 0, pd.o.maxPathMs, 0),
        position: Cd(dd.position),
        lookAt: Kd(dd.lookAt),
        lookDirection: Ld(dd.lookDirection),
        fov: gd(dd.fov, pd.o.minFov, pd.o.maxFov),
        easing: Od(dd.easing)
      }
    }

    function qd(dd) {
      const Jd = [];
      if (!Array.isArray(dd)) return Jd;
      for (const kd of dd.slice(0, pd.o.maxKeyframes)) {
        if (!vd(kd)) continue;
        const dd = xd(kd);
        (0 === Jd.length || dd.timeMs > Jd[Jd.length - 1].timeMs) && Jd.push(dd)
      }
      return Jd
    }

    function Bd(dd) {
      if ("object" !== typeof dd || null === dd) return {
        mode: "default"
      };
      const Jd = {
          blendInMs: gd(dd.blendInMs, 0, pd.o.maxBlendInMs),
          blendEasing: Od(dd.blendEasing),
          transition: Id(dd.transition),
          letterbox: Gd(dd.letterbox),
          hideHud: Gd(dd.hideHud)
        },
        kd = {
          mode: "default",
          ...Jd
        };
      if ("default" === dd.mode || "fixed" === dd.mode && !(0, Nd.l)(dd.position, 3)) return kd;
      const Wd = {
        ...Jd,
        fov: gd(dd.fov, pd.o.minFov, pd.o.maxFov),
        playerFacing: (od = dd.playerFacing, Pd.includes(od) ? od : void 0),
        playerLook: ed(dd.playerLook)
      };
      var od, ld;
      switch (dd.mode) {
        case "fixed":
          return {
            ...dd, ...Wd, position: Cd(dd.position), lookAt: Kd(dd.lookAt), lookDirection: Ld(dd.lookDirection)
          };
        case "follow":
          return {
            ...dd, ...Wd, target: "string" === typeof dd.target ? dd.target : void 0, lookAt: Kd(dd.lookAt), offset: (ld = dd.offset, Array.isArray(ld) ? [Zd(ld[0], -pd.o.maxOffset, pd.o.maxOffset, 0), Zd(ld[1], -pd.o.maxOffset, pd.o.maxOffset, 0), Zd(ld[2], -pd.o.maxOffset, pd.o.maxOffset, 0)] : [0, 0, 0]), lookDirection: Ld(dd.lookDirection), smoothMs: gd(dd.smoothMs, 0, pd.o.maxSmoothMs)
          };
        case "path":
          return {
            ...dd, ...Wd, keyframes: qd(dd.keyframes)
          };
        case "frame":
          return {
            ...dd, ...Wd, targets: Qd(dd.targets), viewHeading: gd(dd.viewHeading, -pd.o.maxFrameHeading, pd.o.maxFrameHeading), viewElevation: gd(dd.viewElevation, 0, pd.o.maxFrameElevation), padding: gd(dd.padding, 0, pd.o.maxFrameDistance), closestDistance: gd(dd.closestDistance, 0, pd.o.maxFrameDistance), furthestDistance: gd(dd.furthestDistance, 0, pd.o.maxFrameDistance), smoothMs: gd(dd.smoothMs, 0, pd.o.maxSmoothMs)
          };
        default:
          return kd
      }
    }
  },
  38794: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd
    });
    var pd = kd(1245);

    function Nd(dd) {
      const Jd = /(\d*\.?\d+)px/.exec(dd);
      return Jd ? Number(Jd[1]) : null
    }

    function Wd(dd) {
      return dd.split(/[\s,]+/).pop()
    }
    let Pd = !1;
    const Zd = {
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
      drawText: function(dd, Jd, pd, Zd, gd, Cd) {
        if (gd <= 0 || Cd <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Kd,
          fontVariant: od,
          fontWeight: ld,
          fontSize: Qd,
          font: Ld
        } = this, Od = [Kd, od, ld, `${Qd}px`, Ld].filter(Boolean).join(" "), ed = [
          [ld, `${Qd}px`, Wd(Ld)].filter(Boolean).join(" "), `${Qd}px sans-serif`
        ], Rd = dd.font, Id = function(dd, Jd, kd) {
          for (const pd of Jd) {
            dd.font = pd;
            const Jd = Nd(dd.font),
              Pd = Wd(pd);
            if (null !== Jd && Math.abs(Jd - kd) <= .5 && dd.font.toLowerCase().includes(Pd.toLowerCase())) return pd
          }
          return null
        }(dd, [Od, ...ed], Qd);
        Id !== Od && function(dd, Jd, pd) {
          Pd || (Pd = !0, Promise.resolve().then((() => kd(1078))).then((kd => {
            let {
              ZO: Nd
            } = kd;
            Nd(new Error("A canvas didn't take canvasTxt's font"), {
              font: dd,
              qQ: Jd,
              drawnWith: null !== pd && void 0 !== pd ? pd : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Od, Rd, Id);
        const Gd = Nd(dd.font);
        if (null === Id && null !== Gd && Gd > 0) {
          const kd = Qd / Gd;
          dd.save();
          try {
            return dd.scale(kd, kd), {
              height: this.drawLines(dd, Jd, pd / kd, Zd / kd, gd / kd, Cd / kd, Gd).height * kd
            }
          } finally {
            dd.restore()
          }
        }
        return this.drawLines(dd, Jd, pd, Zd, gd, Cd, Qd)
      },
      drawLines: function(dd, Jd, kd, Nd, Wd, Pd, Zd) {
        const gd = kd + Wd,
          Cd = Nd + Pd;
        let Kd, od = Nd + Pd / 2 + Zd / 2;
        "right" === this.align ? (Kd = gd, dd.textAlign = "right") : "left" === this.align ? (Kd = kd, dd.textAlign = "left") : (Kd = kd + Wd / 2, dd.textAlign = "center");
        for (const pd of Jd) {
          dd.measureText(pd).width >= Wd && (Jd = Jd.replace(pd, ""))
        }
        Jd = (0, pd.R)(Jd);
        const ld = [],
          Qd = Jd.split("\n"),
          Ld = this.justify ? dd.measureText("\u200a").width : 0;
        Qd.forEach((Jd => {
          let kd = dd.measureText(Jd).width;
          if (kd <= Wd) ld.push(Jd);
          else {
            let pd = Jd;
            const Nd = Wd;
            let Pd, Zd, gd;
            for (kd = dd.measureText(pd).width; kd > Nd;) {
              for (Pd = 0, Zd = 0, gd = ""; Zd < Nd;) Pd++, gd = pd.substr(0, Pd), Zd = dd.measureText(gd).width;
              Pd--, gd = gd.substr(0, Pd);
              const Jd = Pd;
              if (" " !== pd.substr(Pd, 1)) {
                for (;
                  " " !== pd.substr(Pd, 1) && 0 !== Pd;) Pd--;
                0 === Pd && (Pd = Jd), gd = pd.substr(0, Pd)
              }
              gd = this.justify ? this.justifyLine(dd, gd, Ld, "\u200a", Wd) : gd, pd = pd.substr(Pd), kd = dd.measureText(pd).width, ld.push(gd)
            }
            kd > 0 && ld.push(pd)
          }
        }));
        const Od = this.lineHeight ? this.lineHeight : this.getTextHeight(dd, Jd),
          ed = Od * (ld.length - 1),
          Rd = ed / 2;
        let Id = Nd;
        "top" === this.vAlign ? od = Nd + Zd : "bottom" === this.vAlign ? (od = Cd - ed, Id = Cd) : (Id = Nd + Pd / 2, od -= Rd), ld.forEach((Jd => {
          Jd = Jd.trim(), dd.fillText(Jd, Kd, od), od += Od
        })), this.debug && (dd.lineWidth = 3, dd.strokeStyle = "#00909e", dd.strokeRect(kd, Nd, Wd, Pd), dd.lineWidth = 2, dd.strokeStyle = "#f6d743", dd.beginPath(), dd.moveTo(Kd, Nd), dd.lineTo(Kd, Cd), dd.stroke(), dd.strokeStyle = "#ff6363", dd.beginPath(), dd.moveTo(kd, Id), dd.lineTo(gd, Id), dd.stroke());
        return {
          height: ed + Od
        }
      },
      getTextHeight: function(dd, Jd) {
        const kd = dd.textBaseline;
        dd.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: pd
        } = dd.measureText(Jd);
        return dd.textBaseline = kd, pd
      },
      justifyLine: function(dd, Jd, kd, pd, Nd) {
        const Wd = Jd.trim(),
          Pd = dd.measureText(Wd).width,
          Zd = Wd.split(/\s+/).length - 1,
          gd = Math.floor((Nd - Pd) / kd);
        if (Zd <= 0 || gd <= 0) return Wd;
        const Cd = Math.floor(gd / Zd);
        let Kd = gd - Zd * Cd,
          od = [];
        for (let ld = 0; ld < Cd; ld++) od.push(pd);
        od = od.join("");
        return Wd.replace(/\s+/g, (dd => {
          const Jd = Kd > 0 ? od + pd : od;
          return Kd--, dd + Jd
        }))
      }
    }
  },
  39270: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return Jd.set(dd), Jd
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  38798: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Od,
      f: () => Ld,
      j: () => ld,
      l: () => Kd,
      n: () => od
    });
    var pd = kd(4090),
      Nd = kd(313);
    const Wd = 1024,
      Pd = 1536,
      Zd = 2 * pd.l + 1,
      gd = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Cd = 1.5;

    function Kd(dd, Jd, kd) {
      if ("string" !== typeof dd) return Jd;
      try {
        const kd = JSON.parse(dd);
        return kd && "object" === typeof kd ? kd : Jd
      } catch (pd) {
        return void 0 !== kd && console.error(`Couldn't parse ${kd}`, pd), Jd
      }
    }

    function od(dd) {
      return Kd(dd, null, "a leaderboard's rows")
    }

    function ld(dd, Jd) {
      var kd, pd;
      return null !== Jd && void 0 !== Jd ? Jd : {
        status: null !== (kd = dd.status) && void 0 !== kd ? kd : "loading",
        entries: null !== (pd = dd.entries) && void 0 !== pd ? pd : []
      }
    }

    function Qd(dd, Jd) {
      return "number" === typeof dd && Number.isFinite(dd) && dd > 0 ? dd : Jd
    }

    function Ld(dd, Jd) {
      const kd = Qd(dd.size, 1);
      let pd = Qd(dd.width, Qd(2.5 * kd, 2.5)),
        Nd = Qd(dd.height, Qd(3.75 * kd, 3.75));
      Number.isFinite(Wd * Nd / pd) && Number.isFinite(Pd * pd / Nd) || (pd = 2.5, Nd = 3.75);
      const Zd = Nd / pd,
        gd = Math.max(1, Math.min(Wd, Jd / Zd));
      return {
        width: pd,
        height: Nd,
        layoutWidth: Math.max(Wd, Pd / Zd),
        layoutHeight: Math.max(Pd, Wd * Zd),
        pixelWidth: Math.round(gd),
        pixelHeight: Math.round(Math.max(1, Math.min(Jd, gd * Zd)))
      }
    }

    function Od(dd, Jd, kd, Pd, Kd, od) {
      dd.setTransform(1, 0, 0, 1, 0, 0), dd.fillStyle = Nd.M.defaultNameTagBackground, dd.fillRect(0, 0, Jd, kd), dd.scale(Jd / Pd.layoutWidth, kd / Pd.layoutHeight), dd.translate((Pd.layoutWidth - Wd) / 2, 0),
        function(dd, Jd, kd, Wd) {
          var Pd, Kd, od, ld;
          const {
            top: Qd,
            around: Ld,
            showPlayerText: Od,
            localPlayerDbId: Id
          } = kd, {
            whiteUiText: Gd,
            grayUiText: vd,
            yellowUiText: xd
          } = Nd.M;
          dd.textBaseline = "middle";
          const qd = function(Jd, kd, pd, Nd, Wd, Pd) {
              let Zd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              dd.font = `bold ${Nd}px 'Jetbrains Mono', monospace`, dd.fillStyle = Wd, dd.textAlign = Zd;
              let gd = Jd.replace(/[\r\n\t]/g, " ");
              if (dd.measureText(gd).width > Pd) {
                for (; gd.length > 0 && dd.measureText(`${gd}\u2026`).width > Pd;) gd = gd.slice(0, -1);
                gd += "\u2026"
              }
              dd.fillText(gd, kd, pd)
            },
            Bd = Jd => {
              dd.fillStyle = Gd, dd.globalAlpha = .15, dd.fillRect(24, Jd, 976, 2), dd.globalAlpha = 1
            },
            sd = null === Id ? null : (0, Nd.qc)(Id),
            ad = dd => null !== sd && dd.playerHash === sd,
            Md = ed(Qd.entries, pd.m),
            Fd = "ready" === Qd.status && Md.length > 0,
            Yd = null === Ld ? [] : ed(Ld.entries, Zd),
            md = Md.some(ad),
            bd = null === Ld ? null : function(dd) {
              const Jd = dd;
              if (!Jd || !Number.isFinite(Jd.rank) || !Number.isFinite(Jd.tied) || !Number.isFinite(Jd.total)) return null;
              return Jd
            }(Ld.standing),
            Sd = Yd.find(ad),
            jd = Md.find(ad),
            Xd = null === bd || void 0 === Sd ? null : {
              value: Sd.value,
              rank: bd.rank
            },
            fd = Rd(Md, void 0 === jd || jd.value === (null === Xd || void 0 === Xd ? void 0 : Xd.value) ? Xd : null),
            nd = Rd(Yd, Xd),
            Ud = (dd, Jd) => {
              const kd = dd.findIndex(ad);
              return kd >= 0 ? Jd[kd] : null
            },
            yd = null !== (Pd = null !== (Kd = null === bd || void 0 === bd ? void 0 : bd.rank) && void 0 !== Kd ? Kd : Ud(Yd, nd)) && void 0 !== Pd ? Pd : Ud(Md, fd);
          dd.font = "bold 34px 'Jetbrains Mono', monospace";
          const Dd = [...Fd ? fd : [], ...md ? [] : nd],
            Td = Math.min(280, Math.max(0, ...Dd.map((Jd => dd.measureText(gd.format(Jd)).width)))),
            Ed = Td <= 80,
            cd = Ed ? 80 : 32 + Td,
            hd = Ed ? 148 : cd + 28,
            rd = 660 - hd;
          qd(`TOP ${pd.m}  /  ALL TIME`, 24, 52, 28, vd, 976), qd(Od ? String(null !== (od = Jd.title) && void 0 !== od ? od : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Gd, 976), qd("RANK", 32, 174, 28, vd, hd - 40), qd("PLAYER", hd, 174, 28, vd, rd), qd(Od ? String(null !== (ld = Jd.scoreLabel) && void 0 !== ld ? ld : "Score").slice(0, 24) : "Score", 992, 174, 28, vd, 304, "right"), Bd(202);
          const ud = (Wd - 232) / (pd.m + Cd + Zd),
            td = 208 + pd.m * ud,
            Vd = td + Cd * ud,
            zd = (Jd, kd, pd, Nd) => {
              const Wd = ad(Jd);
              dd.fillStyle = Wd ? xd : Gd, dd.globalAlpha = Wd ? .15 : Nd ? .035 : 0, dd.fillRect(24, pd - ud / 2 + 1, 976, ud - 2), dd.globalAlpha = 1;
              const Pd = Wd ? xd : Gd;
              qd(gd.format(kd), cd, pd, 34, Pd, Ed ? 80 : Td, Ed ? "center" : "right"), qd(Od ? String(Jd.name).slice(0, 64) : "Player", hd, pd, 34, Pd, rd);
              const Zd = gd.format(Jd.value);
              qd(dd.measureText(Zd).width > 304 ? Jd.value.toExponential(6) : Zd, 992, pd, 34, Pd, 304, "right")
            };
          if (Fd)
            for (const [pd, Nd] of Md.entries()) zd(Nd, fd[pd], 208 + (pd + .5) * ud, pd % 2 === 0);
          else {
            const dd = "error" === Qd.status,
              Jd = dd ? "Couldn't load leaderboard" : "ready" === Qd.status ? "No scores yet" : "Loading leaderboard\u2026",
              kd = dd ? "Trying again shortly" : "ready" === Qd.status ? "Be the first on the board!" : "Fetching the top players",
              pd = (208 + td) / 2;
            qd(Jd, 512, pd - 28, 40, dd ? Nd.M.redUiText : Gd, 960, "center"), qd(kd, 512, pd + 27, 30, vd, 960, "center")
          }
          const Hd = td + Cd * ud / 2;
          if (null === yd) Bd(Hd);
          else {
            const Jd = null === bd ? 0 : bd.tied - 1,
              kd = `YOUR RANK #${gd.format(yd)}${null===bd?"":` of ${gd.format(bd.total)}`}`;
            dd.font = "bold 36px 'Jetbrains Mono', monospace";
            const pd = Math.max(20, Math.min(36, Math.floor(34560 / dd.measureText(kd).width)));
            qd(kd, 512, Hd - (Jd > 0 ? 15 : 0), pd, xd, 960, "center"), Jd > 0 && qd(`Tied with ${gd.format(Jd)} other${1===Jd?"":"s"}`, 512, Hd + 24, 24, vd, 960, "center")
          }
          if (null === Ld) return;
          const wd = Vd + Zd * ud / 2;
          if (md) qd(`You're in the top ${pd.m}!`, 512, wd, 40, xd, 960, "center");
          else if (0 === Yd.length) qd("You're not on this board yet", 512, wd, 34, vd, 960, "center");
          else
            for (const [pd, Nd] of Yd.entries()) zd(Nd, nd[pd], Vd + (pd + .5) * ud, pd % 2 === 0)
        }(dd, Kd, od, Pd.layoutHeight)
    }

    function ed(dd, Jd) {
      return Array.isArray(dd) ? dd.slice(0, Jd).filter((dd => dd && Number.isFinite(dd.rank) && Number.isFinite(dd.value))) : []
    }

    function Rd(dd, Jd) {
      const kd = [];
      let pd = !1;
      return dd.forEach(((Nd, Wd) => {
        if (null !== Jd && Nd.value === Jd.value) return void kd.push(Jd.rank);
        const Pd = Wd > 0 && Nd.value === dd[Wd - 1].value;
        Pd || (pd = 0 === Wd && 1 !== Nd.rank), kd.push(Pd && !pd ? kd[Wd - 1] : Nd.rank)
      })), kd
    }
  },
  39039: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd,
      g: () => Wd
    });
    const pd = 32;

    function Nd(dd) {
      return Array.from(dd).length
    }

    function Wd(dd) {
      const Jd = [""];
      let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Nd = "";
      const Wd = () => {
        Jd.push(""), kd = 0, Nd = ""
      };
      for (const Pd of dd.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Pd)) Wd();
        else if (/^\s+$/.test(Pd)) Nd += Pd;
      else if (Pd.length > 0) {
        const dd = Array.from(Pd);
        kd > 0 && kd + Nd.length + dd.length > pd && Wd(), Jd[Jd.length - 1] += Nd, kd += Nd.length, Nd = "";
        for (const Nd of dd) kd >= pd && Wd(), Jd[Jd.length - 1] += Nd, kd++
      }
      return Jd[Jd.length - 1] += Nd, Jd
    }
  },
  39263: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(36800),
      Nd = kd.n(pd);
    const Wd = [1, 1, 1];

    function Pd(dd) {
      if (!dd) return [...Wd];
      try {
        const [Jd, kd, pd] = Nd()(dd).rgb().array();
        return [Jd / 255, kd / 255, pd / 255]
      } catch (Jd) {
        return console.warn(`Invalid groundArrowPath colour "${dd}":`, Jd), [...Wd]
      }
    }
  },
  39354: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd,
      g: () => Cd,
      h: () => gd
    });
    var pd = kd(2663),
      Nd = kd(2656);
    const Wd = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      Pd = 512;

    function Zd(dd) {
      var Jd;
      const kd = Math.min(screen.width, screen.height) * (null !== (Jd = (0, pd.e)()) && void 0 !== Jd ? Jd : (0, Nd.e)());
      return Math.max(window.innerHeight * (0, Nd.e)(), kd) / (0, Nd.h)(dd)
    }

    function gd(dd, Jd, kd) {
      return Jd / (2 * Math.tan(kd / 2)) > Pd ? dd : Cd(dd)
    }

    function Cd(dd) {
      return dd.map((dd => dd.replace(Wd, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34377: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      h: () => Zd,
      i: () => Pd,
      l: () => Nd,
      p: () => pd
    });
    const pd = {
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
      Nd = "/textures/dayNight/sun.png",
      Wd = "/textures/dayNight/moon.png",
      Pd = "/textures/dayNight/stars",
      Zd = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39326: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd,
      h: () => od,
      k: () => pd,
      o: () => gd,
      r: () => Nd,
      s: () => Cd,
      t: () => Zd,
      u: () => Pd
    });
    const pd = ["linear", "easeIn", "easeOut", "easeInOut"],
      Nd = ["movement", "camera", "cursor"],
      Wd = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Pd(dd, Jd) {
      return Zd(dd, Jd, Wd)
    }

    function Zd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (dd === Jd || Number.isNaN(dd) && Number.isNaN(Jd)) return !0;
      if ("object" !== typeof dd || "object" !== typeof Jd || null === dd || null === Jd || Array.isArray(dd) !== Array.isArray(Jd)) return !1;
      const pd = dd,
        Nd = Jd;
      for (const Wd of new Set([...Object.keys(pd), ...Object.keys(Nd)]))
        if (!kd.includes(Wd) && !Zd(pd[Wd], Nd[Wd])) return !1;
      return !0
    }
    const gd = {
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
      Cd = "^-[1-9][0-9]*$",
      Kd = "^#[0-9a-fA-F]{6}$",
      od = "#000000"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);