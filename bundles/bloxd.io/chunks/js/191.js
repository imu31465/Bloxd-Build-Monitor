export const id = 191;
export const ids = [191];
export const modules = {
  39261: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm
    });
    class hm {
      constructor(mm, Tm) {
        this.read = mm, this.apply = Tm, this.release = null
      }
      turn(mm, Tm) {
        const fm = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: Tm,
          forcedCameraDirection: [mm[0], mm[1], mm[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), Tm + 100),
          transitionMs: fm
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(mm) {
        null !== this.release && (clearTimeout(this.release.timer), mm && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  38743: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am,
      f: () => Am
    });
    const hm = new Map;

    function Am(mm, Tm) {
      hm.set(mm, Tm)
    }

    function am(mm) {
      return mm ? hm.get(mm) : void 0
    }
  },
  39724: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am
    });
    var hm = fm(38306);

    function Am(mm, Tm, fm) {
      var Am, am, xm, wm, Dm, im, Rm;
      const pm = (0, hm.c)(mm, Tm, fm[0], fm[1], fm[2]),
        Em = pm ? null !== (Am = pm.textCell) && void 0 !== Am ? Am : pm.rect.anchor : fm,
        om = Tm(Em[0], Em[1], Em[2]);
      return {
        pos: [fm[0], fm[1], fm[2]],
        noticeboardSpan: pm && {
          width: pm.rect.width,
          height: pm.rect.height
        },
        text: null !== (am = null === om || void 0 === om || null === (xm = om.persisted) || void 0 === xm || null === (wm = xm.shared) || void 0 === wm ? void 0 : wm.text) && void 0 !== am ? am : "",
        textSize: null !== (Dm = null === om || void 0 === om || null === (im = om.persisted) || void 0 === im || null === (Rm = im.shared) || void 0 === Rm ? void 0 : Rm.textSize) && void 0 !== Dm ? Dm : null
      }
    }
  },
  38606: (mm, Tm, fm) => {
    function hm(mm) {
      switch (mm.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    fm.d(Tm, {
      b: () => Am,
      d: () => am,
      h: () => hm
    });
    const Am = 4,
      am = 3
  },
  39278: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      f: () => am
    });
    var hm = fm(354);
    const Am = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
    class am {
      constructor(mm) {
        this.importGame = mm, this.loads = new Map, this.loaded = new Map
      }
      load(mm) {
        const Tm = (0, hm.Pb)(mm);
        if (!Am.has(Tm)) return Promise.resolve(void 0);
        let fm = this.loads.get(Tm);
        return fm || (fm = this.importGame(Tm).then((mm => {
          const fm = mm.default;
          if ("function" !== typeof fm) throw new Error(`${Tm}'s client code has no default-exported factory`);
          return this.loaded.set(Tm, fm), fm
        })).catch((mm => {
          throw this.loads.delete(Tm), mm
        })), this.loads.set(Tm, fm)), fm
      }
      loadedFactory(mm) {
        const Tm = (0, hm.Pb)(mm);
        if (!Am.has(Tm)) return;
        const fm = this.loaded.get(Tm);
        if (!fm) throw new Error(`${Tm}'s client code started before it loaded`);
        return fm
      }
    }
  },
  39732: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(9240),
      Am = fm(34308),
      am = fm(3301);

    function xm(mm) {
      if (mm === hm.c) return 0;
      const Tm = (0, am.c)(mm);
      if (void 0 !== Tm && Tm <= Am.MAX_BLOCK_ID) return Tm;
      const fm = (0, am.c)(mm.split("|")[0]);
      if (void 0 !== fm && fm <= Am.MAX_BLOCK_ID && (0, Am.rootMetaDescOf)(fm) === mm) return fm;
      throw new Error(`Invalid block name. You sent ${mm}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39340: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = fm(23);
    class Am {
      constructor(mm) {
        this.screen = mm, this.hidesHud = !1
      }
      show(mm, Tm) {
        this.screen.setFade(mm.colour, mm.alpha), this.screen.setLetterbox(!0 === Tm.letterbox, mm.alpha < 1), this.setHudHidden(!0 === Tm.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(mm) {
        this.hidesHud !== mm && (this.hidesHud = mm, hm.c.set({
          isUiHiddenByCamera: mm
        }))
      }
    }
  },
  39297: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm,
      d: () => Em,
      g: () => pm,
      k: () => xm,
      n: () => Om,
      o: () => Dm,
      r: () => Ym,
      t: () => im,
      u: () => wm,
      x: () => Rm
    });
    const hm = Math.PI / 2 - .001,
      Am = 2 * Math.PI,
      am = 1e-9;

    function xm(mm, Tm) {
      Tm.heading = mm.heading, Tm.pitch = mm.pitch
    }

    function wm(mm, Tm) {
      const fm = Tm - mm;
      return fm - Am * Math.floor((fm + Math.PI) / Am)
    }

    function Dm(mm, Tm, fm) {
      return mm + wm(mm, Tm) * fm
    }

    function im(mm) {
      if (!Number.isFinite(mm)) return mm;
      const Tm = mm - Am * Math.floor(mm / Am);
      return Tm < Am ? Tm : 0
    }

    function Rm(mm, Tm) {
      return mm + wm(mm, Tm)
    }

    function pm(mm) {
      return Math.max(-hm, Math.min(hm, mm))
    }

    function Em(mm, Tm, fm) {
      const hm = Math.cos(Tm);
      return fm[0] = hm * Math.sin(mm), fm[1] = -Math.sin(Tm), fm[2] = hm * Math.cos(mm), fm
    }

    function om(mm, Tm, fm, hm) {
      const Am = Math.sqrt(mm * mm + fm * fm);
      return Am < am && Math.abs(Tm) < am || (Am >= am && (hm.heading = Math.atan2(mm, fm)), hm.pitch = pm(Math.atan2(-Tm, Am) + 0)), hm
    }

    function Om(mm, Tm) {
      return om(mm[0], mm[1], mm[2], Tm)
    }

    function Ym(mm, Tm, fm) {
      return om(Tm[0] - mm[0], Tm[1] - mm[1], Tm[2] - mm[2], fm)
    }
  },
  39335: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      g: () => Am
    });
    var hm = fm(39297);

    function Am(mm) {
      var Tm;
      const fm = "default" === mm.mode ? "movement" : null !== (Tm = mm.playerFacing) && void 0 !== Tm ? Tm : "movement";
      return "cursor" === fm ? {
        facing: fm,
        mouseTurns: null
      } : {
        facing: fm,
        mouseTurns: "default" !== mm.mode && void 0 !== mm.playerLook ? "look" : "view"
      }
    }

    function am(mm, Tm, fm, Am, am, xm) {
      return xm.XN = 0, xm.yN = 0, xm.pointedAt = void 0, void 0 !== Am ? am ? (xm.pointedAt = Am, mm) : (0, hm.t)(Am.heading) : am ? (xm.XN = Tm, xm.yN = fm, mm) : (0, hm.t)(mm + Tm)
    }
  },
  39314: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Mm
    });
    var hm = fm(39323),
      Am = fm(39297),
      am = fm(37093);

    function xm(mm, Tm, fm, hm) {
      if (!(hm > 0)) return Tm;
      const Am = Tm > mm ? Math.min(Tm, mm + fm / hm) : Math.max(Tm, mm - fm / hm);
      return Math.abs(Tm - Am) < 1e-9 ? Tm : Am
    }
    class wm {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: hm.i,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(mm) {
        !this.isGoingOut() && this.sinceTurnMs < hm.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: mm
        } : (this.waiting = null, this.startOut(mm))
      }
      fadeIn(mm) {
        this.isGoingOut() ? this.sinceTurnMs < hm.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: mm
        } : (this.waiting = null, this.startIn(mm)) : this.waiting = null
      }
      advance(mm) {
        const Tm = this.waiting;
        if (null === Tm) return this.step(mm);
        const fm = hm.k.minFadeTurnMs - this.sinceTurnMs;
        if (fm > mm) return this.step(mm);
        const Am = this.step(fm);
        return this.waiting = null, "out" === Tm.turn ? this.startOut(Tm.transition) : this.startIn(Tm.minMs), this.step(mm - fm) || Am
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(mm) {
        ("in" === this.phase || null === this.phase && this.clearMs < hm.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = mm.colour), this.outMs = mm.outMs, this.holdMs = mm.holdMs, this.inMs = mm.inMs
      }
      startIn(mm) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(mm, this.inMs)
      }
      step(mm) {
        const Tm = this.screen;
        this.sinceTurnMs += mm, null === this.phase && (this.clearMs += mm);
        let fm = !1,
          Am = mm;
        if ("out" === this.phase) {
          const hm = (1 - Tm.alpha) * this.outMs;
          if (Tm.alpha = xm(Tm.alpha, 1, mm, this.outMs), Tm.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, Am = Math.max(0, mm - hm), fm = !0
        }
        let am = mm;
        if ("hold" === this.phase) {
          this.heldMs += Am;
          const mm = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - hm.k.minFadeTurnMs);
          if (mm < 0 || fm) return fm;
          this.phase = "in", this.sinceTurnMs = mm, am = mm
        }
        return "in" === this.phase && (Tm.alpha = xm(Tm.alpha, 0, am, this.inMs), Tm.alpha <= 0 && (this.phase = null, this.clearMs = 0)), fm
      }
    }
    var Dm = fm(39288),
      im = fm(39327),
      Rm = fm(1877),
      pm = fm(36660);

    function Em(mm, Tm) {
      for (let fm = 0; fm < Tm.length; fm++) Tm[fm] = mm[fm]
    }

    function om(mm, Tm) {
      var fm;
      return null !== (fm = mm.fov) && void 0 !== fm ? fm : Tm.getDefaultFov()
    }

    function Om(mm, Tm, fm, hm, Am) {
      const am = 2 / hm,
        xm = Math.exp(-am * Am);
      for (let wm = 0; wm < mm.length; wm++) {
        const hm = mm[wm] - fm[wm],
          Dm = (Tm[wm] + am * hm) * Am;
        mm[wm] = fm[wm] + (hm + Dm) * xm, Tm[wm] = (Tm[wm] - am * Dm) * xm
      }
    }
    class Ym {
      constructor(mm, Tm, fm, hm) {
        var am, xm, wm, Dm, im;
        this.settings = mm, this.oE = Tm, this.targets = fm, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.qq = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Am.t)((0, Rm.j)(null !== (am = mm.viewHeading) && void 0 !== am ? am : 0)),
          pitch: (0, Am.g)((0, Rm.j)(null !== (xm = mm.viewElevation) && void 0 !== xm ? xm : 45))
        }, this.closestDistance = null !== (wm = mm.closestDistance) && void 0 !== wm ? wm : Math.min(6, null !== (Dm = mm.furthestDistance) && void 0 !== Dm ? Dm : 1 / 0), this.furthestDistance = null !== (im = mm.furthestDistance) && void 0 !== im ? im : Math.max(64, this.closestDistance);
        const pm = (0, Am.d)(this.base.heading, this.base.pitch, this.forward),
          Em = hm.position,
          om = this.closestDistance;
        this.goal = [Em[0] + pm[0] * om, Em[1] + pm[1] * om, Em[2] + pm[2] * om, om, this.base.heading, this.base.pitch]
      }
      update(mm, Tm, fm) {
        var hm, am;
        this.placeGoal(null !== (hm = this.settings.fov) && void 0 !== hm ? hm : this.oE.getBaseFov()), this.goal[4] = (0, Am.x)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const xm = null !== (am = this.settings.smoothMs) && void 0 !== am ? am : 400;
        !this.started || xm < 1 ? (Em(this.goal, this.smoothed), this.qq.fill(0), this.started = !0) : Om(this.smoothed, this.qq, this.goal, xm, mm), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Am.g)(this.smoothed[5]), Tm.apply(this.angles, fm);
        const wm = (0, Am.d)(fm.heading, fm.pitch, this.forward);
        for (let Am = 0; Am < 3; Am++) fm.position[Am] = this.smoothed[Am] - wm[Am] * this.smoothed[3];
        fm.fov = om(this.settings, this.oE)
      }
      continueFrom(mm) {
        mm instanceof Ym && (Em(mm.goal, this.goal), Em(mm.smoothed, this.smoothed), Em(mm.qq, this.qq), this.framedTargets = mm.framedTargets, this.started = mm.started)
      }
      reset() {
        this.qq.fill(0), this.started = !1
      }
      placeGoal(mm) {
        var Tm;
        let fm = 0;
        for (const Rm of this.settings.targets) {
          const mm = this.targets.currentAimPoint(Rm);
          mm && (0, Dm.j)(mm, this.pointAt(fm++))
        }
        if (fm > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const mm = this.targets.aimPoint(this.oE.localPlayerId);
          mm && (0, Dm.j)(mm, this.pointAt(fm++))
        }
        const hm = this.goal;
        if (0 === fm) return void(hm[3] = this.withinDistances(hm[3]));
        for (let Dm = 0; Dm < 3; Dm++) {
          let mm = 1 / 0,
            Tm = -1 / 0;
          for (let hm = 0; hm < fm; hm++) mm = Math.min(mm, this.points[hm][Dm]), Tm = Math.max(Tm, this.points[hm][Dm]);
          hm[Dm] = (mm + Tm) / 2
        }
        let Am = 0;
        for (let Dm = 0; Dm < fm; Dm++) {
          const mm = this.points[Dm];
          Am = Math.max(Am, Math.hypot(mm[0] - hm[0], mm[1] - hm[1], mm[2] - hm[2]))
        }
        const am = Math.tan((0, Rm.j)(mm) / 2),
          xm = Math.atan(am * (!0 === this.settings.letterbox ? pm.f : 1)),
          wm = Math.atan(am * this.oE.getAspectRatio()),
          im = (Am + (null !== (Tm = this.settings.padding) && void 0 !== Tm ? Tm : 2)) / Math.sin(Math.min(xm, wm));
        hm[3] = this.withinDistances(im)
      }
      withinDistances(mm) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, mm))
      }
      pointAt(mm) {
        return mm === this.points.length && this.points.push([0, 0, 0]), this.points[mm]
      }
    }
    class qm {
      constructor(mm) {
        this.limits = mm, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(mm) {
        this.limits && (this.yawOffset = mm.yawOffset, this.pitchOffset = mm.pitchOffset, this.idleMs = mm.idleMs)
      }
      update(mm, Tm) {
        const fm = this.limits;
        if (!fm) return;
        const hm = Number.isFinite(Tm.XN) ? Tm.XN : 0,
          Am = Number.isFinite(Tm.yN) ? Tm.yN : 0;
        if (Tm.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: Tm.pointedAt.heading,
          pitch: Tm.pointedAt.pitch
        };
        else if (0 !== hm || 0 !== Am) this.idleMs = 0, this.yawOffset += hm, this.pitchOffset += Am;
        else {
          const Tm = Math.max(0, this.idleMs + mm - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += mm, void 0 !== fm.returnMs && Tm > 0) {
            const mm = fm.returnMs > 0 ? Math.exp(-3 * Tm / fm.returnMs) : 0;
            this.yawOffset *= mm, this.pitchOffset *= mm
          }
        }
        this.clampOffsets(fm)
      }
      clampOffsets(mm) {
        if (mm.maxYaw >= 180) this.yawOffset = (0, Am.u)(0, this.yawOffset);
        else {
          const Tm = (0, Rm.j)(mm.maxYaw);
          this.yawOffset = Math.max(-Tm, Math.min(Tm, this.yawOffset))
        }
        const Tm = (0, Rm.j)(mm.maxPitch);
        this.pitchOffset = Math.max(-Tm, Math.min(Tm, this.pitchOffset))
      }
      apply(mm, Tm) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Am.u)(mm.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - mm.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const fm = (0, Am.g)(mm.pitch + this.pitchOffset);
        this.pitchOffset = fm - mm.pitch, Tm.heading = (0, Am.t)(mm.heading + this.yawOffset), Tm.pitch = fm
      }
      unapply(mm, Tm) {
        Tm.heading = (0, Am.t)(mm.heading - this.yawOffset), Tm.pitch = (0, Am.g)(mm.pitch - this.pitchOffset)
      }
    }
    const jm = 1e-6;

    function Vm(mm) {
      return Math.sqrt(mm[0] * mm[0] + mm[1] * mm[1] + mm[2] * mm[2])
    }

    function Im(mm, Tm, fm, hm, Am) {
      const am = Am * Am,
        xm = am * Am;
      return (2 * xm - 3 * am + 1) * mm + (xm - 2 * am + Am) * Tm + (-2 * xm + 3 * am) * fm + (xm - am) * hm
    }

    function Km(mm, Tm, fm, hm, Am) {
      const am = Am * Am;
      return (6 * am - 6 * Am) * mm + (3 * am - 4 * Am + 1) * Tm + (-6 * am + 6 * Am) * fm + (3 * am - 2 * Am) * hm
    }

    function Qm(mm, Tm) {
      const fm = Tm[0] - mm[0],
        hm = Tm[1] - mm[1],
        Am = Tm[2] - mm[2];
      return Math.sqrt(fm * fm + hm * hm + Am * Am)
    }

    function nm(mm, Tm, fm, hm, Am, am) {
      for (let xm = 0; xm < 3; xm++) am[xm] = Am ? mm[xm] * hm : fm[xm] - Tm[xm];
      return Am && function(mm, Tm) {
        const fm = Vm(mm);
        if (fm > Tm) {
          const hm = Tm / fm;
          mm[0] *= hm, mm[1] *= hm, mm[2] *= hm
        }
      }(am, 3 * Qm(Tm, fm)), am
    }

    function Jm(mm, Tm, fm, hm) {
      for (let Am = 0; Am < 3; Am++) hm[Am] = 6 * (Tm[Am] - mm[Am]) - 2 * fm[Am];
      if (Vm(hm) < jm)
        for (let Am = 0; Am < 3; Am++) hm[Am] = Tm[Am] - mm[Am];
      return hm
    }

    function cm(mm, Tm) {
      return [2 * Tm[0] - mm[0], 2 * Tm[1] - mm[1], 2 * Tm[2] - mm[2]]
    }

    function zm(mm, Tm, fm, hm, Am, am, xm) {
      if (!am && !xm) return 0;
      const wm = am ? mm : 2 * Tm - fm,
        Dm = xm ? fm : 2 * Tm - mm,
        im = am ? hm : Am,
        Rm = xm ? Am : hm,
        pm = (Tm - wm) / im,
        Em = (Dm - Tm) / Rm;
      if (pm * Em <= 0) return 0;
      const om = (Dm - wm) / (im + Rm),
        Om = 3 * Math.min(Math.abs(pm), Math.abs(Em));
      return Math.max(-Om, Math.min(Om, om))
    }

    function Zm(mm, Tm, fm, hm, Am, am, xm) {
      const {
        u: wm,
        segmentMs: Dm
      } = mm;
      if (!mm.curved) return fm + (hm - fm) * wm;
      return Im(fm, zm(Tm, fm, hm, mm.beforeMs, Dm, am, !0) * Dm, hm, zm(fm, hm, Am, Dm, mm.afterMs, !0, xm) * Dm, wm)
    }

    function km(mm) {
      return Math.abs(mm.pitch) >= Am.b
    }
    class bm {
      constructor(mm, Tm, fm, hm, Am) {
        this.nodes = mm, this.prevNodes = fm, this.nextNodes = hm, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = mm.map(((mm, fm) => this.nodeTangent(Tm, Am, fm)))
      }
      sample(mm, Tm, fm) {
        const {
          index: hm,
          toIndex: am,
          segmentMs: xm,
          curved: wm
        } = mm, Dm = this.fromAngles, im = this.toAngles, Rm = this.nodeAngles(hm, fm.position, Tm, Dm), pm = this.nodeAngles(am, fm.position, Tm, im);
        if (xm > 0 && "aim" !== Rm && "aim" !== pm && this.liveTangent(mm, Dm)) return fm.heading = (0, Am.t)(Dm.heading), void(fm.pitch = Dm.pitch);
        if ("none" === Rm && "none" === pm) return;
        !wm && xm > 0 && ("tangent" === Rm && this.liveTangent(mm, Dm), "tangent" === pm && this.liveTangent(mm, im)), "none" === Rm ? (0, Am.k)(im, Dm) : "none" === pm && (0, Am.k)(Dm, im);
        const Em = wm && mm.beforeIndex >= 0 && "none" !== this.nodeAngles(mm.beforeIndex, fm.position, Tm, this.beforeAngles),
          om = wm && mm.afterIndex >= 0 && "none" !== this.nodeAngles(mm.afterIndex, fm.position, Tm, this.afterAngles),
          Om = (0, Am.x)(Dm.heading, im.heading),
          Ym = Zm(mm, Em ? (0, Am.x)(Dm.heading, this.beforeAngles.heading) : 0, Dm.heading, Om, om ? (0, Am.x)(Om, this.afterAngles.heading) : 0, Em, om);
        fm.heading = (0, Am.t)(Ym), fm.pitch = (0, Am.g)(Zm(mm, this.beforeAngles.pitch, Dm.pitch, im.pitch, this.afterAngles.pitch, Em, om))
      }
      nodeAngles(mm, Tm, fm, hm) {
        const Am = this.rawNodeAngles(mm, Tm, fm, hm);
        return "none" !== Am && km(hm) && !this.borrowHeading(this.prevNodes[mm], Tm, fm, hm) && this.borrowHeading(this.nextNodes[mm], Tm, fm, hm), Am
      }
      borrowHeading(mm, Tm, fm, hm) {
        const Am = this.borrowedAngles;
        return !(mm < 0 || "none" === this.rawNodeAngles(mm, Tm, fm, Am) || km(Am)) && (hm.heading = Am.heading, !0)
      }
      rawNodeAngles(mm, Tm, fm, hm) {
        const am = this.nodes[mm].keyframe;
        if (am.lookDirection) return (0, Am.n)(am.lookDirection, hm), "aim";
        if (void 0 !== am.lookAt) {
          const mm = fm(am.lookAt);
          if (mm) return (0, Am.r)(Tm, mm, hm), "aim"
        }
        const xm = this.tangents[mm];
        return xm ? ((0, Am.k)(xm, hm), "tangent") : "none"
      }
      liveTangent(mm, Tm) {
        const fm = this.nodes[mm.index].position,
          hm = this.nodes[mm.toIndex].position,
          am = this.derivative;
        for (let Am = 0; Am < 3; Am++) am[Am] = Km(fm[Am], mm.fromTangent[Am], hm[Am], mm.toTangent[Am], mm.u);
        return Vm(am) > 1e-9 ? ((0, Am.n)(am, Tm), !0) : !(Qm(fm, hm) < jm) && ((0, Am.n)(Jm(fm, hm, mm.u < .5 ? mm.toTangent : mm.fromTangent, am), Tm), !0)
      }
      nodeTangent(mm, Tm, fm) {
        var hm;
        const am = mm[fm];
        if (Vm(am) > 1e-9) return (0, Am.n)(am, {
          heading: 0,
          pitch: 0
        });
        const xm = null !== (hm = this.restDirectionTo(fm, fm + 1, mm, Tm)) && void 0 !== hm ? hm : this.restDirectionTo(fm, fm - 1, mm, Tm);
        return xm ? (0, Am.n)(xm, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(mm, Tm, fm, hm) {
        const Am = this.nodes[mm],
          am = this.nodes[Tm];
        if (!am || Qm(Am.position, am.position) < jm) return null;
        const [xm, wm] = Tm > mm ? [Am, am] : [am, Am], Dm = nm(fm[Tm], xm.position, wm.position, wm.timeMs - xm.timeMs, hm, [0, 0, 0]);
        return Jm(xm.position, wm.position, Dm, [0, 0, 0])
      }
    }

    function Sm(mm, Tm) {
      const fm = mm.lookDirection || Tm.lookDirection ? function(mm, Tm) {
        if (!mm || !Tm) return mm === Tm;
        const fm = Vm(mm),
          hm = Vm(Tm);
        return Math.hypot(mm[0] / fm - Tm[0] / hm, mm[1] / fm - Tm[1] / hm, mm[2] / fm - Tm[2] / hm) < jm
      }(mm.lookDirection, Tm.lookDirection) : (hm = mm.lookAt, Am = Tm.lookAt, "object" !== typeof hm || "object" !== typeof Am ? hm === Am : Qm(hm, Am) < jm);
      var hm, Am;
      return Qm(mm.position, Tm.position) < jm && mm.fov === Tm.fov && fm
    }
    class em {
      constructor(mm, Tm, fm) {
        if (this.smooth = Tm, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === mm.length) throw new Error("A camera path needs at least one keyframe");
        for (let am = 1; am < mm.length; am++)
          if (!(mm[am].timeMs > mm[am - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = mm.map((mm => {
          var Tm;
          return {
            timeMs: mm.timeMs,
            position: [...mm.position],
            keyframe: mm,
            easing: (0, am.t)(null !== (Tm = mm.easing) && void 0 !== Tm ? Tm : "linear")
          }
        }));
        const hm = this.nodes[0],
          Am = this.nodes[this.nodes.length - 1],
          xm = fm && this.nodes.length > 1;
        xm && !Sm(hm.keyframe, Am.keyframe) && this.nodes.push({
          ...hm,
          timeMs: Am.timeMs + (Am.timeMs - hm.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = xm ? this.nodes[this.nodes.length - 1].timeMs - hm.timeMs : 0, this.prevNodes = this.nodes.map(((mm, Tm) => this.neighbour(Tm, -1))), this.nextNodes = this.nodes.map(((mm, Tm) => this.neighbour(Tm, 1))), this.prevGaps = this.prevNodes.map(((mm, Tm) => mm >= 0 ? this.gapMs(Tm, -1) : 0)), this.nextGaps = this.nextNodes.map(((mm, Tm) => mm >= 0 ? this.gapMs(Tm, 1) : 0)), this.velocities = this.nodes.map(((mm, Tm) => {
          const fm = this.prevNodes[Tm],
            hm = this.nextNodes[Tm];
          return function(mm, Tm, fm, hm, Am, am) {
            if (am[0] = 0, am[1] = 0, am[2] = 0, !mm && !fm) return am;
            const xm = null !== mm && void 0 !== mm ? mm : cm(null !== fm && void 0 !== fm ? fm : Tm, Tm),
              wm = null !== fm && void 0 !== fm ? fm : cm(null !== mm && void 0 !== mm ? mm : Tm, Tm),
              Dm = mm ? hm : Am,
              im = fm ? Am : hm,
              Rm = Qm(xm, Tm),
              pm = Qm(Tm, wm);
            if (Rm < jm || pm < jm) return am;
            const Em = Math.sqrt(Rm),
              om = Math.sqrt(pm),
              Om = (Em + om) / (Dm + im);
            for (let Ym = 0; Ym < 3; Ym++) {
              const mm = (Tm[Ym] - xm[Ym]) / Em - (wm[Ym] - xm[Ym]) / (Em + om) + (wm[Ym] - Tm[Ym]) / om;
              am[Ym] = mm * Om
            }
            return am
          }(fm >= 0 ? this.nodes[fm].position : null, mm.position, hm >= 0 ? this.nodes[hm].position : null, this.prevGaps[Tm], this.nextGaps[Tm], [0, 0, 0])
        })), this.aim = new bm(this.nodes, this.velocities, this.prevNodes, this.nextNodes, Tm)
      }
      sample(mm, Tm, fm, hm) {
        const Am = this.findSegment(this.pathTime(mm));
        this.samplePosition(Am, hm.position), this.aim.sample(Am, Tm, hm);
        const {
          beforeIndex: am,
          afterIndex: xm
        } = Am;
        hm.fov = Zm(Am, am >= 0 ? this.fovAt(am, fm) : 0, this.fovAt(Am.index, fm), this.fovAt(Am.toIndex, fm), xm >= 0 ? this.fovAt(xm, fm) : 0, am >= 0, xm >= 0)
      }
      pathTime(mm) {
        const Tm = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || mm <= Tm) return mm;
        const fm = mm - Tm;
        return Tm + fm - this.loopMs * Math.floor(fm / this.loopMs)
      }
      findSegment(mm) {
        const Tm = this.nodes,
          fm = this.segment;
        let hm = fm.index;
        for (mm < Tm[hm].timeMs && (hm = 0); hm < Tm.length - 2 && Tm[hm + 1].timeMs <= mm;) hm++;
        const Am = Math.min(hm + 1, Tm.length - 1),
          xm = Tm[Am].timeMs - Tm[hm].timeMs;
        return fm.index = hm, fm.toIndex = Am, fm.segmentMs = xm, fm.u = xm > 0 ? (0, am.p)((mm - Tm[hm].timeMs) / xm, Tm[hm].easing) : 1, fm.curved = this.smooth && xm > 0, fm.beforeIndex = this.prevNodes[hm], fm.afterIndex = this.nextNodes[Am], fm.beforeMs = this.prevGaps[hm], fm.afterMs = this.nextGaps[Am], fm
      }
      samplePosition(mm, Tm) {
        const {
          fromTangent: fm,
          toTangent: hm,
          curved: Am
        } = mm, am = this.nodes[mm.index].position, xm = this.nodes[mm.toIndex].position;
        nm(this.velocities[mm.index], am, xm, mm.segmentMs, Am, fm), nm(this.velocities[mm.toIndex], am, xm, mm.segmentMs, Am, hm);
        const wm = mm.u;
        for (let Dm = 0; Dm < 3; Dm++) Tm[Dm] = Am ? Im(am[Dm], fm[Dm], xm[Dm], hm[Dm], wm) : am[Dm] + (xm[Dm] - am[Dm]) * wm
      }
      fovAt(mm, Tm) {
        var fm;
        return null !== (fm = this.nodes[mm].keyframe.fov) && void 0 !== fm ? fm : Tm
      }
      neighbour(mm, Tm) {
        const fm = this.nodes.length - 1,
          hm = mm + Tm;
        return hm >= 0 && hm <= fm ? hm : this.loopMs <= 0 || fm < 2 ? -1 : hm < 0 ? fm - 1 : 1
      }
      gapMs(mm, Tm) {
        const fm = this.nodes.length - 1;
        if (1 === Tm) {
          const Tm = mm === fm ? 0 : mm;
          return this.nodes[Tm + 1].timeMs - this.nodes[Tm].timeMs
        }
        const hm = 0 === mm ? fm : mm;
        return this.nodes[hm].timeMs - this.nodes[hm - 1].timeMs
      }
    }
    class Nm {
      constructor(mm) {
        this.oE = mm, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Tm => mm.getEntityPosition(Tm), this.readAimPoint = Tm => mm.getEntityAimPoint(Tm)
      }
      aimPoint(mm) {
        return "string" !== typeof mm ? (0, Dm.p)(mm, 3) ? mm : null : this.resolve(mm, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(mm) {
        const Tm = "string" === typeof mm ? this.oE.getEntityAimPoint(mm) : mm;
        return Tm && (0, Dm.p)(Tm, 3) ? Tm : null
      }
      feetPosition(mm) {
        return this.resolve(mm, this.readFeet, this.lastFeet)
      }
      heading(mm) {
        const Tm = this.oE.getEntityHeading(mm);
        if (null !== Tm && Number.isFinite(Tm)) return this.lastHeadings.set(mm, Tm), Tm;
        const fm = this.lastHeadings.get(mm);
        return void 0 !== fm ? fm : mm === this.oE.localPlayerId ? 0 : this.heading(this.oE.localPlayerId)
      }
      resolve(mm, Tm, fm) {
        const hm = Tm(mm);
        let Am = fm.get(mm);
        return hm && (0, Dm.p)(hm, 3) ? (Am || (Am = [0, 0, 0], fm.set(mm, Am)), Am[0] = hm[0], Am[1] = hm[1], Am[2] = hm[2], Am) : Am || (mm === this.oE.localPlayerId ? null : this.resolve(this.oE.localPlayerId, Tm, fm))
      }
    }

    function Gm(mm) {
      return {
        heading: mm.heading,
        pitch: mm.pitch
      }
    }

    function Xm(mm, Tm) {
      Number.isFinite(mm.heading) && Number.isFinite(mm.pitch) || (0, Am.k)(Tm, mm)
    }

    function Pm(mm, Tm, fm, hm, am) {
      if (Tm) return void(0, Am.n)(Tm, am);
      const xm = hm.aimPoint(fm);
      xm && (0, Am.r)(mm, xm, am)
    }
    class Hm {
      constructor(mm, Tm, fm, hm) {
        this.settings = mm, this.oE = Tm, this.targets = fm, this.base = void 0, this.base = Gm(hm)
      }
      update(mm, Tm, fm) {
        var hm;
        const Am = this.settings;
        (0, Dm.j)(Am.position, fm.position), Pm(Am.position, Am.lookDirection, null !== (hm = Am.lookAt) && void 0 !== hm ? hm : this.oE.localPlayerId, this.targets, this.base), Tm.apply(this.base, fm), fm.fov = om(Am, this.oE)
      }
      continueFrom(mm) {
        mm instanceof Hm && (0, Am.k)(mm.base, this.base)
      }
      reset(mm) {
        Xm(this.base, mm)
      }
    }
    class ym {
      constructor(mm, Tm, fm, hm) {
        this.settings = mm, this.oE = Tm, this.targets = fm, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.qq = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.base = Gm(hm), this.goal = [...hm.position]
      }
      update(mm, Tm, fm) {
        var hm, Am, am;
        const xm = this.settings,
          wm = null !== (hm = xm.target) && void 0 !== hm ? hm : this.oE.localPlayerId,
          im = this.targets.feetPosition(wm);
        let Rm = !1;
        im && (Rm = this.foundFeet && Qm(this.lastFeet, im) > 32 + .1 * mm, (0, Dm.j)(im, this.lastFeet), this.foundFeet = !0, this.placeGoal(im, wm));
        const pm = null !== (Am = xm.smoothMs) && void 0 !== Am ? Am : 0;
        !this.started || pm < 1 || Rm ? ((0, Dm.j)(this.goal, this.smoothed), this.qq.fill(0), this.started = !0) : Om(this.smoothed, this.qq, this.goal, pm, mm), Rm && (this.distance = -1), (0, Dm.j)(this.smoothed, fm.position);
        const Em = !0 === xm.avoidTerrain ? this.pullIn(wm, mm, fm) : 1;
        let Ym = this.goal;
        if ("target" === xm.offsetSpace) Ym = fm.position;
        else if (Em < 1) {
          Ym = this.aimOrigin;
          for (let mm = 0; mm < 3; mm++) Ym[mm] = fm.position[mm] + (this.goal[mm] - this.smoothed[mm]) * Em
        }
        Pm(Ym, xm.lookDirection, null !== (am = xm.lookAt) && void 0 !== am ? am : wm, this.targets, this.base), Tm.apply(this.base, fm), fm.fov = om(xm, this.oE)
      }
      continueFrom(mm) {
        mm instanceof ym && (0, hm.p)(mm.settings.target, this.settings.target) && ((0, Am.k)(mm.base, this.base), (0, Dm.j)(mm.goal, this.goal), (0, Dm.j)(mm.lastFeet, this.lastFeet), this.foundFeet = mm.foundFeet, (0, Dm.j)(mm.smoothed, this.smoothed), (0, Dm.j)(mm.qq, this.qq), this.started = mm.started, !0 === mm.settings.avoidTerrain && (this.distance = mm.distance))
      }
      reset(mm) {
        Xm(this.base, mm), this.qq.fill(0), this.started = !1, this.distance = -1
      }
      pullIn(mm, Tm, fm) {
        const hm = this.targets.aimPoint(mm);
        if (!hm) return 1;
        const Am = fm.position,
          am = Qm(hm, Am);
        if (!(am > 0)) return 1;
        const xm = this.toCamera;
        for (let Dm = 0; Dm < 3; Dm++) xm[Dm] = (Am[Dm] - hm[Dm]) / am;
        const wm = function(mm, Tm, fm) {
          return mm < 0 || Tm < mm ? Tm : Tm + (mm - Tm) * Math.exp(-fm / 150)
        }(this.distance, function(mm, Tm, fm, hm) {
          const Am = mm.raycastTerrain(Tm, fm, hm);
          return null !== Am && Number.isFinite(Am) ? Math.min(hm, Math.max(0, Am - .2)) : hm
        }(this.oE, hm, xm, am), Tm);
        if (am - wm < .001) return this.distance = -1, 1;
        this.distance = wm;
        for (let Dm = 0; Dm < 3; Dm++) Am[Dm] = hm[Dm] + xm[Dm] * wm;
        return wm / am
      }
      placeGoal(mm, Tm) {
        const fm = this.settings.offset;
        let hm = fm[0],
          Am = fm[2];
        if ("target" === this.settings.offsetSpace) {
          const mm = this.targets.heading(Tm),
            am = Math.cos(mm),
            xm = Math.sin(mm);
          hm = fm[0] * am + fm[2] * xm, Am = -fm[0] * xm + fm[2] * am
        }
        this.goal[0] = mm[0] + hm, this.goal[1] = mm[1] + fm[1], this.goal[2] = mm[2] + Am
      }
    }
    class Cm {
      constructor(mm, Tm, fm, hm) {
        var Am, am;
        this.settings = mm, this.oE = Tm, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = mm.keyframes.length > 0 ? new em(mm.keyframes, null === (Am = mm.smooth) || void 0 === Am || Am, null !== (am = mm.loop) && void 0 !== am && am) : null, this.base = (0, Dm.h)(hm, (0, Dm.k)()), this.resolveTarget = mm => fm.aimPoint(mm)
      }
      update(mm, Tm, fm) {
        this.elapsedMs += mm;
        const hm = om(this.settings, this.oE);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, hm, this.base) : this.base.fov = hm, (0, Dm.j)(this.base.position, fm.position), fm.fov = this.base.fov, Tm.apply(this.base, fm)
      }
      continueFrom(mm) {
        mm instanceof Cm && (0, hm.p)(mm.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = mm.elapsedMs, (0, Dm.h)(mm.base, this.base))
      }
      reset(mm) {
        Xm(this.base, mm), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function rm(mm, Tm) {
      return (0, hm.t)(mm, Tm)
    }
    class sm {
      constructor(mm, Tm, fm) {
        var hm;
        this.settings = mm, this.oE = Tm, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Am = null !== fm && fm.settings.mode === mm.mode,
          am = Am ? fm.pose : Tm.getDefaultPose();
        this.pose = (0, Dm.h)(am, (0, Dm.k)()), this.lastGoodPose = (0, Dm.h)(Am ? fm.lastGoodPose : am, (0, Dm.k)()), this.look = new qm(mm.playerLook), this.targets = null !== (hm = null === fm || void 0 === fm ? void 0 : fm.targets) && void 0 !== hm ? hm : new Nm(Tm);
        const xm = (0, Dm.h)(am, (0, Dm.k)());
        Am && fm.look.unapply(xm, xm), this.mode = function(mm, Tm, fm, hm) {
          switch (mm.mode) {
            case "fixed":
              return new Hm(mm, Tm, fm, hm);
            case "follow":
              return new ym(mm, Tm, fm, hm);
            case "path":
              return new Cm(mm, Tm, fm, hm);
            case "frame":
              return new Ym(mm, Tm, fm, hm)
          }
        }(mm, Tm, this.targets, xm), Am && (this.look.continueFrom(fm.look), this.mode.continueFrom(fm.mode))
      }
      update(mm, Tm) {
        return this.look.update(mm, Tm), this.mode.update(mm, this.look, this.pose), (0, Dm.m)(this.pose) ? (0, Dm.h)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, Dm.h)(this.lastGoodPose, this.pose), this.mode.reset((0, Dm.m)(this.lastGoodPose) ? this.lastGoodPose : this.oE.getDefaultPose())), this.pose
      }
    }

    function lm(mm) {
      return [0, 0, mm[2], mm[3]]
    }
    class Mm {
      constructor(mm) {
        this.oE = mm, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new wm, this.shot = null, this.blend = null, this.mixed = (0, Dm.k)(), this.output = (0, Dm.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(mm) {
        const Tm = (0, im.d)(mm);
        if ((0, hm.p)(Tm, this.pending ? this.pending.settings : this.settings)) return;
        const fm = rm(this.settings, Tm);
        if (void 0 !== Tm.transition && !fm) return this.pending = {
          settings: Tm,
          shot: "default" === Tm.mode ? null : new sm(Tm, this.oE, null)
        }, void this.fade.fadeOut(Tm.transition);
        const Am = null !== this.pending;
        this.pending = null, !Am && fm || this.fade.fadeIn(hm.k.minTransitionFadeMs), this.show(Tm, !1)
      }
      show(mm, Tm) {
        var fm, Am;
        if ((0, hm.p)(mm, this.settings)) return;
        const xm = !Tm && rm(this.settings, mm);
        this.settings = mm;
        const wm = null !== this.blend && this.blend.elapsedMs > 0,
          im = (0, Dm.h)(this.hasOutput ? this.output : this.oE.getDefaultPose(), (0, Dm.k)());
        if (this.shot = "default" === mm.mode ? null : new sm(mm, this.oE, Tm ? null : this.shot), xm) return;
        const Rm = Tm || !this.shot && !this.hasOutput ? 0 : null !== (fm = mm.blendInMs) && void 0 !== fm ? fm : 0;
        if (Rm <= 0) return void(this.blend = null);
        const pm = (0, am.t)(null !== (Am = mm.blendEasing) && void 0 !== Am ? Am : "easeInOut");
        this.blend = {
          from: im,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Rm,
          easing: wm ? lm(pm) : pm
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
      update(mm, Tm) {
        const fm = Number.isFinite(mm) && mm > 0 ? mm : 0;
        if (this.fade.advance(fm) && null !== this.pending) {
          const {
            settings: mm
          } = this.pending;
          this.pending = null, this.show(mm, !0)
        }
        this.loadingPositions.length = 0;
        const hm = this.pending;
        if (null !== hm && void 0 !== hm && hm.shot) {
          const mm = "path" === hm.settings.mode ? 0 : fm;
          this.noteLoadingPosition(hm.shot.update(mm, Dm.e).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const xm = this.shot ? this.shot.update(fm, Tm) : this.oE.getDefaultPose();
        this.shot && this.noteLoadingPosition(xm.position);
        const wm = this.blend;
        if (!wm) return this.writeOutput(xm);
        wm.elapsedMs += fm;
        const im = Math.min(1, wm.elapsedMs / wm.durationMs);
        if (wm.headingDelta = Number.isFinite(wm.headingDelta) ? (0, Am.x)(wm.headingDelta, xm.heading - wm.from.heading) : (0, Am.u)(wm.from.heading, xm.heading), (0, Dm.t)(wm.from, xm, wm.headingDelta, (0, am.p)(im, wm.easing), this.mixed), im >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else wm.fromScripted && this.noteLoadingPosition(wm.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(mm) {
        if (mm.every(Number.isFinite)) {
          const Tm = this.loadingPositions;
          Tm.push((0, Dm.j)(mm, this.loadingSlots[Tm.length]))
        }
      }
      writeOutput(mm) {
        const Tm = this.output;
        (0, Dm.m)(mm) ? (0, Dm.h)(mm, Tm) : this.hasOutput || (0, Dm.h)(this.oE.getDefaultPose(), Tm), Tm.pitch = (0, Am.g)(Tm.pitch);
        const fm = this.oE.getDefaultFov(),
          am = Number.isFinite(fm) && fm > 0 && fm < 180,
          xm = am ? Math.min(hm.k.minFov, fm) : hm.k.minFov,
          wm = am ? Math.max(hm.k.maxFov, fm) : hm.k.maxFov;
        return Tm.fov = Number.isFinite(Tm.fov) ? Math.min(wm, Math.max(xm, Tm.fov)) : wm, this.hasOutput = !0, Tm
      }
    }
  },
  39288: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      h: () => wm,
      j: () => xm,
      k: () => am,
      m: () => im,
      p: () => Dm,
      t: () => Rm
    });
    var hm = fm(39297);
    const Am = {
      XN: 0,
      yN: 0
    };

    function am() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function xm(mm, Tm) {
      return Tm[0] = mm[0], Tm[1] = mm[1], Tm[2] = mm[2], Tm
    }

    function wm(mm, Tm) {
      return xm(mm.position, Tm.position), Tm.heading = mm.heading, Tm.pitch = mm.pitch, Tm.fov = mm.fov, Tm
    }

    function Dm(mm, Tm) {
      return Array.isArray(mm) && mm.length === Tm && mm.every(Number.isFinite)
    }

    function im(mm) {
      return Dm(mm.position, 3) && Number.isFinite(mm.heading) && Number.isFinite(mm.pitch) && Number.isFinite(mm.fov)
    }

    function Rm(mm, Tm, fm, Am, am) {
      for (let hm = 0; hm < 3; hm++) am.position[hm] = mm.position[hm] + (Tm.position[hm] - mm.position[hm]) * Am;
      return am.heading = (0, hm.t)(mm.heading + fm * Am), am.pitch = mm.pitch + (Tm.pitch - mm.pitch) * Am, am.fov = mm.fov + (Tm.fov - mm.fov) * Am, am
    }
  },
  39327: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Jm,
      e: () => Em
    });
    var hm = fm(39323),
      Am = fm(39288);
    const am = hm.j,
      xm = hm.n;

    function wm(mm, Tm, fm, hm) {
      return Number.isFinite(mm) ? Math.min(fm, Math.max(Tm, mm)) : hm
    }

    function Dm(mm, Tm, fm) {
      return void 0 !== mm && Number.isFinite(mm) ? Math.min(fm, Math.max(Tm, mm)) : void 0
    }

    function im(mm) {
      const Tm = hm.k.maxCoordinate;
      return [Math.min(Tm, Math.max(-Tm, mm[0])), Math.min(Tm, Math.max(-Tm, mm[1])), Math.min(Tm, Math.max(-Tm, mm[2]))]
    }

    function Rm(mm) {
      return "string" === typeof mm ? mm : (0, Am.p)(mm, 3) ? im(mm) : void 0
    }
    const pm = new RegExp(hm.o);

    function Em(mm) {
      return "string" === typeof mm && pm.test(mm)
    }

    function om(mm) {
      const Tm = [];
      if (!Array.isArray(mm)) return Tm;
      for (const fm of mm.slice(0, hm.k.maxFrameTargets)) {
        const mm = Rm(fm);
        void 0 === mm || "string" === typeof mm && !Em(mm) || Tm.push(mm)
      }
      return Tm
    }

    function Om(mm) {
      if (!(0, Am.p)(mm, 3)) return;
      const Tm = Math.max(Math.abs(mm[0]), Math.abs(mm[1]), Math.abs(mm[2])),
        fm = Math.hypot(mm[0] / Tm, mm[1] / Tm, mm[2] / Tm);
      return 0 === Tm || Tm * fm < hm.k.minDirectionLength ? void 0 : [mm[0] / Tm / fm, mm[1] / Tm / fm, mm[2] / Tm / fm]
    }

    function Ym(mm) {
      if (void 0 !== mm) return "string" === typeof mm ? am.includes(mm) ? mm : void 0 : (0, Am.p)(mm, 4) ? [wm(mm[0], 0, 1, 0), wm(mm[1], hm.k.minEasingY, hm.k.maxEasingY, 0), wm(mm[2], 0, 1, 1), wm(mm[3], hm.k.minEasingY, hm.k.maxEasingY, 1)] : "linear"
    }

    function qm(mm) {
      if (mm) return {
        maxYaw: wm(mm.maxYaw, 0, hm.k.maxPlayerLook, 0),
        maxPitch: wm(mm.maxPitch, 0, hm.k.maxPlayerLook, 0),
        returnMs: Dm(mm.returnMs, 0, hm.k.maxReturnMs)
      }
    }
    const jm = new RegExp(hm.e);

    function Vm(mm) {
      var Tm;
      if ("object" !== typeof mm || null === mm) return;
      const fm = hm.k.maxTransitionMs,
        Am = hm.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof mm.colour && jm.test(mm.colour) ? mm.colour : hm.i,
        outMs: wm(mm.outMs, Am, fm, Am),
        holdMs: wm(null !== (Tm = mm.holdMs) && void 0 !== Tm ? Tm : 0, 0, fm, 0),
        inMs: wm(mm.inMs, Am, fm, Am)
      }
    }

    function Im(mm) {
      return !0 === mm || void 0
    }

    function Km(mm) {
      if ("object" !== typeof mm || null === mm) return !1;
      const Tm = mm.lookAt;
      return Number.isFinite(mm.timeMs) && (0, Am.p)(mm.position, 3) && (void 0 === Tm || "string" === typeof Tm || (0, Am.p)(Tm, 3))
    }

    function Qm(mm) {
      return {
        ...mm,
        timeMs: wm(mm.timeMs, 0, hm.k.maxPathMs, 0),
        position: im(mm.position),
        lookAt: Rm(mm.lookAt),
        lookDirection: Om(mm.lookDirection),
        fov: Dm(mm.fov, hm.k.minFov, hm.k.maxFov),
        easing: Ym(mm.easing)
      }
    }

    function nm(mm) {
      const Tm = [];
      if (!Array.isArray(mm)) return Tm;
      for (const fm of mm.slice(0, hm.k.maxKeyframes)) {
        if (!Km(fm)) continue;
        const mm = Qm(fm);
        (0 === Tm.length || mm.timeMs > Tm[Tm.length - 1].timeMs) && Tm.push(mm)
      }
      return Tm
    }

    function Jm(mm) {
      if ("object" !== typeof mm || null === mm) return {
        mode: "default"
      };
      const Tm = {
          blendInMs: Dm(mm.blendInMs, 0, hm.k.maxBlendInMs),
          blendEasing: Ym(mm.blendEasing),
          transition: Vm(mm.transition),
          letterbox: Im(mm.letterbox),
          hideHud: Im(mm.hideHud)
        },
        fm = {
          mode: "default",
          ...Tm
        };
      if ("default" === mm.mode || "fixed" === mm.mode && !(0, Am.p)(mm.position, 3)) return fm;
      const am = {
        ...Tm,
        fov: Dm(mm.fov, hm.k.minFov, hm.k.maxFov),
        playerFacing: (pm = mm.playerFacing, xm.includes(pm) ? pm : void 0),
        playerLook: qm(mm.playerLook)
      };
      var pm, Em;
      switch (mm.mode) {
        case "fixed":
          return {
            ...mm, ...am, position: im(mm.position), lookAt: Rm(mm.lookAt), lookDirection: Om(mm.lookDirection)
          };
        case "follow":
          return {
            ...mm, ...am, target: "string" === typeof mm.target ? mm.target : void 0, lookAt: Rm(mm.lookAt), offset: (Em = mm.offset, Array.isArray(Em) ? [wm(Em[0], -hm.k.maxOffset, hm.k.maxOffset, 0), wm(Em[1], -hm.k.maxOffset, hm.k.maxOffset, 0), wm(Em[2], -hm.k.maxOffset, hm.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: Om(mm.lookDirection), smoothMs: Dm(mm.smoothMs, 0, hm.k.maxSmoothMs)
          };
        case "path":
          return {
            ...mm, ...am, keyframes: nm(mm.keyframes)
          };
        case "frame":
          return {
            ...mm, ...am, targets: om(mm.targets), viewHeading: Dm(mm.viewHeading, -hm.k.maxFrameHeading, hm.k.maxFrameHeading), viewElevation: Dm(mm.viewElevation, 0, hm.k.maxFrameElevation), padding: Dm(mm.padding, 0, hm.k.maxFrameDistance), closestDistance: Dm(mm.closestDistance, 0, hm.k.maxFrameDistance), furthestDistance: Dm(mm.furthestDistance, 0, hm.k.maxFrameDistance), smoothMs: Dm(mm.smoothMs, 0, hm.k.maxSmoothMs)
          };
        default:
          return fm
      }
    }
  },
  38750: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => wm
    });
    var hm = fm(1235);

    function Am(mm) {
      const Tm = /(\d*\.?\d+)px/.exec(mm);
      return Tm ? Number(Tm[1]) : null
    }

    function am(mm) {
      return mm.split(/[\s,]+/).pop()
    }
    let xm = !1;
    const wm = {
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
      drawText: function(mm, Tm, hm, wm, Dm, im) {
        if (Dm <= 0 || im <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Rm,
          fontVariant: pm,
          fontWeight: Em,
          fontSize: om,
          font: Om
        } = this, Ym = [Rm, pm, Em, `${om}px`, Om].filter(Boolean).join(" "), qm = [
          [Em, `${om}px`, am(Om)].filter(Boolean).join(" "), `${om}px sans-serif`
        ], jm = mm.font, Vm = function(mm, Tm, fm) {
          for (const hm of Tm) {
            mm.font = hm;
            const Tm = Am(mm.font),
              xm = am(hm);
            if (null !== Tm && Math.abs(Tm - fm) <= .5 && mm.font.toLowerCase().includes(xm.toLowerCase())) return hm
          }
          return null
        }(mm, [Ym, ...qm], om);
        Vm !== Ym && function(mm, Tm, hm) {
          xm || (xm = !0, Promise.resolve().then((() => fm(1103))).then((fm => {
            let {
              lY: Am
            } = fm;
            Am(new Error("A canvas didn't take canvasTxt's font"), {
              font: mm,
              mO: Tm,
              drawnWith: null !== hm && void 0 !== hm ? hm : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Ym, jm, Vm);
        const Im = Am(mm.font);
        if (null === Vm && null !== Im && Im > 0) {
          const fm = om / Im;
          mm.save();
          try {
            return mm.scale(fm, fm), {
              height: this.drawLines(mm, Tm, hm / fm, wm / fm, Dm / fm, im / fm, Im).height * fm
            }
          } finally {
            mm.restore()
          }
        }
        return this.drawLines(mm, Tm, hm, wm, Dm, im, om)
      },
      drawLines: function(mm, Tm, fm, Am, am, xm, wm) {
        const Dm = fm + am,
          im = Am + xm;
        let Rm, pm = Am + xm / 2 + wm / 2;
        "right" === this.align ? (Rm = Dm, mm.textAlign = "right") : "left" === this.align ? (Rm = fm, mm.textAlign = "left") : (Rm = fm + am / 2, mm.textAlign = "center");
        for (const hm of Tm) {
          mm.measureText(hm).width >= am && (Tm = Tm.replace(hm, ""))
        }
        Tm = (0, hm.M)(Tm);
        const Em = [],
          om = Tm.split("\n"),
          Om = this.justify ? mm.measureText("\u200a").width : 0;
        om.forEach((Tm => {
          let fm = mm.measureText(Tm).width;
          if (fm <= am) Em.push(Tm);
          else {
            let hm = Tm;
            const Am = am;
            let xm, wm, Dm;
            for (fm = mm.measureText(hm).width; fm > Am;) {
              for (xm = 0, wm = 0, Dm = ""; wm < Am;) xm++, Dm = hm.substr(0, xm), wm = mm.measureText(Dm).width;
              xm--, Dm = Dm.substr(0, xm);
              const Tm = xm;
              if (" " !== hm.substr(xm, 1)) {
                for (;
                  " " !== hm.substr(xm, 1) && 0 !== xm;) xm--;
                0 === xm && (xm = Tm), Dm = hm.substr(0, xm)
              }
              Dm = this.justify ? this.justifyLine(mm, Dm, Om, "\u200a", am) : Dm, hm = hm.substr(xm), fm = mm.measureText(hm).width, Em.push(Dm)
            }
            fm > 0 && Em.push(hm)
          }
        }));
        const Ym = this.lineHeight ? this.lineHeight : this.getTextHeight(mm, Tm),
          qm = Ym * (Em.length - 1),
          jm = qm / 2;
        let Vm = Am;
        "top" === this.vAlign ? pm = Am + wm : "bottom" === this.vAlign ? (pm = im - qm, Vm = im) : (Vm = Am + xm / 2, pm -= jm), Em.forEach((Tm => {
          Tm = Tm.trim(), mm.fillText(Tm, Rm, pm), pm += Ym
        })), this.debug && (mm.lineWidth = 3, mm.strokeStyle = "#00909e", mm.strokeRect(fm, Am, am, xm), mm.lineWidth = 2, mm.strokeStyle = "#f6d743", mm.beginPath(), mm.moveTo(Rm, Am), mm.lineTo(Rm, im), mm.stroke(), mm.strokeStyle = "#ff6363", mm.beginPath(), mm.moveTo(fm, Vm), mm.lineTo(Dm, Vm), mm.stroke());
        return {
          height: qm + Ym
        }
      },
      getTextHeight: function(mm, Tm) {
        const fm = mm.textBaseline;
        mm.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: hm
        } = mm.measureText(Tm);
        return mm.textBaseline = fm, hm
      },
      justifyLine: function(mm, Tm, fm, hm, Am) {
        const am = Tm.trim(),
          xm = mm.measureText(am).width,
          wm = am.split(/\s+/).length - 1,
          Dm = Math.floor((Am - xm) / fm);
        if (wm <= 0 || Dm <= 0) return am;
        const im = Math.floor(Dm / wm);
        let Rm = Dm - wm * im,
          pm = [];
        for (let Em = 0; Em < im; Em++) pm.push(hm);
        pm = pm.join("");
        return am.replace(/\s+/g, (mm => {
          const Tm = Rm > 0 ? pm + hm : pm;
          return Rm--, mm + Tm
        }))
      }
    }
  },
  39252: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return Tm.set(mm), Tm
    }
    fm.d(Tm, {
      b: () => hm
    })
  },
  38756: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Ym,
      g: () => Om,
      j: () => Em,
      l: () => Rm,
      p: () => pm
    });
    var hm = fm(4171),
      Am = fm(354);
    const am = 1024,
      xm = 1536,
      wm = 2 * hm.n + 1,
      Dm = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      im = 1.5;

    function Rm(mm, Tm, fm) {
      if ("string" !== typeof mm) return Tm;
      try {
        const fm = JSON.parse(mm);
        return fm && "object" === typeof fm ? fm : Tm
      } catch (hm) {
        return void 0 !== fm && console.error(`Couldn't parse ${fm}`, hm), Tm
      }
    }

    function pm(mm) {
      return Rm(mm, null, "a leaderboard's rows")
    }

    function Em(mm, Tm) {
      var fm, hm;
      return null !== Tm && void 0 !== Tm ? Tm : {
        status: null !== (fm = mm.status) && void 0 !== fm ? fm : "loading",
        entries: null !== (hm = mm.entries) && void 0 !== hm ? hm : []
      }
    }

    function om(mm, Tm) {
      return "number" === typeof mm && Number.isFinite(mm) && mm > 0 ? mm : Tm
    }

    function Om(mm, Tm) {
      const fm = om(mm.size, 1);
      let hm = om(mm.width, om(2.5 * fm, 2.5)),
        Am = om(mm.height, om(3.75 * fm, 3.75));
      Number.isFinite(am * Am / hm) && Number.isFinite(xm * hm / Am) || (hm = 2.5, Am = 3.75);
      const wm = Am / hm,
        Dm = Math.max(1, Math.min(am, Tm / wm));
      return {
        width: hm,
        height: Am,
        layoutWidth: Math.max(am, xm / wm),
        layoutHeight: Math.max(xm, am * wm),
        pixelWidth: Math.round(Dm),
        pixelHeight: Math.round(Math.max(1, Math.min(Tm, Dm * wm)))
      }
    }

    function Ym(mm, Tm, fm, xm, Rm, pm) {
      mm.setTransform(1, 0, 0, 1, 0, 0), mm.fillStyle = Am.J.defaultNameTagBackground, mm.fillRect(0, 0, Tm, fm), mm.scale(Tm / xm.layoutWidth, fm / xm.layoutHeight), mm.translate((xm.layoutWidth - am) / 2, 0),
        function(mm, Tm, fm, am) {
          var xm, Rm, pm, Em;
          const {
            top: om,
            around: Om,
            showPlayerText: Ym,
            localPlayerDbId: Vm
          } = fm, {
            whiteUiText: Im,
            grayUiText: Km,
            yellowUiText: Qm
          } = Am.J;
          mm.textBaseline = "middle";
          const nm = function(Tm, fm, hm, Am, am, xm) {
              let wm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              mm.font = `bold ${Am}px 'Jetbrains Mono', monospace`, mm.fillStyle = am, mm.textAlign = wm;
              let Dm = Tm.replace(/[\r\n\t]/g, " ");
              if (mm.measureText(Dm).width > xm) {
                for (; Dm.length > 0 && mm.measureText(`${Dm}\u2026`).width > xm;) Dm = Dm.slice(0, -1);
                Dm += "\u2026"
              }
              mm.fillText(Dm, fm, hm)
            },
            Jm = Tm => {
              mm.fillStyle = Im, mm.globalAlpha = .15, mm.fillRect(24, Tm, 976, 2), mm.globalAlpha = 1
            },
            cm = null === Vm ? null : (0, Am.jc)(Vm),
            zm = mm => null !== cm && mm.playerHash === cm,
            Zm = qm(om.entries, hm.r),
            km = "ready" === om.status && Zm.length > 0,
            bm = null === Om ? [] : qm(Om.entries, wm),
            Sm = Zm.some(zm),
            em = null === Om ? null : function(mm) {
              const Tm = mm;
              if (!Tm || !Number.isFinite(Tm.rank) || !Number.isFinite(Tm.tied) || !Number.isFinite(Tm.total)) return null;
              return Tm
            }(Om.standing),
            Nm = bm.find(zm),
            Gm = Zm.find(zm),
            Xm = null === em || void 0 === Nm ? null : {
              value: Nm.value,
              rank: em.rank
            },
            Pm = jm(Zm, void 0 === Gm || Gm.value === (null === Xm || void 0 === Xm ? void 0 : Xm.value) ? Xm : null),
            Hm = jm(bm, Xm),
            ym = (mm, Tm) => {
              const fm = mm.findIndex(zm);
              return fm >= 0 ? Tm[fm] : null
            },
            Cm = null !== (xm = null !== (Rm = null === em || void 0 === em ? void 0 : em.rank) && void 0 !== Rm ? Rm : ym(bm, Hm)) && void 0 !== xm ? xm : ym(Zm, Pm);
          mm.font = "bold 34px 'Jetbrains Mono', monospace";
          const rm = [...km ? Pm : [], ...Sm ? [] : Hm],
            sm = Math.min(280, Math.max(0, ...rm.map((Tm => mm.measureText(Dm.format(Tm)).width)))),
            lm = sm <= 80,
            Mm = lm ? 80 : 32 + sm,
            um = lm ? 148 : Mm + 28,
            Bm = 660 - um;
          nm(`TOP ${hm.r}  /  ALL TIME`, 24, 52, 28, Km, 976), nm(Ym ? String(null !== (pm = Tm.title) && void 0 !== pm ? pm : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Im, 976), nm("RANK", 32, 174, 28, Km, um - 40), nm("PLAYER", um, 174, 28, Km, Bm), nm(Ym ? String(null !== (Em = Tm.scoreLabel) && void 0 !== Em ? Em : "Score").slice(0, 24) : "Score", 992, 174, 28, Km, 304, "right"), Jm(202);
          const Lm = (am - 232) / (hm.r + im + wm),
            tm = 208 + hm.r * Lm,
            Um = tm + im * Lm,
            dm = (Tm, fm, hm, Am) => {
              const am = zm(Tm);
              mm.fillStyle = am ? Qm : Im, mm.globalAlpha = am ? .15 : Am ? .035 : 0, mm.fillRect(24, hm - Lm / 2 + 1, 976, Lm - 2), mm.globalAlpha = 1;
              const xm = am ? Qm : Im;
              nm(Dm.format(fm), Mm, hm, 34, xm, lm ? 80 : sm, lm ? "center" : "right"), nm(Ym ? String(Tm.name).slice(0, 64) : "Player", um, hm, 34, xm, Bm);
              const wm = Dm.format(Tm.value);
              nm(mm.measureText(wm).width > 304 ? Tm.value.toExponential(6) : wm, 992, hm, 34, xm, 304, "right")
            };
          if (km)
            for (const [hm, Am] of Zm.entries()) dm(Am, Pm[hm], 208 + (hm + .5) * Lm, hm % 2 === 0);
          else {
            const mm = "error" === om.status,
              Tm = mm ? "Couldn't load leaderboard" : "ready" === om.status ? "No scores yet" : "Loading leaderboard\u2026",
              fm = mm ? "Trying again shortly" : "ready" === om.status ? "Be the first on the board!" : "Fetching the top players",
              hm = (208 + tm) / 2;
            nm(Tm, 512, hm - 28, 40, mm ? Am.J.redUiText : Im, 960, "center"), nm(fm, 512, hm + 27, 30, Km, 960, "center")
          }
          const gm = tm + im * Lm / 2;
          if (null === Cm) Jm(gm);
          else {
            const Tm = null === em ? 0 : em.tied - 1,
              fm = `YOUR RANK #${Dm.format(Cm)}${null===em?"":` of ${Dm.format(em.total)}`}`;
            mm.font = "bold 36px 'Jetbrains Mono', monospace";
            const hm = Math.max(20, Math.min(36, Math.floor(34560 / mm.measureText(fm).width)));
            nm(fm, 512, gm - (Tm > 0 ? 15 : 0), hm, Qm, 960, "center"), Tm > 0 && nm(`Tied with ${Dm.format(Tm)} other${1===Tm?"":"s"}`, 512, gm + 24, 24, Km, 960, "center")
          }
          if (null === Om) return;
          const Wm = Um + wm * Lm / 2;
          if (Sm) nm(`You're in the top ${hm.r}!`, 512, Wm, 40, Qm, 960, "center");
          else if (0 === bm.length) nm("You're not on this board yet", 512, Wm, 34, Km, 960, "center");
          else
            for (const [hm, Am] of bm.entries()) dm(Am, Hm[hm], Um + (hm + .5) * Lm, hm % 2 === 0)
        }(mm, Rm, pm, xm.layoutHeight)
    }

    function qm(mm, Tm) {
      return Array.isArray(mm) ? mm.slice(0, Tm).filter((mm => mm && Number.isFinite(mm.rank) && Number.isFinite(mm.value))) : []
    }

    function jm(mm, Tm) {
      const fm = [];
      let hm = !1;
      return mm.forEach(((Am, am) => {
        if (null !== Tm && Am.value === Tm.value) return void fm.push(Tm.rank);
        const xm = am > 0 && Am.value === mm[am - 1].value;
        xm || (hm = 0 === am && 1 !== Am.rank), fm.push(xm && !hm ? fm[am - 1] : Am.rank)
      })), fm
    }
  },
  38972: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => am
    });
    const hm = 32;

    function Am(mm) {
      return Array.from(mm).length
    }

    function am(mm) {
      const Tm = [""];
      let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Am = "";
      const am = () => {
        Tm.push(""), fm = 0, Am = ""
      };
      for (const xm of mm.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(xm)) am();
        else if (/^\s+$/.test(xm)) Am += xm;
      else if (xm.length > 0) {
        const mm = Array.from(xm);
        fm > 0 && fm + Am.length + mm.length > hm && am(), Tm[Tm.length - 1] += Am, fm += Am.length, Am = "";
        for (const Am of mm) fm >= hm && am(), Tm[Tm.length - 1] += Am, fm++
      }
      return Tm[Tm.length - 1] += Am, Tm
    }
  },
  39249: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(36717),
      Am = fm.n(hm);
    const am = [1, 1, 1];

    function xm(mm) {
      if (!mm) return [...am];
      try {
        const [Tm, fm, hm] = Am()(mm).rgb().array();
        return [Tm / 255, fm / 255, hm / 255]
      } catch (Tm) {
        return console.warn(`Invalid groundArrowPath colour "${mm}":`, Tm), [...am]
      }
    }
  },
  39345: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => wm,
      f: () => im,
      j: () => Dm
    });
    var hm = fm(313),
      Am = fm(2898);
    const am = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      xm = 512;

    function wm(mm) {
      var Tm;
      const fm = Math.min(screen.width, screen.height) * (null !== (Tm = (0, hm.c)()) && void 0 !== Tm ? Tm : (0, Am.r)());
      return Math.max(window.innerHeight * (0, Am.r)(), fm) / (0, Am.v)(mm)
    }

    function Dm(mm, Tm, fm) {
      return Tm / (2 * Math.tan(fm / 2)) > xm ? mm : im(mm)
    }

    function im(mm) {
      return mm.map((mm => mm.replace(am, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  34122: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am,
      i: () => wm,
      m: () => xm,
      p: () => Am,
      t: () => hm
    });
    const hm = {
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
      Am = "/textures/dayNight/sun.png",
      am = "/textures/dayNight/moon.png",
      xm = "/textures/dayNight/stars",
      wm = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39323: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm,
      i: () => pm,
      j: () => hm,
      k: () => Dm,
      n: () => Am,
      o: () => im,
      p: () => wm,
      t: () => xm
    });
    const hm = ["linear", "easeIn", "easeOut", "easeInOut"],
      Am = ["movement", "camera", "cursor"],
      am = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function xm(mm, Tm) {
      return wm(mm, Tm, am)
    }

    function wm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (mm === Tm || Number.isNaN(mm) && Number.isNaN(Tm)) return !0;
      if ("object" !== typeof mm || "object" !== typeof Tm || null === mm || null === Tm || Array.isArray(mm) !== Array.isArray(Tm)) return !1;
      const hm = mm,
        Am = Tm;
      for (const am of new Set([...Object.keys(hm), ...Object.keys(Am)]))
        if (!fm.includes(am) && !wm(hm[am], Am[am])) return !1;
      return !0
    }
    const Dm = {
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
      im = "^-[1-9][0-9]*$",
      Rm = "^#[0-9a-fA-F]{6}$",
      pm = "#000000"
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);