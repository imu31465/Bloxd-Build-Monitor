export const id = 186;
export const ids = [186];
export const modules = {
  38076: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    class FJ {
      constructor(JJ, cJ) {
        this.read = JJ, this.apply = cJ, this.release = null
      }
      turn(JJ, cJ) {
        const ZJ = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: cJ,
          forcedCameraDirection: [JJ[0], JJ[1], JJ[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), cJ + 100),
          transitionMs: ZJ
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(JJ) {
        null !== this.release && (clearTimeout(this.release.timer), JJ && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  37633: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      g: () => UJ
    });
    const FJ = new Map;

    function UJ(JJ, cJ) {
      FJ.set(JJ, cJ)
    }

    function eJ(JJ) {
      return JJ ? FJ.get(JJ) : void 0
    }
  },
  38566: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    var FJ = ZJ(37201);

    function UJ(JJ, cJ, ZJ) {
      var UJ, eJ, XJ, AJ, qJ, jJ, YJ;
      const hJ = (0, FJ.d)(JJ, cJ, ZJ[0], ZJ[1], ZJ[2]),
        DJ = hJ ? null !== (UJ = hJ.textCell) && void 0 !== UJ ? UJ : hJ.rect.anchor : ZJ,
        sJ = cJ(DJ[0], DJ[1], DJ[2]);
      return {
        pos: [ZJ[0], ZJ[1], ZJ[2]],
        noticeboardSpan: hJ && {
          width: hJ.rect.width,
          height: hJ.rect.height
        },
        text: null !== (eJ = null === sJ || void 0 === sJ || null === (XJ = sJ.persisted) || void 0 === XJ || null === (AJ = XJ.shared) || void 0 === AJ ? void 0 : AJ.text) && void 0 !== eJ ? eJ : "",
        textSize: null !== (qJ = null === sJ || void 0 === sJ || null === (jJ = sJ.persisted) || void 0 === jJ || null === (YJ = jJ.shared) || void 0 === YJ ? void 0 : YJ.textSize) && void 0 !== qJ ? qJ : null
      }
    }
  },
  37496: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      switch (JJ.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    ZJ.d(cJ, {
      e: () => UJ,
      f: () => eJ,
      j: () => FJ
    });
    const UJ = 4,
      eJ = 3
  },
  38103: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      f: () => eJ
    });
    var FJ = ZJ(235);
    const UJ = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class eJ {
      constructor(JJ) {
        this.importGame = JJ, this.loads = new Map, this.loaded = new Map
      }
      load(JJ) {
        const cJ = (0, FJ.Jb)(JJ);
        if (!UJ.has(cJ)) return Promise.resolve(void 0);
        let ZJ = this.loads.get(cJ);
        return ZJ || (ZJ = this.importGame(cJ).then((JJ => {
          const ZJ = JJ.default;
          if ("function" !== typeof ZJ) throw new Error(`${cJ}'s client code has no default-exported factory`);
          return this.loaded.set(cJ, ZJ), ZJ
        })).catch((JJ => {
          throw this.loads.delete(cJ), JJ
        })), this.loads.set(cJ, ZJ)), ZJ
      }
      loadedFactory(JJ) {
        const cJ = (0, FJ.Jb)(JJ);
        if (!UJ.has(cJ)) return;
        const ZJ = this.loaded.get(cJ);
        if (!ZJ) throw new Error(`${cJ}'s client code started before it loaded`);
        return ZJ
      }
    }
  },
  38573: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    var FJ = ZJ(8719),
      UJ = ZJ(35740),
      eJ = ZJ(2778);

    function XJ(JJ) {
      if (JJ === FJ.e) return 0;
      const cJ = (0, eJ.c)(JJ);
      if (void 0 !== cJ && cJ <= UJ.MAX_BLOCK_ID) return cJ;
      const ZJ = (0, eJ.c)(JJ.split("|")[0]);
      if (void 0 !== ZJ && ZJ <= UJ.MAX_BLOCK_ID && (0, UJ.rootMetaDescOf)(ZJ) === JJ) return ZJ;
      throw new Error(`Invalid block name. You sent ${JJ}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38162: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ
    });
    var FJ = ZJ(13);
    class UJ {
      constructor(JJ) {
        this.screen = JJ, this.hidesHud = !1
      }
      show(JJ, cJ) {
        this.screen.setFade(JJ.colour, JJ.alpha), this.screen.setLetterbox(!0 === cJ.letterbox, JJ.alpha < 1), this.setHudHidden(!0 === cJ.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(JJ) {
        this.hidesHud !== JJ && (this.hidesHud = JJ, FJ.d.set({
          isUiHiddenByCamera: JJ
        }))
      }
    }
  },
  38120: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ,
      f: () => DJ,
      i: () => hJ,
      m: () => XJ,
      n: () => nJ,
      p: () => qJ,
      s: () => GJ,
      t: () => jJ,
      v: () => AJ,
      x: () => YJ
    });
    const FJ = Math.PI / 2 - .001,
      UJ = 2 * Math.PI,
      eJ = 1e-9;

    function XJ(JJ, cJ) {
      cJ.heading = JJ.heading, cJ.pitch = JJ.pitch
    }

    function AJ(JJ, cJ) {
      const ZJ = cJ - JJ;
      return ZJ - UJ * Math.floor((ZJ + Math.PI) / UJ)
    }

    function qJ(JJ, cJ, ZJ) {
      return JJ + AJ(JJ, cJ) * ZJ
    }

    function jJ(JJ) {
      if (!Number.isFinite(JJ)) return JJ;
      const cJ = JJ - UJ * Math.floor(JJ / UJ);
      return cJ < UJ ? cJ : 0
    }

    function YJ(JJ, cJ) {
      return JJ + AJ(JJ, cJ)
    }

    function hJ(JJ) {
      return Math.max(-FJ, Math.min(FJ, JJ))
    }

    function DJ(JJ, cJ, ZJ) {
      const FJ = Math.cos(cJ);
      return ZJ[0] = FJ * Math.sin(JJ), ZJ[1] = -Math.sin(cJ), ZJ[2] = FJ * Math.cos(JJ), ZJ
    }

    function sJ(JJ, cJ, ZJ, FJ) {
      const UJ = Math.sqrt(JJ * JJ + ZJ * ZJ);
      return UJ < eJ && Math.abs(cJ) < eJ || (UJ >= eJ && (FJ.heading = Math.atan2(JJ, ZJ)), FJ.pitch = hJ(Math.atan2(-cJ, UJ) + 0)), FJ
    }

    function nJ(JJ, cJ) {
      return sJ(JJ[0], JJ[1], JJ[2], cJ)
    }

    function GJ(JJ, cJ, ZJ) {
      return sJ(cJ[0] - JJ[0], cJ[1] - JJ[1], cJ[2] - JJ[2], ZJ)
    }
  },
  38157: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      f: () => UJ
    });
    var FJ = ZJ(38120);

    function UJ(JJ) {
      var cJ;
      const ZJ = "default" === JJ.mode ? "movement" : null !== (cJ = JJ.playerFacing) && void 0 !== cJ ? cJ : "movement";
      return "cursor" === ZJ ? {
        facing: ZJ,
        mouseTurns: null
      } : {
        facing: ZJ,
        mouseTurns: "default" !== JJ.mode && void 0 !== JJ.playerLook ? "look" : "view"
      }
    }

    function eJ(JJ, cJ, ZJ, UJ, eJ, XJ) {
      return XJ.bK = 0, XJ.zK = 0, XJ.pointedAt = void 0, void 0 !== UJ ? eJ ? (XJ.pointedAt = UJ, JJ) : (0, FJ.t)(UJ.heading) : eJ ? (XJ.bK = cJ, XJ.zK = ZJ, JJ) : (0, FJ.t)(JJ + cJ)
    }
  },
  38134: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => TJ
    });
    var FJ = ZJ(38141),
      UJ = ZJ(38120),
      eJ = ZJ(36007);

    function XJ(JJ, cJ, ZJ, FJ) {
      if (!(FJ > 0)) return cJ;
      const UJ = cJ > JJ ? Math.min(cJ, JJ + ZJ / FJ) : Math.max(cJ, JJ - ZJ / FJ);
      return Math.abs(cJ - UJ) < 1e-9 ? cJ : UJ
    }
    class AJ {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: FJ.f,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(JJ) {
        !this.isGoingOut() && this.sinceTurnMs < FJ.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: JJ
        } : (this.waiting = null, this.startOut(JJ))
      }
      fadeIn(JJ) {
        this.isGoingOut() ? this.sinceTurnMs < FJ.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: JJ
        } : (this.waiting = null, this.startIn(JJ)) : this.waiting = null
      }
      advance(JJ) {
        const cJ = this.waiting;
        if (null === cJ) return this.step(JJ);
        const ZJ = FJ.k.minFadeTurnMs - this.sinceTurnMs;
        if (ZJ > JJ) return this.step(JJ);
        const UJ = this.step(ZJ);
        return this.waiting = null, "out" === cJ.turn ? this.startOut(cJ.transition) : this.startIn(cJ.minMs), this.step(JJ - ZJ) || UJ
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(JJ) {
        ("in" === this.phase || null === this.phase && this.clearMs < FJ.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = JJ.colour), this.outMs = JJ.outMs, this.holdMs = JJ.holdMs, this.inMs = JJ.inMs
      }
      startIn(JJ) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(JJ, this.inMs)
      }
      step(JJ) {
        const cJ = this.screen;
        this.sinceTurnMs += JJ, null === this.phase && (this.clearMs += JJ);
        let ZJ = !1,
          UJ = JJ;
        if ("out" === this.phase) {
          const FJ = (1 - cJ.alpha) * this.outMs;
          if (cJ.alpha = XJ(cJ.alpha, 1, JJ, this.outMs), cJ.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, UJ = Math.max(0, JJ - FJ), ZJ = !0
        }
        let eJ = JJ;
        if ("hold" === this.phase) {
          this.heldMs += UJ;
          const JJ = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - FJ.k.minFadeTurnMs);
          if (JJ < 0 || ZJ) return ZJ;
          this.phase = "in", this.sinceTurnMs = JJ, eJ = JJ
        }
        return "in" === this.phase && (cJ.alpha = XJ(cJ.alpha, 0, eJ, this.inMs), cJ.alpha <= 0 && (this.phase = null, this.clearMs = 0)), ZJ
      }
    }
    var qJ = ZJ(38117),
      jJ = ZJ(38148),
      YJ = ZJ(1671),
      hJ = ZJ(35637);

    function DJ(JJ, cJ) {
      for (let ZJ = 0; ZJ < cJ.length; ZJ++) cJ[ZJ] = JJ[ZJ]
    }

    function sJ(JJ, cJ) {
      var ZJ;
      return null !== (ZJ = JJ.fov) && void 0 !== ZJ ? ZJ : cJ.getDefaultFov()
    }

    function nJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = 2 / FJ,
        XJ = Math.exp(-eJ * UJ);
      for (let AJ = 0; AJ < JJ.length; AJ++) {
        const FJ = JJ[AJ] - ZJ[AJ],
          qJ = (cJ[AJ] + eJ * FJ) * UJ;
        JJ[AJ] = ZJ[AJ] + (FJ + qJ) * XJ, cJ[AJ] = (cJ[AJ] - eJ * qJ) * XJ
      }
    }
    class GJ {
      constructor(JJ, cJ, ZJ, FJ) {
        var eJ, XJ, AJ, qJ, jJ;
        this.settings = JJ, this.zh = cJ, this.targets = ZJ, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.jf = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, UJ.t)((0, YJ.k)(null !== (eJ = JJ.viewHeading) && void 0 !== eJ ? eJ : 0)),
          pitch: (0, UJ.i)((0, YJ.k)(null !== (XJ = JJ.viewElevation) && void 0 !== XJ ? XJ : 45))
        }, this.closestDistance = null !== (AJ = JJ.closestDistance) && void 0 !== AJ ? AJ : Math.min(6, null !== (qJ = JJ.furthestDistance) && void 0 !== qJ ? qJ : 1 / 0), this.furthestDistance = null !== (jJ = JJ.furthestDistance) && void 0 !== jJ ? jJ : Math.max(64, this.closestDistance);
        const hJ = (0, UJ.f)(this.base.heading, this.base.pitch, this.forward),
          DJ = FJ.position,
          sJ = this.closestDistance;
        this.goal = [DJ[0] + hJ[0] * sJ, DJ[1] + hJ[1] * sJ, DJ[2] + hJ[2] * sJ, sJ, this.base.heading, this.base.pitch]
      }
      update(JJ, cJ, ZJ) {
        var FJ, eJ;
        this.placeGoal(null !== (FJ = this.settings.fov) && void 0 !== FJ ? FJ : this.zh.getBaseFov()), this.goal[4] = (0, UJ.x)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const XJ = null !== (eJ = this.settings.smoothMs) && void 0 !== eJ ? eJ : 400;
        !this.started || XJ < 1 ? (DJ(this.goal, this.smoothed), this.jf.fill(0), this.started = !0) : nJ(this.smoothed, this.jf, this.goal, XJ, JJ), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, UJ.i)(this.smoothed[5]), cJ.apply(this.angles, ZJ);
        const AJ = (0, UJ.f)(ZJ.heading, ZJ.pitch, this.forward);
        for (let UJ = 0; UJ < 3; UJ++) ZJ.position[UJ] = this.smoothed[UJ] - AJ[UJ] * this.smoothed[3];
        ZJ.fov = sJ(this.settings, this.zh)
      }
      continueFrom(JJ) {
        JJ instanceof GJ && (DJ(JJ.goal, this.goal), DJ(JJ.smoothed, this.smoothed), DJ(JJ.jf, this.jf), this.framedTargets = JJ.framedTargets, this.started = JJ.started)
      }
      reset() {
        this.jf.fill(0), this.started = !1
      }
      placeGoal(JJ) {
        var cJ;
        let ZJ = 0;
        for (const YJ of this.settings.targets) {
          const JJ = this.targets.currentAimPoint(YJ);
          JJ && (0, qJ.j)(JJ, this.pointAt(ZJ++))
        }
        if (ZJ > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const JJ = this.targets.aimPoint(this.zh.localPlayerId);
          JJ && (0, qJ.j)(JJ, this.pointAt(ZJ++))
        }
        const FJ = this.goal;
        if (0 === ZJ) return void(FJ[3] = this.withinDistances(FJ[3]));
        for (let qJ = 0; qJ < 3; qJ++) {
          let JJ = 1 / 0,
            cJ = -1 / 0;
          for (let FJ = 0; FJ < ZJ; FJ++) JJ = Math.min(JJ, this.points[FJ][qJ]), cJ = Math.max(cJ, this.points[FJ][qJ]);
          FJ[qJ] = (JJ + cJ) / 2
        }
        let UJ = 0;
        for (let qJ = 0; qJ < ZJ; qJ++) {
          const JJ = this.points[qJ];
          UJ = Math.max(UJ, Math.hypot(JJ[0] - FJ[0], JJ[1] - FJ[1], JJ[2] - FJ[2]))
        }
        const eJ = Math.tan((0, YJ.k)(JJ) / 2),
          XJ = Math.atan(eJ * (!0 === this.settings.letterbox ? hJ.f : 1)),
          AJ = Math.atan(eJ * this.zh.getAspectRatio()),
          jJ = (UJ + (null !== (cJ = this.settings.padding) && void 0 !== cJ ? cJ : 2)) / Math.sin(Math.min(XJ, AJ));
        FJ[3] = this.withinDistances(jJ)
      }
      withinDistances(JJ) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, JJ))
      }
      pointAt(JJ) {
        return JJ === this.points.length && this.points.push([0, 0, 0]), this.points[JJ]
      }
    }
    class fJ {
      constructor(JJ) {
        this.limits = JJ, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(JJ) {
        this.limits && (this.yawOffset = JJ.yawOffset, this.pitchOffset = JJ.pitchOffset, this.idleMs = JJ.idleMs)
      }
      update(JJ, cJ) {
        const ZJ = this.limits;
        if (!ZJ) return;
        const FJ = Number.isFinite(cJ.bK) ? cJ.bK : 0,
          UJ = Number.isFinite(cJ.zK) ? cJ.zK : 0;
        if (cJ.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: cJ.pointedAt.heading,
          pitch: cJ.pointedAt.pitch
        };
        else if (0 !== FJ || 0 !== UJ) this.idleMs = 0, this.yawOffset += FJ, this.pitchOffset += UJ;
        else {
          const cJ = Math.max(0, this.idleMs + JJ - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += JJ, void 0 !== ZJ.returnMs && cJ > 0) {
            const JJ = ZJ.returnMs > 0 ? Math.exp(-3 * cJ / ZJ.returnMs) : 0;
            this.yawOffset *= JJ, this.pitchOffset *= JJ
          }
        }
        this.clampOffsets(ZJ)
      }
      clampOffsets(JJ) {
        if (JJ.maxYaw >= 180) this.yawOffset = (0, UJ.v)(0, this.yawOffset);
        else {
          const cJ = (0, YJ.k)(JJ.maxYaw);
          this.yawOffset = Math.max(-cJ, Math.min(cJ, this.yawOffset))
        }
        const cJ = (0, YJ.k)(JJ.maxPitch);
        this.pitchOffset = Math.max(-cJ, Math.min(cJ, this.pitchOffset))
      }
      apply(JJ, cJ) {
        this.pointedAt && this.limits && (this.yawOffset = (0, UJ.v)(JJ.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - JJ.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const ZJ = (0, UJ.i)(JJ.pitch + this.pitchOffset);
        this.pitchOffset = ZJ - JJ.pitch, cJ.heading = (0, UJ.t)(JJ.heading + this.yawOffset), cJ.pitch = ZJ
      }
      unapply(JJ, cJ) {
        cJ.heading = (0, UJ.t)(JJ.heading - this.yawOffset), cJ.pitch = (0, UJ.i)(JJ.pitch - this.pitchOffset)
      }
    }
    const xJ = 1e-6;

    function rJ(JJ) {
      return Math.sqrt(JJ[0] * JJ[0] + JJ[1] * JJ[1] + JJ[2] * JJ[2])
    }

    function vJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = UJ * UJ,
        XJ = eJ * UJ;
      return (2 * XJ - 3 * eJ + 1) * JJ + (XJ - 2 * eJ + UJ) * cJ + (-2 * XJ + 3 * eJ) * ZJ + (XJ - eJ) * FJ
    }

    function mJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = UJ * UJ;
      return (6 * eJ - 6 * UJ) * JJ + (3 * eJ - 4 * UJ + 1) * cJ + (-6 * eJ + 6 * UJ) * ZJ + (3 * eJ - 2 * UJ) * FJ
    }

    function QJ(JJ, cJ) {
      const ZJ = cJ[0] - JJ[0],
        FJ = cJ[1] - JJ[1],
        UJ = cJ[2] - JJ[2];
      return Math.sqrt(ZJ * ZJ + FJ * FJ + UJ * UJ)
    }

    function EJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      for (let XJ = 0; XJ < 3; XJ++) eJ[XJ] = UJ ? JJ[XJ] * FJ : ZJ[XJ] - cJ[XJ];
      return UJ && function(JJ, cJ) {
        const ZJ = rJ(JJ);
        if (ZJ > cJ) {
          const FJ = cJ / ZJ;
          JJ[0] *= FJ, JJ[1] *= FJ, JJ[2] *= FJ
        }
      }(eJ, 3 * QJ(cJ, ZJ)), eJ
    }

    function VJ(JJ, cJ, ZJ, FJ) {
      for (let UJ = 0; UJ < 3; UJ++) FJ[UJ] = 6 * (cJ[UJ] - JJ[UJ]) - 2 * ZJ[UJ];
      if (rJ(FJ) < xJ)
        for (let UJ = 0; UJ < 3; UJ++) FJ[UJ] = cJ[UJ] - JJ[UJ];
      return FJ
    }

    function KJ(JJ, cJ) {
      return [2 * cJ[0] - JJ[0], 2 * cJ[1] - JJ[1], 2 * cJ[2] - JJ[2]]
    }

    function yJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      if (!eJ && !XJ) return 0;
      const AJ = eJ ? JJ : 2 * cJ - ZJ,
        qJ = XJ ? ZJ : 2 * cJ - JJ,
        jJ = eJ ? FJ : UJ,
        YJ = XJ ? UJ : FJ,
        hJ = (cJ - AJ) / jJ,
        DJ = (qJ - cJ) / YJ;
      if (hJ * DJ <= 0) return 0;
      const sJ = (qJ - AJ) / (jJ + YJ),
        nJ = 3 * Math.min(Math.abs(hJ), Math.abs(DJ));
      return Math.max(-nJ, Math.min(nJ, sJ))
    }

    function SJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      const {
        u: AJ,
        segmentMs: qJ
      } = JJ;
      if (!JJ.curved) return ZJ + (FJ - ZJ) * AJ;
      return vJ(ZJ, yJ(cJ, ZJ, FJ, JJ.beforeMs, qJ, eJ, !0) * qJ, FJ, yJ(ZJ, FJ, UJ, qJ, JJ.afterMs, !0, XJ) * qJ, AJ)
    }

    function IJ(JJ) {
      return Math.abs(JJ.pitch) >= UJ.b
    }
    class MJ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.nodes = JJ, this.prevNodes = ZJ, this.nextNodes = FJ, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = JJ.map(((JJ, ZJ) => this.nodeTangent(cJ, UJ, ZJ)))
      }
      sample(JJ, cJ, ZJ) {
        const {
          index: FJ,
          toIndex: eJ,
          segmentMs: XJ,
          curved: AJ
        } = JJ, qJ = this.fromAngles, jJ = this.toAngles, YJ = this.nodeAngles(FJ, ZJ.position, cJ, qJ), hJ = this.nodeAngles(eJ, ZJ.position, cJ, jJ);
        if (XJ > 0 && "aim" !== YJ && "aim" !== hJ && this.liveTangent(JJ, qJ)) return ZJ.heading = (0, UJ.t)(qJ.heading), void(ZJ.pitch = qJ.pitch);
        if ("none" === YJ && "none" === hJ) return;
        !AJ && XJ > 0 && ("tangent" === YJ && this.liveTangent(JJ, qJ), "tangent" === hJ && this.liveTangent(JJ, jJ)), "none" === YJ ? (0, UJ.m)(jJ, qJ) : "none" === hJ && (0, UJ.m)(qJ, jJ);
        const DJ = AJ && JJ.beforeIndex >= 0 && "none" !== this.nodeAngles(JJ.beforeIndex, ZJ.position, cJ, this.beforeAngles),
          sJ = AJ && JJ.afterIndex >= 0 && "none" !== this.nodeAngles(JJ.afterIndex, ZJ.position, cJ, this.afterAngles),
          nJ = (0, UJ.x)(qJ.heading, jJ.heading),
          GJ = SJ(JJ, DJ ? (0, UJ.x)(qJ.heading, this.beforeAngles.heading) : 0, qJ.heading, nJ, sJ ? (0, UJ.x)(nJ, this.afterAngles.heading) : 0, DJ, sJ);
        ZJ.heading = (0, UJ.t)(GJ), ZJ.pitch = (0, UJ.i)(SJ(JJ, this.beforeAngles.pitch, qJ.pitch, jJ.pitch, this.afterAngles.pitch, DJ, sJ))
      }
      nodeAngles(JJ, cJ, ZJ, FJ) {
        const UJ = this.rawNodeAngles(JJ, cJ, ZJ, FJ);
        return "none" !== UJ && IJ(FJ) && !this.borrowHeading(this.prevNodes[JJ], cJ, ZJ, FJ) && this.borrowHeading(this.nextNodes[JJ], cJ, ZJ, FJ), UJ
      }
      borrowHeading(JJ, cJ, ZJ, FJ) {
        const UJ = this.borrowedAngles;
        return !(JJ < 0 || "none" === this.rawNodeAngles(JJ, cJ, ZJ, UJ) || IJ(UJ)) && (FJ.heading = UJ.heading, !0)
      }
      rawNodeAngles(JJ, cJ, ZJ, FJ) {
        const eJ = this.nodes[JJ].keyframe;
        if (eJ.lookDirection) return (0, UJ.n)(eJ.lookDirection, FJ), "aim";
        if (void 0 !== eJ.lookAt) {
          const JJ = ZJ(eJ.lookAt);
          if (JJ) return (0, UJ.s)(cJ, JJ, FJ), "aim"
        }
        const XJ = this.tangents[JJ];
        return XJ ? ((0, UJ.m)(XJ, FJ), "tangent") : "none"
      }
      liveTangent(JJ, cJ) {
        const ZJ = this.nodes[JJ.index].position,
          FJ = this.nodes[JJ.toIndex].position,
          eJ = this.derivative;
        for (let UJ = 0; UJ < 3; UJ++) eJ[UJ] = mJ(ZJ[UJ], JJ.fromTangent[UJ], FJ[UJ], JJ.toTangent[UJ], JJ.u);
        return rJ(eJ) > 1e-9 ? ((0, UJ.n)(eJ, cJ), !0) : !(QJ(ZJ, FJ) < xJ) && ((0, UJ.n)(VJ(ZJ, FJ, JJ.u < .5 ? JJ.toTangent : JJ.fromTangent, eJ), cJ), !0)
      }
      nodeTangent(JJ, cJ, ZJ) {
        var FJ;
        const eJ = JJ[ZJ];
        if (rJ(eJ) > 1e-9) return (0, UJ.n)(eJ, {
          heading: 0,
          pitch: 0
        });
        const XJ = null !== (FJ = this.restDirectionTo(ZJ, ZJ + 1, JJ, cJ)) && void 0 !== FJ ? FJ : this.restDirectionTo(ZJ, ZJ - 1, JJ, cJ);
        return XJ ? (0, UJ.n)(XJ, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(JJ, cJ, ZJ, FJ) {
        const UJ = this.nodes[JJ],
          eJ = this.nodes[cJ];
        if (!eJ || QJ(UJ.position, eJ.position) < xJ) return null;
        const [XJ, AJ] = cJ > JJ ? [UJ, eJ] : [eJ, UJ], qJ = EJ(ZJ[cJ], XJ.position, AJ.position, AJ.timeMs - XJ.timeMs, FJ, [0, 0, 0]);
        return VJ(XJ.position, AJ.position, qJ, [0, 0, 0])
      }
    }

    function bJ(JJ, cJ) {
      const ZJ = JJ.lookDirection || cJ.lookDirection ? function(JJ, cJ) {
        if (!JJ || !cJ) return JJ === cJ;
        const ZJ = rJ(JJ),
          FJ = rJ(cJ);
        return Math.hypot(JJ[0] / ZJ - cJ[0] / FJ, JJ[1] / ZJ - cJ[1] / FJ, JJ[2] / ZJ - cJ[2] / FJ) < xJ
      }(JJ.lookDirection, cJ.lookDirection) : (FJ = JJ.lookAt, UJ = cJ.lookAt, "object" !== typeof FJ || "object" !== typeof UJ ? FJ === UJ : QJ(FJ, UJ) < xJ);
      var FJ, UJ;
      return QJ(JJ.position, cJ.position) < xJ && JJ.fov === cJ.fov && ZJ
    }
    class wJ {
      constructor(JJ, cJ, ZJ) {
        if (this.smooth = cJ, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === JJ.length) throw new Error("A camera path needs at least one keyframe");
        for (let eJ = 1; eJ < JJ.length; eJ++)
          if (!(JJ[eJ].timeMs > JJ[eJ - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = JJ.map((JJ => {
          var cJ;
          return {
            timeMs: JJ.timeMs,
            position: [...JJ.position],
            keyframe: JJ,
            easing: (0, eJ.q)(null !== (cJ = JJ.easing) && void 0 !== cJ ? cJ : "linear")
          }
        }));
        const FJ = this.nodes[0],
          UJ = this.nodes[this.nodes.length - 1],
          XJ = ZJ && this.nodes.length > 1;
        XJ && !bJ(FJ.keyframe, UJ.keyframe) && this.nodes.push({
          ...FJ,
          timeMs: UJ.timeMs + (UJ.timeMs - FJ.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = XJ ? this.nodes[this.nodes.length - 1].timeMs - FJ.timeMs : 0, this.prevNodes = this.nodes.map(((JJ, cJ) => this.neighbour(cJ, -1))), this.nextNodes = this.nodes.map(((JJ, cJ) => this.neighbour(cJ, 1))), this.prevGaps = this.prevNodes.map(((JJ, cJ) => JJ >= 0 ? this.gapMs(cJ, -1) : 0)), this.nextGaps = this.nextNodes.map(((JJ, cJ) => JJ >= 0 ? this.gapMs(cJ, 1) : 0)), this.velocities = this.nodes.map(((JJ, cJ) => {
          const ZJ = this.prevNodes[cJ],
            FJ = this.nextNodes[cJ];
          return function(JJ, cJ, ZJ, FJ, UJ, eJ) {
            if (eJ[0] = 0, eJ[1] = 0, eJ[2] = 0, !JJ && !ZJ) return eJ;
            const XJ = null !== JJ && void 0 !== JJ ? JJ : KJ(null !== ZJ && void 0 !== ZJ ? ZJ : cJ, cJ),
              AJ = null !== ZJ && void 0 !== ZJ ? ZJ : KJ(null !== JJ && void 0 !== JJ ? JJ : cJ, cJ),
              qJ = JJ ? FJ : UJ,
              jJ = ZJ ? UJ : FJ,
              YJ = QJ(XJ, cJ),
              hJ = QJ(cJ, AJ);
            if (YJ < xJ || hJ < xJ) return eJ;
            const DJ = Math.sqrt(YJ),
              sJ = Math.sqrt(hJ),
              nJ = (DJ + sJ) / (qJ + jJ);
            for (let GJ = 0; GJ < 3; GJ++) {
              const JJ = (cJ[GJ] - XJ[GJ]) / DJ - (AJ[GJ] - XJ[GJ]) / (DJ + sJ) + (AJ[GJ] - cJ[GJ]) / sJ;
              eJ[GJ] = JJ * nJ
            }
            return eJ
          }(ZJ >= 0 ? this.nodes[ZJ].position : null, JJ.position, FJ >= 0 ? this.nodes[FJ].position : null, this.prevGaps[cJ], this.nextGaps[cJ], [0, 0, 0])
        })), this.aim = new MJ(this.nodes, this.velocities, this.prevNodes, this.nextNodes, cJ)
      }
      sample(JJ, cJ, ZJ, FJ) {
        const UJ = this.findSegment(this.pathTime(JJ));
        this.samplePosition(UJ, FJ.position), this.aim.sample(UJ, cJ, FJ);
        const {
          beforeIndex: eJ,
          afterIndex: XJ
        } = UJ;
        FJ.fov = SJ(UJ, eJ >= 0 ? this.fovAt(eJ, ZJ) : 0, this.fovAt(UJ.index, ZJ), this.fovAt(UJ.toIndex, ZJ), XJ >= 0 ? this.fovAt(XJ, ZJ) : 0, eJ >= 0, XJ >= 0)
      }
      pathTime(JJ) {
        const cJ = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || JJ <= cJ) return JJ;
        const ZJ = JJ - cJ;
        return cJ + ZJ - this.loopMs * Math.floor(ZJ / this.loopMs)
      }
      findSegment(JJ) {
        const cJ = this.nodes,
          ZJ = this.segment;
        let FJ = ZJ.index;
        for (JJ < cJ[FJ].timeMs && (FJ = 0); FJ < cJ.length - 2 && cJ[FJ + 1].timeMs <= JJ;) FJ++;
        const UJ = Math.min(FJ + 1, cJ.length - 1),
          XJ = cJ[UJ].timeMs - cJ[FJ].timeMs;
        return ZJ.index = FJ, ZJ.toIndex = UJ, ZJ.segmentMs = XJ, ZJ.u = XJ > 0 ? (0, eJ.m)((JJ - cJ[FJ].timeMs) / XJ, cJ[FJ].easing) : 1, ZJ.curved = this.smooth && XJ > 0, ZJ.beforeIndex = this.prevNodes[FJ], ZJ.afterIndex = this.nextNodes[UJ], ZJ.beforeMs = this.prevGaps[FJ], ZJ.afterMs = this.nextGaps[UJ], ZJ
      }
      samplePosition(JJ, cJ) {
        const {
          fromTangent: ZJ,
          toTangent: FJ,
          curved: UJ
        } = JJ, eJ = this.nodes[JJ.index].position, XJ = this.nodes[JJ.toIndex].position;
        EJ(this.velocities[JJ.index], eJ, XJ, JJ.segmentMs, UJ, ZJ), EJ(this.velocities[JJ.toIndex], eJ, XJ, JJ.segmentMs, UJ, FJ);
        const AJ = JJ.u;
        for (let qJ = 0; qJ < 3; qJ++) cJ[qJ] = UJ ? vJ(eJ[qJ], ZJ[qJ], XJ[qJ], FJ[qJ], AJ) : eJ[qJ] + (XJ[qJ] - eJ[qJ]) * AJ
      }
      fovAt(JJ, cJ) {
        var ZJ;
        return null !== (ZJ = this.nodes[JJ].keyframe.fov) && void 0 !== ZJ ? ZJ : cJ
      }
      neighbour(JJ, cJ) {
        const ZJ = this.nodes.length - 1,
          FJ = JJ + cJ;
        return FJ >= 0 && FJ <= ZJ ? FJ : this.loopMs <= 0 || ZJ < 2 ? -1 : FJ < 0 ? ZJ - 1 : 1
      }
      gapMs(JJ, cJ) {
        const ZJ = this.nodes.length - 1;
        if (1 === cJ) {
          const cJ = JJ === ZJ ? 0 : JJ;
          return this.nodes[cJ + 1].timeMs - this.nodes[cJ].timeMs
        }
        const FJ = 0 === JJ ? ZJ : JJ;
        return this.nodes[FJ].timeMs - this.nodes[FJ - 1].timeMs
      }
    }
    class WJ {
      constructor(JJ) {
        this.zh = JJ, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = cJ => JJ.getEntityPosition(cJ), this.readAimPoint = cJ => JJ.getEntityAimPoint(cJ)
      }
      aimPoint(JJ) {
        return "string" !== typeof JJ ? (0, qJ.p)(JJ, 3) ? JJ : null : this.resolve(JJ, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(JJ) {
        const cJ = "string" === typeof JJ ? this.zh.getEntityAimPoint(JJ) : JJ;
        return cJ && (0, qJ.p)(cJ, 3) ? cJ : null
      }
      feetPosition(JJ) {
        return this.resolve(JJ, this.readFeet, this.lastFeet)
      }
      heading(JJ) {
        const cJ = this.zh.getEntityHeading(JJ);
        if (null !== cJ && Number.isFinite(cJ)) return this.lastHeadings.set(JJ, cJ), cJ;
        const ZJ = this.lastHeadings.get(JJ);
        return void 0 !== ZJ ? ZJ : JJ === this.zh.localPlayerId ? 0 : this.heading(this.zh.localPlayerId)
      }
      resolve(JJ, cJ, ZJ) {
        const FJ = cJ(JJ);
        let UJ = ZJ.get(JJ);
        return FJ && (0, qJ.p)(FJ, 3) ? (UJ || (UJ = [0, 0, 0], ZJ.set(JJ, UJ)), UJ[0] = FJ[0], UJ[1] = FJ[1], UJ[2] = FJ[2], UJ) : UJ || (JJ === this.zh.localPlayerId ? null : this.resolve(this.zh.localPlayerId, cJ, ZJ))
      }
    }

    function gJ(JJ) {
      return {
        heading: JJ.heading,
        pitch: JJ.pitch
      }
    }

    function HJ(JJ, cJ) {
      Number.isFinite(JJ.heading) && Number.isFinite(JJ.pitch) || (0, UJ.m)(cJ, JJ)
    }

    function PJ(JJ, cJ, ZJ, FJ, eJ) {
      if (cJ) return void(0, UJ.n)(cJ, eJ);
      const XJ = FJ.aimPoint(ZJ);
      XJ && (0, UJ.s)(JJ, XJ, eJ)
    }
    class kJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.settings = JJ, this.zh = cJ, this.targets = ZJ, this.base = void 0, this.base = gJ(FJ)
      }
      update(JJ, cJ, ZJ) {
        var FJ;
        const UJ = this.settings;
        (0, qJ.j)(UJ.position, ZJ.position), PJ(UJ.position, UJ.lookDirection, null !== (FJ = UJ.lookAt) && void 0 !== FJ ? FJ : this.zh.localPlayerId, this.targets, this.base), cJ.apply(this.base, ZJ), ZJ.fov = sJ(UJ, this.zh)
      }
      continueFrom(JJ) {
        JJ instanceof kJ && (0, UJ.m)(JJ.base, this.base)
      }
      reset(JJ) {
        HJ(this.base, JJ)
      }
    }
    class pJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.settings = JJ, this.zh = cJ, this.targets = ZJ, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.jf = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = gJ(FJ), this.goal = [...FJ.position]
      }
      update(JJ, cJ, ZJ) {
        var FJ, UJ, eJ;
        const XJ = this.settings,
          AJ = null !== (FJ = XJ.target) && void 0 !== FJ ? FJ : this.zh.localPlayerId,
          jJ = this.targets.feetPosition(AJ);
        let YJ = !1;
        jJ && (YJ = this.foundFeet && QJ(this.lastFeet, jJ) > 32 + .1 * JJ, (0, qJ.j)(jJ, this.lastFeet), this.foundFeet = !0, this.placeGoal(jJ, AJ));
        const hJ = null !== (UJ = XJ.smoothMs) && void 0 !== UJ ? UJ : 0;
        !this.started || hJ < 1 || YJ ? ((0, qJ.j)(this.goal, this.smoothed), this.jf.fill(0), this.started = !0) : nJ(this.smoothed, this.jf, this.goal, hJ, JJ), YJ && (this.distance = -1), (0, qJ.j)(this.smoothed, ZJ.position);
        const DJ = !0 === XJ.avoidTerrain ? this.pullIn(AJ, JJ, ZJ) : 1;
        let GJ = this.goal;
        if ("target" === XJ.offsetSpace) GJ = ZJ.position;
        else if (DJ < 1) {
          GJ = this.aimOrigin;
          for (let JJ = 0; JJ < 3; JJ++) GJ[JJ] = ZJ.position[JJ] + (this.goal[JJ] - this.smoothed[JJ]) * DJ
        }
        PJ(GJ, XJ.lookDirection, null !== (eJ = XJ.lookAt) && void 0 !== eJ ? eJ : AJ, this.targets, this.base), cJ.apply(this.base, ZJ), ZJ.fov = sJ(XJ, this.zh)
      }
      continueFrom(JJ) {
        JJ instanceof pJ && (0, FJ.q)(JJ.settings.target, this.settings.target) && ((0, UJ.m)(JJ.base, this.base), (0, qJ.j)(JJ.goal, this.goal), (0, qJ.j)(JJ.lastFeet, this.lastFeet), this.foundFeet = JJ.foundFeet, (0, qJ.j)(JJ.smoothed, this.smoothed), (0, qJ.j)(JJ.jf, this.jf), this.started = JJ.started, !0 === JJ.settings.avoidTerrain && (this.distance = JJ.distance))
      }
      reset(JJ) {
        HJ(this.base, JJ), this.jf.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(JJ, cJ, ZJ) {
        const FJ = this.targets.aimPoint(JJ);
        if (!FJ) return 1;
        const UJ = ZJ.position,
          eJ = QJ(FJ, UJ);
        if (!(eJ > 0)) return 1;
        const XJ = this.toCamera;
        for (let qJ = 0; qJ < 3; qJ++) XJ[qJ] = (UJ[qJ] - FJ[qJ]) / eJ;
        const AJ = function(JJ, cJ, ZJ) {
          return JJ < 0 || cJ < JJ ? cJ : cJ + (JJ - cJ) * Math.exp(-ZJ / 150)
        }(this.distance, function(JJ, cJ, ZJ, FJ) {
          const UJ = JJ.raycastTerrain(cJ, ZJ, FJ);
          return null !== UJ && Number.isFinite(UJ) ? Math.min(FJ, Math.max(0, UJ - .2)) : FJ
        }(this.zh, FJ, XJ, eJ), cJ);
        if (eJ - AJ < .001) return this.distance = -1, 1;
        this.distance = AJ;
        for (let qJ = 0; qJ < 3; qJ++) UJ[qJ] = FJ[qJ] + XJ[qJ] * AJ;
        return AJ / eJ
      }
      placeGoal(JJ, cJ) {
        const ZJ = this.settings.offset;
        let FJ = ZJ[0],
          UJ = ZJ[2];
        if ("target" === this.settings.offsetSpace) {
          const JJ = this.targets.heading(cJ),
            eJ = Math.cos(JJ),
            XJ = Math.sin(JJ);
          FJ = ZJ[0] * eJ + ZJ[2] * XJ, UJ = -ZJ[0] * XJ + ZJ[2] * eJ
        }
        this.goal[0] = JJ[0] + FJ, this.goal[1] = JJ[1] + ZJ[1], this.goal[2] = JJ[2] + UJ
      }
    }
    class dJ {
      constructor(JJ, cJ, ZJ, FJ) {
        var UJ, eJ;
        this.settings = JJ, this.zh = cJ, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = JJ.keyframes.length > 0 ? new wJ(JJ.keyframes, null === (UJ = JJ.smooth) || void 0 === UJ || UJ, null !== (eJ = JJ.loop) && void 0 !== eJ && eJ) : null, this.base = (0, qJ.g)(FJ, (0, qJ.n)()), this.resolveTarget = JJ => ZJ.aimPoint(JJ)
      }
      update(JJ, cJ, ZJ) {
        this.elapsedMs += JJ;
        const FJ = sJ(this.settings, this.zh);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, FJ, this.base) : this.base.fov = FJ, (0, qJ.j)(this.base.position, ZJ.position), ZJ.fov = this.base.fov, cJ.apply(this.base, ZJ)
      }
      continueFrom(JJ) {
        JJ instanceof dJ && (0, FJ.q)(JJ.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = JJ.elapsedMs, (0, qJ.g)(JJ.base, this.base))
      }
      reset(JJ) {
        HJ(this.base, JJ), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function zJ(JJ, cJ) {
      return (0, FJ.u)(JJ, cJ)
    }
    class NJ {
      constructor(JJ, cJ, ZJ) {
        var FJ;
        this.settings = JJ, this.zh = cJ, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const UJ = null !== ZJ && ZJ.settings.mode === JJ.mode,
          eJ = UJ ? ZJ.pose : cJ.getDefaultPose();
        this.pose = (0, qJ.g)(eJ, (0, qJ.n)()), this.lastGoodPose = (0, qJ.g)(UJ ? ZJ.lastGoodPose : eJ, (0, qJ.n)()), this.look = new fJ(JJ.playerLook), this.targets = null !== (FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.targets) && void 0 !== FJ ? FJ : new WJ(cJ);
        const XJ = (0, qJ.g)(eJ, (0, qJ.n)());
        UJ && ZJ.look.unapply(XJ, XJ), this.mode = function(JJ, cJ, ZJ, FJ) {
          switch (JJ.mode) {
            case "fixed":
              return new kJ(JJ, cJ, ZJ, FJ);
            case "follow":
              return new pJ(JJ, cJ, ZJ, FJ);
            case "path":
              return new dJ(JJ, cJ, ZJ, FJ);
            case "frame":
              return new GJ(JJ, cJ, ZJ, FJ)
          }
        }(JJ, cJ, this.targets, XJ), UJ && (this.look.continueFrom(ZJ.look), this.mode.continueFrom(ZJ.mode))
      }
      update(JJ, cJ) {
        return this.look.update(JJ, cJ), this.mode.update(JJ, this.look, this.pose), (0, qJ.o)(this.pose) ? (0, qJ.g)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, qJ.g)(this.lastGoodPose, this.pose), this.mode.reset((0, qJ.o)(this.lastGoodPose) ? this.lastGoodPose : this.zh.getDefaultPose())), this.pose
      }
    }

    function OJ(JJ) {
      return [0, 0, JJ[2], JJ[3]]
    }
    class TJ {
      constructor(JJ) {
        this.zh = JJ, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new AJ, this.shot = null, this.blend = null, this.mixed = (0, qJ.n)(), this.output = (0, qJ.n)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(JJ) {
        const cJ = (0, jJ.b)(JJ);
        if ((0, FJ.q)(cJ, this.pending ? this.pending.settings : this.settings)) return;
        const ZJ = zJ(this.settings, cJ);
        if (void 0 !== cJ.transition && !ZJ) return this.pending = {
          settings: cJ,
          shot: "default" === cJ.mode ? null : new NJ(cJ, this.zh, null)
        }, void this.fade.fadeOut(cJ.transition);
        const UJ = null !== this.pending;
        this.pending = null, !UJ && ZJ || this.fade.fadeIn(FJ.k.minTransitionFadeMs), this.show(cJ, !1)
      }
      show(JJ, cJ) {
        var ZJ, UJ;
        if ((0, FJ.q)(JJ, this.settings)) return;
        const XJ = !cJ && zJ(this.settings, JJ);
        this.settings = JJ;
        const AJ = null !== this.blend && this.blend.elapsedMs > 0,
          jJ = (0, qJ.g)(this.hasOutput ? this.output : this.zh.getDefaultPose(), (0, qJ.n)());
        if (this.shot = "default" === JJ.mode ? null : new NJ(JJ, this.zh, cJ ? null : this.shot), XJ) return;
        const YJ = cJ || !this.shot && !this.hasOutput ? 0 : null !== (ZJ = JJ.blendInMs) && void 0 !== ZJ ? ZJ : 0;
        if (YJ <= 0) return void(this.blend = null);
        const hJ = (0, eJ.q)(null !== (UJ = JJ.blendEasing) && void 0 !== UJ ? UJ : "easeInOut");
        this.blend = {
          from: jJ,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: YJ,
          easing: AJ ? OJ(hJ) : hJ
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
      update(JJ, cJ) {
        const ZJ = Number.isFinite(JJ) && JJ > 0 ? JJ : 0;
        if (this.fade.advance(ZJ) && null !== this.pending) {
          const {
            settings: JJ
          } = this.pending;
          this.pending = null, this.show(JJ, !0)
        }
        this.loadingPositions.length = 0;
        const FJ = this.pending;
        if (null !== FJ && void 0 !== FJ && FJ.shot) {
          const JJ = "path" === FJ.settings.mode ? 0 : ZJ;
          this.noteLoadingPosition(FJ.shot.update(JJ, qJ.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const XJ = this.shot ? this.shot.update(ZJ, cJ) : this.zh.getDefaultPose();
        this.shot && this.noteLoadingPosition(XJ.position);
        const AJ = this.blend;
        if (!AJ) return this.writeOutput(XJ);
        AJ.elapsedMs += ZJ;
        const jJ = Math.min(1, AJ.elapsedMs / AJ.durationMs);
        if (AJ.headingDelta = Number.isFinite(AJ.headingDelta) ? (0, UJ.x)(AJ.headingDelta, XJ.heading - AJ.from.heading) : (0, UJ.v)(AJ.from.heading, XJ.heading), (0, qJ.t)(AJ.from, XJ, AJ.headingDelta, (0, eJ.m)(jJ, AJ.easing), this.mixed), jJ >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else AJ.fromScripted && this.noteLoadingPosition(AJ.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(JJ) {
        if (JJ.every(Number.isFinite)) {
          const cJ = this.loadingPositions;
          cJ.push((0, qJ.j)(JJ, this.loadingSlots[cJ.length]))
        }
      }
      writeOutput(JJ) {
        const cJ = this.output;
        (0, qJ.o)(JJ) ? (0, qJ.g)(JJ, cJ) : this.hasOutput || (0, qJ.g)(this.zh.getDefaultPose(), cJ), cJ.pitch = (0, UJ.i)(cJ.pitch);
        const ZJ = this.zh.getDefaultFov(),
          eJ = Number.isFinite(ZJ) && ZJ > 0 && ZJ < 180,
          XJ = eJ ? Math.min(FJ.k.minFov, ZJ) : FJ.k.minFov,
          AJ = eJ ? Math.max(FJ.k.maxFov, ZJ) : FJ.k.maxFov;
        return cJ.fov = Number.isFinite(cJ.fov) ? Math.min(AJ, Math.max(XJ, cJ.fov)) : AJ, this.hasOutput = !0, cJ
      }
    }
  },
  38117: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      g: () => AJ,
      j: () => XJ,
      n: () => eJ,
      o: () => jJ,
      p: () => qJ,
      t: () => YJ
    });
    var FJ = ZJ(38120);
    const UJ = {
      bK: 0,
      zK: 0
    };

    function eJ() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function XJ(JJ, cJ) {
      return cJ[0] = JJ[0], cJ[1] = JJ[1], cJ[2] = JJ[2], cJ
    }

    function AJ(JJ, cJ) {
      return XJ(JJ.position, cJ.position), cJ.heading = JJ.heading, cJ.pitch = JJ.pitch, cJ.fov = JJ.fov, cJ
    }

    function qJ(JJ, cJ) {
      return Array.isArray(JJ) && JJ.length === cJ && JJ.every(Number.isFinite)
    }

    function jJ(JJ) {
      return qJ(JJ.position, 3) && Number.isFinite(JJ.heading) && Number.isFinite(JJ.pitch) && Number.isFinite(JJ.fov)
    }

    function YJ(JJ, cJ, ZJ, UJ, eJ) {
      for (let FJ = 0; FJ < 3; FJ++) eJ.position[FJ] = JJ.position[FJ] + (cJ.position[FJ] - JJ.position[FJ]) * UJ;
      return eJ.heading = (0, FJ.t)(JJ.heading + ZJ * UJ), eJ.pitch = JJ.pitch + (cJ.pitch - JJ.pitch) * UJ, eJ.fov = JJ.fov + (cJ.fov - JJ.fov) * UJ, eJ
    }
  },
  38148: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => VJ,
      c: () => DJ
    });
    var FJ = ZJ(38141),
      UJ = ZJ(38117);
    const eJ = FJ.h,
      XJ = FJ.l;

    function AJ(JJ, cJ, ZJ, FJ) {
      return Number.isFinite(JJ) ? Math.min(ZJ, Math.max(cJ, JJ)) : FJ
    }

    function qJ(JJ, cJ, ZJ) {
      return void 0 !== JJ && Number.isFinite(JJ) ? Math.min(ZJ, Math.max(cJ, JJ)) : void 0
    }

    function jJ(JJ) {
      const cJ = FJ.k.maxCoordinate;
      return [Math.min(cJ, Math.max(-cJ, JJ[0])), Math.min(cJ, Math.max(-cJ, JJ[1])), Math.min(cJ, Math.max(-cJ, JJ[2]))]
    }

    function YJ(JJ) {
      return "string" === typeof JJ ? JJ : (0, UJ.p)(JJ, 3) ? jJ(JJ) : void 0
    }
    const hJ = new RegExp(FJ.o);

    function DJ(JJ) {
      return "string" === typeof JJ && hJ.test(JJ)
    }

    function sJ(JJ) {
      const cJ = [];
      if (!Array.isArray(JJ)) return cJ;
      for (const ZJ of JJ.slice(0, FJ.k.maxFrameTargets)) {
        const JJ = YJ(ZJ);
        void 0 === JJ || "string" === typeof JJ && !DJ(JJ) || cJ.push(JJ)
      }
      return cJ
    }

    function nJ(JJ) {
      if (!(0, UJ.p)(JJ, 3)) return;
      const cJ = Math.max(Math.abs(JJ[0]), Math.abs(JJ[1]), Math.abs(JJ[2])),
        ZJ = Math.hypot(JJ[0] / cJ, JJ[1] / cJ, JJ[2] / cJ);
      return 0 === cJ || cJ * ZJ < FJ.k.minDirectionLength ? void 0 : [JJ[0] / cJ / ZJ, JJ[1] / cJ / ZJ, JJ[2] / cJ / ZJ]
    }

    function GJ(JJ) {
      if (void 0 !== JJ) return "string" === typeof JJ ? eJ.includes(JJ) ? JJ : void 0 : (0, UJ.p)(JJ, 4) ? [AJ(JJ[0], 0, 1, 0), AJ(JJ[1], FJ.k.minEasingY, FJ.k.maxEasingY, 0), AJ(JJ[2], 0, 1, 1), AJ(JJ[3], FJ.k.minEasingY, FJ.k.maxEasingY, 1)] : "linear"
    }

    function fJ(JJ) {
      if (JJ) return {
        maxYaw: AJ(JJ.maxYaw, 0, FJ.k.maxPlayerLook, 0),
        maxPitch: AJ(JJ.maxPitch, 0, FJ.k.maxPlayerLook, 0),
        returnMs: qJ(JJ.returnMs, 0, FJ.k.maxReturnMs)
      }
    }
    const xJ = new RegExp(FJ.d);

    function rJ(JJ) {
      var cJ;
      if ("object" !== typeof JJ || null === JJ) return;
      const ZJ = FJ.k.maxTransitionMs,
        UJ = FJ.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof JJ.colour && xJ.test(JJ.colour) ? JJ.colour : FJ.f,
        outMs: AJ(JJ.outMs, UJ, ZJ, UJ),
        holdMs: AJ(null !== (cJ = JJ.holdMs) && void 0 !== cJ ? cJ : 0, 0, ZJ, 0),
        inMs: AJ(JJ.inMs, UJ, ZJ, UJ)
      }
    }

    function vJ(JJ) {
      return !0 === JJ || void 0
    }

    function mJ(JJ) {
      if ("object" !== typeof JJ || null === JJ) return !1;
      const cJ = JJ.lookAt;
      return Number.isFinite(JJ.timeMs) && (0, UJ.p)(JJ.position, 3) && (void 0 === cJ || "string" === typeof cJ || (0, UJ.p)(cJ, 3))
    }

    function QJ(JJ) {
      return {
        ...JJ,
        timeMs: AJ(JJ.timeMs, 0, FJ.k.maxPathMs, 0),
        position: jJ(JJ.position),
        lookAt: YJ(JJ.lookAt),
        lookDirection: nJ(JJ.lookDirection),
        fov: qJ(JJ.fov, FJ.k.minFov, FJ.k.maxFov),
        easing: GJ(JJ.easing)
      }
    }

    function EJ(JJ) {
      const cJ = [];
      if (!Array.isArray(JJ)) return cJ;
      for (const ZJ of JJ.slice(0, FJ.k.maxKeyframes)) {
        if (!mJ(ZJ)) continue;
        const JJ = QJ(ZJ);
        (0 === cJ.length || JJ.timeMs > cJ[cJ.length - 1].timeMs) && cJ.push(JJ)
      }
      return cJ
    }

    function VJ(JJ) {
      if ("object" !== typeof JJ || null === JJ) return {
        mode: "default"
      };
      const cJ = {
          blendInMs: qJ(JJ.blendInMs, 0, FJ.k.maxBlendInMs),
          blendEasing: GJ(JJ.blendEasing),
          transition: rJ(JJ.transition),
          letterbox: vJ(JJ.letterbox),
          hideHud: vJ(JJ.hideHud)
        },
        ZJ = {
          mode: "default",
          ...cJ
        };
      if ("default" === JJ.mode || "fixed" === JJ.mode && !(0, UJ.p)(JJ.position, 3)) return ZJ;
      const eJ = {
        ...cJ,
        fov: qJ(JJ.fov, FJ.k.minFov, FJ.k.maxFov),
        playerFacing: (hJ = JJ.playerFacing, XJ.includes(hJ) ? hJ : void 0),
        playerLook: fJ(JJ.playerLook)
      };
      var hJ, DJ;
      switch (JJ.mode) {
        case "fixed":
          return {
            ...JJ, ...eJ, position: jJ(JJ.position), lookAt: YJ(JJ.lookAt), lookDirection: nJ(JJ.lookDirection)
          };
        case "follow":
          return {
            ...JJ, ...eJ, target: "string" === typeof JJ.target ? JJ.target : void 0, lookAt: YJ(JJ.lookAt), offset: (DJ = JJ.offset, Array.isArray(DJ) ? [AJ(DJ[0], -FJ.k.maxOffset, FJ.k.maxOffset, 0), AJ(DJ[1], -FJ.k.maxOffset, FJ.k.maxOffset, 0), AJ(DJ[2], -FJ.k.maxOffset, FJ.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: nJ(JJ.lookDirection), smoothMs: qJ(JJ.smoothMs, 0, FJ.k.maxSmoothMs)
          };
        case "path":
          return {
            ...JJ, ...eJ, keyframes: EJ(JJ.keyframes)
          };
        case "frame":
          return {
            ...JJ, ...eJ, targets: sJ(JJ.targets), viewHeading: qJ(JJ.viewHeading, -FJ.k.maxFrameHeading, FJ.k.maxFrameHeading), viewElevation: qJ(JJ.viewElevation, 0, FJ.k.maxFrameElevation), padding: qJ(JJ.padding, 0, FJ.k.maxFrameDistance), closestDistance: qJ(JJ.closestDistance, 0, FJ.k.maxFrameDistance), furthestDistance: qJ(JJ.furthestDistance, 0, FJ.k.maxFrameDistance), smoothMs: qJ(JJ.smoothMs, 0, FJ.k.maxSmoothMs)
          };
        default:
          return ZJ
      }
    }
  },
  37639: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ
    });
    var FJ = ZJ(1122);

    function UJ(JJ) {
      const cJ = /(\d*\.?\d+)px/.exec(JJ);
      return cJ ? Number(cJ[1]) : null
    }

    function eJ(JJ) {
      return JJ.split(/[\s,]+/).pop()
    }
    let XJ = !1;
    const AJ = {
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
      drawText: function(JJ, cJ, FJ, AJ, qJ, jJ) {
        if (qJ <= 0 || jJ <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: YJ,
          fontVariant: hJ,
          fontWeight: DJ,
          fontSize: sJ,
          font: nJ
        } = this, GJ = [YJ, hJ, DJ, `${sJ}px`, nJ].filter(Boolean).join(" "), fJ = [
          [DJ, `${sJ}px`, eJ(nJ)].filter(Boolean).join(" "), `${sJ}px sans-serif`
        ], xJ = JJ.font, rJ = function(JJ, cJ, ZJ) {
          for (const FJ of cJ) {
            JJ.font = FJ;
            const cJ = UJ(JJ.font),
              XJ = eJ(FJ);
            if (null !== cJ && Math.abs(cJ - ZJ) <= .5 && JJ.font.toLowerCase().includes(XJ.toLowerCase())) return FJ
          }
          return null
        }(JJ, [GJ, ...fJ], sJ);
        rJ !== GJ && function(JJ, cJ, FJ) {
          XJ || (XJ = !0, Promise.resolve().then((() => ZJ(957))).then((ZJ => {
            let {
              MG: UJ
            } = ZJ;
            UJ(new Error("A canvas didn't take canvasTxt's font"), {
              font: JJ,
              ys: cJ,
              drawnWith: null !== FJ && void 0 !== FJ ? FJ : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(GJ, xJ, rJ);
        const vJ = UJ(JJ.font);
        if (null === rJ && null !== vJ && vJ > 0) {
          const ZJ = sJ / vJ;
          JJ.save();
          try {
            return JJ.scale(ZJ, ZJ), {
              height: this.drawLines(JJ, cJ, FJ / ZJ, AJ / ZJ, qJ / ZJ, jJ / ZJ, vJ).height * ZJ
            }
          } finally {
            JJ.restore()
          }
        }
        return this.drawLines(JJ, cJ, FJ, AJ, qJ, jJ, sJ)
      },
      drawLines: function(JJ, cJ, ZJ, UJ, eJ, XJ, AJ) {
        const qJ = ZJ + eJ,
          jJ = UJ + XJ;
        let YJ, hJ = UJ + XJ / 2 + AJ / 2;
        "right" === this.align ? (YJ = qJ, JJ.textAlign = "right") : "left" === this.align ? (YJ = ZJ, JJ.textAlign = "left") : (YJ = ZJ + eJ / 2, JJ.textAlign = "center");
        for (const FJ of cJ) {
          JJ.measureText(FJ).width >= eJ && (cJ = cJ.replace(FJ, ""))
        }
        cJ = (0, FJ.V)(cJ);
        const DJ = [],
          sJ = cJ.split("\n"),
          nJ = this.justify ? JJ.measureText("\u200a").width : 0;
        sJ.forEach((cJ => {
          let ZJ = JJ.measureText(cJ).width;
          if (ZJ <= eJ) DJ.push(cJ);
          else {
            let FJ = cJ;
            const UJ = eJ;
            let XJ, AJ, qJ;
            for (ZJ = JJ.measureText(FJ).width; ZJ > UJ;) {
              for (XJ = 0, AJ = 0, qJ = ""; AJ < UJ;) XJ++, qJ = FJ.substr(0, XJ), AJ = JJ.measureText(qJ).width;
              XJ--, qJ = qJ.substr(0, XJ);
              const cJ = XJ;
              if (" " !== FJ.substr(XJ, 1)) {
                for (;
                  " " !== FJ.substr(XJ, 1) && 0 !== XJ;) XJ--;
                0 === XJ && (XJ = cJ), qJ = FJ.substr(0, XJ)
              }
              qJ = this.justify ? this.justifyLine(JJ, qJ, nJ, "\u200a", eJ) : qJ, FJ = FJ.substr(XJ), ZJ = JJ.measureText(FJ).width, DJ.push(qJ)
            }
            ZJ > 0 && DJ.push(FJ)
          }
        }));
        const GJ = this.lineHeight ? this.lineHeight : this.getTextHeight(JJ, cJ),
          fJ = GJ * (DJ.length - 1),
          xJ = fJ / 2;
        let rJ = UJ;
        "top" === this.vAlign ? hJ = UJ + AJ : "bottom" === this.vAlign ? (hJ = jJ - fJ, rJ = jJ) : (rJ = UJ + XJ / 2, hJ -= xJ), DJ.forEach((cJ => {
          cJ = cJ.trim(), JJ.fillText(cJ, YJ, hJ), hJ += GJ
        })), this.debug && (JJ.lineWidth = 3, JJ.strokeStyle = "#00909e", JJ.strokeRect(ZJ, UJ, eJ, XJ), JJ.lineWidth = 2, JJ.strokeStyle = "#f6d743", JJ.beginPath(), JJ.moveTo(YJ, UJ), JJ.lineTo(YJ, jJ), JJ.stroke(), JJ.strokeStyle = "#ff6363", JJ.beginPath(), JJ.moveTo(ZJ, rJ), JJ.lineTo(qJ, rJ), JJ.stroke());
        return {
          height: fJ + GJ
        }
      },
      getTextHeight: function(JJ, cJ) {
        const ZJ = JJ.textBaseline;
        JJ.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: FJ
        } = JJ.measureText(cJ);
        return JJ.textBaseline = ZJ, FJ
      },
      justifyLine: function(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = cJ.trim(),
          XJ = JJ.measureText(eJ).width,
          AJ = eJ.split(/\s+/).length - 1,
          qJ = Math.floor((UJ - XJ) / ZJ);
        if (AJ <= 0 || qJ <= 0) return eJ;
        const jJ = Math.floor(qJ / AJ);
        let YJ = qJ - AJ * jJ,
          hJ = [];
        for (let DJ = 0; DJ < jJ; DJ++) hJ.push(FJ);
        hJ = hJ.join("");
        return eJ.replace(/\s+/g, (JJ => {
          const cJ = YJ > 0 ? hJ + FJ : hJ;
          return YJ--, JJ + cJ
        }))
      }
    }
  },
  38071: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      return cJ.set(JJ), cJ
    }
    ZJ.d(cJ, {
      e: () => FJ
    })
  },
  37642: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => GJ,
      d: () => nJ,
      h: () => DJ,
      k: () => YJ,
      o: () => hJ
    });
    var FJ = ZJ(3726),
      UJ = ZJ(235);
    const eJ = 1024,
      XJ = 1536,
      AJ = 2 * FJ.k + 1,
      qJ = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      jJ = 1.5;

    function YJ(JJ, cJ, ZJ) {
      if ("string" !== typeof JJ) return cJ;
      try {
        const ZJ = JSON.parse(JJ);
        return ZJ && "object" === typeof ZJ ? ZJ : cJ
      } catch (FJ) {
        return void 0 !== ZJ && console.error(`Couldn't parse ${ZJ}`, FJ), cJ
      }
    }

    function hJ(JJ) {
      return YJ(JJ, null, "a leaderboard's rows")
    }

    function DJ(JJ, cJ) {
      var ZJ, FJ;
      return null !== cJ && void 0 !== cJ ? cJ : {
        status: null !== (ZJ = JJ.status) && void 0 !== ZJ ? ZJ : "loading",
        entries: null !== (FJ = JJ.entries) && void 0 !== FJ ? FJ : []
      }
    }

    function sJ(JJ, cJ) {
      return "number" === typeof JJ && Number.isFinite(JJ) && JJ > 0 ? JJ : cJ
    }

    function nJ(JJ, cJ) {
      const ZJ = sJ(JJ.size, 1);
      let FJ = sJ(JJ.width, sJ(2.5 * ZJ, 2.5)),
        UJ = sJ(JJ.height, sJ(3.75 * ZJ, 3.75));
      Number.isFinite(eJ * UJ / FJ) && Number.isFinite(XJ * FJ / UJ) || (FJ = 2.5, UJ = 3.75);
      const AJ = UJ / FJ,
        qJ = Math.max(1, Math.min(eJ, cJ / AJ));
      return {
        width: FJ,
        height: UJ,
        layoutWidth: Math.max(eJ, XJ / AJ),
        layoutHeight: Math.max(XJ, eJ * AJ),
        pixelWidth: Math.round(qJ),
        pixelHeight: Math.round(Math.max(1, Math.min(cJ, qJ * AJ)))
      }
    }

    function GJ(JJ, cJ, ZJ, XJ, YJ, hJ) {
      JJ.setTransform(1, 0, 0, 1, 0, 0), JJ.fillStyle = UJ.D.defaultNameTagBackground, JJ.fillRect(0, 0, cJ, ZJ), JJ.scale(cJ / XJ.layoutWidth, ZJ / XJ.layoutHeight), JJ.translate((XJ.layoutWidth - eJ) / 2, 0),
        function(JJ, cJ, ZJ, eJ) {
          var XJ, YJ, hJ, DJ;
          const {
            top: sJ,
            around: nJ,
            showPlayerText: GJ,
            localPlayerDbId: rJ
          } = ZJ, {
            whiteUiText: vJ,
            grayUiText: mJ,
            yellowUiText: QJ
          } = UJ.D;
          JJ.textBaseline = "middle";
          const EJ = function(cJ, ZJ, FJ, UJ, eJ, XJ) {
              let AJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              JJ.font = `bold ${UJ}px 'Jetbrains Mono', monospace`, JJ.fillStyle = eJ, JJ.textAlign = AJ;
              let qJ = cJ.replace(/[\r\n\t]/g, " ");
              if (JJ.measureText(qJ).width > XJ) {
                for (; qJ.length > 0 && JJ.measureText(`${qJ}\u2026`).width > XJ;) qJ = qJ.slice(0, -1);
                qJ += "\u2026"
              }
              JJ.fillText(qJ, ZJ, FJ)
            },
            VJ = cJ => {
              JJ.fillStyle = vJ, JJ.globalAlpha = .15, JJ.fillRect(24, cJ, 976, 2), JJ.globalAlpha = 1
            },
            KJ = null === rJ ? null : (0, UJ.fc)(rJ),
            yJ = JJ => null !== KJ && JJ.playerHash === KJ,
            SJ = fJ(sJ.entries, FJ.n),
            IJ = "ready" === sJ.status && SJ.length > 0,
            MJ = null === nJ ? [] : fJ(nJ.entries, AJ),
            bJ = SJ.some(yJ),
            wJ = null === nJ ? null : function(JJ) {
              const cJ = JJ;
              if (!cJ || !Number.isFinite(cJ.rank) || !Number.isFinite(cJ.tied) || !Number.isFinite(cJ.total)) return null;
              return cJ
            }(nJ.standing),
            WJ = MJ.find(yJ),
            gJ = SJ.find(yJ),
            HJ = null === wJ || void 0 === WJ ? null : {
              value: WJ.value,
              rank: wJ.rank
            },
            PJ = xJ(SJ, void 0 === gJ || gJ.value === (null === HJ || void 0 === HJ ? void 0 : HJ.value) ? HJ : null),
            kJ = xJ(MJ, HJ),
            pJ = (JJ, cJ) => {
              const ZJ = JJ.findIndex(yJ);
              return ZJ >= 0 ? cJ[ZJ] : null
            },
            dJ = null !== (XJ = null !== (YJ = null === wJ || void 0 === wJ ? void 0 : wJ.rank) && void 0 !== YJ ? YJ : pJ(MJ, kJ)) && void 0 !== XJ ? XJ : pJ(SJ, PJ);
          JJ.font = "bold 34px 'Jetbrains Mono', monospace";
          const zJ = [...IJ ? PJ : [], ...bJ ? [] : kJ],
            NJ = Math.min(280, Math.max(0, ...zJ.map((cJ => JJ.measureText(qJ.format(cJ)).width)))),
            OJ = NJ <= 80,
            TJ = OJ ? 80 : 32 + NJ,
            CJ = OJ ? 148 : TJ + 28,
            uJ = 660 - CJ;
          EJ(`TOP ${FJ.n}  /  ALL TIME`, 24, 52, 28, mJ, 976), EJ(GJ ? String(null !== (hJ = cJ.title) && void 0 !== hJ ? hJ : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, vJ, 976), EJ("RANK", 32, 174, 28, mJ, CJ - 40), EJ("PLAYER", CJ, 174, 28, mJ, uJ), EJ(GJ ? String(null !== (DJ = cJ.scoreLabel) && void 0 !== DJ ? DJ : "Score").slice(0, 24) : "Score", 992, 174, 28, mJ, 304, "right"), VJ(202);
          const iJ = (eJ - 232) / (FJ.n + jJ + AJ),
            RJ = 208 + FJ.n * iJ,
            LJ = RJ + jJ * iJ,
            aJ = (cJ, ZJ, FJ, UJ) => {
              const eJ = yJ(cJ);
              JJ.fillStyle = eJ ? QJ : vJ, JJ.globalAlpha = eJ ? .15 : UJ ? .035 : 0, JJ.fillRect(24, FJ - iJ / 2 + 1, 976, iJ - 2), JJ.globalAlpha = 1;
              const XJ = eJ ? QJ : vJ;
              EJ(qJ.format(ZJ), TJ, FJ, 34, XJ, OJ ? 80 : NJ, OJ ? "center" : "right"), EJ(GJ ? String(cJ.name).slice(0, 64) : "Player", CJ, FJ, 34, XJ, uJ);
              const AJ = qJ.format(cJ.value);
              EJ(JJ.measureText(AJ).width > 304 ? cJ.value.toExponential(6) : AJ, 992, FJ, 34, XJ, 304, "right")
            };
          if (IJ)
            for (const [FJ, UJ] of SJ.entries()) aJ(UJ, PJ[FJ], 208 + (FJ + .5) * iJ, FJ % 2 === 0);
          else {
            const JJ = "error" === sJ.status,
              cJ = JJ ? "Couldn't load leaderboard" : "ready" === sJ.status ? "No scores yet" : "Loading leaderboard\u2026",
              ZJ = JJ ? "Trying again shortly" : "ready" === sJ.status ? "Be the first on the board!" : "Fetching the top players",
              FJ = (208 + RJ) / 2;
            EJ(cJ, 512, FJ - 28, 40, JJ ? UJ.D.redUiText : vJ, 960, "center"), EJ(ZJ, 512, FJ + 27, 30, mJ, 960, "center")
          }
          const BJ = RJ + jJ * iJ / 2;
          if (null === dJ) VJ(BJ);
          else {
            const cJ = null === wJ ? 0 : wJ.tied - 1,
              ZJ = `YOUR RANK #${qJ.format(dJ)}${null===wJ?"":` of ${qJ.format(wJ.total)}`}`;
            JJ.font = "bold 36px 'Jetbrains Mono', monospace";
            const FJ = Math.max(20, Math.min(36, Math.floor(34560 / JJ.measureText(ZJ).width)));
            EJ(ZJ, 512, BJ - (cJ > 0 ? 15 : 0), FJ, QJ, 960, "center"), cJ > 0 && EJ(`Tied with ${qJ.format(cJ)} other${1===cJ?"":"s"}`, 512, BJ + 24, 24, mJ, 960, "center")
          }
          if (null === nJ) return;
          const tJ = LJ + AJ * iJ / 2;
          if (bJ) EJ(`You're in the top ${FJ.n}!`, 512, tJ, 40, QJ, 960, "center");
          else if (0 === MJ.length) EJ("You're not on this board yet", 512, tJ, 34, mJ, 960, "center");
          else
            for (const [FJ, UJ] of MJ.entries()) aJ(UJ, kJ[FJ], LJ + (FJ + .5) * iJ, FJ % 2 === 0)
        }(JJ, YJ, hJ, XJ.layoutHeight)
    }

    function fJ(JJ, cJ) {
      return Array.isArray(JJ) ? JJ.slice(0, cJ).filter((JJ => JJ && Number.isFinite(JJ.rank) && Number.isFinite(JJ.value))) : []
    }

    function xJ(JJ, cJ) {
      const ZJ = [];
      let FJ = !1;
      return JJ.forEach(((UJ, eJ) => {
        if (null !== cJ && UJ.value === cJ.value) return void ZJ.push(cJ.rank);
        const XJ = eJ > 0 && UJ.value === JJ[eJ - 1].value;
        XJ || (FJ = 0 === eJ && 1 !== UJ.rank), ZJ.push(XJ && !FJ ? ZJ[eJ - 1] : UJ.rank)
      })), ZJ
    }
  },
  37818: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      g: () => eJ
    });
    const FJ = 32;

    function UJ(JJ) {
      return Array.from(JJ).length
    }

    function eJ(JJ) {
      const cJ = [""];
      let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        UJ = "";
      const eJ = () => {
        cJ.push(""), ZJ = 0, UJ = ""
      };
      for (const XJ of JJ.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(XJ)) eJ();
        else if (/^\s+$/.test(XJ)) UJ += XJ;
      else if (XJ.length > 0) {
        const JJ = Array.from(XJ);
        ZJ > 0 && ZJ + UJ.length + JJ.length > FJ && eJ(), cJ[cJ.length - 1] += UJ, ZJ += UJ.length, UJ = "";
        for (const UJ of JJ) ZJ >= FJ && eJ(), cJ[cJ.length - 1] += UJ, ZJ++
      }
      return cJ[cJ.length - 1] += UJ, cJ
    }
  },
  38062: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(35685),
      UJ = ZJ.n(FJ);
    const eJ = [1, 1, 1];

    function XJ(JJ) {
      if (!JJ) return [...eJ];
      try {
        const [cJ, ZJ, FJ] = UJ()(JJ).rgb().array();
        return [cJ / 255, ZJ / 255, FJ / 255]
      } catch (cJ) {
        return console.warn(`Invalid groundArrowPath colour "${JJ}":`, cJ), [...eJ]
      }
    }
  },
  33431: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => AJ,
      g: () => XJ,
      h: () => UJ,
      l: () => FJ
    });
    const FJ = {
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
      UJ = "/textures/dayNight/sun.png",
      eJ = "/textures/dayNight/moon.png",
      XJ = "/textures/dayNight/stars",
      AJ = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38141: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => YJ,
      f: () => hJ,
      h: () => FJ,
      k: () => qJ,
      l: () => UJ,
      o: () => jJ,
      q: () => AJ,
      u: () => XJ
    });
    const FJ = ["linear", "easeIn", "easeOut", "easeInOut"],
      UJ = ["movement", "camera", "cursor"],
      eJ = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function XJ(JJ, cJ) {
      return AJ(JJ, cJ, eJ)
    }

    function AJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (JJ === cJ || Number.isNaN(JJ) && Number.isNaN(cJ)) return !0;
      if ("object" !== typeof JJ || "object" !== typeof cJ || null === JJ || null === cJ || Array.isArray(JJ) !== Array.isArray(cJ)) return !1;
      const FJ = JJ,
        UJ = cJ;
      for (const eJ of new Set([...Object.keys(FJ), ...Object.keys(UJ)]))
        if (!ZJ.includes(eJ) && !AJ(FJ[eJ], UJ[eJ])) return !1;
      return !0
    }
    const qJ = {
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
      jJ = "^-[1-9][0-9]*$",
      YJ = "^#[0-9a-fA-F]{6}$",
      hJ = "#000000"
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);