export const id = 191;
export const ids = [191];
export const modules = {
  39148: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      constructor(SS, HS) {
        this.read = SS, this.apply = HS, this.release = null
      }
      turn(SS, HS) {
        const gS = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: HS,
          forcedCameraDirection: [SS[0], SS[1], SS[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), HS + 100),
          transitionMs: gS
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(SS) {
        null !== this.release && (clearTimeout(this.release.timer), SS && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38659: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS,
      d: () => bS
    });
    const tS = new Map;

    function bS(SS, HS) {
      tS.set(SS, HS)
    }

    function XS(SS) {
      return SS ? tS.get(SS) : void 0
    }
  },
  39655: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS
    });
    var tS = gS(38242);

    function bS(SS, HS, gS) {
      var bS, XS, xS, NS, qS, uS, IS;
      const fS = (0, tS.b)(SS, HS, gS[0], gS[1], gS[2]),
        kS = fS ? null !== (bS = fS.textCell) && void 0 !== bS ? bS : fS.rect.anchor : gS,
        aS = HS(kS[0], kS[1], kS[2]);
      return {
        pos: [gS[0], gS[1], gS[2]],
        noticeboardSpan: fS && {
          width: fS.rect.width,
          height: fS.rect.height
        },
        text: null !== (XS = null === aS || void 0 === aS || null === (xS = aS.persisted) || void 0 === xS || null === (NS = xS.shared) || void 0 === NS ? void 0 : NS.text) && void 0 !== XS ? XS : "",
        textSize: null !== (qS = null === aS || void 0 === aS || null === (uS = aS.persisted) || void 0 === uS || null === (IS = uS.shared) || void 0 === IS ? void 0 : IS.textSize) && void 0 !== qS ? qS : null
      }
    }
  },
  38526: (SS, HS, gS) => {
    function tS(SS) {
      switch (SS.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    gS.d(HS, {
      b: () => bS,
      f: () => XS,
      g: () => tS
    });
    const bS = 4,
      XS = 3
  },
  39166: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      i: () => XS
    });
    var tS = gS(387);
    const bS = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class XS {
      constructor(SS) {
        this.importGame = SS, this.loads = new Map, this.loaded = new Map
      }
      load(SS) {
        const HS = (0, tS.Kb)(SS);
        if (!bS.has(HS)) return Promise.resolve(void 0);
        let gS = this.loads.get(HS);
        return gS || (gS = this.importGame(HS).then((SS => {
          const gS = SS.default;
          if ("function" !== typeof gS) throw new Error(`${HS}'s client code has no default-exported factory`);
          return this.loaded.set(HS, gS), gS
        })).catch((SS => {
          throw this.loads.delete(HS), SS
        })), this.loads.set(HS, gS)), gS
      }
      loadedFactory(SS) {
        const HS = (0, tS.Kb)(SS);
        if (!bS.has(HS)) return;
        const gS = this.loaded.get(HS);
        if (!gS) throw new Error(`${HS}'s client code started before it loaded`);
        return gS
      }
    }
  },
  39664: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(9465),
      bS = gS(34248),
      XS = gS(3437);

    function xS(SS) {
      if (SS === tS.c) return 0;
      const HS = (0, XS.d)(SS);
      if (void 0 !== HS && HS <= bS.MAX_BLOCK_ID) return HS;
      const gS = (0, XS.d)(SS.split("|")[0]);
      if (void 0 !== gS && gS <= bS.MAX_BLOCK_ID && (0, bS.rootMetaDescOf)(gS) === SS) return gS;
      throw new Error(`Invalid block name. You sent ${SS}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39219: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS
    });
    var tS = gS(24);
    class bS {
      constructor(SS) {
        this.screen = SS, this.hidesHud = !1
      }
      show(SS, HS) {
        this.screen.setFade(SS.colour, SS.alpha), this.screen.setLetterbox(!0 === HS.letterbox, SS.alpha < 1), this.setHudHidden(!0 === HS.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(SS) {
        this.hidesHud !== SS && (this.hidesHud = SS, tS.b.set({
          isUiHiddenByCamera: SS
        }))
      }
    }
  },
  39185: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS,
      c: () => kS,
      d: () => fS,
      f: () => xS,
      j: () => KS,
      m: () => qS,
      o: () => jS,
      s: () => uS,
      u: () => NS,
      w: () => IS
    });
    const tS = Math.PI / 2 - .001,
      bS = 2 * Math.PI,
      XS = 1e-9;

    function xS(SS, HS) {
      HS.heading = SS.heading, HS.pitch = SS.pitch
    }

    function NS(SS, HS) {
      const gS = HS - SS;
      return gS - bS * Math.floor((gS + Math.PI) / bS)
    }

    function qS(SS, HS, gS) {
      return SS + NS(SS, HS) * gS
    }

    function uS(SS) {
      if (!Number.isFinite(SS)) return SS;
      const HS = SS - bS * Math.floor(SS / bS);
      return HS < bS ? HS : 0
    }

    function IS(SS, HS) {
      return SS + NS(SS, HS)
    }

    function fS(SS) {
      return Math.max(-tS, Math.min(tS, SS))
    }

    function kS(SS, HS, gS) {
      const tS = Math.cos(HS);
      return gS[0] = tS * Math.sin(SS), gS[1] = -Math.sin(HS), gS[2] = tS * Math.cos(SS), gS
    }

    function aS(SS, HS, gS, tS) {
      const bS = Math.sqrt(SS * SS + gS * gS);
      return bS < XS && Math.abs(HS) < XS || (bS >= XS && (tS.heading = Math.atan2(SS, gS)), tS.pitch = fS(Math.atan2(-HS, bS) + 0)), tS
    }

    function KS(SS, HS) {
      return aS(SS[0], SS[1], SS[2], HS)
    }

    function jS(SS, HS, gS) {
      return aS(HS[0] - SS[0], HS[1] - SS[1], HS[2] - SS[2], gS)
    }
  },
  39210: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      f: () => bS
    });
    var tS = gS(39185);

    function bS(SS) {
      var HS;
      const gS = "default" === SS.mode ? "movement" : null !== (HS = SS.playerFacing) && void 0 !== HS ? HS : "movement";
      return "cursor" === gS ? {
        facing: gS,
        mouseTurns: null
      } : {
        facing: gS,
        mouseTurns: "default" !== SS.mode && void 0 !== SS.playerLook ? "look" : "view"
      }
    }

    function XS(SS, HS, gS, bS, XS, xS) {
      return xS.tL = 0, xS.qL = 0, xS.pointedAt = void 0, void 0 !== bS ? XS ? (xS.pointedAt = bS, SS) : (0, tS.s)(bS.heading) : XS ? (xS.tL = HS, xS.qL = gS, SS) : (0, tS.s)(SS + HS)
    }
  },
  39193: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => sS
    });
    var tS = gS(39198),
      bS = gS(39185),
      XS = gS(37021);

    function xS(SS, HS, gS, tS) {
      if (!(tS > 0)) return HS;
      const bS = HS > SS ? Math.min(HS, SS + gS / tS) : Math.max(HS, SS - gS / tS);
      return Math.abs(HS - bS) < 1e-9 ? HS : bS
    }
    class NS {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: tS.i,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(SS) {
        !this.isGoingOut() && this.sinceTurnMs < tS.q.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: SS
        } : (this.waiting = null, this.startOut(SS))
      }
      fadeIn(SS) {
        this.isGoingOut() ? this.sinceTurnMs < tS.q.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: SS
        } : (this.waiting = null, this.startIn(SS)) : this.waiting = null
      }
      advance(SS) {
        const HS = this.waiting;
        if (null === HS) return this.step(SS);
        const gS = tS.q.minFadeTurnMs - this.sinceTurnMs;
        if (gS > SS) return this.step(SS);
        const bS = this.step(gS);
        return this.waiting = null, "out" === HS.turn ? this.startOut(HS.transition) : this.startIn(HS.minMs), this.step(SS - gS) || bS
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(SS) {
        ("in" === this.phase || null === this.phase && this.clearMs < tS.q.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = SS.colour), this.outMs = SS.outMs, this.holdMs = SS.holdMs, this.inMs = SS.inMs
      }
      startIn(SS) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(SS, this.inMs)
      }
      step(SS) {
        const HS = this.screen;
        this.sinceTurnMs += SS, null === this.phase && (this.clearMs += SS);
        let gS = !1,
          bS = SS;
        if ("out" === this.phase) {
          const tS = (1 - HS.alpha) * this.outMs;
          if (HS.alpha = xS(HS.alpha, 1, SS, this.outMs), HS.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, bS = Math.max(0, SS - tS), gS = !0
        }
        let XS = SS;
        if ("hold" === this.phase) {
          this.heldMs += bS;
          const SS = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - tS.q.minFadeTurnMs);
          if (SS < 0 || gS) return gS;
          this.phase = "in", this.sinceTurnMs = SS, XS = SS
        }
        return "in" === this.phase && (HS.alpha = xS(HS.alpha, 0, XS, this.inMs), HS.alpha <= 0 && (this.phase = null, this.clearMs = 0)), gS
      }
    }
    var qS = gS(39178),
      uS = gS(39202),
      IS = gS(2022),
      fS = gS(36591);

    function kS(SS, HS) {
      for (let gS = 0; gS < HS.length; gS++) HS[gS] = SS[gS]
    }

    function aS(SS, HS) {
      var gS;
      return null !== (gS = SS.fov) && void 0 !== gS ? gS : HS.getDefaultFov()
    }

    function KS(SS, HS, gS, tS, bS) {
      const XS = 2 / tS,
        xS = Math.exp(-XS * bS);
      for (let NS = 0; NS < SS.length; NS++) {
        const tS = SS[NS] - gS[NS],
          qS = (HS[NS] + XS * tS) * bS;
        SS[NS] = gS[NS] + (tS + qS) * xS, HS[NS] = (HS[NS] - XS * qS) * xS
      }
    }
    class jS {
      constructor(SS, HS, gS, tS) {
        var XS, xS, NS, qS, uS;
        this.settings = SS, this.gk = HS, this.targets = gS, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.xG = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, bS.s)((0, IS.m)(null !== (XS = SS.viewHeading) && void 0 !== XS ? XS : 0)),
          pitch: (0, bS.d)((0, IS.m)(null !== (xS = SS.viewElevation) && void 0 !== xS ? xS : 45))
        }, this.closestDistance = null !== (NS = SS.closestDistance) && void 0 !== NS ? NS : Math.min(6, null !== (qS = SS.furthestDistance) && void 0 !== qS ? qS : 1 / 0), this.furthestDistance = null !== (uS = SS.furthestDistance) && void 0 !== uS ? uS : Math.max(64, this.closestDistance);
        const fS = (0, bS.c)(this.base.heading, this.base.pitch, this.forward),
          kS = tS.position,
          aS = this.closestDistance;
        this.goal = [kS[0] + fS[0] * aS, kS[1] + fS[1] * aS, kS[2] + fS[2] * aS, aS, this.base.heading, this.base.pitch]
      }
      update(SS, HS, gS) {
        var tS, XS;
        this.placeGoal(null !== (tS = this.settings.fov) && void 0 !== tS ? tS : this.gk.getBaseFov()), this.goal[4] = (0, bS.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const xS = null !== (XS = this.settings.smoothMs) && void 0 !== XS ? XS : 400;
        !this.started || xS < 1 ? (kS(this.goal, this.smoothed), this.xG.fill(0), this.started = !0) : KS(this.smoothed, this.xG, this.goal, xS, SS), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, bS.d)(this.smoothed[5]), HS.apply(this.angles, gS);
        const NS = (0, bS.c)(gS.heading, gS.pitch, this.forward);
        for (let bS = 0; bS < 3; bS++) gS.position[bS] = this.smoothed[bS] - NS[bS] * this.smoothed[3];
        gS.fov = aS(this.settings, this.gk)
      }
      continueFrom(SS) {
        SS instanceof jS && (kS(SS.goal, this.goal), kS(SS.smoothed, this.smoothed), kS(SS.xG, this.xG), this.framedTargets = SS.framedTargets, this.started = SS.started)
      }
      reset() {
        this.xG.fill(0), this.started = !1
      }
      placeGoal(SS) {
        var HS;
        let gS = 0;
        for (const IS of this.settings.targets) {
          const SS = this.targets.currentAimPoint(IS);
          SS && (0, qS.j)(SS, this.pointAt(gS++))
        }
        if (gS > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const SS = this.targets.aimPoint(this.gk.localPlayerId);
          SS && (0, qS.j)(SS, this.pointAt(gS++))
        }
        const tS = this.goal;
        if (0 === gS) return void(tS[3] = this.withinDistances(tS[3]));
        for (let qS = 0; qS < 3; qS++) {
          let SS = 1 / 0,
            HS = -1 / 0;
          for (let tS = 0; tS < gS; tS++) SS = Math.min(SS, this.points[tS][qS]), HS = Math.max(HS, this.points[tS][qS]);
          tS[qS] = (SS + HS) / 2
        }
        let bS = 0;
        for (let qS = 0; qS < gS; qS++) {
          const SS = this.points[qS];
          bS = Math.max(bS, Math.hypot(SS[0] - tS[0], SS[1] - tS[1], SS[2] - tS[2]))
        }
        const XS = Math.tan((0, IS.m)(SS) / 2),
          xS = Math.atan(XS * (!0 === this.settings.letterbox ? fS.e : 1)),
          NS = Math.atan(XS * this.gk.getAspectRatio()),
          uS = (bS + (null !== (HS = this.settings.padding) && void 0 !== HS ? HS : 2)) / Math.sin(Math.min(xS, NS));
        tS[3] = this.withinDistances(uS)
      }
      withinDistances(SS) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, SS))
      }
      pointAt(SS) {
        return SS === this.points.length && this.points.push([0, 0, 0]), this.points[SS]
      }
    }
    class GS {
      constructor(SS) {
        this.limits = SS, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(SS) {
        this.limits && (this.yawOffset = SS.yawOffset, this.pitchOffset = SS.pitchOffset, this.idleMs = SS.idleMs)
      }
      update(SS, HS) {
        const gS = this.limits;
        if (!gS) return;
        const tS = Number.isFinite(HS.tL) ? HS.tL : 0,
          bS = Number.isFinite(HS.qL) ? HS.qL : 0;
        if (HS.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: HS.pointedAt.heading,
          pitch: HS.pointedAt.pitch
        };
        else if (0 !== tS || 0 !== bS) this.idleMs = 0, this.yawOffset += tS, this.pitchOffset += bS;
        else {
          const HS = Math.max(0, this.idleMs + SS - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += SS, void 0 !== gS.returnMs && HS > 0) {
            const SS = gS.returnMs > 0 ? Math.exp(-3 * HS / gS.returnMs) : 0;
            this.yawOffset *= SS, this.pitchOffset *= SS
          }
        }
        this.clampOffsets(gS)
      }
      clampOffsets(SS) {
        if (SS.maxYaw >= 180) this.yawOffset = (0, bS.u)(0, this.yawOffset);
        else {
          const HS = (0, IS.m)(SS.maxYaw);
          this.yawOffset = Math.max(-HS, Math.min(HS, this.yawOffset))
        }
        const HS = (0, IS.m)(SS.maxPitch);
        this.pitchOffset = Math.max(-HS, Math.min(HS, this.pitchOffset))
      }
      apply(SS, HS) {
        this.pointedAt && this.limits && (this.yawOffset = (0, bS.u)(SS.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - SS.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const gS = (0, bS.d)(SS.pitch + this.pitchOffset);
        this.pitchOffset = gS - SS.pitch, HS.heading = (0, bS.s)(SS.heading + this.yawOffset), HS.pitch = gS
      }
      unapply(SS, HS) {
        HS.heading = (0, bS.s)(SS.heading - this.yawOffset), HS.pitch = (0, bS.d)(SS.pitch - this.pitchOffset)
      }
    }
    const CS = 1e-6;

    function nS(SS) {
      return Math.sqrt(SS[0] * SS[0] + SS[1] * SS[1] + SS[2] * SS[2])
    }

    function PS(SS, HS, gS, tS, bS) {
      const XS = bS * bS,
        xS = XS * bS;
      return (2 * xS - 3 * XS + 1) * SS + (xS - 2 * XS + bS) * HS + (-2 * xS + 3 * XS) * gS + (xS - XS) * tS
    }

    function QS(SS, HS, gS, tS, bS) {
      const XS = bS * bS;
      return (6 * XS - 6 * bS) * SS + (3 * XS - 4 * bS + 1) * HS + (-6 * XS + 6 * bS) * gS + (3 * XS - 2 * bS) * tS
    }

    function DS(SS, HS) {
      const gS = HS[0] - SS[0],
        tS = HS[1] - SS[1],
        bS = HS[2] - SS[2];
      return Math.sqrt(gS * gS + tS * tS + bS * bS)
    }

    function wS(SS, HS, gS, tS, bS, XS) {
      for (let xS = 0; xS < 3; xS++) XS[xS] = bS ? SS[xS] * tS : gS[xS] - HS[xS];
      return bS && function(SS, HS) {
        const gS = nS(SS);
        if (gS > HS) {
          const tS = HS / gS;
          SS[0] *= tS, SS[1] *= tS, SS[2] *= tS
        }
      }(XS, 3 * DS(HS, gS)), XS
    }

    function hS(SS, HS, gS, tS) {
      for (let bS = 0; bS < 3; bS++) tS[bS] = 6 * (HS[bS] - SS[bS]) - 2 * gS[bS];
      if (nS(tS) < CS)
        for (let bS = 0; bS < 3; bS++) tS[bS] = HS[bS] - SS[bS];
      return tS
    }

    function ZS(SS, HS) {
      return [2 * HS[0] - SS[0], 2 * HS[1] - SS[1], 2 * HS[2] - SS[2]]
    }

    function JS(SS, HS, gS, tS, bS, XS, xS) {
      if (!XS && !xS) return 0;
      const NS = XS ? SS : 2 * HS - gS,
        qS = xS ? gS : 2 * HS - SS,
        uS = XS ? tS : bS,
        IS = xS ? bS : tS,
        fS = (HS - NS) / uS,
        kS = (qS - HS) / IS;
      if (fS * kS <= 0) return 0;
      const aS = (qS - NS) / (uS + IS),
        KS = 3 * Math.min(Math.abs(fS), Math.abs(kS));
      return Math.max(-KS, Math.min(KS, aS))
    }

    function OS(SS, HS, gS, tS, bS, XS, xS) {
      const {
        u: NS,
        segmentMs: qS
      } = SS;
      if (!SS.curved) return gS + (tS - gS) * NS;
      return PS(gS, JS(HS, gS, tS, SS.beforeMs, qS, XS, !0) * qS, tS, JS(gS, tS, bS, qS, SS.afterMs, !0, xS) * qS, NS)
    }

    function dS(SS) {
      return Math.abs(SS.pitch) >= bS.b
    }
    class cS {
      constructor(SS, HS, gS, tS, bS) {
        this.nodes = SS, this.prevNodes = gS, this.nextNodes = tS, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = SS.map(((SS, gS) => this.nodeTangent(HS, bS, gS)))
      }
      sample(SS, HS, gS) {
        const {
          index: tS,
          toIndex: XS,
          segmentMs: xS,
          curved: NS
        } = SS, qS = this.fromAngles, uS = this.toAngles, IS = this.nodeAngles(tS, gS.position, HS, qS), fS = this.nodeAngles(XS, gS.position, HS, uS);
        if (xS > 0 && "aim" !== IS && "aim" !== fS && this.liveTangent(SS, qS)) return gS.heading = (0, bS.s)(qS.heading), void(gS.pitch = qS.pitch);
        if ("none" === IS && "none" === fS) return;
        !NS && xS > 0 && ("tangent" === IS && this.liveTangent(SS, qS), "tangent" === fS && this.liveTangent(SS, uS)), "none" === IS ? (0, bS.f)(uS, qS) : "none" === fS && (0, bS.f)(qS, uS);
        const kS = NS && SS.beforeIndex >= 0 && "none" !== this.nodeAngles(SS.beforeIndex, gS.position, HS, this.beforeAngles),
          aS = NS && SS.afterIndex >= 0 && "none" !== this.nodeAngles(SS.afterIndex, gS.position, HS, this.afterAngles),
          KS = (0, bS.w)(qS.heading, uS.heading),
          jS = OS(SS, kS ? (0, bS.w)(qS.heading, this.beforeAngles.heading) : 0, qS.heading, KS, aS ? (0, bS.w)(KS, this.afterAngles.heading) : 0, kS, aS);
        gS.heading = (0, bS.s)(jS), gS.pitch = (0, bS.d)(OS(SS, this.beforeAngles.pitch, qS.pitch, uS.pitch, this.afterAngles.pitch, kS, aS))
      }
      nodeAngles(SS, HS, gS, tS) {
        const bS = this.rawNodeAngles(SS, HS, gS, tS);
        return "none" !== bS && dS(tS) && !this.borrowHeading(this.prevNodes[SS], HS, gS, tS) && this.borrowHeading(this.nextNodes[SS], HS, gS, tS), bS
      }
      borrowHeading(SS, HS, gS, tS) {
        const bS = this.borrowedAngles;
        return !(SS < 0 || "none" === this.rawNodeAngles(SS, HS, gS, bS) || dS(bS)) && (tS.heading = bS.heading, !0)
      }
      rawNodeAngles(SS, HS, gS, tS) {
        const XS = this.nodes[SS].keyframe;
        if (XS.lookDirection) return (0, bS.j)(XS.lookDirection, tS), "aim";
        if (void 0 !== XS.lookAt) {
          const SS = gS(XS.lookAt);
          if (SS) return (0, bS.o)(HS, SS, tS), "aim"
        }
        const xS = this.tangents[SS];
        return xS ? ((0, bS.f)(xS, tS), "tangent") : "none"
      }
      liveTangent(SS, HS) {
        const gS = this.nodes[SS.index].position,
          tS = this.nodes[SS.toIndex].position,
          XS = this.derivative;
        for (let bS = 0; bS < 3; bS++) XS[bS] = QS(gS[bS], SS.fromTangent[bS], tS[bS], SS.toTangent[bS], SS.u);
        return nS(XS) > 1e-9 ? ((0, bS.j)(XS, HS), !0) : !(DS(gS, tS) < CS) && ((0, bS.j)(hS(gS, tS, SS.u < .5 ? SS.toTangent : SS.fromTangent, XS), HS), !0)
      }
      nodeTangent(SS, HS, gS) {
        var tS;
        const XS = SS[gS];
        if (nS(XS) > 1e-9) return (0, bS.j)(XS, {
          heading: 0,
          pitch: 0
        });
        const xS = null !== (tS = this.restDirectionTo(gS, gS + 1, SS, HS)) && void 0 !== tS ? tS : this.restDirectionTo(gS, gS - 1, SS, HS);
        return xS ? (0, bS.j)(xS, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(SS, HS, gS, tS) {
        const bS = this.nodes[SS],
          XS = this.nodes[HS];
        if (!XS || DS(bS.position, XS.position) < CS) return null;
        const [xS, NS] = HS > SS ? [bS, XS] : [XS, bS], qS = wS(gS[HS], xS.position, NS.position, NS.timeMs - xS.timeMs, tS, [0, 0, 0]);
        return hS(xS.position, NS.position, qS, [0, 0, 0])
      }
    }

    function vS(SS, HS) {
      const gS = SS.lookDirection || HS.lookDirection ? function(SS, HS) {
        if (!SS || !HS) return SS === HS;
        const gS = nS(SS),
          tS = nS(HS);
        return Math.hypot(SS[0] / gS - HS[0] / tS, SS[1] / gS - HS[1] / tS, SS[2] / gS - HS[2] / tS) < CS
      }(SS.lookDirection, HS.lookDirection) : (tS = SS.lookAt, bS = HS.lookAt, "object" !== typeof tS || "object" !== typeof bS ? tS === bS : DS(tS, bS) < CS);
      var tS, bS;
      return DS(SS.position, HS.position) < CS && SS.fov === HS.fov && gS
    }
    class ES {
      constructor(SS, HS, gS) {
        if (this.smooth = HS, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === SS.length) throw new Error("A camera path needs at least one keyframe");
        for (let XS = 1; XS < SS.length; XS++)
          if (!(SS[XS].timeMs > SS[XS - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = SS.map((SS => {
          var HS;
          return {
            timeMs: SS.timeMs,
            position: [...SS.position],
            keyframe: SS,
            easing: (0, XS.r)(null !== (HS = SS.easing) && void 0 !== HS ? HS : "linear")
          }
        }));
        const tS = this.nodes[0],
          bS = this.nodes[this.nodes.length - 1],
          xS = gS && this.nodes.length > 1;
        xS && !vS(tS.keyframe, bS.keyframe) && this.nodes.push({
          ...tS,
          timeMs: bS.timeMs + (bS.timeMs - tS.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = xS ? this.nodes[this.nodes.length - 1].timeMs - tS.timeMs : 0, this.prevNodes = this.nodes.map(((SS, HS) => this.neighbour(HS, -1))), this.nextNodes = this.nodes.map(((SS, HS) => this.neighbour(HS, 1))), this.prevGaps = this.prevNodes.map(((SS, HS) => SS >= 0 ? this.gapMs(HS, -1) : 0)), this.nextGaps = this.nextNodes.map(((SS, HS) => SS >= 0 ? this.gapMs(HS, 1) : 0)), this.velocities = this.nodes.map(((SS, HS) => {
          const gS = this.prevNodes[HS],
            tS = this.nextNodes[HS];
          return function(SS, HS, gS, tS, bS, XS) {
            if (XS[0] = 0, XS[1] = 0, XS[2] = 0, !SS && !gS) return XS;
            const xS = null !== SS && void 0 !== SS ? SS : ZS(null !== gS && void 0 !== gS ? gS : HS, HS),
              NS = null !== gS && void 0 !== gS ? gS : ZS(null !== SS && void 0 !== SS ? SS : HS, HS),
              qS = SS ? tS : bS,
              uS = gS ? bS : tS,
              IS = DS(xS, HS),
              fS = DS(HS, NS);
            if (IS < CS || fS < CS) return XS;
            const kS = Math.sqrt(IS),
              aS = Math.sqrt(fS),
              KS = (kS + aS) / (qS + uS);
            for (let jS = 0; jS < 3; jS++) {
              const SS = (HS[jS] - xS[jS]) / kS - (NS[jS] - xS[jS]) / (kS + aS) + (NS[jS] - HS[jS]) / aS;
              XS[jS] = SS * KS
            }
            return XS
          }(gS >= 0 ? this.nodes[gS].position : null, SS.position, tS >= 0 ? this.nodes[tS].position : null, this.prevGaps[HS], this.nextGaps[HS], [0, 0, 0])
        })), this.aim = new cS(this.nodes, this.velocities, this.prevNodes, this.nextNodes, HS)
      }
      sample(SS, HS, gS, tS) {
        const bS = this.findSegment(this.pathTime(SS));
        this.samplePosition(bS, tS.position), this.aim.sample(bS, HS, tS);
        const {
          beforeIndex: XS,
          afterIndex: xS
        } = bS;
        tS.fov = OS(bS, XS >= 0 ? this.fovAt(XS, gS) : 0, this.fovAt(bS.index, gS), this.fovAt(bS.toIndex, gS), xS >= 0 ? this.fovAt(xS, gS) : 0, XS >= 0, xS >= 0)
      }
      pathTime(SS) {
        const HS = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || SS <= HS) return SS;
        const gS = SS - HS;
        return HS + gS - this.loopMs * Math.floor(gS / this.loopMs)
      }
      findSegment(SS) {
        const HS = this.nodes,
          gS = this.segment;
        let tS = gS.index;
        for (SS < HS[tS].timeMs && (tS = 0); tS < HS.length - 2 && HS[tS + 1].timeMs <= SS;) tS++;
        const bS = Math.min(tS + 1, HS.length - 1),
          xS = HS[bS].timeMs - HS[tS].timeMs;
        return gS.index = tS, gS.toIndex = bS, gS.segmentMs = xS, gS.u = xS > 0 ? (0, XS.o)((SS - HS[tS].timeMs) / xS, HS[tS].easing) : 1, gS.curved = this.smooth && xS > 0, gS.beforeIndex = this.prevNodes[tS], gS.afterIndex = this.nextNodes[bS], gS.beforeMs = this.prevGaps[tS], gS.afterMs = this.nextGaps[bS], gS
      }
      samplePosition(SS, HS) {
        const {
          fromTangent: gS,
          toTangent: tS,
          curved: bS
        } = SS, XS = this.nodes[SS.index].position, xS = this.nodes[SS.toIndex].position;
        wS(this.velocities[SS.index], XS, xS, SS.segmentMs, bS, gS), wS(this.velocities[SS.toIndex], XS, xS, SS.segmentMs, bS, tS);
        const NS = SS.u;
        for (let qS = 0; qS < 3; qS++) HS[qS] = bS ? PS(XS[qS], gS[qS], xS[qS], tS[qS], NS) : XS[qS] + (xS[qS] - XS[qS]) * NS
      }
      fovAt(SS, HS) {
        var gS;
        return null !== (gS = this.nodes[SS].keyframe.fov) && void 0 !== gS ? gS : HS
      }
      neighbour(SS, HS) {
        const gS = this.nodes.length - 1,
          tS = SS + HS;
        return tS >= 0 && tS <= gS ? tS : this.loopMs <= 0 || gS < 2 ? -1 : tS < 0 ? gS - 1 : 1
      }
      gapMs(SS, HS) {
        const gS = this.nodes.length - 1;
        if (1 === HS) {
          const HS = SS === gS ? 0 : SS;
          return this.nodes[HS + 1].timeMs - this.nodes[HS].timeMs
        }
        const tS = 0 === SS ? gS : SS;
        return this.nodes[tS].timeMs - this.nodes[tS - 1].timeMs
      }
    }
    class LS {
      constructor(SS) {
        this.gk = SS, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = HS => SS.getEntityPosition(HS), this.readAimPoint = HS => SS.getEntityAimPoint(HS)
      }
      aimPoint(SS) {
        return "string" !== typeof SS ? (0, qS.s)(SS, 3) ? SS : null : this.resolve(SS, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(SS) {
        const HS = "string" === typeof SS ? this.gk.getEntityAimPoint(SS) : SS;
        return HS && (0, qS.s)(HS, 3) ? HS : null
      }
      feetPosition(SS) {
        return this.resolve(SS, this.readFeet, this.lastFeet)
      }
      heading(SS) {
        const HS = this.gk.getEntityHeading(SS);
        if (null !== HS && Number.isFinite(HS)) return this.lastHeadings.set(SS, HS), HS;
        const gS = this.lastHeadings.get(SS);
        return void 0 !== gS ? gS : SS === this.gk.localPlayerId ? 0 : this.heading(this.gk.localPlayerId)
      }
      resolve(SS, HS, gS) {
        const tS = HS(SS);
        let bS = gS.get(SS);
        return tS && (0, qS.s)(tS, 3) ? (bS || (bS = [0, 0, 0], gS.set(SS, bS)), bS[0] = tS[0], bS[1] = tS[1], bS[2] = tS[2], bS) : bS || (SS === this.gk.localPlayerId ? null : this.resolve(this.gk.localPlayerId, HS, gS))
      }
    }

    function YS(SS) {
      return {
        heading: SS.heading,
        pitch: SS.pitch
      }
    }

    function AS(SS, HS) {
      Number.isFinite(SS.heading) && Number.isFinite(SS.pitch) || (0, bS.f)(HS, SS)
    }

    function yS(SS, HS, gS, tS, XS) {
      if (HS) return void(0, bS.j)(HS, XS);
      const xS = tS.aimPoint(gS);
      xS && (0, bS.o)(SS, xS, XS)
    }
    class VS {
      constructor(SS, HS, gS, tS) {
        this.settings = SS, this.gk = HS, this.targets = gS, this.base = void 0, this.base = YS(tS)
      }
      update(SS, HS, gS) {
        var tS;
        const bS = this.settings;
        (0, qS.j)(bS.position, gS.position), yS(bS.position, bS.lookDirection, null !== (tS = bS.lookAt) && void 0 !== tS ? tS : this.gk.localPlayerId, this.targets, this.base), HS.apply(this.base, gS), gS.fov = aS(bS, this.gk)
      }
      continueFrom(SS) {
        SS instanceof VS && (0, bS.f)(SS.base, this.base)
      }
      reset(SS) {
        AS(this.base, SS)
      }
    }
    class iS {
      constructor(SS, HS, gS, tS) {
        this.settings = SS, this.gk = HS, this.targets = gS, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.xG = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = YS(tS), this.goal = [...tS.position]
      }
      update(SS, HS, gS) {
        var tS, bS, XS;
        const xS = this.settings,
          NS = null !== (tS = xS.target) && void 0 !== tS ? tS : this.gk.localPlayerId,
          uS = this.targets.feetPosition(NS);
        let IS = !1;
        uS && (IS = this.foundFeet && DS(this.lastFeet, uS) > 32 + .1 * SS, (0, qS.j)(uS, this.lastFeet), this.foundFeet = !0, this.placeGoal(uS, NS));
        const fS = null !== (bS = xS.smoothMs) && void 0 !== bS ? bS : 0;
        !this.started || fS < 1 || IS ? ((0, qS.j)(this.goal, this.smoothed), this.xG.fill(0), this.started = !0) : KS(this.smoothed, this.xG, this.goal, fS, SS), IS && (this.distance = -1), (0, qS.j)(this.smoothed, gS.position);
        const kS = !0 === xS.avoidTerrain ? this.pullIn(NS, SS, gS) : 1;
        let jS = this.goal;
        if ("target" === xS.offsetSpace) jS = gS.position;
        else if (kS < 1) {
          jS = this.aimOrigin;
          for (let SS = 0; SS < 3; SS++) jS[SS] = gS.position[SS] + (this.goal[SS] - this.smoothed[SS]) * kS
        }
        yS(jS, xS.lookDirection, null !== (XS = xS.lookAt) && void 0 !== XS ? XS : NS, this.targets, this.base), HS.apply(this.base, gS), gS.fov = aS(xS, this.gk)
      }
      continueFrom(SS) {
        SS instanceof iS && (0, tS.A)(SS.settings.target, this.settings.target) && ((0, bS.f)(SS.base, this.base), (0, qS.j)(SS.goal, this.goal), (0, qS.j)(SS.lastFeet, this.lastFeet), this.foundFeet = SS.foundFeet, (0, qS.j)(SS.smoothed, this.smoothed), (0, qS.j)(SS.xG, this.xG), this.started = SS.started, !0 === SS.settings.avoidTerrain && (this.distance = SS.distance))
      }
      reset(SS) {
        AS(this.base, SS), this.xG.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(SS, HS, gS) {
        const tS = this.targets.aimPoint(SS);
        if (!tS) return 1;
        const bS = gS.position,
          XS = DS(tS, bS);
        if (!(XS > 0)) return 1;
        const xS = this.toCamera;
        for (let qS = 0; qS < 3; qS++) xS[qS] = (bS[qS] - tS[qS]) / XS;
        const NS = function(SS, HS, gS) {
          return SS < 0 || HS < SS ? HS : HS + (SS - HS) * Math.exp(-gS / 150)
        }(this.distance, function(SS, HS, gS, tS) {
          const bS = SS.raycastTerrain(HS, gS, tS);
          return null !== bS && Number.isFinite(bS) ? Math.min(tS, Math.max(0, bS - .2)) : tS
        }(this.gk, tS, xS, XS), HS);
        if (XS - NS < .001) return this.distance = -1, 1;
        this.distance = NS;
        for (let qS = 0; qS < 3; qS++) bS[qS] = tS[qS] + xS[qS] * NS;
        return NS / XS
      }
      placeGoal(SS, HS) {
        const gS = this.settings.offset;
        let tS = gS[0],
          bS = gS[2];
        if ("target" === this.settings.offsetSpace) {
          const SS = this.targets.heading(HS),
            XS = Math.cos(SS),
            xS = Math.sin(SS);
          tS = gS[0] * XS + gS[2] * xS, bS = -gS[0] * xS + gS[2] * XS
        }
        this.goal[0] = SS[0] + tS, this.goal[1] = SS[1] + gS[1], this.goal[2] = SS[2] + bS
      }
    }
    class WS {
      constructor(SS, HS, gS, tS) {
        var bS, XS;
        this.settings = SS, this.gk = HS, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = SS.keyframes.length > 0 ? new ES(SS.keyframes, null === (bS = SS.smooth) || void 0 === bS || bS, null !== (XS = SS.loop) && void 0 !== XS && XS) : null, this.base = (0, qS.h)(tS, (0, qS.n)()), this.resolveTarget = SS => gS.aimPoint(SS)
      }
      update(SS, HS, gS) {
        this.elapsedMs += SS;
        const tS = aS(this.settings, this.gk);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, tS, this.base) : this.base.fov = tS, (0, qS.j)(this.base.position, gS.position), gS.fov = this.base.fov, HS.apply(this.base, gS)
      }
      continueFrom(SS) {
        SS instanceof WS && (0, tS.A)(SS.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = SS.elapsedMs, (0, qS.h)(SS.base, this.base))
      }
      reset(SS) {
        AS(this.base, SS), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function zS(SS, HS) {
      return (0, tS.C)(SS, HS)
    }
    class US {
      constructor(SS, HS, gS) {
        var tS;
        this.settings = SS, this.gk = HS, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const bS = null !== gS && gS.settings.mode === SS.mode,
          XS = bS ? gS.pose : HS.getDefaultPose();
        this.pose = (0, qS.h)(XS, (0, qS.n)()), this.lastGoodPose = (0, qS.h)(bS ? gS.lastGoodPose : XS, (0, qS.n)()), this.look = new GS(SS.playerLook), this.targets = null !== (tS = null === gS || void 0 === gS ? void 0 : gS.targets) && void 0 !== tS ? tS : new LS(HS);
        const xS = (0, qS.h)(XS, (0, qS.n)());
        bS && gS.look.unapply(xS, xS), this.mode = function(SS, HS, gS, tS) {
          switch (SS.mode) {
            case "fixed":
              return new VS(SS, HS, gS, tS);
            case "follow":
              return new iS(SS, HS, gS, tS);
            case "path":
              return new WS(SS, HS, gS, tS);
            case "frame":
              return new jS(SS, HS, gS, tS)
          }
        }(SS, HS, this.targets, xS), bS && (this.look.continueFrom(gS.look), this.mode.continueFrom(gS.mode))
      }
      update(SS, HS) {
        return this.look.update(SS, HS), this.mode.update(SS, this.look, this.pose), (0, qS.o)(this.pose) ? (0, qS.h)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, qS.h)(this.lastGoodPose, this.pose), this.mode.reset((0, qS.o)(this.lastGoodPose) ? this.lastGoodPose : this.gk.getDefaultPose())), this.pose
      }
    }

    function pS(SS) {
      return [0, 0, SS[2], SS[3]]
    }
    class sS {
      constructor(SS) {
        this.gk = SS, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new NS, this.shot = null, this.blend = null, this.mixed = (0, qS.n)(), this.output = (0, qS.n)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(SS) {
        const HS = (0, uS.d)(SS);
        if ((0, tS.A)(HS, this.pending ? this.pending.settings : this.settings)) return;
        const gS = zS(this.settings, HS);
        if (void 0 !== HS.transition && !gS) return this.pending = {
          settings: HS,
          shot: "default" === HS.mode ? null : new US(HS, this.gk, null)
        }, void this.fade.fadeOut(HS.transition);
        const bS = null !== this.pending;
        this.pending = null, !bS && gS || this.fade.fadeIn(tS.q.minTransitionFadeMs), this.show(HS, !1)
      }
      show(SS, HS) {
        var gS, bS;
        if ((0, tS.A)(SS, this.settings)) return;
        const xS = !HS && zS(this.settings, SS);
        this.settings = SS;
        const NS = null !== this.blend && this.blend.elapsedMs > 0,
          uS = (0, qS.h)(this.hasOutput ? this.output : this.gk.getDefaultPose(), (0, qS.n)());
        if (this.shot = "default" === SS.mode ? null : new US(SS, this.gk, HS ? null : this.shot), xS) return;
        const IS = HS || !this.shot && !this.hasOutput ? 0 : null !== (gS = SS.blendInMs) && void 0 !== gS ? gS : 0;
        if (IS <= 0) return void(this.blend = null);
        const fS = (0, XS.r)(null !== (bS = SS.blendEasing) && void 0 !== bS ? bS : "easeInOut");
        this.blend = {
          from: uS,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: IS,
          easing: NS ? pS(fS) : fS
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
      update(SS, HS) {
        const gS = Number.isFinite(SS) && SS > 0 ? SS : 0;
        if (this.fade.advance(gS) && null !== this.pending) {
          const {
            settings: SS
          } = this.pending;
          this.pending = null, this.show(SS, !0)
        }
        this.loadingPositions.length = 0;
        const tS = this.pending;
        if (null !== tS && void 0 !== tS && tS.shot) {
          const SS = "path" === tS.settings.mode ? 0 : gS;
          this.noteLoadingPosition(tS.shot.update(SS, qS.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const xS = this.shot ? this.shot.update(gS, HS) : this.gk.getDefaultPose();
        this.shot && this.noteLoadingPosition(xS.position);
        const NS = this.blend;
        if (!NS) return this.writeOutput(xS);
        NS.elapsedMs += gS;
        const uS = Math.min(1, NS.elapsedMs / NS.durationMs);
        if (NS.headingDelta = Number.isFinite(NS.headingDelta) ? (0, bS.w)(NS.headingDelta, xS.heading - NS.from.heading) : (0, bS.u)(NS.from.heading, xS.heading), (0, qS.w)(NS.from, xS, NS.headingDelta, (0, XS.o)(uS, NS.easing), this.mixed), uS >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else NS.fromScripted && this.noteLoadingPosition(NS.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(SS) {
        if (SS.every(Number.isFinite)) {
          const HS = this.loadingPositions;
          HS.push((0, qS.j)(SS, this.loadingSlots[HS.length]))
        }
      }
      writeOutput(SS) {
        const HS = this.output;
        (0, qS.o)(SS) ? (0, qS.h)(SS, HS) : this.hasOutput || (0, qS.h)(this.gk.getDefaultPose(), HS), HS.pitch = (0, bS.d)(HS.pitch);
        const gS = this.gk.getDefaultFov(),
          XS = Number.isFinite(gS) && gS > 0 && gS < 180,
          xS = XS ? Math.min(tS.q.minFov, gS) : tS.q.minFov,
          NS = XS ? Math.max(tS.q.maxFov, gS) : tS.q.maxFov;
        return HS.fov = Number.isFinite(HS.fov) ? Math.min(NS, Math.max(xS, HS.fov)) : NS, this.hasOutput = !0, HS
      }
    }
  },
  39178: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      h: () => NS,
      j: () => xS,
      n: () => XS,
      o: () => uS,
      s: () => qS,
      w: () => IS
    });
    var tS = gS(39185);
    const bS = {
      tL: 0,
      qL: 0
    };

    function XS() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function xS(SS, HS) {
      return HS[0] = SS[0], HS[1] = SS[1], HS[2] = SS[2], HS
    }

    function NS(SS, HS) {
      return xS(SS.position, HS.position), HS.heading = SS.heading, HS.pitch = SS.pitch, HS.fov = SS.fov, HS
    }

    function qS(SS, HS) {
      return Array.isArray(SS) && SS.length === HS && SS.every(Number.isFinite)
    }

    function uS(SS) {
      return qS(SS.position, 3) && Number.isFinite(SS.heading) && Number.isFinite(SS.pitch) && Number.isFinite(SS.fov)
    }

    function IS(SS, HS, gS, bS, XS) {
      for (let tS = 0; tS < 3; tS++) XS.position[tS] = SS.position[tS] + (HS.position[tS] - SS.position[tS]) * bS;
      return XS.heading = (0, tS.s)(SS.heading + gS * bS), XS.pitch = SS.pitch + (HS.pitch - SS.pitch) * bS, XS.fov = SS.fov + (HS.fov - SS.fov) * bS, XS
    }
  },
  39202: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => hS,
      e: () => kS
    });
    var tS = gS(39198),
      bS = gS(39178);
    const XS = tS.m,
      xS = tS.t;

    function NS(SS, HS, gS, tS) {
      return Number.isFinite(SS) ? Math.min(gS, Math.max(HS, SS)) : tS
    }

    function qS(SS, HS, gS) {
      return void 0 !== SS && Number.isFinite(SS) ? Math.min(gS, Math.max(HS, SS)) : void 0
    }

    function uS(SS) {
      const HS = tS.q.maxCoordinate;
      return [Math.min(HS, Math.max(-HS, SS[0])), Math.min(HS, Math.max(-HS, SS[1])), Math.min(HS, Math.max(-HS, SS[2]))]
    }

    function IS(SS) {
      return "string" === typeof SS ? SS : (0, bS.s)(SS, 3) ? uS(SS) : void 0
    }
    const fS = new RegExp(tS.w);

    function kS(SS) {
      return "string" === typeof SS && fS.test(SS)
    }

    function aS(SS) {
      const HS = [];
      if (!Array.isArray(SS)) return HS;
      for (const gS of SS.slice(0, tS.q.maxFrameTargets)) {
        const SS = IS(gS);
        void 0 === SS || "string" === typeof SS && !kS(SS) || HS.push(SS)
      }
      return HS
    }

    function KS(SS) {
      if (!(0, bS.s)(SS, 3)) return;
      const HS = Math.max(Math.abs(SS[0]), Math.abs(SS[1]), Math.abs(SS[2])),
        gS = Math.hypot(SS[0] / HS, SS[1] / HS, SS[2] / HS);
      return 0 === HS || HS * gS < tS.q.minDirectionLength ? void 0 : [SS[0] / HS / gS, SS[1] / HS / gS, SS[2] / HS / gS]
    }

    function jS(SS) {
      if (void 0 !== SS) return "string" === typeof SS ? XS.includes(SS) ? SS : void 0 : (0, bS.s)(SS, 4) ? [NS(SS[0], 0, 1, 0), NS(SS[1], tS.q.minEasingY, tS.q.maxEasingY, 0), NS(SS[2], 0, 1, 1), NS(SS[3], tS.q.minEasingY, tS.q.maxEasingY, 1)] : "linear"
    }

    function GS(SS) {
      if (SS) return {
        maxYaw: NS(SS.maxYaw, 0, tS.q.maxPlayerLook, 0),
        maxPitch: NS(SS.maxPitch, 0, tS.q.maxPlayerLook, 0),
        returnMs: qS(SS.returnMs, 0, tS.q.maxReturnMs)
      }
    }
    const CS = new RegExp(tS.e);

    function nS(SS) {
      var HS;
      if ("object" !== typeof SS || null === SS) return;
      const gS = tS.q.maxTransitionMs,
        bS = tS.q.minTransitionFadeMs;
      return {
        colour: "string" === typeof SS.colour && CS.test(SS.colour) ? SS.colour : tS.i,
        outMs: NS(SS.outMs, bS, gS, bS),
        holdMs: NS(null !== (HS = SS.holdMs) && void 0 !== HS ? HS : 0, 0, gS, 0),
        inMs: NS(SS.inMs, bS, gS, bS)
      }
    }

    function PS(SS) {
      return !0 === SS || void 0
    }

    function QS(SS) {
      if ("object" !== typeof SS || null === SS) return !1;
      const HS = SS.lookAt;
      return Number.isFinite(SS.timeMs) && (0, bS.s)(SS.position, 3) && (void 0 === HS || "string" === typeof HS || (0, bS.s)(HS, 3))
    }

    function DS(SS) {
      return {
        ...SS,
        timeMs: NS(SS.timeMs, 0, tS.q.maxPathMs, 0),
        position: uS(SS.position),
        lookAt: IS(SS.lookAt),
        lookDirection: KS(SS.lookDirection),
        fov: qS(SS.fov, tS.q.minFov, tS.q.maxFov),
        easing: jS(SS.easing)
      }
    }

    function wS(SS) {
      const HS = [];
      if (!Array.isArray(SS)) return HS;
      for (const gS of SS.slice(0, tS.q.maxKeyframes)) {
        if (!QS(gS)) continue;
        const SS = DS(gS);
        (0 === HS.length || SS.timeMs > HS[HS.length - 1].timeMs) && HS.push(SS)
      }
      return HS
    }

    function hS(SS) {
      if ("object" !== typeof SS || null === SS) return {
        mode: "default"
      };
      const HS = {
          blendInMs: qS(SS.blendInMs, 0, tS.q.maxBlendInMs),
          blendEasing: jS(SS.blendEasing),
          transition: nS(SS.transition),
          letterbox: PS(SS.letterbox),
          hideHud: PS(SS.hideHud)
        },
        gS = {
          mode: "default",
          ...HS
        };
      if ("default" === SS.mode || "fixed" === SS.mode && !(0, bS.s)(SS.position, 3)) return gS;
      const XS = {
        ...HS,
        fov: qS(SS.fov, tS.q.minFov, tS.q.maxFov),
        playerFacing: (fS = SS.playerFacing, xS.includes(fS) ? fS : void 0),
        playerLook: GS(SS.playerLook)
      };
      var fS, kS;
      switch (SS.mode) {
        case "fixed":
          return {
            ...SS, ...XS, position: uS(SS.position), lookAt: IS(SS.lookAt), lookDirection: KS(SS.lookDirection)
          };
        case "follow":
          return {
            ...SS, ...XS, target: "string" === typeof SS.target ? SS.target : void 0, lookAt: IS(SS.lookAt), offset: (kS = SS.offset, Array.isArray(kS) ? [NS(kS[0], -tS.q.maxOffset, tS.q.maxOffset, 0), NS(kS[1], -tS.q.maxOffset, tS.q.maxOffset, 0), NS(kS[2], -tS.q.maxOffset, tS.q.maxOffset, 0)] : [0, 0, 0]), lookDirection: KS(SS.lookDirection), smoothMs: qS(SS.smoothMs, 0, tS.q.maxSmoothMs)
          };
        case "path":
          return {
            ...SS, ...XS, keyframes: wS(SS.keyframes)
          };
        case "frame":
          return {
            ...SS, ...XS, targets: aS(SS.targets), viewHeading: qS(SS.viewHeading, -tS.q.maxFrameHeading, tS.q.maxFrameHeading), viewElevation: qS(SS.viewElevation, 0, tS.q.maxFrameElevation), padding: qS(SS.padding, 0, tS.q.maxFrameDistance), closestDistance: qS(SS.closestDistance, 0, tS.q.maxFrameDistance), furthestDistance: qS(SS.furthestDistance, 0, tS.q.maxFrameDistance), smoothMs: qS(SS.smoothMs, 0, tS.q.maxSmoothMs)
          };
        default:
          return gS
      }
    }
  },
  38672: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS
    });
    var tS = gS(1309);

    function bS(SS) {
      const HS = /(\d*\.?\d+)px/.exec(SS);
      return HS ? Number(HS[1]) : null
    }

    function XS(SS) {
      return SS.split(/[\s,]+/).pop()
    }
    let xS = !1;
    const NS = {
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
      drawText: function(SS, HS, tS, NS, qS, uS) {
        if (qS <= 0 || uS <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: IS,
          fontVariant: fS,
          fontWeight: kS,
          fontSize: aS,
          font: KS
        } = this, jS = [IS, fS, kS, `${aS}px`, KS].filter(Boolean).join(" "), GS = [
          [kS, `${aS}px`, XS(KS)].filter(Boolean).join(" "), `${aS}px sans-serif`
        ], CS = SS.font, nS = function(SS, HS, gS) {
          for (const tS of HS) {
            SS.font = tS;
            const HS = bS(SS.font),
              xS = XS(tS);
            if (null !== HS && Math.abs(HS - gS) <= .5 && SS.font.toLowerCase().includes(xS.toLowerCase())) return tS
          }
          return null
        }(SS, [jS, ...GS], aS);
        nS !== jS && function(SS, HS, tS) {
          xS || (xS = !0, Promise.resolve().then((() => gS(1149))).then((gS => {
            let {
              Zj: bS
            } = gS;
            bS(new Error("A canvas didn't take canvasTxt's font"), {
              font: SS,
              ia: HS,
              drawnWith: null !== tS && void 0 !== tS ? tS : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(jS, CS, nS);
        const PS = bS(SS.font);
        if (null === nS && null !== PS && PS > 0) {
          const gS = aS / PS;
          SS.save();
          try {
            return SS.scale(gS, gS), {
              height: this.drawLines(SS, HS, tS / gS, NS / gS, qS / gS, uS / gS, PS).height * gS
            }
          } finally {
            SS.restore()
          }
        }
        return this.drawLines(SS, HS, tS, NS, qS, uS, aS)
      },
      drawLines: function(SS, HS, gS, bS, XS, xS, NS) {
        const qS = gS + XS,
          uS = bS + xS;
        let IS, fS = bS + xS / 2 + NS / 2;
        "right" === this.align ? (IS = qS, SS.textAlign = "right") : "left" === this.align ? (IS = gS, SS.textAlign = "left") : (IS = gS + XS / 2, SS.textAlign = "center");
        for (const tS of HS) {
          SS.measureText(tS).width >= XS && (HS = HS.replace(tS, ""))
        }
        HS = (0, tS.U)(HS);
        const kS = [],
          aS = HS.split("\n"),
          KS = this.justify ? SS.measureText("\u200a").width : 0;
        aS.forEach((HS => {
          let gS = SS.measureText(HS).width;
          if (gS <= XS) kS.push(HS);
          else {
            let tS = HS;
            const bS = XS;
            let xS, NS, qS;
            for (gS = SS.measureText(tS).width; gS > bS;) {
              for (xS = 0, NS = 0, qS = ""; NS < bS;) xS++, qS = tS.substr(0, xS), NS = SS.measureText(qS).width;
              xS--, qS = qS.substr(0, xS);
              const HS = xS;
              if (" " !== tS.substr(xS, 1)) {
                for (;
                  " " !== tS.substr(xS, 1) && 0 !== xS;) xS--;
                0 === xS && (xS = HS), qS = tS.substr(0, xS)
              }
              qS = this.justify ? this.justifyLine(SS, qS, KS, "\u200a", XS) : qS, tS = tS.substr(xS), gS = SS.measureText(tS).width, kS.push(qS)
            }
            gS > 0 && kS.push(tS)
          }
        }));
        const jS = this.lineHeight ? this.lineHeight : this.getTextHeight(SS, HS),
          GS = jS * (kS.length - 1),
          CS = GS / 2;
        let nS = bS;
        "top" === this.vAlign ? fS = bS + NS : "bottom" === this.vAlign ? (fS = uS - GS, nS = uS) : (nS = bS + xS / 2, fS -= CS), kS.forEach((HS => {
          HS = HS.trim(), SS.fillText(HS, IS, fS), fS += jS
        })), this.debug && (SS.lineWidth = 3, SS.strokeStyle = "#00909e", SS.strokeRect(gS, bS, XS, xS), SS.lineWidth = 2, SS.strokeStyle = "#f6d743", SS.beginPath(), SS.moveTo(IS, bS), SS.lineTo(IS, uS), SS.stroke(), SS.strokeStyle = "#ff6363", SS.beginPath(), SS.moveTo(gS, nS), SS.lineTo(qS, nS), SS.stroke());
        return {
          height: GS + jS
        }
      },
      getTextHeight: function(SS, HS) {
        const gS = SS.textBaseline;
        SS.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: tS
        } = SS.measureText(HS);
        return SS.textBaseline = gS, tS
      },
      justifyLine: function(SS, HS, gS, tS, bS) {
        const XS = HS.trim(),
          xS = SS.measureText(XS).width,
          NS = XS.split(/\s+/).length - 1,
          qS = Math.floor((bS - xS) / gS);
        if (NS <= 0 || qS <= 0) return XS;
        const uS = Math.floor(qS / NS);
        let IS = qS - NS * uS,
          fS = [];
        for (let kS = 0; kS < uS; kS++) fS.push(tS);
        fS = fS.join("");
        return XS.replace(/\s+/g, (SS => {
          const HS = IS > 0 ? fS + tS : fS;
          return IS--, SS + HS
        }))
      }
    }
  },
  39141: (SS, HS, gS) => {
    function tS(SS, HS) {
      return HS.set(SS), HS
    }
    gS.d(HS, {
      b: () => tS
    })
  },
  38676: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => jS,
      f: () => KS,
      i: () => kS,
      m: () => IS,
      o: () => fS
    });
    var tS = gS(4356),
      bS = gS(387);
    const XS = 1024,
      xS = 1536,
      NS = 2 * tS.l + 1,
      qS = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      uS = 1.5;

    function IS(SS, HS, gS) {
      if ("string" !== typeof SS) return HS;
      try {
        const gS = JSON.parse(SS);
        return gS && "object" === typeof gS ? gS : HS
      } catch (tS) {
        return void 0 !== gS && console.error(`Couldn't parse ${gS}`, tS), HS
      }
    }

    function fS(SS) {
      return IS(SS, null, "a leaderboard's rows")
    }

    function kS(SS, HS) {
      var gS, tS;
      return null !== HS && void 0 !== HS ? HS : {
        status: null !== (gS = SS.status) && void 0 !== gS ? gS : "loading",
        entries: null !== (tS = SS.entries) && void 0 !== tS ? tS : []
      }
    }

    function aS(SS, HS) {
      return "number" === typeof SS && Number.isFinite(SS) && SS > 0 ? SS : HS
    }

    function KS(SS, HS) {
      const gS = aS(SS.size, 1);
      let tS = aS(SS.width, aS(2.5 * gS, 2.5)),
        bS = aS(SS.height, aS(3.75 * gS, 3.75));
      Number.isFinite(XS * bS / tS) && Number.isFinite(xS * tS / bS) || (tS = 2.5, bS = 3.75);
      const NS = bS / tS,
        qS = Math.max(1, Math.min(XS, HS / NS));
      return {
        width: tS,
        height: bS,
        layoutWidth: Math.max(XS, xS / NS),
        layoutHeight: Math.max(xS, XS * NS),
        pixelWidth: Math.round(qS),
        pixelHeight: Math.round(Math.max(1, Math.min(HS, qS * NS)))
      }
    }

    function jS(SS, HS, gS, xS, IS, fS) {
      SS.setTransform(1, 0, 0, 1, 0, 0), SS.fillStyle = bS.B.defaultNameTagBackground, SS.fillRect(0, 0, HS, gS), SS.scale(HS / xS.layoutWidth, gS / xS.layoutHeight), SS.translate((xS.layoutWidth - XS) / 2, 0),
        function(SS, HS, gS, XS) {
          var xS, IS, fS, kS;
          const {
            top: aS,
            around: KS,
            showPlayerText: jS,
            localPlayerDbId: nS
          } = gS, {
            whiteUiText: PS,
            grayUiText: QS,
            yellowUiText: DS
          } = bS.B;
          SS.textBaseline = "middle";
          const wS = function(HS, gS, tS, bS, XS, xS) {
              let NS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              SS.font = `bold ${bS}px 'Jetbrains Mono', monospace`, SS.fillStyle = XS, SS.textAlign = NS;
              let qS = HS.replace(/[\r\n\t]/g, " ");
              if (SS.measureText(qS).width > xS) {
                for (; qS.length > 0 && SS.measureText(`${qS}\u2026`).width > xS;) qS = qS.slice(0, -1);
                qS += "\u2026"
              }
              SS.fillText(qS, gS, tS)
            },
            hS = HS => {
              SS.fillStyle = PS, SS.globalAlpha = .15, SS.fillRect(24, HS, 976, 2), SS.globalAlpha = 1
            },
            ZS = null === nS ? null : (0, bS.ic)(nS),
            JS = SS => null !== ZS && SS.playerHash === ZS,
            OS = GS(aS.entries, tS.p),
            dS = "ready" === aS.status && OS.length > 0,
            cS = null === KS ? [] : GS(KS.entries, NS),
            vS = OS.some(JS),
            ES = null === KS ? null : function(SS) {
              const HS = SS;
              if (!HS || !Number.isFinite(HS.rank) || !Number.isFinite(HS.tied) || !Number.isFinite(HS.total)) return null;
              return HS
            }(KS.standing),
            LS = cS.find(JS),
            YS = OS.find(JS),
            AS = null === ES || void 0 === LS ? null : {
              value: LS.value,
              rank: ES.rank
            },
            yS = CS(OS, void 0 === YS || YS.value === (null === AS || void 0 === AS ? void 0 : AS.value) ? AS : null),
            VS = CS(cS, AS),
            iS = (SS, HS) => {
              const gS = SS.findIndex(JS);
              return gS >= 0 ? HS[gS] : null
            },
            WS = null !== (xS = null !== (IS = null === ES || void 0 === ES ? void 0 : ES.rank) && void 0 !== IS ? IS : iS(cS, VS)) && void 0 !== xS ? xS : iS(OS, yS);
          SS.font = "bold 34px 'Jetbrains Mono', monospace";
          const zS = [...dS ? yS : [], ...vS ? [] : VS],
            US = Math.min(280, Math.max(0, ...zS.map((HS => SS.measureText(qS.format(HS)).width)))),
            pS = US <= 80,
            sS = pS ? 80 : 32 + US,
            BS = pS ? 148 : sS + 28,
            MS = 660 - BS;
          wS(`TOP ${tS.p}  /  ALL TIME`, 24, 52, 28, QS, 976), wS(jS ? String(null !== (fS = HS.title) && void 0 !== fS ? fS : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, PS, 976), wS("RANK", 32, 174, 28, QS, BS - 40), wS("PLAYER", BS, 174, 28, QS, MS), wS(jS ? String(null !== (kS = HS.scoreLabel) && void 0 !== kS ? kS : "Score").slice(0, 24) : "Score", 992, 174, 28, QS, 304, "right"), hS(202);
          const FS = (XS - 232) / (tS.p + uS + NS),
            RS = 208 + tS.p * FS,
            TS = RS + uS * FS,
            oS = (HS, gS, tS, bS) => {
              const XS = JS(HS);
              SS.fillStyle = XS ? DS : PS, SS.globalAlpha = XS ? .15 : bS ? .035 : 0, SS.fillRect(24, tS - FS / 2 + 1, 976, FS - 2), SS.globalAlpha = 1;
              const xS = XS ? DS : PS;
              wS(qS.format(gS), sS, tS, 34, xS, pS ? 80 : US, pS ? "center" : "right"), wS(jS ? String(HS.name).slice(0, 64) : "Player", BS, tS, 34, xS, MS);
              const NS = qS.format(HS.value);
              wS(SS.measureText(NS).width > 304 ? HS.value.toExponential(6) : NS, 992, tS, 34, xS, 304, "right")
            };
          if (dS)
            for (const [tS, bS] of OS.entries()) oS(bS, yS[tS], 208 + (tS + .5) * FS, tS % 2 === 0);
          else {
            const SS = "error" === aS.status,
              HS = SS ? "Couldn't load leaderboard" : "ready" === aS.status ? "No scores yet" : "Loading leaderboard\u2026",
              gS = SS ? "Trying again shortly" : "ready" === aS.status ? "Be the first on the board!" : "Fetching the top players",
              tS = (208 + RS) / 2;
            wS(HS, 512, tS - 28, 40, SS ? bS.B.redUiText : PS, 960, "center"), wS(gS, 512, tS + 27, 30, QS, 960, "center")
          }
          const lS = RS + uS * FS / 2;
          if (null === WS) hS(lS);
          else {
            const HS = null === ES ? 0 : ES.tied - 1,
              gS = `YOUR RANK #${qS.format(WS)}${null===ES?"":` of ${qS.format(ES.total)}`}`;
            SS.font = "bold 36px 'Jetbrains Mono', monospace";
            const tS = Math.max(20, Math.min(36, Math.floor(34560 / SS.measureText(gS).width)));
            wS(gS, 512, lS - (HS > 0 ? 15 : 0), tS, DS, 960, "center"), HS > 0 && wS(`Tied with ${qS.format(HS)} other${1===HS?"":"s"}`, 512, lS + 24, 24, QS, 960, "center")
          }
          if (null === KS) return;
          const mS = TS + NS * FS / 2;
          if (vS) wS(`You're in the top ${tS.p}!`, 512, mS, 40, DS, 960, "center");
          else if (0 === cS.length) wS("You're not on this board yet", 512, mS, 34, QS, 960, "center");
          else
            for (const [tS, bS] of cS.entries()) oS(bS, VS[tS], TS + (tS + .5) * FS, tS % 2 === 0)
        }(SS, IS, fS, xS.layoutHeight)
    }

    function GS(SS, HS) {
      return Array.isArray(SS) ? SS.slice(0, HS).filter((SS => SS && Number.isFinite(SS.rank) && Number.isFinite(SS.value))) : []
    }

    function CS(SS, HS) {
      const gS = [];
      let tS = !1;
      return SS.forEach(((bS, XS) => {
        if (null !== HS && bS.value === HS.value) return void gS.push(HS.rank);
        const xS = XS > 0 && bS.value === SS[XS - 1].value;
        xS || (tS = 0 === XS && 1 !== bS.rank), gS.push(xS && !tS ? gS[XS - 1] : bS.rank)
      })), gS
    }
  },
  38885: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      i: () => XS
    });
    const tS = 32;

    function bS(SS) {
      return Array.from(SS).length
    }

    function XS(SS) {
      const HS = [""];
      let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        bS = "";
      const XS = () => {
        HS.push(""), gS = 0, bS = ""
      };
      for (const xS of SS.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(xS)) XS();
        else if (/^\s+$/.test(xS)) bS += xS;
      else if (xS.length > 0) {
        const SS = Array.from(xS);
        gS > 0 && gS + bS.length + SS.length > tS && XS(), HS[HS.length - 1] += bS, gS += bS.length, bS = "";
        for (const bS of SS) gS >= tS && XS(), HS[HS.length - 1] += bS, gS++
      }
      return HS[HS.length - 1] += bS, HS
    }
  },
  39138: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS = gS(36659),
      bS = gS.n(tS);
    const XS = [1, 1, 1];

    function xS(SS) {
      if (!SS) return [...XS];
      try {
        const [HS, gS, tS] = bS()(SS).rgb().array();
        return [HS / 255, gS / 255, tS / 255]
      } catch (HS) {
        return console.warn(`Invalid groundArrowPath colour "${SS}":`, HS), [...XS]
      }
    }
  },
  39231: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      e: () => uS,
      h: () => qS
    });
    var tS = gS(330),
      bS = gS(3058);
    const XS = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      xS = 512;

    function NS(SS) {
      var HS;
      const gS = Math.min(screen.width, screen.height) * (null !== (HS = (0, tS.d)()) && void 0 !== HS ? HS : (0, bS.l)());
      return Math.max(window.innerHeight * (0, bS.l)(), gS) / (0, bS.m)(SS)
    }

    function qS(SS, HS, gS) {
      return HS / (2 * Math.tan(gS / 2)) > xS ? SS : uS(SS)
    }

    function uS(SS) {
      return SS.map((SS => SS.replace(XS, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34061: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      g: () => NS,
      h: () => xS,
      k: () => bS,
      o: () => tS
    });
    const tS = {
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
      bS = "/textures/dayNight/sun.png",
      XS = "/textures/dayNight/moon.png",
      xS = "/textures/dayNight/stars",
      NS = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39198: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => NS,
      C: () => xS,
      e: () => IS,
      i: () => fS,
      m: () => tS,
      q: () => qS,
      t: () => bS,
      w: () => uS
    });
    const tS = ["linear", "easeIn", "easeOut", "easeInOut"],
      bS = ["movement", "camera", "cursor"],
      XS = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function xS(SS, HS) {
      return NS(SS, HS, XS)
    }

    function NS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (SS === HS || Number.isNaN(SS) && Number.isNaN(HS)) return !0;
      if ("object" !== typeof SS || "object" !== typeof HS || null === SS || null === HS || Array.isArray(SS) !== Array.isArray(HS)) return !1;
      const tS = SS,
        bS = HS;
      for (const XS of new Set([...Object.keys(tS), ...Object.keys(bS)]))
        if (!gS.includes(XS) && !NS(tS[XS], bS[XS])) return !1;
      return !0
    }
    const qS = {
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
      uS = "^-[1-9][0-9]*$",
      IS = "^#[0-9a-fA-F]{6}$",
      fS = "#000000"
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);