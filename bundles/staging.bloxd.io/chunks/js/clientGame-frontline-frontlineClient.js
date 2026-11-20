export const id = 17;
export const ids = [17];
export const modules = {
  36132: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => wv,
      g: () => av,
      i: () => Wv,
      m: () => Tv
    });
    var hv = Pv(8997),
      Sv = Pv(36137),
      ev = Pv(36139),
      gv = Pv(8413),
      pv = Pv(1439),
      dv = Pv(52),
      Nv = Pv(62),
      lv = Pv(1082);

    function Tv() {
      var vv;
      return (0, pv.j)(Sv.d, (0, Sv.q)()), (0, lv.jsx)(lv.Fragment, {
        children: null === (vv = (0, Sv.q)()) || void 0 === vv ? void 0 : vv.content
      })
    }

    function Wv(vv) {
      var zv;
      let {
        show: Pv
      } = vv;
      (0, pv.j)(Sv.d, (0, Sv.q)());
      const Nv = null === (zv = (0, Sv.q)()) || void 0 === zv ? void 0 : zv.menu;
      return (0, dv.useEffect)((() => {
        var vv;
        Pv || (null === Nv || void 0 === Nv || null === (vv = Nv.onClose) || void 0 === vv || vv.call(Nv), (0, ev.o)())
      }), [Pv, Nv]), (0, dv.useEffect)((() => Pv ? (0, gv.f)(ev.y, ev.c) : void 0), [Pv]), (0, lv.jsx)(hv.d, {
        showing: Pv,
        globallyUniqueKey: "clientGameMenu",
        children: null === Nv || void 0 === Nv ? void 0 : Nv.content
      })
    }

    function wv(vv) {
      let {
        placement: zv = "bottom"
      } = vv;
      return (0, lv.jsx)("div", {
        id: `clientGameHud-${zv}`,
        style: {
          display: "contents"
        }
      })
    }

    function av(vv) {
      let {
        children: zv,
        placement: Pv = "bottom"
      } = vv;
      const [hv, Sv] = (0, dv.useState)(null);
      return (0, dv.useEffect)((() => {
        Sv(document.getElementById(`clientGameHud-${Pv}`))
      }), [Pv]), hv ? (0, Nv.createPortal)(zv, hv) : null
    }
  },
  8997: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(4287),
      Sv = Pv(4292);

    function ev(vv) {
      let {
        children: zv,
        showing: Pv,
        globallyUniqueKey: ev,
        alwaysMountChildren: gv = !1,
        doGameplayStartStopOnShow: pv = !0,
        keepsMovement: dv = !1
      } = vv;
      return (0, Sv.e)(!0, Pv, ev, dv), (0, hv.b)(pv, Pv), Pv || gv ? zv : null
    }
  },
  36198: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      i: () => gv,
      m: () => pv,
      q: () => dv
    });
    var hv = Pv(52),
      Sv = Pv(2899);
    const ev = 8,
      gv = "InGameHeaderContainer",
      pv = "TopRightElements";

    function dv(vv) {
      const [zv] = (0, Sv.d)(), [Pv, dv] = (0, hv.useState)(!1);
      return (0, hv.useLayoutEffect)((() => {
        if (!vv) return;
        const zv = document.querySelector(`.${gv}`),
          Pv = document.querySelector(`.${pv}`),
          hv = () => {
            const hv = vv.getBoundingClientRect(),
              Sv = zv ? zv.getBoundingClientRect().right : 0,
              gv = Pv ? Pv.getBoundingClientRect().left : window.innerWidth,
              pv = hv.left < Sv + ev,
              Nv = hv.right > gv - ev;
            dv(pv || Nv)
          };
        hv();
        const Sv = new ResizeObserver(hv);
        return Sv.observe(vv), zv && Sv.observe(zv), Pv && Sv.observe(Pv), () => {
          Sv.disconnect()
        }
      }), [vv, zv]), Pv
    }
  },
  36193: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv
    });
    const hv = [{
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

    function Sv(vv, zv, Pv) {
      const Sv = Math.abs(vv - zv),
        ev = Date.now() - Pv;
      for (const gv of hv)
        if (vv < gv.maxDist) return Sv >= gv.hardUpdateDist || ev > gv.timeBetweenSoftChecks && Sv >= gv.softUpdateDist;
      return !1
    }
  },
  8413: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      f: () => Sv
    });
    let hv = null;
    const Sv = function(vv) {
        const zv = {
          cycle: vv,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return hv = zv, () => {
          hv === zv && (hv = null)
        }
      },
      ev = () => {
        var vv;
        return null !== (vv = hv) && void 0 !== vv && vv.canCycle() ? hv.cycle : null
      }
  },
  38072: (vv, zv, Pv) => {
    function hv(vv, zv, Pv) {
      var hv;
      const {
        width: Sv,
        height: ev
      } = Pv, gv = null !== (hv = vv.text) && void 0 !== hv ? hv : vv, pv = (gv.x / 100 - .5) * Sv, dv = (gv.y / 100 - .5) * ev, Nv = Sv / 2 - zv.x;
      if (null !== vv.text && Math.abs(pv) <= Nv && dv >= zv.top - ev / 2 && dv <= ev / 2 - zv.bottom) return {
        x: gv.x,
        y: gv.y
      };
      const lv = Math.min(0 === pv ? 1 / 0 : Nv / Math.abs(pv), dv > 0 ? (ev / 2 - zv.bottom) / dv : dv < 0 ? (zv.top - ev / 2) / dv : 1 / 0);
      return !Number.isFinite(lv) || lv < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + pv * lv / Sv * 100,
        y: 50 + dv * lv / ev * 100
      }
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  36139: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => sv,
      e: () => Cv,
      i: () => pv,
      k: () => Wv,
      o: () => iv,
      r: () => Tv,
      u: () => Gv,
      y: () => av,
      z: () => cv
    });
    var hv = Pv(22),
      Sv = Pv(26);
    const ev = "clientGameInventoryButtonsChanged",
      gv = new Map;

    function pv() {
      return [...gv.values()].sort(((vv, zv) => {
        var Pv, hv;
        return (null !== (Pv = vv.order) && void 0 !== Pv ? Pv : 0) - (null !== (hv = zv.order) && void 0 !== hv ? hv : 0)
      }))
    }
    let dv = null;

    function Nv(vv) {
      dv = vv
    }
    let lv = !1;

    function Tv(vv) {
      lv = !0;
      try {
        vv.onClick()
      } finally {
        lv = !1
      }
      vv.panel && "clientGame" === hv.c.get("openInGameMenuName") && Nv(vv.id)
    }

    function Wv() {
      return lv
    }

    function wv() {
      return pv().filter((vv => vv.panel && !vv.disabled))
    }

    function av(vv) {
      const zv = wv(),
        Pv = zv.findIndex((vv => vv.id === dv));
      return !(Pv < 0 || zv.length < 2) && (Tv(zv[(Pv + vv + zv.length) % zv.length]), !0)
    }

    function sv() {
      return null !== dv && wv().length > 1
    }

    function Cv() {
      Nv(null)
    }

    function iv() {
      "inventory" !== hv.c.get("openInGameMenuName") && Nv(null)
    }

    function cv() {
      const vv = dv;
      return Nv(null), vv
    }

    function Gv(vv) {
      return gv.set(vv.id, vv), Sv.j.zC(ev, pv(), !0), () => {
        gv.get(vv.id) === vv && (gv.delete(vv.id), Sv.j.zC(ev, pv()))
      }
    }
  },
  36137: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      g: () => Cv,
      j: () => iv,
      m: () => Wv,
      q: () => Nv,
      r: () => sv,
      u: () => wv,
      w: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(36139);
    const pv = "clientGameUiChanged";
    let dv = null;

    function Nv() {
      return dv
    }

    function lv(vv, zv) {
      const Pv = {
        content: vv,
        menu: zv
      };
      return dv = Pv, Sv.j.zC(pv, dv, !0), () => {
        dv === Pv && (dv = null, av = !1, Cv(), Sv.j.zC(pv, null))
      }
    }
    let Tv = null;

    function Wv() {
      return Tv
    }

    function wv(vv) {
      return Tv = vv, () => {
        Tv === vv && (Tv = null)
      }
    }
    let av = !1;

    function sv() {
      const vv = hv.c.get("openInGameMenuName");
      "clientGame" !== vv && (av = "inventory" === vv), (0, gv.k)() || (0, gv.e)(), (0, ev.r)(ev.e), hv.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Cv() {
      cv(!1)
    }

    function iv() {
      cv(av)
    }

    function cv(vv) {
      "clientGame" === hv.c.get("openInGameMenuName") && hv.c.set({
        openInGameMenuName: vv ? "inventory" : null
      }), vv || (0, gv.e)(), av = !1
    }
  },
  38891: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Cz
    });
    const hv = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var Sv = Pv(52),
      ev = Pv(36137),
      gv = Pv(36542),
      pv = Pv(36151),
      dv = Pv(1692),
      Nv = Pv(26);
    const lv = {
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
    const Tv = 32;

    function Wv(vv, zv, Pv, hv) {
      return {
        tag: "line",
        attrs: {
          x1: vv,
          y1: zv,
          x2: Pv,
          y2: hv,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function wv(vv) {
      return {
        tag: "circle",
        attrs: {
          cx: Tv,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tv,
          r: vv,
          class: "Fill"
        }
      }
    }

    function av(vv, zv) {
      return {
        tag: "path",
        attrs: {
          d: vv,
          "stroke-width": zv
        }
      }
    }

    function sv(vv, zv, Pv) {
      return {
        tag: "circle",
        attrs: {
          cx: Tv,
          cy: Tv,
          r: vv,
          "stroke-width": zv,
          class: Pv
        }
      }
    }

    function Cv(vv, zv, Pv) {
      return {
        tag: "text",
        attrs: {
          x: vv,
          y: zv,
          class: "Fill Label"
        },
        text: Pv
      }
    }
    const iv = {
      pistol: vv => [Wv(Tv, Tv - vv - 5, Tv, Tv - vv), Wv(Tv - vv - 5, Tv, Tv - vv, Tv), Wv(Tv + vv, Tv, Tv + vv + 5, Tv), wv(1.4)],
      rifle: vv => [Wv(Tv, Tv - vv - 8, Tv, Tv - vv), Wv(Tv, Tv + vv, Tv, Tv + vv + 8), Wv(Tv - vv - 8, Tv, Tv - vv, Tv), Wv(Tv + vv, Tv, Tv + vv + 8, Tv), wv(1)],
      smg: vv => {
        const zv = Math.PI / 2,
          Pv = [];
        for (let gv = 0; gv < 4; gv++) Pv.push((Sv = gv * zv + .35, ev = (gv + 1) * zv - .35, av(`M${Tv+(hv=6+vv)*Math.cos(Sv)} ${Tv+hv*Math.sin(Sv)} A${hv} ${hv} 0 0 1 ${Tv+hv*Math.cos(ev)} ${Tv+hv*Math.sin(ev)}`, 2)));
        var hv, Sv, ev;
        return [...Pv, wv(1.4)]
      },
      shotgun: vv => [sv(vv, 3, "Ring Outline"), sv(vv, 1.5, "Ring")],
      marksman: vv => [av(`M${26-vv/2} ${39+vv/2} L32 33 L${38+vv/2} ${39+vv/2}`, 2), Wv(14 - vv, Tv, 24 - vv, Tv, 1.5), Wv(40 + vv, Tv, 50 + vv, Tv, 1.5), Wv(14 - vv, 30, 14 - vv, 34, 1.5), Wv(50 + vv, 30, 50 + vv, 34, 1.5)],
      machineGun: vv => {
        const zv = 10 + vv,
          Pv = [];
        for (const [hv, Sv] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) Pv.push(av(`M${Tv+hv*zv} ${Tv+Sv*(zv-5)} L${Tv+hv*zv} ${Tv+Sv*zv} L${Tv+hv*(zv-5)} ${Tv+Sv*zv}`, 2));
        return [...Pv, Wv(Tv, 28, Tv, 36, 1.5), Wv(28, Tv, 36, Tv, 1.5)]
      },
      launcher: () => [Wv(14, 30, 50, 30, 1.5), Wv(Tv, 24, Tv, 52, 1.5), Wv(28, 38, 36, 38, 1.5), Wv(29, 44, 35, 44, 1.5), Wv(30, 50, 34, 50, 1.5), Cv(38, 40, "100"), Cv(37, 46, "200"), wv(1.4, 30)],
      melee: () => [av("M32 26 L38 32 L32 38 L26 32 Z", 1.5), wv(1.2)],
      throwable: () => [wv(1.6)]
    };

    function cv(vv) {
      let {
        tag: zv,
        attrs: Pv,
        text: hv
      } = vv, Sv = `<${zv}`;
      for (const [ev, gv] of Object.entries(Pv)) Sv += ` ${ev}="${gv}"`;
      return void 0 === hv ? `${Sv}/>` : `${Sv}>${hv}</${zv}>`
    }
    class Gv {
      constructor(vv, zv) {
        this.api = vv, this.localPlayerId = zv, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = vv => {
          this.element = vv, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, vv && !this.enabled && (vv.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, dv.getRemInPx)()))
        }, this.tokens = [Nv.j.subscribe("aimingOverlay", (vv => {
          this.sniperOverlay = "sniper" === vv
        })), Nv.j.subscribe("mouseState", (vv => {
          let {
            isDown: zv
          } = vv;
          this.mouseDown = zv
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      uF(vv) {
        vv !== this.enabled && (this.enabled = vv, this.drawnVisible = null, vv || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(vv, zv) {
        var Pv, hv;
        if (!this.enabled) return;
        const {
          api: Sv
        } = this, ev = Sv.isAlive(this.localPlayerId) && null !== (Pv = null === (hv = Sv.Avv(this.localPlayerId)) || void 0 === hv ? void 0 : hv.name) && void 0 !== Pv ? Pv : null, gv = (pv = ev) && lv[pv] || null;
        var pv;
        if (this.setOwnsCrosshair(null !== gv), !this.element) return;
        const dv = Sv.getHeldGunInaccuracy(),
          Nv = null !== dv,
          Tv = null !== gv && !this.sniperOverlay && Sv.isCrosshairShown();
        if (Tv !== this.drawnVisible && (this.drawnVisible = Tv, this.element.style.display = Tv ? "block" : "none"), !Tv) return;
        const Wv = Nv ? function(vv) {
            return "launcher" === vv || "melee" === vv || "throwable" === vv ? "none" : "shotgun" === vv ? "cone" : "offset"
          }(gv) : "none",
          wv = null !== dv && void 0 !== dv ? dv : 0;
        "cone" === Wv ? this.drawCone(gv, this.coneRadiusVh(wv, zv) * this.gapPerVh, vv) : (this.coneDrawn = !1, this.draw(gv, "none" === Wv ? 2 : this.offsetGap(wv)));
        const av = !Nv && this.mouseDown;
        av !== this.drawnPressed && (this.drawnPressed = av, this.element.classList.toggle("Pressed", av))
      }
      dispose() {
        for (const vv of this.tokens) Nv.j.unsubscribe(vv);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(vv, zv) {
        var Pv, hv;
        vv !== this.drawnFamily ? (this.drawnFamily = vv, this.drawnGap = zv, this.element.innerHTML = function(vv, zv) {
          return `<svg viewBox="0 0 64 64">${iv[vv](zv).map(cv).join("")}</svg>`
        }(vv, zv), this.shapes = Array.from(null !== (Pv = null === (hv = this.element.firstElementChild) || void 0 === hv ? void 0 : hv.children) && void 0 !== Pv ? Pv : [])) : zv !== this.drawnGap && (this.drawnGap = zv, function(vv, zv, Pv) {
          const hv = iv[zv](Pv);
          for (let Sv = 0; Sv < hv.length; Sv++)
            for (const [zv, Pv] of Object.entries(hv[Sv].attrs)) {
              const hv = String(Pv);
              vv[Sv].getAttribute(zv) !== hv && vv[Sv].setAttribute(zv, hv)
            }
        }(this.shapes, vv, zv))
      }
      drawCone(vv, zv, Pv) {
        vv === this.drawnFamily && this.coneDrawn ? this.shownRadius += (zv - this.shownRadius) * (1 - Math.exp(-Pv / 80)) : this.shownRadius = zv, this.coneDrawn = !0, this.draw(vv, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(vv, zv) {
        if (!(zv > 0)) return 1;
        const Pv = vv * gv.l / 2;
        return Math.max(50 * Math.tan(Pv) / zv, 1)
      }
      offsetGap(vv) {
        const zv = 2 + ((0, pv.d)(vv) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * zv) / 2)
      }
      setOwnsCrosshair(vv) {
        vv !== this.ownsCrosshair && (this.ownsCrosshair = vv, document.body.classList.toggle("FrontlineCustomCrosshair", vv))
      }
    }
    const mv = "FrontlineCustomDamage",
      jv = .45,
      fv = .2;
    class Fv {
      constructor(vv, zv) {
        this.api = vv, this.localPlayerId = zv, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.Uv = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = vv => {
          var zv, Pv;
          this.clearHits(), this.root = vv, this.lowLayer = null !== (zv = null === vv || void 0 === vv ? void 0 : vv.querySelector(".FrontlineDamageLow")) && void 0 !== zv ? zv : null, this.arcLayer = null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.querySelector(".FrontlineDamageArcs")) && void 0 !== Pv ? Pv : null, this.showRoot(), this.drawLow()
        }, this.token = Nv.j.subscribe("damagedByOtherPlayer", (vv => {
          let {
            direction: zv,
            Kv: Pv
          } = vv;
          this.onHurt(zv, Pv)
        })), this.syncHealth(), document.body.classList.add(mv)
      }
      uF(vv) {
        vv !== this.enabled && (this.enabled = vv, document.body.classList.toggle(mv, vv), vv || this.clearHits(), this.showRoot())
      }
      frame(vv) {
        this.syncHealth(), this.cameraHeading = vv;
        for (const zv of this.arcs) this.drawArcAngle(zv)
      }
      dispose() {
        Nv.j.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(mv)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const vv = this.api.getClientOption(this.localPlayerId, "_health"),
          zv = this.api.getClientOption(this.localPlayerId, "_shield"),
          Pv = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(vv, this.readHealth) && Object.is(zv, this.readShield) && Object.is(Pv, this.readMaxHealth)) return;
        if (this.readHealth = vv, this.readShield = zv, this.readMaxHealth = Pv, null === vv || void 0 === vv || !Pv) return this.lastHealthPool = null, this.maxHealth = null, this.Uv = 1, this.dead = !1, void this.drawLow();
        const hv = vv + (null !== zv && void 0 !== zv ? zv : 0);
        if (null !== this.lastHealthPool && hv < this.lastHealthPool) {
          const vv = performance.now(),
            zv = (this.lastHealthPool - hv) / Pv;
          this.lastDrop = vv - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + zv,
            at: this.lastDrop.at
          } : {
            frac: zv,
            at: vv
          }
        }
        this.dead = vv <= 0, this.dead && this.clearHits(), this.lastHealthPool = hv, this.maxHealth = Pv, this.Uv = vv > 0 ? vv / Pv : 1, this.drawLow()
      }
      onHurt(vv, zv) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const Pv = Math.min(1, this.takeDamageFrac(zv) / .3);
        null !== vv && this.showArc(vv, Pv), this.flashEdge(null === vv ? null : vv - this.cameraHeading, .4 + .6 * Pv)
      }
      takeDamageFrac(vv) {
        if (void 0 !== vv && this.maxHealth) return vv / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: zv
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, zv
      }
      drawLow() {
        if (!this.lowLayer) return;
        const vv = nv((jv - this.Uv) / .25),
          zv = nv((fv - this.Uv) / .15000000000000002),
          Pv = this.Uv < jv;
        this.lowLayer.classList.toggle("Active", Pv), this.lowLayer.classList.toggle("Critical", this.Uv < fv), this.lowLayer.style.opacity = String(Pv ? .55 + .3 * vv + .15 * zv : 0)
      }
      showArc(vv, zv) {
        var Pv, hv;
        if (!this.arcLayer) return;
        let Sv = this.arcs.find((zv => Yv(zv.direction, vv) < .6));
        if (!Sv) {
          const zv = document.createElement("div");
          zv.className = "FrontlineDamageArc", zv.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(zv), Sv = {
            element: zv,
            direction: vv,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Sv)
        }
        Sv.direction = vv, this.drawArcAngle(Sv);
        const ev = Sv.fade ? Number(getComputedStyle(Sv.element).opacity) : 0;
        null === (Pv = Sv.fade) || void 0 === Pv || Pv.cancel(), null === (hv = Sv.pop) || void 0 === hv || hv.cancel(), Sv.element.style.opacity = "1";
        const gv = Sv.element.animate([{
          opacity: ev
        }, {
          opacity: 1
        }], 144);
        Sv.fade = gv, Sv.pop = Sv.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * zv
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const pv = Sv;
        gv.onfinish = () => {
          if (pv.fade !== gv) return;
          const vv = pv.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          vv.startTime = gv.startTime, pv.fade = vv, vv.onfinish = () => {
            pv.fade === vv && (pv.element.remove(), Ov(this.arcs, pv))
          }
        }
      }
      drawArcAngle(vv) {
        const zv = vv.direction - this.cameraHeading;
        (null === vv.drawnAngle || Math.abs(zv - vv.drawnAngle) > .005) && (vv.drawnAngle = zv, vv.element.style.rotate = `${zv}rad`)
      }
      flashEdge(vv, zv) {
        var Pv, hv, Sv;
        if (!this.root) return;
        let ev = this.flashes.find((zv => null === zv.angle || null === vv ? zv.angle === vv : Yv(zv.angle, vv) < .5));
        if (!ev) {
          const zv = document.createElement("div");
          zv.className = "FrontlineDamageFlash";
          const Pv = zv.appendChild(document.createElement("div"));
          Pv.className = "FrontlineDamageFlashGlow", this.root.insertBefore(zv, this.arcLayer), ev = {
            element: zv,
            glow: Pv,
            angle: vv,
            level: 0,
            animation: null
          }, this.flashes.push(ev)
        }
        const gv = null === (Pv = ev.animation) || void 0 === Pv || null === (hv = Pv.effect) || void 0 === hv ? void 0 : hv.getComputedTiming().progress,
          pv = null === gv || void 0 === gv ? 0 : ev.level * (1 - gv);
        ev.level = Math.min(1, Math.max(zv, pv + .6 * zv)), ev.angle = vv;
        const {
          x: dv,
          y: Nv,
          rx: lv,
          ry: Tv
        } = function(vv, zv) {
          const Pv = window.innerWidth,
            hv = window.innerHeight;
          if (null === vv) return {
            x: Pv / 2,
            y: hv / 2,
            rx: 0,
            ry: 0
          };
          const Sv = Math.sin(vv),
            ev = -Math.cos(vv),
            gv = Pv / 2 / Math.max(1e-6, Math.abs(Sv)),
            pv = hv / 2 / Math.max(1e-6, Math.abs(ev)),
            dv = Math.min(gv, pv),
            Nv = Math.round(Pv / 2 + Sv * dv),
            lv = Math.round(hv / 2 + ev * dv),
            Tv = hv / 100 * (.85 + .25 * zv),
            Wv = gv <= pv,
            wv = Math.round((Wv ? 30 : 74) * Tv),
            av = Math.round((Wv ? 58 : 26) * Tv);
          return {
            x: Nv,
            y: lv,
            rx: wv,
            ry: av
          }
        }(vv, ev.level), {
          style: Wv
        } = ev.glow;
        ev.glow.classList.toggle("Everywhere", null === vv), Wv.setProperty("--glowX", `${dv}px`), Wv.setProperty("--glowY", `${Nv}px`), Wv.setProperty("--glowRx", `${lv}px`), Wv.setProperty("--glowRy", `${Tv}px`), ev.element.style.transformOrigin = `${dv}px ${Nv}px`, null === (Sv = ev.animation) || void 0 === Sv || Sv.cancel();
        const wv = ev.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: ev.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * ev.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * ev.level
        });
        ev.animation = wv;
        const av = ev;
        wv.onfinish = () => {
          av.animation === wv && (av.element.remove(), Ov(this.flashes, av))
        }
      }
      clearHits() {
        for (const hv of this.arcs) {
          var vv, zv;
          null === (vv = hv.fade) || void 0 === vv || vv.cancel(), hv.fade = null, null === (zv = hv.pop) || void 0 === zv || zv.cancel(), hv.element.remove()
        }
        this.arcs.length = 0;
        for (const hv of this.flashes) {
          var Pv;
          null === (Pv = hv.animation) || void 0 === Pv || Pv.cancel(), hv.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function Yv(vv, zv) {
      return Math.abs(Math.atan2(Math.sin(vv - zv), Math.cos(vv - zv)))
    }

    function nv(vv) {
      return Math.max(0, Math.min(1, vv))
    }

    function Ov(vv, zv) {
      const Pv = vv.indexOf(zv); - 1 !== Pv && vv.splice(Pv, 1)
    }
    var Dv = Pv(1035),
      Kv = Pv.n(Dv),
      Vv = Pv(36132),
      Uv = Pv(36198),
      Rv = Pv(1175),
      xv = Pv(1439);
    const tv = "frontlineHudChanged",
      qv = "frontlineScoreboardChanged";
    class Iv {
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
      la(vv) {
        this.wire = vv, Nv.j.zC(tv, vv, !0)
      }
      receiveScoreboard(vv) {
        let zv = "scoreboard" === vv[0] ? performance.now() + vv[5] : 0;
        const Pv = this.scoreboard.endsAt;
        0 !== zv && 0 !== Pv && Math.abs(zv - Pv) < 1e3 && (zv = Pv), this.scoreboard = {
          wire: vv,
          endsAt: zv
        }, Nv.j.zC(qv, this.scoreboard, !0)
      }
    }
    var Qv = Pv(1082);
    const Zv = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function Av(vv) {
      const [zv, Pv] = (0, Sv.useState)((() => (vv - performance.now()) / 1e3));
      return (0, Sv.useEffect)((() => {
        if (0 === vv) return;
        const zv = () => {
          Pv((vv - performance.now()) / 1e3)
        };
        zv();
        const hv = window.setInterval(zv, 250);
        return () => {
          window.clearInterval(hv)
        }
      }), [vv]), zv
    }

    function Lv(vv) {
      let {
        className: zv,
        point: Pv
      } = vv;
      const [hv, Sv, ev, gv, pv, dv] = Pv;
      return (0, Qv.jsxs)("div", {
        className: Kv()(zv, `Owner-${Sv||"None"}`, `Leader-${gv||"None"}`, {
          Contested: pv,
          Here: dv
        }),
        children: [(0, Qv.jsx)("span", {
          className: "FrontlinePointLetter",
          children: hv
        }), (0, Qv.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${ev}%`
          }
        })]
      })
    }
    const Hv = (0, Sv.memo)((function(vv) {
        let {
          points: zv,
          markers: Pv
        } = vv;
        const {
          t: hv
        } = (0, Rv.x)();
        return zv ? (0, Qv.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: zv.map((vv => {
            const [zv, , , , , , , Sv] = vv;
            return (0, Qv.jsxs)("div", {
              ref: Pv.bindMarker(zv),
              className: "FrontlinePointMarker",
              children: [(0, Qv.jsx)(Lv, {
                className: "FrontlinePointMarkerTile",
                point: vv
              }), (0, Qv.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Sv && (0, Qv.jsx)("span", {
                  className: Kv()("FrontlinePointMarkerHomeTurf", `Team-${Sv}`),
                  children: hv("frontlineHud:homeTurf", {
                    team: hv(Zv[Sv])
                  })
                }), (0, Qv.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, zv)
          }))
        }) : null
      })),
      Mv = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      yv = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function Bv(vv) {
      let {
        hud: zv,
        crosshair: Pv,
        damage: hv,
        markers: Sv
      } = vv;
      const ev = (0, xv.j)(tv, zv.getWire()),
        gv = (0, xv.j)(qv, zv.getScoreboard());
      return (0, Qv.jsxs)(Qv.Fragment, {
        children: [(0, Qv.jsx)(Jv, {
          damage: hv
        }), (0, Qv.jsx)(Hv, {
          points: "scoreboard" === gv.wire[0] ? gv.wire[6] : null,
          markers: Sv
        }), (0, Qv.jsx)(ov, {
          view: gv
        }), (0, Qv.jsx)("div", {
          className: "FrontlineReticle",
          ref: Pv.bindElement
        }), (0, Qv.jsx)(Vv.g, {
          children: (0, Qv.jsx)(Ev, {
            wire: ev
          })
        })]
      })
    }
    const Jv = (0, Sv.memo)((function(vv) {
        let {
          damage: zv
        } = vv;
        return (0, Qv.jsxs)("div", {
          className: "FrontlineDamage",
          ref: zv.bindElement,
          children: [(0, Qv.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, Qv.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, Qv.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      Ev = (0, Sv.memo)((function(vv) {
        let {
          wire: zv
        } = vv;
        const {
          t: Pv
        } = (0, Rv.x)();
        if ("capture" === zv[0]) {
          const [, vv, hv, Sv, ev, gv, pv] = zv, dv = Math.round(Sv / 100 * 24);
          return (0, Qv.jsxs)("div", {
            className: Kv()("FrontlinePlate", `Status-${hv}`, `Leader-${ev||"None"}`),
            children: [(0, Qv.jsx)(Xv, {}), (0, Qv.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, Qv.jsx)("span", {
                className: "FrontlineObjective",
                children: vv
              }), (0, Qv.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, Qv.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: Pv("frontlineHud:objective", {
                    point: vv,
                    friendly: gv,
                    enemy: pv
                  })
                }), (0, Qv.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: Pv(Mv[hv])
                })]
              }), (0, Qv.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Sv).padStart(3, "0"), (0, Qv.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, Qv.jsx)(rv, {
              segments: 24,
              lit: dv
            })]
          })
        }
        if ("alert" === zv[0]) {
          const [, vv, hv, Sv] = zv;
          return (0, Qv.jsxs)("div", {
            className: Kv()("FrontlinePlate", "FrontlineAlert", `Tone-${Sv}`),
            children: [(0, Qv.jsx)(Xv, {}), (0, Qv.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Pv(yv[vv])
            }), (0, Qv.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: hv
            })]
          })
        }
        return null
      })),
      ov = (0, Sv.memo)((function(vv) {
        let {
          view: zv
        } = vv;
        const {
          t: Pv
        } = (0, Rv.x)(), hv = (0, Sv.useRef)(null), ev = function(vv, zv) {
          const [Pv, hv] = (0, Sv.useState)(!1);
          return (0, Sv.useLayoutEffect)((() => {
            const zv = vv.current;
            if (!zv) return;
            const Pv = document.querySelector(`.${Uv.i}`),
              Sv = document.querySelector(`.${Uv.m}`),
              ev = () => {
                var vv;
                const ev = zv.querySelector(".FrontlineTeamTrack"),
                  gv = (0, dv.getRemInPx)(),
                  pv = zv.getBoundingClientRect().width - 2 * (null !== (vv = null === ev || void 0 === ev ? void 0 : ev.getBoundingClientRect().width) && void 0 !== vv ? vv : 0),
                  Nv = window.innerWidth / 2,
                  lv = Pv ? Pv.getBoundingClientRect().right : 0,
                  Tv = Sv ? Sv.getBoundingClientRect().left : window.innerWidth,
                  Wv = Math.min(Nv - lv, Tv - Nv) - Uv.e - pv / 2,
                  wv = Wv < 6 * gv,
                  av = wv ? (window.innerWidth - pv) / 2 - Uv.e : Wv;
                zv.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(av,14*gv)))}px`), hv(wv)
              };
            ev();
            const gv = new ResizeObserver(ev);
            for (const vv of [zv, Pv, Sv]) vv && gv.observe(vv);
            return window.addEventListener("resize", ev), () => {
              gv.disconnect(), window.removeEventListener("resize", ev)
            }
          }), [vv, zv]), Pv
        }(hv, "scoreboard" === zv.wire[0]);
        if ("scoreboard" !== zv.wire[0]) return null;
        const [, gv, pv, Nv, lv, , Tv] = zv.wire, Wv = "Red" === gv ? "Blue" : "Red";
        return (0, Qv.jsxs)("div", {
          className: Kv()("FrontlineScoreboardContainer", {
            Below: ev
          }),
          children: [(0, Qv.jsxs)("div", {
            ref: hv,
            className: "FrontlineScoreboard",
            children: [(0, Qv.jsx)(Xv, {}), (0, Qv.jsx)(bv, {
              team: gv,
              tickets: pv,
              goal: lv,
              side: "Friendly"
            }), (0, Qv.jsx)("div", {
              className: "FrontlinePoints",
              children: Tv.map((vv => (0, Qv.jsx)(Lv, {
                className: "FrontlinePoint",
                point: vv
              }, vv[0])))
            }), (0, Qv.jsx)(bv, {
              team: Wv,
              tickets: Nv,
              goal: lv,
              side: "Enemy"
            })]
          }), (0, Qv.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, Qv.jsx)(kv, {
              endsAt: zv.endsAt
            }), (0, Qv.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Pv("frontlineHud:ticketGoal", {
                goal: lv
              })
            })]
          })]
        })
      }));

    function bv(vv) {
      let {
        team: zv,
        tickets: Pv,
        goal: hv,
        side: Sv
      } = vv;
      const {
        t: ev
      } = (0, Rv.x)(), gv = String(Pv).padStart(3, "0"), pv = gv.search(/[1-9]/), dv = -1 === pv ? gv : gv.slice(0, pv), Nv = Math.min(20, Math.floor(Pv / hv * 20));
      return (0, Qv.jsxs)("div", {
        className: Kv()("FrontlineTeamScore", Sv, `Team-${zv}`),
        children: [(0, Qv.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, Qv.jsx)("span", {
            className: "Lead",
            children: dv
          }), -1 !== pv && gv.slice(pv)]
        }), (0, Qv.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, Qv.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: ev(Zv[zv])
          }), (0, Qv.jsx)(rv, {
            segments: 20,
            lit: Nv
          })]
        })]
      })
    }

    function rv(vv) {
      let {
        segments: zv,
        lit: Pv
      } = vv;
      return (0, Qv.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: zv
        }, ((vv, zv) => (0, Qv.jsx)("i", {
          className: Kv()({
            Lit: zv < Pv
          })
        }, zv)))
      })
    }

    function kv(vv) {
      let {
        endsAt: zv
      } = vv;
      const Pv = Math.max(0, Math.ceil(Av(zv)));
      return (0, Qv.jsxs)("div", {
        className: Kv()("FrontlineClock", {
          Urgent: Pv <= 60
        }),
        children: [Math.floor(Pv / 60), ":", String(Pv % 60).padStart(2, "0")]
      })
    }

    function Xv() {
      return (0, Qv.jsxs)(Qv.Fragment, {
        children: [(0, Qv.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Qv.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var uv = Pv(36193),
      vz = Pv(1234),
      zz = Pv(38020),
      Pz = Pv(38072);
    class hz {
      constructor(vv) {
        var zv;
        this.hud = vv, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.ea = !1, this.mG = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.mG), null === (zv = window.visualViewport) || void 0 === zv || zv.addEventListener("resize", this.mG)
      }
      bindMarker(vv) {
        let zv = this.refs.get(vv);
        return zv || (zv = zv => {
          var Pv;
          null === (Pv = this.markers.get(vv)) || void 0 === Pv || Pv.stopObserving(), this.markers.delete(vv), zv && !this.ea && this.markers.set(vv, this.mount(zv))
        }, this.refs.set(vv, zv)), zv
      }
      frame(vv, zv) {
        this.render = vv;
        const Pv = this.hud.getScoreboard().wire;
        if ("scoreboard" === Pv[0] && 0 !== this.markers.size)
          for (const [hv, , , , , , Sv] of Pv[6]) {
            const vv = this.markers.get(hv);
            vv && Sv && (vv.target ??= [0, 0, 0], vv.target[0] = Sv[0], vv.target[1] = Sv[1] + 2.5, vv.target[2] = Sv[2], this.place(vv), this.sv(vv, zv && Math.hypot(Sv[0] - zv[0], Sv[1] - zv[1], Sv[2] - zv[2])))
          }
      }
      dispose() {
        var vv;
        this.ea = !0, window.removeEventListener("resize", this.mG), null === (vv = window.visualViewport) || void 0 === vv || vv.removeEventListener("resize", this.mG);
        for (const zv of this.markers.values()) zv.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(vv) {
        const {
          render: zv,
          viewport: Pv
        } = this;
        if (!zv || !vv.target) return;
        const hv = (50 - zv.screenBandPct.y) / 100 * Pv.height,
          Sv = {
            x: vv.halfSize.width + 8,
            top: vv.halfSize.height + 8,
            bottom: vv.halfSize.height + vv.labelsBelow + hv
          },
          ev = zv.projectWorldPosToViewport(vv.target),
          gv = null !== ev && void 0 !== ev ? ev : zv.projectWorldPosToScreenPos(vv.target),
          pv = (0, Pz.e)({
            x: gv.x,
            y: gv.y,
            text: ev
          }, Sv, Pv);
        (0, zz.e)(vv.root, Math.round(100 * pv.x) / 100, Math.round(100 * pv.y) / 100)
      }
      sv(vv, zv) {
        if (null === zv) return void(null !== vv.metres && (vv.metres = null, vv.distance.textContent = ""));
        const Pv = Date.now();
        (null === vv.metres || (0, uv.b)(zv, vv.metres, vv.metresShownAt)) && (vv.metres = Math.round(zv), vv.metresShownAt = Pv, vv.distance.textContent = (0, Rv.r)(vz.f.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(vv.metres)
        }))
      }
      mount(vv) {
        const zv = {
            root: vv,
            distance: vv.querySelector(".FrontlinePointMarkerDistance"),
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
          Pv = vv.querySelector(".FrontlinePointMarkerLabels"),
          hv = new ResizeObserver((() => {
            zv.halfSize = {
              width: Math.max(vv.offsetWidth, Pv.offsetWidth) / 2,
              height: vv.offsetHeight / 2
            }, zv.labelsBelow = Pv.offsetTop + Pv.offsetHeight - vv.offsetHeight, this.place(zv)
          }));
        return hv.observe(vv, {
          box: "border-box"
        }), hv.observe(Pv, {
          box: "border-box"
        }), zv.stopObserving = () => {
          hv.disconnect()
        }, zv
      }
    }
    var Sz = Pv(6163),
      ez = Pv(2450);
    const gz = "frontlineRoundEndChanged";
    class pz {
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
      la(vv) {
        const zv = "roundEnd" === vv[0] ? performance.now() + vv[5] : 0;
        this.view = {
          wire: vv,
          key: this.view.key + 1,
          endsAt: zv
        }, Nv.j.zC(gz, this.view, !0)
      }
    }
    const dz = (0, Sv.lazy)((() => (0, ez.b)(Pv.e(191).then((() => Pv(41056))), (vv => vv.FrontlineMvpLineup)))),
      Nz = [4800, 4e3, 3200],
      lz = [1, 0, 2],
      Tz = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Wz = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function wz(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, xv.j)(gz, zv.getView()),
        hv = Av(Pv.endsAt);
      return "roundEnd" !== Pv.wire[0] || 1e3 * hv < -2e3 ? null : (0, Qv.jsx)(az, {
        wire: Pv.wire,
        secondsLeft: Math.max(0, Math.ceil(hv))
      }, Pv.key)
    }
    const az = (0, Sv.memo)((function(vv) {
      let {
        wire: zv,
        secondsLeft: Pv
      } = vv;
      const {
        t: ev
      } = (0, Rv.x)(), [, gv, pv, dv, Nv, , lv, Tv] = zv, Wv = (0, Sv.useMemo)((() => lz.filter((vv => vv < Tv.length))), [Tv]), wv = (0, Sv.useMemo)((() => Wv.map((vv => {
        const [, , , , , zv, Pv] = Tv[vv];
        return {
          cosmetics: hv.map(((vv, Pv) => [vv, zv[Pv]])),
          size: 0 === vv ? 1.15 : .85,
          heldGun: {
            name: Pv,
            aimed: 0 === vv
          },
          showAfterMs: Nz[vv]
        }
      }))), [Tv, Wv]);
      return (0, Qv.jsxs)("div", {
        className: Kv()("FrontlineRoundEnd", `Result-${gv}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, Qv.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, Qv.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, Qv.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, Qv.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, Qv.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (av = ev(Tz[gv]), /\p{Script=Arabic}/u.test(av) ? [av] : (0, Sz.c)(av)).map(((vv, zv) => (0, Qv.jsx)("span", {
              style: {
                "--letter": zv
              },
              children: vv
            }, zv)))]
          }), (0, Qv.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [pv && "victory" === gv && (0, Qv.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: ev("frontlineRoundEnd:comeback")
            }), (0, Qv.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, Qv.jsx)("b", {
                className: "Friendly",
                children: dv
              }), " \u2013 ", (0, Qv.jsx)("b", {
                className: "Enemy",
                children: Nv
              })]
            })]
          })]
        }), Wv.length > 0 && (0, Qv.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Wv.length
          },
          children: [(0, Qv.jsx)(Sv.Suspense, {
            fallback: null,
            children: (0, Qv.jsx)(dz, {
              className: "FrontlineRoundEndLineup",
              players: wv
            })
          }), Wv.map((vv => (0, Qv.jsx)(sz, {
            mvp: Tv[vv],
            place: vv
          }, vv)))]
        }), (0, Qv.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: ev("frontlineRoundEnd:nextFront", {
            map: lv,
            seconds: String(Pv)
          })
        })]
      });
      var av
    }));

    function sz(vv) {
      let {
        mvp: zv,
        place: Pv
      } = vv;
      const {
        t: hv
      } = (0, Rv.x)(), [Sv, ev, gv, pv, dv] = zv, [Nv, lv] = hv(function(vv, zv) {
        return 1 === zv && "damage" !== vv ? `frontlineRoundEnd:${vv}One` : `frontlineRoundEnd:${vv}`
      }(gv, pv), {
        name: "\0",
        count: pv.toLocaleString()
      }).split("\0");
      return (0, Qv.jsxs)("div", {
        className: Kv()("FrontlineMvpCard", `Place-${Pv+1}`, `Team-${ev}`),
        style: {
          "--revealMs": `${Nz[Pv]}ms`
        },
        children: [(0, Qv.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Qv.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, Qv.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: hv(Wz[Pv])
        }), (0, Qv.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Nv, (0, Qv.jsx)("span", {
            className: "FrontlineMvpName",
            children: Sv
          }), lv]
        }), (0, Qv.jsx)("div", {
          className: "FrontlineMvpKit",
          children: dv
        })]
      })
    }
    const Cz = function(vv, zv, Pv, hv) {
      let {
        localPlayerId: gv
      } = hv;
      const pv = new Iv,
        dv = new pz;
      let Nv = null,
        lv = null,
        Tv = null,
        Wv = null,
        wv = null,
        av = [!1, !1];
      const sv = () => {
        var vv, zv;
        const [Pv, hv] = av;
        null === (vv = lv) || void 0 === vv || vv.uF(!Pv), null === (zv = Tv) || void 0 === zv || zv.uF(!hv)
      };
      return {
        onCreate: vv => {
          Nv = vv, lv = new Gv(vv, gv), Tv = new Fv(vv, gv), Wv = new hz(pv), sv(), wv = (0, ev.w)((0, Sv.createElement)(Sv.Fragment, null, (0, Sv.createElement)(Bv, {
            hud: pv,
            crosshair: lv,
            damage: Tv,
            markers: Wv
          }), (0, Sv.createElement)(wz, {
            controller: dv
          })))
        },
        onClose: () => {
          var vv, zv, Pv, hv;
          null === (vv = wv) || void 0 === vv || vv(), null === (zv = lv) || void 0 === zv || zv.dispose(), lv = null, null === (Pv = Tv) || void 0 === Pv || Pv.dispose(), Tv = null, null === (hv = Wv) || void 0 === hv || hv.dispose(), Wv = null, Nv = null
        },
        onAfterRender: (vv, zv) => {
          var Pv, hv, Sv, ev;
          null === (Pv = lv) || void 0 === Pv || Pv.frame(vv, zv.tanHalfFovY), null === (hv = Tv) || void 0 === hv || hv.frame(zv.cameraHeading), null === (Sv = Wv) || void 0 === Sv || Sv.frame(zv, null !== (ev = Nv) && void 0 !== ev && ev.checkValid(gv) ? Nv.yG(gv) : null)
        },
        onReceivedMessageFromServer: (vv, zv) => {
          "frontlineHud" === vv ? pv.la(zv) : "frontlineScoreboard" === vv ? pv.receiveScoreboard(zv) : "frontlineRoundEnd" === vv ? dv.la(zv) : "frontlinePrefs" === vv && (av = zv, sv())
        }
      }
    }
  },
  6163: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    const hv = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Sv(vv) {
      return null === hv ? Array.from(vv) : Array.from(hv.segment(vv), (vv => {
        let {
          segment: zv
        } = vv;
        return zv
      }))
    }
  },
  38020: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      h: () => ev
    });
    const hv = new WeakMap;

    function Sv(vv) {
      let zv = hv.get(vv);
      return zv || (zv = {
        hidden: vv.hidden,
        x: NaN,
        y: NaN
      }, hv.set(vv, zv)), zv
    }

    function ev(vv, zv) {
      const Pv = Sv(vv);
      Pv.hidden !== zv && (Pv.hidden = zv, vv.hidden = zv)
    }

    function gv(vv, zv, Pv) {
      const hv = Sv(vv);
      hv.x === zv && hv.y === Pv || (hv.x = zv, hv.y = Pv, vv.style.translate = `${zv}vw ${Pv}vh`)
    }
  },
  36568: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    const hv = {
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
for (const vv in modules) Object.freeze(modules[vv]);