export const id = 193;
export const ids = [193];
export const modules = {
  38710: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      constructor(kk, ek) {
        this.read = kk, this.apply = ek, this.release = null
      }
      turn(kk, ek) {
        const ik = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: ek,
          forcedCameraDirection: [kk[0], kk[1], kk[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), ek + 100),
          transitionMs: ik
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(kk) {
        null !== this.release && (clearTimeout(this.release.timer), kk && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38231: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      e: () => fk
    });
    const Dk = new Map;

    function fk(kk, ek) {
      Dk.set(kk, ek)
    }

    function Sk(kk) {
      return kk ? Dk.get(kk) : void 0
    }
  },
  39171: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    var Dk = ik(37805);

    function fk(kk, ek, ik) {
      var fk, Sk, bk, rk, Pk, mk, Mk;
      const Kk = (0, Dk.e)(kk, ek, ik[0], ik[1], ik[2]),
        xk = Kk ? null !== (fk = Kk.textCell) && void 0 !== fk ? fk : Kk.rect.anchor : ik,
        nk = ek(xk[0], xk[1], xk[2]);
      return {
        pos: [ik[0], ik[1], ik[2]],
        noticeboardSpan: Kk && {
          width: Kk.rect.width,
          height: Kk.rect.height
        },
        text: null !== (Sk = null === nk || void 0 === nk || null === (bk = nk.persisted) || void 0 === bk || null === (rk = bk.shared) || void 0 === rk ? void 0 : rk.text) && void 0 !== Sk ? Sk : "",
        textSize: null !== (Pk = null === nk || void 0 === nk || null === (mk = nk.persisted) || void 0 === mk || null === (Mk = mk.shared) || void 0 === Mk ? void 0 : Mk.textSize) && void 0 !== Pk ? Pk : null
      }
    }
  },
  38088: (kk, ek, ik) => {
    function Dk(kk) {
      switch (kk.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    ik.d(ek, {
      b: () => fk,
      d: () => Sk,
      e: () => Dk
    });
    const fk = 4,
      Sk = 3
  },
  38734: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      d: () => Sk
    });
    var Dk = ik(314);
    const fk = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class Sk {
      constructor(kk) {
        this.importGame = kk, this.loads = new Map, this.loaded = new Map
      }
      load(kk) {
        const ek = (0, Dk.Db)(kk);
        if (!fk.has(ek)) return Promise.resolve(void 0);
        let ik = this.loads.get(ek);
        return ik || (ik = this.importGame(ek).then((kk => {
          const ik = kk.default;
          if ("function" !== typeof ik) throw new Error(`${ek}'s client code has no default-exported factory`);
          return this.loaded.set(ek, ik), ik
        })).catch((kk => {
          throw this.loads.delete(ek), kk
        })), this.loads.set(ek, ik)), ik
      }
      loadedFactory(kk) {
        const ek = (0, Dk.Db)(kk);
        if (!fk.has(ek)) return;
        const ik = this.loaded.get(ek);
        if (!ik) throw new Error(`${ek}'s client code started before it loaded`);
        return ik
      }
    }
  },
  39173: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(9105),
      fk = ik(33784),
      Sk = ik(3261);

    function bk(kk) {
      if (kk === Dk.c) return 0;
      const ek = (0, Sk.e)(kk);
      if (void 0 !== ek && ek <= fk.MAX_BLOCK_ID) return ek;
      const ik = (0, Sk.e)(kk.split("|")[0]);
      if (void 0 !== ik && ik <= fk.MAX_BLOCK_ID && (0, fk.rootMetaDescOf)(ik) === kk) return ik;
      throw new Error(`Invalid block name. You sent ${kk}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38781: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk
    });
    var Dk = ik(22);
    class fk {
      constructor(kk) {
        this.screen = kk, this.hidesHud = !1
      }
      show(kk, ek) {
        this.screen.setFade(kk.colour, kk.alpha), this.screen.setLetterbox(!0 === ek.letterbox, kk.alpha < 1), this.setHudHidden(!0 === ek.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(kk) {
        this.hidesHud !== kk && (this.hidesHud = kk, Dk.b.set({
          isUiHiddenByCamera: kk
        }))
      }
    }
  },
  38752: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      f: () => xk,
      h: () => Kk,
      k: () => bk,
      n: () => Uk,
      o: () => Pk,
      p: () => Hk,
      q: () => mk,
      s: () => rk,
      w: () => Mk
    });
    const Dk = Math.PI / 2 - .001,
      fk = 2 * Math.PI,
      Sk = 1e-9;

    function bk(kk, ek) {
      ek.heading = kk.heading, ek.pitch = kk.pitch
    }

    function rk(kk, ek) {
      const ik = ek - kk;
      return ik - fk * Math.floor((ik + Math.PI) / fk)
    }

    function Pk(kk, ek, ik) {
      return kk + rk(kk, ek) * ik
    }

    function mk(kk) {
      if (!Number.isFinite(kk)) return kk;
      const ek = kk - fk * Math.floor(kk / fk);
      return ek < fk ? ek : 0
    }

    function Mk(kk, ek) {
      return kk + rk(kk, ek)
    }

    function Kk(kk) {
      return Math.max(-Dk, Math.min(Dk, kk))
    }

    function xk(kk, ek, ik) {
      const Dk = Math.cos(ek);
      return ik[0] = Dk * Math.sin(kk), ik[1] = -Math.sin(ek), ik[2] = Dk * Math.cos(kk), ik
    }

    function nk(kk, ek, ik, Dk) {
      const fk = Math.sqrt(kk * kk + ik * ik);
      return fk < Sk && Math.abs(ek) < Sk || (fk >= Sk && (Dk.heading = Math.atan2(kk, ik)), Dk.pitch = Kk(Math.atan2(-ek, fk) + 0)), Dk
    }

    function Uk(kk, ek) {
      return nk(kk[0], kk[1], kk[2], ek)
    }

    function Hk(kk, ek, ik) {
      return nk(ek[0] - kk[0], ek[1] - kk[1], ek[2] - kk[2], ik)
    }
  },
  38773: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk,
      f: () => fk
    });
    var Dk = ik(38752);

    function fk(kk) {
      var ek;
      const ik = "default" === kk.mode ? "movement" : null !== (ek = kk.playerFacing) && void 0 !== ek ? ek : "movement";
      return "cursor" === ik ? {
        facing: ik,
        mouseTurns: null
      } : {
        facing: ik,
        mouseTurns: "default" !== kk.mode && void 0 !== kk.playerLook ? "look" : "view"
      }
    }

    function Sk(kk, ek, ik, fk, Sk, bk) {
      return bk.SF = 0, bk.mF = 0, bk.pointedAt = void 0, void 0 !== fk ? Sk ? (bk.pointedAt = fk, kk) : (0, Dk.q)(fk.heading) : Sk ? (bk.SF = ek, bk.mF = ik, kk) : (0, Dk.q)(kk + ek)
    }
  },
  38758: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Bk
    });
    var Dk = ik(38760),
      fk = ik(38752),
      Sk = ik(36583);

    function bk(kk, ek, ik, Dk) {
      if (!(Dk > 0)) return ek;
      const fk = ek > kk ? Math.min(ek, kk + ik / Dk) : Math.max(ek, kk - ik / Dk);
      return Math.abs(ek - fk) < 1e-9 ? ek : fk
    }
    class rk {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Dk.g,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(kk) {
        !this.isGoingOut() && this.sinceTurnMs < Dk.m.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: kk
        } : (this.waiting = null, this.startOut(kk))
      }
      fadeIn(kk) {
        this.isGoingOut() ? this.sinceTurnMs < Dk.m.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: kk
        } : (this.waiting = null, this.startIn(kk)) : this.waiting = null
      }
      advance(kk) {
        const ek = this.waiting;
        if (null === ek) return this.step(kk);
        const ik = Dk.m.minFadeTurnMs - this.sinceTurnMs;
        if (ik > kk) return this.step(kk);
        const fk = this.step(ik);
        return this.waiting = null, "out" === ek.turn ? this.startOut(ek.transition) : this.startIn(ek.minMs), this.step(kk - ik) || fk
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(kk) {
        ("in" === this.phase || null === this.phase && this.clearMs < Dk.m.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = kk.colour), this.outMs = kk.outMs, this.holdMs = kk.holdMs, this.inMs = kk.inMs
      }
      startIn(kk) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(kk, this.inMs)
      }
      step(kk) {
        const ek = this.screen;
        this.sinceTurnMs += kk, null === this.phase && (this.clearMs += kk);
        let ik = !1,
          fk = kk;
        if ("out" === this.phase) {
          const Dk = (1 - ek.alpha) * this.outMs;
          if (ek.alpha = bk(ek.alpha, 1, kk, this.outMs), ek.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, fk = Math.max(0, kk - Dk), ik = !0
        }
        let Sk = kk;
        if ("hold" === this.phase) {
          this.heldMs += fk;
          const kk = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Dk.m.minFadeTurnMs);
          if (kk < 0 || ik) return ik;
          this.phase = "in", this.sinceTurnMs = kk, Sk = kk
        }
        return "in" === this.phase && (ek.alpha = bk(ek.alpha, 0, Sk, this.inMs), ek.alpha <= 0 && (this.phase = null, this.clearMs = 0)), ik
      }
    }
    var Pk = ik(38745),
      mk = ik(38764),
      Mk = ik(1850),
      Kk = ik(36113);

    function xk(kk, ek) {
      for (let ik = 0; ik < ek.length; ik++) ek[ik] = kk[ik]
    }

    function nk(kk, ek) {
      var ik;
      return null !== (ik = kk.fov) && void 0 !== ik ? ik : ek.getDefaultFov()
    }

    function Uk(kk, ek, ik, Dk, fk) {
      const Sk = 2 / Dk,
        bk = Math.exp(-Sk * fk);
      for (let rk = 0; rk < kk.length; rk++) {
        const Dk = kk[rk] - ik[rk],
          Pk = (ek[rk] + Sk * Dk) * fk;
        kk[rk] = ik[rk] + (Dk + Pk) * bk, ek[rk] = (ek[rk] - Sk * Pk) * bk
      }
    }
    class Hk {
      constructor(kk, ek, ik, Dk) {
        var Sk, bk, rk, Pk, mk;
        this.settings = kk, this.Ux = ek, this.targets = ik, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Cw = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, fk.q)((0, Mk.h)(null !== (Sk = kk.viewHeading) && void 0 !== Sk ? Sk : 0)),
          pitch: (0, fk.h)((0, Mk.h)(null !== (bk = kk.viewElevation) && void 0 !== bk ? bk : 45))
        }, this.closestDistance = null !== (rk = kk.closestDistance) && void 0 !== rk ? rk : Math.min(6, null !== (Pk = kk.furthestDistance) && void 0 !== Pk ? Pk : 1 / 0), this.furthestDistance = null !== (mk = kk.furthestDistance) && void 0 !== mk ? mk : Math.max(64, this.closestDistance);
        const Kk = (0, fk.f)(this.base.heading, this.base.pitch, this.forward),
          xk = Dk.position,
          nk = this.closestDistance;
        this.goal = [xk[0] + Kk[0] * nk, xk[1] + Kk[1] * nk, xk[2] + Kk[2] * nk, nk, this.base.heading, this.base.pitch]
      }
      update(kk, ek, ik) {
        var Dk, Sk;
        this.placeGoal(null !== (Dk = this.settings.fov) && void 0 !== Dk ? Dk : this.Ux.getBaseFov()), this.goal[4] = (0, fk.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const bk = null !== (Sk = this.settings.smoothMs) && void 0 !== Sk ? Sk : 400;
        !this.started || bk < 1 ? (xk(this.goal, this.smoothed), this.Cw.fill(0), this.started = !0) : Uk(this.smoothed, this.Cw, this.goal, bk, kk), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, fk.h)(this.smoothed[5]), ek.apply(this.angles, ik);
        const rk = (0, fk.f)(ik.heading, ik.pitch, this.forward);
        for (let fk = 0; fk < 3; fk++) ik.position[fk] = this.smoothed[fk] - rk[fk] * this.smoothed[3];
        ik.fov = nk(this.settings, this.Ux)
      }
      continueFrom(kk) {
        kk instanceof Hk && (xk(kk.goal, this.goal), xk(kk.smoothed, this.smoothed), xk(kk.Cw, this.Cw), this.framedTargets = kk.framedTargets, this.started = kk.started)
      }
      reset() {
        this.Cw.fill(0), this.started = !1
      }
      placeGoal(kk) {
        var ek;
        let ik = 0;
        for (const Mk of this.settings.targets) {
          const kk = this.targets.currentAimPoint(Mk);
          kk && (0, Pk.g)(kk, this.pointAt(ik++))
        }
        if (ik > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const kk = this.targets.aimPoint(this.Ux.localPlayerId);
          kk && (0, Pk.g)(kk, this.pointAt(ik++))
        }
        const Dk = this.goal;
        if (0 === ik) return void(Dk[3] = this.withinDistances(Dk[3]));
        for (let Pk = 0; Pk < 3; Pk++) {
          let kk = 1 / 0,
            ek = -1 / 0;
          for (let Dk = 0; Dk < ik; Dk++) kk = Math.min(kk, this.points[Dk][Pk]), ek = Math.max(ek, this.points[Dk][Pk]);
          Dk[Pk] = (kk + ek) / 2
        }
        let fk = 0;
        for (let Pk = 0; Pk < ik; Pk++) {
          const kk = this.points[Pk];
          fk = Math.max(fk, Math.hypot(kk[0] - Dk[0], kk[1] - Dk[1], kk[2] - Dk[2]))
        }
        const Sk = Math.tan((0, Mk.h)(kk) / 2),
          bk = Math.atan(Sk * (!0 === this.settings.letterbox ? Kk.d : 1)),
          rk = Math.atan(Sk * this.Ux.getAspectRatio()),
          mk = (fk + (null !== (ek = this.settings.padding) && void 0 !== ek ? ek : 2)) / Math.sin(Math.min(bk, rk));
        Dk[3] = this.withinDistances(mk)
      }
      withinDistances(kk) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, kk))
      }
      pointAt(kk) {
        return kk === this.points.length && this.points.push([0, 0, 0]), this.points[kk]
      }
    }
    class wk {
      constructor(kk) {
        this.limits = kk, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(kk) {
        this.limits && (this.yawOffset = kk.yawOffset, this.pitchOffset = kk.pitchOffset, this.idleMs = kk.idleMs)
      }
      update(kk, ek) {
        const ik = this.limits;
        if (!ik) return;
        const Dk = Number.isFinite(ek.SF) ? ek.SF : 0,
          fk = Number.isFinite(ek.mF) ? ek.mF : 0;
        if (ek.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: ek.pointedAt.heading,
          pitch: ek.pointedAt.pitch
        };
        else if (0 !== Dk || 0 !== fk) this.idleMs = 0, this.yawOffset += Dk, this.pitchOffset += fk;
        else {
          const ek = Math.max(0, this.idleMs + kk - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += kk, void 0 !== ik.returnMs && ek > 0) {
            const kk = ik.returnMs > 0 ? Math.exp(-3 * ek / ik.returnMs) : 0;
            this.yawOffset *= kk, this.pitchOffset *= kk
          }
        }
        this.clampOffsets(ik)
      }
      clampOffsets(kk) {
        if (kk.maxYaw >= 180) this.yawOffset = (0, fk.s)(0, this.yawOffset);
        else {
          const ek = (0, Mk.h)(kk.maxYaw);
          this.yawOffset = Math.max(-ek, Math.min(ek, this.yawOffset))
        }
        const ek = (0, Mk.h)(kk.maxPitch);
        this.pitchOffset = Math.max(-ek, Math.min(ek, this.pitchOffset))
      }
      apply(kk, ek) {
        this.pointedAt && this.limits && (this.yawOffset = (0, fk.s)(kk.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - kk.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const ik = (0, fk.h)(kk.pitch + this.pitchOffset);
        this.pitchOffset = ik - kk.pitch, ek.heading = (0, fk.q)(kk.heading + this.yawOffset), ek.pitch = ik
      }
      unapply(kk, ek) {
        ek.heading = (0, fk.q)(kk.heading - this.yawOffset), ek.pitch = (0, fk.h)(kk.pitch - this.pitchOffset)
      }
    }
    const lk = 1e-6;

    function pk(kk) {
      return Math.sqrt(kk[0] * kk[0] + kk[1] * kk[1] + kk[2] * kk[2])
    }

    function yk(kk, ek, ik, Dk, fk) {
      const Sk = fk * fk,
        bk = Sk * fk;
      return (2 * bk - 3 * Sk + 1) * kk + (bk - 2 * Sk + fk) * ek + (-2 * bk + 3 * Sk) * ik + (bk - Sk) * Dk
    }

    function Yk(kk, ek, ik, Dk, fk) {
      const Sk = fk * fk;
      return (6 * Sk - 6 * fk) * kk + (3 * Sk - 4 * fk + 1) * ek + (-6 * Sk + 6 * fk) * ik + (3 * Sk - 2 * fk) * Dk
    }

    function Lk(kk, ek) {
      const ik = ek[0] - kk[0],
        Dk = ek[1] - kk[1],
        fk = ek[2] - kk[2];
      return Math.sqrt(ik * ik + Dk * Dk + fk * fk)
    }

    function Ck(kk, ek, ik, Dk, fk, Sk) {
      for (let bk = 0; bk < 3; bk++) Sk[bk] = fk ? kk[bk] * Dk : ik[bk] - ek[bk];
      return fk && function(kk, ek) {
        const ik = pk(kk);
        if (ik > ek) {
          const Dk = ek / ik;
          kk[0] *= Dk, kk[1] *= Dk, kk[2] *= Dk
        }
      }(Sk, 3 * Lk(ek, ik)), Sk
    }

    function Ak(kk, ek, ik, Dk) {
      for (let fk = 0; fk < 3; fk++) Dk[fk] = 6 * (ek[fk] - kk[fk]) - 2 * ik[fk];
      if (pk(Dk) < lk)
        for (let fk = 0; fk < 3; fk++) Dk[fk] = ek[fk] - kk[fk];
      return Dk
    }

    function jk(kk, ek) {
      return [2 * ek[0] - kk[0], 2 * ek[1] - kk[1], 2 * ek[2] - kk[2]]
    }

    function sk(kk, ek, ik, Dk, fk, Sk, bk) {
      if (!Sk && !bk) return 0;
      const rk = Sk ? kk : 2 * ek - ik,
        Pk = bk ? ik : 2 * ek - kk,
        mk = Sk ? Dk : fk,
        Mk = bk ? fk : Dk,
        Kk = (ek - rk) / mk,
        xk = (Pk - ek) / Mk;
      if (Kk * xk <= 0) return 0;
      const nk = (Pk - rk) / (mk + Mk),
        Uk = 3 * Math.min(Math.abs(Kk), Math.abs(xk));
      return Math.max(-Uk, Math.min(Uk, nk))
    }

    function dk(kk, ek, ik, Dk, fk, Sk, bk) {
      const {
        u: rk,
        segmentMs: Pk
      } = kk;
      if (!kk.curved) return ik + (Dk - ik) * rk;
      return yk(ik, sk(ek, ik, Dk, kk.beforeMs, Pk, Sk, !0) * Pk, Dk, sk(ik, Dk, fk, Pk, kk.afterMs, !0, bk) * Pk, rk)
    }

    function Vk(kk) {
      return Math.abs(kk.pitch) >= fk.d
    }
    class Fk {
      constructor(kk, ek, ik, Dk, fk) {
        this.nodes = kk, this.prevNodes = ik, this.nextNodes = Dk, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = kk.map(((kk, ik) => this.nodeTangent(ek, fk, ik)))
      }
      sample(kk, ek, ik) {
        const {
          index: Dk,
          toIndex: Sk,
          segmentMs: bk,
          curved: rk
        } = kk, Pk = this.fromAngles, mk = this.toAngles, Mk = this.nodeAngles(Dk, ik.position, ek, Pk), Kk = this.nodeAngles(Sk, ik.position, ek, mk);
        if (bk > 0 && "aim" !== Mk && "aim" !== Kk && this.liveTangent(kk, Pk)) return ik.heading = (0, fk.q)(Pk.heading), void(ik.pitch = Pk.pitch);
        if ("none" === Mk && "none" === Kk) return;
        !rk && bk > 0 && ("tangent" === Mk && this.liveTangent(kk, Pk), "tangent" === Kk && this.liveTangent(kk, mk)), "none" === Mk ? (0, fk.k)(mk, Pk) : "none" === Kk && (0, fk.k)(Pk, mk);
        const xk = rk && kk.beforeIndex >= 0 && "none" !== this.nodeAngles(kk.beforeIndex, ik.position, ek, this.beforeAngles),
          nk = rk && kk.afterIndex >= 0 && "none" !== this.nodeAngles(kk.afterIndex, ik.position, ek, this.afterAngles),
          Uk = (0, fk.w)(Pk.heading, mk.heading),
          Hk = dk(kk, xk ? (0, fk.w)(Pk.heading, this.beforeAngles.heading) : 0, Pk.heading, Uk, nk ? (0, fk.w)(Uk, this.afterAngles.heading) : 0, xk, nk);
        ik.heading = (0, fk.q)(Hk), ik.pitch = (0, fk.h)(dk(kk, this.beforeAngles.pitch, Pk.pitch, mk.pitch, this.afterAngles.pitch, xk, nk))
      }
      nodeAngles(kk, ek, ik, Dk) {
        const fk = this.rawNodeAngles(kk, ek, ik, Dk);
        return "none" !== fk && Vk(Dk) && !this.borrowHeading(this.prevNodes[kk], ek, ik, Dk) && this.borrowHeading(this.nextNodes[kk], ek, ik, Dk), fk
      }
      borrowHeading(kk, ek, ik, Dk) {
        const fk = this.borrowedAngles;
        return !(kk < 0 || "none" === this.rawNodeAngles(kk, ek, ik, fk) || Vk(fk)) && (Dk.heading = fk.heading, !0)
      }
      rawNodeAngles(kk, ek, ik, Dk) {
        const Sk = this.nodes[kk].keyframe;
        if (Sk.lookDirection) return (0, fk.n)(Sk.lookDirection, Dk), "aim";
        if (void 0 !== Sk.lookAt) {
          const kk = ik(Sk.lookAt);
          if (kk) return (0, fk.p)(ek, kk, Dk), "aim"
        }
        const bk = this.tangents[kk];
        return bk ? ((0, fk.k)(bk, Dk), "tangent") : "none"
      }
      liveTangent(kk, ek) {
        const ik = this.nodes[kk.index].position,
          Dk = this.nodes[kk.toIndex].position,
          Sk = this.derivative;
        for (let fk = 0; fk < 3; fk++) Sk[fk] = Yk(ik[fk], kk.fromTangent[fk], Dk[fk], kk.toTangent[fk], kk.u);
        return pk(Sk) > 1e-9 ? ((0, fk.n)(Sk, ek), !0) : !(Lk(ik, Dk) < lk) && ((0, fk.n)(Ak(ik, Dk, kk.u < .5 ? kk.toTangent : kk.fromTangent, Sk), ek), !0)
      }
      nodeTangent(kk, ek, ik) {
        var Dk;
        const Sk = kk[ik];
        if (pk(Sk) > 1e-9) return (0, fk.n)(Sk, {
          heading: 0,
          pitch: 0
        });
        const bk = null !== (Dk = this.restDirectionTo(ik, ik + 1, kk, ek)) && void 0 !== Dk ? Dk : this.restDirectionTo(ik, ik - 1, kk, ek);
        return bk ? (0, fk.n)(bk, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(kk, ek, ik, Dk) {
        const fk = this.nodes[kk],
          Sk = this.nodes[ek];
        if (!Sk || Lk(fk.position, Sk.position) < lk) return null;
        const [bk, rk] = ek > kk ? [fk, Sk] : [Sk, fk], Pk = Ck(ik[ek], bk.position, rk.position, rk.timeMs - bk.timeMs, Dk, [0, 0, 0]);
        return Ak(bk.position, rk.position, Pk, [0, 0, 0])
      }
    }

    function uk(kk, ek) {
      const ik = kk.lookDirection || ek.lookDirection ? function(kk, ek) {
        if (!kk || !ek) return kk === ek;
        const ik = pk(kk),
          Dk = pk(ek);
        return Math.hypot(kk[0] / ik - ek[0] / Dk, kk[1] / ik - ek[1] / Dk, kk[2] / ik - ek[2] / Dk) < lk
      }(kk.lookDirection, ek.lookDirection) : (Dk = kk.lookAt, fk = ek.lookAt, "object" !== typeof Dk || "object" !== typeof fk ? Dk === fk : Lk(Dk, fk) < lk);
      var Dk, fk;
      return Lk(kk.position, ek.position) < lk && kk.fov === ek.fov && ik
    }
    class qk {
      constructor(kk, ek, ik) {
        if (this.smooth = ek, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === kk.length) throw new Error("A camera path needs at least one keyframe");
        for (let Sk = 1; Sk < kk.length; Sk++)
          if (!(kk[Sk].timeMs > kk[Sk - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = kk.map((kk => {
          var ek;
          return {
            timeMs: kk.timeMs,
            position: [...kk.position],
            keyframe: kk,
            easing: (0, Sk.j)(null !== (ek = kk.easing) && void 0 !== ek ? ek : "linear")
          }
        }));
        const Dk = this.nodes[0],
          fk = this.nodes[this.nodes.length - 1],
          bk = ik && this.nodes.length > 1;
        bk && !uk(Dk.keyframe, fk.keyframe) && this.nodes.push({
          ...Dk,
          timeMs: fk.timeMs + (fk.timeMs - Dk.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = bk ? this.nodes[this.nodes.length - 1].timeMs - Dk.timeMs : 0, this.prevNodes = this.nodes.map(((kk, ek) => this.neighbour(ek, -1))), this.nextNodes = this.nodes.map(((kk, ek) => this.neighbour(ek, 1))), this.prevGaps = this.prevNodes.map(((kk, ek) => kk >= 0 ? this.gapMs(ek, -1) : 0)), this.nextGaps = this.nextNodes.map(((kk, ek) => kk >= 0 ? this.gapMs(ek, 1) : 0)), this.velocities = this.nodes.map(((kk, ek) => {
          const ik = this.prevNodes[ek],
            Dk = this.nextNodes[ek];
          return function(kk, ek, ik, Dk, fk, Sk) {
            if (Sk[0] = 0, Sk[1] = 0, Sk[2] = 0, !kk && !ik) return Sk;
            const bk = null !== kk && void 0 !== kk ? kk : jk(null !== ik && void 0 !== ik ? ik : ek, ek),
              rk = null !== ik && void 0 !== ik ? ik : jk(null !== kk && void 0 !== kk ? kk : ek, ek),
              Pk = kk ? Dk : fk,
              mk = ik ? fk : Dk,
              Mk = Lk(bk, ek),
              Kk = Lk(ek, rk);
            if (Mk < lk || Kk < lk) return Sk;
            const xk = Math.sqrt(Mk),
              nk = Math.sqrt(Kk),
              Uk = (xk + nk) / (Pk + mk);
            for (let Hk = 0; Hk < 3; Hk++) {
              const kk = (ek[Hk] - bk[Hk]) / xk - (rk[Hk] - bk[Hk]) / (xk + nk) + (rk[Hk] - ek[Hk]) / nk;
              Sk[Hk] = kk * Uk
            }
            return Sk
          }(ik >= 0 ? this.nodes[ik].position : null, kk.position, Dk >= 0 ? this.nodes[Dk].position : null, this.prevGaps[ek], this.nextGaps[ek], [0, 0, 0])
        })), this.aim = new Fk(this.nodes, this.velocities, this.prevNodes, this.nextNodes, ek)
      }
      sample(kk, ek, ik, Dk) {
        const fk = this.findSegment(this.pathTime(kk));
        this.samplePosition(fk, Dk.position), this.aim.sample(fk, ek, Dk);
        const {
          beforeIndex: Sk,
          afterIndex: bk
        } = fk;
        Dk.fov = dk(fk, Sk >= 0 ? this.fovAt(Sk, ik) : 0, this.fovAt(fk.index, ik), this.fovAt(fk.toIndex, ik), bk >= 0 ? this.fovAt(bk, ik) : 0, Sk >= 0, bk >= 0)
      }
      pathTime(kk) {
        const ek = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || kk <= ek) return kk;
        const ik = kk - ek;
        return ek + ik - this.loopMs * Math.floor(ik / this.loopMs)
      }
      findSegment(kk) {
        const ek = this.nodes,
          ik = this.segment;
        let Dk = ik.index;
        for (kk < ek[Dk].timeMs && (Dk = 0); Dk < ek.length - 2 && ek[Dk + 1].timeMs <= kk;) Dk++;
        const fk = Math.min(Dk + 1, ek.length - 1),
          bk = ek[fk].timeMs - ek[Dk].timeMs;
        return ik.index = Dk, ik.toIndex = fk, ik.segmentMs = bk, ik.u = bk > 0 ? (0, Sk.i)((kk - ek[Dk].timeMs) / bk, ek[Dk].easing) : 1, ik.curved = this.smooth && bk > 0, ik.beforeIndex = this.prevNodes[Dk], ik.afterIndex = this.nextNodes[fk], ik.beforeMs = this.prevGaps[Dk], ik.afterMs = this.nextGaps[fk], ik
      }
      samplePosition(kk, ek) {
        const {
          fromTangent: ik,
          toTangent: Dk,
          curved: fk
        } = kk, Sk = this.nodes[kk.index].position, bk = this.nodes[kk.toIndex].position;
        Ck(this.velocities[kk.index], Sk, bk, kk.segmentMs, fk, ik), Ck(this.velocities[kk.toIndex], Sk, bk, kk.segmentMs, fk, Dk);
        const rk = kk.u;
        for (let Pk = 0; Pk < 3; Pk++) ek[Pk] = fk ? yk(Sk[Pk], ik[Pk], bk[Pk], Dk[Pk], rk) : Sk[Pk] + (bk[Pk] - Sk[Pk]) * rk
      }
      fovAt(kk, ek) {
        var ik;
        return null !== (ik = this.nodes[kk].keyframe.fov) && void 0 !== ik ? ik : ek
      }
      neighbour(kk, ek) {
        const ik = this.nodes.length - 1,
          Dk = kk + ek;
        return Dk >= 0 && Dk <= ik ? Dk : this.loopMs <= 0 || ik < 2 ? -1 : Dk < 0 ? ik - 1 : 1
      }
      gapMs(kk, ek) {
        const ik = this.nodes.length - 1;
        if (1 === ek) {
          const ek = kk === ik ? 0 : kk;
          return this.nodes[ek + 1].timeMs - this.nodes[ek].timeMs
        }
        const Dk = 0 === kk ? ik : kk;
        return this.nodes[Dk].timeMs - this.nodes[Dk - 1].timeMs
      }
    }
    class Ik {
      constructor(kk) {
        this.Ux = kk, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = ek => kk.getEntityPosition(ek), this.readAimPoint = ek => kk.getEntityAimPoint(ek)
      }
      aimPoint(kk) {
        return "string" !== typeof kk ? (0, Pk.m)(kk, 3) ? kk : null : this.resolve(kk, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(kk) {
        const ek = "string" === typeof kk ? this.Ux.getEntityAimPoint(kk) : kk;
        return ek && (0, Pk.m)(ek, 3) ? ek : null
      }
      feetPosition(kk) {
        return this.resolve(kk, this.readFeet, this.lastFeet)
      }
      heading(kk) {
        const ek = this.Ux.getEntityHeading(kk);
        if (null !== ek && Number.isFinite(ek)) return this.lastHeadings.set(kk, ek), ek;
        const ik = this.lastHeadings.get(kk);
        return void 0 !== ik ? ik : kk === this.Ux.localPlayerId ? 0 : this.heading(this.Ux.localPlayerId)
      }
      resolve(kk, ek, ik) {
        const Dk = ek(kk);
        let fk = ik.get(kk);
        return Dk && (0, Pk.m)(Dk, 3) ? (fk || (fk = [0, 0, 0], ik.set(kk, fk)), fk[0] = Dk[0], fk[1] = Dk[1], fk[2] = Dk[2], fk) : fk || (kk === this.Ux.localPlayerId ? null : this.resolve(this.Ux.localPlayerId, ek, ik))
      }
    }

    function zk(kk) {
      return {
        heading: kk.heading,
        pitch: kk.pitch
      }
    }

    function Qk(kk, ek) {
      Number.isFinite(kk.heading) && Number.isFinite(kk.pitch) || (0, fk.k)(ek, kk)
    }

    function vk(kk, ek, ik, Dk, Sk) {
      if (ek) return void(0, fk.n)(ek, Sk);
      const bk = Dk.aimPoint(ik);
      bk && (0, fk.p)(kk, bk, Sk)
    }
    class Ek {
      constructor(kk, ek, ik, Dk) {
        this.settings = kk, this.Ux = ek, this.targets = ik, this.base = void 0, this.base = zk(Dk)
      }
      update(kk, ek, ik) {
        var Dk;
        const fk = this.settings;
        (0, Pk.g)(fk.position, ik.position), vk(fk.position, fk.lookDirection, null !== (Dk = fk.lookAt) && void 0 !== Dk ? Dk : this.Ux.localPlayerId, this.targets, this.base), ek.apply(this.base, ik), ik.fov = nk(fk, this.Ux)
      }
      continueFrom(kk) {
        kk instanceof Ek && (0, fk.k)(kk.base, this.base)
      }
      reset(kk) {
        Qk(this.base, kk)
      }
    }
    class hk {
      constructor(kk, ek, ik, Dk) {
        this.settings = kk, this.Ux = ek, this.targets = ik, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Cw = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = zk(Dk), this.goal = [...Dk.position]
      }
      update(kk, ek, ik) {
        var Dk, fk, Sk;
        const bk = this.settings,
          rk = null !== (Dk = bk.target) && void 0 !== Dk ? Dk : this.Ux.localPlayerId,
          mk = this.targets.feetPosition(rk);
        let Mk = !1;
        mk && (Mk = this.foundFeet && Lk(this.lastFeet, mk) > 32 + .1 * kk, (0, Pk.g)(mk, this.lastFeet), this.foundFeet = !0, this.placeGoal(mk, rk));
        const Kk = null !== (fk = bk.smoothMs) && void 0 !== fk ? fk : 0;
        !this.started || Kk < 1 || Mk ? ((0, Pk.g)(this.goal, this.smoothed), this.Cw.fill(0), this.started = !0) : Uk(this.smoothed, this.Cw, this.goal, Kk, kk), Mk && (this.distance = -1), (0, Pk.g)(this.smoothed, ik.position);
        const xk = !0 === bk.avoidTerrain ? this.pullIn(rk, kk, ik) : 1;
        let Hk = this.goal;
        if ("target" === bk.offsetSpace) Hk = ik.position;
        else if (xk < 1) {
          Hk = this.aimOrigin;
          for (let kk = 0; kk < 3; kk++) Hk[kk] = ik.position[kk] + (this.goal[kk] - this.smoothed[kk]) * xk
        }
        vk(Hk, bk.lookDirection, null !== (Sk = bk.lookAt) && void 0 !== Sk ? Sk : rk, this.targets, this.base), ek.apply(this.base, ik), ik.fov = nk(bk, this.Ux)
      }
      continueFrom(kk) {
        kk instanceof hk && (0, Dk.t)(kk.settings.target, this.settings.target) && ((0, fk.k)(kk.base, this.base), (0, Pk.g)(kk.goal, this.goal), (0, Pk.g)(kk.lastFeet, this.lastFeet), this.foundFeet = kk.foundFeet, (0, Pk.g)(kk.smoothed, this.smoothed), (0, Pk.g)(kk.Cw, this.Cw), this.started = kk.started, !0 === kk.settings.avoidTerrain && (this.distance = kk.distance))
      }
      reset(kk) {
        Qk(this.base, kk), this.Cw.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(kk, ek, ik) {
        const Dk = this.targets.aimPoint(kk);
        if (!Dk) return 1;
        const fk = ik.position,
          Sk = Lk(Dk, fk);
        if (!(Sk > 0)) return 1;
        const bk = this.toCamera;
        for (let Pk = 0; Pk < 3; Pk++) bk[Pk] = (fk[Pk] - Dk[Pk]) / Sk;
        const rk = function(kk, ek, ik) {
          return kk < 0 || ek < kk ? ek : ek + (kk - ek) * Math.exp(-ik / 150)
        }(this.distance, function(kk, ek, ik, Dk) {
          const fk = kk.raycastTerrain(ek, ik, Dk);
          return null !== fk && Number.isFinite(fk) ? Math.min(Dk, Math.max(0, fk - .2)) : Dk
        }(this.Ux, Dk, bk, Sk), ek);
        if (Sk - rk < .001) return this.distance = -1, 1;
        this.distance = rk;
        for (let Pk = 0; Pk < 3; Pk++) fk[Pk] = Dk[Pk] + bk[Pk] * rk;
        return rk / Sk
      }
      placeGoal(kk, ek) {
        const ik = this.settings.offset;
        let Dk = ik[0],
          fk = ik[2];
        if ("target" === this.settings.offsetSpace) {
          const kk = this.targets.heading(ek),
            Sk = Math.cos(kk),
            bk = Math.sin(kk);
          Dk = ik[0] * Sk + ik[2] * bk, fk = -ik[0] * bk + ik[2] * Sk
        }
        this.goal[0] = kk[0] + Dk, this.goal[1] = kk[1] + ik[1], this.goal[2] = kk[2] + fk
      }
    }
    class ak {
      constructor(kk, ek, ik, Dk) {
        var fk, Sk;
        this.settings = kk, this.Ux = ek, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = kk.keyframes.length > 0 ? new qk(kk.keyframes, null === (fk = kk.smooth) || void 0 === fk || fk, null !== (Sk = kk.loop) && void 0 !== Sk && Sk) : null, this.base = (0, Pk.c)(Dk, (0, Pk.k)()), this.resolveTarget = kk => ik.aimPoint(kk)
      }
      update(kk, ek, ik) {
        this.elapsedMs += kk;
        const Dk = nk(this.settings, this.Ux);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Dk, this.base) : this.base.fov = Dk, (0, Pk.g)(this.base.position, ik.position), ik.fov = this.base.fov, ek.apply(this.base, ik)
      }
      continueFrom(kk) {
        kk instanceof ak && (0, Dk.t)(kk.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = kk.elapsedMs, (0, Pk.c)(kk.base, this.base))
      }
      reset(kk) {
        Qk(this.base, kk), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function Wk(kk, ek) {
      return (0, Dk.w)(kk, ek)
    }
    class tk {
      constructor(kk, ek, ik) {
        var Dk;
        this.settings = kk, this.Ux = ek, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const fk = null !== ik && ik.settings.mode === kk.mode,
          Sk = fk ? ik.pose : ek.getDefaultPose();
        this.pose = (0, Pk.c)(Sk, (0, Pk.k)()), this.lastGoodPose = (0, Pk.c)(fk ? ik.lastGoodPose : Sk, (0, Pk.k)()), this.look = new wk(kk.playerLook), this.targets = null !== (Dk = null === ik || void 0 === ik ? void 0 : ik.targets) && void 0 !== Dk ? Dk : new Ik(ek);
        const bk = (0, Pk.c)(Sk, (0, Pk.k)());
        fk && ik.look.unapply(bk, bk), this.mode = function(kk, ek, ik, Dk) {
          switch (kk.mode) {
            case "fixed":
              return new Ek(kk, ek, ik, Dk);
            case "follow":
              return new hk(kk, ek, ik, Dk);
            case "path":
              return new ak(kk, ek, ik, Dk);
            case "frame":
              return new Hk(kk, ek, ik, Dk)
          }
        }(kk, ek, this.targets, bk), fk && (this.look.continueFrom(ik.look), this.mode.continueFrom(ik.mode))
      }
      update(kk, ek) {
        return this.look.update(kk, ek), this.mode.update(kk, this.look, this.pose), (0, Pk.l)(this.pose) ? (0, Pk.c)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, Pk.c)(this.lastGoodPose, this.pose), this.mode.reset((0, Pk.l)(this.lastGoodPose) ? this.lastGoodPose : this.Ux.getDefaultPose())), this.pose
      }
    }

    function Xk(kk) {
      return [0, 0, kk[2], kk[3]]
    }
    class Bk {
      constructor(kk) {
        this.Ux = kk, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new rk, this.shot = null, this.blend = null, this.mixed = (0, Pk.k)(), this.output = (0, Pk.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(kk) {
        const ek = (0, mk.d)(kk);
        if ((0, Dk.t)(ek, this.pending ? this.pending.settings : this.settings)) return;
        const ik = Wk(this.settings, ek);
        if (void 0 !== ek.transition && !ik) return this.pending = {
          settings: ek,
          shot: "default" === ek.mode ? null : new tk(ek, this.Ux, null)
        }, void this.fade.fadeOut(ek.transition);
        const fk = null !== this.pending;
        this.pending = null, !fk && ik || this.fade.fadeIn(Dk.m.minTransitionFadeMs), this.show(ek, !1)
      }
      show(kk, ek) {
        var ik, fk;
        if ((0, Dk.t)(kk, this.settings)) return;
        const bk = !ek && Wk(this.settings, kk);
        this.settings = kk;
        const rk = null !== this.blend && this.blend.elapsedMs > 0,
          mk = (0, Pk.c)(this.hasOutput ? this.output : this.Ux.getDefaultPose(), (0, Pk.k)());
        if (this.shot = "default" === kk.mode ? null : new tk(kk, this.Ux, ek ? null : this.shot), bk) return;
        const Mk = ek || !this.shot && !this.hasOutput ? 0 : null !== (ik = kk.blendInMs) && void 0 !== ik ? ik : 0;
        if (Mk <= 0) return void(this.blend = null);
        const Kk = (0, Sk.j)(null !== (fk = kk.blendEasing) && void 0 !== fk ? fk : "easeInOut");
        this.blend = {
          from: mk,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Mk,
          easing: rk ? Xk(Kk) : Kk
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
      update(kk, ek) {
        const ik = Number.isFinite(kk) && kk > 0 ? kk : 0;
        if (this.fade.advance(ik) && null !== this.pending) {
          const {
            settings: kk
          } = this.pending;
          this.pending = null, this.show(kk, !0)
        }
        this.loadingPositions.length = 0;
        const Dk = this.pending;
        if (null !== Dk && void 0 !== Dk && Dk.shot) {
          const kk = "path" === Dk.settings.mode ? 0 : ik;
          this.noteLoadingPosition(Dk.shot.update(kk, Pk.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const bk = this.shot ? this.shot.update(ik, ek) : this.Ux.getDefaultPose();
        this.shot && this.noteLoadingPosition(bk.position);
        const rk = this.blend;
        if (!rk) return this.writeOutput(bk);
        rk.elapsedMs += ik;
        const mk = Math.min(1, rk.elapsedMs / rk.durationMs);
        if (rk.headingDelta = Number.isFinite(rk.headingDelta) ? (0, fk.w)(rk.headingDelta, bk.heading - rk.from.heading) : (0, fk.s)(rk.from.heading, bk.heading), (0, Pk.o)(rk.from, bk, rk.headingDelta, (0, Sk.i)(mk, rk.easing), this.mixed), mk >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else rk.fromScripted && this.noteLoadingPosition(rk.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(kk) {
        if (kk.every(Number.isFinite)) {
          const ek = this.loadingPositions;
          ek.push((0, Pk.g)(kk, this.loadingSlots[ek.length]))
        }
      }
      writeOutput(kk) {
        const ek = this.output;
        (0, Pk.l)(kk) ? (0, Pk.c)(kk, ek) : this.hasOutput || (0, Pk.c)(this.Ux.getDefaultPose(), ek), ek.pitch = (0, fk.h)(ek.pitch);
        const ik = this.Ux.getDefaultFov(),
          Sk = Number.isFinite(ik) && ik > 0 && ik < 180,
          bk = Sk ? Math.min(Dk.m.minFov, ik) : Dk.m.minFov,
          rk = Sk ? Math.max(Dk.m.maxFov, ik) : Dk.m.maxFov;
        return ek.fov = Number.isFinite(ek.fov) ? Math.min(rk, Math.max(bk, ek.fov)) : rk, this.hasOutput = !0, ek
      }
    }
  },
  38745: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      c: () => rk,
      g: () => bk,
      k: () => Sk,
      l: () => mk,
      m: () => Pk,
      o: () => Mk
    });
    var Dk = ik(38752);
    const fk = {
      SF: 0,
      mF: 0
    };

    function Sk() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function bk(kk, ek) {
      return ek[0] = kk[0], ek[1] = kk[1], ek[2] = kk[2], ek
    }

    function rk(kk, ek) {
      return bk(kk.position, ek.position), ek.heading = kk.heading, ek.pitch = kk.pitch, ek.fov = kk.fov, ek
    }

    function Pk(kk, ek) {
      return Array.isArray(kk) && kk.length === ek && kk.every(Number.isFinite)
    }

    function mk(kk) {
      return Pk(kk.position, 3) && Number.isFinite(kk.heading) && Number.isFinite(kk.pitch) && Number.isFinite(kk.fov)
    }

    function Mk(kk, ek, ik, fk, Sk) {
      for (let Dk = 0; Dk < 3; Dk++) Sk.position[Dk] = kk.position[Dk] + (ek.position[Dk] - kk.position[Dk]) * fk;
      return Sk.heading = (0, Dk.q)(kk.heading + ik * fk), Sk.pitch = kk.pitch + (ek.pitch - kk.pitch) * fk, Sk.fov = kk.fov + (ek.fov - kk.fov) * fk, Sk
    }
  },
  38764: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Ak,
      e: () => xk
    });
    var Dk = ik(38760),
      fk = ik(38745);
    const Sk = Dk.j,
      bk = Dk.p;

    function rk(kk, ek, ik, Dk) {
      return Number.isFinite(kk) ? Math.min(ik, Math.max(ek, kk)) : Dk
    }

    function Pk(kk, ek, ik) {
      return void 0 !== kk && Number.isFinite(kk) ? Math.min(ik, Math.max(ek, kk)) : void 0
    }

    function mk(kk) {
      const ek = Dk.m.maxCoordinate;
      return [Math.min(ek, Math.max(-ek, kk[0])), Math.min(ek, Math.max(-ek, kk[1])), Math.min(ek, Math.max(-ek, kk[2]))]
    }

    function Mk(kk) {
      return "string" === typeof kk ? kk : (0, fk.m)(kk, 3) ? mk(kk) : void 0
    }
    const Kk = new RegExp(Dk.r);

    function xk(kk) {
      return "string" === typeof kk && Kk.test(kk)
    }

    function nk(kk) {
      const ek = [];
      if (!Array.isArray(kk)) return ek;
      for (const ik of kk.slice(0, Dk.m.maxFrameTargets)) {
        const kk = Mk(ik);
        void 0 === kk || "string" === typeof kk && !xk(kk) || ek.push(kk)
      }
      return ek
    }

    function Uk(kk) {
      if (!(0, fk.m)(kk, 3)) return;
      const ek = Math.max(Math.abs(kk[0]), Math.abs(kk[1]), Math.abs(kk[2])),
        ik = Math.hypot(kk[0] / ek, kk[1] / ek, kk[2] / ek);
      return 0 === ek || ek * ik < Dk.m.minDirectionLength ? void 0 : [kk[0] / ek / ik, kk[1] / ek / ik, kk[2] / ek / ik]
    }

    function Hk(kk) {
      if (void 0 !== kk) return "string" === typeof kk ? Sk.includes(kk) ? kk : void 0 : (0, fk.m)(kk, 4) ? [rk(kk[0], 0, 1, 0), rk(kk[1], Dk.m.minEasingY, Dk.m.maxEasingY, 0), rk(kk[2], 0, 1, 1), rk(kk[3], Dk.m.minEasingY, Dk.m.maxEasingY, 1)] : "linear"
    }

    function wk(kk) {
      if (kk) return {
        maxYaw: rk(kk.maxYaw, 0, Dk.m.maxPlayerLook, 0),
        maxPitch: rk(kk.maxPitch, 0, Dk.m.maxPlayerLook, 0),
        returnMs: Pk(kk.returnMs, 0, Dk.m.maxReturnMs)
      }
    }
    const lk = new RegExp(Dk.d);

    function pk(kk) {
      var ek;
      if ("object" !== typeof kk || null === kk) return;
      const ik = Dk.m.maxTransitionMs,
        fk = Dk.m.minTransitionFadeMs;
      return {
        colour: "string" === typeof kk.colour && lk.test(kk.colour) ? kk.colour : Dk.g,
        outMs: rk(kk.outMs, fk, ik, fk),
        holdMs: rk(null !== (ek = kk.holdMs) && void 0 !== ek ? ek : 0, 0, ik, 0),
        inMs: rk(kk.inMs, fk, ik, fk)
      }
    }

    function yk(kk) {
      return !0 === kk || void 0
    }

    function Yk(kk) {
      if ("object" !== typeof kk || null === kk) return !1;
      const ek = kk.lookAt;
      return Number.isFinite(kk.timeMs) && (0, fk.m)(kk.position, 3) && (void 0 === ek || "string" === typeof ek || (0, fk.m)(ek, 3))
    }

    function Lk(kk) {
      return {
        ...kk,
        timeMs: rk(kk.timeMs, 0, Dk.m.maxPathMs, 0),
        position: mk(kk.position),
        lookAt: Mk(kk.lookAt),
        lookDirection: Uk(kk.lookDirection),
        fov: Pk(kk.fov, Dk.m.minFov, Dk.m.maxFov),
        easing: Hk(kk.easing)
      }
    }

    function Ck(kk) {
      const ek = [];
      if (!Array.isArray(kk)) return ek;
      for (const ik of kk.slice(0, Dk.m.maxKeyframes)) {
        if (!Yk(ik)) continue;
        const kk = Lk(ik);
        (0 === ek.length || kk.timeMs > ek[ek.length - 1].timeMs) && ek.push(kk)
      }
      return ek
    }

    function Ak(kk) {
      if ("object" !== typeof kk || null === kk) return {
        mode: "default"
      };
      const ek = {
          blendInMs: Pk(kk.blendInMs, 0, Dk.m.maxBlendInMs),
          blendEasing: Hk(kk.blendEasing),
          transition: pk(kk.transition),
          letterbox: yk(kk.letterbox),
          hideHud: yk(kk.hideHud)
        },
        ik = {
          mode: "default",
          ...ek
        };
      if ("default" === kk.mode || "fixed" === kk.mode && !(0, fk.m)(kk.position, 3)) return ik;
      const Sk = {
        ...ek,
        fov: Pk(kk.fov, Dk.m.minFov, Dk.m.maxFov),
        playerFacing: (Kk = kk.playerFacing, bk.includes(Kk) ? Kk : void 0),
        playerLook: wk(kk.playerLook)
      };
      var Kk, xk;
      switch (kk.mode) {
        case "fixed":
          return {
            ...kk, ...Sk, position: mk(kk.position), lookAt: Mk(kk.lookAt), lookDirection: Uk(kk.lookDirection)
          };
        case "follow":
          return {
            ...kk, ...Sk, target: "string" === typeof kk.target ? kk.target : void 0, lookAt: Mk(kk.lookAt), offset: (xk = kk.offset, Array.isArray(xk) ? [rk(xk[0], -Dk.m.maxOffset, Dk.m.maxOffset, 0), rk(xk[1], -Dk.m.maxOffset, Dk.m.maxOffset, 0), rk(xk[2], -Dk.m.maxOffset, Dk.m.maxOffset, 0)] : [0, 0, 0]), lookDirection: Uk(kk.lookDirection), smoothMs: Pk(kk.smoothMs, 0, Dk.m.maxSmoothMs)
          };
        case "path":
          return {
            ...kk, ...Sk, keyframes: Ck(kk.keyframes)
          };
        case "frame":
          return {
            ...kk, ...Sk, targets: nk(kk.targets), viewHeading: Pk(kk.viewHeading, -Dk.m.maxFrameHeading, Dk.m.maxFrameHeading), viewElevation: Pk(kk.viewElevation, 0, Dk.m.maxFrameElevation), padding: Pk(kk.padding, 0, Dk.m.maxFrameDistance), closestDistance: Pk(kk.closestDistance, 0, Dk.m.maxFrameDistance), furthestDistance: Pk(kk.furthestDistance, 0, Dk.m.maxFrameDistance), smoothMs: Pk(kk.smoothMs, 0, Dk.m.maxSmoothMs)
          };
        default:
          return ik
      }
    }
  },
  38245: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk
    });
    var Dk = ik(1207);

    function fk(kk) {
      const ek = /(\d*\.?\d+)px/.exec(kk);
      return ek ? Number(ek[1]) : null
    }

    function Sk(kk) {
      return kk.split(/[\s,]+/).pop()
    }
    let bk = !1;
    const rk = {
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
      drawText: function(kk, ek, Dk, rk, Pk, mk) {
        if (Pk <= 0 || mk <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Mk,
          fontVariant: Kk,
          fontWeight: xk,
          fontSize: nk,
          font: Uk
        } = this, Hk = [Mk, Kk, xk, `${nk}px`, Uk].filter(Boolean).join(" "), wk = [
          [xk, `${nk}px`, Sk(Uk)].filter(Boolean).join(" "), `${nk}px sans-serif`
        ], lk = kk.font, pk = function(kk, ek, ik) {
          for (const Dk of ek) {
            kk.font = Dk;
            const ek = fk(kk.font),
              bk = Sk(Dk);
            if (null !== ek && Math.abs(ek - ik) <= .5 && kk.font.toLowerCase().includes(bk.toLowerCase())) return Dk
          }
          return null
        }(kk, [Hk, ...wk], nk);
        pk !== Hk && function(kk, ek, Dk) {
          bk || (bk = !0, Promise.resolve().then((() => ik(1046))).then((ik => {
            let {
              cH: fk
            } = ik;
            fk(new Error("A canvas didn't take canvasTxt's font"), {
              font: kk,
              fU: ek,
              drawnWith: null !== Dk && void 0 !== Dk ? Dk : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Hk, lk, pk);
        const yk = fk(kk.font);
        if (null === pk && null !== yk && yk > 0) {
          const ik = nk / yk;
          kk.save();
          try {
            return kk.scale(ik, ik), {
              height: this.drawLines(kk, ek, Dk / ik, rk / ik, Pk / ik, mk / ik, yk).height * ik
            }
          } finally {
            kk.restore()
          }
        }
        return this.drawLines(kk, ek, Dk, rk, Pk, mk, nk)
      },
      drawLines: function(kk, ek, ik, fk, Sk, bk, rk) {
        const Pk = ik + Sk,
          mk = fk + bk;
        let Mk, Kk = fk + bk / 2 + rk / 2;
        "right" === this.align ? (Mk = Pk, kk.textAlign = "right") : "left" === this.align ? (Mk = ik, kk.textAlign = "left") : (Mk = ik + Sk / 2, kk.textAlign = "center");
        for (const Dk of ek) {
          kk.measureText(Dk).width >= Sk && (ek = ek.replace(Dk, ""))
        }
        ek = (0, Dk.T)(ek);
        const xk = [],
          nk = ek.split("\n"),
          Uk = this.justify ? kk.measureText("\u200a").width : 0;
        nk.forEach((ek => {
          let ik = kk.measureText(ek).width;
          if (ik <= Sk) xk.push(ek);
          else {
            let Dk = ek;
            const fk = Sk;
            let bk, rk, Pk;
            for (ik = kk.measureText(Dk).width; ik > fk;) {
              for (bk = 0, rk = 0, Pk = ""; rk < fk;) bk++, Pk = Dk.substr(0, bk), rk = kk.measureText(Pk).width;
              bk--, Pk = Pk.substr(0, bk);
              const ek = bk;
              if (" " !== Dk.substr(bk, 1)) {
                for (;
                  " " !== Dk.substr(bk, 1) && 0 !== bk;) bk--;
                0 === bk && (bk = ek), Pk = Dk.substr(0, bk)
              }
              Pk = this.justify ? this.justifyLine(kk, Pk, Uk, "\u200a", Sk) : Pk, Dk = Dk.substr(bk), ik = kk.measureText(Dk).width, xk.push(Pk)
            }
            ik > 0 && xk.push(Dk)
          }
        }));
        const Hk = this.lineHeight ? this.lineHeight : this.getTextHeight(kk, ek),
          wk = Hk * (xk.length - 1),
          lk = wk / 2;
        let pk = fk;
        "top" === this.vAlign ? Kk = fk + rk : "bottom" === this.vAlign ? (Kk = mk - wk, pk = mk) : (pk = fk + bk / 2, Kk -= lk), xk.forEach((ek => {
          ek = ek.trim(), kk.fillText(ek, Mk, Kk), Kk += Hk
        })), this.debug && (kk.lineWidth = 3, kk.strokeStyle = "#00909e", kk.strokeRect(ik, fk, Sk, bk), kk.lineWidth = 2, kk.strokeStyle = "#f6d743", kk.beginPath(), kk.moveTo(Mk, fk), kk.lineTo(Mk, mk), kk.stroke(), kk.strokeStyle = "#ff6363", kk.beginPath(), kk.moveTo(ik, pk), kk.lineTo(Pk, pk), kk.stroke());
        return {
          height: wk + Hk
        }
      },
      getTextHeight: function(kk, ek) {
        const ik = kk.textBaseline;
        kk.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Dk
        } = kk.measureText(ek);
        return kk.textBaseline = ik, Dk
      },
      justifyLine: function(kk, ek, ik, Dk, fk) {
        const Sk = ek.trim(),
          bk = kk.measureText(Sk).width,
          rk = Sk.split(/\s+/).length - 1,
          Pk = Math.floor((fk - bk) / ik);
        if (rk <= 0 || Pk <= 0) return Sk;
        const mk = Math.floor(Pk / rk);
        let Mk = Pk - rk * mk,
          Kk = [];
        for (let xk = 0; xk < mk; xk++) Kk.push(Dk);
        Kk = Kk.join("");
        return Sk.replace(/\s+/g, (kk => {
          const ek = Mk > 0 ? Kk + Dk : Kk;
          return Mk--, kk + ek
        }))
      }
    }
  },
  38707: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return ek.set(kk), ek
    }
    ik.d(ek, {
      c: () => Dk
    })
  },
  38254: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Hk,
      h: () => Uk,
      l: () => xk,
      p: () => Mk,
      q: () => Kk
    });
    var Dk = ik(4189),
      fk = ik(314);
    const Sk = 1024,
      bk = 1536,
      rk = 2 * Dk.n + 1,
      Pk = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      mk = 1.5;

    function Mk(kk, ek, ik) {
      if ("string" !== typeof kk) return ek;
      try {
        const ik = JSON.parse(kk);
        return ik && "object" === typeof ik ? ik : ek
      } catch (Dk) {
        return void 0 !== ik && console.error(`Couldn't parse ${ik}`, Dk), ek
      }
    }

    function Kk(kk) {
      return Mk(kk, null, "a leaderboard's rows")
    }

    function xk(kk, ek) {
      var ik, Dk;
      return null !== ek && void 0 !== ek ? ek : {
        status: null !== (ik = kk.status) && void 0 !== ik ? ik : "loading",
        entries: null !== (Dk = kk.entries) && void 0 !== Dk ? Dk : []
      }
    }

    function nk(kk, ek) {
      return "number" === typeof kk && Number.isFinite(kk) && kk > 0 ? kk : ek
    }

    function Uk(kk, ek) {
      const ik = nk(kk.size, 1);
      let Dk = nk(kk.width, nk(2.5 * ik, 2.5)),
        fk = nk(kk.height, nk(3.75 * ik, 3.75));
      Number.isFinite(Sk * fk / Dk) && Number.isFinite(bk * Dk / fk) || (Dk = 2.5, fk = 3.75);
      const rk = fk / Dk,
        Pk = Math.max(1, Math.min(Sk, ek / rk));
      return {
        width: Dk,
        height: fk,
        layoutWidth: Math.max(Sk, bk / rk),
        layoutHeight: Math.max(bk, Sk * rk),
        pixelWidth: Math.round(Pk),
        pixelHeight: Math.round(Math.max(1, Math.min(ek, Pk * rk)))
      }
    }

    function Hk(kk, ek, ik, bk, Mk, Kk) {
      kk.setTransform(1, 0, 0, 1, 0, 0), kk.fillStyle = fk.D.defaultNameTagBackground, kk.fillRect(0, 0, ek, ik), kk.scale(ek / bk.layoutWidth, ik / bk.layoutHeight), kk.translate((bk.layoutWidth - Sk) / 2, 0),
        function(kk, ek, ik, Sk) {
          var bk, Mk, Kk, xk;
          const {
            top: nk,
            around: Uk,
            showPlayerText: Hk,
            localPlayerDbId: pk
          } = ik, {
            whiteUiText: yk,
            grayUiText: Yk,
            yellowUiText: Lk
          } = fk.D;
          kk.textBaseline = "middle";
          const Ck = function(ek, ik, Dk, fk, Sk, bk) {
              let rk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              kk.font = `bold ${fk}px 'Jetbrains Mono', monospace`, kk.fillStyle = Sk, kk.textAlign = rk;
              let Pk = ek.replace(/[\r\n\t]/g, " ");
              if (kk.measureText(Pk).width > bk) {
                for (; Pk.length > 0 && kk.measureText(`${Pk}\u2026`).width > bk;) Pk = Pk.slice(0, -1);
                Pk += "\u2026"
              }
              kk.fillText(Pk, ik, Dk)
            },
            Ak = ek => {
              kk.fillStyle = yk, kk.globalAlpha = .15, kk.fillRect(24, ek, 976, 2), kk.globalAlpha = 1
            },
            jk = null === pk ? null : (0, fk._b)(pk),
            sk = kk => null !== jk && kk.playerHash === jk,
            dk = wk(nk.entries, Dk.r),
            Vk = "ready" === nk.status && dk.length > 0,
            Fk = null === Uk ? [] : wk(Uk.entries, rk),
            uk = dk.some(sk),
            qk = null === Uk ? null : function(kk) {
              const ek = kk;
              if (!ek || !Number.isFinite(ek.rank) || !Number.isFinite(ek.tied) || !Number.isFinite(ek.total)) return null;
              return ek
            }(Uk.standing),
            Ik = Fk.find(sk),
            zk = dk.find(sk),
            Qk = null === qk || void 0 === Ik ? null : {
              value: Ik.value,
              rank: qk.rank
            },
            vk = lk(dk, void 0 === zk || zk.value === (null === Qk || void 0 === Qk ? void 0 : Qk.value) ? Qk : null),
            Ek = lk(Fk, Qk),
            hk = (kk, ek) => {
              const ik = kk.findIndex(sk);
              return ik >= 0 ? ek[ik] : null
            },
            ak = null !== (bk = null !== (Mk = null === qk || void 0 === qk ? void 0 : qk.rank) && void 0 !== Mk ? Mk : hk(Fk, Ek)) && void 0 !== bk ? bk : hk(dk, vk);
          kk.font = "bold 34px 'Jetbrains Mono', monospace";
          const Wk = [...Vk ? vk : [], ...uk ? [] : Ek],
            tk = Math.min(280, Math.max(0, ...Wk.map((ek => kk.measureText(Pk.format(ek)).width)))),
            Xk = tk <= 80,
            Bk = Xk ? 80 : 32 + tk,
            ck = Xk ? 148 : Bk + 28,
            Tk = 660 - ck;
          Ck(`TOP ${Dk.r}  /  ALL TIME`, 24, 52, 28, Yk, 976), Ck(Hk ? String(null !== (Kk = ek.title) && void 0 !== Kk ? Kk : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, yk, 976), Ck("RANK", 32, 174, 28, Yk, ck - 40), Ck("PLAYER", ck, 174, 28, Yk, Tk), Ck(Hk ? String(null !== (xk = ek.scoreLabel) && void 0 !== xk ? xk : "Score").slice(0, 24) : "Score", 992, 174, 28, Yk, 304, "right"), Ak(202);
          const Zk = (Sk - 232) / (Dk.r + mk + rk),
            Ok = 208 + Dk.r * Zk,
            gk = Ok + mk * Zk,
            Gk = (ek, ik, Dk, fk) => {
              const Sk = sk(ek);
              kk.fillStyle = Sk ? Lk : yk, kk.globalAlpha = Sk ? .15 : fk ? .035 : 0, kk.fillRect(24, Dk - Zk / 2 + 1, 976, Zk - 2), kk.globalAlpha = 1;
              const bk = Sk ? Lk : yk;
              Ck(Pk.format(ik), Bk, Dk, 34, bk, Xk ? 80 : tk, Xk ? "center" : "right"), Ck(Hk ? String(ek.name).slice(0, 64) : "Player", ck, Dk, 34, bk, Tk);
              const rk = Pk.format(ek.value);
              Ck(kk.measureText(rk).width > 304 ? ek.value.toExponential(6) : rk, 992, Dk, 34, bk, 304, "right")
            };
          if (Vk)
            for (const [Dk, fk] of dk.entries()) Gk(fk, vk[Dk], 208 + (Dk + .5) * Zk, Dk % 2 === 0);
          else {
            const kk = "error" === nk.status,
              ek = kk ? "Couldn't load leaderboard" : "ready" === nk.status ? "No scores yet" : "Loading leaderboard\u2026",
              ik = kk ? "Trying again shortly" : "ready" === nk.status ? "Be the first on the board!" : "Fetching the top players",
              Dk = (208 + Ok) / 2;
            Ck(ek, 512, Dk - 28, 40, kk ? fk.D.redUiText : yk, 960, "center"), Ck(ik, 512, Dk + 27, 30, Yk, 960, "center")
          }
          const Nk = Ok + mk * Zk / 2;
          if (null === ak) Ak(Nk);
          else {
            const ek = null === qk ? 0 : qk.tied - 1,
              ik = `YOUR RANK #${Pk.format(ak)}${null===qk?"":` of ${Pk.format(qk.total)}`}`;
            kk.font = "bold 36px 'Jetbrains Mono', monospace";
            const Dk = Math.max(20, Math.min(36, Math.floor(34560 / kk.measureText(ik).width)));
            Ck(ik, 512, Nk - (ek > 0 ? 15 : 0), Dk, Lk, 960, "center"), ek > 0 && Ck(`Tied with ${Pk.format(ek)} other${1===ek?"":"s"}`, 512, Nk + 24, 24, Yk, 960, "center")
          }
          if (null === Uk) return;
          const Rk = gk + rk * Zk / 2;
          if (uk) Ck(`You're in the top ${Dk.r}!`, 512, Rk, 40, Lk, 960, "center");
          else if (0 === Fk.length) Ck("You're not on this board yet", 512, Rk, 34, Yk, 960, "center");
          else
            for (const [Dk, fk] of Fk.entries()) Gk(fk, Ek[Dk], gk + (Dk + .5) * Zk, Dk % 2 === 0)
        }(kk, Mk, Kk, bk.layoutHeight)
    }

    function wk(kk, ek) {
      return Array.isArray(kk) ? kk.slice(0, ek).filter((kk => kk && Number.isFinite(kk.rank) && Number.isFinite(kk.value))) : []
    }

    function lk(kk, ek) {
      const ik = [];
      let Dk = !1;
      return kk.forEach(((fk, Sk) => {
        if (null !== ek && fk.value === ek.value) return void ik.push(ek.rank);
        const bk = Sk > 0 && fk.value === kk[Sk - 1].value;
        bk || (Dk = 0 === Sk && 1 !== fk.rank), ik.push(bk && !Dk ? ik[Sk - 1] : fk.rank)
      })), ik
    }
  },
  38441: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      i: () => Sk
    });
    const Dk = 32;

    function fk(kk) {
      return Array.from(kk).length
    }

    function Sk(kk) {
      const ek = [""];
      let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        fk = "";
      const Sk = () => {
        ek.push(""), ik = 0, fk = ""
      };
      for (const bk of kk.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(bk)) Sk();
        else if (/^\s+$/.test(bk)) fk += bk;
      else if (bk.length > 0) {
        const kk = Array.from(bk);
        ik > 0 && ik + fk.length + kk.length > Dk && Sk(), ek[ek.length - 1] += fk, ik += fk.length, fk = "";
        for (const fk of kk) ik >= Dk && Sk(), ek[ek.length - 1] += fk, ik++
      }
      return ek[ek.length - 1] += fk, ek
    }
  },
  38704: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    var Dk = ik(36175),
      fk = ik.n(Dk);
    const Sk = [1, 1, 1];

    function bk(kk) {
      if (!kk) return [...Sk];
      try {
        const [ek, ik, Dk] = fk()(kk).rgb().array();
        return [ek / 255, ik / 255, Dk / 255]
      } catch (ek) {
        return console.warn(`Invalid groundArrowPath colour "${kk}":`, ek), [...Sk]
      }
    }
  },
  38793: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      g: () => mk,
      k: () => Pk
    });
    var Dk = ik(689),
      fk = ik(2727);
    const Sk = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      bk = 512;

    function rk(kk) {
      var ek;
      const ik = Math.min(screen.width, screen.height) * (null !== (ek = (0, Dk.e)()) && void 0 !== ek ? ek : (0, fk.o)());
      return Math.max(window.innerHeight * (0, fk.o)(), ik) / (0, fk.s)(kk)
    }

    function Pk(kk, ek, ik) {
      return ek / (2 * Math.tan(ik / 2)) > bk ? kk : mk(kk)
    }

    function mk(kk) {
      return kk.map((kk => kk.replace(Sk, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  33615: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk,
      f: () => rk,
      i: () => bk,
      m: () => fk,
      p: () => Dk
    });
    const Dk = {
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
      fk = "/textures/dayNight/sun.png",
      Sk = "/textures/dayNight/moon.png",
      bk = "/textures/dayNight/stars",
      rk = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38760: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Mk,
      g: () => Kk,
      j: () => Dk,
      m: () => Pk,
      p: () => fk,
      r: () => mk,
      t: () => rk,
      w: () => bk
    });
    const Dk = ["linear", "easeIn", "easeOut", "easeInOut"],
      fk = ["movement", "camera", "cursor"],
      Sk = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function bk(kk, ek) {
      return rk(kk, ek, Sk)
    }

    function rk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (kk === ek || Number.isNaN(kk) && Number.isNaN(ek)) return !0;
      if ("object" !== typeof kk || "object" !== typeof ek || null === kk || null === ek || Array.isArray(kk) !== Array.isArray(ek)) return !1;
      const Dk = kk,
        fk = ek;
      for (const Sk of new Set([...Object.keys(Dk), ...Object.keys(fk)]))
        if (!ik.includes(Sk) && !rk(Dk[Sk], fk[Sk])) return !1;
      return !0
    }
    const Pk = {
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
      mk = "^-[1-9][0-9]*$",
      Mk = "^#[0-9a-fA-F]{6}$",
      Kk = "#000000"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);