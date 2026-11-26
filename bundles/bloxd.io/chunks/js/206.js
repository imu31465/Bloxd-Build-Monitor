export const id = 206;
export const ids = [206];
export const modules = {
  40357: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {
      constructor(VV, eV) {
        this.read = VV, this.apply = eV, this.release = null
      }
      turn(VV, eV) {
        const xV = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: eV,
          forcedCameraDirection: [VV[0], VV[1], VV[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), eV + 100),
          transitionMs: xV
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(VV) {
        null !== this.release && (clearTimeout(this.release.timer), VV && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  39842: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      d: () => YV
    });
    const JV = new Map;

    function YV(VV, eV) {
      JV.set(VV, eV)
    }

    function UV(VV) {
      return VV ? JV.get(VV) : void 0
    }
  },
  40889: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV
    });
    var JV = xV(39352);

    function YV(VV, eV, xV) {
      var YV, UV, yV, pV, QV, nV, wV;
      const ZV = (0, JV.b)(VV, eV, xV[0], xV[1], xV[2]),
        vV = ZV ? null !== (YV = ZV.textCell) && void 0 !== YV ? YV : ZV.rect.anchor : xV,
        rV = eV(vV[0], vV[1], vV[2]);
      return {
        pos: [xV[0], xV[1], xV[2]],
        noticeboardSpan: ZV && {
          width: ZV.rect.width,
          height: ZV.rect.height
        },
        text: null !== (UV = null === rV || void 0 === rV || null === (yV = rV.persisted) || void 0 === yV || null === (pV = yV.shared) || void 0 === pV ? void 0 : pV.text) && void 0 !== UV ? UV : "",
        textSize: null !== (QV = null === rV || void 0 === rV || null === (nV = rV.persisted) || void 0 === nV || null === (wV = nV.shared) || void 0 === wV ? void 0 : wV.textSize) && void 0 !== QV ? QV : null
      }
    }
  },
  39662: (VV, eV, xV) => {
    function JV(VV) {
      switch (VV.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    xV.d(eV, {
      e: () => YV,
      g: () => UV,
      h: () => JV
    });
    const YV = 4,
      UV = 3
  },
  40382: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      h: () => UV
    });
    var JV = xV(375);
    const YV = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta", "skyIslands", "skyblock", "tsunami"]);
    class UV {
      constructor(VV) {
        this.importGame = VV, this.loads = new Map, this.loaded = new Map
      }
      load(VV) {
        const eV = (0, JV.Pb)(VV);
        if (!YV.has(eV)) return Promise.resolve(void 0);
        let xV = this.loads.get(eV);
        return xV || (xV = this.importGame(eV).then((VV => {
          const xV = VV.default;
          if ("function" !== typeof xV) throw new Error(`${eV}'s client code has no default-exported factory`);
          return this.loaded.set(eV, xV), xV
        })).catch((VV => {
          throw this.loads.delete(eV), VV
        })), this.loads.set(eV, xV)), xV
      }
      loadedFactory(VV) {
        const eV = (0, JV.Pb)(VV);
        if (!YV.has(eV)) return;
        const xV = this.loaded.get(eV);
        if (!xV) throw new Error(`${eV}'s client code started before it loaded`);
        return xV
      }
    }
  },
  40379: (VV, eV, xV) => {
    function JV(VV, eV) {
      return Object.values({
        ...VV,
        ...eV
      }).filter((VV => null !== VV))
    }
    xV.d(eV, {
      b: () => JV
    })
  },
  40894: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(9922),
      YV = xV(35319),
      UV = xV(3719);

    function yV(VV) {
      if (VV === JV.d) return 0;
      const eV = (0, UV.d)(VV);
      if (void 0 !== eV && eV <= YV.MAX_BLOCK_ID) return eV;
      const xV = (0, UV.d)(VV.split("|")[0]);
      if (void 0 !== xV && xV <= YV.MAX_BLOCK_ID && (0, YV.rootMetaDescOf)(xV) === VV) return xV;
      throw new Error(`Invalid block name. You sent ${VV}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  40434: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV
    });
    var JV = xV(27);
    class YV {
      constructor(VV) {
        this.screen = VV, this.hidesHud = !1
      }
      show(VV, eV) {
        this.screen.setFade(VV.colour, VV.alpha), this.screen.setLetterbox(!0 === eV.letterbox, VV.alpha < 1), this.setHudHidden(!0 === eV.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(VV) {
        this.hidesHud !== VV && (this.hidesHud = VV, JV.b.set({
          isUiHiddenByCamera: VV
        }))
      }
    }
  },
  40405: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      i: () => vV,
      m: () => ZV,
      o: () => yV,
      q: () => kV,
      r: () => QV,
      v: () => bV,
      w: () => nV,
      y: () => pV,
      z: () => wV
    });
    const JV = Math.PI / 2 - .001,
      YV = 2 * Math.PI,
      UV = 1e-9;

    function yV(VV, eV) {
      eV.heading = VV.heading, eV.pitch = VV.pitch
    }

    function pV(VV, eV) {
      const xV = eV - VV;
      return xV - YV * Math.floor((xV + Math.PI) / YV)
    }

    function QV(VV, eV, xV) {
      return VV + pV(VV, eV) * xV
    }

    function nV(VV) {
      if (!Number.isFinite(VV)) return VV;
      const eV = VV - YV * Math.floor(VV / YV);
      return eV < YV ? eV : 0
    }

    function wV(VV, eV) {
      return VV + pV(VV, eV)
    }

    function ZV(VV) {
      return Math.max(-JV, Math.min(JV, VV))
    }

    function vV(VV, eV, xV) {
      const JV = Math.cos(eV);
      return xV[0] = JV * Math.sin(VV), xV[1] = -Math.sin(eV), xV[2] = JV * Math.cos(VV), xV
    }

    function rV(VV, eV, xV, JV) {
      const YV = Math.sqrt(VV * VV + xV * xV);
      return YV < UV && Math.abs(eV) < UV || (YV >= UV && (JV.heading = Math.atan2(VV, xV)), JV.pitch = ZV(Math.atan2(-eV, YV) + 0)), JV
    }

    function kV(VV, eV) {
      return rV(VV[0], VV[1], VV[2], eV)
    }

    function bV(VV, eV, xV) {
      return rV(eV[0] - VV[0], eV[1] - VV[1], eV[2] - VV[2], xV)
    }
  },
  40432: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      i: () => YV
    });
    var JV = xV(40405);

    function YV(VV) {
      var eV;
      const xV = "default" === VV.mode ? "movement" : null !== (eV = VV.playerFacing) && void 0 !== eV ? eV : "movement";
      return "cursor" === xV ? {
        facing: xV,
        mouseTurns: null
      } : {
        facing: xV,
        mouseTurns: "default" !== VV.mode && void 0 !== VV.playerLook ? "look" : "view"
      }
    }

    function UV(VV, eV, xV, YV, UV, yV) {
      return yV.uR = 0, yV.eD = 0, yV.pointedAt = void 0, void 0 !== YV ? UV ? (yV.pointedAt = YV, VV) : (0, JV.w)(YV.heading) : UV ? (yV.uR = eV, yV.eD = xV, VV) : (0, JV.w)(VV + eV)
    }
  },
  40419: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => fV
    });
    var JV = xV(40425),
      YV = xV(40405),
      UV = xV(38167);

    function yV(VV, eV, xV, JV) {
      if (!(JV > 0)) return eV;
      const YV = eV > VV ? Math.min(eV, VV + xV / JV) : Math.max(eV, VV - xV / JV);
      return Math.abs(eV - YV) < 1e-9 ? eV : YV
    }
    class pV {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: JV.f,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(VV) {
        !this.isGoingOut() && this.sinceTurnMs < JV.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: VV
        } : (this.waiting = null, this.startOut(VV))
      }
      fadeIn(VV) {
        this.isGoingOut() ? this.sinceTurnMs < JV.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: VV
        } : (this.waiting = null, this.startIn(VV)) : this.waiting = null
      }
      advance(VV) {
        const eV = this.waiting;
        if (null === eV) return this.step(VV);
        const xV = JV.k.minFadeTurnMs - this.sinceTurnMs;
        if (xV > VV) return this.step(VV);
        const YV = this.step(xV);
        return this.waiting = null, "out" === eV.turn ? this.startOut(eV.transition) : this.startIn(eV.minMs), this.step(VV - xV) || YV
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(VV) {
        ("in" === this.phase || null === this.phase && this.clearMs < JV.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = VV.colour), this.outMs = VV.outMs, this.holdMs = VV.holdMs, this.inMs = VV.inMs
      }
      startIn(VV) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(VV, this.inMs)
      }
      step(VV) {
        const eV = this.screen;
        this.sinceTurnMs += VV, null === this.phase && (this.clearMs += VV);
        let xV = !1,
          YV = VV;
        if ("out" === this.phase) {
          const JV = (1 - eV.alpha) * this.outMs;
          if (eV.alpha = yV(eV.alpha, 1, VV, this.outMs), eV.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, YV = Math.max(0, VV - JV), xV = !0
        }
        let UV = VV;
        if ("hold" === this.phase) {
          this.heldMs += YV;
          const VV = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - JV.k.minFadeTurnMs);
          if (VV < 0 || xV) return xV;
          this.phase = "in", this.sinceTurnMs = VV, UV = VV
        }
        return "in" === this.phase && (eV.alpha = yV(eV.alpha, 0, UV, this.inMs), eV.alpha <= 0 && (this.phase = null, this.clearMs = 0)), xV
      }
    }
    var QV = xV(40397),
      nV = xV(40427),
      wV = xV(2014),
      ZV = xV(37722);

    function vV(VV, eV) {
      for (let xV = 0; xV < eV.length; xV++) eV[xV] = VV[xV]
    }

    function rV(VV, eV) {
      var xV;
      return null !== (xV = VV.fov) && void 0 !== xV ? xV : eV.getDefaultFov()
    }

    function kV(VV, eV, xV, JV, YV) {
      const UV = 2 / JV,
        yV = Math.exp(-UV * YV);
      for (let pV = 0; pV < VV.length; pV++) {
        const JV = VV[pV] - xV[pV],
          QV = (eV[pV] + UV * JV) * YV;
        VV[pV] = xV[pV] + (JV + QV) * yV, eV[pV] = (eV[pV] - UV * QV) * yV
      }
    }
    class bV {
      constructor(VV, eV, xV, JV) {
        var UV, yV, pV, QV, nV;
        this.settings = VV, this.cZ = eV, this.targets = xV, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.ME = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, YV.w)((0, wV.k)(null !== (UV = VV.viewHeading) && void 0 !== UV ? UV : 0)),
          pitch: (0, YV.m)((0, wV.k)(null !== (yV = VV.viewElevation) && void 0 !== yV ? yV : 45))
        }, this.closestDistance = null !== (pV = VV.closestDistance) && void 0 !== pV ? pV : Math.min(6, null !== (QV = VV.furthestDistance) && void 0 !== QV ? QV : 1 / 0), this.furthestDistance = null !== (nV = VV.furthestDistance) && void 0 !== nV ? nV : Math.max(64, this.closestDistance);
        const ZV = (0, YV.i)(this.base.heading, this.base.pitch, this.forward),
          vV = JV.position,
          rV = this.closestDistance;
        this.goal = [vV[0] + ZV[0] * rV, vV[1] + ZV[1] * rV, vV[2] + ZV[2] * rV, rV, this.base.heading, this.base.pitch]
      }
      update(VV, eV, xV) {
        var JV, UV;
        this.placeGoal(null !== (JV = this.settings.fov) && void 0 !== JV ? JV : this.cZ.getBaseFov()), this.goal[4] = (0, YV.z)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const yV = null !== (UV = this.settings.smoothMs) && void 0 !== UV ? UV : 400;
        !this.started || yV < 1 ? (vV(this.goal, this.smoothed), this.ME.fill(0), this.started = !0) : kV(this.smoothed, this.ME, this.goal, yV, VV), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, YV.m)(this.smoothed[5]), eV.apply(this.angles, xV);
        const pV = (0, YV.i)(xV.heading, xV.pitch, this.forward);
        for (let YV = 0; YV < 3; YV++) xV.position[YV] = this.smoothed[YV] - pV[YV] * this.smoothed[3];
        xV.fov = rV(this.settings, this.cZ)
      }
      continueFrom(VV) {
        VV instanceof bV && (vV(VV.goal, this.goal), vV(VV.smoothed, this.smoothed), vV(VV.ME, this.ME), this.framedTargets = VV.framedTargets, this.started = VV.started)
      }
      reset() {
        this.ME.fill(0), this.started = !1
      }
      placeGoal(VV) {
        var eV;
        let xV = 0;
        for (const wV of this.settings.targets) {
          const VV = this.targets.currentAimPoint(wV);
          VV && (0, QV.h)(VV, this.pointAt(xV++))
        }
        if (xV > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const VV = this.targets.aimPoint(this.cZ.localPlayerId);
          VV && (0, QV.h)(VV, this.pointAt(xV++))
        }
        const JV = this.goal;
        if (0 === xV) return void(JV[3] = this.withinDistances(JV[3]));
        for (let QV = 0; QV < 3; QV++) {
          let VV = 1 / 0,
            eV = -1 / 0;
          for (let JV = 0; JV < xV; JV++) VV = Math.min(VV, this.points[JV][QV]), eV = Math.max(eV, this.points[JV][QV]);
          JV[QV] = (VV + eV) / 2
        }
        let YV = 0;
        for (let QV = 0; QV < xV; QV++) {
          const VV = this.points[QV];
          YV = Math.max(YV, Math.hypot(VV[0] - JV[0], VV[1] - JV[1], VV[2] - JV[2]))
        }
        const UV = Math.tan((0, wV.k)(VV) / 2),
          yV = Math.atan(UV * (!0 === this.settings.letterbox ? ZV.f : 1)),
          pV = Math.atan(UV * this.cZ.getAspectRatio()),
          nV = (YV + (null !== (eV = this.settings.padding) && void 0 !== eV ? eV : 2)) / Math.sin(Math.min(yV, pV));
        JV[3] = this.withinDistances(nV)
      }
      withinDistances(VV) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, VV))
      }
      pointAt(VV) {
        return VV === this.points.length && this.points.push([0, 0, 0]), this.points[VV]
      }
    }
    class EV {
      constructor(VV) {
        this.limits = VV, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(VV) {
        this.limits && (this.yawOffset = VV.yawOffset, this.pitchOffset = VV.pitchOffset, this.idleMs = VV.idleMs)
      }
      update(VV, eV) {
        const xV = this.limits;
        if (!xV) return;
        const JV = Number.isFinite(eV.uR) ? eV.uR : 0,
          YV = Number.isFinite(eV.eD) ? eV.eD : 0;
        if (eV.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: eV.pointedAt.heading,
          pitch: eV.pointedAt.pitch
        };
        else if (0 !== JV || 0 !== YV) this.idleMs = 0, this.yawOffset += JV, this.pitchOffset += YV;
        else {
          const eV = Math.max(0, this.idleMs + VV - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += VV, void 0 !== xV.returnMs && eV > 0) {
            const VV = xV.returnMs > 0 ? Math.exp(-3 * eV / xV.returnMs) : 0;
            this.yawOffset *= VV, this.pitchOffset *= VV
          }
        }
        this.clampOffsets(xV)
      }
      clampOffsets(VV) {
        if (VV.maxYaw >= 180) this.yawOffset = (0, YV.y)(0, this.yawOffset);
        else {
          const eV = (0, wV.k)(VV.maxYaw);
          this.yawOffset = Math.max(-eV, Math.min(eV, this.yawOffset))
        }
        const eV = (0, wV.k)(VV.maxPitch);
        this.pitchOffset = Math.max(-eV, Math.min(eV, this.pitchOffset))
      }
      apply(VV, eV) {
        this.pointedAt && this.limits && (this.yawOffset = (0, YV.y)(VV.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - VV.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const xV = (0, YV.m)(VV.pitch + this.pitchOffset);
        this.pitchOffset = xV - VV.pitch, eV.heading = (0, YV.w)(VV.heading + this.yawOffset), eV.pitch = xV
      }
      unapply(VV, eV) {
        eV.heading = (0, YV.w)(VV.heading - this.yawOffset), eV.pitch = (0, YV.m)(VV.pitch - this.pitchOffset)
      }
    }
    const BV = 1e-6;

    function jV(VV) {
      return Math.sqrt(VV[0] * VV[0] + VV[1] * VV[1] + VV[2] * VV[2])
    }

    function qV(VV, eV, xV, JV, YV) {
      const UV = YV * YV,
        yV = UV * YV;
      return (2 * yV - 3 * UV + 1) * VV + (yV - 2 * UV + YV) * eV + (-2 * yV + 3 * UV) * xV + (yV - UV) * JV
    }

    function tV(VV, eV, xV, JV, YV) {
      const UV = YV * YV;
      return (6 * UV - 6 * YV) * VV + (3 * UV - 4 * YV + 1) * eV + (-6 * UV + 6 * YV) * xV + (3 * UV - 2 * YV) * JV
    }

    function FV(VV, eV) {
      const xV = eV[0] - VV[0],
        JV = eV[1] - VV[1],
        YV = eV[2] - VV[2];
      return Math.sqrt(xV * xV + JV * JV + YV * YV)
    }

    function TV(VV, eV, xV, JV, YV, UV) {
      for (let yV = 0; yV < 3; yV++) UV[yV] = YV ? VV[yV] * JV : xV[yV] - eV[yV];
      return YV && function(VV, eV) {
        const xV = jV(VV);
        if (xV > eV) {
          const JV = eV / xV;
          VV[0] *= JV, VV[1] *= JV, VV[2] *= JV
        }
      }(UV, 3 * FV(eV, xV)), UV
    }

    function PV(VV, eV, xV, JV) {
      for (let YV = 0; YV < 3; YV++) JV[YV] = 6 * (eV[YV] - VV[YV]) - 2 * xV[YV];
      if (jV(JV) < BV)
        for (let YV = 0; YV < 3; YV++) JV[YV] = eV[YV] - VV[YV];
      return JV
    }

    function AV(VV, eV) {
      return [2 * eV[0] - VV[0], 2 * eV[1] - VV[1], 2 * eV[2] - VV[2]]
    }

    function NV(VV, eV, xV, JV, YV, UV, yV) {
      if (!UV && !yV) return 0;
      const pV = UV ? VV : 2 * eV - xV,
        QV = yV ? xV : 2 * eV - VV,
        nV = UV ? JV : YV,
        wV = yV ? YV : JV,
        ZV = (eV - pV) / nV,
        vV = (QV - eV) / wV;
      if (ZV * vV <= 0) return 0;
      const rV = (QV - pV) / (nV + wV),
        kV = 3 * Math.min(Math.abs(ZV), Math.abs(vV));
      return Math.max(-kV, Math.min(kV, rV))
    }

    function XV(VV, eV, xV, JV, YV, UV, yV) {
      const {
        u: pV,
        segmentMs: QV
      } = VV;
      if (!VV.curved) return xV + (JV - xV) * pV;
      return qV(xV, NV(eV, xV, JV, VV.beforeMs, QV, UV, !0) * QV, JV, NV(xV, JV, YV, QV, VV.afterMs, !0, yV) * QV, pV)
    }

    function MV(VV) {
      return Math.abs(VV.pitch) >= YV.e
    }
    class zV {
      constructor(VV, eV, xV, JV, YV) {
        this.nodes = VV, this.prevNodes = xV, this.nextNodes = JV, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = VV.map(((VV, xV) => this.nodeTangent(eV, YV, xV)))
      }
      sample(VV, eV, xV) {
        const {
          index: JV,
          toIndex: UV,
          segmentMs: yV,
          curved: pV
        } = VV, QV = this.fromAngles, nV = this.toAngles, wV = this.nodeAngles(JV, xV.position, eV, QV), ZV = this.nodeAngles(UV, xV.position, eV, nV);
        if (yV > 0 && "aim" !== wV && "aim" !== ZV && this.liveTangent(VV, QV)) return xV.heading = (0, YV.w)(QV.heading), void(xV.pitch = QV.pitch);
        if ("none" === wV && "none" === ZV) return;
        !pV && yV > 0 && ("tangent" === wV && this.liveTangent(VV, QV), "tangent" === ZV && this.liveTangent(VV, nV)), "none" === wV ? (0, YV.o)(nV, QV) : "none" === ZV && (0, YV.o)(QV, nV);
        const vV = pV && VV.beforeIndex >= 0 && "none" !== this.nodeAngles(VV.beforeIndex, xV.position, eV, this.beforeAngles),
          rV = pV && VV.afterIndex >= 0 && "none" !== this.nodeAngles(VV.afterIndex, xV.position, eV, this.afterAngles),
          kV = (0, YV.z)(QV.heading, nV.heading),
          bV = XV(VV, vV ? (0, YV.z)(QV.heading, this.beforeAngles.heading) : 0, QV.heading, kV, rV ? (0, YV.z)(kV, this.afterAngles.heading) : 0, vV, rV);
        xV.heading = (0, YV.w)(bV), xV.pitch = (0, YV.m)(XV(VV, this.beforeAngles.pitch, QV.pitch, nV.pitch, this.afterAngles.pitch, vV, rV))
      }
      nodeAngles(VV, eV, xV, JV) {
        const YV = this.rawNodeAngles(VV, eV, xV, JV);
        return "none" !== YV && MV(JV) && !this.borrowHeading(this.prevNodes[VV], eV, xV, JV) && this.borrowHeading(this.nextNodes[VV], eV, xV, JV), YV
      }
      borrowHeading(VV, eV, xV, JV) {
        const YV = this.borrowedAngles;
        return !(VV < 0 || "none" === this.rawNodeAngles(VV, eV, xV, YV) || MV(YV)) && (JV.heading = YV.heading, !0)
      }
      rawNodeAngles(VV, eV, xV, JV) {
        const UV = this.nodes[VV].keyframe;
        if (UV.lookDirection) return (0, YV.q)(UV.lookDirection, JV), "aim";
        if (void 0 !== UV.lookAt) {
          const VV = xV(UV.lookAt);
          if (VV) return (0, YV.v)(eV, VV, JV), "aim"
        }
        const yV = this.tangents[VV];
        return yV ? ((0, YV.o)(yV, JV), "tangent") : "none"
      }
      liveTangent(VV, eV) {
        const xV = this.nodes[VV.index].position,
          JV = this.nodes[VV.toIndex].position,
          UV = this.derivative;
        for (let YV = 0; YV < 3; YV++) UV[YV] = tV(xV[YV], VV.fromTangent[YV], JV[YV], VV.toTangent[YV], VV.u);
        return jV(UV) > 1e-9 ? ((0, YV.q)(UV, eV), !0) : !(FV(xV, JV) < BV) && ((0, YV.q)(PV(xV, JV, VV.u < .5 ? VV.toTangent : VV.fromTangent, UV), eV), !0)
      }
      nodeTangent(VV, eV, xV) {
        var JV;
        const UV = VV[xV];
        if (jV(UV) > 1e-9) return (0, YV.q)(UV, {
          heading: 0,
          pitch: 0
        });
        const yV = null !== (JV = this.restDirectionTo(xV, xV + 1, VV, eV)) && void 0 !== JV ? JV : this.restDirectionTo(xV, xV - 1, VV, eV);
        return yV ? (0, YV.q)(yV, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(VV, eV, xV, JV) {
        const YV = this.nodes[VV],
          UV = this.nodes[eV];
        if (!UV || FV(YV.position, UV.position) < BV) return null;
        const [yV, pV] = eV > VV ? [YV, UV] : [UV, YV], QV = TV(xV[eV], yV.position, pV.position, pV.timeMs - yV.timeMs, JV, [0, 0, 0]);
        return PV(yV.position, pV.position, QV, [0, 0, 0])
      }
    }

    function GV(VV, eV) {
      const xV = VV.lookDirection || eV.lookDirection ? function(VV, eV) {
        if (!VV || !eV) return VV === eV;
        const xV = jV(VV),
          JV = jV(eV);
        return Math.hypot(VV[0] / xV - eV[0] / JV, VV[1] / xV - eV[1] / JV, VV[2] / xV - eV[2] / JV) < BV
      }(VV.lookDirection, eV.lookDirection) : (JV = VV.lookAt, YV = eV.lookAt, "object" !== typeof JV || "object" !== typeof YV ? JV === YV : FV(JV, YV) < BV);
      var JV, YV;
      return FV(VV.position, eV.position) < BV && VV.fov === eV.fov && xV
    }
    class WV {
      constructor(VV, eV, xV) {
        if (this.smooth = eV, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === VV.length) throw new Error("A camera path needs at least one keyframe");
        for (let UV = 1; UV < VV.length; UV++)
          if (!(VV[UV].timeMs > VV[UV - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = VV.map((VV => {
          var eV;
          return {
            timeMs: VV.timeMs,
            position: [...VV.position],
            keyframe: VV,
            easing: (0, UV.m)(null !== (eV = VV.easing) && void 0 !== eV ? eV : "linear")
          }
        }));
        const JV = this.nodes[0],
          YV = this.nodes[this.nodes.length - 1],
          yV = xV && this.nodes.length > 1;
        yV && !GV(JV.keyframe, YV.keyframe) && this.nodes.push({
          ...JV,
          timeMs: YV.timeMs + (YV.timeMs - JV.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = yV ? this.nodes[this.nodes.length - 1].timeMs - JV.timeMs : 0, this.prevNodes = this.nodes.map(((VV, eV) => this.neighbour(eV, -1))), this.nextNodes = this.nodes.map(((VV, eV) => this.neighbour(eV, 1))), this.prevGaps = this.prevNodes.map(((VV, eV) => VV >= 0 ? this.gapMs(eV, -1) : 0)), this.nextGaps = this.nextNodes.map(((VV, eV) => VV >= 0 ? this.gapMs(eV, 1) : 0)), this.velocities = this.nodes.map(((VV, eV) => {
          const xV = this.prevNodes[eV],
            JV = this.nextNodes[eV];
          return function(VV, eV, xV, JV, YV, UV) {
            if (UV[0] = 0, UV[1] = 0, UV[2] = 0, !VV && !xV) return UV;
            const yV = null !== VV && void 0 !== VV ? VV : AV(null !== xV && void 0 !== xV ? xV : eV, eV),
              pV = null !== xV && void 0 !== xV ? xV : AV(null !== VV && void 0 !== VV ? VV : eV, eV),
              QV = VV ? JV : YV,
              nV = xV ? YV : JV,
              wV = FV(yV, eV),
              ZV = FV(eV, pV);
            if (wV < BV || ZV < BV) return UV;
            const vV = Math.sqrt(wV),
              rV = Math.sqrt(ZV),
              kV = (vV + rV) / (QV + nV);
            for (let bV = 0; bV < 3; bV++) {
              const VV = (eV[bV] - yV[bV]) / vV - (pV[bV] - yV[bV]) / (vV + rV) + (pV[bV] - eV[bV]) / rV;
              UV[bV] = VV * kV
            }
            return UV
          }(xV >= 0 ? this.nodes[xV].position : null, VV.position, JV >= 0 ? this.nodes[JV].position : null, this.prevGaps[eV], this.nextGaps[eV], [0, 0, 0])
        })), this.aim = new zV(this.nodes, this.velocities, this.prevNodes, this.nextNodes, eV)
      }
      sample(VV, eV, xV, JV) {
        const YV = this.findSegment(this.pathTime(VV));
        this.samplePosition(YV, JV.position), this.aim.sample(YV, eV, JV);
        const {
          beforeIndex: UV,
          afterIndex: yV
        } = YV;
        JV.fov = XV(YV, UV >= 0 ? this.fovAt(UV, xV) : 0, this.fovAt(YV.index, xV), this.fovAt(YV.toIndex, xV), yV >= 0 ? this.fovAt(yV, xV) : 0, UV >= 0, yV >= 0)
      }
      pathTime(VV) {
        const eV = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || VV <= eV) return VV;
        const xV = VV - eV;
        return eV + xV - this.loopMs * Math.floor(xV / this.loopMs)
      }
      findSegment(VV) {
        const eV = this.nodes,
          xV = this.segment;
        let JV = xV.index;
        for (VV < eV[JV].timeMs && (JV = 0); JV < eV.length - 2 && eV[JV + 1].timeMs <= VV;) JV++;
        const YV = Math.min(JV + 1, eV.length - 1),
          yV = eV[YV].timeMs - eV[JV].timeMs;
        return xV.index = JV, xV.toIndex = YV, xV.segmentMs = yV, xV.u = yV > 0 ? (0, UV.l)((VV - eV[JV].timeMs) / yV, eV[JV].easing) : 1, xV.curved = this.smooth && yV > 0, xV.beforeIndex = this.prevNodes[JV], xV.afterIndex = this.nextNodes[YV], xV.beforeMs = this.prevGaps[JV], xV.afterMs = this.nextGaps[YV], xV
      }
      samplePosition(VV, eV) {
        const {
          fromTangent: xV,
          toTangent: JV,
          curved: YV
        } = VV, UV = this.nodes[VV.index].position, yV = this.nodes[VV.toIndex].position;
        TV(this.velocities[VV.index], UV, yV, VV.segmentMs, YV, xV), TV(this.velocities[VV.toIndex], UV, yV, VV.segmentMs, YV, JV);
        const pV = VV.u;
        for (let QV = 0; QV < 3; QV++) eV[QV] = YV ? qV(UV[QV], xV[QV], yV[QV], JV[QV], pV) : UV[QV] + (yV[QV] - UV[QV]) * pV
      }
      fovAt(VV, eV) {
        var xV;
        return null !== (xV = this.nodes[VV].keyframe.fov) && void 0 !== xV ? xV : eV
      }
      neighbour(VV, eV) {
        const xV = this.nodes.length - 1,
          JV = VV + eV;
        return JV >= 0 && JV <= xV ? JV : this.loopMs <= 0 || xV < 2 ? -1 : JV < 0 ? xV - 1 : 1
      }
      gapMs(VV, eV) {
        const xV = this.nodes.length - 1;
        if (1 === eV) {
          const eV = VV === xV ? 0 : VV;
          return this.nodes[eV + 1].timeMs - this.nodes[eV].timeMs
        }
        const JV = 0 === VV ? xV : VV;
        return this.nodes[JV].timeMs - this.nodes[JV - 1].timeMs
      }
    }

    function RV(VV, eV, xV) {
      return null !== xV && Number.isFinite(xV) ? (VV.set(eV, xV), xV) : VV.get(eV)
    }
    class gV {
      constructor(VV) {
        this.cZ = VV, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = eV => VV.getEntityPosition(eV), this.readAimPoint = eV => VV.getEntityAimPoint(eV)
      }
      aimPoint(VV) {
        return "string" !== typeof VV ? (0, QV.r)(VV, 3) ? VV : null : this.resolve(VV, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(VV) {
        const eV = "string" === typeof VV ? this.cZ.getEntityAimPoint(VV) : VV;
        return eV && (0, QV.r)(eV, 3) ? eV : null
      }
      feetPosition(VV) {
        return this.resolve(VV, this.readFeet, this.lastFeet)
      }
      heading(VV) {
        const eV = RV(this.lastHeadings, VV, this.cZ.getEntityHeading(VV));
        return void 0 !== eV ? eV : VV === this.cZ.localPlayerId ? 0 : this.heading(this.cZ.localPlayerId)
      }
      pitch(VV) {
        var eV;
        return null !== (eV = RV(this.lastPitches, VV, this.cZ.getEntityPitch(VV))) && void 0 !== eV ? eV : 0
      }
      lookHeading(VV) {
        var eV;
        return null !== (eV = RV(this.lastLookHeadings, VV, this.cZ.getEntityLookHeading(VV))) && void 0 !== eV ? eV : this.heading(VV)
      }
      resolve(VV, eV, xV) {
        const JV = eV(VV);
        let YV = xV.get(VV);
        return JV && (0, QV.r)(JV, 3) ? (YV || (YV = [0, 0, 0], xV.set(VV, YV)), YV[0] = JV[0], YV[1] = JV[1], YV[2] = JV[2], YV) : YV || (VV === this.cZ.localPlayerId ? null : this.resolve(this.cZ.localPlayerId, eV, xV))
      }
    }

    function DV(VV) {
      return {
        heading: VV.heading,
        pitch: VV.pitch
      }
    }

    function iV(VV, eV) {
      Number.isFinite(VV.heading) && Number.isFinite(VV.pitch) || (0, YV.o)(eV, VV)
    }

    function CV(VV, eV, xV, JV, UV) {
      if (eV) return void(0, YV.q)(eV, UV);
      const yV = JV.aimPoint(xV);
      yV && (0, YV.v)(VV, yV, UV)
    }
    class aV {
      constructor(VV, eV, xV, JV) {
        this.settings = VV, this.cZ = eV, this.targets = xV, this.base = void 0, this.base = DV(JV)
      }
      update(VV, eV, xV) {
        var JV;
        const YV = this.settings;
        (0, QV.h)(YV.position, xV.position), CV(YV.position, YV.lookDirection, null !== (JV = YV.lookAt) && void 0 !== JV ? JV : this.cZ.localPlayerId, this.targets, this.base), eV.apply(this.base, xV), xV.fov = rV(YV, this.cZ)
      }
      continueFrom(VV) {
        VV instanceof aV && (0, YV.o)(VV.base, this.base)
      }
      reset(VV) {
        iV(this.base, VV)
      }
    }
    class oV {
      constructor(VV, eV, xV, JV) {
        this.settings = VV, this.cZ = eV, this.targets = xV, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.ME = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = DV(JV), this.goal = [...JV.position]
      }
      update(VV, eV, xV) {
        var JV, UV;
        const yV = this.settings,
          pV = null !== (JV = yV.target) && void 0 !== JV ? JV : this.cZ.localPlayerId,
          nV = this.targets.feetPosition(pV),
          wV = "eye" === yV.anchor;
        let ZV = !1;
        var vV;
        nV && (ZV = this.foundFeet && FV(this.lastFeet, nV) > 32 + .1 * VV, (0, QV.h)(nV, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (vV = wV ? this.targets.aimPoint(pV) : null) && void 0 !== vV ? vV : nV, pV));
        const bV = null !== (UV = yV.smoothMs) && void 0 !== UV ? UV : 0;
        !this.started || bV < 1 || ZV ? ((0, QV.h)(this.goal, this.smoothed), this.ME.fill(0), this.started = !0) : kV(this.smoothed, this.ME, this.goal, bV, VV), ZV && (this.distance = -1), (0, QV.h)(this.smoothed, xV.position);
        const EV = !0 === yV.avoidTerrain ? this.pullIn(pV, VV, xV) : 1;
        let BV = this.goal;
        if ("target" === yV.offsetSpace) BV = xV.position;
        else if (EV < 1) {
          BV = this.aimOrigin;
          for (let VV = 0; VV < 3; VV++) BV[VV] = xV.position[VV] + (this.goal[VV] - this.smoothed[VV]) * EV
        }
        if (wV && !yV.lookDirection && void 0 === yV.lookAt) {
          const eV = this.targets.lookHeading(pV),
            xV = this.targets.pitch(pV),
            JV = 1 - Math.exp(-VV / 50),
            UV = (0, YV.w)(this.eyeHeading + (0, YV.y)(this.eyeHeading, eV) * JV),
            yV = this.eyePitch + (xV - this.eyePitch) * JV,
            QV = pV !== this.cZ.localPlayerId && Number.isFinite(UV) && Number.isFinite(yV) && !ZV;
          this.eyeHeading = QV ? UV : (0, YV.w)(eV), this.eyePitch = QV ? yV : xV, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var jV;
          this.eyeHeading = NaN, this.eyePitch = NaN, CV(BV, yV.lookDirection, null !== (jV = yV.lookAt) && void 0 !== jV ? jV : pV, this.targets, this.base)
        }
        eV.apply(this.base, xV), xV.fov = rV(yV, this.cZ)
      }
      continueFrom(VV) {
        VV instanceof oV && (0, JV.q)(VV.settings.target, this.settings.target) && ((0, YV.o)(VV.base, this.base), (0, QV.h)(VV.goal, this.goal), (0, QV.h)(VV.lastFeet, this.lastFeet), this.foundFeet = VV.foundFeet, (0, QV.h)(VV.smoothed, this.smoothed), (0, QV.h)(VV.ME, this.ME), this.started = VV.started, this.eyeHeading = VV.eyeHeading, this.eyePitch = VV.eyePitch, !0 === VV.settings.avoidTerrain && (this.distance = VV.distance))
      }
      reset(VV) {
        iV(this.base, VV), this.ME.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(VV, eV, xV) {
        const JV = this.targets.aimPoint(VV);
        if (!JV) return 1;
        const YV = xV.position,
          UV = FV(JV, YV);
        if (!(UV > 0)) return 1;
        const yV = this.toCamera;
        for (let QV = 0; QV < 3; QV++) yV[QV] = (YV[QV] - JV[QV]) / UV;
        const pV = function(VV, eV, xV) {
          return VV < 0 || eV < VV ? eV : eV + (VV - eV) * Math.exp(-xV / 150)
        }(this.distance, function(VV, eV, xV, JV) {
          const YV = VV.raycastTerrain(eV, xV, JV);
          return null !== YV && Number.isFinite(YV) ? Math.min(JV, Math.max(0, YV - .2)) : JV
        }(this.cZ, JV, yV, UV), eV);
        if (UV - pV < .001) return this.distance = -1, 1;
        this.distance = pV;
        for (let QV = 0; QV < 3; QV++) YV[QV] = JV[QV] + yV[QV] * pV;
        return pV / UV
      }
      placeGoal(VV, eV) {
        const xV = this.settings.offset;
        let JV = xV[0],
          YV = xV[2];
        if ("target" === this.settings.offsetSpace) {
          const VV = this.targets.heading(eV),
            UV = Math.cos(VV),
            yV = Math.sin(VV);
          JV = xV[0] * UV + xV[2] * yV, YV = -xV[0] * yV + xV[2] * UV
        }
        this.goal[0] = VV[0] + JV, this.goal[1] = VV[1] + xV[1], this.goal[2] = VV[2] + YV
      }
    }
    class cV {
      constructor(VV, eV, xV, JV) {
        var YV, UV;
        this.settings = VV, this.cZ = eV, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = VV.keyframes.length > 0 ? new WV(VV.keyframes, null === (YV = VV.smooth) || void 0 === YV || YV, null !== (UV = VV.loop) && void 0 !== UV && UV) : null, this.base = (0, QV.g)(JV, (0, QV.l)()), this.resolveTarget = VV => xV.aimPoint(VV)
      }
      update(VV, eV, xV) {
        this.elapsedMs += VV;
        const JV = rV(this.settings, this.cZ);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, JV, this.base) : this.base.fov = JV, (0, QV.h)(this.base.position, xV.position), xV.fov = this.base.fov, eV.apply(this.base, xV)
      }
      continueFrom(VV) {
        VV instanceof cV && (0, JV.q)(VV.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = VV.elapsedMs, (0, QV.g)(VV.base, this.base))
      }
      reset(VV) {
        iV(this.base, VV), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function hV(VV, eV) {
      return (0, JV.s)(VV, eV)
    }
    class lV {
      constructor(VV, eV, xV) {
        var JV;
        this.settings = VV, this.cZ = eV, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const YV = null !== xV && xV.settings.mode === VV.mode,
          UV = YV ? xV.pose : eV.getDefaultPose();
        this.pose = (0, QV.g)(UV, (0, QV.l)()), this.lastGoodPose = (0, QV.g)(YV ? xV.lastGoodPose : UV, (0, QV.l)()), this.look = new EV(VV.playerLook), this.targets = null !== (JV = null === xV || void 0 === xV ? void 0 : xV.targets) && void 0 !== JV ? JV : new gV(eV);
        const yV = (0, QV.g)(UV, (0, QV.l)());
        YV && xV.look.unapply(yV, yV), this.mode = function(VV, eV, xV, JV) {
          switch (VV.mode) {
            case "fixed":
              return new aV(VV, eV, xV, JV);
            case "follow":
              return new oV(VV, eV, xV, JV);
            case "path":
              return new cV(VV, eV, xV, JV);
            case "frame":
              return new bV(VV, eV, xV, JV)
          }
        }(VV, eV, this.targets, yV), YV && (this.look.continueFrom(xV.look), this.mode.continueFrom(xV.mode))
      }
      update(VV, eV) {
        return this.look.update(VV, eV), this.mode.update(VV, this.look, this.pose), (0, QV.n)(this.pose) ? (0, QV.g)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, QV.g)(this.lastGoodPose, this.pose), this.mode.reset((0, QV.n)(this.lastGoodPose) ? this.lastGoodPose : this.cZ.getDefaultPose())), this.pose
      }
    }

    function LV(VV) {
      return [0, 0, VV[2], VV[3]]
    }
    class fV {
      constructor(VV) {
        this.cZ = VV, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new pV, this.shot = null, this.blend = null, this.mixed = (0, QV.l)(), this.output = (0, QV.l)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(VV) {
        const eV = (0, nV.e)(VV);
        if ((0, JV.q)(eV, this.pending ? this.pending.settings : this.settings)) return;
        const xV = hV(this.settings, eV);
        if (void 0 !== eV.transition && !xV) return this.pending = {
          settings: eV,
          shot: "default" === eV.mode ? null : new lV(eV, this.cZ, null)
        }, void this.fade.fadeOut(eV.transition);
        const YV = null !== this.pending;
        this.pending = null, !YV && xV || this.fade.fadeIn(JV.k.minTransitionFadeMs), this.show(eV, !1)
      }
      show(VV, eV) {
        var xV, YV;
        if ((0, JV.q)(VV, this.settings)) return;
        const yV = !eV && hV(this.settings, VV);
        this.settings = VV;
        const pV = null !== this.blend && this.blend.elapsedMs > 0,
          nV = (0, QV.g)(this.hasOutput ? this.output : this.cZ.getDefaultPose(), (0, QV.l)());
        if (this.shot = "default" === VV.mode ? null : new lV(VV, this.cZ, eV ? null : this.shot), yV) return;
        const wV = eV || !this.shot && !this.hasOutput ? 0 : null !== (xV = VV.blendInMs) && void 0 !== xV ? xV : 0;
        if (wV <= 0) return void(this.blend = null);
        const ZV = (0, UV.m)(null !== (YV = VV.blendEasing) && void 0 !== YV ? YV : "easeInOut");
        this.blend = {
          from: nV,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: wV,
          easing: pV ? LV(ZV) : ZV
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
      update(VV, eV) {
        const xV = Number.isFinite(VV) && VV > 0 ? VV : 0;
        if (this.fade.advance(xV) && null !== this.pending) {
          const {
            settings: VV
          } = this.pending;
          this.pending = null, this.show(VV, !0)
        }
        this.loadingPositions.length = 0;
        const JV = this.pending;
        if (null !== JV && void 0 !== JV && JV.shot) {
          const VV = "path" === JV.settings.mode ? 0 : xV;
          this.noteLoadingPosition(JV.shot.update(VV, QV.e).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const yV = this.shot ? this.shot.update(xV, eV) : this.cZ.getDefaultPose();
        this.shot && this.noteLoadingPosition(yV.position);
        const pV = this.blend;
        if (!pV) return this.writeOutput(yV);
        pV.elapsedMs += xV;
        const nV = Math.min(1, pV.elapsedMs / pV.durationMs);
        if (pV.headingDelta = Number.isFinite(pV.headingDelta) ? (0, YV.z)(pV.headingDelta, yV.heading - pV.from.heading) : (0, YV.y)(pV.from.heading, yV.heading), (0, QV.s)(pV.from, yV, pV.headingDelta, (0, UV.l)(nV, pV.easing), this.mixed), nV >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else pV.fromScripted && this.noteLoadingPosition(pV.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(VV) {
        if (VV.every(Number.isFinite)) {
          const eV = this.loadingPositions;
          eV.push((0, QV.h)(VV, this.loadingSlots[eV.length]))
        }
      }
      writeOutput(VV) {
        const eV = this.output;
        (0, QV.n)(VV) ? (0, QV.g)(VV, eV) : this.hasOutput || (0, QV.g)(this.cZ.getDefaultPose(), eV), eV.pitch = (0, YV.m)(eV.pitch);
        const xV = this.cZ.getDefaultFov(),
          UV = Number.isFinite(xV) && xV > 0 && xV < 180,
          yV = UV ? Math.min(JV.k.minFov, xV) : JV.k.minFov,
          pV = UV ? Math.max(JV.k.maxFov, xV) : JV.k.maxFov;
        return eV.fov = Number.isFinite(eV.fov) ? Math.min(pV, Math.max(yV, eV.fov)) : pV, this.hasOutput = !0, eV
      }
    }
  },
  40397: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      g: () => pV,
      h: () => yV,
      l: () => UV,
      n: () => nV,
      r: () => QV,
      s: () => wV
    });
    var JV = xV(40405);
    const YV = {
      uR: 0,
      eD: 0
    };

    function UV() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function yV(VV, eV) {
      return eV[0] = VV[0], eV[1] = VV[1], eV[2] = VV[2], eV
    }

    function pV(VV, eV) {
      return yV(VV.position, eV.position), eV.heading = VV.heading, eV.pitch = VV.pitch, eV.fov = VV.fov, eV
    }

    function QV(VV, eV) {
      return Array.isArray(VV) && VV.length === eV && VV.every(Number.isFinite)
    }

    function nV(VV) {
      return QV(VV.position, 3) && Number.isFinite(VV.heading) && Number.isFinite(VV.pitch) && Number.isFinite(VV.fov)
    }

    function wV(VV, eV, xV, YV, UV) {
      for (let JV = 0; JV < 3; JV++) UV.position[JV] = VV.position[JV] + (eV.position[JV] - VV.position[JV]) * YV;
      return UV.heading = (0, JV.w)(VV.heading + xV * YV), UV.pitch = VV.pitch + (eV.pitch - VV.pitch) * YV, UV.fov = VV.fov + (eV.fov - VV.fov) * YV, UV
    }
  },
  40427: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => AV,
      f: () => rV
    });
    var JV = xV(40425),
      YV = xV(40397);
    const UV = JV.g,
      yV = JV.l,
      pV = JV.i;

    function QV(VV, eV, xV, JV) {
      return Number.isFinite(VV) ? Math.min(xV, Math.max(eV, VV)) : JV
    }

    function nV(VV, eV, xV) {
      return void 0 !== VV && Number.isFinite(VV) ? Math.min(xV, Math.max(eV, VV)) : void 0
    }

    function wV(VV) {
      const eV = JV.k.maxCoordinate;
      return [Math.min(eV, Math.max(-eV, VV[0])), Math.min(eV, Math.max(-eV, VV[1])), Math.min(eV, Math.max(-eV, VV[2]))]
    }

    function ZV(VV) {
      return "string" === typeof VV ? VV : (0, YV.r)(VV, 3) ? wV(VV) : void 0
    }
    const vV = new RegExp(JV.o);

    function rV(VV) {
      return "string" === typeof VV && vV.test(VV)
    }

    function kV(VV) {
      const eV = [];
      if (!Array.isArray(VV)) return eV;
      for (const xV of VV.slice(0, JV.k.maxFrameTargets)) {
        const VV = ZV(xV);
        void 0 === VV || "string" === typeof VV && !rV(VV) || eV.push(VV)
      }
      return eV
    }

    function bV(VV) {
      if (!(0, YV.r)(VV, 3)) return;
      const eV = Math.max(Math.abs(VV[0]), Math.abs(VV[1]), Math.abs(VV[2])),
        xV = Math.hypot(VV[0] / eV, VV[1] / eV, VV[2] / eV);
      return 0 === eV || eV * xV < JV.k.minDirectionLength ? void 0 : [VV[0] / eV / xV, VV[1] / eV / xV, VV[2] / eV / xV]
    }

    function EV(VV) {
      if (void 0 !== VV) return "string" === typeof VV ? UV.includes(VV) ? VV : void 0 : (0, YV.r)(VV, 4) ? [QV(VV[0], 0, 1, 0), QV(VV[1], JV.k.minEasingY, JV.k.maxEasingY, 0), QV(VV[2], 0, 1, 1), QV(VV[3], JV.k.minEasingY, JV.k.maxEasingY, 1)] : "linear"
    }

    function BV(VV) {
      if (VV) return {
        maxYaw: QV(VV.maxYaw, 0, JV.k.maxPlayerLook, 0),
        maxPitch: QV(VV.maxPitch, 0, JV.k.maxPlayerLook, 0),
        returnMs: nV(VV.returnMs, 0, JV.k.maxReturnMs)
      }
    }
    const jV = new RegExp(JV.e);

    function qV(VV) {
      var eV;
      if ("object" !== typeof VV || null === VV) return;
      const xV = JV.k.maxTransitionMs,
        YV = JV.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof VV.colour && jV.test(VV.colour) ? VV.colour : JV.f,
        outMs: QV(VV.outMs, YV, xV, YV),
        holdMs: QV(null !== (eV = VV.holdMs) && void 0 !== eV ? eV : 0, 0, xV, 0),
        inMs: QV(VV.inMs, YV, xV, YV)
      }
    }

    function tV(VV) {
      return !0 === VV || void 0
    }

    function FV(VV) {
      if ("object" !== typeof VV || null === VV) return !1;
      const eV = VV.lookAt;
      return Number.isFinite(VV.timeMs) && (0, YV.r)(VV.position, 3) && (void 0 === eV || "string" === typeof eV || (0, YV.r)(eV, 3))
    }

    function TV(VV) {
      return {
        ...VV,
        timeMs: QV(VV.timeMs, 0, JV.k.maxPathMs, 0),
        position: wV(VV.position),
        lookAt: ZV(VV.lookAt),
        lookDirection: bV(VV.lookDirection),
        fov: nV(VV.fov, JV.k.minFov, JV.k.maxFov),
        easing: EV(VV.easing)
      }
    }

    function PV(VV) {
      const eV = [];
      if (!Array.isArray(VV)) return eV;
      for (const xV of VV.slice(0, JV.k.maxKeyframes)) {
        if (!FV(xV)) continue;
        const VV = TV(xV);
        (0 === eV.length || VV.timeMs > eV[eV.length - 1].timeMs) && eV.push(VV)
      }
      return eV
    }

    function AV(VV) {
      if ("object" !== typeof VV || null === VV) return {
        mode: "default"
      };
      const eV = {
          blendInMs: nV(VV.blendInMs, 0, JV.k.maxBlendInMs),
          blendEasing: EV(VV.blendEasing),
          transition: qV(VV.transition),
          letterbox: tV(VV.letterbox),
          hideHud: tV(VV.hideHud)
        },
        xV = {
          mode: "default",
          ...eV
        };
      if ("default" === VV.mode || "fixed" === VV.mode && !(0, YV.r)(VV.position, 3)) return xV;
      const UV = {
        ...eV,
        fov: nV(VV.fov, JV.k.minFov, JV.k.maxFov),
        playerFacing: (vV = VV.playerFacing, yV.includes(vV) ? vV : void 0),
        playerLook: BV(VV.playerLook)
      };
      var vV, rV, jV;
      switch (VV.mode) {
        case "fixed":
          return {
            ...VV, ...UV, position: wV(VV.position), lookAt: ZV(VV.lookAt), lookDirection: bV(VV.lookDirection)
          };
        case "follow":
          return {
            ...VV, ...UV, target: "string" === typeof VV.target ? VV.target : void 0, anchor: (jV = VV.anchor, pV.includes(jV) ? jV : void 0), lookAt: ZV(VV.lookAt), offset: (rV = VV.offset, Array.isArray(rV) ? [QV(rV[0], -JV.k.maxOffset, JV.k.maxOffset, 0), QV(rV[1], -JV.k.maxOffset, JV.k.maxOffset, 0), QV(rV[2], -JV.k.maxOffset, JV.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: bV(VV.lookDirection), smoothMs: nV(VV.smoothMs, 0, JV.k.maxSmoothMs)
          };
        case "path":
          return {
            ...VV, ...UV, keyframes: PV(VV.keyframes)
          };
        case "frame":
          return {
            ...VV, ...UV, targets: kV(VV.targets), viewHeading: nV(VV.viewHeading, -JV.k.maxFrameHeading, JV.k.maxFrameHeading), viewElevation: nV(VV.viewElevation, 0, JV.k.maxFrameElevation), padding: nV(VV.padding, 0, JV.k.maxFrameDistance), closestDistance: nV(VV.closestDistance, 0, JV.k.maxFrameDistance), furthestDistance: nV(VV.furthestDistance, 0, JV.k.maxFrameDistance), smoothMs: nV(VV.smoothMs, 0, JV.k.maxSmoothMs)
          };
        default:
          return xV
      }
    }
  },
  40455: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    const JV = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  39849: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV
    });
    var JV = xV(1252);

    function YV(VV) {
      const eV = /(\d*\.?\d+)px/.exec(VV);
      return eV ? Number(eV[1]) : null
    }

    function UV(VV) {
      return VV.split(/[\s,]+/).pop()
    }
    let yV = !1;
    const pV = {
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
      drawText: function(VV, eV, JV, pV, QV, nV) {
        if (QV <= 0 || nV <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: wV,
          fontVariant: ZV,
          fontWeight: vV,
          fontSize: rV,
          font: kV
        } = this, bV = [wV, ZV, vV, `${rV}px`, kV].filter(Boolean).join(" "), EV = [
          [vV, `${rV}px`, UV(kV)].filter(Boolean).join(" "), `${rV}px sans-serif`
        ], BV = VV.font, jV = function(VV, eV, xV) {
          for (const JV of eV) {
            VV.font = JV;
            const eV = YV(VV.font),
              yV = UV(JV);
            if (null !== eV && Math.abs(eV - xV) <= .5 && VV.font.toLowerCase().includes(yV.toLowerCase())) return JV
          }
          return null
        }(VV, [bV, ...EV], rV);
        jV !== bV && function(VV, eV, JV) {
          yV || (yV = !0, Promise.resolve().then((() => xV(1353))).then((xV => {
            let {
              lb: YV
            } = xV;
            YV(new Error("A canvas didn't take canvasTxt's font"), {
              font: VV,
              ZZ: eV,
              drawnWith: null !== JV && void 0 !== JV ? JV : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(bV, BV, jV);
        const qV = YV(VV.font);
        if (null === jV && null !== qV && qV > 0) {
          const xV = rV / qV;
          VV.save();
          try {
            return VV.scale(xV, xV), {
              height: this.drawLines(VV, eV, JV / xV, pV / xV, QV / xV, nV / xV, qV).height * xV
            }
          } finally {
            VV.restore()
          }
        }
        return this.drawLines(VV, eV, JV, pV, QV, nV, rV)
      },
      drawLines: function(VV, eV, xV, YV, UV, yV, pV) {
        const QV = xV + UV,
          nV = YV + yV;
        let wV, ZV = YV + yV / 2 + pV / 2;
        "right" === this.align ? (wV = QV, VV.textAlign = "right") : "left" === this.align ? (wV = xV, VV.textAlign = "left") : (wV = xV + UV / 2, VV.textAlign = "center");
        for (const JV of eV) {
          VV.measureText(JV).width >= UV && (eV = eV.replace(JV, ""))
        }
        eV = (0, JV.O)(eV);
        const vV = [],
          rV = eV.split("\n"),
          kV = this.justify ? VV.measureText("\u200a").width : 0;
        rV.forEach((eV => {
          let xV = VV.measureText(eV).width;
          if (xV <= UV) vV.push(eV);
          else {
            let JV = eV;
            const YV = UV;
            let yV, pV, QV;
            for (xV = VV.measureText(JV).width; xV > YV;) {
              for (yV = 0, pV = 0, QV = ""; pV < YV;) yV++, QV = JV.substr(0, yV), pV = VV.measureText(QV).width;
              yV--, QV = QV.substr(0, yV);
              const eV = yV;
              if (" " !== JV.substr(yV, 1)) {
                for (;
                  " " !== JV.substr(yV, 1) && 0 !== yV;) yV--;
                0 === yV && (yV = eV), QV = JV.substr(0, yV)
              }
              QV = this.justify ? this.justifyLine(VV, QV, kV, "\u200a", UV) : QV, JV = JV.substr(yV), xV = VV.measureText(JV).width, vV.push(QV)
            }
            xV > 0 && vV.push(JV)
          }
        }));
        const bV = this.lineHeight ? this.lineHeight : this.getTextHeight(VV, eV),
          EV = bV * (vV.length - 1),
          BV = EV / 2;
        let jV = YV;
        "top" === this.vAlign ? ZV = YV + pV : "bottom" === this.vAlign ? (ZV = nV - EV, jV = nV) : (jV = YV + yV / 2, ZV -= BV), vV.forEach((eV => {
          eV = eV.trim(), VV.fillText(eV, wV, ZV), ZV += bV
        })), this.debug && (VV.lineWidth = 3, VV.strokeStyle = "#00909e", VV.strokeRect(xV, YV, UV, yV), VV.lineWidth = 2, VV.strokeStyle = "#f6d743", VV.beginPath(), VV.moveTo(wV, YV), VV.lineTo(wV, nV), VV.stroke(), VV.strokeStyle = "#ff6363", VV.beginPath(), VV.moveTo(xV, jV), VV.lineTo(QV, jV), VV.stroke());
        return {
          height: EV + bV
        }
      },
      getTextHeight: function(VV, eV) {
        const xV = VV.textBaseline;
        VV.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: JV
        } = VV.measureText(eV);
        return VV.textBaseline = xV, JV
      },
      justifyLine: function(VV, eV, xV, JV, YV) {
        const UV = eV.trim(),
          yV = VV.measureText(UV).width,
          pV = UV.split(/\s+/).length - 1,
          QV = Math.floor((YV - yV) / xV);
        if (pV <= 0 || QV <= 0) return UV;
        const nV = Math.floor(QV / pV);
        let wV = QV - pV * nV,
          ZV = [];
        for (let vV = 0; vV < nV; vV++) ZV.push(JV);
        ZV = ZV.join("");
        return UV.replace(/\s+/g, (VV => {
          const eV = wV > 0 ? ZV + JV : ZV;
          return wV--, VV + eV
        }))
      }
    }
  },
  40335: (VV, eV, xV) => {
    function JV(VV, eV) {
      return eV.set(VV), eV
    }
    xV.d(eV, {
      c: () => JV
    })
  },
  39857: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => bV,
      f: () => kV,
      i: () => vV,
      m: () => wV,
      n: () => ZV
    });
    var JV = xV(4642),
      YV = xV(375);
    const UV = 1024,
      yV = 1536,
      pV = 2 * JV.j + 1,
      QV = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      nV = 1.5;

    function wV(VV, eV, xV) {
      if ("string" !== typeof VV) return eV;
      try {
        const xV = JSON.parse(VV);
        return xV && "object" === typeof xV ? xV : eV
      } catch (JV) {
        return void 0 !== xV && console.error(`Couldn't parse ${xV}`, JV), eV
      }
    }

    function ZV(VV) {
      return wV(VV, null, "a leaderboard's rows")
    }

    function vV(VV, eV) {
      var xV, JV;
      return null !== eV && void 0 !== eV ? eV : {
        status: null !== (xV = VV.status) && void 0 !== xV ? xV : "loading",
        entries: null !== (JV = VV.entries) && void 0 !== JV ? JV : []
      }
    }

    function rV(VV, eV) {
      return "number" === typeof VV && Number.isFinite(VV) && VV > 0 ? VV : eV
    }

    function kV(VV, eV) {
      const xV = rV(VV.size, 1);
      let JV = rV(VV.width, rV(2.5 * xV, 2.5)),
        YV = rV(VV.height, rV(3.75 * xV, 3.75));
      Number.isFinite(UV * YV / JV) && Number.isFinite(yV * JV / YV) || (JV = 2.5, YV = 3.75);
      const pV = YV / JV,
        QV = Math.max(1, Math.min(UV, eV / pV));
      return {
        width: JV,
        height: YV,
        layoutWidth: Math.max(UV, yV / pV),
        layoutHeight: Math.max(yV, UV * pV),
        pixelWidth: Math.round(QV),
        pixelHeight: Math.round(Math.max(1, Math.min(eV, QV * pV)))
      }
    }

    function bV(VV, eV, xV, yV, wV, ZV) {
      VV.setTransform(1, 0, 0, 1, 0, 0), VV.fillStyle = YV.E.defaultNameTagBackground, VV.fillRect(0, 0, eV, xV), VV.scale(eV / yV.layoutWidth, xV / yV.layoutHeight), VV.translate((yV.layoutWidth - UV) / 2, 0),
        function(VV, eV, xV, UV) {
          var yV, wV, ZV, vV;
          const {
            top: rV,
            around: kV,
            showPlayerText: bV,
            localPlayerDbId: jV
          } = xV, {
            whiteUiText: qV,
            grayUiText: tV,
            yellowUiText: FV
          } = YV.E;
          VV.textBaseline = "middle";
          const TV = function(eV, xV, JV, YV, UV, yV) {
              let pV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              VV.font = `bold ${YV}px 'Jetbrains Mono', monospace`, VV.fillStyle = UV, VV.textAlign = pV;
              let QV = eV.replace(/[\r\n\t]/g, " ");
              if (VV.measureText(QV).width > yV) {
                for (; QV.length > 0 && VV.measureText(`${QV}\u2026`).width > yV;) QV = QV.slice(0, -1);
                QV += "\u2026"
              }
              VV.fillText(QV, xV, JV)
            },
            PV = eV => {
              VV.fillStyle = qV, VV.globalAlpha = .15, VV.fillRect(24, eV, 976, 2), VV.globalAlpha = 1
            },
            AV = null === jV ? null : (0, YV.nc)(jV),
            NV = VV => null !== AV && VV.playerHash === AV,
            XV = EV(rV.entries, JV.k),
            MV = "ready" === rV.status && XV.length > 0,
            zV = null === kV ? [] : EV(kV.entries, pV),
            GV = XV.some(NV),
            WV = null === kV ? null : function(VV) {
              const eV = VV;
              if (!eV || !Number.isFinite(eV.rank) || !Number.isFinite(eV.tied) || !Number.isFinite(eV.total)) return null;
              return eV
            }(kV.standing),
            RV = zV.find(NV),
            gV = XV.find(NV),
            DV = null === WV || void 0 === RV ? null : {
              value: RV.value,
              rank: WV.rank
            },
            iV = BV(XV, void 0 === gV || gV.value === (null === DV || void 0 === DV ? void 0 : DV.value) ? DV : null),
            CV = BV(zV, DV),
            aV = (VV, eV) => {
              const xV = VV.findIndex(NV);
              return xV >= 0 ? eV[xV] : null
            },
            oV = null !== (yV = null !== (wV = null === WV || void 0 === WV ? void 0 : WV.rank) && void 0 !== wV ? wV : aV(zV, CV)) && void 0 !== yV ? yV : aV(XV, iV);
          VV.font = "bold 34px 'Jetbrains Mono', monospace";
          const cV = [...MV ? iV : [], ...GV ? [] : CV],
            hV = Math.min(280, Math.max(0, ...cV.map((eV => VV.measureText(QV.format(eV)).width)))),
            lV = hV <= 80,
            LV = lV ? 80 : 32 + hV,
            fV = lV ? 148 : LV + 28,
            mV = 660 - fV;
          TV(`TOP ${JV.k}  /  ALL TIME`, 24, 52, 28, tV, 976), TV(bV ? String(null !== (ZV = eV.title) && void 0 !== ZV ? ZV : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, qV, 976), TV("RANK", 32, 174, 28, tV, fV - 40), TV("PLAYER", fV, 174, 28, tV, mV), TV(bV ? String(null !== (vV = eV.scoreLabel) && void 0 !== vV ? vV : "Score").slice(0, 24) : "Score", 992, 174, 28, tV, 304, "right"), PV(202);
          const KV = (UV - 232) / (JV.k + nV + pV),
            HV = 208 + JV.k * KV,
            uV = HV + nV * KV,
            sV = (eV, xV, JV, YV) => {
              const UV = NV(eV);
              VV.fillStyle = UV ? FV : qV, VV.globalAlpha = UV ? .15 : YV ? .035 : 0, VV.fillRect(24, JV - KV / 2 + 1, 976, KV - 2), VV.globalAlpha = 1;
              const yV = UV ? FV : qV;
              TV(QV.format(xV), LV, JV, 34, yV, lV ? 80 : hV, lV ? "center" : "right"), TV(bV ? String(eV.name).slice(0, 64) : "Player", fV, JV, 34, yV, mV);
              const pV = QV.format(eV.value);
              TV(VV.measureText(pV).width > 304 ? eV.value.toExponential(6) : pV, 992, JV, 34, yV, 304, "right")
            };
          if (MV)
            for (const [JV, YV] of XV.entries()) sV(YV, iV[JV], 208 + (JV + .5) * KV, JV % 2 === 0);
          else {
            const VV = "error" === rV.status,
              eV = VV ? "Couldn't load leaderboard" : "ready" === rV.status ? "No scores yet" : "Loading leaderboard\u2026",
              xV = VV ? "Trying again shortly" : "ready" === rV.status ? "Be the first on the board!" : "Fetching the top players",
              JV = (208 + HV) / 2;
            TV(eV, 512, JV - 28, 40, VV ? YV.E.redUiText : qV, 960, "center"), TV(xV, 512, JV + 27, 30, tV, 960, "center")
          }
          const SV = HV + nV * KV / 2;
          if (null === oV) PV(SV);
          else {
            const eV = null === WV ? 0 : WV.tied - 1,
              xV = `YOUR RANK #${QV.format(oV)}${null===WV?"":` of ${QV.format(WV.total)}`}`;
            VV.font = "bold 36px 'Jetbrains Mono', monospace";
            const JV = Math.max(20, Math.min(36, Math.floor(34560 / VV.measureText(xV).width)));
            TV(xV, 512, SV - (eV > 0 ? 15 : 0), JV, FV, 960, "center"), eV > 0 && TV(`Tied with ${QV.format(eV)} other${1===eV?"":"s"}`, 512, SV + 24, 24, tV, 960, "center")
          }
          if (null === kV) return;
          const IV = uV + pV * KV / 2;
          if (GV) TV(`You're in the top ${JV.k}!`, 512, IV, 40, FV, 960, "center");
          else if (0 === zV.length) TV("You're not on this board yet", 512, IV, 34, tV, 960, "center");
          else
            for (const [JV, YV] of zV.entries()) sV(YV, CV[JV], uV + (JV + .5) * KV, JV % 2 === 0)
        }(VV, wV, ZV, yV.layoutHeight)
    }

    function EV(VV, eV) {
      return Array.isArray(VV) ? VV.slice(0, eV).filter((VV => VV && Number.isFinite(VV.rank) && Number.isFinite(VV.value))) : []
    }

    function BV(VV, eV) {
      const xV = [];
      let JV = !1;
      return VV.forEach(((YV, UV) => {
        if (null !== eV && YV.value === eV.value) return void xV.push(eV.rank);
        const yV = UV > 0 && YV.value === VV[UV - 1].value;
        yV || (JV = 0 === UV && 1 !== YV.rank), xV.push(yV && !JV ? xV[UV - 1] : YV.rank)
      })), xV
    }
  },
  40053: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      f: () => UV
    });
    const JV = 32;

    function YV(VV) {
      return Array.from(VV).length
    }

    function UV(VV) {
      const eV = [""];
      let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        YV = "";
      const UV = () => {
        eV.push(""), xV = 0, YV = ""
      };
      for (const yV of VV.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(yV)) UV();
        else if (/^\s+$/.test(yV)) YV += yV;
      else if (yV.length > 0) {
        const VV = Array.from(yV);
        xV > 0 && xV + YV.length + VV.length > JV && UV(), eV[eV.length - 1] += YV, xV += YV.length, YV = "";
        for (const YV of VV) xV >= JV && UV(), eV[eV.length - 1] += YV, xV++
      }
      return eV[eV.length - 1] += YV, eV
    }
  },
  40328: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV
    });
    var JV = xV(37793),
      YV = xV.n(JV);
    const UV = [1, 1, 1];

    function yV(VV) {
      if (!VV) return [...UV];
      try {
        const [eV, xV, JV] = YV()(VV).rgb().array();
        return [eV / 255, xV / 255, JV / 255]
      } catch (eV) {
        return console.warn(`Invalid groundArrowPath colour "${VV}":`, eV), [...UV]
      }
    }
  },
  40446: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => pV,
      d: () => nV,
      h: () => QV
    });
    var JV = xV(330),
      YV = xV(3239);
    const UV = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      yV = 512;

    function pV(VV) {
      var eV;
      const xV = Math.min(screen.width, screen.height) * (null !== (eV = (0, JV.b)()) && void 0 !== eV ? eV : (0, YV.n)());
      return Math.max(window.innerHeight * (0, YV.n)(), xV) / (0, YV.p)(VV)
    }

    function QV(VV, eV, xV) {
      return eV / (2 * Math.tan(xV / 2)) > yV ? VV : nV(VV)
    }

    function nV(VV) {
      return VV.map((VV => VV.replace(UV, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  40324: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV
    });
    var JV = xV(206);

    function YV(VV, eV, xV, YV, UV, yV, pV, QV, nV, wV, ZV) {
      const vV = JV.f.PZ,
        rV = UV - xV;
      let kV = rV * (yV - YV);
      wV.fill(0, 0, kV);
      for (let JV = Math.floor((QV - 1) / vV);
        (JV + 1) * vV > pV; JV--) {
        const bV = JV * vV;
        for (let EV = Math.floor(xV / vV); EV * vV < UV; EV++) {
          const BV = EV * vV,
            jV = Math.max(xV - BV, 0),
            qV = Math.min(UV - BV, vV);
          for (let UV = Math.floor(YV / vV); UV * vV < yV; UV++) {
            const tV = VV(EV, JV, UV);
            if (!tV) continue;
            const FV = UV * vV,
              TV = Math.max(YV - FV, 0),
              PV = Math.min(yV - FV, vV),
              AV = tV.Yk,
              NV = tV.Ur,
              XV = NV.data;
            for (let VV = Math.min(QV - 1 - bV, vV - 1); VV >= Math.max(pV - bV, 0); VV--) {
              const JV = AV[VV],
                UV = JV === eV;
              if (UV || 0 !== nV[JV]) {
                for (let eV = jV; eV < qV; eV++)
                  for (let yV = TV; yV < PV; yV++) {
                    const pV = (FV + yV - YV) * rV + BV + eV - xV;
                    if (0 !== wV[pV]) continue;
                    const QV = UV ? XV[NV.index(eV, VV, yV)] : JV;
                    0 !== nV[QV] && (wV[pV] = QV, ZV[pV] = bV + VV, kV--)
                  }
                if (0 === kV) return
              }
            }
          }
        }
      }
    }
  },
  34874: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      g: () => pV,
      i: () => yV,
      k: () => YV,
      m: () => JV
    });
    const JV = {
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
      YV = "/textures/dayNight/sun.png",
      UV = "/textures/dayNight/moon.png",
      yV = "/textures/dayNight/stars",
      pV = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  40425: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => ZV,
      f: () => vV,
      g: () => JV,
      i: () => YV,
      k: () => nV,
      l: () => UV,
      o: () => wV,
      q: () => QV,
      s: () => pV
    });
    const JV = ["linear", "easeIn", "easeOut", "easeInOut"],
      YV = ["feet", "eye"],
      UV = ["movement", "camera", "cursor"],
      yV = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function pV(VV, eV) {
      return QV(VV, eV, yV)
    }

    function QV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (VV === eV || Number.isNaN(VV) && Number.isNaN(eV)) return !0;
      if ("object" !== typeof VV || "object" !== typeof eV || null === VV || null === eV || Array.isArray(VV) !== Array.isArray(eV)) return !1;
      const JV = VV,
        YV = eV;
      for (const UV of new Set([...Object.keys(JV), ...Object.keys(YV)]))
        if (!xV.includes(UV) && !QV(JV[UV], YV[UV])) return !1;
      return !0
    }
    const nV = {
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
      wV = "^-[1-9][0-9]*$",
      ZV = "^#[0-9a-fA-F]{6}$",
      vV = "#000000"
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);