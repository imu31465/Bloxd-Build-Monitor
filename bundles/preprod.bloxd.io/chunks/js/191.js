export const id = 191;
export const ids = [191];
export const modules = {
  38967: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC
    });
    class QC {
      constructor(CC, zC) {
        this.read = CC, this.apply = zC, this.release = null
      }
      turn(CC, zC) {
        const ZC = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: zC,
          forcedCameraDirection: [CC[0], CC[1], CC[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), zC + 100),
          transitionMs: ZC
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(CC) {
        null !== this.release && (clearTimeout(this.release.timer), CC && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38471: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      e: () => wC
    });
    const QC = new Map;

    function wC(CC, zC) {
      QC.set(CC, zC)
    }

    function bC(CC) {
      return CC ? QC.get(CC) : void 0
    }
  },
  39426: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC
    });
    var QC = ZC(38042);

    function wC(CC, zC, ZC) {
      var wC, bC, nC, fC, oC, qC, FC;
      const WC = (0, QC.d)(CC, zC, ZC[0], ZC[1], ZC[2]),
        NC = WC ? null !== (wC = WC.textCell) && void 0 !== wC ? wC : WC.rect.anchor : ZC,
        MC = zC(NC[0], NC[1], NC[2]);
      return {
        pos: [ZC[0], ZC[1], ZC[2]],
        noticeboardSpan: WC && {
          width: WC.rect.width,
          height: WC.rect.height
        },
        text: null !== (bC = null === MC || void 0 === MC || null === (nC = MC.persisted) || void 0 === nC || null === (fC = nC.shared) || void 0 === fC ? void 0 : fC.text) && void 0 !== bC ? bC : "",
        textSize: null !== (oC = null === MC || void 0 === MC || null === (qC = MC.persisted) || void 0 === qC || null === (FC = qC.shared) || void 0 === FC ? void 0 : FC.textSize) && void 0 !== oC ? oC : null
      }
    }
  },
  38334: (CC, zC, ZC) => {
    function QC(CC) {
      switch (CC.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    ZC.d(zC, {
      d: () => wC,
      g: () => bC,
      j: () => QC
    });
    const wC = 4,
      bC = 3
  },
  38986: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      e: () => bC
    });
    var QC = ZC(326);
    const wC = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class bC {
      constructor(CC) {
        this.importGame = CC, this.loads = new Map, this.loaded = new Map
      }
      load(CC) {
        const zC = (0, QC.Cb)(CC);
        if (!wC.has(zC)) return Promise.resolve(void 0);
        let ZC = this.loads.get(zC);
        return ZC || (ZC = this.importGame(zC).then((CC => {
          const ZC = CC.default;
          if ("function" !== typeof ZC) throw new Error(`${zC}'s client code has no default-exported factory`);
          return this.loaded.set(zC, ZC), ZC
        })).catch((CC => {
          throw this.loads.delete(zC), CC
        })), this.loads.set(zC, ZC)), ZC
      }
      loadedFactory(CC) {
        const zC = (0, QC.Cb)(CC);
        if (!wC.has(zC)) return;
        const ZC = this.loaded.get(zC);
        if (!ZC) throw new Error(`${zC}'s client code started before it loaded`);
        return ZC
      }
    }
  },
  39432: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(9299),
      wC = ZC(34171),
      bC = ZC(3276);

    function nC(CC) {
      if (CC === QC.b) return 0;
      const zC = (0, bC.b)(CC);
      if (void 0 !== zC && zC <= wC.MAX_BLOCK_ID) return zC;
      const ZC = (0, bC.b)(CC.split("|")[0]);
      if (void 0 !== ZC && ZC <= wC.MAX_BLOCK_ID && (0, wC.rootMetaDescOf)(ZC) === CC) return ZC;
      throw new Error(`Invalid block name. You sent ${CC}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39042: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC
    });
    var QC = ZC(20);
    class wC {
      constructor(CC) {
        this.screen = CC, this.hidesHud = !1
      }
      show(CC, zC) {
        this.screen.setFade(CC.colour, CC.alpha), this.screen.setLetterbox(!0 === zC.letterbox, CC.alpha < 1), this.setHudHidden(!0 === zC.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(CC) {
        this.hidesHud !== CC && (this.hidesHud = CC, QC.b.set({
          isUiHiddenByCamera: CC
        }))
      }
    }
  },
  39005: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC,
      c: () => NC,
      g: () => WC,
      h: () => nC,
      j: () => gC,
      m: () => oC,
      o: () => SC,
      s: () => qC,
      t: () => fC,
      w: () => FC
    });
    const QC = Math.PI / 2 - .001,
      wC = 2 * Math.PI,
      bC = 1e-9;

    function nC(CC, zC) {
      zC.heading = CC.heading, zC.pitch = CC.pitch
    }

    function fC(CC, zC) {
      const ZC = zC - CC;
      return ZC - wC * Math.floor((ZC + Math.PI) / wC)
    }

    function oC(CC, zC, ZC) {
      return CC + fC(CC, zC) * ZC
    }

    function qC(CC) {
      if (!Number.isFinite(CC)) return CC;
      const zC = CC - wC * Math.floor(CC / wC);
      return zC < wC ? zC : 0
    }

    function FC(CC, zC) {
      return CC + fC(CC, zC)
    }

    function WC(CC) {
      return Math.max(-QC, Math.min(QC, CC))
    }

    function NC(CC, zC, ZC) {
      const QC = Math.cos(zC);
      return ZC[0] = QC * Math.sin(CC), ZC[1] = -Math.sin(zC), ZC[2] = QC * Math.cos(CC), ZC
    }

    function MC(CC, zC, ZC, QC) {
      const wC = Math.sqrt(CC * CC + ZC * ZC);
      return wC < bC && Math.abs(zC) < bC || (wC >= bC && (QC.heading = Math.atan2(CC, ZC)), QC.pitch = WC(Math.atan2(-zC, wC) + 0)), QC
    }

    function gC(CC, zC) {
      return MC(CC[0], CC[1], CC[2], zC)
    }

    function SC(CC, zC, ZC) {
      return MC(zC[0] - CC[0], zC[1] - CC[1], zC[2] - CC[2], ZC)
    }
  },
  39036: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC,
      d: () => wC
    });
    var QC = ZC(39005);

    function wC(CC) {
      var zC;
      const ZC = "default" === CC.mode ? "movement" : null !== (zC = CC.playerFacing) && void 0 !== zC ? zC : "movement";
      return "cursor" === ZC ? {
        facing: ZC,
        mouseTurns: null
      } : {
        facing: ZC,
        mouseTurns: "default" !== CC.mode && void 0 !== CC.playerLook ? "look" : "view"
      }
    }

    function bC(CC, zC, ZC, wC, bC, nC) {
      return nC.VY = 0, nC.Zm = 0, nC.pointedAt = void 0, void 0 !== wC ? bC ? (nC.pointedAt = wC, CC) : (0, QC.s)(wC.heading) : bC ? (nC.VY = zC, nC.Zm = ZC, CC) : (0, QC.s)(CC + zC)
    }
  },
  39015: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => aC
    });
    var QC = ZC(39022),
      wC = ZC(39005),
      bC = ZC(36864);

    function nC(CC, zC, ZC, QC) {
      if (!(QC > 0)) return zC;
      const wC = zC > CC ? Math.min(zC, CC + ZC / QC) : Math.max(zC, CC - ZC / QC);
      return Math.abs(zC - wC) < 1e-9 ? zC : wC
    }
    class fC {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: QC.f,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(CC) {
        !this.isGoingOut() && this.sinceTurnMs < QC.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: CC
        } : (this.waiting = null, this.startOut(CC))
      }
      fadeIn(CC) {
        this.isGoingOut() ? this.sinceTurnMs < QC.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: CC
        } : (this.waiting = null, this.startIn(CC)) : this.waiting = null
      }
      advance(CC) {
        const zC = this.waiting;
        if (null === zC) return this.step(CC);
        const ZC = QC.k.minFadeTurnMs - this.sinceTurnMs;
        if (ZC > CC) return this.step(CC);
        const wC = this.step(ZC);
        return this.waiting = null, "out" === zC.turn ? this.startOut(zC.transition) : this.startIn(zC.minMs), this.step(CC - ZC) || wC
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(CC) {
        ("in" === this.phase || null === this.phase && this.clearMs < QC.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = CC.colour), this.outMs = CC.outMs, this.holdMs = CC.holdMs, this.inMs = CC.inMs
      }
      startIn(CC) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(CC, this.inMs)
      }
      step(CC) {
        const zC = this.screen;
        this.sinceTurnMs += CC, null === this.phase && (this.clearMs += CC);
        let ZC = !1,
          wC = CC;
        if ("out" === this.phase) {
          const QC = (1 - zC.alpha) * this.outMs;
          if (zC.alpha = nC(zC.alpha, 1, CC, this.outMs), zC.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, wC = Math.max(0, CC - QC), ZC = !0
        }
        let bC = CC;
        if ("hold" === this.phase) {
          this.heldMs += wC;
          const CC = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - QC.k.minFadeTurnMs);
          if (CC < 0 || ZC) return ZC;
          this.phase = "in", this.sinceTurnMs = CC, bC = CC
        }
        return "in" === this.phase && (zC.alpha = nC(zC.alpha, 0, bC, this.inMs), zC.alpha <= 0 && (this.phase = null, this.clearMs = 0)), ZC
      }
    }
    var oC = ZC(39e3),
      qC = ZC(39028),
      FC = ZC(1806),
      WC = ZC(36454);

    function NC(CC, zC) {
      for (let ZC = 0; ZC < zC.length; ZC++) zC[ZC] = CC[ZC]
    }

    function MC(CC, zC) {
      var ZC;
      return null !== (ZC = CC.fov) && void 0 !== ZC ? ZC : zC.getDefaultFov()
    }

    function gC(CC, zC, ZC, QC, wC) {
      const bC = 2 / QC,
        nC = Math.exp(-bC * wC);
      for (let fC = 0; fC < CC.length; fC++) {
        const QC = CC[fC] - ZC[fC],
          oC = (zC[fC] + bC * QC) * wC;
        CC[fC] = ZC[fC] + (QC + oC) * nC, zC[fC] = (zC[fC] - bC * oC) * nC
      }
    }
    class SC {
      constructor(CC, zC, ZC, QC) {
        var bC, nC, fC, oC, qC;
        this.settings = CC, this.fN = zC, this.targets = ZC, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Np = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, wC.s)((0, FC.j)(null !== (bC = CC.viewHeading) && void 0 !== bC ? bC : 0)),
          pitch: (0, wC.g)((0, FC.j)(null !== (nC = CC.viewElevation) && void 0 !== nC ? nC : 45))
        }, this.closestDistance = null !== (fC = CC.closestDistance) && void 0 !== fC ? fC : Math.min(6, null !== (oC = CC.furthestDistance) && void 0 !== oC ? oC : 1 / 0), this.furthestDistance = null !== (qC = CC.furthestDistance) && void 0 !== qC ? qC : Math.max(64, this.closestDistance);
        const WC = (0, wC.c)(this.base.heading, this.base.pitch, this.forward),
          NC = QC.position,
          MC = this.closestDistance;
        this.goal = [NC[0] + WC[0] * MC, NC[1] + WC[1] * MC, NC[2] + WC[2] * MC, MC, this.base.heading, this.base.pitch]
      }
      update(CC, zC, ZC) {
        var QC, bC;
        this.placeGoal(null !== (QC = this.settings.fov) && void 0 !== QC ? QC : this.fN.getBaseFov()), this.goal[4] = (0, wC.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const nC = null !== (bC = this.settings.smoothMs) && void 0 !== bC ? bC : 400;
        !this.started || nC < 1 ? (NC(this.goal, this.smoothed), this.Np.fill(0), this.started = !0) : gC(this.smoothed, this.Np, this.goal, nC, CC), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, wC.g)(this.smoothed[5]), zC.apply(this.angles, ZC);
        const fC = (0, wC.c)(ZC.heading, ZC.pitch, this.forward);
        for (let wC = 0; wC < 3; wC++) ZC.position[wC] = this.smoothed[wC] - fC[wC] * this.smoothed[3];
        ZC.fov = MC(this.settings, this.fN)
      }
      continueFrom(CC) {
        CC instanceof SC && (NC(CC.goal, this.goal), NC(CC.smoothed, this.smoothed), NC(CC.Np, this.Np), this.framedTargets = CC.framedTargets, this.started = CC.started)
      }
      reset() {
        this.Np.fill(0), this.started = !1
      }
      placeGoal(CC) {
        var zC;
        let ZC = 0;
        for (const FC of this.settings.targets) {
          const CC = this.targets.currentAimPoint(FC);
          CC && (0, oC.h)(CC, this.pointAt(ZC++))
        }
        if (ZC > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const CC = this.targets.aimPoint(this.fN.localPlayerId);
          CC && (0, oC.h)(CC, this.pointAt(ZC++))
        }
        const QC = this.goal;
        if (0 === ZC) return void(QC[3] = this.withinDistances(QC[3]));
        for (let oC = 0; oC < 3; oC++) {
          let CC = 1 / 0,
            zC = -1 / 0;
          for (let QC = 0; QC < ZC; QC++) CC = Math.min(CC, this.points[QC][oC]), zC = Math.max(zC, this.points[QC][oC]);
          QC[oC] = (CC + zC) / 2
        }
        let wC = 0;
        for (let oC = 0; oC < ZC; oC++) {
          const CC = this.points[oC];
          wC = Math.max(wC, Math.hypot(CC[0] - QC[0], CC[1] - QC[1], CC[2] - QC[2]))
        }
        const bC = Math.tan((0, FC.j)(CC) / 2),
          nC = Math.atan(bC * (!0 === this.settings.letterbox ? WC.f : 1)),
          fC = Math.atan(bC * this.fN.getAspectRatio()),
          qC = (wC + (null !== (zC = this.settings.padding) && void 0 !== zC ? zC : 2)) / Math.sin(Math.min(nC, fC));
        QC[3] = this.withinDistances(qC)
      }
      withinDistances(CC) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, CC))
      }
      pointAt(CC) {
        return CC === this.points.length && this.points.push([0, 0, 0]), this.points[CC]
      }
    }
    class pC {
      constructor(CC) {
        this.limits = CC, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(CC) {
        this.limits && (this.yawOffset = CC.yawOffset, this.pitchOffset = CC.pitchOffset, this.idleMs = CC.idleMs)
      }
      update(CC, zC) {
        const ZC = this.limits;
        if (!ZC) return;
        const QC = Number.isFinite(zC.VY) ? zC.VY : 0,
          wC = Number.isFinite(zC.Zm) ? zC.Zm : 0;
        if (zC.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: zC.pointedAt.heading,
          pitch: zC.pointedAt.pitch
        };
        else if (0 !== QC || 0 !== wC) this.idleMs = 0, this.yawOffset += QC, this.pitchOffset += wC;
        else {
          const zC = Math.max(0, this.idleMs + CC - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += CC, void 0 !== ZC.returnMs && zC > 0) {
            const CC = ZC.returnMs > 0 ? Math.exp(-3 * zC / ZC.returnMs) : 0;
            this.yawOffset *= CC, this.pitchOffset *= CC
          }
        }
        this.clampOffsets(ZC)
      }
      clampOffsets(CC) {
        if (CC.maxYaw >= 180) this.yawOffset = (0, wC.t)(0, this.yawOffset);
        else {
          const zC = (0, FC.j)(CC.maxYaw);
          this.yawOffset = Math.max(-zC, Math.min(zC, this.yawOffset))
        }
        const zC = (0, FC.j)(CC.maxPitch);
        this.pitchOffset = Math.max(-zC, Math.min(zC, this.pitchOffset))
      }
      apply(CC, zC) {
        this.pointedAt && this.limits && (this.yawOffset = (0, wC.t)(CC.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - CC.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const ZC = (0, wC.g)(CC.pitch + this.pitchOffset);
        this.pitchOffset = ZC - CC.pitch, zC.heading = (0, wC.s)(CC.heading + this.yawOffset), zC.pitch = ZC
      }
      unapply(CC, zC) {
        zC.heading = (0, wC.s)(CC.heading - this.yawOffset), zC.pitch = (0, wC.g)(CC.pitch - this.pitchOffset)
      }
    }
    const PC = 1e-6;

    function GC(CC) {
      return Math.sqrt(CC[0] * CC[0] + CC[1] * CC[1] + CC[2] * CC[2])
    }

    function RC(CC, zC, ZC, QC, wC) {
      const bC = wC * wC,
        nC = bC * wC;
      return (2 * nC - 3 * bC + 1) * CC + (nC - 2 * bC + wC) * zC + (-2 * nC + 3 * bC) * ZC + (nC - bC) * QC
    }

    function AC(CC, zC, ZC, QC, wC) {
      const bC = wC * wC;
      return (6 * bC - 6 * wC) * CC + (3 * bC - 4 * wC + 1) * zC + (-6 * bC + 6 * wC) * ZC + (3 * bC - 2 * wC) * QC
    }

    function xC(CC, zC) {
      const ZC = zC[0] - CC[0],
        QC = zC[1] - CC[1],
        wC = zC[2] - CC[2];
      return Math.sqrt(ZC * ZC + QC * QC + wC * wC)
    }

    function JC(CC, zC, ZC, QC, wC, bC) {
      for (let nC = 0; nC < 3; nC++) bC[nC] = wC ? CC[nC] * QC : ZC[nC] - zC[nC];
      return wC && function(CC, zC) {
        const ZC = GC(CC);
        if (ZC > zC) {
          const QC = zC / ZC;
          CC[0] *= QC, CC[1] *= QC, CC[2] *= QC
        }
      }(bC, 3 * xC(zC, ZC)), bC
    }

    function IC(CC, zC, ZC, QC) {
      for (let wC = 0; wC < 3; wC++) QC[wC] = 6 * (zC[wC] - CC[wC]) - 2 * ZC[wC];
      if (GC(QC) < PC)
        for (let wC = 0; wC < 3; wC++) QC[wC] = zC[wC] - CC[wC];
      return QC
    }

    function iC(CC, zC) {
      return [2 * zC[0] - CC[0], 2 * zC[1] - CC[1], 2 * zC[2] - CC[2]]
    }

    function vC(CC, zC, ZC, QC, wC, bC, nC) {
      if (!bC && !nC) return 0;
      const fC = bC ? CC : 2 * zC - ZC,
        oC = nC ? ZC : 2 * zC - CC,
        qC = bC ? QC : wC,
        FC = nC ? wC : QC,
        WC = (zC - fC) / qC,
        NC = (oC - zC) / FC;
      if (WC * NC <= 0) return 0;
      const MC = (oC - fC) / (qC + FC),
        gC = 3 * Math.min(Math.abs(WC), Math.abs(NC));
      return Math.max(-gC, Math.min(gC, MC))
    }

    function eC(CC, zC, ZC, QC, wC, bC, nC) {
      const {
        u: fC,
        segmentMs: oC
      } = CC;
      if (!CC.curved) return ZC + (QC - ZC) * fC;
      return RC(ZC, vC(zC, ZC, QC, CC.beforeMs, oC, bC, !0) * oC, QC, vC(ZC, QC, wC, oC, CC.afterMs, !0, nC) * oC, fC)
    }

    function hC(CC) {
      return Math.abs(CC.pitch) >= wC.b
    }
    class KC {
      constructor(CC, zC, ZC, QC, wC) {
        this.nodes = CC, this.prevNodes = ZC, this.nextNodes = QC, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = CC.map(((CC, ZC) => this.nodeTangent(zC, wC, ZC)))
      }
      sample(CC, zC, ZC) {
        const {
          index: QC,
          toIndex: bC,
          segmentMs: nC,
          curved: fC
        } = CC, oC = this.fromAngles, qC = this.toAngles, FC = this.nodeAngles(QC, ZC.position, zC, oC), WC = this.nodeAngles(bC, ZC.position, zC, qC);
        if (nC > 0 && "aim" !== FC && "aim" !== WC && this.liveTangent(CC, oC)) return ZC.heading = (0, wC.s)(oC.heading), void(ZC.pitch = oC.pitch);
        if ("none" === FC && "none" === WC) return;
        !fC && nC > 0 && ("tangent" === FC && this.liveTangent(CC, oC), "tangent" === WC && this.liveTangent(CC, qC)), "none" === FC ? (0, wC.h)(qC, oC) : "none" === WC && (0, wC.h)(oC, qC);
        const NC = fC && CC.beforeIndex >= 0 && "none" !== this.nodeAngles(CC.beforeIndex, ZC.position, zC, this.beforeAngles),
          MC = fC && CC.afterIndex >= 0 && "none" !== this.nodeAngles(CC.afterIndex, ZC.position, zC, this.afterAngles),
          gC = (0, wC.w)(oC.heading, qC.heading),
          SC = eC(CC, NC ? (0, wC.w)(oC.heading, this.beforeAngles.heading) : 0, oC.heading, gC, MC ? (0, wC.w)(gC, this.afterAngles.heading) : 0, NC, MC);
        ZC.heading = (0, wC.s)(SC), ZC.pitch = (0, wC.g)(eC(CC, this.beforeAngles.pitch, oC.pitch, qC.pitch, this.afterAngles.pitch, NC, MC))
      }
      nodeAngles(CC, zC, ZC, QC) {
        const wC = this.rawNodeAngles(CC, zC, ZC, QC);
        return "none" !== wC && hC(QC) && !this.borrowHeading(this.prevNodes[CC], zC, ZC, QC) && this.borrowHeading(this.nextNodes[CC], zC, ZC, QC), wC
      }
      borrowHeading(CC, zC, ZC, QC) {
        const wC = this.borrowedAngles;
        return !(CC < 0 || "none" === this.rawNodeAngles(CC, zC, ZC, wC) || hC(wC)) && (QC.heading = wC.heading, !0)
      }
      rawNodeAngles(CC, zC, ZC, QC) {
        const bC = this.nodes[CC].keyframe;
        if (bC.lookDirection) return (0, wC.j)(bC.lookDirection, QC), "aim";
        if (void 0 !== bC.lookAt) {
          const CC = ZC(bC.lookAt);
          if (CC) return (0, wC.o)(zC, CC, QC), "aim"
        }
        const nC = this.tangents[CC];
        return nC ? ((0, wC.h)(nC, QC), "tangent") : "none"
      }
      liveTangent(CC, zC) {
        const ZC = this.nodes[CC.index].position,
          QC = this.nodes[CC.toIndex].position,
          bC = this.derivative;
        for (let wC = 0; wC < 3; wC++) bC[wC] = AC(ZC[wC], CC.fromTangent[wC], QC[wC], CC.toTangent[wC], CC.u);
        return GC(bC) > 1e-9 ? ((0, wC.j)(bC, zC), !0) : !(xC(ZC, QC) < PC) && ((0, wC.j)(IC(ZC, QC, CC.u < .5 ? CC.toTangent : CC.fromTangent, bC), zC), !0)
      }
      nodeTangent(CC, zC, ZC) {
        var QC;
        const bC = CC[ZC];
        if (GC(bC) > 1e-9) return (0, wC.j)(bC, {
          heading: 0,
          pitch: 0
        });
        const nC = null !== (QC = this.restDirectionTo(ZC, ZC + 1, CC, zC)) && void 0 !== QC ? QC : this.restDirectionTo(ZC, ZC - 1, CC, zC);
        return nC ? (0, wC.j)(nC, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(CC, zC, ZC, QC) {
        const wC = this.nodes[CC],
          bC = this.nodes[zC];
        if (!bC || xC(wC.position, bC.position) < PC) return null;
        const [nC, fC] = zC > CC ? [wC, bC] : [bC, wC], oC = JC(ZC[zC], nC.position, fC.position, fC.timeMs - nC.timeMs, QC, [0, 0, 0]);
        return IC(nC.position, fC.position, oC, [0, 0, 0])
      }
    }

    function YC(CC, zC) {
      const ZC = CC.lookDirection || zC.lookDirection ? function(CC, zC) {
        if (!CC || !zC) return CC === zC;
        const ZC = GC(CC),
          QC = GC(zC);
        return Math.hypot(CC[0] / ZC - zC[0] / QC, CC[1] / ZC - zC[1] / QC, CC[2] / ZC - zC[2] / QC) < PC
      }(CC.lookDirection, zC.lookDirection) : (QC = CC.lookAt, wC = zC.lookAt, "object" !== typeof QC || "object" !== typeof wC ? QC === wC : xC(QC, wC) < PC);
      var QC, wC;
      return xC(CC.position, zC.position) < PC && CC.fov === zC.fov && ZC
    }
    class dC {
      constructor(CC, zC, ZC) {
        if (this.smooth = zC, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === CC.length) throw new Error("A camera path needs at least one keyframe");
        for (let bC = 1; bC < CC.length; bC++)
          if (!(CC[bC].timeMs > CC[bC - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = CC.map((CC => {
          var zC;
          return {
            timeMs: CC.timeMs,
            position: [...CC.position],
            keyframe: CC,
            easing: (0, bC.p)(null !== (zC = CC.easing) && void 0 !== zC ? zC : "linear")
          }
        }));
        const QC = this.nodes[0],
          wC = this.nodes[this.nodes.length - 1],
          nC = ZC && this.nodes.length > 1;
        nC && !YC(QC.keyframe, wC.keyframe) && this.nodes.push({
          ...QC,
          timeMs: wC.timeMs + (wC.timeMs - QC.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = nC ? this.nodes[this.nodes.length - 1].timeMs - QC.timeMs : 0, this.prevNodes = this.nodes.map(((CC, zC) => this.neighbour(zC, -1))), this.nextNodes = this.nodes.map(((CC, zC) => this.neighbour(zC, 1))), this.prevGaps = this.prevNodes.map(((CC, zC) => CC >= 0 ? this.gapMs(zC, -1) : 0)), this.nextGaps = this.nextNodes.map(((CC, zC) => CC >= 0 ? this.gapMs(zC, 1) : 0)), this.velocities = this.nodes.map(((CC, zC) => {
          const ZC = this.prevNodes[zC],
            QC = this.nextNodes[zC];
          return function(CC, zC, ZC, QC, wC, bC) {
            if (bC[0] = 0, bC[1] = 0, bC[2] = 0, !CC && !ZC) return bC;
            const nC = null !== CC && void 0 !== CC ? CC : iC(null !== ZC && void 0 !== ZC ? ZC : zC, zC),
              fC = null !== ZC && void 0 !== ZC ? ZC : iC(null !== CC && void 0 !== CC ? CC : zC, zC),
              oC = CC ? QC : wC,
              qC = ZC ? wC : QC,
              FC = xC(nC, zC),
              WC = xC(zC, fC);
            if (FC < PC || WC < PC) return bC;
            const NC = Math.sqrt(FC),
              MC = Math.sqrt(WC),
              gC = (NC + MC) / (oC + qC);
            for (let SC = 0; SC < 3; SC++) {
              const CC = (zC[SC] - nC[SC]) / NC - (fC[SC] - nC[SC]) / (NC + MC) + (fC[SC] - zC[SC]) / MC;
              bC[SC] = CC * gC
            }
            return bC
          }(ZC >= 0 ? this.nodes[ZC].position : null, CC.position, QC >= 0 ? this.nodes[QC].position : null, this.prevGaps[zC], this.nextGaps[zC], [0, 0, 0])
        })), this.aim = new KC(this.nodes, this.velocities, this.prevNodes, this.nextNodes, zC)
      }
      sample(CC, zC, ZC, QC) {
        const wC = this.findSegment(this.pathTime(CC));
        this.samplePosition(wC, QC.position), this.aim.sample(wC, zC, QC);
        const {
          beforeIndex: bC,
          afterIndex: nC
        } = wC;
        QC.fov = eC(wC, bC >= 0 ? this.fovAt(bC, ZC) : 0, this.fovAt(wC.index, ZC), this.fovAt(wC.toIndex, ZC), nC >= 0 ? this.fovAt(nC, ZC) : 0, bC >= 0, nC >= 0)
      }
      pathTime(CC) {
        const zC = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || CC <= zC) return CC;
        const ZC = CC - zC;
        return zC + ZC - this.loopMs * Math.floor(ZC / this.loopMs)
      }
      findSegment(CC) {
        const zC = this.nodes,
          ZC = this.segment;
        let QC = ZC.index;
        for (CC < zC[QC].timeMs && (QC = 0); QC < zC.length - 2 && zC[QC + 1].timeMs <= CC;) QC++;
        const wC = Math.min(QC + 1, zC.length - 1),
          nC = zC[wC].timeMs - zC[QC].timeMs;
        return ZC.index = QC, ZC.toIndex = wC, ZC.segmentMs = nC, ZC.u = nC > 0 ? (0, bC.o)((CC - zC[QC].timeMs) / nC, zC[QC].easing) : 1, ZC.curved = this.smooth && nC > 0, ZC.beforeIndex = this.prevNodes[QC], ZC.afterIndex = this.nextNodes[wC], ZC.beforeMs = this.prevGaps[QC], ZC.afterMs = this.nextGaps[wC], ZC
      }
      samplePosition(CC, zC) {
        const {
          fromTangent: ZC,
          toTangent: QC,
          curved: wC
        } = CC, bC = this.nodes[CC.index].position, nC = this.nodes[CC.toIndex].position;
        JC(this.velocities[CC.index], bC, nC, CC.segmentMs, wC, ZC), JC(this.velocities[CC.toIndex], bC, nC, CC.segmentMs, wC, QC);
        const fC = CC.u;
        for (let oC = 0; oC < 3; oC++) zC[oC] = wC ? RC(bC[oC], ZC[oC], nC[oC], QC[oC], fC) : bC[oC] + (nC[oC] - bC[oC]) * fC
      }
      fovAt(CC, zC) {
        var ZC;
        return null !== (ZC = this.nodes[CC].keyframe.fov) && void 0 !== ZC ? ZC : zC
      }
      neighbour(CC, zC) {
        const ZC = this.nodes.length - 1,
          QC = CC + zC;
        return QC >= 0 && QC <= ZC ? QC : this.loopMs <= 0 || ZC < 2 ? -1 : QC < 0 ? ZC - 1 : 1
      }
      gapMs(CC, zC) {
        const ZC = this.nodes.length - 1;
        if (1 === zC) {
          const zC = CC === ZC ? 0 : CC;
          return this.nodes[zC + 1].timeMs - this.nodes[zC].timeMs
        }
        const QC = 0 === CC ? ZC : CC;
        return this.nodes[QC].timeMs - this.nodes[QC - 1].timeMs
      }
    }
    class mC {
      constructor(CC) {
        this.fN = CC, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = zC => CC.getEntityPosition(zC), this.readAimPoint = zC => CC.getEntityAimPoint(zC)
      }
      aimPoint(CC) {
        return "string" !== typeof CC ? (0, oC.n)(CC, 3) ? CC : null : this.resolve(CC, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(CC) {
        const zC = "string" === typeof CC ? this.fN.getEntityAimPoint(CC) : CC;
        return zC && (0, oC.n)(zC, 3) ? zC : null
      }
      feetPosition(CC) {
        return this.resolve(CC, this.readFeet, this.lastFeet)
      }
      heading(CC) {
        const zC = this.fN.getEntityHeading(CC);
        if (null !== zC && Number.isFinite(zC)) return this.lastHeadings.set(CC, zC), zC;
        const ZC = this.lastHeadings.get(CC);
        return void 0 !== ZC ? ZC : CC === this.fN.localPlayerId ? 0 : this.heading(this.fN.localPlayerId)
      }
      resolve(CC, zC, ZC) {
        const QC = zC(CC);
        let wC = ZC.get(CC);
        return QC && (0, oC.n)(QC, 3) ? (wC || (wC = [0, 0, 0], ZC.set(CC, wC)), wC[0] = QC[0], wC[1] = QC[1], wC[2] = QC[2], wC) : wC || (CC === this.fN.localPlayerId ? null : this.resolve(this.fN.localPlayerId, zC, ZC))
      }
    }

    function HC(CC) {
      return {
        heading: CC.heading,
        pitch: CC.pitch
      }
    }

    function EC(CC, zC) {
      Number.isFinite(CC.heading) && Number.isFinite(CC.pitch) || (0, wC.h)(zC, CC)
    }

    function lC(CC, zC, ZC, QC, bC) {
      if (zC) return void(0, wC.j)(zC, bC);
      const nC = QC.aimPoint(ZC);
      nC && (0, wC.o)(CC, nC, bC)
    }
    class XC {
      constructor(CC, zC, ZC, QC) {
        this.settings = CC, this.fN = zC, this.targets = ZC, this.base = void 0, this.base = HC(QC)
      }
      update(CC, zC, ZC) {
        var QC;
        const wC = this.settings;
        (0, oC.h)(wC.position, ZC.position), lC(wC.position, wC.lookDirection, null !== (QC = wC.lookAt) && void 0 !== QC ? QC : this.fN.localPlayerId, this.targets, this.base), zC.apply(this.base, ZC), ZC.fov = MC(wC, this.fN)
      }
      continueFrom(CC) {
        CC instanceof XC && (0, wC.h)(CC.base, this.base)
      }
      reset(CC) {
        EC(this.base, CC)
      }
    }
    class cC {
      constructor(CC, zC, ZC, QC) {
        this.settings = CC, this.fN = zC, this.targets = ZC, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Np = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = HC(QC), this.goal = [...QC.position]
      }
      update(CC, zC, ZC) {
        var QC, wC, bC;
        const nC = this.settings,
          fC = null !== (QC = nC.target) && void 0 !== QC ? QC : this.fN.localPlayerId,
          qC = this.targets.feetPosition(fC);
        let FC = !1;
        qC && (FC = this.foundFeet && xC(this.lastFeet, qC) > 32 + .1 * CC, (0, oC.h)(qC, this.lastFeet), this.foundFeet = !0, this.placeGoal(qC, fC));
        const WC = null !== (wC = nC.smoothMs) && void 0 !== wC ? wC : 0;
        !this.started || WC < 1 || FC ? ((0, oC.h)(this.goal, this.smoothed), this.Np.fill(0), this.started = !0) : gC(this.smoothed, this.Np, this.goal, WC, CC), FC && (this.distance = -1), (0, oC.h)(this.smoothed, ZC.position);
        const NC = !0 === nC.avoidTerrain ? this.pullIn(fC, CC, ZC) : 1;
        let SC = this.goal;
        if ("target" === nC.offsetSpace) SC = ZC.position;
        else if (NC < 1) {
          SC = this.aimOrigin;
          for (let CC = 0; CC < 3; CC++) SC[CC] = ZC.position[CC] + (this.goal[CC] - this.smoothed[CC]) * NC
        }
        lC(SC, nC.lookDirection, null !== (bC = nC.lookAt) && void 0 !== bC ? bC : fC, this.targets, this.base), zC.apply(this.base, ZC), ZC.fov = MC(nC, this.fN)
      }
      continueFrom(CC) {
        CC instanceof cC && (0, QC.s)(CC.settings.target, this.settings.target) && ((0, wC.h)(CC.base, this.base), (0, oC.h)(CC.goal, this.goal), (0, oC.h)(CC.lastFeet, this.lastFeet), this.foundFeet = CC.foundFeet, (0, oC.h)(CC.smoothed, this.smoothed), (0, oC.h)(CC.Np, this.Np), this.started = CC.started, !0 === CC.settings.avoidTerrain && (this.distance = CC.distance))
      }
      reset(CC) {
        EC(this.base, CC), this.Np.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(CC, zC, ZC) {
        const QC = this.targets.aimPoint(CC);
        if (!QC) return 1;
        const wC = ZC.position,
          bC = xC(QC, wC);
        if (!(bC > 0)) return 1;
        const nC = this.toCamera;
        for (let oC = 0; oC < 3; oC++) nC[oC] = (wC[oC] - QC[oC]) / bC;
        const fC = function(CC, zC, ZC) {
          return CC < 0 || zC < CC ? zC : zC + (CC - zC) * Math.exp(-ZC / 150)
        }(this.distance, function(CC, zC, ZC, QC) {
          const wC = CC.raycastTerrain(zC, ZC, QC);
          return null !== wC && Number.isFinite(wC) ? Math.min(QC, Math.max(0, wC - .2)) : QC
        }(this.fN, QC, nC, bC), zC);
        if (bC - fC < .001) return this.distance = -1, 1;
        this.distance = fC;
        for (let oC = 0; oC < 3; oC++) wC[oC] = QC[oC] + nC[oC] * fC;
        return fC / bC
      }
      placeGoal(CC, zC) {
        const ZC = this.settings.offset;
        let QC = ZC[0],
          wC = ZC[2];
        if ("target" === this.settings.offsetSpace) {
          const CC = this.targets.heading(zC),
            bC = Math.cos(CC),
            nC = Math.sin(CC);
          QC = ZC[0] * bC + ZC[2] * nC, wC = -ZC[0] * nC + ZC[2] * bC
        }
        this.goal[0] = CC[0] + QC, this.goal[1] = CC[1] + ZC[1], this.goal[2] = CC[2] + wC
      }
    }
    class uC {
      constructor(CC, zC, ZC, QC) {
        var wC, bC;
        this.settings = CC, this.fN = zC, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = CC.keyframes.length > 0 ? new dC(CC.keyframes, null === (wC = CC.smooth) || void 0 === wC || wC, null !== (bC = CC.loop) && void 0 !== bC && bC) : null, this.base = (0, oC.g)(QC, (0, oC.k)()), this.resolveTarget = CC => ZC.aimPoint(CC)
      }
      update(CC, zC, ZC) {
        this.elapsedMs += CC;
        const QC = MC(this.settings, this.fN);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, QC, this.base) : this.base.fov = QC, (0, oC.h)(this.base.position, ZC.position), ZC.fov = this.base.fov, zC.apply(this.base, ZC)
      }
      continueFrom(CC) {
        CC instanceof uC && (0, QC.s)(CC.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = CC.elapsedMs, (0, oC.g)(CC.base, this.base))
      }
      reset(CC) {
        EC(this.base, CC), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function rC(CC, zC) {
      return (0, QC.u)(CC, zC)
    }
    class sC {
      constructor(CC, zC, ZC) {
        var QC;
        this.settings = CC, this.fN = zC, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const wC = null !== ZC && ZC.settings.mode === CC.mode,
          bC = wC ? ZC.pose : zC.getDefaultPose();
        this.pose = (0, oC.g)(bC, (0, oC.k)()), this.lastGoodPose = (0, oC.g)(wC ? ZC.lastGoodPose : bC, (0, oC.k)()), this.look = new pC(CC.playerLook), this.targets = null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.targets) && void 0 !== QC ? QC : new mC(zC);
        const nC = (0, oC.g)(bC, (0, oC.k)());
        wC && ZC.look.unapply(nC, nC), this.mode = function(CC, zC, ZC, QC) {
          switch (CC.mode) {
            case "fixed":
              return new XC(CC, zC, ZC, QC);
            case "follow":
              return new cC(CC, zC, ZC, QC);
            case "path":
              return new uC(CC, zC, ZC, QC);
            case "frame":
              return new SC(CC, zC, ZC, QC)
          }
        }(CC, zC, this.targets, nC), wC && (this.look.continueFrom(ZC.look), this.mode.continueFrom(ZC.mode))
      }
      update(CC, zC) {
        return this.look.update(CC, zC), this.mode.update(CC, this.look, this.pose), (0, oC.l)(this.pose) ? (0, oC.g)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, oC.g)(this.lastGoodPose, this.pose), this.mode.reset((0, oC.l)(this.lastGoodPose) ? this.lastGoodPose : this.fN.getDefaultPose())), this.pose
      }
    }

    function TC(CC) {
      return [0, 0, CC[2], CC[3]]
    }
    class aC {
      constructor(CC) {
        this.fN = CC, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new fC, this.shot = null, this.blend = null, this.mixed = (0, oC.k)(), this.output = (0, oC.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(CC) {
        const zC = (0, qC.d)(CC);
        if ((0, QC.s)(zC, this.pending ? this.pending.settings : this.settings)) return;
        const ZC = rC(this.settings, zC);
        if (void 0 !== zC.transition && !ZC) return this.pending = {
          settings: zC,
          shot: "default" === zC.mode ? null : new sC(zC, this.fN, null)
        }, void this.fade.fadeOut(zC.transition);
        const wC = null !== this.pending;
        this.pending = null, !wC && ZC || this.fade.fadeIn(QC.k.minTransitionFadeMs), this.show(zC, !1)
      }
      show(CC, zC) {
        var ZC, wC;
        if ((0, QC.s)(CC, this.settings)) return;
        const nC = !zC && rC(this.settings, CC);
        this.settings = CC;
        const fC = null !== this.blend && this.blend.elapsedMs > 0,
          qC = (0, oC.g)(this.hasOutput ? this.output : this.fN.getDefaultPose(), (0, oC.k)());
        if (this.shot = "default" === CC.mode ? null : new sC(CC, this.fN, zC ? null : this.shot), nC) return;
        const FC = zC || !this.shot && !this.hasOutput ? 0 : null !== (ZC = CC.blendInMs) && void 0 !== ZC ? ZC : 0;
        if (FC <= 0) return void(this.blend = null);
        const WC = (0, bC.p)(null !== (wC = CC.blendEasing) && void 0 !== wC ? wC : "easeInOut");
        this.blend = {
          from: qC,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: FC,
          easing: fC ? TC(WC) : WC
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
      update(CC, zC) {
        const ZC = Number.isFinite(CC) && CC > 0 ? CC : 0;
        if (this.fade.advance(ZC) && null !== this.pending) {
          const {
            settings: CC
          } = this.pending;
          this.pending = null, this.show(CC, !0)
        }
        this.loadingPositions.length = 0;
        const QC = this.pending;
        if (null !== QC && void 0 !== QC && QC.shot) {
          const CC = "path" === QC.settings.mode ? 0 : ZC;
          this.noteLoadingPosition(QC.shot.update(CC, oC.e).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const nC = this.shot ? this.shot.update(ZC, zC) : this.fN.getDefaultPose();
        this.shot && this.noteLoadingPosition(nC.position);
        const fC = this.blend;
        if (!fC) return this.writeOutput(nC);
        fC.elapsedMs += ZC;
        const qC = Math.min(1, fC.elapsedMs / fC.durationMs);
        if (fC.headingDelta = Number.isFinite(fC.headingDelta) ? (0, wC.w)(fC.headingDelta, nC.heading - fC.from.heading) : (0, wC.t)(fC.from.heading, nC.heading), (0, oC.p)(fC.from, nC, fC.headingDelta, (0, bC.o)(qC, fC.easing), this.mixed), qC >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else fC.fromScripted && this.noteLoadingPosition(fC.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(CC) {
        if (CC.every(Number.isFinite)) {
          const zC = this.loadingPositions;
          zC.push((0, oC.h)(CC, this.loadingSlots[zC.length]))
        }
      }
      writeOutput(CC) {
        const zC = this.output;
        (0, oC.l)(CC) ? (0, oC.g)(CC, zC) : this.hasOutput || (0, oC.g)(this.fN.getDefaultPose(), zC), zC.pitch = (0, wC.g)(zC.pitch);
        const ZC = this.fN.getDefaultFov(),
          bC = Number.isFinite(ZC) && ZC > 0 && ZC < 180,
          nC = bC ? Math.min(QC.k.minFov, ZC) : QC.k.minFov,
          fC = bC ? Math.max(QC.k.maxFov, ZC) : QC.k.maxFov;
        return zC.fov = Number.isFinite(zC.fov) ? Math.min(fC, Math.max(nC, zC.fov)) : fC, this.hasOutput = !0, zC
      }
    }
  },
  39e3: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC,
      g: () => fC,
      h: () => nC,
      k: () => bC,
      l: () => qC,
      n: () => oC,
      p: () => FC
    });
    var QC = ZC(39005);
    const wC = {
      VY: 0,
      Zm: 0
    };

    function bC() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function nC(CC, zC) {
      return zC[0] = CC[0], zC[1] = CC[1], zC[2] = CC[2], zC
    }

    function fC(CC, zC) {
      return nC(CC.position, zC.position), zC.heading = CC.heading, zC.pitch = CC.pitch, zC.fov = CC.fov, zC
    }

    function oC(CC, zC) {
      return Array.isArray(CC) && CC.length === zC && CC.every(Number.isFinite)
    }

    function qC(CC) {
      return oC(CC.position, 3) && Number.isFinite(CC.heading) && Number.isFinite(CC.pitch) && Number.isFinite(CC.fov)
    }

    function FC(CC, zC, ZC, wC, bC) {
      for (let QC = 0; QC < 3; QC++) bC.position[QC] = CC.position[QC] + (zC.position[QC] - CC.position[QC]) * wC;
      return bC.heading = (0, QC.s)(CC.heading + ZC * wC), bC.pitch = CC.pitch + (zC.pitch - CC.pitch) * wC, bC.fov = CC.fov + (zC.fov - CC.fov) * wC, bC
    }
  },
  39028: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => IC,
      e: () => NC
    });
    var QC = ZC(39022),
      wC = ZC(39e3);
    const bC = QC.g,
      nC = QC.m;

    function fC(CC, zC, ZC, QC) {
      return Number.isFinite(CC) ? Math.min(ZC, Math.max(zC, CC)) : QC
    }

    function oC(CC, zC, ZC) {
      return void 0 !== CC && Number.isFinite(CC) ? Math.min(ZC, Math.max(zC, CC)) : void 0
    }

    function qC(CC) {
      const zC = QC.k.maxCoordinate;
      return [Math.min(zC, Math.max(-zC, CC[0])), Math.min(zC, Math.max(-zC, CC[1])), Math.min(zC, Math.max(-zC, CC[2]))]
    }

    function FC(CC) {
      return "string" === typeof CC ? CC : (0, wC.n)(CC, 3) ? qC(CC) : void 0
    }
    const WC = new RegExp(QC.o);

    function NC(CC) {
      return "string" === typeof CC && WC.test(CC)
    }

    function MC(CC) {
      const zC = [];
      if (!Array.isArray(CC)) return zC;
      for (const ZC of CC.slice(0, QC.k.maxFrameTargets)) {
        const CC = FC(ZC);
        void 0 === CC || "string" === typeof CC && !NC(CC) || zC.push(CC)
      }
      return zC
    }

    function gC(CC) {
      if (!(0, wC.n)(CC, 3)) return;
      const zC = Math.max(Math.abs(CC[0]), Math.abs(CC[1]), Math.abs(CC[2])),
        ZC = Math.hypot(CC[0] / zC, CC[1] / zC, CC[2] / zC);
      return 0 === zC || zC * ZC < QC.k.minDirectionLength ? void 0 : [CC[0] / zC / ZC, CC[1] / zC / ZC, CC[2] / zC / ZC]
    }

    function SC(CC) {
      if (void 0 !== CC) return "string" === typeof CC ? bC.includes(CC) ? CC : void 0 : (0, wC.n)(CC, 4) ? [fC(CC[0], 0, 1, 0), fC(CC[1], QC.k.minEasingY, QC.k.maxEasingY, 0), fC(CC[2], 0, 1, 1), fC(CC[3], QC.k.minEasingY, QC.k.maxEasingY, 1)] : "linear"
    }

    function pC(CC) {
      if (CC) return {
        maxYaw: fC(CC.maxYaw, 0, QC.k.maxPlayerLook, 0),
        maxPitch: fC(CC.maxPitch, 0, QC.k.maxPlayerLook, 0),
        returnMs: oC(CC.returnMs, 0, QC.k.maxReturnMs)
      }
    }
    const PC = new RegExp(QC.b);

    function GC(CC) {
      var zC;
      if ("object" !== typeof CC || null === CC) return;
      const ZC = QC.k.maxTransitionMs,
        wC = QC.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof CC.colour && PC.test(CC.colour) ? CC.colour : QC.f,
        outMs: fC(CC.outMs, wC, ZC, wC),
        holdMs: fC(null !== (zC = CC.holdMs) && void 0 !== zC ? zC : 0, 0, ZC, 0),
        inMs: fC(CC.inMs, wC, ZC, wC)
      }
    }

    function RC(CC) {
      return !0 === CC || void 0
    }

    function AC(CC) {
      if ("object" !== typeof CC || null === CC) return !1;
      const zC = CC.lookAt;
      return Number.isFinite(CC.timeMs) && (0, wC.n)(CC.position, 3) && (void 0 === zC || "string" === typeof zC || (0, wC.n)(zC, 3))
    }

    function xC(CC) {
      return {
        ...CC,
        timeMs: fC(CC.timeMs, 0, QC.k.maxPathMs, 0),
        position: qC(CC.position),
        lookAt: FC(CC.lookAt),
        lookDirection: gC(CC.lookDirection),
        fov: oC(CC.fov, QC.k.minFov, QC.k.maxFov),
        easing: SC(CC.easing)
      }
    }

    function JC(CC) {
      const zC = [];
      if (!Array.isArray(CC)) return zC;
      for (const ZC of CC.slice(0, QC.k.maxKeyframes)) {
        if (!AC(ZC)) continue;
        const CC = xC(ZC);
        (0 === zC.length || CC.timeMs > zC[zC.length - 1].timeMs) && zC.push(CC)
      }
      return zC
    }

    function IC(CC) {
      if ("object" !== typeof CC || null === CC) return {
        mode: "default"
      };
      const zC = {
          blendInMs: oC(CC.blendInMs, 0, QC.k.maxBlendInMs),
          blendEasing: SC(CC.blendEasing),
          transition: GC(CC.transition),
          letterbox: RC(CC.letterbox),
          hideHud: RC(CC.hideHud)
        },
        ZC = {
          mode: "default",
          ...zC
        };
      if ("default" === CC.mode || "fixed" === CC.mode && !(0, wC.n)(CC.position, 3)) return ZC;
      const bC = {
        ...zC,
        fov: oC(CC.fov, QC.k.minFov, QC.k.maxFov),
        playerFacing: (WC = CC.playerFacing, nC.includes(WC) ? WC : void 0),
        playerLook: pC(CC.playerLook)
      };
      var WC, NC;
      switch (CC.mode) {
        case "fixed":
          return {
            ...CC, ...bC, position: qC(CC.position), lookAt: FC(CC.lookAt), lookDirection: gC(CC.lookDirection)
          };
        case "follow":
          return {
            ...CC, ...bC, target: "string" === typeof CC.target ? CC.target : void 0, lookAt: FC(CC.lookAt), offset: (NC = CC.offset, Array.isArray(NC) ? [fC(NC[0], -QC.k.maxOffset, QC.k.maxOffset, 0), fC(NC[1], -QC.k.maxOffset, QC.k.maxOffset, 0), fC(NC[2], -QC.k.maxOffset, QC.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: gC(CC.lookDirection), smoothMs: oC(CC.smoothMs, 0, QC.k.maxSmoothMs)
          };
        case "path":
          return {
            ...CC, ...bC, keyframes: JC(CC.keyframes)
          };
        case "frame":
          return {
            ...CC, ...bC, targets: MC(CC.targets), viewHeading: oC(CC.viewHeading, -QC.k.maxFrameHeading, QC.k.maxFrameHeading), viewElevation: oC(CC.viewElevation, 0, QC.k.maxFrameElevation), padding: oC(CC.padding, 0, QC.k.maxFrameDistance), closestDistance: oC(CC.closestDistance, 0, QC.k.maxFrameDistance), furthestDistance: oC(CC.furthestDistance, 0, QC.k.maxFrameDistance), smoothMs: oC(CC.smoothMs, 0, QC.k.maxSmoothMs)
          };
        default:
          return ZC
      }
    }
  },
  38487: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC
    });
    var QC = ZC(1169);

    function wC(CC) {
      const zC = /(\d*\.?\d+)px/.exec(CC);
      return zC ? Number(zC[1]) : null
    }

    function bC(CC) {
      return CC.split(/[\s,]+/).pop()
    }
    let nC = !1;
    const fC = {
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
      drawText: function(CC, zC, QC, fC, oC, qC) {
        if (oC <= 0 || qC <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: FC,
          fontVariant: WC,
          fontWeight: NC,
          fontSize: MC,
          font: gC
        } = this, SC = [FC, WC, NC, `${MC}px`, gC].filter(Boolean).join(" "), pC = [
          [NC, `${MC}px`, bC(gC)].filter(Boolean).join(" "), `${MC}px sans-serif`
        ], PC = CC.font, GC = function(CC, zC, ZC) {
          for (const QC of zC) {
            CC.font = QC;
            const zC = wC(CC.font),
              nC = bC(QC);
            if (null !== zC && Math.abs(zC - ZC) <= .5 && CC.font.toLowerCase().includes(nC.toLowerCase())) return QC
          }
          return null
        }(CC, [SC, ...pC], MC);
        GC !== SC && function(CC, zC, QC) {
          nC || (nC = !0, Promise.resolve().then((() => ZC(1029))).then((ZC => {
            let {
              IS: wC
            } = ZC;
            wC(new Error("A canvas didn't take canvasTxt's font"), {
              font: CC,
              lM: zC,
              drawnWith: null !== QC && void 0 !== QC ? QC : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(SC, PC, GC);
        const RC = wC(CC.font);
        if (null === GC && null !== RC && RC > 0) {
          const ZC = MC / RC;
          CC.save();
          try {
            return CC.scale(ZC, ZC), {
              height: this.drawLines(CC, zC, QC / ZC, fC / ZC, oC / ZC, qC / ZC, RC).height * ZC
            }
          } finally {
            CC.restore()
          }
        }
        return this.drawLines(CC, zC, QC, fC, oC, qC, MC)
      },
      drawLines: function(CC, zC, ZC, wC, bC, nC, fC) {
        const oC = ZC + bC,
          qC = wC + nC;
        let FC, WC = wC + nC / 2 + fC / 2;
        "right" === this.align ? (FC = oC, CC.textAlign = "right") : "left" === this.align ? (FC = ZC, CC.textAlign = "left") : (FC = ZC + bC / 2, CC.textAlign = "center");
        for (const QC of zC) {
          CC.measureText(QC).width >= bC && (zC = zC.replace(QC, ""))
        }
        zC = (0, QC.bb)(zC);
        const NC = [],
          MC = zC.split("\n"),
          gC = this.justify ? CC.measureText("\u200a").width : 0;
        MC.forEach((zC => {
          let ZC = CC.measureText(zC).width;
          if (ZC <= bC) NC.push(zC);
          else {
            let QC = zC;
            const wC = bC;
            let nC, fC, oC;
            for (ZC = CC.measureText(QC).width; ZC > wC;) {
              for (nC = 0, fC = 0, oC = ""; fC < wC;) nC++, oC = QC.substr(0, nC), fC = CC.measureText(oC).width;
              nC--, oC = oC.substr(0, nC);
              const zC = nC;
              if (" " !== QC.substr(nC, 1)) {
                for (;
                  " " !== QC.substr(nC, 1) && 0 !== nC;) nC--;
                0 === nC && (nC = zC), oC = QC.substr(0, nC)
              }
              oC = this.justify ? this.justifyLine(CC, oC, gC, "\u200a", bC) : oC, QC = QC.substr(nC), ZC = CC.measureText(QC).width, NC.push(oC)
            }
            ZC > 0 && NC.push(QC)
          }
        }));
        const SC = this.lineHeight ? this.lineHeight : this.getTextHeight(CC, zC),
          pC = SC * (NC.length - 1),
          PC = pC / 2;
        let GC = wC;
        "top" === this.vAlign ? WC = wC + fC : "bottom" === this.vAlign ? (WC = qC - pC, GC = qC) : (GC = wC + nC / 2, WC -= PC), NC.forEach((zC => {
          zC = zC.trim(), CC.fillText(zC, FC, WC), WC += SC
        })), this.debug && (CC.lineWidth = 3, CC.strokeStyle = "#00909e", CC.strokeRect(ZC, wC, bC, nC), CC.lineWidth = 2, CC.strokeStyle = "#f6d743", CC.beginPath(), CC.moveTo(FC, wC), CC.lineTo(FC, qC), CC.stroke(), CC.strokeStyle = "#ff6363", CC.beginPath(), CC.moveTo(ZC, GC), CC.lineTo(oC, GC), CC.stroke());
        return {
          height: pC + SC
        }
      },
      getTextHeight: function(CC, zC) {
        const ZC = CC.textBaseline;
        CC.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: QC
        } = CC.measureText(zC);
        return CC.textBaseline = ZC, QC
      },
      justifyLine: function(CC, zC, ZC, QC, wC) {
        const bC = zC.trim(),
          nC = CC.measureText(bC).width,
          fC = bC.split(/\s+/).length - 1,
          oC = Math.floor((wC - nC) / ZC);
        if (fC <= 0 || oC <= 0) return bC;
        const qC = Math.floor(oC / fC);
        let FC = oC - fC * qC,
          WC = [];
        for (let NC = 0; NC < qC; NC++) WC.push(QC);
        WC = WC.join("");
        return bC.replace(/\s+/g, (CC => {
          const zC = FC > 0 ? WC + QC : WC;
          return FC--, CC + zC
        }))
      }
    }
  },
  38964: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return zC.set(CC), zC
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  38493: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => SC,
      f: () => gC,
      j: () => NC,
      n: () => FC,
      q: () => WC
    });
    var QC = ZC(4179),
      wC = ZC(326);
    const bC = 1024,
      nC = 1536,
      fC = 2 * QC.j + 1,
      oC = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      qC = 1.5;

    function FC(CC, zC, ZC) {
      if ("string" !== typeof CC) return zC;
      try {
        const ZC = JSON.parse(CC);
        return ZC && "object" === typeof ZC ? ZC : zC
      } catch (QC) {
        return void 0 !== ZC && console.error(`Couldn't parse ${ZC}`, QC), zC
      }
    }

    function WC(CC) {
      return FC(CC, null, "a leaderboard's rows")
    }

    function NC(CC, zC) {
      var ZC, QC;
      return null !== zC && void 0 !== zC ? zC : {
        status: null !== (ZC = CC.status) && void 0 !== ZC ? ZC : "loading",
        entries: null !== (QC = CC.entries) && void 0 !== QC ? QC : []
      }
    }

    function MC(CC, zC) {
      return "number" === typeof CC && Number.isFinite(CC) && CC > 0 ? CC : zC
    }

    function gC(CC, zC) {
      const ZC = MC(CC.size, 1);
      let QC = MC(CC.width, MC(2.5 * ZC, 2.5)),
        wC = MC(CC.height, MC(3.75 * ZC, 3.75));
      Number.isFinite(bC * wC / QC) && Number.isFinite(nC * QC / wC) || (QC = 2.5, wC = 3.75);
      const fC = wC / QC,
        oC = Math.max(1, Math.min(bC, zC / fC));
      return {
        width: QC,
        height: wC,
        layoutWidth: Math.max(bC, nC / fC),
        layoutHeight: Math.max(nC, bC * fC),
        pixelWidth: Math.round(oC),
        pixelHeight: Math.round(Math.max(1, Math.min(zC, oC * fC)))
      }
    }

    function SC(CC, zC, ZC, nC, FC, WC) {
      CC.setTransform(1, 0, 0, 1, 0, 0), CC.fillStyle = wC.H.defaultNameTagBackground, CC.fillRect(0, 0, zC, ZC), CC.scale(zC / nC.layoutWidth, ZC / nC.layoutHeight), CC.translate((nC.layoutWidth - bC) / 2, 0),
        function(CC, zC, ZC, bC) {
          var nC, FC, WC, NC;
          const {
            top: MC,
            around: gC,
            showPlayerText: SC,
            localPlayerDbId: GC
          } = ZC, {
            whiteUiText: RC,
            grayUiText: AC,
            yellowUiText: xC
          } = wC.H;
          CC.textBaseline = "middle";
          const JC = function(zC, ZC, QC, wC, bC, nC) {
              let fC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              CC.font = `bold ${wC}px 'Jetbrains Mono', monospace`, CC.fillStyle = bC, CC.textAlign = fC;
              let oC = zC.replace(/[\r\n\t]/g, " ");
              if (CC.measureText(oC).width > nC) {
                for (; oC.length > 0 && CC.measureText(`${oC}\u2026`).width > nC;) oC = oC.slice(0, -1);
                oC += "\u2026"
              }
              CC.fillText(oC, ZC, QC)
            },
            IC = zC => {
              CC.fillStyle = RC, CC.globalAlpha = .15, CC.fillRect(24, zC, 976, 2), CC.globalAlpha = 1
            },
            iC = null === GC ? null : (0, wC.ac)(GC),
            vC = CC => null !== iC && CC.playerHash === iC,
            eC = pC(MC.entries, QC.l),
            hC = "ready" === MC.status && eC.length > 0,
            KC = null === gC ? [] : pC(gC.entries, fC),
            YC = eC.some(vC),
            dC = null === gC ? null : function(CC) {
              const zC = CC;
              if (!zC || !Number.isFinite(zC.rank) || !Number.isFinite(zC.tied) || !Number.isFinite(zC.total)) return null;
              return zC
            }(gC.standing),
            mC = KC.find(vC),
            HC = eC.find(vC),
            EC = null === dC || void 0 === mC ? null : {
              value: mC.value,
              rank: dC.rank
            },
            lC = PC(eC, void 0 === HC || HC.value === (null === EC || void 0 === EC ? void 0 : EC.value) ? EC : null),
            XC = PC(KC, EC),
            cC = (CC, zC) => {
              const ZC = CC.findIndex(vC);
              return ZC >= 0 ? zC[ZC] : null
            },
            uC = null !== (nC = null !== (FC = null === dC || void 0 === dC ? void 0 : dC.rank) && void 0 !== FC ? FC : cC(KC, XC)) && void 0 !== nC ? nC : cC(eC, lC);
          CC.font = "bold 34px 'Jetbrains Mono', monospace";
          const rC = [...hC ? lC : [], ...YC ? [] : XC],
            sC = Math.min(280, Math.max(0, ...rC.map((zC => CC.measureText(oC.format(zC)).width)))),
            TC = sC <= 80,
            aC = TC ? 80 : 32 + sC,
            tC = TC ? 148 : aC + 28,
            DC = 660 - tC;
          JC(`TOP ${QC.l}  /  ALL TIME`, 24, 52, 28, AC, 976), JC(SC ? String(null !== (WC = zC.title) && void 0 !== WC ? WC : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, RC, 976), JC("RANK", 32, 174, 28, AC, tC - 40), JC("PLAYER", tC, 174, 28, AC, DC), JC(SC ? String(null !== (NC = zC.scoreLabel) && void 0 !== NC ? NC : "Score").slice(0, 24) : "Score", 992, 174, 28, AC, 304, "right"), IC(202);
          const jC = (bC - 232) / (QC.l + qC + fC),
            yC = 208 + QC.l * jC,
            LC = yC + qC * jC,
            UC = (zC, ZC, QC, wC) => {
              const bC = vC(zC);
              CC.fillStyle = bC ? xC : RC, CC.globalAlpha = bC ? .15 : wC ? .035 : 0, CC.fillRect(24, QC - jC / 2 + 1, 976, jC - 2), CC.globalAlpha = 1;
              const nC = bC ? xC : RC;
              JC(oC.format(ZC), aC, QC, 34, nC, TC ? 80 : sC, TC ? "center" : "right"), JC(SC ? String(zC.name).slice(0, 64) : "Player", tC, QC, 34, nC, DC);
              const fC = oC.format(zC.value);
              JC(CC.measureText(fC).width > 304 ? zC.value.toExponential(6) : fC, 992, QC, 34, nC, 304, "right")
            };
          if (hC)
            for (const [QC, wC] of eC.entries()) UC(wC, lC[QC], 208 + (QC + .5) * jC, QC % 2 === 0);
          else {
            const CC = "error" === MC.status,
              zC = CC ? "Couldn't load leaderboard" : "ready" === MC.status ? "No scores yet" : "Loading leaderboard\u2026",
              ZC = CC ? "Trying again shortly" : "ready" === MC.status ? "Be the first on the board!" : "Fetching the top players",
              QC = (208 + yC) / 2;
            JC(zC, 512, QC - 28, 40, CC ? wC.H.redUiText : RC, 960, "center"), JC(ZC, 512, QC + 27, 30, AC, 960, "center")
          }
          const BC = yC + qC * jC / 2;
          if (null === uC) IC(BC);
          else {
            const zC = null === dC ? 0 : dC.tied - 1,
              ZC = `YOUR RANK #${oC.format(uC)}${null===dC?"":` of ${oC.format(dC.total)}`}`;
            CC.font = "bold 36px 'Jetbrains Mono', monospace";
            const QC = Math.max(20, Math.min(36, Math.floor(34560 / CC.measureText(ZC).width)));
            JC(ZC, 512, BC - (zC > 0 ? 15 : 0), QC, xC, 960, "center"), zC > 0 && JC(`Tied with ${oC.format(zC)} other${1===zC?"":"s"}`, 512, BC + 24, 24, AC, 960, "center")
          }
          if (null === gC) return;
          const OC = LC + fC * jC / 2;
          if (YC) JC(`You're in the top ${QC.l}!`, 512, OC, 40, xC, 960, "center");
          else if (0 === KC.length) JC("You're not on this board yet", 512, OC, 34, AC, 960, "center");
          else
            for (const [QC, wC] of KC.entries()) UC(wC, XC[QC], LC + (QC + .5) * jC, QC % 2 === 0)
        }(CC, FC, WC, nC.layoutHeight)
    }

    function pC(CC, zC) {
      return Array.isArray(CC) ? CC.slice(0, zC).filter((CC => CC && Number.isFinite(CC.rank) && Number.isFinite(CC.value))) : []
    }

    function PC(CC, zC) {
      const ZC = [];
      let QC = !1;
      return CC.forEach(((wC, bC) => {
        if (null !== zC && wC.value === zC.value) return void ZC.push(zC.rank);
        const nC = bC > 0 && wC.value === CC[bC - 1].value;
        nC || (QC = 0 === bC && 1 !== wC.rank), ZC.push(nC && !QC ? ZC[bC - 1] : wC.rank)
      })), ZC
    }
  },
  38692: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      h: () => bC
    });
    const QC = 32;

    function wC(CC) {
      return Array.from(CC).length
    }

    function bC(CC) {
      const zC = [""];
      let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wC = "";
      const bC = () => {
        zC.push(""), ZC = 0, wC = ""
      };
      for (const nC of CC.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(nC)) bC();
        else if (/^\s+$/.test(nC)) wC += nC;
      else if (nC.length > 0) {
        const CC = Array.from(nC);
        ZC > 0 && ZC + wC.length + CC.length > QC && bC(), zC[zC.length - 1] += wC, ZC += wC.length, wC = "";
        for (const wC of CC) ZC >= QC && bC(), zC[zC.length - 1] += wC, ZC++
      }
      return zC[zC.length - 1] += wC, zC
    }
  },
  38961: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC
    });
    var QC = ZC(36512),
      wC = ZC.n(QC);
    const bC = [1, 1, 1];

    function nC(CC) {
      if (!CC) return [...bC];
      try {
        const [zC, ZC, QC] = wC()(CC).rgb().array();
        return [zC / 255, ZC / 255, QC / 255]
      } catch (zC) {
        return console.warn(`Invalid groundArrowPath colour "${CC}":`, zC), [...bC]
      }
    }
  },
  39060: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => fC,
      i: () => qC,
      j: () => oC
    });
    var QC = ZC(273),
      wC = ZC(2894);
    const bC = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      nC = 512;

    function fC(CC) {
      var zC;
      const ZC = Math.min(screen.width, screen.height) * (null !== (zC = (0, QC.c)()) && void 0 !== zC ? zC : (0, wC.m)());
      return Math.max(window.innerHeight * (0, wC.m)(), ZC) / (0, wC.q)(CC)
    }

    function oC(CC, zC, ZC) {
      return zC / (2 * Math.tan(ZC / 2)) > nC ? CC : qC(CC)
    }

    function qC(CC) {
      return CC.map((CC => CC.replace(bC, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  33998: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      e: () => fC,
      h: () => nC,
      l: () => wC,
      m: () => QC
    });
    const QC = {
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
      wC = "/textures/dayNight/sun.png",
      bC = "/textures/dayNight/moon.png",
      nC = "/textures/dayNight/stars",
      fC = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39022: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      f: () => WC,
      g: () => QC,
      k: () => oC,
      m: () => wC,
      o: () => qC,
      s: () => fC,
      u: () => nC
    });
    const QC = ["linear", "easeIn", "easeOut", "easeInOut"],
      wC = ["movement", "camera", "cursor"],
      bC = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function nC(CC, zC) {
      return fC(CC, zC, bC)
    }

    function fC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (CC === zC || Number.isNaN(CC) && Number.isNaN(zC)) return !0;
      if ("object" !== typeof CC || "object" !== typeof zC || null === CC || null === zC || Array.isArray(CC) !== Array.isArray(zC)) return !1;
      const QC = CC,
        wC = zC;
      for (const bC of new Set([...Object.keys(QC), ...Object.keys(wC)]))
        if (!ZC.includes(bC) && !fC(QC[bC], wC[bC])) return !1;
      return !0
    }
    const oC = {
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
      qC = "^-[1-9][0-9]*$",
      FC = "^#[0-9a-fA-F]{6}$",
      WC = "#000000"
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);