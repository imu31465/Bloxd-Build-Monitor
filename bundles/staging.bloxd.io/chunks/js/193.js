export const id = 193;
export const ids = [193];
export const modules = {
  39271: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    class WT {
      constructor(TT, UT) {
        this.read = TT, this.apply = UT, this.release = null
      }
      turn(TT, UT) {
        const mT = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: UT,
          forcedCameraDirection: [TT[0], TT[1], TT[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), UT + 100),
          transitionMs: mT
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
  38770: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => zT
    });
    const WT = new Map;

    function zT(TT, UT) {
      WT.set(TT, UT)
    }

    function MT(TT) {
      return TT ? WT.get(TT) : void 0
    }
  },
  39728: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    var WT = mT(38357);

    function zT(TT, UT, mT) {
      var zT, MT, gT, nT, HT, kT, jT;
      const lT = (0, WT.e)(TT, UT, mT[0], mT[1], mT[2]),
        LT = lT ? null !== (zT = lT.textCell) && void 0 !== zT ? zT : lT.rect.anchor : mT,
        pT = UT(LT[0], LT[1], LT[2]);
      return {
        pos: [mT[0], mT[1], mT[2]],
        noticeboardSpan: lT && {
          width: lT.rect.width,
          height: lT.rect.height
        },
        text: null !== (MT = null === pT || void 0 === pT || null === (gT = pT.persisted) || void 0 === gT || null === (nT = gT.shared) || void 0 === nT ? void 0 : nT.text) && void 0 !== MT ? MT : "",
        textSize: null !== (HT = null === pT || void 0 === pT || null === (kT = pT.persisted) || void 0 === kT || null === (jT = kT.shared) || void 0 === jT ? void 0 : jT.textSize) && void 0 !== HT ? HT : null
      }
    }
  },
  38641: (TT, UT, mT) => {
    function WT(TT) {
      switch (TT.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    mT.d(UT, {
      b: () => zT,
      f: () => MT,
      g: () => WT
    });
    const zT = 4,
      MT = 3
  },
  39287: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => MT
    });
    var WT = mT(366);
    const zT = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class MT {
      constructor(TT) {
        this.importGame = TT, this.loads = new Map, this.loaded = new Map
      }
      load(TT) {
        const UT = (0, WT.dc)(TT);
        if (!zT.has(UT)) return Promise.resolve(void 0);
        let mT = this.loads.get(UT);
        return mT || (mT = this.importGame(UT).then((TT => {
          const mT = TT.default;
          if ("function" !== typeof mT) throw new Error(`${UT}'s client code has no default-exported factory`);
          return this.loaded.set(UT, mT), mT
        })).catch((TT => {
          throw this.loads.delete(UT), TT
        })), this.loads.set(UT, mT)), mT
      }
      loadedFactory(TT) {
        const UT = (0, WT.dc)(TT);
        if (!zT.has(UT)) return;
        const mT = this.loaded.get(UT);
        if (!mT) throw new Error(`${UT}'s client code started before it loaded`);
        return mT
      }
    }
  },
  39735: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(9411),
      zT = mT(34291),
      MT = mT(3411);

    function gT(TT) {
      if (TT === WT.e) return 0;
      const UT = (0, MT.c)(TT);
      if (void 0 !== UT && UT <= zT.MAX_BLOCK_ID) return UT;
      const mT = (0, MT.c)(TT.split("|")[0]);
      if (void 0 !== mT && mT <= zT.MAX_BLOCK_ID && (0, zT.rootMetaDescOf)(mT) === TT) return mT;
      throw new Error(`Invalid block name. You sent ${TT}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39334: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(25);
    class zT {
      constructor(TT) {
        this.screen = TT, this.hidesHud = !1
      }
      show(TT, UT) {
        this.screen.setFade(TT.colour, TT.alpha), this.screen.setLetterbox(!0 === UT.letterbox, TT.alpha < 1), this.setHudHidden(!0 === UT.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(TT) {
        this.hidesHud !== TT && (this.hidesHud = TT, WT.b.set({
          isUiHiddenByCamera: TT
        }))
      }
    }
  },
  39300: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT,
      g: () => LT,
      i: () => lT,
      j: () => gT,
      l: () => BT,
      o: () => HT,
      p: () => ZT,
      s: () => kT,
      w: () => nT,
      z: () => jT
    });
    const WT = Math.PI / 2 - .001,
      zT = 2 * Math.PI,
      MT = 1e-9;

    function gT(TT, UT) {
      UT.heading = TT.heading, UT.pitch = TT.pitch
    }

    function nT(TT, UT) {
      const mT = UT - TT;
      return mT - zT * Math.floor((mT + Math.PI) / zT)
    }

    function HT(TT, UT, mT) {
      return TT + nT(TT, UT) * mT
    }

    function kT(TT) {
      if (!Number.isFinite(TT)) return TT;
      const UT = TT - zT * Math.floor(TT / zT);
      return UT < zT ? UT : 0
    }

    function jT(TT, UT) {
      return TT + nT(TT, UT)
    }

    function lT(TT) {
      return Math.max(-WT, Math.min(WT, TT))
    }

    function LT(TT, UT, mT) {
      const WT = Math.cos(UT);
      return mT[0] = WT * Math.sin(TT), mT[1] = -Math.sin(UT), mT[2] = WT * Math.cos(TT), mT
    }

    function pT(TT, UT, mT, WT) {
      const zT = Math.sqrt(TT * TT + mT * mT);
      return zT < MT && Math.abs(UT) < MT || (zT >= MT && (WT.heading = Math.atan2(TT, mT)), WT.pitch = lT(Math.atan2(-UT, zT) + 0)), WT
    }

    function BT(TT, UT) {
      return pT(TT[0], TT[1], TT[2], UT)
    }

    function ZT(TT, UT, mT) {
      return pT(UT[0] - TT[0], UT[1] - TT[1], UT[2] - TT[2], mT)
    }
  },
  39331: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => zT
    });
    var WT = mT(39300);

    function zT(TT) {
      var UT;
      const mT = "default" === TT.mode ? "movement" : null !== (UT = TT.playerFacing) && void 0 !== UT ? UT : "movement";
      return "cursor" === mT ? {
        facing: mT,
        mouseTurns: null
      } : {
        facing: mT,
        mouseTurns: "default" !== TT.mode && void 0 !== TT.playerLook ? "look" : "view"
      }
    }

    function MT(TT, UT, mT, zT, MT, gT) {
      return gT.Xs = 0, gT.Qs = 0, gT.pointedAt = void 0, void 0 !== zT ? MT ? (gT.pointedAt = zT, TT) : (0, WT.s)(zT.heading) : MT ? (gT.Xs = UT, gT.Qs = mT, TT) : (0, WT.s)(TT + UT)
    }
  },
  39313: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => rT
    });
    var WT = mT(39316),
      zT = mT(39300),
      MT = mT(37086);

    function gT(TT, UT, mT, WT) {
      if (!(WT > 0)) return UT;
      const zT = UT > TT ? Math.min(UT, TT + mT / WT) : Math.max(UT, TT - mT / WT);
      return Math.abs(UT - zT) < 1e-9 ? UT : zT
    }
    class nT {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: WT.e,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(TT) {
        !this.isGoingOut() && this.sinceTurnMs < WT.i.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: TT
        } : (this.waiting = null, this.startOut(TT))
      }
      fadeIn(TT) {
        this.isGoingOut() ? this.sinceTurnMs < WT.i.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: TT
        } : (this.waiting = null, this.startIn(TT)) : this.waiting = null
      }
      advance(TT) {
        const UT = this.waiting;
        if (null === UT) return this.step(TT);
        const mT = WT.i.minFadeTurnMs - this.sinceTurnMs;
        if (mT > TT) return this.step(TT);
        const zT = this.step(mT);
        return this.waiting = null, "out" === UT.turn ? this.startOut(UT.transition) : this.startIn(UT.minMs), this.step(TT - mT) || zT
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(TT) {
        ("in" === this.phase || null === this.phase && this.clearMs < WT.i.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = TT.colour), this.outMs = TT.outMs, this.holdMs = TT.holdMs, this.inMs = TT.inMs
      }
      startIn(TT) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(TT, this.inMs)
      }
      step(TT) {
        const UT = this.screen;
        this.sinceTurnMs += TT, null === this.phase && (this.clearMs += TT);
        let mT = !1,
          zT = TT;
        if ("out" === this.phase) {
          const WT = (1 - UT.alpha) * this.outMs;
          if (UT.alpha = gT(UT.alpha, 1, TT, this.outMs), UT.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, zT = Math.max(0, TT - WT), mT = !0
        }
        let MT = TT;
        if ("hold" === this.phase) {
          this.heldMs += zT;
          const TT = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - WT.i.minFadeTurnMs);
          if (TT < 0 || mT) return mT;
          this.phase = "in", this.sinceTurnMs = TT, MT = TT
        }
        return "in" === this.phase && (UT.alpha = gT(UT.alpha, 0, MT, this.inMs), UT.alpha <= 0 && (this.phase = null, this.clearMs = 0)), mT
      }
    }
    var HT = mT(39293),
      kT = mT(39325),
      jT = mT(2014),
      lT = mT(36667);

    function LT(TT, UT) {
      for (let mT = 0; mT < UT.length; mT++) UT[mT] = TT[mT]
    }

    function pT(TT, UT) {
      var mT;
      return null !== (mT = TT.fov) && void 0 !== mT ? mT : UT.getDefaultFov()
    }

    function BT(TT, UT, mT, WT, zT) {
      const MT = 2 / WT,
        gT = Math.exp(-MT * zT);
      for (let nT = 0; nT < TT.length; nT++) {
        const WT = TT[nT] - mT[nT],
          HT = (UT[nT] + MT * WT) * zT;
        TT[nT] = mT[nT] + (WT + HT) * gT, UT[nT] = (UT[nT] - MT * HT) * gT
      }
    }
    class ZT {
      constructor(TT, UT, mT, WT) {
        var MT, gT, nT, HT, kT;
        this.settings = TT, this.Nl = UT, this.targets = mT, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Tc = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, zT.s)((0, jT.m)(null !== (MT = TT.viewHeading) && void 0 !== MT ? MT : 0)),
          pitch: (0, zT.i)((0, jT.m)(null !== (gT = TT.viewElevation) && void 0 !== gT ? gT : 45))
        }, this.closestDistance = null !== (nT = TT.closestDistance) && void 0 !== nT ? nT : Math.min(6, null !== (HT = TT.furthestDistance) && void 0 !== HT ? HT : 1 / 0), this.furthestDistance = null !== (kT = TT.furthestDistance) && void 0 !== kT ? kT : Math.max(64, this.closestDistance);
        const lT = (0, zT.g)(this.base.heading, this.base.pitch, this.forward),
          LT = WT.position,
          pT = this.closestDistance;
        this.goal = [LT[0] + lT[0] * pT, LT[1] + lT[1] * pT, LT[2] + lT[2] * pT, pT, this.base.heading, this.base.pitch]
      }
      update(TT, UT, mT) {
        var WT, MT;
        this.placeGoal(null !== (WT = this.settings.fov) && void 0 !== WT ? WT : this.Nl.getBaseFov()), this.goal[4] = (0, zT.z)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const gT = null !== (MT = this.settings.smoothMs) && void 0 !== MT ? MT : 400;
        !this.started || gT < 1 ? (LT(this.goal, this.smoothed), this.Tc.fill(0), this.started = !0) : BT(this.smoothed, this.Tc, this.goal, gT, TT), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, zT.i)(this.smoothed[5]), UT.apply(this.angles, mT);
        const nT = (0, zT.g)(mT.heading, mT.pitch, this.forward);
        for (let zT = 0; zT < 3; zT++) mT.position[zT] = this.smoothed[zT] - nT[zT] * this.smoothed[3];
        mT.fov = pT(this.settings, this.Nl)
      }
      continueFrom(TT) {
        TT instanceof ZT && (LT(TT.goal, this.goal), LT(TT.smoothed, this.smoothed), LT(TT.Tc, this.Tc), this.framedTargets = TT.framedTargets, this.started = TT.started)
      }
      reset() {
        this.Tc.fill(0), this.started = !1
      }
      placeGoal(TT) {
        var UT;
        let mT = 0;
        for (const jT of this.settings.targets) {
          const TT = this.targets.currentAimPoint(jT);
          TT && (0, HT.k)(TT, this.pointAt(mT++))
        }
        if (mT > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const TT = this.targets.aimPoint(this.Nl.localPlayerId);
          TT && (0, HT.k)(TT, this.pointAt(mT++))
        }
        const WT = this.goal;
        if (0 === mT) return void(WT[3] = this.withinDistances(WT[3]));
        for (let HT = 0; HT < 3; HT++) {
          let TT = 1 / 0,
            UT = -1 / 0;
          for (let WT = 0; WT < mT; WT++) TT = Math.min(TT, this.points[WT][HT]), UT = Math.max(UT, this.points[WT][HT]);
          WT[HT] = (TT + UT) / 2
        }
        let zT = 0;
        for (let HT = 0; HT < mT; HT++) {
          const TT = this.points[HT];
          zT = Math.max(zT, Math.hypot(TT[0] - WT[0], TT[1] - WT[1], TT[2] - WT[2]))
        }
        const MT = Math.tan((0, jT.m)(TT) / 2),
          gT = Math.atan(MT * (!0 === this.settings.letterbox ? lT.h : 1)),
          nT = Math.atan(MT * this.Nl.getAspectRatio()),
          kT = (zT + (null !== (UT = this.settings.padding) && void 0 !== UT ? UT : 2)) / Math.sin(Math.min(gT, nT));
        WT[3] = this.withinDistances(kT)
      }
      withinDistances(TT) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, TT))
      }
      pointAt(TT) {
        return TT === this.points.length && this.points.push([0, 0, 0]), this.points[TT]
      }
    }
    class cT {
      constructor(TT) {
        this.limits = TT, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(TT) {
        this.limits && (this.yawOffset = TT.yawOffset, this.pitchOffset = TT.pitchOffset, this.idleMs = TT.idleMs)
      }
      update(TT, UT) {
        const mT = this.limits;
        if (!mT) return;
        const WT = Number.isFinite(UT.Xs) ? UT.Xs : 0,
          zT = Number.isFinite(UT.Qs) ? UT.Qs : 0;
        if (UT.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: UT.pointedAt.heading,
          pitch: UT.pointedAt.pitch
        };
        else if (0 !== WT || 0 !== zT) this.idleMs = 0, this.yawOffset += WT, this.pitchOffset += zT;
        else {
          const UT = Math.max(0, this.idleMs + TT - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += TT, void 0 !== mT.returnMs && UT > 0) {
            const TT = mT.returnMs > 0 ? Math.exp(-3 * UT / mT.returnMs) : 0;
            this.yawOffset *= TT, this.pitchOffset *= TT
          }
        }
        this.clampOffsets(mT)
      }
      clampOffsets(TT) {
        if (TT.maxYaw >= 180) this.yawOffset = (0, zT.w)(0, this.yawOffset);
        else {
          const UT = (0, jT.m)(TT.maxYaw);
          this.yawOffset = Math.max(-UT, Math.min(UT, this.yawOffset))
        }
        const UT = (0, jT.m)(TT.maxPitch);
        this.pitchOffset = Math.max(-UT, Math.min(UT, this.pitchOffset))
      }
      apply(TT, UT) {
        this.pointedAt && this.limits && (this.yawOffset = (0, zT.w)(TT.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - TT.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const mT = (0, zT.i)(TT.pitch + this.pitchOffset);
        this.pitchOffset = mT - TT.pitch, UT.heading = (0, zT.s)(TT.heading + this.yawOffset), UT.pitch = mT
      }
      unapply(TT, UT) {
        UT.heading = (0, zT.s)(TT.heading - this.yawOffset), UT.pitch = (0, zT.i)(TT.pitch - this.pitchOffset)
      }
    }
    const vT = 1e-6;

    function fT(TT) {
      return Math.sqrt(TT[0] * TT[0] + TT[1] * TT[1] + TT[2] * TT[2])
    }

    function qT(TT, UT, mT, WT, zT) {
      const MT = zT * zT,
        gT = MT * zT;
      return (2 * gT - 3 * MT + 1) * TT + (gT - 2 * MT + zT) * UT + (-2 * gT + 3 * MT) * mT + (gT - MT) * WT
    }

    function iT(TT, UT, mT, WT, zT) {
      const MT = zT * zT;
      return (6 * MT - 6 * zT) * TT + (3 * MT - 4 * zT + 1) * UT + (-6 * MT + 6 * zT) * mT + (3 * MT - 2 * zT) * WT
    }

    function bT(TT, UT) {
      const mT = UT[0] - TT[0],
        WT = UT[1] - TT[1],
        zT = UT[2] - TT[2];
      return Math.sqrt(mT * mT + WT * WT + zT * zT)
    }

    function OT(TT, UT, mT, WT, zT, MT) {
      for (let gT = 0; gT < 3; gT++) MT[gT] = zT ? TT[gT] * WT : mT[gT] - UT[gT];
      return zT && function(TT, UT) {
        const mT = fT(TT);
        if (mT > UT) {
          const WT = UT / mT;
          TT[0] *= WT, TT[1] *= WT, TT[2] *= WT
        }
      }(MT, 3 * bT(UT, mT)), MT
    }

    function eT(TT, UT, mT, WT) {
      for (let zT = 0; zT < 3; zT++) WT[zT] = 6 * (UT[zT] - TT[zT]) - 2 * mT[zT];
      if (fT(WT) < vT)
        for (let zT = 0; zT < 3; zT++) WT[zT] = UT[zT] - TT[zT];
      return WT
    }

    function YT(TT, UT) {
      return [2 * UT[0] - TT[0], 2 * UT[1] - TT[1], 2 * UT[2] - TT[2]]
    }

    function JT(TT, UT, mT, WT, zT, MT, gT) {
      if (!MT && !gT) return 0;
      const nT = MT ? TT : 2 * UT - mT,
        HT = gT ? mT : 2 * UT - TT,
        kT = MT ? WT : zT,
        jT = gT ? zT : WT,
        lT = (UT - nT) / kT,
        LT = (HT - UT) / jT;
      if (lT * LT <= 0) return 0;
      const pT = (HT - nT) / (kT + jT),
        BT = 3 * Math.min(Math.abs(lT), Math.abs(LT));
      return Math.max(-BT, Math.min(BT, pT))
    }

    function xT(TT, UT, mT, WT, zT, MT, gT) {
      const {
        u: nT,
        segmentMs: HT
      } = TT;
      if (!TT.curved) return mT + (WT - mT) * nT;
      return qT(mT, JT(UT, mT, WT, TT.beforeMs, HT, MT, !0) * HT, WT, JT(mT, WT, zT, HT, TT.afterMs, !0, gT) * HT, nT)
    }

    function dT(TT) {
      return Math.abs(TT.pitch) >= zT.d
    }
    class wT {
      constructor(TT, UT, mT, WT, zT) {
        this.nodes = TT, this.prevNodes = mT, this.nextNodes = WT, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = TT.map(((TT, mT) => this.nodeTangent(UT, zT, mT)))
      }
      sample(TT, UT, mT) {
        const {
          index: WT,
          toIndex: MT,
          segmentMs: gT,
          curved: nT
        } = TT, HT = this.fromAngles, kT = this.toAngles, jT = this.nodeAngles(WT, mT.position, UT, HT), lT = this.nodeAngles(MT, mT.position, UT, kT);
        if (gT > 0 && "aim" !== jT && "aim" !== lT && this.liveTangent(TT, HT)) return mT.heading = (0, zT.s)(HT.heading), void(mT.pitch = HT.pitch);
        if ("none" === jT && "none" === lT) return;
        !nT && gT > 0 && ("tangent" === jT && this.liveTangent(TT, HT), "tangent" === lT && this.liveTangent(TT, kT)), "none" === jT ? (0, zT.j)(kT, HT) : "none" === lT && (0, zT.j)(HT, kT);
        const LT = nT && TT.beforeIndex >= 0 && "none" !== this.nodeAngles(TT.beforeIndex, mT.position, UT, this.beforeAngles),
          pT = nT && TT.afterIndex >= 0 && "none" !== this.nodeAngles(TT.afterIndex, mT.position, UT, this.afterAngles),
          BT = (0, zT.z)(HT.heading, kT.heading),
          ZT = xT(TT, LT ? (0, zT.z)(HT.heading, this.beforeAngles.heading) : 0, HT.heading, BT, pT ? (0, zT.z)(BT, this.afterAngles.heading) : 0, LT, pT);
        mT.heading = (0, zT.s)(ZT), mT.pitch = (0, zT.i)(xT(TT, this.beforeAngles.pitch, HT.pitch, kT.pitch, this.afterAngles.pitch, LT, pT))
      }
      nodeAngles(TT, UT, mT, WT) {
        const zT = this.rawNodeAngles(TT, UT, mT, WT);
        return "none" !== zT && dT(WT) && !this.borrowHeading(this.prevNodes[TT], UT, mT, WT) && this.borrowHeading(this.nextNodes[TT], UT, mT, WT), zT
      }
      borrowHeading(TT, UT, mT, WT) {
        const zT = this.borrowedAngles;
        return !(TT < 0 || "none" === this.rawNodeAngles(TT, UT, mT, zT) || dT(zT)) && (WT.heading = zT.heading, !0)
      }
      rawNodeAngles(TT, UT, mT, WT) {
        const MT = this.nodes[TT].keyframe;
        if (MT.lookDirection) return (0, zT.l)(MT.lookDirection, WT), "aim";
        if (void 0 !== MT.lookAt) {
          const TT = mT(MT.lookAt);
          if (TT) return (0, zT.p)(UT, TT, WT), "aim"
        }
        const gT = this.tangents[TT];
        return gT ? ((0, zT.j)(gT, WT), "tangent") : "none"
      }
      liveTangent(TT, UT) {
        const mT = this.nodes[TT.index].position,
          WT = this.nodes[TT.toIndex].position,
          MT = this.derivative;
        for (let zT = 0; zT < 3; zT++) MT[zT] = iT(mT[zT], TT.fromTangent[zT], WT[zT], TT.toTangent[zT], TT.u);
        return fT(MT) > 1e-9 ? ((0, zT.l)(MT, UT), !0) : !(bT(mT, WT) < vT) && ((0, zT.l)(eT(mT, WT, TT.u < .5 ? TT.toTangent : TT.fromTangent, MT), UT), !0)
      }
      nodeTangent(TT, UT, mT) {
        var WT;
        const MT = TT[mT];
        if (fT(MT) > 1e-9) return (0, zT.l)(MT, {
          heading: 0,
          pitch: 0
        });
        const gT = null !== (WT = this.restDirectionTo(mT, mT + 1, TT, UT)) && void 0 !== WT ? WT : this.restDirectionTo(mT, mT - 1, TT, UT);
        return gT ? (0, zT.l)(gT, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(TT, UT, mT, WT) {
        const zT = this.nodes[TT],
          MT = this.nodes[UT];
        if (!MT || bT(zT.position, MT.position) < vT) return null;
        const [gT, nT] = UT > TT ? [zT, MT] : [MT, zT], HT = OT(mT[UT], gT.position, nT.position, nT.timeMs - gT.timeMs, WT, [0, 0, 0]);
        return eT(gT.position, nT.position, HT, [0, 0, 0])
      }
    }

    function tT(TT, UT) {
      const mT = TT.lookDirection || UT.lookDirection ? function(TT, UT) {
        if (!TT || !UT) return TT === UT;
        const mT = fT(TT),
          WT = fT(UT);
        return Math.hypot(TT[0] / mT - UT[0] / WT, TT[1] / mT - UT[1] / WT, TT[2] / mT - UT[2] / WT) < vT
      }(TT.lookDirection, UT.lookDirection) : (WT = TT.lookAt, zT = UT.lookAt, "object" !== typeof WT || "object" !== typeof zT ? WT === zT : bT(WT, zT) < vT);
      var WT, zT;
      return bT(TT.position, UT.position) < vT && TT.fov === UT.fov && mT
    }
    class aT {
      constructor(TT, UT, mT) {
        if (this.smooth = UT, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
        for (let MT = 1; MT < TT.length; MT++)
          if (!(TT[MT].timeMs > TT[MT - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = TT.map((TT => {
          var UT;
          return {
            timeMs: TT.timeMs,
            position: [...TT.position],
            keyframe: TT,
            easing: (0, MT.q)(null !== (UT = TT.easing) && void 0 !== UT ? UT : "linear")
          }
        }));
        const WT = this.nodes[0],
          zT = this.nodes[this.nodes.length - 1],
          gT = mT && this.nodes.length > 1;
        gT && !tT(WT.keyframe, zT.keyframe) && this.nodes.push({
          ...WT,
          timeMs: zT.timeMs + (zT.timeMs - WT.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = gT ? this.nodes[this.nodes.length - 1].timeMs - WT.timeMs : 0, this.prevNodes = this.nodes.map(((TT, UT) => this.neighbour(UT, -1))), this.nextNodes = this.nodes.map(((TT, UT) => this.neighbour(UT, 1))), this.prevGaps = this.prevNodes.map(((TT, UT) => TT >= 0 ? this.gapMs(UT, -1) : 0)), this.nextGaps = this.nextNodes.map(((TT, UT) => TT >= 0 ? this.gapMs(UT, 1) : 0)), this.velocities = this.nodes.map(((TT, UT) => {
          const mT = this.prevNodes[UT],
            WT = this.nextNodes[UT];
          return function(TT, UT, mT, WT, zT, MT) {
            if (MT[0] = 0, MT[1] = 0, MT[2] = 0, !TT && !mT) return MT;
            const gT = null !== TT && void 0 !== TT ? TT : YT(null !== mT && void 0 !== mT ? mT : UT, UT),
              nT = null !== mT && void 0 !== mT ? mT : YT(null !== TT && void 0 !== TT ? TT : UT, UT),
              HT = TT ? WT : zT,
              kT = mT ? zT : WT,
              jT = bT(gT, UT),
              lT = bT(UT, nT);
            if (jT < vT || lT < vT) return MT;
            const LT = Math.sqrt(jT),
              pT = Math.sqrt(lT),
              BT = (LT + pT) / (HT + kT);
            for (let ZT = 0; ZT < 3; ZT++) {
              const TT = (UT[ZT] - gT[ZT]) / LT - (nT[ZT] - gT[ZT]) / (LT + pT) + (nT[ZT] - UT[ZT]) / pT;
              MT[ZT] = TT * BT
            }
            return MT
          }(mT >= 0 ? this.nodes[mT].position : null, TT.position, WT >= 0 ? this.nodes[WT].position : null, this.prevGaps[UT], this.nextGaps[UT], [0, 0, 0])
        })), this.aim = new wT(this.nodes, this.velocities, this.prevNodes, this.nextNodes, UT)
      }
      sample(TT, UT, mT, WT) {
        const zT = this.findSegment(this.pathTime(TT));
        this.samplePosition(zT, WT.position), this.aim.sample(zT, UT, WT);
        const {
          beforeIndex: MT,
          afterIndex: gT
        } = zT;
        WT.fov = xT(zT, MT >= 0 ? this.fovAt(MT, mT) : 0, this.fovAt(zT.index, mT), this.fovAt(zT.toIndex, mT), gT >= 0 ? this.fovAt(gT, mT) : 0, MT >= 0, gT >= 0)
      }
      pathTime(TT) {
        const UT = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || TT <= UT) return TT;
        const mT = TT - UT;
        return UT + mT - this.loopMs * Math.floor(mT / this.loopMs)
      }
      findSegment(TT) {
        const UT = this.nodes,
          mT = this.segment;
        let WT = mT.index;
        for (TT < UT[WT].timeMs && (WT = 0); WT < UT.length - 2 && UT[WT + 1].timeMs <= TT;) WT++;
        const zT = Math.min(WT + 1, UT.length - 1),
          gT = UT[zT].timeMs - UT[WT].timeMs;
        return mT.index = WT, mT.toIndex = zT, mT.segmentMs = gT, mT.u = gT > 0 ? (0, MT.m)((TT - UT[WT].timeMs) / gT, UT[WT].easing) : 1, mT.curved = this.smooth && gT > 0, mT.beforeIndex = this.prevNodes[WT], mT.afterIndex = this.nextNodes[zT], mT.beforeMs = this.prevGaps[WT], mT.afterMs = this.nextGaps[zT], mT
      }
      samplePosition(TT, UT) {
        const {
          fromTangent: mT,
          toTangent: WT,
          curved: zT
        } = TT, MT = this.nodes[TT.index].position, gT = this.nodes[TT.toIndex].position;
        OT(this.velocities[TT.index], MT, gT, TT.segmentMs, zT, mT), OT(this.velocities[TT.toIndex], MT, gT, TT.segmentMs, zT, WT);
        const nT = TT.u;
        for (let HT = 0; HT < 3; HT++) UT[HT] = zT ? qT(MT[HT], mT[HT], gT[HT], WT[HT], nT) : MT[HT] + (gT[HT] - MT[HT]) * nT
      }
      fovAt(TT, UT) {
        var mT;
        return null !== (mT = this.nodes[TT].keyframe.fov) && void 0 !== mT ? mT : UT
      }
      neighbour(TT, UT) {
        const mT = this.nodes.length - 1,
          WT = TT + UT;
        return WT >= 0 && WT <= mT ? WT : this.loopMs <= 0 || mT < 2 ? -1 : WT < 0 ? mT - 1 : 1
      }
      gapMs(TT, UT) {
        const mT = this.nodes.length - 1;
        if (1 === UT) {
          const UT = TT === mT ? 0 : TT;
          return this.nodes[UT + 1].timeMs - this.nodes[UT].timeMs
        }
        const WT = 0 === TT ? mT : TT;
        return this.nodes[WT].timeMs - this.nodes[WT - 1].timeMs
      }
    }
    class yT {
      constructor(TT) {
        this.Nl = TT, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = UT => TT.getEntityPosition(UT), this.readAimPoint = UT => TT.getEntityAimPoint(UT)
      }
      aimPoint(TT) {
        return "string" !== typeof TT ? (0, HT.q)(TT, 3) ? TT : null : this.resolve(TT, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(TT) {
        const UT = "string" === typeof TT ? this.Nl.getEntityAimPoint(TT) : TT;
        return UT && (0, HT.q)(UT, 3) ? UT : null
      }
      feetPosition(TT) {
        return this.resolve(TT, this.readFeet, this.lastFeet)
      }
      heading(TT) {
        const UT = this.Nl.getEntityHeading(TT);
        if (null !== UT && Number.isFinite(UT)) return this.lastHeadings.set(TT, UT), UT;
        const mT = this.lastHeadings.get(TT);
        return void 0 !== mT ? mT : TT === this.Nl.localPlayerId ? 0 : this.heading(this.Nl.localPlayerId)
      }
      resolve(TT, UT, mT) {
        const WT = UT(TT);
        let zT = mT.get(TT);
        return WT && (0, HT.q)(WT, 3) ? (zT || (zT = [0, 0, 0], mT.set(TT, zT)), zT[0] = WT[0], zT[1] = WT[1], zT[2] = WT[2], zT) : zT || (TT === this.Nl.localPlayerId ? null : this.resolve(this.Nl.localPlayerId, UT, mT))
      }
    }

    function XT(TT) {
      return {
        heading: TT.heading,
        pitch: TT.pitch
      }
    }

    function IT(TT, UT) {
      Number.isFinite(TT.heading) && Number.isFinite(TT.pitch) || (0, zT.j)(UT, TT)
    }

    function QT(TT, UT, mT, WT, MT) {
      if (UT) return void(0, zT.l)(UT, MT);
      const gT = WT.aimPoint(mT);
      gT && (0, zT.p)(TT, gT, MT)
    }
    class sT {
      constructor(TT, UT, mT, WT) {
        this.settings = TT, this.Nl = UT, this.targets = mT, this.base = void 0, this.base = XT(WT)
      }
      update(TT, UT, mT) {
        var WT;
        const zT = this.settings;
        (0, HT.k)(zT.position, mT.position), QT(zT.position, zT.lookDirection, null !== (WT = zT.lookAt) && void 0 !== WT ? WT : this.Nl.localPlayerId, this.targets, this.base), UT.apply(this.base, mT), mT.fov = pT(zT, this.Nl)
      }
      continueFrom(TT) {
        TT instanceof sT && (0, zT.j)(TT.base, this.base)
      }
      reset(TT) {
        IT(this.base, TT)
      }
    }
    class FT {
      constructor(TT, UT, mT, WT) {
        this.settings = TT, this.Nl = UT, this.targets = mT, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Tc = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = XT(WT), this.goal = [...WT.position]
      }
      update(TT, UT, mT) {
        var WT, zT, MT;
        const gT = this.settings,
          nT = null !== (WT = gT.target) && void 0 !== WT ? WT : this.Nl.localPlayerId,
          kT = this.targets.feetPosition(nT);
        let jT = !1;
        kT && (jT = this.foundFeet && bT(this.lastFeet, kT) > 32 + .1 * TT, (0, HT.k)(kT, this.lastFeet), this.foundFeet = !0, this.placeGoal(kT, nT));
        const lT = null !== (zT = gT.smoothMs) && void 0 !== zT ? zT : 0;
        !this.started || lT < 1 || jT ? ((0, HT.k)(this.goal, this.smoothed), this.Tc.fill(0), this.started = !0) : BT(this.smoothed, this.Tc, this.goal, lT, TT), jT && (this.distance = -1), (0, HT.k)(this.smoothed, mT.position);
        const LT = !0 === gT.avoidTerrain ? this.pullIn(nT, TT, mT) : 1;
        let ZT = this.goal;
        if ("target" === gT.offsetSpace) ZT = mT.position;
        else if (LT < 1) {
          ZT = this.aimOrigin;
          for (let TT = 0; TT < 3; TT++) ZT[TT] = mT.position[TT] + (this.goal[TT] - this.smoothed[TT]) * LT
        }
        QT(ZT, gT.lookDirection, null !== (MT = gT.lookAt) && void 0 !== MT ? MT : nT, this.targets, this.base), UT.apply(this.base, mT), mT.fov = pT(gT, this.Nl)
      }
      continueFrom(TT) {
        TT instanceof FT && (0, WT.o)(TT.settings.target, this.settings.target) && ((0, zT.j)(TT.base, this.base), (0, HT.k)(TT.goal, this.goal), (0, HT.k)(TT.lastFeet, this.lastFeet), this.foundFeet = TT.foundFeet, (0, HT.k)(TT.smoothed, this.smoothed), (0, HT.k)(TT.Tc, this.Tc), this.started = TT.started, !0 === TT.settings.avoidTerrain && (this.distance = TT.distance))
      }
      reset(TT) {
        IT(this.base, TT), this.Tc.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(TT, UT, mT) {
        const WT = this.targets.aimPoint(TT);
        if (!WT) return 1;
        const zT = mT.position,
          MT = bT(WT, zT);
        if (!(MT > 0)) return 1;
        const gT = this.toCamera;
        for (let HT = 0; HT < 3; HT++) gT[HT] = (zT[HT] - WT[HT]) / MT;
        const nT = function(TT, UT, mT) {
          return TT < 0 || UT < TT ? UT : UT + (TT - UT) * Math.exp(-mT / 150)
        }(this.distance, function(TT, UT, mT, WT) {
          const zT = TT.raycastTerrain(UT, mT, WT);
          return null !== zT && Number.isFinite(zT) ? Math.min(WT, Math.max(0, zT - .2)) : WT
        }(this.Nl, WT, gT, MT), UT);
        if (MT - nT < .001) return this.distance = -1, 1;
        this.distance = nT;
        for (let HT = 0; HT < 3; HT++) zT[HT] = WT[HT] + gT[HT] * nT;
        return nT / MT
      }
      placeGoal(TT, UT) {
        const mT = this.settings.offset;
        let WT = mT[0],
          zT = mT[2];
        if ("target" === this.settings.offsetSpace) {
          const TT = this.targets.heading(UT),
            MT = Math.cos(TT),
            gT = Math.sin(TT);
          WT = mT[0] * MT + mT[2] * gT, zT = -mT[0] * gT + mT[2] * MT
        }
        this.goal[0] = TT[0] + WT, this.goal[1] = TT[1] + mT[1], this.goal[2] = TT[2] + zT
      }
    }
    class PT {
      constructor(TT, UT, mT, WT) {
        var zT, MT;
        this.settings = TT, this.Nl = UT, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = TT.keyframes.length > 0 ? new aT(TT.keyframes, null === (zT = TT.smooth) || void 0 === zT || zT, null !== (MT = TT.loop) && void 0 !== MT && MT) : null, this.base = (0, HT.g)(WT, (0, HT.m)()), this.resolveTarget = TT => mT.aimPoint(TT)
      }
      update(TT, UT, mT) {
        this.elapsedMs += TT;
        const WT = pT(this.settings, this.Nl);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, WT, this.base) : this.base.fov = WT, (0, HT.k)(this.base.position, mT.position), mT.fov = this.base.fov, UT.apply(this.base, mT)
      }
      continueFrom(TT) {
        TT instanceof PT && (0, WT.o)(TT.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = TT.elapsedMs, (0, HT.g)(TT.base, this.base))
      }
      reset(TT) {
        IT(this.base, TT), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function VT(TT, UT) {
      return (0, WT.s)(TT, UT)
    }
    class uT {
      constructor(TT, UT, mT) {
        var WT;
        this.settings = TT, this.Nl = UT, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const zT = null !== mT && mT.settings.mode === TT.mode,
          MT = zT ? mT.pose : UT.getDefaultPose();
        this.pose = (0, HT.g)(MT, (0, HT.m)()), this.lastGoodPose = (0, HT.g)(zT ? mT.lastGoodPose : MT, (0, HT.m)()), this.look = new cT(TT.playerLook), this.targets = null !== (WT = null === mT || void 0 === mT ? void 0 : mT.targets) && void 0 !== WT ? WT : new yT(UT);
        const gT = (0, HT.g)(MT, (0, HT.m)());
        zT && mT.look.unapply(gT, gT), this.mode = function(TT, UT, mT, WT) {
          switch (TT.mode) {
            case "fixed":
              return new sT(TT, UT, mT, WT);
            case "follow":
              return new FT(TT, UT, mT, WT);
            case "path":
              return new PT(TT, UT, mT, WT);
            case "frame":
              return new ZT(TT, UT, mT, WT)
          }
        }(TT, UT, this.targets, gT), zT && (this.look.continueFrom(mT.look), this.mode.continueFrom(mT.mode))
      }
      update(TT, UT) {
        return this.look.update(TT, UT), this.mode.update(TT, this.look, this.pose), (0, HT.p)(this.pose) ? (0, HT.g)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, HT.g)(this.lastGoodPose, this.pose), this.mode.reset((0, HT.p)(this.lastGoodPose) ? this.lastGoodPose : this.Nl.getDefaultPose())), this.pose
      }
    }

    function CT(TT) {
      return [0, 0, TT[2], TT[3]]
    }
    class rT {
      constructor(TT) {
        this.Nl = TT, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new nT, this.shot = null, this.blend = null, this.mixed = (0, HT.m)(), this.output = (0, HT.m)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(TT) {
        const UT = (0, kT.d)(TT);
        if ((0, WT.o)(UT, this.pending ? this.pending.settings : this.settings)) return;
        const mT = VT(this.settings, UT);
        if (void 0 !== UT.transition && !mT) return this.pending = {
          settings: UT,
          shot: "default" === UT.mode ? null : new uT(UT, this.Nl, null)
        }, void this.fade.fadeOut(UT.transition);
        const zT = null !== this.pending;
        this.pending = null, !zT && mT || this.fade.fadeIn(WT.i.minTransitionFadeMs), this.show(UT, !1)
      }
      show(TT, UT) {
        var mT, zT;
        if ((0, WT.o)(TT, this.settings)) return;
        const gT = !UT && VT(this.settings, TT);
        this.settings = TT;
        const nT = null !== this.blend && this.blend.elapsedMs > 0,
          kT = (0, HT.g)(this.hasOutput ? this.output : this.Nl.getDefaultPose(), (0, HT.m)());
        if (this.shot = "default" === TT.mode ? null : new uT(TT, this.Nl, UT ? null : this.shot), gT) return;
        const jT = UT || !this.shot && !this.hasOutput ? 0 : null !== (mT = TT.blendInMs) && void 0 !== mT ? mT : 0;
        if (jT <= 0) return void(this.blend = null);
        const lT = (0, MT.q)(null !== (zT = TT.blendEasing) && void 0 !== zT ? zT : "easeInOut");
        this.blend = {
          from: kT,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: jT,
          easing: nT ? CT(lT) : lT
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
      update(TT, UT) {
        const mT = Number.isFinite(TT) && TT > 0 ? TT : 0;
        if (this.fade.advance(mT) && null !== this.pending) {
          const {
            settings: TT
          } = this.pending;
          this.pending = null, this.show(TT, !0)
        }
        this.loadingPositions.length = 0;
        const WT = this.pending;
        if (null !== WT && void 0 !== WT && WT.shot) {
          const TT = "path" === WT.settings.mode ? 0 : mT;
          this.noteLoadingPosition(WT.shot.update(TT, HT.c).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const gT = this.shot ? this.shot.update(mT, UT) : this.Nl.getDefaultPose();
        this.shot && this.noteLoadingPosition(gT.position);
        const nT = this.blend;
        if (!nT) return this.writeOutput(gT);
        nT.elapsedMs += mT;
        const kT = Math.min(1, nT.elapsedMs / nT.durationMs);
        if (nT.headingDelta = Number.isFinite(nT.headingDelta) ? (0, zT.z)(nT.headingDelta, gT.heading - nT.from.heading) : (0, zT.w)(nT.from.heading, gT.heading), (0, HT.r)(nT.from, gT, nT.headingDelta, (0, MT.m)(kT, nT.easing), this.mixed), kT >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else nT.fromScripted && this.noteLoadingPosition(nT.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(TT) {
        if (TT.every(Number.isFinite)) {
          const UT = this.loadingPositions;
          UT.push((0, HT.k)(TT, this.loadingSlots[UT.length]))
        }
      }
      writeOutput(TT) {
        const UT = this.output;
        (0, HT.p)(TT) ? (0, HT.g)(TT, UT) : this.hasOutput || (0, HT.g)(this.Nl.getDefaultPose(), UT), UT.pitch = (0, zT.i)(UT.pitch);
        const mT = this.Nl.getDefaultFov(),
          MT = Number.isFinite(mT) && mT > 0 && mT < 180,
          gT = MT ? Math.min(WT.i.minFov, mT) : WT.i.minFov,
          nT = MT ? Math.max(WT.i.maxFov, mT) : WT.i.maxFov;
        return UT.fov = Number.isFinite(UT.fov) ? Math.min(nT, Math.max(gT, UT.fov)) : nT, this.hasOutput = !0, UT
      }
    }
  },
  39293: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      g: () => nT,
      k: () => gT,
      m: () => MT,
      p: () => kT,
      q: () => HT,
      r: () => jT
    });
    var WT = mT(39300);
    const zT = {
      Xs: 0,
      Qs: 0
    };

    function MT() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function gT(TT, UT) {
      return UT[0] = TT[0], UT[1] = TT[1], UT[2] = TT[2], UT
    }

    function nT(TT, UT) {
      return gT(TT.position, UT.position), UT.heading = TT.heading, UT.pitch = TT.pitch, UT.fov = TT.fov, UT
    }

    function HT(TT, UT) {
      return Array.isArray(TT) && TT.length === UT && TT.every(Number.isFinite)
    }

    function kT(TT) {
      return HT(TT.position, 3) && Number.isFinite(TT.heading) && Number.isFinite(TT.pitch) && Number.isFinite(TT.fov)
    }

    function jT(TT, UT, mT, zT, MT) {
      for (let WT = 0; WT < 3; WT++) MT.position[WT] = TT.position[WT] + (UT.position[WT] - TT.position[WT]) * zT;
      return MT.heading = (0, WT.s)(TT.heading + mT * zT), MT.pitch = TT.pitch + (UT.pitch - TT.pitch) * zT, MT.fov = TT.fov + (UT.fov - TT.fov) * zT, MT
    }
  },
  39325: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => eT,
      e: () => LT
    });
    var WT = mT(39316),
      zT = mT(39293);
    const MT = WT.g,
      gT = WT.k;

    function nT(TT, UT, mT, WT) {
      return Number.isFinite(TT) ? Math.min(mT, Math.max(UT, TT)) : WT
    }

    function HT(TT, UT, mT) {
      return void 0 !== TT && Number.isFinite(TT) ? Math.min(mT, Math.max(UT, TT)) : void 0
    }

    function kT(TT) {
      const UT = WT.i.maxCoordinate;
      return [Math.min(UT, Math.max(-UT, TT[0])), Math.min(UT, Math.max(-UT, TT[1])), Math.min(UT, Math.max(-UT, TT[2]))]
    }

    function jT(TT) {
      return "string" === typeof TT ? TT : (0, zT.q)(TT, 3) ? kT(TT) : void 0
    }
    const lT = new RegExp(WT.n);

    function LT(TT) {
      return "string" === typeof TT && lT.test(TT)
    }

    function pT(TT) {
      const UT = [];
      if (!Array.isArray(TT)) return UT;
      for (const mT of TT.slice(0, WT.i.maxFrameTargets)) {
        const TT = jT(mT);
        void 0 === TT || "string" === typeof TT && !LT(TT) || UT.push(TT)
      }
      return UT
    }

    function BT(TT) {
      if (!(0, zT.q)(TT, 3)) return;
      const UT = Math.max(Math.abs(TT[0]), Math.abs(TT[1]), Math.abs(TT[2])),
        mT = Math.hypot(TT[0] / UT, TT[1] / UT, TT[2] / UT);
      return 0 === UT || UT * mT < WT.i.minDirectionLength ? void 0 : [TT[0] / UT / mT, TT[1] / UT / mT, TT[2] / UT / mT]
    }

    function ZT(TT) {
      if (void 0 !== TT) return "string" === typeof TT ? MT.includes(TT) ? TT : void 0 : (0, zT.q)(TT, 4) ? [nT(TT[0], 0, 1, 0), nT(TT[1], WT.i.minEasingY, WT.i.maxEasingY, 0), nT(TT[2], 0, 1, 1), nT(TT[3], WT.i.minEasingY, WT.i.maxEasingY, 1)] : "linear"
    }

    function cT(TT) {
      if (TT) return {
        maxYaw: nT(TT.maxYaw, 0, WT.i.maxPlayerLook, 0),
        maxPitch: nT(TT.maxPitch, 0, WT.i.maxPlayerLook, 0),
        returnMs: HT(TT.returnMs, 0, WT.i.maxReturnMs)
      }
    }
    const vT = new RegExp(WT.d);

    function fT(TT) {
      var UT;
      if ("object" !== typeof TT || null === TT) return;
      const mT = WT.i.maxTransitionMs,
        zT = WT.i.minTransitionFadeMs;
      return {
        colour: "string" === typeof TT.colour && vT.test(TT.colour) ? TT.colour : WT.e,
        outMs: nT(TT.outMs, zT, mT, zT),
        holdMs: nT(null !== (UT = TT.holdMs) && void 0 !== UT ? UT : 0, 0, mT, 0),
        inMs: nT(TT.inMs, zT, mT, zT)
      }
    }

    function qT(TT) {
      return !0 === TT || void 0
    }

    function iT(TT) {
      if ("object" !== typeof TT || null === TT) return !1;
      const UT = TT.lookAt;
      return Number.isFinite(TT.timeMs) && (0, zT.q)(TT.position, 3) && (void 0 === UT || "string" === typeof UT || (0, zT.q)(UT, 3))
    }

    function bT(TT) {
      return {
        ...TT,
        timeMs: nT(TT.timeMs, 0, WT.i.maxPathMs, 0),
        position: kT(TT.position),
        lookAt: jT(TT.lookAt),
        lookDirection: BT(TT.lookDirection),
        fov: HT(TT.fov, WT.i.minFov, WT.i.maxFov),
        easing: ZT(TT.easing)
      }
    }

    function OT(TT) {
      const UT = [];
      if (!Array.isArray(TT)) return UT;
      for (const mT of TT.slice(0, WT.i.maxKeyframes)) {
        if (!iT(mT)) continue;
        const TT = bT(mT);
        (0 === UT.length || TT.timeMs > UT[UT.length - 1].timeMs) && UT.push(TT)
      }
      return UT
    }

    function eT(TT) {
      if ("object" !== typeof TT || null === TT) return {
        mode: "default"
      };
      const UT = {
          blendInMs: HT(TT.blendInMs, 0, WT.i.maxBlendInMs),
          blendEasing: ZT(TT.blendEasing),
          transition: fT(TT.transition),
          letterbox: qT(TT.letterbox),
          hideHud: qT(TT.hideHud)
        },
        mT = {
          mode: "default",
          ...UT
        };
      if ("default" === TT.mode || "fixed" === TT.mode && !(0, zT.q)(TT.position, 3)) return mT;
      const MT = {
        ...UT,
        fov: HT(TT.fov, WT.i.minFov, WT.i.maxFov),
        playerFacing: (lT = TT.playerFacing, gT.includes(lT) ? lT : void 0),
        playerLook: cT(TT.playerLook)
      };
      var lT, LT;
      switch (TT.mode) {
        case "fixed":
          return {
            ...TT, ...MT, position: kT(TT.position), lookAt: jT(TT.lookAt), lookDirection: BT(TT.lookDirection)
          };
        case "follow":
          return {
            ...TT, ...MT, target: "string" === typeof TT.target ? TT.target : void 0, lookAt: jT(TT.lookAt), offset: (LT = TT.offset, Array.isArray(LT) ? [nT(LT[0], -WT.i.maxOffset, WT.i.maxOffset, 0), nT(LT[1], -WT.i.maxOffset, WT.i.maxOffset, 0), nT(LT[2], -WT.i.maxOffset, WT.i.maxOffset, 0)] : [0, 0, 0]), lookDirection: BT(TT.lookDirection), smoothMs: HT(TT.smoothMs, 0, WT.i.maxSmoothMs)
          };
        case "path":
          return {
            ...TT, ...MT, keyframes: OT(TT.keyframes)
          };
        case "frame":
          return {
            ...TT, ...MT, targets: pT(TT.targets), viewHeading: HT(TT.viewHeading, -WT.i.maxFrameHeading, WT.i.maxFrameHeading), viewElevation: HT(TT.viewElevation, 0, WT.i.maxFrameElevation), padding: HT(TT.padding, 0, WT.i.maxFrameDistance), closestDistance: HT(TT.closestDistance, 0, WT.i.maxFrameDistance), furthestDistance: HT(TT.furthestDistance, 0, WT.i.maxFrameDistance), smoothMs: HT(TT.smoothMs, 0, WT.i.maxSmoothMs)
          };
        default:
          return mT
      }
    }
  },
  38782: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT
    });
    var WT = mT(1321);

    function zT(TT) {
      const UT = /(\d*\.?\d+)px/.exec(TT);
      return UT ? Number(UT[1]) : null
    }

    function MT(TT) {
      return TT.split(/[\s,]+/).pop()
    }
    let gT = !1;
    const nT = {
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
      drawText: function(TT, UT, WT, nT, HT, kT) {
        if (HT <= 0 || kT <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: jT,
          fontVariant: lT,
          fontWeight: LT,
          fontSize: pT,
          font: BT
        } = this, ZT = [jT, lT, LT, `${pT}px`, BT].filter(Boolean).join(" "), cT = [
          [LT, `${pT}px`, MT(BT)].filter(Boolean).join(" "), `${pT}px sans-serif`
        ], vT = TT.font, fT = function(TT, UT, mT) {
          for (const WT of UT) {
            TT.font = WT;
            const UT = zT(TT.font),
              gT = MT(WT);
            if (null !== UT && Math.abs(UT - mT) <= .5 && TT.font.toLowerCase().includes(gT.toLowerCase())) return WT
          }
          return null
        }(TT, [ZT, ...cT], pT);
        fT !== ZT && function(TT, UT, WT) {
          gT || (gT = !0, Promise.resolve().then((() => mT(1153))).then((mT => {
            let {
              cZ: zT
            } = mT;
            zT(new Error("A canvas didn't take canvasTxt's font"), {
              font: TT,
              Jp: UT,
              drawnWith: null !== WT && void 0 !== WT ? WT : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(ZT, vT, fT);
        const qT = zT(TT.font);
        if (null === fT && null !== qT && qT > 0) {
          const mT = pT / qT;
          TT.save();
          try {
            return TT.scale(mT, mT), {
              height: this.drawLines(TT, UT, WT / mT, nT / mT, HT / mT, kT / mT, qT).height * mT
            }
          } finally {
            TT.restore()
          }
        }
        return this.drawLines(TT, UT, WT, nT, HT, kT, pT)
      },
      drawLines: function(TT, UT, mT, zT, MT, gT, nT) {
        const HT = mT + MT,
          kT = zT + gT;
        let jT, lT = zT + gT / 2 + nT / 2;
        "right" === this.align ? (jT = HT, TT.textAlign = "right") : "left" === this.align ? (jT = mT, TT.textAlign = "left") : (jT = mT + MT / 2, TT.textAlign = "center");
        for (const WT of UT) {
          TT.measureText(WT).width >= MT && (UT = UT.replace(WT, ""))
        }
        UT = (0, WT.Z)(UT);
        const LT = [],
          pT = UT.split("\n"),
          BT = this.justify ? TT.measureText("\u200a").width : 0;
        pT.forEach((UT => {
          let mT = TT.measureText(UT).width;
          if (mT <= MT) LT.push(UT);
          else {
            let WT = UT;
            const zT = MT;
            let gT, nT, HT;
            for (mT = TT.measureText(WT).width; mT > zT;) {
              for (gT = 0, nT = 0, HT = ""; nT < zT;) gT++, HT = WT.substr(0, gT), nT = TT.measureText(HT).width;
              gT--, HT = HT.substr(0, gT);
              const UT = gT;
              if (" " !== WT.substr(gT, 1)) {
                for (;
                  " " !== WT.substr(gT, 1) && 0 !== gT;) gT--;
                0 === gT && (gT = UT), HT = WT.substr(0, gT)
              }
              HT = this.justify ? this.justifyLine(TT, HT, BT, "\u200a", MT) : HT, WT = WT.substr(gT), mT = TT.measureText(WT).width, LT.push(HT)
            }
            mT > 0 && LT.push(WT)
          }
        }));
        const ZT = this.lineHeight ? this.lineHeight : this.getTextHeight(TT, UT),
          cT = ZT * (LT.length - 1),
          vT = cT / 2;
        let fT = zT;
        "top" === this.vAlign ? lT = zT + nT : "bottom" === this.vAlign ? (lT = kT - cT, fT = kT) : (fT = zT + gT / 2, lT -= vT), LT.forEach((UT => {
          UT = UT.trim(), TT.fillText(UT, jT, lT), lT += ZT
        })), this.debug && (TT.lineWidth = 3, TT.strokeStyle = "#00909e", TT.strokeRect(mT, zT, MT, gT), TT.lineWidth = 2, TT.strokeStyle = "#f6d743", TT.beginPath(), TT.moveTo(jT, zT), TT.lineTo(jT, kT), TT.stroke(), TT.strokeStyle = "#ff6363", TT.beginPath(), TT.moveTo(mT, fT), TT.lineTo(HT, fT), TT.stroke());
        return {
          height: cT + ZT
        }
      },
      getTextHeight: function(TT, UT) {
        const mT = TT.textBaseline;
        TT.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: WT
        } = TT.measureText(UT);
        return TT.textBaseline = mT, WT
      },
      justifyLine: function(TT, UT, mT, WT, zT) {
        const MT = UT.trim(),
          gT = TT.measureText(MT).width,
          nT = MT.split(/\s+/).length - 1,
          HT = Math.floor((zT - gT) / mT);
        if (nT <= 0 || HT <= 0) return MT;
        const kT = Math.floor(HT / nT);
        let jT = HT - nT * kT,
          lT = [];
        for (let LT = 0; LT < kT; LT++) lT.push(WT);
        lT = lT.join("");
        return MT.replace(/\s+/g, (TT => {
          const UT = jT > 0 ? lT + WT : lT;
          return jT--, TT + UT
        }))
      }
    }
  },
  39267: (TT, UT, mT) => {
    function WT(TT, UT) {
      return UT.set(TT), UT
    }
    mT.d(UT, {
      e: () => WT
    })
  },
  38788: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => ZT,
      e: () => BT,
      g: () => LT,
      j: () => jT,
      k: () => lT
    });
    var WT = mT(4328),
      zT = mT(366);
    const MT = 1024,
      gT = 1536,
      nT = 2 * WT.i + 1,
      HT = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      kT = 1.5;

    function jT(TT, UT, mT) {
      if ("string" !== typeof TT) return UT;
      try {
        const mT = JSON.parse(TT);
        return mT && "object" === typeof mT ? mT : UT
      } catch (WT) {
        return void 0 !== mT && console.error(`Couldn't parse ${mT}`, WT), UT
      }
    }

    function lT(TT) {
      return jT(TT, null, "a leaderboard's rows")
    }

    function LT(TT, UT) {
      var mT, WT;
      return null !== UT && void 0 !== UT ? UT : {
        status: null !== (mT = TT.status) && void 0 !== mT ? mT : "loading",
        entries: null !== (WT = TT.entries) && void 0 !== WT ? WT : []
      }
    }

    function pT(TT, UT) {
      return "number" === typeof TT && Number.isFinite(TT) && TT > 0 ? TT : UT
    }

    function BT(TT, UT) {
      const mT = pT(TT.size, 1);
      let WT = pT(TT.width, pT(2.5 * mT, 2.5)),
        zT = pT(TT.height, pT(3.75 * mT, 3.75));
      Number.isFinite(MT * zT / WT) && Number.isFinite(gT * WT / zT) || (WT = 2.5, zT = 3.75);
      const nT = zT / WT,
        HT = Math.max(1, Math.min(MT, UT / nT));
      return {
        width: WT,
        height: zT,
        layoutWidth: Math.max(MT, gT / nT),
        layoutHeight: Math.max(gT, MT * nT),
        pixelWidth: Math.round(HT),
        pixelHeight: Math.round(Math.max(1, Math.min(UT, HT * nT)))
      }
    }

    function ZT(TT, UT, mT, gT, jT, lT) {
      TT.setTransform(1, 0, 0, 1, 0, 0), TT.fillStyle = zT.R.defaultNameTagBackground, TT.fillRect(0, 0, UT, mT), TT.scale(UT / gT.layoutWidth, mT / gT.layoutHeight), TT.translate((gT.layoutWidth - MT) / 2, 0),
        function(TT, UT, mT, MT) {
          var gT, jT, lT, LT;
          const {
            top: pT,
            around: BT,
            showPlayerText: ZT,
            localPlayerDbId: fT
          } = mT, {
            whiteUiText: qT,
            grayUiText: iT,
            yellowUiText: bT
          } = zT.R;
          TT.textBaseline = "middle";
          const OT = function(UT, mT, WT, zT, MT, gT) {
              let nT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              TT.font = `bold ${zT}px 'Jetbrains Mono', monospace`, TT.fillStyle = MT, TT.textAlign = nT;
              let HT = UT.replace(/[\r\n\t]/g, " ");
              if (TT.measureText(HT).width > gT) {
                for (; HT.length > 0 && TT.measureText(`${HT}\u2026`).width > gT;) HT = HT.slice(0, -1);
                HT += "\u2026"
              }
              TT.fillText(HT, mT, WT)
            },
            eT = UT => {
              TT.fillStyle = qT, TT.globalAlpha = .15, TT.fillRect(24, UT, 976, 2), TT.globalAlpha = 1
            },
            YT = null === fT ? null : (0, zT.Fc)(fT),
            JT = TT => null !== YT && TT.playerHash === YT,
            xT = cT(pT.entries, WT.k),
            dT = "ready" === pT.status && xT.length > 0,
            wT = null === BT ? [] : cT(BT.entries, nT),
            tT = xT.some(JT),
            aT = null === BT ? null : function(TT) {
              const UT = TT;
              if (!UT || !Number.isFinite(UT.rank) || !Number.isFinite(UT.tied) || !Number.isFinite(UT.total)) return null;
              return UT
            }(BT.standing),
            yT = wT.find(JT),
            XT = xT.find(JT),
            IT = null === aT || void 0 === yT ? null : {
              value: yT.value,
              rank: aT.rank
            },
            QT = vT(xT, void 0 === XT || XT.value === (null === IT || void 0 === IT ? void 0 : IT.value) ? IT : null),
            sT = vT(wT, IT),
            FT = (TT, UT) => {
              const mT = TT.findIndex(JT);
              return mT >= 0 ? UT[mT] : null
            },
            PT = null !== (gT = null !== (jT = null === aT || void 0 === aT ? void 0 : aT.rank) && void 0 !== jT ? jT : FT(wT, sT)) && void 0 !== gT ? gT : FT(xT, QT);
          TT.font = "bold 34px 'Jetbrains Mono', monospace";
          const VT = [...dT ? QT : [], ...tT ? [] : sT],
            uT = Math.min(280, Math.max(0, ...VT.map((UT => TT.measureText(HT.format(UT)).width)))),
            CT = uT <= 80,
            rT = CT ? 80 : 32 + uT,
            KT = CT ? 148 : rT + 28,
            ST = 660 - KT;
          OT(`TOP ${WT.k}  /  ALL TIME`, 24, 52, 28, iT, 976), OT(ZT ? String(null !== (lT = UT.title) && void 0 !== lT ? lT : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, qT, 976), OT("RANK", 32, 174, 28, iT, KT - 40), OT("PLAYER", KT, 174, 28, iT, ST), OT(ZT ? String(null !== (LT = UT.scoreLabel) && void 0 !== LT ? LT : "Score").slice(0, 24) : "Score", 992, 174, 28, iT, 304, "right"), eT(202);
          const GT = (MT - 232) / (WT.k + kT + nT),
            NT = 208 + WT.k * GT,
            ET = NT + kT * GT,
            hT = (UT, mT, WT, zT) => {
              const MT = JT(UT);
              TT.fillStyle = MT ? bT : qT, TT.globalAlpha = MT ? .15 : zT ? .035 : 0, TT.fillRect(24, WT - GT / 2 + 1, 976, GT - 2), TT.globalAlpha = 1;
              const gT = MT ? bT : qT;
              OT(HT.format(mT), rT, WT, 34, gT, CT ? 80 : uT, CT ? "center" : "right"), OT(ZT ? String(UT.name).slice(0, 64) : "Player", KT, WT, 34, gT, ST);
              const nT = HT.format(UT.value);
              OT(TT.measureText(nT).width > 304 ? UT.value.toExponential(6) : nT, 992, WT, 34, gT, 304, "right")
            };
          if (dT)
            for (const [WT, zT] of xT.entries()) hT(zT, QT[WT], 208 + (WT + .5) * GT, WT % 2 === 0);
          else {
            const TT = "error" === pT.status,
              UT = TT ? "Couldn't load leaderboard" : "ready" === pT.status ? "No scores yet" : "Loading leaderboard\u2026",
              mT = TT ? "Trying again shortly" : "ready" === pT.status ? "Be the first on the board!" : "Fetching the top players",
              WT = (208 + NT) / 2;
            OT(UT, 512, WT - 28, 40, TT ? zT.R.redUiText : qT, 960, "center"), OT(mT, 512, WT + 27, 30, iT, 960, "center")
          }
          const DT = NT + kT * GT / 2;
          if (null === PT) eT(DT);
          else {
            const UT = null === aT ? 0 : aT.tied - 1,
              mT = `YOUR RANK #${HT.format(PT)}${null===aT?"":` of ${HT.format(aT.total)}`}`;
            TT.font = "bold 36px 'Jetbrains Mono', monospace";
            const WT = Math.max(20, Math.min(36, Math.floor(34560 / TT.measureText(mT).width)));
            OT(mT, 512, DT - (UT > 0 ? 15 : 0), WT, bT, 960, "center"), UT > 0 && OT(`Tied with ${HT.format(UT)} other${1===UT?"":"s"}`, 512, DT + 24, 24, iT, 960, "center")
          }
          if (null === BT) return;
          const oT = ET + nT * GT / 2;
          if (tT) OT(`You're in the top ${WT.k}!`, 512, oT, 40, bT, 960, "center");
          else if (0 === wT.length) OT("You're not on this board yet", 512, oT, 34, iT, 960, "center");
          else
            for (const [WT, zT] of wT.entries()) hT(zT, sT[WT], ET + (WT + .5) * GT, WT % 2 === 0)
        }(TT, jT, lT, gT.layoutHeight)
    }

    function cT(TT, UT) {
      return Array.isArray(TT) ? TT.slice(0, UT).filter((TT => TT && Number.isFinite(TT.rank) && Number.isFinite(TT.value))) : []
    }

    function vT(TT, UT) {
      const mT = [];
      let WT = !1;
      return TT.forEach(((zT, MT) => {
        if (null !== UT && zT.value === UT.value) return void mT.push(UT.rank);
        const gT = MT > 0 && zT.value === TT[MT - 1].value;
        gT || (WT = 0 === MT && 1 !== zT.rank), mT.push(gT && !WT ? mT[MT - 1] : zT.rank)
      })), mT
    }
  },
  38992: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      g: () => MT
    });
    const WT = 32;

    function zT(TT) {
      return Array.from(TT).length
    }

    function MT(TT) {
      const UT = [""];
      let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zT = "";
      const MT = () => {
        UT.push(""), mT = 0, zT = ""
      };
      for (const gT of TT.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(gT)) MT();
        else if (/^\s+$/.test(gT)) zT += gT;
      else if (gT.length > 0) {
        const TT = Array.from(gT);
        mT > 0 && mT + zT.length + TT.length > WT && MT(), UT[UT.length - 1] += zT, mT += zT.length, zT = "";
        for (const zT of TT) mT >= WT && MT(), UT[UT.length - 1] += zT, mT++
      }
      return UT[UT.length - 1] += zT, UT
    }
  },
  39264: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(36719),
      zT = mT.n(WT);
    const MT = [1, 1, 1];

    function gT(TT) {
      if (!TT) return [...MT];
      try {
        const [UT, mT, WT] = zT()(TT).rgb().array();
        return [UT / 255, mT / 255, WT / 255]
      } catch (UT) {
        return console.warn(`Invalid groundArrowPath colour "${TT}":`, UT), [...MT]
      }
    }
  },
  39346: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT,
      g: () => kT,
      k: () => HT
    });
    var WT = mT(314),
      zT = mT(3032);
    const MT = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      gT = 512;

    function nT(TT) {
      var UT;
      const mT = Math.min(screen.width, screen.height) * (null !== (UT = (0, WT.b)()) && void 0 !== UT ? UT : (0, zT.n)());
      return Math.max(window.innerHeight * (0, zT.n)(), mT) / (0, zT.o)(TT)
    }

    function HT(TT, UT, mT) {
      return UT / (2 * Math.tan(mT / 2)) > gT ? TT : kT(TT)
    }

    function kT(TT) {
      return TT.map((TT => TT.replace(MT, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34090: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT,
      f: () => nT,
      h: () => gT,
      i: () => zT,
      j: () => WT
    });
    const WT = {
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
      zT = "/textures/dayNight/sun.png",
      MT = "/textures/dayNight/moon.png",
      gT = "/textures/dayNight/stars",
      nT = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39316: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => jT,
      e: () => lT,
      g: () => WT,
      i: () => HT,
      k: () => zT,
      n: () => kT,
      o: () => nT,
      s: () => gT
    });
    const WT = ["linear", "easeIn", "easeOut", "easeInOut"],
      zT = ["movement", "camera", "cursor"],
      MT = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function gT(TT, UT) {
      return nT(TT, UT, MT)
    }

    function nT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (TT === UT || Number.isNaN(TT) && Number.isNaN(UT)) return !0;
      if ("object" !== typeof TT || "object" !== typeof UT || null === TT || null === UT || Array.isArray(TT) !== Array.isArray(UT)) return !1;
      const WT = TT,
        zT = UT;
      for (const MT of new Set([...Object.keys(WT), ...Object.keys(zT)]))
        if (!mT.includes(MT) && !nT(WT[MT], zT[MT])) return !1;
      return !0
    }
    const HT = {
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
      kT = "^-[1-9][0-9]*$",
      jT = "^#[0-9a-fA-F]{6}$",
      lT = "#000000"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);