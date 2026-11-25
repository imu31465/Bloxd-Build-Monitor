export const id = 195;
export const ids = [195];
export const modules = {
  39409: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor(QQ, WQ) {
        this.read = QQ, this.apply = WQ, this.release = null
      }
      turn(QQ, WQ) {
        const XQ = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: WQ,
          forcedCameraDirection: [QQ[0], QQ[1], QQ[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), WQ + 100),
          transitionMs: XQ
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
  38928: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      e: () => qQ
    });
    const wQ = new Map;

    function qQ(QQ, WQ) {
      wQ.set(QQ, WQ)
    }

    function TQ(QQ) {
      return QQ ? wQ.get(QQ) : void 0
    }
  },
  39887: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ
    });
    var wQ = XQ(38499);

    function qQ(QQ, WQ, XQ) {
      var qQ, TQ, zQ, sQ, FQ, PQ, gQ;
      const JQ = (0, wQ.e)(QQ, WQ, XQ[0], XQ[1], XQ[2]),
        rQ = JQ ? null !== (qQ = JQ.textCell) && void 0 !== qQ ? qQ : JQ.rect.anchor : XQ,
        IQ = WQ(rQ[0], rQ[1], rQ[2]);
      return {
        pos: [XQ[0], XQ[1], XQ[2]],
        noticeboardSpan: JQ && {
          width: JQ.rect.width,
          height: JQ.rect.height
        },
        text: null !== (TQ = null === IQ || void 0 === IQ || null === (zQ = IQ.persisted) || void 0 === zQ || null === (sQ = zQ.shared) || void 0 === sQ ? void 0 : sQ.text) && void 0 !== TQ ? TQ : "",
        textSize: null !== (FQ = null === IQ || void 0 === IQ || null === (PQ = IQ.persisted) || void 0 === PQ || null === (gQ = PQ.shared) || void 0 === gQ ? void 0 : gQ.textSize) && void 0 !== FQ ? FQ : null
      }
    }
  },
  38792: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      switch (QQ.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    XQ.d(WQ, {
      b: () => qQ,
      c: () => TQ,
      g: () => wQ
    });
    const qQ = 4,
      TQ = 3
  },
  39434: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      c: () => TQ
    });
    var wQ = XQ(402);
    const qQ = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class TQ {
      constructor(QQ) {
        this.importGame = QQ, this.loads = new Map, this.loaded = new Map
      }
      load(QQ) {
        const WQ = (0, wQ.Mb)(QQ);
        if (!qQ.has(WQ)) return Promise.resolve(void 0);
        let XQ = this.loads.get(WQ);
        return XQ || (XQ = this.importGame(WQ).then((QQ => {
          const XQ = QQ.default;
          if ("function" !== typeof XQ) throw new Error(`${WQ}'s client code has no default-exported factory`);
          return this.loaded.set(WQ, XQ), XQ
        })).catch((QQ => {
          throw this.loads.delete(WQ), QQ
        })), this.loads.set(WQ, XQ)), XQ
      }
      loadedFactory(QQ) {
        const WQ = (0, wQ.Mb)(QQ);
        if (!qQ.has(WQ)) return;
        const XQ = this.loaded.get(WQ);
        if (!XQ) throw new Error(`${WQ}'s client code started before it loaded`);
        return XQ
      }
    }
  },
  39893: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(9679),
      qQ = XQ(34529),
      TQ = XQ(3555);

    function zQ(QQ) {
      if (QQ === wQ.b) return 0;
      const WQ = (0, TQ.c)(QQ);
      if (void 0 !== WQ && WQ <= qQ.MAX_BLOCK_ID) return WQ;
      const XQ = (0, TQ.c)(QQ.split("|")[0]);
      if (void 0 !== XQ && XQ <= qQ.MAX_BLOCK_ID && (0, qQ.rootMetaDescOf)(XQ) === QQ) return XQ;
      throw new Error(`Invalid block name. You sent ${QQ}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39489: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ
    });
    var wQ = XQ(26);
    class qQ {
      constructor(QQ) {
        this.screen = QQ, this.hidesHud = !1
      }
      show(QQ, WQ) {
        this.screen.setFade(QQ.colour, QQ.alpha), this.screen.setLetterbox(!0 === WQ.letterbox, QQ.alpha < 1), this.setHudHidden(!0 === WQ.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(QQ) {
        this.hidesHud !== QQ && (this.hidesHud = QQ, wQ.b.set({
          isUiHiddenByCamera: QQ
        }))
      }
    }
  },
  39449: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => gQ,
      e: () => wQ,
      f: () => rQ,
      j: () => JQ,
      l: () => zQ,
      p: () => jQ,
      r: () => FQ,
      u: () => BQ,
      w: () => PQ,
      x: () => sQ
    });
    const wQ = Math.PI / 2 - .001,
      qQ = 2 * Math.PI,
      TQ = 1e-9;

    function zQ(QQ, WQ) {
      WQ.heading = QQ.heading, WQ.pitch = QQ.pitch
    }

    function sQ(QQ, WQ) {
      const XQ = WQ - QQ;
      return XQ - qQ * Math.floor((XQ + Math.PI) / qQ)
    }

    function FQ(QQ, WQ, XQ) {
      return QQ + sQ(QQ, WQ) * XQ
    }

    function PQ(QQ) {
      if (!Number.isFinite(QQ)) return QQ;
      const WQ = QQ - qQ * Math.floor(QQ / qQ);
      return WQ < qQ ? WQ : 0
    }

    function gQ(QQ, WQ) {
      return QQ + sQ(QQ, WQ)
    }

    function JQ(QQ) {
      return Math.max(-wQ, Math.min(wQ, QQ))
    }

    function rQ(QQ, WQ, XQ) {
      const wQ = Math.cos(WQ);
      return XQ[0] = wQ * Math.sin(QQ), XQ[1] = -Math.sin(WQ), XQ[2] = wQ * Math.cos(QQ), XQ
    }

    function IQ(QQ, WQ, XQ, wQ) {
      const qQ = Math.sqrt(QQ * QQ + XQ * XQ);
      return qQ < TQ && Math.abs(WQ) < TQ || (qQ >= TQ && (wQ.heading = Math.atan2(QQ, XQ)), wQ.pitch = JQ(Math.atan2(-WQ, qQ) + 0)), wQ
    }

    function jQ(QQ, WQ) {
      return IQ(QQ[0], QQ[1], QQ[2], WQ)
    }

    function BQ(QQ, WQ, XQ) {
      return IQ(WQ[0] - QQ[0], WQ[1] - QQ[1], WQ[2] - QQ[2], XQ)
    }
  },
  39481: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      f: () => qQ
    });
    var wQ = XQ(39449);

    function qQ(QQ) {
      var WQ;
      const XQ = "default" === QQ.mode ? "movement" : null !== (WQ = QQ.playerFacing) && void 0 !== WQ ? WQ : "movement";
      return "cursor" === XQ ? {
        facing: XQ,
        mouseTurns: null
      } : {
        facing: XQ,
        mouseTurns: "default" !== QQ.mode && void 0 !== QQ.playerLook ? "look" : "view"
      }
    }

    function TQ(QQ, WQ, XQ, qQ, TQ, zQ) {
      return zQ.jR = 0, zQ.yR = 0, zQ.pointedAt = void 0, void 0 !== qQ ? TQ ? (zQ.pointedAt = qQ, QQ) : (0, wQ.w)(qQ.heading) : TQ ? (zQ.jR = WQ, zQ.yR = XQ, QQ) : (0, wQ.w)(QQ + WQ)
    }
  },
  39458: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => eQ
    });
    var wQ = XQ(39467),
      qQ = XQ(39449),
      TQ = XQ(37265);

    function zQ(QQ, WQ, XQ, wQ) {
      if (!(wQ > 0)) return WQ;
      const qQ = WQ > QQ ? Math.min(WQ, QQ + XQ / wQ) : Math.max(WQ, QQ - XQ / wQ);
      return Math.abs(WQ - qQ) < 1e-9 ? WQ : qQ
    }
    class sQ {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: wQ.d,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(QQ) {
        !this.isGoingOut() && this.sinceTurnMs < wQ.m.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: QQ
        } : (this.waiting = null, this.startOut(QQ))
      }
      fadeIn(QQ) {
        this.isGoingOut() ? this.sinceTurnMs < wQ.m.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: QQ
        } : (this.waiting = null, this.startIn(QQ)) : this.waiting = null
      }
      advance(QQ) {
        const WQ = this.waiting;
        if (null === WQ) return this.step(QQ);
        const XQ = wQ.m.minFadeTurnMs - this.sinceTurnMs;
        if (XQ > QQ) return this.step(QQ);
        const qQ = this.step(XQ);
        return this.waiting = null, "out" === WQ.turn ? this.startOut(WQ.transition) : this.startIn(WQ.minMs), this.step(QQ - XQ) || qQ
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(QQ) {
        ("in" === this.phase || null === this.phase && this.clearMs < wQ.m.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = QQ.colour), this.outMs = QQ.outMs, this.holdMs = QQ.holdMs, this.inMs = QQ.inMs
      }
      startIn(QQ) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(QQ, this.inMs)
      }
      step(QQ) {
        const WQ = this.screen;
        this.sinceTurnMs += QQ, null === this.phase && (this.clearMs += QQ);
        let XQ = !1,
          qQ = QQ;
        if ("out" === this.phase) {
          const wQ = (1 - WQ.alpha) * this.outMs;
          if (WQ.alpha = zQ(WQ.alpha, 1, QQ, this.outMs), WQ.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, qQ = Math.max(0, QQ - wQ), XQ = !0
        }
        let TQ = QQ;
        if ("hold" === this.phase) {
          this.heldMs += qQ;
          const QQ = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - wQ.m.minFadeTurnMs);
          if (QQ < 0 || XQ) return XQ;
          this.phase = "in", this.sinceTurnMs = QQ, TQ = QQ
        }
        return "in" === this.phase && (WQ.alpha = zQ(WQ.alpha, 0, TQ, this.inMs), WQ.alpha <= 0 && (this.phase = null, this.clearMs = 0)), XQ
      }
    }
    var FQ = XQ(39444),
      PQ = XQ(39476),
      gQ = XQ(1972),
      JQ = XQ(36870);

    function rQ(QQ, WQ) {
      for (let XQ = 0; XQ < WQ.length; XQ++) WQ[XQ] = QQ[XQ]
    }

    function IQ(QQ, WQ) {
      var XQ;
      return null !== (XQ = QQ.fov) && void 0 !== XQ ? XQ : WQ.getDefaultFov()
    }

    function jQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = 2 / wQ,
        zQ = Math.exp(-TQ * qQ);
      for (let sQ = 0; sQ < QQ.length; sQ++) {
        const wQ = QQ[sQ] - XQ[sQ],
          FQ = (WQ[sQ] + TQ * wQ) * qQ;
        QQ[sQ] = XQ[sQ] + (wQ + FQ) * zQ, WQ[sQ] = (WQ[sQ] - TQ * FQ) * zQ
      }
    }
    class BQ {
      constructor(QQ, WQ, XQ, wQ) {
        var TQ, zQ, sQ, FQ, PQ;
        this.settings = QQ, this.nJ = WQ, this.targets = XQ, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Fy = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, qQ.w)((0, gQ.j)(null !== (TQ = QQ.viewHeading) && void 0 !== TQ ? TQ : 0)),
          pitch: (0, qQ.j)((0, gQ.j)(null !== (zQ = QQ.viewElevation) && void 0 !== zQ ? zQ : 45))
        }, this.closestDistance = null !== (sQ = QQ.closestDistance) && void 0 !== sQ ? sQ : Math.min(6, null !== (FQ = QQ.furthestDistance) && void 0 !== FQ ? FQ : 1 / 0), this.furthestDistance = null !== (PQ = QQ.furthestDistance) && void 0 !== PQ ? PQ : Math.max(64, this.closestDistance);
        const JQ = (0, qQ.f)(this.base.heading, this.base.pitch, this.forward),
          rQ = wQ.position,
          IQ = this.closestDistance;
        this.goal = [rQ[0] + JQ[0] * IQ, rQ[1] + JQ[1] * IQ, rQ[2] + JQ[2] * IQ, IQ, this.base.heading, this.base.pitch]
      }
      update(QQ, WQ, XQ) {
        var wQ, TQ;
        this.placeGoal(null !== (wQ = this.settings.fov) && void 0 !== wQ ? wQ : this.nJ.getBaseFov()), this.goal[4] = (0, qQ.A)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const zQ = null !== (TQ = this.settings.smoothMs) && void 0 !== TQ ? TQ : 400;
        !this.started || zQ < 1 ? (rQ(this.goal, this.smoothed), this.Fy.fill(0), this.started = !0) : jQ(this.smoothed, this.Fy, this.goal, zQ, QQ), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, qQ.j)(this.smoothed[5]), WQ.apply(this.angles, XQ);
        const sQ = (0, qQ.f)(XQ.heading, XQ.pitch, this.forward);
        for (let qQ = 0; qQ < 3; qQ++) XQ.position[qQ] = this.smoothed[qQ] - sQ[qQ] * this.smoothed[3];
        XQ.fov = IQ(this.settings, this.nJ)
      }
      continueFrom(QQ) {
        QQ instanceof BQ && (rQ(QQ.goal, this.goal), rQ(QQ.smoothed, this.smoothed), rQ(QQ.Fy, this.Fy), this.framedTargets = QQ.framedTargets, this.started = QQ.started)
      }
      reset() {
        this.Fy.fill(0), this.started = !1
      }
      placeGoal(QQ) {
        var WQ;
        let XQ = 0;
        for (const gQ of this.settings.targets) {
          const QQ = this.targets.currentAimPoint(gQ);
          QQ && (0, FQ.f)(QQ, this.pointAt(XQ++))
        }
        if (XQ > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const QQ = this.targets.aimPoint(this.nJ.localPlayerId);
          QQ && (0, FQ.f)(QQ, this.pointAt(XQ++))
        }
        const wQ = this.goal;
        if (0 === XQ) return void(wQ[3] = this.withinDistances(wQ[3]));
        for (let FQ = 0; FQ < 3; FQ++) {
          let QQ = 1 / 0,
            WQ = -1 / 0;
          for (let wQ = 0; wQ < XQ; wQ++) QQ = Math.min(QQ, this.points[wQ][FQ]), WQ = Math.max(WQ, this.points[wQ][FQ]);
          wQ[FQ] = (QQ + WQ) / 2
        }
        let qQ = 0;
        for (let FQ = 0; FQ < XQ; FQ++) {
          const QQ = this.points[FQ];
          qQ = Math.max(qQ, Math.hypot(QQ[0] - wQ[0], QQ[1] - wQ[1], QQ[2] - wQ[2]))
        }
        const TQ = Math.tan((0, gQ.j)(QQ) / 2),
          zQ = Math.atan(TQ * (!0 === this.settings.letterbox ? JQ.e : 1)),
          sQ = Math.atan(TQ * this.nJ.getAspectRatio()),
          PQ = (qQ + (null !== (WQ = this.settings.padding) && void 0 !== WQ ? WQ : 2)) / Math.sin(Math.min(zQ, sQ));
        wQ[3] = this.withinDistances(PQ)
      }
      withinDistances(QQ) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, QQ))
      }
      pointAt(QQ) {
        return QQ === this.points.length && this.points.push([0, 0, 0]), this.points[QQ]
      }
    }
    class yQ {
      constructor(QQ) {
        this.limits = QQ, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(QQ) {
        this.limits && (this.yawOffset = QQ.yawOffset, this.pitchOffset = QQ.pitchOffset, this.idleMs = QQ.idleMs)
      }
      update(QQ, WQ) {
        const XQ = this.limits;
        if (!XQ) return;
        const wQ = Number.isFinite(WQ.jR) ? WQ.jR : 0,
          qQ = Number.isFinite(WQ.yR) ? WQ.yR : 0;
        if (WQ.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: WQ.pointedAt.heading,
          pitch: WQ.pointedAt.pitch
        };
        else if (0 !== wQ || 0 !== qQ) this.idleMs = 0, this.yawOffset += wQ, this.pitchOffset += qQ;
        else {
          const WQ = Math.max(0, this.idleMs + QQ - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += QQ, void 0 !== XQ.returnMs && WQ > 0) {
            const QQ = XQ.returnMs > 0 ? Math.exp(-3 * WQ / XQ.returnMs) : 0;
            this.yawOffset *= QQ, this.pitchOffset *= QQ
          }
        }
        this.clampOffsets(XQ)
      }
      clampOffsets(QQ) {
        if (QQ.maxYaw >= 180) this.yawOffset = (0, qQ.x)(0, this.yawOffset);
        else {
          const WQ = (0, gQ.j)(QQ.maxYaw);
          this.yawOffset = Math.max(-WQ, Math.min(WQ, this.yawOffset))
        }
        const WQ = (0, gQ.j)(QQ.maxPitch);
        this.pitchOffset = Math.max(-WQ, Math.min(WQ, this.pitchOffset))
      }
      apply(QQ, WQ) {
        this.pointedAt && this.limits && (this.yawOffset = (0, qQ.x)(QQ.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - QQ.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const XQ = (0, qQ.j)(QQ.pitch + this.pitchOffset);
        this.pitchOffset = XQ - QQ.pitch, WQ.heading = (0, qQ.w)(QQ.heading + this.yawOffset), WQ.pitch = XQ
      }
      unapply(QQ, WQ) {
        WQ.heading = (0, qQ.w)(QQ.heading - this.yawOffset), WQ.pitch = (0, qQ.j)(QQ.pitch - this.pitchOffset)
      }
    }
    const VQ = 1e-6;

    function DQ(QQ) {
      return Math.sqrt(QQ[0] * QQ[0] + QQ[1] * QQ[1] + QQ[2] * QQ[2])
    }

    function pQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = qQ * qQ,
        zQ = TQ * qQ;
      return (2 * zQ - 3 * TQ + 1) * QQ + (zQ - 2 * TQ + qQ) * WQ + (-2 * zQ + 3 * TQ) * XQ + (zQ - TQ) * wQ
    }

    function GQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = qQ * qQ;
      return (6 * TQ - 6 * qQ) * QQ + (3 * TQ - 4 * qQ + 1) * WQ + (-6 * TQ + 6 * qQ) * XQ + (3 * TQ - 2 * qQ) * wQ
    }

    function UQ(QQ, WQ) {
      const XQ = WQ[0] - QQ[0],
        wQ = WQ[1] - QQ[1],
        qQ = WQ[2] - QQ[2];
      return Math.sqrt(XQ * XQ + wQ * wQ + qQ * qQ)
    }

    function bQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      for (let zQ = 0; zQ < 3; zQ++) TQ[zQ] = qQ ? QQ[zQ] * wQ : XQ[zQ] - WQ[zQ];
      return qQ && function(QQ, WQ) {
        const XQ = DQ(QQ);
        if (XQ > WQ) {
          const wQ = WQ / XQ;
          QQ[0] *= wQ, QQ[1] *= wQ, QQ[2] *= wQ
        }
      }(TQ, 3 * UQ(WQ, XQ)), TQ
    }

    function vQ(QQ, WQ, XQ, wQ) {
      for (let qQ = 0; qQ < 3; qQ++) wQ[qQ] = 6 * (WQ[qQ] - QQ[qQ]) - 2 * XQ[qQ];
      if (DQ(wQ) < VQ)
        for (let qQ = 0; qQ < 3; qQ++) wQ[qQ] = WQ[qQ] - QQ[qQ];
      return wQ
    }

    function dQ(QQ, WQ) {
      return [2 * WQ[0] - QQ[0], 2 * WQ[1] - QQ[1], 2 * WQ[2] - QQ[2]]
    }

    function HQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      if (!TQ && !zQ) return 0;
      const sQ = TQ ? QQ : 2 * WQ - XQ,
        FQ = zQ ? XQ : 2 * WQ - QQ,
        PQ = TQ ? wQ : qQ,
        gQ = zQ ? qQ : wQ,
        JQ = (WQ - sQ) / PQ,
        rQ = (FQ - WQ) / gQ;
      if (JQ * rQ <= 0) return 0;
      const IQ = (FQ - sQ) / (PQ + gQ),
        jQ = 3 * Math.min(Math.abs(JQ), Math.abs(rQ));
      return Math.max(-jQ, Math.min(jQ, IQ))
    }

    function aQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      const {
        u: sQ,
        segmentMs: FQ
      } = QQ;
      if (!QQ.curved) return XQ + (wQ - XQ) * sQ;
      return pQ(XQ, HQ(WQ, XQ, wQ, QQ.beforeMs, FQ, TQ, !0) * FQ, wQ, HQ(XQ, wQ, qQ, FQ, QQ.afterMs, !0, zQ) * FQ, sQ)
    }

    function lQ(QQ) {
      return Math.abs(QQ.pitch) >= qQ.e
    }
    class hQ {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.nodes = QQ, this.prevNodes = XQ, this.nextNodes = wQ, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = QQ.map(((QQ, XQ) => this.nodeTangent(WQ, qQ, XQ)))
      }
      sample(QQ, WQ, XQ) {
        const {
          index: wQ,
          toIndex: TQ,
          segmentMs: zQ,
          curved: sQ
        } = QQ, FQ = this.fromAngles, PQ = this.toAngles, gQ = this.nodeAngles(wQ, XQ.position, WQ, FQ), JQ = this.nodeAngles(TQ, XQ.position, WQ, PQ);
        if (zQ > 0 && "aim" !== gQ && "aim" !== JQ && this.liveTangent(QQ, FQ)) return XQ.heading = (0, qQ.w)(FQ.heading), void(XQ.pitch = FQ.pitch);
        if ("none" === gQ && "none" === JQ) return;
        !sQ && zQ > 0 && ("tangent" === gQ && this.liveTangent(QQ, FQ), "tangent" === JQ && this.liveTangent(QQ, PQ)), "none" === gQ ? (0, qQ.l)(PQ, FQ) : "none" === JQ && (0, qQ.l)(FQ, PQ);
        const rQ = sQ && QQ.beforeIndex >= 0 && "none" !== this.nodeAngles(QQ.beforeIndex, XQ.position, WQ, this.beforeAngles),
          IQ = sQ && QQ.afterIndex >= 0 && "none" !== this.nodeAngles(QQ.afterIndex, XQ.position, WQ, this.afterAngles),
          jQ = (0, qQ.A)(FQ.heading, PQ.heading),
          BQ = aQ(QQ, rQ ? (0, qQ.A)(FQ.heading, this.beforeAngles.heading) : 0, FQ.heading, jQ, IQ ? (0, qQ.A)(jQ, this.afterAngles.heading) : 0, rQ, IQ);
        XQ.heading = (0, qQ.w)(BQ), XQ.pitch = (0, qQ.j)(aQ(QQ, this.beforeAngles.pitch, FQ.pitch, PQ.pitch, this.afterAngles.pitch, rQ, IQ))
      }
      nodeAngles(QQ, WQ, XQ, wQ) {
        const qQ = this.rawNodeAngles(QQ, WQ, XQ, wQ);
        return "none" !== qQ && lQ(wQ) && !this.borrowHeading(this.prevNodes[QQ], WQ, XQ, wQ) && this.borrowHeading(this.nextNodes[QQ], WQ, XQ, wQ), qQ
      }
      borrowHeading(QQ, WQ, XQ, wQ) {
        const qQ = this.borrowedAngles;
        return !(QQ < 0 || "none" === this.rawNodeAngles(QQ, WQ, XQ, qQ) || lQ(qQ)) && (wQ.heading = qQ.heading, !0)
      }
      rawNodeAngles(QQ, WQ, XQ, wQ) {
        const TQ = this.nodes[QQ].keyframe;
        if (TQ.lookDirection) return (0, qQ.p)(TQ.lookDirection, wQ), "aim";
        if (void 0 !== TQ.lookAt) {
          const QQ = XQ(TQ.lookAt);
          if (QQ) return (0, qQ.u)(WQ, QQ, wQ), "aim"
        }
        const zQ = this.tangents[QQ];
        return zQ ? ((0, qQ.l)(zQ, wQ), "tangent") : "none"
      }
      liveTangent(QQ, WQ) {
        const XQ = this.nodes[QQ.index].position,
          wQ = this.nodes[QQ.toIndex].position,
          TQ = this.derivative;
        for (let qQ = 0; qQ < 3; qQ++) TQ[qQ] = GQ(XQ[qQ], QQ.fromTangent[qQ], wQ[qQ], QQ.toTangent[qQ], QQ.u);
        return DQ(TQ) > 1e-9 ? ((0, qQ.p)(TQ, WQ), !0) : !(UQ(XQ, wQ) < VQ) && ((0, qQ.p)(vQ(XQ, wQ, QQ.u < .5 ? QQ.toTangent : QQ.fromTangent, TQ), WQ), !0)
      }
      nodeTangent(QQ, WQ, XQ) {
        var wQ;
        const TQ = QQ[XQ];
        if (DQ(TQ) > 1e-9) return (0, qQ.p)(TQ, {
          heading: 0,
          pitch: 0
        });
        const zQ = null !== (wQ = this.restDirectionTo(XQ, XQ + 1, QQ, WQ)) && void 0 !== wQ ? wQ : this.restDirectionTo(XQ, XQ - 1, QQ, WQ);
        return zQ ? (0, qQ.p)(zQ, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(QQ, WQ, XQ, wQ) {
        const qQ = this.nodes[QQ],
          TQ = this.nodes[WQ];
        if (!TQ || UQ(qQ.position, TQ.position) < VQ) return null;
        const [zQ, sQ] = WQ > QQ ? [qQ, TQ] : [TQ, qQ], FQ = bQ(XQ[WQ], zQ.position, sQ.position, sQ.timeMs - zQ.timeMs, wQ, [0, 0, 0]);
        return vQ(zQ.position, sQ.position, FQ, [0, 0, 0])
      }
    }

    function iQ(QQ, WQ) {
      const XQ = QQ.lookDirection || WQ.lookDirection ? function(QQ, WQ) {
        if (!QQ || !WQ) return QQ === WQ;
        const XQ = DQ(QQ),
          wQ = DQ(WQ);
        return Math.hypot(QQ[0] / XQ - WQ[0] / wQ, QQ[1] / XQ - WQ[1] / wQ, QQ[2] / XQ - WQ[2] / wQ) < VQ
      }(QQ.lookDirection, WQ.lookDirection) : (wQ = QQ.lookAt, qQ = WQ.lookAt, "object" !== typeof wQ || "object" !== typeof qQ ? wQ === qQ : UQ(wQ, qQ) < VQ);
      var wQ, qQ;
      return UQ(QQ.position, WQ.position) < VQ && QQ.fov === WQ.fov && XQ
    }
    class cQ {
      constructor(QQ, WQ, XQ) {
        if (this.smooth = WQ, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
        for (let TQ = 1; TQ < QQ.length; TQ++)
          if (!(QQ[TQ].timeMs > QQ[TQ - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = QQ.map((QQ => {
          var WQ;
          return {
            timeMs: QQ.timeMs,
            position: [...QQ.position],
            keyframe: QQ,
            easing: (0, TQ.t)(null !== (WQ = QQ.easing) && void 0 !== WQ ? WQ : "linear")
          }
        }));
        const wQ = this.nodes[0],
          qQ = this.nodes[this.nodes.length - 1],
          zQ = XQ && this.nodes.length > 1;
        zQ && !iQ(wQ.keyframe, qQ.keyframe) && this.nodes.push({
          ...wQ,
          timeMs: qQ.timeMs + (qQ.timeMs - wQ.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = zQ ? this.nodes[this.nodes.length - 1].timeMs - wQ.timeMs : 0, this.prevNodes = this.nodes.map(((QQ, WQ) => this.neighbour(WQ, -1))), this.nextNodes = this.nodes.map(((QQ, WQ) => this.neighbour(WQ, 1))), this.prevGaps = this.prevNodes.map(((QQ, WQ) => QQ >= 0 ? this.gapMs(WQ, -1) : 0)), this.nextGaps = this.nextNodes.map(((QQ, WQ) => QQ >= 0 ? this.gapMs(WQ, 1) : 0)), this.velocities = this.nodes.map(((QQ, WQ) => {
          const XQ = this.prevNodes[WQ],
            wQ = this.nextNodes[WQ];
          return function(QQ, WQ, XQ, wQ, qQ, TQ) {
            if (TQ[0] = 0, TQ[1] = 0, TQ[2] = 0, !QQ && !XQ) return TQ;
            const zQ = null !== QQ && void 0 !== QQ ? QQ : dQ(null !== XQ && void 0 !== XQ ? XQ : WQ, WQ),
              sQ = null !== XQ && void 0 !== XQ ? XQ : dQ(null !== QQ && void 0 !== QQ ? QQ : WQ, WQ),
              FQ = QQ ? wQ : qQ,
              PQ = XQ ? qQ : wQ,
              gQ = UQ(zQ, WQ),
              JQ = UQ(WQ, sQ);
            if (gQ < VQ || JQ < VQ) return TQ;
            const rQ = Math.sqrt(gQ),
              IQ = Math.sqrt(JQ),
              jQ = (rQ + IQ) / (FQ + PQ);
            for (let BQ = 0; BQ < 3; BQ++) {
              const QQ = (WQ[BQ] - zQ[BQ]) / rQ - (sQ[BQ] - zQ[BQ]) / (rQ + IQ) + (sQ[BQ] - WQ[BQ]) / IQ;
              TQ[BQ] = QQ * jQ
            }
            return TQ
          }(XQ >= 0 ? this.nodes[XQ].position : null, QQ.position, wQ >= 0 ? this.nodes[wQ].position : null, this.prevGaps[WQ], this.nextGaps[WQ], [0, 0, 0])
        })), this.aim = new hQ(this.nodes, this.velocities, this.prevNodes, this.nextNodes, WQ)
      }
      sample(QQ, WQ, XQ, wQ) {
        const qQ = this.findSegment(this.pathTime(QQ));
        this.samplePosition(qQ, wQ.position), this.aim.sample(qQ, WQ, wQ);
        const {
          beforeIndex: TQ,
          afterIndex: zQ
        } = qQ;
        wQ.fov = aQ(qQ, TQ >= 0 ? this.fovAt(TQ, XQ) : 0, this.fovAt(qQ.index, XQ), this.fovAt(qQ.toIndex, XQ), zQ >= 0 ? this.fovAt(zQ, XQ) : 0, TQ >= 0, zQ >= 0)
      }
      pathTime(QQ) {
        const WQ = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || QQ <= WQ) return QQ;
        const XQ = QQ - WQ;
        return WQ + XQ - this.loopMs * Math.floor(XQ / this.loopMs)
      }
      findSegment(QQ) {
        const WQ = this.nodes,
          XQ = this.segment;
        let wQ = XQ.index;
        for (QQ < WQ[wQ].timeMs && (wQ = 0); wQ < WQ.length - 2 && WQ[wQ + 1].timeMs <= QQ;) wQ++;
        const qQ = Math.min(wQ + 1, WQ.length - 1),
          zQ = WQ[qQ].timeMs - WQ[wQ].timeMs;
        return XQ.index = wQ, XQ.toIndex = qQ, XQ.segmentMs = zQ, XQ.u = zQ > 0 ? (0, TQ.p)((QQ - WQ[wQ].timeMs) / zQ, WQ[wQ].easing) : 1, XQ.curved = this.smooth && zQ > 0, XQ.beforeIndex = this.prevNodes[wQ], XQ.afterIndex = this.nextNodes[qQ], XQ.beforeMs = this.prevGaps[wQ], XQ.afterMs = this.nextGaps[qQ], XQ
      }
      samplePosition(QQ, WQ) {
        const {
          fromTangent: XQ,
          toTangent: wQ,
          curved: qQ
        } = QQ, TQ = this.nodes[QQ.index].position, zQ = this.nodes[QQ.toIndex].position;
        bQ(this.velocities[QQ.index], TQ, zQ, QQ.segmentMs, qQ, XQ), bQ(this.velocities[QQ.toIndex], TQ, zQ, QQ.segmentMs, qQ, wQ);
        const sQ = QQ.u;
        for (let FQ = 0; FQ < 3; FQ++) WQ[FQ] = qQ ? pQ(TQ[FQ], XQ[FQ], zQ[FQ], wQ[FQ], sQ) : TQ[FQ] + (zQ[FQ] - TQ[FQ]) * sQ
      }
      fovAt(QQ, WQ) {
        var XQ;
        return null !== (XQ = this.nodes[QQ].keyframe.fov) && void 0 !== XQ ? XQ : WQ
      }
      neighbour(QQ, WQ) {
        const XQ = this.nodes.length - 1,
          wQ = QQ + WQ;
        return wQ >= 0 && wQ <= XQ ? wQ : this.loopMs <= 0 || XQ < 2 ? -1 : wQ < 0 ? XQ - 1 : 1
      }
      gapMs(QQ, WQ) {
        const XQ = this.nodes.length - 1;
        if (1 === WQ) {
          const WQ = QQ === XQ ? 0 : QQ;
          return this.nodes[WQ + 1].timeMs - this.nodes[WQ].timeMs
        }
        const wQ = 0 === QQ ? XQ : QQ;
        return this.nodes[wQ].timeMs - this.nodes[wQ - 1].timeMs
      }
    }

    function AQ(QQ, WQ, XQ) {
      return null !== XQ && Number.isFinite(XQ) ? (QQ.set(WQ, XQ), XQ) : QQ.get(WQ)
    }
    class RQ {
      constructor(QQ) {
        this.nJ = QQ, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = WQ => QQ.getEntityPosition(WQ), this.readAimPoint = WQ => QQ.getEntityAimPoint(WQ)
      }
      aimPoint(QQ) {
        return "string" !== typeof QQ ? (0, FQ.q)(QQ, 3) ? QQ : null : this.resolve(QQ, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(QQ) {
        const WQ = "string" === typeof QQ ? this.nJ.getEntityAimPoint(QQ) : QQ;
        return WQ && (0, FQ.q)(WQ, 3) ? WQ : null
      }
      feetPosition(QQ) {
        return this.resolve(QQ, this.readFeet, this.lastFeet)
      }
      heading(QQ) {
        const WQ = AQ(this.lastHeadings, QQ, this.nJ.getEntityHeading(QQ));
        return void 0 !== WQ ? WQ : QQ === this.nJ.localPlayerId ? 0 : this.heading(this.nJ.localPlayerId)
      }
      pitch(QQ) {
        var WQ;
        return null !== (WQ = AQ(this.lastPitches, QQ, this.nJ.getEntityPitch(QQ))) && void 0 !== WQ ? WQ : 0
      }
      lookHeading(QQ) {
        var WQ;
        return null !== (WQ = AQ(this.lastLookHeadings, QQ, this.nJ.getEntityLookHeading(QQ))) && void 0 !== WQ ? WQ : this.heading(QQ)
      }
      resolve(QQ, WQ, XQ) {
        const wQ = WQ(QQ);
        let qQ = XQ.get(QQ);
        return wQ && (0, FQ.q)(wQ, 3) ? (qQ || (qQ = [0, 0, 0], XQ.set(QQ, qQ)), qQ[0] = wQ[0], qQ[1] = wQ[1], qQ[2] = wQ[2], qQ) : qQ || (QQ === this.nJ.localPlayerId ? null : this.resolve(this.nJ.localPlayerId, WQ, XQ))
      }
    }

    function EQ(QQ) {
      return {
        heading: QQ.heading,
        pitch: QQ.pitch
      }
    }

    function CQ(QQ, WQ) {
      Number.isFinite(QQ.heading) && Number.isFinite(QQ.pitch) || (0, qQ.l)(WQ, QQ)
    }

    function uQ(QQ, WQ, XQ, wQ, TQ) {
      if (WQ) return void(0, qQ.p)(WQ, TQ);
      const zQ = wQ.aimPoint(XQ);
      zQ && (0, qQ.u)(QQ, zQ, TQ)
    }
    class LQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.settings = QQ, this.nJ = WQ, this.targets = XQ, this.base = void 0, this.base = EQ(wQ)
      }
      update(QQ, WQ, XQ) {
        var wQ;
        const qQ = this.settings;
        (0, FQ.f)(qQ.position, XQ.position), uQ(qQ.position, qQ.lookDirection, null !== (wQ = qQ.lookAt) && void 0 !== wQ ? wQ : this.nJ.localPlayerId, this.targets, this.base), WQ.apply(this.base, XQ), XQ.fov = IQ(qQ, this.nJ)
      }
      continueFrom(QQ) {
        QQ instanceof LQ && (0, qQ.l)(QQ.base, this.base)
      }
      reset(QQ) {
        CQ(this.base, QQ)
      }
    }
    class kQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.settings = QQ, this.nJ = WQ, this.targets = XQ, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Fy = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = EQ(wQ), this.goal = [...wQ.position]
      }
      update(QQ, WQ, XQ) {
        var wQ, TQ;
        const zQ = this.settings,
          sQ = null !== (wQ = zQ.target) && void 0 !== wQ ? wQ : this.nJ.localPlayerId,
          PQ = this.targets.feetPosition(sQ),
          gQ = "eye" === zQ.anchor;
        let JQ = !1;
        var rQ;
        PQ && (JQ = this.foundFeet && UQ(this.lastFeet, PQ) > 32 + .1 * QQ, (0, FQ.f)(PQ, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (rQ = gQ ? this.targets.aimPoint(sQ) : null) && void 0 !== rQ ? rQ : PQ, sQ));
        const BQ = null !== (TQ = zQ.smoothMs) && void 0 !== TQ ? TQ : 0;
        !this.started || BQ < 1 || JQ ? ((0, FQ.f)(this.goal, this.smoothed), this.Fy.fill(0), this.started = !0) : jQ(this.smoothed, this.Fy, this.goal, BQ, QQ), JQ && (this.distance = -1), (0, FQ.f)(this.smoothed, XQ.position);
        const yQ = !0 === zQ.avoidTerrain ? this.pullIn(sQ, QQ, XQ) : 1;
        let VQ = this.goal;
        if ("target" === zQ.offsetSpace) VQ = XQ.position;
        else if (yQ < 1) {
          VQ = this.aimOrigin;
          for (let QQ = 0; QQ < 3; QQ++) VQ[QQ] = XQ.position[QQ] + (this.goal[QQ] - this.smoothed[QQ]) * yQ
        }
        if (gQ && !zQ.lookDirection && void 0 === zQ.lookAt) {
          const WQ = this.targets.lookHeading(sQ),
            XQ = this.targets.pitch(sQ),
            wQ = 1 - Math.exp(-QQ / 50),
            TQ = (0, qQ.w)(this.eyeHeading + (0, qQ.x)(this.eyeHeading, WQ) * wQ),
            zQ = this.eyePitch + (XQ - this.eyePitch) * wQ,
            FQ = sQ !== this.nJ.localPlayerId && Number.isFinite(TQ) && Number.isFinite(zQ) && !JQ;
          this.eyeHeading = FQ ? TQ : (0, qQ.w)(WQ), this.eyePitch = FQ ? zQ : XQ, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var DQ;
          this.eyeHeading = NaN, this.eyePitch = NaN, uQ(VQ, zQ.lookDirection, null !== (DQ = zQ.lookAt) && void 0 !== DQ ? DQ : sQ, this.targets, this.base)
        }
        WQ.apply(this.base, XQ), XQ.fov = IQ(zQ, this.nJ)
      }
      continueFrom(QQ) {
        QQ instanceof kQ && (0, wQ.v)(QQ.settings.target, this.settings.target) && ((0, qQ.l)(QQ.base, this.base), (0, FQ.f)(QQ.goal, this.goal), (0, FQ.f)(QQ.lastFeet, this.lastFeet), this.foundFeet = QQ.foundFeet, (0, FQ.f)(QQ.smoothed, this.smoothed), (0, FQ.f)(QQ.Fy, this.Fy), this.started = QQ.started, this.eyeHeading = QQ.eyeHeading, this.eyePitch = QQ.eyePitch, !0 === QQ.settings.avoidTerrain && (this.distance = QQ.distance))
      }
      reset(QQ) {
        CQ(this.base, QQ), this.Fy.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(QQ, WQ, XQ) {
        const wQ = this.targets.aimPoint(QQ);
        if (!wQ) return 1;
        const qQ = XQ.position,
          TQ = UQ(wQ, qQ);
        if (!(TQ > 0)) return 1;
        const zQ = this.toCamera;
        for (let FQ = 0; FQ < 3; FQ++) zQ[FQ] = (qQ[FQ] - wQ[FQ]) / TQ;
        const sQ = function(QQ, WQ, XQ) {
          return QQ < 0 || WQ < QQ ? WQ : WQ + (QQ - WQ) * Math.exp(-XQ / 150)
        }(this.distance, function(QQ, WQ, XQ, wQ) {
          const qQ = QQ.raycastTerrain(WQ, XQ, wQ);
          return null !== qQ && Number.isFinite(qQ) ? Math.min(wQ, Math.max(0, qQ - .2)) : wQ
        }(this.nJ, wQ, zQ, TQ), WQ);
        if (TQ - sQ < .001) return this.distance = -1, 1;
        this.distance = sQ;
        for (let FQ = 0; FQ < 3; FQ++) qQ[FQ] = wQ[FQ] + zQ[FQ] * sQ;
        return sQ / TQ
      }
      placeGoal(QQ, WQ) {
        const XQ = this.settings.offset;
        let wQ = XQ[0],
          qQ = XQ[2];
        if ("target" === this.settings.offsetSpace) {
          const QQ = this.targets.heading(WQ),
            TQ = Math.cos(QQ),
            zQ = Math.sin(QQ);
          wQ = XQ[0] * TQ + XQ[2] * zQ, qQ = -XQ[0] * zQ + XQ[2] * TQ
        }
        this.goal[0] = QQ[0] + wQ, this.goal[1] = QQ[1] + XQ[1], this.goal[2] = QQ[2] + qQ
      }
    }
    class fQ {
      constructor(QQ, WQ, XQ, wQ) {
        var qQ, TQ;
        this.settings = QQ, this.nJ = WQ, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = QQ.keyframes.length > 0 ? new cQ(QQ.keyframes, null === (qQ = QQ.smooth) || void 0 === qQ || qQ, null !== (TQ = QQ.loop) && void 0 !== TQ && TQ) : null, this.base = (0, FQ.d)(wQ, (0, FQ.j)()), this.resolveTarget = QQ => XQ.aimPoint(QQ)
      }
      update(QQ, WQ, XQ) {
        this.elapsedMs += QQ;
        const wQ = IQ(this.settings, this.nJ);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, wQ, this.base) : this.base.fov = wQ, (0, FQ.f)(this.base.position, XQ.position), XQ.fov = this.base.fov, WQ.apply(this.base, XQ)
      }
      continueFrom(QQ) {
        QQ instanceof fQ && (0, wQ.v)(QQ.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = QQ.elapsedMs, (0, FQ.d)(QQ.base, this.base))
      }
      reset(QQ) {
        CQ(this.base, QQ), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function SQ(QQ, WQ) {
      return (0, wQ.x)(QQ, WQ)
    }
    class tQ {
      constructor(QQ, WQ, XQ) {
        var wQ;
        this.settings = QQ, this.nJ = WQ, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const qQ = null !== XQ && XQ.settings.mode === QQ.mode,
          TQ = qQ ? XQ.pose : WQ.getDefaultPose();
        this.pose = (0, FQ.d)(TQ, (0, FQ.j)()), this.lastGoodPose = (0, FQ.d)(qQ ? XQ.lastGoodPose : TQ, (0, FQ.j)()), this.look = new yQ(QQ.playerLook), this.targets = null !== (wQ = null === XQ || void 0 === XQ ? void 0 : XQ.targets) && void 0 !== wQ ? wQ : new RQ(WQ);
        const zQ = (0, FQ.d)(TQ, (0, FQ.j)());
        qQ && XQ.look.unapply(zQ, zQ), this.mode = function(QQ, WQ, XQ, wQ) {
          switch (QQ.mode) {
            case "fixed":
              return new LQ(QQ, WQ, XQ, wQ);
            case "follow":
              return new kQ(QQ, WQ, XQ, wQ);
            case "path":
              return new fQ(QQ, WQ, XQ, wQ);
            case "frame":
              return new BQ(QQ, WQ, XQ, wQ)
          }
        }(QQ, WQ, this.targets, zQ), qQ && (this.look.continueFrom(XQ.look), this.mode.continueFrom(XQ.mode))
      }
      update(QQ, WQ) {
        return this.look.update(QQ, WQ), this.mode.update(QQ, this.look, this.pose), (0, FQ.m)(this.pose) ? (0, FQ.d)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, FQ.d)(this.lastGoodPose, this.pose), this.mode.reset((0, FQ.m)(this.lastGoodPose) ? this.lastGoodPose : this.nJ.getDefaultPose())), this.pose
      }
    }

    function oQ(QQ) {
      return [0, 0, QQ[2], QQ[3]]
    }
    class eQ {
      constructor(QQ) {
        this.nJ = QQ, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new sQ, this.shot = null, this.blend = null, this.mixed = (0, FQ.j)(), this.output = (0, FQ.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(QQ) {
        const WQ = (0, PQ.d)(QQ);
        if ((0, wQ.v)(WQ, this.pending ? this.pending.settings : this.settings)) return;
        const XQ = SQ(this.settings, WQ);
        if (void 0 !== WQ.transition && !XQ) return this.pending = {
          settings: WQ,
          shot: "default" === WQ.mode ? null : new tQ(WQ, this.nJ, null)
        }, void this.fade.fadeOut(WQ.transition);
        const qQ = null !== this.pending;
        this.pending = null, !qQ && XQ || this.fade.fadeIn(wQ.m.minTransitionFadeMs), this.show(WQ, !1)
      }
      show(QQ, WQ) {
        var XQ, qQ;
        if ((0, wQ.v)(QQ, this.settings)) return;
        const zQ = !WQ && SQ(this.settings, QQ);
        this.settings = QQ;
        const sQ = null !== this.blend && this.blend.elapsedMs > 0,
          PQ = (0, FQ.d)(this.hasOutput ? this.output : this.nJ.getDefaultPose(), (0, FQ.j)());
        if (this.shot = "default" === QQ.mode ? null : new tQ(QQ, this.nJ, WQ ? null : this.shot), zQ) return;
        const gQ = WQ || !this.shot && !this.hasOutput ? 0 : null !== (XQ = QQ.blendInMs) && void 0 !== XQ ? XQ : 0;
        if (gQ <= 0) return void(this.blend = null);
        const JQ = (0, TQ.t)(null !== (qQ = QQ.blendEasing) && void 0 !== qQ ? qQ : "easeInOut");
        this.blend = {
          from: PQ,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: gQ,
          easing: sQ ? oQ(JQ) : JQ
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
      update(QQ, WQ) {
        const XQ = Number.isFinite(QQ) && QQ > 0 ? QQ : 0;
        if (this.fade.advance(XQ) && null !== this.pending) {
          const {
            settings: QQ
          } = this.pending;
          this.pending = null, this.show(QQ, !0)
        }
        this.loadingPositions.length = 0;
        const wQ = this.pending;
        if (null !== wQ && void 0 !== wQ && wQ.shot) {
          const QQ = "path" === wQ.settings.mode ? 0 : XQ;
          this.noteLoadingPosition(wQ.shot.update(QQ, FQ.c).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const zQ = this.shot ? this.shot.update(XQ, WQ) : this.nJ.getDefaultPose();
        this.shot && this.noteLoadingPosition(zQ.position);
        const sQ = this.blend;
        if (!sQ) return this.writeOutput(zQ);
        sQ.elapsedMs += XQ;
        const PQ = Math.min(1, sQ.elapsedMs / sQ.durationMs);
        if (sQ.headingDelta = Number.isFinite(sQ.headingDelta) ? (0, qQ.A)(sQ.headingDelta, zQ.heading - sQ.from.heading) : (0, qQ.x)(sQ.from.heading, zQ.heading), (0, FQ.u)(sQ.from, zQ, sQ.headingDelta, (0, TQ.p)(PQ, sQ.easing), this.mixed), PQ >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else sQ.fromScripted && this.noteLoadingPosition(sQ.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(QQ) {
        if (QQ.every(Number.isFinite)) {
          const WQ = this.loadingPositions;
          WQ.push((0, FQ.f)(QQ, this.loadingSlots[WQ.length]))
        }
      }
      writeOutput(QQ) {
        const WQ = this.output;
        (0, FQ.m)(QQ) ? (0, FQ.d)(QQ, WQ) : this.hasOutput || (0, FQ.d)(this.nJ.getDefaultPose(), WQ), WQ.pitch = (0, qQ.j)(WQ.pitch);
        const XQ = this.nJ.getDefaultFov(),
          TQ = Number.isFinite(XQ) && XQ > 0 && XQ < 180,
          zQ = TQ ? Math.min(wQ.m.minFov, XQ) : wQ.m.minFov,
          sQ = TQ ? Math.max(wQ.m.maxFov, XQ) : wQ.m.maxFov;
        return WQ.fov = Number.isFinite(WQ.fov) ? Math.min(sQ, Math.max(zQ, WQ.fov)) : sQ, this.hasOutput = !0, WQ
      }
    }
  },
  39444: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ,
      d: () => sQ,
      f: () => zQ,
      j: () => TQ,
      m: () => PQ,
      q: () => FQ,
      u: () => gQ
    });
    var wQ = XQ(39449);
    const qQ = {
      jR: 0,
      yR: 0
    };

    function TQ() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function zQ(QQ, WQ) {
      return WQ[0] = QQ[0], WQ[1] = QQ[1], WQ[2] = QQ[2], WQ
    }

    function sQ(QQ, WQ) {
      return zQ(QQ.position, WQ.position), WQ.heading = QQ.heading, WQ.pitch = QQ.pitch, WQ.fov = QQ.fov, WQ
    }

    function FQ(QQ, WQ) {
      return Array.isArray(QQ) && QQ.length === WQ && QQ.every(Number.isFinite)
    }

    function PQ(QQ) {
      return FQ(QQ.position, 3) && Number.isFinite(QQ.heading) && Number.isFinite(QQ.pitch) && Number.isFinite(QQ.fov)
    }

    function gQ(QQ, WQ, XQ, qQ, TQ) {
      for (let wQ = 0; wQ < 3; wQ++) TQ.position[wQ] = QQ.position[wQ] + (WQ.position[wQ] - QQ.position[wQ]) * qQ;
      return TQ.heading = (0, wQ.w)(QQ.heading + XQ * qQ), TQ.pitch = QQ.pitch + (WQ.pitch - QQ.pitch) * qQ, TQ.fov = QQ.fov + (WQ.fov - QQ.fov) * qQ, TQ
    }
  },
  39476: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => dQ,
      f: () => IQ
    });
    var wQ = XQ(39467),
      qQ = XQ(39444);
    const TQ = wQ.g,
      zQ = wQ.o,
      sQ = wQ.j;

    function FQ(QQ, WQ, XQ, wQ) {
      return Number.isFinite(QQ) ? Math.min(XQ, Math.max(WQ, QQ)) : wQ
    }

    function PQ(QQ, WQ, XQ) {
      return void 0 !== QQ && Number.isFinite(QQ) ? Math.min(XQ, Math.max(WQ, QQ)) : void 0
    }

    function gQ(QQ) {
      const WQ = wQ.m.maxCoordinate;
      return [Math.min(WQ, Math.max(-WQ, QQ[0])), Math.min(WQ, Math.max(-WQ, QQ[1])), Math.min(WQ, Math.max(-WQ, QQ[2]))]
    }

    function JQ(QQ) {
      return "string" === typeof QQ ? QQ : (0, qQ.q)(QQ, 3) ? gQ(QQ) : void 0
    }
    const rQ = new RegExp(wQ.r);

    function IQ(QQ) {
      return "string" === typeof QQ && rQ.test(QQ)
    }

    function jQ(QQ) {
      const WQ = [];
      if (!Array.isArray(QQ)) return WQ;
      for (const XQ of QQ.slice(0, wQ.m.maxFrameTargets)) {
        const QQ = JQ(XQ);
        void 0 === QQ || "string" === typeof QQ && !IQ(QQ) || WQ.push(QQ)
      }
      return WQ
    }

    function BQ(QQ) {
      if (!(0, qQ.q)(QQ, 3)) return;
      const WQ = Math.max(Math.abs(QQ[0]), Math.abs(QQ[1]), Math.abs(QQ[2])),
        XQ = Math.hypot(QQ[0] / WQ, QQ[1] / WQ, QQ[2] / WQ);
      return 0 === WQ || WQ * XQ < wQ.m.minDirectionLength ? void 0 : [QQ[0] / WQ / XQ, QQ[1] / WQ / XQ, QQ[2] / WQ / XQ]
    }

    function yQ(QQ) {
      if (void 0 !== QQ) return "string" === typeof QQ ? TQ.includes(QQ) ? QQ : void 0 : (0, qQ.q)(QQ, 4) ? [FQ(QQ[0], 0, 1, 0), FQ(QQ[1], wQ.m.minEasingY, wQ.m.maxEasingY, 0), FQ(QQ[2], 0, 1, 1), FQ(QQ[3], wQ.m.minEasingY, wQ.m.maxEasingY, 1)] : "linear"
    }

    function VQ(QQ) {
      if (QQ) return {
        maxYaw: FQ(QQ.maxYaw, 0, wQ.m.maxPlayerLook, 0),
        maxPitch: FQ(QQ.maxPitch, 0, wQ.m.maxPlayerLook, 0),
        returnMs: PQ(QQ.returnMs, 0, wQ.m.maxReturnMs)
      }
    }
    const DQ = new RegExp(wQ.b);

    function pQ(QQ) {
      var WQ;
      if ("object" !== typeof QQ || null === QQ) return;
      const XQ = wQ.m.maxTransitionMs,
        qQ = wQ.m.minTransitionFadeMs;
      return {
        colour: "string" === typeof QQ.colour && DQ.test(QQ.colour) ? QQ.colour : wQ.d,
        outMs: FQ(QQ.outMs, qQ, XQ, qQ),
        holdMs: FQ(null !== (WQ = QQ.holdMs) && void 0 !== WQ ? WQ : 0, 0, XQ, 0),
        inMs: FQ(QQ.inMs, qQ, XQ, qQ)
      }
    }

    function GQ(QQ) {
      return !0 === QQ || void 0
    }

    function UQ(QQ) {
      if ("object" !== typeof QQ || null === QQ) return !1;
      const WQ = QQ.lookAt;
      return Number.isFinite(QQ.timeMs) && (0, qQ.q)(QQ.position, 3) && (void 0 === WQ || "string" === typeof WQ || (0, qQ.q)(WQ, 3))
    }

    function bQ(QQ) {
      return {
        ...QQ,
        timeMs: FQ(QQ.timeMs, 0, wQ.m.maxPathMs, 0),
        position: gQ(QQ.position),
        lookAt: JQ(QQ.lookAt),
        lookDirection: BQ(QQ.lookDirection),
        fov: PQ(QQ.fov, wQ.m.minFov, wQ.m.maxFov),
        easing: yQ(QQ.easing)
      }
    }

    function vQ(QQ) {
      const WQ = [];
      if (!Array.isArray(QQ)) return WQ;
      for (const XQ of QQ.slice(0, wQ.m.maxKeyframes)) {
        if (!UQ(XQ)) continue;
        const QQ = bQ(XQ);
        (0 === WQ.length || QQ.timeMs > WQ[WQ.length - 1].timeMs) && WQ.push(QQ)
      }
      return WQ
    }

    function dQ(QQ) {
      if ("object" !== typeof QQ || null === QQ) return {
        mode: "default"
      };
      const WQ = {
          blendInMs: PQ(QQ.blendInMs, 0, wQ.m.maxBlendInMs),
          blendEasing: yQ(QQ.blendEasing),
          transition: pQ(QQ.transition),
          letterbox: GQ(QQ.letterbox),
          hideHud: GQ(QQ.hideHud)
        },
        XQ = {
          mode: "default",
          ...WQ
        };
      if ("default" === QQ.mode || "fixed" === QQ.mode && !(0, qQ.q)(QQ.position, 3)) return XQ;
      const TQ = {
        ...WQ,
        fov: PQ(QQ.fov, wQ.m.minFov, wQ.m.maxFov),
        playerFacing: (rQ = QQ.playerFacing, zQ.includes(rQ) ? rQ : void 0),
        playerLook: VQ(QQ.playerLook)
      };
      var rQ, IQ, DQ;
      switch (QQ.mode) {
        case "fixed":
          return {
            ...QQ, ...TQ, position: gQ(QQ.position), lookAt: JQ(QQ.lookAt), lookDirection: BQ(QQ.lookDirection)
          };
        case "follow":
          return {
            ...QQ, ...TQ, target: "string" === typeof QQ.target ? QQ.target : void 0, anchor: (DQ = QQ.anchor, sQ.includes(DQ) ? DQ : void 0), lookAt: JQ(QQ.lookAt), offset: (IQ = QQ.offset, Array.isArray(IQ) ? [FQ(IQ[0], -wQ.m.maxOffset, wQ.m.maxOffset, 0), FQ(IQ[1], -wQ.m.maxOffset, wQ.m.maxOffset, 0), FQ(IQ[2], -wQ.m.maxOffset, wQ.m.maxOffset, 0)] : [0, 0, 0]), lookDirection: BQ(QQ.lookDirection), smoothMs: PQ(QQ.smoothMs, 0, wQ.m.maxSmoothMs)
          };
        case "path":
          return {
            ...QQ, ...TQ, keyframes: vQ(QQ.keyframes)
          };
        case "frame":
          return {
            ...QQ, ...TQ, targets: jQ(QQ.targets), viewHeading: PQ(QQ.viewHeading, -wQ.m.maxFrameHeading, wQ.m.maxFrameHeading), viewElevation: PQ(QQ.viewElevation, 0, wQ.m.maxFrameElevation), padding: PQ(QQ.padding, 0, wQ.m.maxFrameDistance), closestDistance: PQ(QQ.closestDistance, 0, wQ.m.maxFrameDistance), furthestDistance: PQ(QQ.furthestDistance, 0, wQ.m.maxFrameDistance), smoothMs: PQ(QQ.smoothMs, 0, wQ.m.maxSmoothMs)
          };
        default:
          return XQ
      }
    }
  },
  39509: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    const wQ = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  38936: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ
    });
    var wQ = XQ(1257);

    function qQ(QQ) {
      const WQ = /(\d*\.?\d+)px/.exec(QQ);
      return WQ ? Number(WQ[1]) : null
    }

    function TQ(QQ) {
      return QQ.split(/[\s,]+/).pop()
    }
    let zQ = !1;
    const sQ = {
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
      drawText: function(QQ, WQ, wQ, sQ, FQ, PQ) {
        if (FQ <= 0 || PQ <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: gQ,
          fontVariant: JQ,
          fontWeight: rQ,
          fontSize: IQ,
          font: jQ
        } = this, BQ = [gQ, JQ, rQ, `${IQ}px`, jQ].filter(Boolean).join(" "), yQ = [
          [rQ, `${IQ}px`, TQ(jQ)].filter(Boolean).join(" "), `${IQ}px sans-serif`
        ], VQ = QQ.font, DQ = function(QQ, WQ, XQ) {
          for (const wQ of WQ) {
            QQ.font = wQ;
            const WQ = qQ(QQ.font),
              zQ = TQ(wQ);
            if (null !== WQ && Math.abs(WQ - XQ) <= .5 && QQ.font.toLowerCase().includes(zQ.toLowerCase())) return wQ
          }
          return null
        }(QQ, [BQ, ...yQ], IQ);
        DQ !== BQ && function(QQ, WQ, wQ) {
          zQ || (zQ = !0, Promise.resolve().then((() => XQ(1109))).then((XQ => {
            let {
              jB: qQ
            } = XQ;
            qQ(new Error("A canvas didn't take canvasTxt's font"), {
              font: QQ,
              HI: WQ,
              drawnWith: null !== wQ && void 0 !== wQ ? wQ : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(BQ, VQ, DQ);
        const pQ = qQ(QQ.font);
        if (null === DQ && null !== pQ && pQ > 0) {
          const XQ = IQ / pQ;
          QQ.save();
          try {
            return QQ.scale(XQ, XQ), {
              height: this.drawLines(QQ, WQ, wQ / XQ, sQ / XQ, FQ / XQ, PQ / XQ, pQ).height * XQ
            }
          } finally {
            QQ.restore()
          }
        }
        return this.drawLines(QQ, WQ, wQ, sQ, FQ, PQ, IQ)
      },
      drawLines: function(QQ, WQ, XQ, qQ, TQ, zQ, sQ) {
        const FQ = XQ + TQ,
          PQ = qQ + zQ;
        let gQ, JQ = qQ + zQ / 2 + sQ / 2;
        "right" === this.align ? (gQ = FQ, QQ.textAlign = "right") : "left" === this.align ? (gQ = XQ, QQ.textAlign = "left") : (gQ = XQ + TQ / 2, QQ.textAlign = "center");
        for (const wQ of WQ) {
          QQ.measureText(wQ).width >= TQ && (WQ = WQ.replace(wQ, ""))
        }
        WQ = (0, wQ.P)(WQ);
        const rQ = [],
          IQ = WQ.split("\n"),
          jQ = this.justify ? QQ.measureText("\u200a").width : 0;
        IQ.forEach((WQ => {
          let XQ = QQ.measureText(WQ).width;
          if (XQ <= TQ) rQ.push(WQ);
          else {
            let wQ = WQ;
            const qQ = TQ;
            let zQ, sQ, FQ;
            for (XQ = QQ.measureText(wQ).width; XQ > qQ;) {
              for (zQ = 0, sQ = 0, FQ = ""; sQ < qQ;) zQ++, FQ = wQ.substr(0, zQ), sQ = QQ.measureText(FQ).width;
              zQ--, FQ = FQ.substr(0, zQ);
              const WQ = zQ;
              if (" " !== wQ.substr(zQ, 1)) {
                for (;
                  " " !== wQ.substr(zQ, 1) && 0 !== zQ;) zQ--;
                0 === zQ && (zQ = WQ), FQ = wQ.substr(0, zQ)
              }
              FQ = this.justify ? this.justifyLine(QQ, FQ, jQ, "\u200a", TQ) : FQ, wQ = wQ.substr(zQ), XQ = QQ.measureText(wQ).width, rQ.push(FQ)
            }
            XQ > 0 && rQ.push(wQ)
          }
        }));
        const BQ = this.lineHeight ? this.lineHeight : this.getTextHeight(QQ, WQ),
          yQ = BQ * (rQ.length - 1),
          VQ = yQ / 2;
        let DQ = qQ;
        "top" === this.vAlign ? JQ = qQ + sQ : "bottom" === this.vAlign ? (JQ = PQ - yQ, DQ = PQ) : (DQ = qQ + zQ / 2, JQ -= VQ), rQ.forEach((WQ => {
          WQ = WQ.trim(), QQ.fillText(WQ, gQ, JQ), JQ += BQ
        })), this.debug && (QQ.lineWidth = 3, QQ.strokeStyle = "#00909e", QQ.strokeRect(XQ, qQ, TQ, zQ), QQ.lineWidth = 2, QQ.strokeStyle = "#f6d743", QQ.beginPath(), QQ.moveTo(gQ, qQ), QQ.lineTo(gQ, PQ), QQ.stroke(), QQ.strokeStyle = "#ff6363", QQ.beginPath(), QQ.moveTo(XQ, DQ), QQ.lineTo(FQ, DQ), QQ.stroke());
        return {
          height: yQ + BQ
        }
      },
      getTextHeight: function(QQ, WQ) {
        const XQ = QQ.textBaseline;
        QQ.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: wQ
        } = QQ.measureText(WQ);
        return QQ.textBaseline = XQ, wQ
      },
      justifyLine: function(QQ, WQ, XQ, wQ, qQ) {
        const TQ = WQ.trim(),
          zQ = QQ.measureText(TQ).width,
          sQ = TQ.split(/\s+/).length - 1,
          FQ = Math.floor((qQ - zQ) / XQ);
        if (sQ <= 0 || FQ <= 0) return TQ;
        const PQ = Math.floor(FQ / sQ);
        let gQ = FQ - sQ * PQ,
          JQ = [];
        for (let rQ = 0; rQ < PQ; rQ++) JQ.push(wQ);
        JQ = JQ.join("");
        return TQ.replace(/\s+/g, (QQ => {
          const WQ = gQ > 0 ? JQ + wQ : JQ;
          return gQ--, QQ + WQ
        }))
      }
    }
  },
  39400: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return WQ.set(QQ), WQ
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  },
  38942: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => BQ,
      d: () => jQ,
      e: () => rQ,
      i: () => gQ,
      l: () => JQ
    });
    var wQ = XQ(4534),
      qQ = XQ(402);
    const TQ = 1024,
      zQ = 1536,
      sQ = 2 * wQ.i + 1,
      FQ = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      PQ = 1.5;

    function gQ(QQ, WQ, XQ) {
      if ("string" !== typeof QQ) return WQ;
      try {
        const XQ = JSON.parse(QQ);
        return XQ && "object" === typeof XQ ? XQ : WQ
      } catch (wQ) {
        return void 0 !== XQ && console.error(`Couldn't parse ${XQ}`, wQ), WQ
      }
    }

    function JQ(QQ) {
      return gQ(QQ, null, "a leaderboard's rows")
    }

    function rQ(QQ, WQ) {
      var XQ, wQ;
      return null !== WQ && void 0 !== WQ ? WQ : {
        status: null !== (XQ = QQ.status) && void 0 !== XQ ? XQ : "loading",
        entries: null !== (wQ = QQ.entries) && void 0 !== wQ ? wQ : []
      }
    }

    function IQ(QQ, WQ) {
      return "number" === typeof QQ && Number.isFinite(QQ) && QQ > 0 ? QQ : WQ
    }

    function jQ(QQ, WQ) {
      const XQ = IQ(QQ.size, 1);
      let wQ = IQ(QQ.width, IQ(2.5 * XQ, 2.5)),
        qQ = IQ(QQ.height, IQ(3.75 * XQ, 3.75));
      Number.isFinite(TQ * qQ / wQ) && Number.isFinite(zQ * wQ / qQ) || (wQ = 2.5, qQ = 3.75);
      const sQ = qQ / wQ,
        FQ = Math.max(1, Math.min(TQ, WQ / sQ));
      return {
        width: wQ,
        height: qQ,
        layoutWidth: Math.max(TQ, zQ / sQ),
        layoutHeight: Math.max(zQ, TQ * sQ),
        pixelWidth: Math.round(FQ),
        pixelHeight: Math.round(Math.max(1, Math.min(WQ, FQ * sQ)))
      }
    }

    function BQ(QQ, WQ, XQ, zQ, gQ, JQ) {
      QQ.setTransform(1, 0, 0, 1, 0, 0), QQ.fillStyle = qQ.N.defaultNameTagBackground, QQ.fillRect(0, 0, WQ, XQ), QQ.scale(WQ / zQ.layoutWidth, XQ / zQ.layoutHeight), QQ.translate((zQ.layoutWidth - TQ) / 2, 0),
        function(QQ, WQ, XQ, TQ) {
          var zQ, gQ, JQ, rQ;
          const {
            top: IQ,
            around: jQ,
            showPlayerText: BQ,
            localPlayerDbId: DQ
          } = XQ, {
            whiteUiText: pQ,
            grayUiText: GQ,
            yellowUiText: UQ
          } = qQ.N;
          QQ.textBaseline = "middle";
          const bQ = function(WQ, XQ, wQ, qQ, TQ, zQ) {
              let sQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              QQ.font = `bold ${qQ}px 'Jetbrains Mono', monospace`, QQ.fillStyle = TQ, QQ.textAlign = sQ;
              let FQ = WQ.replace(/[\r\n\t]/g, " ");
              if (QQ.measureText(FQ).width > zQ) {
                for (; FQ.length > 0 && QQ.measureText(`${FQ}\u2026`).width > zQ;) FQ = FQ.slice(0, -1);
                FQ += "\u2026"
              }
              QQ.fillText(FQ, XQ, wQ)
            },
            vQ = WQ => {
              QQ.fillStyle = pQ, QQ.globalAlpha = .15, QQ.fillRect(24, WQ, 976, 2), QQ.globalAlpha = 1
            },
            dQ = null === DQ ? null : (0, qQ.kc)(DQ),
            HQ = QQ => null !== dQ && QQ.playerHash === dQ,
            aQ = yQ(IQ.entries, wQ.j),
            lQ = "ready" === IQ.status && aQ.length > 0,
            hQ = null === jQ ? [] : yQ(jQ.entries, sQ),
            iQ = aQ.some(HQ),
            cQ = null === jQ ? null : function(QQ) {
              const WQ = QQ;
              if (!WQ || !Number.isFinite(WQ.rank) || !Number.isFinite(WQ.tied) || !Number.isFinite(WQ.total)) return null;
              return WQ
            }(jQ.standing),
            AQ = hQ.find(HQ),
            RQ = aQ.find(HQ),
            EQ = null === cQ || void 0 === AQ ? null : {
              value: AQ.value,
              rank: cQ.rank
            },
            CQ = VQ(aQ, void 0 === RQ || RQ.value === (null === EQ || void 0 === EQ ? void 0 : EQ.value) ? EQ : null),
            uQ = VQ(hQ, EQ),
            LQ = (QQ, WQ) => {
              const XQ = QQ.findIndex(HQ);
              return XQ >= 0 ? WQ[XQ] : null
            },
            kQ = null !== (zQ = null !== (gQ = null === cQ || void 0 === cQ ? void 0 : cQ.rank) && void 0 !== gQ ? gQ : LQ(hQ, uQ)) && void 0 !== zQ ? zQ : LQ(aQ, CQ);
          QQ.font = "bold 34px 'Jetbrains Mono', monospace";
          const fQ = [...lQ ? CQ : [], ...iQ ? [] : uQ],
            SQ = Math.min(280, Math.max(0, ...fQ.map((WQ => QQ.measureText(FQ.format(WQ)).width)))),
            tQ = SQ <= 80,
            oQ = tQ ? 80 : 32 + SQ,
            eQ = tQ ? 148 : oQ + 28,
            nQ = 660 - eQ;
          bQ(`TOP ${wQ.j}  /  ALL TIME`, 24, 52, 28, GQ, 976), bQ(BQ ? String(null !== (JQ = WQ.title) && void 0 !== JQ ? JQ : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, pQ, 976), bQ("RANK", 32, 174, 28, GQ, eQ - 40), bQ("PLAYER", eQ, 174, 28, GQ, nQ), bQ(BQ ? String(null !== (rQ = WQ.scoreLabel) && void 0 !== rQ ? rQ : "Score").slice(0, 24) : "Score", 992, 174, 28, GQ, 304, "right"), vQ(202);
          const xQ = (TQ - 232) / (wQ.j + PQ + sQ),
            YQ = 208 + wQ.j * xQ,
            NQ = YQ + PQ * xQ,
            ZQ = (WQ, XQ, wQ, qQ) => {
              const TQ = HQ(WQ);
              QQ.fillStyle = TQ ? UQ : pQ, QQ.globalAlpha = TQ ? .15 : qQ ? .035 : 0, QQ.fillRect(24, wQ - xQ / 2 + 1, 976, xQ - 2), QQ.globalAlpha = 1;
              const zQ = TQ ? UQ : pQ;
              bQ(FQ.format(XQ), oQ, wQ, 34, zQ, tQ ? 80 : SQ, tQ ? "center" : "right"), bQ(BQ ? String(WQ.name).slice(0, 64) : "Player", eQ, wQ, 34, zQ, nQ);
              const sQ = FQ.format(WQ.value);
              bQ(QQ.measureText(sQ).width > 304 ? WQ.value.toExponential(6) : sQ, 992, wQ, 34, zQ, 304, "right")
            };
          if (lQ)
            for (const [wQ, qQ] of aQ.entries()) ZQ(qQ, CQ[wQ], 208 + (wQ + .5) * xQ, wQ % 2 === 0);
          else {
            const QQ = "error" === IQ.status,
              WQ = QQ ? "Couldn't load leaderboard" : "ready" === IQ.status ? "No scores yet" : "Loading leaderboard\u2026",
              XQ = QQ ? "Trying again shortly" : "ready" === IQ.status ? "Be the first on the board!" : "Fetching the top players",
              wQ = (208 + YQ) / 2;
            bQ(WQ, 512, wQ - 28, 40, QQ ? qQ.N.redUiText : pQ, 960, "center"), bQ(XQ, 512, wQ + 27, 30, GQ, 960, "center")
          }
          const OQ = YQ + PQ * xQ / 2;
          if (null === kQ) vQ(OQ);
          else {
            const WQ = null === cQ ? 0 : cQ.tied - 1,
              XQ = `YOUR RANK #${FQ.format(kQ)}${null===cQ?"":` of ${FQ.format(cQ.total)}`}`;
            QQ.font = "bold 36px 'Jetbrains Mono', monospace";
            const wQ = Math.max(20, Math.min(36, Math.floor(34560 / QQ.measureText(XQ).width)));
            bQ(XQ, 512, OQ - (WQ > 0 ? 15 : 0), wQ, UQ, 960, "center"), WQ > 0 && bQ(`Tied with ${FQ.format(WQ)} other${1===WQ?"":"s"}`, 512, OQ + 24, 24, GQ, 960, "center")
          }
          if (null === jQ) return;
          const KQ = NQ + sQ * xQ / 2;
          if (iQ) bQ(`You're in the top ${wQ.j}!`, 512, KQ, 40, UQ, 960, "center");
          else if (0 === hQ.length) bQ("You're not on this board yet", 512, KQ, 34, GQ, 960, "center");
          else
            for (const [wQ, qQ] of hQ.entries()) ZQ(qQ, uQ[wQ], NQ + (wQ + .5) * xQ, wQ % 2 === 0)
        }(QQ, gQ, JQ, zQ.layoutHeight)
    }

    function yQ(QQ, WQ) {
      return Array.isArray(QQ) ? QQ.slice(0, WQ).filter((QQ => QQ && Number.isFinite(QQ.rank) && Number.isFinite(QQ.value))) : []
    }

    function VQ(QQ, WQ) {
      const XQ = [];
      let wQ = !1;
      return QQ.forEach(((qQ, TQ) => {
        if (null !== WQ && qQ.value === WQ.value) return void XQ.push(WQ.rank);
        const zQ = TQ > 0 && qQ.value === QQ[TQ - 1].value;
        zQ || (wQ = 0 === TQ && 1 !== qQ.rank), XQ.push(zQ && !wQ ? XQ[TQ - 1] : qQ.rank)
      })), XQ
    }
  },
  39143: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      e: () => TQ
    });
    const wQ = 32;

    function qQ(QQ) {
      return Array.from(QQ).length
    }

    function TQ(QQ) {
      const WQ = [""];
      let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        qQ = "";
      const TQ = () => {
        WQ.push(""), XQ = 0, qQ = ""
      };
      for (const zQ of QQ.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(zQ)) TQ();
        else if (/^\s+$/.test(zQ)) qQ += zQ;
      else if (zQ.length > 0) {
        const QQ = Array.from(zQ);
        XQ > 0 && XQ + qQ.length + QQ.length > wQ && TQ(), WQ[WQ.length - 1] += qQ, XQ += qQ.length, qQ = "";
        for (const qQ of QQ) XQ >= wQ && TQ(), WQ[WQ.length - 1] += qQ, XQ++
      }
      return WQ[WQ.length - 1] += qQ, WQ
    }
  },
  39391: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ
    });
    var wQ = XQ(36932),
      qQ = XQ.n(wQ);
    const TQ = [1, 1, 1];

    function zQ(QQ) {
      if (!QQ) return [...TQ];
      try {
        const [WQ, XQ, wQ] = qQ()(QQ).rgb().array();
        return [WQ / 255, XQ / 255, wQ / 255]
      } catch (WQ) {
        return console.warn(`Invalid groundArrowPath colour "${QQ}":`, WQ), [...TQ]
      }
    }
  },
  39502: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ,
      f: () => PQ,
      j: () => FQ
    });
    var wQ = XQ(341),
      qQ = XQ(3146);
    const TQ = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      zQ = 512;

    function sQ(QQ) {
      var WQ;
      const XQ = Math.min(screen.width, screen.height) * (null !== (WQ = (0, wQ.c)()) && void 0 !== WQ ? WQ : (0, qQ.m)());
      return Math.max(window.innerHeight * (0, qQ.m)(), XQ) / (0, qQ.p)(QQ)
    }

    function FQ(QQ, WQ, XQ) {
      return WQ / (2 * Math.tan(XQ / 2)) > zQ ? QQ : PQ(QQ)
    }

    function PQ(QQ) {
      return QQ.map((QQ => QQ.replace(TQ, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34315: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      g: () => sQ,
      h: () => zQ,
      l: () => qQ,
      m: () => wQ
    });
    const wQ = {
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
      TQ = "/textures/dayNight/moon.png",
      zQ = "/textures/dayNight/stars",
      sQ = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39467: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ,
      d: () => rQ,
      g: () => wQ,
      j: () => qQ,
      m: () => PQ,
      o: () => TQ,
      r: () => gQ,
      v: () => FQ,
      x: () => sQ
    });
    const wQ = ["linear", "easeIn", "easeOut", "easeInOut"],
      qQ = ["feet", "eye"],
      TQ = ["movement", "camera", "cursor"],
      zQ = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function sQ(QQ, WQ) {
      return FQ(QQ, WQ, zQ)
    }

    function FQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (QQ === WQ || Number.isNaN(QQ) && Number.isNaN(WQ)) return !0;
      if ("object" !== typeof QQ || "object" !== typeof WQ || null === QQ || null === WQ || Array.isArray(QQ) !== Array.isArray(WQ)) return !1;
      const wQ = QQ,
        qQ = WQ;
      for (const TQ of new Set([...Object.keys(wQ), ...Object.keys(qQ)]))
        if (!XQ.includes(TQ) && !FQ(wQ[TQ], qQ[TQ])) return !1;
      return !0
    }
    const PQ = {
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
      gQ = "^-[1-9][0-9]*$",
      JQ = "^#[0-9a-fA-F]{6}$",
      rQ = "#000000"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);