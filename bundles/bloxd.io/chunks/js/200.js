export const id = 200;
export const ids = [200];
export const modules = {
  38671: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    class tU {
      constructor(UU, RU) {
        this.read = UU, this.apply = RU, this.release = null
      }
      turn(UU, RU) {
        const gU = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: RU,
          forcedCameraDirection: [UU[0], UU[1], UU[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), RU + 100),
          transitionMs: gU
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(UU) {
        null !== this.release && (clearTimeout(this.release.timer), UU && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38198: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      d: () => pU
    });
    const tU = new Map;

    function pU(UU, RU) {
      tU.set(UU, RU)
    }

    function EU(UU) {
      return UU ? tU.get(UU) : void 0
    }
  },
  39141: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU
    });
    var tU = gU(37777);

    function pU(UU, RU, gU) {
      var pU, EU, PU, TU, qU, KU, cU;
      const GU = (0, tU.c)(UU, RU, gU[0], gU[1], gU[2]),
        jU = GU ? null !== (pU = GU.textCell) && void 0 !== pU ? pU : GU.rect.anchor : gU,
        uU = RU(jU[0], jU[1], jU[2]);
      return {
        pos: [gU[0], gU[1], gU[2]],
        noticeboardSpan: GU && {
          width: GU.rect.width,
          height: GU.rect.height
        },
        text: null !== (EU = null === uU || void 0 === uU || null === (PU = uU.persisted) || void 0 === PU || null === (TU = PU.shared) || void 0 === TU ? void 0 : TU.text) && void 0 !== EU ? EU : "",
        textSize: null !== (qU = null === uU || void 0 === uU || null === (KU = uU.persisted) || void 0 === KU || null === (cU = KU.shared) || void 0 === cU ? void 0 : cU.textSize) && void 0 !== qU ? qU : null
      }
    }
  },
  38052: (UU, RU, gU) => {
    function tU(UU) {
      switch (UU.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    gU.d(RU, {
      d: () => pU,
      g: () => EU,
      h: () => tU
    });
    const pU = 4,
      EU = 3
  },
  38700: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      c: () => EU
    });
    var tU = gU(311);
    const pU = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class EU {
      constructor(UU) {
        this.importGame = UU, this.loads = new Map, this.loaded = new Map
      }
      load(UU) {
        const RU = (0, tU.Wb)(UU);
        if (!pU.has(RU)) return Promise.resolve(void 0);
        let gU = this.loads.get(RU);
        return gU || (gU = this.importGame(RU).then((UU => {
          const gU = UU.default;
          if ("function" !== typeof gU) throw new Error(`${RU}'s client code has no default-exported factory`);
          return this.loaded.set(RU, gU), gU
        })).catch((UU => {
          throw this.loads.delete(RU), UU
        })), this.loads.set(RU, gU)), gU
      }
      loadedFactory(UU) {
        const RU = (0, tU.Wb)(UU);
        if (!pU.has(RU)) return;
        const gU = this.loaded.get(RU);
        if (!gU) throw new Error(`${RU}'s client code started before it loaded`);
        return gU
      }
    }
  },
  39143: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(9155),
      pU = gU(9009),
      EU = gU(2969);

    function PU(UU) {
      if (UU === tU.e) return 0;
      const RU = (0, EU.c)(UU);
      if (void 0 !== RU && RU <= pU.MAX_BLOCK_ID) return RU;
      const gU = (0, EU.c)(UU.split("|")[0]);
      if (void 0 !== gU && gU <= pU.MAX_BLOCK_ID && (0, pU.rootMetaDescOf)(gU) === UU) return gU;
      throw new Error(`Invalid block name. You sent ${UU}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38739: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU
    });
    var tU = gU(21);
    class pU {
      constructor(UU) {
        this.screen = UU, this.hidesHud = !1
      }
      show(UU, RU) {
        this.screen.setFade(UU.colour, UU.alpha), this.screen.setLetterbox(!0 === RU.letterbox, UU.alpha < 1), this.setHudHidden(!0 === RU.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(UU) {
        this.hidesHud !== UU && (this.hidesHud = UU, tU.b.set({
          isUiHiddenByCamera: UU
        }))
      }
    }
  },
  38708: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU,
      g: () => jU,
      i: () => GU,
      l: () => PU,
      o: () => CU,
      s: () => qU,
      u: () => hU,
      w: () => KU,
      y: () => TU,
      z: () => cU
    });
    const tU = Math.PI / 2 - .001,
      pU = 2 * Math.PI,
      EU = 1e-9;

    function PU(UU, RU) {
      RU.heading = UU.heading, RU.pitch = UU.pitch
    }

    function TU(UU, RU) {
      const gU = RU - UU;
      return gU - pU * Math.floor((gU + Math.PI) / pU)
    }

    function qU(UU, RU, gU) {
      return UU + TU(UU, RU) * gU
    }

    function KU(UU) {
      if (!Number.isFinite(UU)) return UU;
      const RU = UU - pU * Math.floor(UU / pU);
      return RU < pU ? RU : 0
    }

    function cU(UU, RU) {
      return UU + TU(UU, RU)
    }

    function GU(UU) {
      return Math.max(-tU, Math.min(tU, UU))
    }

    function jU(UU, RU, gU) {
      const tU = Math.cos(RU);
      return gU[0] = tU * Math.sin(UU), gU[1] = -Math.sin(RU), gU[2] = tU * Math.cos(UU), gU
    }

    function uU(UU, RU, gU, tU) {
      const pU = Math.sqrt(UU * UU + gU * gU);
      return pU < EU && Math.abs(RU) < EU || (pU >= EU && (tU.heading = Math.atan2(UU, gU)), tU.pitch = GU(Math.atan2(-RU, pU) + 0)), tU
    }

    function CU(UU, RU) {
      return uU(UU[0], UU[1], UU[2], RU)
    }

    function hU(UU, RU, gU) {
      return uU(RU[0] - UU[0], RU[1] - UU[1], RU[2] - UU[2], gU)
    }
  },
  38730: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      f: () => pU
    });
    var tU = gU(38708);

    function pU(UU) {
      var RU;
      const gU = "default" === UU.mode ? "movement" : null !== (RU = UU.playerFacing) && void 0 !== RU ? RU : "movement";
      return "cursor" === gU ? {
        facing: gU,
        mouseTurns: null
      } : {
        facing: gU,
        mouseTurns: "default" !== UU.mode && void 0 !== UU.playerLook ? "look" : "view"
      }
    }

    function EU(UU, RU, gU, pU, EU, PU) {
      return PU.Xw = 0, PU.Ow = 0, PU.pointedAt = void 0, void 0 !== pU ? EU ? (PU.pointedAt = pU, UU) : (0, tU.w)(pU.heading) : EU ? (PU.Xw = RU, PU.Ow = gU, UU) : (0, tU.w)(UU + RU)
    }
  },
  38719: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => kU
    });
    var tU = gU(38724),
      pU = gU(38708),
      EU = gU(36521);

    function PU(UU, RU, gU, tU) {
      if (!(tU > 0)) return RU;
      const pU = RU > UU ? Math.min(RU, UU + gU / tU) : Math.max(RU, UU - gU / tU);
      return Math.abs(RU - pU) < 1e-9 ? RU : pU
    }
    class TU {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: tU.d,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(UU) {
        !this.isGoingOut() && this.sinceTurnMs < tU.i.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: UU
        } : (this.waiting = null, this.startOut(UU))
      }
      fadeIn(UU) {
        this.isGoingOut() ? this.sinceTurnMs < tU.i.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: UU
        } : (this.waiting = null, this.startIn(UU)) : this.waiting = null
      }
      advance(UU) {
        const RU = this.waiting;
        if (null === RU) return this.step(UU);
        const gU = tU.i.minFadeTurnMs - this.sinceTurnMs;
        if (gU > UU) return this.step(UU);
        const pU = this.step(gU);
        return this.waiting = null, "out" === RU.turn ? this.startOut(RU.transition) : this.startIn(RU.minMs), this.step(UU - gU) || pU
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(UU) {
        ("in" === this.phase || null === this.phase && this.clearMs < tU.i.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = UU.colour), this.outMs = UU.outMs, this.holdMs = UU.holdMs, this.inMs = UU.inMs
      }
      startIn(UU) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(UU, this.inMs)
      }
      step(UU) {
        const RU = this.screen;
        this.sinceTurnMs += UU, null === this.phase && (this.clearMs += UU);
        let gU = !1,
          pU = UU;
        if ("out" === this.phase) {
          const tU = (1 - RU.alpha) * this.outMs;
          if (RU.alpha = PU(RU.alpha, 1, UU, this.outMs), RU.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, pU = Math.max(0, UU - tU), gU = !0
        }
        let EU = UU;
        if ("hold" === this.phase) {
          this.heldMs += pU;
          const UU = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - tU.i.minFadeTurnMs);
          if (UU < 0 || gU) return gU;
          this.phase = "in", this.sinceTurnMs = UU, EU = UU
        }
        return "in" === this.phase && (RU.alpha = PU(RU.alpha, 0, EU, this.inMs), RU.alpha <= 0 && (this.phase = null, this.clearMs = 0)), gU
      }
    }
    var qU = gU(38705),
      KU = gU(38727),
      cU = gU(1771),
      GU = gU(36161);

    function jU(UU, RU) {
      for (let gU = 0; gU < RU.length; gU++) RU[gU] = UU[gU]
    }

    function uU(UU, RU) {
      var gU;
      return null !== (gU = UU.fov) && void 0 !== gU ? gU : RU.getDefaultFov()
    }

    function CU(UU, RU, gU, tU, pU) {
      const EU = 2 / tU,
        PU = Math.exp(-EU * pU);
      for (let TU = 0; TU < UU.length; TU++) {
        const tU = UU[TU] - gU[TU],
          qU = (RU[TU] + EU * tU) * pU;
        UU[TU] = gU[TU] + (tU + qU) * PU, RU[TU] = (RU[TU] - EU * qU) * PU
      }
    }
    class hU {
      constructor(UU, RU, gU, tU) {
        var EU, PU, TU, qU, KU;
        this.settings = UU, this.FG = RU, this.targets = gU, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Fh = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, pU.w)((0, cU.j)(null !== (EU = UU.viewHeading) && void 0 !== EU ? EU : 0)),
          pitch: (0, pU.i)((0, cU.j)(null !== (PU = UU.viewElevation) && void 0 !== PU ? PU : 45))
        }, this.closestDistance = null !== (TU = UU.closestDistance) && void 0 !== TU ? TU : Math.min(6, null !== (qU = UU.furthestDistance) && void 0 !== qU ? qU : 1 / 0), this.furthestDistance = null !== (KU = UU.furthestDistance) && void 0 !== KU ? KU : Math.max(64, this.closestDistance);
        const GU = (0, pU.g)(this.base.heading, this.base.pitch, this.forward),
          jU = tU.position,
          uU = this.closestDistance;
        this.goal = [jU[0] + GU[0] * uU, jU[1] + GU[1] * uU, jU[2] + GU[2] * uU, uU, this.base.heading, this.base.pitch]
      }
      update(UU, RU, gU) {
        var tU, EU;
        this.placeGoal(null !== (tU = this.settings.fov) && void 0 !== tU ? tU : this.FG.getBaseFov()), this.goal[4] = (0, pU.z)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const PU = null !== (EU = this.settings.smoothMs) && void 0 !== EU ? EU : 400;
        !this.started || PU < 1 ? (jU(this.goal, this.smoothed), this.Fh.fill(0), this.started = !0) : CU(this.smoothed, this.Fh, this.goal, PU, UU), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, pU.i)(this.smoothed[5]), RU.apply(this.angles, gU);
        const TU = (0, pU.g)(gU.heading, gU.pitch, this.forward);
        for (let pU = 0; pU < 3; pU++) gU.position[pU] = this.smoothed[pU] - TU[pU] * this.smoothed[3];
        gU.fov = uU(this.settings, this.FG)
      }
      continueFrom(UU) {
        UU instanceof hU && (jU(UU.goal, this.goal), jU(UU.smoothed, this.smoothed), jU(UU.Fh, this.Fh), this.framedTargets = UU.framedTargets, this.started = UU.started)
      }
      reset() {
        this.Fh.fill(0), this.started = !1
      }
      placeGoal(UU) {
        var RU;
        let gU = 0;
        for (const cU of this.settings.targets) {
          const UU = this.targets.currentAimPoint(cU);
          UU && (0, qU.g)(UU, this.pointAt(gU++))
        }
        if (gU > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const UU = this.targets.aimPoint(this.FG.localPlayerId);
          UU && (0, qU.g)(UU, this.pointAt(gU++))
        }
        const tU = this.goal;
        if (0 === gU) return void(tU[3] = this.withinDistances(tU[3]));
        for (let qU = 0; qU < 3; qU++) {
          let UU = 1 / 0,
            RU = -1 / 0;
          for (let tU = 0; tU < gU; tU++) UU = Math.min(UU, this.points[tU][qU]), RU = Math.max(RU, this.points[tU][qU]);
          tU[qU] = (UU + RU) / 2
        }
        let pU = 0;
        for (let qU = 0; qU < gU; qU++) {
          const UU = this.points[qU];
          pU = Math.max(pU, Math.hypot(UU[0] - tU[0], UU[1] - tU[1], UU[2] - tU[2]))
        }
        const EU = Math.tan((0, cU.j)(UU) / 2),
          PU = Math.atan(EU * (!0 === this.settings.letterbox ? GU.i : 1)),
          TU = Math.atan(EU * this.FG.getAspectRatio()),
          KU = (pU + (null !== (RU = this.settings.padding) && void 0 !== RU ? RU : 2)) / Math.sin(Math.min(PU, TU));
        tU[3] = this.withinDistances(KU)
      }
      withinDistances(UU) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, UU))
      }
      pointAt(UU) {
        return UU === this.points.length && this.points.push([0, 0, 0]), this.points[UU]
      }
    }
    class QU {
      constructor(UU) {
        this.limits = UU, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(UU) {
        this.limits && (this.yawOffset = UU.yawOffset, this.pitchOffset = UU.pitchOffset, this.idleMs = UU.idleMs)
      }
      update(UU, RU) {
        const gU = this.limits;
        if (!gU) return;
        const tU = Number.isFinite(RU.Xw) ? RU.Xw : 0,
          pU = Number.isFinite(RU.Ow) ? RU.Ow : 0;
        if (RU.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: RU.pointedAt.heading,
          pitch: RU.pointedAt.pitch
        };
        else if (0 !== tU || 0 !== pU) this.idleMs = 0, this.yawOffset += tU, this.pitchOffset += pU;
        else {
          const RU = Math.max(0, this.idleMs + UU - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += UU, void 0 !== gU.returnMs && RU > 0) {
            const UU = gU.returnMs > 0 ? Math.exp(-3 * RU / gU.returnMs) : 0;
            this.yawOffset *= UU, this.pitchOffset *= UU
          }
        }
        this.clampOffsets(gU)
      }
      clampOffsets(UU) {
        if (UU.maxYaw >= 180) this.yawOffset = (0, pU.y)(0, this.yawOffset);
        else {
          const RU = (0, cU.j)(UU.maxYaw);
          this.yawOffset = Math.max(-RU, Math.min(RU, this.yawOffset))
        }
        const RU = (0, cU.j)(UU.maxPitch);
        this.pitchOffset = Math.max(-RU, Math.min(RU, this.pitchOffset))
      }
      apply(UU, RU) {
        this.pointedAt && this.limits && (this.yawOffset = (0, pU.y)(UU.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - UU.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const gU = (0, pU.i)(UU.pitch + this.pitchOffset);
        this.pitchOffset = gU - UU.pitch, RU.heading = (0, pU.w)(UU.heading + this.yawOffset), RU.pitch = gU
      }
      unapply(UU, RU) {
        RU.heading = (0, pU.w)(UU.heading - this.yawOffset), RU.pitch = (0, pU.i)(UU.pitch - this.pitchOffset)
      }
    }
    const eU = 1e-6;

    function WU(UU) {
      return Math.sqrt(UU[0] * UU[0] + UU[1] * UU[1] + UU[2] * UU[2])
    }

    function fU(UU, RU, gU, tU, pU) {
      const EU = pU * pU,
        PU = EU * pU;
      return (2 * PU - 3 * EU + 1) * UU + (PU - 2 * EU + pU) * RU + (-2 * PU + 3 * EU) * gU + (PU - EU) * tU
    }

    function xU(UU, RU, gU, tU, pU) {
      const EU = pU * pU;
      return (6 * EU - 6 * pU) * UU + (3 * EU - 4 * pU + 1) * RU + (-6 * EU + 6 * pU) * gU + (3 * EU - 2 * pU) * tU
    }

    function mU(UU, RU) {
      const gU = RU[0] - UU[0],
        tU = RU[1] - UU[1],
        pU = RU[2] - UU[2];
      return Math.sqrt(gU * gU + tU * tU + pU * pU)
    }

    function IU(UU, RU, gU, tU, pU, EU) {
      for (let PU = 0; PU < 3; PU++) EU[PU] = pU ? UU[PU] * tU : gU[PU] - RU[PU];
      return pU && function(UU, RU) {
        const gU = WU(UU);
        if (gU > RU) {
          const tU = RU / gU;
          UU[0] *= tU, UU[1] *= tU, UU[2] *= tU
        }
      }(EU, 3 * mU(RU, gU)), EU
    }

    function JU(UU, RU, gU, tU) {
      for (let pU = 0; pU < 3; pU++) tU[pU] = 6 * (RU[pU] - UU[pU]) - 2 * gU[pU];
      if (WU(tU) < eU)
        for (let pU = 0; pU < 3; pU++) tU[pU] = RU[pU] - UU[pU];
      return tU
    }

    function wU(UU, RU) {
      return [2 * RU[0] - UU[0], 2 * RU[1] - UU[1], 2 * RU[2] - UU[2]]
    }

    function nU(UU, RU, gU, tU, pU, EU, PU) {
      if (!EU && !PU) return 0;
      const TU = EU ? UU : 2 * RU - gU,
        qU = PU ? gU : 2 * RU - UU,
        KU = EU ? tU : pU,
        cU = PU ? pU : tU,
        GU = (RU - TU) / KU,
        jU = (qU - RU) / cU;
      if (GU * jU <= 0) return 0;
      const uU = (qU - TU) / (KU + cU),
        CU = 3 * Math.min(Math.abs(GU), Math.abs(jU));
      return Math.max(-CU, Math.min(CU, uU))
    }

    function bU(UU, RU, gU, tU, pU, EU, PU) {
      const {
        u: TU,
        segmentMs: qU
      } = UU;
      if (!UU.curved) return gU + (tU - gU) * TU;
      return fU(gU, nU(RU, gU, tU, UU.beforeMs, qU, EU, !0) * qU, tU, nU(gU, tU, pU, qU, UU.afterMs, !0, PU) * qU, TU)
    }

    function oU(UU) {
      return Math.abs(UU.pitch) >= pU.c
    }
    class ZU {
      constructor(UU, RU, gU, tU, pU) {
        this.nodes = UU, this.prevNodes = gU, this.nextNodes = tU, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = UU.map(((UU, gU) => this.nodeTangent(RU, pU, gU)))
      }
      sample(UU, RU, gU) {
        const {
          index: tU,
          toIndex: EU,
          segmentMs: PU,
          curved: TU
        } = UU, qU = this.fromAngles, KU = this.toAngles, cU = this.nodeAngles(tU, gU.position, RU, qU), GU = this.nodeAngles(EU, gU.position, RU, KU);
        if (PU > 0 && "aim" !== cU && "aim" !== GU && this.liveTangent(UU, qU)) return gU.heading = (0, pU.w)(qU.heading), void(gU.pitch = qU.pitch);
        if ("none" === cU && "none" === GU) return;
        !TU && PU > 0 && ("tangent" === cU && this.liveTangent(UU, qU), "tangent" === GU && this.liveTangent(UU, KU)), "none" === cU ? (0, pU.l)(KU, qU) : "none" === GU && (0, pU.l)(qU, KU);
        const jU = TU && UU.beforeIndex >= 0 && "none" !== this.nodeAngles(UU.beforeIndex, gU.position, RU, this.beforeAngles),
          uU = TU && UU.afterIndex >= 0 && "none" !== this.nodeAngles(UU.afterIndex, gU.position, RU, this.afterAngles),
          CU = (0, pU.z)(qU.heading, KU.heading),
          hU = bU(UU, jU ? (0, pU.z)(qU.heading, this.beforeAngles.heading) : 0, qU.heading, CU, uU ? (0, pU.z)(CU, this.afterAngles.heading) : 0, jU, uU);
        gU.heading = (0, pU.w)(hU), gU.pitch = (0, pU.i)(bU(UU, this.beforeAngles.pitch, qU.pitch, KU.pitch, this.afterAngles.pitch, jU, uU))
      }
      nodeAngles(UU, RU, gU, tU) {
        const pU = this.rawNodeAngles(UU, RU, gU, tU);
        return "none" !== pU && oU(tU) && !this.borrowHeading(this.prevNodes[UU], RU, gU, tU) && this.borrowHeading(this.nextNodes[UU], RU, gU, tU), pU
      }
      borrowHeading(UU, RU, gU, tU) {
        const pU = this.borrowedAngles;
        return !(UU < 0 || "none" === this.rawNodeAngles(UU, RU, gU, pU) || oU(pU)) && (tU.heading = pU.heading, !0)
      }
      rawNodeAngles(UU, RU, gU, tU) {
        const EU = this.nodes[UU].keyframe;
        if (EU.lookDirection) return (0, pU.o)(EU.lookDirection, tU), "aim";
        if (void 0 !== EU.lookAt) {
          const UU = gU(EU.lookAt);
          if (UU) return (0, pU.u)(RU, UU, tU), "aim"
        }
        const PU = this.tangents[UU];
        return PU ? ((0, pU.l)(PU, tU), "tangent") : "none"
      }
      liveTangent(UU, RU) {
        const gU = this.nodes[UU.index].position,
          tU = this.nodes[UU.toIndex].position,
          EU = this.derivative;
        for (let pU = 0; pU < 3; pU++) EU[pU] = xU(gU[pU], UU.fromTangent[pU], tU[pU], UU.toTangent[pU], UU.u);
        return WU(EU) > 1e-9 ? ((0, pU.o)(EU, RU), !0) : !(mU(gU, tU) < eU) && ((0, pU.o)(JU(gU, tU, UU.u < .5 ? UU.toTangent : UU.fromTangent, EU), RU), !0)
      }
      nodeTangent(UU, RU, gU) {
        var tU;
        const EU = UU[gU];
        if (WU(EU) > 1e-9) return (0, pU.o)(EU, {
          heading: 0,
          pitch: 0
        });
        const PU = null !== (tU = this.restDirectionTo(gU, gU + 1, UU, RU)) && void 0 !== tU ? tU : this.restDirectionTo(gU, gU - 1, UU, RU);
        return PU ? (0, pU.o)(PU, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(UU, RU, gU, tU) {
        const pU = this.nodes[UU],
          EU = this.nodes[RU];
        if (!EU || mU(pU.position, EU.position) < eU) return null;
        const [PU, TU] = RU > UU ? [pU, EU] : [EU, pU], qU = IU(gU[RU], PU.position, TU.position, TU.timeMs - PU.timeMs, tU, [0, 0, 0]);
        return JU(PU.position, TU.position, qU, [0, 0, 0])
      }
    }

    function aU(UU, RU) {
      const gU = UU.lookDirection || RU.lookDirection ? function(UU, RU) {
        if (!UU || !RU) return UU === RU;
        const gU = WU(UU),
          tU = WU(RU);
        return Math.hypot(UU[0] / gU - RU[0] / tU, UU[1] / gU - RU[1] / tU, UU[2] / gU - RU[2] / tU) < eU
      }(UU.lookDirection, RU.lookDirection) : (tU = UU.lookAt, pU = RU.lookAt, "object" !== typeof tU || "object" !== typeof pU ? tU === pU : mU(tU, pU) < eU);
      var tU, pU;
      return mU(UU.position, RU.position) < eU && UU.fov === RU.fov && gU
    }
    class YU {
      constructor(UU, RU, gU) {
        if (this.smooth = RU, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === UU.length) throw new Error("A camera path needs at least one keyframe");
        for (let EU = 1; EU < UU.length; EU++)
          if (!(UU[EU].timeMs > UU[EU - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = UU.map((UU => {
          var RU;
          return {
            timeMs: UU.timeMs,
            position: [...UU.position],
            keyframe: UU,
            easing: (0, EU.r)(null !== (RU = UU.easing) && void 0 !== RU ? RU : "linear")
          }
        }));
        const tU = this.nodes[0],
          pU = this.nodes[this.nodes.length - 1],
          PU = gU && this.nodes.length > 1;
        PU && !aU(tU.keyframe, pU.keyframe) && this.nodes.push({
          ...tU,
          timeMs: pU.timeMs + (pU.timeMs - tU.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = PU ? this.nodes[this.nodes.length - 1].timeMs - tU.timeMs : 0, this.prevNodes = this.nodes.map(((UU, RU) => this.neighbour(RU, -1))), this.nextNodes = this.nodes.map(((UU, RU) => this.neighbour(RU, 1))), this.prevGaps = this.prevNodes.map(((UU, RU) => UU >= 0 ? this.gapMs(RU, -1) : 0)), this.nextGaps = this.nextNodes.map(((UU, RU) => UU >= 0 ? this.gapMs(RU, 1) : 0)), this.velocities = this.nodes.map(((UU, RU) => {
          const gU = this.prevNodes[RU],
            tU = this.nextNodes[RU];
          return function(UU, RU, gU, tU, pU, EU) {
            if (EU[0] = 0, EU[1] = 0, EU[2] = 0, !UU && !gU) return EU;
            const PU = null !== UU && void 0 !== UU ? UU : wU(null !== gU && void 0 !== gU ? gU : RU, RU),
              TU = null !== gU && void 0 !== gU ? gU : wU(null !== UU && void 0 !== UU ? UU : RU, RU),
              qU = UU ? tU : pU,
              KU = gU ? pU : tU,
              cU = mU(PU, RU),
              GU = mU(RU, TU);
            if (cU < eU || GU < eU) return EU;
            const jU = Math.sqrt(cU),
              uU = Math.sqrt(GU),
              CU = (jU + uU) / (qU + KU);
            for (let hU = 0; hU < 3; hU++) {
              const UU = (RU[hU] - PU[hU]) / jU - (TU[hU] - PU[hU]) / (jU + uU) + (TU[hU] - RU[hU]) / uU;
              EU[hU] = UU * CU
            }
            return EU
          }(gU >= 0 ? this.nodes[gU].position : null, UU.position, tU >= 0 ? this.nodes[tU].position : null, this.prevGaps[RU], this.nextGaps[RU], [0, 0, 0])
        })), this.aim = new ZU(this.nodes, this.velocities, this.prevNodes, this.nextNodes, RU)
      }
      sample(UU, RU, gU, tU) {
        const pU = this.findSegment(this.pathTime(UU));
        this.samplePosition(pU, tU.position), this.aim.sample(pU, RU, tU);
        const {
          beforeIndex: EU,
          afterIndex: PU
        } = pU;
        tU.fov = bU(pU, EU >= 0 ? this.fovAt(EU, gU) : 0, this.fovAt(pU.index, gU), this.fovAt(pU.toIndex, gU), PU >= 0 ? this.fovAt(PU, gU) : 0, EU >= 0, PU >= 0)
      }
      pathTime(UU) {
        const RU = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || UU <= RU) return UU;
        const gU = UU - RU;
        return RU + gU - this.loopMs * Math.floor(gU / this.loopMs)
      }
      findSegment(UU) {
        const RU = this.nodes,
          gU = this.segment;
        let tU = gU.index;
        for (UU < RU[tU].timeMs && (tU = 0); tU < RU.length - 2 && RU[tU + 1].timeMs <= UU;) tU++;
        const pU = Math.min(tU + 1, RU.length - 1),
          PU = RU[pU].timeMs - RU[tU].timeMs;
        return gU.index = tU, gU.toIndex = pU, gU.segmentMs = PU, gU.u = PU > 0 ? (0, EU.o)((UU - RU[tU].timeMs) / PU, RU[tU].easing) : 1, gU.curved = this.smooth && PU > 0, gU.beforeIndex = this.prevNodes[tU], gU.afterIndex = this.nextNodes[pU], gU.beforeMs = this.prevGaps[tU], gU.afterMs = this.nextGaps[pU], gU
      }
      samplePosition(UU, RU) {
        const {
          fromTangent: gU,
          toTangent: tU,
          curved: pU
        } = UU, EU = this.nodes[UU.index].position, PU = this.nodes[UU.toIndex].position;
        IU(this.velocities[UU.index], EU, PU, UU.segmentMs, pU, gU), IU(this.velocities[UU.toIndex], EU, PU, UU.segmentMs, pU, tU);
        const TU = UU.u;
        for (let qU = 0; qU < 3; qU++) RU[qU] = pU ? fU(EU[qU], gU[qU], PU[qU], tU[qU], TU) : EU[qU] + (PU[qU] - EU[qU]) * TU
      }
      fovAt(UU, RU) {
        var gU;
        return null !== (gU = this.nodes[UU].keyframe.fov) && void 0 !== gU ? gU : RU
      }
      neighbour(UU, RU) {
        const gU = this.nodes.length - 1,
          tU = UU + RU;
        return tU >= 0 && tU <= gU ? tU : this.loopMs <= 0 || gU < 2 ? -1 : tU < 0 ? gU - 1 : 1
      }
      gapMs(UU, RU) {
        const gU = this.nodes.length - 1;
        if (1 === RU) {
          const RU = UU === gU ? 0 : UU;
          return this.nodes[RU + 1].timeMs - this.nodes[RU].timeMs
        }
        const tU = 0 === UU ? gU : UU;
        return this.nodes[tU].timeMs - this.nodes[tU - 1].timeMs
      }
    }
    class BU {
      constructor(UU) {
        this.FG = UU, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = RU => UU.getEntityPosition(RU), this.readAimPoint = RU => UU.getEntityAimPoint(RU)
      }
      aimPoint(UU) {
        return "string" !== typeof UU ? (0, qU.l)(UU, 3) ? UU : null : this.resolve(UU, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(UU) {
        const RU = "string" === typeof UU ? this.FG.getEntityAimPoint(UU) : UU;
        return RU && (0, qU.l)(RU, 3) ? RU : null
      }
      feetPosition(UU) {
        return this.resolve(UU, this.readFeet, this.lastFeet)
      }
      heading(UU) {
        const RU = this.FG.getEntityHeading(UU);
        if (null !== RU && Number.isFinite(RU)) return this.lastHeadings.set(UU, RU), RU;
        const gU = this.lastHeadings.get(UU);
        return void 0 !== gU ? gU : UU === this.FG.localPlayerId ? 0 : this.heading(this.FG.localPlayerId)
      }
      resolve(UU, RU, gU) {
        const tU = RU(UU);
        let pU = gU.get(UU);
        return tU && (0, qU.l)(tU, 3) ? (pU || (pU = [0, 0, 0], gU.set(UU, pU)), pU[0] = tU[0], pU[1] = tU[1], pU[2] = tU[2], pU) : pU || (UU === this.FG.localPlayerId ? null : this.resolve(this.FG.localPlayerId, RU, gU))
      }
    }

    function VU(UU) {
      return {
        heading: UU.heading,
        pitch: UU.pitch
      }
    }

    function rU(UU, RU) {
      Number.isFinite(UU.heading) && Number.isFinite(UU.pitch) || (0, pU.l)(RU, UU)
    }

    function XU(UU, RU, gU, tU, EU) {
      if (RU) return void(0, pU.o)(RU, EU);
      const PU = tU.aimPoint(gU);
      PU && (0, pU.u)(UU, PU, EU)
    }
    class vU {
      constructor(UU, RU, gU, tU) {
        this.settings = UU, this.FG = RU, this.targets = gU, this.base = void 0, this.base = VU(tU)
      }
      update(UU, RU, gU) {
        var tU;
        const pU = this.settings;
        (0, qU.g)(pU.position, gU.position), XU(pU.position, pU.lookDirection, null !== (tU = pU.lookAt) && void 0 !== tU ? tU : this.FG.localPlayerId, this.targets, this.base), RU.apply(this.base, gU), gU.fov = uU(pU, this.FG)
      }
      continueFrom(UU) {
        UU instanceof vU && (0, pU.l)(UU.base, this.base)
      }
      reset(UU) {
        rU(this.base, UU)
      }
    }
    class dU {
      constructor(UU, RU, gU, tU) {
        this.settings = UU, this.FG = RU, this.targets = gU, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Fh = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = VU(tU), this.goal = [...tU.position]
      }
      update(UU, RU, gU) {
        var tU, pU, EU;
        const PU = this.settings,
          TU = null !== (tU = PU.target) && void 0 !== tU ? tU : this.FG.localPlayerId,
          KU = this.targets.feetPosition(TU);
        let cU = !1;
        KU && (cU = this.foundFeet && mU(this.lastFeet, KU) > 32 + .1 * UU, (0, qU.g)(KU, this.lastFeet), this.foundFeet = !0, this.placeGoal(KU, TU));
        const GU = null !== (pU = PU.smoothMs) && void 0 !== pU ? pU : 0;
        !this.started || GU < 1 || cU ? ((0, qU.g)(this.goal, this.smoothed), this.Fh.fill(0), this.started = !0) : CU(this.smoothed, this.Fh, this.goal, GU, UU), cU && (this.distance = -1), (0, qU.g)(this.smoothed, gU.position);
        const jU = !0 === PU.avoidTerrain ? this.pullIn(TU, UU, gU) : 1;
        let hU = this.goal;
        if ("target" === PU.offsetSpace) hU = gU.position;
        else if (jU < 1) {
          hU = this.aimOrigin;
          for (let UU = 0; UU < 3; UU++) hU[UU] = gU.position[UU] + (this.goal[UU] - this.smoothed[UU]) * jU
        }
        XU(hU, PU.lookDirection, null !== (EU = PU.lookAt) && void 0 !== EU ? EU : TU, this.targets, this.base), RU.apply(this.base, gU), gU.fov = uU(PU, this.FG)
      }
      continueFrom(UU) {
        UU instanceof dU && (0, tU.n)(UU.settings.target, this.settings.target) && ((0, pU.l)(UU.base, this.base), (0, qU.g)(UU.goal, this.goal), (0, qU.g)(UU.lastFeet, this.lastFeet), this.foundFeet = UU.foundFeet, (0, qU.g)(UU.smoothed, this.smoothed), (0, qU.g)(UU.Fh, this.Fh), this.started = UU.started, !0 === UU.settings.avoidTerrain && (this.distance = UU.distance))
      }
      reset(UU) {
        rU(this.base, UU), this.Fh.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(UU, RU, gU) {
        const tU = this.targets.aimPoint(UU);
        if (!tU) return 1;
        const pU = gU.position,
          EU = mU(tU, pU);
        if (!(EU > 0)) return 1;
        const PU = this.toCamera;
        for (let qU = 0; qU < 3; qU++) PU[qU] = (pU[qU] - tU[qU]) / EU;
        const TU = function(UU, RU, gU) {
          return UU < 0 || RU < UU ? RU : RU + (UU - RU) * Math.exp(-gU / 150)
        }(this.distance, function(UU, RU, gU, tU) {
          const pU = UU.raycastTerrain(RU, gU, tU);
          return null !== pU && Number.isFinite(pU) ? Math.min(tU, Math.max(0, pU - .2)) : tU
        }(this.FG, tU, PU, EU), RU);
        if (EU - TU < .001) return this.distance = -1, 1;
        this.distance = TU;
        for (let qU = 0; qU < 3; qU++) pU[qU] = tU[qU] + PU[qU] * TU;
        return TU / EU
      }
      placeGoal(UU, RU) {
        const gU = this.settings.offset;
        let tU = gU[0],
          pU = gU[2];
        if ("target" === this.settings.offsetSpace) {
          const UU = this.targets.heading(RU),
            EU = Math.cos(UU),
            PU = Math.sin(UU);
          tU = gU[0] * EU + gU[2] * PU, pU = -gU[0] * PU + gU[2] * EU
        }
        this.goal[0] = UU[0] + tU, this.goal[1] = UU[1] + gU[1], this.goal[2] = UU[2] + pU
      }
    }
    class HU {
      constructor(UU, RU, gU, tU) {
        var pU, EU;
        this.settings = UU, this.FG = RU, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = UU.keyframes.length > 0 ? new YU(UU.keyframes, null === (pU = UU.smooth) || void 0 === pU || pU, null !== (EU = UU.loop) && void 0 !== EU && EU) : null, this.base = (0, qU.d)(tU, (0, qU.h)()), this.resolveTarget = UU => gU.aimPoint(UU)
      }
      update(UU, RU, gU) {
        this.elapsedMs += UU;
        const tU = uU(this.settings, this.FG);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, tU, this.base) : this.base.fov = tU, (0, qU.g)(this.base.position, gU.position), gU.fov = this.base.fov, RU.apply(this.base, gU)
      }
      continueFrom(UU) {
        UU instanceof HU && (0, tU.n)(UU.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = UU.elapsedMs, (0, qU.d)(UU.base, this.base))
      }
      reset(UU) {
        rU(this.base, UU), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function SU(UU, RU) {
      return (0, tU.o)(UU, RU)
    }
    class sU {
      constructor(UU, RU, gU) {
        var tU;
        this.settings = UU, this.FG = RU, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const pU = null !== gU && gU.settings.mode === UU.mode,
          EU = pU ? gU.pose : RU.getDefaultPose();
        this.pose = (0, qU.d)(EU, (0, qU.h)()), this.lastGoodPose = (0, qU.d)(pU ? gU.lastGoodPose : EU, (0, qU.h)()), this.look = new QU(UU.playerLook), this.targets = null !== (tU = null === gU || void 0 === gU ? void 0 : gU.targets) && void 0 !== tU ? tU : new BU(RU);
        const PU = (0, qU.d)(EU, (0, qU.h)());
        pU && gU.look.unapply(PU, PU), this.mode = function(UU, RU, gU, tU) {
          switch (UU.mode) {
            case "fixed":
              return new vU(UU, RU, gU, tU);
            case "follow":
              return new dU(UU, RU, gU, tU);
            case "path":
              return new HU(UU, RU, gU, tU);
            case "frame":
              return new hU(UU, RU, gU, tU)
          }
        }(UU, RU, this.targets, PU), pU && (this.look.continueFrom(gU.look), this.mode.continueFrom(gU.mode))
      }
      update(UU, RU) {
        return this.look.update(UU, RU), this.mode.update(UU, this.look, this.pose), (0, qU.j)(this.pose) ? (0, qU.d)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, qU.d)(this.lastGoodPose, this.pose), this.mode.reset((0, qU.j)(this.lastGoodPose) ? this.lastGoodPose : this.FG.getDefaultPose())), this.pose
      }
    }

    function yU(UU) {
      return [0, 0, UU[2], UU[3]]
    }
    class kU {
      constructor(UU) {
        this.FG = UU, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new TU, this.shot = null, this.blend = null, this.mixed = (0, qU.h)(), this.output = (0, qU.h)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(UU) {
        const RU = (0, KU.c)(UU);
        if ((0, tU.n)(RU, this.pending ? this.pending.settings : this.settings)) return;
        const gU = SU(this.settings, RU);
        if (void 0 !== RU.transition && !gU) return this.pending = {
          settings: RU,
          shot: "default" === RU.mode ? null : new sU(RU, this.FG, null)
        }, void this.fade.fadeOut(RU.transition);
        const pU = null !== this.pending;
        this.pending = null, !pU && gU || this.fade.fadeIn(tU.i.minTransitionFadeMs), this.show(RU, !1)
      }
      show(UU, RU) {
        var gU, pU;
        if ((0, tU.n)(UU, this.settings)) return;
        const PU = !RU && SU(this.settings, UU);
        this.settings = UU;
        const TU = null !== this.blend && this.blend.elapsedMs > 0,
          KU = (0, qU.d)(this.hasOutput ? this.output : this.FG.getDefaultPose(), (0, qU.h)());
        if (this.shot = "default" === UU.mode ? null : new sU(UU, this.FG, RU ? null : this.shot), PU) return;
        const cU = RU || !this.shot && !this.hasOutput ? 0 : null !== (gU = UU.blendInMs) && void 0 !== gU ? gU : 0;
        if (cU <= 0) return void(this.blend = null);
        const GU = (0, EU.r)(null !== (pU = UU.blendEasing) && void 0 !== pU ? pU : "easeInOut");
        this.blend = {
          from: KU,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: cU,
          easing: TU ? yU(GU) : GU
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
      update(UU, RU) {
        const gU = Number.isFinite(UU) && UU > 0 ? UU : 0;
        if (this.fade.advance(gU) && null !== this.pending) {
          const {
            settings: UU
          } = this.pending;
          this.pending = null, this.show(UU, !0)
        }
        this.loadingPositions.length = 0;
        const tU = this.pending;
        if (null !== tU && void 0 !== tU && tU.shot) {
          const UU = "path" === tU.settings.mode ? 0 : gU;
          this.noteLoadingPosition(tU.shot.update(UU, qU.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const PU = this.shot ? this.shot.update(gU, RU) : this.FG.getDefaultPose();
        this.shot && this.noteLoadingPosition(PU.position);
        const TU = this.blend;
        if (!TU) return this.writeOutput(PU);
        TU.elapsedMs += gU;
        const KU = Math.min(1, TU.elapsedMs / TU.durationMs);
        if (TU.headingDelta = Number.isFinite(TU.headingDelta) ? (0, pU.z)(TU.headingDelta, PU.heading - TU.from.heading) : (0, pU.y)(TU.from.heading, PU.heading), (0, qU.n)(TU.from, PU, TU.headingDelta, (0, EU.o)(KU, TU.easing), this.mixed), KU >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else TU.fromScripted && this.noteLoadingPosition(TU.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(UU) {
        if (UU.every(Number.isFinite)) {
          const RU = this.loadingPositions;
          RU.push((0, qU.g)(UU, this.loadingSlots[RU.length]))
        }
      }
      writeOutput(UU) {
        const RU = this.output;
        (0, qU.j)(UU) ? (0, qU.d)(UU, RU) : this.hasOutput || (0, qU.d)(this.FG.getDefaultPose(), RU), RU.pitch = (0, pU.i)(RU.pitch);
        const gU = this.FG.getDefaultFov(),
          EU = Number.isFinite(gU) && gU > 0 && gU < 180,
          PU = EU ? Math.min(tU.i.minFov, gU) : tU.i.minFov,
          TU = EU ? Math.max(tU.i.maxFov, gU) : tU.i.maxFov;
        return RU.fov = Number.isFinite(RU.fov) ? Math.min(TU, Math.max(PU, RU.fov)) : TU, this.hasOutput = !0, RU
      }
    }
  },
  38705: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      d: () => TU,
      g: () => PU,
      h: () => EU,
      j: () => KU,
      l: () => qU,
      n: () => cU
    });
    var tU = gU(38708);
    const pU = {
      Xw: 0,
      Ow: 0
    };

    function EU() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function PU(UU, RU) {
      return RU[0] = UU[0], RU[1] = UU[1], RU[2] = UU[2], RU
    }

    function TU(UU, RU) {
      return PU(UU.position, RU.position), RU.heading = UU.heading, RU.pitch = UU.pitch, RU.fov = UU.fov, RU
    }

    function qU(UU, RU) {
      return Array.isArray(UU) && UU.length === RU && UU.every(Number.isFinite)
    }

    function KU(UU) {
      return qU(UU.position, 3) && Number.isFinite(UU.heading) && Number.isFinite(UU.pitch) && Number.isFinite(UU.fov)
    }

    function cU(UU, RU, gU, pU, EU) {
      for (let tU = 0; tU < 3; tU++) EU.position[tU] = UU.position[tU] + (RU.position[tU] - UU.position[tU]) * pU;
      return EU.heading = (0, tU.w)(UU.heading + gU * pU), EU.pitch = UU.pitch + (RU.pitch - UU.pitch) * pU, EU.fov = UU.fov + (RU.fov - UU.fov) * pU, EU
    }
  },
  38727: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => JU,
      f: () => jU
    });
    var tU = gU(38724),
      pU = gU(38705);
    const EU = tU.g,
      PU = tU.j;

    function TU(UU, RU, gU, tU) {
      return Number.isFinite(UU) ? Math.min(gU, Math.max(RU, UU)) : tU
    }

    function qU(UU, RU, gU) {
      return void 0 !== UU && Number.isFinite(UU) ? Math.min(gU, Math.max(RU, UU)) : void 0
    }

    function KU(UU) {
      const RU = tU.i.maxCoordinate;
      return [Math.min(RU, Math.max(-RU, UU[0])), Math.min(RU, Math.max(-RU, UU[1])), Math.min(RU, Math.max(-RU, UU[2]))]
    }

    function cU(UU) {
      return "string" === typeof UU ? UU : (0, pU.l)(UU, 3) ? KU(UU) : void 0
    }
    const GU = new RegExp(tU.l);

    function jU(UU) {
      return "string" === typeof UU && GU.test(UU)
    }

    function uU(UU) {
      const RU = [];
      if (!Array.isArray(UU)) return RU;
      for (const gU of UU.slice(0, tU.i.maxFrameTargets)) {
        const UU = cU(gU);
        void 0 === UU || "string" === typeof UU && !jU(UU) || RU.push(UU)
      }
      return RU
    }

    function CU(UU) {
      if (!(0, pU.l)(UU, 3)) return;
      const RU = Math.max(Math.abs(UU[0]), Math.abs(UU[1]), Math.abs(UU[2])),
        gU = Math.hypot(UU[0] / RU, UU[1] / RU, UU[2] / RU);
      return 0 === RU || RU * gU < tU.i.minDirectionLength ? void 0 : [UU[0] / RU / gU, UU[1] / RU / gU, UU[2] / RU / gU]
    }

    function hU(UU) {
      if (void 0 !== UU) return "string" === typeof UU ? EU.includes(UU) ? UU : void 0 : (0, pU.l)(UU, 4) ? [TU(UU[0], 0, 1, 0), TU(UU[1], tU.i.minEasingY, tU.i.maxEasingY, 0), TU(UU[2], 0, 1, 1), TU(UU[3], tU.i.minEasingY, tU.i.maxEasingY, 1)] : "linear"
    }

    function QU(UU) {
      if (UU) return {
        maxYaw: TU(UU.maxYaw, 0, tU.i.maxPlayerLook, 0),
        maxPitch: TU(UU.maxPitch, 0, tU.i.maxPlayerLook, 0),
        returnMs: qU(UU.returnMs, 0, tU.i.maxReturnMs)
      }
    }
    const eU = new RegExp(tU.c);

    function WU(UU) {
      var RU;
      if ("object" !== typeof UU || null === UU) return;
      const gU = tU.i.maxTransitionMs,
        pU = tU.i.minTransitionFadeMs;
      return {
        colour: "string" === typeof UU.colour && eU.test(UU.colour) ? UU.colour : tU.d,
        outMs: TU(UU.outMs, pU, gU, pU),
        holdMs: TU(null !== (RU = UU.holdMs) && void 0 !== RU ? RU : 0, 0, gU, 0),
        inMs: TU(UU.inMs, pU, gU, pU)
      }
    }

    function fU(UU) {
      return !0 === UU || void 0
    }

    function xU(UU) {
      if ("object" !== typeof UU || null === UU) return !1;
      const RU = UU.lookAt;
      return Number.isFinite(UU.timeMs) && (0, pU.l)(UU.position, 3) && (void 0 === RU || "string" === typeof RU || (0, pU.l)(RU, 3))
    }

    function mU(UU) {
      return {
        ...UU,
        timeMs: TU(UU.timeMs, 0, tU.i.maxPathMs, 0),
        position: KU(UU.position),
        lookAt: cU(UU.lookAt),
        lookDirection: CU(UU.lookDirection),
        fov: qU(UU.fov, tU.i.minFov, tU.i.maxFov),
        easing: hU(UU.easing)
      }
    }

    function IU(UU) {
      const RU = [];
      if (!Array.isArray(UU)) return RU;
      for (const gU of UU.slice(0, tU.i.maxKeyframes)) {
        if (!xU(gU)) continue;
        const UU = mU(gU);
        (0 === RU.length || UU.timeMs > RU[RU.length - 1].timeMs) && RU.push(UU)
      }
      return RU
    }

    function JU(UU) {
      if ("object" !== typeof UU || null === UU) return {
        mode: "default"
      };
      const RU = {
          blendInMs: qU(UU.blendInMs, 0, tU.i.maxBlendInMs),
          blendEasing: hU(UU.blendEasing),
          transition: WU(UU.transition),
          letterbox: fU(UU.letterbox),
          hideHud: fU(UU.hideHud)
        },
        gU = {
          mode: "default",
          ...RU
        };
      if ("default" === UU.mode || "fixed" === UU.mode && !(0, pU.l)(UU.position, 3)) return gU;
      const EU = {
        ...RU,
        fov: qU(UU.fov, tU.i.minFov, tU.i.maxFov),
        playerFacing: (GU = UU.playerFacing, PU.includes(GU) ? GU : void 0),
        playerLook: QU(UU.playerLook)
      };
      var GU, jU;
      switch (UU.mode) {
        case "fixed":
          return {
            ...UU, ...EU, position: KU(UU.position), lookAt: cU(UU.lookAt), lookDirection: CU(UU.lookDirection)
          };
        case "follow":
          return {
            ...UU, ...EU, target: "string" === typeof UU.target ? UU.target : void 0, lookAt: cU(UU.lookAt), offset: (jU = UU.offset, Array.isArray(jU) ? [TU(jU[0], -tU.i.maxOffset, tU.i.maxOffset, 0), TU(jU[1], -tU.i.maxOffset, tU.i.maxOffset, 0), TU(jU[2], -tU.i.maxOffset, tU.i.maxOffset, 0)] : [0, 0, 0]), lookDirection: CU(UU.lookDirection), smoothMs: qU(UU.smoothMs, 0, tU.i.maxSmoothMs)
          };
        case "path":
          return {
            ...UU, ...EU, keyframes: IU(UU.keyframes)
          };
        case "frame":
          return {
            ...UU, ...EU, targets: uU(UU.targets), viewHeading: qU(UU.viewHeading, -tU.i.maxFrameHeading, tU.i.maxFrameHeading), viewElevation: qU(UU.viewElevation, 0, tU.i.maxFrameElevation), padding: qU(UU.padding, 0, tU.i.maxFrameDistance), closestDistance: qU(UU.closestDistance, 0, tU.i.maxFrameDistance), furthestDistance: qU(UU.furthestDistance, 0, tU.i.maxFrameDistance), smoothMs: qU(UU.smoothMs, 0, tU.i.maxSmoothMs)
          };
        default:
          return gU
      }
    }
  },
  38210: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU
    });
    var tU = gU(1217);

    function pU(UU) {
      const RU = /(\d*\.?\d+)px/.exec(UU);
      return RU ? Number(RU[1]) : null
    }

    function EU(UU) {
      return UU.split(/[\s,]+/).pop()
    }
    let PU = !1;
    const TU = {
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
      drawText: function(UU, RU, tU, TU, qU, KU) {
        if (qU <= 0 || KU <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: cU,
          fontVariant: GU,
          fontWeight: jU,
          fontSize: uU,
          font: CU
        } = this, hU = [cU, GU, jU, `${uU}px`, CU].filter(Boolean).join(" "), QU = [
          [jU, `${uU}px`, EU(CU)].filter(Boolean).join(" "), `${uU}px sans-serif`
        ], eU = UU.font, WU = function(UU, RU, gU) {
          for (const tU of RU) {
            UU.font = tU;
            const RU = pU(UU.font),
              PU = EU(tU);
            if (null !== RU && Math.abs(RU - gU) <= .5 && UU.font.toLowerCase().includes(PU.toLowerCase())) return tU
          }
          return null
        }(UU, [hU, ...QU], uU);
        WU !== hU && function(UU, RU, tU) {
          PU || (PU = !0, Promise.resolve().then((() => gU(1064))).then((gU => {
            let {
              Kh: pU
            } = gU;
            pU(new Error("A canvas didn't take canvasTxt's font"), {
              font: UU,
              xu: RU,
              drawnWith: null !== tU && void 0 !== tU ? tU : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(hU, eU, WU);
        const fU = pU(UU.font);
        if (null === WU && null !== fU && fU > 0) {
          const gU = uU / fU;
          UU.save();
          try {
            return UU.scale(gU, gU), {
              height: this.drawLines(UU, RU, tU / gU, TU / gU, qU / gU, KU / gU, fU).height * gU
            }
          } finally {
            UU.restore()
          }
        }
        return this.drawLines(UU, RU, tU, TU, qU, KU, uU)
      },
      drawLines: function(UU, RU, gU, pU, EU, PU, TU) {
        const qU = gU + EU,
          KU = pU + PU;
        let cU, GU = pU + PU / 2 + TU / 2;
        "right" === this.align ? (cU = qU, UU.textAlign = "right") : "left" === this.align ? (cU = gU, UU.textAlign = "left") : (cU = gU + EU / 2, UU.textAlign = "center");
        for (const tU of RU) {
          UU.measureText(tU).width >= EU && (RU = RU.replace(tU, ""))
        }
        RU = (0, tU.T)(RU);
        const jU = [],
          uU = RU.split("\n"),
          CU = this.justify ? UU.measureText("\u200a").width : 0;
        uU.forEach((RU => {
          let gU = UU.measureText(RU).width;
          if (gU <= EU) jU.push(RU);
          else {
            let tU = RU;
            const pU = EU;
            let PU, TU, qU;
            for (gU = UU.measureText(tU).width; gU > pU;) {
              for (PU = 0, TU = 0, qU = ""; TU < pU;) PU++, qU = tU.substr(0, PU), TU = UU.measureText(qU).width;
              PU--, qU = qU.substr(0, PU);
              const RU = PU;
              if (" " !== tU.substr(PU, 1)) {
                for (;
                  " " !== tU.substr(PU, 1) && 0 !== PU;) PU--;
                0 === PU && (PU = RU), qU = tU.substr(0, PU)
              }
              qU = this.justify ? this.justifyLine(UU, qU, CU, "\u200a", EU) : qU, tU = tU.substr(PU), gU = UU.measureText(tU).width, jU.push(qU)
            }
            gU > 0 && jU.push(tU)
          }
        }));
        const hU = this.lineHeight ? this.lineHeight : this.getTextHeight(UU, RU),
          QU = hU * (jU.length - 1),
          eU = QU / 2;
        let WU = pU;
        "top" === this.vAlign ? GU = pU + TU : "bottom" === this.vAlign ? (GU = KU - QU, WU = KU) : (WU = pU + PU / 2, GU -= eU), jU.forEach((RU => {
          RU = RU.trim(), UU.fillText(RU, cU, GU), GU += hU
        })), this.debug && (UU.lineWidth = 3, UU.strokeStyle = "#00909e", UU.strokeRect(gU, pU, EU, PU), UU.lineWidth = 2, UU.strokeStyle = "#f6d743", UU.beginPath(), UU.moveTo(cU, pU), UU.lineTo(cU, KU), UU.stroke(), UU.strokeStyle = "#ff6363", UU.beginPath(), UU.moveTo(gU, WU), UU.lineTo(qU, WU), UU.stroke());
        return {
          height: QU + hU
        }
      },
      getTextHeight: function(UU, RU) {
        const gU = UU.textBaseline;
        UU.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: tU
        } = UU.measureText(RU);
        return UU.textBaseline = gU, tU
      },
      justifyLine: function(UU, RU, gU, tU, pU) {
        const EU = RU.trim(),
          PU = UU.measureText(EU).width,
          TU = EU.split(/\s+/).length - 1,
          qU = Math.floor((pU - PU) / gU);
        if (TU <= 0 || qU <= 0) return EU;
        const KU = Math.floor(qU / TU);
        let cU = qU - TU * KU,
          GU = [];
        for (let jU = 0; jU < KU; jU++) GU.push(tU);
        GU = GU.join("");
        return EU.replace(/\s+/g, (UU => {
          const RU = cU > 0 ? GU + tU : GU;
          return cU--, UU + RU
        }))
      }
    }
  },
  38666: (UU, RU, gU) => {
    function tU(UU, RU) {
      return RU.set(UU), RU
    }
    gU.d(RU, {
      d: () => tU
    })
  },
  38219: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => hU,
      f: () => CU,
      g: () => jU,
      k: () => cU,
      o: () => GU
    });
    var tU = gU(3937),
      pU = gU(311);
    const EU = 1024,
      PU = 1536,
      TU = 2 * tU.m + 1,
      qU = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      KU = 1.5;

    function cU(UU, RU, gU) {
      if ("string" !== typeof UU) return RU;
      try {
        const gU = JSON.parse(UU);
        return gU && "object" === typeof gU ? gU : RU
      } catch (tU) {
        return void 0 !== gU && console.error(`Couldn't parse ${gU}`, tU), RU
      }
    }

    function GU(UU) {
      return cU(UU, null, "a leaderboard's rows")
    }

    function jU(UU, RU) {
      var gU, tU;
      return null !== RU && void 0 !== RU ? RU : {
        status: null !== (gU = UU.status) && void 0 !== gU ? gU : "loading",
        entries: null !== (tU = UU.entries) && void 0 !== tU ? tU : []
      }
    }

    function uU(UU, RU) {
      return "number" === typeof UU && Number.isFinite(UU) && UU > 0 ? UU : RU
    }

    function CU(UU, RU) {
      const gU = uU(UU.size, 1);
      let tU = uU(UU.width, uU(2.5 * gU, 2.5)),
        pU = uU(UU.height, uU(3.75 * gU, 3.75));
      Number.isFinite(EU * pU / tU) && Number.isFinite(PU * tU / pU) || (tU = 2.5, pU = 3.75);
      const TU = pU / tU,
        qU = Math.max(1, Math.min(EU, RU / TU));
      return {
        width: tU,
        height: pU,
        layoutWidth: Math.max(EU, PU / TU),
        layoutHeight: Math.max(PU, EU * TU),
        pixelWidth: Math.round(qU),
        pixelHeight: Math.round(Math.max(1, Math.min(RU, qU * TU)))
      }
    }

    function hU(UU, RU, gU, PU, cU, GU) {
      UU.setTransform(1, 0, 0, 1, 0, 0), UU.fillStyle = pU.N.defaultNameTagBackground, UU.fillRect(0, 0, RU, gU), UU.scale(RU / PU.layoutWidth, gU / PU.layoutHeight), UU.translate((PU.layoutWidth - EU) / 2, 0),
        function(UU, RU, gU, EU) {
          var PU, cU, GU, jU;
          const {
            top: uU,
            around: CU,
            showPlayerText: hU,
            localPlayerDbId: WU
          } = gU, {
            whiteUiText: fU,
            grayUiText: xU,
            yellowUiText: mU
          } = pU.N;
          UU.textBaseline = "middle";
          const IU = function(RU, gU, tU, pU, EU, PU) {
              let TU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              UU.font = `bold ${pU}px 'Jetbrains Mono', monospace`, UU.fillStyle = EU, UU.textAlign = TU;
              let qU = RU.replace(/[\r\n\t]/g, " ");
              if (UU.measureText(qU).width > PU) {
                for (; qU.length > 0 && UU.measureText(`${qU}\u2026`).width > PU;) qU = qU.slice(0, -1);
                qU += "\u2026"
              }
              UU.fillText(qU, gU, tU)
            },
            JU = RU => {
              UU.fillStyle = fU, UU.globalAlpha = .15, UU.fillRect(24, RU, 976, 2), UU.globalAlpha = 1
            },
            wU = null === WU ? null : (0, pU.pc)(WU),
            nU = UU => null !== wU && UU.playerHash === wU,
            bU = QU(uU.entries, tU.p),
            oU = "ready" === uU.status && bU.length > 0,
            ZU = null === CU ? [] : QU(CU.entries, TU),
            aU = bU.some(nU),
            YU = null === CU ? null : function(UU) {
              const RU = UU;
              if (!RU || !Number.isFinite(RU.rank) || !Number.isFinite(RU.tied) || !Number.isFinite(RU.total)) return null;
              return RU
            }(CU.standing),
            BU = ZU.find(nU),
            VU = bU.find(nU),
            rU = null === YU || void 0 === BU ? null : {
              value: BU.value,
              rank: YU.rank
            },
            XU = eU(bU, void 0 === VU || VU.value === (null === rU || void 0 === rU ? void 0 : rU.value) ? rU : null),
            vU = eU(ZU, rU),
            dU = (UU, RU) => {
              const gU = UU.findIndex(nU);
              return gU >= 0 ? RU[gU] : null
            },
            HU = null !== (PU = null !== (cU = null === YU || void 0 === YU ? void 0 : YU.rank) && void 0 !== cU ? cU : dU(ZU, vU)) && void 0 !== PU ? PU : dU(bU, XU);
          UU.font = "bold 34px 'Jetbrains Mono', monospace";
          const SU = [...oU ? XU : [], ...aU ? [] : vU],
            sU = Math.min(280, Math.max(0, ...SU.map((RU => UU.measureText(qU.format(RU)).width)))),
            yU = sU <= 80,
            kU = yU ? 80 : 32 + sU,
            FU = yU ? 148 : kU + 28,
            iU = 660 - FU;
          IU(`TOP ${tU.p}  /  ALL TIME`, 24, 52, 28, xU, 976), IU(hU ? String(null !== (GU = RU.title) && void 0 !== GU ? GU : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, fU, 976), IU("RANK", 32, 174, 28, xU, FU - 40), IU("PLAYER", FU, 174, 28, xU, iU), IU(hU ? String(null !== (jU = RU.scoreLabel) && void 0 !== jU ? jU : "Score").slice(0, 24) : "Score", 992, 174, 28, xU, 304, "right"), JU(202);
          const AU = (EU - 232) / (tU.p + KU + TU),
            zU = 208 + tU.p * AU,
            MU = zU + KU * AU,
            DU = (RU, gU, tU, pU) => {
              const EU = nU(RU);
              UU.fillStyle = EU ? mU : fU, UU.globalAlpha = EU ? .15 : pU ? .035 : 0, UU.fillRect(24, tU - AU / 2 + 1, 976, AU - 2), UU.globalAlpha = 1;
              const PU = EU ? mU : fU;
              IU(qU.format(gU), kU, tU, 34, PU, yU ? 80 : sU, yU ? "center" : "right"), IU(hU ? String(RU.name).slice(0, 64) : "Player", FU, tU, 34, PU, iU);
              const TU = qU.format(RU.value);
              IU(UU.measureText(TU).width > 304 ? RU.value.toExponential(6) : TU, 992, tU, 34, PU, 304, "right")
            };
          if (oU)
            for (const [tU, pU] of bU.entries()) DU(pU, XU[tU], 208 + (tU + .5) * AU, tU % 2 === 0);
          else {
            const UU = "error" === uU.status,
              RU = UU ? "Couldn't load leaderboard" : "ready" === uU.status ? "No scores yet" : "Loading leaderboard\u2026",
              gU = UU ? "Trying again shortly" : "ready" === uU.status ? "Be the first on the board!" : "Fetching the top players",
              tU = (208 + zU) / 2;
            IU(RU, 512, tU - 28, 40, UU ? pU.N.redUiText : fU, 960, "center"), IU(gU, 512, tU + 27, 30, xU, 960, "center")
          }
          const LU = zU + KU * AU / 2;
          if (null === HU) JU(LU);
          else {
            const RU = null === YU ? 0 : YU.tied - 1,
              gU = `YOUR RANK #${qU.format(HU)}${null===YU?"":` of ${qU.format(YU.total)}`}`;
            UU.font = "bold 36px 'Jetbrains Mono', monospace";
            const tU = Math.max(20, Math.min(36, Math.floor(34560 / UU.measureText(gU).width)));
            IU(gU, 512, LU - (RU > 0 ? 15 : 0), tU, mU, 960, "center"), RU > 0 && IU(`Tied with ${qU.format(RU)} other${1===RU?"":"s"}`, 512, LU + 24, 24, xU, 960, "center")
          }
          if (null === CU) return;
          const NU = MU + TU * AU / 2;
          if (aU) IU(`You're in the top ${tU.p}!`, 512, NU, 40, mU, 960, "center");
          else if (0 === ZU.length) IU("You're not on this board yet", 512, NU, 34, xU, 960, "center");
          else
            for (const [tU, pU] of ZU.entries()) DU(pU, vU[tU], MU + (tU + .5) * AU, tU % 2 === 0)
        }(UU, cU, GU, PU.layoutHeight)
    }

    function QU(UU, RU) {
      return Array.isArray(UU) ? UU.slice(0, RU).filter((UU => UU && Number.isFinite(UU.rank) && Number.isFinite(UU.value))) : []
    }

    function eU(UU, RU) {
      const gU = [];
      let tU = !1;
      return UU.forEach(((pU, EU) => {
        if (null !== RU && pU.value === RU.value) return void gU.push(RU.rank);
        const PU = EU > 0 && pU.value === UU[EU - 1].value;
        PU || (tU = 0 === EU && 1 !== pU.rank), gU.push(PU && !tU ? gU[EU - 1] : pU.rank)
      })), gU
    }
  },
  38425: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      f: () => EU
    });
    const tU = 32;

    function pU(UU) {
      return Array.from(UU).length
    }

    function EU(UU) {
      const RU = [""];
      let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        pU = "";
      const EU = () => {
        RU.push(""), gU = 0, pU = ""
      };
      for (const PU of UU.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(PU)) EU();
        else if (/^\s+$/.test(PU)) pU += PU;
      else if (PU.length > 0) {
        const UU = Array.from(PU);
        gU > 0 && gU + pU.length + UU.length > tU && EU(), RU[RU.length - 1] += pU, gU += pU.length, pU = "";
        for (const pU of UU) gU >= tU && EU(), RU[RU.length - 1] += pU, gU++
      }
      return RU[RU.length - 1] += pU, RU
    }
  },
  38662: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(36214),
      pU = gU.n(tU);
    const EU = [1, 1, 1];

    function PU(UU) {
      if (!UU) return [...EU];
      try {
        const [RU, gU, tU] = pU()(UU).rgb().array();
        return [RU / 255, gU / 255, tU / 255]
      } catch (RU) {
        return console.warn(`Invalid groundArrowPath colour "${UU}":`, RU), [...EU]
      }
    }
  },
  33907: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      d: () => TU,
      h: () => PU,
      l: () => pU,
      p: () => tU
    });
    const tU = {
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
      pU = "/textures/dayNight/sun.png",
      EU = "/textures/dayNight/moon.png",
      PU = "/textures/dayNight/stars",
      TU = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38724: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU,
      d: () => GU,
      g: () => tU,
      i: () => qU,
      j: () => pU,
      l: () => KU,
      n: () => TU,
      o: () => PU
    });
    const tU = ["linear", "easeIn", "easeOut", "easeInOut"],
      pU = ["movement", "camera", "cursor"],
      EU = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function PU(UU, RU) {
      return TU(UU, RU, EU)
    }

    function TU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (UU === RU || Number.isNaN(UU) && Number.isNaN(RU)) return !0;
      if ("object" !== typeof UU || "object" !== typeof RU || null === UU || null === RU || Array.isArray(UU) !== Array.isArray(RU)) return !1;
      const tU = UU,
        pU = RU;
      for (const EU of new Set([...Object.keys(tU), ...Object.keys(pU)]))
        if (!gU.includes(EU) && !TU(tU[EU], pU[EU])) return !1;
      return !0
    }
    const qU = {
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
      KU = "^-[1-9][0-9]*$",
      cU = "^#[0-9a-fA-F]{6}$",
      GU = "#000000"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);