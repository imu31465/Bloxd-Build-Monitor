export const id = 191;
export const ids = [191];
export const modules = {
  39102: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      constructor(DD, zD) {
        this.read = DD, this.apply = zD, this.release = null
      }
      turn(DD, zD) {
        const wD = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: zD,
          forcedCameraDirection: [DD[0], DD[1], DD[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), zD + 100),
          transitionMs: wD
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(DD) {
        null !== this.release && (clearTimeout(this.release.timer), DD && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38638: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD,
      f: () => sD
    });
    const pD = new Map;

    function sD(DD, zD) {
      pD.set(DD, zD)
    }

    function KD(DD) {
      return DD ? pD.get(DD) : void 0
    }
  },
  39560: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD
    });
    var pD = wD(38180);

    function sD(DD, zD, wD) {
      var sD, KD, rD, LD, cD, gD, RD;
      const AD = (0, pD.c)(DD, zD, wD[0], wD[1], wD[2]),
        UD = AD ? null !== (sD = AD.textCell) && void 0 !== sD ? sD : AD.rect.anchor : wD,
        fD = zD(UD[0], UD[1], UD[2]);
      return {
        pos: [wD[0], wD[1], wD[2]],
        noticeboardSpan: AD && {
          width: AD.rect.width,
          height: AD.rect.height
        },
        text: null !== (KD = null === fD || void 0 === fD || null === (rD = fD.persisted) || void 0 === rD || null === (LD = rD.shared) || void 0 === LD ? void 0 : LD.text) && void 0 !== KD ? KD : "",
        textSize: null !== (cD = null === fD || void 0 === fD || null === (gD = fD.persisted) || void 0 === gD || null === (RD = gD.shared) || void 0 === RD ? void 0 : RD.textSize) && void 0 !== cD ? cD : null
      }
    }
  },
  38486: (DD, zD, wD) => {
    function pD(DD) {
      switch (DD.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    wD.d(zD, {
      c: () => sD,
      e: () => KD,
      h: () => pD
    });
    const sD = 4,
      KD = 3
  },
  39117: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      g: () => KD
    });
    var pD = wD(351);
    const sD = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class KD {
      constructor(DD) {
        this.importGame = DD, this.loads = new Map, this.loaded = new Map
      }
      load(DD) {
        const zD = (0, pD.Tb)(DD);
        if (!sD.has(zD)) return Promise.resolve(void 0);
        let wD = this.loads.get(zD);
        return wD || (wD = this.importGame(zD).then((DD => {
          const wD = DD.default;
          if ("function" !== typeof wD) throw new Error(`${zD}'s client code has no default-exported factory`);
          return this.loaded.set(zD, wD), wD
        })).catch((DD => {
          throw this.loads.delete(zD), DD
        })), this.loads.set(zD, wD)), wD
      }
      loadedFactory(DD) {
        const zD = (0, pD.Tb)(DD);
        if (!sD.has(zD)) return;
        const wD = this.loaded.get(zD);
        if (!wD) throw new Error(`${zD}'s client code started before it loaded`);
        return wD
      }
    }
  },
  39567: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(9286),
      sD = wD(34218),
      KD = wD(3288);

    function rD(DD) {
      if (DD === pD.c) return 0;
      const zD = (0, KD.e)(DD);
      if (void 0 !== zD && zD <= sD.MAX_BLOCK_ID) return zD;
      const wD = (0, KD.e)(DD.split("|")[0]);
      if (void 0 !== wD && wD <= sD.MAX_BLOCK_ID && (0, sD.rootMetaDescOf)(wD) === DD) return wD;
      throw new Error(`Invalid block name. You sent ${DD}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39177: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD
    });
    var pD = wD(20);
    class sD {
      constructor(DD) {
        this.screen = DD, this.hidesHud = !1
      }
      show(DD, zD) {
        this.screen.setFade(DD.colour, DD.alpha), this.screen.setLetterbox(!0 === zD.letterbox, DD.alpha < 1), this.setHudHidden(!0 === zD.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(DD) {
        this.hidesHud !== DD && (this.hidesHud = DD, pD.e.set({
          isUiHiddenByCamera: DD
        }))
      }
    }
  },
  39140: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      e: () => UD,
      f: () => AD,
      i: () => rD,
      j: () => ID,
      k: () => cD,
      o: () => BD,
      s: () => gD,
      u: () => LD,
      w: () => RD
    });
    const pD = Math.PI / 2 - .001,
      sD = 2 * Math.PI,
      KD = 1e-9;

    function rD(DD, zD) {
      zD.heading = DD.heading, zD.pitch = DD.pitch
    }

    function LD(DD, zD) {
      const wD = zD - DD;
      return wD - sD * Math.floor((wD + Math.PI) / sD)
    }

    function cD(DD, zD, wD) {
      return DD + LD(DD, zD) * wD
    }

    function gD(DD) {
      if (!Number.isFinite(DD)) return DD;
      const zD = DD - sD * Math.floor(DD / sD);
      return zD < sD ? zD : 0
    }

    function RD(DD, zD) {
      return DD + LD(DD, zD)
    }

    function AD(DD) {
      return Math.max(-pD, Math.min(pD, DD))
    }

    function UD(DD, zD, wD) {
      const pD = Math.cos(zD);
      return wD[0] = pD * Math.sin(DD), wD[1] = -Math.sin(zD), wD[2] = pD * Math.cos(DD), wD
    }

    function fD(DD, zD, wD, pD) {
      const sD = Math.sqrt(DD * DD + wD * wD);
      return sD < KD && Math.abs(zD) < KD || (sD >= KD && (pD.heading = Math.atan2(DD, wD)), pD.pitch = AD(Math.atan2(-zD, sD) + 0)), pD
    }

    function ID(DD, zD) {
      return fD(DD[0], DD[1], DD[2], zD)
    }

    function BD(DD, zD, wD) {
      return fD(zD[0] - DD[0], zD[1] - DD[1], zD[2] - DD[2], wD)
    }
  },
  39168: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      f: () => sD
    });
    var pD = wD(39140);

    function sD(DD) {
      var zD;
      const wD = "default" === DD.mode ? "movement" : null !== (zD = DD.playerFacing) && void 0 !== zD ? zD : "movement";
      return "cursor" === wD ? {
        facing: wD,
        mouseTurns: null
      } : {
        facing: wD,
        mouseTurns: "default" !== DD.mode && void 0 !== DD.playerLook ? "look" : "view"
      }
    }

    function KD(DD, zD, wD, sD, KD, rD) {
      return rD.aT = 0, rD.qT = 0, rD.pointedAt = void 0, void 0 !== sD ? KD ? (rD.pointedAt = sD, DD) : (0, pD.s)(sD.heading) : KD ? (rD.aT = zD, rD.qT = wD, DD) : (0, pD.s)(DD + zD)
    }
  },
  39151: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => mD
    });
    var pD = wD(39155),
      sD = wD(39140),
      KD = wD(36966);

    function rD(DD, zD, wD, pD) {
      if (!(pD > 0)) return zD;
      const sD = zD > DD ? Math.min(zD, DD + wD / pD) : Math.max(zD, DD - wD / pD);
      return Math.abs(zD - sD) < 1e-9 ? zD : sD
    }
    class LD {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: pD.c,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(DD) {
        !this.isGoingOut() && this.sinceTurnMs < pD.e.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: DD
        } : (this.waiting = null, this.startOut(DD))
      }
      fadeIn(DD) {
        this.isGoingOut() ? this.sinceTurnMs < pD.e.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: DD
        } : (this.waiting = null, this.startIn(DD)) : this.waiting = null
      }
      advance(DD) {
        const zD = this.waiting;
        if (null === zD) return this.step(DD);
        const wD = pD.e.minFadeTurnMs - this.sinceTurnMs;
        if (wD > DD) return this.step(DD);
        const sD = this.step(wD);
        return this.waiting = null, "out" === zD.turn ? this.startOut(zD.transition) : this.startIn(zD.minMs), this.step(DD - wD) || sD
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(DD) {
        ("in" === this.phase || null === this.phase && this.clearMs < pD.e.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = DD.colour), this.outMs = DD.outMs, this.holdMs = DD.holdMs, this.inMs = DD.inMs
      }
      startIn(DD) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(DD, this.inMs)
      }
      step(DD) {
        const zD = this.screen;
        this.sinceTurnMs += DD, null === this.phase && (this.clearMs += DD);
        let wD = !1,
          sD = DD;
        if ("out" === this.phase) {
          const pD = (1 - zD.alpha) * this.outMs;
          if (zD.alpha = rD(zD.alpha, 1, DD, this.outMs), zD.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, sD = Math.max(0, DD - pD), wD = !0
        }
        let KD = DD;
        if ("hold" === this.phase) {
          this.heldMs += sD;
          const DD = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - pD.e.minFadeTurnMs);
          if (DD < 0 || wD) return wD;
          this.phase = "in", this.sinceTurnMs = DD, KD = DD
        }
        return "in" === this.phase && (zD.alpha = rD(zD.alpha, 0, KD, this.inMs), zD.alpha <= 0 && (this.phase = null, this.clearMs = 0)), wD
      }
    }
    var cD = wD(39133),
      gD = wD(39160),
      RD = wD(1886),
      AD = wD(36568);

    function UD(DD, zD) {
      for (let wD = 0; wD < zD.length; wD++) zD[wD] = DD[wD]
    }

    function fD(DD, zD) {
      var wD;
      return null !== (wD = DD.fov) && void 0 !== wD ? wD : zD.getDefaultFov()
    }

    function ID(DD, zD, wD, pD, sD) {
      const KD = 2 / pD,
        rD = Math.exp(-KD * sD);
      for (let LD = 0; LD < DD.length; LD++) {
        const pD = DD[LD] - wD[LD],
          cD = (zD[LD] + KD * pD) * sD;
        DD[LD] = wD[LD] + (pD + cD) * rD, zD[LD] = (zD[LD] - KD * cD) * rD
      }
    }
    class BD {
      constructor(DD, zD, wD, pD) {
        var KD, rD, LD, cD, gD;
        this.settings = DD, this.KU = zD, this.targets = wD, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.UG = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, sD.s)((0, RD.l)(null !== (KD = DD.viewHeading) && void 0 !== KD ? KD : 0)),
          pitch: (0, sD.f)((0, RD.l)(null !== (rD = DD.viewElevation) && void 0 !== rD ? rD : 45))
        }, this.closestDistance = null !== (LD = DD.closestDistance) && void 0 !== LD ? LD : Math.min(6, null !== (cD = DD.furthestDistance) && void 0 !== cD ? cD : 1 / 0), this.furthestDistance = null !== (gD = DD.furthestDistance) && void 0 !== gD ? gD : Math.max(64, this.closestDistance);
        const AD = (0, sD.e)(this.base.heading, this.base.pitch, this.forward),
          UD = pD.position,
          fD = this.closestDistance;
        this.goal = [UD[0] + AD[0] * fD, UD[1] + AD[1] * fD, UD[2] + AD[2] * fD, fD, this.base.heading, this.base.pitch]
      }
      update(DD, zD, wD) {
        var pD, KD;
        this.placeGoal(null !== (pD = this.settings.fov) && void 0 !== pD ? pD : this.KU.getBaseFov()), this.goal[4] = (0, sD.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const rD = null !== (KD = this.settings.smoothMs) && void 0 !== KD ? KD : 400;
        !this.started || rD < 1 ? (UD(this.goal, this.smoothed), this.UG.fill(0), this.started = !0) : ID(this.smoothed, this.UG, this.goal, rD, DD), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, sD.f)(this.smoothed[5]), zD.apply(this.angles, wD);
        const LD = (0, sD.e)(wD.heading, wD.pitch, this.forward);
        for (let sD = 0; sD < 3; sD++) wD.position[sD] = this.smoothed[sD] - LD[sD] * this.smoothed[3];
        wD.fov = fD(this.settings, this.KU)
      }
      continueFrom(DD) {
        DD instanceof BD && (UD(DD.goal, this.goal), UD(DD.smoothed, this.smoothed), UD(DD.UG, this.UG), this.framedTargets = DD.framedTargets, this.started = DD.started)
      }
      reset() {
        this.UG.fill(0), this.started = !1
      }
      placeGoal(DD) {
        var zD;
        let wD = 0;
        for (const RD of this.settings.targets) {
          const DD = this.targets.currentAimPoint(RD);
          DD && (0, cD.g)(DD, this.pointAt(wD++))
        }
        if (wD > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const DD = this.targets.aimPoint(this.KU.localPlayerId);
          DD && (0, cD.g)(DD, this.pointAt(wD++))
        }
        const pD = this.goal;
        if (0 === wD) return void(pD[3] = this.withinDistances(pD[3]));
        for (let cD = 0; cD < 3; cD++) {
          let DD = 1 / 0,
            zD = -1 / 0;
          for (let pD = 0; pD < wD; pD++) DD = Math.min(DD, this.points[pD][cD]), zD = Math.max(zD, this.points[pD][cD]);
          pD[cD] = (DD + zD) / 2
        }
        let sD = 0;
        for (let cD = 0; cD < wD; cD++) {
          const DD = this.points[cD];
          sD = Math.max(sD, Math.hypot(DD[0] - pD[0], DD[1] - pD[1], DD[2] - pD[2]))
        }
        const KD = Math.tan((0, RD.l)(DD) / 2),
          rD = Math.atan(KD * (!0 === this.settings.letterbox ? AD.e : 1)),
          LD = Math.atan(KD * this.KU.getAspectRatio()),
          gD = (sD + (null !== (zD = this.settings.padding) && void 0 !== zD ? zD : 2)) / Math.sin(Math.min(rD, LD));
        pD[3] = this.withinDistances(gD)
      }
      withinDistances(DD) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, DD))
      }
      pointAt(DD) {
        return DD === this.points.length && this.points.push([0, 0, 0]), this.points[DD]
      }
    }
    class GD {
      constructor(DD) {
        this.limits = DD, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(DD) {
        this.limits && (this.yawOffset = DD.yawOffset, this.pitchOffset = DD.pitchOffset, this.idleMs = DD.idleMs)
      }
      update(DD, zD) {
        const wD = this.limits;
        if (!wD) return;
        const pD = Number.isFinite(zD.aT) ? zD.aT : 0,
          sD = Number.isFinite(zD.qT) ? zD.qT : 0;
        if (zD.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: zD.pointedAt.heading,
          pitch: zD.pointedAt.pitch
        };
        else if (0 !== pD || 0 !== sD) this.idleMs = 0, this.yawOffset += pD, this.pitchOffset += sD;
        else {
          const zD = Math.max(0, this.idleMs + DD - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += DD, void 0 !== wD.returnMs && zD > 0) {
            const DD = wD.returnMs > 0 ? Math.exp(-3 * zD / wD.returnMs) : 0;
            this.yawOffset *= DD, this.pitchOffset *= DD
          }
        }
        this.clampOffsets(wD)
      }
      clampOffsets(DD) {
        if (DD.maxYaw >= 180) this.yawOffset = (0, sD.u)(0, this.yawOffset);
        else {
          const zD = (0, RD.l)(DD.maxYaw);
          this.yawOffset = Math.max(-zD, Math.min(zD, this.yawOffset))
        }
        const zD = (0, RD.l)(DD.maxPitch);
        this.pitchOffset = Math.max(-zD, Math.min(zD, this.pitchOffset))
      }
      apply(DD, zD) {
        this.pointedAt && this.limits && (this.yawOffset = (0, sD.u)(DD.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - DD.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const wD = (0, sD.f)(DD.pitch + this.pitchOffset);
        this.pitchOffset = wD - DD.pitch, zD.heading = (0, sD.s)(DD.heading + this.yawOffset), zD.pitch = wD
      }
      unapply(DD, zD) {
        zD.heading = (0, sD.s)(DD.heading - this.yawOffset), zD.pitch = (0, sD.f)(DD.pitch - this.pitchOffset)
      }
    }
    const hD = 1e-6;

    function nD(DD) {
      return Math.sqrt(DD[0] * DD[0] + DD[1] * DD[1] + DD[2] * DD[2])
    }

    function MD(DD, zD, wD, pD, sD) {
      const KD = sD * sD,
        rD = KD * sD;
      return (2 * rD - 3 * KD + 1) * DD + (rD - 2 * KD + sD) * zD + (-2 * rD + 3 * KD) * wD + (rD - KD) * pD
    }

    function OD(DD, zD, wD, pD, sD) {
      const KD = sD * sD;
      return (6 * KD - 6 * sD) * DD + (3 * KD - 4 * sD + 1) * zD + (-6 * KD + 6 * sD) * wD + (3 * KD - 2 * sD) * pD
    }

    function JD(DD, zD) {
      const wD = zD[0] - DD[0],
        pD = zD[1] - DD[1],
        sD = zD[2] - DD[2];
      return Math.sqrt(wD * wD + pD * pD + sD * sD)
    }

    function ED(DD, zD, wD, pD, sD, KD) {
      for (let rD = 0; rD < 3; rD++) KD[rD] = sD ? DD[rD] * pD : wD[rD] - zD[rD];
      return sD && function(DD, zD) {
        const wD = nD(DD);
        if (wD > zD) {
          const pD = zD / wD;
          DD[0] *= pD, DD[1] *= pD, DD[2] *= pD
        }
      }(KD, 3 * JD(zD, wD)), KD
    }

    function QD(DD, zD, wD, pD) {
      for (let sD = 0; sD < 3; sD++) pD[sD] = 6 * (zD[sD] - DD[sD]) - 2 * wD[sD];
      if (nD(pD) < hD)
        for (let sD = 0; sD < 3; sD++) pD[sD] = zD[sD] - DD[sD];
      return pD
    }

    function XD(DD, zD) {
      return [2 * zD[0] - DD[0], 2 * zD[1] - DD[1], 2 * zD[2] - DD[2]]
    }

    function VD(DD, zD, wD, pD, sD, KD, rD) {
      if (!KD && !rD) return 0;
      const LD = KD ? DD : 2 * zD - wD,
        cD = rD ? wD : 2 * zD - DD,
        gD = KD ? pD : sD,
        RD = rD ? sD : pD,
        AD = (zD - LD) / gD,
        UD = (cD - zD) / RD;
      if (AD * UD <= 0) return 0;
      const fD = (cD - LD) / (gD + RD),
        ID = 3 * Math.min(Math.abs(AD), Math.abs(UD));
      return Math.max(-ID, Math.min(ID, fD))
    }

    function PD(DD, zD, wD, pD, sD, KD, rD) {
      const {
        u: LD,
        segmentMs: cD
      } = DD;
      if (!DD.curved) return wD + (pD - wD) * LD;
      return MD(wD, VD(zD, wD, pD, DD.beforeMs, cD, KD, !0) * cD, pD, VD(wD, pD, sD, cD, DD.afterMs, !0, rD) * cD, LD)
    }

    function CD(DD) {
      return Math.abs(DD.pitch) >= sD.c
    }
    class xD {
      constructor(DD, zD, wD, pD, sD) {
        this.nodes = DD, this.prevNodes = wD, this.nextNodes = pD, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = DD.map(((DD, wD) => this.nodeTangent(zD, sD, wD)))
      }
      sample(DD, zD, wD) {
        const {
          index: pD,
          toIndex: KD,
          segmentMs: rD,
          curved: LD
        } = DD, cD = this.fromAngles, gD = this.toAngles, RD = this.nodeAngles(pD, wD.position, zD, cD), AD = this.nodeAngles(KD, wD.position, zD, gD);
        if (rD > 0 && "aim" !== RD && "aim" !== AD && this.liveTangent(DD, cD)) return wD.heading = (0, sD.s)(cD.heading), void(wD.pitch = cD.pitch);
        if ("none" === RD && "none" === AD) return;
        !LD && rD > 0 && ("tangent" === RD && this.liveTangent(DD, cD), "tangent" === AD && this.liveTangent(DD, gD)), "none" === RD ? (0, sD.i)(gD, cD) : "none" === AD && (0, sD.i)(cD, gD);
        const UD = LD && DD.beforeIndex >= 0 && "none" !== this.nodeAngles(DD.beforeIndex, wD.position, zD, this.beforeAngles),
          fD = LD && DD.afterIndex >= 0 && "none" !== this.nodeAngles(DD.afterIndex, wD.position, zD, this.afterAngles),
          ID = (0, sD.w)(cD.heading, gD.heading),
          BD = PD(DD, UD ? (0, sD.w)(cD.heading, this.beforeAngles.heading) : 0, cD.heading, ID, fD ? (0, sD.w)(ID, this.afterAngles.heading) : 0, UD, fD);
        wD.heading = (0, sD.s)(BD), wD.pitch = (0, sD.f)(PD(DD, this.beforeAngles.pitch, cD.pitch, gD.pitch, this.afterAngles.pitch, UD, fD))
      }
      nodeAngles(DD, zD, wD, pD) {
        const sD = this.rawNodeAngles(DD, zD, wD, pD);
        return "none" !== sD && CD(pD) && !this.borrowHeading(this.prevNodes[DD], zD, wD, pD) && this.borrowHeading(this.nextNodes[DD], zD, wD, pD), sD
      }
      borrowHeading(DD, zD, wD, pD) {
        const sD = this.borrowedAngles;
        return !(DD < 0 || "none" === this.rawNodeAngles(DD, zD, wD, sD) || CD(sD)) && (pD.heading = sD.heading, !0)
      }
      rawNodeAngles(DD, zD, wD, pD) {
        const KD = this.nodes[DD].keyframe;
        if (KD.lookDirection) return (0, sD.j)(KD.lookDirection, pD), "aim";
        if (void 0 !== KD.lookAt) {
          const DD = wD(KD.lookAt);
          if (DD) return (0, sD.o)(zD, DD, pD), "aim"
        }
        const rD = this.tangents[DD];
        return rD ? ((0, sD.i)(rD, pD), "tangent") : "none"
      }
      liveTangent(DD, zD) {
        const wD = this.nodes[DD.index].position,
          pD = this.nodes[DD.toIndex].position,
          KD = this.derivative;
        for (let sD = 0; sD < 3; sD++) KD[sD] = OD(wD[sD], DD.fromTangent[sD], pD[sD], DD.toTangent[sD], DD.u);
        return nD(KD) > 1e-9 ? ((0, sD.j)(KD, zD), !0) : !(JD(wD, pD) < hD) && ((0, sD.j)(QD(wD, pD, DD.u < .5 ? DD.toTangent : DD.fromTangent, KD), zD), !0)
      }
      nodeTangent(DD, zD, wD) {
        var pD;
        const KD = DD[wD];
        if (nD(KD) > 1e-9) return (0, sD.j)(KD, {
          heading: 0,
          pitch: 0
        });
        const rD = null !== (pD = this.restDirectionTo(wD, wD + 1, DD, zD)) && void 0 !== pD ? pD : this.restDirectionTo(wD, wD - 1, DD, zD);
        return rD ? (0, sD.j)(rD, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(DD, zD, wD, pD) {
        const sD = this.nodes[DD],
          KD = this.nodes[zD];
        if (!KD || JD(sD.position, KD.position) < hD) return null;
        const [rD, LD] = zD > DD ? [sD, KD] : [KD, sD], cD = ED(wD[zD], rD.position, LD.position, LD.timeMs - rD.timeMs, pD, [0, 0, 0]);
        return QD(rD.position, LD.position, cD, [0, 0, 0])
      }
    }

    function TD(DD, zD) {
      const wD = DD.lookDirection || zD.lookDirection ? function(DD, zD) {
        if (!DD || !zD) return DD === zD;
        const wD = nD(DD),
          pD = nD(zD);
        return Math.hypot(DD[0] / wD - zD[0] / pD, DD[1] / wD - zD[1] / pD, DD[2] / wD - zD[2] / pD) < hD
      }(DD.lookDirection, zD.lookDirection) : (pD = DD.lookAt, sD = zD.lookAt, "object" !== typeof pD || "object" !== typeof sD ? pD === sD : JD(pD, sD) < hD);
      var pD, sD;
      return JD(DD.position, zD.position) < hD && DD.fov === zD.fov && wD
    }
    class bD {
      constructor(DD, zD, wD) {
        if (this.smooth = zD, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === DD.length) throw new Error("A camera path needs at least one keyframe");
        for (let KD = 1; KD < DD.length; KD++)
          if (!(DD[KD].timeMs > DD[KD - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = DD.map((DD => {
          var zD;
          return {
            timeMs: DD.timeMs,
            position: [...DD.position],
            keyframe: DD,
            easing: (0, KD.l)(null !== (zD = DD.easing) && void 0 !== zD ? zD : "linear")
          }
        }));
        const pD = this.nodes[0],
          sD = this.nodes[this.nodes.length - 1],
          rD = wD && this.nodes.length > 1;
        rD && !TD(pD.keyframe, sD.keyframe) && this.nodes.push({
          ...pD,
          timeMs: sD.timeMs + (sD.timeMs - pD.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = rD ? this.nodes[this.nodes.length - 1].timeMs - pD.timeMs : 0, this.prevNodes = this.nodes.map(((DD, zD) => this.neighbour(zD, -1))), this.nextNodes = this.nodes.map(((DD, zD) => this.neighbour(zD, 1))), this.prevGaps = this.prevNodes.map(((DD, zD) => DD >= 0 ? this.gapMs(zD, -1) : 0)), this.nextGaps = this.nextNodes.map(((DD, zD) => DD >= 0 ? this.gapMs(zD, 1) : 0)), this.velocities = this.nodes.map(((DD, zD) => {
          const wD = this.prevNodes[zD],
            pD = this.nextNodes[zD];
          return function(DD, zD, wD, pD, sD, KD) {
            if (KD[0] = 0, KD[1] = 0, KD[2] = 0, !DD && !wD) return KD;
            const rD = null !== DD && void 0 !== DD ? DD : XD(null !== wD && void 0 !== wD ? wD : zD, zD),
              LD = null !== wD && void 0 !== wD ? wD : XD(null !== DD && void 0 !== DD ? DD : zD, zD),
              cD = DD ? pD : sD,
              gD = wD ? sD : pD,
              RD = JD(rD, zD),
              AD = JD(zD, LD);
            if (RD < hD || AD < hD) return KD;
            const UD = Math.sqrt(RD),
              fD = Math.sqrt(AD),
              ID = (UD + fD) / (cD + gD);
            for (let BD = 0; BD < 3; BD++) {
              const DD = (zD[BD] - rD[BD]) / UD - (LD[BD] - rD[BD]) / (UD + fD) + (LD[BD] - zD[BD]) / fD;
              KD[BD] = DD * ID
            }
            return KD
          }(wD >= 0 ? this.nodes[wD].position : null, DD.position, pD >= 0 ? this.nodes[pD].position : null, this.prevGaps[zD], this.nextGaps[zD], [0, 0, 0])
        })), this.aim = new xD(this.nodes, this.velocities, this.prevNodes, this.nextNodes, zD)
      }
      sample(DD, zD, wD, pD) {
        const sD = this.findSegment(this.pathTime(DD));
        this.samplePosition(sD, pD.position), this.aim.sample(sD, zD, pD);
        const {
          beforeIndex: KD,
          afterIndex: rD
        } = sD;
        pD.fov = PD(sD, KD >= 0 ? this.fovAt(KD, wD) : 0, this.fovAt(sD.index, wD), this.fovAt(sD.toIndex, wD), rD >= 0 ? this.fovAt(rD, wD) : 0, KD >= 0, rD >= 0)
      }
      pathTime(DD) {
        const zD = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || DD <= zD) return DD;
        const wD = DD - zD;
        return zD + wD - this.loopMs * Math.floor(wD / this.loopMs)
      }
      findSegment(DD) {
        const zD = this.nodes,
          wD = this.segment;
        let pD = wD.index;
        for (DD < zD[pD].timeMs && (pD = 0); pD < zD.length - 2 && zD[pD + 1].timeMs <= DD;) pD++;
        const sD = Math.min(pD + 1, zD.length - 1),
          rD = zD[sD].timeMs - zD[pD].timeMs;
        return wD.index = pD, wD.toIndex = sD, wD.segmentMs = rD, wD.u = rD > 0 ? (0, KD.k)((DD - zD[pD].timeMs) / rD, zD[pD].easing) : 1, wD.curved = this.smooth && rD > 0, wD.beforeIndex = this.prevNodes[pD], wD.afterIndex = this.nextNodes[sD], wD.beforeMs = this.prevGaps[pD], wD.afterMs = this.nextGaps[sD], wD
      }
      samplePosition(DD, zD) {
        const {
          fromTangent: wD,
          toTangent: pD,
          curved: sD
        } = DD, KD = this.nodes[DD.index].position, rD = this.nodes[DD.toIndex].position;
        ED(this.velocities[DD.index], KD, rD, DD.segmentMs, sD, wD), ED(this.velocities[DD.toIndex], KD, rD, DD.segmentMs, sD, pD);
        const LD = DD.u;
        for (let cD = 0; cD < 3; cD++) zD[cD] = sD ? MD(KD[cD], wD[cD], rD[cD], pD[cD], LD) : KD[cD] + (rD[cD] - KD[cD]) * LD
      }
      fovAt(DD, zD) {
        var wD;
        return null !== (wD = this.nodes[DD].keyframe.fov) && void 0 !== wD ? wD : zD
      }
      neighbour(DD, zD) {
        const wD = this.nodes.length - 1,
          pD = DD + zD;
        return pD >= 0 && pD <= wD ? pD : this.loopMs <= 0 || wD < 2 ? -1 : pD < 0 ? wD - 1 : 1
      }
      gapMs(DD, zD) {
        const wD = this.nodes.length - 1;
        if (1 === zD) {
          const zD = DD === wD ? 0 : DD;
          return this.nodes[zD + 1].timeMs - this.nodes[zD].timeMs
        }
        const pD = 0 === DD ? wD : DD;
        return this.nodes[pD].timeMs - this.nodes[pD - 1].timeMs
      }
    }
    class jD {
      constructor(DD) {
        this.KU = DD, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = zD => DD.getEntityPosition(zD), this.readAimPoint = zD => DD.getEntityAimPoint(zD)
      }
      aimPoint(DD) {
        return "string" !== typeof DD ? (0, cD.l)(DD, 3) ? DD : null : this.resolve(DD, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(DD) {
        const zD = "string" === typeof DD ? this.KU.getEntityAimPoint(DD) : DD;
        return zD && (0, cD.l)(zD, 3) ? zD : null
      }
      feetPosition(DD) {
        return this.resolve(DD, this.readFeet, this.lastFeet)
      }
      heading(DD) {
        const zD = this.KU.getEntityHeading(DD);
        if (null !== zD && Number.isFinite(zD)) return this.lastHeadings.set(DD, zD), zD;
        const wD = this.lastHeadings.get(DD);
        return void 0 !== wD ? wD : DD === this.KU.localPlayerId ? 0 : this.heading(this.KU.localPlayerId)
      }
      resolve(DD, zD, wD) {
        const pD = zD(DD);
        let sD = wD.get(DD);
        return pD && (0, cD.l)(pD, 3) ? (sD || (sD = [0, 0, 0], wD.set(DD, sD)), sD[0] = pD[0], sD[1] = pD[1], sD[2] = pD[2], sD) : sD || (DD === this.KU.localPlayerId ? null : this.resolve(this.KU.localPlayerId, zD, wD))
      }
    }

    function dD(DD) {
      return {
        heading: DD.heading,
        pitch: DD.pitch
      }
    }

    function SD(DD, zD) {
      Number.isFinite(DD.heading) && Number.isFinite(DD.pitch) || (0, sD.i)(zD, DD)
    }

    function iD(DD, zD, wD, pD, KD) {
      if (zD) return void(0, sD.j)(zD, KD);
      const rD = pD.aimPoint(wD);
      rD && (0, sD.o)(DD, rD, KD)
    }
    class lD {
      constructor(DD, zD, wD, pD) {
        this.settings = DD, this.KU = zD, this.targets = wD, this.base = void 0, this.base = dD(pD)
      }
      update(DD, zD, wD) {
        var pD;
        const sD = this.settings;
        (0, cD.g)(sD.position, wD.position), iD(sD.position, sD.lookDirection, null !== (pD = sD.lookAt) && void 0 !== pD ? pD : this.KU.localPlayerId, this.targets, this.base), zD.apply(this.base, wD), wD.fov = fD(sD, this.KU)
      }
      continueFrom(DD) {
        DD instanceof lD && (0, sD.i)(DD.base, this.base)
      }
      reset(DD) {
        SD(this.base, DD)
      }
    }
    class WD {
      constructor(DD, zD, wD, pD) {
        this.settings = DD, this.KU = zD, this.targets = wD, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.UG = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = dD(pD), this.goal = [...pD.position]
      }
      update(DD, zD, wD) {
        var pD, sD, KD;
        const rD = this.settings,
          LD = null !== (pD = rD.target) && void 0 !== pD ? pD : this.KU.localPlayerId,
          gD = this.targets.feetPosition(LD);
        let RD = !1;
        gD && (RD = this.foundFeet && JD(this.lastFeet, gD) > 32 + .1 * DD, (0, cD.g)(gD, this.lastFeet), this.foundFeet = !0, this.placeGoal(gD, LD));
        const AD = null !== (sD = rD.smoothMs) && void 0 !== sD ? sD : 0;
        !this.started || AD < 1 || RD ? ((0, cD.g)(this.goal, this.smoothed), this.UG.fill(0), this.started = !0) : ID(this.smoothed, this.UG, this.goal, AD, DD), RD && (this.distance = -1), (0, cD.g)(this.smoothed, wD.position);
        const UD = !0 === rD.avoidTerrain ? this.pullIn(LD, DD, wD) : 1;
        let BD = this.goal;
        if ("target" === rD.offsetSpace) BD = wD.position;
        else if (UD < 1) {
          BD = this.aimOrigin;
          for (let DD = 0; DD < 3; DD++) BD[DD] = wD.position[DD] + (this.goal[DD] - this.smoothed[DD]) * UD
        }
        iD(BD, rD.lookDirection, null !== (KD = rD.lookAt) && void 0 !== KD ? KD : LD, this.targets, this.base), zD.apply(this.base, wD), wD.fov = fD(rD, this.KU)
      }
      continueFrom(DD) {
        DD instanceof WD && (0, pD.m)(DD.settings.target, this.settings.target) && ((0, sD.i)(DD.base, this.base), (0, cD.g)(DD.goal, this.goal), (0, cD.g)(DD.lastFeet, this.lastFeet), this.foundFeet = DD.foundFeet, (0, cD.g)(DD.smoothed, this.smoothed), (0, cD.g)(DD.UG, this.UG), this.started = DD.started, !0 === DD.settings.avoidTerrain && (this.distance = DD.distance))
      }
      reset(DD) {
        SD(this.base, DD), this.UG.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(DD, zD, wD) {
        const pD = this.targets.aimPoint(DD);
        if (!pD) return 1;
        const sD = wD.position,
          KD = JD(pD, sD);
        if (!(KD > 0)) return 1;
        const rD = this.toCamera;
        for (let cD = 0; cD < 3; cD++) rD[cD] = (sD[cD] - pD[cD]) / KD;
        const LD = function(DD, zD, wD) {
          return DD < 0 || zD < DD ? zD : zD + (DD - zD) * Math.exp(-wD / 150)
        }(this.distance, function(DD, zD, wD, pD) {
          const sD = DD.raycastTerrain(zD, wD, pD);
          return null !== sD && Number.isFinite(sD) ? Math.min(pD, Math.max(0, sD - .2)) : pD
        }(this.KU, pD, rD, KD), zD);
        if (KD - LD < .001) return this.distance = -1, 1;
        this.distance = LD;
        for (let cD = 0; cD < 3; cD++) sD[cD] = pD[cD] + rD[cD] * LD;
        return LD / KD
      }
      placeGoal(DD, zD) {
        const wD = this.settings.offset;
        let pD = wD[0],
          sD = wD[2];
        if ("target" === this.settings.offsetSpace) {
          const DD = this.targets.heading(zD),
            KD = Math.cos(DD),
            rD = Math.sin(DD);
          pD = wD[0] * KD + wD[2] * rD, sD = -wD[0] * rD + wD[2] * KD
        }
        this.goal[0] = DD[0] + pD, this.goal[1] = DD[1] + wD[1], this.goal[2] = DD[2] + sD
      }
    }
    class ND {
      constructor(DD, zD, wD, pD) {
        var sD, KD;
        this.settings = DD, this.KU = zD, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = DD.keyframes.length > 0 ? new bD(DD.keyframes, null === (sD = DD.smooth) || void 0 === sD || sD, null !== (KD = DD.loop) && void 0 !== KD && KD) : null, this.base = (0, cD.e)(pD, (0, cD.h)()), this.resolveTarget = DD => wD.aimPoint(DD)
      }
      update(DD, zD, wD) {
        this.elapsedMs += DD;
        const pD = fD(this.settings, this.KU);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, pD, this.base) : this.base.fov = pD, (0, cD.g)(this.base.position, wD.position), wD.fov = this.base.fov, zD.apply(this.base, wD)
      }
      continueFrom(DD) {
        DD instanceof ND && (0, pD.m)(DD.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = DD.elapsedMs, (0, cD.e)(DD.base, this.base))
      }
      reset(DD) {
        SD(this.base, DD), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function ZD(DD, zD) {
      return (0, pD.p)(DD, zD)
    }
    class yD {
      constructor(DD, zD, wD) {
        var pD;
        this.settings = DD, this.KU = zD, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const sD = null !== wD && wD.settings.mode === DD.mode,
          KD = sD ? wD.pose : zD.getDefaultPose();
        this.pose = (0, cD.e)(KD, (0, cD.h)()), this.lastGoodPose = (0, cD.e)(sD ? wD.lastGoodPose : KD, (0, cD.h)()), this.look = new GD(DD.playerLook), this.targets = null !== (pD = null === wD || void 0 === wD ? void 0 : wD.targets) && void 0 !== pD ? pD : new jD(zD);
        const rD = (0, cD.e)(KD, (0, cD.h)());
        sD && wD.look.unapply(rD, rD), this.mode = function(DD, zD, wD, pD) {
          switch (DD.mode) {
            case "fixed":
              return new lD(DD, zD, wD, pD);
            case "follow":
              return new WD(DD, zD, wD, pD);
            case "path":
              return new ND(DD, zD, wD, pD);
            case "frame":
              return new BD(DD, zD, wD, pD)
          }
        }(DD, zD, this.targets, rD), sD && (this.look.continueFrom(wD.look), this.mode.continueFrom(wD.mode))
      }
      update(DD, zD) {
        return this.look.update(DD, zD), this.mode.update(DD, this.look, this.pose), (0, cD.j)(this.pose) ? (0, cD.e)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, cD.e)(this.lastGoodPose, this.pose), this.mode.reset((0, cD.j)(this.lastGoodPose) ? this.lastGoodPose : this.KU.getDefaultPose())), this.pose
      }
    }

    function kD(DD) {
      return [0, 0, DD[2], DD[3]]
    }
    class mD {
      constructor(DD) {
        this.KU = DD, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new LD, this.shot = null, this.blend = null, this.mixed = (0, cD.h)(), this.output = (0, cD.h)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(DD) {
        const zD = (0, gD.c)(DD);
        if ((0, pD.m)(zD, this.pending ? this.pending.settings : this.settings)) return;
        const wD = ZD(this.settings, zD);
        if (void 0 !== zD.transition && !wD) return this.pending = {
          settings: zD,
          shot: "default" === zD.mode ? null : new yD(zD, this.KU, null)
        }, void this.fade.fadeOut(zD.transition);
        const sD = null !== this.pending;
        this.pending = null, !sD && wD || this.fade.fadeIn(pD.e.minTransitionFadeMs), this.show(zD, !1)
      }
      show(DD, zD) {
        var wD, sD;
        if ((0, pD.m)(DD, this.settings)) return;
        const rD = !zD && ZD(this.settings, DD);
        this.settings = DD;
        const LD = null !== this.blend && this.blend.elapsedMs > 0,
          gD = (0, cD.e)(this.hasOutput ? this.output : this.KU.getDefaultPose(), (0, cD.h)());
        if (this.shot = "default" === DD.mode ? null : new yD(DD, this.KU, zD ? null : this.shot), rD) return;
        const RD = zD || !this.shot && !this.hasOutput ? 0 : null !== (wD = DD.blendInMs) && void 0 !== wD ? wD : 0;
        if (RD <= 0) return void(this.blend = null);
        const AD = (0, KD.l)(null !== (sD = DD.blendEasing) && void 0 !== sD ? sD : "easeInOut");
        this.blend = {
          from: gD,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: RD,
          easing: LD ? kD(AD) : AD
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
      update(DD, zD) {
        const wD = Number.isFinite(DD) && DD > 0 ? DD : 0;
        if (this.fade.advance(wD) && null !== this.pending) {
          const {
            settings: DD
          } = this.pending;
          this.pending = null, this.show(DD, !0)
        }
        this.loadingPositions.length = 0;
        const pD = this.pending;
        if (null !== pD && void 0 !== pD && pD.shot) {
          const DD = "path" === pD.settings.mode ? 0 : wD;
          this.noteLoadingPosition(pD.shot.update(DD, cD.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const rD = this.shot ? this.shot.update(wD, zD) : this.KU.getDefaultPose();
        this.shot && this.noteLoadingPosition(rD.position);
        const LD = this.blend;
        if (!LD) return this.writeOutput(rD);
        LD.elapsedMs += wD;
        const gD = Math.min(1, LD.elapsedMs / LD.durationMs);
        if (LD.headingDelta = Number.isFinite(LD.headingDelta) ? (0, sD.w)(LD.headingDelta, rD.heading - LD.from.heading) : (0, sD.u)(LD.from.heading, rD.heading), (0, cD.m)(LD.from, rD, LD.headingDelta, (0, KD.k)(gD, LD.easing), this.mixed), gD >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else LD.fromScripted && this.noteLoadingPosition(LD.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(DD) {
        if (DD.every(Number.isFinite)) {
          const zD = this.loadingPositions;
          zD.push((0, cD.g)(DD, this.loadingSlots[zD.length]))
        }
      }
      writeOutput(DD) {
        const zD = this.output;
        (0, cD.j)(DD) ? (0, cD.e)(DD, zD) : this.hasOutput || (0, cD.e)(this.KU.getDefaultPose(), zD), zD.pitch = (0, sD.f)(zD.pitch);
        const wD = this.KU.getDefaultFov(),
          KD = Number.isFinite(wD) && wD > 0 && wD < 180,
          rD = KD ? Math.min(pD.e.minFov, wD) : pD.e.minFov,
          LD = KD ? Math.max(pD.e.maxFov, wD) : pD.e.maxFov;
        return zD.fov = Number.isFinite(zD.fov) ? Math.min(LD, Math.max(rD, zD.fov)) : LD, this.hasOutput = !0, zD
      }
    }
  },
  39133: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      e: () => LD,
      g: () => rD,
      h: () => KD,
      j: () => gD,
      l: () => cD,
      m: () => RD
    });
    var pD = wD(39140);
    const sD = {
      aT: 0,
      qT: 0
    };

    function KD() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function rD(DD, zD) {
      return zD[0] = DD[0], zD[1] = DD[1], zD[2] = DD[2], zD
    }

    function LD(DD, zD) {
      return rD(DD.position, zD.position), zD.heading = DD.heading, zD.pitch = DD.pitch, zD.fov = DD.fov, zD
    }

    function cD(DD, zD) {
      return Array.isArray(DD) && DD.length === zD && DD.every(Number.isFinite)
    }

    function gD(DD) {
      return cD(DD.position, 3) && Number.isFinite(DD.heading) && Number.isFinite(DD.pitch) && Number.isFinite(DD.fov)
    }

    function RD(DD, zD, wD, sD, KD) {
      for (let pD = 0; pD < 3; pD++) KD.position[pD] = DD.position[pD] + (zD.position[pD] - DD.position[pD]) * sD;
      return KD.heading = (0, pD.s)(DD.heading + wD * sD), KD.pitch = DD.pitch + (zD.pitch - DD.pitch) * sD, KD.fov = DD.fov + (zD.fov - DD.fov) * sD, KD
    }
  },
  39160: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => QD,
      e: () => UD
    });
    var pD = wD(39155),
      sD = wD(39133);
    const KD = pD.d,
      rD = pD.h;

    function LD(DD, zD, wD, pD) {
      return Number.isFinite(DD) ? Math.min(wD, Math.max(zD, DD)) : pD
    }

    function cD(DD, zD, wD) {
      return void 0 !== DD && Number.isFinite(DD) ? Math.min(wD, Math.max(zD, DD)) : void 0
    }

    function gD(DD) {
      const zD = pD.e.maxCoordinate;
      return [Math.min(zD, Math.max(-zD, DD[0])), Math.min(zD, Math.max(-zD, DD[1])), Math.min(zD, Math.max(-zD, DD[2]))]
    }

    function RD(DD) {
      return "string" === typeof DD ? DD : (0, sD.l)(DD, 3) ? gD(DD) : void 0
    }
    const AD = new RegExp(pD.k);

    function UD(DD) {
      return "string" === typeof DD && AD.test(DD)
    }

    function fD(DD) {
      const zD = [];
      if (!Array.isArray(DD)) return zD;
      for (const wD of DD.slice(0, pD.e.maxFrameTargets)) {
        const DD = RD(wD);
        void 0 === DD || "string" === typeof DD && !UD(DD) || zD.push(DD)
      }
      return zD
    }

    function ID(DD) {
      if (!(0, sD.l)(DD, 3)) return;
      const zD = Math.max(Math.abs(DD[0]), Math.abs(DD[1]), Math.abs(DD[2])),
        wD = Math.hypot(DD[0] / zD, DD[1] / zD, DD[2] / zD);
      return 0 === zD || zD * wD < pD.e.minDirectionLength ? void 0 : [DD[0] / zD / wD, DD[1] / zD / wD, DD[2] / zD / wD]
    }

    function BD(DD) {
      if (void 0 !== DD) return "string" === typeof DD ? KD.includes(DD) ? DD : void 0 : (0, sD.l)(DD, 4) ? [LD(DD[0], 0, 1, 0), LD(DD[1], pD.e.minEasingY, pD.e.maxEasingY, 0), LD(DD[2], 0, 1, 1), LD(DD[3], pD.e.minEasingY, pD.e.maxEasingY, 1)] : "linear"
    }

    function GD(DD) {
      if (DD) return {
        maxYaw: LD(DD.maxYaw, 0, pD.e.maxPlayerLook, 0),
        maxPitch: LD(DD.maxPitch, 0, pD.e.maxPlayerLook, 0),
        returnMs: cD(DD.returnMs, 0, pD.e.maxReturnMs)
      }
    }
    const hD = new RegExp(pD.b);

    function nD(DD) {
      var zD;
      if ("object" !== typeof DD || null === DD) return;
      const wD = pD.e.maxTransitionMs,
        sD = pD.e.minTransitionFadeMs;
      return {
        colour: "string" === typeof DD.colour && hD.test(DD.colour) ? DD.colour : pD.c,
        outMs: LD(DD.outMs, sD, wD, sD),
        holdMs: LD(null !== (zD = DD.holdMs) && void 0 !== zD ? zD : 0, 0, wD, 0),
        inMs: LD(DD.inMs, sD, wD, sD)
      }
    }

    function MD(DD) {
      return !0 === DD || void 0
    }

    function OD(DD) {
      if ("object" !== typeof DD || null === DD) return !1;
      const zD = DD.lookAt;
      return Number.isFinite(DD.timeMs) && (0, sD.l)(DD.position, 3) && (void 0 === zD || "string" === typeof zD || (0, sD.l)(zD, 3))
    }

    function JD(DD) {
      return {
        ...DD,
        timeMs: LD(DD.timeMs, 0, pD.e.maxPathMs, 0),
        position: gD(DD.position),
        lookAt: RD(DD.lookAt),
        lookDirection: ID(DD.lookDirection),
        fov: cD(DD.fov, pD.e.minFov, pD.e.maxFov),
        easing: BD(DD.easing)
      }
    }

    function ED(DD) {
      const zD = [];
      if (!Array.isArray(DD)) return zD;
      for (const wD of DD.slice(0, pD.e.maxKeyframes)) {
        if (!OD(wD)) continue;
        const DD = JD(wD);
        (0 === zD.length || DD.timeMs > zD[zD.length - 1].timeMs) && zD.push(DD)
      }
      return zD
    }

    function QD(DD) {
      if ("object" !== typeof DD || null === DD) return {
        mode: "default"
      };
      const zD = {
          blendInMs: cD(DD.blendInMs, 0, pD.e.maxBlendInMs),
          blendEasing: BD(DD.blendEasing),
          transition: nD(DD.transition),
          letterbox: MD(DD.letterbox),
          hideHud: MD(DD.hideHud)
        },
        wD = {
          mode: "default",
          ...zD
        };
      if ("default" === DD.mode || "fixed" === DD.mode && !(0, sD.l)(DD.position, 3)) return wD;
      const KD = {
        ...zD,
        fov: cD(DD.fov, pD.e.minFov, pD.e.maxFov),
        playerFacing: (AD = DD.playerFacing, rD.includes(AD) ? AD : void 0),
        playerLook: GD(DD.playerLook)
      };
      var AD, UD;
      switch (DD.mode) {
        case "fixed":
          return {
            ...DD, ...KD, position: gD(DD.position), lookAt: RD(DD.lookAt), lookDirection: ID(DD.lookDirection)
          };
        case "follow":
          return {
            ...DD, ...KD, target: "string" === typeof DD.target ? DD.target : void 0, lookAt: RD(DD.lookAt), offset: (UD = DD.offset, Array.isArray(UD) ? [LD(UD[0], -pD.e.maxOffset, pD.e.maxOffset, 0), LD(UD[1], -pD.e.maxOffset, pD.e.maxOffset, 0), LD(UD[2], -pD.e.maxOffset, pD.e.maxOffset, 0)] : [0, 0, 0]), lookDirection: ID(DD.lookDirection), smoothMs: cD(DD.smoothMs, 0, pD.e.maxSmoothMs)
          };
        case "path":
          return {
            ...DD, ...KD, keyframes: ED(DD.keyframes)
          };
        case "frame":
          return {
            ...DD, ...KD, targets: fD(DD.targets), viewHeading: cD(DD.viewHeading, -pD.e.maxFrameHeading, pD.e.maxFrameHeading), viewElevation: cD(DD.viewElevation, 0, pD.e.maxFrameElevation), padding: cD(DD.padding, 0, pD.e.maxFrameDistance), closestDistance: cD(DD.closestDistance, 0, pD.e.maxFrameDistance), furthestDistance: cD(DD.furthestDistance, 0, pD.e.maxFrameDistance), smoothMs: cD(DD.smoothMs, 0, pD.e.maxSmoothMs)
          };
        default:
          return wD
      }
    }
  },
  38645: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD
    });
    var pD = wD(1232);

    function sD(DD) {
      const zD = /(\d*\.?\d+)px/.exec(DD);
      return zD ? Number(zD[1]) : null
    }

    function KD(DD) {
      return DD.split(/[\s,]+/).pop()
    }
    let rD = !1;
    const LD = {
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
      drawText: function(DD, zD, pD, LD, cD, gD) {
        if (cD <= 0 || gD <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: RD,
          fontVariant: AD,
          fontWeight: UD,
          fontSize: fD,
          font: ID
        } = this, BD = [RD, AD, UD, `${fD}px`, ID].filter(Boolean).join(" "), GD = [
          [UD, `${fD}px`, KD(ID)].filter(Boolean).join(" "), `${fD}px sans-serif`
        ], hD = DD.font, nD = function(DD, zD, wD) {
          for (const pD of zD) {
            DD.font = pD;
            const zD = sD(DD.font),
              rD = KD(pD);
            if (null !== zD && Math.abs(zD - wD) <= .5 && DD.font.toLowerCase().includes(rD.toLowerCase())) return pD
          }
          return null
        }(DD, [BD, ...GD], fD);
        nD !== BD && function(DD, zD, pD) {
          rD || (rD = !0, Promise.resolve().then((() => wD(1075))).then((wD => {
            let {
              CB: sD
            } = wD;
            sD(new Error("A canvas didn't take canvasTxt's font"), {
              font: DD,
              Nf: zD,
              drawnWith: null !== pD && void 0 !== pD ? pD : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(BD, hD, nD);
        const MD = sD(DD.font);
        if (null === nD && null !== MD && MD > 0) {
          const wD = fD / MD;
          DD.save();
          try {
            return DD.scale(wD, wD), {
              height: this.drawLines(DD, zD, pD / wD, LD / wD, cD / wD, gD / wD, MD).height * wD
            }
          } finally {
            DD.restore()
          }
        }
        return this.drawLines(DD, zD, pD, LD, cD, gD, fD)
      },
      drawLines: function(DD, zD, wD, sD, KD, rD, LD) {
        const cD = wD + KD,
          gD = sD + rD;
        let RD, AD = sD + rD / 2 + LD / 2;
        "right" === this.align ? (RD = cD, DD.textAlign = "right") : "left" === this.align ? (RD = wD, DD.textAlign = "left") : (RD = wD + KD / 2, DD.textAlign = "center");
        for (const pD of zD) {
          DD.measureText(pD).width >= KD && (zD = zD.replace(pD, ""))
        }
        zD = (0, pD.P)(zD);
        const UD = [],
          fD = zD.split("\n"),
          ID = this.justify ? DD.measureText("\u200a").width : 0;
        fD.forEach((zD => {
          let wD = DD.measureText(zD).width;
          if (wD <= KD) UD.push(zD);
          else {
            let pD = zD;
            const sD = KD;
            let rD, LD, cD;
            for (wD = DD.measureText(pD).width; wD > sD;) {
              for (rD = 0, LD = 0, cD = ""; LD < sD;) rD++, cD = pD.substr(0, rD), LD = DD.measureText(cD).width;
              rD--, cD = cD.substr(0, rD);
              const zD = rD;
              if (" " !== pD.substr(rD, 1)) {
                for (;
                  " " !== pD.substr(rD, 1) && 0 !== rD;) rD--;
                0 === rD && (rD = zD), cD = pD.substr(0, rD)
              }
              cD = this.justify ? this.justifyLine(DD, cD, ID, "\u200a", KD) : cD, pD = pD.substr(rD), wD = DD.measureText(pD).width, UD.push(cD)
            }
            wD > 0 && UD.push(pD)
          }
        }));
        const BD = this.lineHeight ? this.lineHeight : this.getTextHeight(DD, zD),
          GD = BD * (UD.length - 1),
          hD = GD / 2;
        let nD = sD;
        "top" === this.vAlign ? AD = sD + LD : "bottom" === this.vAlign ? (AD = gD - GD, nD = gD) : (nD = sD + rD / 2, AD -= hD), UD.forEach((zD => {
          zD = zD.trim(), DD.fillText(zD, RD, AD), AD += BD
        })), this.debug && (DD.lineWidth = 3, DD.strokeStyle = "#00909e", DD.strokeRect(wD, sD, KD, rD), DD.lineWidth = 2, DD.strokeStyle = "#f6d743", DD.beginPath(), DD.moveTo(RD, sD), DD.lineTo(RD, gD), DD.stroke(), DD.strokeStyle = "#ff6363", DD.beginPath(), DD.moveTo(wD, nD), DD.lineTo(cD, nD), DD.stroke());
        return {
          height: GD + BD
        }
      },
      getTextHeight: function(DD, zD) {
        const wD = DD.textBaseline;
        DD.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: pD
        } = DD.measureText(zD);
        return DD.textBaseline = wD, pD
      },
      justifyLine: function(DD, zD, wD, pD, sD) {
        const KD = zD.trim(),
          rD = DD.measureText(KD).width,
          LD = KD.split(/\s+/).length - 1,
          cD = Math.floor((sD - rD) / wD);
        if (LD <= 0 || cD <= 0) return KD;
        const gD = Math.floor(cD / LD);
        let RD = cD - LD * gD,
          AD = [];
        for (let UD = 0; UD < gD; UD++) AD.push(pD);
        AD = AD.join("");
        return KD.replace(/\s+/g, (DD => {
          const zD = RD > 0 ? AD + pD : AD;
          return RD--, DD + zD
        }))
      }
    }
  },
  39095: (DD, zD, wD) => {
    function pD(DD, zD) {
      return zD.set(DD), zD
    }
    wD.d(zD, {
      d: () => pD
    })
  },
  38648: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => BD,
      e: () => ID,
      f: () => UD,
      g: () => RD,
      k: () => AD
    });
    var pD = wD(4257),
      sD = wD(351);
    const KD = 1024,
      rD = 1536,
      LD = 2 * pD.j + 1,
      cD = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      gD = 1.5;

    function RD(DD, zD, wD) {
      if ("string" !== typeof DD) return zD;
      try {
        const wD = JSON.parse(DD);
        return wD && "object" === typeof wD ? wD : zD
      } catch (pD) {
        return void 0 !== wD && console.error(`Couldn't parse ${wD}`, pD), zD
      }
    }

    function AD(DD) {
      return RD(DD, null, "a leaderboard's rows")
    }

    function UD(DD, zD) {
      var wD, pD;
      return null !== zD && void 0 !== zD ? zD : {
        status: null !== (wD = DD.status) && void 0 !== wD ? wD : "loading",
        entries: null !== (pD = DD.entries) && void 0 !== pD ? pD : []
      }
    }

    function fD(DD, zD) {
      return "number" === typeof DD && Number.isFinite(DD) && DD > 0 ? DD : zD
    }

    function ID(DD, zD) {
      const wD = fD(DD.size, 1);
      let pD = fD(DD.width, fD(2.5 * wD, 2.5)),
        sD = fD(DD.height, fD(3.75 * wD, 3.75));
      Number.isFinite(KD * sD / pD) && Number.isFinite(rD * pD / sD) || (pD = 2.5, sD = 3.75);
      const LD = sD / pD,
        cD = Math.max(1, Math.min(KD, zD / LD));
      return {
        width: pD,
        height: sD,
        layoutWidth: Math.max(KD, rD / LD),
        layoutHeight: Math.max(rD, KD * LD),
        pixelWidth: Math.round(cD),
        pixelHeight: Math.round(Math.max(1, Math.min(zD, cD * LD)))
      }
    }

    function BD(DD, zD, wD, rD, RD, AD) {
      DD.setTransform(1, 0, 0, 1, 0, 0), DD.fillStyle = sD.I.defaultNameTagBackground, DD.fillRect(0, 0, zD, wD), DD.scale(zD / rD.layoutWidth, wD / rD.layoutHeight), DD.translate((rD.layoutWidth - KD) / 2, 0),
        function(DD, zD, wD, KD) {
          var rD, RD, AD, UD;
          const {
            top: fD,
            around: ID,
            showPlayerText: BD,
            localPlayerDbId: nD
          } = wD, {
            whiteUiText: MD,
            grayUiText: OD,
            yellowUiText: JD
          } = sD.I;
          DD.textBaseline = "middle";
          const ED = function(zD, wD, pD, sD, KD, rD) {
              let LD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              DD.font = `bold ${sD}px 'Jetbrains Mono', monospace`, DD.fillStyle = KD, DD.textAlign = LD;
              let cD = zD.replace(/[\r\n\t]/g, " ");
              if (DD.measureText(cD).width > rD) {
                for (; cD.length > 0 && DD.measureText(`${cD}\u2026`).width > rD;) cD = cD.slice(0, -1);
                cD += "\u2026"
              }
              DD.fillText(cD, wD, pD)
            },
            QD = zD => {
              DD.fillStyle = MD, DD.globalAlpha = .15, DD.fillRect(24, zD, 976, 2), DD.globalAlpha = 1
            },
            XD = null === nD ? null : (0, sD.oc)(nD),
            VD = DD => null !== XD && DD.playerHash === XD,
            PD = GD(fD.entries, pD.m),
            CD = "ready" === fD.status && PD.length > 0,
            xD = null === ID ? [] : GD(ID.entries, LD),
            TD = PD.some(VD),
            bD = null === ID ? null : function(DD) {
              const zD = DD;
              if (!zD || !Number.isFinite(zD.rank) || !Number.isFinite(zD.tied) || !Number.isFinite(zD.total)) return null;
              return zD
            }(ID.standing),
            jD = xD.find(VD),
            dD = PD.find(VD),
            SD = null === bD || void 0 === jD ? null : {
              value: jD.value,
              rank: bD.rank
            },
            iD = hD(PD, void 0 === dD || dD.value === (null === SD || void 0 === SD ? void 0 : SD.value) ? SD : null),
            lD = hD(xD, SD),
            WD = (DD, zD) => {
              const wD = DD.findIndex(VD);
              return wD >= 0 ? zD[wD] : null
            },
            ND = null !== (rD = null !== (RD = null === bD || void 0 === bD ? void 0 : bD.rank) && void 0 !== RD ? RD : WD(xD, lD)) && void 0 !== rD ? rD : WD(PD, iD);
          DD.font = "bold 34px 'Jetbrains Mono', monospace";
          const ZD = [...CD ? iD : [], ...TD ? [] : lD],
            yD = Math.min(280, Math.max(0, ...ZD.map((zD => DD.measureText(cD.format(zD)).width)))),
            kD = yD <= 80,
            mD = kD ? 80 : 32 + yD,
            eD = kD ? 148 : mD + 28,
            oD = 660 - eD;
          ED(`TOP ${pD.m}  /  ALL TIME`, 24, 52, 28, OD, 976), ED(BD ? String(null !== (AD = zD.title) && void 0 !== AD ? AD : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, MD, 976), ED("RANK", 32, 174, 28, OD, eD - 40), ED("PLAYER", eD, 174, 28, OD, oD), ED(BD ? String(null !== (UD = zD.scoreLabel) && void 0 !== UD ? UD : "Score").slice(0, 24) : "Score", 992, 174, 28, OD, 304, "right"), QD(202);
          const aD = (KD - 232) / (pD.m + gD + LD),
            uD = 208 + pD.m * aD,
            vD = uD + gD * aD,
            tD = (zD, wD, pD, sD) => {
              const KD = VD(zD);
              DD.fillStyle = KD ? JD : MD, DD.globalAlpha = KD ? .15 : sD ? .035 : 0, DD.fillRect(24, pD - aD / 2 + 1, 976, aD - 2), DD.globalAlpha = 1;
              const rD = KD ? JD : MD;
              ED(cD.format(wD), mD, pD, 34, rD, kD ? 80 : yD, kD ? "center" : "right"), ED(BD ? String(zD.name).slice(0, 64) : "Player", eD, pD, 34, rD, oD);
              const LD = cD.format(zD.value);
              ED(DD.measureText(LD).width > 304 ? zD.value.toExponential(6) : LD, 992, pD, 34, rD, 304, "right")
            };
          if (CD)
            for (const [pD, sD] of PD.entries()) tD(sD, iD[pD], 208 + (pD + .5) * aD, pD % 2 === 0);
          else {
            const DD = "error" === fD.status,
              zD = DD ? "Couldn't load leaderboard" : "ready" === fD.status ? "No scores yet" : "Loading leaderboard\u2026",
              wD = DD ? "Trying again shortly" : "ready" === fD.status ? "Be the first on the board!" : "Fetching the top players",
              pD = (208 + uD) / 2;
            ED(zD, 512, pD - 28, 40, DD ? sD.I.redUiText : MD, 960, "center"), ED(wD, 512, pD + 27, 30, OD, 960, "center")
          }
          const FD = uD + gD * aD / 2;
          if (null === ND) QD(FD);
          else {
            const zD = null === bD ? 0 : bD.tied - 1,
              wD = `YOUR RANK #${cD.format(ND)}${null===bD?"":` of ${cD.format(bD.total)}`}`;
            DD.font = "bold 36px 'Jetbrains Mono', monospace";
            const pD = Math.max(20, Math.min(36, Math.floor(34560 / DD.measureText(wD).width)));
            ED(wD, 512, FD - (zD > 0 ? 15 : 0), pD, JD, 960, "center"), zD > 0 && ED(`Tied with ${cD.format(zD)} other${1===zD?"":"s"}`, 512, FD + 24, 24, OD, 960, "center")
          }
          if (null === ID) return;
          const YD = vD + LD * aD / 2;
          if (TD) ED(`You're in the top ${pD.m}!`, 512, YD, 40, JD, 960, "center");
          else if (0 === xD.length) ED("You're not on this board yet", 512, YD, 34, OD, 960, "center");
          else
            for (const [pD, sD] of xD.entries()) tD(sD, lD[pD], vD + (pD + .5) * aD, pD % 2 === 0)
        }(DD, RD, AD, rD.layoutHeight)
    }

    function GD(DD, zD) {
      return Array.isArray(DD) ? DD.slice(0, zD).filter((DD => DD && Number.isFinite(DD.rank) && Number.isFinite(DD.value))) : []
    }

    function hD(DD, zD) {
      const wD = [];
      let pD = !1;
      return DD.forEach(((sD, KD) => {
        if (null !== zD && sD.value === zD.value) return void wD.push(zD.rank);
        const rD = KD > 0 && sD.value === DD[KD - 1].value;
        rD || (pD = 0 === KD && 1 !== sD.rank), wD.push(rD && !pD ? wD[KD - 1] : sD.rank)
      })), wD
    }
  },
  38828: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      g: () => KD
    });
    const pD = 32;

    function sD(DD) {
      return Array.from(DD).length
    }

    function KD(DD) {
      const zD = [""];
      let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sD = "";
      const KD = () => {
        zD.push(""), wD = 0, sD = ""
      };
      for (const rD of DD.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(rD)) KD();
        else if (/^\s+$/.test(rD)) sD += rD;
      else if (rD.length > 0) {
        const DD = Array.from(rD);
        wD > 0 && wD + sD.length + DD.length > pD && KD(), zD[zD.length - 1] += sD, wD += sD.length, sD = "";
        for (const sD of DD) wD >= pD && KD(), zD[zD.length - 1] += sD, wD++
      }
      return zD[zD.length - 1] += sD, zD
    }
  },
  39092: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(36599),
      sD = wD.n(pD);
    const KD = [1, 1, 1];

    function rD(DD) {
      if (!DD) return [...KD];
      try {
        const [zD, wD, pD] = sD()(DD).rgb().array();
        return [zD / 255, wD / 255, pD / 255]
      } catch (zD) {
        return console.warn(`Invalid groundArrowPath colour "${DD}":`, zD), [...KD]
      }
    }
  },
  39193: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      f: () => gD,
      g: () => cD
    });
    var pD = wD(309),
      sD = wD(2890);
    const KD = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      rD = 512;

    function LD(DD) {
      var zD;
      const wD = Math.min(screen.width, screen.height) * (null !== (zD = (0, pD.c)()) && void 0 !== zD ? zD : (0, sD.o)());
      return Math.max(window.innerHeight * (0, sD.o)(), wD) / (0, sD.r)(DD)
    }

    function cD(DD, zD, wD) {
      return zD / (2 * Math.tan(wD / 2)) > rD ? DD : gD(DD)
    }

    function gD(DD) {
      return DD.map((DD => DD.replace(KD, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34051: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      e: () => LD,
      f: () => rD,
      j: () => sD,
      n: () => pD
    });
    const pD = {
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
      sD = "/textures/dayNight/sun.png",
      KD = "/textures/dayNight/moon.png",
      rD = "/textures/dayNight/stars",
      LD = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39155: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => RD,
      c: () => AD,
      d: () => pD,
      e: () => cD,
      h: () => sD,
      k: () => gD,
      m: () => LD,
      p: () => rD
    });
    const pD = ["linear", "easeIn", "easeOut", "easeInOut"],
      sD = ["movement", "camera", "cursor"],
      KD = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function rD(DD, zD) {
      return LD(DD, zD, KD)
    }

    function LD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (DD === zD || Number.isNaN(DD) && Number.isNaN(zD)) return !0;
      if ("object" !== typeof DD || "object" !== typeof zD || null === DD || null === zD || Array.isArray(DD) !== Array.isArray(zD)) return !1;
      const pD = DD,
        sD = zD;
      for (const KD of new Set([...Object.keys(pD), ...Object.keys(sD)]))
        if (!wD.includes(KD) && !LD(pD[KD], sD[KD])) return !1;
      return !0
    }
    const cD = {
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
      gD = "^-[1-9][0-9]*$",
      RD = "^#[0-9a-fA-F]{6}$",
      AD = "#000000"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);