export const id = 200;
export const ids = [200];
export const modules = {
  38465: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    class ID {
      constructor(DD, CD) {
        this.read = DD, this.apply = CD, this.release = null
      }
      turn(DD, CD) {
        const cD = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: CD,
          forcedCameraDirection: [DD[0], DD[1], DD[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), CD + 100),
          transitionMs: cD
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
  38017: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      f: () => pD
    });
    const ID = new Map;

    function pD(DD, CD) {
      ID.set(DD, CD)
    }

    function iD(DD) {
      return DD ? ID.get(DD) : void 0
    }
  },
  38901: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD
    });
    var ID = cD(37584);

    function pD(DD, CD, cD) {
      var pD, iD, fD, bD, QD, wD, SD;
      const BD = (0, ID.d)(DD, CD, cD[0], cD[1], cD[2]),
        yD = BD ? null !== (pD = BD.textCell) && void 0 !== pD ? pD : BD.rect.anchor : cD,
        MD = CD(yD[0], yD[1], yD[2]);
      return {
        pos: [cD[0], cD[1], cD[2]],
        noticeboardSpan: BD && {
          width: BD.rect.width,
          height: BD.rect.height
        },
        text: null !== (iD = null === MD || void 0 === MD || null === (fD = MD.persisted) || void 0 === fD || null === (bD = fD.shared) || void 0 === bD ? void 0 : bD.text) && void 0 !== iD ? iD : "",
        textSize: null !== (QD = null === MD || void 0 === MD || null === (wD = MD.persisted) || void 0 === wD || null === (SD = wD.shared) || void 0 === SD ? void 0 : SD.textSize) && void 0 !== QD ? QD : null
      }
    }
  },
  37879: (DD, CD, cD) => {
    function ID(DD) {
      switch (DD.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    cD.d(CD, {
      b: () => pD,
      f: () => iD,
      j: () => ID
    });
    const pD = 4,
      iD = 3
  },
  38481: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      e: () => iD
    });
    var ID = cD(326);
    const pD = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class iD {
      constructor(DD) {
        this.importGame = DD, this.loads = new Map, this.loaded = new Map
      }
      load(DD) {
        const CD = (0, ID.Vb)(DD);
        if (!pD.has(CD)) return Promise.resolve(void 0);
        let cD = this.loads.get(CD);
        return cD || (cD = this.importGame(CD).then((DD => {
          const cD = DD.default;
          if ("function" !== typeof cD) throw new Error(`${CD}'s client code has no default-exported factory`);
          return this.loaded.set(CD, cD), cD
        })).catch((DD => {
          throw this.loads.delete(CD), DD
        })), this.loads.set(CD, cD)), cD
      }
      loadedFactory(DD) {
        const CD = (0, ID.Vb)(DD);
        if (!pD.has(CD)) return;
        const cD = this.loaded.get(CD);
        if (!cD) throw new Error(`${CD}'s client code started before it loaded`);
        return cD
      }
    }
  },
  38904: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(9237),
      pD = cD(9062),
      iD = cD(3083);

    function fD(DD) {
      if (DD === ID.c) return 0;
      const CD = (0, iD.e)(DD);
      if (void 0 !== CD && CD <= pD.MAX_BLOCK_ID) return CD;
      const cD = (0, iD.e)(DD.split("|")[0]);
      if (void 0 !== cD && cD <= pD.MAX_BLOCK_ID && (0, pD.rootMetaDescOf)(cD) === DD) return cD;
      throw new Error(`Invalid block name. You sent ${DD}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  38524: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD
    });
    var ID = cD(16);
    class pD {
      constructor(DD) {
        this.screen = DD, this.hidesHud = !1
      }
      show(DD, CD) {
        this.screen.setFade(DD.colour, DD.alpha), this.screen.setLetterbox(!0 === CD.letterbox, DD.alpha < 1), this.setHudHidden(!0 === CD.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(DD) {
        this.hidesHud !== DD && (this.hidesHud = DD, ID.d.set({
          isUiHiddenByCamera: DD
        }))
      }
    }
  },
  38496: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      i: () => yD,
      j: () => BD,
      l: () => fD,
      m: () => tD,
      p: () => QD,
      r: () => ZD,
      u: () => wD,
      w: () => bD,
      x: () => SD
    });
    const ID = Math.PI / 2 - .001,
      pD = 2 * Math.PI,
      iD = 1e-9;

    function fD(DD, CD) {
      CD.heading = DD.heading, CD.pitch = DD.pitch
    }

    function bD(DD, CD) {
      const cD = CD - DD;
      return cD - pD * Math.floor((cD + Math.PI) / pD)
    }

    function QD(DD, CD, cD) {
      return DD + bD(DD, CD) * cD
    }

    function wD(DD) {
      if (!Number.isFinite(DD)) return DD;
      const CD = DD - pD * Math.floor(DD / pD);
      return CD < pD ? CD : 0
    }

    function SD(DD, CD) {
      return DD + bD(DD, CD)
    }

    function BD(DD) {
      return Math.max(-ID, Math.min(ID, DD))
    }

    function yD(DD, CD, cD) {
      const ID = Math.cos(CD);
      return cD[0] = ID * Math.sin(DD), cD[1] = -Math.sin(CD), cD[2] = ID * Math.cos(DD), cD
    }

    function MD(DD, CD, cD, ID) {
      const pD = Math.sqrt(DD * DD + cD * cD);
      return pD < iD && Math.abs(CD) < iD || (pD >= iD && (ID.heading = Math.atan2(DD, cD)), ID.pitch = BD(Math.atan2(-CD, pD) + 0)), ID
    }

    function tD(DD, CD) {
      return MD(DD[0], DD[1], DD[2], CD)
    }

    function ZD(DD, CD, cD) {
      return MD(CD[0] - DD[0], CD[1] - DD[1], CD[2] - DD[2], cD)
    }
  },
  38517: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD,
      h: () => pD
    });
    var ID = cD(38496);

    function pD(DD) {
      var CD;
      const cD = "default" === DD.mode ? "movement" : null !== (CD = DD.playerFacing) && void 0 !== CD ? CD : "movement";
      return "cursor" === cD ? {
        facing: cD,
        mouseTurns: null
      } : {
        facing: cD,
        mouseTurns: "default" !== DD.mode && void 0 !== DD.playerLook ? "look" : "view"
      }
    }

    function iD(DD, CD, cD, pD, iD, fD) {
      return fD.Qq = 0, fD.wq = 0, fD.pointedAt = void 0, void 0 !== pD ? iD ? (fD.pointedAt = pD, DD) : (0, ID.u)(pD.heading) : iD ? (fD.Qq = CD, fD.wq = cD, DD) : (0, ID.u)(DD + CD)
    }
  },
  38503: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => dD
    });
    var ID = cD(38505),
      pD = cD(38496),
      iD = cD(36366);

    function fD(DD, CD, cD, ID) {
      if (!(ID > 0)) return CD;
      const pD = CD > DD ? Math.min(CD, DD + cD / ID) : Math.max(CD, DD - cD / ID);
      return Math.abs(CD - pD) < 1e-9 ? CD : pD
    }
    class bD {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: ID.c,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(DD) {
        !this.isGoingOut() && this.sinceTurnMs < ID.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: DD
        } : (this.waiting = null, this.startOut(DD))
      }
      fadeIn(DD) {
        this.isGoingOut() ? this.sinceTurnMs < ID.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: DD
        } : (this.waiting = null, this.startIn(DD)) : this.waiting = null
      }
      advance(DD) {
        const CD = this.waiting;
        if (null === CD) return this.step(DD);
        const cD = ID.k.minFadeTurnMs - this.sinceTurnMs;
        if (cD > DD) return this.step(DD);
        const pD = this.step(cD);
        return this.waiting = null, "out" === CD.turn ? this.startOut(CD.transition) : this.startIn(CD.minMs), this.step(DD - cD) || pD
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(DD) {
        ("in" === this.phase || null === this.phase && this.clearMs < ID.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = DD.colour), this.outMs = DD.outMs, this.holdMs = DD.holdMs, this.inMs = DD.inMs
      }
      startIn(DD) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(DD, this.inMs)
      }
      step(DD) {
        const CD = this.screen;
        this.sinceTurnMs += DD, null === this.phase && (this.clearMs += DD);
        let cD = !1,
          pD = DD;
        if ("out" === this.phase) {
          const ID = (1 - CD.alpha) * this.outMs;
          if (CD.alpha = fD(CD.alpha, 1, DD, this.outMs), CD.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, pD = Math.max(0, DD - ID), cD = !0
        }
        let iD = DD;
        if ("hold" === this.phase) {
          this.heldMs += pD;
          const DD = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - ID.k.minFadeTurnMs);
          if (DD < 0 || cD) return cD;
          this.phase = "in", this.sinceTurnMs = DD, iD = DD
        }
        return "in" === this.phase && (CD.alpha = fD(CD.alpha, 0, iD, this.inMs), CD.alpha <= 0 && (this.phase = null, this.clearMs = 0)), cD
      }
    }
    var QD = cD(38494),
      wD = cD(38510),
      SD = cD(1865),
      BD = cD(35972);

    function yD(DD, CD) {
      for (let cD = 0; cD < CD.length; cD++) CD[cD] = DD[cD]
    }

    function MD(DD, CD) {
      var cD;
      return null !== (cD = DD.fov) && void 0 !== cD ? cD : CD.getDefaultFov()
    }

    function tD(DD, CD, cD, ID, pD) {
      const iD = 2 / ID,
        fD = Math.exp(-iD * pD);
      for (let bD = 0; bD < DD.length; bD++) {
        const ID = DD[bD] - cD[bD],
          QD = (CD[bD] + iD * ID) * pD;
        DD[bD] = cD[bD] + (ID + QD) * fD, CD[bD] = (CD[bD] - iD * QD) * fD
      }
    }
    class ZD {
      constructor(DD, CD, cD, ID) {
        var iD, fD, bD, QD, wD;
        this.settings = DD, this.Zy = CD, this.targets = cD, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.lb = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, pD.u)((0, SD.o)(null !== (iD = DD.viewHeading) && void 0 !== iD ? iD : 0)),
          pitch: (0, pD.j)((0, SD.o)(null !== (fD = DD.viewElevation) && void 0 !== fD ? fD : 45))
        }, this.closestDistance = null !== (bD = DD.closestDistance) && void 0 !== bD ? bD : Math.min(6, null !== (QD = DD.furthestDistance) && void 0 !== QD ? QD : 1 / 0), this.furthestDistance = null !== (wD = DD.furthestDistance) && void 0 !== wD ? wD : Math.max(64, this.closestDistance);
        const BD = (0, pD.i)(this.base.heading, this.base.pitch, this.forward),
          yD = ID.position,
          MD = this.closestDistance;
        this.goal = [yD[0] + BD[0] * MD, yD[1] + BD[1] * MD, yD[2] + BD[2] * MD, MD, this.base.heading, this.base.pitch]
      }
      update(DD, CD, cD) {
        var ID, iD;
        this.placeGoal(null !== (ID = this.settings.fov) && void 0 !== ID ? ID : this.Zy.getBaseFov()), this.goal[4] = (0, pD.x)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const fD = null !== (iD = this.settings.smoothMs) && void 0 !== iD ? iD : 400;
        !this.started || fD < 1 ? (yD(this.goal, this.smoothed), this.lb.fill(0), this.started = !0) : tD(this.smoothed, this.lb, this.goal, fD, DD), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, pD.j)(this.smoothed[5]), CD.apply(this.angles, cD);
        const bD = (0, pD.i)(cD.heading, cD.pitch, this.forward);
        for (let pD = 0; pD < 3; pD++) cD.position[pD] = this.smoothed[pD] - bD[pD] * this.smoothed[3];
        cD.fov = MD(this.settings, this.Zy)
      }
      continueFrom(DD) {
        DD instanceof ZD && (yD(DD.goal, this.goal), yD(DD.smoothed, this.smoothed), yD(DD.lb, this.lb), this.framedTargets = DD.framedTargets, this.started = DD.started)
      }
      reset() {
        this.lb.fill(0), this.started = !1
      }
      placeGoal(DD) {
        var CD;
        let cD = 0;
        for (const SD of this.settings.targets) {
          const DD = this.targets.currentAimPoint(SD);
          DD && (0, QD.h)(DD, this.pointAt(cD++))
        }
        if (cD > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const DD = this.targets.aimPoint(this.Zy.localPlayerId);
          DD && (0, QD.h)(DD, this.pointAt(cD++))
        }
        const ID = this.goal;
        if (0 === cD) return void(ID[3] = this.withinDistances(ID[3]));
        for (let QD = 0; QD < 3; QD++) {
          let DD = 1 / 0,
            CD = -1 / 0;
          for (let ID = 0; ID < cD; ID++) DD = Math.min(DD, this.points[ID][QD]), CD = Math.max(CD, this.points[ID][QD]);
          ID[QD] = (DD + CD) / 2
        }
        let pD = 0;
        for (let QD = 0; QD < cD; QD++) {
          const DD = this.points[QD];
          pD = Math.max(pD, Math.hypot(DD[0] - ID[0], DD[1] - ID[1], DD[2] - ID[2]))
        }
        const iD = Math.tan((0, SD.o)(DD) / 2),
          fD = Math.atan(iD * (!0 === this.settings.letterbox ? BD.g : 1)),
          bD = Math.atan(iD * this.Zy.getAspectRatio()),
          wD = (pD + (null !== (CD = this.settings.padding) && void 0 !== CD ? CD : 2)) / Math.sin(Math.min(fD, bD));
        ID[3] = this.withinDistances(wD)
      }
      withinDistances(DD) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, DD))
      }
      pointAt(DD) {
        return DD === this.points.length && this.points.push([0, 0, 0]), this.points[DD]
      }
    }
    class oD {
      constructor(DD) {
        this.limits = DD, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(DD) {
        this.limits && (this.yawOffset = DD.yawOffset, this.pitchOffset = DD.pitchOffset, this.idleMs = DD.idleMs)
      }
      update(DD, CD) {
        const cD = this.limits;
        if (!cD) return;
        const ID = Number.isFinite(CD.Qq) ? CD.Qq : 0,
          pD = Number.isFinite(CD.wq) ? CD.wq : 0;
        if (CD.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: CD.pointedAt.heading,
          pitch: CD.pointedAt.pitch
        };
        else if (0 !== ID || 0 !== pD) this.idleMs = 0, this.yawOffset += ID, this.pitchOffset += pD;
        else {
          const CD = Math.max(0, this.idleMs + DD - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += DD, void 0 !== cD.returnMs && CD > 0) {
            const DD = cD.returnMs > 0 ? Math.exp(-3 * CD / cD.returnMs) : 0;
            this.yawOffset *= DD, this.pitchOffset *= DD
          }
        }
        this.clampOffsets(cD)
      }
      clampOffsets(DD) {
        if (DD.maxYaw >= 180) this.yawOffset = (0, pD.w)(0, this.yawOffset);
        else {
          const CD = (0, SD.o)(DD.maxYaw);
          this.yawOffset = Math.max(-CD, Math.min(CD, this.yawOffset))
        }
        const CD = (0, SD.o)(DD.maxPitch);
        this.pitchOffset = Math.max(-CD, Math.min(CD, this.pitchOffset))
      }
      apply(DD, CD) {
        this.pointedAt && this.limits && (this.yawOffset = (0, pD.w)(DD.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - DD.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const cD = (0, pD.j)(DD.pitch + this.pitchOffset);
        this.pitchOffset = cD - DD.pitch, CD.heading = (0, pD.u)(DD.heading + this.yawOffset), CD.pitch = cD
      }
      unapply(DD, CD) {
        CD.heading = (0, pD.u)(DD.heading - this.yawOffset), CD.pitch = (0, pD.j)(DD.pitch - this.pitchOffset)
      }
    }
    const vD = 1e-6;

    function ND(DD) {
      return Math.sqrt(DD[0] * DD[0] + DD[1] * DD[1] + DD[2] * DD[2])
    }

    function gD(DD, CD, cD, ID, pD) {
      const iD = pD * pD,
        fD = iD * pD;
      return (2 * fD - 3 * iD + 1) * DD + (fD - 2 * iD + pD) * CD + (-2 * fD + 3 * iD) * cD + (fD - iD) * ID
    }

    function XD(DD, CD, cD, ID, pD) {
      const iD = pD * pD;
      return (6 * iD - 6 * pD) * DD + (3 * iD - 4 * pD + 1) * CD + (-6 * iD + 6 * pD) * cD + (3 * iD - 2 * pD) * ID
    }

    function mD(DD, CD) {
      const cD = CD[0] - DD[0],
        ID = CD[1] - DD[1],
        pD = CD[2] - DD[2];
      return Math.sqrt(cD * cD + ID * ID + pD * pD)
    }

    function nD(DD, CD, cD, ID, pD, iD) {
      for (let fD = 0; fD < 3; fD++) iD[fD] = pD ? DD[fD] * ID : cD[fD] - CD[fD];
      return pD && function(DD, CD) {
        const cD = ND(DD);
        if (cD > CD) {
          const ID = CD / cD;
          DD[0] *= ID, DD[1] *= ID, DD[2] *= ID
        }
      }(iD, 3 * mD(CD, cD)), iD
    }

    function OD(DD, CD, cD, ID) {
      for (let pD = 0; pD < 3; pD++) ID[pD] = 6 * (CD[pD] - DD[pD]) - 2 * cD[pD];
      if (ND(ID) < vD)
        for (let pD = 0; pD < 3; pD++) ID[pD] = CD[pD] - DD[pD];
      return ID
    }

    function PD(DD, CD) {
      return [2 * CD[0] - DD[0], 2 * CD[1] - DD[1], 2 * CD[2] - DD[2]]
    }

    function HD(DD, CD, cD, ID, pD, iD, fD) {
      if (!iD && !fD) return 0;
      const bD = iD ? DD : 2 * CD - cD,
        QD = fD ? cD : 2 * CD - DD,
        wD = iD ? ID : pD,
        SD = fD ? pD : ID,
        BD = (CD - bD) / wD,
        yD = (QD - CD) / SD;
      if (BD * yD <= 0) return 0;
      const MD = (QD - bD) / (wD + SD),
        tD = 3 * Math.min(Math.abs(BD), Math.abs(yD));
      return Math.max(-tD, Math.min(tD, MD))
    }

    function UD(DD, CD, cD, ID, pD, iD, fD) {
      const {
        u: bD,
        segmentMs: QD
      } = DD;
      if (!DD.curved) return cD + (ID - cD) * bD;
      return gD(cD, HD(CD, cD, ID, DD.beforeMs, QD, iD, !0) * QD, ID, HD(cD, ID, pD, QD, DD.afterMs, !0, fD) * QD, bD)
    }

    function xD(DD) {
      return Math.abs(DD.pitch) >= pD.e
    }
    class qD {
      constructor(DD, CD, cD, ID, pD) {
        this.nodes = DD, this.prevNodes = cD, this.nextNodes = ID, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = DD.map(((DD, cD) => this.nodeTangent(CD, pD, cD)))
      }
      sample(DD, CD, cD) {
        const {
          index: ID,
          toIndex: iD,
          segmentMs: fD,
          curved: bD
        } = DD, QD = this.fromAngles, wD = this.toAngles, SD = this.nodeAngles(ID, cD.position, CD, QD), BD = this.nodeAngles(iD, cD.position, CD, wD);
        if (fD > 0 && "aim" !== SD && "aim" !== BD && this.liveTangent(DD, QD)) return cD.heading = (0, pD.u)(QD.heading), void(cD.pitch = QD.pitch);
        if ("none" === SD && "none" === BD) return;
        !bD && fD > 0 && ("tangent" === SD && this.liveTangent(DD, QD), "tangent" === BD && this.liveTangent(DD, wD)), "none" === SD ? (0, pD.l)(wD, QD) : "none" === BD && (0, pD.l)(QD, wD);
        const yD = bD && DD.beforeIndex >= 0 && "none" !== this.nodeAngles(DD.beforeIndex, cD.position, CD, this.beforeAngles),
          MD = bD && DD.afterIndex >= 0 && "none" !== this.nodeAngles(DD.afterIndex, cD.position, CD, this.afterAngles),
          tD = (0, pD.x)(QD.heading, wD.heading),
          ZD = UD(DD, yD ? (0, pD.x)(QD.heading, this.beforeAngles.heading) : 0, QD.heading, tD, MD ? (0, pD.x)(tD, this.afterAngles.heading) : 0, yD, MD);
        cD.heading = (0, pD.u)(ZD), cD.pitch = (0, pD.j)(UD(DD, this.beforeAngles.pitch, QD.pitch, wD.pitch, this.afterAngles.pitch, yD, MD))
      }
      nodeAngles(DD, CD, cD, ID) {
        const pD = this.rawNodeAngles(DD, CD, cD, ID);
        return "none" !== pD && xD(ID) && !this.borrowHeading(this.prevNodes[DD], CD, cD, ID) && this.borrowHeading(this.nextNodes[DD], CD, cD, ID), pD
      }
      borrowHeading(DD, CD, cD, ID) {
        const pD = this.borrowedAngles;
        return !(DD < 0 || "none" === this.rawNodeAngles(DD, CD, cD, pD) || xD(pD)) && (ID.heading = pD.heading, !0)
      }
      rawNodeAngles(DD, CD, cD, ID) {
        const iD = this.nodes[DD].keyframe;
        if (iD.lookDirection) return (0, pD.m)(iD.lookDirection, ID), "aim";
        if (void 0 !== iD.lookAt) {
          const DD = cD(iD.lookAt);
          if (DD) return (0, pD.r)(CD, DD, ID), "aim"
        }
        const fD = this.tangents[DD];
        return fD ? ((0, pD.l)(fD, ID), "tangent") : "none"
      }
      liveTangent(DD, CD) {
        const cD = this.nodes[DD.index].position,
          ID = this.nodes[DD.toIndex].position,
          iD = this.derivative;
        for (let pD = 0; pD < 3; pD++) iD[pD] = XD(cD[pD], DD.fromTangent[pD], ID[pD], DD.toTangent[pD], DD.u);
        return ND(iD) > 1e-9 ? ((0, pD.m)(iD, CD), !0) : !(mD(cD, ID) < vD) && ((0, pD.m)(OD(cD, ID, DD.u < .5 ? DD.toTangent : DD.fromTangent, iD), CD), !0)
      }
      nodeTangent(DD, CD, cD) {
        var ID;
        const iD = DD[cD];
        if (ND(iD) > 1e-9) return (0, pD.m)(iD, {
          heading: 0,
          pitch: 0
        });
        const fD = null !== (ID = this.restDirectionTo(cD, cD + 1, DD, CD)) && void 0 !== ID ? ID : this.restDirectionTo(cD, cD - 1, DD, CD);
        return fD ? (0, pD.m)(fD, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(DD, CD, cD, ID) {
        const pD = this.nodes[DD],
          iD = this.nodes[CD];
        if (!iD || mD(pD.position, iD.position) < vD) return null;
        const [fD, bD] = CD > DD ? [pD, iD] : [iD, pD], QD = nD(cD[CD], fD.position, bD.position, bD.timeMs - fD.timeMs, ID, [0, 0, 0]);
        return OD(fD.position, bD.position, QD, [0, 0, 0])
      }
    }

    function JD(DD, CD) {
      const cD = DD.lookDirection || CD.lookDirection ? function(DD, CD) {
        if (!DD || !CD) return DD === CD;
        const cD = ND(DD),
          ID = ND(CD);
        return Math.hypot(DD[0] / cD - CD[0] / ID, DD[1] / cD - CD[1] / ID, DD[2] / cD - CD[2] / ID) < vD
      }(DD.lookDirection, CD.lookDirection) : (ID = DD.lookAt, pD = CD.lookAt, "object" !== typeof ID || "object" !== typeof pD ? ID === pD : mD(ID, pD) < vD);
      var ID, pD;
      return mD(DD.position, CD.position) < vD && DD.fov === CD.fov && cD
    }
    class KD {
      constructor(DD, CD, cD) {
        if (this.smooth = CD, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
        for (let iD = 1; iD < DD.length; iD++)
          if (!(DD[iD].timeMs > DD[iD - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = DD.map((DD => {
          var CD;
          return {
            timeMs: DD.timeMs,
            position: [...DD.position],
            keyframe: DD,
            easing: (0, iD.s)(null !== (CD = DD.easing) && void 0 !== CD ? CD : "linear")
          }
        }));
        const ID = this.nodes[0],
          pD = this.nodes[this.nodes.length - 1],
          fD = cD && this.nodes.length > 1;
        fD && !JD(ID.keyframe, pD.keyframe) && this.nodes.push({
          ...ID,
          timeMs: pD.timeMs + (pD.timeMs - ID.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = fD ? this.nodes[this.nodes.length - 1].timeMs - ID.timeMs : 0, this.prevNodes = this.nodes.map(((DD, CD) => this.neighbour(CD, -1))), this.nextNodes = this.nodes.map(((DD, CD) => this.neighbour(CD, 1))), this.prevGaps = this.prevNodes.map(((DD, CD) => DD >= 0 ? this.gapMs(CD, -1) : 0)), this.nextGaps = this.nextNodes.map(((DD, CD) => DD >= 0 ? this.gapMs(CD, 1) : 0)), this.velocities = this.nodes.map(((DD, CD) => {
          const cD = this.prevNodes[CD],
            ID = this.nextNodes[CD];
          return function(DD, CD, cD, ID, pD, iD) {
            if (iD[0] = 0, iD[1] = 0, iD[2] = 0, !DD && !cD) return iD;
            const fD = null !== DD && void 0 !== DD ? DD : PD(null !== cD && void 0 !== cD ? cD : CD, CD),
              bD = null !== cD && void 0 !== cD ? cD : PD(null !== DD && void 0 !== DD ? DD : CD, CD),
              QD = DD ? ID : pD,
              wD = cD ? pD : ID,
              SD = mD(fD, CD),
              BD = mD(CD, bD);
            if (SD < vD || BD < vD) return iD;
            const yD = Math.sqrt(SD),
              MD = Math.sqrt(BD),
              tD = (yD + MD) / (QD + wD);
            for (let ZD = 0; ZD < 3; ZD++) {
              const DD = (CD[ZD] - fD[ZD]) / yD - (bD[ZD] - fD[ZD]) / (yD + MD) + (bD[ZD] - CD[ZD]) / MD;
              iD[ZD] = DD * tD
            }
            return iD
          }(cD >= 0 ? this.nodes[cD].position : null, DD.position, ID >= 0 ? this.nodes[ID].position : null, this.prevGaps[CD], this.nextGaps[CD], [0, 0, 0])
        })), this.aim = new qD(this.nodes, this.velocities, this.prevNodes, this.nextNodes, CD)
      }
      sample(DD, CD, cD, ID) {
        const pD = this.findSegment(this.pathTime(DD));
        this.samplePosition(pD, ID.position), this.aim.sample(pD, CD, ID);
        const {
          beforeIndex: iD,
          afterIndex: fD
        } = pD;
        ID.fov = UD(pD, iD >= 0 ? this.fovAt(iD, cD) : 0, this.fovAt(pD.index, cD), this.fovAt(pD.toIndex, cD), fD >= 0 ? this.fovAt(fD, cD) : 0, iD >= 0, fD >= 0)
      }
      pathTime(DD) {
        const CD = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || DD <= CD) return DD;
        const cD = DD - CD;
        return CD + cD - this.loopMs * Math.floor(cD / this.loopMs)
      }
      findSegment(DD) {
        const CD = this.nodes,
          cD = this.segment;
        let ID = cD.index;
        for (DD < CD[ID].timeMs && (ID = 0); ID < CD.length - 2 && CD[ID + 1].timeMs <= DD;) ID++;
        const pD = Math.min(ID + 1, CD.length - 1),
          fD = CD[pD].timeMs - CD[ID].timeMs;
        return cD.index = ID, cD.toIndex = pD, cD.segmentMs = fD, cD.u = fD > 0 ? (0, iD.p)((DD - CD[ID].timeMs) / fD, CD[ID].easing) : 1, cD.curved = this.smooth && fD > 0, cD.beforeIndex = this.prevNodes[ID], cD.afterIndex = this.nextNodes[pD], cD.beforeMs = this.prevGaps[ID], cD.afterMs = this.nextGaps[pD], cD
      }
      samplePosition(DD, CD) {
        const {
          fromTangent: cD,
          toTangent: ID,
          curved: pD
        } = DD, iD = this.nodes[DD.index].position, fD = this.nodes[DD.toIndex].position;
        nD(this.velocities[DD.index], iD, fD, DD.segmentMs, pD, cD), nD(this.velocities[DD.toIndex], iD, fD, DD.segmentMs, pD, ID);
        const bD = DD.u;
        for (let QD = 0; QD < 3; QD++) CD[QD] = pD ? gD(iD[QD], cD[QD], fD[QD], ID[QD], bD) : iD[QD] + (fD[QD] - iD[QD]) * bD
      }
      fovAt(DD, CD) {
        var cD;
        return null !== (cD = this.nodes[DD].keyframe.fov) && void 0 !== cD ? cD : CD
      }
      neighbour(DD, CD) {
        const cD = this.nodes.length - 1,
          ID = DD + CD;
        return ID >= 0 && ID <= cD ? ID : this.loopMs <= 0 || cD < 2 ? -1 : ID < 0 ? cD - 1 : 1
      }
      gapMs(DD, CD) {
        const cD = this.nodes.length - 1;
        if (1 === CD) {
          const CD = DD === cD ? 0 : DD;
          return this.nodes[CD + 1].timeMs - this.nodes[CD].timeMs
        }
        const ID = 0 === DD ? cD : DD;
        return this.nodes[ID].timeMs - this.nodes[ID - 1].timeMs
      }
    }
    class aD {
      constructor(DD) {
        this.Zy = DD, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = CD => DD.getEntityPosition(CD), this.readAimPoint = CD => DD.getEntityAimPoint(CD)
      }
      aimPoint(DD) {
        return "string" !== typeof DD ? (0, QD.q)(DD, 3) ? DD : null : this.resolve(DD, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(DD) {
        const CD = "string" === typeof DD ? this.Zy.getEntityAimPoint(DD) : DD;
        return CD && (0, QD.q)(CD, 3) ? CD : null
      }
      feetPosition(DD) {
        return this.resolve(DD, this.readFeet, this.lastFeet)
      }
      heading(DD) {
        const CD = this.Zy.getEntityHeading(DD);
        if (null !== CD && Number.isFinite(CD)) return this.lastHeadings.set(DD, CD), CD;
        const cD = this.lastHeadings.get(DD);
        return void 0 !== cD ? cD : DD === this.Zy.localPlayerId ? 0 : this.heading(this.Zy.localPlayerId)
      }
      resolve(DD, CD, cD) {
        const ID = CD(DD);
        let pD = cD.get(DD);
        return ID && (0, QD.q)(ID, 3) ? (pD || (pD = [0, 0, 0], cD.set(DD, pD)), pD[0] = ID[0], pD[1] = ID[1], pD[2] = ID[2], pD) : pD || (DD === this.Zy.localPlayerId ? null : this.resolve(this.Zy.localPlayerId, CD, cD))
      }
    }

    function VD(DD) {
      return {
        heading: DD.heading,
        pitch: DD.pitch
      }
    }

    function zD(DD, CD) {
      Number.isFinite(DD.heading) && Number.isFinite(DD.pitch) || (0, pD.l)(CD, DD)
    }

    function jD(DD, CD, cD, ID, iD) {
      if (CD) return void(0, pD.m)(CD, iD);
      const fD = ID.aimPoint(cD);
      fD && (0, pD.r)(DD, fD, iD)
    }
    class lD {
      constructor(DD, CD, cD, ID) {
        this.settings = DD, this.Zy = CD, this.targets = cD, this.base = void 0, this.base = VD(ID)
      }
      update(DD, CD, cD) {
        var ID;
        const pD = this.settings;
        (0, QD.h)(pD.position, cD.position), jD(pD.position, pD.lookDirection, null !== (ID = pD.lookAt) && void 0 !== ID ? ID : this.Zy.localPlayerId, this.targets, this.base), CD.apply(this.base, cD), cD.fov = MD(pD, this.Zy)
      }
      continueFrom(DD) {
        DD instanceof lD && (0, pD.l)(DD.base, this.base)
      }
      reset(DD) {
        zD(this.base, DD)
      }
    }
    class LD {
      constructor(DD, CD, cD, ID) {
        this.settings = DD, this.Zy = CD, this.targets = cD, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.lb = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = VD(ID), this.goal = [...ID.position]
      }
      update(DD, CD, cD) {
        var ID, pD, iD;
        const fD = this.settings,
          bD = null !== (ID = fD.target) && void 0 !== ID ? ID : this.Zy.localPlayerId,
          wD = this.targets.feetPosition(bD);
        let SD = !1;
        wD && (SD = this.foundFeet && mD(this.lastFeet, wD) > 32 + .1 * DD, (0, QD.h)(wD, this.lastFeet), this.foundFeet = !0, this.placeGoal(wD, bD));
        const BD = null !== (pD = fD.smoothMs) && void 0 !== pD ? pD : 0;
        !this.started || BD < 1 || SD ? ((0, QD.h)(this.goal, this.smoothed), this.lb.fill(0), this.started = !0) : tD(this.smoothed, this.lb, this.goal, BD, DD), SD && (this.distance = -1), (0, QD.h)(this.smoothed, cD.position);
        const yD = !0 === fD.avoidTerrain ? this.pullIn(bD, DD, cD) : 1;
        let ZD = this.goal;
        if ("target" === fD.offsetSpace) ZD = cD.position;
        else if (yD < 1) {
          ZD = this.aimOrigin;
          for (let DD = 0; DD < 3; DD++) ZD[DD] = cD.position[DD] + (this.goal[DD] - this.smoothed[DD]) * yD
        }
        jD(ZD, fD.lookDirection, null !== (iD = fD.lookAt) && void 0 !== iD ? iD : bD, this.targets, this.base), CD.apply(this.base, cD), cD.fov = MD(fD, this.Zy)
      }
      continueFrom(DD) {
        DD instanceof LD && (0, ID.r)(DD.settings.target, this.settings.target) && ((0, pD.l)(DD.base, this.base), (0, QD.h)(DD.goal, this.goal), (0, QD.h)(DD.lastFeet, this.lastFeet), this.foundFeet = DD.foundFeet, (0, QD.h)(DD.smoothed, this.smoothed), (0, QD.h)(DD.lb, this.lb), this.started = DD.started, !0 === DD.settings.avoidTerrain && (this.distance = DD.distance))
      }
      reset(DD) {
        zD(this.base, DD), this.lb.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(DD, CD, cD) {
        const ID = this.targets.aimPoint(DD);
        if (!ID) return 1;
        const pD = cD.position,
          iD = mD(ID, pD);
        if (!(iD > 0)) return 1;
        const fD = this.toCamera;
        for (let QD = 0; QD < 3; QD++) fD[QD] = (pD[QD] - ID[QD]) / iD;
        const bD = function(DD, CD, cD) {
          return DD < 0 || CD < DD ? CD : CD + (DD - CD) * Math.exp(-cD / 150)
        }(this.distance, function(DD, CD, cD, ID) {
          const pD = DD.raycastTerrain(CD, cD, ID);
          return null !== pD && Number.isFinite(pD) ? Math.min(ID, Math.max(0, pD - .2)) : ID
        }(this.Zy, ID, fD, iD), CD);
        if (iD - bD < .001) return this.distance = -1, 1;
        this.distance = bD;
        for (let QD = 0; QD < 3; QD++) pD[QD] = ID[QD] + fD[QD] * bD;
        return bD / iD
      }
      placeGoal(DD, CD) {
        const cD = this.settings.offset;
        let ID = cD[0],
          pD = cD[2];
        if ("target" === this.settings.offsetSpace) {
          const DD = this.targets.heading(CD),
            iD = Math.cos(DD),
            fD = Math.sin(DD);
          ID = cD[0] * iD + cD[2] * fD, pD = -cD[0] * fD + cD[2] * iD
        }
        this.goal[0] = DD[0] + ID, this.goal[1] = DD[1] + cD[1], this.goal[2] = DD[2] + pD
      }
    }
    class TD {
      constructor(DD, CD, cD, ID) {
        var pD, iD;
        this.settings = DD, this.Zy = CD, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = DD.keyframes.length > 0 ? new KD(DD.keyframes, null === (pD = DD.smooth) || void 0 === pD || pD, null !== (iD = DD.loop) && void 0 !== iD && iD) : null, this.base = (0, QD.d)(ID, (0, QD.k)()), this.resolveTarget = DD => cD.aimPoint(DD)
      }
      update(DD, CD, cD) {
        this.elapsedMs += DD;
        const ID = MD(this.settings, this.Zy);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, ID, this.base) : this.base.fov = ID, (0, QD.h)(this.base.position, cD.position), cD.fov = this.base.fov, CD.apply(this.base, cD)
      }
      continueFrom(DD) {
        DD instanceof TD && (0, ID.r)(DD.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = DD.elapsedMs, (0, QD.d)(DD.base, this.base))
      }
      reset(DD) {
        zD(this.base, DD), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function GD(DD, CD) {
      return (0, ID.v)(DD, CD)
    }
    class RD {
      constructor(DD, CD, cD) {
        var ID;
        this.settings = DD, this.Zy = CD, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const pD = null !== cD && cD.settings.mode === DD.mode,
          iD = pD ? cD.pose : CD.getDefaultPose();
        this.pose = (0, QD.d)(iD, (0, QD.k)()), this.lastGoodPose = (0, QD.d)(pD ? cD.lastGoodPose : iD, (0, QD.k)()), this.look = new oD(DD.playerLook), this.targets = null !== (ID = null === cD || void 0 === cD ? void 0 : cD.targets) && void 0 !== ID ? ID : new aD(CD);
        const fD = (0, QD.d)(iD, (0, QD.k)());
        pD && cD.look.unapply(fD, fD), this.mode = function(DD, CD, cD, ID) {
          switch (DD.mode) {
            case "fixed":
              return new lD(DD, CD, cD, ID);
            case "follow":
              return new LD(DD, CD, cD, ID);
            case "path":
              return new TD(DD, CD, cD, ID);
            case "frame":
              return new ZD(DD, CD, cD, ID)
          }
        }(DD, CD, this.targets, fD), pD && (this.look.continueFrom(cD.look), this.mode.continueFrom(cD.mode))
      }
      update(DD, CD) {
        return this.look.update(DD, CD), this.mode.update(DD, this.look, this.pose), (0, QD.n)(this.pose) ? (0, QD.d)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, QD.d)(this.lastGoodPose, this.pose), this.mode.reset((0, QD.n)(this.lastGoodPose) ? this.lastGoodPose : this.Zy.getDefaultPose())), this.pose
      }
    }

    function kD(DD) {
      return [0, 0, DD[2], DD[3]]
    }
    class dD {
      constructor(DD) {
        this.Zy = DD, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new bD, this.shot = null, this.blend = null, this.mixed = (0, QD.k)(), this.output = (0, QD.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(DD) {
        const CD = (0, wD.c)(DD);
        if ((0, ID.r)(CD, this.pending ? this.pending.settings : this.settings)) return;
        const cD = GD(this.settings, CD);
        if (void 0 !== CD.transition && !cD) return this.pending = {
          settings: CD,
          shot: "default" === CD.mode ? null : new RD(CD, this.Zy, null)
        }, void this.fade.fadeOut(CD.transition);
        const pD = null !== this.pending;
        this.pending = null, !pD && cD || this.fade.fadeIn(ID.k.minTransitionFadeMs), this.show(CD, !1)
      }
      show(DD, CD) {
        var cD, pD;
        if ((0, ID.r)(DD, this.settings)) return;
        const fD = !CD && GD(this.settings, DD);
        this.settings = DD;
        const bD = null !== this.blend && this.blend.elapsedMs > 0,
          wD = (0, QD.d)(this.hasOutput ? this.output : this.Zy.getDefaultPose(), (0, QD.k)());
        if (this.shot = "default" === DD.mode ? null : new RD(DD, this.Zy, CD ? null : this.shot), fD) return;
        const SD = CD || !this.shot && !this.hasOutput ? 0 : null !== (cD = DD.blendInMs) && void 0 !== cD ? cD : 0;
        if (SD <= 0) return void(this.blend = null);
        const BD = (0, iD.s)(null !== (pD = DD.blendEasing) && void 0 !== pD ? pD : "easeInOut");
        this.blend = {
          from: wD,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: SD,
          easing: bD ? kD(BD) : BD
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
      update(DD, CD) {
        const cD = Number.isFinite(DD) && DD > 0 ? DD : 0;
        if (this.fade.advance(cD) && null !== this.pending) {
          const {
            settings: DD
          } = this.pending;
          this.pending = null, this.show(DD, !0)
        }
        this.loadingPositions.length = 0;
        const ID = this.pending;
        if (null !== ID && void 0 !== ID && ID.shot) {
          const DD = "path" === ID.settings.mode ? 0 : cD;
          this.noteLoadingPosition(ID.shot.update(DD, QD.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const fD = this.shot ? this.shot.update(cD, CD) : this.Zy.getDefaultPose();
        this.shot && this.noteLoadingPosition(fD.position);
        const bD = this.blend;
        if (!bD) return this.writeOutput(fD);
        bD.elapsedMs += cD;
        const wD = Math.min(1, bD.elapsedMs / bD.durationMs);
        if (bD.headingDelta = Number.isFinite(bD.headingDelta) ? (0, pD.x)(bD.headingDelta, fD.heading - bD.from.heading) : (0, pD.w)(bD.from.heading, fD.heading), (0, QD.r)(bD.from, fD, bD.headingDelta, (0, iD.p)(wD, bD.easing), this.mixed), wD >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else bD.fromScripted && this.noteLoadingPosition(bD.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(DD) {
        if (DD.every(Number.isFinite)) {
          const CD = this.loadingPositions;
          CD.push((0, QD.h)(DD, this.loadingSlots[CD.length]))
        }
      }
      writeOutput(DD) {
        const CD = this.output;
        (0, QD.n)(DD) ? (0, QD.d)(DD, CD) : this.hasOutput || (0, QD.d)(this.Zy.getDefaultPose(), CD), CD.pitch = (0, pD.j)(CD.pitch);
        const cD = this.Zy.getDefaultFov(),
          iD = Number.isFinite(cD) && cD > 0 && cD < 180,
          fD = iD ? Math.min(ID.k.minFov, cD) : ID.k.minFov,
          bD = iD ? Math.max(ID.k.maxFov, cD) : ID.k.maxFov;
        return CD.fov = Number.isFinite(CD.fov) ? Math.min(bD, Math.max(fD, CD.fov)) : bD, this.hasOutput = !0, CD
      }
    }
  },
  38494: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD,
      d: () => bD,
      h: () => fD,
      k: () => iD,
      n: () => wD,
      q: () => QD,
      r: () => SD
    });
    var ID = cD(38496);
    const pD = {
      Qq: 0,
      wq: 0
    };

    function iD() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function fD(DD, CD) {
      return CD[0] = DD[0], CD[1] = DD[1], CD[2] = DD[2], CD
    }

    function bD(DD, CD) {
      return fD(DD.position, CD.position), CD.heading = DD.heading, CD.pitch = DD.pitch, CD.fov = DD.fov, CD
    }

    function QD(DD, CD) {
      return Array.isArray(DD) && DD.length === CD && DD.every(Number.isFinite)
    }

    function wD(DD) {
      return QD(DD.position, 3) && Number.isFinite(DD.heading) && Number.isFinite(DD.pitch) && Number.isFinite(DD.fov)
    }

    function SD(DD, CD, cD, pD, iD) {
      for (let ID = 0; ID < 3; ID++) iD.position[ID] = DD.position[ID] + (CD.position[ID] - DD.position[ID]) * pD;
      return iD.heading = (0, ID.u)(DD.heading + cD * pD), iD.pitch = DD.pitch + (CD.pitch - DD.pitch) * pD, iD.fov = DD.fov + (CD.fov - DD.fov) * pD, iD
    }
  },
  38510: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => OD,
      e: () => yD
    });
    var ID = cD(38505),
      pD = cD(38494);
    const iD = ID.g,
      fD = ID.m;

    function bD(DD, CD, cD, ID) {
      return Number.isFinite(DD) ? Math.min(cD, Math.max(CD, DD)) : ID
    }

    function QD(DD, CD, cD) {
      return void 0 !== DD && Number.isFinite(DD) ? Math.min(cD, Math.max(CD, DD)) : void 0
    }

    function wD(DD) {
      const CD = ID.k.maxCoordinate;
      return [Math.min(CD, Math.max(-CD, DD[0])), Math.min(CD, Math.max(-CD, DD[1])), Math.min(CD, Math.max(-CD, DD[2]))]
    }

    function SD(DD) {
      return "string" === typeof DD ? DD : (0, pD.q)(DD, 3) ? wD(DD) : void 0
    }
    const BD = new RegExp(ID.o);

    function yD(DD) {
      return "string" === typeof DD && BD.test(DD)
    }

    function MD(DD) {
      const CD = [];
      if (!Array.isArray(DD)) return CD;
      for (const cD of DD.slice(0, ID.k.maxFrameTargets)) {
        const DD = SD(cD);
        void 0 === DD || "string" === typeof DD && !yD(DD) || CD.push(DD)
      }
      return CD
    }

    function tD(DD) {
      if (!(0, pD.q)(DD, 3)) return;
      const CD = Math.max(Math.abs(DD[0]), Math.abs(DD[1]), Math.abs(DD[2])),
        cD = Math.hypot(DD[0] / CD, DD[1] / CD, DD[2] / CD);
      return 0 === CD || CD * cD < ID.k.minDirectionLength ? void 0 : [DD[0] / CD / cD, DD[1] / CD / cD, DD[2] / CD / cD]
    }

    function ZD(DD) {
      if (void 0 !== DD) return "string" === typeof DD ? iD.includes(DD) ? DD : void 0 : (0, pD.q)(DD, 4) ? [bD(DD[0], 0, 1, 0), bD(DD[1], ID.k.minEasingY, ID.k.maxEasingY, 0), bD(DD[2], 0, 1, 1), bD(DD[3], ID.k.minEasingY, ID.k.maxEasingY, 1)] : "linear"
    }

    function oD(DD) {
      if (DD) return {
        maxYaw: bD(DD.maxYaw, 0, ID.k.maxPlayerLook, 0),
        maxPitch: bD(DD.maxPitch, 0, ID.k.maxPlayerLook, 0),
        returnMs: QD(DD.returnMs, 0, ID.k.maxReturnMs)
      }
    }
    const vD = new RegExp(ID.b);

    function ND(DD) {
      var CD;
      if ("object" !== typeof DD || null === DD) return;
      const cD = ID.k.maxTransitionMs,
        pD = ID.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof DD.colour && vD.test(DD.colour) ? DD.colour : ID.c,
        outMs: bD(DD.outMs, pD, cD, pD),
        holdMs: bD(null !== (CD = DD.holdMs) && void 0 !== CD ? CD : 0, 0, cD, 0),
        inMs: bD(DD.inMs, pD, cD, pD)
      }
    }

    function gD(DD) {
      return !0 === DD || void 0
    }

    function XD(DD) {
      if ("object" !== typeof DD || null === DD) return !1;
      const CD = DD.lookAt;
      return Number.isFinite(DD.timeMs) && (0, pD.q)(DD.position, 3) && (void 0 === CD || "string" === typeof CD || (0, pD.q)(CD, 3))
    }

    function mD(DD) {
      return {
        ...DD,
        timeMs: bD(DD.timeMs, 0, ID.k.maxPathMs, 0),
        position: wD(DD.position),
        lookAt: SD(DD.lookAt),
        lookDirection: tD(DD.lookDirection),
        fov: QD(DD.fov, ID.k.minFov, ID.k.maxFov),
        easing: ZD(DD.easing)
      }
    }

    function nD(DD) {
      const CD = [];
      if (!Array.isArray(DD)) return CD;
      for (const cD of DD.slice(0, ID.k.maxKeyframes)) {
        if (!XD(cD)) continue;
        const DD = mD(cD);
        (0 === CD.length || DD.timeMs > CD[CD.length - 1].timeMs) && CD.push(DD)
      }
      return CD
    }

    function OD(DD) {
      if ("object" !== typeof DD || null === DD) return {
        mode: "default"
      };
      const CD = {
          blendInMs: QD(DD.blendInMs, 0, ID.k.maxBlendInMs),
          blendEasing: ZD(DD.blendEasing),
          transition: ND(DD.transition),
          letterbox: gD(DD.letterbox),
          hideHud: gD(DD.hideHud)
        },
        cD = {
          mode: "default",
          ...CD
        };
      if ("default" === DD.mode || "fixed" === DD.mode && !(0, pD.q)(DD.position, 3)) return cD;
      const iD = {
        ...CD,
        fov: QD(DD.fov, ID.k.minFov, ID.k.maxFov),
        playerFacing: (BD = DD.playerFacing, fD.includes(BD) ? BD : void 0),
        playerLook: oD(DD.playerLook)
      };
      var BD, yD;
      switch (DD.mode) {
        case "fixed":
          return {
            ...DD, ...iD, position: wD(DD.position), lookAt: SD(DD.lookAt), lookDirection: tD(DD.lookDirection)
          };
        case "follow":
          return {
            ...DD, ...iD, target: "string" === typeof DD.target ? DD.target : void 0, lookAt: SD(DD.lookAt), offset: (yD = DD.offset, Array.isArray(yD) ? [bD(yD[0], -ID.k.maxOffset, ID.k.maxOffset, 0), bD(yD[1], -ID.k.maxOffset, ID.k.maxOffset, 0), bD(yD[2], -ID.k.maxOffset, ID.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: tD(DD.lookDirection), smoothMs: QD(DD.smoothMs, 0, ID.k.maxSmoothMs)
          };
        case "path":
          return {
            ...DD, ...iD, keyframes: nD(DD.keyframes)
          };
        case "frame":
          return {
            ...DD, ...iD, targets: MD(DD.targets), viewHeading: QD(DD.viewHeading, -ID.k.maxFrameHeading, ID.k.maxFrameHeading), viewElevation: QD(DD.viewElevation, 0, ID.k.maxFrameElevation), padding: QD(DD.padding, 0, ID.k.maxFrameDistance), closestDistance: QD(DD.closestDistance, 0, ID.k.maxFrameDistance), furthestDistance: QD(DD.furthestDistance, 0, ID.k.maxFrameDistance), smoothMs: QD(DD.smoothMs, 0, ID.k.maxSmoothMs)
          };
        default:
          return cD
      }
    }
  },
  38030: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => bD
    });
    var ID = cD(1221);

    function pD(DD) {
      const CD = /(\d*\.?\d+)px/.exec(DD);
      return CD ? Number(CD[1]) : null
    }

    function iD(DD) {
      return DD.split(/[\s,]+/).pop()
    }
    let fD = !1;
    const bD = {
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
      drawText: function(DD, CD, ID, bD, QD, wD) {
        if (QD <= 0 || wD <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: SD,
          fontVariant: BD,
          fontWeight: yD,
          fontSize: MD,
          font: tD
        } = this, ZD = [SD, BD, yD, `${MD}px`, tD].filter(Boolean).join(" "), oD = [
          [yD, `${MD}px`, iD(tD)].filter(Boolean).join(" "), `${MD}px sans-serif`
        ], vD = DD.font, ND = function(DD, CD, cD) {
          for (const ID of CD) {
            DD.font = ID;
            const CD = pD(DD.font),
              fD = iD(ID);
            if (null !== CD && Math.abs(CD - cD) <= .5 && DD.font.toLowerCase().includes(fD.toLowerCase())) return ID
          }
          return null
        }(DD, [ZD, ...oD], MD);
        ND !== ZD && function(DD, CD, ID) {
          fD || (fD = !0, Promise.resolve().then((() => cD(1077))).then((cD => {
            let {
              WZ: pD
            } = cD;
            pD(new Error("A canvas didn't take canvasTxt's font"), {
              font: DD,
              uM: CD,
              drawnWith: null !== ID && void 0 !== ID ? ID : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(ZD, vD, ND);
        const gD = pD(DD.font);
        if (null === ND && null !== gD && gD > 0) {
          const cD = MD / gD;
          DD.save();
          try {
            return DD.scale(cD, cD), {
              height: this.drawLines(DD, CD, ID / cD, bD / cD, QD / cD, wD / cD, gD).height * cD
            }
          } finally {
            DD.restore()
          }
        }
        return this.drawLines(DD, CD, ID, bD, QD, wD, MD)
      },
      drawLines: function(DD, CD, cD, pD, iD, fD, bD) {
        const QD = cD + iD,
          wD = pD + fD;
        let SD, BD = pD + fD / 2 + bD / 2;
        "right" === this.align ? (SD = QD, DD.textAlign = "right") : "left" === this.align ? (SD = cD, DD.textAlign = "left") : (SD = cD + iD / 2, DD.textAlign = "center");
        for (const ID of CD) {
          DD.measureText(ID).width >= iD && (CD = CD.replace(ID, ""))
        }
        CD = (0, ID.V)(CD);
        const yD = [],
          MD = CD.split("\n"),
          tD = this.justify ? DD.measureText("\u200a").width : 0;
        MD.forEach((CD => {
          let cD = DD.measureText(CD).width;
          if (cD <= iD) yD.push(CD);
          else {
            let ID = CD;
            const pD = iD;
            let fD, bD, QD;
            for (cD = DD.measureText(ID).width; cD > pD;) {
              for (fD = 0, bD = 0, QD = ""; bD < pD;) fD++, QD = ID.substr(0, fD), bD = DD.measureText(QD).width;
              fD--, QD = QD.substr(0, fD);
              const CD = fD;
              if (" " !== ID.substr(fD, 1)) {
                for (;
                  " " !== ID.substr(fD, 1) && 0 !== fD;) fD--;
                0 === fD && (fD = CD), QD = ID.substr(0, fD)
              }
              QD = this.justify ? this.justifyLine(DD, QD, tD, "\u200a", iD) : QD, ID = ID.substr(fD), cD = DD.measureText(ID).width, yD.push(QD)
            }
            cD > 0 && yD.push(ID)
          }
        }));
        const ZD = this.lineHeight ? this.lineHeight : this.getTextHeight(DD, CD),
          oD = ZD * (yD.length - 1),
          vD = oD / 2;
        let ND = pD;
        "top" === this.vAlign ? BD = pD + bD : "bottom" === this.vAlign ? (BD = wD - oD, ND = wD) : (ND = pD + fD / 2, BD -= vD), yD.forEach((CD => {
          CD = CD.trim(), DD.fillText(CD, SD, BD), BD += ZD
        })), this.debug && (DD.lineWidth = 3, DD.strokeStyle = "#00909e", DD.strokeRect(cD, pD, iD, fD), DD.lineWidth = 2, DD.strokeStyle = "#f6d743", DD.beginPath(), DD.moveTo(SD, pD), DD.lineTo(SD, wD), DD.stroke(), DD.strokeStyle = "#ff6363", DD.beginPath(), DD.moveTo(cD, ND), DD.lineTo(QD, ND), DD.stroke());
        return {
          height: oD + ZD
        }
      },
      getTextHeight: function(DD, CD) {
        const cD = DD.textBaseline;
        DD.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: ID
        } = DD.measureText(CD);
        return DD.textBaseline = cD, ID
      },
      justifyLine: function(DD, CD, cD, ID, pD) {
        const iD = CD.trim(),
          fD = DD.measureText(iD).width,
          bD = iD.split(/\s+/).length - 1,
          QD = Math.floor((pD - fD) / cD);
        if (bD <= 0 || QD <= 0) return iD;
        const wD = Math.floor(QD / bD);
        let SD = QD - bD * wD,
          BD = [];
        for (let yD = 0; yD < wD; yD++) BD.push(ID);
        BD = BD.join("");
        return iD.replace(/\s+/g, (DD => {
          const CD = SD > 0 ? BD + ID : BD;
          return SD--, DD + CD
        }))
      }
    }
  },
  38463: (DD, CD, cD) => {
    function ID(DD, CD) {
      return CD.set(DD), CD
    }
    cD.d(CD, {
      d: () => ID
    })
  },
  38038: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ZD,
      e: () => tD,
      f: () => yD,
      i: () => SD,
      k: () => BD
    });
    var ID = cD(4081),
      pD = cD(326);
    const iD = 1024,
      fD = 1536,
      bD = 2 * ID.h + 1,
      QD = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      wD = 1.5;

    function SD(DD, CD, cD) {
      if ("string" !== typeof DD) return CD;
      try {
        const cD = JSON.parse(DD);
        return cD && "object" === typeof cD ? cD : CD
      } catch (ID) {
        return void 0 !== cD && console.error(`Couldn't parse ${cD}`, ID), CD
      }
    }

    function BD(DD) {
      return SD(DD, null, "a leaderboard's rows")
    }

    function yD(DD, CD) {
      var cD, ID;
      return null !== CD && void 0 !== CD ? CD : {
        status: null !== (cD = DD.status) && void 0 !== cD ? cD : "loading",
        entries: null !== (ID = DD.entries) && void 0 !== ID ? ID : []
      }
    }

    function MD(DD, CD) {
      return "number" === typeof DD && Number.isFinite(DD) && DD > 0 ? DD : CD
    }

    function tD(DD, CD) {
      const cD = MD(DD.size, 1);
      let ID = MD(DD.width, MD(2.5 * cD, 2.5)),
        pD = MD(DD.height, MD(3.75 * cD, 3.75));
      Number.isFinite(iD * pD / ID) && Number.isFinite(fD * ID / pD) || (ID = 2.5, pD = 3.75);
      const bD = pD / ID,
        QD = Math.max(1, Math.min(iD, CD / bD));
      return {
        width: ID,
        height: pD,
        layoutWidth: Math.max(iD, fD / bD),
        layoutHeight: Math.max(fD, iD * bD),
        pixelWidth: Math.round(QD),
        pixelHeight: Math.round(Math.max(1, Math.min(CD, QD * bD)))
      }
    }

    function ZD(DD, CD, cD, fD, SD, BD) {
      DD.setTransform(1, 0, 0, 1, 0, 0), DD.fillStyle = pD.J.defaultNameTagBackground, DD.fillRect(0, 0, CD, cD), DD.scale(CD / fD.layoutWidth, cD / fD.layoutHeight), DD.translate((fD.layoutWidth - iD) / 2, 0),
        function(DD, CD, cD, iD) {
          var fD, SD, BD, yD;
          const {
            top: MD,
            around: tD,
            showPlayerText: ZD,
            localPlayerDbId: ND
          } = cD, {
            whiteUiText: gD,
            grayUiText: XD,
            yellowUiText: mD
          } = pD.J;
          DD.textBaseline = "middle";
          const nD = function(CD, cD, ID, pD, iD, fD) {
              let bD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              DD.font = `bold ${pD}px 'Jetbrains Mono', monospace`, DD.fillStyle = iD, DD.textAlign = bD;
              let QD = CD.replace(/[\r\n\t]/g, " ");
              if (DD.measureText(QD).width > fD) {
                for (; QD.length > 0 && DD.measureText(`${QD}\u2026`).width > fD;) QD = QD.slice(0, -1);
                QD += "\u2026"
              }
              DD.fillText(QD, cD, ID)
            },
            OD = CD => {
              DD.fillStyle = gD, DD.globalAlpha = .15, DD.fillRect(24, CD, 976, 2), DD.globalAlpha = 1
            },
            PD = null === ND ? null : (0, pD.rc)(ND),
            HD = DD => null !== PD && DD.playerHash === PD,
            UD = oD(MD.entries, ID.l),
            xD = "ready" === MD.status && UD.length > 0,
            qD = null === tD ? [] : oD(tD.entries, bD),
            JD = UD.some(HD),
            KD = null === tD ? null : function(DD) {
              const CD = DD;
              if (!CD || !Number.isFinite(CD.rank) || !Number.isFinite(CD.tied) || !Number.isFinite(CD.total)) return null;
              return CD
            }(tD.standing),
            aD = qD.find(HD),
            VD = UD.find(HD),
            zD = null === KD || void 0 === aD ? null : {
              value: aD.value,
              rank: KD.rank
            },
            jD = vD(UD, void 0 === VD || VD.value === (null === zD || void 0 === zD ? void 0 : zD.value) ? zD : null),
            lD = vD(qD, zD),
            LD = (DD, CD) => {
              const cD = DD.findIndex(HD);
              return cD >= 0 ? CD[cD] : null
            },
            TD = null !== (fD = null !== (SD = null === KD || void 0 === KD ? void 0 : KD.rank) && void 0 !== SD ? SD : LD(qD, lD)) && void 0 !== fD ? fD : LD(UD, jD);
          DD.font = "bold 34px 'Jetbrains Mono', monospace";
          const GD = [...xD ? jD : [], ...JD ? [] : lD],
            RD = Math.min(280, Math.max(0, ...GD.map((CD => DD.measureText(QD.format(CD)).width)))),
            kD = RD <= 80,
            dD = kD ? 80 : 32 + RD,
            YD = kD ? 148 : dD + 28,
            WD = 660 - YD;
          nD(`TOP ${ID.l}  /  ALL TIME`, 24, 52, 28, XD, 976), nD(ZD ? String(null !== (BD = CD.title) && void 0 !== BD ? BD : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, gD, 976), nD("RANK", 32, 174, 28, XD, YD - 40), nD("PLAYER", YD, 174, 28, XD, WD), nD(ZD ? String(null !== (yD = CD.scoreLabel) && void 0 !== yD ? yD : "Score").slice(0, 24) : "Score", 992, 174, 28, XD, 304, "right"), OD(202);
          const sD = (iD - 232) / (ID.l + wD + bD),
            ED = 208 + ID.l * sD,
            eD = ED + wD * sD,
            uD = (CD, cD, ID, pD) => {
              const iD = HD(CD);
              DD.fillStyle = iD ? mD : gD, DD.globalAlpha = iD ? .15 : pD ? .035 : 0, DD.fillRect(24, ID - sD / 2 + 1, 976, sD - 2), DD.globalAlpha = 1;
              const fD = iD ? mD : gD;
              nD(QD.format(cD), dD, ID, 34, fD, kD ? 80 : RD, kD ? "center" : "right"), nD(ZD ? String(CD.name).slice(0, 64) : "Player", YD, ID, 34, fD, WD);
              const bD = QD.format(CD.value);
              nD(DD.measureText(bD).width > 304 ? CD.value.toExponential(6) : bD, 992, ID, 34, fD, 304, "right")
            };
          if (xD)
            for (const [ID, pD] of UD.entries()) uD(pD, jD[ID], 208 + (ID + .5) * sD, ID % 2 === 0);
          else {
            const DD = "error" === MD.status,
              CD = DD ? "Couldn't load leaderboard" : "ready" === MD.status ? "No scores yet" : "Loading leaderboard\u2026",
              cD = DD ? "Trying again shortly" : "ready" === MD.status ? "Be the first on the board!" : "Fetching the top players",
              ID = (208 + ED) / 2;
            nD(CD, 512, ID - 28, 40, DD ? pD.J.redUiText : gD, 960, "center"), nD(cD, 512, ID + 27, 30, XD, 960, "center")
          }
          const hD = ED + wD * sD / 2;
          if (null === TD) OD(hD);
          else {
            const CD = null === KD ? 0 : KD.tied - 1,
              cD = `YOUR RANK #${QD.format(TD)}${null===KD?"":` of ${QD.format(KD.total)}`}`;
            DD.font = "bold 36px 'Jetbrains Mono', monospace";
            const ID = Math.max(20, Math.min(36, Math.floor(34560 / DD.measureText(cD).width)));
            nD(cD, 512, hD - (CD > 0 ? 15 : 0), ID, mD, 960, "center"), CD > 0 && nD(`Tied with ${QD.format(CD)} other${1===CD?"":"s"}`, 512, hD + 24, 24, XD, 960, "center")
          }
          if (null === tD) return;
          const rD = eD + bD * sD / 2;
          if (JD) nD(`You're in the top ${ID.l}!`, 512, rD, 40, mD, 960, "center");
          else if (0 === qD.length) nD("You're not on this board yet", 512, rD, 34, XD, 960, "center");
          else
            for (const [ID, pD] of qD.entries()) uD(pD, lD[ID], eD + (ID + .5) * sD, ID % 2 === 0)
        }(DD, SD, BD, fD.layoutHeight)
    }

    function oD(DD, CD) {
      return Array.isArray(DD) ? DD.slice(0, CD).filter((DD => DD && Number.isFinite(DD.rank) && Number.isFinite(DD.value))) : []
    }

    function vD(DD, CD) {
      const cD = [];
      let ID = !1;
      return DD.forEach(((pD, iD) => {
        if (null !== CD && pD.value === CD.value) return void cD.push(CD.rank);
        const fD = iD > 0 && pD.value === DD[iD - 1].value;
        fD || (ID = 0 === iD && 1 !== pD.rank), cD.push(fD && !ID ? cD[iD - 1] : pD.rank)
      })), cD
    }
  },
  38233: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      e: () => iD
    });
    const ID = 32;

    function pD(DD) {
      return Array.from(DD).length
    }

    function iD(DD) {
      const CD = [""];
      let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        pD = "";
      const iD = () => {
        CD.push(""), cD = 0, pD = ""
      };
      for (const fD of DD.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(fD)) iD();
        else if (/^\s+$/.test(fD)) pD += fD;
      else if (fD.length > 0) {
        const DD = Array.from(fD);
        cD > 0 && cD + pD.length + DD.length > ID && iD(), CD[CD.length - 1] += pD, cD += pD.length, pD = "";
        for (const pD of DD) cD >= ID && iD(), CD[CD.length - 1] += pD, cD++
      }
      return CD[CD.length - 1] += pD, CD
    }
  },
  38460: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(36020),
      pD = cD.n(ID);
    const iD = [1, 1, 1];

    function fD(DD) {
      if (!DD) return [...iD];
      try {
        const [CD, cD, ID] = pD()(DD).rgb().array();
        return [CD / 255, cD / 255, ID / 255]
      } catch (CD) {
        return console.warn(`Invalid groundArrowPath colour "${DD}":`, CD), [...iD]
      }
    }
  },
  33724: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      e: () => bD,
      f: () => fD,
      g: () => pD,
      i: () => ID
    });
    const ID = {
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
      pD = "/textures/dayNight/sun.png",
      iD = "/textures/dayNight/moon.png",
      fD = "/textures/dayNight/stars",
      bD = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  38505: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => SD,
      c: () => BD,
      g: () => ID,
      k: () => QD,
      m: () => pD,
      o: () => wD,
      r: () => bD,
      v: () => fD
    });
    const ID = ["linear", "easeIn", "easeOut", "easeInOut"],
      pD = ["movement", "camera", "cursor"],
      iD = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function fD(DD, CD) {
      return bD(DD, CD, iD)
    }

    function bD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (DD === CD || Number.isNaN(DD) && Number.isNaN(CD)) return !0;
      if ("object" !== typeof DD || "object" !== typeof CD || null === DD || null === CD || Array.isArray(DD) !== Array.isArray(CD)) return !1;
      const ID = DD,
        pD = CD;
      for (const iD of new Set([...Object.keys(ID), ...Object.keys(pD)]))
        if (!cD.includes(iD) && !bD(ID[iD], pD[iD])) return !1;
      return !0
    }
    const QD = {
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
      wD = "^-[1-9][0-9]*$",
      SD = "^#[0-9a-fA-F]{6}$",
      BD = "#000000"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);