export const id = 195;
export const ids = [195];
export const modules = {
  38089: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    class iT {
      constructor(TT, oT) {
        this.read = TT, this.apply = oT, this.release = null
      }
      turn(TT, oT) {
        const IT = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: oT,
          forcedCameraDirection: [TT[0], TT[1], TT[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), oT + 100),
          transitionMs: IT
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
  37636: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      g: () => zT
    });
    const iT = new Map;

    function zT(TT, oT) {
      iT.set(TT, oT)
    }

    function kT(TT) {
      return TT ? iT.get(TT) : void 0
    }
  },
  38532: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    var iT = IT(37215);

    function zT(TT, oT, IT) {
      var zT, kT, WT, XT, BT, FT, ST;
      const DT = (0, iT.b)(TT, oT, IT[0], IT[1], IT[2]),
        LT = DT ? null !== (zT = DT.textCell) && void 0 !== zT ? zT : DT.rect.anchor : IT,
        xT = oT(LT[0], LT[1], LT[2]);
      return {
        pos: [IT[0], IT[1], IT[2]],
        noticeboardSpan: DT && {
          width: DT.rect.width,
          height: DT.rect.height
        },
        text: null !== (kT = null === xT || void 0 === xT || null === (WT = xT.persisted) || void 0 === WT || null === (XT = WT.shared) || void 0 === XT ? void 0 : XT.text) && void 0 !== kT ? kT : "",
        textSize: null !== (BT = null === xT || void 0 === xT || null === (FT = xT.persisted) || void 0 === FT || null === (ST = FT.shared) || void 0 === ST ? void 0 : ST.textSize) && void 0 !== BT ? BT : null
      }
    }
  },
  37483: (TT, oT, IT) => {
    function iT(TT) {
      switch (TT.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    IT.d(oT, {
      d: () => zT,
      h: () => kT,
      j: () => iT
    });
    const zT = 4,
      kT = 3
  },
  38107: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      e: () => kT
    });
    var iT = IT(314);
    const zT = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class kT {
      constructor(TT) {
        this.importGame = TT, this.loads = new Map, this.loaded = new Map
      }
      load(TT) {
        const oT = (0, iT.Ib)(TT);
        if (!zT.has(oT)) return Promise.resolve(void 0);
        let IT = this.loads.get(oT);
        return IT || (IT = this.importGame(oT).then((TT => {
          const IT = TT.default;
          if ("function" !== typeof IT) throw new Error(`${oT}'s client code has no default-exported factory`);
          return this.loaded.set(oT, IT), IT
        })).catch((TT => {
          throw this.loads.delete(oT), TT
        })), this.loads.set(oT, IT)), IT
      }
      loadedFactory(TT) {
        const oT = (0, iT.Ib)(TT);
        if (!zT.has(oT)) return;
        const IT = this.loaded.get(oT);
        if (!IT) throw new Error(`${oT}'s client code started before it loaded`);
        return IT
      }
    }
  },
  38537: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(8914),
      zT = IT(8763),
      kT = IT(2844);

    function WT(TT) {
      if (TT === iT.c) return 0;
      const oT = (0, kT.d)(TT);
      if (void 0 !== oT && oT <= zT.MAX_BLOCK_ID) return oT;
      const IT = (0, kT.d)(TT.split("|")[0]);
      if (void 0 !== IT && IT <= zT.MAX_BLOCK_ID && (0, zT.rootMetaDescOf)(IT) === TT) return IT;
      throw new Error(`Invalid block name. You sent ${TT}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38150: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    var iT = IT(12);
    class zT {
      constructor(TT) {
        this.screen = TT, this.hidesHud = !1
      }
      show(TT, oT) {
        this.screen.setFade(TT.colour, TT.alpha), this.screen.setLetterbox(!0 === oT.letterbox, TT.alpha < 1), this.setHudHidden(!0 === oT.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(TT) {
        this.hidesHud !== TT && (this.hidesHud = TT, iT.c.set({
          isUiHiddenByCamera: TT
        }))
      }
    }
  },
  38124: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      i: () => LT,
      k: () => DT,
      l: () => WT,
      m: () => cT,
      o: () => BT,
      p: () => KT,
      t: () => FT,
      u: () => XT,
      v: () => ST
    });
    const iT = Math.PI / 2 - .001,
      zT = 2 * Math.PI,
      kT = 1e-9;

    function WT(TT, oT) {
      oT.heading = TT.heading, oT.pitch = TT.pitch
    }

    function XT(TT, oT) {
      const IT = oT - TT;
      return IT - zT * Math.floor((IT + Math.PI) / zT)
    }

    function BT(TT, oT, IT) {
      return TT + XT(TT, oT) * IT
    }

    function FT(TT) {
      if (!Number.isFinite(TT)) return TT;
      const oT = TT - zT * Math.floor(TT / zT);
      return oT < zT ? oT : 0
    }

    function ST(TT, oT) {
      return TT + XT(TT, oT)
    }

    function DT(TT) {
      return Math.max(-iT, Math.min(iT, TT))
    }

    function LT(TT, oT, IT) {
      const iT = Math.cos(oT);
      return IT[0] = iT * Math.sin(TT), IT[1] = -Math.sin(oT), IT[2] = iT * Math.cos(TT), IT
    }

    function xT(TT, oT, IT, iT) {
      const zT = Math.sqrt(TT * TT + IT * IT);
      return zT < kT && Math.abs(oT) < kT || (zT >= kT && (iT.heading = Math.atan2(TT, IT)), iT.pitch = DT(Math.atan2(-oT, zT) + 0)), iT
    }

    function cT(TT, oT) {
      return xT(TT[0], TT[1], TT[2], oT)
    }

    function KT(TT, oT, IT) {
      return xT(oT[0] - TT[0], oT[1] - TT[1], oT[2] - TT[2], IT)
    }
  },
  38147: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT,
      e: () => zT
    });
    var iT = IT(38124);

    function zT(TT) {
      var oT;
      const IT = "default" === TT.mode ? "movement" : null !== (oT = TT.playerFacing) && void 0 !== oT ? oT : "movement";
      return "cursor" === IT ? {
        facing: IT,
        mouseTurns: null
      } : {
        facing: IT,
        mouseTurns: "default" !== TT.mode && void 0 !== TT.playerLook ? "look" : "view"
      }
    }

    function kT(TT, oT, IT, zT, kT, WT) {
      return WT.RC = 0, WT.uC = 0, WT.pointedAt = void 0, void 0 !== zT ? kT ? (WT.pointedAt = zT, TT) : (0, iT.t)(zT.heading) : kT ? (WT.RC = oT, WT.uC = IT, TT) : (0, iT.t)(TT + oT)
    }
  },
  38133: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => lT
    });
    var iT = IT(38136),
      zT = IT(38124),
      kT = IT(35948);

    function WT(TT, oT, IT, iT) {
      if (!(iT > 0)) return oT;
      const zT = oT > TT ? Math.min(oT, TT + IT / iT) : Math.max(oT, TT - IT / iT);
      return Math.abs(oT - zT) < 1e-9 ? oT : zT
    }
    class XT {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: iT.g,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(TT) {
        !this.isGoingOut() && this.sinceTurnMs < iT.o.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: TT
        } : (this.waiting = null, this.startOut(TT))
      }
      fadeIn(TT) {
        this.isGoingOut() ? this.sinceTurnMs < iT.o.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: TT
        } : (this.waiting = null, this.startIn(TT)) : this.waiting = null
      }
      advance(TT) {
        const oT = this.waiting;
        if (null === oT) return this.step(TT);
        const IT = iT.o.minFadeTurnMs - this.sinceTurnMs;
        if (IT > TT) return this.step(TT);
        const zT = this.step(IT);
        return this.waiting = null, "out" === oT.turn ? this.startOut(oT.transition) : this.startIn(oT.minMs), this.step(TT - IT) || zT
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(TT) {
        ("in" === this.phase || null === this.phase && this.clearMs < iT.o.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = TT.colour), this.outMs = TT.outMs, this.holdMs = TT.holdMs, this.inMs = TT.inMs
      }
      startIn(TT) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(TT, this.inMs)
      }
      step(TT) {
        const oT = this.screen;
        this.sinceTurnMs += TT, null === this.phase && (this.clearMs += TT);
        let IT = !1,
          zT = TT;
        if ("out" === this.phase) {
          const iT = (1 - oT.alpha) * this.outMs;
          if (oT.alpha = WT(oT.alpha, 1, TT, this.outMs), oT.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, zT = Math.max(0, TT - iT), IT = !0
        }
        let kT = TT;
        if ("hold" === this.phase) {
          this.heldMs += zT;
          const TT = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - iT.o.minFadeTurnMs);
          if (TT < 0 || IT) return IT;
          this.phase = "in", this.sinceTurnMs = TT, kT = TT
        }
        return "in" === this.phase && (oT.alpha = WT(oT.alpha, 0, kT, this.inMs), oT.alpha <= 0 && (this.phase = null, this.clearMs = 0)), IT
      }
    }
    var BT = IT(38120),
      FT = IT(38138),
      ST = IT(1724),
      DT = IT(35574);

    function LT(TT, oT) {
      for (let IT = 0; IT < oT.length; IT++) oT[IT] = TT[IT]
    }

    function xT(TT, oT) {
      var IT;
      return null !== (IT = TT.fov) && void 0 !== IT ? IT : oT.getDefaultFov()
    }

    function cT(TT, oT, IT, iT, zT) {
      const kT = 2 / iT,
        WT = Math.exp(-kT * zT);
      for (let XT = 0; XT < TT.length; XT++) {
        const iT = TT[XT] - IT[XT],
          BT = (oT[XT] + kT * iT) * zT;
        TT[XT] = IT[XT] + (iT + BT) * WT, oT[XT] = (oT[XT] - kT * BT) * WT
      }
    }
    class KT {
      constructor(TT, oT, IT, iT) {
        var kT, WT, XT, BT, FT;
        this.settings = TT, this.iL = oT, this.targets = IT, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.LM = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, zT.t)((0, ST.m)(null !== (kT = TT.viewHeading) && void 0 !== kT ? kT : 0)),
          pitch: (0, zT.k)((0, ST.m)(null !== (WT = TT.viewElevation) && void 0 !== WT ? WT : 45))
        }, this.closestDistance = null !== (XT = TT.closestDistance) && void 0 !== XT ? XT : Math.min(6, null !== (BT = TT.furthestDistance) && void 0 !== BT ? BT : 1 / 0), this.furthestDistance = null !== (FT = TT.furthestDistance) && void 0 !== FT ? FT : Math.max(64, this.closestDistance);
        const DT = (0, zT.i)(this.base.heading, this.base.pitch, this.forward),
          LT = iT.position,
          xT = this.closestDistance;
        this.goal = [LT[0] + DT[0] * xT, LT[1] + DT[1] * xT, LT[2] + DT[2] * xT, xT, this.base.heading, this.base.pitch]
      }
      update(TT, oT, IT) {
        var iT, kT;
        this.placeGoal(null !== (iT = this.settings.fov) && void 0 !== iT ? iT : this.iL.getBaseFov()), this.goal[4] = (0, zT.v)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const WT = null !== (kT = this.settings.smoothMs) && void 0 !== kT ? kT : 400;
        !this.started || WT < 1 ? (LT(this.goal, this.smoothed), this.LM.fill(0), this.started = !0) : cT(this.smoothed, this.LM, this.goal, WT, TT), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, zT.k)(this.smoothed[5]), oT.apply(this.angles, IT);
        const XT = (0, zT.i)(IT.heading, IT.pitch, this.forward);
        for (let zT = 0; zT < 3; zT++) IT.position[zT] = this.smoothed[zT] - XT[zT] * this.smoothed[3];
        IT.fov = xT(this.settings, this.iL)
      }
      continueFrom(TT) {
        TT instanceof KT && (LT(TT.goal, this.goal), LT(TT.smoothed, this.smoothed), LT(TT.LM, this.LM), this.framedTargets = TT.framedTargets, this.started = TT.started)
      }
      reset() {
        this.LM.fill(0), this.started = !1
      }
      placeGoal(TT) {
        var oT;
        let IT = 0;
        for (const ST of this.settings.targets) {
          const TT = this.targets.currentAimPoint(ST);
          TT && (0, BT.g)(TT, this.pointAt(IT++))
        }
        if (IT > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const TT = this.targets.aimPoint(this.iL.localPlayerId);
          TT && (0, BT.g)(TT, this.pointAt(IT++))
        }
        const iT = this.goal;
        if (0 === IT) return void(iT[3] = this.withinDistances(iT[3]));
        for (let BT = 0; BT < 3; BT++) {
          let TT = 1 / 0,
            oT = -1 / 0;
          for (let iT = 0; iT < IT; iT++) TT = Math.min(TT, this.points[iT][BT]), oT = Math.max(oT, this.points[iT][BT]);
          iT[BT] = (TT + oT) / 2
        }
        let zT = 0;
        for (let BT = 0; BT < IT; BT++) {
          const TT = this.points[BT];
          zT = Math.max(zT, Math.hypot(TT[0] - iT[0], TT[1] - iT[1], TT[2] - iT[2]))
        }
        const kT = Math.tan((0, ST.m)(TT) / 2),
          WT = Math.atan(kT * (!0 === this.settings.letterbox ? DT.g : 1)),
          XT = Math.atan(kT * this.iL.getAspectRatio()),
          FT = (zT + (null !== (oT = this.settings.padding) && void 0 !== oT ? oT : 2)) / Math.sin(Math.min(WT, XT));
        iT[3] = this.withinDistances(FT)
      }
      withinDistances(TT) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, TT))
      }
      pointAt(TT) {
        return TT === this.points.length && this.points.push([0, 0, 0]), this.points[TT]
      }
    }
    class MT {
      constructor(TT) {
        this.limits = TT, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(TT) {
        this.limits && (this.yawOffset = TT.yawOffset, this.pitchOffset = TT.pitchOffset, this.idleMs = TT.idleMs)
      }
      update(TT, oT) {
        const IT = this.limits;
        if (!IT) return;
        const iT = Number.isFinite(oT.RC) ? oT.RC : 0,
          zT = Number.isFinite(oT.uC) ? oT.uC : 0;
        if (oT.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: oT.pointedAt.heading,
          pitch: oT.pointedAt.pitch
        };
        else if (0 !== iT || 0 !== zT) this.idleMs = 0, this.yawOffset += iT, this.pitchOffset += zT;
        else {
          const oT = Math.max(0, this.idleMs + TT - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += TT, void 0 !== IT.returnMs && oT > 0) {
            const TT = IT.returnMs > 0 ? Math.exp(-3 * oT / IT.returnMs) : 0;
            this.yawOffset *= TT, this.pitchOffset *= TT
          }
        }
        this.clampOffsets(IT)
      }
      clampOffsets(TT) {
        if (TT.maxYaw >= 180) this.yawOffset = (0, zT.u)(0, this.yawOffset);
        else {
          const oT = (0, ST.m)(TT.maxYaw);
          this.yawOffset = Math.max(-oT, Math.min(oT, this.yawOffset))
        }
        const oT = (0, ST.m)(TT.maxPitch);
        this.pitchOffset = Math.max(-oT, Math.min(oT, this.pitchOffset))
      }
      apply(TT, oT) {
        this.pointedAt && this.limits && (this.yawOffset = (0, zT.u)(TT.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - TT.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const IT = (0, zT.k)(TT.pitch + this.pitchOffset);
        this.pitchOffset = IT - TT.pitch, oT.heading = (0, zT.t)(TT.heading + this.yawOffset), oT.pitch = IT
      }
      unapply(TT, oT) {
        oT.heading = (0, zT.t)(TT.heading - this.yawOffset), oT.pitch = (0, zT.k)(TT.pitch - this.pitchOffset)
      }
    }
    const rT = 1e-6;

    function AT(TT) {
      return Math.sqrt(TT[0] * TT[0] + TT[1] * TT[1] + TT[2] * TT[2])
    }

    function gT(TT, oT, IT, iT, zT) {
      const kT = zT * zT,
        WT = kT * zT;
      return (2 * WT - 3 * kT + 1) * TT + (WT - 2 * kT + zT) * oT + (-2 * WT + 3 * kT) * IT + (WT - kT) * iT
    }

    function hT(TT, oT, IT, iT, zT) {
      const kT = zT * zT;
      return (6 * kT - 6 * zT) * TT + (3 * kT - 4 * zT + 1) * oT + (-6 * kT + 6 * zT) * IT + (3 * kT - 2 * zT) * iT
    }

    function wT(TT, oT) {
      const IT = oT[0] - TT[0],
        iT = oT[1] - TT[1],
        zT = oT[2] - TT[2];
      return Math.sqrt(IT * IT + iT * iT + zT * zT)
    }

    function mT(TT, oT, IT, iT, zT, kT) {
      for (let WT = 0; WT < 3; WT++) kT[WT] = zT ? TT[WT] * iT : IT[WT] - oT[WT];
      return zT && function(TT, oT) {
        const IT = AT(TT);
        if (IT > oT) {
          const iT = oT / IT;
          TT[0] *= iT, TT[1] *= iT, TT[2] *= iT
        }
      }(kT, 3 * wT(oT, IT)), kT
    }

    function eT(TT, oT, IT, iT) {
      for (let zT = 0; zT < 3; zT++) iT[zT] = 6 * (oT[zT] - TT[zT]) - 2 * IT[zT];
      if (AT(iT) < rT)
        for (let zT = 0; zT < 3; zT++) iT[zT] = oT[zT] - TT[zT];
      return iT
    }

    function RT(TT, oT) {
      return [2 * oT[0] - TT[0], 2 * oT[1] - TT[1], 2 * oT[2] - TT[2]]
    }

    function uT(TT, oT, IT, iT, zT, kT, WT) {
      if (!kT && !WT) return 0;
      const XT = kT ? TT : 2 * oT - IT,
        BT = WT ? IT : 2 * oT - TT,
        FT = kT ? iT : zT,
        ST = WT ? zT : iT,
        DT = (oT - XT) / FT,
        LT = (BT - oT) / ST;
      if (DT * LT <= 0) return 0;
      const xT = (BT - XT) / (FT + ST),
        cT = 3 * Math.min(Math.abs(DT), Math.abs(LT));
      return Math.max(-cT, Math.min(cT, xT))
    }

    function vT(TT, oT, IT, iT, zT, kT, WT) {
      const {
        u: XT,
        segmentMs: BT
      } = TT;
      if (!TT.curved) return IT + (iT - IT) * XT;
      return gT(IT, uT(oT, IT, iT, TT.beforeMs, BT, kT, !0) * BT, iT, uT(IT, iT, zT, BT, TT.afterMs, !0, WT) * BT, XT)
    }

    function ET(TT) {
      return Math.abs(TT.pitch) >= zT.e
    }
    class fT {
      constructor(TT, oT, IT, iT, zT) {
        this.nodes = TT, this.prevNodes = IT, this.nextNodes = iT, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = TT.map(((TT, IT) => this.nodeTangent(oT, zT, IT)))
      }
      sample(TT, oT, IT) {
        const {
          index: iT,
          toIndex: kT,
          segmentMs: WT,
          curved: XT
        } = TT, BT = this.fromAngles, FT = this.toAngles, ST = this.nodeAngles(iT, IT.position, oT, BT), DT = this.nodeAngles(kT, IT.position, oT, FT);
        if (WT > 0 && "aim" !== ST && "aim" !== DT && this.liveTangent(TT, BT)) return IT.heading = (0, zT.t)(BT.heading), void(IT.pitch = BT.pitch);
        if ("none" === ST && "none" === DT) return;
        !XT && WT > 0 && ("tangent" === ST && this.liveTangent(TT, BT), "tangent" === DT && this.liveTangent(TT, FT)), "none" === ST ? (0, zT.l)(FT, BT) : "none" === DT && (0, zT.l)(BT, FT);
        const LT = XT && TT.beforeIndex >= 0 && "none" !== this.nodeAngles(TT.beforeIndex, IT.position, oT, this.beforeAngles),
          xT = XT && TT.afterIndex >= 0 && "none" !== this.nodeAngles(TT.afterIndex, IT.position, oT, this.afterAngles),
          cT = (0, zT.v)(BT.heading, FT.heading),
          KT = vT(TT, LT ? (0, zT.v)(BT.heading, this.beforeAngles.heading) : 0, BT.heading, cT, xT ? (0, zT.v)(cT, this.afterAngles.heading) : 0, LT, xT);
        IT.heading = (0, zT.t)(KT), IT.pitch = (0, zT.k)(vT(TT, this.beforeAngles.pitch, BT.pitch, FT.pitch, this.afterAngles.pitch, LT, xT))
      }
      nodeAngles(TT, oT, IT, iT) {
        const zT = this.rawNodeAngles(TT, oT, IT, iT);
        return "none" !== zT && ET(iT) && !this.borrowHeading(this.prevNodes[TT], oT, IT, iT) && this.borrowHeading(this.nextNodes[TT], oT, IT, iT), zT
      }
      borrowHeading(TT, oT, IT, iT) {
        const zT = this.borrowedAngles;
        return !(TT < 0 || "none" === this.rawNodeAngles(TT, oT, IT, zT) || ET(zT)) && (iT.heading = zT.heading, !0)
      }
      rawNodeAngles(TT, oT, IT, iT) {
        const kT = this.nodes[TT].keyframe;
        if (kT.lookDirection) return (0, zT.m)(kT.lookDirection, iT), "aim";
        if (void 0 !== kT.lookAt) {
          const TT = IT(kT.lookAt);
          if (TT) return (0, zT.p)(oT, TT, iT), "aim"
        }
        const WT = this.tangents[TT];
        return WT ? ((0, zT.l)(WT, iT), "tangent") : "none"
      }
      liveTangent(TT, oT) {
        const IT = this.nodes[TT.index].position,
          iT = this.nodes[TT.toIndex].position,
          kT = this.derivative;
        for (let zT = 0; zT < 3; zT++) kT[zT] = hT(IT[zT], TT.fromTangent[zT], iT[zT], TT.toTangent[zT], TT.u);
        return AT(kT) > 1e-9 ? ((0, zT.m)(kT, oT), !0) : !(wT(IT, iT) < rT) && ((0, zT.m)(eT(IT, iT, TT.u < .5 ? TT.toTangent : TT.fromTangent, kT), oT), !0)
      }
      nodeTangent(TT, oT, IT) {
        var iT;
        const kT = TT[IT];
        if (AT(kT) > 1e-9) return (0, zT.m)(kT, {
          heading: 0,
          pitch: 0
        });
        const WT = null !== (iT = this.restDirectionTo(IT, IT + 1, TT, oT)) && void 0 !== iT ? iT : this.restDirectionTo(IT, IT - 1, TT, oT);
        return WT ? (0, zT.m)(WT, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(TT, oT, IT, iT) {
        const zT = this.nodes[TT],
          kT = this.nodes[oT];
        if (!kT || wT(zT.position, kT.position) < rT) return null;
        const [WT, XT] = oT > TT ? [zT, kT] : [kT, zT], BT = mT(IT[oT], WT.position, XT.position, XT.timeMs - WT.timeMs, iT, [0, 0, 0]);
        return eT(WT.position, XT.position, BT, [0, 0, 0])
      }
    }

    function CT(TT, oT) {
      const IT = TT.lookDirection || oT.lookDirection ? function(TT, oT) {
        if (!TT || !oT) return TT === oT;
        const IT = AT(TT),
          iT = AT(oT);
        return Math.hypot(TT[0] / IT - oT[0] / iT, TT[1] / IT - oT[1] / iT, TT[2] / IT - oT[2] / iT) < rT
      }(TT.lookDirection, oT.lookDirection) : (iT = TT.lookAt, zT = oT.lookAt, "object" !== typeof iT || "object" !== typeof zT ? iT === zT : wT(iT, zT) < rT);
      var iT, zT;
      return wT(TT.position, oT.position) < rT && TT.fov === oT.fov && IT
    }
    class jT {
      constructor(TT, oT, IT) {
        if (this.smooth = oT, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
        for (let kT = 1; kT < TT.length; kT++)
          if (!(TT[kT].timeMs > TT[kT - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = TT.map((TT => {
          var oT;
          return {
            timeMs: TT.timeMs,
            position: [...TT.position],
            keyframe: TT,
            easing: (0, kT.k)(null !== (oT = TT.easing) && void 0 !== oT ? oT : "linear")
          }
        }));
        const iT = this.nodes[0],
          zT = this.nodes[this.nodes.length - 1],
          WT = IT && this.nodes.length > 1;
        WT && !CT(iT.keyframe, zT.keyframe) && this.nodes.push({
          ...iT,
          timeMs: zT.timeMs + (zT.timeMs - iT.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = WT ? this.nodes[this.nodes.length - 1].timeMs - iT.timeMs : 0, this.prevNodes = this.nodes.map(((TT, oT) => this.neighbour(oT, -1))), this.nextNodes = this.nodes.map(((TT, oT) => this.neighbour(oT, 1))), this.prevGaps = this.prevNodes.map(((TT, oT) => TT >= 0 ? this.gapMs(oT, -1) : 0)), this.nextGaps = this.nextNodes.map(((TT, oT) => TT >= 0 ? this.gapMs(oT, 1) : 0)), this.velocities = this.nodes.map(((TT, oT) => {
          const IT = this.prevNodes[oT],
            iT = this.nextNodes[oT];
          return function(TT, oT, IT, iT, zT, kT) {
            if (kT[0] = 0, kT[1] = 0, kT[2] = 0, !TT && !IT) return kT;
            const WT = null !== TT && void 0 !== TT ? TT : RT(null !== IT && void 0 !== IT ? IT : oT, oT),
              XT = null !== IT && void 0 !== IT ? IT : RT(null !== TT && void 0 !== TT ? TT : oT, oT),
              BT = TT ? iT : zT,
              FT = IT ? zT : iT,
              ST = wT(WT, oT),
              DT = wT(oT, XT);
            if (ST < rT || DT < rT) return kT;
            const LT = Math.sqrt(ST),
              xT = Math.sqrt(DT),
              cT = (LT + xT) / (BT + FT);
            for (let KT = 0; KT < 3; KT++) {
              const TT = (oT[KT] - WT[KT]) / LT - (XT[KT] - WT[KT]) / (LT + xT) + (XT[KT] - oT[KT]) / xT;
              kT[KT] = TT * cT
            }
            return kT
          }(IT >= 0 ? this.nodes[IT].position : null, TT.position, iT >= 0 ? this.nodes[iT].position : null, this.prevGaps[oT], this.nextGaps[oT], [0, 0, 0])
        })), this.aim = new fT(this.nodes, this.velocities, this.prevNodes, this.nextNodes, oT)
      }
      sample(TT, oT, IT, iT) {
        const zT = this.findSegment(this.pathTime(TT));
        this.samplePosition(zT, iT.position), this.aim.sample(zT, oT, iT);
        const {
          beforeIndex: kT,
          afterIndex: WT
        } = zT;
        iT.fov = vT(zT, kT >= 0 ? this.fovAt(kT, IT) : 0, this.fovAt(zT.index, IT), this.fovAt(zT.toIndex, IT), WT >= 0 ? this.fovAt(WT, IT) : 0, kT >= 0, WT >= 0)
      }
      pathTime(TT) {
        const oT = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || TT <= oT) return TT;
        const IT = TT - oT;
        return oT + IT - this.loopMs * Math.floor(IT / this.loopMs)
      }
      findSegment(TT) {
        const oT = this.nodes,
          IT = this.segment;
        let iT = IT.index;
        for (TT < oT[iT].timeMs && (iT = 0); iT < oT.length - 2 && oT[iT + 1].timeMs <= TT;) iT++;
        const zT = Math.min(iT + 1, oT.length - 1),
          WT = oT[zT].timeMs - oT[iT].timeMs;
        return IT.index = iT, IT.toIndex = zT, IT.segmentMs = WT, IT.u = WT > 0 ? (0, kT.j)((TT - oT[iT].timeMs) / WT, oT[iT].easing) : 1, IT.curved = this.smooth && WT > 0, IT.beforeIndex = this.prevNodes[iT], IT.afterIndex = this.nextNodes[zT], IT.beforeMs = this.prevGaps[iT], IT.afterMs = this.nextGaps[zT], IT
      }
      samplePosition(TT, oT) {
        const {
          fromTangent: IT,
          toTangent: iT,
          curved: zT
        } = TT, kT = this.nodes[TT.index].position, WT = this.nodes[TT.toIndex].position;
        mT(this.velocities[TT.index], kT, WT, TT.segmentMs, zT, IT), mT(this.velocities[TT.toIndex], kT, WT, TT.segmentMs, zT, iT);
        const XT = TT.u;
        for (let BT = 0; BT < 3; BT++) oT[BT] = zT ? gT(kT[BT], IT[BT], WT[BT], iT[BT], XT) : kT[BT] + (WT[BT] - kT[BT]) * XT
      }
      fovAt(TT, oT) {
        var IT;
        return null !== (IT = this.nodes[TT].keyframe.fov) && void 0 !== IT ? IT : oT
      }
      neighbour(TT, oT) {
        const IT = this.nodes.length - 1,
          iT = TT + oT;
        return iT >= 0 && iT <= IT ? iT : this.loopMs <= 0 || IT < 2 ? -1 : iT < 0 ? IT - 1 : 1
      }
      gapMs(TT, oT) {
        const IT = this.nodes.length - 1;
        if (1 === oT) {
          const oT = TT === IT ? 0 : TT;
          return this.nodes[oT + 1].timeMs - this.nodes[oT].timeMs
        }
        const iT = 0 === TT ? IT : TT;
        return this.nodes[iT].timeMs - this.nodes[iT - 1].timeMs
      }
    }
    class JT {
      constructor(TT) {
        this.iL = TT, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = oT => TT.getEntityPosition(oT), this.readAimPoint = oT => TT.getEntityAimPoint(oT)
      }
      aimPoint(TT) {
        return "string" !== typeof TT ? (0, BT.o)(TT, 3) ? TT : null : this.resolve(TT, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(TT) {
        const oT = "string" === typeof TT ? this.iL.getEntityAimPoint(TT) : TT;
        return oT && (0, BT.o)(oT, 3) ? oT : null
      }
      feetPosition(TT) {
        return this.resolve(TT, this.readFeet, this.lastFeet)
      }
      heading(TT) {
        const oT = this.iL.getEntityHeading(TT);
        if (null !== oT && Number.isFinite(oT)) return this.lastHeadings.set(TT, oT), oT;
        const IT = this.lastHeadings.get(TT);
        return void 0 !== IT ? IT : TT === this.iL.localPlayerId ? 0 : this.heading(this.iL.localPlayerId)
      }
      resolve(TT, oT, IT) {
        const iT = oT(TT);
        let zT = IT.get(TT);
        return iT && (0, BT.o)(iT, 3) ? (zT || (zT = [0, 0, 0], IT.set(TT, zT)), zT[0] = iT[0], zT[1] = iT[1], zT[2] = iT[2], zT) : zT || (TT === this.iL.localPlayerId ? null : this.resolve(this.iL.localPlayerId, oT, IT))
      }
    }

    function UT(TT) {
      return {
        heading: TT.heading,
        pitch: TT.pitch
      }
    }

    function aT(TT, oT) {
      Number.isFinite(TT.heading) && Number.isFinite(TT.pitch) || (0, zT.l)(oT, TT)
    }

    function YT(TT, oT, IT, iT, kT) {
      if (oT) return void(0, zT.m)(oT, kT);
      const WT = iT.aimPoint(IT);
      WT && (0, zT.p)(TT, WT, kT)
    }
    class QT {
      constructor(TT, oT, IT, iT) {
        this.settings = TT, this.iL = oT, this.targets = IT, this.base = void 0, this.base = UT(iT)
      }
      update(TT, oT, IT) {
        var iT;
        const zT = this.settings;
        (0, BT.g)(zT.position, IT.position), YT(zT.position, zT.lookDirection, null !== (iT = zT.lookAt) && void 0 !== iT ? iT : this.iL.localPlayerId, this.targets, this.base), oT.apply(this.base, IT), IT.fov = xT(zT, this.iL)
      }
      continueFrom(TT) {
        TT instanceof QT && (0, zT.l)(TT.base, this.base)
      }
      reset(TT) {
        aT(this.base, TT)
      }
    }
    class OT {
      constructor(TT, oT, IT, iT) {
        this.settings = TT, this.iL = oT, this.targets = IT, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.LM = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = UT(iT), this.goal = [...iT.position]
      }
      update(TT, oT, IT) {
        var iT, zT, kT;
        const WT = this.settings,
          XT = null !== (iT = WT.target) && void 0 !== iT ? iT : this.iL.localPlayerId,
          FT = this.targets.feetPosition(XT);
        let ST = !1;
        FT && (ST = this.foundFeet && wT(this.lastFeet, FT) > 32 + .1 * TT, (0, BT.g)(FT, this.lastFeet), this.foundFeet = !0, this.placeGoal(FT, XT));
        const DT = null !== (zT = WT.smoothMs) && void 0 !== zT ? zT : 0;
        !this.started || DT < 1 || ST ? ((0, BT.g)(this.goal, this.smoothed), this.LM.fill(0), this.started = !0) : cT(this.smoothed, this.LM, this.goal, DT, TT), ST && (this.distance = -1), (0, BT.g)(this.smoothed, IT.position);
        const LT = !0 === WT.avoidTerrain ? this.pullIn(XT, TT, IT) : 1;
        let KT = this.goal;
        if ("target" === WT.offsetSpace) KT = IT.position;
        else if (LT < 1) {
          KT = this.aimOrigin;
          for (let TT = 0; TT < 3; TT++) KT[TT] = IT.position[TT] + (this.goal[TT] - this.smoothed[TT]) * LT
        }
        YT(KT, WT.lookDirection, null !== (kT = WT.lookAt) && void 0 !== kT ? kT : XT, this.targets, this.base), oT.apply(this.base, IT), IT.fov = xT(WT, this.iL)
      }
      continueFrom(TT) {
        TT instanceof OT && (0, iT.x)(TT.settings.target, this.settings.target) && ((0, zT.l)(TT.base, this.base), (0, BT.g)(TT.goal, this.goal), (0, BT.g)(TT.lastFeet, this.lastFeet), this.foundFeet = TT.foundFeet, (0, BT.g)(TT.smoothed, this.smoothed), (0, BT.g)(TT.LM, this.LM), this.started = TT.started, !0 === TT.settings.avoidTerrain && (this.distance = TT.distance))
      }
      reset(TT) {
        aT(this.base, TT), this.LM.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(TT, oT, IT) {
        const iT = this.targets.aimPoint(TT);
        if (!iT) return 1;
        const zT = IT.position,
          kT = wT(iT, zT);
        if (!(kT > 0)) return 1;
        const WT = this.toCamera;
        for (let BT = 0; BT < 3; BT++) WT[BT] = (zT[BT] - iT[BT]) / kT;
        const XT = function(TT, oT, IT) {
          return TT < 0 || oT < TT ? oT : oT + (TT - oT) * Math.exp(-IT / 150)
        }(this.distance, function(TT, oT, IT, iT) {
          const zT = TT.raycastTerrain(oT, IT, iT);
          return null !== zT && Number.isFinite(zT) ? Math.min(iT, Math.max(0, zT - .2)) : iT
        }(this.iL, iT, WT, kT), oT);
        if (kT - XT < .001) return this.distance = -1, 1;
        this.distance = XT;
        for (let BT = 0; BT < 3; BT++) zT[BT] = iT[BT] + WT[BT] * XT;
        return XT / kT
      }
      placeGoal(TT, oT) {
        const IT = this.settings.offset;
        let iT = IT[0],
          zT = IT[2];
        if ("target" === this.settings.offsetSpace) {
          const TT = this.targets.heading(oT),
            kT = Math.cos(TT),
            WT = Math.sin(TT);
          iT = IT[0] * kT + IT[2] * WT, zT = -IT[0] * WT + IT[2] * kT
        }
        this.goal[0] = TT[0] + iT, this.goal[1] = TT[1] + IT[1], this.goal[2] = TT[2] + zT
      }
    }
    class HT {
      constructor(TT, oT, IT, iT) {
        var zT, kT;
        this.settings = TT, this.iL = oT, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = TT.keyframes.length > 0 ? new jT(TT.keyframes, null === (zT = TT.smooth) || void 0 === zT || zT, null !== (kT = TT.loop) && void 0 !== kT && kT) : null, this.base = (0, BT.e)(iT, (0, BT.i)()), this.resolveTarget = TT => IT.aimPoint(TT)
      }
      update(TT, oT, IT) {
        this.elapsedMs += TT;
        const iT = xT(this.settings, this.iL);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, iT, this.base) : this.base.fov = iT, (0, BT.g)(this.base.position, IT.position), IT.fov = this.base.fov, oT.apply(this.base, IT)
      }
      continueFrom(TT) {
        TT instanceof HT && (0, iT.x)(TT.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = TT.elapsedMs, (0, BT.e)(TT.base, this.base))
      }
      reset(TT) {
        aT(this.base, TT), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function nT(TT, oT) {
      return (0, iT.y)(TT, oT)
    }
    class qT {
      constructor(TT, oT, IT) {
        var iT;
        this.settings = TT, this.iL = oT, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const zT = null !== IT && IT.settings.mode === TT.mode,
          kT = zT ? IT.pose : oT.getDefaultPose();
        this.pose = (0, BT.e)(kT, (0, BT.i)()), this.lastGoodPose = (0, BT.e)(zT ? IT.lastGoodPose : kT, (0, BT.i)()), this.look = new MT(TT.playerLook), this.targets = null !== (iT = null === IT || void 0 === IT ? void 0 : IT.targets) && void 0 !== iT ? iT : new JT(oT);
        const WT = (0, BT.e)(kT, (0, BT.i)());
        zT && IT.look.unapply(WT, WT), this.mode = function(TT, oT, IT, iT) {
          switch (TT.mode) {
            case "fixed":
              return new QT(TT, oT, IT, iT);
            case "follow":
              return new OT(TT, oT, IT, iT);
            case "path":
              return new HT(TT, oT, IT, iT);
            case "frame":
              return new KT(TT, oT, IT, iT)
          }
        }(TT, oT, this.targets, WT), zT && (this.look.continueFrom(IT.look), this.mode.continueFrom(IT.mode))
      }
      update(TT, oT) {
        return this.look.update(TT, oT), this.mode.update(TT, this.look, this.pose), (0, BT.m)(this.pose) ? (0, BT.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, BT.e)(this.lastGoodPose, this.pose), this.mode.reset((0, BT.m)(this.lastGoodPose) ? this.lastGoodPose : this.iL.getDefaultPose())), this.pose
      }
    }

    function ZT(TT) {
      return [0, 0, TT[2], TT[3]]
    }
    class lT {
      constructor(TT) {
        this.iL = TT, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new XT, this.shot = null, this.blend = null, this.mixed = (0, BT.i)(), this.output = (0, BT.i)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(TT) {
        const oT = (0, FT.d)(TT);
        if ((0, iT.x)(oT, this.pending ? this.pending.settings : this.settings)) return;
        const IT = nT(this.settings, oT);
        if (void 0 !== oT.transition && !IT) return this.pending = {
          settings: oT,
          shot: "default" === oT.mode ? null : new qT(oT, this.iL, null)
        }, void this.fade.fadeOut(oT.transition);
        const zT = null !== this.pending;
        this.pending = null, !zT && IT || this.fade.fadeIn(iT.o.minTransitionFadeMs), this.show(oT, !1)
      }
      show(TT, oT) {
        var IT, zT;
        if ((0, iT.x)(TT, this.settings)) return;
        const WT = !oT && nT(this.settings, TT);
        this.settings = TT;
        const XT = null !== this.blend && this.blend.elapsedMs > 0,
          FT = (0, BT.e)(this.hasOutput ? this.output : this.iL.getDefaultPose(), (0, BT.i)());
        if (this.shot = "default" === TT.mode ? null : new qT(TT, this.iL, oT ? null : this.shot), WT) return;
        const ST = oT || !this.shot && !this.hasOutput ? 0 : null !== (IT = TT.blendInMs) && void 0 !== IT ? IT : 0;
        if (ST <= 0) return void(this.blend = null);
        const DT = (0, kT.k)(null !== (zT = TT.blendEasing) && void 0 !== zT ? zT : "easeInOut");
        this.blend = {
          from: FT,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: ST,
          easing: XT ? ZT(DT) : DT
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
      update(TT, oT) {
        const IT = Number.isFinite(TT) && TT > 0 ? TT : 0;
        if (this.fade.advance(IT) && null !== this.pending) {
          const {
            settings: TT
          } = this.pending;
          this.pending = null, this.show(TT, !0)
        }
        this.loadingPositions.length = 0;
        const iT = this.pending;
        if (null !== iT && void 0 !== iT && iT.shot) {
          const TT = "path" === iT.settings.mode ? 0 : IT;
          this.noteLoadingPosition(iT.shot.update(TT, BT.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const WT = this.shot ? this.shot.update(IT, oT) : this.iL.getDefaultPose();
        this.shot && this.noteLoadingPosition(WT.position);
        const XT = this.blend;
        if (!XT) return this.writeOutput(WT);
        XT.elapsedMs += IT;
        const FT = Math.min(1, XT.elapsedMs / XT.durationMs);
        if (XT.headingDelta = Number.isFinite(XT.headingDelta) ? (0, zT.v)(XT.headingDelta, WT.heading - XT.from.heading) : (0, zT.u)(XT.from.heading, WT.heading), (0, BT.s)(XT.from, WT, XT.headingDelta, (0, kT.j)(FT, XT.easing), this.mixed), FT >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else XT.fromScripted && this.noteLoadingPosition(XT.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(TT) {
        if (TT.every(Number.isFinite)) {
          const oT = this.loadingPositions;
          oT.push((0, BT.g)(TT, this.loadingSlots[oT.length]))
        }
      }
      writeOutput(TT) {
        const oT = this.output;
        (0, BT.m)(TT) ? (0, BT.e)(TT, oT) : this.hasOutput || (0, BT.e)(this.iL.getDefaultPose(), oT), oT.pitch = (0, zT.k)(oT.pitch);
        const IT = this.iL.getDefaultFov(),
          kT = Number.isFinite(IT) && IT > 0 && IT < 180,
          WT = kT ? Math.min(iT.o.minFov, IT) : iT.o.minFov,
          XT = kT ? Math.max(iT.o.maxFov, IT) : iT.o.maxFov;
        return oT.fov = Number.isFinite(oT.fov) ? Math.min(XT, Math.max(WT, oT.fov)) : XT, this.hasOutput = !0, oT
      }
    }
  },
  38120: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      e: () => XT,
      g: () => WT,
      i: () => kT,
      m: () => FT,
      o: () => BT,
      s: () => ST
    });
    var iT = IT(38124);
    const zT = {
      RC: 0,
      uC: 0
    };

    function kT() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function WT(TT, oT) {
      return oT[0] = TT[0], oT[1] = TT[1], oT[2] = TT[2], oT
    }

    function XT(TT, oT) {
      return WT(TT.position, oT.position), oT.heading = TT.heading, oT.pitch = TT.pitch, oT.fov = TT.fov, oT
    }

    function BT(TT, oT) {
      return Array.isArray(TT) && TT.length === oT && TT.every(Number.isFinite)
    }

    function FT(TT) {
      return BT(TT.position, 3) && Number.isFinite(TT.heading) && Number.isFinite(TT.pitch) && Number.isFinite(TT.fov)
    }

    function ST(TT, oT, IT, zT, kT) {
      for (let iT = 0; iT < 3; iT++) kT.position[iT] = TT.position[iT] + (oT.position[iT] - TT.position[iT]) * zT;
      return kT.heading = (0, iT.t)(TT.heading + IT * zT), kT.pitch = TT.pitch + (oT.pitch - TT.pitch) * zT, kT.fov = TT.fov + (oT.fov - TT.fov) * zT, kT
    }
  },
  38138: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => eT,
      e: () => LT
    });
    var iT = IT(38136),
      zT = IT(38120);
    const kT = iT.k,
      WT = iT.r;

    function XT(TT, oT, IT, iT) {
      return Number.isFinite(TT) ? Math.min(IT, Math.max(oT, TT)) : iT
    }

    function BT(TT, oT, IT) {
      return void 0 !== TT && Number.isFinite(TT) ? Math.min(IT, Math.max(oT, TT)) : void 0
    }

    function FT(TT) {
      const oT = iT.o.maxCoordinate;
      return [Math.min(oT, Math.max(-oT, TT[0])), Math.min(oT, Math.max(-oT, TT[1])), Math.min(oT, Math.max(-oT, TT[2]))]
    }

    function ST(TT) {
      return "string" === typeof TT ? TT : (0, zT.o)(TT, 3) ? FT(TT) : void 0
    }
    const DT = new RegExp(iT.u);

    function LT(TT) {
      return "string" === typeof TT && DT.test(TT)
    }

    function xT(TT) {
      const oT = [];
      if (!Array.isArray(TT)) return oT;
      for (const IT of TT.slice(0, iT.o.maxFrameTargets)) {
        const TT = ST(IT);
        void 0 === TT || "string" === typeof TT && !LT(TT) || oT.push(TT)
      }
      return oT
    }

    function cT(TT) {
      if (!(0, zT.o)(TT, 3)) return;
      const oT = Math.max(Math.abs(TT[0]), Math.abs(TT[1]), Math.abs(TT[2])),
        IT = Math.hypot(TT[0] / oT, TT[1] / oT, TT[2] / oT);
      return 0 === oT || oT * IT < iT.o.minDirectionLength ? void 0 : [TT[0] / oT / IT, TT[1] / oT / IT, TT[2] / oT / IT]
    }

    function KT(TT) {
      if (void 0 !== TT) return "string" === typeof TT ? kT.includes(TT) ? TT : void 0 : (0, zT.o)(TT, 4) ? [XT(TT[0], 0, 1, 0), XT(TT[1], iT.o.minEasingY, iT.o.maxEasingY, 0), XT(TT[2], 0, 1, 1), XT(TT[3], iT.o.minEasingY, iT.o.maxEasingY, 1)] : "linear"
    }

    function MT(TT) {
      if (TT) return {
        maxYaw: XT(TT.maxYaw, 0, iT.o.maxPlayerLook, 0),
        maxPitch: XT(TT.maxPitch, 0, iT.o.maxPlayerLook, 0),
        returnMs: BT(TT.returnMs, 0, iT.o.maxReturnMs)
      }
    }
    const rT = new RegExp(iT.c);

    function AT(TT) {
      var oT;
      if ("object" !== typeof TT || null === TT) return;
      const IT = iT.o.maxTransitionMs,
        zT = iT.o.minTransitionFadeMs;
      return {
        colour: "string" === typeof TT.colour && rT.test(TT.colour) ? TT.colour : iT.g,
        outMs: XT(TT.outMs, zT, IT, zT),
        holdMs: XT(null !== (oT = TT.holdMs) && void 0 !== oT ? oT : 0, 0, IT, 0),
        inMs: XT(TT.inMs, zT, IT, zT)
      }
    }

    function gT(TT) {
      return !0 === TT || void 0
    }

    function hT(TT) {
      if ("object" !== typeof TT || null === TT) return !1;
      const oT = TT.lookAt;
      return Number.isFinite(TT.timeMs) && (0, zT.o)(TT.position, 3) && (void 0 === oT || "string" === typeof oT || (0, zT.o)(oT, 3))
    }

    function wT(TT) {
      return {
        ...TT,
        timeMs: XT(TT.timeMs, 0, iT.o.maxPathMs, 0),
        position: FT(TT.position),
        lookAt: ST(TT.lookAt),
        lookDirection: cT(TT.lookDirection),
        fov: BT(TT.fov, iT.o.minFov, iT.o.maxFov),
        easing: KT(TT.easing)
      }
    }

    function mT(TT) {
      const oT = [];
      if (!Array.isArray(TT)) return oT;
      for (const IT of TT.slice(0, iT.o.maxKeyframes)) {
        if (!hT(IT)) continue;
        const TT = wT(IT);
        (0 === oT.length || TT.timeMs > oT[oT.length - 1].timeMs) && oT.push(TT)
      }
      return oT
    }

    function eT(TT) {
      if ("object" !== typeof TT || null === TT) return {
        mode: "default"
      };
      const oT = {
          blendInMs: BT(TT.blendInMs, 0, iT.o.maxBlendInMs),
          blendEasing: KT(TT.blendEasing),
          transition: AT(TT.transition),
          letterbox: gT(TT.letterbox),
          hideHud: gT(TT.hideHud)
        },
        IT = {
          mode: "default",
          ...oT
        };
      if ("default" === TT.mode || "fixed" === TT.mode && !(0, zT.o)(TT.position, 3)) return IT;
      const kT = {
        ...oT,
        fov: BT(TT.fov, iT.o.minFov, iT.o.maxFov),
        playerFacing: (DT = TT.playerFacing, WT.includes(DT) ? DT : void 0),
        playerLook: MT(TT.playerLook)
      };
      var DT, LT;
      switch (TT.mode) {
        case "fixed":
          return {
            ...TT, ...kT, position: FT(TT.position), lookAt: ST(TT.lookAt), lookDirection: cT(TT.lookDirection)
          };
        case "follow":
          return {
            ...TT, ...kT, target: "string" === typeof TT.target ? TT.target : void 0, lookAt: ST(TT.lookAt), offset: (LT = TT.offset, Array.isArray(LT) ? [XT(LT[0], -iT.o.maxOffset, iT.o.maxOffset, 0), XT(LT[1], -iT.o.maxOffset, iT.o.maxOffset, 0), XT(LT[2], -iT.o.maxOffset, iT.o.maxOffset, 0)] : [0, 0, 0]), lookDirection: cT(TT.lookDirection), smoothMs: BT(TT.smoothMs, 0, iT.o.maxSmoothMs)
          };
        case "path":
          return {
            ...TT, ...kT, keyframes: mT(TT.keyframes)
          };
        case "frame":
          return {
            ...TT, ...kT, targets: xT(TT.targets), viewHeading: BT(TT.viewHeading, -iT.o.maxFrameHeading, iT.o.maxFrameHeading), viewElevation: BT(TT.viewElevation, 0, iT.o.maxFrameElevation), padding: BT(TT.padding, 0, iT.o.maxFrameDistance), closestDistance: BT(TT.closestDistance, 0, iT.o.maxFrameDistance), furthestDistance: BT(TT.furthestDistance, 0, iT.o.maxFrameDistance), smoothMs: BT(TT.smoothMs, 0, iT.o.maxSmoothMs)
          };
        default:
          return IT
      }
    }
  },
  37648: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT
    });
    var iT = IT(1193);

    function zT(TT) {
      const oT = /(\d*\.?\d+)px/.exec(TT);
      return oT ? Number(oT[1]) : null
    }

    function kT(TT) {
      return TT.split(/[\s,]+/).pop()
    }
    let WT = !1;
    const XT = {
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
      drawText: function(TT, oT, iT, XT, BT, FT) {
        if (BT <= 0 || FT <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: ST,
          fontVariant: DT,
          fontWeight: LT,
          fontSize: xT,
          font: cT
        } = this, KT = [ST, DT, LT, `${xT}px`, cT].filter(Boolean).join(" "), MT = [
          [LT, `${xT}px`, kT(cT)].filter(Boolean).join(" "), `${xT}px sans-serif`
        ], rT = TT.font, AT = function(TT, oT, IT) {
          for (const iT of oT) {
            TT.font = iT;
            const oT = zT(TT.font),
              WT = kT(iT);
            if (null !== oT && Math.abs(oT - IT) <= .5 && TT.font.toLowerCase().includes(WT.toLowerCase())) return iT
          }
          return null
        }(TT, [KT, ...MT], xT);
        AT !== KT && function(TT, oT, iT) {
          WT || (WT = !0, Promise.resolve().then((() => IT(1071))).then((IT => {
            let {
              JK: zT
            } = IT;
            zT(new Error("A canvas didn't take canvasTxt's font"), {
              font: TT,
              qx: oT,
              drawnWith: null !== iT && void 0 !== iT ? iT : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(KT, rT, AT);
        const gT = zT(TT.font);
        if (null === AT && null !== gT && gT > 0) {
          const IT = xT / gT;
          TT.save();
          try {
            return TT.scale(IT, IT), {
              height: this.drawLines(TT, oT, iT / IT, XT / IT, BT / IT, FT / IT, gT).height * IT
            }
          } finally {
            TT.restore()
          }
        }
        return this.drawLines(TT, oT, iT, XT, BT, FT, xT)
      },
      drawLines: function(TT, oT, IT, zT, kT, WT, XT) {
        const BT = IT + kT,
          FT = zT + WT;
        let ST, DT = zT + WT / 2 + XT / 2;
        "right" === this.align ? (ST = BT, TT.textAlign = "right") : "left" === this.align ? (ST = IT, TT.textAlign = "left") : (ST = IT + kT / 2, TT.textAlign = "center");
        for (const iT of oT) {
          TT.measureText(iT).width >= kT && (oT = oT.replace(iT, ""))
        }
        oT = (0, iT.U)(oT);
        const LT = [],
          xT = oT.split("\n"),
          cT = this.justify ? TT.measureText("\u200a").width : 0;
        xT.forEach((oT => {
          let IT = TT.measureText(oT).width;
          if (IT <= kT) LT.push(oT);
          else {
            let iT = oT;
            const zT = kT;
            let WT, XT, BT;
            for (IT = TT.measureText(iT).width; IT > zT;) {
              for (WT = 0, XT = 0, BT = ""; XT < zT;) WT++, BT = iT.substr(0, WT), XT = TT.measureText(BT).width;
              WT--, BT = BT.substr(0, WT);
              const oT = WT;
              if (" " !== iT.substr(WT, 1)) {
                for (;
                  " " !== iT.substr(WT, 1) && 0 !== WT;) WT--;
                0 === WT && (WT = oT), BT = iT.substr(0, WT)
              }
              BT = this.justify ? this.justifyLine(TT, BT, cT, "\u200a", kT) : BT, iT = iT.substr(WT), IT = TT.measureText(iT).width, LT.push(BT)
            }
            IT > 0 && LT.push(iT)
          }
        }));
        const KT = this.lineHeight ? this.lineHeight : this.getTextHeight(TT, oT),
          MT = KT * (LT.length - 1),
          rT = MT / 2;
        let AT = zT;
        "top" === this.vAlign ? DT = zT + XT : "bottom" === this.vAlign ? (DT = FT - MT, AT = FT) : (AT = zT + WT / 2, DT -= rT), LT.forEach((oT => {
          oT = oT.trim(), TT.fillText(oT, ST, DT), DT += KT
        })), this.debug && (TT.lineWidth = 3, TT.strokeStyle = "#00909e", TT.strokeRect(IT, zT, kT, WT), TT.lineWidth = 2, TT.strokeStyle = "#f6d743", TT.beginPath(), TT.moveTo(ST, zT), TT.lineTo(ST, FT), TT.stroke(), TT.strokeStyle = "#ff6363", TT.beginPath(), TT.moveTo(IT, AT), TT.lineTo(BT, AT), TT.stroke());
        return {
          height: MT + KT
        }
      },
      getTextHeight: function(TT, oT) {
        const IT = TT.textBaseline;
        TT.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: iT
        } = TT.measureText(oT);
        return TT.textBaseline = IT, iT
      },
      justifyLine: function(TT, oT, IT, iT, zT) {
        const kT = oT.trim(),
          WT = TT.measureText(kT).width,
          XT = kT.split(/\s+/).length - 1,
          BT = Math.floor((zT - WT) / IT);
        if (XT <= 0 || BT <= 0) return kT;
        const FT = Math.floor(BT / XT);
        let ST = BT - XT * FT,
          DT = [];
        for (let LT = 0; LT < FT; LT++) DT.push(iT);
        DT = DT.join("");
        return kT.replace(/\s+/g, (TT => {
          const oT = ST > 0 ? DT + iT : DT;
          return ST--, TT + oT
        }))
      }
    }
  },
  38080: (TT, oT, IT) => {
    function iT(TT, oT) {
      return oT.set(TT), oT
    }
    IT.d(oT, {
      c: () => iT
    })
  },
  37654: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => KT,
      f: () => cT,
      j: () => LT,
      m: () => ST,
      q: () => DT
    });
    var iT = IT(3811),
      zT = IT(314);
    const kT = 1024,
      WT = 1536,
      XT = 2 * iT.p + 1,
      BT = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      FT = 1.5;

    function ST(TT, oT, IT) {
      if ("string" !== typeof TT) return oT;
      try {
        const IT = JSON.parse(TT);
        return IT && "object" === typeof IT ? IT : oT
      } catch (iT) {
        return void 0 !== IT && console.error(`Couldn't parse ${IT}`, iT), oT
      }
    }

    function DT(TT) {
      return ST(TT, null, "a leaderboard's rows")
    }

    function LT(TT, oT) {
      var IT, iT;
      return null !== oT && void 0 !== oT ? oT : {
        status: null !== (IT = TT.status) && void 0 !== IT ? IT : "loading",
        entries: null !== (iT = TT.entries) && void 0 !== iT ? iT : []
      }
    }

    function xT(TT, oT) {
      return "number" === typeof TT && Number.isFinite(TT) && TT > 0 ? TT : oT
    }

    function cT(TT, oT) {
      const IT = xT(TT.size, 1);
      let iT = xT(TT.width, xT(2.5 * IT, 2.5)),
        zT = xT(TT.height, xT(3.75 * IT, 3.75));
      Number.isFinite(kT * zT / iT) && Number.isFinite(WT * iT / zT) || (iT = 2.5, zT = 3.75);
      const XT = zT / iT,
        BT = Math.max(1, Math.min(kT, oT / XT));
      return {
        width: iT,
        height: zT,
        layoutWidth: Math.max(kT, WT / XT),
        layoutHeight: Math.max(WT, kT * XT),
        pixelWidth: Math.round(BT),
        pixelHeight: Math.round(Math.max(1, Math.min(oT, BT * XT)))
      }
    }

    function KT(TT, oT, IT, WT, ST, DT) {
      TT.setTransform(1, 0, 0, 1, 0, 0), TT.fillStyle = zT.L.defaultNameTagBackground, TT.fillRect(0, 0, oT, IT), TT.scale(oT / WT.layoutWidth, IT / WT.layoutHeight), TT.translate((WT.layoutWidth - kT) / 2, 0),
        function(TT, oT, IT, kT) {
          var WT, ST, DT, LT;
          const {
            top: xT,
            around: cT,
            showPlayerText: KT,
            localPlayerDbId: AT
          } = IT, {
            whiteUiText: gT,
            grayUiText: hT,
            yellowUiText: wT
          } = zT.L;
          TT.textBaseline = "middle";
          const mT = function(oT, IT, iT, zT, kT, WT) {
              let XT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              TT.font = `bold ${zT}px 'Jetbrains Mono', monospace`, TT.fillStyle = kT, TT.textAlign = XT;
              let BT = oT.replace(/[\r\n\t]/g, " ");
              if (TT.measureText(BT).width > WT) {
                for (; BT.length > 0 && TT.measureText(`${BT}\u2026`).width > WT;) BT = BT.slice(0, -1);
                BT += "\u2026"
              }
              TT.fillText(BT, IT, iT)
            },
            eT = oT => {
              TT.fillStyle = gT, TT.globalAlpha = .15, TT.fillRect(24, oT, 976, 2), TT.globalAlpha = 1
            },
            RT = null === AT ? null : (0, zT._b)(AT),
            uT = TT => null !== RT && TT.playerHash === RT,
            vT = MT(xT.entries, iT.q),
            ET = "ready" === xT.status && vT.length > 0,
            fT = null === cT ? [] : MT(cT.entries, XT),
            CT = vT.some(uT),
            jT = null === cT ? null : function(TT) {
              const oT = TT;
              if (!oT || !Number.isFinite(oT.rank) || !Number.isFinite(oT.tied) || !Number.isFinite(oT.total)) return null;
              return oT
            }(cT.standing),
            JT = fT.find(uT),
            UT = vT.find(uT),
            aT = null === jT || void 0 === JT ? null : {
              value: JT.value,
              rank: jT.rank
            },
            YT = rT(vT, void 0 === UT || UT.value === (null === aT || void 0 === aT ? void 0 : aT.value) ? aT : null),
            QT = rT(fT, aT),
            OT = (TT, oT) => {
              const IT = TT.findIndex(uT);
              return IT >= 0 ? oT[IT] : null
            },
            HT = null !== (WT = null !== (ST = null === jT || void 0 === jT ? void 0 : jT.rank) && void 0 !== ST ? ST : OT(fT, QT)) && void 0 !== WT ? WT : OT(vT, YT);
          TT.font = "bold 34px 'Jetbrains Mono', monospace";
          const nT = [...ET ? YT : [], ...CT ? [] : QT],
            qT = Math.min(280, Math.max(0, ...nT.map((oT => TT.measureText(BT.format(oT)).width)))),
            ZT = qT <= 80,
            lT = ZT ? 80 : 32 + qT,
            sT = ZT ? 148 : lT + 28,
            tT = 660 - sT;
          mT(`TOP ${iT.q}  /  ALL TIME`, 24, 52, 28, hT, 976), mT(KT ? String(null !== (DT = oT.title) && void 0 !== DT ? DT : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, gT, 976), mT("RANK", 32, 174, 28, hT, sT - 40), mT("PLAYER", sT, 174, 28, hT, tT), mT(KT ? String(null !== (LT = oT.scoreLabel) && void 0 !== LT ? LT : "Score").slice(0, 24) : "Score", 992, 174, 28, hT, 304, "right"), eT(202);
          const GT = (kT - 232) / (iT.q + FT + XT),
            pT = 208 + iT.q * GT,
            bT = pT + FT * GT,
            yT = (oT, IT, iT, zT) => {
              const kT = uT(oT);
              TT.fillStyle = kT ? wT : gT, TT.globalAlpha = kT ? .15 : zT ? .035 : 0, TT.fillRect(24, iT - GT / 2 + 1, 976, GT - 2), TT.globalAlpha = 1;
              const WT = kT ? wT : gT;
              mT(BT.format(IT), lT, iT, 34, WT, ZT ? 80 : qT, ZT ? "center" : "right"), mT(KT ? String(oT.name).slice(0, 64) : "Player", sT, iT, 34, WT, tT);
              const XT = BT.format(oT.value);
              mT(TT.measureText(XT).width > 304 ? oT.value.toExponential(6) : XT, 992, iT, 34, WT, 304, "right")
            };
          if (ET)
            for (const [iT, zT] of vT.entries()) yT(zT, YT[iT], 208 + (iT + .5) * GT, iT % 2 === 0);
          else {
            const TT = "error" === xT.status,
              oT = TT ? "Couldn't load leaderboard" : "ready" === xT.status ? "No scores yet" : "Loading leaderboard\u2026",
              IT = TT ? "Trying again shortly" : "ready" === xT.status ? "Be the first on the board!" : "Fetching the top players",
              iT = (208 + pT) / 2;
            mT(oT, 512, iT - 28, 40, TT ? zT.L.redUiText : gT, 960, "center"), mT(IT, 512, iT + 27, 30, hT, 960, "center")
          }
          const NT = pT + FT * GT / 2;
          if (null === HT) eT(NT);
          else {
            const oT = null === jT ? 0 : jT.tied - 1,
              IT = `YOUR RANK #${BT.format(HT)}${null===jT?"":` of ${BT.format(jT.total)}`}`;
            TT.font = "bold 36px 'Jetbrains Mono', monospace";
            const iT = Math.max(20, Math.min(36, Math.floor(34560 / TT.measureText(IT).width)));
            mT(IT, 512, NT - (oT > 0 ? 15 : 0), iT, wT, 960, "center"), oT > 0 && mT(`Tied with ${BT.format(oT)} other${1===oT?"":"s"}`, 512, NT + 24, 24, hT, 960, "center")
          }
          if (null === cT) return;
          const PT = bT + XT * GT / 2;
          if (CT) mT(`You're in the top ${iT.q}!`, 512, PT, 40, wT, 960, "center");
          else if (0 === fT.length) mT("You're not on this board yet", 512, PT, 34, hT, 960, "center");
          else
            for (const [iT, zT] of fT.entries()) yT(zT, QT[iT], bT + (iT + .5) * GT, iT % 2 === 0)
        }(TT, ST, DT, WT.layoutHeight)
    }

    function MT(TT, oT) {
      return Array.isArray(TT) ? TT.slice(0, oT).filter((TT => TT && Number.isFinite(TT.rank) && Number.isFinite(TT.value))) : []
    }

    function rT(TT, oT) {
      const IT = [];
      let iT = !1;
      return TT.forEach(((zT, kT) => {
        if (null !== oT && zT.value === oT.value) return void IT.push(oT.rank);
        const WT = kT > 0 && zT.value === TT[kT - 1].value;
        WT || (iT = 0 === kT && 1 !== zT.rank), IT.push(WT && !iT ? IT[kT - 1] : zT.rank)
      })), IT
    }
  },
  37844: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      e: () => kT
    });
    const iT = 32;

    function zT(TT) {
      return Array.from(TT).length
    }

    function kT(TT) {
      const oT = [""];
      let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zT = "";
      const kT = () => {
        oT.push(""), IT = 0, zT = ""
      };
      for (const WT of TT.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(WT)) kT();
        else if (/^\s+$/.test(WT)) zT += WT;
      else if (WT.length > 0) {
        const TT = Array.from(WT);
        IT > 0 && IT + zT.length + TT.length > iT && kT(), oT[oT.length - 1] += zT, IT += zT.length, zT = "";
        for (const zT of TT) IT >= iT && kT(), oT[oT.length - 1] += zT, IT++
      }
      return oT[oT.length - 1] += zT, oT
    }
  },
  38071: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT
    });
    var iT = IT(35636),
      zT = IT.n(iT);
    const kT = [1, 1, 1];

    function WT(TT) {
      if (!TT) return [...kT];
      try {
        const [oT, IT, iT] = zT()(TT).rgb().array();
        return [oT / 255, IT / 255, iT / 255]
      } catch (oT) {
        return console.warn(`Invalid groundArrowPath colour "${TT}":`, oT), [...kT]
      }
    }
  },
  33283: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      g: () => XT,
      h: () => WT,
      k: () => zT,
      m: () => iT
    });
    const iT = {
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
      kT = "/textures/dayNight/moon.png",
      WT = "/textures/dayNight/stars",
      XT = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38136: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      g: () => DT,
      k: () => iT,
      o: () => BT,
      r: () => zT,
      u: () => FT,
      x: () => XT,
      y: () => WT
    });
    const iT = ["linear", "easeIn", "easeOut", "easeInOut"],
      zT = ["movement", "camera", "cursor"],
      kT = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function WT(TT, oT) {
      return XT(TT, oT, kT)
    }

    function XT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (TT === oT || Number.isNaN(TT) && Number.isNaN(oT)) return !0;
      if ("object" !== typeof TT || "object" !== typeof oT || null === TT || null === oT || Array.isArray(TT) !== Array.isArray(oT)) return !1;
      const iT = TT,
        zT = oT;
      for (const kT of new Set([...Object.keys(iT), ...Object.keys(zT)]))
        if (!IT.includes(kT) && !XT(iT[kT], zT[kT])) return !1;
      return !0
    }
    const BT = {
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
      FT = "^-[1-9][0-9]*$",
      ST = "^#[0-9a-fA-F]{6}$",
      DT = "#000000"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);