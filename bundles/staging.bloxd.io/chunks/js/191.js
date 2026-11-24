export const id = 191;
export const ids = [191];
export const modules = {
  39134: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk
    });
    class Xk {
      constructor(kk, Fk) {
        this.read = kk, this.apply = Fk, this.release = null
      }
      turn(kk, Fk) {
        const Ik = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: Fk,
          forcedCameraDirection: [kk[0], kk[1], kk[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), Fk + 100),
          transitionMs: Ik
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
  38632: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik,
      g: () => Tk
    });
    const Xk = new Map;

    function Tk(kk, Fk) {
      Xk.set(kk, Fk)
    }

    function ik(kk) {
      return kk ? Xk.get(kk) : void 0
    }
  },
  39603: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk
    });
    var Xk = Ik(38204);

    function Tk(kk, Fk, Ik) {
      var Tk, ik, yk, lk, ak, qk, Lk;
      const tk = (0, Xk.b)(kk, Fk, Ik[0], Ik[1], Ik[2]),
        Zk = tk ? null !== (Tk = tk.textCell) && void 0 !== Tk ? Tk : tk.rect.anchor : Ik,
        jk = Fk(Zk[0], Zk[1], Zk[2]);
      return {
        pos: [Ik[0], Ik[1], Ik[2]],
        noticeboardSpan: tk && {
          width: tk.rect.width,
          height: tk.rect.height
        },
        text: null !== (ik = null === jk || void 0 === jk || null === (yk = jk.persisted) || void 0 === yk || null === (lk = yk.shared) || void 0 === lk ? void 0 : lk.text) && void 0 !== ik ? ik : "",
        textSize: null !== (ak = null === jk || void 0 === jk || null === (qk = jk.persisted) || void 0 === qk || null === (Lk = qk.shared) || void 0 === Lk ? void 0 : Lk.textSize) && void 0 !== ak ? ak : null
      }
    }
  },
  38501: (kk, Fk, Ik) => {
    function Xk(kk) {
      switch (kk.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    Ik.d(Fk, {
      d: () => Tk,
      e: () => ik,
      g: () => Xk
    });
    const Tk = 4,
      ik = 3
  },
  39162: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      i: () => ik
    });
    var Xk = Ik(337);
    const Tk = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class ik {
      constructor(kk) {
        this.importGame = kk, this.loads = new Map, this.loaded = new Map
      }
      load(kk) {
        const Fk = (0, Xk.dc)(kk);
        if (!Tk.has(Fk)) return Promise.resolve(void 0);
        let Ik = this.loads.get(Fk);
        return Ik || (Ik = this.importGame(Fk).then((kk => {
          const Ik = kk.default;
          if ("function" !== typeof Ik) throw new Error(`${Fk}'s client code has no default-exported factory`);
          return this.loaded.set(Fk, Ik), Ik
        })).catch((kk => {
          throw this.loads.delete(Fk), kk
        })), this.loads.set(Fk, Ik)), Ik
      }
      loadedFactory(kk) {
        const Fk = (0, Xk.dc)(kk);
        if (!Tk.has(Fk)) return;
        const Ik = this.loaded.get(Fk);
        if (!Ik) throw new Error(`${Fk}'s client code started before it loaded`);
        return Ik
      }
    }
  },
  39610: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk
    });
    var Xk = Ik(9278),
      Tk = Ik(34193),
      ik = Ik(3229);

    function yk(kk) {
      if (kk === Xk.c) return 0;
      const Fk = (0, ik.e)(kk);
      if (void 0 !== Fk && Fk <= Tk.MAX_BLOCK_ID) return Fk;
      const Ik = (0, ik.e)(kk.split("|")[0]);
      if (void 0 !== Ik && Ik <= Tk.MAX_BLOCK_ID && (0, Tk.rootMetaDescOf)(Ik) === kk) return Ik;
      throw new Error(`Invalid block name. You sent ${kk}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39221: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk
    });
    var Xk = Ik(25);
    class Tk {
      constructor(kk) {
        this.screen = kk, this.hidesHud = !1
      }
      show(kk, Fk) {
        this.screen.setFade(kk.colour, kk.alpha), this.screen.setLetterbox(!0 === Fk.letterbox, kk.alpha < 1), this.setHudHidden(!0 === Fk.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(kk) {
        this.hidesHud !== kk && (this.hidesHud = kk, Xk.d.set({
          isUiHiddenByCamera: kk
        }))
      }
    }
  },
  39183: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => lk,
      F: () => Lk,
      d: () => Xk,
      h: () => Zk,
      k: () => tk,
      l: () => yk,
      n: () => ek,
      r: () => ak,
      u: () => wk,
      y: () => qk
    });
    const Xk = Math.PI / 2 - .001,
      Tk = 2 * Math.PI,
      ik = 1e-9;

    function yk(kk, Fk) {
      Fk.heading = kk.heading, Fk.pitch = kk.pitch
    }

    function lk(kk, Fk) {
      const Ik = Fk - kk;
      return Ik - Tk * Math.floor((Ik + Math.PI) / Tk)
    }

    function ak(kk, Fk, Ik) {
      return kk + lk(kk, Fk) * Ik
    }

    function qk(kk) {
      if (!Number.isFinite(kk)) return kk;
      const Fk = kk - Tk * Math.floor(kk / Tk);
      return Fk < Tk ? Fk : 0
    }

    function Lk(kk, Fk) {
      return kk + lk(kk, Fk)
    }

    function tk(kk) {
      return Math.max(-Xk, Math.min(Xk, kk))
    }

    function Zk(kk, Fk, Ik) {
      const Xk = Math.cos(Fk);
      return Ik[0] = Xk * Math.sin(kk), Ik[1] = -Math.sin(Fk), Ik[2] = Xk * Math.cos(kk), Ik
    }

    function jk(kk, Fk, Ik, Xk) {
      const Tk = Math.sqrt(kk * kk + Ik * Ik);
      return Tk < ik && Math.abs(Fk) < ik || (Tk >= ik && (Xk.heading = Math.atan2(kk, Ik)), Xk.pitch = tk(Math.atan2(-Fk, Tk) + 0)), Xk
    }

    function ek(kk, Fk) {
      return jk(kk[0], kk[1], kk[2], Fk)
    }

    function wk(kk, Fk, Ik) {
      return jk(Fk[0] - kk[0], Fk[1] - kk[1], Fk[2] - kk[2], Ik)
    }
  },
  39217: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik,
      e: () => Tk
    });
    var Xk = Ik(39183);

    function Tk(kk) {
      var Fk;
      const Ik = "default" === kk.mode ? "movement" : null !== (Fk = kk.playerFacing) && void 0 !== Fk ? Fk : "movement";
      return "cursor" === Ik ? {
        facing: Ik,
        mouseTurns: null
      } : {
        facing: Ik,
        mouseTurns: "default" !== kk.mode && void 0 !== kk.playerLook ? "look" : "view"
      }
    }

    function ik(kk, Fk, Ik, Tk, ik, yk) {
      return yk.JG = 0, yk.xG = 0, yk.pointedAt = void 0, void 0 !== Tk ? ik ? (yk.pointedAt = Tk, kk) : (0, Xk.y)(Tk.heading) : ik ? (yk.JG = Fk, yk.xG = Ik, kk) : (0, Xk.y)(kk + Fk)
    }
  },
  39196: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Bk
    });
    var Xk = Ik(39201),
      Tk = Ik(39183),
      ik = Ik(37029);

    function yk(kk, Fk, Ik, Xk) {
      if (!(Xk > 0)) return Fk;
      const Tk = Fk > kk ? Math.min(Fk, kk + Ik / Xk) : Math.max(Fk, kk - Ik / Xk);
      return Math.abs(Fk - Tk) < 1e-9 ? Fk : Tk
    }
    class lk {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Xk.f,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(kk) {
        !this.isGoingOut() && this.sinceTurnMs < Xk.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: kk
        } : (this.waiting = null, this.startOut(kk))
      }
      fadeIn(kk) {
        this.isGoingOut() ? this.sinceTurnMs < Xk.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: kk
        } : (this.waiting = null, this.startIn(kk)) : this.waiting = null
      }
      advance(kk) {
        const Fk = this.waiting;
        if (null === Fk) return this.step(kk);
        const Ik = Xk.k.minFadeTurnMs - this.sinceTurnMs;
        if (Ik > kk) return this.step(kk);
        const Tk = this.step(Ik);
        return this.waiting = null, "out" === Fk.turn ? this.startOut(Fk.transition) : this.startIn(Fk.minMs), this.step(kk - Ik) || Tk
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(kk) {
        ("in" === this.phase || null === this.phase && this.clearMs < Xk.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = kk.colour), this.outMs = kk.outMs, this.holdMs = kk.holdMs, this.inMs = kk.inMs
      }
      startIn(kk) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(kk, this.inMs)
      }
      step(kk) {
        const Fk = this.screen;
        this.sinceTurnMs += kk, null === this.phase && (this.clearMs += kk);
        let Ik = !1,
          Tk = kk;
        if ("out" === this.phase) {
          const Xk = (1 - Fk.alpha) * this.outMs;
          if (Fk.alpha = yk(Fk.alpha, 1, kk, this.outMs), Fk.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, Tk = Math.max(0, kk - Xk), Ik = !0
        }
        let ik = kk;
        if ("hold" === this.phase) {
          this.heldMs += Tk;
          const kk = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Xk.k.minFadeTurnMs);
          if (kk < 0 || Ik) return Ik;
          this.phase = "in", this.sinceTurnMs = kk, ik = kk
        }
        return "in" === this.phase && (Fk.alpha = yk(Fk.alpha, 0, ik, this.inMs), Fk.alpha <= 0 && (this.phase = null, this.clearMs = 0)), Ik
      }
    }
    var ak = Ik(39180),
      qk = Ik(39209),
      Lk = Ik(1844),
      tk = Ik(36571);

    function Zk(kk, Fk) {
      for (let Ik = 0; Ik < Fk.length; Ik++) Fk[Ik] = kk[Ik]
    }

    function jk(kk, Fk) {
      var Ik;
      return null !== (Ik = kk.fov) && void 0 !== Ik ? Ik : Fk.getDefaultFov()
    }

    function ek(kk, Fk, Ik, Xk, Tk) {
      const ik = 2 / Xk,
        yk = Math.exp(-ik * Tk);
      for (let lk = 0; lk < kk.length; lk++) {
        const Xk = kk[lk] - Ik[lk],
          ak = (Fk[lk] + ik * Xk) * Tk;
        kk[lk] = Ik[lk] + (Xk + ak) * yk, Fk[lk] = (Fk[lk] - ik * ak) * yk
      }
    }
    class wk {
      constructor(kk, Fk, Ik, Xk) {
        var ik, yk, lk, ak, qk;
        this.settings = kk, this.XZ = Fk, this.targets = Ik, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.TH = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Tk.y)((0, Lk.k)(null !== (ik = kk.viewHeading) && void 0 !== ik ? ik : 0)),
          pitch: (0, Tk.k)((0, Lk.k)(null !== (yk = kk.viewElevation) && void 0 !== yk ? yk : 45))
        }, this.closestDistance = null !== (lk = kk.closestDistance) && void 0 !== lk ? lk : Math.min(6, null !== (ak = kk.furthestDistance) && void 0 !== ak ? ak : 1 / 0), this.furthestDistance = null !== (qk = kk.furthestDistance) && void 0 !== qk ? qk : Math.max(64, this.closestDistance);
        const tk = (0, Tk.h)(this.base.heading, this.base.pitch, this.forward),
          Zk = Xk.position,
          jk = this.closestDistance;
        this.goal = [Zk[0] + tk[0] * jk, Zk[1] + tk[1] * jk, Zk[2] + tk[2] * jk, jk, this.base.heading, this.base.pitch]
      }
      update(kk, Fk, Ik) {
        var Xk, ik;
        this.placeGoal(null !== (Xk = this.settings.fov) && void 0 !== Xk ? Xk : this.XZ.getBaseFov()), this.goal[4] = (0, Tk.F)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const yk = null !== (ik = this.settings.smoothMs) && void 0 !== ik ? ik : 400;
        !this.started || yk < 1 ? (Zk(this.goal, this.smoothed), this.TH.fill(0), this.started = !0) : ek(this.smoothed, this.TH, this.goal, yk, kk), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Tk.k)(this.smoothed[5]), Fk.apply(this.angles, Ik);
        const lk = (0, Tk.h)(Ik.heading, Ik.pitch, this.forward);
        for (let Tk = 0; Tk < 3; Tk++) Ik.position[Tk] = this.smoothed[Tk] - lk[Tk] * this.smoothed[3];
        Ik.fov = jk(this.settings, this.XZ)
      }
      continueFrom(kk) {
        kk instanceof wk && (Zk(kk.goal, this.goal), Zk(kk.smoothed, this.smoothed), Zk(kk.TH, this.TH), this.framedTargets = kk.framedTargets, this.started = kk.started)
      }
      reset() {
        this.TH.fill(0), this.started = !1
      }
      placeGoal(kk) {
        var Fk;
        let Ik = 0;
        for (const Lk of this.settings.targets) {
          const kk = this.targets.currentAimPoint(Lk);
          kk && (0, ak.f)(kk, this.pointAt(Ik++))
        }
        if (Ik > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const kk = this.targets.aimPoint(this.XZ.localPlayerId);
          kk && (0, ak.f)(kk, this.pointAt(Ik++))
        }
        const Xk = this.goal;
        if (0 === Ik) return void(Xk[3] = this.withinDistances(Xk[3]));
        for (let ak = 0; ak < 3; ak++) {
          let kk = 1 / 0,
            Fk = -1 / 0;
          for (let Xk = 0; Xk < Ik; Xk++) kk = Math.min(kk, this.points[Xk][ak]), Fk = Math.max(Fk, this.points[Xk][ak]);
          Xk[ak] = (kk + Fk) / 2
        }
        let Tk = 0;
        for (let ak = 0; ak < Ik; ak++) {
          const kk = this.points[ak];
          Tk = Math.max(Tk, Math.hypot(kk[0] - Xk[0], kk[1] - Xk[1], kk[2] - Xk[2]))
        }
        const ik = Math.tan((0, Lk.k)(kk) / 2),
          yk = Math.atan(ik * (!0 === this.settings.letterbox ? tk.h : 1)),
          lk = Math.atan(ik * this.XZ.getAspectRatio()),
          qk = (Tk + (null !== (Fk = this.settings.padding) && void 0 !== Fk ? Fk : 2)) / Math.sin(Math.min(yk, lk));
        Xk[3] = this.withinDistances(qk)
      }
      withinDistances(kk) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, kk))
      }
      pointAt(kk) {
        return kk === this.points.length && this.points.push([0, 0, 0]), this.points[kk]
      }
    }
    class Hk {
      constructor(kk) {
        this.limits = kk, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(kk) {
        this.limits && (this.yawOffset = kk.yawOffset, this.pitchOffset = kk.pitchOffset, this.idleMs = kk.idleMs)
      }
      update(kk, Fk) {
        const Ik = this.limits;
        if (!Ik) return;
        const Xk = Number.isFinite(Fk.JG) ? Fk.JG : 0,
          Tk = Number.isFinite(Fk.xG) ? Fk.xG : 0;
        if (Fk.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: Fk.pointedAt.heading,
          pitch: Fk.pointedAt.pitch
        };
        else if (0 !== Xk || 0 !== Tk) this.idleMs = 0, this.yawOffset += Xk, this.pitchOffset += Tk;
        else {
          const Fk = Math.max(0, this.idleMs + kk - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += kk, void 0 !== Ik.returnMs && Fk > 0) {
            const kk = Ik.returnMs > 0 ? Math.exp(-3 * Fk / Ik.returnMs) : 0;
            this.yawOffset *= kk, this.pitchOffset *= kk
          }
        }
        this.clampOffsets(Ik)
      }
      clampOffsets(kk) {
        if (kk.maxYaw >= 180) this.yawOffset = (0, Tk.C)(0, this.yawOffset);
        else {
          const Fk = (0, Lk.k)(kk.maxYaw);
          this.yawOffset = Math.max(-Fk, Math.min(Fk, this.yawOffset))
        }
        const Fk = (0, Lk.k)(kk.maxPitch);
        this.pitchOffset = Math.max(-Fk, Math.min(Fk, this.pitchOffset))
      }
      apply(kk, Fk) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Tk.C)(kk.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - kk.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const Ik = (0, Tk.k)(kk.pitch + this.pitchOffset);
        this.pitchOffset = Ik - kk.pitch, Fk.heading = (0, Tk.y)(kk.heading + this.yawOffset), Fk.pitch = Ik
      }
      unapply(kk, Fk) {
        Fk.heading = (0, Tk.y)(kk.heading - this.yawOffset), Fk.pitch = (0, Tk.k)(kk.pitch - this.pitchOffset)
      }
    }
    const Jk = 1e-6;

    function xk(kk) {
      return Math.sqrt(kk[0] * kk[0] + kk[1] * kk[1] + kk[2] * kk[2])
    }

    function Pk(kk, Fk, Ik, Xk, Tk) {
      const ik = Tk * Tk,
        yk = ik * Tk;
      return (2 * yk - 3 * ik + 1) * kk + (yk - 2 * ik + Tk) * Fk + (-2 * yk + 3 * ik) * Ik + (yk - ik) * Xk
    }

    function Kk(kk, Fk, Ik, Xk, Tk) {
      const ik = Tk * Tk;
      return (6 * ik - 6 * Tk) * kk + (3 * ik - 4 * Tk + 1) * Fk + (-6 * ik + 6 * Tk) * Ik + (3 * ik - 2 * Tk) * Xk
    }

    function Qk(kk, Fk) {
      const Ik = Fk[0] - kk[0],
        Xk = Fk[1] - kk[1],
        Tk = Fk[2] - kk[2];
      return Math.sqrt(Ik * Ik + Xk * Xk + Tk * Tk)
    }

    function sk(kk, Fk, Ik, Xk, Tk, ik) {
      for (let yk = 0; yk < 3; yk++) ik[yk] = Tk ? kk[yk] * Xk : Ik[yk] - Fk[yk];
      return Tk && function(kk, Fk) {
        const Ik = xk(kk);
        if (Ik > Fk) {
          const Xk = Fk / Ik;
          kk[0] *= Xk, kk[1] *= Xk, kk[2] *= Xk
        }
      }(ik, 3 * Qk(Fk, Ik)), ik
    }

    function Vk(kk, Fk, Ik, Xk) {
      for (let Tk = 0; Tk < 3; Tk++) Xk[Tk] = 6 * (Fk[Tk] - kk[Tk]) - 2 * Ik[Tk];
      if (xk(Xk) < Jk)
        for (let Tk = 0; Tk < 3; Tk++) Xk[Tk] = Fk[Tk] - kk[Tk];
      return Xk
    }

    function zk(kk, Fk) {
      return [2 * Fk[0] - kk[0], 2 * Fk[1] - kk[1], 2 * Fk[2] - kk[2]]
    }

    function Sk(kk, Fk, Ik, Xk, Tk, ik, yk) {
      if (!ik && !yk) return 0;
      const lk = ik ? kk : 2 * Fk - Ik,
        ak = yk ? Ik : 2 * Fk - kk,
        qk = ik ? Xk : Tk,
        Lk = yk ? Tk : Xk,
        tk = (Fk - lk) / qk,
        Zk = (ak - Fk) / Lk;
      if (tk * Zk <= 0) return 0;
      const jk = (ak - lk) / (qk + Lk),
        ek = 3 * Math.min(Math.abs(tk), Math.abs(Zk));
      return Math.max(-ek, Math.min(ek, jk))
    }

    function vk(kk, Fk, Ik, Xk, Tk, ik, yk) {
      const {
        u: lk,
        segmentMs: ak
      } = kk;
      if (!kk.curved) return Ik + (Xk - Ik) * lk;
      return Pk(Ik, Sk(Fk, Ik, Xk, kk.beforeMs, ak, ik, !0) * ak, Xk, Sk(Ik, Xk, Tk, ak, kk.afterMs, !0, yk) * ak, lk)
    }

    function Ek(kk) {
      return Math.abs(kk.pitch) >= Tk.d
    }
    class Ok {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.nodes = kk, this.prevNodes = Ik, this.nextNodes = Xk, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = kk.map(((kk, Ik) => this.nodeTangent(Fk, Tk, Ik)))
      }
      sample(kk, Fk, Ik) {
        const {
          index: Xk,
          toIndex: ik,
          segmentMs: yk,
          curved: lk
        } = kk, ak = this.fromAngles, qk = this.toAngles, Lk = this.nodeAngles(Xk, Ik.position, Fk, ak), tk = this.nodeAngles(ik, Ik.position, Fk, qk);
        if (yk > 0 && "aim" !== Lk && "aim" !== tk && this.liveTangent(kk, ak)) return Ik.heading = (0, Tk.y)(ak.heading), void(Ik.pitch = ak.pitch);
        if ("none" === Lk && "none" === tk) return;
        !lk && yk > 0 && ("tangent" === Lk && this.liveTangent(kk, ak), "tangent" === tk && this.liveTangent(kk, qk)), "none" === Lk ? (0, Tk.l)(qk, ak) : "none" === tk && (0, Tk.l)(ak, qk);
        const Zk = lk && kk.beforeIndex >= 0 && "none" !== this.nodeAngles(kk.beforeIndex, Ik.position, Fk, this.beforeAngles),
          jk = lk && kk.afterIndex >= 0 && "none" !== this.nodeAngles(kk.afterIndex, Ik.position, Fk, this.afterAngles),
          ek = (0, Tk.F)(ak.heading, qk.heading),
          wk = vk(kk, Zk ? (0, Tk.F)(ak.heading, this.beforeAngles.heading) : 0, ak.heading, ek, jk ? (0, Tk.F)(ek, this.afterAngles.heading) : 0, Zk, jk);
        Ik.heading = (0, Tk.y)(wk), Ik.pitch = (0, Tk.k)(vk(kk, this.beforeAngles.pitch, ak.pitch, qk.pitch, this.afterAngles.pitch, Zk, jk))
      }
      nodeAngles(kk, Fk, Ik, Xk) {
        const Tk = this.rawNodeAngles(kk, Fk, Ik, Xk);
        return "none" !== Tk && Ek(Xk) && !this.borrowHeading(this.prevNodes[kk], Fk, Ik, Xk) && this.borrowHeading(this.nextNodes[kk], Fk, Ik, Xk), Tk
      }
      borrowHeading(kk, Fk, Ik, Xk) {
        const Tk = this.borrowedAngles;
        return !(kk < 0 || "none" === this.rawNodeAngles(kk, Fk, Ik, Tk) || Ek(Tk)) && (Xk.heading = Tk.heading, !0)
      }
      rawNodeAngles(kk, Fk, Ik, Xk) {
        const ik = this.nodes[kk].keyframe;
        if (ik.lookDirection) return (0, Tk.n)(ik.lookDirection, Xk), "aim";
        if (void 0 !== ik.lookAt) {
          const kk = Ik(ik.lookAt);
          if (kk) return (0, Tk.u)(Fk, kk, Xk), "aim"
        }
        const yk = this.tangents[kk];
        return yk ? ((0, Tk.l)(yk, Xk), "tangent") : "none"
      }
      liveTangent(kk, Fk) {
        const Ik = this.nodes[kk.index].position,
          Xk = this.nodes[kk.toIndex].position,
          ik = this.derivative;
        for (let Tk = 0; Tk < 3; Tk++) ik[Tk] = Kk(Ik[Tk], kk.fromTangent[Tk], Xk[Tk], kk.toTangent[Tk], kk.u);
        return xk(ik) > 1e-9 ? ((0, Tk.n)(ik, Fk), !0) : !(Qk(Ik, Xk) < Jk) && ((0, Tk.n)(Vk(Ik, Xk, kk.u < .5 ? kk.toTangent : kk.fromTangent, ik), Fk), !0)
      }
      nodeTangent(kk, Fk, Ik) {
        var Xk;
        const ik = kk[Ik];
        if (xk(ik) > 1e-9) return (0, Tk.n)(ik, {
          heading: 0,
          pitch: 0
        });
        const yk = null !== (Xk = this.restDirectionTo(Ik, Ik + 1, kk, Fk)) && void 0 !== Xk ? Xk : this.restDirectionTo(Ik, Ik - 1, kk, Fk);
        return yk ? (0, Tk.n)(yk, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(kk, Fk, Ik, Xk) {
        const Tk = this.nodes[kk],
          ik = this.nodes[Fk];
        if (!ik || Qk(Tk.position, ik.position) < Jk) return null;
        const [yk, lk] = Fk > kk ? [Tk, ik] : [ik, Tk], ak = sk(Ik[Fk], yk.position, lk.position, lk.timeMs - yk.timeMs, Xk, [0, 0, 0]);
        return Vk(yk.position, lk.position, ak, [0, 0, 0])
      }
    }

    function nk(kk, Fk) {
      const Ik = kk.lookDirection || Fk.lookDirection ? function(kk, Fk) {
        if (!kk || !Fk) return kk === Fk;
        const Ik = xk(kk),
          Xk = xk(Fk);
        return Math.hypot(kk[0] / Ik - Fk[0] / Xk, kk[1] / Ik - Fk[1] / Xk, kk[2] / Ik - Fk[2] / Xk) < Jk
      }(kk.lookDirection, Fk.lookDirection) : (Xk = kk.lookAt, Tk = Fk.lookAt, "object" !== typeof Xk || "object" !== typeof Tk ? Xk === Tk : Qk(Xk, Tk) < Jk);
      var Xk, Tk;
      return Qk(kk.position, Fk.position) < Jk && kk.fov === Fk.fov && Ik
    }
    class Gk {
      constructor(kk, Fk, Ik) {
        if (this.smooth = Fk, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
        for (let ik = 1; ik < kk.length; ik++)
          if (!(kk[ik].timeMs > kk[ik - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = kk.map((kk => {
          var Fk;
          return {
            timeMs: kk.timeMs,
            position: [...kk.position],
            keyframe: kk,
            easing: (0, ik.r)(null !== (Fk = kk.easing) && void 0 !== Fk ? Fk : "linear")
          }
        }));
        const Xk = this.nodes[0],
          Tk = this.nodes[this.nodes.length - 1],
          yk = Ik && this.nodes.length > 1;
        yk && !nk(Xk.keyframe, Tk.keyframe) && this.nodes.push({
          ...Xk,
          timeMs: Tk.timeMs + (Tk.timeMs - Xk.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = yk ? this.nodes[this.nodes.length - 1].timeMs - Xk.timeMs : 0, this.prevNodes = this.nodes.map(((kk, Fk) => this.neighbour(Fk, -1))), this.nextNodes = this.nodes.map(((kk, Fk) => this.neighbour(Fk, 1))), this.prevGaps = this.prevNodes.map(((kk, Fk) => kk >= 0 ? this.gapMs(Fk, -1) : 0)), this.nextGaps = this.nextNodes.map(((kk, Fk) => kk >= 0 ? this.gapMs(Fk, 1) : 0)), this.velocities = this.nodes.map(((kk, Fk) => {
          const Ik = this.prevNodes[Fk],
            Xk = this.nextNodes[Fk];
          return function(kk, Fk, Ik, Xk, Tk, ik) {
            if (ik[0] = 0, ik[1] = 0, ik[2] = 0, !kk && !Ik) return ik;
            const yk = null !== kk && void 0 !== kk ? kk : zk(null !== Ik && void 0 !== Ik ? Ik : Fk, Fk),
              lk = null !== Ik && void 0 !== Ik ? Ik : zk(null !== kk && void 0 !== kk ? kk : Fk, Fk),
              ak = kk ? Xk : Tk,
              qk = Ik ? Tk : Xk,
              Lk = Qk(yk, Fk),
              tk = Qk(Fk, lk);
            if (Lk < Jk || tk < Jk) return ik;
            const Zk = Math.sqrt(Lk),
              jk = Math.sqrt(tk),
              ek = (Zk + jk) / (ak + qk);
            for (let wk = 0; wk < 3; wk++) {
              const kk = (Fk[wk] - yk[wk]) / Zk - (lk[wk] - yk[wk]) / (Zk + jk) + (lk[wk] - Fk[wk]) / jk;
              ik[wk] = kk * ek
            }
            return ik
          }(Ik >= 0 ? this.nodes[Ik].position : null, kk.position, Xk >= 0 ? this.nodes[Xk].position : null, this.prevGaps[Fk], this.nextGaps[Fk], [0, 0, 0])
        })), this.aim = new Ok(this.nodes, this.velocities, this.prevNodes, this.nextNodes, Fk)
      }
      sample(kk, Fk, Ik, Xk) {
        const Tk = this.findSegment(this.pathTime(kk));
        this.samplePosition(Tk, Xk.position), this.aim.sample(Tk, Fk, Xk);
        const {
          beforeIndex: ik,
          afterIndex: yk
        } = Tk;
        Xk.fov = vk(Tk, ik >= 0 ? this.fovAt(ik, Ik) : 0, this.fovAt(Tk.index, Ik), this.fovAt(Tk.toIndex, Ik), yk >= 0 ? this.fovAt(yk, Ik) : 0, ik >= 0, yk >= 0)
      }
      pathTime(kk) {
        const Fk = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || kk <= Fk) return kk;
        const Ik = kk - Fk;
        return Fk + Ik - this.loopMs * Math.floor(Ik / this.loopMs)
      }
      findSegment(kk) {
        const Fk = this.nodes,
          Ik = this.segment;
        let Xk = Ik.index;
        for (kk < Fk[Xk].timeMs && (Xk = 0); Xk < Fk.length - 2 && Fk[Xk + 1].timeMs <= kk;) Xk++;
        const Tk = Math.min(Xk + 1, Fk.length - 1),
          yk = Fk[Tk].timeMs - Fk[Xk].timeMs;
        return Ik.index = Xk, Ik.toIndex = Tk, Ik.segmentMs = yk, Ik.u = yk > 0 ? (0, ik.o)((kk - Fk[Xk].timeMs) / yk, Fk[Xk].easing) : 1, Ik.curved = this.smooth && yk > 0, Ik.beforeIndex = this.prevNodes[Xk], Ik.afterIndex = this.nextNodes[Tk], Ik.beforeMs = this.prevGaps[Xk], Ik.afterMs = this.nextGaps[Tk], Ik
      }
      samplePosition(kk, Fk) {
        const {
          fromTangent: Ik,
          toTangent: Xk,
          curved: Tk
        } = kk, ik = this.nodes[kk.index].position, yk = this.nodes[kk.toIndex].position;
        sk(this.velocities[kk.index], ik, yk, kk.segmentMs, Tk, Ik), sk(this.velocities[kk.toIndex], ik, yk, kk.segmentMs, Tk, Xk);
        const lk = kk.u;
        for (let ak = 0; ak < 3; ak++) Fk[ak] = Tk ? Pk(ik[ak], Ik[ak], yk[ak], Xk[ak], lk) : ik[ak] + (yk[ak] - ik[ak]) * lk
      }
      fovAt(kk, Fk) {
        var Ik;
        return null !== (Ik = this.nodes[kk].keyframe.fov) && void 0 !== Ik ? Ik : Fk
      }
      neighbour(kk, Fk) {
        const Ik = this.nodes.length - 1,
          Xk = kk + Fk;
        return Xk >= 0 && Xk <= Ik ? Xk : this.loopMs <= 0 || Ik < 2 ? -1 : Xk < 0 ? Ik - 1 : 1
      }
      gapMs(kk, Fk) {
        const Ik = this.nodes.length - 1;
        if (1 === Fk) {
          const Fk = kk === Ik ? 0 : kk;
          return this.nodes[Fk + 1].timeMs - this.nodes[Fk].timeMs
        }
        const Xk = 0 === kk ? Ik : kk;
        return this.nodes[Xk].timeMs - this.nodes[Xk - 1].timeMs
      }
    }
    class pk {
      constructor(kk) {
        this.XZ = kk, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Fk => kk.getEntityPosition(Fk), this.readAimPoint = Fk => kk.getEntityAimPoint(Fk)
      }
      aimPoint(kk) {
        return "string" !== typeof kk ? (0, ak.o)(kk, 3) ? kk : null : this.resolve(kk, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(kk) {
        const Fk = "string" === typeof kk ? this.XZ.getEntityAimPoint(kk) : kk;
        return Fk && (0, ak.o)(Fk, 3) ? Fk : null
      }
      feetPosition(kk) {
        return this.resolve(kk, this.readFeet, this.lastFeet)
      }
      heading(kk) {
        const Fk = this.XZ.getEntityHeading(kk);
        if (null !== Fk && Number.isFinite(Fk)) return this.lastHeadings.set(kk, Fk), Fk;
        const Ik = this.lastHeadings.get(kk);
        return void 0 !== Ik ? Ik : kk === this.XZ.localPlayerId ? 0 : this.heading(this.XZ.localPlayerId)
      }
      resolve(kk, Fk, Ik) {
        const Xk = Fk(kk);
        let Tk = Ik.get(kk);
        return Xk && (0, ak.o)(Xk, 3) ? (Tk || (Tk = [0, 0, 0], Ik.set(kk, Tk)), Tk[0] = Xk[0], Tk[1] = Xk[1], Tk[2] = Xk[2], Tk) : Tk || (kk === this.XZ.localPlayerId ? null : this.resolve(this.XZ.localPlayerId, Fk, Ik))
      }
    }

    function uk(kk) {
      return {
        heading: kk.heading,
        pitch: kk.pitch
      }
    }

    function bk(kk, Fk) {
      Number.isFinite(kk.heading) && Number.isFinite(kk.pitch) || (0, Tk.l)(Fk, kk)
    }

    function Rk(kk, Fk, Ik, Xk, ik) {
      if (Fk) return void(0, Tk.n)(Fk, ik);
      const yk = Xk.aimPoint(Ik);
      yk && (0, Tk.u)(kk, yk, ik)
    }
    class Uk {
      constructor(kk, Fk, Ik, Xk) {
        this.settings = kk, this.XZ = Fk, this.targets = Ik, this.base = void 0, this.base = uk(Xk)
      }
      update(kk, Fk, Ik) {
        var Xk;
        const Tk = this.settings;
        (0, ak.f)(Tk.position, Ik.position), Rk(Tk.position, Tk.lookDirection, null !== (Xk = Tk.lookAt) && void 0 !== Xk ? Xk : this.XZ.localPlayerId, this.targets, this.base), Fk.apply(this.base, Ik), Ik.fov = jk(Tk, this.XZ)
      }
      continueFrom(kk) {
        kk instanceof Uk && (0, Tk.l)(kk.base, this.base)
      }
      reset(kk) {
        bk(this.base, kk)
      }
    }
    class Ck {
      constructor(kk, Fk, Ik, Xk) {
        this.settings = kk, this.XZ = Fk, this.targets = Ik, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.TH = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = uk(Xk), this.goal = [...Xk.position]
      }
      update(kk, Fk, Ik) {
        var Xk, Tk, ik;
        const yk = this.settings,
          lk = null !== (Xk = yk.target) && void 0 !== Xk ? Xk : this.XZ.localPlayerId,
          qk = this.targets.feetPosition(lk);
        let Lk = !1;
        qk && (Lk = this.foundFeet && Qk(this.lastFeet, qk) > 32 + .1 * kk, (0, ak.f)(qk, this.lastFeet), this.foundFeet = !0, this.placeGoal(qk, lk));
        const tk = null !== (Tk = yk.smoothMs) && void 0 !== Tk ? Tk : 0;
        !this.started || tk < 1 || Lk ? ((0, ak.f)(this.goal, this.smoothed), this.TH.fill(0), this.started = !0) : ek(this.smoothed, this.TH, this.goal, tk, kk), Lk && (this.distance = -1), (0, ak.f)(this.smoothed, Ik.position);
        const Zk = !0 === yk.avoidTerrain ? this.pullIn(lk, kk, Ik) : 1;
        let wk = this.goal;
        if ("target" === yk.offsetSpace) wk = Ik.position;
        else if (Zk < 1) {
          wk = this.aimOrigin;
          for (let kk = 0; kk < 3; kk++) wk[kk] = Ik.position[kk] + (this.goal[kk] - this.smoothed[kk]) * Zk
        }
        Rk(wk, yk.lookDirection, null !== (ik = yk.lookAt) && void 0 !== ik ? ik : lk, this.targets, this.base), Fk.apply(this.base, Ik), Ik.fov = jk(yk, this.XZ)
      }
      continueFrom(kk) {
        kk instanceof Ck && (0, Xk.u)(kk.settings.target, this.settings.target) && ((0, Tk.l)(kk.base, this.base), (0, ak.f)(kk.goal, this.goal), (0, ak.f)(kk.lastFeet, this.lastFeet), this.foundFeet = kk.foundFeet, (0, ak.f)(kk.smoothed, this.smoothed), (0, ak.f)(kk.TH, this.TH), this.started = kk.started, !0 === kk.settings.avoidTerrain && (this.distance = kk.distance))
      }
      reset(kk) {
        bk(this.base, kk), this.TH.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(kk, Fk, Ik) {
        const Xk = this.targets.aimPoint(kk);
        if (!Xk) return 1;
        const Tk = Ik.position,
          ik = Qk(Xk, Tk);
        if (!(ik > 0)) return 1;
        const yk = this.toCamera;
        for (let ak = 0; ak < 3; ak++) yk[ak] = (Tk[ak] - Xk[ak]) / ik;
        const lk = function(kk, Fk, Ik) {
          return kk < 0 || Fk < kk ? Fk : Fk + (kk - Fk) * Math.exp(-Ik / 150)
        }(this.distance, function(kk, Fk, Ik, Xk) {
          const Tk = kk.raycastTerrain(Fk, Ik, Xk);
          return null !== Tk && Number.isFinite(Tk) ? Math.min(Xk, Math.max(0, Tk - .2)) : Xk
        }(this.XZ, Xk, yk, ik), Fk);
        if (ik - lk < .001) return this.distance = -1, 1;
        this.distance = lk;
        for (let ak = 0; ak < 3; ak++) Tk[ak] = Xk[ak] + yk[ak] * lk;
        return lk / ik
      }
      placeGoal(kk, Fk) {
        const Ik = this.settings.offset;
        let Xk = Ik[0],
          Tk = Ik[2];
        if ("target" === this.settings.offsetSpace) {
          const kk = this.targets.heading(Fk),
            ik = Math.cos(kk),
            yk = Math.sin(kk);
          Xk = Ik[0] * ik + Ik[2] * yk, Tk = -Ik[0] * yk + Ik[2] * ik
        }
        this.goal[0] = kk[0] + Xk, this.goal[1] = kk[1] + Ik[1], this.goal[2] = kk[2] + Tk
      }
    }
    class Nk {
      constructor(kk, Fk, Ik, Xk) {
        var Tk, ik;
        this.settings = kk, this.XZ = Fk, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = kk.keyframes.length > 0 ? new Gk(kk.keyframes, null === (Tk = kk.smooth) || void 0 === Tk || Tk, null !== (ik = kk.loop) && void 0 !== ik && ik) : null, this.base = (0, ak.e)(Xk, (0, ak.j)()), this.resolveTarget = kk => Ik.aimPoint(kk)
      }
      update(kk, Fk, Ik) {
        this.elapsedMs += kk;
        const Xk = jk(this.settings, this.XZ);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Xk, this.base) : this.base.fov = Xk, (0, ak.f)(this.base.position, Ik.position), Ik.fov = this.base.fov, Fk.apply(this.base, Ik)
      }
      continueFrom(kk) {
        kk instanceof Nk && (0, Xk.u)(kk.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = kk.elapsedMs, (0, ak.e)(kk.base, this.base))
      }
      reset(kk) {
        bk(this.base, kk), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function ck(kk, Fk) {
      return (0, Xk.y)(kk, Fk)
    }
    class Wk {
      constructor(kk, Fk, Ik) {
        var Xk;
        this.settings = kk, this.XZ = Fk, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Tk = null !== Ik && Ik.settings.mode === kk.mode,
          ik = Tk ? Ik.pose : Fk.getDefaultPose();
        this.pose = (0, ak.e)(ik, (0, ak.j)()), this.lastGoodPose = (0, ak.e)(Tk ? Ik.lastGoodPose : ik, (0, ak.j)()), this.look = new Hk(kk.playerLook), this.targets = null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.targets) && void 0 !== Xk ? Xk : new pk(Fk);
        const yk = (0, ak.e)(ik, (0, ak.j)());
        Tk && Ik.look.unapply(yk, yk), this.mode = function(kk, Fk, Ik, Xk) {
          switch (kk.mode) {
            case "fixed":
              return new Uk(kk, Fk, Ik, Xk);
            case "follow":
              return new Ck(kk, Fk, Ik, Xk);
            case "path":
              return new Nk(kk, Fk, Ik, Xk);
            case "frame":
              return new wk(kk, Fk, Ik, Xk)
          }
        }(kk, Fk, this.targets, yk), Tk && (this.look.continueFrom(Ik.look), this.mode.continueFrom(Ik.mode))
      }
      update(kk, Fk) {
        return this.look.update(kk, Fk), this.mode.update(kk, this.look, this.pose), (0, ak.k)(this.pose) ? (0, ak.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, ak.e)(this.lastGoodPose, this.pose), this.mode.reset((0, ak.k)(this.lastGoodPose) ? this.lastGoodPose : this.XZ.getDefaultPose())), this.pose
      }
    }

    function fk(kk) {
      return [0, 0, kk[2], kk[3]]
    }
    class Bk {
      constructor(kk) {
        this.XZ = kk, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new lk, this.shot = null, this.blend = null, this.mixed = (0, ak.j)(), this.output = (0, ak.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(kk) {
        const Fk = (0, qk.c)(kk);
        if ((0, Xk.u)(Fk, this.pending ? this.pending.settings : this.settings)) return;
        const Ik = ck(this.settings, Fk);
        if (void 0 !== Fk.transition && !Ik) return this.pending = {
          settings: Fk,
          shot: "default" === Fk.mode ? null : new Wk(Fk, this.XZ, null)
        }, void this.fade.fadeOut(Fk.transition);
        const Tk = null !== this.pending;
        this.pending = null, !Tk && Ik || this.fade.fadeIn(Xk.k.minTransitionFadeMs), this.show(Fk, !1)
      }
      show(kk, Fk) {
        var Ik, Tk;
        if ((0, Xk.u)(kk, this.settings)) return;
        const yk = !Fk && ck(this.settings, kk);
        this.settings = kk;
        const lk = null !== this.blend && this.blend.elapsedMs > 0,
          qk = (0, ak.e)(this.hasOutput ? this.output : this.XZ.getDefaultPose(), (0, ak.j)());
        if (this.shot = "default" === kk.mode ? null : new Wk(kk, this.XZ, Fk ? null : this.shot), yk) return;
        const Lk = Fk || !this.shot && !this.hasOutput ? 0 : null !== (Ik = kk.blendInMs) && void 0 !== Ik ? Ik : 0;
        if (Lk <= 0) return void(this.blend = null);
        const tk = (0, ik.r)(null !== (Tk = kk.blendEasing) && void 0 !== Tk ? Tk : "easeInOut");
        this.blend = {
          from: qk,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Lk,
          easing: lk ? fk(tk) : tk
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
      update(kk, Fk) {
        const Ik = Number.isFinite(kk) && kk > 0 ? kk : 0;
        if (this.fade.advance(Ik) && null !== this.pending) {
          const {
            settings: kk
          } = this.pending;
          this.pending = null, this.show(kk, !0)
        }
        this.loadingPositions.length = 0;
        const Xk = this.pending;
        if (null !== Xk && void 0 !== Xk && Xk.shot) {
          const kk = "path" === Xk.settings.mode ? 0 : Ik;
          this.noteLoadingPosition(Xk.shot.update(kk, ak.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const yk = this.shot ? this.shot.update(Ik, Fk) : this.XZ.getDefaultPose();
        this.shot && this.noteLoadingPosition(yk.position);
        const lk = this.blend;
        if (!lk) return this.writeOutput(yk);
        lk.elapsedMs += Ik;
        const qk = Math.min(1, lk.elapsedMs / lk.durationMs);
        if (lk.headingDelta = Number.isFinite(lk.headingDelta) ? (0, Tk.F)(lk.headingDelta, yk.heading - lk.from.heading) : (0, Tk.C)(lk.from.heading, yk.heading), (0, ak.s)(lk.from, yk, lk.headingDelta, (0, ik.o)(qk, lk.easing), this.mixed), qk >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else lk.fromScripted && this.noteLoadingPosition(lk.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(kk) {
        if (kk.every(Number.isFinite)) {
          const Fk = this.loadingPositions;
          Fk.push((0, ak.f)(kk, this.loadingSlots[Fk.length]))
        }
      }
      writeOutput(kk) {
        const Fk = this.output;
        (0, ak.k)(kk) ? (0, ak.e)(kk, Fk) : this.hasOutput || (0, ak.e)(this.XZ.getDefaultPose(), Fk), Fk.pitch = (0, Tk.k)(Fk.pitch);
        const Ik = this.XZ.getDefaultFov(),
          ik = Number.isFinite(Ik) && Ik > 0 && Ik < 180,
          yk = ik ? Math.min(Xk.k.minFov, Ik) : Xk.k.minFov,
          lk = ik ? Math.max(Xk.k.maxFov, Ik) : Xk.k.maxFov;
        return Fk.fov = Number.isFinite(Fk.fov) ? Math.min(lk, Math.max(yk, Fk.fov)) : lk, this.hasOutput = !0, Fk
      }
    }
  },
  39180: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      e: () => lk,
      f: () => yk,
      j: () => ik,
      k: () => qk,
      o: () => ak,
      s: () => Lk
    });
    var Xk = Ik(39183);
    const Tk = {
      JG: 0,
      xG: 0
    };

    function ik() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function yk(kk, Fk) {
      return Fk[0] = kk[0], Fk[1] = kk[1], Fk[2] = kk[2], Fk
    }

    function lk(kk, Fk) {
      return yk(kk.position, Fk.position), Fk.heading = kk.heading, Fk.pitch = kk.pitch, Fk.fov = kk.fov, Fk
    }

    function ak(kk, Fk) {
      return Array.isArray(kk) && kk.length === Fk && kk.every(Number.isFinite)
    }

    function qk(kk) {
      return ak(kk.position, 3) && Number.isFinite(kk.heading) && Number.isFinite(kk.pitch) && Number.isFinite(kk.fov)
    }

    function Lk(kk, Fk, Ik, Tk, ik) {
      for (let Xk = 0; Xk < 3; Xk++) ik.position[Xk] = kk.position[Xk] + (Fk.position[Xk] - kk.position[Xk]) * Tk;
      return ik.heading = (0, Xk.y)(kk.heading + Ik * Tk), ik.pitch = kk.pitch + (Fk.pitch - kk.pitch) * Tk, ik.fov = kk.fov + (Fk.fov - kk.fov) * Tk, ik
    }
  },
  39209: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Vk,
      g: () => Zk
    });
    var Xk = Ik(39201),
      Tk = Ik(39180);
    const ik = Xk.j,
      yk = Xk.m;

    function lk(kk, Fk, Ik, Xk) {
      return Number.isFinite(kk) ? Math.min(Ik, Math.max(Fk, kk)) : Xk
    }

    function ak(kk, Fk, Ik) {
      return void 0 !== kk && Number.isFinite(kk) ? Math.min(Ik, Math.max(Fk, kk)) : void 0
    }

    function qk(kk) {
      const Fk = Xk.k.maxCoordinate;
      return [Math.min(Fk, Math.max(-Fk, kk[0])), Math.min(Fk, Math.max(-Fk, kk[1])), Math.min(Fk, Math.max(-Fk, kk[2]))]
    }

    function Lk(kk) {
      return "string" === typeof kk ? kk : (0, Tk.o)(kk, 3) ? qk(kk) : void 0
    }
    const tk = new RegExp(Xk.q);

    function Zk(kk) {
      return "string" === typeof kk && tk.test(kk)
    }

    function jk(kk) {
      const Fk = [];
      if (!Array.isArray(kk)) return Fk;
      for (const Ik of kk.slice(0, Xk.k.maxFrameTargets)) {
        const kk = Lk(Ik);
        void 0 === kk || "string" === typeof kk && !Zk(kk) || Fk.push(kk)
      }
      return Fk
    }

    function ek(kk) {
      if (!(0, Tk.o)(kk, 3)) return;
      const Fk = Math.max(Math.abs(kk[0]), Math.abs(kk[1]), Math.abs(kk[2])),
        Ik = Math.hypot(kk[0] / Fk, kk[1] / Fk, kk[2] / Fk);
      return 0 === Fk || Fk * Ik < Xk.k.minDirectionLength ? void 0 : [kk[0] / Fk / Ik, kk[1] / Fk / Ik, kk[2] / Fk / Ik]
    }

    function wk(kk) {
      if (void 0 !== kk) return "string" === typeof kk ? ik.includes(kk) ? kk : void 0 : (0, Tk.o)(kk, 4) ? [lk(kk[0], 0, 1, 0), lk(kk[1], Xk.k.minEasingY, Xk.k.maxEasingY, 0), lk(kk[2], 0, 1, 1), lk(kk[3], Xk.k.minEasingY, Xk.k.maxEasingY, 1)] : "linear"
    }

    function Hk(kk) {
      if (kk) return {
        maxYaw: lk(kk.maxYaw, 0, Xk.k.maxPlayerLook, 0),
        maxPitch: lk(kk.maxPitch, 0, Xk.k.maxPlayerLook, 0),
        returnMs: ak(kk.returnMs, 0, Xk.k.maxReturnMs)
      }
    }
    const Jk = new RegExp(Xk.e);

    function xk(kk) {
      var Fk;
      if ("object" !== typeof kk || null === kk) return;
      const Ik = Xk.k.maxTransitionMs,
        Tk = Xk.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof kk.colour && Jk.test(kk.colour) ? kk.colour : Xk.f,
        outMs: lk(kk.outMs, Tk, Ik, Tk),
        holdMs: lk(null !== (Fk = kk.holdMs) && void 0 !== Fk ? Fk : 0, 0, Ik, 0),
        inMs: lk(kk.inMs, Tk, Ik, Tk)
      }
    }

    function Pk(kk) {
      return !0 === kk || void 0
    }

    function Kk(kk) {
      if ("object" !== typeof kk || null === kk) return !1;
      const Fk = kk.lookAt;
      return Number.isFinite(kk.timeMs) && (0, Tk.o)(kk.position, 3) && (void 0 === Fk || "string" === typeof Fk || (0, Tk.o)(Fk, 3))
    }

    function Qk(kk) {
      return {
        ...kk,
        timeMs: lk(kk.timeMs, 0, Xk.k.maxPathMs, 0),
        position: qk(kk.position),
        lookAt: Lk(kk.lookAt),
        lookDirection: ek(kk.lookDirection),
        fov: ak(kk.fov, Xk.k.minFov, Xk.k.maxFov),
        easing: wk(kk.easing)
      }
    }

    function sk(kk) {
      const Fk = [];
      if (!Array.isArray(kk)) return Fk;
      for (const Ik of kk.slice(0, Xk.k.maxKeyframes)) {
        if (!Kk(Ik)) continue;
        const kk = Qk(Ik);
        (0 === Fk.length || kk.timeMs > Fk[Fk.length - 1].timeMs) && Fk.push(kk)
      }
      return Fk
    }

    function Vk(kk) {
      if ("object" !== typeof kk || null === kk) return {
        mode: "default"
      };
      const Fk = {
          blendInMs: ak(kk.blendInMs, 0, Xk.k.maxBlendInMs),
          blendEasing: wk(kk.blendEasing),
          transition: xk(kk.transition),
          letterbox: Pk(kk.letterbox),
          hideHud: Pk(kk.hideHud)
        },
        Ik = {
          mode: "default",
          ...Fk
        };
      if ("default" === kk.mode || "fixed" === kk.mode && !(0, Tk.o)(kk.position, 3)) return Ik;
      const ik = {
        ...Fk,
        fov: ak(kk.fov, Xk.k.minFov, Xk.k.maxFov),
        playerFacing: (tk = kk.playerFacing, yk.includes(tk) ? tk : void 0),
        playerLook: Hk(kk.playerLook)
      };
      var tk, Zk;
      switch (kk.mode) {
        case "fixed":
          return {
            ...kk, ...ik, position: qk(kk.position), lookAt: Lk(kk.lookAt), lookDirection: ek(kk.lookDirection)
          };
        case "follow":
          return {
            ...kk, ...ik, target: "string" === typeof kk.target ? kk.target : void 0, lookAt: Lk(kk.lookAt), offset: (Zk = kk.offset, Array.isArray(Zk) ? [lk(Zk[0], -Xk.k.maxOffset, Xk.k.maxOffset, 0), lk(Zk[1], -Xk.k.maxOffset, Xk.k.maxOffset, 0), lk(Zk[2], -Xk.k.maxOffset, Xk.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: ek(kk.lookDirection), smoothMs: ak(kk.smoothMs, 0, Xk.k.maxSmoothMs)
          };
        case "path":
          return {
            ...kk, ...ik, keyframes: sk(kk.keyframes)
          };
        case "frame":
          return {
            ...kk, ...ik, targets: jk(kk.targets), viewHeading: ak(kk.viewHeading, -Xk.k.maxFrameHeading, Xk.k.maxFrameHeading), viewElevation: ak(kk.viewElevation, 0, Xk.k.maxFrameElevation), padding: ak(kk.padding, 0, Xk.k.maxFrameDistance), closestDistance: ak(kk.closestDistance, 0, Xk.k.maxFrameDistance), furthestDistance: ak(kk.furthestDistance, 0, Xk.k.maxFrameDistance), smoothMs: ak(kk.smoothMs, 0, Xk.k.maxSmoothMs)
          };
        default:
          return Ik
      }
    }
  },
  38649: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk
    });
    var Xk = Ik(1217);

    function Tk(kk) {
      const Fk = /(\d*\.?\d+)px/.exec(kk);
      return Fk ? Number(Fk[1]) : null
    }

    function ik(kk) {
      return kk.split(/[\s,]+/).pop()
    }
    let yk = !1;
    const lk = {
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
      drawText: function(kk, Fk, Xk, lk, ak, qk) {
        if (ak <= 0 || qk <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Lk,
          fontVariant: tk,
          fontWeight: Zk,
          fontSize: jk,
          font: ek
        } = this, wk = [Lk, tk, Zk, `${jk}px`, ek].filter(Boolean).join(" "), Hk = [
          [Zk, `${jk}px`, ik(ek)].filter(Boolean).join(" "), `${jk}px sans-serif`
        ], Jk = kk.font, xk = function(kk, Fk, Ik) {
          for (const Xk of Fk) {
            kk.font = Xk;
            const Fk = Tk(kk.font),
              yk = ik(Xk);
            if (null !== Fk && Math.abs(Fk - Ik) <= .5 && kk.font.toLowerCase().includes(yk.toLowerCase())) return Xk
          }
          return null
        }(kk, [wk, ...Hk], jk);
        xk !== wk && function(kk, Fk, Xk) {
          yk || (yk = !0, Promise.resolve().then((() => Ik(1076))).then((Ik => {
            let {
              ow: Tk
            } = Ik;
            Tk(new Error("A canvas didn't take canvasTxt's font"), {
              font: kk,
              Gj: Fk,
              drawnWith: null !== Xk && void 0 !== Xk ? Xk : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(wk, Jk, xk);
        const Pk = Tk(kk.font);
        if (null === xk && null !== Pk && Pk > 0) {
          const Ik = jk / Pk;
          kk.save();
          try {
            return kk.scale(Ik, Ik), {
              height: this.drawLines(kk, Fk, Xk / Ik, lk / Ik, ak / Ik, qk / Ik, Pk).height * Ik
            }
          } finally {
            kk.restore()
          }
        }
        return this.drawLines(kk, Fk, Xk, lk, ak, qk, jk)
      },
      drawLines: function(kk, Fk, Ik, Tk, ik, yk, lk) {
        const ak = Ik + ik,
          qk = Tk + yk;
        let Lk, tk = Tk + yk / 2 + lk / 2;
        "right" === this.align ? (Lk = ak, kk.textAlign = "right") : "left" === this.align ? (Lk = Ik, kk.textAlign = "left") : (Lk = Ik + ik / 2, kk.textAlign = "center");
        for (const Xk of Fk) {
          kk.measureText(Xk).width >= ik && (Fk = Fk.replace(Xk, ""))
        }
        Fk = (0, Xk.S)(Fk);
        const Zk = [],
          jk = Fk.split("\n"),
          ek = this.justify ? kk.measureText("\u200a").width : 0;
        jk.forEach((Fk => {
          let Ik = kk.measureText(Fk).width;
          if (Ik <= ik) Zk.push(Fk);
          else {
            let Xk = Fk;
            const Tk = ik;
            let yk, lk, ak;
            for (Ik = kk.measureText(Xk).width; Ik > Tk;) {
              for (yk = 0, lk = 0, ak = ""; lk < Tk;) yk++, ak = Xk.substr(0, yk), lk = kk.measureText(ak).width;
              yk--, ak = ak.substr(0, yk);
              const Fk = yk;
              if (" " !== Xk.substr(yk, 1)) {
                for (;
                  " " !== Xk.substr(yk, 1) && 0 !== yk;) yk--;
                0 === yk && (yk = Fk), ak = Xk.substr(0, yk)
              }
              ak = this.justify ? this.justifyLine(kk, ak, ek, "\u200a", ik) : ak, Xk = Xk.substr(yk), Ik = kk.measureText(Xk).width, Zk.push(ak)
            }
            Ik > 0 && Zk.push(Xk)
          }
        }));
        const wk = this.lineHeight ? this.lineHeight : this.getTextHeight(kk, Fk),
          Hk = wk * (Zk.length - 1),
          Jk = Hk / 2;
        let xk = Tk;
        "top" === this.vAlign ? tk = Tk + lk : "bottom" === this.vAlign ? (tk = qk - Hk, xk = qk) : (xk = Tk + yk / 2, tk -= Jk), Zk.forEach((Fk => {
          Fk = Fk.trim(), kk.fillText(Fk, Lk, tk), tk += wk
        })), this.debug && (kk.lineWidth = 3, kk.strokeStyle = "#00909e", kk.strokeRect(Ik, Tk, ik, yk), kk.lineWidth = 2, kk.strokeStyle = "#f6d743", kk.beginPath(), kk.moveTo(Lk, Tk), kk.lineTo(Lk, qk), kk.stroke(), kk.strokeStyle = "#ff6363", kk.beginPath(), kk.moveTo(Ik, xk), kk.lineTo(ak, xk), kk.stroke());
        return {
          height: Hk + wk
        }
      },
      getTextHeight: function(kk, Fk) {
        const Ik = kk.textBaseline;
        kk.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Xk
        } = kk.measureText(Fk);
        return kk.textBaseline = Ik, Xk
      },
      justifyLine: function(kk, Fk, Ik, Xk, Tk) {
        const ik = Fk.trim(),
          yk = kk.measureText(ik).width,
          lk = ik.split(/\s+/).length - 1,
          ak = Math.floor((Tk - yk) / Ik);
        if (lk <= 0 || ak <= 0) return ik;
        const qk = Math.floor(ak / lk);
        let Lk = ak - lk * qk,
          tk = [];
        for (let Zk = 0; Zk < qk; Zk++) tk.push(Xk);
        tk = tk.join("");
        return ik.replace(/\s+/g, (kk => {
          const Fk = Lk > 0 ? tk + Xk : tk;
          return Lk--, kk + Fk
        }))
      }
    }
  },
  39129: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return Fk.set(kk), Fk
    }
    Ik.d(Fk, {
      c: () => Xk
    })
  },
  38656: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => wk,
      d: () => ek,
      h: () => Zk,
      k: () => Lk,
      n: () => tk
    });
    var Xk = Ik(4210),
      Tk = Ik(337);
    const ik = 1024,
      yk = 1536,
      lk = 2 * Xk.i + 1,
      ak = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      qk = 1.5;

    function Lk(kk, Fk, Ik) {
      if ("string" !== typeof kk) return Fk;
      try {
        const Ik = JSON.parse(kk);
        return Ik && "object" === typeof Ik ? Ik : Fk
      } catch (Xk) {
        return void 0 !== Ik && console.error(`Couldn't parse ${Ik}`, Xk), Fk
      }
    }

    function tk(kk) {
      return Lk(kk, null, "a leaderboard's rows")
    }

    function Zk(kk, Fk) {
      var Ik, Xk;
      return null !== Fk && void 0 !== Fk ? Fk : {
        status: null !== (Ik = kk.status) && void 0 !== Ik ? Ik : "loading",
        entries: null !== (Xk = kk.entries) && void 0 !== Xk ? Xk : []
      }
    }

    function jk(kk, Fk) {
      return "number" === typeof kk && Number.isFinite(kk) && kk > 0 ? kk : Fk
    }

    function ek(kk, Fk) {
      const Ik = jk(kk.size, 1);
      let Xk = jk(kk.width, jk(2.5 * Ik, 2.5)),
        Tk = jk(kk.height, jk(3.75 * Ik, 3.75));
      Number.isFinite(ik * Tk / Xk) && Number.isFinite(yk * Xk / Tk) || (Xk = 2.5, Tk = 3.75);
      const lk = Tk / Xk,
        ak = Math.max(1, Math.min(ik, Fk / lk));
      return {
        width: Xk,
        height: Tk,
        layoutWidth: Math.max(ik, yk / lk),
        layoutHeight: Math.max(yk, ik * lk),
        pixelWidth: Math.round(ak),
        pixelHeight: Math.round(Math.max(1, Math.min(Fk, ak * lk)))
      }
    }

    function wk(kk, Fk, Ik, yk, Lk, tk) {
      kk.setTransform(1, 0, 0, 1, 0, 0), kk.fillStyle = Tk.J.defaultNameTagBackground, kk.fillRect(0, 0, Fk, Ik), kk.scale(Fk / yk.layoutWidth, Ik / yk.layoutHeight), kk.translate((yk.layoutWidth - ik) / 2, 0),
        function(kk, Fk, Ik, ik) {
          var yk, Lk, tk, Zk;
          const {
            top: jk,
            around: ek,
            showPlayerText: wk,
            localPlayerDbId: xk
          } = Ik, {
            whiteUiText: Pk,
            grayUiText: Kk,
            yellowUiText: Qk
          } = Tk.J;
          kk.textBaseline = "middle";
          const sk = function(Fk, Ik, Xk, Tk, ik, yk) {
              let lk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              kk.font = `bold ${Tk}px 'Jetbrains Mono', monospace`, kk.fillStyle = ik, kk.textAlign = lk;
              let ak = Fk.replace(/[\r\n\t]/g, " ");
              if (kk.measureText(ak).width > yk) {
                for (; ak.length > 0 && kk.measureText(`${ak}\u2026`).width > yk;) ak = ak.slice(0, -1);
                ak += "\u2026"
              }
              kk.fillText(ak, Ik, Xk)
            },
            Vk = Fk => {
              kk.fillStyle = Pk, kk.globalAlpha = .15, kk.fillRect(24, Fk, 976, 2), kk.globalAlpha = 1
            },
            zk = null === xk ? null : (0, Tk.yc)(xk),
            Sk = kk => null !== zk && kk.playerHash === zk,
            vk = Hk(jk.entries, Xk.k),
            Ek = "ready" === jk.status && vk.length > 0,
            Ok = null === ek ? [] : Hk(ek.entries, lk),
            nk = vk.some(Sk),
            Gk = null === ek ? null : function(kk) {
              const Fk = kk;
              if (!Fk || !Number.isFinite(Fk.rank) || !Number.isFinite(Fk.tied) || !Number.isFinite(Fk.total)) return null;
              return Fk
            }(ek.standing),
            pk = Ok.find(Sk),
            uk = vk.find(Sk),
            bk = null === Gk || void 0 === pk ? null : {
              value: pk.value,
              rank: Gk.rank
            },
            Rk = Jk(vk, void 0 === uk || uk.value === (null === bk || void 0 === bk ? void 0 : bk.value) ? bk : null),
            Uk = Jk(Ok, bk),
            Ck = (kk, Fk) => {
              const Ik = kk.findIndex(Sk);
              return Ik >= 0 ? Fk[Ik] : null
            },
            Nk = null !== (yk = null !== (Lk = null === Gk || void 0 === Gk ? void 0 : Gk.rank) && void 0 !== Lk ? Lk : Ck(Ok, Uk)) && void 0 !== yk ? yk : Ck(vk, Rk);
          kk.font = "bold 34px 'Jetbrains Mono', monospace";
          const ck = [...Ek ? Rk : [], ...nk ? [] : Uk],
            Wk = Math.min(280, Math.max(0, ...ck.map((Fk => kk.measureText(ak.format(Fk)).width)))),
            fk = Wk <= 80,
            Bk = fk ? 80 : 32 + Wk,
            dk = fk ? 148 : Bk + 28,
            Yk = 660 - dk;
          sk(`TOP ${Xk.k}  /  ALL TIME`, 24, 52, 28, Kk, 976), sk(wk ? String(null !== (tk = Fk.title) && void 0 !== tk ? tk : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Pk, 976), sk("RANK", 32, 174, 28, Kk, dk - 40), sk("PLAYER", dk, 174, 28, Kk, Yk), sk(wk ? String(null !== (Zk = Fk.scoreLabel) && void 0 !== Zk ? Zk : "Score").slice(0, 24) : "Score", 992, 174, 28, Kk, 304, "right"), Vk(202);
          const Ak = (ik - 232) / (Xk.k + qk + lk),
            gk = 208 + Xk.k * Ak,
            mk = gk + qk * Ak,
            hk = (Fk, Ik, Xk, Tk) => {
              const ik = Sk(Fk);
              kk.fillStyle = ik ? Qk : Pk, kk.globalAlpha = ik ? .15 : Tk ? .035 : 0, kk.fillRect(24, Xk - Ak / 2 + 1, 976, Ak - 2), kk.globalAlpha = 1;
              const yk = ik ? Qk : Pk;
              sk(ak.format(Ik), Bk, Xk, 34, yk, fk ? 80 : Wk, fk ? "center" : "right"), sk(wk ? String(Fk.name).slice(0, 64) : "Player", dk, Xk, 34, yk, Yk);
              const lk = ak.format(Fk.value);
              sk(kk.measureText(lk).width > 304 ? Fk.value.toExponential(6) : lk, 992, Xk, 34, yk, 304, "right")
            };
          if (Ek)
            for (const [Xk, Tk] of vk.entries()) hk(Tk, Rk[Xk], 208 + (Xk + .5) * Ak, Xk % 2 === 0);
          else {
            const kk = "error" === jk.status,
              Fk = kk ? "Couldn't load leaderboard" : "ready" === jk.status ? "No scores yet" : "Loading leaderboard\u2026",
              Ik = kk ? "Trying again shortly" : "ready" === jk.status ? "Be the first on the board!" : "Fetching the top players",
              Xk = (208 + gk) / 2;
            sk(Fk, 512, Xk - 28, 40, kk ? Tk.J.redUiText : Pk, 960, "center"), sk(Ik, 512, Xk + 27, 30, Kk, 960, "center")
          }
          const rk = gk + qk * Ak / 2;
          if (null === Nk) Vk(rk);
          else {
            const Fk = null === Gk ? 0 : Gk.tied - 1,
              Ik = `YOUR RANK #${ak.format(Nk)}${null===Gk?"":` of ${ak.format(Gk.total)}`}`;
            kk.font = "bold 36px 'Jetbrains Mono', monospace";
            const Xk = Math.max(20, Math.min(36, Math.floor(34560 / kk.measureText(Ik).width)));
            sk(Ik, 512, rk - (Fk > 0 ? 15 : 0), Xk, Qk, 960, "center"), Fk > 0 && sk(`Tied with ${ak.format(Fk)} other${1===Fk?"":"s"}`, 512, rk + 24, 24, Kk, 960, "center")
          }
          if (null === ek) return;
          const Dk = mk + lk * Ak / 2;
          if (nk) sk(`You're in the top ${Xk.k}!`, 512, Dk, 40, Qk, 960, "center");
          else if (0 === Ok.length) sk("You're not on this board yet", 512, Dk, 34, Kk, 960, "center");
          else
            for (const [Xk, Tk] of Ok.entries()) hk(Tk, Uk[Xk], mk + (Xk + .5) * Ak, Xk % 2 === 0)
        }(kk, Lk, tk, yk.layoutHeight)
    }

    function Hk(kk, Fk) {
      return Array.isArray(kk) ? kk.slice(0, Fk).filter((kk => kk && Number.isFinite(kk.rank) && Number.isFinite(kk.value))) : []
    }

    function Jk(kk, Fk) {
      const Ik = [];
      let Xk = !1;
      return kk.forEach(((Tk, ik) => {
        if (null !== Fk && Tk.value === Fk.value) return void Ik.push(Fk.rank);
        const yk = ik > 0 && Tk.value === kk[ik - 1].value;
        yk || (Xk = 0 === ik && 1 !== Tk.rank), Ik.push(yk && !Xk ? Ik[ik - 1] : Tk.rank)
      })), Ik
    }
  },
  38868: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      g: () => ik
    });
    const Xk = 32;

    function Tk(kk) {
      return Array.from(kk).length
    }

    function ik(kk) {
      const Fk = [""];
      let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Tk = "";
      const ik = () => {
        Fk.push(""), Ik = 0, Tk = ""
      };
      for (const yk of kk.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(yk)) ik();
        else if (/^\s+$/.test(yk)) Tk += yk;
      else if (yk.length > 0) {
        const kk = Array.from(yk);
        Ik > 0 && Ik + Tk.length + kk.length > Xk && ik(), Fk[Fk.length - 1] += Tk, Ik += Tk.length, Tk = "";
        for (const Tk of kk) Ik >= Xk && ik(), Fk[Fk.length - 1] += Tk, Ik++
      }
      return Fk[Fk.length - 1] += Tk, Fk
    }
  },
  39121: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(36624),
      Tk = Ik.n(Xk);
    const ik = [1, 1, 1];

    function yk(kk) {
      if (!kk) return [...ik];
      try {
        const [Fk, Ik, Xk] = Tk()(kk).rgb().array();
        return [Fk / 255, Ik / 255, Xk / 255]
      } catch (Fk) {
        return console.warn(`Invalid groundArrowPath colour "${kk}":`, Fk), [...ik]
      }
    }
  },
  39230: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => lk,
      f: () => qk,
      j: () => ak
    });
    var Xk = Ik(293),
      Tk = Ik(2830);
    const ik = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      yk = 512;

    function lk(kk) {
      var Fk;
      const Ik = Math.min(screen.width, screen.height) * (null !== (Fk = (0, Xk.b)()) && void 0 !== Fk ? Fk : (0, Tk.m)());
      return Math.max(window.innerHeight * (0, Tk.m)(), Ik) / (0, Tk.n)(kk)
    }

    function ak(kk, Fk, Ik) {
      return Fk / (2 * Math.tan(Ik / 2)) > yk ? kk : qk(kk)
    }

    function qk(kk) {
      return kk.map((kk => kk.replace(ik, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34008: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      h: () => lk,
      l: () => yk,
      n: () => Tk,
      q: () => Xk
    });
    const Xk = {
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
      Tk = "/textures/dayNight/sun.png",
      ik = "/textures/dayNight/moon.png",
      yk = "/textures/dayNight/stars",
      lk = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39201: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Lk,
      f: () => tk,
      j: () => Xk,
      k: () => ak,
      m: () => Tk,
      q: () => qk,
      u: () => lk,
      y: () => yk
    });
    const Xk = ["linear", "easeIn", "easeOut", "easeInOut"],
      Tk = ["movement", "camera", "cursor"],
      ik = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function yk(kk, Fk) {
      return lk(kk, Fk, ik)
    }

    function lk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (kk === Fk || Number.isNaN(kk) && Number.isNaN(Fk)) return !0;
      if ("object" !== typeof kk || "object" !== typeof Fk || null === kk || null === Fk || Array.isArray(kk) !== Array.isArray(Fk)) return !1;
      const Xk = kk,
        Tk = Fk;
      for (const ik of new Set([...Object.keys(Xk), ...Object.keys(Tk)]))
        if (!Ik.includes(ik) && !lk(Xk[ik], Tk[ik])) return !1;
      return !0
    }
    const ak = {
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
      qk = "^-[1-9][0-9]*$",
      Lk = "^#[0-9a-fA-F]{6}$",
      tk = "#000000"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);