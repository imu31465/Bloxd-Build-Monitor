export const id = 193;
export const ids = [193];
export const modules = {
  39202: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      constructor(BB, IB) {
        this.read = BB, this.apply = IB, this.release = null
      }
      turn(BB, IB) {
        const ZB = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: IB,
          forcedCameraDirection: [BB[0], BB[1], BB[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), IB + 100),
          transitionMs: ZB
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
  38685: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      g: () => JB
    });
    const TB = new Map;

    function JB(BB, IB) {
      TB.set(BB, IB)
    }

    function oB(BB) {
      return BB ? TB.get(BB) : void 0
    }
  },
  39674: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(38277);

    function JB(BB, IB, ZB) {
      var JB, oB, GB, vB, kB, cB, nB;
      const hB = (0, TB.c)(BB, IB, ZB[0], ZB[1], ZB[2]),
        zB = hB ? null !== (JB = hB.textCell) && void 0 !== JB ? JB : hB.rect.anchor : ZB,
        FB = IB(zB[0], zB[1], zB[2]);
      return {
        pos: [ZB[0], ZB[1], ZB[2]],
        noticeboardSpan: hB && {
          width: hB.rect.width,
          height: hB.rect.height
        },
        text: null !== (oB = null === FB || void 0 === FB || null === (GB = FB.persisted) || void 0 === GB || null === (vB = GB.shared) || void 0 === vB ? void 0 : vB.text) && void 0 !== oB ? oB : "",
        textSize: null !== (kB = null === FB || void 0 === FB || null === (cB = FB.persisted) || void 0 === cB || null === (nB = cB.shared) || void 0 === nB ? void 0 : nB.textSize) && void 0 !== kB ? kB : null
      }
    }
  },
  38555: (BB, IB, ZB) => {
    function TB(BB) {
      switch (BB.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    ZB.d(IB, {
      b: () => JB,
      f: () => oB,
      h: () => TB
    });
    const JB = 4,
      oB = 3
  },
  39225: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      h: () => oB
    });
    var TB = ZB(360);
    const JB = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class oB {
      constructor(BB) {
        this.importGame = BB, this.loads = new Map, this.loaded = new Map
      }
      load(BB) {
        const IB = (0, TB.Vb)(BB);
        if (!JB.has(IB)) return Promise.resolve(void 0);
        let ZB = this.loads.get(IB);
        return ZB || (ZB = this.importGame(IB).then((BB => {
          const ZB = BB.default;
          if ("function" !== typeof ZB) throw new Error(`${IB}'s client code has no default-exported factory`);
          return this.loaded.set(IB, ZB), ZB
        })).catch((BB => {
          throw this.loads.delete(IB), BB
        })), this.loads.set(IB, ZB)), ZB
      }
      loadedFactory(BB) {
        const IB = (0, TB.Vb)(BB);
        if (!JB.has(IB)) return;
        const ZB = this.loaded.get(IB);
        if (!ZB) throw new Error(`${IB}'s client code started before it loaded`);
        return ZB
      }
    }
  },
  39680: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(9388),
      JB = ZB(34211),
      oB = ZB(3461);

    function GB(BB) {
      if (BB === TB.c) return 0;
      const IB = (0, oB.c)(BB);
      if (void 0 !== IB && IB <= JB.MAX_BLOCK_ID) return IB;
      const ZB = (0, oB.c)(BB.split("|")[0]);
      if (void 0 !== ZB && ZB <= JB.MAX_BLOCK_ID && (0, JB.rootMetaDescOf)(ZB) === BB) return ZB;
      throw new Error(`Invalid block name. You sent ${BB}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39278: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    var TB = ZB(20);
    class JB {
      constructor(BB) {
        this.screen = BB, this.hidesHud = !1
      }
      show(BB, IB) {
        this.screen.setFade(BB.colour, BB.alpha), this.screen.setLetterbox(!0 === IB.letterbox, BB.alpha < 1), this.setHudHidden(!0 === IB.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(BB) {
        this.hidesHud !== BB && (this.hidesHud = BB, TB.d.set({
          isUiHiddenByCamera: BB
        }))
      }
    }
  },
  39245: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      g: () => zB,
      h: () => hB,
      i: () => GB,
      m: () => NB,
      q: () => kB,
      u: () => gB,
      v: () => cB,
      w: () => vB,
      y: () => nB
    });
    const TB = Math.PI / 2 - .001,
      JB = 2 * Math.PI,
      oB = 1e-9;

    function GB(BB, IB) {
      IB.heading = BB.heading, IB.pitch = BB.pitch
    }

    function vB(BB, IB) {
      const ZB = IB - BB;
      return ZB - JB * Math.floor((ZB + Math.PI) / JB)
    }

    function kB(BB, IB, ZB) {
      return BB + vB(BB, IB) * ZB
    }

    function cB(BB) {
      if (!Number.isFinite(BB)) return BB;
      const IB = BB - JB * Math.floor(BB / JB);
      return IB < JB ? IB : 0
    }

    function nB(BB, IB) {
      return BB + vB(BB, IB)
    }

    function hB(BB) {
      return Math.max(-TB, Math.min(TB, BB))
    }

    function zB(BB, IB, ZB) {
      const TB = Math.cos(IB);
      return ZB[0] = TB * Math.sin(BB), ZB[1] = -Math.sin(IB), ZB[2] = TB * Math.cos(BB), ZB
    }

    function FB(BB, IB, ZB, TB) {
      const JB = Math.sqrt(BB * BB + ZB * ZB);
      return JB < oB && Math.abs(IB) < oB || (JB >= oB && (TB.heading = Math.atan2(BB, ZB)), TB.pitch = hB(Math.atan2(-IB, JB) + 0)), TB
    }

    function NB(BB, IB) {
      return FB(BB[0], BB[1], BB[2], IB)
    }

    function gB(BB, IB, ZB) {
      return FB(IB[0] - BB[0], IB[1] - BB[1], IB[2] - BB[2], ZB)
    }
  },
  39270: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      d: () => JB
    });
    var TB = ZB(39245);

    function JB(BB) {
      var IB;
      const ZB = "default" === BB.mode ? "movement" : null !== (IB = BB.playerFacing) && void 0 !== IB ? IB : "movement";
      return "cursor" === ZB ? {
        facing: ZB,
        mouseTurns: null
      } : {
        facing: ZB,
        mouseTurns: "default" !== BB.mode && void 0 !== BB.playerLook ? "look" : "view"
      }
    }

    function oB(BB, IB, ZB, JB, oB, GB) {
      return GB.YH = 0, GB.iH = 0, GB.pointedAt = void 0, void 0 !== JB ? oB ? (GB.pointedAt = JB, BB) : (0, TB.v)(JB.heading) : oB ? (GB.YH = IB, GB.iH = ZB, BB) : (0, TB.v)(BB + IB)
    }
  },
  39251: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => fB
    });
    var TB = ZB(39257),
      JB = ZB(39245),
      oB = ZB(37016);

    function GB(BB, IB, ZB, TB) {
      if (!(TB > 0)) return IB;
      const JB = IB > BB ? Math.min(IB, BB + ZB / TB) : Math.max(IB, BB - ZB / TB);
      return Math.abs(IB - JB) < 1e-9 ? IB : JB
    }
    class vB {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: TB.f,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(BB) {
        !this.isGoingOut() && this.sinceTurnMs < TB.m.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: BB
        } : (this.waiting = null, this.startOut(BB))
      }
      fadeIn(BB) {
        this.isGoingOut() ? this.sinceTurnMs < TB.m.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: BB
        } : (this.waiting = null, this.startIn(BB)) : this.waiting = null
      }
      advance(BB) {
        const IB = this.waiting;
        if (null === IB) return this.step(BB);
        const ZB = TB.m.minFadeTurnMs - this.sinceTurnMs;
        if (ZB > BB) return this.step(BB);
        const JB = this.step(ZB);
        return this.waiting = null, "out" === IB.turn ? this.startOut(IB.transition) : this.startIn(IB.minMs), this.step(BB - ZB) || JB
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(BB) {
        ("in" === this.phase || null === this.phase && this.clearMs < TB.m.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = BB.colour), this.outMs = BB.outMs, this.holdMs = BB.holdMs, this.inMs = BB.inMs
      }
      startIn(BB) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(BB, this.inMs)
      }
      step(BB) {
        const IB = this.screen;
        this.sinceTurnMs += BB, null === this.phase && (this.clearMs += BB);
        let ZB = !1,
          JB = BB;
        if ("out" === this.phase) {
          const TB = (1 - IB.alpha) * this.outMs;
          if (IB.alpha = GB(IB.alpha, 1, BB, this.outMs), IB.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, JB = Math.max(0, BB - TB), ZB = !0
        }
        let oB = BB;
        if ("hold" === this.phase) {
          this.heldMs += JB;
          const BB = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - TB.m.minFadeTurnMs);
          if (BB < 0 || ZB) return ZB;
          this.phase = "in", this.sinceTurnMs = BB, oB = BB
        }
        return "in" === this.phase && (IB.alpha = GB(IB.alpha, 0, oB, this.inMs), IB.alpha <= 0 && (this.phase = null, this.clearMs = 0)), ZB
      }
    }
    var kB = ZB(39242),
      cB = ZB(39262),
      nB = ZB(1956),
      hB = ZB(36593);

    function zB(BB, IB) {
      for (let ZB = 0; ZB < IB.length; ZB++) IB[ZB] = BB[ZB]
    }

    function FB(BB, IB) {
      var ZB;
      return null !== (ZB = BB.fov) && void 0 !== ZB ? ZB : IB.getDefaultFov()
    }

    function NB(BB, IB, ZB, TB, JB) {
      const oB = 2 / TB,
        GB = Math.exp(-oB * JB);
      for (let vB = 0; vB < BB.length; vB++) {
        const TB = BB[vB] - ZB[vB],
          kB = (IB[vB] + oB * TB) * JB;
        BB[vB] = ZB[vB] + (TB + kB) * GB, IB[vB] = (IB[vB] - oB * kB) * GB
      }
    }
    class gB {
      constructor(BB, IB, ZB, TB) {
        var oB, GB, vB, kB, cB;
        this.settings = BB, this.vz = IB, this.targets = ZB, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.zq = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, JB.v)((0, nB.l)(null !== (oB = BB.viewHeading) && void 0 !== oB ? oB : 0)),
          pitch: (0, JB.h)((0, nB.l)(null !== (GB = BB.viewElevation) && void 0 !== GB ? GB : 45))
        }, this.closestDistance = null !== (vB = BB.closestDistance) && void 0 !== vB ? vB : Math.min(6, null !== (kB = BB.furthestDistance) && void 0 !== kB ? kB : 1 / 0), this.furthestDistance = null !== (cB = BB.furthestDistance) && void 0 !== cB ? cB : Math.max(64, this.closestDistance);
        const hB = (0, JB.g)(this.base.heading, this.base.pitch, this.forward),
          zB = TB.position,
          FB = this.closestDistance;
        this.goal = [zB[0] + hB[0] * FB, zB[1] + hB[1] * FB, zB[2] + hB[2] * FB, FB, this.base.heading, this.base.pitch]
      }
      update(BB, IB, ZB) {
        var TB, oB;
        this.placeGoal(null !== (TB = this.settings.fov) && void 0 !== TB ? TB : this.vz.getBaseFov()), this.goal[4] = (0, JB.y)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const GB = null !== (oB = this.settings.smoothMs) && void 0 !== oB ? oB : 400;
        !this.started || GB < 1 ? (zB(this.goal, this.smoothed), this.zq.fill(0), this.started = !0) : NB(this.smoothed, this.zq, this.goal, GB, BB), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, JB.h)(this.smoothed[5]), IB.apply(this.angles, ZB);
        const vB = (0, JB.g)(ZB.heading, ZB.pitch, this.forward);
        for (let JB = 0; JB < 3; JB++) ZB.position[JB] = this.smoothed[JB] - vB[JB] * this.smoothed[3];
        ZB.fov = FB(this.settings, this.vz)
      }
      continueFrom(BB) {
        BB instanceof gB && (zB(BB.goal, this.goal), zB(BB.smoothed, this.smoothed), zB(BB.zq, this.zq), this.framedTargets = BB.framedTargets, this.started = BB.started)
      }
      reset() {
        this.zq.fill(0), this.started = !1
      }
      placeGoal(BB) {
        var IB;
        let ZB = 0;
        for (const nB of this.settings.targets) {
          const BB = this.targets.currentAimPoint(nB);
          BB && (0, kB.i)(BB, this.pointAt(ZB++))
        }
        if (ZB > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const BB = this.targets.aimPoint(this.vz.localPlayerId);
          BB && (0, kB.i)(BB, this.pointAt(ZB++))
        }
        const TB = this.goal;
        if (0 === ZB) return void(TB[3] = this.withinDistances(TB[3]));
        for (let kB = 0; kB < 3; kB++) {
          let BB = 1 / 0,
            IB = -1 / 0;
          for (let TB = 0; TB < ZB; TB++) BB = Math.min(BB, this.points[TB][kB]), IB = Math.max(IB, this.points[TB][kB]);
          TB[kB] = (BB + IB) / 2
        }
        let JB = 0;
        for (let kB = 0; kB < ZB; kB++) {
          const BB = this.points[kB];
          JB = Math.max(JB, Math.hypot(BB[0] - TB[0], BB[1] - TB[1], BB[2] - TB[2]))
        }
        const oB = Math.tan((0, nB.l)(BB) / 2),
          GB = Math.atan(oB * (!0 === this.settings.letterbox ? hB.d : 1)),
          vB = Math.atan(oB * this.vz.getAspectRatio()),
          cB = (JB + (null !== (IB = this.settings.padding) && void 0 !== IB ? IB : 2)) / Math.sin(Math.min(GB, vB));
        TB[3] = this.withinDistances(cB)
      }
      withinDistances(BB) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, BB))
      }
      pointAt(BB) {
        return BB === this.points.length && this.points.push([0, 0, 0]), this.points[BB]
      }
    }
    class qB {
      constructor(BB) {
        this.limits = BB, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(BB) {
        this.limits && (this.yawOffset = BB.yawOffset, this.pitchOffset = BB.pitchOffset, this.idleMs = BB.idleMs)
      }
      update(BB, IB) {
        const ZB = this.limits;
        if (!ZB) return;
        const TB = Number.isFinite(IB.YH) ? IB.YH : 0,
          JB = Number.isFinite(IB.iH) ? IB.iH : 0;
        if (IB.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: IB.pointedAt.heading,
          pitch: IB.pointedAt.pitch
        };
        else if (0 !== TB || 0 !== JB) this.idleMs = 0, this.yawOffset += TB, this.pitchOffset += JB;
        else {
          const IB = Math.max(0, this.idleMs + BB - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += BB, void 0 !== ZB.returnMs && IB > 0) {
            const BB = ZB.returnMs > 0 ? Math.exp(-3 * IB / ZB.returnMs) : 0;
            this.yawOffset *= BB, this.pitchOffset *= BB
          }
        }
        this.clampOffsets(ZB)
      }
      clampOffsets(BB) {
        if (BB.maxYaw >= 180) this.yawOffset = (0, JB.w)(0, this.yawOffset);
        else {
          const IB = (0, nB.l)(BB.maxYaw);
          this.yawOffset = Math.max(-IB, Math.min(IB, this.yawOffset))
        }
        const IB = (0, nB.l)(BB.maxPitch);
        this.pitchOffset = Math.max(-IB, Math.min(IB, this.pitchOffset))
      }
      apply(BB, IB) {
        this.pointedAt && this.limits && (this.yawOffset = (0, JB.w)(BB.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - BB.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const ZB = (0, JB.h)(BB.pitch + this.pitchOffset);
        this.pitchOffset = ZB - BB.pitch, IB.heading = (0, JB.v)(BB.heading + this.yawOffset), IB.pitch = ZB
      }
      unapply(BB, IB) {
        IB.heading = (0, JB.v)(BB.heading - this.yawOffset), IB.pitch = (0, JB.h)(BB.pitch - this.pitchOffset)
      }
    }
    const yB = 1e-6;

    function UB(BB) {
      return Math.sqrt(BB[0] * BB[0] + BB[1] * BB[1] + BB[2] * BB[2])
    }

    function WB(BB, IB, ZB, TB, JB) {
      const oB = JB * JB,
        GB = oB * JB;
      return (2 * GB - 3 * oB + 1) * BB + (GB - 2 * oB + JB) * IB + (-2 * GB + 3 * oB) * ZB + (GB - oB) * TB
    }

    function dB(BB, IB, ZB, TB, JB) {
      const oB = JB * JB;
      return (6 * oB - 6 * JB) * BB + (3 * oB - 4 * JB + 1) * IB + (-6 * oB + 6 * JB) * ZB + (3 * oB - 2 * JB) * TB
    }

    function CB(BB, IB) {
      const ZB = IB[0] - BB[0],
        TB = IB[1] - BB[1],
        JB = IB[2] - BB[2];
      return Math.sqrt(ZB * ZB + TB * TB + JB * JB)
    }

    function QB(BB, IB, ZB, TB, JB, oB) {
      for (let GB = 0; GB < 3; GB++) oB[GB] = JB ? BB[GB] * TB : ZB[GB] - IB[GB];
      return JB && function(BB, IB) {
        const ZB = UB(BB);
        if (ZB > IB) {
          const TB = IB / ZB;
          BB[0] *= TB, BB[1] *= TB, BB[2] *= TB
        }
      }(oB, 3 * CB(IB, ZB)), oB
    }

    function sB(BB, IB, ZB, TB) {
      for (let JB = 0; JB < 3; JB++) TB[JB] = 6 * (IB[JB] - BB[JB]) - 2 * ZB[JB];
      if (UB(TB) < yB)
        for (let JB = 0; JB < 3; JB++) TB[JB] = IB[JB] - BB[JB];
      return TB
    }

    function wB(BB, IB) {
      return [2 * IB[0] - BB[0], 2 * IB[1] - BB[1], 2 * IB[2] - BB[2]]
    }

    function OB(BB, IB, ZB, TB, JB, oB, GB) {
      if (!oB && !GB) return 0;
      const vB = oB ? BB : 2 * IB - ZB,
        kB = GB ? ZB : 2 * IB - BB,
        cB = oB ? TB : JB,
        nB = GB ? JB : TB,
        hB = (IB - vB) / cB,
        zB = (kB - IB) / nB;
      if (hB * zB <= 0) return 0;
      const FB = (kB - vB) / (cB + nB),
        NB = 3 * Math.min(Math.abs(hB), Math.abs(zB));
      return Math.max(-NB, Math.min(NB, FB))
    }

    function YB(BB, IB, ZB, TB, JB, oB, GB) {
      const {
        u: vB,
        segmentMs: kB
      } = BB;
      if (!BB.curved) return ZB + (TB - ZB) * vB;
      return WB(ZB, OB(IB, ZB, TB, BB.beforeMs, kB, oB, !0) * kB, TB, OB(ZB, TB, JB, kB, BB.afterMs, !0, GB) * kB, vB)
    }

    function iB(BB) {
      return Math.abs(BB.pitch) >= JB.e
    }
    class pB {
      constructor(BB, IB, ZB, TB, JB) {
        this.nodes = BB, this.prevNodes = ZB, this.nextNodes = TB, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = BB.map(((BB, ZB) => this.nodeTangent(IB, JB, ZB)))
      }
      sample(BB, IB, ZB) {
        const {
          index: TB,
          toIndex: oB,
          segmentMs: GB,
          curved: vB
        } = BB, kB = this.fromAngles, cB = this.toAngles, nB = this.nodeAngles(TB, ZB.position, IB, kB), hB = this.nodeAngles(oB, ZB.position, IB, cB);
        if (GB > 0 && "aim" !== nB && "aim" !== hB && this.liveTangent(BB, kB)) return ZB.heading = (0, JB.v)(kB.heading), void(ZB.pitch = kB.pitch);
        if ("none" === nB && "none" === hB) return;
        !vB && GB > 0 && ("tangent" === nB && this.liveTangent(BB, kB), "tangent" === hB && this.liveTangent(BB, cB)), "none" === nB ? (0, JB.i)(cB, kB) : "none" === hB && (0, JB.i)(kB, cB);
        const zB = vB && BB.beforeIndex >= 0 && "none" !== this.nodeAngles(BB.beforeIndex, ZB.position, IB, this.beforeAngles),
          FB = vB && BB.afterIndex >= 0 && "none" !== this.nodeAngles(BB.afterIndex, ZB.position, IB, this.afterAngles),
          NB = (0, JB.y)(kB.heading, cB.heading),
          gB = YB(BB, zB ? (0, JB.y)(kB.heading, this.beforeAngles.heading) : 0, kB.heading, NB, FB ? (0, JB.y)(NB, this.afterAngles.heading) : 0, zB, FB);
        ZB.heading = (0, JB.v)(gB), ZB.pitch = (0, JB.h)(YB(BB, this.beforeAngles.pitch, kB.pitch, cB.pitch, this.afterAngles.pitch, zB, FB))
      }
      nodeAngles(BB, IB, ZB, TB) {
        const JB = this.rawNodeAngles(BB, IB, ZB, TB);
        return "none" !== JB && iB(TB) && !this.borrowHeading(this.prevNodes[BB], IB, ZB, TB) && this.borrowHeading(this.nextNodes[BB], IB, ZB, TB), JB
      }
      borrowHeading(BB, IB, ZB, TB) {
        const JB = this.borrowedAngles;
        return !(BB < 0 || "none" === this.rawNodeAngles(BB, IB, ZB, JB) || iB(JB)) && (TB.heading = JB.heading, !0)
      }
      rawNodeAngles(BB, IB, ZB, TB) {
        const oB = this.nodes[BB].keyframe;
        if (oB.lookDirection) return (0, JB.m)(oB.lookDirection, TB), "aim";
        if (void 0 !== oB.lookAt) {
          const BB = ZB(oB.lookAt);
          if (BB) return (0, JB.u)(IB, BB, TB), "aim"
        }
        const GB = this.tangents[BB];
        return GB ? ((0, JB.i)(GB, TB), "tangent") : "none"
      }
      liveTangent(BB, IB) {
        const ZB = this.nodes[BB.index].position,
          TB = this.nodes[BB.toIndex].position,
          oB = this.derivative;
        for (let JB = 0; JB < 3; JB++) oB[JB] = dB(ZB[JB], BB.fromTangent[JB], TB[JB], BB.toTangent[JB], BB.u);
        return UB(oB) > 1e-9 ? ((0, JB.m)(oB, IB), !0) : !(CB(ZB, TB) < yB) && ((0, JB.m)(sB(ZB, TB, BB.u < .5 ? BB.toTangent : BB.fromTangent, oB), IB), !0)
      }
      nodeTangent(BB, IB, ZB) {
        var TB;
        const oB = BB[ZB];
        if (UB(oB) > 1e-9) return (0, JB.m)(oB, {
          heading: 0,
          pitch: 0
        });
        const GB = null !== (TB = this.restDirectionTo(ZB, ZB + 1, BB, IB)) && void 0 !== TB ? TB : this.restDirectionTo(ZB, ZB - 1, BB, IB);
        return GB ? (0, JB.m)(GB, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(BB, IB, ZB, TB) {
        const JB = this.nodes[BB],
          oB = this.nodes[IB];
        if (!oB || CB(JB.position, oB.position) < yB) return null;
        const [GB, vB] = IB > BB ? [JB, oB] : [oB, JB], kB = QB(ZB[IB], GB.position, vB.position, vB.timeMs - GB.timeMs, TB, [0, 0, 0]);
        return sB(GB.position, vB.position, kB, [0, 0, 0])
      }
    }

    function aB(BB, IB) {
      const ZB = BB.lookDirection || IB.lookDirection ? function(BB, IB) {
        if (!BB || !IB) return BB === IB;
        const ZB = UB(BB),
          TB = UB(IB);
        return Math.hypot(BB[0] / ZB - IB[0] / TB, BB[1] / ZB - IB[1] / TB, BB[2] / ZB - IB[2] / TB) < yB
      }(BB.lookDirection, IB.lookDirection) : (TB = BB.lookAt, JB = IB.lookAt, "object" !== typeof TB || "object" !== typeof JB ? TB === JB : CB(TB, JB) < yB);
      var TB, JB;
      return CB(BB.position, IB.position) < yB && BB.fov === IB.fov && ZB
    }
    class HB {
      constructor(BB, IB, ZB) {
        if (this.smooth = IB, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
        for (let oB = 1; oB < BB.length; oB++)
          if (!(BB[oB].timeMs > BB[oB - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = BB.map((BB => {
          var IB;
          return {
            timeMs: BB.timeMs,
            position: [...BB.position],
            keyframe: BB,
            easing: (0, oB.h)(null !== (IB = BB.easing) && void 0 !== IB ? IB : "linear")
          }
        }));
        const TB = this.nodes[0],
          JB = this.nodes[this.nodes.length - 1],
          GB = ZB && this.nodes.length > 1;
        GB && !aB(TB.keyframe, JB.keyframe) && this.nodes.push({
          ...TB,
          timeMs: JB.timeMs + (JB.timeMs - TB.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = GB ? this.nodes[this.nodes.length - 1].timeMs - TB.timeMs : 0, this.prevNodes = this.nodes.map(((BB, IB) => this.neighbour(IB, -1))), this.nextNodes = this.nodes.map(((BB, IB) => this.neighbour(IB, 1))), this.prevGaps = this.prevNodes.map(((BB, IB) => BB >= 0 ? this.gapMs(IB, -1) : 0)), this.nextGaps = this.nextNodes.map(((BB, IB) => BB >= 0 ? this.gapMs(IB, 1) : 0)), this.velocities = this.nodes.map(((BB, IB) => {
          const ZB = this.prevNodes[IB],
            TB = this.nextNodes[IB];
          return function(BB, IB, ZB, TB, JB, oB) {
            if (oB[0] = 0, oB[1] = 0, oB[2] = 0, !BB && !ZB) return oB;
            const GB = null !== BB && void 0 !== BB ? BB : wB(null !== ZB && void 0 !== ZB ? ZB : IB, IB),
              vB = null !== ZB && void 0 !== ZB ? ZB : wB(null !== BB && void 0 !== BB ? BB : IB, IB),
              kB = BB ? TB : JB,
              cB = ZB ? JB : TB,
              nB = CB(GB, IB),
              hB = CB(IB, vB);
            if (nB < yB || hB < yB) return oB;
            const zB = Math.sqrt(nB),
              FB = Math.sqrt(hB),
              NB = (zB + FB) / (kB + cB);
            for (let gB = 0; gB < 3; gB++) {
              const BB = (IB[gB] - GB[gB]) / zB - (vB[gB] - GB[gB]) / (zB + FB) + (vB[gB] - IB[gB]) / FB;
              oB[gB] = BB * NB
            }
            return oB
          }(ZB >= 0 ? this.nodes[ZB].position : null, BB.position, TB >= 0 ? this.nodes[TB].position : null, this.prevGaps[IB], this.nextGaps[IB], [0, 0, 0])
        })), this.aim = new pB(this.nodes, this.velocities, this.prevNodes, this.nextNodes, IB)
      }
      sample(BB, IB, ZB, TB) {
        const JB = this.findSegment(this.pathTime(BB));
        this.samplePosition(JB, TB.position), this.aim.sample(JB, IB, TB);
        const {
          beforeIndex: oB,
          afterIndex: GB
        } = JB;
        TB.fov = YB(JB, oB >= 0 ? this.fovAt(oB, ZB) : 0, this.fovAt(JB.index, ZB), this.fovAt(JB.toIndex, ZB), GB >= 0 ? this.fovAt(GB, ZB) : 0, oB >= 0, GB >= 0)
      }
      pathTime(BB) {
        const IB = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || BB <= IB) return BB;
        const ZB = BB - IB;
        return IB + ZB - this.loopMs * Math.floor(ZB / this.loopMs)
      }
      findSegment(BB) {
        const IB = this.nodes,
          ZB = this.segment;
        let TB = ZB.index;
        for (BB < IB[TB].timeMs && (TB = 0); TB < IB.length - 2 && IB[TB + 1].timeMs <= BB;) TB++;
        const JB = Math.min(TB + 1, IB.length - 1),
          GB = IB[JB].timeMs - IB[TB].timeMs;
        return ZB.index = TB, ZB.toIndex = JB, ZB.segmentMs = GB, ZB.u = GB > 0 ? (0, oB.g)((BB - IB[TB].timeMs) / GB, IB[TB].easing) : 1, ZB.curved = this.smooth && GB > 0, ZB.beforeIndex = this.prevNodes[TB], ZB.afterIndex = this.nextNodes[JB], ZB.beforeMs = this.prevGaps[TB], ZB.afterMs = this.nextGaps[JB], ZB
      }
      samplePosition(BB, IB) {
        const {
          fromTangent: ZB,
          toTangent: TB,
          curved: JB
        } = BB, oB = this.nodes[BB.index].position, GB = this.nodes[BB.toIndex].position;
        QB(this.velocities[BB.index], oB, GB, BB.segmentMs, JB, ZB), QB(this.velocities[BB.toIndex], oB, GB, BB.segmentMs, JB, TB);
        const vB = BB.u;
        for (let kB = 0; kB < 3; kB++) IB[kB] = JB ? WB(oB[kB], ZB[kB], GB[kB], TB[kB], vB) : oB[kB] + (GB[kB] - oB[kB]) * vB
      }
      fovAt(BB, IB) {
        var ZB;
        return null !== (ZB = this.nodes[BB].keyframe.fov) && void 0 !== ZB ? ZB : IB
      }
      neighbour(BB, IB) {
        const ZB = this.nodes.length - 1,
          TB = BB + IB;
        return TB >= 0 && TB <= ZB ? TB : this.loopMs <= 0 || ZB < 2 ? -1 : TB < 0 ? ZB - 1 : 1
      }
      gapMs(BB, IB) {
        const ZB = this.nodes.length - 1;
        if (1 === IB) {
          const IB = BB === ZB ? 0 : BB;
          return this.nodes[IB + 1].timeMs - this.nodes[IB].timeMs
        }
        const TB = 0 === BB ? ZB : BB;
        return this.nodes[TB].timeMs - this.nodes[TB - 1].timeMs
      }
    }
    class MB {
      constructor(BB) {
        this.vz = BB, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = IB => BB.getEntityPosition(IB), this.readAimPoint = IB => BB.getEntityAimPoint(IB)
      }
      aimPoint(BB) {
        return "string" !== typeof BB ? (0, kB.q)(BB, 3) ? BB : null : this.resolve(BB, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(BB) {
        const IB = "string" === typeof BB ? this.vz.getEntityAimPoint(BB) : BB;
        return IB && (0, kB.q)(IB, 3) ? IB : null
      }
      feetPosition(BB) {
        return this.resolve(BB, this.readFeet, this.lastFeet)
      }
      heading(BB) {
        const IB = this.vz.getEntityHeading(BB);
        if (null !== IB && Number.isFinite(IB)) return this.lastHeadings.set(BB, IB), IB;
        const ZB = this.lastHeadings.get(BB);
        return void 0 !== ZB ? ZB : BB === this.vz.localPlayerId ? 0 : this.heading(this.vz.localPlayerId)
      }
      resolve(BB, IB, ZB) {
        const TB = IB(BB);
        let JB = ZB.get(BB);
        return TB && (0, kB.q)(TB, 3) ? (JB || (JB = [0, 0, 0], ZB.set(BB, JB)), JB[0] = TB[0], JB[1] = TB[1], JB[2] = TB[2], JB) : JB || (BB === this.vz.localPlayerId ? null : this.resolve(this.vz.localPlayerId, IB, ZB))
      }
    }

    function jB(BB) {
      return {
        heading: BB.heading,
        pitch: BB.pitch
      }
    }

    function PB(BB, IB) {
      Number.isFinite(BB.heading) && Number.isFinite(BB.pitch) || (0, JB.i)(IB, BB)
    }

    function RB(BB, IB, ZB, TB, oB) {
      if (IB) return void(0, JB.m)(IB, oB);
      const GB = TB.aimPoint(ZB);
      GB && (0, JB.u)(BB, GB, oB)
    }
    class rB {
      constructor(BB, IB, ZB, TB) {
        this.settings = BB, this.vz = IB, this.targets = ZB, this.base = void 0, this.base = jB(TB)
      }
      update(BB, IB, ZB) {
        var TB;
        const JB = this.settings;
        (0, kB.i)(JB.position, ZB.position), RB(JB.position, JB.lookDirection, null !== (TB = JB.lookAt) && void 0 !== TB ? TB : this.vz.localPlayerId, this.targets, this.base), IB.apply(this.base, ZB), ZB.fov = FB(JB, this.vz)
      }
      continueFrom(BB) {
        BB instanceof rB && (0, JB.i)(BB.base, this.base)
      }
      reset(BB) {
        PB(this.base, BB)
      }
    }
    class mB {
      constructor(BB, IB, ZB, TB) {
        this.settings = BB, this.vz = IB, this.targets = ZB, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.zq = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = jB(TB), this.goal = [...TB.position]
      }
      update(BB, IB, ZB) {
        var TB, JB, oB;
        const GB = this.settings,
          vB = null !== (TB = GB.target) && void 0 !== TB ? TB : this.vz.localPlayerId,
          cB = this.targets.feetPosition(vB);
        let nB = !1;
        cB && (nB = this.foundFeet && CB(this.lastFeet, cB) > 32 + .1 * BB, (0, kB.i)(cB, this.lastFeet), this.foundFeet = !0, this.placeGoal(cB, vB));
        const hB = null !== (JB = GB.smoothMs) && void 0 !== JB ? JB : 0;
        !this.started || hB < 1 || nB ? ((0, kB.i)(this.goal, this.smoothed), this.zq.fill(0), this.started = !0) : NB(this.smoothed, this.zq, this.goal, hB, BB), nB && (this.distance = -1), (0, kB.i)(this.smoothed, ZB.position);
        const zB = !0 === GB.avoidTerrain ? this.pullIn(vB, BB, ZB) : 1;
        let gB = this.goal;
        if ("target" === GB.offsetSpace) gB = ZB.position;
        else if (zB < 1) {
          gB = this.aimOrigin;
          for (let BB = 0; BB < 3; BB++) gB[BB] = ZB.position[BB] + (this.goal[BB] - this.smoothed[BB]) * zB
        }
        RB(gB, GB.lookDirection, null !== (oB = GB.lookAt) && void 0 !== oB ? oB : vB, this.targets, this.base), IB.apply(this.base, ZB), ZB.fov = FB(GB, this.vz)
      }
      continueFrom(BB) {
        BB instanceof mB && (0, TB.u)(BB.settings.target, this.settings.target) && ((0, JB.i)(BB.base, this.base), (0, kB.i)(BB.goal, this.goal), (0, kB.i)(BB.lastFeet, this.lastFeet), this.foundFeet = BB.foundFeet, (0, kB.i)(BB.smoothed, this.smoothed), (0, kB.i)(BB.zq, this.zq), this.started = BB.started, !0 === BB.settings.avoidTerrain && (this.distance = BB.distance))
      }
      reset(BB) {
        PB(this.base, BB), this.zq.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(BB, IB, ZB) {
        const TB = this.targets.aimPoint(BB);
        if (!TB) return 1;
        const JB = ZB.position,
          oB = CB(TB, JB);
        if (!(oB > 0)) return 1;
        const GB = this.toCamera;
        for (let kB = 0; kB < 3; kB++) GB[kB] = (JB[kB] - TB[kB]) / oB;
        const vB = function(BB, IB, ZB) {
          return BB < 0 || IB < BB ? IB : IB + (BB - IB) * Math.exp(-ZB / 150)
        }(this.distance, function(BB, IB, ZB, TB) {
          const JB = BB.raycastTerrain(IB, ZB, TB);
          return null !== JB && Number.isFinite(JB) ? Math.min(TB, Math.max(0, JB - .2)) : TB
        }(this.vz, TB, GB, oB), IB);
        if (oB - vB < .001) return this.distance = -1, 1;
        this.distance = vB;
        for (let kB = 0; kB < 3; kB++) JB[kB] = TB[kB] + GB[kB] * vB;
        return vB / oB
      }
      placeGoal(BB, IB) {
        const ZB = this.settings.offset;
        let TB = ZB[0],
          JB = ZB[2];
        if ("target" === this.settings.offsetSpace) {
          const BB = this.targets.heading(IB),
            oB = Math.cos(BB),
            GB = Math.sin(BB);
          TB = ZB[0] * oB + ZB[2] * GB, JB = -ZB[0] * GB + ZB[2] * oB
        }
        this.goal[0] = BB[0] + TB, this.goal[1] = BB[1] + ZB[1], this.goal[2] = BB[2] + JB
      }
    }
    class XB {
      constructor(BB, IB, ZB, TB) {
        var JB, oB;
        this.settings = BB, this.vz = IB, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = BB.keyframes.length > 0 ? new HB(BB.keyframes, null === (JB = BB.smooth) || void 0 === JB || JB, null !== (oB = BB.loop) && void 0 !== oB && oB) : null, this.base = (0, kB.f)(TB, (0, kB.l)()), this.resolveTarget = BB => ZB.aimPoint(BB)
      }
      update(BB, IB, ZB) {
        this.elapsedMs += BB;
        const TB = FB(this.settings, this.vz);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, TB, this.base) : this.base.fov = TB, (0, kB.i)(this.base.position, ZB.position), ZB.fov = this.base.fov, IB.apply(this.base, ZB)
      }
      continueFrom(BB) {
        BB instanceof XB && (0, TB.u)(BB.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = BB.elapsedMs, (0, kB.f)(BB.base, this.base))
      }
      reset(BB) {
        PB(this.base, BB), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function LB(BB, IB) {
      return (0, TB.x)(BB, IB)
    }
    class eB {
      constructor(BB, IB, ZB) {
        var TB;
        this.settings = BB, this.vz = IB, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const JB = null !== ZB && ZB.settings.mode === BB.mode,
          oB = JB ? ZB.pose : IB.getDefaultPose();
        this.pose = (0, kB.f)(oB, (0, kB.l)()), this.lastGoodPose = (0, kB.f)(JB ? ZB.lastGoodPose : oB, (0, kB.l)()), this.look = new qB(BB.playerLook), this.targets = null !== (TB = null === ZB || void 0 === ZB ? void 0 : ZB.targets) && void 0 !== TB ? TB : new MB(IB);
        const GB = (0, kB.f)(oB, (0, kB.l)());
        JB && ZB.look.unapply(GB, GB), this.mode = function(BB, IB, ZB, TB) {
          switch (BB.mode) {
            case "fixed":
              return new rB(BB, IB, ZB, TB);
            case "follow":
              return new mB(BB, IB, ZB, TB);
            case "path":
              return new XB(BB, IB, ZB, TB);
            case "frame":
              return new gB(BB, IB, ZB, TB)
          }
        }(BB, IB, this.targets, GB), JB && (this.look.continueFrom(ZB.look), this.mode.continueFrom(ZB.mode))
      }
      update(BB, IB) {
        return this.look.update(BB, IB), this.mode.update(BB, this.look, this.pose), (0, kB.o)(this.pose) ? (0, kB.f)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, kB.f)(this.lastGoodPose, this.pose), this.mode.reset((0, kB.o)(this.lastGoodPose) ? this.lastGoodPose : this.vz.getDefaultPose())), this.pose
      }
    }

    function uB(BB) {
      return [0, 0, BB[2], BB[3]]
    }
    class fB {
      constructor(BB) {
        this.vz = BB, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new vB, this.shot = null, this.blend = null, this.mixed = (0, kB.l)(), this.output = (0, kB.l)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(BB) {
        const IB = (0, cB.e)(BB);
        if ((0, TB.u)(IB, this.pending ? this.pending.settings : this.settings)) return;
        const ZB = LB(this.settings, IB);
        if (void 0 !== IB.transition && !ZB) return this.pending = {
          settings: IB,
          shot: "default" === IB.mode ? null : new eB(IB, this.vz, null)
        }, void this.fade.fadeOut(IB.transition);
        const JB = null !== this.pending;
        this.pending = null, !JB && ZB || this.fade.fadeIn(TB.m.minTransitionFadeMs), this.show(IB, !1)
      }
      show(BB, IB) {
        var ZB, JB;
        if ((0, TB.u)(BB, this.settings)) return;
        const GB = !IB && LB(this.settings, BB);
        this.settings = BB;
        const vB = null !== this.blend && this.blend.elapsedMs > 0,
          cB = (0, kB.f)(this.hasOutput ? this.output : this.vz.getDefaultPose(), (0, kB.l)());
        if (this.shot = "default" === BB.mode ? null : new eB(BB, this.vz, IB ? null : this.shot), GB) return;
        const nB = IB || !this.shot && !this.hasOutput ? 0 : null !== (ZB = BB.blendInMs) && void 0 !== ZB ? ZB : 0;
        if (nB <= 0) return void(this.blend = null);
        const hB = (0, oB.h)(null !== (JB = BB.blendEasing) && void 0 !== JB ? JB : "easeInOut");
        this.blend = {
          from: cB,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: nB,
          easing: vB ? uB(hB) : hB
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
      update(BB, IB) {
        const ZB = Number.isFinite(BB) && BB > 0 ? BB : 0;
        if (this.fade.advance(ZB) && null !== this.pending) {
          const {
            settings: BB
          } = this.pending;
          this.pending = null, this.show(BB, !0)
        }
        this.loadingPositions.length = 0;
        const TB = this.pending;
        if (null !== TB && void 0 !== TB && TB.shot) {
          const BB = "path" === TB.settings.mode ? 0 : ZB;
          this.noteLoadingPosition(TB.shot.update(BB, kB.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const GB = this.shot ? this.shot.update(ZB, IB) : this.vz.getDefaultPose();
        this.shot && this.noteLoadingPosition(GB.position);
        const vB = this.blend;
        if (!vB) return this.writeOutput(GB);
        vB.elapsedMs += ZB;
        const cB = Math.min(1, vB.elapsedMs / vB.durationMs);
        if (vB.headingDelta = Number.isFinite(vB.headingDelta) ? (0, JB.y)(vB.headingDelta, GB.heading - vB.from.heading) : (0, JB.w)(vB.from.heading, GB.heading), (0, kB.t)(vB.from, GB, vB.headingDelta, (0, oB.g)(cB, vB.easing), this.mixed), cB >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else vB.fromScripted && this.noteLoadingPosition(vB.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(BB) {
        if (BB.every(Number.isFinite)) {
          const IB = this.loadingPositions;
          IB.push((0, kB.i)(BB, this.loadingSlots[IB.length]))
        }
      }
      writeOutput(BB) {
        const IB = this.output;
        (0, kB.o)(BB) ? (0, kB.f)(BB, IB) : this.hasOutput || (0, kB.f)(this.vz.getDefaultPose(), IB), IB.pitch = (0, JB.h)(IB.pitch);
        const ZB = this.vz.getDefaultFov(),
          oB = Number.isFinite(ZB) && ZB > 0 && ZB < 180,
          GB = oB ? Math.min(TB.m.minFov, ZB) : TB.m.minFov,
          vB = oB ? Math.max(TB.m.maxFov, ZB) : TB.m.maxFov;
        return IB.fov = Number.isFinite(IB.fov) ? Math.min(vB, Math.max(GB, IB.fov)) : vB, this.hasOutput = !0, IB
      }
    }
  },
  39242: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB,
      f: () => vB,
      i: () => GB,
      l: () => oB,
      o: () => cB,
      q: () => kB,
      t: () => nB
    });
    var TB = ZB(39245);
    const JB = {
      YH: 0,
      iH: 0
    };

    function oB() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function GB(BB, IB) {
      return IB[0] = BB[0], IB[1] = BB[1], IB[2] = BB[2], IB
    }

    function vB(BB, IB) {
      return GB(BB.position, IB.position), IB.heading = BB.heading, IB.pitch = BB.pitch, IB.fov = BB.fov, IB
    }

    function kB(BB, IB) {
      return Array.isArray(BB) && BB.length === IB && BB.every(Number.isFinite)
    }

    function cB(BB) {
      return kB(BB.position, 3) && Number.isFinite(BB.heading) && Number.isFinite(BB.pitch) && Number.isFinite(BB.fov)
    }

    function nB(BB, IB, ZB, JB, oB) {
      for (let TB = 0; TB < 3; TB++) oB.position[TB] = BB.position[TB] + (IB.position[TB] - BB.position[TB]) * JB;
      return oB.heading = (0, TB.v)(BB.heading + ZB * JB), oB.pitch = BB.pitch + (IB.pitch - BB.pitch) * JB, oB.fov = BB.fov + (IB.fov - BB.fov) * JB, oB
    }
  },
  39262: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => sB,
      g: () => zB
    });
    var TB = ZB(39257),
      JB = ZB(39242);
    const oB = TB.i,
      GB = TB.q;

    function vB(BB, IB, ZB, TB) {
      return Number.isFinite(BB) ? Math.min(ZB, Math.max(IB, BB)) : TB
    }

    function kB(BB, IB, ZB) {
      return void 0 !== BB && Number.isFinite(BB) ? Math.min(ZB, Math.max(IB, BB)) : void 0
    }

    function cB(BB) {
      const IB = TB.m.maxCoordinate;
      return [Math.min(IB, Math.max(-IB, BB[0])), Math.min(IB, Math.max(-IB, BB[1])), Math.min(IB, Math.max(-IB, BB[2]))]
    }

    function nB(BB) {
      return "string" === typeof BB ? BB : (0, JB.q)(BB, 3) ? cB(BB) : void 0
    }
    const hB = new RegExp(TB.s);

    function zB(BB) {
      return "string" === typeof BB && hB.test(BB)
    }

    function FB(BB) {
      const IB = [];
      if (!Array.isArray(BB)) return IB;
      for (const ZB of BB.slice(0, TB.m.maxFrameTargets)) {
        const BB = nB(ZB);
        void 0 === BB || "string" === typeof BB && !zB(BB) || IB.push(BB)
      }
      return IB
    }

    function NB(BB) {
      if (!(0, JB.q)(BB, 3)) return;
      const IB = Math.max(Math.abs(BB[0]), Math.abs(BB[1]), Math.abs(BB[2])),
        ZB = Math.hypot(BB[0] / IB, BB[1] / IB, BB[2] / IB);
      return 0 === IB || IB * ZB < TB.m.minDirectionLength ? void 0 : [BB[0] / IB / ZB, BB[1] / IB / ZB, BB[2] / IB / ZB]
    }

    function gB(BB) {
      if (void 0 !== BB) return "string" === typeof BB ? oB.includes(BB) ? BB : void 0 : (0, JB.q)(BB, 4) ? [vB(BB[0], 0, 1, 0), vB(BB[1], TB.m.minEasingY, TB.m.maxEasingY, 0), vB(BB[2], 0, 1, 1), vB(BB[3], TB.m.minEasingY, TB.m.maxEasingY, 1)] : "linear"
    }

    function qB(BB) {
      if (BB) return {
        maxYaw: vB(BB.maxYaw, 0, TB.m.maxPlayerLook, 0),
        maxPitch: vB(BB.maxPitch, 0, TB.m.maxPlayerLook, 0),
        returnMs: kB(BB.returnMs, 0, TB.m.maxReturnMs)
      }
    }
    const yB = new RegExp(TB.c);

    function UB(BB) {
      var IB;
      if ("object" !== typeof BB || null === BB) return;
      const ZB = TB.m.maxTransitionMs,
        JB = TB.m.minTransitionFadeMs;
      return {
        colour: "string" === typeof BB.colour && yB.test(BB.colour) ? BB.colour : TB.f,
        outMs: vB(BB.outMs, JB, ZB, JB),
        holdMs: vB(null !== (IB = BB.holdMs) && void 0 !== IB ? IB : 0, 0, ZB, 0),
        inMs: vB(BB.inMs, JB, ZB, JB)
      }
    }

    function WB(BB) {
      return !0 === BB || void 0
    }

    function dB(BB) {
      if ("object" !== typeof BB || null === BB) return !1;
      const IB = BB.lookAt;
      return Number.isFinite(BB.timeMs) && (0, JB.q)(BB.position, 3) && (void 0 === IB || "string" === typeof IB || (0, JB.q)(IB, 3))
    }

    function CB(BB) {
      return {
        ...BB,
        timeMs: vB(BB.timeMs, 0, TB.m.maxPathMs, 0),
        position: cB(BB.position),
        lookAt: nB(BB.lookAt),
        lookDirection: NB(BB.lookDirection),
        fov: kB(BB.fov, TB.m.minFov, TB.m.maxFov),
        easing: gB(BB.easing)
      }
    }

    function QB(BB) {
      const IB = [];
      if (!Array.isArray(BB)) return IB;
      for (const ZB of BB.slice(0, TB.m.maxKeyframes)) {
        if (!dB(ZB)) continue;
        const BB = CB(ZB);
        (0 === IB.length || BB.timeMs > IB[IB.length - 1].timeMs) && IB.push(BB)
      }
      return IB
    }

    function sB(BB) {
      if ("object" !== typeof BB || null === BB) return {
        mode: "default"
      };
      const IB = {
          blendInMs: kB(BB.blendInMs, 0, TB.m.maxBlendInMs),
          blendEasing: gB(BB.blendEasing),
          transition: UB(BB.transition),
          letterbox: WB(BB.letterbox),
          hideHud: WB(BB.hideHud)
        },
        ZB = {
          mode: "default",
          ...IB
        };
      if ("default" === BB.mode || "fixed" === BB.mode && !(0, JB.q)(BB.position, 3)) return ZB;
      const oB = {
        ...IB,
        fov: kB(BB.fov, TB.m.minFov, TB.m.maxFov),
        playerFacing: (hB = BB.playerFacing, GB.includes(hB) ? hB : void 0),
        playerLook: qB(BB.playerLook)
      };
      var hB, zB;
      switch (BB.mode) {
        case "fixed":
          return {
            ...BB, ...oB, position: cB(BB.position), lookAt: nB(BB.lookAt), lookDirection: NB(BB.lookDirection)
          };
        case "follow":
          return {
            ...BB, ...oB, target: "string" === typeof BB.target ? BB.target : void 0, lookAt: nB(BB.lookAt), offset: (zB = BB.offset, Array.isArray(zB) ? [vB(zB[0], -TB.m.maxOffset, TB.m.maxOffset, 0), vB(zB[1], -TB.m.maxOffset, TB.m.maxOffset, 0), vB(zB[2], -TB.m.maxOffset, TB.m.maxOffset, 0)] : [0, 0, 0]), lookDirection: NB(BB.lookDirection), smoothMs: kB(BB.smoothMs, 0, TB.m.maxSmoothMs)
          };
        case "path":
          return {
            ...BB, ...oB, keyframes: QB(BB.keyframes)
          };
        case "frame":
          return {
            ...BB, ...oB, targets: FB(BB.targets), viewHeading: kB(BB.viewHeading, -TB.m.maxFrameHeading, TB.m.maxFrameHeading), viewElevation: kB(BB.viewElevation, 0, TB.m.maxFrameElevation), padding: kB(BB.padding, 0, TB.m.maxFrameDistance), closestDistance: kB(BB.closestDistance, 0, TB.m.maxFrameDistance), furthestDistance: kB(BB.furthestDistance, 0, TB.m.maxFrameDistance), smoothMs: kB(BB.smoothMs, 0, TB.m.maxSmoothMs)
          };
        default:
          return ZB
      }
    }
  },
  38696: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB
    });
    var TB = ZB(1281);

    function JB(BB) {
      const IB = /(\d*\.?\d+)px/.exec(BB);
      return IB ? Number(IB[1]) : null
    }

    function oB(BB) {
      return BB.split(/[\s,]+/).pop()
    }
    let GB = !1;
    const vB = {
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
      drawText: function(BB, IB, TB, vB, kB, cB) {
        if (kB <= 0 || cB <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: nB,
          fontVariant: hB,
          fontWeight: zB,
          fontSize: FB,
          font: NB
        } = this, gB = [nB, hB, zB, `${FB}px`, NB].filter(Boolean).join(" "), qB = [
          [zB, `${FB}px`, oB(NB)].filter(Boolean).join(" "), `${FB}px sans-serif`
        ], yB = BB.font, UB = function(BB, IB, ZB) {
          for (const TB of IB) {
            BB.font = TB;
            const IB = JB(BB.font),
              GB = oB(TB);
            if (null !== IB && Math.abs(IB - ZB) <= .5 && BB.font.toLowerCase().includes(GB.toLowerCase())) return TB
          }
          return null
        }(BB, [gB, ...qB], FB);
        UB !== gB && function(BB, IB, TB) {
          GB || (GB = !0, Promise.resolve().then((() => ZB(1125))).then((ZB => {
            let {
              Og: JB
            } = ZB;
            JB(new Error("A canvas didn't take canvasTxt's font"), {
              font: BB,
              XF: IB,
              drawnWith: null !== TB && void 0 !== TB ? TB : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(gB, yB, UB);
        const WB = JB(BB.font);
        if (null === UB && null !== WB && WB > 0) {
          const ZB = FB / WB;
          BB.save();
          try {
            return BB.scale(ZB, ZB), {
              height: this.drawLines(BB, IB, TB / ZB, vB / ZB, kB / ZB, cB / ZB, WB).height * ZB
            }
          } finally {
            BB.restore()
          }
        }
        return this.drawLines(BB, IB, TB, vB, kB, cB, FB)
      },
      drawLines: function(BB, IB, ZB, JB, oB, GB, vB) {
        const kB = ZB + oB,
          cB = JB + GB;
        let nB, hB = JB + GB / 2 + vB / 2;
        "right" === this.align ? (nB = kB, BB.textAlign = "right") : "left" === this.align ? (nB = ZB, BB.textAlign = "left") : (nB = ZB + oB / 2, BB.textAlign = "center");
        for (const TB of IB) {
          BB.measureText(TB).width >= oB && (IB = IB.replace(TB, ""))
        }
        IB = (0, TB.N)(IB);
        const zB = [],
          FB = IB.split("\n"),
          NB = this.justify ? BB.measureText("\u200a").width : 0;
        FB.forEach((IB => {
          let ZB = BB.measureText(IB).width;
          if (ZB <= oB) zB.push(IB);
          else {
            let TB = IB;
            const JB = oB;
            let GB, vB, kB;
            for (ZB = BB.measureText(TB).width; ZB > JB;) {
              for (GB = 0, vB = 0, kB = ""; vB < JB;) GB++, kB = TB.substr(0, GB), vB = BB.measureText(kB).width;
              GB--, kB = kB.substr(0, GB);
              const IB = GB;
              if (" " !== TB.substr(GB, 1)) {
                for (;
                  " " !== TB.substr(GB, 1) && 0 !== GB;) GB--;
                0 === GB && (GB = IB), kB = TB.substr(0, GB)
              }
              kB = this.justify ? this.justifyLine(BB, kB, NB, "\u200a", oB) : kB, TB = TB.substr(GB), ZB = BB.measureText(TB).width, zB.push(kB)
            }
            ZB > 0 && zB.push(TB)
          }
        }));
        const gB = this.lineHeight ? this.lineHeight : this.getTextHeight(BB, IB),
          qB = gB * (zB.length - 1),
          yB = qB / 2;
        let UB = JB;
        "top" === this.vAlign ? hB = JB + vB : "bottom" === this.vAlign ? (hB = cB - qB, UB = cB) : (UB = JB + GB / 2, hB -= yB), zB.forEach((IB => {
          IB = IB.trim(), BB.fillText(IB, nB, hB), hB += gB
        })), this.debug && (BB.lineWidth = 3, BB.strokeStyle = "#00909e", BB.strokeRect(ZB, JB, oB, GB), BB.lineWidth = 2, BB.strokeStyle = "#f6d743", BB.beginPath(), BB.moveTo(nB, JB), BB.lineTo(nB, cB), BB.stroke(), BB.strokeStyle = "#ff6363", BB.beginPath(), BB.moveTo(ZB, UB), BB.lineTo(kB, UB), BB.stroke());
        return {
          height: qB + gB
        }
      },
      getTextHeight: function(BB, IB) {
        const ZB = BB.textBaseline;
        BB.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: TB
        } = BB.measureText(IB);
        return BB.textBaseline = ZB, TB
      },
      justifyLine: function(BB, IB, ZB, TB, JB) {
        const oB = IB.trim(),
          GB = BB.measureText(oB).width,
          vB = oB.split(/\s+/).length - 1,
          kB = Math.floor((JB - GB) / ZB);
        if (vB <= 0 || kB <= 0) return oB;
        const cB = Math.floor(kB / vB);
        let nB = kB - vB * cB,
          hB = [];
        for (let zB = 0; zB < cB; zB++) hB.push(TB);
        hB = hB.join("");
        return oB.replace(/\s+/g, (BB => {
          const IB = nB > 0 ? hB + TB : hB;
          return nB--, BB + IB
        }))
      }
    }
  },
  39195: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return IB.set(BB), IB
    }
    ZB.d(IB, {
      c: () => TB
    })
  },
  38703: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => gB,
      e: () => NB,
      h: () => zB,
      l: () => nB,
      m: () => hB
    });
    var TB = ZB(4416),
      JB = ZB(360);
    const oB = 1024,
      GB = 1536,
      vB = 2 * TB.k + 1,
      kB = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      cB = 1.5;

    function nB(BB, IB, ZB) {
      if ("string" !== typeof BB) return IB;
      try {
        const ZB = JSON.parse(BB);
        return ZB && "object" === typeof ZB ? ZB : IB
      } catch (TB) {
        return void 0 !== ZB && console.error(`Couldn't parse ${ZB}`, TB), IB
      }
    }

    function hB(BB) {
      return nB(BB, null, "a leaderboard's rows")
    }

    function zB(BB, IB) {
      var ZB, TB;
      return null !== IB && void 0 !== IB ? IB : {
        status: null !== (ZB = BB.status) && void 0 !== ZB ? ZB : "loading",
        entries: null !== (TB = BB.entries) && void 0 !== TB ? TB : []
      }
    }

    function FB(BB, IB) {
      return "number" === typeof BB && Number.isFinite(BB) && BB > 0 ? BB : IB
    }

    function NB(BB, IB) {
      const ZB = FB(BB.size, 1);
      let TB = FB(BB.width, FB(2.5 * ZB, 2.5)),
        JB = FB(BB.height, FB(3.75 * ZB, 3.75));
      Number.isFinite(oB * JB / TB) && Number.isFinite(GB * TB / JB) || (TB = 2.5, JB = 3.75);
      const vB = JB / TB,
        kB = Math.max(1, Math.min(oB, IB / vB));
      return {
        width: TB,
        height: JB,
        layoutWidth: Math.max(oB, GB / vB),
        layoutHeight: Math.max(GB, oB * vB),
        pixelWidth: Math.round(kB),
        pixelHeight: Math.round(Math.max(1, Math.min(IB, kB * vB)))
      }
    }

    function gB(BB, IB, ZB, GB, nB, hB) {
      BB.setTransform(1, 0, 0, 1, 0, 0), BB.fillStyle = JB.P.defaultNameTagBackground, BB.fillRect(0, 0, IB, ZB), BB.scale(IB / GB.layoutWidth, ZB / GB.layoutHeight), BB.translate((GB.layoutWidth - oB) / 2, 0),
        function(BB, IB, ZB, oB) {
          var GB, nB, hB, zB;
          const {
            top: FB,
            around: NB,
            showPlayerText: gB,
            localPlayerDbId: UB
          } = ZB, {
            whiteUiText: WB,
            grayUiText: dB,
            yellowUiText: CB
          } = JB.P;
          BB.textBaseline = "middle";
          const QB = function(IB, ZB, TB, JB, oB, GB) {
              let vB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              BB.font = `bold ${JB}px 'Jetbrains Mono', monospace`, BB.fillStyle = oB, BB.textAlign = vB;
              let kB = IB.replace(/[\r\n\t]/g, " ");
              if (BB.measureText(kB).width > GB) {
                for (; kB.length > 0 && BB.measureText(`${kB}\u2026`).width > GB;) kB = kB.slice(0, -1);
                kB += "\u2026"
              }
              BB.fillText(kB, ZB, TB)
            },
            sB = IB => {
              BB.fillStyle = WB, BB.globalAlpha = .15, BB.fillRect(24, IB, 976, 2), BB.globalAlpha = 1
            },
            wB = null === UB ? null : (0, JB.nc)(UB),
            OB = BB => null !== wB && BB.playerHash === wB,
            YB = qB(FB.entries, TB.n),
            iB = "ready" === FB.status && YB.length > 0,
            pB = null === NB ? [] : qB(NB.entries, vB),
            aB = YB.some(OB),
            HB = null === NB ? null : function(BB) {
              const IB = BB;
              if (!IB || !Number.isFinite(IB.rank) || !Number.isFinite(IB.tied) || !Number.isFinite(IB.total)) return null;
              return IB
            }(NB.standing),
            MB = pB.find(OB),
            jB = YB.find(OB),
            PB = null === HB || void 0 === MB ? null : {
              value: MB.value,
              rank: HB.rank
            },
            RB = yB(YB, void 0 === jB || jB.value === (null === PB || void 0 === PB ? void 0 : PB.value) ? PB : null),
            rB = yB(pB, PB),
            mB = (BB, IB) => {
              const ZB = BB.findIndex(OB);
              return ZB >= 0 ? IB[ZB] : null
            },
            XB = null !== (GB = null !== (nB = null === HB || void 0 === HB ? void 0 : HB.rank) && void 0 !== nB ? nB : mB(pB, rB)) && void 0 !== GB ? GB : mB(YB, RB);
          BB.font = "bold 34px 'Jetbrains Mono', monospace";
          const LB = [...iB ? RB : [], ...aB ? [] : rB],
            eB = Math.min(280, Math.max(0, ...LB.map((IB => BB.measureText(kB.format(IB)).width)))),
            uB = eB <= 80,
            fB = uB ? 80 : 32 + eB,
            lB = uB ? 148 : fB + 28,
            AB = 660 - lB;
          QB(`TOP ${TB.n}  /  ALL TIME`, 24, 52, 28, dB, 976), QB(gB ? String(null !== (hB = IB.title) && void 0 !== hB ? hB : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, WB, 976), QB("RANK", 32, 174, 28, dB, lB - 40), QB("PLAYER", lB, 174, 28, dB, AB), QB(gB ? String(null !== (zB = IB.scoreLabel) && void 0 !== zB ? zB : "Score").slice(0, 24) : "Score", 992, 174, 28, dB, 304, "right"), sB(202);
          const tB = (oB - 232) / (TB.n + cB + vB),
            bB = 208 + TB.n * tB,
            xB = bB + cB * tB,
            EB = (IB, ZB, TB, JB) => {
              const oB = OB(IB);
              BB.fillStyle = oB ? CB : WB, BB.globalAlpha = oB ? .15 : JB ? .035 : 0, BB.fillRect(24, TB - tB / 2 + 1, 976, tB - 2), BB.globalAlpha = 1;
              const GB = oB ? CB : WB;
              QB(kB.format(ZB), fB, TB, 34, GB, uB ? 80 : eB, uB ? "center" : "right"), QB(gB ? String(IB.name).slice(0, 64) : "Player", lB, TB, 34, GB, AB);
              const vB = kB.format(IB.value);
              QB(BB.measureText(vB).width > 304 ? IB.value.toExponential(6) : vB, 992, TB, 34, GB, 304, "right")
            };
          if (iB)
            for (const [TB, JB] of YB.entries()) EB(JB, RB[TB], 208 + (TB + .5) * tB, TB % 2 === 0);
          else {
            const BB = "error" === FB.status,
              IB = BB ? "Couldn't load leaderboard" : "ready" === FB.status ? "No scores yet" : "Loading leaderboard\u2026",
              ZB = BB ? "Trying again shortly" : "ready" === FB.status ? "Be the first on the board!" : "Fetching the top players",
              TB = (208 + bB) / 2;
            QB(IB, 512, TB - 28, 40, BB ? JB.P.redUiText : WB, 960, "center"), QB(ZB, 512, TB + 27, 30, dB, 960, "center")
          }
          const DB = bB + cB * tB / 2;
          if (null === XB) sB(DB);
          else {
            const IB = null === HB ? 0 : HB.tied - 1,
              ZB = `YOUR RANK #${kB.format(XB)}${null===HB?"":` of ${kB.format(HB.total)}`}`;
            BB.font = "bold 36px 'Jetbrains Mono', monospace";
            const TB = Math.max(20, Math.min(36, Math.floor(34560 / BB.measureText(ZB).width)));
            QB(ZB, 512, DB - (IB > 0 ? 15 : 0), TB, CB, 960, "center"), IB > 0 && QB(`Tied with ${kB.format(IB)} other${1===IB?"":"s"}`, 512, DB + 24, 24, dB, 960, "center")
          }
          if (null === NB) return;
          const KB = xB + vB * tB / 2;
          if (aB) QB(`You're in the top ${TB.n}!`, 512, KB, 40, CB, 960, "center");
          else if (0 === pB.length) QB("You're not on this board yet", 512, KB, 34, dB, 960, "center");
          else
            for (const [TB, JB] of pB.entries()) EB(JB, rB[TB], xB + (TB + .5) * tB, TB % 2 === 0)
        }(BB, nB, hB, GB.layoutHeight)
    }

    function qB(BB, IB) {
      return Array.isArray(BB) ? BB.slice(0, IB).filter((BB => BB && Number.isFinite(BB.rank) && Number.isFinite(BB.value))) : []
    }

    function yB(BB, IB) {
      const ZB = [];
      let TB = !1;
      return BB.forEach(((JB, oB) => {
        if (null !== IB && JB.value === IB.value) return void ZB.push(IB.rank);
        const GB = oB > 0 && JB.value === BB[oB - 1].value;
        GB || (TB = 0 === oB && 1 !== JB.rank), ZB.push(GB && !TB ? ZB[oB - 1] : JB.rank)
      })), ZB
    }
  },
  38926: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      f: () => oB
    });
    const TB = 32;

    function JB(BB) {
      return Array.from(BB).length
    }

    function oB(BB) {
      const IB = [""];
      let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        JB = "";
      const oB = () => {
        IB.push(""), ZB = 0, JB = ""
      };
      for (const GB of BB.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(GB)) oB();
        else if (/^\s+$/.test(GB)) JB += GB;
      else if (GB.length > 0) {
        const BB = Array.from(GB);
        ZB > 0 && ZB + JB.length + BB.length > TB && oB(), IB[IB.length - 1] += JB, ZB += JB.length, JB = "";
        for (const JB of BB) ZB >= TB && oB(), IB[IB.length - 1] += JB, ZB++
      }
      return IB[IB.length - 1] += JB, IB
    }
  },
  39193: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB = ZB(36649),
      JB = ZB.n(TB);
    const oB = [1, 1, 1];

    function GB(BB) {
      if (!BB) return [...oB];
      try {
        const [IB, ZB, TB] = JB()(BB).rgb().array();
        return [IB / 255, ZB / 255, TB / 255]
      } catch (IB) {
        return console.warn(`Invalid groundArrowPath colour "${BB}":`, IB), [...oB]
      }
    }
  },
  39288: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      d: () => cB,
      h: () => kB
    });
    var TB = ZB(311),
      JB = ZB(3071);
    const oB = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      GB = 512;

    function vB(BB) {
      var IB;
      const ZB = Math.min(screen.width, screen.height) * (null !== (IB = (0, TB.c)()) && void 0 !== IB ? IB : (0, JB.o)());
      return Math.max(window.innerHeight * (0, JB.o)(), ZB) / (0, JB.s)(BB)
    }

    function kB(BB, IB, ZB) {
      return IB / (2 * Math.tan(ZB / 2)) > GB ? BB : cB(BB)
    }

    function cB(BB) {
      return BB.map((BB => BB.replace(oB, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34011: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => vB,
      d: () => GB,
      f: () => JB,
      h: () => TB
    });
    const TB = {
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
      JB = "/textures/dayNight/sun.png",
      oB = "/textures/dayNight/moon.png",
      GB = "/textures/dayNight/stars",
      vB = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39257: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      f: () => hB,
      i: () => TB,
      m: () => kB,
      q: () => JB,
      s: () => cB,
      u: () => vB,
      x: () => GB
    });
    const TB = ["linear", "easeIn", "easeOut", "easeInOut"],
      JB = ["movement", "camera", "cursor"],
      oB = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function GB(BB, IB) {
      return vB(BB, IB, oB)
    }

    function vB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (BB === IB || Number.isNaN(BB) && Number.isNaN(IB)) return !0;
      if ("object" !== typeof BB || "object" !== typeof IB || null === BB || null === IB || Array.isArray(BB) !== Array.isArray(IB)) return !1;
      const TB = BB,
        JB = IB;
      for (const oB of new Set([...Object.keys(TB), ...Object.keys(JB)]))
        if (!ZB.includes(oB) && !vB(TB[oB], JB[oB])) return !1;
      return !0
    }
    const kB = {
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
      cB = "^-[1-9][0-9]*$",
      nB = "^#[0-9a-fA-F]{6}$",
      hB = "#000000"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);