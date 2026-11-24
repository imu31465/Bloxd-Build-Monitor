export const id = 17;
export const ids = [17];
export const modules = {
  36681: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => om,
      e: () => Om,
      f: () => Em,
      i: () => pm
    });
    var hm = fm(34283),
      Am = fm(36686),
      am = fm(36689),
      xm = fm(8654),
      wm = fm(1449),
      Dm = fm(59),
      im = fm(77),
      Rm = fm(1135);

    function pm() {
      var mm;
      return (0, wm.i)(Am.e, (0, Am.p)()), (0, Rm.jsx)(Rm.Fragment, {
        children: null === (mm = (0, Am.p)()) || void 0 === mm ? void 0 : mm.content
      })
    }

    function Em(mm) {
      var Tm;
      let {
        show: fm
      } = mm;
      (0, wm.i)(Am.e, (0, Am.p)());
      const im = null === (Tm = (0, Am.p)()) || void 0 === Tm ? void 0 : Tm.menu;
      return (0, Dm.useEffect)((() => {
        var mm;
        fm || (null === im || void 0 === im || null === (mm = im.onClose) || void 0 === mm || mm.call(im), (0, am.m)())
      }), [fm, im]), (0, Dm.useEffect)((() => fm ? (0, xm.h)(am.u, am.d) : void 0), [fm]), (0, Rm.jsx)(hm.c, {
        showing: fm,
        globallyUniqueKey: "clientGameMenu",
        children: null === im || void 0 === im ? void 0 : im.content
      })
    }

    function om(mm) {
      let {
        placement: Tm = "bottom"
      } = mm;
      return (0, Rm.jsx)("div", {
        id: `clientGameHud-${Tm}`,
        style: {
          display: "contents"
        }
      })
    }

    function Om(mm) {
      let {
        children: Tm,
        placement: fm = "bottom"
      } = mm;
      const [hm, Am] = (0, Dm.useState)(null);
      return (0, Dm.useEffect)((() => {
        Am(document.getElementById(`clientGameHud-${fm}`))
      }), [fm]), hm ? (0, im.createPortal)(Tm, hm) : null
    }
  },
  34283: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(4477),
      Am = fm(4481);

    function am(mm) {
      let {
        children: Tm,
        showing: fm,
        globallyUniqueKey: am,
        alwaysMountChildren: xm = !1,
        doGameplayStartStopOnShow: wm = !0,
        keepsMovement: Dm = !1
      } = mm;
      return (0, Am.d)(!0, fm, am, Dm), (0, hm.c)(wm, fm), fm || xm ? Tm : null
    }
  },
  36777: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am,
      c: () => xm,
      e: () => wm,
      h: () => Dm
    });
    var hm = fm(59),
      Am = fm(3112);
    const am = 8,
      xm = "InGameHeaderContainer",
      wm = "TopRightElements";

    function Dm(mm) {
      const [Tm] = (0, Am.c)(), [fm, Dm] = (0, hm.useState)(!1);
      return (0, hm.useLayoutEffect)((() => {
        if (!mm) return;
        const Tm = document.querySelector(`.${xm}`),
          fm = document.querySelector(`.${wm}`),
          hm = () => {
            const hm = mm.getBoundingClientRect(),
              Am = Tm ? Tm.getBoundingClientRect().right : 0,
              xm = fm ? fm.getBoundingClientRect().left : window.innerWidth,
              wm = hm.left < Am + am,
              im = hm.right > xm - am;
            Dm(wm || im)
          };
        hm();
        const Am = new ResizeObserver(hm);
        return Am.observe(mm), Tm && Am.observe(Tm), fm && Am.observe(fm), () => {
          Am.disconnect()
        }
      }), [mm, Tm]), fm
    }
  },
  36775: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am
    });
    const hm = [{
      maxDist: 30,
      timeBetweenSoftChecks: 1e3,
      softUpdateDist: 2,
      hardUpdateDist: 10
    }, {
      maxDist: 200,
      timeBetweenSoftChecks: 2e3,
      softUpdateDist: 5,
      hardUpdateDist: 20
    }, {
      maxDist: 1 / 0,
      timeBetweenSoftChecks: 5e3,
      softUpdateDist: 30,
      hardUpdateDist: 100
    }];

    function Am(mm, Tm, fm) {
      const Am = Math.abs(mm - Tm),
        am = Date.now() - fm;
      for (const xm of hm)
        if (mm < xm.maxDist) return Am >= xm.hardUpdateDist || am > xm.timeBetweenSoftChecks && Am >= xm.softUpdateDist;
      return !1
    }
  },
  8654: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      h: () => Am
    });
    let hm = null;
    const Am = function(mm) {
        const Tm = {
          cycle: mm,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return hm = Tm, () => {
          hm === Tm && (hm = null)
        }
      },
      am = () => {
        var mm;
        return null !== (mm = hm) && void 0 !== mm && mm.canCycle() ? hm.cycle : null
      }
  },
  38628: (mm, Tm, fm) => {
    function hm(mm, Tm, fm) {
      var hm;
      const {
        width: Am,
        height: am
      } = fm, xm = null !== (hm = mm.text) && void 0 !== hm ? hm : mm, wm = (xm.x / 100 - .5) * Am, Dm = (xm.y / 100 - .5) * am, im = Am / 2 - Tm.x;
      if (null !== mm.text && Math.abs(wm) <= im && Dm >= Tm.top - am / 2 && Dm <= am / 2 - Tm.bottom) return {
        x: xm.x,
        y: xm.y
      };
      const Rm = Math.min(0 === wm ? 1 / 0 : im / Math.abs(wm), Dm > 0 ? (am / 2 - Tm.bottom) / Dm : Dm < 0 ? (Tm.top - am / 2) / Dm : 1 / 0);
      return !Number.isFinite(Rm) || Rm < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + wm * Rm / Am * 100,
        y: 50 + Dm * Rm / am * 100
      }
    }
    fm.d(Tm, {
      d: () => hm
    })
  },
  36689: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => Ym,
      e: () => qm,
      h: () => wm,
      i: () => Em,
      m: () => jm,
      p: () => pm,
      r: () => Im,
      u: () => Om,
      v: () => Vm
    });
    var hm = fm(23),
      Am = fm(31);
    const am = "clientGameInventoryButtonsChanged",
      xm = new Map;

    function wm() {
      return [...xm.values()].sort(((mm, Tm) => {
        var fm, hm;
        return (null !== (fm = mm.order) && void 0 !== fm ? fm : 0) - (null !== (hm = Tm.order) && void 0 !== hm ? hm : 0)
      }))
    }
    let Dm = null;

    function im(mm) {
      Dm = mm
    }
    let Rm = !1;

    function pm(mm) {
      Rm = !0;
      try {
        mm.onClick()
      } finally {
        Rm = !1
      }
      mm.panel && "clientGame" === hm.c.get("openInGameMenuName") && im(mm.id)
    }

    function Em() {
      return Rm
    }

    function om() {
      return wm().filter((mm => mm.panel && !mm.disabled))
    }

    function Om(mm) {
      const Tm = om(),
        fm = Tm.findIndex((mm => mm.id === Dm));
      return !(fm < 0 || Tm.length < 2) && (pm(Tm[(fm + mm + Tm.length) % Tm.length]), !0)
    }

    function Ym() {
      return null !== Dm && om().length > 1
    }

    function qm() {
      im(null)
    }

    function jm() {
      "inventory" !== hm.c.get("openInGameMenuName") && im(null)
    }

    function Vm() {
      const mm = Dm;
      return im(null), mm
    }

    function Im(mm) {
      return xm.set(mm.id, mm), Am.j.gp(am, wm(), !0), () => {
        xm.get(mm.id) === mm && (xm.delete(mm.id), Am.j.gp(am, wm()))
      }
    }
  },
  36686: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm,
      h: () => qm,
      j: () => jm,
      m: () => Em,
      p: () => im,
      s: () => Ym,
      u: () => om,
      w: () => Rm
    });
    var hm = fm(23),
      Am = fm(31),
      am = fm(1286),
      xm = fm(36689);
    const wm = "clientGameUiChanged";
    let Dm = null;

    function im() {
      return Dm
    }

    function Rm(mm, Tm) {
      const fm = {
        content: mm,
        menu: Tm
      };
      return Dm = fm, Am.j.gp(wm, Dm, !0), () => {
        Dm === fm && (Dm = null, Om = !1, qm(), Am.j.gp(wm, null))
      }
    }
    let pm = null;

    function Em() {
      return pm
    }

    function om(mm) {
      return pm = mm, () => {
        pm === mm && (pm = null)
      }
    }
    let Om = !1;

    function Ym() {
      const mm = hm.c.get("openInGameMenuName");
      "clientGame" !== mm && (Om = "inventory" === mm), (0, xm.i)() || (0, xm.e)(), (0, am.p)(am.c), hm.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qm() {
      Vm(!1)
    }

    function jm() {
      Vm(Om)
    }

    function Vm(mm) {
      "clientGame" === hm.c.get("openInGameMenuName") && hm.c.set({
        openInGameMenuName: mm ? "inventory" : null
      }), mm || (0, xm.e)(), Om = !1
    }
  },
  39564: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => jT
    });
    const hm = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var Am = fm(59),
      am = fm(36686),
      xm = fm(37131),
      wm = fm(36705),
      Dm = fm(1713),
      im = fm(31);
    const Rm = {
      M1911: "pistol",
      Deagle: "pistol",
      "Block-19": "pistol",
      "AK-47": "rifle",
      M16: "rifle",
      "TAR-21": "rifle",
      SKAR: "rifle",
      FMR: "rifle",
      MP40: "smg",
      "Mini Izu": "smg",
      "Double Barrel": "shotgun",
      "Striker-12": "shotgun",
      DMR: "marksman",
      VSR: "marksman",
      GPMG: "machineGun",
      Minigun: "machineGun",
      RPG: "launcher",
      "Moonstone Dagger": "melee",
      "Moonstone Boomerang": "melee",
      "Frag Grenade": "throwable",
      "Smoke Grenade": "throwable",
      "Mining Grenade": "throwable",
      "Splash Instant Healing Potion": "throwable",
      Snowdash: "throwable"
    };
    const pm = 32;

    function Em(mm, Tm, fm, hm) {
      return {
        tag: "line",
        attrs: {
          x1: mm,
          y1: Tm,
          x2: fm,
          y2: hm,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function om(mm) {
      return {
        tag: "circle",
        attrs: {
          cx: pm,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pm,
          r: mm,
          class: "Fill"
        }
      }
    }

    function Om(mm, Tm) {
      return {
        tag: "path",
        attrs: {
          d: mm,
          "stroke-width": Tm
        }
      }
    }

    function Ym(mm, Tm, fm) {
      return {
        tag: "circle",
        attrs: {
          cx: pm,
          cy: pm,
          r: mm,
          "stroke-width": Tm,
          class: fm
        }
      }
    }

    function qm(mm, Tm, fm) {
      return {
        tag: "text",
        attrs: {
          x: mm,
          y: Tm,
          class: "Fill Label"
        },
        text: fm
      }
    }
    const jm = {
      pistol: mm => [Em(pm, pm - mm - 5, pm, pm - mm), Em(pm - mm - 5, pm, pm - mm, pm), Em(pm + mm, pm, pm + mm + 5, pm), om(1.4)],
      rifle: mm => [Em(pm, pm - mm - 8, pm, pm - mm), Em(pm, pm + mm, pm, pm + mm + 8), Em(pm - mm - 8, pm, pm - mm, pm), Em(pm + mm, pm, pm + mm + 8, pm), om(1)],
      smg: mm => {
        const Tm = Math.PI / 2,
          fm = [];
        for (let xm = 0; xm < 4; xm++) fm.push((Am = xm * Tm + .35, am = (xm + 1) * Tm - .35, Om(`M${pm+(hm=6+mm)*Math.cos(Am)} ${pm+hm*Math.sin(Am)} A${hm} ${hm} 0 0 1 ${pm+hm*Math.cos(am)} ${pm+hm*Math.sin(am)}`, 2)));
        var hm, Am, am;
        return [...fm, om(1.4)]
      },
      shotgun: mm => [Ym(mm, 3, "Ring Outline"), Ym(mm, 1.5, "Ring")],
      marksman: mm => [Om(`M${26-mm/2} ${39+mm/2} L32 33 L${38+mm/2} ${39+mm/2}`, 2), Em(14 - mm, pm, 24 - mm, pm, 1.5), Em(40 + mm, pm, 50 + mm, pm, 1.5), Em(14 - mm, 30, 14 - mm, 34, 1.5), Em(50 + mm, 30, 50 + mm, 34, 1.5)],
      machineGun: mm => {
        const Tm = 10 + mm,
          fm = [];
        for (const [hm, Am] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) fm.push(Om(`M${pm+hm*Tm} ${pm+Am*(Tm-5)} L${pm+hm*Tm} ${pm+Am*Tm} L${pm+hm*(Tm-5)} ${pm+Am*Tm}`, 2));
        return [...fm, Em(pm, 28, pm, 36, 1.5), Em(28, pm, 36, pm, 1.5)]
      },
      launcher: () => [Em(14, 30, 50, 30, 1.5), Em(pm, 24, pm, 52, 1.5), Em(28, 38, 36, 38, 1.5), Em(29, 44, 35, 44, 1.5), Em(30, 50, 34, 50, 1.5), qm(38, 40, "100"), qm(37, 46, "200"), om(1.4, 30)],
      melee: () => [Om("M32 26 L38 32 L32 38 L26 32 Z", 1.5), om(1.2)],
      throwable: () => [om(1.6)]
    };

    function Vm(mm) {
      let {
        tag: Tm,
        attrs: fm,
        text: hm
      } = mm, Am = `<${Tm}`;
      for (const [am, xm] of Object.entries(fm)) Am += ` ${am}="${xm}"`;
      return void 0 === hm ? `${Am}/>` : `${Am}>${hm}</${Tm}>`
    }
    class Im {
      constructor(mm, Tm) {
        this.api = mm, this.localPlayerId = Tm, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = mm => {
          this.element = mm, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, mm && !this.enabled && (mm.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Dm.getRemInPx)()))
        }, this.tokens = [im.j.subscribe("aimingOverlay", (mm => {
          this.sniperOverlay = "sniper" === mm
        })), im.j.subscribe("mouseState", (mm => {
          let {
            isDown: Tm
          } = mm;
          this.mouseDown = Tm
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Dk(mm) {
        mm !== this.enabled && (this.enabled = mm, this.drawnVisible = null, mm || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(mm, Tm) {
        var fm, hm;
        if (!this.enabled) return;
        const {
          api: Am
        } = this, am = Am.isAlive(this.localPlayerId) && null !== (fm = null === (hm = Am.MTm(this.localPlayerId)) || void 0 === hm ? void 0 : hm.name) && void 0 !== fm ? fm : null, xm = (wm = am) && Rm[wm] || null;
        var wm;
        if (this.setOwnsCrosshair(null !== xm), !this.element) return;
        const Dm = Am.getHeldGunInaccuracy(),
          im = null !== Dm,
          pm = null !== xm && !this.sniperOverlay && Am.isCrosshairShown();
        if (pm !== this.drawnVisible && (this.drawnVisible = pm, this.element.style.display = pm ? "block" : "none"), !pm) return;
        const Em = im ? function(mm) {
            return "launcher" === mm || "melee" === mm || "throwable" === mm ? "none" : "shotgun" === mm ? "cone" : "offset"
          }(xm) : "none",
          om = null !== Dm && void 0 !== Dm ? Dm : 0;
        "cone" === Em ? this.drawCone(xm, this.coneRadiusVh(om, Tm) * this.gapPerVh, mm) : (this.coneDrawn = !1, this.draw(xm, "none" === Em ? 2 : this.offsetGap(om)));
        const Om = !im && this.mouseDown;
        Om !== this.drawnPressed && (this.drawnPressed = Om, this.element.classList.toggle("Pressed", Om))
      }
      dispose() {
        for (const mm of this.tokens) im.j.unsubscribe(mm);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(mm, Tm) {
        var fm, hm;
        mm !== this.drawnFamily ? (this.drawnFamily = mm, this.drawnGap = Tm, this.element.innerHTML = function(mm, Tm) {
          return `<svg viewBox="0 0 64 64">${jm[mm](Tm).map(Vm).join("")}</svg>`
        }(mm, Tm), this.shapes = Array.from(null !== (fm = null === (hm = this.element.firstElementChild) || void 0 === hm ? void 0 : hm.children) && void 0 !== fm ? fm : [])) : Tm !== this.drawnGap && (this.drawnGap = Tm, function(mm, Tm, fm) {
          const hm = jm[Tm](fm);
          for (let Am = 0; Am < hm.length; Am++)
            for (const [Tm, fm] of Object.entries(hm[Am].attrs)) {
              const hm = String(fm);
              mm[Am].getAttribute(Tm) !== hm && mm[Am].setAttribute(Tm, hm)
            }
        }(this.shapes, mm, Tm))
      }
      drawCone(mm, Tm, fm) {
        mm === this.drawnFamily && this.coneDrawn ? this.shownRadius += (Tm - this.shownRadius) * (1 - Math.exp(-fm / 80)) : this.shownRadius = Tm, this.coneDrawn = !0, this.draw(mm, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(mm, Tm) {
        if (!(Tm > 0)) return 1;
        const fm = mm * xm.j / 2;
        return Math.max(50 * Math.tan(fm) / Tm, 1)
      }
      offsetGap(mm) {
        const Tm = 2 + ((0, wm.g)(mm) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * Tm) / 2)
      }
      setOwnsCrosshair(mm) {
        mm !== this.ownsCrosshair && (this.ownsCrosshair = mm, document.body.classList.toggle("FrontlineCustomCrosshair", mm))
      }
    }
    const Km = "FrontlineCustomDamage",
      Qm = .45,
      nm = .2;
    class Jm {
      constructor(mm, Tm) {
        this.api = mm, this.localPlayerId = Tm, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.Ma = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = mm => {
          var Tm, fm;
          this.clearHits(), this.root = mm, this.lowLayer = null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.querySelector(".FrontlineDamageLow")) && void 0 !== Tm ? Tm : null, this.arcLayer = null !== (fm = null === mm || void 0 === mm ? void 0 : mm.querySelector(".FrontlineDamageArcs")) && void 0 !== fm ? fm : null, this.showRoot(), this.drawLow()
        }, this.token = im.j.subscribe("damagedByOtherPlayer", (mm => {
          let {
            direction: Tm,
            sa: fm
          } = mm;
          this.onHurt(Tm, fm)
        })), this.syncHealth(), document.body.classList.add(Km)
      }
      Dk(mm) {
        mm !== this.enabled && (this.enabled = mm, document.body.classList.toggle(Km, mm), mm || this.clearHits(), this.showRoot())
      }
      frame(mm) {
        this.syncHealth(), this.cameraHeading = mm;
        for (const Tm of this.arcs) this.drawArcAngle(Tm)
      }
      dispose() {
        im.j.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Km)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const mm = this.api.getClientOption(this.localPlayerId, "_health"),
          Tm = this.api.getClientOption(this.localPlayerId, "_shield"),
          fm = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(mm, this.readHealth) && Object.is(Tm, this.readShield) && Object.is(fm, this.readMaxHealth)) return;
        if (this.readHealth = mm, this.readShield = Tm, this.readMaxHealth = fm, null === mm || void 0 === mm || !fm) return this.lastHealthPool = null, this.maxHealth = null, this.Ma = 1, this.dead = !1, void this.drawLow();
        const hm = mm + (null !== Tm && void 0 !== Tm ? Tm : 0);
        if (null !== this.lastHealthPool && hm < this.lastHealthPool) {
          const mm = performance.now(),
            Tm = (this.lastHealthPool - hm) / fm;
          this.lastDrop = mm - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Tm,
            at: this.lastDrop.at
          } : {
            frac: Tm,
            at: mm
          }
        }
        this.dead = mm <= 0, this.dead && this.clearHits(), this.lastHealthPool = hm, this.maxHealth = fm, this.Ma = mm > 0 ? mm / fm : 1, this.drawLow()
      }
      onHurt(mm, Tm) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const fm = Math.min(1, this.takeDamageFrac(Tm) / .3);
        null !== mm && this.showArc(mm, fm), this.flashEdge(null === mm ? null : mm - this.cameraHeading, .4 + .6 * fm)
      }
      takeDamageFrac(mm) {
        if (void 0 !== mm && this.maxHealth) return mm / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: Tm
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, Tm
      }
      drawLow() {
        if (!this.lowLayer) return;
        const mm = zm((Qm - this.Ma) / .25),
          Tm = zm((nm - this.Ma) / .15000000000000002),
          fm = this.Ma < Qm;
        this.lowLayer.classList.toggle("Active", fm), this.lowLayer.classList.toggle("Critical", this.Ma < nm), this.lowLayer.style.opacity = String(fm ? .55 + .3 * mm + .15 * Tm : 0)
      }
      showArc(mm, Tm) {
        var fm, hm;
        if (!this.arcLayer) return;
        let Am = this.arcs.find((Tm => cm(Tm.direction, mm) < .6));
        if (!Am) {
          const Tm = document.createElement("div");
          Tm.className = "FrontlineDamageArc", Tm.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(Tm), Am = {
            element: Tm,
            direction: mm,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Am)
        }
        Am.direction = mm, this.drawArcAngle(Am);
        const am = Am.fade ? Number(getComputedStyle(Am.element).opacity) : 0;
        null === (fm = Am.fade) || void 0 === fm || fm.cancel(), null === (hm = Am.pop) || void 0 === hm || hm.cancel(), Am.element.style.opacity = "1";
        const xm = Am.element.animate([{
          opacity: am
        }, {
          opacity: 1
        }], 144);
        Am.fade = xm, Am.pop = Am.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Tm
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const wm = Am;
        xm.onfinish = () => {
          if (wm.fade !== xm) return;
          const mm = wm.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          mm.startTime = xm.startTime, wm.fade = mm, mm.onfinish = () => {
            wm.fade === mm && (wm.element.remove(), Zm(this.arcs, wm))
          }
        }
      }
      drawArcAngle(mm) {
        const Tm = mm.direction - this.cameraHeading;
        (null === mm.drawnAngle || Math.abs(Tm - mm.drawnAngle) > .005) && (mm.drawnAngle = Tm, mm.element.style.rotate = `${Tm}rad`)
      }
      flashEdge(mm, Tm) {
        var fm, hm, Am;
        if (!this.root) return;
        let am = this.flashes.find((Tm => null === Tm.angle || null === mm ? Tm.angle === mm : cm(Tm.angle, mm) < .5));
        if (!am) {
          const Tm = document.createElement("div");
          Tm.className = "FrontlineDamageFlash";
          const fm = Tm.appendChild(document.createElement("div"));
          fm.className = "FrontlineDamageFlashGlow", this.root.insertBefore(Tm, this.arcLayer), am = {
            element: Tm,
            glow: fm,
            angle: mm,
            level: 0,
            animation: null
          }, this.flashes.push(am)
        }
        const xm = null === (fm = am.animation) || void 0 === fm || null === (hm = fm.effect) || void 0 === hm ? void 0 : hm.getComputedTiming().progress,
          wm = null === xm || void 0 === xm ? 0 : am.level * (1 - xm);
        am.level = Math.min(1, Math.max(Tm, wm + .6 * Tm)), am.angle = mm;
        const {
          x: Dm,
          y: im,
          rx: Rm,
          ry: pm
        } = function(mm, Tm) {
          const fm = window.innerWidth,
            hm = window.innerHeight;
          if (null === mm) return {
            x: fm / 2,
            y: hm / 2,
            rx: 0,
            ry: 0
          };
          const Am = Math.sin(mm),
            am = -Math.cos(mm),
            xm = fm / 2 / Math.max(1e-6, Math.abs(Am)),
            wm = hm / 2 / Math.max(1e-6, Math.abs(am)),
            Dm = Math.min(xm, wm),
            im = Math.round(fm / 2 + Am * Dm),
            Rm = Math.round(hm / 2 + am * Dm),
            pm = hm / 100 * (.85 + .25 * Tm),
            Em = xm <= wm,
            om = Math.round((Em ? 30 : 74) * pm),
            Om = Math.round((Em ? 58 : 26) * pm);
          return {
            x: im,
            y: Rm,
            rx: om,
            ry: Om
          }
        }(mm, am.level), {
          style: Em
        } = am.glow;
        am.glow.classList.toggle("Everywhere", null === mm), Em.setProperty("--glowX", `${Dm}px`), Em.setProperty("--glowY", `${im}px`), Em.setProperty("--glowRx", `${Rm}px`), Em.setProperty("--glowRy", `${pm}px`), am.element.style.transformOrigin = `${Dm}px ${im}px`, null === (Am = am.animation) || void 0 === Am || Am.cancel();
        const om = am.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: am.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * am.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * am.level
        });
        am.animation = om;
        const Om = am;
        om.onfinish = () => {
          Om.animation === om && (Om.element.remove(), Zm(this.flashes, Om))
        }
      }
      clearHits() {
        for (const hm of this.arcs) {
          var mm, Tm;
          null === (mm = hm.fade) || void 0 === mm || mm.cancel(), hm.fade = null, null === (Tm = hm.pop) || void 0 === Tm || Tm.cancel(), hm.element.remove()
        }
        this.arcs.length = 0;
        for (const hm of this.flashes) {
          var fm;
          null === (fm = hm.animation) || void 0 === fm || fm.cancel(), hm.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function cm(mm, Tm) {
      return Math.abs(Math.atan2(Math.sin(mm - Tm), Math.cos(mm - Tm)))
    }

    function zm(mm) {
      return Math.max(0, Math.min(1, mm))
    }

    function Zm(mm, Tm) {
      const fm = mm.indexOf(Tm); - 1 !== fm && mm.splice(fm, 1)
    }
    var km = fm(1080),
      bm = fm.n(km),
      Sm = fm(36681),
      em = fm(36777),
      Nm = fm(1208),
      Gm = fm(1449);
    const Xm = "frontlineHudChanged",
      Pm = "frontlineScoreboardChanged";
    class Hm {
      constructor() {
        this.wire = ["none"], this.scoreboard = {
          wire: ["none"],
          endsAt: 0
        }
      }
      getWire() {
        return this.wire
      }
      getScoreboard() {
        return this.scoreboard
      }
      rO(mm) {
        this.wire = mm, im.j.gp(Xm, mm, !0)
      }
      receiveScoreboard(mm) {
        let Tm = "scoreboard" === mm[0] ? performance.now() + mm[5] : 0;
        const fm = this.scoreboard.endsAt;
        0 !== Tm && 0 !== fm && Math.abs(Tm - fm) < 1e3 && (Tm = fm), this.scoreboard = {
          wire: mm,
          endsAt: Tm
        }, im.j.gp(Pm, this.scoreboard, !0)
      }
    }
    var ym = fm(1135);
    const Cm = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function rm(mm) {
      const [Tm, fm] = (0, Am.useState)((() => (mm - performance.now()) / 1e3));
      return (0, Am.useEffect)((() => {
        if (0 === mm) return;
        const Tm = () => {
          fm((mm - performance.now()) / 1e3)
        };
        Tm();
        const hm = window.setInterval(Tm, 250);
        return () => {
          window.clearInterval(hm)
        }
      }), [mm]), Tm
    }

    function sm(mm) {
      let {
        className: Tm,
        point: fm
      } = mm;
      const [hm, Am, am, xm, wm, Dm] = fm;
      return (0, ym.jsxs)("div", {
        className: bm()(Tm, `Owner-${Am||"None"}`, `Leader-${xm||"None"}`, {
          Contested: wm,
          Here: Dm
        }),
        children: [(0, ym.jsx)("span", {
          className: "FrontlinePointLetter",
          children: hm
        }), (0, ym.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${am}%`
          }
        })]
      })
    }
    const lm = (0, Am.memo)((function(mm) {
        let {
          points: Tm,
          markers: fm
        } = mm;
        const {
          t: hm
        } = (0, Nm.A)();
        return Tm ? (0, ym.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: Tm.map((mm => {
            const [Tm, , , , , , , Am] = mm;
            return (0, ym.jsxs)("div", {
              ref: fm.bindMarker(Tm),
              className: "FrontlinePointMarker",
              children: [(0, ym.jsx)(sm, {
                className: "FrontlinePointMarkerTile",
                point: mm
              }), (0, ym.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Am && (0, ym.jsx)("span", {
                  className: bm()("FrontlinePointMarkerHomeTurf", `Team-${Am}`),
                  children: hm("frontlineHud:homeTurf", {
                    team: hm(Cm[Am])
                  })
                }), (0, ym.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, Tm)
          }))
        }) : null
      })),
      Mm = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      um = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function Bm(mm) {
      let {
        hud: Tm,
        crosshair: fm,
        damage: hm,
        markers: Am
      } = mm;
      const am = (0, Gm.i)(Xm, Tm.getWire()),
        xm = (0, Gm.i)(Pm, Tm.getScoreboard());
      return (0, ym.jsxs)(ym.Fragment, {
        children: [(0, ym.jsx)(Lm, {
          damage: hm
        }), (0, ym.jsx)(lm, {
          points: "scoreboard" === xm.wire[0] ? xm.wire[6] : null,
          markers: Am
        }), (0, ym.jsx)(Um, {
          view: xm
        }), (0, ym.jsx)("div", {
          className: "FrontlineReticle",
          ref: fm.bindElement
        }), (0, ym.jsx)(Sm.e, {
          children: (0, ym.jsx)(tm, {
            wire: am
          })
        })]
      })
    }
    const Lm = (0, Am.memo)((function(mm) {
        let {
          damage: Tm
        } = mm;
        return (0, ym.jsxs)("div", {
          className: "FrontlineDamage",
          ref: Tm.bindElement,
          children: [(0, ym.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, ym.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, ym.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      tm = (0, Am.memo)((function(mm) {
        let {
          wire: Tm
        } = mm;
        const {
          t: fm
        } = (0, Nm.A)();
        if ("capture" === Tm[0]) {
          const [, mm, hm, Am, am, xm, wm] = Tm, Dm = Math.round(Am / 100 * 24);
          return (0, ym.jsxs)("div", {
            className: bm()("FrontlinePlate", `Status-${hm}`, `Leader-${am||"None"}`),
            children: [(0, ym.jsx)(Fm, {}), (0, ym.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, ym.jsx)("span", {
                className: "FrontlineObjective",
                children: mm
              }), (0, ym.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, ym.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: fm("frontlineHud:objective", {
                    point: mm,
                    friendly: xm,
                    enemy: wm
                  })
                }), (0, ym.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: fm(Mm[hm])
                })]
              }), (0, ym.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Am).padStart(3, "0"), (0, ym.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, ym.jsx)(gm, {
              segments: 24,
              lit: Dm
            })]
          })
        }
        if ("alert" === Tm[0]) {
          const [, mm, hm, Am] = Tm;
          return (0, ym.jsxs)("div", {
            className: bm()("FrontlinePlate", "FrontlineAlert", `Tone-${Am}`),
            children: [(0, ym.jsx)(Fm, {}), (0, ym.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: fm(um[mm])
            }), (0, ym.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: hm
            })]
          })
        }
        return null
      })),
      Um = (0, Am.memo)((function(mm) {
        let {
          view: Tm
        } = mm;
        const {
          t: fm
        } = (0, Nm.A)(), hm = (0, Am.useRef)(null), am = function(mm, Tm) {
          const [fm, hm] = (0, Am.useState)(!1);
          return (0, Am.useLayoutEffect)((() => {
            const Tm = mm.current;
            if (!Tm) return;
            const fm = document.querySelector(`.${em.c}`),
              Am = document.querySelector(`.${em.e}`),
              am = () => {
                var mm;
                const am = Tm.querySelector(".FrontlineTeamTrack"),
                  xm = (0, Dm.getRemInPx)(),
                  wm = Tm.getBoundingClientRect().width - 2 * (null !== (mm = null === am || void 0 === am ? void 0 : am.getBoundingClientRect().width) && void 0 !== mm ? mm : 0),
                  im = window.innerWidth / 2,
                  Rm = fm ? fm.getBoundingClientRect().right : 0,
                  pm = Am ? Am.getBoundingClientRect().left : window.innerWidth,
                  Em = Math.min(im - Rm, pm - im) - em.b - wm / 2,
                  om = Em < 6 * xm,
                  Om = om ? (window.innerWidth - wm) / 2 - em.b : Em;
                Tm.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(Om,14*xm)))}px`), hm(om)
              };
            am();
            const xm = new ResizeObserver(am);
            for (const mm of [Tm, fm, Am]) mm && xm.observe(mm);
            return window.addEventListener("resize", am), () => {
              xm.disconnect(), window.removeEventListener("resize", am)
            }
          }), [mm, Tm]), fm
        }(hm, "scoreboard" === Tm.wire[0]);
        if ("scoreboard" !== Tm.wire[0]) return null;
        const [, xm, wm, im, Rm, , pm] = Tm.wire, Em = "Red" === xm ? "Blue" : "Red";
        return (0, ym.jsxs)("div", {
          className: bm()("FrontlineScoreboardContainer", {
            Below: am
          }),
          children: [(0, ym.jsxs)("div", {
            ref: hm,
            className: "FrontlineScoreboard",
            children: [(0, ym.jsx)(Fm, {}), (0, ym.jsx)(dm, {
              team: xm,
              tickets: wm,
              goal: Rm,
              side: "Friendly"
            }), (0, ym.jsx)("div", {
              className: "FrontlinePoints",
              children: pm.map((mm => (0, ym.jsx)(sm, {
                className: "FrontlinePoint",
                point: mm
              }, mm[0])))
            }), (0, ym.jsx)(dm, {
              team: Em,
              tickets: im,
              goal: Rm,
              side: "Enemy"
            })]
          }), (0, ym.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, ym.jsx)(Wm, {
              endsAt: Tm.endsAt
            }), (0, ym.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: fm("frontlineHud:ticketGoal", {
                goal: Rm
              })
            })]
          })]
        })
      }));

    function dm(mm) {
      let {
        team: Tm,
        tickets: fm,
        goal: hm,
        side: Am
      } = mm;
      const {
        t: am
      } = (0, Nm.A)(), xm = String(fm).padStart(3, "0"), wm = xm.search(/[1-9]/), Dm = -1 === wm ? xm : xm.slice(0, wm), im = Math.min(20, Math.floor(fm / hm * 20));
      return (0, ym.jsxs)("div", {
        className: bm()("FrontlineTeamScore", Am, `Team-${Tm}`),
        children: [(0, ym.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, ym.jsx)("span", {
            className: "Lead",
            children: Dm
          }), -1 !== wm && xm.slice(wm)]
        }), (0, ym.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, ym.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: am(Cm[Tm])
          }), (0, ym.jsx)(gm, {
            segments: 20,
            lit: im
          })]
        })]
      })
    }

    function gm(mm) {
      let {
        segments: Tm,
        lit: fm
      } = mm;
      return (0, ym.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: Tm
        }, ((mm, Tm) => (0, ym.jsx)("i", {
          className: bm()({
            Lit: Tm < fm
          })
        }, Tm)))
      })
    }

    function Wm(mm) {
      let {
        endsAt: Tm
      } = mm;
      const fm = Math.max(0, Math.ceil(rm(Tm)));
      return (0, ym.jsxs)("div", {
        className: bm()("FrontlineClock", {
          Urgent: fm <= 60
        }),
        children: [Math.floor(fm / 60), ":", String(fm % 60).padStart(2, "0")]
      })
    }

    function Fm() {
      return (0, ym.jsxs)(ym.Fragment, {
        children: [(0, ym.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, ym.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var mT = fm(36775),
      TT = fm(1259),
      fT = fm(38588),
      hT = fm(38628);
    class AT {
      constructor(mm) {
        var Tm;
        this.hud = mm, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.PO = !1, this.zV = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.zV), null === (Tm = window.visualViewport) || void 0 === Tm || Tm.addEventListener("resize", this.zV)
      }
      bindMarker(mm) {
        let Tm = this.refs.get(mm);
        return Tm || (Tm = Tm => {
          var fm;
          null === (fm = this.markers.get(mm)) || void 0 === fm || fm.stopObserving(), this.markers.delete(mm), Tm && !this.PO && this.markers.set(mm, this.mount(Tm))
        }, this.refs.set(mm, Tm)), Tm
      }
      frame(mm, Tm) {
        this.render = mm;
        const fm = this.hud.getScoreboard().wire;
        if ("scoreboard" === fm[0] && 0 !== this.markers.size)
          for (const [hm, , , , , , Am] of fm[6]) {
            const mm = this.markers.get(hm);
            mm && Am && (mm.target ??= [0, 0, 0], mm.target[0] = Am[0], mm.target[1] = Am[1] + 2.5, mm.target[2] = Am[2], this.place(mm), this.Ih(mm, Tm && Math.hypot(Am[0] - Tm[0], Am[1] - Tm[1], Am[2] - Tm[2])))
          }
      }
      dispose() {
        var mm;
        this.PO = !0, window.removeEventListener("resize", this.zV), null === (mm = window.visualViewport) || void 0 === mm || mm.removeEventListener("resize", this.zV);
        for (const Tm of this.markers.values()) Tm.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(mm) {
        const {
          render: Tm,
          viewport: fm
        } = this;
        if (!Tm || !mm.target) return;
        const hm = (50 - Tm.screenBandPct.y) / 100 * fm.height,
          Am = {
            x: mm.halfSize.width + 8,
            top: mm.halfSize.height + 8,
            bottom: mm.halfSize.height + mm.labelsBelow + hm
          },
          am = Tm.projectWorldPosToViewport(mm.target),
          xm = null !== am && void 0 !== am ? am : Tm.projectWorldPosToScreenPos(mm.target),
          wm = (0, hT.d)({
            x: xm.x,
            y: xm.y,
            text: am
          }, Am, fm);
        (0, fT.d)(mm.root, Math.round(100 * wm.x) / 100, Math.round(100 * wm.y) / 100)
      }
      Ih(mm, Tm) {
        if (null === Tm) return void(null !== mm.metres && (mm.metres = null, mm.distance.textContent = ""));
        const fm = Date.now();
        (null === mm.metres || (0, mT.b)(Tm, mm.metres, mm.metresShownAt)) && (mm.metres = Math.round(Tm), mm.metresShownAt = fm, mm.distance.textContent = (0, Nm.w)(TT.e.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(mm.metres)
        }))
      }
      mount(mm) {
        const Tm = {
            root: mm,
            distance: mm.querySelector(".FrontlinePointMarkerDistance"),
            halfSize: {
              width: 0,
              height: 0
            },
            labelsBelow: 0,
            target: null,
            metres: null,
            metresShownAt: 0,
            stopObserving: () => {}
          },
          fm = mm.querySelector(".FrontlinePointMarkerLabels"),
          hm = new ResizeObserver((() => {
            Tm.halfSize = {
              width: Math.max(mm.offsetWidth, fm.offsetWidth) / 2,
              height: mm.offsetHeight / 2
            }, Tm.labelsBelow = fm.offsetTop + fm.offsetHeight - mm.offsetHeight, this.place(Tm)
          }));
        return hm.observe(mm, {
          box: "border-box"
        }), hm.observe(fm, {
          box: "border-box"
        }), Tm.stopObserving = () => {
          hm.disconnect()
        }, Tm
      }
    }
    var aT = fm(6429),
      xT = fm(2616);
    const wT = "frontlineRoundEndChanged";
    class DT {
      constructor() {
        this.view = {
          wire: ["none"],
          key: 0,
          endsAt: 0
        }
      }
      getView() {
        return this.view
      }
      rO(mm) {
        const Tm = "roundEnd" === mm[0] ? performance.now() + mm[5] : 0;
        this.view = {
          wire: mm,
          key: this.view.key + 1,
          endsAt: Tm
        }, im.j.gp(wT, this.view, !0)
      }
    }
    const iT = (0, Am.lazy)((() => (0, xT.c)(fm.e(199).then((() => fm(41775))), (mm => mm.FrontlineMvpLineup)))),
      RT = [4800, 4e3, 3200],
      pT = [1, 0, 2],
      ET = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      oT = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function OT(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, Gm.i)(wT, Tm.getView()),
        hm = rm(fm.endsAt);
      return "roundEnd" !== fm.wire[0] || 1e3 * hm < -2e3 ? null : (0, ym.jsx)(YT, {
        wire: fm.wire,
        secondsLeft: Math.max(0, Math.ceil(hm))
      }, fm.key)
    }
    const YT = (0, Am.memo)((function(mm) {
      let {
        wire: Tm,
        secondsLeft: fm
      } = mm;
      const {
        t: am
      } = (0, Nm.A)(), [, xm, wm, Dm, im, , Rm, pm] = Tm, Em = (0, Am.useMemo)((() => pT.filter((mm => mm < pm.length))), [pm]), om = (0, Am.useMemo)((() => Em.map((mm => {
        const [, , , , , Tm, fm] = pm[mm];
        return {
          cosmetics: hm.map(((mm, fm) => [mm, Tm[fm]])),
          size: 0 === mm ? 1.15 : .85,
          heldGun: {
            name: fm,
            aimed: 0 === mm
          },
          showAfterMs: RT[mm]
        }
      }))), [pm, Em]);
      return (0, ym.jsxs)("div", {
        className: bm()("FrontlineRoundEnd", `Result-${xm}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, ym.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, ym.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, ym.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, ym.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, ym.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (Om = am(ET[xm]), /\p{Script=Arabic}/u.test(Om) ? [Om] : (0, aT.b)(Om)).map(((mm, Tm) => (0, ym.jsx)("span", {
              style: {
                "--letter": Tm
              },
              children: mm
            }, Tm)))]
          }), (0, ym.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [wm && "victory" === xm && (0, ym.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: am("frontlineRoundEnd:comeback")
            }), (0, ym.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, ym.jsx)("b", {
                className: "Friendly",
                children: Dm
              }), " \u2013 ", (0, ym.jsx)("b", {
                className: "Enemy",
                children: im
              })]
            })]
          })]
        }), Em.length > 0 && (0, ym.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Em.length
          },
          children: [(0, ym.jsx)(Am.Suspense, {
            fallback: null,
            children: (0, ym.jsx)(iT, {
              className: "FrontlineRoundEndLineup",
              players: om
            })
          }), Em.map((mm => (0, ym.jsx)(qT, {
            mvp: pm[mm],
            place: mm
          }, mm)))]
        }), (0, ym.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: am("frontlineRoundEnd:nextFront", {
            map: Rm,
            seconds: String(fm)
          })
        })]
      });
      var Om
    }));

    function qT(mm) {
      let {
        mvp: Tm,
        place: fm
      } = mm;
      const {
        t: hm
      } = (0, Nm.A)(), [Am, am, xm, wm, Dm] = Tm, [im, Rm] = hm(function(mm, Tm) {
        return 1 === Tm && "damage" !== mm ? `frontlineRoundEnd:${mm}One` : `frontlineRoundEnd:${mm}`
      }(xm, wm), {
        name: "\0",
        count: wm.toLocaleString()
      }).split("\0");
      return (0, ym.jsxs)("div", {
        className: bm()("FrontlineMvpCard", `Place-${fm+1}`, `Team-${am}`),
        style: {
          "--revealMs": `${RT[fm]}ms`
        },
        children: [(0, ym.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, ym.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, ym.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: hm(oT[fm])
        }), (0, ym.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [im, (0, ym.jsx)("span", {
            className: "FrontlineMvpName",
            children: Am
          }), Rm]
        }), (0, ym.jsx)("div", {
          className: "FrontlineMvpKit",
          children: Dm
        })]
      })
    }
    const jT = function(mm, Tm, fm, hm) {
      let {
        localPlayerId: xm
      } = hm;
      const wm = new Hm,
        Dm = new DT;
      let im = null,
        Rm = null,
        pm = null,
        Em = null,
        om = null,
        Om = [!1, !1];
      const Ym = () => {
        var mm, Tm;
        const [fm, hm] = Om;
        null === (mm = Rm) || void 0 === mm || mm.Dk(!fm), null === (Tm = pm) || void 0 === Tm || Tm.Dk(!hm)
      };
      return {
        onCreate: mm => {
          im = mm, Rm = new Im(mm, xm), pm = new Jm(mm, xm), Em = new AT(wm), Ym(), om = (0, am.w)((0, Am.createElement)(Am.Fragment, null, (0, Am.createElement)(Bm, {
            hud: wm,
            crosshair: Rm,
            damage: pm,
            markers: Em
          }), (0, Am.createElement)(OT, {
            controller: Dm
          })))
        },
        onClose: () => {
          var mm, Tm, fm, hm;
          null === (mm = om) || void 0 === mm || mm(), null === (Tm = Rm) || void 0 === Tm || Tm.dispose(), Rm = null, null === (fm = pm) || void 0 === fm || fm.dispose(), pm = null, null === (hm = Em) || void 0 === hm || hm.dispose(), Em = null, im = null
        },
        onAfterRender: (mm, Tm) => {
          var fm, hm, Am, am;
          null === (fm = Rm) || void 0 === fm || fm.frame(mm, Tm.tanHalfFovY), null === (hm = pm) || void 0 === hm || hm.frame(Tm.cameraHeading), null === (Am = Em) || void 0 === Am || Am.frame(Tm, null !== (am = im) && void 0 !== am && am.checkValid(xm) ? im.rV(xm) : null)
        },
        onReceivedMessageFromServer: (mm, Tm) => {
          "frontlineHud" === mm ? wm.rO(Tm) : "frontlineScoreboard" === mm ? wm.receiveScoreboard(Tm) : "frontlineRoundEnd" === mm ? Dm.rO(Tm) : "frontlinePrefs" === mm && (Om = Tm, Ym())
        }
      }
    }
  },
  6429: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am
    });
    const hm = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Am(mm) {
      return null === hm ? Array.from(mm) : Array.from(hm.segment(mm), (mm => {
        let {
          segment: Tm
        } = mm;
        return Tm
      }))
    }
  },
  38588: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      e: () => am
    });
    const hm = new WeakMap;

    function Am(mm) {
      let Tm = hm.get(mm);
      return Tm || (Tm = {
        hidden: mm.hidden,
        x: NaN,
        y: NaN
      }, hm.set(mm, Tm)), Tm
    }

    function am(mm, Tm) {
      const fm = Am(mm);
      fm.hidden !== Tm && (fm.hidden = Tm, mm.hidden = Tm)
    }

    function xm(mm, Tm, fm) {
      const hm = Am(mm);
      hm.x === Tm && hm.y === fm || (hm.x = Tm, hm.y = fm, mm.style.translate = `${Tm}vw ${fm}vh`)
    }
  },
  37164: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    const hm = {
      "skyblock:forged:astral-astral-astral": {
        name: "Heart of the Cosmos",
        lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
        damageMultiplier: 1.8,
        cooldownMultiplier: .8,
        ability: "starfall"
      },
      "skyblock:forged:astral-moonstone-sanguine": {
        name: "Eclipse Edge",
        lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
        damageMultiplier: 1.7,
        cooldownMultiplier: .81,
        ability: "eclipseField"
      },
      "skyblock:forged:astral-diamond-moonstone": {
        name: "Starcutter",
        lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:astral-sanguine-magmasteel": {
        name: "Triune Flame",
        lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-magmasteel-magmasteel": {
        name: "Vulcan's Bane",
        lore: "Forged in the heat of his own rift. It remembers the way down.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-astral-sanguine": {
        name: "Comet's Wake",
        lore: "It leaves a trail of fire through the air, like something falling from very far up.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:magmasteel-sanguine-astral": {
        name: "Vulcan's Ruin",
        lore: "The Forge Mother made only one, then sat down for a long while.",
        damageMultiplier: 1.6,
        cooldownMultiplier: .83,
        ability: "warcry"
      },
      "skyblock:forged:magmasteel-iron-stone": {
        name: "Forgehand",
        lore: "A smith's sword: plain to look at, and it hits like a hammer.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .9,
        ability: "quake"
      },
      "skyblock:forged:sanguine-sanguine-sanguine": {
        name: "Crimson Covenant",
        lore: "It drinks, and so do you.",
        damageMultiplier: 1.53,
        cooldownMultiplier: .83,
        ability: "bloodPact"
      },
      "skyblock:forged:sanguine-astral-moonstone": {
        name: "Nightbloom",
        lore: "A red flower that only opens after dark.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "eclipseField"
      },
      "skyblock:forged:sanguine-iron-wood": {
        name: "Butcher's Oath",
        lore: "Heavy, honest and always hungry.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .95,
        ability: "bloodPact"
      },
      "skyblock:forged:moonstone-moonstone-moonstone": {
        name: "Lunar Requiem",
        lore: "Swung, it leaves a pale arc that lingers like a second moon.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .85,
        ability: "moonDash"
      },
      "skyblock:forged:moonstone-astral-moonstone": {
        name: "Silver Tide",
        lore: "Pulled by the same moon that pulls the sea.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .84,
        ability: "moonDash"
      },
      "skyblock:forged:diamond-diamond-diamond": {
        name: "Prism Fang",
        lore: "Every facet catches a different light, and every strike finds a different weakness.",
        damageMultiplier: 1.29,
        cooldownMultiplier: .88,
        ability: "gildedEdge",
        traits: {
          crit: 1.8
        }
      },
      "skyblock:forged:diamond-moonstone-gold": {
        name: "Jeweller's Pride",
        lore: "Too pretty to fight with. Fight with it anyway.",
        damageMultiplier: 1.24,
        cooldownMultiplier: .91,
        ability: "gildedEdge"
      },
      "skyblock:forged:gold-gold-gold": {
        name: "King's Ransom",
        lore: "Worth more than the treasure it guards.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .91,
        ability: "gildedEdge",
        traits: {
          coins: 2.5
        }
      },
      "skyblock:forged:gold-moonstone-gold": {
        name: "Midas Moon",
        lore: "Mobs it fells seem to rattle with coins.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .92,
        ability: "gildedEdge",
        traits: {
          coins: 2,
          bossBane: .6
        }
      },
      "skyblock:forged:iron-iron-iron": {
        name: "Old Faithful",
        lore: "It has never let anyone down. It never will.",
        damageMultiplier: 1.15,
        cooldownMultiplier: .94,
        ability: "warcry"
      },
      "skyblock:forged:iron-wood-wood": {
        name: "Militia Blade",
        lore: "Handed out at the outpost gate when the rift first opened.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "warcry"
      },
      "skyblock:forged:stone-stone-stone": {
        name: "Quarryman's Cleaver",
        lore: "Chipped from one block of stone, handle and all.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "quake"
      },
      "skyblock:forged:wood-wood-wood": {
        name: "Lorenzo's Lesson",
        lore: "Courage matters more than the blade. This one is mostly courage.",
        damageMultiplier: 1.06,
        cooldownMultiplier: .97,
        ability: "warcry"
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);