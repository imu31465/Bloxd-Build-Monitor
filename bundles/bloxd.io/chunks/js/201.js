export const id = 201;
export const ids = [201];
export const modules = {
  38666: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      constructor(QQ, FQ) {
        this.read = QQ, this.apply = FQ, this.release = null
      }
      turn(QQ, FQ) {
        const wQ = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: FQ,
          forcedCameraDirection: [QQ[0], QQ[1], QQ[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), FQ + 100),
          transitionMs: wQ
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(QQ) {
        null !== this.release && (clearTimeout(this.release.timer), QQ && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38174: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      f: () => qQ
    });
    const LQ = new Map;

    function qQ(QQ, FQ) {
      LQ.set(QQ, FQ)
    }

    function oQ(QQ) {
      return QQ ? LQ.get(QQ) : void 0
    }
  },
  39133: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    var LQ = wQ(37761);

    function qQ(QQ, FQ, wQ) {
      var qQ, oQ, DQ, kQ, vQ, mQ, uQ;
      const HQ = (0, LQ.d)(QQ, FQ, wQ[0], wQ[1], wQ[2]),
        bQ = HQ ? null !== (qQ = HQ.textCell) && void 0 !== qQ ? qQ : HQ.rect.anchor : wQ,
        YQ = FQ(bQ[0], bQ[1], bQ[2]);
      return {
        pos: [wQ[0], wQ[1], wQ[2]],
        noticeboardSpan: HQ && {
          width: HQ.rect.width,
          height: HQ.rect.height
        },
        text: null !== (oQ = null === YQ || void 0 === YQ || null === (DQ = YQ.persisted) || void 0 === DQ || null === (kQ = DQ.shared) || void 0 === kQ ? void 0 : kQ.text) && void 0 !== oQ ? oQ : "",
        textSize: null !== (vQ = null === YQ || void 0 === YQ || null === (mQ = YQ.persisted) || void 0 === mQ || null === (uQ = mQ.shared) || void 0 === uQ ? void 0 : uQ.textSize) && void 0 !== vQ ? vQ : null
      }
    }
  },
  38039: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      switch (QQ.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    wQ.d(FQ, {
      d: () => qQ,
      h: () => oQ,
      j: () => LQ
    });
    const qQ = 4,
      oQ = 3
  },
  38681: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ,
      f: () => oQ
    });
    var LQ = wQ(317);
    const qQ = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class oQ {
      constructor(QQ) {
        this.importGame = QQ, this.loads = new Map, this.loaded = new Map
      }
      load(QQ) {
        const FQ = (0, LQ.Wb)(QQ);
        if (!qQ.has(FQ)) return Promise.resolve(void 0);
        let wQ = this.loads.get(FQ);
        return wQ || (wQ = this.importGame(FQ).then((QQ => {
          const wQ = QQ.default;
          if ("function" !== typeof wQ) throw new Error(`${FQ}'s client code has no default-exported factory`);
          return this.loaded.set(FQ, wQ), wQ
        })).catch((QQ => {
          throw this.loads.delete(FQ), QQ
        })), this.loads.set(FQ, wQ)), wQ
      }
      loadedFactory(QQ) {
        const FQ = (0, LQ.Wb)(QQ);
        if (!qQ.has(FQ)) return;
        const wQ = this.loaded.get(FQ);
        if (!wQ) throw new Error(`${FQ}'s client code started before it loaded`);
        return wQ
      }
    }
  },
  39139: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(9289),
      qQ = wQ(9125),
      oQ = wQ(3149);

    function DQ(QQ) {
      if (QQ === LQ.e) return 0;
      const FQ = (0, oQ.c)(QQ);
      if (void 0 !== FQ && FQ <= qQ.MAX_BLOCK_ID) return FQ;
      const wQ = (0, oQ.c)(QQ.split("|")[0]);
      if (void 0 !== wQ && wQ <= qQ.MAX_BLOCK_ID && (0, qQ.rootMetaDescOf)(wQ) === QQ) return wQ;
      throw new Error(`Invalid block name. You sent ${QQ}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38736: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ
    });
    var LQ = wQ(17);
    class qQ {
      constructor(QQ) {
        this.screen = QQ, this.hidesHud = !1
      }
      show(QQ, FQ) {
        this.screen.setFade(QQ.colour, QQ.alpha), this.screen.setLetterbox(!0 === FQ.letterbox, QQ.alpha < 1), this.setHudHidden(!0 === FQ.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(QQ) {
        this.hidesHud !== QQ && (this.hidesHud = QQ, LQ.c.set({
          isUiHiddenByCamera: QQ
        }))
      }
    }
  },
  38700: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      e: () => bQ,
      g: () => HQ,
      h: () => DQ,
      j: () => xQ,
      m: () => vQ,
      n: () => AQ,
      o: () => mQ,
      s: () => kQ,
      v: () => uQ
    });
    const LQ = Math.PI / 2 - .001,
      qQ = 2 * Math.PI,
      oQ = 1e-9;

    function DQ(QQ, FQ) {
      FQ.heading = QQ.heading, FQ.pitch = QQ.pitch
    }

    function kQ(QQ, FQ) {
      const wQ = FQ - QQ;
      return wQ - qQ * Math.floor((wQ + Math.PI) / qQ)
    }

    function vQ(QQ, FQ, wQ) {
      return QQ + kQ(QQ, FQ) * wQ
    }

    function mQ(QQ) {
      if (!Number.isFinite(QQ)) return QQ;
      const FQ = QQ - qQ * Math.floor(QQ / qQ);
      return FQ < qQ ? FQ : 0
    }

    function uQ(QQ, FQ) {
      return QQ + kQ(QQ, FQ)
    }

    function HQ(QQ) {
      return Math.max(-LQ, Math.min(LQ, QQ))
    }

    function bQ(QQ, FQ, wQ) {
      const LQ = Math.cos(FQ);
      return wQ[0] = LQ * Math.sin(QQ), wQ[1] = -Math.sin(FQ), wQ[2] = LQ * Math.cos(QQ), wQ
    }

    function YQ(QQ, FQ, wQ, LQ) {
      const qQ = Math.sqrt(QQ * QQ + wQ * wQ);
      return qQ < oQ && Math.abs(FQ) < oQ || (qQ >= oQ && (LQ.heading = Math.atan2(QQ, wQ)), LQ.pitch = HQ(Math.atan2(-FQ, qQ) + 0)), LQ
    }

    function xQ(QQ, FQ) {
      return YQ(QQ[0], QQ[1], QQ[2], FQ)
    }

    function AQ(QQ, FQ, wQ) {
      return YQ(FQ[0] - QQ[0], FQ[1] - QQ[1], FQ[2] - QQ[2], wQ)
    }
  },
  38734: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      d: () => qQ
    });
    var LQ = wQ(38700);

    function qQ(QQ) {
      var FQ;
      const wQ = "default" === QQ.mode ? "movement" : null !== (FQ = QQ.playerFacing) && void 0 !== FQ ? FQ : "movement";
      return "cursor" === wQ ? {
        facing: wQ,
        mouseTurns: null
      } : {
        facing: wQ,
        mouseTurns: "default" !== QQ.mode && void 0 !== QQ.playerLook ? "look" : "view"
      }
    }

    function oQ(QQ, FQ, wQ, qQ, oQ, DQ) {
      return DQ.PU = 0, DQ.dU = 0, DQ.pointedAt = void 0, void 0 !== qQ ? oQ ? (DQ.pointedAt = qQ, QQ) : (0, LQ.o)(qQ.heading) : oQ ? (DQ.PU = FQ, DQ.dU = wQ, QQ) : (0, LQ.o)(QQ + FQ)
    }
  },
  38714: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => VQ
    });
    var LQ = wQ(38718),
      qQ = wQ(38700),
      oQ = wQ(36607);

    function DQ(QQ, FQ, wQ, LQ) {
      if (!(LQ > 0)) return FQ;
      const qQ = FQ > QQ ? Math.min(FQ, QQ + wQ / LQ) : Math.max(FQ, QQ - wQ / LQ);
      return Math.abs(FQ - qQ) < 1e-9 ? FQ : qQ
    }
    class kQ {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: LQ.h,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(QQ) {
        !this.isGoingOut() && this.sinceTurnMs < LQ.o.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: QQ
        } : (this.waiting = null, this.startOut(QQ))
      }
      fadeIn(QQ) {
        this.isGoingOut() ? this.sinceTurnMs < LQ.o.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: QQ
        } : (this.waiting = null, this.startIn(QQ)) : this.waiting = null
      }
      advance(QQ) {
        const FQ = this.waiting;
        if (null === FQ) return this.step(QQ);
        const wQ = LQ.o.minFadeTurnMs - this.sinceTurnMs;
        if (wQ > QQ) return this.step(QQ);
        const qQ = this.step(wQ);
        return this.waiting = null, "out" === FQ.turn ? this.startOut(FQ.transition) : this.startIn(FQ.minMs), this.step(QQ - wQ) || qQ
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(QQ) {
        ("in" === this.phase || null === this.phase && this.clearMs < LQ.o.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = QQ.colour), this.outMs = QQ.outMs, this.holdMs = QQ.holdMs, this.inMs = QQ.inMs
      }
      startIn(QQ) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(QQ, this.inMs)
      }
      step(QQ) {
        const FQ = this.screen;
        this.sinceTurnMs += QQ, null === this.phase && (this.clearMs += QQ);
        let wQ = !1,
          qQ = QQ;
        if ("out" === this.phase) {
          const LQ = (1 - FQ.alpha) * this.outMs;
          if (FQ.alpha = DQ(FQ.alpha, 1, QQ, this.outMs), FQ.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, qQ = Math.max(0, QQ - LQ), wQ = !0
        }
        let oQ = QQ;
        if ("hold" === this.phase) {
          this.heldMs += qQ;
          const QQ = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - LQ.o.minFadeTurnMs);
          if (QQ < 0 || wQ) return wQ;
          this.phase = "in", this.sinceTurnMs = QQ, oQ = QQ
        }
        return "in" === this.phase && (FQ.alpha = DQ(FQ.alpha, 0, oQ, this.inMs), FQ.alpha <= 0 && (this.phase = null, this.clearMs = 0)), wQ
      }
    }
    var vQ = wQ(38692),
      mQ = wQ(38725),
      uQ = wQ(1870),
      HQ = wQ(36202);

    function bQ(QQ, FQ) {
      for (let wQ = 0; wQ < FQ.length; wQ++) FQ[wQ] = QQ[wQ]
    }

    function YQ(QQ, FQ) {
      var wQ;
      return null !== (wQ = QQ.fov) && void 0 !== wQ ? wQ : FQ.getDefaultFov()
    }

    function xQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = 2 / LQ,
        DQ = Math.exp(-oQ * qQ);
      for (let kQ = 0; kQ < QQ.length; kQ++) {
        const LQ = QQ[kQ] - wQ[kQ],
          vQ = (FQ[kQ] + oQ * LQ) * qQ;
        QQ[kQ] = wQ[kQ] + (LQ + vQ) * DQ, FQ[kQ] = (FQ[kQ] - oQ * vQ) * DQ
      }
    }
    class AQ {
      constructor(QQ, FQ, wQ, LQ) {
        var oQ, DQ, kQ, vQ, mQ;
        this.settings = QQ, this.nH = FQ, this.targets = wQ, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Qt = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, qQ.o)((0, uQ.n)(null !== (oQ = QQ.viewHeading) && void 0 !== oQ ? oQ : 0)),
          pitch: (0, qQ.g)((0, uQ.n)(null !== (DQ = QQ.viewElevation) && void 0 !== DQ ? DQ : 45))
        }, this.closestDistance = null !== (kQ = QQ.closestDistance) && void 0 !== kQ ? kQ : Math.min(6, null !== (vQ = QQ.furthestDistance) && void 0 !== vQ ? vQ : 1 / 0), this.furthestDistance = null !== (mQ = QQ.furthestDistance) && void 0 !== mQ ? mQ : Math.max(64, this.closestDistance);
        const HQ = (0, qQ.e)(this.base.heading, this.base.pitch, this.forward),
          bQ = LQ.position,
          YQ = this.closestDistance;
        this.goal = [bQ[0] + HQ[0] * YQ, bQ[1] + HQ[1] * YQ, bQ[2] + HQ[2] * YQ, YQ, this.base.heading, this.base.pitch]
      }
      update(QQ, FQ, wQ) {
        var LQ, oQ;
        this.placeGoal(null !== (LQ = this.settings.fov) && void 0 !== LQ ? LQ : this.nH.getBaseFov()), this.goal[4] = (0, qQ.v)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const DQ = null !== (oQ = this.settings.smoothMs) && void 0 !== oQ ? oQ : 400;
        !this.started || DQ < 1 ? (bQ(this.goal, this.smoothed), this.Qt.fill(0), this.started = !0) : xQ(this.smoothed, this.Qt, this.goal, DQ, QQ), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, qQ.g)(this.smoothed[5]), FQ.apply(this.angles, wQ);
        const kQ = (0, qQ.e)(wQ.heading, wQ.pitch, this.forward);
        for (let qQ = 0; qQ < 3; qQ++) wQ.position[qQ] = this.smoothed[qQ] - kQ[qQ] * this.smoothed[3];
        wQ.fov = YQ(this.settings, this.nH)
      }
      continueFrom(QQ) {
        QQ instanceof AQ && (bQ(QQ.goal, this.goal), bQ(QQ.smoothed, this.smoothed), bQ(QQ.Qt, this.Qt), this.framedTargets = QQ.framedTargets, this.started = QQ.started)
      }
      reset() {
        this.Qt.fill(0), this.started = !1
      }
      placeGoal(QQ) {
        var FQ;
        let wQ = 0;
        for (const uQ of this.settings.targets) {
          const QQ = this.targets.currentAimPoint(uQ);
          QQ && (0, vQ.l)(QQ, this.pointAt(wQ++))
        }
        if (wQ > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const QQ = this.targets.aimPoint(this.nH.localPlayerId);
          QQ && (0, vQ.l)(QQ, this.pointAt(wQ++))
        }
        const LQ = this.goal;
        if (0 === wQ) return void(LQ[3] = this.withinDistances(LQ[3]));
        for (let vQ = 0; vQ < 3; vQ++) {
          let QQ = 1 / 0,
            FQ = -1 / 0;
          for (let LQ = 0; LQ < wQ; LQ++) QQ = Math.min(QQ, this.points[LQ][vQ]), FQ = Math.max(FQ, this.points[LQ][vQ]);
          LQ[vQ] = (QQ + FQ) / 2
        }
        let qQ = 0;
        for (let vQ = 0; vQ < wQ; vQ++) {
          const QQ = this.points[vQ];
          qQ = Math.max(qQ, Math.hypot(QQ[0] - LQ[0], QQ[1] - LQ[1], QQ[2] - LQ[2]))
        }
        const oQ = Math.tan((0, uQ.n)(QQ) / 2),
          DQ = Math.atan(oQ * (!0 === this.settings.letterbox ? HQ.g : 1)),
          kQ = Math.atan(oQ * this.nH.getAspectRatio()),
          mQ = (qQ + (null !== (FQ = this.settings.padding) && void 0 !== FQ ? FQ : 2)) / Math.sin(Math.min(DQ, kQ));
        LQ[3] = this.withinDistances(mQ)
      }
      withinDistances(QQ) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, QQ))
      }
      pointAt(QQ) {
        return QQ === this.points.length && this.points.push([0, 0, 0]), this.points[QQ]
      }
    }
    class tQ {
      constructor(QQ) {
        this.limits = QQ, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(QQ) {
        this.limits && (this.yawOffset = QQ.yawOffset, this.pitchOffset = QQ.pitchOffset, this.idleMs = QQ.idleMs)
      }
      update(QQ, FQ) {
        const wQ = this.limits;
        if (!wQ) return;
        const LQ = Number.isFinite(FQ.PU) ? FQ.PU : 0,
          qQ = Number.isFinite(FQ.dU) ? FQ.dU : 0;
        if (FQ.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: FQ.pointedAt.heading,
          pitch: FQ.pointedAt.pitch
        };
        else if (0 !== LQ || 0 !== qQ) this.idleMs = 0, this.yawOffset += LQ, this.pitchOffset += qQ;
        else {
          const FQ = Math.max(0, this.idleMs + QQ - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += QQ, void 0 !== wQ.returnMs && FQ > 0) {
            const QQ = wQ.returnMs > 0 ? Math.exp(-3 * FQ / wQ.returnMs) : 0;
            this.yawOffset *= QQ, this.pitchOffset *= QQ
          }
        }
        this.clampOffsets(wQ)
      }
      clampOffsets(QQ) {
        if (QQ.maxYaw >= 180) this.yawOffset = (0, qQ.s)(0, this.yawOffset);
        else {
          const FQ = (0, uQ.n)(QQ.maxYaw);
          this.yawOffset = Math.max(-FQ, Math.min(FQ, this.yawOffset))
        }
        const FQ = (0, uQ.n)(QQ.maxPitch);
        this.pitchOffset = Math.max(-FQ, Math.min(FQ, this.pitchOffset))
      }
      apply(QQ, FQ) {
        this.pointedAt && this.limits && (this.yawOffset = (0, qQ.s)(QQ.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - QQ.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const wQ = (0, qQ.g)(QQ.pitch + this.pitchOffset);
        this.pitchOffset = wQ - QQ.pitch, FQ.heading = (0, qQ.o)(QQ.heading + this.yawOffset), FQ.pitch = wQ
      }
      unapply(QQ, FQ) {
        FQ.heading = (0, qQ.o)(QQ.heading - this.yawOffset), FQ.pitch = (0, qQ.g)(QQ.pitch - this.pitchOffset)
      }
    }
    const eQ = 1e-6;

    function MQ(QQ) {
      return Math.sqrt(QQ[0] * QQ[0] + QQ[1] * QQ[1] + QQ[2] * QQ[2])
    }

    function GQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = qQ * qQ,
        DQ = oQ * qQ;
      return (2 * DQ - 3 * oQ + 1) * QQ + (DQ - 2 * oQ + qQ) * FQ + (-2 * DQ + 3 * oQ) * wQ + (DQ - oQ) * LQ
    }

    function pQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = qQ * qQ;
      return (6 * oQ - 6 * qQ) * QQ + (3 * oQ - 4 * qQ + 1) * FQ + (-6 * oQ + 6 * qQ) * wQ + (3 * oQ - 2 * qQ) * LQ
    }

    function cQ(QQ, FQ) {
      const wQ = FQ[0] - QQ[0],
        LQ = FQ[1] - QQ[1],
        qQ = FQ[2] - QQ[2];
      return Math.sqrt(wQ * wQ + LQ * LQ + qQ * qQ)
    }

    function CQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      for (let DQ = 0; DQ < 3; DQ++) oQ[DQ] = qQ ? QQ[DQ] * LQ : wQ[DQ] - FQ[DQ];
      return qQ && function(QQ, FQ) {
        const wQ = MQ(QQ);
        if (wQ > FQ) {
          const LQ = FQ / wQ;
          QQ[0] *= LQ, QQ[1] *= LQ, QQ[2] *= LQ
        }
      }(oQ, 3 * cQ(FQ, wQ)), oQ
    }

    function SQ(QQ, FQ, wQ, LQ) {
      for (let qQ = 0; qQ < 3; qQ++) LQ[qQ] = 6 * (FQ[qQ] - QQ[qQ]) - 2 * wQ[qQ];
      if (MQ(LQ) < eQ)
        for (let qQ = 0; qQ < 3; qQ++) LQ[qQ] = FQ[qQ] - QQ[qQ];
      return LQ
    }

    function iQ(QQ, FQ) {
      return [2 * FQ[0] - QQ[0], 2 * FQ[1] - QQ[1], 2 * FQ[2] - QQ[2]]
    }

    function WQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      if (!oQ && !DQ) return 0;
      const kQ = oQ ? QQ : 2 * FQ - wQ,
        vQ = DQ ? wQ : 2 * FQ - QQ,
        mQ = oQ ? LQ : qQ,
        uQ = DQ ? qQ : LQ,
        HQ = (FQ - kQ) / mQ,
        bQ = (vQ - FQ) / uQ;
      if (HQ * bQ <= 0) return 0;
      const YQ = (vQ - kQ) / (mQ + uQ),
        xQ = 3 * Math.min(Math.abs(HQ), Math.abs(bQ));
      return Math.max(-xQ, Math.min(xQ, YQ))
    }

    function RQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      const {
        u: kQ,
        segmentMs: vQ
      } = QQ;
      if (!QQ.curved) return wQ + (LQ - wQ) * kQ;
      return GQ(wQ, WQ(FQ, wQ, LQ, QQ.beforeMs, vQ, oQ, !0) * vQ, LQ, WQ(wQ, LQ, qQ, vQ, QQ.afterMs, !0, DQ) * vQ, kQ)
    }

    function OQ(QQ) {
      return Math.abs(QQ.pitch) >= qQ.d
    }
    class sQ {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.nodes = QQ, this.prevNodes = wQ, this.nextNodes = LQ, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = QQ.map(((QQ, wQ) => this.nodeTangent(FQ, qQ, wQ)))
      }
      sample(QQ, FQ, wQ) {
        const {
          index: LQ,
          toIndex: oQ,
          segmentMs: DQ,
          curved: kQ
        } = QQ, vQ = this.fromAngles, mQ = this.toAngles, uQ = this.nodeAngles(LQ, wQ.position, FQ, vQ), HQ = this.nodeAngles(oQ, wQ.position, FQ, mQ);
        if (DQ > 0 && "aim" !== uQ && "aim" !== HQ && this.liveTangent(QQ, vQ)) return wQ.heading = (0, qQ.o)(vQ.heading), void(wQ.pitch = vQ.pitch);
        if ("none" === uQ && "none" === HQ) return;
        !kQ && DQ > 0 && ("tangent" === uQ && this.liveTangent(QQ, vQ), "tangent" === HQ && this.liveTangent(QQ, mQ)), "none" === uQ ? (0, qQ.h)(mQ, vQ) : "none" === HQ && (0, qQ.h)(vQ, mQ);
        const bQ = kQ && QQ.beforeIndex >= 0 && "none" !== this.nodeAngles(QQ.beforeIndex, wQ.position, FQ, this.beforeAngles),
          YQ = kQ && QQ.afterIndex >= 0 && "none" !== this.nodeAngles(QQ.afterIndex, wQ.position, FQ, this.afterAngles),
          xQ = (0, qQ.v)(vQ.heading, mQ.heading),
          AQ = RQ(QQ, bQ ? (0, qQ.v)(vQ.heading, this.beforeAngles.heading) : 0, vQ.heading, xQ, YQ ? (0, qQ.v)(xQ, this.afterAngles.heading) : 0, bQ, YQ);
        wQ.heading = (0, qQ.o)(AQ), wQ.pitch = (0, qQ.g)(RQ(QQ, this.beforeAngles.pitch, vQ.pitch, mQ.pitch, this.afterAngles.pitch, bQ, YQ))
      }
      nodeAngles(QQ, FQ, wQ, LQ) {
        const qQ = this.rawNodeAngles(QQ, FQ, wQ, LQ);
        return "none" !== qQ && OQ(LQ) && !this.borrowHeading(this.prevNodes[QQ], FQ, wQ, LQ) && this.borrowHeading(this.nextNodes[QQ], FQ, wQ, LQ), qQ
      }
      borrowHeading(QQ, FQ, wQ, LQ) {
        const qQ = this.borrowedAngles;
        return !(QQ < 0 || "none" === this.rawNodeAngles(QQ, FQ, wQ, qQ) || OQ(qQ)) && (LQ.heading = qQ.heading, !0)
      }
      rawNodeAngles(QQ, FQ, wQ, LQ) {
        const oQ = this.nodes[QQ].keyframe;
        if (oQ.lookDirection) return (0, qQ.j)(oQ.lookDirection, LQ), "aim";
        if (void 0 !== oQ.lookAt) {
          const QQ = wQ(oQ.lookAt);
          if (QQ) return (0, qQ.n)(FQ, QQ, LQ), "aim"
        }
        const DQ = this.tangents[QQ];
        return DQ ? ((0, qQ.h)(DQ, LQ), "tangent") : "none"
      }
      liveTangent(QQ, FQ) {
        const wQ = this.nodes[QQ.index].position,
          LQ = this.nodes[QQ.toIndex].position,
          oQ = this.derivative;
        for (let qQ = 0; qQ < 3; qQ++) oQ[qQ] = pQ(wQ[qQ], QQ.fromTangent[qQ], LQ[qQ], QQ.toTangent[qQ], QQ.u);
        return MQ(oQ) > 1e-9 ? ((0, qQ.j)(oQ, FQ), !0) : !(cQ(wQ, LQ) < eQ) && ((0, qQ.j)(SQ(wQ, LQ, QQ.u < .5 ? QQ.toTangent : QQ.fromTangent, oQ), FQ), !0)
      }
      nodeTangent(QQ, FQ, wQ) {
        var LQ;
        const oQ = QQ[wQ];
        if (MQ(oQ) > 1e-9) return (0, qQ.j)(oQ, {
          heading: 0,
          pitch: 0
        });
        const DQ = null !== (LQ = this.restDirectionTo(wQ, wQ + 1, QQ, FQ)) && void 0 !== LQ ? LQ : this.restDirectionTo(wQ, wQ - 1, QQ, FQ);
        return DQ ? (0, qQ.j)(DQ, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(QQ, FQ, wQ, LQ) {
        const qQ = this.nodes[QQ],
          oQ = this.nodes[FQ];
        if (!oQ || cQ(qQ.position, oQ.position) < eQ) return null;
        const [DQ, kQ] = FQ > QQ ? [qQ, oQ] : [oQ, qQ], vQ = CQ(wQ[FQ], DQ.position, kQ.position, kQ.timeMs - DQ.timeMs, LQ, [0, 0, 0]);
        return SQ(DQ.position, kQ.position, vQ, [0, 0, 0])
      }
    }

    function rQ(QQ, FQ) {
      const wQ = QQ.lookDirection || FQ.lookDirection ? function(QQ, FQ) {
        if (!QQ || !FQ) return QQ === FQ;
        const wQ = MQ(QQ),
          LQ = MQ(FQ);
        return Math.hypot(QQ[0] / wQ - FQ[0] / LQ, QQ[1] / wQ - FQ[1] / LQ, QQ[2] / wQ - FQ[2] / LQ) < eQ
      }(QQ.lookDirection, FQ.lookDirection) : (LQ = QQ.lookAt, qQ = FQ.lookAt, "object" !== typeof LQ || "object" !== typeof qQ ? LQ === qQ : cQ(LQ, qQ) < eQ);
      var LQ, qQ;
      return cQ(QQ.position, FQ.position) < eQ && QQ.fov === FQ.fov && wQ
    }
    class IQ {
      constructor(QQ, FQ, wQ) {
        if (this.smooth = FQ, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === QQ.length) throw new Error("A camera path needs at least one keyframe");
        for (let oQ = 1; oQ < QQ.length; oQ++)
          if (!(QQ[oQ].timeMs > QQ[oQ - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = QQ.map((QQ => {
          var FQ;
          return {
            timeMs: QQ.timeMs,
            position: [...QQ.position],
            keyframe: QQ,
            easing: (0, oQ.p)(null !== (FQ = QQ.easing) && void 0 !== FQ ? FQ : "linear")
          }
        }));
        const LQ = this.nodes[0],
          qQ = this.nodes[this.nodes.length - 1],
          DQ = wQ && this.nodes.length > 1;
        DQ && !rQ(LQ.keyframe, qQ.keyframe) && this.nodes.push({
          ...LQ,
          timeMs: qQ.timeMs + (qQ.timeMs - LQ.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = DQ ? this.nodes[this.nodes.length - 1].timeMs - LQ.timeMs : 0, this.prevNodes = this.nodes.map(((QQ, FQ) => this.neighbour(FQ, -1))), this.nextNodes = this.nodes.map(((QQ, FQ) => this.neighbour(FQ, 1))), this.prevGaps = this.prevNodes.map(((QQ, FQ) => QQ >= 0 ? this.gapMs(FQ, -1) : 0)), this.nextGaps = this.nextNodes.map(((QQ, FQ) => QQ >= 0 ? this.gapMs(FQ, 1) : 0)), this.velocities = this.nodes.map(((QQ, FQ) => {
          const wQ = this.prevNodes[FQ],
            LQ = this.nextNodes[FQ];
          return function(QQ, FQ, wQ, LQ, qQ, oQ) {
            if (oQ[0] = 0, oQ[1] = 0, oQ[2] = 0, !QQ && !wQ) return oQ;
            const DQ = null !== QQ && void 0 !== QQ ? QQ : iQ(null !== wQ && void 0 !== wQ ? wQ : FQ, FQ),
              kQ = null !== wQ && void 0 !== wQ ? wQ : iQ(null !== QQ && void 0 !== QQ ? QQ : FQ, FQ),
              vQ = QQ ? LQ : qQ,
              mQ = wQ ? qQ : LQ,
              uQ = cQ(DQ, FQ),
              HQ = cQ(FQ, kQ);
            if (uQ < eQ || HQ < eQ) return oQ;
            const bQ = Math.sqrt(uQ),
              YQ = Math.sqrt(HQ),
              xQ = (bQ + YQ) / (vQ + mQ);
            for (let AQ = 0; AQ < 3; AQ++) {
              const QQ = (FQ[AQ] - DQ[AQ]) / bQ - (kQ[AQ] - DQ[AQ]) / (bQ + YQ) + (kQ[AQ] - FQ[AQ]) / YQ;
              oQ[AQ] = QQ * xQ
            }
            return oQ
          }(wQ >= 0 ? this.nodes[wQ].position : null, QQ.position, LQ >= 0 ? this.nodes[LQ].position : null, this.prevGaps[FQ], this.nextGaps[FQ], [0, 0, 0])
        })), this.aim = new sQ(this.nodes, this.velocities, this.prevNodes, this.nextNodes, FQ)
      }
      sample(QQ, FQ, wQ, LQ) {
        const qQ = this.findSegment(this.pathTime(QQ));
        this.samplePosition(qQ, LQ.position), this.aim.sample(qQ, FQ, LQ);
        const {
          beforeIndex: oQ,
          afterIndex: DQ
        } = qQ;
        LQ.fov = RQ(qQ, oQ >= 0 ? this.fovAt(oQ, wQ) : 0, this.fovAt(qQ.index, wQ), this.fovAt(qQ.toIndex, wQ), DQ >= 0 ? this.fovAt(DQ, wQ) : 0, oQ >= 0, DQ >= 0)
      }
      pathTime(QQ) {
        const FQ = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || QQ <= FQ) return QQ;
        const wQ = QQ - FQ;
        return FQ + wQ - this.loopMs * Math.floor(wQ / this.loopMs)
      }
      findSegment(QQ) {
        const FQ = this.nodes,
          wQ = this.segment;
        let LQ = wQ.index;
        for (QQ < FQ[LQ].timeMs && (LQ = 0); LQ < FQ.length - 2 && FQ[LQ + 1].timeMs <= QQ;) LQ++;
        const qQ = Math.min(LQ + 1, FQ.length - 1),
          DQ = FQ[qQ].timeMs - FQ[LQ].timeMs;
        return wQ.index = LQ, wQ.toIndex = qQ, wQ.segmentMs = DQ, wQ.u = DQ > 0 ? (0, oQ.l)((QQ - FQ[LQ].timeMs) / DQ, FQ[LQ].easing) : 1, wQ.curved = this.smooth && DQ > 0, wQ.beforeIndex = this.prevNodes[LQ], wQ.afterIndex = this.nextNodes[qQ], wQ.beforeMs = this.prevGaps[LQ], wQ.afterMs = this.nextGaps[qQ], wQ
      }
      samplePosition(QQ, FQ) {
        const {
          fromTangent: wQ,
          toTangent: LQ,
          curved: qQ
        } = QQ, oQ = this.nodes[QQ.index].position, DQ = this.nodes[QQ.toIndex].position;
        CQ(this.velocities[QQ.index], oQ, DQ, QQ.segmentMs, qQ, wQ), CQ(this.velocities[QQ.toIndex], oQ, DQ, QQ.segmentMs, qQ, LQ);
        const kQ = QQ.u;
        for (let vQ = 0; vQ < 3; vQ++) FQ[vQ] = qQ ? GQ(oQ[vQ], wQ[vQ], DQ[vQ], LQ[vQ], kQ) : oQ[vQ] + (DQ[vQ] - oQ[vQ]) * kQ
      }
      fovAt(QQ, FQ) {
        var wQ;
        return null !== (wQ = this.nodes[QQ].keyframe.fov) && void 0 !== wQ ? wQ : FQ
      }
      neighbour(QQ, FQ) {
        const wQ = this.nodes.length - 1,
          LQ = QQ + FQ;
        return LQ >= 0 && LQ <= wQ ? LQ : this.loopMs <= 0 || wQ < 2 ? -1 : LQ < 0 ? wQ - 1 : 1
      }
      gapMs(QQ, FQ) {
        const wQ = this.nodes.length - 1;
        if (1 === FQ) {
          const FQ = QQ === wQ ? 0 : QQ;
          return this.nodes[FQ + 1].timeMs - this.nodes[FQ].timeMs
        }
        const LQ = 0 === QQ ? wQ : QQ;
        return this.nodes[LQ].timeMs - this.nodes[LQ - 1].timeMs
      }
    }
    class UQ {
      constructor(QQ) {
        this.nH = QQ, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = FQ => QQ.getEntityPosition(FQ), this.readAimPoint = FQ => QQ.getEntityAimPoint(FQ)
      }
      aimPoint(QQ) {
        return "string" !== typeof QQ ? (0, vQ.r)(QQ, 3) ? QQ : null : this.resolve(QQ, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(QQ) {
        const FQ = "string" === typeof QQ ? this.nH.getEntityAimPoint(QQ) : QQ;
        return FQ && (0, vQ.r)(FQ, 3) ? FQ : null
      }
      feetPosition(QQ) {
        return this.resolve(QQ, this.readFeet, this.lastFeet)
      }
      heading(QQ) {
        const FQ = this.nH.getEntityHeading(QQ);
        if (null !== FQ && Number.isFinite(FQ)) return this.lastHeadings.set(QQ, FQ), FQ;
        const wQ = this.lastHeadings.get(QQ);
        return void 0 !== wQ ? wQ : QQ === this.nH.localPlayerId ? 0 : this.heading(this.nH.localPlayerId)
      }
      resolve(QQ, FQ, wQ) {
        const LQ = FQ(QQ);
        let qQ = wQ.get(QQ);
        return LQ && (0, vQ.r)(LQ, 3) ? (qQ || (qQ = [0, 0, 0], wQ.set(QQ, qQ)), qQ[0] = LQ[0], qQ[1] = LQ[1], qQ[2] = LQ[2], qQ) : qQ || (QQ === this.nH.localPlayerId ? null : this.resolve(this.nH.localPlayerId, FQ, wQ))
      }
    }

    function NQ(QQ) {
      return {
        heading: QQ.heading,
        pitch: QQ.pitch
      }
    }

    function TQ(QQ, FQ) {
      Number.isFinite(QQ.heading) && Number.isFinite(QQ.pitch) || (0, qQ.h)(FQ, QQ)
    }

    function KQ(QQ, FQ, wQ, LQ, oQ) {
      if (FQ) return void(0, qQ.j)(FQ, oQ);
      const DQ = LQ.aimPoint(wQ);
      DQ && (0, qQ.n)(QQ, DQ, oQ)
    }
    class zQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.settings = QQ, this.nH = FQ, this.targets = wQ, this.base = void 0, this.base = NQ(LQ)
      }
      update(QQ, FQ, wQ) {
        var LQ;
        const qQ = this.settings;
        (0, vQ.l)(qQ.position, wQ.position), KQ(qQ.position, qQ.lookDirection, null !== (LQ = qQ.lookAt) && void 0 !== LQ ? LQ : this.nH.localPlayerId, this.targets, this.base), FQ.apply(this.base, wQ), wQ.fov = YQ(qQ, this.nH)
      }
      continueFrom(QQ) {
        QQ instanceof zQ && (0, qQ.h)(QQ.base, this.base)
      }
      reset(QQ) {
        TQ(this.base, QQ)
      }
    }
    class lQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.settings = QQ, this.nH = FQ, this.targets = wQ, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Qt = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = NQ(LQ), this.goal = [...LQ.position]
      }
      update(QQ, FQ, wQ) {
        var LQ, qQ, oQ;
        const DQ = this.settings,
          kQ = null !== (LQ = DQ.target) && void 0 !== LQ ? LQ : this.nH.localPlayerId,
          mQ = this.targets.feetPosition(kQ);
        let uQ = !1;
        mQ && (uQ = this.foundFeet && cQ(this.lastFeet, mQ) > 32 + .1 * QQ, (0, vQ.l)(mQ, this.lastFeet), this.foundFeet = !0, this.placeGoal(mQ, kQ));
        const HQ = null !== (qQ = DQ.smoothMs) && void 0 !== qQ ? qQ : 0;
        !this.started || HQ < 1 || uQ ? ((0, vQ.l)(this.goal, this.smoothed), this.Qt.fill(0), this.started = !0) : xQ(this.smoothed, this.Qt, this.goal, HQ, QQ), uQ && (this.distance = -1), (0, vQ.l)(this.smoothed, wQ.position);
        const bQ = !0 === DQ.avoidTerrain ? this.pullIn(kQ, QQ, wQ) : 1;
        let AQ = this.goal;
        if ("target" === DQ.offsetSpace) AQ = wQ.position;
        else if (bQ < 1) {
          AQ = this.aimOrigin;
          for (let QQ = 0; QQ < 3; QQ++) AQ[QQ] = wQ.position[QQ] + (this.goal[QQ] - this.smoothed[QQ]) * bQ
        }
        KQ(AQ, DQ.lookDirection, null !== (oQ = DQ.lookAt) && void 0 !== oQ ? oQ : kQ, this.targets, this.base), FQ.apply(this.base, wQ), wQ.fov = YQ(DQ, this.nH)
      }
      continueFrom(QQ) {
        QQ instanceof lQ && (0, LQ.z)(QQ.settings.target, this.settings.target) && ((0, qQ.h)(QQ.base, this.base), (0, vQ.l)(QQ.goal, this.goal), (0, vQ.l)(QQ.lastFeet, this.lastFeet), this.foundFeet = QQ.foundFeet, (0, vQ.l)(QQ.smoothed, this.smoothed), (0, vQ.l)(QQ.Qt, this.Qt), this.started = QQ.started, !0 === QQ.settings.avoidTerrain && (this.distance = QQ.distance))
      }
      reset(QQ) {
        TQ(this.base, QQ), this.Qt.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(QQ, FQ, wQ) {
        const LQ = this.targets.aimPoint(QQ);
        if (!LQ) return 1;
        const qQ = wQ.position,
          oQ = cQ(LQ, qQ);
        if (!(oQ > 0)) return 1;
        const DQ = this.toCamera;
        for (let vQ = 0; vQ < 3; vQ++) DQ[vQ] = (qQ[vQ] - LQ[vQ]) / oQ;
        const kQ = function(QQ, FQ, wQ) {
          return QQ < 0 || FQ < QQ ? FQ : FQ + (QQ - FQ) * Math.exp(-wQ / 150)
        }(this.distance, function(QQ, FQ, wQ, LQ) {
          const qQ = QQ.raycastTerrain(FQ, wQ, LQ);
          return null !== qQ && Number.isFinite(qQ) ? Math.min(LQ, Math.max(0, qQ - .2)) : LQ
        }(this.nH, LQ, DQ, oQ), FQ);
        if (oQ - kQ < .001) return this.distance = -1, 1;
        this.distance = kQ;
        for (let vQ = 0; vQ < 3; vQ++) qQ[vQ] = LQ[vQ] + DQ[vQ] * kQ;
        return kQ / oQ
      }
      placeGoal(QQ, FQ) {
        const wQ = this.settings.offset;
        let LQ = wQ[0],
          qQ = wQ[2];
        if ("target" === this.settings.offsetSpace) {
          const QQ = this.targets.heading(FQ),
            oQ = Math.cos(QQ),
            DQ = Math.sin(QQ);
          LQ = wQ[0] * oQ + wQ[2] * DQ, qQ = -wQ[0] * DQ + wQ[2] * oQ
        }
        this.goal[0] = QQ[0] + LQ, this.goal[1] = QQ[1] + wQ[1], this.goal[2] = QQ[2] + qQ
      }
    }
    class jQ {
      constructor(QQ, FQ, wQ, LQ) {
        var qQ, oQ;
        this.settings = QQ, this.nH = FQ, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = QQ.keyframes.length > 0 ? new IQ(QQ.keyframes, null === (qQ = QQ.smooth) || void 0 === qQ || qQ, null !== (oQ = QQ.loop) && void 0 !== oQ && oQ) : null, this.base = (0, vQ.h)(LQ, (0, vQ.m)()), this.resolveTarget = QQ => wQ.aimPoint(QQ)
      }
      update(QQ, FQ, wQ) {
        this.elapsedMs += QQ;
        const LQ = YQ(this.settings, this.nH);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, LQ, this.base) : this.base.fov = LQ, (0, vQ.l)(this.base.position, wQ.position), wQ.fov = this.base.fov, FQ.apply(this.base, wQ)
      }
      continueFrom(QQ) {
        QQ instanceof jQ && (0, LQ.z)(QQ.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = QQ.elapsedMs, (0, vQ.h)(QQ.base, this.base))
      }
      reset(QQ) {
        TQ(this.base, QQ), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function aQ(QQ, FQ) {
      return (0, LQ.D)(QQ, FQ)
    }
    class XQ {
      constructor(QQ, FQ, wQ) {
        var LQ;
        this.settings = QQ, this.nH = FQ, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const qQ = null !== wQ && wQ.settings.mode === QQ.mode,
          oQ = qQ ? wQ.pose : FQ.getDefaultPose();
        this.pose = (0, vQ.h)(oQ, (0, vQ.m)()), this.lastGoodPose = (0, vQ.h)(qQ ? wQ.lastGoodPose : oQ, (0, vQ.m)()), this.look = new tQ(QQ.playerLook), this.targets = null !== (LQ = null === wQ || void 0 === wQ ? void 0 : wQ.targets) && void 0 !== LQ ? LQ : new UQ(FQ);
        const DQ = (0, vQ.h)(oQ, (0, vQ.m)());
        qQ && wQ.look.unapply(DQ, DQ), this.mode = function(QQ, FQ, wQ, LQ) {
          switch (QQ.mode) {
            case "fixed":
              return new zQ(QQ, FQ, wQ, LQ);
            case "follow":
              return new lQ(QQ, FQ, wQ, LQ);
            case "path":
              return new jQ(QQ, FQ, wQ, LQ);
            case "frame":
              return new AQ(QQ, FQ, wQ, LQ)
          }
        }(QQ, FQ, this.targets, DQ), qQ && (this.look.continueFrom(wQ.look), this.mode.continueFrom(wQ.mode))
      }
      update(QQ, FQ) {
        return this.look.update(QQ, FQ), this.mode.update(QQ, this.look, this.pose), (0, vQ.q)(this.pose) ? (0, vQ.h)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, vQ.h)(this.lastGoodPose, this.pose), this.mode.reset((0, vQ.q)(this.lastGoodPose) ? this.lastGoodPose : this.nH.getDefaultPose())), this.pose
      }
    }

    function fQ(QQ) {
      return [0, 0, QQ[2], QQ[3]]
    }
    class VQ {
      constructor(QQ) {
        this.nH = QQ, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new kQ, this.shot = null, this.blend = null, this.mixed = (0, vQ.m)(), this.output = (0, vQ.m)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(QQ) {
        const FQ = (0, mQ.b)(QQ);
        if ((0, LQ.z)(FQ, this.pending ? this.pending.settings : this.settings)) return;
        const wQ = aQ(this.settings, FQ);
        if (void 0 !== FQ.transition && !wQ) return this.pending = {
          settings: FQ,
          shot: "default" === FQ.mode ? null : new XQ(FQ, this.nH, null)
        }, void this.fade.fadeOut(FQ.transition);
        const qQ = null !== this.pending;
        this.pending = null, !qQ && wQ || this.fade.fadeIn(LQ.o.minTransitionFadeMs), this.show(FQ, !1)
      }
      show(QQ, FQ) {
        var wQ, qQ;
        if ((0, LQ.z)(QQ, this.settings)) return;
        const DQ = !FQ && aQ(this.settings, QQ);
        this.settings = QQ;
        const kQ = null !== this.blend && this.blend.elapsedMs > 0,
          mQ = (0, vQ.h)(this.hasOutput ? this.output : this.nH.getDefaultPose(), (0, vQ.m)());
        if (this.shot = "default" === QQ.mode ? null : new XQ(QQ, this.nH, FQ ? null : this.shot), DQ) return;
        const uQ = FQ || !this.shot && !this.hasOutput ? 0 : null !== (wQ = QQ.blendInMs) && void 0 !== wQ ? wQ : 0;
        if (uQ <= 0) return void(this.blend = null);
        const HQ = (0, oQ.p)(null !== (qQ = QQ.blendEasing) && void 0 !== qQ ? qQ : "easeInOut");
        this.blend = {
          from: mQ,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: uQ,
          easing: kQ ? fQ(HQ) : HQ
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
      update(QQ, FQ) {
        const wQ = Number.isFinite(QQ) && QQ > 0 ? QQ : 0;
        if (this.fade.advance(wQ) && null !== this.pending) {
          const {
            settings: QQ
          } = this.pending;
          this.pending = null, this.show(QQ, !0)
        }
        this.loadingPositions.length = 0;
        const LQ = this.pending;
        if (null !== LQ && void 0 !== LQ && LQ.shot) {
          const QQ = "path" === LQ.settings.mode ? 0 : wQ;
          this.noteLoadingPosition(LQ.shot.update(QQ, vQ.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const DQ = this.shot ? this.shot.update(wQ, FQ) : this.nH.getDefaultPose();
        this.shot && this.noteLoadingPosition(DQ.position);
        const kQ = this.blend;
        if (!kQ) return this.writeOutput(DQ);
        kQ.elapsedMs += wQ;
        const mQ = Math.min(1, kQ.elapsedMs / kQ.durationMs);
        if (kQ.headingDelta = Number.isFinite(kQ.headingDelta) ? (0, qQ.v)(kQ.headingDelta, DQ.heading - kQ.from.heading) : (0, qQ.s)(kQ.from.heading, DQ.heading), (0, vQ.t)(kQ.from, DQ, kQ.headingDelta, (0, oQ.l)(mQ, kQ.easing), this.mixed), mQ >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else kQ.fromScripted && this.noteLoadingPosition(kQ.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(QQ) {
        if (QQ.every(Number.isFinite)) {
          const FQ = this.loadingPositions;
          FQ.push((0, vQ.l)(QQ, this.loadingSlots[FQ.length]))
        }
      }
      writeOutput(QQ) {
        const FQ = this.output;
        (0, vQ.q)(QQ) ? (0, vQ.h)(QQ, FQ) : this.hasOutput || (0, vQ.h)(this.nH.getDefaultPose(), FQ), FQ.pitch = (0, qQ.g)(FQ.pitch);
        const wQ = this.nH.getDefaultFov(),
          oQ = Number.isFinite(wQ) && wQ > 0 && wQ < 180,
          DQ = oQ ? Math.min(LQ.o.minFov, wQ) : LQ.o.minFov,
          kQ = oQ ? Math.max(LQ.o.maxFov, wQ) : LQ.o.maxFov;
        return FQ.fov = Number.isFinite(FQ.fov) ? Math.min(kQ, Math.max(DQ, FQ.fov)) : kQ, this.hasOutput = !0, FQ
      }
    }
  },
  38692: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      h: () => kQ,
      l: () => DQ,
      m: () => oQ,
      q: () => mQ,
      r: () => vQ,
      t: () => uQ
    });
    var LQ = wQ(38700);
    const qQ = {
      PU: 0,
      dU: 0
    };

    function oQ() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function DQ(QQ, FQ) {
      return FQ[0] = QQ[0], FQ[1] = QQ[1], FQ[2] = QQ[2], FQ
    }

    function kQ(QQ, FQ) {
      return DQ(QQ.position, FQ.position), FQ.heading = QQ.heading, FQ.pitch = QQ.pitch, FQ.fov = QQ.fov, FQ
    }

    function vQ(QQ, FQ) {
      return Array.isArray(QQ) && QQ.length === FQ && QQ.every(Number.isFinite)
    }

    function mQ(QQ) {
      return vQ(QQ.position, 3) && Number.isFinite(QQ.heading) && Number.isFinite(QQ.pitch) && Number.isFinite(QQ.fov)
    }

    function uQ(QQ, FQ, wQ, qQ, oQ) {
      for (let LQ = 0; LQ < 3; LQ++) oQ.position[LQ] = QQ.position[LQ] + (FQ.position[LQ] - QQ.position[LQ]) * qQ;
      return oQ.heading = (0, LQ.o)(QQ.heading + wQ * qQ), oQ.pitch = QQ.pitch + (FQ.pitch - QQ.pitch) * qQ, oQ.fov = QQ.fov + (FQ.fov - QQ.fov) * qQ, oQ
    }
  },
  38725: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => SQ,
      c: () => bQ
    });
    var LQ = wQ(38718),
      qQ = wQ(38692);
    const oQ = LQ.l,
      DQ = LQ.s;

    function kQ(QQ, FQ, wQ, LQ) {
      return Number.isFinite(QQ) ? Math.min(wQ, Math.max(FQ, QQ)) : LQ
    }

    function vQ(QQ, FQ, wQ) {
      return void 0 !== QQ && Number.isFinite(QQ) ? Math.min(wQ, Math.max(FQ, QQ)) : void 0
    }

    function mQ(QQ) {
      const FQ = LQ.o.maxCoordinate;
      return [Math.min(FQ, Math.max(-FQ, QQ[0])), Math.min(FQ, Math.max(-FQ, QQ[1])), Math.min(FQ, Math.max(-FQ, QQ[2]))]
    }

    function uQ(QQ) {
      return "string" === typeof QQ ? QQ : (0, qQ.r)(QQ, 3) ? mQ(QQ) : void 0
    }
    const HQ = new RegExp(LQ.v);

    function bQ(QQ) {
      return "string" === typeof QQ && HQ.test(QQ)
    }

    function YQ(QQ) {
      const FQ = [];
      if (!Array.isArray(QQ)) return FQ;
      for (const wQ of QQ.slice(0, LQ.o.maxFrameTargets)) {
        const QQ = uQ(wQ);
        void 0 === QQ || "string" === typeof QQ && !bQ(QQ) || FQ.push(QQ)
      }
      return FQ
    }

    function xQ(QQ) {
      if (!(0, qQ.r)(QQ, 3)) return;
      const FQ = Math.max(Math.abs(QQ[0]), Math.abs(QQ[1]), Math.abs(QQ[2])),
        wQ = Math.hypot(QQ[0] / FQ, QQ[1] / FQ, QQ[2] / FQ);
      return 0 === FQ || FQ * wQ < LQ.o.minDirectionLength ? void 0 : [QQ[0] / FQ / wQ, QQ[1] / FQ / wQ, QQ[2] / FQ / wQ]
    }

    function AQ(QQ) {
      if (void 0 !== QQ) return "string" === typeof QQ ? oQ.includes(QQ) ? QQ : void 0 : (0, qQ.r)(QQ, 4) ? [kQ(QQ[0], 0, 1, 0), kQ(QQ[1], LQ.o.minEasingY, LQ.o.maxEasingY, 0), kQ(QQ[2], 0, 1, 1), kQ(QQ[3], LQ.o.minEasingY, LQ.o.maxEasingY, 1)] : "linear"
    }

    function tQ(QQ) {
      if (QQ) return {
        maxYaw: kQ(QQ.maxYaw, 0, LQ.o.maxPlayerLook, 0),
        maxPitch: kQ(QQ.maxPitch, 0, LQ.o.maxPlayerLook, 0),
        returnMs: vQ(QQ.returnMs, 0, LQ.o.maxReturnMs)
      }
    }
    const eQ = new RegExp(LQ.d);

    function MQ(QQ) {
      var FQ;
      if ("object" !== typeof QQ || null === QQ) return;
      const wQ = LQ.o.maxTransitionMs,
        qQ = LQ.o.minTransitionFadeMs;
      return {
        colour: "string" === typeof QQ.colour && eQ.test(QQ.colour) ? QQ.colour : LQ.h,
        outMs: kQ(QQ.outMs, qQ, wQ, qQ),
        holdMs: kQ(null !== (FQ = QQ.holdMs) && void 0 !== FQ ? FQ : 0, 0, wQ, 0),
        inMs: kQ(QQ.inMs, qQ, wQ, qQ)
      }
    }

    function GQ(QQ) {
      return !0 === QQ || void 0
    }

    function pQ(QQ) {
      if ("object" !== typeof QQ || null === QQ) return !1;
      const FQ = QQ.lookAt;
      return Number.isFinite(QQ.timeMs) && (0, qQ.r)(QQ.position, 3) && (void 0 === FQ || "string" === typeof FQ || (0, qQ.r)(FQ, 3))
    }

    function cQ(QQ) {
      return {
        ...QQ,
        timeMs: kQ(QQ.timeMs, 0, LQ.o.maxPathMs, 0),
        position: mQ(QQ.position),
        lookAt: uQ(QQ.lookAt),
        lookDirection: xQ(QQ.lookDirection),
        fov: vQ(QQ.fov, LQ.o.minFov, LQ.o.maxFov),
        easing: AQ(QQ.easing)
      }
    }

    function CQ(QQ) {
      const FQ = [];
      if (!Array.isArray(QQ)) return FQ;
      for (const wQ of QQ.slice(0, LQ.o.maxKeyframes)) {
        if (!pQ(wQ)) continue;
        const QQ = cQ(wQ);
        (0 === FQ.length || QQ.timeMs > FQ[FQ.length - 1].timeMs) && FQ.push(QQ)
      }
      return FQ
    }

    function SQ(QQ) {
      if ("object" !== typeof QQ || null === QQ) return {
        mode: "default"
      };
      const FQ = {
          blendInMs: vQ(QQ.blendInMs, 0, LQ.o.maxBlendInMs),
          blendEasing: AQ(QQ.blendEasing),
          transition: MQ(QQ.transition),
          letterbox: GQ(QQ.letterbox),
          hideHud: GQ(QQ.hideHud)
        },
        wQ = {
          mode: "default",
          ...FQ
        };
      if ("default" === QQ.mode || "fixed" === QQ.mode && !(0, qQ.r)(QQ.position, 3)) return wQ;
      const oQ = {
        ...FQ,
        fov: vQ(QQ.fov, LQ.o.minFov, LQ.o.maxFov),
        playerFacing: (HQ = QQ.playerFacing, DQ.includes(HQ) ? HQ : void 0),
        playerLook: tQ(QQ.playerLook)
      };
      var HQ, bQ;
      switch (QQ.mode) {
        case "fixed":
          return {
            ...QQ, ...oQ, position: mQ(QQ.position), lookAt: uQ(QQ.lookAt), lookDirection: xQ(QQ.lookDirection)
          };
        case "follow":
          return {
            ...QQ, ...oQ, target: "string" === typeof QQ.target ? QQ.target : void 0, lookAt: uQ(QQ.lookAt), offset: (bQ = QQ.offset, Array.isArray(bQ) ? [kQ(bQ[0], -LQ.o.maxOffset, LQ.o.maxOffset, 0), kQ(bQ[1], -LQ.o.maxOffset, LQ.o.maxOffset, 0), kQ(bQ[2], -LQ.o.maxOffset, LQ.o.maxOffset, 0)] : [0, 0, 0]), lookDirection: xQ(QQ.lookDirection), smoothMs: vQ(QQ.smoothMs, 0, LQ.o.maxSmoothMs)
          };
        case "path":
          return {
            ...QQ, ...oQ, keyframes: CQ(QQ.keyframes)
          };
        case "frame":
          return {
            ...QQ, ...oQ, targets: YQ(QQ.targets), viewHeading: vQ(QQ.viewHeading, -LQ.o.maxFrameHeading, LQ.o.maxFrameHeading), viewElevation: vQ(QQ.viewElevation, 0, LQ.o.maxFrameElevation), padding: vQ(QQ.padding, 0, LQ.o.maxFrameDistance), closestDistance: vQ(QQ.closestDistance, 0, LQ.o.maxFrameDistance), furthestDistance: vQ(QQ.furthestDistance, 0, LQ.o.maxFrameDistance), smoothMs: vQ(QQ.smoothMs, 0, LQ.o.maxSmoothMs)
          };
        default:
          return wQ
      }
    }
  },
  38183: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ
    });
    var LQ = wQ(1237);

    function qQ(QQ) {
      const FQ = /(\d*\.?\d+)px/.exec(QQ);
      return FQ ? Number(FQ[1]) : null
    }

    function oQ(QQ) {
      return QQ.split(/[\s,]+/).pop()
    }
    let DQ = !1;
    const kQ = {
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
      drawText: function(QQ, FQ, LQ, kQ, vQ, mQ) {
        if (vQ <= 0 || mQ <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: uQ,
          fontVariant: HQ,
          fontWeight: bQ,
          fontSize: YQ,
          font: xQ
        } = this, AQ = [uQ, HQ, bQ, `${YQ}px`, xQ].filter(Boolean).join(" "), tQ = [
          [bQ, `${YQ}px`, oQ(xQ)].filter(Boolean).join(" "), `${YQ}px sans-serif`
        ], eQ = QQ.font, MQ = function(QQ, FQ, wQ) {
          for (const LQ of FQ) {
            QQ.font = LQ;
            const FQ = qQ(QQ.font),
              DQ = oQ(LQ);
            if (null !== FQ && Math.abs(FQ - wQ) <= .5 && QQ.font.toLowerCase().includes(DQ.toLowerCase())) return LQ
          }
          return null
        }(QQ, [AQ, ...tQ], YQ);
        MQ !== AQ && function(QQ, FQ, LQ) {
          DQ || (DQ = !0, Promise.resolve().then((() => wQ(1087))).then((wQ => {
            let {
              pA: qQ
            } = wQ;
            qQ(new Error("A canvas didn't take canvasTxt's font"), {
              font: QQ,
              iY: FQ,
              drawnWith: null !== LQ && void 0 !== LQ ? LQ : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(AQ, eQ, MQ);
        const GQ = qQ(QQ.font);
        if (null === MQ && null !== GQ && GQ > 0) {
          const wQ = YQ / GQ;
          QQ.save();
          try {
            return QQ.scale(wQ, wQ), {
              height: this.drawLines(QQ, FQ, LQ / wQ, kQ / wQ, vQ / wQ, mQ / wQ, GQ).height * wQ
            }
          } finally {
            QQ.restore()
          }
        }
        return this.drawLines(QQ, FQ, LQ, kQ, vQ, mQ, YQ)
      },
      drawLines: function(QQ, FQ, wQ, qQ, oQ, DQ, kQ) {
        const vQ = wQ + oQ,
          mQ = qQ + DQ;
        let uQ, HQ = qQ + DQ / 2 + kQ / 2;
        "right" === this.align ? (uQ = vQ, QQ.textAlign = "right") : "left" === this.align ? (uQ = wQ, QQ.textAlign = "left") : (uQ = wQ + oQ / 2, QQ.textAlign = "center");
        for (const LQ of FQ) {
          QQ.measureText(LQ).width >= oQ && (FQ = FQ.replace(LQ, ""))
        }
        FQ = (0, LQ.Z)(FQ);
        const bQ = [],
          YQ = FQ.split("\n"),
          xQ = this.justify ? QQ.measureText("\u200a").width : 0;
        YQ.forEach((FQ => {
          let wQ = QQ.measureText(FQ).width;
          if (wQ <= oQ) bQ.push(FQ);
          else {
            let LQ = FQ;
            const qQ = oQ;
            let DQ, kQ, vQ;
            for (wQ = QQ.measureText(LQ).width; wQ > qQ;) {
              for (DQ = 0, kQ = 0, vQ = ""; kQ < qQ;) DQ++, vQ = LQ.substr(0, DQ), kQ = QQ.measureText(vQ).width;
              DQ--, vQ = vQ.substr(0, DQ);
              const FQ = DQ;
              if (" " !== LQ.substr(DQ, 1)) {
                for (;
                  " " !== LQ.substr(DQ, 1) && 0 !== DQ;) DQ--;
                0 === DQ && (DQ = FQ), vQ = LQ.substr(0, DQ)
              }
              vQ = this.justify ? this.justifyLine(QQ, vQ, xQ, "\u200a", oQ) : vQ, LQ = LQ.substr(DQ), wQ = QQ.measureText(LQ).width, bQ.push(vQ)
            }
            wQ > 0 && bQ.push(LQ)
          }
        }));
        const AQ = this.lineHeight ? this.lineHeight : this.getTextHeight(QQ, FQ),
          tQ = AQ * (bQ.length - 1),
          eQ = tQ / 2;
        let MQ = qQ;
        "top" === this.vAlign ? HQ = qQ + kQ : "bottom" === this.vAlign ? (HQ = mQ - tQ, MQ = mQ) : (MQ = qQ + DQ / 2, HQ -= eQ), bQ.forEach((FQ => {
          FQ = FQ.trim(), QQ.fillText(FQ, uQ, HQ), HQ += AQ
        })), this.debug && (QQ.lineWidth = 3, QQ.strokeStyle = "#00909e", QQ.strokeRect(wQ, qQ, oQ, DQ), QQ.lineWidth = 2, QQ.strokeStyle = "#f6d743", QQ.beginPath(), QQ.moveTo(uQ, qQ), QQ.lineTo(uQ, mQ), QQ.stroke(), QQ.strokeStyle = "#ff6363", QQ.beginPath(), QQ.moveTo(wQ, MQ), QQ.lineTo(vQ, MQ), QQ.stroke());
        return {
          height: tQ + AQ
        }
      },
      getTextHeight: function(QQ, FQ) {
        const wQ = QQ.textBaseline;
        QQ.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: LQ
        } = QQ.measureText(FQ);
        return QQ.textBaseline = wQ, LQ
      },
      justifyLine: function(QQ, FQ, wQ, LQ, qQ) {
        const oQ = FQ.trim(),
          DQ = QQ.measureText(oQ).width,
          kQ = oQ.split(/\s+/).length - 1,
          vQ = Math.floor((qQ - DQ) / wQ);
        if (kQ <= 0 || vQ <= 0) return oQ;
        const mQ = Math.floor(vQ / kQ);
        let uQ = vQ - kQ * mQ,
          HQ = [];
        for (let bQ = 0; bQ < mQ; bQ++) HQ.push(LQ);
        HQ = HQ.join("");
        return oQ.replace(/\s+/g, (QQ => {
          const FQ = uQ > 0 ? HQ + LQ : HQ;
          return uQ--, QQ + FQ
        }))
      }
    }
  },
  38657: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return FQ.set(QQ), FQ
    }
    wQ.d(FQ, {
      b: () => LQ
    })
  },
  38188: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => AQ,
      d: () => xQ,
      h: () => bQ,
      k: () => uQ,
      l: () => HQ
    });
    var LQ = wQ(4119),
      qQ = wQ(317);
    const oQ = 1024,
      DQ = 1536,
      kQ = 2 * LQ.k + 1,
      vQ = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      mQ = 1.5;

    function uQ(QQ, FQ, wQ) {
      if ("string" !== typeof QQ) return FQ;
      try {
        const wQ = JSON.parse(QQ);
        return wQ && "object" === typeof wQ ? wQ : FQ
      } catch (LQ) {
        return void 0 !== wQ && console.error(`Couldn't parse ${wQ}`, LQ), FQ
      }
    }

    function HQ(QQ) {
      return uQ(QQ, null, "a leaderboard's rows")
    }

    function bQ(QQ, FQ) {
      var wQ, LQ;
      return null !== FQ && void 0 !== FQ ? FQ : {
        status: null !== (wQ = QQ.status) && void 0 !== wQ ? wQ : "loading",
        entries: null !== (LQ = QQ.entries) && void 0 !== LQ ? LQ : []
      }
    }

    function YQ(QQ, FQ) {
      return "number" === typeof QQ && Number.isFinite(QQ) && QQ > 0 ? QQ : FQ
    }

    function xQ(QQ, FQ) {
      const wQ = YQ(QQ.size, 1);
      let LQ = YQ(QQ.width, YQ(2.5 * wQ, 2.5)),
        qQ = YQ(QQ.height, YQ(3.75 * wQ, 3.75));
      Number.isFinite(oQ * qQ / LQ) && Number.isFinite(DQ * LQ / qQ) || (LQ = 2.5, qQ = 3.75);
      const kQ = qQ / LQ,
        vQ = Math.max(1, Math.min(oQ, FQ / kQ));
      return {
        width: LQ,
        height: qQ,
        layoutWidth: Math.max(oQ, DQ / kQ),
        layoutHeight: Math.max(DQ, oQ * kQ),
        pixelWidth: Math.round(vQ),
        pixelHeight: Math.round(Math.max(1, Math.min(FQ, vQ * kQ)))
      }
    }

    function AQ(QQ, FQ, wQ, DQ, uQ, HQ) {
      QQ.setTransform(1, 0, 0, 1, 0, 0), QQ.fillStyle = qQ.K.defaultNameTagBackground, QQ.fillRect(0, 0, FQ, wQ), QQ.scale(FQ / DQ.layoutWidth, wQ / DQ.layoutHeight), QQ.translate((DQ.layoutWidth - oQ) / 2, 0),
        function(QQ, FQ, wQ, oQ) {
          var DQ, uQ, HQ, bQ;
          const {
            top: YQ,
            around: xQ,
            showPlayerText: AQ,
            localPlayerDbId: MQ
          } = wQ, {
            whiteUiText: GQ,
            grayUiText: pQ,
            yellowUiText: cQ
          } = qQ.K;
          QQ.textBaseline = "middle";
          const CQ = function(FQ, wQ, LQ, qQ, oQ, DQ) {
              let kQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              QQ.font = `bold ${qQ}px 'Jetbrains Mono', monospace`, QQ.fillStyle = oQ, QQ.textAlign = kQ;
              let vQ = FQ.replace(/[\r\n\t]/g, " ");
              if (QQ.measureText(vQ).width > DQ) {
                for (; vQ.length > 0 && QQ.measureText(`${vQ}\u2026`).width > DQ;) vQ = vQ.slice(0, -1);
                vQ += "\u2026"
              }
              QQ.fillText(vQ, wQ, LQ)
            },
            SQ = FQ => {
              QQ.fillStyle = GQ, QQ.globalAlpha = .15, QQ.fillRect(24, FQ, 976, 2), QQ.globalAlpha = 1
            },
            iQ = null === MQ ? null : (0, qQ.pc)(MQ),
            WQ = QQ => null !== iQ && QQ.playerHash === iQ,
            RQ = tQ(YQ.entries, LQ.o),
            OQ = "ready" === YQ.status && RQ.length > 0,
            sQ = null === xQ ? [] : tQ(xQ.entries, kQ),
            rQ = RQ.some(WQ),
            IQ = null === xQ ? null : function(QQ) {
              const FQ = QQ;
              if (!FQ || !Number.isFinite(FQ.rank) || !Number.isFinite(FQ.tied) || !Number.isFinite(FQ.total)) return null;
              return FQ
            }(xQ.standing),
            UQ = sQ.find(WQ),
            NQ = RQ.find(WQ),
            TQ = null === IQ || void 0 === UQ ? null : {
              value: UQ.value,
              rank: IQ.rank
            },
            KQ = eQ(RQ, void 0 === NQ || NQ.value === (null === TQ || void 0 === TQ ? void 0 : TQ.value) ? TQ : null),
            zQ = eQ(sQ, TQ),
            lQ = (QQ, FQ) => {
              const wQ = QQ.findIndex(WQ);
              return wQ >= 0 ? FQ[wQ] : null
            },
            jQ = null !== (DQ = null !== (uQ = null === IQ || void 0 === IQ ? void 0 : IQ.rank) && void 0 !== uQ ? uQ : lQ(sQ, zQ)) && void 0 !== DQ ? DQ : lQ(RQ, KQ);
          QQ.font = "bold 34px 'Jetbrains Mono', monospace";
          const aQ = [...OQ ? KQ : [], ...rQ ? [] : zQ],
            XQ = Math.min(280, Math.max(0, ...aQ.map((FQ => QQ.measureText(vQ.format(FQ)).width)))),
            fQ = XQ <= 80,
            VQ = fQ ? 80 : 32 + XQ,
            hQ = fQ ? 148 : VQ + 28,
            JQ = 660 - hQ;
          CQ(`TOP ${LQ.o}  /  ALL TIME`, 24, 52, 28, pQ, 976), CQ(AQ ? String(null !== (HQ = FQ.title) && void 0 !== HQ ? HQ : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, GQ, 976), CQ("RANK", 32, 174, 28, pQ, hQ - 40), CQ("PLAYER", hQ, 174, 28, pQ, JQ), CQ(AQ ? String(null !== (bQ = FQ.scoreLabel) && void 0 !== bQ ? bQ : "Score").slice(0, 24) : "Score", 992, 174, 28, pQ, 304, "right"), SQ(202);
          const EQ = (oQ - 232) / (LQ.o + mQ + kQ),
            nQ = 208 + LQ.o * EQ,
            gQ = nQ + mQ * EQ,
            PQ = (FQ, wQ, LQ, qQ) => {
              const oQ = WQ(FQ);
              QQ.fillStyle = oQ ? cQ : GQ, QQ.globalAlpha = oQ ? .15 : qQ ? .035 : 0, QQ.fillRect(24, LQ - EQ / 2 + 1, 976, EQ - 2), QQ.globalAlpha = 1;
              const DQ = oQ ? cQ : GQ;
              CQ(vQ.format(wQ), VQ, LQ, 34, DQ, fQ ? 80 : XQ, fQ ? "center" : "right"), CQ(AQ ? String(FQ.name).slice(0, 64) : "Player", hQ, LQ, 34, DQ, JQ);
              const kQ = vQ.format(FQ.value);
              CQ(QQ.measureText(kQ).width > 304 ? FQ.value.toExponential(6) : kQ, 992, LQ, 34, DQ, 304, "right")
            };
          if (OQ)
            for (const [LQ, qQ] of RQ.entries()) PQ(qQ, KQ[LQ], 208 + (LQ + .5) * EQ, LQ % 2 === 0);
          else {
            const QQ = "error" === YQ.status,
              FQ = QQ ? "Couldn't load leaderboard" : "ready" === YQ.status ? "No scores yet" : "Loading leaderboard\u2026",
              wQ = QQ ? "Trying again shortly" : "ready" === YQ.status ? "Be the first on the board!" : "Fetching the top players",
              LQ = (208 + nQ) / 2;
            CQ(FQ, 512, LQ - 28, 40, QQ ? qQ.K.redUiText : GQ, 960, "center"), CQ(wQ, 512, LQ + 27, 30, pQ, 960, "center")
          }
          const ZQ = nQ + mQ * EQ / 2;
          if (null === jQ) SQ(ZQ);
          else {
            const FQ = null === IQ ? 0 : IQ.tied - 1,
              wQ = `YOUR RANK #${vQ.format(jQ)}${null===IQ?"":` of ${vQ.format(IQ.total)}`}`;
            QQ.font = "bold 36px 'Jetbrains Mono', monospace";
            const LQ = Math.max(20, Math.min(36, Math.floor(34560 / QQ.measureText(wQ).width)));
            CQ(wQ, 512, ZQ - (FQ > 0 ? 15 : 0), LQ, cQ, 960, "center"), FQ > 0 && CQ(`Tied with ${vQ.format(FQ)} other${1===FQ?"":"s"}`, 512, ZQ + 24, 24, pQ, 960, "center")
          }
          if (null === xQ) return;
          const yQ = gQ + kQ * EQ / 2;
          if (rQ) CQ(`You're in the top ${LQ.o}!`, 512, yQ, 40, cQ, 960, "center");
          else if (0 === sQ.length) CQ("You're not on this board yet", 512, yQ, 34, pQ, 960, "center");
          else
            for (const [LQ, qQ] of sQ.entries()) PQ(qQ, zQ[LQ], gQ + (LQ + .5) * EQ, LQ % 2 === 0)
        }(QQ, uQ, HQ, DQ.layoutHeight)
    }

    function tQ(QQ, FQ) {
      return Array.isArray(QQ) ? QQ.slice(0, FQ).filter((QQ => QQ && Number.isFinite(QQ.rank) && Number.isFinite(QQ.value))) : []
    }

    function eQ(QQ, FQ) {
      const wQ = [];
      let LQ = !1;
      return QQ.forEach(((qQ, oQ) => {
        if (null !== FQ && qQ.value === FQ.value) return void wQ.push(FQ.rank);
        const DQ = oQ > 0 && qQ.value === QQ[oQ - 1].value;
        DQ || (LQ = 0 === oQ && 1 !== qQ.rank), wQ.push(DQ && !LQ ? wQ[oQ - 1] : qQ.rank)
      })), wQ
    }
  },
  38395: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      c: () => oQ
    });
    const LQ = 32;

    function qQ(QQ) {
      return Array.from(QQ).length
    }

    function oQ(QQ) {
      const FQ = [""];
      let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        qQ = "";
      const oQ = () => {
        FQ.push(""), wQ = 0, qQ = ""
      };
      for (const DQ of QQ.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(DQ)) oQ();
        else if (/^\s+$/.test(DQ)) qQ += DQ;
      else if (DQ.length > 0) {
        const QQ = Array.from(DQ);
        wQ > 0 && wQ + qQ.length + QQ.length > LQ && oQ(), FQ[FQ.length - 1] += qQ, wQ += qQ.length, qQ = "";
        for (const qQ of QQ) wQ >= LQ && oQ(), FQ[FQ.length - 1] += qQ, wQ++
      }
      return FQ[FQ.length - 1] += qQ, FQ
    }
  },
  38654: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(36250),
      qQ = wQ.n(LQ);
    const oQ = [1, 1, 1];

    function DQ(QQ) {
      if (!QQ) return [...oQ];
      try {
        const [FQ, wQ, LQ] = qQ()(QQ).rgb().array();
        return [FQ / 255, wQ / 255, LQ / 255]
      } catch (FQ) {
        return console.warn(`Invalid groundArrowPath colour "${QQ}":`, FQ), [...oQ]
      }
    }
  },
  38743: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      h: () => mQ,
      i: () => vQ
    });
    var LQ = wQ(2712),
      qQ = wQ(2706);
    const oQ = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      DQ = 512;

    function kQ(QQ) {
      var FQ;
      const wQ = Math.min(screen.width, screen.height) * (null !== (FQ = (0, LQ.e)()) && void 0 !== FQ ? FQ : (0, qQ.j)());
      return Math.max(window.innerHeight * (0, qQ.j)(), wQ) / (0, qQ.k)(QQ)
    }

    function vQ(QQ, FQ, wQ) {
      return FQ / (2 * Math.tan(wQ / 2)) > DQ ? QQ : mQ(QQ)
    }

    function mQ(QQ) {
      return QQ.map((QQ => QQ.replace(oQ, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  33921: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      e: () => kQ,
      g: () => DQ,
      h: () => qQ,
      k: () => LQ
    });
    const LQ = {
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
      qQ = "/textures/dayNight/sun.png",
      oQ = "/textures/dayNight/moon.png",
      DQ = "/textures/dayNight/stars",
      kQ = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38718: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      D: () => DQ,
      d: () => uQ,
      h: () => HQ,
      l: () => LQ,
      o: () => vQ,
      s: () => qQ,
      v: () => mQ,
      z: () => kQ
    });
    const LQ = ["linear", "easeIn", "easeOut", "easeInOut"],
      qQ = ["movement", "camera", "cursor"],
      oQ = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function DQ(QQ, FQ) {
      return kQ(QQ, FQ, oQ)
    }

    function kQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (QQ === FQ || Number.isNaN(QQ) && Number.isNaN(FQ)) return !0;
      if ("object" !== typeof QQ || "object" !== typeof FQ || null === QQ || null === FQ || Array.isArray(QQ) !== Array.isArray(FQ)) return !1;
      const LQ = QQ,
        qQ = FQ;
      for (const oQ of new Set([...Object.keys(LQ), ...Object.keys(qQ)]))
        if (!wQ.includes(oQ) && !kQ(LQ[oQ], qQ[oQ])) return !1;
      return !0
    }
    const vQ = {
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
      mQ = "^-[1-9][0-9]*$",
      uQ = "^#[0-9a-fA-F]{6}$",
      HQ = "#000000"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);