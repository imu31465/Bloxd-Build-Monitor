export const id = 200;
export const ids = [200];
export const modules = {
  38753: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk
    });
    class Rk {
      constructor(kk, Fk) {
        this.read = kk, this.apply = Fk, this.release = null
      }
      turn(kk, Fk) {
        const Bk = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: Fk,
          forcedCameraDirection: [kk[0], kk[1], kk[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), Fk + 100),
          transitionMs: Bk
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
  38290: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      d: () => tk
    });
    const Rk = new Map;

    function tk(kk, Fk) {
      Rk.set(kk, Fk)
    }

    function ak(kk) {
      return kk ? Rk.get(kk) : void 0
    }
  },
  39177: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk
    });
    var Rk = Bk(37865);

    function tk(kk, Fk, Bk) {
      var tk, ak, Xk, bk, wk, dk, sk;
      const Vk = (0, Rk.b)(kk, Fk, Bk[0], Bk[1], Bk[2]),
        Jk = Vk ? null !== (tk = Vk.textCell) && void 0 !== tk ? tk : Vk.rect.anchor : Bk,
        Ak = Fk(Jk[0], Jk[1], Jk[2]);
      return {
        pos: [Bk[0], Bk[1], Bk[2]],
        noticeboardSpan: Vk && {
          width: Vk.rect.width,
          height: Vk.rect.height
        },
        text: null !== (ak = null === Ak || void 0 === Ak || null === (Xk = Ak.persisted) || void 0 === Xk || null === (bk = Xk.shared) || void 0 === bk ? void 0 : bk.text) && void 0 !== ak ? ak : "",
        textSize: null !== (wk = null === Ak || void 0 === Ak || null === (dk = Ak.persisted) || void 0 === dk || null === (sk = dk.shared) || void 0 === sk ? void 0 : sk.textSize) && void 0 !== wk ? wk : null
      }
    }
  },
  38146: (kk, Fk, Bk) => {
    function Rk(kk) {
      switch (kk.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    Bk.d(Fk, {
      c: () => tk,
      d: () => ak,
      f: () => Rk
    });
    const tk = 4,
      ak = 3
  },
  38768: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      d: () => ak
    });
    var Rk = Bk(291);
    const tk = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class ak {
      constructor(kk) {
        this.importGame = kk, this.loads = new Map, this.loaded = new Map
      }
      load(kk) {
        const Fk = (0, Rk.Vb)(kk);
        if (!tk.has(Fk)) return Promise.resolve(void 0);
        let Bk = this.loads.get(Fk);
        return Bk || (Bk = this.importGame(Fk).then((kk => {
          const Bk = kk.default;
          if ("function" !== typeof Bk) throw new Error(`${Fk}'s client code has no default-exported factory`);
          return this.loaded.set(Fk, Bk), Bk
        })).catch((kk => {
          throw this.loads.delete(Fk), kk
        })), this.loads.set(Fk, Bk)), Bk
      }
      loadedFactory(kk) {
        const Fk = (0, Rk.Vb)(kk);
        if (!tk.has(Fk)) return;
        const Bk = this.loaded.get(Fk);
        if (!Bk) throw new Error(`${Fk}'s client code started before it loaded`);
        return Bk
      }
    }
  },
  39181: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(9169),
      tk = Bk(9022),
      ak = Bk(3090);

    function Xk(kk) {
      if (kk === Rk.c) return 0;
      const Fk = (0, ak.c)(kk);
      if (void 0 !== Fk && Fk <= tk.MAX_BLOCK_ID) return Fk;
      const Bk = (0, ak.c)(kk.split("|")[0]);
      if (void 0 !== Bk && Bk <= tk.MAX_BLOCK_ID && (0, tk.rootMetaDescOf)(Bk) === kk) return Bk;
      throw new Error(`Invalid block name. You sent ${kk}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38812: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk
    });
    var Rk = Bk(22);
    class tk {
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
        this.hidesHud !== kk && (this.hidesHud = kk, Rk.c.set({
          isUiHiddenByCamera: kk
        }))
      }
    }
  },
  38781: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      B: () => bk,
      F: () => sk,
      c: () => Rk,
      f: () => Jk,
      h: () => Vk,
      k: () => Xk,
      o: () => ek,
      p: () => wk,
      t: () => yk,
      x: () => dk
    });
    const Rk = Math.PI / 2 - .001,
      tk = 2 * Math.PI,
      ak = 1e-9;

    function Xk(kk, Fk) {
      Fk.heading = kk.heading, Fk.pitch = kk.pitch
    }

    function bk(kk, Fk) {
      const Bk = Fk - kk;
      return Bk - tk * Math.floor((Bk + Math.PI) / tk)
    }

    function wk(kk, Fk, Bk) {
      return kk + bk(kk, Fk) * Bk
    }

    function dk(kk) {
      if (!Number.isFinite(kk)) return kk;
      const Fk = kk - tk * Math.floor(kk / tk);
      return Fk < tk ? Fk : 0
    }

    function sk(kk, Fk) {
      return kk + bk(kk, Fk)
    }

    function Vk(kk) {
      return Math.max(-Rk, Math.min(Rk, kk))
    }

    function Jk(kk, Fk, Bk) {
      const Rk = Math.cos(Fk);
      return Bk[0] = Rk * Math.sin(kk), Bk[1] = -Math.sin(Fk), Bk[2] = Rk * Math.cos(kk), Bk
    }

    function Ak(kk, Fk, Bk, Rk) {
      const tk = Math.sqrt(kk * kk + Bk * Bk);
      return tk < ak && Math.abs(Fk) < ak || (tk >= ak && (Rk.heading = Math.atan2(kk, Bk)), Rk.pitch = Vk(Math.atan2(-Fk, tk) + 0)), Rk
    }

    function ek(kk, Fk) {
      return Ak(kk[0], kk[1], kk[2], Fk)
    }

    function yk(kk, Fk, Bk) {
      return Ak(Fk[0] - kk[0], Fk[1] - kk[1], Fk[2] - kk[2], Bk)
    }
  },
  38809: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak,
      c: () => tk
    });
    var Rk = Bk(38781);

    function tk(kk) {
      var Fk;
      const Bk = "default" === kk.mode ? "movement" : null !== (Fk = kk.playerFacing) && void 0 !== Fk ? Fk : "movement";
      return "cursor" === Bk ? {
        facing: Bk,
        mouseTurns: null
      } : {
        facing: Bk,
        mouseTurns: "default" !== kk.mode && void 0 !== kk.playerLook ? "look" : "view"
      }
    }

    function ak(kk, Fk, Bk, tk, ak, Xk) {
      return Xk.ZE = 0, Xk.pE = 0, Xk.pointedAt = void 0, void 0 !== tk ? ak ? (Xk.pointedAt = tk, kk) : (0, Rk.x)(tk.heading) : ak ? (Xk.ZE = Fk, Xk.pE = Bk, kk) : (0, Rk.x)(kk + Fk)
    }
  },
  38790: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ck
    });
    var Rk = Bk(38799),
      tk = Bk(38781),
      ak = Bk(36667);

    function Xk(kk, Fk, Bk, Rk) {
      if (!(Rk > 0)) return Fk;
      const tk = Fk > kk ? Math.min(Fk, kk + Bk / Rk) : Math.max(Fk, kk - Bk / Rk);
      return Math.abs(Fk - tk) < 1e-9 ? Fk : tk
    }
    class bk {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Rk.e,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(kk) {
        !this.isGoingOut() && this.sinceTurnMs < Rk.m.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: kk
        } : (this.waiting = null, this.startOut(kk))
      }
      fadeIn(kk) {
        this.isGoingOut() ? this.sinceTurnMs < Rk.m.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: kk
        } : (this.waiting = null, this.startIn(kk)) : this.waiting = null
      }
      advance(kk) {
        const Fk = this.waiting;
        if (null === Fk) return this.step(kk);
        const Bk = Rk.m.minFadeTurnMs - this.sinceTurnMs;
        if (Bk > kk) return this.step(kk);
        const tk = this.step(Bk);
        return this.waiting = null, "out" === Fk.turn ? this.startOut(Fk.transition) : this.startIn(Fk.minMs), this.step(kk - Bk) || tk
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(kk) {
        ("in" === this.phase || null === this.phase && this.clearMs < Rk.m.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = kk.colour), this.outMs = kk.outMs, this.holdMs = kk.holdMs, this.inMs = kk.inMs
      }
      startIn(kk) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(kk, this.inMs)
      }
      step(kk) {
        const Fk = this.screen;
        this.sinceTurnMs += kk, null === this.phase && (this.clearMs += kk);
        let Bk = !1,
          tk = kk;
        if ("out" === this.phase) {
          const Rk = (1 - Fk.alpha) * this.outMs;
          if (Fk.alpha = Xk(Fk.alpha, 1, kk, this.outMs), Fk.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, tk = Math.max(0, kk - Rk), Bk = !0
        }
        let ak = kk;
        if ("hold" === this.phase) {
          this.heldMs += tk;
          const kk = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - Rk.m.minFadeTurnMs);
          if (kk < 0 || Bk) return Bk;
          this.phase = "in", this.sinceTurnMs = kk, ak = kk
        }
        return "in" === this.phase && (Fk.alpha = Xk(Fk.alpha, 0, ak, this.inMs), Fk.alpha <= 0 && (this.phase = null, this.clearMs = 0)), Bk
      }
    }
    var wk = Bk(38777),
      dk = Bk(38806),
      sk = Bk(1808),
      Vk = Bk(36304);

    function Jk(kk, Fk) {
      for (let Bk = 0; Bk < Fk.length; Bk++) Fk[Bk] = kk[Bk]
    }

    function Ak(kk, Fk) {
      var Bk;
      return null !== (Bk = kk.fov) && void 0 !== Bk ? Bk : Fk.getDefaultFov()
    }

    function ek(kk, Fk, Bk, Rk, tk) {
      const ak = 2 / Rk,
        Xk = Math.exp(-ak * tk);
      for (let bk = 0; bk < kk.length; bk++) {
        const Rk = kk[bk] - Bk[bk],
          wk = (Fk[bk] + ak * Rk) * tk;
        kk[bk] = Bk[bk] + (Rk + wk) * Xk, Fk[bk] = (Fk[bk] - ak * wk) * Xk
      }
    }
    class yk {
      constructor(kk, Fk, Bk, Rk) {
        var ak, Xk, bk, wk, dk;
        this.settings = kk, this.iJ = Fk, this.targets = Bk, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.bs = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, tk.x)((0, sk.k)(null !== (ak = kk.viewHeading) && void 0 !== ak ? ak : 0)),
          pitch: (0, tk.h)((0, sk.k)(null !== (Xk = kk.viewElevation) && void 0 !== Xk ? Xk : 45))
        }, this.closestDistance = null !== (bk = kk.closestDistance) && void 0 !== bk ? bk : Math.min(6, null !== (wk = kk.furthestDistance) && void 0 !== wk ? wk : 1 / 0), this.furthestDistance = null !== (dk = kk.furthestDistance) && void 0 !== dk ? dk : Math.max(64, this.closestDistance);
        const Vk = (0, tk.f)(this.base.heading, this.base.pitch, this.forward),
          Jk = Rk.position,
          Ak = this.closestDistance;
        this.goal = [Jk[0] + Vk[0] * Ak, Jk[1] + Vk[1] * Ak, Jk[2] + Vk[2] * Ak, Ak, this.base.heading, this.base.pitch]
      }
      update(kk, Fk, Bk) {
        var Rk, ak;
        this.placeGoal(null !== (Rk = this.settings.fov) && void 0 !== Rk ? Rk : this.iJ.getBaseFov()), this.goal[4] = (0, tk.F)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Xk = null !== (ak = this.settings.smoothMs) && void 0 !== ak ? ak : 400;
        !this.started || Xk < 1 ? (Jk(this.goal, this.smoothed), this.bs.fill(0), this.started = !0) : ek(this.smoothed, this.bs, this.goal, Xk, kk), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, tk.h)(this.smoothed[5]), Fk.apply(this.angles, Bk);
        const bk = (0, tk.f)(Bk.heading, Bk.pitch, this.forward);
        for (let tk = 0; tk < 3; tk++) Bk.position[tk] = this.smoothed[tk] - bk[tk] * this.smoothed[3];
        Bk.fov = Ak(this.settings, this.iJ)
      }
      continueFrom(kk) {
        kk instanceof yk && (Jk(kk.goal, this.goal), Jk(kk.smoothed, this.smoothed), Jk(kk.bs, this.bs), this.framedTargets = kk.framedTargets, this.started = kk.started)
      }
      reset() {
        this.bs.fill(0), this.started = !1
      }
      placeGoal(kk) {
        var Fk;
        let Bk = 0;
        for (const sk of this.settings.targets) {
          const kk = this.targets.currentAimPoint(sk);
          kk && (0, wk.h)(kk, this.pointAt(Bk++))
        }
        if (Bk > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const kk = this.targets.aimPoint(this.iJ.localPlayerId);
          kk && (0, wk.h)(kk, this.pointAt(Bk++))
        }
        const Rk = this.goal;
        if (0 === Bk) return void(Rk[3] = this.withinDistances(Rk[3]));
        for (let wk = 0; wk < 3; wk++) {
          let kk = 1 / 0,
            Fk = -1 / 0;
          for (let Rk = 0; Rk < Bk; Rk++) kk = Math.min(kk, this.points[Rk][wk]), Fk = Math.max(Fk, this.points[Rk][wk]);
          Rk[wk] = (kk + Fk) / 2
        }
        let tk = 0;
        for (let wk = 0; wk < Bk; wk++) {
          const kk = this.points[wk];
          tk = Math.max(tk, Math.hypot(kk[0] - Rk[0], kk[1] - Rk[1], kk[2] - Rk[2]))
        }
        const ak = Math.tan((0, sk.k)(kk) / 2),
          Xk = Math.atan(ak * (!0 === this.settings.letterbox ? Vk.e : 1)),
          bk = Math.atan(ak * this.iJ.getAspectRatio()),
          dk = (tk + (null !== (Fk = this.settings.padding) && void 0 !== Fk ? Fk : 2)) / Math.sin(Math.min(Xk, bk));
        Rk[3] = this.withinDistances(dk)
      }
      withinDistances(kk) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, kk))
      }
      pointAt(kk) {
        return kk === this.points.length && this.points.push([0, 0, 0]), this.points[kk]
      }
    }
    class fk {
      constructor(kk) {
        this.limits = kk, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(kk) {
        this.limits && (this.yawOffset = kk.yawOffset, this.pitchOffset = kk.pitchOffset, this.idleMs = kk.idleMs)
      }
      update(kk, Fk) {
        const Bk = this.limits;
        if (!Bk) return;
        const Rk = Number.isFinite(Fk.ZE) ? Fk.ZE : 0,
          tk = Number.isFinite(Fk.pE) ? Fk.pE : 0;
        if (Fk.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: Fk.pointedAt.heading,
          pitch: Fk.pointedAt.pitch
        };
        else if (0 !== Rk || 0 !== tk) this.idleMs = 0, this.yawOffset += Rk, this.pitchOffset += tk;
        else {
          const Fk = Math.max(0, this.idleMs + kk - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += kk, void 0 !== Bk.returnMs && Fk > 0) {
            const kk = Bk.returnMs > 0 ? Math.exp(-3 * Fk / Bk.returnMs) : 0;
            this.yawOffset *= kk, this.pitchOffset *= kk
          }
        }
        this.clampOffsets(Bk)
      }
      clampOffsets(kk) {
        if (kk.maxYaw >= 180) this.yawOffset = (0, tk.B)(0, this.yawOffset);
        else {
          const Fk = (0, sk.k)(kk.maxYaw);
          this.yawOffset = Math.max(-Fk, Math.min(Fk, this.yawOffset))
        }
        const Fk = (0, sk.k)(kk.maxPitch);
        this.pitchOffset = Math.max(-Fk, Math.min(Fk, this.pitchOffset))
      }
      apply(kk, Fk) {
        this.pointedAt && this.limits && (this.yawOffset = (0, tk.B)(kk.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - kk.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const Bk = (0, tk.h)(kk.pitch + this.pitchOffset);
        this.pitchOffset = Bk - kk.pitch, Fk.heading = (0, tk.x)(kk.heading + this.yawOffset), Fk.pitch = Bk
      }
      unapply(kk, Fk) {
        Fk.heading = (0, tk.x)(kk.heading - this.yawOffset), Fk.pitch = (0, tk.h)(kk.pitch - this.pitchOffset)
      }
    }
    const mk = 1e-6;

    function Wk(kk) {
      return Math.sqrt(kk[0] * kk[0] + kk[1] * kk[1] + kk[2] * kk[2])
    }

    function vk(kk, Fk, Bk, Rk, tk) {
      const ak = tk * tk,
        Xk = ak * tk;
      return (2 * Xk - 3 * ak + 1) * kk + (Xk - 2 * ak + tk) * Fk + (-2 * Xk + 3 * ak) * Bk + (Xk - ak) * Rk
    }

    function ik(kk, Fk, Bk, Rk, tk) {
      const ak = tk * tk;
      return (6 * ak - 6 * tk) * kk + (3 * ak - 4 * tk + 1) * Fk + (-6 * ak + 6 * tk) * Bk + (3 * ak - 2 * tk) * Rk
    }

    function Yk(kk, Fk) {
      const Bk = Fk[0] - kk[0],
        Rk = Fk[1] - kk[1],
        tk = Fk[2] - kk[2];
      return Math.sqrt(Bk * Bk + Rk * Rk + tk * tk)
    }

    function Lk(kk, Fk, Bk, Rk, tk, ak) {
      for (let Xk = 0; Xk < 3; Xk++) ak[Xk] = tk ? kk[Xk] * Rk : Bk[Xk] - Fk[Xk];
      return tk && function(kk, Fk) {
        const Bk = Wk(kk);
        if (Bk > Fk) {
          const Rk = Fk / Bk;
          kk[0] *= Rk, kk[1] *= Rk, kk[2] *= Rk
        }
      }(ak, 3 * Yk(Fk, Bk)), ak
    }

    function Ok(kk, Fk, Bk, Rk) {
      for (let tk = 0; tk < 3; tk++) Rk[tk] = 6 * (Fk[tk] - kk[tk]) - 2 * Bk[tk];
      if (Wk(Rk) < mk)
        for (let tk = 0; tk < 3; tk++) Rk[tk] = Fk[tk] - kk[tk];
      return Rk
    }

    function Ek(kk, Fk) {
      return [2 * Fk[0] - kk[0], 2 * Fk[1] - kk[1], 2 * Fk[2] - kk[2]]
    }

    function Sk(kk, Fk, Bk, Rk, tk, ak, Xk) {
      if (!ak && !Xk) return 0;
      const bk = ak ? kk : 2 * Fk - Bk,
        wk = Xk ? Bk : 2 * Fk - kk,
        dk = ak ? Rk : tk,
        sk = Xk ? tk : Rk,
        Vk = (Fk - bk) / dk,
        Jk = (wk - Fk) / sk;
      if (Vk * Jk <= 0) return 0;
      const Ak = (wk - bk) / (dk + sk),
        ek = 3 * Math.min(Math.abs(Vk), Math.abs(Jk));
      return Math.max(-ek, Math.min(ek, Ak))
    }

    function Nk(kk, Fk, Bk, Rk, tk, ak, Xk) {
      const {
        u: bk,
        segmentMs: wk
      } = kk;
      if (!kk.curved) return Bk + (Rk - Bk) * bk;
      return vk(Bk, Sk(Fk, Bk, Rk, kk.beforeMs, wk, ak, !0) * wk, Rk, Sk(Bk, Rk, tk, wk, kk.afterMs, !0, Xk) * wk, bk)
    }

    function Hk(kk) {
      return Math.abs(kk.pitch) >= tk.c
    }
    class uk {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.nodes = kk, this.prevNodes = Bk, this.nextNodes = Rk, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = kk.map(((kk, Bk) => this.nodeTangent(Fk, tk, Bk)))
      }
      sample(kk, Fk, Bk) {
        const {
          index: Rk,
          toIndex: ak,
          segmentMs: Xk,
          curved: bk
        } = kk, wk = this.fromAngles, dk = this.toAngles, sk = this.nodeAngles(Rk, Bk.position, Fk, wk), Vk = this.nodeAngles(ak, Bk.position, Fk, dk);
        if (Xk > 0 && "aim" !== sk && "aim" !== Vk && this.liveTangent(kk, wk)) return Bk.heading = (0, tk.x)(wk.heading), void(Bk.pitch = wk.pitch);
        if ("none" === sk && "none" === Vk) return;
        !bk && Xk > 0 && ("tangent" === sk && this.liveTangent(kk, wk), "tangent" === Vk && this.liveTangent(kk, dk)), "none" === sk ? (0, tk.k)(dk, wk) : "none" === Vk && (0, tk.k)(wk, dk);
        const Jk = bk && kk.beforeIndex >= 0 && "none" !== this.nodeAngles(kk.beforeIndex, Bk.position, Fk, this.beforeAngles),
          Ak = bk && kk.afterIndex >= 0 && "none" !== this.nodeAngles(kk.afterIndex, Bk.position, Fk, this.afterAngles),
          ek = (0, tk.F)(wk.heading, dk.heading),
          yk = Nk(kk, Jk ? (0, tk.F)(wk.heading, this.beforeAngles.heading) : 0, wk.heading, ek, Ak ? (0, tk.F)(ek, this.afterAngles.heading) : 0, Jk, Ak);
        Bk.heading = (0, tk.x)(yk), Bk.pitch = (0, tk.h)(Nk(kk, this.beforeAngles.pitch, wk.pitch, dk.pitch, this.afterAngles.pitch, Jk, Ak))
      }
      nodeAngles(kk, Fk, Bk, Rk) {
        const tk = this.rawNodeAngles(kk, Fk, Bk, Rk);
        return "none" !== tk && Hk(Rk) && !this.borrowHeading(this.prevNodes[kk], Fk, Bk, Rk) && this.borrowHeading(this.nextNodes[kk], Fk, Bk, Rk), tk
      }
      borrowHeading(kk, Fk, Bk, Rk) {
        const tk = this.borrowedAngles;
        return !(kk < 0 || "none" === this.rawNodeAngles(kk, Fk, Bk, tk) || Hk(tk)) && (Rk.heading = tk.heading, !0)
      }
      rawNodeAngles(kk, Fk, Bk, Rk) {
        const ak = this.nodes[kk].keyframe;
        if (ak.lookDirection) return (0, tk.o)(ak.lookDirection, Rk), "aim";
        if (void 0 !== ak.lookAt) {
          const kk = Bk(ak.lookAt);
          if (kk) return (0, tk.t)(Fk, kk, Rk), "aim"
        }
        const Xk = this.tangents[kk];
        return Xk ? ((0, tk.k)(Xk, Rk), "tangent") : "none"
      }
      liveTangent(kk, Fk) {
        const Bk = this.nodes[kk.index].position,
          Rk = this.nodes[kk.toIndex].position,
          ak = this.derivative;
        for (let tk = 0; tk < 3; tk++) ak[tk] = ik(Bk[tk], kk.fromTangent[tk], Rk[tk], kk.toTangent[tk], kk.u);
        return Wk(ak) > 1e-9 ? ((0, tk.o)(ak, Fk), !0) : !(Yk(Bk, Rk) < mk) && ((0, tk.o)(Ok(Bk, Rk, kk.u < .5 ? kk.toTangent : kk.fromTangent, ak), Fk), !0)
      }
      nodeTangent(kk, Fk, Bk) {
        var Rk;
        const ak = kk[Bk];
        if (Wk(ak) > 1e-9) return (0, tk.o)(ak, {
          heading: 0,
          pitch: 0
        });
        const Xk = null !== (Rk = this.restDirectionTo(Bk, Bk + 1, kk, Fk)) && void 0 !== Rk ? Rk : this.restDirectionTo(Bk, Bk - 1, kk, Fk);
        return Xk ? (0, tk.o)(Xk, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(kk, Fk, Bk, Rk) {
        const tk = this.nodes[kk],
          ak = this.nodes[Fk];
        if (!ak || Yk(tk.position, ak.position) < mk) return null;
        const [Xk, bk] = Fk > kk ? [tk, ak] : [ak, tk], wk = Lk(Bk[Fk], Xk.position, bk.position, bk.timeMs - Xk.timeMs, Rk, [0, 0, 0]);
        return Ok(Xk.position, bk.position, wk, [0, 0, 0])
      }
    }

    function Mk(kk, Fk) {
      const Bk = kk.lookDirection || Fk.lookDirection ? function(kk, Fk) {
        if (!kk || !Fk) return kk === Fk;
        const Bk = Wk(kk),
          Rk = Wk(Fk);
        return Math.hypot(kk[0] / Bk - Fk[0] / Rk, kk[1] / Bk - Fk[1] / Rk, kk[2] / Bk - Fk[2] / Rk) < mk
      }(kk.lookDirection, Fk.lookDirection) : (Rk = kk.lookAt, tk = Fk.lookAt, "object" !== typeof Rk || "object" !== typeof tk ? Rk === tk : Yk(Rk, tk) < mk);
      var Rk, tk;
      return Yk(kk.position, Fk.position) < mk && kk.fov === Fk.fov && Bk
    }
    class gk {
      constructor(kk, Fk, Bk) {
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
        for (let ak = 1; ak < kk.length; ak++)
          if (!(kk[ak].timeMs > kk[ak - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = kk.map((kk => {
          var Fk;
          return {
            timeMs: kk.timeMs,
            position: [...kk.position],
            keyframe: kk,
            easing: (0, ak.l)(null !== (Fk = kk.easing) && void 0 !== Fk ? Fk : "linear")
          }
        }));
        const Rk = this.nodes[0],
          tk = this.nodes[this.nodes.length - 1],
          Xk = Bk && this.nodes.length > 1;
        Xk && !Mk(Rk.keyframe, tk.keyframe) && this.nodes.push({
          ...Rk,
          timeMs: tk.timeMs + (tk.timeMs - Rk.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Xk ? this.nodes[this.nodes.length - 1].timeMs - Rk.timeMs : 0, this.prevNodes = this.nodes.map(((kk, Fk) => this.neighbour(Fk, -1))), this.nextNodes = this.nodes.map(((kk, Fk) => this.neighbour(Fk, 1))), this.prevGaps = this.prevNodes.map(((kk, Fk) => kk >= 0 ? this.gapMs(Fk, -1) : 0)), this.nextGaps = this.nextNodes.map(((kk, Fk) => kk >= 0 ? this.gapMs(Fk, 1) : 0)), this.velocities = this.nodes.map(((kk, Fk) => {
          const Bk = this.prevNodes[Fk],
            Rk = this.nextNodes[Fk];
          return function(kk, Fk, Bk, Rk, tk, ak) {
            if (ak[0] = 0, ak[1] = 0, ak[2] = 0, !kk && !Bk) return ak;
            const Xk = null !== kk && void 0 !== kk ? kk : Ek(null !== Bk && void 0 !== Bk ? Bk : Fk, Fk),
              bk = null !== Bk && void 0 !== Bk ? Bk : Ek(null !== kk && void 0 !== kk ? kk : Fk, Fk),
              wk = kk ? Rk : tk,
              dk = Bk ? tk : Rk,
              sk = Yk(Xk, Fk),
              Vk = Yk(Fk, bk);
            if (sk < mk || Vk < mk) return ak;
            const Jk = Math.sqrt(sk),
              Ak = Math.sqrt(Vk),
              ek = (Jk + Ak) / (wk + dk);
            for (let yk = 0; yk < 3; yk++) {
              const kk = (Fk[yk] - Xk[yk]) / Jk - (bk[yk] - Xk[yk]) / (Jk + Ak) + (bk[yk] - Fk[yk]) / Ak;
              ak[yk] = kk * ek
            }
            return ak
          }(Bk >= 0 ? this.nodes[Bk].position : null, kk.position, Rk >= 0 ? this.nodes[Rk].position : null, this.prevGaps[Fk], this.nextGaps[Fk], [0, 0, 0])
        })), this.aim = new uk(this.nodes, this.velocities, this.prevNodes, this.nextNodes, Fk)
      }
      sample(kk, Fk, Bk, Rk) {
        const tk = this.findSegment(this.pathTime(kk));
        this.samplePosition(tk, Rk.position), this.aim.sample(tk, Fk, Rk);
        const {
          beforeIndex: ak,
          afterIndex: Xk
        } = tk;
        Rk.fov = Nk(tk, ak >= 0 ? this.fovAt(ak, Bk) : 0, this.fovAt(tk.index, Bk), this.fovAt(tk.toIndex, Bk), Xk >= 0 ? this.fovAt(Xk, Bk) : 0, ak >= 0, Xk >= 0)
      }
      pathTime(kk) {
        const Fk = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || kk <= Fk) return kk;
        const Bk = kk - Fk;
        return Fk + Bk - this.loopMs * Math.floor(Bk / this.loopMs)
      }
      findSegment(kk) {
        const Fk = this.nodes,
          Bk = this.segment;
        let Rk = Bk.index;
        for (kk < Fk[Rk].timeMs && (Rk = 0); Rk < Fk.length - 2 && Fk[Rk + 1].timeMs <= kk;) Rk++;
        const tk = Math.min(Rk + 1, Fk.length - 1),
          Xk = Fk[tk].timeMs - Fk[Rk].timeMs;
        return Bk.index = Rk, Bk.toIndex = tk, Bk.segmentMs = Xk, Bk.u = Xk > 0 ? (0, ak.k)((kk - Fk[Rk].timeMs) / Xk, Fk[Rk].easing) : 1, Bk.curved = this.smooth && Xk > 0, Bk.beforeIndex = this.prevNodes[Rk], Bk.afterIndex = this.nextNodes[tk], Bk.beforeMs = this.prevGaps[Rk], Bk.afterMs = this.nextGaps[tk], Bk
      }
      samplePosition(kk, Fk) {
        const {
          fromTangent: Bk,
          toTangent: Rk,
          curved: tk
        } = kk, ak = this.nodes[kk.index].position, Xk = this.nodes[kk.toIndex].position;
        Lk(this.velocities[kk.index], ak, Xk, kk.segmentMs, tk, Bk), Lk(this.velocities[kk.toIndex], ak, Xk, kk.segmentMs, tk, Rk);
        const bk = kk.u;
        for (let wk = 0; wk < 3; wk++) Fk[wk] = tk ? vk(ak[wk], Bk[wk], Xk[wk], Rk[wk], bk) : ak[wk] + (Xk[wk] - ak[wk]) * bk
      }
      fovAt(kk, Fk) {
        var Bk;
        return null !== (Bk = this.nodes[kk].keyframe.fov) && void 0 !== Bk ? Bk : Fk
      }
      neighbour(kk, Fk) {
        const Bk = this.nodes.length - 1,
          Rk = kk + Fk;
        return Rk >= 0 && Rk <= Bk ? Rk : this.loopMs <= 0 || Bk < 2 ? -1 : Rk < 0 ? Bk - 1 : 1
      }
      gapMs(kk, Fk) {
        const Bk = this.nodes.length - 1;
        if (1 === Fk) {
          const Fk = kk === Bk ? 0 : kk;
          return this.nodes[Fk + 1].timeMs - this.nodes[Fk].timeMs
        }
        const Rk = 0 === kk ? Bk : kk;
        return this.nodes[Rk].timeMs - this.nodes[Rk - 1].timeMs
      }
    }
    class Uk {
      constructor(kk) {
        this.iJ = kk, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Fk => kk.getEntityPosition(Fk), this.readAimPoint = Fk => kk.getEntityAimPoint(Fk)
      }
      aimPoint(kk) {
        return "string" !== typeof kk ? (0, wk.r)(kk, 3) ? kk : null : this.resolve(kk, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(kk) {
        const Fk = "string" === typeof kk ? this.iJ.getEntityAimPoint(kk) : kk;
        return Fk && (0, wk.r)(Fk, 3) ? Fk : null
      }
      feetPosition(kk) {
        return this.resolve(kk, this.readFeet, this.lastFeet)
      }
      heading(kk) {
        const Fk = this.iJ.getEntityHeading(kk);
        if (null !== Fk && Number.isFinite(Fk)) return this.lastHeadings.set(kk, Fk), Fk;
        const Bk = this.lastHeadings.get(kk);
        return void 0 !== Bk ? Bk : kk === this.iJ.localPlayerId ? 0 : this.heading(this.iJ.localPlayerId)
      }
      resolve(kk, Fk, Bk) {
        const Rk = Fk(kk);
        let tk = Bk.get(kk);
        return Rk && (0, wk.r)(Rk, 3) ? (tk || (tk = [0, 0, 0], Bk.set(kk, tk)), tk[0] = Rk[0], tk[1] = Rk[1], tk[2] = Rk[2], tk) : tk || (kk === this.iJ.localPlayerId ? null : this.resolve(this.iJ.localPlayerId, Fk, Bk))
      }
    }

    function ck(kk) {
      return {
        heading: kk.heading,
        pitch: kk.pitch
      }
    }

    function Gk(kk, Fk) {
      Number.isFinite(kk.heading) && Number.isFinite(kk.pitch) || (0, tk.k)(Fk, kk)
    }

    function Tk(kk, Fk, Bk, Rk, ak) {
      if (Fk) return void(0, tk.o)(Fk, ak);
      const Xk = Rk.aimPoint(Bk);
      Xk && (0, tk.t)(kk, Xk, ak)
    }
    class rk {
      constructor(kk, Fk, Bk, Rk) {
        this.settings = kk, this.iJ = Fk, this.targets = Bk, this.base = void 0, this.base = ck(Rk)
      }
      update(kk, Fk, Bk) {
        var Rk;
        const tk = this.settings;
        (0, wk.h)(tk.position, Bk.position), Tk(tk.position, tk.lookDirection, null !== (Rk = tk.lookAt) && void 0 !== Rk ? Rk : this.iJ.localPlayerId, this.targets, this.base), Fk.apply(this.base, Bk), Bk.fov = Ak(tk, this.iJ)
      }
      continueFrom(kk) {
        kk instanceof rk && (0, tk.k)(kk.base, this.base)
      }
      reset(kk) {
        Gk(this.base, kk)
      }
    }
    class Dk {
      constructor(kk, Fk, Bk, Rk) {
        this.settings = kk, this.iJ = Fk, this.targets = Bk, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.bs = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = ck(Rk), this.goal = [...Rk.position]
      }
      update(kk, Fk, Bk) {
        var Rk, tk, ak;
        const Xk = this.settings,
          bk = null !== (Rk = Xk.target) && void 0 !== Rk ? Rk : this.iJ.localPlayerId,
          dk = this.targets.feetPosition(bk);
        let sk = !1;
        dk && (sk = this.foundFeet && Yk(this.lastFeet, dk) > 32 + .1 * kk, (0, wk.h)(dk, this.lastFeet), this.foundFeet = !0, this.placeGoal(dk, bk));
        const Vk = null !== (tk = Xk.smoothMs) && void 0 !== tk ? tk : 0;
        !this.started || Vk < 1 || sk ? ((0, wk.h)(this.goal, this.smoothed), this.bs.fill(0), this.started = !0) : ek(this.smoothed, this.bs, this.goal, Vk, kk), sk && (this.distance = -1), (0, wk.h)(this.smoothed, Bk.position);
        const Jk = !0 === Xk.avoidTerrain ? this.pullIn(bk, kk, Bk) : 1;
        let yk = this.goal;
        if ("target" === Xk.offsetSpace) yk = Bk.position;
        else if (Jk < 1) {
          yk = this.aimOrigin;
          for (let kk = 0; kk < 3; kk++) yk[kk] = Bk.position[kk] + (this.goal[kk] - this.smoothed[kk]) * Jk
        }
        Tk(yk, Xk.lookDirection, null !== (ak = Xk.lookAt) && void 0 !== ak ? ak : bk, this.targets, this.base), Fk.apply(this.base, Bk), Bk.fov = Ak(Xk, this.iJ)
      }
      continueFrom(kk) {
        kk instanceof Dk && (0, Rk.w)(kk.settings.target, this.settings.target) && ((0, tk.k)(kk.base, this.base), (0, wk.h)(kk.goal, this.goal), (0, wk.h)(kk.lastFeet, this.lastFeet), this.foundFeet = kk.foundFeet, (0, wk.h)(kk.smoothed, this.smoothed), (0, wk.h)(kk.bs, this.bs), this.started = kk.started, !0 === kk.settings.avoidTerrain && (this.distance = kk.distance))
      }
      reset(kk) {
        Gk(this.base, kk), this.bs.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(kk, Fk, Bk) {
        const Rk = this.targets.aimPoint(kk);
        if (!Rk) return 1;
        const tk = Bk.position,
          ak = Yk(Rk, tk);
        if (!(ak > 0)) return 1;
        const Xk = this.toCamera;
        for (let wk = 0; wk < 3; wk++) Xk[wk] = (tk[wk] - Rk[wk]) / ak;
        const bk = function(kk, Fk, Bk) {
          return kk < 0 || Fk < kk ? Fk : Fk + (kk - Fk) * Math.exp(-Bk / 150)
        }(this.distance, function(kk, Fk, Bk, Rk) {
          const tk = kk.raycastTerrain(Fk, Bk, Rk);
          return null !== tk && Number.isFinite(tk) ? Math.min(Rk, Math.max(0, tk - .2)) : Rk
        }(this.iJ, Rk, Xk, ak), Fk);
        if (ak - bk < .001) return this.distance = -1, 1;
        this.distance = bk;
        for (let wk = 0; wk < 3; wk++) tk[wk] = Rk[wk] + Xk[wk] * bk;
        return bk / ak
      }
      placeGoal(kk, Fk) {
        const Bk = this.settings.offset;
        let Rk = Bk[0],
          tk = Bk[2];
        if ("target" === this.settings.offsetSpace) {
          const kk = this.targets.heading(Fk),
            ak = Math.cos(kk),
            Xk = Math.sin(kk);
          Rk = Bk[0] * ak + Bk[2] * Xk, tk = -Bk[0] * Xk + Bk[2] * ak
        }
        this.goal[0] = kk[0] + Rk, this.goal[1] = kk[1] + Bk[1], this.goal[2] = kk[2] + tk
      }
    }
    class zk {
      constructor(kk, Fk, Bk, Rk) {
        var tk, ak;
        this.settings = kk, this.iJ = Fk, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = kk.keyframes.length > 0 ? new gk(kk.keyframes, null === (tk = kk.smooth) || void 0 === tk || tk, null !== (ak = kk.loop) && void 0 !== ak && ak) : null, this.base = (0, wk.g)(Rk, (0, wk.k)()), this.resolveTarget = kk => Bk.aimPoint(kk)
      }
      update(kk, Fk, Bk) {
        this.elapsedMs += kk;
        const Rk = Ak(this.settings, this.iJ);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Rk, this.base) : this.base.fov = Rk, (0, wk.h)(this.base.position, Bk.position), Bk.fov = this.base.fov, Fk.apply(this.base, Bk)
      }
      continueFrom(kk) {
        kk instanceof zk && (0, Rk.w)(kk.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = kk.elapsedMs, (0, wk.g)(kk.base, this.base))
      }
      reset(kk) {
        Gk(this.base, kk), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function Pk(kk, Fk) {
      return (0, Rk.y)(kk, Fk)
    }
    class hk {
      constructor(kk, Fk, Bk) {
        var Rk;
        this.settings = kk, this.iJ = Fk, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const tk = null !== Bk && Bk.settings.mode === kk.mode,
          ak = tk ? Bk.pose : Fk.getDefaultPose();
        this.pose = (0, wk.g)(ak, (0, wk.k)()), this.lastGoodPose = (0, wk.g)(tk ? Bk.lastGoodPose : ak, (0, wk.k)()), this.look = new fk(kk.playerLook), this.targets = null !== (Rk = null === Bk || void 0 === Bk ? void 0 : Bk.targets) && void 0 !== Rk ? Rk : new Uk(Fk);
        const Xk = (0, wk.g)(ak, (0, wk.k)());
        tk && Bk.look.unapply(Xk, Xk), this.mode = function(kk, Fk, Bk, Rk) {
          switch (kk.mode) {
            case "fixed":
              return new rk(kk, Fk, Bk, Rk);
            case "follow":
              return new Dk(kk, Fk, Bk, Rk);
            case "path":
              return new zk(kk, Fk, Bk, Rk);
            case "frame":
              return new yk(kk, Fk, Bk, Rk)
          }
        }(kk, Fk, this.targets, Xk), tk && (this.look.continueFrom(Bk.look), this.mode.continueFrom(Bk.mode))
      }
      update(kk, Fk) {
        return this.look.update(kk, Fk), this.mode.update(kk, this.look, this.pose), (0, wk.o)(this.pose) ? (0, wk.g)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, wk.g)(this.lastGoodPose, this.pose), this.mode.reset((0, wk.o)(this.lastGoodPose) ? this.lastGoodPose : this.iJ.getDefaultPose())), this.pose
      }
    }

    function qk(kk) {
      return [0, 0, kk[2], kk[3]]
    }
    class Ck {
      constructor(kk) {
        this.iJ = kk, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new bk, this.shot = null, this.blend = null, this.mixed = (0, wk.k)(), this.output = (0, wk.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(kk) {
        const Fk = (0, dk.e)(kk);
        if ((0, Rk.w)(Fk, this.pending ? this.pending.settings : this.settings)) return;
        const Bk = Pk(this.settings, Fk);
        if (void 0 !== Fk.transition && !Bk) return this.pending = {
          settings: Fk,
          shot: "default" === Fk.mode ? null : new hk(Fk, this.iJ, null)
        }, void this.fade.fadeOut(Fk.transition);
        const tk = null !== this.pending;
        this.pending = null, !tk && Bk || this.fade.fadeIn(Rk.m.minTransitionFadeMs), this.show(Fk, !1)
      }
      show(kk, Fk) {
        var Bk, tk;
        if ((0, Rk.w)(kk, this.settings)) return;
        const Xk = !Fk && Pk(this.settings, kk);
        this.settings = kk;
        const bk = null !== this.blend && this.blend.elapsedMs > 0,
          dk = (0, wk.g)(this.hasOutput ? this.output : this.iJ.getDefaultPose(), (0, wk.k)());
        if (this.shot = "default" === kk.mode ? null : new hk(kk, this.iJ, Fk ? null : this.shot), Xk) return;
        const sk = Fk || !this.shot && !this.hasOutput ? 0 : null !== (Bk = kk.blendInMs) && void 0 !== Bk ? Bk : 0;
        if (sk <= 0) return void(this.blend = null);
        const Vk = (0, ak.l)(null !== (tk = kk.blendEasing) && void 0 !== tk ? tk : "easeInOut");
        this.blend = {
          from: dk,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: sk,
          easing: bk ? qk(Vk) : Vk
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
        const Bk = Number.isFinite(kk) && kk > 0 ? kk : 0;
        if (this.fade.advance(Bk) && null !== this.pending) {
          const {
            settings: kk
          } = this.pending;
          this.pending = null, this.show(kk, !0)
        }
        this.loadingPositions.length = 0;
        const Rk = this.pending;
        if (null !== Rk && void 0 !== Rk && Rk.shot) {
          const kk = "path" === Rk.settings.mode ? 0 : Bk;
          this.noteLoadingPosition(Rk.shot.update(kk, wk.c).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Xk = this.shot ? this.shot.update(Bk, Fk) : this.iJ.getDefaultPose();
        this.shot && this.noteLoadingPosition(Xk.position);
        const bk = this.blend;
        if (!bk) return this.writeOutput(Xk);
        bk.elapsedMs += Bk;
        const dk = Math.min(1, bk.elapsedMs / bk.durationMs);
        if (bk.headingDelta = Number.isFinite(bk.headingDelta) ? (0, tk.F)(bk.headingDelta, Xk.heading - bk.from.heading) : (0, tk.B)(bk.from.heading, Xk.heading), (0, wk.u)(bk.from, Xk, bk.headingDelta, (0, ak.k)(dk, bk.easing), this.mixed), dk >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else bk.fromScripted && this.noteLoadingPosition(bk.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(kk) {
        if (kk.every(Number.isFinite)) {
          const Fk = this.loadingPositions;
          Fk.push((0, wk.h)(kk, this.loadingSlots[Fk.length]))
        }
      }
      writeOutput(kk) {
        const Fk = this.output;
        (0, wk.o)(kk) ? (0, wk.g)(kk, Fk) : this.hasOutput || (0, wk.g)(this.iJ.getDefaultPose(), Fk), Fk.pitch = (0, tk.h)(Fk.pitch);
        const Bk = this.iJ.getDefaultFov(),
          ak = Number.isFinite(Bk) && Bk > 0 && Bk < 180,
          Xk = ak ? Math.min(Rk.m.minFov, Bk) : Rk.m.minFov,
          bk = ak ? Math.max(Rk.m.maxFov, Bk) : Rk.m.maxFov;
        return Fk.fov = Number.isFinite(Fk.fov) ? Math.min(bk, Math.max(Xk, Fk.fov)) : bk, this.hasOutput = !0, Fk
      }
    }
  },
  38777: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      g: () => bk,
      h: () => Xk,
      k: () => ak,
      o: () => dk,
      r: () => wk,
      u: () => sk
    });
    var Rk = Bk(38781);
    const tk = {
      ZE: 0,
      pE: 0
    };

    function ak() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Xk(kk, Fk) {
      return Fk[0] = kk[0], Fk[1] = kk[1], Fk[2] = kk[2], Fk
    }

    function bk(kk, Fk) {
      return Xk(kk.position, Fk.position), Fk.heading = kk.heading, Fk.pitch = kk.pitch, Fk.fov = kk.fov, Fk
    }

    function wk(kk, Fk) {
      return Array.isArray(kk) && kk.length === Fk && kk.every(Number.isFinite)
    }

    function dk(kk) {
      return wk(kk.position, 3) && Number.isFinite(kk.heading) && Number.isFinite(kk.pitch) && Number.isFinite(kk.fov)
    }

    function sk(kk, Fk, Bk, tk, ak) {
      for (let Rk = 0; Rk < 3; Rk++) ak.position[Rk] = kk.position[Rk] + (Fk.position[Rk] - kk.position[Rk]) * tk;
      return ak.heading = (0, Rk.x)(kk.heading + Bk * tk), ak.pitch = kk.pitch + (Fk.pitch - kk.pitch) * tk, ak.fov = kk.fov + (Fk.fov - kk.fov) * tk, ak
    }
  },
  38806: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ok,
      g: () => Jk
    });
    var Rk = Bk(38799),
      tk = Bk(38777);
    const ak = Rk.i,
      Xk = Rk.q;

    function bk(kk, Fk, Bk, Rk) {
      return Number.isFinite(kk) ? Math.min(Bk, Math.max(Fk, kk)) : Rk
    }

    function wk(kk, Fk, Bk) {
      return void 0 !== kk && Number.isFinite(kk) ? Math.min(Bk, Math.max(Fk, kk)) : void 0
    }

    function dk(kk) {
      const Fk = Rk.m.maxCoordinate;
      return [Math.min(Fk, Math.max(-Fk, kk[0])), Math.min(Fk, Math.max(-Fk, kk[1])), Math.min(Fk, Math.max(-Fk, kk[2]))]
    }

    function sk(kk) {
      return "string" === typeof kk ? kk : (0, tk.r)(kk, 3) ? dk(kk) : void 0
    }
    const Vk = new RegExp(Rk.u);

    function Jk(kk) {
      return "string" === typeof kk && Vk.test(kk)
    }

    function Ak(kk) {
      const Fk = [];
      if (!Array.isArray(kk)) return Fk;
      for (const Bk of kk.slice(0, Rk.m.maxFrameTargets)) {
        const kk = sk(Bk);
        void 0 === kk || "string" === typeof kk && !Jk(kk) || Fk.push(kk)
      }
      return Fk
    }

    function ek(kk) {
      if (!(0, tk.r)(kk, 3)) return;
      const Fk = Math.max(Math.abs(kk[0]), Math.abs(kk[1]), Math.abs(kk[2])),
        Bk = Math.hypot(kk[0] / Fk, kk[1] / Fk, kk[2] / Fk);
      return 0 === Fk || Fk * Bk < Rk.m.minDirectionLength ? void 0 : [kk[0] / Fk / Bk, kk[1] / Fk / Bk, kk[2] / Fk / Bk]
    }

    function yk(kk) {
      if (void 0 !== kk) return "string" === typeof kk ? ak.includes(kk) ? kk : void 0 : (0, tk.r)(kk, 4) ? [bk(kk[0], 0, 1, 0), bk(kk[1], Rk.m.minEasingY, Rk.m.maxEasingY, 0), bk(kk[2], 0, 1, 1), bk(kk[3], Rk.m.minEasingY, Rk.m.maxEasingY, 1)] : "linear"
    }

    function fk(kk) {
      if (kk) return {
        maxYaw: bk(kk.maxYaw, 0, Rk.m.maxPlayerLook, 0),
        maxPitch: bk(kk.maxPitch, 0, Rk.m.maxPlayerLook, 0),
        returnMs: wk(kk.returnMs, 0, Rk.m.maxReturnMs)
      }
    }
    const mk = new RegExp(Rk.c);

    function Wk(kk) {
      var Fk;
      if ("object" !== typeof kk || null === kk) return;
      const Bk = Rk.m.maxTransitionMs,
        tk = Rk.m.minTransitionFadeMs;
      return {
        colour: "string" === typeof kk.colour && mk.test(kk.colour) ? kk.colour : Rk.e,
        outMs: bk(kk.outMs, tk, Bk, tk),
        holdMs: bk(null !== (Fk = kk.holdMs) && void 0 !== Fk ? Fk : 0, 0, Bk, 0),
        inMs: bk(kk.inMs, tk, Bk, tk)
      }
    }

    function vk(kk) {
      return !0 === kk || void 0
    }

    function ik(kk) {
      if ("object" !== typeof kk || null === kk) return !1;
      const Fk = kk.lookAt;
      return Number.isFinite(kk.timeMs) && (0, tk.r)(kk.position, 3) && (void 0 === Fk || "string" === typeof Fk || (0, tk.r)(Fk, 3))
    }

    function Yk(kk) {
      return {
        ...kk,
        timeMs: bk(kk.timeMs, 0, Rk.m.maxPathMs, 0),
        position: dk(kk.position),
        lookAt: sk(kk.lookAt),
        lookDirection: ek(kk.lookDirection),
        fov: wk(kk.fov, Rk.m.minFov, Rk.m.maxFov),
        easing: yk(kk.easing)
      }
    }

    function Lk(kk) {
      const Fk = [];
      if (!Array.isArray(kk)) return Fk;
      for (const Bk of kk.slice(0, Rk.m.maxKeyframes)) {
        if (!ik(Bk)) continue;
        const kk = Yk(Bk);
        (0 === Fk.length || kk.timeMs > Fk[Fk.length - 1].timeMs) && Fk.push(kk)
      }
      return Fk
    }

    function Ok(kk) {
      if ("object" !== typeof kk || null === kk) return {
        mode: "default"
      };
      const Fk = {
          blendInMs: wk(kk.blendInMs, 0, Rk.m.maxBlendInMs),
          blendEasing: yk(kk.blendEasing),
          transition: Wk(kk.transition),
          letterbox: vk(kk.letterbox),
          hideHud: vk(kk.hideHud)
        },
        Bk = {
          mode: "default",
          ...Fk
        };
      if ("default" === kk.mode || "fixed" === kk.mode && !(0, tk.r)(kk.position, 3)) return Bk;
      const ak = {
        ...Fk,
        fov: wk(kk.fov, Rk.m.minFov, Rk.m.maxFov),
        playerFacing: (Vk = kk.playerFacing, Xk.includes(Vk) ? Vk : void 0),
        playerLook: fk(kk.playerLook)
      };
      var Vk, Jk;
      switch (kk.mode) {
        case "fixed":
          return {
            ...kk, ...ak, position: dk(kk.position), lookAt: sk(kk.lookAt), lookDirection: ek(kk.lookDirection)
          };
        case "follow":
          return {
            ...kk, ...ak, target: "string" === typeof kk.target ? kk.target : void 0, lookAt: sk(kk.lookAt), offset: (Jk = kk.offset, Array.isArray(Jk) ? [bk(Jk[0], -Rk.m.maxOffset, Rk.m.maxOffset, 0), bk(Jk[1], -Rk.m.maxOffset, Rk.m.maxOffset, 0), bk(Jk[2], -Rk.m.maxOffset, Rk.m.maxOffset, 0)] : [0, 0, 0]), lookDirection: ek(kk.lookDirection), smoothMs: wk(kk.smoothMs, 0, Rk.m.maxSmoothMs)
          };
        case "path":
          return {
            ...kk, ...ak, keyframes: Lk(kk.keyframes)
          };
        case "frame":
          return {
            ...kk, ...ak, targets: Ak(kk.targets), viewHeading: wk(kk.viewHeading, -Rk.m.maxFrameHeading, Rk.m.maxFrameHeading), viewElevation: wk(kk.viewElevation, 0, Rk.m.maxFrameElevation), padding: wk(kk.padding, 0, Rk.m.maxFrameDistance), closestDistance: wk(kk.closestDistance, 0, Rk.m.maxFrameDistance), furthestDistance: wk(kk.furthestDistance, 0, Rk.m.maxFrameDistance), smoothMs: wk(kk.smoothMs, 0, Rk.m.maxSmoothMs)
          };
        default:
          return Bk
      }
    }
  },
  38303: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk
    });
    var Rk = Bk(1173);

    function tk(kk) {
      const Fk = /(\d*\.?\d+)px/.exec(kk);
      return Fk ? Number(Fk[1]) : null
    }

    function ak(kk) {
      return kk.split(/[\s,]+/).pop()
    }
    let Xk = !1;
    const bk = {
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
      drawText: function(kk, Fk, Rk, bk, wk, dk) {
        if (wk <= 0 || dk <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: sk,
          fontVariant: Vk,
          fontWeight: Jk,
          fontSize: Ak,
          font: ek
        } = this, yk = [sk, Vk, Jk, `${Ak}px`, ek].filter(Boolean).join(" "), fk = [
          [Jk, `${Ak}px`, ak(ek)].filter(Boolean).join(" "), `${Ak}px sans-serif`
        ], mk = kk.font, Wk = function(kk, Fk, Bk) {
          for (const Rk of Fk) {
            kk.font = Rk;
            const Fk = tk(kk.font),
              Xk = ak(Rk);
            if (null !== Fk && Math.abs(Fk - Bk) <= .5 && kk.font.toLowerCase().includes(Xk.toLowerCase())) return Rk
          }
          return null
        }(kk, [yk, ...fk], Ak);
        Wk !== yk && function(kk, Fk, Rk) {
          Xk || (Xk = !0, Promise.resolve().then((() => Bk(1047))).then((Bk => {
            let {
              ly: tk
            } = Bk;
            tk(new Error("A canvas didn't take canvasTxt's font"), {
              font: kk,
              lA: Fk,
              drawnWith: null !== Rk && void 0 !== Rk ? Rk : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(yk, mk, Wk);
        const vk = tk(kk.font);
        if (null === Wk && null !== vk && vk > 0) {
          const Bk = Ak / vk;
          kk.save();
          try {
            return kk.scale(Bk, Bk), {
              height: this.drawLines(kk, Fk, Rk / Bk, bk / Bk, wk / Bk, dk / Bk, vk).height * Bk
            }
          } finally {
            kk.restore()
          }
        }
        return this.drawLines(kk, Fk, Rk, bk, wk, dk, Ak)
      },
      drawLines: function(kk, Fk, Bk, tk, ak, Xk, bk) {
        const wk = Bk + ak,
          dk = tk + Xk;
        let sk, Vk = tk + Xk / 2 + bk / 2;
        "right" === this.align ? (sk = wk, kk.textAlign = "right") : "left" === this.align ? (sk = Bk, kk.textAlign = "left") : (sk = Bk + ak / 2, kk.textAlign = "center");
        for (const Rk of Fk) {
          kk.measureText(Rk).width >= ak && (Fk = Fk.replace(Rk, ""))
        }
        Fk = (0, Rk.V)(Fk);
        const Jk = [],
          Ak = Fk.split("\n"),
          ek = this.justify ? kk.measureText("\u200a").width : 0;
        Ak.forEach((Fk => {
          let Bk = kk.measureText(Fk).width;
          if (Bk <= ak) Jk.push(Fk);
          else {
            let Rk = Fk;
            const tk = ak;
            let Xk, bk, wk;
            for (Bk = kk.measureText(Rk).width; Bk > tk;) {
              for (Xk = 0, bk = 0, wk = ""; bk < tk;) Xk++, wk = Rk.substr(0, Xk), bk = kk.measureText(wk).width;
              Xk--, wk = wk.substr(0, Xk);
              const Fk = Xk;
              if (" " !== Rk.substr(Xk, 1)) {
                for (;
                  " " !== Rk.substr(Xk, 1) && 0 !== Xk;) Xk--;
                0 === Xk && (Xk = Fk), wk = Rk.substr(0, Xk)
              }
              wk = this.justify ? this.justifyLine(kk, wk, ek, "\u200a", ak) : wk, Rk = Rk.substr(Xk), Bk = kk.measureText(Rk).width, Jk.push(wk)
            }
            Bk > 0 && Jk.push(Rk)
          }
        }));
        const yk = this.lineHeight ? this.lineHeight : this.getTextHeight(kk, Fk),
          fk = yk * (Jk.length - 1),
          mk = fk / 2;
        let Wk = tk;
        "top" === this.vAlign ? Vk = tk + bk : "bottom" === this.vAlign ? (Vk = dk - fk, Wk = dk) : (Wk = tk + Xk / 2, Vk -= mk), Jk.forEach((Fk => {
          Fk = Fk.trim(), kk.fillText(Fk, sk, Vk), Vk += yk
        })), this.debug && (kk.lineWidth = 3, kk.strokeStyle = "#00909e", kk.strokeRect(Bk, tk, ak, Xk), kk.lineWidth = 2, kk.strokeStyle = "#f6d743", kk.beginPath(), kk.moveTo(sk, tk), kk.lineTo(sk, dk), kk.stroke(), kk.strokeStyle = "#ff6363", kk.beginPath(), kk.moveTo(Bk, Wk), kk.lineTo(wk, Wk), kk.stroke());
        return {
          height: fk + yk
        }
      },
      getTextHeight: function(kk, Fk) {
        const Bk = kk.textBaseline;
        kk.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Rk
        } = kk.measureText(Fk);
        return kk.textBaseline = Bk, Rk
      },
      justifyLine: function(kk, Fk, Bk, Rk, tk) {
        const ak = Fk.trim(),
          Xk = kk.measureText(ak).width,
          bk = ak.split(/\s+/).length - 1,
          wk = Math.floor((tk - Xk) / Bk);
        if (bk <= 0 || wk <= 0) return ak;
        const dk = Math.floor(wk / bk);
        let sk = wk - bk * dk,
          Vk = [];
        for (let Jk = 0; Jk < dk; Jk++) Vk.push(Rk);
        Vk = Vk.join("");
        return ak.replace(/\s+/g, (kk => {
          const Fk = sk > 0 ? Vk + Rk : Vk;
          return sk--, kk + Fk
        }))
      }
    }
  },
  38746: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return Fk.set(kk), Fk
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  38310: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => yk,
      e: () => ek,
      f: () => Jk,
      g: () => sk,
      j: () => Vk
    });
    var Rk = Bk(4002),
      tk = Bk(291);
    const ak = 1024,
      Xk = 1536,
      bk = 2 * Rk.k + 1,
      wk = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      dk = 1.5;

    function sk(kk, Fk, Bk) {
      if ("string" !== typeof kk) return Fk;
      try {
        const Bk = JSON.parse(kk);
        return Bk && "object" === typeof Bk ? Bk : Fk
      } catch (Rk) {
        return void 0 !== Bk && console.error(`Couldn't parse ${Bk}`, Rk), Fk
      }
    }

    function Vk(kk) {
      return sk(kk, null, "a leaderboard's rows")
    }

    function Jk(kk, Fk) {
      var Bk, Rk;
      return null !== Fk && void 0 !== Fk ? Fk : {
        status: null !== (Bk = kk.status) && void 0 !== Bk ? Bk : "loading",
        entries: null !== (Rk = kk.entries) && void 0 !== Rk ? Rk : []
      }
    }

    function Ak(kk, Fk) {
      return "number" === typeof kk && Number.isFinite(kk) && kk > 0 ? kk : Fk
    }

    function ek(kk, Fk) {
      const Bk = Ak(kk.size, 1);
      let Rk = Ak(kk.width, Ak(2.5 * Bk, 2.5)),
        tk = Ak(kk.height, Ak(3.75 * Bk, 3.75));
      Number.isFinite(ak * tk / Rk) && Number.isFinite(Xk * Rk / tk) || (Rk = 2.5, tk = 3.75);
      const bk = tk / Rk,
        wk = Math.max(1, Math.min(ak, Fk / bk));
      return {
        width: Rk,
        height: tk,
        layoutWidth: Math.max(ak, Xk / bk),
        layoutHeight: Math.max(Xk, ak * bk),
        pixelWidth: Math.round(wk),
        pixelHeight: Math.round(Math.max(1, Math.min(Fk, wk * bk)))
      }
    }

    function yk(kk, Fk, Bk, Xk, sk, Vk) {
      kk.setTransform(1, 0, 0, 1, 0, 0), kk.fillStyle = tk.N.defaultNameTagBackground, kk.fillRect(0, 0, Fk, Bk), kk.scale(Fk / Xk.layoutWidth, Bk / Xk.layoutHeight), kk.translate((Xk.layoutWidth - ak) / 2, 0),
        function(kk, Fk, Bk, ak) {
          var Xk, sk, Vk, Jk;
          const {
            top: Ak,
            around: ek,
            showPlayerText: yk,
            localPlayerDbId: Wk
          } = Bk, {
            whiteUiText: vk,
            grayUiText: ik,
            yellowUiText: Yk
          } = tk.N;
          kk.textBaseline = "middle";
          const Lk = function(Fk, Bk, Rk, tk, ak, Xk) {
              let bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              kk.font = `bold ${tk}px 'Jetbrains Mono', monospace`, kk.fillStyle = ak, kk.textAlign = bk;
              let wk = Fk.replace(/[\r\n\t]/g, " ");
              if (kk.measureText(wk).width > Xk) {
                for (; wk.length > 0 && kk.measureText(`${wk}\u2026`).width > Xk;) wk = wk.slice(0, -1);
                wk += "\u2026"
              }
              kk.fillText(wk, Bk, Rk)
            },
            Ok = Fk => {
              kk.fillStyle = vk, kk.globalAlpha = .15, kk.fillRect(24, Fk, 976, 2), kk.globalAlpha = 1
            },
            Ek = null === Wk ? null : (0, tk.qc)(Wk),
            Sk = kk => null !== Ek && kk.playerHash === Ek,
            Nk = fk(Ak.entries, Rk.n),
            Hk = "ready" === Ak.status && Nk.length > 0,
            uk = null === ek ? [] : fk(ek.entries, bk),
            Mk = Nk.some(Sk),
            gk = null === ek ? null : function(kk) {
              const Fk = kk;
              if (!Fk || !Number.isFinite(Fk.rank) || !Number.isFinite(Fk.tied) || !Number.isFinite(Fk.total)) return null;
              return Fk
            }(ek.standing),
            Uk = uk.find(Sk),
            ck = Nk.find(Sk),
            Gk = null === gk || void 0 === Uk ? null : {
              value: Uk.value,
              rank: gk.rank
            },
            Tk = mk(Nk, void 0 === ck || ck.value === (null === Gk || void 0 === Gk ? void 0 : Gk.value) ? Gk : null),
            rk = mk(uk, Gk),
            Dk = (kk, Fk) => {
              const Bk = kk.findIndex(Sk);
              return Bk >= 0 ? Fk[Bk] : null
            },
            zk = null !== (Xk = null !== (sk = null === gk || void 0 === gk ? void 0 : gk.rank) && void 0 !== sk ? sk : Dk(uk, rk)) && void 0 !== Xk ? Xk : Dk(Nk, Tk);
          kk.font = "bold 34px 'Jetbrains Mono', monospace";
          const Pk = [...Hk ? Tk : [], ...Mk ? [] : rk],
            hk = Math.min(280, Math.max(0, ...Pk.map((Fk => kk.measureText(wk.format(Fk)).width)))),
            qk = hk <= 80,
            Ck = qk ? 80 : 32 + hk,
            Zk = qk ? 148 : Ck + 28,
            pk = 660 - Zk;
          Lk(`TOP ${Rk.n}  /  ALL TIME`, 24, 52, 28, ik, 976), Lk(yk ? String(null !== (Vk = Fk.title) && void 0 !== Vk ? Vk : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, vk, 976), Lk("RANK", 32, 174, 28, ik, Zk - 40), Lk("PLAYER", Zk, 174, 28, ik, pk), Lk(yk ? String(null !== (Jk = Fk.scoreLabel) && void 0 !== Jk ? Jk : "Score").slice(0, 24) : "Score", 992, 174, 28, ik, 304, "right"), Ok(202);
          const Kk = (ak - 232) / (Rk.n + dk + bk),
            xk = 208 + Rk.n * Kk,
            jk = xk + dk * Kk,
            lk = (Fk, Bk, Rk, tk) => {
              const ak = Sk(Fk);
              kk.fillStyle = ak ? Yk : vk, kk.globalAlpha = ak ? .15 : tk ? .035 : 0, kk.fillRect(24, Rk - Kk / 2 + 1, 976, Kk - 2), kk.globalAlpha = 1;
              const Xk = ak ? Yk : vk;
              Lk(wk.format(Bk), Ck, Rk, 34, Xk, qk ? 80 : hk, qk ? "center" : "right"), Lk(yk ? String(Fk.name).slice(0, 64) : "Player", Zk, Rk, 34, Xk, pk);
              const bk = wk.format(Fk.value);
              Lk(kk.measureText(bk).width > 304 ? Fk.value.toExponential(6) : bk, 992, Rk, 34, Xk, 304, "right")
            };
          if (Hk)
            for (const [Rk, tk] of Nk.entries()) lk(tk, Tk[Rk], 208 + (Rk + .5) * Kk, Rk % 2 === 0);
          else {
            const kk = "error" === Ak.status,
              Fk = kk ? "Couldn't load leaderboard" : "ready" === Ak.status ? "No scores yet" : "Loading leaderboard\u2026",
              Bk = kk ? "Trying again shortly" : "ready" === Ak.status ? "Be the first on the board!" : "Fetching the top players",
              Rk = (208 + xk) / 2;
            Lk(Fk, 512, Rk - 28, 40, kk ? tk.N.redUiText : vk, 960, "center"), Lk(Bk, 512, Rk + 27, 30, ik, 960, "center")
          }
          const nk = xk + dk * Kk / 2;
          if (null === zk) Ok(nk);
          else {
            const Fk = null === gk ? 0 : gk.tied - 1,
              Bk = `YOUR RANK #${wk.format(zk)}${null===gk?"":` of ${wk.format(gk.total)}`}`;
            kk.font = "bold 36px 'Jetbrains Mono', monospace";
            const Rk = Math.max(20, Math.min(36, Math.floor(34560 / kk.measureText(Bk).width)));
            Lk(Bk, 512, nk - (Fk > 0 ? 15 : 0), Rk, Yk, 960, "center"), Fk > 0 && Lk(`Tied with ${wk.format(Fk)} other${1===Fk?"":"s"}`, 512, nk + 24, 24, ik, 960, "center")
          }
          if (null === ek) return;
          const Ik = jk + bk * Kk / 2;
          if (Mk) Lk(`You're in the top ${Rk.n}!`, 512, Ik, 40, Yk, 960, "center");
          else if (0 === uk.length) Lk("You're not on this board yet", 512, Ik, 34, ik, 960, "center");
          else
            for (const [Rk, tk] of uk.entries()) lk(tk, rk[Rk], jk + (Rk + .5) * Kk, Rk % 2 === 0)
        }(kk, sk, Vk, Xk.layoutHeight)
    }

    function fk(kk, Fk) {
      return Array.isArray(kk) ? kk.slice(0, Fk).filter((kk => kk && Number.isFinite(kk.rank) && Number.isFinite(kk.value))) : []
    }

    function mk(kk, Fk) {
      const Bk = [];
      let Rk = !1;
      return kk.forEach(((tk, ak) => {
        if (null !== Fk && tk.value === Fk.value) return void Bk.push(Fk.rank);
        const Xk = ak > 0 && tk.value === kk[ak - 1].value;
        Xk || (Rk = 0 === ak && 1 !== tk.rank), Bk.push(Xk && !Rk ? Bk[ak - 1] : tk.rank)
      })), Bk
    }
  },
  38516: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      e: () => ak
    });
    const Rk = 32;

    function tk(kk) {
      return Array.from(kk).length
    }

    function ak(kk) {
      const Fk = [""];
      let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        tk = "";
      const ak = () => {
        Fk.push(""), Bk = 0, tk = ""
      };
      for (const Xk of kk.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Xk)) ak();
        else if (/^\s+$/.test(Xk)) tk += Xk;
      else if (Xk.length > 0) {
        const kk = Array.from(Xk);
        Bk > 0 && Bk + tk.length + kk.length > Rk && ak(), Fk[Fk.length - 1] += tk, Bk += tk.length, tk = "";
        for (const tk of kk) Bk >= Rk && ak(), Fk[Fk.length - 1] += tk, Bk++
      }
      return Fk[Fk.length - 1] += tk, Fk
    }
  },
  38741: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(36366),
      tk = Bk.n(Rk);
    const ak = [1, 1, 1];

    function Xk(kk) {
      if (!kk) return [...ak];
      try {
        const [Fk, Bk, Rk] = tk()(kk).rgb().array();
        return [Fk / 255, Bk / 255, Rk / 255]
      } catch (Fk) {
        return console.warn(`Invalid groundArrowPath colour "${kk}":`, Fk), [...ak]
      }
    }
  },
  34016: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak,
      g: () => bk,
      h: () => Xk,
      l: () => tk,
      n: () => Rk
    });
    const Rk = {
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
      tk = "/textures/dayNight/sun.png",
      ak = "/textures/dayNight/moon.png",
      Xk = "/textures/dayNight/stars",
      bk = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38799: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => sk,
      e: () => Vk,
      i: () => Rk,
      m: () => wk,
      q: () => tk,
      u: () => dk,
      w: () => bk,
      y: () => Xk
    });
    const Rk = ["linear", "easeIn", "easeOut", "easeInOut"],
      tk = ["movement", "camera", "cursor"],
      ak = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Xk(kk, Fk) {
      return bk(kk, Fk, ak)
    }

    function bk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (kk === Fk || Number.isNaN(kk) && Number.isNaN(Fk)) return !0;
      if ("object" !== typeof kk || "object" !== typeof Fk || null === kk || null === Fk || Array.isArray(kk) !== Array.isArray(Fk)) return !1;
      const Rk = kk,
        tk = Fk;
      for (const ak of new Set([...Object.keys(Rk), ...Object.keys(tk)]))
        if (!Bk.includes(ak) && !bk(Rk[ak], tk[ak])) return !1;
      return !0
    }
    const wk = {
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
      dk = "^-[1-9][0-9]*$",
      sk = "^#[0-9a-fA-F]{6}$",
      Vk = "#000000"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);