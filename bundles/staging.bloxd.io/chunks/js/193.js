export const id = 193;
export const ids = [193];
export const modules = {
  39446: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su
    });
    class su {
      constructor(uu, Eu) {
        this.read = uu, this.apply = Eu, this.release = null
      }
      turn(uu, Eu) {
        const ju = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: Eu,
          forcedCameraDirection: [uu[0], uu[1], uu[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), Eu + 100),
          transitionMs: ju
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
  38992: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      f: () => Uu
    });
    const su = new Map;

    function Uu(uu, Eu) {
      su.set(uu, Eu)
    }

    function Zu(uu) {
      return uu ? su.get(uu) : void 0
    }
  },
  39900: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    var su = ju(38573);

    function Uu(uu, Eu, ju) {
      var Uu, Zu, Xu, lu, qu, fu, Cu;
      const bu = (0, su.c)(uu, Eu, ju[0], ju[1], ju[2]),
        cu = bu ? null !== (Uu = bu.textCell) && void 0 !== Uu ? Uu : bu.rect.anchor : ju,
        Nu = Eu(cu[0], cu[1], cu[2]);
      return {
        pos: [ju[0], ju[1], ju[2]],
        noticeboardSpan: bu && {
          width: bu.rect.width,
          height: bu.rect.height
        },
        text: null !== (Zu = null === Nu || void 0 === Nu || null === (Xu = Nu.persisted) || void 0 === Xu || null === (lu = Xu.shared) || void 0 === lu ? void 0 : lu.text) && void 0 !== Zu ? Zu : "",
        textSize: null !== (qu = null === Nu || void 0 === Nu || null === (fu = Nu.persisted) || void 0 === fu || null === (Cu = fu.shared) || void 0 === Cu ? void 0 : Cu.textSize) && void 0 !== qu ? qu : null
      }
    }
  },
  38828: (uu, Eu, ju) => {
    function su(uu) {
      switch (uu.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    ju.d(Eu, {
      e: () => Uu,
      h: () => Zu,
      i: () => su
    });
    const Uu = 4,
      Zu = 3
  },
  39467: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      d: () => Zu
    });
    var su = ju(349);
    const Uu = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class Zu {
      constructor(uu) {
        this.importGame = uu, this.loads = new Map, this.loaded = new Map
      }
      load(uu) {
        const Eu = (0, su.Vb)(uu);
        if (!Uu.has(Eu)) return Promise.resolve(void 0);
        let ju = this.loads.get(Eu);
        return ju || (ju = this.importGame(Eu).then((uu => {
          const ju = uu.default;
          if ("function" !== typeof ju) throw new Error(`${Eu}'s client code has no default-exported factory`);
          return this.loaded.set(Eu, ju), ju
        })).catch((uu => {
          throw this.loads.delete(Eu), uu
        })), this.loads.set(Eu, ju)), ju
      }
      loadedFactory(uu) {
        const Eu = (0, su.Vb)(uu);
        if (!Uu.has(Eu)) return;
        const ju = this.loaded.get(Eu);
        if (!ju) throw new Error(`${Eu}'s client code started before it loaded`);
        return ju
      }
    }
  },
  39908: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu
    });
    var su = ju(9505),
      Uu = ju(34565),
      Zu = ju(3475);

    function Xu(uu) {
      if (uu === su.c) return 0;
      const Eu = (0, Zu.b)(uu);
      if (void 0 !== Eu && Eu <= Uu.MAX_BLOCK_ID) return Eu;
      const ju = (0, Zu.b)(uu.split("|")[0]);
      if (void 0 !== ju && ju <= Uu.MAX_BLOCK_ID && (0, Uu.rootMetaDescOf)(ju) === uu) return ju;
      throw new Error(`Invalid block name. You sent ${uu}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39516: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    var su = ju(22);
    class Uu {
      constructor(uu) {
        this.screen = uu, this.hidesHud = !1
      }
      show(uu, Eu) {
        this.screen.setFade(uu.colour, uu.alpha), this.screen.setLetterbox(!0 === Eu.letterbox, uu.alpha < 1), this.setHudHidden(!0 === Eu.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(uu) {
        this.hidesHud !== uu && (this.hidesHud = uu, su.d.set({
          isUiHiddenByCamera: uu
        }))
      }
    }
  },
  39490: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      f: () => cu,
      j: () => bu,
      n: () => Xu,
      o: () => Ou,
      q: () => qu,
      s: () => Yu,
      v: () => fu,
      y: () => lu,
      z: () => Cu
    });
    const su = Math.PI / 2 - .001,
      Uu = 2 * Math.PI,
      Zu = 1e-9;

    function Xu(uu, Eu) {
      Eu.heading = uu.heading, Eu.pitch = uu.pitch
    }

    function lu(uu, Eu) {
      const ju = Eu - uu;
      return ju - Uu * Math.floor((ju + Math.PI) / Uu)
    }

    function qu(uu, Eu, ju) {
      return uu + lu(uu, Eu) * ju
    }

    function fu(uu) {
      if (!Number.isFinite(uu)) return uu;
      const Eu = uu - Uu * Math.floor(uu / Uu);
      return Eu < Uu ? Eu : 0
    }

    function Cu(uu, Eu) {
      return uu + lu(uu, Eu)
    }

    function bu(uu) {
      return Math.max(-su, Math.min(su, uu))
    }

    function cu(uu, Eu, ju) {
      const su = Math.cos(Eu);
      return ju[0] = su * Math.sin(uu), ju[1] = -Math.sin(Eu), ju[2] = su * Math.cos(uu), ju
    }

    function Nu(uu, Eu, ju, su) {
      const Uu = Math.sqrt(uu * uu + ju * ju);
      return Uu < Zu && Math.abs(Eu) < Zu || (Uu >= Zu && (su.heading = Math.atan2(uu, ju)), su.pitch = bu(Math.atan2(-Eu, Uu) + 0)), su
    }

    function Ou(uu, Eu) {
      return Nu(uu[0], uu[1], uu[2], Eu)
    }

    function Yu(uu, Eu, ju) {
      return Nu(Eu[0] - uu[0], Eu[1] - uu[1], Eu[2] - uu[2], ju)
    }
  },
  39513: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      e: () => Uu
    });
    var su = ju(39490);

    function Uu(uu) {
      var Eu;
      const ju = "default" === uu.mode ? "movement" : null !== (Eu = uu.playerFacing) && void 0 !== Eu ? Eu : "movement";
      return "cursor" === ju ? {
        facing: ju,
        mouseTurns: null
      } : {
        facing: ju,
        mouseTurns: "default" !== uu.mode && void 0 !== uu.playerLook ? "look" : "view"
      }
    }

    function Zu(uu, Eu, ju, Uu, Zu, Xu) {
      return Xu.hK = 0, Xu.VK = 0, Xu.pointedAt = void 0, void 0 !== Uu ? Zu ? (Xu.pointedAt = Uu, uu) : (0, su.v)(Uu.heading) : Zu ? (Xu.hK = Eu, Xu.VK = ju, uu) : (0, su.v)(uu + Eu)
    }
  },
  39501: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Bu
    });
    var su = ju(39507),
      Uu = ju(39490),
      Zu = ju(37386);

    function Xu(uu, Eu, ju, su) {
      if (!(su > 0)) return Eu;
      const Uu = Eu > uu ? Math.min(Eu, uu + ju / su) : Math.max(Eu, uu - ju / su);
      return Math.abs(Eu - Uu) < 1e-9 ? Eu : Uu
    }
    class lu {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: su.g,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(uu) {
        !this.isGoingOut() && this.sinceTurnMs < su.j.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: uu
        } : (this.waiting = null, this.startOut(uu))
      }
      fadeIn(uu) {
        this.isGoingOut() ? this.sinceTurnMs < su.j.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: uu
        } : (this.waiting = null, this.startIn(uu)) : this.waiting = null
      }
      advance(uu) {
        const Eu = this.waiting;
        if (null === Eu) return this.step(uu);
        const ju = su.j.minFadeTurnMs - this.sinceTurnMs;
        if (ju > uu) return this.step(uu);
        const Uu = this.step(ju);
        return this.waiting = null, "out" === Eu.turn ? this.startOut(Eu.transition) : this.startIn(Eu.minMs), this.step(uu - ju) || Uu
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(uu) {
        ("in" === this.phase || null === this.phase && this.clearMs < su.j.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = uu.colour), this.outMs = uu.outMs, this.holdMs = uu.holdMs, this.inMs = uu.inMs
      }
      startIn(uu) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(uu, this.inMs)
      }
      step(uu) {
        const Eu = this.screen;
        this.sinceTurnMs += uu, null === this.phase && (this.clearMs += uu);
        let ju = !1,
          Uu = uu;
        if ("out" === this.phase) {
          const su = (1 - Eu.alpha) * this.outMs;
          if (Eu.alpha = Xu(Eu.alpha, 1, uu, this.outMs), Eu.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, Uu = Math.max(0, uu - su), ju = !0
        }
        let Zu = uu;
        if ("hold" === this.phase) {
          this.heldMs += Uu;
          const uu = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - su.j.minFadeTurnMs);
          if (uu < 0 || ju) return ju;
          this.phase = "in", this.sinceTurnMs = uu, Zu = uu
        }
        return "in" === this.phase && (Eu.alpha = Xu(Eu.alpha, 0, Zu, this.inMs), Eu.alpha <= 0 && (this.phase = null, this.clearMs = 0)), ju
      }
    }
    var qu = ju(39481),
      fu = ju(39510),
      Cu = ju(1955),
      bu = ju(36962);

    function cu(uu, Eu) {
      for (let ju = 0; ju < Eu.length; ju++) Eu[ju] = uu[ju]
    }

    function Nu(uu, Eu) {
      var ju;
      return null !== (ju = uu.fov) && void 0 !== ju ? ju : Eu.getDefaultFov()
    }

    function Ou(uu, Eu, ju, su, Uu) {
      const Zu = 2 / su,
        Xu = Math.exp(-Zu * Uu);
      for (let lu = 0; lu < uu.length; lu++) {
        const su = uu[lu] - ju[lu],
          qu = (Eu[lu] + Zu * su) * Uu;
        uu[lu] = ju[lu] + (su + qu) * Xu, Eu[lu] = (Eu[lu] - Zu * qu) * Xu
      }
    }
    class Yu {
      constructor(uu, Eu, ju, su) {
        var Zu, Xu, lu, qu, fu;
        this.settings = uu, this.zb = Eu, this.targets = ju, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.RY = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Uu.v)((0, Cu.k)(null !== (Zu = uu.viewHeading) && void 0 !== Zu ? Zu : 0)),
          pitch: (0, Uu.j)((0, Cu.k)(null !== (Xu = uu.viewElevation) && void 0 !== Xu ? Xu : 45))
        }, this.closestDistance = null !== (lu = uu.closestDistance) && void 0 !== lu ? lu : Math.min(6, null !== (qu = uu.furthestDistance) && void 0 !== qu ? qu : 1 / 0), this.furthestDistance = null !== (fu = uu.furthestDistance) && void 0 !== fu ? fu : Math.max(64, this.closestDistance);
        const bu = (0, Uu.f)(this.base.heading, this.base.pitch, this.forward),
          cu = su.position,
          Nu = this.closestDistance;
        this.goal = [cu[0] + bu[0] * Nu, cu[1] + bu[1] * Nu, cu[2] + bu[2] * Nu, Nu, this.base.heading, this.base.pitch]
      }
      update(uu, Eu, ju) {
        var su, Zu;
        this.placeGoal(null !== (su = this.settings.fov) && void 0 !== su ? su : this.zb.getBaseFov()), this.goal[4] = (0, Uu.z)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Xu = null !== (Zu = this.settings.smoothMs) && void 0 !== Zu ? Zu : 400;
        !this.started || Xu < 1 ? (cu(this.goal, this.smoothed), this.RY.fill(0), this.started = !0) : Ou(this.smoothed, this.RY, this.goal, Xu, uu), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Uu.j)(this.smoothed[5]), Eu.apply(this.angles, ju);
        const lu = (0, Uu.f)(ju.heading, ju.pitch, this.forward);
        for (let Uu = 0; Uu < 3; Uu++) ju.position[Uu] = this.smoothed[Uu] - lu[Uu] * this.smoothed[3];
        ju.fov = Nu(this.settings, this.zb)
      }
      continueFrom(uu) {
        uu instanceof Yu && (cu(uu.goal, this.goal), cu(uu.smoothed, this.smoothed), cu(uu.RY, this.RY), this.framedTargets = uu.framedTargets, this.started = uu.started)
      }
      reset() {
        this.RY.fill(0), this.started = !1
      }
      placeGoal(uu) {
        var Eu;
        let ju = 0;
        for (const Cu of this.settings.targets) {
          const uu = this.targets.currentAimPoint(Cu);
          uu && (0, qu.g)(uu, this.pointAt(ju++))
        }
        if (ju > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const uu = this.targets.aimPoint(this.zb.localPlayerId);
          uu && (0, qu.g)(uu, this.pointAt(ju++))
        }
        const su = this.goal;
        if (0 === ju) return void(su[3] = this.withinDistances(su[3]));
        for (let qu = 0; qu < 3; qu++) {
          let uu = 1 / 0,
            Eu = -1 / 0;
          for (let su = 0; su < ju; su++) uu = Math.min(uu, this.points[su][qu]), Eu = Math.max(Eu, this.points[su][qu]);
          su[qu] = (uu + Eu) / 2
        }
        let Uu = 0;
        for (let qu = 0; qu < ju; qu++) {
          const uu = this.points[qu];
          Uu = Math.max(Uu, Math.hypot(uu[0] - su[0], uu[1] - su[1], uu[2] - su[2]))
        }
        const Zu = Math.tan((0, Cu.k)(uu) / 2),
          Xu = Math.atan(Zu * (!0 === this.settings.letterbox ? bu.f : 1)),
          lu = Math.atan(Zu * this.zb.getAspectRatio()),
          fu = (Uu + (null !== (Eu = this.settings.padding) && void 0 !== Eu ? Eu : 2)) / Math.sin(Math.min(Xu, lu));
        su[3] = this.withinDistances(fu)
      }
      withinDistances(uu) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, uu))
      }
      pointAt(uu) {
        return uu === this.points.length && this.points.push([0, 0, 0]), this.points[uu]
      }
    }
    class hu {
      constructor(uu) {
        this.limits = uu, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(uu) {
        this.limits && (this.yawOffset = uu.yawOffset, this.pitchOffset = uu.pitchOffset, this.idleMs = uu.idleMs)
      }
      update(uu, Eu) {
        const ju = this.limits;
        if (!ju) return;
        const su = Number.isFinite(Eu.hK) ? Eu.hK : 0,
          Uu = Number.isFinite(Eu.VK) ? Eu.VK : 0;
        if (Eu.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: Eu.pointedAt.heading,
          pitch: Eu.pointedAt.pitch
        };
        else if (0 !== su || 0 !== Uu) this.idleMs = 0, this.yawOffset += su, this.pitchOffset += Uu;
        else {
          const Eu = Math.max(0, this.idleMs + uu - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += uu, void 0 !== ju.returnMs && Eu > 0) {
            const uu = ju.returnMs > 0 ? Math.exp(-3 * Eu / ju.returnMs) : 0;
            this.yawOffset *= uu, this.pitchOffset *= uu
          }
        }
        this.clampOffsets(ju)
      }
      clampOffsets(uu) {
        if (uu.maxYaw >= 180) this.yawOffset = (0, Uu.y)(0, this.yawOffset);
        else {
          const Eu = (0, Cu.k)(uu.maxYaw);
          this.yawOffset = Math.max(-Eu, Math.min(Eu, this.yawOffset))
        }
        const Eu = (0, Cu.k)(uu.maxPitch);
        this.pitchOffset = Math.max(-Eu, Math.min(Eu, this.pitchOffset))
      }
      apply(uu, Eu) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Uu.y)(uu.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - uu.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const ju = (0, Uu.j)(uu.pitch + this.pitchOffset);
        this.pitchOffset = ju - uu.pitch, Eu.heading = (0, Uu.v)(uu.heading + this.yawOffset), Eu.pitch = ju
      }
      unapply(uu, Eu) {
        Eu.heading = (0, Uu.v)(uu.heading - this.yawOffset), Eu.pitch = (0, Uu.j)(uu.pitch - this.pitchOffset)
      }
    }
    const Du = 1e-6;

    function gu(uu) {
      return Math.sqrt(uu[0] * uu[0] + uu[1] * uu[1] + uu[2] * uu[2])
    }

    function Mu(uu, Eu, ju, su, Uu) {
      const Zu = Uu * Uu,
        Xu = Zu * Uu;
      return (2 * Xu - 3 * Zu + 1) * uu + (Xu - 2 * Zu + Uu) * Eu + (-2 * Xu + 3 * Zu) * ju + (Xu - Zu) * su
    }

    function eu(uu, Eu, ju, su, Uu) {
      const Zu = Uu * Uu;
      return (6 * Zu - 6 * Uu) * uu + (3 * Zu - 4 * Uu + 1) * Eu + (-6 * Zu + 6 * Uu) * ju + (3 * Zu - 2 * Uu) * su
    }

    function Gu(uu, Eu) {
      const ju = Eu[0] - uu[0],
        su = Eu[1] - uu[1],
        Uu = Eu[2] - uu[2];
      return Math.sqrt(ju * ju + su * su + Uu * Uu)
    }

    function pu(uu, Eu, ju, su, Uu, Zu) {
      for (let Xu = 0; Xu < 3; Xu++) Zu[Xu] = Uu ? uu[Xu] * su : ju[Xu] - Eu[Xu];
      return Uu && function(uu, Eu) {
        const ju = gu(uu);
        if (ju > Eu) {
          const su = Eu / ju;
          uu[0] *= su, uu[1] *= su, uu[2] *= su
        }
      }(Zu, 3 * Gu(Eu, ju)), Zu
    }

    function wu(uu, Eu, ju, su) {
      for (let Uu = 0; Uu < 3; Uu++) su[Uu] = 6 * (Eu[Uu] - uu[Uu]) - 2 * ju[Uu];
      if (gu(su) < Du)
        for (let Uu = 0; Uu < 3; Uu++) su[Uu] = Eu[Uu] - uu[Uu];
      return su
    }

    function Ju(uu, Eu) {
      return [2 * Eu[0] - uu[0], 2 * Eu[1] - uu[1], 2 * Eu[2] - uu[2]]
    }

    function du(uu, Eu, ju, su, Uu, Zu, Xu) {
      if (!Zu && !Xu) return 0;
      const lu = Zu ? uu : 2 * Eu - ju,
        qu = Xu ? ju : 2 * Eu - uu,
        fu = Zu ? su : Uu,
        Cu = Xu ? Uu : su,
        bu = (Eu - lu) / fu,
        cu = (qu - Eu) / Cu;
      if (bu * cu <= 0) return 0;
      const Nu = (qu - lu) / (fu + Cu),
        Ou = 3 * Math.min(Math.abs(bu), Math.abs(cu));
      return Math.max(-Ou, Math.min(Ou, Nu))
    }

    function au(uu, Eu, ju, su, Uu, Zu, Xu) {
      const {
        u: lu,
        segmentMs: qu
      } = uu;
      if (!uu.curved) return ju + (su - ju) * lu;
      return Mu(ju, du(Eu, ju, su, uu.beforeMs, qu, Zu, !0) * qu, su, du(ju, su, Uu, qu, uu.afterMs, !0, Xu) * qu, lu)
    }

    function Pu(uu) {
      return Math.abs(uu.pitch) >= Uu.b
    }
    class ou {
      constructor(uu, Eu, ju, su, Uu) {
        this.nodes = uu, this.prevNodes = ju, this.nextNodes = su, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = uu.map(((uu, ju) => this.nodeTangent(Eu, Uu, ju)))
      }
      sample(uu, Eu, ju) {
        const {
          index: su,
          toIndex: Zu,
          segmentMs: Xu,
          curved: lu
        } = uu, qu = this.fromAngles, fu = this.toAngles, Cu = this.nodeAngles(su, ju.position, Eu, qu), bu = this.nodeAngles(Zu, ju.position, Eu, fu);
        if (Xu > 0 && "aim" !== Cu && "aim" !== bu && this.liveTangent(uu, qu)) return ju.heading = (0, Uu.v)(qu.heading), void(ju.pitch = qu.pitch);
        if ("none" === Cu && "none" === bu) return;
        !lu && Xu > 0 && ("tangent" === Cu && this.liveTangent(uu, qu), "tangent" === bu && this.liveTangent(uu, fu)), "none" === Cu ? (0, Uu.n)(fu, qu) : "none" === bu && (0, Uu.n)(qu, fu);
        const cu = lu && uu.beforeIndex >= 0 && "none" !== this.nodeAngles(uu.beforeIndex, ju.position, Eu, this.beforeAngles),
          Nu = lu && uu.afterIndex >= 0 && "none" !== this.nodeAngles(uu.afterIndex, ju.position, Eu, this.afterAngles),
          Ou = (0, Uu.z)(qu.heading, fu.heading),
          Yu = au(uu, cu ? (0, Uu.z)(qu.heading, this.beforeAngles.heading) : 0, qu.heading, Ou, Nu ? (0, Uu.z)(Ou, this.afterAngles.heading) : 0, cu, Nu);
        ju.heading = (0, Uu.v)(Yu), ju.pitch = (0, Uu.j)(au(uu, this.beforeAngles.pitch, qu.pitch, fu.pitch, this.afterAngles.pitch, cu, Nu))
      }
      nodeAngles(uu, Eu, ju, su) {
        const Uu = this.rawNodeAngles(uu, Eu, ju, su);
        return "none" !== Uu && Pu(su) && !this.borrowHeading(this.prevNodes[uu], Eu, ju, su) && this.borrowHeading(this.nextNodes[uu], Eu, ju, su), Uu
      }
      borrowHeading(uu, Eu, ju, su) {
        const Uu = this.borrowedAngles;
        return !(uu < 0 || "none" === this.rawNodeAngles(uu, Eu, ju, Uu) || Pu(Uu)) && (su.heading = Uu.heading, !0)
      }
      rawNodeAngles(uu, Eu, ju, su) {
        const Zu = this.nodes[uu].keyframe;
        if (Zu.lookDirection) return (0, Uu.o)(Zu.lookDirection, su), "aim";
        if (void 0 !== Zu.lookAt) {
          const uu = ju(Zu.lookAt);
          if (uu) return (0, Uu.s)(Eu, uu, su), "aim"
        }
        const Xu = this.tangents[uu];
        return Xu ? ((0, Uu.n)(Xu, su), "tangent") : "none"
      }
      liveTangent(uu, Eu) {
        const ju = this.nodes[uu.index].position,
          su = this.nodes[uu.toIndex].position,
          Zu = this.derivative;
        for (let Uu = 0; Uu < 3; Uu++) Zu[Uu] = eu(ju[Uu], uu.fromTangent[Uu], su[Uu], uu.toTangent[Uu], uu.u);
        return gu(Zu) > 1e-9 ? ((0, Uu.o)(Zu, Eu), !0) : !(Gu(ju, su) < Du) && ((0, Uu.o)(wu(ju, su, uu.u < .5 ? uu.toTangent : uu.fromTangent, Zu), Eu), !0)
      }
      nodeTangent(uu, Eu, ju) {
        var su;
        const Zu = uu[ju];
        if (gu(Zu) > 1e-9) return (0, Uu.o)(Zu, {
          heading: 0,
          pitch: 0
        });
        const Xu = null !== (su = this.restDirectionTo(ju, ju + 1, uu, Eu)) && void 0 !== su ? su : this.restDirectionTo(ju, ju - 1, uu, Eu);
        return Xu ? (0, Uu.o)(Xu, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(uu, Eu, ju, su) {
        const Uu = this.nodes[uu],
          Zu = this.nodes[Eu];
        if (!Zu || Gu(Uu.position, Zu.position) < Du) return null;
        const [Xu, lu] = Eu > uu ? [Uu, Zu] : [Zu, Uu], qu = pu(ju[Eu], Xu.position, lu.position, lu.timeMs - Xu.timeMs, su, [0, 0, 0]);
        return wu(Xu.position, lu.position, qu, [0, 0, 0])
      }
    }

    function ku(uu, Eu) {
      const ju = uu.lookDirection || Eu.lookDirection ? function(uu, Eu) {
        if (!uu || !Eu) return uu === Eu;
        const ju = gu(uu),
          su = gu(Eu);
        return Math.hypot(uu[0] / ju - Eu[0] / su, uu[1] / ju - Eu[1] / su, uu[2] / ju - Eu[2] / su) < Du
      }(uu.lookDirection, Eu.lookDirection) : (su = uu.lookAt, Uu = Eu.lookAt, "object" !== typeof su || "object" !== typeof Uu ? su === Uu : Gu(su, Uu) < Du);
      var su, Uu;
      return Gu(uu.position, Eu.position) < Du && uu.fov === Eu.fov && ju
    }
    class mu {
      constructor(uu, Eu, ju) {
        if (this.smooth = Eu, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
        for (let Zu = 1; Zu < uu.length; Zu++)
          if (!(uu[Zu].timeMs > uu[Zu - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = uu.map((uu => {
          var Eu;
          return {
            timeMs: uu.timeMs,
            position: [...uu.position],
            keyframe: uu,
            easing: (0, Zu.s)(null !== (Eu = uu.easing) && void 0 !== Eu ? Eu : "linear")
          }
        }));
        const su = this.nodes[0],
          Uu = this.nodes[this.nodes.length - 1],
          Xu = ju && this.nodes.length > 1;
        Xu && !ku(su.keyframe, Uu.keyframe) && this.nodes.push({
          ...su,
          timeMs: Uu.timeMs + (Uu.timeMs - su.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Xu ? this.nodes[this.nodes.length - 1].timeMs - su.timeMs : 0, this.prevNodes = this.nodes.map(((uu, Eu) => this.neighbour(Eu, -1))), this.nextNodes = this.nodes.map(((uu, Eu) => this.neighbour(Eu, 1))), this.prevGaps = this.prevNodes.map(((uu, Eu) => uu >= 0 ? this.gapMs(Eu, -1) : 0)), this.nextGaps = this.nextNodes.map(((uu, Eu) => uu >= 0 ? this.gapMs(Eu, 1) : 0)), this.velocities = this.nodes.map(((uu, Eu) => {
          const ju = this.prevNodes[Eu],
            su = this.nextNodes[Eu];
          return function(uu, Eu, ju, su, Uu, Zu) {
            if (Zu[0] = 0, Zu[1] = 0, Zu[2] = 0, !uu && !ju) return Zu;
            const Xu = null !== uu && void 0 !== uu ? uu : Ju(null !== ju && void 0 !== ju ? ju : Eu, Eu),
              lu = null !== ju && void 0 !== ju ? ju : Ju(null !== uu && void 0 !== uu ? uu : Eu, Eu),
              qu = uu ? su : Uu,
              fu = ju ? Uu : su,
              Cu = Gu(Xu, Eu),
              bu = Gu(Eu, lu);
            if (Cu < Du || bu < Du) return Zu;
            const cu = Math.sqrt(Cu),
              Nu = Math.sqrt(bu),
              Ou = (cu + Nu) / (qu + fu);
            for (let Yu = 0; Yu < 3; Yu++) {
              const uu = (Eu[Yu] - Xu[Yu]) / cu - (lu[Yu] - Xu[Yu]) / (cu + Nu) + (lu[Yu] - Eu[Yu]) / Nu;
              Zu[Yu] = uu * Ou
            }
            return Zu
          }(ju >= 0 ? this.nodes[ju].position : null, uu.position, su >= 0 ? this.nodes[su].position : null, this.prevGaps[Eu], this.nextGaps[Eu], [0, 0, 0])
        })), this.aim = new ou(this.nodes, this.velocities, this.prevNodes, this.nextNodes, Eu)
      }
      sample(uu, Eu, ju, su) {
        const Uu = this.findSegment(this.pathTime(uu));
        this.samplePosition(Uu, su.position), this.aim.sample(Uu, Eu, su);
        const {
          beforeIndex: Zu,
          afterIndex: Xu
        } = Uu;
        su.fov = au(Uu, Zu >= 0 ? this.fovAt(Zu, ju) : 0, this.fovAt(Uu.index, ju), this.fovAt(Uu.toIndex, ju), Xu >= 0 ? this.fovAt(Xu, ju) : 0, Zu >= 0, Xu >= 0)
      }
      pathTime(uu) {
        const Eu = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || uu <= Eu) return uu;
        const ju = uu - Eu;
        return Eu + ju - this.loopMs * Math.floor(ju / this.loopMs)
      }
      findSegment(uu) {
        const Eu = this.nodes,
          ju = this.segment;
        let su = ju.index;
        for (uu < Eu[su].timeMs && (su = 0); su < Eu.length - 2 && Eu[su + 1].timeMs <= uu;) su++;
        const Uu = Math.min(su + 1, Eu.length - 1),
          Xu = Eu[Uu].timeMs - Eu[su].timeMs;
        return ju.index = su, ju.toIndex = Uu, ju.segmentMs = Xu, ju.u = Xu > 0 ? (0, Zu.p)((uu - Eu[su].timeMs) / Xu, Eu[su].easing) : 1, ju.curved = this.smooth && Xu > 0, ju.beforeIndex = this.prevNodes[su], ju.afterIndex = this.nextNodes[Uu], ju.beforeMs = this.prevGaps[su], ju.afterMs = this.nextGaps[Uu], ju
      }
      samplePosition(uu, Eu) {
        const {
          fromTangent: ju,
          toTangent: su,
          curved: Uu
        } = uu, Zu = this.nodes[uu.index].position, Xu = this.nodes[uu.toIndex].position;
        pu(this.velocities[uu.index], Zu, Xu, uu.segmentMs, Uu, ju), pu(this.velocities[uu.toIndex], Zu, Xu, uu.segmentMs, Uu, su);
        const lu = uu.u;
        for (let qu = 0; qu < 3; qu++) Eu[qu] = Uu ? Mu(Zu[qu], ju[qu], Xu[qu], su[qu], lu) : Zu[qu] + (Xu[qu] - Zu[qu]) * lu
      }
      fovAt(uu, Eu) {
        var ju;
        return null !== (ju = this.nodes[uu].keyframe.fov) && void 0 !== ju ? ju : Eu
      }
      neighbour(uu, Eu) {
        const ju = this.nodes.length - 1,
          su = uu + Eu;
        return su >= 0 && su <= ju ? su : this.loopMs <= 0 || ju < 2 ? -1 : su < 0 ? ju - 1 : 1
      }
      gapMs(uu, Eu) {
        const ju = this.nodes.length - 1;
        if (1 === Eu) {
          const Eu = uu === ju ? 0 : uu;
          return this.nodes[Eu + 1].timeMs - this.nodes[Eu].timeMs
        }
        const su = 0 === uu ? ju : uu;
        return this.nodes[su].timeMs - this.nodes[su - 1].timeMs
      }
    }
    class vu {
      constructor(uu) {
        this.zb = uu, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Eu => uu.getEntityPosition(Eu), this.readAimPoint = Eu => uu.getEntityAimPoint(Eu)
      }
      aimPoint(uu) {
        return "string" !== typeof uu ? (0, qu.p)(uu, 3) ? uu : null : this.resolve(uu, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(uu) {
        const Eu = "string" === typeof uu ? this.zb.getEntityAimPoint(uu) : uu;
        return Eu && (0, qu.p)(Eu, 3) ? Eu : null
      }
      feetPosition(uu) {
        return this.resolve(uu, this.readFeet, this.lastFeet)
      }
      heading(uu) {
        const Eu = this.zb.getEntityHeading(uu);
        if (null !== Eu && Number.isFinite(Eu)) return this.lastHeadings.set(uu, Eu), Eu;
        const ju = this.lastHeadings.get(uu);
        return void 0 !== ju ? ju : uu === this.zb.localPlayerId ? 0 : this.heading(this.zb.localPlayerId)
      }
      resolve(uu, Eu, ju) {
        const su = Eu(uu);
        let Uu = ju.get(uu);
        return su && (0, qu.p)(su, 3) ? (Uu || (Uu = [0, 0, 0], ju.set(uu, Uu)), Uu[0] = su[0], Uu[1] = su[1], Uu[2] = su[2], Uu) : Uu || (uu === this.zb.localPlayerId ? null : this.resolve(this.zb.localPlayerId, Eu, ju))
      }
    }

    function Ku(uu) {
      return {
        heading: uu.heading,
        pitch: uu.pitch
      }
    }

    function Vu(uu, Eu) {
      Number.isFinite(uu.heading) && Number.isFinite(uu.pitch) || (0, Uu.n)(Eu, uu)
    }

    function ru(uu, Eu, ju, su, Zu) {
      if (Eu) return void(0, Uu.o)(Eu, Zu);
      const Xu = su.aimPoint(ju);
      Xu && (0, Uu.s)(uu, Xu, Zu)
    }
    class Qu {
      constructor(uu, Eu, ju, su) {
        this.settings = uu, this.zb = Eu, this.targets = ju, this.base = void 0, this.base = Ku(su)
      }
      update(uu, Eu, ju) {
        var su;
        const Uu = this.settings;
        (0, qu.g)(Uu.position, ju.position), ru(Uu.position, Uu.lookDirection, null !== (su = Uu.lookAt) && void 0 !== su ? su : this.zb.localPlayerId, this.targets, this.base), Eu.apply(this.base, ju), ju.fov = Nu(Uu, this.zb)
      }
      continueFrom(uu) {
        uu instanceof Qu && (0, Uu.n)(uu.base, this.base)
      }
      reset(uu) {
        Vu(this.base, uu)
      }
    }
    class iu {
      constructor(uu, Eu, ju, su) {
        this.settings = uu, this.zb = Eu, this.targets = ju, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.RY = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = Ku(su), this.goal = [...su.position]
      }
      update(uu, Eu, ju) {
        var su, Uu, Zu;
        const Xu = this.settings,
          lu = null !== (su = Xu.target) && void 0 !== su ? su : this.zb.localPlayerId,
          fu = this.targets.feetPosition(lu);
        let Cu = !1;
        fu && (Cu = this.foundFeet && Gu(this.lastFeet, fu) > 32 + .1 * uu, (0, qu.g)(fu, this.lastFeet), this.foundFeet = !0, this.placeGoal(fu, lu));
        const bu = null !== (Uu = Xu.smoothMs) && void 0 !== Uu ? Uu : 0;
        !this.started || bu < 1 || Cu ? ((0, qu.g)(this.goal, this.smoothed), this.RY.fill(0), this.started = !0) : Ou(this.smoothed, this.RY, this.goal, bu, uu), Cu && (this.distance = -1), (0, qu.g)(this.smoothed, ju.position);
        const cu = !0 === Xu.avoidTerrain ? this.pullIn(lu, uu, ju) : 1;
        let Yu = this.goal;
        if ("target" === Xu.offsetSpace) Yu = ju.position;
        else if (cu < 1) {
          Yu = this.aimOrigin;
          for (let uu = 0; uu < 3; uu++) Yu[uu] = ju.position[uu] + (this.goal[uu] - this.smoothed[uu]) * cu
        }
        ru(Yu, Xu.lookDirection, null !== (Zu = Xu.lookAt) && void 0 !== Zu ? Zu : lu, this.targets, this.base), Eu.apply(this.base, ju), ju.fov = Nu(Xu, this.zb)
      }
      continueFrom(uu) {
        uu instanceof iu && (0, su.r)(uu.settings.target, this.settings.target) && ((0, Uu.n)(uu.base, this.base), (0, qu.g)(uu.goal, this.goal), (0, qu.g)(uu.lastFeet, this.lastFeet), this.foundFeet = uu.foundFeet, (0, qu.g)(uu.smoothed, this.smoothed), (0, qu.g)(uu.RY, this.RY), this.started = uu.started, !0 === uu.settings.avoidTerrain && (this.distance = uu.distance))
      }
      reset(uu) {
        Vu(this.base, uu), this.RY.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(uu, Eu, ju) {
        const su = this.targets.aimPoint(uu);
        if (!su) return 1;
        const Uu = ju.position,
          Zu = Gu(su, Uu);
        if (!(Zu > 0)) return 1;
        const Xu = this.toCamera;
        for (let qu = 0; qu < 3; qu++) Xu[qu] = (Uu[qu] - su[qu]) / Zu;
        const lu = function(uu, Eu, ju) {
          return uu < 0 || Eu < uu ? Eu : Eu + (uu - Eu) * Math.exp(-ju / 150)
        }(this.distance, function(uu, Eu, ju, su) {
          const Uu = uu.raycastTerrain(Eu, ju, su);
          return null !== Uu && Number.isFinite(Uu) ? Math.min(su, Math.max(0, Uu - .2)) : su
        }(this.zb, su, Xu, Zu), Eu);
        if (Zu - lu < .001) return this.distance = -1, 1;
        this.distance = lu;
        for (let qu = 0; qu < 3; qu++) Uu[qu] = su[qu] + Xu[qu] * lu;
        return lu / Zu
      }
      placeGoal(uu, Eu) {
        const ju = this.settings.offset;
        let su = ju[0],
          Uu = ju[2];
        if ("target" === this.settings.offsetSpace) {
          const uu = this.targets.heading(Eu),
            Zu = Math.cos(uu),
            Xu = Math.sin(uu);
          su = ju[0] * Zu + ju[2] * Xu, Uu = -ju[0] * Xu + ju[2] * Zu
        }
        this.goal[0] = uu[0] + su, this.goal[1] = uu[1] + ju[1], this.goal[2] = uu[2] + Uu
      }
    }
    class Wu {
      constructor(uu, Eu, ju, su) {
        var Uu, Zu;
        this.settings = uu, this.zb = Eu, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = uu.keyframes.length > 0 ? new mu(uu.keyframes, null === (Uu = uu.smooth) || void 0 === Uu || Uu, null !== (Zu = uu.loop) && void 0 !== Zu && Zu) : null, this.base = (0, qu.f)(su, (0, qu.j)()), this.resolveTarget = uu => ju.aimPoint(uu)
      }
      update(uu, Eu, ju) {
        this.elapsedMs += uu;
        const su = Nu(this.settings, this.zb);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, su, this.base) : this.base.fov = su, (0, qu.g)(this.base.position, ju.position), ju.fov = this.base.fov, Eu.apply(this.base, ju)
      }
      continueFrom(uu) {
        uu instanceof Wu && (0, su.r)(uu.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = uu.elapsedMs, (0, qu.f)(uu.base, this.base))
      }
      reset(uu) {
        Vu(this.base, uu), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function Su(uu, Eu) {
      return (0, su.u)(uu, Eu)
    }
    class Iu {
      constructor(uu, Eu, ju) {
        var su;
        this.settings = uu, this.zb = Eu, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Uu = null !== ju && ju.settings.mode === uu.mode,
          Zu = Uu ? ju.pose : Eu.getDefaultPose();
        this.pose = (0, qu.f)(Zu, (0, qu.j)()), this.lastGoodPose = (0, qu.f)(Uu ? ju.lastGoodPose : Zu, (0, qu.j)()), this.look = new hu(uu.playerLook), this.targets = null !== (su = null === ju || void 0 === ju ? void 0 : ju.targets) && void 0 !== su ? su : new vu(Eu);
        const Xu = (0, qu.f)(Zu, (0, qu.j)());
        Uu && ju.look.unapply(Xu, Xu), this.mode = function(uu, Eu, ju, su) {
          switch (uu.mode) {
            case "fixed":
              return new Qu(uu, Eu, ju, su);
            case "follow":
              return new iu(uu, Eu, ju, su);
            case "path":
              return new Wu(uu, Eu, ju, su);
            case "frame":
              return new Yu(uu, Eu, ju, su)
          }
        }(uu, Eu, this.targets, Xu), Uu && (this.look.continueFrom(ju.look), this.mode.continueFrom(ju.mode))
      }
      update(uu, Eu) {
        return this.look.update(uu, Eu), this.mode.update(uu, this.look, this.pose), (0, qu.n)(this.pose) ? (0, qu.f)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, qu.f)(this.lastGoodPose, this.pose), this.mode.reset((0, qu.n)(this.lastGoodPose) ? this.lastGoodPose : this.zb.getDefaultPose())), this.pose
      }
    }

    function Fu(uu) {
      return [0, 0, uu[2], uu[3]]
    }
    class Bu {
      constructor(uu) {
        this.zb = uu, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new lu, this.shot = null, this.blend = null, this.mixed = (0, qu.j)(), this.output = (0, qu.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(uu) {
        const Eu = (0, fu.d)(uu);
        if ((0, su.r)(Eu, this.pending ? this.pending.settings : this.settings)) return;
        const ju = Su(this.settings, Eu);
        if (void 0 !== Eu.transition && !ju) return this.pending = {
          settings: Eu,
          shot: "default" === Eu.mode ? null : new Iu(Eu, this.zb, null)
        }, void this.fade.fadeOut(Eu.transition);
        const Uu = null !== this.pending;
        this.pending = null, !Uu && ju || this.fade.fadeIn(su.j.minTransitionFadeMs), this.show(Eu, !1)
      }
      show(uu, Eu) {
        var ju, Uu;
        if ((0, su.r)(uu, this.settings)) return;
        const Xu = !Eu && Su(this.settings, uu);
        this.settings = uu;
        const lu = null !== this.blend && this.blend.elapsedMs > 0,
          fu = (0, qu.f)(this.hasOutput ? this.output : this.zb.getDefaultPose(), (0, qu.j)());
        if (this.shot = "default" === uu.mode ? null : new Iu(uu, this.zb, Eu ? null : this.shot), Xu) return;
        const Cu = Eu || !this.shot && !this.hasOutput ? 0 : null !== (ju = uu.blendInMs) && void 0 !== ju ? ju : 0;
        if (Cu <= 0) return void(this.blend = null);
        const bu = (0, Zu.s)(null !== (Uu = uu.blendEasing) && void 0 !== Uu ? Uu : "easeInOut");
        this.blend = {
          from: fu,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Cu,
          easing: lu ? Fu(bu) : bu
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
      update(uu, Eu) {
        const ju = Number.isFinite(uu) && uu > 0 ? uu : 0;
        if (this.fade.advance(ju) && null !== this.pending) {
          const {
            settings: uu
          } = this.pending;
          this.pending = null, this.show(uu, !0)
        }
        this.loadingPositions.length = 0;
        const su = this.pending;
        if (null !== su && void 0 !== su && su.shot) {
          const uu = "path" === su.settings.mode ? 0 : ju;
          this.noteLoadingPosition(su.shot.update(uu, qu.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Xu = this.shot ? this.shot.update(ju, Eu) : this.zb.getDefaultPose();
        this.shot && this.noteLoadingPosition(Xu.position);
        const lu = this.blend;
        if (!lu) return this.writeOutput(Xu);
        lu.elapsedMs += ju;
        const fu = Math.min(1, lu.elapsedMs / lu.durationMs);
        if (lu.headingDelta = Number.isFinite(lu.headingDelta) ? (0, Uu.z)(lu.headingDelta, Xu.heading - lu.from.heading) : (0, Uu.y)(lu.from.heading, Xu.heading), (0, qu.q)(lu.from, Xu, lu.headingDelta, (0, Zu.p)(fu, lu.easing), this.mixed), fu >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else lu.fromScripted && this.noteLoadingPosition(lu.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(uu) {
        if (uu.every(Number.isFinite)) {
          const Eu = this.loadingPositions;
          Eu.push((0, qu.g)(uu, this.loadingSlots[Eu.length]))
        }
      }
      writeOutput(uu) {
        const Eu = this.output;
        (0, qu.n)(uu) ? (0, qu.f)(uu, Eu) : this.hasOutput || (0, qu.f)(this.zb.getDefaultPose(), Eu), Eu.pitch = (0, Uu.j)(Eu.pitch);
        const ju = this.zb.getDefaultFov(),
          Zu = Number.isFinite(ju) && ju > 0 && ju < 180,
          Xu = Zu ? Math.min(su.j.minFov, ju) : su.j.minFov,
          lu = Zu ? Math.max(su.j.maxFov, ju) : su.j.maxFov;
        return Eu.fov = Number.isFinite(Eu.fov) ? Math.min(lu, Math.max(Xu, Eu.fov)) : lu, this.hasOutput = !0, Eu
      }
    }
  },
  39481: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu,
      f: () => lu,
      g: () => Xu,
      j: () => Zu,
      n: () => fu,
      p: () => qu,
      q: () => Cu
    });
    var su = ju(39490);
    const Uu = {
      hK: 0,
      VK: 0
    };

    function Zu() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Xu(uu, Eu) {
      return Eu[0] = uu[0], Eu[1] = uu[1], Eu[2] = uu[2], Eu
    }

    function lu(uu, Eu) {
      return Xu(uu.position, Eu.position), Eu.heading = uu.heading, Eu.pitch = uu.pitch, Eu.fov = uu.fov, Eu
    }

    function qu(uu, Eu) {
      return Array.isArray(uu) && uu.length === Eu && uu.every(Number.isFinite)
    }

    function fu(uu) {
      return qu(uu.position, 3) && Number.isFinite(uu.heading) && Number.isFinite(uu.pitch) && Number.isFinite(uu.fov)
    }

    function Cu(uu, Eu, ju, Uu, Zu) {
      for (let su = 0; su < 3; su++) Zu.position[su] = uu.position[su] + (Eu.position[su] - uu.position[su]) * Uu;
      return Zu.heading = (0, su.v)(uu.heading + ju * Uu), Zu.pitch = uu.pitch + (Eu.pitch - uu.pitch) * Uu, Zu.fov = uu.fov + (Eu.fov - uu.fov) * Uu, Zu
    }
  },
  39510: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => wu,
      e: () => cu
    });
    var su = ju(39507),
      Uu = ju(39481);
    const Zu = su.i,
      Xu = su.n;

    function lu(uu, Eu, ju, su) {
      return Number.isFinite(uu) ? Math.min(ju, Math.max(Eu, uu)) : su
    }

    function qu(uu, Eu, ju) {
      return void 0 !== uu && Number.isFinite(uu) ? Math.min(ju, Math.max(Eu, uu)) : void 0
    }

    function fu(uu) {
      const Eu = su.j.maxCoordinate;
      return [Math.min(Eu, Math.max(-Eu, uu[0])), Math.min(Eu, Math.max(-Eu, uu[1])), Math.min(Eu, Math.max(-Eu, uu[2]))]
    }

    function Cu(uu) {
      return "string" === typeof uu ? uu : (0, Uu.p)(uu, 3) ? fu(uu) : void 0
    }
    const bu = new RegExp(su.q);

    function cu(uu) {
      return "string" === typeof uu && bu.test(uu)
    }

    function Nu(uu) {
      const Eu = [];
      if (!Array.isArray(uu)) return Eu;
      for (const ju of uu.slice(0, su.j.maxFrameTargets)) {
        const uu = Cu(ju);
        void 0 === uu || "string" === typeof uu && !cu(uu) || Eu.push(uu)
      }
      return Eu
    }

    function Ou(uu) {
      if (!(0, Uu.p)(uu, 3)) return;
      const Eu = Math.max(Math.abs(uu[0]), Math.abs(uu[1]), Math.abs(uu[2])),
        ju = Math.hypot(uu[0] / Eu, uu[1] / Eu, uu[2] / Eu);
      return 0 === Eu || Eu * ju < su.j.minDirectionLength ? void 0 : [uu[0] / Eu / ju, uu[1] / Eu / ju, uu[2] / Eu / ju]
    }

    function Yu(uu) {
      if (void 0 !== uu) return "string" === typeof uu ? Zu.includes(uu) ? uu : void 0 : (0, Uu.p)(uu, 4) ? [lu(uu[0], 0, 1, 0), lu(uu[1], su.j.minEasingY, su.j.maxEasingY, 0), lu(uu[2], 0, 1, 1), lu(uu[3], su.j.minEasingY, su.j.maxEasingY, 1)] : "linear"
    }

    function hu(uu) {
      if (uu) return {
        maxYaw: lu(uu.maxYaw, 0, su.j.maxPlayerLook, 0),
        maxPitch: lu(uu.maxPitch, 0, su.j.maxPlayerLook, 0),
        returnMs: qu(uu.returnMs, 0, su.j.maxReturnMs)
      }
    }
    const Du = new RegExp(su.d);

    function gu(uu) {
      var Eu;
      if ("object" !== typeof uu || null === uu) return;
      const ju = su.j.maxTransitionMs,
        Uu = su.j.minTransitionFadeMs;
      return {
        colour: "string" === typeof uu.colour && Du.test(uu.colour) ? uu.colour : su.g,
        outMs: lu(uu.outMs, Uu, ju, Uu),
        holdMs: lu(null !== (Eu = uu.holdMs) && void 0 !== Eu ? Eu : 0, 0, ju, 0),
        inMs: lu(uu.inMs, Uu, ju, Uu)
      }
    }

    function Mu(uu) {
      return !0 === uu || void 0
    }

    function eu(uu) {
      if ("object" !== typeof uu || null === uu) return !1;
      const Eu = uu.lookAt;
      return Number.isFinite(uu.timeMs) && (0, Uu.p)(uu.position, 3) && (void 0 === Eu || "string" === typeof Eu || (0, Uu.p)(Eu, 3))
    }

    function Gu(uu) {
      return {
        ...uu,
        timeMs: lu(uu.timeMs, 0, su.j.maxPathMs, 0),
        position: fu(uu.position),
        lookAt: Cu(uu.lookAt),
        lookDirection: Ou(uu.lookDirection),
        fov: qu(uu.fov, su.j.minFov, su.j.maxFov),
        easing: Yu(uu.easing)
      }
    }

    function pu(uu) {
      const Eu = [];
      if (!Array.isArray(uu)) return Eu;
      for (const ju of uu.slice(0, su.j.maxKeyframes)) {
        if (!eu(ju)) continue;
        const uu = Gu(ju);
        (0 === Eu.length || uu.timeMs > Eu[Eu.length - 1].timeMs) && Eu.push(uu)
      }
      return Eu
    }

    function wu(uu) {
      if ("object" !== typeof uu || null === uu) return {
        mode: "default"
      };
      const Eu = {
          blendInMs: qu(uu.blendInMs, 0, su.j.maxBlendInMs),
          blendEasing: Yu(uu.blendEasing),
          transition: gu(uu.transition),
          letterbox: Mu(uu.letterbox),
          hideHud: Mu(uu.hideHud)
        },
        ju = {
          mode: "default",
          ...Eu
        };
      if ("default" === uu.mode || "fixed" === uu.mode && !(0, Uu.p)(uu.position, 3)) return ju;
      const Zu = {
        ...Eu,
        fov: qu(uu.fov, su.j.minFov, su.j.maxFov),
        playerFacing: (bu = uu.playerFacing, Xu.includes(bu) ? bu : void 0),
        playerLook: hu(uu.playerLook)
      };
      var bu, cu;
      switch (uu.mode) {
        case "fixed":
          return {
            ...uu, ...Zu, position: fu(uu.position), lookAt: Cu(uu.lookAt), lookDirection: Ou(uu.lookDirection)
          };
        case "follow":
          return {
            ...uu, ...Zu, target: "string" === typeof uu.target ? uu.target : void 0, lookAt: Cu(uu.lookAt), offset: (cu = uu.offset, Array.isArray(cu) ? [lu(cu[0], -su.j.maxOffset, su.j.maxOffset, 0), lu(cu[1], -su.j.maxOffset, su.j.maxOffset, 0), lu(cu[2], -su.j.maxOffset, su.j.maxOffset, 0)] : [0, 0, 0]), lookDirection: Ou(uu.lookDirection), smoothMs: qu(uu.smoothMs, 0, su.j.maxSmoothMs)
          };
        case "path":
          return {
            ...uu, ...Zu, keyframes: pu(uu.keyframes)
          };
        case "frame":
          return {
            ...uu, ...Zu, targets: Nu(uu.targets), viewHeading: qu(uu.viewHeading, -su.j.maxFrameHeading, su.j.maxFrameHeading), viewElevation: qu(uu.viewElevation, 0, su.j.maxFrameElevation), padding: qu(uu.padding, 0, su.j.maxFrameDistance), closestDistance: qu(uu.closestDistance, 0, su.j.maxFrameDistance), furthestDistance: qu(uu.furthestDistance, 0, su.j.maxFrameDistance), smoothMs: qu(uu.smoothMs, 0, su.j.maxSmoothMs)
          };
        default:
          return ju
      }
    }
  },
  39009: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu
    });
    var su = ju(1278);

    function Uu(uu) {
      const Eu = /(\d*\.?\d+)px/.exec(uu);
      return Eu ? Number(Eu[1]) : null
    }

    function Zu(uu) {
      return uu.split(/[\s,]+/).pop()
    }
    let Xu = !1;
    const lu = {
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
      drawText: function(uu, Eu, su, lu, qu, fu) {
        if (qu <= 0 || fu <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Cu,
          fontVariant: bu,
          fontWeight: cu,
          fontSize: Nu,
          font: Ou
        } = this, Yu = [Cu, bu, cu, `${Nu}px`, Ou].filter(Boolean).join(" "), hu = [
          [cu, `${Nu}px`, Zu(Ou)].filter(Boolean).join(" "), `${Nu}px sans-serif`
        ], Du = uu.font, gu = function(uu, Eu, ju) {
          for (const su of Eu) {
            uu.font = su;
            const Eu = Uu(uu.font),
              Xu = Zu(su);
            if (null !== Eu && Math.abs(Eu - ju) <= .5 && uu.font.toLowerCase().includes(Xu.toLowerCase())) return su
          }
          return null
        }(uu, [Yu, ...hu], Nu);
        gu !== Yu && function(uu, Eu, su) {
          Xu || (Xu = !0, Promise.resolve().then((() => ju(1128))).then((ju => {
            let {
              YY: Uu
            } = ju;
            Uu(new Error("A canvas didn't take canvasTxt's font"), {
              font: uu,
              oN: Eu,
              drawnWith: null !== su && void 0 !== su ? su : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Yu, Du, gu);
        const Mu = Uu(uu.font);
        if (null === gu && null !== Mu && Mu > 0) {
          const ju = Nu / Mu;
          uu.save();
          try {
            return uu.scale(ju, ju), {
              height: this.drawLines(uu, Eu, su / ju, lu / ju, qu / ju, fu / ju, Mu).height * ju
            }
          } finally {
            uu.restore()
          }
        }
        return this.drawLines(uu, Eu, su, lu, qu, fu, Nu)
      },
      drawLines: function(uu, Eu, ju, Uu, Zu, Xu, lu) {
        const qu = ju + Zu,
          fu = Uu + Xu;
        let Cu, bu = Uu + Xu / 2 + lu / 2;
        "right" === this.align ? (Cu = qu, uu.textAlign = "right") : "left" === this.align ? (Cu = ju, uu.textAlign = "left") : (Cu = ju + Zu / 2, uu.textAlign = "center");
        for (const su of Eu) {
          uu.measureText(su).width >= Zu && (Eu = Eu.replace(su, ""))
        }
        Eu = (0, su.T)(Eu);
        const cu = [],
          Nu = Eu.split("\n"),
          Ou = this.justify ? uu.measureText("\u200a").width : 0;
        Nu.forEach((Eu => {
          let ju = uu.measureText(Eu).width;
          if (ju <= Zu) cu.push(Eu);
          else {
            let su = Eu;
            const Uu = Zu;
            let Xu, lu, qu;
            for (ju = uu.measureText(su).width; ju > Uu;) {
              for (Xu = 0, lu = 0, qu = ""; lu < Uu;) Xu++, qu = su.substr(0, Xu), lu = uu.measureText(qu).width;
              Xu--, qu = qu.substr(0, Xu);
              const Eu = Xu;
              if (" " !== su.substr(Xu, 1)) {
                for (;
                  " " !== su.substr(Xu, 1) && 0 !== Xu;) Xu--;
                0 === Xu && (Xu = Eu), qu = su.substr(0, Xu)
              }
              qu = this.justify ? this.justifyLine(uu, qu, Ou, "\u200a", Zu) : qu, su = su.substr(Xu), ju = uu.measureText(su).width, cu.push(qu)
            }
            ju > 0 && cu.push(su)
          }
        }));
        const Yu = this.lineHeight ? this.lineHeight : this.getTextHeight(uu, Eu),
          hu = Yu * (cu.length - 1),
          Du = hu / 2;
        let gu = Uu;
        "top" === this.vAlign ? bu = Uu + lu : "bottom" === this.vAlign ? (bu = fu - hu, gu = fu) : (gu = Uu + Xu / 2, bu -= Du), cu.forEach((Eu => {
          Eu = Eu.trim(), uu.fillText(Eu, Cu, bu), bu += Yu
        })), this.debug && (uu.lineWidth = 3, uu.strokeStyle = "#00909e", uu.strokeRect(ju, Uu, Zu, Xu), uu.lineWidth = 2, uu.strokeStyle = "#f6d743", uu.beginPath(), uu.moveTo(Cu, Uu), uu.lineTo(Cu, fu), uu.stroke(), uu.strokeStyle = "#ff6363", uu.beginPath(), uu.moveTo(ju, gu), uu.lineTo(qu, gu), uu.stroke());
        return {
          height: hu + Yu
        }
      },
      getTextHeight: function(uu, Eu) {
        const ju = uu.textBaseline;
        uu.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: su
        } = uu.measureText(Eu);
        return uu.textBaseline = ju, su
      },
      justifyLine: function(uu, Eu, ju, su, Uu) {
        const Zu = Eu.trim(),
          Xu = uu.measureText(Zu).width,
          lu = Zu.split(/\s+/).length - 1,
          qu = Math.floor((Uu - Xu) / ju);
        if (lu <= 0 || qu <= 0) return Zu;
        const fu = Math.floor(qu / lu);
        let Cu = qu - lu * fu,
          bu = [];
        for (let cu = 0; cu < fu; cu++) bu.push(su);
        bu = bu.join("");
        return Zu.replace(/\s+/g, (uu => {
          const Eu = Cu > 0 ? bu + su : bu;
          return Cu--, uu + Eu
        }))
      }
    }
  },
  39438: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return Eu.set(uu), Eu
    }
    ju.d(Eu, {
      b: () => su
    })
  },
  39013: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Yu,
      d: () => Ou,
      f: () => cu,
      i: () => Cu,
      m: () => bu
    });
    var su = ju(4427),
      Uu = ju(349);
    const Zu = 1024,
      Xu = 1536,
      lu = 2 * su.j + 1,
      qu = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      fu = 1.5;

    function Cu(uu, Eu, ju) {
      if ("string" !== typeof uu) return Eu;
      try {
        const ju = JSON.parse(uu);
        return ju && "object" === typeof ju ? ju : Eu
      } catch (su) {
        return void 0 !== ju && console.error(`Couldn't parse ${ju}`, su), Eu
      }
    }

    function bu(uu) {
      return Cu(uu, null, "a leaderboard's rows")
    }

    function cu(uu, Eu) {
      var ju, su;
      return null !== Eu && void 0 !== Eu ? Eu : {
        status: null !== (ju = uu.status) && void 0 !== ju ? ju : "loading",
        entries: null !== (su = uu.entries) && void 0 !== su ? su : []
      }
    }

    function Nu(uu, Eu) {
      return "number" === typeof uu && Number.isFinite(uu) && uu > 0 ? uu : Eu
    }

    function Ou(uu, Eu) {
      const ju = Nu(uu.size, 1);
      let su = Nu(uu.width, Nu(2.5 * ju, 2.5)),
        Uu = Nu(uu.height, Nu(3.75 * ju, 3.75));
      Number.isFinite(Zu * Uu / su) && Number.isFinite(Xu * su / Uu) || (su = 2.5, Uu = 3.75);
      const lu = Uu / su,
        qu = Math.max(1, Math.min(Zu, Eu / lu));
      return {
        width: su,
        height: Uu,
        layoutWidth: Math.max(Zu, Xu / lu),
        layoutHeight: Math.max(Xu, Zu * lu),
        pixelWidth: Math.round(qu),
        pixelHeight: Math.round(Math.max(1, Math.min(Eu, qu * lu)))
      }
    }

    function Yu(uu, Eu, ju, Xu, Cu, bu) {
      uu.setTransform(1, 0, 0, 1, 0, 0), uu.fillStyle = Uu.G.defaultNameTagBackground, uu.fillRect(0, 0, Eu, ju), uu.scale(Eu / Xu.layoutWidth, ju / Xu.layoutHeight), uu.translate((Xu.layoutWidth - Zu) / 2, 0),
        function(uu, Eu, ju, Zu) {
          var Xu, Cu, bu, cu;
          const {
            top: Nu,
            around: Ou,
            showPlayerText: Yu,
            localPlayerDbId: gu
          } = ju, {
            whiteUiText: Mu,
            grayUiText: eu,
            yellowUiText: Gu
          } = Uu.G;
          uu.textBaseline = "middle";
          const pu = function(Eu, ju, su, Uu, Zu, Xu) {
              let lu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              uu.font = `bold ${Uu}px 'Jetbrains Mono', monospace`, uu.fillStyle = Zu, uu.textAlign = lu;
              let qu = Eu.replace(/[\r\n\t]/g, " ");
              if (uu.measureText(qu).width > Xu) {
                for (; qu.length > 0 && uu.measureText(`${qu}\u2026`).width > Xu;) qu = qu.slice(0, -1);
                qu += "\u2026"
              }
              uu.fillText(qu, ju, su)
            },
            wu = Eu => {
              uu.fillStyle = Mu, uu.globalAlpha = .15, uu.fillRect(24, Eu, 976, 2), uu.globalAlpha = 1
            },
            Ju = null === gu ? null : (0, Uu.qc)(gu),
            du = uu => null !== Ju && uu.playerHash === Ju,
            au = hu(Nu.entries, su.l),
            Pu = "ready" === Nu.status && au.length > 0,
            ou = null === Ou ? [] : hu(Ou.entries, lu),
            ku = au.some(du),
            mu = null === Ou ? null : function(uu) {
              const Eu = uu;
              if (!Eu || !Number.isFinite(Eu.rank) || !Number.isFinite(Eu.tied) || !Number.isFinite(Eu.total)) return null;
              return Eu
            }(Ou.standing),
            vu = ou.find(du),
            Ku = au.find(du),
            Vu = null === mu || void 0 === vu ? null : {
              value: vu.value,
              rank: mu.rank
            },
            ru = Du(au, void 0 === Ku || Ku.value === (null === Vu || void 0 === Vu ? void 0 : Vu.value) ? Vu : null),
            Qu = Du(ou, Vu),
            iu = (uu, Eu) => {
              const ju = uu.findIndex(du);
              return ju >= 0 ? Eu[ju] : null
            },
            Wu = null !== (Xu = null !== (Cu = null === mu || void 0 === mu ? void 0 : mu.rank) && void 0 !== Cu ? Cu : iu(ou, Qu)) && void 0 !== Xu ? Xu : iu(au, ru);
          uu.font = "bold 34px 'Jetbrains Mono', monospace";
          const Su = [...Pu ? ru : [], ...ku ? [] : Qu],
            Iu = Math.min(280, Math.max(0, ...Su.map((Eu => uu.measureText(qu.format(Eu)).width)))),
            Fu = Iu <= 80,
            Bu = Fu ? 80 : 32 + Iu,
            Lu = Fu ? 148 : Bu + 28,
            tu = 660 - Lu;
          pu(`TOP ${su.l}  /  ALL TIME`, 24, 52, 28, eu, 976), pu(Yu ? String(null !== (bu = Eu.title) && void 0 !== bu ? bu : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Mu, 976), pu("RANK", 32, 174, 28, eu, Lu - 40), pu("PLAYER", Lu, 174, 28, eu, tu), pu(Yu ? String(null !== (cu = Eu.scoreLabel) && void 0 !== cu ? cu : "Score").slice(0, 24) : "Score", 992, 174, 28, eu, 304, "right"), wu(202);
          const xu = (Zu - 232) / (su.l + fu + lu),
            Tu = 208 + su.l * xu,
            Hu = Tu + fu * xu,
            Au = (Eu, ju, su, Uu) => {
              const Zu = du(Eu);
              uu.fillStyle = Zu ? Gu : Mu, uu.globalAlpha = Zu ? .15 : Uu ? .035 : 0, uu.fillRect(24, su - xu / 2 + 1, 976, xu - 2), uu.globalAlpha = 1;
              const Xu = Zu ? Gu : Mu;
              pu(qu.format(ju), Bu, su, 34, Xu, Fu ? 80 : Iu, Fu ? "center" : "right"), pu(Yu ? String(Eu.name).slice(0, 64) : "Player", Lu, su, 34, Xu, tu);
              const lu = qu.format(Eu.value);
              pu(uu.measureText(lu).width > 304 ? Eu.value.toExponential(6) : lu, 992, su, 34, Xu, 304, "right")
            };
          if (Pu)
            for (const [su, Uu] of au.entries()) Au(Uu, ru[su], 208 + (su + .5) * xu, su % 2 === 0);
          else {
            const uu = "error" === Nu.status,
              Eu = uu ? "Couldn't load leaderboard" : "ready" === Nu.status ? "No scores yet" : "Loading leaderboard\u2026",
              ju = uu ? "Trying again shortly" : "ready" === Nu.status ? "Be the first on the board!" : "Fetching the top players",
              su = (208 + Tu) / 2;
            pu(Eu, 512, su - 28, 40, uu ? Uu.G.redUiText : Mu, 960, "center"), pu(ju, 512, su + 27, 30, eu, 960, "center")
          }
          const nu = Tu + fu * xu / 2;
          if (null === Wu) wu(nu);
          else {
            const Eu = null === mu ? 0 : mu.tied - 1,
              ju = `YOUR RANK #${qu.format(Wu)}${null===mu?"":` of ${qu.format(mu.total)}`}`;
            uu.font = "bold 36px 'Jetbrains Mono', monospace";
            const su = Math.max(20, Math.min(36, Math.floor(34560 / uu.measureText(ju).width)));
            pu(ju, 512, nu - (Eu > 0 ? 15 : 0), su, Gu, 960, "center"), Eu > 0 && pu(`Tied with ${qu.format(Eu)} other${1===Eu?"":"s"}`, 512, nu + 24, 24, eu, 960, "center")
          }
          if (null === Ou) return;
          const yu = Hu + lu * xu / 2;
          if (ku) pu(`You're in the top ${su.l}!`, 512, yu, 40, Gu, 960, "center");
          else if (0 === ou.length) pu("You're not on this board yet", 512, yu, 34, eu, 960, "center");
          else
            for (const [su, Uu] of ou.entries()) Au(Uu, Qu[su], Hu + (su + .5) * xu, su % 2 === 0)
        }(uu, Cu, bu, Xu.layoutHeight)
    }

    function hu(uu, Eu) {
      return Array.isArray(uu) ? uu.slice(0, Eu).filter((uu => uu && Number.isFinite(uu.rank) && Number.isFinite(uu.value))) : []
    }

    function Du(uu, Eu) {
      const ju = [];
      let su = !1;
      return uu.forEach(((Uu, Zu) => {
        if (null !== Eu && Uu.value === Eu.value) return void ju.push(Eu.rank);
        const Xu = Zu > 0 && Uu.value === uu[Zu - 1].value;
        Xu || (su = 0 === Zu && 1 !== Uu.rank), ju.push(Xu && !su ? ju[Zu - 1] : Uu.rank)
      })), ju
    }
  },
  39203: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      f: () => Zu
    });
    const su = 32;

    function Uu(uu) {
      return Array.from(uu).length
    }

    function Zu(uu) {
      const Eu = [""];
      let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Uu = "";
      const Zu = () => {
        Eu.push(""), ju = 0, Uu = ""
      };
      for (const Xu of uu.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Xu)) Zu();
        else if (/^\s+$/.test(Xu)) Uu += Xu;
      else if (Xu.length > 0) {
        const uu = Array.from(Xu);
        ju > 0 && ju + Uu.length + uu.length > su && Zu(), Eu[Eu.length - 1] += Uu, ju += Uu.length, Uu = "";
        for (const Uu of uu) ju >= su && Zu(), Eu[Eu.length - 1] += Uu, ju++
      }
      return Eu[Eu.length - 1] += Uu, Eu
    }
  },
  39431: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(37013),
      Uu = ju.n(su);
    const Zu = [1, 1, 1];

    function Xu(uu) {
      if (!uu) return [...Zu];
      try {
        const [Eu, ju, su] = Uu()(uu).rgb().array();
        return [Eu / 255, ju / 255, su / 255]
      } catch (Eu) {
        return console.warn(`Invalid groundArrowPath colour "${uu}":`, Eu), [...Zu]
      }
    }
  },
  39529: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      f: () => fu,
      h: () => qu
    });
    var su = ju(300),
      Uu = ju(3061);
    const Zu = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      Xu = 512;

    function lu(uu) {
      var Eu;
      const ju = Math.min(screen.width, screen.height) * (null !== (Eu = (0, su.b)()) && void 0 !== Eu ? Eu : (0, Uu.k)());
      return Math.max(window.innerHeight * (0, Uu.k)(), ju) / (0, Uu.l)(uu)
    }

    function qu(uu, Eu, ju) {
      return Eu / (2 * Math.tan(ju / 2)) > Xu ? uu : fu(uu)
    }

    function fu(uu) {
      return uu.map((uu => uu.replace(Zu, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34392: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      c: () => lu,
      f: () => Xu,
      g: () => Uu,
      k: () => su
    });
    const su = {
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
      Uu = "/textures/dayNight/sun.png",
      Zu = "/textures/dayNight/moon.png",
      Xu = "/textures/dayNight/stars",
      lu = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39507: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Cu,
      g: () => bu,
      i: () => su,
      j: () => qu,
      n: () => Uu,
      q: () => fu,
      r: () => lu,
      u: () => Xu
    });
    const su = ["linear", "easeIn", "easeOut", "easeInOut"],
      Uu = ["movement", "camera", "cursor"],
      Zu = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Xu(uu, Eu) {
      return lu(uu, Eu, Zu)
    }

    function lu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (uu === Eu || Number.isNaN(uu) && Number.isNaN(Eu)) return !0;
      if ("object" !== typeof uu || "object" !== typeof Eu || null === uu || null === Eu || Array.isArray(uu) !== Array.isArray(Eu)) return !1;
      const su = uu,
        Uu = Eu;
      for (const Zu of new Set([...Object.keys(su), ...Object.keys(Uu)]))
        if (!ju.includes(Zu) && !lu(su[Zu], Uu[Zu])) return !1;
      return !0
    }
    const qu = {
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
      fu = "^-[1-9][0-9]*$",
      Cu = "^#[0-9a-fA-F]{6}$",
      bu = "#000000"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);