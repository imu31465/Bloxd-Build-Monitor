export const id = 193;
export const ids = [193];
export const modules = {
  39547: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG
    });
    class wG {
      constructor(GG, bG) {
        this.read = GG, this.apply = bG, this.release = null
      }
      turn(GG, bG) {
        const ZG = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: bG,
          forcedCameraDirection: [GG[0], GG[1], GG[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), bG + 100),
          transitionMs: ZG
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(GG) {
        null !== this.release && (clearTimeout(this.release.timer), GG && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  39068: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      h: () => SG
    });
    const wG = new Map;

    function SG(GG, bG) {
      wG.set(GG, bG)
    }

    function LG(GG) {
      return GG ? wG.get(GG) : void 0
    }
  },
  39990: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG
    });
    var wG = ZG(38634);

    function SG(GG, bG, ZG) {
      var SG, LG, yG, kG, UG, YG, VG;
      const pG = (0, wG.c)(GG, bG, ZG[0], ZG[1], ZG[2]),
        fG = pG ? null !== (SG = pG.textCell) && void 0 !== SG ? SG : pG.rect.anchor : ZG,
        QG = bG(fG[0], fG[1], fG[2]);
      return {
        pos: [ZG[0], ZG[1], ZG[2]],
        noticeboardSpan: pG && {
          width: pG.rect.width,
          height: pG.rect.height
        },
        text: null !== (LG = null === QG || void 0 === QG || null === (yG = QG.persisted) || void 0 === yG || null === (kG = yG.shared) || void 0 === kG ? void 0 : kG.text) && void 0 !== LG ? LG : "",
        textSize: null !== (UG = null === QG || void 0 === QG || null === (YG = QG.persisted) || void 0 === YG || null === (VG = YG.shared) || void 0 === VG ? void 0 : VG.textSize) && void 0 !== UG ? UG : null
      }
    }
  },
  38917: (GG, bG, ZG) => {
    function wG(GG) {
      switch (GG.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    ZG.d(bG, {
      b: () => SG,
      e: () => LG,
      g: () => wG
    });
    const SG = 4,
      LG = 3
  },
  39569: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG,
      h: () => LG
    });
    var wG = ZG(352);
    const SG = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class LG {
      constructor(GG) {
        this.importGame = GG, this.loads = new Map, this.loaded = new Map
      }
      load(GG) {
        const bG = (0, wG.Yb)(GG);
        if (!SG.has(bG)) return Promise.resolve(void 0);
        let ZG = this.loads.get(bG);
        return ZG || (ZG = this.importGame(bG).then((GG => {
          const ZG = GG.default;
          if ("function" !== typeof ZG) throw new Error(`${bG}'s client code has no default-exported factory`);
          return this.loaded.set(bG, ZG), ZG
        })).catch((GG => {
          throw this.loads.delete(bG), GG
        })), this.loads.set(bG, ZG)), ZG
      }
      loadedFactory(GG) {
        const bG = (0, wG.Yb)(GG);
        if (!SG.has(bG)) return;
        const ZG = this.loaded.get(bG);
        if (!ZG) throw new Error(`${bG}'s client code started before it loaded`);
        return ZG
      }
    }
  },
  39996: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(9356),
      SG = ZG(34492),
      LG = ZG(3267);

    function yG(GG) {
      if (GG === wG.b) return 0;
      const bG = (0, LG.c)(GG);
      if (void 0 !== bG && bG <= SG.MAX_BLOCK_ID) return bG;
      const ZG = (0, LG.c)(GG.split("|")[0]);
      if (void 0 !== ZG && ZG <= SG.MAX_BLOCK_ID && (0, SG.rootMetaDescOf)(ZG) === GG) return ZG;
      throw new Error(`Invalid block name. You sent ${GG}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39629: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(17);
    class SG {
      constructor(GG) {
        this.screen = GG, this.hidesHud = !1
      }
      show(GG, bG) {
        this.screen.setFade(GG.colour, GG.alpha), this.screen.setLetterbox(!0 === bG.letterbox, GG.alpha < 1), this.setHudHidden(!0 === bG.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(GG) {
        this.hidesHud !== GG && (this.hidesHud = GG, wG.e.set({
          isUiHiddenByCamera: GG
        }))
      }
    }
  },
  39586: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG,
      e: () => fG,
      h: () => pG,
      j: () => yG,
      n: () => KG,
      q: () => UG,
      s: () => hG,
      w: () => YG,
      x: () => kG,
      z: () => VG
    });
    const wG = Math.PI / 2 - .001,
      SG = 2 * Math.PI,
      LG = 1e-9;

    function yG(GG, bG) {
      bG.heading = GG.heading, bG.pitch = GG.pitch
    }

    function kG(GG, bG) {
      const ZG = bG - GG;
      return ZG - SG * Math.floor((ZG + Math.PI) / SG)
    }

    function UG(GG, bG, ZG) {
      return GG + kG(GG, bG) * ZG
    }

    function YG(GG) {
      if (!Number.isFinite(GG)) return GG;
      const bG = GG - SG * Math.floor(GG / SG);
      return bG < SG ? bG : 0
    }

    function VG(GG, bG) {
      return GG + kG(GG, bG)
    }

    function pG(GG) {
      return Math.max(-wG, Math.min(wG, GG))
    }

    function fG(GG, bG, ZG) {
      const wG = Math.cos(bG);
      return ZG[0] = wG * Math.sin(GG), ZG[1] = -Math.sin(bG), ZG[2] = wG * Math.cos(GG), ZG
    }

    function QG(GG, bG, ZG, wG) {
      const SG = Math.sqrt(GG * GG + ZG * ZG);
      return SG < LG && Math.abs(bG) < LG || (SG >= LG && (wG.heading = Math.atan2(GG, ZG)), wG.pitch = pG(Math.atan2(-bG, SG) + 0)), wG
    }

    function KG(GG, bG) {
      return QG(GG[0], GG[1], GG[2], bG)
    }

    function hG(GG, bG, ZG) {
      return QG(bG[0] - GG[0], bG[1] - GG[1], bG[2] - GG[2], ZG)
    }
  },
  39620: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      f: () => SG
    });
    var wG = ZG(39586);

    function SG(GG) {
      var bG;
      const ZG = "default" === GG.mode ? "movement" : null !== (bG = GG.playerFacing) && void 0 !== bG ? bG : "movement";
      return "cursor" === ZG ? {
        facing: ZG,
        mouseTurns: null
      } : {
        facing: ZG,
        mouseTurns: "default" !== GG.mode && void 0 !== GG.playerLook ? "look" : "view"
      }
    }

    function LG(GG, bG, ZG, SG, LG, yG) {
      return yG.SF = 0, yG.kF = 0, yG.pointedAt = void 0, void 0 !== SG ? LG ? (yG.pointedAt = SG, GG) : (0, wG.w)(SG.heading) : LG ? (yG.SF = bG, yG.kF = ZG, GG) : (0, wG.w)(GG + bG)
    }
  },
  39602: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => gG
    });
    var wG = ZG(39610),
      SG = ZG(39586),
      LG = ZG(37361);

    function yG(GG, bG, ZG, wG) {
      if (!(wG > 0)) return bG;
      const SG = bG > GG ? Math.min(bG, GG + ZG / wG) : Math.max(bG, GG - ZG / wG);
      return Math.abs(bG - SG) < 1e-9 ? bG : SG
    }
    class kG {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: wG.f,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(GG) {
        !this.isGoingOut() && this.sinceTurnMs < wG.h.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: GG
        } : (this.waiting = null, this.startOut(GG))
      }
      fadeIn(GG) {
        this.isGoingOut() ? this.sinceTurnMs < wG.h.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: GG
        } : (this.waiting = null, this.startIn(GG)) : this.waiting = null
      }
      advance(GG) {
        const bG = this.waiting;
        if (null === bG) return this.step(GG);
        const ZG = wG.h.minFadeTurnMs - this.sinceTurnMs;
        if (ZG > GG) return this.step(GG);
        const SG = this.step(ZG);
        return this.waiting = null, "out" === bG.turn ? this.startOut(bG.transition) : this.startIn(bG.minMs), this.step(GG - ZG) || SG
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(GG) {
        ("in" === this.phase || null === this.phase && this.clearMs < wG.h.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = GG.colour), this.outMs = GG.outMs, this.holdMs = GG.holdMs, this.inMs = GG.inMs
      }
      startIn(GG) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(GG, this.inMs)
      }
      step(GG) {
        const bG = this.screen;
        this.sinceTurnMs += GG, null === this.phase && (this.clearMs += GG);
        let ZG = !1,
          SG = GG;
        if ("out" === this.phase) {
          const wG = (1 - bG.alpha) * this.outMs;
          if (bG.alpha = yG(bG.alpha, 1, GG, this.outMs), bG.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, SG = Math.max(0, GG - wG), ZG = !0
        }
        let LG = GG;
        if ("hold" === this.phase) {
          this.heldMs += SG;
          const GG = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - wG.h.minFadeTurnMs);
          if (GG < 0 || ZG) return ZG;
          this.phase = "in", this.sinceTurnMs = GG, LG = GG
        }
        return "in" === this.phase && (bG.alpha = yG(bG.alpha, 0, LG, this.inMs), bG.alpha <= 0 && (this.phase = null, this.clearMs = 0)), ZG
      }
    }
    var UG = ZG(39582),
      YG = ZG(39614),
      VG = ZG(1873),
      pG = ZG(36924);

    function fG(GG, bG) {
      for (let ZG = 0; ZG < bG.length; ZG++) bG[ZG] = GG[ZG]
    }

    function QG(GG, bG) {
      var ZG;
      return null !== (ZG = GG.fov) && void 0 !== ZG ? ZG : bG.getDefaultFov()
    }

    function KG(GG, bG, ZG, wG, SG) {
      const LG = 2 / wG,
        yG = Math.exp(-LG * SG);
      for (let kG = 0; kG < GG.length; kG++) {
        const wG = GG[kG] - ZG[kG],
          UG = (bG[kG] + LG * wG) * SG;
        GG[kG] = ZG[kG] + (wG + UG) * yG, bG[kG] = (bG[kG] - LG * UG) * yG
      }
    }
    class hG {
      constructor(GG, bG, ZG, wG) {
        var LG, yG, kG, UG, YG;
        this.settings = GG, this.Op = bG, this.targets = ZG, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Sd = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, SG.w)((0, VG.j)(null !== (LG = GG.viewHeading) && void 0 !== LG ? LG : 0)),
          pitch: (0, SG.h)((0, VG.j)(null !== (yG = GG.viewElevation) && void 0 !== yG ? yG : 45))
        }, this.closestDistance = null !== (kG = GG.closestDistance) && void 0 !== kG ? kG : Math.min(6, null !== (UG = GG.furthestDistance) && void 0 !== UG ? UG : 1 / 0), this.furthestDistance = null !== (YG = GG.furthestDistance) && void 0 !== YG ? YG : Math.max(64, this.closestDistance);
        const pG = (0, SG.e)(this.base.heading, this.base.pitch, this.forward),
          fG = wG.position,
          QG = this.closestDistance;
        this.goal = [fG[0] + pG[0] * QG, fG[1] + pG[1] * QG, fG[2] + pG[2] * QG, QG, this.base.heading, this.base.pitch]
      }
      update(GG, bG, ZG) {
        var wG, LG;
        this.placeGoal(null !== (wG = this.settings.fov) && void 0 !== wG ? wG : this.Op.getBaseFov()), this.goal[4] = (0, SG.z)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const yG = null !== (LG = this.settings.smoothMs) && void 0 !== LG ? LG : 400;
        !this.started || yG < 1 ? (fG(this.goal, this.smoothed), this.Sd.fill(0), this.started = !0) : KG(this.smoothed, this.Sd, this.goal, yG, GG), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, SG.h)(this.smoothed[5]), bG.apply(this.angles, ZG);
        const kG = (0, SG.e)(ZG.heading, ZG.pitch, this.forward);
        for (let SG = 0; SG < 3; SG++) ZG.position[SG] = this.smoothed[SG] - kG[SG] * this.smoothed[3];
        ZG.fov = QG(this.settings, this.Op)
      }
      continueFrom(GG) {
        GG instanceof hG && (fG(GG.goal, this.goal), fG(GG.smoothed, this.smoothed), fG(GG.Sd, this.Sd), this.framedTargets = GG.framedTargets, this.started = GG.started)
      }
      reset() {
        this.Sd.fill(0), this.started = !1
      }
      placeGoal(GG) {
        var bG;
        let ZG = 0;
        for (const VG of this.settings.targets) {
          const GG = this.targets.currentAimPoint(VG);
          GG && (0, UG.h)(GG, this.pointAt(ZG++))
        }
        if (ZG > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const GG = this.targets.aimPoint(this.Op.localPlayerId);
          GG && (0, UG.h)(GG, this.pointAt(ZG++))
        }
        const wG = this.goal;
        if (0 === ZG) return void(wG[3] = this.withinDistances(wG[3]));
        for (let UG = 0; UG < 3; UG++) {
          let GG = 1 / 0,
            bG = -1 / 0;
          for (let wG = 0; wG < ZG; wG++) GG = Math.min(GG, this.points[wG][UG]), bG = Math.max(bG, this.points[wG][UG]);
          wG[UG] = (GG + bG) / 2
        }
        let SG = 0;
        for (let UG = 0; UG < ZG; UG++) {
          const GG = this.points[UG];
          SG = Math.max(SG, Math.hypot(GG[0] - wG[0], GG[1] - wG[1], GG[2] - wG[2]))
        }
        const LG = Math.tan((0, VG.j)(GG) / 2),
          yG = Math.atan(LG * (!0 === this.settings.letterbox ? pG.d : 1)),
          kG = Math.atan(LG * this.Op.getAspectRatio()),
          YG = (SG + (null !== (bG = this.settings.padding) && void 0 !== bG ? bG : 2)) / Math.sin(Math.min(yG, kG));
        wG[3] = this.withinDistances(YG)
      }
      withinDistances(GG) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, GG))
      }
      pointAt(GG) {
        return GG === this.points.length && this.points.push([0, 0, 0]), this.points[GG]
      }
    }
    class dG {
      constructor(GG) {
        this.limits = GG, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(GG) {
        this.limits && (this.yawOffset = GG.yawOffset, this.pitchOffset = GG.pitchOffset, this.idleMs = GG.idleMs)
      }
      update(GG, bG) {
        const ZG = this.limits;
        if (!ZG) return;
        const wG = Number.isFinite(bG.SF) ? bG.SF : 0,
          SG = Number.isFinite(bG.kF) ? bG.kF : 0;
        if (bG.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: bG.pointedAt.heading,
          pitch: bG.pointedAt.pitch
        };
        else if (0 !== wG || 0 !== SG) this.idleMs = 0, this.yawOffset += wG, this.pitchOffset += SG;
        else {
          const bG = Math.max(0, this.idleMs + GG - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += GG, void 0 !== ZG.returnMs && bG > 0) {
            const GG = ZG.returnMs > 0 ? Math.exp(-3 * bG / ZG.returnMs) : 0;
            this.yawOffset *= GG, this.pitchOffset *= GG
          }
        }
        this.clampOffsets(ZG)
      }
      clampOffsets(GG) {
        if (GG.maxYaw >= 180) this.yawOffset = (0, SG.x)(0, this.yawOffset);
        else {
          const bG = (0, VG.j)(GG.maxYaw);
          this.yawOffset = Math.max(-bG, Math.min(bG, this.yawOffset))
        }
        const bG = (0, VG.j)(GG.maxPitch);
        this.pitchOffset = Math.max(-bG, Math.min(bG, this.pitchOffset))
      }
      apply(GG, bG) {
        this.pointedAt && this.limits && (this.yawOffset = (0, SG.x)(GG.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - GG.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const ZG = (0, SG.h)(GG.pitch + this.pitchOffset);
        this.pitchOffset = ZG - GG.pitch, bG.heading = (0, SG.w)(GG.heading + this.yawOffset), bG.pitch = ZG
      }
      unapply(GG, bG) {
        bG.heading = (0, SG.w)(GG.heading - this.yawOffset), bG.pitch = (0, SG.h)(GG.pitch - this.pitchOffset)
      }
    }
    const JG = 1e-6;

    function rG(GG) {
      return Math.sqrt(GG[0] * GG[0] + GG[1] * GG[1] + GG[2] * GG[2])
    }

    function zG(GG, bG, ZG, wG, SG) {
      const LG = SG * SG,
        yG = LG * SG;
      return (2 * yG - 3 * LG + 1) * GG + (yG - 2 * LG + SG) * bG + (-2 * yG + 3 * LG) * ZG + (yG - LG) * wG
    }

    function EG(GG, bG, ZG, wG, SG) {
      const LG = SG * SG;
      return (6 * LG - 6 * SG) * GG + (3 * LG - 4 * SG + 1) * bG + (-6 * LG + 6 * SG) * ZG + (3 * LG - 2 * SG) * wG
    }

    function oG(GG, bG) {
      const ZG = bG[0] - GG[0],
        wG = bG[1] - GG[1],
        SG = bG[2] - GG[2];
      return Math.sqrt(ZG * ZG + wG * wG + SG * SG)
    }

    function XG(GG, bG, ZG, wG, SG, LG) {
      for (let yG = 0; yG < 3; yG++) LG[yG] = SG ? GG[yG] * wG : ZG[yG] - bG[yG];
      return SG && function(GG, bG) {
        const ZG = rG(GG);
        if (ZG > bG) {
          const wG = bG / ZG;
          GG[0] *= wG, GG[1] *= wG, GG[2] *= wG
        }
      }(LG, 3 * oG(bG, ZG)), LG
    }

    function uG(GG, bG, ZG, wG) {
      for (let SG = 0; SG < 3; SG++) wG[SG] = 6 * (bG[SG] - GG[SG]) - 2 * ZG[SG];
      if (rG(wG) < JG)
        for (let SG = 0; SG < 3; SG++) wG[SG] = bG[SG] - GG[SG];
      return wG
    }

    function iG(GG, bG) {
      return [2 * bG[0] - GG[0], 2 * bG[1] - GG[1], 2 * bG[2] - GG[2]]
    }

    function CG(GG, bG, ZG, wG, SG, LG, yG) {
      if (!LG && !yG) return 0;
      const kG = LG ? GG : 2 * bG - ZG,
        UG = yG ? ZG : 2 * bG - GG,
        YG = LG ? wG : SG,
        VG = yG ? SG : wG,
        pG = (bG - kG) / YG,
        fG = (UG - bG) / VG;
      if (pG * fG <= 0) return 0;
      const QG = (UG - kG) / (YG + VG),
        KG = 3 * Math.min(Math.abs(pG), Math.abs(fG));
      return Math.max(-KG, Math.min(KG, QG))
    }

    function WG(GG, bG, ZG, wG, SG, LG, yG) {
      const {
        u: kG,
        segmentMs: UG
      } = GG;
      if (!GG.curved) return ZG + (wG - ZG) * kG;
      return zG(ZG, CG(bG, ZG, wG, GG.beforeMs, UG, LG, !0) * UG, wG, CG(ZG, wG, SG, UG, GG.afterMs, !0, yG) * UG, kG)
    }

    function mG(GG) {
      return Math.abs(GG.pitch) >= SG.b
    }
    class IG {
      constructor(GG, bG, ZG, wG, SG) {
        this.nodes = GG, this.prevNodes = ZG, this.nextNodes = wG, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = GG.map(((GG, ZG) => this.nodeTangent(bG, SG, ZG)))
      }
      sample(GG, bG, ZG) {
        const {
          index: wG,
          toIndex: LG,
          segmentMs: yG,
          curved: kG
        } = GG, UG = this.fromAngles, YG = this.toAngles, VG = this.nodeAngles(wG, ZG.position, bG, UG), pG = this.nodeAngles(LG, ZG.position, bG, YG);
        if (yG > 0 && "aim" !== VG && "aim" !== pG && this.liveTangent(GG, UG)) return ZG.heading = (0, SG.w)(UG.heading), void(ZG.pitch = UG.pitch);
        if ("none" === VG && "none" === pG) return;
        !kG && yG > 0 && ("tangent" === VG && this.liveTangent(GG, UG), "tangent" === pG && this.liveTangent(GG, YG)), "none" === VG ? (0, SG.j)(YG, UG) : "none" === pG && (0, SG.j)(UG, YG);
        const fG = kG && GG.beforeIndex >= 0 && "none" !== this.nodeAngles(GG.beforeIndex, ZG.position, bG, this.beforeAngles),
          QG = kG && GG.afterIndex >= 0 && "none" !== this.nodeAngles(GG.afterIndex, ZG.position, bG, this.afterAngles),
          KG = (0, SG.z)(UG.heading, YG.heading),
          hG = WG(GG, fG ? (0, SG.z)(UG.heading, this.beforeAngles.heading) : 0, UG.heading, KG, QG ? (0, SG.z)(KG, this.afterAngles.heading) : 0, fG, QG);
        ZG.heading = (0, SG.w)(hG), ZG.pitch = (0, SG.h)(WG(GG, this.beforeAngles.pitch, UG.pitch, YG.pitch, this.afterAngles.pitch, fG, QG))
      }
      nodeAngles(GG, bG, ZG, wG) {
        const SG = this.rawNodeAngles(GG, bG, ZG, wG);
        return "none" !== SG && mG(wG) && !this.borrowHeading(this.prevNodes[GG], bG, ZG, wG) && this.borrowHeading(this.nextNodes[GG], bG, ZG, wG), SG
      }
      borrowHeading(GG, bG, ZG, wG) {
        const SG = this.borrowedAngles;
        return !(GG < 0 || "none" === this.rawNodeAngles(GG, bG, ZG, SG) || mG(SG)) && (wG.heading = SG.heading, !0)
      }
      rawNodeAngles(GG, bG, ZG, wG) {
        const LG = this.nodes[GG].keyframe;
        if (LG.lookDirection) return (0, SG.n)(LG.lookDirection, wG), "aim";
        if (void 0 !== LG.lookAt) {
          const GG = ZG(LG.lookAt);
          if (GG) return (0, SG.s)(bG, GG, wG), "aim"
        }
        const yG = this.tangents[GG];
        return yG ? ((0, SG.j)(yG, wG), "tangent") : "none"
      }
      liveTangent(GG, bG) {
        const ZG = this.nodes[GG.index].position,
          wG = this.nodes[GG.toIndex].position,
          LG = this.derivative;
        for (let SG = 0; SG < 3; SG++) LG[SG] = EG(ZG[SG], GG.fromTangent[SG], wG[SG], GG.toTangent[SG], GG.u);
        return rG(LG) > 1e-9 ? ((0, SG.n)(LG, bG), !0) : !(oG(ZG, wG) < JG) && ((0, SG.n)(uG(ZG, wG, GG.u < .5 ? GG.toTangent : GG.fromTangent, LG), bG), !0)
      }
      nodeTangent(GG, bG, ZG) {
        var wG;
        const LG = GG[ZG];
        if (rG(LG) > 1e-9) return (0, SG.n)(LG, {
          heading: 0,
          pitch: 0
        });
        const yG = null !== (wG = this.restDirectionTo(ZG, ZG + 1, GG, bG)) && void 0 !== wG ? wG : this.restDirectionTo(ZG, ZG - 1, GG, bG);
        return yG ? (0, SG.n)(yG, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(GG, bG, ZG, wG) {
        const SG = this.nodes[GG],
          LG = this.nodes[bG];
        if (!LG || oG(SG.position, LG.position) < JG) return null;
        const [yG, kG] = bG > GG ? [SG, LG] : [LG, SG], UG = XG(ZG[bG], yG.position, kG.position, kG.timeMs - yG.timeMs, wG, [0, 0, 0]);
        return uG(yG.position, kG.position, UG, [0, 0, 0])
      }
    }

    function FG(GG, bG) {
      const ZG = GG.lookDirection || bG.lookDirection ? function(GG, bG) {
        if (!GG || !bG) return GG === bG;
        const ZG = rG(GG),
          wG = rG(bG);
        return Math.hypot(GG[0] / ZG - bG[0] / wG, GG[1] / ZG - bG[1] / wG, GG[2] / ZG - bG[2] / wG) < JG
      }(GG.lookDirection, bG.lookDirection) : (wG = GG.lookAt, SG = bG.lookAt, "object" !== typeof wG || "object" !== typeof SG ? wG === SG : oG(wG, SG) < JG);
      var wG, SG;
      return oG(GG.position, bG.position) < JG && GG.fov === bG.fov && ZG
    }
    class vG {
      constructor(GG, bG, ZG) {
        if (this.smooth = bG, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === GG.length) throw new Error("A camera path needs at least one keyframe");
        for (let LG = 1; LG < GG.length; LG++)
          if (!(GG[LG].timeMs > GG[LG - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = GG.map((GG => {
          var bG;
          return {
            timeMs: GG.timeMs,
            position: [...GG.position],
            keyframe: GG,
            easing: (0, LG.k)(null !== (bG = GG.easing) && void 0 !== bG ? bG : "linear")
          }
        }));
        const wG = this.nodes[0],
          SG = this.nodes[this.nodes.length - 1],
          yG = ZG && this.nodes.length > 1;
        yG && !FG(wG.keyframe, SG.keyframe) && this.nodes.push({
          ...wG,
          timeMs: SG.timeMs + (SG.timeMs - wG.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = yG ? this.nodes[this.nodes.length - 1].timeMs - wG.timeMs : 0, this.prevNodes = this.nodes.map(((GG, bG) => this.neighbour(bG, -1))), this.nextNodes = this.nodes.map(((GG, bG) => this.neighbour(bG, 1))), this.prevGaps = this.prevNodes.map(((GG, bG) => GG >= 0 ? this.gapMs(bG, -1) : 0)), this.nextGaps = this.nextNodes.map(((GG, bG) => GG >= 0 ? this.gapMs(bG, 1) : 0)), this.velocities = this.nodes.map(((GG, bG) => {
          const ZG = this.prevNodes[bG],
            wG = this.nextNodes[bG];
          return function(GG, bG, ZG, wG, SG, LG) {
            if (LG[0] = 0, LG[1] = 0, LG[2] = 0, !GG && !ZG) return LG;
            const yG = null !== GG && void 0 !== GG ? GG : iG(null !== ZG && void 0 !== ZG ? ZG : bG, bG),
              kG = null !== ZG && void 0 !== ZG ? ZG : iG(null !== GG && void 0 !== GG ? GG : bG, bG),
              UG = GG ? wG : SG,
              YG = ZG ? SG : wG,
              VG = oG(yG, bG),
              pG = oG(bG, kG);
            if (VG < JG || pG < JG) return LG;
            const fG = Math.sqrt(VG),
              QG = Math.sqrt(pG),
              KG = (fG + QG) / (UG + YG);
            for (let hG = 0; hG < 3; hG++) {
              const GG = (bG[hG] - yG[hG]) / fG - (kG[hG] - yG[hG]) / (fG + QG) + (kG[hG] - bG[hG]) / QG;
              LG[hG] = GG * KG
            }
            return LG
          }(ZG >= 0 ? this.nodes[ZG].position : null, GG.position, wG >= 0 ? this.nodes[wG].position : null, this.prevGaps[bG], this.nextGaps[bG], [0, 0, 0])
        })), this.aim = new IG(this.nodes, this.velocities, this.prevNodes, this.nextNodes, bG)
      }
      sample(GG, bG, ZG, wG) {
        const SG = this.findSegment(this.pathTime(GG));
        this.samplePosition(SG, wG.position), this.aim.sample(SG, bG, wG);
        const {
          beforeIndex: LG,
          afterIndex: yG
        } = SG;
        wG.fov = WG(SG, LG >= 0 ? this.fovAt(LG, ZG) : 0, this.fovAt(SG.index, ZG), this.fovAt(SG.toIndex, ZG), yG >= 0 ? this.fovAt(yG, ZG) : 0, LG >= 0, yG >= 0)
      }
      pathTime(GG) {
        const bG = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || GG <= bG) return GG;
        const ZG = GG - bG;
        return bG + ZG - this.loopMs * Math.floor(ZG / this.loopMs)
      }
      findSegment(GG) {
        const bG = this.nodes,
          ZG = this.segment;
        let wG = ZG.index;
        for (GG < bG[wG].timeMs && (wG = 0); wG < bG.length - 2 && bG[wG + 1].timeMs <= GG;) wG++;
        const SG = Math.min(wG + 1, bG.length - 1),
          yG = bG[SG].timeMs - bG[wG].timeMs;
        return ZG.index = wG, ZG.toIndex = SG, ZG.segmentMs = yG, ZG.u = yG > 0 ? (0, LG.j)((GG - bG[wG].timeMs) / yG, bG[wG].easing) : 1, ZG.curved = this.smooth && yG > 0, ZG.beforeIndex = this.prevNodes[wG], ZG.afterIndex = this.nextNodes[SG], ZG.beforeMs = this.prevGaps[wG], ZG.afterMs = this.nextGaps[SG], ZG
      }
      samplePosition(GG, bG) {
        const {
          fromTangent: ZG,
          toTangent: wG,
          curved: SG
        } = GG, LG = this.nodes[GG.index].position, yG = this.nodes[GG.toIndex].position;
        XG(this.velocities[GG.index], LG, yG, GG.segmentMs, SG, ZG), XG(this.velocities[GG.toIndex], LG, yG, GG.segmentMs, SG, wG);
        const kG = GG.u;
        for (let UG = 0; UG < 3; UG++) bG[UG] = SG ? zG(LG[UG], ZG[UG], yG[UG], wG[UG], kG) : LG[UG] + (yG[UG] - LG[UG]) * kG
      }
      fovAt(GG, bG) {
        var ZG;
        return null !== (ZG = this.nodes[GG].keyframe.fov) && void 0 !== ZG ? ZG : bG
      }
      neighbour(GG, bG) {
        const ZG = this.nodes.length - 1,
          wG = GG + bG;
        return wG >= 0 && wG <= ZG ? wG : this.loopMs <= 0 || ZG < 2 ? -1 : wG < 0 ? ZG - 1 : 1
      }
      gapMs(GG, bG) {
        const ZG = this.nodes.length - 1;
        if (1 === bG) {
          const bG = GG === ZG ? 0 : GG;
          return this.nodes[bG + 1].timeMs - this.nodes[bG].timeMs
        }
        const wG = 0 === GG ? ZG : GG;
        return this.nodes[wG].timeMs - this.nodes[wG - 1].timeMs
      }
    }
    class aG {
      constructor(GG) {
        this.Op = GG, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = bG => GG.getEntityPosition(bG), this.readAimPoint = bG => GG.getEntityAimPoint(bG)
      }
      aimPoint(GG) {
        return "string" !== typeof GG ? (0, UG.n)(GG, 3) ? GG : null : this.resolve(GG, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(GG) {
        const bG = "string" === typeof GG ? this.Op.getEntityAimPoint(GG) : GG;
        return bG && (0, UG.n)(bG, 3) ? bG : null
      }
      feetPosition(GG) {
        return this.resolve(GG, this.readFeet, this.lastFeet)
      }
      heading(GG) {
        const bG = this.Op.getEntityHeading(GG);
        if (null !== bG && Number.isFinite(bG)) return this.lastHeadings.set(GG, bG), bG;
        const ZG = this.lastHeadings.get(GG);
        return void 0 !== ZG ? ZG : GG === this.Op.localPlayerId ? 0 : this.heading(this.Op.localPlayerId)
      }
      resolve(GG, bG, ZG) {
        const wG = bG(GG);
        let SG = ZG.get(GG);
        return wG && (0, UG.n)(wG, 3) ? (SG || (SG = [0, 0, 0], ZG.set(GG, SG)), SG[0] = wG[0], SG[1] = wG[1], SG[2] = wG[2], SG) : SG || (GG === this.Op.localPlayerId ? null : this.resolve(this.Op.localPlayerId, bG, ZG))
      }
    }

    function cG(GG) {
      return {
        heading: GG.heading,
        pitch: GG.pitch
      }
    }

    function lG(GG, bG) {
      Number.isFinite(GG.heading) && Number.isFinite(GG.pitch) || (0, SG.j)(bG, GG)
    }

    function jG(GG, bG, ZG, wG, LG) {
      if (bG) return void(0, SG.n)(bG, LG);
      const yG = wG.aimPoint(ZG);
      yG && (0, SG.s)(GG, yG, LG)
    }
    class PG {
      constructor(GG, bG, ZG, wG) {
        this.settings = GG, this.Op = bG, this.targets = ZG, this.base = void 0, this.base = cG(wG)
      }
      update(GG, bG, ZG) {
        var wG;
        const SG = this.settings;
        (0, UG.h)(SG.position, ZG.position), jG(SG.position, SG.lookDirection, null !== (wG = SG.lookAt) && void 0 !== wG ? wG : this.Op.localPlayerId, this.targets, this.base), bG.apply(this.base, ZG), ZG.fov = QG(SG, this.Op)
      }
      continueFrom(GG) {
        GG instanceof PG && (0, SG.j)(GG.base, this.base)
      }
      reset(GG) {
        lG(this.base, GG)
      }
    }
    class MG {
      constructor(GG, bG, ZG, wG) {
        this.settings = GG, this.Op = bG, this.targets = ZG, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Sd = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = cG(wG), this.goal = [...wG.position]
      }
      update(GG, bG, ZG) {
        var wG, SG, LG;
        const yG = this.settings,
          kG = null !== (wG = yG.target) && void 0 !== wG ? wG : this.Op.localPlayerId,
          YG = this.targets.feetPosition(kG);
        let VG = !1;
        YG && (VG = this.foundFeet && oG(this.lastFeet, YG) > 32 + .1 * GG, (0, UG.h)(YG, this.lastFeet), this.foundFeet = !0, this.placeGoal(YG, kG));
        const pG = null !== (SG = yG.smoothMs) && void 0 !== SG ? SG : 0;
        !this.started || pG < 1 || VG ? ((0, UG.h)(this.goal, this.smoothed), this.Sd.fill(0), this.started = !0) : KG(this.smoothed, this.Sd, this.goal, pG, GG), VG && (this.distance = -1), (0, UG.h)(this.smoothed, ZG.position);
        const fG = !0 === yG.avoidTerrain ? this.pullIn(kG, GG, ZG) : 1;
        let hG = this.goal;
        if ("target" === yG.offsetSpace) hG = ZG.position;
        else if (fG < 1) {
          hG = this.aimOrigin;
          for (let GG = 0; GG < 3; GG++) hG[GG] = ZG.position[GG] + (this.goal[GG] - this.smoothed[GG]) * fG
        }
        jG(hG, yG.lookDirection, null !== (LG = yG.lookAt) && void 0 !== LG ? LG : kG, this.targets, this.base), bG.apply(this.base, ZG), ZG.fov = QG(yG, this.Op)
      }
      continueFrom(GG) {
        GG instanceof MG && (0, wG.n)(GG.settings.target, this.settings.target) && ((0, SG.j)(GG.base, this.base), (0, UG.h)(GG.goal, this.goal), (0, UG.h)(GG.lastFeet, this.lastFeet), this.foundFeet = GG.foundFeet, (0, UG.h)(GG.smoothed, this.smoothed), (0, UG.h)(GG.Sd, this.Sd), this.started = GG.started, !0 === GG.settings.avoidTerrain && (this.distance = GG.distance))
      }
      reset(GG) {
        lG(this.base, GG), this.Sd.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(GG, bG, ZG) {
        const wG = this.targets.aimPoint(GG);
        if (!wG) return 1;
        const SG = ZG.position,
          LG = oG(wG, SG);
        if (!(LG > 0)) return 1;
        const yG = this.toCamera;
        for (let UG = 0; UG < 3; UG++) yG[UG] = (SG[UG] - wG[UG]) / LG;
        const kG = function(GG, bG, ZG) {
          return GG < 0 || bG < GG ? bG : bG + (GG - bG) * Math.exp(-ZG / 150)
        }(this.distance, function(GG, bG, ZG, wG) {
          const SG = GG.raycastTerrain(bG, ZG, wG);
          return null !== SG && Number.isFinite(SG) ? Math.min(wG, Math.max(0, SG - .2)) : wG
        }(this.Op, wG, yG, LG), bG);
        if (LG - kG < .001) return this.distance = -1, 1;
        this.distance = kG;
        for (let UG = 0; UG < 3; UG++) SG[UG] = wG[UG] + yG[UG] * kG;
        return kG / LG
      }
      placeGoal(GG, bG) {
        const ZG = this.settings.offset;
        let wG = ZG[0],
          SG = ZG[2];
        if ("target" === this.settings.offsetSpace) {
          const GG = this.targets.heading(bG),
            LG = Math.cos(GG),
            yG = Math.sin(GG);
          wG = ZG[0] * LG + ZG[2] * yG, SG = -ZG[0] * yG + ZG[2] * LG
        }
        this.goal[0] = GG[0] + wG, this.goal[1] = GG[1] + ZG[1], this.goal[2] = GG[2] + SG
      }
    }
    class AG {
      constructor(GG, bG, ZG, wG) {
        var SG, LG;
        this.settings = GG, this.Op = bG, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = GG.keyframes.length > 0 ? new vG(GG.keyframes, null === (SG = GG.smooth) || void 0 === SG || SG, null !== (LG = GG.loop) && void 0 !== LG && LG) : null, this.base = (0, UG.e)(wG, (0, UG.j)()), this.resolveTarget = GG => ZG.aimPoint(GG)
      }
      update(GG, bG, ZG) {
        this.elapsedMs += GG;
        const wG = QG(this.settings, this.Op);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, wG, this.base) : this.base.fov = wG, (0, UG.h)(this.base.position, ZG.position), ZG.fov = this.base.fov, bG.apply(this.base, ZG)
      }
      continueFrom(GG) {
        GG instanceof AG && (0, wG.n)(GG.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = GG.elapsedMs, (0, UG.e)(GG.base, this.base))
      }
      reset(GG) {
        lG(this.base, GG), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function sG(GG, bG) {
      return (0, wG.p)(GG, bG)
    }
    class qG {
      constructor(GG, bG, ZG) {
        var wG;
        this.settings = GG, this.Op = bG, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const SG = null !== ZG && ZG.settings.mode === GG.mode,
          LG = SG ? ZG.pose : bG.getDefaultPose();
        this.pose = (0, UG.e)(LG, (0, UG.j)()), this.lastGoodPose = (0, UG.e)(SG ? ZG.lastGoodPose : LG, (0, UG.j)()), this.look = new dG(GG.playerLook), this.targets = null !== (wG = null === ZG || void 0 === ZG ? void 0 : ZG.targets) && void 0 !== wG ? wG : new aG(bG);
        const yG = (0, UG.e)(LG, (0, UG.j)());
        SG && ZG.look.unapply(yG, yG), this.mode = function(GG, bG, ZG, wG) {
          switch (GG.mode) {
            case "fixed":
              return new PG(GG, bG, ZG, wG);
            case "follow":
              return new MG(GG, bG, ZG, wG);
            case "path":
              return new AG(GG, bG, ZG, wG);
            case "frame":
              return new hG(GG, bG, ZG, wG)
          }
        }(GG, bG, this.targets, yG), SG && (this.look.continueFrom(ZG.look), this.mode.continueFrom(ZG.mode))
      }
      update(GG, bG) {
        return this.look.update(GG, bG), this.mode.update(GG, this.look, this.pose), (0, UG.l)(this.pose) ? (0, UG.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, UG.e)(this.lastGoodPose, this.pose), this.mode.reset((0, UG.l)(this.lastGoodPose) ? this.lastGoodPose : this.Op.getDefaultPose())), this.pose
      }
    }

    function nG(GG) {
      return [0, 0, GG[2], GG[3]]
    }
    class gG {
      constructor(GG) {
        this.Op = GG, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new kG, this.shot = null, this.blend = null, this.mixed = (0, UG.j)(), this.output = (0, UG.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(GG) {
        const bG = (0, YG.c)(GG);
        if ((0, wG.n)(bG, this.pending ? this.pending.settings : this.settings)) return;
        const ZG = sG(this.settings, bG);
        if (void 0 !== bG.transition && !ZG) return this.pending = {
          settings: bG,
          shot: "default" === bG.mode ? null : new qG(bG, this.Op, null)
        }, void this.fade.fadeOut(bG.transition);
        const SG = null !== this.pending;
        this.pending = null, !SG && ZG || this.fade.fadeIn(wG.h.minTransitionFadeMs), this.show(bG, !1)
      }
      show(GG, bG) {
        var ZG, SG;
        if ((0, wG.n)(GG, this.settings)) return;
        const yG = !bG && sG(this.settings, GG);
        this.settings = GG;
        const kG = null !== this.blend && this.blend.elapsedMs > 0,
          YG = (0, UG.e)(this.hasOutput ? this.output : this.Op.getDefaultPose(), (0, UG.j)());
        if (this.shot = "default" === GG.mode ? null : new qG(GG, this.Op, bG ? null : this.shot), yG) return;
        const VG = bG || !this.shot && !this.hasOutput ? 0 : null !== (ZG = GG.blendInMs) && void 0 !== ZG ? ZG : 0;
        if (VG <= 0) return void(this.blend = null);
        const pG = (0, LG.k)(null !== (SG = GG.blendEasing) && void 0 !== SG ? SG : "easeInOut");
        this.blend = {
          from: YG,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: VG,
          easing: kG ? nG(pG) : pG
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
      update(GG, bG) {
        const ZG = Number.isFinite(GG) && GG > 0 ? GG : 0;
        if (this.fade.advance(ZG) && null !== this.pending) {
          const {
            settings: GG
          } = this.pending;
          this.pending = null, this.show(GG, !0)
        }
        this.loadingPositions.length = 0;
        const wG = this.pending;
        if (null !== wG && void 0 !== wG && wG.shot) {
          const GG = "path" === wG.settings.mode ? 0 : ZG;
          this.noteLoadingPosition(wG.shot.update(GG, UG.c).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const yG = this.shot ? this.shot.update(ZG, bG) : this.Op.getDefaultPose();
        this.shot && this.noteLoadingPosition(yG.position);
        const kG = this.blend;
        if (!kG) return this.writeOutput(yG);
        kG.elapsedMs += ZG;
        const YG = Math.min(1, kG.elapsedMs / kG.durationMs);
        if (kG.headingDelta = Number.isFinite(kG.headingDelta) ? (0, SG.z)(kG.headingDelta, yG.heading - kG.from.heading) : (0, SG.x)(kG.from.heading, yG.heading), (0, UG.o)(kG.from, yG, kG.headingDelta, (0, LG.j)(YG, kG.easing), this.mixed), YG >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else kG.fromScripted && this.noteLoadingPosition(kG.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(GG) {
        if (GG.every(Number.isFinite)) {
          const bG = this.loadingPositions;
          bG.push((0, UG.h)(GG, this.loadingSlots[bG.length]))
        }
      }
      writeOutput(GG) {
        const bG = this.output;
        (0, UG.l)(GG) ? (0, UG.e)(GG, bG) : this.hasOutput || (0, UG.e)(this.Op.getDefaultPose(), bG), bG.pitch = (0, SG.h)(bG.pitch);
        const ZG = this.Op.getDefaultFov(),
          LG = Number.isFinite(ZG) && ZG > 0 && ZG < 180,
          yG = LG ? Math.min(wG.h.minFov, ZG) : wG.h.minFov,
          kG = LG ? Math.max(wG.h.maxFov, ZG) : wG.h.maxFov;
        return bG.fov = Number.isFinite(bG.fov) ? Math.min(kG, Math.max(yG, bG.fov)) : kG, this.hasOutput = !0, bG
      }
    }
  },
  39582: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      e: () => kG,
      h: () => yG,
      j: () => LG,
      l: () => YG,
      n: () => UG,
      o: () => VG
    });
    var wG = ZG(39586);
    const SG = {
      SF: 0,
      kF: 0
    };

    function LG() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function yG(GG, bG) {
      return bG[0] = GG[0], bG[1] = GG[1], bG[2] = GG[2], bG
    }

    function kG(GG, bG) {
      return yG(GG.position, bG.position), bG.heading = GG.heading, bG.pitch = GG.pitch, bG.fov = GG.fov, bG
    }

    function UG(GG, bG) {
      return Array.isArray(GG) && GG.length === bG && GG.every(Number.isFinite)
    }

    function YG(GG) {
      return UG(GG.position, 3) && Number.isFinite(GG.heading) && Number.isFinite(GG.pitch) && Number.isFinite(GG.fov)
    }

    function VG(GG, bG, ZG, SG, LG) {
      for (let wG = 0; wG < 3; wG++) LG.position[wG] = GG.position[wG] + (bG.position[wG] - GG.position[wG]) * SG;
      return LG.heading = (0, wG.w)(GG.heading + ZG * SG), LG.pitch = GG.pitch + (bG.pitch - GG.pitch) * SG, LG.fov = GG.fov + (bG.fov - GG.fov) * SG, LG
    }
  },
  39614: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => uG,
      f: () => fG
    });
    var wG = ZG(39610),
      SG = ZG(39582);
    const LG = wG.g,
      yG = wG.j;

    function kG(GG, bG, ZG, wG) {
      return Number.isFinite(GG) ? Math.min(ZG, Math.max(bG, GG)) : wG
    }

    function UG(GG, bG, ZG) {
      return void 0 !== GG && Number.isFinite(GG) ? Math.min(ZG, Math.max(bG, GG)) : void 0
    }

    function YG(GG) {
      const bG = wG.h.maxCoordinate;
      return [Math.min(bG, Math.max(-bG, GG[0])), Math.min(bG, Math.max(-bG, GG[1])), Math.min(bG, Math.max(-bG, GG[2]))]
    }

    function VG(GG) {
      return "string" === typeof GG ? GG : (0, SG.n)(GG, 3) ? YG(GG) : void 0
    }
    const pG = new RegExp(wG.l);

    function fG(GG) {
      return "string" === typeof GG && pG.test(GG)
    }

    function QG(GG) {
      const bG = [];
      if (!Array.isArray(GG)) return bG;
      for (const ZG of GG.slice(0, wG.h.maxFrameTargets)) {
        const GG = VG(ZG);
        void 0 === GG || "string" === typeof GG && !fG(GG) || bG.push(GG)
      }
      return bG
    }

    function KG(GG) {
      if (!(0, SG.n)(GG, 3)) return;
      const bG = Math.max(Math.abs(GG[0]), Math.abs(GG[1]), Math.abs(GG[2])),
        ZG = Math.hypot(GG[0] / bG, GG[1] / bG, GG[2] / bG);
      return 0 === bG || bG * ZG < wG.h.minDirectionLength ? void 0 : [GG[0] / bG / ZG, GG[1] / bG / ZG, GG[2] / bG / ZG]
    }

    function hG(GG) {
      if (void 0 !== GG) return "string" === typeof GG ? LG.includes(GG) ? GG : void 0 : (0, SG.n)(GG, 4) ? [kG(GG[0], 0, 1, 0), kG(GG[1], wG.h.minEasingY, wG.h.maxEasingY, 0), kG(GG[2], 0, 1, 1), kG(GG[3], wG.h.minEasingY, wG.h.maxEasingY, 1)] : "linear"
    }

    function dG(GG) {
      if (GG) return {
        maxYaw: kG(GG.maxYaw, 0, wG.h.maxPlayerLook, 0),
        maxPitch: kG(GG.maxPitch, 0, wG.h.maxPlayerLook, 0),
        returnMs: UG(GG.returnMs, 0, wG.h.maxReturnMs)
      }
    }
    const JG = new RegExp(wG.e);

    function rG(GG) {
      var bG;
      if ("object" !== typeof GG || null === GG) return;
      const ZG = wG.h.maxTransitionMs,
        SG = wG.h.minTransitionFadeMs;
      return {
        colour: "string" === typeof GG.colour && JG.test(GG.colour) ? GG.colour : wG.f,
        outMs: kG(GG.outMs, SG, ZG, SG),
        holdMs: kG(null !== (bG = GG.holdMs) && void 0 !== bG ? bG : 0, 0, ZG, 0),
        inMs: kG(GG.inMs, SG, ZG, SG)
      }
    }

    function zG(GG) {
      return !0 === GG || void 0
    }

    function EG(GG) {
      if ("object" !== typeof GG || null === GG) return !1;
      const bG = GG.lookAt;
      return Number.isFinite(GG.timeMs) && (0, SG.n)(GG.position, 3) && (void 0 === bG || "string" === typeof bG || (0, SG.n)(bG, 3))
    }

    function oG(GG) {
      return {
        ...GG,
        timeMs: kG(GG.timeMs, 0, wG.h.maxPathMs, 0),
        position: YG(GG.position),
        lookAt: VG(GG.lookAt),
        lookDirection: KG(GG.lookDirection),
        fov: UG(GG.fov, wG.h.minFov, wG.h.maxFov),
        easing: hG(GG.easing)
      }
    }

    function XG(GG) {
      const bG = [];
      if (!Array.isArray(GG)) return bG;
      for (const ZG of GG.slice(0, wG.h.maxKeyframes)) {
        if (!EG(ZG)) continue;
        const GG = oG(ZG);
        (0 === bG.length || GG.timeMs > bG[bG.length - 1].timeMs) && bG.push(GG)
      }
      return bG
    }

    function uG(GG) {
      if ("object" !== typeof GG || null === GG) return {
        mode: "default"
      };
      const bG = {
          blendInMs: UG(GG.blendInMs, 0, wG.h.maxBlendInMs),
          blendEasing: hG(GG.blendEasing),
          transition: rG(GG.transition),
          letterbox: zG(GG.letterbox),
          hideHud: zG(GG.hideHud)
        },
        ZG = {
          mode: "default",
          ...bG
        };
      if ("default" === GG.mode || "fixed" === GG.mode && !(0, SG.n)(GG.position, 3)) return ZG;
      const LG = {
        ...bG,
        fov: UG(GG.fov, wG.h.minFov, wG.h.maxFov),
        playerFacing: (pG = GG.playerFacing, yG.includes(pG) ? pG : void 0),
        playerLook: dG(GG.playerLook)
      };
      var pG, fG;
      switch (GG.mode) {
        case "fixed":
          return {
            ...GG, ...LG, position: YG(GG.position), lookAt: VG(GG.lookAt), lookDirection: KG(GG.lookDirection)
          };
        case "follow":
          return {
            ...GG, ...LG, target: "string" === typeof GG.target ? GG.target : void 0, lookAt: VG(GG.lookAt), offset: (fG = GG.offset, Array.isArray(fG) ? [kG(fG[0], -wG.h.maxOffset, wG.h.maxOffset, 0), kG(fG[1], -wG.h.maxOffset, wG.h.maxOffset, 0), kG(fG[2], -wG.h.maxOffset, wG.h.maxOffset, 0)] : [0, 0, 0]), lookDirection: KG(GG.lookDirection), smoothMs: UG(GG.smoothMs, 0, wG.h.maxSmoothMs)
          };
        case "path":
          return {
            ...GG, ...LG, keyframes: XG(GG.keyframes)
          };
        case "frame":
          return {
            ...GG, ...LG, targets: QG(GG.targets), viewHeading: UG(GG.viewHeading, -wG.h.maxFrameHeading, wG.h.maxFrameHeading), viewElevation: UG(GG.viewElevation, 0, wG.h.maxFrameElevation), padding: UG(GG.padding, 0, wG.h.maxFrameDistance), closestDistance: UG(GG.closestDistance, 0, wG.h.maxFrameDistance), furthestDistance: UG(GG.furthestDistance, 0, wG.h.maxFrameDistance), smoothMs: UG(GG.smoothMs, 0, wG.h.maxSmoothMs)
          };
        default:
          return ZG
      }
    }
  },
  39075: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG
    });
    var wG = ZG(1177);

    function SG(GG) {
      const bG = /(\d*\.?\d+)px/.exec(GG);
      return bG ? Number(bG[1]) : null
    }

    function LG(GG) {
      return GG.split(/[\s,]+/).pop()
    }
    let yG = !1;
    const kG = {
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
      drawText: function(GG, bG, wG, kG, UG, YG) {
        if (UG <= 0 || YG <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: VG,
          fontVariant: pG,
          fontWeight: fG,
          fontSize: QG,
          font: KG
        } = this, hG = [VG, pG, fG, `${QG}px`, KG].filter(Boolean).join(" "), dG = [
          [fG, `${QG}px`, LG(KG)].filter(Boolean).join(" "), `${QG}px sans-serif`
        ], JG = GG.font, rG = function(GG, bG, ZG) {
          for (const wG of bG) {
            GG.font = wG;
            const bG = SG(GG.font),
              yG = LG(wG);
            if (null !== bG && Math.abs(bG - ZG) <= .5 && GG.font.toLowerCase().includes(yG.toLowerCase())) return wG
          }
          return null
        }(GG, [hG, ...dG], QG);
        rG !== hG && function(GG, bG, wG) {
          yG || (yG = !0, Promise.resolve().then((() => ZG(1032))).then((ZG => {
            let {
              rh: SG
            } = ZG;
            SG(new Error("A canvas didn't take canvasTxt's font"), {
              font: GG,
              vQ: bG,
              drawnWith: null !== wG && void 0 !== wG ? wG : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(hG, JG, rG);
        const zG = SG(GG.font);
        if (null === rG && null !== zG && zG > 0) {
          const ZG = QG / zG;
          GG.save();
          try {
            return GG.scale(ZG, ZG), {
              height: this.drawLines(GG, bG, wG / ZG, kG / ZG, UG / ZG, YG / ZG, zG).height * ZG
            }
          } finally {
            GG.restore()
          }
        }
        return this.drawLines(GG, bG, wG, kG, UG, YG, QG)
      },
      drawLines: function(GG, bG, ZG, SG, LG, yG, kG) {
        const UG = ZG + LG,
          YG = SG + yG;
        let VG, pG = SG + yG / 2 + kG / 2;
        "right" === this.align ? (VG = UG, GG.textAlign = "right") : "left" === this.align ? (VG = ZG, GG.textAlign = "left") : (VG = ZG + LG / 2, GG.textAlign = "center");
        for (const wG of bG) {
          GG.measureText(wG).width >= LG && (bG = bG.replace(wG, ""))
        }
        bG = (0, wG.R)(bG);
        const fG = [],
          QG = bG.split("\n"),
          KG = this.justify ? GG.measureText("\u200a").width : 0;
        QG.forEach((bG => {
          let ZG = GG.measureText(bG).width;
          if (ZG <= LG) fG.push(bG);
          else {
            let wG = bG;
            const SG = LG;
            let yG, kG, UG;
            for (ZG = GG.measureText(wG).width; ZG > SG;) {
              for (yG = 0, kG = 0, UG = ""; kG < SG;) yG++, UG = wG.substr(0, yG), kG = GG.measureText(UG).width;
              yG--, UG = UG.substr(0, yG);
              const bG = yG;
              if (" " !== wG.substr(yG, 1)) {
                for (;
                  " " !== wG.substr(yG, 1) && 0 !== yG;) yG--;
                0 === yG && (yG = bG), UG = wG.substr(0, yG)
              }
              UG = this.justify ? this.justifyLine(GG, UG, KG, "\u200a", LG) : UG, wG = wG.substr(yG), ZG = GG.measureText(wG).width, fG.push(UG)
            }
            ZG > 0 && fG.push(wG)
          }
        }));
        const hG = this.lineHeight ? this.lineHeight : this.getTextHeight(GG, bG),
          dG = hG * (fG.length - 1),
          JG = dG / 2;
        let rG = SG;
        "top" === this.vAlign ? pG = SG + kG : "bottom" === this.vAlign ? (pG = YG - dG, rG = YG) : (rG = SG + yG / 2, pG -= JG), fG.forEach((bG => {
          bG = bG.trim(), GG.fillText(bG, VG, pG), pG += hG
        })), this.debug && (GG.lineWidth = 3, GG.strokeStyle = "#00909e", GG.strokeRect(ZG, SG, LG, yG), GG.lineWidth = 2, GG.strokeStyle = "#f6d743", GG.beginPath(), GG.moveTo(VG, SG), GG.lineTo(VG, YG), GG.stroke(), GG.strokeStyle = "#ff6363", GG.beginPath(), GG.moveTo(ZG, rG), GG.lineTo(UG, rG), GG.stroke());
        return {
          height: dG + hG
        }
      },
      getTextHeight: function(GG, bG) {
        const ZG = GG.textBaseline;
        GG.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: wG
        } = GG.measureText(bG);
        return GG.textBaseline = ZG, wG
      },
      justifyLine: function(GG, bG, ZG, wG, SG) {
        const LG = bG.trim(),
          yG = GG.measureText(LG).width,
          kG = LG.split(/\s+/).length - 1,
          UG = Math.floor((SG - yG) / ZG);
        if (kG <= 0 || UG <= 0) return LG;
        const YG = Math.floor(UG / kG);
        let VG = UG - kG * YG,
          pG = [];
        for (let fG = 0; fG < YG; fG++) pG.push(wG);
        pG = pG.join("");
        return LG.replace(/\s+/g, (GG => {
          const bG = VG > 0 ? pG + wG : pG;
          return VG--, GG + bG
        }))
      }
    }
  },
  39542: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return bG.set(GG), bG
    }
    ZG.d(bG, {
      b: () => wG
    })
  },
  39080: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => hG,
      f: () => KG,
      g: () => fG,
      h: () => VG,
      i: () => pG
    });
    var wG = ZG(4255),
      SG = ZG(352);
    const LG = 1024,
      yG = 1536,
      kG = 2 * wG.h + 1,
      UG = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      YG = 1.5;

    function VG(GG, bG, ZG) {
      if ("string" !== typeof GG) return bG;
      try {
        const ZG = JSON.parse(GG);
        return ZG && "object" === typeof ZG ? ZG : bG
      } catch (wG) {
        return void 0 !== ZG && console.error(`Couldn't parse ${ZG}`, wG), bG
      }
    }

    function pG(GG) {
      return VG(GG, null, "a leaderboard's rows")
    }

    function fG(GG, bG) {
      var ZG, wG;
      return null !== bG && void 0 !== bG ? bG : {
        status: null !== (ZG = GG.status) && void 0 !== ZG ? ZG : "loading",
        entries: null !== (wG = GG.entries) && void 0 !== wG ? wG : []
      }
    }

    function QG(GG, bG) {
      return "number" === typeof GG && Number.isFinite(GG) && GG > 0 ? GG : bG
    }

    function KG(GG, bG) {
      const ZG = QG(GG.size, 1);
      let wG = QG(GG.width, QG(2.5 * ZG, 2.5)),
        SG = QG(GG.height, QG(3.75 * ZG, 3.75));
      Number.isFinite(LG * SG / wG) && Number.isFinite(yG * wG / SG) || (wG = 2.5, SG = 3.75);
      const kG = SG / wG,
        UG = Math.max(1, Math.min(LG, bG / kG));
      return {
        width: wG,
        height: SG,
        layoutWidth: Math.max(LG, yG / kG),
        layoutHeight: Math.max(yG, LG * kG),
        pixelWidth: Math.round(UG),
        pixelHeight: Math.round(Math.max(1, Math.min(bG, UG * kG)))
      }
    }

    function hG(GG, bG, ZG, yG, VG, pG) {
      GG.setTransform(1, 0, 0, 1, 0, 0), GG.fillStyle = SG.O.defaultNameTagBackground, GG.fillRect(0, 0, bG, ZG), GG.scale(bG / yG.layoutWidth, ZG / yG.layoutHeight), GG.translate((yG.layoutWidth - LG) / 2, 0),
        function(GG, bG, ZG, LG) {
          var yG, VG, pG, fG;
          const {
            top: QG,
            around: KG,
            showPlayerText: hG,
            localPlayerDbId: rG
          } = ZG, {
            whiteUiText: zG,
            grayUiText: EG,
            yellowUiText: oG
          } = SG.O;
          GG.textBaseline = "middle";
          const XG = function(bG, ZG, wG, SG, LG, yG) {
              let kG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              GG.font = `bold ${SG}px 'Jetbrains Mono', monospace`, GG.fillStyle = LG, GG.textAlign = kG;
              let UG = bG.replace(/[\r\n\t]/g, " ");
              if (GG.measureText(UG).width > yG) {
                for (; UG.length > 0 && GG.measureText(`${UG}\u2026`).width > yG;) UG = UG.slice(0, -1);
                UG += "\u2026"
              }
              GG.fillText(UG, ZG, wG)
            },
            uG = bG => {
              GG.fillStyle = zG, GG.globalAlpha = .15, GG.fillRect(24, bG, 976, 2), GG.globalAlpha = 1
            },
            iG = null === rG ? null : (0, SG.uc)(rG),
            CG = GG => null !== iG && GG.playerHash === iG,
            WG = dG(QG.entries, wG.l),
            mG = "ready" === QG.status && WG.length > 0,
            IG = null === KG ? [] : dG(KG.entries, kG),
            FG = WG.some(CG),
            vG = null === KG ? null : function(GG) {
              const bG = GG;
              if (!bG || !Number.isFinite(bG.rank) || !Number.isFinite(bG.tied) || !Number.isFinite(bG.total)) return null;
              return bG
            }(KG.standing),
            aG = IG.find(CG),
            cG = WG.find(CG),
            lG = null === vG || void 0 === aG ? null : {
              value: aG.value,
              rank: vG.rank
            },
            jG = JG(WG, void 0 === cG || cG.value === (null === lG || void 0 === lG ? void 0 : lG.value) ? lG : null),
            PG = JG(IG, lG),
            MG = (GG, bG) => {
              const ZG = GG.findIndex(CG);
              return ZG >= 0 ? bG[ZG] : null
            },
            AG = null !== (yG = null !== (VG = null === vG || void 0 === vG ? void 0 : vG.rank) && void 0 !== VG ? VG : MG(IG, PG)) && void 0 !== yG ? yG : MG(WG, jG);
          GG.font = "bold 34px 'Jetbrains Mono', monospace";
          const sG = [...mG ? jG : [], ...FG ? [] : PG],
            qG = Math.min(280, Math.max(0, ...sG.map((bG => GG.measureText(UG.format(bG)).width)))),
            nG = qG <= 80,
            gG = nG ? 80 : 32 + qG,
            eG = nG ? 148 : gG + 28,
            RG = 660 - eG;
          XG(`TOP ${wG.l}  /  ALL TIME`, 24, 52, 28, EG, 976), XG(hG ? String(null !== (pG = bG.title) && void 0 !== pG ? pG : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, zG, 976), XG("RANK", 32, 174, 28, EG, eG - 40), XG("PLAYER", eG, 174, 28, EG, RG), XG(hG ? String(null !== (fG = bG.scoreLabel) && void 0 !== fG ? fG : "Score").slice(0, 24) : "Score", 992, 174, 28, EG, 304, "right"), uG(202);
          const TG = (LG - 232) / (wG.l + YG + kG),
            HG = 208 + wG.l * TG,
            tG = HG + YG * TG,
            DG = (bG, ZG, wG, SG) => {
              const LG = CG(bG);
              GG.fillStyle = LG ? oG : zG, GG.globalAlpha = LG ? .15 : SG ? .035 : 0, GG.fillRect(24, wG - TG / 2 + 1, 976, TG - 2), GG.globalAlpha = 1;
              const yG = LG ? oG : zG;
              XG(UG.format(ZG), gG, wG, 34, yG, nG ? 80 : qG, nG ? "center" : "right"), XG(hG ? String(bG.name).slice(0, 64) : "Player", eG, wG, 34, yG, RG);
              const kG = UG.format(bG.value);
              XG(GG.measureText(kG).width > 304 ? bG.value.toExponential(6) : kG, 992, wG, 34, yG, 304, "right")
            };
          if (mG)
            for (const [wG, SG] of WG.entries()) DG(SG, jG[wG], 208 + (wG + .5) * TG, wG % 2 === 0);
          else {
            const GG = "error" === QG.status,
              bG = GG ? "Couldn't load leaderboard" : "ready" === QG.status ? "No scores yet" : "Loading leaderboard\u2026",
              ZG = GG ? "Trying again shortly" : "ready" === QG.status ? "Be the first on the board!" : "Fetching the top players",
              wG = (208 + HG) / 2;
            XG(bG, 512, wG - 28, 40, GG ? SG.O.redUiText : zG, 960, "center"), XG(ZG, 512, wG + 27, 30, EG, 960, "center")
          }
          const NG = HG + YG * TG / 2;
          if (null === AG) uG(NG);
          else {
            const bG = null === vG ? 0 : vG.tied - 1,
              ZG = `YOUR RANK #${UG.format(AG)}${null===vG?"":` of ${UG.format(vG.total)}`}`;
            GG.font = "bold 36px 'Jetbrains Mono', monospace";
            const wG = Math.max(20, Math.min(36, Math.floor(34560 / GG.measureText(ZG).width)));
            XG(ZG, 512, NG - (bG > 0 ? 15 : 0), wG, oG, 960, "center"), bG > 0 && XG(`Tied with ${UG.format(bG)} other${1===bG?"":"s"}`, 512, NG + 24, 24, EG, 960, "center")
          }
          if (null === KG) return;
          const OG = tG + kG * TG / 2;
          if (FG) XG(`You're in the top ${wG.l}!`, 512, OG, 40, oG, 960, "center");
          else if (0 === IG.length) XG("You're not on this board yet", 512, OG, 34, EG, 960, "center");
          else
            for (const [wG, SG] of IG.entries()) DG(SG, PG[wG], tG + (wG + .5) * TG, wG % 2 === 0)
        }(GG, VG, pG, yG.layoutHeight)
    }

    function dG(GG, bG) {
      return Array.isArray(GG) ? GG.slice(0, bG).filter((GG => GG && Number.isFinite(GG.rank) && Number.isFinite(GG.value))) : []
    }

    function JG(GG, bG) {
      const ZG = [];
      let wG = !1;
      return GG.forEach(((SG, LG) => {
        if (null !== bG && SG.value === bG.value) return void ZG.push(bG.rank);
        const yG = LG > 0 && SG.value === GG[LG - 1].value;
        yG || (wG = 0 === LG && 1 !== SG.rank), ZG.push(yG && !wG ? ZG[LG - 1] : SG.rank)
      })), ZG
    }
  },
  39262: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      c: () => LG
    });
    const wG = 32;

    function SG(GG) {
      return Array.from(GG).length
    }

    function LG(GG) {
      const bG = [""];
      let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        SG = "";
      const LG = () => {
        bG.push(""), ZG = 0, SG = ""
      };
      for (const yG of GG.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(yG)) LG();
        else if (/^\s+$/.test(yG)) SG += yG;
      else if (yG.length > 0) {
        const GG = Array.from(yG);
        ZG > 0 && ZG + SG.length + GG.length > wG && LG(), bG[bG.length - 1] += SG, ZG += SG.length, SG = "";
        for (const SG of GG) ZG >= wG && LG(), bG[bG.length - 1] += SG, ZG++
      }
      return bG[bG.length - 1] += SG, bG
    }
  },
  39534: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG
    });
    var wG = ZG(36981),
      SG = ZG.n(wG);
    const LG = [1, 1, 1];

    function yG(GG) {
      if (!GG) return [...LG];
      try {
        const [bG, ZG, wG] = SG()(GG).rgb().array();
        return [bG / 255, ZG / 255, wG / 255]
      } catch (bG) {
        return console.warn(`Invalid groundArrowPath colour "${GG}":`, bG), [...LG]
      }
    }
  },
  39636: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG,
      g: () => YG,
      h: () => UG
    });
    var wG = ZG(300),
      SG = ZG(2889);
    const LG = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      yG = 512;

    function kG(GG) {
      var bG;
      const ZG = Math.min(screen.width, screen.height) * (null !== (bG = (0, wG.c)()) && void 0 !== bG ? bG : (0, SG.n)());
      return Math.max(window.innerHeight * (0, SG.n)(), ZG) / (0, SG.r)(GG)
    }

    function UG(GG, bG, ZG) {
      return bG / (2 * Math.tan(ZG / 2)) > yG ? GG : YG(GG)
    }

    function YG(GG) {
      return GG.map((GG => GG.replace(LG, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34326: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      e: () => kG,
      f: () => yG,
      j: () => SG,
      m: () => wG
    });
    const wG = {
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
      SG = "/textures/dayNight/sun.png",
      LG = "/textures/dayNight/moon.png",
      yG = "/textures/dayNight/stars",
      kG = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39610: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      f: () => pG,
      g: () => wG,
      h: () => UG,
      j: () => SG,
      l: () => YG,
      n: () => kG,
      p: () => yG
    });
    const wG = ["linear", "easeIn", "easeOut", "easeInOut"],
      SG = ["movement", "camera", "cursor"],
      LG = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function yG(GG, bG) {
      return kG(GG, bG, LG)
    }

    function kG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (GG === bG || Number.isNaN(GG) && Number.isNaN(bG)) return !0;
      if ("object" !== typeof GG || "object" !== typeof bG || null === GG || null === bG || Array.isArray(GG) !== Array.isArray(bG)) return !1;
      const wG = GG,
        SG = bG;
      for (const LG of new Set([...Object.keys(wG), ...Object.keys(SG)]))
        if (!ZG.includes(LG) && !kG(wG[LG], SG[LG])) return !1;
      return !0
    }
    const UG = {
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
      YG = "^-[1-9][0-9]*$",
      VG = "^#[0-9a-fA-F]{6}$",
      pG = "#000000"
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);