export const id = 195;
export const ids = [195];
export const modules = {
  38475: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY
    });
    class FY {
      constructor(YY, rY) {
        this.read = YY, this.apply = rY, this.release = null
      }
      turn(YY, rY) {
        const DY = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: rY,
          forcedCameraDirection: [YY[0], YY[1], YY[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), rY + 100),
          transitionMs: DY
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(YY) {
        null !== this.release && (clearTimeout(this.release.timer), YY && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38011: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      f: () => AY
    });
    const FY = new Map;

    function AY(YY, rY) {
      FY.set(YY, rY)
    }

    function IY(YY) {
      return YY ? FY.get(YY) : void 0
    }
  },
  38902: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY
    });
    var FY = DY(37599);

    function AY(YY, rY, DY) {
      var AY, IY, RY, OY, gY, aY, vY;
      const uY = (0, FY.e)(YY, rY, DY[0], DY[1], DY[2]),
        sY = uY ? null !== (AY = uY.textCell) && void 0 !== AY ? AY : uY.rect.anchor : DY,
        iY = rY(sY[0], sY[1], sY[2]);
      return {
        pos: [DY[0], DY[1], DY[2]],
        noticeboardSpan: uY && {
          width: uY.rect.width,
          height: uY.rect.height
        },
        text: null !== (IY = null === iY || void 0 === iY || null === (RY = iY.persisted) || void 0 === RY || null === (OY = RY.shared) || void 0 === OY ? void 0 : OY.text) && void 0 !== IY ? IY : "",
        textSize: null !== (gY = null === iY || void 0 === iY || null === (aY = iY.persisted) || void 0 === aY || null === (vY = aY.shared) || void 0 === vY ? void 0 : vY.textSize) && void 0 !== gY ? gY : null
      }
    }
  },
  37886: (YY, rY, DY) => {
    function FY(YY) {
      switch (YY.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    DY.d(rY, {
      b: () => AY,
      d: () => IY,
      f: () => FY
    });
    const AY = 4,
      IY = 3
  },
  38495: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      e: () => IY
    });
    var FY = DY(341);
    const AY = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class IY {
      constructor(YY) {
        this.importGame = YY, this.loads = new Map, this.loaded = new Map
      }
      load(YY) {
        const rY = (0, FY.Pb)(YY);
        if (!AY.has(rY)) return Promise.resolve(void 0);
        let DY = this.loads.get(rY);
        return DY || (DY = this.importGame(rY).then((YY => {
          const DY = YY.default;
          if ("function" !== typeof DY) throw new Error(`${rY}'s client code has no default-exported factory`);
          return this.loaded.set(rY, DY), DY
        })).catch((YY => {
          throw this.loads.delete(rY), YY
        })), this.loads.set(rY, DY)), DY
      }
      loadedFactory(YY) {
        const rY = (0, FY.Pb)(YY);
        if (!AY.has(rY)) return;
        const DY = this.loaded.get(rY);
        if (!DY) throw new Error(`${rY}'s client code started before it loaded`);
        return DY
      }
    }
  },
  38907: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY
    });
    var FY = DY(8908),
      AY = DY(8770),
      IY = DY(2864);

    function RY(YY) {
      if (YY === FY.d) return 0;
      const rY = (0, IY.b)(YY);
      if (void 0 !== rY && rY <= AY.MAX_BLOCK_ID) return rY;
      const DY = (0, IY.b)(YY.split("|")[0]);
      if (void 0 !== DY && DY <= AY.MAX_BLOCK_ID && (0, AY.rootMetaDescOf)(DY) === YY) return DY;
      throw new Error(`Invalid block name. You sent ${YY}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38547: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY
    });
    var FY = DY(19);
    class AY {
      constructor(YY) {
        this.screen = YY, this.hidesHud = !1
      }
      show(YY, rY) {
        this.screen.setFade(YY.colour, YY.alpha), this.screen.setLetterbox(!0 === rY.letterbox, YY.alpha < 1), this.setHudHidden(!0 === rY.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(YY) {
        this.hidesHud !== YY && (this.hidesHud = YY, FY.b.set({
          isUiHiddenByCamera: YY
        }))
      }
    }
  },
  38513: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY,
      h: () => sY,
      i: () => uY,
      k: () => RY,
      m: () => yY,
      q: () => gY,
      r: () => QY,
      t: () => aY,
      v: () => OY,
      y: () => vY
    });
    const FY = Math.PI / 2 - .001,
      AY = 2 * Math.PI,
      IY = 1e-9;

    function RY(YY, rY) {
      rY.heading = YY.heading, rY.pitch = YY.pitch
    }

    function OY(YY, rY) {
      const DY = rY - YY;
      return DY - AY * Math.floor((DY + Math.PI) / AY)
    }

    function gY(YY, rY, DY) {
      return YY + OY(YY, rY) * DY
    }

    function aY(YY) {
      if (!Number.isFinite(YY)) return YY;
      const rY = YY - AY * Math.floor(YY / AY);
      return rY < AY ? rY : 0
    }

    function vY(YY, rY) {
      return YY + OY(YY, rY)
    }

    function uY(YY) {
      return Math.max(-FY, Math.min(FY, YY))
    }

    function sY(YY, rY, DY) {
      const FY = Math.cos(rY);
      return DY[0] = FY * Math.sin(YY), DY[1] = -Math.sin(rY), DY[2] = FY * Math.cos(YY), DY
    }

    function iY(YY, rY, DY, FY) {
      const AY = Math.sqrt(YY * YY + DY * DY);
      return AY < IY && Math.abs(rY) < IY || (AY >= IY && (FY.heading = Math.atan2(YY, DY)), FY.pitch = uY(Math.atan2(-rY, AY) + 0)), FY
    }

    function yY(YY, rY) {
      return iY(YY[0], YY[1], YY[2], rY)
    }

    function QY(YY, rY, DY) {
      return iY(rY[0] - YY[0], rY[1] - YY[1], rY[2] - YY[2], DY)
    }
  },
  38539: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      d: () => AY
    });
    var FY = DY(38513);

    function AY(YY) {
      var rY;
      const DY = "default" === YY.mode ? "movement" : null !== (rY = YY.playerFacing) && void 0 !== rY ? rY : "movement";
      return "cursor" === DY ? {
        facing: DY,
        mouseTurns: null
      } : {
        facing: DY,
        mouseTurns: "default" !== YY.mode && void 0 !== YY.playerLook ? "look" : "view"
      }
    }

    function IY(YY, rY, DY, AY, IY, RY) {
      return RY.Tl = 0, RY.Bl = 0, RY.pointedAt = void 0, void 0 !== AY ? IY ? (RY.pointedAt = AY, YY) : (0, FY.t)(AY.heading) : IY ? (RY.Tl = rY, RY.Bl = DY, YY) : (0, FY.t)(YY + rY)
    }
  },
  38524: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => XY
    });
    var FY = DY(38533),
      AY = DY(38513),
      IY = DY(36359);

    function RY(YY, rY, DY, FY) {
      if (!(FY > 0)) return rY;
      const AY = rY > YY ? Math.min(rY, YY + DY / FY) : Math.max(rY, YY - DY / FY);
      return Math.abs(rY - AY) < 1e-9 ? rY : AY
    }
    class OY {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: FY.d,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(YY) {
        !this.isGoingOut() && this.sinceTurnMs < FY.j.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: YY
        } : (this.waiting = null, this.startOut(YY))
      }
      fadeIn(YY) {
        this.isGoingOut() ? this.sinceTurnMs < FY.j.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: YY
        } : (this.waiting = null, this.startIn(YY)) : this.waiting = null
      }
      advance(YY) {
        const rY = this.waiting;
        if (null === rY) return this.step(YY);
        const DY = FY.j.minFadeTurnMs - this.sinceTurnMs;
        if (DY > YY) return this.step(YY);
        const AY = this.step(DY);
        return this.waiting = null, "out" === rY.turn ? this.startOut(rY.transition) : this.startIn(rY.minMs), this.step(YY - DY) || AY
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(YY) {
        ("in" === this.phase || null === this.phase && this.clearMs < FY.j.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = YY.colour), this.outMs = YY.outMs, this.holdMs = YY.holdMs, this.inMs = YY.inMs
      }
      startIn(YY) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(YY, this.inMs)
      }
      step(YY) {
        const rY = this.screen;
        this.sinceTurnMs += YY, null === this.phase && (this.clearMs += YY);
        let DY = !1,
          AY = YY;
        if ("out" === this.phase) {
          const FY = (1 - rY.alpha) * this.outMs;
          if (rY.alpha = RY(rY.alpha, 1, YY, this.outMs), rY.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, AY = Math.max(0, YY - FY), DY = !0
        }
        let IY = YY;
        if ("hold" === this.phase) {
          this.heldMs += AY;
          const YY = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - FY.j.minFadeTurnMs);
          if (YY < 0 || DY) return DY;
          this.phase = "in", this.sinceTurnMs = YY, IY = YY
        }
        return "in" === this.phase && (rY.alpha = RY(rY.alpha, 0, IY, this.inMs), rY.alpha <= 0 && (this.phase = null, this.clearMs = 0)), DY
      }
    }
    var gY = DY(38504),
      aY = DY(38536),
      vY = DY(1774),
      uY = DY(35999);

    function sY(YY, rY) {
      for (let DY = 0; DY < rY.length; DY++) rY[DY] = YY[DY]
    }

    function iY(YY, rY) {
      var DY;
      return null !== (DY = YY.fov) && void 0 !== DY ? DY : rY.getDefaultFov()
    }

    function yY(YY, rY, DY, FY, AY) {
      const IY = 2 / FY,
        RY = Math.exp(-IY * AY);
      for (let OY = 0; OY < YY.length; OY++) {
        const FY = YY[OY] - DY[OY],
          gY = (rY[OY] + IY * FY) * AY;
        YY[OY] = DY[OY] + (FY + gY) * RY, rY[OY] = (rY[OY] - IY * gY) * RY
      }
    }
    class QY {
      constructor(YY, rY, DY, FY) {
        var IY, RY, OY, gY, aY;
        this.settings = YY, this.Mu = rY, this.targets = DY, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.ci = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, AY.t)((0, vY.q)(null !== (IY = YY.viewHeading) && void 0 !== IY ? IY : 0)),
          pitch: (0, AY.i)((0, vY.q)(null !== (RY = YY.viewElevation) && void 0 !== RY ? RY : 45))
        }, this.closestDistance = null !== (OY = YY.closestDistance) && void 0 !== OY ? OY : Math.min(6, null !== (gY = YY.furthestDistance) && void 0 !== gY ? gY : 1 / 0), this.furthestDistance = null !== (aY = YY.furthestDistance) && void 0 !== aY ? aY : Math.max(64, this.closestDistance);
        const uY = (0, AY.h)(this.base.heading, this.base.pitch, this.forward),
          sY = FY.position,
          iY = this.closestDistance;
        this.goal = [sY[0] + uY[0] * iY, sY[1] + uY[1] * iY, sY[2] + uY[2] * iY, iY, this.base.heading, this.base.pitch]
      }
      update(YY, rY, DY) {
        var FY, IY;
        this.placeGoal(null !== (FY = this.settings.fov) && void 0 !== FY ? FY : this.Mu.getBaseFov()), this.goal[4] = (0, AY.y)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const RY = null !== (IY = this.settings.smoothMs) && void 0 !== IY ? IY : 400;
        !this.started || RY < 1 ? (sY(this.goal, this.smoothed), this.ci.fill(0), this.started = !0) : yY(this.smoothed, this.ci, this.goal, RY, YY), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, AY.i)(this.smoothed[5]), rY.apply(this.angles, DY);
        const OY = (0, AY.h)(DY.heading, DY.pitch, this.forward);
        for (let AY = 0; AY < 3; AY++) DY.position[AY] = this.smoothed[AY] - OY[AY] * this.smoothed[3];
        DY.fov = iY(this.settings, this.Mu)
      }
      continueFrom(YY) {
        YY instanceof QY && (sY(YY.goal, this.goal), sY(YY.smoothed, this.smoothed), sY(YY.ci, this.ci), this.framedTargets = YY.framedTargets, this.started = YY.started)
      }
      reset() {
        this.ci.fill(0), this.started = !1
      }
      placeGoal(YY) {
        var rY;
        let DY = 0;
        for (const vY of this.settings.targets) {
          const YY = this.targets.currentAimPoint(vY);
          YY && (0, gY.i)(YY, this.pointAt(DY++))
        }
        if (DY > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const YY = this.targets.aimPoint(this.Mu.localPlayerId);
          YY && (0, gY.i)(YY, this.pointAt(DY++))
        }
        const FY = this.goal;
        if (0 === DY) return void(FY[3] = this.withinDistances(FY[3]));
        for (let gY = 0; gY < 3; gY++) {
          let YY = 1 / 0,
            rY = -1 / 0;
          for (let FY = 0; FY < DY; FY++) YY = Math.min(YY, this.points[FY][gY]), rY = Math.max(rY, this.points[FY][gY]);
          FY[gY] = (YY + rY) / 2
        }
        let AY = 0;
        for (let gY = 0; gY < DY; gY++) {
          const YY = this.points[gY];
          AY = Math.max(AY, Math.hypot(YY[0] - FY[0], YY[1] - FY[1], YY[2] - FY[2]))
        }
        const IY = Math.tan((0, vY.q)(YY) / 2),
          RY = Math.atan(IY * (!0 === this.settings.letterbox ? uY.d : 1)),
          OY = Math.atan(IY * this.Mu.getAspectRatio()),
          aY = (AY + (null !== (rY = this.settings.padding) && void 0 !== rY ? rY : 2)) / Math.sin(Math.min(RY, OY));
        FY[3] = this.withinDistances(aY)
      }
      withinDistances(YY) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, YY))
      }
      pointAt(YY) {
        return YY === this.points.length && this.points.push([0, 0, 0]), this.points[YY]
      }
    }
    class oY {
      constructor(YY) {
        this.limits = YY, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(YY) {
        this.limits && (this.yawOffset = YY.yawOffset, this.pitchOffset = YY.pitchOffset, this.idleMs = YY.idleMs)
      }
      update(YY, rY) {
        const DY = this.limits;
        if (!DY) return;
        const FY = Number.isFinite(rY.Tl) ? rY.Tl : 0,
          AY = Number.isFinite(rY.Bl) ? rY.Bl : 0;
        if (rY.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: rY.pointedAt.heading,
          pitch: rY.pointedAt.pitch
        };
        else if (0 !== FY || 0 !== AY) this.idleMs = 0, this.yawOffset += FY, this.pitchOffset += AY;
        else {
          const rY = Math.max(0, this.idleMs + YY - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += YY, void 0 !== DY.returnMs && rY > 0) {
            const YY = DY.returnMs > 0 ? Math.exp(-3 * rY / DY.returnMs) : 0;
            this.yawOffset *= YY, this.pitchOffset *= YY
          }
        }
        this.clampOffsets(DY)
      }
      clampOffsets(YY) {
        if (YY.maxYaw >= 180) this.yawOffset = (0, AY.v)(0, this.yawOffset);
        else {
          const rY = (0, vY.q)(YY.maxYaw);
          this.yawOffset = Math.max(-rY, Math.min(rY, this.yawOffset))
        }
        const rY = (0, vY.q)(YY.maxPitch);
        this.pitchOffset = Math.max(-rY, Math.min(rY, this.pitchOffset))
      }
      apply(YY, rY) {
        this.pointedAt && this.limits && (this.yawOffset = (0, AY.v)(YY.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - YY.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const DY = (0, AY.i)(YY.pitch + this.pitchOffset);
        this.pitchOffset = DY - YY.pitch, rY.heading = (0, AY.t)(YY.heading + this.yawOffset), rY.pitch = DY
      }
      unapply(YY, rY) {
        rY.heading = (0, AY.t)(YY.heading - this.yawOffset), rY.pitch = (0, AY.i)(YY.pitch - this.pitchOffset)
      }
    }
    const WY = 1e-6;

    function EY(YY) {
      return Math.sqrt(YY[0] * YY[0] + YY[1] * YY[1] + YY[2] * YY[2])
    }

    function mY(YY, rY, DY, FY, AY) {
      const IY = AY * AY,
        RY = IY * AY;
      return (2 * RY - 3 * IY + 1) * YY + (RY - 2 * IY + AY) * rY + (-2 * RY + 3 * IY) * DY + (RY - IY) * FY
    }

    function VY(YY, rY, DY, FY, AY) {
      const IY = AY * AY;
      return (6 * IY - 6 * AY) * YY + (3 * IY - 4 * AY + 1) * rY + (-6 * IY + 6 * AY) * DY + (3 * IY - 2 * AY) * FY
    }

    function SY(YY, rY) {
      const DY = rY[0] - YY[0],
        FY = rY[1] - YY[1],
        AY = rY[2] - YY[2];
      return Math.sqrt(DY * DY + FY * FY + AY * AY)
    }

    function lY(YY, rY, DY, FY, AY, IY) {
      for (let RY = 0; RY < 3; RY++) IY[RY] = AY ? YY[RY] * FY : DY[RY] - rY[RY];
      return AY && function(YY, rY) {
        const DY = EY(YY);
        if (DY > rY) {
          const FY = rY / DY;
          YY[0] *= FY, YY[1] *= FY, YY[2] *= FY
        }
      }(IY, 3 * SY(rY, DY)), IY
    }

    function TY(YY, rY, DY, FY) {
      for (let AY = 0; AY < 3; AY++) FY[AY] = 6 * (rY[AY] - YY[AY]) - 2 * DY[AY];
      if (EY(FY) < WY)
        for (let AY = 0; AY < 3; AY++) FY[AY] = rY[AY] - YY[AY];
      return FY
    }

    function eY(YY, rY) {
      return [2 * rY[0] - YY[0], 2 * rY[1] - YY[1], 2 * rY[2] - YY[2]]
    }

    function NY(YY, rY, DY, FY, AY, IY, RY) {
      if (!IY && !RY) return 0;
      const OY = IY ? YY : 2 * rY - DY,
        gY = RY ? DY : 2 * rY - YY,
        aY = IY ? FY : AY,
        vY = RY ? AY : FY,
        uY = (rY - OY) / aY,
        sY = (gY - rY) / vY;
      if (uY * sY <= 0) return 0;
      const iY = (gY - OY) / (aY + vY),
        yY = 3 * Math.min(Math.abs(uY), Math.abs(sY));
      return Math.max(-yY, Math.min(yY, iY))
    }

    function BY(YY, rY, DY, FY, AY, IY, RY) {
      const {
        u: OY,
        segmentMs: gY
      } = YY;
      if (!YY.curved) return DY + (FY - DY) * OY;
      return mY(DY, NY(rY, DY, FY, YY.beforeMs, gY, IY, !0) * gY, FY, NY(DY, FY, AY, gY, YY.afterMs, !0, RY) * gY, OY)
    }

    function cY(YY) {
      return Math.abs(YY.pitch) >= AY.e
    }
    class KY {
      constructor(YY, rY, DY, FY, AY) {
        this.nodes = YY, this.prevNodes = DY, this.nextNodes = FY, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = YY.map(((YY, DY) => this.nodeTangent(rY, AY, DY)))
      }
      sample(YY, rY, DY) {
        const {
          index: FY,
          toIndex: IY,
          segmentMs: RY,
          curved: OY
        } = YY, gY = this.fromAngles, aY = this.toAngles, vY = this.nodeAngles(FY, DY.position, rY, gY), uY = this.nodeAngles(IY, DY.position, rY, aY);
        if (RY > 0 && "aim" !== vY && "aim" !== uY && this.liveTangent(YY, gY)) return DY.heading = (0, AY.t)(gY.heading), void(DY.pitch = gY.pitch);
        if ("none" === vY && "none" === uY) return;
        !OY && RY > 0 && ("tangent" === vY && this.liveTangent(YY, gY), "tangent" === uY && this.liveTangent(YY, aY)), "none" === vY ? (0, AY.k)(aY, gY) : "none" === uY && (0, AY.k)(gY, aY);
        const sY = OY && YY.beforeIndex >= 0 && "none" !== this.nodeAngles(YY.beforeIndex, DY.position, rY, this.beforeAngles),
          iY = OY && YY.afterIndex >= 0 && "none" !== this.nodeAngles(YY.afterIndex, DY.position, rY, this.afterAngles),
          yY = (0, AY.y)(gY.heading, aY.heading),
          QY = BY(YY, sY ? (0, AY.y)(gY.heading, this.beforeAngles.heading) : 0, gY.heading, yY, iY ? (0, AY.y)(yY, this.afterAngles.heading) : 0, sY, iY);
        DY.heading = (0, AY.t)(QY), DY.pitch = (0, AY.i)(BY(YY, this.beforeAngles.pitch, gY.pitch, aY.pitch, this.afterAngles.pitch, sY, iY))
      }
      nodeAngles(YY, rY, DY, FY) {
        const AY = this.rawNodeAngles(YY, rY, DY, FY);
        return "none" !== AY && cY(FY) && !this.borrowHeading(this.prevNodes[YY], rY, DY, FY) && this.borrowHeading(this.nextNodes[YY], rY, DY, FY), AY
      }
      borrowHeading(YY, rY, DY, FY) {
        const AY = this.borrowedAngles;
        return !(YY < 0 || "none" === this.rawNodeAngles(YY, rY, DY, AY) || cY(AY)) && (FY.heading = AY.heading, !0)
      }
      rawNodeAngles(YY, rY, DY, FY) {
        const IY = this.nodes[YY].keyframe;
        if (IY.lookDirection) return (0, AY.m)(IY.lookDirection, FY), "aim";
        if (void 0 !== IY.lookAt) {
          const YY = DY(IY.lookAt);
          if (YY) return (0, AY.r)(rY, YY, FY), "aim"
        }
        const RY = this.tangents[YY];
        return RY ? ((0, AY.k)(RY, FY), "tangent") : "none"
      }
      liveTangent(YY, rY) {
        const DY = this.nodes[YY.index].position,
          FY = this.nodes[YY.toIndex].position,
          IY = this.derivative;
        for (let AY = 0; AY < 3; AY++) IY[AY] = VY(DY[AY], YY.fromTangent[AY], FY[AY], YY.toTangent[AY], YY.u);
        return EY(IY) > 1e-9 ? ((0, AY.m)(IY, rY), !0) : !(SY(DY, FY) < WY) && ((0, AY.m)(TY(DY, FY, YY.u < .5 ? YY.toTangent : YY.fromTangent, IY), rY), !0)
      }
      nodeTangent(YY, rY, DY) {
        var FY;
        const IY = YY[DY];
        if (EY(IY) > 1e-9) return (0, AY.m)(IY, {
          heading: 0,
          pitch: 0
        });
        const RY = null !== (FY = this.restDirectionTo(DY, DY + 1, YY, rY)) && void 0 !== FY ? FY : this.restDirectionTo(DY, DY - 1, YY, rY);
        return RY ? (0, AY.m)(RY, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(YY, rY, DY, FY) {
        const AY = this.nodes[YY],
          IY = this.nodes[rY];
        if (!IY || SY(AY.position, IY.position) < WY) return null;
        const [RY, OY] = rY > YY ? [AY, IY] : [IY, AY], gY = lY(DY[rY], RY.position, OY.position, OY.timeMs - RY.timeMs, FY, [0, 0, 0]);
        return TY(RY.position, OY.position, gY, [0, 0, 0])
      }
    }

    function HY(YY, rY) {
      const DY = YY.lookDirection || rY.lookDirection ? function(YY, rY) {
        if (!YY || !rY) return YY === rY;
        const DY = EY(YY),
          FY = EY(rY);
        return Math.hypot(YY[0] / DY - rY[0] / FY, YY[1] / DY - rY[1] / FY, YY[2] / DY - rY[2] / FY) < WY
      }(YY.lookDirection, rY.lookDirection) : (FY = YY.lookAt, AY = rY.lookAt, "object" !== typeof FY || "object" !== typeof AY ? FY === AY : SY(FY, AY) < WY);
      var FY, AY;
      return SY(YY.position, rY.position) < WY && YY.fov === rY.fov && DY
    }
    class zY {
      constructor(YY, rY, DY) {
        if (this.smooth = rY, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === YY.length) throw new Error("A camera path needs at least one keyframe");
        for (let IY = 1; IY < YY.length; IY++)
          if (!(YY[IY].timeMs > YY[IY - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = YY.map((YY => {
          var rY;
          return {
            timeMs: YY.timeMs,
            position: [...YY.position],
            keyframe: YY,
            easing: (0, IY.k)(null !== (rY = YY.easing) && void 0 !== rY ? rY : "linear")
          }
        }));
        const FY = this.nodes[0],
          AY = this.nodes[this.nodes.length - 1],
          RY = DY && this.nodes.length > 1;
        RY && !HY(FY.keyframe, AY.keyframe) && this.nodes.push({
          ...FY,
          timeMs: AY.timeMs + (AY.timeMs - FY.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = RY ? this.nodes[this.nodes.length - 1].timeMs - FY.timeMs : 0, this.prevNodes = this.nodes.map(((YY, rY) => this.neighbour(rY, -1))), this.nextNodes = this.nodes.map(((YY, rY) => this.neighbour(rY, 1))), this.prevGaps = this.prevNodes.map(((YY, rY) => YY >= 0 ? this.gapMs(rY, -1) : 0)), this.nextGaps = this.nextNodes.map(((YY, rY) => YY >= 0 ? this.gapMs(rY, 1) : 0)), this.velocities = this.nodes.map(((YY, rY) => {
          const DY = this.prevNodes[rY],
            FY = this.nextNodes[rY];
          return function(YY, rY, DY, FY, AY, IY) {
            if (IY[0] = 0, IY[1] = 0, IY[2] = 0, !YY && !DY) return IY;
            const RY = null !== YY && void 0 !== YY ? YY : eY(null !== DY && void 0 !== DY ? DY : rY, rY),
              OY = null !== DY && void 0 !== DY ? DY : eY(null !== YY && void 0 !== YY ? YY : rY, rY),
              gY = YY ? FY : AY,
              aY = DY ? AY : FY,
              vY = SY(RY, rY),
              uY = SY(rY, OY);
            if (vY < WY || uY < WY) return IY;
            const sY = Math.sqrt(vY),
              iY = Math.sqrt(uY),
              yY = (sY + iY) / (gY + aY);
            for (let QY = 0; QY < 3; QY++) {
              const YY = (rY[QY] - RY[QY]) / sY - (OY[QY] - RY[QY]) / (sY + iY) + (OY[QY] - rY[QY]) / iY;
              IY[QY] = YY * yY
            }
            return IY
          }(DY >= 0 ? this.nodes[DY].position : null, YY.position, FY >= 0 ? this.nodes[FY].position : null, this.prevGaps[rY], this.nextGaps[rY], [0, 0, 0])
        })), this.aim = new KY(this.nodes, this.velocities, this.prevNodes, this.nextNodes, rY)
      }
      sample(YY, rY, DY, FY) {
        const AY = this.findSegment(this.pathTime(YY));
        this.samplePosition(AY, FY.position), this.aim.sample(AY, rY, FY);
        const {
          beforeIndex: IY,
          afterIndex: RY
        } = AY;
        FY.fov = BY(AY, IY >= 0 ? this.fovAt(IY, DY) : 0, this.fovAt(AY.index, DY), this.fovAt(AY.toIndex, DY), RY >= 0 ? this.fovAt(RY, DY) : 0, IY >= 0, RY >= 0)
      }
      pathTime(YY) {
        const rY = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || YY <= rY) return YY;
        const DY = YY - rY;
        return rY + DY - this.loopMs * Math.floor(DY / this.loopMs)
      }
      findSegment(YY) {
        const rY = this.nodes,
          DY = this.segment;
        let FY = DY.index;
        for (YY < rY[FY].timeMs && (FY = 0); FY < rY.length - 2 && rY[FY + 1].timeMs <= YY;) FY++;
        const AY = Math.min(FY + 1, rY.length - 1),
          RY = rY[AY].timeMs - rY[FY].timeMs;
        return DY.index = FY, DY.toIndex = AY, DY.segmentMs = RY, DY.u = RY > 0 ? (0, IY.i)((YY - rY[FY].timeMs) / RY, rY[FY].easing) : 1, DY.curved = this.smooth && RY > 0, DY.beforeIndex = this.prevNodes[FY], DY.afterIndex = this.nextNodes[AY], DY.beforeMs = this.prevGaps[FY], DY.afterMs = this.nextGaps[AY], DY
      }
      samplePosition(YY, rY) {
        const {
          fromTangent: DY,
          toTangent: FY,
          curved: AY
        } = YY, IY = this.nodes[YY.index].position, RY = this.nodes[YY.toIndex].position;
        lY(this.velocities[YY.index], IY, RY, YY.segmentMs, AY, DY), lY(this.velocities[YY.toIndex], IY, RY, YY.segmentMs, AY, FY);
        const OY = YY.u;
        for (let gY = 0; gY < 3; gY++) rY[gY] = AY ? mY(IY[gY], DY[gY], RY[gY], FY[gY], OY) : IY[gY] + (RY[gY] - IY[gY]) * OY
      }
      fovAt(YY, rY) {
        var DY;
        return null !== (DY = this.nodes[YY].keyframe.fov) && void 0 !== DY ? DY : rY
      }
      neighbour(YY, rY) {
        const DY = this.nodes.length - 1,
          FY = YY + rY;
        return FY >= 0 && FY <= DY ? FY : this.loopMs <= 0 || DY < 2 ? -1 : FY < 0 ? DY - 1 : 1
      }
      gapMs(YY, rY) {
        const DY = this.nodes.length - 1;
        if (1 === rY) {
          const rY = YY === DY ? 0 : YY;
          return this.nodes[rY + 1].timeMs - this.nodes[rY].timeMs
        }
        const FY = 0 === YY ? DY : YY;
        return this.nodes[FY].timeMs - this.nodes[FY - 1].timeMs
      }
    }
    class ZY {
      constructor(YY) {
        this.Mu = YY, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = rY => YY.getEntityPosition(rY), this.readAimPoint = rY => YY.getEntityAimPoint(rY)
      }
      aimPoint(YY) {
        return "string" !== typeof YY ? (0, gY.o)(YY, 3) ? YY : null : this.resolve(YY, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(YY) {
        const rY = "string" === typeof YY ? this.Mu.getEntityAimPoint(YY) : YY;
        return rY && (0, gY.o)(rY, 3) ? rY : null
      }
      feetPosition(YY) {
        return this.resolve(YY, this.readFeet, this.lastFeet)
      }
      heading(YY) {
        const rY = this.Mu.getEntityHeading(YY);
        if (null !== rY && Number.isFinite(rY)) return this.lastHeadings.set(YY, rY), rY;
        const DY = this.lastHeadings.get(YY);
        return void 0 !== DY ? DY : YY === this.Mu.localPlayerId ? 0 : this.heading(this.Mu.localPlayerId)
      }
      resolve(YY, rY, DY) {
        const FY = rY(YY);
        let AY = DY.get(YY);
        return FY && (0, gY.o)(FY, 3) ? (AY || (AY = [0, 0, 0], DY.set(YY, AY)), AY[0] = FY[0], AY[1] = FY[1], AY[2] = FY[2], AY) : AY || (YY === this.Mu.localPlayerId ? null : this.resolve(this.Mu.localPlayerId, rY, DY))
      }
    }

    function CY(YY) {
      return {
        heading: YY.heading,
        pitch: YY.pitch
      }
    }

    function fY(YY, rY) {
      Number.isFinite(YY.heading) && Number.isFinite(YY.pitch) || (0, AY.k)(rY, YY)
    }

    function jY(YY, rY, DY, FY, IY) {
      if (rY) return void(0, AY.m)(rY, IY);
      const RY = FY.aimPoint(DY);
      RY && (0, AY.r)(YY, RY, IY)
    }
    class hY {
      constructor(YY, rY, DY, FY) {
        this.settings = YY, this.Mu = rY, this.targets = DY, this.base = void 0, this.base = CY(FY)
      }
      update(YY, rY, DY) {
        var FY;
        const AY = this.settings;
        (0, gY.i)(AY.position, DY.position), jY(AY.position, AY.lookDirection, null !== (FY = AY.lookAt) && void 0 !== FY ? FY : this.Mu.localPlayerId, this.targets, this.base), rY.apply(this.base, DY), DY.fov = iY(AY, this.Mu)
      }
      continueFrom(YY) {
        YY instanceof hY && (0, AY.k)(YY.base, this.base)
      }
      reset(YY) {
        fY(this.base, YY)
      }
    }
    class dY {
      constructor(YY, rY, DY, FY) {
        this.settings = YY, this.Mu = rY, this.targets = DY, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.ci = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = CY(FY), this.goal = [...FY.position]
      }
      update(YY, rY, DY) {
        var FY, AY, IY;
        const RY = this.settings,
          OY = null !== (FY = RY.target) && void 0 !== FY ? FY : this.Mu.localPlayerId,
          aY = this.targets.feetPosition(OY);
        let vY = !1;
        aY && (vY = this.foundFeet && SY(this.lastFeet, aY) > 32 + .1 * YY, (0, gY.i)(aY, this.lastFeet), this.foundFeet = !0, this.placeGoal(aY, OY));
        const uY = null !== (AY = RY.smoothMs) && void 0 !== AY ? AY : 0;
        !this.started || uY < 1 || vY ? ((0, gY.i)(this.goal, this.smoothed), this.ci.fill(0), this.started = !0) : yY(this.smoothed, this.ci, this.goal, uY, YY), vY && (this.distance = -1), (0, gY.i)(this.smoothed, DY.position);
        const sY = !0 === RY.avoidTerrain ? this.pullIn(OY, YY, DY) : 1;
        let QY = this.goal;
        if ("target" === RY.offsetSpace) QY = DY.position;
        else if (sY < 1) {
          QY = this.aimOrigin;
          for (let YY = 0; YY < 3; YY++) QY[YY] = DY.position[YY] + (this.goal[YY] - this.smoothed[YY]) * sY
        }
        jY(QY, RY.lookDirection, null !== (IY = RY.lookAt) && void 0 !== IY ? IY : OY, this.targets, this.base), rY.apply(this.base, DY), DY.fov = iY(RY, this.Mu)
      }
      continueFrom(YY) {
        YY instanceof dY && (0, FY.m)(YY.settings.target, this.settings.target) && ((0, AY.k)(YY.base, this.base), (0, gY.i)(YY.goal, this.goal), (0, gY.i)(YY.lastFeet, this.lastFeet), this.foundFeet = YY.foundFeet, (0, gY.i)(YY.smoothed, this.smoothed), (0, gY.i)(YY.ci, this.ci), this.started = YY.started, !0 === YY.settings.avoidTerrain && (this.distance = YY.distance))
      }
      reset(YY) {
        fY(this.base, YY), this.ci.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(YY, rY, DY) {
        const FY = this.targets.aimPoint(YY);
        if (!FY) return 1;
        const AY = DY.position,
          IY = SY(FY, AY);
        if (!(IY > 0)) return 1;
        const RY = this.toCamera;
        for (let gY = 0; gY < 3; gY++) RY[gY] = (AY[gY] - FY[gY]) / IY;
        const OY = function(YY, rY, DY) {
          return YY < 0 || rY < YY ? rY : rY + (YY - rY) * Math.exp(-DY / 150)
        }(this.distance, function(YY, rY, DY, FY) {
          const AY = YY.raycastTerrain(rY, DY, FY);
          return null !== AY && Number.isFinite(AY) ? Math.min(FY, Math.max(0, AY - .2)) : FY
        }(this.Mu, FY, RY, IY), rY);
        if (IY - OY < .001) return this.distance = -1, 1;
        this.distance = OY;
        for (let gY = 0; gY < 3; gY++) AY[gY] = FY[gY] + RY[gY] * OY;
        return OY / IY
      }
      placeGoal(YY, rY) {
        const DY = this.settings.offset;
        let FY = DY[0],
          AY = DY[2];
        if ("target" === this.settings.offsetSpace) {
          const YY = this.targets.heading(rY),
            IY = Math.cos(YY),
            RY = Math.sin(YY);
          FY = DY[0] * IY + DY[2] * RY, AY = -DY[0] * RY + DY[2] * IY
        }
        this.goal[0] = YY[0] + FY, this.goal[1] = YY[1] + DY[1], this.goal[2] = YY[2] + AY
      }
    }
    class JY {
      constructor(YY, rY, DY, FY) {
        var AY, IY;
        this.settings = YY, this.Mu = rY, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = YY.keyframes.length > 0 ? new zY(YY.keyframes, null === (AY = YY.smooth) || void 0 === AY || AY, null !== (IY = YY.loop) && void 0 !== IY && IY) : null, this.base = (0, gY.h)(FY, (0, gY.j)()), this.resolveTarget = YY => DY.aimPoint(YY)
      }
      update(YY, rY, DY) {
        this.elapsedMs += YY;
        const FY = iY(this.settings, this.Mu);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, FY, this.base) : this.base.fov = FY, (0, gY.i)(this.base.position, DY.position), DY.fov = this.base.fov, rY.apply(this.base, DY)
      }
      continueFrom(YY) {
        YY instanceof JY && (0, FY.m)(YY.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = YY.elapsedMs, (0, gY.h)(YY.base, this.base))
      }
      reset(YY) {
        fY(this.base, YY), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function MY(YY, rY) {
      return (0, FY.n)(YY, rY)
    }
    class wY {
      constructor(YY, rY, DY) {
        var FY;
        this.settings = YY, this.Mu = rY, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const AY = null !== DY && DY.settings.mode === YY.mode,
          IY = AY ? DY.pose : rY.getDefaultPose();
        this.pose = (0, gY.h)(IY, (0, gY.j)()), this.lastGoodPose = (0, gY.h)(AY ? DY.lastGoodPose : IY, (0, gY.j)()), this.look = new oY(YY.playerLook), this.targets = null !== (FY = null === DY || void 0 === DY ? void 0 : DY.targets) && void 0 !== FY ? FY : new ZY(rY);
        const RY = (0, gY.h)(IY, (0, gY.j)());
        AY && DY.look.unapply(RY, RY), this.mode = function(YY, rY, DY, FY) {
          switch (YY.mode) {
            case "fixed":
              return new hY(YY, rY, DY, FY);
            case "follow":
              return new dY(YY, rY, DY, FY);
            case "path":
              return new JY(YY, rY, DY, FY);
            case "frame":
              return new QY(YY, rY, DY, FY)
          }
        }(YY, rY, this.targets, RY), AY && (this.look.continueFrom(DY.look), this.mode.continueFrom(DY.mode))
      }
      update(YY, rY) {
        return this.look.update(YY, rY), this.mode.update(YY, this.look, this.pose), (0, gY.n)(this.pose) ? (0, gY.h)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, gY.h)(this.lastGoodPose, this.pose), this.mode.reset((0, gY.n)(this.lastGoodPose) ? this.lastGoodPose : this.Mu.getDefaultPose())), this.pose
      }
    }

    function bY(YY) {
      return [0, 0, YY[2], YY[3]]
    }
    class XY {
      constructor(YY) {
        this.Mu = YY, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new OY, this.shot = null, this.blend = null, this.mixed = (0, gY.j)(), this.output = (0, gY.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(YY) {
        const rY = (0, aY.c)(YY);
        if ((0, FY.m)(rY, this.pending ? this.pending.settings : this.settings)) return;
        const DY = MY(this.settings, rY);
        if (void 0 !== rY.transition && !DY) return this.pending = {
          settings: rY,
          shot: "default" === rY.mode ? null : new wY(rY, this.Mu, null)
        }, void this.fade.fadeOut(rY.transition);
        const AY = null !== this.pending;
        this.pending = null, !AY && DY || this.fade.fadeIn(FY.j.minTransitionFadeMs), this.show(rY, !1)
      }
      show(YY, rY) {
        var DY, AY;
        if ((0, FY.m)(YY, this.settings)) return;
        const RY = !rY && MY(this.settings, YY);
        this.settings = YY;
        const OY = null !== this.blend && this.blend.elapsedMs > 0,
          aY = (0, gY.h)(this.hasOutput ? this.output : this.Mu.getDefaultPose(), (0, gY.j)());
        if (this.shot = "default" === YY.mode ? null : new wY(YY, this.Mu, rY ? null : this.shot), RY) return;
        const vY = rY || !this.shot && !this.hasOutput ? 0 : null !== (DY = YY.blendInMs) && void 0 !== DY ? DY : 0;
        if (vY <= 0) return void(this.blend = null);
        const uY = (0, IY.k)(null !== (AY = YY.blendEasing) && void 0 !== AY ? AY : "easeInOut");
        this.blend = {
          from: aY,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: vY,
          easing: OY ? bY(uY) : uY
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
      update(YY, rY) {
        const DY = Number.isFinite(YY) && YY > 0 ? YY : 0;
        if (this.fade.advance(DY) && null !== this.pending) {
          const {
            settings: YY
          } = this.pending;
          this.pending = null, this.show(YY, !0)
        }
        this.loadingPositions.length = 0;
        const FY = this.pending;
        if (null !== FY && void 0 !== FY && FY.shot) {
          const YY = "path" === FY.settings.mode ? 0 : DY;
          this.noteLoadingPosition(FY.shot.update(YY, gY.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const RY = this.shot ? this.shot.update(DY, rY) : this.Mu.getDefaultPose();
        this.shot && this.noteLoadingPosition(RY.position);
        const OY = this.blend;
        if (!OY) return this.writeOutput(RY);
        OY.elapsedMs += DY;
        const aY = Math.min(1, OY.elapsedMs / OY.durationMs);
        if (OY.headingDelta = Number.isFinite(OY.headingDelta) ? (0, AY.y)(OY.headingDelta, RY.heading - OY.from.heading) : (0, AY.v)(OY.from.heading, RY.heading), (0, gY.s)(OY.from, RY, OY.headingDelta, (0, IY.i)(aY, OY.easing), this.mixed), aY >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else OY.fromScripted && this.noteLoadingPosition(OY.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(YY) {
        if (YY.every(Number.isFinite)) {
          const rY = this.loadingPositions;
          rY.push((0, gY.i)(YY, this.loadingSlots[rY.length]))
        }
      }
      writeOutput(YY) {
        const rY = this.output;
        (0, gY.n)(YY) ? (0, gY.h)(YY, rY) : this.hasOutput || (0, gY.h)(this.Mu.getDefaultPose(), rY), rY.pitch = (0, AY.i)(rY.pitch);
        const DY = this.Mu.getDefaultFov(),
          IY = Number.isFinite(DY) && DY > 0 && DY < 180,
          RY = IY ? Math.min(FY.j.minFov, DY) : FY.j.minFov,
          OY = IY ? Math.max(FY.j.maxFov, DY) : FY.j.maxFov;
        return rY.fov = Number.isFinite(rY.fov) ? Math.min(OY, Math.max(RY, rY.fov)) : OY, this.hasOutput = !0, rY
      }
    }
  },
  38504: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      h: () => OY,
      i: () => RY,
      j: () => IY,
      n: () => aY,
      o: () => gY,
      s: () => vY
    });
    var FY = DY(38513);
    const AY = {
      Tl: 0,
      Bl: 0
    };

    function IY() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function RY(YY, rY) {
      return rY[0] = YY[0], rY[1] = YY[1], rY[2] = YY[2], rY
    }

    function OY(YY, rY) {
      return RY(YY.position, rY.position), rY.heading = YY.heading, rY.pitch = YY.pitch, rY.fov = YY.fov, rY
    }

    function gY(YY, rY) {
      return Array.isArray(YY) && YY.length === rY && YY.every(Number.isFinite)
    }

    function aY(YY) {
      return gY(YY.position, 3) && Number.isFinite(YY.heading) && Number.isFinite(YY.pitch) && Number.isFinite(YY.fov)
    }

    function vY(YY, rY, DY, AY, IY) {
      for (let FY = 0; FY < 3; FY++) IY.position[FY] = YY.position[FY] + (rY.position[FY] - YY.position[FY]) * AY;
      return IY.heading = (0, FY.t)(YY.heading + DY * AY), IY.pitch = YY.pitch + (rY.pitch - YY.pitch) * AY, IY.fov = YY.fov + (rY.fov - YY.fov) * AY, IY
    }
  },
  38536: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => TY,
      g: () => sY
    });
    var FY = DY(38533),
      AY = DY(38504);
    const IY = FY.g,
      RY = FY.k;

    function OY(YY, rY, DY, FY) {
      return Number.isFinite(YY) ? Math.min(DY, Math.max(rY, YY)) : FY
    }

    function gY(YY, rY, DY) {
      return void 0 !== YY && Number.isFinite(YY) ? Math.min(DY, Math.max(rY, YY)) : void 0
    }

    function aY(YY) {
      const rY = FY.j.maxCoordinate;
      return [Math.min(rY, Math.max(-rY, YY[0])), Math.min(rY, Math.max(-rY, YY[1])), Math.min(rY, Math.max(-rY, YY[2]))]
    }

    function vY(YY) {
      return "string" === typeof YY ? YY : (0, AY.o)(YY, 3) ? aY(YY) : void 0
    }
    const uY = new RegExp(FY.l);

    function sY(YY) {
      return "string" === typeof YY && uY.test(YY)
    }

    function iY(YY) {
      const rY = [];
      if (!Array.isArray(YY)) return rY;
      for (const DY of YY.slice(0, FY.j.maxFrameTargets)) {
        const YY = vY(DY);
        void 0 === YY || "string" === typeof YY && !sY(YY) || rY.push(YY)
      }
      return rY
    }

    function yY(YY) {
      if (!(0, AY.o)(YY, 3)) return;
      const rY = Math.max(Math.abs(YY[0]), Math.abs(YY[1]), Math.abs(YY[2])),
        DY = Math.hypot(YY[0] / rY, YY[1] / rY, YY[2] / rY);
      return 0 === rY || rY * DY < FY.j.minDirectionLength ? void 0 : [YY[0] / rY / DY, YY[1] / rY / DY, YY[2] / rY / DY]
    }

    function QY(YY) {
      if (void 0 !== YY) return "string" === typeof YY ? IY.includes(YY) ? YY : void 0 : (0, AY.o)(YY, 4) ? [OY(YY[0], 0, 1, 0), OY(YY[1], FY.j.minEasingY, FY.j.maxEasingY, 0), OY(YY[2], 0, 1, 1), OY(YY[3], FY.j.minEasingY, FY.j.maxEasingY, 1)] : "linear"
    }

    function oY(YY) {
      if (YY) return {
        maxYaw: OY(YY.maxYaw, 0, FY.j.maxPlayerLook, 0),
        maxPitch: OY(YY.maxPitch, 0, FY.j.maxPlayerLook, 0),
        returnMs: gY(YY.returnMs, 0, FY.j.maxReturnMs)
      }
    }
    const WY = new RegExp(FY.c);

    function EY(YY) {
      var rY;
      if ("object" !== typeof YY || null === YY) return;
      const DY = FY.j.maxTransitionMs,
        AY = FY.j.minTransitionFadeMs;
      return {
        colour: "string" === typeof YY.colour && WY.test(YY.colour) ? YY.colour : FY.d,
        outMs: OY(YY.outMs, AY, DY, AY),
        holdMs: OY(null !== (rY = YY.holdMs) && void 0 !== rY ? rY : 0, 0, DY, 0),
        inMs: OY(YY.inMs, AY, DY, AY)
      }
    }

    function mY(YY) {
      return !0 === YY || void 0
    }

    function VY(YY) {
      if ("object" !== typeof YY || null === YY) return !1;
      const rY = YY.lookAt;
      return Number.isFinite(YY.timeMs) && (0, AY.o)(YY.position, 3) && (void 0 === rY || "string" === typeof rY || (0, AY.o)(rY, 3))
    }

    function SY(YY) {
      return {
        ...YY,
        timeMs: OY(YY.timeMs, 0, FY.j.maxPathMs, 0),
        position: aY(YY.position),
        lookAt: vY(YY.lookAt),
        lookDirection: yY(YY.lookDirection),
        fov: gY(YY.fov, FY.j.minFov, FY.j.maxFov),
        easing: QY(YY.easing)
      }
    }

    function lY(YY) {
      const rY = [];
      if (!Array.isArray(YY)) return rY;
      for (const DY of YY.slice(0, FY.j.maxKeyframes)) {
        if (!VY(DY)) continue;
        const YY = SY(DY);
        (0 === rY.length || YY.timeMs > rY[rY.length - 1].timeMs) && rY.push(YY)
      }
      return rY
    }

    function TY(YY) {
      if ("object" !== typeof YY || null === YY) return {
        mode: "default"
      };
      const rY = {
          blendInMs: gY(YY.blendInMs, 0, FY.j.maxBlendInMs),
          blendEasing: QY(YY.blendEasing),
          transition: EY(YY.transition),
          letterbox: mY(YY.letterbox),
          hideHud: mY(YY.hideHud)
        },
        DY = {
          mode: "default",
          ...rY
        };
      if ("default" === YY.mode || "fixed" === YY.mode && !(0, AY.o)(YY.position, 3)) return DY;
      const IY = {
        ...rY,
        fov: gY(YY.fov, FY.j.minFov, FY.j.maxFov),
        playerFacing: (uY = YY.playerFacing, RY.includes(uY) ? uY : void 0),
        playerLook: oY(YY.playerLook)
      };
      var uY, sY;
      switch (YY.mode) {
        case "fixed":
          return {
            ...YY, ...IY, position: aY(YY.position), lookAt: vY(YY.lookAt), lookDirection: yY(YY.lookDirection)
          };
        case "follow":
          return {
            ...YY, ...IY, target: "string" === typeof YY.target ? YY.target : void 0, lookAt: vY(YY.lookAt), offset: (sY = YY.offset, Array.isArray(sY) ? [OY(sY[0], -FY.j.maxOffset, FY.j.maxOffset, 0), OY(sY[1], -FY.j.maxOffset, FY.j.maxOffset, 0), OY(sY[2], -FY.j.maxOffset, FY.j.maxOffset, 0)] : [0, 0, 0]), lookDirection: yY(YY.lookDirection), smoothMs: gY(YY.smoothMs, 0, FY.j.maxSmoothMs)
          };
        case "path":
          return {
            ...YY, ...IY, keyframes: lY(YY.keyframes)
          };
        case "frame":
          return {
            ...YY, ...IY, targets: iY(YY.targets), viewHeading: gY(YY.viewHeading, -FY.j.maxFrameHeading, FY.j.maxFrameHeading), viewElevation: gY(YY.viewElevation, 0, FY.j.maxFrameElevation), padding: gY(YY.padding, 0, FY.j.maxFrameDistance), closestDistance: gY(YY.closestDistance, 0, FY.j.maxFrameDistance), furthestDistance: gY(YY.furthestDistance, 0, FY.j.maxFrameDistance), smoothMs: gY(YY.smoothMs, 0, FY.j.maxSmoothMs)
          };
        default:
          return DY
      }
    }
  },
  38025: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY
    });
    var FY = DY(1231);

    function AY(YY) {
      const rY = /(\d*\.?\d+)px/.exec(YY);
      return rY ? Number(rY[1]) : null
    }

    function IY(YY) {
      return YY.split(/[\s,]+/).pop()
    }
    let RY = !1;
    const OY = {
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
      drawText: function(YY, rY, FY, OY, gY, aY) {
        if (gY <= 0 || aY <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: vY,
          fontVariant: uY,
          fontWeight: sY,
          fontSize: iY,
          font: yY
        } = this, QY = [vY, uY, sY, `${iY}px`, yY].filter(Boolean).join(" "), oY = [
          [sY, `${iY}px`, IY(yY)].filter(Boolean).join(" "), `${iY}px sans-serif`
        ], WY = YY.font, EY = function(YY, rY, DY) {
          for (const FY of rY) {
            YY.font = FY;
            const rY = AY(YY.font),
              RY = IY(FY);
            if (null !== rY && Math.abs(rY - DY) <= .5 && YY.font.toLowerCase().includes(RY.toLowerCase())) return FY
          }
          return null
        }(YY, [QY, ...oY], iY);
        EY !== QY && function(YY, rY, FY) {
          RY || (RY = !0, Promise.resolve().then((() => DY(1113))).then((DY => {
            let {
              jQ: AY
            } = DY;
            AY(new Error("A canvas didn't take canvasTxt's font"), {
              font: YY,
              Mi: rY,
              drawnWith: null !== FY && void 0 !== FY ? FY : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(QY, WY, EY);
        const mY = AY(YY.font);
        if (null === EY && null !== mY && mY > 0) {
          const DY = iY / mY;
          YY.save();
          try {
            return YY.scale(DY, DY), {
              height: this.drawLines(YY, rY, FY / DY, OY / DY, gY / DY, aY / DY, mY).height * DY
            }
          } finally {
            YY.restore()
          }
        }
        return this.drawLines(YY, rY, FY, OY, gY, aY, iY)
      },
      drawLines: function(YY, rY, DY, AY, IY, RY, OY) {
        const gY = DY + IY,
          aY = AY + RY;
        let vY, uY = AY + RY / 2 + OY / 2;
        "right" === this.align ? (vY = gY, YY.textAlign = "right") : "left" === this.align ? (vY = DY, YY.textAlign = "left") : (vY = DY + IY / 2, YY.textAlign = "center");
        for (const FY of rY) {
          YY.measureText(FY).width >= IY && (rY = rY.replace(FY, ""))
        }
        rY = (0, FY.U)(rY);
        const sY = [],
          iY = rY.split("\n"),
          yY = this.justify ? YY.measureText("\u200a").width : 0;
        iY.forEach((rY => {
          let DY = YY.measureText(rY).width;
          if (DY <= IY) sY.push(rY);
          else {
            let FY = rY;
            const AY = IY;
            let RY, OY, gY;
            for (DY = YY.measureText(FY).width; DY > AY;) {
              for (RY = 0, OY = 0, gY = ""; OY < AY;) RY++, gY = FY.substr(0, RY), OY = YY.measureText(gY).width;
              RY--, gY = gY.substr(0, RY);
              const rY = RY;
              if (" " !== FY.substr(RY, 1)) {
                for (;
                  " " !== FY.substr(RY, 1) && 0 !== RY;) RY--;
                0 === RY && (RY = rY), gY = FY.substr(0, RY)
              }
              gY = this.justify ? this.justifyLine(YY, gY, yY, "\u200a", IY) : gY, FY = FY.substr(RY), DY = YY.measureText(FY).width, sY.push(gY)
            }
            DY > 0 && sY.push(FY)
          }
        }));
        const QY = this.lineHeight ? this.lineHeight : this.getTextHeight(YY, rY),
          oY = QY * (sY.length - 1),
          WY = oY / 2;
        let EY = AY;
        "top" === this.vAlign ? uY = AY + OY : "bottom" === this.vAlign ? (uY = aY - oY, EY = aY) : (EY = AY + RY / 2, uY -= WY), sY.forEach((rY => {
          rY = rY.trim(), YY.fillText(rY, vY, uY), uY += QY
        })), this.debug && (YY.lineWidth = 3, YY.strokeStyle = "#00909e", YY.strokeRect(DY, AY, IY, RY), YY.lineWidth = 2, YY.strokeStyle = "#f6d743", YY.beginPath(), YY.moveTo(vY, AY), YY.lineTo(vY, aY), YY.stroke(), YY.strokeStyle = "#ff6363", YY.beginPath(), YY.moveTo(DY, EY), YY.lineTo(gY, EY), YY.stroke());
        return {
          height: oY + QY
        }
      },
      getTextHeight: function(YY, rY) {
        const DY = YY.textBaseline;
        YY.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: FY
        } = YY.measureText(rY);
        return YY.textBaseline = DY, FY
      },
      justifyLine: function(YY, rY, DY, FY, AY) {
        const IY = rY.trim(),
          RY = YY.measureText(IY).width,
          OY = IY.split(/\s+/).length - 1,
          gY = Math.floor((AY - RY) / DY);
        if (OY <= 0 || gY <= 0) return IY;
        const aY = Math.floor(gY / OY);
        let vY = gY - OY * aY,
          uY = [];
        for (let sY = 0; sY < aY; sY++) uY.push(FY);
        uY = uY.join("");
        return IY.replace(/\s+/g, (YY => {
          const rY = vY > 0 ? uY + FY : uY;
          return vY--, YY + rY
        }))
      }
    }
  },
  38466: (YY, rY, DY) => {
    function FY(YY, rY) {
      return rY.set(YY), rY
    }
    DY.d(rY, {
      d: () => FY
    })
  },
  38029: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => QY,
      e: () => yY,
      h: () => sY,
      j: () => vY,
      k: () => uY
    });
    var FY = DY(3815),
      AY = DY(341);
    const IY = 1024,
      RY = 1536,
      OY = 2 * FY.l + 1,
      gY = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      aY = 1.5;

    function vY(YY, rY, DY) {
      if ("string" !== typeof YY) return rY;
      try {
        const DY = JSON.parse(YY);
        return DY && "object" === typeof DY ? DY : rY
      } catch (FY) {
        return void 0 !== DY && console.error(`Couldn't parse ${DY}`, FY), rY
      }
    }

    function uY(YY) {
      return vY(YY, null, "a leaderboard's rows")
    }

    function sY(YY, rY) {
      var DY, FY;
      return null !== rY && void 0 !== rY ? rY : {
        status: null !== (DY = YY.status) && void 0 !== DY ? DY : "loading",
        entries: null !== (FY = YY.entries) && void 0 !== FY ? FY : []
      }
    }

    function iY(YY, rY) {
      return "number" === typeof YY && Number.isFinite(YY) && YY > 0 ? YY : rY
    }

    function yY(YY, rY) {
      const DY = iY(YY.size, 1);
      let FY = iY(YY.width, iY(2.5 * DY, 2.5)),
        AY = iY(YY.height, iY(3.75 * DY, 3.75));
      Number.isFinite(IY * AY / FY) && Number.isFinite(RY * FY / AY) || (FY = 2.5, AY = 3.75);
      const OY = AY / FY,
        gY = Math.max(1, Math.min(IY, rY / OY));
      return {
        width: FY,
        height: AY,
        layoutWidth: Math.max(IY, RY / OY),
        layoutHeight: Math.max(RY, IY * OY),
        pixelWidth: Math.round(gY),
        pixelHeight: Math.round(Math.max(1, Math.min(rY, gY * OY)))
      }
    }

    function QY(YY, rY, DY, RY, vY, uY) {
      YY.setTransform(1, 0, 0, 1, 0, 0), YY.fillStyle = AY.K.defaultNameTagBackground, YY.fillRect(0, 0, rY, DY), YY.scale(rY / RY.layoutWidth, DY / RY.layoutHeight), YY.translate((RY.layoutWidth - IY) / 2, 0),
        function(YY, rY, DY, IY) {
          var RY, vY, uY, sY;
          const {
            top: iY,
            around: yY,
            showPlayerText: QY,
            localPlayerDbId: EY
          } = DY, {
            whiteUiText: mY,
            grayUiText: VY,
            yellowUiText: SY
          } = AY.K;
          YY.textBaseline = "middle";
          const lY = function(rY, DY, FY, AY, IY, RY) {
              let OY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              YY.font = `bold ${AY}px 'Jetbrains Mono', monospace`, YY.fillStyle = IY, YY.textAlign = OY;
              let gY = rY.replace(/[\r\n\t]/g, " ");
              if (YY.measureText(gY).width > RY) {
                for (; gY.length > 0 && YY.measureText(`${gY}\u2026`).width > RY;) gY = gY.slice(0, -1);
                gY += "\u2026"
              }
              YY.fillText(gY, DY, FY)
            },
            TY = rY => {
              YY.fillStyle = mY, YY.globalAlpha = .15, YY.fillRect(24, rY, 976, 2), YY.globalAlpha = 1
            },
            eY = null === EY ? null : (0, AY.nc)(EY),
            NY = YY => null !== eY && YY.playerHash === eY,
            BY = oY(iY.entries, FY.o),
            cY = "ready" === iY.status && BY.length > 0,
            KY = null === yY ? [] : oY(yY.entries, OY),
            HY = BY.some(NY),
            zY = null === yY ? null : function(YY) {
              const rY = YY;
              if (!rY || !Number.isFinite(rY.rank) || !Number.isFinite(rY.tied) || !Number.isFinite(rY.total)) return null;
              return rY
            }(yY.standing),
            ZY = KY.find(NY),
            CY = BY.find(NY),
            fY = null === zY || void 0 === ZY ? null : {
              value: ZY.value,
              rank: zY.rank
            },
            jY = WY(BY, void 0 === CY || CY.value === (null === fY || void 0 === fY ? void 0 : fY.value) ? fY : null),
            hY = WY(KY, fY),
            dY = (YY, rY) => {
              const DY = YY.findIndex(NY);
              return DY >= 0 ? rY[DY] : null
            },
            JY = null !== (RY = null !== (vY = null === zY || void 0 === zY ? void 0 : zY.rank) && void 0 !== vY ? vY : dY(KY, hY)) && void 0 !== RY ? RY : dY(BY, jY);
          YY.font = "bold 34px 'Jetbrains Mono', monospace";
          const MY = [...cY ? jY : [], ...HY ? [] : hY],
            wY = Math.min(280, Math.max(0, ...MY.map((rY => YY.measureText(gY.format(rY)).width)))),
            bY = wY <= 80,
            XY = bY ? 80 : 32 + wY,
            qY = bY ? 148 : XY + 28,
            pY = 660 - qY;
          lY(`TOP ${FY.o}  /  ALL TIME`, 24, 52, 28, VY, 976), lY(QY ? String(null !== (uY = rY.title) && void 0 !== uY ? uY : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, mY, 976), lY("RANK", 32, 174, 28, VY, qY - 40), lY("PLAYER", qY, 174, 28, VY, pY), lY(QY ? String(null !== (sY = rY.scoreLabel) && void 0 !== sY ? sY : "Score").slice(0, 24) : "Score", 992, 174, 28, VY, 304, "right"), TY(202);
          const kY = (IY - 232) / (FY.o + aY + OY),
            GY = 208 + FY.o * kY,
            xY = GY + aY * kY,
            nY = (rY, DY, FY, AY) => {
              const IY = NY(rY);
              YY.fillStyle = IY ? SY : mY, YY.globalAlpha = IY ? .15 : AY ? .035 : 0, YY.fillRect(24, FY - kY / 2 + 1, 976, kY - 2), YY.globalAlpha = 1;
              const RY = IY ? SY : mY;
              lY(gY.format(DY), XY, FY, 34, RY, bY ? 80 : wY, bY ? "center" : "right"), lY(QY ? String(rY.name).slice(0, 64) : "Player", qY, FY, 34, RY, pY);
              const OY = gY.format(rY.value);
              lY(YY.measureText(OY).width > 304 ? rY.value.toExponential(6) : OY, 992, FY, 34, RY, 304, "right")
            };
          if (cY)
            for (const [FY, AY] of BY.entries()) nY(AY, jY[FY], 208 + (FY + .5) * kY, FY % 2 === 0);
          else {
            const YY = "error" === iY.status,
              rY = YY ? "Couldn't load leaderboard" : "ready" === iY.status ? "No scores yet" : "Loading leaderboard\u2026",
              DY = YY ? "Trying again shortly" : "ready" === iY.status ? "Be the first on the board!" : "Fetching the top players",
              FY = (208 + GY) / 2;
            lY(rY, 512, FY - 28, 40, YY ? AY.K.redUiText : mY, 960, "center"), lY(DY, 512, FY + 27, 30, VY, 960, "center")
          }
          const PY = GY + aY * kY / 2;
          if (null === JY) TY(PY);
          else {
            const rY = null === zY ? 0 : zY.tied - 1,
              DY = `YOUR RANK #${gY.format(JY)}${null===zY?"":` of ${gY.format(zY.total)}`}`;
            YY.font = "bold 36px 'Jetbrains Mono', monospace";
            const FY = Math.max(20, Math.min(36, Math.floor(34560 / YY.measureText(DY).width)));
            lY(DY, 512, PY - (rY > 0 ? 15 : 0), FY, SY, 960, "center"), rY > 0 && lY(`Tied with ${gY.format(rY)} other${1===rY?"":"s"}`, 512, PY + 24, 24, VY, 960, "center")
          }
          if (null === yY) return;
          const UY = xY + OY * kY / 2;
          if (HY) lY(`You're in the top ${FY.o}!`, 512, UY, 40, SY, 960, "center");
          else if (0 === KY.length) lY("You're not on this board yet", 512, UY, 34, VY, 960, "center");
          else
            for (const [FY, AY] of KY.entries()) nY(AY, hY[FY], xY + (FY + .5) * kY, FY % 2 === 0)
        }(YY, vY, uY, RY.layoutHeight)
    }

    function oY(YY, rY) {
      return Array.isArray(YY) ? YY.slice(0, rY).filter((YY => YY && Number.isFinite(YY.rank) && Number.isFinite(YY.value))) : []
    }

    function WY(YY, rY) {
      const DY = [];
      let FY = !1;
      return YY.forEach(((AY, IY) => {
        if (null !== rY && AY.value === rY.value) return void DY.push(rY.rank);
        const RY = IY > 0 && AY.value === YY[IY - 1].value;
        RY || (FY = 0 === IY && 1 !== AY.rank), DY.push(RY && !FY ? DY[IY - 1] : AY.rank)
      })), DY
    }
  },
  38229: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      g: () => IY
    });
    const FY = 32;

    function AY(YY) {
      return Array.from(YY).length
    }

    function IY(YY) {
      const rY = [""];
      let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        AY = "";
      const IY = () => {
        rY.push(""), DY = 0, AY = ""
      };
      for (const RY of YY.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(RY)) IY();
        else if (/^\s+$/.test(RY)) AY += RY;
      else if (RY.length > 0) {
        const YY = Array.from(RY);
        DY > 0 && DY + AY.length + YY.length > FY && IY(), rY[rY.length - 1] += AY, DY += AY.length, AY = "";
        for (const AY of YY) DY >= FY && IY(), rY[rY.length - 1] += AY, DY++
      }
      return rY[rY.length - 1] += AY, rY
    }
  },
  38464: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY
    });
    var FY = DY(36058),
      AY = DY.n(FY);
    const IY = [1, 1, 1];

    function RY(YY) {
      if (!YY) return [...IY];
      try {
        const [rY, DY, FY] = AY()(YY).rgb().array();
        return [rY / 255, DY / 255, FY / 255]
      } catch (rY) {
        return console.warn(`Invalid groundArrowPath colour "${YY}":`, rY), [...IY]
      }
    }
  },
  33695: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      h: () => OY,
      l: () => RY,
      p: () => AY,
      s: () => FY
    });
    const FY = {
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
      AY = "/textures/dayNight/sun.png",
      IY = "/textures/dayNight/moon.png",
      RY = "/textures/dayNight/stars",
      OY = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38533: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => vY,
      d: () => uY,
      g: () => FY,
      j: () => gY,
      k: () => AY,
      l: () => aY,
      m: () => OY,
      n: () => RY
    });
    const FY = ["linear", "easeIn", "easeOut", "easeInOut"],
      AY = ["movement", "camera", "cursor"],
      IY = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function RY(YY, rY) {
      return OY(YY, rY, IY)
    }

    function OY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (YY === rY || Number.isNaN(YY) && Number.isNaN(rY)) return !0;
      if ("object" !== typeof YY || "object" !== typeof rY || null === YY || null === rY || Array.isArray(YY) !== Array.isArray(rY)) return !1;
      const FY = YY,
        AY = rY;
      for (const IY of new Set([...Object.keys(FY), ...Object.keys(AY)]))
        if (!DY.includes(IY) && !OY(FY[IY], AY[IY])) return !1;
      return !0
    }
    const gY = {
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
      aY = "^-[1-9][0-9]*$",
      vY = "^#[0-9a-fA-F]{6}$",
      uY = "#000000"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);