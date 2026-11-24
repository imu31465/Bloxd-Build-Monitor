export const id = 17;
export const ids = [17];
export const modules = {
  36853: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Et,
      g: () => ft,
      i: () => lt,
      m: () => Qt
    });
    var Ot = Vt(34371),
      qt = Vt(36861),
      Dt = Vt(36867),
      mt = Vt(8936),
      dt = Vt(1554),
      jt = Vt(63),
      Ht = Vt(83),
      Xt = Vt(1188);

    function Qt() {
      var tt;
      return (0, dt.h)(qt.b, (0, qt.l)()), (0, Xt.jsx)(Xt.Fragment, {
        children: null === (tt = (0, qt.l)()) || void 0 === tt ? void 0 : tt.content
      })
    }

    function lt(tt) {
      var et;
      let {
        show: Vt
      } = tt;
      (0, dt.h)(qt.b, (0, qt.l)());
      const Ht = null === (et = (0, qt.l)()) || void 0 === et ? void 0 : et.menu;
      return (0, jt.useEffect)((() => {
        var tt;
        Vt || (null === Ht || void 0 === Ht || null === (tt = Ht.onClose) || void 0 === tt || tt.call(Ht), (0, Dt.t)())
      }), [Vt, Ht]), (0, jt.useEffect)((() => Vt ? (0, mt.g)(Dt.A, Dt.f) : void 0), [Vt]), (0, Xt.jsx)(Ot.b, {
        showing: Vt,
        globallyUniqueKey: "clientGameMenu",
        children: null === Ht || void 0 === Ht ? void 0 : Ht.content
      })
    }

    function Et(tt) {
      let {
        placement: et = "bottom"
      } = tt;
      return (0, Xt.jsx)("div", {
        id: `clientGameHud-${et}`,
        style: {
          display: "contents"
        }
      })
    }

    function ft(tt) {
      let {
        children: et,
        placement: Vt = "bottom"
      } = tt;
      const [Ot, qt] = (0, jt.useState)(null);
      return (0, jt.useEffect)((() => {
        qt(document.getElementById(`clientGameHud-${Vt}`))
      }), [Vt]), Ot ? (0, Ht.createPortal)(et, Ot) : null
    }
  },
  34371: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(4668),
      qt = Vt(4677);

    function Dt(tt) {
      let {
        children: et,
        showing: Vt,
        globallyUniqueKey: Dt,
        alwaysMountChildren: mt = !1,
        doGameplayStartStopOnShow: dt = !0,
        keepsMovement: jt = !1
      } = tt;
      return (0, qt.d)(!0, Vt, Dt, jt), (0, Ot.e)(dt, Vt), Vt || mt ? et : null
    }
  },
  36941: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      d: () => mt,
      h: () => dt,
      j: () => jt
    });
    var Ot = Vt(63),
      qt = Vt(3176);
    const Dt = 8,
      mt = "InGameHeaderContainer",
      dt = "TopRightElements";

    function jt(tt) {
      const [et] = (0, qt.c)(), [Vt, jt] = (0, Ot.useState)(!1);
      return (0, Ot.useLayoutEffect)((() => {
        if (!tt) return;
        const et = document.querySelector(`.${mt}`),
          Vt = document.querySelector(`.${dt}`),
          Ot = () => {
            const Ot = tt.getBoundingClientRect(),
              qt = et ? et.getBoundingClientRect().right : 0,
              mt = Vt ? Vt.getBoundingClientRect().left : window.innerWidth,
              dt = Ot.left < qt + Dt,
              Ht = Ot.right > mt - Dt;
            jt(dt || Ht)
          };
        Ot();
        const qt = new ResizeObserver(Ot);
        return qt.observe(tt), et && qt.observe(et), Vt && qt.observe(Vt), () => {
          qt.disconnect()
        }
      }), [tt, et]), Vt
    }
  },
  36932: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    const Ot = [{
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

    function qt(tt, et, Vt) {
      const qt = Math.abs(tt - et),
        Dt = Date.now() - Vt;
      for (const mt of Ot)
        if (tt < mt.maxDist) return qt >= mt.hardUpdateDist || Dt > mt.timeBetweenSoftChecks && qt >= mt.softUpdateDist;
      return !1
    }
  },
  8936: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      g: () => qt
    });
    let Ot = null;
    const qt = function(tt) {
        const et = {
          cycle: tt,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ot = et, () => {
          Ot === et && (Ot = null)
        }
      },
      Dt = () => {
        var tt;
        return null !== (tt = Ot) && void 0 !== tt && tt.canCycle() ? Ot.cycle : null
      }
  },
  38751: (tt, et, Vt) => {
    function Ot(tt, et, Vt) {
      var Ot;
      const {
        width: qt,
        height: Dt
      } = Vt, mt = null !== (Ot = tt.text) && void 0 !== Ot ? Ot : tt, dt = (mt.x / 100 - .5) * qt, jt = (mt.y / 100 - .5) * Dt, Ht = qt / 2 - et.x;
      if (null !== tt.text && Math.abs(dt) <= Ht && jt >= et.top - Dt / 2 && jt <= Dt / 2 - et.bottom) return {
        x: mt.x,
        y: mt.y
      };
      const Xt = Math.min(0 === dt ? 1 / 0 : Ht / Math.abs(dt), jt > 0 ? (Dt / 2 - et.bottom) / jt : jt < 0 ? (et.top - Dt / 2) / jt : 1 / 0);
      return !Number.isFinite(Xt) || Xt < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + dt * Xt / qt * 100,
        y: 50 + jt * Xt / Dt * 100
      }
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  36867: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => ft,
      E: () => Mt,
      d: () => Dt,
      f: () => wt,
      j: () => yt,
      n: () => dt,
      q: () => lt,
      t: () => Nt,
      w: () => Qt,
      y: () => bt
    });
    var Ot = Vt(26),
      qt = Vt(31);
    const Dt = "clientGameInventoryButtonsChanged",
      mt = new Map;

    function dt() {
      return [...mt.values()].sort(((tt, et) => {
        var Vt, Ot;
        return (null !== (Vt = tt.order) && void 0 !== Vt ? Vt : 0) - (null !== (Ot = et.order) && void 0 !== Ot ? Ot : 0)
      }))
    }
    let jt = null;

    function Ht(tt) {
      jt = tt
    }
    let Xt = !1;

    function Qt(tt) {
      Xt = !0;
      try {
        tt.onClick()
      } finally {
        Xt = !1
      }
      tt.panel && "clientGame" === Ot.b.get("openInGameMenuName") && Ht(tt.id)
    }

    function lt() {
      return Xt
    }

    function Et() {
      return dt().filter((tt => tt.panel && !tt.disabled))
    }

    function ft(tt) {
      const et = Et(),
        Vt = et.findIndex((tt => tt.id === jt));
      return !(Vt < 0 || et.length < 2) && (Qt(et[(Vt + tt + et.length) % et.length]), !0)
    }

    function wt() {
      return null !== jt && Et().length > 1
    }

    function yt() {
      Ht(null)
    }

    function Nt() {
      "inventory" !== Ot.b.get("openInGameMenuName") && Ht(null)
    }

    function Mt() {
      const tt = jt;
      return Ht(null), tt
    }

    function bt(tt) {
      return mt.set(tt.id, tt), qt.j.sw(Dt, dt(), !0), () => {
        mt.get(tt.id) === tt && (mt.delete(tt.id), qt.j.sw(Dt, dt()))
      }
    }
  },
  36861: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      c: () => yt,
      g: () => Nt,
      i: () => lt,
      l: () => Ht,
      m: () => wt,
      o: () => Et,
      q: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(1387),
      mt = Vt(36867);
    const dt = "clientGameUiChanged";
    let jt = null;

    function Ht() {
      return jt
    }

    function Xt(tt, et) {
      const Vt = {
        content: tt,
        menu: et
      };
      return jt = Vt, qt.j.sw(dt, jt, !0), () => {
        jt === Vt && (jt = null, ft = !1, yt(), qt.j.sw(dt, null))
      }
    }
    let Qt = null;

    function lt() {
      return Qt
    }

    function Et(tt) {
      return Qt = tt, () => {
        Qt === tt && (Qt = null)
      }
    }
    let ft = !1;

    function wt() {
      const tt = Ot.b.get("openInGameMenuName");
      "clientGame" !== tt && (ft = "inventory" === tt), (0, mt.q)() || (0, mt.j)(), (0, Dt.p)(Dt.c), Ot.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yt() {
      Mt(!1)
    }

    function Nt() {
      Mt(ft)
    }

    function Mt(tt) {
      "clientGame" === Ot.b.get("openInGameMenuName") && Ot.b.set({
        openInGameMenuName: tt ? "inventory" : null
      }), tt || (0, mt.j)(), ft = !1
    }
  },
  39650: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => Ne
    });
    const Ot = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var qt = Vt(63),
      Dt = Vt(36861),
      mt = Vt(37273),
      dt = Vt(36872),
      jt = Vt(1826),
      Ht = Vt(31);
    const Xt = {
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
    const Qt = 32;

    function lt(tt, et, Vt, Ot) {
      return {
        tag: "line",
        attrs: {
          x1: tt,
          y1: et,
          x2: Vt,
          y2: Ot,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function Et(tt) {
      return {
        tag: "circle",
        attrs: {
          cx: Qt,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qt,
          r: tt,
          class: "Fill"
        }
      }
    }

    function ft(tt, et) {
      return {
        tag: "path",
        attrs: {
          d: tt,
          "stroke-width": et
        }
      }
    }

    function wt(tt, et, Vt) {
      return {
        tag: "circle",
        attrs: {
          cx: Qt,
          cy: Qt,
          r: tt,
          "stroke-width": et,
          class: Vt
        }
      }
    }

    function yt(tt, et, Vt) {
      return {
        tag: "text",
        attrs: {
          x: tt,
          y: et,
          class: "Fill Label"
        },
        text: Vt
      }
    }
    const Nt = {
      pistol: tt => [lt(Qt, Qt - tt - 5, Qt, Qt - tt), lt(Qt - tt - 5, Qt, Qt - tt, Qt), lt(Qt + tt, Qt, Qt + tt + 5, Qt), Et(1.4)],
      rifle: tt => [lt(Qt, Qt - tt - 8, Qt, Qt - tt), lt(Qt, Qt + tt, Qt, Qt + tt + 8), lt(Qt - tt - 8, Qt, Qt - tt, Qt), lt(Qt + tt, Qt, Qt + tt + 8, Qt), Et(1)],
      smg: tt => {
        const et = Math.PI / 2,
          Vt = [];
        for (let mt = 0; mt < 4; mt++) Vt.push((qt = mt * et + .35, Dt = (mt + 1) * et - .35, ft(`M${Qt+(Ot=6+tt)*Math.cos(qt)} ${Qt+Ot*Math.sin(qt)} A${Ot} ${Ot} 0 0 1 ${Qt+Ot*Math.cos(Dt)} ${Qt+Ot*Math.sin(Dt)}`, 2)));
        var Ot, qt, Dt;
        return [...Vt, Et(1.4)]
      },
      shotgun: tt => [wt(tt, 3, "Ring Outline"), wt(tt, 1.5, "Ring")],
      marksman: tt => [ft(`M${26-tt/2} ${39+tt/2} L32 33 L${38+tt/2} ${39+tt/2}`, 2), lt(14 - tt, Qt, 24 - tt, Qt, 1.5), lt(40 + tt, Qt, 50 + tt, Qt, 1.5), lt(14 - tt, 30, 14 - tt, 34, 1.5), lt(50 + tt, 30, 50 + tt, 34, 1.5)],
      machineGun: tt => {
        const et = 10 + tt,
          Vt = [];
        for (const [Ot, qt] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) Vt.push(ft(`M${Qt+Ot*et} ${Qt+qt*(et-5)} L${Qt+Ot*et} ${Qt+qt*et} L${Qt+Ot*(et-5)} ${Qt+qt*et}`, 2));
        return [...Vt, lt(Qt, 28, Qt, 36, 1.5), lt(28, Qt, 36, Qt, 1.5)]
      },
      launcher: () => [lt(14, 30, 50, 30, 1.5), lt(Qt, 24, Qt, 52, 1.5), lt(28, 38, 36, 38, 1.5), lt(29, 44, 35, 44, 1.5), lt(30, 50, 34, 50, 1.5), yt(38, 40, "100"), yt(37, 46, "200"), Et(1.4, 30)],
      melee: () => [ft("M32 26 L38 32 L32 38 L26 32 Z", 1.5), Et(1.2)],
      throwable: () => [Et(1.6)]
    };

    function Mt(tt) {
      let {
        tag: et,
        attrs: Vt,
        text: Ot
      } = tt, qt = `<${et}`;
      for (const [Dt, mt] of Object.entries(Vt)) qt += ` ${Dt}="${mt}"`;
      return void 0 === Ot ? `${qt}/>` : `${qt}>${Ot}</${et}>`
    }
    class bt {
      constructor(tt, et) {
        this.api = tt, this.localPlayerId = et, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = tt => {
          this.element = tt, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, tt && !this.enabled && (tt.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, jt.getRemInPx)()))
        }, this.tokens = [Ht.j.subscribe("aimingOverlay", (tt => {
          this.sniperOverlay = "sniper" === tt
        })), Ht.j.subscribe("mouseState", (tt => {
          let {
            isDown: et
          } = tt;
          this.mouseDown = et
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Av(tt) {
        tt !== this.enabled && (this.enabled = tt, this.drawnVisible = null, tt || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(tt, et) {
        var Vt, Ot;
        if (!this.enabled) return;
        const {
          api: qt
        } = this, Dt = qt.isAlive(this.localPlayerId) && null !== (Vt = null === (Ot = qt.bVt(this.localPlayerId)) || void 0 === Ot ? void 0 : Ot.name) && void 0 !== Vt ? Vt : null, mt = (dt = Dt) && Xt[dt] || null;
        var dt;
        if (this.setOwnsCrosshair(null !== mt), !this.element) return;
        const jt = qt.getHeldGunInaccuracy(),
          Ht = null !== jt,
          Qt = null !== mt && !this.sniperOverlay && qt.isCrosshairShown();
        if (Qt !== this.drawnVisible && (this.drawnVisible = Qt, this.element.style.display = Qt ? "block" : "none"), !Qt) return;
        const lt = Ht ? function(tt) {
            return "launcher" === tt || "melee" === tt || "throwable" === tt ? "none" : "shotgun" === tt ? "cone" : "offset"
          }(mt) : "none",
          Et = null !== jt && void 0 !== jt ? jt : 0;
        "cone" === lt ? this.drawCone(mt, this.coneRadiusVh(Et, et) * this.gapPerVh, tt) : (this.coneDrawn = !1, this.draw(mt, "none" === lt ? 2 : this.offsetGap(Et)));
        const ft = !Ht && this.mouseDown;
        ft !== this.drawnPressed && (this.drawnPressed = ft, this.element.classList.toggle("Pressed", ft))
      }
      dispose() {
        for (const tt of this.tokens) Ht.j.unsubscribe(tt);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(tt, et) {
        var Vt, Ot;
        tt !== this.drawnFamily ? (this.drawnFamily = tt, this.drawnGap = et, this.element.innerHTML = function(tt, et) {
          return `<svg viewBox="0 0 64 64">${Nt[tt](et).map(Mt).join("")}</svg>`
        }(tt, et), this.shapes = Array.from(null !== (Vt = null === (Ot = this.element.firstElementChild) || void 0 === Ot ? void 0 : Ot.children) && void 0 !== Vt ? Vt : [])) : et !== this.drawnGap && (this.drawnGap = et, function(tt, et, Vt) {
          const Ot = Nt[et](Vt);
          for (let qt = 0; qt < Ot.length; qt++)
            for (const [et, Vt] of Object.entries(Ot[qt].attrs)) {
              const Ot = String(Vt);
              tt[qt].getAttribute(et) !== Ot && tt[qt].setAttribute(et, Ot)
            }
        }(this.shapes, tt, et))
      }
      drawCone(tt, et, Vt) {
        tt === this.drawnFamily && this.coneDrawn ? this.shownRadius += (et - this.shownRadius) * (1 - Math.exp(-Vt / 80)) : this.shownRadius = et, this.coneDrawn = !0, this.draw(tt, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(tt, et) {
        if (!(et > 0)) return 1;
        const Vt = tt * mt.g / 2;
        return Math.max(50 * Math.tan(Vt) / et, 1)
      }
      offsetGap(tt) {
        const et = 2 + ((0, dt.c)(tt) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * et) / 2)
      }
      setOwnsCrosshair(tt) {
        tt !== this.ownsCrosshair && (this.ownsCrosshair = tt, document.body.classList.toggle("FrontlineCustomCrosshair", tt))
      }
    }
    const Jt = "FrontlineCustomDamage",
      Ct = .45,
      ut = .2;
    class Kt {
      constructor(tt, et) {
        this.api = tt, this.localPlayerId = et, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.Lt = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = tt => {
          var et, Vt;
          this.clearHits(), this.root = tt, this.lowLayer = null !== (et = null === tt || void 0 === tt ? void 0 : tt.querySelector(".FrontlineDamageLow")) && void 0 !== et ? et : null, this.arcLayer = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.querySelector(".FrontlineDamageArcs")) && void 0 !== Vt ? Vt : null, this.showRoot(), this.drawLow()
        }, this.token = Ht.j.subscribe("damagedByOtherPlayer", (tt => {
          let {
            direction: et,
            Pt: Vt
          } = tt;
          this.onHurt(et, Vt)
        })), this.syncHealth(), document.body.classList.add(Jt)
      }
      Av(tt) {
        tt !== this.enabled && (this.enabled = tt, document.body.classList.toggle(Jt, tt), tt || this.clearHits(), this.showRoot())
      }
      frame(tt) {
        this.syncHealth(), this.cameraHeading = tt;
        for (const et of this.arcs) this.drawArcAngle(et)
      }
      dispose() {
        Ht.j.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Jt)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const tt = this.api.getClientOption(this.localPlayerId, "_health"),
          et = this.api.getClientOption(this.localPlayerId, "_shield"),
          Vt = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(tt, this.readHealth) && Object.is(et, this.readShield) && Object.is(Vt, this.readMaxHealth)) return;
        if (this.readHealth = tt, this.readShield = et, this.readMaxHealth = Vt, null === tt || void 0 === tt || !Vt) return this.lastHealthPool = null, this.maxHealth = null, this.Lt = 1, this.dead = !1, void this.drawLow();
        const Ot = tt + (null !== et && void 0 !== et ? et : 0);
        if (null !== this.lastHealthPool && Ot < this.lastHealthPool) {
          const tt = performance.now(),
            et = (this.lastHealthPool - Ot) / Vt;
          this.lastDrop = tt - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + et,
            at: this.lastDrop.at
          } : {
            frac: et,
            at: tt
          }
        }
        this.dead = tt <= 0, this.dead && this.clearHits(), this.lastHealthPool = Ot, this.maxHealth = Vt, this.Lt = tt > 0 ? tt / Vt : 1, this.drawLow()
      }
      onHurt(tt, et) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const Vt = Math.min(1, this.takeDamageFrac(et) / .3);
        null !== tt && this.showArc(tt, Vt), this.flashEdge(null === tt ? null : tt - this.cameraHeading, .4 + .6 * Vt)
      }
      takeDamageFrac(tt) {
        if (void 0 !== tt && this.maxHealth) return tt / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: et
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, et
      }
      drawLow() {
        if (!this.lowLayer) return;
        const tt = vt((Ct - this.Lt) / .25),
          et = vt((ut - this.Lt) / .15000000000000002),
          Vt = this.Lt < Ct;
        this.lowLayer.classList.toggle("Active", Vt), this.lowLayer.classList.toggle("Critical", this.Lt < ut), this.lowLayer.style.opacity = String(Vt ? .55 + .3 * tt + .15 * et : 0)
      }
      showArc(tt, et) {
        var Vt, Ot;
        if (!this.arcLayer) return;
        let qt = this.arcs.find((et => ht(et.direction, tt) < .6));
        if (!qt) {
          const et = document.createElement("div");
          et.className = "FrontlineDamageArc", et.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(et), qt = {
            element: et,
            direction: tt,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(qt)
        }
        qt.direction = tt, this.drawArcAngle(qt);
        const Dt = qt.fade ? Number(getComputedStyle(qt.element).opacity) : 0;
        null === (Vt = qt.fade) || void 0 === Vt || Vt.cancel(), null === (Ot = qt.pop) || void 0 === Ot || Ot.cancel(), qt.element.style.opacity = "1";
        const mt = qt.element.animate([{
          opacity: Dt
        }, {
          opacity: 1
        }], 144);
        qt.fade = mt, qt.pop = qt.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * et
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const dt = qt;
        mt.onfinish = () => {
          if (dt.fade !== mt) return;
          const tt = dt.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          tt.startTime = mt.startTime, dt.fade = tt, tt.onfinish = () => {
            dt.fade === tt && (dt.element.remove(), Wt(this.arcs, dt))
          }
        }
      }
      drawArcAngle(tt) {
        const et = tt.direction - this.cameraHeading;
        (null === tt.drawnAngle || Math.abs(et - tt.drawnAngle) > .005) && (tt.drawnAngle = et, tt.element.style.rotate = `${et}rad`)
      }
      flashEdge(tt, et) {
        var Vt, Ot, qt;
        if (!this.root) return;
        let Dt = this.flashes.find((et => null === et.angle || null === tt ? et.angle === tt : ht(et.angle, tt) < .5));
        if (!Dt) {
          const et = document.createElement("div");
          et.className = "FrontlineDamageFlash";
          const Vt = et.appendChild(document.createElement("div"));
          Vt.className = "FrontlineDamageFlashGlow", this.root.insertBefore(et, this.arcLayer), Dt = {
            element: et,
            glow: Vt,
            angle: tt,
            level: 0,
            animation: null
          }, this.flashes.push(Dt)
        }
        const mt = null === (Vt = Dt.animation) || void 0 === Vt || null === (Ot = Vt.effect) || void 0 === Ot ? void 0 : Ot.getComputedTiming().progress,
          dt = null === mt || void 0 === mt ? 0 : Dt.level * (1 - mt);
        Dt.level = Math.min(1, Math.max(et, dt + .6 * et)), Dt.angle = tt;
        const {
          x: jt,
          y: Ht,
          rx: Xt,
          ry: Qt
        } = function(tt, et) {
          const Vt = window.innerWidth,
            Ot = window.innerHeight;
          if (null === tt) return {
            x: Vt / 2,
            y: Ot / 2,
            rx: 0,
            ry: 0
          };
          const qt = Math.sin(tt),
            Dt = -Math.cos(tt),
            mt = Vt / 2 / Math.max(1e-6, Math.abs(qt)),
            dt = Ot / 2 / Math.max(1e-6, Math.abs(Dt)),
            jt = Math.min(mt, dt),
            Ht = Math.round(Vt / 2 + qt * jt),
            Xt = Math.round(Ot / 2 + Dt * jt),
            Qt = Ot / 100 * (.85 + .25 * et),
            lt = mt <= dt,
            Et = Math.round((lt ? 30 : 74) * Qt),
            ft = Math.round((lt ? 58 : 26) * Qt);
          return {
            x: Ht,
            y: Xt,
            rx: Et,
            ry: ft
          }
        }(tt, Dt.level), {
          style: lt
        } = Dt.glow;
        Dt.glow.classList.toggle("Everywhere", null === tt), lt.setProperty("--glowX", `${jt}px`), lt.setProperty("--glowY", `${Ht}px`), lt.setProperty("--glowRx", `${Xt}px`), lt.setProperty("--glowRy", `${Qt}px`), Dt.element.style.transformOrigin = `${jt}px ${Ht}px`, null === (qt = Dt.animation) || void 0 === qt || qt.cancel();
        const Et = Dt.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Dt.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Dt.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Dt.level
        });
        Dt.animation = Et;
        const ft = Dt;
        Et.onfinish = () => {
          ft.animation === Et && (ft.element.remove(), Wt(this.flashes, ft))
        }
      }
      clearHits() {
        for (const Ot of this.arcs) {
          var tt, et;
          null === (tt = Ot.fade) || void 0 === tt || tt.cancel(), Ot.fade = null, null === (et = Ot.pop) || void 0 === et || et.cancel(), Ot.element.remove()
        }
        this.arcs.length = 0;
        for (const Ot of this.flashes) {
          var Vt;
          null === (Vt = Ot.animation) || void 0 === Vt || Vt.cancel(), Ot.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function ht(tt, et) {
      return Math.abs(Math.atan2(Math.sin(tt - et), Math.cos(tt - et)))
    }

    function vt(tt) {
      return Math.max(0, Math.min(1, tt))
    }

    function Wt(tt, et) {
      const Vt = tt.indexOf(et); - 1 !== Vt && tt.splice(Vt, 1)
    }
    var St = Vt(1140),
      ct = Vt.n(St),
      Rt = Vt(36853),
      It = Vt(36941),
      Pt = Vt(1286),
      Zt = Vt(1554);
    const Lt = "frontlineHudChanged",
      Ft = "frontlineScoreboardChanged";
    class kt {
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
      Qf(tt) {
        this.wire = tt, Ht.j.sw(Lt, tt, !0)
      }
      receiveScoreboard(tt) {
        let et = "scoreboard" === tt[0] ? performance.now() + tt[5] : 0;
        const Vt = this.scoreboard.endsAt;
        0 !== et && 0 !== Vt && Math.abs(et - Vt) < 1e3 && (et = Vt), this.scoreboard = {
          wire: tt,
          endsAt: et
        }, Ht.j.sw(Ft, this.scoreboard, !0)
      }
    }
    var Gt = Vt(1188);
    const zt = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function ot(tt) {
      const [et, Vt] = (0, qt.useState)((() => (tt - performance.now()) / 1e3));
      return (0, qt.useEffect)((() => {
        if (0 === tt) return;
        const et = () => {
          Vt((tt - performance.now()) / 1e3)
        };
        et();
        const Ot = window.setInterval(et, 250);
        return () => {
          window.clearInterval(Ot)
        }
      }), [tt]), et
    }

    function rt(tt) {
      let {
        className: et,
        point: Vt
      } = tt;
      const [Ot, qt, Dt, mt, dt, jt] = Vt;
      return (0, Gt.jsxs)("div", {
        className: ct()(et, `Owner-${qt||"None"}`, `Leader-${mt||"None"}`, {
          Contested: dt,
          Here: jt
        }),
        children: [(0, Gt.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Ot
        }), (0, Gt.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Dt}%`
          }
        })]
      })
    }
    const Ut = (0, qt.memo)((function(tt) {
        let {
          points: et,
          markers: Vt
        } = tt;
        const {
          t: Ot
        } = (0, Pt.H)();
        return et ? (0, Gt.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: et.map((tt => {
            const [et, , , , , , , qt] = tt;
            return (0, Gt.jsxs)("div", {
              ref: Vt.bindMarker(et),
              className: "FrontlinePointMarker",
              children: [(0, Gt.jsx)(rt, {
                className: "FrontlinePointMarkerTile",
                point: tt
              }), (0, Gt.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [qt && (0, Gt.jsx)("span", {
                  className: ct()("FrontlinePointMarkerHomeTurf", `Team-${qt}`),
                  children: Ot("frontlineHud:homeTurf", {
                    team: Ot(zt[qt])
                  })
                }), (0, Gt.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, et)
          }))
        }) : null
      })),
      At = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      it = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function Yt(tt) {
      let {
        hud: et,
        crosshair: Vt,
        damage: Ot,
        markers: qt
      } = tt;
      const Dt = (0, Zt.h)(Lt, et.getWire()),
        mt = (0, Zt.h)(Ft, et.getScoreboard());
      return (0, Gt.jsxs)(Gt.Fragment, {
        children: [(0, Gt.jsx)(Bt, {
          damage: Ot
        }), (0, Gt.jsx)(Ut, {
          points: "scoreboard" === mt.wire[0] ? mt.wire[6] : null,
          markers: qt
        }), (0, Gt.jsx)(xt, {
          view: mt
        }), (0, Gt.jsx)("div", {
          className: "FrontlineReticle",
          ref: Vt.bindElement
        }), (0, Gt.jsx)(Rt.g, {
          children: (0, Gt.jsx)(pt, {
            wire: Dt
          })
        })]
      })
    }
    const Bt = (0, qt.memo)((function(tt) {
        let {
          damage: et
        } = tt;
        return (0, Gt.jsxs)("div", {
          className: "FrontlineDamage",
          ref: et.bindElement,
          children: [(0, Gt.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, Gt.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, Gt.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      pt = (0, qt.memo)((function(tt) {
        let {
          wire: et
        } = tt;
        const {
          t: Vt
        } = (0, Pt.H)();
        if ("capture" === et[0]) {
          const [, tt, Ot, qt, Dt, mt, dt] = et, jt = Math.round(qt / 100 * 24);
          return (0, Gt.jsxs)("div", {
            className: ct()("FrontlinePlate", `Status-${Ot}`, `Leader-${Dt||"None"}`),
            children: [(0, Gt.jsx)(nt, {}), (0, Gt.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, Gt.jsx)("span", {
                className: "FrontlineObjective",
                children: tt
              }), (0, Gt.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, Gt.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: Vt("frontlineHud:objective", {
                    point: tt,
                    friendly: mt,
                    enemy: dt
                  })
                }), (0, Gt.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: Vt(At[Ot])
                })]
              }), (0, Gt.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(qt).padStart(3, "0"), (0, Gt.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, Gt.jsx)(gt, {
              segments: 24,
              lit: jt
            })]
          })
        }
        if ("alert" === et[0]) {
          const [, tt, Ot, qt] = et;
          return (0, Gt.jsxs)("div", {
            className: ct()("FrontlinePlate", "FrontlineAlert", `Tone-${qt}`),
            children: [(0, Gt.jsx)(nt, {}), (0, Gt.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Vt(it[tt])
            }), (0, Gt.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Ot
            })]
          })
        }
        return null
      })),
      xt = (0, qt.memo)((function(tt) {
        let {
          view: et
        } = tt;
        const {
          t: Vt
        } = (0, Pt.H)(), Ot = (0, qt.useRef)(null), Dt = function(tt, et) {
          const [Vt, Ot] = (0, qt.useState)(!1);
          return (0, qt.useLayoutEffect)((() => {
            const et = tt.current;
            if (!et) return;
            const Vt = document.querySelector(`.${It.d}`),
              qt = document.querySelector(`.${It.h}`),
              Dt = () => {
                var tt;
                const Dt = et.querySelector(".FrontlineTeamTrack"),
                  mt = (0, jt.getRemInPx)(),
                  dt = et.getBoundingClientRect().width - 2 * (null !== (tt = null === Dt || void 0 === Dt ? void 0 : Dt.getBoundingClientRect().width) && void 0 !== tt ? tt : 0),
                  Ht = window.innerWidth / 2,
                  Xt = Vt ? Vt.getBoundingClientRect().right : 0,
                  Qt = qt ? qt.getBoundingClientRect().left : window.innerWidth,
                  lt = Math.min(Ht - Xt, Qt - Ht) - It.b - dt / 2,
                  Et = lt < 6 * mt,
                  ft = Et ? (window.innerWidth - dt) / 2 - It.b : lt;
                et.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(ft,14*mt)))}px`), Ot(Et)
              };
            Dt();
            const mt = new ResizeObserver(Dt);
            for (const tt of [et, Vt, qt]) tt && mt.observe(tt);
            return window.addEventListener("resize", Dt), () => {
              mt.disconnect(), window.removeEventListener("resize", Dt)
            }
          }), [tt, et]), Vt
        }(Ot, "scoreboard" === et.wire[0]);
        if ("scoreboard" !== et.wire[0]) return null;
        const [, mt, dt, Ht, Xt, , Qt] = et.wire, lt = "Red" === mt ? "Blue" : "Red";
        return (0, Gt.jsxs)("div", {
          className: ct()("FrontlineScoreboardContainer", {
            Below: Dt
          }),
          children: [(0, Gt.jsxs)("div", {
            ref: Ot,
            className: "FrontlineScoreboard",
            children: [(0, Gt.jsx)(nt, {}), (0, Gt.jsx)(Tt, {
              team: mt,
              tickets: dt,
              goal: Xt,
              side: "Friendly"
            }), (0, Gt.jsx)("div", {
              className: "FrontlinePoints",
              children: Qt.map((tt => (0, Gt.jsx)(rt, {
                className: "FrontlinePoint",
                point: tt
              }, tt[0])))
            }), (0, Gt.jsx)(Tt, {
              team: lt,
              tickets: Ht,
              goal: Xt,
              side: "Enemy"
            })]
          }), (0, Gt.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, Gt.jsx)(st, {
              endsAt: et.endsAt
            }), (0, Gt.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Vt("frontlineHud:ticketGoal", {
                goal: Xt
              })
            })]
          })]
        })
      }));

    function Tt(tt) {
      let {
        team: et,
        tickets: Vt,
        goal: Ot,
        side: qt
      } = tt;
      const {
        t: Dt
      } = (0, Pt.H)(), mt = String(Vt).padStart(3, "0"), dt = mt.search(/[1-9]/), jt = -1 === dt ? mt : mt.slice(0, dt), Ht = Math.min(20, Math.floor(Vt / Ot * 20));
      return (0, Gt.jsxs)("div", {
        className: ct()("FrontlineTeamScore", qt, `Team-${et}`),
        children: [(0, Gt.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, Gt.jsx)("span", {
            className: "Lead",
            children: jt
          }), -1 !== dt && mt.slice(dt)]
        }), (0, Gt.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, Gt.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Dt(zt[et])
          }), (0, Gt.jsx)(gt, {
            segments: 20,
            lit: Ht
          })]
        })]
      })
    }

    function gt(tt) {
      let {
        segments: et,
        lit: Vt
      } = tt;
      return (0, Gt.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: et
        }, ((tt, et) => (0, Gt.jsx)("i", {
          className: ct()({
            Lit: et < Vt
          })
        }, et)))
      })
    }

    function st(tt) {
      let {
        endsAt: et
      } = tt;
      const Vt = Math.max(0, Math.ceil(ot(et)));
      return (0, Gt.jsxs)("div", {
        className: ct()("FrontlineClock", {
          Urgent: Vt <= 60
        }),
        children: [Math.floor(Vt / 60), ":", String(Vt % 60).padStart(2, "0")]
      })
    }

    function nt() {
      return (0, Gt.jsxs)(Gt.Fragment, {
        children: [(0, Gt.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Gt.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var te = Vt(36932),
      ee = Vt(1338),
      Ve = Vt(38716),
      Oe = Vt(38751);
    class qe {
      constructor(tt) {
        var et;
        this.hud = tt, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.df = !1, this.iN = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.iN), null === (et = window.visualViewport) || void 0 === et || et.addEventListener("resize", this.iN)
      }
      bindMarker(tt) {
        let et = this.refs.get(tt);
        return et || (et = et => {
          var Vt;
          null === (Vt = this.markers.get(tt)) || void 0 === Vt || Vt.stopObserving(), this.markers.delete(tt), et && !this.df && this.markers.set(tt, this.mount(et))
        }, this.refs.set(tt, et)), et
      }
      frame(tt, et) {
        this.render = tt;
        const Vt = this.hud.getScoreboard().wire;
        if ("scoreboard" === Vt[0] && 0 !== this.markers.size)
          for (const [Ot, , , , , , qt] of Vt[6]) {
            const tt = this.markers.get(Ot);
            tt && qt && (tt.target ??= [0, 0, 0], tt.target[0] = qt[0], tt.target[1] = qt[1] + 2.5, tt.target[2] = qt[2], this.place(tt), this.Ye(tt, et && Math.hypot(qt[0] - et[0], qt[1] - et[1], qt[2] - et[2])))
          }
      }
      dispose() {
        var tt;
        this.df = !0, window.removeEventListener("resize", this.iN), null === (tt = window.visualViewport) || void 0 === tt || tt.removeEventListener("resize", this.iN);
        for (const et of this.markers.values()) et.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(tt) {
        const {
          render: et,
          viewport: Vt
        } = this;
        if (!et || !tt.target) return;
        const Ot = (50 - et.screenBandPct.y) / 100 * Vt.height,
          qt = {
            x: tt.halfSize.width + 8,
            top: tt.halfSize.height + 8,
            bottom: tt.halfSize.height + tt.labelsBelow + Ot
          },
          Dt = et.projectWorldPosToViewport(tt.target),
          mt = null !== Dt && void 0 !== Dt ? Dt : et.projectWorldPosToScreenPos(tt.target),
          dt = (0, Oe.b)({
            x: mt.x,
            y: mt.y,
            text: Dt
          }, qt, Vt);
        (0, Ve.e)(tt.root, Math.round(100 * dt.x) / 100, Math.round(100 * dt.y) / 100)
      }
      Ye(tt, et) {
        if (null === et) return void(null !== tt.metres && (tt.metres = null, tt.distance.textContent = ""));
        const Vt = Date.now();
        (null === tt.metres || (0, te.e)(et, tt.metres, tt.metresShownAt)) && (tt.metres = Math.round(et), tt.metresShownAt = Vt, tt.distance.textContent = (0, Pt.A)(ee.e.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(tt.metres)
        }))
      }
      mount(tt) {
        const et = {
            root: tt,
            distance: tt.querySelector(".FrontlinePointMarkerDistance"),
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
          Vt = tt.querySelector(".FrontlinePointMarkerLabels"),
          Ot = new ResizeObserver((() => {
            et.halfSize = {
              width: Math.max(tt.offsetWidth, Vt.offsetWidth) / 2,
              height: tt.offsetHeight / 2
            }, et.labelsBelow = Vt.offsetTop + Vt.offsetHeight - tt.offsetHeight, this.place(et)
          }));
        return Ot.observe(tt, {
          box: "border-box"
        }), Ot.observe(Vt, {
          box: "border-box"
        }), et.stopObserving = () => {
          Ot.disconnect()
        }, et
      }
    }
    var De = Vt(6631),
      me = Vt(2719);
    const de = "frontlineRoundEndChanged";
    class je {
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
      Qf(tt) {
        const et = "roundEnd" === tt[0] ? performance.now() + tt[5] : 0;
        this.view = {
          wire: tt,
          key: this.view.key + 1,
          endsAt: et
        }, Ht.j.sw(de, this.view, !0)
      }
    }
    const He = (0, qt.lazy)((() => (0, me.e)(Promise.all([Vt.e(239), Vt.e(202)]).then((() => Vt(42021))), (tt => tt.FrontlineMvpLineup)))),
      Xe = [4800, 4e3, 3200],
      Qe = [1, 0, 2],
      le = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Ee = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function fe(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Zt.h)(de, et.getView()),
        Ot = ot(Vt.endsAt);
      return "roundEnd" !== Vt.wire[0] || 1e3 * Ot < -2e3 ? null : (0, Gt.jsx)(we, {
        wire: Vt.wire,
        secondsLeft: Math.max(0, Math.ceil(Ot))
      }, Vt.key)
    }
    const we = (0, qt.memo)((function(tt) {
      let {
        wire: et,
        secondsLeft: Vt
      } = tt;
      const {
        t: Dt
      } = (0, Pt.H)(), [, mt, dt, jt, Ht, , Xt, Qt] = et, lt = (0, qt.useMemo)((() => Qe.filter((tt => tt < Qt.length))), [Qt]), Et = (0, qt.useMemo)((() => lt.map((tt => {
        const [, , , , , et, Vt] = Qt[tt];
        return {
          cosmetics: Ot.map(((tt, Vt) => [tt, et[Vt]])),
          size: 0 === tt ? 1.15 : .85,
          heldGun: {
            name: Vt,
            aimed: 0 === tt
          },
          showAfterMs: Xe[tt]
        }
      }))), [Qt, lt]);
      return (0, Gt.jsxs)("div", {
        className: ct()("FrontlineRoundEnd", `Result-${mt}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, Gt.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, Gt.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, Gt.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, Gt.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, Gt.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (ft = Dt(le[mt]), /\p{Script=Arabic}/u.test(ft) ? [ft] : (0, De.e)(ft)).map(((tt, et) => (0, Gt.jsx)("span", {
              style: {
                "--letter": et
              },
              children: tt
            }, et)))]
          }), (0, Gt.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [dt && "victory" === mt && (0, Gt.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Dt("frontlineRoundEnd:comeback")
            }), (0, Gt.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, Gt.jsx)("b", {
                className: "Friendly",
                children: jt
              }), " \u2013 ", (0, Gt.jsx)("b", {
                className: "Enemy",
                children: Ht
              })]
            })]
          })]
        }), lt.length > 0 && (0, Gt.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": lt.length
          },
          children: [(0, Gt.jsx)(qt.Suspense, {
            fallback: null,
            children: (0, Gt.jsx)(He, {
              className: "FrontlineRoundEndLineup",
              players: Et
            })
          }), lt.map((tt => (0, Gt.jsx)(ye, {
            mvp: Qt[tt],
            place: tt
          }, tt)))]
        }), (0, Gt.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Dt("frontlineRoundEnd:nextFront", {
            map: Xt,
            seconds: String(Vt)
          })
        })]
      });
      var ft
    }));

    function ye(tt) {
      let {
        mvp: et,
        place: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Pt.H)(), [qt, Dt, mt, dt, jt] = et, [Ht, Xt] = Ot(function(tt, et) {
        return 1 === et && "damage" !== tt ? `frontlineRoundEnd:${tt}One` : `frontlineRoundEnd:${tt}`
      }(mt, dt), {
        name: "\0",
        count: dt.toLocaleString()
      }).split("\0");
      return (0, Gt.jsxs)("div", {
        className: ct()("FrontlineMvpCard", `Place-${Vt+1}`, `Team-${Dt}`),
        style: {
          "--revealMs": `${Xe[Vt]}ms`
        },
        children: [(0, Gt.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Gt.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, Gt.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Ot(Ee[Vt])
        }), (0, Gt.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Ht, (0, Gt.jsx)("span", {
            className: "FrontlineMvpName",
            children: qt
          }), Xt]
        }), (0, Gt.jsx)("div", {
          className: "FrontlineMvpKit",
          children: jt
        })]
      })
    }
    const Ne = function(tt, et, Vt, Ot) {
      let {
        localPlayerId: mt
      } = Ot;
      const dt = new kt,
        jt = new je;
      let Ht = null,
        Xt = null,
        Qt = null,
        lt = null,
        Et = null,
        ft = [!1, !1];
      const wt = () => {
        var tt, et;
        const [Vt, Ot] = ft;
        null === (tt = Xt) || void 0 === tt || tt.Av(!Vt), null === (et = Qt) || void 0 === et || et.Av(!Ot)
      };
      return {
        onCreate: tt => {
          Ht = tt, Xt = new bt(tt, mt), Qt = new Kt(tt, mt), lt = new qe(dt), wt(), Et = (0, Dt.q)((0, qt.createElement)(qt.Fragment, null, (0, qt.createElement)(Yt, {
            hud: dt,
            crosshair: Xt,
            damage: Qt,
            markers: lt
          }), (0, qt.createElement)(fe, {
            controller: jt
          })))
        },
        onClose: () => {
          var tt, et, Vt, Ot;
          null === (tt = Et) || void 0 === tt || tt(), null === (et = Xt) || void 0 === et || et.dispose(), Xt = null, null === (Vt = Qt) || void 0 === Vt || Vt.dispose(), Qt = null, null === (Ot = lt) || void 0 === Ot || Ot.dispose(), lt = null, Ht = null
        },
        onAfterRender: (tt, et) => {
          var Vt, Ot, qt, Dt;
          null === (Vt = Xt) || void 0 === Vt || Vt.frame(tt, et.tanHalfFovY), null === (Ot = Qt) || void 0 === Ot || Ot.frame(et.cameraHeading), null === (qt = lt) || void 0 === qt || qt.frame(et, null !== (Dt = Ht) && void 0 !== Dt && Dt.checkValid(mt) ? Ht.YM(mt) : null)
        },
        onReceivedMessageFromServer: (tt, et) => {
          "frontlineHud" === tt ? dt.Qf(et) : "frontlineScoreboard" === tt ? dt.receiveScoreboard(et) : "frontlineRoundEnd" === tt ? jt.Qf(et) : "frontlinePrefs" === tt && (ft = et, wt())
        }
      }
    }
  },
  6631: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    const Ot = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function qt(tt) {
      return null === Ot ? Array.from(tt) : Array.from(Ot.segment(tt), (tt => {
        let {
          segment: et
        } = tt;
        return et
      }))
    }
  },
  38716: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      g: () => Dt
    });
    const Ot = new WeakMap;

    function qt(tt) {
      let et = Ot.get(tt);
      return et || (et = {
        hidden: tt.hidden,
        x: NaN,
        y: NaN
      }, Ot.set(tt, et)), et
    }

    function Dt(tt, et) {
      const Vt = qt(tt);
      Vt.hidden !== et && (Vt.hidden = et, tt.hidden = et)
    }

    function mt(tt, et, Vt) {
      const Ot = qt(tt);
      Ot.x === et && Ot.y === Vt || (Ot.x = et, Ot.y = Vt, tt.style.translate = `${et}vw ${Vt}vh`)
    }
  },
  37306: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    const Ot = {
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
for (const tt in modules) Object.freeze(modules[tt]);