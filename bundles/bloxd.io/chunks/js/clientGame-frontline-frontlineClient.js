export const id = 17;
export const ids = [17];
export const modules = {
  36946: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => QG,
      d: () => KG,
      g: () => fG,
      j: () => pG
    });
    var wG = ZG(34472),
      SG = ZG(36951),
      LG = ZG(36955),
      yG = ZG(8759),
      kG = ZG(1389),
      UG = ZG(51),
      YG = ZG(59),
      VG = ZG(1067);

    function pG() {
      var GG;
      return (0, kG.j)(SG.c, (0, SG.l)()), (0, VG.jsx)(VG.Fragment, {
        children: null === (GG = (0, SG.l)()) || void 0 === GG ? void 0 : GG.content
      })
    }

    function fG(GG) {
      var bG;
      let {
        show: ZG
      } = GG;
      (0, kG.j)(SG.c, (0, SG.l)());
      const YG = null === (bG = (0, SG.l)()) || void 0 === bG ? void 0 : bG.menu;
      return (0, UG.useEffect)((() => {
        var GG;
        ZG || (null === YG || void 0 === YG || null === (GG = YG.onClose) || void 0 === GG || GG.call(YG), (0, LG.m)())
      }), [ZG, YG]), (0, UG.useEffect)((() => ZG ? (0, yG.g)(LG.t, LG.f) : void 0), [ZG]), (0, VG.jsx)(wG.b, {
        showing: ZG,
        globallyUniqueKey: "clientGameMenu",
        children: null === YG || void 0 === YG ? void 0 : YG.content
      })
    }

    function QG(GG) {
      let {
        placement: bG = "bottom"
      } = GG;
      return (0, VG.jsx)("div", {
        id: `clientGameHud-${bG}`,
        style: {
          display: "contents"
        }
      })
    }

    function KG(GG) {
      let {
        children: bG,
        placement: ZG = "bottom"
      } = GG;
      const [wG, SG] = (0, UG.useState)(null);
      return (0, UG.useEffect)((() => {
        SG(document.getElementById(`clientGameHud-${ZG}`))
      }), [ZG]), wG ? (0, YG.createPortal)(bG, wG) : null
    }
  },
  34472: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(4558),
      SG = ZG(4561);

    function LG(GG) {
      let {
        children: bG,
        showing: ZG,
        globallyUniqueKey: LG,
        alwaysMountChildren: yG = !1,
        doGameplayStartStopOnShow: kG = !0,
        keepsMovement: UG = !1
      } = GG;
      return (0, SG.e)(!0, ZG, LG, UG), (0, wG.d)(kG, ZG), ZG || yG ? bG : null
    }
  },
  37039: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      e: () => yG,
      f: () => kG,
      i: () => UG
    });
    var wG = ZG(51),
      SG = ZG(3100);
    const LG = 8,
      yG = "InGameHeaderContainer",
      kG = "TopRightElements";

    function UG(GG) {
      const [bG] = (0, SG.b)(), [ZG, UG] = (0, wG.useState)(!1);
      return (0, wG.useLayoutEffect)((() => {
        if (!GG) return;
        const bG = document.querySelector(`.${yG}`),
          ZG = document.querySelector(`.${kG}`),
          wG = () => {
            const wG = GG.getBoundingClientRect(),
              SG = bG ? bG.getBoundingClientRect().right : 0,
              yG = ZG ? ZG.getBoundingClientRect().left : window.innerWidth,
              kG = wG.left < SG + LG,
              YG = wG.right > yG - LG;
            UG(kG || YG)
          };
        wG();
        const SG = new ResizeObserver(wG);
        return SG.observe(GG), bG && SG.observe(bG), ZG && SG.observe(ZG), () => {
          SG.disconnect()
        }
      }), [GG, bG]), ZG
    }
  },
  37035: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG
    });
    const wG = [{
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

    function SG(GG, bG, ZG) {
      const SG = Math.abs(GG - bG),
        LG = Date.now() - ZG;
      for (const yG of wG)
        if (GG < yG.maxDist) return SG >= yG.hardUpdateDist || LG > yG.timeBetweenSoftChecks && SG >= yG.softUpdateDist;
      return !1
    }
  },
  8759: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = null;
    const SG = function(GG) {
        const bG = {
          cycle: GG,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wG = bG, () => {
          wG === bG && (wG = null)
        }
      },
      LG = () => {
        var GG;
        return null !== (GG = wG) && void 0 !== GG && GG.canCycle() ? wG.cycle : null
      }
  },
  38957: (GG, bG, ZG) => {
    function wG(GG, bG, ZG) {
      var wG;
      const {
        width: SG,
        height: LG
      } = ZG, yG = null !== (wG = GG.text) && void 0 !== wG ? wG : GG, kG = (yG.x / 100 - .5) * SG, UG = (yG.y / 100 - .5) * LG, YG = SG / 2 - bG.x;
      if (null !== GG.text && Math.abs(kG) <= YG && UG >= bG.top - LG / 2 && UG <= LG / 2 - bG.bottom) return {
        x: yG.x,
        y: yG.y
      };
      const VG = Math.min(0 === kG ? 1 / 0 : YG / Math.abs(kG), UG > 0 ? (LG / 2 - bG.bottom) / UG : UG < 0 ? (bG.top - LG / 2) / UG : 1 / 0);
      return !Number.isFinite(VG) || VG < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + kG * VG / SG * 100,
        y: 50 + UG * VG / LG * 100
      }
    }
    ZG.d(bG, {
      c: () => wG
    })
  },
  36955: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG,
      f: () => hG,
      h: () => dG,
      j: () => kG,
      k: () => fG,
      m: () => JG,
      p: () => pG,
      r: () => zG,
      t: () => KG,
      x: () => rG
    });
    var wG = ZG(17),
      SG = ZG(19);
    const LG = "clientGameInventoryButtonsChanged",
      yG = new Map;

    function kG() {
      return [...yG.values()].sort(((GG, bG) => {
        var ZG, wG;
        return (null !== (ZG = GG.order) && void 0 !== ZG ? ZG : 0) - (null !== (wG = bG.order) && void 0 !== wG ? wG : 0)
      }))
    }
    let UG = null;

    function YG(GG) {
      UG = GG
    }
    let VG = !1;

    function pG(GG) {
      VG = !0;
      try {
        GG.onClick()
      } finally {
        VG = !1
      }
      GG.panel && "clientGame" === wG.e.get("openInGameMenuName") && YG(GG.id)
    }

    function fG() {
      return VG
    }

    function QG() {
      return kG().filter((GG => GG.panel && !GG.disabled))
    }

    function KG(GG) {
      const bG = QG(),
        ZG = bG.findIndex((GG => GG.id === UG));
      return !(ZG < 0 || bG.length < 2) && (pG(bG[(ZG + GG + bG.length) % bG.length]), !0)
    }

    function hG() {
      return null !== UG && QG().length > 1
    }

    function dG() {
      YG(null)
    }

    function JG() {
      "inventory" !== wG.e.get("openInGameMenuName") && YG(null)
    }

    function rG() {
      const GG = UG;
      return YG(null), GG
    }

    function zG(GG) {
      return yG.set(GG.id, GG), SG.l.xh(LG, kG(), !0), () => {
        yG.get(GG.id) === GG && (yG.delete(GG.id), SG.l.xh(LG, kG()))
      }
    }
  },
  36951: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      f: () => dG,
      i: () => JG,
      j: () => fG,
      l: () => YG,
      m: () => hG,
      n: () => QG,
      q: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(1251),
      yG = ZG(36955);
    const kG = "clientGameUiChanged";
    let UG = null;

    function YG() {
      return UG
    }

    function VG(GG, bG) {
      const ZG = {
        content: GG,
        menu: bG
      };
      return UG = ZG, SG.l.xh(kG, UG, !0), () => {
        UG === ZG && (UG = null, KG = !1, dG(), SG.l.xh(kG, null))
      }
    }
    let pG = null;

    function fG() {
      return pG
    }

    function QG(GG) {
      return pG = GG, () => {
        pG === GG && (pG = null)
      }
    }
    let KG = !1;

    function hG() {
      const GG = wG.e.get("openInGameMenuName");
      "clientGame" !== GG && (KG = "inventory" === GG), (0, yG.k)() || (0, yG.h)(), (0, LG.z)(LG.e), wG.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dG() {
      rG(!1)
    }

    function JG() {
      rG(KG)
    }

    function rG(GG) {
      "clientGame" === wG.e.get("openInGameMenuName") && wG.e.set({
        openInGameMenuName: GG ? "inventory" : null
      }), GG || (0, yG.h)(), KG = !1
    }
  },
  39851: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => db
    });
    const wG = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var SG = ZG(51),
      LG = ZG(36951),
      yG = ZG(37396),
      kG = ZG(36965),
      UG = ZG(1702),
      YG = ZG(19);
    const VG = {
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
    const pG = 32;

    function fG(GG, bG, ZG, wG) {
      return {
        tag: "line",
        attrs: {
          x1: GG,
          y1: bG,
          x2: ZG,
          y2: wG,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function QG(GG) {
      return {
        tag: "circle",
        attrs: {
          cx: pG,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pG,
          r: GG,
          class: "Fill"
        }
      }
    }

    function KG(GG, bG) {
      return {
        tag: "path",
        attrs: {
          d: GG,
          "stroke-width": bG
        }
      }
    }

    function hG(GG, bG, ZG) {
      return {
        tag: "circle",
        attrs: {
          cx: pG,
          cy: pG,
          r: GG,
          "stroke-width": bG,
          class: ZG
        }
      }
    }

    function dG(GG, bG, ZG) {
      return {
        tag: "text",
        attrs: {
          x: GG,
          y: bG,
          class: "Fill Label"
        },
        text: ZG
      }
    }
    const JG = {
      pistol: GG => [fG(pG, pG - GG - 5, pG, pG - GG), fG(pG - GG - 5, pG, pG - GG, pG), fG(pG + GG, pG, pG + GG + 5, pG), QG(1.4)],
      rifle: GG => [fG(pG, pG - GG - 8, pG, pG - GG), fG(pG, pG + GG, pG, pG + GG + 8), fG(pG - GG - 8, pG, pG - GG, pG), fG(pG + GG, pG, pG + GG + 8, pG), QG(1)],
      smg: GG => {
        const bG = Math.PI / 2,
          ZG = [];
        for (let yG = 0; yG < 4; yG++) ZG.push((SG = yG * bG + .35, LG = (yG + 1) * bG - .35, KG(`M${pG+(wG=6+GG)*Math.cos(SG)} ${pG+wG*Math.sin(SG)} A${wG} ${wG} 0 0 1 ${pG+wG*Math.cos(LG)} ${pG+wG*Math.sin(LG)}`, 2)));
        var wG, SG, LG;
        return [...ZG, QG(1.4)]
      },
      shotgun: GG => [hG(GG, 3, "Ring Outline"), hG(GG, 1.5, "Ring")],
      marksman: GG => [KG(`M${26-GG/2} ${39+GG/2} L32 33 L${38+GG/2} ${39+GG/2}`, 2), fG(14 - GG, pG, 24 - GG, pG, 1.5), fG(40 + GG, pG, 50 + GG, pG, 1.5), fG(14 - GG, 30, 14 - GG, 34, 1.5), fG(50 + GG, 30, 50 + GG, 34, 1.5)],
      machineGun: GG => {
        const bG = 10 + GG,
          ZG = [];
        for (const [wG, SG] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) ZG.push(KG(`M${pG+wG*bG} ${pG+SG*(bG-5)} L${pG+wG*bG} ${pG+SG*bG} L${pG+wG*(bG-5)} ${pG+SG*bG}`, 2));
        return [...ZG, fG(pG, 28, pG, 36, 1.5), fG(28, pG, 36, pG, 1.5)]
      },
      launcher: () => [fG(14, 30, 50, 30, 1.5), fG(pG, 24, pG, 52, 1.5), fG(28, 38, 36, 38, 1.5), fG(29, 44, 35, 44, 1.5), fG(30, 50, 34, 50, 1.5), dG(38, 40, "100"), dG(37, 46, "200"), QG(1.4, 30)],
      melee: () => [KG("M32 26 L38 32 L32 38 L26 32 Z", 1.5), QG(1.2)],
      throwable: () => [QG(1.6)]
    };

    function rG(GG) {
      let {
        tag: bG,
        attrs: ZG,
        text: wG
      } = GG, SG = `<${bG}`;
      for (const [LG, yG] of Object.entries(ZG)) SG += ` ${LG}="${yG}"`;
      return void 0 === wG ? `${SG}/>` : `${SG}>${wG}</${bG}>`
    }
    class zG {
      constructor(GG, bG) {
        this.api = GG, this.localPlayerId = bG, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = GG => {
          this.element = GG, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, GG && !this.enabled && (GG.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, UG.getRemInPx)()))
        }, this.tokens = [YG.l.subscribe("aimingOverlay", (GG => {
          this.sniperOverlay = "sniper" === GG
        })), YG.l.subscribe("mouseState", (GG => {
          let {
            isDown: bG
          } = GG;
          this.mouseDown = bG
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      DW(GG) {
        GG !== this.enabled && (this.enabled = GG, this.drawnVisible = null, GG || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(GG, bG) {
        var ZG, wG;
        if (!this.enabled) return;
        const {
          api: SG
        } = this, LG = SG.isAlive(this.localPlayerId) && null !== (ZG = null === (wG = SG.YZG(this.localPlayerId)) || void 0 === wG ? void 0 : wG.name) && void 0 !== ZG ? ZG : null, yG = (kG = LG) && VG[kG] || null;
        var kG;
        if (this.setOwnsCrosshair(null !== yG), !this.element) return;
        const UG = SG.getHeldGunInaccuracy(),
          YG = null !== UG,
          pG = null !== yG && !this.sniperOverlay && SG.isCrosshairShown();
        if (pG !== this.drawnVisible && (this.drawnVisible = pG, this.element.style.display = pG ? "block" : "none"), !pG) return;
        const fG = YG ? function(GG) {
            return "launcher" === GG || "melee" === GG || "throwable" === GG ? "none" : "shotgun" === GG ? "cone" : "offset"
          }(yG) : "none",
          QG = null !== UG && void 0 !== UG ? UG : 0;
        "cone" === fG ? this.drawCone(yG, this.coneRadiusVh(QG, bG) * this.gapPerVh, GG) : (this.coneDrawn = !1, this.draw(yG, "none" === fG ? 2 : this.offsetGap(QG)));
        const KG = !YG && this.mouseDown;
        KG !== this.drawnPressed && (this.drawnPressed = KG, this.element.classList.toggle("Pressed", KG))
      }
      dispose() {
        for (const GG of this.tokens) YG.l.unsubscribe(GG);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(GG, bG) {
        var ZG, wG;
        GG !== this.drawnFamily ? (this.drawnFamily = GG, this.drawnGap = bG, this.element.innerHTML = function(GG, bG) {
          return `<svg viewBox="0 0 64 64">${JG[GG](bG).map(rG).join("")}</svg>`
        }(GG, bG), this.shapes = Array.from(null !== (ZG = null === (wG = this.element.firstElementChild) || void 0 === wG ? void 0 : wG.children) && void 0 !== ZG ? ZG : [])) : bG !== this.drawnGap && (this.drawnGap = bG, function(GG, bG, ZG) {
          const wG = JG[bG](ZG);
          for (let SG = 0; SG < wG.length; SG++)
            for (const [bG, ZG] of Object.entries(wG[SG].attrs)) {
              const wG = String(ZG);
              GG[SG].getAttribute(bG) !== wG && GG[SG].setAttribute(bG, wG)
            }
        }(this.shapes, GG, bG))
      }
      drawCone(GG, bG, ZG) {
        GG === this.drawnFamily && this.coneDrawn ? this.shownRadius += (bG - this.shownRadius) * (1 - Math.exp(-ZG / 80)) : this.shownRadius = bG, this.coneDrawn = !0, this.draw(GG, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(GG, bG) {
        if (!(bG > 0)) return 1;
        const ZG = GG * yG.g / 2;
        return Math.max(50 * Math.tan(ZG) / bG, 1)
      }
      offsetGap(GG) {
        const bG = 2 + ((0, kG.g)(GG) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * bG) / 2)
      }
      setOwnsCrosshair(GG) {
        GG !== this.ownsCrosshair && (this.ownsCrosshair = GG, document.body.classList.toggle("FrontlineCustomCrosshair", GG))
      }
    }
    const EG = "FrontlineCustomDamage",
      oG = .45,
      XG = .2;
    class uG {
      constructor(GG, bG) {
        this.api = GG, this.localPlayerId = bG, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.aG = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = GG => {
          var bG, ZG;
          this.clearHits(), this.root = GG, this.lowLayer = null !== (bG = null === GG || void 0 === GG ? void 0 : GG.querySelector(".FrontlineDamageLow")) && void 0 !== bG ? bG : null, this.arcLayer = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.querySelector(".FrontlineDamageArcs")) && void 0 !== ZG ? ZG : null, this.showRoot(), this.drawLow()
        }, this.token = YG.l.subscribe("damagedByOtherPlayer", (GG => {
          let {
            direction: bG,
            FG: ZG
          } = GG;
          this.onHurt(bG, ZG)
        })), this.syncHealth(), document.body.classList.add(EG)
      }
      DW(GG) {
        GG !== this.enabled && (this.enabled = GG, document.body.classList.toggle(EG, GG), GG || this.clearHits(), this.showRoot())
      }
      frame(GG) {
        this.syncHealth(), this.cameraHeading = GG;
        for (const bG of this.arcs) this.drawArcAngle(bG)
      }
      dispose() {
        YG.l.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(EG)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const GG = this.api.getClientOption(this.localPlayerId, "_health"),
          bG = this.api.getClientOption(this.localPlayerId, "_shield"),
          ZG = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(GG, this.readHealth) && Object.is(bG, this.readShield) && Object.is(ZG, this.readMaxHealth)) return;
        if (this.readHealth = GG, this.readShield = bG, this.readMaxHealth = ZG, null === GG || void 0 === GG || !ZG) return this.lastHealthPool = null, this.maxHealth = null, this.aG = 1, this.dead = !1, void this.drawLow();
        const wG = GG + (null !== bG && void 0 !== bG ? bG : 0);
        if (null !== this.lastHealthPool && wG < this.lastHealthPool) {
          const GG = performance.now(),
            bG = (this.lastHealthPool - wG) / ZG;
          this.lastDrop = GG - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + bG,
            at: this.lastDrop.at
          } : {
            frac: bG,
            at: GG
          }
        }
        this.dead = GG <= 0, this.dead && this.clearHits(), this.lastHealthPool = wG, this.maxHealth = ZG, this.aG = GG > 0 ? GG / ZG : 1, this.drawLow()
      }
      onHurt(GG, bG) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const ZG = Math.min(1, this.takeDamageFrac(bG) / .3);
        null !== GG && this.showArc(GG, ZG), this.flashEdge(null === GG ? null : GG - this.cameraHeading, .4 + .6 * ZG)
      }
      takeDamageFrac(GG) {
        if (void 0 !== GG && this.maxHealth) return GG / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: bG
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, bG
      }
      drawLow() {
        if (!this.lowLayer) return;
        const GG = CG((oG - this.aG) / .25),
          bG = CG((XG - this.aG) / .15000000000000002),
          ZG = this.aG < oG;
        this.lowLayer.classList.toggle("Active", ZG), this.lowLayer.classList.toggle("Critical", this.aG < XG), this.lowLayer.style.opacity = String(ZG ? .55 + .3 * GG + .15 * bG : 0)
      }
      showArc(GG, bG) {
        var ZG, wG;
        if (!this.arcLayer) return;
        let SG = this.arcs.find((bG => iG(bG.direction, GG) < .6));
        if (!SG) {
          const bG = document.createElement("div");
          bG.className = "FrontlineDamageArc", bG.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(bG), SG = {
            element: bG,
            direction: GG,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(SG)
        }
        SG.direction = GG, this.drawArcAngle(SG);
        const LG = SG.fade ? Number(getComputedStyle(SG.element).opacity) : 0;
        null === (ZG = SG.fade) || void 0 === ZG || ZG.cancel(), null === (wG = SG.pop) || void 0 === wG || wG.cancel(), SG.element.style.opacity = "1";
        const yG = SG.element.animate([{
          opacity: LG
        }, {
          opacity: 1
        }], 144);
        SG.fade = yG, SG.pop = SG.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * bG
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const kG = SG;
        yG.onfinish = () => {
          if (kG.fade !== yG) return;
          const GG = kG.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          GG.startTime = yG.startTime, kG.fade = GG, GG.onfinish = () => {
            kG.fade === GG && (kG.element.remove(), WG(this.arcs, kG))
          }
        }
      }
      drawArcAngle(GG) {
        const bG = GG.direction - this.cameraHeading;
        (null === GG.drawnAngle || Math.abs(bG - GG.drawnAngle) > .005) && (GG.drawnAngle = bG, GG.element.style.rotate = `${bG}rad`)
      }
      flashEdge(GG, bG) {
        var ZG, wG, SG;
        if (!this.root) return;
        let LG = this.flashes.find((bG => null === bG.angle || null === GG ? bG.angle === GG : iG(bG.angle, GG) < .5));
        if (!LG) {
          const bG = document.createElement("div");
          bG.className = "FrontlineDamageFlash";
          const ZG = bG.appendChild(document.createElement("div"));
          ZG.className = "FrontlineDamageFlashGlow", this.root.insertBefore(bG, this.arcLayer), LG = {
            element: bG,
            glow: ZG,
            angle: GG,
            level: 0,
            animation: null
          }, this.flashes.push(LG)
        }
        const yG = null === (ZG = LG.animation) || void 0 === ZG || null === (wG = ZG.effect) || void 0 === wG ? void 0 : wG.getComputedTiming().progress,
          kG = null === yG || void 0 === yG ? 0 : LG.level * (1 - yG);
        LG.level = Math.min(1, Math.max(bG, kG + .6 * bG)), LG.angle = GG;
        const {
          x: UG,
          y: YG,
          rx: VG,
          ry: pG
        } = function(GG, bG) {
          const ZG = window.innerWidth,
            wG = window.innerHeight;
          if (null === GG) return {
            x: ZG / 2,
            y: wG / 2,
            rx: 0,
            ry: 0
          };
          const SG = Math.sin(GG),
            LG = -Math.cos(GG),
            yG = ZG / 2 / Math.max(1e-6, Math.abs(SG)),
            kG = wG / 2 / Math.max(1e-6, Math.abs(LG)),
            UG = Math.min(yG, kG),
            YG = Math.round(ZG / 2 + SG * UG),
            VG = Math.round(wG / 2 + LG * UG),
            pG = wG / 100 * (.85 + .25 * bG),
            fG = yG <= kG,
            QG = Math.round((fG ? 30 : 74) * pG),
            KG = Math.round((fG ? 58 : 26) * pG);
          return {
            x: YG,
            y: VG,
            rx: QG,
            ry: KG
          }
        }(GG, LG.level), {
          style: fG
        } = LG.glow;
        LG.glow.classList.toggle("Everywhere", null === GG), fG.setProperty("--glowX", `${UG}px`), fG.setProperty("--glowY", `${YG}px`), fG.setProperty("--glowRx", `${VG}px`), fG.setProperty("--glowRy", `${pG}px`), LG.element.style.transformOrigin = `${UG}px ${YG}px`, null === (SG = LG.animation) || void 0 === SG || SG.cancel();
        const QG = LG.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: LG.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * LG.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * LG.level
        });
        LG.animation = QG;
        const KG = LG;
        QG.onfinish = () => {
          KG.animation === QG && (KG.element.remove(), WG(this.flashes, KG))
        }
      }
      clearHits() {
        for (const wG of this.arcs) {
          var GG, bG;
          null === (GG = wG.fade) || void 0 === GG || GG.cancel(), wG.fade = null, null === (bG = wG.pop) || void 0 === bG || bG.cancel(), wG.element.remove()
        }
        this.arcs.length = 0;
        for (const wG of this.flashes) {
          var ZG;
          null === (ZG = wG.animation) || void 0 === ZG || ZG.cancel(), wG.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function iG(GG, bG) {
      return Math.abs(Math.atan2(Math.sin(GG - bG), Math.cos(GG - bG)))
    }

    function CG(GG) {
      return Math.max(0, Math.min(1, GG))
    }

    function WG(GG, bG) {
      const ZG = GG.indexOf(bG); - 1 !== ZG && GG.splice(ZG, 1)
    }
    var mG = ZG(1006),
      IG = ZG.n(mG),
      FG = ZG(36946),
      vG = ZG(37039),
      aG = ZG(1151),
      cG = ZG(1389);
    const lG = "frontlineHudChanged",
      jG = "frontlineScoreboardChanged";
    class PG {
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
      hK(GG) {
        this.wire = GG, YG.l.xh(lG, GG, !0)
      }
      receiveScoreboard(GG) {
        let bG = "scoreboard" === GG[0] ? performance.now() + GG[5] : 0;
        const ZG = this.scoreboard.endsAt;
        0 !== bG && 0 !== ZG && Math.abs(bG - ZG) < 1e3 && (bG = ZG), this.scoreboard = {
          wire: GG,
          endsAt: bG
        }, YG.l.xh(jG, this.scoreboard, !0)
      }
    }
    var MG = ZG(1067);
    const AG = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function sG(GG) {
      const [bG, ZG] = (0, SG.useState)((() => (GG - performance.now()) / 1e3));
      return (0, SG.useEffect)((() => {
        if (0 === GG) return;
        const bG = () => {
          ZG((GG - performance.now()) / 1e3)
        };
        bG();
        const wG = window.setInterval(bG, 250);
        return () => {
          window.clearInterval(wG)
        }
      }), [GG]), bG
    }

    function qG(GG) {
      let {
        className: bG,
        point: ZG
      } = GG;
      const [wG, SG, LG, yG, kG, UG] = ZG;
      return (0, MG.jsxs)("div", {
        className: IG()(bG, `Owner-${SG||"None"}`, `Leader-${yG||"None"}`, {
          Contested: kG,
          Here: UG
        }),
        children: [(0, MG.jsx)("span", {
          className: "FrontlinePointLetter",
          children: wG
        }), (0, MG.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${LG}%`
          }
        })]
      })
    }
    const nG = (0, SG.memo)((function(GG) {
        let {
          points: bG,
          markers: ZG
        } = GG;
        const {
          t: wG
        } = (0, aG.w)();
        return bG ? (0, MG.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: bG.map((GG => {
            const [bG, , , , , , , SG] = GG;
            return (0, MG.jsxs)("div", {
              ref: ZG.bindMarker(bG),
              className: "FrontlinePointMarker",
              children: [(0, MG.jsx)(qG, {
                className: "FrontlinePointMarkerTile",
                point: GG
              }), (0, MG.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [SG && (0, MG.jsx)("span", {
                  className: IG()("FrontlinePointMarkerHomeTurf", `Team-${SG}`),
                  children: wG("frontlineHud:homeTurf", {
                    team: wG(AG[SG])
                  })
                }), (0, MG.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, bG)
          }))
        }) : null
      })),
      gG = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      eG = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function RG(GG) {
      let {
        hud: bG,
        crosshair: ZG,
        damage: wG,
        markers: SG
      } = GG;
      const LG = (0, cG.j)(lG, bG.getWire()),
        yG = (0, cG.j)(jG, bG.getScoreboard());
      return (0, MG.jsxs)(MG.Fragment, {
        children: [(0, MG.jsx)(TG, {
          damage: wG
        }), (0, MG.jsx)(nG, {
          points: "scoreboard" === yG.wire[0] ? yG.wire[6] : null,
          markers: SG
        }), (0, MG.jsx)(tG, {
          view: yG
        }), (0, MG.jsx)("div", {
          className: "FrontlineReticle",
          ref: ZG.bindElement
        }), (0, MG.jsx)(FG.d, {
          children: (0, MG.jsx)(HG, {
            wire: LG
          })
        })]
      })
    }
    const TG = (0, SG.memo)((function(GG) {
        let {
          damage: bG
        } = GG;
        return (0, MG.jsxs)("div", {
          className: "FrontlineDamage",
          ref: bG.bindElement,
          children: [(0, MG.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, MG.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, MG.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      HG = (0, SG.memo)((function(GG) {
        let {
          wire: bG
        } = GG;
        const {
          t: ZG
        } = (0, aG.w)();
        if ("capture" === bG[0]) {
          const [, GG, wG, SG, LG, yG, kG] = bG, UG = Math.round(SG / 100 * 24);
          return (0, MG.jsxs)("div", {
            className: IG()("FrontlinePlate", `Status-${wG}`, `Leader-${LG||"None"}`),
            children: [(0, MG.jsx)(xG, {}), (0, MG.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, MG.jsx)("span", {
                className: "FrontlineObjective",
                children: GG
              }), (0, MG.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, MG.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: ZG("frontlineHud:objective", {
                    point: GG,
                    friendly: yG,
                    enemy: kG
                  })
                }), (0, MG.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: ZG(gG[wG])
                })]
              }), (0, MG.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(SG).padStart(3, "0"), (0, MG.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, MG.jsx)(NG, {
              segments: 24,
              lit: UG
            })]
          })
        }
        if ("alert" === bG[0]) {
          const [, GG, wG, SG] = bG;
          return (0, MG.jsxs)("div", {
            className: IG()("FrontlinePlate", "FrontlineAlert", `Tone-${SG}`),
            children: [(0, MG.jsx)(xG, {}), (0, MG.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ZG(eG[GG])
            }), (0, MG.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: wG
            })]
          })
        }
        return null
      })),
      tG = (0, SG.memo)((function(GG) {
        let {
          view: bG
        } = GG;
        const {
          t: ZG
        } = (0, aG.w)(), wG = (0, SG.useRef)(null), LG = function(GG, bG) {
          const [ZG, wG] = (0, SG.useState)(!1);
          return (0, SG.useLayoutEffect)((() => {
            const bG = GG.current;
            if (!bG) return;
            const ZG = document.querySelector(`.${vG.e}`),
              SG = document.querySelector(`.${vG.f}`),
              LG = () => {
                var GG;
                const LG = bG.querySelector(".FrontlineTeamTrack"),
                  yG = (0, UG.getRemInPx)(),
                  kG = bG.getBoundingClientRect().width - 2 * (null !== (GG = null === LG || void 0 === LG ? void 0 : LG.getBoundingClientRect().width) && void 0 !== GG ? GG : 0),
                  YG = window.innerWidth / 2,
                  VG = ZG ? ZG.getBoundingClientRect().right : 0,
                  pG = SG ? SG.getBoundingClientRect().left : window.innerWidth,
                  fG = Math.min(YG - VG, pG - YG) - vG.d - kG / 2,
                  QG = fG < 6 * yG,
                  KG = QG ? (window.innerWidth - kG) / 2 - vG.d : fG;
                bG.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(KG,14*yG)))}px`), wG(QG)
              };
            LG();
            const yG = new ResizeObserver(LG);
            for (const GG of [bG, ZG, SG]) GG && yG.observe(GG);
            return window.addEventListener("resize", LG), () => {
              yG.disconnect(), window.removeEventListener("resize", LG)
            }
          }), [GG, bG]), ZG
        }(wG, "scoreboard" === bG.wire[0]);
        if ("scoreboard" !== bG.wire[0]) return null;
        const [, yG, kG, YG, VG, , pG] = bG.wire, fG = "Red" === yG ? "Blue" : "Red";
        return (0, MG.jsxs)("div", {
          className: IG()("FrontlineScoreboardContainer", {
            Below: LG
          }),
          children: [(0, MG.jsxs)("div", {
            ref: wG,
            className: "FrontlineScoreboard",
            children: [(0, MG.jsx)(xG, {}), (0, MG.jsx)(DG, {
              team: yG,
              tickets: kG,
              goal: VG,
              side: "Friendly"
            }), (0, MG.jsx)("div", {
              className: "FrontlinePoints",
              children: pG.map((GG => (0, MG.jsx)(qG, {
                className: "FrontlinePoint",
                point: GG
              }, GG[0])))
            }), (0, MG.jsx)(DG, {
              team: fG,
              tickets: YG,
              goal: VG,
              side: "Enemy"
            })]
          }), (0, MG.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, MG.jsx)(OG, {
              endsAt: bG.endsAt
            }), (0, MG.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ZG("frontlineHud:ticketGoal", {
                goal: VG
              })
            })]
          })]
        })
      }));

    function DG(GG) {
      let {
        team: bG,
        tickets: ZG,
        goal: wG,
        side: SG
      } = GG;
      const {
        t: LG
      } = (0, aG.w)(), yG = String(ZG).padStart(3, "0"), kG = yG.search(/[1-9]/), UG = -1 === kG ? yG : yG.slice(0, kG), YG = Math.min(20, Math.floor(ZG / wG * 20));
      return (0, MG.jsxs)("div", {
        className: IG()("FrontlineTeamScore", SG, `Team-${bG}`),
        children: [(0, MG.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, MG.jsx)("span", {
            className: "Lead",
            children: UG
          }), -1 !== kG && yG.slice(kG)]
        }), (0, MG.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, MG.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: LG(AG[bG])
          }), (0, MG.jsx)(NG, {
            segments: 20,
            lit: YG
          })]
        })]
      })
    }

    function NG(GG) {
      let {
        segments: bG,
        lit: ZG
      } = GG;
      return (0, MG.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: bG
        }, ((GG, bG) => (0, MG.jsx)("i", {
          className: IG()({
            Lit: bG < ZG
          })
        }, bG)))
      })
    }

    function OG(GG) {
      let {
        endsAt: bG
      } = GG;
      const ZG = Math.max(0, Math.ceil(sG(bG)));
      return (0, MG.jsxs)("div", {
        className: IG()("FrontlineClock", {
          Urgent: ZG <= 60
        }),
        children: [Math.floor(ZG / 60), ":", String(ZG % 60).padStart(2, "0")]
      })
    }

    function xG() {
      return (0, MG.jsxs)(MG.Fragment, {
        children: [(0, MG.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, MG.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var BG = ZG(37035),
      Gb = ZG(1204),
      bb = ZG(38901),
      Zb = ZG(38957);
    class wb {
      constructor(GG) {
        var bG;
        this.hud = GG, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.pK = !1, this.PJ = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.PJ), null === (bG = window.visualViewport) || void 0 === bG || bG.addEventListener("resize", this.PJ)
      }
      bindMarker(GG) {
        let bG = this.refs.get(GG);
        return bG || (bG = bG => {
          var ZG;
          null === (ZG = this.markers.get(GG)) || void 0 === ZG || ZG.stopObserving(), this.markers.delete(GG), bG && !this.pK && this.markers.set(GG, this.mount(bG))
        }, this.refs.set(GG, bG)), bG
      }
      frame(GG, bG) {
        this.render = GG;
        const ZG = this.hud.getScoreboard().wire;
        if ("scoreboard" === ZG[0] && 0 !== this.markers.size)
          for (const [wG, , , , , , SG] of ZG[6]) {
            const GG = this.markers.get(wG);
            GG && SG && (GG.target ??= [0, 0, 0], GG.target[0] = SG[0], GG.target[1] = SG[1] + 2.5, GG.target[2] = SG[2], this.place(GG), this.Mb(GG, bG && Math.hypot(SG[0] - bG[0], SG[1] - bG[1], SG[2] - bG[2])))
          }
      }
      dispose() {
        var GG;
        this.pK = !0, window.removeEventListener("resize", this.PJ), null === (GG = window.visualViewport) || void 0 === GG || GG.removeEventListener("resize", this.PJ);
        for (const bG of this.markers.values()) bG.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(GG) {
        const {
          render: bG,
          viewport: ZG
        } = this;
        if (!bG || !GG.target) return;
        const wG = (50 - bG.screenBandPct.y) / 100 * ZG.height,
          SG = {
            x: GG.halfSize.width + 8,
            top: GG.halfSize.height + 8,
            bottom: GG.halfSize.height + GG.labelsBelow + wG
          },
          LG = bG.projectWorldPosToViewport(GG.target),
          yG = null !== LG && void 0 !== LG ? LG : bG.projectWorldPosToScreenPos(GG.target),
          kG = (0, Zb.c)({
            x: yG.x,
            y: yG.y,
            text: LG
          }, SG, ZG);
        (0, bb.d)(GG.root, Math.round(100 * kG.x) / 100, Math.round(100 * kG.y) / 100)
      }
      Mb(GG, bG) {
        if (null === bG) return void(null !== GG.metres && (GG.metres = null, GG.distance.textContent = ""));
        const ZG = Date.now();
        (null === GG.metres || (0, BG.d)(bG, GG.metres, GG.metresShownAt)) && (GG.metres = Math.round(bG), GG.metresShownAt = ZG, GG.distance.textContent = (0, aG.r)(Gb.d.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(GG.metres)
        }))
      }
      mount(GG) {
        const bG = {
            root: GG,
            distance: GG.querySelector(".FrontlinePointMarkerDistance"),
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
          ZG = GG.querySelector(".FrontlinePointMarkerLabels"),
          wG = new ResizeObserver((() => {
            bG.halfSize = {
              width: Math.max(GG.offsetWidth, ZG.offsetWidth) / 2,
              height: GG.offsetHeight / 2
            }, bG.labelsBelow = ZG.offsetTop + ZG.offsetHeight - GG.offsetHeight, this.place(bG)
          }));
        return wG.observe(GG, {
          box: "border-box"
        }), wG.observe(ZG, {
          box: "border-box"
        }), bG.stopObserving = () => {
          wG.disconnect()
        }, bG
      }
    }
    var Sb = ZG(6453),
      Lb = ZG(2602);
    const yb = "frontlineRoundEndChanged";
    class kb {
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
      hK(GG) {
        const bG = "roundEnd" === GG[0] ? performance.now() + GG[5] : 0;
        this.view = {
          wire: GG,
          key: this.view.key + 1,
          endsAt: bG
        }, YG.l.xh(yb, this.view, !0)
      }
    }
    const Ub = (0, SG.lazy)((() => (0, Lb.e)(Promise.all([ZG.e(239), ZG.e(202)]).then((() => ZG(42210))), (GG => GG.FrontlineMvpLineup)))),
      Yb = [4800, 4e3, 3200],
      Vb = [1, 0, 2],
      pb = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      fb = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function Qb(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, cG.j)(yb, bG.getView()),
        wG = sG(ZG.endsAt);
      return "roundEnd" !== ZG.wire[0] || 1e3 * wG < -2e3 ? null : (0, MG.jsx)(Kb, {
        wire: ZG.wire,
        secondsLeft: Math.max(0, Math.ceil(wG))
      }, ZG.key)
    }
    const Kb = (0, SG.memo)((function(GG) {
      let {
        wire: bG,
        secondsLeft: ZG
      } = GG;
      const {
        t: LG
      } = (0, aG.w)(), [, yG, kG, UG, YG, , VG, pG] = bG, fG = (0, SG.useMemo)((() => Vb.filter((GG => GG < pG.length))), [pG]), QG = (0, SG.useMemo)((() => fG.map((GG => {
        const [, , , , , bG, ZG] = pG[GG];
        return {
          cosmetics: wG.map(((GG, ZG) => [GG, bG[ZG]])),
          size: 0 === GG ? 1.15 : .85,
          heldGun: {
            name: ZG,
            aimed: 0 === GG
          },
          showAfterMs: Yb[GG]
        }
      }))), [pG, fG]);
      return (0, MG.jsxs)("div", {
        className: IG()("FrontlineRoundEnd", `Result-${yG}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, MG.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, MG.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, MG.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, MG.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, MG.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (KG = LG(pb[yG]), /\p{Script=Arabic}/u.test(KG) ? [KG] : (0, Sb.d)(KG)).map(((GG, bG) => (0, MG.jsx)("span", {
              style: {
                "--letter": bG
              },
              children: GG
            }, bG)))]
          }), (0, MG.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [kG && "victory" === yG && (0, MG.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: LG("frontlineRoundEnd:comeback")
            }), (0, MG.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, MG.jsx)("b", {
                className: "Friendly",
                children: UG
              }), " \u2013 ", (0, MG.jsx)("b", {
                className: "Enemy",
                children: YG
              })]
            })]
          })]
        }), fG.length > 0 && (0, MG.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": fG.length
          },
          children: [(0, MG.jsx)(SG.Suspense, {
            fallback: null,
            children: (0, MG.jsx)(Ub, {
              className: "FrontlineRoundEndLineup",
              players: QG
            })
          }), fG.map((GG => (0, MG.jsx)(hb, {
            mvp: pG[GG],
            place: GG
          }, GG)))]
        }), (0, MG.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: LG("frontlineRoundEnd:nextFront", {
            map: VG,
            seconds: String(ZG)
          })
        })]
      });
      var KG
    }));

    function hb(GG) {
      let {
        mvp: bG,
        place: ZG
      } = GG;
      const {
        t: wG
      } = (0, aG.w)(), [SG, LG, yG, kG, UG] = bG, [YG, VG] = wG(function(GG, bG) {
        return 1 === bG && "damage" !== GG ? `frontlineRoundEnd:${GG}One` : `frontlineRoundEnd:${GG}`
      }(yG, kG), {
        name: "\0",
        count: kG.toLocaleString()
      }).split("\0");
      return (0, MG.jsxs)("div", {
        className: IG()("FrontlineMvpCard", `Place-${ZG+1}`, `Team-${LG}`),
        style: {
          "--revealMs": `${Yb[ZG]}ms`
        },
        children: [(0, MG.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, MG.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, MG.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: wG(fb[ZG])
        }), (0, MG.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [YG, (0, MG.jsx)("span", {
            className: "FrontlineMvpName",
            children: SG
          }), VG]
        }), (0, MG.jsx)("div", {
          className: "FrontlineMvpKit",
          children: UG
        })]
      })
    }
    const db = function(GG, bG, ZG, wG) {
      let {
        localPlayerId: yG
      } = wG;
      const kG = new PG,
        UG = new kb;
      let YG = null,
        VG = null,
        pG = null,
        fG = null,
        QG = null,
        KG = [!1, !1];
      const hG = () => {
        var GG, bG;
        const [ZG, wG] = KG;
        null === (GG = VG) || void 0 === GG || GG.DW(!ZG), null === (bG = pG) || void 0 === bG || bG.DW(!wG)
      };
      return {
        onCreate: GG => {
          YG = GG, VG = new zG(GG, yG), pG = new uG(GG, yG), fG = new wb(kG), hG(), QG = (0, LG.q)((0, SG.createElement)(SG.Fragment, null, (0, SG.createElement)(RG, {
            hud: kG,
            crosshair: VG,
            damage: pG,
            markers: fG
          }), (0, SG.createElement)(Qb, {
            controller: UG
          })))
        },
        onClose: () => {
          var GG, bG, ZG, wG;
          null === (GG = QG) || void 0 === GG || GG(), null === (bG = VG) || void 0 === bG || bG.dispose(), VG = null, null === (ZG = pG) || void 0 === ZG || ZG.dispose(), pG = null, null === (wG = fG) || void 0 === wG || wG.dispose(), fG = null, YG = null
        },
        onAfterRender: (GG, bG) => {
          var ZG, wG, SG, LG;
          null === (ZG = VG) || void 0 === ZG || ZG.frame(GG, bG.tanHalfFovY), null === (wG = pG) || void 0 === wG || wG.frame(bG.cameraHeading), null === (SG = fG) || void 0 === SG || SG.frame(bG, null !== (LG = YG) && void 0 !== LG && LG.checkValid(yG) ? YG.HJ(yG) : null)
        },
        onReceivedMessageFromServer: (GG, bG) => {
          "frontlineHud" === GG ? kG.hK(bG) : "frontlineScoreboard" === GG ? kG.receiveScoreboard(bG) : "frontlineRoundEnd" === GG ? UG.hK(bG) : "frontlinePrefs" === GG && (KG = bG, hG())
        }
      }
    }
  },
  6453: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG
    });
    const wG = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function SG(GG) {
      return null === wG ? Array.from(GG) : Array.from(wG.segment(GG), (GG => {
        let {
          segment: bG
        } = GG;
        return bG
      }))
    }
  },
  38901: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      g: () => LG
    });
    const wG = new WeakMap;

    function SG(GG) {
      let bG = wG.get(GG);
      return bG || (bG = {
        hidden: GG.hidden,
        x: NaN,
        y: NaN
      }, wG.set(GG, bG)), bG
    }

    function LG(GG, bG) {
      const ZG = SG(GG);
      ZG.hidden !== bG && (ZG.hidden = bG, GG.hidden = bG)
    }

    function yG(GG, bG, ZG) {
      const wG = SG(GG);
      wG.x === bG && wG.y === ZG || (wG.x = bG, wG.y = ZG, GG.style.translate = `${bG}vw ${ZG}vh`)
    }
  },
  37420: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    const wG = {
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
for (const GG in modules) Object.freeze(modules[GG]);