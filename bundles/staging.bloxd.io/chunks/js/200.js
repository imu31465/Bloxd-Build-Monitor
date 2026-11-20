export const id = 200;
export const ids = [200];
export const modules = {
  38651: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      constructor(vv, zv) {
        this.read = vv, this.apply = zv, this.release = null
      }
      turn(vv, zv) {
        const Pv = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: zv,
          forcedCameraDirection: [vv[0], vv[1], vv[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), zv + 100),
          transitionMs: Pv
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(vv) {
        null !== this.release && (clearTimeout(this.release.timer), vv && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38178: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      h: () => Sv
    });
    const hv = new Map;

    function Sv(vv, zv) {
      hv.set(vv, zv)
    }

    function ev(vv) {
      return vv ? hv.get(vv) : void 0
    }
  },
  39065: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(37753);

    function Sv(vv, zv, Pv) {
      var Sv, ev, gv, pv, dv, Nv, lv;
      const Tv = (0, hv.d)(vv, zv, Pv[0], Pv[1], Pv[2]),
        Wv = Tv ? null !== (Sv = Tv.textCell) && void 0 !== Sv ? Sv : Tv.rect.anchor : Pv,
        wv = zv(Wv[0], Wv[1], Wv[2]);
      return {
        pos: [Pv[0], Pv[1], Pv[2]],
        noticeboardSpan: Tv && {
          width: Tv.rect.width,
          height: Tv.rect.height
        },
        text: null !== (ev = null === wv || void 0 === wv || null === (gv = wv.persisted) || void 0 === gv || null === (pv = gv.shared) || void 0 === pv ? void 0 : pv.text) && void 0 !== ev ? ev : "",
        textSize: null !== (dv = null === wv || void 0 === wv || null === (Nv = wv.persisted) || void 0 === Nv || null === (lv = Nv.shared) || void 0 === lv ? void 0 : lv.textSize) && void 0 !== dv ? dv : null
      }
    }
  },
  38036: (vv, zv, Pv) => {
    function hv(vv) {
      switch (vv.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    Pv.d(zv, {
      b: () => Sv,
      e: () => ev,
      g: () => hv
    });
    const Sv = 4,
      ev = 3
  },
  38671: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      g: () => ev
    });
    var hv = Pv(312);
    const Sv = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class ev {
      constructor(vv) {
        this.importGame = vv, this.loads = new Map, this.loaded = new Map
      }
      load(vv) {
        const zv = (0, hv.Pb)(vv);
        if (!Sv.has(zv)) return Promise.resolve(void 0);
        let Pv = this.loads.get(zv);
        return Pv || (Pv = this.importGame(zv).then((vv => {
          const Pv = vv.default;
          if ("function" !== typeof Pv) throw new Error(`${zv}'s client code has no default-exported factory`);
          return this.loaded.set(zv, Pv), Pv
        })).catch((vv => {
          throw this.loads.delete(zv), vv
        })), this.loads.set(zv, Pv)), Pv
      }
      loadedFactory(vv) {
        const zv = (0, hv.Pb)(vv);
        if (!Sv.has(zv)) return;
        const Pv = this.loaded.get(zv);
        if (!Pv) throw new Error(`${zv}'s client code started before it loaded`);
        return Pv
      }
    }
  },
  39070: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv
    });
    var hv = Pv(9185),
      Sv = Pv(9019),
      ev = Pv(3037);

    function gv(vv) {
      if (vv === hv.e) return 0;
      const zv = (0, ev.c)(vv);
      if (void 0 !== zv && zv <= Sv.MAX_BLOCK_ID) return zv;
      const Pv = (0, ev.c)(vv.split("|")[0]);
      if (void 0 !== Pv && Pv <= Sv.MAX_BLOCK_ID && (0, Sv.rootMetaDescOf)(Pv) === vv) return Pv;
      throw new Error(`Invalid block name. You sent ${vv}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38708: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv
    });
    var hv = Pv(22);
    class Sv {
      constructor(vv) {
        this.screen = vv, this.hidesHud = !1
      }
      show(vv, zv) {
        this.screen.setFade(vv.colour, vv.alpha), this.screen.setLetterbox(!0 === zv.letterbox, vv.alpha < 1), this.setHudHidden(!0 === zv.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(vv) {
        this.hidesHud !== vv && (this.hidesHud = vv, hv.c.set({
          isUiHiddenByCamera: vv
        }))
      }
    }
  },
  38683: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      g: () => Wv,
      h: () => Tv,
      l: () => gv,
      m: () => av,
      n: () => dv,
      o: () => sv,
      r: () => Nv,
      s: () => pv,
      w: () => lv
    });
    const hv = Math.PI / 2 - .001,
      Sv = 2 * Math.PI,
      ev = 1e-9;

    function gv(vv, zv) {
      zv.heading = vv.heading, zv.pitch = vv.pitch
    }

    function pv(vv, zv) {
      const Pv = zv - vv;
      return Pv - Sv * Math.floor((Pv + Math.PI) / Sv)
    }

    function dv(vv, zv, Pv) {
      return vv + pv(vv, zv) * Pv
    }

    function Nv(vv) {
      if (!Number.isFinite(vv)) return vv;
      const zv = vv - Sv * Math.floor(vv / Sv);
      return zv < Sv ? zv : 0
    }

    function lv(vv, zv) {
      return vv + pv(vv, zv)
    }

    function Tv(vv) {
      return Math.max(-hv, Math.min(hv, vv))
    }

    function Wv(vv, zv, Pv) {
      const hv = Math.cos(zv);
      return Pv[0] = hv * Math.sin(vv), Pv[1] = -Math.sin(zv), Pv[2] = hv * Math.cos(vv), Pv
    }

    function wv(vv, zv, Pv, hv) {
      const Sv = Math.sqrt(vv * vv + Pv * Pv);
      return Sv < ev && Math.abs(zv) < ev || (Sv >= ev && (hv.heading = Math.atan2(vv, Pv)), hv.pitch = Tv(Math.atan2(-zv, Sv) + 0)), hv
    }

    function av(vv, zv) {
      return wv(vv[0], vv[1], vv[2], zv)
    }

    function sv(vv, zv, Pv) {
      return wv(zv[0] - vv[0], zv[1] - vv[1], zv[2] - vv[2], Pv)
    }
  },
  38701: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      f: () => Sv
    });
    var hv = Pv(38683);

    function Sv(vv) {
      var zv;
      const Pv = "default" === vv.mode ? "movement" : null !== (zv = vv.playerFacing) && void 0 !== zv ? zv : "movement";
      return "cursor" === Pv ? {
        facing: Pv,
        mouseTurns: null
      } : {
        facing: Pv,
        mouseTurns: "default" !== vv.mode && void 0 !== vv.playerLook ? "look" : "view"
      }
    }

    function ev(vv, zv, Pv, Sv, ev, gv) {
      return gv.ND = 0, gv.lD = 0, gv.pointedAt = void 0, void 0 !== Sv ? ev ? (gv.pointedAt = Sv, vv) : (0, hv.r)(Sv.heading) : ev ? (gv.ND = zv, gv.lD = Pv, vv) : (0, hv.r)(vv + zv)
    }
  },
  38691: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Mv
    });
    var hv = Pv(38694),
      Sv = Pv(38683),
      ev = Pv(36506);

    function gv(vv, zv, Pv, hv) {
      if (!(hv > 0)) return zv;
      const Sv = zv > vv ? Math.min(zv, vv + Pv / hv) : Math.max(zv, vv - Pv / hv);
      return Math.abs(zv - Sv) < 1e-9 ? zv : Sv
    }
    class pv {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: hv.h,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(vv) {
        !this.isGoingOut() && this.sinceTurnMs < hv.m.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: vv
        } : (this.waiting = null, this.startOut(vv))
      }
      fadeIn(vv) {
        this.isGoingOut() ? this.sinceTurnMs < hv.m.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: vv
        } : (this.waiting = null, this.startIn(vv)) : this.waiting = null
      }
      advance(vv) {
        const zv = this.waiting;
        if (null === zv) return this.step(vv);
        const Pv = hv.m.minFadeTurnMs - this.sinceTurnMs;
        if (Pv > vv) return this.step(vv);
        const Sv = this.step(Pv);
        return this.waiting = null, "out" === zv.turn ? this.startOut(zv.transition) : this.startIn(zv.minMs), this.step(vv - Pv) || Sv
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(vv) {
        ("in" === this.phase || null === this.phase && this.clearMs < hv.m.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = vv.colour), this.outMs = vv.outMs, this.holdMs = vv.holdMs, this.inMs = vv.inMs
      }
      startIn(vv) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(vv, this.inMs)
      }
      step(vv) {
        const zv = this.screen;
        this.sinceTurnMs += vv, null === this.phase && (this.clearMs += vv);
        let Pv = !1,
          Sv = vv;
        if ("out" === this.phase) {
          const hv = (1 - zv.alpha) * this.outMs;
          if (zv.alpha = gv(zv.alpha, 1, vv, this.outMs), zv.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, Sv = Math.max(0, vv - hv), Pv = !0
        }
        let ev = vv;
        if ("hold" === this.phase) {
          this.heldMs += Sv;
          const vv = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - hv.m.minFadeTurnMs);
          if (vv < 0 || Pv) return Pv;
          this.phase = "in", this.sinceTurnMs = vv, ev = vv
        }
        return "in" === this.phase && (zv.alpha = gv(zv.alpha, 0, ev, this.inMs), zv.alpha <= 0 && (this.phase = null, this.clearMs = 0)), Pv
      }
    }
    var dv = Pv(38679),
      Nv = Pv(38696),
      lv = Pv(1855),
      Tv = Pv(36110);

    function Wv(vv, zv) {
      for (let Pv = 0; Pv < zv.length; Pv++) zv[Pv] = vv[Pv]
    }

    function wv(vv, zv) {
      var Pv;
      return null !== (Pv = vv.fov) && void 0 !== Pv ? Pv : zv.getDefaultFov()
    }

    function av(vv, zv, Pv, hv, Sv) {
      const ev = 2 / hv,
        gv = Math.exp(-ev * Sv);
      for (let pv = 0; pv < vv.length; pv++) {
        const hv = vv[pv] - Pv[pv],
          dv = (zv[pv] + ev * hv) * Sv;
        vv[pv] = Pv[pv] + (hv + dv) * gv, zv[pv] = (zv[pv] - ev * dv) * gv
      }
    }
    class sv {
      constructor(vv, zv, Pv, hv) {
        var ev, gv, pv, dv, Nv;
        this.settings = vv, this.oT = zv, this.targets = Pv, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.pC = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Sv.r)((0, lv.k)(null !== (ev = vv.viewHeading) && void 0 !== ev ? ev : 0)),
          pitch: (0, Sv.h)((0, lv.k)(null !== (gv = vv.viewElevation) && void 0 !== gv ? gv : 45))
        }, this.closestDistance = null !== (pv = vv.closestDistance) && void 0 !== pv ? pv : Math.min(6, null !== (dv = vv.furthestDistance) && void 0 !== dv ? dv : 1 / 0), this.furthestDistance = null !== (Nv = vv.furthestDistance) && void 0 !== Nv ? Nv : Math.max(64, this.closestDistance);
        const Tv = (0, Sv.g)(this.base.heading, this.base.pitch, this.forward),
          Wv = hv.position,
          wv = this.closestDistance;
        this.goal = [Wv[0] + Tv[0] * wv, Wv[1] + Tv[1] * wv, Wv[2] + Tv[2] * wv, wv, this.base.heading, this.base.pitch]
      }
      update(vv, zv, Pv) {
        var hv, ev;
        this.placeGoal(null !== (hv = this.settings.fov) && void 0 !== hv ? hv : this.oT.getBaseFov()), this.goal[4] = (0, Sv.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const gv = null !== (ev = this.settings.smoothMs) && void 0 !== ev ? ev : 400;
        !this.started || gv < 1 ? (Wv(this.goal, this.smoothed), this.pC.fill(0), this.started = !0) : av(this.smoothed, this.pC, this.goal, gv, vv), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Sv.h)(this.smoothed[5]), zv.apply(this.angles, Pv);
        const pv = (0, Sv.g)(Pv.heading, Pv.pitch, this.forward);
        for (let Sv = 0; Sv < 3; Sv++) Pv.position[Sv] = this.smoothed[Sv] - pv[Sv] * this.smoothed[3];
        Pv.fov = wv(this.settings, this.oT)
      }
      continueFrom(vv) {
        vv instanceof sv && (Wv(vv.goal, this.goal), Wv(vv.smoothed, this.smoothed), Wv(vv.pC, this.pC), this.framedTargets = vv.framedTargets, this.started = vv.started)
      }
      reset() {
        this.pC.fill(0), this.started = !1
      }
      placeGoal(vv) {
        var zv;
        let Pv = 0;
        for (const lv of this.settings.targets) {
          const vv = this.targets.currentAimPoint(lv);
          vv && (0, dv.i)(vv, this.pointAt(Pv++))
        }
        if (Pv > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const vv = this.targets.aimPoint(this.oT.localPlayerId);
          vv && (0, dv.i)(vv, this.pointAt(Pv++))
        }
        const hv = this.goal;
        if (0 === Pv) return void(hv[3] = this.withinDistances(hv[3]));
        for (let dv = 0; dv < 3; dv++) {
          let vv = 1 / 0,
            zv = -1 / 0;
          for (let hv = 0; hv < Pv; hv++) vv = Math.min(vv, this.points[hv][dv]), zv = Math.max(zv, this.points[hv][dv]);
          hv[dv] = (vv + zv) / 2
        }
        let Sv = 0;
        for (let dv = 0; dv < Pv; dv++) {
          const vv = this.points[dv];
          Sv = Math.max(Sv, Math.hypot(vv[0] - hv[0], vv[1] - hv[1], vv[2] - hv[2]))
        }
        const ev = Math.tan((0, lv.k)(vv) / 2),
          gv = Math.atan(ev * (!0 === this.settings.letterbox ? Tv.e : 1)),
          pv = Math.atan(ev * this.oT.getAspectRatio()),
          Nv = (Sv + (null !== (zv = this.settings.padding) && void 0 !== zv ? zv : 2)) / Math.sin(Math.min(gv, pv));
        hv[3] = this.withinDistances(Nv)
      }
      withinDistances(vv) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, vv))
      }
      pointAt(vv) {
        return vv === this.points.length && this.points.push([0, 0, 0]), this.points[vv]
      }
    }
    class Cv {
      constructor(vv) {
        this.limits = vv, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(vv) {
        this.limits && (this.yawOffset = vv.yawOffset, this.pitchOffset = vv.pitchOffset, this.idleMs = vv.idleMs)
      }
      update(vv, zv) {
        const Pv = this.limits;
        if (!Pv) return;
        const hv = Number.isFinite(zv.ND) ? zv.ND : 0,
          Sv = Number.isFinite(zv.lD) ? zv.lD : 0;
        if (zv.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: zv.pointedAt.heading,
          pitch: zv.pointedAt.pitch
        };
        else if (0 !== hv || 0 !== Sv) this.idleMs = 0, this.yawOffset += hv, this.pitchOffset += Sv;
        else {
          const zv = Math.max(0, this.idleMs + vv - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += vv, void 0 !== Pv.returnMs && zv > 0) {
            const vv = Pv.returnMs > 0 ? Math.exp(-3 * zv / Pv.returnMs) : 0;
            this.yawOffset *= vv, this.pitchOffset *= vv
          }
        }
        this.clampOffsets(Pv)
      }
      clampOffsets(vv) {
        if (vv.maxYaw >= 180) this.yawOffset = (0, Sv.s)(0, this.yawOffset);
        else {
          const zv = (0, lv.k)(vv.maxYaw);
          this.yawOffset = Math.max(-zv, Math.min(zv, this.yawOffset))
        }
        const zv = (0, lv.k)(vv.maxPitch);
        this.pitchOffset = Math.max(-zv, Math.min(zv, this.pitchOffset))
      }
      apply(vv, zv) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Sv.s)(vv.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - vv.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const Pv = (0, Sv.h)(vv.pitch + this.pitchOffset);
        this.pitchOffset = Pv - vv.pitch, zv.heading = (0, Sv.r)(vv.heading + this.yawOffset), zv.pitch = Pv
      }
      unapply(vv, zv) {
        zv.heading = (0, Sv.r)(vv.heading - this.yawOffset), zv.pitch = (0, Sv.h)(vv.pitch - this.pitchOffset)
      }
    }
    const iv = 1e-6;

    function cv(vv) {
      return Math.sqrt(vv[0] * vv[0] + vv[1] * vv[1] + vv[2] * vv[2])
    }

    function Gv(vv, zv, Pv, hv, Sv) {
      const ev = Sv * Sv,
        gv = ev * Sv;
      return (2 * gv - 3 * ev + 1) * vv + (gv - 2 * ev + Sv) * zv + (-2 * gv + 3 * ev) * Pv + (gv - ev) * hv
    }

    function mv(vv, zv, Pv, hv, Sv) {
      const ev = Sv * Sv;
      return (6 * ev - 6 * Sv) * vv + (3 * ev - 4 * Sv + 1) * zv + (-6 * ev + 6 * Sv) * Pv + (3 * ev - 2 * Sv) * hv
    }

    function jv(vv, zv) {
      const Pv = zv[0] - vv[0],
        hv = zv[1] - vv[1],
        Sv = zv[2] - vv[2];
      return Math.sqrt(Pv * Pv + hv * hv + Sv * Sv)
    }

    function fv(vv, zv, Pv, hv, Sv, ev) {
      for (let gv = 0; gv < 3; gv++) ev[gv] = Sv ? vv[gv] * hv : Pv[gv] - zv[gv];
      return Sv && function(vv, zv) {
        const Pv = cv(vv);
        if (Pv > zv) {
          const hv = zv / Pv;
          vv[0] *= hv, vv[1] *= hv, vv[2] *= hv
        }
      }(ev, 3 * jv(zv, Pv)), ev
    }

    function Fv(vv, zv, Pv, hv) {
      for (let Sv = 0; Sv < 3; Sv++) hv[Sv] = 6 * (zv[Sv] - vv[Sv]) - 2 * Pv[Sv];
      if (cv(hv) < iv)
        for (let Sv = 0; Sv < 3; Sv++) hv[Sv] = zv[Sv] - vv[Sv];
      return hv
    }

    function Yv(vv, zv) {
      return [2 * zv[0] - vv[0], 2 * zv[1] - vv[1], 2 * zv[2] - vv[2]]
    }

    function nv(vv, zv, Pv, hv, Sv, ev, gv) {
      if (!ev && !gv) return 0;
      const pv = ev ? vv : 2 * zv - Pv,
        dv = gv ? Pv : 2 * zv - vv,
        Nv = ev ? hv : Sv,
        lv = gv ? Sv : hv,
        Tv = (zv - pv) / Nv,
        Wv = (dv - zv) / lv;
      if (Tv * Wv <= 0) return 0;
      const wv = (dv - pv) / (Nv + lv),
        av = 3 * Math.min(Math.abs(Tv), Math.abs(Wv));
      return Math.max(-av, Math.min(av, wv))
    }

    function Ov(vv, zv, Pv, hv, Sv, ev, gv) {
      const {
        u: pv,
        segmentMs: dv
      } = vv;
      if (!vv.curved) return Pv + (hv - Pv) * pv;
      return Gv(Pv, nv(zv, Pv, hv, vv.beforeMs, dv, ev, !0) * dv, hv, nv(Pv, hv, Sv, dv, vv.afterMs, !0, gv) * dv, pv)
    }

    function Dv(vv) {
      return Math.abs(vv.pitch) >= Sv.c
    }
    class Kv {
      constructor(vv, zv, Pv, hv, Sv) {
        this.nodes = vv, this.prevNodes = Pv, this.nextNodes = hv, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = vv.map(((vv, Pv) => this.nodeTangent(zv, Sv, Pv)))
      }
      sample(vv, zv, Pv) {
        const {
          index: hv,
          toIndex: ev,
          segmentMs: gv,
          curved: pv
        } = vv, dv = this.fromAngles, Nv = this.toAngles, lv = this.nodeAngles(hv, Pv.position, zv, dv), Tv = this.nodeAngles(ev, Pv.position, zv, Nv);
        if (gv > 0 && "aim" !== lv && "aim" !== Tv && this.liveTangent(vv, dv)) return Pv.heading = (0, Sv.r)(dv.heading), void(Pv.pitch = dv.pitch);
        if ("none" === lv && "none" === Tv) return;
        !pv && gv > 0 && ("tangent" === lv && this.liveTangent(vv, dv), "tangent" === Tv && this.liveTangent(vv, Nv)), "none" === lv ? (0, Sv.l)(Nv, dv) : "none" === Tv && (0, Sv.l)(dv, Nv);
        const Wv = pv && vv.beforeIndex >= 0 && "none" !== this.nodeAngles(vv.beforeIndex, Pv.position, zv, this.beforeAngles),
          wv = pv && vv.afterIndex >= 0 && "none" !== this.nodeAngles(vv.afterIndex, Pv.position, zv, this.afterAngles),
          av = (0, Sv.w)(dv.heading, Nv.heading),
          sv = Ov(vv, Wv ? (0, Sv.w)(dv.heading, this.beforeAngles.heading) : 0, dv.heading, av, wv ? (0, Sv.w)(av, this.afterAngles.heading) : 0, Wv, wv);
        Pv.heading = (0, Sv.r)(sv), Pv.pitch = (0, Sv.h)(Ov(vv, this.beforeAngles.pitch, dv.pitch, Nv.pitch, this.afterAngles.pitch, Wv, wv))
      }
      nodeAngles(vv, zv, Pv, hv) {
        const Sv = this.rawNodeAngles(vv, zv, Pv, hv);
        return "none" !== Sv && Dv(hv) && !this.borrowHeading(this.prevNodes[vv], zv, Pv, hv) && this.borrowHeading(this.nextNodes[vv], zv, Pv, hv), Sv
      }
      borrowHeading(vv, zv, Pv, hv) {
        const Sv = this.borrowedAngles;
        return !(vv < 0 || "none" === this.rawNodeAngles(vv, zv, Pv, Sv) || Dv(Sv)) && (hv.heading = Sv.heading, !0)
      }
      rawNodeAngles(vv, zv, Pv, hv) {
        const ev = this.nodes[vv].keyframe;
        if (ev.lookDirection) return (0, Sv.m)(ev.lookDirection, hv), "aim";
        if (void 0 !== ev.lookAt) {
          const vv = Pv(ev.lookAt);
          if (vv) return (0, Sv.o)(zv, vv, hv), "aim"
        }
        const gv = this.tangents[vv];
        return gv ? ((0, Sv.l)(gv, hv), "tangent") : "none"
      }
      liveTangent(vv, zv) {
        const Pv = this.nodes[vv.index].position,
          hv = this.nodes[vv.toIndex].position,
          ev = this.derivative;
        for (let Sv = 0; Sv < 3; Sv++) ev[Sv] = mv(Pv[Sv], vv.fromTangent[Sv], hv[Sv], vv.toTangent[Sv], vv.u);
        return cv(ev) > 1e-9 ? ((0, Sv.m)(ev, zv), !0) : !(jv(Pv, hv) < iv) && ((0, Sv.m)(Fv(Pv, hv, vv.u < .5 ? vv.toTangent : vv.fromTangent, ev), zv), !0)
      }
      nodeTangent(vv, zv, Pv) {
        var hv;
        const ev = vv[Pv];
        if (cv(ev) > 1e-9) return (0, Sv.m)(ev, {
          heading: 0,
          pitch: 0
        });
        const gv = null !== (hv = this.restDirectionTo(Pv, Pv + 1, vv, zv)) && void 0 !== hv ? hv : this.restDirectionTo(Pv, Pv - 1, vv, zv);
        return gv ? (0, Sv.m)(gv, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(vv, zv, Pv, hv) {
        const Sv = this.nodes[vv],
          ev = this.nodes[zv];
        if (!ev || jv(Sv.position, ev.position) < iv) return null;
        const [gv, pv] = zv > vv ? [Sv, ev] : [ev, Sv], dv = fv(Pv[zv], gv.position, pv.position, pv.timeMs - gv.timeMs, hv, [0, 0, 0]);
        return Fv(gv.position, pv.position, dv, [0, 0, 0])
      }
    }

    function Vv(vv, zv) {
      const Pv = vv.lookDirection || zv.lookDirection ? function(vv, zv) {
        if (!vv || !zv) return vv === zv;
        const Pv = cv(vv),
          hv = cv(zv);
        return Math.hypot(vv[0] / Pv - zv[0] / hv, vv[1] / Pv - zv[1] / hv, vv[2] / Pv - zv[2] / hv) < iv
      }(vv.lookDirection, zv.lookDirection) : (hv = vv.lookAt, Sv = zv.lookAt, "object" !== typeof hv || "object" !== typeof Sv ? hv === Sv : jv(hv, Sv) < iv);
      var hv, Sv;
      return jv(vv.position, zv.position) < iv && vv.fov === zv.fov && Pv
    }
    class Uv {
      constructor(vv, zv, Pv) {
        if (this.smooth = zv, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === vv.length) throw new Error("A camera path needs at least one keyframe");
        for (let ev = 1; ev < vv.length; ev++)
          if (!(vv[ev].timeMs > vv[ev - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = vv.map((vv => {
          var zv;
          return {
            timeMs: vv.timeMs,
            position: [...vv.position],
            keyframe: vv,
            easing: (0, ev.m)(null !== (zv = vv.easing) && void 0 !== zv ? zv : "linear")
          }
        }));
        const hv = this.nodes[0],
          Sv = this.nodes[this.nodes.length - 1],
          gv = Pv && this.nodes.length > 1;
        gv && !Vv(hv.keyframe, Sv.keyframe) && this.nodes.push({
          ...hv,
          timeMs: Sv.timeMs + (Sv.timeMs - hv.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = gv ? this.nodes[this.nodes.length - 1].timeMs - hv.timeMs : 0, this.prevNodes = this.nodes.map(((vv, zv) => this.neighbour(zv, -1))), this.nextNodes = this.nodes.map(((vv, zv) => this.neighbour(zv, 1))), this.prevGaps = this.prevNodes.map(((vv, zv) => vv >= 0 ? this.gapMs(zv, -1) : 0)), this.nextGaps = this.nextNodes.map(((vv, zv) => vv >= 0 ? this.gapMs(zv, 1) : 0)), this.velocities = this.nodes.map(((vv, zv) => {
          const Pv = this.prevNodes[zv],
            hv = this.nextNodes[zv];
          return function(vv, zv, Pv, hv, Sv, ev) {
            if (ev[0] = 0, ev[1] = 0, ev[2] = 0, !vv && !Pv) return ev;
            const gv = null !== vv && void 0 !== vv ? vv : Yv(null !== Pv && void 0 !== Pv ? Pv : zv, zv),
              pv = null !== Pv && void 0 !== Pv ? Pv : Yv(null !== vv && void 0 !== vv ? vv : zv, zv),
              dv = vv ? hv : Sv,
              Nv = Pv ? Sv : hv,
              lv = jv(gv, zv),
              Tv = jv(zv, pv);
            if (lv < iv || Tv < iv) return ev;
            const Wv = Math.sqrt(lv),
              wv = Math.sqrt(Tv),
              av = (Wv + wv) / (dv + Nv);
            for (let sv = 0; sv < 3; sv++) {
              const vv = (zv[sv] - gv[sv]) / Wv - (pv[sv] - gv[sv]) / (Wv + wv) + (pv[sv] - zv[sv]) / wv;
              ev[sv] = vv * av
            }
            return ev
          }(Pv >= 0 ? this.nodes[Pv].position : null, vv.position, hv >= 0 ? this.nodes[hv].position : null, this.prevGaps[zv], this.nextGaps[zv], [0, 0, 0])
        })), this.aim = new Kv(this.nodes, this.velocities, this.prevNodes, this.nextNodes, zv)
      }
      sample(vv, zv, Pv, hv) {
        const Sv = this.findSegment(this.pathTime(vv));
        this.samplePosition(Sv, hv.position), this.aim.sample(Sv, zv, hv);
        const {
          beforeIndex: ev,
          afterIndex: gv
        } = Sv;
        hv.fov = Ov(Sv, ev >= 0 ? this.fovAt(ev, Pv) : 0, this.fovAt(Sv.index, Pv), this.fovAt(Sv.toIndex, Pv), gv >= 0 ? this.fovAt(gv, Pv) : 0, ev >= 0, gv >= 0)
      }
      pathTime(vv) {
        const zv = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || vv <= zv) return vv;
        const Pv = vv - zv;
        return zv + Pv - this.loopMs * Math.floor(Pv / this.loopMs)
      }
      findSegment(vv) {
        const zv = this.nodes,
          Pv = this.segment;
        let hv = Pv.index;
        for (vv < zv[hv].timeMs && (hv = 0); hv < zv.length - 2 && zv[hv + 1].timeMs <= vv;) hv++;
        const Sv = Math.min(hv + 1, zv.length - 1),
          gv = zv[Sv].timeMs - zv[hv].timeMs;
        return Pv.index = hv, Pv.toIndex = Sv, Pv.segmentMs = gv, Pv.u = gv > 0 ? (0, ev.j)((vv - zv[hv].timeMs) / gv, zv[hv].easing) : 1, Pv.curved = this.smooth && gv > 0, Pv.beforeIndex = this.prevNodes[hv], Pv.afterIndex = this.nextNodes[Sv], Pv.beforeMs = this.prevGaps[hv], Pv.afterMs = this.nextGaps[Sv], Pv
      }
      samplePosition(vv, zv) {
        const {
          fromTangent: Pv,
          toTangent: hv,
          curved: Sv
        } = vv, ev = this.nodes[vv.index].position, gv = this.nodes[vv.toIndex].position;
        fv(this.velocities[vv.index], ev, gv, vv.segmentMs, Sv, Pv), fv(this.velocities[vv.toIndex], ev, gv, vv.segmentMs, Sv, hv);
        const pv = vv.u;
        for (let dv = 0; dv < 3; dv++) zv[dv] = Sv ? Gv(ev[dv], Pv[dv], gv[dv], hv[dv], pv) : ev[dv] + (gv[dv] - ev[dv]) * pv
      }
      fovAt(vv, zv) {
        var Pv;
        return null !== (Pv = this.nodes[vv].keyframe.fov) && void 0 !== Pv ? Pv : zv
      }
      neighbour(vv, zv) {
        const Pv = this.nodes.length - 1,
          hv = vv + zv;
        return hv >= 0 && hv <= Pv ? hv : this.loopMs <= 0 || Pv < 2 ? -1 : hv < 0 ? Pv - 1 : 1
      }
      gapMs(vv, zv) {
        const Pv = this.nodes.length - 1;
        if (1 === zv) {
          const zv = vv === Pv ? 0 : vv;
          return this.nodes[zv + 1].timeMs - this.nodes[zv].timeMs
        }
        const hv = 0 === vv ? Pv : vv;
        return this.nodes[hv].timeMs - this.nodes[hv - 1].timeMs
      }
    }
    class Rv {
      constructor(vv) {
        this.oT = vv, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = zv => vv.getEntityPosition(zv), this.readAimPoint = zv => vv.getEntityAimPoint(zv)
      }
      aimPoint(vv) {
        return "string" !== typeof vv ? (0, dv.p)(vv, 3) ? vv : null : this.resolve(vv, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(vv) {
        const zv = "string" === typeof vv ? this.oT.getEntityAimPoint(vv) : vv;
        return zv && (0, dv.p)(zv, 3) ? zv : null
      }
      feetPosition(vv) {
        return this.resolve(vv, this.readFeet, this.lastFeet)
      }
      heading(vv) {
        const zv = this.oT.getEntityHeading(vv);
        if (null !== zv && Number.isFinite(zv)) return this.lastHeadings.set(vv, zv), zv;
        const Pv = this.lastHeadings.get(vv);
        return void 0 !== Pv ? Pv : vv === this.oT.localPlayerId ? 0 : this.heading(this.oT.localPlayerId)
      }
      resolve(vv, zv, Pv) {
        const hv = zv(vv);
        let Sv = Pv.get(vv);
        return hv && (0, dv.p)(hv, 3) ? (Sv || (Sv = [0, 0, 0], Pv.set(vv, Sv)), Sv[0] = hv[0], Sv[1] = hv[1], Sv[2] = hv[2], Sv) : Sv || (vv === this.oT.localPlayerId ? null : this.resolve(this.oT.localPlayerId, zv, Pv))
      }
    }

    function xv(vv) {
      return {
        heading: vv.heading,
        pitch: vv.pitch
      }
    }

    function tv(vv, zv) {
      Number.isFinite(vv.heading) && Number.isFinite(vv.pitch) || (0, Sv.l)(zv, vv)
    }

    function qv(vv, zv, Pv, hv, ev) {
      if (zv) return void(0, Sv.m)(zv, ev);
      const gv = hv.aimPoint(Pv);
      gv && (0, Sv.o)(vv, gv, ev)
    }
    class Iv {
      constructor(vv, zv, Pv, hv) {
        this.settings = vv, this.oT = zv, this.targets = Pv, this.base = void 0, this.base = xv(hv)
      }
      update(vv, zv, Pv) {
        var hv;
        const Sv = this.settings;
        (0, dv.i)(Sv.position, Pv.position), qv(Sv.position, Sv.lookDirection, null !== (hv = Sv.lookAt) && void 0 !== hv ? hv : this.oT.localPlayerId, this.targets, this.base), zv.apply(this.base, Pv), Pv.fov = wv(Sv, this.oT)
      }
      continueFrom(vv) {
        vv instanceof Iv && (0, Sv.l)(vv.base, this.base)
      }
      reset(vv) {
        tv(this.base, vv)
      }
    }
    class Qv {
      constructor(vv, zv, Pv, hv) {
        this.settings = vv, this.oT = zv, this.targets = Pv, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.pC = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = xv(hv), this.goal = [...hv.position]
      }
      update(vv, zv, Pv) {
        var hv, Sv, ev;
        const gv = this.settings,
          pv = null !== (hv = gv.target) && void 0 !== hv ? hv : this.oT.localPlayerId,
          Nv = this.targets.feetPosition(pv);
        let lv = !1;
        Nv && (lv = this.foundFeet && jv(this.lastFeet, Nv) > 32 + .1 * vv, (0, dv.i)(Nv, this.lastFeet), this.foundFeet = !0, this.placeGoal(Nv, pv));
        const Tv = null !== (Sv = gv.smoothMs) && void 0 !== Sv ? Sv : 0;
        !this.started || Tv < 1 || lv ? ((0, dv.i)(this.goal, this.smoothed), this.pC.fill(0), this.started = !0) : av(this.smoothed, this.pC, this.goal, Tv, vv), lv && (this.distance = -1), (0, dv.i)(this.smoothed, Pv.position);
        const Wv = !0 === gv.avoidTerrain ? this.pullIn(pv, vv, Pv) : 1;
        let sv = this.goal;
        if ("target" === gv.offsetSpace) sv = Pv.position;
        else if (Wv < 1) {
          sv = this.aimOrigin;
          for (let vv = 0; vv < 3; vv++) sv[vv] = Pv.position[vv] + (this.goal[vv] - this.smoothed[vv]) * Wv
        }
        qv(sv, gv.lookDirection, null !== (ev = gv.lookAt) && void 0 !== ev ? ev : pv, this.targets, this.base), zv.apply(this.base, Pv), Pv.fov = wv(gv, this.oT)
      }
      continueFrom(vv) {
        vv instanceof Qv && (0, hv.t)(vv.settings.target, this.settings.target) && ((0, Sv.l)(vv.base, this.base), (0, dv.i)(vv.goal, this.goal), (0, dv.i)(vv.lastFeet, this.lastFeet), this.foundFeet = vv.foundFeet, (0, dv.i)(vv.smoothed, this.smoothed), (0, dv.i)(vv.pC, this.pC), this.started = vv.started, !0 === vv.settings.avoidTerrain && (this.distance = vv.distance))
      }
      reset(vv) {
        tv(this.base, vv), this.pC.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(vv, zv, Pv) {
        const hv = this.targets.aimPoint(vv);
        if (!hv) return 1;
        const Sv = Pv.position,
          ev = jv(hv, Sv);
        if (!(ev > 0)) return 1;
        const gv = this.toCamera;
        for (let dv = 0; dv < 3; dv++) gv[dv] = (Sv[dv] - hv[dv]) / ev;
        const pv = function(vv, zv, Pv) {
          return vv < 0 || zv < vv ? zv : zv + (vv - zv) * Math.exp(-Pv / 150)
        }(this.distance, function(vv, zv, Pv, hv) {
          const Sv = vv.raycastTerrain(zv, Pv, hv);
          return null !== Sv && Number.isFinite(Sv) ? Math.min(hv, Math.max(0, Sv - .2)) : hv
        }(this.oT, hv, gv, ev), zv);
        if (ev - pv < .001) return this.distance = -1, 1;
        this.distance = pv;
        for (let dv = 0; dv < 3; dv++) Sv[dv] = hv[dv] + gv[dv] * pv;
        return pv / ev
      }
      placeGoal(vv, zv) {
        const Pv = this.settings.offset;
        let hv = Pv[0],
          Sv = Pv[2];
        if ("target" === this.settings.offsetSpace) {
          const vv = this.targets.heading(zv),
            ev = Math.cos(vv),
            gv = Math.sin(vv);
          hv = Pv[0] * ev + Pv[2] * gv, Sv = -Pv[0] * gv + Pv[2] * ev
        }
        this.goal[0] = vv[0] + hv, this.goal[1] = vv[1] + Pv[1], this.goal[2] = vv[2] + Sv
      }
    }
    class Zv {
      constructor(vv, zv, Pv, hv) {
        var Sv, ev;
        this.settings = vv, this.oT = zv, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = vv.keyframes.length > 0 ? new Uv(vv.keyframes, null === (Sv = vv.smooth) || void 0 === Sv || Sv, null !== (ev = vv.loop) && void 0 !== ev && ev) : null, this.base = (0, dv.g)(hv, (0, dv.m)()), this.resolveTarget = vv => Pv.aimPoint(vv)
      }
      update(vv, zv, Pv) {
        this.elapsedMs += vv;
        const hv = wv(this.settings, this.oT);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, hv, this.base) : this.base.fov = hv, (0, dv.i)(this.base.position, Pv.position), Pv.fov = this.base.fov, zv.apply(this.base, Pv)
      }
      continueFrom(vv) {
        vv instanceof Zv && (0, hv.t)(vv.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = vv.elapsedMs, (0, dv.g)(vv.base, this.base))
      }
      reset(vv) {
        tv(this.base, vv), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function Av(vv, zv) {
      return (0, hv.x)(vv, zv)
    }
    class Lv {
      constructor(vv, zv, Pv) {
        var hv;
        this.settings = vv, this.oT = zv, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Sv = null !== Pv && Pv.settings.mode === vv.mode,
          ev = Sv ? Pv.pose : zv.getDefaultPose();
        this.pose = (0, dv.g)(ev, (0, dv.m)()), this.lastGoodPose = (0, dv.g)(Sv ? Pv.lastGoodPose : ev, (0, dv.m)()), this.look = new Cv(vv.playerLook), this.targets = null !== (hv = null === Pv || void 0 === Pv ? void 0 : Pv.targets) && void 0 !== hv ? hv : new Rv(zv);
        const gv = (0, dv.g)(ev, (0, dv.m)());
        Sv && Pv.look.unapply(gv, gv), this.mode = function(vv, zv, Pv, hv) {
          switch (vv.mode) {
            case "fixed":
              return new Iv(vv, zv, Pv, hv);
            case "follow":
              return new Qv(vv, zv, Pv, hv);
            case "path":
              return new Zv(vv, zv, Pv, hv);
            case "frame":
              return new sv(vv, zv, Pv, hv)
          }
        }(vv, zv, this.targets, gv), Sv && (this.look.continueFrom(Pv.look), this.mode.continueFrom(Pv.mode))
      }
      update(vv, zv) {
        return this.look.update(vv, zv), this.mode.update(vv, this.look, this.pose), (0, dv.n)(this.pose) ? (0, dv.g)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, dv.g)(this.lastGoodPose, this.pose), this.mode.reset((0, dv.n)(this.lastGoodPose) ? this.lastGoodPose : this.oT.getDefaultPose())), this.pose
      }
    }

    function Hv(vv) {
      return [0, 0, vv[2], vv[3]]
    }
    class Mv {
      constructor(vv) {
        this.oT = vv, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new pv, this.shot = null, this.blend = null, this.mixed = (0, dv.m)(), this.output = (0, dv.m)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(vv) {
        const zv = (0, Nv.e)(vv);
        if ((0, hv.t)(zv, this.pending ? this.pending.settings : this.settings)) return;
        const Pv = Av(this.settings, zv);
        if (void 0 !== zv.transition && !Pv) return this.pending = {
          settings: zv,
          shot: "default" === zv.mode ? null : new Lv(zv, this.oT, null)
        }, void this.fade.fadeOut(zv.transition);
        const Sv = null !== this.pending;
        this.pending = null, !Sv && Pv || this.fade.fadeIn(hv.m.minTransitionFadeMs), this.show(zv, !1)
      }
      show(vv, zv) {
        var Pv, Sv;
        if ((0, hv.t)(vv, this.settings)) return;
        const gv = !zv && Av(this.settings, vv);
        this.settings = vv;
        const pv = null !== this.blend && this.blend.elapsedMs > 0,
          Nv = (0, dv.g)(this.hasOutput ? this.output : this.oT.getDefaultPose(), (0, dv.m)());
        if (this.shot = "default" === vv.mode ? null : new Lv(vv, this.oT, zv ? null : this.shot), gv) return;
        const lv = zv || !this.shot && !this.hasOutput ? 0 : null !== (Pv = vv.blendInMs) && void 0 !== Pv ? Pv : 0;
        if (lv <= 0) return void(this.blend = null);
        const Tv = (0, ev.m)(null !== (Sv = vv.blendEasing) && void 0 !== Sv ? Sv : "easeInOut");
        this.blend = {
          from: Nv,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: lv,
          easing: pv ? Hv(Tv) : Tv
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
      update(vv, zv) {
        const Pv = Number.isFinite(vv) && vv > 0 ? vv : 0;
        if (this.fade.advance(Pv) && null !== this.pending) {
          const {
            settings: vv
          } = this.pending;
          this.pending = null, this.show(vv, !0)
        }
        this.loadingPositions.length = 0;
        const hv = this.pending;
        if (null !== hv && void 0 !== hv && hv.shot) {
          const vv = "path" === hv.settings.mode ? 0 : Pv;
          this.noteLoadingPosition(hv.shot.update(vv, dv.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const gv = this.shot ? this.shot.update(Pv, zv) : this.oT.getDefaultPose();
        this.shot && this.noteLoadingPosition(gv.position);
        const pv = this.blend;
        if (!pv) return this.writeOutput(gv);
        pv.elapsedMs += Pv;
        const Nv = Math.min(1, pv.elapsedMs / pv.durationMs);
        if (pv.headingDelta = Number.isFinite(pv.headingDelta) ? (0, Sv.w)(pv.headingDelta, gv.heading - pv.from.heading) : (0, Sv.s)(pv.from.heading, gv.heading), (0, dv.r)(pv.from, gv, pv.headingDelta, (0, ev.j)(Nv, pv.easing), this.mixed), Nv >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else pv.fromScripted && this.noteLoadingPosition(pv.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(vv) {
        if (vv.every(Number.isFinite)) {
          const zv = this.loadingPositions;
          zv.push((0, dv.i)(vv, this.loadingSlots[zv.length]))
        }
      }
      writeOutput(vv) {
        const zv = this.output;
        (0, dv.n)(vv) ? (0, dv.g)(vv, zv) : this.hasOutput || (0, dv.g)(this.oT.getDefaultPose(), zv), zv.pitch = (0, Sv.h)(zv.pitch);
        const Pv = this.oT.getDefaultFov(),
          ev = Number.isFinite(Pv) && Pv > 0 && Pv < 180,
          gv = ev ? Math.min(hv.m.minFov, Pv) : hv.m.minFov,
          pv = ev ? Math.max(hv.m.maxFov, Pv) : hv.m.maxFov;
        return zv.fov = Number.isFinite(zv.fov) ? Math.min(pv, Math.max(gv, zv.fov)) : pv, this.hasOutput = !0, zv
      }
    }
  },
  38679: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      g: () => pv,
      i: () => gv,
      m: () => ev,
      n: () => Nv,
      p: () => dv,
      r: () => lv
    });
    var hv = Pv(38683);
    const Sv = {
      ND: 0,
      lD: 0
    };

    function ev() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function gv(vv, zv) {
      return zv[0] = vv[0], zv[1] = vv[1], zv[2] = vv[2], zv
    }

    function pv(vv, zv) {
      return gv(vv.position, zv.position), zv.heading = vv.heading, zv.pitch = vv.pitch, zv.fov = vv.fov, zv
    }

    function dv(vv, zv) {
      return Array.isArray(vv) && vv.length === zv && vv.every(Number.isFinite)
    }

    function Nv(vv) {
      return dv(vv.position, 3) && Number.isFinite(vv.heading) && Number.isFinite(vv.pitch) && Number.isFinite(vv.fov)
    }

    function lv(vv, zv, Pv, Sv, ev) {
      for (let hv = 0; hv < 3; hv++) ev.position[hv] = vv.position[hv] + (zv.position[hv] - vv.position[hv]) * Sv;
      return ev.heading = (0, hv.r)(vv.heading + Pv * Sv), ev.pitch = vv.pitch + (zv.pitch - vv.pitch) * Sv, ev.fov = vv.fov + (zv.fov - vv.fov) * Sv, ev
    }
  },
  38696: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Fv,
      h: () => Wv
    });
    var hv = Pv(38694),
      Sv = Pv(38679);
    const ev = hv.i,
      gv = hv.q;

    function pv(vv, zv, Pv, hv) {
      return Number.isFinite(vv) ? Math.min(Pv, Math.max(zv, vv)) : hv
    }

    function dv(vv, zv, Pv) {
      return void 0 !== vv && Number.isFinite(vv) ? Math.min(Pv, Math.max(zv, vv)) : void 0
    }

    function Nv(vv) {
      const zv = hv.m.maxCoordinate;
      return [Math.min(zv, Math.max(-zv, vv[0])), Math.min(zv, Math.max(-zv, vv[1])), Math.min(zv, Math.max(-zv, vv[2]))]
    }

    function lv(vv) {
      return "string" === typeof vv ? vv : (0, Sv.p)(vv, 3) ? Nv(vv) : void 0
    }
    const Tv = new RegExp(hv.s);

    function Wv(vv) {
      return "string" === typeof vv && Tv.test(vv)
    }

    function wv(vv) {
      const zv = [];
      if (!Array.isArray(vv)) return zv;
      for (const Pv of vv.slice(0, hv.m.maxFrameTargets)) {
        const vv = lv(Pv);
        void 0 === vv || "string" === typeof vv && !Wv(vv) || zv.push(vv)
      }
      return zv
    }

    function av(vv) {
      if (!(0, Sv.p)(vv, 3)) return;
      const zv = Math.max(Math.abs(vv[0]), Math.abs(vv[1]), Math.abs(vv[2])),
        Pv = Math.hypot(vv[0] / zv, vv[1] / zv, vv[2] / zv);
      return 0 === zv || zv * Pv < hv.m.minDirectionLength ? void 0 : [vv[0] / zv / Pv, vv[1] / zv / Pv, vv[2] / zv / Pv]
    }

    function sv(vv) {
      if (void 0 !== vv) return "string" === typeof vv ? ev.includes(vv) ? vv : void 0 : (0, Sv.p)(vv, 4) ? [pv(vv[0], 0, 1, 0), pv(vv[1], hv.m.minEasingY, hv.m.maxEasingY, 0), pv(vv[2], 0, 1, 1), pv(vv[3], hv.m.minEasingY, hv.m.maxEasingY, 1)] : "linear"
    }

    function Cv(vv) {
      if (vv) return {
        maxYaw: pv(vv.maxYaw, 0, hv.m.maxPlayerLook, 0),
        maxPitch: pv(vv.maxPitch, 0, hv.m.maxPlayerLook, 0),
        returnMs: dv(vv.returnMs, 0, hv.m.maxReturnMs)
      }
    }
    const iv = new RegExp(hv.e);

    function cv(vv) {
      var zv;
      if ("object" !== typeof vv || null === vv) return;
      const Pv = hv.m.maxTransitionMs,
        Sv = hv.m.minTransitionFadeMs;
      return {
        colour: "string" === typeof vv.colour && iv.test(vv.colour) ? vv.colour : hv.h,
        outMs: pv(vv.outMs, Sv, Pv, Sv),
        holdMs: pv(null !== (zv = vv.holdMs) && void 0 !== zv ? zv : 0, 0, Pv, 0),
        inMs: pv(vv.inMs, Sv, Pv, Sv)
      }
    }

    function Gv(vv) {
      return !0 === vv || void 0
    }

    function mv(vv) {
      if ("object" !== typeof vv || null === vv) return !1;
      const zv = vv.lookAt;
      return Number.isFinite(vv.timeMs) && (0, Sv.p)(vv.position, 3) && (void 0 === zv || "string" === typeof zv || (0, Sv.p)(zv, 3))
    }

    function jv(vv) {
      return {
        ...vv,
        timeMs: pv(vv.timeMs, 0, hv.m.maxPathMs, 0),
        position: Nv(vv.position),
        lookAt: lv(vv.lookAt),
        lookDirection: av(vv.lookDirection),
        fov: dv(vv.fov, hv.m.minFov, hv.m.maxFov),
        easing: sv(vv.easing)
      }
    }

    function fv(vv) {
      const zv = [];
      if (!Array.isArray(vv)) return zv;
      for (const Pv of vv.slice(0, hv.m.maxKeyframes)) {
        if (!mv(Pv)) continue;
        const vv = jv(Pv);
        (0 === zv.length || vv.timeMs > zv[zv.length - 1].timeMs) && zv.push(vv)
      }
      return zv
    }

    function Fv(vv) {
      if ("object" !== typeof vv || null === vv) return {
        mode: "default"
      };
      const zv = {
          blendInMs: dv(vv.blendInMs, 0, hv.m.maxBlendInMs),
          blendEasing: sv(vv.blendEasing),
          transition: cv(vv.transition),
          letterbox: Gv(vv.letterbox),
          hideHud: Gv(vv.hideHud)
        },
        Pv = {
          mode: "default",
          ...zv
        };
      if ("default" === vv.mode || "fixed" === vv.mode && !(0, Sv.p)(vv.position, 3)) return Pv;
      const ev = {
        ...zv,
        fov: dv(vv.fov, hv.m.minFov, hv.m.maxFov),
        playerFacing: (Tv = vv.playerFacing, gv.includes(Tv) ? Tv : void 0),
        playerLook: Cv(vv.playerLook)
      };
      var Tv, Wv;
      switch (vv.mode) {
        case "fixed":
          return {
            ...vv, ...ev, position: Nv(vv.position), lookAt: lv(vv.lookAt), lookDirection: av(vv.lookDirection)
          };
        case "follow":
          return {
            ...vv, ...ev, target: "string" === typeof vv.target ? vv.target : void 0, lookAt: lv(vv.lookAt), offset: (Wv = vv.offset, Array.isArray(Wv) ? [pv(Wv[0], -hv.m.maxOffset, hv.m.maxOffset, 0), pv(Wv[1], -hv.m.maxOffset, hv.m.maxOffset, 0), pv(Wv[2], -hv.m.maxOffset, hv.m.maxOffset, 0)] : [0, 0, 0]), lookDirection: av(vv.lookDirection), smoothMs: dv(vv.smoothMs, 0, hv.m.maxSmoothMs)
          };
        case "path":
          return {
            ...vv, ...ev, keyframes: fv(vv.keyframes)
          };
        case "frame":
          return {
            ...vv, ...ev, targets: wv(vv.targets), viewHeading: dv(vv.viewHeading, -hv.m.maxFrameHeading, hv.m.maxFrameHeading), viewElevation: dv(vv.viewElevation, 0, hv.m.maxFrameElevation), padding: dv(vv.padding, 0, hv.m.maxFrameDistance), closestDistance: dv(vv.closestDistance, 0, hv.m.maxFrameDistance), furthestDistance: dv(vv.furthestDistance, 0, hv.m.maxFrameDistance), smoothMs: dv(vv.smoothMs, 0, hv.m.maxSmoothMs)
          };
        default:
          return Pv
      }
    }
  },
  38189: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv
    });
    var hv = Pv(1209);

    function Sv(vv) {
      const zv = /(\d*\.?\d+)px/.exec(vv);
      return zv ? Number(zv[1]) : null
    }

    function ev(vv) {
      return vv.split(/[\s,]+/).pop()
    }
    let gv = !1;
    const pv = {
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
      drawText: function(vv, zv, hv, pv, dv, Nv) {
        if (dv <= 0 || Nv <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: lv,
          fontVariant: Tv,
          fontWeight: Wv,
          fontSize: wv,
          font: av
        } = this, sv = [lv, Tv, Wv, `${wv}px`, av].filter(Boolean).join(" "), Cv = [
          [Wv, `${wv}px`, ev(av)].filter(Boolean).join(" "), `${wv}px sans-serif`
        ], iv = vv.font, cv = function(vv, zv, Pv) {
          for (const hv of zv) {
            vv.font = hv;
            const zv = Sv(vv.font),
              gv = ev(hv);
            if (null !== zv && Math.abs(zv - Pv) <= .5 && vv.font.toLowerCase().includes(gv.toLowerCase())) return hv
          }
          return null
        }(vv, [sv, ...Cv], wv);
        cv !== sv && function(vv, zv, hv) {
          gv || (gv = !0, Promise.resolve().then((() => Pv(1056))).then((Pv => {
            let {
              ws: Sv
            } = Pv;
            Sv(new Error("A canvas didn't take canvasTxt's font"), {
              font: vv,
              Yw: zv,
              drawnWith: null !== hv && void 0 !== hv ? hv : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(sv, iv, cv);
        const Gv = Sv(vv.font);
        if (null === cv && null !== Gv && Gv > 0) {
          const Pv = wv / Gv;
          vv.save();
          try {
            return vv.scale(Pv, Pv), {
              height: this.drawLines(vv, zv, hv / Pv, pv / Pv, dv / Pv, Nv / Pv, Gv).height * Pv
            }
          } finally {
            vv.restore()
          }
        }
        return this.drawLines(vv, zv, hv, pv, dv, Nv, wv)
      },
      drawLines: function(vv, zv, Pv, Sv, ev, gv, pv) {
        const dv = Pv + ev,
          Nv = Sv + gv;
        let lv, Tv = Sv + gv / 2 + pv / 2;
        "right" === this.align ? (lv = dv, vv.textAlign = "right") : "left" === this.align ? (lv = Pv, vv.textAlign = "left") : (lv = Pv + ev / 2, vv.textAlign = "center");
        for (const hv of zv) {
          vv.measureText(hv).width >= ev && (zv = zv.replace(hv, ""))
        }
        zv = (0, hv.Y)(zv);
        const Wv = [],
          wv = zv.split("\n"),
          av = this.justify ? vv.measureText("\u200a").width : 0;
        wv.forEach((zv => {
          let Pv = vv.measureText(zv).width;
          if (Pv <= ev) Wv.push(zv);
          else {
            let hv = zv;
            const Sv = ev;
            let gv, pv, dv;
            for (Pv = vv.measureText(hv).width; Pv > Sv;) {
              for (gv = 0, pv = 0, dv = ""; pv < Sv;) gv++, dv = hv.substr(0, gv), pv = vv.measureText(dv).width;
              gv--, dv = dv.substr(0, gv);
              const zv = gv;
              if (" " !== hv.substr(gv, 1)) {
                for (;
                  " " !== hv.substr(gv, 1) && 0 !== gv;) gv--;
                0 === gv && (gv = zv), dv = hv.substr(0, gv)
              }
              dv = this.justify ? this.justifyLine(vv, dv, av, "\u200a", ev) : dv, hv = hv.substr(gv), Pv = vv.measureText(hv).width, Wv.push(dv)
            }
            Pv > 0 && Wv.push(hv)
          }
        }));
        const sv = this.lineHeight ? this.lineHeight : this.getTextHeight(vv, zv),
          Cv = sv * (Wv.length - 1),
          iv = Cv / 2;
        let cv = Sv;
        "top" === this.vAlign ? Tv = Sv + pv : "bottom" === this.vAlign ? (Tv = Nv - Cv, cv = Nv) : (cv = Sv + gv / 2, Tv -= iv), Wv.forEach((zv => {
          zv = zv.trim(), vv.fillText(zv, lv, Tv), Tv += sv
        })), this.debug && (vv.lineWidth = 3, vv.strokeStyle = "#00909e", vv.strokeRect(Pv, Sv, ev, gv), vv.lineWidth = 2, vv.strokeStyle = "#f6d743", vv.beginPath(), vv.moveTo(lv, Sv), vv.lineTo(lv, Nv), vv.stroke(), vv.strokeStyle = "#ff6363", vv.beginPath(), vv.moveTo(Pv, cv), vv.lineTo(dv, cv), vv.stroke());
        return {
          height: Cv + sv
        }
      },
      getTextHeight: function(vv, zv) {
        const Pv = vv.textBaseline;
        vv.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: hv
        } = vv.measureText(zv);
        return vv.textBaseline = Pv, hv
      },
      justifyLine: function(vv, zv, Pv, hv, Sv) {
        const ev = zv.trim(),
          gv = vv.measureText(ev).width,
          pv = ev.split(/\s+/).length - 1,
          dv = Math.floor((Sv - gv) / Pv);
        if (pv <= 0 || dv <= 0) return ev;
        const Nv = Math.floor(dv / pv);
        let lv = dv - pv * Nv,
          Tv = [];
        for (let Wv = 0; Wv < Nv; Wv++) Tv.push(hv);
        Tv = Tv.join("");
        return ev.replace(/\s+/g, (vv => {
          const zv = lv > 0 ? Tv + hv : Tv;
          return lv--, vv + zv
        }))
      }
    }
  },
  38642: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return zv.set(vv), zv
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  38194: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => sv,
      f: () => av,
      g: () => Wv,
      i: () => lv,
      m: () => Tv
    });
    var hv = Pv(4019),
      Sv = Pv(312);
    const ev = 1024,
      gv = 1536,
      pv = 2 * hv.j + 1,
      dv = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Nv = 1.5;

    function lv(vv, zv, Pv) {
      if ("string" !== typeof vv) return zv;
      try {
        const Pv = JSON.parse(vv);
        return Pv && "object" === typeof Pv ? Pv : zv
      } catch (hv) {
        return void 0 !== Pv && console.error(`Couldn't parse ${Pv}`, hv), zv
      }
    }

    function Tv(vv) {
      return lv(vv, null, "a leaderboard's rows")
    }

    function Wv(vv, zv) {
      var Pv, hv;
      return null !== zv && void 0 !== zv ? zv : {
        status: null !== (Pv = vv.status) && void 0 !== Pv ? Pv : "loading",
        entries: null !== (hv = vv.entries) && void 0 !== hv ? hv : []
      }
    }

    function wv(vv, zv) {
      return "number" === typeof vv && Number.isFinite(vv) && vv > 0 ? vv : zv
    }

    function av(vv, zv) {
      const Pv = wv(vv.size, 1);
      let hv = wv(vv.width, wv(2.5 * Pv, 2.5)),
        Sv = wv(vv.height, wv(3.75 * Pv, 3.75));
      Number.isFinite(ev * Sv / hv) && Number.isFinite(gv * hv / Sv) || (hv = 2.5, Sv = 3.75);
      const pv = Sv / hv,
        dv = Math.max(1, Math.min(ev, zv / pv));
      return {
        width: hv,
        height: Sv,
        layoutWidth: Math.max(ev, gv / pv),
        layoutHeight: Math.max(gv, ev * pv),
        pixelWidth: Math.round(dv),
        pixelHeight: Math.round(Math.max(1, Math.min(zv, dv * pv)))
      }
    }

    function sv(vv, zv, Pv, gv, lv, Tv) {
      vv.setTransform(1, 0, 0, 1, 0, 0), vv.fillStyle = Sv.L.defaultNameTagBackground, vv.fillRect(0, 0, zv, Pv), vv.scale(zv / gv.layoutWidth, Pv / gv.layoutHeight), vv.translate((gv.layoutWidth - ev) / 2, 0),
        function(vv, zv, Pv, ev) {
          var gv, lv, Tv, Wv;
          const {
            top: wv,
            around: av,
            showPlayerText: sv,
            localPlayerDbId: cv
          } = Pv, {
            whiteUiText: Gv,
            grayUiText: mv,
            yellowUiText: jv
          } = Sv.L;
          vv.textBaseline = "middle";
          const fv = function(zv, Pv, hv, Sv, ev, gv) {
              let pv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              vv.font = `bold ${Sv}px 'Jetbrains Mono', monospace`, vv.fillStyle = ev, vv.textAlign = pv;
              let dv = zv.replace(/[\r\n\t]/g, " ");
              if (vv.measureText(dv).width > gv) {
                for (; dv.length > 0 && vv.measureText(`${dv}\u2026`).width > gv;) dv = dv.slice(0, -1);
                dv += "\u2026"
              }
              vv.fillText(dv, Pv, hv)
            },
            Fv = zv => {
              vv.fillStyle = Gv, vv.globalAlpha = .15, vv.fillRect(24, zv, 976, 2), vv.globalAlpha = 1
            },
            Yv = null === cv ? null : (0, Sv.hc)(cv),
            nv = vv => null !== Yv && vv.playerHash === Yv,
            Ov = Cv(wv.entries, hv.k),
            Dv = "ready" === wv.status && Ov.length > 0,
            Kv = null === av ? [] : Cv(av.entries, pv),
            Vv = Ov.some(nv),
            Uv = null === av ? null : function(vv) {
              const zv = vv;
              if (!zv || !Number.isFinite(zv.rank) || !Number.isFinite(zv.tied) || !Number.isFinite(zv.total)) return null;
              return zv
            }(av.standing),
            Rv = Kv.find(nv),
            xv = Ov.find(nv),
            tv = null === Uv || void 0 === Rv ? null : {
              value: Rv.value,
              rank: Uv.rank
            },
            qv = iv(Ov, void 0 === xv || xv.value === (null === tv || void 0 === tv ? void 0 : tv.value) ? tv : null),
            Iv = iv(Kv, tv),
            Qv = (vv, zv) => {
              const Pv = vv.findIndex(nv);
              return Pv >= 0 ? zv[Pv] : null
            },
            Zv = null !== (gv = null !== (lv = null === Uv || void 0 === Uv ? void 0 : Uv.rank) && void 0 !== lv ? lv : Qv(Kv, Iv)) && void 0 !== gv ? gv : Qv(Ov, qv);
          vv.font = "bold 34px 'Jetbrains Mono', monospace";
          const Av = [...Dv ? qv : [], ...Vv ? [] : Iv],
            Lv = Math.min(280, Math.max(0, ...Av.map((zv => vv.measureText(dv.format(zv)).width)))),
            Hv = Lv <= 80,
            Mv = Hv ? 80 : 32 + Lv,
            yv = Hv ? 148 : Mv + 28,
            Bv = 660 - yv;
          fv(`TOP ${hv.k}  /  ALL TIME`, 24, 52, 28, mv, 976), fv(sv ? String(null !== (Tv = zv.title) && void 0 !== Tv ? Tv : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Gv, 976), fv("RANK", 32, 174, 28, mv, yv - 40), fv("PLAYER", yv, 174, 28, mv, Bv), fv(sv ? String(null !== (Wv = zv.scoreLabel) && void 0 !== Wv ? Wv : "Score").slice(0, 24) : "Score", 992, 174, 28, mv, 304, "right"), Fv(202);
          const Jv = (ev - 232) / (hv.k + Nv + pv),
            Ev = 208 + hv.k * Jv,
            ov = Ev + Nv * Jv,
            bv = (zv, Pv, hv, Sv) => {
              const ev = nv(zv);
              vv.fillStyle = ev ? jv : Gv, vv.globalAlpha = ev ? .15 : Sv ? .035 : 0, vv.fillRect(24, hv - Jv / 2 + 1, 976, Jv - 2), vv.globalAlpha = 1;
              const gv = ev ? jv : Gv;
              fv(dv.format(Pv), Mv, hv, 34, gv, Hv ? 80 : Lv, Hv ? "center" : "right"), fv(sv ? String(zv.name).slice(0, 64) : "Player", yv, hv, 34, gv, Bv);
              const pv = dv.format(zv.value);
              fv(vv.measureText(pv).width > 304 ? zv.value.toExponential(6) : pv, 992, hv, 34, gv, 304, "right")
            };
          if (Dv)
            for (const [hv, Sv] of Ov.entries()) bv(Sv, qv[hv], 208 + (hv + .5) * Jv, hv % 2 === 0);
          else {
            const vv = "error" === wv.status,
              zv = vv ? "Couldn't load leaderboard" : "ready" === wv.status ? "No scores yet" : "Loading leaderboard\u2026",
              Pv = vv ? "Trying again shortly" : "ready" === wv.status ? "Be the first on the board!" : "Fetching the top players",
              hv = (208 + Ev) / 2;
            fv(zv, 512, hv - 28, 40, vv ? Sv.L.redUiText : Gv, 960, "center"), fv(Pv, 512, hv + 27, 30, mv, 960, "center")
          }
          const rv = Ev + Nv * Jv / 2;
          if (null === Zv) Fv(rv);
          else {
            const zv = null === Uv ? 0 : Uv.tied - 1,
              Pv = `YOUR RANK #${dv.format(Zv)}${null===Uv?"":` of ${dv.format(Uv.total)}`}`;
            vv.font = "bold 36px 'Jetbrains Mono', monospace";
            const hv = Math.max(20, Math.min(36, Math.floor(34560 / vv.measureText(Pv).width)));
            fv(Pv, 512, rv - (zv > 0 ? 15 : 0), hv, jv, 960, "center"), zv > 0 && fv(`Tied with ${dv.format(zv)} other${1===zv?"":"s"}`, 512, rv + 24, 24, mv, 960, "center")
          }
          if (null === av) return;
          const kv = ov + pv * Jv / 2;
          if (Vv) fv(`You're in the top ${hv.k}!`, 512, kv, 40, jv, 960, "center");
          else if (0 === Kv.length) fv("You're not on this board yet", 512, kv, 34, mv, 960, "center");
          else
            for (const [hv, Sv] of Kv.entries()) bv(Sv, Iv[hv], ov + (hv + .5) * Jv, hv % 2 === 0)
        }(vv, lv, Tv, gv.layoutHeight)
    }

    function Cv(vv, zv) {
      return Array.isArray(vv) ? vv.slice(0, zv).filter((vv => vv && Number.isFinite(vv.rank) && Number.isFinite(vv.value))) : []
    }

    function iv(vv, zv) {
      const Pv = [];
      let hv = !1;
      return vv.forEach(((Sv, ev) => {
        if (null !== zv && Sv.value === zv.value) return void Pv.push(zv.rank);
        const gv = ev > 0 && Sv.value === vv[ev - 1].value;
        gv || (hv = 0 === ev && 1 !== Sv.rank), Pv.push(gv && !hv ? Pv[ev - 1] : Sv.rank)
      })), Pv
    }
  },
  38398: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      g: () => ev
    });
    const hv = 32;

    function Sv(vv) {
      return Array.from(vv).length
    }

    function ev(vv) {
      const zv = [""];
      let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Sv = "";
      const ev = () => {
        zv.push(""), Pv = 0, Sv = ""
      };
      for (const gv of vv.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(gv)) ev();
        else if (/^\s+$/.test(gv)) Sv += gv;
      else if (gv.length > 0) {
        const vv = Array.from(gv);
        Pv > 0 && Pv + Sv.length + vv.length > hv && ev(), zv[zv.length - 1] += Sv, Pv += Sv.length, Sv = "";
        for (const Sv of vv) Pv >= hv && ev(), zv[zv.length - 1] += Sv, Pv++
      }
      return zv[zv.length - 1] += Sv, zv
    }
  },
  38637: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv
    });
    var hv = Pv(36155),
      Sv = Pv.n(hv);
    const ev = [1, 1, 1];

    function gv(vv) {
      if (!vv) return [...ev];
      try {
        const [zv, Pv, hv] = Sv()(vv).rgb().array();
        return [zv / 255, Pv / 255, hv / 255]
      } catch (zv) {
        return console.warn(`Invalid groundArrowPath colour "${vv}":`, zv), [...ev]
      }
    }
  },
  33866: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      g: () => pv,
      h: () => gv,
      l: () => Sv,
      n: () => hv
    });
    const hv = {
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
      Sv = "/textures/dayNight/sun.png",
      ev = "/textures/dayNight/moon.png",
      gv = "/textures/dayNight/stars",
      pv = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38694: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => lv,
      h: () => Tv,
      i: () => hv,
      m: () => dv,
      q: () => Sv,
      s: () => Nv,
      t: () => pv,
      x: () => gv
    });
    const hv = ["linear", "easeIn", "easeOut", "easeInOut"],
      Sv = ["movement", "camera", "cursor"],
      ev = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function gv(vv, zv) {
      return pv(vv, zv, ev)
    }

    function pv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (vv === zv || Number.isNaN(vv) && Number.isNaN(zv)) return !0;
      if ("object" !== typeof vv || "object" !== typeof zv || null === vv || null === zv || Array.isArray(vv) !== Array.isArray(zv)) return !1;
      const hv = vv,
        Sv = zv;
      for (const ev of new Set([...Object.keys(hv), ...Object.keys(Sv)]))
        if (!Pv.includes(ev) && !pv(hv[ev], Sv[ev])) return !1;
      return !0
    }
    const dv = {
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
      Nv = "^-[1-9][0-9]*$",
      lv = "^#[0-9a-fA-F]{6}$",
      Tv = "#000000"
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);