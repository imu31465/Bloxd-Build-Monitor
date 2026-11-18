export const id = 186;
export const ids = [186];
export const modules = {
  38065: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    class VB {
      constructor(BB, TB) {
        this.read = BB, this.apply = TB, this.release = null
      }
      turn(BB, TB) {
        const dB = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: TB,
          forcedCameraDirection: [BB[0], BB[1], BB[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), TB + 100),
          transitionMs: dB
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(BB) {
        null !== this.release && (clearTimeout(this.release.timer), BB && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  37614: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB,
      g: () => yB
    });
    const VB = new Map;

    function yB(BB, TB) {
      VB.set(BB, TB)
    }

    function pB(BB) {
      return BB ? VB.get(BB) : void 0
    }
  },
  38509: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB
    });
    var VB = dB(37157);

    function yB(BB, TB, dB) {
      var yB, pB, lB, JB, YB, gB, oB;
      const kB = (0, VB.b)(BB, TB, dB[0], dB[1], dB[2]),
        LB = kB ? null !== (yB = kB.textCell) && void 0 !== yB ? yB : kB.rect.anchor : dB,
        OB = TB(LB[0], LB[1], LB[2]);
      return {
        pos: [dB[0], dB[1], dB[2]],
        noticeboardSpan: kB && {
          width: kB.rect.width,
          height: kB.rect.height
        },
        text: null !== (pB = null === OB || void 0 === OB || null === (lB = OB.persisted) || void 0 === lB || null === (JB = lB.shared) || void 0 === JB ? void 0 : JB.text) && void 0 !== pB ? pB : "",
        textSize: null !== (YB = null === OB || void 0 === OB || null === (gB = OB.persisted) || void 0 === gB || null === (oB = gB.shared) || void 0 === oB ? void 0 : oB.textSize) && void 0 !== YB ? YB : null
      }
    }
  },
  37458: (BB, TB, dB) => {
    function VB(BB) {
      switch (BB.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    dB.d(TB, {
      e: () => yB,
      h: () => pB,
      k: () => VB
    });
    const yB = 4,
      pB = 3
  },
  38093: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      e: () => pB
    });
    var VB = dB(279);
    const yB = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class pB {
      constructor(BB) {
        this.importGame = BB, this.loads = new Map, this.loaded = new Map
      }
      load(BB) {
        const TB = (0, VB.Vb)(BB);
        if (!yB.has(TB)) return Promise.resolve(void 0);
        let dB = this.loads.get(TB);
        return dB || (dB = this.importGame(TB).then((BB => {
          const dB = BB.default;
          if ("function" !== typeof dB) throw new Error(`${TB}'s client code has no default-exported factory`);
          return this.loaded.set(TB, dB), dB
        })).catch((BB => {
          throw this.loads.delete(TB), BB
        })), this.loads.set(TB, dB)), dB
      }
      loadedFactory(BB) {
        const TB = (0, VB.Vb)(BB);
        if (!yB.has(TB)) return;
        const dB = this.loaded.get(TB);
        if (!dB) throw new Error(`${TB}'s client code started before it loaded`);
        return dB
      }
    }
  },
  38518: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB
    });
    var VB = dB(8746),
      yB = dB(35681),
      pB = dB(2760);

    function lB(BB) {
      if (BB === VB.c) return 0;
      const TB = (0, pB.b)(BB);
      if (void 0 !== TB && TB <= yB.MAX_BLOCK_ID) return TB;
      const dB = (0, pB.b)(BB.split("|")[0]);
      if (void 0 !== dB && dB <= yB.MAX_BLOCK_ID && (0, yB.rootMetaDescOf)(dB) === BB) return dB;
      throw new Error(`Invalid block name. You sent ${BB}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38149: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB
    });
    var VB = dB(21);
    class yB {
      constructor(BB) {
        this.screen = BB, this.hidesHud = !1
      }
      show(BB, TB) {
        this.screen.setFade(BB.colour, BB.alpha), this.screen.setLetterbox(!0 === TB.letterbox, BB.alpha < 1), this.setHudHidden(!0 === TB.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(BB) {
        this.hidesHud !== BB && (this.hidesHud = BB, VB.d.set({
          isUiHiddenByCamera: BB
        }))
      }
    }
  },
  38106: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => gB,
      D: () => JB,
      F: () => oB,
      e: () => VB,
      i: () => LB,
      j: () => kB,
      l: () => lB,
      p: () => DB,
      t: () => YB,
      w: () => uB
    });
    const VB = Math.PI / 2 - .001,
      yB = 2 * Math.PI,
      pB = 1e-9;

    function lB(BB, TB) {
      TB.heading = BB.heading, TB.pitch = BB.pitch
    }

    function JB(BB, TB) {
      const dB = TB - BB;
      return dB - yB * Math.floor((dB + Math.PI) / yB)
    }

    function YB(BB, TB, dB) {
      return BB + JB(BB, TB) * dB
    }

    function gB(BB) {
      if (!Number.isFinite(BB)) return BB;
      const TB = BB - yB * Math.floor(BB / yB);
      return TB < yB ? TB : 0
    }

    function oB(BB, TB) {
      return BB + JB(BB, TB)
    }

    function kB(BB) {
      return Math.max(-VB, Math.min(VB, BB))
    }

    function LB(BB, TB, dB) {
      const VB = Math.cos(TB);
      return dB[0] = VB * Math.sin(BB), dB[1] = -Math.sin(TB), dB[2] = VB * Math.cos(BB), dB
    }

    function OB(BB, TB, dB, VB) {
      const yB = Math.sqrt(BB * BB + dB * dB);
      return yB < pB && Math.abs(TB) < pB || (yB >= pB && (VB.heading = Math.atan2(BB, dB)), VB.pitch = kB(Math.atan2(-TB, yB) + 0)), VB
    }

    function DB(BB, TB) {
      return OB(BB[0], BB[1], BB[2], TB)
    }

    function uB(BB, TB, dB) {
      return OB(TB[0] - BB[0], TB[1] - BB[1], TB[2] - BB[2], dB)
    }
  },
  38140: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      c: () => yB
    });
    var VB = dB(38106);

    function yB(BB) {
      var TB;
      const dB = "default" === BB.mode ? "movement" : null !== (TB = BB.playerFacing) && void 0 !== TB ? TB : "movement";
      return "cursor" === dB ? {
        facing: dB,
        mouseTurns: null
      } : {
        facing: dB,
        mouseTurns: "default" !== BB.mode && void 0 !== BB.playerLook ? "look" : "view"
      }
    }

    function pB(BB, TB, dB, yB, pB, lB) {
      return lB.pU = 0, lB.kU = 0, lB.pointedAt = void 0, void 0 !== yB ? pB ? (lB.pointedAt = yB, BB) : (0, VB.A)(yB.heading) : pB ? (lB.pU = TB, lB.kU = dB, BB) : (0, VB.A)(BB + TB)
    }
  },
  38117: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => WB
    });
    var VB = dB(38125),
      yB = dB(38106),
      pB = dB(35946);

    function lB(BB, TB, dB, VB) {
      if (!(VB > 0)) return TB;
      const yB = TB > BB ? Math.min(TB, BB + dB / VB) : Math.max(TB, BB - dB / VB);
      return Math.abs(TB - yB) < 1e-9 ? TB : yB
    }
    class JB {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: VB.h,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(BB) {
        !this.isGoingOut() && this.sinceTurnMs < VB.m.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: BB
        } : (this.waiting = null, this.startOut(BB))
      }
      fadeIn(BB) {
        this.isGoingOut() ? this.sinceTurnMs < VB.m.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: BB
        } : (this.waiting = null, this.startIn(BB)) : this.waiting = null
      }
      advance(BB) {
        const TB = this.waiting;
        if (null === TB) return this.step(BB);
        const dB = VB.m.minFadeTurnMs - this.sinceTurnMs;
        if (dB > BB) return this.step(BB);
        const yB = this.step(dB);
        return this.waiting = null, "out" === TB.turn ? this.startOut(TB.transition) : this.startIn(TB.minMs), this.step(BB - dB) || yB
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(BB) {
        ("in" === this.phase || null === this.phase && this.clearMs < VB.m.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = BB.colour), this.outMs = BB.outMs, this.holdMs = BB.holdMs, this.inMs = BB.inMs
      }
      startIn(BB) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(BB, this.inMs)
      }
      step(BB) {
        const TB = this.screen;
        this.sinceTurnMs += BB, null === this.phase && (this.clearMs += BB);
        let dB = !1,
          yB = BB;
        if ("out" === this.phase) {
          const VB = (1 - TB.alpha) * this.outMs;
          if (TB.alpha = lB(TB.alpha, 1, BB, this.outMs), TB.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, yB = Math.max(0, BB - VB), dB = !0
        }
        let pB = BB;
        if ("hold" === this.phase) {
          this.heldMs += yB;
          const BB = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - VB.m.minFadeTurnMs);
          if (BB < 0 || dB) return dB;
          this.phase = "in", this.sinceTurnMs = BB, pB = BB
        }
        return "in" === this.phase && (TB.alpha = lB(TB.alpha, 0, pB, this.inMs), TB.alpha <= 0 && (this.phase = null, this.clearMs = 0)), dB
      }
    }
    var YB = dB(38102),
      gB = dB(38134),
      oB = dB(1652),
      kB = dB(35566);

    function LB(BB, TB) {
      for (let dB = 0; dB < TB.length; dB++) TB[dB] = BB[dB]
    }

    function OB(BB, TB) {
      var dB;
      return null !== (dB = BB.fov) && void 0 !== dB ? dB : TB.getDefaultFov()
    }

    function DB(BB, TB, dB, VB, yB) {
      const pB = 2 / VB,
        lB = Math.exp(-pB * yB);
      for (let JB = 0; JB < BB.length; JB++) {
        const VB = BB[JB] - dB[JB],
          YB = (TB[JB] + pB * VB) * yB;
        BB[JB] = dB[JB] + (VB + YB) * lB, TB[JB] = (TB[JB] - pB * YB) * lB
      }
    }
    class uB {
      constructor(BB, TB, dB, VB) {
        var pB, lB, JB, YB, gB;
        this.settings = BB, this.JL = TB, this.targets = dB, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.bu = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, yB.A)((0, oB.j)(null !== (pB = BB.viewHeading) && void 0 !== pB ? pB : 0)),
          pitch: (0, yB.j)((0, oB.j)(null !== (lB = BB.viewElevation) && void 0 !== lB ? lB : 45))
        }, this.closestDistance = null !== (JB = BB.closestDistance) && void 0 !== JB ? JB : Math.min(6, null !== (YB = BB.furthestDistance) && void 0 !== YB ? YB : 1 / 0), this.furthestDistance = null !== (gB = BB.furthestDistance) && void 0 !== gB ? gB : Math.max(64, this.closestDistance);
        const kB = (0, yB.i)(this.base.heading, this.base.pitch, this.forward),
          LB = VB.position,
          OB = this.closestDistance;
        this.goal = [LB[0] + kB[0] * OB, LB[1] + kB[1] * OB, LB[2] + kB[2] * OB, OB, this.base.heading, this.base.pitch]
      }
      update(BB, TB, dB) {
        var VB, pB;
        this.placeGoal(null !== (VB = this.settings.fov) && void 0 !== VB ? VB : this.JL.getBaseFov()), this.goal[4] = (0, yB.F)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const lB = null !== (pB = this.settings.smoothMs) && void 0 !== pB ? pB : 400;
        !this.started || lB < 1 ? (LB(this.goal, this.smoothed), this.bu.fill(0), this.started = !0) : DB(this.smoothed, this.bu, this.goal, lB, BB), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, yB.j)(this.smoothed[5]), TB.apply(this.angles, dB);
        const JB = (0, yB.i)(dB.heading, dB.pitch, this.forward);
        for (let yB = 0; yB < 3; yB++) dB.position[yB] = this.smoothed[yB] - JB[yB] * this.smoothed[3];
        dB.fov = OB(this.settings, this.JL)
      }
      continueFrom(BB) {
        BB instanceof uB && (LB(BB.goal, this.goal), LB(BB.smoothed, this.smoothed), LB(BB.bu, this.bu), this.framedTargets = BB.framedTargets, this.started = BB.started)
      }
      reset() {
        this.bu.fill(0), this.started = !1
      }
      placeGoal(BB) {
        var TB;
        let dB = 0;
        for (const oB of this.settings.targets) {
          const BB = this.targets.currentAimPoint(oB);
          BB && (0, YB.j)(BB, this.pointAt(dB++))
        }
        if (dB > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const BB = this.targets.aimPoint(this.JL.localPlayerId);
          BB && (0, YB.j)(BB, this.pointAt(dB++))
        }
        const VB = this.goal;
        if (0 === dB) return void(VB[3] = this.withinDistances(VB[3]));
        for (let YB = 0; YB < 3; YB++) {
          let BB = 1 / 0,
            TB = -1 / 0;
          for (let VB = 0; VB < dB; VB++) BB = Math.min(BB, this.points[VB][YB]), TB = Math.max(TB, this.points[VB][YB]);
          VB[YB] = (BB + TB) / 2
        }
        let yB = 0;
        for (let YB = 0; YB < dB; YB++) {
          const BB = this.points[YB];
          yB = Math.max(yB, Math.hypot(BB[0] - VB[0], BB[1] - VB[1], BB[2] - VB[2]))
        }
        const pB = Math.tan((0, oB.j)(BB) / 2),
          lB = Math.atan(pB * (!0 === this.settings.letterbox ? kB.h : 1)),
          JB = Math.atan(pB * this.JL.getAspectRatio()),
          gB = (yB + (null !== (TB = this.settings.padding) && void 0 !== TB ? TB : 2)) / Math.sin(Math.min(lB, JB));
        VB[3] = this.withinDistances(gB)
      }
      withinDistances(BB) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, BB))
      }
      pointAt(BB) {
        return BB === this.points.length && this.points.push([0, 0, 0]), this.points[BB]
      }
    }
    class HB {
      constructor(BB) {
        this.limits = BB, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(BB) {
        this.limits && (this.yawOffset = BB.yawOffset, this.pitchOffset = BB.pitchOffset, this.idleMs = BB.idleMs)
      }
      update(BB, TB) {
        const dB = this.limits;
        if (!dB) return;
        const VB = Number.isFinite(TB.pU) ? TB.pU : 0,
          yB = Number.isFinite(TB.kU) ? TB.kU : 0;
        if (TB.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: TB.pointedAt.heading,
          pitch: TB.pointedAt.pitch
        };
        else if (0 !== VB || 0 !== yB) this.idleMs = 0, this.yawOffset += VB, this.pitchOffset += yB;
        else {
          const TB = Math.max(0, this.idleMs + BB - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += BB, void 0 !== dB.returnMs && TB > 0) {
            const BB = dB.returnMs > 0 ? Math.exp(-3 * TB / dB.returnMs) : 0;
            this.yawOffset *= BB, this.pitchOffset *= BB
          }
        }
        this.clampOffsets(dB)
      }
      clampOffsets(BB) {
        if (BB.maxYaw >= 180) this.yawOffset = (0, yB.D)(0, this.yawOffset);
        else {
          const TB = (0, oB.j)(BB.maxYaw);
          this.yawOffset = Math.max(-TB, Math.min(TB, this.yawOffset))
        }
        const TB = (0, oB.j)(BB.maxPitch);
        this.pitchOffset = Math.max(-TB, Math.min(TB, this.pitchOffset))
      }
      apply(BB, TB) {
        this.pointedAt && this.limits && (this.yawOffset = (0, yB.D)(BB.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - BB.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const dB = (0, yB.j)(BB.pitch + this.pitchOffset);
        this.pitchOffset = dB - BB.pitch, TB.heading = (0, yB.A)(BB.heading + this.yawOffset), TB.pitch = dB
      }
      unapply(BB, TB) {
        TB.heading = (0, yB.A)(BB.heading - this.yawOffset), TB.pitch = (0, yB.j)(BB.pitch - this.pitchOffset)
      }
    }
    const EB = 1e-6;

    function vB(BB) {
      return Math.sqrt(BB[0] * BB[0] + BB[1] * BB[1] + BB[2] * BB[2])
    }

    function mB(BB, TB, dB, VB, yB) {
      const pB = yB * yB,
        lB = pB * yB;
      return (2 * lB - 3 * pB + 1) * BB + (lB - 2 * pB + yB) * TB + (-2 * lB + 3 * pB) * dB + (lB - pB) * VB
    }

    function iB(BB, TB, dB, VB, yB) {
      const pB = yB * yB;
      return (6 * pB - 6 * yB) * BB + (3 * pB - 4 * yB + 1) * TB + (-6 * pB + 6 * yB) * dB + (3 * pB - 2 * yB) * VB
    }

    function NB(BB, TB) {
      const dB = TB[0] - BB[0],
        VB = TB[1] - BB[1],
        yB = TB[2] - BB[2];
      return Math.sqrt(dB * dB + VB * VB + yB * yB)
    }

    function tB(BB, TB, dB, VB, yB, pB) {
      for (let lB = 0; lB < 3; lB++) pB[lB] = yB ? BB[lB] * VB : dB[lB] - TB[lB];
      return yB && function(BB, TB) {
        const dB = vB(BB);
        if (dB > TB) {
          const VB = TB / dB;
          BB[0] *= VB, BB[1] *= VB, BB[2] *= VB
        }
      }(pB, 3 * NB(TB, dB)), pB
    }

    function fB(BB, TB, dB, VB) {
      for (let yB = 0; yB < 3; yB++) VB[yB] = 6 * (TB[yB] - BB[yB]) - 2 * dB[yB];
      if (vB(VB) < EB)
        for (let yB = 0; yB < 3; yB++) VB[yB] = TB[yB] - BB[yB];
      return VB
    }

    function sB(BB, TB) {
      return [2 * TB[0] - BB[0], 2 * TB[1] - BB[1], 2 * TB[2] - BB[2]]
    }

    function MB(BB, TB, dB, VB, yB, pB, lB) {
      if (!pB && !lB) return 0;
      const JB = pB ? BB : 2 * TB - dB,
        YB = lB ? dB : 2 * TB - BB,
        gB = pB ? VB : yB,
        oB = lB ? yB : VB,
        kB = (TB - JB) / gB,
        LB = (YB - TB) / oB;
      if (kB * LB <= 0) return 0;
      const OB = (YB - JB) / (gB + oB),
        DB = 3 * Math.min(Math.abs(kB), Math.abs(LB));
      return Math.max(-DB, Math.min(DB, OB))
    }

    function zB(BB, TB, dB, VB, yB, pB, lB) {
      const {
        u: JB,
        segmentMs: YB
      } = BB;
      if (!BB.curved) return dB + (VB - dB) * JB;
      return mB(dB, MB(TB, dB, VB, BB.beforeMs, YB, pB, !0) * YB, VB, MB(dB, VB, yB, YB, BB.afterMs, !0, lB) * YB, JB)
    }

    function wB(BB) {
      return Math.abs(BB.pitch) >= yB.e
    }
    class UB {
      constructor(BB, TB, dB, VB, yB) {
        this.nodes = BB, this.prevNodes = dB, this.nextNodes = VB, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = BB.map(((BB, dB) => this.nodeTangent(TB, yB, dB)))
      }
      sample(BB, TB, dB) {
        const {
          index: VB,
          toIndex: pB,
          segmentMs: lB,
          curved: JB
        } = BB, YB = this.fromAngles, gB = this.toAngles, oB = this.nodeAngles(VB, dB.position, TB, YB), kB = this.nodeAngles(pB, dB.position, TB, gB);
        if (lB > 0 && "aim" !== oB && "aim" !== kB && this.liveTangent(BB, YB)) return dB.heading = (0, yB.A)(YB.heading), void(dB.pitch = YB.pitch);
        if ("none" === oB && "none" === kB) return;
        !JB && lB > 0 && ("tangent" === oB && this.liveTangent(BB, YB), "tangent" === kB && this.liveTangent(BB, gB)), "none" === oB ? (0, yB.l)(gB, YB) : "none" === kB && (0, yB.l)(YB, gB);
        const LB = JB && BB.beforeIndex >= 0 && "none" !== this.nodeAngles(BB.beforeIndex, dB.position, TB, this.beforeAngles),
          OB = JB && BB.afterIndex >= 0 && "none" !== this.nodeAngles(BB.afterIndex, dB.position, TB, this.afterAngles),
          DB = (0, yB.F)(YB.heading, gB.heading),
          uB = zB(BB, LB ? (0, yB.F)(YB.heading, this.beforeAngles.heading) : 0, YB.heading, DB, OB ? (0, yB.F)(DB, this.afterAngles.heading) : 0, LB, OB);
        dB.heading = (0, yB.A)(uB), dB.pitch = (0, yB.j)(zB(BB, this.beforeAngles.pitch, YB.pitch, gB.pitch, this.afterAngles.pitch, LB, OB))
      }
      nodeAngles(BB, TB, dB, VB) {
        const yB = this.rawNodeAngles(BB, TB, dB, VB);
        return "none" !== yB && wB(VB) && !this.borrowHeading(this.prevNodes[BB], TB, dB, VB) && this.borrowHeading(this.nextNodes[BB], TB, dB, VB), yB
      }
      borrowHeading(BB, TB, dB, VB) {
        const yB = this.borrowedAngles;
        return !(BB < 0 || "none" === this.rawNodeAngles(BB, TB, dB, yB) || wB(yB)) && (VB.heading = yB.heading, !0)
      }
      rawNodeAngles(BB, TB, dB, VB) {
        const pB = this.nodes[BB].keyframe;
        if (pB.lookDirection) return (0, yB.p)(pB.lookDirection, VB), "aim";
        if (void 0 !== pB.lookAt) {
          const BB = dB(pB.lookAt);
          if (BB) return (0, yB.w)(TB, BB, VB), "aim"
        }
        const lB = this.tangents[BB];
        return lB ? ((0, yB.l)(lB, VB), "tangent") : "none"
      }
      liveTangent(BB, TB) {
        const dB = this.nodes[BB.index].position,
          VB = this.nodes[BB.toIndex].position,
          pB = this.derivative;
        for (let yB = 0; yB < 3; yB++) pB[yB] = iB(dB[yB], BB.fromTangent[yB], VB[yB], BB.toTangent[yB], BB.u);
        return vB(pB) > 1e-9 ? ((0, yB.p)(pB, TB), !0) : !(NB(dB, VB) < EB) && ((0, yB.p)(fB(dB, VB, BB.u < .5 ? BB.toTangent : BB.fromTangent, pB), TB), !0)
      }
      nodeTangent(BB, TB, dB) {
        var VB;
        const pB = BB[dB];
        if (vB(pB) > 1e-9) return (0, yB.p)(pB, {
          heading: 0,
          pitch: 0
        });
        const lB = null !== (VB = this.restDirectionTo(dB, dB + 1, BB, TB)) && void 0 !== VB ? VB : this.restDirectionTo(dB, dB - 1, BB, TB);
        return lB ? (0, yB.p)(lB, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(BB, TB, dB, VB) {
        const yB = this.nodes[BB],
          pB = this.nodes[TB];
        if (!pB || NB(yB.position, pB.position) < EB) return null;
        const [lB, JB] = TB > BB ? [yB, pB] : [pB, yB], YB = tB(dB[TB], lB.position, JB.position, JB.timeMs - lB.timeMs, VB, [0, 0, 0]);
        return fB(lB.position, JB.position, YB, [0, 0, 0])
      }
    }

    function FB(BB, TB) {
      const dB = BB.lookDirection || TB.lookDirection ? function(BB, TB) {
        if (!BB || !TB) return BB === TB;
        const dB = vB(BB),
          VB = vB(TB);
        return Math.hypot(BB[0] / dB - TB[0] / VB, BB[1] / dB - TB[1] / VB, BB[2] / dB - TB[2] / VB) < EB
      }(BB.lookDirection, TB.lookDirection) : (VB = BB.lookAt, yB = TB.lookAt, "object" !== typeof VB || "object" !== typeof yB ? VB === yB : NB(VB, yB) < EB);
      var VB, yB;
      return NB(BB.position, TB.position) < EB && BB.fov === TB.fov && dB
    }
    class KB {
      constructor(BB, TB, dB) {
        if (this.smooth = TB, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === BB.length) throw new Error("A camera path needs at least one keyframe");
        for (let pB = 1; pB < BB.length; pB++)
          if (!(BB[pB].timeMs > BB[pB - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = BB.map((BB => {
          var TB;
          return {
            timeMs: BB.timeMs,
            position: [...BB.position],
            keyframe: BB,
            easing: (0, pB.j)(null !== (TB = BB.easing) && void 0 !== TB ? TB : "linear")
          }
        }));
        const VB = this.nodes[0],
          yB = this.nodes[this.nodes.length - 1],
          lB = dB && this.nodes.length > 1;
        lB && !FB(VB.keyframe, yB.keyframe) && this.nodes.push({
          ...VB,
          timeMs: yB.timeMs + (yB.timeMs - VB.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = lB ? this.nodes[this.nodes.length - 1].timeMs - VB.timeMs : 0, this.prevNodes = this.nodes.map(((BB, TB) => this.neighbour(TB, -1))), this.nextNodes = this.nodes.map(((BB, TB) => this.neighbour(TB, 1))), this.prevGaps = this.prevNodes.map(((BB, TB) => BB >= 0 ? this.gapMs(TB, -1) : 0)), this.nextGaps = this.nextNodes.map(((BB, TB) => BB >= 0 ? this.gapMs(TB, 1) : 0)), this.velocities = this.nodes.map(((BB, TB) => {
          const dB = this.prevNodes[TB],
            VB = this.nextNodes[TB];
          return function(BB, TB, dB, VB, yB, pB) {
            if (pB[0] = 0, pB[1] = 0, pB[2] = 0, !BB && !dB) return pB;
            const lB = null !== BB && void 0 !== BB ? BB : sB(null !== dB && void 0 !== dB ? dB : TB, TB),
              JB = null !== dB && void 0 !== dB ? dB : sB(null !== BB && void 0 !== BB ? BB : TB, TB),
              YB = BB ? VB : yB,
              gB = dB ? yB : VB,
              oB = NB(lB, TB),
              kB = NB(TB, JB);
            if (oB < EB || kB < EB) return pB;
            const LB = Math.sqrt(oB),
              OB = Math.sqrt(kB),
              DB = (LB + OB) / (YB + gB);
            for (let uB = 0; uB < 3; uB++) {
              const BB = (TB[uB] - lB[uB]) / LB - (JB[uB] - lB[uB]) / (LB + OB) + (JB[uB] - TB[uB]) / OB;
              pB[uB] = BB * DB
            }
            return pB
          }(dB >= 0 ? this.nodes[dB].position : null, BB.position, VB >= 0 ? this.nodes[VB].position : null, this.prevGaps[TB], this.nextGaps[TB], [0, 0, 0])
        })), this.aim = new UB(this.nodes, this.velocities, this.prevNodes, this.nextNodes, TB)
      }
      sample(BB, TB, dB, VB) {
        const yB = this.findSegment(this.pathTime(BB));
        this.samplePosition(yB, VB.position), this.aim.sample(yB, TB, VB);
        const {
          beforeIndex: pB,
          afterIndex: lB
        } = yB;
        VB.fov = zB(yB, pB >= 0 ? this.fovAt(pB, dB) : 0, this.fovAt(yB.index, dB), this.fovAt(yB.toIndex, dB), lB >= 0 ? this.fovAt(lB, dB) : 0, pB >= 0, lB >= 0)
      }
      pathTime(BB) {
        const TB = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || BB <= TB) return BB;
        const dB = BB - TB;
        return TB + dB - this.loopMs * Math.floor(dB / this.loopMs)
      }
      findSegment(BB) {
        const TB = this.nodes,
          dB = this.segment;
        let VB = dB.index;
        for (BB < TB[VB].timeMs && (VB = 0); VB < TB.length - 2 && TB[VB + 1].timeMs <= BB;) VB++;
        const yB = Math.min(VB + 1, TB.length - 1),
          lB = TB[yB].timeMs - TB[VB].timeMs;
        return dB.index = VB, dB.toIndex = yB, dB.segmentMs = lB, dB.u = lB > 0 ? (0, pB.i)((BB - TB[VB].timeMs) / lB, TB[VB].easing) : 1, dB.curved = this.smooth && lB > 0, dB.beforeIndex = this.prevNodes[VB], dB.afterIndex = this.nextNodes[yB], dB.beforeMs = this.prevGaps[VB], dB.afterMs = this.nextGaps[yB], dB
      }
      samplePosition(BB, TB) {
        const {
          fromTangent: dB,
          toTangent: VB,
          curved: yB
        } = BB, pB = this.nodes[BB.index].position, lB = this.nodes[BB.toIndex].position;
        tB(this.velocities[BB.index], pB, lB, BB.segmentMs, yB, dB), tB(this.velocities[BB.toIndex], pB, lB, BB.segmentMs, yB, VB);
        const JB = BB.u;
        for (let YB = 0; YB < 3; YB++) TB[YB] = yB ? mB(pB[YB], dB[YB], lB[YB], VB[YB], JB) : pB[YB] + (lB[YB] - pB[YB]) * JB
      }
      fovAt(BB, TB) {
        var dB;
        return null !== (dB = this.nodes[BB].keyframe.fov) && void 0 !== dB ? dB : TB
      }
      neighbour(BB, TB) {
        const dB = this.nodes.length - 1,
          VB = BB + TB;
        return VB >= 0 && VB <= dB ? VB : this.loopMs <= 0 || dB < 2 ? -1 : VB < 0 ? dB - 1 : 1
      }
      gapMs(BB, TB) {
        const dB = this.nodes.length - 1;
        if (1 === TB) {
          const TB = BB === dB ? 0 : BB;
          return this.nodes[TB + 1].timeMs - this.nodes[TB].timeMs
        }
        const VB = 0 === BB ? dB : BB;
        return this.nodes[VB].timeMs - this.nodes[VB - 1].timeMs
      }
    }
    class rB {
      constructor(BB) {
        this.JL = BB, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = TB => BB.getEntityPosition(TB), this.readAimPoint = TB => BB.getEntityAimPoint(TB)
      }
      aimPoint(BB) {
        return "string" !== typeof BB ? (0, YB.q)(BB, 3) ? BB : null : this.resolve(BB, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(BB) {
        const TB = "string" === typeof BB ? this.JL.getEntityAimPoint(BB) : BB;
        return TB && (0, YB.q)(TB, 3) ? TB : null
      }
      feetPosition(BB) {
        return this.resolve(BB, this.readFeet, this.lastFeet)
      }
      heading(BB) {
        const TB = this.JL.getEntityHeading(BB);
        if (null !== TB && Number.isFinite(TB)) return this.lastHeadings.set(BB, TB), TB;
        const dB = this.lastHeadings.get(BB);
        return void 0 !== dB ? dB : BB === this.JL.localPlayerId ? 0 : this.heading(this.JL.localPlayerId)
      }
      resolve(BB, TB, dB) {
        const VB = TB(BB);
        let yB = dB.get(BB);
        return VB && (0, YB.q)(VB, 3) ? (yB || (yB = [0, 0, 0], dB.set(BB, yB)), yB[0] = VB[0], yB[1] = VB[1], yB[2] = VB[2], yB) : yB || (BB === this.JL.localPlayerId ? null : this.resolve(this.JL.localPlayerId, TB, dB))
      }
    }

    function IB(BB) {
      return {
        heading: BB.heading,
        pitch: BB.pitch
      }
    }

    function cB(BB, TB) {
      Number.isFinite(BB.heading) && Number.isFinite(BB.pitch) || (0, yB.l)(TB, BB)
    }

    function SB(BB, TB, dB, VB, pB) {
      if (TB) return void(0, yB.p)(TB, pB);
      const lB = VB.aimPoint(dB);
      lB && (0, yB.w)(BB, lB, pB)
    }
    class PB {
      constructor(BB, TB, dB, VB) {
        this.settings = BB, this.JL = TB, this.targets = dB, this.base = void 0, this.base = IB(VB)
      }
      update(BB, TB, dB) {
        var VB;
        const yB = this.settings;
        (0, YB.j)(yB.position, dB.position), SB(yB.position, yB.lookDirection, null !== (VB = yB.lookAt) && void 0 !== VB ? VB : this.JL.localPlayerId, this.targets, this.base), TB.apply(this.base, dB), dB.fov = OB(yB, this.JL)
      }
      continueFrom(BB) {
        BB instanceof PB && (0, yB.l)(BB.base, this.base)
      }
      reset(BB) {
        cB(this.base, BB)
      }
    }
    class QB {
      constructor(BB, TB, dB, VB) {
        this.settings = BB, this.JL = TB, this.targets = dB, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.bu = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = IB(VB), this.goal = [...VB.position]
      }
      update(BB, TB, dB) {
        var VB, yB, pB;
        const lB = this.settings,
          JB = null !== (VB = lB.target) && void 0 !== VB ? VB : this.JL.localPlayerId,
          gB = this.targets.feetPosition(JB);
        let oB = !1;
        gB && (oB = this.foundFeet && NB(this.lastFeet, gB) > 32 + .1 * BB, (0, YB.j)(gB, this.lastFeet), this.foundFeet = !0, this.placeGoal(gB, JB));
        const kB = null !== (yB = lB.smoothMs) && void 0 !== yB ? yB : 0;
        !this.started || kB < 1 || oB ? ((0, YB.j)(this.goal, this.smoothed), this.bu.fill(0), this.started = !0) : DB(this.smoothed, this.bu, this.goal, kB, BB), oB && (this.distance = -1), (0, YB.j)(this.smoothed, dB.position);
        const LB = !0 === lB.avoidTerrain ? this.pullIn(JB, BB, dB) : 1;
        let uB = this.goal;
        if ("target" === lB.offsetSpace) uB = dB.position;
        else if (LB < 1) {
          uB = this.aimOrigin;
          for (let BB = 0; BB < 3; BB++) uB[BB] = dB.position[BB] + (this.goal[BB] - this.smoothed[BB]) * LB
        }
        SB(uB, lB.lookDirection, null !== (pB = lB.lookAt) && void 0 !== pB ? pB : JB, this.targets, this.base), TB.apply(this.base, dB), dB.fov = OB(lB, this.JL)
      }
      continueFrom(BB) {
        BB instanceof QB && (0, VB.w)(BB.settings.target, this.settings.target) && ((0, yB.l)(BB.base, this.base), (0, YB.j)(BB.goal, this.goal), (0, YB.j)(BB.lastFeet, this.lastFeet), this.foundFeet = BB.foundFeet, (0, YB.j)(BB.smoothed, this.smoothed), (0, YB.j)(BB.bu, this.bu), this.started = BB.started, !0 === BB.settings.avoidTerrain && (this.distance = BB.distance))
      }
      reset(BB) {
        cB(this.base, BB), this.bu.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(BB, TB, dB) {
        const VB = this.targets.aimPoint(BB);
        if (!VB) return 1;
        const yB = dB.position,
          pB = NB(VB, yB);
        if (!(pB > 0)) return 1;
        const lB = this.toCamera;
        for (let YB = 0; YB < 3; YB++) lB[YB] = (yB[YB] - VB[YB]) / pB;
        const JB = function(BB, TB, dB) {
          return BB < 0 || TB < BB ? TB : TB + (BB - TB) * Math.exp(-dB / 150)
        }(this.distance, function(BB, TB, dB, VB) {
          const yB = BB.raycastTerrain(TB, dB, VB);
          return null !== yB && Number.isFinite(yB) ? Math.min(VB, Math.max(0, yB - .2)) : VB
        }(this.JL, VB, lB, pB), TB);
        if (pB - JB < .001) return this.distance = -1, 1;
        this.distance = JB;
        for (let YB = 0; YB < 3; YB++) yB[YB] = VB[YB] + lB[YB] * JB;
        return JB / pB
      }
      placeGoal(BB, TB) {
        const dB = this.settings.offset;
        let VB = dB[0],
          yB = dB[2];
        if ("target" === this.settings.offsetSpace) {
          const BB = this.targets.heading(TB),
            pB = Math.cos(BB),
            lB = Math.sin(BB);
          VB = dB[0] * pB + dB[2] * lB, yB = -dB[0] * lB + dB[2] * pB
        }
        this.goal[0] = BB[0] + VB, this.goal[1] = BB[1] + dB[1], this.goal[2] = BB[2] + yB
      }
    }
    class RB {
      constructor(BB, TB, dB, VB) {
        var yB, pB;
        this.settings = BB, this.JL = TB, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = BB.keyframes.length > 0 ? new KB(BB.keyframes, null === (yB = BB.smooth) || void 0 === yB || yB, null !== (pB = BB.loop) && void 0 !== pB && pB) : null, this.base = (0, YB.f)(VB, (0, YB.l)()), this.resolveTarget = BB => dB.aimPoint(BB)
      }
      update(BB, TB, dB) {
        this.elapsedMs += BB;
        const VB = OB(this.settings, this.JL);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, VB, this.base) : this.base.fov = VB, (0, YB.j)(this.base.position, dB.position), dB.fov = this.base.fov, TB.apply(this.base, dB)
      }
      continueFrom(BB) {
        BB instanceof RB && (0, VB.w)(BB.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = BB.elapsedMs, (0, YB.f)(BB.base, this.base))
      }
      reset(BB) {
        cB(this.base, BB), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function aB(BB, TB) {
      return (0, VB.y)(BB, TB)
    }
    class ZB {
      constructor(BB, TB, dB) {
        var VB;
        this.settings = BB, this.JL = TB, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const yB = null !== dB && dB.settings.mode === BB.mode,
          pB = yB ? dB.pose : TB.getDefaultPose();
        this.pose = (0, YB.f)(pB, (0, YB.l)()), this.lastGoodPose = (0, YB.f)(yB ? dB.lastGoodPose : pB, (0, YB.l)()), this.look = new HB(BB.playerLook), this.targets = null !== (VB = null === dB || void 0 === dB ? void 0 : dB.targets) && void 0 !== VB ? VB : new rB(TB);
        const lB = (0, YB.f)(pB, (0, YB.l)());
        yB && dB.look.unapply(lB, lB), this.mode = function(BB, TB, dB, VB) {
          switch (BB.mode) {
            case "fixed":
              return new PB(BB, TB, dB, VB);
            case "follow":
              return new QB(BB, TB, dB, VB);
            case "path":
              return new RB(BB, TB, dB, VB);
            case "frame":
              return new uB(BB, TB, dB, VB)
          }
        }(BB, TB, this.targets, lB), yB && (this.look.continueFrom(dB.look), this.mode.continueFrom(dB.mode))
      }
      update(BB, TB) {
        return this.look.update(BB, TB), this.mode.update(BB, this.look, this.pose), (0, YB.o)(this.pose) ? (0, YB.f)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, YB.f)(this.lastGoodPose, this.pose), this.mode.reset((0, YB.o)(this.lastGoodPose) ? this.lastGoodPose : this.JL.getDefaultPose())), this.pose
      }
    }

    function XB(BB) {
      return [0, 0, BB[2], BB[3]]
    }
    class WB {
      constructor(BB) {
        this.JL = BB, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new JB, this.shot = null, this.blend = null, this.mixed = (0, YB.l)(), this.output = (0, YB.l)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(BB) {
        const TB = (0, gB.b)(BB);
        if ((0, VB.w)(TB, this.pending ? this.pending.settings : this.settings)) return;
        const dB = aB(this.settings, TB);
        if (void 0 !== TB.transition && !dB) return this.pending = {
          settings: TB,
          shot: "default" === TB.mode ? null : new ZB(TB, this.JL, null)
        }, void this.fade.fadeOut(TB.transition);
        const yB = null !== this.pending;
        this.pending = null, !yB && dB || this.fade.fadeIn(VB.m.minTransitionFadeMs), this.show(TB, !1)
      }
      show(BB, TB) {
        var dB, yB;
        if ((0, VB.w)(BB, this.settings)) return;
        const lB = !TB && aB(this.settings, BB);
        this.settings = BB;
        const JB = null !== this.blend && this.blend.elapsedMs > 0,
          gB = (0, YB.f)(this.hasOutput ? this.output : this.JL.getDefaultPose(), (0, YB.l)());
        if (this.shot = "default" === BB.mode ? null : new ZB(BB, this.JL, TB ? null : this.shot), lB) return;
        const oB = TB || !this.shot && !this.hasOutput ? 0 : null !== (dB = BB.blendInMs) && void 0 !== dB ? dB : 0;
        if (oB <= 0) return void(this.blend = null);
        const kB = (0, pB.j)(null !== (yB = BB.blendEasing) && void 0 !== yB ? yB : "easeInOut");
        this.blend = {
          from: gB,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: oB,
          easing: JB ? XB(kB) : kB
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
      update(BB, TB) {
        const dB = Number.isFinite(BB) && BB > 0 ? BB : 0;
        if (this.fade.advance(dB) && null !== this.pending) {
          const {
            settings: BB
          } = this.pending;
          this.pending = null, this.show(BB, !0)
        }
        this.loadingPositions.length = 0;
        const VB = this.pending;
        if (null !== VB && void 0 !== VB && VB.shot) {
          const BB = "path" === VB.settings.mode ? 0 : dB;
          this.noteLoadingPosition(VB.shot.update(BB, YB.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const lB = this.shot ? this.shot.update(dB, TB) : this.JL.getDefaultPose();
        this.shot && this.noteLoadingPosition(lB.position);
        const JB = this.blend;
        if (!JB) return this.writeOutput(lB);
        JB.elapsedMs += dB;
        const gB = Math.min(1, JB.elapsedMs / JB.durationMs);
        if (JB.headingDelta = Number.isFinite(JB.headingDelta) ? (0, yB.F)(JB.headingDelta, lB.heading - JB.from.heading) : (0, yB.D)(JB.from.heading, lB.heading), (0, YB.r)(JB.from, lB, JB.headingDelta, (0, pB.i)(gB, JB.easing), this.mixed), gB >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else JB.fromScripted && this.noteLoadingPosition(JB.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(BB) {
        if (BB.every(Number.isFinite)) {
          const TB = this.loadingPositions;
          TB.push((0, YB.j)(BB, this.loadingSlots[TB.length]))
        }
      }
      writeOutput(BB) {
        const TB = this.output;
        (0, YB.o)(BB) ? (0, YB.f)(BB, TB) : this.hasOutput || (0, YB.f)(this.JL.getDefaultPose(), TB), TB.pitch = (0, yB.j)(TB.pitch);
        const dB = this.JL.getDefaultFov(),
          pB = Number.isFinite(dB) && dB > 0 && dB < 180,
          lB = pB ? Math.min(VB.m.minFov, dB) : VB.m.minFov,
          JB = pB ? Math.max(VB.m.maxFov, dB) : VB.m.maxFov;
        return TB.fov = Number.isFinite(TB.fov) ? Math.min(JB, Math.max(lB, TB.fov)) : JB, this.hasOutput = !0, TB
      }
    }
  },
  38102: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      f: () => JB,
      j: () => lB,
      l: () => pB,
      o: () => gB,
      q: () => YB,
      r: () => oB
    });
    var VB = dB(38106);
    const yB = {
      pU: 0,
      kU: 0
    };

    function pB() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function lB(BB, TB) {
      return TB[0] = BB[0], TB[1] = BB[1], TB[2] = BB[2], TB
    }

    function JB(BB, TB) {
      return lB(BB.position, TB.position), TB.heading = BB.heading, TB.pitch = BB.pitch, TB.fov = BB.fov, TB
    }

    function YB(BB, TB) {
      return Array.isArray(BB) && BB.length === TB && BB.every(Number.isFinite)
    }

    function gB(BB) {
      return YB(BB.position, 3) && Number.isFinite(BB.heading) && Number.isFinite(BB.pitch) && Number.isFinite(BB.fov)
    }

    function oB(BB, TB, dB, yB, pB) {
      for (let VB = 0; VB < 3; VB++) pB.position[VB] = BB.position[VB] + (TB.position[VB] - BB.position[VB]) * yB;
      return pB.heading = (0, VB.A)(BB.heading + dB * yB), pB.pitch = BB.pitch + (TB.pitch - BB.pitch) * yB, pB.fov = BB.fov + (TB.fov - BB.fov) * yB, pB
    }
  },
  38134: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => fB,
      f: () => LB
    });
    var VB = dB(38125),
      yB = dB(38102);
    const pB = VB.l,
      lB = VB.q;

    function JB(BB, TB, dB, VB) {
      return Number.isFinite(BB) ? Math.min(dB, Math.max(TB, BB)) : VB
    }

    function YB(BB, TB, dB) {
      return void 0 !== BB && Number.isFinite(BB) ? Math.min(dB, Math.max(TB, BB)) : void 0
    }

    function gB(BB) {
      const TB = VB.m.maxCoordinate;
      return [Math.min(TB, Math.max(-TB, BB[0])), Math.min(TB, Math.max(-TB, BB[1])), Math.min(TB, Math.max(-TB, BB[2]))]
    }

    function oB(BB) {
      return "string" === typeof BB ? BB : (0, yB.q)(BB, 3) ? gB(BB) : void 0
    }
    const kB = new RegExp(VB.u);

    function LB(BB) {
      return "string" === typeof BB && kB.test(BB)
    }

    function OB(BB) {
      const TB = [];
      if (!Array.isArray(BB)) return TB;
      for (const dB of BB.slice(0, VB.m.maxFrameTargets)) {
        const BB = oB(dB);
        void 0 === BB || "string" === typeof BB && !LB(BB) || TB.push(BB)
      }
      return TB
    }

    function DB(BB) {
      if (!(0, yB.q)(BB, 3)) return;
      const TB = Math.max(Math.abs(BB[0]), Math.abs(BB[1]), Math.abs(BB[2])),
        dB = Math.hypot(BB[0] / TB, BB[1] / TB, BB[2] / TB);
      return 0 === TB || TB * dB < VB.m.minDirectionLength ? void 0 : [BB[0] / TB / dB, BB[1] / TB / dB, BB[2] / TB / dB]
    }

    function uB(BB) {
      if (void 0 !== BB) return "string" === typeof BB ? pB.includes(BB) ? BB : void 0 : (0, yB.q)(BB, 4) ? [JB(BB[0], 0, 1, 0), JB(BB[1], VB.m.minEasingY, VB.m.maxEasingY, 0), JB(BB[2], 0, 1, 1), JB(BB[3], VB.m.minEasingY, VB.m.maxEasingY, 1)] : "linear"
    }

    function HB(BB) {
      if (BB) return {
        maxYaw: JB(BB.maxYaw, 0, VB.m.maxPlayerLook, 0),
        maxPitch: JB(BB.maxPitch, 0, VB.m.maxPlayerLook, 0),
        returnMs: YB(BB.returnMs, 0, VB.m.maxReturnMs)
      }
    }
    const EB = new RegExp(VB.d);

    function vB(BB) {
      var TB;
      if ("object" !== typeof BB || null === BB) return;
      const dB = VB.m.maxTransitionMs,
        yB = VB.m.minTransitionFadeMs;
      return {
        colour: "string" === typeof BB.colour && EB.test(BB.colour) ? BB.colour : VB.h,
        outMs: JB(BB.outMs, yB, dB, yB),
        holdMs: JB(null !== (TB = BB.holdMs) && void 0 !== TB ? TB : 0, 0, dB, 0),
        inMs: JB(BB.inMs, yB, dB, yB)
      }
    }

    function mB(BB) {
      return !0 === BB || void 0
    }

    function iB(BB) {
      if ("object" !== typeof BB || null === BB) return !1;
      const TB = BB.lookAt;
      return Number.isFinite(BB.timeMs) && (0, yB.q)(BB.position, 3) && (void 0 === TB || "string" === typeof TB || (0, yB.q)(TB, 3))
    }

    function NB(BB) {
      return {
        ...BB,
        timeMs: JB(BB.timeMs, 0, VB.m.maxPathMs, 0),
        position: gB(BB.position),
        lookAt: oB(BB.lookAt),
        lookDirection: DB(BB.lookDirection),
        fov: YB(BB.fov, VB.m.minFov, VB.m.maxFov),
        easing: uB(BB.easing)
      }
    }

    function tB(BB) {
      const TB = [];
      if (!Array.isArray(BB)) return TB;
      for (const dB of BB.slice(0, VB.m.maxKeyframes)) {
        if (!iB(dB)) continue;
        const BB = NB(dB);
        (0 === TB.length || BB.timeMs > TB[TB.length - 1].timeMs) && TB.push(BB)
      }
      return TB
    }

    function fB(BB) {
      if ("object" !== typeof BB || null === BB) return {
        mode: "default"
      };
      const TB = {
          blendInMs: YB(BB.blendInMs, 0, VB.m.maxBlendInMs),
          blendEasing: uB(BB.blendEasing),
          transition: vB(BB.transition),
          letterbox: mB(BB.letterbox),
          hideHud: mB(BB.hideHud)
        },
        dB = {
          mode: "default",
          ...TB
        };
      if ("default" === BB.mode || "fixed" === BB.mode && !(0, yB.q)(BB.position, 3)) return dB;
      const pB = {
        ...TB,
        fov: YB(BB.fov, VB.m.minFov, VB.m.maxFov),
        playerFacing: (kB = BB.playerFacing, lB.includes(kB) ? kB : void 0),
        playerLook: HB(BB.playerLook)
      };
      var kB, LB;
      switch (BB.mode) {
        case "fixed":
          return {
            ...BB, ...pB, position: gB(BB.position), lookAt: oB(BB.lookAt), lookDirection: DB(BB.lookDirection)
          };
        case "follow":
          return {
            ...BB, ...pB, target: "string" === typeof BB.target ? BB.target : void 0, lookAt: oB(BB.lookAt), offset: (LB = BB.offset, Array.isArray(LB) ? [JB(LB[0], -VB.m.maxOffset, VB.m.maxOffset, 0), JB(LB[1], -VB.m.maxOffset, VB.m.maxOffset, 0), JB(LB[2], -VB.m.maxOffset, VB.m.maxOffset, 0)] : [0, 0, 0]), lookDirection: DB(BB.lookDirection), smoothMs: YB(BB.smoothMs, 0, VB.m.maxSmoothMs)
          };
        case "path":
          return {
            ...BB, ...pB, keyframes: tB(BB.keyframes)
          };
        case "frame":
          return {
            ...BB, ...pB, targets: OB(BB.targets), viewHeading: YB(BB.viewHeading, -VB.m.maxFrameHeading, VB.m.maxFrameHeading), viewElevation: YB(BB.viewElevation, 0, VB.m.maxFrameElevation), padding: YB(BB.padding, 0, VB.m.maxFrameDistance), closestDistance: YB(BB.closestDistance, 0, VB.m.maxFrameDistance), furthestDistance: YB(BB.furthestDistance, 0, VB.m.maxFrameDistance), smoothMs: YB(BB.smoothMs, 0, VB.m.maxSmoothMs)
          };
        default:
          return dB
      }
    }
  },
  37629: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = dB(1105);

    function yB(BB) {
      const TB = /(\d*\.?\d+)px/.exec(BB);
      return TB ? Number(TB[1]) : null
    }

    function pB(BB) {
      return BB.split(/[\s,]+/).pop()
    }
    let lB = !1;
    const JB = {
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
      drawText: function(BB, TB, VB, JB, YB, gB) {
        if (YB <= 0 || gB <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: oB,
          fontVariant: kB,
          fontWeight: LB,
          fontSize: OB,
          font: DB
        } = this, uB = [oB, kB, LB, `${OB}px`, DB].filter(Boolean).join(" "), HB = [
          [LB, `${OB}px`, pB(DB)].filter(Boolean).join(" "), `${OB}px sans-serif`
        ], EB = BB.font, vB = function(BB, TB, dB) {
          for (const VB of TB) {
            BB.font = VB;
            const TB = yB(BB.font),
              lB = pB(VB);
            if (null !== TB && Math.abs(TB - dB) <= .5 && BB.font.toLowerCase().includes(lB.toLowerCase())) return VB
          }
          return null
        }(BB, [uB, ...HB], OB);
        vB !== uB && function(BB, TB, VB) {
          lB || (lB = !0, Promise.resolve().then((() => dB(955))).then((dB => {
            let {
              wu: yB
            } = dB;
            yB(new Error("A canvas didn't take canvasTxt's font"), {
              font: BB,
              RO: TB,
              drawnWith: null !== VB && void 0 !== VB ? VB : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(uB, EB, vB);
        const mB = yB(BB.font);
        if (null === vB && null !== mB && mB > 0) {
          const dB = OB / mB;
          BB.save();
          try {
            return BB.scale(dB, dB), {
              height: this.drawLines(BB, TB, VB / dB, JB / dB, YB / dB, gB / dB, mB).height * dB
            }
          } finally {
            BB.restore()
          }
        }
        return this.drawLines(BB, TB, VB, JB, YB, gB, OB)
      },
      drawLines: function(BB, TB, dB, yB, pB, lB, JB) {
        const YB = dB + pB,
          gB = yB + lB;
        let oB, kB = yB + lB / 2 + JB / 2;
        "right" === this.align ? (oB = YB, BB.textAlign = "right") : "left" === this.align ? (oB = dB, BB.textAlign = "left") : (oB = dB + pB / 2, BB.textAlign = "center");
        for (const VB of TB) {
          BB.measureText(VB).width >= pB && (TB = TB.replace(VB, ""))
        }
        TB = (0, VB.V)(TB);
        const LB = [],
          OB = TB.split("\n"),
          DB = this.justify ? BB.measureText("\u200a").width : 0;
        OB.forEach((TB => {
          let dB = BB.measureText(TB).width;
          if (dB <= pB) LB.push(TB);
          else {
            let VB = TB;
            const yB = pB;
            let lB, JB, YB;
            for (dB = BB.measureText(VB).width; dB > yB;) {
              for (lB = 0, JB = 0, YB = ""; JB < yB;) lB++, YB = VB.substr(0, lB), JB = BB.measureText(YB).width;
              lB--, YB = YB.substr(0, lB);
              const TB = lB;
              if (" " !== VB.substr(lB, 1)) {
                for (;
                  " " !== VB.substr(lB, 1) && 0 !== lB;) lB--;
                0 === lB && (lB = TB), YB = VB.substr(0, lB)
              }
              YB = this.justify ? this.justifyLine(BB, YB, DB, "\u200a", pB) : YB, VB = VB.substr(lB), dB = BB.measureText(VB).width, LB.push(YB)
            }
            dB > 0 && LB.push(VB)
          }
        }));
        const uB = this.lineHeight ? this.lineHeight : this.getTextHeight(BB, TB),
          HB = uB * (LB.length - 1),
          EB = HB / 2;
        let vB = yB;
        "top" === this.vAlign ? kB = yB + JB : "bottom" === this.vAlign ? (kB = gB - HB, vB = gB) : (vB = yB + lB / 2, kB -= EB), LB.forEach((TB => {
          TB = TB.trim(), BB.fillText(TB, oB, kB), kB += uB
        })), this.debug && (BB.lineWidth = 3, BB.strokeStyle = "#00909e", BB.strokeRect(dB, yB, pB, lB), BB.lineWidth = 2, BB.strokeStyle = "#f6d743", BB.beginPath(), BB.moveTo(oB, yB), BB.lineTo(oB, gB), BB.stroke(), BB.strokeStyle = "#ff6363", BB.beginPath(), BB.moveTo(dB, vB), BB.lineTo(YB, vB), BB.stroke());
        return {
          height: HB + uB
        }
      },
      getTextHeight: function(BB, TB) {
        const dB = BB.textBaseline;
        BB.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: VB
        } = BB.measureText(TB);
        return BB.textBaseline = dB, VB
      },
      justifyLine: function(BB, TB, dB, VB, yB) {
        const pB = TB.trim(),
          lB = BB.measureText(pB).width,
          JB = pB.split(/\s+/).length - 1,
          YB = Math.floor((yB - lB) / dB);
        if (JB <= 0 || YB <= 0) return pB;
        const gB = Math.floor(YB / JB);
        let oB = YB - JB * gB,
          kB = [];
        for (let LB = 0; LB < gB; LB++) kB.push(VB);
        kB = kB.join("");
        return pB.replace(/\s+/g, (BB => {
          const TB = oB > 0 ? kB + VB : kB;
          return oB--, BB + TB
        }))
      }
    }
  },
  38061: (BB, TB, dB) => {
    function VB(BB, TB) {
      return TB.set(BB), TB
    }
    dB.d(TB, {
      d: () => VB
    })
  },
  37636: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => uB,
      g: () => DB,
      h: () => LB,
      k: () => oB,
      o: () => kB
    });
    var VB = dB(3716),
      yB = dB(279);
    const pB = 1024,
      lB = 1536,
      JB = 2 * VB.k + 1,
      YB = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      gB = 1.5;

    function oB(BB, TB, dB) {
      if ("string" !== typeof BB) return TB;
      try {
        const dB = JSON.parse(BB);
        return dB && "object" === typeof dB ? dB : TB
      } catch (VB) {
        return void 0 !== dB && console.error(`Couldn't parse ${dB}`, VB), TB
      }
    }

    function kB(BB) {
      return oB(BB, null, "a leaderboard's rows")
    }

    function LB(BB, TB) {
      var dB, VB;
      return null !== TB && void 0 !== TB ? TB : {
        status: null !== (dB = BB.status) && void 0 !== dB ? dB : "loading",
        entries: null !== (VB = BB.entries) && void 0 !== VB ? VB : []
      }
    }

    function OB(BB, TB) {
      return "number" === typeof BB && Number.isFinite(BB) && BB > 0 ? BB : TB
    }

    function DB(BB, TB) {
      const dB = OB(BB.size, 1);
      let VB = OB(BB.width, OB(2.5 * dB, 2.5)),
        yB = OB(BB.height, OB(3.75 * dB, 3.75));
      Number.isFinite(pB * yB / VB) && Number.isFinite(lB * VB / yB) || (VB = 2.5, yB = 3.75);
      const JB = yB / VB,
        YB = Math.max(1, Math.min(pB, TB / JB));
      return {
        width: VB,
        height: yB,
        layoutWidth: Math.max(pB, lB / JB),
        layoutHeight: Math.max(lB, pB * JB),
        pixelWidth: Math.round(YB),
        pixelHeight: Math.round(Math.max(1, Math.min(TB, YB * JB)))
      }
    }

    function uB(BB, TB, dB, lB, oB, kB) {
      BB.setTransform(1, 0, 0, 1, 0, 0), BB.fillStyle = yB.L.defaultNameTagBackground, BB.fillRect(0, 0, TB, dB), BB.scale(TB / lB.layoutWidth, dB / lB.layoutHeight), BB.translate((lB.layoutWidth - pB) / 2, 0),
        function(BB, TB, dB, pB) {
          var lB, oB, kB, LB;
          const {
            top: OB,
            around: DB,
            showPlayerText: uB,
            localPlayerDbId: vB
          } = dB, {
            whiteUiText: mB,
            grayUiText: iB,
            yellowUiText: NB
          } = yB.L;
          BB.textBaseline = "middle";
          const tB = function(TB, dB, VB, yB, pB, lB) {
              let JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              BB.font = `bold ${yB}px 'Jetbrains Mono', monospace`, BB.fillStyle = pB, BB.textAlign = JB;
              let YB = TB.replace(/[\r\n\t]/g, " ");
              if (BB.measureText(YB).width > lB) {
                for (; YB.length > 0 && BB.measureText(`${YB}\u2026`).width > lB;) YB = YB.slice(0, -1);
                YB += "\u2026"
              }
              BB.fillText(YB, dB, VB)
            },
            fB = TB => {
              BB.fillStyle = mB, BB.globalAlpha = .15, BB.fillRect(24, TB, 976, 2), BB.globalAlpha = 1
            },
            sB = null === vB ? null : (0, yB.tc)(vB),
            MB = BB => null !== sB && BB.playerHash === sB,
            zB = HB(OB.entries, VB.o),
            wB = "ready" === OB.status && zB.length > 0,
            UB = null === DB ? [] : HB(DB.entries, JB),
            FB = zB.some(MB),
            KB = null === DB ? null : function(BB) {
              const TB = BB;
              if (!TB || !Number.isFinite(TB.rank) || !Number.isFinite(TB.tied) || !Number.isFinite(TB.total)) return null;
              return TB
            }(DB.standing),
            rB = UB.find(MB),
            IB = zB.find(MB),
            cB = null === KB || void 0 === rB ? null : {
              value: rB.value,
              rank: KB.rank
            },
            SB = EB(zB, void 0 === IB || IB.value === (null === cB || void 0 === cB ? void 0 : cB.value) ? cB : null),
            PB = EB(UB, cB),
            QB = (BB, TB) => {
              const dB = BB.findIndex(MB);
              return dB >= 0 ? TB[dB] : null
            },
            RB = null !== (lB = null !== (oB = null === KB || void 0 === KB ? void 0 : KB.rank) && void 0 !== oB ? oB : QB(UB, PB)) && void 0 !== lB ? lB : QB(zB, SB);
          BB.font = "bold 34px 'Jetbrains Mono', monospace";
          const aB = [...wB ? SB : [], ...FB ? [] : PB],
            ZB = Math.min(280, Math.max(0, ...aB.map((TB => BB.measureText(YB.format(TB)).width)))),
            XB = ZB <= 80,
            WB = XB ? 80 : 32 + ZB,
            hB = XB ? 148 : WB + 28,
            CB = 660 - hB;
          tB(`TOP ${VB.o}  /  ALL TIME`, 24, 52, 28, iB, 976), tB(uB ? String(null !== (kB = TB.title) && void 0 !== kB ? kB : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, mB, 976), tB("RANK", 32, 174, 28, iB, hB - 40), tB("PLAYER", hB, 174, 28, iB, CB), tB(uB ? String(null !== (LB = TB.scoreLabel) && void 0 !== LB ? LB : "Score").slice(0, 24) : "Score", 992, 174, 28, iB, 304, "right"), fB(202);
          const GB = (pB - 232) / (VB.o + gB + JB),
            qB = 208 + VB.o * GB,
            xB = qB + gB * GB,
            jB = (TB, dB, VB, yB) => {
              const pB = MB(TB);
              BB.fillStyle = pB ? NB : mB, BB.globalAlpha = pB ? .15 : yB ? .035 : 0, BB.fillRect(24, VB - GB / 2 + 1, 976, GB - 2), BB.globalAlpha = 1;
              const lB = pB ? NB : mB;
              tB(YB.format(dB), WB, VB, 34, lB, XB ? 80 : ZB, XB ? "center" : "right"), tB(uB ? String(TB.name).slice(0, 64) : "Player", hB, VB, 34, lB, CB);
              const JB = YB.format(TB.value);
              tB(BB.measureText(JB).width > 304 ? TB.value.toExponential(6) : JB, 992, VB, 34, lB, 304, "right")
            };
          if (wB)
            for (const [VB, yB] of zB.entries()) jB(yB, SB[VB], 208 + (VB + .5) * GB, VB % 2 === 0);
          else {
            const BB = "error" === OB.status,
              TB = BB ? "Couldn't load leaderboard" : "ready" === OB.status ? "No scores yet" : "Loading leaderboard\u2026",
              dB = BB ? "Trying again shortly" : "ready" === OB.status ? "Be the first on the board!" : "Fetching the top players",
              VB = (208 + qB) / 2;
            tB(TB, 512, VB - 28, 40, BB ? yB.L.redUiText : mB, 960, "center"), tB(dB, 512, VB + 27, 30, iB, 960, "center")
          }
          const AB = qB + gB * GB / 2;
          if (null === RB) fB(AB);
          else {
            const TB = null === KB ? 0 : KB.tied - 1,
              dB = `YOUR RANK #${YB.format(RB)}${null===KB?"":` of ${YB.format(KB.total)}`}`;
            BB.font = "bold 36px 'Jetbrains Mono', monospace";
            const VB = Math.max(20, Math.min(36, Math.floor(34560 / BB.measureText(dB).width)));
            tB(dB, 512, AB - (TB > 0 ? 15 : 0), VB, NB, 960, "center"), TB > 0 && tB(`Tied with ${YB.format(TB)} other${1===TB?"":"s"}`, 512, AB + 24, 24, iB, 960, "center")
          }
          if (null === DB) return;
          const bB = xB + JB * GB / 2;
          if (FB) tB(`You're in the top ${VB.o}!`, 512, bB, 40, NB, 960, "center");
          else if (0 === UB.length) tB("You're not on this board yet", 512, bB, 34, iB, 960, "center");
          else
            for (const [VB, yB] of UB.entries()) jB(yB, PB[VB], xB + (VB + .5) * GB, VB % 2 === 0)
        }(BB, oB, kB, lB.layoutHeight)
    }

    function HB(BB, TB) {
      return Array.isArray(BB) ? BB.slice(0, TB).filter((BB => BB && Number.isFinite(BB.rank) && Number.isFinite(BB.value))) : []
    }

    function EB(BB, TB) {
      const dB = [];
      let VB = !1;
      return BB.forEach(((yB, pB) => {
        if (null !== TB && yB.value === TB.value) return void dB.push(TB.rank);
        const lB = pB > 0 && yB.value === BB[pB - 1].value;
        lB || (VB = 0 === pB && 1 !== yB.rank), dB.push(lB && !VB ? dB[pB - 1] : yB.rank)
      })), dB
    }
  },
  37829: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      e: () => pB
    });
    const VB = 32;

    function yB(BB) {
      return Array.from(BB).length
    }

    function pB(BB) {
      const TB = [""];
      let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        yB = "";
      const pB = () => {
        TB.push(""), dB = 0, yB = ""
      };
      for (const lB of BB.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(lB)) pB();
        else if (/^\s+$/.test(lB)) yB += lB;
      else if (lB.length > 0) {
        const BB = Array.from(lB);
        dB > 0 && dB + yB.length + BB.length > VB && pB(), TB[TB.length - 1] += yB, dB += yB.length, yB = "";
        for (const yB of BB) dB >= VB && pB(), TB[TB.length - 1] += yB, dB++
      }
      return TB[TB.length - 1] += yB, TB
    }
  },
  38056: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB
    });
    var VB = dB(35634),
      yB = dB.n(VB);
    const pB = [1, 1, 1];

    function lB(BB) {
      if (!BB) return [...pB];
      try {
        const [TB, dB, VB] = yB()(BB).rgb().array();
        return [TB / 255, dB / 255, VB / 255]
      } catch (TB) {
        return console.warn(`Invalid groundArrowPath colour "${BB}":`, TB), [...pB]
      }
    }
  },
  33435: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      f: () => JB,
      h: () => lB,
      l: () => yB,
      n: () => VB
    });
    const VB = {
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
      yB = "/textures/dayNight/sun.png",
      pB = "/textures/dayNight/moon.png",
      lB = "/textures/dayNight/stars",
      JB = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38125: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB,
      h: () => kB,
      l: () => VB,
      m: () => YB,
      q: () => yB,
      u: () => gB,
      w: () => JB,
      y: () => lB
    });
    const VB = ["linear", "easeIn", "easeOut", "easeInOut"],
      yB = ["movement", "camera", "cursor"],
      pB = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function lB(BB, TB) {
      return JB(BB, TB, pB)
    }

    function JB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (BB === TB || Number.isNaN(BB) && Number.isNaN(TB)) return !0;
      if ("object" !== typeof BB || "object" !== typeof TB || null === BB || null === TB || Array.isArray(BB) !== Array.isArray(TB)) return !1;
      const VB = BB,
        yB = TB;
      for (const pB of new Set([...Object.keys(VB), ...Object.keys(yB)]))
        if (!dB.includes(pB) && !JB(VB[pB], yB[pB])) return !1;
      return !0
    }
    const YB = {
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
      gB = "^-[1-9][0-9]*$",
      oB = "^#[0-9a-fA-F]{6}$",
      kB = "#000000"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);