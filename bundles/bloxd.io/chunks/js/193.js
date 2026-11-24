export const id = 193;
export const ids = [193];
export const modules = {
  39222: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    class QB {
      constructor(BB, jB) {
        this.read = BB, this.apply = jB, this.release = null
      }
      turn(BB, jB) {
        const zB = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: jB,
          forcedCameraDirection: [BB[0], BB[1], BB[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), jB + 100),
          transitionMs: zB
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
  38748: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      h: () => nB
    });
    const QB = new Map;

    function nB(BB, jB) {
      QB.set(BB, jB)
    }

    function dB(BB) {
      return BB ? QB.get(BB) : void 0
    }
  },
  39686: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    var QB = zB(38298);

    function nB(BB, jB, zB) {
      var nB, dB, IB, NB, uB, UB, aB;
      const pB = (0, QB.c)(BB, jB, zB[0], zB[1], zB[2]),
        rB = pB ? null !== (nB = pB.textCell) && void 0 !== nB ? nB : pB.rect.anchor : zB,
        sB = jB(rB[0], rB[1], rB[2]);
      return {
        pos: [zB[0], zB[1], zB[2]],
        noticeboardSpan: pB && {
          width: pB.rect.width,
          height: pB.rect.height
        },
        text: null !== (dB = null === sB || void 0 === sB || null === (IB = sB.persisted) || void 0 === IB || null === (NB = IB.shared) || void 0 === NB ? void 0 : NB.text) && void 0 !== dB ? dB : "",
        textSize: null !== (uB = null === sB || void 0 === sB || null === (UB = sB.persisted) || void 0 === UB || null === (aB = UB.shared) || void 0 === aB ? void 0 : aB.textSize) && void 0 !== uB ? uB : null
      }
    }
  },
  38592: (BB, jB, zB) => {
    function QB(BB) {
      switch (BB.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    zB.d(jB, {
      c: () => nB,
      f: () => dB,
      i: () => QB
    });
    const nB = 4,
      dB = 3
  },
  39253: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      e: () => dB
    });
    var QB = zB(376);
    const nB = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class dB {
      constructor(BB) {
        this.importGame = BB, this.loads = new Map, this.loaded = new Map
      }
      load(BB) {
        const jB = (0, QB.Sb)(BB);
        if (!nB.has(jB)) return Promise.resolve(void 0);
        let zB = this.loads.get(jB);
        return zB || (zB = this.importGame(jB).then((BB => {
          const zB = BB.default;
          if ("function" !== typeof zB) throw new Error(`${jB}'s client code has no default-exported factory`);
          return this.loaded.set(jB, zB), zB
        })).catch((BB => {
          throw this.loads.delete(jB), BB
        })), this.loads.set(jB, zB)), zB
      }
      loadedFactory(BB) {
        const jB = (0, QB.Sb)(BB);
        if (!nB.has(jB)) return;
        const zB = this.loaded.get(jB);
        if (!zB) throw new Error(`${jB}'s client code started before it loaded`);
        return zB
      }
    }
  },
  39695: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB
    });
    var QB = zB(9366),
      nB = zB(34264),
      dB = zB(3402);

    function IB(BB) {
      if (BB === QB.b) return 0;
      const jB = (0, dB.c)(BB);
      if (void 0 !== jB && jB <= nB.MAX_BLOCK_ID) return jB;
      const zB = (0, dB.c)(BB.split("|")[0]);
      if (void 0 !== zB && zB <= nB.MAX_BLOCK_ID && (0, nB.rootMetaDescOf)(zB) === BB) return zB;
      throw new Error(`Invalid block name. You sent ${BB}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39298: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB
    });
    var QB = zB(28);
    class nB {
      constructor(BB) {
        this.screen = BB, this.hidesHud = !1
      }
      show(BB, jB) {
        this.screen.setFade(BB.colour, BB.alpha), this.screen.setLetterbox(!0 === jB.letterbox, BB.alpha < 1), this.setHudHidden(!0 === jB.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(BB) {
        this.hidesHud !== BB && (this.hidesHud = BB, QB.c.set({
          isUiHiddenByCamera: BB
        }))
      }
    }
  },
  39274: (BB, jB, zB) => {
    zB.d(jB, {
      C: () => NB,
      E: () => aB,
      d: () => QB,
      g: () => rB,
      h: () => pB,
      i: () => IB,
      m: () => JB,
      q: () => uB,
      u: () => mB,
      y: () => UB
    });
    const QB = Math.PI / 2 - .001,
      nB = 2 * Math.PI,
      dB = 1e-9;

    function IB(BB, jB) {
      jB.heading = BB.heading, jB.pitch = BB.pitch
    }

    function NB(BB, jB) {
      const zB = jB - BB;
      return zB - nB * Math.floor((zB + Math.PI) / nB)
    }

    function uB(BB, jB, zB) {
      return BB + NB(BB, jB) * zB
    }

    function UB(BB) {
      if (!Number.isFinite(BB)) return BB;
      const jB = BB - nB * Math.floor(BB / nB);
      return jB < nB ? jB : 0
    }

    function aB(BB, jB) {
      return BB + NB(BB, jB)
    }

    function pB(BB) {
      return Math.max(-QB, Math.min(QB, BB))
    }

    function rB(BB, jB, zB) {
      const QB = Math.cos(jB);
      return zB[0] = QB * Math.sin(BB), zB[1] = -Math.sin(jB), zB[2] = QB * Math.cos(BB), zB
    }

    function sB(BB, jB, zB, QB) {
      const nB = Math.sqrt(BB * BB + zB * zB);
      return nB < dB && Math.abs(jB) < dB || (nB >= dB && (QB.heading = Math.atan2(BB, zB)), QB.pitch = pB(Math.atan2(-jB, nB) + 0)), QB
    }

    function JB(BB, jB) {
      return sB(BB[0], BB[1], BB[2], jB)
    }

    function mB(BB, jB, zB) {
      return sB(jB[0] - BB[0], jB[1] - BB[1], jB[2] - BB[2], zB)
    }
  },
  39289: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      h: () => nB
    });
    var QB = zB(39274);

    function nB(BB) {
      var jB;
      const zB = "default" === BB.mode ? "movement" : null !== (jB = BB.playerFacing) && void 0 !== jB ? jB : "movement";
      return "cursor" === zB ? {
        facing: zB,
        mouseTurns: null
      } : {
        facing: zB,
        mouseTurns: "default" !== BB.mode && void 0 !== BB.playerLook ? "look" : "view"
      }
    }

    function dB(BB, jB, zB, nB, dB, IB) {
      return IB.bD = 0, IB.RD = 0, IB.pointedAt = void 0, void 0 !== nB ? dB ? (IB.pointedAt = nB, BB) : (0, QB.y)(nB.heading) : dB ? (IB.bD = jB, IB.RD = zB, BB) : (0, QB.y)(BB + jB)
    }
  },
  39279: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => eB
    });
    var QB = zB(39282),
      nB = zB(39274),
      dB = zB(37071);

    function IB(BB, jB, zB, QB) {
      if (!(QB > 0)) return jB;
      const nB = jB > BB ? Math.min(jB, BB + zB / QB) : Math.max(jB, BB - zB / QB);
      return Math.abs(jB - nB) < 1e-9 ? jB : nB
    }
    class NB {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: QB.f,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(BB) {
        !this.isGoingOut() && this.sinceTurnMs < QB.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: BB
        } : (this.waiting = null, this.startOut(BB))
      }
      fadeIn(BB) {
        this.isGoingOut() ? this.sinceTurnMs < QB.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: BB
        } : (this.waiting = null, this.startIn(BB)) : this.waiting = null
      }
      advance(BB) {
        const jB = this.waiting;
        if (null === jB) return this.step(BB);
        const zB = QB.k.minFadeTurnMs - this.sinceTurnMs;
        if (zB > BB) return this.step(BB);
        const nB = this.step(zB);
        return this.waiting = null, "out" === jB.turn ? this.startOut(jB.transition) : this.startIn(jB.minMs), this.step(BB - zB) || nB
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(BB) {
        ("in" === this.phase || null === this.phase && this.clearMs < QB.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = BB.colour), this.outMs = BB.outMs, this.holdMs = BB.holdMs, this.inMs = BB.inMs
      }
      startIn(BB) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(BB, this.inMs)
      }
      step(BB) {
        const jB = this.screen;
        this.sinceTurnMs += BB, null === this.phase && (this.clearMs += BB);
        let zB = !1,
          nB = BB;
        if ("out" === this.phase) {
          const QB = (1 - jB.alpha) * this.outMs;
          if (jB.alpha = IB(jB.alpha, 1, BB, this.outMs), jB.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, nB = Math.max(0, BB - QB), zB = !0
        }
        let dB = BB;
        if ("hold" === this.phase) {
          this.heldMs += nB;
          const BB = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - QB.k.minFadeTurnMs);
          if (BB < 0 || zB) return zB;
          this.phase = "in", this.sinceTurnMs = BB, dB = BB
        }
        return "in" === this.phase && (jB.alpha = IB(jB.alpha, 0, dB, this.inMs), jB.alpha <= 0 && (this.phase = null, this.clearMs = 0)), zB
      }
    }
    var uB = zB(39265),
      UB = zB(39286),
      aB = zB(1948),
      pB = zB(36651);

    function rB(BB, jB) {
      for (let zB = 0; zB < jB.length; zB++) jB[zB] = BB[zB]
    }

    function sB(BB, jB) {
      var zB;
      return null !== (zB = BB.fov) && void 0 !== zB ? zB : jB.getDefaultFov()
    }

    function JB(BB, jB, zB, QB, nB) {
      const dB = 2 / QB,
        IB = Math.exp(-dB * nB);
      for (let NB = 0; NB < BB.length; NB++) {
        const QB = BB[NB] - zB[NB],
          uB = (jB[NB] + dB * QB) * nB;
        BB[NB] = zB[NB] + (QB + uB) * IB, jB[NB] = (jB[NB] - dB * uB) * IB
      }
    }
    class mB {
      constructor(BB, jB, zB, QB) {
        var dB, IB, NB, uB, UB;
        this.settings = BB, this.zr = jB, this.targets = zB, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Hy = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, nB.y)((0, aB.p)(null !== (dB = BB.viewHeading) && void 0 !== dB ? dB : 0)),
          pitch: (0, nB.h)((0, aB.p)(null !== (IB = BB.viewElevation) && void 0 !== IB ? IB : 45))
        }, this.closestDistance = null !== (NB = BB.closestDistance) && void 0 !== NB ? NB : Math.min(6, null !== (uB = BB.furthestDistance) && void 0 !== uB ? uB : 1 / 0), this.furthestDistance = null !== (UB = BB.furthestDistance) && void 0 !== UB ? UB : Math.max(64, this.closestDistance);
        const pB = (0, nB.g)(this.base.heading, this.base.pitch, this.forward),
          rB = QB.position,
          sB = this.closestDistance;
        this.goal = [rB[0] + pB[0] * sB, rB[1] + pB[1] * sB, rB[2] + pB[2] * sB, sB, this.base.heading, this.base.pitch]
      }
      update(BB, jB, zB) {
        var QB, dB;
        this.placeGoal(null !== (QB = this.settings.fov) && void 0 !== QB ? QB : this.zr.getBaseFov()), this.goal[4] = (0, nB.E)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const IB = null !== (dB = this.settings.smoothMs) && void 0 !== dB ? dB : 400;
        !this.started || IB < 1 ? (rB(this.goal, this.smoothed), this.Hy.fill(0), this.started = !0) : JB(this.smoothed, this.Hy, this.goal, IB, BB), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, nB.h)(this.smoothed[5]), jB.apply(this.angles, zB);
        const NB = (0, nB.g)(zB.heading, zB.pitch, this.forward);
        for (let nB = 0; nB < 3; nB++) zB.position[nB] = this.smoothed[nB] - NB[nB] * this.smoothed[3];
        zB.fov = sB(this.settings, this.zr)
      }
      continueFrom(BB) {
        BB instanceof mB && (rB(BB.goal, this.goal), rB(BB.smoothed, this.smoothed), rB(BB.Hy, this.Hy), this.framedTargets = BB.framedTargets, this.started = BB.started)
      }
      reset() {
        this.Hy.fill(0), this.started = !1
      }
      placeGoal(BB) {
        var jB;
        let zB = 0;
        for (const aB of this.settings.targets) {
          const BB = this.targets.currentAimPoint(aB);
          BB && (0, uB.g)(BB, this.pointAt(zB++))
        }
        if (zB > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const BB = this.targets.aimPoint(this.zr.localPlayerId);
          BB && (0, uB.g)(BB, this.pointAt(zB++))
        }
        const QB = this.goal;
        if (0 === zB) return void(QB[3] = this.withinDistances(QB[3]));
        for (let uB = 0; uB < 3; uB++) {
          let BB = 1 / 0,
            jB = -1 / 0;
          for (let QB = 0; QB < zB; QB++) BB = Math.min(BB, this.points[QB][uB]), jB = Math.max(jB, this.points[QB][uB]);
          QB[uB] = (BB + jB) / 2
        }
        let nB = 0;
        for (let uB = 0; uB < zB; uB++) {
          const BB = this.points[uB];
          nB = Math.max(nB, Math.hypot(BB[0] - QB[0], BB[1] - QB[1], BB[2] - QB[2]))
        }
        const dB = Math.tan((0, aB.p)(BB) / 2),
          IB = Math.atan(dB * (!0 === this.settings.letterbox ? pB.e : 1)),
          NB = Math.atan(dB * this.zr.getAspectRatio()),
          UB = (nB + (null !== (jB = this.settings.padding) && void 0 !== jB ? jB : 2)) / Math.sin(Math.min(IB, NB));
        QB[3] = this.withinDistances(UB)
      }
      withinDistances(BB) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, BB))
      }
      pointAt(BB) {
        return BB === this.points.length && this.points.push([0, 0, 0]), this.points[BB]
      }
    }
    class yB {
      constructor(BB) {
        this.limits = BB, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(BB) {
        this.limits && (this.yawOffset = BB.yawOffset, this.pitchOffset = BB.pitchOffset, this.idleMs = BB.idleMs)
      }
      update(BB, jB) {
        const zB = this.limits;
        if (!zB) return;
        const QB = Number.isFinite(jB.bD) ? jB.bD : 0,
          nB = Number.isFinite(jB.RD) ? jB.RD : 0;
        if (jB.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: jB.pointedAt.heading,
          pitch: jB.pointedAt.pitch
        };
        else if (0 !== QB || 0 !== nB) this.idleMs = 0, this.yawOffset += QB, this.pitchOffset += nB;
        else {
          const jB = Math.max(0, this.idleMs + BB - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += BB, void 0 !== zB.returnMs && jB > 0) {
            const BB = zB.returnMs > 0 ? Math.exp(-3 * jB / zB.returnMs) : 0;
            this.yawOffset *= BB, this.pitchOffset *= BB
          }
        }
        this.clampOffsets(zB)
      }
      clampOffsets(BB) {
        if (BB.maxYaw >= 180) this.yawOffset = (0, nB.C)(0, this.yawOffset);
        else {
          const jB = (0, aB.p)(BB.maxYaw);
          this.yawOffset = Math.max(-jB, Math.min(jB, this.yawOffset))
        }
        const jB = (0, aB.p)(BB.maxPitch);
        this.pitchOffset = Math.max(-jB, Math.min(jB, this.pitchOffset))
      }
      apply(BB, jB) {
        this.pointedAt && this.limits && (this.yawOffset = (0, nB.C)(BB.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - BB.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const zB = (0, nB.h)(BB.pitch + this.pitchOffset);
        this.pitchOffset = zB - BB.pitch, jB.heading = (0, nB.y)(BB.heading + this.yawOffset), jB.pitch = zB
      }
      unapply(BB, jB) {
        jB.heading = (0, nB.y)(BB.heading - this.yawOffset), jB.pitch = (0, nB.h)(BB.pitch - this.pitchOffset)
      }
    }
    const kB = 1e-6;

    function GB(BB) {
      return Math.sqrt(BB[0] * BB[0] + BB[1] * BB[1] + BB[2] * BB[2])
    }

    function LB(BB, jB, zB, QB, nB) {
      const dB = nB * nB,
        IB = dB * nB;
      return (2 * IB - 3 * dB + 1) * BB + (IB - 2 * dB + nB) * jB + (-2 * IB + 3 * dB) * zB + (IB - dB) * QB
    }

    function gB(BB, jB, zB, QB, nB) {
      const dB = nB * nB;
      return (6 * dB - 6 * nB) * BB + (3 * dB - 4 * nB + 1) * jB + (-6 * dB + 6 * nB) * zB + (3 * dB - 2 * nB) * QB
    }

    function tB(BB, jB) {
      const zB = jB[0] - BB[0],
        QB = jB[1] - BB[1],
        nB = jB[2] - BB[2];
      return Math.sqrt(zB * zB + QB * QB + nB * nB)
    }

    function SB(BB, jB, zB, QB, nB, dB) {
      for (let IB = 0; IB < 3; IB++) dB[IB] = nB ? BB[IB] * QB : zB[IB] - jB[IB];
      return nB && function(BB, jB) {
        const zB = GB(BB);
        if (zB > jB) {
          const QB = jB / zB;
          BB[0] *= QB, BB[1] *= QB, BB[2] *= QB
        }
      }(dB, 3 * tB(jB, zB)), dB
    }

    function MB(BB, jB, zB, QB) {
      for (let nB = 0; nB < 3; nB++) QB[nB] = 6 * (jB[nB] - BB[nB]) - 2 * zB[nB];
      if (GB(QB) < kB)
        for (let nB = 0; nB < 3; nB++) QB[nB] = jB[nB] - BB[nB];
      return QB
    }

    function EB(BB, jB) {
      return [2 * jB[0] - BB[0], 2 * jB[1] - BB[1], 2 * jB[2] - BB[2]]
    }

    function iB(BB, jB, zB, QB, nB, dB, IB) {
      if (!dB && !IB) return 0;
      const NB = dB ? BB : 2 * jB - zB,
        uB = IB ? zB : 2 * jB - BB,
        UB = dB ? QB : nB,
        aB = IB ? nB : QB,
        pB = (jB - NB) / UB,
        rB = (uB - jB) / aB;
      if (pB * rB <= 0) return 0;
      const sB = (uB - NB) / (UB + aB),
        JB = 3 * Math.min(Math.abs(pB), Math.abs(rB));
      return Math.max(-JB, Math.min(JB, sB))
    }

    function qB(BB, jB, zB, QB, nB, dB, IB) {
      const {
        u: NB,
        segmentMs: uB
      } = BB;
      if (!BB.curved) return zB + (QB - zB) * NB;
      return LB(zB, iB(jB, zB, QB, BB.beforeMs, uB, dB, !0) * uB, QB, iB(zB, QB, nB, uB, BB.afterMs, !0, IB) * uB, NB)
    }

    function fB(BB) {
      return Math.abs(BB.pitch) >= nB.d
    }
    class oB {
      constructor(BB, jB, zB, QB, nB) {
        this.nodes = BB, this.prevNodes = zB, this.nextNodes = QB, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = BB.map(((BB, zB) => this.nodeTangent(jB, nB, zB)))
      }
      sample(BB, jB, zB) {
        const {
          index: QB,
          toIndex: dB,
          segmentMs: IB,
          curved: NB
        } = BB, uB = this.fromAngles, UB = this.toAngles, aB = this.nodeAngles(QB, zB.position, jB, uB), pB = this.nodeAngles(dB, zB.position, jB, UB);
        if (IB > 0 && "aim" !== aB && "aim" !== pB && this.liveTangent(BB, uB)) return zB.heading = (0, nB.y)(uB.heading), void(zB.pitch = uB.pitch);
        if ("none" === aB && "none" === pB) return;
        !NB && IB > 0 && ("tangent" === aB && this.liveTangent(BB, uB), "tangent" === pB && this.liveTangent(BB, UB)), "none" === aB ? (0, nB.i)(UB, uB) : "none" === pB && (0, nB.i)(uB, UB);
        const rB = NB && BB.beforeIndex >= 0 && "none" !== this.nodeAngles(BB.beforeIndex, zB.position, jB, this.beforeAngles),
          sB = NB && BB.afterIndex >= 0 && "none" !== this.nodeAngles(BB.afterIndex, zB.position, jB, this.afterAngles),
          JB = (0, nB.E)(uB.heading, UB.heading),
          mB = qB(BB, rB ? (0, nB.E)(uB.heading, this.beforeAngles.heading) : 0, uB.heading, JB, sB ? (0, nB.E)(JB, this.afterAngles.heading) : 0, rB, sB);
        zB.heading = (0, nB.y)(mB), zB.pitch = (0, nB.h)(qB(BB, this.beforeAngles.pitch, uB.pitch, UB.pitch, this.afterAngles.pitch, rB, sB))
      }
      nodeAngles(BB, jB, zB, QB) {
        const nB = this.rawNodeAngles(BB, jB, zB, QB);
        return "none" !== nB && fB(QB) && !this.borrowHeading(this.prevNodes[BB], jB, zB, QB) && this.borrowHeading(this.nextNodes[BB], jB, zB, QB), nB
      }
      borrowHeading(BB, jB, zB, QB) {
        const nB = this.borrowedAngles;
        return !(BB < 0 || "none" === this.rawNodeAngles(BB, jB, zB, nB) || fB(nB)) && (QB.heading = nB.heading, !0)
      }
      rawNodeAngles(BB, jB, zB, QB) {
        const dB = this.nodes[BB].keyframe;
        if (dB.lookDirection) return (0, nB.m)(dB.lookDirection, QB), "aim";
        if (void 0 !== dB.lookAt) {
          const BB = zB(dB.lookAt);
          if (BB) return (0, nB.u)(jB, BB, QB), "aim"
        }
        const IB = this.tangents[BB];
        return IB ? ((0, nB.i)(IB, QB), "tangent") : "none"
      }
      liveTangent(BB, jB) {
        const zB = this.nodes[BB.index].position,
          QB = this.nodes[BB.toIndex].position,
          dB = this.derivative;
        for (let nB = 0; nB < 3; nB++) dB[nB] = gB(zB[nB], BB.fromTangent[nB], QB[nB], BB.toTangent[nB], BB.u);
        return GB(dB) > 1e-9 ? ((0, nB.m)(dB, jB), !0) : !(tB(zB, QB) < kB) && ((0, nB.m)(MB(zB, QB, BB.u < .5 ? BB.toTangent : BB.fromTangent, dB), jB), !0)
      }
      nodeTangent(BB, jB, zB) {
        var QB;
        const dB = BB[zB];
        if (GB(dB) > 1e-9) return (0, nB.m)(dB, {
          heading: 0,
          pitch: 0
        });
        const IB = null !== (QB = this.restDirectionTo(zB, zB + 1, BB, jB)) && void 0 !== QB ? QB : this.restDirectionTo(zB, zB - 1, BB, jB);
        return IB ? (0, nB.m)(IB, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(BB, jB, zB, QB) {
        const nB = this.nodes[BB],
          dB = this.nodes[jB];
        if (!dB || tB(nB.position, dB.position) < kB) return null;
        const [IB, NB] = jB > BB ? [nB, dB] : [dB, nB], uB = SB(zB[jB], IB.position, NB.position, NB.timeMs - IB.timeMs, QB, [0, 0, 0]);
        return MB(IB.position, NB.position, uB, [0, 0, 0])
      }
    }

    function HB(BB, jB) {
      const zB = BB.lookDirection || jB.lookDirection ? function(BB, jB) {
        if (!BB || !jB) return BB === jB;
        const zB = GB(BB),
          QB = GB(jB);
        return Math.hypot(BB[0] / zB - jB[0] / QB, BB[1] / zB - jB[1] / QB, BB[2] / zB - jB[2] / QB) < kB
      }(BB.lookDirection, jB.lookDirection) : (QB = BB.lookAt, nB = jB.lookAt, "object" !== typeof QB || "object" !== typeof nB ? QB === nB : tB(QB, nB) < kB);
      var QB, nB;
      return tB(BB.position, jB.position) < kB && BB.fov === jB.fov && zB
    }
    class DB {
      constructor(BB, jB, zB) {
        if (this.smooth = jB, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
        for (let dB = 1; dB < BB.length; dB++)
          if (!(BB[dB].timeMs > BB[dB - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = BB.map((BB => {
          var jB;
          return {
            timeMs: BB.timeMs,
            position: [...BB.position],
            keyframe: BB,
            easing: (0, dB.r)(null !== (jB = BB.easing) && void 0 !== jB ? jB : "linear")
          }
        }));
        const QB = this.nodes[0],
          nB = this.nodes[this.nodes.length - 1],
          IB = zB && this.nodes.length > 1;
        IB && !HB(QB.keyframe, nB.keyframe) && this.nodes.push({
          ...QB,
          timeMs: nB.timeMs + (nB.timeMs - QB.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = IB ? this.nodes[this.nodes.length - 1].timeMs - QB.timeMs : 0, this.prevNodes = this.nodes.map(((BB, jB) => this.neighbour(jB, -1))), this.nextNodes = this.nodes.map(((BB, jB) => this.neighbour(jB, 1))), this.prevGaps = this.prevNodes.map(((BB, jB) => BB >= 0 ? this.gapMs(jB, -1) : 0)), this.nextGaps = this.nextNodes.map(((BB, jB) => BB >= 0 ? this.gapMs(jB, 1) : 0)), this.velocities = this.nodes.map(((BB, jB) => {
          const zB = this.prevNodes[jB],
            QB = this.nextNodes[jB];
          return function(BB, jB, zB, QB, nB, dB) {
            if (dB[0] = 0, dB[1] = 0, dB[2] = 0, !BB && !zB) return dB;
            const IB = null !== BB && void 0 !== BB ? BB : EB(null !== zB && void 0 !== zB ? zB : jB, jB),
              NB = null !== zB && void 0 !== zB ? zB : EB(null !== BB && void 0 !== BB ? BB : jB, jB),
              uB = BB ? QB : nB,
              UB = zB ? nB : QB,
              aB = tB(IB, jB),
              pB = tB(jB, NB);
            if (aB < kB || pB < kB) return dB;
            const rB = Math.sqrt(aB),
              sB = Math.sqrt(pB),
              JB = (rB + sB) / (uB + UB);
            for (let mB = 0; mB < 3; mB++) {
              const BB = (jB[mB] - IB[mB]) / rB - (NB[mB] - IB[mB]) / (rB + sB) + (NB[mB] - jB[mB]) / sB;
              dB[mB] = BB * JB
            }
            return dB
          }(zB >= 0 ? this.nodes[zB].position : null, BB.position, QB >= 0 ? this.nodes[QB].position : null, this.prevGaps[jB], this.nextGaps[jB], [0, 0, 0])
        })), this.aim = new oB(this.nodes, this.velocities, this.prevNodes, this.nextNodes, jB)
      }
      sample(BB, jB, zB, QB) {
        const nB = this.findSegment(this.pathTime(BB));
        this.samplePosition(nB, QB.position), this.aim.sample(nB, jB, QB);
        const {
          beforeIndex: dB,
          afterIndex: IB
        } = nB;
        QB.fov = qB(nB, dB >= 0 ? this.fovAt(dB, zB) : 0, this.fovAt(nB.index, zB), this.fovAt(nB.toIndex, zB), IB >= 0 ? this.fovAt(IB, zB) : 0, dB >= 0, IB >= 0)
      }
      pathTime(BB) {
        const jB = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || BB <= jB) return BB;
        const zB = BB - jB;
        return jB + zB - this.loopMs * Math.floor(zB / this.loopMs)
      }
      findSegment(BB) {
        const jB = this.nodes,
          zB = this.segment;
        let QB = zB.index;
        for (BB < jB[QB].timeMs && (QB = 0); QB < jB.length - 2 && jB[QB + 1].timeMs <= BB;) QB++;
        const nB = Math.min(QB + 1, jB.length - 1),
          IB = jB[nB].timeMs - jB[QB].timeMs;
        return zB.index = QB, zB.toIndex = nB, zB.segmentMs = IB, zB.u = IB > 0 ? (0, dB.o)((BB - jB[QB].timeMs) / IB, jB[QB].easing) : 1, zB.curved = this.smooth && IB > 0, zB.beforeIndex = this.prevNodes[QB], zB.afterIndex = this.nextNodes[nB], zB.beforeMs = this.prevGaps[QB], zB.afterMs = this.nextGaps[nB], zB
      }
      samplePosition(BB, jB) {
        const {
          fromTangent: zB,
          toTangent: QB,
          curved: nB
        } = BB, dB = this.nodes[BB.index].position, IB = this.nodes[BB.toIndex].position;
        SB(this.velocities[BB.index], dB, IB, BB.segmentMs, nB, zB), SB(this.velocities[BB.toIndex], dB, IB, BB.segmentMs, nB, QB);
        const NB = BB.u;
        for (let uB = 0; uB < 3; uB++) jB[uB] = nB ? LB(dB[uB], zB[uB], IB[uB], QB[uB], NB) : dB[uB] + (IB[uB] - dB[uB]) * NB
      }
      fovAt(BB, jB) {
        var zB;
        return null !== (zB = this.nodes[BB].keyframe.fov) && void 0 !== zB ? zB : jB
      }
      neighbour(BB, jB) {
        const zB = this.nodes.length - 1,
          QB = BB + jB;
        return QB >= 0 && QB <= zB ? QB : this.loopMs <= 0 || zB < 2 ? -1 : QB < 0 ? zB - 1 : 1
      }
      gapMs(BB, jB) {
        const zB = this.nodes.length - 1;
        if (1 === jB) {
          const jB = BB === zB ? 0 : BB;
          return this.nodes[jB + 1].timeMs - this.nodes[jB].timeMs
        }
        const QB = 0 === BB ? zB : BB;
        return this.nodes[QB].timeMs - this.nodes[QB - 1].timeMs
      }
    }
    class FB {
      constructor(BB) {
        this.zr = BB, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = jB => BB.getEntityPosition(jB), this.readAimPoint = jB => BB.getEntityAimPoint(jB)
      }
      aimPoint(BB) {
        return "string" !== typeof BB ? (0, uB.n)(BB, 3) ? BB : null : this.resolve(BB, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(BB) {
        const jB = "string" === typeof BB ? this.zr.getEntityAimPoint(BB) : BB;
        return jB && (0, uB.n)(jB, 3) ? jB : null
      }
      feetPosition(BB) {
        return this.resolve(BB, this.readFeet, this.lastFeet)
      }
      heading(BB) {
        const jB = this.zr.getEntityHeading(BB);
        if (null !== jB && Number.isFinite(jB)) return this.lastHeadings.set(BB, jB), jB;
        const zB = this.lastHeadings.get(BB);
        return void 0 !== zB ? zB : BB === this.zr.localPlayerId ? 0 : this.heading(this.zr.localPlayerId)
      }
      resolve(BB, jB, zB) {
        const QB = jB(BB);
        let nB = zB.get(BB);
        return QB && (0, uB.n)(QB, 3) ? (nB || (nB = [0, 0, 0], zB.set(BB, nB)), nB[0] = QB[0], nB[1] = QB[1], nB[2] = QB[2], nB) : nB || (BB === this.zr.localPlayerId ? null : this.resolve(this.zr.localPlayerId, jB, zB))
      }
    }

    function YB(BB) {
      return {
        heading: BB.heading,
        pitch: BB.pitch
      }
    }

    function VB(BB, jB) {
      Number.isFinite(BB.heading) && Number.isFinite(BB.pitch) || (0, nB.i)(jB, BB)
    }

    function hB(BB, jB, zB, QB, dB) {
      if (jB) return void(0, nB.m)(jB, dB);
      const IB = QB.aimPoint(zB);
      IB && (0, nB.u)(BB, IB, dB)
    }
    class XB {
      constructor(BB, jB, zB, QB) {
        this.settings = BB, this.zr = jB, this.targets = zB, this.base = void 0, this.base = YB(QB)
      }
      update(BB, jB, zB) {
        var QB;
        const nB = this.settings;
        (0, uB.g)(nB.position, zB.position), hB(nB.position, nB.lookDirection, null !== (QB = nB.lookAt) && void 0 !== QB ? QB : this.zr.localPlayerId, this.targets, this.base), jB.apply(this.base, zB), zB.fov = sB(nB, this.zr)
      }
      continueFrom(BB) {
        BB instanceof XB && (0, nB.i)(BB.base, this.base)
      }
      reset(BB) {
        VB(this.base, BB)
      }
    }
    class ZB {
      constructor(BB, jB, zB, QB) {
        this.settings = BB, this.zr = jB, this.targets = zB, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Hy = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = YB(QB), this.goal = [...QB.position]
      }
      update(BB, jB, zB) {
        var QB, nB, dB;
        const IB = this.settings,
          NB = null !== (QB = IB.target) && void 0 !== QB ? QB : this.zr.localPlayerId,
          UB = this.targets.feetPosition(NB);
        let aB = !1;
        UB && (aB = this.foundFeet && tB(this.lastFeet, UB) > 32 + .1 * BB, (0, uB.g)(UB, this.lastFeet), this.foundFeet = !0, this.placeGoal(UB, NB));
        const pB = null !== (nB = IB.smoothMs) && void 0 !== nB ? nB : 0;
        !this.started || pB < 1 || aB ? ((0, uB.g)(this.goal, this.smoothed), this.Hy.fill(0), this.started = !0) : JB(this.smoothed, this.Hy, this.goal, pB, BB), aB && (this.distance = -1), (0, uB.g)(this.smoothed, zB.position);
        const rB = !0 === IB.avoidTerrain ? this.pullIn(NB, BB, zB) : 1;
        let mB = this.goal;
        if ("target" === IB.offsetSpace) mB = zB.position;
        else if (rB < 1) {
          mB = this.aimOrigin;
          for (let BB = 0; BB < 3; BB++) mB[BB] = zB.position[BB] + (this.goal[BB] - this.smoothed[BB]) * rB
        }
        hB(mB, IB.lookDirection, null !== (dB = IB.lookAt) && void 0 !== dB ? dB : NB, this.targets, this.base), jB.apply(this.base, zB), zB.fov = sB(IB, this.zr)
      }
      continueFrom(BB) {
        BB instanceof ZB && (0, QB.r)(BB.settings.target, this.settings.target) && ((0, nB.i)(BB.base, this.base), (0, uB.g)(BB.goal, this.goal), (0, uB.g)(BB.lastFeet, this.lastFeet), this.foundFeet = BB.foundFeet, (0, uB.g)(BB.smoothed, this.smoothed), (0, uB.g)(BB.Hy, this.Hy), this.started = BB.started, !0 === BB.settings.avoidTerrain && (this.distance = BB.distance))
      }
      reset(BB) {
        VB(this.base, BB), this.Hy.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(BB, jB, zB) {
        const QB = this.targets.aimPoint(BB);
        if (!QB) return 1;
        const nB = zB.position,
          dB = tB(QB, nB);
        if (!(dB > 0)) return 1;
        const IB = this.toCamera;
        for (let uB = 0; uB < 3; uB++) IB[uB] = (nB[uB] - QB[uB]) / dB;
        const NB = function(BB, jB, zB) {
          return BB < 0 || jB < BB ? jB : jB + (BB - jB) * Math.exp(-zB / 150)
        }(this.distance, function(BB, jB, zB, QB) {
          const nB = BB.raycastTerrain(jB, zB, QB);
          return null !== nB && Number.isFinite(nB) ? Math.min(QB, Math.max(0, nB - .2)) : QB
        }(this.zr, QB, IB, dB), jB);
        if (dB - NB < .001) return this.distance = -1, 1;
        this.distance = NB;
        for (let uB = 0; uB < 3; uB++) nB[uB] = QB[uB] + IB[uB] * NB;
        return NB / dB
      }
      placeGoal(BB, jB) {
        const zB = this.settings.offset;
        let QB = zB[0],
          nB = zB[2];
        if ("target" === this.settings.offsetSpace) {
          const BB = this.targets.heading(jB),
            dB = Math.cos(BB),
            IB = Math.sin(BB);
          QB = zB[0] * dB + zB[2] * IB, nB = -zB[0] * IB + zB[2] * dB
        }
        this.goal[0] = BB[0] + QB, this.goal[1] = BB[1] + zB[1], this.goal[2] = BB[2] + nB
      }
    }
    class AB {
      constructor(BB, jB, zB, QB) {
        var nB, dB;
        this.settings = BB, this.zr = jB, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = BB.keyframes.length > 0 ? new DB(BB.keyframes, null === (nB = BB.smooth) || void 0 === nB || nB, null !== (dB = BB.loop) && void 0 !== dB && dB) : null, this.base = (0, uB.d)(QB, (0, uB.j)()), this.resolveTarget = BB => zB.aimPoint(BB)
      }
      update(BB, jB, zB) {
        this.elapsedMs += BB;
        const QB = sB(this.settings, this.zr);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, QB, this.base) : this.base.fov = QB, (0, uB.g)(this.base.position, zB.position), zB.fov = this.base.fov, jB.apply(this.base, zB)
      }
      continueFrom(BB) {
        BB instanceof AB && (0, QB.r)(BB.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = BB.elapsedMs, (0, uB.d)(BB.base, this.base))
      }
      reset(BB) {
        VB(this.base, BB), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function TB(BB, jB) {
      return (0, QB.u)(BB, jB)
    }
    class PB {
      constructor(BB, jB, zB) {
        var QB;
        this.settings = BB, this.zr = jB, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const nB = null !== zB && zB.settings.mode === BB.mode,
          dB = nB ? zB.pose : jB.getDefaultPose();
        this.pose = (0, uB.d)(dB, (0, uB.j)()), this.lastGoodPose = (0, uB.d)(nB ? zB.lastGoodPose : dB, (0, uB.j)()), this.look = new yB(BB.playerLook), this.targets = null !== (QB = null === zB || void 0 === zB ? void 0 : zB.targets) && void 0 !== QB ? QB : new FB(jB);
        const IB = (0, uB.d)(dB, (0, uB.j)());
        nB && zB.look.unapply(IB, IB), this.mode = function(BB, jB, zB, QB) {
          switch (BB.mode) {
            case "fixed":
              return new XB(BB, jB, zB, QB);
            case "follow":
              return new ZB(BB, jB, zB, QB);
            case "path":
              return new AB(BB, jB, zB, QB);
            case "frame":
              return new mB(BB, jB, zB, QB)
          }
        }(BB, jB, this.targets, IB), nB && (this.look.continueFrom(zB.look), this.mode.continueFrom(zB.mode))
      }
      update(BB, jB) {
        return this.look.update(BB, jB), this.mode.update(BB, this.look, this.pose), (0, uB.k)(this.pose) ? (0, uB.d)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, uB.d)(this.lastGoodPose, this.pose), this.mode.reset((0, uB.k)(this.lastGoodPose) ? this.lastGoodPose : this.zr.getDefaultPose())), this.pose
      }
    }

    function WB(BB) {
      return [0, 0, BB[2], BB[3]]
    }
    class eB {
      constructor(BB) {
        this.zr = BB, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new NB, this.shot = null, this.blend = null, this.mixed = (0, uB.j)(), this.output = (0, uB.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(BB) {
        const jB = (0, UB.d)(BB);
        if ((0, QB.r)(jB, this.pending ? this.pending.settings : this.settings)) return;
        const zB = TB(this.settings, jB);
        if (void 0 !== jB.transition && !zB) return this.pending = {
          settings: jB,
          shot: "default" === jB.mode ? null : new PB(jB, this.zr, null)
        }, void this.fade.fadeOut(jB.transition);
        const nB = null !== this.pending;
        this.pending = null, !nB && zB || this.fade.fadeIn(QB.k.minTransitionFadeMs), this.show(jB, !1)
      }
      show(BB, jB) {
        var zB, nB;
        if ((0, QB.r)(BB, this.settings)) return;
        const IB = !jB && TB(this.settings, BB);
        this.settings = BB;
        const NB = null !== this.blend && this.blend.elapsedMs > 0,
          UB = (0, uB.d)(this.hasOutput ? this.output : this.zr.getDefaultPose(), (0, uB.j)());
        if (this.shot = "default" === BB.mode ? null : new PB(BB, this.zr, jB ? null : this.shot), IB) return;
        const aB = jB || !this.shot && !this.hasOutput ? 0 : null !== (zB = BB.blendInMs) && void 0 !== zB ? zB : 0;
        if (aB <= 0) return void(this.blend = null);
        const pB = (0, dB.r)(null !== (nB = BB.blendEasing) && void 0 !== nB ? nB : "easeInOut");
        this.blend = {
          from: UB,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: aB,
          easing: NB ? WB(pB) : pB
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
      update(BB, jB) {
        const zB = Number.isFinite(BB) && BB > 0 ? BB : 0;
        if (this.fade.advance(zB) && null !== this.pending) {
          const {
            settings: BB
          } = this.pending;
          this.pending = null, this.show(BB, !0)
        }
        this.loadingPositions.length = 0;
        const QB = this.pending;
        if (null !== QB && void 0 !== QB && QB.shot) {
          const BB = "path" === QB.settings.mode ? 0 : zB;
          this.noteLoadingPosition(QB.shot.update(BB, uB.c).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const IB = this.shot ? this.shot.update(zB, jB) : this.zr.getDefaultPose();
        this.shot && this.noteLoadingPosition(IB.position);
        const NB = this.blend;
        if (!NB) return this.writeOutput(IB);
        NB.elapsedMs += zB;
        const UB = Math.min(1, NB.elapsedMs / NB.durationMs);
        if (NB.headingDelta = Number.isFinite(NB.headingDelta) ? (0, nB.E)(NB.headingDelta, IB.heading - NB.from.heading) : (0, nB.C)(NB.from.heading, IB.heading), (0, uB.r)(NB.from, IB, NB.headingDelta, (0, dB.o)(UB, NB.easing), this.mixed), UB >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else NB.fromScripted && this.noteLoadingPosition(NB.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(BB) {
        if (BB.every(Number.isFinite)) {
          const jB = this.loadingPositions;
          jB.push((0, uB.g)(BB, this.loadingSlots[jB.length]))
        }
      }
      writeOutput(BB) {
        const jB = this.output;
        (0, uB.k)(BB) ? (0, uB.d)(BB, jB) : this.hasOutput || (0, uB.d)(this.zr.getDefaultPose(), jB), jB.pitch = (0, nB.h)(jB.pitch);
        const zB = this.zr.getDefaultFov(),
          dB = Number.isFinite(zB) && zB > 0 && zB < 180,
          IB = dB ? Math.min(QB.k.minFov, zB) : QB.k.minFov,
          NB = dB ? Math.max(QB.k.maxFov, zB) : QB.k.maxFov;
        return jB.fov = Number.isFinite(jB.fov) ? Math.min(NB, Math.max(IB, jB.fov)) : NB, this.hasOutput = !0, jB
      }
    }
  },
  39265: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB,
      d: () => NB,
      g: () => IB,
      j: () => dB,
      k: () => UB,
      n: () => uB,
      r: () => aB
    });
    var QB = zB(39274);
    const nB = {
      bD: 0,
      RD: 0
    };

    function dB() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function IB(BB, jB) {
      return jB[0] = BB[0], jB[1] = BB[1], jB[2] = BB[2], jB
    }

    function NB(BB, jB) {
      return IB(BB.position, jB.position), jB.heading = BB.heading, jB.pitch = BB.pitch, jB.fov = BB.fov, jB
    }

    function uB(BB, jB) {
      return Array.isArray(BB) && BB.length === jB && BB.every(Number.isFinite)
    }

    function UB(BB) {
      return uB(BB.position, 3) && Number.isFinite(BB.heading) && Number.isFinite(BB.pitch) && Number.isFinite(BB.fov)
    }

    function aB(BB, jB, zB, nB, dB) {
      for (let QB = 0; QB < 3; QB++) dB.position[QB] = BB.position[QB] + (jB.position[QB] - BB.position[QB]) * nB;
      return dB.heading = (0, QB.y)(BB.heading + zB * nB), dB.pitch = BB.pitch + (jB.pitch - BB.pitch) * nB, dB.fov = BB.fov + (jB.fov - BB.fov) * nB, dB
    }
  },
  39286: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => MB,
      g: () => rB
    });
    var QB = zB(39282),
      nB = zB(39265);
    const dB = QB.g,
      IB = QB.l;

    function NB(BB, jB, zB, QB) {
      return Number.isFinite(BB) ? Math.min(zB, Math.max(jB, BB)) : QB
    }

    function uB(BB, jB, zB) {
      return void 0 !== BB && Number.isFinite(BB) ? Math.min(zB, Math.max(jB, BB)) : void 0
    }

    function UB(BB) {
      const jB = QB.k.maxCoordinate;
      return [Math.min(jB, Math.max(-jB, BB[0])), Math.min(jB, Math.max(-jB, BB[1])), Math.min(jB, Math.max(-jB, BB[2]))]
    }

    function aB(BB) {
      return "string" === typeof BB ? BB : (0, nB.n)(BB, 3) ? UB(BB) : void 0
    }
    const pB = new RegExp(QB.p);

    function rB(BB) {
      return "string" === typeof BB && pB.test(BB)
    }

    function sB(BB) {
      const jB = [];
      if (!Array.isArray(BB)) return jB;
      for (const zB of BB.slice(0, QB.k.maxFrameTargets)) {
        const BB = aB(zB);
        void 0 === BB || "string" === typeof BB && !rB(BB) || jB.push(BB)
      }
      return jB
    }

    function JB(BB) {
      if (!(0, nB.n)(BB, 3)) return;
      const jB = Math.max(Math.abs(BB[0]), Math.abs(BB[1]), Math.abs(BB[2])),
        zB = Math.hypot(BB[0] / jB, BB[1] / jB, BB[2] / jB);
      return 0 === jB || jB * zB < QB.k.minDirectionLength ? void 0 : [BB[0] / jB / zB, BB[1] / jB / zB, BB[2] / jB / zB]
    }

    function mB(BB) {
      if (void 0 !== BB) return "string" === typeof BB ? dB.includes(BB) ? BB : void 0 : (0, nB.n)(BB, 4) ? [NB(BB[0], 0, 1, 0), NB(BB[1], QB.k.minEasingY, QB.k.maxEasingY, 0), NB(BB[2], 0, 1, 1), NB(BB[3], QB.k.minEasingY, QB.k.maxEasingY, 1)] : "linear"
    }

    function yB(BB) {
      if (BB) return {
        maxYaw: NB(BB.maxYaw, 0, QB.k.maxPlayerLook, 0),
        maxPitch: NB(BB.maxPitch, 0, QB.k.maxPlayerLook, 0),
        returnMs: uB(BB.returnMs, 0, QB.k.maxReturnMs)
      }
    }
    const kB = new RegExp(QB.c);

    function GB(BB) {
      var jB;
      if ("object" !== typeof BB || null === BB) return;
      const zB = QB.k.maxTransitionMs,
        nB = QB.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof BB.colour && kB.test(BB.colour) ? BB.colour : QB.f,
        outMs: NB(BB.outMs, nB, zB, nB),
        holdMs: NB(null !== (jB = BB.holdMs) && void 0 !== jB ? jB : 0, 0, zB, 0),
        inMs: NB(BB.inMs, nB, zB, nB)
      }
    }

    function LB(BB) {
      return !0 === BB || void 0
    }

    function gB(BB) {
      if ("object" !== typeof BB || null === BB) return !1;
      const jB = BB.lookAt;
      return Number.isFinite(BB.timeMs) && (0, nB.n)(BB.position, 3) && (void 0 === jB || "string" === typeof jB || (0, nB.n)(jB, 3))
    }

    function tB(BB) {
      return {
        ...BB,
        timeMs: NB(BB.timeMs, 0, QB.k.maxPathMs, 0),
        position: UB(BB.position),
        lookAt: aB(BB.lookAt),
        lookDirection: JB(BB.lookDirection),
        fov: uB(BB.fov, QB.k.minFov, QB.k.maxFov),
        easing: mB(BB.easing)
      }
    }

    function SB(BB) {
      const jB = [];
      if (!Array.isArray(BB)) return jB;
      for (const zB of BB.slice(0, QB.k.maxKeyframes)) {
        if (!gB(zB)) continue;
        const BB = tB(zB);
        (0 === jB.length || BB.timeMs > jB[jB.length - 1].timeMs) && jB.push(BB)
      }
      return jB
    }

    function MB(BB) {
      if ("object" !== typeof BB || null === BB) return {
        mode: "default"
      };
      const jB = {
          blendInMs: uB(BB.blendInMs, 0, QB.k.maxBlendInMs),
          blendEasing: mB(BB.blendEasing),
          transition: GB(BB.transition),
          letterbox: LB(BB.letterbox),
          hideHud: LB(BB.hideHud)
        },
        zB = {
          mode: "default",
          ...jB
        };
      if ("default" === BB.mode || "fixed" === BB.mode && !(0, nB.n)(BB.position, 3)) return zB;
      const dB = {
        ...jB,
        fov: uB(BB.fov, QB.k.minFov, QB.k.maxFov),
        playerFacing: (pB = BB.playerFacing, IB.includes(pB) ? pB : void 0),
        playerLook: yB(BB.playerLook)
      };
      var pB, rB;
      switch (BB.mode) {
        case "fixed":
          return {
            ...BB, ...dB, position: UB(BB.position), lookAt: aB(BB.lookAt), lookDirection: JB(BB.lookDirection)
          };
        case "follow":
          return {
            ...BB, ...dB, target: "string" === typeof BB.target ? BB.target : void 0, lookAt: aB(BB.lookAt), offset: (rB = BB.offset, Array.isArray(rB) ? [NB(rB[0], -QB.k.maxOffset, QB.k.maxOffset, 0), NB(rB[1], -QB.k.maxOffset, QB.k.maxOffset, 0), NB(rB[2], -QB.k.maxOffset, QB.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: JB(BB.lookDirection), smoothMs: uB(BB.smoothMs, 0, QB.k.maxSmoothMs)
          };
        case "path":
          return {
            ...BB, ...dB, keyframes: SB(BB.keyframes)
          };
        case "frame":
          return {
            ...BB, ...dB, targets: sB(BB.targets), viewHeading: uB(BB.viewHeading, -QB.k.maxFrameHeading, QB.k.maxFrameHeading), viewElevation: uB(BB.viewElevation, 0, QB.k.maxFrameElevation), padding: uB(BB.padding, 0, QB.k.maxFrameDistance), closestDistance: uB(BB.closestDistance, 0, QB.k.maxFrameDistance), furthestDistance: uB(BB.furthestDistance, 0, QB.k.maxFrameDistance), smoothMs: uB(BB.smoothMs, 0, QB.k.maxSmoothMs)
          };
        default:
          return zB
      }
    }
  },
  38756: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB
    });
    var QB = zB(1263);

    function nB(BB) {
      const jB = /(\d*\.?\d+)px/.exec(BB);
      return jB ? Number(jB[1]) : null
    }

    function dB(BB) {
      return BB.split(/[\s,]+/).pop()
    }
    let IB = !1;
    const NB = {
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
      drawText: function(BB, jB, QB, NB, uB, UB) {
        if (uB <= 0 || UB <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: aB,
          fontVariant: pB,
          fontWeight: rB,
          fontSize: sB,
          font: JB
        } = this, mB = [aB, pB, rB, `${sB}px`, JB].filter(Boolean).join(" "), yB = [
          [rB, `${sB}px`, dB(JB)].filter(Boolean).join(" "), `${sB}px sans-serif`
        ], kB = BB.font, GB = function(BB, jB, zB) {
          for (const QB of jB) {
            BB.font = QB;
            const jB = nB(BB.font),
              IB = dB(QB);
            if (null !== jB && Math.abs(jB - zB) <= .5 && BB.font.toLowerCase().includes(IB.toLowerCase())) return QB
          }
          return null
        }(BB, [mB, ...yB], sB);
        GB !== mB && function(BB, jB, QB) {
          IB || (IB = !0, Promise.resolve().then((() => zB(1121))).then((zB => {
            let {
              Zm: nB
            } = zB;
            nB(new Error("A canvas didn't take canvasTxt's font"), {
              font: BB,
              Cs: jB,
              drawnWith: null !== QB && void 0 !== QB ? QB : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(mB, kB, GB);
        const LB = nB(BB.font);
        if (null === GB && null !== LB && LB > 0) {
          const zB = sB / LB;
          BB.save();
          try {
            return BB.scale(zB, zB), {
              height: this.drawLines(BB, jB, QB / zB, NB / zB, uB / zB, UB / zB, LB).height * zB
            }
          } finally {
            BB.restore()
          }
        }
        return this.drawLines(BB, jB, QB, NB, uB, UB, sB)
      },
      drawLines: function(BB, jB, zB, nB, dB, IB, NB) {
        const uB = zB + dB,
          UB = nB + IB;
        let aB, pB = nB + IB / 2 + NB / 2;
        "right" === this.align ? (aB = uB, BB.textAlign = "right") : "left" === this.align ? (aB = zB, BB.textAlign = "left") : (aB = zB + dB / 2, BB.textAlign = "center");
        for (const QB of jB) {
          BB.measureText(QB).width >= dB && (jB = jB.replace(QB, ""))
        }
        jB = (0, QB.K)(jB);
        const rB = [],
          sB = jB.split("\n"),
          JB = this.justify ? BB.measureText("\u200a").width : 0;
        sB.forEach((jB => {
          let zB = BB.measureText(jB).width;
          if (zB <= dB) rB.push(jB);
          else {
            let QB = jB;
            const nB = dB;
            let IB, NB, uB;
            for (zB = BB.measureText(QB).width; zB > nB;) {
              for (IB = 0, NB = 0, uB = ""; NB < nB;) IB++, uB = QB.substr(0, IB), NB = BB.measureText(uB).width;
              IB--, uB = uB.substr(0, IB);
              const jB = IB;
              if (" " !== QB.substr(IB, 1)) {
                for (;
                  " " !== QB.substr(IB, 1) && 0 !== IB;) IB--;
                0 === IB && (IB = jB), uB = QB.substr(0, IB)
              }
              uB = this.justify ? this.justifyLine(BB, uB, JB, "\u200a", dB) : uB, QB = QB.substr(IB), zB = BB.measureText(QB).width, rB.push(uB)
            }
            zB > 0 && rB.push(QB)
          }
        }));
        const mB = this.lineHeight ? this.lineHeight : this.getTextHeight(BB, jB),
          yB = mB * (rB.length - 1),
          kB = yB / 2;
        let GB = nB;
        "top" === this.vAlign ? pB = nB + NB : "bottom" === this.vAlign ? (pB = UB - yB, GB = UB) : (GB = nB + IB / 2, pB -= kB), rB.forEach((jB => {
          jB = jB.trim(), BB.fillText(jB, aB, pB), pB += mB
        })), this.debug && (BB.lineWidth = 3, BB.strokeStyle = "#00909e", BB.strokeRect(zB, nB, dB, IB), BB.lineWidth = 2, BB.strokeStyle = "#f6d743", BB.beginPath(), BB.moveTo(aB, nB), BB.lineTo(aB, UB), BB.stroke(), BB.strokeStyle = "#ff6363", BB.beginPath(), BB.moveTo(zB, GB), BB.lineTo(uB, GB), BB.stroke());
        return {
          height: yB + mB
        }
      },
      getTextHeight: function(BB, jB) {
        const zB = BB.textBaseline;
        BB.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: QB
        } = BB.measureText(jB);
        return BB.textBaseline = zB, QB
      },
      justifyLine: function(BB, jB, zB, QB, nB) {
        const dB = jB.trim(),
          IB = BB.measureText(dB).width,
          NB = dB.split(/\s+/).length - 1,
          uB = Math.floor((nB - IB) / zB);
        if (NB <= 0 || uB <= 0) return dB;
        const UB = Math.floor(uB / NB);
        let aB = uB - NB * UB,
          pB = [];
        for (let rB = 0; rB < UB; rB++) pB.push(QB);
        pB = pB.join("");
        return dB.replace(/\s+/g, (BB => {
          const jB = aB > 0 ? pB + QB : pB;
          return aB--, BB + jB
        }))
      }
    }
  },
  39215: (BB, jB, zB) => {
    function QB(BB, jB) {
      return jB.set(BB), jB
    }
    zB.d(jB, {
      e: () => QB
    })
  },
  38764: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => mB,
      c: () => JB,
      f: () => rB,
      j: () => aB,
      l: () => pB
    });
    var QB = zB(4334),
      nB = zB(376);
    const dB = 1024,
      IB = 1536,
      NB = 2 * QB.k + 1,
      uB = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      UB = 1.5;

    function aB(BB, jB, zB) {
      if ("string" !== typeof BB) return jB;
      try {
        const zB = JSON.parse(BB);
        return zB && "object" === typeof zB ? zB : jB
      } catch (QB) {
        return void 0 !== zB && console.error(`Couldn't parse ${zB}`, QB), jB
      }
    }

    function pB(BB) {
      return aB(BB, null, "a leaderboard's rows")
    }

    function rB(BB, jB) {
      var zB, QB;
      return null !== jB && void 0 !== jB ? jB : {
        status: null !== (zB = BB.status) && void 0 !== zB ? zB : "loading",
        entries: null !== (QB = BB.entries) && void 0 !== QB ? QB : []
      }
    }

    function sB(BB, jB) {
      return "number" === typeof BB && Number.isFinite(BB) && BB > 0 ? BB : jB
    }

    function JB(BB, jB) {
      const zB = sB(BB.size, 1);
      let QB = sB(BB.width, sB(2.5 * zB, 2.5)),
        nB = sB(BB.height, sB(3.75 * zB, 3.75));
      Number.isFinite(dB * nB / QB) && Number.isFinite(IB * QB / nB) || (QB = 2.5, nB = 3.75);
      const NB = nB / QB,
        uB = Math.max(1, Math.min(dB, jB / NB));
      return {
        width: QB,
        height: nB,
        layoutWidth: Math.max(dB, IB / NB),
        layoutHeight: Math.max(IB, dB * NB),
        pixelWidth: Math.round(uB),
        pixelHeight: Math.round(Math.max(1, Math.min(jB, uB * NB)))
      }
    }

    function mB(BB, jB, zB, IB, aB, pB) {
      BB.setTransform(1, 0, 0, 1, 0, 0), BB.fillStyle = nB.E.defaultNameTagBackground, BB.fillRect(0, 0, jB, zB), BB.scale(jB / IB.layoutWidth, zB / IB.layoutHeight), BB.translate((IB.layoutWidth - dB) / 2, 0),
        function(BB, jB, zB, dB) {
          var IB, aB, pB, rB;
          const {
            top: sB,
            around: JB,
            showPlayerText: mB,
            localPlayerDbId: GB
          } = zB, {
            whiteUiText: LB,
            grayUiText: gB,
            yellowUiText: tB
          } = nB.E;
          BB.textBaseline = "middle";
          const SB = function(jB, zB, QB, nB, dB, IB) {
              let NB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              BB.font = `bold ${nB}px 'Jetbrains Mono', monospace`, BB.fillStyle = dB, BB.textAlign = NB;
              let uB = jB.replace(/[\r\n\t]/g, " ");
              if (BB.measureText(uB).width > IB) {
                for (; uB.length > 0 && BB.measureText(`${uB}\u2026`).width > IB;) uB = uB.slice(0, -1);
                uB += "\u2026"
              }
              BB.fillText(uB, zB, QB)
            },
            MB = jB => {
              BB.fillStyle = LB, BB.globalAlpha = .15, BB.fillRect(24, jB, 976, 2), BB.globalAlpha = 1
            },
            EB = null === GB ? null : (0, nB.oc)(GB),
            iB = BB => null !== EB && BB.playerHash === EB,
            qB = yB(sB.entries, QB.n),
            fB = "ready" === sB.status && qB.length > 0,
            oB = null === JB ? [] : yB(JB.entries, NB),
            HB = qB.some(iB),
            DB = null === JB ? null : function(BB) {
              const jB = BB;
              if (!jB || !Number.isFinite(jB.rank) || !Number.isFinite(jB.tied) || !Number.isFinite(jB.total)) return null;
              return jB
            }(JB.standing),
            FB = oB.find(iB),
            YB = qB.find(iB),
            VB = null === DB || void 0 === FB ? null : {
              value: FB.value,
              rank: DB.rank
            },
            hB = kB(qB, void 0 === YB || YB.value === (null === VB || void 0 === VB ? void 0 : VB.value) ? VB : null),
            XB = kB(oB, VB),
            ZB = (BB, jB) => {
              const zB = BB.findIndex(iB);
              return zB >= 0 ? jB[zB] : null
            },
            AB = null !== (IB = null !== (aB = null === DB || void 0 === DB ? void 0 : DB.rank) && void 0 !== aB ? aB : ZB(oB, XB)) && void 0 !== IB ? IB : ZB(qB, hB);
          BB.font = "bold 34px 'Jetbrains Mono', monospace";
          const TB = [...fB ? hB : [], ...HB ? [] : XB],
            PB = Math.min(280, Math.max(0, ...TB.map((jB => BB.measureText(uB.format(jB)).width)))),
            WB = PB <= 80,
            eB = WB ? 80 : 32 + PB,
            lB = WB ? 148 : eB + 28,
            wB = 660 - lB;
          SB(`TOP ${QB.n}  /  ALL TIME`, 24, 52, 28, gB, 976), SB(mB ? String(null !== (pB = jB.title) && void 0 !== pB ? pB : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, LB, 976), SB("RANK", 32, 174, 28, gB, lB - 40), SB("PLAYER", lB, 174, 28, gB, wB), SB(mB ? String(null !== (rB = jB.scoreLabel) && void 0 !== rB ? rB : "Score").slice(0, 24) : "Score", 992, 174, 28, gB, 304, "right"), MB(202);
          const xB = (dB - 232) / (QB.n + UB + NB),
            KB = 208 + QB.n * xB,
            CB = KB + UB * xB,
            cB = (jB, zB, QB, nB) => {
              const dB = iB(jB);
              BB.fillStyle = dB ? tB : LB, BB.globalAlpha = dB ? .15 : nB ? .035 : 0, BB.fillRect(24, QB - xB / 2 + 1, 976, xB - 2), BB.globalAlpha = 1;
              const IB = dB ? tB : LB;
              SB(uB.format(zB), eB, QB, 34, IB, WB ? 80 : PB, WB ? "center" : "right"), SB(mB ? String(jB.name).slice(0, 64) : "Player", lB, QB, 34, IB, wB);
              const NB = uB.format(jB.value);
              SB(BB.measureText(NB).width > 304 ? jB.value.toExponential(6) : NB, 992, QB, 34, IB, 304, "right")
            };
          if (fB)
            for (const [QB, nB] of qB.entries()) cB(nB, hB[QB], 208 + (QB + .5) * xB, QB % 2 === 0);
          else {
            const BB = "error" === sB.status,
              jB = BB ? "Couldn't load leaderboard" : "ready" === sB.status ? "No scores yet" : "Loading leaderboard\u2026",
              zB = BB ? "Trying again shortly" : "ready" === sB.status ? "Be the first on the board!" : "Fetching the top players",
              QB = (208 + KB) / 2;
            SB(jB, 512, QB - 28, 40, BB ? nB.E.redUiText : LB, 960, "center"), SB(zB, 512, QB + 27, 30, gB, 960, "center")
          }
          const bB = KB + UB * xB / 2;
          if (null === AB) MB(bB);
          else {
            const jB = null === DB ? 0 : DB.tied - 1,
              zB = `YOUR RANK #${uB.format(AB)}${null===DB?"":` of ${uB.format(DB.total)}`}`;
            BB.font = "bold 36px 'Jetbrains Mono', monospace";
            const QB = Math.max(20, Math.min(36, Math.floor(34560 / BB.measureText(zB).width)));
            SB(zB, 512, bB - (jB > 0 ? 15 : 0), QB, tB, 960, "center"), jB > 0 && SB(`Tied with ${uB.format(jB)} other${1===jB?"":"s"}`, 512, bB + 24, 24, gB, 960, "center")
          }
          if (null === JB) return;
          const vB = CB + NB * xB / 2;
          if (HB) SB(`You're in the top ${QB.n}!`, 512, vB, 40, tB, 960, "center");
          else if (0 === oB.length) SB("You're not on this board yet", 512, vB, 34, gB, 960, "center");
          else
            for (const [QB, nB] of oB.entries()) cB(nB, XB[QB], CB + (QB + .5) * xB, QB % 2 === 0)
        }(BB, aB, pB, IB.layoutHeight)
    }

    function yB(BB, jB) {
      return Array.isArray(BB) ? BB.slice(0, jB).filter((BB => BB && Number.isFinite(BB.rank) && Number.isFinite(BB.value))) : []
    }

    function kB(BB, jB) {
      const zB = [];
      let QB = !1;
      return BB.forEach(((nB, dB) => {
        if (null !== jB && nB.value === jB.value) return void zB.push(jB.rank);
        const IB = dB > 0 && nB.value === BB[dB - 1].value;
        IB || (QB = 0 === dB && 1 !== nB.rank), zB.push(IB && !QB ? zB[dB - 1] : nB.rank)
      })), zB
    }
  },
  38984: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB,
      g: () => dB
    });
    const QB = 32;

    function nB(BB) {
      return Array.from(BB).length
    }

    function dB(BB) {
      const jB = [""];
      let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        nB = "";
      const dB = () => {
        jB.push(""), zB = 0, nB = ""
      };
      for (const IB of BB.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(IB)) dB();
        else if (/^\s+$/.test(IB)) nB += IB;
      else if (IB.length > 0) {
        const BB = Array.from(IB);
        zB > 0 && zB + nB.length + BB.length > QB && dB(), jB[jB.length - 1] += nB, zB += nB.length, nB = "";
        for (const nB of BB) zB >= QB && dB(), jB[jB.length - 1] += nB, zB++
      }
      return jB[jB.length - 1] += nB, jB
    }
  },
  39209: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB
    });
    var QB = zB(36711),
      nB = zB.n(QB);
    const dB = [1, 1, 1];

    function IB(BB) {
      if (!BB) return [...dB];
      try {
        const [jB, zB, QB] = nB()(BB).rgb().array();
        return [jB / 255, zB / 255, QB / 255]
      } catch (jB) {
        return console.warn(`Invalid groundArrowPath colour "${BB}":`, jB), [...dB]
      }
    }
  },
  39315: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      g: () => UB,
      h: () => uB
    });
    var QB = zB(321),
      nB = zB(3004);
    const dB = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      IB = 512;

    function NB(BB) {
      var jB;
      const zB = Math.min(screen.width, screen.height) * (null !== (jB = (0, QB.c)()) && void 0 !== jB ? jB : (0, nB.m)());
      return Math.max(window.innerHeight * (0, nB.m)(), zB) / (0, nB.o)(BB)
    }

    function uB(BB, jB, zB) {
      return jB / (2 * Math.tan(zB / 2)) > IB ? BB : UB(BB)
    }

    function UB(BB) {
      return BB.map((BB => BB.replace(dB, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34078: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      i: () => NB,
      k: () => IB,
      n: () => nB,
      p: () => QB
    });
    const QB = {
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
      nB = "/textures/dayNight/sun.png",
      dB = "/textures/dayNight/moon.png",
      IB = "/textures/dayNight/stars",
      NB = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39282: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB,
      f: () => pB,
      g: () => QB,
      k: () => uB,
      l: () => nB,
      p: () => UB,
      r: () => NB,
      u: () => IB
    });
    const QB = ["linear", "easeIn", "easeOut", "easeInOut"],
      nB = ["movement", "camera", "cursor"],
      dB = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function IB(BB, jB) {
      return NB(BB, jB, dB)
    }

    function NB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (BB === jB || Number.isNaN(BB) && Number.isNaN(jB)) return !0;
      if ("object" !== typeof BB || "object" !== typeof jB || null === BB || null === jB || Array.isArray(BB) !== Array.isArray(jB)) return !1;
      const QB = BB,
        nB = jB;
      for (const dB of new Set([...Object.keys(QB), ...Object.keys(nB)]))
        if (!zB.includes(dB) && !NB(QB[dB], nB[dB])) return !1;
      return !0
    }
    const uB = {
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
      UB = "^-[1-9][0-9]*$",
      aB = "^#[0-9a-fA-F]{6}$",
      pB = "#000000"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);