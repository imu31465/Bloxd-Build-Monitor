export const id = 179;
export const ids = [179];
export const modules = {
  36688: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      g: () => CW
    });
    const wW = new Map;

    function CW(WW, RW) {
      wW.set(WW, RW)
    }

    function zR(WW) {
      return WW ? wW.get(WW) : void 0
    }
  },
  37363: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW
    });
    var wW = MW(36301);

    function CW(WW, RW, MW) {
      var CW, zR, AW, bR, yR, NW, eW;
      const BW = (0, wW.b)(WW, RW, MW[0], MW[1], MW[2]),
        tR = BW ? null !== (CW = BW.textCell) && void 0 !== CW ? CW : BW.rect.anchor : MW,
        TW = RW(tR[0], tR[1], tR[2]);
      return {
        pos: [MW[0], MW[1], MW[2]],
        noticeboardSpan: BW && {
          width: BW.rect.width,
          height: BW.rect.height
        },
        text: null !== (zR = null === TW || void 0 === TW || null === (AW = TW.persisted) || void 0 === AW || null === (bR = AW.shared) || void 0 === bR ? void 0 : bR.text) && void 0 !== zR ? zR : "",
        textSize: null !== (yR = null === TW || void 0 === TW || null === (NW = TW.persisted) || void 0 === NW || null === (eW = NW.shared) || void 0 === eW ? void 0 : eW.textSize) && void 0 !== yR ? yR : null
      }
    }
  },
  36563: (WW, RW, MW) => {
    function wW(WW) {
      switch (WW.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    MW.d(RW, {
      d: () => CW,
      e: () => zR,
      i: () => wW
    });
    const CW = 4,
      zR = 3
  },
  37132: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      d: () => zR
    });
    var wW = MW(284);
    const CW = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class zR {
      constructor(WW) {
        this.importGame = WW, this.loads = new Map, this.loaded = new Map
      }
      load(WW) {
        const RW = (0, wW.Pb)(WW);
        if (!CW.has(RW)) return Promise.resolve(void 0);
        let MW = this.loads.get(RW);
        return MW || (MW = this.importGame(RW).then((WW => {
          const MW = WW.default;
          if ("function" !== typeof MW) throw new Error(`${RW}'s client code has no default-exported factory`);
          return this.loaded.set(RW, MW), MW
        })).catch((WW => {
          throw this.loads.delete(RW), WW
        })), this.loads.set(RW, MW)), MW
      }
      loadedFactory(WW) {
        const RW = (0, wW.Pb)(WW);
        if (!CW.has(RW)) return;
        const MW = this.loaded.get(RW);
        if (!MW) throw new Error(`${RW}'s client code started before it loaded`);
        return MW
      }
    }
  },
  37365: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(8262),
      CW = MW(34920),
      zR = MW(2410);

    function AW(WW) {
      if (WW === wW.c) return 0;
      const RW = (0, zR.e)(WW);
      if (void 0 !== RW && RW <= CW.MAX_BLOCK_ID) return RW;
      const MW = (0, zR.e)(WW.split("|")[0]);
      if (void 0 !== MW && MW <= CW.MAX_BLOCK_ID && (0, CW.rootMetaDescOf)(MW) === WW) return MW;
      throw new Error(`Invalid block name. You sent ${WW}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  37183: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW
    });
    var wW = MW(27);
    class CW {
      constructor(WW) {
        this.screen = WW, this.hidesHud = !1
      }
      show(WW, RW) {
        this.screen.setFade(WW.colour, WW.alpha), this.screen.setLetterbox(!0 === RW.letterbox, WW.alpha < 1), this.setHudHidden(!0 === RW.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(WW) {
        this.hidesHud !== WW && (this.hidesHud = WW, wW.b.set({
          isUiHiddenByCamera: WW
        }))
      }
    }
  },
  37147: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW,
      g: () => tR,
      i: () => BW,
      k: () => AW,
      m: () => gR,
      q: () => yR,
      u: () => iR,
      v: () => NW,
      w: () => bR,
      z: () => eW
    });
    const wW = Math.PI / 2 - .001,
      CW = 2 * Math.PI,
      zR = 1e-9;

    function AW(WW, RW) {
      RW.heading = WW.heading, RW.pitch = WW.pitch
    }

    function bR(WW, RW) {
      const MW = RW - WW;
      return MW - CW * Math.floor((MW + Math.PI) / CW)
    }

    function yR(WW, RW, MW) {
      return WW + bR(WW, RW) * MW
    }

    function NW(WW) {
      if (!Number.isFinite(WW)) return WW;
      const RW = WW - CW * Math.floor(WW / CW);
      return RW < CW ? RW : 0
    }

    function eW(WW, RW) {
      return WW + bR(WW, RW)
    }

    function BW(WW) {
      return Math.max(-wW, Math.min(wW, WW))
    }

    function tR(WW, RW, MW) {
      const wW = Math.cos(RW);
      return MW[0] = wW * Math.sin(WW), MW[1] = -Math.sin(RW), MW[2] = wW * Math.cos(WW), MW
    }

    function TW(WW, RW, MW, wW) {
      const CW = Math.sqrt(WW * WW + MW * MW);
      return CW < zR && Math.abs(RW) < zR || (CW >= zR && (wW.heading = Math.atan2(WW, MW)), wW.pitch = BW(Math.atan2(-RW, CW) + 0)), wW
    }

    function gR(WW, RW) {
      return TW(WW[0], WW[1], WW[2], RW)
    }

    function iR(WW, RW, MW) {
      return TW(RW[0] - WW[0], RW[1] - WW[1], RW[2] - WW[2], MW)
    }
  },
  37174: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      h: () => CW
    });
    var wW = MW(37147);

    function CW(WW) {
      var RW;
      const MW = "default" === WW.mode ? "movement" : null !== (RW = WW.playerFacing) && void 0 !== RW ? RW : "movement";
      return "cursor" === MW ? {
        facing: MW,
        mouseTurns: null
      } : {
        facing: MW,
        mouseTurns: "default" !== WW.mode && void 0 !== WW.playerLook ? "look" : "view"
      }
    }

    function zR(WW, RW, MW, CW, zR, AW) {
      return AW.iMW = 0, AW.YRW = 0, AW.pointedAt = void 0, void 0 !== CW ? zR ? (AW.pointedAt = CW, WW) : (0, wW.v)(CW.heading) : zR ? (AW.iMW = RW, AW.YRW = MW, WW) : (0, wW.v)(WW + RW)
    }
  },
  37158: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => KW
    });
    var wW = MW(37166),
      CW = MW(37147),
      zR = MW(35164);

    function AW(WW, RW, MW, wW) {
      if (!(wW > 0)) return RW;
      const CW = RW > WW ? Math.min(RW, WW + MW / wW) : Math.max(RW, WW - MW / wW);
      return Math.abs(RW - CW) < 1e-9 ? RW : CW
    }
    class bR {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: wW.g,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(WW) {
        !this.isGoingOut() && this.sinceTurnMs < wW.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: WW
        } : (this.waiting = null, this.startOut(WW))
      }
      fadeIn(WW) {
        this.isGoingOut() ? this.sinceTurnMs < wW.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: WW
        } : (this.waiting = null, this.startIn(WW)) : this.waiting = null
      }
      advance(WW) {
        const RW = this.waiting;
        if (null === RW) return this.step(WW);
        const MW = wW.k.minFadeTurnMs - this.sinceTurnMs;
        if (MW > WW) return this.step(WW);
        const CW = this.step(MW);
        return this.waiting = null, "out" === RW.turn ? this.startOut(RW.transition) : this.startIn(RW.minMs), this.step(WW - MW) || CW
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(WW) {
        ("in" === this.phase || null === this.phase && this.clearMs < wW.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = WW.colour), this.outMs = WW.outMs, this.holdMs = WW.holdMs, this.inMs = WW.inMs
      }
      startIn(WW) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(WW, this.inMs)
      }
      step(WW) {
        const RW = this.screen;
        this.sinceTurnMs += WW, null === this.phase && (this.clearMs += WW);
        let MW = !1,
          CW = WW;
        if ("out" === this.phase) {
          const wW = (1 - RW.alpha) * this.outMs;
          if (RW.alpha = AW(RW.alpha, 1, WW, this.outMs), RW.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, CW = Math.max(0, WW - wW), MW = !0
        }
        let zR = WW;
        if ("hold" === this.phase) {
          this.heldMs += CW;
          const WW = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - wW.k.minFadeTurnMs);
          if (WW < 0 || MW) return MW;
          this.phase = "in", this.sinceTurnMs = WW, zR = WW
        }
        return "in" === this.phase && (RW.alpha = AW(RW.alpha, 0, zR, this.inMs), RW.alpha <= 0 && (this.phase = null, this.clearMs = 0)), MW
      }
    }
    var yR = MW(37143),
      NW = MW(37172),
      eW = MW(1050),
      BW = MW(34791);

    function tR(WW, RW) {
      for (let MW = 0; MW < RW.length; MW++) RW[MW] = WW[MW]
    }

    function TW(WW, RW) {
      var MW;
      return null !== (MW = WW.fov) && void 0 !== MW ? MW : RW.getDefaultFov()
    }

    function gR(WW, RW, MW, wW, CW) {
      const zR = 2 / wW,
        AW = Math.exp(-zR * CW);
      for (let bR = 0; bR < WW.length; bR++) {
        const wW = WW[bR] - MW[bR],
          yR = (RW[bR] + zR * wW) * CW;
        WW[bR] = MW[bR] + (wW + yR) * AW, RW[bR] = (RW[bR] - zR * yR) * AW
      }
    }
    class iR {
      constructor(WW, RW, MW, wW) {
        var zR, AW, bR, yR, NW;
        this.settings = WW, this.zM = RW, this.targets = MW, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.lA = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, CW.v)((0, eW.i)(null !== (zR = WW.viewHeading) && void 0 !== zR ? zR : 0)),
          pitch: (0, CW.i)((0, eW.i)(null !== (AW = WW.viewElevation) && void 0 !== AW ? AW : 45))
        }, this.closestDistance = null !== (bR = WW.closestDistance) && void 0 !== bR ? bR : Math.min(6, null !== (yR = WW.furthestDistance) && void 0 !== yR ? yR : 1 / 0), this.furthestDistance = null !== (NW = WW.furthestDistance) && void 0 !== NW ? NW : Math.max(64, this.closestDistance);
        const BW = (0, CW.g)(this.base.heading, this.base.pitch, this.forward),
          tR = wW.position,
          TW = this.closestDistance;
        this.goal = [tR[0] + BW[0] * TW, tR[1] + BW[1] * TW, tR[2] + BW[2] * TW, TW, this.base.heading, this.base.pitch]
      }
      update(WW, RW, MW) {
        var wW, zR;
        this.placeGoal(null !== (wW = this.settings.fov) && void 0 !== wW ? wW : this.zM.getBaseFov()), this.goal[4] = (0, CW.z)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const AW = null !== (zR = this.settings.smoothMs) && void 0 !== zR ? zR : 400;
        !this.started || AW < 1 ? (tR(this.goal, this.smoothed), this.lA.fill(0), this.started = !0) : gR(this.smoothed, this.lA, this.goal, AW, WW), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, CW.i)(this.smoothed[5]), RW.apply(this.angles, MW);
        const bR = (0, CW.g)(MW.heading, MW.pitch, this.forward);
        for (let CW = 0; CW < 3; CW++) MW.position[CW] = this.smoothed[CW] - bR[CW] * this.smoothed[3];
        MW.fov = TW(this.settings, this.zM)
      }
      continueFrom(WW) {
        WW instanceof iR && (tR(WW.goal, this.goal), tR(WW.smoothed, this.smoothed), tR(WW.lA, this.lA), this.framedTargets = WW.framedTargets, this.started = WW.started)
      }
      reset() {
        this.lA.fill(0), this.started = !1
      }
      placeGoal(WW) {
        var RW;
        let MW = 0;
        for (const eW of this.settings.targets) {
          const WW = this.targets.currentAimPoint(eW);
          WW && (0, yR.i)(WW, this.pointAt(MW++))
        }
        if (MW > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const WW = this.targets.aimPoint(this.zM.localPlayerId);
          WW && (0, yR.i)(WW, this.pointAt(MW++))
        }
        const wW = this.goal;
        if (0 === MW) return void(wW[3] = this.withinDistances(wW[3]));
        for (let yR = 0; yR < 3; yR++) {
          let WW = 1 / 0,
            RW = -1 / 0;
          for (let wW = 0; wW < MW; wW++) WW = Math.min(WW, this.points[wW][yR]), RW = Math.max(RW, this.points[wW][yR]);
          wW[yR] = (WW + RW) / 2
        }
        let CW = 0;
        for (let yR = 0; yR < MW; yR++) {
          const WW = this.points[yR];
          CW = Math.max(CW, Math.hypot(WW[0] - wW[0], WW[1] - wW[1], WW[2] - wW[2]))
        }
        const zR = Math.tan((0, eW.i)(WW) / 2),
          AW = Math.atan(zR * (!0 === this.settings.letterbox ? BW.f : 1)),
          bR = Math.atan(zR * this.zM.getAspectRatio()),
          NW = (CW + (null !== (RW = this.settings.padding) && void 0 !== RW ? RW : 2)) / Math.sin(Math.min(AW, bR));
        wW[3] = this.withinDistances(NW)
      }
      withinDistances(WW) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, WW))
      }
      pointAt(WW) {
        return WW === this.points.length && this.points.push([0, 0, 0]), this.points[WW]
      }
    }
    class YW {
      constructor(WW) {
        this.limits = WW, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(WW) {
        this.limits && (this.yawOffset = WW.yawOffset, this.pitchOffset = WW.pitchOffset, this.idleMs = WW.idleMs)
      }
      update(WW, RW) {
        const MW = this.limits;
        if (!MW) return;
        const wW = Number.isFinite(RW.iMW) ? RW.iMW : 0,
          CW = Number.isFinite(RW.YRW) ? RW.YRW : 0;
        if (RW.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: RW.pointedAt.heading,
          pitch: RW.pointedAt.pitch
        };
        else if (0 !== wW || 0 !== CW) this.idleMs = 0, this.yawOffset += wW, this.pitchOffset += CW;
        else {
          const RW = Math.max(0, this.idleMs + WW - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += WW, void 0 !== MW.returnMs && RW > 0) {
            const WW = MW.returnMs > 0 ? Math.exp(-3 * RW / MW.returnMs) : 0;
            this.yawOffset *= WW, this.pitchOffset *= WW
          }
        }
        this.clampOffsets(MW)
      }
      clampOffsets(WW) {
        if (WW.maxYaw >= 180) this.yawOffset = (0, CW.w)(0, this.yawOffset);
        else {
          const RW = (0, eW.i)(WW.maxYaw);
          this.yawOffset = Math.max(-RW, Math.min(RW, this.yawOffset))
        }
        const RW = (0, eW.i)(WW.maxPitch);
        this.pitchOffset = Math.max(-RW, Math.min(RW, this.pitchOffset))
      }
      apply(WW, RW) {
        this.pointedAt && this.limits && (this.yawOffset = (0, CW.w)(WW.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - WW.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const MW = (0, CW.i)(WW.pitch + this.pitchOffset);
        this.pitchOffset = MW - WW.pitch, RW.heading = (0, CW.v)(WW.heading + this.yawOffset), RW.pitch = MW
      }
      unapply(WW, RW) {
        RW.heading = (0, CW.v)(WW.heading - this.yawOffset), RW.pitch = (0, CW.i)(WW.pitch - this.pitchOffset)
      }
    }
    const JW = 1e-6;

    function PW(WW) {
      return Math.sqrt(WW[0] * WW[0] + WW[1] * WW[1] + WW[2] * WW[2])
    }

    function IW(WW, RW, MW, wW, CW) {
      const zR = CW * CW,
        AW = zR * CW;
      return (2 * AW - 3 * zR + 1) * WW + (AW - 2 * zR + CW) * RW + (-2 * AW + 3 * zR) * MW + (AW - zR) * wW
    }

    function oW(WW, RW, MW, wW, CW) {
      const zR = CW * CW;
      return (6 * zR - 6 * CW) * WW + (3 * zR - 4 * CW + 1) * RW + (-6 * zR + 6 * CW) * MW + (3 * zR - 2 * CW) * wW
    }

    function lW(WW, RW) {
      const MW = RW[0] - WW[0],
        wW = RW[1] - WW[1],
        CW = RW[2] - WW[2];
      return Math.sqrt(MW * MW + wW * wW + CW * CW)
    }

    function FW(WW, RW, MW, wW, CW, zR) {
      for (let AW = 0; AW < 3; AW++) zR[AW] = CW ? WW[AW] * wW : MW[AW] - RW[AW];
      return CW && function(WW, RW) {
        const MW = PW(WW);
        if (MW > RW) {
          const wW = RW / MW;
          WW[0] *= wW, WW[1] *= wW, WW[2] *= wW
        }
      }(zR, 3 * lW(RW, MW)), zR
    }

    function fW(WW, RW, MW, wW) {
      for (let CW = 0; CW < 3; CW++) wW[CW] = 6 * (RW[CW] - WW[CW]) - 2 * MW[CW];
      if (PW(wW) < JW)
        for (let CW = 0; CW < 3; CW++) wW[CW] = RW[CW] - WW[CW];
      return wW
    }

    function QW(WW, RW) {
      return [2 * RW[0] - WW[0], 2 * RW[1] - WW[1], 2 * RW[2] - WW[2]]
    }

    function rR(WW, RW, MW, wW, CW, zR, AW) {
      if (!zR && !AW) return 0;
      const bR = zR ? WW : 2 * RW - MW,
        yR = AW ? MW : 2 * RW - WW,
        NW = zR ? wW : CW,
        eW = AW ? CW : wW,
        BW = (RW - bR) / NW,
        tR = (yR - RW) / eW;
      if (BW * tR <= 0) return 0;
      const TW = (yR - bR) / (NW + eW),
        gR = 3 * Math.min(Math.abs(BW), Math.abs(tR));
      return Math.max(-gR, Math.min(gR, TW))
    }

    function cR(WW, RW, MW, wW, CW, zR, AW) {
      const {
        u: bR,
        segmentMs: yR
      } = WW;
      if (!WW.curved) return MW + (wW - MW) * bR;
      return IW(MW, rR(RW, MW, wW, WW.beforeMs, yR, zR, !0) * yR, wW, rR(MW, wW, CW, yR, WW.afterMs, !0, AW) * yR, bR)
    }

    function XW(WW) {
      return Math.abs(WW.pitch) >= CW.e
    }
    class jR {
      constructor(WW, RW, MW, wW, CW) {
        this.nodes = WW, this.prevNodes = MW, this.nextNodes = wW, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = WW.map(((WW, MW) => this.nodeTangent(RW, CW, MW)))
      }
      sample(WW, RW, MW) {
        const {
          index: wW,
          toIndex: zR,
          segmentMs: AW,
          curved: bR
        } = WW, yR = this.fromAngles, NW = this.toAngles, eW = this.nodeAngles(wW, MW.position, RW, yR), BW = this.nodeAngles(zR, MW.position, RW, NW);
        if (AW > 0 && "aim" !== eW && "aim" !== BW && this.liveTangent(WW, yR)) return MW.heading = (0, CW.v)(yR.heading), void(MW.pitch = yR.pitch);
        if ("none" === eW && "none" === BW) return;
        !bR && AW > 0 && ("tangent" === eW && this.liveTangent(WW, yR), "tangent" === BW && this.liveTangent(WW, NW)), "none" === eW ? (0, CW.k)(NW, yR) : "none" === BW && (0, CW.k)(yR, NW);
        const tR = bR && WW.beforeIndex >= 0 && "none" !== this.nodeAngles(WW.beforeIndex, MW.position, RW, this.beforeAngles),
          TW = bR && WW.afterIndex >= 0 && "none" !== this.nodeAngles(WW.afterIndex, MW.position, RW, this.afterAngles),
          gR = (0, CW.z)(yR.heading, NW.heading),
          iR = cR(WW, tR ? (0, CW.z)(yR.heading, this.beforeAngles.heading) : 0, yR.heading, gR, TW ? (0, CW.z)(gR, this.afterAngles.heading) : 0, tR, TW);
        MW.heading = (0, CW.v)(iR), MW.pitch = (0, CW.i)(cR(WW, this.beforeAngles.pitch, yR.pitch, NW.pitch, this.afterAngles.pitch, tR, TW))
      }
      nodeAngles(WW, RW, MW, wW) {
        const CW = this.rawNodeAngles(WW, RW, MW, wW);
        return "none" !== CW && XW(wW) && !this.borrowHeading(this.prevNodes[WW], RW, MW, wW) && this.borrowHeading(this.nextNodes[WW], RW, MW, wW), CW
      }
      borrowHeading(WW, RW, MW, wW) {
        const CW = this.borrowedAngles;
        return !(WW < 0 || "none" === this.rawNodeAngles(WW, RW, MW, CW) || XW(CW)) && (wW.heading = CW.heading, !0)
      }
      rawNodeAngles(WW, RW, MW, wW) {
        const zR = this.nodes[WW].keyframe;
        if (zR.lookDirection) return (0, CW.m)(zR.lookDirection, wW), "aim";
        if (void 0 !== zR.lookAt) {
          const WW = MW(zR.lookAt);
          if (WW) return (0, CW.u)(RW, WW, wW), "aim"
        }
        const AW = this.tangents[WW];
        return AW ? ((0, CW.k)(AW, wW), "tangent") : "none"
      }
      liveTangent(WW, RW) {
        const MW = this.nodes[WW.index].position,
          wW = this.nodes[WW.toIndex].position,
          zR = this.derivative;
        for (let CW = 0; CW < 3; CW++) zR[CW] = oW(MW[CW], WW.fromTangent[CW], wW[CW], WW.toTangent[CW], WW.u);
        return PW(zR) > 1e-9 ? ((0, CW.m)(zR, RW), !0) : !(lW(MW, wW) < JW) && ((0, CW.m)(fW(MW, wW, WW.u < .5 ? WW.toTangent : WW.fromTangent, zR), RW), !0)
      }
      nodeTangent(WW, RW, MW) {
        var wW;
        const zR = WW[MW];
        if (PW(zR) > 1e-9) return (0, CW.m)(zR, {
          heading: 0,
          pitch: 0
        });
        const AW = null !== (wW = this.restDirectionTo(MW, MW + 1, WW, RW)) && void 0 !== wW ? wW : this.restDirectionTo(MW, MW - 1, WW, RW);
        return AW ? (0, CW.m)(AW, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(WW, RW, MW, wW) {
        const CW = this.nodes[WW],
          zR = this.nodes[RW];
        if (!zR || lW(CW.position, zR.position) < JW) return null;
        const [AW, bR] = RW > WW ? [CW, zR] : [zR, CW], yR = FW(MW[RW], AW.position, bR.position, bR.timeMs - AW.timeMs, wW, [0, 0, 0]);
        return fW(AW.position, bR.position, yR, [0, 0, 0])
      }
    }

    function kR(WW, RW) {
      const MW = WW.lookDirection || RW.lookDirection ? function(WW, RW) {
        if (!WW || !RW) return WW === RW;
        const MW = PW(WW),
          wW = PW(RW);
        return Math.hypot(WW[0] / MW - RW[0] / wW, WW[1] / MW - RW[1] / wW, WW[2] / MW - RW[2] / wW) < JW
      }(WW.lookDirection, RW.lookDirection) : (wW = WW.lookAt, CW = RW.lookAt, "object" !== typeof wW || "object" !== typeof CW ? wW === CW : lW(wW, CW) < JW);
      var wW, CW;
      return lW(WW.position, RW.position) < JW && WW.fov === RW.fov && MW
    }
    class aR {
      constructor(WW, RW, MW) {
        if (this.smooth = RW, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === WW.length) throw new Error("A camera path needs at least one keyframe");
        for (let zR = 1; zR < WW.length; zR++)
          if (!(WW[zR].timeMs > WW[zR - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = WW.map((WW => {
          var RW;
          return {
            timeMs: WW.timeMs,
            position: [...WW.position],
            keyframe: WW,
            easing: (0, zR.o)(null !== (RW = WW.easing) && void 0 !== RW ? RW : "linear")
          }
        }));
        const wW = this.nodes[0],
          CW = this.nodes[this.nodes.length - 1],
          AW = MW && this.nodes.length > 1;
        AW && !kR(wW.keyframe, CW.keyframe) && this.nodes.push({
          ...wW,
          timeMs: CW.timeMs + (CW.timeMs - wW.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = AW ? this.nodes[this.nodes.length - 1].timeMs - wW.timeMs : 0, this.prevNodes = this.nodes.map(((WW, RW) => this.neighbour(RW, -1))), this.nextNodes = this.nodes.map(((WW, RW) => this.neighbour(RW, 1))), this.prevGaps = this.prevNodes.map(((WW, RW) => WW >= 0 ? this.gapMs(RW, -1) : 0)), this.nextGaps = this.nextNodes.map(((WW, RW) => WW >= 0 ? this.gapMs(RW, 1) : 0)), this.velocities = this.nodes.map(((WW, RW) => {
          const MW = this.prevNodes[RW],
            wW = this.nextNodes[RW];
          return function(WW, RW, MW, wW, CW, zR) {
            if (zR[0] = 0, zR[1] = 0, zR[2] = 0, !WW && !MW) return zR;
            const AW = null !== WW && void 0 !== WW ? WW : QW(null !== MW && void 0 !== MW ? MW : RW, RW),
              bR = null !== MW && void 0 !== MW ? MW : QW(null !== WW && void 0 !== WW ? WW : RW, RW),
              yR = WW ? wW : CW,
              NW = MW ? CW : wW,
              eW = lW(AW, RW),
              BW = lW(RW, bR);
            if (eW < JW || BW < JW) return zR;
            const tR = Math.sqrt(eW),
              TW = Math.sqrt(BW),
              gR = (tR + TW) / (yR + NW);
            for (let iR = 0; iR < 3; iR++) {
              const WW = (RW[iR] - AW[iR]) / tR - (bR[iR] - AW[iR]) / (tR + TW) + (bR[iR] - RW[iR]) / TW;
              zR[iR] = WW * gR
            }
            return zR
          }(MW >= 0 ? this.nodes[MW].position : null, WW.position, wW >= 0 ? this.nodes[wW].position : null, this.prevGaps[RW], this.nextGaps[RW], [0, 0, 0])
        })), this.aim = new jR(this.nodes, this.velocities, this.prevNodes, this.nextNodes, RW)
      }
      sample(WW, RW, MW, wW) {
        const CW = this.findSegment(this.pathTime(WW));
        this.samplePosition(CW, wW.position), this.aim.sample(CW, RW, wW);
        const {
          beforeIndex: zR,
          afterIndex: AW
        } = CW;
        wW.fov = cR(CW, zR >= 0 ? this.fovAt(zR, MW) : 0, this.fovAt(CW.index, MW), this.fovAt(CW.toIndex, MW), AW >= 0 ? this.fovAt(AW, MW) : 0, zR >= 0, AW >= 0)
      }
      pathTime(WW) {
        const RW = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || WW <= RW) return WW;
        const MW = WW - RW;
        return RW + MW - this.loopMs * Math.floor(MW / this.loopMs)
      }
      findSegment(WW) {
        const RW = this.nodes,
          MW = this.segment;
        let wW = MW.index;
        for (WW < RW[wW].timeMs && (wW = 0); wW < RW.length - 2 && RW[wW + 1].timeMs <= WW;) wW++;
        const CW = Math.min(wW + 1, RW.length - 1),
          AW = RW[CW].timeMs - RW[wW].timeMs;
        return MW.index = wW, MW.toIndex = CW, MW.segmentMs = AW, MW.u = AW > 0 ? (0, zR.k)((WW - RW[wW].timeMs) / AW, RW[wW].easing) : 1, MW.curved = this.smooth && AW > 0, MW.beforeIndex = this.prevNodes[wW], MW.afterIndex = this.nextNodes[CW], MW.beforeMs = this.prevGaps[wW], MW.afterMs = this.nextGaps[CW], MW
      }
      samplePosition(WW, RW) {
        const {
          fromTangent: MW,
          toTangent: wW,
          curved: CW
        } = WW, zR = this.nodes[WW.index].position, AW = this.nodes[WW.toIndex].position;
        FW(this.velocities[WW.index], zR, AW, WW.segmentMs, CW, MW), FW(this.velocities[WW.toIndex], zR, AW, WW.segmentMs, CW, wW);
        const bR = WW.u;
        for (let yR = 0; yR < 3; yR++) RW[yR] = CW ? IW(zR[yR], MW[yR], AW[yR], wW[yR], bR) : zR[yR] + (AW[yR] - zR[yR]) * bR
      }
      fovAt(WW, RW) {
        var MW;
        return null !== (MW = this.nodes[WW].keyframe.fov) && void 0 !== MW ? MW : RW
      }
      neighbour(WW, RW) {
        const MW = this.nodes.length - 1,
          wW = WW + RW;
        return wW >= 0 && wW <= MW ? wW : this.loopMs <= 0 || MW < 2 ? -1 : wW < 0 ? MW - 1 : 1
      }
      gapMs(WW, RW) {
        const MW = this.nodes.length - 1;
        if (1 === RW) {
          const RW = WW === MW ? 0 : WW;
          return this.nodes[RW + 1].timeMs - this.nodes[RW].timeMs
        }
        const wW = 0 === WW ? MW : WW;
        return this.nodes[wW].timeMs - this.nodes[wW - 1].timeMs
      }
    }
    class sW {
      constructor(WW) {
        this.zM = WW, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = RW => WW.getEntityPosition(RW), this.readAimPoint = RW => WW.getEntityAimPoint(RW)
      }
      aimPoint(WW) {
        return "string" !== typeof WW ? (0, yR.p)(WW, 3) ? WW : null : this.resolve(WW, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(WW) {
        const RW = "string" === typeof WW ? this.zM.getEntityAimPoint(WW) : WW;
        return RW && (0, yR.p)(RW, 3) ? RW : null
      }
      feetPosition(WW) {
        return this.resolve(WW, this.readFeet, this.lastFeet)
      }
      heading(WW) {
        const RW = this.zM.getEntityHeading(WW);
        if (null !== RW && Number.isFinite(RW)) return this.lastHeadings.set(WW, RW), RW;
        const MW = this.lastHeadings.get(WW);
        return void 0 !== MW ? MW : WW === this.zM.localPlayerId ? 0 : this.heading(this.zM.localPlayerId)
      }
      resolve(WW, RW, MW) {
        const wW = RW(WW);
        let CW = MW.get(WW);
        return wW && (0, yR.p)(wW, 3) ? (CW || (CW = [0, 0, 0], MW.set(WW, CW)), CW[0] = wW[0], CW[1] = wW[1], CW[2] = wW[2], CW) : CW || (WW === this.zM.localPlayerId ? null : this.resolve(this.zM.localPlayerId, RW, MW))
      }
    }

    function dW(WW) {
      return {
        heading: WW.heading,
        pitch: WW.pitch
      }
    }

    function pW(WW, RW) {
      Number.isFinite(WW.heading) && Number.isFinite(WW.pitch) || (0, CW.k)(RW, WW)
    }

    function hW(WW, RW, MW, wW, zR) {
      if (RW) return void(0, CW.m)(RW, zR);
      const AW = wW.aimPoint(MW);
      AW && (0, CW.u)(WW, AW, zR)
    }
    class UW {
      constructor(WW, RW, MW, wW) {
        this.settings = WW, this.zM = RW, this.targets = MW, this.base = void 0, this.base = dW(wW)
      }
      update(WW, RW, MW) {
        var wW;
        const CW = this.settings;
        (0, yR.i)(CW.position, MW.position), hW(CW.position, CW.lookDirection, null !== (wW = CW.lookAt) && void 0 !== wW ? wW : this.zM.localPlayerId, this.targets, this.base), RW.apply(this.base, MW), MW.fov = TW(CW, this.zM)
      }
      continueFrom(WW) {
        WW instanceof UW && (0, CW.k)(WW.base, this.base)
      }
      reset(WW) {
        pW(this.base, WW)
      }
    }
    class EW {
      constructor(WW, RW, MW, wW) {
        this.settings = WW, this.zM = RW, this.targets = MW, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.lA = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = dW(wW), this.goal = [...wW.position]
      }
      update(WW, RW, MW) {
        var wW, CW, zR;
        const AW = this.settings,
          bR = null !== (wW = AW.target) && void 0 !== wW ? wW : this.zM.localPlayerId,
          NW = this.targets.feetPosition(bR);
        let eW = !1;
        NW && (eW = this.foundFeet && lW(this.lastFeet, NW) > 32 + .1 * WW, (0, yR.i)(NW, this.lastFeet), this.foundFeet = !0, this.placeGoal(NW, bR));
        const BW = null !== (CW = AW.smoothMs) && void 0 !== CW ? CW : 0;
        !this.started || BW < 1 || eW ? ((0, yR.i)(this.goal, this.smoothed), this.lA.fill(0), this.started = !0) : gR(this.smoothed, this.lA, this.goal, BW, WW), eW && (this.distance = -1), (0, yR.i)(this.smoothed, MW.position);
        const tR = !0 === AW.avoidTerrain ? this.pullIn(bR, WW, MW) : 1;
        let iR = this.goal;
        if ("target" === AW.offsetSpace) iR = MW.position;
        else if (tR < 1) {
          iR = this.aimOrigin;
          for (let WW = 0; WW < 3; WW++) iR[WW] = MW.position[WW] + (this.goal[WW] - this.smoothed[WW]) * tR
        }
        hW(iR, AW.lookDirection, null !== (zR = AW.lookAt) && void 0 !== zR ? zR : bR, this.targets, this.base), RW.apply(this.base, MW), MW.fov = TW(AW, this.zM)
      }
      continueFrom(WW) {
        WW instanceof EW && (0, wW.s)(WW.settings.target, this.settings.target) && ((0, CW.k)(WW.base, this.base), (0, yR.i)(WW.goal, this.goal), (0, yR.i)(WW.lastFeet, this.lastFeet), this.foundFeet = WW.foundFeet, (0, yR.i)(WW.smoothed, this.smoothed), (0, yR.i)(WW.lA, this.lA), this.started = WW.started, !0 === WW.settings.avoidTerrain && (this.distance = WW.distance))
      }
      reset(WW) {
        pW(this.base, WW), this.lA.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(WW, RW, MW) {
        const wW = this.targets.aimPoint(WW);
        if (!wW) return 1;
        const CW = MW.position,
          zR = lW(wW, CW);
        if (!(zR > 0)) return 1;
        const AW = this.toCamera;
        for (let yR = 0; yR < 3; yR++) AW[yR] = (CW[yR] - wW[yR]) / zR;
        const bR = function(WW, RW, MW) {
          return WW < 0 || RW < WW ? RW : RW + (WW - RW) * Math.exp(-MW / 150)
        }(this.distance, function(WW, RW, MW, wW) {
          const CW = WW.raycastTerrain(RW, MW, wW);
          return null !== CW && Number.isFinite(CW) ? Math.min(wW, Math.max(0, CW - .2)) : wW
        }(this.zM, wW, AW, zR), RW);
        if (zR - bR < .001) return this.distance = -1, 1;
        this.distance = bR;
        for (let yR = 0; yR < 3; yR++) CW[yR] = wW[yR] + AW[yR] * bR;
        return bR / zR
      }
      placeGoal(WW, RW) {
        const MW = this.settings.offset;
        let wW = MW[0],
          CW = MW[2];
        if ("target" === this.settings.offsetSpace) {
          const WW = this.targets.heading(RW),
            zR = Math.cos(WW),
            AW = Math.sin(WW);
          wW = MW[0] * zR + MW[2] * AW, CW = -MW[0] * AW + MW[2] * zR
        }
        this.goal[0] = WW[0] + wW, this.goal[1] = WW[1] + MW[1], this.goal[2] = WW[2] + CW
      }
    }
    class VW {
      constructor(WW, RW, MW, wW) {
        var CW, zR;
        this.settings = WW, this.zM = RW, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = WW.keyframes.length > 0 ? new aR(WW.keyframes, null === (CW = WW.smooth) || void 0 === CW || CW, null !== (zR = WW.loop) && void 0 !== zR && zR) : null, this.base = (0, yR.e)(wW, (0, yR.l)()), this.resolveTarget = WW => MW.aimPoint(WW)
      }
      update(WW, RW, MW) {
        this.elapsedMs += WW;
        const wW = TW(this.settings, this.zM);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, wW, this.base) : this.base.fov = wW, (0, yR.i)(this.base.position, MW.position), MW.fov = this.base.fov, RW.apply(this.base, MW)
      }
      continueFrom(WW) {
        WW instanceof VW && (0, wW.s)(WW.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = WW.elapsedMs, (0, yR.e)(WW.base, this.base))
      }
      reset(WW) {
        pW(this.base, WW), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function mR(WW, RW) {
      return (0, wW.v)(WW, RW)
    }
    class xR {
      constructor(WW, RW, MW) {
        var wW;
        this.settings = WW, this.zM = RW, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const CW = null !== MW && MW.settings.mode === WW.mode,
          zR = CW ? MW.pose : RW.getDefaultPose();
        this.pose = (0, yR.e)(zR, (0, yR.l)()), this.lastGoodPose = (0, yR.e)(CW ? MW.lastGoodPose : zR, (0, yR.l)()), this.look = new YW(WW.playerLook), this.targets = null !== (wW = null === MW || void 0 === MW ? void 0 : MW.targets) && void 0 !== wW ? wW : new sW(RW);
        const AW = (0, yR.e)(zR, (0, yR.l)());
        CW && MW.look.unapply(AW, AW), this.mode = function(WW, RW, MW, wW) {
          switch (WW.mode) {
            case "fixed":
              return new UW(WW, RW, MW, wW);
            case "follow":
              return new EW(WW, RW, MW, wW);
            case "path":
              return new VW(WW, RW, MW, wW);
            case "frame":
              return new iR(WW, RW, MW, wW)
          }
        }(WW, RW, this.targets, AW), CW && (this.look.continueFrom(MW.look), this.mode.continueFrom(MW.mode))
      }
      update(WW, RW) {
        return this.look.update(WW, RW), this.mode.update(WW, this.look, this.pose), (0, yR.o)(this.pose) ? (0, yR.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, yR.e)(this.lastGoodPose, this.pose), this.mode.reset((0, yR.o)(this.lastGoodPose) ? this.lastGoodPose : this.zM.getDefaultPose())), this.pose
      }
    }

    function vR(WW) {
      return [0, 0, WW[2], WW[3]]
    }
    class KW {
      constructor(WW) {
        this.zM = WW, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new bR, this.shot = null, this.blend = null, this.mixed = (0, yR.l)(), this.output = (0, yR.l)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(WW) {
        const RW = (0, NW.c)(WW);
        if ((0, wW.s)(RW, this.pending ? this.pending.settings : this.settings)) return;
        const MW = mR(this.settings, RW);
        if (void 0 !== RW.transition && !MW) return this.pending = {
          settings: RW,
          shot: "default" === RW.mode ? null : new xR(RW, this.zM, null)
        }, void this.fade.fadeOut(RW.transition);
        const CW = null !== this.pending;
        this.pending = null, !CW && MW || this.fade.fadeIn(wW.k.minTransitionFadeMs), this.show(RW, !1)
      }
      show(WW, RW) {
        var MW, CW;
        if ((0, wW.s)(WW, this.settings)) return;
        const AW = !RW && mR(this.settings, WW);
        this.settings = WW;
        const bR = null !== this.blend && this.blend.elapsedMs > 0,
          NW = (0, yR.e)(this.hasOutput ? this.output : this.zM.getDefaultPose(), (0, yR.l)());
        if (this.shot = "default" === WW.mode ? null : new xR(WW, this.zM, RW ? null : this.shot), AW) return;
        const eW = RW || !this.shot && !this.hasOutput ? 0 : null !== (MW = WW.blendInMs) && void 0 !== MW ? MW : 0;
        if (eW <= 0) return void(this.blend = null);
        const BW = (0, zR.o)(null !== (CW = WW.blendEasing) && void 0 !== CW ? CW : "easeInOut");
        this.blend = {
          from: NW,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: eW,
          easing: bR ? vR(BW) : BW
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
      update(WW, RW) {
        const MW = Number.isFinite(WW) && WW > 0 ? WW : 0;
        if (this.fade.advance(MW) && null !== this.pending) {
          const {
            settings: WW
          } = this.pending;
          this.pending = null, this.show(WW, !0)
        }
        this.loadingPositions.length = 0;
        const wW = this.pending;
        if (null !== wW && void 0 !== wW && wW.shot) {
          const WW = "path" === wW.settings.mode ? 0 : MW;
          this.noteLoadingPosition(wW.shot.update(WW, yR.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const AW = this.shot ? this.shot.update(MW, RW) : this.zM.getDefaultPose();
        this.shot && this.noteLoadingPosition(AW.position);
        const bR = this.blend;
        if (!bR) return this.writeOutput(AW);
        bR.elapsedMs += MW;
        const NW = Math.min(1, bR.elapsedMs / bR.durationMs);
        if (bR.headingDelta = Number.isFinite(bR.headingDelta) ? (0, CW.z)(bR.headingDelta, AW.heading - bR.from.heading) : (0, CW.w)(bR.from.heading, AW.heading), (0, yR.r)(bR.from, AW, bR.headingDelta, (0, zR.k)(NW, bR.easing), this.mixed), NW >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else bR.fromScripted && this.noteLoadingPosition(bR.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(WW) {
        if (WW.every(Number.isFinite)) {
          const RW = this.loadingPositions;
          RW.push((0, yR.i)(WW, this.loadingSlots[RW.length]))
        }
      }
      writeOutput(WW) {
        const RW = this.output;
        (0, yR.o)(WW) ? (0, yR.e)(WW, RW) : this.hasOutput || (0, yR.e)(this.zM.getDefaultPose(), RW), RW.pitch = (0, CW.i)(RW.pitch);
        const MW = this.zM.getDefaultFov(),
          zR = Number.isFinite(MW) && MW > 0 && MW < 180,
          AW = zR ? Math.min(wW.k.minFov, MW) : wW.k.minFov,
          bR = zR ? Math.max(wW.k.maxFov, MW) : wW.k.maxFov;
        return RW.fov = Number.isFinite(RW.fov) ? Math.min(bR, Math.max(AW, RW.fov)) : bR, this.hasOutput = !0, RW
      }
    }
  },
  37143: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW,
      e: () => bR,
      i: () => AW,
      l: () => zR,
      o: () => NW,
      p: () => yR,
      r: () => eW
    });
    var wW = MW(37147);
    const CW = {
      iMW: 0,
      YRW: 0
    };

    function zR() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function AW(WW, RW) {
      return RW[0] = WW[0], RW[1] = WW[1], RW[2] = WW[2], RW
    }

    function bR(WW, RW) {
      return AW(WW.position, RW.position), RW.heading = WW.heading, RW.pitch = WW.pitch, RW.fov = WW.fov, RW
    }

    function yR(WW, RW) {
      return Array.isArray(WW) && WW.length === RW && WW.every(Number.isFinite)
    }

    function NW(WW) {
      return yR(WW.position, 3) && Number.isFinite(WW.heading) && Number.isFinite(WW.pitch) && Number.isFinite(WW.fov)
    }

    function eW(WW, RW, MW, CW, zR) {
      for (let wW = 0; wW < 3; wW++) zR.position[wW] = WW.position[wW] + (RW.position[wW] - WW.position[wW]) * CW;
      return zR.heading = (0, wW.v)(WW.heading + MW * CW), zR.pitch = WW.pitch + (RW.pitch - WW.pitch) * CW, zR.fov = WW.fov + (RW.fov - WW.fov) * CW, zR
    }
  },
  37172: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => fW,
      e: () => tR
    });
    var wW = MW(37166),
      CW = MW(37143);
    const zR = wW.i,
      AW = wW.n;

    function bR(WW, RW, MW, wW) {
      return Number.isFinite(WW) ? Math.min(MW, Math.max(RW, WW)) : wW
    }

    function yR(WW, RW, MW) {
      return void 0 !== WW && Number.isFinite(WW) ? Math.min(MW, Math.max(RW, WW)) : void 0
    }

    function NW(WW) {
      const RW = wW.k.maxCoordinate;
      return [Math.min(RW, Math.max(-RW, WW[0])), Math.min(RW, Math.max(-RW, WW[1])), Math.min(RW, Math.max(-RW, WW[2]))]
    }

    function eW(WW) {
      return "string" === typeof WW ? WW : (0, CW.p)(WW, 3) ? NW(WW) : void 0
    }
    const BW = new RegExp(wW.o);

    function tR(WW) {
      return "string" === typeof WW && BW.test(WW)
    }

    function TW(WW) {
      const RW = [];
      if (!Array.isArray(WW)) return RW;
      for (const MW of WW.slice(0, wW.k.maxFrameTargets)) {
        const WW = eW(MW);
        void 0 === WW || "string" === typeof WW && !tR(WW) || RW.push(WW)
      }
      return RW
    }

    function gR(WW) {
      if (!(0, CW.p)(WW, 3)) return;
      const RW = Math.max(Math.abs(WW[0]), Math.abs(WW[1]), Math.abs(WW[2])),
        MW = Math.hypot(WW[0] / RW, WW[1] / RW, WW[2] / RW);
      return 0 === RW || RW * MW < wW.k.minDirectionLength ? void 0 : [WW[0] / RW / MW, WW[1] / RW / MW, WW[2] / RW / MW]
    }

    function iR(WW) {
      if (void 0 !== WW) return "string" === typeof WW ? zR.includes(WW) ? WW : void 0 : (0, CW.p)(WW, 4) ? [bR(WW[0], 0, 1, 0), bR(WW[1], wW.k.minEasingY, wW.k.maxEasingY, 0), bR(WW[2], 0, 1, 1), bR(WW[3], wW.k.minEasingY, wW.k.maxEasingY, 1)] : "linear"
    }

    function YW(WW) {
      if (WW) return {
        maxYaw: bR(WW.maxYaw, 0, wW.k.maxPlayerLook, 0),
        maxPitch: bR(WW.maxPitch, 0, wW.k.maxPlayerLook, 0),
        returnMs: yR(WW.returnMs, 0, wW.k.maxReturnMs)
      }
    }
    const JW = new RegExp(wW.d);

    function PW(WW) {
      var RW;
      if ("object" !== typeof WW || null === WW) return;
      const MW = wW.k.maxTransitionMs,
        CW = wW.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof WW.colour && JW.test(WW.colour) ? WW.colour : wW.g,
        outMs: bR(WW.outMs, CW, MW, CW),
        holdMs: bR(null !== (RW = WW.holdMs) && void 0 !== RW ? RW : 0, 0, MW, 0),
        inMs: bR(WW.inMs, CW, MW, CW)
      }
    }

    function IW(WW) {
      return !0 === WW || void 0
    }

    function oW(WW) {
      if ("object" !== typeof WW || null === WW) return !1;
      const RW = WW.lookAt;
      return Number.isFinite(WW.timeMs) && (0, CW.p)(WW.position, 3) && (void 0 === RW || "string" === typeof RW || (0, CW.p)(RW, 3))
    }

    function lW(WW) {
      return {
        ...WW,
        timeMs: bR(WW.timeMs, 0, wW.k.maxPathMs, 0),
        position: NW(WW.position),
        lookAt: eW(WW.lookAt),
        lookDirection: gR(WW.lookDirection),
        fov: yR(WW.fov, wW.k.minFov, wW.k.maxFov),
        easing: iR(WW.easing)
      }
    }

    function FW(WW) {
      const RW = [];
      if (!Array.isArray(WW)) return RW;
      for (const MW of WW.slice(0, wW.k.maxKeyframes)) {
        if (!oW(MW)) continue;
        const WW = lW(MW);
        (0 === RW.length || WW.timeMs > RW[RW.length - 1].timeMs) && RW.push(WW)
      }
      return RW
    }

    function fW(WW) {
      if ("object" !== typeof WW || null === WW) return {
        mode: "default"
      };
      const RW = {
          blendInMs: yR(WW.blendInMs, 0, wW.k.maxBlendInMs),
          blendEasing: iR(WW.blendEasing),
          transition: PW(WW.transition),
          letterbox: IW(WW.letterbox),
          hideHud: IW(WW.hideHud)
        },
        MW = {
          mode: "default",
          ...RW
        };
      if ("default" === WW.mode || "fixed" === WW.mode && !(0, CW.p)(WW.position, 3)) return MW;
      const zR = {
        ...RW,
        fov: yR(WW.fov, wW.k.minFov, wW.k.maxFov),
        playerFacing: (BW = WW.playerFacing, AW.includes(BW) ? BW : void 0),
        playerLook: YW(WW.playerLook)
      };
      var BW, tR;
      switch (WW.mode) {
        case "fixed":
          return {
            ...WW, ...zR, position: NW(WW.position), lookAt: eW(WW.lookAt), lookDirection: gR(WW.lookDirection)
          };
        case "follow":
          return {
            ...WW, ...zR, target: "string" === typeof WW.target ? WW.target : void 0, lookAt: eW(WW.lookAt), offset: (tR = WW.offset, Array.isArray(tR) ? [bR(tR[0], -wW.k.maxOffset, wW.k.maxOffset, 0), bR(tR[1], -wW.k.maxOffset, wW.k.maxOffset, 0), bR(tR[2], -wW.k.maxOffset, wW.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: gR(WW.lookDirection), smoothMs: yR(WW.smoothMs, 0, wW.k.maxSmoothMs)
          };
        case "path":
          return {
            ...WW, ...zR, keyframes: FW(WW.keyframes)
          };
        case "frame":
          return {
            ...WW, ...zR, targets: TW(WW.targets), viewHeading: yR(WW.viewHeading, -wW.k.maxFrameHeading, wW.k.maxFrameHeading), viewElevation: yR(WW.viewElevation, 0, wW.k.maxFrameElevation), padding: yR(WW.padding, 0, wW.k.maxFrameDistance), closestDistance: yR(WW.closestDistance, 0, wW.k.maxFrameDistance), furthestDistance: yR(WW.furthestDistance, 0, wW.k.maxFrameDistance), smoothMs: yR(WW.smoothMs, 0, wW.k.maxSmoothMs)
          };
        default:
          return MW
      }
    }
  },
  37111: (WW, RW, MW) => {
    function wW(WW, RW) {
      return RW.set(WW), RW
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  37109: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW
    });
    var wW = MW(34864),
      CW = MW.n(wW);
    const zR = [1, 1, 1];

    function AW(WW) {
      if (!WW) return [...zR];
      try {
        const [RW, MW, wW] = CW()(WW).rgb().array();
        return [RW / 255, MW / 255, wW / 255]
      } catch (RW) {
        return console.warn(`Invalid groundArrowPath colour "${WW}":`, RW), [...zR]
      }
    }
  },
  32640: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      f: () => bR,
      i: () => AW,
      l: () => CW,
      n: () => wW
    });
    const wW = {
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
      CW = "/textures/dayNight/sun.png",
      zR = "/textures/dayNight/moon.png",
      AW = "/textures/dayNight/stars",
      bR = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  37166: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => eW,
      g: () => BW,
      i: () => wW,
      k: () => yR,
      n: () => CW,
      o: () => NW,
      s: () => bR,
      v: () => AW
    });
    const wW = ["linear", "easeIn", "easeOut", "easeInOut"],
      CW = ["movement", "camera", "cursor"],
      zR = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function AW(WW, RW) {
      return bR(WW, RW, zR)
    }

    function bR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (WW === RW || Number.isNaN(WW) && Number.isNaN(RW)) return !0;
      if ("object" !== typeof WW || "object" !== typeof RW || null === WW || null === RW || Array.isArray(WW) !== Array.isArray(RW)) return !1;
      const wW = WW,
        CW = RW;
      for (const zR of new Set([...Object.keys(wW), ...Object.keys(CW)]))
        if (!MW.includes(zR) && !bR(wW[zR], CW[zR])) return !1;
      return !0
    }
    const yR = {
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
      NW = "^-[1-9][0-9]*$",
      eW = "^#[0-9a-fA-F]{6}$",
      BW = "#000000"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);