export const id = 17;
export const ids = [17];
export const modules = {
  36772: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Qd,
      g: () => Ld,
      h: () => ld,
      j: () => od
    });
    var pd = kd(9234),
      Nd = kd(36779),
      Wd = kd(36783),
      Pd = kd(8620),
      Zd = kd(1459),
      gd = kd(56),
      Cd = kd(72),
      Kd = kd(1103);

    function od() {
      var dd;
      return (0, Zd.i)(Nd.e, (0, Nd.o)()), (0, Kd.jsx)(Kd.Fragment, {
        children: null === (dd = (0, Nd.o)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function ld(dd) {
      var Jd;
      let {
        show: kd
      } = dd;
      (0, Zd.i)(Nd.e, (0, Nd.o)());
      const Cd = null === (Jd = (0, Nd.o)()) || void 0 === Jd ? void 0 : Jd.menu;
      return (0, gd.useEffect)((() => {
        var dd;
        kd || (null === Cd || void 0 === Cd || null === (dd = Cd.onClose) || void 0 === dd || dd.call(Cd), (0, Wd.s)())
      }), [kd, Cd]), (0, gd.useEffect)((() => kd ? (0, Pd.g)(Wd.B, Wd.h) : void 0), [kd]), (0, Kd.jsx)(pd.b, {
        showing: kd,
        globallyUniqueKey: "clientGameMenu",
        children: null === Cd || void 0 === Cd ? void 0 : Cd.content
      })
    }

    function Qd(dd) {
      let {
        placement: Jd = "bottom"
      } = dd;
      return (0, Kd.jsx)("div", {
        id: `clientGameHud-${Jd}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ld(dd) {
      let {
        children: Jd,
        placement: kd = "bottom"
      } = dd;
      const [pd, Nd] = (0, gd.useState)(null);
      return (0, gd.useEffect)((() => {
        Nd(document.getElementById(`clientGameHud-${kd}`))
      }), [kd]), pd ? (0, Cd.createPortal)(Jd, pd) : null
    }
  },
  9234: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(4393),
      Nd = kd(4397);

    function Wd(dd) {
      let {
        children: Jd,
        showing: kd,
        globallyUniqueKey: Wd,
        alwaysMountChildren: Pd = !1,
        doGameplayStartStopOnShow: Zd = !0,
        keepsMovement: gd = !1
      } = dd;
      return (0, Nd.d)(!0, kd, Wd, gd), (0, pd.c)(Zd, kd), kd || Pd ? Jd : null
    }
  },
  36857: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      h: () => Pd,
      k: () => Zd,
      m: () => gd
    });
    var pd = kd(56),
      Nd = kd(2974);
    const Wd = 8,
      Pd = "InGameHeaderContainer",
      Zd = "TopRightElements";

    function gd(dd) {
      const [Jd] = (0, Nd.b)(), [kd, gd] = (0, pd.useState)(!1);
      return (0, pd.useLayoutEffect)((() => {
        if (!dd) return;
        const Jd = document.querySelector(`.${Pd}`),
          kd = document.querySelector(`.${Zd}`),
          pd = () => {
            const pd = dd.getBoundingClientRect(),
              Nd = Jd ? Jd.getBoundingClientRect().right : 0,
              Pd = kd ? kd.getBoundingClientRect().left : window.innerWidth,
              Zd = pd.left < Nd + Wd,
              Cd = pd.right > Pd - Wd;
            gd(Zd || Cd)
          };
        pd();
        const Nd = new ResizeObserver(pd);
        return Nd.observe(dd), Jd && Nd.observe(Jd), kd && Nd.observe(kd), () => {
          Nd.disconnect()
        }
      }), [dd, Jd]), kd
    }
  },
  36853: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    const pd = [{
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

    function Nd(dd, Jd, kd) {
      const Nd = Math.abs(dd - Jd),
        Wd = Date.now() - kd;
      for (const Pd of pd)
        if (dd < Pd.maxDist) return Nd >= Pd.hardUpdateDist || Wd > Pd.timeBetweenSoftChecks && Nd >= Pd.softUpdateDist;
      return !1
    }
  },
  8620: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      g: () => Nd
    });
    let pd = null;
    const Nd = function(dd) {
        const Jd = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pd = Jd, () => {
          pd === Jd && (pd = null)
        }
      },
      Wd = () => {
        var dd;
        return null !== (dd = pd) && void 0 !== dd && dd.canCycle() ? pd.cycle : null
      }
  },
  38674: (dd, Jd, kd) => {
    function pd(dd, Jd, kd) {
      var pd;
      const {
        width: Nd,
        height: Wd
      } = kd, Pd = null !== (pd = dd.text) && void 0 !== pd ? pd : dd, Zd = (Pd.x / 100 - .5) * Nd, gd = (Pd.y / 100 - .5) * Wd, Cd = Nd / 2 - Jd.x;
      if (null !== dd.text && Math.abs(Zd) <= Cd && gd >= Jd.top - Wd / 2 && gd <= Wd / 2 - Jd.bottom) return {
        x: Pd.x,
        y: Pd.y
      };
      const Kd = Math.min(0 === Zd ? 1 / 0 : Cd / Math.abs(Zd), gd > 0 ? (Wd / 2 - Jd.bottom) / gd : gd < 0 ? (Jd.top - Wd / 2) / gd : 1 / 0);
      return !Number.isFinite(Kd) || Kd < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Zd * Kd / Nd * 100,
        y: 50 + gd * Kd / Wd * 100
      }
    }
    kd.d(Jd, {
      e: () => pd
    })
  },
  36783: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Ld,
      D: () => Id,
      e: () => Wd,
      h: () => Od,
      i: () => ed,
      m: () => Zd,
      o: () => ld,
      s: () => Rd,
      w: () => od,
      x: () => Gd
    });
    var pd = kd(22),
      Nd = kd(29);
    const Wd = "clientGameInventoryButtonsChanged",
      Pd = new Map;

    function Zd() {
      return [...Pd.values()].sort(((dd, Jd) => {
        var kd, pd;
        return (null !== (kd = dd.order) && void 0 !== kd ? kd : 0) - (null !== (pd = Jd.order) && void 0 !== pd ? pd : 0)
      }))
    }
    let gd = null;

    function Cd(dd) {
      gd = dd
    }
    let Kd = !1;

    function od(dd) {
      Kd = !0;
      try {
        dd.onClick()
      } finally {
        Kd = !1
      }
      dd.panel && "clientGame" === pd.d.get("openInGameMenuName") && Cd(dd.id)
    }

    function ld() {
      return Kd
    }

    function Qd() {
      return Zd().filter((dd => dd.panel && !dd.disabled))
    }

    function Ld(dd) {
      const Jd = Qd(),
        kd = Jd.findIndex((dd => dd.id === gd));
      return !(kd < 0 || Jd.length < 2) && (od(Jd[(kd + dd + Jd.length) % Jd.length]), !0)
    }

    function Od() {
      return null !== gd && Qd().length > 1
    }

    function ed() {
      Cd(null)
    }

    function Rd() {
      "inventory" !== pd.d.get("openInGameMenuName") && Cd(null)
    }

    function Id() {
      const dd = gd;
      return Cd(null), dd
    }

    function Gd(dd) {
      return Pd.set(dd.id, dd), Nd.j.nO(Wd, Zd(), !0), () => {
        Pd.get(dd.id) === dd && (Pd.delete(dd.id), Nd.j.nO(Wd, Zd()))
      }
    }
  },
  36779: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      g: () => ed,
      j: () => Rd,
      m: () => ld,
      o: () => Cd,
      p: () => Od,
      t: () => Qd,
      w: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(36783);
    const Zd = "clientGameUiChanged";
    let gd = null;

    function Cd() {
      return gd
    }

    function Kd(dd, Jd) {
      const kd = {
        content: dd,
        menu: Jd
      };
      return gd = kd, Nd.j.nO(Zd, gd, !0), () => {
        gd === kd && (gd = null, Ld = !1, ed(), Nd.j.nO(Zd, null))
      }
    }
    let od = null;

    function ld() {
      return od
    }

    function Qd(dd) {
      return od = dd, () => {
        od === dd && (od = null)
      }
    }
    let Ld = !1;

    function Od() {
      const dd = pd.d.get("openInGameMenuName");
      "clientGame" !== dd && (Ld = "inventory" === dd), (0, Pd.o)() || (0, Pd.i)(), (0, Wd.p)(Wd.d), pd.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ed() {
      Id(!1)
    }

    function Rd() {
      Id(Ld)
    }

    function Id(dd) {
      "clientGame" === pd.d.get("openInGameMenuName") && pd.d.set({
        openInGameMenuName: dd ? "inventory" : null
      }), dd || (0, Pd.i)(), Ld = !1
    }
  },
  39539: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => RJ
    });
    const pd = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var Nd = kd(56),
      Wd = kd(36779),
      Pd = kd(37195),
      Zd = kd(36790),
      gd = kd(1753),
      Cd = kd(29);
    const Kd = {
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
    const od = 32;

    function ld(dd, Jd, kd, pd) {
      return {
        tag: "line",
        attrs: {
          x1: dd,
          y1: Jd,
          x2: kd,
          y2: pd,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function Qd(dd) {
      return {
        tag: "circle",
        attrs: {
          cx: od,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : od,
          r: dd,
          class: "Fill"
        }
      }
    }

    function Ld(dd, Jd) {
      return {
        tag: "path",
        attrs: {
          d: dd,
          "stroke-width": Jd
        }
      }
    }

    function Od(dd, Jd, kd) {
      return {
        tag: "circle",
        attrs: {
          cx: od,
          cy: od,
          r: dd,
          "stroke-width": Jd,
          class: kd
        }
      }
    }

    function ed(dd, Jd, kd) {
      return {
        tag: "text",
        attrs: {
          x: dd,
          y: Jd,
          class: "Fill Label"
        },
        text: kd
      }
    }
    const Rd = {
      pistol: dd => [ld(od, od - dd - 5, od, od - dd), ld(od - dd - 5, od, od - dd, od), ld(od + dd, od, od + dd + 5, od), Qd(1.4)],
      rifle: dd => [ld(od, od - dd - 8, od, od - dd), ld(od, od + dd, od, od + dd + 8), ld(od - dd - 8, od, od - dd, od), ld(od + dd, od, od + dd + 8, od), Qd(1)],
      smg: dd => {
        const Jd = Math.PI / 2,
          kd = [];
        for (let Pd = 0; Pd < 4; Pd++) kd.push((Nd = Pd * Jd + .35, Wd = (Pd + 1) * Jd - .35, Ld(`M${od+(pd=6+dd)*Math.cos(Nd)} ${od+pd*Math.sin(Nd)} A${pd} ${pd} 0 0 1 ${od+pd*Math.cos(Wd)} ${od+pd*Math.sin(Wd)}`, 2)));
        var pd, Nd, Wd;
        return [...kd, Qd(1.4)]
      },
      shotgun: dd => [Od(dd, 3, "Ring Outline"), Od(dd, 1.5, "Ring")],
      marksman: dd => [Ld(`M${26-dd/2} ${39+dd/2} L32 33 L${38+dd/2} ${39+dd/2}`, 2), ld(14 - dd, od, 24 - dd, od, 1.5), ld(40 + dd, od, 50 + dd, od, 1.5), ld(14 - dd, 30, 14 - dd, 34, 1.5), ld(50 + dd, 30, 50 + dd, 34, 1.5)],
      machineGun: dd => {
        const Jd = 10 + dd,
          kd = [];
        for (const [pd, Nd] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) kd.push(Ld(`M${od+pd*Jd} ${od+Nd*(Jd-5)} L${od+pd*Jd} ${od+Nd*Jd} L${od+pd*(Jd-5)} ${od+Nd*Jd}`, 2));
        return [...kd, ld(od, 28, od, 36, 1.5), ld(28, od, 36, od, 1.5)]
      },
      launcher: () => [ld(14, 30, 50, 30, 1.5), ld(od, 24, od, 52, 1.5), ld(28, 38, 36, 38, 1.5), ld(29, 44, 35, 44, 1.5), ld(30, 50, 34, 50, 1.5), ed(38, 40, "100"), ed(37, 46, "200"), Qd(1.4, 30)],
      melee: () => [Ld("M32 26 L38 32 L32 38 L26 32 Z", 1.5), Qd(1.2)],
      throwable: () => [Qd(1.6)]
    };

    function Id(dd) {
      let {
        tag: Jd,
        attrs: kd,
        text: pd
      } = dd, Nd = `<${Jd}`;
      for (const [Wd, Pd] of Object.entries(kd)) Nd += ` ${Wd}="${Pd}"`;
      return void 0 === pd ? `${Nd}/>` : `${Nd}>${pd}</${Jd}>`
    }
    class Gd {
      constructor(dd, Jd) {
        this.api = dd, this.localPlayerId = Jd, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = dd => {
          this.element = dd, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, dd && !this.enabled && (dd.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, gd.getRemInPx)()))
        }, this.tokens = [Cd.j.subscribe("aimingOverlay", (dd => {
          this.sniperOverlay = "sniper" === dd
        })), Cd.j.subscribe("mouseState", (dd => {
          let {
            isDown: Jd
          } = dd;
          this.mouseDown = Jd
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      XM(dd) {
        dd !== this.enabled && (this.enabled = dd, this.drawnVisible = null, dd || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(dd, Jd) {
        var kd, pd;
        if (!this.enabled) return;
        const {
          api: Nd
        } = this, Wd = Nd.isAlive(this.localPlayerId) && null !== (kd = null === (pd = Nd.Pkd(this.localPlayerId)) || void 0 === pd ? void 0 : pd.name) && void 0 !== kd ? kd : null, Pd = (Zd = Wd) && Kd[Zd] || null;
        var Zd;
        if (this.setOwnsCrosshair(null !== Pd), !this.element) return;
        const gd = Nd.getHeldGunInaccuracy(),
          Cd = null !== gd,
          od = null !== Pd && !this.sniperOverlay && Nd.isCrosshairShown();
        if (od !== this.drawnVisible && (this.drawnVisible = od, this.element.style.display = od ? "block" : "none"), !od) return;
        const ld = Cd ? function(dd) {
            return "launcher" === dd || "melee" === dd || "throwable" === dd ? "none" : "shotgun" === dd ? "cone" : "offset"
          }(Pd) : "none",
          Qd = null !== gd && void 0 !== gd ? gd : 0;
        "cone" === ld ? this.drawCone(Pd, this.coneRadiusVh(Qd, Jd) * this.gapPerVh, dd) : (this.coneDrawn = !1, this.draw(Pd, "none" === ld ? 2 : this.offsetGap(Qd)));
        const Ld = !Cd && this.mouseDown;
        Ld !== this.drawnPressed && (this.drawnPressed = Ld, this.element.classList.toggle("Pressed", Ld))
      }
      dispose() {
        for (const dd of this.tokens) Cd.j.unsubscribe(dd);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(dd, Jd) {
        var kd, pd;
        dd !== this.drawnFamily ? (this.drawnFamily = dd, this.drawnGap = Jd, this.element.innerHTML = function(dd, Jd) {
          return `<svg viewBox="0 0 64 64">${Rd[dd](Jd).map(Id).join("")}</svg>`
        }(dd, Jd), this.shapes = Array.from(null !== (kd = null === (pd = this.element.firstElementChild) || void 0 === pd ? void 0 : pd.children) && void 0 !== kd ? kd : [])) : Jd !== this.drawnGap && (this.drawnGap = Jd, function(dd, Jd, kd) {
          const pd = Rd[Jd](kd);
          for (let Nd = 0; Nd < pd.length; Nd++)
            for (const [Jd, kd] of Object.entries(pd[Nd].attrs)) {
              const pd = String(kd);
              dd[Nd].getAttribute(Jd) !== pd && dd[Nd].setAttribute(Jd, pd)
            }
        }(this.shapes, dd, Jd))
      }
      drawCone(dd, Jd, kd) {
        dd === this.drawnFamily && this.coneDrawn ? this.shownRadius += (Jd - this.shownRadius) * (1 - Math.exp(-kd / 80)) : this.shownRadius = Jd, this.coneDrawn = !0, this.draw(dd, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(dd, Jd) {
        if (!(Jd > 0)) return 1;
        const kd = dd * Pd.i / 2;
        return Math.max(50 * Math.tan(kd) / Jd, 1)
      }
      offsetGap(dd) {
        const Jd = 2 + ((0, Zd.i)(dd) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * Jd) / 2)
      }
      setOwnsCrosshair(dd) {
        dd !== this.ownsCrosshair && (this.ownsCrosshair = dd, document.body.classList.toggle("FrontlineCustomCrosshair", dd))
      }
    }
    const vd = "FrontlineCustomDamage",
      xd = .45,
      qd = .2;
    class Bd {
      constructor(dd, Jd) {
        this.api = dd, this.localPlayerId = Jd, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.Dd = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = dd => {
          var Jd, kd;
          this.clearHits(), this.root = dd, this.lowLayer = null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.querySelector(".FrontlineDamageLow")) && void 0 !== Jd ? Jd : null, this.arcLayer = null !== (kd = null === dd || void 0 === dd ? void 0 : dd.querySelector(".FrontlineDamageArcs")) && void 0 !== kd ? kd : null, this.showRoot(), this.drawLow()
        }, this.token = Cd.j.subscribe("damagedByOtherPlayer", (dd => {
          let {
            direction: Jd,
            Ud: kd
          } = dd;
          this.onHurt(Jd, kd)
        })), this.syncHealth(), document.body.classList.add(vd)
      }
      XM(dd) {
        dd !== this.enabled && (this.enabled = dd, document.body.classList.toggle(vd, dd), dd || this.clearHits(), this.showRoot())
      }
      frame(dd) {
        this.syncHealth(), this.cameraHeading = dd;
        for (const Jd of this.arcs) this.drawArcAngle(Jd)
      }
      dispose() {
        Cd.j.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(vd)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const dd = this.api.getClientOption(this.localPlayerId, "_health"),
          Jd = this.api.getClientOption(this.localPlayerId, "_shield"),
          kd = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(dd, this.readHealth) && Object.is(Jd, this.readShield) && Object.is(kd, this.readMaxHealth)) return;
        if (this.readHealth = dd, this.readShield = Jd, this.readMaxHealth = kd, null === dd || void 0 === dd || !kd) return this.lastHealthPool = null, this.maxHealth = null, this.Dd = 1, this.dead = !1, void this.drawLow();
        const pd = dd + (null !== Jd && void 0 !== Jd ? Jd : 0);
        if (null !== this.lastHealthPool && pd < this.lastHealthPool) {
          const dd = performance.now(),
            Jd = (this.lastHealthPool - pd) / kd;
          this.lastDrop = dd - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Jd,
            at: this.lastDrop.at
          } : {
            frac: Jd,
            at: dd
          }
        }
        this.dead = dd <= 0, this.dead && this.clearHits(), this.lastHealthPool = pd, this.maxHealth = kd, this.Dd = dd > 0 ? dd / kd : 1, this.drawLow()
      }
      onHurt(dd, Jd) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const kd = Math.min(1, this.takeDamageFrac(Jd) / .3);
        null !== dd && this.showArc(dd, kd), this.flashEdge(null === dd ? null : dd - this.cameraHeading, .4 + .6 * kd)
      }
      takeDamageFrac(dd) {
        if (void 0 !== dd && this.maxHealth) return dd / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: Jd
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, Jd
      }
      drawLow() {
        if (!this.lowLayer) return;
        const dd = ad((xd - this.Dd) / .25),
          Jd = ad((qd - this.Dd) / .15000000000000002),
          kd = this.Dd < xd;
        this.lowLayer.classList.toggle("Active", kd), this.lowLayer.classList.toggle("Critical", this.Dd < qd), this.lowLayer.style.opacity = String(kd ? .55 + .3 * dd + .15 * Jd : 0)
      }
      showArc(dd, Jd) {
        var kd, pd;
        if (!this.arcLayer) return;
        let Nd = this.arcs.find((Jd => sd(Jd.direction, dd) < .6));
        if (!Nd) {
          const Jd = document.createElement("div");
          Jd.className = "FrontlineDamageArc", Jd.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(Jd), Nd = {
            element: Jd,
            direction: dd,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Nd)
        }
        Nd.direction = dd, this.drawArcAngle(Nd);
        const Wd = Nd.fade ? Number(getComputedStyle(Nd.element).opacity) : 0;
        null === (kd = Nd.fade) || void 0 === kd || kd.cancel(), null === (pd = Nd.pop) || void 0 === pd || pd.cancel(), Nd.element.style.opacity = "1";
        const Pd = Nd.element.animate([{
          opacity: Wd
        }, {
          opacity: 1
        }], 144);
        Nd.fade = Pd, Nd.pop = Nd.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Jd
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const Zd = Nd;
        Pd.onfinish = () => {
          if (Zd.fade !== Pd) return;
          const dd = Zd.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          dd.startTime = Pd.startTime, Zd.fade = dd, dd.onfinish = () => {
            Zd.fade === dd && (Zd.element.remove(), Md(this.arcs, Zd))
          }
        }
      }
      drawArcAngle(dd) {
        const Jd = dd.direction - this.cameraHeading;
        (null === dd.drawnAngle || Math.abs(Jd - dd.drawnAngle) > .005) && (dd.drawnAngle = Jd, dd.element.style.rotate = `${Jd}rad`)
      }
      flashEdge(dd, Jd) {
        var kd, pd, Nd;
        if (!this.root) return;
        let Wd = this.flashes.find((Jd => null === Jd.angle || null === dd ? Jd.angle === dd : sd(Jd.angle, dd) < .5));
        if (!Wd) {
          const Jd = document.createElement("div");
          Jd.className = "FrontlineDamageFlash";
          const kd = Jd.appendChild(document.createElement("div"));
          kd.className = "FrontlineDamageFlashGlow", this.root.insertBefore(Jd, this.arcLayer), Wd = {
            element: Jd,
            glow: kd,
            angle: dd,
            level: 0,
            animation: null
          }, this.flashes.push(Wd)
        }
        const Pd = null === (kd = Wd.animation) || void 0 === kd || null === (pd = kd.effect) || void 0 === pd ? void 0 : pd.getComputedTiming().progress,
          Zd = null === Pd || void 0 === Pd ? 0 : Wd.level * (1 - Pd);
        Wd.level = Math.min(1, Math.max(Jd, Zd + .6 * Jd)), Wd.angle = dd;
        const {
          x: gd,
          y: Cd,
          rx: Kd,
          ry: od
        } = function(dd, Jd) {
          const kd = window.innerWidth,
            pd = window.innerHeight;
          if (null === dd) return {
            x: kd / 2,
            y: pd / 2,
            rx: 0,
            ry: 0
          };
          const Nd = Math.sin(dd),
            Wd = -Math.cos(dd),
            Pd = kd / 2 / Math.max(1e-6, Math.abs(Nd)),
            Zd = pd / 2 / Math.max(1e-6, Math.abs(Wd)),
            gd = Math.min(Pd, Zd),
            Cd = Math.round(kd / 2 + Nd * gd),
            Kd = Math.round(pd / 2 + Wd * gd),
            od = pd / 100 * (.85 + .25 * Jd),
            ld = Pd <= Zd,
            Qd = Math.round((ld ? 30 : 74) * od),
            Ld = Math.round((ld ? 58 : 26) * od);
          return {
            x: Cd,
            y: Kd,
            rx: Qd,
            ry: Ld
          }
        }(dd, Wd.level), {
          style: ld
        } = Wd.glow;
        Wd.glow.classList.toggle("Everywhere", null === dd), ld.setProperty("--glowX", `${gd}px`), ld.setProperty("--glowY", `${Cd}px`), ld.setProperty("--glowRx", `${Kd}px`), ld.setProperty("--glowRy", `${od}px`), Wd.element.style.transformOrigin = `${gd}px ${Cd}px`, null === (Nd = Wd.animation) || void 0 === Nd || Nd.cancel();
        const Qd = Wd.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Wd.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Wd.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Wd.level
        });
        Wd.animation = Qd;
        const Ld = Wd;
        Qd.onfinish = () => {
          Ld.animation === Qd && (Ld.element.remove(), Md(this.flashes, Ld))
        }
      }
      clearHits() {
        for (const pd of this.arcs) {
          var dd, Jd;
          null === (dd = pd.fade) || void 0 === dd || dd.cancel(), pd.fade = null, null === (Jd = pd.pop) || void 0 === Jd || Jd.cancel(), pd.element.remove()
        }
        this.arcs.length = 0;
        for (const pd of this.flashes) {
          var kd;
          null === (kd = pd.animation) || void 0 === kd || kd.cancel(), pd.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function sd(dd, Jd) {
      return Math.abs(Math.atan2(Math.sin(dd - Jd), Math.cos(dd - Jd)))
    }

    function ad(dd) {
      return Math.max(0, Math.min(1, dd))
    }

    function Md(dd, Jd) {
      const kd = dd.indexOf(Jd); - 1 !== kd && dd.splice(kd, 1)
    }
    var Fd = kd(1044),
      Yd = kd.n(Fd),
      md = kd(36772),
      bd = kd(36857),
      Sd = kd(1211),
      jd = kd(1459);
    const Xd = "frontlineHudChanged",
      fd = "frontlineScoreboardChanged";
    class nd {
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
      ZL(dd) {
        this.wire = dd, Cd.j.nO(Xd, dd, !0)
      }
      receiveScoreboard(dd) {
        let Jd = "scoreboard" === dd[0] ? performance.now() + dd[5] : 0;
        const kd = this.scoreboard.endsAt;
        0 !== Jd && 0 !== kd && Math.abs(Jd - kd) < 1e3 && (Jd = kd), this.scoreboard = {
          wire: dd,
          endsAt: Jd
        }, Cd.j.nO(fd, this.scoreboard, !0)
      }
    }
    var Ud = kd(1103);
    const yd = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function Dd(dd) {
      const [Jd, kd] = (0, Nd.useState)((() => (dd - performance.now()) / 1e3));
      return (0, Nd.useEffect)((() => {
        if (0 === dd) return;
        const Jd = () => {
          kd((dd - performance.now()) / 1e3)
        };
        Jd();
        const pd = window.setInterval(Jd, 250);
        return () => {
          window.clearInterval(pd)
        }
      }), [dd]), Jd
    }

    function Td(dd) {
      let {
        className: Jd,
        point: kd
      } = dd;
      const [pd, Nd, Wd, Pd, Zd, gd] = kd;
      return (0, Ud.jsxs)("div", {
        className: Yd()(Jd, `Owner-${Nd||"None"}`, `Leader-${Pd||"None"}`, {
          Contested: Zd,
          Here: gd
        }),
        children: [(0, Ud.jsx)("span", {
          className: "FrontlinePointLetter",
          children: pd
        }), (0, Ud.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Wd}%`
          }
        })]
      })
    }
    const Ed = (0, Nd.memo)((function(dd) {
        let {
          points: Jd,
          markers: kd
        } = dd;
        const {
          t: pd
        } = (0, Sd.B)();
        return Jd ? (0, Ud.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: Jd.map((dd => {
            const [Jd, , , , , , , Nd] = dd;
            return (0, Ud.jsxs)("div", {
              ref: kd.bindMarker(Jd),
              className: "FrontlinePointMarker",
              children: [(0, Ud.jsx)(Td, {
                className: "FrontlinePointMarkerTile",
                point: dd
              }), (0, Ud.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Nd && (0, Ud.jsx)("span", {
                  className: Yd()("FrontlinePointMarkerHomeTurf", `Team-${Nd}`),
                  children: pd("frontlineHud:homeTurf", {
                    team: pd(yd[Nd])
                  })
                }), (0, Ud.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, Jd)
          }))
        }) : null
      })),
      cd = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      hd = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function rd(dd) {
      let {
        hud: Jd,
        crosshair: kd,
        damage: pd,
        markers: Nd
      } = dd;
      const Wd = (0, jd.i)(Xd, Jd.getWire()),
        Pd = (0, jd.i)(fd, Jd.getScoreboard());
      return (0, Ud.jsxs)(Ud.Fragment, {
        children: [(0, Ud.jsx)(ud, {
          damage: pd
        }), (0, Ud.jsx)(Ed, {
          points: "scoreboard" === Pd.wire[0] ? Pd.wire[6] : null,
          markers: Nd
        }), (0, Ud.jsx)(Vd, {
          view: Pd
        }), (0, Ud.jsx)("div", {
          className: "FrontlineReticle",
          ref: kd.bindElement
        }), (0, Ud.jsx)(md.g, {
          children: (0, Ud.jsx)(td, {
            wire: Wd
          })
        })]
      })
    }
    const ud = (0, Nd.memo)((function(dd) {
        let {
          damage: Jd
        } = dd;
        return (0, Ud.jsxs)("div", {
          className: "FrontlineDamage",
          ref: Jd.bindElement,
          children: [(0, Ud.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, Ud.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, Ud.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      td = (0, Nd.memo)((function(dd) {
        let {
          wire: Jd
        } = dd;
        const {
          t: kd
        } = (0, Sd.B)();
        if ("capture" === Jd[0]) {
          const [, dd, pd, Nd, Wd, Pd, Zd] = Jd, gd = Math.round(Nd / 100 * 24);
          return (0, Ud.jsxs)("div", {
            className: Yd()("FrontlinePlate", `Status-${pd}`, `Leader-${Wd||"None"}`),
            children: [(0, Ud.jsx)(Ad, {}), (0, Ud.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, Ud.jsx)("span", {
                className: "FrontlineObjective",
                children: dd
              }), (0, Ud.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, Ud.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: kd("frontlineHud:objective", {
                    point: dd,
                    friendly: Pd,
                    enemy: Zd
                  })
                }), (0, Ud.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: kd(cd[pd])
                })]
              }), (0, Ud.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Nd).padStart(3, "0"), (0, Ud.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, Ud.jsx)(Hd, {
              segments: 24,
              lit: gd
            })]
          })
        }
        if ("alert" === Jd[0]) {
          const [, dd, pd, Nd] = Jd;
          return (0, Ud.jsxs)("div", {
            className: Yd()("FrontlinePlate", "FrontlineAlert", `Tone-${Nd}`),
            children: [(0, Ud.jsx)(Ad, {}), (0, Ud.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: kd(hd[dd])
            }), (0, Ud.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: pd
            })]
          })
        }
        return null
      })),
      Vd = (0, Nd.memo)((function(dd) {
        let {
          view: Jd
        } = dd;
        const {
          t: kd
        } = (0, Sd.B)(), pd = (0, Nd.useRef)(null), Wd = function(dd, Jd) {
          const [kd, pd] = (0, Nd.useState)(!1);
          return (0, Nd.useLayoutEffect)((() => {
            const Jd = dd.current;
            if (!Jd) return;
            const kd = document.querySelector(`.${bd.h}`),
              Nd = document.querySelector(`.${bd.k}`),
              Wd = () => {
                var dd;
                const Wd = Jd.querySelector(".FrontlineTeamTrack"),
                  Pd = (0, gd.getRemInPx)(),
                  Zd = Jd.getBoundingClientRect().width - 2 * (null !== (dd = null === Wd || void 0 === Wd ? void 0 : Wd.getBoundingClientRect().width) && void 0 !== dd ? dd : 0),
                  Cd = window.innerWidth / 2,
                  Kd = kd ? kd.getBoundingClientRect().right : 0,
                  od = Nd ? Nd.getBoundingClientRect().left : window.innerWidth,
                  ld = Math.min(Cd - Kd, od - Cd) - bd.d - Zd / 2,
                  Qd = ld < 6 * Pd,
                  Ld = Qd ? (window.innerWidth - Zd) / 2 - bd.d : ld;
                Jd.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(Ld,14*Pd)))}px`), pd(Qd)
              };
            Wd();
            const Pd = new ResizeObserver(Wd);
            for (const dd of [Jd, kd, Nd]) dd && Pd.observe(dd);
            return window.addEventListener("resize", Wd), () => {
              Pd.disconnect(), window.removeEventListener("resize", Wd)
            }
          }), [dd, Jd]), kd
        }(pd, "scoreboard" === Jd.wire[0]);
        if ("scoreboard" !== Jd.wire[0]) return null;
        const [, Pd, Zd, Cd, Kd, , od] = Jd.wire, ld = "Red" === Pd ? "Blue" : "Red";
        return (0, Ud.jsxs)("div", {
          className: Yd()("FrontlineScoreboardContainer", {
            Below: Wd
          }),
          children: [(0, Ud.jsxs)("div", {
            ref: pd,
            className: "FrontlineScoreboard",
            children: [(0, Ud.jsx)(Ad, {}), (0, Ud.jsx)(zd, {
              team: Pd,
              tickets: Zd,
              goal: Kd,
              side: "Friendly"
            }), (0, Ud.jsx)("div", {
              className: "FrontlinePoints",
              children: od.map((dd => (0, Ud.jsx)(Td, {
                className: "FrontlinePoint",
                point: dd
              }, dd[0])))
            }), (0, Ud.jsx)(zd, {
              team: ld,
              tickets: Cd,
              goal: Kd,
              side: "Enemy"
            })]
          }), (0, Ud.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, Ud.jsx)(wd, {
              endsAt: Jd.endsAt
            }), (0, Ud.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: kd("frontlineHud:ticketGoal", {
                goal: Kd
              })
            })]
          })]
        })
      }));

    function zd(dd) {
      let {
        team: Jd,
        tickets: kd,
        goal: pd,
        side: Nd
      } = dd;
      const {
        t: Wd
      } = (0, Sd.B)(), Pd = String(kd).padStart(3, "0"), Zd = Pd.search(/[1-9]/), gd = -1 === Zd ? Pd : Pd.slice(0, Zd), Cd = Math.min(20, Math.floor(kd / pd * 20));
      return (0, Ud.jsxs)("div", {
        className: Yd()("FrontlineTeamScore", Nd, `Team-${Jd}`),
        children: [(0, Ud.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, Ud.jsx)("span", {
            className: "Lead",
            children: gd
          }), -1 !== Zd && Pd.slice(Zd)]
        }), (0, Ud.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, Ud.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Wd(yd[Jd])
          }), (0, Ud.jsx)(Hd, {
            segments: 20,
            lit: Cd
          })]
        })]
      })
    }

    function Hd(dd) {
      let {
        segments: Jd,
        lit: kd
      } = dd;
      return (0, Ud.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: Jd
        }, ((dd, Jd) => (0, Ud.jsx)("i", {
          className: Yd()({
            Lit: Jd < kd
          })
        }, Jd)))
      })
    }

    function wd(dd) {
      let {
        endsAt: Jd
      } = dd;
      const kd = Math.max(0, Math.ceil(Dd(Jd)));
      return (0, Ud.jsxs)("div", {
        className: Yd()("FrontlineClock", {
          Urgent: kd <= 60
        }),
        children: [Math.floor(kd / 60), ":", String(kd % 60).padStart(2, "0")]
      })
    }

    function Ad() {
      return (0, Ud.jsxs)(Ud.Fragment, {
        children: [(0, Ud.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Ud.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var dJ = kd(36853),
      JJ = kd(1273),
      kJ = kd(38637),
      pJ = kd(38674);
    class NJ {
      constructor(dd) {
        var Jd;
        this.hud = dd, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.pL = !1, this.xI = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.xI), null === (Jd = window.visualViewport) || void 0 === Jd || Jd.addEventListener("resize", this.xI)
      }
      bindMarker(dd) {
        let Jd = this.refs.get(dd);
        return Jd || (Jd = Jd => {
          var kd;
          null === (kd = this.markers.get(dd)) || void 0 === kd || kd.stopObserving(), this.markers.delete(dd), Jd && !this.pL && this.markers.set(dd, this.mount(Jd))
        }, this.refs.set(dd, Jd)), Jd
      }
      frame(dd, Jd) {
        this.render = dd;
        const kd = this.hud.getScoreboard().wire;
        if ("scoreboard" === kd[0] && 0 !== this.markers.size)
          for (const [pd, , , , , , Nd] of kd[6]) {
            const dd = this.markers.get(pd);
            dd && Nd && (dd.target ??= [0, 0, 0], dd.target[0] = Nd[0], dd.target[1] = Nd[1] + 2.5, dd.target[2] = Nd[2], this.place(dd), this.vp(dd, Jd && Math.hypot(Nd[0] - Jd[0], Nd[1] - Jd[1], Nd[2] - Jd[2])))
          }
      }
      dispose() {
        var dd;
        this.pL = !0, window.removeEventListener("resize", this.xI), null === (dd = window.visualViewport) || void 0 === dd || dd.removeEventListener("resize", this.xI);
        for (const Jd of this.markers.values()) Jd.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(dd) {
        const {
          render: Jd,
          viewport: kd
        } = this;
        if (!Jd || !dd.target) return;
        const pd = (50 - Jd.screenBandPct.y) / 100 * kd.height,
          Nd = {
            x: dd.halfSize.width + 8,
            top: dd.halfSize.height + 8,
            bottom: dd.halfSize.height + dd.labelsBelow + pd
          },
          Wd = Jd.projectWorldPosToViewport(dd.target),
          Pd = null !== Wd && void 0 !== Wd ? Wd : Jd.projectWorldPosToScreenPos(dd.target),
          Zd = (0, pJ.e)({
            x: Pd.x,
            y: Pd.y,
            text: Wd
          }, Nd, kd);
        (0, kJ.d)(dd.root, Math.round(100 * Zd.x) / 100, Math.round(100 * Zd.y) / 100)
      }
      vp(dd, Jd) {
        if (null === Jd) return void(null !== dd.metres && (dd.metres = null, dd.distance.textContent = ""));
        const kd = Date.now();
        (null === dd.metres || (0, dJ.e)(Jd, dd.metres, dd.metresShownAt)) && (dd.metres = Math.round(Jd), dd.metresShownAt = kd, dd.distance.textContent = (0, Sd.x)(JJ.c.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(dd.metres)
        }))
      }
      mount(dd) {
        const Jd = {
            root: dd,
            distance: dd.querySelector(".FrontlinePointMarkerDistance"),
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
          kd = dd.querySelector(".FrontlinePointMarkerLabels"),
          pd = new ResizeObserver((() => {
            Jd.halfSize = {
              width: Math.max(dd.offsetWidth, kd.offsetWidth) / 2,
              height: dd.offsetHeight / 2
            }, Jd.labelsBelow = kd.offsetTop + kd.offsetHeight - dd.offsetHeight, this.place(Jd)
          }));
        return pd.observe(dd, {
          box: "border-box"
        }), pd.observe(kd, {
          box: "border-box"
        }), Jd.stopObserving = () => {
          pd.disconnect()
        }, Jd
      }
    }
    var WJ = kd(6309),
      PJ = kd(2502);
    const ZJ = "frontlineRoundEndChanged";
    class gJ {
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
      ZL(dd) {
        const Jd = "roundEnd" === dd[0] ? performance.now() + dd[5] : 0;
        this.view = {
          wire: dd,
          key: this.view.key + 1,
          endsAt: Jd
        }, Cd.j.nO(ZJ, this.view, !0)
      }
    }
    const CJ = (0, Nd.lazy)((() => (0, PJ.d)(kd.e(192).then((() => kd(41715))), (dd => dd.FrontlineMvpLineup)))),
      KJ = [4800, 4e3, 3200],
      oJ = [1, 0, 2],
      lJ = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      QJ = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function LJ(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, jd.i)(ZJ, Jd.getView()),
        pd = Dd(kd.endsAt);
      return "roundEnd" !== kd.wire[0] || 1e3 * pd < -2e3 ? null : (0, Ud.jsx)(OJ, {
        wire: kd.wire,
        secondsLeft: Math.max(0, Math.ceil(pd))
      }, kd.key)
    }
    const OJ = (0, Nd.memo)((function(dd) {
      let {
        wire: Jd,
        secondsLeft: kd
      } = dd;
      const {
        t: Wd
      } = (0, Sd.B)(), [, Pd, Zd, gd, Cd, , Kd, od] = Jd, ld = (0, Nd.useMemo)((() => oJ.filter((dd => dd < od.length))), [od]), Qd = (0, Nd.useMemo)((() => ld.map((dd => {
        const [, , , , , Jd, kd] = od[dd];
        return {
          cosmetics: pd.map(((dd, kd) => [dd, Jd[kd]])),
          size: 0 === dd ? 1.15 : .85,
          heldGun: {
            name: kd,
            aimed: 0 === dd
          },
          showAfterMs: KJ[dd]
        }
      }))), [od, ld]);
      return (0, Ud.jsxs)("div", {
        className: Yd()("FrontlineRoundEnd", `Result-${Pd}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, Ud.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, Ud.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, Ud.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, Ud.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, Ud.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (Ld = Wd(lJ[Pd]), /\p{Script=Arabic}/u.test(Ld) ? [Ld] : (0, WJ.e)(Ld)).map(((dd, Jd) => (0, Ud.jsx)("span", {
              style: {
                "--letter": Jd
              },
              children: dd
            }, Jd)))]
          }), (0, Ud.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [Zd && "victory" === Pd && (0, Ud.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Wd("frontlineRoundEnd:comeback")
            }), (0, Ud.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, Ud.jsx)("b", {
                className: "Friendly",
                children: gd
              }), " \u2013 ", (0, Ud.jsx)("b", {
                className: "Enemy",
                children: Cd
              })]
            })]
          })]
        }), ld.length > 0 && (0, Ud.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": ld.length
          },
          children: [(0, Ud.jsx)(Nd.Suspense, {
            fallback: null,
            children: (0, Ud.jsx)(CJ, {
              className: "FrontlineRoundEndLineup",
              players: Qd
            })
          }), ld.map((dd => (0, Ud.jsx)(eJ, {
            mvp: od[dd],
            place: dd
          }, dd)))]
        }), (0, Ud.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Wd("frontlineRoundEnd:nextFront", {
            map: Kd,
            seconds: String(kd)
          })
        })]
      });
      var Ld
    }));

    function eJ(dd) {
      let {
        mvp: Jd,
        place: kd
      } = dd;
      const {
        t: pd
      } = (0, Sd.B)(), [Nd, Wd, Pd, Zd, gd] = Jd, [Cd, Kd] = pd(function(dd, Jd) {
        return 1 === Jd && "damage" !== dd ? `frontlineRoundEnd:${dd}One` : `frontlineRoundEnd:${dd}`
      }(Pd, Zd), {
        name: "\0",
        count: Zd.toLocaleString()
      }).split("\0");
      return (0, Ud.jsxs)("div", {
        className: Yd()("FrontlineMvpCard", `Place-${kd+1}`, `Team-${Wd}`),
        style: {
          "--revealMs": `${KJ[kd]}ms`
        },
        children: [(0, Ud.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Ud.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, Ud.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: pd(QJ[kd])
        }), (0, Ud.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Cd, (0, Ud.jsx)("span", {
            className: "FrontlineMvpName",
            children: Nd
          }), Kd]
        }), (0, Ud.jsx)("div", {
          className: "FrontlineMvpKit",
          children: gd
        })]
      })
    }
    const RJ = function(dd, Jd, kd, pd) {
      let {
        localPlayerId: Pd
      } = pd;
      const Zd = new nd,
        gd = new gJ;
      let Cd = null,
        Kd = null,
        od = null,
        ld = null,
        Qd = null,
        Ld = [!1, !1];
      const Od = () => {
        var dd, Jd;
        const [kd, pd] = Ld;
        null === (dd = Kd) || void 0 === dd || dd.XM(!kd), null === (Jd = od) || void 0 === Jd || Jd.XM(!pd)
      };
      return {
        onCreate: dd => {
          Cd = dd, Kd = new Gd(dd, Pd), od = new Bd(dd, Pd), ld = new NJ(Zd), Od(), Qd = (0, Wd.w)((0, Nd.createElement)(Nd.Fragment, null, (0, Nd.createElement)(rd, {
            hud: Zd,
            crosshair: Kd,
            damage: od,
            markers: ld
          }), (0, Nd.createElement)(LJ, {
            controller: gd
          })))
        },
        onClose: () => {
          var dd, Jd, kd, pd;
          null === (dd = Qd) || void 0 === dd || dd(), null === (Jd = Kd) || void 0 === Jd || Jd.dispose(), Kd = null, null === (kd = od) || void 0 === kd || kd.dispose(), od = null, null === (pd = ld) || void 0 === pd || pd.dispose(), ld = null, Cd = null
        },
        onAfterRender: (dd, Jd) => {
          var kd, pd, Nd, Wd;
          null === (kd = Kd) || void 0 === kd || kd.frame(dd, Jd.tanHalfFovY), null === (pd = od) || void 0 === pd || pd.frame(Jd.cameraHeading), null === (Nd = ld) || void 0 === Nd || Nd.frame(Jd, null !== (Wd = Cd) && void 0 !== Wd && Wd.checkValid(Pd) ? Cd.yI(Pd) : null)
        },
        onReceivedMessageFromServer: (dd, Jd) => {
          "frontlineHud" === dd ? Zd.ZL(Jd) : "frontlineScoreboard" === dd ? Zd.receiveScoreboard(Jd) : "frontlineRoundEnd" === dd ? gd.ZL(Jd) : "frontlinePrefs" === dd && (Ld = Jd, Od())
        }
      }
    }
  },
  6309: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    const pd = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Nd(dd) {
      return null === pd ? Array.from(dd) : Array.from(pd.segment(dd), (dd => {
        let {
          segment: Jd
        } = dd;
        return Jd
      }))
    }
  },
  38637: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      f: () => Wd
    });
    const pd = new WeakMap;

    function Nd(dd) {
      let Jd = pd.get(dd);
      return Jd || (Jd = {
        hidden: dd.hidden,
        x: NaN,
        y: NaN
      }, pd.set(dd, Jd)), Jd
    }

    function Wd(dd, Jd) {
      const kd = Nd(dd);
      kd.hidden !== Jd && (kd.hidden = Jd, dd.hidden = Jd)
    }

    function Pd(dd, Jd, kd) {
      const pd = Nd(dd);
      pd.x === Jd && pd.y === kd || (pd.x = Jd, pd.y = kd, dd.style.translate = `${Jd}vw ${kd}vh`)
    }
  },
  37212: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    const pd = {
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
for (const dd in modules) Object.freeze(modules[dd]);