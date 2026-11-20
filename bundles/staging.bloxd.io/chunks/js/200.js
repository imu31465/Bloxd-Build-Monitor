export const id = 200;
export const ids = [200];
export const modules = {
  38938: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    class lT {
      constructor(TT, kT) {
        this.read = TT, this.apply = kT, this.release = null
      }
      turn(TT, kT) {
        const cT = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: kT,
          forcedCameraDirection: [TT[0], TT[1], TT[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), kT + 100),
          transitionMs: cT
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(TT) {
        null !== this.release && (clearTimeout(this.release.timer), TT && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38489: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      h: () => MT
    });
    const lT = new Map;

    function MT(TT, kT) {
      lT.set(TT, kT)
    }

    function KT(TT) {
      return TT ? lT.get(TT) : void 0
    }
  },
  39371: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    var lT = cT(38062);

    function MT(TT, kT, cT) {
      var MT, KT, OT, yT, fT, xT, IT;
      const AT = (0, lT.c)(TT, kT, cT[0], cT[1], cT[2]),
        CT = AT ? null !== (MT = AT.textCell) && void 0 !== MT ? MT : AT.rect.anchor : cT,
        jT = kT(CT[0], CT[1], CT[2]);
      return {
        pos: [cT[0], cT[1], cT[2]],
        noticeboardSpan: AT && {
          width: AT.rect.width,
          height: AT.rect.height
        },
        text: null !== (KT = null === jT || void 0 === jT || null === (OT = jT.persisted) || void 0 === OT || null === (yT = OT.shared) || void 0 === yT ? void 0 : yT.text) && void 0 !== KT ? KT : "",
        textSize: null !== (fT = null === jT || void 0 === jT || null === (xT = jT.persisted) || void 0 === xT || null === (IT = xT.shared) || void 0 === IT ? void 0 : IT.textSize) && void 0 !== fT ? fT : null
      }
    }
  },
  38350: (TT, kT, cT) => {
    function lT(TT) {
      switch (TT.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    cT.d(kT, {
      e: () => MT,
      f: () => KT,
      i: () => lT
    });
    const MT = 4,
      KT = 3
  },
  38960: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      e: () => KT
    });
    var lT = cT(339);
    const MT = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class KT {
      constructor(TT) {
        this.importGame = TT, this.loads = new Map, this.loaded = new Map
      }
      load(TT) {
        const kT = (0, lT.Lb)(TT);
        if (!MT.has(kT)) return Promise.resolve(void 0);
        let cT = this.loads.get(kT);
        return cT || (cT = this.importGame(kT).then((TT => {
          const cT = TT.default;
          if ("function" !== typeof cT) throw new Error(`${kT}'s client code has no default-exported factory`);
          return this.loaded.set(kT, cT), cT
        })).catch((TT => {
          throw this.loads.delete(kT), TT
        })), this.loads.set(kT, cT)), cT
      }
      loadedFactory(TT) {
        const kT = (0, lT.Lb)(TT);
        if (!MT.has(kT)) return;
        const cT = this.loaded.get(kT);
        if (!cT) throw new Error(`${kT}'s client code started before it loaded`);
        return cT
      }
    }
  },
  39379: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(9542),
      MT = cT(9384),
      KT = cT(3214);

    function OT(TT) {
      if (TT === lT.b) return 0;
      const kT = (0, KT.e)(TT);
      if (void 0 !== kT && kT <= MT.MAX_BLOCK_ID) return kT;
      const cT = (0, KT.e)(TT.split("|")[0]);
      if (void 0 !== cT && cT <= MT.MAX_BLOCK_ID && (0, MT.rootMetaDescOf)(cT) === TT) return cT;
      throw new Error(`Invalid block name. You sent ${TT}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38998: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    var lT = cT(31);
    class MT {
      constructor(TT) {
        this.screen = TT, this.hidesHud = !1
      }
      show(TT, kT) {
        this.screen.setFade(TT.colour, TT.alpha), this.screen.setLetterbox(!0 === kT.letterbox, TT.alpha < 1), this.setHudHidden(!0 === kT.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(TT) {
        this.hidesHud !== TT && (this.hidesHud = TT, lT.e.set({
          isUiHiddenByCamera: TT
        }))
      }
    }
  },
  38972: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      f: () => CT,
      h: () => AT,
      i: () => OT,
      l: () => vT,
      m: () => fT,
      p: () => tT,
      s: () => xT,
      t: () => yT,
      x: () => IT
    });
    const lT = Math.PI / 2 - .001,
      MT = 2 * Math.PI,
      KT = 1e-9;

    function OT(TT, kT) {
      kT.heading = TT.heading, kT.pitch = TT.pitch
    }

    function yT(TT, kT) {
      const cT = kT - TT;
      return cT - MT * Math.floor((cT + Math.PI) / MT)
    }

    function fT(TT, kT, cT) {
      return TT + yT(TT, kT) * cT
    }

    function xT(TT) {
      if (!Number.isFinite(TT)) return TT;
      const kT = TT - MT * Math.floor(TT / MT);
      return kT < MT ? kT : 0
    }

    function IT(TT, kT) {
      return TT + yT(TT, kT)
    }

    function AT(TT) {
      return Math.max(-lT, Math.min(lT, TT))
    }

    function CT(TT, kT, cT) {
      const lT = Math.cos(kT);
      return cT[0] = lT * Math.sin(TT), cT[1] = -Math.sin(kT), cT[2] = lT * Math.cos(TT), cT
    }

    function jT(TT, kT, cT, lT) {
      const MT = Math.sqrt(TT * TT + cT * cT);
      return MT < KT && Math.abs(kT) < KT || (MT >= KT && (lT.heading = Math.atan2(TT, cT)), lT.pitch = AT(Math.atan2(-kT, MT) + 0)), lT
    }

    function vT(TT, kT) {
      return jT(TT[0], TT[1], TT[2], kT)
    }

    function tT(TT, kT, cT) {
      return jT(kT[0] - TT[0], kT[1] - TT[1], kT[2] - TT[2], cT)
    }
  },
  38990: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT,
      e: () => MT
    });
    var lT = cT(38972);

    function MT(TT) {
      var kT;
      const cT = "default" === TT.mode ? "movement" : null !== (kT = TT.playerFacing) && void 0 !== kT ? kT : "movement";
      return "cursor" === cT ? {
        facing: cT,
        mouseTurns: null
      } : {
        facing: cT,
        mouseTurns: "default" !== TT.mode && void 0 !== TT.playerLook ? "look" : "view"
      }
    }

    function KT(TT, kT, cT, MT, KT, OT) {
      return OT.Rm = 0, OT.Wm = 0, OT.pointedAt = void 0, void 0 !== MT ? KT ? (OT.pointedAt = MT, TT) : (0, lT.s)(MT.heading) : KT ? (OT.Rm = kT, OT.Wm = cT, TT) : (0, lT.s)(TT + kT)
    }
  },
  38980: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => RT
    });
    var lT = cT(38984),
      MT = cT(38972),
      KT = cT(36812);

    function OT(TT, kT, cT, lT) {
      if (!(lT > 0)) return kT;
      const MT = kT > TT ? Math.min(kT, TT + cT / lT) : Math.max(kT, TT - cT / lT);
      return Math.abs(kT - MT) < 1e-9 ? kT : MT
    }
    class yT {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: lT.f,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(TT) {
        !this.isGoingOut() && this.sinceTurnMs < lT.l.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: TT
        } : (this.waiting = null, this.startOut(TT))
      }
      fadeIn(TT) {
        this.isGoingOut() ? this.sinceTurnMs < lT.l.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: TT
        } : (this.waiting = null, this.startIn(TT)) : this.waiting = null
      }
      advance(TT) {
        const kT = this.waiting;
        if (null === kT) return this.step(TT);
        const cT = lT.l.minFadeTurnMs - this.sinceTurnMs;
        if (cT > TT) return this.step(TT);
        const MT = this.step(cT);
        return this.waiting = null, "out" === kT.turn ? this.startOut(kT.transition) : this.startIn(kT.minMs), this.step(TT - cT) || MT
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(TT) {
        ("in" === this.phase || null === this.phase && this.clearMs < lT.l.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = TT.colour), this.outMs = TT.outMs, this.holdMs = TT.holdMs, this.inMs = TT.inMs
      }
      startIn(TT) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(TT, this.inMs)
      }
      step(TT) {
        const kT = this.screen;
        this.sinceTurnMs += TT, null === this.phase && (this.clearMs += TT);
        let cT = !1,
          MT = TT;
        if ("out" === this.phase) {
          const lT = (1 - kT.alpha) * this.outMs;
          if (kT.alpha = OT(kT.alpha, 1, TT, this.outMs), kT.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, MT = Math.max(0, TT - lT), cT = !0
        }
        let KT = TT;
        if ("hold" === this.phase) {
          this.heldMs += MT;
          const TT = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - lT.l.minFadeTurnMs);
          if (TT < 0 || cT) return cT;
          this.phase = "in", this.sinceTurnMs = TT, KT = TT
        }
        return "in" === this.phase && (kT.alpha = OT(kT.alpha, 0, KT, this.inMs), kT.alpha <= 0 && (this.phase = null, this.clearMs = 0)), cT
      }
    }
    var fT = cT(38966),
      xT = cT(38988),
      IT = cT(1915),
      AT = cT(36398);

    function CT(TT, kT) {
      for (let cT = 0; cT < kT.length; cT++) kT[cT] = TT[cT]
    }

    function jT(TT, kT) {
      var cT;
      return null !== (cT = TT.fov) && void 0 !== cT ? cT : kT.getDefaultFov()
    }

    function vT(TT, kT, cT, lT, MT) {
      const KT = 2 / lT,
        OT = Math.exp(-KT * MT);
      for (let yT = 0; yT < TT.length; yT++) {
        const lT = TT[yT] - cT[yT],
          fT = (kT[yT] + KT * lT) * MT;
        TT[yT] = cT[yT] + (lT + fT) * OT, kT[yT] = (kT[yT] - KT * fT) * OT
      }
    }
    class tT {
      constructor(TT, kT, cT, lT) {
        var KT, OT, yT, fT, xT;
        this.settings = TT, this.pA = kT, this.targets = cT, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Oh = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, MT.s)((0, IT.k)(null !== (KT = TT.viewHeading) && void 0 !== KT ? KT : 0)),
          pitch: (0, MT.h)((0, IT.k)(null !== (OT = TT.viewElevation) && void 0 !== OT ? OT : 45))
        }, this.closestDistance = null !== (yT = TT.closestDistance) && void 0 !== yT ? yT : Math.min(6, null !== (fT = TT.furthestDistance) && void 0 !== fT ? fT : 1 / 0), this.furthestDistance = null !== (xT = TT.furthestDistance) && void 0 !== xT ? xT : Math.max(64, this.closestDistance);
        const AT = (0, MT.f)(this.base.heading, this.base.pitch, this.forward),
          CT = lT.position,
          jT = this.closestDistance;
        this.goal = [CT[0] + AT[0] * jT, CT[1] + AT[1] * jT, CT[2] + AT[2] * jT, jT, this.base.heading, this.base.pitch]
      }
      update(TT, kT, cT) {
        var lT, KT;
        this.placeGoal(null !== (lT = this.settings.fov) && void 0 !== lT ? lT : this.pA.getBaseFov()), this.goal[4] = (0, MT.x)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const OT = null !== (KT = this.settings.smoothMs) && void 0 !== KT ? KT : 400;
        !this.started || OT < 1 ? (CT(this.goal, this.smoothed), this.Oh.fill(0), this.started = !0) : vT(this.smoothed, this.Oh, this.goal, OT, TT), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, MT.h)(this.smoothed[5]), kT.apply(this.angles, cT);
        const yT = (0, MT.f)(cT.heading, cT.pitch, this.forward);
        for (let MT = 0; MT < 3; MT++) cT.position[MT] = this.smoothed[MT] - yT[MT] * this.smoothed[3];
        cT.fov = jT(this.settings, this.pA)
      }
      continueFrom(TT) {
        TT instanceof tT && (CT(TT.goal, this.goal), CT(TT.smoothed, this.smoothed), CT(TT.Oh, this.Oh), this.framedTargets = TT.framedTargets, this.started = TT.started)
      }
      reset() {
        this.Oh.fill(0), this.started = !1
      }
      placeGoal(TT) {
        var kT;
        let cT = 0;
        for (const IT of this.settings.targets) {
          const TT = this.targets.currentAimPoint(IT);
          TT && (0, fT.f)(TT, this.pointAt(cT++))
        }
        if (cT > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const TT = this.targets.aimPoint(this.pA.localPlayerId);
          TT && (0, fT.f)(TT, this.pointAt(cT++))
        }
        const lT = this.goal;
        if (0 === cT) return void(lT[3] = this.withinDistances(lT[3]));
        for (let fT = 0; fT < 3; fT++) {
          let TT = 1 / 0,
            kT = -1 / 0;
          for (let lT = 0; lT < cT; lT++) TT = Math.min(TT, this.points[lT][fT]), kT = Math.max(kT, this.points[lT][fT]);
          lT[fT] = (TT + kT) / 2
        }
        let MT = 0;
        for (let fT = 0; fT < cT; fT++) {
          const TT = this.points[fT];
          MT = Math.max(MT, Math.hypot(TT[0] - lT[0], TT[1] - lT[1], TT[2] - lT[2]))
        }
        const KT = Math.tan((0, IT.k)(TT) / 2),
          OT = Math.atan(KT * (!0 === this.settings.letterbox ? AT.e : 1)),
          yT = Math.atan(KT * this.pA.getAspectRatio()),
          xT = (MT + (null !== (kT = this.settings.padding) && void 0 !== kT ? kT : 2)) / Math.sin(Math.min(OT, yT));
        lT[3] = this.withinDistances(xT)
      }
      withinDistances(TT) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, TT))
      }
      pointAt(TT) {
        return TT === this.points.length && this.points.push([0, 0, 0]), this.points[TT]
      }
    }
    class hT {
      constructor(TT) {
        this.limits = TT, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(TT) {
        this.limits && (this.yawOffset = TT.yawOffset, this.pitchOffset = TT.pitchOffset, this.idleMs = TT.idleMs)
      }
      update(TT, kT) {
        const cT = this.limits;
        if (!cT) return;
        const lT = Number.isFinite(kT.Rm) ? kT.Rm : 0,
          MT = Number.isFinite(kT.Wm) ? kT.Wm : 0;
        if (kT.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: kT.pointedAt.heading,
          pitch: kT.pointedAt.pitch
        };
        else if (0 !== lT || 0 !== MT) this.idleMs = 0, this.yawOffset += lT, this.pitchOffset += MT;
        else {
          const kT = Math.max(0, this.idleMs + TT - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += TT, void 0 !== cT.returnMs && kT > 0) {
            const TT = cT.returnMs > 0 ? Math.exp(-3 * kT / cT.returnMs) : 0;
            this.yawOffset *= TT, this.pitchOffset *= TT
          }
        }
        this.clampOffsets(cT)
      }
      clampOffsets(TT) {
        if (TT.maxYaw >= 180) this.yawOffset = (0, MT.t)(0, this.yawOffset);
        else {
          const kT = (0, IT.k)(TT.maxYaw);
          this.yawOffset = Math.max(-kT, Math.min(kT, this.yawOffset))
        }
        const kT = (0, IT.k)(TT.maxPitch);
        this.pitchOffset = Math.max(-kT, Math.min(kT, this.pitchOffset))
      }
      apply(TT, kT) {
        this.pointedAt && this.limits && (this.yawOffset = (0, MT.t)(TT.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - TT.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const cT = (0, MT.h)(TT.pitch + this.pitchOffset);
        this.pitchOffset = cT - TT.pitch, kT.heading = (0, MT.s)(TT.heading + this.yawOffset), kT.pitch = cT
      }
      unapply(TT, kT) {
        kT.heading = (0, MT.s)(TT.heading - this.yawOffset), kT.pitch = (0, MT.h)(TT.pitch - this.pitchOffset)
      }
    }
    const NT = 1e-6;

    function QT(TT) {
      return Math.sqrt(TT[0] * TT[0] + TT[1] * TT[1] + TT[2] * TT[2])
    }

    function ST(TT, kT, cT, lT, MT) {
      const KT = MT * MT,
        OT = KT * MT;
      return (2 * OT - 3 * KT + 1) * TT + (OT - 2 * KT + MT) * kT + (-2 * OT + 3 * KT) * cT + (OT - KT) * lT
    }

    function DT(TT, kT, cT, lT, MT) {
      const KT = MT * MT;
      return (6 * KT - 6 * MT) * TT + (3 * KT - 4 * MT + 1) * kT + (-6 * KT + 6 * MT) * cT + (3 * KT - 2 * MT) * lT
    }

    function aT(TT, kT) {
      const cT = kT[0] - TT[0],
        lT = kT[1] - TT[1],
        MT = kT[2] - TT[2];
      return Math.sqrt(cT * cT + lT * lT + MT * MT)
    }

    function FT(TT, kT, cT, lT, MT, KT) {
      for (let OT = 0; OT < 3; OT++) KT[OT] = MT ? TT[OT] * lT : cT[OT] - kT[OT];
      return MT && function(TT, kT) {
        const cT = QT(TT);
        if (cT > kT) {
          const lT = kT / cT;
          TT[0] *= lT, TT[1] *= lT, TT[2] *= lT
        }
      }(KT, 3 * aT(kT, cT)), KT
    }

    function rT(TT, kT, cT, lT) {
      for (let MT = 0; MT < 3; MT++) lT[MT] = 6 * (kT[MT] - TT[MT]) - 2 * cT[MT];
      if (QT(lT) < NT)
        for (let MT = 0; MT < 3; MT++) lT[MT] = kT[MT] - TT[MT];
      return lT
    }

    function PT(TT, kT) {
      return [2 * kT[0] - TT[0], 2 * kT[1] - TT[1], 2 * kT[2] - TT[2]]
    }

    function wT(TT, kT, cT, lT, MT, KT, OT) {
      if (!KT && !OT) return 0;
      const yT = KT ? TT : 2 * kT - cT,
        fT = OT ? cT : 2 * kT - TT,
        xT = KT ? lT : MT,
        IT = OT ? MT : lT,
        AT = (kT - yT) / xT,
        CT = (fT - kT) / IT;
      if (AT * CT <= 0) return 0;
      const jT = (fT - yT) / (xT + IT),
        vT = 3 * Math.min(Math.abs(AT), Math.abs(CT));
      return Math.max(-vT, Math.min(vT, jT))
    }

    function mT(TT, kT, cT, lT, MT, KT, OT) {
      const {
        u: yT,
        segmentMs: fT
      } = TT;
      if (!TT.curved) return cT + (lT - cT) * yT;
      return ST(cT, wT(kT, cT, lT, TT.beforeMs, fT, KT, !0) * fT, lT, wT(cT, lT, MT, fT, TT.afterMs, !0, OT) * fT, yT)
    }

    function bT(TT) {
      return Math.abs(TT.pitch) >= MT.e
    }
    class zT {
      constructor(TT, kT, cT, lT, MT) {
        this.nodes = TT, this.prevNodes = cT, this.nextNodes = lT, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = TT.map(((TT, cT) => this.nodeTangent(kT, MT, cT)))
      }
      sample(TT, kT, cT) {
        const {
          index: lT,
          toIndex: KT,
          segmentMs: OT,
          curved: yT
        } = TT, fT = this.fromAngles, xT = this.toAngles, IT = this.nodeAngles(lT, cT.position, kT, fT), AT = this.nodeAngles(KT, cT.position, kT, xT);
        if (OT > 0 && "aim" !== IT && "aim" !== AT && this.liveTangent(TT, fT)) return cT.heading = (0, MT.s)(fT.heading), void(cT.pitch = fT.pitch);
        if ("none" === IT && "none" === AT) return;
        !yT && OT > 0 && ("tangent" === IT && this.liveTangent(TT, fT), "tangent" === AT && this.liveTangent(TT, xT)), "none" === IT ? (0, MT.i)(xT, fT) : "none" === AT && (0, MT.i)(fT, xT);
        const CT = yT && TT.beforeIndex >= 0 && "none" !== this.nodeAngles(TT.beforeIndex, cT.position, kT, this.beforeAngles),
          jT = yT && TT.afterIndex >= 0 && "none" !== this.nodeAngles(TT.afterIndex, cT.position, kT, this.afterAngles),
          vT = (0, MT.x)(fT.heading, xT.heading),
          tT = mT(TT, CT ? (0, MT.x)(fT.heading, this.beforeAngles.heading) : 0, fT.heading, vT, jT ? (0, MT.x)(vT, this.afterAngles.heading) : 0, CT, jT);
        cT.heading = (0, MT.s)(tT), cT.pitch = (0, MT.h)(mT(TT, this.beforeAngles.pitch, fT.pitch, xT.pitch, this.afterAngles.pitch, CT, jT))
      }
      nodeAngles(TT, kT, cT, lT) {
        const MT = this.rawNodeAngles(TT, kT, cT, lT);
        return "none" !== MT && bT(lT) && !this.borrowHeading(this.prevNodes[TT], kT, cT, lT) && this.borrowHeading(this.nextNodes[TT], kT, cT, lT), MT
      }
      borrowHeading(TT, kT, cT, lT) {
        const MT = this.borrowedAngles;
        return !(TT < 0 || "none" === this.rawNodeAngles(TT, kT, cT, MT) || bT(MT)) && (lT.heading = MT.heading, !0)
      }
      rawNodeAngles(TT, kT, cT, lT) {
        const KT = this.nodes[TT].keyframe;
        if (KT.lookDirection) return (0, MT.l)(KT.lookDirection, lT), "aim";
        if (void 0 !== KT.lookAt) {
          const TT = cT(KT.lookAt);
          if (TT) return (0, MT.p)(kT, TT, lT), "aim"
        }
        const OT = this.tangents[TT];
        return OT ? ((0, MT.i)(OT, lT), "tangent") : "none"
      }
      liveTangent(TT, kT) {
        const cT = this.nodes[TT.index].position,
          lT = this.nodes[TT.toIndex].position,
          KT = this.derivative;
        for (let MT = 0; MT < 3; MT++) KT[MT] = DT(cT[MT], TT.fromTangent[MT], lT[MT], TT.toTangent[MT], TT.u);
        return QT(KT) > 1e-9 ? ((0, MT.l)(KT, kT), !0) : !(aT(cT, lT) < NT) && ((0, MT.l)(rT(cT, lT, TT.u < .5 ? TT.toTangent : TT.fromTangent, KT), kT), !0)
      }
      nodeTangent(TT, kT, cT) {
        var lT;
        const KT = TT[cT];
        if (QT(KT) > 1e-9) return (0, MT.l)(KT, {
          heading: 0,
          pitch: 0
        });
        const OT = null !== (lT = this.restDirectionTo(cT, cT + 1, TT, kT)) && void 0 !== lT ? lT : this.restDirectionTo(cT, cT - 1, TT, kT);
        return OT ? (0, MT.l)(OT, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(TT, kT, cT, lT) {
        const MT = this.nodes[TT],
          KT = this.nodes[kT];
        if (!KT || aT(MT.position, KT.position) < NT) return null;
        const [OT, yT] = kT > TT ? [MT, KT] : [KT, MT], fT = FT(cT[kT], OT.position, yT.position, yT.timeMs - OT.timeMs, lT, [0, 0, 0]);
        return rT(OT.position, yT.position, fT, [0, 0, 0])
      }
    }

    function JT(TT, kT) {
      const cT = TT.lookDirection || kT.lookDirection ? function(TT, kT) {
        if (!TT || !kT) return TT === kT;
        const cT = QT(TT),
          lT = QT(kT);
        return Math.hypot(TT[0] / cT - kT[0] / lT, TT[1] / cT - kT[1] / lT, TT[2] / cT - kT[2] / lT) < NT
      }(TT.lookDirection, kT.lookDirection) : (lT = TT.lookAt, MT = kT.lookAt, "object" !== typeof lT || "object" !== typeof MT ? lT === MT : aT(lT, MT) < NT);
      var lT, MT;
      return aT(TT.position, kT.position) < NT && TT.fov === kT.fov && cT
    }
    class oT {
      constructor(TT, kT, cT) {
        if (this.smooth = kT, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === TT.length) throw new Error("A camera path needs at least one keyframe");
        for (let KT = 1; KT < TT.length; KT++)
          if (!(TT[KT].timeMs > TT[KT - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = TT.map((TT => {
          var kT;
          return {
            timeMs: TT.timeMs,
            position: [...TT.position],
            keyframe: TT,
            easing: (0, KT.p)(null !== (kT = TT.easing) && void 0 !== kT ? kT : "linear")
          }
        }));
        const lT = this.nodes[0],
          MT = this.nodes[this.nodes.length - 1],
          OT = cT && this.nodes.length > 1;
        OT && !JT(lT.keyframe, MT.keyframe) && this.nodes.push({
          ...lT,
          timeMs: MT.timeMs + (MT.timeMs - lT.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = OT ? this.nodes[this.nodes.length - 1].timeMs - lT.timeMs : 0, this.prevNodes = this.nodes.map(((TT, kT) => this.neighbour(kT, -1))), this.nextNodes = this.nodes.map(((TT, kT) => this.neighbour(kT, 1))), this.prevGaps = this.prevNodes.map(((TT, kT) => TT >= 0 ? this.gapMs(kT, -1) : 0)), this.nextGaps = this.nextNodes.map(((TT, kT) => TT >= 0 ? this.gapMs(kT, 1) : 0)), this.velocities = this.nodes.map(((TT, kT) => {
          const cT = this.prevNodes[kT],
            lT = this.nextNodes[kT];
          return function(TT, kT, cT, lT, MT, KT) {
            if (KT[0] = 0, KT[1] = 0, KT[2] = 0, !TT && !cT) return KT;
            const OT = null !== TT && void 0 !== TT ? TT : PT(null !== cT && void 0 !== cT ? cT : kT, kT),
              yT = null !== cT && void 0 !== cT ? cT : PT(null !== TT && void 0 !== TT ? TT : kT, kT),
              fT = TT ? lT : MT,
              xT = cT ? MT : lT,
              IT = aT(OT, kT),
              AT = aT(kT, yT);
            if (IT < NT || AT < NT) return KT;
            const CT = Math.sqrt(IT),
              jT = Math.sqrt(AT),
              vT = (CT + jT) / (fT + xT);
            for (let tT = 0; tT < 3; tT++) {
              const TT = (kT[tT] - OT[tT]) / CT - (yT[tT] - OT[tT]) / (CT + jT) + (yT[tT] - kT[tT]) / jT;
              KT[tT] = TT * vT
            }
            return KT
          }(cT >= 0 ? this.nodes[cT].position : null, TT.position, lT >= 0 ? this.nodes[lT].position : null, this.prevGaps[kT], this.nextGaps[kT], [0, 0, 0])
        })), this.aim = new zT(this.nodes, this.velocities, this.prevNodes, this.nextNodes, kT)
      }
      sample(TT, kT, cT, lT) {
        const MT = this.findSegment(this.pathTime(TT));
        this.samplePosition(MT, lT.position), this.aim.sample(MT, kT, lT);
        const {
          beforeIndex: KT,
          afterIndex: OT
        } = MT;
        lT.fov = mT(MT, KT >= 0 ? this.fovAt(KT, cT) : 0, this.fovAt(MT.index, cT), this.fovAt(MT.toIndex, cT), OT >= 0 ? this.fovAt(OT, cT) : 0, KT >= 0, OT >= 0)
      }
      pathTime(TT) {
        const kT = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || TT <= kT) return TT;
        const cT = TT - kT;
        return kT + cT - this.loopMs * Math.floor(cT / this.loopMs)
      }
      findSegment(TT) {
        const kT = this.nodes,
          cT = this.segment;
        let lT = cT.index;
        for (TT < kT[lT].timeMs && (lT = 0); lT < kT.length - 2 && kT[lT + 1].timeMs <= TT;) lT++;
        const MT = Math.min(lT + 1, kT.length - 1),
          OT = kT[MT].timeMs - kT[lT].timeMs;
        return cT.index = lT, cT.toIndex = MT, cT.segmentMs = OT, cT.u = OT > 0 ? (0, KT.n)((TT - kT[lT].timeMs) / OT, kT[lT].easing) : 1, cT.curved = this.smooth && OT > 0, cT.beforeIndex = this.prevNodes[lT], cT.afterIndex = this.nextNodes[MT], cT.beforeMs = this.prevGaps[lT], cT.afterMs = this.nextGaps[MT], cT
      }
      samplePosition(TT, kT) {
        const {
          fromTangent: cT,
          toTangent: lT,
          curved: MT
        } = TT, KT = this.nodes[TT.index].position, OT = this.nodes[TT.toIndex].position;
        FT(this.velocities[TT.index], KT, OT, TT.segmentMs, MT, cT), FT(this.velocities[TT.toIndex], KT, OT, TT.segmentMs, MT, lT);
        const yT = TT.u;
        for (let fT = 0; fT < 3; fT++) kT[fT] = MT ? ST(KT[fT], cT[fT], OT[fT], lT[fT], yT) : KT[fT] + (OT[fT] - KT[fT]) * yT
      }
      fovAt(TT, kT) {
        var cT;
        return null !== (cT = this.nodes[TT].keyframe.fov) && void 0 !== cT ? cT : kT
      }
      neighbour(TT, kT) {
        const cT = this.nodes.length - 1,
          lT = TT + kT;
        return lT >= 0 && lT <= cT ? lT : this.loopMs <= 0 || cT < 2 ? -1 : lT < 0 ? cT - 1 : 1
      }
      gapMs(TT, kT) {
        const cT = this.nodes.length - 1;
        if (1 === kT) {
          const kT = TT === cT ? 0 : TT;
          return this.nodes[kT + 1].timeMs - this.nodes[kT].timeMs
        }
        const lT = 0 === TT ? cT : TT;
        return this.nodes[lT].timeMs - this.nodes[lT - 1].timeMs
      }
    }
    class HT {
      constructor(TT) {
        this.pA = TT, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = kT => TT.getEntityPosition(kT), this.readAimPoint = kT => TT.getEntityAimPoint(kT)
      }
      aimPoint(TT) {
        return "string" !== typeof TT ? (0, fT.n)(TT, 3) ? TT : null : this.resolve(TT, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(TT) {
        const kT = "string" === typeof TT ? this.pA.getEntityAimPoint(TT) : TT;
        return kT && (0, fT.n)(kT, 3) ? kT : null
      }
      feetPosition(TT) {
        return this.resolve(TT, this.readFeet, this.lastFeet)
      }
      heading(TT) {
        const kT = this.pA.getEntityHeading(TT);
        if (null !== kT && Number.isFinite(kT)) return this.lastHeadings.set(TT, kT), kT;
        const cT = this.lastHeadings.get(TT);
        return void 0 !== cT ? cT : TT === this.pA.localPlayerId ? 0 : this.heading(this.pA.localPlayerId)
      }
      resolve(TT, kT, cT) {
        const lT = kT(TT);
        let MT = cT.get(TT);
        return lT && (0, fT.n)(lT, 3) ? (MT || (MT = [0, 0, 0], cT.set(TT, MT)), MT[0] = lT[0], MT[1] = lT[1], MT[2] = lT[2], MT) : MT || (TT === this.pA.localPlayerId ? null : this.resolve(this.pA.localPlayerId, kT, cT))
      }
    }

    function eT(TT) {
      return {
        heading: TT.heading,
        pitch: TT.pitch
      }
    }

    function GT(TT, kT) {
      Number.isFinite(TT.heading) && Number.isFinite(TT.pitch) || (0, MT.i)(kT, TT)
    }

    function VT(TT, kT, cT, lT, KT) {
      if (kT) return void(0, MT.l)(kT, KT);
      const OT = lT.aimPoint(cT);
      OT && (0, MT.p)(TT, OT, KT)
    }
    class ET {
      constructor(TT, kT, cT, lT) {
        this.settings = TT, this.pA = kT, this.targets = cT, this.base = void 0, this.base = eT(lT)
      }
      update(TT, kT, cT) {
        var lT;
        const MT = this.settings;
        (0, fT.f)(MT.position, cT.position), VT(MT.position, MT.lookDirection, null !== (lT = MT.lookAt) && void 0 !== lT ? lT : this.pA.localPlayerId, this.targets, this.base), kT.apply(this.base, cT), cT.fov = jT(MT, this.pA)
      }
      continueFrom(TT) {
        TT instanceof ET && (0, MT.i)(TT.base, this.base)
      }
      reset(TT) {
        GT(this.base, TT)
      }
    }
    class ZT {
      constructor(TT, kT, cT, lT) {
        this.settings = TT, this.pA = kT, this.targets = cT, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Oh = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = eT(lT), this.goal = [...lT.position]
      }
      update(TT, kT, cT) {
        var lT, MT, KT;
        const OT = this.settings,
          yT = null !== (lT = OT.target) && void 0 !== lT ? lT : this.pA.localPlayerId,
          xT = this.targets.feetPosition(yT);
        let IT = !1;
        xT && (IT = this.foundFeet && aT(this.lastFeet, xT) > 32 + .1 * TT, (0, fT.f)(xT, this.lastFeet), this.foundFeet = !0, this.placeGoal(xT, yT));
        const AT = null !== (MT = OT.smoothMs) && void 0 !== MT ? MT : 0;
        !this.started || AT < 1 || IT ? ((0, fT.f)(this.goal, this.smoothed), this.Oh.fill(0), this.started = !0) : vT(this.smoothed, this.Oh, this.goal, AT, TT), IT && (this.distance = -1), (0, fT.f)(this.smoothed, cT.position);
        const CT = !0 === OT.avoidTerrain ? this.pullIn(yT, TT, cT) : 1;
        let tT = this.goal;
        if ("target" === OT.offsetSpace) tT = cT.position;
        else if (CT < 1) {
          tT = this.aimOrigin;
          for (let TT = 0; TT < 3; TT++) tT[TT] = cT.position[TT] + (this.goal[TT] - this.smoothed[TT]) * CT
        }
        VT(tT, OT.lookDirection, null !== (KT = OT.lookAt) && void 0 !== KT ? KT : yT, this.targets, this.base), kT.apply(this.base, cT), cT.fov = jT(OT, this.pA)
      }
      continueFrom(TT) {
        TT instanceof ZT && (0, lT.u)(TT.settings.target, this.settings.target) && ((0, MT.i)(TT.base, this.base), (0, fT.f)(TT.goal, this.goal), (0, fT.f)(TT.lastFeet, this.lastFeet), this.foundFeet = TT.foundFeet, (0, fT.f)(TT.smoothed, this.smoothed), (0, fT.f)(TT.Oh, this.Oh), this.started = TT.started, !0 === TT.settings.avoidTerrain && (this.distance = TT.distance))
      }
      reset(TT) {
        GT(this.base, TT), this.Oh.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(TT, kT, cT) {
        const lT = this.targets.aimPoint(TT);
        if (!lT) return 1;
        const MT = cT.position,
          KT = aT(lT, MT);
        if (!(KT > 0)) return 1;
        const OT = this.toCamera;
        for (let fT = 0; fT < 3; fT++) OT[fT] = (MT[fT] - lT[fT]) / KT;
        const yT = function(TT, kT, cT) {
          return TT < 0 || kT < TT ? kT : kT + (TT - kT) * Math.exp(-cT / 150)
        }(this.distance, function(TT, kT, cT, lT) {
          const MT = TT.raycastTerrain(kT, cT, lT);
          return null !== MT && Number.isFinite(MT) ? Math.min(lT, Math.max(0, MT - .2)) : lT
        }(this.pA, lT, OT, KT), kT);
        if (KT - yT < .001) return this.distance = -1, 1;
        this.distance = yT;
        for (let fT = 0; fT < 3; fT++) MT[fT] = lT[fT] + OT[fT] * yT;
        return yT / KT
      }
      placeGoal(TT, kT) {
        const cT = this.settings.offset;
        let lT = cT[0],
          MT = cT[2];
        if ("target" === this.settings.offsetSpace) {
          const TT = this.targets.heading(kT),
            KT = Math.cos(TT),
            OT = Math.sin(TT);
          lT = cT[0] * KT + cT[2] * OT, MT = -cT[0] * OT + cT[2] * KT
        }
        this.goal[0] = TT[0] + lT, this.goal[1] = TT[1] + cT[1], this.goal[2] = TT[2] + MT
      }
    }
    class uT {
      constructor(TT, kT, cT, lT) {
        var MT, KT;
        this.settings = TT, this.pA = kT, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = TT.keyframes.length > 0 ? new oT(TT.keyframes, null === (MT = TT.smooth) || void 0 === MT || MT, null !== (KT = TT.loop) && void 0 !== KT && KT) : null, this.base = (0, fT.e)(lT, (0, fT.j)()), this.resolveTarget = TT => cT.aimPoint(TT)
      }
      update(TT, kT, cT) {
        this.elapsedMs += TT;
        const lT = jT(this.settings, this.pA);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, lT, this.base) : this.base.fov = lT, (0, fT.f)(this.base.position, cT.position), cT.fov = this.base.fov, kT.apply(this.base, cT)
      }
      continueFrom(TT) {
        TT instanceof uT && (0, lT.u)(TT.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = TT.elapsedMs, (0, fT.e)(TT.base, this.base))
      }
      reset(TT) {
        GT(this.base, TT), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function XT(TT, kT) {
      return (0, lT.w)(TT, kT)
    }
    class dT {
      constructor(TT, kT, cT) {
        var lT;
        this.settings = TT, this.pA = kT, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const MT = null !== cT && cT.settings.mode === TT.mode,
          KT = MT ? cT.pose : kT.getDefaultPose();
        this.pose = (0, fT.e)(KT, (0, fT.j)()), this.lastGoodPose = (0, fT.e)(MT ? cT.lastGoodPose : KT, (0, fT.j)()), this.look = new hT(TT.playerLook), this.targets = null !== (lT = null === cT || void 0 === cT ? void 0 : cT.targets) && void 0 !== lT ? lT : new HT(kT);
        const OT = (0, fT.e)(KT, (0, fT.j)());
        MT && cT.look.unapply(OT, OT), this.mode = function(TT, kT, cT, lT) {
          switch (TT.mode) {
            case "fixed":
              return new ET(TT, kT, cT, lT);
            case "follow":
              return new ZT(TT, kT, cT, lT);
            case "path":
              return new uT(TT, kT, cT, lT);
            case "frame":
              return new tT(TT, kT, cT, lT)
          }
        }(TT, kT, this.targets, OT), MT && (this.look.continueFrom(cT.look), this.mode.continueFrom(cT.mode))
      }
      update(TT, kT) {
        return this.look.update(TT, kT), this.mode.update(TT, this.look, this.pose), (0, fT.k)(this.pose) ? (0, fT.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, fT.e)(this.lastGoodPose, this.pose), this.mode.reset((0, fT.k)(this.lastGoodPose) ? this.lastGoodPose : this.pA.getDefaultPose())), this.pose
      }
    }

    function LT(TT) {
      return [0, 0, TT[2], TT[3]]
    }
    class RT {
      constructor(TT) {
        this.pA = TT, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new yT, this.shot = null, this.blend = null, this.mixed = (0, fT.j)(), this.output = (0, fT.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(TT) {
        const kT = (0, xT.e)(TT);
        if ((0, lT.u)(kT, this.pending ? this.pending.settings : this.settings)) return;
        const cT = XT(this.settings, kT);
        if (void 0 !== kT.transition && !cT) return this.pending = {
          settings: kT,
          shot: "default" === kT.mode ? null : new dT(kT, this.pA, null)
        }, void this.fade.fadeOut(kT.transition);
        const MT = null !== this.pending;
        this.pending = null, !MT && cT || this.fade.fadeIn(lT.l.minTransitionFadeMs), this.show(kT, !1)
      }
      show(TT, kT) {
        var cT, MT;
        if ((0, lT.u)(TT, this.settings)) return;
        const OT = !kT && XT(this.settings, TT);
        this.settings = TT;
        const yT = null !== this.blend && this.blend.elapsedMs > 0,
          xT = (0, fT.e)(this.hasOutput ? this.output : this.pA.getDefaultPose(), (0, fT.j)());
        if (this.shot = "default" === TT.mode ? null : new dT(TT, this.pA, kT ? null : this.shot), OT) return;
        const IT = kT || !this.shot && !this.hasOutput ? 0 : null !== (cT = TT.blendInMs) && void 0 !== cT ? cT : 0;
        if (IT <= 0) return void(this.blend = null);
        const AT = (0, KT.p)(null !== (MT = TT.blendEasing) && void 0 !== MT ? MT : "easeInOut");
        this.blend = {
          from: xT,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: IT,
          easing: yT ? LT(AT) : AT
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
      update(TT, kT) {
        const cT = Number.isFinite(TT) && TT > 0 ? TT : 0;
        if (this.fade.advance(cT) && null !== this.pending) {
          const {
            settings: TT
          } = this.pending;
          this.pending = null, this.show(TT, !0)
        }
        this.loadingPositions.length = 0;
        const lT = this.pending;
        if (null !== lT && void 0 !== lT && lT.shot) {
          const TT = "path" === lT.settings.mode ? 0 : cT;
          this.noteLoadingPosition(lT.shot.update(TT, fT.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const OT = this.shot ? this.shot.update(cT, kT) : this.pA.getDefaultPose();
        this.shot && this.noteLoadingPosition(OT.position);
        const yT = this.blend;
        if (!yT) return this.writeOutput(OT);
        yT.elapsedMs += cT;
        const xT = Math.min(1, yT.elapsedMs / yT.durationMs);
        if (yT.headingDelta = Number.isFinite(yT.headingDelta) ? (0, MT.x)(yT.headingDelta, OT.heading - yT.from.heading) : (0, MT.t)(yT.from.heading, OT.heading), (0, fT.p)(yT.from, OT, yT.headingDelta, (0, KT.n)(xT, yT.easing), this.mixed), xT >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else yT.fromScripted && this.noteLoadingPosition(yT.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(TT) {
        if (TT.every(Number.isFinite)) {
          const kT = this.loadingPositions;
          kT.push((0, fT.f)(TT, this.loadingSlots[kT.length]))
        }
      }
      writeOutput(TT) {
        const kT = this.output;
        (0, fT.k)(TT) ? (0, fT.e)(TT, kT) : this.hasOutput || (0, fT.e)(this.pA.getDefaultPose(), kT), kT.pitch = (0, MT.h)(kT.pitch);
        const cT = this.pA.getDefaultFov(),
          KT = Number.isFinite(cT) && cT > 0 && cT < 180,
          OT = KT ? Math.min(lT.l.minFov, cT) : lT.l.minFov,
          yT = KT ? Math.max(lT.l.maxFov, cT) : lT.l.maxFov;
        return kT.fov = Number.isFinite(kT.fov) ? Math.min(yT, Math.max(OT, kT.fov)) : yT, this.hasOutput = !0, kT
      }
    }
  },
  38966: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      e: () => yT,
      f: () => OT,
      j: () => KT,
      k: () => xT,
      n: () => fT,
      p: () => IT
    });
    var lT = cT(38972);
    const MT = {
      Rm: 0,
      Wm: 0
    };

    function KT() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function OT(TT, kT) {
      return kT[0] = TT[0], kT[1] = TT[1], kT[2] = TT[2], kT
    }

    function yT(TT, kT) {
      return OT(TT.position, kT.position), kT.heading = TT.heading, kT.pitch = TT.pitch, kT.fov = TT.fov, kT
    }

    function fT(TT, kT) {
      return Array.isArray(TT) && TT.length === kT && TT.every(Number.isFinite)
    }

    function xT(TT) {
      return fT(TT.position, 3) && Number.isFinite(TT.heading) && Number.isFinite(TT.pitch) && Number.isFinite(TT.fov)
    }

    function IT(TT, kT, cT, MT, KT) {
      for (let lT = 0; lT < 3; lT++) KT.position[lT] = TT.position[lT] + (kT.position[lT] - TT.position[lT]) * MT;
      return KT.heading = (0, lT.s)(TT.heading + cT * MT), KT.pitch = TT.pitch + (kT.pitch - TT.pitch) * MT, KT.fov = TT.fov + (kT.fov - TT.fov) * MT, KT
    }
  },
  38988: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => rT,
      g: () => CT
    });
    var lT = cT(38984),
      MT = cT(38966);
    const KT = lT.j,
      OT = lT.p;

    function yT(TT, kT, cT, lT) {
      return Number.isFinite(TT) ? Math.min(cT, Math.max(kT, TT)) : lT
    }

    function fT(TT, kT, cT) {
      return void 0 !== TT && Number.isFinite(TT) ? Math.min(cT, Math.max(kT, TT)) : void 0
    }

    function xT(TT) {
      const kT = lT.l.maxCoordinate;
      return [Math.min(kT, Math.max(-kT, TT[0])), Math.min(kT, Math.max(-kT, TT[1])), Math.min(kT, Math.max(-kT, TT[2]))]
    }

    function IT(TT) {
      return "string" === typeof TT ? TT : (0, MT.n)(TT, 3) ? xT(TT) : void 0
    }
    const AT = new RegExp(lT.s);

    function CT(TT) {
      return "string" === typeof TT && AT.test(TT)
    }

    function jT(TT) {
      const kT = [];
      if (!Array.isArray(TT)) return kT;
      for (const cT of TT.slice(0, lT.l.maxFrameTargets)) {
        const TT = IT(cT);
        void 0 === TT || "string" === typeof TT && !CT(TT) || kT.push(TT)
      }
      return kT
    }

    function vT(TT) {
      if (!(0, MT.n)(TT, 3)) return;
      const kT = Math.max(Math.abs(TT[0]), Math.abs(TT[1]), Math.abs(TT[2])),
        cT = Math.hypot(TT[0] / kT, TT[1] / kT, TT[2] / kT);
      return 0 === kT || kT * cT < lT.l.minDirectionLength ? void 0 : [TT[0] / kT / cT, TT[1] / kT / cT, TT[2] / kT / cT]
    }

    function tT(TT) {
      if (void 0 !== TT) return "string" === typeof TT ? KT.includes(TT) ? TT : void 0 : (0, MT.n)(TT, 4) ? [yT(TT[0], 0, 1, 0), yT(TT[1], lT.l.minEasingY, lT.l.maxEasingY, 0), yT(TT[2], 0, 1, 1), yT(TT[3], lT.l.minEasingY, lT.l.maxEasingY, 1)] : "linear"
    }

    function hT(TT) {
      if (TT) return {
        maxYaw: yT(TT.maxYaw, 0, lT.l.maxPlayerLook, 0),
        maxPitch: yT(TT.maxPitch, 0, lT.l.maxPlayerLook, 0),
        returnMs: fT(TT.returnMs, 0, lT.l.maxReturnMs)
      }
    }
    const NT = new RegExp(lT.c);

    function QT(TT) {
      var kT;
      if ("object" !== typeof TT || null === TT) return;
      const cT = lT.l.maxTransitionMs,
        MT = lT.l.minTransitionFadeMs;
      return {
        colour: "string" === typeof TT.colour && NT.test(TT.colour) ? TT.colour : lT.f,
        outMs: yT(TT.outMs, MT, cT, MT),
        holdMs: yT(null !== (kT = TT.holdMs) && void 0 !== kT ? kT : 0, 0, cT, 0),
        inMs: yT(TT.inMs, MT, cT, MT)
      }
    }

    function ST(TT) {
      return !0 === TT || void 0
    }

    function DT(TT) {
      if ("object" !== typeof TT || null === TT) return !1;
      const kT = TT.lookAt;
      return Number.isFinite(TT.timeMs) && (0, MT.n)(TT.position, 3) && (void 0 === kT || "string" === typeof kT || (0, MT.n)(kT, 3))
    }

    function aT(TT) {
      return {
        ...TT,
        timeMs: yT(TT.timeMs, 0, lT.l.maxPathMs, 0),
        position: xT(TT.position),
        lookAt: IT(TT.lookAt),
        lookDirection: vT(TT.lookDirection),
        fov: fT(TT.fov, lT.l.minFov, lT.l.maxFov),
        easing: tT(TT.easing)
      }
    }

    function FT(TT) {
      const kT = [];
      if (!Array.isArray(TT)) return kT;
      for (const cT of TT.slice(0, lT.l.maxKeyframes)) {
        if (!DT(cT)) continue;
        const TT = aT(cT);
        (0 === kT.length || TT.timeMs > kT[kT.length - 1].timeMs) && kT.push(TT)
      }
      return kT
    }

    function rT(TT) {
      if ("object" !== typeof TT || null === TT) return {
        mode: "default"
      };
      const kT = {
          blendInMs: fT(TT.blendInMs, 0, lT.l.maxBlendInMs),
          blendEasing: tT(TT.blendEasing),
          transition: QT(TT.transition),
          letterbox: ST(TT.letterbox),
          hideHud: ST(TT.hideHud)
        },
        cT = {
          mode: "default",
          ...kT
        };
      if ("default" === TT.mode || "fixed" === TT.mode && !(0, MT.n)(TT.position, 3)) return cT;
      const KT = {
        ...kT,
        fov: fT(TT.fov, lT.l.minFov, lT.l.maxFov),
        playerFacing: (AT = TT.playerFacing, OT.includes(AT) ? AT : void 0),
        playerLook: hT(TT.playerLook)
      };
      var AT, CT;
      switch (TT.mode) {
        case "fixed":
          return {
            ...TT, ...KT, position: xT(TT.position), lookAt: IT(TT.lookAt), lookDirection: vT(TT.lookDirection)
          };
        case "follow":
          return {
            ...TT, ...KT, target: "string" === typeof TT.target ? TT.target : void 0, lookAt: IT(TT.lookAt), offset: (CT = TT.offset, Array.isArray(CT) ? [yT(CT[0], -lT.l.maxOffset, lT.l.maxOffset, 0), yT(CT[1], -lT.l.maxOffset, lT.l.maxOffset, 0), yT(CT[2], -lT.l.maxOffset, lT.l.maxOffset, 0)] : [0, 0, 0]), lookDirection: vT(TT.lookDirection), smoothMs: fT(TT.smoothMs, 0, lT.l.maxSmoothMs)
          };
        case "path":
          return {
            ...TT, ...KT, keyframes: FT(TT.keyframes)
          };
        case "frame":
          return {
            ...TT, ...KT, targets: jT(TT.targets), viewHeading: fT(TT.viewHeading, -lT.l.maxFrameHeading, lT.l.maxFrameHeading), viewElevation: fT(TT.viewElevation, 0, lT.l.maxFrameElevation), padding: fT(TT.padding, 0, lT.l.maxFrameDistance), closestDistance: fT(TT.closestDistance, 0, lT.l.maxFrameDistance), furthestDistance: fT(TT.furthestDistance, 0, lT.l.maxFrameDistance), smoothMs: fT(TT.smoothMs, 0, lT.l.maxSmoothMs)
          };
        default:
          return cT
      }
    }
  },
  38497: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT
    });
    var lT = cT(1226);

    function MT(TT) {
      const kT = /(\d*\.?\d+)px/.exec(TT);
      return kT ? Number(kT[1]) : null
    }

    function KT(TT) {
      return TT.split(/[\s,]+/).pop()
    }
    let OT = !1;
    const yT = {
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
      drawText: function(TT, kT, lT, yT, fT, xT) {
        if (fT <= 0 || xT <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: IT,
          fontVariant: AT,
          fontWeight: CT,
          fontSize: jT,
          font: vT
        } = this, tT = [IT, AT, CT, `${jT}px`, vT].filter(Boolean).join(" "), hT = [
          [CT, `${jT}px`, KT(vT)].filter(Boolean).join(" "), `${jT}px sans-serif`
        ], NT = TT.font, QT = function(TT, kT, cT) {
          for (const lT of kT) {
            TT.font = lT;
            const kT = MT(TT.font),
              OT = KT(lT);
            if (null !== kT && Math.abs(kT - cT) <= .5 && TT.font.toLowerCase().includes(OT.toLowerCase())) return lT
          }
          return null
        }(TT, [tT, ...hT], jT);
        QT !== tT && function(TT, kT, lT) {
          OT || (OT = !0, Promise.resolve().then((() => cT(1082))).then((cT => {
            let {
              vt: MT
            } = cT;
            MT(new Error("A canvas didn't take canvasTxt's font"), {
              font: TT,
              wj: kT,
              drawnWith: null !== lT && void 0 !== lT ? lT : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(tT, NT, QT);
        const ST = MT(TT.font);
        if (null === QT && null !== ST && ST > 0) {
          const cT = jT / ST;
          TT.save();
          try {
            return TT.scale(cT, cT), {
              height: this.drawLines(TT, kT, lT / cT, yT / cT, fT / cT, xT / cT, ST).height * cT
            }
          } finally {
            TT.restore()
          }
        }
        return this.drawLines(TT, kT, lT, yT, fT, xT, jT)
      },
      drawLines: function(TT, kT, cT, MT, KT, OT, yT) {
        const fT = cT + KT,
          xT = MT + OT;
        let IT, AT = MT + OT / 2 + yT / 2;
        "right" === this.align ? (IT = fT, TT.textAlign = "right") : "left" === this.align ? (IT = cT, TT.textAlign = "left") : (IT = cT + KT / 2, TT.textAlign = "center");
        for (const lT of kT) {
          TT.measureText(lT).width >= KT && (kT = kT.replace(lT, ""))
        }
        kT = (0, lT.T)(kT);
        const CT = [],
          jT = kT.split("\n"),
          vT = this.justify ? TT.measureText("\u200a").width : 0;
        jT.forEach((kT => {
          let cT = TT.measureText(kT).width;
          if (cT <= KT) CT.push(kT);
          else {
            let lT = kT;
            const MT = KT;
            let OT, yT, fT;
            for (cT = TT.measureText(lT).width; cT > MT;) {
              for (OT = 0, yT = 0, fT = ""; yT < MT;) OT++, fT = lT.substr(0, OT), yT = TT.measureText(fT).width;
              OT--, fT = fT.substr(0, OT);
              const kT = OT;
              if (" " !== lT.substr(OT, 1)) {
                for (;
                  " " !== lT.substr(OT, 1) && 0 !== OT;) OT--;
                0 === OT && (OT = kT), fT = lT.substr(0, OT)
              }
              fT = this.justify ? this.justifyLine(TT, fT, vT, "\u200a", KT) : fT, lT = lT.substr(OT), cT = TT.measureText(lT).width, CT.push(fT)
            }
            cT > 0 && CT.push(lT)
          }
        }));
        const tT = this.lineHeight ? this.lineHeight : this.getTextHeight(TT, kT),
          hT = tT * (CT.length - 1),
          NT = hT / 2;
        let QT = MT;
        "top" === this.vAlign ? AT = MT + yT : "bottom" === this.vAlign ? (AT = xT - hT, QT = xT) : (QT = MT + OT / 2, AT -= NT), CT.forEach((kT => {
          kT = kT.trim(), TT.fillText(kT, IT, AT), AT += tT
        })), this.debug && (TT.lineWidth = 3, TT.strokeStyle = "#00909e", TT.strokeRect(cT, MT, KT, OT), TT.lineWidth = 2, TT.strokeStyle = "#f6d743", TT.beginPath(), TT.moveTo(IT, MT), TT.lineTo(IT, xT), TT.stroke(), TT.strokeStyle = "#ff6363", TT.beginPath(), TT.moveTo(cT, QT), TT.lineTo(fT, QT), TT.stroke());
        return {
          height: hT + tT
        }
      },
      getTextHeight: function(TT, kT) {
        const cT = TT.textBaseline;
        TT.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: lT
        } = TT.measureText(kT);
        return TT.textBaseline = cT, lT
      },
      justifyLine: function(TT, kT, cT, lT, MT) {
        const KT = kT.trim(),
          OT = TT.measureText(KT).width,
          yT = KT.split(/\s+/).length - 1,
          fT = Math.floor((MT - OT) / cT);
        if (yT <= 0 || fT <= 0) return KT;
        const xT = Math.floor(fT / yT);
        let IT = fT - yT * xT,
          AT = [];
        for (let CT = 0; CT < xT; CT++) AT.push(lT);
        AT = AT.join("");
        return KT.replace(/\s+/g, (TT => {
          const kT = IT > 0 ? AT + lT : AT;
          return IT--, TT + kT
        }))
      }
    }
  },
  38935: (TT, kT, cT) => {
    function lT(TT, kT) {
      return kT.set(TT), kT
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  38503: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => tT,
      e: () => vT,
      h: () => CT,
      k: () => IT,
      o: () => AT
    });
    var lT = cT(4235),
      MT = cT(339);
    const KT = 1024,
      OT = 1536,
      yT = 2 * lT.j + 1,
      fT = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      xT = 1.5;

    function IT(TT, kT, cT) {
      if ("string" !== typeof TT) return kT;
      try {
        const cT = JSON.parse(TT);
        return cT && "object" === typeof cT ? cT : kT
      } catch (lT) {
        return void 0 !== cT && console.error(`Couldn't parse ${cT}`, lT), kT
      }
    }

    function AT(TT) {
      return IT(TT, null, "a leaderboard's rows")
    }

    function CT(TT, kT) {
      var cT, lT;
      return null !== kT && void 0 !== kT ? kT : {
        status: null !== (cT = TT.status) && void 0 !== cT ? cT : "loading",
        entries: null !== (lT = TT.entries) && void 0 !== lT ? lT : []
      }
    }

    function jT(TT, kT) {
      return "number" === typeof TT && Number.isFinite(TT) && TT > 0 ? TT : kT
    }

    function vT(TT, kT) {
      const cT = jT(TT.size, 1);
      let lT = jT(TT.width, jT(2.5 * cT, 2.5)),
        MT = jT(TT.height, jT(3.75 * cT, 3.75));
      Number.isFinite(KT * MT / lT) && Number.isFinite(OT * lT / MT) || (lT = 2.5, MT = 3.75);
      const yT = MT / lT,
        fT = Math.max(1, Math.min(KT, kT / yT));
      return {
        width: lT,
        height: MT,
        layoutWidth: Math.max(KT, OT / yT),
        layoutHeight: Math.max(OT, KT * yT),
        pixelWidth: Math.round(fT),
        pixelHeight: Math.round(Math.max(1, Math.min(kT, fT * yT)))
      }
    }

    function tT(TT, kT, cT, OT, IT, AT) {
      TT.setTransform(1, 0, 0, 1, 0, 0), TT.fillStyle = MT.H.defaultNameTagBackground, TT.fillRect(0, 0, kT, cT), TT.scale(kT / OT.layoutWidth, cT / OT.layoutHeight), TT.translate((OT.layoutWidth - KT) / 2, 0),
        function(TT, kT, cT, KT) {
          var OT, IT, AT, CT;
          const {
            top: jT,
            around: vT,
            showPlayerText: tT,
            localPlayerDbId: QT
          } = cT, {
            whiteUiText: ST,
            grayUiText: DT,
            yellowUiText: aT
          } = MT.H;
          TT.textBaseline = "middle";
          const FT = function(kT, cT, lT, MT, KT, OT) {
              let yT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              TT.font = `bold ${MT}px 'Jetbrains Mono', monospace`, TT.fillStyle = KT, TT.textAlign = yT;
              let fT = kT.replace(/[\r\n\t]/g, " ");
              if (TT.measureText(fT).width > OT) {
                for (; fT.length > 0 && TT.measureText(`${fT}\u2026`).width > OT;) fT = fT.slice(0, -1);
                fT += "\u2026"
              }
              TT.fillText(fT, cT, lT)
            },
            rT = kT => {
              TT.fillStyle = ST, TT.globalAlpha = .15, TT.fillRect(24, kT, 976, 2), TT.globalAlpha = 1
            },
            PT = null === QT ? null : (0, MT.hc)(QT),
            wT = TT => null !== PT && TT.playerHash === PT,
            mT = hT(jT.entries, lT.l),
            bT = "ready" === jT.status && mT.length > 0,
            zT = null === vT ? [] : hT(vT.entries, yT),
            JT = mT.some(wT),
            oT = null === vT ? null : function(TT) {
              const kT = TT;
              if (!kT || !Number.isFinite(kT.rank) || !Number.isFinite(kT.tied) || !Number.isFinite(kT.total)) return null;
              return kT
            }(vT.standing),
            HT = zT.find(wT),
            eT = mT.find(wT),
            GT = null === oT || void 0 === HT ? null : {
              value: HT.value,
              rank: oT.rank
            },
            VT = NT(mT, void 0 === eT || eT.value === (null === GT || void 0 === GT ? void 0 : GT.value) ? GT : null),
            ET = NT(zT, GT),
            ZT = (TT, kT) => {
              const cT = TT.findIndex(wT);
              return cT >= 0 ? kT[cT] : null
            },
            uT = null !== (OT = null !== (IT = null === oT || void 0 === oT ? void 0 : oT.rank) && void 0 !== IT ? IT : ZT(zT, ET)) && void 0 !== OT ? OT : ZT(mT, VT);
          TT.font = "bold 34px 'Jetbrains Mono', monospace";
          const XT = [...bT ? VT : [], ...JT ? [] : ET],
            dT = Math.min(280, Math.max(0, ...XT.map((kT => TT.measureText(fT.format(kT)).width)))),
            LT = dT <= 80,
            RT = LT ? 80 : 32 + dT,
            gT = LT ? 148 : RT + 28,
            UT = 660 - gT;
          FT(`TOP ${lT.l}  /  ALL TIME`, 24, 52, 28, DT, 976), FT(tT ? String(null !== (AT = kT.title) && void 0 !== AT ? AT : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, ST, 976), FT("RANK", 32, 174, 28, DT, gT - 40), FT("PLAYER", gT, 174, 28, DT, UT), FT(tT ? String(null !== (CT = kT.scoreLabel) && void 0 !== CT ? CT : "Score").slice(0, 24) : "Score", 992, 174, 28, DT, 304, "right"), rT(202);
          const YT = (KT - 232) / (lT.l + xT + yT),
            BT = 208 + lT.l * YT,
            WT = BT + xT * YT,
            nT = (kT, cT, lT, MT) => {
              const KT = wT(kT);
              TT.fillStyle = KT ? aT : ST, TT.globalAlpha = KT ? .15 : MT ? .035 : 0, TT.fillRect(24, lT - YT / 2 + 1, 976, YT - 2), TT.globalAlpha = 1;
              const OT = KT ? aT : ST;
              FT(fT.format(cT), RT, lT, 34, OT, LT ? 80 : dT, LT ? "center" : "right"), FT(tT ? String(kT.name).slice(0, 64) : "Player", gT, lT, 34, OT, UT);
              const yT = fT.format(kT.value);
              FT(TT.measureText(yT).width > 304 ? kT.value.toExponential(6) : yT, 992, lT, 34, OT, 304, "right")
            };
          if (bT)
            for (const [lT, MT] of mT.entries()) nT(MT, VT[lT], 208 + (lT + .5) * YT, lT % 2 === 0);
          else {
            const TT = "error" === jT.status,
              kT = TT ? "Couldn't load leaderboard" : "ready" === jT.status ? "No scores yet" : "Loading leaderboard\u2026",
              cT = TT ? "Trying again shortly" : "ready" === jT.status ? "Be the first on the board!" : "Fetching the top players",
              lT = (208 + BT) / 2;
            FT(kT, 512, lT - 28, 40, TT ? MT.H.redUiText : ST, 960, "center"), FT(cT, 512, lT + 27, 30, DT, 960, "center")
          }
          const pT = BT + xT * YT / 2;
          if (null === uT) rT(pT);
          else {
            const kT = null === oT ? 0 : oT.tied - 1,
              cT = `YOUR RANK #${fT.format(uT)}${null===oT?"":` of ${fT.format(oT.total)}`}`;
            TT.font = "bold 36px 'Jetbrains Mono', monospace";
            const lT = Math.max(20, Math.min(36, Math.floor(34560 / TT.measureText(cT).width)));
            FT(cT, 512, pT - (kT > 0 ? 15 : 0), lT, aT, 960, "center"), kT > 0 && FT(`Tied with ${fT.format(kT)} other${1===kT?"":"s"}`, 512, pT + 24, 24, DT, 960, "center")
          }
          if (null === vT) return;
          const iT = WT + yT * YT / 2;
          if (JT) FT(`You're in the top ${lT.l}!`, 512, iT, 40, aT, 960, "center");
          else if (0 === zT.length) FT("You're not on this board yet", 512, iT, 34, DT, 960, "center");
          else
            for (const [lT, MT] of zT.entries()) nT(MT, ET[lT], WT + (lT + .5) * YT, lT % 2 === 0)
        }(TT, IT, AT, OT.layoutHeight)
    }

    function hT(TT, kT) {
      return Array.isArray(TT) ? TT.slice(0, kT).filter((TT => TT && Number.isFinite(TT.rank) && Number.isFinite(TT.value))) : []
    }

    function NT(TT, kT) {
      const cT = [];
      let lT = !1;
      return TT.forEach(((MT, KT) => {
        if (null !== kT && MT.value === kT.value) return void cT.push(kT.rank);
        const OT = KT > 0 && MT.value === TT[KT - 1].value;
        OT || (lT = 0 === KT && 1 !== MT.rank), cT.push(OT && !lT ? cT[KT - 1] : MT.rank)
      })), cT
    }
  },
  38698: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      f: () => KT
    });
    const lT = 32;

    function MT(TT) {
      return Array.from(TT).length
    }

    function KT(TT) {
      const kT = [""];
      let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        MT = "";
      const KT = () => {
        kT.push(""), cT = 0, MT = ""
      };
      for (const OT of TT.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(OT)) KT();
        else if (/^\s+$/.test(OT)) MT += OT;
      else if (OT.length > 0) {
        const TT = Array.from(OT);
        cT > 0 && cT + MT.length + TT.length > lT && KT(), kT[kT.length - 1] += MT, cT += MT.length, MT = "";
        for (const MT of TT) cT >= lT && KT(), kT[kT.length - 1] += MT, cT++
      }
      return kT[kT.length - 1] += MT, kT
    }
  },
  38932: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(36448),
      MT = cT.n(lT);
    const KT = [1, 1, 1];

    function OT(TT) {
      if (!TT) return [...KT];
      try {
        const [kT, cT, lT] = MT()(TT).rgb().array();
        return [kT / 255, cT / 255, lT / 255]
      } catch (kT) {
        return console.warn(`Invalid groundArrowPath colour "${TT}":`, kT), [...KT]
      }
    }
  },
  34024: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      c: () => yT,
      g: () => OT,
      k: () => MT,
      l: () => lT
    });
    const lT = {
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
      MT = "/textures/dayNight/sun.png",
      KT = "/textures/dayNight/moon.png",
      OT = "/textures/dayNight/stars",
      yT = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38984: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => IT,
      f: () => AT,
      j: () => lT,
      l: () => fT,
      p: () => MT,
      s: () => xT,
      u: () => yT,
      w: () => OT
    });
    const lT = ["linear", "easeIn", "easeOut", "easeInOut"],
      MT = ["movement", "camera", "cursor"],
      KT = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function OT(TT, kT) {
      return yT(TT, kT, KT)
    }

    function yT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (TT === kT || Number.isNaN(TT) && Number.isNaN(kT)) return !0;
      if ("object" !== typeof TT || "object" !== typeof kT || null === TT || null === kT || Array.isArray(TT) !== Array.isArray(kT)) return !1;
      const lT = TT,
        MT = kT;
      for (const KT of new Set([...Object.keys(lT), ...Object.keys(MT)]))
        if (!cT.includes(KT) && !yT(lT[KT], MT[KT])) return !1;
      return !0
    }
    const fT = {
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
      xT = "^-[1-9][0-9]*$",
      IT = "^#[0-9a-fA-F]{6}$",
      AT = "#000000"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);