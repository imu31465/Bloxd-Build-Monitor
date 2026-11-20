export const id = 17;
export const ids = [17];
export const modules = {
  36187: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => uU,
      e: () => CU,
      h: () => jU,
      l: () => GU
    });
    var tU = gU(8982),
      pU = gU(36191),
      EU = gU(36197),
      PU = gU(8340),
      TU = gU(1410),
      qU = gU(56),
      KU = gU(74),
      cU = gU(1090);

    function GU() {
      var UU;
      return (0, TU.h)(pU.e, (0, pU.t)()), (0, cU.jsx)(cU.Fragment, {
        children: null === (UU = (0, pU.t)()) || void 0 === UU ? void 0 : UU.content
      })
    }

    function jU(UU) {
      var RU;
      let {
        show: gU
      } = UU;
      (0, TU.h)(pU.e, (0, pU.t)());
      const KU = null === (RU = (0, pU.t)()) || void 0 === RU ? void 0 : RU.menu;
      return (0, qU.useEffect)((() => {
        var UU;
        gU || (null === KU || void 0 === KU || null === (UU = KU.onClose) || void 0 === UU || UU.call(KU), (0, EU.q)())
      }), [gU, KU]), (0, qU.useEffect)((() => gU ? (0, PU.f)(EU.w, EU.e) : void 0), [gU]), (0, cU.jsx)(tU.d, {
        showing: gU,
        globallyUniqueKey: "clientGameMenu",
        children: null === KU || void 0 === KU ? void 0 : KU.content
      })
    }

    function uU(UU) {
      let {
        placement: RU = "bottom"
      } = UU;
      return (0, cU.jsx)("div", {
        id: `clientGameHud-${RU}`,
        style: {
          display: "contents"
        }
      })
    }

    function CU(UU) {
      let {
        children: RU,
        placement: gU = "bottom"
      } = UU;
      const [tU, pU] = (0, qU.useState)(null);
      return (0, qU.useEffect)((() => {
        pU(document.getElementById(`clientGameHud-${gU}`))
      }), [gU]), tU ? (0, KU.createPortal)(RU, tU) : null
    }
  },
  8982: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(4200),
      pU = gU(4206);

    function EU(UU) {
      let {
        children: RU,
        showing: gU,
        globallyUniqueKey: EU,
        alwaysMountChildren: PU = !1,
        doGameplayStartStopOnShow: TU = !0,
        keepsMovement: qU = !1
      } = UU;
      return (0, pU.e)(!0, gU, EU, qU), (0, tU.c)(TU, gU), gU || PU ? RU : null
    }
  },
  36280: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      f: () => PU,
      i: () => TU,
      m: () => qU
    });
    var tU = gU(56),
      pU = gU(1106);
    const EU = 8,
      PU = "InGameHeaderContainer",
      TU = "TopRightElements";

    function qU(UU) {
      const [RU] = (0, pU.d)(), [gU, qU] = (0, tU.useState)(!1);
      return (0, tU.useLayoutEffect)((() => {
        if (!UU) return;
        const RU = document.querySelector(`.${PU}`),
          gU = document.querySelector(`.${TU}`),
          tU = () => {
            const tU = UU.getBoundingClientRect(),
              pU = RU ? RU.getBoundingClientRect().right : 0,
              PU = gU ? gU.getBoundingClientRect().left : window.innerWidth,
              TU = tU.left < pU + EU,
              KU = tU.right > PU - EU;
            qU(TU || KU)
          };
        tU();
        const pU = new ResizeObserver(tU);
        return pU.observe(UU), RU && pU.observe(RU), gU && pU.observe(gU), () => {
          pU.disconnect()
        }
      }), [UU, RU]), gU
    }
  },
  36275: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU
    });
    const tU = [{
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

    function pU(UU, RU, gU) {
      const pU = Math.abs(UU - RU),
        EU = Date.now() - gU;
      for (const PU of tU)
        if (UU < PU.maxDist) return pU >= PU.hardUpdateDist || EU > PU.timeBetweenSoftChecks && pU >= PU.softUpdateDist;
      return !1
    }
  },
  8340: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      f: () => pU
    });
    let tU = null;
    const pU = function(UU) {
        const RU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tU = RU, () => {
          tU === RU && (tU = null)
        }
      },
      EU = () => {
        var UU;
        return null !== (UU = tU) && void 0 !== UU && UU.canCycle() ? tU.cycle : null
      }
  },
  38083: (UU, RU, gU) => {
    function tU(UU, RU, gU) {
      var tU;
      const {
        width: pU,
        height: EU
      } = gU, PU = null !== (tU = UU.text) && void 0 !== tU ? tU : UU, TU = (PU.x / 100 - .5) * pU, qU = (PU.y / 100 - .5) * EU, KU = pU / 2 - RU.x;
      if (null !== UU.text && Math.abs(TU) <= KU && qU >= RU.top - EU / 2 && qU <= EU / 2 - RU.bottom) return {
        x: PU.x,
        y: PU.y
      };
      const cU = Math.min(0 === TU ? 1 / 0 : KU / Math.abs(TU), qU > 0 ? (EU / 2 - RU.bottom) / qU : qU < 0 ? (RU.top - EU / 2) / qU : 1 / 0);
      return !Number.isFinite(cU) || cU < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + TU * cU / pU * 100,
        y: 50 + qU * cU / EU * 100
      }
    }
    gU.d(RU, {
      e: () => tU
    })
  },
  36197: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      e: () => hU,
      g: () => QU,
      j: () => TU,
      n: () => jU,
      q: () => eU,
      r: () => GU,
      t: () => fU,
      w: () => CU,
      x: () => WU
    });
    var tU = gU(21),
      pU = gU(24);
    const EU = "clientGameInventoryButtonsChanged",
      PU = new Map;

    function TU() {
      return [...PU.values()].sort(((UU, RU) => {
        var gU, tU;
        return (null !== (gU = UU.order) && void 0 !== gU ? gU : 0) - (null !== (tU = RU.order) && void 0 !== tU ? tU : 0)
      }))
    }
    let qU = null;

    function KU(UU) {
      qU = UU
    }
    let cU = !1;

    function GU(UU) {
      cU = !0;
      try {
        UU.onClick()
      } finally {
        cU = !1
      }
      UU.panel && "clientGame" === tU.b.get("openInGameMenuName") && KU(UU.id)
    }

    function jU() {
      return cU
    }

    function uU() {
      return TU().filter((UU => UU.panel && !UU.disabled))
    }

    function CU(UU) {
      const RU = uU(),
        gU = RU.findIndex((UU => UU.id === qU));
      return !(gU < 0 || RU.length < 2) && (GU(RU[(gU + UU + RU.length) % RU.length]), !0)
    }

    function hU() {
      return null !== qU && uU().length > 1
    }

    function QU() {
      KU(null)
    }

    function eU() {
      "inventory" !== tU.b.get("openInGameMenuName") && KU(null)
    }

    function WU() {
      const UU = qU;
      return KU(null), UU
    }

    function fU(UU) {
      return PU.set(UU.id, UU), pU.p.yh(EU, TU(), !0), () => {
        PU.get(UU.id) === UU && (PU.delete(UU.id), pU.p.yh(EU, TU()))
      }
    }
  },
  36191: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => QU,
      l: () => eU,
      p: () => jU,
      t: () => KU,
      w: () => hU,
      x: () => uU,
      y: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(36197);
    const TU = "clientGameUiChanged";
    let qU = null;

    function KU() {
      return qU
    }

    function cU(UU, RU) {
      const gU = {
        content: UU,
        menu: RU
      };
      return qU = gU, pU.p.yh(TU, qU, !0), () => {
        qU === gU && (qU = null, CU = !1, QU(), pU.p.yh(TU, null))
      }
    }
    let GU = null;

    function jU() {
      return GU
    }

    function uU(UU) {
      return GU = UU, () => {
        GU === UU && (GU = null)
      }
    }
    let CU = !1;

    function hU() {
      const UU = tU.b.get("openInGameMenuName");
      "clientGame" !== UU && (CU = "inventory" === UU), (0, PU.n)() || (0, PU.g)(), (0, EU.o)(EU.c), tU.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function QU() {
      WU(!1)
    }

    function eU() {
      WU(CU)
    }

    function WU(UU) {
      "clientGame" === tU.b.get("openInGameMenuName") && tU.b.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, PU.g)(), CU = !1
    }
  },
  38955: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => QR
    });
    const tU = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var pU = gU(56),
      EU = gU(36191),
      PU = gU(36554),
      TU = gU(36203),
      qU = gU(1637),
      KU = gU(24);
    const cU = {
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
    const GU = 32;

    function jU(UU, RU, gU, tU) {
      return {
        tag: "line",
        attrs: {
          x1: UU,
          y1: RU,
          x2: gU,
          y2: tU,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function uU(UU) {
      return {
        tag: "circle",
        attrs: {
          cx: GU,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GU,
          r: UU,
          class: "Fill"
        }
      }
    }

    function CU(UU, RU) {
      return {
        tag: "path",
        attrs: {
          d: UU,
          "stroke-width": RU
        }
      }
    }

    function hU(UU, RU, gU) {
      return {
        tag: "circle",
        attrs: {
          cx: GU,
          cy: GU,
          r: UU,
          "stroke-width": RU,
          class: gU
        }
      }
    }

    function QU(UU, RU, gU) {
      return {
        tag: "text",
        attrs: {
          x: UU,
          y: RU,
          class: "Fill Label"
        },
        text: gU
      }
    }
    const eU = {
      pistol: UU => [jU(GU, GU - UU - 5, GU, GU - UU), jU(GU - UU - 5, GU, GU - UU, GU), jU(GU + UU, GU, GU + UU + 5, GU), uU(1.4)],
      rifle: UU => [jU(GU, GU - UU - 8, GU, GU - UU), jU(GU, GU + UU, GU, GU + UU + 8), jU(GU - UU - 8, GU, GU - UU, GU), jU(GU + UU, GU, GU + UU + 8, GU), uU(1)],
      smg: UU => {
        const RU = Math.PI / 2,
          gU = [];
        for (let PU = 0; PU < 4; PU++) gU.push((pU = PU * RU + .35, EU = (PU + 1) * RU - .35, CU(`M${GU+(tU=6+UU)*Math.cos(pU)} ${GU+tU*Math.sin(pU)} A${tU} ${tU} 0 0 1 ${GU+tU*Math.cos(EU)} ${GU+tU*Math.sin(EU)}`, 2)));
        var tU, pU, EU;
        return [...gU, uU(1.4)]
      },
      shotgun: UU => [hU(UU, 3, "Ring Outline"), hU(UU, 1.5, "Ring")],
      marksman: UU => [CU(`M${26-UU/2} ${39+UU/2} L32 33 L${38+UU/2} ${39+UU/2}`, 2), jU(14 - UU, GU, 24 - UU, GU, 1.5), jU(40 + UU, GU, 50 + UU, GU, 1.5), jU(14 - UU, 30, 14 - UU, 34, 1.5), jU(50 + UU, 30, 50 + UU, 34, 1.5)],
      machineGun: UU => {
        const RU = 10 + UU,
          gU = [];
        for (const [tU, pU] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) gU.push(CU(`M${GU+tU*RU} ${GU+pU*(RU-5)} L${GU+tU*RU} ${GU+pU*RU} L${GU+tU*(RU-5)} ${GU+pU*RU}`, 2));
        return [...gU, jU(GU, 28, GU, 36, 1.5), jU(28, GU, 36, GU, 1.5)]
      },
      launcher: () => [jU(14, 30, 50, 30, 1.5), jU(GU, 24, GU, 52, 1.5), jU(28, 38, 36, 38, 1.5), jU(29, 44, 35, 44, 1.5), jU(30, 50, 34, 50, 1.5), QU(38, 40, "100"), QU(37, 46, "200"), uU(1.4, 30)],
      melee: () => [CU("M32 26 L38 32 L32 38 L26 32 Z", 1.5), uU(1.2)],
      throwable: () => [uU(1.6)]
    };

    function WU(UU) {
      let {
        tag: RU,
        attrs: gU,
        text: tU
      } = UU, pU = `<${RU}`;
      for (const [EU, PU] of Object.entries(gU)) pU += ` ${EU}="${PU}"`;
      return void 0 === tU ? `${pU}/>` : `${pU}>${tU}</${RU}>`
    }
    class fU {
      constructor(UU, RU) {
        this.api = UU, this.localPlayerId = RU, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = UU => {
          this.element = UU, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, UU && !this.enabled && (UU.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, qU.getRemInPx)()))
        }, this.tokens = [KU.p.subscribe("aimingOverlay", (UU => {
          this.sniperOverlay = "sniper" === UU
        })), KU.p.subscribe("mouseState", (UU => {
          let {
            isDown: RU
          } = UU;
          this.mouseDown = RU
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      GJ(UU) {
        UU !== this.enabled && (this.enabled = UU, this.drawnVisible = null, UU || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(UU, RU) {
        var gU, tU;
        if (!this.enabled) return;
        const {
          api: pU
        } = this, EU = pU.isAlive(this.localPlayerId) && null !== (gU = null === (tU = pU.QRU(this.localPlayerId)) || void 0 === tU ? void 0 : tU.name) && void 0 !== gU ? gU : null, PU = (TU = EU) && cU[TU] || null;
        var TU;
        if (this.setOwnsCrosshair(null !== PU), !this.element) return;
        const qU = pU.getHeldGunInaccuracy(),
          KU = null !== qU,
          GU = null !== PU && !this.sniperOverlay && pU.isCrosshairShown();
        if (GU !== this.drawnVisible && (this.drawnVisible = GU, this.element.style.display = GU ? "block" : "none"), !GU) return;
        const jU = KU ? function(UU) {
            return "launcher" === UU || "melee" === UU || "throwable" === UU ? "none" : "shotgun" === UU ? "cone" : "offset"
          }(PU) : "none",
          uU = null !== qU && void 0 !== qU ? qU : 0;
        "cone" === jU ? this.drawCone(PU, this.coneRadiusVh(uU, RU) * this.gapPerVh, UU) : (this.coneDrawn = !1, this.draw(PU, "none" === jU ? 2 : this.offsetGap(uU)));
        const CU = !KU && this.mouseDown;
        CU !== this.drawnPressed && (this.drawnPressed = CU, this.element.classList.toggle("Pressed", CU))
      }
      dispose() {
        for (const UU of this.tokens) KU.p.unsubscribe(UU);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(UU, RU) {
        var gU, tU;
        UU !== this.drawnFamily ? (this.drawnFamily = UU, this.drawnGap = RU, this.element.innerHTML = function(UU, RU) {
          return `<svg viewBox="0 0 64 64">${eU[UU](RU).map(WU).join("")}</svg>`
        }(UU, RU), this.shapes = Array.from(null !== (gU = null === (tU = this.element.firstElementChild) || void 0 === tU ? void 0 : tU.children) && void 0 !== gU ? gU : [])) : RU !== this.drawnGap && (this.drawnGap = RU, function(UU, RU, gU) {
          const tU = eU[RU](gU);
          for (let pU = 0; pU < tU.length; pU++)
            for (const [RU, gU] of Object.entries(tU[pU].attrs)) {
              const tU = String(gU);
              UU[pU].getAttribute(RU) !== tU && UU[pU].setAttribute(RU, tU)
            }
        }(this.shapes, UU, RU))
      }
      drawCone(UU, RU, gU) {
        UU === this.drawnFamily && this.coneDrawn ? this.shownRadius += (RU - this.shownRadius) * (1 - Math.exp(-gU / 80)) : this.shownRadius = RU, this.coneDrawn = !0, this.draw(UU, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(UU, RU) {
        if (!(RU > 0)) return 1;
        const gU = UU * PU.h / 2;
        return Math.max(50 * Math.tan(gU) / RU, 1)
      }
      offsetGap(UU) {
        const RU = 2 + ((0, TU.d)(UU) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * RU) / 2)
      }
      setOwnsCrosshair(UU) {
        UU !== this.ownsCrosshair && (this.ownsCrosshair = UU, document.body.classList.toggle("FrontlineCustomCrosshair", UU))
      }
    }
    const xU = "FrontlineCustomDamage",
      mU = .45,
      IU = .2;
    class JU {
      constructor(UU, RU) {
        this.api = UU, this.localPlayerId = RU, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.Zp = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = UU => {
          var RU, gU;
          this.clearHits(), this.root = UU, this.lowLayer = null !== (RU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".FrontlineDamageLow")) && void 0 !== RU ? RU : null, this.arcLayer = null !== (gU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".FrontlineDamageArcs")) && void 0 !== gU ? gU : null, this.showRoot(), this.drawLow()
        }, this.token = KU.p.subscribe("damagedByOtherPlayer", (UU => {
          let {
            direction: RU,
            np: gU
          } = UU;
          this.onHurt(RU, gU)
        })), this.syncHealth(), document.body.classList.add(xU)
      }
      GJ(UU) {
        UU !== this.enabled && (this.enabled = UU, document.body.classList.toggle(xU, UU), UU || this.clearHits(), this.showRoot())
      }
      frame(UU) {
        this.syncHealth(), this.cameraHeading = UU;
        for (const RU of this.arcs) this.drawArcAngle(RU)
      }
      dispose() {
        KU.p.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(xU)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const UU = this.api.getClientOption(this.localPlayerId, "_health"),
          RU = this.api.getClientOption(this.localPlayerId, "_shield"),
          gU = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(UU, this.readHealth) && Object.is(RU, this.readShield) && Object.is(gU, this.readMaxHealth)) return;
        if (this.readHealth = UU, this.readShield = RU, this.readMaxHealth = gU, null === UU || void 0 === UU || !gU) return this.lastHealthPool = null, this.maxHealth = null, this.Zp = 1, this.dead = !1, void this.drawLow();
        const tU = UU + (null !== RU && void 0 !== RU ? RU : 0);
        if (null !== this.lastHealthPool && tU < this.lastHealthPool) {
          const UU = performance.now(),
            RU = (this.lastHealthPool - tU) / gU;
          this.lastDrop = UU - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + RU,
            at: this.lastDrop.at
          } : {
            frac: RU,
            at: UU
          }
        }
        this.dead = UU <= 0, this.dead && this.clearHits(), this.lastHealthPool = tU, this.maxHealth = gU, this.Zp = UU > 0 ? UU / gU : 1, this.drawLow()
      }
      onHurt(UU, RU) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const gU = Math.min(1, this.takeDamageFrac(RU) / .3);
        null !== UU && this.showArc(UU, gU), this.flashEdge(null === UU ? null : UU - this.cameraHeading, .4 + .6 * gU)
      }
      takeDamageFrac(UU) {
        if (void 0 !== UU && this.maxHealth) return UU / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: RU
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, RU
      }
      drawLow() {
        if (!this.lowLayer) return;
        const UU = nU((mU - this.Zp) / .25),
          RU = nU((IU - this.Zp) / .15000000000000002),
          gU = this.Zp < mU;
        this.lowLayer.classList.toggle("Active", gU), this.lowLayer.classList.toggle("Critical", this.Zp < IU), this.lowLayer.style.opacity = String(gU ? .55 + .3 * UU + .15 * RU : 0)
      }
      showArc(UU, RU) {
        var gU, tU;
        if (!this.arcLayer) return;
        let pU = this.arcs.find((RU => wU(RU.direction, UU) < .6));
        if (!pU) {
          const RU = document.createElement("div");
          RU.className = "FrontlineDamageArc", RU.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(RU), pU = {
            element: RU,
            direction: UU,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(pU)
        }
        pU.direction = UU, this.drawArcAngle(pU);
        const EU = pU.fade ? Number(getComputedStyle(pU.element).opacity) : 0;
        null === (gU = pU.fade) || void 0 === gU || gU.cancel(), null === (tU = pU.pop) || void 0 === tU || tU.cancel(), pU.element.style.opacity = "1";
        const PU = pU.element.animate([{
          opacity: EU
        }, {
          opacity: 1
        }], 144);
        pU.fade = PU, pU.pop = pU.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * RU
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const TU = pU;
        PU.onfinish = () => {
          if (TU.fade !== PU) return;
          const UU = TU.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          UU.startTime = PU.startTime, TU.fade = UU, UU.onfinish = () => {
            TU.fade === UU && (TU.element.remove(), bU(this.arcs, TU))
          }
        }
      }
      drawArcAngle(UU) {
        const RU = UU.direction - this.cameraHeading;
        (null === UU.drawnAngle || Math.abs(RU - UU.drawnAngle) > .005) && (UU.drawnAngle = RU, UU.element.style.rotate = `${RU}rad`)
      }
      flashEdge(UU, RU) {
        var gU, tU, pU;
        if (!this.root) return;
        let EU = this.flashes.find((RU => null === RU.angle || null === UU ? RU.angle === UU : wU(RU.angle, UU) < .5));
        if (!EU) {
          const RU = document.createElement("div");
          RU.className = "FrontlineDamageFlash";
          const gU = RU.appendChild(document.createElement("div"));
          gU.className = "FrontlineDamageFlashGlow", this.root.insertBefore(RU, this.arcLayer), EU = {
            element: RU,
            glow: gU,
            angle: UU,
            level: 0,
            animation: null
          }, this.flashes.push(EU)
        }
        const PU = null === (gU = EU.animation) || void 0 === gU || null === (tU = gU.effect) || void 0 === tU ? void 0 : tU.getComputedTiming().progress,
          TU = null === PU || void 0 === PU ? 0 : EU.level * (1 - PU);
        EU.level = Math.min(1, Math.max(RU, TU + .6 * RU)), EU.angle = UU;
        const {
          x: qU,
          y: KU,
          rx: cU,
          ry: GU
        } = function(UU, RU) {
          const gU = window.innerWidth,
            tU = window.innerHeight;
          if (null === UU) return {
            x: gU / 2,
            y: tU / 2,
            rx: 0,
            ry: 0
          };
          const pU = Math.sin(UU),
            EU = -Math.cos(UU),
            PU = gU / 2 / Math.max(1e-6, Math.abs(pU)),
            TU = tU / 2 / Math.max(1e-6, Math.abs(EU)),
            qU = Math.min(PU, TU),
            KU = Math.round(gU / 2 + pU * qU),
            cU = Math.round(tU / 2 + EU * qU),
            GU = tU / 100 * (.85 + .25 * RU),
            jU = PU <= TU,
            uU = Math.round((jU ? 30 : 74) * GU),
            CU = Math.round((jU ? 58 : 26) * GU);
          return {
            x: KU,
            y: cU,
            rx: uU,
            ry: CU
          }
        }(UU, EU.level), {
          style: jU
        } = EU.glow;
        EU.glow.classList.toggle("Everywhere", null === UU), jU.setProperty("--glowX", `${qU}px`), jU.setProperty("--glowY", `${KU}px`), jU.setProperty("--glowRx", `${cU}px`), jU.setProperty("--glowRy", `${GU}px`), EU.element.style.transformOrigin = `${qU}px ${KU}px`, null === (pU = EU.animation) || void 0 === pU || pU.cancel();
        const uU = EU.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: EU.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * EU.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * EU.level
        });
        EU.animation = uU;
        const CU = EU;
        uU.onfinish = () => {
          CU.animation === uU && (CU.element.remove(), bU(this.flashes, CU))
        }
      }
      clearHits() {
        for (const tU of this.arcs) {
          var UU, RU;
          null === (UU = tU.fade) || void 0 === UU || UU.cancel(), tU.fade = null, null === (RU = tU.pop) || void 0 === RU || RU.cancel(), tU.element.remove()
        }
        this.arcs.length = 0;
        for (const tU of this.flashes) {
          var gU;
          null === (gU = tU.animation) || void 0 === gU || gU.cancel(), tU.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function wU(UU, RU) {
      return Math.abs(Math.atan2(Math.sin(UU - RU), Math.cos(UU - RU)))
    }

    function nU(UU) {
      return Math.max(0, Math.min(1, UU))
    }

    function bU(UU, RU) {
      const gU = UU.indexOf(RU); - 1 !== gU && UU.splice(gU, 1)
    }
    var oU = gU(1037),
      ZU = gU.n(oU),
      aU = gU(36187),
      YU = gU(36280),
      BU = gU(1181),
      VU = gU(1410);
    const rU = "frontlineHudChanged",
      XU = "frontlineScoreboardChanged";
    class vU {
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
      qC(UU) {
        this.wire = UU, KU.p.yh(rU, UU, !0)
      }
      receiveScoreboard(UU) {
        let RU = "scoreboard" === UU[0] ? performance.now() + UU[5] : 0;
        const gU = this.scoreboard.endsAt;
        0 !== RU && 0 !== gU && Math.abs(RU - gU) < 1e3 && (RU = gU), this.scoreboard = {
          wire: UU,
          endsAt: RU
        }, KU.p.yh(XU, this.scoreboard, !0)
      }
    }
    var dU = gU(1090);
    const HU = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function SU(UU) {
      const [RU, gU] = (0, pU.useState)((() => (UU - performance.now()) / 1e3));
      return (0, pU.useEffect)((() => {
        if (0 === UU) return;
        const RU = () => {
          gU((UU - performance.now()) / 1e3)
        };
        RU();
        const tU = window.setInterval(RU, 250);
        return () => {
          window.clearInterval(tU)
        }
      }), [UU]), RU
    }

    function sU(UU) {
      let {
        className: RU,
        point: gU
      } = UU;
      const [tU, pU, EU, PU, TU, qU] = gU;
      return (0, dU.jsxs)("div", {
        className: ZU()(RU, `Owner-${pU||"None"}`, `Leader-${PU||"None"}`, {
          Contested: TU,
          Here: qU
        }),
        children: [(0, dU.jsx)("span", {
          className: "FrontlinePointLetter",
          children: tU
        }), (0, dU.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${EU}%`
          }
        })]
      })
    }
    const yU = (0, pU.memo)((function(UU) {
        let {
          points: RU,
          markers: gU
        } = UU;
        const {
          t: tU
        } = (0, BU.B)();
        return RU ? (0, dU.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: RU.map((UU => {
            const [RU, , , , , , , pU] = UU;
            return (0, dU.jsxs)("div", {
              ref: gU.bindMarker(RU),
              className: "FrontlinePointMarker",
              children: [(0, dU.jsx)(sU, {
                className: "FrontlinePointMarkerTile",
                point: UU
              }), (0, dU.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [pU && (0, dU.jsx)("span", {
                  className: ZU()("FrontlinePointMarkerHomeTurf", `Team-${pU}`),
                  children: tU("frontlineHud:homeTurf", {
                    team: tU(HU[pU])
                  })
                }), (0, dU.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, RU)
          }))
        }) : null
      })),
      kU = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      FU = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function iU(UU) {
      let {
        hud: RU,
        crosshair: gU,
        damage: tU,
        markers: pU
      } = UU;
      const EU = (0, VU.h)(rU, RU.getWire()),
        PU = (0, VU.h)(XU, RU.getScoreboard());
      return (0, dU.jsxs)(dU.Fragment, {
        children: [(0, dU.jsx)(AU, {
          damage: tU
        }), (0, dU.jsx)(yU, {
          points: "scoreboard" === PU.wire[0] ? PU.wire[6] : null,
          markers: pU
        }), (0, dU.jsx)(MU, {
          view: PU
        }), (0, dU.jsx)("div", {
          className: "FrontlineReticle",
          ref: gU.bindElement
        }), (0, dU.jsx)(aU.e, {
          children: (0, dU.jsx)(zU, {
            wire: EU
          })
        })]
      })
    }
    const AU = (0, pU.memo)((function(UU) {
        let {
          damage: RU
        } = UU;
        return (0, dU.jsxs)("div", {
          className: "FrontlineDamage",
          ref: RU.bindElement,
          children: [(0, dU.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, dU.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, dU.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      zU = (0, pU.memo)((function(UU) {
        let {
          wire: RU
        } = UU;
        const {
          t: gU
        } = (0, BU.B)();
        if ("capture" === RU[0]) {
          const [, UU, tU, pU, EU, PU, TU] = RU, qU = Math.round(pU / 100 * 24);
          return (0, dU.jsxs)("div", {
            className: ZU()("FrontlinePlate", `Status-${tU}`, `Leader-${EU||"None"}`),
            children: [(0, dU.jsx)(lU, {}), (0, dU.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, dU.jsx)("span", {
                className: "FrontlineObjective",
                children: UU
              }), (0, dU.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, dU.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: gU("frontlineHud:objective", {
                    point: UU,
                    friendly: PU,
                    enemy: TU
                  })
                }), (0, dU.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: gU(kU[tU])
                })]
              }), (0, dU.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(pU).padStart(3, "0"), (0, dU.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, dU.jsx)(LU, {
              segments: 24,
              lit: qU
            })]
          })
        }
        if ("alert" === RU[0]) {
          const [, UU, tU, pU] = RU;
          return (0, dU.jsxs)("div", {
            className: ZU()("FrontlinePlate", "FrontlineAlert", `Tone-${pU}`),
            children: [(0, dU.jsx)(lU, {}), (0, dU.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: gU(FU[UU])
            }), (0, dU.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: tU
            })]
          })
        }
        return null
      })),
      MU = (0, pU.memo)((function(UU) {
        let {
          view: RU
        } = UU;
        const {
          t: gU
        } = (0, BU.B)(), tU = (0, pU.useRef)(null), EU = function(UU, RU) {
          const [gU, tU] = (0, pU.useState)(!1);
          return (0, pU.useLayoutEffect)((() => {
            const RU = UU.current;
            if (!RU) return;
            const gU = document.querySelector(`.${YU.f}`),
              pU = document.querySelector(`.${YU.i}`),
              EU = () => {
                var UU;
                const EU = RU.querySelector(".FrontlineTeamTrack"),
                  PU = (0, qU.getRemInPx)(),
                  TU = RU.getBoundingClientRect().width - 2 * (null !== (UU = null === EU || void 0 === EU ? void 0 : EU.getBoundingClientRect().width) && void 0 !== UU ? UU : 0),
                  KU = window.innerWidth / 2,
                  cU = gU ? gU.getBoundingClientRect().right : 0,
                  GU = pU ? pU.getBoundingClientRect().left : window.innerWidth,
                  jU = Math.min(KU - cU, GU - KU) - YU.d - TU / 2,
                  uU = jU < 6 * PU,
                  CU = uU ? (window.innerWidth - TU) / 2 - YU.d : jU;
                RU.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(CU,14*PU)))}px`), tU(uU)
              };
            EU();
            const PU = new ResizeObserver(EU);
            for (const UU of [RU, gU, pU]) UU && PU.observe(UU);
            return window.addEventListener("resize", EU), () => {
              PU.disconnect(), window.removeEventListener("resize", EU)
            }
          }), [UU, RU]), gU
        }(tU, "scoreboard" === RU.wire[0]);
        if ("scoreboard" !== RU.wire[0]) return null;
        const [, PU, TU, KU, cU, , GU] = RU.wire, jU = "Red" === PU ? "Blue" : "Red";
        return (0, dU.jsxs)("div", {
          className: ZU()("FrontlineScoreboardContainer", {
            Below: EU
          }),
          children: [(0, dU.jsxs)("div", {
            ref: tU,
            className: "FrontlineScoreboard",
            children: [(0, dU.jsx)(lU, {}), (0, dU.jsx)(DU, {
              team: PU,
              tickets: TU,
              goal: cU,
              side: "Friendly"
            }), (0, dU.jsx)("div", {
              className: "FrontlinePoints",
              children: GU.map((UU => (0, dU.jsx)(sU, {
                className: "FrontlinePoint",
                point: UU
              }, UU[0])))
            }), (0, dU.jsx)(DU, {
              team: jU,
              tickets: KU,
              goal: cU,
              side: "Enemy"
            })]
          }), (0, dU.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, dU.jsx)(NU, {
              endsAt: RU.endsAt
            }), (0, dU.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: gU("frontlineHud:ticketGoal", {
                goal: cU
              })
            })]
          })]
        })
      }));

    function DU(UU) {
      let {
        team: RU,
        tickets: gU,
        goal: tU,
        side: pU
      } = UU;
      const {
        t: EU
      } = (0, BU.B)(), PU = String(gU).padStart(3, "0"), TU = PU.search(/[1-9]/), qU = -1 === TU ? PU : PU.slice(0, TU), KU = Math.min(20, Math.floor(gU / tU * 20));
      return (0, dU.jsxs)("div", {
        className: ZU()("FrontlineTeamScore", pU, `Team-${RU}`),
        children: [(0, dU.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, dU.jsx)("span", {
            className: "Lead",
            children: qU
          }), -1 !== TU && PU.slice(TU)]
        }), (0, dU.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, dU.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: EU(HU[RU])
          }), (0, dU.jsx)(LU, {
            segments: 20,
            lit: KU
          })]
        })]
      })
    }

    function LU(UU) {
      let {
        segments: RU,
        lit: gU
      } = UU;
      return (0, dU.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: RU
        }, ((UU, RU) => (0, dU.jsx)("i", {
          className: ZU()({
            Lit: RU < gU
          })
        }, RU)))
      })
    }

    function NU(UU) {
      let {
        endsAt: RU
      } = UU;
      const gU = Math.max(0, Math.ceil(SU(RU)));
      return (0, dU.jsxs)("div", {
        className: ZU()("FrontlineClock", {
          Urgent: gU <= 60
        }),
        children: [Math.floor(gU / 60), ":", String(gU % 60).padStart(2, "0")]
      })
    }

    function lU() {
      return (0, dU.jsxs)(dU.Fragment, {
        children: [(0, dU.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, dU.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var OU = gU(36275),
      UR = gU(1249),
      RR = gU(38046),
      gR = gU(38083);
    class tR {
      constructor(UU) {
        var RU;
        this.hud = UU, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.pC = !1, this.Xx = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Xx), null === (RU = window.visualViewport) || void 0 === RU || RU.addEventListener("resize", this.Xx)
      }
      bindMarker(UU) {
        let RU = this.refs.get(UU);
        return RU || (RU = RU => {
          var gU;
          null === (gU = this.markers.get(UU)) || void 0 === gU || gU.stopObserving(), this.markers.delete(UU), RU && !this.pC && this.markers.set(UU, this.mount(RU))
        }, this.refs.set(UU, RU)), RU
      }
      frame(UU, RU) {
        this.render = UU;
        const gU = this.hud.getScoreboard().wire;
        if ("scoreboard" === gU[0] && 0 !== this.markers.size)
          for (const [tU, , , , , , pU] of gU[6]) {
            const UU = this.markers.get(tU);
            UU && pU && (UU.target ??= [0, 0, 0], UU.target[0] = pU[0], UU.target[1] = pU[1] + 2.5, UU.target[2] = pU[2], this.place(UU), this.pE(UU, RU && Math.hypot(pU[0] - RU[0], pU[1] - RU[1], pU[2] - RU[2])))
          }
      }
      dispose() {
        var UU;
        this.pC = !0, window.removeEventListener("resize", this.Xx), null === (UU = window.visualViewport) || void 0 === UU || UU.removeEventListener("resize", this.Xx);
        for (const RU of this.markers.values()) RU.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(UU) {
        const {
          render: RU,
          viewport: gU
        } = this;
        if (!RU || !UU.target) return;
        const tU = (50 - RU.screenBandPct.y) / 100 * gU.height,
          pU = {
            x: UU.halfSize.width + 8,
            top: UU.halfSize.height + 8,
            bottom: UU.halfSize.height + UU.labelsBelow + tU
          },
          EU = RU.projectWorldPosToViewport(UU.target),
          PU = null !== EU && void 0 !== EU ? EU : RU.projectWorldPosToScreenPos(UU.target),
          TU = (0, gR.e)({
            x: PU.x,
            y: PU.y,
            text: EU
          }, pU, gU);
        (0, RR.c)(UU.root, Math.round(100 * TU.x) / 100, Math.round(100 * TU.y) / 100)
      }
      pE(UU, RU) {
        if (null === RU) return void(null !== UU.metres && (UU.metres = null, UU.distance.textContent = ""));
        const gU = Date.now();
        (null === UU.metres || (0, OU.d)(RU, UU.metres, UU.metresShownAt)) && (UU.metres = Math.round(RU), UU.metresShownAt = gU, UU.distance.textContent = (0, BU.x)(UR.g.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(UU.metres)
        }))
      }
      mount(UU) {
        const RU = {
            root: UU,
            distance: UU.querySelector(".FrontlinePointMarkerDistance"),
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
          gU = UU.querySelector(".FrontlinePointMarkerLabels"),
          tU = new ResizeObserver((() => {
            RU.halfSize = {
              width: Math.max(UU.offsetWidth, gU.offsetWidth) / 2,
              height: UU.offsetHeight / 2
            }, RU.labelsBelow = gU.offsetTop + gU.offsetHeight - UU.offsetHeight, this.place(RU)
          }));
        return tU.observe(UU, {
          box: "border-box"
        }), tU.observe(gU, {
          box: "border-box"
        }), RU.stopObserving = () => {
          tU.disconnect()
        }, RU
      }
    }
    var pR = gU(6127),
      ER = gU(2401);
    const PR = "frontlineRoundEndChanged";
    class TR {
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
      qC(UU) {
        const RU = "roundEnd" === UU[0] ? performance.now() + UU[5] : 0;
        this.view = {
          wire: UU,
          key: this.view.key + 1,
          endsAt: RU
        }, KU.p.yh(PR, this.view, !0)
      }
    }
    const qR = (0, pU.lazy)((() => (0, ER.e)(gU.e(191).then((() => gU(41107))), (UU => UU.FrontlineMvpLineup)))),
      KR = [4800, 4e3, 3200],
      cR = [1, 0, 2],
      GR = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      jR = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function uR(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, VU.h)(PR, RU.getView()),
        tU = SU(gU.endsAt);
      return "roundEnd" !== gU.wire[0] || 1e3 * tU < -2e3 ? null : (0, dU.jsx)(CR, {
        wire: gU.wire,
        secondsLeft: Math.max(0, Math.ceil(tU))
      }, gU.key)
    }
    const CR = (0, pU.memo)((function(UU) {
      let {
        wire: RU,
        secondsLeft: gU
      } = UU;
      const {
        t: EU
      } = (0, BU.B)(), [, PU, TU, qU, KU, , cU, GU] = RU, jU = (0, pU.useMemo)((() => cR.filter((UU => UU < GU.length))), [GU]), uU = (0, pU.useMemo)((() => jU.map((UU => {
        const [, , , , , RU, gU] = GU[UU];
        return {
          cosmetics: tU.map(((UU, gU) => [UU, RU[gU]])),
          size: 0 === UU ? 1.15 : .85,
          heldGun: {
            name: gU,
            aimed: 0 === UU
          },
          showAfterMs: KR[UU]
        }
      }))), [GU, jU]);
      return (0, dU.jsxs)("div", {
        className: ZU()("FrontlineRoundEnd", `Result-${PU}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, dU.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, dU.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, dU.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, dU.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, dU.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (CU = EU(GR[PU]), /\p{Script=Arabic}/u.test(CU) ? [CU] : (0, pR.e)(CU)).map(((UU, RU) => (0, dU.jsx)("span", {
              style: {
                "--letter": RU
              },
              children: UU
            }, RU)))]
          }), (0, dU.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [TU && "victory" === PU && (0, dU.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: EU("frontlineRoundEnd:comeback")
            }), (0, dU.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, dU.jsx)("b", {
                className: "Friendly",
                children: qU
              }), " \u2013 ", (0, dU.jsx)("b", {
                className: "Enemy",
                children: KU
              })]
            })]
          })]
        }), jU.length > 0 && (0, dU.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": jU.length
          },
          children: [(0, dU.jsx)(pU.Suspense, {
            fallback: null,
            children: (0, dU.jsx)(qR, {
              className: "FrontlineRoundEndLineup",
              players: uU
            })
          }), jU.map((UU => (0, dU.jsx)(hR, {
            mvp: GU[UU],
            place: UU
          }, UU)))]
        }), (0, dU.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: EU("frontlineRoundEnd:nextFront", {
            map: cU,
            seconds: String(gU)
          })
        })]
      });
      var CU
    }));

    function hR(UU) {
      let {
        mvp: RU,
        place: gU
      } = UU;
      const {
        t: tU
      } = (0, BU.B)(), [pU, EU, PU, TU, qU] = RU, [KU, cU] = tU(function(UU, RU) {
        return 1 === RU && "damage" !== UU ? `frontlineRoundEnd:${UU}One` : `frontlineRoundEnd:${UU}`
      }(PU, TU), {
        name: "\0",
        count: TU.toLocaleString()
      }).split("\0");
      return (0, dU.jsxs)("div", {
        className: ZU()("FrontlineMvpCard", `Place-${gU+1}`, `Team-${EU}`),
        style: {
          "--revealMs": `${KR[gU]}ms`
        },
        children: [(0, dU.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, dU.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, dU.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: tU(jR[gU])
        }), (0, dU.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [KU, (0, dU.jsx)("span", {
            className: "FrontlineMvpName",
            children: pU
          }), cU]
        }), (0, dU.jsx)("div", {
          className: "FrontlineMvpKit",
          children: qU
        })]
      })
    }
    const QR = function(UU, RU, gU, tU) {
      let {
        localPlayerId: PU
      } = tU;
      const TU = new vU,
        qU = new TR;
      let KU = null,
        cU = null,
        GU = null,
        jU = null,
        uU = null,
        CU = [!1, !1];
      const hU = () => {
        var UU, RU;
        const [gU, tU] = CU;
        null === (UU = cU) || void 0 === UU || UU.GJ(!gU), null === (RU = GU) || void 0 === RU || RU.GJ(!tU)
      };
      return {
        onCreate: UU => {
          KU = UU, cU = new fU(UU, PU), GU = new JU(UU, PU), jU = new tR(TU), hU(), uU = (0, EU.y)((0, pU.createElement)(pU.Fragment, null, (0, pU.createElement)(iU, {
            hud: TU,
            crosshair: cU,
            damage: GU,
            markers: jU
          }), (0, pU.createElement)(uR, {
            controller: qU
          })))
        },
        onClose: () => {
          var UU, RU, gU, tU;
          null === (UU = uU) || void 0 === UU || UU(), null === (RU = cU) || void 0 === RU || RU.dispose(), cU = null, null === (gU = GU) || void 0 === gU || gU.dispose(), GU = null, null === (tU = jU) || void 0 === tU || tU.dispose(), jU = null, KU = null
        },
        onAfterRender: (UU, RU) => {
          var gU, tU, pU, EU;
          null === (gU = cU) || void 0 === gU || gU.frame(UU, RU.tanHalfFovY), null === (tU = GU) || void 0 === tU || tU.frame(RU.cameraHeading), null === (pU = jU) || void 0 === pU || pU.frame(RU, null !== (EU = KU) && void 0 !== EU && EU.checkValid(PU) ? KU.Hx(PU) : null)
        },
        onReceivedMessageFromServer: (UU, RU) => {
          "frontlineHud" === UU ? TU.qC(RU) : "frontlineScoreboard" === UU ? TU.receiveScoreboard(RU) : "frontlineRoundEnd" === UU ? qU.qC(RU) : "frontlinePrefs" === UU && (CU = RU, hU())
        }
      }
    }
  },
  6127: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    const tU = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function pU(UU) {
      return null === tU ? Array.from(UU) : Array.from(tU.segment(UU), (UU => {
        let {
          segment: RU
        } = UU;
        return RU
      }))
    }
  },
  38046: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      g: () => EU
    });
    const tU = new WeakMap;

    function pU(UU) {
      let RU = tU.get(UU);
      return RU || (RU = {
        hidden: UU.hidden,
        x: NaN,
        y: NaN
      }, tU.set(UU, RU)), RU
    }

    function EU(UU, RU) {
      const gU = pU(UU);
      gU.hidden !== RU && (gU.hidden = RU, UU.hidden = RU)
    }

    function PU(UU, RU, gU) {
      const tU = pU(UU);
      tU.x === RU && tU.y === gU || (tU.x = RU, tU.y = gU, UU.style.translate = `${RU}vw ${gU}vh`)
    }
  },
  36573: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    const tU = {
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
for (const UU in modules) Object.freeze(modules[UU]);