export const id = 179;
export const ids = [179];
export const modules = {
  37047: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      f: () => AF
    });
    const CF = new Map;

    function AF(FF, WF) {
      CF.set(FF, WF)
    }

    function uF(FF) {
      return FF ? CF.get(FF) : void 0
    }
  },
  37733: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF
    });
    var CF = SF(36658);

    function AF(FF, WF, SF) {
      var AF, uF, hF, bW, dF, PF, RF;
      const iW = (0, CF.e)(FF, WF, SF[0], SF[1], SF[2]),
        eF = iW ? null !== (AF = iW.textCell) && void 0 !== AF ? AF : iW.rect.anchor : SF,
        EF = WF(eF[0], eF[1], eF[2]);
      return {
        pos: [SF[0], SF[1], SF[2]],
        noticeboardSpan: iW && {
          width: iW.rect.width,
          height: iW.rect.height
        },
        text: null !== (uF = null === EF || void 0 === EF || null === (hF = EF.persisted) || void 0 === hF || null === (bW = hF.shared) || void 0 === bW ? void 0 : bW.text) && void 0 !== uF ? uF : "",
        textSize: null !== (dF = null === EF || void 0 === EF || null === (PF = EF.persisted) || void 0 === PF || null === (RF = PF.shared) || void 0 === RF ? void 0 : RF.textSize) && void 0 !== dF ? dF : null
      }
    }
  },
  36931: (FF, WF, SF) => {
    function CF(FF) {
      switch (FF.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    SF.d(WF, {
      d: () => AF,
      e: () => uF,
      i: () => CF
    });
    const AF = 4,
      uF = 3
  },
  37496: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      g: () => uF
    });
    var CF = SF(271);
    const AF = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class uF {
      constructor(FF) {
        this.importGame = FF, this.loads = new Map, this.loaded = new Map
      }
      load(FF) {
        const WF = (0, CF.Yb)(FF);
        if (!AF.has(WF)) return Promise.resolve(void 0);
        let SF = this.loads.get(WF);
        return SF || (SF = this.importGame(WF).then((FF => {
          const SF = FF.default;
          if ("function" !== typeof SF) throw new Error(`${WF}'s client code has no default-exported factory`);
          return this.loaded.set(WF, SF), SF
        })).catch((FF => {
          throw this.loads.delete(WF), FF
        })), this.loads.set(WF, SF)), SF
      }
      loadedFactory(FF) {
        const WF = (0, CF.Yb)(FF);
        if (!AF.has(WF)) return;
        const SF = this.loaded.get(WF);
        if (!SF) throw new Error(`${WF}'s client code started before it loaded`);
        return SF
      }
    }
  },
  37739: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(8331),
      AF = SF(35203),
      uF = SF(2477);

    function hF(FF) {
      if (FF === CF.e) return 0;
      const WF = (0, uF.b)(FF);
      if (void 0 !== WF && WF <= AF.MAX_BLOCK_ID) return WF;
      const SF = (0, uF.b)(FF.split("|")[0]);
      if (void 0 !== SF && SF <= AF.MAX_BLOCK_ID && (0, AF.rootMetaDescOf)(SF) === FF) return SF;
      throw new Error(`Invalid block name. You sent ${FF}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  37543: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    var CF = SF(11);
    class AF {
      constructor(FF) {
        this.screen = FF, this.hidesHud = !1
      }
      show(FF, WF) {
        this.screen.setFade(FF.colour, FF.alpha), this.screen.setLetterbox(!0 === WF.letterbox, FF.alpha < 1), this.setHudHidden(!0 === WF.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(FF) {
        this.hidesHud !== FF && (this.hidesHud = FF, CF.b.set({
          isUiHiddenByCamera: FF
        }))
      }
    }
  },
  37511: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF,
      d: () => eF,
      e: () => iW,
      f: () => hF,
      g: () => QF,
      k: () => dF,
      n: () => rW,
      r: () => PF,
      t: () => bW,
      w: () => RF
    });
    const CF = Math.PI / 2 - .001,
      AF = 2 * Math.PI,
      uF = 1e-9;

    function hF(FF, WF) {
      WF.heading = FF.heading, WF.pitch = FF.pitch
    }

    function bW(FF, WF) {
      const SF = WF - FF;
      return SF - AF * Math.floor((SF + Math.PI) / AF)
    }

    function dF(FF, WF, SF) {
      return FF + bW(FF, WF) * SF
    }

    function PF(FF) {
      if (!Number.isFinite(FF)) return FF;
      const WF = FF - AF * Math.floor(FF / AF);
      return WF < AF ? WF : 0
    }

    function RF(FF, WF) {
      return FF + bW(FF, WF)
    }

    function iW(FF) {
      return Math.max(-CF, Math.min(CF, FF))
    }

    function eF(FF, WF, SF) {
      const CF = Math.cos(WF);
      return SF[0] = CF * Math.sin(FF), SF[1] = -Math.sin(WF), SF[2] = CF * Math.cos(FF), SF
    }

    function EF(FF, WF, SF, CF) {
      const AF = Math.sqrt(FF * FF + SF * SF);
      return AF < uF && Math.abs(WF) < uF || (AF >= uF && (CF.heading = Math.atan2(FF, SF)), CF.pitch = iW(Math.atan2(-WF, AF) + 0)), CF
    }

    function QF(FF, WF) {
      return EF(FF[0], FF[1], FF[2], WF)
    }

    function rW(FF, WF, SF) {
      return EF(WF[0] - FF[0], WF[1] - FF[1], WF[2] - FF[2], SF)
    }
  },
  37535: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF,
      h: () => AF
    });
    var CF = SF(37511);

    function AF(FF) {
      var WF;
      const SF = "default" === FF.mode ? "movement" : null !== (WF = FF.playerFacing) && void 0 !== WF ? WF : "movement";
      return "cursor" === SF ? {
        facing: SF,
        mouseTurns: null
      } : {
        facing: SF,
        mouseTurns: "default" !== FF.mode && void 0 !== FF.playerLook ? "look" : "view"
      }
    }

    function uF(FF, WF, SF, AF, uF, hF) {
      return hF.TWF = 0, hF.aSF = 0, hF.pointedAt = void 0, void 0 !== AF ? uF ? (hF.pointedAt = AF, FF) : (0, CF.r)(AF.heading) : uF ? (hF.TWF = WF, hF.aSF = SF, FF) : (0, CF.r)(FF + WF)
    }
  },
  37524: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => HF
    });
    var CF = SF(37526),
      AF = SF(37511),
      uF = SF(35463);

    function hF(FF, WF, SF, CF) {
      if (!(CF > 0)) return WF;
      const AF = WF > FF ? Math.min(WF, FF + SF / CF) : Math.max(WF, FF - SF / CF);
      return Math.abs(WF - AF) < 1e-9 ? WF : AF
    }
    class bW {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: CF.g,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(FF) {
        !this.isGoingOut() && this.sinceTurnMs < CF.j.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: FF
        } : (this.waiting = null, this.startOut(FF))
      }
      fadeIn(FF) {
        this.isGoingOut() ? this.sinceTurnMs < CF.j.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: FF
        } : (this.waiting = null, this.startIn(FF)) : this.waiting = null
      }
      advance(FF) {
        const WF = this.waiting;
        if (null === WF) return this.step(FF);
        const SF = CF.j.minFadeTurnMs - this.sinceTurnMs;
        if (SF > FF) return this.step(FF);
        const AF = this.step(SF);
        return this.waiting = null, "out" === WF.turn ? this.startOut(WF.transition) : this.startIn(WF.minMs), this.step(FF - SF) || AF
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(FF) {
        ("in" === this.phase || null === this.phase && this.clearMs < CF.j.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = FF.colour), this.outMs = FF.outMs, this.holdMs = FF.holdMs, this.inMs = FF.inMs
      }
      startIn(FF) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(FF, this.inMs)
      }
      step(FF) {
        const WF = this.screen;
        this.sinceTurnMs += FF, null === this.phase && (this.clearMs += FF);
        let SF = !1,
          AF = FF;
        if ("out" === this.phase) {
          const CF = (1 - WF.alpha) * this.outMs;
          if (WF.alpha = hF(WF.alpha, 1, FF, this.outMs), WF.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, AF = Math.max(0, FF - CF), SF = !0
        }
        let uF = FF;
        if ("hold" === this.phase) {
          this.heldMs += AF;
          const FF = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - CF.j.minFadeTurnMs);
          if (FF < 0 || SF) return SF;
          this.phase = "in", this.sinceTurnMs = FF, uF = FF
        }
        return "in" === this.phase && (WF.alpha = hF(WF.alpha, 0, uF, this.inMs), WF.alpha <= 0 && (this.phase = null, this.clearMs = 0)), SF
      }
    }
    var dF = SF(37506),
      PF = SF(37531),
      RF = SF(1079),
      iW = SF(35090);

    function eF(FF, WF) {
      for (let SF = 0; SF < WF.length; SF++) WF[SF] = FF[SF]
    }

    function EF(FF, WF) {
      var SF;
      return null !== (SF = FF.fov) && void 0 !== SF ? SF : WF.getDefaultFov()
    }

    function QF(FF, WF, SF, CF, AF) {
      const uF = 2 / CF,
        hF = Math.exp(-uF * AF);
      for (let bW = 0; bW < FF.length; bW++) {
        const CF = FF[bW] - SF[bW],
          dF = (WF[bW] + uF * CF) * AF;
        FF[bW] = SF[bW] + (CF + dF) * hF, WF[bW] = (WF[bW] - uF * dF) * hF
      }
    }
    class rW {
      constructor(FF, WF, SF, CF) {
        var uF, hF, bW, dF, PF;
        this.settings = FF, this.uW = WF, this.targets = SF, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Th = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, AF.r)((0, RF.l)(null !== (uF = FF.viewHeading) && void 0 !== uF ? uF : 0)),
          pitch: (0, AF.e)((0, RF.l)(null !== (hF = FF.viewElevation) && void 0 !== hF ? hF : 45))
        }, this.closestDistance = null !== (bW = FF.closestDistance) && void 0 !== bW ? bW : Math.min(6, null !== (dF = FF.furthestDistance) && void 0 !== dF ? dF : 1 / 0), this.furthestDistance = null !== (PF = FF.furthestDistance) && void 0 !== PF ? PF : Math.max(64, this.closestDistance);
        const iW = (0, AF.d)(this.base.heading, this.base.pitch, this.forward),
          eF = CF.position,
          EF = this.closestDistance;
        this.goal = [eF[0] + iW[0] * EF, eF[1] + iW[1] * EF, eF[2] + iW[2] * EF, EF, this.base.heading, this.base.pitch]
      }
      update(FF, WF, SF) {
        var CF, uF;
        this.placeGoal(null !== (CF = this.settings.fov) && void 0 !== CF ? CF : this.uW.getBaseFov()), this.goal[4] = (0, AF.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const hF = null !== (uF = this.settings.smoothMs) && void 0 !== uF ? uF : 400;
        !this.started || hF < 1 ? (eF(this.goal, this.smoothed), this.Th.fill(0), this.started = !0) : QF(this.smoothed, this.Th, this.goal, hF, FF), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, AF.e)(this.smoothed[5]), WF.apply(this.angles, SF);
        const bW = (0, AF.d)(SF.heading, SF.pitch, this.forward);
        for (let AF = 0; AF < 3; AF++) SF.position[AF] = this.smoothed[AF] - bW[AF] * this.smoothed[3];
        SF.fov = EF(this.settings, this.uW)
      }
      continueFrom(FF) {
        FF instanceof rW && (eF(FF.goal, this.goal), eF(FF.smoothed, this.smoothed), eF(FF.Th, this.Th), this.framedTargets = FF.framedTargets, this.started = FF.started)
      }
      reset() {
        this.Th.fill(0), this.started = !1
      }
      placeGoal(FF) {
        var WF;
        let SF = 0;
        for (const RF of this.settings.targets) {
          const FF = this.targets.currentAimPoint(RF);
          FF && (0, dF.h)(FF, this.pointAt(SF++))
        }
        if (SF > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const FF = this.targets.aimPoint(this.uW.localPlayerId);
          FF && (0, dF.h)(FF, this.pointAt(SF++))
        }
        const CF = this.goal;
        if (0 === SF) return void(CF[3] = this.withinDistances(CF[3]));
        for (let dF = 0; dF < 3; dF++) {
          let FF = 1 / 0,
            WF = -1 / 0;
          for (let CF = 0; CF < SF; CF++) FF = Math.min(FF, this.points[CF][dF]), WF = Math.max(WF, this.points[CF][dF]);
          CF[dF] = (FF + WF) / 2
        }
        let AF = 0;
        for (let dF = 0; dF < SF; dF++) {
          const FF = this.points[dF];
          AF = Math.max(AF, Math.hypot(FF[0] - CF[0], FF[1] - CF[1], FF[2] - CF[2]))
        }
        const uF = Math.tan((0, RF.l)(FF) / 2),
          hF = Math.atan(uF * (!0 === this.settings.letterbox ? iW.g : 1)),
          bW = Math.atan(uF * this.uW.getAspectRatio()),
          PF = (AF + (null !== (WF = this.settings.padding) && void 0 !== WF ? WF : 2)) / Math.sin(Math.min(hF, bW));
        CF[3] = this.withinDistances(PF)
      }
      withinDistances(FF) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, FF))
      }
      pointAt(FF) {
        return FF === this.points.length && this.points.push([0, 0, 0]), this.points[FF]
      }
    }
    class gW {
      constructor(FF) {
        this.limits = FF, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(FF) {
        this.limits && (this.yawOffset = FF.yawOffset, this.pitchOffset = FF.pitchOffset, this.idleMs = FF.idleMs)
      }
      update(FF, WF) {
        const SF = this.limits;
        if (!SF) return;
        const CF = Number.isFinite(WF.TWF) ? WF.TWF : 0,
          AF = Number.isFinite(WF.aSF) ? WF.aSF : 0;
        if (WF.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: WF.pointedAt.heading,
          pitch: WF.pointedAt.pitch
        };
        else if (0 !== CF || 0 !== AF) this.idleMs = 0, this.yawOffset += CF, this.pitchOffset += AF;
        else {
          const WF = Math.max(0, this.idleMs + FF - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += FF, void 0 !== SF.returnMs && WF > 0) {
            const FF = SF.returnMs > 0 ? Math.exp(-3 * WF / SF.returnMs) : 0;
            this.yawOffset *= FF, this.pitchOffset *= FF
          }
        }
        this.clampOffsets(SF)
      }
      clampOffsets(FF) {
        if (FF.maxYaw >= 180) this.yawOffset = (0, AF.t)(0, this.yawOffset);
        else {
          const WF = (0, RF.l)(FF.maxYaw);
          this.yawOffset = Math.max(-WF, Math.min(WF, this.yawOffset))
        }
        const WF = (0, RF.l)(FF.maxPitch);
        this.pitchOffset = Math.max(-WF, Math.min(WF, this.pitchOffset))
      }
      apply(FF, WF) {
        this.pointedAt && this.limits && (this.yawOffset = (0, AF.t)(FF.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - FF.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const SF = (0, AF.e)(FF.pitch + this.pitchOffset);
        this.pitchOffset = SF - FF.pitch, WF.heading = (0, AF.r)(FF.heading + this.yawOffset), WF.pitch = SF
      }
      unapply(FF, WF) {
        WF.heading = (0, AF.r)(FF.heading - this.yawOffset), WF.pitch = (0, AF.e)(FF.pitch - this.pitchOffset)
      }
    }
    const tW = 1e-6;

    function TF(FF) {
      return Math.sqrt(FF[0] * FF[0] + FF[1] * FF[1] + FF[2] * FF[2])
    }

    function aW(FF, WF, SF, CF, AF) {
      const uF = AF * AF,
        hF = uF * AF;
      return (2 * hF - 3 * uF + 1) * FF + (hF - 2 * uF + AF) * WF + (-2 * hF + 3 * uF) * SF + (hF - uF) * CF
    }

    function kW(FF, WF, SF, CF, AF) {
      const uF = AF * AF;
      return (6 * uF - 6 * AF) * FF + (3 * uF - 4 * AF + 1) * WF + (-6 * uF + 6 * AF) * SF + (3 * uF - 2 * AF) * CF
    }

    function qW(FF, WF) {
      const SF = WF[0] - FF[0],
        CF = WF[1] - FF[1],
        AF = WF[2] - FF[2];
      return Math.sqrt(SF * SF + CF * CF + AF * AF)
    }

    function VF(FF, WF, SF, CF, AF, uF) {
      for (let hF = 0; hF < 3; hF++) uF[hF] = AF ? FF[hF] * CF : SF[hF] - WF[hF];
      return AF && function(FF, WF) {
        const SF = TF(FF);
        if (SF > WF) {
          const CF = WF / SF;
          FF[0] *= CF, FF[1] *= CF, FF[2] *= CF
        }
      }(uF, 3 * qW(WF, SF)), uF
    }

    function NF(FF, WF, SF, CF) {
      for (let AF = 0; AF < 3; AF++) CF[AF] = 6 * (WF[AF] - FF[AF]) - 2 * SF[AF];
      if (TF(CF) < tW)
        for (let AF = 0; AF < 3; AF++) CF[AF] = WF[AF] - FF[AF];
      return CF
    }

    function DF(FF, WF) {
      return [2 * WF[0] - FF[0], 2 * WF[1] - FF[1], 2 * WF[2] - FF[2]]
    }

    function LF(FF, WF, SF, CF, AF, uF, hF) {
      if (!uF && !hF) return 0;
      const bW = uF ? FF : 2 * WF - SF,
        dF = hF ? SF : 2 * WF - FF,
        PF = uF ? CF : AF,
        RF = hF ? AF : CF,
        iW = (WF - bW) / PF,
        eF = (dF - WF) / RF;
      if (iW * eF <= 0) return 0;
      const EF = (dF - bW) / (PF + RF),
        QF = 3 * Math.min(Math.abs(iW), Math.abs(eF));
      return Math.max(-QF, Math.min(QF, EF))
    }

    function mW(FF, WF, SF, CF, AF, uF, hF) {
      const {
        u: bW,
        segmentMs: dF
      } = FF;
      if (!FF.curved) return SF + (CF - SF) * bW;
      return aW(SF, LF(WF, SF, CF, FF.beforeMs, dF, uF, !0) * dF, CF, LF(SF, CF, AF, dF, FF.afterMs, !0, hF) * dF, bW)
    }

    function OF(FF) {
      return Math.abs(FF.pitch) >= AF.b
    }
    class xW {
      constructor(FF, WF, SF, CF, AF) {
        this.nodes = FF, this.prevNodes = SF, this.nextNodes = CF, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = FF.map(((FF, SF) => this.nodeTangent(WF, AF, SF)))
      }
      sample(FF, WF, SF) {
        const {
          index: CF,
          toIndex: uF,
          segmentMs: hF,
          curved: bW
        } = FF, dF = this.fromAngles, PF = this.toAngles, RF = this.nodeAngles(CF, SF.position, WF, dF), iW = this.nodeAngles(uF, SF.position, WF, PF);
        if (hF > 0 && "aim" !== RF && "aim" !== iW && this.liveTangent(FF, dF)) return SF.heading = (0, AF.r)(dF.heading), void(SF.pitch = dF.pitch);
        if ("none" === RF && "none" === iW) return;
        !bW && hF > 0 && ("tangent" === RF && this.liveTangent(FF, dF), "tangent" === iW && this.liveTangent(FF, PF)), "none" === RF ? (0, AF.f)(PF, dF) : "none" === iW && (0, AF.f)(dF, PF);
        const eF = bW && FF.beforeIndex >= 0 && "none" !== this.nodeAngles(FF.beforeIndex, SF.position, WF, this.beforeAngles),
          EF = bW && FF.afterIndex >= 0 && "none" !== this.nodeAngles(FF.afterIndex, SF.position, WF, this.afterAngles),
          QF = (0, AF.w)(dF.heading, PF.heading),
          rW = mW(FF, eF ? (0, AF.w)(dF.heading, this.beforeAngles.heading) : 0, dF.heading, QF, EF ? (0, AF.w)(QF, this.afterAngles.heading) : 0, eF, EF);
        SF.heading = (0, AF.r)(rW), SF.pitch = (0, AF.e)(mW(FF, this.beforeAngles.pitch, dF.pitch, PF.pitch, this.afterAngles.pitch, eF, EF))
      }
      nodeAngles(FF, WF, SF, CF) {
        const AF = this.rawNodeAngles(FF, WF, SF, CF);
        return "none" !== AF && OF(CF) && !this.borrowHeading(this.prevNodes[FF], WF, SF, CF) && this.borrowHeading(this.nextNodes[FF], WF, SF, CF), AF
      }
      borrowHeading(FF, WF, SF, CF) {
        const AF = this.borrowedAngles;
        return !(FF < 0 || "none" === this.rawNodeAngles(FF, WF, SF, AF) || OF(AF)) && (CF.heading = AF.heading, !0)
      }
      rawNodeAngles(FF, WF, SF, CF) {
        const uF = this.nodes[FF].keyframe;
        if (uF.lookDirection) return (0, AF.g)(uF.lookDirection, CF), "aim";
        if (void 0 !== uF.lookAt) {
          const FF = SF(uF.lookAt);
          if (FF) return (0, AF.n)(WF, FF, CF), "aim"
        }
        const hF = this.tangents[FF];
        return hF ? ((0, AF.f)(hF, CF), "tangent") : "none"
      }
      liveTangent(FF, WF) {
        const SF = this.nodes[FF.index].position,
          CF = this.nodes[FF.toIndex].position,
          uF = this.derivative;
        for (let AF = 0; AF < 3; AF++) uF[AF] = kW(SF[AF], FF.fromTangent[AF], CF[AF], FF.toTangent[AF], FF.u);
        return TF(uF) > 1e-9 ? ((0, AF.g)(uF, WF), !0) : !(qW(SF, CF) < tW) && ((0, AF.g)(NF(SF, CF, FF.u < .5 ? FF.toTangent : FF.fromTangent, uF), WF), !0)
      }
      nodeTangent(FF, WF, SF) {
        var CF;
        const uF = FF[SF];
        if (TF(uF) > 1e-9) return (0, AF.g)(uF, {
          heading: 0,
          pitch: 0
        });
        const hF = null !== (CF = this.restDirectionTo(SF, SF + 1, FF, WF)) && void 0 !== CF ? CF : this.restDirectionTo(SF, SF - 1, FF, WF);
        return hF ? (0, AF.g)(hF, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(FF, WF, SF, CF) {
        const AF = this.nodes[FF],
          uF = this.nodes[WF];
        if (!uF || qW(AF.position, uF.position) < tW) return null;
        const [hF, bW] = WF > FF ? [AF, uF] : [uF, AF], dF = VF(SF[WF], hF.position, bW.position, bW.timeMs - hF.timeMs, CF, [0, 0, 0]);
        return NF(hF.position, bW.position, dF, [0, 0, 0])
      }
    }

    function ZF(FF, WF) {
      const SF = FF.lookDirection || WF.lookDirection ? function(FF, WF) {
        if (!FF || !WF) return FF === WF;
        const SF = TF(FF),
          CF = TF(WF);
        return Math.hypot(FF[0] / SF - WF[0] / CF, FF[1] / SF - WF[1] / CF, FF[2] / SF - WF[2] / CF) < tW
      }(FF.lookDirection, WF.lookDirection) : (CF = FF.lookAt, AF = WF.lookAt, "object" !== typeof CF || "object" !== typeof AF ? CF === AF : qW(CF, AF) < tW);
      var CF, AF;
      return qW(FF.position, WF.position) < tW && FF.fov === WF.fov && SF
    }
    class oF {
      constructor(FF, WF, SF) {
        if (this.smooth = WF, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === FF.length) throw new Error("A camera path needs at least one keyframe");
        for (let uF = 1; uF < FF.length; uF++)
          if (!(FF[uF].timeMs > FF[uF - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = FF.map((FF => {
          var WF;
          return {
            timeMs: FF.timeMs,
            position: [...FF.position],
            keyframe: FF,
            easing: (0, uF.r)(null !== (WF = FF.easing) && void 0 !== WF ? WF : "linear")
          }
        }));
        const CF = this.nodes[0],
          AF = this.nodes[this.nodes.length - 1],
          hF = SF && this.nodes.length > 1;
        hF && !ZF(CF.keyframe, AF.keyframe) && this.nodes.push({
          ...CF,
          timeMs: AF.timeMs + (AF.timeMs - CF.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = hF ? this.nodes[this.nodes.length - 1].timeMs - CF.timeMs : 0, this.prevNodes = this.nodes.map(((FF, WF) => this.neighbour(WF, -1))), this.nextNodes = this.nodes.map(((FF, WF) => this.neighbour(WF, 1))), this.prevGaps = this.prevNodes.map(((FF, WF) => FF >= 0 ? this.gapMs(WF, -1) : 0)), this.nextGaps = this.nextNodes.map(((FF, WF) => FF >= 0 ? this.gapMs(WF, 1) : 0)), this.velocities = this.nodes.map(((FF, WF) => {
          const SF = this.prevNodes[WF],
            CF = this.nextNodes[WF];
          return function(FF, WF, SF, CF, AF, uF) {
            if (uF[0] = 0, uF[1] = 0, uF[2] = 0, !FF && !SF) return uF;
            const hF = null !== FF && void 0 !== FF ? FF : DF(null !== SF && void 0 !== SF ? SF : WF, WF),
              bW = null !== SF && void 0 !== SF ? SF : DF(null !== FF && void 0 !== FF ? FF : WF, WF),
              dF = FF ? CF : AF,
              PF = SF ? AF : CF,
              RF = qW(hF, WF),
              iW = qW(WF, bW);
            if (RF < tW || iW < tW) return uF;
            const eF = Math.sqrt(RF),
              EF = Math.sqrt(iW),
              QF = (eF + EF) / (dF + PF);
            for (let rW = 0; rW < 3; rW++) {
              const FF = (WF[rW] - hF[rW]) / eF - (bW[rW] - hF[rW]) / (eF + EF) + (bW[rW] - WF[rW]) / EF;
              uF[rW] = FF * QF
            }
            return uF
          }(SF >= 0 ? this.nodes[SF].position : null, FF.position, CF >= 0 ? this.nodes[CF].position : null, this.prevGaps[WF], this.nextGaps[WF], [0, 0, 0])
        })), this.aim = new xW(this.nodes, this.velocities, this.prevNodes, this.nextNodes, WF)
      }
      sample(FF, WF, SF, CF) {
        const AF = this.findSegment(this.pathTime(FF));
        this.samplePosition(AF, CF.position), this.aim.sample(AF, WF, CF);
        const {
          beforeIndex: uF,
          afterIndex: hF
        } = AF;
        CF.fov = mW(AF, uF >= 0 ? this.fovAt(uF, SF) : 0, this.fovAt(AF.index, SF), this.fovAt(AF.toIndex, SF), hF >= 0 ? this.fovAt(hF, SF) : 0, uF >= 0, hF >= 0)
      }
      pathTime(FF) {
        const WF = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || FF <= WF) return FF;
        const SF = FF - WF;
        return WF + SF - this.loopMs * Math.floor(SF / this.loopMs)
      }
      findSegment(FF) {
        const WF = this.nodes,
          SF = this.segment;
        let CF = SF.index;
        for (FF < WF[CF].timeMs && (CF = 0); CF < WF.length - 2 && WF[CF + 1].timeMs <= FF;) CF++;
        const AF = Math.min(CF + 1, WF.length - 1),
          hF = WF[AF].timeMs - WF[CF].timeMs;
        return SF.index = CF, SF.toIndex = AF, SF.segmentMs = hF, SF.u = hF > 0 ? (0, uF.n)((FF - WF[CF].timeMs) / hF, WF[CF].easing) : 1, SF.curved = this.smooth && hF > 0, SF.beforeIndex = this.prevNodes[CF], SF.afterIndex = this.nextNodes[AF], SF.beforeMs = this.prevGaps[CF], SF.afterMs = this.nextGaps[AF], SF
      }
      samplePosition(FF, WF) {
        const {
          fromTangent: SF,
          toTangent: CF,
          curved: AF
        } = FF, uF = this.nodes[FF.index].position, hF = this.nodes[FF.toIndex].position;
        VF(this.velocities[FF.index], uF, hF, FF.segmentMs, AF, SF), VF(this.velocities[FF.toIndex], uF, hF, FF.segmentMs, AF, CF);
        const bW = FF.u;
        for (let dF = 0; dF < 3; dF++) WF[dF] = AF ? aW(uF[dF], SF[dF], hF[dF], CF[dF], bW) : uF[dF] + (hF[dF] - uF[dF]) * bW
      }
      fovAt(FF, WF) {
        var SF;
        return null !== (SF = this.nodes[FF].keyframe.fov) && void 0 !== SF ? SF : WF
      }
      neighbour(FF, WF) {
        const SF = this.nodes.length - 1,
          CF = FF + WF;
        return CF >= 0 && CF <= SF ? CF : this.loopMs <= 0 || SF < 2 ? -1 : CF < 0 ? SF - 1 : 1
      }
      gapMs(FF, WF) {
        const SF = this.nodes.length - 1;
        if (1 === WF) {
          const WF = FF === SF ? 0 : FF;
          return this.nodes[WF + 1].timeMs - this.nodes[WF].timeMs
        }
        const CF = 0 === FF ? SF : FF;
        return this.nodes[CF].timeMs - this.nodes[CF - 1].timeMs
      }
    }
    class YF {
      constructor(FF) {
        this.uW = FF, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = WF => FF.getEntityPosition(WF), this.readAimPoint = WF => FF.getEntityAimPoint(WF)
      }
      aimPoint(FF) {
        return "string" !== typeof FF ? (0, dF.o)(FF, 3) ? FF : null : this.resolve(FF, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(FF) {
        const WF = "string" === typeof FF ? this.uW.getEntityAimPoint(FF) : FF;
        return WF && (0, dF.o)(WF, 3) ? WF : null
      }
      feetPosition(FF) {
        return this.resolve(FF, this.readFeet, this.lastFeet)
      }
      heading(FF) {
        const WF = this.uW.getEntityHeading(FF);
        if (null !== WF && Number.isFinite(WF)) return this.lastHeadings.set(FF, WF), WF;
        const SF = this.lastHeadings.get(FF);
        return void 0 !== SF ? SF : FF === this.uW.localPlayerId ? 0 : this.heading(this.uW.localPlayerId)
      }
      resolve(FF, WF, SF) {
        const CF = WF(FF);
        let AF = SF.get(FF);
        return CF && (0, dF.o)(CF, 3) ? (AF || (AF = [0, 0, 0], SF.set(FF, AF)), AF[0] = CF[0], AF[1] = CF[1], AF[2] = CF[2], AF) : AF || (FF === this.uW.localPlayerId ? null : this.resolve(this.uW.localPlayerId, WF, SF))
      }
    }

    function MF(FF) {
      return {
        heading: FF.heading,
        pitch: FF.pitch
      }
    }

    function cW(FF, WF) {
      Number.isFinite(FF.heading) && Number.isFinite(FF.pitch) || (0, AF.f)(WF, FF)
    }

    function GF(FF, WF, SF, CF, uF) {
      if (WF) return void(0, AF.g)(WF, uF);
      const hF = CF.aimPoint(SF);
      hF && (0, AF.n)(FF, hF, uF)
    }
    class zW {
      constructor(FF, WF, SF, CF) {
        this.settings = FF, this.uW = WF, this.targets = SF, this.base = void 0, this.base = MF(CF)
      }
      update(FF, WF, SF) {
        var CF;
        const AF = this.settings;
        (0, dF.h)(AF.position, SF.position), GF(AF.position, AF.lookDirection, null !== (CF = AF.lookAt) && void 0 !== CF ? CF : this.uW.localPlayerId, this.targets, this.base), WF.apply(this.base, SF), SF.fov = EF(AF, this.uW)
      }
      continueFrom(FF) {
        FF instanceof zW && (0, AF.f)(FF.base, this.base)
      }
      reset(FF) {
        cW(this.base, FF)
      }
    }
    class IF {
      constructor(FF, WF, SF, CF) {
        this.settings = FF, this.uW = WF, this.targets = SF, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Th = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = MF(CF), this.goal = [...CF.position]
      }
      update(FF, WF, SF) {
        var CF, AF, uF;
        const hF = this.settings,
          bW = null !== (CF = hF.target) && void 0 !== CF ? CF : this.uW.localPlayerId,
          PF = this.targets.feetPosition(bW);
        let RF = !1;
        PF && (RF = this.foundFeet && qW(this.lastFeet, PF) > 32 + .1 * FF, (0, dF.h)(PF, this.lastFeet), this.foundFeet = !0, this.placeGoal(PF, bW));
        const iW = null !== (AF = hF.smoothMs) && void 0 !== AF ? AF : 0;
        !this.started || iW < 1 || RF ? ((0, dF.h)(this.goal, this.smoothed), this.Th.fill(0), this.started = !0) : QF(this.smoothed, this.Th, this.goal, iW, FF), RF && (this.distance = -1), (0, dF.h)(this.smoothed, SF.position);
        const eF = !0 === hF.avoidTerrain ? this.pullIn(bW, FF, SF) : 1;
        let rW = this.goal;
        if ("target" === hF.offsetSpace) rW = SF.position;
        else if (eF < 1) {
          rW = this.aimOrigin;
          for (let FF = 0; FF < 3; FF++) rW[FF] = SF.position[FF] + (this.goal[FF] - this.smoothed[FF]) * eF
        }
        GF(rW, hF.lookDirection, null !== (uF = hF.lookAt) && void 0 !== uF ? uF : bW, this.targets, this.base), WF.apply(this.base, SF), SF.fov = EF(hF, this.uW)
      }
      continueFrom(FF) {
        FF instanceof IF && (0, CF.q)(FF.settings.target, this.settings.target) && ((0, AF.f)(FF.base, this.base), (0, dF.h)(FF.goal, this.goal), (0, dF.h)(FF.lastFeet, this.lastFeet), this.foundFeet = FF.foundFeet, (0, dF.h)(FF.smoothed, this.smoothed), (0, dF.h)(FF.Th, this.Th), this.started = FF.started, !0 === FF.settings.avoidTerrain && (this.distance = FF.distance))
      }
      reset(FF) {
        cW(this.base, FF), this.Th.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(FF, WF, SF) {
        const CF = this.targets.aimPoint(FF);
        if (!CF) return 1;
        const AF = SF.position,
          uF = qW(CF, AF);
        if (!(uF > 0)) return 1;
        const hF = this.toCamera;
        for (let dF = 0; dF < 3; dF++) hF[dF] = (AF[dF] - CF[dF]) / uF;
        const bW = function(FF, WF, SF) {
          return FF < 0 || WF < FF ? WF : WF + (FF - WF) * Math.exp(-SF / 150)
        }(this.distance, function(FF, WF, SF, CF) {
          const AF = FF.raycastTerrain(WF, SF, CF);
          return null !== AF && Number.isFinite(AF) ? Math.min(CF, Math.max(0, AF - .2)) : CF
        }(this.uW, CF, hF, uF), WF);
        if (uF - bW < .001) return this.distance = -1, 1;
        this.distance = bW;
        for (let dF = 0; dF < 3; dF++) AF[dF] = CF[dF] + hF[dF] * bW;
        return bW / uF
      }
      placeGoal(FF, WF) {
        const SF = this.settings.offset;
        let CF = SF[0],
          AF = SF[2];
        if ("target" === this.settings.offsetSpace) {
          const FF = this.targets.heading(WF),
            uF = Math.cos(FF),
            hF = Math.sin(FF);
          CF = SF[0] * uF + SF[2] * hF, AF = -SF[0] * hF + SF[2] * uF
        }
        this.goal[0] = FF[0] + CF, this.goal[1] = FF[1] + SF[1], this.goal[2] = FF[2] + AF
      }
    }
    class fF {
      constructor(FF, WF, SF, CF) {
        var AF, uF;
        this.settings = FF, this.uW = WF, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = FF.keyframes.length > 0 ? new oF(FF.keyframes, null === (AF = FF.smooth) || void 0 === AF || AF, null !== (uF = FF.loop) && void 0 !== uF && uF) : null, this.base = (0, dF.e)(CF, (0, dF.i)()), this.resolveTarget = FF => SF.aimPoint(FF)
      }
      update(FF, WF, SF) {
        this.elapsedMs += FF;
        const CF = EF(this.settings, this.uW);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, CF, this.base) : this.base.fov = CF, (0, dF.h)(this.base.position, SF.position), SF.fov = this.base.fov, WF.apply(this.base, SF)
      }
      continueFrom(FF) {
        FF instanceof fF && (0, CF.q)(FF.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = FF.elapsedMs, (0, dF.e)(FF.base, this.base))
      }
      reset(FF) {
        cW(this.base, FF), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function yW(FF, WF) {
      return (0, CF.u)(FF, WF)
    }
    class sF {
      constructor(FF, WF, SF) {
        var CF;
        this.settings = FF, this.uW = WF, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const AF = null !== SF && SF.settings.mode === FF.mode,
          uF = AF ? SF.pose : WF.getDefaultPose();
        this.pose = (0, dF.e)(uF, (0, dF.i)()), this.lastGoodPose = (0, dF.e)(AF ? SF.lastGoodPose : uF, (0, dF.i)()), this.look = new gW(FF.playerLook), this.targets = null !== (CF = null === SF || void 0 === SF ? void 0 : SF.targets) && void 0 !== CF ? CF : new YF(WF);
        const hF = (0, dF.e)(uF, (0, dF.i)());
        AF && SF.look.unapply(hF, hF), this.mode = function(FF, WF, SF, CF) {
          switch (FF.mode) {
            case "fixed":
              return new zW(FF, WF, SF, CF);
            case "follow":
              return new IF(FF, WF, SF, CF);
            case "path":
              return new fF(FF, WF, SF, CF);
            case "frame":
              return new rW(FF, WF, SF, CF)
          }
        }(FF, WF, this.targets, hF), AF && (this.look.continueFrom(SF.look), this.mode.continueFrom(SF.mode))
      }
      update(FF, WF) {
        return this.look.update(FF, WF), this.mode.update(FF, this.look, this.pose), (0, dF.k)(this.pose) ? (0, dF.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, dF.e)(this.lastGoodPose, this.pose), this.mode.reset((0, dF.k)(this.lastGoodPose) ? this.lastGoodPose : this.uW.getDefaultPose())), this.pose
      }
    }

    function nF(FF) {
      return [0, 0, FF[2], FF[3]]
    }
    class HF {
      constructor(FF) {
        this.uW = FF, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new bW, this.shot = null, this.blend = null, this.mixed = (0, dF.i)(), this.output = (0, dF.i)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(FF) {
        const WF = (0, PF.b)(FF);
        if ((0, CF.q)(WF, this.pending ? this.pending.settings : this.settings)) return;
        const SF = yW(this.settings, WF);
        if (void 0 !== WF.transition && !SF) return this.pending = {
          settings: WF,
          shot: "default" === WF.mode ? null : new sF(WF, this.uW, null)
        }, void this.fade.fadeOut(WF.transition);
        const AF = null !== this.pending;
        this.pending = null, !AF && SF || this.fade.fadeIn(CF.j.minTransitionFadeMs), this.show(WF, !1)
      }
      show(FF, WF) {
        var SF, AF;
        if ((0, CF.q)(FF, this.settings)) return;
        const hF = !WF && yW(this.settings, FF);
        this.settings = FF;
        const bW = null !== this.blend && this.blend.elapsedMs > 0,
          PF = (0, dF.e)(this.hasOutput ? this.output : this.uW.getDefaultPose(), (0, dF.i)());
        if (this.shot = "default" === FF.mode ? null : new sF(FF, this.uW, WF ? null : this.shot), hF) return;
        const RF = WF || !this.shot && !this.hasOutput ? 0 : null !== (SF = FF.blendInMs) && void 0 !== SF ? SF : 0;
        if (RF <= 0) return void(this.blend = null);
        const iW = (0, uF.r)(null !== (AF = FF.blendEasing) && void 0 !== AF ? AF : "easeInOut");
        this.blend = {
          from: PF,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: RF,
          easing: bW ? nF(iW) : iW
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
      update(FF, WF) {
        const SF = Number.isFinite(FF) && FF > 0 ? FF : 0;
        if (this.fade.advance(SF) && null !== this.pending) {
          const {
            settings: FF
          } = this.pending;
          this.pending = null, this.show(FF, !0)
        }
        this.loadingPositions.length = 0;
        const CF = this.pending;
        if (null !== CF && void 0 !== CF && CF.shot) {
          const FF = "path" === CF.settings.mode ? 0 : SF;
          this.noteLoadingPosition(CF.shot.update(FF, dF.c).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const hF = this.shot ? this.shot.update(SF, WF) : this.uW.getDefaultPose();
        this.shot && this.noteLoadingPosition(hF.position);
        const bW = this.blend;
        if (!bW) return this.writeOutput(hF);
        bW.elapsedMs += SF;
        const PF = Math.min(1, bW.elapsedMs / bW.durationMs);
        if (bW.headingDelta = Number.isFinite(bW.headingDelta) ? (0, AF.w)(bW.headingDelta, hF.heading - bW.from.heading) : (0, AF.t)(bW.from.heading, hF.heading), (0, dF.p)(bW.from, hF, bW.headingDelta, (0, uF.n)(PF, bW.easing), this.mixed), PF >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else bW.fromScripted && this.noteLoadingPosition(bW.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(FF) {
        if (FF.every(Number.isFinite)) {
          const WF = this.loadingPositions;
          WF.push((0, dF.h)(FF, this.loadingSlots[WF.length]))
        }
      }
      writeOutput(FF) {
        const WF = this.output;
        (0, dF.k)(FF) ? (0, dF.e)(FF, WF) : this.hasOutput || (0, dF.e)(this.uW.getDefaultPose(), WF), WF.pitch = (0, AF.e)(WF.pitch);
        const SF = this.uW.getDefaultFov(),
          uF = Number.isFinite(SF) && SF > 0 && SF < 180,
          hF = uF ? Math.min(CF.j.minFov, SF) : CF.j.minFov,
          bW = uF ? Math.max(CF.j.maxFov, SF) : CF.j.maxFov;
        return WF.fov = Number.isFinite(WF.fov) ? Math.min(bW, Math.max(hF, WF.fov)) : bW, this.hasOutput = !0, WF
      }
    }
  },
  37506: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF,
      e: () => bW,
      h: () => hF,
      i: () => uF,
      k: () => PF,
      o: () => dF,
      p: () => RF
    });
    var CF = SF(37511);
    const AF = {
      TWF: 0,
      aSF: 0
    };

    function uF() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function hF(FF, WF) {
      return WF[0] = FF[0], WF[1] = FF[1], WF[2] = FF[2], WF
    }

    function bW(FF, WF) {
      return hF(FF.position, WF.position), WF.heading = FF.heading, WF.pitch = FF.pitch, WF.fov = FF.fov, WF
    }

    function dF(FF, WF) {
      return Array.isArray(FF) && FF.length === WF && FF.every(Number.isFinite)
    }

    function PF(FF) {
      return dF(FF.position, 3) && Number.isFinite(FF.heading) && Number.isFinite(FF.pitch) && Number.isFinite(FF.fov)
    }

    function RF(FF, WF, SF, AF, uF) {
      for (let CF = 0; CF < 3; CF++) uF.position[CF] = FF.position[CF] + (WF.position[CF] - FF.position[CF]) * AF;
      return uF.heading = (0, CF.r)(FF.heading + SF * AF), uF.pitch = FF.pitch + (WF.pitch - FF.pitch) * AF, uF.fov = FF.fov + (WF.fov - FF.fov) * AF, uF
    }
  },
  37531: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => NF,
      c: () => eF
    });
    var CF = SF(37526),
      AF = SF(37506);
    const uF = CF.i,
      hF = CF.k;

    function bW(FF, WF, SF, CF) {
      return Number.isFinite(FF) ? Math.min(SF, Math.max(WF, FF)) : CF
    }

    function dF(FF, WF, SF) {
      return void 0 !== FF && Number.isFinite(FF) ? Math.min(SF, Math.max(WF, FF)) : void 0
    }

    function PF(FF) {
      const WF = CF.j.maxCoordinate;
      return [Math.min(WF, Math.max(-WF, FF[0])), Math.min(WF, Math.max(-WF, FF[1])), Math.min(WF, Math.max(-WF, FF[2]))]
    }

    function RF(FF) {
      return "string" === typeof FF ? FF : (0, AF.o)(FF, 3) ? PF(FF) : void 0
    }
    const iW = new RegExp(CF.n);

    function eF(FF) {
      return "string" === typeof FF && iW.test(FF)
    }

    function EF(FF) {
      const WF = [];
      if (!Array.isArray(FF)) return WF;
      for (const SF of FF.slice(0, CF.j.maxFrameTargets)) {
        const FF = RF(SF);
        void 0 === FF || "string" === typeof FF && !eF(FF) || WF.push(FF)
      }
      return WF
    }

    function QF(FF) {
      if (!(0, AF.o)(FF, 3)) return;
      const WF = Math.max(Math.abs(FF[0]), Math.abs(FF[1]), Math.abs(FF[2])),
        SF = Math.hypot(FF[0] / WF, FF[1] / WF, FF[2] / WF);
      return 0 === WF || WF * SF < CF.j.minDirectionLength ? void 0 : [FF[0] / WF / SF, FF[1] / WF / SF, FF[2] / WF / SF]
    }

    function rW(FF) {
      if (void 0 !== FF) return "string" === typeof FF ? uF.includes(FF) ? FF : void 0 : (0, AF.o)(FF, 4) ? [bW(FF[0], 0, 1, 0), bW(FF[1], CF.j.minEasingY, CF.j.maxEasingY, 0), bW(FF[2], 0, 1, 1), bW(FF[3], CF.j.minEasingY, CF.j.maxEasingY, 1)] : "linear"
    }

    function gW(FF) {
      if (FF) return {
        maxYaw: bW(FF.maxYaw, 0, CF.j.maxPlayerLook, 0),
        maxPitch: bW(FF.maxPitch, 0, CF.j.maxPlayerLook, 0),
        returnMs: dF(FF.returnMs, 0, CF.j.maxReturnMs)
      }
    }
    const tW = new RegExp(CF.e);

    function TF(FF) {
      var WF;
      if ("object" !== typeof FF || null === FF) return;
      const SF = CF.j.maxTransitionMs,
        AF = CF.j.minTransitionFadeMs;
      return {
        colour: "string" === typeof FF.colour && tW.test(FF.colour) ? FF.colour : CF.g,
        outMs: bW(FF.outMs, AF, SF, AF),
        holdMs: bW(null !== (WF = FF.holdMs) && void 0 !== WF ? WF : 0, 0, SF, 0),
        inMs: bW(FF.inMs, AF, SF, AF)
      }
    }

    function aW(FF) {
      return !0 === FF || void 0
    }

    function kW(FF) {
      if ("object" !== typeof FF || null === FF) return !1;
      const WF = FF.lookAt;
      return Number.isFinite(FF.timeMs) && (0, AF.o)(FF.position, 3) && (void 0 === WF || "string" === typeof WF || (0, AF.o)(WF, 3))
    }

    function qW(FF) {
      return {
        ...FF,
        timeMs: bW(FF.timeMs, 0, CF.j.maxPathMs, 0),
        position: PF(FF.position),
        lookAt: RF(FF.lookAt),
        lookDirection: QF(FF.lookDirection),
        fov: dF(FF.fov, CF.j.minFov, CF.j.maxFov),
        easing: rW(FF.easing)
      }
    }

    function VF(FF) {
      const WF = [];
      if (!Array.isArray(FF)) return WF;
      for (const SF of FF.slice(0, CF.j.maxKeyframes)) {
        if (!kW(SF)) continue;
        const FF = qW(SF);
        (0 === WF.length || FF.timeMs > WF[WF.length - 1].timeMs) && WF.push(FF)
      }
      return WF
    }

    function NF(FF) {
      if ("object" !== typeof FF || null === FF) return {
        mode: "default"
      };
      const WF = {
          blendInMs: dF(FF.blendInMs, 0, CF.j.maxBlendInMs),
          blendEasing: rW(FF.blendEasing),
          transition: TF(FF.transition),
          letterbox: aW(FF.letterbox),
          hideHud: aW(FF.hideHud)
        },
        SF = {
          mode: "default",
          ...WF
        };
      if ("default" === FF.mode || "fixed" === FF.mode && !(0, AF.o)(FF.position, 3)) return SF;
      const uF = {
        ...WF,
        fov: dF(FF.fov, CF.j.minFov, CF.j.maxFov),
        playerFacing: (iW = FF.playerFacing, hF.includes(iW) ? iW : void 0),
        playerLook: gW(FF.playerLook)
      };
      var iW, eF;
      switch (FF.mode) {
        case "fixed":
          return {
            ...FF, ...uF, position: PF(FF.position), lookAt: RF(FF.lookAt), lookDirection: QF(FF.lookDirection)
          };
        case "follow":
          return {
            ...FF, ...uF, target: "string" === typeof FF.target ? FF.target : void 0, lookAt: RF(FF.lookAt), offset: (eF = FF.offset, Array.isArray(eF) ? [bW(eF[0], -CF.j.maxOffset, CF.j.maxOffset, 0), bW(eF[1], -CF.j.maxOffset, CF.j.maxOffset, 0), bW(eF[2], -CF.j.maxOffset, CF.j.maxOffset, 0)] : [0, 0, 0]), lookDirection: QF(FF.lookDirection), smoothMs: dF(FF.smoothMs, 0, CF.j.maxSmoothMs)
          };
        case "path":
          return {
            ...FF, ...uF, keyframes: VF(FF.keyframes)
          };
        case "frame":
          return {
            ...FF, ...uF, targets: EF(FF.targets), viewHeading: dF(FF.viewHeading, -CF.j.maxFrameHeading, CF.j.maxFrameHeading), viewElevation: dF(FF.viewElevation, 0, CF.j.maxFrameElevation), padding: dF(FF.padding, 0, CF.j.maxFrameDistance), closestDistance: dF(FF.closestDistance, 0, CF.j.maxFrameDistance), furthestDistance: dF(FF.furthestDistance, 0, CF.j.maxFrameDistance), smoothMs: dF(FF.smoothMs, 0, CF.j.maxSmoothMs)
          };
        default:
          return SF
      }
    }
  },
  37479: (FF, WF, SF) => {
    function CF(FF, WF) {
      return WF.set(FF), WF
    }
    SF.d(WF, {
      b: () => CF
    })
  },
  37472: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(35149),
      AF = SF.n(CF);
    const uF = [1, 1, 1];

    function hF(FF) {
      if (!FF) return [...uF];
      try {
        const [WF, SF, CF] = AF()(FF).rgb().array();
        return [WF / 255, SF / 255, CF / 255]
      } catch (WF) {
        return console.warn(`Invalid groundArrowPath colour "${FF}":`, WF), [...uF]
      }
    }
  },
  32952: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      d: () => bW,
      f: () => hF,
      h: () => AF,
      j: () => CF
    });
    const CF = {
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
      AF = "/textures/dayNight/sun.png",
      uF = "/textures/dayNight/moon.png",
      hF = "/textures/dayNight/stars",
      bW = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  37526: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => RF,
      g: () => iW,
      i: () => CF,
      j: () => dF,
      k: () => AF,
      n: () => PF,
      q: () => bW,
      u: () => hF
    });
    const CF = ["linear", "easeIn", "easeOut", "easeInOut"],
      AF = ["movement", "camera", "cursor"],
      uF = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function hF(FF, WF) {
      return bW(FF, WF, uF)
    }

    function bW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (FF === WF || Number.isNaN(FF) && Number.isNaN(WF)) return !0;
      if ("object" !== typeof FF || "object" !== typeof WF || null === FF || null === WF || Array.isArray(FF) !== Array.isArray(WF)) return !1;
      const CF = FF,
        AF = WF;
      for (const uF of new Set([...Object.keys(CF), ...Object.keys(AF)]))
        if (!SF.includes(uF) && !bW(CF[uF], AF[uF])) return !1;
      return !0
    }
    const dF = {
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
      PF = "^-[1-9][0-9]*$",
      RF = "^#[0-9a-fA-F]{6}$",
      iW = "#000000"
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);