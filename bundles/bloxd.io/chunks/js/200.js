export const id = 200;
export const ids = [200];
export const modules = {
  38879: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu
    });
    class Eu {
      constructor(uu, Ru) {
        this.read = uu, this.apply = Ru, this.release = null
      }
      turn(uu, Ru) {
        const yu = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: Ru,
          forcedCameraDirection: [uu[0], uu[1], uu[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), Ru + 100),
          transitionMs: yu
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(uu) {
        null !== this.release && (clearTimeout(this.release.timer), uu && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38414: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      c: () => Ku
    });
    const Eu = new Map;

    function Ku(uu, Ru) {
      Eu.set(uu, Ru)
    }

    function Qu(uu) {
      return uu ? Eu.get(uu) : void 0
    }
  },
  39315: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku
    });
    var Eu = yu(37976);

    function Ku(uu, Ru, yu) {
      var Ku, Qu, mu, Ju, Nu, Xu, Vu;
      const ru = (0, Eu.b)(uu, Ru, yu[0], yu[1], yu[2]),
        Bu = ru ? null !== (Ku = ru.textCell) && void 0 !== Ku ? Ku : ru.rect.anchor : yu,
        xu = Ru(Bu[0], Bu[1], Bu[2]);
      return {
        pos: [yu[0], yu[1], yu[2]],
        noticeboardSpan: ru && {
          width: ru.rect.width,
          height: ru.rect.height
        },
        text: null !== (Qu = null === xu || void 0 === xu || null === (mu = xu.persisted) || void 0 === mu || null === (Ju = mu.shared) || void 0 === Ju ? void 0 : Ju.text) && void 0 !== Qu ? Qu : "",
        textSize: null !== (Nu = null === xu || void 0 === xu || null === (Xu = xu.persisted) || void 0 === Xu || null === (Vu = Xu.shared) || void 0 === Vu ? void 0 : Vu.textSize) && void 0 !== Nu ? Nu : null
      }
    }
  },
  38273: (uu, Ru, yu) => {
    function Eu(uu) {
      switch (uu.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    yu.d(Ru, {
      c: () => Ku,
      f: () => Qu,
      h: () => Eu
    });
    const Ku = 4,
      Qu = 3
  },
  38899: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      e: () => Qu
    });
    var Eu = yu(343);
    const Ku = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class Qu {
      constructor(uu) {
        this.importGame = uu, this.loads = new Map, this.loaded = new Map
      }
      load(uu) {
        const Ru = (0, Eu.cc)(uu);
        if (!Ku.has(Ru)) return Promise.resolve(void 0);
        let yu = this.loads.get(Ru);
        return yu || (yu = this.importGame(Ru).then((uu => {
          const yu = uu.default;
          if ("function" !== typeof yu) throw new Error(`${Ru}'s client code has no default-exported factory`);
          return this.loaded.set(Ru, yu), yu
        })).catch((uu => {
          throw this.loads.delete(Ru), uu
        })), this.loads.set(Ru, yu)), yu
      }
      loadedFactory(uu) {
        const Ru = (0, Eu.cc)(uu);
        if (!Ku.has(Ru)) return;
        const yu = this.loaded.get(Ru);
        if (!yu) throw new Error(`${Ru}'s client code started before it loaded`);
        return yu
      }
    }
  },
  39323: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(9247),
      Ku = yu(9079),
      Qu = yu(3093);

    function mu(uu) {
      if (uu === Eu.e) return 0;
      const Ru = (0, Qu.b)(uu);
      if (void 0 !== Ru && Ru <= Ku.MAX_BLOCK_ID) return Ru;
      const yu = (0, Qu.b)(uu.split("|")[0]);
      if (void 0 !== yu && yu <= Ku.MAX_BLOCK_ID && (0, Ku.rootMetaDescOf)(yu) === uu) return yu;
      throw new Error(`Invalid block name. You sent ${uu}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38955: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku
    });
    var Eu = yu(27);
    class Ku {
      constructor(uu) {
        this.screen = uu, this.hidesHud = !1
      }
      show(uu, Ru) {
        this.screen.setFade(uu.colour, uu.alpha), this.screen.setLetterbox(!0 === Ru.letterbox, uu.alpha < 1), this.setHudHidden(!0 === Ru.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(uu) {
        this.hidesHud !== uu && (this.hidesHud = uu, Eu.d.set({
          isUiHiddenByCamera: uu
        }))
      }
    }
  },
  38918: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => Xu,
      E: () => Ju,
      G: () => Vu,
      e: () => Eu,
      h: () => Bu,
      l: () => ru,
      o: () => mu,
      r: () => Su,
      t: () => Nu,
      x: () => pu
    });
    const Eu = Math.PI / 2 - .001,
      Ku = 2 * Math.PI,
      Qu = 1e-9;

    function mu(uu, Ru) {
      Ru.heading = uu.heading, Ru.pitch = uu.pitch
    }

    function Ju(uu, Ru) {
      const yu = Ru - uu;
      return yu - Ku * Math.floor((yu + Math.PI) / Ku)
    }

    function Nu(uu, Ru, yu) {
      return uu + Ju(uu, Ru) * yu
    }

    function Xu(uu) {
      if (!Number.isFinite(uu)) return uu;
      const Ru = uu - Ku * Math.floor(uu / Ku);
      return Ru < Ku ? Ru : 0
    }

    function Vu(uu, Ru) {
      return uu + Ju(uu, Ru)
    }

    function ru(uu) {
      return Math.max(-Eu, Math.min(Eu, uu))
    }

    function Bu(uu, Ru, yu) {
      const Eu = Math.cos(Ru);
      return yu[0] = Eu * Math.sin(uu), yu[1] = -Math.sin(Ru), yu[2] = Eu * Math.cos(uu), yu
    }

    function xu(uu, Ru, yu, Eu) {
      const Ku = Math.sqrt(uu * uu + yu * yu);
      return Ku < Qu && Math.abs(Ru) < Qu || (Ku >= Qu && (Eu.heading = Math.atan2(uu, yu)), Eu.pitch = ru(Math.atan2(-Ru, Ku) + 0)), Eu
    }

    function Su(uu, Ru) {
      return xu(uu[0], uu[1], uu[2], Ru)
    }

    function pu(uu, Ru, yu) {
      return xu(Ru[0] - uu[0], Ru[1] - uu[1], Ru[2] - uu[2], yu)
    }
  },
  38949: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu,
      e: () => Ku
    });
    var Eu = yu(38918);

    function Ku(uu) {
      var Ru;
      const yu = "default" === uu.mode ? "movement" : null !== (Ru = uu.playerFacing) && void 0 !== Ru ? Ru : "movement";
      return "cursor" === yu ? {
        facing: yu,
        mouseTurns: null
      } : {
        facing: yu,
        mouseTurns: "default" !== uu.mode && void 0 !== uu.playerLook ? "look" : "view"
      }
    }

    function Qu(uu, Ru, yu, Ku, Qu, mu) {
      return mu.RD = 0, mu.mD = 0, mu.pointedAt = void 0, void 0 !== Ku ? Qu ? (mu.pointedAt = Ku, uu) : (0, Eu.A)(Ku.heading) : Qu ? (mu.RD = Ru, mu.mD = yu, uu) : (0, Eu.A)(uu + Ru)
    }
  },
  38930: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Zu
    });
    var Eu = yu(38939),
      Ku = yu(38918),
      Qu = yu(36757);

    function mu(uu, Ru, yu, Eu) {
      if (!(Eu > 0)) return Ru;
      const Ku = Ru > uu ? Math.min(Ru, uu + yu / Eu) : Math.max(Ru, uu - yu / Eu);
      return Math.abs(Ru - Ku) < 1e-9 ? Ru : Ku
    }
    class Ju {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Eu.g,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(uu) {
        !this.isGoingOut() && this.sinceTurnMs < Eu.n.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: uu
        } : (this.waiting = null, this.startOut(uu))
      }
      fadeIn(uu) {
        this.isGoingOut() ? this.sinceTurnMs < Eu.n.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: uu
        } : (this.waiting = null, this.startIn(uu)) : this.waiting = null
      }
      advance(uu) {
        const Ru = this.waiting;
        if (null === Ru) return this.step(uu);
        const yu = Eu.n.minFadeTurnMs - this.sinceTurnMs;
        if (yu > uu) return this.step(uu);
        const Ku = this.step(yu);
        return this.waiting = null, "out" === Ru.turn ? this.startOut(Ru.transition) : this.startIn(Ru.minMs), this.step(uu - yu) || Ku
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(uu) {
        ("in" === this.phase || null === this.phase && this.clearMs < Eu.n.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = uu.colour), this.outMs = uu.outMs, this.holdMs = uu.holdMs, this.inMs = uu.inMs
      }
      startIn(uu) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(uu, this.inMs)
      }
      step(uu) {
        const Ru = this.screen;
        this.sinceTurnMs += uu, null === this.phase && (this.clearMs += uu);
        let yu = !1,
          Ku = uu;
        if ("out" === this.phase) {
          const Eu = (1 - Ru.alpha) * this.outMs;
          if (Ru.alpha = mu(Ru.alpha, 1, uu, this.outMs), Ru.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, Ku = Math.max(0, uu - Eu), yu = !0
        }
        let Qu = uu;
        if ("hold" === this.phase) {
          this.heldMs += Ku;
          const uu = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Eu.n.minFadeTurnMs);
          if (uu < 0 || yu) return yu;
          this.phase = "in", this.sinceTurnMs = uu, Qu = uu
        }
        return "in" === this.phase && (Ru.alpha = mu(Ru.alpha, 0, Qu, this.inMs), Ru.alpha <= 0 && (this.phase = null, this.clearMs = 0)), yu
      }
    }
    var Nu = yu(38915),
      Xu = yu(38947),
      Vu = yu(1823),
      ru = yu(36407);

    function Bu(uu, Ru) {
      for (let yu = 0; yu < Ru.length; yu++) Ru[yu] = uu[yu]
    }

    function xu(uu, Ru) {
      var yu;
      return null !== (yu = uu.fov) && void 0 !== yu ? yu : Ru.getDefaultFov()
    }

    function Su(uu, Ru, yu, Eu, Ku) {
      const Qu = 2 / Eu,
        mu = Math.exp(-Qu * Ku);
      for (let Ju = 0; Ju < uu.length; Ju++) {
        const Eu = uu[Ju] - yu[Ju],
          Nu = (Ru[Ju] + Qu * Eu) * Ku;
        uu[Ju] = yu[Ju] + (Eu + Nu) * mu, Ru[Ju] = (Ru[Ju] - Qu * Nu) * mu
      }
    }
    class pu {
      constructor(uu, Ru, yu, Eu) {
        var Qu, mu, Ju, Nu, Xu;
        this.settings = uu, this.Fr = Ru, this.targets = yu, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.JT = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Ku.A)((0, Vu.i)(null !== (Qu = uu.viewHeading) && void 0 !== Qu ? Qu : 0)),
          pitch: (0, Ku.l)((0, Vu.i)(null !== (mu = uu.viewElevation) && void 0 !== mu ? mu : 45))
        }, this.closestDistance = null !== (Ju = uu.closestDistance) && void 0 !== Ju ? Ju : Math.min(6, null !== (Nu = uu.furthestDistance) && void 0 !== Nu ? Nu : 1 / 0), this.furthestDistance = null !== (Xu = uu.furthestDistance) && void 0 !== Xu ? Xu : Math.max(64, this.closestDistance);
        const ru = (0, Ku.h)(this.base.heading, this.base.pitch, this.forward),
          Bu = Eu.position,
          xu = this.closestDistance;
        this.goal = [Bu[0] + ru[0] * xu, Bu[1] + ru[1] * xu, Bu[2] + ru[2] * xu, xu, this.base.heading, this.base.pitch]
      }
      update(uu, Ru, yu) {
        var Eu, Qu;
        this.placeGoal(null !== (Eu = this.settings.fov) && void 0 !== Eu ? Eu : this.Fr.getBaseFov()), this.goal[4] = (0, Ku.G)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const mu = null !== (Qu = this.settings.smoothMs) && void 0 !== Qu ? Qu : 400;
        !this.started || mu < 1 ? (Bu(this.goal, this.smoothed), this.JT.fill(0), this.started = !0) : Su(this.smoothed, this.JT, this.goal, mu, uu), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Ku.l)(this.smoothed[5]), Ru.apply(this.angles, yu);
        const Ju = (0, Ku.h)(yu.heading, yu.pitch, this.forward);
        for (let Ku = 0; Ku < 3; Ku++) yu.position[Ku] = this.smoothed[Ku] - Ju[Ku] * this.smoothed[3];
        yu.fov = xu(this.settings, this.Fr)
      }
      continueFrom(uu) {
        uu instanceof pu && (Bu(uu.goal, this.goal), Bu(uu.smoothed, this.smoothed), Bu(uu.JT, this.JT), this.framedTargets = uu.framedTargets, this.started = uu.started)
      }
      reset() {
        this.JT.fill(0), this.started = !1
      }
      placeGoal(uu) {
        var Ru;
        let yu = 0;
        for (const Vu of this.settings.targets) {
          const uu = this.targets.currentAimPoint(Vu);
          uu && (0, Nu.i)(uu, this.pointAt(yu++))
        }
        if (yu > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const uu = this.targets.aimPoint(this.Fr.localPlayerId);
          uu && (0, Nu.i)(uu, this.pointAt(yu++))
        }
        const Eu = this.goal;
        if (0 === yu) return void(Eu[3] = this.withinDistances(Eu[3]));
        for (let Nu = 0; Nu < 3; Nu++) {
          let uu = 1 / 0,
            Ru = -1 / 0;
          for (let Eu = 0; Eu < yu; Eu++) uu = Math.min(uu, this.points[Eu][Nu]), Ru = Math.max(Ru, this.points[Eu][Nu]);
          Eu[Nu] = (uu + Ru) / 2
        }
        let Ku = 0;
        for (let Nu = 0; Nu < yu; Nu++) {
          const uu = this.points[Nu];
          Ku = Math.max(Ku, Math.hypot(uu[0] - Eu[0], uu[1] - Eu[1], uu[2] - Eu[2]))
        }
        const Qu = Math.tan((0, Vu.i)(uu) / 2),
          mu = Math.atan(Qu * (!0 === this.settings.letterbox ? ru.d : 1)),
          Ju = Math.atan(Qu * this.Fr.getAspectRatio()),
          Xu = (Ku + (null !== (Ru = this.settings.padding) && void 0 !== Ru ? Ru : 2)) / Math.sin(Math.min(mu, Ju));
        Eu[3] = this.withinDistances(Xu)
      }
      withinDistances(uu) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, uu))
      }
      pointAt(uu) {
        return uu === this.points.length && this.points.push([0, 0, 0]), this.points[uu]
      }
    }
    class Tu {
      constructor(uu) {
        this.limits = uu, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(uu) {
        this.limits && (this.yawOffset = uu.yawOffset, this.pitchOffset = uu.pitchOffset, this.idleMs = uu.idleMs)
      }
      update(uu, Ru) {
        const yu = this.limits;
        if (!yu) return;
        const Eu = Number.isFinite(Ru.RD) ? Ru.RD : 0,
          Ku = Number.isFinite(Ru.mD) ? Ru.mD : 0;
        if (Ru.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: Ru.pointedAt.heading,
          pitch: Ru.pointedAt.pitch
        };
        else if (0 !== Eu || 0 !== Ku) this.idleMs = 0, this.yawOffset += Eu, this.pitchOffset += Ku;
        else {
          const Ru = Math.max(0, this.idleMs + uu - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += uu, void 0 !== yu.returnMs && Ru > 0) {
            const uu = yu.returnMs > 0 ? Math.exp(-3 * Ru / yu.returnMs) : 0;
            this.yawOffset *= uu, this.pitchOffset *= uu
          }
        }
        this.clampOffsets(yu)
      }
      clampOffsets(uu) {
        if (uu.maxYaw >= 180) this.yawOffset = (0, Ku.E)(0, this.yawOffset);
        else {
          const Ru = (0, Vu.i)(uu.maxYaw);
          this.yawOffset = Math.max(-Ru, Math.min(Ru, this.yawOffset))
        }
        const Ru = (0, Vu.i)(uu.maxPitch);
        this.pitchOffset = Math.max(-Ru, Math.min(Ru, this.pitchOffset))
      }
      apply(uu, Ru) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Ku.E)(uu.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - uu.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const yu = (0, Ku.l)(uu.pitch + this.pitchOffset);
        this.pitchOffset = yu - uu.pitch, Ru.heading = (0, Ku.A)(uu.heading + this.yawOffset), Ru.pitch = yu
      }
      unapply(uu, Ru) {
        Ru.heading = (0, Ku.A)(uu.heading - this.yawOffset), Ru.pitch = (0, Ku.l)(uu.pitch - this.pitchOffset)
      }
    }
    const Wu = 1e-6;

    function ju(uu) {
      return Math.sqrt(uu[0] * uu[0] + uu[1] * uu[1] + uu[2] * uu[2])
    }

    function Hu(uu, Ru, yu, Eu, Ku) {
      const Qu = Ku * Ku,
        mu = Qu * Ku;
      return (2 * mu - 3 * Qu + 1) * uu + (mu - 2 * Qu + Ku) * Ru + (-2 * mu + 3 * Qu) * yu + (mu - Qu) * Eu
    }

    function du(uu, Ru, yu, Eu, Ku) {
      const Qu = Ku * Ku;
      return (6 * Qu - 6 * Ku) * uu + (3 * Qu - 4 * Ku + 1) * Ru + (-6 * Qu + 6 * Ku) * yu + (3 * Qu - 2 * Ku) * Eu
    }

    function bu(uu, Ru) {
      const yu = Ru[0] - uu[0],
        Eu = Ru[1] - uu[1],
        Ku = Ru[2] - uu[2];
      return Math.sqrt(yu * yu + Eu * Eu + Ku * Ku)
    }

    function Cu(uu, Ru, yu, Eu, Ku, Qu) {
      for (let mu = 0; mu < 3; mu++) Qu[mu] = Ku ? uu[mu] * Eu : yu[mu] - Ru[mu];
      return Ku && function(uu, Ru) {
        const yu = ju(uu);
        if (yu > Ru) {
          const Eu = Ru / yu;
          uu[0] *= Eu, uu[1] *= Eu, uu[2] *= Eu
        }
      }(Qu, 3 * bu(Ru, yu)), Qu
    }

    function ku(uu, Ru, yu, Eu) {
      for (let Ku = 0; Ku < 3; Ku++) Eu[Ku] = 6 * (Ru[Ku] - uu[Ku]) - 2 * yu[Ku];
      if (ju(Eu) < Wu)
        for (let Ku = 0; Ku < 3; Ku++) Eu[Ku] = Ru[Ku] - uu[Ku];
      return Eu
    }

    function eu(uu, Ru) {
      return [2 * Ru[0] - uu[0], 2 * Ru[1] - uu[1], 2 * Ru[2] - uu[2]]
    }

    function Au(uu, Ru, yu, Eu, Ku, Qu, mu) {
      if (!Qu && !mu) return 0;
      const Ju = Qu ? uu : 2 * Ru - yu,
        Nu = mu ? yu : 2 * Ru - uu,
        Xu = Qu ? Eu : Ku,
        Vu = mu ? Ku : Eu,
        ru = (Ru - Ju) / Xu,
        Bu = (Nu - Ru) / Vu;
      if (ru * Bu <= 0) return 0;
      const xu = (Nu - Ju) / (Xu + Vu),
        Su = 3 * Math.min(Math.abs(ru), Math.abs(Bu));
      return Math.max(-Su, Math.min(Su, xu))
    }

    function Du(uu, Ru, yu, Eu, Ku, Qu, mu) {
      const {
        u: Ju,
        segmentMs: Nu
      } = uu;
      if (!uu.curved) return yu + (Eu - yu) * Ju;
      return Hu(yu, Au(Ru, yu, Eu, uu.beforeMs, Nu, Qu, !0) * Nu, Eu, Au(yu, Eu, Ku, Nu, uu.afterMs, !0, mu) * Nu, Ju)
    }

    function Mu(uu) {
      return Math.abs(uu.pitch) >= Ku.e
    }
    class Iu {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.nodes = uu, this.prevNodes = yu, this.nextNodes = Eu, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = uu.map(((uu, yu) => this.nodeTangent(Ru, Ku, yu)))
      }
      sample(uu, Ru, yu) {
        const {
          index: Eu,
          toIndex: Qu,
          segmentMs: mu,
          curved: Ju
        } = uu, Nu = this.fromAngles, Xu = this.toAngles, Vu = this.nodeAngles(Eu, yu.position, Ru, Nu), ru = this.nodeAngles(Qu, yu.position, Ru, Xu);
        if (mu > 0 && "aim" !== Vu && "aim" !== ru && this.liveTangent(uu, Nu)) return yu.heading = (0, Ku.A)(Nu.heading), void(yu.pitch = Nu.pitch);
        if ("none" === Vu && "none" === ru) return;
        !Ju && mu > 0 && ("tangent" === Vu && this.liveTangent(uu, Nu), "tangent" === ru && this.liveTangent(uu, Xu)), "none" === Vu ? (0, Ku.o)(Xu, Nu) : "none" === ru && (0, Ku.o)(Nu, Xu);
        const Bu = Ju && uu.beforeIndex >= 0 && "none" !== this.nodeAngles(uu.beforeIndex, yu.position, Ru, this.beforeAngles),
          xu = Ju && uu.afterIndex >= 0 && "none" !== this.nodeAngles(uu.afterIndex, yu.position, Ru, this.afterAngles),
          Su = (0, Ku.G)(Nu.heading, Xu.heading),
          pu = Du(uu, Bu ? (0, Ku.G)(Nu.heading, this.beforeAngles.heading) : 0, Nu.heading, Su, xu ? (0, Ku.G)(Su, this.afterAngles.heading) : 0, Bu, xu);
        yu.heading = (0, Ku.A)(pu), yu.pitch = (0, Ku.l)(Du(uu, this.beforeAngles.pitch, Nu.pitch, Xu.pitch, this.afterAngles.pitch, Bu, xu))
      }
      nodeAngles(uu, Ru, yu, Eu) {
        const Ku = this.rawNodeAngles(uu, Ru, yu, Eu);
        return "none" !== Ku && Mu(Eu) && !this.borrowHeading(this.prevNodes[uu], Ru, yu, Eu) && this.borrowHeading(this.nextNodes[uu], Ru, yu, Eu), Ku
      }
      borrowHeading(uu, Ru, yu, Eu) {
        const Ku = this.borrowedAngles;
        return !(uu < 0 || "none" === this.rawNodeAngles(uu, Ru, yu, Ku) || Mu(Ku)) && (Eu.heading = Ku.heading, !0)
      }
      rawNodeAngles(uu, Ru, yu, Eu) {
        const Qu = this.nodes[uu].keyframe;
        if (Qu.lookDirection) return (0, Ku.r)(Qu.lookDirection, Eu), "aim";
        if (void 0 !== Qu.lookAt) {
          const uu = yu(Qu.lookAt);
          if (uu) return (0, Ku.x)(Ru, uu, Eu), "aim"
        }
        const mu = this.tangents[uu];
        return mu ? ((0, Ku.o)(mu, Eu), "tangent") : "none"
      }
      liveTangent(uu, Ru) {
        const yu = this.nodes[uu.index].position,
          Eu = this.nodes[uu.toIndex].position,
          Qu = this.derivative;
        for (let Ku = 0; Ku < 3; Ku++) Qu[Ku] = du(yu[Ku], uu.fromTangent[Ku], Eu[Ku], uu.toTangent[Ku], uu.u);
        return ju(Qu) > 1e-9 ? ((0, Ku.r)(Qu, Ru), !0) : !(bu(yu, Eu) < Wu) && ((0, Ku.r)(ku(yu, Eu, uu.u < .5 ? uu.toTangent : uu.fromTangent, Qu), Ru), !0)
      }
      nodeTangent(uu, Ru, yu) {
        var Eu;
        const Qu = uu[yu];
        if (ju(Qu) > 1e-9) return (0, Ku.r)(Qu, {
          heading: 0,
          pitch: 0
        });
        const mu = null !== (Eu = this.restDirectionTo(yu, yu + 1, uu, Ru)) && void 0 !== Eu ? Eu : this.restDirectionTo(yu, yu - 1, uu, Ru);
        return mu ? (0, Ku.r)(mu, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(uu, Ru, yu, Eu) {
        const Ku = this.nodes[uu],
          Qu = this.nodes[Ru];
        if (!Qu || bu(Ku.position, Qu.position) < Wu) return null;
        const [mu, Ju] = Ru > uu ? [Ku, Qu] : [Qu, Ku], Nu = Cu(yu[Ru], mu.position, Ju.position, Ju.timeMs - mu.timeMs, Eu, [0, 0, 0]);
        return ku(mu.position, Ju.position, Nu, [0, 0, 0])
      }
    }

    function Gu(uu, Ru) {
      const yu = uu.lookDirection || Ru.lookDirection ? function(uu, Ru) {
        if (!uu || !Ru) return uu === Ru;
        const yu = ju(uu),
          Eu = ju(Ru);
        return Math.hypot(uu[0] / yu - Ru[0] / Eu, uu[1] / yu - Ru[1] / Eu, uu[2] / yu - Ru[2] / Eu) < Wu
      }(uu.lookDirection, Ru.lookDirection) : (Eu = uu.lookAt, Ku = Ru.lookAt, "object" !== typeof Eu || "object" !== typeof Ku ? Eu === Ku : bu(Eu, Ku) < Wu);
      var Eu, Ku;
      return bu(uu.position, Ru.position) < Wu && uu.fov === Ru.fov && yu
    }
    class Uu {
      constructor(uu, Ru, yu) {
        if (this.smooth = Ru, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === uu.length) throw new Error("A camera path needs at least one keyframe");
        for (let Qu = 1; Qu < uu.length; Qu++)
          if (!(uu[Qu].timeMs > uu[Qu - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = uu.map((uu => {
          var Ru;
          return {
            timeMs: uu.timeMs,
            position: [...uu.position],
            keyframe: uu,
            easing: (0, Qu.s)(null !== (Ru = uu.easing) && void 0 !== Ru ? Ru : "linear")
          }
        }));
        const Eu = this.nodes[0],
          Ku = this.nodes[this.nodes.length - 1],
          mu = yu && this.nodes.length > 1;
        mu && !Gu(Eu.keyframe, Ku.keyframe) && this.nodes.push({
          ...Eu,
          timeMs: Ku.timeMs + (Ku.timeMs - Eu.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = mu ? this.nodes[this.nodes.length - 1].timeMs - Eu.timeMs : 0, this.prevNodes = this.nodes.map(((uu, Ru) => this.neighbour(Ru, -1))), this.nextNodes = this.nodes.map(((uu, Ru) => this.neighbour(Ru, 1))), this.prevGaps = this.prevNodes.map(((uu, Ru) => uu >= 0 ? this.gapMs(Ru, -1) : 0)), this.nextGaps = this.nextNodes.map(((uu, Ru) => uu >= 0 ? this.gapMs(Ru, 1) : 0)), this.velocities = this.nodes.map(((uu, Ru) => {
          const yu = this.prevNodes[Ru],
            Eu = this.nextNodes[Ru];
          return function(uu, Ru, yu, Eu, Ku, Qu) {
            if (Qu[0] = 0, Qu[1] = 0, Qu[2] = 0, !uu && !yu) return Qu;
            const mu = null !== uu && void 0 !== uu ? uu : eu(null !== yu && void 0 !== yu ? yu : Ru, Ru),
              Ju = null !== yu && void 0 !== yu ? yu : eu(null !== uu && void 0 !== uu ? uu : Ru, Ru),
              Nu = uu ? Eu : Ku,
              Xu = yu ? Ku : Eu,
              Vu = bu(mu, Ru),
              ru = bu(Ru, Ju);
            if (Vu < Wu || ru < Wu) return Qu;
            const Bu = Math.sqrt(Vu),
              xu = Math.sqrt(ru),
              Su = (Bu + xu) / (Nu + Xu);
            for (let pu = 0; pu < 3; pu++) {
              const uu = (Ru[pu] - mu[pu]) / Bu - (Ju[pu] - mu[pu]) / (Bu + xu) + (Ju[pu] - Ru[pu]) / xu;
              Qu[pu] = uu * Su
            }
            return Qu
          }(yu >= 0 ? this.nodes[yu].position : null, uu.position, Eu >= 0 ? this.nodes[Eu].position : null, this.prevGaps[Ru], this.nextGaps[Ru], [0, 0, 0])
        })), this.aim = new Iu(this.nodes, this.velocities, this.prevNodes, this.nextNodes, Ru)
      }
      sample(uu, Ru, yu, Eu) {
        const Ku = this.findSegment(this.pathTime(uu));
        this.samplePosition(Ku, Eu.position), this.aim.sample(Ku, Ru, Eu);
        const {
          beforeIndex: Qu,
          afterIndex: mu
        } = Ku;
        Eu.fov = Du(Ku, Qu >= 0 ? this.fovAt(Qu, yu) : 0, this.fovAt(Ku.index, yu), this.fovAt(Ku.toIndex, yu), mu >= 0 ? this.fovAt(mu, yu) : 0, Qu >= 0, mu >= 0)
      }
      pathTime(uu) {
        const Ru = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || uu <= Ru) return uu;
        const yu = uu - Ru;
        return Ru + yu - this.loopMs * Math.floor(yu / this.loopMs)
      }
      findSegment(uu) {
        const Ru = this.nodes,
          yu = this.segment;
        let Eu = yu.index;
        for (uu < Ru[Eu].timeMs && (Eu = 0); Eu < Ru.length - 2 && Ru[Eu + 1].timeMs <= uu;) Eu++;
        const Ku = Math.min(Eu + 1, Ru.length - 1),
          mu = Ru[Ku].timeMs - Ru[Eu].timeMs;
        return yu.index = Eu, yu.toIndex = Ku, yu.segmentMs = mu, yu.u = mu > 0 ? (0, Qu.q)((uu - Ru[Eu].timeMs) / mu, Ru[Eu].easing) : 1, yu.curved = this.smooth && mu > 0, yu.beforeIndex = this.prevNodes[Eu], yu.afterIndex = this.nextNodes[Ku], yu.beforeMs = this.prevGaps[Eu], yu.afterMs = this.nextGaps[Ku], yu
      }
      samplePosition(uu, Ru) {
        const {
          fromTangent: yu,
          toTangent: Eu,
          curved: Ku
        } = uu, Qu = this.nodes[uu.index].position, mu = this.nodes[uu.toIndex].position;
        Cu(this.velocities[uu.index], Qu, mu, uu.segmentMs, Ku, yu), Cu(this.velocities[uu.toIndex], Qu, mu, uu.segmentMs, Ku, Eu);
        const Ju = uu.u;
        for (let Nu = 0; Nu < 3; Nu++) Ru[Nu] = Ku ? Hu(Qu[Nu], yu[Nu], mu[Nu], Eu[Nu], Ju) : Qu[Nu] + (mu[Nu] - Qu[Nu]) * Ju
      }
      fovAt(uu, Ru) {
        var yu;
        return null !== (yu = this.nodes[uu].keyframe.fov) && void 0 !== yu ? yu : Ru
      }
      neighbour(uu, Ru) {
        const yu = this.nodes.length - 1,
          Eu = uu + Ru;
        return Eu >= 0 && Eu <= yu ? Eu : this.loopMs <= 0 || yu < 2 ? -1 : Eu < 0 ? yu - 1 : 1
      }
      gapMs(uu, Ru) {
        const yu = this.nodes.length - 1;
        if (1 === Ru) {
          const Ru = uu === yu ? 0 : uu;
          return this.nodes[Ru + 1].timeMs - this.nodes[Ru].timeMs
        }
        const Eu = 0 === uu ? yu : uu;
        return this.nodes[Eu].timeMs - this.nodes[Eu - 1].timeMs
      }
    }
    class nu {
      constructor(uu) {
        this.Fr = uu, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Ru => uu.getEntityPosition(Ru), this.readAimPoint = Ru => uu.getEntityAimPoint(Ru)
      }
      aimPoint(uu) {
        return "string" !== typeof uu ? (0, Nu.s)(uu, 3) ? uu : null : this.resolve(uu, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(uu) {
        const Ru = "string" === typeof uu ? this.Fr.getEntityAimPoint(uu) : uu;
        return Ru && (0, Nu.s)(Ru, 3) ? Ru : null
      }
      feetPosition(uu) {
        return this.resolve(uu, this.readFeet, this.lastFeet)
      }
      heading(uu) {
        const Ru = this.Fr.getEntityHeading(uu);
        if (null !== Ru && Number.isFinite(Ru)) return this.lastHeadings.set(uu, Ru), Ru;
        const yu = this.lastHeadings.get(uu);
        return void 0 !== yu ? yu : uu === this.Fr.localPlayerId ? 0 : this.heading(this.Fr.localPlayerId)
      }
      resolve(uu, Ru, yu) {
        const Eu = Ru(uu);
        let Ku = yu.get(uu);
        return Eu && (0, Nu.s)(Eu, 3) ? (Ku || (Ku = [0, 0, 0], yu.set(uu, Ku)), Ku[0] = Eu[0], Ku[1] = Eu[1], Ku[2] = Eu[2], Ku) : Ku || (uu === this.Fr.localPlayerId ? null : this.resolve(this.Fr.localPlayerId, Ru, yu))
      }
    }

    function su(uu) {
      return {
        heading: uu.heading,
        pitch: uu.pitch
      }
    }

    function tu(uu, Ru) {
      Number.isFinite(uu.heading) && Number.isFinite(uu.pitch) || (0, Ku.o)(Ru, uu)
    }

    function lu(uu, Ru, yu, Eu, Qu) {
      if (Ru) return void(0, Ku.r)(Ru, Qu);
      const mu = Eu.aimPoint(yu);
      mu && (0, Ku.x)(uu, mu, Qu)
    }
    class gu {
      constructor(uu, Ru, yu, Eu) {
        this.settings = uu, this.Fr = Ru, this.targets = yu, this.base = void 0, this.base = su(Eu)
      }
      update(uu, Ru, yu) {
        var Eu;
        const Ku = this.settings;
        (0, Nu.i)(Ku.position, yu.position), lu(Ku.position, Ku.lookDirection, null !== (Eu = Ku.lookAt) && void 0 !== Eu ? Eu : this.Fr.localPlayerId, this.targets, this.base), Ru.apply(this.base, yu), yu.fov = xu(Ku, this.Fr)
      }
      continueFrom(uu) {
        uu instanceof gu && (0, Ku.o)(uu.base, this.base)
      }
      reset(uu) {
        tu(this.base, uu)
      }
    }
    class cu {
      constructor(uu, Ru, yu, Eu) {
        this.settings = uu, this.Fr = Ru, this.targets = yu, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.JT = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = su(Eu), this.goal = [...Eu.position]
      }
      update(uu, Ru, yu) {
        var Eu, Ku, Qu;
        const mu = this.settings,
          Ju = null !== (Eu = mu.target) && void 0 !== Eu ? Eu : this.Fr.localPlayerId,
          Xu = this.targets.feetPosition(Ju);
        let Vu = !1;
        Xu && (Vu = this.foundFeet && bu(this.lastFeet, Xu) > 32 + .1 * uu, (0, Nu.i)(Xu, this.lastFeet), this.foundFeet = !0, this.placeGoal(Xu, Ju));
        const ru = null !== (Ku = mu.smoothMs) && void 0 !== Ku ? Ku : 0;
        !this.started || ru < 1 || Vu ? ((0, Nu.i)(this.goal, this.smoothed), this.JT.fill(0), this.started = !0) : Su(this.smoothed, this.JT, this.goal, ru, uu), Vu && (this.distance = -1), (0, Nu.i)(this.smoothed, yu.position);
        const Bu = !0 === mu.avoidTerrain ? this.pullIn(Ju, uu, yu) : 1;
        let pu = this.goal;
        if ("target" === mu.offsetSpace) pu = yu.position;
        else if (Bu < 1) {
          pu = this.aimOrigin;
          for (let uu = 0; uu < 3; uu++) pu[uu] = yu.position[uu] + (this.goal[uu] - this.smoothed[uu]) * Bu
        }
        lu(pu, mu.lookDirection, null !== (Qu = mu.lookAt) && void 0 !== Qu ? Qu : Ju, this.targets, this.base), Ru.apply(this.base, yu), yu.fov = xu(mu, this.Fr)
      }
      continueFrom(uu) {
        uu instanceof cu && (0, Eu.v)(uu.settings.target, this.settings.target) && ((0, Ku.o)(uu.base, this.base), (0, Nu.i)(uu.goal, this.goal), (0, Nu.i)(uu.lastFeet, this.lastFeet), this.foundFeet = uu.foundFeet, (0, Nu.i)(uu.smoothed, this.smoothed), (0, Nu.i)(uu.JT, this.JT), this.started = uu.started, !0 === uu.settings.avoidTerrain && (this.distance = uu.distance))
      }
      reset(uu) {
        tu(this.base, uu), this.JT.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(uu, Ru, yu) {
        const Eu = this.targets.aimPoint(uu);
        if (!Eu) return 1;
        const Ku = yu.position,
          Qu = bu(Eu, Ku);
        if (!(Qu > 0)) return 1;
        const mu = this.toCamera;
        for (let Nu = 0; Nu < 3; Nu++) mu[Nu] = (Ku[Nu] - Eu[Nu]) / Qu;
        const Ju = function(uu, Ru, yu) {
          return uu < 0 || Ru < uu ? Ru : Ru + (uu - Ru) * Math.exp(-yu / 150)
        }(this.distance, function(uu, Ru, yu, Eu) {
          const Ku = uu.raycastTerrain(Ru, yu, Eu);
          return null !== Ku && Number.isFinite(Ku) ? Math.min(Eu, Math.max(0, Ku - .2)) : Eu
        }(this.Fr, Eu, mu, Qu), Ru);
        if (Qu - Ju < .001) return this.distance = -1, 1;
        this.distance = Ju;
        for (let Nu = 0; Nu < 3; Nu++) Ku[Nu] = Eu[Nu] + mu[Nu] * Ju;
        return Ju / Qu
      }
      placeGoal(uu, Ru) {
        const yu = this.settings.offset;
        let Eu = yu[0],
          Ku = yu[2];
        if ("target" === this.settings.offsetSpace) {
          const uu = this.targets.heading(Ru),
            Qu = Math.cos(uu),
            mu = Math.sin(uu);
          Eu = yu[0] * Qu + yu[2] * mu, Ku = -yu[0] * mu + yu[2] * Qu
        }
        this.goal[0] = uu[0] + Eu, this.goal[1] = uu[1] + yu[1], this.goal[2] = uu[2] + Ku
      }
    }
    class Lu {
      constructor(uu, Ru, yu, Eu) {
        var Ku, Qu;
        this.settings = uu, this.Fr = Ru, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = uu.keyframes.length > 0 ? new Uu(uu.keyframes, null === (Ku = uu.smooth) || void 0 === Ku || Ku, null !== (Qu = uu.loop) && void 0 !== Qu && Qu) : null, this.base = (0, Nu.e)(Eu, (0, Nu.l)()), this.resolveTarget = uu => yu.aimPoint(uu)
      }
      update(uu, Ru, yu) {
        this.elapsedMs += uu;
        const Eu = xu(this.settings, this.Fr);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Eu, this.base) : this.base.fov = Eu, (0, Nu.i)(this.base.position, yu.position), yu.fov = this.base.fov, Ru.apply(this.base, yu)
      }
      continueFrom(uu) {
        uu instanceof Lu && (0, Eu.v)(uu.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = uu.elapsedMs, (0, Nu.e)(uu.base, this.base))
      }
      reset(uu) {
        tu(this.base, uu), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function zu(uu, Ru) {
      return (0, Eu.w)(uu, Ru)
    }
    class Fu {
      constructor(uu, Ru, yu) {
        var Eu;
        this.settings = uu, this.Fr = Ru, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Ku = null !== yu && yu.settings.mode === uu.mode,
          Qu = Ku ? yu.pose : Ru.getDefaultPose();
        this.pose = (0, Nu.e)(Qu, (0, Nu.l)()), this.lastGoodPose = (0, Nu.e)(Ku ? yu.lastGoodPose : Qu, (0, Nu.l)()), this.look = new Tu(uu.playerLook), this.targets = null !== (Eu = null === yu || void 0 === yu ? void 0 : yu.targets) && void 0 !== Eu ? Eu : new nu(Ru);
        const mu = (0, Nu.e)(Qu, (0, Nu.l)());
        Ku && yu.look.unapply(mu, mu), this.mode = function(uu, Ru, yu, Eu) {
          switch (uu.mode) {
            case "fixed":
              return new gu(uu, Ru, yu, Eu);
            case "follow":
              return new cu(uu, Ru, yu, Eu);
            case "path":
              return new Lu(uu, Ru, yu, Eu);
            case "frame":
              return new pu(uu, Ru, yu, Eu)
          }
        }(uu, Ru, this.targets, mu), Ku && (this.look.continueFrom(yu.look), this.mode.continueFrom(yu.mode))
      }
      update(uu, Ru) {
        return this.look.update(uu, Ru), this.mode.update(uu, this.look, this.pose), (0, Nu.p)(this.pose) ? (0, Nu.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, Nu.e)(this.lastGoodPose, this.pose), this.mode.reset((0, Nu.p)(this.lastGoodPose) ? this.lastGoodPose : this.Fr.getDefaultPose())), this.pose
      }
    }

    function wu(uu) {
      return [0, 0, uu[2], uu[3]]
    }
    class Zu {
      constructor(uu) {
        this.Fr = uu, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new Ju, this.shot = null, this.blend = null, this.mixed = (0, Nu.l)(), this.output = (0, Nu.l)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(uu) {
        const Ru = (0, Xu.c)(uu);
        if ((0, Eu.v)(Ru, this.pending ? this.pending.settings : this.settings)) return;
        const yu = zu(this.settings, Ru);
        if (void 0 !== Ru.transition && !yu) return this.pending = {
          settings: Ru,
          shot: "default" === Ru.mode ? null : new Fu(Ru, this.Fr, null)
        }, void this.fade.fadeOut(Ru.transition);
        const Ku = null !== this.pending;
        this.pending = null, !Ku && yu || this.fade.fadeIn(Eu.n.minTransitionFadeMs), this.show(Ru, !1)
      }
      show(uu, Ru) {
        var yu, Ku;
        if ((0, Eu.v)(uu, this.settings)) return;
        const mu = !Ru && zu(this.settings, uu);
        this.settings = uu;
        const Ju = null !== this.blend && this.blend.elapsedMs > 0,
          Xu = (0, Nu.e)(this.hasOutput ? this.output : this.Fr.getDefaultPose(), (0, Nu.l)());
        if (this.shot = "default" === uu.mode ? null : new Fu(uu, this.Fr, Ru ? null : this.shot), mu) return;
        const Vu = Ru || !this.shot && !this.hasOutput ? 0 : null !== (yu = uu.blendInMs) && void 0 !== yu ? yu : 0;
        if (Vu <= 0) return void(this.blend = null);
        const ru = (0, Qu.s)(null !== (Ku = uu.blendEasing) && void 0 !== Ku ? Ku : "easeInOut");
        this.blend = {
          from: Xu,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Vu,
          easing: Ju ? wu(ru) : ru
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
      update(uu, Ru) {
        const yu = Number.isFinite(uu) && uu > 0 ? uu : 0;
        if (this.fade.advance(yu) && null !== this.pending) {
          const {
            settings: uu
          } = this.pending;
          this.pending = null, this.show(uu, !0)
        }
        this.loadingPositions.length = 0;
        const Eu = this.pending;
        if (null !== Eu && void 0 !== Eu && Eu.shot) {
          const uu = "path" === Eu.settings.mode ? 0 : yu;
          this.noteLoadingPosition(Eu.shot.update(uu, Nu.c).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const mu = this.shot ? this.shot.update(yu, Ru) : this.Fr.getDefaultPose();
        this.shot && this.noteLoadingPosition(mu.position);
        const Ju = this.blend;
        if (!Ju) return this.writeOutput(mu);
        Ju.elapsedMs += yu;
        const Xu = Math.min(1, Ju.elapsedMs / Ju.durationMs);
        if (Ju.headingDelta = Number.isFinite(Ju.headingDelta) ? (0, Ku.G)(Ju.headingDelta, mu.heading - Ju.from.heading) : (0, Ku.E)(Ju.from.heading, mu.heading), (0, Nu.v)(Ju.from, mu, Ju.headingDelta, (0, Qu.q)(Xu, Ju.easing), this.mixed), Xu >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else Ju.fromScripted && this.noteLoadingPosition(Ju.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(uu) {
        if (uu.every(Number.isFinite)) {
          const Ru = this.loadingPositions;
          Ru.push((0, Nu.i)(uu, this.loadingSlots[Ru.length]))
        }
      }
      writeOutput(uu) {
        const Ru = this.output;
        (0, Nu.p)(uu) ? (0, Nu.e)(uu, Ru) : this.hasOutput || (0, Nu.e)(this.Fr.getDefaultPose(), Ru), Ru.pitch = (0, Ku.l)(Ru.pitch);
        const yu = this.Fr.getDefaultFov(),
          Qu = Number.isFinite(yu) && yu > 0 && yu < 180,
          mu = Qu ? Math.min(Eu.n.minFov, yu) : Eu.n.minFov,
          Ju = Qu ? Math.max(Eu.n.maxFov, yu) : Eu.n.maxFov;
        return Ru.fov = Number.isFinite(Ru.fov) ? Math.min(Ju, Math.max(mu, Ru.fov)) : Ju, this.hasOutput = !0, Ru
      }
    }
  },
  38915: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      e: () => Ju,
      i: () => mu,
      l: () => Qu,
      p: () => Xu,
      s: () => Nu,
      v: () => Vu
    });
    var Eu = yu(38918);
    const Ku = {
      RD: 0,
      mD: 0
    };

    function Qu() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function mu(uu, Ru) {
      return Ru[0] = uu[0], Ru[1] = uu[1], Ru[2] = uu[2], Ru
    }

    function Ju(uu, Ru) {
      return mu(uu.position, Ru.position), Ru.heading = uu.heading, Ru.pitch = uu.pitch, Ru.fov = uu.fov, Ru
    }

    function Nu(uu, Ru) {
      return Array.isArray(uu) && uu.length === Ru && uu.every(Number.isFinite)
    }

    function Xu(uu) {
      return Nu(uu.position, 3) && Number.isFinite(uu.heading) && Number.isFinite(uu.pitch) && Number.isFinite(uu.fov)
    }

    function Vu(uu, Ru, yu, Ku, Qu) {
      for (let Eu = 0; Eu < 3; Eu++) Qu.position[Eu] = uu.position[Eu] + (Ru.position[Eu] - uu.position[Eu]) * Ku;
      return Qu.heading = (0, Eu.A)(uu.heading + yu * Ku), Qu.pitch = uu.pitch + (Ru.pitch - uu.pitch) * Ku, Qu.fov = uu.fov + (Ru.fov - uu.fov) * Ku, Qu
    }
  },
  38947: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => ku,
      e: () => Bu
    });
    var Eu = yu(38939),
      Ku = yu(38915);
    const Qu = Eu.k,
      mu = Eu.q;

    function Ju(uu, Ru, yu, Eu) {
      return Number.isFinite(uu) ? Math.min(yu, Math.max(Ru, uu)) : Eu
    }

    function Nu(uu, Ru, yu) {
      return void 0 !== uu && Number.isFinite(uu) ? Math.min(yu, Math.max(Ru, uu)) : void 0
    }

    function Xu(uu) {
      const Ru = Eu.n.maxCoordinate;
      return [Math.min(Ru, Math.max(-Ru, uu[0])), Math.min(Ru, Math.max(-Ru, uu[1])), Math.min(Ru, Math.max(-Ru, uu[2]))]
    }

    function Vu(uu) {
      return "string" === typeof uu ? uu : (0, Ku.s)(uu, 3) ? Xu(uu) : void 0
    }
    const ru = new RegExp(Eu.s);

    function Bu(uu) {
      return "string" === typeof uu && ru.test(uu)
    }

    function xu(uu) {
      const Ru = [];
      if (!Array.isArray(uu)) return Ru;
      for (const yu of uu.slice(0, Eu.n.maxFrameTargets)) {
        const uu = Vu(yu);
        void 0 === uu || "string" === typeof uu && !Bu(uu) || Ru.push(uu)
      }
      return Ru
    }

    function Su(uu) {
      if (!(0, Ku.s)(uu, 3)) return;
      const Ru = Math.max(Math.abs(uu[0]), Math.abs(uu[1]), Math.abs(uu[2])),
        yu = Math.hypot(uu[0] / Ru, uu[1] / Ru, uu[2] / Ru);
      return 0 === Ru || Ru * yu < Eu.n.minDirectionLength ? void 0 : [uu[0] / Ru / yu, uu[1] / Ru / yu, uu[2] / Ru / yu]
    }

    function pu(uu) {
      if (void 0 !== uu) return "string" === typeof uu ? Qu.includes(uu) ? uu : void 0 : (0, Ku.s)(uu, 4) ? [Ju(uu[0], 0, 1, 0), Ju(uu[1], Eu.n.minEasingY, Eu.n.maxEasingY, 0), Ju(uu[2], 0, 1, 1), Ju(uu[3], Eu.n.minEasingY, Eu.n.maxEasingY, 1)] : "linear"
    }

    function Tu(uu) {
      if (uu) return {
        maxYaw: Ju(uu.maxYaw, 0, Eu.n.maxPlayerLook, 0),
        maxPitch: Ju(uu.maxPitch, 0, Eu.n.maxPlayerLook, 0),
        returnMs: Nu(uu.returnMs, 0, Eu.n.maxReturnMs)
      }
    }
    const Wu = new RegExp(Eu.d);

    function ju(uu) {
      var Ru;
      if ("object" !== typeof uu || null === uu) return;
      const yu = Eu.n.maxTransitionMs,
        Ku = Eu.n.minTransitionFadeMs;
      return {
        colour: "string" === typeof uu.colour && Wu.test(uu.colour) ? uu.colour : Eu.g,
        outMs: Ju(uu.outMs, Ku, yu, Ku),
        holdMs: Ju(null !== (Ru = uu.holdMs) && void 0 !== Ru ? Ru : 0, 0, yu, 0),
        inMs: Ju(uu.inMs, Ku, yu, Ku)
      }
    }

    function Hu(uu) {
      return !0 === uu || void 0
    }

    function du(uu) {
      if ("object" !== typeof uu || null === uu) return !1;
      const Ru = uu.lookAt;
      return Number.isFinite(uu.timeMs) && (0, Ku.s)(uu.position, 3) && (void 0 === Ru || "string" === typeof Ru || (0, Ku.s)(Ru, 3))
    }

    function bu(uu) {
      return {
        ...uu,
        timeMs: Ju(uu.timeMs, 0, Eu.n.maxPathMs, 0),
        position: Xu(uu.position),
        lookAt: Vu(uu.lookAt),
        lookDirection: Su(uu.lookDirection),
        fov: Nu(uu.fov, Eu.n.minFov, Eu.n.maxFov),
        easing: pu(uu.easing)
      }
    }

    function Cu(uu) {
      const Ru = [];
      if (!Array.isArray(uu)) return Ru;
      for (const yu of uu.slice(0, Eu.n.maxKeyframes)) {
        if (!du(yu)) continue;
        const uu = bu(yu);
        (0 === Ru.length || uu.timeMs > Ru[Ru.length - 1].timeMs) && Ru.push(uu)
      }
      return Ru
    }

    function ku(uu) {
      if ("object" !== typeof uu || null === uu) return {
        mode: "default"
      };
      const Ru = {
          blendInMs: Nu(uu.blendInMs, 0, Eu.n.maxBlendInMs),
          blendEasing: pu(uu.blendEasing),
          transition: ju(uu.transition),
          letterbox: Hu(uu.letterbox),
          hideHud: Hu(uu.hideHud)
        },
        yu = {
          mode: "default",
          ...Ru
        };
      if ("default" === uu.mode || "fixed" === uu.mode && !(0, Ku.s)(uu.position, 3)) return yu;
      const Qu = {
        ...Ru,
        fov: Nu(uu.fov, Eu.n.minFov, Eu.n.maxFov),
        playerFacing: (ru = uu.playerFacing, mu.includes(ru) ? ru : void 0),
        playerLook: Tu(uu.playerLook)
      };
      var ru, Bu;
      switch (uu.mode) {
        case "fixed":
          return {
            ...uu, ...Qu, position: Xu(uu.position), lookAt: Vu(uu.lookAt), lookDirection: Su(uu.lookDirection)
          };
        case "follow":
          return {
            ...uu, ...Qu, target: "string" === typeof uu.target ? uu.target : void 0, lookAt: Vu(uu.lookAt), offset: (Bu = uu.offset, Array.isArray(Bu) ? [Ju(Bu[0], -Eu.n.maxOffset, Eu.n.maxOffset, 0), Ju(Bu[1], -Eu.n.maxOffset, Eu.n.maxOffset, 0), Ju(Bu[2], -Eu.n.maxOffset, Eu.n.maxOffset, 0)] : [0, 0, 0]), lookDirection: Su(uu.lookDirection), smoothMs: Nu(uu.smoothMs, 0, Eu.n.maxSmoothMs)
          };
        case "path":
          return {
            ...uu, ...Qu, keyframes: Cu(uu.keyframes)
          };
        case "frame":
          return {
            ...uu, ...Qu, targets: xu(uu.targets), viewHeading: Nu(uu.viewHeading, -Eu.n.maxFrameHeading, Eu.n.maxFrameHeading), viewElevation: Nu(uu.viewElevation, 0, Eu.n.maxFrameElevation), padding: Nu(uu.padding, 0, Eu.n.maxFrameDistance), closestDistance: Nu(uu.closestDistance, 0, Eu.n.maxFrameDistance), furthestDistance: Nu(uu.furthestDistance, 0, Eu.n.maxFrameDistance), smoothMs: Nu(uu.smoothMs, 0, Eu.n.maxSmoothMs)
          };
        default:
          return yu
      }
    }
  },
  38427: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju
    });
    var Eu = yu(1199);

    function Ku(uu) {
      const Ru = /(\d*\.?\d+)px/.exec(uu);
      return Ru ? Number(Ru[1]) : null
    }

    function Qu(uu) {
      return uu.split(/[\s,]+/).pop()
    }
    let mu = !1;
    const Ju = {
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
      drawText: function(uu, Ru, Eu, Ju, Nu, Xu) {
        if (Nu <= 0 || Xu <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Vu,
          fontVariant: ru,
          fontWeight: Bu,
          fontSize: xu,
          font: Su
        } = this, pu = [Vu, ru, Bu, `${xu}px`, Su].filter(Boolean).join(" "), Tu = [
          [Bu, `${xu}px`, Qu(Su)].filter(Boolean).join(" "), `${xu}px sans-serif`
        ], Wu = uu.font, ju = function(uu, Ru, yu) {
          for (const Eu of Ru) {
            uu.font = Eu;
            const Ru = Ku(uu.font),
              mu = Qu(Eu);
            if (null !== Ru && Math.abs(Ru - yu) <= .5 && uu.font.toLowerCase().includes(mu.toLowerCase())) return Eu
          }
          return null
        }(uu, [pu, ...Tu], xu);
        ju !== pu && function(uu, Ru, Eu) {
          mu || (mu = !0, Promise.resolve().then((() => yu(1056))).then((yu => {
            let {
              jp: Ku
            } = yu;
            Ku(new Error("A canvas didn't take canvasTxt's font"), {
              font: uu,
              kx: Ru,
              drawnWith: null !== Eu && void 0 !== Eu ? Eu : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(pu, Wu, ju);
        const Hu = Ku(uu.font);
        if (null === ju && null !== Hu && Hu > 0) {
          const yu = xu / Hu;
          uu.save();
          try {
            return uu.scale(yu, yu), {
              height: this.drawLines(uu, Ru, Eu / yu, Ju / yu, Nu / yu, Xu / yu, Hu).height * yu
            }
          } finally {
            uu.restore()
          }
        }
        return this.drawLines(uu, Ru, Eu, Ju, Nu, Xu, xu)
      },
      drawLines: function(uu, Ru, yu, Ku, Qu, mu, Ju) {
        const Nu = yu + Qu,
          Xu = Ku + mu;
        let Vu, ru = Ku + mu / 2 + Ju / 2;
        "right" === this.align ? (Vu = Nu, uu.textAlign = "right") : "left" === this.align ? (Vu = yu, uu.textAlign = "left") : (Vu = yu + Qu / 2, uu.textAlign = "center");
        for (const Eu of Ru) {
          uu.measureText(Eu).width >= Qu && (Ru = Ru.replace(Eu, ""))
        }
        Ru = (0, Eu.R)(Ru);
        const Bu = [],
          xu = Ru.split("\n"),
          Su = this.justify ? uu.measureText("\u200a").width : 0;
        xu.forEach((Ru => {
          let yu = uu.measureText(Ru).width;
          if (yu <= Qu) Bu.push(Ru);
          else {
            let Eu = Ru;
            const Ku = Qu;
            let mu, Ju, Nu;
            for (yu = uu.measureText(Eu).width; yu > Ku;) {
              for (mu = 0, Ju = 0, Nu = ""; Ju < Ku;) mu++, Nu = Eu.substr(0, mu), Ju = uu.measureText(Nu).width;
              mu--, Nu = Nu.substr(0, mu);
              const Ru = mu;
              if (" " !== Eu.substr(mu, 1)) {
                for (;
                  " " !== Eu.substr(mu, 1) && 0 !== mu;) mu--;
                0 === mu && (mu = Ru), Nu = Eu.substr(0, mu)
              }
              Nu = this.justify ? this.justifyLine(uu, Nu, Su, "\u200a", Qu) : Nu, Eu = Eu.substr(mu), yu = uu.measureText(Eu).width, Bu.push(Nu)
            }
            yu > 0 && Bu.push(Eu)
          }
        }));
        const pu = this.lineHeight ? this.lineHeight : this.getTextHeight(uu, Ru),
          Tu = pu * (Bu.length - 1),
          Wu = Tu / 2;
        let ju = Ku;
        "top" === this.vAlign ? ru = Ku + Ju : "bottom" === this.vAlign ? (ru = Xu - Tu, ju = Xu) : (ju = Ku + mu / 2, ru -= Wu), Bu.forEach((Ru => {
          Ru = Ru.trim(), uu.fillText(Ru, Vu, ru), ru += pu
        })), this.debug && (uu.lineWidth = 3, uu.strokeStyle = "#00909e", uu.strokeRect(yu, Ku, Qu, mu), uu.lineWidth = 2, uu.strokeStyle = "#f6d743", uu.beginPath(), uu.moveTo(Vu, Ku), uu.lineTo(Vu, Xu), uu.stroke(), uu.strokeStyle = "#ff6363", uu.beginPath(), uu.moveTo(yu, ju), uu.lineTo(Nu, ju), uu.stroke());
        return {
          height: Tu + pu
        }
      },
      getTextHeight: function(uu, Ru) {
        const yu = uu.textBaseline;
        uu.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Eu
        } = uu.measureText(Ru);
        return uu.textBaseline = yu, Eu
      },
      justifyLine: function(uu, Ru, yu, Eu, Ku) {
        const Qu = Ru.trim(),
          mu = uu.measureText(Qu).width,
          Ju = Qu.split(/\s+/).length - 1,
          Nu = Math.floor((Ku - mu) / yu);
        if (Ju <= 0 || Nu <= 0) return Qu;
        const Xu = Math.floor(Nu / Ju);
        let Vu = Nu - Ju * Xu,
          ru = [];
        for (let Bu = 0; Bu < Xu; Bu++) ru.push(Eu);
        ru = ru.join("");
        return Qu.replace(/\s+/g, (uu => {
          const Ru = Vu > 0 ? ru + Eu : ru;
          return Vu--, uu + Ru
        }))
      }
    }
  },
  38871: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return Ru.set(uu), Ru
    }
    yu.d(Ru, {
      b: () => Eu
    })
  },
  38432: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => pu,
      f: () => Su,
      g: () => Bu,
      h: () => Vu,
      l: () => ru
    });
    var Eu = yu(4053),
      Ku = yu(343);
    const Qu = 1024,
      mu = 1536,
      Ju = 2 * Eu.o + 1,
      Nu = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Xu = 1.5;

    function Vu(uu, Ru, yu) {
      if ("string" !== typeof uu) return Ru;
      try {
        const yu = JSON.parse(uu);
        return yu && "object" === typeof yu ? yu : Ru
      } catch (Eu) {
        return void 0 !== yu && console.error(`Couldn't parse ${yu}`, Eu), Ru
      }
    }

    function ru(uu) {
      return Vu(uu, null, "a leaderboard's rows")
    }

    function Bu(uu, Ru) {
      var yu, Eu;
      return null !== Ru && void 0 !== Ru ? Ru : {
        status: null !== (yu = uu.status) && void 0 !== yu ? yu : "loading",
        entries: null !== (Eu = uu.entries) && void 0 !== Eu ? Eu : []
      }
    }

    function xu(uu, Ru) {
      return "number" === typeof uu && Number.isFinite(uu) && uu > 0 ? uu : Ru
    }

    function Su(uu, Ru) {
      const yu = xu(uu.size, 1);
      let Eu = xu(uu.width, xu(2.5 * yu, 2.5)),
        Ku = xu(uu.height, xu(3.75 * yu, 3.75));
      Number.isFinite(Qu * Ku / Eu) && Number.isFinite(mu * Eu / Ku) || (Eu = 2.5, Ku = 3.75);
      const Ju = Ku / Eu,
        Nu = Math.max(1, Math.min(Qu, Ru / Ju));
      return {
        width: Eu,
        height: Ku,
        layoutWidth: Math.max(Qu, mu / Ju),
        layoutHeight: Math.max(mu, Qu * Ju),
        pixelWidth: Math.round(Nu),
        pixelHeight: Math.round(Math.max(1, Math.min(Ru, Nu * Ju)))
      }
    }

    function pu(uu, Ru, yu, mu, Vu, ru) {
      uu.setTransform(1, 0, 0, 1, 0, 0), uu.fillStyle = Ku.L.defaultNameTagBackground, uu.fillRect(0, 0, Ru, yu), uu.scale(Ru / mu.layoutWidth, yu / mu.layoutHeight), uu.translate((mu.layoutWidth - Qu) / 2, 0),
        function(uu, Ru, yu, Qu) {
          var mu, Vu, ru, Bu;
          const {
            top: xu,
            around: Su,
            showPlayerText: pu,
            localPlayerDbId: ju
          } = yu, {
            whiteUiText: Hu,
            grayUiText: du,
            yellowUiText: bu
          } = Ku.L;
          uu.textBaseline = "middle";
          const Cu = function(Ru, yu, Eu, Ku, Qu, mu) {
              let Ju = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              uu.font = `bold ${Ku}px 'Jetbrains Mono', monospace`, uu.fillStyle = Qu, uu.textAlign = Ju;
              let Nu = Ru.replace(/[\r\n\t]/g, " ");
              if (uu.measureText(Nu).width > mu) {
                for (; Nu.length > 0 && uu.measureText(`${Nu}\u2026`).width > mu;) Nu = Nu.slice(0, -1);
                Nu += "\u2026"
              }
              uu.fillText(Nu, yu, Eu)
            },
            ku = Ru => {
              uu.fillStyle = Hu, uu.globalAlpha = .15, uu.fillRect(24, Ru, 976, 2), uu.globalAlpha = 1
            },
            eu = null === ju ? null : (0, Ku.xc)(ju),
            Au = uu => null !== eu && uu.playerHash === eu,
            Du = Tu(xu.entries, Eu.s),
            Mu = "ready" === xu.status && Du.length > 0,
            Iu = null === Su ? [] : Tu(Su.entries, Ju),
            Gu = Du.some(Au),
            Uu = null === Su ? null : function(uu) {
              const Ru = uu;
              if (!Ru || !Number.isFinite(Ru.rank) || !Number.isFinite(Ru.tied) || !Number.isFinite(Ru.total)) return null;
              return Ru
            }(Su.standing),
            nu = Iu.find(Au),
            su = Du.find(Au),
            tu = null === Uu || void 0 === nu ? null : {
              value: nu.value,
              rank: Uu.rank
            },
            lu = Wu(Du, void 0 === su || su.value === (null === tu || void 0 === tu ? void 0 : tu.value) ? tu : null),
            gu = Wu(Iu, tu),
            cu = (uu, Ru) => {
              const yu = uu.findIndex(Au);
              return yu >= 0 ? Ru[yu] : null
            },
            Lu = null !== (mu = null !== (Vu = null === Uu || void 0 === Uu ? void 0 : Uu.rank) && void 0 !== Vu ? Vu : cu(Iu, gu)) && void 0 !== mu ? mu : cu(Du, lu);
          uu.font = "bold 34px 'Jetbrains Mono', monospace";
          const zu = [...Mu ? lu : [], ...Gu ? [] : gu],
            Fu = Math.min(280, Math.max(0, ...zu.map((Ru => uu.measureText(Nu.format(Ru)).width)))),
            wu = Fu <= 80,
            Zu = wu ? 80 : 32 + Fu,
            hu = wu ? 148 : Zu + 28,
            Pu = 660 - hu;
          Cu(`TOP ${Eu.s}  /  ALL TIME`, 24, 52, 28, du, 976), Cu(pu ? String(null !== (ru = Ru.title) && void 0 !== ru ? ru : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Hu, 976), Cu("RANK", 32, 174, 28, du, hu - 40), Cu("PLAYER", hu, 174, 28, du, Pu), Cu(pu ? String(null !== (Bu = Ru.scoreLabel) && void 0 !== Bu ? Bu : "Score").slice(0, 24) : "Score", 992, 174, 28, du, 304, "right"), ku(202);
          const iu = (Qu - 232) / (Eu.s + Xu + Ju),
            Yu = 208 + Eu.s * iu,
            ou = Yu + Xu * iu,
            qu = (Ru, yu, Eu, Ku) => {
              const Qu = Au(Ru);
              uu.fillStyle = Qu ? bu : Hu, uu.globalAlpha = Qu ? .15 : Ku ? .035 : 0, uu.fillRect(24, Eu - iu / 2 + 1, 976, iu - 2), uu.globalAlpha = 1;
              const mu = Qu ? bu : Hu;
              Cu(Nu.format(yu), Zu, Eu, 34, mu, wu ? 80 : Fu, wu ? "center" : "right"), Cu(pu ? String(Ru.name).slice(0, 64) : "Player", hu, Eu, 34, mu, Pu);
              const Ju = Nu.format(Ru.value);
              Cu(uu.measureText(Ju).width > 304 ? Ru.value.toExponential(6) : Ju, 992, Eu, 34, mu, 304, "right")
            };
          if (Mu)
            for (const [Eu, Ku] of Du.entries()) qu(Ku, lu[Eu], 208 + (Eu + .5) * iu, Eu % 2 === 0);
          else {
            const uu = "error" === xu.status,
              Ru = uu ? "Couldn't load leaderboard" : "ready" === xu.status ? "No scores yet" : "Loading leaderboard\u2026",
              yu = uu ? "Trying again shortly" : "ready" === xu.status ? "Be the first on the board!" : "Fetching the top players",
              Eu = (208 + Yu) / 2;
            Cu(Ru, 512, Eu - 28, 40, uu ? Ku.L.redUiText : Hu, 960, "center"), Cu(yu, 512, Eu + 27, 30, du, 960, "center")
          }
          const Ou = Yu + Xu * iu / 2;
          if (null === Lu) ku(Ou);
          else {
            const Ru = null === Uu ? 0 : Uu.tied - 1,
              yu = `YOUR RANK #${Nu.format(Lu)}${null===Uu?"":` of ${Nu.format(Uu.total)}`}`;
            uu.font = "bold 36px 'Jetbrains Mono', monospace";
            const Eu = Math.max(20, Math.min(36, Math.floor(34560 / uu.measureText(yu).width)));
            Cu(yu, 512, Ou - (Ru > 0 ? 15 : 0), Eu, bu, 960, "center"), Ru > 0 && Cu(`Tied with ${Nu.format(Ru)} other${1===Ru?"":"s"}`, 512, Ou + 24, 24, du, 960, "center")
          }
          if (null === Su) return;
          const vu = ou + Ju * iu / 2;
          if (Gu) Cu(`You're in the top ${Eu.s}!`, 512, vu, 40, bu, 960, "center");
          else if (0 === Iu.length) Cu("You're not on this board yet", 512, vu, 34, du, 960, "center");
          else
            for (const [Eu, Ku] of Iu.entries()) qu(Ku, gu[Eu], ou + (Eu + .5) * iu, Eu % 2 === 0)
        }(uu, Vu, ru, mu.layoutHeight)
    }

    function Tu(uu, Ru) {
      return Array.isArray(uu) ? uu.slice(0, Ru).filter((uu => uu && Number.isFinite(uu.rank) && Number.isFinite(uu.value))) : []
    }

    function Wu(uu, Ru) {
      const yu = [];
      let Eu = !1;
      return uu.forEach(((Ku, Qu) => {
        if (null !== Ru && Ku.value === Ru.value) return void yu.push(Ru.rank);
        const mu = Qu > 0 && Ku.value === uu[Qu - 1].value;
        mu || (Eu = 0 === Qu && 1 !== Ku.rank), yu.push(mu && !Eu ? yu[Qu - 1] : Ku.rank)
      })), yu
    }
  },
  38617: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      h: () => Qu
    });
    const Eu = 32;

    function Ku(uu) {
      return Array.from(uu).length
    }

    function Qu(uu) {
      const Ru = [""];
      let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ku = "";
      const Qu = () => {
        Ru.push(""), yu = 0, Ku = ""
      };
      for (const mu of uu.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(mu)) Qu();
        else if (/^\s+$/.test(mu)) Ku += mu;
      else if (mu.length > 0) {
        const uu = Array.from(mu);
        yu > 0 && yu + Ku.length + uu.length > Eu && Qu(), Ru[Ru.length - 1] += Ku, yu += Ku.length, Ku = "";
        for (const Ku of uu) yu >= Eu && Qu(), Ru[Ru.length - 1] += Ku, yu++
      }
      return Ru[Ru.length - 1] += Ku, Ru
    }
  },
  38863: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(36466),
      Ku = yu.n(Eu);
    const Qu = [1, 1, 1];

    function mu(uu) {
      if (!uu) return [...Qu];
      try {
        const [Ru, yu, Eu] = Ku()(uu).rgb().array();
        return [Ru / 255, yu / 255, Eu / 255]
      } catch (Ru) {
        return console.warn(`Invalid groundArrowPath colour "${uu}":`, Ru), [...Qu]
      }
    }
  },
  34129: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu,
      e: () => Ju,
      g: () => mu,
      k: () => Ku,
      m: () => Eu
    });
    const Eu = {
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
      Ku = "/textures/dayNight/sun.png",
      Qu = "/textures/dayNight/moon.png",
      mu = "/textures/dayNight/stars",
      Ju = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38939: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Vu,
      g: () => ru,
      k: () => Eu,
      n: () => Nu,
      q: () => Ku,
      s: () => Xu,
      v: () => Ju,
      w: () => mu
    });
    const Eu = ["linear", "easeIn", "easeOut", "easeInOut"],
      Ku = ["movement", "camera", "cursor"],
      Qu = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function mu(uu, Ru) {
      return Ju(uu, Ru, Qu)
    }

    function Ju(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (uu === Ru || Number.isNaN(uu) && Number.isNaN(Ru)) return !0;
      if ("object" !== typeof uu || "object" !== typeof Ru || null === uu || null === Ru || Array.isArray(uu) !== Array.isArray(Ru)) return !1;
      const Eu = uu,
        Ku = Ru;
      for (const Qu of new Set([...Object.keys(Eu), ...Object.keys(Ku)]))
        if (!yu.includes(Qu) && !Ju(Eu[Qu], Ku[Qu])) return !1;
      return !0
    }
    const Nu = {
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
      Xu = "^-[1-9][0-9]*$",
      Vu = "^#[0-9a-fA-F]{6}$",
      ru = "#000000"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);