export const id = 206;
export const ids = [206];
export const modules = {
  40199: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    class OM {
      constructor(MM, rM) {
        this.read = MM, this.apply = rM, this.release = null
      }
      turn(MM, rM) {
        const iM = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: rM,
          forcedCameraDirection: [MM[0], MM[1], MM[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), rM + 100),
          transitionMs: iM
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(MM) {
        null !== this.release && (clearTimeout(this.release.timer), MM && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  39678: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      g: () => SM
    });
    const OM = new Map;

    function SM(MM, rM) {
      OM.set(MM, rM)
    }

    function jM(MM) {
      return MM ? OM.get(MM) : void 0
    }
  },
  40731: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = iM(39218);

    function SM(MM, rM, iM) {
      var SM, jM, aM, PM, nM, QM, zM;
      const LM = (0, OM.e)(MM, rM, iM[0], iM[1], iM[2]),
        mM = LM ? null !== (SM = LM.textCell) && void 0 !== SM ? SM : LM.rect.anchor : iM,
        HM = rM(mM[0], mM[1], mM[2]);
      return {
        pos: [iM[0], iM[1], iM[2]],
        noticeboardSpan: LM && {
          width: LM.rect.width,
          height: LM.rect.height
        },
        text: null !== (jM = null === HM || void 0 === HM || null === (aM = HM.persisted) || void 0 === aM || null === (PM = aM.shared) || void 0 === PM ? void 0 : PM.text) && void 0 !== jM ? jM : "",
        textSize: null !== (nM = null === HM || void 0 === HM || null === (QM = HM.persisted) || void 0 === QM || null === (zM = QM.shared) || void 0 === zM ? void 0 : zM.textSize) && void 0 !== nM ? nM : null
      }
    }
  },
  39507: (MM, rM, iM) => {
    function OM(MM) {
      switch (MM.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    iM.d(rM, {
      d: () => SM,
      h: () => jM,
      l: () => OM
    });
    const SM = 4,
      jM = 3
  },
  40240: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      h: () => jM
    });
    var OM = iM(332);
    const SM = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta", "skyIslands", "skyblock", "tsunami"]);
    class jM {
      constructor(MM) {
        this.importGame = MM, this.loads = new Map, this.loaded = new Map
      }
      load(MM) {
        const rM = (0, OM.Mb)(MM);
        if (!SM.has(rM)) return Promise.resolve(void 0);
        let iM = this.loads.get(rM);
        return iM || (iM = this.importGame(rM).then((MM => {
          const iM = MM.default;
          if ("function" !== typeof iM) throw new Error(`${rM}'s client code has no default-exported factory`);
          return this.loaded.set(rM, iM), iM
        })).catch((MM => {
          throw this.loads.delete(rM), MM
        })), this.loads.set(rM, iM)), iM
      }
      loadedFactory(MM) {
        const rM = (0, OM.Mb)(MM);
        if (!SM.has(rM)) return;
        const iM = this.loaded.get(rM);
        if (!iM) throw new Error(`${rM}'s client code started before it loaded`);
        return iM
      }
    }
  },
  40231: (MM, rM, iM) => {
    function OM(MM, rM) {
      return Object.values({
        ...MM,
        ...rM
      }).filter((MM => null !== MM))
    }
    iM.d(rM, {
      c: () => OM
    })
  },
  40739: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(9918),
      SM = iM(35037),
      jM = iM(3693);

    function aM(MM) {
      if (MM === OM.c) return 0;
      const rM = (0, jM.d)(MM);
      if (void 0 !== rM && rM <= SM.MAX_BLOCK_ID) return rM;
      const iM = (0, jM.d)(MM.split("|")[0]);
      if (void 0 !== iM && iM <= SM.MAX_BLOCK_ID && (0, SM.rootMetaDescOf)(iM) === MM) return iM;
      throw new Error(`Invalid block name. You sent ${MM}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  40291: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = iM(19);
    class SM {
      constructor(MM) {
        this.screen = MM, this.hidesHud = !1
      }
      show(MM, rM) {
        this.screen.setFade(MM.colour, MM.alpha), this.screen.setLetterbox(!0 === rM.letterbox, MM.alpha < 1), this.setHudHidden(!0 === rM.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(MM) {
        this.hidesHud !== MM && (this.hidesHud = MM, OM.d.set({
          isUiHiddenByCamera: MM
        }))
      }
    }
  },
  40261: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      f: () => mM,
      h: () => LM,
      j: () => aM,
      m: () => hM,
      o: () => nM,
      p: () => JM,
      s: () => QM,
      v: () => PM,
      w: () => zM
    });
    const OM = Math.PI / 2 - .001,
      SM = 2 * Math.PI,
      jM = 1e-9;

    function aM(MM, rM) {
      rM.heading = MM.heading, rM.pitch = MM.pitch
    }

    function PM(MM, rM) {
      const iM = rM - MM;
      return iM - SM * Math.floor((iM + Math.PI) / SM)
    }

    function nM(MM, rM, iM) {
      return MM + PM(MM, rM) * iM
    }

    function QM(MM) {
      if (!Number.isFinite(MM)) return MM;
      const rM = MM - SM * Math.floor(MM / SM);
      return rM < SM ? rM : 0
    }

    function zM(MM, rM) {
      return MM + PM(MM, rM)
    }

    function LM(MM) {
      return Math.max(-OM, Math.min(OM, MM))
    }

    function mM(MM, rM, iM) {
      const OM = Math.cos(rM);
      return iM[0] = OM * Math.sin(MM), iM[1] = -Math.sin(rM), iM[2] = OM * Math.cos(MM), iM
    }

    function HM(MM, rM, iM, OM) {
      const SM = Math.sqrt(MM * MM + iM * iM);
      return SM < jM && Math.abs(rM) < jM || (SM >= jM && (OM.heading = Math.atan2(MM, iM)), OM.pitch = LM(Math.atan2(-rM, SM) + 0)), OM
    }

    function hM(MM, rM) {
      return HM(MM[0], MM[1], MM[2], rM)
    }

    function JM(MM, rM, iM) {
      return HM(rM[0] - MM[0], rM[1] - MM[1], rM[2] - MM[2], iM)
    }
  },
  40287: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      f: () => SM
    });
    var OM = iM(40261);

    function SM(MM) {
      var rM;
      const iM = "default" === MM.mode ? "movement" : null !== (rM = MM.playerFacing) && void 0 !== rM ? rM : "movement";
      return "cursor" === iM ? {
        facing: iM,
        mouseTurns: null
      } : {
        facing: iM,
        mouseTurns: "default" !== MM.mode && void 0 !== MM.playerLook ? "look" : "view"
      }
    }

    function jM(MM, rM, iM, SM, jM, aM) {
      return aM.PD = 0, aM.nD = 0, aM.pointedAt = void 0, void 0 !== SM ? jM ? (aM.pointedAt = SM, MM) : (0, OM.s)(SM.heading) : jM ? (aM.PD = rM, aM.nD = iM, MM) : (0, OM.s)(MM + rM)
    }
  },
  40279: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => vM
    });
    var OM = iM(40283),
      SM = iM(40261),
      jM = iM(37922);

    function aM(MM, rM, iM, OM) {
      if (!(OM > 0)) return rM;
      const SM = rM > MM ? Math.min(rM, MM + iM / OM) : Math.max(rM, MM - iM / OM);
      return Math.abs(rM - SM) < 1e-9 ? rM : SM
    }
    class PM {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: OM.i,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(MM) {
        !this.isGoingOut() && this.sinceTurnMs < OM.q.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: MM
        } : (this.waiting = null, this.startOut(MM))
      }
      fadeIn(MM) {
        this.isGoingOut() ? this.sinceTurnMs < OM.q.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: MM
        } : (this.waiting = null, this.startIn(MM)) : this.waiting = null
      }
      advance(MM) {
        const rM = this.waiting;
        if (null === rM) return this.step(MM);
        const iM = OM.q.minFadeTurnMs - this.sinceTurnMs;
        if (iM > MM) return this.step(MM);
        const SM = this.step(iM);
        return this.waiting = null, "out" === rM.turn ? this.startOut(rM.transition) : this.startIn(rM.minMs), this.step(MM - iM) || SM
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(MM) {
        ("in" === this.phase || null === this.phase && this.clearMs < OM.q.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = MM.colour), this.outMs = MM.outMs, this.holdMs = MM.holdMs, this.inMs = MM.inMs
      }
      startIn(MM) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(MM, this.inMs)
      }
      step(MM) {
        const rM = this.screen;
        this.sinceTurnMs += MM, null === this.phase && (this.clearMs += MM);
        let iM = !1,
          SM = MM;
        if ("out" === this.phase) {
          const OM = (1 - rM.alpha) * this.outMs;
          if (rM.alpha = aM(rM.alpha, 1, MM, this.outMs), rM.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, SM = Math.max(0, MM - OM), iM = !0
        }
        let jM = MM;
        if ("hold" === this.phase) {
          this.heldMs += SM;
          const MM = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - OM.q.minFadeTurnMs);
          if (MM < 0 || iM) return iM;
          this.phase = "in", this.sinceTurnMs = MM, jM = MM
        }
        return "in" === this.phase && (rM.alpha = aM(rM.alpha, 0, jM, this.inMs), rM.alpha <= 0 && (this.phase = null, this.clearMs = 0)), iM
      }
    }
    var nM = iM(40253),
      QM = iM(40285),
      zM = iM(2e3),
      LM = iM(37510);

    function mM(MM, rM) {
      for (let iM = 0; iM < rM.length; iM++) rM[iM] = MM[iM]
    }

    function HM(MM, rM) {
      var iM;
      return null !== (iM = MM.fov) && void 0 !== iM ? iM : rM.getDefaultFov()
    }

    function hM(MM, rM, iM, OM, SM) {
      const jM = 2 / OM,
        aM = Math.exp(-jM * SM);
      for (let PM = 0; PM < MM.length; PM++) {
        const OM = MM[PM] - iM[PM],
          nM = (rM[PM] + jM * OM) * SM;
        MM[PM] = iM[PM] + (OM + nM) * aM, rM[PM] = (rM[PM] - jM * nM) * aM
      }
    }
    class JM {
      constructor(MM, rM, iM, OM) {
        var jM, aM, PM, nM, QM;
        this.settings = MM, this.uL = rM, this.targets = iM, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.dd = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, SM.s)((0, zM.l)(null !== (jM = MM.viewHeading) && void 0 !== jM ? jM : 0)),
          pitch: (0, SM.h)((0, zM.l)(null !== (aM = MM.viewElevation) && void 0 !== aM ? aM : 45))
        }, this.closestDistance = null !== (PM = MM.closestDistance) && void 0 !== PM ? PM : Math.min(6, null !== (nM = MM.furthestDistance) && void 0 !== nM ? nM : 1 / 0), this.furthestDistance = null !== (QM = MM.furthestDistance) && void 0 !== QM ? QM : Math.max(64, this.closestDistance);
        const LM = (0, SM.f)(this.base.heading, this.base.pitch, this.forward),
          mM = OM.position,
          HM = this.closestDistance;
        this.goal = [mM[0] + LM[0] * HM, mM[1] + LM[1] * HM, mM[2] + LM[2] * HM, HM, this.base.heading, this.base.pitch]
      }
      update(MM, rM, iM) {
        var OM, jM;
        this.placeGoal(null !== (OM = this.settings.fov) && void 0 !== OM ? OM : this.uL.getBaseFov()), this.goal[4] = (0, SM.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const aM = null !== (jM = this.settings.smoothMs) && void 0 !== jM ? jM : 400;
        !this.started || aM < 1 ? (mM(this.goal, this.smoothed), this.dd.fill(0), this.started = !0) : hM(this.smoothed, this.dd, this.goal, aM, MM), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, SM.h)(this.smoothed[5]), rM.apply(this.angles, iM);
        const PM = (0, SM.f)(iM.heading, iM.pitch, this.forward);
        for (let SM = 0; SM < 3; SM++) iM.position[SM] = this.smoothed[SM] - PM[SM] * this.smoothed[3];
        iM.fov = HM(this.settings, this.uL)
      }
      continueFrom(MM) {
        MM instanceof JM && (mM(MM.goal, this.goal), mM(MM.smoothed, this.smoothed), mM(MM.dd, this.dd), this.framedTargets = MM.framedTargets, this.started = MM.started)
      }
      reset() {
        this.dd.fill(0), this.started = !1
      }
      placeGoal(MM) {
        var rM;
        let iM = 0;
        for (const zM of this.settings.targets) {
          const MM = this.targets.currentAimPoint(zM);
          MM && (0, nM.d)(MM, this.pointAt(iM++))
        }
        if (iM > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const MM = this.targets.aimPoint(this.uL.localPlayerId);
          MM && (0, nM.d)(MM, this.pointAt(iM++))
        }
        const OM = this.goal;
        if (0 === iM) return void(OM[3] = this.withinDistances(OM[3]));
        for (let nM = 0; nM < 3; nM++) {
          let MM = 1 / 0,
            rM = -1 / 0;
          for (let OM = 0; OM < iM; OM++) MM = Math.min(MM, this.points[OM][nM]), rM = Math.max(rM, this.points[OM][nM]);
          OM[nM] = (MM + rM) / 2
        }
        let SM = 0;
        for (let nM = 0; nM < iM; nM++) {
          const MM = this.points[nM];
          SM = Math.max(SM, Math.hypot(MM[0] - OM[0], MM[1] - OM[1], MM[2] - OM[2]))
        }
        const jM = Math.tan((0, zM.l)(MM) / 2),
          aM = Math.atan(jM * (!0 === this.settings.letterbox ? LM.g : 1)),
          PM = Math.atan(jM * this.uL.getAspectRatio()),
          QM = (SM + (null !== (rM = this.settings.padding) && void 0 !== rM ? rM : 2)) / Math.sin(Math.min(aM, PM));
        OM[3] = this.withinDistances(QM)
      }
      withinDistances(MM) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, MM))
      }
      pointAt(MM) {
        return MM === this.points.length && this.points.push([0, 0, 0]), this.points[MM]
      }
    }
    class dM {
      constructor(MM) {
        this.limits = MM, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(MM) {
        this.limits && (this.yawOffset = MM.yawOffset, this.pitchOffset = MM.pitchOffset, this.idleMs = MM.idleMs)
      }
      update(MM, rM) {
        const iM = this.limits;
        if (!iM) return;
        const OM = Number.isFinite(rM.PD) ? rM.PD : 0,
          SM = Number.isFinite(rM.nD) ? rM.nD : 0;
        if (rM.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: rM.pointedAt.heading,
          pitch: rM.pointedAt.pitch
        };
        else if (0 !== OM || 0 !== SM) this.idleMs = 0, this.yawOffset += OM, this.pitchOffset += SM;
        else {
          const rM = Math.max(0, this.idleMs + MM - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += MM, void 0 !== iM.returnMs && rM > 0) {
            const MM = iM.returnMs > 0 ? Math.exp(-3 * rM / iM.returnMs) : 0;
            this.yawOffset *= MM, this.pitchOffset *= MM
          }
        }
        this.clampOffsets(iM)
      }
      clampOffsets(MM) {
        if (MM.maxYaw >= 180) this.yawOffset = (0, SM.v)(0, this.yawOffset);
        else {
          const rM = (0, zM.l)(MM.maxYaw);
          this.yawOffset = Math.max(-rM, Math.min(rM, this.yawOffset))
        }
        const rM = (0, zM.l)(MM.maxPitch);
        this.pitchOffset = Math.max(-rM, Math.min(rM, this.pitchOffset))
      }
      apply(MM, rM) {
        this.pointedAt && this.limits && (this.yawOffset = (0, SM.v)(MM.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - MM.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const iM = (0, SM.h)(MM.pitch + this.pitchOffset);
        this.pitchOffset = iM - MM.pitch, rM.heading = (0, SM.s)(MM.heading + this.yawOffset), rM.pitch = iM
      }
      unapply(MM, rM) {
        rM.heading = (0, SM.s)(MM.heading - this.yawOffset), rM.pitch = (0, SM.h)(MM.pitch - this.pitchOffset)
      }
    }
    const yM = 1e-6;

    function lM(MM) {
      return Math.sqrt(MM[0] * MM[0] + MM[1] * MM[1] + MM[2] * MM[2])
    }

    function EM(MM, rM, iM, OM, SM) {
      const jM = SM * SM,
        aM = jM * SM;
      return (2 * aM - 3 * jM + 1) * MM + (aM - 2 * jM + SM) * rM + (-2 * aM + 3 * jM) * iM + (aM - jM) * OM
    }

    function UM(MM, rM, iM, OM, SM) {
      const jM = SM * SM;
      return (6 * jM - 6 * SM) * MM + (3 * jM - 4 * SM + 1) * rM + (-6 * jM + 6 * SM) * iM + (3 * jM - 2 * SM) * OM
    }

    function GM(MM, rM) {
      const iM = rM[0] - MM[0],
        OM = rM[1] - MM[1],
        SM = rM[2] - MM[2];
      return Math.sqrt(iM * iM + OM * OM + SM * SM)
    }

    function CM(MM, rM, iM, OM, SM, jM) {
      for (let aM = 0; aM < 3; aM++) jM[aM] = SM ? MM[aM] * OM : iM[aM] - rM[aM];
      return SM && function(MM, rM) {
        const iM = lM(MM);
        if (iM > rM) {
          const OM = rM / iM;
          MM[0] *= OM, MM[1] *= OM, MM[2] *= OM
        }
      }(jM, 3 * GM(rM, iM)), jM
    }

    function eM(MM, rM, iM, OM) {
      for (let SM = 0; SM < 3; SM++) OM[SM] = 6 * (rM[SM] - MM[SM]) - 2 * iM[SM];
      if (lM(OM) < yM)
        for (let SM = 0; SM < 3; SM++) OM[SM] = rM[SM] - MM[SM];
      return OM
    }

    function bM(MM, rM) {
      return [2 * rM[0] - MM[0], 2 * rM[1] - MM[1], 2 * rM[2] - MM[2]]
    }

    function wM(MM, rM, iM, OM, SM, jM, aM) {
      if (!jM && !aM) return 0;
      const PM = jM ? MM : 2 * rM - iM,
        nM = aM ? iM : 2 * rM - MM,
        QM = jM ? OM : SM,
        zM = aM ? SM : OM,
        LM = (rM - PM) / QM,
        mM = (nM - rM) / zM;
      if (LM * mM <= 0) return 0;
      const HM = (nM - PM) / (QM + zM),
        hM = 3 * Math.min(Math.abs(LM), Math.abs(mM));
      return Math.max(-hM, Math.min(hM, HM))
    }

    function tM(MM, rM, iM, OM, SM, jM, aM) {
      const {
        u: PM,
        segmentMs: nM
      } = MM;
      if (!MM.curved) return iM + (OM - iM) * PM;
      return EM(iM, wM(rM, iM, OM, MM.beforeMs, nM, jM, !0) * nM, OM, wM(iM, OM, SM, nM, MM.afterMs, !0, aM) * nM, PM)
    }

    function gM(MM) {
      return Math.abs(MM.pitch) >= SM.c
    }
    class uM {
      constructor(MM, rM, iM, OM, SM) {
        this.nodes = MM, this.prevNodes = iM, this.nextNodes = OM, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = MM.map(((MM, iM) => this.nodeTangent(rM, SM, iM)))
      }
      sample(MM, rM, iM) {
        const {
          index: OM,
          toIndex: jM,
          segmentMs: aM,
          curved: PM
        } = MM, nM = this.fromAngles, QM = this.toAngles, zM = this.nodeAngles(OM, iM.position, rM, nM), LM = this.nodeAngles(jM, iM.position, rM, QM);
        if (aM > 0 && "aim" !== zM && "aim" !== LM && this.liveTangent(MM, nM)) return iM.heading = (0, SM.s)(nM.heading), void(iM.pitch = nM.pitch);
        if ("none" === zM && "none" === LM) return;
        !PM && aM > 0 && ("tangent" === zM && this.liveTangent(MM, nM), "tangent" === LM && this.liveTangent(MM, QM)), "none" === zM ? (0, SM.j)(QM, nM) : "none" === LM && (0, SM.j)(nM, QM);
        const mM = PM && MM.beforeIndex >= 0 && "none" !== this.nodeAngles(MM.beforeIndex, iM.position, rM, this.beforeAngles),
          HM = PM && MM.afterIndex >= 0 && "none" !== this.nodeAngles(MM.afterIndex, iM.position, rM, this.afterAngles),
          hM = (0, SM.w)(nM.heading, QM.heading),
          JM = tM(MM, mM ? (0, SM.w)(nM.heading, this.beforeAngles.heading) : 0, nM.heading, hM, HM ? (0, SM.w)(hM, this.afterAngles.heading) : 0, mM, HM);
        iM.heading = (0, SM.s)(JM), iM.pitch = (0, SM.h)(tM(MM, this.beforeAngles.pitch, nM.pitch, QM.pitch, this.afterAngles.pitch, mM, HM))
      }
      nodeAngles(MM, rM, iM, OM) {
        const SM = this.rawNodeAngles(MM, rM, iM, OM);
        return "none" !== SM && gM(OM) && !this.borrowHeading(this.prevNodes[MM], rM, iM, OM) && this.borrowHeading(this.nextNodes[MM], rM, iM, OM), SM
      }
      borrowHeading(MM, rM, iM, OM) {
        const SM = this.borrowedAngles;
        return !(MM < 0 || "none" === this.rawNodeAngles(MM, rM, iM, SM) || gM(SM)) && (OM.heading = SM.heading, !0)
      }
      rawNodeAngles(MM, rM, iM, OM) {
        const jM = this.nodes[MM].keyframe;
        if (jM.lookDirection) return (0, SM.m)(jM.lookDirection, OM), "aim";
        if (void 0 !== jM.lookAt) {
          const MM = iM(jM.lookAt);
          if (MM) return (0, SM.p)(rM, MM, OM), "aim"
        }
        const aM = this.tangents[MM];
        return aM ? ((0, SM.j)(aM, OM), "tangent") : "none"
      }
      liveTangent(MM, rM) {
        const iM = this.nodes[MM.index].position,
          OM = this.nodes[MM.toIndex].position,
          jM = this.derivative;
        for (let SM = 0; SM < 3; SM++) jM[SM] = UM(iM[SM], MM.fromTangent[SM], OM[SM], MM.toTangent[SM], MM.u);
        return lM(jM) > 1e-9 ? ((0, SM.m)(jM, rM), !0) : !(GM(iM, OM) < yM) && ((0, SM.m)(eM(iM, OM, MM.u < .5 ? MM.toTangent : MM.fromTangent, jM), rM), !0)
      }
      nodeTangent(MM, rM, iM) {
        var OM;
        const jM = MM[iM];
        if (lM(jM) > 1e-9) return (0, SM.m)(jM, {
          heading: 0,
          pitch: 0
        });
        const aM = null !== (OM = this.restDirectionTo(iM, iM + 1, MM, rM)) && void 0 !== OM ? OM : this.restDirectionTo(iM, iM - 1, MM, rM);
        return aM ? (0, SM.m)(aM, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(MM, rM, iM, OM) {
        const SM = this.nodes[MM],
          jM = this.nodes[rM];
        if (!jM || GM(SM.position, jM.position) < yM) return null;
        const [aM, PM] = rM > MM ? [SM, jM] : [jM, SM], nM = CM(iM[rM], aM.position, PM.position, PM.timeMs - aM.timeMs, OM, [0, 0, 0]);
        return eM(aM.position, PM.position, nM, [0, 0, 0])
      }
    }

    function RM(MM, rM) {
      const iM = MM.lookDirection || rM.lookDirection ? function(MM, rM) {
        if (!MM || !rM) return MM === rM;
        const iM = lM(MM),
          OM = lM(rM);
        return Math.hypot(MM[0] / iM - rM[0] / OM, MM[1] / iM - rM[1] / OM, MM[2] / iM - rM[2] / OM) < yM
      }(MM.lookDirection, rM.lookDirection) : (OM = MM.lookAt, SM = rM.lookAt, "object" !== typeof OM || "object" !== typeof SM ? OM === SM : GM(OM, SM) < yM);
      var OM, SM;
      return GM(MM.position, rM.position) < yM && MM.fov === rM.fov && iM
    }
    class pM {
      constructor(MM, rM, iM) {
        if (this.smooth = rM, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === MM.length) throw new Error("A camera path needs at least one keyframe");
        for (let jM = 1; jM < MM.length; jM++)
          if (!(MM[jM].timeMs > MM[jM - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = MM.map((MM => {
          var rM;
          return {
            timeMs: MM.timeMs,
            position: [...MM.position],
            keyframe: MM,
            easing: (0, jM.o)(null !== (rM = MM.easing) && void 0 !== rM ? rM : "linear")
          }
        }));
        const OM = this.nodes[0],
          SM = this.nodes[this.nodes.length - 1],
          aM = iM && this.nodes.length > 1;
        aM && !RM(OM.keyframe, SM.keyframe) && this.nodes.push({
          ...OM,
          timeMs: SM.timeMs + (SM.timeMs - OM.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = aM ? this.nodes[this.nodes.length - 1].timeMs - OM.timeMs : 0, this.prevNodes = this.nodes.map(((MM, rM) => this.neighbour(rM, -1))), this.nextNodes = this.nodes.map(((MM, rM) => this.neighbour(rM, 1))), this.prevGaps = this.prevNodes.map(((MM, rM) => MM >= 0 ? this.gapMs(rM, -1) : 0)), this.nextGaps = this.nextNodes.map(((MM, rM) => MM >= 0 ? this.gapMs(rM, 1) : 0)), this.velocities = this.nodes.map(((MM, rM) => {
          const iM = this.prevNodes[rM],
            OM = this.nextNodes[rM];
          return function(MM, rM, iM, OM, SM, jM) {
            if (jM[0] = 0, jM[1] = 0, jM[2] = 0, !MM && !iM) return jM;
            const aM = null !== MM && void 0 !== MM ? MM : bM(null !== iM && void 0 !== iM ? iM : rM, rM),
              PM = null !== iM && void 0 !== iM ? iM : bM(null !== MM && void 0 !== MM ? MM : rM, rM),
              nM = MM ? OM : SM,
              QM = iM ? SM : OM,
              zM = GM(aM, rM),
              LM = GM(rM, PM);
            if (zM < yM || LM < yM) return jM;
            const mM = Math.sqrt(zM),
              HM = Math.sqrt(LM),
              hM = (mM + HM) / (nM + QM);
            for (let JM = 0; JM < 3; JM++) {
              const MM = (rM[JM] - aM[JM]) / mM - (PM[JM] - aM[JM]) / (mM + HM) + (PM[JM] - rM[JM]) / HM;
              jM[JM] = MM * hM
            }
            return jM
          }(iM >= 0 ? this.nodes[iM].position : null, MM.position, OM >= 0 ? this.nodes[OM].position : null, this.prevGaps[rM], this.nextGaps[rM], [0, 0, 0])
        })), this.aim = new uM(this.nodes, this.velocities, this.prevNodes, this.nextNodes, rM)
      }
      sample(MM, rM, iM, OM) {
        const SM = this.findSegment(this.pathTime(MM));
        this.samplePosition(SM, OM.position), this.aim.sample(SM, rM, OM);
        const {
          beforeIndex: jM,
          afterIndex: aM
        } = SM;
        OM.fov = tM(SM, jM >= 0 ? this.fovAt(jM, iM) : 0, this.fovAt(SM.index, iM), this.fovAt(SM.toIndex, iM), aM >= 0 ? this.fovAt(aM, iM) : 0, jM >= 0, aM >= 0)
      }
      pathTime(MM) {
        const rM = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || MM <= rM) return MM;
        const iM = MM - rM;
        return rM + iM - this.loopMs * Math.floor(iM / this.loopMs)
      }
      findSegment(MM) {
        const rM = this.nodes,
          iM = this.segment;
        let OM = iM.index;
        for (MM < rM[OM].timeMs && (OM = 0); OM < rM.length - 2 && rM[OM + 1].timeMs <= MM;) OM++;
        const SM = Math.min(OM + 1, rM.length - 1),
          aM = rM[SM].timeMs - rM[OM].timeMs;
        return iM.index = OM, iM.toIndex = SM, iM.segmentMs = aM, iM.u = aM > 0 ? (0, jM.k)((MM - rM[OM].timeMs) / aM, rM[OM].easing) : 1, iM.curved = this.smooth && aM > 0, iM.beforeIndex = this.prevNodes[OM], iM.afterIndex = this.nextNodes[SM], iM.beforeMs = this.prevGaps[OM], iM.afterMs = this.nextGaps[SM], iM
      }
      samplePosition(MM, rM) {
        const {
          fromTangent: iM,
          toTangent: OM,
          curved: SM
        } = MM, jM = this.nodes[MM.index].position, aM = this.nodes[MM.toIndex].position;
        CM(this.velocities[MM.index], jM, aM, MM.segmentMs, SM, iM), CM(this.velocities[MM.toIndex], jM, aM, MM.segmentMs, SM, OM);
        const PM = MM.u;
        for (let nM = 0; nM < 3; nM++) rM[nM] = SM ? EM(jM[nM], iM[nM], aM[nM], OM[nM], PM) : jM[nM] + (aM[nM] - jM[nM]) * PM
      }
      fovAt(MM, rM) {
        var iM;
        return null !== (iM = this.nodes[MM].keyframe.fov) && void 0 !== iM ? iM : rM
      }
      neighbour(MM, rM) {
        const iM = this.nodes.length - 1,
          OM = MM + rM;
        return OM >= 0 && OM <= iM ? OM : this.loopMs <= 0 || iM < 2 ? -1 : OM < 0 ? iM - 1 : 1
      }
      gapMs(MM, rM) {
        const iM = this.nodes.length - 1;
        if (1 === rM) {
          const rM = MM === iM ? 0 : MM;
          return this.nodes[rM + 1].timeMs - this.nodes[rM].timeMs
        }
        const OM = 0 === MM ? iM : MM;
        return this.nodes[OM].timeMs - this.nodes[OM - 1].timeMs
      }
    }

    function WM(MM, rM, iM) {
      return null !== iM && Number.isFinite(iM) ? (MM.set(rM, iM), iM) : MM.get(rM)
    }
    class sM {
      constructor(MM) {
        this.uL = MM, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = rM => MM.getEntityPosition(rM), this.readAimPoint = rM => MM.getEntityAimPoint(rM)
      }
      aimPoint(MM) {
        return "string" !== typeof MM ? (0, nM.k)(MM, 3) ? MM : null : this.resolve(MM, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(MM) {
        const rM = "string" === typeof MM ? this.uL.getEntityAimPoint(MM) : MM;
        return rM && (0, nM.k)(rM, 3) ? rM : null
      }
      feetPosition(MM) {
        return this.resolve(MM, this.readFeet, this.lastFeet)
      }
      heading(MM) {
        const rM = WM(this.lastHeadings, MM, this.uL.getEntityHeading(MM));
        return void 0 !== rM ? rM : MM === this.uL.localPlayerId ? 0 : this.heading(this.uL.localPlayerId)
      }
      pitch(MM) {
        var rM;
        return null !== (rM = WM(this.lastPitches, MM, this.uL.getEntityPitch(MM))) && void 0 !== rM ? rM : 0
      }
      lookHeading(MM) {
        var rM;
        return null !== (rM = WM(this.lastLookHeadings, MM, this.uL.getEntityLookHeading(MM))) && void 0 !== rM ? rM : this.heading(MM)
      }
      resolve(MM, rM, iM) {
        const OM = rM(MM);
        let SM = iM.get(MM);
        return OM && (0, nM.k)(OM, 3) ? (SM || (SM = [0, 0, 0], iM.set(MM, SM)), SM[0] = OM[0], SM[1] = OM[1], SM[2] = OM[2], SM) : SM || (MM === this.uL.localPlayerId ? null : this.resolve(this.uL.localPlayerId, rM, iM))
      }
    }

    function DM(MM) {
      return {
        heading: MM.heading,
        pitch: MM.pitch
      }
    }

    function kM(MM, rM) {
      Number.isFinite(MM.heading) && Number.isFinite(MM.pitch) || (0, SM.j)(rM, MM)
    }

    function ZM(MM, rM, iM, OM, jM) {
      if (rM) return void(0, SM.m)(rM, jM);
      const aM = OM.aimPoint(iM);
      aM && (0, SM.p)(MM, aM, jM)
    }
    class oM {
      constructor(MM, rM, iM, OM) {
        this.settings = MM, this.uL = rM, this.targets = iM, this.base = void 0, this.base = DM(OM)
      }
      update(MM, rM, iM) {
        var OM;
        const SM = this.settings;
        (0, nM.d)(SM.position, iM.position), ZM(SM.position, SM.lookDirection, null !== (OM = SM.lookAt) && void 0 !== OM ? OM : this.uL.localPlayerId, this.targets, this.base), rM.apply(this.base, iM), iM.fov = HM(SM, this.uL)
      }
      continueFrom(MM) {
        MM instanceof oM && (0, SM.j)(MM.base, this.base)
      }
      reset(MM) {
        kM(this.base, MM)
      }
    }
    class fM {
      constructor(MM, rM, iM, OM) {
        this.settings = MM, this.uL = rM, this.targets = iM, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.dd = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = DM(OM), this.goal = [...OM.position]
      }
      update(MM, rM, iM) {
        var OM, jM;
        const aM = this.settings,
          PM = null !== (OM = aM.target) && void 0 !== OM ? OM : this.uL.localPlayerId,
          QM = this.targets.feetPosition(PM),
          zM = "eye" === aM.anchor;
        let LM = !1;
        var mM;
        QM && (LM = this.foundFeet && GM(this.lastFeet, QM) > 32 + .1 * MM, (0, nM.d)(QM, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (mM = zM ? this.targets.aimPoint(PM) : null) && void 0 !== mM ? mM : QM, PM));
        const JM = null !== (jM = aM.smoothMs) && void 0 !== jM ? jM : 0;
        !this.started || JM < 1 || LM ? ((0, nM.d)(this.goal, this.smoothed), this.dd.fill(0), this.started = !0) : hM(this.smoothed, this.dd, this.goal, JM, MM), LM && (this.distance = -1), (0, nM.d)(this.smoothed, iM.position);
        const dM = !0 === aM.avoidTerrain ? this.pullIn(PM, MM, iM) : 1;
        let yM = this.goal;
        if ("target" === aM.offsetSpace) yM = iM.position;
        else if (dM < 1) {
          yM = this.aimOrigin;
          for (let MM = 0; MM < 3; MM++) yM[MM] = iM.position[MM] + (this.goal[MM] - this.smoothed[MM]) * dM
        }
        if (zM && !aM.lookDirection && void 0 === aM.lookAt) {
          const rM = this.targets.lookHeading(PM),
            iM = this.targets.pitch(PM),
            OM = 1 - Math.exp(-MM / 50),
            jM = (0, SM.s)(this.eyeHeading + (0, SM.v)(this.eyeHeading, rM) * OM),
            aM = this.eyePitch + (iM - this.eyePitch) * OM,
            nM = PM !== this.uL.localPlayerId && Number.isFinite(jM) && Number.isFinite(aM) && !LM;
          this.eyeHeading = nM ? jM : (0, SM.s)(rM), this.eyePitch = nM ? aM : iM, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var lM;
          this.eyeHeading = NaN, this.eyePitch = NaN, ZM(yM, aM.lookDirection, null !== (lM = aM.lookAt) && void 0 !== lM ? lM : PM, this.targets, this.base)
        }
        rM.apply(this.base, iM), iM.fov = HM(aM, this.uL)
      }
      continueFrom(MM) {
        MM instanceof fM && (0, OM.y)(MM.settings.target, this.settings.target) && ((0, SM.j)(MM.base, this.base), (0, nM.d)(MM.goal, this.goal), (0, nM.d)(MM.lastFeet, this.lastFeet), this.foundFeet = MM.foundFeet, (0, nM.d)(MM.smoothed, this.smoothed), (0, nM.d)(MM.dd, this.dd), this.started = MM.started, this.eyeHeading = MM.eyeHeading, this.eyePitch = MM.eyePitch, !0 === MM.settings.avoidTerrain && (this.distance = MM.distance))
      }
      reset(MM) {
        kM(this.base, MM), this.dd.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(MM, rM, iM) {
        const OM = this.targets.aimPoint(MM);
        if (!OM) return 1;
        const SM = iM.position,
          jM = GM(OM, SM);
        if (!(jM > 0)) return 1;
        const aM = this.toCamera;
        for (let nM = 0; nM < 3; nM++) aM[nM] = (SM[nM] - OM[nM]) / jM;
        const PM = function(MM, rM, iM) {
          return MM < 0 || rM < MM ? rM : rM + (MM - rM) * Math.exp(-iM / 150)
        }(this.distance, function(MM, rM, iM, OM) {
          const SM = MM.raycastTerrain(rM, iM, OM);
          return null !== SM && Number.isFinite(SM) ? Math.min(OM, Math.max(0, SM - .2)) : OM
        }(this.uL, OM, aM, jM), rM);
        if (jM - PM < .001) return this.distance = -1, 1;
        this.distance = PM;
        for (let nM = 0; nM < 3; nM++) SM[nM] = OM[nM] + aM[nM] * PM;
        return PM / jM
      }
      placeGoal(MM, rM) {
        const iM = this.settings.offset;
        let OM = iM[0],
          SM = iM[2];
        if ("target" === this.settings.offsetSpace) {
          const MM = this.targets.heading(rM),
            jM = Math.cos(MM),
            aM = Math.sin(MM);
          OM = iM[0] * jM + iM[2] * aM, SM = -iM[0] * aM + iM[2] * jM
        }
        this.goal[0] = MM[0] + OM, this.goal[1] = MM[1] + iM[1], this.goal[2] = MM[2] + SM
      }
    }
    class YM {
      constructor(MM, rM, iM, OM) {
        var SM, jM;
        this.settings = MM, this.uL = rM, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = MM.keyframes.length > 0 ? new pM(MM.keyframes, null === (SM = MM.smooth) || void 0 === SM || SM, null !== (jM = MM.loop) && void 0 !== jM && jM) : null, this.base = (0, nM.c)(OM, (0, nM.h)()), this.resolveTarget = MM => iM.aimPoint(MM)
      }
      update(MM, rM, iM) {
        this.elapsedMs += MM;
        const OM = HM(this.settings, this.uL);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, OM, this.base) : this.base.fov = OM, (0, nM.d)(this.base.position, iM.position), iM.fov = this.base.fov, rM.apply(this.base, iM)
      }
      continueFrom(MM) {
        MM instanceof YM && (0, OM.y)(MM.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = MM.elapsedMs, (0, nM.c)(MM.base, this.base))
      }
      reset(MM) {
        kM(this.base, MM), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function NM(MM, rM) {
      return (0, OM.C)(MM, rM)
    }
    class AM {
      constructor(MM, rM, iM) {
        var OM;
        this.settings = MM, this.uL = rM, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const SM = null !== iM && iM.settings.mode === MM.mode,
          jM = SM ? iM.pose : rM.getDefaultPose();
        this.pose = (0, nM.c)(jM, (0, nM.h)()), this.lastGoodPose = (0, nM.c)(SM ? iM.lastGoodPose : jM, (0, nM.h)()), this.look = new dM(MM.playerLook), this.targets = null !== (OM = null === iM || void 0 === iM ? void 0 : iM.targets) && void 0 !== OM ? OM : new sM(rM);
        const aM = (0, nM.c)(jM, (0, nM.h)());
        SM && iM.look.unapply(aM, aM), this.mode = function(MM, rM, iM, OM) {
          switch (MM.mode) {
            case "fixed":
              return new oM(MM, rM, iM, OM);
            case "follow":
              return new fM(MM, rM, iM, OM);
            case "path":
              return new YM(MM, rM, iM, OM);
            case "frame":
              return new JM(MM, rM, iM, OM)
          }
        }(MM, rM, this.targets, aM), SM && (this.look.continueFrom(iM.look), this.mode.continueFrom(iM.mode))
      }
      update(MM, rM) {
        return this.look.update(MM, rM), this.mode.update(MM, this.look, this.pose), (0, nM.j)(this.pose) ? (0, nM.c)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, nM.c)(this.lastGoodPose, this.pose), this.mode.reset((0, nM.j)(this.lastGoodPose) ? this.lastGoodPose : this.uL.getDefaultPose())), this.pose
      }
    }

    function xM(MM) {
      return [0, 0, MM[2], MM[3]]
    }
    class vM {
      constructor(MM) {
        this.uL = MM, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new PM, this.shot = null, this.blend = null, this.mixed = (0, nM.h)(), this.output = (0, nM.h)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(MM) {
        const rM = (0, QM.d)(MM);
        if ((0, OM.y)(rM, this.pending ? this.pending.settings : this.settings)) return;
        const iM = NM(this.settings, rM);
        if (void 0 !== rM.transition && !iM) return this.pending = {
          settings: rM,
          shot: "default" === rM.mode ? null : new AM(rM, this.uL, null)
        }, void this.fade.fadeOut(rM.transition);
        const SM = null !== this.pending;
        this.pending = null, !SM && iM || this.fade.fadeIn(OM.q.minTransitionFadeMs), this.show(rM, !1)
      }
      show(MM, rM) {
        var iM, SM;
        if ((0, OM.y)(MM, this.settings)) return;
        const aM = !rM && NM(this.settings, MM);
        this.settings = MM;
        const PM = null !== this.blend && this.blend.elapsedMs > 0,
          QM = (0, nM.c)(this.hasOutput ? this.output : this.uL.getDefaultPose(), (0, nM.h)());
        if (this.shot = "default" === MM.mode ? null : new AM(MM, this.uL, rM ? null : this.shot), aM) return;
        const zM = rM || !this.shot && !this.hasOutput ? 0 : null !== (iM = MM.blendInMs) && void 0 !== iM ? iM : 0;
        if (zM <= 0) return void(this.blend = null);
        const LM = (0, jM.o)(null !== (SM = MM.blendEasing) && void 0 !== SM ? SM : "easeInOut");
        this.blend = {
          from: QM,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: zM,
          easing: PM ? xM(LM) : LM
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
      update(MM, rM) {
        const iM = Number.isFinite(MM) && MM > 0 ? MM : 0;
        if (this.fade.advance(iM) && null !== this.pending) {
          const {
            settings: MM
          } = this.pending;
          this.pending = null, this.show(MM, !0)
        }
        this.loadingPositions.length = 0;
        const OM = this.pending;
        if (null !== OM && void 0 !== OM && OM.shot) {
          const MM = "path" === OM.settings.mode ? 0 : iM;
          this.noteLoadingPosition(OM.shot.update(MM, nM.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const aM = this.shot ? this.shot.update(iM, rM) : this.uL.getDefaultPose();
        this.shot && this.noteLoadingPosition(aM.position);
        const PM = this.blend;
        if (!PM) return this.writeOutput(aM);
        PM.elapsedMs += iM;
        const QM = Math.min(1, PM.elapsedMs / PM.durationMs);
        if (PM.headingDelta = Number.isFinite(PM.headingDelta) ? (0, SM.w)(PM.headingDelta, aM.heading - PM.from.heading) : (0, SM.v)(PM.from.heading, aM.heading), (0, nM.n)(PM.from, aM, PM.headingDelta, (0, jM.k)(QM, PM.easing), this.mixed), QM >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else PM.fromScripted && this.noteLoadingPosition(PM.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(MM) {
        if (MM.every(Number.isFinite)) {
          const rM = this.loadingPositions;
          rM.push((0, nM.d)(MM, this.loadingSlots[rM.length]))
        }
      }
      writeOutput(MM) {
        const rM = this.output;
        (0, nM.j)(MM) ? (0, nM.c)(MM, rM) : this.hasOutput || (0, nM.c)(this.uL.getDefaultPose(), rM), rM.pitch = (0, SM.h)(rM.pitch);
        const iM = this.uL.getDefaultFov(),
          jM = Number.isFinite(iM) && iM > 0 && iM < 180,
          aM = jM ? Math.min(OM.q.minFov, iM) : OM.q.minFov,
          PM = jM ? Math.max(OM.q.maxFov, iM) : OM.q.maxFov;
        return rM.fov = Number.isFinite(rM.fov) ? Math.min(PM, Math.max(aM, rM.fov)) : PM, this.hasOutput = !0, rM
      }
    }
  },
  40253: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      c: () => PM,
      d: () => aM,
      h: () => jM,
      j: () => QM,
      k: () => nM,
      n: () => zM
    });
    var OM = iM(40261);
    const SM = {
      PD: 0,
      nD: 0
    };

    function jM() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function aM(MM, rM) {
      return rM[0] = MM[0], rM[1] = MM[1], rM[2] = MM[2], rM
    }

    function PM(MM, rM) {
      return aM(MM.position, rM.position), rM.heading = MM.heading, rM.pitch = MM.pitch, rM.fov = MM.fov, rM
    }

    function nM(MM, rM) {
      return Array.isArray(MM) && MM.length === rM && MM.every(Number.isFinite)
    }

    function QM(MM) {
      return nM(MM.position, 3) && Number.isFinite(MM.heading) && Number.isFinite(MM.pitch) && Number.isFinite(MM.fov)
    }

    function zM(MM, rM, iM, SM, jM) {
      for (let OM = 0; OM < 3; OM++) jM.position[OM] = MM.position[OM] + (rM.position[OM] - MM.position[OM]) * SM;
      return jM.heading = (0, OM.s)(MM.heading + iM * SM), jM.pitch = MM.pitch + (rM.pitch - MM.pitch) * SM, jM.fov = MM.fov + (rM.fov - MM.fov) * SM, jM
    }
  },
  40285: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => bM,
      g: () => HM
    });
    var OM = iM(40283),
      SM = iM(40253);
    const jM = OM.j,
      aM = OM.s,
      PM = OM.n;

    function nM(MM, rM, iM, OM) {
      return Number.isFinite(MM) ? Math.min(iM, Math.max(rM, MM)) : OM
    }

    function QM(MM, rM, iM) {
      return void 0 !== MM && Number.isFinite(MM) ? Math.min(iM, Math.max(rM, MM)) : void 0
    }

    function zM(MM) {
      const rM = OM.q.maxCoordinate;
      return [Math.min(rM, Math.max(-rM, MM[0])), Math.min(rM, Math.max(-rM, MM[1])), Math.min(rM, Math.max(-rM, MM[2]))]
    }

    function LM(MM) {
      return "string" === typeof MM ? MM : (0, SM.k)(MM, 3) ? zM(MM) : void 0
    }
    const mM = new RegExp(OM.v);

    function HM(MM) {
      return "string" === typeof MM && mM.test(MM)
    }

    function hM(MM) {
      const rM = [];
      if (!Array.isArray(MM)) return rM;
      for (const iM of MM.slice(0, OM.q.maxFrameTargets)) {
        const MM = LM(iM);
        void 0 === MM || "string" === typeof MM && !HM(MM) || rM.push(MM)
      }
      return rM
    }

    function JM(MM) {
      if (!(0, SM.k)(MM, 3)) return;
      const rM = Math.max(Math.abs(MM[0]), Math.abs(MM[1]), Math.abs(MM[2])),
        iM = Math.hypot(MM[0] / rM, MM[1] / rM, MM[2] / rM);
      return 0 === rM || rM * iM < OM.q.minDirectionLength ? void 0 : [MM[0] / rM / iM, MM[1] / rM / iM, MM[2] / rM / iM]
    }

    function dM(MM) {
      if (void 0 !== MM) return "string" === typeof MM ? jM.includes(MM) ? MM : void 0 : (0, SM.k)(MM, 4) ? [nM(MM[0], 0, 1, 0), nM(MM[1], OM.q.minEasingY, OM.q.maxEasingY, 0), nM(MM[2], 0, 1, 1), nM(MM[3], OM.q.minEasingY, OM.q.maxEasingY, 1)] : "linear"
    }

    function yM(MM) {
      if (MM) return {
        maxYaw: nM(MM.maxYaw, 0, OM.q.maxPlayerLook, 0),
        maxPitch: nM(MM.maxPitch, 0, OM.q.maxPlayerLook, 0),
        returnMs: QM(MM.returnMs, 0, OM.q.maxReturnMs)
      }
    }
    const lM = new RegExp(OM.e);

    function EM(MM) {
      var rM;
      if ("object" !== typeof MM || null === MM) return;
      const iM = OM.q.maxTransitionMs,
        SM = OM.q.minTransitionFadeMs;
      return {
        colour: "string" === typeof MM.colour && lM.test(MM.colour) ? MM.colour : OM.i,
        outMs: nM(MM.outMs, SM, iM, SM),
        holdMs: nM(null !== (rM = MM.holdMs) && void 0 !== rM ? rM : 0, 0, iM, 0),
        inMs: nM(MM.inMs, SM, iM, SM)
      }
    }

    function UM(MM) {
      return !0 === MM || void 0
    }

    function GM(MM) {
      if ("object" !== typeof MM || null === MM) return !1;
      const rM = MM.lookAt;
      return Number.isFinite(MM.timeMs) && (0, SM.k)(MM.position, 3) && (void 0 === rM || "string" === typeof rM || (0, SM.k)(rM, 3))
    }

    function CM(MM) {
      return {
        ...MM,
        timeMs: nM(MM.timeMs, 0, OM.q.maxPathMs, 0),
        position: zM(MM.position),
        lookAt: LM(MM.lookAt),
        lookDirection: JM(MM.lookDirection),
        fov: QM(MM.fov, OM.q.minFov, OM.q.maxFov),
        easing: dM(MM.easing)
      }
    }

    function eM(MM) {
      const rM = [];
      if (!Array.isArray(MM)) return rM;
      for (const iM of MM.slice(0, OM.q.maxKeyframes)) {
        if (!GM(iM)) continue;
        const MM = CM(iM);
        (0 === rM.length || MM.timeMs > rM[rM.length - 1].timeMs) && rM.push(MM)
      }
      return rM
    }

    function bM(MM) {
      if ("object" !== typeof MM || null === MM) return {
        mode: "default"
      };
      const rM = {
          blendInMs: QM(MM.blendInMs, 0, OM.q.maxBlendInMs),
          blendEasing: dM(MM.blendEasing),
          transition: EM(MM.transition),
          letterbox: UM(MM.letterbox),
          hideHud: UM(MM.hideHud)
        },
        iM = {
          mode: "default",
          ...rM
        };
      if ("default" === MM.mode || "fixed" === MM.mode && !(0, SM.k)(MM.position, 3)) return iM;
      const jM = {
        ...rM,
        fov: QM(MM.fov, OM.q.minFov, OM.q.maxFov),
        playerFacing: (mM = MM.playerFacing, aM.includes(mM) ? mM : void 0),
        playerLook: yM(MM.playerLook)
      };
      var mM, HM, lM;
      switch (MM.mode) {
        case "fixed":
          return {
            ...MM, ...jM, position: zM(MM.position), lookAt: LM(MM.lookAt), lookDirection: JM(MM.lookDirection)
          };
        case "follow":
          return {
            ...MM, ...jM, target: "string" === typeof MM.target ? MM.target : void 0, anchor: (lM = MM.anchor, PM.includes(lM) ? lM : void 0), lookAt: LM(MM.lookAt), offset: (HM = MM.offset, Array.isArray(HM) ? [nM(HM[0], -OM.q.maxOffset, OM.q.maxOffset, 0), nM(HM[1], -OM.q.maxOffset, OM.q.maxOffset, 0), nM(HM[2], -OM.q.maxOffset, OM.q.maxOffset, 0)] : [0, 0, 0]), lookDirection: JM(MM.lookDirection), smoothMs: QM(MM.smoothMs, 0, OM.q.maxSmoothMs)
          };
        case "path":
          return {
            ...MM, ...jM, keyframes: eM(MM.keyframes)
          };
        case "frame":
          return {
            ...MM, ...jM, targets: hM(MM.targets), viewHeading: QM(MM.viewHeading, -OM.q.maxFrameHeading, OM.q.maxFrameHeading), viewElevation: QM(MM.viewElevation, 0, OM.q.maxFrameElevation), padding: QM(MM.padding, 0, OM.q.maxFrameDistance), closestDistance: QM(MM.closestDistance, 0, OM.q.maxFrameDistance), furthestDistance: QM(MM.furthestDistance, 0, OM.q.maxFrameDistance), smoothMs: QM(MM.smoothMs, 0, OM.q.maxSmoothMs)
          };
        default:
          return iM
      }
    }
  },
  40312: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    const OM = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  39689: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM
    });
    var OM = iM(1229);

    function SM(MM) {
      const rM = /(\d*\.?\d+)px/.exec(MM);
      return rM ? Number(rM[1]) : null
    }

    function jM(MM) {
      return MM.split(/[\s,]+/).pop()
    }
    let aM = !1;
    const PM = {
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
      drawText: function(MM, rM, OM, PM, nM, QM) {
        if (nM <= 0 || QM <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: zM,
          fontVariant: LM,
          fontWeight: mM,
          fontSize: HM,
          font: hM
        } = this, JM = [zM, LM, mM, `${HM}px`, hM].filter(Boolean).join(" "), dM = [
          [mM, `${HM}px`, jM(hM)].filter(Boolean).join(" "), `${HM}px sans-serif`
        ], yM = MM.font, lM = function(MM, rM, iM) {
          for (const OM of rM) {
            MM.font = OM;
            const rM = SM(MM.font),
              aM = jM(OM);
            if (null !== rM && Math.abs(rM - iM) <= .5 && MM.font.toLowerCase().includes(aM.toLowerCase())) return OM
          }
          return null
        }(MM, [JM, ...dM], HM);
        lM !== JM && function(MM, rM, OM) {
          aM || (aM = !0, Promise.resolve().then((() => iM(1329))).then((iM => {
            let {
              CJ: SM
            } = iM;
            SM(new Error("A canvas didn't take canvasTxt's font"), {
              font: MM,
              ML: rM,
              drawnWith: null !== OM && void 0 !== OM ? OM : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(JM, yM, lM);
        const EM = SM(MM.font);
        if (null === lM && null !== EM && EM > 0) {
          const iM = HM / EM;
          MM.save();
          try {
            return MM.scale(iM, iM), {
              height: this.drawLines(MM, rM, OM / iM, PM / iM, nM / iM, QM / iM, EM).height * iM
            }
          } finally {
            MM.restore()
          }
        }
        return this.drawLines(MM, rM, OM, PM, nM, QM, HM)
      },
      drawLines: function(MM, rM, iM, SM, jM, aM, PM) {
        const nM = iM + jM,
          QM = SM + aM;
        let zM, LM = SM + aM / 2 + PM / 2;
        "right" === this.align ? (zM = nM, MM.textAlign = "right") : "left" === this.align ? (zM = iM, MM.textAlign = "left") : (zM = iM + jM / 2, MM.textAlign = "center");
        for (const OM of rM) {
          MM.measureText(OM).width >= jM && (rM = rM.replace(OM, ""))
        }
        rM = (0, OM.U)(rM);
        const mM = [],
          HM = rM.split("\n"),
          hM = this.justify ? MM.measureText("\u200a").width : 0;
        HM.forEach((rM => {
          let iM = MM.measureText(rM).width;
          if (iM <= jM) mM.push(rM);
          else {
            let OM = rM;
            const SM = jM;
            let aM, PM, nM;
            for (iM = MM.measureText(OM).width; iM > SM;) {
              for (aM = 0, PM = 0, nM = ""; PM < SM;) aM++, nM = OM.substr(0, aM), PM = MM.measureText(nM).width;
              aM--, nM = nM.substr(0, aM);
              const rM = aM;
              if (" " !== OM.substr(aM, 1)) {
                for (;
                  " " !== OM.substr(aM, 1) && 0 !== aM;) aM--;
                0 === aM && (aM = rM), nM = OM.substr(0, aM)
              }
              nM = this.justify ? this.justifyLine(MM, nM, hM, "\u200a", jM) : nM, OM = OM.substr(aM), iM = MM.measureText(OM).width, mM.push(nM)
            }
            iM > 0 && mM.push(OM)
          }
        }));
        const JM = this.lineHeight ? this.lineHeight : this.getTextHeight(MM, rM),
          dM = JM * (mM.length - 1),
          yM = dM / 2;
        let lM = SM;
        "top" === this.vAlign ? LM = SM + PM : "bottom" === this.vAlign ? (LM = QM - dM, lM = QM) : (lM = SM + aM / 2, LM -= yM), mM.forEach((rM => {
          rM = rM.trim(), MM.fillText(rM, zM, LM), LM += JM
        })), this.debug && (MM.lineWidth = 3, MM.strokeStyle = "#00909e", MM.strokeRect(iM, SM, jM, aM), MM.lineWidth = 2, MM.strokeStyle = "#f6d743", MM.beginPath(), MM.moveTo(zM, SM), MM.lineTo(zM, QM), MM.stroke(), MM.strokeStyle = "#ff6363", MM.beginPath(), MM.moveTo(iM, lM), MM.lineTo(nM, lM), MM.stroke());
        return {
          height: dM + JM
        }
      },
      getTextHeight: function(MM, rM) {
        const iM = MM.textBaseline;
        MM.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: OM
        } = MM.measureText(rM);
        return MM.textBaseline = iM, OM
      },
      justifyLine: function(MM, rM, iM, OM, SM) {
        const jM = rM.trim(),
          aM = MM.measureText(jM).width,
          PM = jM.split(/\s+/).length - 1,
          nM = Math.floor((SM - aM) / iM);
        if (PM <= 0 || nM <= 0) return jM;
        const QM = Math.floor(nM / PM);
        let zM = nM - PM * QM,
          LM = [];
        for (let mM = 0; mM < QM; mM++) LM.push(OM);
        LM = LM.join("");
        return jM.replace(/\s+/g, (MM => {
          const rM = zM > 0 ? LM + OM : LM;
          return zM--, MM + rM
        }))
      }
    }
  },
  40181: (MM, rM, iM) => {
    function OM(MM, rM) {
      return rM.set(MM), rM
    }
    iM.d(rM, {
      e: () => OM
    })
  },
  39691: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => JM,
      d: () => hM,
      f: () => mM,
      j: () => zM,
      k: () => LM
    });
    var OM = iM(4577),
      SM = iM(332);
    const jM = 1024,
      aM = 1536,
      PM = 2 * OM.j + 1,
      nM = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      QM = 1.5;

    function zM(MM, rM, iM) {
      if ("string" !== typeof MM) return rM;
      try {
        const iM = JSON.parse(MM);
        return iM && "object" === typeof iM ? iM : rM
      } catch (OM) {
        return void 0 !== iM && console.error(`Couldn't parse ${iM}`, OM), rM
      }
    }

    function LM(MM) {
      return zM(MM, null, "a leaderboard's rows")
    }

    function mM(MM, rM) {
      var iM, OM;
      return null !== rM && void 0 !== rM ? rM : {
        status: null !== (iM = MM.status) && void 0 !== iM ? iM : "loading",
        entries: null !== (OM = MM.entries) && void 0 !== OM ? OM : []
      }
    }

    function HM(MM, rM) {
      return "number" === typeof MM && Number.isFinite(MM) && MM > 0 ? MM : rM
    }

    function hM(MM, rM) {
      const iM = HM(MM.size, 1);
      let OM = HM(MM.width, HM(2.5 * iM, 2.5)),
        SM = HM(MM.height, HM(3.75 * iM, 3.75));
      Number.isFinite(jM * SM / OM) && Number.isFinite(aM * OM / SM) || (OM = 2.5, SM = 3.75);
      const PM = SM / OM,
        nM = Math.max(1, Math.min(jM, rM / PM));
      return {
        width: OM,
        height: SM,
        layoutWidth: Math.max(jM, aM / PM),
        layoutHeight: Math.max(aM, jM * PM),
        pixelWidth: Math.round(nM),
        pixelHeight: Math.round(Math.max(1, Math.min(rM, nM * PM)))
      }
    }

    function JM(MM, rM, iM, aM, zM, LM) {
      MM.setTransform(1, 0, 0, 1, 0, 0), MM.fillStyle = SM.L.defaultNameTagBackground, MM.fillRect(0, 0, rM, iM), MM.scale(rM / aM.layoutWidth, iM / aM.layoutHeight), MM.translate((aM.layoutWidth - jM) / 2, 0),
        function(MM, rM, iM, jM) {
          var aM, zM, LM, mM;
          const {
            top: HM,
            around: hM,
            showPlayerText: JM,
            localPlayerDbId: lM
          } = iM, {
            whiteUiText: EM,
            grayUiText: UM,
            yellowUiText: GM
          } = SM.L;
          MM.textBaseline = "middle";
          const CM = function(rM, iM, OM, SM, jM, aM) {
              let PM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              MM.font = `bold ${SM}px 'Jetbrains Mono', monospace`, MM.fillStyle = jM, MM.textAlign = PM;
              let nM = rM.replace(/[\r\n\t]/g, " ");
              if (MM.measureText(nM).width > aM) {
                for (; nM.length > 0 && MM.measureText(`${nM}\u2026`).width > aM;) nM = nM.slice(0, -1);
                nM += "\u2026"
              }
              MM.fillText(nM, iM, OM)
            },
            eM = rM => {
              MM.fillStyle = EM, MM.globalAlpha = .15, MM.fillRect(24, rM, 976, 2), MM.globalAlpha = 1
            },
            bM = null === lM ? null : (0, SM.qc)(lM),
            wM = MM => null !== bM && MM.playerHash === bM,
            tM = dM(HM.entries, OM.l),
            gM = "ready" === HM.status && tM.length > 0,
            uM = null === hM ? [] : dM(hM.entries, PM),
            RM = tM.some(wM),
            pM = null === hM ? null : function(MM) {
              const rM = MM;
              if (!rM || !Number.isFinite(rM.rank) || !Number.isFinite(rM.tied) || !Number.isFinite(rM.total)) return null;
              return rM
            }(hM.standing),
            WM = uM.find(wM),
            sM = tM.find(wM),
            DM = null === pM || void 0 === WM ? null : {
              value: WM.value,
              rank: pM.rank
            },
            kM = yM(tM, void 0 === sM || sM.value === (null === DM || void 0 === DM ? void 0 : DM.value) ? DM : null),
            ZM = yM(uM, DM),
            oM = (MM, rM) => {
              const iM = MM.findIndex(wM);
              return iM >= 0 ? rM[iM] : null
            },
            fM = null !== (aM = null !== (zM = null === pM || void 0 === pM ? void 0 : pM.rank) && void 0 !== zM ? zM : oM(uM, ZM)) && void 0 !== aM ? aM : oM(tM, kM);
          MM.font = "bold 34px 'Jetbrains Mono', monospace";
          const YM = [...gM ? kM : [], ...RM ? [] : ZM],
            NM = Math.min(280, Math.max(0, ...YM.map((rM => MM.measureText(nM.format(rM)).width)))),
            AM = NM <= 80,
            xM = AM ? 80 : 32 + NM,
            vM = AM ? 148 : xM + 28,
            FM = 660 - vM;
          CM(`TOP ${OM.l}  /  ALL TIME`, 24, 52, 28, UM, 976), CM(JM ? String(null !== (LM = rM.title) && void 0 !== LM ? LM : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, EM, 976), CM("RANK", 32, 174, 28, UM, vM - 40), CM("PLAYER", vM, 174, 28, UM, FM), CM(JM ? String(null !== (mM = rM.scoreLabel) && void 0 !== mM ? mM : "Score").slice(0, 24) : "Score", 992, 174, 28, UM, 304, "right"), eM(202);
          const BM = (jM - 232) / (OM.l + QM + PM),
            XM = 208 + OM.l * BM,
            IM = XM + QM * BM,
            KM = (rM, iM, OM, SM) => {
              const jM = wM(rM);
              MM.fillStyle = jM ? GM : EM, MM.globalAlpha = jM ? .15 : SM ? .035 : 0, MM.fillRect(24, OM - BM / 2 + 1, 976, BM - 2), MM.globalAlpha = 1;
              const aM = jM ? GM : EM;
              CM(nM.format(iM), xM, OM, 34, aM, AM ? 80 : NM, AM ? "center" : "right"), CM(JM ? String(rM.name).slice(0, 64) : "Player", vM, OM, 34, aM, FM);
              const PM = nM.format(rM.value);
              CM(MM.measureText(PM).width > 304 ? rM.value.toExponential(6) : PM, 992, OM, 34, aM, 304, "right")
            };
          if (gM)
            for (const [OM, SM] of tM.entries()) KM(SM, kM[OM], 208 + (OM + .5) * BM, OM % 2 === 0);
          else {
            const MM = "error" === HM.status,
              rM = MM ? "Couldn't load leaderboard" : "ready" === HM.status ? "No scores yet" : "Loading leaderboard\u2026",
              iM = MM ? "Trying again shortly" : "ready" === HM.status ? "Be the first on the board!" : "Fetching the top players",
              OM = (208 + XM) / 2;
            CM(rM, 512, OM - 28, 40, MM ? SM.L.redUiText : EM, 960, "center"), CM(iM, 512, OM + 27, 30, UM, 960, "center")
          }
          const qM = XM + QM * BM / 2;
          if (null === fM) eM(qM);
          else {
            const rM = null === pM ? 0 : pM.tied - 1,
              iM = `YOUR RANK #${nM.format(fM)}${null===pM?"":` of ${nM.format(pM.total)}`}`;
            MM.font = "bold 36px 'Jetbrains Mono', monospace";
            const OM = Math.max(20, Math.min(36, Math.floor(34560 / MM.measureText(iM).width)));
            CM(iM, 512, qM - (rM > 0 ? 15 : 0), OM, GM, 960, "center"), rM > 0 && CM(`Tied with ${nM.format(rM)} other${1===rM?"":"s"}`, 512, qM + 24, 24, UM, 960, "center")
          }
          if (null === hM) return;
          const TM = IM + PM * BM / 2;
          if (RM) CM(`You're in the top ${OM.l}!`, 512, TM, 40, GM, 960, "center");
          else if (0 === uM.length) CM("You're not on this board yet", 512, TM, 34, UM, 960, "center");
          else
            for (const [OM, SM] of uM.entries()) KM(SM, ZM[OM], IM + (OM + .5) * BM, OM % 2 === 0)
        }(MM, zM, LM, aM.layoutHeight)
    }

    function dM(MM, rM) {
      return Array.isArray(MM) ? MM.slice(0, rM).filter((MM => MM && Number.isFinite(MM.rank) && Number.isFinite(MM.value))) : []
    }

    function yM(MM, rM) {
      const iM = [];
      let OM = !1;
      return MM.forEach(((SM, jM) => {
        if (null !== rM && SM.value === rM.value) return void iM.push(rM.rank);
        const aM = jM > 0 && SM.value === MM[jM - 1].value;
        aM || (OM = 0 === jM && 1 !== SM.rank), iM.push(aM && !OM ? iM[jM - 1] : SM.rank)
      })), iM
    }
  },
  39922: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      g: () => jM
    });
    const OM = 32;

    function SM(MM) {
      return Array.from(MM).length
    }

    function jM(MM) {
      const rM = [""];
      let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        SM = "";
      const jM = () => {
        rM.push(""), iM = 0, SM = ""
      };
      for (const aM of MM.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(aM)) jM();
        else if (/^\s+$/.test(aM)) SM += aM;
      else if (aM.length > 0) {
        const MM = Array.from(aM);
        iM > 0 && iM + SM.length + MM.length > OM && jM(), rM[rM.length - 1] += SM, iM += SM.length, SM = "";
        for (const SM of MM) iM >= OM && jM(), rM[rM.length - 1] += SM, iM++
      }
      return rM[rM.length - 1] += SM, rM
    }
  },
  40173: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM
    });
    var OM = iM(37563),
      SM = iM.n(OM);
    const jM = [1, 1, 1];

    function aM(MM) {
      if (!MM) return [...jM];
      try {
        const [rM, iM, OM] = SM()(MM).rgb().array();
        return [rM / 255, iM / 255, OM / 255]
      } catch (rM) {
        return console.warn(`Invalid groundArrowPath colour "${MM}":`, rM), [...jM]
      }
    }
  },
  40305: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      g: () => QM,
      h: () => nM
    });
    var OM = iM(281),
      SM = iM(3230);
    const jM = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      aM = 512;

    function PM(MM) {
      var rM;
      const iM = Math.min(screen.width, screen.height) * (null !== (rM = (0, OM.b)()) && void 0 !== rM ? rM : (0, SM.o)());
      return Math.max(window.innerHeight * (0, SM.o)(), iM) / (0, SM.q)(MM)
    }

    function nM(MM, rM, iM) {
      return rM / (2 * Math.tan(iM / 2)) > aM ? MM : QM(MM)
    }

    function QM(MM) {
      return MM.map((MM => MM.replace(jM, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  40165: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = iM(181);

    function SM(MM, rM, iM, SM, jM, aM, PM, nM, QM, zM, LM) {
      const mM = OM.f.HL,
        HM = jM - iM;
      let hM = HM * (aM - SM);
      zM.fill(0, 0, hM);
      for (let OM = Math.floor((nM - 1) / mM);
        (OM + 1) * mM > PM; OM--) {
        const JM = OM * mM;
        for (let dM = Math.floor(iM / mM); dM * mM < jM; dM++) {
          const yM = dM * mM,
            lM = Math.max(iM - yM, 0),
            EM = Math.min(jM - yM, mM);
          for (let jM = Math.floor(SM / mM); jM * mM < aM; jM++) {
            const UM = MM(dM, OM, jM);
            if (!UM) continue;
            const GM = jM * mM,
              CM = Math.max(SM - GM, 0),
              eM = Math.min(aM - GM, mM),
              bM = UM.NH,
              wM = UM.Xm,
              tM = wM.data;
            for (let MM = Math.min(nM - 1 - JM, mM - 1); MM >= Math.max(PM - JM, 0); MM--) {
              const OM = bM[MM],
                jM = OM === rM;
              if (jM || 0 !== QM[OM]) {
                for (let rM = lM; rM < EM; rM++)
                  for (let aM = CM; aM < eM; aM++) {
                    const PM = (GM + aM - SM) * HM + yM + rM - iM;
                    if (0 !== zM[PM]) continue;
                    const nM = jM ? tM[wM.index(rM, MM, aM)] : OM;
                    0 !== QM[nM] && (zM[PM] = nM, LM[PM] = JM + MM, hM--)
                  }
                if (0 === hM) return
              }
            }
          }
        }
      }
    }
  },
  34611: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      d: () => PM,
      g: () => aM,
      h: () => SM,
      j: () => OM
    });
    const OM = {
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
      SM = "/textures/dayNight/sun.png",
      jM = "/textures/dayNight/moon.png",
      aM = "/textures/dayNight/stars",
      PM = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  40283: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => PM,
      e: () => LM,
      i: () => mM,
      j: () => OM,
      n: () => SM,
      q: () => QM,
      s: () => jM,
      v: () => zM,
      y: () => nM
    });
    const OM = ["linear", "easeIn", "easeOut", "easeInOut"],
      SM = ["feet", "eye"],
      jM = ["movement", "camera", "cursor"],
      aM = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function PM(MM, rM) {
      return nM(MM, rM, aM)
    }

    function nM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (MM === rM || Number.isNaN(MM) && Number.isNaN(rM)) return !0;
      if ("object" !== typeof MM || "object" !== typeof rM || null === MM || null === rM || Array.isArray(MM) !== Array.isArray(rM)) return !1;
      const OM = MM,
        SM = rM;
      for (const jM of new Set([...Object.keys(OM), ...Object.keys(SM)]))
        if (!iM.includes(jM) && !nM(OM[jM], SM[jM])) return !1;
      return !0
    }
    const QM = {
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
      zM = "^-[1-9][0-9]*$",
      LM = "^#[0-9a-fA-F]{6}$",
      mM = "#000000"
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);